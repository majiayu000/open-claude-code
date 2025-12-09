/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_023.js
 * 处理时间: 2025-12-09T03:41:39.236Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * px       (  6x) isArguments()
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 23/53
 * Lines: 177711 - 179209 (1499 lines)
 * Original file: cli.js
 */

                function k1(b, a, c) {
                    var s = Math.max(c.height, 20),
                        r = Math.max(c.width, 60),
                        bA = 5,
                        Y1;
                    if (b.top + b.height + s <= a.top + a.height)
                        if (b.top + b.height < a.top + 0) Y1 = a.top + bA;
                        else Y1 = b.top + b.height + bA;
                    else if (b.top - s <= a.top + a.height)
                        if (b.top - s - bA < a.top + bA) Y1 = a.top + bA;
                        else Y1 = b.top - s - bA;
                    else Y1 = a.top + a.height - s - bA;
                    var Q1 = b.left + bA;
                    if (b.left < a.left) Q1 = a.left + bA;
                    if (b.left + r > a.left + a.width) Q1 = a.left + a.width - r - bA;
                    return Y1 += "px", Q1 += "px", {
                        style: {
                            top: Y1,
                            left: Q1
                        }
                    }
                }

                function T0(b, a, c) {
                    b1(c.style, {
                        borderTopWidth: b[a + "Top"] + "px",
                        borderLeftWidth: b[a + "Left"] + "px",
                        borderRightWidth: b[a + "Right"] + "px",
                        borderBottomWidth: b[a + "Bottom"] + "px",
                        borderStyle: "solid"
                    })
                }
                var fQ = {
                        background: "rgba(120, 170, 210, 0.7)",
                        padding: "rgba(77, 200, 0, 0.3)",
                        margin: "rgba(255, 155, 0, 0.3)",
                        border: "rgba(255, 200, 50, 0.3)"
                    },
                    F1 = 2000,
                    R1 = null,
                    N1 = null;

                function Z0(b) {
                    if (window.document == null) {
                        b.emit("hideNativeHighlight");
                        return
                    }
                    if (R1 = null, N1 !== null) N1.remove(), N1 = null
                }

                function J0(b, a, c, s) {
                    if (window.document == null) {
                        if (b != null && b[0] != null) c.emit("showNativeHighlight", b[0]);
                        return
                    }
                    if (R1 !== null) clearTimeout(R1);
                    if (b == null) return;
                    if (N1 === null) N1 = new u0(c);
                    if (N1.inspect(b, a), s) R1 = setTimeout(function() {
                        return Z0(c)
                    }, F1)
                }
                var s1 = new Set;

                function p0(b, a) {
                    b.addListener("clearNativeElementHighlight", Y1), b.addListener("highlightNativeElement", Q1), b.addListener("shutdown", r), b.addListener("startInspectingNative", c), b.addListener("stopInspectingNative", r);

                    function c() {
                        s(window)
                    }

                    function s(gQ) {
                        if (gQ && typeof gQ.addEventListener === "function") gQ.addEventListener("click", uA, !0), gQ.addEventListener("mousedown", z1, !0), gQ.addEventListener("mouseover", z1, !0), gQ.addEventListener("mouseup", z1, !0), gQ.addEventListener("pointerdown", _1, !0), gQ.addEventListener("pointermove", a1, !0), gQ.addEventListener("pointerup", QQ, !0);
                        else a.emit("startInspectingNative")
                    }

                    function r() {
                        Z0(a), bA(window), s1.forEach(function(gQ) {
                            try {
                                bA(gQ.contentWindow)
                            } catch (I9) {}
                        }), s1 = new Set
                    }

                    function bA(gQ) {
                        if (gQ && typeof gQ.removeEventListener === "function") gQ.removeEventListener("click", uA, !0), gQ.removeEventListener("mousedown", z1, !0), gQ.removeEventListener("mouseover", z1, !0), gQ.removeEventListener("mouseup", z1, !0), gQ.removeEventListener("pointerdown", _1, !0), gQ.removeEventListener("pointermove", a1, !0), gQ.removeEventListener("pointerup", QQ, !0);
                        else a.emit("stopInspectingNative")
                    }

                    function Y1() {
                        Z0(a)
                    }

                    function Q1(gQ) {
                        var {
                            displayName: I9,
                            hideAfterTimeout: m4,
                            id: x5,
                            openNativeElementsPanel: SB,
                            rendererID: D5,
                            scrollIntoView: X7
                        } = gQ, d4 = a.rendererInterfaces[D5];
                        if (d4 == null) {
                            console.warn('Invalid renderer id "'.concat(D5, '" for element "').concat(x5, '"')), Z0(a);
                            return
                        }
                        if (!d4.hasFiberWithId(x5)) {
                            Z0(a);
                            return
                        }
                        var Y8 = d4.findNativeNodesForFiberID(x5);
                        if (Y8 != null && Y8[0] != null) {
                            var U3 = Y8[0];
                            if (X7 && typeof U3.scrollIntoView === "function") U3.scrollIntoView({
                                block: "nearest",
                                inline: "nearest"
                            });
                            if (J0(Y8, I9, a, m4), SB) window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0 = U3, b.send("syncSelectionToNativeElementsPanel")
                        } else Z0(a)
                    }

                    function uA(gQ) {
                        gQ.preventDefault(), gQ.stopPropagation(), r(), b.send("stopInspectingNative", !0)
                    }

                    function z1(gQ) {
                        gQ.preventDefault(), gQ.stopPropagation()
                    }

                    function _1(gQ) {
                        gQ.preventDefault(), gQ.stopPropagation(), MQ(N2(gQ))
                    }
                    var i1 = null;

                    function a1(gQ) {
                        gQ.preventDefault(), gQ.stopPropagation();
                        var I9 = N2(gQ);
                        if (i1 === I9) return;
                        if (i1 = I9, I9.tagName === "IFRAME") {
                            var m4 = I9;
                            try {
                                if (!s1.has(m4)) {
                                    var x5 = m4.contentWindow;
                                    s(x5), s1.add(m4)
                                }
                            } catch (SB) {}
                        }
                        J0([I9], null, a, !1), MQ(I9)
                    }

                    function QQ(gQ) {
                        gQ.preventDefault(), gQ.stopPropagation()
                    }
                    var MQ = F()($A(function(gQ) {
                        var I9 = a.getIDForNode(gQ);
                        if (I9 !== null) b.send("selectFiber", I9)
                    }), 200, {
                        leading: !1
                    });

                    function N2(gQ) {
                        if (gQ.composed) return gQ.composedPath()[0];
                        return gQ.target
                    }
                }
                var HQ = "#f0f0f0",
                    ZB = ["#37afa9", "#63b19e", "#80b393", "#97b488", "#abb67d", "#beb771", "#cfb965", "#dfba57", "#efbb49", "#febc38"],
                    rQ = null;

                function PB(b, a) {
                    if (window.document == null) {
                        var c = [];
                        IQ(b, function(bA, Y1, Q1) {
                            c.push({
                                node: Q1,
                                color: Y1
                            })
                        }), a.emit("drawTraceUpdates", c);
                        return
                    }
                    if (rQ === null) p5();
                    var s = rQ;
                    s.width = window.innerWidth, s.height = window.innerHeight;
                    var r = s.getContext("2d");
                    r.clearRect(0, 0, s.width, s.height), IQ(b, function(bA, Y1) {
                        if (bA !== null) l9(r, bA, Y1)
                    })
                }

                function IQ(b, a) {
                    b.forEach(function(c, s) {
                        var {
                            count: r,
                            rect: bA
                        } = c, Y1 = Math.min(ZB.length - 1, r - 1), Q1 = ZB[Y1];
                        a(bA, Q1, s)
                    })
                }

                function l9(b, a, c) {
                    var {
                        height: s,
                        left: r,
                        top: bA,
                        width: Y1
                    } = a;
                    b.lineWidth = 1, b.strokeStyle = HQ, b.strokeRect(r - 1, bA - 1, Y1 + 2, s + 2), b.lineWidth = 1, b.strokeStyle = HQ, b.strokeRect(r + 1, bA + 1, Y1 - 1, s - 1), b.strokeStyle = c, b.setLineDash([0]), b.lineWidth = 1, b.strokeRect(r, bA, Y1 - 1, s - 1), b.setLineDash([0])
                }

                function h4(b) {
                    if (window.document == null) {
                        b.emit("disableTraceUpdates");
                        return
                    }
                    if (rQ !== null) {
                        if (rQ.parentNode != null) rQ.parentNode.removeChild(rQ);
                        rQ = null
                    }
                }

                function p5() {
                    rQ = window.document.createElement("canvas"), rQ.style.cssText = `
    xx-background-color: red;
    xx-opacity: 0.5;
    bottom: 0;
    left: 0;
    pointer-events: none;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000000000;
  `;
                    var b = window.document.documentElement;
                    b.insertBefore(rQ, b.firstChild)
                }

                function uG(b) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") uG = function(c) {
                        return typeof c
                    };
                    else uG = function(c) {
                        return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
                    };
                    return uG(b)
                }
                var DG = 250,
                    C3 = 3000,
                    CZ = 250,
                    LI = (typeof performance > "u" ? "undefined" : uG(performance)) === "object" && typeof performance.now === "function" ? function() {
                        return performance.now()
                    } : function() {
                        return Date.now()
                    },
                    e8 = new Map,
                    _5 = null,
                    mG = null,
                    dG = !1,
                    U1 = null;

                function nA(b) {
                    _5 = b, _5.addListener("traceUpdates", O1)
                }

                function C1(b) {
                    if (dG = b, !dG) {
                        if (e8.clear(), mG !== null) cancelAnimationFrame(mG), mG = null;
                        if (U1 !== null) clearTimeout(U1), U1 = null;
                        h4(_5)
                    }
                }

                function O1(b) {
                    if (!dG) return;
                    if (b.forEach(function(a) {
                            var c = e8.get(a),
                                s = LI(),
                                r = c != null ? c.lastMeasuredAt : 0,
                                bA = c != null ? c.rect : null;
                            if (bA === null || r + CZ < s) r = s, bA = O0(a);
                            e8.set(a, {
                                count: c != null ? c.count + 1 : 1,
                                expirationTime: c != null ? Math.min(s + C3, c.expirationTime + DG) : s + DG,
                                lastMeasuredAt: r,
                                rect: bA
                            })
                        }), U1 !== null) clearTimeout(U1), U1 = null;
                    if (mG === null) mG = requestAnimationFrame(y1)
                }

                function y1() {
                    mG = null, U1 = null;
                    var b = LI(),
                        a = Number.MAX_VALUE;
                    if (e8.forEach(function(c, s) {
                            if (c.expirationTime < b) e8.delete(s);
                            else a = Math.min(a, c.expirationTime)
                        }), PB(e8, _5), a !== Number.MAX_VALUE) U1 = setTimeout(y1, a - b)
                }

                function O0(b) {
                    if (!b || typeof b.getBoundingClientRect !== "function") return null;
                    var a = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
                    return I1(b, a)
                }

                function oQ(b) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") oQ = function(c) {
                        return typeof c
                    };
                    else oQ = function(c) {
                        return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
                    };
                    return oQ(b)
                }

                function lB(b, a) {
                    return v6(b) || A6(b, a) || C6(b, a) || k9()
                }

                function k9() {
                    throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                }

                function C6(b, a) {
                    if (!b) return;
                    if (typeof b === "string") return y9(b, a);
                    var c = Object.prototype.toString.call(b).slice(8, -1);
                    if (c === "Object" && b.constructor) c = b.constructor.name;
                    if (c === "Map" || c === "Set") return Array.from(b);
                    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return y9(b, a)
                }

                function y9(b, a) {
                    if (a == null || a > b.length) a = b.length;
                    for (var c = 0, s = Array(a); c < a; c++) s[c] = b[c];
                    return s
                }

                function A6(b, a) {
                    if (typeof Symbol > "u" || !(Symbol.iterator in Object(b))) return;
                    var c = [],
                        s = !0,
                        r = !1,
                        bA = void 0;
                    try {
                        for (var Y1 = b[Symbol.iterator](), Q1; !(s = (Q1 = Y1.next()).done); s = !0)
                            if (c.push(Q1.value), a && c.length === a) break
                    } catch (uA) {
                        r = !0, bA = uA
                    } finally {
                        try {
                            if (!s && Y1.return != null) Y1.return()
                        } finally {
                            if (r) throw bA
                        }
                    }
                    return c
                }

                function v6(b) {
                    if (Array.isArray(b)) return b
                }
                var w8 = function(a, c) {
                        var s = B6(a),
                            r = B6(c),
                            bA = s.pop(),
                            Y1 = r.pop(),
                            Q1 = B8(s, r);
                        if (Q1 !== 0) return Q1;
                        if (bA && Y1) return B8(bA.split("."), Y1.split("."));
                        else if (bA || Y1) return bA ? -1 : 1;
                        return 0
                    },
                    i9 = function(a) {
                        return typeof a === "string" && /^[v\d]/.test(a) && n7.test(a)
                    },
                    Q6 = function(a, c, s) {
                        w4(s);
                        var r = w8(a, c);
                        return W5[s].includes(r)
                    },
                    $4 = function(a, c) {
                        var s = c.match(/^([<>=~^]+)/),
                            r = s ? s[1] : "=";
                        if (r !== "^" && r !== "~") return Q6(a, c, r);
                        var bA = B6(a),
                            Y1 = lB(bA, 5),
                            Q1 = Y1[0],
                            uA = Y1[1],
                            z1 = Y1[2],
                            _1 = Y1[4],
                            i1 = B6(c),
                            a1 = lB(i1, 5),
                            QQ = a1[0],
                            MQ = a1[1],
                            N2 = a1[2],
                            gQ = a1[4],
                            I9 = [Q1, uA, z1],
                            m4 = [QQ, MQ !== null && MQ !== void 0 ? MQ : "x", N2 !== null && N2 !== void 0 ? N2 : "x"];
                        if (gQ) {
                            if (!_1) return !1;
                            if (B8(I9, m4) !== 0) return !1;
                            if (B8(_1.split("."), gQ.split(".")) === -1) return !1
                        }
                        var x5 = m4.findIndex(function(D5) {
                                return D5 !== "0"
                            }) + 1,
                            SB = r === "~" ? 2 : x5 > 1 ? x5 : 1;
                        if (B8(I9.slice(0, SB), m4.slice(0, SB)) !== 0) return !1;
                        if (B8(I9.slice(SB), m4.slice(SB)) === -1) return !1;
                        return !0
                    },
                    n7 = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
                    B6 = function(a) {
                        if (typeof a !== "string") throw TypeError("Invalid argument expected string");
                        var c = a.match(n7);
                        if (!c) throw Error("Invalid argument not valid semver ('".concat(a, "' received)"));
                        return c.shift(), c
                    },
                    k5 = function(a) {
                        return a === "*" || a === "x" || a === "X"
                    },
                    g9 = function(a) {
                        var c = parseInt(a, 10);
                        return isNaN(c) ? a : c
                    },
                    g4 = function(a, c) {
                        return oQ(a) !== oQ(c) ? [String(a), String(c)] : [a, c]
                    },
                    q8 = function(a, c) {
                        if (k5(a) || k5(c)) return 0;
                        var s = g4(g9(a), g9(c)),
                            r = lB(s, 2),
                            bA = r[0],
                            Y1 = r[1];
                        if (bA > Y1) return 1;
                        if (bA < Y1) return -1;
                        return 0
                    },
                    B8 = function(a, c) {
                        for (var s = 0; s < Math.max(a.length, c.length); s++) {
                            var r = q8(a[s] || "0", c[s] || "0");
                            if (r !== 0) return r
                        }
                        return 0
                    },
                    W5 = {
                        ">": [1],
                        ">=": [0, 1],
                        "=": [0],
                        "<=": [-1, 0],
                        "<": [-1]
                    },
                    u9 = Object.keys(W5),
                    w4 = function(a) {
                        if (typeof a !== "string") throw TypeError("Invalid operator type, expected string but got ".concat(oQ(a)));
                        if (u9.indexOf(a) === -1) throw Error("Invalid operator, expected one of ".concat(u9.join("|")))
                    },
                    E3 = B(730),
                    V9 = B.n(E3),
                    Q4 = B(550);

                function dA(b) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") dA = function(c) {
                        return typeof c
                    };
                    else dA = function(c) {
                        return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
                    };
                    return dA(b)
                }
                var YA = Symbol.for("react.element"),
                    ZA = Symbol.for("react.portal"),
                    jA = Symbol.for("react.fragment"),
                    xA = Symbol.for("react.strict_mode"),
                    mA = Symbol.for("react.profiler"),
                    E1 = Symbol.for("react.provider"),
                    S1 = Symbol.for("react.context"),
                    P1 = Symbol.for("react.server_context"),
                    c1 = Symbol.for("react.forward_ref"),
                    l1 = Symbol.for("react.suspense"),
                    I0 = Symbol.for("react.suspense_list"),
                    e0 = Symbol.for("react.memo"),
                    dQ = Symbol.for("react.lazy"),
                    iB = Symbol.for("react.scope"),
                    EB = Symbol.for("react.debug_trace_mode"),
                    m2 = Symbol.for("react.offscreen"),
                    q4 = Symbol.for("react.legacy_hidden"),
                    J7 = Symbol.for("react.cache"),
                    X5 = Symbol.for("react.tracing_marker"),
                    sW = Symbol.for("react.default_value"),
                    l5 = Symbol.for("react.memo_cache_sentinel"),
                    tJ = Symbol.for("react.postpone"),
                    AJ = Symbol.iterator,
                    B4 = "@@iterator";

                function QV(b) {
                    if (b === null || dA(b) !== "object") return null;
                    var a = AJ && b[AJ] || b[B4];
                    if (typeof a === "function") return a;
                    return null
                }
                var HG = 1,
                    eJ = 2,
                    WF = 5,
                    BV = 6,
                    z3 = 7,
                    GV = 8,
                    UY = 9,
                    AQ = 10,
                    C2 = 11,
                    xQ = 12,
                    IB = 13,
                    E6 = 14,
                    X8 = 1,
                    U9 = 2,
                    G8 = 3,
                    AW = 4,
                    M4 = 1,
                    a7 = Array.isArray;
                let iZ = a7;
                var p8 = B(169);

                function s7(b) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") s7 = function(c) {
                        return typeof c
                    };
                    else s7 = function(c) {
                        return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
                    };
                    return s7(b)
                }

                function $Y(b) {
                    return nZ(b) || h3(b) || YN(b) || PC()
                }

                function PC() {
                    throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                }

                function YN(b, a) {
                    if (!b) return;
                    if (typeof b === "string") return oD(b, a);
                    var c = Object.prototype.toString.call(b).slice(8, -1);
                    if (c === "Object" && b.constructor) c = b.constructor.name;
                    if (c === "Map" || c === "Set") return Array.from(b);
                    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return oD(b, a)
                }

                function h3(b) {
                    if (typeof Symbol < "u" && Symbol.iterator in Object(b)) return Array.from(b)
                }

                function nZ(b) {
                    if (Array.isArray(b)) return oD(b)
                }

                function oD(b, a) {
                    if (a == null || a > b.length) a = b.length;
                    for (var c = 0, s = Array(a); c < a; c++) s[c] = b[c];
                    return s
                }
                var rW = Object.prototype.hasOwnProperty,
                    oW = new WeakMap,
                    F5 = new(V9())({
                        max: 1000
                    });

                function eP(b, a) {
                    if (b.toString() > a.toString()) return 1;
                    else if (a.toString() > b.toString()) return -1;
                    else return 0
                }

                function aZ(b) {
                    var a = new Set,
                        c = b,
                        s = function() {
                            var bA = [].concat($Y(Object.keys(c)), $Y(Object.getOwnPropertySymbols(c))),
                                Y1 = Object.getOwnPropertyDescriptors(c);
                            bA.forEach(function(Q1) {
                                if (Y1[Q1].enumerable) a.add(Q1)
                            }), c = Object.getPrototypeOf(c)
                        };
                    while (c != null) s();
                    return a
                }

                function d2(b, a, c, s) {
                    var r = b.displayName;
                    return r || "".concat(c, "(").concat(b6(a, s), ")")
                }

                function b6(b) {
                    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Anonymous",
                        c = oW.get(b);
                    if (c != null) return c;
                    var s = a;
                    if (typeof b.displayName === "string") s = b.displayName;
                    else if (typeof b.name === "string" && b.name !== "") s = b.name;
                    return oW.set(b, s), s
                }
                var r7 = 0;

                function g3() {
                    return ++r7
                }

                function tW(b) {
                    var a = "";
                    for (var c = 0; c < b.length; c++) {
                        var s = b[c];
                        a += String.fromCodePoint(s)
                    }
                    return a
                }

                function wY(b, a) {
                    return ((b & 1023) << 10) + (a & 1023) + 65536
                }

                function OK(b) {
                    var a = F5.get(b);
                    if (a !== void 0) return a;
                    var c = [],
                        s = 0,
                        r;
                    while (s < b.length) {
                        if (r = b.charCodeAt(s), (r & 63488) === 55296) c.push(wY(r, b.charCodeAt(++s)));
                        else c.push(r);
                        ++s
                    }
                    return F5.set(b, c), c
                }

                function y5(b) {
                    var a = b[0],
                        c = b[1],
                        s = ["operations for renderer:".concat(a, " and root:").concat(c)],
                        r = 2,
                        bA = [null],
                        Y1 = b[r++],
                        Q1 = r + Y1;
                    while (r < Q1) {
                        var uA = b[r++],
                            z1 = tW(b.slice(r, r + uA));
                        bA.push(z1), r += uA
                    }
                    while (r < b.length) {
                        var _1 = b[r];
                        switch (_1) {
                            case E: {
                                var i1 = b[r + 1],
                                    a1 = b[r + 2];
                                if (r += 3, a1 === C2) s.push("Add new root node ".concat(i1)), r++, r++, r++, r++;
                                else {
                                    var QQ = b[r];
                                    r++, r++;
                                    var MQ = b[r],
                                        N2 = bA[MQ];
                                    r++, r++, s.push("Add node ".concat(i1, " (").concat(N2 || "null", ") as child of ").concat(QQ))
                                }
                                break
                            }
                            case z: {
                                var gQ = b[r + 1];
                                r += 2;
                                for (var I9 = 0; I9 < gQ; I9++) {
                                    var m4 = b[r];
                                    r += 1, s.push("Remove node ".concat(m4))
                                }
                                break
                            }
                            case R: {
                                r += 1, s.push("Remove root ".concat(c));
                                break
                            }
                            case P: {
                                var x5 = b[r + 1],
                                    SB = b[r + 1];
                                r += 3, s.push("Mode ".concat(SB, " set for subtree with root ").concat(x5));
                                break
                            }
                            case w: {
                                var D5 = b[r + 1],
                                    X7 = b[r + 2];
                                r += 3;
                                var d4 = b.slice(r, r + X7);
                                r += X7, s.push("Re-order node ".concat(D5, " children ").concat(d4.join(",")));
                                break
                            }
                            case N:
                                r += 3;
                                break;
                            case q:
                                var Y8 = b[r + 1],
                                    U3 = b[r + 2],
                                    RY = b[r + 3];
                                r += 4, s.push("Node ".concat(Y8, " has ").concat(U3, " errors and ").concat(RY, " warnings"));
                                break;
                            default:
                                throw Error('Unsupported Bridge operation "'.concat(_1, '"'))
                        }
                    }
                    console.log(s.join(`
  `))
                }

                function qY() {
                    return [{
                        type: X8,
                        value: z3,
                        isEnabled: !0
                    }]
                }

                function ZV() {
                    try {
                        var b = localStorageGetItem(LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY);
                        if (b != null) return JSON.parse(b)
                    } catch (a) {}
                    return qY()
                }

                function Aj(b) {
                    localStorageSetItem(LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY, JSON.stringify(b))
                }

                function RK(b) {
                    if (b === "true") return !0;
                    if (b === "false") return !1
                }

                function tD(b) {
                    if (b === !0 || b === !1) return b
                }

                function jC(b) {
                    if (b === "light" || b === "dark" || b === "auto") return b
                }

                function ag() {
                    var b, a = localStorageGetItem(LOCAL_STORAGE_SHOULD_APPEND_COMPONENT_STACK_KEY);
                    return (b = RK(a)) !== null && b !== void 0 ? b : !0
                }

                function Oa() {
                    var b, a = localStorageGetItem(LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS);
                    return (b = RK(a)) !== null && b !== void 0 ? b : !1
                }

                function JN() {
                    var b, a = localStorageGetItem(LOCAL_STORAGE_HIDE_CONSOLE_LOGS_IN_STRICT_MODE);
                    return (b = RK(a)) !== null && b !== void 0 ? b : !1
                }

                function WN() {
                    var b, a = localStorageGetItem(LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY);
                    return (b = RK(a)) !== null && b !== void 0 ? b : !0
                }

                function CA() {
                    return typeof p8.env.EDITOR_URL === "string" ? p8.env.EDITOR_URL : ""
                }

                function MA() {
                    try {
                        var b = localStorageGetItem(LOCAL_STORAGE_OPEN_IN_EDITOR_URL);
                        if (b != null) return JSON.parse(b)
                    } catch (a) {}
                    return CA()
                }

                function H1(b, a) {
                    if (b === null) return [null, null];
                    var c = null;
                    switch (a) {
                        case ElementTypeClass:
                        case ElementTypeForwardRef:
                        case ElementTypeFunction:
                        case ElementTypeMemo:
                            if (b.indexOf("(") >= 0) {
                                var s = b.match(/[^()]+/g);
                                if (s != null) b = s.pop(), c = s
                            }
                            break;
                        default:
                            break
                    }
                    return [b, c]
                }

                function X0(b, a) {
                    for (var c in b)
                        if (!(c in a)) return !0;
                    for (var s in a)
                        if (b[s] !== a[s]) return !0;
                    return !1
                }

                function z0(b, a) {
                    return a.reduce(function(c, s) {
                        if (c) {
                            if (rW.call(c, s)) return c[s];
                            if (typeof c[Symbol.iterator] === "function") return Array.from(c)[s]
                        }
                        return null
                    }, b)
                }

                function iQ(b, a) {
                    var c = a.length,
                        s = a[c - 1];
                    if (b != null) {
                        var r = z0(b, a.slice(0, c - 1));
                        if (r)
                            if (iZ(r)) r.splice(s, 1);
                            else delete r[s]
                    }
                }

                function O2(b, a, c) {
                    var s = a.length;
                    if (b != null) {
                        var r = z0(b, a.slice(0, s - 1));
                        if (r) {
                            var bA = a[s - 1],
                                Y1 = c[s - 1];
                            if (r[Y1] = r[bA], iZ(r)) r.splice(bA, 1);
                            else delete r[bA]
                        }
                    }
                }

                function n9(b, a, c) {
                    var s = a.length,
                        r = a[s - 1];
                    if (b != null) {
                        var bA = z0(b, a.slice(0, s - 1));
                        if (bA) bA[r] = c
                    }
                }

                function f6(b) {
                    if (b === null) return "null";
                    else if (b === void 0) return "undefined";
                    if ((0, Q4.isElement)(b)) return "react_element";
                    if (typeof HTMLElement < "u" && b instanceof HTMLElement) return "html_element";
                    var a = s7(b);
                    switch (a) {
                        case "bigint":
                            return "bigint";
                        case "boolean":
                            return "boolean";
                        case "function":
                            return "function";
                        case "number":
                            if (Number.isNaN(b)) return "nan";
                            else if (!Number.isFinite(b)) return "infinity";
                            else return "number";
                        case "object":
                            if (iZ(b)) return "array";
                            else if (ArrayBuffer.isView(b)) return rW.call(b.constructor, "BYTES_PER_ELEMENT") ? "typed_array" : "data_view";
                            else if (b.constructor && b.constructor.name === "ArrayBuffer") return "array_buffer";
                            else if (typeof b[Symbol.iterator] === "function") {
                                var c = b[Symbol.iterator]();
                                if (!c);
                                else return c === b ? "opaque_iterator" : "iterator"
                            } else if (b.constructor && b.constructor.name === "RegExp") return "regexp";
                            else {
                                var s = Object.prototype.toString.call(b);
                                if (s === "[object Date]") return "date";
                                else if (s === "[object HTMLAllCollection]") return "html_all_collection"
                            }
                            if (!eW(b)) return "class_instance";
                            return "object";
                        case "string":
                            return "string";
                        case "symbol":
                            return "symbol";
                        case "undefined":
                            if (Object.prototype.toString.call(b) === "[object HTMLAllCollection]") return "html_all_collection";
                            return "undefined";
                        default:
                            return "unknown"
                    }
                }

                function EZ(b) {
                    var a = (0, Q4.typeOf)(b);
                    switch (a) {
                        case Q4.ContextConsumer:
                            return "ContextConsumer";
                        case Q4.ContextProvider:
                            return "ContextProvider";
                        case Q4.ForwardRef:
                            return "ForwardRef";
                        case Q4.Fragment:
                            return "Fragment";
                        case Q4.Lazy:
                            return "Lazy";
                        case Q4.Memo:
                            return "Memo";
                        case Q4.Portal:
                            return "Portal";
                        case Q4.Profiler:
                            return "Profiler";
                        case Q4.StrictMode:
                            return "StrictMode";
                        case Q4.Suspense:
                            return "Suspense";
                        case I0:
                            return "SuspenseList";
                        case X5:
                            return "TracingMarker";
                        default:
                            var c = b.type;
                            if (typeof c === "string") return c;
                            else if (typeof c === "function") return b6(c, "Anonymous");
                            else if (c != null) return "NotImplementedInDevtools";
                            else return "Element"
                    }
                }
                var sZ = 50;

                function l8(b) {
                    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : sZ;
                    if (b.length > a) return b.slice(0, a) + "…";
                    else return b
                }

                function u4(b, a) {
                    if (b != null && rW.call(b, V5.type)) return a ? b[V5.preview_long] : b[V5.preview_short];
                    var c = f6(b);
                    switch (c) {
                        case "html_element":
                            return "<".concat(l8(b.tagName.toLowerCase()), " />");
                        case "function":
                            return l8("ƒ ".concat(typeof b.name === "function" ? "" : b.name, "() {}"));
                        case "string":
                            return '"'.concat(b, '"');
                        case "bigint":
                            return l8(b.toString() + "n");
                        case "regexp":
                            return l8(b.toString());
                        case "symbol":
                            return l8(b.toString());
                        case "react_element":
                            return "<".concat(l8(EZ(b) || "Unknown"), " />");
                        case "array_buffer":
                            return "ArrayBuffer(".concat(b.byteLength, ")");
                        case "data_view":
                            return "DataView(".concat(b.buffer.byteLength, ")");
                        case "array":
                            if (a) {
                                var s = "";
                                for (var r = 0; r < b.length; r++) {
                                    if (r > 0) s += ", ";
                                    if (s += u4(b[r], !1), s.length > sZ) break
                                }
                                return "[".concat(l8(s), "]")
                            } else {
                                var bA = rW.call(b, V5.size) ? b[V5.size] : b.length;
                                return "Array(".concat(bA, ")")
                            }
                        case "typed_array":
                            var Y1 = "".concat(b.constructor.name, "(").concat(b.length, ")");
                            if (a) {
                                var Q1 = "";
                                for (var uA = 0; uA < b.length; uA++) {
                                    if (uA > 0) Q1 += ", ";
                                    if (Q1 += b[uA], Q1.length > sZ) break
                                }
                                return "".concat(Y1, " [").concat(l8(Q1), "]")
                            } else return Y1;
                        case "iterator":
                            var z1 = b.constructor.name;
                            if (a) {
                                var _1 = Array.from(b),
                                    i1 = "";
                                for (var a1 = 0; a1 < _1.length; a1++) {
                                    var QQ = _1[a1];
                                    if (a1 > 0) i1 += ", ";
                                    if (iZ(QQ)) {
                                        var MQ = u4(QQ[0], !0),
                                            N2 = u4(QQ[1], !1);
                                        i1 += "".concat(MQ, " => ").concat(N2)
                                    } else i1 += u4(QQ, !1);
                                    if (i1.length > sZ) break
                                }
                                return "".concat(z1, "(").concat(b.size, ") {").concat(l8(i1), "}")
                            } else return "".concat(z1, "(").concat(b.size, ")");
                        case "opaque_iterator":
                            return b[Symbol.toStringTag];
                        case "date":
                            return b.toString();
                        case "class_instance":
                            return b.constructor.name;
                        case "object":
                            if (a) {
                                var gQ = Array.from(aZ(b)).sort(eP),
                                    I9 = "";
                                for (var m4 = 0; m4 < gQ.length; m4++) {
                                    var x5 = gQ[m4];
                                    if (m4 > 0) I9 += ", ";
                                    if (I9 += "".concat(x5.toString(), ": ").concat(u4(b[x5], !1)), I9.length > sZ) break
                                }
                                return "{".concat(l8(I9), "}")
                            } else return "{…}";
                        case "boolean":
                        case "number":
                        case "infinity":
                        case "nan":
                        case "null":
                        case "undefined":
                            return b;
                        default:
                            try {
                                return l8(String(b))
                            } catch (SB) {
                                return "unserializable"
                            }
                    }
                }
                var eW = function(a) {
                    var c = Object.getPrototypeOf(a);
                    if (!c) return !0;
                    var s = Object.getPrototypeOf(c);
                    return !s
                };

                function IV(b, a) {
                    var c = Object.keys(b);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(b);
                        if (a) s = s.filter(function(r) {
                            return Object.getOwnPropertyDescriptor(b, r).enumerable
                        });
                        c.push.apply(c, s)
                    }
                    return c
                }

                function XF(b) {
                    for (var a = 1; a < arguments.length; a++) {
                        var c = arguments[a] != null ? arguments[a] : {};
                        if (a % 2) IV(Object(c), !0).forEach(function(s) {
                            FF(b, s, c[s])
                        });
                        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(b, Object.getOwnPropertyDescriptors(c));
                        else IV(Object(c)).forEach(function(s) {
                            Object.defineProperty(b, s, Object.getOwnPropertyDescriptor(c, s))
                        })
                    }
                    return b
                }

                function FF(b, a, c) {
                    if (a in b) Object.defineProperty(b, a, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    });
                    else b[a] = c;
                    return b
                }
                var V5 = {
                        inspectable: Symbol("inspectable"),
                        inspected: Symbol("inspected"),
                        name: Symbol("name"),
                        preview_long: Symbol("preview_long"),
                        preview_short: Symbol("preview_short"),
                        readonly: Symbol("readonly"),
                        size: Symbol("size"),
                        type: Symbol("type"),
                        unserializable: Symbol("unserializable")
                    },
                    Vx = 2;

                function TK(b, a, c, s, r) {
                    s.push(r);
                    var bA = {
                        inspectable: a,
                        type: b,
                        preview_long: u4(c, !0),
                        preview_short: u4(c, !1),
                        name: !c.constructor || c.constructor.name === "Object" ? "" : c.constructor.name
                    };
                    if (b === "array" || b === "typed_array") bA.size = c.length;
                    else if (b === "object") bA.size = Object.keys(c).length;
                    if (b === "iterator" || b === "typed_array") bA.readonly = !0;
                    return bA
                }

                function eD(b, a, c, s, r) {
                    var bA = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0,
                        Y1 = f6(b),
                        Q1;
                    switch (Y1) {
                        case "html_element":
                            return a.push(s), {
                                inspectable: !1,
                                preview_short: u4(b, !1),
                                preview_long: u4(b, !0),
                                name: b.tagName,
                                type: Y1
                            };
                        case "function":
                            return a.push(s), {
                                inspectable: !1,
                                preview_short: u4(b, !1),
                                preview_long: u4(b, !0),
                                name: typeof b.name === "function" || !b.name ? "function" : b.name,
                                type: Y1
                            };
                        case "string":
                            if (Q1 = r(s), Q1) return b;
                            else return b.length <= 500 ? b : b.slice(0, 500) + "...";
                        case "bigint":
                            return a.push(s), {
                                inspectable: !1,
                                preview_short: u4(b, !1),
                                preview_long: u4(b, !0),
                                name: b.toString(),
                                type: Y1
                            };
                        case "symbol":
                            return a.push(s), {
                                inspectable: !1,
                                preview_short: u4(b, !1),
                                preview_long: u4(b, !0),
                                name: b.toString(),
                                type: Y1
                            };
                        case "react_element":
                            return a.push(s), {
                                inspectable: !1,
                                preview_short: u4(b, !1),
                                preview_long: u4(b, !0),
                                name: EZ(b) || "Unknown",
                                type: Y1
                            };
                        case "array_buffer":
                        case "data_view":
                            return a.push(s), {
                                inspectable: !1,
                                preview_short: u4(b, !1),
                                preview_long: u4(b, !0),
                                name: Y1 === "data_view" ? "DataView" : "ArrayBuffer",
                                size: b.byteLength,
                                type: Y1
                            };
                        case "array":
                            if (Q1 = r(s), bA >= Vx && !Q1) return TK(Y1, !0, b, a, s);
                            return b.map(function(i1, a1) {
                                return eD(i1, a, c, s.concat([a1]), r, Q1 ? 1 : bA + 1)
                            });
                        case "html_all_collection":
                        case "typed_array":
                        case "iterator":
                            if (Q1 = r(s), bA >= Vx && !Q1) return TK(Y1, !0, b, a, s);
                            else {
                                var uA = {
                                    unserializable: !0,
                                    type: Y1,
                                    readonly: !0,
                                    size: Y1 === "typed_array" ? b.length : void 0,
                                    preview_short: u4(b, !1),
                                    preview_long: u4(b, !0),
                                    name: !b.constructor || b.constructor.name === "Object" ? "" : b.constructor.name
                                };
                                return Array.from(b).forEach(function(i1, a1) {
                                    return uA[a1] = eD(i1, a, c, s.concat([a1]), r, Q1 ? 1 : bA + 1)
                                }), c.push(s), uA
                            }
                        case "opaque_iterator":
                            return a.push(s), {
                                inspectable: !1,
                                preview_short: u4(b, !1),
                                preview_long: u4(b, !0),
                                name: b[Symbol.toStringTag],
                                type: Y1
                            };
                        case "date":
                            return a.push(s), {
                                inspectable: !1,
                                preview_short: u4(b, !1),
                                preview_long: u4(b, !0),
                                name: b.toString(),
                                type: Y1
                            };
                        case "regexp":
                            return a.push(s), {
                                inspectable: !1,
                                preview_short: u4(b, !1),
                                preview_long: u4(b, !0),
                                name: b.toString(),
                                type: Y1
                            };
                        case "object":
                            if (Q1 = r(s), bA >= Vx && !Q1) return TK(Y1, !0, b, a, s);
                            else {
                                var z1 = {};
                                return aZ(b).forEach(function(i1) {
                                    var a1 = i1.toString();
                                    z1[a1] = eD(b[i1], a, c, s.concat([a1]), r, Q1 ? 1 : bA + 1)
                                }), z1
                            }
                        case "class_instance":
                            if (Q1 = r(s), bA >= Vx && !Q1) return TK(Y1, !0, b, a, s);
                            var _1 = {
                                unserializable: !0,
                                type: Y1,
                                readonly: !0,
                                preview_short: u4(b, !1),
                                preview_long: u4(b, !0),
                                name: b.constructor.name
                            };
                            return aZ(b).forEach(function(i1) {
                                var a1 = i1.toString();
                                _1[a1] = eD(b[i1], a, c, s.concat([a1]), r, Q1 ? 1 : bA + 1)
                            }), c.push(s), _1;
                        case "infinity":
                        case "nan":
                        case "undefined":
                            return a.push(s), {
                                type: Y1
                            };
                        default:
                            return b
                    }
                }

                function mO(b, a, c, s) {
                    var r = getInObject(b, c);
                    if (r != null) {
                        if (!r[V5.unserializable]) delete r[V5.inspectable], delete r[V5.inspected], delete r[V5.name], delete r[V5.preview_long], delete r[V5.preview_short], delete r[V5.readonly], delete r[V5.size], delete r[V5.type]
                    }
                    if (s !== null && a.unserializable.length > 0) {
                        var bA = a.unserializable[0],
                            Y1 = bA.length === c.length;
                        for (var Q1 = 0; Q1 < c.length; Q1++)
                            if (c[Q1] !== bA[Q1]) {
                                Y1 = !1;
                                break
                            } if (Y1) Fz(s, s)
                    }
                    setInObject(b, c, s)
                }

                function NFA(b, a, c) {
                    return a.forEach(function(s) {
                        var r = s.length,
                            bA = s[r - 1],
                            Y1 = getInObject(b, s.slice(0, r - 1));
                        if (!Y1 || !Y1.hasOwnProperty(bA)) return;
                        var Q1 = Y1[bA];
                        if (!Q1) return;
                        else if (Q1.type === "infinity") Y1[bA] = 1 / 0;
                        else if (Q1.type === "nan") Y1[bA] = NaN;
                        else if (Q1.type === "undefined") Y1[bA] = void 0;
                        else {
                            var uA = {};
                            uA[V5.inspectable] = !!Q1.inspectable, uA[V5.inspected] = !1, uA[V5.name] = Q1.name, uA[V5.preview_long] = Q1.preview_long, uA[V5.preview_short] = Q1.preview_short, uA[V5.size] = Q1.size, uA[V5.readonly] = !!Q1.readonly, uA[V5.type] = Q1.type, Y1[bA] = uA
                        }
                    }), c.forEach(function(s) {
                        var r = s.length,
                            bA = s[r - 1],
                            Y1 = getInObject(b, s.slice(0, r - 1));
                        if (!Y1 || !Y1.hasOwnProperty(bA)) return;
                        var Q1 = Y1[bA],
                            uA = XF({}, Q1);
                        Fz(uA, Q1), Y1[bA] = uA
                    }), b
                }

                function Fz(b, a) {
                    var c;
                    Object.defineProperties(b, (c = {}, FF(c, V5.inspected, {
                        configurable: !0,
                        enumerable: !1,
                        value: !!a.inspected
                    }), FF(c, V5.name, {
                        configurable: !0,
                        enumerable: !1,
                        value: a.name
                    }), FF(c, V5.preview_long, {
                        configurable: !0,
                        enumerable: !1,
                        value: a.preview_long
                    }), FF(c, V5.preview_short, {
                        configurable: !0,
                        enumerable: !1,
                        value: a.preview_short
                    }), FF(c, V5.size, {
                        configurable: !0,
                        enumerable: !1,
                        value: a.size
                    }), FF(c, V5.readonly, {
                        configurable: !0,
                        enumerable: !1,
                        value: !!a.readonly
                    }), FF(c, V5.type, {
                        configurable: !0,
                        enumerable: !1,
                        value: a.type
                    }), FF(c, V5.unserializable, {
                        configurable: !0,
                        enumerable: !1,
                        value: !!a.unserializable
                    }), c)), delete b.inspected, delete b.name, delete b.preview_long, delete b.preview_short, delete b.size, delete b.readonly, delete b.type, delete b.unserializable
                }
                var Vz = Array.isArray;

                function Kx(b) {
                    return Vz(b)
                }
                let AX = Kx;

                function XN(b) {
                    return Kz(b) || AH(b) || Dx(b) || dQA()
                }

                function dQA() {
                    throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                }

                function Dx(b, a) {
                    if (!b) return;
                    if (typeof b === "string") return QJ(b, a);
                    var c = Object.prototype.toString.call(b).slice(8, -1);
                    if (c === "Object" && b.constructor) c = b.constructor.name;
                    if (c === "Map" || c === "Set") return Array.from(b);
                    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return QJ(b, a)
                }

                function AH(b) {
                    if (typeof Symbol < "u" && Symbol.iterator in Object(b)) return Array.from(b)
                }

                function Kz(b) {
                    if (Array.isArray(b)) return QJ(b)
                }

                function QJ(b, a) {
                    if (a == null || a > b.length) a = b.length;
                    for (var c = 0, s = Array(a); c < a; c++) s[c] = b[c];
                    return s
                }

                function VF(b) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") VF = function(c) {
                        return typeof c
                    };
                    else VF = function(c) {
                        return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
                    };
                    return VF(b)
                }

                function sg(b, a) {
                    var c = Object.keys(b);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(b);
                        if (a) s = s.filter(function(r) {
                            return Object.getOwnPropertyDescriptor(b, r).enumerable
                        });
                        c.push.apply(c, s)
                    }
                    return c
                }

                function FN(b) {
                    for (var a = 1; a < arguments.length; a++) {
                        var c = arguments[a] != null ? arguments[a] : {};
                        if (a % 2) sg(Object(c), !0).forEach(function(s) {
                            cQA(b, s, c[s])
                        });
                        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(b, Object.getOwnPropertyDescriptors(c));
                        else sg(Object(c)).forEach(function(s) {
                            Object.defineProperty(b, s, Object.getOwnPropertyDescriptor(c, s))
                        })
                    }
                    return b
                }

                function cQA(b, a, c) {
                    if (a in b) Object.defineProperty(b, a, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    });
                    else b[a] = c;
                    return b
                }
                var Ra = "999.9.9";

                function cG(b) {
                    if (b == null || b === "") return !1;
                    return SC(b, Ra)
                }

                function BJ(b, a) {
                    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                    if (b !== null) {
                        var s = [],
                            r = [],
                            bA = eD(b, s, r, c, a);
                        return {
                            data: bA,
                            cleaned: s,
                            unserializable: r
                        }
                    } else return null
                }

                function d1(b, a) {
                    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
                        s = a[c],
                        r = AX(b) ? b.slice() : FN({}, b);
                    if (c + 1 === a.length)
                        if (AX(r)) r.splice(s, 1);
                        else delete r[s];
                    else r[s] = d1(b[s], a, c + 1);
                    return r
                }

                function P0(b, a, c) {
                    var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                        r = a[s],
                        bA = AX(b) ? b.slice() : FN({}, b);
                    if (s + 1 === a.length) {
                        var Y1 = c[s];
                        if (bA[Y1] = bA[r], AX(bA)) bA.splice(r, 1);
                        else delete bA[r]
                    } else bA[r] = P0(b[r], a, c, s + 1);
                    return bA
                }

                function U0(b, a, c) {
                    var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
                    if (s >= a.length) return c;
                    var r = a[s],
                        bA = AX(b) ? b.slice() : FN({}, b);
                    return bA[r] = U0(b[r], a, c, s + 1), bA
                }

                function jB(b) {
                    var a = null,
                        c = null,
                        s = b.current;
                    if (s != null) {
                        var r = s.stateNode;
                        if (r != null) a = r.effectDuration != null ? r.effectDuration : null, c = r.passiveEffectDuration != null ? r.passiveEffectDuration : null
                    }
                    return {
                        effectDuration: a,
                        passiveEffectDuration: c
                    }
                }

                function $9(b) {
                    if (b === void 0) return "undefined";
                    var a = new Set;
                    return JSON.stringify(b, function(c, s) {
                        if (VF(s) === "object" && s !== null) {
                            if (a.has(s)) return;
                            a.add(s)
                        }
                        if (typeof s === "bigint") return s.toString() + "n";
                        return s
                    }, 2)
                }

                function G9(b, a) {
                    if (b === void 0 || b === null || b.length === 0 || typeof b[0] === "string" && b[0].match(/([^%]|^)(%c)/g) || a === void 0) return b;
                    var c = /([^%]|^)((%%)*)(%([oOdisf]))/g;
                    if (typeof b[0] === "string" && b[0].match(c)) return ["%c".concat(b[0]), a].concat(XN(b.slice(1)));
                    else {
                        var s = b.reduce(function(r, bA, Y1) {
                            if (Y1 > 0) r += " ";
                            switch (VF(bA)) {
                                case "string":
                                case "boolean":
                                case "symbol":
                                    return r += "%s";
                                case "number":
                                    var Q1 = Number.isInteger(bA) ? "%i" : "%f";
                                    return r += Q1;
                                default:
                                    return r += "%o"
                            }
                        }, "%c");