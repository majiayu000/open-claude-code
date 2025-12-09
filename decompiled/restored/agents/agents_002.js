/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: agents_002.js
 * 处理时间: 2025-12-09T03:37:23.592Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * GA         ( 19x) = esmImport(module) - ESM import helper
 * thinking   (  2x) = THINKING content type
 * tool_use   (  1x) = TOOL_USE content type
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: agents
 * File: 2/13
 * Lines: 400790 - 402283 (1494 lines)
 * Original file: cli.js
 */

                function wW1() {
                    return []
                }

                function qW1() {
                    return !1
                }

                function qw9() {
                    return {}
                }

                function Nw9() {
                    return ""
                }

                function Lw9() {
                    return !0
                }

                function Mw9(M, S) {
                    if (M = J8(M), M < 1 || M > QA) return [];
                    var m = wA,
                        JA = BX(M, wA);
                    S = Q1(S), M -= wA;
                    var kA = f6(JA, S);
                    while (++m < M) S(m);
                    return kA
                }

                function Ow9(M) {
                    if (p4(M)) return y5(M, XJ);
                    return zZ(M) ? [M] : FV(Mz(v5(M)))
                }

                function Rw9(M) {
                    var S = ++_C;
                    return v5(M) + S
                }
                var Tw9 = QR(function(M, S) {
                        return M + S
                    }, 0),
                    Pw9 = G1("ceil"),
                    jw9 = QR(function(M, S) {
                        return M / S
                    }, 1),
                    Sw9 = G1("floor");

                function _w9(M) {
                    return M && M.length ? YJ(M, yz, Wj) : A
                }

                function kw9(M, S) {
                    return M && M.length ? YJ(M, Q1(S, 2), Wj) : A
                }

                function yw9(M) {
                    return H1(M, yz)
                }

                function xw9(M, S) {
                    return H1(M, Q1(S, 2))
                }

                function vw9(M) {
                    return M && M.length ? YJ(M, yz, K5) : A
                }

                function bw9(M, S) {
                    return M && M.length ? YJ(M, Q1(S, 2), K5) : A
                }
                var fw9 = QR(function(M, S) {
                        return M * S
                    }, 1),
                    hw9 = G1("round"),
                    gw9 = QR(function(M, S) {
                        return M - S
                    }, 0);

                function uw9(M) {
                    return M && M.length ? n9(M, yz) : 0
                }

                function mw9(M, S) {
                    return M && M.length ? n9(M, Q1(S, 2)) : 0
                }
                if (lA.after = tJ1, lA.ary = rSA, lA.assign = cFA, lA.assignIn = Y_A, lA.assignInWith = zBA, lA.assignWith = pFA, lA.at = UBA, lA.before = oSA, lA.bind = hFA, lA.bindAll = Gw9, lA.bindKey = tSA, lA.castArray = BW1, lA.chain = hSA, lA.chunk = Bs, lA.compact = wB, lA.concat = b2, lA.cond = Zw9, lA.conforms = Iw9, lA.constant = EW1, lA.countBy = dSA, lA.create = VW1, lA.curry = eSA, lA.curryRight = A_A, lA.debounce = Q_A, lA.defaults = J_A, lA.defaultsDeep = KW1, lA.defer = PN, lA.delay = Nu, lA.difference = T8, lA.differenceBy = g6, lA.differenceWith = QI, lA.drop = UG, lA.dropRight = VX, lA.dropRightWhile = VV, lA.dropWhile = BW, lA.fill = bC, lA.filter = dJ1, lA.flatMap = pSA, lA.flatMapDeep = pJ1, lA.flatMapDepth = lJ1, lA.flatten = i0, lA.flattenDeep = BQ, lA.flattenDepth = YQ, lA.flip = Lu, lA.flow = Jw9, lA.flowRight = Ww9, lA.fromPairs = qQ, lA.functions = W$9, lA.functionsIn = X$9, lA.groupBy = iSA, lA.initial = P8, lA.intersection = $3, lA.intersectionBy = FJ, lA.intersectionWith = CF, lA.invert = V$9, lA.invertBy = K$9, lA.invokeMap = iJ1, lA.iteratee = zW1, lA.keyBy = nJ1, lA.keys = DV, lA.keysIn = kz, lA.map = gx, lA.mapKeys = H$9, lA.mapValues = C$9, lA.matches = Xw9, lA.matchesProperty = Fw9, lA.memoize = Mu, lA.merge = E$9, lA.mergeWith = ID0, lA.method = Vw9, lA.methodOf = Kw9, lA.mixin = UW1, lA.negate = Ou, lA.nthArg = Hw9, lA.omit = z$9, lA.omitBy = U$9, lA.once = Sz, lA.orderBy = aJ1, lA.over = Cw9, lA.overArgs = gFA, lA.overEvery = Ew9, lA.overSome = zw9, lA.partial = ux, lA.partialRight = Ru, lA.partition = sJ1, lA.pick = $$9, lA.pickBy = YD0, lA.property = DD0, lA.propertyOf = Uw9, lA.pull = VJ, lA.pullAll = d$, lA.pullAllBy = Tz, lA.pullAllWith = Pz, lA.pullAt = SJ1, lA.range = $w9, lA.rangeRight = ww9, lA.rearg = eJ1, lA.reject = sSA, lA.remove = Gs, lA.rest = B_A, lA.reverse = bx, lA.sampleSize = Ys, lA.set = q$9, lA.setWith = N$9, lA.shuffle = HBA, lA.slice = _SA, lA.sortBy = oJ1, lA.sortedUniq = yJ1, lA.sortedUniqBy = xJ1, lA.split = l$9, lA.spread = AW1, lA.tail = vJ1, lA.take = SFA, lA.takeRight = _FA, lA.takeRightWhile = jz, lA.takeWhile = $u, lA.tap = xFA, lA.throttle = G_A, lA.thru = YH, lA.toArray = fC, lA.toPairs = JD0, lA.toPairsIn = WD0, lA.toPath = Ow9, lA.toPlainObject = dFA, lA.transform = L$9, lA.unary = c$, lA.union = fx, lA.unionBy = KBA, lA.unionWith = Zs, lA.uniq = DBA, lA.uniqBy = wu, lA.uniqWith = F7, lA.unset = M$9, lA.unzip = qu, lA.unzipWith = kFA, lA.update = O$9, lA.updateWith = R$9, lA.values = $BA, lA.valuesIn = T$9, lA.without = Is, lA.words = VD0, lA.wrap = QW1, lA.xor = vSA, lA.xorBy = bJ1, lA.xorWith = fJ1, lA.zip = bSA, lA.zipObject = yFA, lA.zipObjectDeep = hx, lA.zipWith = fSA, lA.entries = JD0, lA.entriesIn = WD0, lA.extend = Y_A, lA.extendWith = zBA, UW1(lA, lA), lA.add = Tw9, lA.attempt = KD0, lA.camelCase = _$9, lA.capitalize = XD0, lA.ceil = Pw9, lA.clamp = P$9, lA.clone = GW1, lA.cloneDeep = ZW1, lA.cloneDeepWith = IW1, lA.cloneWith = Tu, lA.conformsTo = Cj, lA.deburr = FD0, lA.defaultTo = Yw9, lA.divide = jw9, lA.endsWith = k$9, lA.eq = GW, lA.escape = y$9, lA.escapeRegExp = x$9, lA.every = mJ1, lA.find = cJ1, lA.findIndex = TN, lA.findKey = B$9, lA.findLast = cSA, lA.findLastIndex = BR, lA.findLastKey = G$9, lA.floor = Sw9, lA.forEach = lSA, lA.forEachRight = fFA, lA.forIn = Z$9, lA.forInRight = I$9, lA.forOwn = Y$9, lA.forOwnRight = J$9, lA.get = DW1, lA.gt = Ws, lA.gte = Ej, lA.has = F$9, lA.hasIn = HW1, lA.head = tB, lA.identity = yz, lA.includes = GR, lA.indexOf = c4, lA.inRange = j$9, lA.invoke = D$9, lA.isArguments = zj, lA.isArray = p4, lA.isArrayBuffer = YW1, lA.isArrayLike = EF, lA.isArrayLikeObject = $G, lA.isBoolean = CBA, lA.isBuffer = Uj, lA.isDate = uFA, lA.isElement = Z_A, lA.isEmpty = JW1, lA.isEqual = WW1, lA.isEqualWith = XW1, lA.isError = mFA, lA.isFinite = FW1, lA.isFunction = vA, lA.isInteger = iA, lA.isLength = $1, lA.isMap = h0, lA.isMatch = UQ, lA.isMatchWith = Y9, lA.isNaN = w9, lA.isNative = i2, lA.isNil = G6, lA.isNull = q9, lA.isNumber = KJ, lA.isObject = D1, lA.isObjectLike = p1, lA.isPlainObject = V7, lA.isRegExp = KX, lA.isSafeInteger = JH, lA.isSet = KV, lA.isString = ZR, lA.isSymbol = zZ, lA.isTypedArray = DX, lA.isUndefined = $j, lA.isWeakMap = Pu, lA.isWeakSet = Xs, lA.join = Oz, lA.kebabCase = v$9, lA.last = d3, lA.lastIndexOf = Rz, lA.lowerCase = b$9, lA.lowerFirst = f$9, lA.lt = IR, lA.lte = YR, lA.max = _w9, lA.maxBy = kw9, lA.mean = yw9, lA.meanBy = xw9, lA.min = vw9, lA.minBy = bw9, lA.stubArray = wW1, lA.stubFalse = qW1, lA.stubObject = qw9, lA.stubString = Nw9, lA.stubTrue = Lw9, lA.multiply = fw9, lA.nth = vx, lA.noConflict = Dw9, lA.noop = $W1, lA.now = Hj, lA.pad = h$9, lA.padEnd = g$9, lA.padStart = u$9, lA.parseInt = m$9, lA.random = S$9, lA.reduce = nSA, lA.reduceRight = aSA, lA.repeat = d$9, lA.replace = c$9, lA.result = w$9, lA.round = hw9, lA.runInContext = d1, lA.sample = _K, lA.size = Js, lA.snakeCase = p$9, lA.some = rJ1, lA.sortedIndex = _J1, lA.sortedIndexBy = kSA, lA.sortedIndexOf = Uu, lA.sortedLastIndex = ySA, lA.sortedLastIndexBy = xSA, lA.sortedLastIndexOf = kJ1, lA.startCase = i$9, lA.startsWith = n$9, lA.subtract = gw9, lA.sum = uw9, lA.sumBy = mw9, lA.template = a$9, lA.times = Mw9, lA.toFinite = _z, lA.toInteger = J8, lA.toLength = EBA, lA.toLower = s$9, lA.toNumber = WH, lA.toSafeInteger = I_A, lA.toString = v5, lA.toUpper = r$9, lA.trim = o$9, lA.trimEnd = t$9, lA.trimStart = e$9, lA.truncate = Aw9, lA.unescape = Qw9, lA.uniqueId = Rw9, lA.upperCase = Bw9, lA.upperFirst = CW1, lA.each = lSA, lA.eachRight = fFA, lA.first = tB, UW1(lA, function() {
                        var M = {};
                        return RI(lA, function(S, m) {
                            if (!Z8.call(lA.prototype, m)) M[m] = S
                        }), M
                    }(), {
                        chain: !1
                    }), lA.VERSION = Q, b6(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(M) {
                        lA[M].placeholder = lA
                    }), b6(["drop", "take"], function(M, S) {
                        L9.prototype[M] = function(m) {
                            m = m === A ? 1 : ZJ(J8(m), 0);
                            var JA = this.__filtered__ && !S ? new L9(this) : this.clone();
                            if (JA.__filtered__) JA.__takeCount__ = BX(m, JA.__takeCount__);
                            else JA.__views__.push({
                                size: BX(m, wA),
                                type: M + (JA.__dir__ < 0 ? "Right" : "")
                            });
                            return JA
                        }, L9.prototype[M + "Right"] = function(m) {
                            return this.reverse()[M](m).reverse()
                        }
                    }), b6(["filter", "map", "takeWhile"], function(M, S) {
                        var m = S + 1,
                            JA = m == o || m == k;
                        L9.prototype[M] = function(kA) {
                            var A1 = this.clone();
                            return A1.__iteratees__.push({
                                iteratee: Q1(kA, 3),
                                type: m
                            }), A1.__filtered__ = A1.__filtered__ || JA, A1
                        }
                    }), b6(["head", "last"], function(M, S) {
                        var m = "take" + (S ? "Right" : "");
                        L9.prototype[M] = function() {
                            return this[m](1).value()[0]
                        }
                    }), b6(["initial", "tail"], function(M, S) {
                        var m = "drop" + (S ? "" : "Right");
                        L9.prototype[M] = function() {
                            return this.__filtered__ ? new L9(this) : this[m](1)
                        }
                    }), L9.prototype.compact = function() {
                        return this.filter(yz)
                    }, L9.prototype.find = function(M) {
                        return this.filter(M).head()
                    }, L9.prototype.findLast = function(M) {
                        return this.reverse().find(M)
                    }, L9.prototype.invokeMap = k4(function(M, S) {
                        if (typeof M == "function") return new L9(this);
                        return this.map(function(m) {
                            return nO(m, M, S)
                        })
                    }), L9.prototype.reject = function(M) {
                        return this.filter(Ou(Q1(M)))
                    }, L9.prototype.slice = function(M, S) {
                        M = J8(M);
                        var m = this;
                        if (m.__filtered__ && (M > 0 || S < 0)) return new L9(m);
                        if (M < 0) m = m.takeRight(-M);
                        else if (M) m = m.drop(M);
                        if (S !== A) S = J8(S), m = S < 0 ? m.dropRight(-S) : m.take(S - M);
                        return m
                    }, L9.prototype.takeRightWhile = function(M) {
                        return this.reverse().takeWhile(M).reverse()
                    }, L9.prototype.toArray = function() {
                        return this.take(wA)
                    }, RI(L9.prototype, function(M, S) {
                        var m = /^(?:filter|find|map|reject)|While$/.test(S),
                            JA = /^(?:head|last)$/.test(S),
                            kA = lA[JA ? "take" + (S == "last" ? "Right" : "") : S],
                            A1 = JA || /^find/.test(S);
                        if (!kA) return;
                        lA.prototype[S] = function() {
                            var q1 = this.__wrapped__,
                                x1 = JA ? [1] : arguments,
                                o1 = q1 instanceof L9,
                                n0 = x1[0],
                                r0 = o1 || p4(q1),
                                KQ = function(u6) {
                                    var b5 = kA.apply(lA, qY([u6], x1));
                                    return JA && qB ? b5[0] : b5
                                };
                            if (r0 && m && typeof n0 == "function" && n0.length != 1) o1 = r0 = !1;
                            var qB = this.__chain__,
                                c2 = !!this.__actions__.length,
                                Z4 = A1 && !qB,
                                i8 = o1 && !c2;
                            if (!A1 && r0) {
                                q1 = i8 ? q1 : new L9(this);
                                var I4 = M.apply(q1, x1);
                                return I4.__actions__.push({
                                    func: YH,
                                    args: [KQ],
                                    thisArg: A
                                }), new ZX(I4, qB)
                            }
                            if (Z4 && i8) return M.apply(this, x1);
                            return I4 = this.thru(KQ), Z4 ? JA ? I4.value()[0] : I4.value() : I4
                        }
                    }), b6(["pop", "push", "shift", "sort", "splice", "unshift"], function(M) {
                        var S = Qj[M],
                            m = /^(?:push|sort|unshift)$/.test(M) ? "tap" : "thru",
                            JA = /^(?:pop|shift)$/.test(M);
                        lA.prototype[M] = function() {
                            var kA = arguments;
                            if (JA && !this.__chain__) {
                                var A1 = this.value();
                                return S.apply(p4(A1) ? A1 : [], kA)
                            }
                            return this[m](function(q1) {
                                return S.apply(p4(q1) ? q1 : [], kA)
                            })
                        }
                    }), RI(L9.prototype, function(M, S) {
                        var m = lA[S];
                        if (m) {
                            var JA = m.name + "";
                            if (!Z8.call(Zj, JA)) Zj[JA] = [];
                            Zj[JA].push({
                                name: S,
                                func: m
                            })
                        }
                    }), Zj[ON(A, C).name] = [{
                        name: "wrapper",
                        func: A
                    }], L9.prototype.clone = IX, L9.prototype.reverse = ka, L9.prototype.value = ya, lA.prototype.at = gSA, lA.prototype.chain = uSA, lA.prototype.commit = hJ1, lA.prototype.next = mSA, lA.prototype.plant = gJ1, lA.prototype.reverse = bFA, lA.prototype.toJSON = lA.prototype.valueOf = lA.prototype.value = uJ1, lA.prototype.first = lA.prototype.head, k$) lA.prototype[k$] = vFA;
                return lA
            },
            BJ = cG();
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) p8._ = BJ, define(function() {
            return BJ
        });
        else if ($Y)($Y.exports = BJ)._ = BJ, s7._ = BJ;
        else p8._ = BJ
    }).call(tPA)
});

