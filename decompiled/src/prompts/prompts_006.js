/**
 * Claude Code Decompiled
 * Category: prompts
 * File: 6/10
 * Lines: 331923 - 333421 (1499 lines)
 * Original file: cli.js
 */

                else {
                    this.stream.write(">" + this.endline(Y, J, W)), J.state = Q.InsideTag, y = Y.children;
                    for (H = 0, E = y.length; H < E; H++) V = y[H], this.writeChildNode(V, J, W + 1);
                    J.state = Q.CloseTag, this.stream.write(this.indent(Y, J, W) + "</" + Y.name + ">")
                }
                return this.stream.write(this.endline(Y, J, W)), J.state = Q.None, this.closeNode(Y, J, W)
            }
            processingInstruction(Y, J, W) {
                return this.stream.write(super.processingInstruction(Y, J, W))
            }
            raw(Y, J, W) {
                return this.stream.write(super.raw(Y, J, W))
            }
            text(Y, J, W) {
                return this.stream.write(super.text(Y, J, W))
            }
            dtdAttList(Y, J, W) {
                return this.stream.write(super.dtdAttList(Y, J, W))
            }
            dtdElement(Y, J, W) {
                return this.stream.write(super.dtdElement(Y, J, W))
            }
            dtdEntity(Y, J, W) {
                return this.stream.write(super.dtdEntity(Y, J, W))
            }
            dtdNotation(Y, J, W) {
                return this.stream.write(super.dtdNotation(Y, J, W))
            }
        }
    }).call(fR2)
});
var mR2 = U((uR2, ti) => {
    (function() {
        var A, Q, B, G, Z, I, Y, J, W;
        ({
            assign: J,
            isFunction: W
        } = Fy()), B = W80(), G = D80(), Z = bR2(), Y = J61(), I = gR2(), A = bW(), Q = VRA(), uR2.create = function(X, F, V, K) {
            var D, H;
            if (X == null) throw Error("Root element needs a name.");
            if (K = J({}, F, V, K), D = new G(K), H = D.element(X), !K.headless) {
                if (D.declaration(K), K.pubID != null || K.sysID != null) D.dtd(K)
            }
            return H
        }, uR2.begin = function(X, F, V) {
            if (W(X))[F, V] = [X, F], X = {};
            if (F) return new Z(X, F, V);
            else return new G(X)
        }, uR2.stringWriter = function(X) {
            return new Y(X)
        }, uR2.streamWriter = function(X, F) {
            return new I(X, F)
        }, uR2.implementation = new B, uR2.nodeType = A, uR2.writerState = Q
    }).call(uR2)
});
var pR2 = U((cx5) => {
    var dR2 = ui1(),
        gx5 = mR2();
    cx5.build = dx5;

    function ux5(A) {
        function Q(B) {
            return B < 10 ? "0" + B : B
        }
        return A.getUTCFullYear() + "-" + Q(A.getUTCMonth() + 1) + "-" + Q(A.getUTCDate()) + "T" + Q(A.getUTCHours()) + ":" + Q(A.getUTCMinutes()) + ":" + Q(A.getUTCSeconds()) + "Z"
    }
    var mx5 = Object.prototype.toString;

    function cR2(A) {
        var Q = mx5.call(A).match(/\[object (.*)\]/);
        return Q ? Q[1] : Q
    }

    function dx5(A, Q) {
        var B = {
                version: "1.0",
                encoding: "UTF-8"
            },
            G = {
                pubid: "-//Apple//DTD PLIST 1.0//EN",
                sysid: "http://www.apple.com/DTDs/PropertyList-1.0.dtd"
            },
            Z = gx5.create("plist");
        if (Z.dec(B.version, B.encoding, B.standalone), Z.dtd(G.pubid, G.sysid), Z.att("version", "1.0"), H80(A, Z), !Q) Q = {};
        return Q.pretty = Q.pretty !== !1, Z.end(Q)
    }

    function H80(A, Q) {
        var B, G, Z, I = cR2(A);
        if (I == "Undefined") return;
        else if (Array.isArray(A)) {
            Q = Q.ele("array");
            for (G = 0; G < A.length; G++) H80(A[G], Q)
        } else if (Buffer.isBuffer(A)) Q.ele("data").raw(A.toString("base64"));
        else if (I == "Object") {
            Q = Q.ele("dict");
            for (Z in A)
                if (A.hasOwnProperty(Z)) Q.ele("key").txt(Z), H80(A[Z], Q)
        } else if (I == "Number") B = A % 1 === 0 ? "integer" : "real", Q.ele(B).txt(A.toString());
        else if (I == "BigInt") Q.ele("integer").txt(A);
        else if (I == "Date") Q.ele("date").txt(ux5(new Date(A)));
        else if (I == "Boolean") Q.ele(A ? "true" : "false");
        else if (I == "String") Q.ele("string").txt(A);
        else if (I == "ArrayBuffer") Q.ele("data").raw(dR2.fromByteArray(A));
        else if (A && A.buffer && cR2(A.buffer) == "ArrayBuffer") Q.ele("data").raw(dR2.fromByteArray(new Uint8Array(A.buffer), Q));
        else if (I === "Null") Q.ele("null").txt("")
    }
});
var nR2 = U((C80) => {
    var lR2 = LO2();
    Object.keys(lR2).forEach(function(A) {
        C80[A] = lR2[A]
    });
    var iR2 = pR2();
    Object.keys(iR2).forEach(function(A) {
        C80[A] = iR2[A]
    })
});

function E80({
    message: A,
    title: Q
}) {
    let B = Q ? `${Q}:
${A}` : A;
    try {
        process.stdout.write(`\x1B]9;

${B}\x07`)
    } catch {}
}

function aR2({
    message: A,
    title: Q
}) {
    try {
        let B = Math.floor(Math.random() * 1e4);
        process.stdout.write(`\x1B]99;i=${B}:d=0:p=title;${Q||"Claude Code"}\x1B\\`), process.stdout.write(`\x1B]99;i=${B}:p=body;${A}\x1B\\`), process.stdout.write(`\x1B]99;i=${B}:d=1:a=focus;\x1B\\`)
    } catch {}
}

function lx5({
    message: A,
    title: Q
}) {
    try {
        let B = Q || "Claude Code";
        process.stdout.write(`\x1B]777;notify;${B};${A}\x07`)
    } catch {}
}

