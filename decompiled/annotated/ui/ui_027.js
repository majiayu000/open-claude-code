/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: ui_027.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (15次) = lazyLoader(fn) - Lazy module loader
 *   GA       (3次) = esmImport(module) - ESM import helper
 *   U        (2次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 27/53
 * Lines: 185195 - 186693 (1499 lines)
 * Original file: cli.js
 */

                        a.send("NativeStyleEditor_styleAndLayout", {
                            id: s,
                            layout: {
                                x: _1,
                                y: i1,
                                width: a1,
                                height: QQ,
                                left: MQ,
                                top: N2,
                                margin: gQ,
                                padding: I9
                            },
                            style: uA || null
                        })
                    })
                }

                function t(b) {
                    var a = {};
                    for (var c in b) a[c] = b[c];
                    return a
                }

                function EA(b, a, c, s, r, bA) {
                    var Y1, Q1 = b.getInstanceAndStyle({
                        id: a,
                        rendererID: c
                    });
                    if (!Q1 || !Q1.style) return;
                    var {
                        instance: uA,
                        style: z1
                    } = Q1, _1 = r ? (Y1 = {}, QR(Y1, s, void 0), QR(Y1, r, bA), Y1) : QR({}, s, void 0), i1;
                    if (uA !== null && typeof uA.setNativeProps === "function") {
                        var a1 = f.get(a);
                        if (!a1) f.set(a, _1);
                        else Object.assign(a1, _1);
                        uA.setNativeProps({
                            style: _1
                        })
                    } else if (iZ(z1)) {
                        var QQ = z1.length - 1;
                        if (AR(z1[QQ]) === "object" && !iZ(z1[QQ])) {
                            if (i1 = t(z1[QQ]), delete i1[s], r) i1[r] = bA;
                            else i1[s] = void 0;
                            b.overrideValueAtPath({
                                type: "props",
                                id: a,
                                rendererID: c,
                                path: ["style", QQ],
                                value: i1
                            })
                        } else b.overrideValueAtPath({
                            type: "props",
                            id: a,
                            rendererID: c,
                            path: ["style"],
                            value: z1.concat([_1])
                        })
                    } else if (AR(z1) === "object") {
                        if (i1 = t(z1), delete i1[s], r) i1[r] = bA;
                        else i1[s] = void 0;
                        b.overrideValueAtPath({
                            type: "props",
                            id: a,
                            rendererID: c,
                            path: ["style"],
                            value: i1
                        })
                    } else b.overrideValueAtPath({
                        type: "props",
                        id: a,
                        rendererID: c,
                        path: ["style"],
                        value: [z1, _1]
                    });
                    b.emit("hideNativeHighlight")
                }

                function G1(b, a, c, s, r) {
                    var bA = b.getInstanceAndStyle({
                        id: a,
                        rendererID: c
                    });
                    if (!bA || !bA.style) return;
                    var {
                        instance: Y1,
                        style: Q1
                    } = bA, uA = QR({}, s, r);
                    if (Y1 !== null && typeof Y1.setNativeProps === "function") {
                        var z1 = f.get(a);
                        if (!z1) f.set(a, uA);
                        else Object.assign(z1, uA);
                        Y1.setNativeProps({
                            style: uA
                        })
                    } else if (iZ(Q1)) {
                        var _1 = Q1.length - 1;
                        if (AR(Q1[_1]) === "object" && !iZ(Q1[_1])) b.overrideValueAtPath({
                            type: "props",
                            id: a,
                            rendererID: c,
                            path: ["style", _1, s],
                            value: r
                        });
                        else b.overrideValueAtPath({
                            type: "props",
                            id: a,
                            rendererID: c,
                            path: ["style"],
                            value: Q1.concat([uA])
                        })
                    } else b.overrideValueAtPath({
                        type: "props",
                        id: a,
                        rendererID: c,
                        path: ["style"],
                        value: [Q1, uA]
                    });
                    b.emit("hideNativeHighlight")
                }

                function n1(b) {
                    q0(b)
                }

                function q0(b) {
                    if (b.getConsolePatchSettings == null) return;
                    var a = b.getConsolePatchSettings();
                    if (a == null) return;
                    var c = CQ(a);
                    if (c == null) return;
                    Xu(c)
                }

                function CQ(b) {
                    var a, c, s, r, bA, Y1 = JSON.parse(b !== null && b !== void 0 ? b : "{}"),
                        Q1 = Y1.appendComponentStack,
                        uA = Y1.breakOnConsoleErrors,
                        z1 = Y1.showInlineWarningsAndErrors,
                        _1 = Y1.hideConsoleLogsInStrictMode,
                        i1 = Y1.browserTheme;
                    return {
                        appendComponentStack: (a = tD(Q1)) !== null && a !== void 0 ? a : !0,
                        breakOnConsoleErrors: (c = tD(uA)) !== null && c !== void 0 ? c : !1,
                        showInlineWarningsAndErrors: (s = tD(z1)) !== null && s !== void 0 ? s : !0,
                        hideConsoleLogsInStrictMode: (r = tD(_1)) !== null && r !== void 0 ? r : !1,
                        browserTheme: (bA = jC(i1)) !== null && bA !== void 0 ? bA : "dark"
                    }
                }

                function dB(b, a) {
                    if (b.setConsolePatchSettings == null) return;
                    b.setConsolePatchSettings(JSON.stringify(a))
                }
                na(), FV(window);
                var Z9 = window.__REACT_DEVTOOLS_GLOBAL_HOOK__,
                    zB = qY();

                function n5(b) {
                    if (H) {
                        var a;
                        for (var c = arguments.length, s = Array(c > 1 ? c - 1 : 0), r = 1; r < c; r++) s[r - 1] = arguments[r];
                        (a = console).log.apply(a, ["%c[core/backend] %c".concat(b), "color: teal; font-weight: bold;", "font-weight: bold;"].concat(s))
                    }
                }

                function u3(b) {
                    if (Z9 == null) return;
                    var a = b || {},
                        c = a.host,
                        s = c === void 0 ? "localhost" : c,
                        r = a.nativeStyleEditorValidAttributes,
                        bA = a.useHttps,
                        Y1 = bA === void 0 ? !1 : bA,
                        Q1 = a.port,
                        uA = Q1 === void 0 ? 8097 : Q1,
                        z1 = a.websocket,
                        _1 = a.resolveRNStyle,
                        i1 = _1 === void 0 ? null : _1,
                        a1 = a.retryConnectionDelay,
                        QQ = a1 === void 0 ? 2000 : a1,
                        MQ = a.isAppActive,
                        N2 = MQ === void 0 ? function() {
                            return !0
                        } : MQ,
                        gQ = a.devToolsSettingsManager,
                        I9 = Y1 ? "wss" : "ws",
                        m4 = null;

                    function x5() {
                        if (m4 === null) m4 = setTimeout(function() {
                            return u3(b)
                        }, QQ)
                    }
                    if (gQ != null) try {
                        n1(gQ)
                    } catch (V4) {
                        console.error(V4)
                    }
                    if (!N2()) {
                        x5();
                        return
                    }
                    var SB = null,
                        D5 = [],
                        X7 = I9 + "://" + s + ":" + uA,
                        d4 = z1 ? z1 : new window.WebSocket(X7);
                    d4.onclose = Y8, d4.onerror = U3, d4.onmessage = RY, d4.onopen = function() {
                        if (SB = new Du({
                                listen: function(m3) {
                                    return D5.push(m3),
                                        function() {
                                            var WJ = D5.indexOf(m3);
                                            if (WJ >= 0) D5.splice(WJ, 1)
                                        }
                                },
                                send: function(m3, WJ, HF) {
                                    if (d4.readyState === d4.OPEN) {
                                        if (H) n5("wall.send()", m3, WJ);
                                        d4.send(JSON.stringify({
                                            event: m3,
                                            payload: WJ
                                        }))
                                    } else {
                                        if (H) n5("wall.send()", "Shutting down bridge because of closed WebSocket connection");
                                        if (SB !== null) SB.shutdown();
                                        x5()
                                    }
                                }
                            }), SB.addListener("updateComponentFilters", function(a9) {
                                zB = a9
                            }), gQ != null && SB != null) SB.addListener("updateConsolePatchSettings", function(a9) {
                            return dB(gQ, a9)
                        });
                        if (window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ == null) SB.send("overrideComponentFilters", zB);
                        var V4 = new JBA(SB);
                        if (V4.addListener("shutdown", function() {
                                Z9.emit("shutdown")
                            }), Qs(Z9, V4, window), i1 != null || Z9.resolveRNStyle != null) O(SB, V4, i1 || Z9.resolveRNStyle, r || Z9.nativeStyleEditorValidAttributes || null);
                        else {
                            var JJ, tZ, P7 = function() {
                                if (SB !== null) O(SB, V4, JJ, tZ)
                            };
                            if (!Z9.hasOwnProperty("resolveRNStyle")) Object.defineProperty(Z9, "resolveRNStyle", {
                                enumerable: !1,
                                get: function() {
                                    return JJ
                                },
                                set: function(m3) {
                                    JJ = m3, P7()
                                }
                            });
                            if (!Z9.hasOwnProperty("nativeStyleEditorValidAttributes")) Object.defineProperty(Z9, "nativeStyleEditorValidAttributes", {
                                enumerable: !1,
                                get: function() {
                                    return tZ
                                },
                                set: function(m3) {
                                    tZ = m3, P7()
                                }
                            })
                        }
                    };

                    function Y8() {
                        if (H) n5("WebSocket.onclose");
                        if (SB !== null) SB.emit("shutdown");
                        x5()
                    }

                    function U3() {
                        if (H) n5("WebSocket.onerror");
                        x5()
                    }

                    function RY(V4) {
                        var JJ;
                        try {
                            if (typeof V4.data === "string") {
                                if (JJ = JSON.parse(V4.data), H) n5("WebSocket.onmessage", JJ)
                            } else throw Error()
                        } catch (tZ) {
                            console.error("[React DevTools] Failed to parse JSON: " + V4.data);
                            return
                        }
                        D5.forEach(function(tZ) {
                            try {
                                tZ(JJ)
                            } catch (P7) {
                                throw console.log("[React DevTools] Error calling listener", JJ), console.log("error:", P7), P7
                            }
                        })
                    }
                }
            })(), G
        })()
    })
});
var h26 = {};
var iIB;
var nIB = L(() => {
    pIB();
    iIB = GA(lIB(), 1);
    iIB.default.connectToDevTools()
});
var rIB, aIB = (A, Q) => {
        if (A === Q) return;
        if (!A) return Q;
        let B = {},
            G = !1;
        for (let Z of Object.keys(A))
            if (Q ? !Object.hasOwn(Q, Z) : !0) B[Z] = void 0, G = !0;
        if (Q) {
            for (let Z of Object.keys(Q))
                if (Q[Z] !== A[Z]) B[Z] = Q[Z], G = !0
        }
        return G ? B : void 0
    },
    oIB = (A) => {
        if ("childNodes" in A)
            for (let Q of A.childNodes) oIB(Q);
        A.yogaNode = void 0
    },
    sIB = (A) => {
        let Q = A.yogaNode;
        if (Q) Q.unsetMeasureFunc(), oIB(A), Q.freeRecursive()
    },
    sc;