function HR3() {
    return B49.sample(["Got it.", "Good to know.", "Noted."])
}

function Z49({
    text: A,
    addMargin: Q
}) {
    let B = e2(A, "user-memory-input"),
        G = G49.useMemo(() => HR3(), []);
    if (!B) return null;
    return aq.createElement(j, {
        flexDirection: "column",
        marginTop: Q ? 1 : 0,
        width: "100%"
    }, aq.createElement(j, null, aq.createElement($, {
        color: "remember",
        backgroundColor: "memoryBackgroundColor"
    }, "#"), aq.createElement($, {
        backgroundColor: "memoryBackgroundColor",
        color: "text"
    }, " ", B, " ")), aq.createElement(y0, {
        height: 1
    }, aq.createElement($, {
        dimColor: !0
    }, G)))
}
var aq, B49, G49;
var I49 = L(() => {
    hA();
    nQ();
    u8();
    aq = GA(VA(), 1), B49 = GA(Q49(), 1), G49 = GA(VA(), 1)
});

function Y49({
    content: A,
    verbose: Q
}) {
    let B = e2(A, "bash-stdout") ?? "",
        G = e2(A, "bash-stderr") ?? "";
    return JW0.createElement(V1A, {
        content: {
            stdout: B,
            stderr: G
        },
        verbose: !!Q
    })
}
var JW0;
var J49 = L(() => {
    U21();
    nQ();
    JW0 = GA(VA(), 1)
});

