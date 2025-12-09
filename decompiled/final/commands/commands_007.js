/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: commands_007.js
 * 处理时间: 2025-12-09T03:41:37.132Z
 * 变量映射: 4 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * GA       ( 13x) esmImport(module) - ESM import
 * tI       (  3x) TODO_READ_TOOL object
 * S3       (  1x) getDefaultSonnetModel() - Returns "claude-sonnet-4-5...
 * V0       (  1x) parseBoolean(value) - Parse bool env
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: commands
 * File: 7/8
 * Lines: 390318 - 391817 (1500 lines)
 * Original file: cli.js
 */

                    v.cancel(), P();
                    return
                }
            }
            if (Y === "prompt" && LXA(l) && d > 0 && !UL3(IA, l)) {
                let HA = j19(l, A),
                    wA = void 0;
                if (l.length > 1) {
                    let KA = l.endsWith(" ") ? l.slice(1, -1) : l.slice(1),
                        SA = A.find((sA) => sA.userFacingName() === KA && sA.argumentHint);
                    if (SA?.argumentHint) wA = SA.argumentHint
                }
                if (W((KA) => ({
                        commandArgumentHint: wA,
                        suggestions: HA,
                        selectedSuggestion: wZ1(KA.suggestions, KA.selectedSuggestion, HA)
                    })), C(HA.length > 0 ? "command" : "none"), HA.length > 0) {
                    let KA = Math.max(...HA.map((SA) => SA.displayText.length));
                    z(KA + 5)
                }
                return
            }
            if (H === "command") v.cancel(), P();
            if (QA) {
                let HA = xPA(l, d, !0);
                if (HA && HA.token.startsWith("@")) {
                    let wA = o19(HA);
                    v(wA, !0);
                    return
                }
            }
            if (H === "file") {
                let HA = xPA(l, d, !0);
                if (HA) {
                    let wA = o19(HA);
                    v(wA, !1)
                } else v.cancel(), P()
            }
            if (H === "shell") {
                let HA = X[0]?.metadata?.inputSnapshot;
                if (Y !== "bash" || l !== HA) v.cancel(), P()
            }
        }, [H, A, W, P, v, Y, K]);
    pq.useEffect(() => {
        x(Z)
    }, [Z, x]);
    let p = pq.useCallback(async () => {
            if (X.length > 0) {
                v.cancel();
                let l = F === -1 ? 0 : F,
                    k = X[l];
                if (k && r19(k)) return;
                if (H === "command" && l < X.length) {
                    if (k) aY0(k, !1, A, Q, G, B), P()
                } else if (H === "directory" && X.length > 0) {
                    let d = X[l];
                    if (d) {
                        let QA = Z.indexOf(" "),
                            HA = Z.slice(0, QA + 1) + d.id + "/";
                        Q(HA), G(HA.length), W((wA) => ({
                            ...wA,
                            commandArgumentHint: void 0
                        })), x(HA, HA.length)
                    }
                } else if (H === "shell" && X.length > 0) {
                    let d = X[l];
                    if (d) {
                        let QA = d.metadata;
                        JJ0(d, Z, I, Q, G, QA?.completionType), P()
                    }
                } else if (H === "file" && X.length > 0) {
                    let d = xPA(Z, I, !0);
                    if (!d) {
                        P();
                        return
                    }
                    let QA = v19(X),
                        IA = d.token.startsWith("@"),
                        HA;
                    if (d.isQuoted) HA = d.token.slice(2).replace(/"$/, "").length;
                    else if (IA) HA = d.token.length - 1;
                    else HA = d.token.length;
                    if (QA.length > HA) {
                        let wA = YJ0({
                            displayText: QA,
                            mode: Y,
                            hasAtPrefix: IA,
                            needsQuotes: !1,
                            isQuoted: d.isQuoted,
                            isComplete: !1
                        });
                        UZ1(wA, Z, d.token, d.startPos, Q, G), x(Z.replace(d.token, wA), I)
                    } else if (l < X.length) {
                        let wA = X[l];
                        if (wA) {
                            let KA = wA.displayText.includes(" "),
                                SA = YJ0({
                                    displayText: wA.displayText,
                                    mode: Y,
                                    hasAtPrefix: IA,
                                    needsQuotes: KA,
                                    isQuoted: d.isQuoted,
                                    isComplete: !0
                                });
                            UZ1(SA, Z, d.token, d.startPos, Q, G), P()
                        }
                    }
                }
            } else if (Z.trim() !== "") {
                let l, k;
                if (Y === "bash") {
                    l = "shell";
                    let d = await EL3(Z, I);
                    if (d.length === 1) {
                        let QA = d[0];
                        if (QA) {
                            let IA = QA.metadata;
                            JJ0(QA, Z, I, Q, G, IA?.completionType)
                        }
                        k = []
                    } else k = d
                } else {
                    l = "file";
                    let d = xPA(Z, I, !0);
                    if (d) {
                        let QA = d.token.startsWith("@"),
                            IA = QA ? d.token.substring(1) : d.token;
                        k = await ZJ0(IA, w.mcp.resources, J, QA, w.mcp.clients)
                    } else k = []
                }
                if (k.length > 0) W((d) => ({
                    commandArgumentHint: void 0,
                    suggestions: k,
                    selectedSuggestion: wZ1(d.suggestions, d.selectedSuggestion, k)
                })), C(l), z(void 0)
            }
        }, [X, F, Z, H, A, Y, Q, G, B, P, I, x, w.mcp.resources, w.mcp.clients, W, J, v]),
        u = pq.useCallback(() => {
            if (F < 0 || X.length === 0) return;
            let l = X[F];
            if (l && r19(l)) {
                let k = l.metadata;
                if (k?.serverName) {
                    let d = k.enabled;
                    q(k.serverName);
                    let QA = d ? "disabled" : "enabled";
                    D({
                        key: `mcp-server-toggle-${k.serverName}`,
                        jsx: $C.createElement($, null, "MCP server '", k.serverName, "' ", QA, ". Use", " ", $C.createElement($, {
                            color: "suggestion"
                        }, "/mcp"), " to manage servers."),
                        priority: "immediate",
                        timeoutMs: 3000
                    }), Q(""), G(0), v.cancel(), P()
                }
                return
            }
            if (H === "command" && F < X.length) {
                if (l) aY0(l, !0, A, Q, G, B), v.cancel(), P()
            } else if (H === "shell" && F < X.length) {
                let k = X[F];
                if (k) {
                    let d = k.metadata;
                    JJ0(k, Z, I, Q, G, d?.completionType), v.cancel(), P()
                }
            } else if (H === "file" && F < X.length) {
                let k = xPA(Z, I, !0);
                if (k) {
                    if (l) {
                        let d = k.token.startsWith("@"),
                            QA = l.displayText.includes(" "),
                            IA = YJ0({
                                displayText: l.displayText,
                                mode: Y,
                                hasAtPrefix: d,
                                needsQuotes: QA,
                                isQuoted: k.isQuoted,
                                isComplete: !0
                            });
                        UZ1(IA, Z, k.token, k.startPos, Q, G), v.cancel(), P()
                    }
                }
            }
        }, [X, F, H, A, Z, I, Y, Q, G, B, P, q, D, v]),
        o = We(Z).level !== "none";
    return h1((l, k) => {
        if (k.tab && !k.shift) {
            if (X.length === 0 && Y !== "bash" && !V0(process.env.MAX_THINKING_TOKENS)) {
                if (o) return;
                let d = !w.thinkingEnabled;
                N((QA) => ({
                    ...QA,
                    thinkingEnabled: d
                })), D({
                    key: `toggled-thinking-${d?"on":"off"}`,
                    invalidates: ["toggled-thinking-on", "toggled-thinking-off", "toggled-thinking-initial"],
                    jsx: d ? $C.createElement($C.Fragment, null, $C.createElement($, {
                        color: "suggestion"
                    }, "Thinking on"), $C.createElement($, {
                        dimColor: !0
                    }, " (tab to toggle)")) : $C.createElement($, {
                        dimColor: !0
                    }, "Thinking off (tab to toggle)"),
                    priority: "immediate",
                    timeoutMs: 3000
                }), BA("tengu_thinking_toggled", {
                    enabled: d
                })
            } else p();
            return
        }
        if (X.length === 0) return;
        if (k.downArrow || k.ctrl && l === "n") {
            W((d) => ({
                ...d,
                selectedSuggestion: d.selectedSuggestion >= X.length - 1 ? 0 : d.selectedSuggestion + 1
            }));
            return
        }
        if (k.upArrow || k.ctrl && l === "p") {
            W((d) => ({
                ...d,
                selectedSuggestion: d.selectedSuggestion <= 0 ? X.length - 1 : d.selectedSuggestion - 1
            }));
            return
        }
        if (k.return) u();
        if (k.escape) v.cancel(), P()
    }), {
        suggestions: X,
        selectedSuggestion: F,
        suggestionType: H,
        maxColumnWidth: E,
        commandArgumentHint: V
    }
}
var pq, $C, qZ1 = null;
var e19 = L(() => {
    hA();
    S19();
    y19();
    QJ0();
    u19();
    p19();
    $U();
    H9();
    w0();
    hQ();
    UU();
    hA();
    FQA();
    zU();
    pq = GA(VA(), 1), $C = GA(VA(), 1)
});

