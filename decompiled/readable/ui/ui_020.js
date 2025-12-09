/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.110Z
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 20/53
 * Lines: 171715 - 173214 (1500 lines)
 * Original file: cli.js
 */

                                            else l1 += String.fromCharCode(0), l1 += S1;
                                            S1 = c1 + 1
                                        }
                                    } else {
                                        l1 = Array(mA);
                                        for (P1 = 0; P1 < mA; ++P1) l1[P1] = String.fromCharCode(E[E1 + P1]);
                                        l1 = l1.join("")
                                    }
                                return V9(xA), l1
                            },
                            toWireType: function(xA, mA) {
                                mA instanceof ArrayBuffer && (mA = new Uint8Array(mA));
                                var E1, S1 = typeof mA == "string";
                                if (S1 || mA instanceof Uint8Array || mA instanceof Uint8ClampedArray || mA instanceof Int8Array || WA("Cannot pass non-string to std::string"), jA && S1) {
                                    var P1 = 0;
                                    for (E1 = 0; E1 < mA.length; ++E1) {
                                        var c1 = mA.charCodeAt(E1);
                                        127 >= c1 ? P1++ : 2047 >= c1 ? P1 += 2 : 55296 <= c1 && 57343 >= c1 ? (P1 += 4, ++E1) : P1 += 3
                                    }
                                    E1 = P1
                                } else E1 = mA.length;
                                if (P1 = E3(4 + E1 + 1), c1 = P1 + 4, q[P1 >> 2] = E1, jA && S1) {
                                    if (S1 = c1, c1 = E1 + 1, E1 = E, 0 < c1) {
                                        c1 = S1 + c1 - 1;
                                        for (var l1 = 0; l1 < mA.length; ++l1) {
                                            var I0 = mA.charCodeAt(l1);
                                            if (55296 <= I0 && 57343 >= I0) {
                                                var e0 = mA.charCodeAt(++l1);
                                                I0 = 65536 + ((I0 & 1023) << 10) | e0 & 1023
                                            }
                                            if (127 >= I0) {
                                                if (S1 >= c1) break;
                                                E1[S1++] = I0
                                            } else {
                                                if (2047 >= I0) {
                                                    if (S1 + 1 >= c1) break;
                                                    E1[S1++] = 192 | I0 >> 6
                                                } else {
                                                    if (65535 >= I0) {
                                                        if (S1 + 2 >= c1) break;
                                                        E1[S1++] = 224 | I0 >> 12
                                                    } else {
                                                        if (S1 + 3 >= c1) break;
                                                        E1[S1++] = 240 | I0 >> 18, E1[S1++] = 128 | I0 >> 12 & 63
                                                    }
                                                    E1[S1++] = 128 | I0 >> 6 & 63
                                                }
                                                E1[S1++] = 128 | I0 & 63
                                            }
                                        }
                                        E1[S1] = 0
                                    }
                                } else if (S1)
                                    for (S1 = 0; S1 < E1; ++S1) l1 = mA.charCodeAt(S1), 255 < l1 && (V9(c1), WA("String has UTF-16 code units that do not fit in 8 bits")), E[c1 + S1] = l1;
                                else
                                    for (S1 = 0; S1 < E1; ++S1) E[c1 + S1] = mA[S1];
                                return xA !== null && xA.push(V9, P1), P1
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: p0,
                            V: function(xA) {
                                V9(xA)
                            }
                        })
                    },
                    i: function(YA, ZA, jA) {
                        if (jA = TA(jA), ZA === 2) var xA = C6,
                            mA = y9,
                            E1 = A6,
                            S1 = () => w,
                            P1 = 1;
                        else ZA === 4 && (xA = v6, mA = w8, E1 = i9, S1 = () => q, P1 = 2);
                        IQ(YA, {
                            name: jA,
                            fromWireType: function(c1) {
                                for (var l1 = q[c1 >> 2], I0 = S1(), e0, dQ = c1 + 4, iB = 0; iB <= l1; ++iB) {
                                    var EB = c1 + 4 + iB * ZA;
                                    if (iB == l1 || I0[EB >> P1] == 0) dQ = xA(dQ, EB - dQ), e0 === void 0 ? e0 = dQ : (e0 += String.fromCharCode(0), e0 += dQ), dQ = EB + ZA
                                }
                                return V9(c1), e0
                            },
                            toWireType: function(c1, l1) {
                                typeof l1 != "string" && WA("Cannot pass non-string to C++ string type " + jA);
                                var I0 = E1(l1),
                                    e0 = E3(4 + I0 + ZA);
                                return q[e0 >> 2] = I0 >> P1, mA(l1, e0 + 4, I0 + ZA), c1 !== null && c1.push(V9, e0), e0
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: p0,
                            V: function(c1) {
                                V9(c1)
                            }
                        })
                    },
                    k: function(YA, ZA, jA, xA, mA, E1) {
                        J0[YA] = {
                            name: TA(ZA),
                            fa: U1(jA, xA),
                            W: U1(mA, E1),
                            ia: []
                        }
                    },
                    h: function(YA, ZA, jA, xA, mA, E1, S1, P1, c1, l1) {
                        J0[YA].ia.push({
                            oa: TA(ZA),
                            ta: jA,
                            ra: U1(xA, mA),
                            sa: E1,
                            za: S1,
                            ya: U1(P1, c1),
                            Aa: l1
                        })
                    },
                    C: function(YA, ZA) {
                        ZA = TA(ZA), IQ(YA, {
                            va: !0,
                            name: ZA,
                            argPackAdvance: 0,
                            fromWireType: function() {},
                            toWireType: function() {}
                        })
                    },
                    s: function(YA, ZA, jA, xA, mA) {
                        YA = n7[YA], ZA = XA(ZA), jA = $4(jA);

var E1 = [];
                        return q[xA >> 2] = zA(E1), YA(ZA, jA, E1, mA)
                    },
                    t: function(YA, ZA, jA, xA) {
                        YA = n7[YA], ZA = XA(ZA), jA = $4(jA), YA(ZA, jA, null, xA)
                    },
                    g: O0,
                    m: function(YA, ZA) {
                        var jA = k5(YA, ZA),
                            xA = jA[0];
                        ZA = xA.name + "_$" + jA.slice(1).map(function(S1) {
                            return S1.name
                        }).join("_") + "$";
                        var mA = g9[ZA];
                        if (mA !== void 0) return mA;
                        var E1 = Array(YA - 1);
                        return mA = B6((S1, P1, c1, l1) => {
                            for (var I0 = 0, e0 = 0; e0 < YA - 1; ++e0) E1[e0] = jA[e0 + 1].readValueFromPointer(l1 + I0), I0 += jA[e0 + 1].argPackAdvance;
                            S1 = S1[P1].apply(S1, E1);
                            for (e0 = 0; e0 < YA - 1; ++e0) jA[e0 + 1].ma && jA[e0 + 1].ma(E1[e0]);
                            if (!xA.va) return xA.toWireType(c1, S1)
                        }), g9[ZA] = mA
                    },
                    D: function(YA) {
                        4 < YA && (DA[YA].ga += 1)
                    },
                    r: function(YA) {
                        var ZA = XA(YA);
                        s1(ZA), O0(YA)
                    },
                    c: function() {
                        QA("")
                    },
                    x: function(YA, ZA, jA) {
                        E.copyWithin(YA, ZA, ZA + jA)
                    },
                    w: function(YA) {
                        var ZA = E.length;
                        if (YA >>>= 0, 2147483648 < YA) return !1;
                        for (var jA = 1; 4 >= jA; jA *= 2) {
                            var xA = ZA * (1 + 0.2 / jA);
                            xA = Math.min(xA, YA + 100663296);
                            var mA = Math;
                            xA = Math.max(YA, xA), mA = mA.min.call(mA, 2147483648, xA + (65536 - xA % 65536) % 65536);
                            A: {
                                try {
                                    V.grow(mA - H.byteLength + 65535 >>> 16), y();
                                    var E1 = 1;
                                    break A
                                } catch (S1) {}
                                E1 = void 0
                            }
                            if (E1) return !0
                        }
                        return !1
                    },
                    z: function() {
                        return 52
                    },
                    u: function() {
                        return 70
                    },
                    y: function(YA, ZA, jA, xA) {
                        for (var mA = 0, E1 = 0; E1 < jA; E1++) {
                            var S1 = q[ZA >> 2],
                                P1 = q[ZA + 4 >> 2];
                            ZA += 8;
                            for (var c1 = 0; c1 < P1; c1++) {
                                var l1 = E[S1 + c1],
                                    I0 = g4[YA];
                                l1 === 0 || l1 === 10 ? ((YA === 1 ? J : W)(D(I0, 0)), I0.length = 0) : I0.push(l1)
                            }
                            mA += P1
                        }
                        return q[xA >> 2] = mA, 0
                    }
                };
            (function() {
                function YA(mA) {
                    B.asm = mA.exports, V = B.asm.E, y(), v = B.asm.J, p.unshift(B.asm.F), l--, B.monitorRunDependencies && B.monitorRunDependencies(l), l == 0 && (k !== null && (clearInterval(k), k = null), d && (mA = d, d = null, mA()))
                }

function ZA(mA) {
                    YA(mA.instance)
                }

function jA(mA) {
                    return SA().then(function(E1) {
                        return WebAssembly.instantiate(E1, xA)
                    }).then(function(E1) {
                        return E1
                    }).then(mA, function(E1) {
                        W("failed to asynchronously prepare wasm: " + E1), QA(E1)
                    })
                }

var xA = {
                    a: u9
                };
                if (l++, B.monitorRunDependencies && B.monitorRunDependencies(l), B.instantiateWasm) try {
                    return B.instantiateWasm(xA, YA)
                } catch (mA) {
                    W("Module.instantiateWasm callback failed with error: " + mA), Z(mA)
                }
                return function() {
                    return X || typeof WebAssembly.instantiateStreaming != "function" || IA(HA) || typeof fetch != "function" ? jA(ZA) : fetch(HA, {
                        credentials: "same-origin"
                    }).then(function(mA) {
                        return WebAssembly.instantiateStreaming(mA, xA).then(ZA, function(E1) {
                            return W("wasm streaming compile failed: " + E1), W("falling back to ArrayBuffer instantiation"), jA(ZA)
                        })
                    })
                }().catch(Z), {}
            })(), B.___wasm_call_ctors = function() {
                return (B.___wasm_call_ctors = B.asm.F).apply(null, arguments)
            };
            var w4 = B.___getTypeName = function() {
                return (w4 = B.___getTypeName = B.asm.G).apply(null, arguments)
            };
            B.__embind_initialize_bindings = function() {
                return (B.__embind_initialize_bindings = B.asm.H).apply(null, arguments)
            };
            var E3 = B._malloc = function() {
                    return (E3 = B._malloc = B.asm.I).apply(null, arguments)
                },
                V9 = B._free = function() {
                    return (V9 = B._free = B.asm.K).apply(null, arguments)
                };
            B.dynCall_jiji = function() {
                return (B.dynCall_jiji = B.asm.L).apply(null, arguments)
            };
            var Q4;
            d = function YA() {
                Q4 || dA(), Q4 || (d = YA)
            };

