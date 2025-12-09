/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.082Z
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 21/25
 * Lines: 432194 - 433691 (1498 lines)
 * Original file: cli.js
 */

            else B({
                success: !1,
                message: "Export cancelled"
            })
    }), HZ.default.createElement(j, {
        width: "100%",
        flexDirection: "column"
    }, HZ.default.createElement(j, {
        borderStyle: "round",
        borderColor: "permission",
        flexDirection: "column",
        padding: 1,
        width: "100%"
    }, HZ.default.createElement(j, null, HZ.default.createElement($, {
        color: "permission",
        bold: !0
    }, "Export Conversation")), !W ? HZ.default.createElement(HZ.default.Fragment, null, HZ.default.createElement(j, {
        marginTop: 1
    }, HZ.default.createElement($, {
        dimColor: !0
    }, "Select export method:")), HZ.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, HZ.default.createElement(M0, {
        options: [{
            label: "Copy to clipboard",
            value: "clipboard",
            description: "Copy the conversation to your system clipboard"
        }, {
            label: "Save to file",
            value: "file",
            description: "Save the conversation to a file in the current directory"
        }],
        onChange: async (H) => {
            if (H === "clipboard")
                if (await Ka(A)) B({
                    success: !0,
                    message: "Conversation copied to clipboard"
                });
                else B({
                    success: !1,
                    message: MY1()
                });
            else if (H === "file") G("file"), X(!0)
        },
        onCancel: () => B({
            success: !1,
            message: "Export cancelled"
        })
    }))) : HZ.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, HZ.default.createElement($, null, "Enter filename:"), HZ.default.createElement(j, {
        flexDirection: "row",
        gap: 1,
        marginTop: 1
    }, HZ.default.createElement($, null, ">"), HZ.default.createElement(s4, {
        value: Z,
        onChange: I,
        onSubmit: () => {
            let H = Z.endsWith(".txt") ? Z : Z.replace(/\.[^.]+$/, "") + ".txt",
                C = Wk3(H0(), H);
            try {
                OA().writeFileSync(C, A, {
                    encoding: "utf-8",
                    flush: !0
                }), B({
                    success: !0,
                    message: `Conversation exported to: ${H}`
                })
            } catch (E) {
                B({
                    success: !1,
                    message: `Failed to export conversation: ${E instanceof Error?E.message:"Unknown error"}`
                })
            }
        },
        focus: !0,
        showCursor: !0,
        columns: process.stdout.columns || 80,
        cursorOffset: Y,
        onChangeCursorOffset: J
    })))), HZ.default.createElement(j, {
        marginLeft: 2
    }, W ? HZ.default.createElement($, {
        dimColor: !0
    }, "Enter to save · Esc to go back") : HZ.default.createElement(HZ.default.Fragment, null, F.pending ? HZ.default.createElement($, {
        dimColor: !0
    }, "Press ", F.keyName, " again to exit") : HZ.default.createElement($, {
        dimColor: !0
    }, "Esc to cancel"))))
}
var HZ;
var _D9 = L(() => {
    hA();
    T5();
    QY();
    c9();
    R2();
    o0();
    rjA();
    HZ = GA(VA(), 1)
});

async function kD9(A, Q = []) {
    let G = await Va(cY1.default.createElement(() => cY1.default.createElement(N7, null, cY1.default.createElement(uXA, {
        messages: A,
        normalizedMessageHistory: [],
        tools: Q,
        verbose: !1,
        toolJSX: null,
        toolUseConfirmQueue: [],
        inProgressToolUseIDs: new Set,
        isMessageSelectorVisible: !1,
        conversationId: "export",
        screen: "prompt",
        screenToggleId: 0,
        streamingToolUses: [],
        showAllInTranscript: !0
    })), null));
    return mY(G)
}
var cY1;
var SV0 = L(() => {
    HT();
    ljA();
    UI1();
    H9();
    cY1 = GA(VA(), 1)
});
import {
    join as Xk3
} from "path";

function Fk3(A) {
    let Q = A.getFullYear(),
        B = String(A.getMonth() + 1).padStart(2, "0"),
        G = String(A.getDate()).padStart(2, "0"),
        Z = String(A.getHours()).padStart(2, "0"),
        I = String(A.getMinutes()).padStart(2, "0"),
        Y = String(A.getSeconds()).padStart(2, "0");
    return `${Q}-${B}-${G}-${Z}${I}${Y}`
}

function Vk3(A) {
    let Q = A.find((Z) => Z.type === "user");
    if (!Q || Q.type !== "user") return "";
    let B = Q.message?.content,
        G = "";
    if (typeof B === "string") G = B.trim();
    else if (Array.isArray(B)) {
        let Z = B.find((I) => I.type === "text");
        if (Z && "text" in Z) G = Z.text.trim()
    }
    if (G = G.split(`
`)[0] || "", G.length > 50) G = G.substring(0, 50) + "...";
    return G
}

function Kk3(A) {
    return A.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")
}

async function Dk3(A) {
    let Q = A.options.tools || [];
    return kD9(A.messages, Q)
}
var yD9, Hk3, xD9;
var vD9 = L(() => {
    _D9();
    SV0();
    R2();
    o0();
    yD9 = GA(VA(), 1);
    Hk3 = {
        type: "local-jsx",
        name: "export",
        description: "Export the current conversation to a file or clipboard",
        isEnabled: () => !0,
        isHidden: !1,
        argumentHint: "[filename]",
        async call(A, Q, B) {
            let G = await Dk3(Q);
            if (B.trim()) {
                let J = B.trim(),
                    W = J.endsWith(".txt") ? J : J.replace(/\.[^.]+$/, "") + ".txt",
                    X = Xk3(H0(), W);
                try {
                    return OA().writeFileSync(X, G, {
                        encoding: "utf-8",
                        flush: !0
                    }), A(`Conversation exported to: ${W}`), null
                } catch (F) {
                    return A(`Failed to export conversation: ${F instanceof Error?F.message:"Unknown error"}`), null
                }
            }
            let Z = Vk3(Q.messages),
                I = Fk3(new Date),
                Y;
            if (Z) {
                let J = Kk3(Z);
                Y = J ? `${I.substring(0,10)}-${J}.txt` : `conversation-${I}.txt`
            } else Y = `conversation-${I}.txt`;
            return yD9.default.createElement(SD9, {
                content: G,
                defaultFilename: Y,
                onDone: (J) => {
                    A(J.message)
                }
            })
        },
        userFacingName() {
            return "export"
        }
    }, xD9 = Hk3
});