function A09(A) {
    let [Q, B] = on.useState("INSERT"), G = on.default.useRef(""), Z = on.default.useRef(null), I = on.default.useRef(""), Y = on.default.useRef(""), J = on.default.useRef(null), W = YoA(A), X = (y, v) => {
        return y === v && (y === "d" || y === "c")
    }, F = (y, v) => {
        switch (y) {
            case "h":
                return v.left();
            case "l":
                return v.right();
            case "j":
                return v.downLogicalLine();
            case "k":
                return v.upLogicalLine();
            case "0":
                return v.startOfLogicalLine();
            case "^":
                return v.firstNonBlankInLogicalLine();
            case "$":
                return v.endOfLogicalLine();
            case "w":
                return v.nextWord();
            case "e":
                return v.endOfWord();
            case "b":
                return v.prevWord();
            case "W":
                return v.nextWORD();
            case "E":
                return v.endOfWORD();
            case "B":
                return v.prevWORD();
            case "gg":
                return v.startOfFirstLine();
            case "G":
                return v.startOfLastLine();
            default:
                return null
        }
    }, V = (y, v, x = 1) => {
        if (X(y, G.current)) return v.startOfLine();
        let p = v;
        for (let u = 0; u < x; u++) {
            if (!p) break;
            p = F(y, p)
        }
        return p
    }, K = (y, v, x, p = 1) => {
        let u = W.offset,
            o = y === "change";
        if (X(v, G.current)) {
            let k = x.startOfLogicalLine();
            if (x.text.indexOf(`
`) === -1) A.onChange(""), u = 0;
            else {
                let {
                    line: d
                } = x.getPosition();
                if (y === "delete") {
                    let QA = x.text.split(`
`),
                        IA = Math.min(p, QA.length - d);
                    QA.splice(d, IA);
                    let HA = QA.join(`
`);
                    A.onChange(HA), u = q7.fromText(HA, A.columns, d < QA.length ? k.offset : Math.max(0, k.offset - 1)).offset
                } else if (y === "change") {
                    let QA = x.text.split(`
`);
                    for (let IA = 0; IA < Math.min(p, QA.length - d); IA++) QA[d + IA] = "";
                    A.onChange(QA.join(`
`)), u = k.offset
                } else u = k.offset
            }
            return {
                newOffset: u,
                switchToInsert: o
            }
        }
        let l = V(v, x, p);
        if (!l || x.equals(l)) return {
            newOffset: u,
            switchToInsert: o
        };
        if (y === "move") u = l.offset;
        else {
            let [k, d] = x.offset <= l.offset ? [x, l] : [l, x], QA = d;
            if (v === "e" && x.offset <= l.offset) QA = d.right();
            else if ((v === "w" || v === "W") && y === "change") QA = w(x, v, p);
            let IA = k.modifyText(QA, "");
            if (A.onChange(IA.text), y === "change") u = k.offset;
            else u = IA.offset
        }
        return {
            newOffset: u,
            switchToInsert: o
        }
    }, D = (y) => {
        if (y !== void 0) W.setOffset(y);
        B("INSERT"), A.onModeChange?.("INSERT")
    }, H = () => {
        B("NORMAL"), A.onModeChange?.("NORMAL")
    }, C = (y) => {
        Z.current = y
    }, E = (y, v) => {
        if (v === "below") {
            let p = y.endOfLogicalLine().insert(`
`);
            return A.onChange(p.text), p.offset
        } else {
            let x = y.startOfLogicalLine(),
                p = x.insert(`
`);
            return A.onChange(p.text), x.offset
        }
    }, z = (y, v) => {
        let x = y.text[y.offset] ?? "";
        return v.test(x)
    }, w = (y, v, x) => {
        let u = v === "w" ? /\w/ : /\S/;
        if (!z(y, u)) return V(v, y, x) || y;
        let o = y;
        while (z(o, u) && !o.isAtEnd()) o = o.right();
        if (x > 1)
            for (let l = 1; l < x; l++) {
                while (!z(o, u) && !o.isAtEnd()) o = o.right();
                while (z(o, u) && !o.isAtEnd()) o = o.right()
            }
        return o
    }, N = (y, v, x, p, u = 1) => {
        let o = y.text,
            l = 0;
        if (x === "forward") {
            for (let k = y.offset + 1; k < o.length; k++)
                if (o[k] === v) {
                    if (l++, l === u) {
                        let d = p ? Math.max(y.offset, k - 1) : k;
                        return new q7(y.measuredText, d)
                    }
                }
        } else
            for (let k = y.offset - 1; k >= 0; k--)
                if (o[k] === v) {
                    if (l++, l === u) {
                        let d = p ? Math.min(y.offset, k + 1) : k;
                        return new q7(y.measuredText, d)
                    }
                } return null
    }, q = (y) => {
        let v = Z.current;
        if (!v) return;
        switch (v.type) {
            case "delete":
                if (v.motion)
                    if (v.motion.length === 2 && "fFtT".includes(v.motion[0])) {
                        let x = v.motion[0],
                            p = v.motion[1],
                            u = x === "f" || x === "t" ? "forward" : "backward",
                            o = x === "t" || x === "T",
                            l = N(y, p, u, o, v.count || 1);
                        if (l) {
                            let k = y.offset <= l.offset,
                                [d, QA] = k ? [y, l] : [l, y],
                                IA = QA,
                                HA = d;
                            if (o) IA = QA.right();
                            else IA = QA.right();
                            let wA = HA.modifyText(IA, "");
                            A.onChange(wA.text), W.setOffset(wA.offset)
                        }
                    } else {
                        let {
                            newOffset: x
                        } = K("delete", v.motion, y, v.count || 1);
                        W.setOffset(x)
                    } break;
            case "change":
                if (v.motion)
                    if (v.motion.length === 2 && "fFtT".includes(v.motion[0])) {
                        let x = v.motion[0],
                            p = v.motion[1],
                            u = x === "f" || x === "t" ? "forward" : "backward",
                            o = x === "t" || x === "T",
                            l = N(y, p, u, o, v.count || 1);
                        if (l) {
                            let k = y.offset <= l.offset,
                                [d, QA] = k ? [y, l] : [l, y],
                                IA = QA,
                                HA = d;
                            if (o) IA = QA.right();
                            else IA = QA.right();
                            let wA = HA.modifyText(IA, "");
                            A.onChange(wA.text), W.setOffset(HA.offset), D(HA.offset)
                        }
                    } else {
                        let {
                            newOffset: x
                        } = K("change", v.motion, y, v.count || 1);
                        W.setOffset(x), D(x)
                    } break;
            case "insert":
                if (v.insertedText) {
                    let x = y.insert(v.insertedText);
                    A.onChange(x.text), W.setOffset(x.offset)
                }
                break;
            case "x": {
                let x = v.count || 1,
                    p = y;
                for (let u = 0; u < x; u++)
                    if (!p.equals(p.del())) p = p.del();
                A.onChange(p.text), W.setOffset(p.offset);
                break
            }
            case "o": {
                let x = E(y, "below");
                D(x);
                break
            }
            case "O": {
                let x = E(y, "above");
                D(x);
                break
            }
            case "replace":
                break;
            case "r": {
                if (v.replacementChar) {
                    let x = v.count || 1,
                        p = y;
                    for (let u = 0; u < x; u++)
                        if (p = p.modifyText(p.right(), v.replacementChar), u < x - 1) p = q7.fromText(p.text, A.columns, p.offset + 1);
                    A.onChange(p.text), W.setOffset(y.offset)
                }
                break
            }
        }
    }, R = (y = !0) => {
        if (!Y.current) return 1;
        let v = parseInt(Y.current, 10);
        if (isNaN(v)) {
            if (y) Y.current = "";
            return 1
        }
        let x = Math.min(v, $L3);
        if (y) Y.current = "";
        return x
    };
    return {
        ...W,
        onInput: (y, v) => {
            let x = q7.fromText(A.value, A.columns, W.offset);
            if (v.ctrl) {
                W.onInput(y, v);
                return
            }
            if (v.escape && Q === "INSERT") {
                if (I.current) C({
                    type: "insert",
                    insertedText: I.current
                }), I.current = "";
                H();
                return
            }
            if (Q === "NORMAL" && J.current) {
                if (J.current === "change" && y === "c" || J.current === "delete" && y === "d") {
                    let d = J.current,
                        QA = R(),
                        {
                            newOffset: IA
                        } = K(d, y, x, QA);
                    if (W.setOffset(IA), C({
                            type: d,
                            motion: y,
                            count: QA
                        }), J.current = null, G.current = "", d === "change") D(IA);
                    return
                }
                if (G.current && "fFtT".includes(G.current)) {
                    let d = G.current,
                        QA = R(!1),
                        IA = d === "f" || d === "t" ? "forward" : "backward",
                        HA = d === "t" || d === "T",
                        wA = N(x, y, IA, HA, QA || 1);
                    if (wA) {
                        let KA = J.current,
                            SA = x.offset <= wA.offset,
                            [sA, NA] = SA ? [x, wA] : [wA, x],
                            qA = NA,
                            DA = sA;
                        if (HA) qA = NA.right();
                        else qA = NA.right();
                        let yA = DA.modifyText(qA, "");
                        A.onChange(yA.text);
                        let rA = KA === "change" ? DA.offset : yA.offset;
                        if (W.setOffset(rA), C({
                                type: KA,
                                motion: d + y,
                                count: QA || 1
                            }), KA === "change") D(rA)
                    }
                    J.current = null, G.current = "", Y.current = "";
                    return
                }
                if ("fFtT".includes(y)) {
                    G.current = y;
                    return
                }
                if ("0123456789".includes(y)) {
                    Y.current += y;
                    return
                }
                let o = J.current,
                    l = R(),
                    {
                        newOffset: k
                    } = K(o, y, x, l);
                if (W.setOffset(k), C({
                        type: o,
                        motion: y,
                        count: l
                    }), J.current = null, G.current = "", o === "change") D(k);
                return
            }
            let p = (o, l, k) => {
                    let {
                        newOffset: d
                    } = K(o, l, x, k || 1);
                    if (W.setOffset(d), o !== "move") C({
                        type: o,
                        motion: l,
                        count: k
                    });
                    if (o === "change") D(d);
                    G.current = ""
                },
                u = (o) => {
                    I.current = "", D(o.offset)
                };
            if (Q === "NORMAL" && G.current) {
                let o = G.current;
                switch (o) {
                    case "d":
                        if (y === "d") {
                            let l = R();
                            p("delete", y, l), J.current = null;
                            return
                        }
                        return;
                    case "c":
                        if (y === "c") {
                            let l = R();
                            p("change", y, l), J.current = null;
                            return
                        }
                        return;
                    case "g":
                        if (y === "g") {
                            let l = R();
                            p("move", "gg", l);
                            return
                        }
                        break;
                    case "r": {
                        let l = R(),
                            k = x;
                        for (let d = 0; d < l; d++)
                            if (k = k.modifyText(k.right(), y), d < l - 1) k = q7.fromText(k.text, A.columns, k.offset + 1);
                        A.onChange(k.text), W.setOffset(x.offset), C({
                            type: "r",
                            replacementChar: y,
                            count: l
                        }), G.current = "";
                        return
                    }
                    case "f":
                    case "F":
                    case "t":
                    case "T": {
                        let l = R(),
                            QA = N(x, y, o === "f" || o === "t" ? "forward" : "backward", o === "t" || o === "T", l);
                        if (QA) W.setOffset(QA.offset);
                        G.current = "";
                        return
                    }
                }
                G.current = ""
            }
            if (Q === "NORMAL") {
                if ("0123456789".includes(y)) {
                    if (y === "0" && Y.current === "") {
                        let {
                            newOffset: o
                        } = K("move", "0", x);
                        W.setOffset(o);
                        return
                    }
                    Y.current += y;
                    return
                }
                switch (y) {
                    case ".": {
                        q(x);
                        return
                    }
                    case "u": {
                        if (A.onUndo) A.onUndo();
                        return
                    }
                    case "i":
                        Y.current = "", I.current = "", D();
                        return;
                    case "I": {
                        Y.current = "", u(x.startOfLogicalLine());
                        return
                    }
                    case "a": {
                        Y.current = "", u(x.right());
                        return
                    }
                    case "A": {
                        Y.current = "", u(x.endOfLogicalLine());
                        return
                    }
                    case "o": {
                        Y.current = "";
                        let o = E(x, "below");
                        C({
                            type: "o"
                        }), I.current = "", D(o);
                        return
                    }
                    case "O": {
                        Y.current = "";
                        let o = E(x, "above");
                        C({
                            type: "O"
                        }), I.current = "", D(o);
                        return
                    }
                    case "h":
                    case "l":
                    case "j":
                    case "k":
                    case "^":
                    case "$":
                    case "w":
                    case "e":
                    case "b":
                    case "W":
                    case "E":
                    case "B":
                    case "G": {
                        let o = R();
                        p("move", y, o);
                        return
                    }
                    case "g": {
                        G.current = "g";
                        return
                    }
                    case "r": {
                        G.current = "r";
                        return
                    }
                    case "f":
                    case "F":
                    case "t":
                    case "T": {
                        G.current = y;
                        return
                    }
                    case "x": {
                        let o = R(),
                            l = x;
                        for (let k = 0; k < o; k++)
                            if (!l.equals(l.del())) l = l.del();
                        A.onChange(l.text), W.setOffset(l.offset), C({
                            type: "x",
                            count: o
                        });
                        return
                    }
                    case "d":
                        G.current = "d", J.current = "delete";
                        return;
                    case "D": {
                        let o = R();
                        p("delete", "$", o);
                        return
                    }
                    case "c":
                        G.current = "c", J.current = "change";
                        return;
                    case "C": {
                        let o = R();
                        p("change", "$", o);
                        return
                    }
                    case "?": {
                        A.onChange("?");
                        return
                    }
                }
            }
            if (v.return) {
                W.onInput(y, v);
                return
            }
            if (Q === "INSERT") {
                if (v.backspace || v.delete) {
                    if (I.current.length > 0) I.current = I.current.slice(0, -1)
                } else I.current += y;
                W.onInput(y, v)
            }
        },
        mode: Q,
        setMode: B
    }
}
var on, $L3 = 1e4;
var Q09 = L(() => {
    vd1();
    Yd1();
    on = GA(VA(), 1)
});