function dA() {
                function YA() {
                    if (!Q4 && (Q4 = !0, B.calledRun = !0, !K)) {
                        if (sA(p), G(B), B.onRuntimeInitialized) B.onRuntimeInitialized();
                        if (B.postRun)
                            for (typeof B.postRun == "function" && (B.postRun = [B.postRun]); B.postRun.length;) {
                                var ZA = B.postRun.shift();
                                u.unshift(ZA)
                            }
                        sA(u)
                    }
                }
                if (!(0 < l)) {
                    if (B.preRun)
                        for (typeof B.preRun == "function" && (B.preRun = [B.preRun]); B.preRun.length;) o();
                    sA(x), 0 < l || (B.setStatus ? (B.setStatus("Running..."), setTimeout(function() {
                        setTimeout(function() {
                            B.setStatus("")
                        }, 1), YA()
                    }, 1)) : YA())
                }
            }
            if (B.preInit)
                for (typeof B.preInit == "function" && (B.preInit = [B.preInit]); 0 < B.preInit.length;) B.preInit.pop()();
            return dA(), Q.ready
        }
    })(), YZB = fQ6
});
var bV, WZB, XZB, Et, DT, O6, Y7A, hQ6, db, zt, nw, J7A, bf1, FZB, ff1, W7A, KT, Ut, gQ6, VZB;
var unA = L(() => {
    bV = function(A) {
        return A[A.Auto = 0] = "Auto", A[A.FlexStart = 1] = "FlexStart", A[A.Center = 2] = "Center", A[A.FlexEnd = 3] = "FlexEnd", A[A.Stretch = 4] = "Stretch", A[A.Baseline = 5] = "Baseline", A[A.SpaceBetween = 6] = "SpaceBetween", A[A.SpaceAround = 7] = "SpaceAround", A[A.SpaceEvenly = 8] = "SpaceEvenly", A
    }({}), WZB = function(A) {
        return A[A.BorderBox = 0] = "BorderBox", A[A.ContentBox = 1] = "ContentBox", A
    }({}), XZB = function(A) {
        return A[A.Width = 0] = "Width", A[A.Height = 1] = "Height", A
    }({}), Et = function(A) {
        return A[A.Inherit = 0] = "Inherit", A[A.LTR = 1] = "LTR", A[A.RTL = 2] = "RTL", A
    }({}), DT = function(A) {
        return A[A.Flex = 0] = "Flex", A[A.None = 1] = "None", A[A.Contents = 2] = "Contents", A
    }({}), O6 = function(A) {
        return A[A.Left = 0] = "Left", A[A.Top = 1] = "Top", A[A.Right = 2] = "Right", A[A.Bottom = 3] = "Bottom", A[A.Start = 4] = "Start", A[A.End = 5] = "End", A[A.Horizontal = 6] = "Horizontal", A[A.Vertical = 7] = "Vertical", A[A.All = 8] = "All", A
    }({}), Y7A = function(A) {
        return A[A.None = 0] = "None", A[A.StretchFlexBasis = 1] = "StretchFlexBasis", A[A.AbsolutePositionWithoutInsetsExcludesPadding = 2] = "AbsolutePositionWithoutInsetsExcludesPadding", A[A.AbsolutePercentAgainstInnerSize = 4] = "AbsolutePercentAgainstInnerSize", A[A.All = 2147483647] = "All", A[A.Classic = 2147483646] = "Classic", A
    }({}), hQ6 = function(A) {
        return A[A.WebFlexBasis = 0] = "WebFlexBasis", A
    }({}), db = function(A) {
        return A[A.Column = 0] = "Column", A[A.ColumnReverse = 1] = "ColumnReverse", A[A.Row = 2] = "Row", A[A.RowReverse = 3] = "RowReverse", A
    }({}), zt = function(A) {
        return A[A.Column = 0] = "Column", A[A.Row = 1] = "Row", A[A.All = 2] = "All", A
    }({}), nw = function(A) {
        return A[A.FlexStart = 0] = "FlexStart", A[A.Center = 1] = "Center", A[A.FlexEnd = 2] = "FlexEnd", A[A.SpaceBetween = 3] = "SpaceBetween", A[A.SpaceAround = 4] = "SpaceAround", A[A.SpaceEvenly = 5] = "SpaceEvenly", A
    }({}), J7A = function(A) {
        return A[A.Error = 0] = "Error", A[A.Warn = 1] = "Warn", A[A.Info = 2] = "Info", A[A.Debug = 3] = "Debug", A[A.Verbose = 4] = "Verbose", A[A.Fatal = 5] = "Fatal", A
    }({}), bf1 = function(A) {
        return A[A.Undefined = 0] = "Undefined", A[A.Exactly = 1] = "Exactly", A[A.AtMost = 2] = "AtMost", A
    }({}), FZB = function(A) {
        return A[A.Default = 0] = "Default", A[A.Text = 1] = "Text", A
    }({}), ff1 = function(A) {
        return A[A.Visible = 0] = "Visible", A[A.Hidden = 1] = "Hidden", A[A.Scroll = 2] = "Scroll", A
    }({}), W7A = function(A) {
        return A[A.Static = 0] = "Static", A[A.Relative = 1] = "Relative", A[A.Absolute = 2] = "Absolute", A
    }({}), KT = function(A) {
        return A[A.Undefined = 0] = "Undefined", A[A.Point = 1] = "Point", A[A.Percent = 2] = "Percent", A[A.Auto = 3] = "Auto", A
    }({}), Ut = function(A) {
        return A[A.NoWrap = 0] = "NoWrap", A[A.Wrap = 1] = "Wrap", A[A.WrapReverse = 2] = "WrapReverse", A
    }({}), gQ6 = {
        ALIGN_AUTO: bV.Auto,
        ALIGN_FLEX_START: bV.FlexStart,
        ALIGN_CENTER: bV.Center,
        ALIGN_FLEX_END: bV.FlexEnd,
        ALIGN_STRETCH: bV.Stretch,
        ALIGN_BASELINE: bV.Baseline,
        ALIGN_SPACE_BETWEEN: bV.SpaceBetween,
        ALIGN_SPACE_AROUND: bV.SpaceAround,
        ALIGN_SPACE_EVENLY: bV.SpaceEvenly,
        BOX_SIZING_BORDER_BOX: WZB.BorderBox,
        BOX_SIZING_CONTENT_BOX: WZB.ContentBox,
        DIMENSION_WIDTH: XZB.Width,
        DIMENSION_HEIGHT: XZB.Height,
        DIRECTION_INHERIT: Et.Inherit,
        DIRECTION_LTR: Et.LTR,
        DIRECTION_RTL: Et.RTL,
        DISPLAY_FLEX: DT.Flex,
        DISPLAY_NONE: DT.None,
        DISPLAY_CONTENTS: DT.Contents,
        EDGE_LEFT: O6.Left,
        EDGE_TOP: O6.Top,
        EDGE_RIGHT: O6.Right,
        EDGE_BOTTOM: O6.Bottom,
        EDGE_START: O6.Start,
        EDGE_END: O6.End,
        EDGE_HORIZONTAL: O6.Horizontal,
        EDGE_VERTICAL: O6.Vertical,
        EDGE_ALL: O6.All,
        ERRATA_NONE: Y7A.None,
        ERRATA_STRETCH_FLEX_BASIS: Y7A.StretchFlexBasis,
        ERRATA_ABSOLUTE_POSITION_WITHOUT_INSETS_EXCLUDES_PADDING: Y7A.AbsolutePositionWithoutInsetsExcludesPadding,
        ERRATA_ABSOLUTE_PERCENT_AGAINST_INNER_SIZE: Y7A.AbsolutePercentAgainstInnerSize,
        ERRATA_ALL: Y7A.All,
        ERRATA_CLASSIC: Y7A.Classic,
        EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: hQ6.WebFlexBasis,
        FLEX_DIRECTION_COLUMN: db.Column,
        FLEX_DIRECTION_COLUMN_REVERSE: db.ColumnReverse,
        FLEX_DIRECTION_ROW: db.Row,
        FLEX_DIRECTION_ROW_REVERSE: db.RowReverse,
        GUTTER_COLUMN: zt.Column,
        GUTTER_ROW: zt.Row,
        GUTTER_ALL: zt.All,
        JUSTIFY_FLEX_START: nw.FlexStart,
        JUSTIFY_CENTER: nw.Center,
        JUSTIFY_FLEX_END: nw.FlexEnd,
        JUSTIFY_SPACE_BETWEEN: nw.SpaceBetween,
        JUSTIFY_SPACE_AROUND: nw.SpaceAround,
        JUSTIFY_SPACE_EVENLY: nw.SpaceEvenly,
        LOG_LEVEL_ERROR: J7A.Error,
        LOG_LEVEL_WARN: J7A.Warn,
        LOG_LEVEL_INFO: J7A.Info,
        LOG_LEVEL_DEBUG: J7A.Debug,
        LOG_LEVEL_VERBOSE: J7A.Verbose,
        LOG_LEVEL_FATAL: J7A.Fatal,
        MEASURE_MODE_UNDEFINED: bf1.Undefined,
        MEASURE_MODE_EXACTLY: bf1.Exactly,
        MEASURE_MODE_AT_MOST: bf1.AtMost,
        NODE_TYPE_DEFAULT: FZB.Default,
        NODE_TYPE_TEXT: FZB.Text,
        OVERFLOW_VISIBLE: ff1.Visible,
        OVERFLOW_HIDDEN: ff1.Hidden,
        OVERFLOW_SCROLL: ff1.Scroll,
        POSITION_TYPE_STATIC: W7A.Static,
        POSITION_TYPE_RELATIVE: W7A.Relative,
        POSITION_TYPE_ABSOLUTE: W7A.Absolute,
        UNIT_UNDEFINED: KT.Undefined,
        UNIT_POINT: KT.Point,
        UNIT_PERCENT: KT.Percent,
        UNIT_AUTO: KT.Auto,
        WRAP_NO_WRAP: Ut.NoWrap,
        WRAP_WRAP: Ut.Wrap,
        WRAP_WRAP_REVERSE: Ut.WrapReverse
    }, VZB = gQ6
});