function z80() {
    process.stdout.write("\x07")
}
async function ix5() {
    try {
        if (m0.terminal !== "Apple_Terminal") return !1;
        let Q = (await ZQ("osascript", ["-e", 'tell application "Terminal" to name of current settings of front window'])).stdout.trim();
        if (!Q) return !1;
        let B = await ZQ("defaults", ["export", "com.apple.Terminal", "-"]);
        if (B.code !== 0) return !1;
        let I = sR2.default.parse(B.stdout)?.["Window Settings"]?.[Q];
        if (!I) return !1;
        return I.Bell === !1
    } catch (A) {
        return e(A instanceof Error ? A : Error(String(A))), !1
    }
}
async function I0A(A) {
    let B = L1().preferredNotifChannel,
        G = "none";
    switch (await U80(A), B) {
        case "auto":
            if (m0.terminal === "Apple_Terminal")
                if (await ix5()) z80(), G = "terminal_bell";
                else G = "no_method_available";
            else if (m0.terminal === "iTerm.app") E80(A), G = "iterm2";
            else if (m0.terminal === "kitty") aR2(A), G = "kitty";
            else if (m0.terminal === "ghostty") lx5(A), G = "ghostty";
            else G = "no_method_available";
            break;
        case "iterm2":
            E80(A), G = "iterm2";
            break;
        case "terminal_bell":
            z80(), G = "terminal_bell";
            break;
        case "iterm2_with_bell":
            E80(A), z80(), G = "iterm2_with_bell";
            break;
        case "kitty":
            aR2(A), G = "kitty";
            break;
        case "notifications_disabled":
            G = "disabled";
            break
    }
    BA("tengu_notification_method_used", {
        configured_channel: B,
        method_used: G,
        term: m0.terminal
    })
}
var sR2;
var W61 = L(() => {
    jQ();
    I6();
    w0();
    f5();
    u1();
    AO();
    sR2 = GA(nR2(), 1)
});
async function rR2(A, Q, B) {
    try {
        let G = VI();
        if (G.error) return;
        let Z = {
                "Content-Type": "application/json",
                "User-Agent": MF(),
                ...G.headers
            },
            I = {
                vcs_type: "github",
                vcs_host: Q,
                vcs_username: A,
                git_user_email: B
            },
            Y = "https://api.anthropic.com/api/claude_code/link_vcs_account";
        await GQ.post(Y, I, {
            headers: Z,
            timeout: 5000
        })
    } catch (G) {}
}
var oR2 = L(() => {
    w3();
    XE()
});
async function nx5() {
    try {
        let A = await ZQ("gh", ["auth", "status", "--active", "--json", "hosts"], {
            useCwd: !1,
            timeout: 5000
        });
        if (A.code !== 0 || !A.stdout.trim()) return null;
        let B = JSON.parse(A.stdout)?.hosts;
        if (!B || typeof B !== "object") return null;
        for (let [G, Z] of Object.entries(B)) {
            if (!Array.isArray(Z) || Z.length === 0) continue;
            let I = Z[0];
            if (I?.login) return {
                username: I.login,
                hostname: G
            }
        }
        return null
    } catch (A) {
        return null
    }
}
async function ax5() {
    try {
        let A = await ZQ("git", ["config", "--get", "user.email"], {
            useCwd: !1,
            timeout: 5000
        });
        if (A.code === 0 && A.stdout.trim()) return A.stdout.trim();
        return null
    } catch (A) {
        return null
    }
}
async function $80() {
    if (Y_()) return;
    if (!0) {
        let G = await S81();
        if (G.hasError || !G.vcsAccountLinkingEnabled) return
    }
    let [Q, B] = await Promise.all([nx5(), ax5()]);
    if (Q || B) rR2(Q?.username ?? "", Q?.hostname ?? "", B ?? "")
}
var tR2 = L(() => {
    I6();
    oR2();
    hB();
    N40()
});