var Eh1 = L(() => {
    IZB();
    $t();
    onA();
    mZB();
    rIB = GA(ZZB(), 1);
    if (process.env.DEV === "true") try {
        Promise.resolve().then(() => nIB())
    } catch (A) {
        if (A.code === "ERR_MODULE_NOT_FOUND") console.warn(`
The environment variable DEV is set to true, so Ink tried to import \`react-devtools-core\`,
but this failed as it was not installed. Debugging with React Devtools requires it.

To install use this command:

$ npm install --save-dev react-devtools-core
				`.trim() + `
`);
        else throw A
    }
    sc = rIB.default({
        getRootHostContext: () => ({
            isInsideText: !1
        }),
        prepareForCommit: () => null,
        preparePortalMount: () => null,
        clearContainer: () => !1,
        resetAfterCommit(A) {
            if (typeof A.onComputeLayout === "function") A.onComputeLayout();
            if (A.isStaticDirty) {
                if (A.isStaticDirty = !1, typeof A.onImmediateRender === "function") A.onImmediateRender();
                return
            }
            A.onRender?.()
        },
        getChildHostContext(A, Q) {
            let B = A.isInsideText,
                G = Q === "ink-text" || Q === "ink-virtual-text" || Q === "ink-link";
            if (B === G) return A;
            return {
                isInsideText: G
            }
        },
        shouldSetTextContent: () => !1,
        createInstance(A, Q, B, G) {
            if (G.isInsideText && A === "ink-box") throw Error("<Box> can’t be nested inside <Text> component");
            let Z = A === "ink-text" && G.isInsideText ? "ink-virtual-text" : A,
                I = anA(Z);
            for (let [Y, J] of Object.entries(Q)) {
                if (Y === "children") continue;
                if (Y === "style") {
                    if (ef1(I, J), I.yogaNode) Ah1(I.yogaNode, J);
                    continue
                }
                if (Y === "textStyles") {
                    I.textStyles = J;
                    continue
                }
                if (Y === "internal_static") {
                    I.internal_static = !0;
                    continue
                }
                tf1(I, Y, J)
            }
            return I
        },
        createTextInstance(A, Q, B) {
            if (!B.isInsideText) throw Error(`Text string "${A}" must be rendered inside <Text> component`);
            return gZB(A)
        },
        resetTextContent() {},
        hideTextInstance(A) {
            TUA(A, "")
        },
        unhideTextInstance(A, Q) {
            TUA(A, Q)
        },
        getPublicInstance: (A) => A,
        hideInstance(A) {
            A.yogaNode?.setDisplay(DT.None)
        },
        unhideInstance(A) {
            A.yogaNode?.setDisplay(DT.Flex)
        },
        appendInitialChild: snA,
        appendChild: snA,
        insertBefore: of1,
        finalizeInitialChildren(A, Q, B, G) {
            if (A.internal_static) G.isStaticDirty = !0, G.staticNode = A;
            return !1
        },
        isPrimaryRenderer: !0,
        supportsMutation: !0,
        supportsPersistence: !1,
        supportsHydration: !1,
        scheduleTimeout: setTimeout,
        cancelTimeout: clearTimeout,
        noTimeout: -1,
        getCurrentEventPriority: () => vf1,
        beforeActiveInstanceBlur() {},
        afterActiveInstanceBlur() {},
        detachDeletedInstance() {},
        getInstanceFromNode: () => null,
        prepareScopeUpdate() {},
        getInstanceFromScope: () => null,
        appendChildToContainer: snA,
        insertInContainerBefore: of1,
        removeChildFromContainer(A, Q) {
            RUA(A, Q), sIB(Q)
        },
        prepareUpdate(A, Q, B, G, Z) {
            if (A.internal_static) Z.isStaticDirty = !0;
            let I = aIB(B, G),
                Y = aIB(B.style, G.style);
            if (!I && !Y) return null;
            return {
                props: I,
                style: Y
            }
        },
        commitUpdate(A, Q) {
            let {
                props: B,
                style: G
            } = Q;
            if (B)
                for (let [Z, I] of Object.entries(B)) {
                    if (Z === "style") {
                        ef1(A, I);
                        continue
                    }
                    if (Z === "textStyles") {
                        A.textStyles = I;
                        continue
                    }
                    if (Z === "internal_static") {
                        A.internal_static = !0;
                        continue
                    }
                    tf1(A, Z, I)
                }
            if (G && A.yogaNode) Ah1(A.yogaNode, G)
        },
        commitTextUpdate(A, Q, B) {
            TUA(A, B)
        },
        removeChild(A, Q) {
            RUA(A, Q), sIB(Q)
        }
    })
});

