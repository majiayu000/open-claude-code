/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: tools_014.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (19次) = lazyLoader(fn) - Lazy module loader
 *   GA       (16次) = esmImport(module) - ESM import helper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 14/25
 * Lines: 349916 - 351415 (1500 lines)
 * Original file: cli.js
 */

        return {
            baseDir: Q,
            agentType: I,
            whenToUse: Y,
            ...C !== void 0 ? {
                tools: C
            } : {},
            ...z !== void 0 ? {
                disallowedTools: z
            } : {},
            ...w !== void 0 ? {
                skills: w
            } : {},
            getSystemPrompt: () => N,
            source: Z,
            filename: H,
            ...J && typeof J === "string" && rJA.includes(J) ? {
                color: J
            } : {},
            ...V ? {
                model: W
            } : {},
            ...D ? {
                permissionMode: K
            } : {},
            ...F ? {
                forkContext: F
            } : {}
        }
    } catch (I) {
        let Y = I instanceof Error ? I.message : String(I);
        return g(`Error parsing agent from ${A}: ${Y}`), e(I instanceof Error ? I : Error(String(I))), null
    }
}
var Mb2, Pp5, Rb2;
var Oy = L(() => {
    o2();
    h2();
    w0();
    D0();
    u1();
    Ny();
    s2();
    Yn();
    wb2();
    ATA();
    Bw();
    Mb2 = _.object({
        description: _.string().min(1, "Description cannot be empty"),
        tools: _.array(_.string()).optional(),
        disallowedTools: _.array(_.string()).optional(),
        prompt: _.string().min(1, "Prompt cannot be empty"),
        model: _.enum(s7A).optional(),
        permissionMode: _.enum(OR).optional()
    }), Pp5 = _.record(_.string(), Mb2);
    Rb2 = t1(async () => {
        try {
            let A = await qn("agents"),
                Q = [],
                B = A.map(({
                    filePath: J,
                    baseDir: W,
                    frontmatter: X,
                    content: F,
                    source: V
                }) => {
                    let K = _p5(J, W, X, F, V);
                    if (!K) {
                        let D = jp5(X);
                        return Q.push({
                            path: J,
                            error: D
                        }), g(`Failed to parse agent from ${J}: ${D}`), BA("tengu_agent_parse_error", {
                            error: D,
                            location: V
                        }), null
                    }
                    return K
                }).filter((J) => J !== null),
                G = await q0A(),
                I = [...p30(), ...G, ...B],
                Y = My(I);
            for (let J of Y)
                if (J.color) tJA(J.agentType, J.color);
            return {
                activeAgents: Y,
                allAgents: I,
                failedFiles: Q.length > 0 ? Q : void 0
            }
        } catch (A) {
            let Q = A instanceof Error ? A.message : String(A);
            g(`Error loading agent definitions: ${Q}`), e(A instanceof Error ? A : Error(String(A)));
            let B = p30();
            return {
                activeAgents: B,
                allAgents: B,
                failedFiles: [{
                    path: "unknown",
                    error: Q
                }]
            }
        }
    })
});

function Tb2({
    onDone: A
}) {
    return h1((Q, B) => {
        if (B.ctrl && (Q === "c" || Q === "d") || B.escape) A()
    }), Nn.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        padding: 1,
        borderDimColor: !0
    }, Nn.default.createElement(j, {
        marginBottom: 1,
        flexDirection: "column"
    }, Nn.default.createElement($, {
        bold: !0
    }, "You've spent $5 on the Anthropic API this session."), Nn.default.createElement($, null, "Learn more about how to monitor your spending:"), Nn.default.createElement(a4, {
        url: "https://docs.claude.com/s/claude-code-cost"
    })), Nn.default.createElement(j, null, Nn.default.createElement(M0, {
        options: [{
            value: "ok",
            label: "Got it, thanks!"
        }],
        onChange: A,
        onCancel: A
    })))
}
var Nn;
var Pb2 = L(() => {
    hA();
    T6();
    hA();
    Nn = GA(VA(), 1)
});

function Sb2(A, Q = !1) {
    jb2.useEffect(() => {
        if (!Q) N0A(A)
    }, [A, Q])
}
var jb2;
var _b2 = L(() => {
    GG();
    jb2 = GA(VA(), 1)
});
import {
    randomUUID as kp5
} from "crypto";
import * as wWA from "path";