function WJ0(A) {
    let [Q] = $B(), B = A09({
        value: A.value,
        onChange: A.onChange,
        onSubmit: A.onSubmit,
        onExit: A.onExit,
        onExitMessage: A.onExitMessage,
        onHistoryReset: A.onHistoryReset,
        onHistoryUp: A.onHistoryUp,
        onHistoryDown: A.onHistoryDown,
        focus: A.focus,
        mask: A.mask,
        multiline: A.multiline,
        cursorChar: A.showCursor ? " " : "",
        highlightPastedText: A.highlightPastedText,
        invert: oA.inverse,
        themeText: tQ("text", Q),
        columns: A.columns,
        onImagePaste: A.onImagePaste,
        disableCursorMovementForUpDownKeys: A.disableCursorMovementForUpDownKeys,
        externalOffset: A.cursorOffset,
        onOffsetChange: A.onChangeCursorOffset,
        onModeChange: A.onModeChange,
        isMessageLoading: A.isLoading,
        onUndo: A.onUndo
    }), {
        mode: G,
        setMode: Z
    } = B;
    return NZ1.default.useEffect(() => {
        if (A.initialMode && A.initialMode !== G) Z(A.initialMode)
    }, [A.initialMode, G, Z]), NZ1.default.createElement(j, {
        flexDirection: "column"
    }, NZ1.default.createElement(WoA, {
        inputState: B,
        terminalFocus: !0,
        highlights: A.highlights,
        ...A
    }))
}
var NZ1;
var B09 = L(() => {
    hA();
    J9();
    Q09();
    md1();
    NZ1 = GA(VA(), 1)
});

