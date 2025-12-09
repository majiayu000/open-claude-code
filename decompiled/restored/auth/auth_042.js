/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: auth_042.js
 * 处理时间: 2025-12-09T03:37:24.273Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         (  3x) = require(moduleName) - Node.js require
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 42/61
 * Lines: 218130 - 219616 (1487 lines)
 * Original file: cli.js
 */

        instanceof Array && function(I, Y) {
            I.__proto__ = Y
        } || function(I, Y) {
            for (var J in Y)
                if (Object.prototype.hasOwnProperty.call(Y, J)) I[J] = Y[J]
        };
        chB = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

            function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, phB = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, lhB = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, ihB = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, nhB = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, ahB = function(I, Y, J, W, X, F) {
            function V(P) {
                if (P !== void 0 && typeof P !== "function") throw TypeError("Function expected");
                return P
            }
            var K = W.kind,
                D = K === "getter" ? "get" : K === "setter" ? "set" : "value",
                H = !Y && I ? W.static ? I : I.prototype : null,
                C = Y || (H ? Object.getOwnPropertyDescriptor(H, W.name) : {}),
                E, z = !1;
            for (var w = J.length - 1; w >= 0; w--) {
                var N = {};
                for (var q in W) N[q] = q === "access" ? {} : W[q];
                for (var q in W.access) N.access[q] = W.access[q];
                N.addInitializer = function(P) {
                    if (z) throw TypeError("Cannot add initializers after decoration has completed");
                    F.push(V(P || null))
                };
                var R = (0, J[w])(K === "accessor" ? {
                    get: C.get,
                    set: C.set
                } : C[D], N);
                if (K === "accessor") {
                    if (R === void 0) continue;
                    if (R === null || typeof R !== "object") throw TypeError("Object expected");
                    if (E = V(R.get)) C.get = E;
                    if (E = V(R.set)) C.set = E;
                    if (E = V(R.init)) X.unshift(E)
                } else if (E = V(R))
                    if (K === "field") X.unshift(E);
                    else C[D] = E
            }
            if (H) Object.defineProperty(H, W.name, C);
            z = !0
        }, shB = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, rhB = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, ohB = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, thB = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, ehB = function(I, Y, J, W) {
            function X(F) {
                return F instanceof J ? F : new J(function(V) {
                    V(F)
                })
            }
            return new(J || (J = Promise))(function(F, V) {
                function K(C) {
                    try {
                        H(W.next(C))
                    } catch (E) {
                        V(E)
                    }
                }

                function D(C) {
                    try {
                        H(W.throw(C))
                    } catch (E) {
                        V(E)
                    }
                }

                function H(C) {
                    C.done ? F(C.value) : X(C.value).then(K, D)
                }
                H((W = W.apply(I, Y || [])).next())
            })
        }, AgB = function(I, Y) {
            var J = {
                    label: 0,
                    sent: function() {
                        if (F[0] & 1) throw F[1];
                        return F[1]
                    },
                    trys: [],
                    ops: []
                },
                W, X, F, V = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
            return V.next = K(0), V.throw = K(1), V.return = K(2), typeof Symbol === "function" && (V[Symbol.iterator] = function() {
                return this
            }), V;

            function K(H) {
                return function(C) {
                    return D([H, C])
                }
            }

            function D(H) {
                if (W) throw TypeError("Generator is already executing.");
                while (V && (V = 0, H[0] && (J = 0)), J) try {
                    if (W = 1, X && (F = H[0] & 2 ? X.return : H[0] ? X.throw || ((F = X.return) && F.call(X), 0) : X.next) && !(F = F.call(X, H[1])).done) return F;
                    if (X = 0, F) H = [H[0] & 2, F.value];
                    switch (H[0]) {
                        case 0:
                        case 1:
                            F = H;
                            break;
                        case 4:
                            return J.label++, {
                                value: H[1],
                                done: !1
                            };
                        case 5:
                            J.label++, X = H[1], H = [0];
                            continue;
                        case 7:
                            H = J.ops.pop(), J.trys.pop();
                            continue;
                        default:
                            if ((F = J.trys, !(F = F.length > 0 && F[F.length - 1])) && (H[0] === 6 || H[0] === 2)) {
                                J = 0;
                                continue
                            }
                            if (H[0] === 3 && (!F || H[1] > F[0] && H[1] < F[3])) {
                                J.label = H[1];
                                break
                            }
                            if (H[0] === 6 && J.label < F[1]) {
                                J.label = F[1], F = H;
                                break
                            }
                            if (F && J.label < F[2]) {
                                J.label = F[2], J.ops.push(H);
                                break
                            }
                            if (F[2]) J.ops.pop();
                            J.trys.pop();
                            continue
                    }
                    H = Y.call(I, J)
                } catch (C) {
                    H = [6, C], X = 0
                } finally {
                    W = F = 0
                }
                if (H[0] & 5) throw H[1];
                return {
                    value: H[0] ? H[1] : void 0,
                    done: !0
                }
            }
        }, QgB = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) ctA(Y, I, J)
        }, ctA = Object.create ? function(I, Y, J, W) {
            if (W === void 0) W = J;
            var X = Object.getOwnPropertyDescriptor(Y, J);
            if (!X || ("get" in X ? !Y.__esModule : X.writable || X.configurable)) X = {
                enumerable: !0,
                get: function() {
                    return Y[J]
                }
            };
            Object.defineProperty(I, W, X)
        } : function(I, Y, J, W) {
            if (W === void 0) W = J;
            I[W] = Y[J]
        }, dtA = function(I) {
            var Y = typeof Symbol === "function" && Symbol.iterator,
                J = Y && I[Y],
                W = 0;
            if (J) return J.call(I);
            if (I && typeof I.length === "number") return {
                next: function() {
                    if (I && W >= I.length) I = void 0;
                    return {
                        value: I && I[W++],
                        done: !I
                    }
                }
            };
            throw TypeError(Y ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, dp1 = function(I, Y) {
            var J = typeof Symbol === "function" && I[Symbol.iterator];
            if (!J) return I;
            var W = J.call(I),
                X, F = [],
                V;
            try {
                while ((Y === void 0 || Y-- > 0) && !(X = W.next()).done) F.push(X.value)
            } catch (K) {
                V = {
                    error: K
                }
            } finally {
                try {
                    if (X && !X.done && (J = W.return)) J.call(W)
                } finally {
                    if (V) throw V.error
                }
            }
            return F
        }, BgB = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(dp1(arguments[Y]));
            return I
        }, GgB = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, ZgB = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, dGA = function(I) {
            return this instanceof dGA ? (this.v = I, this) : new dGA(I)
        }, IgB = function(I, Y, J) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var W = J.apply(I, Y || []),
                X, F = [];
            return X = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), K("next"), K("throw"), K("return", V), X[Symbol.asyncIterator] = function() {
                return this
            }, X;

            function V(w) {
                return function(N) {
                    return Promise.resolve(N).then(w, E)
                }
            }

            function K(w, N) {
                if (W[w]) {
                    if (X[w] = function(q) {
                            return new Promise(function(R, P) {
                                F.push([w, q, R, P]) > 1 || D(w, q)
                            })
                        }, N) X[w] = N(X[w])
                }
            }

            function D(w, N) {
                try {
                    H(W[w](N))
                } catch (q) {
                    z(F[0][3], q)
                }
            }

            function H(w) {
                w.value instanceof dGA ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
            }

            function C(w) {
                D("next", w)
            }

            function E(w) {
                D("throw", w)
            }

            function z(w, N) {
                if (w(N), F.shift(), F.length) D(F[0][0], F[0][1])
            }
        }, YgB = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

            function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: dGA(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, JgB = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof dtA === "function" ? dtA(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
                return this
            }, J);

            function W(F) {
                J[F] = I[F] && function(V) {
                    return new Promise(function(K, D) {
                        V = I[F](V), X(K, D, V.done, V.value)
                    })
                }
            }

            function X(F, V, K, D) {
                Promise.resolve(D).then(function(H) {
                    F({
                        value: H,
                        done: K
                    })
                }, V)
            }
        }, WgB = function(I, Y) {
            if (Object.defineProperty) Object.defineProperty(I, "raw", {
                value: Y
            });
            else I.raw = Y;
            return I
        };
        var B = Object.create ? function(I, Y) {
                Object.defineProperty(I, "default", {
                    enumerable: !0,
                    value: Y
                })
            } : function(I, Y) {
                I.default = Y
            },
            G = function(I) {
                return G = Object.getOwnPropertyNames || function(Y) {
                    var J = [];
                    for (var W in Y)
                        if (Object.prototype.hasOwnProperty.call(Y, W)) J[J.length] = W;
                    return J
                }, G(I)
            };
        XgB = function(I) {
            if (I && I.__esModule) return I;
            var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") ctA(Y, I, J[W])
            }
            return B(Y, I), Y
        }, FgB = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, VgB = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, KgB = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, DgB = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, HgB = function(I, Y, J) {
            if (Y !== null && Y !== void 0) {
                if (typeof Y !== "object" && typeof Y !== "function") throw TypeError("Object expected.");
                var W, X;
                if (J) {
                    if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                    W = Y[Symbol.asyncDispose]
                }
                if (W === void 0) {
                    if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                    if (W = Y[Symbol.dispose], J) X = W
                }
                if (typeof W !== "function") throw TypeError("Object not disposable.");
                if (X) W = function() {
                    try {
                        X.call(this)
                    } catch (F) {
                        return Promise.reject(F)
                    }
                };
                I.stack.push({
                    value: Y,
                    dispose: W,
                    async: J
                })
            } else if (J) I.stack.push({
                async: !0
            });
            return Y
        };
        var Z = typeof SuppressedError === "function" ? SuppressedError : function(I, Y, J) {
            var W = Error(J);
            return W.name = "SuppressedError", W.error = I, W.suppressed = Y, W
        };
        CgB = function(I) {
            function Y(F) {
                I.error = I.hasError ? new Z(F, I.error, "An error was suppressed during disposal.") : F, I.hasError = !0
            }
            var J, W = 0;

            function X() {
                while (J = I.stack.pop()) try {
                    if (!J.async && W === 1) return W = 0, I.stack.push(J), Promise.resolve().then(X);
                    if (J.dispose) {
                        var F = J.dispose.call(J.value);
                        if (J.async) return W |= 2, Promise.resolve(F).then(X, function(V) {
                            return Y(V), X()
                        })
                    } else W |= 1
                } catch (V) {
                    Y(V)
                }
                if (W === 1) return I.hasError ? Promise.reject(I.error) : Promise.resolve();
                if (I.hasError) throw I.error
            }
            return X()
        }, EgB = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", chB), A("__assign", phB), A("__rest", lhB), A("__decorate", ihB), A("__param", nhB), A("__esDecorate", ahB), A("__runInitializers", shB), A("__propKey", rhB), A("__setFunctionName", ohB), A("__metadata", thB), A("__awaiter", ehB), A("__generator", AgB), A("__exportStar", QgB), A("__createBinding", ctA), A("__values", dtA), A("__read", dp1), A("__spread", BgB), A("__spreadArrays", GgB), A("__spreadArray", ZgB), A("__await", dGA), A("__asyncGenerator", IgB), A("__asyncDelegator", YgB), A("__asyncValues", JgB), A("__makeTemplateObject", WgB), A("__importStar", XgB), A("__importDefault", FgB), A("__classPrivateFieldGet", VgB), A("__classPrivateFieldSet", KgB), A("__classPrivateFieldIn", DgB), A("__addDisposableResource", HgB), A("__disposeResources", CgB), A("__rewriteRelativeImportExtension", EgB)
    })
});
var $gB = U((n2G, UgB) => {
    var {
        defineProperty: ltA,
        getOwnPropertyDescriptor: Cv6,
        getOwnPropertyNames: Ev6
    } = Object, zv6 = Object.prototype.hasOwnProperty, Uv6 = (A, Q) => ltA(A, "name", {
        value: Q,
        configurable: !0
    }), $v6 = (A, Q) => {
        for (var B in Q) ltA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, wv6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Ev6(Q))
                if (!zv6.call(A, Z) && Z !== B) ltA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Cv6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, qv6 = (A) => wv6(ltA({}, "__esModule", {
        value: !0
    }), A), zgB = {};
    $v6(zgB, {
        isArrayBuffer: () => Nv6
    });
    UgB.exports = qv6(zgB);
    var Nv6 = Uv6((A) => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer")
});
var LgB = U((a2G, NgB) => {
    var {
        defineProperty: itA,
        getOwnPropertyDescriptor: Lv6,
        getOwnPropertyNames: Mv6
    } = Object, Ov6 = Object.prototype.hasOwnProperty, wgB = (A, Q) => itA(A, "name", {
        value: Q,
        configurable: !0
    }), Rv6 = (A, Q) => {
        for (var B in Q) itA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Tv6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Mv6(Q))
                if (!Ov6.call(A, Z) && Z !== B) itA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Lv6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Pv6 = (A) => Tv6(itA({}, "__esModule", {
        value: !0
    }), A), qgB = {};
    Rv6(qgB, {
        fromArrayBuffer: () => Sv6,
        fromString: () => _v6
    });
    NgB.exports = Pv6(qgB);
    var jv6 = $gB(),
        pp1 = UA("buffer"),
        Sv6 = wgB((A, Q = 0, B = A.byteLength - Q) => {
            if (!(0, jv6.isArrayBuffer)(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
            return pp1.Buffer.from(A, Q, B)
        }, "fromArrayBuffer"),
        _v6 = wgB((A, Q) => {
            if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
            return Q ? pp1.Buffer.from(A, Q) : pp1.Buffer.from(A)
        }, "fromString")
});
var PgB = U((s2G, TgB) => {
    var {
        defineProperty: ntA,
        getOwnPropertyDescriptor: kv6,
        getOwnPropertyNames: yv6
    } = Object, xv6 = Object.prototype.hasOwnProperty, lp1 = (A, Q) => ntA(A, "name", {
        value: Q,
        configurable: !0
    }), vv6 = (A, Q) => {
        for (var B in Q) ntA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, bv6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of yv6(Q))
                if (!xv6.call(A, Z) && Z !== B) ntA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = kv6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, fv6 = (A) => bv6(ntA({}, "__esModule", {
        value: !0
    }), A), MgB = {};
    vv6(MgB, {
        fromUtf8: () => RgB,
        toUint8Array: () => hv6,
        toUtf8: () => gv6
    });
    TgB.exports = fv6(MgB);
    var OgB = LgB(),
        RgB = lp1((A) => {
            let Q = (0, OgB.fromString)(A, "utf8");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength / Uint8Array.BYTES_PER_ELEMENT)
        }, "fromUtf8"),
        hv6 = lp1((A) => {
            if (typeof A === "string") return RgB(A);
            if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
            return new Uint8Array(A)
        }, "toUint8Array"),
        gv6 = lp1((A) => {
            if (typeof A === "string") return A;
            if (typeof A !== "object" || typeof A.byteOffset !== "number" || typeof A.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
            return (0, OgB.fromArrayBuffer)(A.buffer, A.byteOffset, A.byteLength).toString("utf8")
        }, "toUtf8")
});
var _gB = U((jgB) => {
    Object.defineProperty(jgB, "__esModule", {
        value: !0
    });
    jgB.convertToBuffer = void 0;
    var uv6 = PgB(),
        mv6 = typeof Buffer < "u" && Buffer.from ? function(A) {
            return Buffer.from(A, "utf8")
        } : uv6.fromUtf8;

    function dv6(A) {
        if (A instanceof Uint8Array) return A;
        if (typeof A === "string") return mv6(A);
        if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        return new Uint8Array(A)
    }
    jgB.convertToBuffer = dv6
});
var xgB = U((kgB) => {
    Object.defineProperty(kgB, "__esModule", {
        value: !0
    });
    kgB.isEmptyData = void 0;

    function cv6(A) {
        if (typeof A === "string") return A.length === 0;
        return A.byteLength === 0
    }
    kgB.isEmptyData = cv6
});
var fgB = U((vgB) => {
    Object.defineProperty(vgB, "__esModule", {
        value: !0
    });
    vgB.numToUint8 = void 0;

    function pv6(A) {
        return new Uint8Array([(A & 4278190080) >> 24, (A & 16711680) >> 16, (A & 65280) >> 8, A & 255])
    }
    vgB.numToUint8 = pv6
});
var ugB = U((hgB) => {
    Object.defineProperty(hgB, "__esModule", {
        value: !0
    });
    hgB.uint32ArrayFrom = void 0;

    function lv6(A) {
        if (!Uint32Array.from) {
            var Q = new Uint32Array(A.length),
                B = 0;
            while (B < A.length) Q[B] = A[B], B += 1;
            return Q
        }
        return Uint32Array.from(A)
    }
    hgB.uint32ArrayFrom = lv6
});
var ip1 = U((cGA) => {
    Object.defineProperty(cGA, "__esModule", {
        value: !0
    });
    cGA.uint32ArrayFrom = cGA.numToUint8 = cGA.isEmptyData = cGA.convertToBuffer = void 0;
    var iv6 = _gB();
    Object.defineProperty(cGA, "convertToBuffer", {
        enumerable: !0,
        get: function() {
            return iv6.convertToBuffer
        }
    });
    var nv6 = xgB();
    Object.defineProperty(cGA, "isEmptyData", {
        enumerable: !0,
        get: function() {
            return nv6.isEmptyData
        }
    });
    var av6 = fgB();
    Object.defineProperty(cGA, "numToUint8", {
        enumerable: !0,
        get: function() {
            return av6.numToUint8
        }
    });
    var sv6 = ugB();
    Object.defineProperty(cGA, "uint32ArrayFrom", {
        enumerable: !0,
        get: function() {
            return sv6.uint32ArrayFrom
        }
    })
});
var lgB = U((cgB) => {
    Object.defineProperty(cgB, "__esModule", {
        value: !0
    });
    cgB.AwsCrc32 = void 0;
    var mgB = cp1(),
        np1 = ip1(),
        dgB = atA(),
        ov6 = function() {
            function A() {
                this.crc32 = new dgB.Crc32
            }
            return A.prototype.update = function(Q) {
                if ((0, np1.isEmptyData)(Q)) return;
                this.crc32.update((0, np1.convertToBuffer)(Q))
            }, A.prototype.digest = function() {
                return mgB.__awaiter(this, void 0, void 0, function() {
                    return mgB.__generator(this, function(Q) {
                        return [2, (0, np1.numToUint8)(this.crc32.digest())]
                    })
                })
            }, A.prototype.reset = function() {
                this.crc32 = new dgB.Crc32
            }, A
        }();
    cgB.AwsCrc32 = ov6
});
var atA = U((ap1) => {
    Object.defineProperty(ap1, "__esModule", {
        value: !0
    });
    ap1.AwsCrc32 = ap1.Crc32 = ap1.crc32 = void 0;
    var tv6 = cp1(),
        ev6 = ip1();

    function Ab6(A) {
        return new igB().update(A).digest()
    }
    ap1.crc32 = Ab6;
    var igB = function() {
        function A() {
            this.checksum = 4294967295
        }
        return A.prototype.update = function(Q) {
            var B, G;
            try {
                for (var Z = tv6.__values(Q), I = Z.next(); !I.done; I = Z.next()) {
                    var Y = I.value;
                    this.checksum = this.checksum >>> 8 ^ Bb6[(this.checksum ^ Y) & 255]
                }
            } catch (J) {
                B = {
                    error: J
                }
            } finally {
                try {
                    if (I && !I.done && (G = Z.return)) G.call(Z)
                } finally {
                    if (B) throw B.error
                }
            }
            return this
        }, A.prototype.digest = function() {
            return (this.checksum ^ 4294967295) >>> 0
        }, A
    }();
    ap1.Crc32 = igB;
    var Qb6 = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
        Bb6 = (0, ev6.uint32ArrayFrom)(Qb6),
        Gb6 = lgB();
    Object.defineProperty(ap1, "AwsCrc32", {
        enumerable: !0,
        get: function() {
            return Gb6.AwsCrc32
        }
    })
});
var rp1 = U((Y9G, tgB) => {
    var {
        defineProperty: rtA,
        getOwnPropertyDescriptor: Jb6,
        getOwnPropertyNames: Wb6
    } = Object, Xb6 = Object.prototype.hasOwnProperty, Ef = (A, Q) => rtA(A, "name", {
        value: Q,
        configurable: !0
    }), Fb6 = (A, Q) => {
        for (var B in Q) rtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Vb6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Wb6(Q))
                if (!Xb6.call(A, Z) && Z !== B) rtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Jb6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Kb6 = (A) => Vb6(rtA({}, "__esModule", {
        value: !0
    }), A), agB = {};
    Fb6(agB, {
        EventStreamCodec: () => Ob6,
        HeaderMarshaller: () => sgB,
        Int64: () => stA,
        MessageDecoderStream: () => Rb6,
        MessageEncoderStream: () => Tb6,
        SmithyMessageDecoderStream: () => Pb6,
        SmithyMessageEncoderStream: () => jb6
    });
    tgB.exports = Kb6(agB);
    var Db6 = atA(),
        we = mm(),
        stA = class A {
            constructor(Q) {
                if (this.bytes = Q, Q.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes")
            }
            static {
                Ef(this, "Int64")
            }
            static fromNumber(Q) {
                if (Q > 9223372036854776000 || Q < -9223372036854776000) throw Error(`${Q} is too large (or, if negative, too small) to represent as an Int64`);
                let B = new Uint8Array(8);
                for (let G = 7, Z = Math.abs(Math.round(Q)); G > -1 && Z > 0; G--, Z /= 256) B[G] = Z;
                if (Q < 0) sp1(B);
                return new A(B)
            }
            valueOf() {
                let Q = this.bytes.slice(0),
                    B = Q[0] & 128;
                if (B) sp1(Q);
                return parseInt((0, we.toHex)(Q), 16) * (B ? -1 : 1)
            }
            toString() {
                return String(this.valueOf())
            }
        };

    function sp1(A) {
        for (let Q = 0; Q < 8; Q++) A[Q] ^= 255;
        for (let Q = 7; Q > -1; Q--)
            if (A[Q]++, A[Q] !== 0) break
    }
    Ef(sp1, "negate");
    var sgB = class {
            constructor(A, Q) {
                this.toUtf8 = A, this.fromUtf8 = Q
            }
            static {
                Ef(this, "HeaderMarshaller")
            }
            format(A) {
                let Q = [];
                for (let Z of Object.keys(A)) {
                    let I = this.fromUtf8(Z);
                    Q.push(Uint8Array.from([I.byteLength]), I, this.formatHeaderValue(A[Z]))
                }
                let B = new Uint8Array(Q.reduce((Z, I) => Z + I.byteLength, 0)),
                    G = 0;
                for (let Z of Q) B.set(Z, G), G += Z.byteLength;
                return B
            }
            formatHeaderValue(A) {
                switch (A.type) {
                    case "boolean":
                        return Uint8Array.from([A.value ? 0 : 1]);
                    case "byte":
                        return Uint8Array.from([2, A.value]);
                    case "short":
                        let Q = new DataView(new ArrayBuffer(3));
                        return Q.setUint8(0, 3), Q.setInt16(1, A.value, !1), new Uint8Array(Q.buffer);
                    case "integer":
                        let B = new DataView(new ArrayBuffer(5));
                        return B.setUint8(0, 4), B.setInt32(1, A.value, !1), new Uint8Array(B.buffer);
                    case "long":
                        let G = new Uint8Array(9);
                        return G[0] = 5, G.set(A.value.bytes, 1), G;
                    case "binary":
                        let Z = new DataView(new ArrayBuffer(3 + A.value.byteLength));
                        Z.setUint8(0, 6), Z.setUint16(1, A.value.byteLength, !1);
                        let I = new Uint8Array(Z.buffer);
                        return I.set(A.value, 3), I;
                    case "string":
                        let Y = this.fromUtf8(A.value),
                            J = new DataView(new ArrayBuffer(3 + Y.byteLength));
                        J.setUint8(0, 7), J.setUint16(1, Y.byteLength, !1);
                        let W = new Uint8Array(J.buffer);
                        return W.set(Y, 3), W;
                    case "timestamp":
                        let X = new Uint8Array(9);
                        return X[0] = 8, X.set(stA.fromNumber(A.value.valueOf()).bytes, 1), X;
                    case "uuid":
                        if (!Nb6.test(A.value)) throw Error(`Invalid UUID received: ${A.value}`);
                        let F = new Uint8Array(17);
                        return F[0] = 9, F.set((0, we.fromHex)(A.value.replace(/\-/g, "")), 1), F
                }
            }
            parse(A) {
                let Q = {},
                    B = 0;
                while (B < A.byteLength) {
                    let G = A.getUint8(B++),
                        Z = this.toUtf8(new Uint8Array(A.buffer, A.byteOffset + B, G));
                    switch (B += G, A.getUint8(B++)) {
                        case 0:
                            Q[Z] = {
                                type: ngB,
                                value: !0
                            };
                            break;
                        case 1:
                            Q[Z] = {
                                type: ngB,
                                value: !1
                            };
                            break;
                        case 2:
                            Q[Z] = {
                                type: Hb6,
                                value: A.getInt8(B++)
                            };
                            break;
                        case 3:
                            Q[Z] = {
                                type: Cb6,
                                value: A.getInt16(B, !1)
                            }, B += 2;
                            break;
                        case 4:
                            Q[Z] = {
                                type: Eb6,
                                value: A.getInt32(B, !1)
                            }, B += 4;
                            break;
                        case 5:
                            Q[Z] = {
                                type: zb6,
                                value: new stA(new Uint8Array(A.buffer, A.byteOffset + B, 8))
                            }, B += 8;
                            break;
                        case 6:
                            let I = A.getUint16(B, !1);
                            B += 2, Q[Z] = {
                                type: Ub6,
                                value: new Uint8Array(A.buffer, A.byteOffset + B, I)
                            }, B += I;
                            break;
                        case 7:
                            let Y = A.getUint16(B, !1);
                            B += 2, Q[Z] = {
                                type: $b6,
                                value: this.toUtf8(new Uint8Array(A.buffer, A.byteOffset + B, Y))
                            }, B += Y;
                            break;
                        case 8:
                            Q[Z] = {
                                type: wb6,
                                value: new Date(new stA(new Uint8Array(A.buffer, A.byteOffset + B, 8)).valueOf())
                            }, B += 8;
                            break;
                        case 9:
                            let J = new Uint8Array(A.buffer, A.byteOffset + B, 16);
                            B += 16, Q[Z] = {
                                type: qb6,
                                value: `${(0,we.toHex)(J.subarray(0,4))}-${(0,we.toHex)(J.subarray(4,6))}-${(0,we.toHex)(J.subarray(6,8))}-${(0,we.toHex)(J.subarray(8,10))}-${(0,we.toHex)(J.subarray(10))}`
                            };
                            break;
                        default:
                            throw Error("Unrecognized header type tag")
                    }
                }
                return Q
            }
        },
        ngB = "boolean",
        Hb6 = "byte",
        Cb6 = "short",
        Eb6 = "integer",
        zb6 = "long",
        Ub6 = "binary",
        $b6 = "string",
        wb6 = "timestamp",
        qb6 = "uuid",
        Nb6 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        Lb6 = atA(),
        rgB = 4,
        lp = rgB * 2,
        qe = 4,
        Mb6 = lp + qe * 2;

    function ogB({
        byteLength: A,
        byteOffset: Q,
        buffer: B
    }) {
        if (A < Mb6) throw Error("Provided message too short to accommodate event stream message overhead");
        let G = new DataView(B, Q, A),
            Z = G.getUint32(0, !1);
        if (A !== Z) throw Error("Reported message length does not match received message length");
        let I = G.getUint32(rgB, !1),
            Y = G.getUint32(lp, !1),
            J = G.getUint32(A - qe, !1),
            W = new Lb6.Crc32().update(new Uint8Array(B, Q, lp));
        if (Y !== W.digest()) throw Error(`The prelude checksum specified in the message (${Y}) does not match the calculated CRC32 checksum (${W.digest()})`);
        if (W.update(new Uint8Array(B, Q + lp, A - (lp + qe))), J !== W.digest()) throw Error(`The message checksum (${W.digest()}) did not match the expected value of ${J}`);
        return {
            headers: new DataView(B, Q + lp + qe, I),
            body: new Uint8Array(B, Q + lp + qe + I, Z - I - (lp + qe + qe))
        }
    }
    Ef(ogB, "splitMessage");
    var Ob6 = class {
            static {
                Ef(this, "EventStreamCodec")
            }
            constructor(A, Q) {
                this.headerMarshaller = new sgB(A, Q), this.messageBuffer = [], this.isEndOfStream = !1
            }
            feed(A) {
                this.messageBuffer.push(this.decode(A))
            }
            endOfStream() {
                this.isEndOfStream = !0
            }
            getMessage() {
                let A = this.messageBuffer.pop(),
                    Q = this.isEndOfStream;
                return {
                    getMessage() {
                        return A
                    },
                    isEndOfStream() {
                        return Q
                    }
                }
            }
            getAvailableMessages() {
                let A = this.messageBuffer;
                this.messageBuffer = [];
                let Q = this.isEndOfStream;
                return {
                    getMessages() {
                        return A
                    },
                    isEndOfStream() {
                        return Q
                    }
                }
            }
            encode({
                headers: A,
                body: Q
            }) {
                let B = this.headerMarshaller.format(A),
                    G = B.byteLength + Q.byteLength + 16,
                    Z = new Uint8Array(G),
                    I = new DataView(Z.buffer, Z.byteOffset, Z.byteLength),
                    Y = new Db6.Crc32;
                return I.setUint32(0, G, !1), I.setUint32(4, B.byteLength, !1), I.setUint32(8, Y.update(Z.subarray(0, 8)).digest(), !1), Z.set(B, 12), Z.set(Q, B.byteLength + 12), I.setUint32(G - 4, Y.update(Z.subarray(8, G - 4)).digest(), !1), Z
            }
            decode(A) {
                let {
                    headers: Q,
                    body: B
                } = ogB(A);
                return {
                    headers: this.headerMarshaller.parse(Q),
                    body: B
                }
            }
            formatHeaders(A) {
                return this.headerMarshaller.format(A)
            }
        },
        Rb6 = class {
            constructor(A) {
                this.options = A
            }
            static {
                Ef(this, "MessageDecoderStream")
            } [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async * asyncIterator() {
                for await (let A of this.options.inputStream) yield this.options.decoder.decode(A)
            }
        },
        Tb6 = class {
            constructor(A) {
                this.options = A
            }
            static {
                Ef(this, "MessageEncoderStream")
            } [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async * asyncIterator() {
                for await (let A of this.options.messageStream) yield this.options.encoder.encode(A);
                if (this.options.includeEndFrame) yield new Uint8Array(0)
            }
        },
        Pb6 = class {
            constructor(A) {
                this.options = A
            }
            static {
                Ef(this, "SmithyMessageDecoderStream")
            } [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async * asyncIterator() {
                for await (let A of this.options.messageStream) {
                    let Q = await this.options.deserializer(A);
                    if (Q === void 0) continue;
                    yield Q
                }
            }
        },
        jb6 = class {
            constructor(A) {
                this.options = A
            }
            static {
                Ef(this, "SmithyMessageEncoderStream")
            } [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async * asyncIterator() {
                for await (let A of this.options.inputStream) yield this.options.serializer(A)
            }
        }
});
var BuB = U((D9G, QuB) => {
    var {
        defineProperty: ttA,
        getOwnPropertyDescriptor: Sb6,
        getOwnPropertyNames: _b6
    } = Object, kb6 = Object.prototype.hasOwnProperty, etA = (A, Q) => ttA(A, "name", {
        value: Q,
        configurable: !0
    }), yb6 = (A, Q) => {
        for (var B in Q) ttA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, xb6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of _b6(Q))
                if (!kb6.call(A, Z) && Z !== B) ttA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Sb6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, vb6 = (A) => xb6(ttA({}, "__esModule", {
        value: !0
    }), A), egB = {};
    yb6(egB, {
        eventStreamPayloadHandlerProvider: () => gb6
    });
    QuB.exports = vb6(egB);
    var bb6 = rp1(),
        otA = UA("stream"),
        fb6 = class extends otA.Transform {
            static {
                etA(this, "EventSigningStream")
            }
            priorSignature;
            messageSigner;
            eventStreamCodec;
            systemClockOffsetProvider;
            constructor(A) {
                super({
                    autoDestroy: !0,
                    readableObjectMode: !0,
                    writableObjectMode: !0,
                    ...A
                });
                this.priorSignature = A.priorSignature, this.eventStreamCodec = A.eventStreamCodec, this.messageSigner = A.messageSigner, this.systemClockOffsetProvider = A.systemClockOffsetProvider
            }
            async _transform(A, Q, B) {
                try {
                    let G = new Date(Date.now() + await this.systemClockOffsetProvider()),
                        Z = {
                            ":date": {
                                type: "timestamp",
                                value: G
                            }
                        },
                        I = await this.messageSigner.sign({
                            message: {
                                body: A,
                                headers: Z
                            },
                            priorSignature: this.priorSignature
                        }, {
                            signingDate: G
                        });
                    this.priorSignature = I.signature;
                    let Y = this.eventStreamCodec.encode({
                        headers: {
                            ...Z,
                            ":chunk-signature": {
                                type: "binary",
                                value: AuB(I.signature)
                            }
                        },
                        body: A
                    });
                    return this.push(Y), B()
                } catch (G) {
                    B(G)
                }
            }
        };

    function AuB(A) {
        let Q = Buffer.from(A, "hex");
        return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength / Uint8Array.BYTES_PER_ELEMENT)
    }
    etA(AuB, "getSignatureBinary");
    var hb6 = class {
            static {
                etA(this, "EventStreamPayloadHandler")
            }
            messageSigner;
            eventStreamCodec;
            systemClockOffsetProvider;
            constructor(A) {
                this.messageSigner = A.messageSigner, this.eventStreamCodec = new bb6.EventStreamCodec(A.utf8Encoder, A.utf8Decoder), this.systemClockOffsetProvider = async () => A.systemClockOffset ?? 0
            }
            async handle(A, Q, B = {}) {
                let G = Q.request,
                    {
                        body: Z,
                        query: I
                    } = G;
                if (!(Z instanceof otA.Readable)) throw Error("Eventstream payload must be a Readable stream.");
                let Y = Z;
                G.body = new otA.PassThrough({
                    objectMode: !0
                });
                let W = G.headers?.authorization?.match(/Signature=([\w]+)$/)?.[1] ?? I?.["X-Amz-Signature"] ?? "",
                    X = new fb6({
                        priorSignature: W,
                        eventStreamCodec: this.eventStreamCodec,
                        messageSigner: await this.messageSigner(),
                        systemClockOffsetProvider: this.systemClockOffsetProvider
                    });
                (0, otA.pipeline)(Y, X, G.body, (V) => {
                    if (V) throw V
                });
                let F;
                try {
                    F = await A(Q)
                } catch (V) {
                    throw G.body.end(), V
                }
                return F
            }
        },
        gb6 = etA((A) => new hb6(A), "eventStreamPayloadHandlerProvider")
});
var WuB = U((E9G, JuB) => {
    var {
        defineProperty: AeA,
        getOwnPropertyDescriptor: ub6,
        getOwnPropertyNames: mb6
    } = Object, db6 = Object.prototype.hasOwnProperty, pGA = (A, Q) => AeA(A, "name", {
        value: Q,
        configurable: !0
    }), cb6 = (A, Q) => {
        for (var B in Q) AeA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, pb6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of mb6(Q))
                if (!db6.call(A, Z) && Z !== B) AeA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ub6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, lb6 = (A) => pb6(AeA({}, "__esModule", {
        value: !0
    }), A), GuB = {};
    cb6(GuB, {
        EventStreamMarshaller: () => YuB,
        eventStreamSerdeProvider: () => ib6
    });
    JuB.exports = lb6(GuB);
    var xwA = rp1();

    function ZuB(A) {
        let Q = 0,
            B = 0,
            G = null,
            Z = null,
            I = pGA((J) => {
                if (typeof J !== "number") throw Error("Attempted to allocate an event message where size was not a number: " + J);
                Q = J, B = 4, G = new Uint8Array(J), new DataView(G.buffer).setUint32(0, J, !1)
            }, "allocateMessage"),
            Y = pGA(async function*() {
                let J = A[Symbol.asyncIterator]();
                while (!0) {
                    let {
                        value: W,
                        done: X
                    } = await J.next();
                    if (X) {
                        if (!Q) return;
                        else if (Q === B) yield G;
                        else throw Error("Truncated event message received.");
                        return
                    }
                    let F = W.length,
                        V = 0;
                    while (V < F) {
                        if (!G) {
                            let D = F - V;
                            if (!Z) Z = new Uint8Array(4);
                            let H = Math.min(4 - B, D);
                            if (Z.set(W.slice(V, V + H), B), B += H, V += H, B < 4) break;
                            I(new DataView(Z.buffer).getUint32(0, !1)), Z = null
                        }
                        let K = Math.min(Q - B, F - V);
                        if (G.set(W.slice(V, V + K), B), B += K, V += K, Q && Q === B) yield G, G = null, Q = 0, B = 0
                    }
                }
            }, "iterator");
        return {
            [Symbol.asyncIterator]: Y
        }
    }
    pGA(ZuB, "getChunkedStream");

    function IuB(A, Q) {
        return async function(B) {
            let {
                value: G
            } = B.headers[":message-type"];
            if (G === "error") {
                let Z = Error(B.headers[":error-message"].value || "UnknownError");
                throw Z.name = B.headers[":error-code"].value, Z
            } else if (G === "exception") {
                let Z = B.headers[":exception-type"].value,
                    I = {
                        [Z]: B
                    },
                    Y = await A(I);
                if (Y.$unknown) {
                    let J = Error(Q(B.body));
                    throw J.name = Z, J
                }
                throw Y[Z]
            } else if (G === "event") {
                let Z = {
                        [B.headers[":event-type"].value]: B
                    },
                    I = await A(Z);
                if (I.$unknown) return;
                return I
            } else throw Error(`Unrecognizable event type: ${B.headers[":event-type"].value}`)
        }
    }
    pGA(IuB, "getMessageUnmarshaller");
    var YuB = class {
            static {
                pGA(this, "EventStreamMarshaller")
            }
            constructor({
                utf8Encoder: A,
                utf8Decoder: Q
            }) {
                this.eventStreamCodec = new xwA.EventStreamCodec(A, Q), this.utfEncoder = A
            }
            deserialize(A, Q) {
                let B = ZuB(A);
                return new xwA.SmithyMessageDecoderStream({
                    messageStream: new xwA.MessageDecoderStream({
                        inputStream: B,
                        decoder: this.eventStreamCodec
                    }),
                    deserializer: IuB(Q, this.utfEncoder)
                })
            }
            serialize(A, Q) {
                return new xwA.MessageEncoderStream({
                    messageStream: new xwA.SmithyMessageEncoderStream({
                        inputStream: A,
                        serializer: Q
                    }),
                    encoder: this.eventStreamCodec,
                    includeEndFrame: !0
                })
            }
        },
        ib6 = pGA((A) => new YuB(A), "eventStreamSerdeProvider")
});
var DuB = U((U9G, KuB) => {
    var {
        defineProperty: QeA,
        getOwnPropertyDescriptor: nb6,
        getOwnPropertyNames: ab6
    } = Object, sb6 = Object.prototype.hasOwnProperty, op1 = (A, Q) => QeA(A, "name", {
        value: Q,
        configurable: !0
    }), rb6 = (A, Q) => {
        for (var B in Q) QeA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, ob6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of ab6(Q))
                if (!sb6.call(A, Z) && Z !== B) QeA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = nb6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, tb6 = (A) => ob6(QeA({}, "__esModule", {
        value: !0
    }), A), XuB = {};
    rb6(XuB, {
        EventStreamMarshaller: () => VuB,
        eventStreamSerdeProvider: () => Qf6
    });
    KuB.exports = tb6(XuB);
    var eb6 = WuB(),
        Af6 = UA("stream");
    async function* FuB(A) {
        let Q = !1,
            B = !1,
            G = [];
        A.on("error", (Z) => {
            if (!Q) Q = !0;
            if (Z) throw Z
        }), A.on("data", (Z) => {
            G.push(Z)
        }), A.on("end", () => {
            Q = !0
        });
        while (!B) {
            let Z = await new Promise((I) => setTimeout(() => I(G.shift()), 0));
            if (Z) yield Z;
            B = Q && G.length === 0
        }
    }
    op1(FuB, "readabletoIterable");
    var VuB = class {
            static {
                op1(this, "EventStreamMarshaller")
            }
            constructor({
                utf8Encoder: A,
                utf8Decoder: Q
            }) {
                this.universalMarshaller = new eb6.EventStreamMarshaller({
                    utf8Decoder: Q,
                    utf8Encoder: A
                })
            }
            deserialize(A, Q) {
                let B = typeof A[Symbol.asyncIterator] === "function" ? A : FuB(A);
                return this.universalMarshaller.deserialize(B, Q)
            }
            serialize(A, Q) {
                return Af6.Readable.from(this.universalMarshaller.serialize(A, Q))
            }
        },
        Qf6 = op1((A) => new VuB(A), "eventStreamSerdeProvider")
});
var tp1 = U((w9G, NuB) => {
    var {
        defineProperty: BeA,
        getOwnPropertyDescriptor: Bf6,
        getOwnPropertyNames: Gf6
    } = Object, Zf6 = Object.prototype.hasOwnProperty, GeA = (A, Q) => BeA(A, "name", {
        value: Q,
        configurable: !0
    }), If6 = (A, Q) => {
        for (var B in Q) BeA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Yf6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Gf6(Q))
                if (!Zf6.call(A, Z) && Z !== B) BeA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Bf6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Jf6 = (A) => Yf6(BeA({}, "__esModule", {
        value: !0
    }), A), HuB = {};
    If6(HuB, {
        AlgorithmId: () => UuB,
        EndpointURLScheme: () => zuB,
        FieldPosition: () => $uB,
        HttpApiKeyAuthLocation: () => EuB,
        HttpAuthLocation: () => CuB,
        IniSectionType: () => wuB,
        RequestHandlerProtocol: () => quB,
        SMITHY_CONTEXT_KEY: () => Kf6,
        getDefaultClientConfiguration: () => Ff6,
        resolveDefaultRuntimeConfig: () => Vf6
    });
    NuB.exports = Jf6(HuB);