function ei({
    onDone: A,
    startingMessage: Q,
    mode: B = "login",
    forceLoginMethod: G
}) {
    let Z = c0() || {},
        I = G ?? Z.forceLoginMethod,
        Y = Z.forceLoginOrgUUID,
        J = I === "claudeai" ? "Login method pre-selected: Subscription Plan (Claude Pro/Max)" : I === "console" ? "Login method pre-selected: API Usage Billing (Anthropic Console)" : null,
        [W, X] = $2.useState(() => {
            if (B === "setup-token") return {
                state: "ready_to_start"
            };
            if (I === "claudeai" || I === "console") return {
                state: "ready_to_start"
            };
            return {
                state: "idle"
            }
        }),
        [F, V] = $2.useState(""),
        [K, D] = $2.useState(0),
        [H] = $2.useState(() => new aOA),
        [C, E] = $2.useState(() => {
            return B === "setup-token" || I === "claudeai"
        }),
        [z, w] = $2.useState(!1),
        N = YB().columns - eR2.length - 1;
    $2.useEffect(() => {
        if (I === "claudeai") BA("tengu_oauth_claudeai_forced", {});
        else if (I === "console") BA("tengu_oauth_console_forced", {})
    }, [I]), $2.useEffect(() => {
        if (W.state === "about_to_retry") setTimeout(() => {
            X(W.nextState)
        }, 1000)
    }, [W]), h1(async (v, x) => {
        if (x.return) {
            if (W.state === "success" && B !== "setup-token") BA("tengu_oauth_success", {
                loginWithClaudeAi: C
            }), A();
            else if (W.state === "error" && W.toRetry) V(""), X({
                state: "about_to_retry",
                nextState: W.toRetry
            })
        }
    });
    async function q(v, x) {
        try {
            let [p, u] = v.split("#");
            if (!p || !u) {
                X({
                    state: "error",
                    message: "Invalid code. Please make sure the full code was copied",
                    toRetry: {
                        state: "waiting_for_login",
                        url: x
                    }
                });
                return
            }
            BA("tengu_oauth_manual_entry", {}), H.handleManualAuthCodeInput({
                authorizationCode: p,
                state: u
            })
        } catch (p) {
            e(p instanceof Error ? p : Error(String(p))), X({
                state: "error",
                message: p.message,
                toRetry: {
                    state: "waiting_for_login",
                    url: x
                }
            })
        }
    }
    let R = $2.useCallback(async () => {
            try {
                BA("tengu_oauth_flow_start", {
                    loginWithClaudeAi: C
                });
                let v = await H.startOAuthFlow(async (p) => {
                        X({
                            state: "waiting_for_login",
                            url: p
                        }), setTimeout(() => w(!0), 3000)
                    }, {
                        loginWithClaudeAi: C,
                        inferenceOnly: B === "setup-token",
                        expiresIn: B === "setup-token" ? 31536000 : void 0,
                        orgUUID: Y
                    }).catch((p) => {
                        let u = p.message.includes("Token exchange failed");
                        throw X({
                            state: "error",
                            message: u ? "Failed to exchange authorization code for access token. Please try again." : p.message,
                            toRetry: B === "setup-token" ? {
                                state: "ready_to_start"
                            } : {
                                state: "idle"
                            }
                        }), BA("tengu_oauth_token_exchange_error", {
                            error: p.message
                        }), p
                    }),
                    x = oEA(v);
                if (x.warning) BA("tengu_oauth_storage_warning", {
                    warning: x.warning
                });
                if (B === "setup-token") X({
                    state: "success",
                    token: v.accessToken
                });
                else if (await oi0(v.accessToken).catch((p) => {
                        throw X({
                            state: "error",
                            message: "Failed to fetch user roles: " + p.message,
                            toRetry: {
                                state: "idle"
                            }
                        }), BA("tengu_oauth_user_roles_error", {
                            error: p.message
                        }), p
                    }), Xv(v.scopes)) await nRB(), v81(), X({
                    state: "success"
                }), I0A({
                    message: "Claude Code login successful",
                    notificationType: "auth_success"
                }), $80();
                else if (X({
                        state: "creating_api_key"
                    }), await ti0(v.accessToken).catch((u) => {
                        throw X({
                            state: "error",
                            message: "Failed to create API key: " + u.message,
                            toRetry: {
                                state: "idle"
                            }
                        }), BA("tengu_oauth_api_key_error", {
                            error: u.message
                        }), u
                    })) v81(), X({
                    state: "success"
                }), I0A({
                    message: "Claude Code login successful",
                    notificationType: "auth_success"
                }), $80();
                else X({
                    state: "error",
                    message: "Unable to create API key. The server accepted the request but didn't return a key.",
                    toRetry: {
                        state: "idle"
                    }
                }), BA("tengu_oauth_api_key_error", {
                    error: "server_returned_no_key"
                })
            } catch (v) {
                let x = v.message;
                BA("tengu_oauth_error", {
                    error: x
                })
            }
        }, [H, w, C, B, Y]),
        P = $2.useRef(!1);
    $2.useEffect(() => {
        if (W.state === "ready_to_start" && !P.current) P.current = !0, process.nextTick(() => {
            R(), P.current = !1
        })
    }, [W.state, R]), $2.useEffect(() => {
        if (B === "setup-token" && W.state === "success") {
            let v = setTimeout(async () => {
                BA("tengu_oauth_success", {
                    loginWithClaudeAi: C
                }), A()
            }, 500);
            return () => clearTimeout(v)
        }
    }, [B, W, C, A]), $2.useEffect(() => {
        return () => {
            H.cleanup()
        }
    }, [H]);

    function y() {
        switch (W.state) {
            case "idle":
                return $2.default.createElement(j, {
                    flexDirection: "column",
                    gap: 1,
                    marginTop: 1
                }, $2.default.createElement($, {
                    bold: !0
                }, Q ? Q : "Claude Code can be used with your Claude subscription or billed based on API usage through your Console account."), $2.default.createElement($, null, "Select login method:"), $2.default.createElement(j, null, $2.default.createElement(M0, {
                    options: [{
                        label: `Claude account with subscription · ${oA.dim("Pro, Max, Team, or Enterprise")}
`,
                        value: "claudeai"
                    }, {
                        label: `Anthropic Console account · ${oA.dim("API usage billing")}
`,
                        value: "console"
                    }],
                    onCancel: () => {},
                    onChange: (v) => {
                        if (X({
                                state: "ready_to_start"
                            }), v === "claudeai") BA("tengu_oauth_claudeai_selected", {}), E(!0);
                        else BA("tengu_oauth_console_selected", {}), E(!1)
                    }
                })));
            case "waiting_for_login":
                return $2.default.createElement(j, {
                    flexDirection: "column",
                    gap: 1
                }, J && $2.default.createElement(j, null, $2.default.createElement($, {
                    dimColor: !0
                }, J)), !z && $2.default.createElement(j, null, $2.default.createElement(e9, null), $2.default.createElement($, null, "Opening browser to sign in…")), z && $2.default.createElement(j, null, $2.default.createElement($, null, eR2), $2.default.createElement(s4, {
                    value: F,
                    onChange: V,
                    onSubmit: (v) => q(v, W.url),
                    cursorOffset: K,
                    onChangeCursorOffset: D,
                    columns: N
                })));
            case "creating_api_key":
                return $2.default.createElement(j, {
                    flexDirection: "column",
                    gap: 1
                }, $2.default.createElement(j, null, $2.default.createElement(e9, null), $2.default.createElement($, null, "Creating API key for Claude Code…")));
            case "about_to_retry":
                return $2.default.createElement(j, {
                    flexDirection: "column",
                    gap: 1
                }, $2.default.createElement($, {
                    color: "permission"
                }, "Retrying…"));
            case "success":
                return $2.default.createElement(j, {
                    flexDirection: "column"
                }, B === "setup-token" && W.token ? null : $2.default.createElement($2.default.Fragment, null, i6()?.emailAddress ? $2.default.createElement($, {
                    dimColor: !0
                }, "Logged in as", " ", $2.default.createElement($, null, i6()?.emailAddress)) : null, $2.default.createElement($, {
                    color: "success"
                }, "Login successful. Press ", $2.default.createElement($, {
                    bold: !0
                }, "Enter"), " to continue…")));
            case "error":
                return $2.default.createElement(j, {
                    flexDirection: "column",
                    gap: 1
                }, $2.default.createElement($, {
                    color: "error"
                }, "OAuth error: ", W.message), W.toRetry && $2.default.createElement(j, {
                    marginTop: 1
                }, $2.default.createElement($, {
                    color: "permission"
                }, "Press ", $2.default.createElement($, {
                    bold: !0
                }, "Enter"), " to retry.")));
            default:
                return null
        }
    }
    return $2.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, W.state === "waiting_for_login" && z && $2.default.createElement(j, {
        flexDirection: "column",
        key: "urlToCopy",
        gap: 1,
        paddingBottom: 1
    }, $2.default.createElement(j, {
        paddingX: 1
    }, $2.default.createElement($, {
        dimColor: !0
    }, "Browser didn't open? Use the url below to sign in:")), $2.default.createElement(j, {
        width: 1000
    }, $2.default.createElement($, {
        dimColor: !0
    }, W.url))), B === "setup-token" && W.state === "success" && W.token && $2.default.createElement(j, {
        key: "tokenOutput",
        flexDirection: "column",
        gap: 1,
        paddingTop: 1
    }, $2.default.createElement($, {
        color: "success"
    }, "✓ Long-lived authentication token created successfully!"), $2.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, $2.default.createElement($, null, "Your OAuth token (valid for 1 year):"), $2.default.createElement(j, {
        width: 1000
    }, $2.default.createElement($, {
        color: "warning"
    }, W.token)), $2.default.createElement($, {
        dimColor: !0
    }, "Store this token securely. You won't be able to see it again."), $2.default.createElement($, {
        dimColor: !0
    }, "Use this token by setting: export CLAUDE_CODE_OAUTH_TOKEN=<token>"))), $2.default.createElement(j, {
        paddingLeft: 1,
        flexDirection: "column",
        gap: 1
    }, y()))
}
var $2, eR2 = "Paste code here if prompted > ";
var KRA = L(() => {
    hA();
    QY();
    f40();
    pN();
    hB();
    w0();
    m8();
    u1();
    zI();
    W61();
    T5();
    b81();
    J9();
    RB();
    s2();
    tR2();
    $2 = GA(VA(), 1)
});

