/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_007.js
 * 处理时间: 2025-12-09T03:41:36.411Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 7/61
 * Lines: 62807 - 64299 (1493 lines)
 * Original file: cli.js
 */

                regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
                regions: {
                    "aws-iso-e-global": {
                        description: "AWS ISOE (Europe) global region"
                    },
                    "eu-isoe-west-1": {
                        description: "EU ISOE West"
                    }
                }
            }, {
                id: "aws-iso-f",
                outputs: {
                    dnsSuffix: "csp.hci.ic.gov",
                    dualStackDnsSuffix: "csp.hci.ic.gov",
                    implicitGlobalRegion: "us-isof-south-1",
                    name: "aws-iso-f",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
                regions: {
                    "aws-iso-f-global": {
                        description: "AWS ISOF global region"
                    },
                    "us-isof-east-1": {
                        description: "US ISOF EAST"
                    },
                    "us-isof-south-1": {
                        description: "US ISOF SOUTH"
                    }
                }
            }, {
                id: "aws-eusc",
                outputs: {
                    dnsSuffix: "amazonaws.eu",
                    dualStackDnsSuffix: "amazonaws.eu",
                    implicitGlobalRegion: "eusc-de-east-1",
                    name: "aws-eusc",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
                regions: {
                    "eusc-de-east-1": {
                        description: "EU (Germany)"
                    }
                }
            }],
            version: "1.1"
        },
        bt0 = vt0,
        ft0 = "",
        ht0 = z4A((A) => {
            let {
                partitions: Q
            } = bt0;
            for (let G of Q) {
                let {
                    regions: Z,
                    outputs: I
                } = G;
                for (let [Y, J] of Object.entries(Z))
                    if (Y === A) return {
                        ...I,
                        ...J
                    }
            }
            for (let G of Q) {
                let {
                    regionRegex: Z,
                    outputs: I
                } = G;
                if (new RegExp(Z).test(A)) return {
                    ...I
                }
            }
            let B = Q.find((G) => G.id === "aws");
            if (!B) throw Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
            return {
                ...B.outputs
            }
        }, "partition"),
        gt0 = z4A((A, Q = "") => {
            bt0 = A, ft0 = Q
        }, "setPartitionInfo"),
        rK4 = z4A(() => {
            gt0(vt0, "")
        }, "useDefaultPartitionInfo"),
        oK4 = z4A(() => ft0, "getUserAgentPrefix"),
        ut0 = {
            isVirtualHostableS3Bucket: xt0,
            parseArn: sK4,
            partition: ht0
        };
    qZ.customEndpointFunctions.aws = ut0
});
var Vr = U((UJ7, cbA) => {
    var dt0, ct0, pt0, lt0, it0, nt0, at0, st0, rt0, ot0, tt0, et0, Ae0, mbA, Hz1, Qe0, Be0, Ge0, $4A, Ze0, Ie0, Ye0, Je0, We0, Xe0, Fe0, Ve0, Ke0, dbA, De0, He0, Ce0;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof cbA === "object" && typeof UJ7 === "object") A(B(Q, B(UJ7)));
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
        dt0 = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

            function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, ct0 = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, pt0 = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, lt0 = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, it0 = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, nt0 = function(I, Y, J, W, X, F) {
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
        }, at0 = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, st0 = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, rt0 = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, ot0 = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, tt0 = function(I, Y, J, W) {
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
        }, et0 = function(I, Y) {
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
        }, Ae0 = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) dbA(Y, I, J)
        }, dbA = Object.create ? function(I, Y, J, W) {
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
        }, mbA = function(I) {
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
        }, Hz1 = function(I, Y) {
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
        }, Qe0 = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(Hz1(arguments[Y]));
            return I
        }, Be0 = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, Ge0 = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, $4A = function(I) {
            return this instanceof $4A ? (this.v = I, this) : new $4A(I)
        }, Ze0 = function(I, Y, J) {
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
                w.value instanceof $4A ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
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
        }, Ie0 = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

            function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: $4A(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, Ye0 = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof mbA === "function" ? mbA(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
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
        }, Je0 = function(I, Y) {
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
        We0 = function(I) {
            if (I && I.__esModule) return I;
            var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") dbA(Y, I, J[W])
            }
            return B(Y, I), Y
        }, Xe0 = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, Fe0 = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, Ve0 = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, Ke0 = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, De0 = function(I, Y, J) {
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
        He0 = function(I) {
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
        }, Ce0 = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", dt0), A("__assign", ct0), A("__rest", pt0), A("__decorate", lt0), A("__param", it0), A("__esDecorate", nt0), A("__runInitializers", at0), A("__propKey", st0), A("__setFunctionName", rt0), A("__metadata", ot0), A("__awaiter", tt0), A("__generator", et0), A("__exportStar", Ae0), A("__createBinding", dbA), A("__values", mbA), A("__read", Hz1), A("__spread", Qe0), A("__spreadArrays", Be0), A("__spreadArray", Ge0), A("__await", $4A), A("__asyncGenerator", Ze0), A("__asyncDelegator", Ie0), A("__asyncValues", Ye0), A("__makeTemplateObject", Je0), A("__importStar", We0), A("__importDefault", Xe0), A("__classPrivateFieldGet", Fe0), A("__classPrivateFieldSet", Ve0), A("__classPrivateFieldIn", Ke0), A("__addDisposableResource", De0), A("__disposeResources", He0), A("__rewriteRelativeImportExtension", Ce0)
    })
});
var lN = U(($J7, we0) => {
    var {
        defineProperty: pbA,
        getOwnPropertyDescriptor: tK4,
        getOwnPropertyNames: eK4
    } = Object, AD4 = Object.prototype.hasOwnProperty, lbA = (A, Q) => pbA(A, "name", {
        value: Q,
        configurable: !0
    }), QD4 = (A, Q) => {
        for (var B in Q) pbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, BD4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of eK4(Q))
                if (!AD4.call(A, Z) && Z !== B) pbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = tK4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, GD4 = (A) => BD4(pbA({}, "__esModule", {
        value: !0
    }), A), Ee0 = {};
    QD4(Ee0, {
        emitWarningIfUnsupportedVersion: () => ZD4,
        setCredentialFeature: () => ze0,
        setFeature: () => Ue0,
        setTokenFeature: () => $e0,
        state: () => Cz1
    });
    we0.exports = GD4(Ee0);
    var Cz1 = {
            warningEmitted: !1
        },
        ZD4 = lbA((A) => {
            if (A && !Cz1.warningEmitted && parseInt(A.substring(1, A.indexOf("."))) < 18) Cz1.warningEmitted = !0, process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`)
        }, "emitWarningIfUnsupportedVersion");

    function ze0(A, Q, B) {
        if (!A.$source) A.$source = {};
        return A.$source[Q] = B, A
    }
    lbA(ze0, "setCredentialFeature");

    function Ue0(A, Q, B) {
        if (!A.__aws_sdk_context) A.__aws_sdk_context = {
            features: {}
        };
        else if (!A.__aws_sdk_context.features) A.__aws_sdk_context.features = {};
        A.__aws_sdk_context.features[Q] = B
    }
    lbA(Ue0, "setFeature");

    function $e0(A, Q, B) {
        if (!A.$source) A.$source = {};
        return A.$source[Q] = B, A
    }
    lbA($e0, "setTokenFeature")
});
var P2 = U((wJ7, Ne0) => {
    var {
        defineProperty: ibA,
        getOwnPropertyDescriptor: ID4,
        getOwnPropertyNames: YD4
    } = Object, JD4 = Object.prototype.hasOwnProperty, Kr = (A, Q) => ibA(A, "name", {
        value: Q,
        configurable: !0
    }), WD4 = (A, Q) => {
        for (var B in Q) ibA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, XD4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of YD4(Q))
                if (!JD4.call(A, Z) && Z !== B) ibA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ID4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, FD4 = (A) => XD4(ibA({}, "__esModule", {
        value: !0
    }), A), qe0 = {};
    WD4(qe0, {
        CredentialsProviderError: () => VD4,
        ProviderError: () => nbA,
        TokenProviderError: () => KD4,
        chain: () => DD4,
        fromStatic: () => HD4,
        memoize: () => CD4
    });
    Ne0.exports = FD4(qe0);
    var nbA = class A extends Error {
            constructor(Q, B = !0) {
                let G, Z = !0;
                if (typeof B === "boolean") G = void 0, Z = B;
                else if (B != null && typeof B === "object") G = B.logger, Z = B.tryNextLink ?? !0;
                super(Q);
                this.name = "ProviderError", this.tryNextLink = Z, Object.setPrototypeOf(this, A.prototype), G?.debug?.(`@smithy/property-provider ${Z?"->":"(!)"} ${Q}`)
            }
            static {
                Kr(this, "ProviderError")
            }
            static from(Q, B = !0) {
                return Object.assign(new this(Q.message, B), Q)
            }
        },
        VD4 = class A extends nbA {
            constructor(Q, B = !0) {
                super(Q, B);
                this.name = "CredentialsProviderError", Object.setPrototypeOf(this, A.prototype)
            }
            static {
                Kr(this, "CredentialsProviderError")
            }
        },
        KD4 = class A extends nbA {
            constructor(Q, B = !0) {
                super(Q, B);
                this.name = "TokenProviderError", Object.setPrototypeOf(this, A.prototype)
            }
            static {
                Kr(this, "TokenProviderError")
            }
        },
        DD4 = Kr((...A) => async () => {
            if (A.length === 0) throw new nbA("No providers in chain");
            let Q;
            for (let B of A) try {
                return await B()
            } catch (G) {
                if (Q = G, G?.tryNextLink) continue;
                throw G
            }
            throw Q
        }, "chain"),
        HD4 = Kr((A) => () => Promise.resolve(A), "fromStatic"),
        CD4 = Kr((A, Q, B) => {
            let G, Z, I, Y = !1,
                J = Kr(async () => {
                    if (!Z) Z = A();
                    try {
                        G = await Z, I = !0, Y = !1
                    } finally {
                        Z = void 0
                    }
                    return G
                }, "coalesceProvider");
            if (Q === void 0) return async (W) => {
                if (!I || W?.forceRefresh) G = await J();
                return G
            };
            return async (W) => {
                if (!I || W?.forceRefresh) G = await J();
                if (Y) return G;
                if (B && !B(G)) return Y = !0, G;
                if (Q(G)) return await J(), G;
                return G
            }
        }, "memoize")
});
var Oe0 = U((qJ7, Me0) => {
    var {
        defineProperty: abA,
        getOwnPropertyDescriptor: ED4,
        getOwnPropertyNames: zD4
    } = Object, UD4 = Object.prototype.hasOwnProperty, $D4 = (A, Q) => abA(A, "name", {
        value: Q,
        configurable: !0
    }), wD4 = (A, Q) => {
        for (var B in Q) abA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, qD4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of zD4(Q))
                if (!UD4.call(A, Z) && Z !== B) abA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ED4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ND4 = (A) => qD4(abA({}, "__esModule", {
        value: !0
    }), A), Le0 = {};
    wD4(Le0, {
        isArrayBuffer: () => LD4
    });
    Me0.exports = ND4(Le0);
    var LD4 = $D4((A) => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer")
});
var je0 = U((NJ7, Pe0) => {
    var {
        defineProperty: sbA,
        getOwnPropertyDescriptor: MD4,
        getOwnPropertyNames: OD4
    } = Object, RD4 = Object.prototype.hasOwnProperty, Ez1 = (A, Q) => sbA(A, "name", {
        value: Q,
        configurable: !0
    }), TD4 = (A, Q) => {
        for (var B in Q) sbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, PD4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of OD4(Q))
                if (!RD4.call(A, Z) && Z !== B) sbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = MD4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, jD4 = (A) => PD4(sbA({}, "__esModule", {
        value: !0
    }), A), Re0 = {};
    TD4(Re0, {
        escapeUri: () => Te0,
        escapeUriPath: () => _D4
    });
    Pe0.exports = jD4(Re0);
    var Te0 = Ez1((A) => encodeURIComponent(A).replace(/[!'()*]/g, SD4), "escapeUri"),
        SD4 = Ez1((A) => `%${A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
        _D4 = Ez1((A) => A.split("/").map(Te0).join("/"), "escapeUriPath")
});
var GAQ = U((LJ7, BAQ) => {
    var {
        defineProperty: BfA,
        getOwnPropertyDescriptor: kD4,
        getOwnPropertyNames: yD4
    } = Object, xD4 = Object.prototype.hasOwnProperty, cK = (A, Q) => BfA(A, "name", {
        value: Q,
        configurable: !0
    }), vD4 = (A, Q) => {
        for (var B in Q) BfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, bD4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of yD4(Q))
                if (!xD4.call(A, Z) && Z !== B) BfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = kD4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, fD4 = (A) => bD4(BfA({}, "__esModule", {
        value: !0
    }), A), xe0 = {};
    vD4(xe0, {
        ALGORITHM_IDENTIFIER: () => rbA,
        ALGORITHM_IDENTIFIER_V4A: () => mD4,
        ALGORITHM_QUERY_PARAM: () => ve0,
        ALWAYS_UNSIGNABLE_HEADERS: () => ce0,
        AMZ_DATE_HEADER: () => Mz1,
        AMZ_DATE_QUERY_PARAM: () => wz1,
        AUTH_HEADER: () => Lz1,
        CREDENTIAL_QUERY_PARAM: () => be0,
        DATE_HEADER: () => ge0,
        EVENT_ALGORITHM_IDENTIFIER: () => ie0,
        EXPIRES_QUERY_PARAM: () => he0,
        GENERATED_HEADERS: () => ue0,
        HOST_HEADER: () => gD4,
        KEY_TYPE_IDENTIFIER: () => Oz1,
        MAX_CACHE_SIZE: () => ae0,
        MAX_PRESIGNED_TTL: () => se0,
        PROXY_HEADER_PATTERN: () => pe0,
        REGION_SET_PARAM: () => hD4,
        SEC_HEADER_PATTERN: () => le0,
        SHA256_HEADER: () => QfA,
        SIGNATURE_HEADER: () => me0,
        SIGNATURE_QUERY_PARAM: () => qz1,
        SIGNED_HEADERS_QUERY_PARAM: () => fe0,
        SignatureV4: () => tD4,
        SignatureV4Base: () => QAQ,
        TOKEN_HEADER: () => de0,
        TOKEN_QUERY_PARAM: () => Nz1,
        UNSIGNABLE_PATTERNS: () => uD4,
        UNSIGNED_PAYLOAD: () => ne0,
        clearCredentialCache: () => cD4,
        createScope: () => tbA,
        getCanonicalHeaders: () => zz1,
        getCanonicalQuery: () => AAQ,
        getPayloadHash: () => ebA,
        getSigningKey: () => re0,
        hasHeader: () => oe0,
        moveHeadersToQuery: () => ee0,
        prepareRequest: () => $z1,
        signatureV4aContainer: () => eD4
    });
    BAQ.exports = fD4(xe0);
    var Se0 = L2(),
        ve0 = "X-Amz-Algorithm",
        be0 = "X-Amz-Credential",
        wz1 = "X-Amz-Date",
        fe0 = "X-Amz-SignedHeaders",
        he0 = "X-Amz-Expires",
        qz1 = "X-Amz-Signature",
        Nz1 = "X-Amz-Security-Token",
        hD4 = "X-Amz-Region-Set",
        Lz1 = "authorization",
        Mz1 = wz1.toLowerCase(),
        ge0 = "date",
        ue0 = [Lz1, Mz1, ge0],
        me0 = qz1.toLowerCase(),
        QfA = "x-amz-content-sha256",
        de0 = Nz1.toLowerCase(),
        gD4 = "host",
        ce0 = {
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
        pe0 = /^proxy-/,
        le0 = /^sec-/,
        uD4 = [/^proxy-/i, /^sec-/i],
        rbA = "AWS4-HMAC-SHA256",
        mD4 = "AWS4-ECDSA-P256-SHA256",
        ie0 = "AWS4-HMAC-SHA256-PAYLOAD",
        ne0 = "UNSIGNED-PAYLOAD",
        ae0 = 50,
        Oz1 = "aws4_request",
        se0 = 604800,
        pm = mm(),
        dD4 = L2(),
        w4A = {},
        obA = [],
        tbA = cK((A, Q, B) => `${A}/${Q}/${B}/${Oz1}`, "createScope"),
        re0 = cK(async (A, Q, B, G, Z) => {
            let I = await _e0(A, Q.secretAccessKey, Q.accessKeyId),
                Y = `${B}:${G}:${Z}:${(0,pm.toHex)(I)}:${Q.sessionToken}`;
            if (Y in w4A) return w4A[Y];
            obA.push(Y);
            while (obA.length > ae0) delete w4A[obA.shift()];
            let J = `AWS4${Q.secretAccessKey}`;
            for (let W of [B, G, Z, Oz1]) J = await _e0(A, J, W);
            return w4A[Y] = J
        }, "getSigningKey"),
        cD4 = cK(() => {
            obA.length = 0, Object.keys(w4A).forEach((A) => {
                delete w4A[A]
            })
        }, "clearCredentialCache"),
        _e0 = cK((A, Q, B) => {
            let G = new A(Q);
            return G.update((0, dD4.toUint8Array)(B)), G.digest()
        }, "hmac"),
        zz1 = cK(({
            headers: A
        }, Q, B) => {
            let G = {};
            for (let Z of Object.keys(A).sort()) {
                if (A[Z] == null) continue;
                let I = Z.toLowerCase();
                if (I in ce0 || Q?.has(I) || pe0.test(I) || le0.test(I)) {
                    if (!B || B && !B.has(I)) continue
                }
                G[I] = A[Z].trim().replace(/\s+/g, " ")
            }
            return G
        }, "getCanonicalHeaders"),
        pD4 = Oe0(),
        lD4 = L2(),
        ebA = cK(async ({
            headers: A,
            body: Q
        }, B) => {
            for (let G of Object.keys(A))
                if (G.toLowerCase() === QfA) return A[G];
            if (Q == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
            else if (typeof Q === "string" || ArrayBuffer.isView(Q) || (0, pD4.isArrayBuffer)(Q)) {
                let G = new B;
                return G.update((0, lD4.toUint8Array)(Q)), (0, pm.toHex)(await G.digest())
            }
            return ne0
        }, "getPayloadHash"),
        ke0 = L2(),
        iD4 = class {
            static {
                cK(this, "HeaderFormatter")
            }
            format(A) {
                let Q = [];
                for (let Z of Object.keys(A)) {
                    let I = (0, ke0.fromUtf8)(Z);
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
                        let Y = (0, ke0.fromUtf8)(A.value),
                            J = new DataView(new ArrayBuffer(3 + Y.byteLength));
                        J.setUint8(0, 7), J.setUint16(1, Y.byteLength, !1);
                        let W = new Uint8Array(J.buffer);
                        return W.set(Y, 3), W;
                    case "timestamp":
                        let X = new Uint8Array(9);
                        return X[0] = 8, X.set(aD4.fromNumber(A.value.valueOf()).bytes, 1), X;
                    case "uuid":
                        if (!nD4.test(A.value)) throw Error(`Invalid UUID received: ${A.value}`);
                        let F = new Uint8Array(17);
                        return F[0] = 9, F.set((0, pm.fromHex)(A.value.replace(/\-/g, "")), 1), F
                }
            }
        },
        nD4 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        aD4 = class A {
            constructor(Q) {
                if (this.bytes = Q, Q.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes")
            }
            static {
                cK(this, "Int64")
            }
            static fromNumber(Q) {
                if (Q > 9223372036854776000 || Q < -9223372036854776000) throw Error(`${Q} is too large (or, if negative, too small) to represent as an Int64`);
                let B = new Uint8Array(8);
                for (let G = 7, Z = Math.abs(Math.round(Q)); G > -1 && Z > 0; G--, Z /= 256) B[G] = Z;
                if (Q < 0) Uz1(B);
                return new A(B)
            }
            valueOf() {
                let Q = this.bytes.slice(0),
                    B = Q[0] & 128;
                if (B) Uz1(Q);
                return parseInt((0, pm.toHex)(Q), 16) * (B ? -1 : 1)
            }
            toString() {
                return String(this.valueOf())
            }
        };

    function Uz1(A) {
        for (let Q = 0; Q < 8; Q++) A[Q] ^= 255;
        for (let Q = 7; Q > -1; Q--)
            if (A[Q]++, A[Q] !== 0) break
    }
    cK(Uz1, "negate");
    var oe0 = cK((A, Q) => {
            A = A.toLowerCase();
            for (let B of Object.keys(Q))
                if (A === B.toLowerCase()) return !0;
            return !1
        }, "hasHeader"),
        te0 = cC(),
        ee0 = cK((A, Q = {}) => {
            let {
                headers: B,
                query: G = {}
            } = te0.HttpRequest.clone(A);
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
        $z1 = cK((A) => {
            A = te0.HttpRequest.clone(A);
            for (let Q of Object.keys(A.headers))
                if (ue0.indexOf(Q.toLowerCase()) > -1) delete A.headers[Q];
            return A
        }, "prepareRequest"),
        ye0 = K7(),
        sD4 = L2(),
        AfA = je0(),
        AAQ = cK(({
            query: A = {}
        }) => {
            let Q = [],
                B = {};
            for (let G of Object.keys(A)) {
                if (G.toLowerCase() === me0) continue;
                let Z = (0, AfA.escapeUri)(G);
                Q.push(Z);
                let I = A[G];
                if (typeof I === "string") B[Z] = `${Z}=${(0,AfA.escapeUri)(I)}`;
                else if (Array.isArray(I)) B[Z] = I.slice(0).reduce((Y, J) => Y.concat([`${Z}=${(0,AfA.escapeUri)(J)}`]), []).sort().join("&")
            }
            return Q.sort().map((G) => B[G]).filter((G) => G).join("&")
        }, "getCanonicalQuery"),
        rD4 = cK((A) => oD4(A).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601"),
        oD4 = cK((A) => {
            if (typeof A === "number") return new Date(A * 1000);
            if (typeof A === "string") {
                if (Number(A)) return new Date(Number(A) * 1000);
                return new Date(A)
            }
            return A
        }, "toDate"),
        QAQ = class {
            static {
                cK(this, "SignatureV4Base")
            }
            constructor({
                applyChecksum: A,
                credentials: Q,
                region: B,
                service: G,
                sha256: Z,
                uriEscapePath: I = !0
            }) {
                this.service = G, this.sha256 = Z, this.uriEscapePath = I, this.applyChecksum = typeof A === "boolean" ? A : !0, this.regionProvider = (0, ye0.normalizeProvider)(B), this.credentialProvider = (0, ye0.normalizeProvider)(Q)
            }
            createCanonicalRequest(A, Q, B) {
                let G = Object.keys(Q).sort();
                return `${A.method}
${this.getCanonicalPath(A)}
${AAQ(A)}
${G.map((Z)=>`${Z}:${Q[Z]}`).join(`
`)}

${G.join(";")}
${B}`
            }
            async createStringToSign(A, Q, B, G) {
                let Z = new this.sha256;
                Z.update((0, sD4.toUint8Array)(B));
                let I = await Z.digest();
                return `${G}
${A}
${Q}
${(0,pm.toHex)(I)}`
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
                    let B = `${A?.startsWith("/")?"/":""}${Q.join("/")}${Q.length>0&&A?.endsWith("/")?"/":""}`;
                    return (0, AfA.escapeUri)(B).replace(/%2F/g, "/")
                }
                return A
            }
            validateResolvedCredentials(A) {
                if (typeof A !== "object" || typeof A.accessKeyId !== "string" || typeof A.secretAccessKey !== "string") throw Error("Resolved credential object is not valid")
            }
            formatDate(A) {
                let Q = rD4(A).replace(/[\-:]/g, "");
                return {
                    longDate: Q,
                    shortDate: Q.slice(0, 8)
                }
            }
            getCanonicalHeaderList(A) {
                return Object.keys(A).sort().join(";")
            }
        },
        tD4 = class extends QAQ {
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
                this.headerFormatter = new iD4
            }
            static {
                cK(this, "SignatureV4")
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
                if (G > se0) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
                let H = tbA(D, V, X ?? this.service),
                    C = ee0($z1(A), {
                        unhoistableHeaders: I,
                        hoistableHeaders: J
                    });
                if (F.sessionToken) C.query[Nz1] = F.sessionToken;
                C.query[ve0] = rbA, C.query[be0] = `${F.accessKeyId}/${H}`, C.query[wz1] = K, C.query[he0] = G.toString(10);
                let E = zz1(C, Z, Y);
                return C.query[fe0] = this.getCanonicalHeaderList(E), C.query[qz1] = await this.getSignature(K, H, this.getSigningKey(F, V, D, X), this.createCanonicalRequest(C, E, await ebA(A, this.sha256))), C
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
                    X = tbA(J, Y, I ?? this.service),
                    F = await ebA({
                        headers: {},
                        body: Q
                    }, this.sha256),
                    V = new this.sha256;
                V.update(A);
                let K = (0, pm.toHex)(await V.digest()),
                    D = [ie0, W, X, G, K, F].join(`
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
                return J.update((0, Se0.toUint8Array)(A)), (0, pm.toHex)(await J.digest())
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
                    W = $z1(A),
                    {
                        longDate: X,
                        shortDate: F
                    } = this.formatDate(Q),
                    V = tbA(F, J, I ?? this.service);
                if (W.headers[Mz1] = X, Y.sessionToken) W.headers[de0] = Y.sessionToken;
                let K = await ebA(W, this.sha256);
                if (!oe0(QfA, W.headers) && this.applyChecksum) W.headers[QfA] = K;
                let D = zz1(W, G, B),
                    H = await this.getSignature(X, V, this.getSigningKey(Y, J, F, I), this.createCanonicalRequest(W, D, K));
                return W.headers[Lz1] = `${rbA} Credential=${Y.accessKeyId}/${V}, SignedHeaders=${this.getCanonicalHeaderList(D)}, Signature=${H}`, W
            }
            async getSignature(A, Q, B, G) {
                let Z = await this.createStringToSign(A, Q, G, rbA),
                    I = new this.sha256(await B);
                return I.update((0, Se0.toUint8Array)(Z)), (0, pm.toHex)(await I.digest())
            }
            getSigningKey(A, Q, B, G) {
                return re0(this.sha256, A, B, Q, G || this.service)
            }
        },
        eD4 = {
            SignatureV4a: null
        }
});
var jz1 = U((TJ7, EAQ) => {
    var {
        defineProperty: GfA,
        getOwnPropertyDescriptor: AH4,
        getOwnPropertyNames: QH4
    } = Object, BH4 = Object.prototype.hasOwnProperty, WW = (A, Q) => GfA(A, "name", {
        value: Q,
        configurable: !0
    }), GH4 = (A, Q) => {
        for (var B in Q) GfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, ZH4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of QH4(Q))
                if (!BH4.call(A, Z) && Z !== B) GfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = AH4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, IH4 = (A) => ZH4(GfA({}, "__esModule", {
        value: !0
    }), A), VAQ = {};
    GH4(VAQ, {
        AWSSDKSigV4Signer: () => XH4,
        AwsSdkSigV4ASigner: () => VH4,
        AwsSdkSigV4Signer: () => Pz1,
        NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => KH4,
        NODE_SIGV4A_CONFIG_OPTIONS: () => CH4,
        getBearerTokenEnvKey: () => KAQ,
        resolveAWSSDKSigV4Config: () => zH4,
        resolveAwsSdkSigV4AConfig: () => HH4,
        resolveAwsSdkSigV4Config: () => DAQ,
        validateSigningProperties: () => Tz1
    });
    EAQ.exports = IH4(VAQ);
    var YH4 = cC(),
        JH4 = cC(),
        ZAQ = WW((A) => JH4.HttpResponse.isInstance(A) ? A.headers?.date ?? A.headers?.Date : void 0, "getDateHeader"),
        Rz1 = WW((A) => new Date(Date.now() + A), "getSkewCorrectedDate"),
        WH4 = WW((A, Q) => Math.abs(Rz1(Q).getTime() - A) >= 300000, "isClockSkewed"),
        IAQ = WW((A, Q) => {
            let B = Date.parse(A);
            if (WH4(B, Q)) return B - Date.now();
            return Q
        }, "getUpdatedSystemClockOffset"),
        IDA = WW((A, Q) => {
            if (!Q) throw Error(`Property \`${A}\` is not resolved for AWS SDK SigV4Auth`);
            return Q
        }, "throwSigningPropertyError"),
        Tz1 = WW(async (A) => {
            let Q = IDA("context", A.context),
                B = IDA("config", A.config),
                G = Q.endpointV2?.properties?.authSchemes?.[0],
                I = await IDA("signer", B.signer)(G),
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
        Pz1 = class {
            static {
                WW(this, "AwsSdkSigV4Signer")
            }
            async sign(A, Q, B) {
                if (!YH4.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                let G = await Tz1(B),
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
                    signingDate: Rz1(Z.systemClockOffset),
                    signingRegion: Y,
                    signingService: J
                })
            }
            errorHandler(A) {
                return (Q) => {
                    let B = Q.ServerTime ?? ZAQ(Q.$response);
                    if (B) {
                        let G = IDA("config", A.config),
                            Z = G.systemClockOffset;
                        if (G.systemClockOffset = IAQ(B, G.systemClockOffset), G.systemClockOffset !== Z && Q.$metadata) Q.$metadata.clockSkewCorrected = !0
                    }
                    throw Q
                }
            }
            successHandler(A, Q) {
                let B = ZAQ(A);
                if (B) {
                    let G = IDA("config", Q.config);
                    G.systemClockOffset = IAQ(B, G.systemClockOffset)
                }
            }
        },
        XH4 = Pz1,
        FH4 = cC(),
        VH4 = class extends Pz1 {
            static {
                WW(this, "AwsSdkSigV4ASigner")
            }
            async sign(A, Q, B) {
                if (!FH4.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                let {
                    config: G,
                    signer: Z,
                    signingRegion: I,
                    signingRegionSet: Y,
                    signingName: J
                } = await Tz1(B), X = (await G.sigv4aSigningRegionSet?.() ?? Y ?? [I]).join(",");
                return await Z.sign(A, {
                    signingDate: Rz1(G.systemClockOffset),
                    signingRegion: X,
                    signingService: J
                })
            }
        },
        YAQ = WW((A) => typeof A === "string" && A.length > 0 ? A.split(",").map((Q) => Q.trim()) : [], "getArrayForCommaSeparatedString"),
        KAQ = WW((A) => `AWS_BEARER_TOKEN_${A.replace(/[\s-]/g,"_").toUpperCase()}`, "getBearerTokenEnvKey"),
        JAQ = "AWS_AUTH_SCHEME_PREFERENCE",
        WAQ = "auth_scheme_preference",
        KH4 = {
            environmentVariableSelector: WW((A, Q) => {
                if (Q?.signingName) {
                    if (KAQ(Q.signingName) in A) return ["httpBearerAuth"]
                }
                if (!(JAQ in A)) return;
                return YAQ(A[JAQ])
            }, "environmentVariableSelector"),
            configFileSelector: WW((A) => {
                if (!(WAQ in A)) return;
                return YAQ(A[WAQ])
            }, "configFileSelector"),
            default: []
        },