function zh1(A, Q = 1, B = {}) {
    let {
        indent: G = " ",
        includeEmptyLines: Z = !1
    } = B;
    if (typeof A !== "string") throw TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof A}\``);
    if (typeof Q !== "number") throw TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof Q}\``);
    if (Q < 0) throw RangeError(`Expected \`count\` to be at least 0, got \`${Q}\``);
    if (typeof G !== "string") throw TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof G}\``);
    if (Q === 0) return A;
    let I = Z ? /^/gm : /^(?!\s*$)/gm;
    return A.replace(I, G.repeat(Q))
}
var g26 = (A) => {
        return A.getComputedWidth() - A.getComputedPadding(O6.Left) - A.getComputedPadding(O6.Right) - A.getComputedBorder(O6.Left) - A.getComputedBorder(O6.Right)
    },
    tIB;
var eIB = L(() => {
    $t();
    tIB = g26
});
var AYB = U((Rf7, u26) => {
    u26.exports = {
        single: {
            topLeft: "┌",
            top: "─",
            topRight: "┐",
            right: "│",
            bottomRight: "┘",
            bottom: "─",
            bottomLeft: "└",
            left: "│"
        },
        double: {
            topLeft: "╔",
            top: "═",
            topRight: "╗",
            right: "║",
            bottomRight: "╝",
            bottom: "═",
            bottomLeft: "╚",
            left: "║"
        },
        round: {
            topLeft: "╭",
            top: "─",
            topRight: "╮",
            right: "│",
            bottomRight: "╯",
            bottom: "─",
            bottomLeft: "╰",
            left: "│"
        },
        bold: {
            topLeft: "┏",
            top: "━",
            topRight: "┓",
            right: "┃",
            bottomRight: "┛",
            bottom: "━",
            bottomLeft: "┗",
            left: "┃"
        },
        singleDouble: {
            topLeft: "╓",
            top: "─",
            topRight: "╖",
            right: "║",
            bottomRight: "╜",
            bottom: "─",
            bottomLeft: "╙",
            left: "║"
        },
        doubleSingle: {
            topLeft: "╒",
            top: "═",
            topRight: "╕",
            right: "│",
            bottomRight: "╛",
            bottom: "═",
            bottomLeft: "╘",
            left: "│"
        },
        classic: {
            topLeft: "+",
            top: "-",
            topRight: "+",
            right: "|",
            bottomRight: "+",
            bottom: "-",
            bottomLeft: "+",
            left: "|"
        },
        arrow: {
            topLeft: "↘",
            top: "↓",
            topRight: "↙",
            right: "←",
            bottomRight: "↖",
            bottom: "↑",
            bottomLeft: "↗",
            left: "→"
        }
    }
});
var BYB = U((Tf7, Uh1) => {
    var QYB = AYB();
    Uh1.exports = QYB;
    Uh1.exports.default = QYB
});