function W49({
    content: A
}) {
    let Q = e2(A, "local-command-stdout"),
        B = e2(A, "local-command-stderr");
    if (!Q && !B) return sq.createElement(y0, null, sq.createElement($, {
        dimColor: !0
    }, Eq));
    let G = [];
    if (Q?.trim()) G.push(sq.createElement(y0, {
        key: "stdout"
    }, sq.createElement($, {
        color: "text"
    }, Q.trim())));
    if (B?.trim()) G.push(sq.createElement(y0, {
        key: "stderr"
    }, sq.createElement($, {
        color: "error"
    }, B.trim())));
    return G
}
var sq;
var X49 = L(() => {
    nQ();
    hA();
    u8();
    tM();
    sq = GA(VA(), 1)
});

function F49({
    content: A
}) {
    let Q = e2(A, "background-task-output") ?? "";
    return AjA.createElement(y0, null, AjA.createElement($, {
        dimColor: !0
    }, Q))
}
var AjA;
var V49 = L(() => {
    hA();
    nQ();
    u8();
    AjA = GA(VA(), 1)
});

function HQA({
    addMargin: A,
    param: Q,
    verbose: B,
    thinkingMetadata: G
}) {
    if (Q.text.trim() === Eq) return null;
    if (Q.text.startsWith("<bash-stdout") || Q.text.startsWith("<bash-stderr")) return pW.createElement(Y49, {
        content: Q.text,
        verbose: B
    });
    if (Q.text.startsWith("<background-task-output>")) return pW.createElement(F49, {
        content: Q.text
    });
    if (Q.text.startsWith("<local-command-stdout") || Q.text.startsWith("<local-command-stderr")) return pW.createElement(W49, {
        content: Q.text
    });
    if (Q.text === xJA || Q.text === DO) return pW.createElement(y0, {
        height: 1
    }, pW.createElement(Uk, null));
    if (Q.text.includes("<bash-input>")) return pW.createElement(C61, {
        addMargin: A,
        param: Q
    });
    if (Q.text.includes("<background-task-input>")) return pW.createElement(R1A, {
        addMargin: A,
        param: Q
    });
    if (Q.text.includes("<command-message>")) return pW.createElement(s99, {
        addMargin: A,
        param: Q
    });
    if (Q.text.includes("<user-memory-input>")) return pW.createElement(Z49, {
        addMargin: A,
        text: Q.text
    });
    return pW.createElement(e99, {
        addMargin: A,
        param: Q,
        thinkingMetadata: G
    })
}
var pW;
var aZ1 = L(() => {
    _80();
    r99();
    A49();
    tM();
    I49();
    zIA();
    nQ();
    u8();
    J49();
    X49();
    u00();
    V49();
    pW = GA(VA(), 1)
});