async function fD9(A) {
    let Q = A.trim();
    if (!Q) return {
        valid: !1,
        error: "Model name cannot be empty"
    };
    let B = Q.toLowerCase();
    if (a7A.includes(B)) return {
        valid: !0
    };
    if (bD9.has(Q)) return {
        valid: !0
    };
    try {
        let G = Iw(Q);
        return await (await Vq({
            model: Q,
            maxRetries: 0
        })).beta.messages.create({
            model: zp(Q),
            max_tokens: 1,
            messages: [{
                role: "user",
                content: [{
                    type: "text",
                    text: "Hi",
                    cache_control: {
                        type: "ephemeral"
                    }
                }]
            }],
            system: [{
                type: "text",
                text: _nA()
            }],
            metadata: fl(),
            ...G.length > 0 ? {
                betas: G
            } : {}
        }), bD9.set(Q, !0), {
            valid: !0
        }
    } catch (G) {
        return Ck3(G, Q)
    }
}

function Ck3(A, Q) {
    if (A instanceof Xt) return {
        valid: !1,
        error: `Model '${Q}' not found`
    };
    if (A instanceof a2) {
        if (A instanceof Wt) return {
            valid: !1,
            error: "Authentication failed. Please check your API credentials."
        };
        if (A instanceof GE) return {
            valid: !1,
            error: "Network error. Please check your internet connection."
        };
        let G = A.error;
        if (G && typeof G === "object" && "type" in G && G.type === "not_found_error" && "message" in G && typeof G.message === "string" && G.message.includes("model:")) return {
            valid: !1,
            error: `Model '${Q}' not found`
        };
        return {
            valid: !1,
            error: `API error: ${A.message}`
        }
    }
    return {
        valid: !1,
        error: `Unable to validate model: ${A instanceof Error?A.message:String(A)}`
    }
}
var bD9;
var hD9 = L(() => {
    EIA();
    Hf1();
    kZ();
    s2();
    ej();
    s2();
    l_();
    bD9 = new Map
});
var pY1, lY1;
var _V0 = L(() => {
    pY1 = ["help", "-h", "--help"], lY1 = ["list", "show", "display", "current", "view", "get", "check", "describe", "print", "version", "about", "status", "?"]
});

function Ek3({
    onDone: A
}) {
    let [{
        mainLoopModel: Q,
        mainLoopModelForSession: B
    }, G] = _Q();
    h1((I, Y) => {
        if (Y.escape) {
            BA("tengu_model_command_menu", {
                action: "cancel"
            });
            let J = Q ?? Cp().label;
            A(`Kept model as ${oA.bold(J)}`, {
                display: "system"
            });
            return
        }
    });

function Z(I) {
        BA("tengu_model_command_menu", {
            action: I,
            from_model: Q,
            to_model: I
        }), G((Y) => ({
            ...Y,
            mainLoopModel: I,
            mainLoopModelForSession: null
        })), A(`Set model to ${oA.bold(UM(I))}`)
    }
    return oP.createElement(YY1, {
        initial: Q,
        sessionModel: B,
        onSelect: Z,
        isStandaloneCommand: !0
    })
}

function zk3({
    args: A,
    onDone: Q
}) {
    let [B, G] = _Q(), Z = A === "default" ? null : A;
    return oP.useEffect(() => {
        // Async function: I
async function I() {
            if (Z && $k3(Z)) {
                Q("Your Pro plan doesn't include Opus in Claude Code. Turn on /extra-usage or /upgrade to Max to access it.", {
                    display: "system"
                });
                return
            }
            if (!Z) {
                Y(null);
                return
            }
            if (Uk3(Z)) {
                Y(Z);
                return
            }
            try {
                let {
                    valid: J,
                    error: W
                } = await fD9(Z);
                if (J) Y(Z);
                else Q(W || `Model '${Z}' not found`, {
                    display: "system"
                })
            } catch (J) {
                Q(`Failed to validate model: ${J.message}`, {
                    display: "system"
                })
            }
        }

function Y(J) {
            G((W) => ({
                ...W,
                mainLoopModel: J,
                mainLoopModelForSession: null
            })), Q(`Set model to ${oA.bold(UM(J))}`)
        }
        I()
    }, [Z, Q, G]), null
}

function Uk3(A) {
    return a7A.includes(A.toLowerCase().trim())
}

function $k3(A) {
    return AB() && !bw() && A.toLowerCase().includes("opus")
}

function wk3({
    onDone: A
}) {
    let [{
        mainLoopModel: Q,
        mainLoopModelForSession: B
    }] = _Q(), G = Q ?? Cp().label;
    if (B) A(`Current model: ${oA.bold(UM(B))} (session override from plan mode)
Base model: ${G}`);
    else A(`Current model: ${G}`);
    return null
}
var oP, gD9;
var uD9 = L(() => {
    WF0();
    H9();
    s2();
    hD9();
    hA();
    w0();
    J9();
    hB();
    _V0();
    oP = GA(VA(), 1);
    gD9 = {
        type: "local-jsx",
        name: "model",
        userFacingName() {
            return "model"
        },
        description: "Set the AI model for Claude Code",
        isEnabled: () => !0,
        isHidden: !1,
        argumentHint: "[model]",
        async call(A, Q, B) {
            if (B = B?.trim() || "", lY1.includes(B)) return BA("tengu_model_command_inline_help", {
                args: B
            }), oP.createElement(wk3, {
                onDone: A
            });
            if (pY1.includes(B)) {
                A("Run /model to open the model selection menu, or /model [modelName] to set the model.", {
                    display: "system"
                });
                return
            }
            if (B) return BA("tengu_model_command_inline", {
                args: B
            }), oP.createElement(zk3, {
                args: B,
                onDone: A
            });
            return oP.createElement(Ek3, {
                onDone: A
            })
        }
    }
});

function qk3({
    onDone: A
}) {
    let B = wg().outputStyle ?? EK;
    h1((I, Y) => {
        if (Y.escape) {
            BA("tengu_output_style_command_menu", {
                action: "cancel"
            }), A(`Kept output style as ${oA.bold(B)}`, {
                display: "system"
            });
            return
        }
    });

function G(I) {
        BA("tengu_output_style_command_menu", {
            action: I,
            from_style: B,
            to_style: I
        }), cB("localSettings", {
            outputStyle: I
        }), A(`Set output style to ${oA.bold(I)}`)
    }

function Z() {
        A(`Kept output style as ${oA.bold(B)}`, {
            display: "system"
        })
    }
    return gg.createElement(WY1, {
        initialStyle: B,
        onComplete: G,
        onCancel: Z,
        isStandaloneCommand: !0
    })
}