function w7A(A) {
    switch (A) {
        case "light":
            return m26;
        case "light-ansi":
            return d26;
        case "dark-ansi":
            return c26;
        case "light-daltonized":
            return p26;
        case "dark-daltonized":
            return i26;
        default:
            return l26
    }
}
var m26, d26, c26, p26, l26, i26;
var KaA = L(() => {
    m26 = {
        autoAccept: "rgb(135,0,255)",
        bashBorder: "rgb(255,0,135)",
        claude: "rgb(215,119,87)",
        claudeShimmer: "rgb(245,149,117)",
        claudeBlue_FOR_SYSTEM_SPINNER: "rgb(87,105,247)",
        claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(117,135,255)",
        permission: "rgb(87,105,247)",
        permissionShimmer: "rgb(137,155,255)",
        planMode: "rgb(0,102,102)",
        ide: "rgb(71,130,200)",
        promptBorder: "rgb(153,153,153)",
        promptBorderShimmer: "rgb(183,183,183)",
        text: "rgb(0,0,0)",
        inverseText: "rgb(255,255,255)",
        inactive: "rgb(102,102,102)",
        subtle: "rgb(175,175,175)",
        suggestion: "rgb(87,105,247)",
        remember: "rgb(0,0,255)",
        background: "rgb(0,153,153)",
        success: "rgb(44,122,57)",
        error: "rgb(171,43,63)",
        warning: "rgb(150,108,30)",
        warningShimmer: "rgb(200,158,80)",
        diffAdded: "rgb(105,219,124)",
        diffRemoved: "rgb(255,168,180)",
        diffAddedDimmed: "rgb(199,225,203)",
        diffRemovedDimmed: "rgb(253,210,216)",
        diffAddedWord: "rgb(47,157,68)",
        diffRemovedWord: "rgb(209,69,75)",
        red_FOR_SUBAGENTS_ONLY: "rgb(220,38,38)",
        blue_FOR_SUBAGENTS_ONLY: "rgb(37,99,235)",
        green_FOR_SUBAGENTS_ONLY: "rgb(22,163,74)",
        yellow_FOR_SUBAGENTS_ONLY: "rgb(202,138,4)",
        purple_FOR_SUBAGENTS_ONLY: "rgb(147,51,234)",
        orange_FOR_SUBAGENTS_ONLY: "rgb(234,88,12)",
        pink_FOR_SUBAGENTS_ONLY: "rgb(219,39,119)",
        cyan_FOR_SUBAGENTS_ONLY: "rgb(8,145,178)",
        professionalBlue: "rgb(106,155,204)",
        rainbow_red: "rgb(235,95,87)",
        rainbow_orange: "rgb(245,139,87)",
        rainbow_yellow: "rgb(250,195,95)",
        rainbow_green: "rgb(145,200,130)",
        rainbow_blue: "rgb(130,170,220)",
        rainbow_indigo: "rgb(155,130,200)",
        rainbow_violet: "rgb(200,130,180)",
        rainbow_red_shimmer: "rgb(250,155,147)",
        rainbow_orange_shimmer: "rgb(255,185,137)",
        rainbow_yellow_shimmer: "rgb(255,225,155)",
        rainbow_green_shimmer: "rgb(185,230,180)",
        rainbow_blue_shimmer: "rgb(180,205,240)",
        rainbow_indigo_shimmer: "rgb(195,180,230)",
        rainbow_violet_shimmer: "rgb(230,180,210)",
        clawd_body: "rgb(215,119,87)",
        clawd_background: "rgb(0,0,0)",
        userMessageBackground: "rgb(240, 240, 240)",
        bashMessageBackgroundColor: "rgb(250, 245, 250)",
        memoryBackgroundColor: "rgb(230, 245, 250)",
        rate_limit_fill: "rgb(87,105,247)",
        rate_limit_empty: "rgb(39,47,111)"
    }, d26 = {
        autoAccept: "ansi:magenta",
        bashBorder: "ansi:magenta",
        claude: "ansi:redBright",
        claudeShimmer: "ansi:yellowBright",
        claudeBlue_FOR_SYSTEM_SPINNER: "ansi:blue",
        claudeBlueShimmer_FOR_SYSTEM_SPINNER: "ansi:blueBright",
        permission: "ansi:blue",
        permissionShimmer: "ansi:blueBright",
        planMode: "ansi:cyan",
        ide: "ansi:blueBright",
        promptBorder: "ansi:white",
        promptBorderShimmer: "ansi:whiteBright",
        text: "ansi:black",
        inverseText: "ansi:white",
        inactive: "ansi:blackBright",
        subtle: "ansi:blackBright",
        suggestion: "ansi:blue",
        remember: "ansi:blue",
        background: "ansi:cyan",
        success: "ansi:green",
        error: "ansi:red",
        warning: "ansi:yellow",
        warningShimmer: "ansi:yellowBright",
        diffAdded: "ansi:green",
        diffRemoved: "ansi:red",
        diffAddedDimmed: "ansi:green",
        diffRemovedDimmed: "ansi:red",
        diffAddedWord: "ansi:greenBright",
        diffRemovedWord: "ansi:redBright",
        red_FOR_SUBAGENTS_ONLY: "ansi:red",
        blue_FOR_SUBAGENTS_ONLY: "ansi:blue",
        green_FOR_SUBAGENTS_ONLY: "ansi:green",
        yellow_FOR_SUBAGENTS_ONLY: "ansi:yellow",
        purple_FOR_SUBAGENTS_ONLY: "ansi:magenta",
        orange_FOR_SUBAGENTS_ONLY: "ansi:redBright",
        pink_FOR_SUBAGENTS_ONLY: "ansi:magentaBright",
        cyan_FOR_SUBAGENTS_ONLY: "ansi:cyan",
        professionalBlue: "ansi:blueBright",
        rainbow_red: "ansi:red",
        rainbow_orange: "ansi:redBright",
        rainbow_yellow: "ansi:yellow",
        rainbow_green: "ansi:green",
        rainbow_blue: "ansi:cyan",
        rainbow_indigo: "ansi:blue",
        rainbow_violet: "ansi:magenta",
        rainbow_red_shimmer: "ansi:redBright",
        rainbow_orange_shimmer: "ansi:yellow",
        rainbow_yellow_shimmer: "ansi:yellowBright",
        rainbow_green_shimmer: "ansi:greenBright",
        rainbow_blue_shimmer: "ansi:cyanBright",
        rainbow_indigo_shimmer: "ansi:blueBright",
        rainbow_violet_shimmer: "ansi:magentaBright",
        clawd_body: "ansi:redBright",
        clawd_background: "ansi:black",
        userMessageBackground: "ansi:white",
        bashMessageBackgroundColor: "ansi:whiteBright",
        memoryBackgroundColor: "ansi:white",
        rate_limit_fill: "ansi:yellow",
        rate_limit_empty: "ansi:black"
    }, c26 = {
        autoAccept: "ansi:magentaBright",
        bashBorder: "ansi:magentaBright",
        claude: "ansi:redBright",
        claudeShimmer: "ansi:yellowBright",
        claudeBlue_FOR_SYSTEM_SPINNER: "ansi:blueBright",
        claudeBlueShimmer_FOR_SYSTEM_SPINNER: "ansi:blueBright",
        permission: "ansi:blueBright",
        permissionShimmer: "ansi:blueBright",
        planMode: "ansi:cyanBright",
        ide: "ansi:blue",
        promptBorder: "ansi:white",
        promptBorderShimmer: "ansi:whiteBright",
        text: "ansi:whiteBright",
        inverseText: "ansi:black",
        inactive: "ansi:white",
        subtle: "ansi:white",
        suggestion: "ansi:blueBright",
        remember: "ansi:blueBright",
        background: "ansi:cyanBright",
        success: "ansi:greenBright",
        error: "ansi:redBright",
        warning: "ansi:yellowBright",
        warningShimmer: "ansi:yellowBright",
        diffAdded: "ansi:green",
        diffRemoved: "ansi:red",
        diffAddedDimmed: "ansi:green",
        diffRemovedDimmed: "ansi:red",
        diffAddedWord: "ansi:greenBright",
        diffRemovedWord: "ansi:redBright",
        red_FOR_SUBAGENTS_ONLY: "ansi:redBright",
        blue_FOR_SUBAGENTS_ONLY: "ansi:blueBright",
        green_FOR_SUBAGENTS_ONLY: "ansi:greenBright",
        yellow_FOR_SUBAGENTS_ONLY: "ansi:yellowBright",
        purple_FOR_SUBAGENTS_ONLY: "ansi:magentaBright",
        orange_FOR_SUBAGENTS_ONLY: "ansi:redBright",
        pink_FOR_SUBAGENTS_ONLY: "ansi:magentaBright",
        cyan_FOR_SUBAGENTS_ONLY: "ansi:cyanBright",
        professionalBlue: "rgb(106,155,204)",
        rainbow_red: "ansi:red",
        rainbow_orange: "ansi:redBright",
        rainbow_yellow: "ansi:yellow",
        rainbow_green: "ansi:green",
        rainbow_blue: "ansi:cyan",
        rainbow_indigo: "ansi:blue",
        rainbow_violet: "ansi:magenta",
        rainbow_red_shimmer: "ansi:redBright",
        rainbow_orange_shimmer: "ansi:yellow",
        rainbow_yellow_shimmer: "ansi:yellowBright",
        rainbow_green_shimmer: "ansi:greenBright",
        rainbow_blue_shimmer: "ansi:cyanBright",
        rainbow_indigo_shimmer: "ansi:blueBright",
        rainbow_violet_shimmer: "ansi:magentaBright",
        clawd_body: "ansi:redBright",
        clawd_background: "ansi:black",
        userMessageBackground: "ansi:blackBright",
        bashMessageBackgroundColor: "ansi:black",
        memoryBackgroundColor: "ansi:blackBright",
        rate_limit_fill: "ansi:yellow",
        rate_limit_empty: "ansi:white"
    }, p26 = {
        autoAccept: "rgb(135,0,255)",
        bashBorder: "rgb(0,102,204)",
        claude: "rgb(255,153,51)",
        claudeShimmer: "rgb(255,183,101)",
        claudeBlue_FOR_SYSTEM_SPINNER: "rgb(51,102,255)",
        claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(101,152,255)",
        permission: "rgb(51,102,255)",
        permissionShimmer: "rgb(101,152,255)",
        planMode: "rgb(51,102,102)",
        ide: "rgb(71,130,200)",
        promptBorder: "rgb(153,153,153)",
        promptBorderShimmer: "rgb(183,183,183)",
        text: "rgb(0,0,0)",
        inverseText: "rgb(255,255,255)",
        inactive: "rgb(102,102,102)",
        subtle: "rgb(175,175,175)",
        suggestion: "rgb(51,102,255)",
        remember: "rgb(51,102,255)",
        background: "rgb(0,153,153)",
        success: "rgb(0,102,153)",
        error: "rgb(204,0,0)",
        warning: "rgb(255,153,0)",
        warningShimmer: "rgb(255,183,50)",
        diffAdded: "rgb(153,204,255)",
        diffRemoved: "rgb(255,204,204)",
        diffAddedDimmed: "rgb(209,231,253)",
        diffRemovedDimmed: "rgb(255,233,233)",
        diffAddedWord: "rgb(51,102,204)",
        diffRemovedWord: "rgb(153,51,51)",
        red_FOR_SUBAGENTS_ONLY: "rgb(204,0,0)",
        blue_FOR_SUBAGENTS_ONLY: "rgb(0,102,204)",
        green_FOR_SUBAGENTS_ONLY: "rgb(0,204,0)",
        yellow_FOR_SUBAGENTS_ONLY: "rgb(255,204,0)",
        purple_FOR_SUBAGENTS_ONLY: "rgb(128,0,128)",
        orange_FOR_SUBAGENTS_ONLY: "rgb(255,128,0)",
        pink_FOR_SUBAGENTS_ONLY: "rgb(255,102,178)",
        cyan_FOR_SUBAGENTS_ONLY: "rgb(0,178,178)",
        professionalBlue: "rgb(106,155,204)",
        rainbow_red: "rgb(235,95,87)",
        rainbow_orange: "rgb(245,139,87)",
        rainbow_yellow: "rgb(250,195,95)",
        rainbow_green: "rgb(145,200,130)",
        rainbow_blue: "rgb(130,170,220)",
        rainbow_indigo: "rgb(155,130,200)",
        rainbow_violet: "rgb(200,130,180)",
        rainbow_red_shimmer: "rgb(250,155,147)",
        rainbow_orange_shimmer: "rgb(255,185,137)",
        rainbow_yellow_shimmer: "rgb(255,225,155)",
        rainbow_green_shimmer: "rgb(185,230,180)",
        rainbow_blue_shimmer: "rgb(180,205,240)",
        rainbow_indigo_shimmer: "rgb(195,180,230)",
        rainbow_violet_shimmer: "rgb(230,180,210)",
        clawd_body: "rgb(215,119,87)",
        clawd_background: "rgb(0,0,0)",
        userMessageBackground: "rgb(220, 220, 220)",
        bashMessageBackgroundColor: "rgb(250, 245, 250)",
        memoryBackgroundColor: "rgb(230, 245, 250)",
        rate_limit_fill: "rgb(51,102,255)",
        rate_limit_empty: "rgb(23,46,114)"
    }, l26 = {
        autoAccept: "rgb(175,135,255)",
        bashBorder: "rgb(253,93,177)",
        claude: "rgb(215,119,87)",
        claudeShimmer: "rgb(235,159,127)",
        claudeBlue_FOR_SYSTEM_SPINNER: "rgb(147,165,255)",
        claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(177,195,255)",
        permission: "rgb(177,185,249)",
        permissionShimmer: "rgb(207,215,255)",
        planMode: "rgb(72,150,140)",
        ide: "rgb(71,130,200)",
        promptBorder: "rgb(136,136,136)",
        promptBorderShimmer: "rgb(166,166,166)",
        text: "rgb(255,255,255)",
        inverseText: "rgb(0,0,0)",
        inactive: "rgb(153,153,153)",
        subtle: "rgb(80,80,80)",
        suggestion: "rgb(177,185,249)",
        remember: "rgb(177,185,249)",
        background: "rgb(0,204,204)",
        success: "rgb(78,186,101)",
        error: "rgb(255,107,128)",
        warning: "rgb(255,193,7)",
        warningShimmer: "rgb(255,223,57)",
        diffAdded: "rgb(34,92,43)",
        diffRemoved: "rgb(122,41,54)",
        diffAddedDimmed: "rgb(71,88,74)",
        diffRemovedDimmed: "rgb(105,72,77)",
        diffAddedWord: "rgb(56,166,96)",
        diffRemovedWord: "rgb(179,89,107)",
        red_FOR_SUBAGENTS_ONLY: "rgb(220,38,38)",
        blue_FOR_SUBAGENTS_ONLY: "rgb(37,99,235)",
        green_FOR_SUBAGENTS_ONLY: "rgb(22,163,74)",
        yellow_FOR_SUBAGENTS_ONLY: "rgb(202,138,4)",
        purple_FOR_SUBAGENTS_ONLY: "rgb(147,51,234)",
        orange_FOR_SUBAGENTS_ONLY: "rgb(234,88,12)",
        pink_FOR_SUBAGENTS_ONLY: "rgb(219,39,119)",
        cyan_FOR_SUBAGENTS_ONLY: "rgb(8,145,178)",
        professionalBlue: "rgb(106,155,204)",
        rainbow_red: "rgb(235,95,87)",
        rainbow_orange: "rgb(245,139,87)",
        rainbow_yellow: "rgb(250,195,95)",
        rainbow_green: "rgb(145,200,130)",
        rainbow_blue: "rgb(130,170,220)",
        rainbow_indigo: "rgb(155,130,200)",
        rainbow_violet: "rgb(200,130,180)",
        rainbow_red_shimmer: "rgb(250,155,147)",
        rainbow_orange_shimmer: "rgb(255,185,137)",
        rainbow_yellow_shimmer: "rgb(255,225,155)",
        rainbow_green_shimmer: "rgb(185,230,180)",
        rainbow_blue_shimmer: "rgb(180,205,240)",
        rainbow_indigo_shimmer: "rgb(195,180,230)",
        rainbow_violet_shimmer: "rgb(230,180,210)",
        clawd_body: "rgb(215,119,87)",
        clawd_background: "rgb(0,0,0)",
        userMessageBackground: "rgb(55, 55, 55)",
        bashMessageBackgroundColor: "rgb(65, 60, 65)",
        memoryBackgroundColor: "rgb(55, 65, 70)",
        rate_limit_fill: "rgb(177,185,249)",
        rate_limit_empty: "rgb(80,83,112)"
    }, i26 = {
        autoAccept: "rgb(175,135,255)",
        bashBorder: "rgb(51,153,255)",
        claude: "rgb(255,153,51)",
        claudeShimmer: "rgb(255,183,101)",
        claudeBlue_FOR_SYSTEM_SPINNER: "rgb(153,204,255)",
        claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(183,224,255)",
        permission: "rgb(153,204,255)",
        permissionShimmer: "rgb(183,224,255)",
        planMode: "rgb(102,153,153)",
        ide: "rgb(71,130,200)",
        promptBorder: "rgb(136,136,136)",
        promptBorderShimmer: "rgb(166,166,166)",
        text: "rgb(255,255,255)",
        inverseText: "rgb(0,0,0)",
        inactive: "rgb(153,153,153)",
        subtle: "rgb(80,80,80)",
        suggestion: "rgb(153,204,255)",
        remember: "rgb(153,204,255)",
        background: "rgb(0,204,204)",
        success: "rgb(51,153,255)",
        error: "rgb(255,102,102)",
        warning: "rgb(255,204,0)",
        warningShimmer: "rgb(255,234,50)",
        diffAdded: "rgb(0,68,102)",
        diffRemoved: "rgb(102,0,0)",
        diffAddedDimmed: "rgb(62,81,91)",
        diffRemovedDimmed: "rgb(62,44,44)",
        diffAddedWord: "rgb(0,119,179)",
        diffRemovedWord: "rgb(179,0,0)",
        red_FOR_SUBAGENTS_ONLY: "rgb(255,102,102)",
        blue_FOR_SUBAGENTS_ONLY: "rgb(102,178,255)",
        green_FOR_SUBAGENTS_ONLY: "rgb(102,255,102)",
        yellow_FOR_SUBAGENTS_ONLY: "rgb(255,255,102)",
        purple_FOR_SUBAGENTS_ONLY: "rgb(178,102,255)",
        orange_FOR_SUBAGENTS_ONLY: "rgb(255,178,102)",
        pink_FOR_SUBAGENTS_ONLY: "rgb(255,153,204)",
        cyan_FOR_SUBAGENTS_ONLY: "rgb(102,204,204)",
        professionalBlue: "rgb(106,155,204)",
        rainbow_red: "rgb(235,95,87)",
        rainbow_orange: "rgb(245,139,87)",
        rainbow_yellow: "rgb(250,195,95)",
        rainbow_green: "rgb(145,200,130)",
        rainbow_blue: "rgb(130,170,220)",
        rainbow_indigo: "rgb(155,130,200)",
        rainbow_violet: "rgb(200,130,180)",
        rainbow_red_shimmer: "rgb(250,155,147)",
        rainbow_orange_shimmer: "rgb(255,185,137)",
        rainbow_yellow_shimmer: "rgb(255,225,155)",
        rainbow_green_shimmer: "rgb(185,230,180)",
        rainbow_blue_shimmer: "rgb(180,205,240)",
        rainbow_indigo_shimmer: "rgb(195,180,230)",
        rainbow_violet_shimmer: "rgb(230,180,210)",
        clawd_body: "rgb(215,119,87)",
        clawd_background: "rgb(0,0,0)",
        userMessageBackground: "rgb(55, 55, 55)",
        bashMessageBackgroundColor: "rgb(65, 60, 65)",
        memoryBackgroundColor: "rgb(55, 65, 70)",
        rate_limit_fill: "rgb(153,204,255)",
        rate_limit_empty: "rgb(69,92,115)"
    }
});