function AT2({
    onStashAndContinue: A,
    onCancel: Q
}) {
    let [B, G] = FG.useState(null), Z = B !== null ? [...B.tracked, ...B.untracked] : [], [I, Y] = FG.useState(!0), [J, W] = FG.useState(!1), [X, F] = FG.useState(null);
    FG.useEffect(() => {
        (async () => {
            try {
                let C = await Ef1();
                G(C)
            } catch (C) {
                let E = C instanceof Error ? C.message : String(C);
                g(`Error getting changed files: ${E}`, {
                    level: "error"
                }), F("Failed to get changed files")
            } finally {
                Y(!1)
            }
        })()
    }, []);
    let V = async () => {
        W(!0);
        try {
            if (g("Stashing changes before teleport..."), await jGB("Teleport auto-stash")) g("Successfully stashed changes"), A();
            else F("Failed to stash changes")
        } catch (H) {
            let C = H instanceof Error ? H.message : String(H);
            g(`Error stashing changes: ${C}`, {
                level: "error"
            }), F("Failed to stash changes")
        } finally {
            W(!1)
        }
    }, K = (H) => {
        if (H === "stash") V();
        else Q()
    };
    if (I) return FG.default.createElement(j, {
        flexDirection: "column",
        padding: 1
    }, FG.default.createElement(j, {
        marginBottom: 1
    }, FG.default.createElement(e9, null), FG.default.createElement($, null, " Checking git status", V1.ellipsis)));
    if (X) return FG.default.createElement(j, {
        flexDirection: "column",
        padding: 1
    }, FG.default.createElement($, {
        bold: !0,
        color: "error"
    }, "Error: ", X), FG.default.createElement(j, {
        marginTop: 1
    }, FG.default.createElement($, {
        dimColor: !0
    }, "Press "), FG.default.createElement($, {
        bold: !0
    }, "Escape"), FG.default.createElement($, {
        dimColor: !0
    }, " to cancel")));
    let D = Z.length > 8;
    return FG.default.createElement(kD, {
        title: "Working Directory Has Changes",
        onCancel: Q,
        borderDimColor: !0
    }, FG.default.createElement($, null, "Teleport will switch git branches. The following changes were found:"), FG.default.createElement(j, {
        flexDirection: "column",
        paddingLeft: 2
    }, Z.length > 0 ? D ? FG.default.createElement($, null, Z.length, " files changed") : Z.map((H, C) => FG.default.createElement($, {
        key: C
    }, H)) : FG.default.createElement($, {
        dimColor: !0
    }, "No changes detected")), FG.default.createElement($, null, "Would you like to stash these changes and continue with teleport?"), J ? FG.default.createElement(j, null, FG.default.createElement(e9, null), FG.default.createElement($, null, " Stashing changes...")) : FG.default.createElement(M0, {
        options: [{
            label: "Stash changes and continue",
            value: "stash"
        }, {
            label: "Exit",
            value: "exit"
        }],
        onChange: K,
        onCancel: () => Q()
    }))
}
var FG;
var QT2 = L(() => {
    hA();
    ED();
    D0();
    zI();
    T6();
    n2();
    Di();
    FG = GA(VA(), 1)
});
async function JO() {
    let A = H0();
    if (DRA.has(A)) return DRA.get(A) ?? null;
    try {
        let Q = await knA();
        if (g(`Git remote URL: ${Q}`), !Q) return g("No git remote URL found"), DRA.set(A, null), null;
        let B = xh(Q);
        return g(`Parsed repository: ${B} from URL: ${Q}`), DRA.set(A, B), B
    } catch (Q) {
        return g(`Error detecting repository: ${Q}`), DRA.set(A, null), null
    }
}

