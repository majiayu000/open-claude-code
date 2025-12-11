/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_051.js
 * 处理时间: 2025-12-09T03:41:39.560Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 51/53
 * Lines: 378325 - 379824 (1500 lines)
 * Original file: cli.js
 */

    class OI0 {
        constructor(A) {
            this._value = A
        }
        get weight() {
            return 1
        }
        add(A) {
            this._value += A
        }
        toString() {
            return `TextComponent{this._value}`
        }
    }
    class RI0 {
        constructor(A) {
            this._last = A, this._min = A, this._max = A, this._sum = A, this._count = 1
        }
        get weight() {
            return 5
        }
        add(A) {
            if (this._last = A, A < this._min) this._min = A;
            if (A > this._max) this._max = A;
            this._sum += A, this._count++
        }
        toString() {
            return `TextComponent{this._last}:TextComponent{this._min}:TextComponent{this._max}:TextComponent{this._sum}:TextComponent{this._count}`
        }
    }
    class TI0 {
        constructor(A) {
            this._value = [A]
        }
        get weight() {
            return this._value.length
        }
        add(A) {
            this._value.push(A)
        }
        toString() {
            return this._value.join(":")
        }
    }
    class PI0 {
        constructor(A) {
            this.first = A, this._value = new Set([A])
        }
        get weight() {
            return this._value.size
        }
        add(A) {
            this._value.add(A)
        }
        toString() {
            return Array.from(this._value).map((A) => typeof A === "string" ? XG3.simpleHash(A) : A).join(":")
        }
    }
    var FG3 = {
        [IG1.COUNTER_METRIC_TYPE]: OI0,
        [IG1.GAUGE_METRIC_TYPE]: RI0,
        [IG1.DISTRIBUTION_METRIC_TYPE]: TI0,
        [IG1.SET_METRIC_TYPE]: PI0
    };
    ii2.CounterMetric = OI0;
    ii2.DistributionMetric = TI0;
    ii2.GaugeMetric = RI0;
    ii2.METRIC_MAP = FG3;
    ii2.SetMetric = PI0
});
var ri2 = moduleWrapper((si2) => {
    Object.defineProperty(si2, "__esModule", {
        value: !0
    });
    var ni2 = l0(),
        JPA = YPA(),
        EG3 = jI0(),
        zG3 = BPA(),
        YG1 = IPA();
    class ai2 {
        constructor(A) {
            if (this._client = A, this._buckets = new Map, this._bucketsTotalWeight = 0, this._interval = setInterval(() => this._flush(), JPA.DEFAULT_FLUSH_INTERVAL), this._interval.unref) this._interval.unref();
            this._flushShift = Math.floor(Math.random() * JPA.DEFAULT_FLUSH_INTERVAL / 1000), this._forceFlush = !1
        }
        add(A, Q, B, G = "none", Z = {}, I = ni2.timestampInSeconds()) {
            let Y = Math.floor(I),
                J = YG1.sanitizeMetricKey(Q),
                W = YG1.sanitizeTags(Z),
                X = YG1.sanitizeUnit(G),
                F = YG1.getBucketKey(A, J, X, W),
                V = this._buckets.get(F),
                K = V && A === JPA.SET_METRIC_TYPE ? V.metric.weight : 0;
            if (V) {
                if (V.metric.add(B), V.timestamp < Y) V.timestamp = Y
            } else V = {
                metric: new EG3.METRIC_MAP[A](B),
                timestamp: Y,
                metricType: A,
                name: J,
                unit: X,
                tags: W
            }, this._buckets.set(F, V);
            let D = typeof B === "string" ? V.metric.weight - K : B;
            if (zG3.updateMetricSummaryOnActiveSpan(A, J, D, X, Z, F), this._bucketsTotalWeight += V.metric.weight, this._bucketsTotalWeight >= JPA.MAX_WEIGHT) this.flush()
        }
        flush() {
            this._forceFlush = !0, this._flush()
        }
        close() {
            this._forceFlush = !0, clearInterval(this._interval), this._flush()
        }
        _flush() {
            if (this._forceFlush) {
                this._forceFlush = !1, this._bucketsTotalWeight = 0, this._captureMetrics(this._buckets), this._buckets.clear();
                return
            }
            let A = Math.floor(ni2.timestampInSeconds()) - JPA.DEFAULT_FLUSH_INTERVAL / 1000 - this._flushShift,
                Q = new Map;
            for (let [B, G] of this._buckets)
                if (G.timestamp <= A) Q.set(B, G), this._bucketsTotalWeight -= G.metric.weight;
            for (let [B] of Q) this._buckets.delete(B);
            this._captureMetrics(Q)
        }
        _captureMetrics(A) {
            if (A.size > 0 && this._client.captureAggregateMetrics) {
                let Q = Array.from(A).map(([, B]) => B);
                this._client.captureAggregateMetrics(Q)
            }
        }
    }
    si2.MetricsAggregator = ai2
});
var An2 = moduleWrapper((ei2) => {
    Object.defineProperty(ei2, "__esModule", {
        value: !0
    });
    var Yg = l0(),
        $G3 = NI0(),
        wG3 = MI0(),
        JG1 = AF(),
        qG3 = MO(),
        NG3 = ri2(),
        LG3 = UI0(),
        MG3 = EI0(),
        OG3 = C$(),
        RG3 = rWA();
    eWA();
    var oi2 = g0A();
    class ti2 extends $G3.BaseClient {
        constructor(A) {
            MG3.addTracingExtensions();
            super(A);
            if (A._experiments && A._experiments.metricsAggregator) this.metricsAggregator = new NG3.MetricsAggregator(this)
        }
        eventFromException(A, Q) {
            return Yg.resolvedSyncPromise(Yg.eventFromUnknownInput(qG3.getClient(), this._options.stackParser, A, Q))
        }
        eventFromMessage(A, Q = "info", B) {
            return Yg.resolvedSyncPromise(Yg.eventFromMessage(this._options.stackParser, A, Q, B, this._options.attachStacktrace))
        }
        captureException(A, Q, B) {
            if (this._options.autoSessionTracking && this._sessionFlusher && B) {
                let G = B.getRequestSession();
                if (G && G.status === "ok") G.status = "errored"
            }
            return super.captureException(A, Q, B)
        }
        captureEvent(A, Q, B) {
            if (this._options.autoSessionTracking && this._sessionFlusher && B) {
                if ((A.type || "exception") === "exception" && A.exception && A.exception.values && A.exception.values.length > 0) {
                    let I = B.getRequestSession();
                    if (I && I.status === "ok") I.status = "errored"
                }
            }
            return super.captureEvent(A, Q, B)
        }
        close(A) {
            if (this._sessionFlusher) this._sessionFlusher.close();
            return super.close(A)
        }
        initSessionFlusher() {
            let {
                release: A,
                environment: Q
            } = this._options;
            if (!A) JG1.DEBUG_BUILD && Yg.logger.warn("Cannot initialise an instance of SessionFlusher if no release is provided!");
            else this._sessionFlusher = new LG3.SessionFlusher(this, {
                release: A,
                environment: Q
            })
        }
        captureCheckIn(A, Q, B) {
            let G = "checkInId" in A && A.checkInId ? A.checkInId : Yg.uuid4();
            if (!this._isEnabled()) return JG1.DEBUG_BUILD && Yg.logger.warn("SDK not enabled, will not capture checkin."), G;
            let Z = this.getOptions(),
                {
                    release: I,
                    environment: Y,
                    tunnel: J
                } = Z,
                W = {
                    check_in_id: G,
                    monitor_slug: A.monitorSlug,
                    status: A.status,
                    release: I,
                    environment: Y
                };
            if ("duration" in A) W.duration = A.duration;
            if (Q) W.monitor_config = {
                schedule: Q.schedule,
                checkin_margin: Q.checkinMargin,
                max_runtime: Q.maxRuntime,
                timezone: Q.timezone
            };
            let [X, F] = this._getTraceInfoFromScope(B);
            if (F) W.contexts = {
                trace: F
            };
            let V = wG3.createCheckInEnvelope(W, X, this.getSdkMetadata(), J, this.getDsn());
            return JG1.DEBUG_BUILD && Yg.logger.info("Sending checkin:", A.monitorSlug, A.status), this._sendEnvelope(V), G
        }
        _captureRequestSession() {
            if (!this._sessionFlusher) JG1.DEBUG_BUILD && Yg.logger.warn("Discarded request mode session because autoSessionTracking option was disabled");
            else this._sessionFlusher.incrementSessionStatusCount()
        }
        _prepareEvent(A, Q, B, G) {
            if (this._options.platform) A.platform = A.platform || this._options.platform;
            if (this._options.runtime) A.contexts = {
                ...A.contexts,
                runtime: (A.contexts || {}).runtime || this._options.runtime
            };
            if (this._options.serverName) A.server_name = A.server_name || this._options.serverName;
            return super._prepareEvent(A, Q, B, G)
        }
        _getTraceInfoFromScope(A) {
            if (!A) return [void 0, void 0];
            let Q = A.getSpan();
            if (Q) return [RG3.getRootSpan(Q) ? oi2.getDynamicSamplingContextFromSpan(Q) : void 0, OG3.spanToTraceContext(Q)];
            let {
                traceId: B,
                spanId: G,
                parentSpanId: Z,
                dsc: I
            } = A.getPropagationContext(), Y = {
                trace_id: B,
                span_id: G,
                parent_span_id: Z
            };
            if (I) return [I, Y];
            return [oi2.getDynamicSamplingContextFromClient(B, this, A), Y]
        }
    }
    ei2.ServerRuntimeClient = ti2
});
var Zn2 = moduleWrapper((Gn2) => {
    Object.defineProperty(Gn2, "__esModule", {
        value: !0
    });
    var Qn2 = l0(),
        PG3 = AF(),
        jG3 = MO(),
        SG3 = fy();

    function _G3(A, Q) {
        if (Q.debug === !0)
            if (PG3.DEBUG_BUILD) Qn2.logger.enable();
            else Qn2.consoleSandbox(() => {
                console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
            });
        jG3.getCurrentScope().update(Q.initialScope);
        let G = new A(Q);
        Bn2(G), kG3(G)
    }

    function Bn2(A) {
        let B = SG3.getCurrentHub().getStackTop();
        B.client = A, B.scope.setClient(A)
    }

    function kG3(A) {
        if (A.init) A.init();
        else if (A.setupIntegrations) A.setupIntegrations()
    }
    Gn2.initAndBind = _G3;
    Gn2.setCurrentClient = Bn2
});
var Xn2 = moduleWrapper((Wn2) => {
    Object.defineProperty(Wn2, "__esModule", {
        value: !0
    });
    var z$ = l0(),
        In2 = AF(),
        Jn2 = 30;

    function vG3(A, Q, B = z$.makePromiseBuffer(A.bufferSize || Jn2)) {
        let G = {},
            Z = (Y) => B.drain(Y);

        function I(Y) {
            let J = [];
            if (z$.forEachEnvelopeItem(Y, (V, K) => {
                    let D = z$.envelopeItemTypeToDataCategory(K);
                    if (z$.isRateLimited(G, D)) {
                        let H = Yn2(V, K);
                        A.recordDroppedEvent("ratelimit_backoff", D, H)
                    } else J.push(V)
                }), J.length === 0) return z$.resolvedSyncPromise();
            let W = z$.createEnvelope(Y[0], J),
                X = (V) => {
                    z$.forEachEnvelopeItem(W, (K, D) => {
                        let H = Yn2(K, D);
                        A.recordDroppedEvent(V, z$.envelopeItemTypeToDataCategory(D), H)
                    })
                },
                F = () => Q({
                    body: z$.serializeEnvelope(W, A.textEncoder)
                }).then((V) => {
                    if (V.statusCode !== void 0 && (V.statusCode < 200 || V.statusCode >= 300)) In2.DEBUG_BUILD && z$.logger.warn(`Sentry responded with status code TextComponent{V.statusCode} to sent event.`);
                    return G = z$.updateRateLimits(G, V), V
                }, (V) => {
                    throw X("network_error"), V
                });
            return B.add(F).then((V) => V, (V) => {
                if (V instanceof z$.SentryError) return In2.DEBUG_BUILD && z$.logger.error("Skipped sending event because buffer is full."), X("queue_overflow"), z$.resolvedSyncPromise();
                else throw V
            })
        }
        return I.__sentry__baseTransport__ = !0, {
            send: I,
            flush: Z
        }
    }

    function Yn2(A, Q) {
        if (Q !== "event" && Q !== "transaction") return;
        return Array.isArray(A) ? A[1] : void 0
    }
    Wn2.DEFAULT_TRANSPORT_BUFFER_SIZE = Jn2;
    Wn2.createTransport = vG3
});
var Kn2 = moduleWrapper((Vn2) => {
    Object.defineProperty(Vn2, "__esModule", {
        value: !0
    });
    var _I0 = l0(),
        hG3 = AF(),
        Fn2 = 100,
        kI0 = 5000,
        gG3 = 3600000;

    function SI0(A, Q) {
        hG3.DEBUG_BUILD && _I0.logger.info(`[Offline]: TextComponent{A}`, Q)
    }

    function uG3(A) {
        return (Q) => {
            let B = A(Q),
                G = Q.createStore ? Q.createStore(Q) : void 0,
                Z = kI0,
                I;

            function Y(F, V, K) {
                if (_I0.envelopeContainsItemType(F, ["replay_event", "replay_recording", "client_report"])) return !1;
                if (Q.shouldStore) return Q.shouldStore(F, V, K);
                return !0
            }

            function J(F) {
                if (!G) return;
                if (I) clearTimeout(I);
                if (I = setTimeout(async () => {
                        I = void 0;
                        let V = await G.pop();
                        if (V) SI0("Attempting to send previously queued event"), X(V).catch((K) => {
                            SI0("Failed to retry sending", K)
                        })
                    }, F), typeof I !== "number" && I.unref) I.unref()
            }

            function W() {
                if (I) return;
                J(Z), Z = Math.min(Z * 2, gG3)
            }
            async function X(F) {
                try {
                    let V = await B.send(F),
                        K = Fn2;
                    if (V) {
                        if (V.headers && V.headers["retry-after"]) K = _I0.parseRetryAfterHeader(V.headers["retry-after"]);
                        else if ((V.statusCode || 0) >= 400) return V
                    }
                    return J(K), Z = kI0, V
                } catch (V) {
                    if (G && await Y(F, V, Z)) return await G.insert(F), W(), SI0("Error sending. Event queued", V), {};
                    else throw V
                }
            }
            if (Q.flushAtStartup) W();
            return {
                send: X,
                flush: (F) => B.flush(F)
            }
        }
    }
    Vn2.MIN_DELAY = Fn2;
    Vn2.START_DELAY = kI0;
    Vn2.makeOfflineTransport = uG3
});
var Hn2 = moduleWrapper((Dn2) => {
    Object.defineProperty(Dn2, "__esModule", {
        value: !0
    });
    var yI0 = l0(),
        pG3 = BG1();

    function xI0(A, Q) {
        let B;
        return yI0.forEachEnvelopeItem(A, (G, Z) => {
            if (Q.includes(Z)) B = Array.isArray(G) ? G[1] : void 0;
            return !!B
        }), B
    }

    function lG3(A, Q) {
        return (B) => {
            let G = A(B);
            return {
                ...G,
                send: async (Z) => {
                    let I = xI0(Z, ["event", "transaction", "profile", "replay_event"]);
                    if (I) I.release = Q;
                    return G.send(Z)
                }
            }
        }
    }

    function iG3(A, Q) {
        return yI0.createEnvelope(Q ? {
            ...A[0],
            dsn: Q
        } : A[0], A[1])
    }

    function nG3(A, Q) {
        return (B) => {
            let G = A(B),
                Z = new Map;

            function I(W, X) {
                let F = X ? `TextComponent{W}:TextComponent{X}` : W,
                    V = Z.get(F);
                if (!V) {
                    let K = yI0.dsnFromString(W);
                    if (!K) return;
                    let D = pG3.getEnvelopeEndpointWithUrlEncodedAuth(K, B.tunnel);
                    V = X ? lG3(A, X)({
                        ...B,
                        url: D
                    }) : A({
                        ...B,
                        url: D
                    }), Z.set(F, V)
                }
                return [W, V]
            }
            async function Y(W) {
                function X(K) {
                    let D = K && K.length ? K : ["event"];
                    return xI0(W, D)
                }
                let F = Q({
                    envelope: W,
                    getEvent: X
                }).map((K) => {
                    if (typeof K === "string") return I(K, void 0);
                    else return I(K.dsn, K.release)
                }).filter((K) => !!K);
                if (F.length === 0) F.push(["", G]);
                return (await Promise.all(F.map(([K, D]) => D.send(iG3(W, K)))))[0]
            }
            async function J(W) {
                let X = [await G.flush(W)];
                for (let [, F] of Z) X.push(await F.flush(W));
                return X.every((F) => F)
            }
            return {
                send: Y,
                flush: J
            }
        }
    }
    Dn2.eventFromEnvelope = xI0;
    Dn2.makeMultiplexedTransport = nG3
});
var zn2 = moduleWrapper((En2) => {
    Object.defineProperty(En2, "__esModule", {
        value: !0
    });
    var Cn2 = l0();

    function rG3(A, Q) {
        let B = {
            sent_at: new Date().toISOString()
        };
        if (Q) B.dsn = Cn2.dsnToString(Q);
        let G = A.map(oG3);
        return Cn2.createEnvelope(B, G)
    }

    function oG3(A) {
        return [{
            type: "span"
        }, A]
    }
    En2.createSpanEnvelope = rG3
});
var wn2 = moduleWrapper(($n2) => {
    Object.defineProperty($n2, "__esModule", {
        value: !0
    });

    function eG3(A, Q) {
        let B = Q && BZ3(Q) ? Q.getClient() : Q,
            G = B && B.getDsn(),
            Z = B && B.getOptions().tunnel;
        return QZ3(A, G) || AZ3(A, Z)
    }

    function AZ3(A, Q) {
        if (!Q) return !1;
        return Un2(A) === Un2(Q)
    }

    function QZ3(A, Q) {
        return Q ? A.includes(Q.host) : !1
    }

    function Un2(A) {
        return A[A.length - 1] === "/" ? A.slice(0, -1) : A
    }

    function BZ3(A) {
        return A.getClient !== void 0
    }
    $n2.isSentryRequestUrl = eG3
});
var Nn2 = moduleWrapper((qn2) => {
    Object.defineProperty(qn2, "__esModule", {
        value: !0
    });

    function ZZ3(A, ...Q) {
        let B = new String(String.raw(A, ...Q));
        return B.__sentry_template_string__ = A.join("\x00").replace(/%/g, "%%").replace(/\0/g, "%s"), B.__sentry_template_values__ = Q, B
    }
    qn2.parameterize = ZZ3
});
var On2 = moduleWrapper((Mn2) => {
    Object.defineProperty(Mn2, "__esModule", {
        value: !0
    });
    var Ln2 = g71();

    function YZ3(A, Q, B = [Q], G = "npm") {
        let Z = A._metadata || {};
        if (!Z.sdk) Z.sdk = {
            name: `sentry.javascript.TextComponent{Q}`,
            packages: B.map((I) => ({
                name: `TextComponent{G}:@sentry/TextComponent{I}`,
                version: Ln2.SDK_VERSION
            })),
            version: Ln2.SDK_VERSION
        };
        A._metadata = Z
    }
    Mn2.applySdkMetadata = YZ3
});
var Sn2 = moduleWrapper((jn2) => {
    Object.defineProperty(jn2, "__esModule", {
        value: !0
    });
    var vI0 = l0(),
        Tn2 = new Map,
        Rn2 = new Set;

    function WZ3(A) {
        if (!vI0.GLOBAL_OBJ._sentryModuleMetadata) return;
        for (let Q of Object.keys(vI0.GLOBAL_OBJ._sentryModuleMetadata)) {
            let B = vI0.GLOBAL_OBJ._sentryModuleMetadata[Q];
            if (Rn2.has(Q)) continue;
            Rn2.add(Q);
            let G = A(Q);
            for (let Z of G.reverse())
                if (Z.filename) {
                    Tn2.set(Z.filename, B);
                    break
                }
        }
    }

    function Pn2(A, Q) {
        return WZ3(A), Tn2.get(Q)
    }

    function XZ3(A, Q) {
        try {
            Q.exception.values.forEach((B) => {
                if (!B.stacktrace) return;
                for (let G of B.stacktrace.frames || []) {
                    if (!G.filename) continue;
                    let Z = Pn2(A, G.filename);
                    if (Z) G.module_metadata = Z
                }
            })
        } catch (B) {}
    }

    function FZ3(A) {
        try {
            A.exception.values.forEach((Q) => {
                if (!Q.stacktrace) return;
                for (let B of Q.stacktrace.frames || []) delete B.module_metadata
            })
        } catch (Q) {}
    }
    jn2.addMetadataToStackFrames = XZ3;
    jn2.getMetadataForUrl = Pn2;
    jn2.stripMetadataFromStackFrames = FZ3
});
var bn2 = moduleWrapper((vn2) => {
    Object.defineProperty(vn2, "__esModule", {
        value: !0
    });
    var HZ3 = l0(),
        kn2 = Ig(),
        _n2 = Sn2(),
        yn2 = "ModuleMetadata",
        CZ3 = () => {
            return {
                name: yn2,
                setupOnce() {},
                setup(A) {
                    if (typeof A.on !== "function") return;
                    A.on("beforeEnvelope", (Q) => {
                        HZ3.forEachEnvelopeItem(Q, (B, G) => {
                            if (G === "event") {
                                let Z = Array.isArray(B) ? B[1] : void 0;
                                if (Z) _n2.stripMetadataFromStackFrames(Z), B[1] = Z
                            }
                        })
                    })
                },
                processEvent(A, Q, B) {
                    let G = B.getOptions().stackParser;
                    return _n2.addMetadataToStackFrames(G, A), A
                }
            }
        },
        xn2 = kn2.defineIntegration(CZ3),
        EZ3 = kn2.convertIntegrationFnToClass(yn2, xn2);
    vn2.ModuleMetadata = EZ3;
    vn2.moduleMetadataIntegration = xn2
});
var dn2 = moduleWrapper((mn2) => {
    Object.defineProperty(mn2, "__esModule", {
        value: !0
    });
    var fn2 = l0(),
        hn2 = Ig(),
        $Z3 = C$(),
        bI0 = {
            include: {
                cookies: !0,
                data: !0,
                headers: !0,
                ip: !1,
                query_string: !0,
                url: !0,
                user: {
                    id: !0,
                    username: !0,
                    email: !0
                }
            },
            transactionNamingScheme: "methodPath"
        },
        gn2 = "RequestData",
        wZ3 = (A = {}) => {
            let Q = fn2.addRequestDataToEvent,
                B = {
                    ...bI0,
                    ...A,
                    include: {
                        method: !0,
                        ...bI0.include,
                        ...A.include,
                        user: A.include && typeof A.include.user === "boolean" ? A.include.user : {
                            ...bI0.include.user,
                            ...(A.include || {}).user
                        }
                    }
                };
            return {
                name: gn2,
                setupOnce() {},
                processEvent(G, Z, I) {
                    let {
                        transactionNamingScheme: Y
                    } = B, {
                        sdkProcessingMetadata: J = {}
                    } = G, W = J.request;
                    if (!W) return G;
                    let X = J.requestDataOptionsFromExpressHandler || J.requestDataOptionsFromGCPWrapper || NZ3(B),
                        F = Q(G, W, X);
                    if (G.type === "transaction" || Y === "handler") return F;
                    let K = W._sentryTransaction;
                    if (K) {
                        let D = $Z3.spanToJSON(K).description || "",
                            H = LZ3(I) === "sentry.javascript.nextjs" ? D.startsWith("/api") : Y !== "path",
                            [C] = fn2.extractPathForTransaction(W, {
                                path: !0,
                                method: H,
                                customRoute: D
                            });
                        F.transaction = C
                    }
                    return F
                }
            }
        },
        un2 = hn2.defineIntegration(wZ3),
        qZ3 = hn2.convertIntegrationFnToClass(gn2, un2);

    function NZ3(A) {
        let {
            transactionNamingScheme: Q,
            include: {
                ip: B,
                user: G,
                ...Z
            }
        } = A, I = [];
        for (let [J, W] of Object.entries(Z))
            if (W) I.push(J);
        let Y;
        if (G === void 0) Y = !0;
        else if (typeof G === "boolean") Y = G;
        else {
            let J = [];
            for (let [W, X] of Object.entries(G))
                if (X) J.push(W);
            Y = J
        }
        return {
            include: {
                ip: B,
                user: Y,
                request: I.length !== 0 ? I : void 0,
                transaction: Q
            }
        }
    }

    function LZ3(A) {
        try {
            return A.getOptions()._metadata.sdk.name
        } catch (Q) {
            return
        }
    }
    mn2.RequestData = qZ3;
    mn2.requestDataIntegration = un2
});
var fI0 = moduleWrapper((in2) => {
    Object.defineProperty(in2, "__esModule", {
        value: !0
    });
    var DK = l0(),
        c0A = AF(),
        cn2 = Ig(),
        RZ3 = [/^Script error\.?TextComponent/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.TextComponent/, /^Cannot redefine property: googletag$/],
        TZ3 = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/],
        pn2 = "InboundFilters",
        PZ3 = (A = {}) => {
            return {
                name: pn2,
                setupOnce() {},
                processEvent(Q, B, G) {
                    let Z = G.getOptions(),
                        I = SZ3(A, Z);
                    return _Z3(Q, I) ? null : Q
                }
            }
        },
        ln2 = cn2.defineIntegration(PZ3),
        jZ3 = cn2.convertIntegrationFnToClass(pn2, ln2);

    function SZ3(A = {}, Q = {}) {
        return {
            allowUrls: [...A.allowUrls || [], ...Q.allowUrls || []],
            denyUrls: [...A.denyUrls || [], ...Q.denyUrls || []],
            ignoreErrors: [...A.ignoreErrors || [], ...Q.ignoreErrors || [], ...A.disableErrorDefaults ? [] : RZ3],
            ignoreTransactions: [...A.ignoreTransactions || [], ...Q.ignoreTransactions || [], ...A.disableTransactionDefaults ? [] : TZ3],
            ignoreInternal: A.ignoreInternal !== void 0 ? A.ignoreInternal : !0
        }
    }

    function _Z3(A, Q) {
        if (Q.ignoreInternal && fZ3(A)) return c0A.DEBUG_BUILD && DK.logger.warn(`Event dropped due to being internal Sentry Error.
Event: TextComponent{DK.getEventDescription(A)}`), !0;
        if (kZ3(A, Q.ignoreErrors)) return c0A.DEBUG_BUILD && DK.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: TextComponent{DK.getEventDescription(A)}`), !0;
        if (yZ3(A, Q.ignoreTransactions)) return c0A.DEBUG_BUILD && DK.logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: TextComponent{DK.getEventDescription(A)}`), !0;
        if (xZ3(A, Q.denyUrls)) return c0A.DEBUG_BUILD && DK.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: TextComponent{DK.getEventDescription(A)}.
Url: TextComponent{WG1(A)}`), !0;
        if (!vZ3(A, Q.allowUrls)) return c0A.DEBUG_BUILD && DK.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: TextComponent{DK.getEventDescription(A)}.
Url: TextComponent{WG1(A)}`), !0;
        return !1
    }

    function kZ3(A, Q) {
        if (A.type || !Q || !Q.length) return !1;
        return bZ3(A).some((B) => DK.stringMatchesSomePattern(B, Q))
    }

    function yZ3(A, Q) {
        if (A.type !== "transaction" || !Q || !Q.length) return !1;
        let B = A.transaction;
        return B ? DK.stringMatchesSomePattern(B, Q) : !1
    }

    function xZ3(A, Q) {
        if (!Q || !Q.length) return !1;
        let B = WG1(A);
        return !B ? !1 : DK.stringMatchesSomePattern(B, Q)
    }

    function vZ3(A, Q) {
        if (!Q || !Q.length) return !0;
        let B = WG1(A);
        return !B ? !0 : DK.stringMatchesSomePattern(B, Q)
    }

    function bZ3(A) {
        let Q = [];
        if (A.message) Q.push(A.message);
        let B;
        try {
            B = A.exception.values[A.exception.values.length - 1]
        } catch (G) {}
        if (B) {
            if (B.value) {
                if (Q.push(B.value), B.type) Q.push(`TextComponent{B.type}: TextComponent{B.value}`)
            }
        }
        if (c0A.DEBUG_BUILD && Q.length === 0) DK.logger.error(`Could not extract message for event TextComponent{DK.getEventDescription(A)}`);
        return Q
    }

    function fZ3(A) {
        try {
            return A.exception.values[0].type === "SentryError"
        } catch (Q) {}
        return !1
    }

    function hZ3(A = []) {
        for (let Q = A.length - 1; Q >= 0; Q--) {
            let B = A[Q];
            if (B && B.filename !== "<anonymous>" && B.filename !== "[native code]") return B.filename || null
        }
        return null
    }

    function WG1(A) {
        try {
            let Q;
            try {
                Q = A.exception.values[0].stacktrace.frames
            } catch (B) {}
            return Q ? hZ3(Q) : null
        } catch (Q) {
            return c0A.DEBUG_BUILD && DK.logger.error(`Cannot extract url for event TextComponent{DK.getEventDescription(A)}`), null
        }
    }
    in2.InboundFilters = jZ3;
    in2.inboundFiltersIntegration = ln2
});
var hI0 = moduleWrapper((tn2) => {
    Object.defineProperty(tn2, "__esModule", {
        value: !0
    });
    var mZ3 = l0(),
        dZ3 = MO(),
        sn2 = Ig(),
        nn2, rn2 = "FunctionToString",
        an2 = new WeakMap,
        cZ3 = () => {
            return {
                name: rn2,
                setupOnce() {
                    nn2 = Function.prototype.toString;
                    try {
                        Function.prototype.toString = function(...A) {
                            let Q = mZ3.getOriginalFunction(this),
                                B = an2.has(dZ3.getClient()) && Q !== void 0 ? Q : this;
                            return nn2.apply(B, A)
                        }
                    } catch (A) {}
                },
                setup(A) {
                    an2.set(A, !0)
                }
            }
        },
        on2 = sn2.defineIntegration(cZ3),
        pZ3 = sn2.convertIntegrationFnToClass(rn2, on2);
    tn2.FunctionToString = pZ3;
    tn2.functionToStringIntegration = on2
});
var gI0 = moduleWrapper((Ga2) => {
    Object.defineProperty(Ga2, "__esModule", {
        value: !0
    });
    var en2 = l0(),
        Aa2 = Ig(),
        nZ3 = "cause",
        aZ3 = 5,
        Qa2 = "LinkedErrors",
        sZ3 = (A = {}) => {
            let Q = A.limit || aZ3,
                B = A.key || nZ3;
            return {
                name: Qa2,
                setupOnce() {},
                preprocessEvent(G, Z, I) {
                    let Y = I.getOptions();
                    en2.applyAggregateErrorsToEvent(en2.exceptionFromError, Y.stackParser, Y.maxValueLength, B, Q, G, Z)
                }
            }
        },
        Ba2 = Aa2.defineIntegration(sZ3),
        rZ3 = Aa2.convertIntegrationFnToClass(Qa2, Ba2);
    Ga2.LinkedErrors = rZ3;
    Ga2.linkedErrorsIntegration = Ba2
});
var Ia2 = moduleWrapper((Za2) => {
    Object.defineProperty(Za2, "__esModule", {
        value: !0
    });
    var eZ3 = hI0(),
        AI3 = fI0(),
        QI3 = gI0();
    Za2.FunctionToString = eZ3.FunctionToString;
    Za2.InboundFilters = AI3.InboundFilters;
    Za2.LinkedErrors = QI3.LinkedErrors
});
var Xa2 = moduleWrapper((Wa2) => {
    Object.defineProperty(Wa2, "__esModule", {
        value: !0
    });
    var II3 = l0(),
        Ya2 = YPA(),
        YI3 = jI0(),
        JI3 = BPA(),
        XG1 = IPA();
    class Ja2 {
        constructor(A) {
            this._client = A, this._buckets = new Map, this._interval = setInterval(() => this.flush(), Ya2.DEFAULT_BROWSER_FLUSH_INTERVAL)
        }
        add(A, Q, B, G = "none", Z = {}, I = II3.timestampInSeconds()) {
            let Y = Math.floor(I),
                J = XG1.sanitizeMetricKey(Q),
                W = XG1.sanitizeTags(Z),
                X = XG1.sanitizeUnit(G),
                F = XG1.getBucketKey(A, J, X, W),
                V = this._buckets.get(F),
                K = V && A === Ya2.SET_METRIC_TYPE ? V.metric.weight : 0;
            if (V) {
                if (V.metric.add(B), V.timestamp < Y) V.timestamp = Y
            } else V = {
                metric: new YI3.METRIC_MAP[A](B),
                timestamp: Y,
                metricType: A,
                name: J,
                unit: X,
                tags: W
            }, this._buckets.set(F, V);
            let D = typeof B === "string" ? V.metric.weight - K : B;
            JI3.updateMetricSummaryOnActiveSpan(A, J, D, X, Z, F)
        }
        flush() {
            if (this._buckets.size === 0) return;
            if (this._client.captureAggregateMetrics) {
                let A = Array.from(this._buckets).map(([, Q]) => Q);
                this._client.captureAggregateMetrics(A)
            }
            this._buckets.clear()
        }
        close() {
            clearInterval(this._interval), this.flush()
        }
    }
    Wa2.BrowserMetricsAggregator = Ja2
});
var Ha2 = moduleWrapper((Da2) => {
    Object.defineProperty(Da2, "__esModule", {
        value: !0
    });
    var Fa2 = Ig(),
        XI3 = Xa2(),
        Va2 = "MetricsAggregator",
        FI3 = () => {
            return {
                name: Va2,
                setupOnce() {},
                setup(A) {
                    A.metricsAggregator = new XI3.BrowserMetricsAggregator(A)
                }
            }
        },
        Ka2 = Fa2.defineIntegration(FI3),
        VI3 = Fa2.convertIntegrationFnToClass(Va2, Ka2);
    Da2.MetricsAggregator = VI3;
    Da2.metricsAggregatorIntegration = Ka2
});
var Ma2 = moduleWrapper((La2) => {
    Object.defineProperty(La2, "__esModule", {
        value: !0
    });
    var Ca2 = l0(),
        Ea2 = AF(),
        za2 = MO(),
        HI3 = C$(),
        FG1 = YPA(),
        Ua2 = Ha2();

    function VG1(A, Q, B, G = {}) {
        let Z = za2.getClient(),
            I = za2.getCurrentScope();
        if (Z) {
            if (!Z.metricsAggregator) {
                Ea2.DEBUG_BUILD && Ca2.logger.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs");
                return
            }
            let {
                unit: Y,
                tags: J,
                timestamp: W
            } = G, {
                release: X,
                environment: F
            } = Z.getOptions(), V = I.getTransaction(), K = {};
            if (X) K.release = X;
            if (F) K.environment = F;
            if (V) K.transaction = HI3.spanToJSON(V).description || "";
            Ea2.DEBUG_BUILD && Ca2.logger.log(`Adding value of TextComponent{B} to TextComponent{A} metric TextComponent{Q}`), Z.metricsAggregator.add(A, Q, B, Y, {
                ...K,
                ...J
            }, W)
        }
    }

    function $a2(A, Q = 1, B) {
        VG1(FG1.COUNTER_METRIC_TYPE, A, Q, B)
    }

    function wa2(A, Q, B) {
        VG1(FG1.DISTRIBUTION_METRIC_TYPE, A, Q, B)
    }

    function qa2(A, Q, B) {
        VG1(FG1.SET_METRIC_TYPE, A, Q, B)
    }

    function Na2(A, Q, B) {
        VG1(FG1.GAUGE_METRIC_TYPE, A, Q, B)
    }
    var CI3 = {
        increment: $a2,
        distribution: wa2,
        set: qa2,
        gauge: Na2,
        MetricsAggregator: Ua2.MetricsAggregator,
        metricsAggregatorIntegration: Ua2.metricsAggregatorIntegration
    };
    La2.distribution = wa2;
    La2.gauge = Na2;
    La2.increment = $a2;
    La2.metrics = CI3;
    La2.set = qa2
});
var P4 = moduleWrapper((dI0) => {
    Object.defineProperty(dI0, "__esModule", {
        value: !0
    });
    var Oa2 = EI0(),
        Ra2 = HI0(),
        qI3 = s71(),
        NI3 = t71(),
        Ta2 = d71(),
        KG1 = eWA(),
        p0A = a71(),
        Pa2 = g0A(),
        LI3 = Oi2(),
        MI3 = CI0(),
        WPA = GPA(),
        ja2 = zI0(),
        dZ = MO(),
        uy = fy(),
        uI0 = sWA(),
        OI3 = UI0(),
        mI0 = b71(),
        Sa2 = aTA(),
        _a2 = BG1(),
        ka2 = NI0(),
        RI3 = An2(),
        ya2 = Zn2(),
        TI3 = Xn2(),
        PI3 = Kn2(),
        jI3 = Hn2(),
        SI3 = g71(),
        DG1 = Ig(),
        xa2 = v71(),
        _I3 = x71(),
        kI3 = MI0(),
        yI3 = zn2(),
        xI3 = p71(),
        vI3 = wn2(),
        bI3 = FI0(),
        fI3 = Nn2(),
        HG1 = C$(),
        hI3 = rWA(),
        gI3 = On2(),
        uI3 = aWA(),
        va2 = bn2(),
        ba2 = dn2(),
        fa2 = fI0(),
        ha2 = hI0(),
        ga2 = gI0(),
        mI3 = Ia2(),
        dI3 = Ma2(),
        cI3 = mI3;
    dI0.addTracingExtensions = Oa2.addTracingExtensions;
    dI0.startIdleTransaction = Oa2.startIdleTransaction;
    dI0.IdleTransaction = Ra2.IdleTransaction;
    dI0.TRACING_DEFAULTS = Ra2.TRACING_DEFAULTS;
    dI0.Span = qI3.Span;
    dI0.Transaction = NI3.Transaction;
    dI0.extractTraceparentData = Ta2.extractTraceparentData;
    dI0.getActiveTransaction = Ta2.getActiveTransaction;
    Object.defineProperty(dI0, "SpanStatus", {
        enumerable: !0,
        get: () => KG1.SpanStatus
    });
    dI0.getSpanStatusFromHttpCode = KG1.getSpanStatusFromHttpCode;
    dI0.setHttpStatus = KG1.setHttpStatus;
    dI0.spanStatusfromHttpCode = KG1.spanStatusfromHttpCode;
    dI0.continueTrace = p0A.continueTrace;
    dI0.getActiveSpan = p0A.getActiveSpan;
    dI0.startActiveSpan = p0A.startActiveSpan;
    dI0.startInactiveSpan = p0A.startInactiveSpan;
    dI0.startSpan = p0A.startSpan;
    dI0.startSpanManual = p0A.startSpanManual;
    dI0.trace = p0A.trace;
    dI0.getDynamicSamplingContextFromClient = Pa2.getDynamicSamplingContextFromClient;
    dI0.getDynamicSamplingContextFromSpan = Pa2.getDynamicSamplingContextFromSpan;
    dI0.setMeasurement = LI3.setMeasurement;
    dI0.isValidSampleRate = MI3.isValidSampleRate;
    dI0.SEMANTIC_ATTRIBUTE_PROFILE_ID = WPA.SEMANTIC_ATTRIBUTE_PROFILE_ID;
    dI0.SEMANTIC_ATTRIBUTE_SENTRY_OP = WPA.SEMANTIC_ATTRIBUTE_SENTRY_OP;
    dI0.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = WPA.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
    dI0.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = WPA.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
    dI0.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = WPA.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
    dI0.createEventEnvelope = ja2.createEventEnvelope;
    dI0.createSessionEnvelope = ja2.createSessionEnvelope;
    dI0.addBreadcrumb = dZ.addBreadcrumb;
    dI0.captureCheckIn = dZ.captureCheckIn;
    dI0.captureEvent = dZ.captureEvent;
    dI0.captureException = dZ.captureException;
    dI0.captureMessage = dZ.captureMessage;
    dI0.captureSession = dZ.captureSession;
    dI0.close = dZ.close;
    dI0.configureScope = dZ.configureScope;
    dI0.endSession = dZ.endSession;
    dI0.flush = dZ.flush;
    dI0.getClient = dZ.getClient;
    dI0.getCurrentScope = dZ.getCurrentScope;
    dI0.isInitialized = dZ.isInitialized;
    dI0.lastEventId = dZ.lastEventId;
    dI0.setContext = dZ.setContext;
    dI0.setExtra = dZ.setExtra;
    dI0.setExtras = dZ.setExtras;
    dI0.setTag = dZ.setTag;
    dI0.setTags = dZ.setTags;
    dI0.setUser = dZ.setUser;
    dI0.startSession = dZ.startSession;
    dI0.startTransaction = dZ.startTransaction;
    dI0.withActiveSpan = dZ.withActiveSpan;
    dI0.withIsolationScope = dZ.withIsolationScope;
    dI0.withMonitor = dZ.withMonitor;
    dI0.withScope = dZ.withScope;
    dI0.Hub = uy.Hub;
    dI0.ensureHubOnCarrier = uy.ensureHubOnCarrier;
    dI0.getCurrentHub = uy.getCurrentHub;
    dI0.getHubFromCarrier = uy.getHubFromCarrier;
    dI0.getIsolationScope = uy.getIsolationScope;
    dI0.getMainCarrier = uy.getMainCarrier;
    dI0.makeMain = uy.makeMain;
    dI0.runWithAsyncContext = uy.runWithAsyncContext;
    dI0.setAsyncContextStrategy = uy.setAsyncContextStrategy;
    dI0.setHubOnCarrier = uy.setHubOnCarrier;
    dI0.closeSession = uI0.closeSession;
    dI0.makeSession = uI0.makeSession;
    dI0.updateSession = uI0.updateSession;
    dI0.SessionFlusher = OI3.SessionFlusher;
    dI0.Scope = mI0.Scope;
    dI0.getGlobalScope = mI0.getGlobalScope;
    dI0.setGlobalScope = mI0.setGlobalScope;
    dI0.addGlobalEventProcessor = Sa2.addGlobalEventProcessor;
    dI0.notifyEventProcessors = Sa2.notifyEventProcessors;
    dI0.getEnvelopeEndpointWithUrlEncodedAuth = _a2.getEnvelopeEndpointWithUrlEncodedAuth;
    dI0.getReportDialogEndpoint = _a2.getReportDialogEndpoint;
    dI0.BaseClient = ka2.BaseClient;
    dI0.addEventProcessor = ka2.addEventProcessor;
    dI0.ServerRuntimeClient = RI3.ServerRuntimeClient;
    dI0.initAndBind = ya2.initAndBind;
    dI0.setCurrentClient = ya2.setCurrentClient;
    dI0.createTransport = TI3.createTransport;
    dI0.makeOfflineTransport = PI3.makeOfflineTransport;
    dI0.makeMultiplexedTransport = jI3.makeMultiplexedTransport;
    dI0.SDK_VERSION = SI3.SDK_VERSION;
    dI0.addIntegration = DG1.addIntegration;
    dI0.convertIntegrationFnToClass = DG1.convertIntegrationFnToClass;
    dI0.defineIntegration = DG1.defineIntegration;
    dI0.getIntegrationsToSetup = DG1.getIntegrationsToSetup;
    dI0.applyScopeDataToEvent = xa2.applyScopeDataToEvent;
    dI0.mergeScopeData = xa2.mergeScopeData;
    dI0.prepareEvent = _I3.prepareEvent;
    dI0.createCheckInEnvelope = kI3.createCheckInEnvelope;
    dI0.createSpanEnvelope = yI3.createSpanEnvelope;
    dI0.hasTracingEnabled = xI3.hasTracingEnabled;
    dI0.isSentryRequestUrl = vI3.isSentryRequestUrl;
    dI0.handleCallbackErrors = bI3.handleCallbackErrors;
    dI0.parameterize = fI3.parameterize;
    dI0.spanIsSampled = HG1.spanIsSampled;
    dI0.spanToJSON = HG1.spanToJSON;
    dI0.spanToTraceContext = HG1.spanToTraceContext;
    dI0.spanToTraceHeader = HG1.spanToTraceHeader;
    dI0.getRootSpan = hI3.getRootSpan;
    dI0.applySdkMetadata = gI3.applySdkMetadata;
    dI0.DEFAULT_ENVIRONMENT = uI3.DEFAULT_ENVIRONMENT;
    dI0.ModuleMetadata = va2.ModuleMetadata;
    dI0.moduleMetadataIntegration = va2.moduleMetadataIntegration;
    dI0.RequestData = ba2.RequestData;
    dI0.requestDataIntegration = ba2.requestDataIntegration;
    dI0.InboundFilters = fa2.InboundFilters;
    dI0.inboundFiltersIntegration = fa2.inboundFiltersIntegration;
    dI0.FunctionToString = ha2.FunctionToString;
    dI0.functionToStringIntegration = ha2.functionToStringIntegration;
    dI0.LinkedErrors = ga2.LinkedErrors;
    dI0.linkedErrorsIntegration = ga2.linkedErrorsIntegration;
    dI0.metrics = dI3.metrics;
    dI0.Integrations = cI3
});
var U$ = moduleWrapper((ua2) => {
    Object.defineProperty(ua2, "__esModule", {
        value: !0
    });
    var eJ3 = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
    ua2.DEBUG_BUILD = eJ3
});
var dn = moduleWrapper((da2) => {
    var {
        _optionalChain: ma2
    } = l0();
    Object.defineProperty(da2, "__esModule", {
        value: !0
    });

    function QW3(A) {
        let Q = ma2([A, "call", (G) => G(), "access", (G) => G.getClient, "call", (G) => G(), "optionalAccess", (G) => G.getOptions, "call", (G) => G()]);
        return (ma2([Q, "optionalAccess", (G) => G.instrumenter]) || "sentry") !== "sentry"
    }
    da2.shouldDisableAutoInstrumentation = QW3
});
var na2 = moduleWrapper((ia2) => {
    var {
        _optionalChain: bP
    } = l0();
    Object.defineProperty(ia2, "__esModule", {
        value: !0
    });
    var cI0 = P4(),
        $$ = l0(),
        CG1 = U$(),
        GW3 = dn();
    class EG1 {
        static __initStatic() {
            this.id = "Express"
        }
        constructor(A = {}) {
            this.name = EG1.id, this._router = A.router || A.app, this._methods = (Array.isArray(A.methods) ? A.methods : []).concat("use")
        }
        setupOnce(A, Q) {
            if (!this._router) {
                CG1.DEBUG_BUILD && $$.logger.error("ExpressIntegration is missing an Express instance");
                return
            }
            if (GW3.shouldDisableAutoInstrumentation(Q)) {
                CG1.DEBUG_BUILD && $$.logger.log("Express Integration is skipped because of instrumenter configuration.");
                return
            }
            YW3(this._router, this._methods), JW3(this._router)
        }
    }
    EG1.__initStatic();

    function ca2(A, Q) {
        let B = A.length;
        switch (B) {
            case 2:
                return function(G, Z) {
                    let I = Z.__sentry_transaction;
                    if (I) {
                        let Y = I.startChild({
                            description: A.name,
                            op: `middleware.express.TextComponent{Q}`,
                            origin: "auto.middleware.express"
                        });
                        Z.once("finish", () => {
                            Y.end()
                        })
                    }
                    return A.call(this, G, Z)
                };
            case 3:
                return function(G, Z, I) {
                    let Y = Z.__sentry_transaction,
                        J = bP([Y, "optionalAccess", (W) => W.startChild, "call", (W) => W({
                            description: A.name,
                            op: `middleware.express.TextComponent{Q}`,
                            origin: "auto.middleware.express"
                        })]);
                    A.call(this, G, Z, function(...W) {
                        bP([J, "optionalAccess", (X) => X.end, "call", (X) => X()]), I.call(this, ...W)
                    })
                };
            case 4:
                return function(G, Z, I, Y) {
                    let J = I.__sentry_transaction,
                        W = bP([J, "optionalAccess", (X) => X.startChild, "call", (X) => X({
                            description: A.name,
                            op: `middleware.express.TextComponent{Q}`,
                            origin: "auto.middleware.express"
                        })]);
                    A.call(this, G, Z, I, function(...X) {
                        bP([W, "optionalAccess", (F) => F.end, "call", (F) => F()]), Y.call(this, ...X)
                    })
                };
            default:
                throw Error(`Express middleware takes 2-4 arguments. Got: TextComponent{B}`)
        }
    }

    function ZW3(A, Q) {
        return A.map((B) => {
            if (typeof B === "function") return ca2(B, Q);
            if (Array.isArray(B)) return B.map((G) => {
                if (typeof G === "function") return ca2(G, Q);
                return G
            });
            return B
        })
    }

    function IW3(A, Q) {
        let B = A[Q];
        return A[Q] = function(...G) {
            return B.call(this, ...ZW3(G, Q))
        }, A
    }

    function YW3(A, Q = []) {
        Q.forEach((B) => IW3(A, B))
    }

    function JW3(A) {
        let Q = "settings" in A;
        if (Q && A._router === void 0 && A.lazyrouter) A.lazyrouter();
        let B = Q ? A._router : A;
        if (!B) {
            CG1.DEBUG_BUILD && $$.logger.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."), CG1.DEBUG_BUILD && $$.logger.debug("Routing instrumentation is currently only supported in Express 4.");
            return
        }
        let G = Object.getPrototypeOf(B),
            Z = G.process_params;
        G.process_params = function(Y, J, W, X, F) {
            if (!W._reconstructedRoute) W._reconstructedRoute = "";
            let {
                layerRoutePath: V,
                isRegex: K,
                isArray: D,
                numExtraSegments: H
            } = WW3(Y);
            if (V || K || D) W._hasParameters = !0;
            let C;
            if (V) C = V;
            else C = la2(W.originalUrl, W._reconstructedRoute, Y.path) || "";
            let E = C.split("/").filter((N) => N.length > 0 && (K || D || !N.includes("*"))).join("/");
            if (E && E.length > 0) W._reconstructedRoute += `/TextComponent{E}TextComponent{K?"/":""}`;
            let z = $$.getNumberOfUrlSegments($$.stripUrlQueryAndFragment(W.originalUrl || "")) + H,
                w = $$.getNumberOfUrlSegments(W._reconstructedRoute);
            if (z === w) {
                if (!W._hasParameters) {
                    if (W._reconstructedRoute !== W.originalUrl) W._reconstructedRoute = W.originalUrl ? $$.stripUrlQueryAndFragment(W.originalUrl) : W.originalUrl
                }
                let N = X.__sentry_transaction,
                    q = N && cI0.spanToJSON(N).data || {};
                if (N && q[cI0.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] !== "custom") {
                    let R = W._reconstructedRoute || "/",
                        [P, y] = $$.extractPathForTransaction(W, {
                            path: !0,
                            method: !0,
                            customRoute: R
                        });
                    N.updateName(P), N.setAttribute(cI0.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, y)
                }
            }
            return Z.call(this, Y, J, W, X, F)
        }
    }
    var pa2 = (A, Q, B) => {
        if (!A || !Q || !B || Object.keys(B).length === 0 || bP([B, "access", (X) => X[0], "optionalAccess", (X) => X.offset]) === void 0 || bP([B, "access", (X) => X[0], "optionalAccess", (X) => X.offset]) === null) return;
        let G = B.sort((X, F) => X.offset - F.offset),
            I = new RegExp(Q, `TextComponent{Q.flags}d`).exec(A);
        if (!I || !I.indices) return;
        let [, ...Y] = I.indices;
        if (Y.length !== G.length) return;
        let J = A,
            W = 0;
        return Y.forEach((X, F) => {
            if (X) {
                let [V, K] = X, D = J.substring(0, V - W), H = `:TextComponent{G[F].name}`, C = J.substring(K - W);
                J = D + H + C, W = W + (K - V - H.length)
            }
        }), J
    };

    function WW3(A) {
        let Q = bP([A, "access", (Y) => Y.route, "optionalAccess", (Y) => Y.path]),
            B = $$.isRegExp(Q),
            G = Array.isArray(Q);
        if (!Q) {
            let [Y] = $$.GLOBAL_OBJ.process.versions.node.split(".").map(Number);
            if (Y >= 16) Q = pa2(A.path, A.regexp, A.keys)
        }
        if (!Q) return {
            isRegex: B,
            isArray: G,
            numExtraSegments: 0
        };
        let Z = G ? Math.max(XW3(Q) - $$.getNumberOfUrlSegments(A.path || ""), 0) : 0;
        return {
            layerRoutePath: FW3(G, Q),
            isRegex: B,
            isArray: G,
            numExtraSegments: Z
        }
    }

    function XW3(A) {
        return A.reduce((Q, B) => {
            return Q + $$.getNumberOfUrlSegments(B.toString())
        }, 0)
    }

    function FW3(A, Q) {
        if (A) return Q.map((B) => B.toString()).join(",");
        return Q && Q.toString()
    }

    function la2(A, Q, B) {
        let G = $$.stripUrlQueryAndFragment(A || ""),
            Z = bP([G, "optionalAccess", (W) => W.split, "call", (W) => W("/"), "access", (W) => W.filter, "call", (W) => W((X) => !!X)]),
            I = 0,
            Y = bP([Q, "optionalAccess", (W) => W.split, "call", (W) => W("/"), "access", (W) => W.filter, "call", (W) => W((X) => !!X), "access", (W) => W.length]) || 0;
        return bP([B, "optionalAccess", (W) => W.split, "call", (W) => W("/"), "access", (W) => W.filter, "call", (W) => W((X) => {
            if (bP([Z, "optionalAccess", (F) => F[Y + I]]) === X) return I += 1, !0;
            return !1
        }), "access", (W) => W.join, "call", (W) => W("/")])
    }
    ia2.Express = EG1;
    ia2.extractOriginalRoute = pa2;
    ia2.preventDuplicateSegments = la2
});