function gUA(A, Q) {
    let B = A;
    if (Q.inverse) B = oA.inverse(B);
    if (Q.strikethrough) B = oA.strikethrough(B);
    if (Q.underline) B = oA.underline(B);
    if (Q.italic) B = oA.italic(B);
    if (Q.bold) B = oA.bold(B);
    if (Q.dim) B = oA.dim(B);
    if (Q.color) B = hUA(B, Q.color, "foreground");
    if (Q.backgroundColor) B = hUA(B, Q.backgroundColor, "background");
    return B
}

function uUA(A, Q) {
    if (!Q) return A;
    return hUA(A, Q, "foreground")
}

function tQ(A, Q, B = "foreground") {
    return (G) => {
        if (!A) return G;
        if (A.startsWith("rgb(") || A.startsWith("#") || A.startsWith("ansi256(") || A.startsWith("ansi:")) return hUA(G, A, B);
        return hUA(G, w7A(Q)[A], B)
    }
}
var n26, a26, hUA = (A, Q, B) => {
    if (!Q) return A;
    if (Q.startsWith("ansi:")) switch (Q.substring(5)) {
        case "black":
            return B === "foreground" ? oA.black(A) : oA.bgBlack(A);
        case "red":
            return B === "foreground" ? oA.red(A) : oA.bgRed(A);
        case "green":
            return B === "foreground" ? oA.green(A) : oA.bgGreen(A);
        case "yellow":
            return B === "foreground" ? oA.yellow(A) : oA.bgYellow(A);
        case "blue":
            return B === "foreground" ? oA.blue(A) : oA.bgBlue(A);
        case "magenta":
            return B === "foreground" ? oA.magenta(A) : oA.bgMagenta(A);
        case "cyan":
            return B === "foreground" ? oA.cyan(A) : oA.bgCyan(A);
        case "white":
            return B === "foreground" ? oA.white(A) : oA.bgWhite(A);
        case "blackBright":
            return B === "foreground" ? oA.blackBright(A) : oA.bgBlackBright(A);
        case "redBright":
            return B === "foreground" ? oA.redBright(A) : oA.bgRedBright(A);
        case "greenBright":
            return B === "foreground" ? oA.greenBright(A) : oA.bgGreenBright(A);
        case "yellowBright":
            return B === "foreground" ? oA.yellowBright(A) : oA.bgYellowBright(A);
        case "blueBright":
            return B === "foreground" ? oA.blueBright(A) : oA.bgBlueBright(A);
        case "magentaBright":
            return B === "foreground" ? oA.magentaBright(A) : oA.bgMagentaBright(A);
        case "cyanBright":
            return B === "foreground" ? oA.cyanBright(A) : oA.bgCyanBright(A);
        case "whiteBright":
            return B === "foreground" ? oA.whiteBright(A) : oA.bgWhiteBright(A)
    }
    if (Q.startsWith("#")) return B === "foreground" ? oA.hex(Q)(A) : oA.bgHex(Q)(A);
    if (Q.startsWith("ansi256")) {
        let G = a26.exec(Q);
        if (!G) return A;
        let Z = Number(G[1]);
        return B === "foreground" ? oA.ansi256(Z)(A) : oA.bgAnsi256(Z)(A)
    }
    if (Q.startsWith("rgb")) {
        let G = n26.exec(Q);
        if (!G) return A;
        let Z = Number(G[1]),
            I = Number(G[2]),
            Y = Number(G[3]);
        return B === "foreground" ? oA.rgb(Z, I, Y)(A) : oA.bgRgb(Z, I, Y)(A)
    }
    return A
};
var mUA = L(() => {
    J9();
    KaA();
    n26 = /^rgb\(\s?(\d+),\s?(\d+),\s?(\d+)\s?\)$/, a26 = /^ansi256\(\s?(\d+)\s?\)$/
});