function xh(A) {
    let Q = A.trim(),
        B = [/github\.com[:/]([^/]+\/[^/.]+?)(\.git)?$/, /github\.com[:/]([^/]+\/[^/.]+)$/];
    for (let G of B) {
        let Z = Q.match(G);
        if (Z && Z[1]) return g(`Parsed repository: ${Z[1]} from ${Q}`), Z[1]
    }
    if (!Q.includes("://") && !Q.includes("@") && Q.includes("/")) {
        let G = Q.split("/");
        if (G.length === 2 && G[0] && G[1]) {
            let Z = G[1].replace(/\.git$/, "");
            return `${G[0]}/${Z}`
        }
    }
    return g(`Could not parse repository from: ${Q}`), null
}
var DRA;
var Y0A = L(() => {
    ED();
    D0();
    R2();
    DRA = new Map
});
import {
    randomUUID as sx5
} from "crypto";
async function J0A() {
    let A = U6()?.accessToken;
    if (A === void 0) throw Error("Claude Code web sessions require authentication with a Claude.ai account. API key authentication is not sufficient. Please run /login to authenticate, or check your authentication status with /status.");
    let Q = await tj();
    if (!Q) throw Error("Unable to get organization UUID");
    return {
        accessToken: A,
        orgUUID: Q
    }
}
async function BT2() {
    let {
        accessToken: A,
        orgUUID: Q
    } = await J0A(), B = `${o9().BASE_API_URL}/v1/sessions`;
    try {
        let G = {
                ...BC(A),
                "x-organization-uuid": Q
            },
            Z = await GQ.get(B, {
                headers: G
            });
        if (Z.status !== 200) throw Error(`Failed to fetch code sessions: ${Z.statusText}`);
        return Z.data.data.map((Y) => {
            let J = Y.session_context.sources.find((X) => X.type === "git_repository"),
                W = null;
            if (J?.url) {
                let X = xh(J.url);
                if (X) {
                    let [F, V] = X.split("/");
                    if (F && V) W = {
                        name: V,
                        owner: {
                            login: F
                        },
                        default_branch: J.revision || void 0
                    }
                }
            }
            return {
                id: Y.id,
                title: Y.title || "Untitled",
                description: "",
                status: Y.session_status,
                repo: W,
                turns: [],
                created_at: Y.created_at,
                updated_at: Y.updated_at
            }
        })
    } catch (G) {
        let Z = G instanceof Error ? G : Error(String(G));
        throw e(Z), G
    }
}

function BC(A) {
    return {
        Authorization: `Bearer ${A}`,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01"
    }
}
async function GT2(A, Q) {
    try {
        let {
            accessToken: B,
            orgUUID: G
        } = await J0A(), Z = `${o9().BASE_API_URL}/v1/sessions/${A}/events`, I = {
            ...BC(B),
            "x-organization-uuid": G
        }, J = {
            events: [{
                uuid: sx5(),
                session_id: A,
                type: "user",
                parent_tool_use_id: null,
                message: {
                    role: "user",
                    content: Q
                }
            }]
        }, W = await GQ.post(Z, J, {
            headers: I,
            validateStatus: (X) => X < 500
        });
        if (W.status === 200 || W.status === 201) return !0;
        return !1
    } catch {
        return !1
    }
}
var rx5, unG;
var An = L(() => {
    EX();
    hB();
    w3();
    pN();
    u1();
    Y0A();
    h2();
    rx5 = I2.object({
        id: I2.string(),
        title: I2.string(),
        description: I2.string(),
        status: I2.enum(["idle", "working", "waiting", "completed", "archived", "cancelled", "rejected"]),
        repo: I2.object({
            name: I2.string(),
            owner: I2.object({
                login: I2.string()
            }),
            default_branch: I2.string().optional()
        }).nullable(),
        turns: I2.array(I2.string()),
        created_at: I2.string(),
        updated_at: I2.string()
    }), unG = I2.array(rx5)
});
async function kJA() {
    let A = U6()?.accessToken;
    if (!A) throw Error("Claude Code web sessions require authentication with a Claude.ai account. API key authentication is not sufficient. Please run /login to authenticate, or check your authentication status with /status.");
    let Q = await tj();
    if (!Q) throw Error("Unable to get organization UUID");
    let B = `${o9().BASE_API_URL}/v1/environment_providers`;
    try {
        let G = {
                ...BC(A),
                "x-organization-uuid": Q
            },
            Z = await GQ.get(B, {
                headers: G,
                timeout: 15000
            });
        if (Z.status !== 200) throw Error(`Failed to fetch environments: ${Z.status} ${Z.statusText}`);
        return Z.data.environments
    } catch (G) {
        let Z = G instanceof Error ? G : Error(String(G));
        throw e(Z), Error(`Failed to fetch environments: ${Z.message}`)
    }
}
var X61 = L(() => {
    w3();
    EX();
    hB();
    pN();
    u1();
    An()
});
async function F61() {
    if (!AB()) return !1;
    return ko()
}
async function ZT2() {
    return await Dt()
}
async function IT2() {
    try {
        return (await kJA()).length > 0
    } catch (A) {
        return g(`checkHasRemoteEnvironment failed: ${A instanceof Error?A.message:String(A)}`), !1
    }
}
async function YT2() {
    return await JO() !== null
}
async function JT2(A, Q) {
    try {
        let B = U6()?.accessToken;
        if (!B) return g("checkGithubAppInstalled: No access token found, assuming app not installed"), !1;
        let G = await tj();
        if (!G) return g("checkGithubAppInstalled: No org UUID found, assuming app not installed"), !1;
        let Z = `${o9().BASE_API_URL}/api/oauth/organizations/${G}/code/repos/${A}/${Q}`,
            I = {
                ...BC(B),
                "x-organization-uuid": G
            };
        g(`Checking GitHub app installation for ${A}/${Q}`);
        let Y = await GQ.get(Z, {
            headers: I,
            timeout: 15000
        });
        if (Y.status === 200 && Y.data.status) {
            let J = Y.data.status.app_installed;
            return g(`GitHub app ${J?"is":"is not"} installed on ${A}/${Q}`), J
        }
        return g(`checkGithubAppInstalled: Unexpected response status ${Y.status}`), !1
    } catch (B) {
        if (GQ.isAxiosError(B)) {
            let G = B.response?.status;
            if (G && G >= 400 && G < 500) return g(`checkGithubAppInstalled: Got ${G} error, app likely not installed on ${A}/${Q}`), !1
        }
        return g(`checkGithubAppInstalled error: ${B instanceof Error?B.message:String(B)}`), !1
    }
}
var w80 = L(() => {
    ED();
    hB();
    Y0A();
    X61();
    pN();
    EX();
    An();
    w3();
    D0()
});