function K49({
    param: {
        thinking: A
    },
    addMargin: Q = !1,
    isTranscriptMode: B,
    verbose: G
}) {
    let [Z] = $B();
    if (!A) return null;
    if (!(B || G)) return CQA.default.createElement(j, {
        marginTop: Q ? 1 : 0
    }, CQA.default.createElement($, {
        dimColor: !0,
        italic: !0
    }, "∴ Thinking (ctrl+o to expand)"));
    return CQA.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        marginTop: Q ? 1 : 0,
        width: "100%"
    }, CQA.default.createElement($, {
        dimColor: !0,
        italic: !0
    }, "∴ Thinking…"), CQA.default.createElement(j, {
        paddingLeft: 2
    }, CQA.default.createElement($, {
        dimColor: !0,
        italic: !0
    }, _D(A, Z))))
}
var CQA;
var D49 = L(() => {
    hA();
    Hh();
    CQA = GA(VA(), 1)
});

function H49({
    addMargin: A = !1
}) {
    return WW0.default.createElement(j, {
        marginTop: A ? 1 : 0
    }, WW0.default.createElement($, {
        dimColor: !0,
        italic: !0
    }, "✻ Thinking…"))
}
var WW0;
var C49 = L(() => {
    hA();
    WW0 = GA(VA(), 1)
});
import {
    relative as CR3
} from "path";

function E49({
    attachment: A,
    verbose: Q
}) {
    if (A.files.length === 0) return null;
    let B = A.files.reduce((Z, I) => Z + I.diagnostics.length, 0),
        G = A.files.length;
    if (Q) return Ax.default.createElement(j, {
        flexDirection: "column"
    }, A.files.map((Z, I) => Ax.default.createElement(Ax.default.Fragment, {
        key: I
    }, Ax.default.createElement(y0, null, Ax.default.createElement($, {
        dimColor: !0,
        wrap: "wrap"
    }, oA.bold(CR3(H0(), Z.uri.replace("file://", "").replace("_claude_fs_right:", ""))), " ", oA.dim(Z.uri.startsWith("file://") ? "(file://)" : Z.uri.startsWith("_claude_fs_right:") ? "(claude_fs_right)" : `(${Z.uri.split(":")[0]})`), ":")), Z.diagnostics.map((Y, J) => Ax.default.createElement(y0, {
        key: J
    }, Ax.default.createElement($, {
        dimColor: !0,
        wrap: "wrap"
    }, "  ", QP.getSeveritySymbol(Y.severity), " [Line ", Y.range.start.line + 1, ":", Y.range.start.character + 1, "] ", Y.message, Y.code ? ` [${Y.code}]` : "", Y.source ? ` (${Y.source})` : ""))))));
    else return Ax.default.createElement(y0, null, Ax.default.createElement($, {
        dimColor: !0,
        wrap: "wrap"
    }, `Found ${oA.bold(B)} new diagnostic ${B===1?"issue":"issues"} in ${G} ${G===1?"file":"files"} (ctrl+o to expand)`))
}
var Ax;
var z49 = L(() => {
    hA();
    J9();
    R2();
    u8();
    C1A();
    Ax = GA(VA(), 1)
});
import {
    relative as kXA,
    sep as ER3
} from "path";