function Nk3(A, Q) {
    if (A in Q) return A;
    let B = A.toLowerCase();
    for (let G of Object.keys(Q))
        if (G.toLowerCase() === B) return G;
    return null
}

function Lk3({
    args: A,
    onDone: Q
}) {
    return _QA().then((B) => {
        let G = Nk3(A, B);
        if (!G) {
            Q(`Invalid output style: ${A}`);
            return
        }
        cB("localSettings", {
            outputStyle: G
        }), Q(`Set output style to ${oA.bold(G)}`)
    }), null
}

function Mk3({
    onDone: A
}) {
    let Q = wg();
    return A(`Current output style: ${Q.outputStyle??EK}`), null
}
var gg, mD9;
var dD9 = L(() => {
    FF0();
    hA();
    w0();
    J9();
    RB();
    gPA();
    ry();
    _V0();
    gg = GA(VA(), 1);
    mD9 = {
        type: "local-jsx",
        name: "output-style",
        userFacingName() {
            return "output-style"
        },
        description: "Set the output style directly or from a selection menu",
        isEnabled: () => !0,
        isHidden: !1,
        argumentHint: "[style]",
        async call(A, Q, B) {
            if (B = B?.trim() || "", lY1.includes(B)) return BA("tengu_output_style_command_inline_help", {
                args: B
            }), gg.createElement(Mk3, {
                onDone: A
            });
            if (pY1.includes(B)) {
                A("Run /output-style to open the output style selection menu, or /output-style [styleName] to set the output style.", {
                    display: "system"
                });
                return
            }
            if (B) return BA("tengu_output_style_command_inline", {
                args: B
            }), gg.createElement(Lk3, {
                args: B,
                onDone: A
            });
            return gg.createElement(qk3, {
                onDone: A
            })
        }
    }
});
// Async function: cD9
async function cD9() {
    let A = await kJA();
    if (A.length === 0) return {
        availableEnvironments: [],
        selectedEnvironment: null,
        selectedEnvironmentSource: null
    };
    let B = c0()?.remote?.defaultEnvironmentId,
        G = A[0],
        Z = null;
    if (B) {
        let I = A.find((Y) => Y.environment_id === B);
        if (I) {
            G = I;
            for (let Y = gN.length - 1; Y >= 0; Y--) {
                let J = gN[Y];
                if (!J || J === "flagSettings") continue;
                if (LB(J)?.remote?.defaultEnvironmentId === B) {
                    Z = J;
                    break
                }
            }
        }
    }
    return {
        availableEnvironments: A,
        selectedEnvironment: G,
        selectedEnvironmentSource: Z
    }
}
var pD9 = L(() => {
    RB();
    UF();
    X61()
});

function lD9({
    onDone: A
}) {
    let [Q, B] = Ca.useState("loading"), [G, Z] = Ca.useState([]), [I, Y] = Ca.useState(null), [J, W] = Ca.useState(null), [X, F] = Ca.useState(null);
    Ca.useEffect(() => {
        // Async function: K
async function K() {
            try {
                let D = await cD9();
                Z(D.availableEnvironments), Y(D.selectedEnvironment), W(D.selectedEnvironmentSource), B(null)
            } catch (D) {
                let H = D instanceof Error ? D.message : String(D);
                e(D instanceof Error ? D : Error(H)), F(H), B(null)
            }
        }
        K()
    }, []);

function V(K) {
        if (K === "cancel") {
            A();
            return
        }
        B("updating");
        let D = G.find((H) => H.environment_id === K);
        if (!D) {
            A("Error: Selected environment not found");
            return
        }
        cB("localSettings", {
            remote: {
                defaultEnvironmentId: D.environment_id
            }
        }), A(`Set default remote environment to ${oA.bold(D.name)} (${D.environment_id})`)
    }
    if (Q === "loading") return U8.createElement(kD, {
        title: ZSA,
        onCancel: A,
        hideInputGuide: !0
    }, U8.createElement(iD9, {
        message: "Loading environments…"
    }));
    if (X) return U8.createElement(kD, {
        title: ZSA,
        onCancel: A
    }, U8.createElement($, {
        color: "error"
    }, "Error: ", X));
    if (!I) return U8.createElement(kD, {
        title: ZSA,
        subtitle: kV0,
        onCancel: A
    }, U8.createElement($, null, "No remote environments available."));
    if (G.length === 1) return U8.createElement(Rk3, {
        environment: I,
        onDone: A
    });
    return U8.createElement(Tk3, {
        environments: G,
        selectedEnvironment: I,
        selectedEnvironmentSource: J,
        loadingState: Q,
        onSelect: V,
        onCancel: A
    })
}

function iD9({
    message: A
}) {
    return U8.createElement(j, {
        flexDirection: "row"
    }, U8.createElement(e9, null), U8.createElement($, null, A))
}

function Ok3({
    environment: A
}) {
    return U8.createElement($, null, V1.tick, " Using ", U8.createElement($, {
        bold: !0
    }, A.name), " ", U8.createElement($, {
        dimColor: !0
    }, "(", A.environment_id, ")"))
}

function Rk3({
    environment: A,
    onDone: Q
}) {
    return h1((B, G) => {
        if (G.return) Q()
    }), U8.createElement(kD, {
        title: ZSA,
        subtitle: kV0,
        onCancel: Q
    }, U8.createElement(Ok3, {
        environment: A
    }))
}

function Tk3({
    environments: A,
    selectedEnvironment: Q,
    selectedEnvironmentSource: B,
    loadingState: G,
    onSelect: Z,
    onCancel: I
}) {
    let Y = `Currently using: ${oA.bold(Q.name)}`;
    if (B && B !== "localSettings") {
        let J = wm(B);
        Y += ` (from ${J} settings)`
    }
    return U8.createElement(kD, {
        title: ZSA,
        subtitle: Y,
        onCancel: I,
        hideInputGuide: !0
    }, U8.createElement($, {
        dimColor: !0
    }, kV0), G === "updating" ? U8.createElement(iD9, {
        message: "Updating…"
    }) : U8.createElement(M0, {
        options: A.map((J) => ({
            label: `${J.name} ${oA.dim(`(${J.environment_id})`)}`,
            value: J.environment_id
        })),
        defaultValue: Q.environment_id,
        onChange: Z,
        onCancel: () => Z("cancel"),
        layout: "compact-vertical"
    }), U8.createElement($, {
        dimColor: !0
    }, "Enter to select · Esc to exit"))
}
var U8, Ca, ZSA = "Select Remote Environment",
    kV0 = "Configure environments at: https://claude.ai/code";
