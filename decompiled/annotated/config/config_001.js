/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: config_001.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (34次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: config
 * File: 1/9
 * Lines: 19488 - 20986 (1499 lines)
 * Original file: cli.js
 */

                    if (I && UV1.config.useDeprecatedNextContext) J = Object.create(B), J.unsubscribe = function() {
                        return I.unsubscribe()
                    }, Y = {
                        next: B.next && EV1(B.next, J),
                        error: B.error && EV1(B.error, J),
                        complete: B.complete && EV1(B.complete, J)
                    };
                    else Y = B
                }
                return I.destination = new qx9(Y), I
            }
            return Q
        }(EM0);
    ER.SafeSubscriber = zM0;

    function RyA(A) {
        if (UV1.config.useDeprecatedSynchronousErrorHandling) $x9.captureError(A);
        else zx9.reportUnhandledError(A)
    }

    function Nx9(A) {
        throw A
    }

    function zV1(A, Q) {
        var B = UV1.config.onStoppedNotification;
        B && Ux9.timeoutProvider.setTimeout(function() {
            return B(A, Q)
        })
    }
    ER.EMPTY_OBSERVER = {
        closed: !0,
        next: HM0.noop,
        error: Nx9,
        complete: HM0.noop
    }
});
var dVA = U((UM0) => {
    Object.defineProperty(UM0, "__esModule", {
        value: !0
    });
    UM0.observable = void 0;
    UM0.observable = function() {
        return typeof Symbol === "function" && Symbol.observable || "@@observable"
    }()
});
var vK = U((wM0) => {
    Object.defineProperty(wM0, "__esModule", {
        value: !0
    });
    wM0.identity = void 0;

    function Lx9(A) {
        return A
    }
    wM0.identity = Lx9
});
var cVA = U((LM0) => {
    Object.defineProperty(LM0, "__esModule", {
        value: !0
    });
    LM0.pipeFromArray = LM0.pipe = void 0;
    var Mx9 = vK();

    function Ox9() {
        var A = [];
        for (var Q = 0; Q < arguments.length; Q++) A[Q] = arguments[Q];
        return NM0(A)
    }
    LM0.pipe = Ox9;

    function NM0(A) {
        if (A.length === 0) return Mx9.identity;
        if (A.length === 1) return A[0];
        return function(B) {
            return A.reduce(function(G, Z) {
                return Z(G)
            }, B)
        }
    }
    LM0.pipeFromArray = NM0
});
var qG = U((RM0) => {
    Object.defineProperty(RM0, "__esModule", {
        value: !0
    });
    RM0.Observable = void 0;
    var wV1 = k2A(),
        Tx9 = r$(),
        Px9 = dVA(),
        jx9 = cVA(),
        Sx9 = _2A(),
        $V1 = t7(),
        _x9 = OyA(),
        kx9 = function() {
            function A(Q) {
                if (Q) this._subscribe = Q
            }
            return A.prototype.lift = function(Q) {
                var B = new A;
                return B.source = this, B.operator = Q, B
            }, A.prototype.subscribe = function(Q, B, G) {
                var Z = this,
                    I = xx9(Q) ? Q : new wV1.SafeSubscriber(Q, B, G);
                return _x9.errorContext(function() {
                    var Y = Z,
                        J = Y.operator,
                        W = Y.source;
                    I.add(J ? J.call(I, W) : W ? Z._subscribe(I) : Z._trySubscribe(I))
                }), I
            }, A.prototype._trySubscribe = function(Q) {
                try {
                    return this._subscribe(Q)
                } catch (B) {
                    Q.error(B)
                }
            }, A.prototype.forEach = function(Q, B) {
                var G = this;
                return B = OM0(B), new B(function(Z, I) {
                    var Y = new wV1.SafeSubscriber({
                        next: function(J) {
                            try {
                                Q(J)
                            } catch (W) {
                                I(W), Y.unsubscribe()
                            }
                        },
                        error: I,
                        complete: Z
                    });
                    G.subscribe(Y)
                })
            }, A.prototype._subscribe = function(Q) {
                var B;
                return (B = this.source) === null || B === void 0 ? void 0 : B.subscribe(Q)
            }, A.prototype[Px9.observable] = function() {
                return this
            }, A.prototype.pipe = function() {
                var Q = [];
                for (var B = 0; B < arguments.length; B++) Q[B] = arguments[B];
                return jx9.pipeFromArray(Q)(this)
            }, A.prototype.toPromise = function(Q) {
                var B = this;
                return Q = OM0(Q), new Q(function(G, Z) {
                    var I;
                    B.subscribe(function(Y) {
                        return I = Y
                    }, function(Y) {
                        return Z(Y)
                    }, function() {
                        return G(I)
                    })
                })
            }, A.create = function(Q) {
                return new A(Q)
            }, A
        }();
    RM0.Observable = kx9;

    function OM0(A) {
        var Q;
        return (Q = A !== null && A !== void 0 ? A : Sx9.config.Promise) !== null && Q !== void 0 ? Q : Promise
    }

    function yx9(A) {
        return A && $V1.isFunction(A.next) && $V1.isFunction(A.error) && $V1.isFunction(A.complete)
    }

    function xx9(A) {
        return A && A instanceof wV1.Subscriber || yx9(A) && Tx9.isSubscription(A)
    }
});
var vB = U((jM0) => {
    Object.defineProperty(jM0, "__esModule", {
        value: !0
    });
    jM0.operate = jM0.hasLift = void 0;
    var vx9 = t7();

    function PM0(A) {
        return vx9.isFunction(A === null || A === void 0 ? void 0 : A.lift)
    }
    jM0.hasLift = PM0;

    function bx9(A) {
        return function(Q) {
            if (PM0(Q)) return Q.lift(function(B) {
                try {
                    return A(B, this)
                } catch (G) {
                    this.error(G)
                }
            });
            throw TypeError("Unable to lift unknown Observable type")
        }
    }
    jM0.operate = bx9
});
var p2 = U((au) => {
    var hx9 = au && au.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(au, "__esModule", {
        value: !0
    });
    au.OperatorSubscriber = au.createOperatorSubscriber = void 0;
    var gx9 = k2A();

    function ux9(A, Q, B, G, Z) {
        return new _M0(A, Q, B, G, Z)
    }
    au.createOperatorSubscriber = ux9;
    var _M0 = function(A) {
        hx9(Q, A);

        function Q(B, G, Z, I, Y, J) {
            var W = A.call(this, B) || this;
            return W.onFinalize = Y, W.shouldUnsubscribe = J, W._next = G ? function(X) {
                try {
                    G(X)
                } catch (F) {
                    B.error(F)
                }
            } : A.prototype._next, W._error = I ? function(X) {
                try {
                    I(X)
                } catch (F) {
                    B.error(F)
                } finally {
                    this.unsubscribe()
                }
            } : A.prototype._error, W._complete = Z ? function() {
                try {
                    Z()
                } catch (X) {
                    B.error(X)
                } finally {
                    this.unsubscribe()
                }
            } : A.prototype._complete, W
        }
        return Q.prototype.unsubscribe = function() {
            var B;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var G = this.closed;
                A.prototype.unsubscribe.call(this), !G && ((B = this.onFinalize) === null || B === void 0 || B.call(this))
            }
        }, Q
    }(gx9.Subscriber);
    au.OperatorSubscriber = _M0
});
var TyA = U((kM0) => {
    Object.defineProperty(kM0, "__esModule", {
        value: !0
    });
    kM0.refCount = void 0;
    var mx9 = vB(),
        dx9 = p2();

    function cx9() {
        return mx9.operate(function(A, Q) {
            var B = null;
            A._refCount++;
            var G = dx9.createOperatorSubscriber(Q, void 0, void 0, void 0, function() {
                if (!A || A._refCount <= 0 || 0 < --A._refCount) {
                    B = null;
                    return
                }
                var Z = A._connection,
                    I = B;
                if (B = null, Z && (!I || Z === I)) Z.unsubscribe();
                Q.unsubscribe()
            });
            if (A.subscribe(G), !G.closed) B = A.connect()
        })
    }
    kM0.refCount = cx9
});
var pVA = U((y2A) => {
    var px9 = y2A && y2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(y2A, "__esModule", {
        value: !0
    });
    y2A.ConnectableObservable = void 0;
    var lx9 = qG(),
        xM0 = r$(),
        ix9 = TyA(),
        nx9 = p2(),
        ax9 = vB(),
        sx9 = function(A) {
            px9(Q, A);

            function Q(B, G) {
                var Z = A.call(this) || this;
                if (Z.source = B, Z.subjectFactory = G, Z._subject = null, Z._refCount = 0, Z._connection = null, ax9.hasLift(B)) Z.lift = B.lift;
                return Z
            }
            return Q.prototype._subscribe = function(B) {
                return this.getSubject().subscribe(B)
            }, Q.prototype.getSubject = function() {
                var B = this._subject;
                if (!B || B.isStopped) this._subject = this.subjectFactory();
                return this._subject
            }, Q.prototype._teardown = function() {
                this._refCount = 0;
                var B = this._connection;
                this._subject = this._connection = null, B === null || B === void 0 || B.unsubscribe()
            }, Q.prototype.connect = function() {
                var B = this,
                    G = this._connection;
                if (!G) {
                    G = this._connection = new xM0.Subscription;
                    var Z = this.getSubject();
                    if (G.add(this.source.subscribe(nx9.createOperatorSubscriber(Z, void 0, function() {
                            B._teardown(), Z.complete()
                        }, function(I) {
                            B._teardown(), Z.error(I)
                        }, function() {
                            return B._teardown()
                        }))), G.closed) this._connection = null, G = xM0.Subscription.EMPTY
                }
                return G
            }, Q.prototype.refCount = function() {
                return ix9.refCount()(this)
            }, Q
        }(lx9.Observable);
    y2A.ConnectableObservable = sx9
});
var bM0 = U((vM0) => {
    Object.defineProperty(vM0, "__esModule", {
        value: !0
    });
    vM0.performanceTimestampProvider = void 0;
    vM0.performanceTimestampProvider = {
        now: function() {
            return (vM0.performanceTimestampProvider.delegate || performance).now()
        },
        delegate: void 0
    }
});
var NV1 = U((zR) => {
    var fM0 = zR && zR.__read || function(A, Q) {
            var B = typeof Symbol === "function" && A[Symbol.iterator];
            if (!B) return A;
            var G = B.call(A),
                Z, I = [],
                Y;
            try {
                while ((Q === void 0 || Q-- > 0) && !(Z = G.next()).done) I.push(Z.value)
            } catch (J) {
                Y = {
                    error: J
                }
            } finally {
                try {
                    if (Z && !Z.done && (B = G.return)) B.call(G)
                } finally {
                    if (Y) throw Y.error
                }
            }
            return I
        },
        hM0 = zR && zR.__spreadArray || function(A, Q) {
            for (var B = 0, G = Q.length, Z = A.length; B < G; B++, Z++) A[Z] = Q[B];
            return A
        };
    Object.defineProperty(zR, "__esModule", {
        value: !0
    });
    zR.animationFrameProvider = void 0;
    var rx9 = r$();
    zR.animationFrameProvider = {
        schedule: function(A) {
            var Q = requestAnimationFrame,
                B = cancelAnimationFrame,
                G = zR.animationFrameProvider.delegate;
            if (G) Q = G.requestAnimationFrame, B = G.cancelAnimationFrame;
            var Z = Q(function(I) {
                B = void 0, A(I)
            });
            return new rx9.Subscription(function() {
                return B === null || B === void 0 ? void 0 : B(Z)
            })
        },
        requestAnimationFrame: function() {
            var A = [];
            for (var Q = 0; Q < arguments.length; Q++) A[Q] = arguments[Q];
            var B = zR.animationFrameProvider.delegate;
            return ((B === null || B === void 0 ? void 0 : B.requestAnimationFrame) || requestAnimationFrame).apply(void 0, hM0([], fM0(A)))
        },
        cancelAnimationFrame: function() {
            var A = [];
            for (var Q = 0; Q < arguments.length; Q++) A[Q] = arguments[Q];
            var B = zR.animationFrameProvider.delegate;
            return ((B === null || B === void 0 ? void 0 : B.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, hM0([], fM0(A)))
        },
        delegate: void 0
    }
});
var cM0 = U((mM0) => {
    Object.defineProperty(mM0, "__esModule", {
        value: !0
    });
    mM0.animationFrames = void 0;
    var ox9 = qG(),
        tx9 = bM0(),
        gM0 = NV1();

    function ex9(A) {
        return A ? uM0(A) : Av9
    }
    mM0.animationFrames = ex9;

    function uM0(A) {
        return new ox9.Observable(function(Q) {
            var B = A || tx9.performanceTimestampProvider,
                G = B.now(),
                Z = 0,
                I = function() {
                    if (!Q.closed) Z = gM0.animationFrameProvider.requestAnimationFrame(function(Y) {
                        Z = 0;
                        var J = B.now();
                        Q.next({
                            timestamp: A ? J : Y,
                            elapsed: J - G
                        }), I()
                    })
                };
            return I(),
                function() {
                    if (Z) gM0.animationFrameProvider.cancelAnimationFrame(Z)
                }
        })
    }
    var Av9 = uM0()
});
var LV1 = U((pM0) => {
    Object.defineProperty(pM0, "__esModule", {
        value: !0
    });
    pM0.ObjectUnsubscribedError = void 0;
    var Qv9 = nu();
    pM0.ObjectUnsubscribedError = Qv9.createErrorClass(function(A) {
        return function() {
            A(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
        }
    })
});
var bK = U((fj) => {
    var nM0 = fj && fj.__extends || function() {
            var A = function(Q, B) {
                return A = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(G, Z) {
                    G.__proto__ = Z
                } || function(G, Z) {
                    for (var I in Z)
                        if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
                }, A(Q, B)
            };
            return function(Q, B) {
                if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
                A(Q, B);

                function G() {
                    this.constructor = Q
                }
                Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
            }
        }(),
        Bv9 = fj && fj.__values || function(A) {
            var Q = typeof Symbol === "function" && Symbol.iterator,
                B = Q && A[Q],
                G = 0;
            if (B) return B.call(A);
            if (A && typeof A.length === "number") return {
                next: function() {
                    if (A && G >= A.length) A = void 0;
                    return {
                        value: A && A[G++],
                        done: !A
                    }
                }
            };
            throw TypeError(Q ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(fj, "__esModule", {
        value: !0
    });
    fj.AnonymousSubject = fj.Subject = void 0;
    var iM0 = qG(),
        OV1 = r$(),
        Gv9 = LV1(),
        Zv9 = sx(),
        MV1 = OyA(),
        aM0 = function(A) {
            nM0(Q, A);

            function Q() {
                var B = A.call(this) || this;
                return B.closed = !1, B.currentObservers = null, B.observers = [], B.isStopped = !1, B.hasError = !1, B.thrownError = null, B
            }
            return Q.prototype.lift = function(B) {
                var G = new RV1(this, this);
                return G.operator = B, G
            }, Q.prototype._throwIfClosed = function() {
                if (this.closed) throw new Gv9.ObjectUnsubscribedError
            }, Q.prototype.next = function(B) {
                var G = this;
                MV1.errorContext(function() {
                    var Z, I;
                    if (G._throwIfClosed(), !G.isStopped) {
                        if (!G.currentObservers) G.currentObservers = Array.from(G.observers);
                        try {
                            for (var Y = Bv9(G.currentObservers), J = Y.next(); !J.done; J = Y.next()) {
                                var W = J.value;
                                W.next(B)
                            }
                        } catch (X) {
                            Z = {
                                error: X
                            }
                        } finally {
                            try {
                                if (J && !J.done && (I = Y.return)) I.call(Y)
                            } finally {
                                if (Z) throw Z.error
                            }
                        }
                    }
                })
            }, Q.prototype.error = function(B) {
                var G = this;
                MV1.errorContext(function() {
                    if (G._throwIfClosed(), !G.isStopped) {
                        G.hasError = G.isStopped = !0, G.thrownError = B;
                        var Z = G.observers;
                        while (Z.length) Z.shift().error(B)
                    }
                })
            }, Q.prototype.complete = function() {
                var B = this;
                MV1.errorContext(function() {
                    if (B._throwIfClosed(), !B.isStopped) {
                        B.isStopped = !0;
                        var G = B.observers;
                        while (G.length) G.shift().complete()
                    }
                })
            }, Q.prototype.unsubscribe = function() {
                this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
            }, Object.defineProperty(Q.prototype, "observed", {
                get: function() {
                    var B;
                    return ((B = this.observers) === null || B === void 0 ? void 0 : B.length) > 0
                },
                enumerable: !1,
                configurable: !0
            }), Q.prototype._trySubscribe = function(B) {
                return this._throwIfClosed(), A.prototype._trySubscribe.call(this, B)
            }, Q.prototype._subscribe = function(B) {
                return this._throwIfClosed(), this._checkFinalizedStatuses(B), this._innerSubscribe(B)
            }, Q.prototype._innerSubscribe = function(B) {
                var G = this,
                    Z = this,
                    I = Z.hasError,
                    Y = Z.isStopped,
                    J = Z.observers;
                if (I || Y) return OV1.EMPTY_SUBSCRIPTION;
                return this.currentObservers = null, J.push(B), new OV1.Subscription(function() {
                    G.currentObservers = null, Zv9.arrRemove(J, B)
                })
            }, Q.prototype._checkFinalizedStatuses = function(B) {
                var G = this,
                    Z = G.hasError,
                    I = G.thrownError,
                    Y = G.isStopped;
                if (Z) B.error(I);
                else if (Y) B.complete()
            }, Q.prototype.asObservable = function() {
                var B = new iM0.Observable;
                return B.source = this, B
            }, Q.create = function(B, G) {
                return new RV1(B, G)
            }, Q
        }(iM0.Observable);
    fj.Subject = aM0;
    var RV1 = function(A) {
        nM0(Q, A);

        function Q(B, G) {
            var Z = A.call(this) || this;
            return Z.destination = B, Z.source = G, Z
        }
        return Q.prototype.next = function(B) {
            var G, Z;
            (Z = (G = this.destination) === null || G === void 0 ? void 0 : G.next) === null || Z === void 0 || Z.call(G, B)
        }, Q.prototype.error = function(B) {
            var G, Z;
            (Z = (G = this.destination) === null || G === void 0 ? void 0 : G.error) === null || Z === void 0 || Z.call(G, B)
        }, Q.prototype.complete = function() {
            var B, G;
            (G = (B = this.destination) === null || B === void 0 ? void 0 : B.complete) === null || G === void 0 || G.call(B)
        }, Q.prototype._subscribe = function(B) {
            var G, Z;
            return (Z = (G = this.source) === null || G === void 0 ? void 0 : G.subscribe(B)) !== null && Z !== void 0 ? Z : OV1.EMPTY_SUBSCRIPTION
        }, Q
    }(aM0);
    fj.AnonymousSubject = RV1
});
var TV1 = U((x2A) => {
    var Iv9 = x2A && x2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(x2A, "__esModule", {
        value: !0
    });
    x2A.BehaviorSubject = void 0;
    var Yv9 = bK(),
        Jv9 = function(A) {
            Iv9(Q, A);

            function Q(B) {
                var G = A.call(this) || this;
                return G._value = B, G
            }
            return Object.defineProperty(Q.prototype, "value", {
                get: function() {
                    return this.getValue()
                },
                enumerable: !1,
                configurable: !0
            }), Q.prototype._subscribe = function(B) {
                var G = A.prototype._subscribe.call(this, B);
                return !G.closed && B.next(this._value), G
            }, Q.prototype.getValue = function() {
                var B = this,
                    G = B.hasError,
                    Z = B.thrownError,
                    I = B._value;
                if (G) throw Z;
                return this._throwIfClosed(), I
            }, Q.prototype.next = function(B) {
                A.prototype.next.call(this, this._value = B)
            }, Q
        }(Yv9.Subject);
    x2A.BehaviorSubject = Jv9
});
var PyA = U((sM0) => {
    Object.defineProperty(sM0, "__esModule", {
        value: !0
    });
    sM0.dateTimestampProvider = void 0;
    sM0.dateTimestampProvider = {
        now: function() {
            return (sM0.dateTimestampProvider.delegate || Date).now()
        },
        delegate: void 0
    }
});
var jyA = U((v2A) => {
    var Wv9 = v2A && v2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(v2A, "__esModule", {
        value: !0
    });
    v2A.ReplaySubject = void 0;
    var Xv9 = bK(),
        Fv9 = PyA(),
        Vv9 = function(A) {
            Wv9(Q, A);

            function Q(B, G, Z) {
                if (B === void 0) B = 1 / 0;
                if (G === void 0) G = 1 / 0;
                if (Z === void 0) Z = Fv9.dateTimestampProvider;
                var I = A.call(this) || this;
                return I._bufferSize = B, I._windowTime = G, I._timestampProvider = Z, I._buffer = [], I._infiniteTimeWindow = !0, I._infiniteTimeWindow = G === 1 / 0, I._bufferSize = Math.max(1, B), I._windowTime = Math.max(1, G), I
            }
            return Q.prototype.next = function(B) {
                var G = this,
                    Z = G.isStopped,
                    I = G._buffer,
                    Y = G._infiniteTimeWindow,
                    J = G._timestampProvider,
                    W = G._windowTime;
                if (!Z) I.push(B), !Y && I.push(J.now() + W);
                this._trimBuffer(), A.prototype.next.call(this, B)
            }, Q.prototype._subscribe = function(B) {
                this._throwIfClosed(), this._trimBuffer();
                var G = this._innerSubscribe(B),
                    Z = this,
                    I = Z._infiniteTimeWindow,
                    Y = Z._buffer,
                    J = Y.slice();
                for (var W = 0; W < J.length && !B.closed; W += I ? 1 : 2) B.next(J[W]);
                return this._checkFinalizedStatuses(B), G
            }, Q.prototype._trimBuffer = function() {
                var B = this,
                    G = B._bufferSize,
                    Z = B._timestampProvider,
                    I = B._buffer,
                    Y = B._infiniteTimeWindow,
                    J = (Y ? 1 : 2) * G;
                if (G < 1 / 0 && J < I.length && I.splice(0, I.length - J), !Y) {
                    var W = Z.now(),
                        X = 0;
                    for (var F = 1; F < I.length && I[F] <= W; F += 2) X = F;
                    X && I.splice(0, X + 1)
                }
            }, Q
        }(Xv9.Subject);
    v2A.ReplaySubject = Vv9
});
var SyA = U((b2A) => {
    var Kv9 = b2A && b2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(b2A, "__esModule", {
        value: !0
    });
    b2A.AsyncSubject = void 0;
    var Dv9 = bK(),
        Hv9 = function(A) {
            Kv9(Q, A);

            function Q() {
                var B = A !== null && A.apply(this, arguments) || this;
                return B._value = null, B._hasValue = !1, B._isComplete = !1, B
            }
            return Q.prototype._checkFinalizedStatuses = function(B) {
                var G = this,
                    Z = G.hasError,
                    I = G._hasValue,
                    Y = G._value,
                    J = G.thrownError,
                    W = G.isStopped,
                    X = G._isComplete;
                if (Z) B.error(J);
                else if (W || X) I && B.next(Y), B.complete()
            }, Q.prototype.next = function(B) {
                if (!this.isStopped) this._value = B, this._hasValue = !0
            }, Q.prototype.complete = function() {
                var B = this,
                    G = B._hasValue,
                    Z = B._value,
                    I = B._isComplete;
                if (!I) this._isComplete = !0, G && A.prototype.next.call(this, Z), A.prototype.complete.call(this)
            }, Q
        }(Dv9.Subject);
    b2A.AsyncSubject = Hv9
});
var rM0 = U((f2A) => {
    var Cv9 = f2A && f2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(f2A, "__esModule", {
        value: !0
    });
    f2A.Action = void 0;
    var Ev9 = r$(),
        zv9 = function(A) {
            Cv9(Q, A);

            function Q(B, G) {
                return A.call(this) || this
            }
            return Q.prototype.schedule = function(B, G) {
                if (G === void 0) G = 0;
                return this
            }, Q
        }(Ev9.Subscription);
    f2A.Action = zv9
});
var eM0 = U((hj) => {
    var oM0 = hj && hj.__read || function(A, Q) {
            var B = typeof Symbol === "function" && A[Symbol.iterator];
            if (!B) return A;
            var G = B.call(A),
                Z, I = [],
                Y;
            try {
                while ((Q === void 0 || Q-- > 0) && !(Z = G.next()).done) I.push(Z.value)
            } catch (J) {
                Y = {
                    error: J
                }
            } finally {
                try {
                    if (Z && !Z.done && (B = G.return)) B.call(G)
                } finally {
                    if (Y) throw Y.error
                }
            }
            return I
        },
        tM0 = hj && hj.__spreadArray || function(A, Q) {
            for (var B = 0, G = Q.length, Z = A.length; B < G; B++, Z++) A[Z] = Q[B];
            return A
        };
    Object.defineProperty(hj, "__esModule", {
        value: !0
    });
    hj.intervalProvider = void 0;
    hj.intervalProvider = {
        setInterval: function(A, Q) {
            var B = [];
            for (var G = 2; G < arguments.length; G++) B[G - 2] = arguments[G];
            var Z = hj.intervalProvider.delegate;
            if (Z === null || Z === void 0 ? void 0 : Z.setInterval) return Z.setInterval.apply(Z, tM0([A, Q], oM0(B)));
            return setInterval.apply(void 0, tM0([A, Q], oM0(B)))
        },
        clearInterval: function(A) {
            var Q = hj.intervalProvider.delegate;
            return ((Q === null || Q === void 0 ? void 0 : Q.clearInterval) || clearInterval)(A)
        },
        delegate: void 0
    }
});
var g2A = U((h2A) => {
    var Uv9 = h2A && h2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(h2A, "__esModule", {
        value: !0
    });
    h2A.AsyncAction = void 0;
    var $v9 = rM0(),
        AO0 = eM0(),
        wv9 = sx(),
        qv9 = function(A) {
            Uv9(Q, A);

            function Q(B, G) {
                var Z = A.call(this, B, G) || this;
                return Z.scheduler = B, Z.work = G, Z.pending = !1, Z
            }
            return Q.prototype.schedule = function(B, G) {
                var Z;
                if (G === void 0) G = 0;
                if (this.closed) return this;
                this.state = B;
                var I = this.id,
                    Y = this.scheduler;
                if (I != null) this.id = this.recycleAsyncId(Y, I, G);
                return this.pending = !0, this.delay = G, this.id = (Z = this.id) !== null && Z !== void 0 ? Z : this.requestAsyncId(Y, this.id, G), this
            }, Q.prototype.requestAsyncId = function(B, G, Z) {
                if (Z === void 0) Z = 0;
                return AO0.intervalProvider.setInterval(B.flush.bind(B, this), Z)
            }, Q.prototype.recycleAsyncId = function(B, G, Z) {
                if (Z === void 0) Z = 0;
                if (Z != null && this.delay === Z && this.pending === !1) return G;
                if (G != null) AO0.intervalProvider.clearInterval(G);
                return
            }, Q.prototype.execute = function(B, G) {
                if (this.closed) return Error("executing a cancelled action");
                this.pending = !1;
                var Z = this._execute(B, G);
                if (Z) return Z;
                else if (this.pending === !1 && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null)
            }, Q.prototype._execute = function(B, G) {
                var Z = !1,
                    I;
                try {
                    this.work(B)
                } catch (Y) {
                    Z = !0, I = Y ? Y : Error("Scheduled action threw falsy error")
                }
                if (Z) return this.unsubscribe(), I
            }, Q.prototype.unsubscribe = function() {
                if (!this.closed) {
                    var B = this,
                        G = B.id,
                        Z = B.scheduler,
                        I = Z.actions;
                    if (this.work = this.state = this.scheduler = null, this.pending = !1, wv9.arrRemove(I, this), G != null) this.id = this.recycleAsyncId(Z, G, null);
                    this.delay = null, A.prototype.unsubscribe.call(this)
                }
            }, Q
        }($v9.Action);
    h2A.AsyncAction = qv9
});
var ZO0 = U((BO0) => {
    Object.defineProperty(BO0, "__esModule", {
        value: !0
    });
    BO0.TestTools = BO0.Immediate = void 0;
    var Nv9 = 1,
        jV1, _yA = {};

    function QO0(A) {
        if (A in _yA) return delete _yA[A], !0;
        return !1
    }
    BO0.Immediate = {
        setImmediate: function(A) {
            var Q = Nv9++;
            if (_yA[Q] = !0, !jV1) jV1 = Promise.resolve();
            return jV1.then(function() {
                return QO0(Q) && A()
            }), Q
        },
        clearImmediate: function(A) {
            QO0(A)
        }
    };
    BO0.TestTools = {
        pending: function() {
            return Object.keys(_yA).length
        }
    }
});
var YO0 = U((gj) => {
    var Mv9 = gj && gj.__read || function(A, Q) {
            var B = typeof Symbol === "function" && A[Symbol.iterator];
            if (!B) return A;
            var G = B.call(A),
                Z, I = [],
                Y;
            try {
                while ((Q === void 0 || Q-- > 0) && !(Z = G.next()).done) I.push(Z.value)
            } catch (J) {
                Y = {
                    error: J
                }
            } finally {
                try {
                    if (Z && !Z.done && (B = G.return)) B.call(G)
                } finally {
                    if (Y) throw Y.error
                }
            }
            return I
        },
        Ov9 = gj && gj.__spreadArray || function(A, Q) {
            for (var B = 0, G = Q.length, Z = A.length; B < G; B++, Z++) A[Z] = Q[B];
            return A
        };
    Object.defineProperty(gj, "__esModule", {
        value: !0
    });
    gj.immediateProvider = void 0;
    var IO0 = ZO0(),
        Rv9 = IO0.Immediate.setImmediate,
        Tv9 = IO0.Immediate.clearImmediate;
    gj.immediateProvider = {
        setImmediate: function() {
            var A = [];
            for (var Q = 0; Q < arguments.length; Q++) A[Q] = arguments[Q];
            var B = gj.immediateProvider.delegate;
            return ((B === null || B === void 0 ? void 0 : B.setImmediate) || Rv9).apply(void 0, Ov9([], Mv9(A)))
        },
        clearImmediate: function(A) {
            var Q = gj.immediateProvider.delegate;
            return ((Q === null || Q === void 0 ? void 0 : Q.clearImmediate) || Tv9)(A)
        },
        delegate: void 0
    }
});
var WO0 = U((u2A) => {
    var Pv9 = u2A && u2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(u2A, "__esModule", {
        value: !0
    });
    u2A.AsapAction = void 0;
    var jv9 = g2A(),
        JO0 = YO0(),
        Sv9 = function(A) {
            Pv9(Q, A);

            function Q(B, G) {
                var Z = A.call(this, B, G) || this;
                return Z.scheduler = B, Z.work = G, Z
            }
            return Q.prototype.requestAsyncId = function(B, G, Z) {
                if (Z === void 0) Z = 0;
                if (Z !== null && Z > 0) return A.prototype.requestAsyncId.call(this, B, G, Z);
                return B.actions.push(this), B._scheduled || (B._scheduled = JO0.immediateProvider.setImmediate(B.flush.bind(B, void 0)))
            }, Q.prototype.recycleAsyncId = function(B, G, Z) {
                var I;
                if (Z === void 0) Z = 0;
                if (Z != null ? Z > 0 : this.delay > 0) return A.prototype.recycleAsyncId.call(this, B, G, Z);
                var Y = B.actions;
                if (G != null && ((I = Y[Y.length - 1]) === null || I === void 0 ? void 0 : I.id) !== G) {
                    if (JO0.immediateProvider.clearImmediate(G), B._scheduled === G) B._scheduled = void 0
                }
                return
            }, Q
        }(jv9.AsyncAction);
    u2A.AsapAction = Sv9
});
var SV1 = U((XO0) => {
    Object.defineProperty(XO0, "__esModule", {
        value: !0
    });
    XO0.Scheduler = void 0;
    var _v9 = PyA(),
        kv9 = function() {
            function A(Q, B) {
                if (B === void 0) B = A.now;
                this.schedulerActionCtor = Q, this.now = B
            }
            return A.prototype.schedule = function(Q, B, G) {
                if (B === void 0) B = 0;
                return new this.schedulerActionCtor(this, Q).schedule(G, B)
            }, A.now = _v9.dateTimestampProvider.now, A
        }();
    XO0.Scheduler = kv9
});
var d2A = U((m2A) => {
    var yv9 = m2A && m2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(m2A, "__esModule", {
        value: !0
    });
    m2A.AsyncScheduler = void 0;
    var VO0 = SV1(),
        xv9 = function(A) {
            yv9(Q, A);

            function Q(B, G) {
                if (G === void 0) G = VO0.Scheduler.now;
                var Z = A.call(this, B, G) || this;
                return Z.actions = [], Z._active = !1, Z
            }
            return Q.prototype.flush = function(B) {
                var G = this.actions;
                if (this._active) {
                    G.push(B);
                    return
                }
                var Z;
                this._active = !0;
                do
                    if (Z = B.execute(B.state, B.delay)) break; while (B = G.shift());
                if (this._active = !1, Z) {
                    while (B = G.shift()) B.unsubscribe();
                    throw Z
                }
            }, Q
        }(VO0.Scheduler);
    m2A.AsyncScheduler = xv9
});
var KO0 = U((c2A) => {
    var vv9 = c2A && c2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(c2A, "__esModule", {
        value: !0
    });
    c2A.AsapScheduler = void 0;
    var bv9 = d2A(),
        fv9 = function(A) {
            vv9(Q, A);

            function Q() {
                return A !== null && A.apply(this, arguments) || this
            }
            return Q.prototype.flush = function(B) {
                this._active = !0;
                var G = this._scheduled;
                this._scheduled = void 0;
                var Z = this.actions,
                    I;
                B = B || Z.shift();
                do
                    if (I = B.execute(B.state, B.delay)) break; while ((B = Z[0]) && B.id === G && Z.shift());
                if (this._active = !1, I) {
                    while ((B = Z[0]) && B.id === G && Z.shift()) B.unsubscribe();
                    throw I
                }
            }, Q
        }(bv9.AsyncScheduler);
    c2A.AsapScheduler = fv9
});
var EO0 = U((DO0) => {
    Object.defineProperty(DO0, "__esModule", {
        value: !0
    });
    DO0.asap = DO0.asapScheduler = void 0;
    var hv9 = WO0(),
        gv9 = KO0();
    DO0.asapScheduler = new gv9.AsapScheduler(hv9.AsapAction);
    DO0.asap = DO0.asapScheduler
});
var fz = U((zO0) => {
    Object.defineProperty(zO0, "__esModule", {
        value: !0
    });
    zO0.async = zO0.asyncScheduler = void 0;
    var uv9 = g2A(),
        mv9 = d2A();
    zO0.asyncScheduler = new mv9.AsyncScheduler(uv9.AsyncAction);
    zO0.async = zO0.asyncScheduler
});
var wO0 = U((p2A) => {
    var dv9 = p2A && p2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(p2A, "__esModule", {
        value: !0
    });
    p2A.QueueAction = void 0;
    var cv9 = g2A(),
        pv9 = function(A) {
            dv9(Q, A);

            function Q(B, G) {
                var Z = A.call(this, B, G) || this;
                return Z.scheduler = B, Z.work = G, Z
            }
            return Q.prototype.schedule = function(B, G) {
                if (G === void 0) G = 0;
                if (G > 0) return A.prototype.schedule.call(this, B, G);
                return this.delay = G, this.state = B, this.scheduler.flush(this), this
            }, Q.prototype.execute = function(B, G) {
                return G > 0 || this.closed ? A.prototype.execute.call(this, B, G) : this._execute(B, G)
            }, Q.prototype.requestAsyncId = function(B, G, Z) {
                if (Z === void 0) Z = 0;
                if (Z != null && Z > 0 || Z == null && this.delay > 0) return A.prototype.requestAsyncId.call(this, B, G, Z);
                return B.flush(this), 0
            }, Q
        }(cv9.AsyncAction);
    p2A.QueueAction = pv9
});
var qO0 = U((l2A) => {
    var lv9 = l2A && l2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(l2A, "__esModule", {
        value: !0
    });
    l2A.QueueScheduler = void 0;
    var iv9 = d2A(),
        nv9 = function(A) {
            lv9(Q, A);

            function Q() {
                return A !== null && A.apply(this, arguments) || this
            }
            return Q
        }(iv9.AsyncScheduler);
    l2A.QueueScheduler = nv9
});
var OO0 = U((NO0) => {
    Object.defineProperty(NO0, "__esModule", {
        value: !0
    });
    NO0.queue = NO0.queueScheduler = void 0;
    var av9 = wO0(),
        sv9 = qO0();
    NO0.queueScheduler = new sv9.QueueScheduler(av9.QueueAction);
    NO0.queue = NO0.queueScheduler
});
var TO0 = U((i2A) => {
    var rv9 = i2A && i2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(i2A, "__esModule", {
        value: !0
    });
    i2A.AnimationFrameAction = void 0;
    var ov9 = g2A(),
        RO0 = NV1(),
        tv9 = function(A) {
            rv9(Q, A);

            function Q(B, G) {
                var Z = A.call(this, B, G) || this;
                return Z.scheduler = B, Z.work = G, Z
            }
            return Q.prototype.requestAsyncId = function(B, G, Z) {
                if (Z === void 0) Z = 0;
                if (Z !== null && Z > 0) return A.prototype.requestAsyncId.call(this, B, G, Z);
                return B.actions.push(this), B._scheduled || (B._scheduled = RO0.animationFrameProvider.requestAnimationFrame(function() {
                    return B.flush(void 0)
                }))
            }, Q.prototype.recycleAsyncId = function(B, G, Z) {
                var I;
                if (Z === void 0) Z = 0;
                if (Z != null ? Z > 0 : this.delay > 0) return A.prototype.recycleAsyncId.call(this, B, G, Z);
                var Y = B.actions;
                if (G != null && G === B._scheduled && ((I = Y[Y.length - 1]) === null || I === void 0 ? void 0 : I.id) !== G) RO0.animationFrameProvider.cancelAnimationFrame(G), B._scheduled = void 0;
                return
            }, Q
        }(ov9.AsyncAction);
    i2A.AnimationFrameAction = tv9
});
var PO0 = U((n2A) => {
    var ev9 = n2A && n2A.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(n2A, "__esModule", {
        value: !0
    });
    n2A.AnimationFrameScheduler = void 0;
    var Ab9 = d2A(),
        Qb9 = function(A) {
            ev9(Q, A);

            function Q() {
                return A !== null && A.apply(this, arguments) || this
            }
            return Q.prototype.flush = function(B) {
                this._active = !0;
                var G;
                if (B) G = B.id;
                else G = this._scheduled, this._scheduled = void 0;
                var Z = this.actions,
                    I;
                B = B || Z.shift();
                do
                    if (I = B.execute(B.state, B.delay)) break; while ((B = Z[0]) && B.id === G && Z.shift());
                if (this._active = !1, I) {
                    while ((B = Z[0]) && B.id === G && Z.shift()) B.unsubscribe();
                    throw I
                }
            }, Q
        }(Ab9.AsyncScheduler);
    n2A.AnimationFrameScheduler = Qb9
});
var kO0 = U((jO0) => {
    Object.defineProperty(jO0, "__esModule", {
        value: !0
    });
    jO0.animationFrame = jO0.animationFrameScheduler = void 0;