function TXA() {
    return L1().editorMode === "vim"
}

function G09() {
    if (Tp.isEnabled() && m0.terminal === "Apple_Terminal" && ujB()) return "option + ⏎ for newline";
    if (Tp.isEnabled() && gjB()) return "shift + ⏎ for newline";
    return mjB() ? "\\⏎ for newline" : "backslash (\\) + return (⏎) for newline"
}
var vPA = L(() => {
    DGA();
    jQ();
    f5()
});

function tn() {
    let [{
        mainLoopModel: A,
        mainLoopModelForSession: Q
    }] = _Q();
    return Z09.useMemo(() => {
        return VE(Q ?? A ?? IrA())
    }, [Q, A])
}
var Z09;
var bPA = L(() => {
    s2();
    H9();
    Z09 = GA(VA(), 1)
});

function I09(A) {
    switch (A.mode) {
        case "default":
            return "acceptEdits";
        case "acceptEdits":
            return "plan";
        case "plan":
            return A.isBypassPermissionsModeAvailable ? "bypassPermissions" : "default";
        case "bypassPermissions":
            return "default";
        case "dontAsk":
            return "default"
    }
}

function J09({
    shell: A
}) {
    switch (A.status) {
        case "completed":
            return PXA.default.createElement($, {
                color: "success",
                dimColor: !0
            }, "done");
        case "failed":
            return PXA.default.createElement($, {
                color: "error",
                dimColor: !0
            }, "error");
        case "killed":
            return PXA.default.createElement($, {
                color: "error",
                dimColor: !0
            }, "killed");
        case "running": {
            let Q = Y09(A.stderr) || Y09(A.stdout);
            if (!Q) return PXA.default.createElement($, {
                dimColor: !0
            }, "no output");
            return PXA.default.createElement($, {
                dimColor: !0
            }, B7(Q, 20, !0))
        }
    }
}

