/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: git_025.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (22次) = moduleWrapper(fn) - CommonJS module wrapper
 *   L        (6次) = lazyLoader(fn) - Lazy module loader
 *   UA       (2次) = require(moduleName) - Node.js require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 25/34
 * Lines: 307961 - 309460 (1500 lines)
 * Original file: cli.js
 */

        U(A) {
            let Q = typeof A === "number" ? A : void 0,
                B = typeof A === "function" ? A : void 0,
                G = typeof A > "u" ? [] : void 0,
                Z = 0,
                I = this.v,
                Y = [];
            while (Y.length || I)
                if (I) Y.push(I), I = I.i;
                else {
                    if (I = Y.pop(), Z === Q) return I;
                    G && G.push(I), B && B(I, Z, this), Z += 1, I = I.h
                } return G
        }
        j(A) {
            while (!0) {
                let Q = A.o;
                if (Q.p === 0) return;
                let B = Q.o;
                if (Q === B.i) {
                    let G = B.h;
                    if (G && G.p === 1) {
                        if (G.p = Q.p = 0, B === this.v) return;
                        B.p = 1, A = B;
                        continue
                    } else if (A === Q.h) {
                        if (A.p = 0, A.i) A.i.o = Q;
                        if (A.h) A.h.o = B;
                        if (Q.h = A.i, B.i = A.h, A.i = Q, A.h = B, B === this.v) this.v = A, this.C.o = A;
                        else {
                            let Z = B.o;
                            if (Z.i === B) Z.i = A;
                            else Z.h = A
                        }
                        A.o = B.o, Q.o = A, B.o = A, B.p = 1
                    } else {
                        if (Q.p = 0, B === this.v) this.v = B.g();
                        else B.g();
                        B.p = 1;
                        return
                    }
                } else {
                    let G = B.i;
                    if (G && G.p === 1) {
                        if (G.p = Q.p = 0, B === this.v) return;
                        B.p = 1, A = B;
                        continue
                    } else if (A === Q.i) {
                        if (A.p = 0, A.i) A.i.o = B;
                        if (A.h) A.h.o = Q;
                        if (B.h = A.i, Q.i = A.h, A.i = B, A.h = Q, B === this.v) this.v = A, this.C.o = A;
                        else {
                            let Z = B.o;
                            if (Z.i === B) Z.i = A;
                            else Z.h = A
                        }
                        A.o = B.o, Q.o = A, B.o = A, B.p = 1
                    } else {
                        if (Q.p = 0, B === this.v) this.v = B._();
                        else B._();
                        B.p = 1;
                        return
                    }
                }
                if (this.enableIndex) Q.O(), B.O(), A.O();
                return
            }
        }
        q(A, Q, B) {
            if (this.v === void 0) return this.m += 1, this.v = new this.N(A, Q, 0), this.v.o = this.C, this.C.o = this.C.i = this.C.h = this.v, this.m;
            let G, Z = this.C.i,
                I = this.A(Z.u, A);
            if (I === 0) return Z.l = Q, this.m;
            else if (I > 0) Z.i = new this.N(A, Q), Z.i.o = Z, G = Z.i, this.C.i = G;
            else {
                let Y = this.C.h,
                    J = this.A(Y.u, A);
                if (J === 0) return Y.l = Q, this.m;
                else if (J < 0) Y.h = new this.N(A, Q), Y.h.o = Y, G = Y.h, this.C.h = G;
                else {
                    if (B !== void 0) {
                        let W = B.T;
                        if (W !== this.C) {
                            let X = this.A(W.u, A);
                            if (X === 0) return W.l = Q, this.m;
                            else if (X > 0) {
                                let F = W.I(),
                                    V = this.A(F.u, A);
                                if (V === 0) return F.l = Q, this.m;
                                else if (V < 0)
                                    if (G = new this.N(A, Q), F.h === void 0) F.h = G, G.o = F;
                                    else W.i = G, G.o = W
                            }
                        }
                    }
                    if (G === void 0) {
                        G = this.v;
                        while (!0) {
                            let W = this.A(G.u, A);
                            if (W > 0) {
                                if (G.i === void 0) {
                                    G.i = new this.N(A, Q), G.i.o = G, G = G.i;
                                    break
                                }
                                G = G.i
                            } else if (W < 0) {
                                if (G.h === void 0) {
                                    G.h = new this.N(A, Q), G.h.o = G, G = G.h;
                                    break
                                }
                                G = G.h
                            } else return G.l = Q, this.m
                        }
                    }
                }
            }
            if (this.enableIndex) {
                let Y = G.o;
                while (Y !== this.C) Y.M += 1, Y = Y.o
            }
            return this.j(G), this.m += 1, this.m
        }
        H(A, Q) {
            while (A) {
                let B = this.A(A.u, Q);
                if (B < 0) A = A.h;
                else if (B > 0) A = A.i;
                else return A
            }
            return A || this.C
        }
        clear() {
            this.m = 0, this.v = void 0, this.C.o = void 0, this.C.i = this.C.h = void 0
        }
        updateKeyByIterator(A, Q) {
            let B = A.T;
            if (B === this.C) g1A();
            if (this.m === 1) return B.u = Q, !0;
            let G = B.B().u;
            if (B === this.C.i) {
                if (this.A(G, Q) > 0) return B.u = Q, !0;
                return !1
            }
            let Z = B.I().u;
            if (B === this.C.h) {
                if (this.A(Z, Q) < 0) return B.u = Q, !0;
                return !1
            }
            if (this.A(Z, Q) >= 0 || this.A(G, Q) <= 0) return !1;
            return B.u = Q, !0
        }
        eraseElementByPos(A) {
            if (A < 0 || A > this.m - 1) throw RangeError();
            let Q = this.U(A);
            return this.S(Q), this.m
        }
        eraseElementByKey(A) {
            if (this.m === 0) return !1;
            let Q = this.H(this.v, A);
            if (Q === this.C) return !1;
            return this.S(Q), !0
        }
        eraseElementByIterator(A) {
            let Q = A.T;
            if (Q === this.C) g1A();
            let B = Q.h === void 0;
            if (A.iteratorType === 0) {
                if (B) A.next()
            } else if (!B || Q.i === void 0) A.next();
            return this.S(Q), A
        }
        getHeight() {
            if (this.m === 0) return 0;

            function A(Q) {
                if (!Q) return 0;
                return Math.max(A(Q.i), A(Q.h)) + 1
            }
            return A(this.v)
        }
    }
    class BH2 extends tD2 {
        constructor(A, Q, B) {
            super(B);
            if (this.T = A, this.C = Q, this.iteratorType === 0) this.pre = function() {
                if (this.T === this.C.i) g1A();
                return this.T = this.T.I(), this
            }, this.next = function() {
                if (this.T === this.C) g1A();
                return this.T = this.T.B(), this
            };
            else this.pre = function() {
                if (this.T === this.C.h) g1A();
                return this.T = this.T.B(), this
            }, this.next = function() {
                if (this.T === this.C) g1A();
                return this.T = this.T.I(), this
            }
        }
        get index() {
            let A = this.T,
                Q = this.C.o;
            if (A === this.C) {
                if (Q) return Q.M - 1;
                return 0
            }
            let B = 0;
            if (A.i) B += A.i.M;
            while (A !== Q) {
                let G = A.o;
                if (A === G.h) {
                    if (B += 1, G.i) B += G.i.M
                }
                A = G
            }
            return B
        }
        isAccessible() {
            return this.T !== this.C
        }
    }
    class WP extends BH2 {
        constructor(A, Q, B, G) {
            super(A, Q, G);
            this.container = B
        }
        get pointer() {
            if (this.T === this.C) g1A();
            let A = this;
            return new Proxy([], {
                get(Q, B) {
                    if (B === "0") return A.T.u;
                    else if (B === "1") return A.T.l;
                    return Q[0] = A.T.u, Q[1] = A.T.l, Q[B]
                },
                set(Q, B, G) {
                    if (B !== "1") throw TypeError("prop must be 1");
                    return A.T.l = G, !0
                }
            })
        }
        copy() {
            return new WP(this.T, this.C, this.container, this.iteratorType)
        }
    }
    class GH2 extends QH2 {
        constructor(A = [], Q, B) {
            super(Q, B);
            let G = this;
            A.forEach(function(Z) {
                G.setElement(Z[0], Z[1])
            })
        }
        begin() {
            return new WP(this.C.i || this.C, this.C, this)
        }
        end() {
            return new WP(this.C, this.C, this)
        }
        rBegin() {
            return new WP(this.C.h || this.C, this.C, this, 1)
        }
        rEnd() {
            return new WP(this.C, this.C, this, 1)
        }
        front() {
            if (this.m === 0) return;
            let A = this.C.i;
            return [A.u, A.l]
        }
        back() {
            if (this.m === 0) return;
            let A = this.C.h;
            return [A.u, A.l]
        }
        lowerBound(A) {
            let Q = this.R(this.v, A);
            return new WP(Q, this.C, this)
        }
        upperBound(A) {
            let Q = this.K(this.v, A);
            return new WP(Q, this.C, this)
        }
        reverseLowerBound(A) {
            let Q = this.L(this.v, A);
            return new WP(Q, this.C, this)
        }
        reverseUpperBound(A) {
            let Q = this.k(this.v, A);
            return new WP(Q, this.C, this)
        }
        forEach(A) {
            this.U(function(Q, B, G) {
                A([Q.u, Q.l], B, G)
            })
        }
        setElement(A, Q, B) {
            return this.q(A, Q, B)
        }
        getElementByPos(A) {
            if (A < 0 || A > this.m - 1) throw RangeError();
            let Q = this.U(A);
            return [Q.u, Q.l]
        }
        find(A) {
            let Q = this.H(this.v, A);
            return new WP(Q, this.C, this)
        }
        getElementByKey(A) {
            return this.H(this.v, A).l
        }
        union(A) {
            let Q = this;
            return A.forEach(function(B) {
                Q.setElement(B[0], B[1])
            }), this.m
        }*[Symbol.iterator]() {
            let A = this.m,
                Q = this.U();
            for (let B = 0; B < A; ++B) {
                let G = Q[B];
                yield [G.u, G.l]
            }
        }
    }
    ZH2.OrderedMap = GH2
});
var Z41 = U((JH2) => {
    Object.defineProperty(JH2, "__esModule", {
        value: !0
    });
    JH2.registerAdminService = Cq5;
    JH2.addAdminServicesToServer = Eq5;
    var YH2 = [];

    function Cq5(A, Q) {
        YH2.push({
            getServiceDefinition: A,
            getHandlers: Q
        })
    }

    function Eq5(A) {
        for (let {
                getServiceDefinition: Q,
                getHandlers: B
            }
            of YH2) A.addService(Q(), B())
    }
});
var HH2 = U((KH2) => {
    Object.defineProperty(KH2, "__esModule", {
        value: !0
    });
    KH2.ClientDuplexStreamImpl = KH2.ClientWritableStreamImpl = KH2.ClientReadableStreamImpl = KH2.ClientUnaryCallImpl = void 0;
    KH2.callErrorFromStatus = wq5;
    var $q5 = UA("events"),
        kB0 = UA("stream"),
        QOA = K6();

    function wq5(A, Q) {
        let B = `${A.code} ${QOA.Status[A.code]}: ${A.details}`,
            Z = `${Error(B).stack}
for call at
${Q}`;
        return Object.assign(Error(B), A, {
            stack: Z
        })
    }
    class WH2 extends $q5.EventEmitter {
        constructor() {
            super()
        }
        cancel() {
            var A;
            (A = this.call) === null || A === void 0 || A.cancelWithStatus(QOA.Status.CANCELLED, "Cancelled on client")
        }
        getPeer() {
            var A, Q;
            return (Q = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null && Q !== void 0 ? Q : "unknown"
        }
        getAuthContext() {
            var A, Q;
            return (Q = (A = this.call) === null || A === void 0 ? void 0 : A.getAuthContext()) !== null && Q !== void 0 ? Q : null
        }
    }
    KH2.ClientUnaryCallImpl = WH2;
    class XH2 extends kB0.Readable {
        constructor(A) {
            super({
                objectMode: !0
            });
            this.deserialize = A
        }
        cancel() {
            var A;
            (A = this.call) === null || A === void 0 || A.cancelWithStatus(QOA.Status.CANCELLED, "Cancelled on client")
        }
        getPeer() {
            var A, Q;
            return (Q = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null && Q !== void 0 ? Q : "unknown"
        }
        getAuthContext() {
            var A, Q;
            return (Q = (A = this.call) === null || A === void 0 ? void 0 : A.getAuthContext()) !== null && Q !== void 0 ? Q : null
        }
        _read(A) {
            var Q;
            (Q = this.call) === null || Q === void 0 || Q.startRead()
        }
    }
    KH2.ClientReadableStreamImpl = XH2;
    class FH2 extends kB0.Writable {
        constructor(A) {
            super({
                objectMode: !0
            });
            this.serialize = A
        }
        cancel() {
            var A;
            (A = this.call) === null || A === void 0 || A.cancelWithStatus(QOA.Status.CANCELLED, "Cancelled on client")
        }
        getPeer() {
            var A, Q;
            return (Q = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null && Q !== void 0 ? Q : "unknown"
        }
        getAuthContext() {
            var A, Q;
            return (Q = (A = this.call) === null || A === void 0 ? void 0 : A.getAuthContext()) !== null && Q !== void 0 ? Q : null
        }
        _write(A, Q, B) {
            var G;
            let Z = {
                    callback: B
                },
                I = Number(Q);
            if (!Number.isNaN(I)) Z.flags = I;
            (G = this.call) === null || G === void 0 || G.sendMessageWithContext(Z, A)
        }
        _final(A) {
            var Q;
            (Q = this.call) === null || Q === void 0 || Q.halfClose(), A()
        }
    }
    KH2.ClientWritableStreamImpl = FH2;
    class VH2 extends kB0.Duplex {
        constructor(A, Q) {
            super({
                objectMode: !0
            });
            this.serialize = A, this.deserialize = Q
        }
        cancel() {
            var A;
            (A = this.call) === null || A === void 0 || A.cancelWithStatus(QOA.Status.CANCELLED, "Cancelled on client")
        }
        getPeer() {
            var A, Q;
            return (Q = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null && Q !== void 0 ? Q : "unknown"
        }
        getAuthContext() {
            var A, Q;
            return (Q = (A = this.call) === null || A === void 0 ? void 0 : A.getAuthContext()) !== null && Q !== void 0 ? Q : null
        }
        _read(A) {
            var Q;
            (Q = this.call) === null || Q === void 0 || Q.startRead()
        }
        _write(A, Q, B) {
            var G;
            let Z = {
                    callback: B
                },
                I = Number(Q);
            if (!Number.isNaN(I)) Z.flags = I;
            (G = this.call) === null || G === void 0 || G.sendMessageWithContext(Z, A)
        }
        _final(A) {
            var Q;
            (Q = this.call) === null || Q === void 0 || Q.halfClose(), A()
        }
    }
    KH2.ClientDuplexStreamImpl = VH2
});
var u1A = U((EH2) => {
    Object.defineProperty(EH2, "__esModule", {
        value: !0
    });
    EH2.InterceptingListenerImpl = void 0;
    EH2.statusOrFromValue = Rq5;
    EH2.statusOrFromError = Tq5;
    EH2.isInterceptingListener = Pq5;
    var Oq5 = BK();

    function Rq5(A) {
        return {
            ok: !0,
            value: A
        }
    }

    function Tq5(A) {
        var Q;
        return {
            ok: !1,
            error: Object.assign(Object.assign({}, A), {
                metadata: (Q = A.metadata) !== null && Q !== void 0 ? Q : new Oq5.Metadata
            })
        }
    }

    function Pq5(A) {
        return A.onReceiveMetadata !== void 0 && A.onReceiveMetadata.length === 1
    }
    class CH2 {
        constructor(A, Q) {
            this.listener = A, this.nextListener = Q, this.processingMetadata = !1, this.hasPendingMessage = !1, this.processingMessage = !1, this.pendingStatus = null
        }
        processPendingMessage() {
            if (this.hasPendingMessage) this.nextListener.onReceiveMessage(this.pendingMessage), this.pendingMessage = null, this.hasPendingMessage = !1
        }
        processPendingStatus() {
            if (this.pendingStatus) this.nextListener.onReceiveStatus(this.pendingStatus)
        }
        onReceiveMetadata(A) {
            this.processingMetadata = !0, this.listener.onReceiveMetadata(A, (Q) => {
                this.processingMetadata = !1, this.nextListener.onReceiveMetadata(Q), this.processPendingMessage(), this.processPendingStatus()
            })
        }
        onReceiveMessage(A) {
            this.processingMessage = !0, this.listener.onReceiveMessage(A, (Q) => {
                if (this.processingMessage = !1, this.processingMetadata) this.pendingMessage = Q, this.hasPendingMessage = !0;
                else this.nextListener.onReceiveMessage(Q), this.processPendingStatus()
            })
        }
        onReceiveStatus(A) {
            this.listener.onReceiveStatus(A, (Q) => {
                if (this.processingMetadata || this.processingMessage) this.pendingStatus = Q;
                else this.nextListener.onReceiveStatus(Q)
            })
        }
    }
    EH2.InterceptingListenerImpl = CH2
});
var vB0 = U((RH2) => {
    Object.defineProperty(RH2, "__esModule", {
        value: !0
    });
    RH2.InterceptingCall = RH2.RequesterBuilder = RH2.ListenerBuilder = RH2.InterceptorConfigurationError = void 0;
    RH2.getInterceptingCall = vq5;
    var kq5 = BK(),
        UH2 = u1A(),
        $H2 = K6(),
        wH2 = p91();
    class GOA extends Error {
        constructor(A) {
            super(A);
            this.name = "InterceptorConfigurationError", Error.captureStackTrace(this, GOA)
        }
    }
    RH2.InterceptorConfigurationError = GOA;
    class qH2 {
        constructor() {
            this.metadata = void 0, this.message = void 0, this.status = void 0
        }
        withOnReceiveMetadata(A) {
            return this.metadata = A, this
        }
        withOnReceiveMessage(A) {
            return this.message = A, this
        }
        withOnReceiveStatus(A) {
            return this.status = A, this
        }
        build() {
            return {
                onReceiveMetadata: this.metadata,
                onReceiveMessage: this.message,
                onReceiveStatus: this.status
            }
        }
    }
    RH2.ListenerBuilder = qH2;
    class NH2 {
        constructor() {
            this.start = void 0, this.message = void 0, this.halfClose = void 0, this.cancel = void 0
        }
        withStart(A) {
            return this.start = A, this
        }
        withSendMessage(A) {
            return this.message = A, this
        }
        withHalfClose(A) {
            return this.halfClose = A, this
        }
        withCancel(A) {
            return this.cancel = A, this
        }
        build() {
            return {
                start: this.start,
                sendMessage: this.message,
                halfClose: this.halfClose,
                cancel: this.cancel
            }
        }
    }
    RH2.RequesterBuilder = NH2;
    var yB0 = {
            onReceiveMetadata: (A, Q) => {
                Q(A)
            },
            onReceiveMessage: (A, Q) => {
                Q(A)
            },
            onReceiveStatus: (A, Q) => {
                Q(A)
            }
        },
        BOA = {
            start: (A, Q, B) => {
                B(A, Q)
            },
            sendMessage: (A, Q) => {
                Q(A)
            },
            halfClose: (A) => {
                A()
            },
            cancel: (A) => {
                A()
            }
        };
    class LH2 {
        constructor(A, Q) {
            var B, G, Z, I;
            if (this.nextCall = A, this.processingMetadata = !1, this.pendingMessageContext = null, this.processingMessage = !1, this.pendingHalfClose = !1, Q) this.requester = {
                start: (B = Q.start) !== null && B !== void 0 ? B : BOA.start,
                sendMessage: (G = Q.sendMessage) !== null && G !== void 0 ? G : BOA.sendMessage,
                halfClose: (Z = Q.halfClose) !== null && Z !== void 0 ? Z : BOA.halfClose,
                cancel: (I = Q.cancel) !== null && I !== void 0 ? I : BOA.cancel
            };
            else this.requester = BOA
        }
        cancelWithStatus(A, Q) {
            this.requester.cancel(() => {
                this.nextCall.cancelWithStatus(A, Q)
            })
        }
        getPeer() {
            return this.nextCall.getPeer()
        }
        processPendingMessage() {
            if (this.pendingMessageContext) this.nextCall.sendMessageWithContext(this.pendingMessageContext, this.pendingMessage), this.pendingMessageContext = null, this.pendingMessage = null
        }
        processPendingHalfClose() {
            if (this.pendingHalfClose) this.nextCall.halfClose()
        }
        start(A, Q) {
            var B, G, Z, I, Y, J;
            let W = {
                onReceiveMetadata: (G = (B = Q === null || Q === void 0 ? void 0 : Q.onReceiveMetadata) === null || B === void 0 ? void 0 : B.bind(Q)) !== null && G !== void 0 ? G : (X) => {},
                onReceiveMessage: (I = (Z = Q === null || Q === void 0 ? void 0 : Q.onReceiveMessage) === null || Z === void 0 ? void 0 : Z.bind(Q)) !== null && I !== void 0 ? I : (X) => {},
                onReceiveStatus: (J = (Y = Q === null || Q === void 0 ? void 0 : Q.onReceiveStatus) === null || Y === void 0 ? void 0 : Y.bind(Q)) !== null && J !== void 0 ? J : (X) => {}
            };
            this.processingMetadata = !0, this.requester.start(A, W, (X, F) => {
                var V, K, D;
                this.processingMetadata = !1;
                let H;
                if ((0, UH2.isInterceptingListener)(F)) H = F;
                else {
                    let C = {
                        onReceiveMetadata: (V = F.onReceiveMetadata) !== null && V !== void 0 ? V : yB0.onReceiveMetadata,
                        onReceiveMessage: (K = F.onReceiveMessage) !== null && K !== void 0 ? K : yB0.onReceiveMessage,
                        onReceiveStatus: (D = F.onReceiveStatus) !== null && D !== void 0 ? D : yB0.onReceiveStatus
                    };
                    H = new UH2.InterceptingListenerImpl(C, W)
                }
                this.nextCall.start(X, H), this.processPendingMessage(), this.processPendingHalfClose()
            })
        }
        sendMessageWithContext(A, Q) {
            this.processingMessage = !0, this.requester.sendMessage(Q, (B) => {
                if (this.processingMessage = !1, this.processingMetadata) this.pendingMessageContext = A, this.pendingMessage = Q;
                else this.nextCall.sendMessageWithContext(A, B), this.processPendingHalfClose()
            })
        }
        sendMessage(A) {
            this.sendMessageWithContext({}, A)
        }
        startRead() {
            this.nextCall.startRead()
        }
        halfClose() {
            this.requester.halfClose(() => {
                if (this.processingMetadata || this.processingMessage) this.pendingHalfClose = !0;
                else this.nextCall.halfClose()
            })
        }
        getAuthContext() {
            return this.nextCall.getAuthContext()
        }
    }
    RH2.InterceptingCall = LH2;

    function yq5(A, Q, B) {
        var G, Z;
        let I = (G = B.deadline) !== null && G !== void 0 ? G : 1 / 0,
            Y = B.host,
            J = (Z = B.parent) !== null && Z !== void 0 ? Z : null,
            W = B.propagate_flags,
            X = B.credentials,
            F = A.createCall(Q, I, Y, J, W);
        if (X) F.setCredentials(X);
        return F
    }
    class xB0 {
        constructor(A, Q) {
            this.call = A, this.methodDefinition = Q
        }
        cancelWithStatus(A, Q) {
            this.call.cancelWithStatus(A, Q)
        }
        getPeer() {
            return this.call.getPeer()
        }
        sendMessageWithContext(A, Q) {
            let B;
            try {
                B = this.methodDefinition.requestSerialize(Q)
            } catch (G) {
                this.call.cancelWithStatus($H2.Status.INTERNAL, `Request message serialization failure: ${(0,wH2.getErrorMessage)(G)}`);
                return
            }
            this.call.sendMessageWithContext(A, B)
        }
        sendMessage(A) {
            this.sendMessageWithContext({}, A)
        }
        start(A, Q) {
            let B = null;
            this.call.start(A, {
                onReceiveMetadata: (G) => {
                    var Z;
                    (Z = Q === null || Q === void 0 ? void 0 : Q.onReceiveMetadata) === null || Z === void 0 || Z.call(Q, G)
                },
                onReceiveMessage: (G) => {
                    var Z;
                    let I;
                    try {
                        I = this.methodDefinition.responseDeserialize(G)
                    } catch (Y) {
                        B = {
                            code: $H2.Status.INTERNAL,
                            details: `Response message parsing error: ${(0,wH2.getErrorMessage)(Y)}`,
                            metadata: new kq5.Metadata
                        }, this.call.cancelWithStatus(B.code, B.details);
                        return
                    }(Z = Q === null || Q === void 0 ? void 0 : Q.onReceiveMessage) === null || Z === void 0 || Z.call(Q, I)
                },
                onReceiveStatus: (G) => {
                    var Z, I;
                    if (B)(Z = Q === null || Q === void 0 ? void 0 : Q.onReceiveStatus) === null || Z === void 0 || Z.call(Q, B);
                    else(I = Q === null || Q === void 0 ? void 0 : Q.onReceiveStatus) === null || I === void 0 || I.call(Q, G)
                }
            })
        }
        startRead() {
            this.call.startRead()
        }
        halfClose() {
            this.call.halfClose()
        }
        getAuthContext() {
            return this.call.getAuthContext()
        }
    }
    class MH2 extends xB0 {
        constructor(A, Q) {
            super(A, Q)
        }
        start(A, Q) {
            var B, G;
            let Z = !1,
                I = {
                    onReceiveMetadata: (G = (B = Q === null || Q === void 0 ? void 0 : Q.onReceiveMetadata) === null || B === void 0 ? void 0 : B.bind(Q)) !== null && G !== void 0 ? G : (Y) => {},
                    onReceiveMessage: (Y) => {
                        var J;
                        Z = !0, (J = Q === null || Q === void 0 ? void 0 : Q.onReceiveMessage) === null || J === void 0 || J.call(Q, Y)
                    },
                    onReceiveStatus: (Y) => {
                        var J, W;
                        if (!Z)(J = Q === null || Q === void 0 ? void 0 : Q.onReceiveMessage) === null || J === void 0 || J.call(Q, null);
                        (W = Q === null || Q === void 0 ? void 0 : Q.onReceiveStatus) === null || W === void 0 || W.call(Q, Y)
                    }
                };
            super.start(A, I), this.call.startRead()
        }
    }
    class OH2 extends xB0 {}

    function xq5(A, Q, B) {
        let G = yq5(A, B.path, Q);
        if (B.responseStream) return new OH2(G, B);
        else return new MH2(G, B)
    }

    function vq5(A, Q, B, G) {
        if (A.clientInterceptors.length > 0 && A.clientInterceptorProviders.length > 0) throw new GOA("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
        if (A.callInterceptors.length > 0 && A.callInterceptorProviders.length > 0) throw new GOA("Both interceptors and interceptor_providers were passed as call options. Only one of these is allowed.");
        let Z = [];
        if (A.callInterceptors.length > 0 || A.callInterceptorProviders.length > 0) Z = [].concat(A.callInterceptors, A.callInterceptorProviders.map((J) => J(Q))).filter((J) => J);
        else Z = [].concat(A.clientInterceptors, A.clientInterceptorProviders.map((J) => J(Q))).filter((J) => J);
        let I = Object.assign({}, B, {
            method_definition: Q
        });
        return Z.reduceRight((J, W) => {
            return (X) => W(X, J)
        }, (J) => xq5(G, J, Q))(I)
    }
});
var fB0 = U((jH2) => {
    Object.defineProperty(jH2, "__esModule", {
        value: !0
    });
    jH2.Client = void 0;
    var lk = HH2(),
        uq5 = hB0(),
        mq5 = dE(),
        vi = K6(),
        mYA = BK(),
        I41 = vB0(),
        XP = Symbol(),
        dYA = Symbol(),
        cYA = Symbol(),
        qh = Symbol();

    function bB0(A) {
        return typeof A === "function"
    }

    function pYA(A) {
        var Q;
        return ((Q = A.stack) === null || Q === void 0 ? void 0 : Q.split(`
`).slice(1).join(`
`)) || "no stack trace available"
    }
    class PH2 {
        constructor(A, Q, B = {}) {
            var G, Z;
            if (B = Object.assign({}, B), this[dYA] = (G = B.interceptors) !== null && G !== void 0 ? G : [], delete B.interceptors, this[cYA] = (Z = B.interceptor_providers) !== null && Z !== void 0 ? Z : [], delete B.interceptor_providers, this[dYA].length > 0 && this[cYA].length > 0) throw Error("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
            if (this[qh] = B.callInvocationTransformer, delete B.callInvocationTransformer, B.channelOverride) this[XP] = B.channelOverride;
            else if (B.channelFactoryOverride) {
                let I = B.channelFactoryOverride;
                delete B.channelFactoryOverride, this[XP] = I(A, Q, B)
            } else this[XP] = new uq5.ChannelImplementation(A, Q, B)
        }
        close() {
            this[XP].close()
        }
        getChannel() {
            return this[XP]
        }
        waitForReady(A, Q) {
            let B = (G) => {
                if (G) {
                    Q(Error("Failed to connect before the deadline"));
                    return
                }
                let Z;
                try {
                    Z = this[XP].getConnectivityState(!0)
                } catch (I) {
                    Q(Error("The channel has been closed"));
                    return
                }
                if (Z === mq5.ConnectivityState.READY) Q();
                else try {
                    this[XP].watchConnectivityState(Z, A, B)
                } catch (I) {
                    Q(Error("The channel has been closed"))
                }
            };
            setImmediate(B)
        }
        checkOptionalUnaryResponseArguments(A, Q, B) {
            if (bB0(A)) return {
                metadata: new mYA.Metadata,
                options: {},
                callback: A
            };
            else if (bB0(Q))
                if (A instanceof mYA.Metadata) return {
                    metadata: A,
                    options: {},
                    callback: Q
                };
                else return {
                    metadata: new mYA.Metadata,
                    options: A,
                    callback: Q
                };
            else {
                if (!(A instanceof mYA.Metadata && Q instanceof Object && bB0(B))) throw Error("Incorrect arguments passed");
                return {
                    metadata: A,
                    options: Q,
                    callback: B
                }
            }
        }
        makeUnaryRequest(A, Q, B, G, Z, I, Y) {
            var J, W;
            let X = this.checkOptionalUnaryResponseArguments(Z, I, Y),
                F = {
                    path: A,
                    requestStream: !1,
                    responseStream: !1,
                    requestSerialize: Q,
                    responseDeserialize: B
                },
                V = {
                    argument: G,
                    metadata: X.metadata,
                    call: new lk.ClientUnaryCallImpl,
                    channel: this[XP],
                    methodDefinition: F,
                    callOptions: X.options,
                    callback: X.callback
                };
            if (this[qh]) V = this[qh](V);
            let K = V.call,
                D = {
                    clientInterceptors: this[dYA],
                    clientInterceptorProviders: this[cYA],
                    callInterceptors: (J = V.callOptions.interceptors) !== null && J !== void 0 ? J : [],
                    callInterceptorProviders: (W = V.callOptions.interceptor_providers) !== null && W !== void 0 ? W : []
                },
                H = (0, I41.getInterceptingCall)(D, V.methodDefinition, V.callOptions, V.channel);
            K.call = H;
            let C = null,
                E = !1,
                z = Error();
            return H.start(V.metadata, {
                onReceiveMetadata: (w) => {
                    K.emit("metadata", w)
                },
                onReceiveMessage(w) {
                    if (C !== null) H.cancelWithStatus(vi.Status.UNIMPLEMENTED, "Too many responses received");
                    C = w
                },
                onReceiveStatus(w) {
                    if (E) return;
                    if (E = !0, w.code === vi.Status.OK)
                        if (C === null) {
                            let N = pYA(z);
                            V.callback((0, lk.callErrorFromStatus)({
                                code: vi.Status.UNIMPLEMENTED,
                                details: "No message received",
                                metadata: w.metadata
                            }, N))
                        } else V.callback(null, C);
                    else {
                        let N = pYA(z);
                        V.callback((0, lk.callErrorFromStatus)(w, N))
                    }
                    z = null, K.emit("status", w)
                }
            }), H.sendMessage(G), H.halfClose(), K
        }
        makeClientStreamRequest(A, Q, B, G, Z, I) {
            var Y, J;
            let W = this.checkOptionalUnaryResponseArguments(G, Z, I),
                X = {
                    path: A,
                    requestStream: !0,
                    responseStream: !1,
                    requestSerialize: Q,
                    responseDeserialize: B
                },
                F = {
                    metadata: W.metadata,
                    call: new lk.ClientWritableStreamImpl(Q),
                    channel: this[XP],
                    methodDefinition: X,
                    callOptions: W.options,
                    callback: W.callback
                };
            if (this[qh]) F = this[qh](F);
            let V = F.call,
                K = {
                    clientInterceptors: this[dYA],
                    clientInterceptorProviders: this[cYA],
                    callInterceptors: (Y = F.callOptions.interceptors) !== null && Y !== void 0 ? Y : [],
                    callInterceptorProviders: (J = F.callOptions.interceptor_providers) !== null && J !== void 0 ? J : []
                },
                D = (0, I41.getInterceptingCall)(K, F.methodDefinition, F.callOptions, F.channel);
            V.call = D;
            let H = null,
                C = !1,
                E = Error();
            return D.start(F.metadata, {
                onReceiveMetadata: (z) => {
                    V.emit("metadata", z)
                },
                onReceiveMessage(z) {
                    if (H !== null) D.cancelWithStatus(vi.Status.UNIMPLEMENTED, "Too many responses received");
                    H = z, D.startRead()
                },
                onReceiveStatus(z) {
                    if (C) return;
                    if (C = !0, z.code === vi.Status.OK)
                        if (H === null) {
                            let w = pYA(E);
                            F.callback((0, lk.callErrorFromStatus)({
                                code: vi.Status.UNIMPLEMENTED,
                                details: "No message received",
                                metadata: z.metadata
                            }, w))
                        } else F.callback(null, H);
                    else {
                        let w = pYA(E);
                        F.callback((0, lk.callErrorFromStatus)(z, w))
                    }
                    E = null, V.emit("status", z)
                }
            }), V
        }
        checkMetadataAndOptions(A, Q) {
            let B, G;
            if (A instanceof mYA.Metadata)
                if (B = A, Q) G = Q;
                else G = {};
            else {
                if (A) G = A;
                else G = {};
                B = new mYA.Metadata
            }
            return {
                metadata: B,
                options: G
            }
        }
        makeServerStreamRequest(A, Q, B, G, Z, I) {
            var Y, J;
            let W = this.checkMetadataAndOptions(Z, I),
                X = {
                    path: A,
                    requestStream: !1,
                    responseStream: !0,
                    requestSerialize: Q,
                    responseDeserialize: B
                },
                F = {
                    argument: G,
                    metadata: W.metadata,
                    call: new lk.ClientReadableStreamImpl(B),
                    channel: this[XP],
                    methodDefinition: X,
                    callOptions: W.options
                };
            if (this[qh]) F = this[qh](F);
            let V = F.call,
                K = {
                    clientInterceptors: this[dYA],
                    clientInterceptorProviders: this[cYA],
                    callInterceptors: (Y = F.callOptions.interceptors) !== null && Y !== void 0 ? Y : [],
                    callInterceptorProviders: (J = F.callOptions.interceptor_providers) !== null && J !== void 0 ? J : []
                },
                D = (0, I41.getInterceptingCall)(K, F.methodDefinition, F.callOptions, F.channel);
            V.call = D;
            let H = !1,
                C = Error();
            return D.start(F.metadata, {
                onReceiveMetadata(E) {
                    V.emit("metadata", E)
                },
                onReceiveMessage(E) {
                    V.push(E)
                },
                onReceiveStatus(E) {
                    if (H) return;
                    if (H = !0, V.push(null), E.code !== vi.Status.OK) {
                        let z = pYA(C);
                        V.emit("error", (0, lk.callErrorFromStatus)(E, z))
                    }
                    C = null, V.emit("status", E)
                }
            }), D.sendMessage(G), D.halfClose(), V
        }
        makeBidiStreamRequest(A, Q, B, G, Z) {
            var I, Y;
            let J = this.checkMetadataAndOptions(G, Z),
                W = {
                    path: A,
                    requestStream: !0,
                    responseStream: !0,
                    requestSerialize: Q,
                    responseDeserialize: B
                },
                X = {
                    metadata: J.metadata,
                    call: new lk.ClientDuplexStreamImpl(Q, B),
                    channel: this[XP],
                    methodDefinition: W,
                    callOptions: J.options
                };
            if (this[qh]) X = this[qh](X);
            let F = X.call,
                V = {
                    clientInterceptors: this[dYA],
                    clientInterceptorProviders: this[cYA],
                    callInterceptors: (I = X.callOptions.interceptors) !== null && I !== void 0 ? I : [],
                    callInterceptorProviders: (Y = X.callOptions.interceptor_providers) !== null && Y !== void 0 ? Y : []
                },
                K = (0, I41.getInterceptingCall)(V, X.methodDefinition, X.callOptions, X.channel);
            F.call = K;
            let D = !1,
                H = Error();
            return K.start(X.metadata, {
                onReceiveMetadata(C) {
                    F.emit("metadata", C)
                },
                onReceiveMessage(C) {
                    F.push(C)
                },
                onReceiveStatus(C) {
                    if (D) return;
                    if (D = !0, F.push(null), C.code !== vi.Status.OK) {
                        let E = pYA(H);
                        F.emit("error", (0, lk.callErrorFromStatus)(C, E))
                    }
                    H = null, F.emit("status", C)
                }
            }), F
        }
    }
    jH2.Client = PH2
});
var Y41 = U((kH2) => {
    Object.defineProperty(kH2, "__esModule", {
        value: !0
    });
    kH2.makeClientConstructor = _H2;
    kH2.loadPackageDefinition = lq5;
    var ZOA = fB0(),
        dq5 = {
            unary: ZOA.Client.prototype.makeUnaryRequest,
            server_stream: ZOA.Client.prototype.makeServerStreamRequest,
            client_stream: ZOA.Client.prototype.makeClientStreamRequest,
            bidi: ZOA.Client.prototype.makeBidiStreamRequest
        };

    function gB0(A) {
        return ["__proto__", "prototype", "constructor"].includes(A)
    }

    function _H2(A, Q, B) {
        if (!B) B = {};
        class G extends ZOA.Client {}
        return Object.keys(A).forEach((Z) => {
            if (gB0(Z)) return;
            let I = A[Z],
                Y;
            if (typeof Z === "string" && Z.charAt(0) === "$") throw Error("Method names cannot start with $");
            if (I.requestStream)
                if (I.responseStream) Y = "bidi";
                else Y = "client_stream";
            else if (I.responseStream) Y = "server_stream";
            else Y = "unary";
            let {
                requestSerialize: J,
                responseDeserialize: W
            } = I, X = cq5(dq5[Y], I.path, J, W);
            if (G.prototype[Z] = X, Object.assign(G.prototype[Z], I), I.originalName && !gB0(I.originalName)) G.prototype[I.originalName] = G.prototype[Z]
        }), G.service = A, G.serviceName = Q, G
    }

    function cq5(A, Q, B, G) {
        return function(...Z) {
            return A.call(this, Q, B, G, ...Z)
        }
    }

    function pq5(A) {
        return "format" in A
    }

    function lq5(A) {
        let Q = {};
        for (let B in A)
            if (Object.prototype.hasOwnProperty.call(A, B)) {
                let G = A[B],
                    Z = B.split(".");
                if (Z.some((J) => gB0(J))) continue;
                let I = Z[Z.length - 1],
                    Y = Q;
                for (let J of Z.slice(0, -1)) {
                    if (!Y[J]) Y[J] = {};
                    Y = Y[J]
                }
                if (pq5(G)) Y[I] = G;
                else Y[I] = _H2(G, I, {})
            } return Q
    }
});
var GC2 = U((DuG, BC2) => {
    var aq5 = 1 / 0,
        sq5 = "[object Symbol]",
        rq5 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        oq5 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        W41 = "\\ud800-\\udfff",
        uH2 = "\\u0300-\\u036f\\ufe20-\\ufe23",
        mH2 = "\\u20d0-\\u20f0",
        dH2 = "\\u2700-\\u27bf",
        cH2 = "a-z\\xdf-\\xf6\\xf8-\\xff",
        tq5 = "\\xac\\xb1\\xd7\\xf7",
        eq5 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
        AN5 = "\\u2000-\\u206f",
        QN5 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        pH2 = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        lH2 = "\\ufe0e\\ufe0f",
        iH2 = tq5 + eq5 + AN5 + QN5,
        mB0 = "['’]",
        BN5 = "[" + W41 + "]",
        yH2 = "[" + iH2 + "]",
        J41 = "[" + uH2 + mH2 + "]",
        nH2 = "\\d+",
        GN5 = "[" + dH2 + "]",
        aH2 = "[" + cH2 + "]",
        sH2 = "[^" + W41 + iH2 + nH2 + dH2 + cH2 + pH2 + "]",
        uB0 = "\\ud83c[\\udffb-\\udfff]",
        ZN5 = "(?:" + J41 + "|" + uB0 + ")",
        rH2 = "[^" + W41 + "]",
        dB0 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        cB0 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        lYA = "[" + pH2 + "]",
        oH2 = "\\u200d",
        xH2 = "(?:" + aH2 + "|" + sH2 + ")",
        IN5 = "(?:" + lYA + "|" + sH2 + ")",
        vH2 = "(?:" + mB0 + "(?:d|ll|m|re|s|t|ve))?",
        bH2 = "(?:" + mB0 + "(?:D|LL|M|RE|S|T|VE))?",
        tH2 = ZN5 + "?",
        eH2 = "[" + lH2 + "]?",
        YN5 = "(?:" + oH2 + "(?:" + [rH2, dB0, cB0].join("|") + ")" + eH2 + tH2 + ")*",
        AC2 = eH2 + tH2 + YN5,
        JN5 = "(?:" + [GN5, dB0, cB0].join("|") + ")" + AC2,
        WN5 = "(?:" + [rH2 + J41 + "?", J41, dB0, cB0, BN5].join("|") + ")",
        XN5 = RegExp(mB0, "g"),
        FN5 = RegExp(J41, "g"),
        VN5 = RegExp(uB0 + "(?=" + uB0 + ")|" + WN5 + AC2, "g"),
        KN5 = RegExp([lYA + "?" + aH2 + "+" + vH2 + "(?=" + [yH2, lYA, "$"].join("|") + ")", IN5 + "+" + bH2 + "(?=" + [yH2, lYA + xH2, "$"].join("|") + ")", lYA + "?" + xH2 + "+" + vH2, lYA + "+" + bH2, nH2, JN5].join("|"), "g"),
        DN5 = RegExp("[" + oH2 + W41 + uH2 + mH2 + lH2 + "]"),
        HN5 = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        CN5 = {
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss",
            "Ā": "A",
            "Ă": "A",
            "Ą": "A",
            "ā": "a",
            "ă": "a",
            "ą": "a",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "Ď": "D",
            "Đ": "D",
            "ď": "d",
            "đ": "d",
            "Ē": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ę": "E",
            "Ě": "E",
            "ē": "e",
            "ĕ": "e",
            "ė": "e",
            "ę": "e",
            "ě": "e",
            "Ĝ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ģ": "G",
            "ĝ": "g",
            "ğ": "g",
            "ġ": "g",
            "ģ": "g",
            "Ĥ": "H",
            "Ħ": "H",
            "ĥ": "h",
            "ħ": "h",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "Į": "I",
            "İ": "I",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "į": "i",
            "ı": "i",
            "Ĵ": "J",
            "ĵ": "j",
            "Ķ": "K",
            "ķ": "k",
            "ĸ": "k",
            "Ĺ": "L",
            "Ļ": "L",
            "Ľ": "L",
            "Ŀ": "L",
            "Ł": "L",
            "ĺ": "l",
            "ļ": "l",
            "ľ": "l",
            "ŀ": "l",
            "ł": "l",
            "Ń": "N",
            "Ņ": "N",
            "Ň": "N",
            "Ŋ": "N",
            "ń": "n",
            "ņ": "n",
            "ň": "n",
            "ŋ": "n",
            "Ō": "O",
            "Ŏ": "O",
            "Ő": "O",
            "ō": "o",
            "ŏ": "o",
            "ő": "o",
            "Ŕ": "R",
            "Ŗ": "R",
            "Ř": "R",
            "ŕ": "r",
            "ŗ": "r",
            "ř": "r",
            "Ś": "S",
            "Ŝ": "S",
            "Ş": "S",
            "Š": "S",
            "ś": "s",
            "ŝ": "s",
            "ş": "s",
            "š": "s",
            "Ţ": "T",
            "Ť": "T",
            "Ŧ": "T",
            "ţ": "t",
            "ť": "t",
            "ŧ": "t",
            "Ũ": "U",
            "Ū": "U",
            "Ŭ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ų": "U",
            "ũ": "u",
            "ū": "u",
            "ŭ": "u",
            "ů": "u",
            "ű": "u",
            "ų": "u",
            "Ŵ": "W",
            "ŵ": "w",
            "Ŷ": "Y",
            "ŷ": "y",
            "Ÿ": "Y",
            "Ź": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "ź": "z",
            "ż": "z",
            "ž": "z",
            "Ĳ": "IJ",
            "ĳ": "ij",
            "Œ": "Oe",
            "œ": "oe",
            "ŉ": "'n",
            "ſ": "ss"
        },
        EN5 = typeof global == "object" && global && global.Object === Object && global,
        zN5 = typeof self == "object" && self && self.Object === Object && self,
        UN5 = EN5 || zN5 || Function("return this")();

    function $N5(A, Q, B, G) {
        var Z = -1,
            I = A ? A.length : 0;
        if (G && I) B = A[++Z];
        while (++Z < I) B = Q(B, A[Z], Z, A);
        return B
    }

    function wN5(A) {
        return A.split("")
    }

    function qN5(A) {
        return A.match(rq5) || []
    }

    function NN5(A) {
        return function(Q) {
            return A == null ? void 0 : A[Q]
        }
    }
    var LN5 = NN5(CN5);

    function QC2(A) {
        return DN5.test(A)
    }

    function MN5(A) {
        return HN5.test(A)
    }

    function ON5(A) {
        return QC2(A) ? RN5(A) : wN5(A)
    }

    function RN5(A) {
        return A.match(VN5) || []
    }

    function TN5(A) {
        return A.match(KN5) || []
    }
    var PN5 = Object.prototype,
        jN5 = PN5.toString,
        fH2 = UN5.Symbol,
        hH2 = fH2 ? fH2.prototype : void 0,
        gH2 = hH2 ? hH2.toString : void 0;