function hf1(A) {
    function Q(Z, I, Y) {
        let J = Z[I];
        Z[I] = function() {
            for (var W = arguments.length, X = Array(W), F = 0; F < W; F++) X[F] = arguments[F];
            return Y.call(this, J, ...X)
        }
    }
    for (let Z of ["setPosition", "setMargin", "setFlexBasis", "setWidth", "setHeight", "setMinWidth", "setMinHeight", "setMaxWidth", "setMaxHeight", "setPadding", "setGap"]) {
        let I = {
            [KT.Point]: A.Node.prototype[Z],
            [KT.Percent]: A.Node.prototype[`${Z}Percent`],
            [KT.Auto]: A.Node.prototype[`${Z}Auto`]
        };
        Q(A.Node.prototype, Z, function(Y) {
            for (var J = arguments.length, W = Array(J > 1 ? J - 1 : 0), X = 1; X < J; X++) W[X - 1] = arguments[X];
            let F = W.pop(),
                V, K;
            if (F === "auto") V = KT.Auto, K = void 0;
            else if (typeof F === "object") V = F.unit, K = F.valueOf();
            else if (V = typeof F === "string" && F.endsWith("%") ? KT.Percent : KT.Point, K = parseFloat(F), F !== void 0 && !Number.isNaN(F) && Number.isNaN(K)) throw Error(`Invalid value ${F} for ${Z}`);
            if (!I[V]) throw Error(`Failed to execute "${Z}": Unsupported unit '${F}'`);
            if (K !== void 0) return I[V].call(this, ...W, K);
            else return I[V].call(this, ...W)
        })
    }

function B(Z) {
        return A.MeasureCallback.implement({
            measure: function() {
                let {
                    width: I,
                    height: Y
                } = Z(...arguments);
                return {
                    width: I ?? NaN,
                    height: Y ?? NaN
                }
            }
        })
    }
    Q(A.Node.prototype, "setMeasureFunc", function(Z, I) {
        if (I) return Z.call(this, B(I));
        else return this.unsetMeasureFunc()
    });

function G(Z) {
        return A.DirtiedCallback.implement({
            dirtied: Z
        })
    }
    return Q(A.Node.prototype, "setDirtiedFunc", function(Z, I) {
        Z.call(this, G(I))
    }), Q(A.Config.prototype, "free", function() {
        A.Config.destroy(this)
    }), Q(A.Node, "create", (Z, I) => {
        return I ? A.Node.createWithConfig(I) : A.Node.createDefault()
    }), Q(A.Node.prototype, "free", function() {
        A.Node.destroy(this)
    }), Q(A.Node.prototype, "freeRecursive", function() {
        for (let Z = 0, I = this.getChildCount(); Z < I; ++Z) this.getChild(0).freeRecursive();
        this.free()
    }), Q(A.Node.prototype, "calculateLayout", function(Z) {
        let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : NaN,
            Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : NaN,
            J = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Et.LTR;
        return Z.call(this, I, Y, J)
    }), {
        Config: A.Config,
        Node: A.Node,
        ...VZB
    }
}
var KZB = L(() => {
    unA();
    unA()
});
// Async function: DZB
async function DZB() {
    return hf1(await YZB())
}
var $t = L(() => {
    JZB();
    KZB();
    unA()
});

function gf1({
    onlyFirst: A = !1
} = {}) {
    let B = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
    return new RegExp(B, A ? void 0 : "g")
}

function mY(A) {
    if (typeof A !== "string") throw TypeError(`Expected a \`string\`, got \`${typeof A}\``);
    return A.replace(uQ6, "")
}
var uQ6;
var HT = L(() => {
    uQ6 = gf1()
});