function V61({
    onComplete: A,
    errorsToIgnore: Q = new Set
}) {
    let [B, G] = rX.useState(null), [Z, I] = rX.useState(!1), Y = rX.useCallback(async () => {
        let K = await q80(),
            D = new Set(Array.from(K).filter((H) => !Q.has(H)));
        if (D.size === 0) {
            A();
            return
        }
        if (D.has("needsLogin")) G("needsLogin");
        else if (D.has("needsGitStash")) G("needsGitStash")
    }, [A, Q]);
    rX.useEffect(() => {
        Y()
    }, [Y]);
    let J = rX.useCallback(() => {
            c8(0)
        }, []),
        W = rX.useCallback(() => {
            I(!1), Y()
        }, [Y]),
        X = rX.useCallback(() => {
            I(!0)
        }, [I]),
        F = rX.useCallback((K) => {
            if (K === "login") X();
            else J()
        }, [X, J]),
        V = rX.useCallback(() => {
            Y()
        }, [Y]);
    if (!B) return null;
    switch (B) {
        case "needsGitStash":
            return rX.default.createElement(AT2, {
                onStashAndContinue: V,
                onCancel: J
            });
        case "needsLogin": {
            if (Z) return rX.default.createElement(ei, {
                onDone: W,
                mode: "login",
                forceLoginMethod: "claudeai"
            });
            return rX.default.createElement(kD, {
                title: "Log in to Claude",
                onCancel: J,
                borderDimColor: !0
            }, rX.default.createElement(j, {
                flexDirection: "column"
            }, rX.default.createElement($, {
                dimColor: !0
            }, "Teleport requires a Claude.ai account."), rX.default.createElement($, {
                dimColor: !0
            }, "Your Claude Pro/Max subscription will be used by Claude Code.")), rX.default.createElement(M0, {
                options: [{
                    label: "Login with Claude account",
                    value: "login"
                }, {
                    label: "Exit",
                    value: "exit"
                }],
                onChange: F,
                onCancel: J
            }))
        }
    }
}
async function q80() {
    let A = new Set,
        [Q, B] = await Promise.all([F61(), ZT2()]);
    if (Q) A.add("needsLogin");
    if (!B) A.add("needsGitStash");
    return A
}
var rX;
var N80 = L(() => {
    hA();
    Di();
    T6();
    KRA();
    QT2();
    _J();
    w80();
    rX = GA(VA(), 1)
});

function WT2(A) {
    if (!A) throw BA("tengu_teleport_error_no_url_or_session_id", {}), new GI("No URL or session ID provided for teleport", oA.red(`Error: No URL or session ID provided for teleport
`));
    return A
}

function XT2(A) {
    if (!A) return {};
    try {
        let Q = JSON.parse(A);
        if (typeof Q !== "object" || Q === null || Array.isArray(Q)) throw Error("TELEPORT_HEADERS must be a JSON object");
        return Q
    } catch (Q) {
        let B = Q instanceof Error ? Q : Error(String(Q));
        throw e(B), BA("tengu_teleport_error_invalid_teleport_headers_json", {}), new GI(`Invalid JSON in TELEPORT_HEADERS: ${B.message}`, oA.red(`Error: Invalid JSON in TELEPORT_HEADERS: ${B.message}
`))
    }
}

function FT2(A) {
    for (let [Q, B] of Object.entries(A))
        if (typeof B !== "string") {
            let G = Error(`Invalid header value for "${Q}": headers must be strings, got ${typeof B}`);
            throw e(G), G
        }
}
var VT2 = L(() => {
    $Z();
    J9();
    w0();
    u1()
});
import {
    randomUUID as ox5
} from "crypto";

function tx5(A) {
    if (A === null) return Vy("Session resumed", "suggestion");
    let Q = A instanceof GI ? A.formattedMessage : A.message;
    return Vy(`Session resumed without branch: ${Q}`, "warning")
}

function ex5() {
    return j0({
        content: `This session is being continued from another machine. Application state may have changed. The updated working directory is ${pQ()}`,
        isMeta: !0
    })
}
async function Qv5(A, Q) {
    let B = A.length > 75 ? A.slice(0, 75) + "…" : A,
        G = "claude/task";
    try {
        let Z = Av5.replace("{description}", A),
            I = "<title>",
            J = (await gX({
                systemPrompt: [],
                userPrompt: Z,
                assistantPrompt: "<title>",
                signal: Q,
                options: {
                    querySource: "teleport_generate_title",
                    agents: [],
                    isNonInteractiveSession: !1,
                    hasAppendSystemPrompt: !1,
                    mcpTools: [],
                    agentIdOrSessionId: G0()
                }
            })).message.content[0];
        if (J?.type === "text") {
            let W = "<title>" + J.text.trim(),
                X = W.match(/<title>(.*?)<\/title>/s),
                F = X ? X[1]?.trim() : B,
                V = W.match(/<branch>(.*?)<\/branch>/s),
                K = V ? V[1]?.trim() : "claude/task";
            return {
                title: F || B,
                branchName: K || "claude/task"
            }
        }
    } catch (Z) {
        e(Error(`Error generating title and branch: ${Z}`))
    }
    return {
        title: B,
        branchName: "claude/task"
    }
}
async function D61() {
    if (!await Dt()) throw BA("tengu_teleport_error_git_not_clean", {}), new GI("Git working directory is not clean. Please commit or stash your changes before using --teleport.", oA.red(`Error: Git working directory is not clean. Please commit or stash your changes before using --teleport.
`))
}
async function Bv5(A) {
    let Q = A ? ["fetch", "origin", `${A}:${A}`] : ["fetch", "origin"],
        {
            code: B,
            stderr: G
        } = await ZQ("git", Q);
    if (B !== 0)
        if (A && G.includes("refspec")) {
            g(`Specific branch fetch failed, trying to fetch ref: ${A}`);
            let {
                code: Z,
                stderr: I
            } = await ZQ("git", ["fetch", "origin", A]);
            if (Z !== 0) e(Error(`Failed to fetch from remote origin: ${I}`))
        } else e(Error(`Failed to fetch from remote origin: ${G}`))
}
async function Gv5(A) {
    let {
        code: Q
    } = await ZQ("git", ["rev-parse", "--abbrev-ref", `${A}@{upstream}`]);
    if (Q === 0) {
        g(`Branch '${A}' already has upstream set`);
        return
    }
    let {
        code: B
    } = await ZQ("git", ["rev-parse", "--verify", `origin/${A}`]);
    if (B === 0) {
        g(`Setting upstream for '${A}' to 'origin/${A}'`);
        let {
            code: G,
            stderr: Z
        } = await ZQ("git", ["branch", "--set-upstream-to", `origin/${A}`, A]);
        if (G !== 0) g(`Failed to set upstream for '${A}': ${Z}`);
        else g(`Successfully set upstream for '${A}'`)
    } else g(`Remote branch 'origin/${A}' does not exist, skipping upstream setup`)
}
async function Zv5(A) {
    let {
        code: Q,
        stderr: B
    } = await ZQ("git", ["checkout", A]);
    if (Q !== 0) {
        g(`Local checkout failed, trying to checkout from origin: ${B}`);
        let G = await ZQ("git", ["checkout", "-b", A, "--track", `origin/${A}`]);
        if (Q = G.code, B = G.stderr, Q !== 0) {
            g(`Remote checkout with -b failed, trying without -b: ${B}`);
            let Z = await ZQ("git", ["checkout", "--track", `origin/${A}`]);
            Q = Z.code, B = Z.stderr
        }
    }
    if (Q !== 0) throw BA("tengu_teleport_error_branch_checkout_failed", {}), new GI(`Failed to checkout branch '${A}': ${B}`, oA.red(`Failed to checkout branch '${A}'
`));
    await Gv5(A)
}
async function K61() {
    let {
        stdout: A
    } = await ZQ("git", ["branch", "--show-current"]);
    return A.trim()
}