function yb2({
    messages: A,
    onPreRestore: Q,
    onRestoreMessage: B,
    onRestoreCode: G,
    onClose: Z
}) {
    let [I] = _Q(), [Y, J] = W$.useState(void 0), W = JG(), X = W$.useMemo(kp5, []), F = W$.useMemo(() => [...A.filter(Ln), {
        ...j0({
            content: ""
        }),
        uuid: X
    }], [A, X]), [V, K] = W$.useState(F.length - 1), D = Math.max(0, Math.min(V - Math.floor(l30 / 2), F.length - l30)), H = F.length > 1, [C, E] = W$.useState(void 0), [z, w] = W$.useState(void 0), [N, q] = W$.useState(!1), [R, P] = W$.useState("both");
    W$.useEffect(() => {
        BA("tengu_message_selector_opened", {})
    }, []);
    async function y(k) {
        let d = A.indexOf(k),
            QA = A.length - 1 - d;
        if (BA("tengu_message_selector_selected", {
                index_from_end: QA,
                message_type: k.type,
                is_current_prompt: !1
            }), !A.includes(k)) {
            Z();
            return
        }
        if (W) {
            E(k);
            let IA = c00(I.fileHistory, k.uuid);
            w(IA)
        } else {
            Q(), q(!0);
            try {
                await B(k), q(!1), Z()
            } catch (IA) {
                e(IA), q(!1), J(`Failed to restore the conversation:
${IA}`)
            }
        }
    }
    async function v(k) {
        if (BA("tengu_message_selector_restore_option_selected", {
                option: k
            }), !C) {
            J("Message not found.");
            return
        }
        if (k === "nevermind") {
            E(void 0);
            return
        }
        Q(), q(!0), J(void 0);
        let d = null,
            QA = null;
        if (k === "code" || k === "both") try {
            await G(C)
        } catch (IA) {
            d = IA, e(d)
        }
        if (k === "conversation" || k === "both") try {
            await B(C)
        } catch (IA) {
            QA = IA, e(QA)
        }
        if (q(!1), E(void 0), QA && d) J(`Failed to restore the conversation and code:
${QA}
${d}`);
        else if (QA) J(`Failed to restore the conversation:
${QA}`);
        else if (d) J(`Failed to restore the code:
${d}`);
        else Z()
    }
    let x = DQ();

    function p() {
        BA("tengu_message_selector_cancelled", {}), Z()
    }
    h1((k, d) => {
        if (d.escape) {
            p();
            return
        }
        if (N || Y || C || !H) return;
        if (d.return) {
            y(F[V]);
            return
        }
        if (d.upArrow)
            if (d.ctrl || d.shift || d.meta) K(0);
            else K((QA) => Math.max(0, QA - 1));
        if (d.downArrow)
            if (d.ctrl || d.shift || d.meta) K(F.length - 1);
            else K((QA) => Math.min(F.length - 1, QA + 1))
    });
    let [u, o] = W$.useState({});
    W$.useEffect(() => {
        async function k() {
            if (!W) return;
            Promise.all(F.map(async (d, QA) => {
                if (d.uuid !== X) {
                    let IA = K91(I.fileHistory, d.uuid),
                        HA = F.at(QA + 1),
                        wA = IA ? bp5(A, d.uuid, HA?.uuid !== X ? HA?.uuid : void 0) : void 0;
                    if (wA !== void 0) o((KA) => ({
                        ...KA,
                        [QA]: wA
                    }));
                    else o((KA) => ({
                        ...KA,
                        [QA]: void 0
                    }))
                }
            }))
        }
        k()
    }, [F, A, X, I.fileHistory, W, o]);
    let l = W && z?.filesChanged && z.filesChanged.length > 0;
    return $0.createElement(j, {
        flexDirection: "column",
        width: "100%"
    }, $0.createElement(J3, {
        dividerColor: "suggestion"
    }), $0.createElement(j, {
        flexDirection: "column",
        marginX: 1,
        gap: 1
    }, $0.createElement($, {
        bold: !0,
        color: "suggestion"
    }, "Rewind"), Y && $0.createElement($0.Fragment, null, $0.createElement($, {
        color: "error"
    }, "Error: ", Y)), !H && $0.createElement($0.Fragment, null, $0.createElement($, null, "Nothing to rewind to yet.")), !Y && C && H && $0.createElement($0.Fragment, null, $0.createElement($, null, "Confirm you want to restore", " ", !z && "the conversation ", "to the point before you sent this message:"), $0.createElement(j, {
        flexDirection: "column",
        paddingLeft: 1,
        borderStyle: "single",
        borderRight: !1,
        borderTop: !1,
        borderBottom: !1,
        borderLeft: !0,
        borderLeftDimColor: !0
    }, $0.createElement(kb2, {
        userMessage: C,
        color: "text",
        isCurrent: !1
    }), $0.createElement($, {
        dimColor: !0
    }, "(", Xp(new Date(C.timestamp)), ")")), $0.createElement(j, {
        flexDirection: "column"
    }, R === "both" || R === "conversation" ? $0.createElement($, {
        dimColor: !0
    }, "The conversation will be forked.") : $0.createElement($, {
        dimColor: !0
    }, "The conversation will be unchanged."), l && (R === "both" || R === "code") ? $0.createElement(vp5, {
        diffStatsForRestore: z
    }) : $0.createElement($, {
        dimColor: !0
    }, "The code will be unchanged.")), $0.createElement(M0, {
        isDisabled: N,
        options: l ? yp5 : xp5,
        focusValue: l ? "both" : "conversation",
        onFocus: (k) => P(k),
        onChange: (k) => v(k),
        onCancel: () => E(void 0)
    }), l && $0.createElement(j, {
        marginBottom: 1
    }, $0.createElement($, {
        dimColor: !0
    }, V1.warning, " Rewinding does not affect files edited manually or via bash."))), !Y && !C && H && $0.createElement($0.Fragment, null, W ? $0.createElement($, null, "Restore the code and/or conversation to the point before…") : $0.createElement($, null, "Restore and fork the conversation to the point before…"), $0.createElement(j, {
        width: "100%",
        flexDirection: "column"
    }, F.slice(D, D + l30).map((k, d) => {
        let QA = D + d,
            IA = QA === V,
            HA = k.uuid === X,
            wA = QA in u,
            KA = u[QA],
            SA = KA?.filesChanged && KA.filesChanged.length;
        return $0.createElement(j, {
            key: k.uuid,
            height: W ? 3 : 2,
            overflow: "hidden",
            width: "100%",
            flexDirection: "row"
        }, $0.createElement(j, {
            width: 2,
            minWidth: 2
        }, IA ? $0.createElement($, {
            color: "permission",
            bold: !0
        }, V1.pointer, " ") : $0.createElement($, null, "  ")), $0.createElement(j, {
            flexDirection: "column"
        }, $0.createElement(j, {
            flexShrink: 1,
            height: 1,
            overflow: "hidden"
        }, $0.createElement(kb2, {
            userMessage: k,
            color: IA ? "suggestion" : void 0,
            isCurrent: HA,
            paddingRight: 10
        })), W && wA && $0.createElement(j, {
            height: 1,
            flexDirection: "row"
        }, KA ? $0.createElement($0.Fragment, null, $0.createElement($, {
            dimColor: !IA,
            color: "inactive"
        }, SA ? $0.createElement($0.Fragment, null, SA === 1 && KA.filesChanged[0] ? `${wWA.basename(KA.filesChanged[0])} ` : `${SA} files changed `, $0.createElement(xb2, {
            diffStats: KA
        })) : $0.createElement($0.Fragment, null, "No code changes"))) : $0.createElement($, {
            dimColor: !0,
            color: "warning"
        }, V1.warning, " No code restore"))))
    }))), $0.createElement($, {
        dimColor: !0,
        italic: !0
    }, x.pending ? $0.createElement($0.Fragment, null, "Press ", x.keyName, " again to exit") : $0.createElement($0.Fragment, null, !Y && H && "Enter to continue · ", "Esc to exit"))))
}