function HZB(A) {
    return A === 161 || A === 164 || A === 167 || A === 168 || A === 170 || A === 173 || A === 174 || A >= 176 && A <= 180 || A >= 182 && A <= 186 || A >= 188 && A <= 191 || A === 198 || A === 208 || A === 215 || A === 216 || A >= 222 && A <= 225 || A === 230 || A >= 232 && A <= 234 || A === 236 || A === 237 || A === 240 || A === 242 || A === 243 || A >= 247 && A <= 250 || A === 252 || A === 254 || A === 257 || A === 273 || A === 275 || A === 283 || A === 294 || A === 295 || A === 299 || A >= 305 && A <= 307 || A === 312 || A >= 319 && A <= 322 || A === 324 || A >= 328 && A <= 331 || A === 333 || A === 338 || A === 339 || A === 358 || A === 359 || A === 363 || A === 462 || A === 464 || A === 466 || A === 468 || A === 470 || A === 472 || A === 474 || A === 476 || A === 593 || A === 609 || A === 708 || A === 711 || A >= 713 && A <= 715 || A === 717 || A === 720 || A >= 728 && A <= 731 || A === 733 || A === 735 || A >= 768 && A <= 879 || A >= 913 && A <= 929 || A >= 931 && A <= 937 || A >= 945 && A <= 961 || A >= 963 && A <= 969 || A === 1025 || A >= 1040 && A <= 1103 || A === 1105 || A === 8208 || A >= 8211 && A <= 8214 || A === 8216 || A === 8217 || A === 8220 || A === 8221 || A >= 8224 && A <= 8226 || A >= 8228 && A <= 8231 || A === 8240 || A === 8242 || A === 8243 || A === 8245 || A === 8251 || A === 8254 || A === 8308 || A === 8319 || A >= 8321 && A <= 8324 || A === 8364 || A === 8451 || A === 8453 || A === 8457 || A === 8467 || A === 8470 || A === 8481 || A === 8482 || A === 8486 || A === 8491 || A === 8531 || A === 8532 || A >= 8539 && A <= 8542 || A >= 8544 && A <= 8555 || A >= 8560 && A <= 8569 || A === 8585 || A >= 8592 && A <= 8601 || A === 8632 || A === 8633 || A === 8658 || A === 8660 || A === 8679 || A === 8704 || A === 8706 || A === 8707 || A === 8711 || A === 8712 || A === 8715 || A === 8719 || A === 8721 || A === 8725 || A === 8730 || A >= 8733 && A <= 8736 || A === 8739 || A === 8741 || A >= 8743 && A <= 8748 || A === 8750 || A >= 8756 && A <= 8759 || A === 8764 || A === 8765 || A === 8776 || A === 8780 || A === 8786 || A === 8800 || A === 8801 || A >= 8804 && A <= 8807 || A === 8810 || A === 8811 || A === 8814 || A === 8815 || A === 8834 || A === 8835 || A === 8838 || A === 8839 || A === 8853 || A === 8857 || A === 8869 || A === 8895 || A === 8978 || A >= 9312 && A <= 9449 || A >= 9451 && A <= 9547 || A >= 9552 && A <= 9587 || A >= 9600 && A <= 9615 || A >= 9618 && A <= 9621 || A === 9632 || A === 9633 || A >= 9635 && A <= 9641 || A === 9650 || A === 9651 || A === 9654 || A === 9655 || A === 9660 || A === 9661 || A === 9664 || A === 9665 || A >= 9670 && A <= 9672 || A === 9675 || A >= 9678 && A <= 9681 || A >= 9698 && A <= 9701 || A === 9711 || A === 9733 || A === 9734 || A === 9737 || A === 9742 || A === 9743 || A === 9756 || A === 9758 || A === 9792 || A === 9794 || A === 9824 || A === 9825 || A >= 9827 && A <= 9829 || A >= 9831 && A <= 9834 || A === 9836 || A === 9837 || A === 9839 || A === 9886 || A === 9887 || A === 9919 || A >= 9926 && A <= 9933 || A >= 9935 && A <= 9939 || A >= 9941 && A <= 9953 || A === 9955 || A === 9960 || A === 9961 || A >= 9963 && A <= 9969 || A === 9972 || A >= 9974 && A <= 9977 || A === 9979 || A === 9980 || A === 9982 || A === 9983 || A === 10045 || A >= 10102 && A <= 10111 || A >= 11094 && A <= 11097 || A >= 12872 && A <= 12879 || A >= 57344 && A <= 63743 || A >= 65024 && A <= 65039 || A === 65533 || A >= 127232 && A <= 127242 || A >= 127248 && A <= 127277 || A >= 127280 && A <= 127337 || A >= 127344 && A <= 127373 || A === 127375 || A === 127376 || A >= 127387 && A <= 127404 || A >= 917760 && A <= 917999 || A >= 983040 && A <= 1048573 || A >= 1048576 && A <= 1114109
}

function qUA(A) {
    return A === 12288 || A >= 65281 && A <= 65376 || A >= 65504 && A <= 65510
}

function NUA(A) {
    return A >= 4352 && A <= 4447 || A === 8986 || A === 8987 || A === 9001 || A === 9002 || A >= 9193 && A <= 9196 || A === 9200 || A === 9203 || A === 9725 || A === 9726 || A === 9748 || A === 9749 || A >= 9776 && A <= 9783 || A >= 9800 && A <= 9811 || A === 9855 || A >= 9866 && A <= 9871 || A === 9875 || A === 9889 || A === 9898 || A === 9899 || A === 9917 || A === 9918 || A === 9924 || A === 9925 || A === 9934 || A === 9940 || A === 9962 || A === 9970 || A === 9971 || A === 9973 || A === 9978 || A === 9981 || A === 9989 || A === 9994 || A === 9995 || A === 10024 || A === 10060 || A === 10062 || A >= 10067 && A <= 10069 || A === 10071 || A >= 10133 && A <= 10135 || A === 10160 || A === 10175 || A === 11035 || A === 11036 || A === 11088 || A === 11093 || A >= 11904 && A <= 11929 || A >= 11931 && A <= 12019 || A >= 12032 && A <= 12245 || A >= 12272 && A <= 12287 || A >= 12289 && A <= 12350 || A >= 12353 && A <= 12438 || A >= 12441 && A <= 12543 || A >= 12549 && A <= 12591 || A >= 12593 && A <= 12686 || A >= 12688 && A <= 12773 || A >= 12783 && A <= 12830 || A >= 12832 && A <= 12871 || A >= 12880 && A <= 42124 || A >= 42128 && A <= 42182 || A >= 43360 && A <= 43388 || A >= 44032 && A <= 55203 || A >= 63744 && A <= 64255 || A >= 65040 && A <= 65049 || A >= 65072 && A <= 65106 || A >= 65108 && A <= 65126 || A >= 65128 && A <= 65131 || A >= 94176 && A <= 94180 || A >= 94192 && A <= 94198 || A >= 94208 && A <= 101589 || A >= 101631 && A <= 101662 || A >= 101760 && A <= 101874 || A >= 110576 && A <= 110579 || A >= 110581 && A <= 110587 || A === 110589 || A === 110590 || A >= 110592 && A <= 110882 || A === 110898 || A >= 110928 && A <= 110930 || A === 110933 || A >= 110948 && A <= 110951 || A >= 110960 && A <= 111355 || A >= 119552 && A <= 119638 || A >= 119648 && A <= 119670 || A === 126980 || A === 127183 || A === 127374 || A >= 127377 && A <= 127386 || A >= 127488 && A <= 127490 || A >= 127504 && A <= 127547 || A >= 127552 && A <= 127560 || A === 127568 || A === 127569 || A >= 127584 && A <= 127589 || A >= 127744 && A <= 127776 || A >= 127789 && A <= 127797 || A >= 127799 && A <= 127868 || A >= 127870 && A <= 127891 || A >= 127904 && A <= 127946 || A >= 127951 && A <= 127955 || A >= 127968 && A <= 127984 || A === 127988 || A >= 127992 && A <= 128062 || A === 128064 || A >= 128066 && A <= 128252 || A >= 128255 && A <= 128317 || A >= 128331 && A <= 128334 || A >= 128336 && A <= 128359 || A === 128378 || A === 128405 || A === 128406 || A === 128420 || A >= 128507 && A <= 128591 || A >= 128640 && A <= 128709 || A === 128716 || A >= 128720 && A <= 128722 || A >= 128725 && A <= 128728 || A >= 128732 && A <= 128735 || A === 128747 || A === 128748 || A >= 128756 && A <= 128764 || A >= 128992 && A <= 129003 || A === 129008 || A >= 129292 && A <= 129338 || A >= 129340 && A <= 129349 || A >= 129351 && A <= 129535 || A >= 129648 && A <= 129660 || A >= 129664 && A <= 129674 || A >= 129678 && A <= 129734 || A === 129736 || A >= 129741 && A <= 129756 || A >= 129759 && A <= 129770 || A >= 129775 && A <= 129784 || A >= 131072 && A <= 196605 || A >= 196608 && A <= 262141
}
var uf1 = () => {};

function mQ6(A) {
    if (!Number.isSafeInteger(A)) throw TypeError(`Expected a code point, got \`${typeof A}\`.`)
}

function wt(A, {
    ambiguousAsWide: Q = !1
} = {}) {
    if (mQ6(A), qUA(A) || NUA(A) || Q && HZB(A)) return 2;
    return 1
}
var LUA = L(() => {
    uf1();
    uf1()
});
var EZB = U((Vb7, CZB) => {
    CZB.exports = function() {
        return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g
    }
});

function zD(A) {
    if (typeof A !== "string" || A.length === 0) return 0;
    let Q = !0;
    for (let G = 0; G < A.length; G++) {
        let Z = A.charCodeAt(G);
        if (Z >= 127 || Z === 27) {
            Q = !1;
            break
        }
    }
    if (Q) {
        let G = 0;
        for (let Z = 0; Z < A.length; Z++)
            if (A.charCodeAt(Z) > 31) G++;
        return G
    }
    if (A.includes("\x1B")) {
        if (A = mY(A), A.length === 0) return 0
    }
    if (!cQ6(A)) {
        let G = 0;
        for (let Z of A) {
            let I = Z.codePointAt(0);
            if (!UZB(I)) G += wt(I, {
                ambiguousAsWide: !1
            })
        }
        return G
    }
    let B = 0;
    for (let {
            segment: G
        }
        of dQ6.segment(A)) {
        if (zZB.lastIndex = 0, zZB.test(G)) {
            B += pQ6(G);
            continue
        }
        for (let Z of G) {
            let I = Z.codePointAt(0);
            if (!UZB(I)) B += wt(I, {
                ambiguousAsWide: !1
            })
        }
    }
    return B
}