function Y09(A) {
    if (!A) return "";
    let Q = A.split(`
`);
    for (let B = Q.length - 1; B >= 0; B--) {
        let G = Q[B]?.trim();
        if (G) return G
    }
    return ""
}
var PXA;
var W09 = L(() => {
    hA();
    PXA = GA(VA(), 1)
});

function LZ1({
    session: A
}) {
    if (A.status === "completed") return fPA.default.createElement($, {
        bold: !0,
        color: "success",
        dimColor: !0
    }, "done");
    if (A.status === "failed") return fPA.default.createElement($, {
        bold: !0,
        color: "error",
        dimColor: !0
    }, "error");
    if (!A.todoList.length) return fPA.default.createElement($, {
        dimColor: !0
    }, A.status, "…");
    let Q = A.todoList.filter((G) => G.status === "completed").length,
        B = A.todoList.length;
    return fPA.default.createElement($, {
        dimColor: !0
    }, Q, "/", B)
}
var fPA;
var XJ0 = L(() => {
    hA();
    fPA = GA(VA(), 1)
});

function MZ1({
    task: A
}) {
    switch (A.type) {
        case "shell":
            return lq.createElement($, null, B7(A.command, 40, !0), " ", lq.createElement(J09, {
                shell: A
            }));
        case "remote_session":
            return lq.createElement($, null, B7(A.title, 40, !0), " ", lq.createElement(LZ1, {
                session: A
            }));
        case "async_agent":
            return lq.createElement($, null, B7(A.description, 40, !0), " ", lq.createElement($, {
                dimColor: !0
            }, "(", A.status, A.status === "completed" && !A.retrieved && ", unread", ")"))
    }
}
var lq;
var FJ0 = L(() => {
    W09();
    XJ0();
    hA();
    lq = GA(VA(), 1)
});
import {
    randomUUID as wL3
} from "crypto";

