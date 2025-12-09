/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_061.js
 * 处理时间: 2025-12-09T03:41:37.056Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       ( 14x) require(name) - Node require
 * gq       (  4x) MODEL_OPUS = "claude-opus-4-5"
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 61/61
 * Lines: 381323 - 382822 (1500 lines)
 * Original file: cli.js
 */

        if (G <= B) uq.DEBUG_BUILD && VZ.logger.log("[Measurements] Adding TTFB Request Time"), A["ttfb.requestTime"] = {
            value: B - G,
            unit: "millisecond"
        }
    }

    function pF3(A, Q, B) {
        if (!Wg.hasTracingEnabled(Q)) return !1;
        let G;
        if (A !== void 0 && typeof Q.tracesSampler === "function") G = Q.tracesSampler({
            transactionContext: A,
            name: A.name,
            parentSampled: A.parentSampled,
            attributes: {
                ...A.data,
                ...A.attributes
            },
            location: Xg.WINDOW.location
        });
        else if (A !== void 0 && A.sampled !== void 0) G = A.sampled;
        else if (typeof Q.tracesSampleRate < "u") G = Q.tracesSampleRate;
        else G = 1;
        if (!Wg.isValidSampleRate(G)) return uq.DEBUG_BUILD && VZ.logger.warn("[Tracing] Discarding interaction span because of invalid sample rate."), !1;
        if (G === !0) return B;
        else if (G === !1) return 0;
        return G * B
    }
    Jr2._addMeasureSpans = Ir2;
    Jr2._addResourceSpans = Yr2;
    Jr2.addPerformanceEntries = hF3;
    Jr2.startTrackingINP = kF3;
    Jr2.startTrackingInteractions = _F3;
    Jr2.startTrackingLongTasks = SF3;
    Jr2.startTrackingWebVitals = jF3
});
var ZY0 = U((Xr2) => {
    Object.defineProperty(Xr2, "__esModule", {
        value: !0
    });
    var dy = P4(),
        a0A = l0();

    function tF3(A, Q, B, G, Z = "auto.http.browser") {
        if (!dy.hasTracingEnabled() || !A.fetchData) return;
        let I = Q(A.fetchData.url);
        if (A.endTimestamp && I) {
            let D = A.fetchData.__span;
            if (!D) return;
            let H = G[D];
            if (H) AV3(H, A), delete G[D];
            return
        }
        let Y = dy.getCurrentScope(),
            J = dy.getClient(),
            {
                method: W,
                url: X
            } = A.fetchData,
            F = eF3(X),
            V = F ? a0A.parseUrl(F).host : void 0,
            K = I ? dy.startInactiveSpan({
                name: `${W} ${X}`,
                onlyIfParent: !0,
                attributes: {
                    url: X,
                    type: "fetch",
                    "http.method": W,
                    "http.url": F,
                    "server.address": V,
                    [dy.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: Z
                },
                op: "http.client"
            }) : void 0;
        if (K) A.fetchData.__span = K.spanContext().spanId, G[K.spanContext().spanId] = K;
        if (B(A.fetchData.url) && J) {
            let D = A.args[0];
            A.args[1] = A.args[1] || {};
            let H = A.args[1];
            H.headers = Wr2(D, J, Y, H, K)
        }
        return K
    }

    function Wr2(A, Q, B, G, Z) {
        let I = Z || B.getSpan(),
            Y = dy.getIsolationScope(),
            {
                traceId: J,
                spanId: W,
                sampled: X,
                dsc: F
            } = {
                ...Y.getPropagationContext(),
                ...B.getPropagationContext()
            },
            V = I ? dy.spanToTraceHeader(I) : a0A.generateSentryTraceHeader(J, W, X),
            K = a0A.dynamicSamplingContextToSentryBaggageHeader(F || (I ? dy.getDynamicSamplingContextFromSpan(I) : dy.getDynamicSamplingContextFromClient(J, Q, B))),
            D = G.headers || (typeof Request < "u" && a0A.isInstanceOf(A, Request) ? A.headers : void 0);
        if (!D) return {
            "sentry-trace": V,
            baggage: K
        };
        else if (typeof Headers < "u" && a0A.isInstanceOf(D, Headers)) {
            let H = new Headers(D);
            if (H.append("sentry-trace", V), K) H.append(a0A.BAGGAGE_HEADER_NAME, K);
            return H
        } else if (Array.isArray(D)) {
            let H = [...D, ["sentry-trace", V]];
            if (K) H.push([a0A.BAGGAGE_HEADER_NAME, K]);
            return H
        } else {
            let H = "baggage" in D ? D.baggage : void 0,
                C = [];
            if (Array.isArray(H)) C.push(...H);
            else if (H) C.push(H);
            if (K) C.push(K);
            return {
                ...D,
                "sentry-trace": V,
                baggage: C.length > 0 ? C.join(",") : void 0
            }
        }
    }

    function eF3(A) {
        try {
            return new URL(A).href
        } catch (Q) {
            return
        }
    }

    function AV3(A, Q) {
        if (Q.response) {
            dy.setHttpStatus(A, Q.response.status);
            let B = Q.response && Q.response.headers && Q.response.headers.get("content-length");
            if (B) {
                let G = parseInt(B);
                if (G > 0) A.setAttribute("http.response_content_length", G)
            }
        } else if (Q.error) A.setStatus("internal_error");
        A.end()
    }
    Xr2.addTracingHeadersToFetchRequest = Wr2;
    Xr2.instrumentFetchRequest = tF3
});
var kG1 = U((Cr2) => {
    Object.defineProperty(Cr2, "__esModule", {
        value: !0
    });
    var fP = P4(),
        hP = l0(),
        GV3 = ZY0(),
        ZV3 = DXA(),
        IV3 = gq(),
        _G1 = ["localhost", /^\/(?!\/)/],
        IY0 = {
            traceFetch: !0,
            traceXHR: !0,
            enableHTTPTimings: !0,
            tracingOrigins: _G1,
            tracePropagationTargets: _G1
        };

    function YV3(A) {
        let {
            traceFetch: Q,
            traceXHR: B,
            tracePropagationTargets: G,
            tracingOrigins: Z,
            shouldCreateSpanForRequest: I,
            enableHTTPTimings: Y
        } = {
            traceFetch: IY0.traceFetch,
            traceXHR: IY0.traceXHR,
            ...A
        }, J = typeof I === "function" ? I : (F) => !0, W = (F) => Kr2(F, G || Z), X = {};
        if (Q) hP.addFetchInstrumentationHandler((F) => {
            let V = GV3.instrumentFetchRequest(F, J, W, X);
            if (V) {
                let K = Hr2(F.fetchData.url),
                    D = K ? hP.parseUrl(K).host : void 0;
                V.setAttributes({
                    "http.url": K,
                    "server.address": D
                })
            }
            if (Y && V) Fr2(V)
        });
        if (B) hP.addXhrInstrumentationHandler((F) => {
            let V = Dr2(F, J, W, X);
            if (Y && V) Fr2(V)
        })
    }

    function JV3(A) {
        return A.entryType === "resource" && "initiatorType" in A && typeof A.nextHopProtocol === "string" && (A.initiatorType === "fetch" || A.initiatorType === "xmlhttprequest")
    }

    function Fr2(A) {
        let {
            url: Q
        } = fP.spanToJSON(A).data || {};
        if (!Q || typeof Q !== "string") return;
        let B = ZV3.addPerformanceInstrumentationHandler("resource", ({
            entries: G
        }) => {
            G.forEach((Z) => {
                if (JV3(Z) && Z.name.endsWith(Q)) WV3(Z).forEach((Y) => A.setAttribute(...Y)), setTimeout(B)
            })
        })
    }

    function Vr2(A) {
        let Q = "unknown",
            B = "unknown",
            G = "";
        for (let Z of A) {
            if (Z === "/") {
                [Q, B] = A.split("/");
                break
            }
            if (!isNaN(Number(Z))) {
                Q = G === "h" ? "http" : G, B = A.split(G)[1];
                break
            }
            G += Z
        }
        if (G === A) Q = G;
        return {
            name: Q,
            version: B
        }
    }

    function cy(A = 0) {
        return ((hP.browserPerformanceTimeOrigin || performance.timeOrigin) + A) / 1000
    }

    function WV3(A) {
        let {
            name: Q,
            version: B
        } = Vr2(A.nextHopProtocol), G = [];
        if (G.push(["network.protocol.version", B], ["network.protocol.name", Q]), !hP.browserPerformanceTimeOrigin) return G;
        return [...G, ["http.request.redirect_start", cy(A.redirectStart)],
            ["http.request.fetch_start", cy(A.fetchStart)],
            ["http.request.domain_lookup_start", cy(A.domainLookupStart)],
            ["http.request.domain_lookup_end", cy(A.domainLookupEnd)],
            ["http.request.connect_start", cy(A.connectStart)],
            ["http.request.secure_connection_start", cy(A.secureConnectionStart)],
            ["http.request.connection_end", cy(A.connectEnd)],
            ["http.request.request_start", cy(A.requestStart)],
            ["http.request.response_start", cy(A.responseStart)],
            ["http.request.response_end", cy(A.responseEnd)]
        ]
    }

    function Kr2(A, Q) {
        return hP.stringMatchesSomePattern(A, Q || _G1)
    }

    function Dr2(A, Q, B, G) {
        let Z = A.xhr,
            I = Z && Z[hP.SENTRY_XHR_DATA_KEY];
        if (!fP.hasTracingEnabled() || !Z || Z.__sentry_own_request__ || !I) return;
        let Y = Q(I.url);
        if (A.endTimestamp && Y) {
            let D = Z.__sentry_xhr_span_id__;
            if (!D) return;
            let H = G[D];
            if (H && I.status_code !== void 0) fP.setHttpStatus(H, I.status_code), H.end(), delete G[D];
            return
        }
        let J = fP.getCurrentScope(),
            W = fP.getIsolationScope(),
            X = Hr2(I.url),
            F = X ? hP.parseUrl(X).host : void 0,
            V = Y ? fP.startInactiveSpan({
                name: `${I.method} ${I.url}`,
                onlyIfParent: !0,
                attributes: {
                    type: "xhr",
                    "http.method": I.method,
                    "http.url": X,
                    url: I.url,
                    "server.address": F,
                    [fP.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser"
                },
                op: "http.client"
            }) : void 0;
        if (V) Z.__sentry_xhr_span_id__ = V.spanContext().spanId, G[Z.__sentry_xhr_span_id__] = V;
        let K = fP.getClient();
        if (Z.setRequestHeader && B(I.url) && K) {
            let {
                traceId: D,
                spanId: H,
                sampled: C,
                dsc: E
            } = {
                ...W.getPropagationContext(),
                ...J.getPropagationContext()
            }, z = V ? fP.spanToTraceHeader(V) : hP.generateSentryTraceHeader(D, H, C), w = hP.dynamicSamplingContextToSentryBaggageHeader(E || (V ? fP.getDynamicSamplingContextFromSpan(V) : fP.getDynamicSamplingContextFromClient(D, K, J)));
            XV3(Z, z, w)
        }
        return V
    }

    function XV3(A, Q, B) {
        try {
            if (A.setRequestHeader("sentry-trace", Q), B) A.setRequestHeader(hP.BAGGAGE_HEADER_NAME, B)
        } catch (G) {}
    }

    function Hr2(A) {
        try {
            return new URL(A, IV3.WINDOW.location.origin).href
        } catch (Q) {
            return
        }
    }
    Cr2.DEFAULT_TRACE_PROPAGATION_TARGETS = _G1;
    Cr2.defaultRequestInstrumentationOptions = IY0;
    Cr2.extractNetworkProtocol = Vr2;
    Cr2.instrumentOutgoingRequests = YV3;
    Cr2.shouldAttachHeaders = Kr2;
    Cr2.xhrCallback = Dr2
});
var Ur2 = U((zr2) => {
    Object.defineProperty(zr2, "__esModule", {
        value: !0
    });
    var zPA = l0(),
        Er2 = U$(),
        UPA = gq();

    function EV3(A, Q = !0, B = !0) {
        if (!UPA.WINDOW || !UPA.WINDOW.location) {
            Er2.DEBUG_BUILD && zPA.logger.warn("Could not initialize routing instrumentation due to invalid location");
            return
        }
        let G = UPA.WINDOW.location.href,
            Z;
        if (Q) Z = A({
            name: UPA.WINDOW.location.pathname,
            startTimestamp: zPA.browserPerformanceTimeOrigin ? zPA.browserPerformanceTimeOrigin / 1000 : void 0,
            op: "pageload",
            origin: "auto.pageload.browser",
            metadata: {
                source: "url"
            }
        });
        if (B) zPA.addHistoryInstrumentationHandler(({
            to: I,
            from: Y
        }) => {
            if (Y === void 0 && G && G.indexOf(I) !== -1) {
                G = void 0;
                return
            }
            if (Y !== I) {
                if (G = void 0, Z) Er2.DEBUG_BUILD && zPA.logger.log(`[Tracing] Finishing current transaction with op: ${Z.op}`), Z.end();
                Z = A({
                    name: UPA.WINDOW.location.pathname,
                    op: "navigation",
                    origin: "auto.navigation.browser",
                    metadata: {
                        source: "url"
                    }
                })
            }
        })
    }
    zr2.instrumentRoutingWithDefaults = EV3
});
var Or2 = U((Mr2) => {
    Object.defineProperty(Mr2, "__esModule", {
        value: !0
    });
    var gP = P4(),
        Vg = l0(),
        ln = U$(),
        UV3 = sI0(),
        $r2 = DXA(),
        $PA = GY0(),
        qr2 = kG1(),
        $V3 = Ur2(),
        s0A = gq(),
        Nr2 = "BrowserTracing",
        wV3 = {
            ...gP.TRACING_DEFAULTS,
            markBackgroundTransactions: !0,
            routingInstrumentation: $V3.instrumentRoutingWithDefaults,
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
            enableLongTask: !0,
            enableInp: !1,
            interactionsSampleRate: 1,
            _experiments: {},
            ...qr2.defaultRequestInstrumentationOptions
        },
        wr2 = 10;
    class Lr2 {
        constructor(A) {
            if (this.name = Nr2, this._hasSetTracePropagationTargets = !1, gP.addTracingExtensions(), ln.DEBUG_BUILD) this._hasSetTracePropagationTargets = !!(A && (A.tracePropagationTargets || A.tracingOrigins));
            if (this.options = {
                    ...wV3,
                    ...A
                }, this.options._experiments.enableLongTask !== void 0) this.options.enableLongTask = this.options._experiments.enableLongTask;
            if (A && !A.tracePropagationTargets && A.tracingOrigins) this.options.tracePropagationTargets = A.tracingOrigins;
            if (this._collectWebVitals = $PA.startTrackingWebVitals(), this._interactionIdToRouteNameMapping = {}, this.options.enableInp) $PA.startTrackingINP(this._interactionIdToRouteNameMapping, this.options.interactionsSampleRate);
            if (this.options.enableLongTask) $PA.startTrackingLongTasks();
            if (this.options._experiments.enableInteractions) $PA.startTrackingInteractions();
            this._latestRoute = {
                name: void 0,
                context: void 0
            }
        }
        setupOnce(A, Q) {
            this._getCurrentHub = Q;
            let G = Q().getClient(),
                Z = G && G.getOptions(),
                {
                    routingInstrumentation: I,
                    startTransactionOnLocationChange: Y,
                    startTransactionOnPageLoad: J,
                    markBackgroundTransactions: W,
                    traceFetch: X,
                    traceXHR: F,
                    shouldCreateSpanForRequest: V,
                    enableHTTPTimings: K,
                    _experiments: D
                } = this.options,
                H = Z && Z.tracePropagationTargets,
                C = H || this.options.tracePropagationTargets;
            if (ln.DEBUG_BUILD && this._hasSetTracePropagationTargets && H) Vg.logger.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
            if (I((E) => {
                    let z = this._createRouteTransaction(E);
                    return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(z, E, Q), z
                }, J, Y), W) UV3.registerBackgroundTabDetection();
            if (D.enableInteractions) this._registerInteractionListener();
            if (this.options.enableInp) this._registerInpInteractionListener();
            qr2.instrumentOutgoingRequests({
                traceFetch: X,
                traceXHR: F,
                tracePropagationTargets: C,
                shouldCreateSpanForRequest: V,
                enableHTTPTimings: K
            })
        }
        _createRouteTransaction(A) {
            if (!this._getCurrentHub) {
                ln.DEBUG_BUILD && Vg.logger.warn(`[Tracing] Did not create ${A.op} transaction because _getCurrentHub is invalid.`);
                return
            }
            let Q = this._getCurrentHub(),
                {
                    beforeNavigate: B,
                    idleTimeout: G,
                    finalTimeout: Z,
                    heartbeatInterval: I
                } = this.options,
                Y = A.op === "pageload",
                J;
            if (Y) {
                let K = Y ? YY0("sentry-trace") : "",
                    D = Y ? YY0("baggage") : void 0,
                    {
                        traceId: H,
                        dsc: C,
                        parentSpanId: E,
                        sampled: z
                    } = Vg.propagationContextFromHeaders(K, D);
                J = {
                    traceId: H,
                    parentSpanId: E,
                    parentSampled: z,
                    ...A,
                    metadata: {
                        ...A.metadata,
                        dynamicSamplingContext: C
                    },
                    trimEnd: !0
                }
            } else J = {
                trimEnd: !0,
                ...A
            };
            let W = typeof B === "function" ? B(J) : J,
                X = W === void 0 ? {
                    ...J,
                    sampled: !1
                } : W;
            if (X.metadata = X.name !== J.name ? {
                    ...X.metadata,
                    source: "custom"
                } : X.metadata, this._latestRoute.name = X.name, this._latestRoute.context = X, X.sampled === !1) ln.DEBUG_BUILD && Vg.logger.log(`[Tracing] Will not send ${X.op} transaction because of beforeNavigate.`);
            ln.DEBUG_BUILD && Vg.logger.log(`[Tracing] Starting ${X.op} transaction on scope`);
            let {
                location: F
            } = s0A.WINDOW, V = gP.startIdleTransaction(Q, X, G, Z, !0, {
                location: F
            }, I, Y);
            if (Y) {
                if (s0A.WINDOW.document) {
                    if (s0A.WINDOW.document.addEventListener("readystatechange", () => {
                            if (["interactive", "complete"].includes(s0A.WINDOW.document.readyState)) V.sendAutoFinishSignal()
                        }), ["interactive", "complete"].includes(s0A.WINDOW.document.readyState)) V.sendAutoFinishSignal()
                }
            }
            return V.registerBeforeFinishCallback((K) => {
                this._collectWebVitals(), $PA.addPerformanceEntries(K)
            }), V
        }
        _registerInteractionListener() {
            let A, Q = () => {
                let {
                    idleTimeout: B,
                    finalTimeout: G,
                    heartbeatInterval: Z
                } = this.options, I = "ui.action.click", Y = gP.getActiveTransaction();
                if (Y && Y.op && ["navigation", "pageload"].includes(Y.op)) {
                    ln.DEBUG_BUILD && Vg.logger.warn("[Tracing] Did not create ui.action.click transaction because a pageload or navigation transaction is in progress.");
                    return
                }
                if (A) A.setFinishReason("interactionInterrupted"), A.end(), A = void 0;
                if (!this._getCurrentHub) {
                    ln.DEBUG_BUILD && Vg.logger.warn("[Tracing] Did not create ui.action.click transaction because _getCurrentHub is invalid.");
                    return
                }
                if (!this._latestRoute.name) {
                    ln.DEBUG_BUILD && Vg.logger.warn("[Tracing] Did not create ui.action.click transaction because _latestRouteName is missing.");
                    return
                }
                let J = this._getCurrentHub(),
                    {
                        location: W
                    } = s0A.WINDOW,
                    X = {
                        name: this._latestRoute.name,
                        op: "ui.action.click",
                        trimEnd: !0,
                        data: {
                            [gP.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: this._latestRoute.context ? qV3(this._latestRoute.context) : "url"
                        }
                    };
                A = gP.startIdleTransaction(J, X, B, G, !0, {
                    location: W
                }, Z)
            };
            ["click"].forEach((B) => {
                if (s0A.WINDOW.document) addEventListener(B, Q, {
                    once: !1,
                    capture: !0
                })
            })
        }
        _registerInpInteractionListener() {
            let A = ({
                entries: Q
            }) => {
                let B = gP.getClient(),
                    G = B !== void 0 && B.getIntegrationByName !== void 0 ? B.getIntegrationByName("Replay") : void 0,
                    Z = G !== void 0 ? G.getReplayId() : void 0,
                    I = gP.getActiveTransaction(),
                    Y = gP.getCurrentScope(),
                    J = Y !== void 0 ? Y.getUser() : void 0;
                Q.forEach((W) => {
                    if (NV3(W)) {
                        let X = W.interactionId;
                        if (X === void 0) return;
                        let F = this._interactionIdToRouteNameMapping[X],
                            V = W.duration,
                            K = W.startTime,
                            D = Object.keys(this._interactionIdToRouteNameMapping),
                            H = D.length > 0 ? D.reduce((C, E) => {
                                return this._interactionIdToRouteNameMapping[C].duration < this._interactionIdToRouteNameMapping[E].duration ? C : E
                            }) : void 0;
                        if (W.entryType === "first-input") {
                            if (D.map((E) => this._interactionIdToRouteNameMapping[E]).some((E) => {
                                    return E.duration === V && E.startTime === K
                                })) return
                        }
                        if (!X) return;
                        if (F) F.duration = Math.max(F.duration, V);
                        else if (D.length < wr2 || H === void 0 || V > this._interactionIdToRouteNameMapping[H].duration) {
                            let C = this._latestRoute.name,
                                E = this._latestRoute.context;
                            if (C && E) {
                                if (H && Object.keys(this._interactionIdToRouteNameMapping).length >= wr2) delete this._interactionIdToRouteNameMapping[H];
                                this._interactionIdToRouteNameMapping[X] = {
                                    routeName: C,
                                    duration: V,
                                    parentContext: E,
                                    user: J,
                                    activeTransaction: I,
                                    replayId: Z,
                                    startTime: K
                                }
                            }
                        }
                    }
                })
            };
            $r2.addPerformanceInstrumentationHandler("event", A), $r2.addPerformanceInstrumentationHandler("first-input", A)
        }
    }

    function YY0(A) {
        let Q = Vg.getDomElement(`meta[name=${A}]`);
        return Q ? Q.getAttribute("content") : void 0
    }

    function qV3(A) {
        let Q = A.attributes && A.attributes[gP.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
            B = A.data && A.data[gP.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
            G = A.metadata && A.metadata.source;
        return Q || B || G
    }

    function NV3(A) {
        return "duration" in A
    }
    Mr2.BROWSER_TRACING_INTEGRATION_ID = Nr2;
    Mr2.BrowserTracing = Lr2;
    Mr2.getMetaContent = YY0
});
var yr2 = U((kr2) => {
    Object.defineProperty(kr2, "__esModule", {
        value: !0
    });
    var dW = P4(),
        OO = l0(),
        nn = U$(),
        RV3 = sI0(),
        Rr2 = DXA(),
        wPA = GY0(),
        Pr2 = kG1(),
        mq = gq(),
        jr2 = "BrowserTracing",
        TV3 = {
            ...dW.TRACING_DEFAULTS,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableInp: !1,
            interactionsSampleRate: 1,
            _experiments: {},
            ...Pr2.defaultRequestInstrumentationOptions
        },
        PV3 = (A = {}) => {
            let Q = nn.DEBUG_BUILD ? !!(A.tracePropagationTargets || A.tracingOrigins) : !1;
            if (dW.addTracingExtensions(), !A.tracePropagationTargets && A.tracingOrigins) A.tracePropagationTargets = A.tracingOrigins;
            let B = {
                    ...TV3,
                    ...A
                },
                G = wPA.startTrackingWebVitals(),
                Z = {};
            if (B.enableInp) wPA.startTrackingINP(Z, B.interactionsSampleRate);
            if (B.enableLongTask) wPA.startTrackingLongTasks();
            if (B._experiments.enableInteractions) wPA.startTrackingInteractions();
            let I = {
                name: void 0,
                context: void 0
            };

            function Y(J) {
                let W = dW.getCurrentHub(),
                    {
                        beforeStartSpan: X,
                        idleTimeout: F,
                        finalTimeout: V,
                        heartbeatInterval: K
                    } = B,
                    D = J.op === "pageload",
                    H;
                if (D) {
                    let w = D ? JY0("sentry-trace") : "",
                        N = D ? JY0("baggage") : void 0,
                        {
                            traceId: q,
                            dsc: R,
                            parentSpanId: P,
                            sampled: y
                        } = OO.propagationContextFromHeaders(w, N);
                    H = {
                        traceId: q,
                        parentSpanId: P,
                        parentSampled: y,
                        ...J,
                        metadata: {
                            ...J.metadata,
                            dynamicSamplingContext: R
                        },
                        trimEnd: !0
                    }
                } else H = {
                    trimEnd: !0,
                    ...J
                };
                let C = X ? X(H) : H;
                if (C.metadata = C.name !== H.name ? {
                        ...C.metadata,
                        source: "custom"
                    } : C.metadata, I.name = C.name, I.context = C, C.sampled === !1) nn.DEBUG_BUILD && OO.logger.log(`[Tracing] Will not send ${C.op} transaction because of beforeNavigate.`);
                nn.DEBUG_BUILD && OO.logger.log(`[Tracing] Starting ${C.op} transaction on scope`);
                let {
                    location: E
                } = mq.WINDOW, z = dW.startIdleTransaction(W, C, F, V, !0, {
                    location: E
                }, K, D);
                if (D && mq.WINDOW.document) {
                    if (mq.WINDOW.document.addEventListener("readystatechange", () => {
                            if (["interactive", "complete"].includes(mq.WINDOW.document.readyState)) z.sendAutoFinishSignal()
                        }), ["interactive", "complete"].includes(mq.WINDOW.document.readyState)) z.sendAutoFinishSignal()
                }
                return z.registerBeforeFinishCallback((w) => {
                    G(), wPA.addPerformanceEntries(w)
                }), z
            }
            return {
                name: jr2,
                setupOnce: () => {},
                afterAllSetup(J) {
                    let W = J.getOptions(),
                        {
                            markBackgroundSpan: X,
                            traceFetch: F,
                            traceXHR: V,
                            shouldCreateSpanForRequest: K,
                            enableHTTPTimings: D,
                            _experiments: H
                        } = B,
                        C = W && W.tracePropagationTargets,
                        E = C || B.tracePropagationTargets;
                    if (nn.DEBUG_BUILD && Q && C) OO.logger.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
                    let z, w = mq.WINDOW.location && mq.WINDOW.location.href;
                    if (J.on) J.on("startNavigationSpan", (N) => {
                        if (z) nn.DEBUG_BUILD && OO.logger.log(`[Tracing] Finishing current transaction with op: ${dW.spanToJSON(z).op}`), z.end();
                        z = Y({
                            op: "navigation",
                            ...N
                        })
                    }), J.on("startPageLoadSpan", (N) => {
                        if (z) nn.DEBUG_BUILD && OO.logger.log(`[Tracing] Finishing current transaction with op: ${dW.spanToJSON(z).op}`), z.end();
                        z = Y({
                            op: "pageload",
                            ...N
                        })
                    });
                    if (B.instrumentPageLoad && J.emit && mq.WINDOW.location) {
                        let N = {
                            name: mq.WINDOW.location.pathname,
                            startTimestamp: OO.browserPerformanceTimeOrigin ? OO.browserPerformanceTimeOrigin / 1000 : void 0,
                            origin: "auto.pageload.browser",
                            attributes: {
                                [dW.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
                            }
                        };
                        Sr2(J, N)
                    }
                    if (B.instrumentNavigation && J.emit && mq.WINDOW.location) OO.addHistoryInstrumentationHandler(({
                        to: N,
                        from: q
                    }) => {
                        if (q === void 0 && w && w.indexOf(N) !== -1) {
                            w = void 0;
                            return
                        }
                        if (q !== N) {
                            w = void 0;
                            let R = {
                                name: mq.WINDOW.location.pathname,
                                origin: "auto.navigation.browser",
                                attributes: {
                                    [dW.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
                                }
                            };
                            _r2(J, R)
                        }
                    });
                    if (X) RV3.registerBackgroundTabDetection();
                    if (H.enableInteractions) jV3(B, I);
                    if (B.enableInp) _V3(Z, I);
                    Pr2.instrumentOutgoingRequests({
                        traceFetch: F,
                        traceXHR: V,
                        tracePropagationTargets: E,
                        shouldCreateSpanForRequest: K,
                        enableHTTPTimings: D
                    })
                },
                options: B
            }
        };

    function Sr2(A, Q) {
        if (!A.emit) return;
        A.emit("startPageLoadSpan", Q);
        let B = dW.getActiveSpan();
        return (B && dW.spanToJSON(B).op) === "pageload" ? B : void 0
    }

    function _r2(A, Q) {
        if (!A.emit) return;
        A.emit("startNavigationSpan", Q);
        let B = dW.getActiveSpan();
        return (B && dW.spanToJSON(B).op) === "navigation" ? B : void 0
    }

    function JY0(A) {
        let Q = OO.getDomElement(`meta[name=${A}]`);
        return Q ? Q.getAttribute("content") : void 0
    }

    function jV3(A, Q) {
        let B, G = () => {
            let {
                idleTimeout: Z,
                finalTimeout: I,
                heartbeatInterval: Y
            } = A, J = "ui.action.click", W = dW.getActiveTransaction();
            if (W && W.op && ["navigation", "pageload"].includes(W.op)) {
                nn.DEBUG_BUILD && OO.logger.warn("[Tracing] Did not create ui.action.click transaction because a pageload or navigation transaction is in progress.");
                return
            }
            if (B) B.setFinishReason("interactionInterrupted"), B.end(), B = void 0;
            if (!Q.name) {
                nn.DEBUG_BUILD && OO.logger.warn("[Tracing] Did not create ui.action.click transaction because _latestRouteName is missing.");
                return
            }
            let {
                location: X
            } = mq.WINDOW, F = {
                name: Q.name,
                op: "ui.action.click",
                trimEnd: !0,
                data: {
                    [dW.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: Q.context ? kV3(Q.context) : "url"
                }
            };
            B = dW.startIdleTransaction(dW.getCurrentHub(), F, Z, I, !0, {
                location: X
            }, Y)
        };
        ["click"].forEach((Z) => {
            if (mq.WINDOW.document) addEventListener(Z, G, {
                once: !1,
                capture: !0
            })
        })
    }

    function SV3(A) {
        return "duration" in A
    }
    var Tr2 = 10;

    function _V3(A, Q) {
        let B = ({
            entries: G
        }) => {
            let Z = dW.getClient(),
                I = Z !== void 0 && Z.getIntegrationByName !== void 0 ? Z.getIntegrationByName("Replay") : void 0,
                Y = I !== void 0 ? I.getReplayId() : void 0,
                J = dW.getActiveTransaction(),
                W = dW.getCurrentScope(),
                X = W !== void 0 ? W.getUser() : void 0;
            G.forEach((F) => {
                if (SV3(F)) {
                    let V = F.interactionId;
                    if (V === void 0) return;
                    let K = A[V],
                        D = F.duration,
                        H = F.startTime,
                        C = Object.keys(A),
                        E = C.length > 0 ? C.reduce((z, w) => {
                            return A[z].duration < A[w].duration ? z : w
                        }) : void 0;
                    if (F.entryType === "first-input") {
                        if (C.map((w) => A[w]).some((w) => {
                                return w.duration === D && w.startTime === H
                            })) return
                    }
                    if (!V) return;
                    if (K) K.duration = Math.max(K.duration, D);
                    else if (C.length < Tr2 || E === void 0 || D > A[E].duration) {
                        let {
                            name: z,
                            context: w
                        } = Q;
                        if (z && w) {
                            if (E && Object.keys(A).length >= Tr2) delete A[E];
                            A[V] = {
                                routeName: z,
                                duration: D,
                                parentContext: w,
                                user: X,
                                activeTransaction: J,
                                replayId: Y,
                                startTime: H
                            }
                        }
                    }
                }
            })
        };
        Rr2.addPerformanceInstrumentationHandler("event", B), Rr2.addPerformanceInstrumentationHandler("first-input", B)
    }

    function kV3(A) {
        let Q = A.attributes && A.attributes[dW.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
            B = A.data && A.data[dW.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
            G = A.metadata && A.metadata.source;
        return Q || B || G
    }
    kr2.BROWSER_TRACING_INTEGRATION_ID = jr2;
    kr2.browserTracingIntegration = PV3;
    kr2.getMetaContent = JY0;
    kr2.startBrowserTracingNavigationSpan = _r2;
    kr2.startBrowserTracingPageLoadSpan = Sr2
});
var br2 = U((vr2, qPA) => {
    Object.defineProperty(vr2, "__esModule", {
        value: !0
    });
    var xr2 = P4(),
        HXA = l0();

    function hV3() {
        let A = xr2.getMainCarrier();
        if (!A.__SENTRY__) return;
        let Q = {
                mongodb() {
                    return new(HXA.dynamicRequire(qPA, "./node/integrations/mongo")).Mongo
                },
                mongoose() {
                    return new(HXA.dynamicRequire(qPA, "./node/integrations/mongo")).Mongo
                },
                mysql() {
                    return new(HXA.dynamicRequire(qPA, "./node/integrations/mysql")).Mysql
                },
                pg() {
                    return new(HXA.dynamicRequire(qPA, "./node/integrations/postgres")).Postgres
                }
            },
            B = Object.keys(Q).filter((G) => !!HXA.loadModule(G)).map((G) => {
                try {
                    return Q[G]()
                } catch (Z) {
                    return
                }
            }).filter((G) => G);
        if (B.length > 0) A.__SENTRY__.integrations = [...A.__SENTRY__.integrations || [], ...B]
    }

    function gV3() {
        if (xr2.addTracingExtensions(), HXA.isNodeEnv()) hV3()
    }
    vr2.addExtensionMethods = gV3
});
var XY0 = U((mr2) => {
    Object.defineProperty(mr2, "__esModule", {
        value: !0
    });
    var Kg = P4(),
        fr2 = l0(),
        mV3 = na2(),
        dV3 = sa2(),
        cV3 = oa2(),
        pV3 = As2(),
        lV3 = Gs2(),
        iV3 = Ys2(),
        nV3 = Xs2(),
        aV3 = Vs2(),
        hr2 = Or2(),
        WY0 = yr2(),
        gr2 = kG1(),
        yG1 = DXA(),
        ur2 = ZY0(),
        sV3 = br2();
    mr2.IdleTransaction = Kg.IdleTransaction;
    mr2.Span = Kg.Span;
    mr2.SpanStatus = Kg.SpanStatus;
    mr2.Transaction = Kg.Transaction;
    mr2.extractTraceparentData = Kg.extractTraceparentData;
    mr2.getActiveTransaction = Kg.getActiveTransaction;
    mr2.hasTracingEnabled = Kg.hasTracingEnabled;
    mr2.spanStatusfromHttpCode = Kg.spanStatusfromHttpCode;
    mr2.startIdleTransaction = Kg.startIdleTransaction;
    mr2.TRACEPARENT_REGEXP = fr2.TRACEPARENT_REGEXP;
    mr2.stripUrlQueryAndFragment = fr2.stripUrlQueryAndFragment;
    mr2.Express = mV3.Express;
    mr2.Postgres = dV3.Postgres;
    mr2.Mysql = cV3.Mysql;
    mr2.Mongo = pV3.Mongo;
    mr2.Prisma = lV3.Prisma;
    mr2.GraphQL = iV3.GraphQL;
    mr2.Apollo = nV3.Apollo;
    mr2.lazyLoadedNodePerformanceMonitoringIntegrations = aV3.lazyLoadedNodePerformanceMonitoringIntegrations;
    mr2.BROWSER_TRACING_INTEGRATION_ID = hr2.BROWSER_TRACING_INTEGRATION_ID;
    mr2.BrowserTracing = hr2.BrowserTracing;
    mr2.browserTracingIntegration = WY0.browserTracingIntegration;
    mr2.startBrowserTracingNavigationSpan = WY0.startBrowserTracingNavigationSpan;
    mr2.startBrowserTracingPageLoadSpan = WY0.startBrowserTracingPageLoadSpan;
    mr2.defaultRequestInstrumentationOptions = gr2.defaultRequestInstrumentationOptions;
    mr2.instrumentOutgoingRequests = gr2.instrumentOutgoingRequests;
    mr2.addClsInstrumentationHandler = yG1.addClsInstrumentationHandler;
    mr2.addFidInstrumentationHandler = yG1.addFidInstrumentationHandler;
    mr2.addLcpInstrumentationHandler = yG1.addLcpInstrumentationHandler;
    mr2.addPerformanceInstrumentationHandler = yG1.addPerformanceInstrumentationHandler;
    mr2.addTracingHeadersToFetchRequest = ur2.addTracingHeadersToFetchRequest;
    mr2.instrumentFetchRequest = ur2.instrumentFetchRequest;
    mr2.addExtensionMethods = sV3.addExtensionMethods
});
var cr2 = U((dr2) => {
    Object.defineProperty(dr2, "__esModule", {
        value: !0
    });
    var jK3 = XY0(),
        SK3 = l0();

    function _K3() {
        let A = jK3.lazyLoadedNodePerformanceMonitoringIntegrations.map((Q) => {
            try {
                return Q()
            } catch (B) {
                return
            }
        }).filter((Q) => !!Q);
        if (A.length === 0) SK3.logger.warn("Performance monitoring integrations could not be automatically loaded.");
        return A.filter((Q) => !!Q.loadDependency())
    }
    dr2.autoDiscoverNodePerformanceMonitoringIntegrations = _K3
});
var FY0 = U((ir2) => {
    Object.defineProperty(ir2, "__esModule", {
        value: !0
    });
    var yK3 = UA("os"),
        xK3 = UA("util"),
        pr2 = P4();
    class lr2 extends pr2.ServerRuntimeClient {
        constructor(A) {
            pr2.applySdkMetadata(A, "node"), A.transportOptions = {
                textEncoder: new xK3.TextEncoder,
                ...A.transportOptions
            };
            let Q = {
                ...A,
                platform: "node",
                runtime: {
                    name: "node",
                    version: global.process.version
                },
                serverName: A.serverName || global.process.env.SENTRY_NAME || yK3.hostname()
            };
            super(Q)
        }
    }
    ir2.NodeClient = lr2
});
var or2 = U((rr2) => {
    var {
        _nullishCoalesce: nr2
    } = l0();
    Object.defineProperty(rr2, "__esModule", {
        value: !0
    });
    var ar2 = UA("http");
    UA("https");
    var py = Symbol("AgentBaseInternalState");
    class sr2 extends ar2.Agent {
        constructor(A) {
            super(A);
            this[py] = {}
        }
        isSecureEndpoint(A) {
            if (A) {
                if (typeof A.secureEndpoint === "boolean") return A.secureEndpoint;
                if (typeof A.protocol === "string") return A.protocol === "https:"
            }
            let {
                stack: Q
            } = Error();
            if (typeof Q !== "string") return !1;
            return Q.split(`
`).some((B) => B.indexOf("(https.js:") !== -1 || B.indexOf("node:https:") !== -1)
        }
        createSocket(A, Q, B) {
            let G = {
                ...Q,
                secureEndpoint: this.isSecureEndpoint(Q)
            };
            Promise.resolve().then(() => this.connect(A, G)).then((Z) => {
                if (Z instanceof ar2.Agent) return Z.addRequest(A, G);
                this[py].currentSocket = Z, super.createSocket(A, Q, B)
            }, B)
        }
        createConnection() {
            let A = this[py].currentSocket;
            if (this[py].currentSocket = void 0, !A) throw Error("No socket was returned in the `connect()` function");
            return A
        }
        get defaultPort() {
            return nr2(this[py].defaultPort, () => this.protocol === "https:" ? 443 : 80)
        }
        set defaultPort(A) {
            if (this[py]) this[py].defaultPort = A
        }
        get protocol() {
            return nr2(this[py].protocol, () => this.isSecureEndpoint() ? "https:" : "http:")
        }
        set protocol(A) {
            if (this[py]) this[py].protocol = A
        }
    }
    rr2.Agent = sr2
});
var er2 = U((tr2) => {
    Object.defineProperty(tr2, "__esModule", {
        value: !0
    });
    var fK3 = l0();

    function xG1(...A) {
        fK3.logger.log("[https-proxy-agent:parse-proxy-response]", ...A)
    }

    function hK3(A) {
        return new Promise((Q, B) => {
            let G = 0,
                Z = [];

            function I() {
                let F = A.read();
                if (F) X(F);
                else A.once("readable", I)
            }

            function Y() {
                A.removeListener("end", J), A.removeListener("error", W), A.removeListener("readable", I)
            }

            function J() {
                Y(), xG1("onend"), B(Error("Proxy connection ended before receiving CONNECT response"))
            }

            function W(F) {
                Y(), xG1("onerror %o", F), B(F)
            }

            function X(F) {
                Z.push(F), G += F.length;
                let V = Buffer.concat(Z, G),
                    K = V.indexOf(`\r
\r
`);
                if (K === -1) {
                    xG1("have not received end of HTTP headers yet..."), I();
                    return
                }
                let D = V.slice(0, K).toString("ascii").split(`\r
`),
                    H = D.shift();
                if (!H) return A.destroy(), B(Error("No header received from proxy CONNECT response"));
                let C = H.split(" "),
                    E = +C[1],
                    z = C.slice(2).join(" "),
                    w = {};
                for (let N of D) {
                    if (!N) continue;
                    let q = N.indexOf(":");
                    if (q === -1) return A.destroy(), B(Error(`Invalid header from proxy CONNECT response: "${N}"`));
                    let R = N.slice(0, q).toLowerCase(),
                        P = N.slice(q + 1).trimStart(),
                        y = w[R];
                    if (typeof y === "string") w[R] = [y, P];
                    else if (Array.isArray(y)) y.push(P);
                    else w[R] = P
                }
                xG1("got proxy server response: %o %o", H, w), Y(), Q({
                    connect: {
                        statusCode: E,
                        statusText: z,
                        headers: w
                    },
                    buffered: V
                })
            }
            A.on("error", W), A.on("end", J), I()
        })
    }
    tr2.parseProxyResponse = hK3
});
var Go2 = U((Bo2) => {
    var {
        _nullishCoalesce: uK3,
        _optionalChain: mK3
    } = l0();
    Object.defineProperty(Bo2, "__esModule", {
        value: !0
    });
    var NPA = UA("net"),
        Ao2 = UA("tls"),
        dK3 = UA("url"),
        cK3 = l0(),
        pK3 = or2(),
        lK3 = er2();

    function LPA(...A) {
        cK3.logger.log("[https-proxy-agent]", ...A)
    }
    class VY0 extends pK3.Agent {
        static __initStatic() {
            this.protocols = ["http", "https"]
        }
        constructor(A, Q) {
            super(Q);
            this.options = {}, this.proxy = typeof A === "string" ? new dK3.URL(A) : A, this.proxyHeaders = uK3(mK3([Q, "optionalAccess", (Z) => Z.headers]), () => ({})), LPA("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
            let B = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
                G = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
            this.connectOpts = {
                ALPNProtocols: ["http/1.1"],
                ...Q ? Qo2(Q, "headers") : null,
                host: B,
                port: G
            }
        }
        async connect(A, Q) {
            let {
                proxy: B
            } = this;
            if (!Q.host) throw TypeError('No "host" provided');
            let G;
            if (B.protocol === "https:") {
                LPA("Creating `tls.Socket`: %o", this.connectOpts);
                let V = this.connectOpts.servername || this.connectOpts.host;
                G = Ao2.connect({
                    ...this.connectOpts,
                    servername: V && NPA.isIP(V) ? void 0 : V
                })
            } else LPA("Creating `net.Socket`: %o", this.connectOpts), G = NPA.connect(this.connectOpts);
            let Z = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
                    ...this.proxyHeaders
                },
                I = NPA.isIPv6(Q.host) ? `[${Q.host}]` : Q.host,
                Y = `CONNECT ${I}:${Q.port} HTTP/1.1\r
`;
            if (B.username || B.password) {
                let V = `${decodeURIComponent(B.username)}:${decodeURIComponent(B.password)}`;
                Z["Proxy-Authorization"] = `Basic ${Buffer.from(V).toString("base64")}`
            }
            if (Z.Host = `${I}:${Q.port}`, !Z["Proxy-Connection"]) Z["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
            for (let V of Object.keys(Z)) Y += `${V}: ${Z[V]}\r
`;
            let J = lK3.parseProxyResponse(G);
            G.write(`${Y}\r
`);
            let {
                connect: W,
                buffered: X
            } = await J;
            if (A.emit("proxyConnect", W), this.emit("proxyConnect", W, A), W.statusCode === 200) {
                if (A.once("socket", iK3), Q.secureEndpoint) {
                    LPA("Upgrading socket connection to TLS");
                    let V = Q.servername || Q.host;
                    return Ao2.connect({
                        ...Qo2(Q, "host", "path", "port"),
                        socket: G,
                        servername: NPA.isIP(V) ? void 0 : V
                    })
                }
                return G
            }
            G.destroy();
            let F = new NPA.Socket({
                writable: !1
            });
            return F.readable = !0, A.once("socket", (V) => {
                LPA("Replaying proxy buffer for failed request"), V.push(X), V.push(null)
            }), F
        }
    }
    VY0.__initStatic();

    function iK3(A) {
        A.resume()
    }

    function Qo2(A, ...Q) {
        let B = {},
            G;
        for (G in A)
            if (!Q.includes(G)) B[G] = A[G];
        return B
    }
    Bo2.HttpsProxyAgent = VY0
});
var DY0 = U((Yo2) => {
    var {
        _nullishCoalesce: KY0
    } = l0();
    Object.defineProperty(Yo2, "__esModule", {
        value: !0
    });
    var aK3 = UA("http"),
        sK3 = UA("https"),
        rK3 = UA("stream"),
        Io2 = UA("url"),
        oK3 = UA("zlib"),
        Zo2 = P4(),
        tK3 = l0(),
        eK3 = Go2(),
        AD3 = 32768;

    function QD3(A) {
        return new rK3.Readable({
            read() {
                this.push(A), this.push(null)
            }
        })
    }

    function BD3(A) {
        let Q;
        try {
            Q = new Io2.URL(A.url)
        } catch (W) {
            return tK3.consoleSandbox(() => {
                console.warn("[@sentry/node]: Invalid dsn or tunnel option, will not send any events. The tunnel option must be a full URL when used.")
            }), Zo2.createTransport(A, () => Promise.resolve({}))
        }
        let B = Q.protocol === "https:",
            G = GD3(Q, A.proxy || (B ? process.env.https_proxy : void 0) || process.env.http_proxy),
            Z = B ? sK3 : aK3,
            I = A.keepAlive === void 0 ? !1 : A.keepAlive,
            Y = G ? new eK3.HttpsProxyAgent(G) : new Z.Agent({
                keepAlive: I,
                maxSockets: 30,
                timeout: 2000
            }),
            J = ZD3(A, KY0(A.httpModule, () => Z), Y);
        return Zo2.createTransport(A, J)
    }

    function GD3(A, Q) {
        let {
            no_proxy: B
        } = process.env;
        if (B && B.split(",").some((Z) => A.host.endsWith(Z) || A.hostname.endsWith(Z))) return;
        else return Q
    }

    function ZD3(A, Q, B) {
        let {
            hostname: G,
            pathname: Z,
            port: I,
            protocol: Y,
            search: J
        } = new Io2.URL(A.url);
        return function(X) {
            return new Promise((F, V) => {
                let K = QD3(X.body),
                    D = {
                        ...A.headers
                    };
                if (X.body.length > AD3) D["content-encoding"] = "gzip", K = K.pipe(oK3.createGzip());
                let H = Q.request({
                    method: "POST",
                    agent: B,
                    headers: D,
                    hostname: G,
                    path: `${Z}${J}`,
                    port: I,
                    protocol: Y,
                    ca: A.caCerts
                }, (C) => {
                    C.on("data", () => {}), C.on("end", () => {}), C.setEncoding("utf8");
                    let E = KY0(C.headers["retry-after"], () => null),
                        z = KY0(C.headers["x-sentry-rate-limits"], () => null);
                    F({
                        statusCode: C.statusCode,
                        headers: {
                            "retry-after": E,
                            "x-sentry-rate-limits": Array.isArray(z) ? z[0] : z
                        }
                    })
                });
                H.on("error", V), K.pipe(H)
            })
        }
    }
    Yo2.makeNodeTransport = BD3
});
var r0A = U((Jo2) => {
    Object.defineProperty(Jo2, "__esModule", {
        value: !0
    });
    var YD3 = l0(),
        JD3 = YD3.parseSemver(process.versions.node);
    Jo2.NODE_VERSION = JD3
});
var Vo2 = U((Fo2) => {
    var {
        _optionalChain: XD3
    } = l0();
    Object.defineProperty(Fo2, "__esModule", {
        value: !0
    });
    var Wo2 = UA("domain"),
        o0A = P4();

    function Xo2() {
        return Wo2.active
    }

    function FD3() {
        let A = Xo2();
        if (!A) return;
        return o0A.ensureHubOnCarrier(A), o0A.getHubFromCarrier(A)
    }

    function VD3(A) {
        let Q = {};
        return o0A.ensureHubOnCarrier(Q, A), o0A.getHubFromCarrier(Q)
    }

    function KD3(A, Q) {
        let B = Xo2();
        if (B && XD3([Q, "optionalAccess", (Y) => Y.reuseExisting])) return A();
        let G = Wo2.create(),
            Z = B ? o0A.getHubFromCarrier(B) : void 0,
            I = VD3(Z);
        return o0A.setHubOnCarrier(G, I), G.bind(() => {
            return A()
        })()
    }

    function DD3() {
        o0A.setAsyncContextStrategy({
            getCurrentHub: FD3,
            runWithAsyncContext: KD3
        })
    }
    Fo2.setDomainAsyncContextStrategy = DD3
});
var Do2 = U((Ko2) => {
    var {
        _optionalChain: CD3
    } = l0();
    Object.defineProperty(Ko2, "__esModule", {
        value: !0
    });
    var HY0 = P4(),
        ED3 = UA("async_hooks"),
        vG1;

    function zD3() {
        if (!vG1) vG1 = new ED3.AsyncLocalStorage;

        function A() {
            return vG1.getStore()
        }

        function Q(G) {
            let Z = {};
            return HY0.ensureHubOnCarrier(Z, G), HY0.getHubFromCarrier(Z)
        }

        function B(G, Z) {
            let I = A();
            if (I && CD3([Z, "optionalAccess", (J) => J.reuseExisting])) return G();
            let Y = Q(I);
            return vG1.run(Y, () => {
                return G()
            })
        }
        HY0.setAsyncContextStrategy({
            getCurrentHub: A,
            runWithAsyncContext: B
        })
    }
    Ko2.setHooksAsyncContextStrategy = zD3
});
var Co2 = U((Ho2) => {
    Object.defineProperty(Ho2, "__esModule", {
        value: !0
    });
    var $D3 = r0A(),
        wD3 = Vo2(),
        qD3 = Do2();

    function ND3() {
        if ($D3.NODE_VERSION.major >= 14) qD3.setHooksAsyncContextStrategy();
        else wD3.setDomainAsyncContextStrategy()
    }