function U49({
    attachment: A,
    addMargin: Q,
    verbose: B
}) {
    switch (A.type) {
        case "directory":
            return rB.default.createElement(eY, null, "Listed directory", " ", oA.bold(kXA(H0(), A.path) + ER3));
        case "file":
        case "already_read_file":
            if (A.content.type === "notebook") return rB.default.createElement(eY, {
                dimColor: !1
            }, rB.default.createElement($, {
                dimColor: !0
            }, "Read "), rB.default.createElement($, {
                bold: !0
            }, kXA(H0(), A.filename)), rB.default.createElement($, null, " "), rB.default.createElement($, {
                dimColor: !0
            }, "(", A.content.file.cells.length, " cells)"));
            return rB.default.createElement(eY, {
                dimColor: !1
            }, rB.default.createElement($, {
                dimColor: !0
            }, "Read "), rB.default.createElement($, {
                bold: !0
            }, kXA(H0(), A.filename)), rB.default.createElement($, null, " "), rB.default.createElement($, {
                dimColor: !0
            }, "(", A.content.type === "text" ? `${A.content.file.numLines}${A.truncated?"+":""} lines` : LJ(A.content.file.originalSize), ")"));
        case "compact_file_reference":
            return rB.default.createElement(eY, null, "Referenced file ", oA.bold(kXA(H0(), A.filename)));
        case "selected_lines_in_ide":
            return rB.default.createElement(eY, {
                dimColor: !1
            }, rB.default.createElement($, {
                dimColor: !0
            }, "⧉ Selected "), rB.default.createElement($, {
                bold: !0
            }, A.lineEnd - A.lineStart + 1), rB.default.createElement($, null, " "), rB.default.createElement($, {
                dimColor: !0
            }, "lines from "), rB.default.createElement($, {
                bold: !0
            }, kXA(H0(), A.filename)), rB.default.createElement($, null, " "), rB.default.createElement($, {
                dimColor: !0
            }, "in ", A.ideName));
        case "nested_memory":
            return rB.default.createElement(eY, null, oA.bold(kXA(H0(), A.path)));
        case "queued_command": {
            let G = typeof A.prompt === "string" ? A.prompt : yXA(A.prompt) || "";
            return rB.default.createElement(HQA, {
                addMargin: Q,
                param: {
                    text: G,
                    type: "text"
                },
                verbose: B
            })
        }
        case "todo":
            if (A.context === "post-compact") return rB.default.createElement(eY, null, "Todo list read (", A.itemCount, " ", A.itemCount === 1 ? "item" : "items", ")");
            return null;
        case "plan_file_reference":
            return rB.default.createElement(eY, null, "Plan file referenced (", Q5(A.planFilePath), ")");
        case "diagnostics":
            return rB.default.createElement(E49, {
                attachment: A,
                verbose: B
            });
        case "mcp_resource":
            return rB.default.createElement(eY, {
                dimColor: !1
            }, rB.default.createElement($, {
                dimColor: !0
            }, "Read MCP resource "), rB.default.createElement($, {
                bold: !0
            }, A.name), rB.default.createElement($, null, " "), rB.default.createElement($, {
                dimColor: !0
            }, "from ", A.server));
        case "command_permissions":
            return rB.default.createElement(j, {
                flexDirection: "column",
                paddingLeft: 0
            }, A.model && rB.default.createElement(eY, {
                dimColor: !1
            }, rB.default.createElement($, {
                dimColor: !0
            }, "Model: "), rB.default.createElement($, {
                dimColor: !0,
                bold: !0
            }, A.model)), A.allowedTools.length > 0 && rB.default.createElement(rB.default.Fragment, null, rB.default.createElement(eY, {
                dimColor: !1
            }, rB.default.createElement($, {
                dimColor: !0
            }, "Allowed "), rB.default.createElement($, {
                dimColor: !0,
                bold: !0
            }, A.allowedTools.length), rB.default.createElement($, {
                dimColor: !0
            }, " tools for this command")), B && rB.default.createElement(eY, {
                dimColor: !1
            }, rB.default.createElement($, {
                dimColor: !0
            }, A.allowedTools.join(", ")))));
        case "async_hook_response": {
            if (A.hookEvent === "SessionStart" && !B) return null;
            let G = A.response;
            return rB.default.createElement(eY, {
                dimColor: !1
            }, rB.default.createElement($, {
                dimColor: !0
            }, "Async hook "), rB.default.createElement($, {
                dimColor: !0,
                bold: !0
            }, A.hookEvent), rB.default.createElement($, null, " "), rB.default.createElement($, {
                dimColor: !0
            }, "completed"), B && rB.default.createElement(rB.default.Fragment, null, rB.default.createElement($, {
                dimColor: !0
            }, ":", `
`), G.systemMessage ? rB.default.createElement($, {
                dimColor: !0
            }, G.systemMessage) : G.hookSpecificOutput && ("additionalContext" in G.hookSpecificOutput) && G.hookSpecificOutput.additionalContext ? rB.default.createElement($, {
                dimColor: !0
            }, G.hookSpecificOutput.additionalContext) : null))
        }
        case "hook_blocking_error": {
            if (A.hookEvent === "Stop" || A.hookEvent === "SubagentStop") return null;
            if (B) return rB.default.createElement(eY, {
                color: "error"
            }, A.hookName, " hook returned blocking error:", " ", A.blockingError.blockingError);
            return rB.default.createElement(eY, {
                color: "error"
            }, A.hookName, " hook returned blocking error")
        }
        case "hook_non_blocking_error": {
            if (A.hookEvent === "Stop" || A.hookEvent === "SubagentStop") return null;
            if (B) return rB.default.createElement(eY, {
                color: "error"
            }, A.hookName, " hook error: ", A.stderr);
            return rB.default.createElement(eY, {
                color: "error"
            }, A.hookName, " hook error")
        }
        case "hook_error_during_execution":
            if (A.hookEvent === "Stop" || A.hookEvent === "SubagentStop") return null;
            if (B) return rB.default.createElement(eY, null, A.hookName, " hook warning: ", A.content);
            return rB.default.createElement(eY, null, A.hookName, " hook warning");
        case "hook_success":
            if (A.hookEvent === "Stop" || A.hookEvent === "SubagentStop") return null;
            if (B) return rB.default.createElement(eY, null, A.hookName, " hook succeeded: ", A.content);
            return null;
        case "hook_stopped_continuation":
            if (A.hookEvent === "Stop" || A.hookEvent === "SubagentStop") return null;
            return rB.default.createElement(eY, {
                color: "warning"
            }, A.hookName, " hook stopped continuation: ", A.message);
        case "hook_system_message":
            return rB.default.createElement(eY, null, A.hookName, " says: ", A.content);
        case "hook_permission_decision": {
            let G = A.decision === "allow" ? "Allowed" : "Denied";
            return rB.default.createElement(eY, null, G, " by ", rB.default.createElement($, {
                bold: !0
            }, A.hookEvent), " hook")
        }
        case "async_agent_status": {
            let G = A.status === "completed" ? "completed in background" : A.status,
                Z = A.error ? `: ${A.error}` : "";
            return rB.default.createElement(j, {
                flexDirection: "row",
                width: "100%",
                marginTop: 1,
                paddingLeft: 2
            }, rB.default.createElement($, {
                dimColor: !0,
                wrap: "wrap"
            }, 'Agent "', oA.bold(A.description), '" ', G, Z))
        }
        case "agent_mention":
        case "background_remote_session_status":
        case "background_shell_status":
        case "budget_usd":
        case "edited_image_file":
        case "edited_text_file":
        case "hook_additional_context":
        case "hook_cancelled":
        case "memory":
        case "opened_file_in_ide":
        case "output_style":
        case "plan_mode":
        case "plan_mode_reentry":
        case "structured_output":
        case "todo_reminder":
        case "ultramemory":
        case "token_usage":
            return null
    }
}

function eY({
    dimColor: A = !0,
    children: Q,
    color: B
}) {
    return rB.default.createElement(y0, null, rB.default.createElement($, {
        color: B,
        dimColor: A,
        wrap: "wrap"
    }, Q))
}
var rB;
var $49 = L(() => {
    hA();
    M9();
    u8();
    J9();
    R2();
    aZ1();
    z49();
    nQ();
    rB = GA(VA(), 1)
});

function w49({
    message: {
        retryAttempt: A,
        error: Q,
        retryInMs: B,
        maxRetries: G
    }
}) {
    let [Z, I] = sZ1.useState(0);
    if (dY(() => I((J) => J + 1000), 1000), sZ1.useEffect(() => I(0), [A]), A < 4) return null;
    let Y = Math.max(0, Math.round((B - Z) / 1000));
    return Lg.createElement(y0, null, Lg.createElement(j, {
        flexDirection: "column"
    }, Lg.createElement($, {
        color: "error"
    }, OS2(Q)), Lg.createElement($, {
        dimColor: !0
    }, "Retrying in ", Y, " ", Y === 1 ? "second" : "seconds", "… (attempt", " ", A, "/", G, ")", process.env.API_TIMEOUT_MS ? ` · API_TIMEOUT_MS=${process.env.API_TIMEOUT_MS}ms, try increasing it` : "")))
}
var Lg, sZ1;
var q49 = L(() => {
    u8();
    hA();
    L60();
    $U();
    Lg = GA(VA(), 1), sZ1 = GA(VA(), 1)
});

function N49({
    message: A,
    addMargin: Q,
    verbose: B
}) {
    if (A.subtype !== "stop_hook_summary" && !B && A.level === "info") return null;
    if (A.subtype === "api_error") return Y5.createElement(w49, {
        message: A
    });
    if (A.subtype === "stop_hook_summary") return Y5.createElement(zR3, {
        message: A,
        addMargin: Q,
        verbose: B
    });
    let Z = A.content;
    return Y5.createElement(j, {
        flexDirection: "row",
        width: "100%"
    }, Y5.createElement(UR3, {
        content: Z,
        addMargin: Q,
        dot: A.level !== "info",
        color: A.level === "warning" ? "warning" : void 0,
        dimColor: A.level === "info"
    }))
}

