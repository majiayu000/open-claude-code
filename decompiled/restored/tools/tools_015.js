/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: tools_015.js
 * 处理时间: 2025-12-09T03:37:25.620Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * GA         ( 10x) = esmImport(module) - ESM import helper
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 15/25
 * Lines: 351416 - 352915 (1500 lines)
 * Original file: cli.js
 */

    }
    return A4.default.createElement(j, {
        flexDirection: "column"
    }, A && A4.default.createElement($, null, A), G())
}

function Zl5(A) {
    if (!A) return [];
    return A.flatMap((Q) => {
        switch (Q.type) {
            case "addDirectories":
                return Q.directories;
            default:
                return []
        }
    })
}

function Il5(A) {
    if (!A) return;
    for (let Q = A.length - 1; Q >= 0; Q--) {
        let B = A[Q];
        if (B?.type === "setMode") return B.mode
    }
    return
}

function Yl5({
    suggestions: A,
    width: Q
}) {
    if (!A || A.length === 0) return A4.default.createElement(j, {
        flexDirection: "row"
    }, A4.default.createElement(j, {
        justifyContent: "flex-end",
        minWidth: Q
    }, A4.default.createElement($, {
        dimColor: !0
    }, "Suggestions ")), A4.default.createElement($, null, "None"));
    let B = a9A(A),
        G = Zl5(A),
        Z = Il5(A);
    if (B.length === 0 && G.length === 0 && !Z) return A4.default.createElement(j, {
        flexDirection: "row"
    }, A4.default.createElement(j, {
        justifyContent: "flex-end",
        minWidth: Q
    }, A4.default.createElement($, {
        dimColor: !0
    }, "Suggestion ")), A4.default.createElement($, null, "None"));
    return A4.default.createElement(j, {
        flexDirection: "column"
    }, A4.default.createElement(j, {
        flexDirection: "row"
    }, A4.default.createElement(j, {
        justifyContent: "flex-end",
        minWidth: Q
    }, A4.default.createElement($, {
        dimColor: !0
    }, "Suggestions ")), A4.default.createElement($, null, " ")), B.length > 0 && A4.default.createElement(j, {
        flexDirection: "row"
    }, A4.default.createElement(j, {
        justifyContent: "flex-end",
        minWidth: Q
    }, A4.default.createElement($, {
        dimColor: !0
    }, " Rules ")), A4.default.createElement(j, {
        flexDirection: "column"
    }, B.map((I, Y) => A4.default.createElement($, {
        key: Y
    }, V1.bullet, " ", r5(I))))), G.length > 0 && A4.default.createElement(j, {
        flexDirection: "row"
    }, A4.default.createElement(j, {
        justifyContent: "flex-end",
        minWidth: Q
    }, A4.default.createElement($, {
        dimColor: !0
    }, " Directories ")), A4.default.createElement(j, {
        flexDirection: "column"
    }, G.map((I, Y) => A4.default.createElement($, {
        key: Y
    }, V1.bullet, " ", I)))), Z && A4.default.createElement(j, {
        flexDirection: "row"
    }, A4.default.createElement(j, {
        justifyContent: "flex-end",
        minWidth: Q
    }, A4.default.createElement($, {
        dimColor: !0
    }, " Mode ")), A4.default.createElement($, null, Iv(Z))))
}

function Zf2({
    permissionResult: A
}) {
    let Q = A.decisionReason,
        B = "suggestions" in A ? A.suggestions : void 0,
        G = 10;
    return A4.default.createElement(j, {
        flexDirection: "column"
    }, A4.default.createElement(j, {
        flexDirection: "row"
    }, A4.default.createElement(j, {
        justifyContent: "flex-end",
        minWidth: 10
    }, A4.default.createElement($, {
        dimColor: !0
    }, "Behavior ")), A4.default.createElement($, null, A.behavior)), A.behavior !== "allow" && A4.default.createElement(j, {
        flexDirection: "row"
    }, A4.default.createElement(j, {
        justifyContent: "flex-end",
        minWidth: 10
    }, A4.default.createElement($, {
        dimColor: !0
    }, "Message ")), A4.default.createElement($, null, A.message)), A4.default.createElement(j, {
        flexDirection: "row"
    }, A4.default.createElement(j, {
        justifyContent: "flex-end",
        minWidth: 10
    }, A4.default.createElement($, {
        dimColor: !0
    }, "Reason ")), Q === void 0 ? A4.default.createElement($, null, "undefined") : A4.default.createElement(Gl5, {
        decisionReason: Q
    })), A4.default.createElement(Yl5, {
        suggestions: B,
        width: 10
    }))
}
var A4;
var If2 = L(() => {
    hA();
    aG();
    J9();
    n2();
    Bw();
    hK();
    A4 = GA(VA(), 1)
});

function Jl5(A, Q) {
    if (!A) return null;
    switch (A.type) {
        case "rule":
            return {
                reasonString: `Permission rule ${oA.bold(r5(A.rule.ruleValue))} requires confirmation for this ${Q}.`, configString: A.rule.source === "policySettings" ? void 0 : "/permissions to update rules"
            };
        case "hook": {
            let B = A.reason ? `:
${A.reason}` : ".";
            return {
                reasonString: `Hook ${oA.bold(A.hookName)} requires confirmation for this ${Q}${B}`,
                configString: "/hooks to update"
            }
        }
        case "classifier":
            return {
                reasonString: `Classifier ${oA.bold(A.classifier)} requires confirmation for this ${Q}.
${A.reason}`, configString: void 0
            };
        default:
            return null
    }
}

function WC({
    permissionResult: A,
    toolType: Q
}) {
    let B = Jl5(A?.decisionReason, Q);
    if (!B) return null;
    return i51.default.createElement(j, {
        marginBottom: 1,
        flexDirection: "column"
    }, i51.default.createElement($, null, B.reasonString), B.configString && i51.default.createElement($, {
        dimColor: !0
    }, B.configString))
}
var i51;
var ih = L(() => {
    hA();
    aG();
    J9();
    i51 = GA(VA(), 1)
});