function vp5({
    diffStatsForRestore: A
}) {
    if (A === void 0) return;
    if (!A.filesChanged || !A.filesChanged[0]) return $0.createElement($, {
        dimColor: !0
    }, "The code has not changed (nothing will be restored).");
    let Q = A.filesChanged.length,
        B = "";
    if (Q === 1) B = wWA.basename(A.filesChanged[0] || "");
    else if (Q === 2) {
        let G = wWA.basename(A.filesChanged[0] || ""),
            Z = wWA.basename(A.filesChanged[1] || "");
        B = `${G} and ${Z}`
    } else B = `${wWA.basename(A.filesChanged[0]||"")} and ${A.filesChanged.length-1} other files`;
    return $0.createElement($0.Fragment, null, $0.createElement($, {
        dimColor: !0
    }, "The code will be restored", " ", $0.createElement(xb2, {
        diffStats: A
    }), " in ", B, "."))
}

function xb2({
    diffStats: A
}) {
    if (!A || !A.filesChanged) return;
    return $0.createElement($0.Fragment, null, $0.createElement($, {
        color: "diffAddedWord"
    }, "+", A.insertions, " "), $0.createElement($, {
        color: "diffRemovedWord"
    }, "-", A.deletions))
}

function kb2({
    userMessage: A,
    color: Q,
    dimColor: B,
    isCurrent: G,
    paddingRight: Z
}) {
    let {
        columns: I
    } = YB();
    if (G) return $0.createElement(j, {
        width: "100%"
    }, $0.createElement($, {
        italic: !0,
        color: Q,
        dimColor: B
    }, "(current)"));
    let Y = A.message.content,
        J = typeof Y === "string" ? Y.trim() : Y[Y.length - 1]?.type === "text" ? Y[Y.length - 1].text.trim() : "(no prompt)";
    if (h51(J)) return $0.createElement(j, {
        flexDirection: "row",
        width: "100%"
    }, $0.createElement($, {
        italic: !0,
        color: Q,
        dimColor: B
    }, "((empty message))"));
    if (J.includes("<bash-input>")) {
        let W = e2(J, "bash-input");
        if (W) return $0.createElement(j, {
            flexDirection: "row",
            width: "100%"
        }, $0.createElement($, {
            color: "bashBorder"
        }, "!"), $0.createElement($, {
            color: Q,
            dimColor: B
        }, " ", W))
    }
    if (J.includes("<command-message>")) {
        let W = e2(J, "command-message"),
            X = e2(J, "command-args");
        if (W)
            if (W.startsWith("The ")) return $0.createElement(j, {
                flexDirection: "row",
                width: "100%"
            }, $0.createElement($, {
                color: Q,
                dimColor: B
            }, W));
            else return $0.createElement(j, {
                flexDirection: "row",
                width: "100%"
            }, $0.createElement($, {
                color: Q,
                dimColor: B
            }, "/", W, " ", X))
    }
    return $0.createElement(j, {
        flexDirection: "row",
        width: "100%"
    }, $0.createElement($, {
        color: Q,
        dimColor: B
    }, Z ? B7(J, I - Z, !0) : J.slice(0, 500).split(`
`).slice(0, 4).join(`
`)))
}