function zR3({
    message: A,
    addMargin: Q,
    verbose: B
}) {
    let {
        hookCount: G,
        hookInfos: Z,
        hookErrors: I,
        preventedContinuation: Y,
        stopReason: J
    } = A, {
        columns: W
    } = YB();
    if (I.length === 0 && !Y) return null;
    return Y5.createElement(j, {
        flexDirection: "row",
        marginTop: Q ? 1 : 0,
        width: "100%"
    }, Y5.createElement(j, {
        minWidth: 2
    }, Y5.createElement($, null, pD)), Y5.createElement(j, {
        flexDirection: "column",
        width: W - 10
    }, Y5.createElement($, null, "Ran ", Y5.createElement($, {
        bold: !0
    }, G), " stop", " ", G === 1 ? "hook" : "hooks"), B && Z.length > 0 && Z.map((X, F) => Y5.createElement($, {
        key: `cmd-${F}`
    }, "⎿  ", X.command === "prompt" ? `prompt: ${X.promptText||""}` : `command: ${X.command}`)), Y && J && Y5.createElement($, null, "⎿  ", J), I.length > 0 && I.map((X, F) => Y5.createElement($, {
        key: F
    }, "⎿  Stop hook error: ", X))))
}

function UR3({
    content: A,
    addMargin: Q,
    dot: B,
    color: G,
    dimColor: Z
}) {
    let {
        columns: I
    } = YB();
    return Y5.createElement(j, {
        flexDirection: "row",
        marginTop: Q ? 1 : 0,
        width: "100%"
    }, B && Y5.createElement(j, {
        minWidth: 2
    }, Y5.createElement($, {
        color: G,
        dimColor: Z
    }, pD)), Y5.createElement(j, {
        flexDirection: "column",
        width: I - 10
    }, Y5.createElement($, {
        color: G,
        dimColor: Z,
        wrap: "wrap"
    }, A.trim())))
}
var Y5;
var L49 = L(() => {
    hA();
    yn();
    m8();
    q49();
    Y5 = GA(VA(), 1)
});

function M49() {
    let {
        columns: A
    } = YB();
    return XW0.createElement(J3, {
        dividerChar: "═",
        title: "Conversation compacted · ctrl+o for history",
        width: A
    })
}
var XW0;
var O49 = L(() => {
    eV();
    m8();
    XW0 = GA(VA(), 1)
});

function R49({
    message: A,
    tools: Q,
    normalizedMessages: B,
    resolvedToolUseIDs: G,
    erroredToolUseIDs: Z,
    inProgressToolUseIDs: I,
    shouldAnimate: Y
}) {
    let J = Q.find((V) => V.name === A.toolName);
    if (!J?.renderGroupedToolUse) return null;
    let W = new Map;
    for (let V of A.results)
        for (let K of V.message.content)
            if (K.type === "tool_result") W.set(K.tool_use_id, {
                param: K,
                output: V.toolUseResult
            });
    let X = A.messages.map((V) => {
            let K = V.message.content[0],
                D = W.get(K.id);
            return {
                param: K,
                isResolved: G.has(K.id),
                isError: Z.has(K.id),
                isInProgress: I.has(K.id),
                progressMessages: Sp(B.filter((H) => H.type === "progress" && H.parentToolUseID === K.id)),
                result: D
            }
        }),
        F = X.some((V) => V.isInProgress);
    return J.renderGroupedToolUse(X, {
        shouldAnimate: Y && F,
        tools: Q
    })
}
var T49 = () => {};

function $R3({
    message: A,
    messages: Q,
    addMargin: B,
    tools: G,
    verbose: Z,
    erroredToolUseIDs: I,
    inProgressToolUseIDs: Y,
    resolvedToolUseIDs: J,
    progressMessagesForMessage: W,
    shouldAnimate: X,
    shouldShowDot: F,
    style: V,
    width: K,
    isTranscriptMode: D,
    onOpenRateLimitOptions: H
}) {
    switch (A.type) {
        case "attachment":
            return b3.createElement(U49, {
                addMargin: B,
                attachment: A.attachment,
                verbose: Z
            });
        case "assistant":
            return b3.createElement(j, {
                flexDirection: "column",
                width: "100%"
            }, A.message.content.map((C, E) => b3.createElement(qR3, {
                key: E,
                param: C,
                addMargin: B,
                tools: G,
                verbose: Z,
                erroredToolUseIDs: I,
                inProgressToolUseIDs: Y,
                resolvedToolUseIDs: J,
                progressMessagesForMessage: W,
                shouldAnimate: X,
                shouldShowDot: F,
                width: K,
                inProgressToolCallCount: Y.size,
                isTranscriptMode: D,
                messages: Q,
                onOpenRateLimitOptions: H
            })));
        case "user":
            return b3.createElement(j, {
                flexDirection: "column",
                width: "100%"
            }, A.message.content.map((C, E) => b3.createElement(wR3, {
                key: E,
                message: A,
                messages: Q,
                addMargin: B,
                tools: G,
                progressMessagesForMessage: W,
                param: C,
                style: V,
                verbose: Z
            })));
        case "system":
            if (A.subtype === "compact_boundary") return b3.createElement(M49, null);
            if (A.subtype === "local_command") return b3.createElement(HQA, {
                addMargin: B,
                param: {
                    type: "text",
                    text: A.content
                },
                verbose: Z
            });
            return b3.createElement(N49, {
                message: A,
                addMargin: B,
                verbose: Z
            });
        case "grouped_tool_use":
            return b3.createElement(R49, {
                message: A,
                tools: G,
                normalizedMessages: Q,
                resolvedToolUseIDs: J,
                erroredToolUseIDs: I,
                inProgressToolUseIDs: Y,
                shouldAnimate: X
            })
    }
}

function wR3({
    message: A,
    messages: Q,
    addMargin: B,
    tools: G,
    progressMessagesForMessage: Z,
    param: I,
    style: Y,
    verbose: J
}) {
    let {
        columns: W
    } = YB();
    switch (I.type) {
        case "text":
            return b3.createElement(HQA, {
                addMargin: B,
                param: I,
                verbose: J,
                thinkingMetadata: A.thinkingMetadata
            });
        case "tool_result":
            return b3.createElement(r09, {
                param: I,
                message: A,
                messages: Q,
                progressMessagesForMessage: Z,
                style: Y,
                tools: G,
                verbose: J,
                width: W - 5
            });
        default:
            return
    }
}

function qR3({
    param: A,
    addMargin: Q,
    tools: B,
    verbose: G,
    erroredToolUseIDs: Z,
    inProgressToolUseIDs: I,
    resolvedToolUseIDs: Y,
    progressMessagesForMessage: J,
    shouldAnimate: W,
    shouldShowDot: X,
    width: F,
    inProgressToolCallCount: V,
    isTranscriptMode: K,
    messages: D,
    onOpenRateLimitOptions: H
}) {
    switch (A.type) {
        case "tool_use":
            return b3.createElement(QQ9, {
                param: A,
                addMargin: Q,
                tools: B,
                verbose: G,
                erroredToolUseIDs: Z,
                inProgressToolUseIDs: I,
                resolvedToolUseIDs: Y,
                progressMessagesForMessage: J,
                shouldAnimate: W,
                shouldShowDot: X,
                inProgressToolCallCount: V,
                messages: D
            });
        case "text":
            return b3.createElement(n99, {
                param: A,
                addMargin: Q,
                shouldShowDot: X,
                width: F,
                onOpenRateLimitOptions: H
            });
        case "redacted_thinking":
            if (!K && !G) return null;
            return b3.createElement(H49, {
                addMargin: Q
            });
        case "thinking":
            if (!K && !G) return null;
            return b3.createElement(K49, {
                addMargin: Q,
                param: A,
                isTranscriptMode: K,
                verbose: G
            });
        default:
            return e(Error(`Unable to render message type: ${A.type}`)), null
    }
}

