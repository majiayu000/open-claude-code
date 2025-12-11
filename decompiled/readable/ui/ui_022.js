/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_022.js
 * 处理时间: 2025-12-09T03:41:39.223Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 22/53
 * Lines: 176212 - 177710 (1499 lines)
 * Original file: cli.js
 */

                            this[C] = QA, this[E] = k.stale || !1, this[z] = k.maxAge || 0, this[w] = k.dispose, this[N] = k.noDisposeOnSet || !1, this.reset()
                        }
                        Object.defineProperty(y.prototype, "max", {
                            set: function(d) {
                                if (!d || typeof d !== "number" || d <= 0) d = 1 / 0;
                                this[D] = d, u(this)
                            },
                            get: function() {
                                return this[D]
                            },
                            enumerable: !0
                        }), Object.defineProperty(y.prototype, "allowStale", {
                            set: function(d) {
                                this[E] = !!d
                            },
                            get: function() {
                                return this[E]
                            },
                            enumerable: !0
                        }), Object.defineProperty(y.prototype, "maxAge", {
                            set: function(d) {
                                if (!d || typeof d !== "number" || d < 0) d = 0;
                                this[z] = d, u(this)
                            },
                            get: function() {
                                return this[z]
                            },
                            enumerable: !0
                        }), Object.defineProperty(y.prototype, "lengthCalculator", {
                            set: function(d) {
                                if (typeof d !== "function") d = P;
                                if (d !== this[C]) this[C] = d, this[H] = 0, this[q].forEach(function(QA) {
                                    QA.length = this[C](QA.value, QA.key), this[H] += QA.length
                                }, this);
                                u(this)
                            },
                            get: function() {
                                return this[C]
                            },
                            enumerable: !0
                        }), Object.defineProperty(y.prototype, "length", {
                            get: function() {
                                return this[H]
                            },
                            enumerable: !0
                        }), Object.defineProperty(y.prototype, "itemCount", {
                            get: function() {
                                return this[q].length
                            },
                            enumerable: !0
                        }), y.prototype.rforEach = function(k, d) {
                            d = d || this;
                            for (var QA = this[q].tail; QA !== null;) {
                                var IA = QA.prev;
                                v(this, k, QA, d), QA = IA
                            }
                        };

                        function v(k, d, QA, IA) {
                            var HA = QA.value;
                            if (p(k, HA)) {
                                if (o(k, QA), !k[E]) HA = void 0
                            }
                            if (HA) d.call(IA, HA.value, HA.key, k)
                        }
                        y.prototype.forEach = function(k, d) {
                            d = d || this;
                            for (var QA = this[q].head; QA !== null;) {
                                var IA = QA.next;
                                v(this, k, QA, d), QA = IA
                            }
                        }, y.prototype.keys = function() {
                            return this[q].toArray().map(function(k) {
                                return k.key
                            }, this)
                        }, y.prototype.values = function() {
                            return this[q].toArray().map(function(k) {
                                return k.value
                            }, this)
                        }, y.prototype.reset = function() {
                            if (this[w] && this[q] && this[q].length) this[q].forEach(function(k) {
                                this[w](k.key, k.value)
                            }, this);
                            this[R] = new W, this[q] = new F, this[H] = 0
                        }, y.prototype.dump = function() {
                            return this[q].map(function(k) {
                                if (!p(this, k)) return {
                                    k: k.key,
                                    v: k.value,
                                    e: k.now + (k.maxAge || 0)
                                }
                            }, this).toArray().filter(function(k) {
                                return k
                            })
                        }, y.prototype.dumpLru = function() {
                            return this[q]
                        }, y.prototype.inspect = function(k, d) {
                            var QA = "LRUCache {",
                                IA = !1,
                                HA = this[E];
                            if (HA) QA += `
  allowStale: true`, IA = !0;
                            var wA = this[D];
                            if (wA && wA !== 1 / 0) {
                                if (IA) QA += ",";
                                QA += `
  max: ` + X.inspect(wA, d), IA = !0
                            }
                            var KA = this[z];
                            if (KA) {
                                if (IA) QA += ",";
                                QA += `
  maxAge: ` + X.inspect(KA, d), IA = !0
                            }
                            var SA = this[C];
                            if (SA && SA !== P) {
                                if (IA) QA += ",";
                                QA += `
  length: ` + X.inspect(this[H], d), IA = !0
                            }
                            var sA = !1;
                            if (this[q].forEach(function(NA) {
                                    if (sA) QA += `,
  `;
                                    else {
                                        if (IA) QA += `,
`;
                                        sA = !0, QA += `
  `
                                    }
                                    var qA = X.inspect(NA.key).split(`
`).join(`
  `),
                                        DA = {
                                            value: NA.value
                                        };
                                    if (NA.maxAge !== KA) DA.maxAge = NA.maxAge;
                                    if (SA !== P) DA.length = NA.length;
                                    if (p(this, NA)) DA.stale = !0;
                                    DA = X.inspect(DA, d).split(`
`).join(`
  `), QA += qA + " => " + DA
                                }), sA || IA) QA += `
`;
                            return QA += "}", QA
                        }, y.prototype.set = function(k, d, QA) {
                            QA = QA || this[z];
                            var IA = QA ? Date.now() : 0,
                                HA = this[C](d, k);
                            if (this[R].has(k)) {
                                if (HA > this[D]) return o(this, this[R].get(k)), !1;
                                var wA = this[R].get(k),
                                    KA = wA.value;
                                if (this[w]) {
                                    if (!this[N]) this[w](k, KA.value)
                                }
                                return KA.now = IA, KA.maxAge = QA, KA.value = d, this[H] += HA - KA.length, KA.length = HA, this.get(k), u(this), !0
                            }
                            var SA = new l(k, d, HA, IA, QA);
                            if (SA.length > this[D]) {
                                if (this[w]) this[w](k, d);
                                return !1
                            }
                            return this[H] += SA.length, this[q].unshift(SA), this[R].set(k, this[q].head), u(this), !0
                        }, y.prototype.has = function(k) {
                            if (!this[R].has(k)) return !1;
                            var d = this[R].get(k).value;
                            if (p(this, d)) return !1;
                            return !0
                        }, y.prototype.get = function(k) {
                            return x(this, k, !0)
                        }, y.prototype.peek = function(k) {
                            return x(this, k, !1)
                        }, y.prototype.pop = function() {
                            var k = this[q].tail;
                            if (!k) return null;
                            return o(this, k), k.value
                        }, y.prototype.del = function(k) {
                            o(this, this[R].get(k))
                        }, y.prototype.load = function(k) {
                            this.reset();
                            var d = Date.now();
                            for (var QA = k.length - 1; QA >= 0; QA--) {
                                var IA = k[QA],
                                    HA = IA.e || 0;
                                if (HA === 0) this.set(IA.k, IA.v);
                                else {
                                    var wA = HA - d;
                                    if (wA > 0) this.set(IA.k, IA.v, wA)
                                }
                            }
                        }, y.prototype.prune = function() {
                            var k = this;
                            this[R].forEach(function(d, QA) {
                                x(k, QA, !1)
                            })
                        };

                        function x(k, d, QA) {
                            var IA = k[R].get(d);
                            if (IA) {
                                var HA = IA.value;
                                if (p(k, HA)) {
                                    if (o(k, IA), !k[E]) HA = void 0
                                } else if (QA) k[q].unshiftNode(IA);
                                if (HA) HA = HA.value
                            }
                            return HA
                        }

                        function p(k, d) {
                            if (!d || !d.maxAge && !k[z]) return !1;
                            var QA = !1,
                                IA = Date.now() - d.now;
                            if (d.maxAge) QA = IA > d.maxAge;
                            else QA = k[z] && IA > k[z];
                            return QA
                        }

                        function u(k) {
                            if (k[H] > k[D])
                                for (var d = k[q].tail; k[H] > k[D] && d !== null;) {
                                    var QA = d.prev;
                                    o(k, d), d = QA
                                }
                        }

                        function o(k, d) {
                            if (d) {
                                var QA = d.value;
                                if (k[w]) k[w](QA.key, QA.value);
                                k[H] -= QA.length, k[R].delete(QA.key), k[q].removeNode(d)
                            }
                        }

                        function l(k, d, QA, IA, HA) {
                            this.key = k, this.value = d, this.length = QA, this.now = IA, this.maxAge = HA || 0
                        }
                    },
                    169: (Z) => {
                        var I = Z.exports = {},
                            Y, J;

                        function W() {
                            throw Error("setTimeout has not been defined")
                        }

                        function X() {
                            throw Error("clearTimeout has not been defined")
                        }(function() {
                            try {
                                if (typeof setTimeout === "function") Y = setTimeout;
                                else Y = W
                            } catch (q) {
                                Y = W
                            }
                            try {
                                if (typeof clearTimeout === "function") J = clearTimeout;
                                else J = X
                            } catch (q) {
                                J = X
                            }
                        })();

                        function F(q) {
                            if (Y === setTimeout) return setTimeout(q, 0);
                            if ((Y === W || !Y) && setTimeout) return Y = setTimeout, setTimeout(q, 0);
                            try {
                                return Y(q, 0)
                            } catch (R) {
                                try {
                                    return Y.call(null, q, 0)
                                } catch (P) {
                                    return Y.call(this, q, 0)
                                }
                            }
                        }

                        function V(q) {
                            if (J === clearTimeout) return clearTimeout(q);
                            if ((J === X || !J) && clearTimeout) return J = clearTimeout, clearTimeout(q);
                            try {
                                return J(q)
                            } catch (R) {
                                try {
                                    return J.call(null, q)
                                } catch (P) {
                                    return J.call(this, q)
                                }
                            }
                        }
                        var K = [],
                            D = !1,
                            H, C = -1;

                        function E() {
                            if (!D || !H) return;
                            if (D = !1, H.length) K = H.concat(K);
                            else C = -1;
                            if (K.length) z()
                        }

                        function z() {
                            if (D) return;
                            var q = F(E);
                            D = !0;
                            var R = K.length;
                            while (R) {
                                H = K, K = [];
                                while (++C < R)
                                    if (H) H[C].run();
                                C = -1, R = K.length
                            }
                            H = null, D = !1, V(q)
                        }
                        I.nextTick = function(q) {
                            var R = Array(arguments.length - 1);
                            if (arguments.length > 1)
                                for (var P = 1; P < arguments.length; P++) R[P - 1] = arguments[P];
                            if (K.push(new w(q, R)), K.length === 1 && !D) F(z)
                        };

                        function w(q, R) {
                            this.fun = q, this.array = R
                        }
                        w.prototype.run = function() {
                            this.fun.apply(null, this.array)
                        }, I.title = "browser", I.browser = !0, I.env = {}, I.argv = [], I.version = "", I.versions = {};

                        function N() {}
                        I.on = N, I.addListener = N, I.once = N, I.off = N, I.removeListener = N, I.removeAllListeners = N, I.emit = N, I.prependListener = N, I.prependOnceListener = N, I.listeners = function(q) {
                            return []
                        }, I.binding = function(q) {
                            throw Error("process.binding is not supported")
                        }, I.cwd = function() {
                            return "/"
                        }, I.chdir = function(q) {
                            throw Error("process.chdir is not supported")
                        }, I.umask = function() {
                            return 0
                        }
                    },
                    307: (Z, I, Y) => {
                        var J = Y(169);
                        if (J.env.npm_package_name === "pseudomap" && J.env.npm_lifecycle_script === "test") J.env.TEST_PSEUDOMAP = "true";
                        if (typeof Map === "function" && !J.env.TEST_PSEUDOMAP) Z.exports = Map;
                        else Z.exports = Y(761)
                    },
                    761: (Z) => {
                        var I = Object.prototype.hasOwnProperty;
                        Z.exports = Y;

                        function Y(V) {
                            if (!(this instanceof Y)) throw TypeError("Constructor PseudoMap requires 'new'");
                            if (this.clear(), V)
                                if (V instanceof Y || typeof Map === "function" && V instanceof Map) V.forEach(function(K, D) {
                                    this.set(D, K)
                                }, this);
                                else if (Array.isArray(V)) V.forEach(function(K) {
                                this.set(K[0], K[1])
                            }, this);
                            else throw TypeError("invalid argument")
                        }
                        Y.prototype.forEach = function(V, K) {
                            K = K || this, Object.keys(this._data).forEach(function(D) {
                                if (D !== "size") V.call(K, this._data[D].value, this._data[D].key)
                            }, this)
                        }, Y.prototype.has = function(V) {
                            return !!X(this._data, V)
                        }, Y.prototype.get = function(V) {
                            var K = X(this._data, V);
                            return K && K.value
                        }, Y.prototype.set = function(V, K) {
                            F(this._data, V, K)
                        }, Y.prototype.delete = function(V) {
                            var K = X(this._data, V);
                            if (K) delete this._data[K._index], this._data.size--
                        }, Y.prototype.clear = function() {
                            var V = Object.create(null);
                            V.size = 0, Object.defineProperty(this, "_data", {
                                value: V,
                                enumerable: !1,
                                configurable: !0,
                                writable: !1
                            })
                        }, Object.defineProperty(Y.prototype, "size", {
                            get: function() {
                                return this._data.size
                            },
                            set: function(K) {},
                            enumerable: !0,
                            configurable: !0
                        }), Y.prototype.values = Y.prototype.keys = Y.prototype.entries = function() {
                            throw Error("iterators are not implemented in this version")
                        };

                        function J(V, K) {
                            return V === K || V !== V && K !== K
                        }

                        function W(V, K, D) {
                            this.key = V, this.value = K, this._index = D
                        }

                        function X(V, K) {
                            for (var D = 0, H = "_" + K, C = H; I.call(V, C); C = H + D++)
                                if (J(V[C].key, K)) return V[C]
                        }

                        function F(V, K, D) {
                            for (var H = 0, C = "_" + K, E = C; I.call(V, E); E = C + H++)
                                if (J(V[E].key, K)) {
                                    V[E].value = D;
                                    return
                                } V.size++, V[E] = new W(K, D, E)
                        }
                    },
                    430: function(Z, I) {
                        var Y, J, W;

                        function X(F) {
                            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") X = function(K) {
                                return typeof K
                            };
                            else X = function(K) {
                                return K && typeof Symbol === "function" && K.constructor === Symbol && K !== Symbol.prototype ? "symbol" : typeof K
                            };
                            return X(F)
                        }(function(F, V) {
                            J = [], Y = V, W = typeof Y === "function" ? Y.apply(I, J) : Y, W !== void 0 && (Z.exports = W)
                        })(this, function() {
                            function F(P) {
                                return !isNaN(parseFloat(P)) && isFinite(P)
                            }

                            function V(P) {
                                return P.charAt(0).toUpperCase() + P.substring(1)
                            }

                            function K(P) {
                                return function() {
                                    return this[P]
                                }
                            }
                            var D = ["isConstructor", "isEval", "isNative", "isToplevel"],
                                H = ["columnNumber", "lineNumber"],
                                C = ["fileName", "functionName", "source"],
                                E = ["args"],
                                z = D.concat(H, C, E);

                            function w(P) {
                                if (!P) return;
                                for (var y = 0; y < z.length; y++)
                                    if (P[z[y]] !== void 0) this["set" + V(z[y])](P[z[y]])
                            }
                            w.prototype = {
                                getArgs: function() {
                                    return this.args
                                },
                                setArgs: function(y) {
                                    if (Object.prototype.toString.call(y) !== "[object Array]") throw TypeError("Args must be an Array");
                                    this.args = y
                                },
                                getEvalOrigin: function() {
                                    return this.evalOrigin
                                },
                                setEvalOrigin: function(y) {
                                    if (y instanceof w) this.evalOrigin = y;
                                    else if (y instanceof Object) this.evalOrigin = new w(y);
                                    else throw TypeError("Eval Origin must be an Object or StackFrame")
                                },
                                toString: function() {
                                    var y = this.getFileName() || "",
                                        v = this.getLineNumber() || "",
                                        x = this.getColumnNumber() || "",
                                        p = this.getFunctionName() || "";
                                    if (this.getIsEval()) {
                                        if (y) return "[eval] (" + y + ":" + v + ":" + x + ")";
                                        return "[eval]:" + v + ":" + x
                                    }
                                    if (p) return p + " (" + y + ":" + v + ":" + x + ")";
                                    return y + ":" + v + ":" + x
                                }
                            }, w.fromString = function(y) {
                                var v = y.indexOf("("),
                                    x = y.lastIndexOf(")"),
                                    p = y.substring(0, v),
                                    u = y.substring(v + 1, x).split(","),
                                    o = y.substring(x + 1);
                                if (o.indexOf("@") === 0) var l = /@(.+?)(?::(\d+))?(?::(\d+))?TextComponent/.exec(o, ""),
                                    k = l[1],
                                    d = l[2],
                                    QA = l[3];
                                return new w({
                                    functionName: p,
                                    args: u || void 0,
                                    fileName: k,
                                    lineNumber: d || void 0,
                                    columnNumber: QA || void 0
                                })
                            };
                            for (var N = 0; N < D.length; N++) w.prototype["get" + V(D[N])] = K(D[N]), w.prototype["set" + V(D[N])] = function(P) {
                                return function(y) {
                                    this[P] = Boolean(y)
                                }
                            }(D[N]);
                            for (var q = 0; q < H.length; q++) w.prototype["get" + V(H[q])] = K(H[q]), w.prototype["set" + V(H[q])] = function(P) {
                                return function(y) {
                                    if (!F(y)) throw TypeError(P + " must be a Number");
                                    this[P] = Number(y)
                                }
                            }(H[q]);
                            for (var R = 0; R < C.length; R++) w.prototype["get" + V(C[R])] = K(C[R]), w.prototype["set" + V(C[R])] = function(P) {
                                return function(y) {
                                    this[P] = String(y)
                                }
                            }(C[R]);
                            return w
                        })
                    },
                    718: (Z) => {
                        if (typeof Object.create === "function") Z.exports = function(Y, J) {
                            Y.super_ = J, Y.prototype = Object.create(J.prototype, {
                                constructor: {
                                    value: Y,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            })
                        };
                        else Z.exports = function(Y, J) {
                            Y.super_ = J;
                            var W = function() {};
                            W.prototype = J.prototype, Y.prototype = new W, Y.prototype.constructor = Y
                        }
                    },
                    715: (Z) => {
                        function I(Y) {
                            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") I = function(W) {
                                return typeof W
                            };
                            else I = function(W) {
                                return W && typeof Symbol === "function" && W.constructor === Symbol && W !== Symbol.prototype ? "symbol" : typeof W
                            };
                            return I(Y)
                        }
                        Z.exports = function(J) {
                            return J && I(J) === "object" && typeof J.copy === "function" && typeof J.fill === "function" && typeof J.readUInt8 === "function"
                        }
                    },
                    82: (Z, I, Y) => {
                        var J = Y(169);

                        function W(DA) {
                            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") W = function(rA) {
                                return typeof rA
                            };
                            else W = function(rA) {
                                return rA && typeof Symbol === "function" && rA.constructor === Symbol && rA !== Symbol.prototype ? "symbol" : typeof rA
                            };
                            return W(DA)
                        }
                        var X = /%[sdj%]/g;
                        I.format = function(DA) {
                            if (!u(DA)) {
                                var yA = [];
                                for (var rA = 0; rA < arguments.length; rA++) yA.push(K(arguments[rA]));
                                return yA.join(" ")
                            }
                            var rA = 1,
                                K1 = arguments,
                                WA = K1.length,
                                XA = String(DA).replace(X, function($A) {
                                    if ($A === "%%") return "%";
                                    if (rA >= WA) return $A;
                                    switch ($A) {
                                        case "%s":
                                            return String(K1[rA++]);
                                        case "%d":
                                            return Number(K1[rA++]);
                                        case "%j":
                                            try {
                                                return JSON.stringify(K1[rA++])
                                            } catch (LA) {
                                                return "[Circular]"
                                            }
                                        default:
                                            return $A
                                    }
                                });
                            for (var zA = K1[rA]; rA < WA; zA = K1[++rA])
                                if (v(zA) || !d(zA)) XA += " " + zA;
                                else XA += " " + K(zA);
                            return XA
                        }, I.deprecate = function(DA, yA) {
                            if (l(global.process)) return function() {
                                return I.deprecate(DA, yA).apply(this, arguments)
                            };
                            if (J.noDeprecation === !0) return DA;
                            var rA = !1;

                            function K1() {
                                if (!rA) {
                                    if (J.throwDeprecation) throw Error(yA);
                                    else if (J.traceDeprecation) console.trace(yA);
                                    else console.error(yA);
                                    rA = !0
                                }
                                return DA.apply(this, arguments)
                            }
                            return K1
                        };
                        var F = {},
                            V;
                        I.debuglog = function(DA) {
                            if (l(V)) V = J.env.NODE_DEBUG || "";
                            if (DA = DA.toUpperCase(), !F[DA])
                                if (new RegExp("\\b" + DA + "\\b", "i").test(V)) {
                                    var yA = J.pid;
                                    F[DA] = function() {
                                        var rA = I.format.apply(I, arguments);
                                        console.error("%s %d: %s", DA, yA, rA)
                                    }
                                } else F[DA] = function() {};
                            return F[DA]
                        };

                        function K(DA, yA) {
                            var rA = {
                                seen: [],
                                stylize: H
                            };
                            if (arguments.length >= 3) rA.depth = arguments[2];
                            if (arguments.length >= 4) rA.colors = arguments[3];
                            if (y(yA)) rA.showHidden = yA;
                            else if (yA) I._extend(rA, yA);
                            if (l(rA.showHidden)) rA.showHidden = !1;
                            if (l(rA.depth)) rA.depth = 2;
                            if (l(rA.colors)) rA.colors = !1;
                            if (l(rA.customInspect)) rA.customInspect = !0;
                            if (rA.colors) rA.stylize = D;
                            return E(rA, DA, rA.depth)
                        }
                        I.inspect = K, K.colors = {
                            bold: [1, 22],
                            italic: [3, 23],
                            underline: [4, 24],
                            inverse: [7, 27],
                            white: [37, 39],
                            grey: [90, 39],
                            black: [30, 39],
                            blue: [34, 39],
                            cyan: [36, 39],
                            green: [32, 39],
                            magenta: [35, 39],
                            red: [31, 39],
                            yellow: [33, 39]
                        }, K.styles = {
                            special: "cyan",
                            number: "yellow",
                            boolean: "yellow",
                            undefined: "grey",
                            null: "bold",
                            string: "green",
                            date: "magenta",
                            regexp: "red"
                        };

                        function D(DA, yA) {
                            var rA = K.styles[yA];
                            if (rA) return "\x1B[" + K.colors[rA][0] + "m" + DA + "\x1B[" + K.colors[rA][1] + "m";
                            else return DA
                        }

                        function H(DA, yA) {
                            return DA
                        }

                        function C(DA) {
                            var yA = {};
                            return DA.forEach(function(rA, K1) {
                                yA[rA] = !0
                            }), yA
                        }

                        function E(DA, yA, rA) {
                            if (DA.customInspect && yA && HA(yA.inspect) && yA.inspect !== I.inspect && !(yA.constructor && yA.constructor.prototype === yA)) {
                                var K1 = yA.inspect(rA, DA);
                                if (!u(K1)) K1 = E(DA, K1, rA);
                                return K1
                            }
                            var WA = z(DA, yA);
                            if (WA) return WA;
                            var XA = Object.keys(yA),
                                zA = C(XA);
                            if (DA.showHidden) XA = Object.getOwnPropertyNames(yA);
                            if (IA(yA) && (XA.indexOf("message") >= 0 || XA.indexOf("description") >= 0)) return w(yA);
                            if (XA.length === 0) {
                                if (HA(yA)) {
                                    var $A = yA.name ? ": " + yA.name : "";
                                    return DA.stylize("[Function" + $A + "]", "special")
                                }
                                if (k(yA)) return DA.stylize(RegExp.prototype.toString.call(yA), "regexp");
                                if (QA(yA)) return DA.stylize(Date.prototype.toString.call(yA), "date");
                                if (IA(yA)) return w(yA)
                            }
                            var LA = "",
                                TA = !1,
                                eA = ["{", "}"];
                            if (P(yA)) TA = !0, eA = ["[", "]"];
                            if (HA(yA)) {
                                /* BASE64_CHARS = BASE64_CHARS = "ABCDEF...+/" */
var BASE64_CHARS = yA.name ? ": " + yA.name : "";
                                LA = " [Function" + BASE64_CHARS + "]"
                            }
                            if (k(yA)) LA = " " + RegExp.prototype.toString.call(yA);
                            if (QA(yA)) LA = " " + Date.prototype.toUTCString.call(yA);
                            if (IA(yA)) LA = " " + w(yA);
                            if (XA.length === 0 && (!TA || yA.length == 0)) return eA[0] + LA + eA[1];
                            if (rA < 0)
                                if (k(yA)) return DA.stylize(RegExp.prototype.toString.call(yA), "regexp");
                                else return DA.stylize("[Object]", "special");
                            DA.seen.push(yA);
                            var I1;
                            if (TA) I1 = N(DA, yA, rA, zA, XA);
                            else I1 = XA.map(function(w1) {
                                return q(DA, yA, rA, zA, w1, TA)
                            });
                            return DA.seen.pop(), R(I1, LA, eA)
                        }

                        function z(DA, yA) {
                            if (l(yA)) return DA.stylize("undefined", "undefined");
                            if (u(yA)) {
                                var rA = "'" + JSON.stringify(yA).replace(/^"|"TextComponent/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                                return DA.stylize(rA, "string")
                            }
                            if (p(yA)) return DA.stylize("" + yA, "number");
                            if (y(yA)) return DA.stylize("" + yA, "boolean");
                            if (v(yA)) return DA.stylize("null", "null")
                        }

                        function w(DA) {
                            return "[" + Error.prototype.toString.call(DA) + "]"
                        }

                        function N(DA, yA, rA, K1, WA) {
                            var XA = [];
                            for (var zA = 0, $A = yA.length; zA < $A; ++zA)
                                if (qA(yA, String(zA))) XA.push(q(DA, yA, rA, K1, String(zA), !0));
                                else XA.push("");
                            return WA.forEach(function(LA) {
                                if (!LA.match(/^\d+TextComponent/)) XA.push(q(DA, yA, rA, K1, LA, !0))
                            }), XA
                        }

                        function q(DA, yA, rA, K1, WA, XA) {
                            var zA, $A, LA;
                            if (LA = Object.getOwnPropertyDescriptor(yA, WA) || {
                                    value: yA[WA]
                                }, LA.get)
                                if (LA.set) $A = DA.stylize("[Getter/Setter]", "special");
                                else $A = DA.stylize("[Getter]", "special");
                            else if (LA.set) $A = DA.stylize("[Setter]", "special");
                            if (!qA(K1, WA)) zA = "[" + WA + "]";
                            if (!$A)
                                if (DA.seen.indexOf(LA.value) < 0) {
                                    if (v(rA)) $A = E(DA, LA.value, null);
                                    else $A = E(DA, LA.value, rA - 1);
                                    if ($A.indexOf(`
`) > -1)
                                        if (XA) $A = $A.split(`
`).map(function(TA) {
                                            return "  " + TA
                                        }).join(`
`).substr(2);
                                        else $A = `
` + $A.split(`
`).map(function(TA) {
                                            return "   " + TA
                                        }).join(`
`)
                                } else $A = DA.stylize("[Circular]", "special");
                            if (l(zA)) {
                                if (XA && WA.match(/^\d+TextComponent/)) return $A;
                                if (zA = JSON.stringify("" + WA), zA.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"TextComponent/)) zA = zA.substr(1, zA.length - 2), zA = DA.stylize(zA, "name");
                                else zA = zA.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"TextComponent)/g, "'"), zA = DA.stylize(zA, "string")
                            }
                            return zA + ": " + $A
                        }

                        function R(DA, yA, rA) {
                            var K1 = 0,
                                WA = DA.reduce(function(XA, zA) {
                                    if (K1++, zA.indexOf(`
`) >= 0) K1++;
                                    return XA + zA.replace(/\u001b\[\d\d?m/g, "").length + 1
                                }, 0);
                            if (WA > 60) return rA[0] + (yA === "" ? "" : yA + `
 `) + " " + DA.join(`,
  `) + " " + rA[1];
                            return rA[0] + yA + " " + DA.join(", ") + " " + rA[1]
                        }

                        function P(DA) {
                            return Array.isArray(DA)
                        }
                        I.isArray = P;

                        function y(DA) {
                            return typeof DA === "boolean"
                        }
                        I.isBoolean = y;

                        function v(DA) {
                            return DA === null
                        }
                        I.isNull = v;

                        function x(DA) {
                            return DA == null
                        }
                        I.isNullOrUndefined = x;

                        function p(DA) {
                            return typeof DA === "number"
                        }
                        I.isNumber = p;

                        function u(DA) {
                            return typeof DA === "string"
                        }
                        I.isString = u;

                        function o(DA) {
                            return W(DA) === "symbol"
                        }
                        I.isSymbol = o;

                        function l(DA) {
                            return DA === void 0
                        }
                        I.isUndefined = l;

                        function k(DA) {
                            return d(DA) && KA(DA) === "[object RegExp]"
                        }
                        I.isRegExp = k;

                        function d(DA) {
                            return W(DA) === "object" && DA !== null
                        }
                        I.isObject = d;

                        function QA(DA) {
                            return d(DA) && KA(DA) === "[object Date]"
                        }
                        I.isDate = QA;

                        function IA(DA) {
                            return d(DA) && (KA(DA) === "[object Error]" || DA instanceof Error)
                        }
                        I.isError = IA;

                        function HA(DA) {
                            return typeof DA === "function"
                        }
                        I.isFunction = HA;

                        function wA(DA) {
                            return DA === null || typeof DA === "boolean" || typeof DA === "number" || typeof DA === "string" || W(DA) === "symbol" || typeof DA > "u"
                        }
                        I.isPrimitive = wA, I.isBuffer = Y(715);

                        function KA(DA) {
                            return Object.prototype.toString.call(DA)
                        }

                        function SA(DA) {
                            return DA < 10 ? "0" + DA.toString(10) : DA.toString(10)
                        }
                        var sA = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                        function NA() {
                            var DA = new Date,
                                yA = [SA(DA.getHours()), SA(DA.getMinutes()), SA(DA.getSeconds())].join(":");
                            return [DA.getDate(), sA[DA.getMonth()], yA].join(" ")
                        }
                        I.log = function() {
                            console.log("%s - %s", NA(), I.format.apply(I, arguments))
                        }, I.inherits = Y(718), I._extend = function(DA, yA) {
                            if (!yA || !d(yA)) return DA;
                            var rA = Object.keys(yA),
                                K1 = rA.length;
                            while (K1--) DA[rA[K1]] = yA[rA[K1]];
                            return DA
                        };

                        function qA(DA, yA) {
                            return Object.prototype.hasOwnProperty.call(DA, yA)
                        }
                    },
                    695: (Z) => {
                        Z.exports = I, I.Node = W, I.create = I;

                        function I(X) {
                            var F = this;
                            if (!(F instanceof I)) F = new I;
                            if (F.tail = null, F.head = null, F.length = 0, X && typeof X.forEach === "function") X.forEach(function(D) {
                                F.push(D)
                            });
                            else if (arguments.length > 0)
                                for (var V = 0, K = arguments.length; V < K; V++) F.push(arguments[V]);
                            return F
                        }
                        I.prototype.removeNode = function(X) {
                            if (X.list !== this) throw Error("removing node which does not belong to this list");
                            var {
                                next: F,
                                prev: V
                            } = X;
                            if (F) F.prev = V;
                            if (V) V.next = F;
                            if (X === this.head) this.head = F;
                            if (X === this.tail) this.tail = V;
                            X.list.length--, X.next = null, X.prev = null, X.list = null
                        }, I.prototype.unshiftNode = function(X) {
                            if (X === this.head) return;
                            if (X.list) X.list.removeNode(X);
                            var F = this.head;
                            if (X.list = this, X.next = F, F) F.prev = X;
                            if (this.head = X, !this.tail) this.tail = X;
                            this.length++
                        }, I.prototype.pushNode = function(X) {
                            if (X === this.tail) return;
                            if (X.list) X.list.removeNode(X);
                            var F = this.tail;
                            if (X.list = this, X.prev = F, F) F.next = X;
                            if (this.tail = X, !this.head) this.head = X;
                            this.length++
                        }, I.prototype.push = function() {
                            for (var X = 0, F = arguments.length; X < F; X++) Y(this, arguments[X]);
                            return this.length
                        }, I.prototype.unshift = function() {
                            for (var X = 0, F = arguments.length; X < F; X++) J(this, arguments[X]);
                            return this.length
                        }, I.prototype.pop = function() {
                            if (!this.tail) return;
                            var X = this.tail.value;
                            if (this.tail = this.tail.prev, this.tail) this.tail.next = null;
                            else this.head = null;
                            return this.length--, X
                        }, I.prototype.shift = function() {
                            if (!this.head) return;
                            var X = this.head.value;
                            if (this.head = this.head.next, this.head) this.head.prev = null;
                            else this.tail = null;
                            return this.length--, X
                        }, I.prototype.forEach = function(X, F) {
                            F = F || this;
                            for (var V = this.head, K = 0; V !== null; K++) X.call(F, V.value, K, this), V = V.next
                        }, I.prototype.forEachReverse = function(X, F) {
                            F = F || this;
                            for (var V = this.tail, K = this.length - 1; V !== null; K--) X.call(F, V.value, K, this), V = V.prev
                        }, I.prototype.get = function(X) {
                            for (var F = 0, V = this.head; V !== null && F < X; F++) V = V.next;
                            if (F === X && V !== null) return V.value
                        }, I.prototype.getReverse = function(X) {
                            for (var F = 0, V = this.tail; V !== null && F < X; F++) V = V.prev;
                            if (F === X && V !== null) return V.value
                        }, I.prototype.map = function(X, F) {
                            F = F || this;
                            var V = new I;
                            for (var K = this.head; K !== null;) V.push(X.call(F, K.value, this)), K = K.next;
                            return V
                        }, I.prototype.mapReverse = function(X, F) {
                            F = F || this;
                            var V = new I;
                            for (var K = this.tail; K !== null;) V.push(X.call(F, K.value, this)), K = K.prev;
                            return V
                        }, I.prototype.reduce = function(X, F) {
                            var V, K = this.head;
                            if (arguments.length > 1) V = F;
                            else if (this.head) K = this.head.next, V = this.head.value;
                            else throw TypeError("Reduce of empty list with no initial value");
                            for (var D = 0; K !== null; D++) V = X(V, K.value, D), K = K.next;
                            return V
                        }, I.prototype.reduceReverse = function(X, F) {
                            var V, K = this.tail;
                            if (arguments.length > 1) V = F;
                            else if (this.tail) K = this.tail.prev, V = this.tail.value;
                            else throw TypeError("Reduce of empty list with no initial value");
                            for (var D = this.length - 1; K !== null; D--) V = X(V, K.value, D), K = K.prev;
                            return V
                        }, I.prototype.toArray = function() {
                            var X = Array(this.length);
                            for (var F = 0, V = this.head; V !== null; F++) X[F] = V.value, V = V.next;
                            return X
                        }, I.prototype.toArrayReverse = function() {
                            var X = Array(this.length);
                            for (var F = 0, V = this.tail; V !== null; F++) X[F] = V.value, V = V.prev;
                            return X
                        }, I.prototype.slice = function(X, F) {
                            if (F = F || this.length, F < 0) F += this.length;
                            if (X = X || 0, X < 0) X += this.length;
                            var V = new I;
                            if (F < X || F < 0) return V;
                            if (X < 0) X = 0;
                            if (F > this.length) F = this.length;
                            for (var K = 0, D = this.head; D !== null && K < X; K++) D = D.next;
                            for (; D !== null && K < F; K++, D = D.next) V.push(D.value);
                            return V
                        }, I.prototype.sliceReverse = function(X, F) {
                            if (F = F || this.length, F < 0) F += this.length;
                            if (X = X || 0, X < 0) X += this.length;
                            var V = new I;
                            if (F < X || F < 0) return V;
                            if (X < 0) X = 0;
                            if (F > this.length) F = this.length;
                            for (var K = this.length, D = this.tail; D !== null && K > F; K--) D = D.prev;
                            for (; D !== null && K > X; K--, D = D.prev) V.push(D.value);
                            return V
                        }, I.prototype.reverse = function() {
                            var X = this.head,
                                F = this.tail;
                            for (var V = X; V !== null; V = V.prev) {
                                var K = V.prev;
                                V.prev = V.next, V.next = K
                            }
                            return this.head = F, this.tail = X, this
                        };

                        function Y(X, F) {
                            if (X.tail = new W(F, X.tail, null, X), !X.head) X.head = X.tail;
                            X.length++
                        }

                        function J(X, F) {
                            if (X.head = new W(F, null, X.head, X), !X.tail) X.tail = X.head;
                            X.length++
                        }

                        function W(X, F, V, K) {
                            if (!(this instanceof W)) return new W(X, F, V, K);
                            if (this.list = K, this.value = X, F) F.next = this, this.prev = F;
                            else this.prev = null;
                            if (V) V.prev = this, this.next = V;
                            else this.next = null
                        }
                    }
                },
                Q = {};

            function B(Z) {
                var I = Q[Z];
                if (I !== void 0) return I.exports;
                var Y = Q[Z] = {
                    exports: {}
                };
                return A[Z].call(Y.exports, Y, Y.exports, B), Y.exports
            }(() => {
                B.n = (Z) => {
                    var I = Z && Z.__esModule ? () => Z.default : () => Z;
                    return B.d(I, {
                        a: I
                    }), I
                }
            })(), (() => {
                B.d = (Z, I) => {
                    for (var Y in I)
                        if (B.o(I, Y) && !B.o(Z, Y)) Object.defineProperty(Z, Y, {
                            enumerable: !0,
                            get: I[Y]
                        })
                }
            })(), (() => {
                B.o = (Z, I) => Object.prototype.hasOwnProperty.call(Z, I)
            })(), (() => {
                B.r = (Z) => {
                    if (typeof Symbol < "u" && Symbol.toStringTag) Object.defineProperty(Z, Symbol.toStringTag, {
                        value: "Module"
                    });
                    Object.defineProperty(Z, "__esModule", {
                        value: !0
                    })
                }
            })();
            var G = {};
            return (() => {
                B.r(G), B.d(G, {
                    connectToDevTools: () => u3
                });

                function Z(b, a) {
                    if (!(b instanceof a)) throw TypeError("Cannot call a class as a function")
                }

                function I(b, a) {
                    for (var c = 0; c < a.length; c++) {
                        var s = a[c];
                        if (s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s) s.writable = !0;
                        Object.defineProperty(b, s.key, s)
                    }
                }

                function Y(b, a, c) {
                    if (a) I(b.prototype, a);
                    if (c) I(b, c);
                    return b
                }

                function J(b, a, c) {
                    if (a in b) Object.defineProperty(b, a, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    });
                    else b[a] = c;
                    return b
                }
                var W = function() {
                        function b() {
                            Z(this, b), J(this, "listenersMap", new Map)
                        }
                        return Y(b, [{
                            key: "addListener",
                            value: function(c, s) {
                                var r = this.listenersMap.get(c);
                                if (r === void 0) this.listenersMap.set(c, [s]);
                                else {
                                    var bA = r.indexOf(s);
                                    if (bA < 0) r.push(s)
                                }
                            }
                        }, {
                            key: "emit",
                            value: function(c) {
                                var s = this.listenersMap.get(c);
                                if (s !== void 0) {
                                    for (var r = arguments.length, bA = Array(r > 1 ? r - 1 : 0), Y1 = 1; Y1 < r; Y1++) bA[Y1 - 1] = arguments[Y1];
                                    if (s.length === 1) {
                                        var Q1 = s[0];
                                        Q1.apply(null, bA)
                                    } else {
                                        var uA = !1,
                                            z1 = null,
                                            _1 = Array.from(s);
                                        for (var i1 = 0; i1 < _1.length; i1++) {
                                            var a1 = _1[i1];
                                            try {
                                                a1.apply(null, bA)
                                            } catch (QQ) {
                                                if (z1 === null) uA = !0, z1 = QQ
                                            }
                                        }
                                        if (uA) throw z1
                                    }
                                }
                            }
                        }, {
                            key: "removeAllListeners",
                            value: function() {
                                this.listenersMap.clear()
                            }
                        }, {
                            key: "removeListener",
                            value: function(c, s) {
                                var r = this.listenersMap.get(c);
                                if (r !== void 0) {
                                    var bA = r.indexOf(s);
                                    if (bA >= 0) r.splice(bA, 1)
                                }
                            }
                        }]), b
                    }(),
                    X = B(172),
                    F = B.n(X),
                    V = "fmkadmapgofadopljbjfkapdkoienihi",
                    K = "dnjnjgbfilfphmojnmhliehogmojhclc",
                    D = "ikiahnapldjmdmpkmfhjdjilojjhgcbf",
                    H = !1,
                    C = !1,
                    E = 1,
                    z = 2,
                    w = 3,
                    N = 4,
                    q = 5,
                    R = 6,
                    P = 7,
                    y = 1,
                    v = 2,
                    x = "React::DevTools::defaultTab",
                    p = "React::DevTools::componentFilters",
                    u = "React::DevTools::lastSelection",
                    o = "React::DevTools::openInEditorUrl",
                    l = "React::DevTools::openInEditorUrlPreset",
                    k = "React::DevTools::parseHookNames",
                    d = "React::DevTools::recordChangeDescriptions",
                    QA = "React::DevTools::reloadAndProfile",
                    IA = "React::DevTools::breakOnConsoleErrors",
                    HA = "React::DevTools::theme",
                    wA = "React::DevTools::appendComponentStack",
                    KA = "React::DevTools::showInlineWarningsAndErrors",
                    SA = "React::DevTools::traceUpdatesEnabled",
                    sA = "React::DevTools::hideConsoleLogsInStrictMode",
                    NA = "React::DevTools::supportsProfiling",
                    qA = 5;

                function DA(b) {
                    try {
                        return localStorage.getItem(b)
                    } catch (a) {
                        return null
                    }
                }

                function yA(b) {
                    try {
                        localStorage.removeItem(b)
                    } catch (a) {}
                }

                function rA(b, a) {
                    try {
                        return localStorage.setItem(b, a)
                    } catch (c) {}
                }

                function K1(b) {
                    try {
                        return sessionStorage.getItem(b)
                    } catch (a) {
                        return null
                    }
                }

                function WA(b) {
                    try {
                        sessionStorage.removeItem(b)
                    } catch (a) {}
                }

                function XA(b, a) {
                    try {
                        return sessionStorage.setItem(b, a)
                    } catch (c) {}
                }
                var zA = function(a, c) {
                    return a === c
                };

                function $A(b) {
                    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zA,
                        c = void 0,
                        s = [],
                        r = void 0,
                        bA = !1,
                        Y1 = function(z1, _1) {
                            return a(z1, s[_1])
                        },
                        Q1 = function() {
                            for (var z1 = arguments.length, _1 = Array(z1), i1 = 0; i1 < z1; i1++) _1[i1] = arguments[i1];
                            if (bA && c === this && _1.length === s.length && _1.every(Y1)) return r;
                            return bA = !0, c = this, s = _1, r = b.apply(this, _1), r
                        };
                    return Q1
                }

                function LA(b) {
                    if (!b.ownerDocument) return null;
                    return b.ownerDocument.defaultView
                }

                function TA(b) {
                    var a = LA(b);
                    if (a) return a.frameElement;
                    return null
                }

                function eA(b) {
                    var a = w1(b);
                    return BASE64_CHARS([b.getBoundingClientRect(), {
                        top: a.borderTop,
                        left: a.borderLeft,
                        bottom: a.borderBottom,
                        right: a.borderRight,
                        width: 0,
                        height: 0
                    }])
                }

                /* BASE64_CHARS = BASE64_CHARS = "ABCDEF...+/" */
function BASE64_CHARS(b) {
                    return b.reduce(function(a, c) {
                        if (a == null) return c;
                        return {
                            top: a.top + c.top,
                            left: a.left + c.left,
                            width: a.width,
                            height: a.height,
                            bottom: a.bottom + c.bottom,
                            right: a.right + c.right
                        }
                    })
                }

                function I1(b, a) {
                    var c = TA(b);
                    if (c && c !== a) {
                        var s = [b.getBoundingClientRect()],
                            r = c,
                            bA = !1;
                        while (r) {
                            var Y1 = eA(r);
                            if (s.push(Y1), r = TA(r), bA) break;
                            if (r && LA(r) === a) bA = !0
                        }
                        return BASE64_CHARS(s)
                    } else return b.getBoundingClientRect()
                }

                function w1(b) {
                    var a = window.getComputedStyle(b);
                    return {
                        borderLeft: parseInt(a.borderLeftWidth, 10),
                        borderRight: parseInt(a.borderRightWidth, 10),
                        borderTop: parseInt(a.borderTopWidth, 10),
                        borderBottom: parseInt(a.borderBottomWidth, 10),
                        marginLeft: parseInt(a.marginLeft, 10),
                        marginRight: parseInt(a.marginRight, 10),
                        marginTop: parseInt(a.marginTop, 10),
                        marginBottom: parseInt(a.marginBottom, 10),
                        paddingLeft: parseInt(a.paddingLeft, 10),
                        paddingRight: parseInt(a.paddingRight, 10),
                        paddingTop: parseInt(a.paddingTop, 10),
                        paddingBottom: parseInt(a.paddingBottom, 10)
                    }
                }

                function PA(b, a) {
                    if (!(b instanceof a)) throw TypeError("Cannot call a class as a function")
                }

                function B1(b, a) {
                    for (var c = 0; c < a.length; c++) {
                        var s = a[c];
                        if (s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s) s.writable = !0;
                        Object.defineProperty(b, s.key, s)
                    }
                }

                function Q0(b, a, c) {
                    if (a) B1(b.prototype, a);
                    if (c) B1(b, c);
                    return b
                }
                var b1 = Object.assign,
                    Y0 = function() {
                        function b(a, c) {
                            PA(this, b), this.node = a.createElement("div"), this.border = a.createElement("div"), this.padding = a.createElement("div"), this.content = a.createElement("div"), this.border.style.borderColor = fQ.border, this.padding.style.borderColor = fQ.padding, this.content.style.backgroundColor = fQ.background, b1(this.node.style, {
                                borderColor: fQ.margin,
                                pointerEvents: "none",
                                position: "fixed"
                            }), this.node.style.zIndex = "10000000", this.node.appendChild(this.border), this.border.appendChild(this.padding), this.padding.appendChild(this.content), c.appendChild(this.node)
                        }
                        return Q0(b, [{
                            key: "remove",
                            value: function() {
                                if (this.node.parentNode) this.node.parentNode.removeChild(this.node)
                            }
                        }, {
                            key: "update",
                            value: function(c, s) {
                                T0(s, "margin", this.node), T0(s, "border", this.border), T0(s, "padding", this.padding), b1(this.content.style, {
                                    height: c.height - s.borderTop - s.borderBottom - s.paddingTop - s.paddingBottom + "isArguments",
                                    width: c.width - s.borderLeft - s.borderRight - s.paddingLeft - s.paddingRight + "isArguments"
                                }), b1(this.node.style, {
                                    top: c.top - s.marginTop + "isArguments",
                                    left: c.left - s.marginLeft + "isArguments"
                                })
                            }
                        }]), b
                    }(),
                    x0 = function() {
                        function b(a, c) {
                            PA(this, b), this.tip = a.createElement("div"), b1(this.tip.style, {
                                display: "flex",
                                flexFlow: "row nowrap",
                                backgroundColor: "#333740",
                                borderRadius: "2px",
                                fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
                                fontWeight: "bold",
                                padding: "3px 5px",
                                pointerEvents: "none",
                                position: "fixed",
                                fontSize: "12px",
                                whiteSpace: "nowrap"
                            }), this.nameSpan = a.createElement("span"), this.tip.appendChild(this.nameSpan), b1(this.nameSpan.style, {
                                color: "#ee78e6",
                                borderRight: "1px solid #aaaaaa",
                                paddingRight: "0.5rem",
                                marginRight: "0.5rem"
                            }), this.dimSpan = a.createElement("span"), this.tip.appendChild(this.dimSpan), b1(this.dimSpan.style, {
                                color: "#d7d7d7"
                            }), this.tip.style.zIndex = "10000000", c.appendChild(this.tip)
                        }
                        return Q0(b, [{
                            key: "remove",
                            value: function() {
                                if (this.tip.parentNode) this.tip.parentNode.removeChild(this.tip)
                            }
                        }, {
                            key: "updateText",
                            value: function(c, s, r) {
                                this.nameSpan.textContent = c, this.dimSpan.textContent = Math.round(s) + "isArguments × " + Math.round(r) + "isArguments"
                            }
                        }, {
                            key: "updatePosition",
                            value: function(c, s) {
                                var r = this.tip.getBoundingClientRect(),
                                    bA = k1(c, s, {
                                        width: r.width,
                                        height: r.height
                                    });
                                b1(this.tip.style, bA.style)
                            }
                        }]), b
                    }(),
                    u0 = function() {
                        function b(a) {
                            PA(this, b);
                            var c = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
                            this.window = c;
                            var s = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
                            this.tipBoundsWindow = s;
                            var r = c.document;
                            this.container = r.createElement("div"), this.container.style.zIndex = "10000000", this.tip = new x0(r, this.container), this.rects = [], this.agent = a, r.body.appendChild(this.container)
                        }
                        return Q0(b, [{
                            key: "remove",
                            value: function() {
                                if (this.tip.remove(), this.rects.forEach(function(c) {
                                        c.remove()
                                    }), this.rects.length = 0, this.container.parentNode) this.container.parentNode.removeChild(this.container)
                            }
                        }, {
                            key: "inspect",
                            value: function(c, s) {
                                var r = this,
                                    bA = c.filter(function(QQ) {
                                        return QQ.nodeType === Node.ELEMENT_NODE
                                    });
                                while (this.rects.length > bA.length) {
                                    var Y1 = this.rects.pop();
                                    Y1.remove()
                                }
                                if (bA.length === 0) return;
                                while (this.rects.length < bA.length) this.rects.push(new Y0(this.window.document, this.container));
                                var Q1 = {
                                    top: Number.POSITIVE_INFINITY,
                                    right: Number.NEGATIVE_INFINITY,
                                    bottom: Number.NEGATIVE_INFINITY,
                                    left: Number.POSITIVE_INFINITY
                                };
                                if (bA.forEach(function(QQ, MQ) {
                                        var N2 = I1(QQ, r.window),
                                            gQ = w1(QQ);
                                        Q1.top = Math.min(Q1.top, N2.top - gQ.marginTop), Q1.right = Math.max(Q1.right, N2.left + N2.width + gQ.marginRight), Q1.bottom = Math.max(Q1.bottom, N2.top + N2.height + gQ.marginBottom), Q1.left = Math.min(Q1.left, N2.left - gQ.marginLeft);
                                        var I9 = r.rects[MQ];
                                        I9.update(N2, gQ)
                                    }), !s) {
                                    s = bA[0].nodeName.toLowerCase();
                                    var uA = bA[0],
                                        z1 = this.agent.getBestMatchingRendererInterface(uA);
                                    if (z1) {
                                        var _1 = z1.getFiberIDForNative(uA, !0);
                                        if (_1) {
                                            var i1 = z1.getDisplayNameForFiberID(_1, !0);
                                            if (i1) s += " (in " + i1 + ")"
                                        }
                                    }
                                }
                                this.tip.updateText(s, Q1.right - Q1.left, Q1.bottom - Q1.top);
                                var a1 = I1(this.tipBoundsWindow.document.documentElement, this.window);
                                this.tip.updatePosition({
                                    top: Q1.top,
                                    left: Q1.left,
                                    height: Q1.bottom - Q1.top,
                                    width: Q1.right - Q1.left
                                }, {
                                    top: a1.top + this.tipBoundsWindow.scrollY,
                                    left: a1.left + this.tipBoundsWindow.scrollX,
                                    height: this.tipBoundsWindow.innerHeight,
                                    width: this.tipBoundsWindow.innerWidth
                                })
                            }
                        }]), b
                    }();