function bp5(A, Q, B) {
    let G = A.findIndex((W) => W.uuid === Q);
    if (G === -1) return;
    let Z = B ? A.findIndex((W) => W.uuid === B) : A.length;
    if (Z === -1) Z = A.length;
    let I = [],
        Y = 0,
        J = 0;
    for (let W = G + 1; W < Z; W++) {
        let X = A[W];
        if (!X || !vb2(X)) continue;
        let F = X.toolUseResult;
        if (!F || !F.filePath || !F.structuredPatch) continue;
        if (!I.includes(F.filePath)) I.push(F.filePath);
        try {
            if ("type" in F && F.type === "create") Y += F.content.split(/\r?\n/).length;
            else
                for (let V of F.structuredPatch) {
                    let K = V.lines.filter((H) => H.startsWith("+")).length,
                        D = V.lines.filter((H) => H.startsWith("-")).length;
                    Y += K, J += D
                }
        } catch {
            continue
        }
    }
    return {
        filesChanged: I,
        insertions: Y,
        deletions: J
    }
}

function Ln(A) {
    if (A.type !== "user") return !1;
    if (Array.isArray(A.message.content) && A.message.content[0]?.type === "tool_result") return !1;
    if (f51(A)) return !1;
    if (A.isMeta) return !1;
    let Q = A.message.content,
        B = typeof Q === "string" ? Q.trim() : Q[Q.length - 1]?.type === "text" ? Q[Q.length - 1].text.trim() : "";
    if (B.indexOf("<local-command-stdout>") !== -1 || B.indexOf("<local-command-stderr>") !== -1 || B.indexOf("<bash-stdout>") !== -1 || B.indexOf("<bash-stderr>") !== -1) return !1;
    return !0
}
var $0, W$, yp5, xp5, l30 = 7;
var QTA = L(() => {
    hA();
    n2();
    nQ();
    w0();
    c9();
    T5();
    H9();
    u1();
    iU();
    m8();
    eV();
    $0 = GA(VA(), 1), W$ = GA(VA(), 1), yp5 = [{
        value: "both",
        label: "Restore code and conversation"
    }, {
        value: "conversation",
        label: "Restore conversation"
    }, {
        value: "code",
        label: "Restore code"
    }, {
        value: "nevermind",
        label: "Never mind"
    }], xp5 = [{
        value: "conversation",
        label: "Restore conversation"
    }, {
        value: "nevermind",
        label: "Never mind"
    }]
});

function fb2(A) {
    bb2.useEffect(() => {
        if (!A.length) return;
        let Q = cU(A);
        if (Q) Q.client.setNotificationHandler(fp5, async (B) => {
            let {
                eventName: G,
                eventData: Z
            } = B.params;
            BA(`tengu_ide_${G}`, Z)
        })
    }, [A])
}
var bb2, fp5;
var hb2 = L(() => {
    h2();
    w0();
    yJ();
    bb2 = GA(VA(), 1), fp5 = _.object({
        method: _.literal("log_event"),
        params: _.object({
            eventName: _.string(),
            eventData: _.object({}).passthrough()
        })
    })
});

function gb2({
    file_path: A,
    edits: Q
}) {
    let B = g51.useMemo(() => OA().existsSync(A) ? Tq(A) : "", [A]),
        G = g51.useMemo(() => Q.map((I) => {
            let Y = E1A(B, I.old_string) || I.old_string;
            return {
                ...I,
                old_string: Y
            }
        }), [B, Q]),
        Z = g51.useMemo(() => Cq({
            filePath: A,
            fileContents: B,
            edits: G
        }), [A, B, G]);
    return dh.createElement(j, {
        flexDirection: "column"
    }, dh.createElement(j, {
        borderDimColor: !0,
        borderColor: "subtle",
        borderStyle: "dashed",
        flexDirection: "column",
        borderLeft: !1,
        borderRight: !1,
        paddingX: 1
    }, fF(Z.map((I) => dh.createElement(Z$, {
        key: I.newStart,
        patch: I,
        dim: !1,
        filePath: A
    })), (I) => dh.createElement($, {
        dimColor: !0,
        key: `ellipsis-${I}`
    }, "..."))))
}
var dh, g51;
var ub2 = L(() => {
    Zn();
    hA();
    fk();
    M9();
    o0();
    z1A();
    dh = GA(VA(), 1), g51 = GA(VA(), 1)
});

function qWA({
    title: A,
    subtitle: Q,
    color: B = "permission"
}) {
    return ch.createElement(j, {
        flexDirection: "column"
    }, ch.createElement(j, {
        flexDirection: "row",
        gap: 1
    }, ch.createElement($, {
        bold: !0,
        color: B
    }, A), Q !== void 0 && ch.createElement($, {
        wrap: "truncate-start"
    }, Q)))
}
var ch;
var u51 = L(() => {
    hA();
    ch = GA(VA(), 1)
});

function hJ({
    title: A,
    subtitle: Q,
    color: B = "permission",
    titleColor: G,
    innerPaddingX: Z = 1,
    children: I
}) {
    return ph.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderColor: B,
        borderLeft: !1,
        borderRight: !1,
        borderBottom: !1,
        marginTop: 1
    }, ph.createElement(j, {
        paddingX: 1
    }, ph.createElement(qWA, {
        title: A,
        subtitle: Q,
        color: G
    })), ph.createElement(j, {
        flexDirection: "column",
        paddingX: Z
    }, I))
}
var ph;
var CO = L(() => {
    hA();
    u51();
    ph = GA(VA(), 1)
});

function FY(A) {
    BA("tengu_unary_event", {
        event: A.event,
        completion_type: A.completion_type,
        language_name: A.metadata.language_name,
        message_id: A.metadata.message_id,
        platform: A.metadata.platform,
        ...A.metadata.hasFeedback !== void 0 && {
            hasFeedback: A.metadata.hasFeedback
        }
    })
}
var Mn = L(() => {
    w0()
});