var nD9 = L(() => {
    hA();
    Di();
    T5();
    n2();
    zI();
    pD9();
    RB();
    u1();
    J9();
    UF();
    U8 = GA(VA(), 1), Ca = GA(VA(), 1)
});
var yV0, aD9;
var sD9 = L(() => {
    nD9();
    hB();
    yV0 = GA(VA(), 1), aD9 = {
        type: "local-jsx",
        name: "remote-env",
        userFacingName() {
            return "remote-env"
        },
        description: "Configure the default remote environment for teleport sessions",
        isEnabled: () => !0,
        get isHidden() {
            return !AB()
        },
        async call(A) {
            return yV0.createElement(lD9, {
                onDone: A
            })
        }
    }
});
var xV0, Pk3, ISA;
var vV0 = L(() => {
    u1();
    hB();
    lM();
    nZ1();
    pKA();
    xV0 = GA(VA(), 1), Pk3 = {
        type: "local-jsx",
        name: "upgrade",
        description: "Upgrade to Max for higher rate limits and more Opus",
        isEnabled: () => !process.env.DISABLE_UPGRADE_COMMAND && !Y_() && x4() !== "enterprise",
        isHidden: !1,
        async call(A, Q) {
            try {
                if (AB()) {
                    let G = U6(),
                        Z = !1;
                    if (G?.subscriptionType && G?.rateLimitTier) Z = G.subscriptionType === "max" && G.rateLimitTier === "default_claude_max_20x";
                    else if (G?.accessToken) {
                        let I = await Y4A(G.accessToken);
                        Z = I?.organization?.organization_type === "claude_max" && I?.organization?.rate_limit_tier === "default_claude_max_20x"
                    }
                    if (Z) return setTimeout(() => {
                        A("You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account.")
                    }, 0), null
                }
                return await gZ("https://claude.ai/upgrade/max"), xV0.createElement(sPA, {
                    startingMessage: "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",
                    onDone: (G) => {
                        Q.onChangeAPIKey(), A(G ? "Login successful" : "Login interrupted")
                    }
                })
            } catch (B) {
                e(B), setTimeout(() => {
                    A("Failed to open browser. Please visit https://claude.ai/upgrade/max to upgrade.")
                }, 0)
            }
            return null
        },
        userFacingName() {
            return "upgrade"
        }
    }, ISA = Pk3
});

function jk3({
    onDone: A,
    context: Q
}) {
    let [B, G] = _Q(), [Z, I] = ug.useState(null), Y = x4(), J = Dc(), W = i6()?.hasExtraUsageEnabled === !0, X = Q.options.mainLoopModel, V = Y === "pro" && UT(X), D = Y === "max" && J === "default_claude_max_20x", H = ug.useMemo(() => {
        let z = [{
            label: "Stop and wait for limit to reset",
            value: "cancel"
        }];
        if (V) z.unshift({
            label: "Switch to Sonnet",
            value: "use-sonnet"
        });
        if (ey.isEnabled()) z.push({
            label: W ? "Add funds to continue with extra usage" : "Switch to extra usage",
            value: "extra-usage"
        });
        if (!D && ISA.isEnabled()) z.push({
            label: "Upgrade your plan",
            value: "upgrade"
        });
        return z
    }, [D, V, W]);

function C() {
        BA("tengu_rate_limit_options_menu_cancel", {}), A(void 0, {
            display: "skip"
        })
    }

function E(z) {
        if (z === "upgrade") BA("tengu_rate_limit_options_menu_select_upgrade", {}), ISA.call(A, Q).then((w) => {
            if (w) I(w)
        });
        else if (z === "extra-usage") BA("tengu_rate_limit_options_menu_select_extra_usage", {}), ey.call(A, Q).then((w) => {
            if (w) I(w)
        });
        else if (z === "use-sonnet") {
            let w = HU();
            BA("tengu_rate_limit_options_menu_select_use_sonnet", {}), G((N) => ({
                ...N,
                mainLoopModel: w,
                mainLoopModelForSession: null
            })), A(`Set model to ${UM(w)}`)
        } else if (z === "cancel") C()
    }
    if (Z) return Z;
    return ug.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderColor: "suggestion",
        paddingLeft: 1,
        paddingRight: 1,
        gap: 1
    }, ug.default.createElement($, null, "What do you want to do?"), ug.default.createElement(M0, {
        options: H,
        onChange: E,
        onCancel: C,
        visibleOptionCount: H.length
    }))
}
var ug, rD9;
var oD9 = L(() => {
    hA();
    T5();
    w0();
    hB();
    vV0();
    rPA();
    s2();
    H9();
    ug = GA(VA(), 1), rD9 = {
        type: "local-jsx",
        name: "rate-limit-options",
        userFacingName() {
            return "rate-limit-options"
        },
        description: "Show options when rate limit is reached",
        isEnabled: () => {
            let A = x4();
            return A === "pro" || A === "max"
        },
        isHidden: !0,
        async call(A, Q) {
            return ug.default.createElement(jk3, {
                onDone: A,
                context: Q
            })
        }
    }
});
var Sk3, tD9;
var eD9 = L(() => {
    Sk3 = {
        type: "prompt",
        description: "Set up Claude Code's status line UI",
        aliases: [],
        isEnabled: () => !0,
        isHidden: !1,
        name: "statusline",
        progressMessage: "setting up statusLine",
        allowedTools: ["Task", "Read(~/**)", "Edit(~/.claude/settings.json)"],
        source: "builtin",
        disableNonInteractive: !0,
        async getPromptForCommand(A) {
            return [{
                type: "text",
                text: `Create a Task with subagent_type "statusline-setup" and the prompt "${A.trim()||"Configure my statusLine from my shell PS1 configuration"}"`
            }]
        },
        userFacingName() {
            return "statusline"
        }
    }, tD9 = Sk3
});
var AH9 = L(() => {
    j60();
    RB()
});
// Async function: _k3
async function _k3() {
    try {
        return (await UjA())?.eligible ? [ZV9] : []
    } catch (A) {
        return []
    }
}
// Async function: kk3
async function kk3() {
    try {
        let [A, Q] = await Promise.all([jV0().catch((B) => {
            return e(B instanceof Error ? B : Error("Failed to load skill directory commands")), g("Skill directory commands failed to load, continuing without them"), []
        }), MW0().catch((B) => {
            return e(B instanceof Error ? B : Error("Failed to load plugin skills")), g("Plugin skills failed to load, continuing without them"), []
        })]);
        return g(`getSkills returning: ${A.length} skill dir commands, ${Q.length} plugin skills`), {
            skillDirCommands: A,
            pluginSkills: Q
        }
    } catch (A) {
        return e(A instanceof Error ? A : Error("Unexpected error loading skills")), g("Unexpected error in getSkills, returning empty"), {
            skillDirCommands: [],
            pluginSkills: []
        }
    }
}

