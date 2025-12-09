/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: api_030.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (24次) = moduleWrapper(fn) - CommonJS module wrapper
 *   L        (8次) = lazyLoader(fn) - Lazy module loader
 *   GA       (8次) = esmImport(module) - ESM import helper
 *   UA       (1次) = require(moduleName) - Node.js require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 30/30
 * Lines: 394814 - 396291 (1478 lines)
 * Original file: cli.js
 */

                    return iD.__generator(this, function(Z) {
                        return B.log("debug", "Dispatching"), B.stats.increment("message_dispatched"), this.queue.push(B), G = this.subscribeToDelivery(B), this.scheduleFlush(0), [2, G]
                    })
                })
            }, Q.prototype.subscribeToDelivery = function(B) {
                return iD.__awaiter(this, void 0, void 0, function() {
                    var G = this;
                    return iD.__generator(this, function(Z) {
                        return [2, new Promise(function(I) {
                            var Y = function(J, W) {
                                if (J.isSame(B))
                                    if (G.off("flush", Y), W) I(J);
                                    else I(J)
                            };
                            G.on("flush", Y)
                        })]
                    })
                })
            }, Q.prototype.dispatchSingle = function(B) {
                return iD.__awaiter(this, void 0, void 0, function() {
                    var G = this;
                    return iD.__generator(this, function(Z) {
                        return B.log("debug", "Dispatching"), B.stats.increment("message_dispatched"), this.queue.updateAttempts(B), B.attempts = 1, [2, this.deliver(B).catch(function(I) {
                            var Y = G.enqueuRetry(I, B);
                            if (!Y) return B.setFailedDelivery({
                                reason: I
                            }), B;
                            return G.subscribeToDelivery(B)
                        })]
                    })
                })
            }, Q.prototype.isEmpty = function() {
                return this.queue.length === 0
            }, Q.prototype.scheduleFlush = function(B) {
                var G = this;
                if (B === void 0) B = 500;
                if (this.flushing) return;
                this.flushing = !0, setTimeout(function() {
                    G.flush().then(function() {
                        setTimeout(function() {
                            if (G.flushing = !1, G.queue.length) G.scheduleFlush(0)
                        }, 0)
                    })
                }, B)
            }, Q.prototype.deliver = function(B) {
                return iD.__awaiter(this, void 0, void 0, function() {
                    var G, Z, I, Y;
                    return iD.__generator(this, function(J) {
                        switch (J.label) {
                            case 0:
                                return [4, this.criticalTasks.done()];
                            case 1:
                                J.sent(), G = Date.now(), J.label = 2;
                            case 2:
                                return J.trys.push([2, 4, , 5]), [4, this.flushOne(B)];
                            case 3:
                                return B = J.sent(), Z = Date.now() - G, this.emit("delivery_success", B), B.stats.gauge("delivered", Z), B.log("debug", "Delivered", B.event), [2, B];
                            case 4:
                                throw I = J.sent(), Y = I, B.log("error", "Failed to deliver", Y), this.emit("delivery_failure", B, Y), B.stats.increment("delivery_failed"), I;
                            case 5:
                                return [2]
                        }
                    })
                })
            }, Q.prototype.enqueuRetry = function(B, G) {
                var Z = !(B instanceof nJ0.ContextCancelation) || B.retry;
                if (!Z) return !1;
                return this.queue.pushWithBackoff(G)
            }, Q.prototype.flush = function() {
                return iD.__awaiter(this, void 0, void 0, function() {
                    var B, G, Z;
                    return iD.__generator(this, function(I) {
                        switch (I.label) {
                            case 0:
                                if (this.queue.length === 0) return [2, []];
                                if (B = this.queue.pop(), !B) return [2, []];
                                B.attempts = this.queue.getAttempts(B), I.label = 1;
                            case 1:
                                return I.trys.push([1, 3, , 4]), [4, this.deliver(B)];
                            case 2:
                                return B = I.sent(), this.emit("flush", B, !0), [3, 4];
                            case 3:
                                if (G = I.sent(), Z = this.enqueuRetry(G, B), !Z) B.setFailedDelivery({
                                    reason: G
                                }), this.emit("flush", B, !1);
                                return [2, []];
                            case 4:
                                return [2, [B]]
                        }
                    })
                })
            }, Q.prototype.isReady = function() {
                return !0
            }, Q.prototype.availableExtensions = function(B) {
                var G = this.plugins.filter(function(D) {
                        var H, C, E;
                        if (D.type !== "destination" && D.name !== "Segment.io") return !0;
                        var z = void 0;
                        return (H = D.alternativeNames) === null || H === void 0 || H.forEach(function(w) {
                            if (B[w] !== void 0) z = B[w]
                        }), (E = (C = B[D.name]) !== null && C !== void 0 ? C : z) !== null && E !== void 0 ? E : (D.name === "Segment.io" ? !0 : B.All) !== !1
                    }),
                    Z = (0, sM3.groupBy)(G, "type"),
                    I = Z.before,
                    Y = I === void 0 ? [] : I,
                    J = Z.enrichment,
                    W = J === void 0 ? [] : J,
                    X = Z.destination,
                    F = X === void 0 ? [] : X,
                    V = Z.after,
                    K = V === void 0 ? [] : V;
                return {
                    before: Y,
                    enrichment: W,
                    destinations: F,
                    after: K
                }
            }, Q.prototype.flushOne = function(B) {
                var G, Z;
                return iD.__awaiter(this, void 0, void 0, function() {
                    var I, Y, J, W, X, F, H, V, K, D, H, C, E, z, w;
                    return iD.__generator(this, function(N) {
                        switch (N.label) {
                            case 0:
                                if (!this.isReady()) throw Error("Not ready");
                                if (B.attempts > 1) this.emit("delivery_retry", B);
                                I = this.availableExtensions((G = B.event.integrations) !== null && G !== void 0 ? G : {}), Y = I.before, J = I.enrichment, W = 0, X = Y, N.label = 1;
                            case 1:
                                if (!(W < X.length)) return [3, 4];
                                return F = X[W], [4, (0, pZ1.ensure)(B, F)];
                            case 2:
                                if (H = N.sent(), H instanceof nJ0.CoreContext) B = H;
                                this.emit("message_enriched", B, F), N.label = 3;
                            case 3:
                                return W++, [3, 1];
                            case 4:
                                V = 0, K = J, N.label = 5;
                            case 5:
                                if (!(V < K.length)) return [3, 8];
                                return D = K[V], [4, (0, pZ1.attempt)(B, D)];
                            case 6:
                                if (H = N.sent(), H instanceof nJ0.CoreContext) B = H;
                                this.emit("message_enriched", B, D), N.label = 7;
                            case 7:
                                return V++, [3, 5];
                            case 8:
                                return C = this.availableExtensions((Z = B.event.integrations) !== null && Z !== void 0 ? Z : {}), E = C.destinations, z = C.after, [4, new Promise(function(q, R) {
                                    setTimeout(function() {
                                        var P = E.map(function(y) {
                                            return (0, pZ1.attempt)(B, y)
                                        });
                                        Promise.all(P).then(q).catch(R)
                                    }, 0)
                                })];
                            case 9:
                                return N.sent(), B.stats.increment("message_delivered"), this.emit("message_delivered", B), w = z.map(function(q) {
                                    return (0, pZ1.attempt)(B, q)
                                }), [4, Promise.all(w)];
                            case 10:
                                return N.sent(), [2, B]
                        }
                    })
                })
            }, Q
        }(oM3.Emitter);
    C29.CoreEventQueue = eM3
});
var $29 = U((U29) => {
    Object.defineProperty(U29, "__esModule", {
        value: !0
    })
});
var M29 = U((q29) => {
    Object.defineProperty(q29, "__esModule", {
        value: !0
    });
    q29.dispatch = q29.getDelay = void 0;
    var w29 = dP(),
        AO3 = vJ0(),
        QO3 = function(A, Q) {
            var B = Date.now() - A;
            return Math.max((Q !== null && Q !== void 0 ? Q : 300) - B, 0)
        };
    q29.getDelay = QO3;

    function BO3(A, Q, B, G) {
        return w29.__awaiter(this, void 0, void 0, function() {
            var Z, I;
            return w29.__generator(this, function(Y) {
                switch (Y.label) {
                    case 0:
                        if (B.emit("dispatch_start", A), Z = Date.now(), !Q.isEmpty()) return [3, 2];
                        return [4, Q.dispatchSingle(A)];
                    case 1:
                        return I = Y.sent(), [3, 4];
                    case 2:
                        return [4, Q.dispatch(A)];
                    case 3:
                        I = Y.sent(), Y.label = 4;
                    case 4:
                        if (!(G === null || G === void 0 ? void 0 : G.callback)) return [3, 6];
                        return [4, (0, AO3.invokeCallback)(I, G.callback, q29.getDelay(Z, G.timeout))];
                    case 5:
                        I = Y.sent(), Y.label = 6;
                    case 6:
                        if (G === null || G === void 0 ? void 0 : G.debug) I.flush();
                        return [2, I]
                }
            })
        })
    }
    q29.dispatch = BO3
});
var T29 = U((O29) => {
    Object.defineProperty(O29, "__esModule", {
        value: !0
    });
    O29.bindAll = void 0;

    function GO3(A) {
        var Q = A.constructor.prototype;
        for (var B = 0, G = Object.getOwnPropertyNames(Q); B < G.length; B++) {
            var Z = G[B];
            if (Z !== "constructor") {
                var I = Object.getOwnPropertyDescriptor(A.constructor.prototype, Z);
                if (!!I && typeof I.value === "function") A[Z] = A[Z].bind(A)
            }
        }
        return A
    }
    O29.bindAll = GO3
});
var Qa = U((BF) => {
    Object.defineProperty(BF, "__esModule", {
        value: !0
    });
    BF.CoreLogger = BF.backoff = void 0;
    var wC = dP();
    wC.__exportStar(kQ9(), BF);
    wC.__exportStar(xQ9(), BF);
    wC.__exportStar(TJ0(), BF);
    wC.__exportStar(AB9(), BF);
    wC.__exportStar(vJ0(), BF);
    wC.__exportStar(uJ0(), BF);
    var ZO3 = gJ0();
    Object.defineProperty(BF, "backoff", {
        enumerable: !0,
        get: function() {
            return ZO3.backoff
        }
    });
    wC.__exportStar(cZ1(), BF);
    wC.__exportStar(z29(), BF);
    wC.__exportStar($29(), BF);
    wC.__exportStar(M29(), BF);
    wC.__exportStar(SJ0(), BF);
    wC.__exportStar(jJ0(), BF);
    wC.__exportStar(yJ0(), BF);
    wC.__exportStar(T29(), BF);
    wC.__exportStar(pJ0(), BF);
    var IO3 = dJ0();
    Object.defineProperty(BF, "CoreLogger", {
        enumerable: !0,
        get: function() {
            return IO3.CoreLogger
        }
    });
    wC.__exportStar(iJ0(), BF)
});
var S29 = U((P29) => {
    Object.defineProperty(P29, "__esModule", {
        value: !0
    });
    P29.validateSettings = void 0;
    var JO3 = Qa(),
        WO3 = (A) => {
            if (!A.writeKey) throw new JO3.ValidationError("writeKey", "writeKey is missing.")
        };
    P29.validateSettings = WO3
});
var aJ0 = U((_29) => {
    Object.defineProperty(_29, "__esModule", {
        value: !0
    });
    _29.version = void 0;
    _29.version = "1.3.0"
});
var v29 = U((y29) => {
    Object.defineProperty(y29, "__esModule", {
        value: !0
    });
    y29.tryCreateFormattedUrl = void 0;
    var XO3 = (A) => A.replace(/\/$/, ""),
        FO3 = (A, Q) => {
            return XO3(new URL(Q || "", A).href)
        };
    y29.tryCreateFormattedUrl = FO3
});
var rJ0 = U((sJ0) => {
    Object.defineProperty(sJ0, "__esModule", {
        value: !0
    });
    sJ0.uuid = void 0;
    var VO3 = mJ0();
    Object.defineProperty(sJ0, "uuid", {
        enumerable: !0,
        get: function() {
            return VO3.v4
        }
    })
});
var m29 = U((g29) => {
    Object.defineProperty(g29, "__esModule", {
        value: !0
    });
    g29.ContextBatch = void 0;
    var DO3 = rJ0(),
        b29 = 32,
        f29 = 480;
    class h29 {
        constructor(A) {
            this.id = (0, DO3.uuid)(), this.items = [], this.sizeInBytes = 0, this.maxEventCount = Math.max(1, A)
        }
        tryAdd(A) {
            if (this.length === this.maxEventCount) return {
                success: !1,
                message: `Event limit of ${this.maxEventCount} has been exceeded.`
            };
            let Q = this.calculateSize(A.context);
            if (Q > b29 * 1024) return {
                success: !1,
                message: `Event exceeds maximum event size of ${b29} KB`
            };
            if (this.sizeInBytes + Q > f29 * 1024) return {
                success: !1,
                message: `Event has caused batch size to exceed ${f29} KB`
            };
            return this.items.push(A), this.sizeInBytes += Q, {
                success: !0
            }
        }
        get length() {
            return this.items.length
        }
        calculateSize(A) {
            return encodeURI(JSON.stringify(A.event)).split(/%..|i/).length
        }
        getEvents() {
            return this.items.map(({
                context: Q
            }) => Q.event)
        }
        getContexts() {
            return this.items.map((A) => A.context)
        }
        resolveEvents() {
            this.items.forEach(({
                resolver: A,
                context: Q
            }) => A(Q))
        }
    }
    g29.ContextBatch = h29
});
var p29 = U((d29) => {
    Object.defineProperty(d29, "__esModule", {
        value: !0
    });
    d29.b64encode = void 0;
    var HO3 = UA("buffer"),
        CO3 = (A) => {
            return HO3.Buffer.from(A).toString("base64")
        };
    d29.b64encode = CO3
});
var s29 = U((n29) => {
    Object.defineProperty(n29, "__esModule", {
        value: !0
    });
    n29.Publisher = void 0;
    var EO3 = Qa(),
        zO3 = v29(),
        UO3 = _XA(),
        $O3 = m29(),
        wO3 = p29();

    function qO3(A) {
        return new Promise((Q) => setTimeout(Q, A))
    }

    function nPA() {}
    class i29 {
        constructor({
            host: A,
            path: Q,
            maxRetries: B,
            flushAt: G,
            flushInterval: Z,
            writeKey: I,
            httpRequestTimeout: Y,
            httpClient: J,
            disable: W
        }, X) {
            this._emitter = X, this._maxRetries = B, this._flushAt = Math.max(G, 1), this._flushInterval = Z, this._auth = (0, wO3.b64encode)(`${I}:`), this._url = (0, zO3.tryCreateFormattedUrl)(A ?? "https://api.segment.io", Q ?? "/v1/batch"), this._httpRequestTimeout = Y ?? 1e4, this._disable = Boolean(W), this._httpClient = J
        }
        createBatch() {
            this.pendingFlushTimeout && clearTimeout(this.pendingFlushTimeout);
            let A = new $O3.ContextBatch(this._flushAt);
            return this._batch = A, this.pendingFlushTimeout = setTimeout(() => {
                if (A === this._batch) this._batch = void 0;
                if (this.pendingFlushTimeout = void 0, A.length) this.send(A).catch(nPA)
            }, this._flushInterval), A
        }
        clearBatch() {
            this.pendingFlushTimeout && clearTimeout(this.pendingFlushTimeout), this._batch = void 0
        }
        flush(A) {
            if (!A) return;
            if (this._flushPendingItemsCount = A, !this._batch) return;
            if (this._batch.length === A) this.send(this._batch).catch(nPA), this.clearBatch()
        }
        enqueue(A) {
            let Q = this._batch ?? this.createBatch(),
                {
                    promise: B,
                    resolve: G
                } = (0, UO3.createDeferred)(),
                Z = {
                    context: A,
                    resolver: G
                };
            if (Q.tryAdd(Z).success) {
                let W = Q.length === this._flushPendingItemsCount;
                if (Q.length === this._flushAt || W) this.send(Q).catch(nPA), this.clearBatch();
                return B
            }
            if (Q.length) this.send(Q).catch(nPA), this.clearBatch();
            let Y = this.createBatch(),
                J = Y.tryAdd(Z);
            if (J.success) {
                if (Y.length === this._flushPendingItemsCount) this.send(Y).catch(nPA), this.clearBatch();
                return B
            } else return A.setFailedDelivery({
                reason: Error(J.message)
            }), Promise.resolve(A)
        }
        async send(A) {
            if (this._flushPendingItemsCount) this._flushPendingItemsCount -= A.length;
            let Q = A.getEvents(),
                B = this._maxRetries + 1,
                G = 0;
            while (G < B) {
                G++;
                let Z;
                try {
                    if (this._disable) return A.resolveEvents();
                    let I = {
                        url: this._url,
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Basic ${this._auth}`,
                            "User-Agent": "analytics-node-next/latest"
                        },
                        data: {
                            batch: Q,
                            sentAt: new Date
                        },
                        httpRequestTimeout: this._httpRequestTimeout
                    };
                    this._emitter.emit("http_request", {
                        body: I.data,
                        method: I.method,
                        url: I.url,
                        headers: I.headers
                    });
                    let Y = await this._httpClient.makeRequest(I);
                    if (Y.status >= 200 && Y.status < 300) {
                        A.resolveEvents();
                        return
                    } else if (Y.status === 400) {
                        l29(A, Error(`[${Y.status}] ${Y.statusText}`));
                        return
                    } else Z = Error(`[${Y.status}] ${Y.statusText}`)
                } catch (I) {
                    Z = I
                }
                if (G === B) {
                    l29(A, Z);
                    return
                }
                await qO3((0, EO3.backoff)({
                    attempt: G,
                    minTimeout: 25,
                    maxTimeout: 1000
                }))
            }
        }
    }
    n29.Publisher = i29;

    function l29(A, Q) {
        A.getContexts().forEach((B) => B.setFailedDelivery({
            reason: Q
        })), A.resolveEvents()
    }
});
var oJ0 = U((r29) => {
    Object.defineProperty(r29, "__esModule", {
        value: !0
    });
    r29.detectRuntime = void 0;
    var NO3 = () => {
        if (typeof process === "object" && process && typeof process.env === "object" && process.env && typeof process.version === "string") return "node";
        if (typeof window === "object") return "browser";
        if (typeof WebSocketPair < "u") return "cloudflare-worker";
        if (typeof EdgeRuntime === "string") return "vercel-edge";
        if (typeof WorkerGlobalScope < "u" && typeof importScripts === "function") return "web-worker";
        return "unknown"
    };
    r29.detectRuntime = NO3
});
var Q99 = U((e29) => {
    Object.defineProperty(e29, "__esModule", {
        value: !0
    });
    e29.createConfiguredNodePlugin = e29.createNodePlugin = void 0;
    var LO3 = s29(),
        MO3 = aJ0(),
        OO3 = oJ0();

    function RO3(A) {
        A.updateEvent("context.library.name", "@segment/analytics-node"), A.updateEvent("context.library.version", MO3.version);
        let Q = (0, OO3.detectRuntime)();
        if (Q === "node") A.updateEvent("_metadata.nodeVersion", process.version);
        A.updateEvent("_metadata.jsRuntime", Q)
    }

    function t29(A) {
        function Q(B) {
            return RO3(B), A.enqueue(B)
        }
        return {
            name: "Segment.io",
            type: "destination",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            alias: Q,
            group: Q,
            identify: Q,
            page: Q,
            screen: Q,
            track: Q
        }
    }
    e29.createNodePlugin = t29;
    var TO3 = (A, Q) => {
        let B = new LO3.Publisher(A, Q);
        return {
            publisher: B,
            plugin: t29(B)
        }
    };
    e29.createConfiguredNodePlugin = TO3
});
var Z99 = U((B99) => {
    Object.defineProperty(B99, "__esModule", {
        value: !0
    });
    B99.createMessageId = void 0;
    var jO3 = rJ0(),
        SO3 = () => {
            return `node-next-${Date.now()}-${(0,jO3.uuid)()}`
        };
    B99.createMessageId = SO3
});
var W99 = U((Y99) => {
    Object.defineProperty(Y99, "__esModule", {
        value: !0
    });
    Y99.NodeEventFactory = void 0;
    var _O3 = Qa(),
        kO3 = Z99();
    class I99 extends _O3.EventFactory {
        constructor() {
            super({
                createMessageId: kO3.createMessageId
            })
        }
    }
    Y99.NodeEventFactory = I99
});
var lZ1 = U((F99) => {
    Object.defineProperty(F99, "__esModule", {
        value: !0
    });
    F99.Context = void 0;
    var yO3 = Qa();
    class X99 extends yO3.CoreContext {
        static system() {
            return new this({
                type: "track",
                event: "system"
            })
        }
    }
    F99.Context = X99
});
var H99 = U((K99) => {
    Object.defineProperty(K99, "__esModule", {
        value: !0
    });
    K99.dispatchAndEmit = void 0;
    var xO3 = Qa(),
        vO3 = lZ1(),
        bO3 = (A) => (Q) => {
            let B = Q.failedDelivery();
            return B ? A(B.reason, Q) : A(void 0, Q)
        },
        fO3 = async (A, Q, B, G) => {
            try {
                let Z = new vO3.Context(A),
                    I = await (0, xO3.dispatch)(Z, Q, B, {
                        ...G ? {
                            callback: bO3(G)
                        } : {}
                    }),
                    Y = I.failedDelivery();
                if (Y) B.emit("error", {
                    code: "delivery_failure",
                    reason: Y.reason,
                    ctx: I
                });
                else B.emit(A.type, I)
            } catch (Z) {
                B.emit("error", {
                    code: "unknown",
                    reason: Z
                })
            }
        };
    K99.dispatchAndEmit = fO3
});
var U99 = U((E99) => {
    Object.defineProperty(E99, "__esModule", {
        value: !0
    });
    E99.NodeEmitter = void 0;
    var hO3 = _XA();
    class C99 extends hO3.Emitter {}
    E99.NodeEmitter = C99
});
var M99 = U((N99) => {
    Object.defineProperty(N99, "__esModule", {
        value: !0
    });
    N99.NodeEventQueue = void 0;
    var $99 = Qa();
    class w99 extends $99.PriorityQueue {
        constructor() {
            super(1, [])
        }
        getAttempts(A) {
            return A.attempts ?? 0
        }
        updateAttempts(A) {
            return A.attempts = this.getAttempts(A) + 1, this.getAttempts(A)
        }
    }
    class q99 extends $99.CoreEventQueue {
        constructor() {
            super(new w99)
        }
    }
    N99.NodeEventQueue = q99
});
var P99 = U((R99) => {
    Object.defineProperty(R99, "__esModule", {
        value: !0
    });
    R99.abortSignalAfterTimeout = R99.AbortSignal = void 0;
    var gO3 = _XA(),
        uO3 = oJ0();
    class tJ0 {
        constructor() {
            this.onabort = null, this.aborted = !1, this.eventEmitter = new gO3.Emitter
        }
        toString() {
            return "[object AbortSignal]"
        }
        get[Symbol.toStringTag]() {
            return "AbortSignal"
        }
        removeEventListener(...A) {
            this.eventEmitter.off(...A)
        }
        addEventListener(...A) {
            this.eventEmitter.on(...A)
        }
        dispatchEvent(A) {
            let Q = {
                    type: A,
                    target: this
                },
                B = `on${A}`;
            if (typeof this[B] === "function") this[B](Q);
            this.eventEmitter.emit(A, Q)
        }
    }
    R99.AbortSignal = tJ0;
    class O99 {
        constructor() {
            this.signal = new tJ0
        }
        abort() {
            if (this.signal.aborted) return;
            this.signal.aborted = !0, this.signal.dispatchEvent("abort")
        }
        toString() {
            return "[object AbortController]"
        }
        get[Symbol.toStringTag]() {
            return "AbortController"
        }
    }
    var mO3 = (A) => {
        if ((0, uO3.detectRuntime)() === "cloudflare-worker") return [];
        let Q = new(globalThis.AbortController || O99),
            B = setTimeout(() => {
                Q.abort()
            }, A);
        return B?.unref?.(), [Q.signal, B]
    };
    R99.abortSignalAfterTimeout = mO3
});
var j99 = U((ty) => {
    var cO3 = ty && ty.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        pO3 = ty && ty.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        lO3 = ty && ty.__importStar || function(A) {
            if (A && A.__esModule) return A;
            var Q = {};
            if (A != null) {
                for (var B in A)
                    if (B !== "default" && Object.prototype.hasOwnProperty.call(A, B)) cO3(Q, A, B)
            }
            return pO3(Q, A), Q
        };
    Object.defineProperty(ty, "__esModule", {
        value: !0
    });
    ty.fetch = void 0;
    var iO3 = async (...A) => {
        if (globalThis.fetch) return globalThis.fetch(...A);
        else if (typeof EdgeRuntime !== "string") return (await Promise.resolve().then(() => lO3(Mi1()))).default(...A);
        else throw Error("Invariant: an edge runtime that does not support fetch should not exist")
    };
    ty.fetch = iO3
});
var eJ0 = U((_99) => {
    Object.defineProperty(_99, "__esModule", {
        value: !0
    });
    _99.FetchHTTPClient = void 0;
    var nO3 = P99(),
        aO3 = j99();
    class S99 {
        constructor(A) {
            this._fetch = A ?? aO3.fetch
        }
        async makeRequest(A) {
            let [Q, B] = (0, nO3.abortSignalAfterTimeout)(A.httpRequestTimeout), G = {
                url: A.url,
                method: A.method,
                headers: A.headers,
                body: JSON.stringify(A.data),
                signal: Q
            };
            return this._fetch(A.url, G).finally(() => clearTimeout(B))
        }
    }
    _99.FetchHTTPClient = S99
});
var AW0 = U((f99) => {
    Object.defineProperty(f99, "__esModule", {
        value: !0
    });
    f99.Analytics = void 0;
    var y99 = Qa(),
        sO3 = S29(),
        rO3 = aJ0(),
        oO3 = Q99(),
        tO3 = W99(),
        eO3 = H99(),
        AR3 = U99(),
        x99 = lZ1(),
        QR3 = M99(),
        v99 = eJ0();
    class b99 extends AR3.NodeEmitter {
        constructor(A) {
            super();
            this._isClosed = !1, this._pendingEvents = 0, this._isFlushing = !1, (0, sO3.validateSettings)(A), this._eventFactory = new tO3.NodeEventFactory, this._queue = new QR3.NodeEventQueue;
            let Q = A.flushInterval ?? 1e4;
            this._closeAndFlushDefaultTimeout = Q * 1.25;
            let {
                plugin: B,
                publisher: G
            } = (0, oO3.createConfiguredNodePlugin)({
                writeKey: A.writeKey,
                host: A.host,
                path: A.path,
                maxRetries: A.maxRetries ?? 3,
                flushAt: A.flushAt ?? A.maxEventsInBatch ?? 15,
                httpRequestTimeout: A.httpRequestTimeout,
                disable: A.disable,
                flushInterval: Q,
                httpClient: typeof A.httpClient === "function" ? new v99.FetchHTTPClient(A.httpClient) : A.httpClient ?? new v99.FetchHTTPClient
            }, this);
            this._publisher = G, this.ready = this.register(B).then(() => {
                return
            }), this.emit("initialize", A), (0, y99.bindAll)(this)
        }
        get VERSION() {
            return rO3.version
        }
        closeAndFlush({
            timeout: A = this._closeAndFlushDefaultTimeout
        } = {}) {
            return this.flush({
                timeout: A,
                close: !0
            })
        }
        async flush({
            timeout: A,
            close: Q = !1
        } = {}) {
            if (this._isFlushing) {
                console.warn("Overlapping flush calls detected. Please wait for the previous flush to finish before calling .flush again");
                return
            } else this._isFlushing = !0;
            if (Q) this._isClosed = !0;
            this._publisher.flush(this._pendingEvents);
            let B = new Promise((G) => {
                if (!this._pendingEvents) G();
                else this.once("drained", () => {
                    G()
                })
            }).finally(() => {
                this._isFlushing = !1
            });
            return A ? (0, y99.pTimeout)(B, A).catch(() => {
                return
            }) : B
        }
        _dispatch(A, Q) {
            if (this._isClosed) {
                this.emit("call_after_close", A);
                return
            }
            this._pendingEvents++, (0, eO3.dispatchAndEmit)(A, this._queue, this, Q).catch((B) => B).finally(() => {
                if (this._pendingEvents--, !this._pendingEvents) this.emit("drained")
            })
        }
        alias({
            userId: A,
            previousId: Q,
            context: B,
            timestamp: G,
            integrations: Z
        }, I) {
            let Y = this._eventFactory.alias(A, Q, {
                context: B,
                integrations: Z,
                timestamp: G
            });
            this._dispatch(Y, I)
        }
        group({
            timestamp: A,
            groupId: Q,
            userId: B,
            anonymousId: G,
            traits: Z = {},
            context: I,
            integrations: Y
        }, J) {
            let W = this._eventFactory.group(Q, Z, {
                context: I,
                anonymousId: G,
                userId: B,
                timestamp: A,
                integrations: Y
            });
            this._dispatch(W, J)
        }
        identify({
            userId: A,
            anonymousId: Q,
            traits: B = {},
            context: G,
            timestamp: Z,
            integrations: I
        }, Y) {
            let J = this._eventFactory.identify(A, B, {
                context: G,
                anonymousId: Q,
                userId: A,
                timestamp: Z,
                integrations: I
            });
            this._dispatch(J, Y)
        }
        page({
            userId: A,
            anonymousId: Q,
            category: B,
            name: G,
            properties: Z,
            context: I,
            timestamp: Y,
            integrations: J
        }, W) {
            let X = this._eventFactory.page(B ?? null, G ?? null, Z, {
                context: I,
                anonymousId: Q,
                userId: A,
                timestamp: Y,
                integrations: J
            });
            this._dispatch(X, W)
        }
        screen({
            userId: A,
            anonymousId: Q,
            category: B,
            name: G,
            properties: Z,
            context: I,
            timestamp: Y,
            integrations: J
        }, W) {
            let X = this._eventFactory.screen(B ?? null, G ?? null, Z, {
                context: I,
                anonymousId: Q,
                userId: A,
                timestamp: Y,
                integrations: J
            });
            this._dispatch(X, W)
        }
        track({
            userId: A,
            anonymousId: Q,
            event: B,
            properties: G,
            context: Z,
            timestamp: I,
            integrations: Y
        }, J) {
            let W = this._eventFactory.track(B, G, {
                context: Z,
                userId: A,
                anonymousId: Q,
                timestamp: I,
                integrations: Y
            });
            this._dispatch(W, J)
        }
        register(...A) {
            return this._queue.criticalTasks.run(async () => {
                let Q = x99.Context.system(),
                    B = A.map((G) => this._queue.register(Q, G, this));
                await Promise.all(B), this.emit("register", A.map((G) => G.name))
            })
        }
        async deregister(...A) {
            let Q = x99.Context.system(),
                B = A.map((G) => {
                    let Z = this._queue.plugins.find((I) => I.name === G);
                    if (Z) return this._queue.deregister(Q, Z, this);
                    else Q.log("warn", `plugin ${G} not found`)
                });
            await Promise.all(B), this.emit("deregister", A)
        }
    }
    f99.Analytics = b99
});
var g99 = U((aPA) => {
    Object.defineProperty(aPA, "__esModule", {
        value: !0
    });
    aPA.FetchHTTPClient = aPA.Context = aPA.Analytics = void 0;
    var BR3 = AW0();
    Object.defineProperty(aPA, "Analytics", {
        enumerable: !0,
        get: function() {
            return BR3.Analytics
        }
    });
    var GR3 = lZ1();
    Object.defineProperty(aPA, "Context", {
        enumerable: !0,
        get: function() {
            return GR3.Context
        }
    });
    var ZR3 = eJ0();
    Object.defineProperty(aPA, "FetchHTTPClient", {
        enumerable: !0,
        get: function() {
            return ZR3.FetchHTTPClient
        }
    });
    var IR3 = AW0();
    aPA.default = IR3.Analytics
});

function XR3() {
    let A = ["test", "dev"].includes("production") ? "development" : "production";
    return WR3[A]
}
async function FR3() {
    if (hX()) return !1;
    return !0
}
async function QW0(A, Q) {
    let B = await m99();
    if (!B) return;
    try {
        let G = Bx1(),
            Z = i6(),
            I = await Up({
                model: Q.model
            }),
            Y = ATB(I, Q),
            J = {
                anonymousId: G,
                event: A,
                properties: Y
            };
        if (Z) {
            let W = Vp(!0);
            J.userId = W.userID
        }
        B.track(J)
    } catch (G) {
        e(G instanceof Error ? G : Error(String(G)))
    }
}
async function d99(A) {
    let Q = await m99();
    if (!Q) return;
    try {
        let B = Bx1(),
            G = i6(),
            Z = {
                anonymousId: B,
                traits: A
            };
        if (G) {
            let I = Vp(!0);
            Z.userId = I.userID
        }
        Q.identify(Z)
    } catch (B) {
        e(B instanceof Error ? B : Error(String(B)))
    }
}
var u99, WR3, iZ1 = null,
    m99;
var BW0 = L(() => {
    o2();
    eb();
    jQ();
    u1();
    hB();
    t7A();
    St();
    u99 = GA(g99(), 1), WR3 = {
        production: "LKJN8LsLERHEOXkw487o7qCTFOrGPimI",
        development: "b64sf1kxwDGe1PiSAlv5ixuH0f509RKK"
    };
    m99 = t1(async () => {
        if (!await FR3()) return null;
        try {
            return iZ1 = new u99.Analytics({
                writeKey: XR3()
            }), process.on("beforeExit", async () => {
                await iZ1?.closeAndFlush()
            }), process.on("exit", () => {
                iZ1?.closeAndFlush()
            }), iZ1
        } catch (Q) {
            return e(Q instanceof Error ? Q : Error(String(Q))), null
        }
    })
});

function VR3() {
    let A = i6();
    if (!A) return {};
    return {
        email: A.emailAddress,
        account_uuid: A.accountUuid,
        organization_uuid: A.organizationUuid
    }
}

function sPA(A) {
    let Q = tn(),
        B = DQ(() => A.onDone(!1, Q));
    return h1((G, Z) => {
        if (Z.escape) A.onDone(!1, Q)
    }), qC.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, qC.createElement(ei, {
        onDone: () => A.onDone(!0, Q),
        startingMessage: A.startingMessage
    }), qC.createElement(j, {
        marginLeft: 1
    }, qC.createElement($, {
        dimColor: !0
    }, B.pending ? qC.createElement(qC.Fragment, null, "Press ", B.keyName, " again to exit") : "")))
}
var qC, c99 = () => ({
    type: "local-jsx",
    name: "login",
    description: XQB() ? "Switch Anthropic accounts" : "Sign in with your Anthropic account",
    isEnabled: () => !process.env.DISABLE_LOGIN_COMMAND,
    isHidden: !1,
    async call(A, Q) {
        return qC.createElement(sPA, {
            onDone: async (B) => {
                if (Q.onChangeAPIKey(), B) nW1(), v0A(), d99(VR3());
                A(B ? "Login successful" : "Login interrupted")
            }
        })
    },
    userFacingName() {
        return "login"
    }
});
var nZ1 = L(() => {
    KRA();
    c9();
    hA();
    hB();
    bPA();
    O9();
    S0();
    BW0();
    hB();
    qC = GA(VA(), 1)
});
var p99, KR3, ey;
var rPA = L(() => {
    u1();
    hB();
    lM();
    nZ1();
    p99 = GA(VA(), 1), KR3 = {
        type: "local-jsx",
        name: "extra-usage",
        description: "Access and configure extra usage to keep working when limits are hit",
        isEnabled: () => {
            if (process.env.DISABLE_EXTRA_USAGE_COMMAND) return !1;
            let A = x4();
            return A === "pro" || A === "max"
        },
        isHidden: !1,
        async call(A, Q) {
            try {
                return await gZ("https://claude.ai/settings/usage"), p99.default.createElement(sPA, {
                    startingMessage: "Starting new login following /extra-usage. Exit with Ctrl-C to use existing account.",
                    onDone: (B) => {
                        Q.onChangeAPIKey(), A(B ? "Login successful" : "Login interrupted")
                    }
                })
            } catch (B) {
                e(B), A("Failed to open browser. Please visit https://claude.ai/settings/usage to see your extra usage.")
            }
            return null
        },
        userFacingName() {
            return "extra-usage"
        }
    }, ey = KR3
});

function GW0() {
    return ZI("claude_code_overages_upgrade_cta", "variant", l99)
}

function i99({
    text: A,
    onOpenRateLimitOptions: Q
}) {
    let B = x4(),
        G = Dc(),
        Z = B === "pro" || B === "max",
        I = G === "default_claude_max_20x",
        Y = (J4A() || AB()) && Z,
        J = Y && !I,
        W = J ? GW0() : l99,
        [X, F] = N$.useState(!1);
    N$.useEffect(() => {
        if (J && W === "interactive_menu" && !X && Q) F(!0), Q()
    }, [J, W, X, Q]);
    let V = N$.useMemo(() => {
        if (!Y) return null;
        let K = ey.isEnabled();
        if (I && K) return N$.default.createElement($, {
            dimColor: !0
        }, "/extra-usage to finish what you're working on.");
        if (W === "interactive_menu" && Q) return N$.default.createElement($, {
            dimColor: !0
        }, "Opening your options…");
        if (W === "control" || !K) return N$.default.createElement($, {
            dimColor: !0
        }, "/upgrade to increase your usage limit.");
        return N$.default.createElement($, {
            dimColor: !0
        }, "/upgrade or /extra-usage to finish what you're working on.")
    }, [Y, I, W, Q]);
    if (X) return null;
    return N$.default.createElement(y0, null, N$.default.createElement(j, {
        flexDirection: "column"
    }, N$.default.createElement($, {
        color: "error"
    }, A), V))
}
var N$, l99 = "control";
var ZW0 = L(() => {
    hB();
    LMA();
    O9();
    hA();
    u8();
    rPA();
    N$ = GA(VA(), 1)
});

function DR3() {
    let A = ii0();
    return v3.default.createElement(y0, null, v3.default.createElement(j, {
        flexDirection: "column"
    }, v3.default.createElement($, {
        color: "error"
    }, a21), A && v3.default.createElement($, {
        dimColor: !0
    }, "· Run in another terminal: security unlock-keychain")))
}

function n99({
    param: {
        text: A
    },
    addMargin: Q,
    shouldShowDot: B,
    onOpenRateLimitOptions: G
}) {
    let {
        columns: Z
    } = YB(), [I] = $B();
    if (h51(A)) return null;
    if (kZ2(A)) return v3.default.createElement(i99, {
        text: A,
        onOpenRateLimitOptions: G
    });
    switch (A) {
        case $1A:
            return null;
        case FYA: {
            let Y = JQA("warning") ?? "Run /compact to compact & continue";
            return v3.default.createElement(y0, {
                height: 1
            }, v3.default.createElement($, {
                color: "error"
            }, "Context low · ", Y))
        }
        case n21:
            return v3.default.createElement(y0, {
                height: 1
            }, v3.default.createElement($, {
                color: "error"
            }, "Credit balance too low · Add funds: https://console.anthropic.com/settings/billing"));
        case a21:
            return v3.default.createElement(DR3, null);
        case s21:
            return v3.default.createElement(y0, {
                height: 1
            }, v3.default.createElement($, {
                color: "error"
            }, s21));
        case r21:
            return v3.default.createElement(y0, {
                height: 1
            }, v3.default.createElement($, {
                color: "error"
            }, r21));
        case o21:
            return v3.default.createElement(y0, {
                height: 1
            }, v3.default.createElement($, {
                color: "error"
            }, o21, process.env.API_TIMEOUT_MS && v3.default.createElement(v3.default.Fragment, null, " ", "(API_TIMEOUT_MS=", process.env.API_TIMEOUT_MS, "ms, try increasing it)")));
        case U1A:
            return v3.default.createElement(y0, null, v3.default.createElement(j, {
                flexDirection: "column",
                gap: 1
            }, v3.default.createElement($, {
                color: "error"
            }, "We are experiencing high demand for Opus 4."), v3.default.createElement($, null, "To continue immediately, use /model to switch to", " ", Ep(HU()), " and continue coding.")));
        case RMA:
            return v3.default.createElement(y0, {
                height: 1
            }, v3.default.createElement(Uk, null));
        case IW0:
            return null;
        default:
            if (A.startsWith(vF)) return v3.default.createElement(y0, null, v3.default.createElement($, {
                color: "error"
            }, A === vF ? `${vF}: Please wait a moment and try again.` : A));
            return v3.default.createElement(j, {
                alignItems: "flex-start",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: Q ? 1 : 0,
                width: "100%"
            }, v3.default.createElement(j, {
                flexDirection: "row"
            }, B && v3.default.createElement(j, {
                minWidth: 2
            }, v3.default.createElement($, {
                color: "text"
            }, pD)), v3.default.createElement(j, {
                flexDirection: "column",
                width: Z - 6
            }, v3.default.createElement($, null, _D(A, I)))))
    }
}
var v3;
var a99 = L(() => {
    hA();
    tM();
    nQ();
    yn();
    Hh();
    m8();
    u8();
    s2();
    WZ1();
    TMA();
    zIA();
    z00();
    cKA();
    ZW0();
    v3 = GA(VA(), 1)
});

function s99({
    addMargin: A,
    param: {
        text: Q
    }
}) {
    let B = e2(Q, "command-message"),
        G = e2(Q, "command-args");
    if (!B) return null;
    g(`UserCommandMessage rendering: "${B}" (args: "${G||"none"}")`);
    let Z = B.startsWith("The "),
        I = Z ? "" : "/";
    return g(`  isSkillFormat: ${Z}, prefix: "${I}"`), oPA.createElement(j, {
        flexDirection: "column",
        marginTop: A ? 1 : 0,
        width: "100%"
    }, oPA.createElement($, {
        backgroundColor: "userMessageBackground",
        color: "text"
    }, "> ", I, [B, G].filter(Boolean).join(" "), " "))
}
var oPA;
var r99 = L(() => {
    hA();
    nQ();
    D0();
    oPA = GA(VA(), 1)
});

function o99({
    text: A,
    thinkingMetadata: Q
}) {
    if (!Q || Q.triggers.length === 0) return nq.createElement($, {
        backgroundColor: "userMessageBackground",
        color: "text"
    }, "> ", A + " ");
    let B = Q.disabled ? void 0 : BoA[Q.level],
        G = ASB(A, Q.triggers);
    return nq.createElement($, null, ">", " ", G.map((Z, I) => {
        if (Z.isTrigger)
            if (GoA(Z.text)) return nq.createElement($, {
                key: I
            }, Z.text.split("").map((J, W) => nq.createElement($, {
                key: W,
                backgroundColor: "userMessageBackground",
                color: e$A(W, !1)
            }, J)));
            else return nq.createElement($, {
                key: I,
                backgroundColor: "userMessageBackground",
                color: B
            }, Z.text);
        return nq.createElement($, {
            key: I,
            backgroundColor: "userMessageBackground",
            color: "text"
        }, Z.text)
    }), " ")
}
var nq;
var t99 = L(() => {
    hA();
    zU();
    nq = GA(VA(), 1)
});

function e99({
    addMargin: A,
    param: {
        text: Q
    },
    thinkingMetadata: B
}) {
    let {
        columns: G
    } = YB();
    if (!Q) return e(Error("No content found in user prompt message")), null;
    let Z = Q.trim();
    return YW0.default.createElement(j, {
        flexDirection: "column",
        marginTop: A ? 1 : 0,
        width: G - 4
    }, YW0.default.createElement(o99, {
        text: Z,
        thinkingMetadata: B
    }))
}
var YW0;
var A49 = L(() => {
    hA();
    u1();
    m8();
    t99();
    YW0 = GA(VA(), 1)
});