function cQ6(A) {
    for (let Q of A) {
        let B = Q.codePointAt(0);
        if (B >= 127744 && B <= 129791) return !0;
        if (B >= 9728 && B <= 10175) return !0;
        if (B >= 127462 && B <= 127487) return !0;
        if (B >= 65024 && B <= 65039) return !0;
        if (B === 8205) return !0
    }
    return !1
}

function pQ6(A) {
    let Q = A.codePointAt(0);
    if (Q >= 127462 && Q <= 127487) {
        let B = 0;
        for (let G of A) B++;
        return B === 1 ? 1 : 2
    }
    if (A.length === 2) {
        if (A.codePointAt(1) === 65039 && (Q >= 48 && Q <= 57 || Q === 35 || Q === 42)) return 1
    }
    return 2
}

function UZB(A) {
    if (A >= 32 && A < 127) return !1;
    if (A >= 160 && A < 768) return A === 173;
    if (A <= 31 || A >= 127 && A <= 159) return !0;
    if (A >= 8203 && A <= 8205 || A === 65279 || A >= 8288 && A <= 8292) return !0;
    if (A >= 65024 && A <= 65039 || A >= 917760 && A <= 917999) return !0;
    if (A >= 768 && A <= 879 || A >= 6832 && A <= 6911 || A >= 7616 && A <= 7679 || A >= 8400 && A <= 8447 || A >= 65056 && A <= 65071) return !0;
    if (A >= 2304 && A <= 3407) {
        let Q = A & 127;
        if (Q <= 3) return !0;
        if (Q >= 58 && Q <= 79) return !0;
        if (Q >= 81 && Q <= 87) return !0;
        if (Q >= 98 && Q <= 99) return !0
    }
    if (A >= 3633 && A <= 3642 || A >= 3655 && A <= 3662 || A >= 3761 && A <= 3772 || A >= 3784 && A <= 3789) return !0;
    if (A >= 1536 && A <= 1541 || A === 1757 || A === 1807 || A === 2274) return !0;
    if (A >= 55296 && A <= 57343) return !0;
    if (A >= 917504 && A <= 917631) return !0;
    return !1
}
var $ZB, dQ6, zZB;
var MUA = L(() => {
    HT();
    LUA();
    $ZB = GA(EZB(), 1), dQ6 = new Intl.Segmenter, zZB = $ZB.default()
});

function X7A(A) {
    let Q = 0;
    for (let B of A.split(`
`)) Q = Math.max(Q, zD(B));
    return Q
}
var mnA = L(() => {
    MUA()
});

function OUA(A, Q) {
    if (Q <= 0) return A.split(`
`).length;
    let B = 0;
    for (let G of A.split(`
`)) {
        let Z = zD(G);
        B += Z === 0 ? 1 : Math.ceil(Z / Q)
    }
    return B
}
var mf1 = L(() => {
    MUA()
});

function lQ6(A, Q) {
    if (A.length === 0) return {
        width: 0,
        height: 0
    };
    let B = `${Q}|${A}`,
        G = wZB[B];
    if (G) return G;
    let Z = OUA(A, Q),
        Y = {
            width: X7A(A),
            height: Z
        };
    return wZB[B] = Y, Y
}
var wZB, df1;
var qZB = L(() => {
    mnA();
    mf1();
    wZB = {};
    df1 = lQ6
});
var LZB = U((Nb7, NZB) => {
    NZB.exports = () => {
        return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g
    }
});

function SZ(A, Q = {}) {
    if (typeof A !== "string" || A.length === 0) return 0;
    let {
        ambiguousIsNarrow: B = !0,
        countAnsiEscapeCodes: G = !1
    } = Q;
    if (!G) A = mY(A);
    if (A.length === 0) return 0;
    let Z = 0,
        I = {
            ambiguousAsWide: !B
        };
    for (let {
            segment: Y
        }
        of iQ6.segment(A)) {
        let J = Y.codePointAt(0);
        if (J <= 31 || J >= 127 && J <= 159) continue;
        if (J >= 8203 && J <= 8207 || J === 65279) continue;
        if (J >= 768 && J <= 879 || J >= 6832 && J <= 6911 || J >= 7616 && J <= 7679 || J >= 8400 && J <= 8447 || J >= 65056 && J <= 65071) continue;
        if (J >= 55296 && J <= 57343) continue;
        if (J >= 65024 && J <= 65039) continue;
        if (nQ6.test(Y)) continue;
        if (MZB.default().test(Y)) {
            Z += 2;
            continue
        }
        Z += wt(J, I)
    }
    return Z
}
var MZB, iQ6, nQ6;
var F7A = L(() => {
    HT();
    LUA();
    MZB = GA(LZB(), 1), iQ6 = new Intl.Segmenter, nQ6 = /^\p{Default_Ignorable_Code_Point}$/u
});

function rQ6() {
    let A = new Map;
    for (let [Q, B] of Object.entries(eI)) {
        for (let [G, Z] of Object.entries(B)) eI[G] = {
            open: `\x1B[${Z[0]}m`,
            close: `\x1B[${Z[1]}m`
        }, B[G] = eI[G], A.set(Z[0], Z[1]);
        Object.defineProperty(eI, Q, {
            value: B,
            enumerable: !1
        })
    }
    return Object.defineProperty(eI, "codes", {
        value: A,
        enumerable: !1
    }), eI.color.close = "\x1B[39m", eI.bgColor.close = "\x1B[49m", eI.color.ansi = OZB(), eI.color.ansi256 = RZB(), eI.color.ansi16m = TZB(), eI.bgColor.ansi = OZB(10), eI.bgColor.ansi256 = RZB(10), eI.bgColor.ansi16m = TZB(10), Object.defineProperties(eI, {
        rgbToAnsi256: {
            value: (Q, B, G) => {
                if (Q === B && B === G) {
                    if (Q < 8) return 16;
                    if (Q > 248) return 231;
                    return Math.round((Q - 8) / 247 * 24) + 232
                }
                return 16 + 36 * Math.round(Q / 255 * 5) + 6 * Math.round(B / 255 * 5) + Math.round(G / 255 * 5)
            },
            enumerable: !1
        },
        hexToRgb: {
            value: (Q) => {
                let B = /[a-f\d]{6}|[a-f\d]{3}/i.exec(Q.toString(16));
                if (!B) return [0, 0, 0];
                let [G] = B;
                if (G.length === 3) G = [...G].map((I) => I + I).join("");
                let Z = Number.parseInt(G, 16);
                return [Z >> 16 & 255, Z >> 8 & 255, Z & 255]
            },
            enumerable: !1
        },
        hexToAnsi256: {
            value: (Q) => eI.rgbToAnsi256(...eI.hexToRgb(Q)),
            enumerable: !1
        },
        ansi256ToAnsi: {
            value: (Q) => {
                if (Q < 8) return 30 + Q;
                if (Q < 16) return 90 + (Q - 8);
                let B, G, Z;
                if (Q >= 232) B = ((Q - 232) * 10 + 8) / 255, G = B, Z = B;
                else {
                    Q -= 16;
                    let J = Q % 36;
                    B = Math.floor(Q / 36) / 5, G = Math.floor(J / 6) / 5, Z = J % 6 / 5
                }
                let I = Math.max(B, G, Z) * 2;
                if (I === 0) return 30;
                let Y = 30 + (Math.round(Z) << 2 | Math.round(G) << 1 | Math.round(B));
                if (I === 2) Y += 60;
                return Y
            },
            enumerable: !1
        },
        rgbToAnsi: {
            value: (Q, B, G) => eI.ansi256ToAnsi(eI.rgbToAnsi256(Q, B, G)),
            enumerable: !1
        },
        hexToAnsi: {
            value: (Q) => eI.ansi256ToAnsi(eI.hexToAnsi256(Q)),
            enumerable: !1
        }
    }), eI
}
var OZB = (A = 0) => (Q) => `\x1B[${Q+A}m`,
    RZB = (A = 0) => (Q) => `\x1B[${38+A};5;${Q}m`,
    TZB = (A = 0) => (Q, B, G) => `\x1B[${38+A};2;${Q};${B};${G}m`,
    eI, Rb7, aQ6, sQ6, Tb7, oQ6, b7;
var V7A = L(() => {
    eI = {
        modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            overline: [53, 55],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
        },
        color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            blackBright: [90, 39],
            gray: [90, 39],
            grey: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
        },
        bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgGray: [100, 49],
            bgGrey: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
        }
    }, Rb7 = Object.keys(eI.modifier), aQ6 = Object.keys(eI.color), sQ6 = Object.keys(eI.bgColor), Tb7 = [...aQ6, ...sQ6];
    oQ6 = rQ6(), b7 = oQ6
});

