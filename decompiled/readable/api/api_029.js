/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.884Z
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 29/30
 * Lines: 393318 - 394813 (1496 lines)
 * Original file: cli.js
 */

            function X(F, V, K, D) {
                Promise.resolve(D).then(function(H) {
                    F({
                        value: H,
                        done: K
                    })
                }, V)
            }
        }, NQ9 = function(I, Y) {
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
        LQ9 = function(I) {
            if (I && I.__esModule) return I;

var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") yZ1(Y, I, J[W])
            }
            return B(Y, I), Y
        }, MQ9 = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, OQ9 = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, RQ9 = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, TQ9 = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, PQ9 = function(I, Y, J) {
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
        jQ9 = function(I) {
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
        }, SQ9 = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", GQ9), A("__assign", ZQ9), A("__rest", IQ9), A("__decorate", YQ9), A("__param", JQ9), A("__esDecorate", WQ9), A("__runInitializers", XQ9), A("__propKey", FQ9), A("__setFunctionName", VQ9), A("__metadata", KQ9), A("__awaiter", DQ9), A("__generator", HQ9), A("__exportStar", CQ9), A("__createBinding", yZ1), A("__values", kZ1), A("__read", RJ0), A("__spread", EQ9), A("__spreadArrays", zQ9), A("__spreadArray", UQ9), A("__await", jXA), A("__asyncGenerator", $Q9), A("__asyncDelegator", wQ9), A("__asyncValues", qQ9), A("__makeTemplateObject", NQ9), A("__importStar", LQ9), A("__importDefault", MQ9), A("__classPrivateFieldGet", OQ9), A("__classPrivateFieldSet", RQ9), A("__classPrivateFieldIn", TQ9), A("__addDisposableResource", PQ9), A("__disposeResources", jQ9), A("__rewriteRelativeImportExtension", SQ9)
    })
});
var kQ9 = U((_Q9) => {
    Object.defineProperty(_Q9, "__esModule", {
        value: !0
    })
});
var xQ9 = U((yQ9) => {
    Object.defineProperty(yQ9, "__esModule", {
        value: !0
    })
});
var TJ0 = U((vQ9) => {
    Object.defineProperty(vQ9, "__esModule", {
        value: !0
    })
});
var PJ0 = U((nL3) => {
    function iL3(A, Q, B) {
        Q.split && (Q = Q.split("."));
        var G = 0,
            Z = Q.length,
            I = A,
            Y, J;
        while (G < Z) {
            if (J = "" + Q[G++], J === "__proto__" || J === "constructor" || J === "prototype") break;
            I = I[J] = G === Z ? B : typeof(Y = I[J]) === typeof Q ? Y : Q[G] * 0 !== 0 || !!~("" + Q[G]).indexOf(".") ? {} : []
        }
    }
    nL3.dset = iL3
});
var hQ9 = U((bQ9) => {
    Object.defineProperty(bQ9, "__esModule", {
        value: !0
    });
    bQ9.pickBy = void 0;

var sL3 = function(A, Q) {
        return Object.keys(A).filter(function(B) {
            return Q(B, A[B])
        }).reduce(function(B, G) {
            return B[G] = A[G], B
        }, {})
    };
    bQ9.pickBy = sL3
});
var jJ0 = U((gQ9) => {
    Object.defineProperty(gQ9, "__esModule", {
        value: !0
    });
    gQ9.ValidationError = void 0;
    var rL3 = dP(),
        oL3 = function(A) {
            rL3.__extends(Q, A);

function Q(B, G) {
                var Z = A.call(this, "".concat(B, " ").concat(G)) || this;
                return Z.field = B, Z
            }
            return Q
        }(Error);
    gQ9.ValidationError = oL3
});
var SJ0 = U((mQ9) => {
    Object.defineProperty(mQ9, "__esModule", {
        value: !0
    });
    mQ9.isPlainObject = mQ9.exists = mQ9.isFunction = mQ9.isNumber = mQ9.isString = void 0;

function tL3(A) {
        return typeof A === "string"
    }
    mQ9.isString = tL3;

function eL3(A) {
        return typeof A === "number"
    }
    mQ9.isNumber = eL3;

function AM3(A) {
        return typeof A === "function"
    }
    mQ9.isFunction = AM3;

function QM3(A) {
        return A !== void 0 && A !== null
    }
    mQ9.exists = QM3;

function BM3(A) {
        return Object.prototype.toString.call(A).slice(8, -1).toLowerCase() === "object"
    }
    mQ9.isPlainObject = BM3
});
var yJ0 = U((rQ9) => {
    Object.defineProperty(rQ9, "__esModule", {
        value: !0
    });
    rQ9.validateEvent = rQ9.assertTraits = rQ9.assertTrackEventProperties = rQ9.assertTrackEventName = rQ9.assertEventType = rQ9.assertEventExists = rQ9.assertUserIdentity = void 0;
    var Aa = jJ0(),
        KQA = SJ0(),
        _J0 = "is not a string",
        kJ0 = "is not an object",
        cQ9 = "is nil";

function pQ9(A) {
        var Q = ".userId/anonymousId/previousId/groupId",
            B = function(Z) {
                var I, Y, J;
                return (J = (Y = (I = Z.userId) !== null && I !== void 0 ? I : Z.anonymousId) !== null && Y !== void 0 ? Y : Z.groupId) !== null && J !== void 0 ? J : Z.previousId
            },
            G = B(A);
        if (!(0, KQA.exists)(G)) throw new Aa.ValidationError(Q, cQ9);
        else if (!(0, KQA.isString)(G)) throw new Aa.ValidationError(Q, _J0)
    }
    rQ9.assertUserIdentity = pQ9;

function lQ9(A) {
        if (!(0, KQA.exists)(A)) throw new Aa.ValidationError("Event", cQ9);
        if (typeof A !== "object") throw new Aa.ValidationError("Event", kJ0)
    }
    rQ9.assertEventExists = lQ9;

function iQ9(A) {
        if (!(0, KQA.isString)(A.type)) throw new Aa.ValidationError(".type", _J0)
    }
    rQ9.assertEventType = iQ9;

function nQ9(A) {
        if (!(0, KQA.isString)(A.event)) throw new Aa.ValidationError(".event", _J0)
    }
    rQ9.assertTrackEventName = nQ9;

function aQ9(A) {
        if (!(0, KQA.isPlainObject)(A.properties)) throw new Aa.ValidationError(".properties", kJ0)
    }
    rQ9.assertTrackEventProperties = aQ9;

function sQ9(A) {
        if (!(0, KQA.isPlainObject)(A.traits)) throw new Aa.ValidationError(".traits", kJ0)
    }
    rQ9.assertTraits = sQ9;

function JM3(A) {
        if (lQ9(A), iQ9(A), A.type === "track") nQ9(A), aQ9(A);
        if (["group", "identify"].includes(A.type)) sQ9(A);
        pQ9(A)
    }
    rQ9.validateEvent = JM3
});
var AB9 = U((xJ0) => {
    Object.defineProperty(xJ0, "__esModule", {
        value: !0
    });
    xJ0.EventFactory = void 0;
    var P6 = dP();
    P6.__exportStar(TJ0(), xJ0);
    var tQ9 = PJ0(),
        HM3 = hQ9(),
        CM3 = yJ0(),
        EM3 = function() {
            function A(Q) {
                this.user = Q.user, this.createMessageId = Q.createMessageId
            }
            return A.prototype.track = function(Q, B, G, Z) {
                return this.normalize(P6.__assign(P6.__assign({}, this.baseEvent()), {
                    event: Q,
                    type: "track",
                    properties: B !== null && B !== void 0 ? B : {},
                    options: P6.__assign({}, G),
                    integrations: P6.__assign({}, Z)
                }))
            }, A.prototype.page = function(Q, B, G, Z, I) {
                var Y, J = {
                    type: "page",
                    properties: P6.__assign({}, G),
                    options: P6.__assign({}, Z),
                    integrations: P6.__assign({}, I)
                };
                if (Q !== null) J.category = Q, J.properties = (Y = J.properties) !== null && Y !== void 0 ? Y : {}, J.properties.category = Q;
                if (B !== null) J.name = B;
                return this.normalize(P6.__assign(P6.__assign({}, this.baseEvent()), J))
            }, A.prototype.screen = function(Q, B, G, Z, I) {
                var Y = {
                    type: "screen",
                    properties: P6.__assign({}, G),
                    options: P6.__assign({}, Z),
                    integrations: P6.__assign({}, I)
                };
                if (Q !== null) Y.category = Q;
                if (B !== null) Y.name = B;
                return this.normalize(P6.__assign(P6.__assign({}, this.baseEvent()), Y))
            }, A.prototype.identify = function(Q, B, G, Z) {
                return this.normalize(P6.__assign(P6.__assign({}, this.baseEvent()), {
                    type: "identify",
                    userId: Q,
                    traits: B !== null && B !== void 0 ? B : {},
                    options: P6.__assign({}, G),
                    integrations: Z
                }))
            }, A.prototype.group = function(Q, B, G, Z) {
                return this.normalize(P6.__assign(P6.__assign({}, this.baseEvent()), {
                    type: "group",
                    traits: B !== null && B !== void 0 ? B : {},
                    options: P6.__assign({}, G),
                    integrations: P6.__assign({}, Z),
                    groupId: Q
                }))
            }, A.prototype.alias = function(Q, B, G, Z) {
                var I = {
                    userId: Q,
                    type: "alias",
                    options: P6.__assign({}, G),
                    integrations: P6.__assign({}, Z)
                };
                if (B !== null) I.previousId = B;
                if (Q === void 0) return this.normalize(P6.__assign(P6.__assign({}, I), this.baseEvent()));
                return this.normalize(P6.__assign(P6.__assign({}, this.baseEvent()), I))
            }, A.prototype.baseEvent = function() {
                var Q = {
                    integrations: {},
                    options: {}
                };
                if (!this.user) return Q;
                var B = this.user;
                if (B.id()) Q.userId = B.id();
                if (B.anonymousId()) Q.anonymousId = B.anonymousId();
                return Q
            }, A.prototype.context = function(Q) {
                var B, G = ["userId", "anonymousId", "timestamp"];
                delete Q.integrations;
                var Z = Object.keys(Q),
                    I = (B = Q.context) !== null && B !== void 0 ? B : {},
                    Y = {};
                return Z.forEach(function(J) {
                    if (J === "context") return;
                    if (G.includes(J))(0, tQ9.dset)(Y, J, Q[J]);
                    else(0, tQ9.dset)(I, J, Q[J])
                }), [I, Y]
            }, A.prototype.normalize = function(Q) {
                var B, G, Z = Object.keys((B = Q.integrations) !== null && B !== void 0 ? B : {}).reduce(function(D, H) {
                    var C, E;
                    return P6.__assign(P6.__assign({}, D), (C = {}, C[H] = Boolean((E = Q.integrations) === null || E === void 0 ? void 0 : E[H]), C))
                }, {});
                Q.options = (0, HM3.pickBy)(Q.options || {}, function(D, H) {
                    return H !== void 0
                });
                var I = P6.__assign(P6.__assign({}, Z), (G = Q.options) === null || G === void 0 ? void 0 : G.integrations),
                    Y = Q.options ? this.context(Q.options) : [],
                    J = Y[0],
                    W = Y[1],
                    X = Q.options,
                    F = P6.__rest(Q, ["options"]),
                    V = P6.__assign(P6.__assign(P6.__assign({
                        timestamp: new Date
                    }, F), {
                        integrations: I,
                        context: J
                    }), W),
                    K = P6.__assign(P6.__assign({}, V), {
                        messageId: this.createMessageId()
                    });
                return (0, CM3.validateEvent)(K), K
            }, A
        }();
    xJ0.EventFactory = EM3
});
var vJ0 = U((GB9) => {
    Object.defineProperty(GB9, "__esModule", {
        value: !0
    });
    GB9.invokeCallback = GB9.sleep = GB9.pTimeout = void 0;

function QB9(A, Q) {
        return new Promise(function(B, G) {
            var Z = setTimeout(function() {
                G(Error("Promise timed out"))
            }, Q);
            A.then(function(I) {
                return clearTimeout(Z), B(I)
            }).catch(G)
        })
    }
    GB9.pTimeout = QB9;

function BB9(A) {
        return new Promise(function(Q) {
            return setTimeout(Q, A)
        })
    }
    GB9.sleep = BB9;

function zM3(A, Q, B) {
        var G = function() {
            try {
                return Promise.resolve(Q(A))
            } catch (Z) {
                return Promise.reject(Z)
            }
        };
        return BB9(B).then(function() {
            return QB9(G(), 1000)
        }).catch(function(Z) {
            A === null || A === void 0 || A.log("warn", "Callback Error", {
                error: Z
            }), A === null || A === void 0 || A.stats.increment("callback_error")
        }).then(function() {
            return A
        })
    }
    GB9.invokeCallback = zM3
});
var hZ1 = U((NNZ, fZ1) => {
    var IB9, YB9, JB9, WB9, XB9, FB9, VB9, KB9, DB9, HB9, CB9, EB9, zB9, vZ1, bJ0, UB9, $B9, wB9, SXA, qB9, NB9, LB9, MB9, OB9, RB9, TB9, PB9, jB9, bZ1, SB9, _B9, kB9;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof fZ1 === "object" && typeof NNZ === "object") A(B(Q, B(NNZ)));
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
        IB9 = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, YB9 = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, JB9 = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, WB9 = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, XB9 = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, FB9 = function(I, Y, J, W, X, F) {
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
        }, VB9 = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, KB9 = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, DB9 = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, HB9 = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, CB9 = function(I, Y, J, W) {
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
        }, EB9 = function(I, Y) {
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
        }, zB9 = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) bZ1(Y, I, J)
        }, bZ1 = Object.create ? function(I, Y, J, W) {
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
        }, vZ1 = function(I) {
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
        }, bJ0 = function(I, Y) {
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
        }, UB9 = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(bJ0(arguments[Y]));
            return I
        }, $B9 = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, wB9 = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, SXA = function(I) {
            return this instanceof SXA ? (this.v = I, this) : new SXA(I)
        }, qB9 = function(I, Y, J) {
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
                w.value instanceof SXA ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
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
        }, NB9 = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: SXA(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, LB9 = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof vZ1 === "function" ? vZ1(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
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
        }, MB9 = function(I, Y) {
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
        OB9 = function(I) {
            if (I && I.__esModule) return I;

var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") bZ1(Y, I, J[W])
            }
            return B(Y, I), Y
        }, RB9 = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, TB9 = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, PB9 = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, jB9 = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, SB9 = function(I, Y, J) {
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
        _B9 = function(I) {
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
        }, kB9 = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", IB9), A("__assign", YB9), A("__rest", JB9), A("__decorate", WB9), A("__param", XB9), A("__esDecorate", FB9), A("__runInitializers", VB9), A("__propKey", KB9), A("__setFunctionName", DB9), A("__metadata", HB9), A("__awaiter", CB9), A("__generator", EB9), A("__exportStar", zB9), A("__createBinding", bZ1), A("__values", vZ1), A("__read", bJ0), A("__spread", UB9), A("__spreadArrays", $B9), A("__spreadArray", wB9), A("__await", SXA), A("__asyncGenerator", qB9), A("__asyncDelegator", NB9), A("__asyncValues", LB9), A("__makeTemplateObject", MB9), A("__importStar", OB9), A("__importDefault", RB9), A("__classPrivateFieldGet", TB9), A("__classPrivateFieldSet", PB9), A("__classPrivateFieldIn", jB9), A("__addDisposableResource", SB9), A("__disposeResources", _B9), A("__rewriteRelativeImportExtension", kB9)
    })
});
var vB9 = U((yB9) => {
    Object.defineProperty(yB9, "__esModule", {
        value: !0
    });
    yB9.createDeferred = void 0;

var wM3 = function() {
        var A, Q, B = new Promise(function(G, Z) {
            A = G, Q = Z
        });
        return {
            resolve: A,
            reject: Q,
            promise: B
        }
    };
    yB9.createDeferred = wM3
});
var bB9 = U((fJ0) => {
    Object.defineProperty(fJ0, "__esModule", {
        value: !0
    });
    var qM3 = hZ1();
    qM3.__exportStar(vB9(), fJ0)
});
var gB9 = U((fB9) => {
    Object.defineProperty(fB9, "__esModule", {
        value: !0
    });
    fB9.Emitter = void 0;

var NM3 = function() {
        function A(Q) {
            var B;
            this.callbacks = {}, this.warned = !1, this.maxListeners = (B = Q === null || Q === void 0 ? void 0 : Q.maxListeners) !== null && B !== void 0 ? B : 10
        }
        return A.prototype.warnIfPossibleMemoryLeak = function(Q) {
            if (this.warned) return;
            if (this.maxListeners && this.callbacks[Q].length > this.maxListeners) console.warn("Event Emitter: Possible memory leak detected; ".concat(String(Q), " has exceeded ").concat(this.maxListeners, " listeners.")), this.warned = !0
        }, A.prototype.on = function(Q, B) {
            if (!this.callbacks[Q]) this.callbacks[Q] = [B];
            else this.callbacks[Q].push(B), this.warnIfPossibleMemoryLeak(Q);
            return this
        }, A.prototype.once = function(Q, B) {
            var G = this,
                Z = function() {
                    var I = [];
                    for (var Y = 0; Y < arguments.length; Y++) I[Y] = arguments[Y];
                    G.off(Q, Z), B.apply(G, I)
                };
            return this.on(Q, Z), this
        }, A.prototype.off = function(Q, B) {
            var G, Z = (G = this.callbacks[Q]) !== null && G !== void 0 ? G : [],
                I = Z.filter(function(Y) {
                    return Y !== B
                });
            return this.callbacks[Q] = I, this
        }, A.prototype.emit = function(Q) {
            var B = this,
                G, Z = [];
            for (var I = 1; I < arguments.length; I++) Z[I - 1] = arguments[I];
            var Y = (G = this.callbacks[Q]) !== null && G !== void 0 ? G : [];
            return Y.forEach(function(J) {
                J.apply(B, Z)
            }), this
        }, A
    }();
    fB9.Emitter = NM3
});
var uB9 = U((hJ0) => {
    Object.defineProperty(hJ0, "__esModule", {
        value: !0
    });
    var LM3 = hZ1();
    LM3.__exportStar(gB9(), hJ0)
});
var _XA = U((gZ1) => {
    Object.defineProperty(gZ1, "__esModule", {
        value: !0
    });
    var mB9 = hZ1();
    mB9.__exportStar(bB9(), gZ1);
    mB9.__exportStar(uB9(), gZ1)
});
var gJ0 = U((dB9) => {
    Object.defineProperty(dB9, "__esModule", {
        value: !0
    });
    dB9.backoff = void 0;

function MM3(A) {
        var Q = Math.random() + 1,
            B = A.minTimeout,
            G = B === void 0 ? 500 : B,
            Z = A.factor,
            I = Z === void 0 ? 2 : Z,
            Y = A.attempt,
            J = A.maxTimeout,
            W = J === void 0 ? 1 / 0 : J;
        return Math.min(Q * G * Math.pow(I, Y), W)
    }
    dB9.backoff = MM3
});
var uJ0 = U((pB9) => {
    Object.defineProperty(pB9, "__esModule", {
        value: !0
    });
    pB9.PriorityQueue = pB9.ON_REMOVE_FROM_FUTURE = void 0;
    var OM3 = dP(),
        RM3 = _XA(),
        TM3 = gJ0();
    pB9.ON_REMOVE_FROM_FUTURE = "onRemoveFromFuture";

var PM3 = function(A) {
        OM3.__extends(Q, A);

function Q(B, G, Z) {
            var I = A.call(this) || this;
            return I.future = [], I.maxAttempts = B, I.queue = G, I.seen = Z !== null && Z !== void 0 ? Z : {}, I
        }
        return Q.prototype.push = function() {
            var B = this,
                G = [];
            for (var Z = 0; Z < arguments.length; Z++) G[Z] = arguments[Z];
            var I = G.map(function(Y) {
                var J = B.updateAttempts(Y);
                if (J > B.maxAttempts || B.includes(Y)) return !1;
                return B.queue.push(Y), !0
            });
            return this.queue = this.queue.sort(function(Y, J) {
                return B.getAttempts(Y) - B.getAttempts(J)
            }), I
        }, Q.prototype.pushWithBackoff = function(B) {
            var G = this;
            if (this.getAttempts(B) === 0) return this.push(B)[0];
            var Z = this.updateAttempts(B);
            if (Z > this.maxAttempts || this.includes(B)) return !1;
            var I = (0, TM3.backoff)({
                attempt: Z - 1
            });
            return setTimeout(function() {
                G.queue.push(B), G.future = G.future.filter(function(Y) {
                    return Y.id !== B.id
                }), G.emit(pB9.ON_REMOVE_FROM_FUTURE)
            }, I), this.future.push(B), !0
        }, Q.prototype.getAttempts = function(B) {
            var G;
            return (G = this.seen[B.id]) !== null && G !== void 0 ? G : 0
        }, Q.prototype.updateAttempts = function(B) {
            return this.seen[B.id] = this.getAttempts(B) + 1, this.getAttempts(B)
        }, Q.prototype.includes = function(B) {
            return this.queue.includes(B) || this.future.includes(B) || Boolean(this.queue.find(function(G) {
                return G.id === B.id
            })) || Boolean(this.future.find(function(G) {
                return G.id === B.id
            }))
        }, Q.prototype.pop = function() {
            return this.queue.shift()
        }, Object.defineProperty(Q.prototype, "length", {
            get: function() {
                return this.queue.length
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "todo", {
            get: function() {
                return this.queue.length + this.future.length
            },
            enumerable: !1,
            configurable: !0
        }), Q
    }(RM3.Emitter);
    pB9.PriorityQueue = PM3
});
var mJ0 = U((SM3) => {
    var DQA = 256,
        mZ1 = [],
        uZ1;
    while (DQA--) mZ1[DQA] = (DQA + 256).toString(16).substring(1);

function jM3() {
        var A = 0,
            Q, B = "";
        if (!uZ1 || DQA + 16 > 256) {
            uZ1 = Array(A = 256);
            while (A--) uZ1[A] = 256 * Math.random() | 0;
            A = DQA = 0
        }
        for (; A < 16; A++) {
            if (Q = uZ1[DQA + A], A == 6) B += mZ1[Q & 15 | 64];
            else if (A == 8) B += mZ1[Q & 63 | 128];
            else B += mZ1[Q];
            if (A & 1 && A > 1 && A < 11) B += "-"
        }
        return DQA++, B
    }
    SM3.v4 = jM3
});
var dJ0 = U((nB9) => {
    Object.defineProperty(nB9, "__esModule", {
        value: !0
    });
    nB9.CoreLogger = void 0;
    var dZ1 = dP(),
        kM3 = function() {
            function A() {
                this._logs = []
            }
            return A.prototype.log = function(Q, B, G) {
                var Z = new Date;
                this._logs.push({
                    level: Q,
                    message: B,
                    time: Z,
                    extras: G
                })
            }, Object.defineProperty(A.prototype, "logs", {
                get: function() {
                    return this._logs
                },
                enumerable: !1,
                configurable: !0
            }), A.prototype.flush = function() {
                if (this.logs.length > 1) {
                    var Q = this._logs.reduce(function(B, G) {
                        var Z, I, Y, J = dZ1.__assign(dZ1.__assign({}, G), {
                            json: JSON.stringify(G.extras, null, " "),
                            extras: G.extras
                        });
                        delete J.time;
                        var W = (Y = (I = G.time) === null || I === void 0 ? void 0 : I.toISOString()) !== null && Y !== void 0 ? Y : "";
                        if (B[W]) W = "".concat(W, "-").concat(Math.random());
                        return dZ1.__assign(dZ1.__assign({}, B), (Z = {}, Z[W] = J, Z))
                    }, {});
                    if (console.table) console.table(Q);
                    else console.log(Q)
                } else this.logs.forEach(function(B) {
                    var {
                        level: G,
                        message: Z,
                        extras: I
                    } = B;
                    if (G === "info" || G === "debug") console.log(Z, I !== null && I !== void 0 ? I : "");
                    else console[G](Z, I !== null && I !== void 0 ? I : "")
                });
                this._logs = []
            }, A
        }();
    nB9.CoreLogger = kM3
});
var pJ0 = U((rB9) => {
    Object.defineProperty(rB9, "__esModule", {
        value: !0
    });
    rB9.NullStats = rB9.CoreStats = void 0;
    var cJ0 = dP(),
        yM3 = function(A) {
            var Q = {
                gauge: "g",
                counter: "c"
            };
            return Q[A]
        },
        sB9 = function() {
            function A() {
                this.metrics = []
            }
            return A.prototype.increment = function(Q, B, G) {
                if (B === void 0) B = 1;
                this.metrics.push({
                    metric: Q,
                    value: B,
                    tags: G !== null && G !== void 0 ? G : [],
                    type: "counter",
                    timestamp: Date.now()
                })
            }, A.prototype.gauge = function(Q, B, G) {
                this.metrics.push({
                    metric: Q,
                    value: B,
                    tags: G !== null && G !== void 0 ? G : [],
                    type: "gauge",
                    timestamp: Date.now()
                })
            }, A.prototype.flush = function() {
                var Q = this.metrics.map(function(B) {
                    return cJ0.__assign(cJ0.__assign({}, B), {
                        tags: B.tags.join(",")
                    })
                });
                if (console.table) console.table(Q);
                else console.log(Q);
                this.metrics = []
            }, A.prototype.serialize = function() {
                return this.metrics.map(function(Q) {
                    return {
                        m: Q.metric,
                        v: Q.value,
                        t: Q.tags,
                        k: yM3(Q.type),
                        e: Q.timestamp
                    }
                })
            }, A
        }();
    rB9.CoreStats = sB9;

var xM3 = function(A) {
        cJ0.__extends(Q, A);

function Q() {
            return A !== null && A.apply(this, arguments) || this
        }
        return Q.prototype.gauge = function() {
            var B = [];
            for (var G = 0; G < arguments.length; G++) B[G] = arguments[G]
        }, Q.prototype.increment = function() {
            var B = [];
            for (var G = 0; G < arguments.length; G++) B[G] = arguments[G]
        }, Q.prototype.flush = function() {
            var B = [];
            for (var G = 0; G < arguments.length; G++) B[G] = arguments[G]
        }, Q.prototype.serialize = function() {
            var B = [];
            for (var G = 0; G < arguments.length; G++) B[G] = arguments[G];
            return []
        }, Q
    }(sB9);
    rB9.NullStats = xM3
});
var cZ1 = U((eB9) => {
    Object.defineProperty(eB9, "__esModule", {
        value: !0
    });
    eB9.CoreContext = eB9.ContextCancelation = void 0;
    var bM3 = mJ0(),
        fM3 = PJ0(),
        hM3 = dJ0(),
        gM3 = pJ0(),
        tB9 = function() {
            function A(Q) {
                var B, G, Z;
                this.retry = (B = Q.retry) !== null && B !== void 0 ? B : !0, this.type = (G = Q.type) !== null && G !== void 0 ? G : "plugin Error", this.reason = (Z = Q.reason) !== null && Z !== void 0 ? Z : ""
            }
            return A
        }();
    eB9.ContextCancelation = tB9;

var uM3 = function() {
        function A(Q, B, G, Z) {
            if (B === void 0) B = (0, bM3.v4)();
            if (G === void 0) G = new gM3.NullStats;
            if (Z === void 0) Z = new hM3.CoreLogger;
            this.attempts = 0, this.event = Q, this._id = B, this.logger = Z, this.stats = G
        }
        return A.system = function() {}, A.prototype.isSame = function(Q) {
            return Q.id === this.id
        }, A.prototype.cancel = function(Q) {
            if (Q) throw Q;
            throw new tB9({
                reason: "Context Cancel"
            })
        }, A.prototype.log = function(Q, B, G) {
            this.logger.log(Q, B, G)
        }, Object.defineProperty(A.prototype, "id", {
            get: function() {
                return this._id
            },
            enumerable: !1,
            configurable: !0
        }), A.prototype.updateEvent = function(Q, B) {
            var G;
            if (Q.split(".")[0] === "integrations") {
                var Z = Q.split(".")[1];
                if (((G = this.event.integrations) === null || G === void 0 ? void 0 : G[Z]) === !1) return this.event
            }
            return (0, fM3.dset)(this.event, Q, B), this.event
        }, A.prototype.failedDelivery = function() {
            return this._failedDelivery
        }, A.prototype.setFailedDelivery = function(Q) {
            this._failedDelivery = Q
        }, A.prototype.logs = function() {
            return this.logger.logs
        }, A.prototype.flush = function() {
            this.logger.flush(), this.stats.flush()
        }, A.prototype.toJSON = function() {
            return {
                id: this._id,
                event: this.event,
                logs: this.logger.logs,
                metrics: this.stats.metrics
            }
        }, A
    }();
    eB9.CoreContext = uM3
});
var Z29 = U((B29) => {
    Object.defineProperty(B29, "__esModule", {
        value: !0
    });
    B29.groupBy = void 0;
    var Q29 = dP();

function dM3(A, Q) {
        var B = {};
        return A.forEach(function(G) {
            var Z, I = void 0;
            if (typeof Q === "string") {
                var Y = G[Q];
                I = typeof Y !== "string" ? JSON.stringify(Y) : Y
            } else if (Q instanceof Function) I = Q(G);
            if (I === void 0) return;
            B[I] = Q29.__spreadArray(Q29.__spreadArray([], (Z = B[I]) !== null && Z !== void 0 ? Z : [], !0), [G], !1)
        }), B
    }
    B29.groupBy = dM3
});
var J29 = U((I29) => {
    Object.defineProperty(I29, "__esModule", {
        value: !0
    });
    I29.isThenable = void 0;

var cM3 = function(A) {
        return typeof A === "object" && A !== null && "then" in A && typeof A.then === "function"
    };
    I29.isThenable = cM3
});
var F29 = U((W29) => {
    Object.defineProperty(W29, "__esModule", {
        value: !0
    });
    W29.createTaskGroup = void 0;
    var pM3 = J29(),
        lM3 = function() {
            var A, Q, B = 0;
            return {
                done: function() {
                    return A
                },
                run: function(G) {
                    var Z = G();
                    if ((0, pM3.isThenable)(Z)) {
                        if (++B === 1) A = new Promise(function(I) {
                            return Q = I
                        });
                        Z.finally(function() {
                            return --B === 0 && Q()
                        })
                    }
                    return Z
                }
            }
        };
    W29.createTaskGroup = lM3
});
var iJ0 = U((D29) => {
    Object.defineProperty(D29, "__esModule", {
        value: !0
    });
    D29.ensure = D29.attempt = void 0;
    var V29 = dP(),
        lJ0 = cZ1();

function iM3(A) {
        return V29.__awaiter(this, void 0, void 0, function() {
            var Q;
            return V29.__generator(this, function(B) {
                switch (B.label) {
                    case 0:
                        return B.trys.push([0, 2, , 3]), [4, A()];
                    case 1:
                        return [2, B.sent()];
                    case 2:
                        return Q = B.sent(), [2, Promise.reject(Q)];
                    case 3:
                        return [2]
                }
            })
        })
    }

function K29(A, Q) {
        A.log("debug", "plugin", {
            plugin: Q.name
        });
        var B = new Date().getTime(),
            G = Q[A.event.type];
        if (G === void 0) return Promise.resolve(A);
        var Z = iM3(function() {
            return G.apply(Q, [A])
        }).then(function(I) {
            var Y = new Date().getTime() - B;
            return I.stats.gauge("plugin_time", Y, ["plugin:".concat(Q.name)]), I
        }).catch(function(I) {
            if (I instanceof lJ0.ContextCancelation && I.type === "middleware_cancellation") throw I;
            if (I instanceof lJ0.ContextCancelation) return A.log("warn", I.type, {
                plugin: Q.name,
                error: I
            }), I;
            return A.log("error", "plugin Error", {
                plugin: Q.name,
                error: I
            }), A.stats.increment("plugin_error", 1, ["plugin:".concat(Q.name)]), I
        });
        return Z
    }
    D29.attempt = K29;

function nM3(A, Q) {
        return K29(A, Q).then(function(B) {
            if (B instanceof lJ0.CoreContext) return B;
            A.log("debug", "Context canceled"), A.stats.increment("context_canceled"), A.cancel(B)
        })
    }
    D29.ensure = nM3
});
var z29 = U((C29) => {
    Object.defineProperty(C29, "__esModule", {
        value: !0
    });
    C29.CoreEventQueue = void 0;
    var iD = dP(),
        sM3 = Z29(),
        rM3 = uJ0(),
        nJ0 = cZ1(),
        oM3 = _XA(),
        tM3 = F29(),
        pZ1 = iJ0(),
        eM3 = function(A) {
            iD.__extends(Q, A);

function Q(B) {
                var G = A.call(this) || this;
                return G.criticalTasks = (0, tM3.createTaskGroup)(), G.plugins = [], G.failedInitializations = [], G.flushing = !1, G.queue = B, G.queue.on(rM3.ON_REMOVE_FROM_FUTURE, function() {
                    G.scheduleFlush(0)
                }), G
            }
            return Q.prototype.register = function(B, G, Z) {
                return iD.__awaiter(this, void 0, void 0, function() {
                    var I = this;
                    return iD.__generator(this, function(Y) {
                        switch (Y.label) {
                            case 0:
                                return [4, Promise.resolve(G.load(B, Z)).then(function() {
                                    I.plugins.push(G)
                                }).catch(function(J) {
                                    if (G.type === "destination") {
                                        I.failedInitializations.push(G.name), console.warn(G.name, J), B.log("warn", "Failed to load destination", {
                                            plugin: G.name,
                                            error: J
                                        });
                                        return
                                    }
                                    throw J
                                })];
                            case 1:
                                return Y.sent(), [2]
                        }
                    })
                })
            }, Q.prototype.deregister = function(B, G, Z) {
                return iD.__awaiter(this, void 0, void 0, function() {
                    var I;
                    return iD.__generator(this, function(Y) {
                        switch (Y.label) {
                            case 0:
                                if (Y.trys.push([0, 3, , 4]), !G.unload) return [3, 2];
                                return [4, Promise.resolve(G.unload(B, Z))];
                            case 1:
                                Y.sent(), Y.label = 2;
                            case 2:
                                return this.plugins = this.plugins.filter(function(J) {
                                    return J.name !== G.name
                                }), [3, 4];
                            case 3:
                                return I = Y.sent(), B.log("warn", "Failed to unload destination", {
                                    plugin: G.name,
                                    error: I
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, Q.prototype.dispatch = function(B) {
                return iD.__awaiter(this, void 0, void 0, function() {
                    var G;