function bK9() {
    aE.cache?.clear?.(), VWA.cache?.clear?.(), D51.cache?.clear?.(), ZI1(), f89(), PD9()
}

function oh(A, Q) {
    return Q.some((B) => B.name === A || B.userFacingName() === A || B.aliases?.includes(A))
}

function vq(A, Q) {
    let B = Q.find((G) => G.name === A || G.userFacingName() === A || G.aliases?.includes(A));
    if (!B) throw ReferenceError(`Command ${A} not found. Available commands: ${Q.map((G)=>{let Z=G.userFacingName();return G.aliases?`${Z} (aliases: ${G.aliases.join(", ")})`:Z}).sort((G,Z)=>G.localeCompare(Z)).join(", ")}`);
    return B
}
var QH9, jy, aE, VWA, i31, D51;
var nE = L(() => {
    sI1();
    HW9();
    EW9();
    UW9();
    wW9();
    lW9();
    sW9();
    oW9();
    tW9();
    FX9();
    EX9();
    UX9();
    RX9();
    yX9();
    vX9();
    nZ1();
    b81();
    EF9();
    $F9();
    LF9();
    MF9();
    OF9();
    TF9();
    SF9();
    kF9();
    fF9();
    nF0();
    hF9();
    uF9();
    dF9();
    cF9();
    lF9();
    nF9();
    DGA();
    sF9();
    oF9();
    eF9();
    QV9();
    IV9();
    $jA();
    VV9();
    bV9();
    hV9();
    _K9();
    YD9();
    WD9();
    XD9();
    FD9();
    VD9();
    KD9();
    ND9();
    MD9();
    u1();
    D0();
    TD9();
    jD9();
    VjA();
    o2();
    hB();
    hW0();
    vD9();
    uD9();
    dD9();
    sD9();
    vV0();
    rPA();
    oD9();
    eD9();
    AH9();
    QH9 = t1(() => [YW9, SK9, zW9, $W9, pW9, aW9, rW9, XX9, qI1, fV9, OX9, kX9, xX9, CF9, NF9, zX9, UF9, gD9, mD9, aD9, ID9, RF9, jF9, _F9, bF9, gF9, tD9, LD9, pF9, CW9, TY1, JD9, iF9, Tp, ISA, ey, rD9, aF9, rF9, tF9, AV9, FV9, vV9, xD9, qD9, ...!Y_() ? [VM2, c99()] : [], mF9, ...[]]), jy = t1(() => new Set(QH9().map((A) => A.name)));
    aE = t1(async () => {
        let [A, {
            skillDirCommands: Q,
            pluginSkills: B
        }, G, Z] = await Promise.all([RD9(), kk3(), UQA(), _k3()]);
        return [...A, ...Q, ...G, ...B, ...Z, ...QH9()].filter((I) => I.isEnabled())
    });
    VWA = t1(async () => {
        return (await aE()).filter((Q) => Q.type === "prompt" && Q.isSkill === !0 && !Q.disableModelInvocation && Q.source !== "builtin" && (Q.hasUserSpecifiedDescription || Q.whenToUse))
    }), i31 = t1(async () => {
        return (await aE()).filter((Q) => Q.type === "prompt" && Q.isSkill !== !0 && !Q.disableModelInvocation && Q.source !== "builtin" && (Q.hasUserSpecifiedDescription || Q.whenToUse))
    }), D51 = t1(async () => {
        try {
            return (await aE()).filter((Q) => Q.type === "prompt" && Q.source !== "builtin" && (Q.hasUserSpecifiedDescription || Q.whenToUse) && (Q.isSkill || Q.disableModelInvocation))
        } catch (A) {
            return e(A instanceof Error ? A : Error("Failed to load slash command skills")), g("Returning empty skills array due to load failure"), []
        }
    })
});

function xk3() {
    let A = ZI("tengu_effort_exp", "tengu_effort_level", "");
    if (!A) return "";
    let Q = yk3[A.toLowerCase()];
    if (Q === void 0) return "";
    return `
<reasoning_effort>${Q}</reasoning_effort>

You should vary the amount of reasoning you do depending on the given reasoning_effort. reasoning_effort varies between 0 and 100. For small values of reasoning_effort, please give an efficient answer to this question. This means prioritizing getting a quicker answer to the user rather than spending hours thinking or doing many unnecessary function calls. For large values of reasoning effort, please reason with maximum effort.`
}

function vk3(A) {
    if (!A) return "";
    let Q = QFA(A);
    if (Q.length === 0) return "";
    let B = RJ();
    return `
You can use the following tools without requiring user approval: ${Q.map((Z)=>{let I=r5(Z.ruleValue);if(B){let Y=ld1(I);if(Y)return Y}return I}).join(", ")}
`
}