function GYB(A, Q, B, G = 0, Z) {
    let I = SZ(Q),
        Y = A.length;
    if (I >= Y - 2) return Q.substring(0, Y);
    let J;
    if (B === "center") J = Math.floor((Y - I) / 2);
    else if (B === "start") J = G + 1;
    else J = Y - I - G - 1;
    J = Math.max(1, Math.min(J, Y - I - 1));
    let W = Z.repeat(J - 1),
        X = Z.repeat(Y - J - I - 1);
    return A.substring(0, 1) + W + Q + X + A.substring(A.length - 1)
}
var ZYB, s26, r26 = (A, Q, B, G) => {
        if (B.style.borderStyle) {
            let Z = Math.floor(B.yogaNode.getComputedWidth()),
                I = Math.floor(B.yogaNode.getComputedHeight()),
                Y = typeof B.style.borderStyle === "string" ? s26[B.style.borderStyle] ?? ZYB.default[B.style.borderStyle] : B.style.borderStyle,
                J = B.style.borderTopColor ?? B.style.borderColor,
                W = B.style.borderBottomColor ?? B.style.borderColor,
                X = B.style.borderLeftColor ?? B.style.borderColor,
                F = B.style.borderRightColor ?? B.style.borderColor,
                V = B.style.borderTopDimColor ?? B.style.borderDimColor,
                K = B.style.borderBottomDimColor ?? B.style.borderDimColor,
                D = B.style.borderLeftDimColor ?? B.style.borderDimColor,
                H = B.style.borderRightDimColor ?? B.style.borderDimColor,
                C = B.style.borderTop !== !1,
                E = B.style.borderBottom !== !1,
                z = B.style.borderLeft !== !1,
                w = B.style.borderRight !== !1,
                N = Math.max(0, Z - (z ? 1 : 0) - (w ? 1 : 0)),
                q = C ? (z ? Y.topLeft : "") + Y.top.repeat(N) + (w ? Y.topRight : "") : "";
            if (C && B.style.borderText?.position === "top") {
                let o = B.style.borderText;
                q = GYB(q, o.content, o.align, o.offset, Y.top)
            }
            let R = C ? uUA(q, J) : void 0;
            if (C && V) R = oA.dim(R);
            let P = I;
            if (C) P -= 1;
            if (E) P -= 1;
            P = Math.max(0, P);
            let y = (uUA(Y.left, X) + `
`).repeat(P);
            if (D) y = oA.dim(y);
            let v = (uUA(Y.right, F) + `
`).repeat(P);
            if (H) v = oA.dim(v);
            let x = E ? (z ? Y.bottomLeft : "") + Y.bottom.repeat(N) + (w ? Y.bottomRight : "") : "";
            if (E && B.style.borderText?.position === "bottom") {
                let o = B.style.borderText;
                x = GYB(x, o.content, o.align, o.offset, Y.bottom)
            }
            let p = E ? uUA(x, W) : void 0;
            if (E && K) p = oA.dim(p);
            let u = C ? 1 : 0;
            if (R) G.write(A, Q, R);
            if (z) G.write(A, Q + u, y);
            if (w) G.write(A + Z - 1, Q + u, v);
            if (p) G.write(A, Q + I - 1, p)
        }
    },
    IYB;