function KT2(A, Q) {
    return [...jMA(A), ex5(), tx5(Q)]
}
async function HRA(A, Q) {
    try {
        let B = await K61();
        if (g(`Current branch before teleport: '${B}'`), Q) {
            g(`Switching to branch '${Q}'...`), await Bv5(Q), await Zv5(Q);
            let Z = await K61();
            g(`Branch after checkout: '${Z}'`)
        } else g("No branch specified, staying on current branch");
        let G = await K61();
        return {
            messages: KT2(A, null),
            branchName: G,
            branchError: null
        }
    } catch (B) {
        let G = await K61(),
            Z = B instanceof Error ? B : Error(String(B));
        return {
            messages: KT2(A, Z),
            branchName: G,
            branchError: Z
        }
    }
}
async function Iv5(A, Q, B) {
    let G = await JO(),
        Z = `${o9().BASE_API_URL}/v1/sessions/${A}`,
        I = {
            ...B,
            "x-organization-uuid": Q
        };
    if (!G) {
        g(`Not in git repo, fetching session metadata to provide guidance: ${Z}`);
        let J;
        try {
            J = await GQ.get(Z, {
                headers: I,
                timeout: 15000
            })
        } catch (W) {
            if (GQ.isAxiosError(W)) g(`Failed to fetch session metadata - Status: ${W.response?.status}, Message: ${W.message}`);
            throw BA("tengu_teleport_error_repo_validation_failed_sessions_api", {
                sessionId: A
            }), new GI(`You must run claude --teleport ${A} from a checkout of the git repo the session was created in.`, oA.red(`You must run claude --teleport ${A} from a checkout of the git repo the session was created in.
`))
        }
        if (J.status === 200) {
            let X = J.data.session_context.sources.find((F) => F.type === "git_repository");
            if (X?.url) {
                let F = xh(X.url);
                if (F) throw BA("tengu_teleport_error_repo_not_in_git_dir_sessions_api", {
                    sessionId: A
                }), new GI(`You must run claude --teleport ${A} from a checkout of ${F}.`, oA.red(`You must run claude --teleport ${A} from a checkout of ${oA.bold(F)}.
`))
            } else g("Session has no repo requirement and not in git directory, proceeding")
        }
        return
    }
    g(`Fetching session metadata from: ${Z}`);
    let Y;
    try {
        Y = await GQ.get(Z, {
            headers: I,
            timeout: 15000
        })
    } catch (J) {
        if (GQ.isAxiosError(J)) {
            if (g(`Failed to fetch session metadata - Status: ${J.response?.status}, Message: ${J.message}`), J.response?.data) g(`Error response data: ${JSON.stringify(J.response.data)}`)
        } else g(`Could not fetch session metadata: ${J}`);
        return
    }
    if (Y.status === 200) {
        let W = Y.data.session_context.sources.find((X) => X.type === "git_repository");
        if (W?.url) {
            let X = xh(W.url);
            if (X) {
                if (g(`Session is for repository: ${X}, current repo: ${G}`), G.toLowerCase() !== X.toLowerCase()) throw BA("tengu_teleport_error_repo_mismatch_sessions_api", {
                    sessionId: A
                }), new GI(`You must run claude --teleport ${A} from a checkout of ${X}.
This repo is ${G}.`, oA.red(`You must run claude --teleport ${A} from a checkout of ${oA.bold(X)}.
This repo is ${oA.bold(G)}.
`));
                g("Repository matches, proceeding with teleport")
            }
        } else g("Session has no associated repository, proceeding without validation")
    }
}
async function HT2(A) {
    try {
        let Q = U6()?.accessToken;
        if (!Q) return {
            status: "error",
            errorMessage: "OAuth authentication required for teleport"
        };
        let B = await tj();
        if (!B) return {
            status: "error",
            errorMessage: "Unable to get organization UUID"
        };
        let G = BC(Q),
            Z = await JO(),
            I = `${o9().BASE_API_URL}/v1/sessions/${A}`,
            Y = {
                ...G,
                "x-organization-uuid": B
            },
            J;
        try {
            J = await GQ.get(I, {
                headers: Y,
                timeout: 15000
            })
        } catch (V) {
            if (GQ.isAxiosError(V)) g(`Failed to fetch session metadata - Status: ${V.response?.status}, Message: ${V.message}`);
            return {
                status: "error",
                errorMessage: "Failed to fetch session metadata"
            }
        }
        if (J.status !== 200) return {
            status: "error",
            errorMessage: `Unexpected session response status: ${J.status}`
        };
        let X = J.data.session_context.sources.find((V) => V.type === "git_repository");
        if (!X?.url) return {
            status: "no_repo_required"
        };
        let F = xh(X.url);
        if (!F) return {
            status: "no_repo_required"
        };
        if (!Z) return {
            status: "not_in_repo",
            sessionRepo: F,
            currentRepo: null
        };
        if (Z.toLowerCase() === F.toLowerCase()) return {
            status: "match",
            sessionRepo: F,
            currentRepo: Z
        };
        return {
            status: "mismatch",
            sessionRepo: F,
            currentRepo: Z
        }
    } catch (Q) {
        return g(`Error validating session repository: ${Q}`), {
            status: "error",
            errorMessage: Q instanceof Error ? Q.message : String(Q)
        }
    }
}
async function CRA(A) {
    g(`Resuming code session ID: ${A}`);
    try {
        let Q = process.env.TELEPORT_RESUME_URL;
        if (Q) return g("Using TELEPORT_RESUME_URL from environment"), await CT2(Q, void 0);
        let B = U6()?.accessToken;
        if (!B) throw BA("tengu_teleport_resume_error", {
            error_type: "no_access_token"
        }), Error("Claude Code web sessions require authentication with a Claude.ai account. API key authentication is not sufficient. Please run /login to authenticate, or check your authentication status with /status.");
        let G = await tj();
        if (!G) throw BA("tengu_teleport_resume_error", {
            error_type: "no_org_uuid"
        }), Error("Unable to get organization UUID for constructing session URL");
        let Z = BC(B);
        return g("Using Sessions API for resume"), await Iv5(A, G, Z), await Jv5(A, G, B)
    } catch (Q) {
        if (Q instanceof GI) throw Q;
        let B = Q instanceof Error ? Q : Error(String(Q));
        throw e(B), BA("tengu_teleport_resume_error", {
            error_type: "resume_session_id_catch"
        }), new GI(B.message, oA.red(`Error: ${B.message}
`))
    }
}
async function CT2(A, Q) {
    g(`Teleporting from URL: ${A}`);
    let B = XT2(process.env.TELEPORT_HEADERS);
    if (Object.keys(B).length > 0) g(`Parsed ${Object.keys(B).length} headers from TELEPORT_HEADERS`);
    else g("No TELEPORT_HEADERS environment variable found");
    if (Q) {
        FT2(Q);
        let G = {
            ...B,
            ...Q
        };
        return g(`Added ${Object.keys(Q).length} additional headers`), DT2(A, G)
    }
    return DT2(A, B)
}
async function DT2(A, Q) {
    try {
        g("Fetching conversation from remote URL...");
        let B = await zI2(A, Q);
        if (!B) throw e(Error("Remote URL returned empty response")), BA("tengu_teleport_resume_error", {
            error_type: "empty_response",
            url_type: A.startsWith("http") ? "http(s)" : "other"
        }), BA("tengu_teleport_error_failed_to_load_conversation", {}), new GI("Failed to load conversation from remote URL", oA.red(`Error: Failed to load conversation from remote URL
`));
        return g("Successfully loaded conversation from remote URL"), g(`Response contains ${B.log?.length||0} messages`), g(`Response branch: ${B.branch||"none specified"}`), BA("tengu_teleport_resume_success", {
            messages_count: B.log?.length || 0,
            has_branch: !!B.branch
        }), B
    } catch (B) {
        if (B instanceof GI) throw B;
        let G = B instanceof Error ? B : Error(String(B));
        throw e(G), BA("tengu_teleport_resume_error", {
            error_type: "teleport_from_url_catch"
        }), new GI(G.message, oA.red(`Error: ${G.message}
`))
    }
}
async function ERA(A) {
    let Q = WT2(A);
    if (Q.startsWith("http:") || Q.startsWith("https:")) return CT2(Q, void 0);
    return CRA(Q)
}
async function ET2(A) {
    let Q = await q80();
    if (Q.size > 0) BA("tengu_teleport_errors_detected", {
        error_types: Array.from(Q).join(","),
        errors_ignored: Array.from(A || []).join(",")
    }), await new Promise(async (B) => {
        let {
            unmount: G
        } = await Z3(L80.default.createElement(N7, null, L80.default.createElement(V61, {
            errorsToIgnore: A,
            onComplete: () => {
                BA("tengu_teleport_errors_resolved", {
                    error_types: Array.from(Q).join(",")
                }), G(), B()
            }
        })), {
            exitOnCtrlC: !1
        })
    })
}
async function zT2(A) {
    return await ET2(), ERA(A)
}
async function UT2(A, Q) {
    return await ET2(new Set(["needsGitStash"])), M80({
        initialMessage: A,
        signal: Q
    })
}