function Ug(A) {
    return A.flatMap((Q) => {
        switch (Q.type) {
            case "assistant":
                return [{
                    type: "assistant",
                    message: Q.message,
                    uuid: Q.uuid,
                    requestId: void 0,
                    timestamp: new Date().toISOString()
                }];
            case "user":
                return [{
                    type: "user",
                    message: Q.message,
                    uuid: Q.uuid ?? wL3(),
                    timestamp: new Date().toISOString(),
                    isMeta: Q.isSynthetic
                }];
            case "system":
                if (Q.subtype === "compact_boundary") {
                    let B = Q;
                    return [{
                        type: "system",
                        content: "Conversation compacted",
                        level: "info",
                        subtype: "compact_boundary",
                        compactMetadata: {
                            trigger: B.compact_metadata.trigger,
                            preTokens: B.compact_metadata.pre_tokens
                        },
                        uuid: Q.uuid,
                        timestamp: new Date().toISOString()
                    }]
                }
                return [];
            default:
                return []
        }
    })
}

function X09(A) {
    return A.flatMap((Q) => {
        switch (Q.type) {
            case "assistant":
                return [{
                    type: "assistant",
                    message: Q.message,
                    session_id: G0(),
                    parent_tool_use_id: null,
                    uuid: Q.uuid,
                    error: Q.error
                }];
            case "user":
                return [{
                    type: "user",
                    message: Q.message,
                    session_id: G0(),
                    parent_tool_use_id: null,
                    uuid: Q.uuid,
                    isSynthetic: Q.isMeta || Q.isVisibleInTranscriptOnly
                }];
            case "system":
                if (Q.subtype === "compact_boundary" && Q.compactMetadata) return [{
                    type: "system",
                    subtype: "compact_boundary",
                    session_id: G0(),
                    uuid: Q.uuid,
                    compact_metadata: {
                        trigger: Q.compactMetadata.trigger,
                        pre_tokens: Q.compactMetadata.preTokens
                    }
                }];
                return [];
            case "attachment":
                if (F91(Q.attachment)) return [{
                    type: "system",
                    subtype: "hook_response",
                    session_id: G0(),
                    uuid: Q.uuid,
                    hook_name: Q.attachment.hookName,
                    hook_event: Q.attachment.hookEvent,
                    stdout: Q.attachment.stdout || "",
                    stderr: Q.attachment.stderr || "",
                    exit_code: Q.attachment.exitCode
                }];
                return [];
            default:
                return []
        }
    })
}
var hPA = L(() => {
    S0();
    eM()
});

function F09({
    tasksSelected: A,
    showHint: Q
}) {
    let {
        columns: B
    } = YB(), G = $g.useMemo(() => L1().hasSeenTasksHint, []), [{
        backgroundTasks: Z
    }] = _Q();
    qL3();
    let I = Q && (A || !G) ? bG.createElement(bG.Fragment, null, bG.createElement($, {
            dimColor: !0
        }, "· "), bG.createElement($, {
            dimColor: !0
        }, A ? "Enter to view tasks" : "↓ to view")) : null,
        Y = Object.values(Z).filter((J) => J.status === "running");
    if (Y.length === 0) return;
    if (Y.length > 1 || B < 150) return bG.createElement(bG.Fragment, null, bG.createElement($, {
        color: "background",
        inverse: A
    }, Y.length, " background", " ", Y.length === 1 ? "task" : "tasks"), I ? bG.createElement($, null, " ", I) : null);
    if (Y.length === 1) {
        let J = Y[0];
        return bG.createElement(bG.Fragment, null, bG.createElement($, {
            color: "background",
            inverse: A
        }, bG.createElement(MZ1, {
            task: J
        })), I ? bG.createElement($, null, " ", I) : null)
    }
    return null
}

