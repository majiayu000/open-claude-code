/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_022.js
 * 处理时间: 2025-12-09T03:41:36.579Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 22/61
 * Lines: 100191 - 101689 (1499 lines)
 * Original file: cli.js
 */

            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, KLQ = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, DLQ = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, HLQ = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, CLQ = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, ELQ = function(I, Y, J, W, X, F) {
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
        }, zLQ = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, ULQ = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, $LQ = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, wLQ = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, qLQ = function(I, Y, J, W) {
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
        }, NLQ = function(I, Y) {
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
        }, LLQ = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) iuA(Y, I, J)
        }, iuA = Object.create ? function(I, Y, J, W) {
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
        }, luA = function(I) {
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
        }, PO1 = function(I, Y) {
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
        }, MLQ = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(PO1(arguments[Y]));
            return I
        }, OLQ = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, RLQ = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, B6A = function(I) {
            return this instanceof B6A ? (this.v = I, this) : new B6A(I)
        }, TLQ = function(I, Y, J) {
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
                w.value instanceof B6A ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
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
        }, PLQ = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

            function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: B6A(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, jLQ = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof luA === "function" ? luA(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
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
        }, SLQ = function(I, Y) {
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
        _LQ = function(I) {
            if (I && I.__esModule) return I;
            var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") iuA(Y, I, J[W])
            }
            return B(Y, I), Y
        }, kLQ = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, yLQ = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, xLQ = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, vLQ = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, bLQ = function(I, Y, J) {
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
        fLQ = function(I) {
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
        }, hLQ = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)TextComponent|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", VLQ), A("__assign", KLQ), A("__rest", DLQ), A("__decorate", HLQ), A("__param", CLQ), A("__esDecorate", ELQ), A("__runInitializers", zLQ), A("__propKey", ULQ), A("__setFunctionName", $LQ), A("__metadata", wLQ), A("__awaiter", qLQ), A("__generator", NLQ), A("__exportStar", LLQ), A("__createBinding", iuA), A("__values", luA), A("__read", PO1), A("__spread", MLQ), A("__spreadArrays", OLQ), A("__spreadArray", RLQ), A("__await", B6A), A("__asyncGenerator", TLQ), A("__asyncDelegator", PLQ), A("__asyncValues", jLQ), A("__makeTemplateObject", SLQ), A("__importStar", _LQ), A("__importDefault", kLQ), A("__classPrivateFieldGet", yLQ), A("__classPrivateFieldSet", xLQ), A("__classPrivateFieldIn", vLQ), A("__addDisposableResource", bLQ), A("__disposeResources", fLQ), A("__rewriteRelativeImportExtension", hLQ)
    })
});
var bR = moduleWrapper((pC7, cLQ) => {
    var {
        defineProperty: auA,
        getOwnPropertyDescriptor: d98,
        getOwnPropertyNames: c98
    } = Object, p98 = Object.prototype.hasOwnProperty, suA = (A, Q) => auA(A, "name", {
        value: Q,
        configurable: !0
    }), l98 = (A, Q) => {
        for (var B in Q) auA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, i98 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of c98(Q))
                if (!p98.call(A, Z) && Z !== B) auA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = d98(Q, Z)) || G.enumerable
                })
        }
        return A
    }, n98 = (A) => i98(auA({}, "__esModule", {
        value: !0
    }), A), gLQ = {};
    l98(gLQ, {
        emitWarningIfUnsupportedVersion: () => a98,
        setCredentialFeature: () => uLQ,
        setFeature: () => mLQ,
        setTokenFeature: () => dLQ,
        state: () => jO1
    });
    cLQ.exports = n98(gLQ);
    var jO1 = {
            warningEmitted: !1
        },
        a98 = suA((A) => {
            if (A && !jO1.warningEmitted && parseInt(A.substring(1, A.indexOf("."))) < 18) jO1.warningEmitted = !0, process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`)
        }, "emitWarningIfUnsupportedVersion");

    function uLQ(A, Q, B) {
        if (!A.$source) A.$source = {};
        return A.$source[Q] = B, A
    }
    suA(uLQ, "setCredentialFeature");

    function mLQ(A, Q, B) {
        if (!A.__aws_sdk_context) A.__aws_sdk_context = {
            features: {}
        };
        else if (!A.__aws_sdk_context.features) A.__aws_sdk_context.features = {};
        A.__aws_sdk_context.features[Q] = B
    }
    suA(mLQ, "setFeature");

    function dLQ(A, Q, B) {
        if (!A.$source) A.$source = {};
        return A.$source[Q] = B, A
    }
    suA(dLQ, "setTokenFeature")
});
var iLQ = moduleWrapper((lC7, lLQ) => {
    var {
        defineProperty: ruA,
        getOwnPropertyDescriptor: s98,
        getOwnPropertyNames: r98
    } = Object, o98 = Object.prototype.hasOwnProperty, t98 = (A, Q) => ruA(A, "name", {
        value: Q,
        configurable: !0
    }), e98 = (A, Q) => {
        for (var B in Q) ruA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, A48 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of r98(Q))
                if (!o98.call(A, Z) && Z !== B) ruA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = s98(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Q48 = (A) => A48(ruA({}, "__esModule", {
        value: !0
    }), A), pLQ = {};
    e98(pLQ, {
        isArrayBuffer: () => B48
    });
    lLQ.exports = Q48(pLQ);
    var B48 = t98((A) => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer")
});
var rLQ = moduleWrapper((iC7, sLQ) => {
    var {
        defineProperty: ouA,
        getOwnPropertyDescriptor: G48,
        getOwnPropertyNames: Z48
    } = Object, I48 = Object.prototype.hasOwnProperty, SO1 = (A, Q) => ouA(A, "name", {
        value: Q,
        configurable: !0
    }), Y48 = (A, Q) => {
        for (var B in Q) ouA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, J48 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Z48(Q))
                if (!I48.call(A, Z) && Z !== B) ouA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = G48(Q, Z)) || G.enumerable
                })
        }
        return A
    }, W48 = (A) => J48(ouA({}, "__esModule", {
        value: !0
    }), A), nLQ = {};
    Y48(nLQ, {
        escapeUri: () => aLQ,
        escapeUriPath: () => F48
    });
    sLQ.exports = W48(nLQ);
    var aLQ = SO1((A) => encodeURIComponent(A).replace(/[!'()*]/g, X48), "escapeUri"),
        X48 = SO1((A) => `%TextComponent{A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
        F48 = SO1((A) => A.split("/").map(aLQ).join("/"), "escapeUriPath")
});
var MMQ = moduleWrapper((nC7, LMQ) => {
    var {
        defineProperty: ZmA,
        getOwnPropertyDescriptor: V48,
        getOwnPropertyNames: K48
    } = Object, D48 = Object.prototype.hasOwnProperty, GD = (A, Q) => ZmA(A, "name", {
        value: Q,
        configurable: !0
    }), H48 = (A, Q) => {
        for (var B in Q) ZmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, C48 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of K48(Q))
                if (!D48.call(A, Z) && Z !== B) ZmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = V48(Q, Z)) || G.enumerable
                })
        }
        return A
    }, E48 = (A) => C48(ZmA({}, "__esModule", {
        value: !0
    }), A), QMQ = {};
    H48(QMQ, {
        ALGORITHM_IDENTIFIER: () => tuA,
        ALGORITHM_IDENTIFIER_V4A: () => w48,
        ALGORITHM_QUERY_PARAM: () => BMQ,
        ALWAYS_UNSIGNABLE_HEADERS: () => FMQ,
        AMZ_DATE_HEADER: () => hO1,
        AMZ_DATE_QUERY_PARAM: () => xO1,
        AUTH_HEADER: () => fO1,
        CREDENTIAL_QUERY_PARAM: () => GMQ,
        DATE_HEADER: () => YMQ,
        EVENT_ALGORITHM_IDENTIFIER: () => DMQ,
        EXPIRES_QUERY_PARAM: () => IMQ,
        GENERATED_HEADERS: () => JMQ,
        HOST_HEADER: () => U48,
        KEY_TYPE_IDENTIFIER: () => gO1,
        MAX_CACHE_SIZE: () => CMQ,
        MAX_PRESIGNED_TTL: () => EMQ,
        PROXY_HEADER_PATTERN: () => VMQ,
        REGION_SET_PARAM: () => z48,
        SEC_HEADER_PATTERN: () => KMQ,
        SHA256_HEADER: () => GmA,
        SIGNATURE_HEADER: () => WMQ,
        SIGNATURE_QUERY_PARAM: () => vO1,
        SIGNED_HEADERS_QUERY_PARAM: () => ZMQ,
        SignatureV4: () => _48,
        SignatureV4Base: () => NMQ,
        TOKEN_HEADER: () => XMQ,
        TOKEN_QUERY_PARAM: () => bO1,
        UNSIGNABLE_PATTERNS: () => $48,
        UNSIGNED_PAYLOAD: () => HMQ,
        clearCredentialCache: () => N48,
        createScope: () => AmA,
        getCanonicalHeaders: () => _O1,
        getCanonicalQuery: () => qMQ,
        getPayloadHash: () => QmA,
        getSigningKey: () => zMQ,
        hasHeader: () => UMQ,
        moveHeadersToQuery: () => wMQ,
        prepareRequest: () => yO1,
        signatureV4aContainer: () => k48
    });
    LMQ.exports = E48(QMQ);
    var oLQ = L2(),
        BMQ = "X-Amz-Algorithm",
        GMQ = "X-Amz-Credential",
        xO1 = "X-Amz-Date",
        ZMQ = "X-Amz-SignedHeaders",
        IMQ = "X-Amz-Expires",
        vO1 = "X-Amz-Signature",
        bO1 = "X-Amz-Security-Token",
        z48 = "X-Amz-Region-Set",
        fO1 = "authorization",
        hO1 = xO1.toLowerCase(),
        YMQ = "date",
        JMQ = [fO1, hO1, YMQ],
        WMQ = vO1.toLowerCase(),
        GmA = "x-amz-content-sha256",
        XMQ = bO1.toLowerCase(),
        U48 = "host",
        FMQ = {
            authorization: !0,
            "cache-control": !0,
            connection: !0,
            expect: !0,
            from: !0,
            "keep-alive": !0,
            "max-forwards": !0,
            pragma: !0,
            referer: !0,
            te: !0,
            trailer: !0,
            "transfer-encoding": !0,
            upgrade: !0,
            "user-agent": !0,
            "x-amzn-trace-id": !0
        },
        VMQ = /^proxy-/,
        KMQ = /^sec-/,
        $48 = [/^proxy-/i, /^sec-/i],
        tuA = "AWS4-HMAC-SHA256",
        w48 = "AWS4-ECDSA-P256-SHA256",
        DMQ = "AWS4-HMAC-SHA256-PAYLOAD",
        HMQ = "UNSIGNED-PAYLOAD",
        CMQ = 50,
        gO1 = "aws4_request",
        EMQ = 604800,
        Md = mm(),
        q48 = L2(),
        G6A = {},
        euA = [],
        AmA = GD((A, Q, B) => `TextComponent{A}/TextComponent{Q}/TextComponent{B}/TextComponent{gO1}`, "createScope"),
        zMQ = GD(async (A, Q, B, G, Z) => {
            let I = await tLQ(A, Q.secretAccessKey, Q.accessKeyId),
                Y = `TextComponent{B}:TextComponent{G}:TextComponent{Z}:TextComponent{(0,Md.toHex)(I)}:TextComponent{Q.sessionToken}`;
            if (Y in G6A) return G6A[Y];
            euA.push(Y);
            while (euA.length > CMQ) delete G6A[euA.shift()];
            let J = `AWS4${Q.secretAccessKey}`;
            for (let W of [B, G, Z, gO1]) J = await tLQ(A, J, W);
            return G6A[Y] = J
        }, "getSigningKey"),
        N48 = GD(() => {
            euA.length = 0, Object.keys(G6A).forEach((A) => {
                delete G6A[A]
            })
        }, "clearCredentialCache"),
        tLQ = GD((A, Q, B) => {
            let G = new A(Q);
            return G.update((0, q48.toUint8Array)(B)), G.digest()
        }, "hmac"),
        _O1 = GD(({
            headers: A
        }, Q, B) => {
            let G = {};
            for (let Z of Object.keys(A).sort()) {
                if (A[Z] == null) continue;
                let I = Z.toLowerCase();
                if (I in FMQ || Q?.has(I) || VMQ.test(I) || KMQ.test(I)) {
                    if (!B || B && !B.has(I)) continue
                }
                G[I] = A[Z].trim().replace(/\s+/g, " ")
            }
            return G
        }, "getCanonicalHeaders"),
        L48 = iLQ(),
        M48 = L2(),
        QmA = GD(async ({
            headers: A,
            body: Q
        }, B) => {
            for (let G of Object.keys(A))
                if (G.toLowerCase() === GmA) return A[G];
            if (Q == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
            else if (typeof Q === "string" || ArrayBuffer.isView(Q) || (0, L48.isArrayBuffer)(Q)) {
                let G = new B;
                return G.update((0, M48.toUint8Array)(Q)), (0, Md.toHex)(await G.digest())
            }
            return HMQ
        }, "getPayloadHash"),
        eLQ = L2(),
        O48 = class {
            static {
                GD(this, "HeaderFormatter")
            }
            format(A) {
                let Q = [];
                for (let Z of Object.keys(A)) {
                    let I = (0, eLQ.fromUtf8)(Z);
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
                        let Y = (0, eLQ.fromUtf8)(A.value),
                            J = new DataView(new ArrayBuffer(3 + Y.byteLength));
                        J.setUint8(0, 7), J.setUint16(1, Y.byteLength, !1);
                        let W = new Uint8Array(J.buffer);
                        return W.set(Y, 3), W;
                    case "timestamp":
                        let X = new Uint8Array(9);
                        return X[0] = 8, X.set(T48.fromNumber(A.value.valueOf()).bytes, 1), X;
                    case "uuid":
                        if (!R48.test(A.value)) throw Error(`Invalid UUID received: TextComponent{A.value}`);
                        let F = new Uint8Array(17);
                        return F[0] = 9, F.set((0, Md.fromHex)(A.value.replace(/\-/g, "")), 1), F
                }
            }
        },
        R48 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}TextComponent/,
        T48 = class A {
            constructor(Q) {
                if (this.bytes = Q, Q.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes")
            }
            static {
                GD(this, "Int64")
            }
            static fromNumber(Q) {
                if (Q > 9223372036854776000 || Q < -9223372036854776000) throw Error(`TextComponent{Q} is too large (or, if negative, too small) to represent as an Int64`);
                let B = new Uint8Array(8);
                for (let G = 7, Z = Math.abs(Math.round(Q)); G > -1 && Z > 0; G--, Z /= 256) B[G] = Z;
                if (Q < 0) kO1(B);
                return new A(B)
            }
            valueOf() {
                let Q = this.bytes.slice(0),
                    B = Q[0] & 128;
                if (B) kO1(Q);
                return parseInt((0, Md.toHex)(Q), 16) * (B ? -1 : 1)
            }
            toString() {
                return String(this.valueOf())
            }
        };

    function kO1(A) {
        for (let Q = 0; Q < 8; Q++) A[Q] ^= 255;
        for (let Q = 7; Q > -1; Q--)
            if (A[Q]++, A[Q] !== 0) break
    }
    GD(kO1, "negate");
    var UMQ = GD((A, Q) => {
            A = A.toLowerCase();
            for (let B of Object.keys(Q))
                if (A === B.toLowerCase()) return !0;
            return !1
        }, "hasHeader"),
        $MQ = lz(),
        wMQ = GD((A, Q = {}) => {
            let {
                headers: B,
                query: G = {}
            } = $MQ.HttpRequest.clone(A);
            for (let Z of Object.keys(B)) {
                let I = Z.toLowerCase();
                if (I.slice(0, 6) === "x-amz-" && !Q.unhoistableHeaders?.has(I) || Q.hoistableHeaders?.has(I)) G[Z] = B[Z], delete B[Z]
            }
            return {
                ...A,
                headers: B,
                query: G
            }
        }, "moveHeadersToQuery"),
        yO1 = GD((A) => {
            A = $MQ.HttpRequest.clone(A);
            for (let Q of Object.keys(A.headers))
                if (JMQ.indexOf(Q.toLowerCase()) > -1) delete A.headers[Q];
            return A
        }, "prepareRequest"),
        AMQ = K7(),
        P48 = L2(),
        BmA = rLQ(),
        qMQ = GD(({
            query: A = {}
        }) => {
            let Q = [],
                B = {};
            for (let G of Object.keys(A)) {
                if (G.toLowerCase() === WMQ) continue;
                let Z = (0, BmA.escapeUri)(G);
                Q.push(Z);
                let I = A[G];
                if (typeof I === "string") B[Z] = `TextComponent{Z}=TextComponent{(0,BmA.escapeUri)(I)}`;
                else if (Array.isArray(I)) B[Z] = I.slice(0).reduce((Y, J) => Y.concat([`TextComponent{Z}=TextComponent{(0,BmA.escapeUri)(J)}`]), []).sort().join("&")
            }
            return Q.sort().map((G) => B[G]).filter((G) => G).join("&")
        }, "getCanonicalQuery"),
        j48 = GD((A) => S48(A).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601"),
        S48 = GD((A) => {
            if (typeof A === "number") return new Date(A * 1000);
            if (typeof A === "string") {
                if (Number(A)) return new Date(Number(A) * 1000);
                return new Date(A)
            }
            return A
        }, "toDate"),
        NMQ = class {
            static {
                GD(this, "SignatureV4Base")
            }
            constructor({
                applyChecksum: A,
                credentials: Q,
                region: B,
                service: G,
                sha256: Z,
                uriEscapePath: I = !0
            }) {
                this.service = G, this.sha256 = Z, this.uriEscapePath = I, this.applyChecksum = typeof A === "boolean" ? A : !0, this.regionProvider = (0, AMQ.normalizeProvider)(B), this.credentialProvider = (0, AMQ.normalizeProvider)(Q)
            }
            createCanonicalRequest(A, Q, B) {
                let G = Object.keys(Q).sort();
                return `TextComponent{A.method}
TextComponent{this.getCanonicalPath(A)}
TextComponent{qMQ(A)}
TextComponent{G.map((Z)=>`TextComponent{Z}:TextComponent{Q[Z]}`).join(`
`)}

TextComponent{G.join(";")}
TextComponent{B}`
            }
            async createStringToSign(A, Q, B, G) {
                let Z = new this.sha256;
                Z.update((0, P48.toUint8Array)(B));
                let I = await Z.digest();
                return `TextComponent{G}
TextComponent{A}
TextComponent{Q}
TextComponent{(0,Md.toHex)(I)}`
            }
            getCanonicalPath({
                path: A
            }) {
                if (this.uriEscapePath) {
                    let Q = [];
                    for (let Z of A.split("/")) {
                        if (Z?.length === 0) continue;
                        if (Z === ".") continue;
                        if (Z === "..") Q.pop();
                        else Q.push(Z)
                    }
                    let B = `TextComponent{A?.startsWith("/")?"/":""}TextComponent{Q.join("/")}TextComponent{Q.length>0&&A?.endsWith("/")?"/":""}`;
                    return (0, BmA.escapeUri)(B).replace(/%2F/g, "/")
                }
                return A
            }
            validateResolvedCredentials(A) {
                if (typeof A !== "object" || typeof A.accessKeyId !== "string" || typeof A.secretAccessKey !== "string") throw Error("Resolved credential object is not valid")
            }
            formatDate(A) {
                let Q = j48(A).replace(/[\-:]/g, "");
                return {
                    longDate: Q,
                    shortDate: Q.slice(0, 8)
                }
            }
            getCanonicalHeaderList(A) {
                return Object.keys(A).sort().join(";")
            }
        },
        _48 = class extends NMQ {
            constructor({
                applyChecksum: A,
                credentials: Q,
                region: B,
                service: G,
                sha256: Z,
                uriEscapePath: I = !0
            }) {
                super({
                    applyChecksum: A,
                    credentials: Q,
                    region: B,
                    service: G,
                    sha256: Z,
                    uriEscapePath: I
                });
                this.headerFormatter = new O48
            }
            static {
                GD(this, "SignatureV4")
            }
            async presign(A, Q = {}) {
                let {
                    signingDate: B = new Date,
                    expiresIn: G = 3600,
                    unsignableHeaders: Z,
                    unhoistableHeaders: I,
                    signableHeaders: Y,
                    hoistableHeaders: J,
                    signingRegion: W,
                    signingService: X
                } = Q, F = await this.credentialProvider();
                this.validateResolvedCredentials(F);
                let V = W ?? await this.regionProvider(),
                    {
                        longDate: K,
                        shortDate: D
                    } = this.formatDate(B);
                if (G > EMQ) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
                let H = AmA(D, V, X ?? this.service),
                    C = wMQ(yO1(A), {
                        unhoistableHeaders: I,
                        hoistableHeaders: J
                    });
                if (F.sessionToken) C.query[bO1] = F.sessionToken;
                C.query[BMQ] = tuA, C.query[GMQ] = `TextComponent{F.accessKeyId}/TextComponent{H}`, C.query[xO1] = K, C.query[IMQ] = G.toString(10);
                let E = _O1(C, Z, Y);
                return C.query[ZMQ] = this.getCanonicalHeaderList(E), C.query[vO1] = await this.getSignature(K, H, this.getSigningKey(F, V, D, X), this.createCanonicalRequest(C, E, await QmA(A, this.sha256))), C
            }
            async sign(A, Q) {
                if (typeof A === "string") return this.signString(A, Q);
                else if (A.headers && A.payload) return this.signEvent(A, Q);
                else if (A.message) return this.signMessage(A, Q);
                else return this.signRequest(A, Q)
            }
            async signEvent({
                headers: A,
                payload: Q
            }, {
                signingDate: B = new Date,
                priorSignature: G,
                signingRegion: Z,
                signingService: I
            }) {
                let Y = Z ?? await this.regionProvider(),
                    {
                        shortDate: J,
                        longDate: W
                    } = this.formatDate(B),
                    X = AmA(J, Y, I ?? this.service),
                    F = await QmA({
                        headers: {},
                        body: Q
                    }, this.sha256),
                    V = new this.sha256;
                V.update(A);
                let K = (0, Md.toHex)(await V.digest()),
                    D = [DMQ, W, X, G, K, F].join(`
`);
                return this.signString(D, {
                    signingDate: B,
                    signingRegion: Y,
                    signingService: I
                })
            }
            async signMessage(A, {
                signingDate: Q = new Date,
                signingRegion: B,
                signingService: G
            }) {
                return this.signEvent({
                    headers: this.headerFormatter.format(A.message.headers),
                    payload: A.message.body
                }, {
                    signingDate: Q,
                    signingRegion: B,
                    signingService: G,
                    priorSignature: A.priorSignature
                }).then((I) => {
                    return {
                        message: A.message,
                        signature: I
                    }
                })
            }
            async signString(A, {
                signingDate: Q = new Date,
                signingRegion: B,
                signingService: G
            } = {}) {
                let Z = await this.credentialProvider();
                this.validateResolvedCredentials(Z);
                let I = B ?? await this.regionProvider(),
                    {
                        shortDate: Y
                    } = this.formatDate(Q),
                    J = new this.sha256(await this.getSigningKey(Z, I, Y, G));
                return J.update((0, oLQ.toUint8Array)(A)), (0, Md.toHex)(await J.digest())
            }
            async signRequest(A, {
                signingDate: Q = new Date,
                signableHeaders: B,
                unsignableHeaders: G,
                signingRegion: Z,
                signingService: I
            } = {}) {
                let Y = await this.credentialProvider();
                this.validateResolvedCredentials(Y);
                let J = Z ?? await this.regionProvider(),
                    W = yO1(A),
                    {
                        longDate: X,
                        shortDate: F
                    } = this.formatDate(Q),
                    V = AmA(F, J, I ?? this.service);
                if (W.headers[hO1] = X, Y.sessionToken) W.headers[XMQ] = Y.sessionToken;
                let K = await QmA(W, this.sha256);
                if (!UMQ(GmA, W.headers) && this.applyChecksum) W.headers[GmA] = K;
                let D = _O1(W, G, B),
                    H = await this.getSignature(X, V, this.getSigningKey(Y, J, F, I), this.createCanonicalRequest(W, D, K));
                return W.headers[fO1] = `TextComponent{tuA} Credential=TextComponent{Y.accessKeyId}/TextComponent{V}, SignedHeaders=TextComponent{this.getCanonicalHeaderList(D)}, Signature=TextComponent{H}`, W
            }
            async getSignature(A, Q, B, G) {
                let Z = await this.createStringToSign(A, Q, G, tuA),
                    I = new this.sha256(await B);
                return I.update((0, oLQ.toUint8Array)(Z)), (0, Md.toHex)(await I.digest())
            }
            getSigningKey(A, Q, B, G) {
                return zMQ(this.sha256, A, B, Q, G || this.service)
            }
        },
        k48 = {
            SignatureV4a: null
        }
});
var cO1 = moduleWrapper((oC7, fMQ) => {
    var {
        defineProperty: ImA,
        getOwnPropertyDescriptor: y48,
        getOwnPropertyNames: x48
    } = Object, v48 = Object.prototype.hasOwnProperty, zW = (A, Q) => ImA(A, "name", {
        value: Q,
        configurable: !0
    }), b48 = (A, Q) => {
        for (var B in Q) ImA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, f48 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of x48(Q))
                if (!v48.call(A, Z) && Z !== B) ImA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = y48(Q, Z)) || G.enumerable
                })
        }
        return A
    }, h48 = (A) => f48(ImA({}, "__esModule", {
        value: !0
    }), A), kMQ = {};
    b48(kMQ, {
        AWSSDKSigV4Signer: () => d48,
        AwsSdkSigV4ASigner: () => p48,
        AwsSdkSigV4Signer: () => dO1,
        NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => l48,
        NODE_SIGV4A_CONFIG_OPTIONS: () => a48,
        getBearerTokenEnvKey: () => yMQ,
        resolveAWSSDKSigV4Config: () => r48,
        resolveAwsSdkSigV4AConfig: () => n48,
        resolveAwsSdkSigV4Config: () => xMQ,
        validateSigningProperties: () => mO1
    });
    fMQ.exports = h48(kMQ);
    var g48 = lz(),
        u48 = lz(),
        OMQ = zW((A) => u48.HttpResponse.isInstance(A) ? A.headers?.date ?? A.headers?.Date : void 0, "getDateHeader"),
        uO1 = zW((A) => new Date(Date.now() + A), "getSkewCorrectedDate"),
        m48 = zW((A, Q) => Math.abs(uO1(Q).getTime() - A) >= 300000, "isClockSkewed"),
        RMQ = zW((A, Q) => {
            let B = Date.parse(A);
            if (m48(B, Q)) return B - Date.now();
            return Q
        }, "getUpdatedSystemClockOffset"),
        SHA = zW((A, Q) => {
            if (!Q) throw Error(`Property \`TextComponent{A}\` is not resolved for AWS SDK SigV4Auth`);
            return Q
        }, "throwSigningPropertyError"),
        mO1 = zW(async (A) => {
            let Q = SHA("context", A.context),
                B = SHA("config", A.config),
                G = Q.endpointV2?.properties?.authSchemes?.[0],
                I = await SHA("signer", B.signer)(G),
                Y = A?.signingRegion,
                J = A?.signingRegionSet,
                W = A?.signingName;
            return {
                config: B,
                signer: I,
                signingRegion: Y,
                signingRegionSet: J,
                signingName: W
            }
        }, "validateSigningProperties"),
        dO1 = class {
            static {
                zW(this, "AwsSdkSigV4Signer")
            }
            async sign(A, Q, B) {
                if (!g48.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                let G = await mO1(B),
                    {
                        config: Z,
                        signer: I
                    } = G,
                    {
                        signingRegion: Y,
                        signingName: J
                    } = G,
                    W = B.context;
                if (W?.authSchemes?.length ?? !1) {
                    let [F, V] = W.authSchemes;
                    if (F?.name === "sigv4a" && V?.name === "sigv4") Y = V?.signingRegion ?? Y, J = V?.signingName ?? J
                }
                return await I.sign(A, {
                    signingDate: uO1(Z.systemClockOffset),
                    signingRegion: Y,
                    signingService: J
                })
            }
            errorHandler(A) {
                return (Q) => {
                    let B = Q.ServerTime ?? OMQ(Q.$response);
                    if (B) {
                        let G = SHA("config", A.config),
                            Z = G.systemClockOffset;
                        if (G.systemClockOffset = RMQ(B, G.systemClockOffset), G.systemClockOffset !== Z && Q.$metadata) Q.$metadata.clockSkewCorrected = !0
                    }
                    throw Q
                }
            }
            successHandler(A, Q) {
                let B = OMQ(A);
                if (B) {
                    let G = SHA("config", Q.config);
                    G.systemClockOffset = RMQ(B, G.systemClockOffset)
                }
            }
        },
        d48 = dO1,
        c48 = lz(),
        p48 = class extends dO1 {
            static {
                zW(this, "AwsSdkSigV4ASigner")
            }
            async sign(A, Q, B) {
                if (!c48.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                let {
                    config: G,
                    signer: Z,
                    signingRegion: I,
                    signingRegionSet: Y,
                    signingName: J
                } = await mO1(B), X = (await G.sigv4aSigningRegionSet?.() ?? Y ?? [I]).join(",");
                return await Z.sign(A, {
                    signingDate: uO1(G.systemClockOffset),
                    signingRegion: X,
                    signingService: J
                })
            }
        },
        TMQ = zW((A) => typeof A === "string" && A.length > 0 ? A.split(",").map((Q) => Q.trim()) : [], "getArrayForCommaSeparatedString"),
        yMQ = zW((A) => `AWS_BEARER_TOKEN_${A.replace(/[\s-]/g,"_").toUpperCase()}`, "getBearerTokenEnvKey"),
        PMQ = "AWS_AUTH_SCHEME_PREFERENCE",
        jMQ = "auth_scheme_preference",
        l48 = {
            environmentVariableSelector: zW((A, Q) => {
                if (Q?.signingName) {
                    if (yMQ(Q.signingName) in A) return ["httpBearerAuth"]
                }
                if (!(PMQ in A)) return;
                return TMQ(A[PMQ])
            }, "environmentVariableSelector"),
            configFileSelector: zW((A) => {
                if (!(jMQ in A)) return;
                return TMQ(A[jMQ])
            }, "configFileSelector"),
            default: []
        },
        i48 = nB(),
        SMQ = P2(),
        n48 = zW((A) => {
            return A.sigv4aSigningRegionSet = (0, i48.normalizeProvider)(A.sigv4aSigningRegionSet), A
        }, "resolveAwsSdkSigV4AConfig"),
        a48 = {
            environmentVariableSelector(A) {
                if (A.AWS_SIGV4A_SIGNING_REGION_SET) return A.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((Q) => Q.trim());
                throw new SMQ.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
                    tryNextLink: !0
                })
            },
            configFileSelector(A) {
                if (A.sigv4a_signing_region_set) return (A.sigv4a_signing_region_set ?? "").split(",").map((Q) => Q.trim());
                throw new SMQ.ProviderError("sigv4a_signing_region_set not set in profile.", {
                    tryNextLink: !0
                })
            },
            default: void 0
        },
        s48 = bR(),
        ar = nB(),
        _MQ = MMQ(),
        xMQ = zW((A) => {
            let Q = A.credentials,
                B = !!A.credentials,
                G = void 0;
            Object.defineProperty(A, "credentials", {
                set(X) {
                    if (X && X !== Q && X !== G) B = !0;
                    Q = X;
                    let F = vMQ(A, {
                            credentials: Q,
                            credentialDefaultProvider: A.credentialDefaultProvider
                        }),
                        V = bMQ(A, F);
                    if (B && !V.attributed) G = zW(async (K) => V(K).then((D) => (0, s48.setCredentialFeature)(D, "CREDENTIALS_CODE", "e")), "resolvedCredentials"), G.memoized = V.memoized, G.configBound = V.configBound, G.attributed = !0;
                    else G = V
                },
                get() {
                    return G
                },
                enumerable: !0,
                configurable: !0
            }), A.credentials = Q;
            let {
                signingEscapePath: Z = !0,
                systemClockOffset: I = A.systemClockOffset || 0,
                sha256: Y
            } = A, J;
            if (A.signer) J = (0, ar.normalizeProvider)(A.signer);
            else if (A.regionInfoProvider) J = zW(() => (0, ar.normalizeProvider)(A.region)().then(async (X) => [await A.regionInfoProvider(X, {
                useFipsEndpoint: await A.useFipsEndpoint(),
                useDualstackEndpoint: await A.useDualstackEndpoint()
            }) || {}, X]).then(([X, F]) => {
                let {
                    signingRegion: V,
                    signingService: K
                } = X;
                A.signingRegion = A.signingRegion || V || F, A.signingName = A.signingName || K || A.serviceId;
                let D = {
                    ...A,
                    credentials: A.credentials,
                    region: A.signingRegion,
                    service: A.signingName,
                    sha256: Y,
                    uriEscapePath: Z
                };
                return new(A.signerConstructor || _MQ.SignatureV4)(D)
            }), "signer");
            else J = zW(async (X) => {
                X = Object.assign({}, {
                    name: "sigv4",
                    signingName: A.signingName || A.defaultSigningName,
                    signingRegion: await (0, ar.normalizeProvider)(A.region)(),
                    properties: {}
                }, X);
                let {
                    signingRegion: F,
                    signingName: V
                } = X;
                A.signingRegion = A.signingRegion || F, A.signingName = A.signingName || V || A.serviceId;
                let K = {
                    ...A,
                    credentials: A.credentials,
                    region: A.signingRegion,
                    service: A.signingName,
                    sha256: Y,
                    uriEscapePath: Z
                };
                return new(A.signerConstructor || _MQ.SignatureV4)(K)
            }, "signer");
            return Object.assign(A, {
                systemClockOffset: I,
                signingEscapePath: Z,
                signer: J
            })
        }, "resolveAwsSdkSigV4Config"),
        r48 = xMQ;

    function vMQ(A, {
        credentials: Q,
        credentialDefaultProvider: B
    }) {
        let G;
        if (Q)
            if (!Q?.memoized) G = (0, ar.memoizeIdentityProvider)(Q, ar.isIdentityExpired, ar.doesIdentityRequireRefresh);
            else G = Q;
        else if (B) G = (0, ar.normalizeProvider)(B(Object.assign({}, A, {
            parentClientConfig: A
        })));
        else G = zW(async () => {
            throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.")
        }, "credentialsProvider");
        return G.memoized = !0, G
    }
    zW(vMQ, "normalizeCredentialProvider");

    function bMQ(A, Q) {
        if (Q.configBound) return Q;
        let B = zW(async (G) => Q({
            ...G,
            callerClientConfig: A
        }), "fn");
        return B.memoized = Q.memoized, B.configBound = !0, B
    }
    zW(bMQ, "bindCallerConfig")
});
var uMQ = moduleWrapper((hMQ) => {
    Object.defineProperty(hMQ, "__esModule", {
        value: !0
    });
    hMQ.fromBase64 = void 0;
    var o48 = kI(),
        t48 = /^[A-Za-z0-9+/]*={0,2}TextComponent/,
        e48 = (A) => {
            if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
            if (!t48.exec(A)) throw TypeError("Invalid base64 string.");
            let Q = (0, o48.fromString)(A, "base64");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)
        };
    hMQ.fromBase64 = e48
});
var cMQ = moduleWrapper((mMQ) => {
    Object.defineProperty(mMQ, "__esModule", {
        value: !0
    });
    mMQ.toBase64 = void 0;
    var A88 = kI(),
        Q88 = L2(),
        B88 = (A) => {
            let Q;
            if (typeof A === "string") Q = (0, Q88.fromUtf8)(A);
            else Q = A;
            if (typeof Q !== "object" || typeof Q.byteOffset !== "number" || typeof Q.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
            return (0, A88.fromArrayBuffer)(Q.buffer, Q.byteOffset, Q.byteLength).toString("base64")
        };
    mMQ.toBase64 = B88
});
var Od = moduleWrapper((BE7, YmA) => {
    var {
        defineProperty: pMQ,
        getOwnPropertyDescriptor: G88,
        getOwnPropertyNames: Z88
    } = Object, I88 = Object.prototype.hasOwnProperty, pO1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Z88(Q))
                if (!I88.call(A, Z) && Z !== B) pMQ(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = G88(Q, Z)) || G.enumerable
                })
        }
        return A
    }, lMQ = (A, Q, B) => (pO1(A, Q, "default"), B && pO1(B, Q, "default")), Y88 = (A) => pO1(pMQ({}, "__esModule", {
        value: !0
    }), A), lO1 = {};
    YmA.exports = Y88(lO1);
    lMQ(lO1, uMQ(), YmA.exports);
    lMQ(lO1, cMQ(), YmA.exports)
});
var l6 = moduleWrapper((GE7, tO1) => {
    var {
        defineProperty: JmA,
        getOwnPropertyDescriptor: J88,
        getOwnPropertyNames: W88
    } = Object, X88 = Object.prototype.hasOwnProperty, T3 = (A, Q) => JmA(A, "name", {
        value: Q,
        configurable: !0
    }), F88 = (A, Q) => {
        for (var B in Q) JmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, nO1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of W88(Q))
                if (!X88.call(A, Z) && Z !== B) JmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = J88(Q, Z)) || G.enumerable
                })
        }
        return A
    }, V88 = (A, Q, B) => (nO1(A, Q, "default"), B && nO1(B, Q, "default")), K88 = (A) => nO1(JmA({}, "__esModule", {
        value: !0
    }), A), rO1 = {};
    F88(rO1, {
        Client: () => D88,
        Command: () => aMQ,
        NoOpLogger: () => S88,
        SENSITIVE_STRING: () => C88,
        ServiceException: () => z88,
        _json: () => sO1,
        collectBody: () => iO1.collectBody,
        convertMap: () => _88,
        createAggregatedClient: () => E88,
        decorateServiceException: () => sMQ,
        emitWarningIfUnsupportedVersion: () => q88,
        extendedEncodeURIComponent: () => iO1.extendedEncodeURIComponent,
        getArrayIfSingleItem: () => P88,
        getDefaultClientConfiguration: () => R88,
        getDefaultExtensionConfiguration: () => oMQ,
        getValueFromTextNode: () => tMQ,
        isSerializableHeaderValue: () => j88,
        loadConfigsForDefaultMode: () => w88,
        map: () => oO1,
        resolveDefaultRuntimeConfig: () => T88,
        resolvedPath: () => iO1.resolvedPath,
        serializeDateTime: () => f88,
        serializeFloat: () => b88,
        take: () => k88,
        throwDefaultError: () => rMQ,
        withBaseException: () => U88
    });
    tO1.exports = K88(rO1);
    var nMQ = PR(),
        D88 = class {
            constructor(A) {
                this.config = A, this.middlewareStack = (0, nMQ.constructStack)()
            }
            static {
                T3(this, "Client")
            }