function Yf2({
    toolUseConfirm: A,
    onDone: Q,
    onReject: B,
    serverName: G,
    toolName: Z,
    args: I
}) {
    let Y = `${G} - ${Z}`,
        J = `mcp__${G}__${Z}`,
        W = F$.useMemo(() => ({
            ...A,
            tool: {
                ...A.tool,
                name: J,
                isMcp: !0
            }
        }), [A, J]),
        X = F$.useMemo(() => ({
            completion_type: "tool_use_single",
            language_name: "none"
        }), []);
    X$(W, X);
    let F = (D) => {
            switch (D) {
                case "yes":
                    FY({
                        completion_type: "tool_use_single",
                        event: "accept",
                        metadata: {
                            language_name: "none",
                            message_id: W.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    }), W.onAllow(W.input, []), Q();
                    break;
                case "yes-dont-ask-again": {
                    FY({
                        completion_type: "tool_use_single",
                        event: "accept",
                        metadata: {
                            language_name: "none",
                            message_id: W.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    });
                    let H = W.permissionResult.behavior === "ask" ? W.permissionResult.suggestions || [] : [];
                    if (H.length === 0) e(Error(`MCPCliPermissionRequest: No MCP suggestions found for ${G}/${Z}`)), W.onAllow(W.input, []);
                    else W.onAllow(W.input, H);
                    Q();
                    break
                }
                case "no":
                    FY({
                        completion_type: "tool_use_single",
                        event: "reject",
                        metadata: {
                            language_name: "none",
                            message_id: W.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    }), W.onReject(), B(), Q();
                    break
            }
        },
        V = pQ(),
        K = F$.useMemo(() => {
            return [{
                label: "Yes",
                value: "yes"
            }, {
                label: `Yes, and don't ask again for ${oA.bold(Y)} commands in ${oA.bold(V)}`,
                value: "yes-dont-ask-again"
            }, {
                label: `No, and tell Claude what to do differently ${oA.bold.dim("(esc)")}`,
                value: "no"
            }]
        }, [Y, V]);
    return F$.default.createElement(hJ, {
        title: "Tool use"
    }, F$.default.createElement(j, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1
    }, F$.default.createElement($, null, Y, "(", I || "{}", ")", F$.default.createElement($, {
        dimColor: !0
    }, " (MCP)")), F$.default.createElement($, {
        dimColor: !0
    }, W.description)), F$.default.createElement(j, {
        flexDirection: "column"
    }, F$.default.createElement(WC, {
        permissionResult: W.permissionResult,
        toolType: "tool"
    }), F$.default.createElement($, null, "Do you want to proceed?"), F$.default.createElement(M0, {
        options: K,
        onChange: F,
        onCancel: () => F("no")
    })))
}
var F$;
var Jf2 = L(() => {
    hA();
    T6();
    CO();
    Mn();
    f5();
    S0();
    J9();
    On();
    ih();
    u1();
    F$ = GA(VA(), 1)
});

function Wf2(A) {
    let {
        toolUseConfirm: Q,
        toolUseContext: B,
        onDone: G,
        onReject: Z,
        verbose: I
    } = A, {
        command: Y,
        description: J
    } = X9.inputSchema.parse(Q.input), W = Ve(Y);
    if (W) {
        let {
            server: X,
            toolName: F,
            args: V
        } = W;
        return vG.default.createElement(Yf2, {
            toolUseConfirm: Q,
            toolUseContext: B,
            onDone: G,
            verbose: I,
            onReject: Z,
            serverName: X,
            toolName: F,
            args: V
        })
    }
    return vG.default.createElement(Wl5, {
        toolUseConfirm: Q,
        toolUseContext: B,
        onDone: G,
        onReject: Z,
        verbose: I,
        command: Y,
        description: J
    })
}

function Wl5({
    toolUseConfirm: A,
    toolUseContext: Q,
    onDone: B,
    onReject: G,
    verbose: Z,
    command: I,
    description: Y
}) {
    let [J] = $B(), [W, X] = vG.useState(!1), [F, V] = vG.useState(""), [K, D] = vG.useState(null), H = lQ.isSandboxingEnabled(), C = H && TIA(A.input), E = vG.useMemo(() => ({
        completion_type: "tool_use_single",
        language_name: "none"
    }), []);
    X$(A, E);
    let z = vG.useMemo(() => Qf2({
        suggestions: A.permissionResult.behavior === "ask" ? A.permissionResult.suggestions : void 0,
        onRejectFeedbackChange: V
    }), [A]);
    h1((q, R) => {
        if (R.ctrl && q === "d") X((P) => !P)
    });

    function w(q) {
        let R = q?.trim();
        if (Pn("tool_use_single", A, "reject", !!R), R) A.onReject(R);
        else A.onReject();
        G(), B()
    }

    function N(q) {
        switch (q) {
            case "yes":
                Pn("tool_use_single", A, "accept"), A.onAllow(A.input, []), B();
                break;
            case "yes-apply-suggestions": {
                Pn("tool_use_single", A, "accept");
                let P = A.permissionResult.behavior === "ask" ? A.permissionResult.suggestions || [] : [];
                A.onAllow(A.input, P), B();
                break
            }
            case "no": {
                if (!F.trim()) {
                    D("no");
                    return
                }
                w(F);
                break
            }
        }
    }
    return vG.default.createElement(hJ, {
        title: H && !C ? "Bash command (unsandboxed)" : "Bash command"
    }, vG.default.createElement(j, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1
    }, vG.default.createElement($, null, X9.renderToolUseMessage({
        command: I,
        description: Y
    }, {
        theme: J,
        verbose: !0
    })), vG.default.createElement($, {
        dimColor: !0
    }, A.description)), W ? vG.default.createElement(vG.default.Fragment, null, vG.default.createElement(Zf2, {
        permissionResult: A.permissionResult
    }), A.toolUseContext.options.debug && vG.default.createElement(j, {
        justifyContent: "flex-end",
        marginTop: 1
    }, vG.default.createElement($, {
        dimColor: !0
    }, "Ctrl-D to hide debug info"))) : vG.default.createElement(vG.default.Fragment, null, vG.default.createElement(j, {
        flexDirection: "column"
    }, vG.default.createElement(WC, {
        permissionResult: A.permissionResult,
        toolType: "command"
    }), vG.default.createElement($, null, "Do you want to proceed?"), vG.default.createElement(M0, {
        options: z,
        onChange: N,
        onCancel: () => w(),
        onFocus: D,
        focusValue: K || void 0
    })), vG.default.createElement(j, {
        justifyContent: "space-between",
        marginTop: 1
    }, vG.default.createElement($, {
        dimColor: !0
    }, "Esc to exit"), A.toolUseContext.options.debug && vG.default.createElement($, {
        dimColor: !0
    }, "Ctrl+d to show debug info"))))
}
var vG;
var Xf2 = L(() => {
    hA();
    nV();
    On();
    CO();
    a30();
    T5();
    Bf2();
    If2();
    ih();
    MJ();
    Jf2();
    EE();
    vG = GA(VA(), 1)
});

function n51({
    toolUseConfirm: A,
    onDone: Q,
    onReject: B,
    verbose: G
}) {
    let [Z] = $B(), I = A.tool.userFacingName(A.input), Y = I.endsWith(" (MCP)") ? I.slice(0, -6) : I, J = _q.useMemo(() => ({
        completion_type: "tool_use_single",
        language_name: "none"
    }), []);
    X$(A, J);
    let W = (V) => {
            switch (V) {
                case "yes":
                    FY({
                        completion_type: "tool_use_single",
                        event: "accept",
                        metadata: {
                            language_name: "none",
                            message_id: A.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    }), A.onAllow(A.input, []), Q();
                    break;
                case "yes-dont-ask-again": {
                    FY({
                        completion_type: "tool_use_single",
                        event: "accept",
                        metadata: {
                            language_name: "none",
                            message_id: A.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    }), A.onAllow(A.input, [{
                        type: "addRules",
                        rules: [{
                            toolName: A.tool.name
                        }],
                        behavior: "allow",
                        destination: "localSettings"
                    }]), Q();
                    break
                }
                case "no":
                    FY({
                        completion_type: "tool_use_single",
                        event: "reject",
                        metadata: {
                            language_name: "none",
                            message_id: A.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    }), A.onReject(), B(), Q();
                    break
            }
        },
        X = pQ(),
        F = _q.useMemo(() => {
            return [{
                label: "Yes",
                value: "yes"
            }, {
                label: `Yes, and don't ask again for ${oA.bold(Y)} commands in ${oA.bold(X)}`,
                value: "yes-dont-ask-again"
            }, {
                label: `No, and tell Claude what to do differently ${oA.bold.dim("(esc)")}`,
                value: "no"
            }]
        }, [Y, X]);
    return _q.default.createElement(hJ, {
        title: "Tool use"
    }, _q.default.createElement(j, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1
    }, _q.default.createElement($, null, Y, "(", A.tool.renderToolUseMessage(A.input, {
        theme: Z,
        verbose: G
    }), ")", I.endsWith(" (MCP)") ? _q.default.createElement($, {
        dimColor: !0
    }, " (MCP)") : ""), _q.default.createElement($, {
        dimColor: !0
    }, A.description)), _q.default.createElement(j, {
        flexDirection: "column"
    }, _q.default.createElement(WC, {
        permissionResult: A.permissionResult,
        toolType: "tool"
    }), _q.default.createElement($, null, "Do you want to proceed?"), _q.default.createElement(M0, {
        options: F,
        onChange: W,
        onCancel: () => W("no")
    })))
}
var _q;
var s30 = L(() => {
    hA();
    T6();
    CO();
    Mn();
    f5();
    S0();
    J9();
    On();
    ih();
    _q = GA(VA(), 1)
});

function Xl5() {
    return Date.now() - t_A()
}

function Fl5(A) {
    return Xl5() < A
}

function Vl5(A) {
    return !Fl5(A)
}

function a51(A, Q) {
    r30.useEffect(() => {
        Kl5(), ZVA()
    }, []), r30.useEffect(() => {
        let B = !1,
            G = setInterval(() => {
                if (Vl5(Ff2) && !B) B = !0, I0A({
                    message: A,
                    notificationType: Q
                })
            }, Ff2);
        return () => clearTimeout(G)
    }, [A, Q])
}
var r30, Ff2 = 6000,
    Kl5;
var o30 = L(() => {
    W61();
    o2();
    S0();
    jQ();
    r30 = GA(VA(), 1);
    Kl5 = t1(() => process.stdin.on("data", ZVA))
});
import {
    extname as Dl5,
    relative as Hl5
} from "path";

function Vf2({
    file_path: A,
    content: Q,
    verbose: B
}) {
    let G = s51.useMemo(() => OA().existsSync(A), [A]),
        Z = s51.useMemo(() => {
            if (!G) return "";
            let Y = VH(A);
            return OA().readFileSync(A, {
                encoding: Y
            })
        }, [A, G]),
        I = s51.useMemo(() => {
            if (!G) return null;
            return Cq({
                filePath: A,
                fileContents: Z,
                edits: [{
                    old_string: Z,
                    new_string: Q,
                    replace_all: !1
                }]
            })
        }, [G, A, Z, Q]);
    return kq.createElement(j, {
        borderDimColor: !0,
        borderStyle: "round",
        flexDirection: "column",
        paddingX: 1
    }, kq.createElement(j, {
        paddingBottom: 1
    }, kq.createElement($, {
        bold: !0
    }, B ? A : Hl5(H0(), A))), I ? fF(I.map((Y) => kq.createElement(Z$, {
        key: Y.newStart,
        patch: Y,
        dim: !1,
        filePath: A
    })), (Y) => kq.createElement($, {
        dimColor: !0,
        key: `ellipsis-${Y}`
    }, "...")) : kq.createElement(XO, {
        code: Q || "(No content)",
        language: Dl5(A).slice(1)
    }))
}
var kq, s51;
var Kf2 = L(() => {
    Zn();
    hA();
    R2();
    M9();
    iJA();
    fk();
    o0();
    kq = GA(VA(), 1), s51 = GA(VA(), 1)
});
import {
    basename as Cl5
} from "path";

function Df2(A) {
    let Q = (J) => {
            return oX.inputSchema.parse(J)
        },
        B = Q(A.toolUseConfirm.input),
        {
            file_path: G,
            content: Z
        } = B,
        I = L0A.useMemo(() => OA().existsSync(G), [G]),
        Y = I ? "overwrite" : "create";
    return L0A.default.createElement(Tn, {
        toolUseConfirm: A.toolUseConfirm,
        toolUseContext: A.toolUseContext,
        onDone: A.onDone,
        onReject: A.onReject,
        title: I ? "Overwrite file" : "Create file",
        question: L0A.default.createElement($, null, "Do you want to ", Y, " ", L0A.default.createElement($, {
            bold: !0
        }, Cl5(G)), "?"),
        content: L0A.default.createElement(Vf2, {
            file_path: G,
            content: Z,
            verbose: A.verbose
        }),
        path: G,
        completionType: "write_file_single",
        languageName: NWA(G),
        parseInput: Q,
        ideDiffSupport: El5
    })
}
var L0A, El5;
var Hf2 = L(() => {
    hA();
    gh();
    Kf2();
    M9();
    o0();
    BTA();
    L0A = GA(VA(), 1), El5 = {
        getConfig: (A) => {
            let B = OA().existsSync(A.file_path) ? Tq(A.file_path) : "";
            return c51(A.file_path, B, A.content, !1)
        },
        applyChanges: (A, Q) => {
            let B = Q[0];
            if (B) return {
                ...A,
                content: B.new_string
            };
            return A
        }
    }
});

function zl5(A) {
    let Q = A.tool;
    if ("getPath" in Q && typeof Q.getPath === "function") try {
        return Q.getPath(A.input)
    } catch {
        return null
    }
    return null
}

function Cf2({
    toolUseConfirm: A,
    onDone: Q,
    onReject: B,
    verbose: G,
    toolUseContext: Z
}) {
    let [I] = $B(), Y = zl5(A), J = A.tool.userFacingName(A.input), W = A.tool.isReadOnly(A.input), F = `${W?"Read":"Edit"} file`, V = (D) => D;
    if (!Y) return ZTA.default.createElement(n51, {
        toolUseConfirm: A,
        toolUseContext: Z,
        onDone: Q,
        onReject: B,
        verbose: G
    });
    let K = ZTA.default.createElement(j, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1
    }, ZTA.default.createElement($, null, J, "(", A.tool.renderToolUseMessage(A.input, {
        theme: I,
        verbose: G
    }), ")"));
    return ZTA.default.createElement(Tn, {
        toolUseConfirm: A,
        toolUseContext: Z,
        onDone: Q,
        onReject: B,
        title: F,
        content: K,
        path: Y,
        parseInput: V,
        operationType: W ? "read" : "write",
        completionType: "tool_use_single",
        languageName: "none"
    })
}
var ZTA;
var Ef2 = L(() => {
    hA();
    s30();
    BTA();
    ZTA = GA(VA(), 1)
});
var LWA = U((HIZ, zf2) => {
    zf2.exports = M0A;
    M0A.CAPTURING_PHASE = 1;
    M0A.AT_TARGET = 2;
    M0A.BUBBLING_PHASE = 3;

    function M0A(A, Q) {
        if (this.type = "", this.target = null, this.currentTarget = null, this.eventPhase = M0A.AT_TARGET, this.bubbles = !1, this.cancelable = !1, this.isTrusted = !1, this.defaultPrevented = !1, this.timeStamp = Date.now(), this._propagationStopped = !1, this._immediatePropagationStopped = !1, this._initialized = !0, this._dispatching = !1, A) this.type = A;
        if (Q)
            for (var B in Q) this[B] = Q[B]
    }
    M0A.prototype = Object.create(Object.prototype, {
        constructor: {
            value: M0A
        },
        stopPropagation: {
            value: function() {
                this._propagationStopped = !0
            }
        },
        stopImmediatePropagation: {
            value: function() {
                this._propagationStopped = !0, this._immediatePropagationStopped = !0
            }
        },
        preventDefault: {
            value: function() {
                if (this.cancelable) this.defaultPrevented = !0
            }
        },
        initEvent: {
            value: function(Q, B, G) {
                if (this._initialized = !0, this._dispatching) return;
                this._propagationStopped = !1, this._immediatePropagationStopped = !1, this.defaultPrevented = !1, this.isTrusted = !1, this.target = null, this.type = Q, this.bubbles = B, this.cancelable = G
            }
        }
    })
});
var e30 = U((CIZ, $f2) => {
    var Uf2 = LWA();
    $f2.exports = t30;

    function t30() {
        Uf2.call(this), this.view = null, this.detail = 0
    }
    t30.prototype = Object.create(Uf2.prototype, {
        constructor: {
            value: t30
        },
        initUIEvent: {
            value: function(A, Q, B, G, Z) {
                this.initEvent(A, Q, B), this.view = G, this.detail = Z
            }
        }
    })
});
var Q70 = U((EIZ, qf2) => {
    var wf2 = e30();
    qf2.exports = A70;

    function A70() {
        wf2.call(this), this.screenX = this.screenY = this.clientX = this.clientY = 0, this.ctrlKey = this.altKey = this.shiftKey = this.metaKey = !1, this.button = 0, this.buttons = 1, this.relatedTarget = null
    }
    A70.prototype = Object.create(wf2.prototype, {
        constructor: {
            value: A70
        },
        initMouseEvent: {
            value: function(A, Q, B, G, Z, I, Y, J, W, X, F, V, K, D, H) {
                switch (this.initEvent(A, Q, B, G, Z), this.screenX = I, this.screenY = Y, this.clientX = J, this.clientY = W, this.ctrlKey = X, this.altKey = F, this.shiftKey = V, this.metaKey = K, this.button = D, D) {
                    case 0:
                        this.buttons = 1;
                        break;
                    case 1:
                        this.buttons = 4;
                        break;
                    case 2:
                        this.buttons = 2;
                        break;
                    default:
                        this.buttons = 0;
                        break
                }
                this.relatedTarget = H
            }
        },
        getModifierState: {
            value: function(A) {
                switch (A) {
                    case "Alt":
                        return this.altKey;
                    case "Control":
                        return this.ctrlKey;
                    case "Shift":
                        return this.shiftKey;
                    case "Meta":
                        return this.metaKey;
                    default:
                        return !1
                }
            }
        }
    })
});
var t51 = U((zIZ, Lf2) => {
    Lf2.exports = o51;
    var Ul5 = 1,
        $l5 = 3,
        wl5 = 4,
        ql5 = 5,
        Nl5 = 7,
        Ll5 = 8,
        Ml5 = 9,
        Ol5 = 11,
        Rl5 = 12,
        Tl5 = 13,
        Pl5 = 14,
        jl5 = 15,
        Sl5 = 17,
        _l5 = 18,
        kl5 = 19,
        yl5 = 20,
        xl5 = 21,
        vl5 = 22,
        bl5 = 23,
        fl5 = 24,
        hl5 = 25,
        gl5 = [null, "INDEX_SIZE_ERR", null, "HIERARCHY_REQUEST_ERR", "WRONG_DOCUMENT_ERR", "INVALID_CHARACTER_ERR", null, "NO_MODIFICATION_ALLOWED_ERR", "NOT_FOUND_ERR", "NOT_SUPPORTED_ERR", "INUSE_ATTRIBUTE_ERR", "INVALID_STATE_ERR", "SYNTAX_ERR", "INVALID_MODIFICATION_ERR", "NAMESPACE_ERR", "INVALID_ACCESS_ERR", null, "TYPE_MISMATCH_ERR", "SECURITY_ERR", "NETWORK_ERR", "ABORT_ERR", "URL_MISMATCH_ERR", "QUOTA_EXCEEDED_ERR", "TIMEOUT_ERR", "INVALID_NODE_TYPE_ERR", "DATA_CLONE_ERR"],
        ul5 = [null, "INDEX_SIZE_ERR (1): the index is not in the allowed range", null, "HIERARCHY_REQUEST_ERR (3): the operation would yield an incorrect nodes model", "WRONG_DOCUMENT_ERR (4): the object is in the wrong Document, a call to importNode is required", "INVALID_CHARACTER_ERR (5): the string contains invalid characters", null, "NO_MODIFICATION_ALLOWED_ERR (7): the object can not be modified", "NOT_FOUND_ERR (8): the object can not be found here", "NOT_SUPPORTED_ERR (9): this operation is not supported", "INUSE_ATTRIBUTE_ERR (10): setAttributeNode called on owned Attribute", "INVALID_STATE_ERR (11): the object is in an invalid state", "SYNTAX_ERR (12): the string did not match the expected pattern", "INVALID_MODIFICATION_ERR (13): the object can not be modified in this way", "NAMESPACE_ERR (14): the operation is not allowed by Namespaces in XML", "INVALID_ACCESS_ERR (15): the object does not support the operation or argument", null, "TYPE_MISMATCH_ERR (17): the type of the object does not match the expected type", "SECURITY_ERR (18): the operation is insecure", "NETWORK_ERR (19): a network error occurred", "ABORT_ERR (20): the user aborted an operation", "URL_MISMATCH_ERR (21): the given URL does not match another URL", "QUOTA_EXCEEDED_ERR (22): the quota has been exceeded", "TIMEOUT_ERR (23): a timeout occurred", "INVALID_NODE_TYPE_ERR (24): the supplied node is invalid or has an invalid ancestor for this operation", "DATA_CLONE_ERR (25): the object can not be cloned."],
        Nf2 = {
            INDEX_SIZE_ERR: Ul5,
            DOMSTRING_SIZE_ERR: 2,
            HIERARCHY_REQUEST_ERR: $l5,
            WRONG_DOCUMENT_ERR: wl5,
            INVALID_CHARACTER_ERR: ql5,
            NO_DATA_ALLOWED_ERR: 6,
            NO_MODIFICATION_ALLOWED_ERR: Nl5,
            NOT_FOUND_ERR: Ll5,
            NOT_SUPPORTED_ERR: Ml5,
            INUSE_ATTRIBUTE_ERR: 10,
            INVALID_STATE_ERR: Ol5,
            SYNTAX_ERR: Rl5,
            INVALID_MODIFICATION_ERR: Tl5,
            NAMESPACE_ERR: Pl5,
            INVALID_ACCESS_ERR: jl5,
            VALIDATION_ERR: 16,
            TYPE_MISMATCH_ERR: Sl5,
            SECURITY_ERR: _l5,
            NETWORK_ERR: kl5,
            ABORT_ERR: yl5,
            URL_MISMATCH_ERR: xl5,
            QUOTA_EXCEEDED_ERR: vl5,
            TIMEOUT_ERR: bl5,
            INVALID_NODE_TYPE_ERR: fl5,
            DATA_CLONE_ERR: hl5
        };

    function o51(A) {
        Error.call(this), Error.captureStackTrace(this, this.constructor), this.code = A, this.message = ul5[A], this.name = gl5[A]
    }
    o51.prototype.__proto__ = Error.prototype;
    for (ITA in Nf2) r51 = {
        value: Nf2[ITA]
    }, Object.defineProperty(o51, ITA, r51), Object.defineProperty(o51.prototype, ITA, r51);
    var r51, ITA
});
var e51 = U((ml5) => {
    ml5.isApiWritable = !globalThis.__domino_frozen__
});
var uJ = U((pl5) => {
    var gJ = t51(),
        hW = gJ,
        cl5 = e51().isApiWritable;
    pl5.NAMESPACE = {
        HTML: "http://www.w3.org/1999/xhtml",
        XML: "http://www.w3.org/XML/1998/namespace",
        XMLNS: "http://www.w3.org/2000/xmlns/",
        MATHML: "http://www.w3.org/1998/Math/MathML",
        SVG: "http://www.w3.org/2000/svg",
        XLINK: "http://www.w3.org/1999/xlink"
    };
    pl5.IndexSizeError = function() {
        throw new gJ(hW.INDEX_SIZE_ERR)
    };
    pl5.HierarchyRequestError = function() {
        throw new gJ(hW.HIERARCHY_REQUEST_ERR)
    };
    pl5.WrongDocumentError = function() {
        throw new gJ(hW.WRONG_DOCUMENT_ERR)
    };
    pl5.InvalidCharacterError = function() {
        throw new gJ(hW.INVALID_CHARACTER_ERR)
    };
    pl5.NoModificationAllowedError = function() {
        throw new gJ(hW.NO_MODIFICATION_ALLOWED_ERR)
    };
    pl5.NotFoundError = function() {
        throw new gJ(hW.NOT_FOUND_ERR)
    };
    pl5.NotSupportedError = function() {
        throw new gJ(hW.NOT_SUPPORTED_ERR)
    };
    pl5.InvalidStateError = function() {
        throw new gJ(hW.INVALID_STATE_ERR)
    };
    pl5.SyntaxError = function() {
        throw new gJ(hW.SYNTAX_ERR)
    };
    pl5.InvalidModificationError = function() {
        throw new gJ(hW.INVALID_MODIFICATION_ERR)
    };
    pl5.NamespaceError = function() {
        throw new gJ(hW.NAMESPACE_ERR)
    };
    pl5.InvalidAccessError = function() {
        throw new gJ(hW.INVALID_ACCESS_ERR)
    };
    pl5.TypeMismatchError = function() {
        throw new gJ(hW.TYPE_MISMATCH_ERR)
    };
    pl5.SecurityError = function() {
        throw new gJ(hW.SECURITY_ERR)
    };
    pl5.NetworkError = function() {
        throw new gJ(hW.NETWORK_ERR)
    };
    pl5.AbortError = function() {
        throw new gJ(hW.ABORT_ERR)
    };
    pl5.UrlMismatchError = function() {
        throw new gJ(hW.URL_MISMATCH_ERR)
    };
    pl5.QuotaExceededError = function() {
        throw new gJ(hW.QUOTA_EXCEEDED_ERR)
    };
    pl5.TimeoutError = function() {
        throw new gJ(hW.TIMEOUT_ERR)
    };
    pl5.InvalidNodeTypeError = function() {
        throw new gJ(hW.INVALID_NODE_TYPE_ERR)
    };
    pl5.DataCloneError = function() {
        throw new gJ(hW.DATA_CLONE_ERR)
    };
    pl5.nyi = function() {
        throw Error("NotYetImplemented")
    };
    pl5.shouldOverride = function() {
        throw Error("Abstract function; should be overriding in subclass.")
    };
    pl5.assert = function(A, Q) {
        if (!A) throw Error("Assertion failed: " + (Q || "") + `
` + Error().stack)
    };
    pl5.expose = function(A, Q) {
        for (var B in A) Object.defineProperty(Q.prototype, B, {
            value: A[B],
            writable: cl5
        })
    };
    pl5.merge = function(A, Q) {
        for (var B in Q) A[B] = Q[B]
    };
    pl5.documentOrder = function(A, Q) {
        return 3 - (A.compareDocumentPosition(Q) & 6)
    };
    pl5.toASCIILowerCase = function(A) {
        return A.replace(/[A-Z]+/g, function(Q) {
            return Q.toLowerCase()
        })
    };
    pl5.toASCIIUpperCase = function(A) {
        return A.replace(/[a-z]+/g, function(Q) {
            return Q.toUpperCase()
        })
    }
});
var B70 = U((wIZ, Of2) => {
    var O0A = LWA(),
        qi5 = Q70(),
        Ni5 = uJ();
    Of2.exports = Mf2;

    function Mf2() {}
    Mf2.prototype = {
        addEventListener: function(Q, B, G) {
            if (!B) return;
            if (G === void 0) G = !1;
            if (!this._listeners) this._listeners = Object.create(null);
            if (!this._listeners[Q]) this._listeners[Q] = [];
            var Z = this._listeners[Q];
            for (var I = 0, Y = Z.length; I < Y; I++) {
                var J = Z[I];
                if (J.listener === B && J.capture === G) return
            }
            var W = {
                listener: B,
                capture: G
            };
            if (typeof B === "function") W.f = B;
            Z.push(W)
        },
        removeEventListener: function(Q, B, G) {
            if (G === void 0) G = !1;
            if (this._listeners) {
                var Z = this._listeners[Q];
                if (Z)
                    for (var I = 0, Y = Z.length; I < Y; I++) {
                        var J = Z[I];
                        if (J.listener === B && J.capture === G) {
                            if (Z.length === 1) this._listeners[Q] = void 0;
                            else Z.splice(I, 1);
                            return
                        }
                    }
            }
        },
        dispatchEvent: function(Q) {
            return this._dispatchEvent(Q, !1)
        },
        _dispatchEvent: function(Q, B) {
            if (typeof B !== "boolean") B = !1;

            function G(X, F) {
                var {
                    type: V,
                    eventPhase: K
                } = F;
                if (F.currentTarget = X, K !== O0A.CAPTURING_PHASE && X._handlers && X._handlers[V]) {
                    var D = X._handlers[V],
                        H;
                    if (typeof D === "function") H = D.call(F.currentTarget, F);
                    else {
                        var C = D.handleEvent;
                        if (typeof C !== "function") throw TypeError("handleEvent property of event handler object isnot a function.");
                        H = C.call(D, F)
                    }
                    switch (F.type) {
                        case "mouseover":
                            if (H === !0) F.preventDefault();
                            break;
                        case "beforeunload":
                        default:
                            if (H === !1) F.preventDefault();
                            break
                    }
                }
                var E = X._listeners && X._listeners[V];
                if (!E) return;
                E = E.slice();
                for (var z = 0, w = E.length; z < w; z++) {
                    if (F._immediatePropagationStopped) return;
                    var N = E[z];
                    if (K === O0A.CAPTURING_PHASE && !N.capture || K === O0A.BUBBLING_PHASE && N.capture) continue;
                    if (N.f) N.f.call(F.currentTarget, F);
                    else {
                        var q = N.listener.handleEvent;
                        if (typeof q !== "function") throw TypeError("handleEvent property of event listener object is not a function.");
                        q.call(N.listener, F)
                    }
                }
            }
            if (!Q._initialized || Q._dispatching) Ni5.InvalidStateError();
            Q.isTrusted = B, Q._dispatching = !0, Q.target = this;
            var Z = [];
            for (var I = this.parentNode; I; I = I.parentNode) Z.push(I);
            Q.eventPhase = O0A.CAPTURING_PHASE;
            for (var Y = Z.length - 1; Y >= 0; Y--)
                if (G(Z[Y], Q), Q._propagationStopped) break;
            if (!Q._propagationStopped) Q.eventPhase = O0A.AT_TARGET, G(this, Q);
            if (Q.bubbles && !Q._propagationStopped) {
                Q.eventPhase = O0A.BUBBLING_PHASE;
                for (var J = 0, W = Z.length; J < W; J++)
                    if (G(Z[J], Q), Q._propagationStopped) break
            }
            if (Q._dispatching = !1, Q.eventPhase = O0A.AT_TARGET, Q.currentTarget = null, B && !Q.defaultPrevented && Q instanceof qi5) switch (Q.type) {
                case "mousedown":
                    this._armed = {
                        x: Q.clientX,
                        y: Q.clientY,
                        t: Q.timeStamp
                    };
                    break;
                case "mouseout":
                case "mouseover":
                    this._armed = null;
                    break;
                case "mouseup":
                    if (this._isClick(Q)) this._doClick(Q);
                    this._armed = null;
                    break
            }
            return !Q.defaultPrevented
        },
        _isClick: function(A) {
            return this._armed !== null && A.type === "mouseup" && A.isTrusted && A.button === 0 && A.timeStamp - this._armed.t < 1000 && Math.abs(A.clientX - this._armed.x) < 10 && Math.abs(A.clientY - this._armed.Y) < 10
        },
        _doClick: function(A) {
            if (this._click_in_progress) return;
            this._click_in_progress = !0;
            var Q = this;
            while (Q && !Q._post_click_activation_steps) Q = Q.parentNode;
            if (Q && Q._pre_click_activation_steps) Q._pre_click_activation_steps();
            var B = this.ownerDocument.createEvent("MouseEvent");
            B.initMouseEvent("click", !0, !0, this.ownerDocument.defaultView, 1, A.screenX, A.screenY, A.clientX, A.clientY, A.ctrlKey, A.altKey, A.shiftKey, A.metaKey, A.button, null);
            var G = this._dispatchEvent(B, !0);
            if (Q) {
                if (G) {
                    if (Q._post_click_activation_steps) Q._post_click_activation_steps(B)
                } else if (Q._cancelled_activation_steps) Q._cancelled_activation_steps()
            }
        },
        _setEventHandler: function(Q, B) {
            if (!this._handlers) this._handlers = Object.create(null);
            this._handlers[Q] = B
        },
        _getEventHandler: function(Q) {
            return this._handlers && this._handlers[Q] || null
        }
    }
});
var G70 = U((qIZ, Rf2) => {
    var nh = uJ(),
        EO = Rf2.exports = {
            valid: function(A) {
                return nh.assert(A, "list falsy"), nh.assert(A._previousSibling, "previous falsy"), nh.assert(A._nextSibling, "next falsy"), !0
            },
            insertBefore: function(A, Q) {
                nh.assert(EO.valid(A) && EO.valid(Q));
                var B = A,
                    G = A._previousSibling,
                    Z = Q,
                    I = Q._previousSibling;
                B._previousSibling = I, G._nextSibling = Z, I._nextSibling = B, Z._previousSibling = G, nh.assert(EO.valid(A) && EO.valid(Q))
            },
            replace: function(A, Q) {
                if (nh.assert(EO.valid(A) && (Q === null || EO.valid(Q))), Q !== null) EO.insertBefore(Q, A);
                EO.remove(A), nh.assert(EO.valid(A) && (Q === null || EO.valid(Q)))
            },
            remove: function(A) {
                nh.assert(EO.valid(A));
                var Q = A._previousSibling;
                if (Q === A) return;
                var B = A._nextSibling;
                Q._nextSibling = B, B._previousSibling = Q, A._previousSibling = A._nextSibling = A, nh.assert(EO.valid(A))
            }
        }
});
var Z70 = U((NIZ, xf2) => {
    xf2.exports = {
        serializeOne: ji5,
        ɵescapeMatchingClosingTag: _f2,
        ɵescapeClosingCommentTag: kf2,
        ɵescapeProcessingInstructionContent: yf2
    };
    var Sf2 = uJ(),
        R0A = Sf2.NAMESPACE,
        Tf2 = {
            STYLE: !0,
            SCRIPT: !0,
            XMP: !0,
            IFRAME: !0,
            NOEMBED: !0,
            NOFRAMES: !0,
            PLAINTEXT: !0
        },
        Li5 = {
            area: !0,
            base: !0,
            basefont: !0,
            bgsound: !0,
            br: !0,
            col: !0,
            embed: !0,
            frame: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        },
        Mi5 = {},
        Pf2 = /[&<>\u00A0]/g,
        jf2 = /[&"<>\u00A0]/g;

    function Oi5(A) {
        if (!Pf2.test(A)) return A;
        return A.replace(Pf2, (Q) => {
            switch (Q) {
                case "&":
                    return "&amp;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case " ":
                    return "&nbsp;"
            }
        })
    }

    function Ri5(A) {
        if (!jf2.test(A)) return A;
        return A.replace(jf2, (Q) => {
            switch (Q) {
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "&":
                    return "&amp;";
                case '"':
                    return "&quot;";
                case " ":
                    return "&nbsp;"
            }
        })
    }

    function Ti5(A) {
        var Q = A.namespaceURI;
        if (!Q) return A.localName;
        if (Q === R0A.XML) return "xml:" + A.localName;
        if (Q === R0A.XLINK) return "xlink:" + A.localName;
        if (Q === R0A.XMLNS)
            if (A.localName === "xmlns") return "xmlns";
            else return "xmlns:" + A.localName;
        return A.name
    }

    function _f2(A, Q) {
        let B = "</" + Q;
        if (!A.toLowerCase().includes(B)) return A;
        let G = [...A],
            Z = A.matchAll(new RegExp(B, "ig"));
        for (let I of Z) G[I.index] = "&lt;";
        return G.join("")
    }
    var Pi5 = /--!?>/;

    function kf2(A) {
        if (!Pi5.test(A)) return A;
        return A.replace(/(--\!?)>/g, "$1&gt;")
    }

    function yf2(A) {
        return A.includes(">") ? A.replaceAll(">", "&gt;") : A
    }

    function ji5(A, Q) {
        var B = "";
        switch (A.nodeType) {
            case 1:
                var G = A.namespaceURI,
                    Z = G === R0A.HTML,
                    I = Z || G === R0A.SVG || G === R0A.MATHML ? A.localName : A.tagName;
                B += "<" + I;
                for (var Y = 0, J = A._numattrs; Y < J; Y++) {
                    var W = A._attr(Y);
                    if (B += " " + Ti5(W), W.value !== void 0) B += '="' + Ri5(W.value) + '"'
                }
                if (B += ">", !(Z && Li5[I])) {
                    var X = A.serialize();
                    if (Tf2[I.toUpperCase()]) X = _f2(X, I);
                    if (Z && Mi5[I] && X.charAt(0) === `
`) B += `
`;
                    B += X, B += "</" + I + ">"
                }
                break;
            case 3:
            case 4:
                var F;
                if (Q.nodeType === 1 && Q.namespaceURI === R0A.HTML) F = Q.tagName;
                else F = "";
                if (Tf2[F] || F === "NOSCRIPT" && Q.ownerDocument._scripting_enabled) B += A.data;
                else B += Oi5(A.data);
                break;
            case 8:
                B += "<!--" + kf2(A.data) + "-->";
                break;
            case 7:
                let V = yf2(A.data);
                B += "<?" + A.target + " " + V + "?>";
                break;
            case 10:
                B += "<!DOCTYPE " + A.name, B += ">";
                break;
            default:
                Sf2.InvalidStateError()
        }
        return B
    }
});
var mD = U((LIZ, uf2) => {
    uf2.exports = VY;
    var gf2 = B70(),
        A31 = G70(),
        vf2 = Z70(),
        R7 = uJ();

    function VY() {
        gf2.call(this), this.parentNode = null, this._nextSibling = this._previousSibling = this, this._index = void 0
    }
    var V$ = VY.ELEMENT_NODE = 1,
        I70 = VY.ATTRIBUTE_NODE = 2,
        Q31 = VY.TEXT_NODE = 3,
        Si5 = VY.CDATA_SECTION_NODE = 4,
        _i5 = VY.ENTITY_REFERENCE_NODE = 5,
        Y70 = VY.ENTITY_NODE = 6,
        bf2 = VY.PROCESSING_INSTRUCTION_NODE = 7,
        ff2 = VY.COMMENT_NODE = 8,
        YTA = VY.DOCUMENT_NODE = 9,
        zO = VY.DOCUMENT_TYPE_NODE = 10,
        jn = VY.DOCUMENT_FRAGMENT_NODE = 11,
        J70 = VY.NOTATION_NODE = 12,
        W70 = VY.DOCUMENT_POSITION_DISCONNECTED = 1,
        X70 = VY.DOCUMENT_POSITION_PRECEDING = 2,
        F70 = VY.DOCUMENT_POSITION_FOLLOWING = 4,
        hf2 = VY.DOCUMENT_POSITION_CONTAINS = 8,
        V70 = VY.DOCUMENT_POSITION_CONTAINED_BY = 16,
        K70 = VY.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
    VY.prototype = Object.create(gf2.prototype, {
        baseURI: {
            get: R7.nyi
        },
        parentElement: {
            get: function() {
                return this.parentNode && this.parentNode.nodeType === V$ ? this.parentNode : null
            }
        },
        hasChildNodes: {
            value: R7.shouldOverride
        },
        firstChild: {
            get: R7.shouldOverride
        },
        lastChild: {
            get: R7.shouldOverride
        },
        isConnected: {
            get: function() {
                let A = this;
                while (A != null) {
                    if (A.nodeType === VY.DOCUMENT_NODE) return !0;
                    if (A = A.parentNode, A != null && A.nodeType === VY.DOCUMENT_FRAGMENT_NODE) A = A.host
                }
                return !1
            }
        },
        previousSibling: {
            get: function() {
                var A = this.parentNode;
                if (!A) return null;
                if (this === A.firstChild) return null;
                return this._previousSibling
            }
        },
        nextSibling: {
            get: function() {
                var A = this.parentNode,
                    Q = this._nextSibling;
                if (!A) return null;
                if (Q === A.firstChild) return null;
                return Q
            }
        },
        textContent: {
            get: function() {
                return null
            },
            set: function(A) {}
        },
        innerText: {
            get: function() {
                return null
            },
            set: function(A) {}
        },
        _countChildrenOfType: {
            value: function(A) {
                var Q = 0;
                for (var B = this.firstChild; B !== null; B = B.nextSibling)
                    if (B.nodeType === A) Q++;
                return Q
            }
        },
        _ensureInsertValid: {
            value: function(Q, B, G) {
                var Z = this,
                    I, Y;
                if (!Q.nodeType) throw TypeError("not a node");
                switch (Z.nodeType) {
                    case YTA:
                    case jn:
                    case V$:
                        break;
                    default:
                        R7.HierarchyRequestError()
                }
                if (Q.isAncestor(Z)) R7.HierarchyRequestError();
                if (B !== null || !G) {
                    if (B.parentNode !== Z) R7.NotFoundError()
                }
                switch (Q.nodeType) {
                    case jn:
                    case zO:
                    case V$:
                    case Q31:
                    case bf2:
                    case ff2:
                        break;
                    default:
                        R7.HierarchyRequestError()
                }
                if (Z.nodeType === YTA) switch (Q.nodeType) {
                    case Q31:
                        R7.HierarchyRequestError();
                        break;
                    case jn:
                        if (Q._countChildrenOfType(Q31) > 0) R7.HierarchyRequestError();
                        switch (Q._countChildrenOfType(V$)) {
                            case 0:
                                break;
                            case 1:
                                if (B !== null) {
                                    if (G && B.nodeType === zO) R7.HierarchyRequestError();
                                    for (Y = B.nextSibling; Y !== null; Y = Y.nextSibling)
                                        if (Y.nodeType === zO) R7.HierarchyRequestError()
                                }