function NR3(A, Q) {
    if (A.message.uuid !== Q.message.uuid) return !1;
    if (A.isStatic && Q.isStatic) return !0;
    return !1
}
var b3, Mg;
var QjA = L(() => {
    hA();
    u1();
    o09();
    BQ9();
    a99();
    aZ1();
    D49();
    C49();
    m8();
    $49();
    L49();
    O49();
    T49();
    b3 = GA(VA(), 1);
    Mg = b3.memo($R3, NR3)
});

function P49({
    session: A,
    toolUseContext: Q,
    onDone: B,
    onBack: G
}) {
    let [Z, I] = BjA.useState(!1), [Y, J] = BjA.useState(null);
    h1((D, H) => {
        if (H.escape || H.return || D === " ") B("Remote session details dismissed", {
            display: "system"
        });
        else if (H.leftArrow && G) G();
        else if (D === "t" && !Z) X()
    });
    let W = DQ();
    async function X() {
        I(!0), J(null);
        try {
            await CRA(A.id)
        } catch (D) {
            J(D instanceof Error ? D.message : String(D)), I(!1)
        }
    }
    let F = (D) => {
            let H = Math.floor((Date.now() - D) / 1000),
                C = Math.floor(H / 3600),
                E = Math.floor((H - C * 3600) / 60),
                z = H - C * 3600 - E * 60;
            return `${C>0?`${C}h `:""}${E>0||C>0?`${E}m `:""}${z}s`
        },
        V = BjA.useMemo(() => {
            return lJ(Ug(A.log.slice(-3))).filter((D) => D.type !== "progress")
        }, [A]),
        K = A.title.length > 50 ? A.title.substring(0, 47) + "..." : A.title;
    return j6.default.createElement(j, {
        width: "100%",
        flexDirection: "column"
    }, j6.default.createElement(j, {
        width: "100%"
    }, j6.default.createElement(j, {
        borderStyle: "round",
        borderColor: "background",
        flexDirection: "column",
        marginTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        width: "100%"
    }, j6.default.createElement(j, null, j6.default.createElement($, {
        color: "background",
        bold: !0
    }, "Remote session details")), j6.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, j6.default.createElement($, null, j6.default.createElement($, {
        bold: !0
    }, "Status"), ":", " ", A.status === "running" || A.status === "starting" ? j6.default.createElement($, {
        color: "background"
    }, A.status) : A.status === "completed" ? j6.default.createElement($, {
        color: "success"
    }, A.status) : j6.default.createElement($, {
        color: "error"
    }, A.status)), j6.default.createElement($, null, j6.default.createElement($, {
        bold: !0
    }, "Runtime"), ": ", F(A.startTime)), j6.default.createElement($, {
        wrap: "truncate-end"
    }, j6.default.createElement($, {
        bold: !0
    }, "Title"), ": ", K), j6.default.createElement($, null, j6.default.createElement($, {
        bold: !0
    }, "Progress"), ":", " ", j6.default.createElement(LZ1, {
        session: A
    })), j6.default.createElement($, null, j6.default.createElement($, {
        bold: !0
    }, "Session URL"), ":", " ", j6.default.createElement($, {
        dimColor: !0
    }, "https://claude.ai/code/", A.id))), A.log.length > 0 && j6.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, j6.default.createElement($, null, j6.default.createElement($, {
        bold: !0
    }, "Recent messages"), ":"), j6.default.createElement(j, {
        flexDirection: "column",
        height: 10,
        overflowY: "hidden"
    }, V.map((D, H) => j6.default.createElement(Mg, {
        key: H,
        message: D,
        messages: V,
        addMargin: H > 0,
        tools: Q.options.tools,
        verbose: Q.options.verbose,
        erroredToolUseIDs: new Set,
        inProgressToolUseIDs: new Set,
        resolvedToolUseIDs: new Set,
        progressMessagesForMessage: [],
        shouldAnimate: !1,
        shouldShowDot: !1,
        style: "condensed",
        isTranscriptMode: !1,
        isStatic: !0
    }))), j6.default.createElement(j, {
        marginTop: 1
    }, j6.default.createElement($, {
        dimColor: !0,
        italic: !0
    }, "Showing last ", Math.min(3, A.log.length), " of", " ", A.log.length, " messages"))), Y && j6.default.createElement(j, {
        marginTop: 1
    }, j6.default.createElement($, {
        color: "error"
    }, "Teleport failed: ", Y)), Z && j6.default.createElement(j, {
        marginTop: 1
    }, j6.default.createElement($, {
        color: "background"
    }, "Teleporting to session...")))), j6.default.createElement(j, {
        marginLeft: 2
    }, W.pending ? j6.default.createElement($, {
        dimColor: !0
    }, "Press ", W.keyName, " again to exit") : j6.default.createElement($, {
        dimColor: !0
    }, G ? j6.default.createElement($, null, "← to go back · ") : null, "Esc/Enter/Space to close", !Z ? j6.default.createElement($, null, " · t to teleport") : null)))
}
var j6, BjA;
var j49 = L(() => {
    hA();
    c9();
    XJ0();
    W0A();
    QjA();
    hPA();
    nQ();
    j6 = GA(VA(), 1), BjA = GA(VA(), 1)
});

function LR3(A) {
    switch (A) {
        case "running":
            return V1.pointer;
        case "completed":
            return V1.tick;
        case "failed":
            return V1.cross;
        case "killed":
            return V1.cross;
        default:
            return V1.bullet
    }
}

function MR3(A) {
    switch (A) {
        case "running":
            return "background";
        case "completed":
            return "success";
        case "failed":
        case "killed":
            return "error";
        default:
            return "background"
    }
}

function OR3(A, Q, B) {
    let G = Q.find((Z) => Z.name === A.toolName);
    if (!G) return A.toolName;
    try {
        let Z = G.inputSchema.safeParse(A.input),
            I = Z.success ? Z.data : {},
            Y = G.userFacingName(I);
        if (!Y) return A.toolName;
        let J = G.renderToolUseMessage(I, {
            theme: B,
            verbose: !1
        });
        if (J) return H6.default.createElement(H6.default.Fragment, null, Y, "(", J, ")");
        return Y
    } catch {
        return A.toolName
    }
}

function RR3(A, Q) {
    let [B, G] = H6.useState(() => Math.floor((Date.now() - A) / 1000));
    return H6.useEffect(() => {
        if (!Q) return;
        let I = 1000 - Date.now() % 1000,
            Y = setTimeout(() => {
                G(Math.floor((Date.now() - A) / 1000));
                let J = setInterval(() => {
                    G(Math.floor((Date.now() - A) / 1000))
                }, 1000);
                Y.intervalId = J
            }, I);
        return () => {
            clearTimeout(Y);
            let J = Y.intervalId;
            if (J) clearInterval(J)
        }
    }, [Q, A]), FE(B * 1000)
}

