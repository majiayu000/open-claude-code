/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: git_032.js
 * 处理时间: 2025-12-09T03:41:37.637Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * c53      (  2x) SENTRY_SOURCE = "sentry.source"
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 32/34
 * Lines: 376827 - 378324 (1498 lines)
 * Original file: cli.js
 */

    eWA();
    var h53 = a71(),
        QPA;

    function Ji2(A) {
        return QPA ? QPA.get(A) : void 0
    }

    function g53(A) {
        let Q = Ji2(A);
        if (!Q) return;
        let B = {};
        for (let [, [G, Z]] of Q) {
            if (!B[G]) B[G] = [];
            B[G].push(f53.dropUndefinedKeys(Z))
        }
        return B
    }

    function u53(A, Q, B, G, Z, I) {
        let Y = h53.getActiveSpan();
        if (Y) {
            let J = Ji2(Y) || new Map,
                W = `${A}:${Q}@${G}`,
                X = J.get(I);
            if (X) {
                let [, F] = X;
                J.set(I, [W, {
                    min: Math.min(F.min, B),
                    max: Math.max(F.max, B),
                    count: F.count += 1,
                    sum: F.sum += B,
                    tags: F.tags
                }])
            } else J.set(I, [W, {
                min: B,
                max: B,
                count: 1,
                sum: B,
                tags: Z
            }]);
            if (!QPA) QPA = new WeakMap;
            QPA.set(Y, J)
        }
    }
    Wi2.getMetricSummaryJsonForSpan = g53;
    Wi2.updateMetricSummaryOnActiveSpan = u53
});
var GPA = U((Xi2) => {
    Object.defineProperty(Xi2, "__esModule", {
        value: !0
    });
    /* c53 = SENTRY_SOURCE = "sentry.source" */
var c53 = "sentry.source",
        p53 = "sentry.sample_rate",
        l53 = "sentry.op",
        i53 = "sentry.origin",
        n53 = "profile_id";
    Xi2.SEMANTIC_ATTRIBUTE_PROFILE_ID = n53;
    Xi2.SEMANTIC_ATTRIBUTE_SENTRY_OP = l53;
    Xi2.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = i53;
    Xi2.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = p53;
    Xi2.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = c53
});
var s71 = U((Di2) => {
    Object.defineProperty(Di2, "__esModule", {
        value: !0
    });
    var m0A = l0(),
        Fi2 = AF(),
        e53 = BPA(),
        Zg = GPA(),
        Vi2 = rWA(),
        QXA = C$(),
        A33 = eWA();
    class Ki2 {
        constructor(A = 1000) {
            this._maxlen = A, this.spans = []
        }
        add(A) {
            if (this.spans.length > this._maxlen) A.spanRecorder = void 0;
            else this.spans.push(A)
        }
    }
    class KI0 {
        constructor(A = {}) {
            if (this._traceId = A.traceId || m0A.uuid4(), this._spanId = A.spanId || m0A.uuid4().substring(16), this._startTime = A.startTimestamp || m0A.timestampInSeconds(), this.tags = A.tags ? {
                    ...A.tags
                } : {}, this.data = A.data ? {
                    ...A.data
                } : {}, this.instrumenter = A.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
                    [Zg.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: A.origin || "manual",
                    [Zg.SEMANTIC_ATTRIBUTE_SENTRY_OP]: A.op,
                    ...A.attributes
                }), this._name = A.name || A.description, A.parentSpanId) this._parentSpanId = A.parentSpanId;
            if ("sampled" in A) this._sampled = A.sampled;
            if (A.status) this._status = A.status;
            if (A.endTimestamp) this._endTime = A.endTimestamp;
            if (A.exclusiveTime !== void 0) this._exclusiveTime = A.exclusiveTime;
            this._measurements = A.measurements ? {
                ...A.measurements
            } : {}
        }
        get name() {
            return this._name || ""
        }
        set name(A) {
            this.updateName(A)
        }
        get description() {
            return this._name
        }
        set description(A) {
            this._name = A
        }
        get traceId() {
            return this._traceId
        }
        set traceId(A) {
            this._traceId = A
        }
        get spanId() {
            return this._spanId
        }
        set spanId(A) {
            this._spanId = A
        }
        set parentSpanId(A) {
            this._parentSpanId = A
        }
        get parentSpanId() {
            return this._parentSpanId
        }
        get sampled() {
            return this._sampled
        }
        set sampled(A) {
            this._sampled = A
        }
        get attributes() {
            return this._attributes
        }
        set attributes(A) {
            this._attributes = A
        }
        get startTimestamp() {
            return this._startTime
        }
        set startTimestamp(A) {
            this._startTime = A
        }
        get endTimestamp() {
            return this._endTime
        }
        set endTimestamp(A) {
            this._endTime = A
        }
        get status() {
            return this._status
        }
        set status(A) {
            this._status = A
        }
        get op() {
            return this._attributes[Zg.SEMANTIC_ATTRIBUTE_SENTRY_OP]
        }
        set op(A) {
            this.setAttribute(Zg.SEMANTIC_ATTRIBUTE_SENTRY_OP, A)
        }
        get origin() {
            return this._attributes[Zg.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]
        }
        set origin(A) {
            this.setAttribute(Zg.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, A)
        }
        spanContext() {
            let {
                _spanId: A,
                _traceId: Q,
                _sampled: B
            } = this;
            return {
                spanId: A,
                traceId: Q,
                traceFlags: B ? QXA.TRACE_FLAG_SAMPLED : QXA.TRACE_FLAG_NONE
            }
        }
        startChild(A) {
            let Q = new KI0({
                ...A,
                parentSpanId: this._spanId,
                sampled: this._sampled,
                traceId: this._traceId
            });
            if (Q.spanRecorder = this.spanRecorder, Q.spanRecorder) Q.spanRecorder.add(Q);
            let B = Vi2.getRootSpan(this);
            if (Q.transaction = B, Fi2.DEBUG_BUILD && B) {
                let G = A && A.op || "< unknown op >",
                    Z = QXA.spanToJSON(Q).description || "< unknown name >",
                    I = B.spanContext().spanId,
                    Y = `[Tracing] Starting '${G}' span on transaction '${Z}' (${I}).`;
                m0A.logger.log(Y), this._logMessage = Y
            }
            return Q
        }
        setTag(A, Q) {
            return this.tags = {
                ...this.tags,
                [A]: Q
            }, this
        }
        setData(A, Q) {
            return this.data = {
                ...this.data,
                [A]: Q
            }, this
        }
        setAttribute(A, Q) {
            if (Q === void 0) delete this._attributes[A];
            else this._attributes[A] = Q
        }
        setAttributes(A) {
            Object.keys(A).forEach((Q) => this.setAttribute(Q, A[Q]))
        }
        setStatus(A) {
            return this._status = A, this
        }
        setHttpStatus(A) {
            return A33.setHttpStatus(this, A), this
        }
        setName(A) {
            this.updateName(A)
        }
        updateName(A) {
            return this._name = A, this
        }
        isSuccess() {
            return this._status === "ok"
        }
        finish(A) {
            return this.end(A)
        }
        end(A) {
            if (this._endTime) return;
            let Q = Vi2.getRootSpan(this);
            if (Fi2.DEBUG_BUILD && Q && Q.spanContext().spanId !== this._spanId) {
                let B = this._logMessage;
                if (B) m0A.logger.log(B.replace("Starting", "Finishing"))
            }
            this._endTime = QXA.spanTimeInputToSeconds(A)
        }
        toTraceparent() {
            return QXA.spanToTraceHeader(this)
        }
        toContext() {
            return m0A.dropUndefinedKeys({
                data: this._getData(),
                description: this._name,
                endTimestamp: this._endTime,
                op: this.op,
                parentSpanId: this._parentSpanId,
                sampled: this._sampled,
                spanId: this._spanId,
                startTimestamp: this._startTime,
                status: this._status,
                tags: this.tags,
                traceId: this._traceId
            })
        }
        updateWithContext(A) {
            return this.data = A.data || {}, this._name = A.name || A.description, this._endTime = A.endTimestamp, this.op = A.op, this._parentSpanId = A.parentSpanId, this._sampled = A.sampled, this._spanId = A.spanId || this._spanId, this._startTime = A.startTimestamp || this._startTime, this._status = A.status, this.tags = A.tags || {}, this._traceId = A.traceId || this._traceId, this
        }
        getTraceContext() {
            return QXA.spanToTraceContext(this)
        }
        getSpanJSON() {
            return m0A.dropUndefinedKeys({
                data: this._getData(),
                description: this._name,
                op: this._attributes[Zg.SEMANTIC_ATTRIBUTE_SENTRY_OP],
                parent_span_id: this._parentSpanId,
                span_id: this._spanId,
                start_timestamp: this._startTime,
                status: this._status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                timestamp: this._endTime,
                trace_id: this._traceId,
                origin: this._attributes[Zg.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
                _metrics_summary: e53.getMetricSummaryJsonForSpan(this),
                profile_id: this._attributes[Zg.SEMANTIC_ATTRIBUTE_PROFILE_ID],
                exclusive_time: this._exclusiveTime,
                measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0
            })
        }
        isRecording() {
            return !this._endTime && !!this._sampled
        }
        toJSON() {
            return this.getSpanJSON()
        }
        _getData() {
            let {
                data: A,
                _attributes: Q
            } = this, B = Object.keys(A).length > 0, G = Object.keys(Q).length > 0;
            if (!B && !G) return;
            if (B && G) return {
                ...A,
                ...Q
            };
            return B ? A : Q
        }
    }
    Di2.Span = KI0;
    Di2.SpanRecorder = Ki2
});
var t71 = U((zi2) => {
    Object.defineProperty(zi2, "__esModule", {
        value: !0
    });
    var BXA = l0(),
        r71 = AF(),
        G33 = fy(),
        Z33 = BPA(),
        ZPA = GPA(),
        o71 = C$(),
        Hi2 = g0A(),
        Ci2 = s71(),
        I33 = a71();
    class Ei2 extends Ci2.Span {
        constructor(A, Q) {
            super(A);
            this._contexts = {}, this._hub = Q || G33.getCurrentHub(), this._name = A.name || "", this._metadata = {
                ...A.metadata
            }, this._trimEnd = A.trimEnd, this.transaction = this;
            let B = this._metadata.dynamicSamplingContext;
            if (B) this._frozenDynamicSamplingContext = {
                ...B
            }
        }
        get name() {
            return this._name
        }
        set name(A) {
            this.setName(A)
        }
        get metadata() {
            return {
                source: "custom",
                spanMetadata: {},
                ...this._metadata,
                ...this._attributes[ZPA.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && {
                    source: this._attributes[ZPA.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]
                },
                ...this._attributes[ZPA.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] && {
                    sampleRate: this._attributes[ZPA.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]
                }
            }
        }
        set metadata(A) {
            this._metadata = A
        }
        setName(A, Q = "custom") {
            this._name = A, this.setAttribute(ZPA.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, Q)
        }
        updateName(A) {
            return this._name = A, this
        }
        initSpanRecorder(A = 1000) {
            if (!this.spanRecorder) this.spanRecorder = new Ci2.SpanRecorder(A);
            this.spanRecorder.add(this)
        }
        setContext(A, Q) {
            if (Q === null) delete this._contexts[A];
            else this._contexts[A] = Q
        }
        setMeasurement(A, Q, B = "") {
            this._measurements[A] = {
                value: Q,
                unit: B
            }
        }
        setMetadata(A) {
            this._metadata = {
                ...this._metadata,
                ...A
            }
        }
        end(A) {
            let Q = o71.spanTimeInputToSeconds(A),
                B = this._finishTransaction(Q);
            if (!B) return;
            return this._hub.captureEvent(B)
        }
        toContext() {
            let A = super.toContext();
            return BXA.dropUndefinedKeys({
                ...A,
                name: this._name,
                trimEnd: this._trimEnd
            })
        }
        updateWithContext(A) {
            return super.updateWithContext(A), this._name = A.name || "", this._trimEnd = A.trimEnd, this
        }
        getDynamicSamplingContext() {
            return Hi2.getDynamicSamplingContextFromSpan(this)
        }
        setHub(A) {
            this._hub = A
        }
        getProfileId() {
            if (this._contexts !== void 0 && this._contexts.profile !== void 0) return this._contexts.profile.profile_id;
            return
        }
        _finishTransaction(A) {
            if (this._endTime !== void 0) return;
            if (!this._name) r71.DEBUG_BUILD && BXA.logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>";
            super.end(A);
            let Q = this._hub.getClient();
            if (Q && Q.emit) Q.emit("finishTransaction", this);
            if (this._sampled !== !0) {
                if (r71.DEBUG_BUILD && BXA.logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), Q) Q.recordDroppedEvent("sample_rate", "transaction");
                return
            }
            let B = this.spanRecorder ? this.spanRecorder.spans.filter((X) => X !== this && o71.spanToJSON(X).timestamp) : [];
            if (this._trimEnd && B.length > 0) {
                let X = B.map((F) => o71.spanToJSON(F).timestamp).filter(Boolean);
                this._endTime = X.reduce((F, V) => {
                    return F > V ? F : V
                })
            }
            let {
                scope: G,
                isolationScope: Z
            } = I33.getCapturedScopesOnSpan(this), {
                metadata: I
            } = this, {
                source: Y
            } = I, J = {
                contexts: {
                    ...this._contexts,
                    trace: o71.spanToTraceContext(this)
                },
                spans: B,
                start_timestamp: this._startTime,
                tags: this.tags,
                timestamp: this._endTime,
                transaction: this._name,
                type: "transaction",
                sdkProcessingMetadata: {
                    ...I,
                    capturedSpanScope: G,
                    capturedSpanIsolationScope: Z,
                    ...BXA.dropUndefinedKeys({
                        dynamicSamplingContext: Hi2.getDynamicSamplingContextFromSpan(this)
                    })
                },
                _metrics_summary: Z33.getMetricSummaryJsonForSpan(this),
                ...Y && {
                    transaction_info: {
                        source: Y
                    }
                }
            };
            if (Object.keys(this._measurements).length > 0) r71.DEBUG_BUILD && BXA.logger.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), J.measurements = this._measurements;
            return r71.DEBUG_BUILD && BXA.logger.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), J
        }
    }
    zi2.Transaction = Ei2
});
var HI0 = U(($i2) => {
    Object.defineProperty($i2, "__esModule", {
        value: !0
    });
    var EC = l0(),
        E$ = AF(),
        e71 = C$(),
        J33 = s71(),
        W33 = t71(),
        AG1 = {
            idleTimeout: 1000,
            finalTimeout: 30000,
            heartbeatInterval: 5000
        },
        X33 = "finishReason",
        GXA = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
    class DI0 extends J33.SpanRecorder {
        constructor(A, Q, B, G) {
            super(G);
            this._pushActivity = A, this._popActivity = Q, this.transactionSpanId = B
        }
        add(A) {
            if (A.spanContext().spanId !== this.transactionSpanId) {
                let Q = A.end;
                if (A.end = (...B) => {
                        return this._popActivity(A.spanContext().spanId), Q.apply(A, B)
                    }, e71.spanToJSON(A).timestamp === void 0) this._pushActivity(A.spanContext().spanId)
            }
            super.add(A)
        }
    }
    class Ui2 extends W33.Transaction {
        constructor(A, Q, B = AG1.idleTimeout, G = AG1.finalTimeout, Z = AG1.heartbeatInterval, I = !1, Y = !1) {
            super(A, Q);
            if (this._idleHub = Q, this._idleTimeout = B, this._finalTimeout = G, this._heartbeatInterval = Z, this._onScope = I, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = GXA[4], this._autoFinishAllowed = !Y, I) E$.DEBUG_BUILD && EC.logger.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`), Q.getScope().setSpan(this);
            if (!Y) this._restartIdleTimeout();
            setTimeout(() => {
                if (!this._finished) this.setStatus("deadline_exceeded"), this._finishReason = GXA[3], this.end()
            }, this._finalTimeout)
        }
        end(A) {
            let Q = e71.spanTimeInputToSeconds(A);
            if (this._finished = !0, this.activities = {}, this.op === "ui.action.click") this.setAttribute(X33, this._finishReason);
            if (this.spanRecorder) {
                E$.DEBUG_BUILD && EC.logger.log("[Tracing] finishing IdleTransaction", new Date(Q * 1000).toISOString(), this.op);
                for (let B of this._beforeFinishCallbacks) B(this, Q);
                this.spanRecorder.spans = this.spanRecorder.spans.filter((B) => {
                    if (B.spanContext().spanId === this.spanContext().spanId) return !0;
                    if (!e71.spanToJSON(B).timestamp) B.setStatus("cancelled"), B.end(Q), E$.DEBUG_BUILD && EC.logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(B, void 0, 2));
                    let {
                        start_timestamp: G,
                        timestamp: Z
                    } = e71.spanToJSON(B), I = G && G < Q, Y = (this._finalTimeout + this._idleTimeout) / 1000, J = Z && G && Z - G < Y;
                    if (E$.DEBUG_BUILD) {
                        let W = JSON.stringify(B, void 0, 2);
                        if (!I) EC.logger.log("[Tracing] discarding Span since it happened after Transaction was finished", W);
                        else if (!J) EC.logger.log("[Tracing] discarding Span since it finished after Transaction final timeout", W)
                    }
                    return I && J
                }), E$.DEBUG_BUILD && EC.logger.log("[Tracing] flushing IdleTransaction")
            } else E$.DEBUG_BUILD && EC.logger.log("[Tracing] No active IdleTransaction");
            if (this._onScope) {
                let B = this._idleHub.getScope();
                if (B.getTransaction() === this) B.setSpan(void 0)
            }
            return super.end(A)
        }
        registerBeforeFinishCallback(A) {
            this._beforeFinishCallbacks.push(A)
        }
        initSpanRecorder(A) {
            if (!this.spanRecorder) {
                let Q = (G) => {
                        if (this._finished) return;
                        this._pushActivity(G)
                    },
                    B = (G) => {
                        if (this._finished) return;
                        this._popActivity(G)
                    };
                this.spanRecorder = new DI0(Q, B, this.spanContext().spanId, A), E$.DEBUG_BUILD && EC.logger.log("Starting heartbeat"), this._pingHeartbeat()
            }
            this.spanRecorder.add(this)
        }
        cancelIdleTimeout(A, {
            restartOnChildSpanChange: Q
        } = {
            restartOnChildSpanChange: !0
        }) {
            if (this._idleTimeoutCanceledPermanently = Q === !1, this._idleTimeoutID) {
                if (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, Object.keys(this.activities).length === 0 && this._idleTimeoutCanceledPermanently) this._finishReason = GXA[5], this.end(A)
            }
        }
        setFinishReason(A) {
            this._finishReason = A
        }
        sendAutoFinishSignal() {
            if (!this._autoFinishAllowed) E$.DEBUG_BUILD && EC.logger.log("[Tracing] Received finish signal for idle transaction."), this._restartIdleTimeout(), this._autoFinishAllowed = !0
        }
        _restartIdleTimeout(A) {
            this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(() => {
                if (!this._finished && Object.keys(this.activities).length === 0) this._finishReason = GXA[1], this.end(A)
            }, this._idleTimeout)
        }
        _pushActivity(A) {
            this.cancelIdleTimeout(void 0, {
                restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
            }), E$.DEBUG_BUILD && EC.logger.log(`[Tracing] pushActivity: ${A}`), this.activities[A] = !0, E$.DEBUG_BUILD && EC.logger.log("[Tracing] new activities count", Object.keys(this.activities).length)
        }
        _popActivity(A) {
            if (this.activities[A]) E$.DEBUG_BUILD && EC.logger.log(`[Tracing] popActivity ${A}`), delete this.activities[A], E$.DEBUG_BUILD && EC.logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
            if (Object.keys(this.activities).length === 0) {
                let Q = EC.timestampInSeconds();
                if (this._idleTimeoutCanceledPermanently) {
                    if (this._autoFinishAllowed) this._finishReason = GXA[5], this.end(Q)
                } else this._restartIdleTimeout(Q + this._idleTimeout / 1000)
            }
        }
        _beat() {
            if (this._finished) return;
            let A = Object.keys(this.activities).join("");
            if (A === this._prevHeartbeatString) this._heartbeatCounter++;
            else this._heartbeatCounter = 1;
            if (this._prevHeartbeatString = A, this._heartbeatCounter >= 3) {
                if (this._autoFinishAllowed) E$.DEBUG_BUILD && EC.logger.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = GXA[0], this.end()
            } else this._pingHeartbeat()
        }
        _pingHeartbeat() {
            E$.DEBUG_BUILD && EC.logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout(() => {
                this._beat()
            }, this._heartbeatInterval)
        }
    }
    $i2.IdleTransaction = Ui2;
    $i2.IdleTransactionSpanRecorder = DI0;
    $i2.TRACING_DEFAULTS = AG1
});
var CI0 = U((qi2) => {
    Object.defineProperty(qi2, "__esModule", {
        value: !0
    });
    var d0A = l0(),
        ZXA = AF(),
        QG1 = GPA(),
        D33 = p71(),
        H33 = C$();

    function C33(A, Q, B) {
        if (!D33.hasTracingEnabled(Q)) return A.sampled = !1, A;
        if (A.sampled !== void 0) return A.setAttribute(QG1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(A.sampled)), A;
        let G;
        if (typeof Q.tracesSampler === "function") G = Q.tracesSampler(B), A.setAttribute(QG1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(G));
        else if (B.parentSampled !== void 0) G = B.parentSampled;
        else if (typeof Q.tracesSampleRate < "u") G = Q.tracesSampleRate, A.setAttribute(QG1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(G));
        else G = 1, A.setAttribute(QG1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, G);
        if (!wi2(G)) return ZXA.DEBUG_BUILD && d0A.logger.warn("[Tracing] Discarding transaction because of invalid sample rate."), A.sampled = !1, A;
        if (!G) return ZXA.DEBUG_BUILD && d0A.logger.log(`[Tracing] Discarding transaction because ${typeof Q.tracesSampler==="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), A.sampled = !1, A;
        if (A.sampled = Math.random() < G, !A.sampled) return ZXA.DEBUG_BUILD && d0A.logger.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(G)})`), A;
        return ZXA.DEBUG_BUILD && d0A.logger.log(`[Tracing] starting ${A.op} transaction - ${H33.spanToJSON(A).description}`), A
    }

    function wi2(A) {
        if (d0A.isNaN(A) || !(typeof A === "number" || typeof A === "boolean")) return ZXA.DEBUG_BUILD && d0A.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(A)} of type ${JSON.stringify(typeof A)}.`), !1;
        if (A < 0 || A > 1) return ZXA.DEBUG_BUILD && d0A.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${A}.`), !1;
        return !0
    }
    qi2.isValidSampleRate = wi2;
    qi2.sampleTransaction = C33
});
var EI0 = U((Li2) => {
    Object.defineProperty(Li2, "__esModule", {
        value: !0
    });
    var U33 = l0(),
        $33 = AF(),
        w33 = fy(),
        q33 = C$(),
        N33 = c71(),
        L33 = HI0(),
        Ni2 = CI0(),
        M33 = t71();

    function O33() {
        let Q = this.getScope().getSpan();
        return Q ? {
            "sentry-trace": q33.spanToTraceHeader(Q)
        } : {}
    }

    function R33(A, Q) {
        let B = this.getClient(),
            G = B && B.getOptions() || {},
            Z = G.instrumenter || "sentry",
            I = A.instrumenter || "sentry";
        if (Z !== I) $33.DEBUG_BUILD && U33.logger.error(`A transaction was started with instrumenter=\`${I}\`, but the SDK is configured with the \`${Z}\` instrumenter.
The transaction will not be sampled. Please use the ${Z} instrumentation to start transactions.`), A.sampled = !1;
        let Y = new M33.Transaction(A, this);
        if (Y = Ni2.sampleTransaction(Y, G, {
                name: A.name,
                parentSampled: A.parentSampled,
                transactionContext: A,
                attributes: {
                    ...A.data,
                    ...A.attributes
                },
                ...Q
            }), Y.isRecording()) Y.initSpanRecorder(G._experiments && G._experiments.maxSpans);
        if (B && B.emit) B.emit("startTransaction", Y);
        return Y
    }

    function T33(A, Q, B, G, Z, I, Y, J = !1) {
        let W = A.getClient(),
            X = W && W.getOptions() || {},
            F = new L33.IdleTransaction(Q, A, B, G, Y, Z, J);
        if (F = Ni2.sampleTransaction(F, X, {
                name: Q.name,
                parentSampled: Q.parentSampled,
                transactionContext: Q,
                attributes: {
                    ...Q.data,
                    ...Q.attributes
                },
                ...I
            }), F.isRecording()) F.initSpanRecorder(X._experiments && X._experiments.maxSpans);
        if (W && W.emit) W.emit("startTransaction", F);
        return F
    }

    function P33() {
        let A = w33.getMainCarrier();
        if (!A.__SENTRY__) return;
        if (A.__SENTRY__.extensions = A.__SENTRY__.extensions || {}, !A.__SENTRY__.extensions.startTransaction) A.__SENTRY__.extensions.startTransaction = R33;
        if (!A.__SENTRY__.extensions.traceHeaders) A.__SENTRY__.extensions.traceHeaders = O33;
        N33.registerErrorInstrumentation()
    }
    Li2.addTracingExtensions = P33;
    Li2.startIdleTransaction = T33
});
var Oi2 = U((Mi2) => {
    Object.defineProperty(Mi2, "__esModule", {
        value: !0
    });
    var _33 = d71();

    function k33(A, Q, B) {
        let G = _33.getActiveTransaction();
        if (G) G.setMeasurement(A, Q, B)
    }
    Mi2.setMeasurement = k33
});
var zI0 = U((Ri2) => {
    Object.defineProperty(Ri2, "__esModule", {
        value: !0
    });
    var IXA = l0();

    function x33(A, Q) {
        if (!Q) return A;
        return A.sdk = A.sdk || {}, A.sdk.name = A.sdk.name || Q.name, A.sdk.version = A.sdk.version || Q.version, A.sdk.integrations = [...A.sdk.integrations || [], ...Q.integrations || []], A.sdk.packages = [...A.sdk.packages || [], ...Q.packages || []], A
    }

    function v33(A, Q, B, G) {
        let Z = IXA.getSdkMetadataForEnvelopeHeader(B),
            I = {
                sent_at: new Date().toISOString(),
                ...Z && {
                    sdk: Z
                },
                ...!!G && Q && {
                    dsn: IXA.dsnToString(Q)
                }
            },
            Y = "aggregates" in A ? [{
                type: "sessions"
            }, A] : [{
                type: "session"
            }, A.toJSON()];
        return IXA.createEnvelope(I, [Y])
    }

    function b33(A, Q, B, G) {
        let Z = IXA.getSdkMetadataForEnvelopeHeader(B),
            I = A.type && A.type !== "replay_event" ? A.type : "event";
        x33(A, B && B.sdk);
        let Y = IXA.createEventEnvelopeHeaders(A, Z, G, Q);
        delete A.sdkProcessingMetadata;
        let J = [{
            type: I
        }, A];
        return IXA.createEnvelope(Y, [J])
    }
    Ri2.createEventEnvelope = b33;
    Ri2.createSessionEnvelope = v33
});
var UI0 = U((Pi2) => {
    Object.defineProperty(Pi2, "__esModule", {
        value: !0
    });
    var g33 = l0(),
        u33 = MO();
    class Ti2 {
        constructor(A, Q) {
            if (this._client = A, this.flushTimeout = 60, this._pendingAggregates = {}, this._isEnabled = !0, this._intervalId = setInterval(() => this.flush(), this.flushTimeout * 1000), this._intervalId.unref) this._intervalId.unref();
            this._sessionAttrs = Q
        }
        flush() {
            let A = this.getSessionAggregates();
            if (A.aggregates.length === 0) return;
            this._pendingAggregates = {}, this._client.sendSession(A)
        }
        getSessionAggregates() {
            let A = Object.keys(this._pendingAggregates).map((B) => {
                    return this._pendingAggregates[parseInt(B)]
                }),
                Q = {
                    attrs: this._sessionAttrs,
                    aggregates: A
                };
            return g33.dropUndefinedKeys(Q)
        }
        close() {
            clearInterval(this._intervalId), this._isEnabled = !1, this.flush()
        }
        incrementSessionStatusCount() {
            if (!this._isEnabled) return;
            let A = u33.getCurrentScope(),
                Q = A.getRequestSession();
            if (Q && Q.status) this._incrementSessionStatusCount(Q.status, new Date), A.setRequestSession(void 0)
        }
        _incrementSessionStatusCount(A, Q) {
            let B = new Date(Q).setSeconds(0, 0);
            this._pendingAggregates[B] = this._pendingAggregates[B] || {};
            let G = this._pendingAggregates[B];
            if (!G.started) G.started = new Date(B).toISOString();
            switch (A) {
                case "errored":
                    return G.errored = (G.errored || 0) + 1, G.errored;
                case "ok":
                    return G.exited = (G.exited || 0) + 1, G.exited;
                default:
                    return G.crashed = (G.crashed || 0) + 1, G.crashed
            }
        }
    }
    Pi2.SessionFlusher = Ti2
});
var BG1 = U((Si2) => {
    Object.defineProperty(Si2, "__esModule", {
        value: !0
    });
    var $I0 = l0(),
        d33 = "7";

    function ji2(A) {
        let Q = A.protocol ? `${A.protocol}:` : "",
            B = A.port ? `:${A.port}` : "";
        return `${Q}//${A.host}${B}${A.path?`/${A.path}`:""}/api/`
    }

    function c33(A) {
        return `${ji2(A)}${A.projectId}/envelope/`
    }

    function p33(A, Q) {
        return $I0.urlEncode({
            sentry_key: A.publicKey,
            sentry_version: d33,
            ...Q && {
                sentry_client: `${Q.name}/${Q.version}`
            }
        })
    }

    function l33(A, Q = {}) {
        let B = typeof Q === "string" ? Q : Q.tunnel,
            G = typeof Q === "string" || !Q._metadata ? void 0 : Q._metadata.sdk;
        return B ? B : `${c33(A)}?${p33(A,G)}`
    }

    function i33(A, Q) {
        let B = $I0.makeDsn(A);
        if (!B) return "";
        let G = `${ji2(B)}embed/error-page/`,
            Z = `dsn=${$I0.dsnToString(B)}`;
        for (let I in Q) {
            if (I === "dsn") continue;
            if (I === "onClose") continue;
            if (I === "user") {
                let Y = Q.user;
                if (!Y) continue;
                if (Y.name) Z += `&name=${encodeURIComponent(Y.name)}`;
                if (Y.email) Z += `&email=${encodeURIComponent(Y.email)}`
            } else Z += `&${encodeURIComponent(I)}=${encodeURIComponent(Q[I])}`
        }
        return `${G}?${Z}`
    }
    Si2.getEnvelopeEndpointWithUrlEncodedAuth = l33;
    Si2.getReportDialogEndpoint = i33
});
var Ig = U((ki2) => {
    Object.defineProperty(ki2, "__esModule", {
        value: !0
    });
    var GG1 = l0(),
        wI0 = AF(),
        s33 = aTA(),
        r33 = MO(),
        o33 = fy(),
        qI0 = [];

    function t33(A) {
        let Q = {};
        return A.forEach((B) => {
            let {
                name: G
            } = B, Z = Q[G];
            if (Z && !Z.isDefaultInstance && B.isDefaultInstance) return;
            Q[G] = B
        }), Object.keys(Q).map((B) => Q[B])
    }

    function e33(A) {
        let Q = A.defaultIntegrations || [],
            B = A.integrations;
        Q.forEach((Y) => {
            Y.isDefaultInstance = !0
        });
        let G;
        if (Array.isArray(B)) G = [...Q, ...B];
        else if (typeof B === "function") G = GG1.arrayify(B(Q));
        else G = Q;
        let Z = t33(G),
            I = G73(Z, (Y) => Y.name === "Debug");
        if (I !== -1) {
            let [Y] = Z.splice(I, 1);
            Z.push(Y)
        }
        return Z
    }

    function A73(A, Q) {
        let B = {};
        return Q.forEach((G) => {
            if (G) _i2(A, G, B)
        }), B
    }

    function Q73(A, Q) {
        for (let B of Q)
            if (B && B.afterAllSetup) B.afterAllSetup(A)
    }

    function _i2(A, Q, B) {
        if (B[Q.name]) {
            wI0.DEBUG_BUILD && GG1.logger.log(`Integration skipped because it was already installed: ${Q.name}`);
            return
        }
        if (B[Q.name] = Q, qI0.indexOf(Q.name) === -1) Q.setupOnce(s33.addGlobalEventProcessor, o33.getCurrentHub), qI0.push(Q.name);
        if (Q.setup && typeof Q.setup === "function") Q.setup(A);
        if (A.on && typeof Q.preprocessEvent === "function") {
            let G = Q.preprocessEvent.bind(Q);
            A.on("preprocessEvent", (Z, I) => G(Z, I, A))
        }
        if (A.addEventProcessor && typeof Q.processEvent === "function") {
            let G = Q.processEvent.bind(Q),
                Z = Object.assign((I, Y) => G(I, Y, A), {
                    id: Q.name
                });
            A.addEventProcessor(Z)
        }
        wI0.DEBUG_BUILD && GG1.logger.log(`Integration installed: ${Q.name}`)
    }

    function B73(A) {
        let Q = r33.getClient();
        if (!Q || !Q.addIntegration) {
            wI0.DEBUG_BUILD && GG1.logger.warn(`Cannot add integration "${A.name}" because no SDK Client is available.`);
            return
        }
        Q.addIntegration(A)
    }

    function G73(A, Q) {
        for (let B = 0; B < A.length; B++)
            if (Q(A[B]) === !0) return B;
        return -1
    }

    function Z73(A, Q) {
        return Object.assign(function(...G) {
            return Q(...G)
        }, {
            id: A
        })
    }

    function I73(A) {
        return A
    }
    ki2.addIntegration = B73;
    ki2.afterSetupIntegrations = Q73;
    ki2.convertIntegrationFnToClass = Z73;
    ki2.defineIntegration = I73;
    ki2.getIntegrationsToSetup = e33;
    ki2.installedIntegrations = qI0;
    ki2.setupIntegration = _i2;
    ki2.setupIntegrations = A73
});
var IPA = U((yi2) => {
    Object.defineProperty(yi2, "__esModule", {
        value: !0
    });
    var H73 = l0();

    function C73(A, Q, B, G) {
        let Z = Object.entries(H73.dropUndefinedKeys(G)).sort((I, Y) => I[0].localeCompare(Y[0]));
        return `${A}${Q}${B}${Z}`
    }

    function E73(A) {
        let Q = 0;
        for (let B = 0; B < A.length; B++) {
            let G = A.charCodeAt(B);
            Q = (Q << 5) - Q + G, Q &= Q
        }
        return Q >>> 0
    }

    function z73(A) {
        let Q = "";
        for (let B of A) {
            let G = Object.entries(B.tags),
                Z = G.length > 0 ? `|#${G.map(([I,Y])=>`${I}:${Y}`).join(",")}` : "";
            Q += `${B.name}@${B.unit}:${B.metric}|${B.metricType}${Z}|T${B.timestamp}
`
        }
        return Q
    }

    function U73(A) {
        return A.replace(/[^\w]+/gi, "_")
    }

    function $73(A) {
        return A.replace(/[^\w\-.]+/gi, "_")
    }

    function w73(A) {
        return A.replace(/[^\w\-./]+/gi, "")
    }
    var q73 = [
        [`
`, "\\n"],
        ["\r", "\\r"],
        ["\t", "\\t"],
        ["\\", "\\\\"],
        ["|", "\\u{7c}"],
        [",", "\\u{2c}"]
    ];

    function N73(A) {
        for (let [Q, B] of q73)
            if (A === Q) return B;
        return A
    }

    function L73(A) {
        return [...A].reduce((Q, B) => Q + N73(B), "")
    }

    function M73(A) {
        let Q = {};
        for (let B in A)
            if (Object.prototype.hasOwnProperty.call(A, B)) {
                let G = w73(B);
                Q[G] = L73(String(A[B]))
            } return Q
    }
    yi2.getBucketKey = C73;
    yi2.sanitizeMetricKey = $73;
    yi2.sanitizeTags = M73;
    yi2.sanitizeUnit = U73;
    yi2.serializeMetricBuckets = z73;
    yi2.simpleHash = E73
});
var bi2 = U((vi2) => {
    Object.defineProperty(vi2, "__esModule", {
        value: !0
    });
    var xi2 = l0(),
        _73 = IPA();

    function k73(A, Q, B, G) {
        let Z = {
            sent_at: new Date().toISOString()
        };
        if (B && B.sdk) Z.sdk = {
            name: B.sdk.name,
            version: B.sdk.version
        };
        if (!!G && Q) Z.dsn = xi2.dsnToString(Q);
        let I = y73(A);
        return xi2.createEnvelope(Z, [I])
    }

    function y73(A) {
        let Q = _73.serializeMetricBuckets(A);
        return [{
            type: "statsd",
            length: Q.length
        }, Q]
    }
    vi2.createMetricEnvelope = k73
});
var NI0 = U((ci2) => {
    Object.defineProperty(ci2, "__esModule", {
        value: !0
    });
    var I7 = l0(),
        v73 = BG1(),
        gy = AF(),
        fi2 = zI0(),
        b73 = MO(),
        f73 = fy(),
        ZG1 = Ig(),
        h73 = bi2(),
        hi2 = sWA(),
        g73 = g0A(),
        u73 = x71(),
        gi2 = "Not capturing exception because it's already been captured.";
    class ui2 {
        constructor(A) {
            if (this._options = A, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], A.dsn) this._dsn = I7.makeDsn(A.dsn);
            else gy.DEBUG_BUILD && I7.logger.warn("No DSN provided, client will not send events.");
            if (this._dsn) {
                let Q = v73.getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, A);
                this._transport = A.transport({
                    tunnel: this._options.tunnel,
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...A.transportOptions,
                    url: Q
                })
            }
        }
        captureException(A, Q, B) {
            if (I7.checkOrSetAlreadyCaught(A)) {
                gy.DEBUG_BUILD && I7.logger.log(gi2);
                return
            }
            let G = Q && Q.event_id;
            return this._process(this.eventFromException(A, Q).then((Z) => this._captureEvent(Z, Q, B)).then((Z) => {
                G = Z
            })), G
        }
        captureMessage(A, Q, B, G) {
            let Z = B && B.event_id,
                I = I7.isParameterizedString(A) ? A : String(A),
                Y = I7.isPrimitive(A) ? this.eventFromMessage(I, Q, B) : this.eventFromException(A, B);
            return this._process(Y.then((J) => this._captureEvent(J, B, G)).then((J) => {
                Z = J
            })), Z
        }
        captureEvent(A, Q, B) {
            if (Q && Q.originalException && I7.checkOrSetAlreadyCaught(Q.originalException)) {
                gy.DEBUG_BUILD && I7.logger.log(gi2);
                return
            }
            let G = Q && Q.event_id,
                I = (A.sdkProcessingMetadata || {}).capturedSpanScope;
            return this._process(this._captureEvent(A, Q, I || B).then((Y) => {
                G = Y
            })), G
        }
        captureSession(A) {
            if (typeof A.release !== "string") gy.DEBUG_BUILD && I7.logger.warn("Discarded session because of missing or non-string release");
            else this.sendSession(A), hi2.updateSession(A, {
                init: !1
            })
        }
        getDsn() {
            return this._dsn
        }
        getOptions() {
            return this._options
        }
        getSdkMetadata() {
            return this._options._metadata
        }
        getTransport() {
            return this._transport
        }
        flush(A) {
            let Q = this._transport;
            if (Q) {
                if (this.metricsAggregator) this.metricsAggregator.flush();
                return this._isClientDoneProcessing(A).then((B) => {
                    return Q.flush(A).then((G) => B && G)
                })
            } else return I7.resolvedSyncPromise(!0)
        }
        close(A) {
            return this.flush(A).then((Q) => {
                if (this.getOptions().enabled = !1, this.metricsAggregator) this.metricsAggregator.close();
                return Q
            })
        }
        getEventProcessors() {
            return this._eventProcessors
        }
        addEventProcessor(A) {
            this._eventProcessors.push(A)
        }
        setupIntegrations(A) {
            if (A && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) this._setupIntegrations()
        }
        init() {
            if (this._isEnabled()) this._setupIntegrations()
        }
        getIntegrationById(A) {
            return this.getIntegrationByName(A)
        }
        getIntegrationByName(A) {
            return this._integrations[A]
        }
        getIntegration(A) {
            try {
                return this._integrations[A.id] || null
            } catch (Q) {
                return gy.DEBUG_BUILD && I7.logger.warn(`Cannot retrieve integration ${A.id} from the current Client`), null
            }
        }
        addIntegration(A) {
            let Q = this._integrations[A.name];
            if (ZG1.setupIntegration(this, A, this._integrations), !Q) ZG1.afterSetupIntegrations(this, [A])
        }
        sendEvent(A, Q = {}) {
            this.emit("beforeSendEvent", A, Q);
            let B = fi2.createEventEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
            for (let Z of Q.attachments || []) B = I7.addItemToEnvelope(B, I7.createAttachmentEnvelopeItem(Z, this._options.transportOptions && this._options.transportOptions.textEncoder));
            let G = this._sendEnvelope(B);
            if (G) G.then((Z) => this.emit("afterSendEvent", A, Z), null)
        }
        sendSession(A) {
            let Q = fi2.createSessionEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
            this._sendEnvelope(Q)
        }
        recordDroppedEvent(A, Q, B) {
            if (this._options.sendClientReports) {
                let G = typeof B === "number" ? B : 1,
                    Z = `${A}:${Q}`;
                gy.DEBUG_BUILD && I7.logger.log(`Recording outcome: "${Z}"${G>1?` (${G} times)`:""}`), this._outcomes[Z] = (this._outcomes[Z] || 0) + G
            }
        }
        captureAggregateMetrics(A) {
            gy.DEBUG_BUILD && I7.logger.log(`Flushing aggregated metrics, number of metrics: ${A.length}`);
            let Q = h73.createMetricEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
            this._sendEnvelope(Q)
        }
        on(A, Q) {
            if (!this._hooks[A]) this._hooks[A] = [];
            this._hooks[A].push(Q)
        }
        emit(A, ...Q) {
            if (this._hooks[A]) this._hooks[A].forEach((B) => B(...Q))
        }
        _setupIntegrations() {
            let {
                integrations: A
            } = this._options;
            this._integrations = ZG1.setupIntegrations(this, A), ZG1.afterSetupIntegrations(this, A), this._integrationsInitialized = !0
        }
        _updateSessionFromEvent(A, Q) {
            let B = !1,
                G = !1,
                Z = Q.exception && Q.exception.values;
            if (Z) {
                G = !0;
                for (let J of Z) {
                    let W = J.mechanism;
                    if (W && W.handled === !1) {
                        B = !0;
                        break
                    }
                }
            }
            let I = A.status === "ok";
            if (I && A.errors === 0 || I && B) hi2.updateSession(A, {
                ...B && {
                    status: "crashed"
                },
                errors: A.errors || Number(G || B)
            }), this.captureSession(A)
        }
        _isClientDoneProcessing(A) {
            return new I7.SyncPromise((Q) => {
                let B = 0,
                    G = 1,
                    Z = setInterval(() => {
                        if (this._numProcessing == 0) clearInterval(Z), Q(!0);
                        else if (B += G, A && B >= A) clearInterval(Z), Q(!1)
                    }, G)
            })
        }
        _isEnabled() {
            return this.getOptions().enabled !== !1 && this._transport !== void 0
        }
        _prepareEvent(A, Q, B, G = f73.getIsolationScope()) {
            let Z = this.getOptions(),
                I = Object.keys(this._integrations);
            if (!Q.integrations && I.length > 0) Q.integrations = I;
            return this.emit("preprocessEvent", A, Q), u73.prepareEvent(Z, A, Q, B, this, G).then((Y) => {
                if (Y === null) return Y;
                let J = {
                    ...G.getPropagationContext(),
                    ...B ? B.getPropagationContext() : void 0
                };
                if (!(Y.contexts && Y.contexts.trace) && J) {
                    let {
                        traceId: X,
                        spanId: F,
                        parentSpanId: V,
                        dsc: K
                    } = J;
                    Y.contexts = {
                        trace: {
                            trace_id: X,
                            span_id: F,
                            parent_span_id: V
                        },
                        ...Y.contexts
                    };
                    let D = K ? K : g73.getDynamicSamplingContextFromClient(X, this, B);
                    Y.sdkProcessingMetadata = {
                        dynamicSamplingContext: D,
                        ...Y.sdkProcessingMetadata
                    }
                }
                return Y
            })
        }
        _captureEvent(A, Q = {}, B) {
            return this._processEvent(A, Q, B).then((G) => {
                return G.event_id
            }, (G) => {
                if (gy.DEBUG_BUILD) {
                    let Z = G;
                    if (Z.logLevel === "log") I7.logger.log(Z.message);
                    else I7.logger.warn(Z)
                }
                return
            })
        }
        _processEvent(A, Q, B) {
            let G = this.getOptions(),
                {
                    sampleRate: Z
                } = G,
                I = di2(A),
                Y = mi2(A),
                J = A.type || "error",
                W = `before send for type \`${J}\``;
            if (Y && typeof Z === "number" && Math.random() > Z) return this.recordDroppedEvent("sample_rate", "error", A), I7.rejectedSyncPromise(new I7.SentryError(`Discarding event because it's not included in the random sample (sampling rate = ${Z})`, "log"));
            let X = J === "replay_event" ? "replay" : J,
                V = (A.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
            return this._prepareEvent(A, Q, B, V).then((K) => {
                if (K === null) throw this.recordDroppedEvent("event_processor", X, A), new I7.SentryError("An event processor returned `null`, will not send event.", "log");
                if (Q.data && Q.data.__sentry__ === !0) return K;
                let H = d73(G, K, Q);
                return m73(H, W)
            }).then((K) => {
                if (K === null) {
                    if (this.recordDroppedEvent("before_send", X, A), I) {
                        let E = 1 + (A.spans || []).length;
                        this.recordDroppedEvent("before_send", "span", E)
                    }
                    throw new I7.SentryError(`${W} returned \`null\`, will not send event.`, "log")
                }
                let D = B && B.getSession();
                if (!I && D) this._updateSessionFromEvent(D, K);
                if (I) {
                    let C = K.sdkProcessingMetadata && K.sdkProcessingMetadata.spanCountBeforeProcessing || 0,
                        E = K.spans ? K.spans.length : 0,
                        z = C - E;
                    if (z > 0) this.recordDroppedEvent("before_send", "span", z)
                }
                let H = K.transaction_info;
                if (I && H && K.transaction !== A.transaction) K.transaction_info = {
                    ...H,
                    source: "custom"
                };
                return this.sendEvent(K, Q), K
            }).then(null, (K) => {
                if (K instanceof I7.SentryError) throw K;
                throw this.captureException(K, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: K
                }), new I7.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${K}`)
            })
        }
        _process(A) {
            this._numProcessing++, A.then((Q) => {
                return this._numProcessing--, Q
            }, (Q) => {
                return this._numProcessing--, Q
            })
        }
        _sendEnvelope(A) {
            if (this.emit("beforeEnvelope", A), this._isEnabled() && this._transport) return this._transport.send(A).then(null, (Q) => {
                gy.DEBUG_BUILD && I7.logger.error("Error while sending event:", Q)
            });
            else gy.DEBUG_BUILD && I7.logger.error("Transport disabled")
        }
        _clearOutcomes() {
            let A = this._outcomes;
            return this._outcomes = {}, Object.keys(A).map((Q) => {
                let [B, G] = Q.split(":");
                return {
                    reason: B,
                    category: G,
                    quantity: A[Q]
                }
            })
        }
    }

    function m73(A, Q) {
        let B = `${Q} must return \`null\` or a valid event.`;
        if (I7.isThenable(A)) return A.then((G) => {
            if (!I7.isPlainObject(G) && G !== null) throw new I7.SentryError(B);
            return G
        }, (G) => {
            throw new I7.SentryError(`${Q} rejected with ${G}`)
        });
        else if (!I7.isPlainObject(A) && A !== null) throw new I7.SentryError(B);
        return A
    }

    function d73(A, Q, B) {
        let {
            beforeSend: G,
            beforeSendTransaction: Z
        } = A;
        if (mi2(Q) && G) return G(Q, B);
        if (di2(Q) && Z) {
            if (Q.spans) {
                let I = Q.spans.length;
                Q.sdkProcessingMetadata = {
                    ...Q.sdkProcessingMetadata,
                    spanCountBeforeProcessing: I
                }
            }
            return Z(Q, B)
        }
        return Q
    }

    function mi2(A) {
        return A.type === void 0
    }

    function di2(A) {
        return A.type === "transaction"
    }

    function c73(A) {
        let Q = b73.getClient();
        if (!Q || !Q.addEventProcessor) return;
        Q.addEventProcessor(A)
    }
    ci2.BaseClient = ui2;
    ci2.addEventProcessor = c73
});
var MI0 = U((pi2) => {
    Object.defineProperty(pi2, "__esModule", {
        value: !0
    });
    var LI0 = l0();

    function i73(A, Q, B, G, Z) {
        let I = {
            sent_at: new Date().toISOString()
        };
        if (B && B.sdk) I.sdk = {
            name: B.sdk.name,
            version: B.sdk.version
        };
        if (!!G && !!Z) I.dsn = LI0.dsnToString(Z);
        if (Q) I.trace = LI0.dropUndefinedKeys(Q);
        let Y = n73(A);
        return LI0.createEnvelope(I, [Y])
    }

    function n73(A) {
        return [{
            type: "check_in"
        }, A]
    }
    pi2.createCheckInEnvelope = i73
});
var YPA = U((li2) => {
    Object.defineProperty(li2, "__esModule", {
        value: !0
    });
    var s73 = "c",
        r73 = "g",
        o73 = "s",
        t73 = "d",
        e73 = 5000,
        AG3 = 1e4,
        QG3 = 1e4;
    li2.COUNTER_METRIC_TYPE = s73;
    li2.DEFAULT_BROWSER_FLUSH_INTERVAL = e73;
    li2.DEFAULT_FLUSH_INTERVAL = AG3;
    li2.DISTRIBUTION_METRIC_TYPE = t73;
    li2.GAUGE_METRIC_TYPE = r73;
    li2.MAX_WEIGHT = QG3;
    li2.SET_METRIC_TYPE = o73
});
var jI0 = U((ii2) => {
    Object.defineProperty(ii2, "__esModule", {
        value: !0
    });
    var IG1 = YPA(),
        XG3 = IPA();