function Yv5(A) {
    if (A && typeof A === "object" && "type" in A) {
        if (A.type === "env_manager_log" || A.type === "control_response") return null;
        if ("session_id" in A) return A
    }
    return g(`Event is not a valid SDKMessage: ${JSON.stringify(A)}`), null
}
async function Jv5(A, Q, B) {
    let G = BC(B);
    try {
        let Z = `${o9().BASE_API_URL}/v1/sessions/${A}/events`;
        g(`Fetching events from: ${Z}`);
        let I = await GQ.get(Z, {
            headers: {
                ...G,
                "x-organization-uuid": Q
            },
            timeout: 30000
        });
        if (I.status !== 200) throw Error(`Failed to fetch session events: ${I.statusText}`);
        let Y = I.data;
        if (!Y?.data || !Array.isArray(Y.data)) throw Error("Invalid events response: missing or invalid data array");
        let J = [];
        for (let X of Y.data) {
            let F = Yv5(X);
            if (F) J.push(F)
        }
        let W;
        try {
            let X = `${o9().BASE_API_URL}/v1/sessions/${A}`;
            g(`Fetching session details from: ${X}`);
            let F = await GQ.get(X, {
                headers: {
                    ...G,
                    "x-organization-uuid": Q
                },
                timeout: 15000
            });
            if (F.status === 200) {
                g(`Session details: ${JSON.stringify(F.data,null,2)}`);
                let K = F.data.session_context.outcomes?.find((D) => D.type === "git_repository");
                if (K?.git_info?.branches.length) W = K.git_info.branches[0], g(`Found branch from session context: ${W}`)
            }
        } catch (X) {
            e(Error(`Could not fetch session details: ${X}`))
        }
        return {
            log: J,
            branch: W
        }
    } catch (Z) {
        let I = Z instanceof Error ? Z : Error(String(Z));