function K7A(A, Q, B) {
    return String(A).normalize().replaceAll(`\r
`, `
`).split(`
`).map((G) => BB6(G, Q, B)).join(`
`)
}
var cnA, tQ6 = 39,
    pf1 = "\x07",
    SZB = "[",
    eQ6 = "]",
    _ZB = "m",
    dnA, PZB = (A) => `${cnA.values().next().value}${SZB}${A}${_ZB}`,
    jZB = (A) => `${cnA.values().next().value}${dnA}${A}${pf1}`,
    AB6 = (A) => A.split(" ").map((Q) => SZ(Q)),
    cf1 = (A, Q, B) => {
        let G = [...Q],
            Z = !1,
            I = !1,
            Y = SZ(mY(A.at(-1)));
        for (let [J, W] of G.entries()) {
            let X = SZ(W);
            if (Y + X <= B) A[A.length - 1] += W;
            else A.push(W), Y = 0;
            if (cnA.has(W)) Z = !0, I = G.slice(J + 1, J + 1 + dnA.length).join("") === dnA;
            if (Z) {
                if (I) {
                    if (W === pf1) Z = !1, I = !1
                } else if (W === _ZB) Z = !1;
                continue
            }
            if (Y += X, Y === B && J < G.length - 1) A.push(""), Y = 0
        }
        if (!Y && A.at(-1).length > 0 && A.length > 1) A[A.length - 2] += A.pop()
    },
    QB6 = (A) => {
        let Q = A.split(" "),
            B = Q.length;
        while (B > 0) {
            if (SZ(Q[B - 1]) > 0) break;
            B--
        }
        if (B === Q.length) return A;
        return Q.slice(0, B).join(" ") + Q.slice(B).join("")
    },
    BB6 = (A, Q, B = {}) => {
        if (B.trim !== !1 && A.trim() === "") return "";
        let G = "",
            Z, I, Y = AB6(A),
            J = [""];
        for (let [V, K] of A.split(" ").entries()) {
            if (B.trim !== !1) J[J.length - 1] = J.at(-1).trimStart();
            let D = SZ(J.at(-1));
            if (V !== 0) {
                if (D >= Q && (B.wordWrap === !1 || B.trim === !1)) J.push(""), D = 0;
                if (D > 0 || B.trim === !1) J[J.length - 1] += " ", D++
            }
            if (B.hard && Y[V] > Q) {
                let H = Q - D,
                    C = 1 + Math.floor((Y[V] - H - 1) / Q);
                if (Math.floor((Y[V] - 1) / Q) < C) J.push("");
                cf1(J, K, Q);
                continue
            }
            if (D + Y[V] > Q && D > 0 && Y[V] > 0) {
                if (B.wordWrap === !1 && D < Q) {
                    cf1(J, K, Q);
                    continue
                }
                J.push("")
            }
            if (D + Y[V] > Q && B.wordWrap === !1) {
                cf1(J, K, Q);
                continue
            }
            J[J.length - 1] += K
        }
        if (B.trim !== !1) J = J.map((V) => QB6(V));
        let W = J.join(`
`),
            X = [...W],
            F = 0;
        for (let [V, K] of X.entries()) {
            if (G += K, cnA.has(K)) {
                let {
                    groups: H
                } = new RegExp(`(?:\\${SZB}(?<code>\\d+)m|\\${dnA}(?<uri>.*)${pf1})`).exec(W.slice(F)) || {
                    groups: {}
                };
                if (H.code !== void 0) {
                    let C = Number.parseFloat(H.code);
                    Z = C === tQ6 ? void 0 : C
                } else if (H.uri !== void 0) I = H.uri.length === 0 ? void 0 : H.uri
            }
            let D = b7.codes.get(Number(Z));
            if (X[V + 1] === `
`) {
                if (I) G += jZB("");
                if (Z && D) G += PZB(D)
            } else if (K === `
`) {
                if (Z && D) G += PZB(Z);
                if (I) G += jZB(I)
            }
            F += K.length
        }
        return G
    };
var lf1 = L(() => {
    F7A();
    HT();
    V7A();
    cnA = new Set(["\x1B", ""]), dnA = `${eQ6}8;;`
});

function if1(A) {
    if (!Number.isInteger(A)) return !1;
    return A >= 4352 && (A <= 4447 || A === 9001 || A === 9002 || 11904 <= A && A <= 12871 && A !== 12351 || 12880 <= A && A <= 19903 || 19968 <= A && A <= 42182 || 43360 <= A && A <= 43388 || 44032 <= A && A <= 55203 || 63744 <= A && A <= 64255 || 65040 <= A && A <= 65049 || 65072 <= A && A <= 65131 || 65281 <= A && A <= 65376 || 65504 <= A && A <= 65510 || 110592 <= A && A <= 110593 || 127488 <= A && A <= 127569 || 131072 <= A && A <= 262141)
}

function T_(A, Q, B) {
    let G = [...A],
        Z = [],
        I = typeof B === "number" ? B : G.length,
        Y = !1,
        J, W = 0,
        X = "";
    for (let [F, V] of G.entries()) {
        let K = !1;
        if (yZB.includes(V)) {
            let D = /\d[^m]*/.exec(A.slice(F, F + 18));
            if (J = D && D.length > 0 ? D[0] : void 0, W < I) {
                if (Y = !0, J !== void 0) Z.push(J)
            }
        } else if (Y && V === "m") Y = !1, K = !0;
        if (!Y && !K) W++;
        if (!GB6.test(V) && if1(V.codePointAt())) {
            if (W++, typeof B !== "number") I++
        }
        if (W > Q && W <= I) X += V;
        else if (W === Q && !Y && J !== void 0) X = kZB(Z);
        else if (W >= I) {
            X += kZB(Z, !0, J);
            break
        }
    }
    return X
}
var GB6, yZB, pnA = (A) => `${yZB[0]}[${A}m`,
    kZB = (A, Q, B) => {
        let G = [];
        A = [...A];
        for (let Z of A) {
            let I = Z;
            if (Z.includes(";")) Z = Z.split(";")[0][0] + "0";
            let Y = b7.codes.get(Number.parseInt(Z, 10));
            if (Y) {
                let J = A.indexOf(Y.toString());
                if (J === -1) G.push(pnA(Q ? Y : I));
                else A.splice(J, 1)
            } else if (Q) {
                G.push(pnA(0));
                break
            } else G.push(pnA(I))
        }
        if (Q) {
            if (G = G.filter((Z, I) => G.indexOf(Z) === I), B !== void 0) {
                let Z = pnA(b7.codes.get(Number.parseInt(B, 10)));
                G = G.reduce((I, Y) => Y === Z ? [Y, ...I] : [...I, Y], [])
            }
        }
        return G.join("")
    };
var xZB = L(() => {
    V7A();
    GB6 = /^[\uD800-\uDBFF][\uDC00-\uDFFF]$/, yZB = ["\x1B", ""]
});

function lnA(A, Q, B) {
    if (A.charAt(Q) === " ") return Q;
    let G = B ? 1 : -1;
    for (let Z = 0; Z <= 3; Z++) {
        let I = Q + Z * G;
        if (A.charAt(I) === " ") return I
    }
    return Q
}

function nf1(A, Q, B = {}) {
    let {
        position: G = "end",
        space: Z = !1,
        preferTruncationOnSpace: I = !1
    } = B, {
        truncationCharacter: Y = "…"
    } = B;
    if (typeof A !== "string") throw TypeError(`Expected \`input\` to be a string, got ${typeof A}`);
    if (typeof Q !== "number") throw TypeError(`Expected \`columns\` to be a number, got ${typeof Q}`);
    if (Q < 1) return "";
    if (Q === 1) return Y;
    let J = SZ(A);
    if (J <= Q) return A;
    if (G === "start") {
        if (I) {
            let W = lnA(A, J - Q + 1, !0);
            return Y + T_(A, W, J).trim()
        }
        if (Z === !0) Y += " ";
        return Y + T_(A, J - Q + SZ(Y), J)
    }
    if (G === "middle") {
        if (Z === !0) Y = ` ${Y} `;
        let W = Math.floor(Q / 2);
        if (I) {
            let X = lnA(A, W),
                F = lnA(A, J - (Q - W) + 1, !0);
            return T_(A, 0, X) + Y + T_(A, F, J).trim()
        }
        return T_(A, 0, W) + Y + T_(A, J - (Q - W) + SZ(Y), J)
    }
    if (G === "end") {
        if (I) {
            let W = lnA(A, Q - 1);
            return T_(A, 0, W) + Y
        }
        if (Z === !0) Y = ` ${Y}`;
        return T_(A, 0, Q - SZ(Y)) + Y
    }
    throw Error(`Expected \`options.position\` to be either \`start\`, \`middle\` or \`end\`, got ${G}`)
}
var vZB = L(() => {
    xZB();
    F7A()
});
var bZB, ZB6 = (A, Q, B) => {
        let G = A + String(Q) + String(B),
            Z = bZB[G];
        if (Z) return Z;
        let I = A;
        if (B === "wrap") I = K7A(A, Q, {
            trim: !1,
            hard: !0
        });
        else if (B === "wrap-trim") I = K7A(A, Q, {
            trim: !0,
            hard: !0
        });
        if (B.startsWith("truncate")) {
            let Y = "end";
            if (B === "truncate-middle") Y = "middle";
            if (B === "truncate-start") Y = "start";
            I = nf1(A, Q, {
                position: Y
            })
        }
        return bZB[G] = I, I
    },
    cb;