var YYB = L(() => {
    J9();
    F7A();
    mUA();
    ZYB = GA(BYB(), 1), s26 = {
        dashed: {
            top: "╌",
            left: "╎",
            right: "╎",
            bottom: "╌",
            topLeft: " ",
            topRight: " ",
            bottomLeft: " ",
            bottomRight: " "
        }
    };
    IYB = r26
});

function $h1(A, Q) {
    return `${JYB}8;;${Q}${WYB}${A}${JYB}8;;${WYB}`
}

function o26(A) {
    if (A.length === 0) return {};
    let Q = A[0].styles,
        B = A.slice(1),
        G = Q.color !== void 0 && B.every((V) => V.styles.color === Q.color) ? Q.color : void 0,
        Z = Q.backgroundColor !== void 0 && B.every((V) => V.styles.backgroundColor === Q.backgroundColor) ? Q.backgroundColor : void 0,
        I = Q.dim !== void 0 && B.every((V) => V.styles.dim === Q.dim) ? Q.dim : void 0,
        Y = Q.bold !== void 0 && B.every((V) => V.styles.bold === Q.bold) ? Q.bold : void 0,
        J = Q.italic !== void 0 && B.every((V) => V.styles.italic === Q.italic) ? Q.italic : void 0,
        W = Q.underline !== void 0 && B.every((V) => V.styles.underline === Q.underline) ? Q.underline : void 0,
        X = Q.strikethrough !== void 0 && B.every((V) => V.styles.strikethrough === Q.strikethrough) ? Q.strikethrough : void 0,
        F = Q.inverse !== void 0 && B.every((V) => V.styles.inverse === Q.inverse) ? Q.inverse : void 0;
    return {
        ...G !== void 0 && {
            color: G
        },
        ...Z !== void 0 && {
            backgroundColor: Z
        },
        ...I !== void 0 && {
            dim: I
        },
        ...Y !== void 0 && {
            bold: Y
        },
        ...J !== void 0 && {
            italic: J
        },
        ...W !== void 0 && {
            underline: W
        },
        ...X !== void 0 && {
            strikethrough: X
        },
        ...F !== void 0 && {
            inverse: F
        }
    }
}

function t26(A) {
    return Object.keys(A).length > 0
}

function e26(A, Q) {
    let B = A.childNodes[0]?.yogaNode;
    if (B) {
        let G = B.getComputedLeft(),
            Z = B.getComputedTop();
        Q = `
`.repeat(Z) + zh1(Q, G)
    }
    return Q
}

function XYB(A, Q, {
    offsetX: B = 0,
    offsetY: G = 0,
    skipStaticElements: Z
}) {
    if (Z && A.internal_static) return;
    let {
        yogaNode: I
    } = A;
    if (I) {
        if (I.getDisplay() === DT.None) return;
        let Y = B + I.getComputedLeft(),
            J = G + I.getComputedTop();
        if (A.nodeName === "ink-text") {
            let X = nnA(A),
                F = X.map((V) => V.text).join("");
            if (F.length > 0) {
                let V = tIB(I),
                    K = A.style.textWrap ?? "wrap",
                    H = X7A(F) > V,
                    C;
                if (H && X.length === 1) {
                    let E = X[0];
                    C = cb(F, V, K).split(`
`).map((w) => {
                        let N = gUA(w, E.styles);
                        if (E.hyperlink) N = $h1(N, E.hyperlink);
                        return N
                    }).join(`
`)
                } else if (H) {
                    C = X.map((z) => {
                        let w = gUA(z.text, z.styles);
                        if (z.hyperlink) w = $h1(w, z.hyperlink);
                        return w
                    }).join(""), C = cb(C, V, K);
                    let E = o26(X);
                    if (t26(E)) C = C.split(`
`).map((z) => gUA(z, E)).join(`
`)
                } else C = X.map((E) => {
                    let z = gUA(E.text, E.styles);
                    if (E.hyperlink) z = $h1(z, E.hyperlink);
                    return z
                }).join("");
                C = e26(A, C), Q.write(Y, J, C)
            }
            return
        }
        let W = !1;
        if (A.nodeName === "ink-box") {
            IYB(Y, J, A, Q);
            let X = A.style.overflowX === "hidden" || A.style.overflow === "hidden",
                F = A.style.overflowY === "hidden" || A.style.overflow === "hidden";
            if (X || F) {
                let V = X ? Y + I.getComputedBorder(O6.Left) : void 0,
                    K = X ? Y + I.getComputedWidth() - I.getComputedBorder(O6.Right) : void 0,
                    D = F ? J + I.getComputedBorder(O6.Top) : void 0,
                    H = F ? J + I.getComputedHeight() - I.getComputedBorder(O6.Bottom) : void 0;
                Q.clip({
                    x1: V,
                    x2: K,
                    y1: D,
                    y2: H
                }), W = !0
            }
        }
        if (A.nodeName === "ink-root" || A.nodeName === "ink-box") {
            for (let X of A.childNodes) XYB(X, Q, {
                offsetX: Y,
                offsetY: J,
                skipStaticElements: Z
            });
            if (W) Q.unclip()
        }
    }
}
var JYB = "\x1B]",
    WYB = "\x07",
    wh1;
