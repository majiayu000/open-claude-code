/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_029.js
 * 处理时间: 2025-12-09T03:41:36.660Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 29/61
 * Lines: 123875 - 125374 (1500 lines)
 * Original file: cli.js
 */

            Z = J
        }
        return B.push(A.slice(I)), B.map((Y) => {
            Y = Y.trim();
            let J = Y.length;
            if (J < 2) return Y;
            if (Y[0] === '"' && Y[J - 1] === '"') Y = Y.slice(1, J - 1);
            return Y.replace(/\\"/g, '"')
        })
    }, "splitHeader")
});
var ZS1 = U((VcQ) => {
    Object.defineProperty(VcQ, "__esModule", {
        value: !0
    });
    VcQ.resolveHttpAuthSchemeConfig = VcQ.defaultSSOOIDCHttpAuthSchemeProvider = VcQ.defaultSSOOIDCHttpAuthSchemeParametersProvider = void 0;
    var gO8 = OV(),
        GS1 = K7(),
        uO8 = async (A, Q, B) => {
            return {
                operation: (0, GS1.getSmithyContext)(Q).operation,
                region: await (0, GS1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    VcQ.defaultSSOOIDCHttpAuthSchemeParametersProvider = uO8;

    function mO8(A) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "sso-oauth",
                region: A.region
            },
            propertiesExtractor: (Q, B) => ({
                signingProperties: {
                    config: Q,
                    context: B
                }
            })
        }
    }

    function dO8(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var cO8 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "CreateToken": {
                Q.push(dO8(A));
                break
            }
            default:
                Q.push(mO8(A))
        }
        return Q
    };
    VcQ.defaultSSOOIDCHttpAuthSchemeProvider = cO8;
    var pO8 = (A) => {
        let Q = (0, gO8.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, GS1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    VcQ.resolveHttpAuthSchemeConfig = pO8
});
var YS1 = U((uw7, zcA) => {
    var DcQ, HcQ, CcQ, EcQ, zcQ, UcQ, $cQ, wcQ, qcQ, NcQ, LcQ, McQ, OcQ, CcA, IS1, RcQ, TcQ, PcQ, t6A, jcQ, ScQ, _cQ, kcQ, ycQ, xcQ, vcQ, bcQ, fcQ, EcA, hcQ, gcQ, ucQ;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof zcA === "object" && typeof uw7 === "object") A(B(Q, B(uw7)));
        else A(B(Q));

        function B(G, Z) {
            if (G !== Q)
                if (typeof Object.create === "function") Object.defineProperty(G, "__esModule", {
                    value: !0
                });
                else G.__esModule = !0;
            return function(I, Y) {
                return G[I] = Z ? Z(I, Y) : Y
            }
        }
    })(function(A) {
        var Q = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(I, Y) {
            I.__proto__ = Y
        } || function(I, Y) {
            for (var J in Y)
                if (Object.prototype.hasOwnProperty.call(Y, J)) I[J] = Y[J]
        };
        DcQ = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

            function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, HcQ = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, CcQ = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, EcQ = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, zcQ = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, UcQ = function(I, Y, J, W, X, F) {
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
        }, $cQ = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, wcQ = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, qcQ = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, NcQ = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, LcQ = function(I, Y, J, W) {
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
        }, McQ = function(I, Y) {
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
        }, OcQ = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) EcA(Y, I, J)
        }, EcA = Object.create ? function(I, Y, J, W) {
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
        }, CcA = function(I) {
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
        }, IS1 = function(I, Y) {
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
        }, RcQ = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(IS1(arguments[Y]));
            return I
        }, TcQ = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, PcQ = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, t6A = function(I) {
            return this instanceof t6A ? (this.v = I, this) : new t6A(I)
        }, jcQ = function(I, Y, J) {
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
                w.value instanceof t6A ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
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
        }, ScQ = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

            function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: t6A(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, _cQ = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof CcA === "function" ? CcA(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
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
        }, kcQ = function(I, Y) {
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
        ycQ = function(I) {
            if (I && I.__esModule) return I;
            var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") EcA(Y, I, J[W])
            }
            return B(Y, I), Y
        }, xcQ = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, vcQ = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, bcQ = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, fcQ = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, hcQ = function(I, Y, J) {
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
        gcQ = function(I) {
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
        }, ucQ = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", DcQ), A("__assign", HcQ), A("__rest", CcQ), A("__decorate", EcQ), A("__param", zcQ), A("__esDecorate", UcQ), A("__runInitializers", $cQ), A("__propKey", wcQ), A("__setFunctionName", qcQ), A("__metadata", NcQ), A("__awaiter", LcQ), A("__generator", McQ), A("__exportStar", OcQ), A("__createBinding", EcA), A("__values", CcA), A("__read", IS1), A("__spread", RcQ), A("__spreadArrays", TcQ), A("__spreadArray", PcQ), A("__await", t6A), A("__asyncGenerator", jcQ), A("__asyncDelegator", ScQ), A("__asyncValues", _cQ), A("__makeTemplateObject", kcQ), A("__importStar", ycQ), A("__importDefault", xcQ), A("__classPrivateFieldGet", vcQ), A("__classPrivateFieldSet", bcQ), A("__classPrivateFieldIn", fcQ), A("__addDisposableResource", hcQ), A("__disposeResources", gcQ), A("__rewriteRelativeImportExtension", ucQ)
    })
});
var JS1 = U((mw7, nO8) => {
    nO8.exports = {
        name: "@aws-sdk/nested-clients",
        version: "3.797.0",
        description: "Nested clients for AWS SDK packages.",
        main: "./dist-cjs/index.js",
        module: "./dist-es/index.js",
        types: "./dist-types/index.d.ts",
        scripts: {
            build: "yarn lint && concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
            "build:cjs": "node ../../scripts/compilation/inline nested-clients",
            "build:es": "tsc -p tsconfig.es.json",
            "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
            "build:types": "tsc -p tsconfig.types.json",
            "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
            clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
            lint: "node ../../scripts/validation/submodules-linter.js --pkg nested-clients",
            test: "yarn g:vitest run",
            "test:watch": "yarn g:vitest watch"
        },
        engines: {
            node: ">=18.0.0"
        },
        author: {
            name: "AWS SDK for JavaScript Team",
            url: "https://aws.amazon.com/javascript/"
        },
        license: "Apache-2.0",
        dependencies: {
            "@aws-crypto/sha256-browser": "5.2.0",
            "@aws-crypto/sha256-js": "5.2.0",
            "@aws-sdk/core": "3.796.0",
            "@aws-sdk/middleware-host-header": "3.775.0",
            "@aws-sdk/middleware-logger": "3.775.0",
            "@aws-sdk/middleware-recursion-detection": "3.775.0",
            "@aws-sdk/middleware-user-agent": "3.796.0",
            "@aws-sdk/region-config-resolver": "3.775.0",
            "@aws-sdk/types": "3.775.0",
            "@aws-sdk/util-endpoints": "3.787.0",
            "@aws-sdk/util-user-agent-browser": "3.775.0",
            "@aws-sdk/util-user-agent-node": "3.796.0",
            "@smithy/config-resolver": "^4.1.0",
            "@smithy/core": "^3.2.0",
            "@smithy/fetch-http-handler": "^5.0.2",
            "@smithy/hash-node": "^4.0.2",
            "@smithy/invalid-dependency": "^4.0.2",
            "@smithy/middleware-content-length": "^4.0.2",
            "@smithy/middleware-endpoint": "^4.1.0",
            "@smithy/middleware-retry": "^4.1.0",
            "@smithy/middleware-serde": "^4.0.3",
            "@smithy/middleware-stack": "^4.0.2",
            "@smithy/node-config-provider": "^4.0.2",
            "@smithy/node-http-handler": "^4.0.4",
            "@smithy/protocol-http": "^5.1.0",
            "@smithy/smithy-client": "^4.2.0",
            "@smithy/types": "^4.2.0",
            "@smithy/url-parser": "^4.0.2",
            "@smithy/util-base64": "^4.0.0",
            "@smithy/util-body-length-browser": "^4.0.0",
            "@smithy/util-body-length-node": "^4.0.0",
            "@smithy/util-defaults-mode-browser": "^4.0.8",
            "@smithy/util-defaults-mode-node": "^4.0.8",
            "@smithy/util-endpoints": "^3.0.2",
            "@smithy/util-middleware": "^4.0.2",
            "@smithy/util-retry": "^4.0.2",
            "@smithy/util-utf8": "^4.0.0",
            tslib: "^2.6.2"
        },
        devDependencies: {
            concurrently: "7.0.0",
            "downlevel-dts": "0.10.1",
            rimraf: "3.0.2",
            typescript: "~5.2.2"
        },
        typesVersions: {
            "<4.0": {
                "dist-types/*": ["dist-types/ts3.4/*"]
            }
        },
        files: ["./sso-oidc.d.ts", "./sso-oidc.js", "./sts.d.ts", "./sts.js", "dist-*/**"],
        browser: {
            "./dist-es/submodules/sso-oidc/runtimeConfig": "./dist-es/submodules/sso-oidc/runtimeConfig.browser",
            "./dist-es/submodules/sts/runtimeConfig": "./dist-es/submodules/sts/runtimeConfig.browser"
        },
        "react-native": {},
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients",
        repository: {
            type: "git",
            url: "https://github.com/aws/aws-sdk-js-v3.git",
            directory: "packages/nested-clients"
        },
        exports: {
            "./sso-oidc": {
                types: "./dist-types/submodules/sso-oidc/index.d.ts",
                module: "./dist-es/submodules/sso-oidc/index.js",
                node: "./dist-cjs/submodules/sso-oidc/index.js",
                import: "./dist-es/submodules/sso-oidc/index.js",
                require: "./dist-cjs/submodules/sso-oidc/index.js"
            },
            "./sts": {
                types: "./dist-types/submodules/sts/index.d.ts",
                module: "./dist-es/submodules/sts/index.js",
                node: "./dist-cjs/submodules/sts/index.js",
                import: "./dist-es/submodules/sts/index.js",
                require: "./dist-cjs/submodules/sts/index.js"
            }
        }
    }
});
var ccQ = U((mcQ) => {
    Object.defineProperty(mcQ, "__esModule", {
        value: !0
    });
    mcQ.fromBase64 = void 0;
    var aO8 = kI(),
        sO8 = /^[A-Za-z0-9+/]*={0,2}$/,
        rO8 = (A) => {
            if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
            if (!sO8.exec(A)) throw TypeError("Invalid base64 string.");
            let Q = (0, aO8.fromString)(A, "base64");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)
        };
    mcQ.fromBase64 = rO8
});
var icQ = U((pcQ) => {
    Object.defineProperty(pcQ, "__esModule", {
        value: !0
    });
    pcQ.toBase64 = void 0;
    var oO8 = kI(),
        tO8 = L2(),
        eO8 = (A) => {
            let Q;
            if (typeof A === "string") Q = (0, tO8.fromUtf8)(A);
            else Q = A;
            if (typeof Q !== "object" || typeof Q.byteOffset !== "number" || typeof Q.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
            return (0, oO8.fromArrayBuffer)(Q.buffer, Q.byteOffset, Q.byteLength).toString("base64")
        };
    pcQ.toBase64 = eO8
});
var FS1 = U((pw7, UcA) => {
    var {
        defineProperty: ncQ,
        getOwnPropertyDescriptor: AR8,
        getOwnPropertyNames: QR8
    } = Object, BR8 = Object.prototype.hasOwnProperty, WS1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of QR8(Q))
                if (!BR8.call(A, Z) && Z !== B) ncQ(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = AR8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, acQ = (A, Q, B) => (WS1(A, Q, "default"), B && WS1(B, Q, "default")), GR8 = (A) => WS1(ncQ({}, "__esModule", {
        value: !0
    }), A), XS1 = {};
    UcA.exports = GR8(XS1);
    acQ(XS1, ccQ(), UcA.exports);
    acQ(XS1, icQ(), UcA.exports)
});
var VpQ = U((XpQ) => {
    Object.defineProperty(XpQ, "__esModule", {
        value: !0
    });
    XpQ.ruleSet = void 0;
    var IpQ = "required",
        xL = "fn",
        vL = "argv",
        Q5A = "ref",
        scQ = !0,
        rcQ = "isSet",
        OCA = "booleanEquals",
        e6A = "error",
        A5A = "endpoint",
        Wb = "tree",
        VS1 = "PartitionResult",
        KS1 = "getAttr",
        ocQ = {
            [IpQ]: !1,
            type: "String"
        },
        tcQ = {
            [IpQ]: !0,
            default: !1,
            type: "Boolean"
        },
        ecQ = {
            [Q5A]: "Endpoint"
        },
        YpQ = {
            [xL]: OCA,
            [vL]: [{
                [Q5A]: "UseFIPS"
            }, !0]
        },
        JpQ = {
            [xL]: OCA,
            [vL]: [{
                [Q5A]: "UseDualStack"
            }, !0]
        },
        yL = {},
        ApQ = {
            [xL]: KS1,
            [vL]: [{
                [Q5A]: VS1
            }, "supportsFIPS"]
        },
        WpQ = {
            [Q5A]: VS1
        },
        QpQ = {
            [xL]: OCA,
            [vL]: [!0, {
                [xL]: KS1,
                [vL]: [WpQ, "supportsDualStack"]
            }]
        },
        BpQ = [YpQ],
        GpQ = [JpQ],
        ZpQ = [{
            [Q5A]: "Region"
        }],
        ZR8 = {
            version: "1.0",
            parameters: {
                Region: ocQ,
                UseDualStack: tcQ,
                UseFIPS: tcQ,
                Endpoint: ocQ
            },
            rules: [{
                conditions: [{
                    [xL]: rcQ,
                    [vL]: [ecQ]
                }],
                rules: [{
                    conditions: BpQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: e6A
                }, {
                    conditions: GpQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: e6A
                }, {
                    endpoint: {
                        url: ecQ,
                        properties: yL,
                        headers: yL
                    },
                    type: A5A
                }],
                type: Wb
            }, {
                conditions: [{
                    [xL]: rcQ,
                    [vL]: ZpQ
                }],
                rules: [{
                    conditions: [{
                        [xL]: "aws.partition",
                        [vL]: ZpQ,
                        assign: VS1
                    }],
                    rules: [{
                        conditions: [YpQ, JpQ],
                        rules: [{
                            conditions: [{
                                [xL]: OCA,
                                [vL]: [scQ, ApQ]
                            }, QpQ],
                            rules: [{
                                endpoint: {
                                    url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: yL,
                                    headers: yL
                                },
                                type: A5A
                            }],
                            type: Wb
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: e6A
                        }],
                        type: Wb
                    }, {
                        conditions: BpQ,
                        rules: [{
                            conditions: [{
                                [xL]: OCA,
                                [vL]: [ApQ, scQ]
                            }],
                            rules: [{
                                conditions: [{
                                    [xL]: "stringEquals",
                                    [vL]: [{
                                        [xL]: KS1,
                                        [vL]: [WpQ, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://oidc.{Region}.amazonaws.com",
                                    properties: yL,
                                    headers: yL
                                },
                                type: A5A
                            }, {
                                endpoint: {
                                    url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: yL,
                                    headers: yL
                                },
                                type: A5A
                            }],
                            type: Wb
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: e6A
                        }],
                        type: Wb
                    }, {
                        conditions: GpQ,
                        rules: [{
                            conditions: [QpQ],
                            rules: [{
                                endpoint: {
                                    url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: yL,
                                    headers: yL
                                },
                                type: A5A
                            }],
                            type: Wb
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: e6A
                        }],
                        type: Wb
                    }, {
                        endpoint: {
                            url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
                            properties: yL,
                            headers: yL
                        },
                        type: A5A
                    }],
                    type: Wb
                }],
                type: Wb
            }, {
                error: "Invalid Configuration: Missing Region",
                type: e6A
            }]
        };
    XpQ.ruleSet = ZR8
});
var HpQ = U((KpQ) => {
    Object.defineProperty(KpQ, "__esModule", {
        value: !0
    });
    KpQ.defaultEndpointResolver = void 0;
    var IR8 = y6A(),
        DS1 = II(),
        YR8 = VpQ(),
        JR8 = new DS1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        WR8 = (A, Q = {}) => {
            return JR8.get(A, () => (0, DS1.resolveEndpoint)(YR8.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    KpQ.defaultEndpointResolver = WR8;
    DS1.customEndpointFunctions.aws = IR8.awsEndpointFunctions
});
var $pQ = U((zpQ) => {
    Object.defineProperty(zpQ, "__esModule", {
        value: !0
    });
    zpQ.getRuntimeConfig = void 0;
    var XR8 = OV(),
        FR8 = nB(),
        VR8 = UJ(),
        KR8 = zJ(),
        CpQ = FS1(),
        EpQ = L2(),
        DR8 = ZS1(),
        HR8 = HpQ(),
        CR8 = (A) => {
            return {
                apiVersion: "2019-06-10",
                base64Decoder: A?.base64Decoder ?? CpQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? CpQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? HR8.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? DR8.defaultSSOOIDCHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new XR8.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new FR8.NoAuthSigner
                }],
                logger: A?.logger ?? new VR8.NoOpLogger,
                serviceId: A?.serviceId ?? "SSO OIDC",
                urlParser: A?.urlParser ?? KR8.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? EpQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? EpQ.toUtf8
            }
        };
    zpQ.getRuntimeConfig = CR8
});
var OpQ = U((LpQ) => {
    Object.defineProperty(LpQ, "__esModule", {
        value: !0
    });
    LpQ.getRuntimeConfig = void 0;
    var ER8 = YS1(),
        zR8 = ER8.__importDefault(JS1()),
        UR8 = OV(),
        wpQ = VCA(),
        $cA = S8(),
        $R8 = wX(),
        qpQ = X6(),
        B5A = xI(),
        NpQ = oG(),
        wR8 = qX(),
        qR8 = FW(),
        NR8 = $pQ(),
        LR8 = UJ(),
        MR8 = NX(),
        OR8 = UJ(),
        RR8 = (A) => {
            (0, OR8.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, MR8.resolveDefaultsModeConfig)(A),
                B = () => Q().then(LR8.loadConfigsForDefaultMode),
                G = (0, NR8.getRuntimeConfig)(A);
            (0, UR8.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                bodyLengthChecker: A?.bodyLengthChecker ?? wR8.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, wpQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: zR8.default.version
                }),
                maxAttempts: A?.maxAttempts ?? (0, B5A.loadConfig)(qpQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, B5A.loadConfig)($cA.NODE_REGION_CONFIG_OPTIONS, {
                    ...$cA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: NpQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, B5A.loadConfig)({
                    ...qpQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || qR8.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? $R8.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? NpQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, B5A.loadConfig)($cA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, B5A.loadConfig)($cA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, B5A.loadConfig)(wpQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    LpQ.getRuntimeConfig = RR8
});
var qcA = U((sw7, SpQ) => {
    var {
        defineProperty: wcA,
        getOwnPropertyDescriptor: TR8,
        getOwnPropertyNames: PR8
    } = Object, jR8 = Object.prototype.hasOwnProperty, ud = (A, Q) => wcA(A, "name", {
        value: Q,
        configurable: !0
    }), SR8 = (A, Q) => {
        for (var B in Q) wcA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, _R8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of PR8(Q))
                if (!jR8.call(A, Z) && Z !== B) wcA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = TR8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, kR8 = (A) => _R8(wcA({}, "__esModule", {
        value: !0
    }), A), RpQ = {};
    SR8(RpQ, {
        Field: () => vR8,
        Fields: () => bR8,
        HttpRequest: () => fR8,
        HttpResponse: () => hR8,
        IHttpRequest: () => TpQ.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => yR8,
        isValidHostname: () => jpQ,
        resolveHttpHandlerRuntimeConfig: () => xR8
    });
    SpQ.exports = kR8(RpQ);
    var yR8 = ud((A) => {
            return {
                setHttpHandler(Q) {
                    A.httpHandler = Q
                },
                httpHandler() {
                    return A.httpHandler
                },
                updateHttpClientConfig(Q, B) {
                    A.httpHandler?.updateHttpClientConfig(Q, B)
                },
                httpHandlerConfigs() {
                    return A.httpHandler.httpHandlerConfigs()
                }
            }
        }, "getHttpHandlerExtensionConfiguration"),
        xR8 = ud((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        TpQ = pj1(),
        vR8 = class {
            static {
                ud(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = TpQ.FieldPosition.HEADER,
                values: B = []
            }) {
                this.name = A, this.kind = Q, this.values = B
            }
            add(A) {
                this.values.push(A)
            }
            set(A) {
                this.values = A
            }
            remove(A) {
                this.values = this.values.filter((Q) => Q !== A)
            }
            toString() {
                return this.values.map((A) => A.includes(",") || A.includes(" ") ? `"${A}"` : A).join(", ")
            }
            get() {
                return this.values
            }
        },
        bR8 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                ud(this, "Fields")
            }
            setField(A) {
                this.entries[A.name.toLowerCase()] = A
            }
            getField(A) {
                return this.entries[A.toLowerCase()]
            }
            removeField(A) {
                delete this.entries[A.toLowerCase()]
            }
            getByType(A) {
                return Object.values(this.entries).filter((Q) => Q.kind === A)
            }
        },
        fR8 = class A {
            static {
                ud(this, "HttpRequest")
            }
            constructor(Q) {
                this.method = Q.method || "GET", this.hostname = Q.hostname || "localhost", this.port = Q.port, this.query = Q.query || {}, this.headers = Q.headers || {}, this.body = Q.body, this.protocol = Q.protocol ? Q.protocol.slice(-1) !== ":" ? `${Q.protocol}:` : Q.protocol : "https:", this.path = Q.path ? Q.path.charAt(0) !== "/" ? `/${Q.path}` : Q.path : "/", this.username = Q.username, this.password = Q.password, this.fragment = Q.fragment
            }
            static clone(Q) {
                let B = new A({
                    ...Q,
                    headers: {
                        ...Q.headers
                    }
                });
                if (B.query) B.query = PpQ(B.query);
                return B
            }
            static isInstance(Q) {
                if (!Q) return !1;
                let B = Q;
                return "method" in B && "protocol" in B && "hostname" in B && "path" in B && typeof B.query === "object" && typeof B.headers === "object"
            }
            clone() {
                return A.clone(this)
            }
        };

    function PpQ(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    ud(PpQ, "cloneQuery");
    var hR8 = class {
        static {
            ud(this, "HttpResponse")
        }
        constructor(A) {
            this.statusCode = A.statusCode, this.reason = A.reason, this.headers = A.headers || {}, this.body = A.body
        }
        static isInstance(A) {
            if (!A) return !1;
            let Q = A;
            return typeof Q.statusCode === "number" && typeof Q.headers === "object"
        }
    };

    function jpQ(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    ud(jpQ, "isValidHostname")
});
var ES1 = U((ew7, GlQ) => {
    var {
        defineProperty: NcA,
        getOwnPropertyDescriptor: gR8,
        getOwnPropertyNames: uR8
    } = Object, mR8 = Object.prototype.hasOwnProperty, L6 = (A, Q) => NcA(A, "name", {
        value: Q,
        configurable: !0
    }), dR8 = (A, Q) => {
        for (var B in Q) NcA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, cR8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of uR8(Q))
                if (!mR8.call(A, Z) && Z !== B) NcA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = gR8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, pR8 = (A) => cR8(NcA({}, "__esModule", {
        value: !0
    }), A), hpQ = {};
    dR8(hpQ, {
        $Command: () => mpQ.Command,
        AccessDeniedException: () => dpQ,
        AuthorizationPendingException: () => cpQ,
        CreateTokenCommand: () => QlQ,
        CreateTokenRequestFilterSensitiveLog: () => ppQ,
        CreateTokenResponseFilterSensitiveLog: () => lpQ,
        ExpiredTokenException: () => ipQ,
        InternalServerException: () => npQ,
        InvalidClientException: () => apQ,
        InvalidGrantException: () => spQ,
        InvalidRequestException: () => rpQ,
        InvalidScopeException: () => opQ,
        SSOOIDC: () => BlQ,
        SSOOIDCClient: () => upQ,
        SSOOIDCServiceException: () => Lw,
        SlowDownException: () => tpQ,
        UnauthorizedClientException: () => epQ,
        UnsupportedGrantTypeException: () => AlQ,
        __Client: () => gpQ.Client
    });
    GlQ.exports = pR8(hpQ);
    var _pQ = QCA(),
        lR8 = BCA(),
        iR8 = GCA(),
        kpQ = g6A(),
        nR8 = S8(),
        HS1 = nB(),
        aR8 = zX(),
        sR8 = E5(),
        ypQ = X6(),
        gpQ = UJ(),
        xpQ = ZS1(),
        rR8 = L6((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "sso-oauth"
            })
        }, "resolveClientEndpointParameters"),
        oR8 = {
            UseFIPS: {
                type: "builtInParams",
                name: "useFipsEndpoint"
            },
            Endpoint: {
                type: "builtInParams",
                name: "endpoint"
            },
            Region: {
                type: "builtInParams",
                name: "region"
            },
            UseDualStack: {
                type: "builtInParams",
                name: "useDualstackEndpoint"
            }
        },
        tR8 = OpQ(),
        vpQ = UCA(),
        bpQ = qcA(),
        fpQ = UJ(),
        eR8 = L6((A) => {
            let {
                httpAuthSchemes: Q,
                httpAuthSchemeProvider: B,
                credentials: G
            } = A;
            return {
                setHttpAuthScheme(Z) {
                    let I = Q.findIndex((Y) => Y.schemeId === Z.schemeId);
                    if (I === -1) Q.push(Z);
                    else Q.splice(I, 1, Z)
                },
                httpAuthSchemes() {
                    return Q
                },
                setHttpAuthSchemeProvider(Z) {
                    B = Z
                },
                httpAuthSchemeProvider() {
                    return B
                },
                setCredentials(Z) {
                    G = Z
                },
                credentials() {
                    return G
                }
            }
        }, "getHttpAuthExtensionConfiguration"),
        AT8 = L6((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        QT8 = L6((A, Q) => {
            let B = Object.assign((0, vpQ.getAwsRegionExtensionConfiguration)(A), (0, fpQ.getDefaultExtensionConfiguration)(A), (0, bpQ.getHttpHandlerExtensionConfiguration)(A), eR8(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, vpQ.resolveAwsRegionExtensionConfiguration)(B), (0, fpQ.resolveDefaultRuntimeConfig)(B), (0, bpQ.resolveHttpHandlerRuntimeConfig)(B), AT8(B))
        }, "resolveRuntimeExtensions"),
        upQ = class extends gpQ.Client {
            static {
                L6(this, "SSOOIDCClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, tR8.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = rR8(Q),
                    G = (0, kpQ.resolveUserAgentConfig)(B),
                    Z = (0, ypQ.resolveRetryConfig)(G),
                    I = (0, nR8.resolveRegionConfig)(Z),
                    Y = (0, _pQ.resolveHostHeaderConfig)(I),
                    J = (0, sR8.resolveEndpointConfig)(Y),
                    W = (0, xpQ.resolveHttpAuthSchemeConfig)(J),
                    X = QT8(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, kpQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, ypQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, aR8.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, _pQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, lR8.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, iR8.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, HS1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: xpQ.defaultSSOOIDCHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: L6(async (F) => new HS1.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, HS1.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        BT8 = UJ(),
        GT8 = E5(),
        ZT8 = sG(),
        mpQ = UJ(),
        G5A = UJ(),
        IT8 = UJ(),
        Lw = class A extends IT8.ServiceException {
            static {
                L6(this, "SSOOIDCServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        dpQ = class A extends Lw {
            static {
                L6(this, "AccessDeniedException")
            }
            name = "AccessDeniedException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "AccessDeniedException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        cpQ = class A extends Lw {
            static {
                L6(this, "AuthorizationPendingException")
            }
            name = "AuthorizationPendingException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "AuthorizationPendingException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        ppQ = L6((A) => ({
            ...A,
            ...A.clientSecret && {
                clientSecret: G5A.SENSITIVE_STRING
            },
            ...A.refreshToken && {
                refreshToken: G5A.SENSITIVE_STRING
            },
            ...A.codeVerifier && {
                codeVerifier: G5A.SENSITIVE_STRING
            }
        }), "CreateTokenRequestFilterSensitiveLog"),
        lpQ = L6((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: G5A.SENSITIVE_STRING
            },
            ...A.refreshToken && {
                refreshToken: G5A.SENSITIVE_STRING
            },
            ...A.idToken && {
                idToken: G5A.SENSITIVE_STRING
            }
        }), "CreateTokenResponseFilterSensitiveLog"),
        ipQ = class A extends Lw {
            static {
                L6(this, "ExpiredTokenException")
            }
            name = "ExpiredTokenException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "ExpiredTokenException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        npQ = class A extends Lw {
            static {
                L6(this, "InternalServerException")
            }
            name = "InternalServerException";
            $fault = "server";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "InternalServerException",
                    $fault: "server",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        apQ = class A extends Lw {
            static {
                L6(this, "InvalidClientException")
            }
            name = "InvalidClientException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "InvalidClientException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        spQ = class A extends Lw {
            static {
                L6(this, "InvalidGrantException")
            }
            name = "InvalidGrantException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "InvalidGrantException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        rpQ = class A extends Lw {
            static {
                L6(this, "InvalidRequestException")
            }
            name = "InvalidRequestException";
            $fault = "client";
            error;
            error_description;