function qL3() {
    let [{
        backgroundTasks: A
    }, Q] = _Q(), B = $g.useMemo(() => Object.values(A).filter((Y) => Y.type === "remote_session"), [A]), [G, Z] = $g.useState([]), I = $g.useCallback(async (Y) => {
        for await (let {
                response: {
                    log: J
                },
                session: W
            }
            of V09(Y)) {
            let X = J.find((F) => F.type === "result");
            Q((F) => ({
                ...F,
                backgroundTasks: {
                    ...F.backgroundTasks,
                    [W.id]: {
                        ...W,
                        status: X ? X.subtype === "success" ? "completed" : "failed" : J.length > 0 ? "running" : "starting",
                        log: J
                    }
                }
            }))
        }
    }, [Q]);
    $g.useEffect(() => {
        if (B.every((J) => G.includes(J.id))) return;
        Z(B.map((J) => J.id));
        let Y = B.filter((J) => !G.includes(J.id));
        if (!Y.length) return;
        I(Y).catch((J) => e(J))
    }, [I, G, B])
}
async function* V09(A) {
    if (!j8("tengu_web_tasks")) return;
    let Q = await Promise.all(A.map(async (G) => {
        let Z = await ERA(G.id),
            I = Z.log.find((W) => W.type === "result"),
            Y = {
                session: {
                    ...G,
                    status: I ? I.subtype === "success" ? "completed" : "failed" : "running",
                    log: Z.log,
                    todoList: NL3(Z.log)
                },
                response: Z
            },
            J = Z.log.slice(G.log.length);
        if (J.length > 0) {
            let W = await PT2(Ug(G.log), new AbortController().signal, async () => DE(), !1, !1),
                X = await LL3(J, W);
            if (X) return {
                ...Y,
                session: {
                    ...Y.session,
                    deltaSummarySinceLastFlushToAttachment: X
                }
            }
        }
        return Y
    }));
    yield* Q;
    let B = Q.filter((G) => !G.session.log.some((Z) => Z.type === "result")).map((G) => G.session);
    await new Promise((G) => setTimeout(G, 1000)), yield* V09(B)
}

function NL3(A) {
    let Q = A.findLast((Z) => Z.type === "assistant" && Z.message.content.some((I) => I.type === "tool_use" && I.name === tI.name));
    if (!Q) return [];
    let B = Q.message.content.find((Z) => Z.type === "tool_use" && Z.name === tI.name)?.input;
    if (!B) return [];
    let G = tI.inputSchema.safeParse(B);
    if (!G.success) return [];
    return G.data.todos
}
async function LL3(A, Q) {
    if (!j8("tengu_web_tasks")) return null;
    let B = await gX({
            systemPrompt: ["You are given a few messages from a conversation, as well as a summary of the conversation so far. Your task is to summarize the new messages in the conversation based on the summary so far. Aim for 1-2 sentences at most, focusing on the most important details. The summary MUST be in <summary>summary goes here</summary> tags. If there is no new information, return an empty string: <summary></summary>."],
            userPrompt: `Summary so far: ${Q}

New messages: ${JSON.stringify(A)}`,
            signal: new AbortController().signal,
            options: {
                querySource: "background_task_summarize_delta",
                agents: [],
                isNonInteractiveSession: !1,
                hasAppendSystemPrompt: !1,
                mcpTools: [],
                agentIdOrSessionId: G0()
            }
        }),
        G = Ui(B);
    if (!G) return null;
    return e2(G, "summary")
}
var bG, $g;
var K09 = L(() => {
    hA();
    jQ();
    H9();
    W0A();
    u1();
    Ht();
    FJ0();
    m8();
    j80();
    hPA();
    kZ();
    nQ();
    O9();
    S0();
    bG = GA(VA(), 1), $g = GA(VA(), 1)
});

function ML3({
    value: A,
    onChange: Q,
    historyFailedMatch: B
}) {
    return VQA.createElement(j, {
        gap: 1
    }, VQA.createElement($, {
        dimColor: !0
    }, B ? "no matching prompt:" : "search prompts:"), VQA.createElement(s4, {
        value: A,
        onChange: Q,
        cursorOffset: A.length,
        onChangeCursorOffset: () => {},
        columns: A.length + 1,
        focus: !0,
        showCursor: !0,
        multiline: !1,
        dimColor: !0
    }))
}
var VQA, D09;
var H09 = L(() => {
    hA();
    QY();
    VQA = GA(VA(), 1);
    D09 = ML3
});

function VJ0() {
    OL3 = new Map, RL3 = 0, TL3 = {
        filesCount: 0,
        linesAdded: 0,
        linesRemoved: 0
    }
}
var OL3, RL3 = 0,
    TL3;
var KJ0 = L(() => {
    S0();
    _Y();
    fk();
    OL3 = new Map, TL3 = {
        filesCount: 0,
        linesAdded: 0,
        linesRemoved: 0
    }
});

function E09({
    exitMessage: A,
    vimMode: Q,
    mode: B,
    toolPermissionContext: G,
    suppressHint: Z,
    tasksSelected: I,
    isPasting: Y,
    isSearching: J,
    historyQuery: W,
    setHistoryQuery: X,
    historyFailedMatch: F,
    messages: V
}) {
    if (A.show) return I5.createElement($, {
        dimColor: !0,
        key: "exit-message"
    }, "Press ", A.key, " again to exit");
    if (Y) return I5.createElement($, {
        dimColor: !0,
        key: "pasting-message"
    }, "Pasting text…");
    let K = TXA() && Q === "INSERT" && !J;
    return I5.createElement(j, {
        justifyContent: "flex-start",
        gap: 1
    }, J && I5.createElement(D09, {
        value: W,
        onChange: X,
        historyFailedMatch: F
    }), K ? I5.createElement($, {
        dimColor: !0,
        key: "vim-insert"
    }, "-- INSERT --") : null, I5.createElement(PL3, {
        mode: B,
        toolPermissionContext: G,
        showHint: !Z && !K,
        tasksSelected: I,
        messages: V
    }))
}