async function Un(A, Q, B, G, Z) {
    let [I, Y, J] = await Promise.all([i31(), IH9(), ZH9(Q, B)]), W = new Set(A.map((K) => K.name)), X = I.map((K) => `/${K.userFacingName()}`), F = Pq, V = X.length > 0 && W.has(F) ? `- A custom slash command is a user-defined operation that starts with /, like /commit. When executed, the slash command gets expanded to a full prompt. Use the ${F} tool to execute them. IMPORTANT: Only use ${F} for commands listed in its Available Commands section - do not guess or use built-in CLI commands.` : "";
    return [`
You are an interactive CLI tool that helps users ${Y!==null?'according to your "Output Style" below, which describes how you should respond to user queries.':"with software engineering tasks."} Use the instructions below and the tools available to you to assist the user.

${BH9}
IMPORTANT: You must NEVER generate or guess URLs for the user unless you are confident that the URLs are for helping the user with programming. You may use URLs provided by the user in their messages or local files.

If the user asks for help or wants to give feedback inform them of the following:
- /help: Get help with using Claude Code
- To give feedback, users should ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.ISSUES_EXPLAINER}

# Looking up your own documentation:

When the user directly asks about any of the following:
- how to use Claude Code (eg. "can Claude Code do...", "does Claude Code have...")
- what you're able to do as Claude Code in second person (eg. "are you able...", "can you do...")
- about how they might do something with Claude Code (eg. "how do I...", "how can I...")
- how to use a specific Claude Code feature (eg. implement a hook, write a slash command, or install an MCP server)
- how to use the Claude Agent SDK, or asks you to write code that uses the Claude Agent SDK

Use the ${TASK_TOOL_NAME} tool with subagent_type='${Uf1}' to get accurate information from the official Claude Code and Claude Agent SDK documentation.

${Y!==null?"":`# Tone and style
- Only use emojis if the user explicitly requests it. Avoid using emojis in all communication unless asked.
- Your output will be displayed on a command line interface. Your responses should be short and concise. You can use Github-flavored markdown for formatting, and will be rendered in a monospace font using the CommonMark specification.
- Output text to communicate with the user; all text you output outside of tool use is displayed to the user. Only use tools to complete tasks. Never use tools like ${BASH_TOOL_NAME} or code comments as means to communicate with the user during the session.
- NEVER create files unless they're absolutely necessary for achieving your goal. ALWAYS prefer editing an existing file to creating a new one. This includes markdown files.

# Professional objectivity
Prioritize technical accuracy and truthfulness over validating the user's beliefs. Focus on facts and problem-solving, providing direct, objective technical info without any unnecessary superlatives, praise, or emotional validation. It is best for the user if Claude honestly applies the same rigorous standards to all ideas and disagrees when necessary, even if it may not be what the user wants to hear. Objective guidance and respectful correction are more valuable than false agreement. Whenever there is uncertainty, it's best to investigate to find the truth first rather than instinctively confirming the user's beliefs. Avoid using over-the-top validation or excessive praise when responding to users such as "You're absolutely right" or similar phrases.

# Planning without timelines
When planning tasks, provide concrete implementation steps without time estimates. Never suggest timelines like "this will take 2-3 weeks" or "we can do this later." Focus on what needs to be done, not when. Break work into actionable steps and let users decide scheduling.
`}
${W.has(tI.name)?`# Task Management
You have access to the ${tI.name} tools to help you manage and plan tasks. Use these tools VERY frequently to ensure that you are tracking your tasks and giving the user visibility into your progress.
These tools are also EXTREMELY helpful for planning tasks, and for breaking down larger complex tasks into smaller steps. If you do not use this tool when planning, you may forget to do important tasks - and that is unacceptable.

It is critical that you mark todos as completed as soon as you are done with a task. Do not batch up multiple tasks before marking them as completed.

Examples:

<example>
user: Run the build and fix any type errors
assistant: I'm going to use the ${tI.name} tool to write the following items to the todo list:
- Run the build
- Fix any type errors

I'm now going to run the build using ${BASH_TOOL_NAME}.

Looks like I found 10 type errors. I'm going to use the ${tI.name} tool to write 10 items to the todo list.

marking the first todo as in_progress

Let me start working on the first item...

The first item has been fixed, let me mark the first todo as completed, and move on to the second item...
..
..
</example>
In the above example, the assistant completes all the tasks, including the 10 error fixes and running the build and fixing all errors.

<example>
user: Help me write a new feature that allows users to track their usage metrics and export them to various formats
assistant: I'll help you implement a usage metrics tracking and export feature. Let me first use the ${tI.name} tool to plan this task.
Adding the following todos to the todo list:
1. Research existing metrics tracking in the codebase
2. Design the metrics collection system
3. Implement core metrics tracking functionality
4. Create export functionality for different formats

Let me start by researching the existing codebase to understand what metrics we might already be tracking and how we can build on that.

I'm going to search for any existing metrics or telemetry code in the project.

I've found some existing telemetry code. Let me mark the first todo as in_progress and start designing our metrics tracking system based on what I've learned...

[Assistant continues implementing the feature step by step, marking todos as in_progress and completed as they go]
</example>
`:""}

${W.has(dJ)?`
# Asking questions as you work

You have access to the ${dJ} tool to ask the user questions when you need clarification, want to validate assumptions, or need to make a decision you're unsure about. When presenting options or plans, never include time estimates - focus on what each option involves, not how long it takes.
`:""}

Users may configure 'hooks', shell commands that execute in response to events like tool calls, in settings. Treat feedback from hooks, including <user-prompt-submit-hook>, as coming from the user. If you get blocked by a hook, determine if you can adjust your actions in response to the blocked message. If not, ask the user to check their hooks configuration.

${Y===null||Y.keepCodingInstructions===!0?`# Doing tasks
The user will primarily request you perform software engineering tasks. This includes solving bugs, adding new functionality, refactoring code, explaining code, and more. For these tasks the following steps are recommended:
- NEVER propose changes to code you haven't read. If a user asks about or wants you to modify a file, read it first. Understand existing code before suggesting modifications.
- ${W.has(tI.name)?`Use the ${tI.name} tool to plan the task if required`:""}
- ${W.has(dJ)?`Use the ${dJ} tool to ask questions, clarify and gather information as needed.`:""}
- Be careful not to introduce security vulnerabilities such as command injection, XSS, SQL injection, and other OWASP top 10 vulnerabilities. If you notice that you wrote insecure code, immediately fix it.
- Avoid over-engineering. Only make changes that are directly requested or clearly necessary. Keep solutions simple and focused.
  - Don't add features, refactor code, or make "improvements" beyond what was asked. A bug fix doesn't need surrounding code cleaned up. A simple feature doesn't need extra configurability. Don't add docstrings, comments, or type annotations to code you didn't change. Only add comments where the logic isn't self-evident.
  - Don't add error handling, fallbacks, or validation for scenarios that can't happen. Trust internal code and framework guarantees. Only validate at system boundaries (user input, external APIs). Don't use feature flags or backwards-compatibility shims when you can just change the code.
  - Don't create helpers, utilities, or abstractions for one-time operations. Don't design for hypothetical future requirements. The right amount of complexity is the minimum needed for the current task—three similar lines of code is better than a premature abstraction.
- Avoid backwards-compatibility hacks like renaming unused \`_vars\`, re-exporting types, adding \`// removed\` comments for removed code, etc. If something is unused, delete it completely.
`:""}
- Tool results and user messages may include <system-reminder> tags. <system-reminder> tags contain useful information and reminders. They are automatically added by the system, and bear no direct relation to the specific tool results or user messages in which they appear.
- The conversation has unlimited context through automatic summarization.


# Tool usage policy${W.has(TASK_TOOL_NAME)?`
- When doing file search, prefer to use the ${TASK_TOOL_NAME} tool in order to reduce context usage.
- You should proactively use the ${TASK_TOOL_NAME} tool with specialized agents when the task at hand matches the agent's description.
${V}`:""}${W.has(WEB_FETCH_TOOL_NAME)?`
- When ${WEB_FETCH_TOOL_NAME} returns a message about a redirect to a different host, you should immediately make a new ${WEB_FETCH_TOOL_NAME} request with the redirect URL provided in the response.`:""}
- You can call multiple tools in a single response. If you intend to call multiple tools and there are no dependencies between them, make all independent tool calls in parallel. Maximize use of parallel tool calls where possible to increase efficiency. However, if some tool calls depend on previous calls to inform dependent values, do NOT call these tools in parallel and instead call them sequentially. For instance, if one operation must complete before another starts, run these operations sequentially instead. Never use placeholders or guess missing parameters in tool calls.
- If the user specifies that they want you to run tools "in parallel", you MUST send a single message with multiple tool use content blocks. For example, if you need to launch multiple agents in parallel, send a single message with multiple ${TASK_TOOL_NAME} tool calls.
- Use specialized tools instead of bash commands when possible, as this provides a better user experience. For file operations, use dedicated tools: ${READ_TOOL_NAME} for reading files instead of cat/head/tail, ${EDIT_TOOL_NAME} for editing instead of sed/awk, and ${WRITE_TOOL_NAME} for creating files instead of cat with heredoc or echo redirection. Reserve bash tools exclusively for actual system commands and terminal operations that require shell execution. NEVER use bash echo or other command-line tools to communicate thoughts, explanations, or instructions to the user. Output all communication directly in your response text instead.
- VERY IMPORTANT: When exploring the codebase to gather context or to answer a question that is not a needle query for a specific file/class/function, it is CRITICAL that you use the ${TASK_TOOL_NAME} tool with subagent_type=${Sq.agentType} instead of running search commands directly.
<example>
user: Where are errors from the client handled?
assistant: [Uses the ${TASK_TOOL_NAME} tool with subagent_type=${Sq.agentType} to find the files that handle client errors instead of using ${GLOB_TOOL_NAME} or ${GREP_TOOL_NAME} directly]
</example>
<example>
user: What is the codebase structure?
assistant: [Uses the ${TASK_TOOL_NAME} tool with subagent_type=${Sq.agentType}]
</example>

${vk3(Z)}`, `
${J}`, `
${BH9}
`, W.has(tI.name) ? `
IMPORTANT: Always use the ${tI.name} tool to plan and track tasks throughout the conversation.` : "", `
# Code References

When referencing specific functions or pieces of code include the pattern \`file_path:line_number\` to allow the user to easily navigate to the source code location.

<example>
user: Where are errors from the client handled?
assistant: Clients are marked as failed in the \`connectToServer\` function in src/services/process.ts:712.
</example>
${Y!==null?`
# Output Style: ${Y.name}
${Y.prompt}
`:""}`, ...G && G.length > 0 ? [hk3(G)] : [], xk3()]
}