function S49({
    agent: A,
    onDone: Q,
    onKillAgent: B,
    onBack: G
}) {
    let [Z] = _Q(), I = Z.todos[A.agentId] ?? [], Y = I.filter((H) => H.status === "completed").length, [J] = $B(), W = H6.useMemo(() => JC(DE()), []), X = RR3(A.startTime, A.status === "running");
    h1((H, C) => {
        if (C.escape || C.return || H === " ") Q();
        else if (C.leftArrow && G) G();
        else if (H === "k" && A.status === "running" && B) B()
    });
    let F = DQ(),
        V = A.prompt.length > 300 ? A.prompt.substring(0, 297) + "…" : A.prompt,
        K = A.result?.totalTokens ?? A.progress?.tokenCount,
        D = A.result?.totalToolUseCount ?? A.progress?.toolUseCount;
    return H6.default.createElement(j, {
        width: "100%",
        flexDirection: "column"
    }, H6.default.createElement(j, {
        width: "100%"
    }, H6.default.createElement(j, {
        borderStyle: "round",
        borderColor: "background",
        flexDirection: "column",
        marginTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        width: "100%"
    }, H6.default.createElement(j, null, H6.default.createElement($, {
        color: "background",
        bold: !0
    }, A.selectedAgent?.agentType ?? "agent", " ›", " ", A.description || "Async agent")), H6.default.createElement(j, null, A.status !== "running" && H6.default.createElement($, {
        color: MR3(A.status)
    }, LR3(A.status), " ", A.status === "completed" ? "Completed" : A.status === "failed" ? "Failed" : "Killed", " · "), H6.default.createElement($, {
        dimColor: !0
    }, X, K !== void 0 && K > 0 && H6.default.createElement(H6.default.Fragment, null, " · ", QZ(K), " tokens"), D !== void 0 && D > 0 && H6.default.createElement(H6.default.Fragment, null, " · ", D, " tools"))), H6.default.createElement(j, {
        flexDirection: "column"
    }, A.status === "running" && A.progress?.recentActivities && A.progress.recentActivities.length > 0 && H6.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, H6.default.createElement($, {
        bold: !0,
        dimColor: !0
    }, "Progress"), A.progress.recentActivities.map((H, C) => H6.default.createElement($, {
        key: C,
        dimColor: C < A.progress.recentActivities.length - 1,
        wrap: "truncate-end"
    }, C === A.progress.recentActivities.length - 1 ? "› " : "  ", OR3(H, W, J)))), I.length > 0 && H6.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, H6.default.createElement($, {
        bold: !0,
        dimColor: !0
    }, "Tasks (", Y, "/", I.length, ")"), H6.default.createElement(si, {
        todos: I
    })), H6.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, H6.default.createElement($, {
        bold: !0,
        dimColor: !0
    }, "Prompt"), H6.default.createElement($, {
        wrap: "wrap"
    }, V)), A.status === "failed" && A.error && H6.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, H6.default.createElement($, {
        bold: !0,
        color: "error"
    }, "Error"), H6.default.createElement($, {
        color: "error",
        wrap: "wrap"
    }, A.error))))), H6.default.createElement(j, {
        marginLeft: 2
    }, F.pending ? H6.default.createElement($, {
        dimColor: !0
    }, "Press ", F.keyName, " again to exit") : H6.default.createElement($, {
        dimColor: !0
    }, G ? H6.default.createElement($, null, "← to go back · ") : null, "Esc/Enter/Space to close", A.status === "running" && B ? H6.default.createElement($, null, " · k to kill") : null)))
}
var H6;
var _49 = L(() => {
    hA();
    c9();
    H9();
    rOA();
    n2();
    jq();
    H6 = GA(VA(), 1)
});

function TR3(A, Q, B) {
    Q((G) => {
        let Z = G.backgroundTasks[A];
        if (!Z || Z.type !== "async_agent") return e(Error("Async Agent not found in AppState.backgroundTasks. This is a bug")), G;
        let I = B(Z);
        return {
            ...G,
            backgroundTasks: {
                ...G.backgroundTasks,
                [A]: I
            }
        }
    })
}

function FW0(A, Q) {
    TR3(A, Q, (B) => {
        if (B.status !== "running") return B;
        return B.abortController?.abort(), B.unregisterCleanup?.(), {
            ...B,
            status: "killed"
        }
    })
}
var rZ1 = L(() => {
    UZ();
    u1();
    XH();
    $Z()
});

function oZ1({
    onDone: A,
    toolUseContext: Q
}) {
    let [{
        backgroundTasks: B
    }, G] = _Q(), [Z, I] = EQA.useState(null), [Y, J] = EQA.useState(0);
    h1((P, y) => {
        if (!Z && y.escape) A("Background tasks dialog dismissed", {
            display: "system"
        });
        if (!Z && y.return && E) I(E.id);
        if (!Z && P === "k" && E?.type === "shell") X(E.id);
        if (!Z && P === "k" && E?.type === "async_agent") FW0(E.id, G);
        if (!Z && (y.upArrow || y.downArrow)) {
            let v = C.length;
            if (v === 0) return;
            if (y.upArrow) J((x) => Math.max(0, x - 1));
            else J((x) => Math.min(v - 1, x + 1))
        }
    });
    let W = DQ();

    function X(P) {
        G((y) => {
            let v = B[P];
            if (!v) return y;
            if (v.type !== "shell") return y;
            return {
                ...y,
                backgroundTasks: {
                    ...y.backgroundTasks,
                    [P]: GQ1(v)
                }
            }
        })
    }
    let F = Object.values(B).map(PR3),
        V = F.sort((P, y) => {
            if (P.status === "running" && y.status !== "running") return -1;
            if (P.status !== "running" && y.status === "running") return 1;
            return y.task.startTime - P.task.startTime
        }),
        K = V.filter((P) => P.type === "shell"),
        D = V.filter((P) => P.type === "remote_session"),
        H = V.filter((P) => P.type === "async_agent"),
        C = EQA.useMemo(() => {
            return [...K, ...D, ...H]
        }, [K, D, H]),
        E = C[Y] || null;
    if (EQA.useEffect(() => {
            if (Z && !Object.values(B).some((y) => y.type === "async_agent" ? y.agentId === Z : y.id === Z)) I(null);
            let P = C.length;
            if (Y >= P && P > 0) J(P - 1)
        }, [Z, B, Y, C]), Z) {
        let P = Object.values(B).find((y) => y.type === "async_agent" ? y.agentId === Z : y.id === Z);
        if (!P) return null;
        if (P.type === "shell") return K3.default.createElement(k09, {
            shell: P,
            onDone: A,
            onKillShell: () => X(P.id),
            onBack: () => I(null),
            key: `shell-${P.id}`
        });
        else if (P.type === "async_agent") return K3.default.createElement(S49, {
            agent: P,
            onDone: A,
            onKillAgent: () => FW0(P.agentId, G),
            onBack: () => I(null),
            key: `agent-${P.agentId}`
        });
        else return K3.default.createElement(P49, {
            session: P,
            onDone: A,
            toolUseContext: Q,
            onBack: () => I(null),
            key: `session-${P.id}`
        })
    }