function PL3({
    mode: A,
    toolPermissionContext: Q,
    showHint: B,
    tasksSelected: G,
    messages: Z
}) {
    let [{
        backgroundTasks: I
    }] = _Q(), Y = C09.useMemo(() => Object.values(I).filter((V) => V.type === "remote_session" || V.status === "running").length, [I]);
    if (A === "memory") return I5.createElement($, {
        color: "remember"
    }, "# to memorize");
    if (A === "bash") return I5.createElement($, {
        color: "bashBorder"
    }, "! for bash mode");
    if (A === "background" && j8("tengu_web_tasks")) return I5.createElement($, {
        color: "background"
    }, "& to background");
    let J = Q?.mode,
        W = !Vl0(J),
        X = null,
        F = [...J && W ? [I5.createElement($, {
            color: sj(J),
            key: "mode"
        }, Kl0(J), " ", Iv(J).toLowerCase(), " on", I5.createElement($, {
            dimColor: !0
        }, " (", EU.displayText, " to cycle)"))] : [], ...Y > 0 ? [I5.createElement(F09, {
            key: "tasks",
            tasksSelected: G,
            showHint: B
        })] : [], ...X && X.filesCount > 0 ? [I5.createElement($, {
            dimColor: !0,
            key: "code-changes"
        }, X.filesCount, " ", X.filesCount === 1 ? "file" : "files", " ", I5.createElement($, {
            color: "diffAddedWord"
        }, "+", X.linesAdded), " ", I5.createElement($, {
            color: "diffRemovedWord"
        }, "-", X.linesRemoved))] : []];
    if (F.length) return I5.createElement(j, null, fF(F, (V) => I5.createElement($, {
        dimColor: !0,
        key: `separator-${V}`
    }, " ", "·", " ")));
    if (!B) return null;
    return I5.createElement($, {
        dimColor: !0
    }, "? for shortcuts")
}
var I5, C09;
var z09 = L(() => {
    hA();
    vPA();
    jp();
    Bw();
    K09();
    H9();
    H09();
    O9();
    KJ0();
    I5 = GA(VA(), 1), C09 = GA(VA(), 1)
});

function wg() {
    let [A] = _Q();
    return A.settings
}
var gPA = L(() => {
    H9()
});

function DJ0(A) {
    return A?.statusLine !== void 0
}

function jL3(A, Q, B) {
    let G = tt({
            permissionMode: A,
            mainLoopModel: S3(),
            exceeds200kTokens: Q
        }),
        Z = B?.outputStyle || EK;
    return {
        ...rE(),
        model: {
            id: G,
            display_name: Ep(G)
        },
        workspace: {
            current_dir: H0(),
            project_dir: pQ()
        },
        version: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION,
        output_style: {
            name: Z
        },
        cost: {
            total_cost_usd: yK(),
            total_duration_ms: GVA(),
            total_api_duration_ms: kN(),
            total_lines_added: nBA(),
            total_lines_removed: aBA()
        },
        exceeds_200k_tokens: Q
    }
}

function U09({
    messages: A
}) {
    let Q = qg.useRef(void 0),
        [{
            toolPermissionContext: B,
            statusLineText: G
        }, Z] = _Q(),
        I = wg(),
        Y = qg.useRef({
            messageId: null,
            exceeds200kTokens: !1,
            permissionMode: B.mode
        }),
        J = qg.useCallback(async (F) => {
            Q.current?.abort();
            let V = new AbortController;
            Q.current = V;
            try {
                let K = Y.current.exceeds200kTokens;
                if (F !== void 0) {
                    let C = F.filter((w) => w.type === "assistant"),
                        E = C[C.length - 1],
                        z = E?.uuid || E?.message?.id || null;
                    if (z !== Y.current.messageId) K = c21(F), Y.current.messageId = z, Y.current.exceeds200kTokens = K
                }
                let D = jL3(Y.current.permissionMode, K, I),
                    H = await HJ0(D, V.signal);
                if (!V.signal.aborted) Z((C) => ({
                    ...C,
                    statusLineText: H
                }))
            } catch {}
        }, [Z, I]),
        W = zGA(() => J(A), 300);
    if (qg.useEffect(() => {
            let F = A.filter((D) => D.type === "assistant"),
                V = F[F.length - 1],
                K = V?.uuid || V?.message?.id || null;
            if (K !== Y.current.messageId || B.mode !== Y.current.permissionMode) Y.current.messageId = K, Y.current.permissionMode = B.mode, W()
        }, [A, B.mode, W]), qg.useEffect(() => {
            let F = I?.statusLine;
            if (F) {
                if (BA("tengu_status_line_mount", {
                        command_length: F.command.length,
                        padding: F.padding
                    }), I.disableAllHooks === !0) g("Status line is configured but disableAllHooks is true", {
                    level: "warn"
                })
            }
        }, []), qg.useEffect(() => {
            return J(), () => {
                Q.current?.abort()
            }
        }, []), !G) return null;
    let X = I?.statusLine?.padding ?? 0;
    return uPA.createElement(j, {
        paddingX: X
    }, uPA.createElement($, {
        dimColor: !0
    }, G))
}
var uPA, qg;
var $09 = L(() => {
    hA();
    AO();
    S0();
    R2();
    gPA();
    s2();
    $U();