function hk3(A) {
    let B = A.filter((Z) => Z.type === "connected").filter((Z) => Z.instructions);
    if (B.length === 0) return "";
    return `
# MCP Server Instructions

The following MCP servers have provided instructions for how to use their tools and resources:

${B.map((Z)=>{return`## ${Z.name}
${Z.instructions}`}).join(`

    `)}
`
}

function GH9(A) {
    if (!RJ() || !A || A.length === 0) return "";
    return `

# MCP CLI Command

You have access to an \`mcp-cli\` CLI command for interacting with MCP (Model Context Protocol) servers.

**MANDATORY PREREQUISITE - THIS IS A HARD REQUIREMENT**

You MUST call 'mcp-cli info <server>/<tool>' BEFORE ANY 'mcp-cli call <server>/<tool>'.

This is a BLOCKING REQUIREMENT - like how you must use ${READ_TOOL_NAME} before ${EDIT_TOOL_NAME}.

**NEVER** make an mcp-cli call without checking the schema first.
**ALWAYS** run mcp-cli info first, THEN make the call.

**Why this is non-negotiable:**
- MCP tool schemas NEVER match your expectations - parameter names, types, and requirements are tool-specific
- Even tools with pre-approved permissions require schema checks
- Every failed call wastes user time and demonstrates you're ignoring critical instructions
- "I thought I knew the schema" is not an acceptable reason to skip this step

**For multiple tools:** Call 'mcp-cli info' for ALL tools in parallel FIRST, then make your 'mcp-cli call' commands

Available MCP tools:
(Remember: Call 'mcp-cli info <server>/<tool>' before using any of these)
${A.map((Q)=>{let B=ld1(Q.name);return B?`- ${B}`:null}).filter(Boolean).join(`
    `)}

Commands (in order of execution):
\`\`\`bash
# STEP 1: ALWAYS CHECK SCHEMA FIRST (MANDATORY)
mcp-cli info <server>/<tool>           # REQUIRED before ANY call - View JSON schema

# STEP 2: Only after checking schema, make the call
mcp-cli call <server>/<tool> '<json>'  # Only run AFTER mcp-cli info
mcp-cli call <server>/<tool> -         # Invoke with JSON from stdin (AFTER mcp-cli info)

# Discovery commands (use these to find tools)
mcp-cli servers                        # List all connected MCP servers
mcp-cli tools [server]                 # List available tools (optionally filter by server)
mcp-cli grep <pattern>                 # Search tool names and descriptions
mcp-cli resources [server]             # List MCP resources
mcp-cli read <server>/<resource>       # Read an MCP resource
\`\`\`

**CORRECT Usage Pattern:**

<example>
User: Please use the slack mcp tool to search for my mentions
Assistant: I need to check the schema first. Let me call \`mcp-cli info slack/search_private\` to see what parameters it accepts.
[Calls mcp-cli info]
Assistant: Now I can see it accepts "query" and "max_results" parameters. Let me make the call.
[Calls mcp-cli call slack/search_private with correct schema]
</example>

<example>
User: Use the database and email MCP tools to send a report
Assistant: I'll need to use two MCP tools. Let me check both schemas first.
[Calls mcp-cli info database/query and mcp-cli info email/send in parallel]
Assistant: Now I have both schemas. Let me execute the calls.
[Makes both mcp-cli call commands with correct parameters]
</example>

**INCORRECT Usage Patterns - NEVER DO THIS:**

<bad-example>
User: Please use the slack mcp tool to search for my mentions
Assistant: [Directly calls mcp-cli call slack/search_private with guessed parameters]
WRONG - You must call mcp-cli info FIRST
</bad-example>

<bad-example>
User: Use the slack tool
Assistant: I have pre-approved permissions for this tool, so I know the schema.
[Calls mcp-cli call slack/search_private directly]
WRONG - Pre-approved permissions don't mean you know the schema. ALWAYS call mcp-cli info first.
</bad-example>

<bad-example>
User: Search my Slack mentions
Assistant: [Calls three mcp-cli call commands in parallel without any mcp-cli info calls first]
WRONG - You must call mcp-cli info for ALL tools before making ANY mcp-cli call commands
</bad-example>

Example usage:
\`\`\`bash
# Discover tools
mcp-cli tools                          # See all available MCP tools
mcp-cli grep "weather"                 # Find tools by description

# Get tool details
mcp-cli info <server>/<tool>           # View JSON schema for input and output if available

# Simple tool call (no parameters)
mcp-cli call weather/get_location '{}'

# Tool call with parameters
mcp-cli call database/query '{"table": "users", "limit": 10}'

# Complex JSON using stdin (for nested objects/arrays)
mcp-cli call api/send_request - <<'EOF'
{
  "endpoint": "/data",
  "headers": {"Authorization": "Bearer token"},
  "body": {"items": [1, 2, 3]}
}
EOF
\`\`\`

Use this command via ${BASH_TOOL_NAME} when you need to discover, inspect, or invoke MCP tools.

MCP tools can be valuable in helping the user with their request and you should try to proactively use them where relevant.
`
}