var FYB = L(() => {
    mnA();
    $t();
    inA();
    eIB();
    sf1();
    YYB();
    mUA();
    wh1 = XYB
});

function qh1(A) {
    if (!Number.isInteger(A)) return !1;
    return wt(A) === 2
}
var VYB = L(() => {
    LUA()
});

function G96(A) {
    if (Lh1.has(A)) return A;
    if (Nh1.has(A)) return Nh1.get(A);
    if (A = A.slice(2), A.includes(";")) A = A[0] + "0";
    let Q = b7.codes.get(Number.parseInt(A, 10));
    if (Q) return b7.color.ansi(Q);
    return b7.reset.open
}

function Z96(A) {
    for (let Q = 0; Q < A.length; Q++) {
        let B = A.codePointAt(Q);
        if (B >= Q96 && B <= B96) return Q
    }
    return -1
}

function I96(A, Q) {
    A = A.slice(Q, Q + 19);
    let B = Z96(A);
    if (B !== -1) {
        let G = A.indexOf("m", B);
        if (G === -1) G = A.length;
        return A.slice(0, G + 1)
    }
}

function Y96(A, Q = Number.POSITIVE_INFINITY) {
    let B = [],
        G = 0,
        Z = 0;
    while (G < A.length) {
        let I = A.codePointAt(G);
        if (A96.has(I)) {
            let W = I96(A, G);
            if (W) {
                B.push({
                    type: "ansi",
                    code: W,
                    endCode: G96(W)
                }), G += W.length;
                continue
            }
        }
        let Y = qh1(I),
            J = String.fromCodePoint(I);
        if (B.push({
                type: "character",
                value: J,
                isFullWidth: Y
            }), G += J.length, Z += Y ? 2 : J.length, Z >= Q) break
    }
    return B
}

function KYB(A) {
    let Q = [];
    for (let B of A)
        if (B.code === b7.reset.open) Q = [];
        else if (Lh1.has(B.code)) Q = Q.filter((G) => G.endCode !== B.code);
    else Q = Q.filter((G) => G.endCode !== B.endCode), Q.push(B);
    return Q
}

function J96(A) {
    return KYB(A).map(({
        endCode: G
    }) => G).reverse().join("")
}

function Ot(A, Q, B) {
    let G = Y96(A, B),
        Z = [],
        I = 0,
        Y = "",
        J = !1;
    for (let W of G) {
        if (B !== void 0 && I >= B) break;
        if (W.type === "ansi") {
            if (Z.push(W), J) Y += W.code
        } else {
            if (!J && I >= Q) J = !0, Z = KYB(Z), Y = Z.map(({
                code: X
            }) => X).join("");
            if (J) Y += W.value;
            I += W.isFullWidth ? 2 : W.value.length
        }
    }
    return Y += J96(Z), Y
}
var A96, Q96, B96, Lh1, Nh1;
var Mh1 = L(() => {
    V7A();
    VYB();
    A96 = new Set([27, 155]), Q96 = "0".codePointAt(0), B96 = "9".codePointAt(0), Lh1 = new Set, Nh1 = new Map;
    for (let [A, Q] of b7.codes) Lh1.add(b7.color.ansi(Q)), Nh1.set(b7.color.ansi(A), b7.color.ansi(Q))
});

function Th1(A) {
    if (DaA.has(A)) return A;
    if (Oh1.has(A)) return Oh1.get(A);
    if (A.startsWith(HaA)) return W96;
    if (A = A.slice(2), A.startsWith("38")) return b7.color.close;
    else if (A.startsWith("48")) return b7.bgColor.close;
    let Q = b7.codes.get(parseInt(A, 10));
    if (Q) return b7.color.ansi(Q);
    else return b7.reset.open
}

function Rt(A) {
    return A.map((Q) => Q.code).join("")
}
var DYB, HYB, CYB, DaA, Oh1, HaA = "\x1B]8;;",
    Rh1, EYB = "\x07",
    of7, W96;
var dUA = L(() => {
    V7A();
    DYB = new Set([27, 155]), HYB = "[".codePointAt(0), CYB = "]".codePointAt(0), DaA = new Set, Oh1 = new Map;
    for (let [A, Q] of b7.codes) DaA.add(b7.color.ansi(Q)), Oh1.set(b7.color.ansi(A), b7.color.ansi(Q));
    Rh1 = HaA.split("").map((A) => A.charCodeAt(0)), of7 = EYB.charCodeAt(0), W96 = `\x1B]8;;${EYB}`
});

function Ph1(A) {
    return CaA([], A)
}

function CaA(A, Q) {
    let B = [...A];
    for (let G of Q)
        if (G.code === b7.reset.open) B = [];
        else if (DaA.has(G.code)) B = B.filter((Z) => Z.endCode !== G.code);
    else if (G.code === b7.bold.open || G.code === b7.dim.open) {
        if (!B.find((I) => I.code === G.code && I.endCode === G.endCode)) B.push(G)
    } else B = B.filter((I) => I.endCode !== G.endCode), B.push(G);
    return B
}
var EaA = L(() => {
    V7A();
    dUA()
});

function jh1(A) {
    return Ph1(A).reverse().map((Q) => ({
        ...Q,
        code: Q.endCode
    }))
}
var Sh1 = L(() => {
    EaA()
});

function rc(A, Q) {
    let B = new Set(Q.map((Z) => Z.endCode)),
        G = new Set(A.map((Z) => Z.code));
    return [...jh1(A.filter((Z) => !B.has(Z.endCode))), ...Q.filter((Z) => !G.has(Z.code))]
}
var _h1 = L(() => {
    Sh1()
});

function zYB(A) {
    let Q = [],
        B = [];
    for (let G of A)
        if (G.type === "ansi") Q = CaA(Q, [G]);
        else if (G.type === "char") B.push({
        ...G,
        styles: [...Q]
    });
    return B
}

function UYB(A) {
    let Q = "";
    for (let B = 0; B < A.length; B++) {
        let G = A[B];
        if (B === 0) Q += Rt(G.styles);
        else Q += Rt(rc(A[B - 1].styles, G.styles));
        if (Q += G.value, B === A.length - 1) Q += Rt(rc(G.styles, []))
    }
    return Q
}
var $YB = L(() => {
    dUA();
    _h1();
    EaA()
});

function kh1(A) {
    if (!Number.isInteger(A)) return !1;
    return qUA(A) || NUA(A)
}
var wYB = L(() => {
    LUA()
});

function X96(A, Q) {
    A = A.slice(Q);
    for (let G = 1; G < Rh1.length; G++)
        if (A.charCodeAt(G) !== Rh1[G]) return;
    let B = A.indexOf("\x07", HaA.length);
    if (B === -1) return;