function X$(A, Q) {
    mb2.useEffect(() => {
        BA("tengu_tool_use_show_permission_request", {
            messageID: A.assistantMessage.message.id,
            toolName: A.tool.name,
            isMcp: A.tool.isMcp ?? !1,
            decisionReasonType: A.permissionResult.decisionReason?.type,
            sandboxEnabled: lQ.isSandboxingEnabled()
        }), Promise.resolve(Q.language_name).then((G) => {
            FY({
                completion_type: Q.completion_type,
                event: "response",
                metadata: {
                    language_name: G,
                    message_id: A.assistantMessage.message.id,
                    platform: m0.platform
                }
            })
        })
    }, [A, Q])
}
var mb2;
var On = L(() => {
    w0();
    gU();
    nV();
    aG();
    hK();
    f5();
    Mn();
    MJ();
    mb2 = GA(VA(), 1)
});
import {
    basename as hp5
} from "path";

function db2({
    filePath: A,
    toolPermissionContext: Q,
    operationType: B = "write"
}) {
    let G = [{
            label: "Yes",
            option: {
                type: "accept-once"
            }
        }],
        Z = qT(A, Q),
        I, Y = oA.bold.dim(`(${EU.displayText})`);
    if (Z)
        if (B === "read") I = "Yes, during this session";
        else I = `Yes, allow all edits during this session ${Y}`;
    else {
        let J = Qv(A),
            W = hp5(J) || "this directory";
        if (B === "read") I = `Yes, allow reading from ${oA.bold(`${W}/`)} during this session`;
        else I = `Yes, allow all edits in ${oA.bold(`${W}/`)} during this session ${Y}`
    }
    return G.push({
        label: I,
        option: {
            type: "accept-session"
        }
    }), G.push({
        label: `No, and tell Claude what to do differently ${oA.bold.dim("(esc)")}`,
        option: {
            type: "reject"
        }
    }), G
}
var cb2 = L(() => {
    J9();
    _Y();
    jp();
    jI()
});

function i30(A, Q, B, G) {
    FY({
        completion_type: Q,
        event: A,
        metadata: {
            language_name: B,
            message_id: G,
            platform: m0.platform
        }
    })
}

function up5(A) {
    let {
        messageId: Q,
        toolUseConfirm: B,
        onDone: G,
        completionType: Z,
        languageName: I
    } = A;
    i30("accept", Z, I, Q), G(), B.onAllow(B.input, [])
}

function mp5(A) {
    let {
        messageId: Q,
        path: B,
        toolUseConfirm: G,
        toolPermissionContext: Z,
        onDone: I,
        completionType: Y,
        languageName: J,
        operationType: W
    } = A;
    i30("accept", Y, J, Q);
    let X = B ? m51(B, W, Z) : [];
    I(), G.onAllow(G.input, X)
}

function dp5(A) {
    let {
        messageId: Q,
        toolUseConfirm: B,
        onDone: G,
        onReject: Z,
        completionType: I,
        languageName: Y
    } = A;
    i30("reject", I, Y, Q), G(), Z(), B.onReject()
}
var gp5, pb2;
var lb2 = L(() => {
    Mn();
    f5();
    _Y();
    gp5 = GA(VA(), 1);
    pb2 = {
        "accept-once": up5,
        "accept-session": mp5,
        reject: dp5
    }
});

function ib2({
    filePath: A,
    completionType: Q,
    languageName: B,
    toolUseConfirm: G,
    onDone: Z,
    onReject: I,
    parseInput: Y,
    operationType: J = "write"
}) {
    let [W] = _Q(), X = W.toolPermissionContext, F = d51.useMemo(() => db2({
        filePath: A,
        toolPermissionContext: X,
        operationType: J
    }), [A, X, J]), V = d51.useCallback((K, D) => {
        let H = pb2[K.type];
        if (!H) return;
        let C = {
                messageId: G.assistantMessage.message.id,
                path: A,
                toolUseConfirm: G,
                toolPermissionContext: X,
                onDone: Z,
                onReject: I,
                completionType: Q,
                languageName: B,
                operationType: J
            },
            E = G.onAllow;
        G.onAllow = (z, w) => {
            E(D, w)
        }, H(C)
    }, [A, Q, B, G, X, Z, I, J]);
    return h1((K, D) => {
        if (EU.check(K, D)) {
            let H = F.find((C) => C.option.type === "accept-session");
            if (H) {
                let C = Y(G.input);
                V(H.option, C)
            }
        }
    }), {
        options: F,
        onChange: V
    }
}
var d51;
var nb2 = L(() => {
    hA();
    jp();
    cb2();
    lb2();
    H9();
    d51 = GA(VA(), 1)
});
import {
    randomUUID as cp5
} from "crypto";
import {
    basename as pp5
} from "path";