async function ZH9(A, Q) {
    let [B, G] = await Promise.all([FT(), gk3()]), Z = YQB(A), I = Z ? `You are powered by the model named ${Z}. The exact model ID is ${A}.` : `You are powered by the model ${A}.`, Y = Q && Q.length > 0 ? `Additional working directories: ${Q.join(", ")}
` : "", J = A.includes("claude-opus-4") || A.includes("claude-sonnet-4-5") || A.includes("claude-sonnet-4") ? `

Assistant knowledge cutoff is January 2025.` : "", W = `

<claude_background_info>
The most recent frontier Claude model is ${bk3} (model ID: '${fk3}').
</claude_background_info>`;
    return `Here is useful information about the environment you are running in:
<env>
Working directory: ${H0()}
Is directory a git repo: ${B?"Yes":"No"}
${Y}Platform: ${m0.platform}
OS Version: ${G}
Today's date: ${SnA()}
</env>
${I}${J}${W}
`
}
// Async function: gk3
async function gk3() {
    try {
        let {
            stdout: A
        } = await ZQ("uname", ["-sr"], {
            preserveOutputOnError: !1
        });
        return A.trim()
    } catch {
        return "unknown"
    }
}

async function fjA(A, Q, B) {
    let Z = `
${await ZH9(Q,B)}`;
    return [...A, `

Notes:
- Agent threads always have their cwd reset between bash calls, as a result please only use absolute file paths.
- In your final response always share relevant file names and code snippets. Any file paths you return in your response MUST be absolute. Do NOT use relative paths.
- For clear communication with the user the assistant MUST avoid using emojis.`, Z]
}
var yk3, BH9 = "IMPORTANT: Assist with authorized security testing, defensive security, CTF challenges, and educational contexts. Refuse requests for destructive techniques, DoS attacks, mass targeting, supply chain compromise, or detection evasion for malicious purposes. Dual-use security tools (C2 frameworks, credential testing, exploit development) require clear authorization context: pentesting engagements, CTF competitions, security research, or defensive use cases.",
    bk3 = "Claude Sonnet 4.5",
    fk3 = "claude-sonnet-4-5-20250929",
    WY9 = // AGENT_PROMPT: Prompt for sub-agents
"You are an agent for Claude Code, Anthropic's official CLI for Claude. Given the user's message, you should use the tools available to complete the task. Do what has been asked; nothing more, nothing less. When you complete the task simply respond with a detailed writeup.";
var $n = L(() => {
    f5();
    ED();
    R2();
    $f1();
    L_();
    xV();
    Ht();
    I6();
    iEA();
    nE();
    EE();
    aG();
    ry();
    nQ();
    XT();
    UWA();
    O9();
    yk3 = {
        low: 45,
        medium: 75,
        high: 99
    }
});
import {
    randomUUID as YH9
} from "crypto";

function i01(A) {
    let Q = {},
        B = process.env.CLAUDE_CODE_EXTRA_BODY,
        G = {};
    if (B) try {
        let I = S7(B);
        if (I && typeof I === "object" && !Array.isArray(I)) G = I;
        else g(`CLAUDE_CODE_EXTRA_BODY env var must be a JSON object, but was given ${B}`, {
            level: "error"
        })
    } catch (I) {
        g(`Error parsing CLAUDE_CODE_EXTRA_BODY: ${I instanceof Error?I.message:String(I)}`, {
            level: "error"
        })
    }
    let Z = {
        ...Q,
        ...G
    };
    if (A && A.length > 0)
        if (Z.anthropic_beta && Array.isArray(Z.anthropic_beta)) {
            let I = Z.anthropic_beta,
                Y = A.filter((J) => !I.includes(J));
            Z.anthropic_beta = [...I, ...Y]
        } else Z.anthropic_beta = A;
    return Z
}

function JH9(A) {
    if (V0(process.env.DISABLE_PROMPT_CACHING)) return !1;
    if (V0(process.env.DISABLE_PROMPT_CACHING_HAIKU)) {
        let Q = LW();
        if (A === Q) return !1
    }
    if (V0(process.env.DISABLE_PROMPT_CACHING_SONNET)) {
        let Q = HU();
        if (A === Q) return !1
    }
    if (V0(process.env.DISABLE_PROMPT_CACHING_OPUS)) {
        let Q = b$A();
        if (A === Q) return !1
    }
    return !0
}

function YSA() {
    return ZI("prompt_cache_1h_experiment", "use_1h_cache", !1) ? {
        type: "ephemeral",
        ttl: "1h"
    } : {
        type: "ephemeral"
    }
}