var inA = L(() => {
    lf1();
    vZB();
    bZB = {}, cb = ZB6
});

function nnA(A, Q = {}, B) {
    let G = [],
        Z = A.textStyles ? {
            ...Q,
            ...A.textStyles
        } : Q;
    for (let I of A.childNodes) {
        if (I === void 0) continue;
        if (I.nodeName === "#text") {
            if (I.nodeValue.length > 0) G.push({
                text: I.nodeValue,
                styles: Z,
                hyperlink: B
            })
        } else if (I.nodeName === "ink-text" || I.nodeName === "ink-virtual-text") G.push(...nnA(I, Z, B));
        else if (I.nodeName === "ink-link") {
            let Y = I.attributes.href;
            G.push(...nnA(I, Z, Y || B))
        }
    }
    return G
}

function af1(A) {
    let Q = "";
    for (let B of A.childNodes) {
        if (B === void 0) continue;
        if (B.nodeName === "#text") Q += B.nodeValue;
        else if (B.nodeName === "ink-text" || B.nodeName === "ink-virtual-text") Q += af1(B);
        else if (B.nodeName === "ink-link") Q += af1(B)
    }
    return Q
}
var fZB;
var sf1 = L(() => {
    fZB = af1
});
var rf1 = void 0,
    hZB, IB6 = () => {
        if (rf1 === void 0) throw Error("Yoga not loaded");
        return rf1
    },
    anA = (A) => {
        let Q = IB6(),
            G = {
                nodeName: A,
                style: {},
                attributes: {},
                childNodes: [],
                parentNode: void 0,
                yogaNode: A !== "ink-virtual-text" && A !== "ink-link" && A !== "ink-progress" ? Q.Node.create() : void 0
            };
        if (A === "ink-text") G.yogaNode?.setMeasureFunc(YB6.bind(null, G));
        return G
    },
    snA = (A, Q) => {
        if (Q.parentNode) RUA(Q.parentNode, Q);
        if (Q.parentNode = A, A.childNodes.push(Q), Q.yogaNode) A.yogaNode?.insertChild(Q.yogaNode, A.yogaNode.getChildCount());
        if (A.nodeName === "ink-text" || A.nodeName === "ink-virtual-text") rnA(A)
    },
    of1 = (A, Q, B) => {
        if (Q.parentNode) RUA(Q.parentNode, Q);
        Q.parentNode = A;
        let G = A.childNodes.indexOf(B);
        if (G >= 0) {
            if (A.childNodes.splice(G, 0, Q), Q.yogaNode) A.yogaNode?.insertChild(Q.yogaNode, G);
            return
        }
        if (A.childNodes.push(Q), Q.yogaNode) A.yogaNode?.insertChild(Q.yogaNode, A.yogaNode.getChildCount());
        if (A.nodeName === "ink-text" || A.nodeName === "ink-virtual-text") rnA(A)
    },
    RUA = (A, Q) => {
        if (Q.yogaNode) Q.parentNode?.yogaNode?.removeChild(Q.yogaNode);
        Q.parentNode = void 0;
        let B = A.childNodes.indexOf(Q);
        if (B >= 0) A.childNodes.splice(B, 1);
        if (A.nodeName === "ink-text" || A.nodeName === "ink-virtual-text") rnA(A)
    },
    tf1 = (A, Q, B) => {
        A.attributes[Q] = B
    },
    ef1 = (A, Q) => {
        A.style = Q
    },
    gZB = (A) => {
        let Q = {
            nodeName: "#text",
            nodeValue: A,
            yogaNode: void 0,
            parentNode: void 0,
            style: {}
        };
        return TUA(Q, A), Q
    },
    YB6 = function(A, Q) {
        let B = A.nodeName === "#text" ? A.nodeValue : fZB(A),
            G = df1(B, Q);
        if (G.width <= Q) return G;
        if (G.width >= 1 && Q > 0 && Q < 1) return G;
        let Z = A.style?.textWrap ?? "wrap",
            I = cb(B, Q, Z);
        return df1(I, Q)
    },
    uZB = (A) => {
        if (!A?.parentNode) return;
        return A.yogaNode ?? uZB(A.parentNode)
    },
    rnA = (A) => {
        uZB(A)?.markDirty()
    },
    TUA = (A, Q) => {
        if (typeof Q !== "string") Q = String(Q);
        A.nodeValue = Q, rnA(A)
    };
var onA = L(() => {
    $t();
    qZB();
    inA();
    sf1();
    o2();
    hZB = t1(async () => {
        rf1 = await DZB()
    })
});
var WB6 = (A, Q) => {
        if ("position" in Q) A.setPositionType(Q.position === "absolute" ? W7A.Absolute : W7A.Relative)
    },
    XB6 = (A, Q) => {
        if ("margin" in Q) A.setMargin(O6.All, Q.margin ?? 0);
        if ("marginX" in Q) A.setMargin(O6.Horizontal, Q.marginX ?? 0);
        if ("marginY" in Q) A.setMargin(O6.Vertical, Q.marginY ?? 0);
        if ("marginLeft" in Q) A.setMargin(O6.Start, Q.marginLeft || 0);
        if ("marginRight" in Q) A.setMargin(O6.End, Q.marginRight || 0);
        if ("marginTop" in Q) A.setMargin(O6.Top, Q.marginTop || 0);
        if ("marginBottom" in Q) A.setMargin(O6.Bottom, Q.marginBottom || 0)
    },
    FB6 = (A, Q) => {
        if ("padding" in Q) A.setPadding(O6.All, Q.padding ?? 0);
        if ("paddingX" in Q) A.setPadding(O6.Horizontal, Q.paddingX ?? 0);
        if ("paddingY" in Q) A.setPadding(O6.Vertical, Q.paddingY ?? 0);
        if ("paddingLeft" in Q) A.setPadding(O6.Left, Q.paddingLeft || 0);
        if ("paddingRight" in Q) A.setPadding(O6.Right, Q.paddingRight || 0);
        if ("paddingTop" in Q) A.setPadding(O6.Top, Q.paddingTop || 0);
        if ("paddingBottom" in Q) A.setPadding(O6.Bottom, Q.paddingBottom || 0)
    },
    VB6 = (A, Q) => {
        if ("flexGrow" in Q) A.setFlexGrow(Q.flexGrow ?? 0);
        if ("flexShrink" in Q) A.setFlexShrink(typeof Q.flexShrink === "number" ? Q.flexShrink : 1);
        if ("flexWrap" in Q) {
            if (Q.flexWrap === "nowrap") A.setFlexWrap(Ut.NoWrap);
            if (Q.flexWrap === "wrap") A.setFlexWrap(Ut.Wrap);
            if (Q.flexWrap === "wrap-reverse") A.setFlexWrap(Ut.WrapReverse)
        }
        if ("flexDirection" in Q) {
            if (Q.flexDirection === "row") A.setFlexDirection(db.Row);
            if (Q.flexDirection === "row-reverse") A.setFlexDirection(db.RowReverse);
            if (Q.flexDirection === "column") A.setFlexDirection(db.Column);
            if (Q.flexDirection === "column-reverse") A.setFlexDirection(db.ColumnReverse)
        }
        if ("flexBasis" in Q)
            if (typeof Q.flexBasis === "number") A.setFlexBasis(Q.flexBasis);
            else if (typeof Q.flexBasis === "string") A.setFlexBasisPercent(Number.parseInt(Q.flexBasis, 10));
        else A.setFlexBasis(Number.NaN);
        if ("alignItems" in Q) {
            if (Q.alignItems === "stretch" || !Q.alignItems) A.setAlignItems(bV.Stretch);
            if (Q.alignItems === "flex-start") A.setAlignItems(bV.FlexStart);
            if (Q.alignItems === "center") A.setAlignItems(bV.Center);
            if (Q.alignItems === "flex-end") A.setAlignItems(bV.FlexEnd)
        }
        if ("alignSelf" in Q) {
            if (Q.alignSelf === "auto" || !Q.alignSelf) A.setAlignSelf(bV.Auto);
            if (Q.alignSelf === "flex-start") A.setAlignSelf(bV.FlexStart);
            if (Q.alignSelf === "center") A.setAlignSelf(bV.Center);
            if (Q.alignSelf === "flex-end") A.setAlignSelf(bV.FlexEnd)
        }
        if ("justifyContent" in Q) {
            if (Q.justifyContent === "flex-start" || !Q.justifyContent) A.setJustifyContent(nw.FlexStart);
            if (Q.justifyContent === "center") A.setJustifyContent(nw.Center);
            if (Q.justifyContent === "flex-end") A.setJustifyContent(nw.FlexEnd);
            if (Q.justifyContent === "space-between") A.setJustifyContent(nw.SpaceBetween);
            if (Q.justifyContent === "space-around") A.setJustifyContent(nw.SpaceAround);
            if (Q.justifyContent === "space-evenly") A.setJustifyContent(nw.SpaceEvenly)
        }
    },
    KB6 = (A, Q) => {
        if ("width" in Q)
            if (typeof Q.width === "number") A.setWidth(Q.width);
            else if (typeof Q.width === "string") A.setWidthPercent(Number.parseInt(Q.width, 10));
        else A.setWidthAuto();
        if ("height" in Q)
            if (typeof Q.height === "number") A.setHeight(Q.height);
            else if (typeof Q.height === "string") A.setHeightPercent(Number.parseInt(Q.height, 10));
        else A.setHeightAuto();
        if ("minWidth" in Q)
            if (typeof Q.minWidth === "string") A.setMinWidthPercent(Number.parseInt(Q.minWidth, 10));
            else A.setMinWidth(Q.minWidth ?? 0);
        if ("minHeight" in Q)
            if (typeof Q.minHeight === "string") A.setMinHeightPercent(Number.parseInt(Q.minHeight, 10));
            else A.setMinHeight(Q.minHeight ?? 0);
        if ("maxWidth" in Q)
            if (typeof Q.maxWidth === "string") A.setMaxWidthPercent(Number.parseInt(Q.maxWidth, 10));
            else A.setMaxWidth(Q.maxWidth ?? 0);
        if ("maxHeight" in Q)
            if (typeof Q.maxHeight === "string") A.setMaxHeightPercent(Number.parseInt(Q.maxHeight, 10));
            else A.setMaxHeight(Q.maxHeight ?? 0)
    },
    DB6 = (A, Q) => {
        if ("display" in Q) A.setDisplay(Q.display === "flex" ? DT.Flex : DT.None)
    },
    HB6 = (A, Q) => {
        if ("borderStyle" in Q) {
            let B = Q.borderStyle ? 1 : 0;
            if (Q.borderTop !== !1) A.setBorder(O6.Top, B);
            if (Q.borderBottom !== !1) A.setBorder(O6.Bottom, B);
            if (Q.borderLeft !== !1) A.setBorder(O6.Left, B);
            if (Q.borderRight !== !1) A.setBorder(O6.Right, B)
        }
    },
    CB6 = (A, Q) => {
        if ("gap" in Q) A.setGap(zt.All, Q.gap ?? 0);
        if ("columnGap" in Q) A.setGap(zt.Column, Q.columnGap ?? 0);
        if ("rowGap" in Q) A.setGap(zt.Row, Q.rowGap ?? 0)
    },
    EB6 = (A, Q = {}) => {
        WB6(A, Q), XB6(A, Q), FB6(A, Q), VB6(A, Q), KB6(A, Q), DB6(A, Q), HB6(A, Q), CB6(A, Q)
    },
    Ah1;