function ab2({
    onChange: A,
    toolUseContext: Q,
    filePath: B,
    edits: G,
    editMode: Z
}) {
    let I = lh.useRef(!1),
        [Y, J] = lh.useState(!1),
        W = lh.useMemo(() => cp5().slice(0, 6), []),
        X = lh.useMemo(() => `✻ [Claude Code] ${pp5(B)} (${W}) ⧉`, [B, W]),
        F = NB1(Q.options.mcpClients) && L1().diffTool === "auto" && !B.endsWith(".ipynb"),
        V = MB1(Q.options.mcpClients) ?? "IDE";
    async function K() {
        if (!F) return;
        try {
            BA("tengu_ext_will_show_diff", {});
            let {
                oldContent: D,
                newContent: H
            } = await ip5(B, G, Q, X);
            if (I.current) return;
            BA("tengu_ext_diff_accepted", {});
            let C = lp5(B, D, H, Z);
            if (C.length === 0) {
                BA("tengu_ext_diff_rejected", {});
                let E = cU(Q.options.mcpClients);
                if (E) await n30(X, E);
                A({
                    type: "reject"
                }, {
                    file_path: B,
                    edits: G
                });
                return
            }
            A({
                type: "accept-once"
            }, {
                file_path: B,
                edits: C
            })
        } catch (D) {
            e(D), J(!0)
        }
    }
    return lh.useEffect(() => {
        return K(), () => {
            I.current = !0
        }
    }, []), {
        closeTabInIDE() {
            let D = cU(Q.options.mcpClients);
            if (!D) return Promise.resolve();
            return n30(X, D)
        },
        showingDiffInIDE: F && !Y,
        ideName: V,
        hasError: Y
    }
}

function lp5(A, Q, B, G) {
    let Z = G === "single",
        I = J00({
            filePath: A,
            oldContent: Q,
            newContent: B,
            singleHunk: Z
        });
    if (I.length === 0) return [];
    if (Z && I.length > 1) e(Error(`Unexpected number of hunks: ${I.length}. Expected 1 hunk.`));
    return $Z2(I)
}
async function ip5(A, Q, B, G) {
    let Z = !1,
        I = OA(),
        Y = b9(A),
        J = I.existsSync(Y) ? Tq(Y) : "";
    async function W() {
        if (Z) return;
        Z = !0;
        try {
            await n30(G, X)
        } catch (F) {
            e(F)
        }
        process.off("beforeExit", W), B.abortController.signal.removeEventListener("abort", W)
    }
    B.abortController.signal.addEventListener("abort", W), process.on("beforeExit", W);
    let X = cU(B.options.mcpClients);
    try {
        let {
            updatedFile: F
        } = wMA({
            filePath: Y,
            fileContents: J,
            edits: Q
        });
        if (!X || X.type !== "connected") throw Error("IDE client not available");
        let V = Y,
            K = X.config.ideRunningInWindows === !0;
        if (uQ() === "wsl" && K && process.env.WSL_DISTRO_NAME) V = new fIA(process.env.WSL_DISTRO_NAME).toIDEPath(Y);
        let D = await Wh("openDiff", {
                old_file_path: V,
                new_file_path: V,
                new_file_contents: F,
                tab_name: G
            }, X),
            H = Array.isArray(D) ? D : [D];
        if (sp5(H)) return W(), {
            oldContent: J,
            newContent: H[1].text
        };
        else if (np5(H)) return W(), {
            oldContent: J,
            newContent: F
        };
        else if (ap5(H)) return W(), {
            oldContent: J,
            newContent: J
        };
        throw Error("Not accepted")
    } catch (F) {
        throw e(F), W(), F
    }
}
async function n30(A, Q) {
    try {
        if (!Q || Q.type !== "connected") throw Error("IDE client not available");
        await Wh("close_tab", {
            tab_name: A
        }, Q)
    } catch (B) {
        e(B)
    }
}

function np5(A) {
    return Array.isArray(A) && typeof A[0] === "object" && A[0] !== null && "type" in A[0] && A[0].type === "text" && "text" in A[0] && A[0].text === "TAB_CLOSED"
}

function ap5(A) {
    return Array.isArray(A) && typeof A[0] === "object" && A[0] !== null && "type" in A[0] && A[0].type === "text" && "text" in A[0] && A[0].text === "DIFF_REJECTED"
}

function sp5(A) {
    return Array.isArray(A) && A[0]?.type === "text" && A[0].text === "FILE_SAVED" && typeof A[1].text === "string"
}
var lh;
var sb2 = L(() => {
    o0();
    z1A();
    fk();
    u1();
    jQ();
    yJ();
    w0();
    yJ();
    jI();
    kA0();
    s5();
    M9();
    lh = GA(VA(), 1)
});
import {
    basename as rp5
} from "path";

function rb2({
    onChange: A,
    options: Q,
    input: B,
    filePath: G,
    ideName: Z
}) {
    return dF.createElement(j, {
        flexDirection: "column"
    }, dF.createElement(J3, {
        dividerColor: "permission"
    }), dF.createElement(j, {
        marginX: 1,
        flexDirection: "column",
        gap: 1
    }, dF.createElement($, {
        bold: !0,
        color: "permission"
    }, "Opened changes in ", Z, " ⧉"), uLA() && dF.createElement($, {
        dimColor: !0
    }, "Save file to continue…"), dF.createElement(j, {
        flexDirection: "column"
    }, dF.createElement($, null, "Do you want to make this edit to", " ", dF.createElement($, {
        bold: !0
    }, rp5(G)), "?"), dF.createElement(M0, {
        options: Q.map((I) => ({
            label: I.label,
            value: I.label
        })),
        onChange: (I) => {
            let Y = Q.find((J) => J.label === I);
            if (Y) A(Y.option, B)
        },
        onCancel: () => A({
            type: "reject"
        }, B)
    }))))
}
var dF;
var ob2 = L(() => {
    hA();
    T6();
    yJ();
    eV();
    dF = GA(VA(), 1)
});

