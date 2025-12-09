/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: telemetry_013.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (47次) = moduleWrapper(fn) - CommonJS module wrapper
 *   UA       (2次) = require(moduleName) - Node.js require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 13/14
 * Lines: 322929 - 324427 (1499 lines)
 * Original file: cli.js
 */

        constructor(A, Q = !1, B) {
            if (A) this._prefix = A + "_";
            this._appendTimestamp = Q, this._withResourceConstantLabels = B
        }
        serialize(A) {
            let Q = "";
            this._additionalAttributes = this._filterResourceConstantLabels(A.resource.attributes, this._withResourceConstantLabels);
            for (let B of A.scopeMetrics) Q += this._serializeScopeMetrics(B);
            if (Q === "") Q += T_5;
            return this._serializeResource(A.resource) + Q
        }
        _filterResourceConstantLabels(A, Q) {
            if (Q) {
                let B = {};
                for (let [G, Z] of Object.entries(A))
                    if (G.match(Q)) B[G] = Z;
                return B
            }
            return
        }
        _serializeScopeMetrics(A) {
            let Q = "";
            for (let B of A.metrics) Q += this._serializeMetricData(B) + `
`;
            return Q
        }
        _serializeMetricData(A) {
            let Q = a90(z81(A.descriptor.name));
            if (this._prefix) Q = `${this._prefix}${Q}`;
            let B = A.dataPointType;
            Q = n90(Q, A);
            let G = `# HELP ${Q} ${z81(A.descriptor.description||"description missing")}`,
                Z = A.descriptor.unit ? `
# UNIT ${Q} ${z81(A.descriptor.unit)}` : "",
                I = `# TYPE ${Q} ${R_5(A)}`,
                Y = "";
            switch (B) {
                case t1A.DataPointType.SUM:
                case t1A.DataPointType.GAUGE: {
                    Y = A.dataPoints.map((J) => this._serializeSingularDataPoint(Q, A, J)).join("");
                    break
                }
                case t1A.DataPointType.HISTOGRAM: {
                    Y = A.dataPoints.map((J) => this._serializeHistogramDataPoint(Q, A, J)).join("");
                    break
                }
                default:
                    N_5.diag.error(`Unrecognizable DataPointType: ${B} for metric "${Q}"`)
            }
            return `${G}${Z}
${I}
${Y}`.trim()
        }
        _serializeSingularDataPoint(A, Q, B) {
            let G = "";
            A = n90(A, Q);
            let {
                value: Z,
                attributes: I
            } = B, Y = (0, Iq2.hrTimeToMilliseconds)(B.endTime);
            return G += E81(A, I, Z, this._appendTimestamp ? Y : void 0, this._additionalAttributes), G
        }
        _serializeHistogramDataPoint(A, Q, B) {
            let G = "";
            A = n90(A, Q);
            let {
                attributes: Z,
                value: I
            } = B, Y = (0, Iq2.hrTimeToMilliseconds)(B.endTime);
            for (let F of ["count", "sum"]) {
                let V = I[F];
                if (V != null) G += E81(A + "_" + F, Z, V, this._appendTimestamp ? Y : void 0, this._additionalAttributes)
            }
            let J = 0,
                W = I.buckets.counts.entries(),
                X = !1;
            for (let [F, V] of W) {
                J += V;
                let K = I.buckets.boundaries[F];
                if (K === void 0 && X) break;
                if (K === 1 / 0) X = !0;
                G += E81(A + "_bucket", Z, J, this._appendTimestamp ? Y : void 0, Object.assign({}, this._additionalAttributes ?? {}, {
                    le: K === void 0 || K === 1 / 0 ? "+Inf" : String(K)
                }))
            }
            return G
        }
        _serializeResource(A) {
            return `# HELP target_info Target metadata
# TYPE target_info gauge
${E81("target_info",A.attributes,1).trim()}
`
        }
    }
    Wq2.PrometheusSerializer = Jq2
});
var Kq2 = U((Fq2) => {
    Object.defineProperty(Fq2, "__esModule", {
        value: !0
    });
    Fq2.PrometheusExporter = void 0;
    var cOA = W9(),
        P_5 = t6(),
        r90 = Mi(),
        j_5 = UA("http"),
        S_5 = s90(),
        __5 = UA("url");
    class ni extends r90.MetricReader {
        static DEFAULT_OPTIONS = {
            host: void 0,
            port: 9464,
            endpoint: "/metrics",
            prefix: "",
            appendTimestamp: !1,
            withResourceConstantLabels: void 0
        };
        _host;
        _port;
        _baseUrl;
        _endpoint;
        _server;
        _prefix;
        _appendTimestamp;
        _serializer;
        _startServerPromise;
        constructor(A = {}, Q = () => {}) {
            super({
                aggregationSelector: (G) => {
                    return {
                        type: r90.AggregationType.DEFAULT
                    }
                },
                aggregationTemporalitySelector: (G) => r90.AggregationTemporality.CUMULATIVE,
                metricProducers: A.metricProducers
            });
            this._host = A.host || process.env.OTEL_EXPORTER_PROMETHEUS_HOST || ni.DEFAULT_OPTIONS.host, this._port = A.port || Number(process.env.OTEL_EXPORTER_PROMETHEUS_PORT) || ni.DEFAULT_OPTIONS.port, this._prefix = A.prefix || ni.DEFAULT_OPTIONS.prefix, this._appendTimestamp = typeof A.appendTimestamp === "boolean" ? A.appendTimestamp : ni.DEFAULT_OPTIONS.appendTimestamp;
            let B = A.withResourceConstantLabels || ni.DEFAULT_OPTIONS.withResourceConstantLabels;
            if (this._server = (0, j_5.createServer)(this._requestHandler).unref(), this._serializer = new S_5.PrometheusSerializer(this._prefix, this._appendTimestamp, B), this._baseUrl = `http://${this._host}:${this._port}/`, this._endpoint = (A.endpoint || ni.DEFAULT_OPTIONS.endpoint).replace(/^([^/])/, "/$1"), A.preventServerStart !== !0) this.startServer().then(Q, (G) => {
                cOA.diag.error(G), Q(G)
            });
            else if (Q) queueMicrotask(Q)
        }
        async onForceFlush() {}
        onShutdown() {
            return this.stopServer()
        }
        stopServer() {
            if (!this._server) return cOA.diag.debug("Prometheus stopServer() was called but server was never started."), Promise.resolve();
            else return new Promise((A) => {
                this._server.close((Q) => {
                    if (!Q) cOA.diag.debug("Prometheus exporter was stopped");
                    else if (Q.code !== "ERR_SERVER_NOT_RUNNING")(0, P_5.globalErrorHandler)(Q);
                    A()
                })
            })
        }
        startServer() {
            return this._startServerPromise ??= new Promise((A, Q) => {
                this._server.once("error", Q), this._server.listen({
                    port: this._port,
                    host: this._host
                }, () => {
                    cOA.diag.debug(`Prometheus exporter server started: ${this._host}:${this._port}/${this._endpoint}`), A()
                })
            }), this._startServerPromise
        }
        getMetricsRequestHandler(A, Q) {
            this._exportMetrics(Q)
        }
        _requestHandler = (A, Q) => {
            if (A.url != null && new __5.URL(A.url, this._baseUrl).pathname === this._endpoint) this._exportMetrics(Q);
            else this._notFound(Q)
        };
        _exportMetrics = (A) => {
            A.statusCode = 200, A.setHeader("content-type", "text/plain"), this.collect().then((Q) => {
                let {
                    resourceMetrics: B,
                    errors: G
                } = Q;
                if (G.length) cOA.diag.error("PrometheusExporter: metrics collection errors", ...G);
                A.end(this._serializer.serialize(B))
            }, (Q) => {
                A.end(`# failed to export metrics: ${Q}`)
            })
        };
        _notFound = (A) => {
            A.statusCode = 404, A.end()
        }
    }
    Fq2.PrometheusExporter = ni
});
var Dq2 = U((U81) => {
    Object.defineProperty(U81, "__esModule", {
        value: !0
    });
    U81.PrometheusSerializer = U81.PrometheusExporter = void 0;
    var k_5 = Kq2();
    Object.defineProperty(U81, "PrometheusExporter", {
        enumerable: !0,
        get: function() {
            return k_5.PrometheusExporter
        }
    });
    var y_5 = s90();
    Object.defineProperty(U81, "PrometheusSerializer", {
        enumerable: !0,
        get: function() {
            return y_5.PrometheusSerializer
        }
    })
});
var Eq2 = U((Hq2) => {
    Object.defineProperty(Hq2, "__esModule", {
        value: !0
    });
    Hq2.VERSION = void 0;
    Hq2.VERSION = "0.204.0"
});
var qq2 = U(($q2) => {
    Object.defineProperty($q2, "__esModule", {
        value: !0
    });
    $q2.OTLPLogExporter = void 0;
    var v_5 = mk(),
        b_5 = pk(),
        zq2 = Si(),
        f_5 = Eq2();
    class Uq2 extends v_5.OTLPExporterBase {
        constructor(A = {}) {
            super((0, zq2.createOtlpHttpExportDelegate)((0, zq2.convertLegacyHttpOptions)(A, "LOGS", "v1/logs", {
                "User-Agent": `OTel-OTLP-Exporter-JavaScript/${f_5.VERSION}`,
                "Content-Type": "application/x-protobuf"
            }), b_5.ProtobufLogsSerializer))
        }
    }
    $q2.OTLPLogExporter = Uq2
});
var Nq2 = U((o90) => {
    Object.defineProperty(o90, "__esModule", {
        value: !0
    });
    o90.OTLPLogExporter = void 0;
    var h_5 = qq2();
    Object.defineProperty(o90, "OTLPLogExporter", {
        enumerable: !0,
        get: function() {
            return h_5.OTLPLogExporter
        }
    })
});
var Lq2 = U((t90) => {
    Object.defineProperty(t90, "__esModule", {
        value: !0
    });
    t90.OTLPLogExporter = void 0;
    var u_5 = Nq2();
    Object.defineProperty(t90, "OTLPLogExporter", {
        enumerable: !0,
        get: function() {
            return u_5.OTLPLogExporter
        }
    })
});
var Mq2 = U((e90) => {
    Object.defineProperty(e90, "__esModule", {
        value: !0
    });
    e90.OTLPLogExporter = void 0;
    var d_5 = Lq2();
    Object.defineProperty(e90, "OTLPLogExporter", {
        enumerable: !0,
        get: function() {
            return d_5.OTLPLogExporter
        }
    })
});
var jq2 = U((Tq2) => {
    Object.defineProperty(Tq2, "__esModule", {
        value: !0
    });
    Tq2.OTLPLogExporter = void 0;
    var Oq2 = C81(),
        p_5 = pk(),
        l_5 = mk();
    class Rq2 extends l_5.OTLPExporterBase {
        constructor(A = {}) {
            super((0, Oq2.createOtlpGrpcExportDelegate)((0, Oq2.convertLegacyOtlpGrpcOptions)(A, "LOGS"), p_5.ProtobufLogsSerializer, "LogsExportService", "/opentelemetry.proto.collector.logs.v1.LogsService/Export"))
        }
    }
    Tq2.OTLPLogExporter = Rq2
});
var Sq2 = U((A40) => {
    Object.defineProperty(A40, "__esModule", {
        value: !0
    });
    A40.OTLPLogExporter = void 0;
    var i_5 = jq2();
    Object.defineProperty(A40, "OTLPLogExporter", {
        enumerable: !0,
        get: function() {
            return i_5.OTLPLogExporter
        }
    })
});
var yq2 = U((_q2) => {
    Object.defineProperty(_q2, "__esModule", {
        value: !0
    });
    _q2.VERSION = void 0;
    _q2.VERSION = "0.204.0"
});
var hq2 = U((bq2) => {
    Object.defineProperty(bq2, "__esModule", {
        value: !0
    });
    bq2.OTLPLogExporter = void 0;
    var a_5 = mk(),
        s_5 = pk(),
        r_5 = yq2(),
        xq2 = Si();
    class vq2 extends a_5.OTLPExporterBase {
        constructor(A = {}) {
            super((0, xq2.createOtlpHttpExportDelegate)((0, xq2.convertLegacyHttpOptions)(A, "LOGS", "v1/logs", {
                "User-Agent": `OTel-OTLP-Exporter-JavaScript/${r_5.VERSION}`,
                "Content-Type": "application/json"
            }), s_5.JsonLogsSerializer))
        }
    }
    bq2.OTLPLogExporter = vq2
});
var gq2 = U((Q40) => {
    Object.defineProperty(Q40, "__esModule", {
        value: !0
    });
    Q40.OTLPLogExporter = void 0;
    var o_5 = hq2();
    Object.defineProperty(Q40, "OTLPLogExporter", {
        enumerable: !0,
        get: function() {
            return o_5.OTLPLogExporter
        }
    })
});
var uq2 = U((B40) => {
    Object.defineProperty(B40, "__esModule", {
        value: !0
    });
    B40.OTLPLogExporter = void 0;
    var e_5 = gq2();
    Object.defineProperty(B40, "OTLPLogExporter", {
        enumerable: !0,
        get: function() {
            return e_5.OTLPLogExporter
        }
    })
});
var mq2 = U((G40) => {
    Object.defineProperty(G40, "__esModule", {
        value: !0
    });
    G40.OTLPLogExporter = void 0;
    var Qk5 = uq2();
    Object.defineProperty(G40, "OTLPLogExporter", {
        enumerable: !0,
        get: function() {
            return Qk5.OTLPLogExporter
        }
    })
});
var pq2 = U((dq2) => {
    Object.defineProperty(dq2, "__esModule", {
        value: !0
    });
    dq2.ExceptionEventName = void 0;
    dq2.ExceptionEventName = "exception"
});
var aq2 = U((iq2) => {
    Object.defineProperty(iq2, "__esModule", {
        value: !0
    });
    iq2.SpanImpl = void 0;
    var YO = W9(),
        AC = t6(),
        e1A = ut(),
        Gk5 = pq2();
    class lq2 {
        _spanContext;
        kind;
        parentSpanContext;
        attributes = {};
        links = [];
        events = [];
        startTime;
        resource;
        instrumentationScope;
        _droppedAttributesCount = 0;
        _droppedEventsCount = 0;
        _droppedLinksCount = 0;
        name;
        status = {
            code: YO.SpanStatusCode.UNSET
        };
        endTime = [0, 0];
        _ended = !1;
        _duration = [-1, -1];
        _spanProcessor;
        _spanLimits;
        _attributeValueLengthLimit;
        _performanceStartTime;
        _performanceOffset;
        _startTimeProvided;
        constructor(A) {
            let Q = Date.now();
            if (this._spanContext = A.spanContext, this._performanceStartTime = AC.otperformance.now(), this._performanceOffset = Q - (this._performanceStartTime + (0, AC.getTimeOrigin)()), this._startTimeProvided = A.startTime != null, this._spanLimits = A.spanLimits, this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0, this._spanProcessor = A.spanProcessor, this.name = A.name, this.parentSpanContext = A.parentSpanContext, this.kind = A.kind, this.links = A.links || [], this.startTime = this._getTime(A.startTime ?? Q), this.resource = A.resource, this.instrumentationScope = A.scope, A.attributes != null) this.setAttributes(A.attributes);
            this._spanProcessor.onStart(this, A.context)
        }
        spanContext() {
            return this._spanContext
        }
        setAttribute(A, Q) {
            if (Q == null || this._isSpanEnded()) return this;
            if (A.length === 0) return YO.diag.warn(`Invalid attribute key: ${A}`), this;
            if (!(0, AC.isAttributeValue)(Q)) return YO.diag.warn(`Invalid attribute value set for key: ${A}`), this;
            let {
                attributeCountLimit: B
            } = this._spanLimits;
            if (B !== void 0 && Object.keys(this.attributes).length >= B && !Object.prototype.hasOwnProperty.call(this.attributes, A)) return this._droppedAttributesCount++, this;
            return this.attributes[A] = this._truncateToSize(Q), this
        }
        setAttributes(A) {
            for (let [Q, B] of Object.entries(A)) this.setAttribute(Q, B);
            return this
        }
        addEvent(A, Q, B) {
            if (this._isSpanEnded()) return this;
            let {
                eventCountLimit: G
            } = this._spanLimits;
            if (G === 0) return YO.diag.warn("No events allowed."), this._droppedEventsCount++, this;
            if (G !== void 0 && this.events.length >= G) {
                if (this._droppedEventsCount === 0) YO.diag.debug("Dropping extra events.");
                this.events.shift(), this._droppedEventsCount++
            }
            if ((0, AC.isTimeInput)(Q)) {
                if (!(0, AC.isTimeInput)(B)) B = Q;
                Q = void 0
            }
            let Z = (0, AC.sanitizeAttributes)(Q);
            return this.events.push({
                name: A,
                attributes: Z,
                time: this._getTime(B),
                droppedAttributesCount: 0
            }), this
        }
        addLink(A) {
            return this.links.push(A), this
        }
        addLinks(A) {
            return this.links.push(...A), this
        }
        setStatus(A) {
            if (this._isSpanEnded()) return this;
            if (this.status = {
                    ...A
                }, this.status.message != null && typeof A.message !== "string") YO.diag.warn(`Dropping invalid status.message of type '${typeof A.message}', expected 'string'`), delete this.status.message;
            return this
        }
        updateName(A) {
            if (this._isSpanEnded()) return this;
            return this.name = A, this
        }
        end(A) {
            if (this._isSpanEnded()) {
                YO.diag.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);
                return
            }
            if (this._ended = !0, this.endTime = this._getTime(A), this._duration = (0, AC.hrTimeDuration)(this.startTime, this.endTime), this._duration[0] < 0) YO.diag.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0];
            if (this._droppedEventsCount > 0) YO.diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`);
            this._spanProcessor.onEnd(this)
        }
        _getTime(A) {
            if (typeof A === "number" && A <= AC.otperformance.now()) return (0, AC.hrTime)(A + this._performanceOffset);
            if (typeof A === "number") return (0, AC.millisToHrTime)(A);
            if (A instanceof Date) return (0, AC.millisToHrTime)(A.getTime());
            if ((0, AC.isTimeInputHrTime)(A)) return A;
            if (this._startTimeProvided) return (0, AC.millisToHrTime)(Date.now());
            let Q = AC.otperformance.now() - this._performanceStartTime;
            return (0, AC.addHrTimes)(this.startTime, (0, AC.millisToHrTime)(Q))
        }
        isRecording() {
            return this._ended === !1
        }
        recordException(A, Q) {
            let B = {};
            if (typeof A === "string") B[e1A.ATTR_EXCEPTION_MESSAGE] = A;
            else if (A) {
                if (A.code) B[e1A.ATTR_EXCEPTION_TYPE] = A.code.toString();
                else if (A.name) B[e1A.ATTR_EXCEPTION_TYPE] = A.name;
                if (A.message) B[e1A.ATTR_EXCEPTION_MESSAGE] = A.message;
                if (A.stack) B[e1A.ATTR_EXCEPTION_STACKTRACE] = A.stack
            }
            if (B[e1A.ATTR_EXCEPTION_TYPE] || B[e1A.ATTR_EXCEPTION_MESSAGE]) this.addEvent(Gk5.ExceptionEventName, B, Q);
            else YO.diag.warn(`Failed to record an exception ${A}`)
        }
        get duration() {
            return this._duration
        }
        get ended() {
            return this._ended
        }
        get droppedAttributesCount() {
            return this._droppedAttributesCount
        }
        get droppedEventsCount() {
            return this._droppedEventsCount
        }
        get droppedLinksCount() {
            return this._droppedLinksCount
        }
        _isSpanEnded() {
            if (this._ended) {
                let A = Error(`Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
                YO.diag.warn(`Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`, A)
            }
            return this._ended
        }
        _truncateToLimitUtil(A, Q) {
            if (A.length <= Q) return A;
            return A.substring(0, Q)
        }
        _truncateToSize(A) {
            let Q = this._attributeValueLengthLimit;
            if (Q <= 0) return YO.diag.warn(`Attribute value limit must be positive, got ${Q}`), A;
            if (typeof A === "string") return this._truncateToLimitUtil(A, Q);
            if (Array.isArray(A)) return A.map((B) => typeof B === "string" ? this._truncateToLimitUtil(B, Q) : B);
            return A
        }
    }
    iq2.SpanImpl = lq2
});
var pOA = U((sq2) => {
    Object.defineProperty(sq2, "__esModule", {
        value: !0
    });
    sq2.SamplingDecision = void 0;
    var Zk5;
    (function(A) {
        A[A.NOT_RECORD = 0] = "NOT_RECORD", A[A.RECORD = 1] = "RECORD", A[A.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
    })(Zk5 = sq2.SamplingDecision || (sq2.SamplingDecision = {}))
});
var $81 = U((oq2) => {
    Object.defineProperty(oq2, "__esModule", {
        value: !0
    });
    oq2.AlwaysOffSampler = void 0;
    var Ik5 = pOA();
    class rq2 {
        shouldSample() {
            return {
                decision: Ik5.SamplingDecision.NOT_RECORD
            }
        }
        toString() {
            return "AlwaysOffSampler"
        }
    }
    oq2.AlwaysOffSampler = rq2
});
var w81 = U((AN2) => {
    Object.defineProperty(AN2, "__esModule", {
        value: !0
    });
    AN2.AlwaysOnSampler = void 0;
    var Yk5 = pOA();
    class eq2 {
        shouldSample() {
            return {
                decision: Yk5.SamplingDecision.RECORD_AND_SAMPLED
            }
        }
        toString() {
            return "AlwaysOnSampler"
        }
    }
    AN2.AlwaysOnSampler = eq2
});
var Y40 = U((ZN2) => {
    Object.defineProperty(ZN2, "__esModule", {
        value: !0
    });
    ZN2.ParentBasedSampler = void 0;
    var q81 = W9(),
        Jk5 = t6(),
        BN2 = $81(),
        I40 = w81();
    class GN2 {
        _root;
        _remoteParentSampled;
        _remoteParentNotSampled;
        _localParentSampled;
        _localParentNotSampled;
        constructor(A) {
            if (this._root = A.root, !this._root)(0, Jk5.globalErrorHandler)(Error("ParentBasedSampler must have a root sampler configured")), this._root = new I40.AlwaysOnSampler;
            this._remoteParentSampled = A.remoteParentSampled ?? new I40.AlwaysOnSampler, this._remoteParentNotSampled = A.remoteParentNotSampled ?? new BN2.AlwaysOffSampler, this._localParentSampled = A.localParentSampled ?? new I40.AlwaysOnSampler, this._localParentNotSampled = A.localParentNotSampled ?? new BN2.AlwaysOffSampler
        }
        shouldSample(A, Q, B, G, Z, I) {
            let Y = q81.trace.getSpanContext(A);
            if (!Y || !(0, q81.isSpanContextValid)(Y)) return this._root.shouldSample(A, Q, B, G, Z, I);
            if (Y.isRemote) {
                if (Y.traceFlags & q81.TraceFlags.SAMPLED) return this._remoteParentSampled.shouldSample(A, Q, B, G, Z, I);
                return this._remoteParentNotSampled.shouldSample(A, Q, B, G, Z, I)
            }
            if (Y.traceFlags & q81.TraceFlags.SAMPLED) return this._localParentSampled.shouldSample(A, Q, B, G, Z, I);
            return this._localParentNotSampled.shouldSample(A, Q, B, G, Z, I)
        }
        toString() {
            return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`
        }
    }
    ZN2.ParentBasedSampler = GN2
});
var J40 = U((WN2) => {
    Object.defineProperty(WN2, "__esModule", {
        value: !0
    });
    WN2.TraceIdRatioBasedSampler = void 0;
    var Wk5 = W9(),
        YN2 = pOA();
    class JN2 {
        _ratio;
        _upperBound;
        constructor(A = 0) {
            this._ratio = A, this._ratio = this._normalize(A), this._upperBound = Math.floor(this._ratio * 4294967295)
        }
        shouldSample(A, Q) {
            return {
                decision: (0, Wk5.isValidTraceId)(Q) && this._accumulate(Q) < this._upperBound ? YN2.SamplingDecision.RECORD_AND_SAMPLED : YN2.SamplingDecision.NOT_RECORD
            }
        }
        toString() {
            return `TraceIdRatioBased{${this._ratio}}`
        }
        _normalize(A) {
            if (typeof A !== "number" || isNaN(A)) return 0;
            return A >= 1 ? 1 : A <= 0 ? 0 : A
        }
        _accumulate(A) {
            let Q = 0;
            for (let B = 0; B < A.length / 8; B++) {
                let G = B * 8,
                    Z = parseInt(A.slice(G, G + 8), 16);
                Q = (Q ^ Z) >>> 0
            }
            return Q
        }
    }
    WN2.TraceIdRatioBasedSampler = JN2
});
var F40 = U((HN2) => {
    Object.defineProperty(HN2, "__esModule", {
        value: !0
    });
    HN2.buildSamplerFromEnv = HN2.loadDefaultConfig = void 0;
    var X40 = W9(),
        Gy = t6(),
        FN2 = $81(),
        W40 = w81(),
        N81 = Y40(),
        VN2 = J40(),
        Zy;
    (function(A) {
        A.AlwaysOff = "always_off", A.AlwaysOn = "always_on", A.ParentBasedAlwaysOff = "parentbased_always_off", A.ParentBasedAlwaysOn = "parentbased_always_on", A.ParentBasedTraceIdRatio = "parentbased_traceidratio", A.TraceIdRatio = "traceidratio"
    })(Zy || (Zy = {}));
    var L81 = 1;

    function Xk5() {
        return {
            sampler: DN2(),
            forceFlushTimeoutMillis: 30000,
            generalLimits: {
                attributeValueLengthLimit: (0, Gy.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
                attributeCountLimit: (0, Gy.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128
            },
            spanLimits: {
                attributeValueLengthLimit: (0, Gy.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
                attributeCountLimit: (0, Gy.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? 128,
                linkCountLimit: (0, Gy.getNumberFromEnv)("OTEL_SPAN_LINK_COUNT_LIMIT") ?? 128,
                eventCountLimit: (0, Gy.getNumberFromEnv)("OTEL_SPAN_EVENT_COUNT_LIMIT") ?? 128,
                attributePerEventCountLimit: (0, Gy.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT") ?? 128,
                attributePerLinkCountLimit: (0, Gy.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT") ?? 128
            }
        }
    }
    HN2.loadDefaultConfig = Xk5;

    function DN2() {
        let A = (0, Gy.getStringFromEnv)("OTEL_TRACES_SAMPLER") ?? Zy.ParentBasedAlwaysOn;
        switch (A) {
            case Zy.AlwaysOn:
                return new W40.AlwaysOnSampler;
            case Zy.AlwaysOff:
                return new FN2.AlwaysOffSampler;
            case Zy.ParentBasedAlwaysOn:
                return new N81.ParentBasedSampler({
                    root: new W40.AlwaysOnSampler
                });
            case Zy.ParentBasedAlwaysOff:
                return new N81.ParentBasedSampler({
                    root: new FN2.AlwaysOffSampler
                });
            case Zy.TraceIdRatio:
                return new VN2.TraceIdRatioBasedSampler(KN2());
            case Zy.ParentBasedTraceIdRatio:
                return new N81.ParentBasedSampler({
                    root: new VN2.TraceIdRatioBasedSampler(KN2())
                });
            default:
                return X40.diag.error(`OTEL_TRACES_SAMPLER value "${A}" invalid, defaulting to "${Zy.ParentBasedAlwaysOn}".`), new N81.ParentBasedSampler({
                    root: new W40.AlwaysOnSampler
                })
        }
    }
    HN2.buildSamplerFromEnv = DN2;

    function KN2() {
        let A = (0, Gy.getNumberFromEnv)("OTEL_TRACES_SAMPLER_ARG");
        if (A == null) return X40.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${L81}.`), L81;
        if (A < 0 || A > 1) return X40.diag.error(`OTEL_TRACES_SAMPLER_ARG=${A} was given, but it is out of range ([0..1]), defaulting to ${L81}.`), L81;
        return A
    }
});
var V40 = U((zN2) => {
    Object.defineProperty(zN2, "__esModule", {
        value: !0
    });
    zN2.reconfigureLimits = zN2.mergeConfig = zN2.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = zN2.DEFAULT_ATTRIBUTE_COUNT_LIMIT = void 0;
    var EN2 = F40(),
        M81 = t6();
    zN2.DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
    zN2.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = 1 / 0;

    function Vk5(A) {
        let Q = {
                sampler: (0, EN2.buildSamplerFromEnv)()
            },
            B = (0, EN2.loadDefaultConfig)(),
            G = Object.assign({}, B, Q, A);
        return G.generalLimits = Object.assign({}, B.generalLimits, A.generalLimits || {}), G.spanLimits = Object.assign({}, B.spanLimits, A.spanLimits || {}), G
    }
    zN2.mergeConfig = Vk5;

    function Kk5(A) {
        let Q = Object.assign({}, A.spanLimits);
        return Q.attributeCountLimit = A.spanLimits?.attributeCountLimit ?? A.generalLimits?.attributeCountLimit ?? (0, M81.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? (0, M81.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? zN2.DEFAULT_ATTRIBUTE_COUNT_LIMIT, Q.attributeValueLengthLimit = A.spanLimits?.attributeValueLengthLimit ?? A.generalLimits?.attributeValueLengthLimit ?? (0, M81.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? (0, M81.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? zN2.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT, Object.assign({}, A, {
            spanLimits: Q
        })
    }
    zN2.reconfigureLimits = Kk5
});
var MN2 = U((NN2) => {
    Object.defineProperty(NN2, "__esModule", {
        value: !0
    });
    NN2.BatchSpanProcessorBase = void 0;
    var HJA = W9(),
        Iy = t6();
    class qN2 {
        _exporter;
        _maxExportBatchSize;
        _maxQueueSize;
        _scheduledDelayMillis;
        _exportTimeoutMillis;
        _isExporting = !1;
        _finishedSpans = [];
        _timer;
        _shutdownOnce;
        _droppedSpansCount = 0;
        constructor(A, Q) {
            if (this._exporter = A, this._maxExportBatchSize = typeof Q?.maxExportBatchSize === "number" ? Q.maxExportBatchSize : (0, Iy.getNumberFromEnv)("OTEL_BSP_MAX_EXPORT_BATCH_SIZE") ?? 512, this._maxQueueSize = typeof Q?.maxQueueSize === "number" ? Q.maxQueueSize : (0, Iy.getNumberFromEnv)("OTEL_BSP_MAX_QUEUE_SIZE") ?? 2048, this._scheduledDelayMillis = typeof Q?.scheduledDelayMillis === "number" ? Q.scheduledDelayMillis : (0, Iy.getNumberFromEnv)("OTEL_BSP_SCHEDULE_DELAY") ?? 5000, this._exportTimeoutMillis = typeof Q?.exportTimeoutMillis === "number" ? Q.exportTimeoutMillis : (0, Iy.getNumberFromEnv)("OTEL_BSP_EXPORT_TIMEOUT") ?? 30000, this._shutdownOnce = new Iy.BindOnceFuture(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize) HJA.diag.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize
        }
        forceFlush() {
            if (this._shutdownOnce.isCalled) return this._shutdownOnce.promise;
            return this._flushAll()
        }
        onStart(A, Q) {}
        onEnd(A) {
            if (this._shutdownOnce.isCalled) return;
            if ((A.spanContext().traceFlags & HJA.TraceFlags.SAMPLED) === 0) return;
            this._addToBuffer(A)
        }
        shutdown() {
            return this._shutdownOnce.call()
        }
        _shutdown() {
            return Promise.resolve().then(() => {
                return this.onShutdown()
            }).then(() => {
                return this._flushAll()
            }).then(() => {
                return this._exporter.shutdown()
            })
        }
        _addToBuffer(A) {
            if (this._finishedSpans.length >= this._maxQueueSize) {
                if (this._droppedSpansCount === 0) HJA.diag.debug("maxQueueSize reached, dropping spans");
                this._droppedSpansCount++;
                return
            }
            if (this._droppedSpansCount > 0) HJA.diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`), this._droppedSpansCount = 0;
            this._finishedSpans.push(A), this._maybeStartTimer()
        }
        _flushAll() {
            return new Promise((A, Q) => {
                let B = [],
                    G = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
                for (let Z = 0, I = G; Z < I; Z++) B.push(this._flushOneBatch());
                Promise.all(B).then(() => {
                    A()
                }).catch(Q)
            })
        }
        _flushOneBatch() {
            if (this._clearTimer(), this._finishedSpans.length === 0) return Promise.resolve();
            return new Promise((A, Q) => {
                let B = setTimeout(() => {
                    Q(Error("Timeout"))
                }, this._exportTimeoutMillis);
                HJA.context.with((0, Iy.suppressTracing)(HJA.context.active()), () => {
                    let G;
                    if (this._finishedSpans.length <= this._maxExportBatchSize) G = this._finishedSpans, this._finishedSpans = [];
                    else G = this._finishedSpans.splice(0, this._maxExportBatchSize);
                    let Z = () => this._exporter.export(G, (Y) => {
                            if (clearTimeout(B), Y.code === Iy.ExportResultCode.SUCCESS) A();
                            else Q(Y.error ?? Error("BatchSpanProcessor: span export failed"))
                        }),
                        I = null;
                    for (let Y = 0, J = G.length; Y < J; Y++) {
                        let W = G[Y];
                        if (W.resource.asyncAttributesPending && W.resource.waitForAsyncAttributes) I ??= [], I.push(W.resource.waitForAsyncAttributes())
                    }
                    if (I === null) Z();
                    else Promise.all(I).then(Z, (Y) => {
                        (0, Iy.globalErrorHandler)(Y), Q(Y)
                    })
                })
            })
        }
        _maybeStartTimer() {
            if (this._isExporting) return;
            let A = () => {
                this._isExporting = !0, this._flushOneBatch().finally(() => {
                    if (this._isExporting = !1, this._finishedSpans.length > 0) this._clearTimer(), this._maybeStartTimer()
                }).catch((Q) => {
                    this._isExporting = !1, (0, Iy.globalErrorHandler)(Q)
                })
            };
            if (this._finishedSpans.length >= this._maxExportBatchSize) return A();
            if (this._timer !== void 0) return;
            this._timer = setTimeout(() => A(), this._scheduledDelayMillis), (0, Iy.unrefTimer)(this._timer)
        }
        _clearTimer() {
            if (this._timer !== void 0) clearTimeout(this._timer), this._timer = void 0
        }
    }
    NN2.BatchSpanProcessorBase = qN2
});
var PN2 = U((RN2) => {
    Object.defineProperty(RN2, "__esModule", {
        value: !0
    });
    RN2.BatchSpanProcessor = void 0;
    var Hk5 = MN2();
    class ON2 extends Hk5.BatchSpanProcessorBase {
        onShutdown() {}
    }
    RN2.BatchSpanProcessor = ON2
});
var xN2 = U((kN2) => {
    Object.defineProperty(kN2, "__esModule", {
        value: !0
    });
    kN2.RandomIdGenerator = void 0;
    var Ck5 = 8,
        SN2 = 16;
    class _N2 {
        generateTraceId = jN2(SN2);
        generateSpanId = jN2(Ck5)
    }
    kN2.RandomIdGenerator = _N2;
    var O81 = Buffer.allocUnsafe(SN2);

    function jN2(A) {
        return function() {
            for (let B = 0; B < A / 4; B++) O81.writeUInt32BE(Math.random() * 4294967296 >>> 0, B * 4);
            for (let B = 0; B < A; B++)
                if (O81[B] > 0) break;
                else if (B === A - 1) O81[A - 1] = 1;
            return O81.toString("hex", 0, A)
        }
    }
});
var vN2 = U((R81) => {
    Object.defineProperty(R81, "__esModule", {
        value: !0
    });
    R81.RandomIdGenerator = R81.BatchSpanProcessor = void 0;
    var Ek5 = PN2();
    Object.defineProperty(R81, "BatchSpanProcessor", {
        enumerable: !0,
        get: function() {
            return Ek5.BatchSpanProcessor
        }
    });
    var zk5 = xN2();
    Object.defineProperty(R81, "RandomIdGenerator", {
        enumerable: !0,
        get: function() {
            return zk5.RandomIdGenerator
        }
    })
});
var K40 = U((T81) => {
    Object.defineProperty(T81, "__esModule", {
        value: !0
    });
    T81.RandomIdGenerator = T81.BatchSpanProcessor = void 0;
    var bN2 = vN2();
    Object.defineProperty(T81, "BatchSpanProcessor", {
        enumerable: !0,
        get: function() {
            return bN2.BatchSpanProcessor
        }
    });
    Object.defineProperty(T81, "RandomIdGenerator", {
        enumerable: !0,
        get: function() {
            return bN2.RandomIdGenerator
        }
    })
});
var uN2 = U((hN2) => {
    Object.defineProperty(hN2, "__esModule", {
        value: !0
    });
    hN2.Tracer = void 0;
    var fD = W9(),
        P81 = t6(),
        wk5 = aq2(),
        qk5 = V40(),
        Nk5 = K40();
    class fN2 {
        _sampler;
        _generalLimits;
        _spanLimits;
        _idGenerator;
        instrumentationScope;
        _resource;
        _spanProcessor;
        constructor(A, Q, B, G) {
            let Z = (0, qk5.mergeConfig)(Q);
            this._sampler = Z.sampler, this._generalLimits = Z.generalLimits, this._spanLimits = Z.spanLimits, this._idGenerator = Q.idGenerator || new Nk5.RandomIdGenerator, this._resource = B, this._spanProcessor = G, this.instrumentationScope = A
        }
        startSpan(A, Q = {}, B = fD.context.active()) {
            if (Q.root) B = fD.trace.deleteSpan(B);
            let G = fD.trace.getSpan(B);
            if ((0, P81.isTracingSuppressed)(B)) return fD.diag.debug("Instrumentation suppressed, returning Noop Span"), fD.trace.wrapSpanContext(fD.INVALID_SPAN_CONTEXT);
            let Z = G?.spanContext(),
                I = this._idGenerator.generateSpanId(),
                Y, J, W;
            if (!Z || !fD.trace.isSpanContextValid(Z)) J = this._idGenerator.generateTraceId();
            else J = Z.traceId, W = Z.traceState, Y = Z;
            let X = Q.kind ?? fD.SpanKind.INTERNAL,
                F = (Q.links ?? []).map((z) => {
                    return {
                        context: z.context,
                        attributes: (0, P81.sanitizeAttributes)(z.attributes)
                    }
                }),
                V = (0, P81.sanitizeAttributes)(Q.attributes),
                K = this._sampler.shouldSample(B, J, A, X, V, F);
            W = K.traceState ?? W;
            let D = K.decision === fD.SamplingDecision.RECORD_AND_SAMPLED ? fD.TraceFlags.SAMPLED : fD.TraceFlags.NONE,
                H = {
                    traceId: J,
                    spanId: I,
                    traceFlags: D,
                    traceState: W
                };
            if (K.decision === fD.SamplingDecision.NOT_RECORD) return fD.diag.debug("Recording is off, propagating context in a non-recording span"), fD.trace.wrapSpanContext(H);
            let C = (0, P81.sanitizeAttributes)(Object.assign(V, K.attributes));
            return new wk5.SpanImpl({
                resource: this._resource,
                scope: this.instrumentationScope,
                context: B,
                spanContext: H,
                name: A,
                kind: X,
                links: F,
                parentSpanContext: Y,
                attributes: C,
                startTime: Q.startTime,
                spanProcessor: this._spanProcessor,
                spanLimits: this._spanLimits
            })
        }
        startActiveSpan(A, Q, B, G) {
            let Z, I, Y;
            if (arguments.length < 2) return;
            else if (arguments.length === 2) Y = Q;
            else if (arguments.length === 3) Z = Q, Y = B;
            else Z = Q, I = B, Y = G;
            let J = I ?? fD.context.active(),
                W = this.startSpan(A, Z, J),
                X = fD.trace.setSpan(J, W);
            return fD.context.with(X, Y, void 0, W)
        }
        getGeneralLimits() {
            return this._generalLimits
        }
        getSpanLimits() {
            return this._spanLimits
        }
    }
    hN2.Tracer = fN2
});
var pN2 = U((dN2) => {
    Object.defineProperty(dN2, "__esModule", {
        value: !0
    });
    dN2.MultiSpanProcessor = void 0;
    var Lk5 = t6();
    class mN2 {
        _spanProcessors;
        constructor(A) {
            this._spanProcessors = A
        }
        forceFlush() {
            let A = [];
            for (let Q of this._spanProcessors) A.push(Q.forceFlush());
            return new Promise((Q) => {
                Promise.all(A).then(() => {
                    Q()
                }).catch((B) => {
                    (0, Lk5.globalErrorHandler)(B || Error("MultiSpanProcessor: forceFlush failed")), Q()
                })
            })
        }
        onStart(A, Q) {
            for (let B of this._spanProcessors) B.onStart(A, Q)
        }
        onEnd(A) {
            for (let Q of this._spanProcessors) Q.onEnd(A)
        }
        shutdown() {
            let A = [];
            for (let Q of this._spanProcessors) A.push(Q.shutdown());
            return new Promise((Q, B) => {
                Promise.all(A).then(() => {
                    Q()
                }, B)
            })
        }
    }
    dN2.MultiSpanProcessor = mN2
});
var sN2 = U((nN2) => {
    Object.defineProperty(nN2, "__esModule", {
        value: !0
    });
    nN2.BasicTracerProvider = nN2.ForceFlushState = void 0;
    var Mk5 = t6(),
        Ok5 = f7A(),
        Rk5 = uN2(),
        Tk5 = F40(),
        Pk5 = pN2(),
        jk5 = V40(),
        CJA;
    (function(A) {
        A[A.resolved = 0] = "resolved", A[A.timeout = 1] = "timeout", A[A.error = 2] = "error", A[A.unresolved = 3] = "unresolved"
    })(CJA = nN2.ForceFlushState || (nN2.ForceFlushState = {}));
    class iN2 {
        _config;
        _tracers = new Map;
        _resource;
        _activeSpanProcessor;
        constructor(A = {}) {
            let Q = (0, Mk5.merge)({}, (0, Tk5.loadDefaultConfig)(), (0, jk5.reconfigureLimits)(A));
            this._resource = Q.resource ?? (0, Ok5.defaultResource)(), this._config = Object.assign({}, Q, {
                resource: this._resource
            });
            let B = [];
            if (A.spanProcessors?.length) B.push(...A.spanProcessors);
            this._activeSpanProcessor = new Pk5.MultiSpanProcessor(B)
        }
        getTracer(A, Q, B) {
            let G = `${A}@${Q||""}:${B?.schemaUrl||""}`;
            if (!this._tracers.has(G)) this._tracers.set(G, new Rk5.Tracer({
                name: A,
                version: Q,
                schemaUrl: B?.schemaUrl
            }, this._config, this._resource, this._activeSpanProcessor));
            return this._tracers.get(G)
        }
        forceFlush() {
            let A = this._config.forceFlushTimeoutMillis,
                Q = this._activeSpanProcessor._spanProcessors.map((B) => {
                    return new Promise((G) => {
                        let Z, I = setTimeout(() => {
                            G(Error(`Span processor did not completed within timeout period of ${A} ms`)), Z = CJA.timeout
                        }, A);
                        B.forceFlush().then(() => {
                            if (clearTimeout(I), Z !== CJA.timeout) Z = CJA.resolved, G(Z)
                        }).catch((Y) => {
                            clearTimeout(I), Z = CJA.error, G(Y)
                        })
                    })
                });
            return new Promise((B, G) => {
                Promise.all(Q).then((Z) => {
                    let I = Z.filter((Y) => Y !== CJA.resolved);
                    if (I.length > 0) G(I);
                    else B()
                }).catch((Z) => G([Z]))
            })
        }
        shutdown() {
            return this._activeSpanProcessor.shutdown()
        }
    }
    nN2.BasicTracerProvider = iN2
});
var eN2 = U((oN2) => {
    Object.defineProperty(oN2, "__esModule", {
        value: !0
    });
    oN2.ConsoleSpanExporter = void 0;
    var D40 = t6();
    class rN2 {
        export (A, Q) {
            return this._sendSpans(A, Q)
        }
        shutdown() {
            return this._sendSpans([]), this.forceFlush()
        }
        forceFlush() {
            return Promise.resolve()
        }
        _exportInfo(A) {
            return {
                resource: {
                    attributes: A.resource.attributes
                },
                instrumentationScope: A.instrumentationScope,
                traceId: A.spanContext().traceId,
                parentSpanContext: A.parentSpanContext,
                traceState: A.spanContext().traceState?.serialize(),
                name: A.name,
                id: A.spanContext().spanId,
                kind: A.kind,
                timestamp: (0, D40.hrTimeToMicroseconds)(A.startTime),
                duration: (0, D40.hrTimeToMicroseconds)(A.duration),
                attributes: A.attributes,
                status: A.status,
                events: A.events,
                links: A.links
            }
        }
        _sendSpans(A, Q) {
            for (let B of A) console.dir(this._exportInfo(B), {
                depth: 3
            });
            if (Q) return Q({
                code: D40.ExportResultCode.SUCCESS
            })
        }
    }
    oN2.ConsoleSpanExporter = rN2
});
var ZL2 = U((BL2) => {
    Object.defineProperty(BL2, "__esModule", {
        value: !0
    });
    BL2.InMemorySpanExporter = void 0;
    var AL2 = t6();
    class QL2 {
        _finishedSpans = [];
        _stopped = !1;
        export (A, Q) {
            if (this._stopped) return Q({
                code: AL2.ExportResultCode.FAILED,
                error: Error("Exporter has been stopped")
            });
            this._finishedSpans.push(...A), setTimeout(() => Q({
                code: AL2.ExportResultCode.SUCCESS
            }), 0)
        }
        shutdown() {
            return this._stopped = !0, this._finishedSpans = [], this.forceFlush()
        }
        forceFlush() {
            return Promise.resolve()
        }
        reset() {
            this._finishedSpans = []
        }
        getFinishedSpans() {
            return this._finishedSpans
        }
    }
    BL2.InMemorySpanExporter = QL2
});
var WL2 = U((YL2) => {
    Object.defineProperty(YL2, "__esModule", {
        value: !0
    });
    YL2.SimpleSpanProcessor = void 0;
    var Sk5 = W9(),
        j81 = t6();
    class IL2 {
        _exporter;
        _shutdownOnce;
        _pendingExports;
        constructor(A) {
            this._exporter = A, this._shutdownOnce = new j81.BindOnceFuture(this._shutdown, this), this._pendingExports = new Set
        }
        async forceFlush() {
            if (await Promise.all(Array.from(this._pendingExports)), this._exporter.forceFlush) await this._exporter.forceFlush()
        }
        onStart(A, Q) {}
        onEnd(A) {
            if (this._shutdownOnce.isCalled) return;
            if ((A.spanContext().traceFlags & Sk5.TraceFlags.SAMPLED) === 0) return;
            let Q = this._doExport(A).catch((B) => (0, j81.globalErrorHandler)(B));
            this._pendingExports.add(Q), Q.finally(() => this._pendingExports.delete(Q))
        }
        async _doExport(A) {
            if (A.resource.asyncAttributesPending) await A.resource.waitForAsyncAttributes?.();
            let Q = await j81.internal._export(this._exporter, [A]);
            if (Q.code !== j81.ExportResultCode.SUCCESS) throw Q.error ?? Error(`SimpleSpanProcessor: span export failed (status ${Q})`)
        }
        shutdown() {
            return this._shutdownOnce.call()
        }
        _shutdown() {
            return this._exporter.shutdown()
        }
    }
    YL2.SimpleSpanProcessor = IL2
});
var KL2 = U((FL2) => {
    Object.defineProperty(FL2, "__esModule", {
        value: !0
    });
    FL2.NoopSpanProcessor = void 0;
    class XL2 {
        onStart(A, Q) {}
        onEnd(A) {}
        shutdown() {
            return Promise.resolve()
        }
        forceFlush() {
            return Promise.resolve()
        }
    }
    FL2.NoopSpanProcessor = XL2
});
var HL2 = U((eU) => {
    Object.defineProperty(eU, "__esModule", {
        value: !0
    });
    eU.SamplingDecision = eU.TraceIdRatioBasedSampler = eU.ParentBasedSampler = eU.AlwaysOnSampler = eU.AlwaysOffSampler = eU.NoopSpanProcessor = eU.SimpleSpanProcessor = eU.InMemorySpanExporter = eU.ConsoleSpanExporter = eU.RandomIdGenerator = eU.BatchSpanProcessor = eU.BasicTracerProvider = void 0;
    var _k5 = sN2();
    Object.defineProperty(eU, "BasicTracerProvider", {
        enumerable: !0,
        get: function() {
            return _k5.BasicTracerProvider
        }
    });
    var DL2 = K40();
    Object.defineProperty(eU, "BatchSpanProcessor", {
        enumerable: !0,
        get: function() {
            return DL2.BatchSpanProcessor
        }
    });
    Object.defineProperty(eU, "RandomIdGenerator", {
        enumerable: !0,
        get: function() {
            return DL2.RandomIdGenerator
        }
    });
    var kk5 = eN2();
    Object.defineProperty(eU, "ConsoleSpanExporter", {
        enumerable: !0,
        get: function() {
            return kk5.ConsoleSpanExporter
        }
    });
    var yk5 = ZL2();
    Object.defineProperty(eU, "InMemorySpanExporter", {
        enumerable: !0,
        get: function() {
            return yk5.InMemorySpanExporter
        }
    });
    var xk5 = WL2();
    Object.defineProperty(eU, "SimpleSpanProcessor", {
        enumerable: !0,
        get: function() {
            return xk5.SimpleSpanProcessor
        }
    });
    var vk5 = KL2();
    Object.defineProperty(eU, "NoopSpanProcessor", {
        enumerable: !0,
        get: function() {
            return vk5.NoopSpanProcessor
        }
    });
    var bk5 = $81();
    Object.defineProperty(eU, "AlwaysOffSampler", {
        enumerable: !0,
        get: function() {
            return bk5.AlwaysOffSampler
        }
    });
    var fk5 = w81();
    Object.defineProperty(eU, "AlwaysOnSampler", {
        enumerable: !0,
        get: function() {
            return fk5.AlwaysOnSampler
        }
    });
    var hk5 = Y40();
    Object.defineProperty(eU, "ParentBasedSampler", {
        enumerable: !0,
        get: function() {
            return hk5.ParentBasedSampler
        }
    });
    var gk5 = J40();
    Object.defineProperty(eU, "TraceIdRatioBasedSampler", {
        enumerable: !0,
        get: function() {
            return gk5.TraceIdRatioBasedSampler
        }
    });
    var uk5 = pOA();
    Object.defineProperty(eU, "SamplingDecision", {
        enumerable: !0,
        get: function() {
            return uk5.SamplingDecision
        }
    })
});
var zL2 = U((CL2) => {
    Object.defineProperty(CL2, "__esModule", {
        value: !0
    });
    CL2.VERSION = void 0;
    CL2.VERSION = "0.204.0"
});
var NL2 = U((wL2) => {
    Object.defineProperty(wL2, "__esModule", {
        value: !0
    });
    wL2.OTLPTraceExporter = void 0;
    var dk5 = mk(),
        ck5 = pk(),
        pk5 = zL2(),
        UL2 = Si();
    class $L2 extends dk5.OTLPExporterBase {
        constructor(A = {}) {
            super((0, UL2.createOtlpHttpExportDelegate)((0, UL2.convertLegacyHttpOptions)(A, "TRACES", "v1/traces", {
                "User-Agent": `OTel-OTLP-Exporter-JavaScript/${pk5.VERSION}`,
                "Content-Type": "application/x-protobuf"
            }), ck5.ProtobufTraceSerializer))
        }
    }
    wL2.OTLPTraceExporter = $L2
});
var LL2 = U((H40) => {
    Object.defineProperty(H40, "__esModule", {
        value: !0
    });
    H40.OTLPTraceExporter = void 0;
    var lk5 = NL2();
    Object.defineProperty(H40, "OTLPTraceExporter", {
        enumerable: !0,
        get: function() {
            return lk5.OTLPTraceExporter
        }
    })
});
var ML2 = U((C40) => {
    Object.defineProperty(C40, "__esModule", {
        value: !0
    });
    C40.OTLPTraceExporter = void 0;
    var nk5 = LL2();
    Object.defineProperty(C40, "OTLPTraceExporter", {
        enumerable: !0,
        get: function() {
            return nk5.OTLPTraceExporter
        }
    })
});
var OL2 = U((E40) => {
    Object.defineProperty(E40, "__esModule", {
        value: !0
    });
    E40.OTLPTraceExporter = void 0;
    var sk5 = ML2();
    Object.defineProperty(E40, "OTLPTraceExporter", {
        enumerable: !0,
        get: function() {
            return sk5.OTLPTraceExporter
        }
    })
});
var SL2 = U((PL2) => {
    Object.defineProperty(PL2, "__esModule", {
        value: !0
    });
    PL2.OTLPTraceExporter = void 0;
    var RL2 = C81(),
        ok5 = pk(),
        tk5 = mk();
    class TL2 extends tk5.OTLPExporterBase {
        constructor(A = {}) {
            super((0, RL2.createOtlpGrpcExportDelegate)((0, RL2.convertLegacyOtlpGrpcOptions)(A, "TRACES"), ok5.ProtobufTraceSerializer, "TraceExportService", "/opentelemetry.proto.collector.trace.v1.TraceService/Export"))
        }
    }
    PL2.OTLPTraceExporter = TL2
});
var _L2 = U((z40) => {
    Object.defineProperty(z40, "__esModule", {
        value: !0
    });
    z40.OTLPTraceExporter = void 0;
    var ek5 = SL2();
    Object.defineProperty(z40, "OTLPTraceExporter", {
        enumerable: !0,
        get: function() {
            return ek5.OTLPTraceExporter
        }
    })
});
var xL2 = U((kL2) => {
    Object.defineProperty(kL2, "__esModule", {
        value: !0
    });
    kL2.VERSION = void 0;
    kL2.VERSION = "0.204.0"
});
var gL2 = U((fL2) => {
    Object.defineProperty(fL2, "__esModule", {
        value: !0
    });
    fL2.OTLPTraceExporter = void 0;
    var Qy5 = mk(),
        By5 = xL2(),
        Gy5 = pk(),
        vL2 = Si();
    class bL2 extends Qy5.OTLPExporterBase {
        constructor(A = {}) {
            super((0, vL2.createOtlpHttpExportDelegate)((0, vL2.convertLegacyHttpOptions)(A, "TRACES", "v1/traces", {
                "User-Agent": `OTel-OTLP-Exporter-JavaScript/${By5.VERSION}`,
                "Content-Type": "application/json"
            }), Gy5.JsonTraceSerializer))
        }
    }
    fL2.OTLPTraceExporter = bL2
});
var uL2 = U((U40) => {
    Object.defineProperty(U40, "__esModule", {
        value: !0
    });
    U40.OTLPTraceExporter = void 0;
    var Zy5 = gL2();
    Object.defineProperty(U40, "OTLPTraceExporter", {
        enumerable: !0,
        get: function() {
            return Zy5.OTLPTraceExporter
        }
    })
});
var mL2 = U(($40) => {
    Object.defineProperty($40, "__esModule", {
        value: !0
    });
    $40.OTLPTraceExporter = void 0;
    var Yy5 = uL2();
    Object.defineProperty($40, "OTLPTraceExporter", {
        enumerable: !0,
        get: function() {
            return Yy5.OTLPTraceExporter
        }