var mZB = L(() => {
    $t();
    Ah1 = EB6
});
var pb = U((ob7, pZB) => {
    var dZB = ["nodebuffer", "arraybuffer", "fragments"],
        cZB = typeof Blob < "u";
    if (cZB) dZB.push("blob");
    pZB.exports = {
        BINARY_TYPES: dZB,
        EMPTY_BUFFER: Buffer.alloc(0),
        GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
        hasBlob: cZB,
        kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
        kListener: Symbol("kListener"),
        kStatusCode: Symbol("status-code"),
        kWebSocket: Symbol("websocket"),
        NOOP: () => {}
    }
});
var PUA = U((tb7, tnA) => {
    var {
        EMPTY_BUFFER: zB6
    } = pb(), Qh1 = Buffer[Symbol.species];

function UB6(A, Q) {
        if (A.length === 0) return zB6;
        if (A.length === 1) return A[0];
        let B = Buffer.allocUnsafe(Q),
            G = 0;
        for (let Z = 0; Z < A.length; Z++) {
            let I = A[Z];
            B.set(I, G), G += I.length
        }
        if (G < Q) return new Qh1(B.buffer, B.byteOffset, G);
        return B
    }

function lZB(A, Q, B, G, Z) {
        for (let I = 0; I < Z; I++) B[G + I] = A[I] ^ Q[I & 3]
    }

function iZB(A, Q) {
        for (let B = 0; B < A.length; B++) A[B] ^= Q[B & 3]
    }

    function $B6(A) {
        if (A.length === A.buffer.byteLength) return A.buffer;
        return A.buffer.slice(A.byteOffset, A.byteOffset + A.length)
    }

function Bh1(A) {
        if (Bh1.readOnly = !0, Buffer.isBuffer(A)) return A;
        let Q;
        if (A instanceof ArrayBuffer) Q = new Qh1(A);
        else if (ArrayBuffer.isView(A)) Q = new Qh1(A.buffer, A.byteOffset, A.byteLength);
        else Q = Buffer.from(A), Bh1.readOnly = !1;
        return Q
    }
    tnA.exports = {
        concat: UB6,
        mask: lZB,
        toArrayBuffer: $B6,
        toBuffer: Bh1,
        unmask: iZB
    };
    if (!process.env.WS_NO_BUFFER_UTIL) try {
        let A = (() => {
            throw new Error("Cannot require module " + "bufferutil");
        })();
        tnA.exports.mask = function(Q, B, G, Z, I) {
            if (I < 48) lZB(Q, B, G, Z, I);
            else A.mask(Q, B, G, Z, I)
        }, tnA.exports.unmask = function(Q, B) {
            if (Q.length < 32) iZB(Q, B);
            else A.unmask(Q, B)
        }
    } catch (A) {}
});
var rZB = U((eb7, sZB) => {
    var nZB = Symbol("kDone"),
        Gh1 = Symbol("kRun");

class aZB {
        constructor(A) {
            this[nZB] = () => {
                this.pending--, this[Gh1]()
            }, this.concurrency = A || 1 / 0, this.jobs = [], this.pending = 0
        }
        add(A) {
            this.jobs.push(A), this[Gh1]()
        } [Gh1]() {
            if (this.pending === this.concurrency) return;
            if (this.jobs.length) {
                let A = this.jobs.shift();
                this.pending++, A(this[nZB])
            }
        }
    }
    sZB.exports = aZB
});
var SUA = U((Af7, QIB) => {
    var jUA = UA("zlib"),
        oZB = PUA(),
        wB6 = rZB(),
        {
            kStatusCode: tZB
        } = pb(),
        qB6 = Buffer[Symbol.species],
        NB6 = Buffer.from([0, 0, 255, 255]),
        AaA = Symbol("permessage-deflate"),
        lb = Symbol("total-length"),
        D7A = Symbol("callback"),
        lc = Symbol("buffers"),
        H7A = Symbol("error"),
        enA;

class eZB {
        constructor(A, Q, B) {
            if (this._maxPayload = B | 0, this._options = A || {}, this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024, this._isServer = !!Q, this._deflate = null, this._inflate = null, this.params = null, !enA) {
                let G = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
                enA = new wB6(G)
            }
        }
        static get extensionName() {
            return "permessage-deflate"
        }
        offer() {
            let A = {};
            if (this._options.serverNoContextTakeover) A.server_no_context_takeover = !0;
            if (this._options.clientNoContextTakeover) A.client_no_context_takeover = !0;
            if (this._options.serverMaxWindowBits) A.server_max_window_bits = this._options.serverMaxWindowBits;
            if (this._options.clientMaxWindowBits) A.client_max_window_bits = this._options.clientMaxWindowBits;
            else if (this._options.clientMaxWindowBits == null) A.client_max_window_bits = !0;
            return A
        }
        accept(A) {
            return A = this.normalizeParams(A), this.params = this._isServer ? this.acceptAsServer(A) : this.acceptAsClient(A), this.params
        }
        cleanup() {
            if (this._inflate) this._inflate.close(), this._inflate = null;
            if (this._deflate) {
                let A = this._deflate[D7A];
                if (this._deflate.close(), this._deflate = null, A) A(Error("The deflate stream was closed while data was being processed"))
            }
        }
        acceptAsServer(A) {
            let Q = this._options,
                B = A.find((G) => {
                    if (Q.serverNoContextTakeover === !1 && G.server_no_context_takeover || G.server_max_window_bits && (Q.serverMaxWindowBits === !1 || typeof Q.serverMaxWindowBits === "number" && Q.serverMaxWindowBits > G.server_max_window_bits) || typeof Q.clientMaxWindowBits === "number" && !G.client_max_window_bits) return !1;
                    return !0
                });