function Tn({
    toolUseConfirm: A,
    toolUseContext: Q,
    onDone: B,
    onReject: G,
    title: Z,
    subtitle: I,
    question: Y = "Do you want to proceed?",
    content: J,
    completionType: W = "tool_use_single",
    languageName: X = "none",
    path: F,
    parseInput: V,
    operationType: K = "write",
    ideDiffSupport: D
}) {
    let H = Rn.useMemo(() => ({
        completion_type: W,
        language_name: X
    }), [W, X]);
    X$(A, H);
    let C = ib2({
            filePath: F || "",
            completionType: W,
            languageName: X,
            toolUseConfirm: A,
            onDone: B,
            onReject: G,
            parseInput: V,
            operationType: K
        }),
        E = C.options,
        z = V(A.input),
        w = D ? D.getConfig(z) : null,
        N = w ? {
            onChange: (v, x) => {
                let p = D.applyChanges(z, x.edits);
                C.onChange(v, p)
            },
            toolUseContext: Q,
            filePath: w.filePath,
            edits: (w.edits || []).map((v) => ({
                old_string: v.old_string,
                new_string: v.new_string,
                replace_all: v.replace_all || !1
            })),
            editMode: w.editMode || "single"
        } : {
            onChange: () => {},
            toolUseContext: Q,
            filePath: "",
            edits: [],
            editMode: "single"
        },
        {
            closeTabInIDE: q,
            showingDiffInIDE: R,
            ideName: P
        } = ab2(N),
        y = (v) => {
            v.type, q?.(), C.onChange(v, z)
        };
    if (R && w && F) return Rn.default.createElement(rb2, {
        onChange: (v) => y(v),
        options: E,
        filePath: F,
        input: z,
        ideName: P
    });
    return Rn.default.createElement(hJ, {
        title: Z,
        subtitle: I,
        innerPaddingX: 0
    }, J, Rn.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1
    }, typeof Y === "string" ? Rn.default.createElement($, null, Y) : Y, Rn.default.createElement(M0, {
        options: E.map((v) => ({
            label: v.label,
            value: v.label
        })),
        onChange: (v) => {
            let x = E.find((p) => p.label === v);
            if (x) y(x.option)
        },
        onCancel: () => y({
            type: "reject"
        })
    })))
}
var Rn;
var BTA = L(() => {
    hA();
    T6();
    CO();
    On();
    nb2();
    sb2();
    ob2();
    Rn = GA(VA(), 1)
});

function c51(A, Q, B, G) {
    return {
        filePath: A,
        edits: [{
            old_string: Q,
            new_string: B,
            replace_all: G
        }],
        editMode: "single"
    }
}
import {
    basename as op5
} from "path";
import {
    relative as tp5
} from "path";

function tb2(A) {
    let Q = (J) => {
            return gD.inputSchema.parse(J)
        },
        B = Q(A.toolUseConfirm.input),
        {
            file_path: G,
            old_string: Z,
            new_string: I,
            replace_all: Y
        } = B;
    return GTA.default.createElement(Tn, {
        toolUseConfirm: A.toolUseConfirm,
        toolUseContext: A.toolUseContext,
        onDone: A.onDone,
        onReject: A.onReject,
        title: "Edit file",
        subtitle: tp5(H0(), G),
        question: GTA.default.createElement($, null, "Do you want to make this edit to", " ", GTA.default.createElement($, {
            bold: !0
        }, op5(G)), "?"),
        content: GTA.default.createElement(gb2, {
            file_path: G,
            edits: [{
                old_string: Z,
                new_string: I,
                replace_all: Y || !1
            }]
        }),
        path: G,
        completionType: "str_replace_single",
        languageName: NWA(G),
        parseInput: Q,
        ideDiffSupport: ep5
    })
}
var GTA, ep5;
var eb2 = L(() => {
    hA();
    Wn();
    ub2();
    M9();
    BTA();
    R2();
    GTA = GA(VA(), 1), ep5 = {
        getConfig: (A) => c51(A.file_path, A.old_string, A.new_string, A.replace_all),
        applyChanges: (A, Q) => {
            let B = Q[0];
            if (B) return {
                ...A,
                old_string: B.old_string,
                new_string: B.new_string,
                replace_all: B.replace_all
            };
            return A
        }
    }
});

function Pn(A, {
    assistantMessage: {
        message: {
            id: Q
        }
    }
}, B, G) {
    FY({
        completion_type: A,
        event: B,
        metadata: {
            language_name: "none",
            message_id: Q,
            platform: m0.platform,
            hasFeedback: G ?? !1
        }
    })
}
var a30 = L(() => {
    f5();
    Mn()
});
import * as l51 from "path";

function Al5(A) {
    switch (A.length) {
        case 0:
            return "";
        case 1:
            return oA.bold(A[0]);
        case 2:
            return oA.bold(A[0]) + " and " + oA.bold(A[1]);
        default:
            return oA.bold(A.slice(0, -1).join(", ")) + ", and " + oA.bold(A.slice(-1)[0])
    }
}

function Af2(A) {
    let Q = Al5(A);
    if (Q.length > 50) return "similar";
    else return Q
}

function p51(A) {
    if (A.length === 0) return "";
    let Q = A.map((B) => {
        let G = B.split("/").pop() || B;
        return oA.bold(G) + l51.sep
    });
    if (Q.length === 1) return Q[0];
    if (Q.length === 2) return `${Q[0]} and ${Q[1]}`;
    return `${Q[0]}, ${Q[1]} and ${A.length-2} more`
}

function Ql5(A) {
    let Q = A.filter((F) => F.type === "addRules").flatMap((F) => F.rules || []),
        B = Q.filter((F) => F.toolName === "Read"),
        G = Q.filter((F) => F.toolName === "Bash"),
        Z = A.filter((F) => F.type === "addDirectories").flatMap((F) => F.directories || []),
        I = B.map((F) => F.ruleContent?.replace("/**", "") || "").filter((F) => F),
        Y = G.flatMap((F) => {
            if (!F.ruleContent) return [];
            let V = We1(F.ruleContent) ?? F.ruleContent,
                {
                    commandWithoutRedirections: K,
                    redirections: D
                } = aT(V);
            return D.length > 0 ? K : V
        }),
        J = Z.length > 0,
        W = I.length > 0,
        X = Y.length > 0;
    if (W && !J && !X) {
        if (I.length === 1) {
            let F = I[0],
                V = F.split("/").pop() || F;
            return `Yes, allow reading from ${oA.bold(V)}${l51.sep} from this project`
        }
        return `Yes, allow reading from ${p51(I)} from this project`
    }
    if (J && !W && !X) {
        if (Z.length === 1) {
            let F = Z[0],
                V = F.split("/").pop() || F;
            return `Yes, and always allow access to ${oA.bold(V)}${l51.sep} from this project`
        }
        return `Yes, and always allow access to ${p51(Z)} from this project`
    }
    if (X && !J && !W) return `Yes, and don't ask again for ${Af2(Y)} commands in ${oA.bold(pQ())}`;
    if ((J || W) && !X) {
        let F = [...Z, ...I];
        if (J && W) return `Yes, and always allow access to ${p51(F)} from this project`
    }
    if ((J || W) && X) {
        let F = [...Z, ...I],
            V = p51(F),
            K = Af2(Y);
        if (F.length === 1 && Y.length === 1) return `Yes, and allow access to ${V} and ${K} commands`;
        return `Yes, and allow ${V} access and ${K} commands`
    }
    return null
}

function Qf2({
    suggestions: A = [],
    onRejectFeedbackChange: Q
}) {
    let B = [{
        label: "Yes",
        value: "yes"
    }];
    if (A.length > 0) {
        let G = Ql5(A);
        if (G) B.push({
            label: G,
            value: "yes-apply-suggestions"
        })
    }
    return B.push({
        type: "input",
        label: "No",
        value: "no",
        placeholder: "Type here to tell Claude what to do differently",
        onChange: Q
    }), B
}
var Bf2 = L(() => {
    J9();
    S0();
    De1();
    gU()
});

function Bl5(A) {
    switch (A) {
        case "cliArg":
            return "CLI argument";
        case "command":
            return "command configuration";
        case "session":
            return "current session";
        case "localSettings":
            return "local settings";
        case "projectSettings":
            return "project settings";
        case "policySettings":
            return "managed settings";
        case "userSettings":
            return "global settings";
        case "flagSettings":
            return "--settings flag"
    }
}

function Gf2(A) {
    switch (A.type) {
        case "rule":
            return `${oA.bold(r5(A.rule.ruleValue))} rule from ${Bl5(A.rule.source)}`;
        case "mode":
            return `${Iv(A.mode)} mode`;
        case "sandboxOverride":
            return "Requires permission to bypass sandbox";
        case "workingDir":
            return A.reason;
        case "other":
            return A.reason;
        case "permissionPromptTool":
            return `${oA.bold(A.permissionPromptToolName)} permission prompt tool`;
        case "hook":
            return A.reason ? `${oA.bold(A.hookName)} hook: ${A.reason}` : `${oA.bold(A.hookName)} hook`;
        case "asyncAgent":
            return A.reason;
        case "classifier":
            return `${oA.bold(A.classifier)} classifier: ${A.reason}`
    }
}

function Gl5({
    title: A,
    decisionReason: Q
}) {
    let [B] = $B();

    function G() {
        switch (Q.type) {
            case "subcommandResults":
                return A4.default.createElement(j, {
                    flexDirection: "column"
                }, Array.from(Q.reasons.entries()).map(([Z, I]) => {
                    let Y = I.behavior === "allow" ? tQ("success", B)(V1.tick) : tQ("error", B)(V1.cross);
                    return A4.default.createElement(j, {
                        flexDirection: "column",
                        key: Z
                    }, A4.default.createElement($, null, Y, " ", Z), I.decisionReason !== void 0 && I.decisionReason.type !== "subcommandResults" && A4.default.createElement($, null, "  ", "⎿", "  ", Gf2(I.decisionReason)), I.behavior === "ask" && (() => {
                        let J = a9A(I.suggestions);
                        return J.length > 0 ? A4.default.createElement($, null, "  ", "⎿", "  ", "Suggested rules:", " ", J.map((W) => oA.bold(r5(W))).join(", ")) : null
                    })())
                }));
            default:
                return A4.default.createElement($, null, Gf2(Q))
        }