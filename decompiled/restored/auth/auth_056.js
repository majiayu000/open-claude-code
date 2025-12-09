/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: auth_056.js
 * 处理时间: 2025-12-09T03:37:24.394Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         (  3x) = require(moduleName) - Node.js require
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 56/61
 * Lines: 304966 - 306464 (1499 lines)
 * Original file: cli.js
 */

    function FV2(A, Q) {
        return Array.from(A.map((B) => ({
            scope: (0, nMA.createInstrumentationScope)(B.scope),
            metrics: B.metrics.map((G) => VV2(G, Q)),
            schemaUrl: B.scope.schemaUrl
        })))
    }
    KV2.toScopeMetrics = FV2;

    function VV2(A, Q) {
        let B = {
                name: A.descriptor.name,
                description: A.descriptor.description,
                unit: A.descriptor.unit
            },
            G = uE5(A.aggregationTemporality);
        switch (A.dataPointType) {
            case yYA.DataPointType.SUM:
                B.sum = {
                    aggregationTemporality: G,
                    isMonotonic: A.isMonotonic,
                    dataPoints: WV2(A, Q)
                };
                break;
            case yYA.DataPointType.GAUGE:
                B.gauge = {
                    dataPoints: WV2(A, Q)
                };
                break;
            case yYA.DataPointType.HISTOGRAM:
                B.histogram = {
                    aggregationTemporality: G,
                    dataPoints: hE5(A, Q)
                };
                break;
            case yYA.DataPointType.EXPONENTIAL_HISTOGRAM:
                B.exponentialHistogram = {
                    aggregationTemporality: G,
                    dataPoints: gE5(A, Q)
                };
                break
        }
        return B
    }
    KV2.toMetric = VV2;

    function fE5(A, Q, B) {
        let G = {
            attributes: (0, nMA.toAttributes)(A.attributes),
            startTimeUnixNano: B.encodeHrTime(A.startTime),
            timeUnixNano: B.encodeHrTime(A.endTime)
        };
        switch (Q) {
            case YV2.ValueType.INT:
                G.asInt = A.value;
                break;
            case YV2.ValueType.DOUBLE:
                G.asDouble = A.value;
                break
        }
        return G
    }

    function WV2(A, Q) {
        return A.dataPoints.map((B) => {
            return fE5(B, A.descriptor.valueType, Q)
        })
    }

    function hE5(A, Q) {
        return A.dataPoints.map((B) => {
            let G = B.value;
            return {
                attributes: (0, nMA.toAttributes)(B.attributes),
                bucketCounts: G.buckets.counts,
                explicitBounds: G.buckets.boundaries,
                count: G.count,
                sum: G.sum,
                min: G.min,
                max: G.max,
                startTimeUnixNano: Q.encodeHrTime(B.startTime),
                timeUnixNano: Q.encodeHrTime(B.endTime)
            }
        })
    }

    function gE5(A, Q) {
        return A.dataPoints.map((B) => {
            let G = B.value;
            return {
                attributes: (0, nMA.toAttributes)(B.attributes),
                count: G.count,
                min: G.min,
                max: G.max,
                sum: G.sum,
                positive: {
                    offset: G.positive.offset,
                    bucketCounts: G.positive.bucketCounts
                },
                negative: {
                    offset: G.negative.offset,
                    bucketCounts: G.negative.bucketCounts
                },
                scale: G.scale,
                zeroCount: G.zeroCount,
                startTimeUnixNano: Q.encodeHrTime(B.startTime),
                timeUnixNano: Q.encodeHrTime(B.endTime)
            }
        })
    }

    function uE5(A) {
        switch (A) {
            case yYA.AggregationTemporality.DELTA:
                return JV2.EAggregationTemporality.AGGREGATION_TEMPORALITY_DELTA;
            case yYA.AggregationTemporality.CUMULATIVE:
                return JV2.EAggregationTemporality.AGGREGATION_TEMPORALITY_CUMULATIVE
        }
    }

    function mE5(A, Q) {
        return {
            resourceMetrics: A.map((B) => XV2(B, Q))
        }
    }
    KV2.createExportMetricsServiceRequest = mE5
});
var zV2 = U((CV2) => {
    Object.defineProperty(CV2, "__esModule", {
        value: !0
    });
    CV2.ProtobufMetricsSerializer = void 0;
    var HV2 = h91(),
        lE5 = rQ0(),
        iE5 = HV2.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse,
        nE5 = HV2.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
    CV2.ProtobufMetricsSerializer = {
        serializeRequest: (A) => {
            let Q = (0, lE5.createExportMetricsServiceRequest)([A]);
            return nE5.encode(Q).finish()
        },
        deserializeResponse: (A) => {
            return iE5.decode(A)
        }
    }
});
var UV2 = U((oQ0) => {
    Object.defineProperty(oQ0, "__esModule", {
        value: !0
    });
    oQ0.ProtobufMetricsSerializer = void 0;
    var aE5 = zV2();
    Object.defineProperty(oQ0, "ProtobufMetricsSerializer", {
        enumerable: !0,
        get: function() {
            return aE5.ProtobufMetricsSerializer
        }
    })
});
var tQ0 = U((NV2) => {
    Object.defineProperty(NV2, "__esModule", {
        value: !0
    });
    NV2.createExportTraceServiceRequest = NV2.toOtlpSpanEvent = NV2.toOtlpLink = NV2.sdkSpanToOtlpSpan = void 0;
    var aMA = u91(),
        rE5 = g91();

    function $V2(A, Q) {
        let B = A.spanContext(),
            G = A.status,
            Z = A.parentSpanContext?.spanId ? Q.encodeSpanContext(A.parentSpanContext?.spanId) : void 0;
        return {
            traceId: Q.encodeSpanContext(B.traceId),
            spanId: Q.encodeSpanContext(B.spanId),
            parentSpanId: Z,
            traceState: B.traceState?.serialize(),
            name: A.name,
            kind: A.kind == null ? 0 : A.kind + 1,
            startTimeUnixNano: Q.encodeHrTime(A.startTime),
            endTimeUnixNano: Q.encodeHrTime(A.endTime),
            attributes: (0, aMA.toAttributes)(A.attributes),
            droppedAttributesCount: A.droppedAttributesCount,
            events: A.events.map((I) => qV2(I, Q)),
            droppedEventsCount: A.droppedEventsCount,
            status: {
                code: G.code,
                message: G.message
            },
            links: A.links.map((I) => wV2(I, Q)),
            droppedLinksCount: A.droppedLinksCount
        }
    }
    NV2.sdkSpanToOtlpSpan = $V2;

    function wV2(A, Q) {
        return {
            attributes: A.attributes ? (0, aMA.toAttributes)(A.attributes) : [],
            spanId: Q.encodeSpanContext(A.context.spanId),
            traceId: Q.encodeSpanContext(A.context.traceId),
            traceState: A.context.traceState?.serialize(),
            droppedAttributesCount: A.droppedAttributesCount || 0
        }
    }
    NV2.toOtlpLink = wV2;

    function qV2(A, Q) {
        return {
            attributes: A.attributes ? (0, aMA.toAttributes)(A.attributes) : [],
            name: A.name,
            timeUnixNano: Q.encodeHrTime(A.time),
            droppedAttributesCount: A.droppedAttributesCount || 0
        }
    }
    NV2.toOtlpSpanEvent = qV2;

    function oE5(A, Q) {
        let B = (0, rE5.getOtlpEncoder)(Q);
        return {
            resourceSpans: eE5(A, B)
        }
    }
    NV2.createExportTraceServiceRequest = oE5;

    function tE5(A) {
        let Q = new Map;
        for (let B of A) {
            let G = Q.get(B.resource);
            if (!G) G = new Map, Q.set(B.resource, G);
            let Z = `${B.instrumentationScope.name}@${B.instrumentationScope.version||""}:${B.instrumentationScope.schemaUrl||""}`,
                I = G.get(Z);
            if (!I) I = [], G.set(Z, I);
            I.push(B)
        }
        return Q
    }

    function eE5(A, Q) {
        let B = tE5(A),
            G = [],
            Z = B.entries(),
            I = Z.next();
        while (!I.done) {
            let [Y, J] = I.value, W = [], X = J.values(), F = X.next();
            while (!F.done) {
                let D = F.value;
                if (D.length > 0) {
                    let H = D.map((C) => $V2(C, Q));
                    W.push({
                        scope: (0, aMA.createInstrumentationScope)(D[0].instrumentationScope),
                        spans: H,
                        schemaUrl: D[0].instrumentationScope.schemaUrl
                    })
                }
                F = X.next()
            }
            let V = (0, aMA.createResource)(Y),
                K = {
                    resource: V,
                    scopeSpans: W,
                    schemaUrl: V.schemaUrl
                };
            G.push(K), I = Z.next()
        }
        return G
    }
});
var TV2 = U((OV2) => {
    Object.defineProperty(OV2, "__esModule", {
        value: !0
    });
    OV2.ProtobufTraceSerializer = void 0;
    var MV2 = h91(),
        Gz5 = tQ0(),
        Zz5 = MV2.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse,
        Iz5 = MV2.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
    OV2.ProtobufTraceSerializer = {
        serializeRequest: (A) => {
            let Q = (0, Gz5.createExportTraceServiceRequest)(A);
            return Iz5.encode(Q).finish()
        },
        deserializeResponse: (A) => {
            return Zz5.decode(A)
        }
    }
});
var PV2 = U((eQ0) => {
    Object.defineProperty(eQ0, "__esModule", {
        value: !0
    });
    eQ0.ProtobufTraceSerializer = void 0;
    var Yz5 = TV2();
    Object.defineProperty(eQ0, "ProtobufTraceSerializer", {
        enumerable: !0,
        get: function() {
            return Yz5.ProtobufTraceSerializer
        }
    })
});
var _V2 = U((jV2) => {
    Object.defineProperty(jV2, "__esModule", {
        value: !0
    });
    jV2.JsonLogsSerializer = void 0;
    var Wz5 = nQ0();
    jV2.JsonLogsSerializer = {
        serializeRequest: (A) => {
            let Q = (0, Wz5.createExportLogsServiceRequest)(A, {
                useHex: !0,
                useLongBits: !1
            });
            return new TextEncoder().encode(JSON.stringify(Q))
        },
        deserializeResponse: (A) => {
            if (A.length === 0) return {};
            return JSON.parse(new TextDecoder().decode(A))
        }
    }
});
var kV2 = U((AB0) => {
    Object.defineProperty(AB0, "__esModule", {
        value: !0
    });
    AB0.JsonLogsSerializer = void 0;
    var Xz5 = _V2();
    Object.defineProperty(AB0, "JsonLogsSerializer", {
        enumerable: !0,
        get: function() {
            return Xz5.JsonLogsSerializer
        }
    })
});
var vV2 = U((yV2) => {
    Object.defineProperty(yV2, "__esModule", {
        value: !0
    });
    yV2.JsonMetricsSerializer = void 0;
    var Vz5 = rQ0();
    yV2.JsonMetricsSerializer = {
        serializeRequest: (A) => {
            let Q = (0, Vz5.createExportMetricsServiceRequest)([A], {
                useLongBits: !1
            });
            return new TextEncoder().encode(JSON.stringify(Q))
        },
        deserializeResponse: (A) => {
            if (A.length === 0) return {};
            return JSON.parse(new TextDecoder().decode(A))
        }
    }
});
var bV2 = U((QB0) => {
    Object.defineProperty(QB0, "__esModule", {
        value: !0
    });
    QB0.JsonMetricsSerializer = void 0;
    var Kz5 = vV2();
    Object.defineProperty(QB0, "JsonMetricsSerializer", {
        enumerable: !0,
        get: function() {
            return Kz5.JsonMetricsSerializer
        }
    })
});
var gV2 = U((fV2) => {
    Object.defineProperty(fV2, "__esModule", {
        value: !0
    });
    fV2.JsonTraceSerializer = void 0;
    var Hz5 = tQ0();
    fV2.JsonTraceSerializer = {
        serializeRequest: (A) => {
            let Q = (0, Hz5.createExportTraceServiceRequest)(A, {
                useHex: !0,
                useLongBits: !1
            });
            return new TextEncoder().encode(JSON.stringify(Q))
        },
        deserializeResponse: (A) => {
            if (A.length === 0) return {};
            return JSON.parse(new TextDecoder().decode(A))
        }
    }
});
var uV2 = U((BB0) => {
    Object.defineProperty(BB0, "__esModule", {
        value: !0
    });
    BB0.JsonTraceSerializer = void 0;
    var Cz5 = gV2();
    Object.defineProperty(BB0, "JsonTraceSerializer", {
        enumerable: !0,
        get: function() {
            return Cz5.JsonTraceSerializer
        }
    })
});
var pk = U((Pi) => {
    Object.defineProperty(Pi, "__esModule", {
        value: !0
    });
    Pi.JsonTraceSerializer = Pi.JsonMetricsSerializer = Pi.JsonLogsSerializer = Pi.ProtobufTraceSerializer = Pi.ProtobufMetricsSerializer = Pi.ProtobufLogsSerializer = void 0;
    var zz5 = GV2();
    Object.defineProperty(Pi, "ProtobufLogsSerializer", {
        enumerable: !0,
        get: function() {
            return zz5.ProtobufLogsSerializer
        }
    });
    var Uz5 = UV2();
    Object.defineProperty(Pi, "ProtobufMetricsSerializer", {
        enumerable: !0,
        get: function() {
            return Uz5.ProtobufMetricsSerializer
        }
    });
    var $z5 = PV2();
    Object.defineProperty(Pi, "ProtobufTraceSerializer", {
        enumerable: !0,
        get: function() {
            return $z5.ProtobufTraceSerializer
        }
    });
    var wz5 = kV2();
    Object.defineProperty(Pi, "JsonLogsSerializer", {
        enumerable: !0,
        get: function() {
            return wz5.JsonLogsSerializer
        }
    });
    var qz5 = bV2();
    Object.defineProperty(Pi, "JsonMetricsSerializer", {
        enumerable: !0,
        get: function() {
            return qz5.JsonMetricsSerializer
        }
    });
    var Nz5 = uV2();
    Object.defineProperty(Pi, "JsonTraceSerializer", {
        enumerable: !0,
        get: function() {
            return Nz5.JsonTraceSerializer
        }
    })
});
var cV2 = U((mV2) => {
    Object.defineProperty(mV2, "__esModule", {
        value: !0
    });
    mV2.VERSION = void 0;
    mV2.VERSION = "0.204.0"
});
var iV2 = U((pV2) => {
    Object.defineProperty(pV2, "__esModule", {
        value: !0
    });
    pV2.validateAndNormalizeHeaders = void 0;
    var Mz5 = W9();

    function Oz5(A) {
        return () => {
            let Q = {};
            return Object.entries(A?.() ?? {}).forEach(([B, G]) => {
                if (typeof G < "u") Q[B] = String(G);
                else Mz5.diag.warn(`Header "${B}" has invalid value (${G}) and will be ignored`)
            }), Q
        }
    }
    pV2.validateAndNormalizeHeaders = Oz5
});
var GB0 = U((sV2) => {
    Object.defineProperty(sV2, "__esModule", {
        value: !0
    });
    sV2.getHttpConfigurationDefaults = sV2.mergeOtlpHttpConfigurationWithDefaults = sV2.httpAgentFactoryFromOptions = void 0;
    var nV2 = cMA(),
        Rz5 = iV2();

    function Tz5(A, Q, B) {
        let G = {
                ...B()
            },
            Z = {};
        return () => {
            if (Q != null) Object.assign(Z, Q());
            if (A != null) Object.assign(Z, A());
            return Object.assign(Z, G)
        }
    }

    function Pz5(A) {
        if (A == null) return;
        try {
            let Q = globalThis.location?.href;
            return new URL(A, Q).href
        } catch {
            throw Error(`Configuration: Could not parse user-provided export URL: '${A}'`)
        }
    }

    function aV2(A) {
        return async (Q) => {
            let B = Q === "http:" ? import("http") : import("https"),
                {
                    Agent: G
                } = await B;
            return new G(A)
        }
    }
    sV2.httpAgentFactoryFromOptions = aV2;

    function jz5(A, Q, B) {
        return {
            ...(0, nV2.mergeOtlpSharedConfigurationWithDefaults)(A, Q, B),
            headers: Tz5((0, Rz5.validateAndNormalizeHeaders)(A.headers), Q.headers, B.headers),
            url: Pz5(A.url) ?? Q.url ?? B.url,
            agentFactory: A.agentFactory ?? Q.agentFactory ?? B.agentFactory
        }
    }
    sV2.mergeOtlpHttpConfigurationWithDefaults = jz5;

    function Sz5(A, Q) {
        return {
            ...(0, nV2.getSharedConfigurationDefaults)(),
            headers: () => A,
            url: "http://localhost:4318/" + Q,
            agentFactory: aV2({
                keepAlive: !0
            })
        }
    }
    sV2.getHttpConfigurationDefaults = Sz5
});
var eV2 = U((oV2) => {
    Object.defineProperty(oV2, "__esModule", {
        value: !0
    });
    oV2.parseRetryAfterToMills = oV2.isExportRetryable = void 0;

    function yz5(A) {
        return [429, 502, 503, 504].includes(A)
    }
    oV2.isExportRetryable = yz5;

    function xz5(A) {
        if (A == null) return;
        let Q = Number.parseInt(A, 10);
        if (Number.isInteger(Q)) return Q > 0 ? Q * 1000 : -1;
        let B = new Date(A).getTime() - Date.now();
        if (B >= 0) return B;
        return 0
    }
    oV2.parseRetryAfterToMills = xz5
});
var ZK2 = U((BK2) => {
    Object.defineProperty(BK2, "__esModule", {
        value: !0
    });
    BK2.compressAndSend = BK2.sendWithHttp = void 0;
    var bz5 = UA("zlib"),
        fz5 = UA("stream"),
        AK2 = eV2(),
        hz5 = S91();

    function gz5(A, Q, B, G, Z, I) {
        let Y = new URL(Q.url),
            J = {
                hostname: Y.hostname,
                port: Y.port,
                path: Y.pathname,
                method: "POST",
                headers: {
                    ...Q.headers()
                },
                agent: B
            },
            W = A(J, (X) => {
                let F = [];
                X.on("data", (V) => F.push(V)), X.on("end", () => {
                    if (X.statusCode && X.statusCode < 299) Z({
                        status: "success",
                        data: Buffer.concat(F)
                    });
                    else if (X.statusCode && (0, AK2.isExportRetryable)(X.statusCode)) Z({
                        status: "retryable",
                        retryInMillis: (0, AK2.parseRetryAfterToMills)(X.headers["retry-after"])
                    });
                    else {
                        let V = new hz5.OTLPExporterError(X.statusMessage, X.statusCode, Buffer.concat(F).toString());
                        Z({
                            status: "failure",
                            error: V
                        })
                    }
                })
            });
        W.setTimeout(I, () => {
            W.destroy(), Z({
                status: "failure",
                error: Error("Request Timeout")
            })
        }), W.on("error", (X) => {
            Z({
                status: "failure",
                error: X
            })
        }), QK2(W, Q.compression, G, (X) => {
            Z({
                status: "failure",
                error: X
            })
        })
    }
    BK2.sendWithHttp = gz5;

    function QK2(A, Q, B, G) {
        let Z = uz5(B);
        if (Q === "gzip") A.setHeader("Content-Encoding", "gzip"), Z = Z.on("error", G).pipe(bz5.createGzip()).on("error", G);
        Z.pipe(A).on("error", G)
    }
    BK2.compressAndSend = QK2;

    function uz5(A) {
        let Q = new fz5.Readable;
        return Q.push(A), Q.push(null), Q
    }
});
var WK2 = U((YK2) => {
    Object.defineProperty(YK2, "__esModule", {
        value: !0
    });
    YK2.createHttpExporterTransport = void 0;
    var dz5 = ZK2();
    class IK2 {
        _parameters;
        _utils = null;
        constructor(A) {
            this._parameters = A
        }
        async send(A, Q) {
            let {
                agent: B,
                request: G
            } = await this._loadUtils();
            return new Promise((Z) => {
                (0, dz5.sendWithHttp)(G, this._parameters, B, A, (I) => {
                    Z(I)
                }, Q)
            })
        }
        shutdown() {}
        async _loadUtils() {
            let A = this._utils;
            if (A === null) {
                let Q = new URL(this._parameters.url).protocol,
                    [B, G] = await Promise.all([this._parameters.agentFactory(Q), cz5(Q)]);
                A = this._utils = {
                    agent: B,
                    request: G
                }
            }
            return A
        }
    }
    async function cz5(A) {
        let Q = A === "http:" ? import("http") : import("https"),
            {
                request: B
            } = await Q;
        return B
    }

    function pz5(A) {
        return new IK2(A)
    }
    YK2.createHttpExporterTransport = pz5
});
var DK2 = U((VK2) => {
    Object.defineProperty(VK2, "__esModule", {
        value: !0
    });
    VK2.createRetryingTransport = void 0;
    var lz5 = 5,
        iz5 = 1000,
        nz5 = 5000,
        az5 = 1.5,
        XK2 = 0.2;

    function sz5() {
        return Math.random() * (2 * XK2) - XK2
    }
    class FK2 {
        _transport;
        constructor(A) {
            this._transport = A
        }
        retry(A, Q, B) {
            return new Promise((G, Z) => {
                setTimeout(() => {
                    this._transport.send(A, Q).then(G, Z)
                }, B)
            })
        }
        async send(A, Q) {
            let B = Date.now() + Q,
                G = await this._transport.send(A, Q),
                Z = lz5,
                I = iz5;
            while (G.status === "retryable" && Z > 0) {
                Z--;
                let Y = Math.max(Math.min(I, nz5) + sz5(), 0);
                I = I * az5;
                let J = G.retryInMillis ?? Y,
                    W = B - Date.now();
                if (J > W) return G;
                G = await this.retry(A, W, J)
            }
            return G
        }
        shutdown() {
            return this._transport.shutdown()
        }
    }

    function rz5(A) {
        return new FK2(A.transport)
    }
    VK2.createRetryingTransport = rz5
});
var EK2 = U((HK2) => {
    Object.defineProperty(HK2, "__esModule", {
        value: !0
    });
    HK2.createOtlpHttpExportDelegate = void 0;
    var oz5 = qQ0(),
        tz5 = WK2(),
        ez5 = wQ0(),
        AU5 = DK2();

    function QU5(A, Q) {
        return (0, oz5.createOtlpExportDelegate)({
            transport: (0, AU5.createRetryingTransport)({
                transport: (0, tz5.createHttpExporterTransport)(A)
            }),
            serializer: Q,
            promiseHandler: (0, ez5.createBoundedQueueExportPromiseHandler)(A)
        }, {
            timeout: A.timeoutMillis
        })
    }
    HK2.createOtlpHttpExportDelegate = QU5
});
var ZB0 = U((wK2) => {
    Object.defineProperty(wK2, "__esModule", {
        value: !0
    });
    wK2.getSharedConfigurationFromEnvironment = void 0;
    var $K2 = W9();

    function zK2(A) {
        let Q = process.env[A]?.trim();
        if (Q != null && Q !== "") {
            let B = Number(Q);
            if (Number.isFinite(B) && B > 0) return B;
            $K2.diag.warn(`Configuration: ${A} is invalid, expected number greater than 0 (actual: ${Q})`)
        }
        return
    }

    function BU5(A) {
        let Q = zK2(`OTEL_EXPORTER_OTLP_${A}_TIMEOUT`),
            B = zK2("OTEL_EXPORTER_OTLP_TIMEOUT");
        return Q ?? B
    }

    function UK2(A) {
        let Q = process.env[A]?.trim();
        if (Q === "") return;
        if (Q == null || Q === "none" || Q === "gzip") return Q;
        $K2.diag.warn(`Configuration: ${A} is invalid, expected 'none' or 'gzip' (actual: '${Q}')`);
        return
    }

    function GU5(A) {
        let Q = UK2(`OTEL_EXPORTER_OTLP_${A}_COMPRESSION`),
            B = UK2("OTEL_EXPORTER_OTLP_COMPRESSION");
        return Q ?? B
    }

    function ZU5(A) {
        return {
            timeoutMillis: BU5(A),
            compression: GU5(A)
        }
    }
    wK2.getSharedConfigurationFromEnvironment = ZU5
});
var MK2 = U((NK2) => {
    Object.defineProperty(NK2, "__esModule", {
        value: !0
    });
    NK2.getHttpConfigurationFromEnvironment = void 0;
    var ji = t6(),
        IB0 = W9(),
        IU5 = ZB0(),
        YU5 = cMA();

    function JU5(A) {
        let Q = (0, ji.getStringFromEnv)(`OTEL_EXPORTER_OTLP_${A}_HEADERS`),
            B = (0, ji.getStringFromEnv)("OTEL_EXPORTER_OTLP_HEADERS"),
            G = (0, ji.parseKeyPairsIntoRecord)(Q),
            Z = (0, ji.parseKeyPairsIntoRecord)(B);
        if (Object.keys(G).length === 0 && Object.keys(Z).length === 0) return;
        return Object.assign({}, (0, ji.parseKeyPairsIntoRecord)(B), (0, ji.parseKeyPairsIntoRecord)(Q))
    }

    function WU5(A) {
        try {
            return new URL(A).toString()
        } catch {
            IB0.diag.warn(`Configuration: Could not parse environment-provided export URL: '${A}', falling back to undefined`);
            return
        }
    }

    function XU5(A, Q) {
        try {
            new URL(A)
        } catch {
            IB0.diag.warn(`Configuration: Could not parse environment-provided export URL: '${A}', falling back to undefined`);
            return
        }
        if (!A.endsWith("/")) A = A + "/";
        A += Q;
        try {
            new URL(A)
        } catch {
            IB0.diag.warn(`Configuration: Provided URL appended with '${Q}' is not a valid URL, using 'undefined' instead of '${A}'`);
            return
        }
        return A
    }

    function FU5(A) {
        let Q = (0, ji.getStringFromEnv)("OTEL_EXPORTER_OTLP_ENDPOINT");
        if (Q === void 0) return;
        return XU5(Q, A)
    }

    function VU5(A) {
        let Q = (0, ji.getStringFromEnv)(`OTEL_EXPORTER_OTLP_${A}_ENDPOINT`);
        if (Q === void 0) return;
        return WU5(Q)
    }

    function KU5(A, Q) {
        return {
            ...(0, IU5.getSharedConfigurationFromEnvironment)(A),
            url: VU5(A) ?? FU5(Q),
            headers: (0, YU5.wrapStaticHeadersInFunction)(JU5(A))
        }
    }
    NK2.getHttpConfigurationFromEnvironment = KU5
});
var TK2 = U((OK2) => {
    Object.defineProperty(OK2, "__esModule", {
        value: !0
    });
    OK2.convertLegacyHttpOptions = void 0;
    var YB0 = GB0(),
        DU5 = MK2(),
        HU5 = W9(),
        CU5 = cMA();

    function EU5(A) {
        if (typeof A.httpAgentOptions === "function") return A.httpAgentOptions;
        let Q = A.httpAgentOptions;
        if (A.keepAlive != null) Q = {
            keepAlive: A.keepAlive,
            ...Q
        };
        if (Q != null) return (0, YB0.httpAgentFactoryFromOptions)(Q);
        else return
    }

    function zU5(A, Q, B, G) {
        if (A.metadata) HU5.diag.warn("Metadata cannot be set when using http");
        return (0, YB0.mergeOtlpHttpConfigurationWithDefaults)({
            url: A.url,
            headers: (0, CU5.wrapStaticHeadersInFunction)(A.headers),
            concurrencyLimit: A.concurrencyLimit,
            timeoutMillis: A.timeoutMillis,
            compression: A.compression,
            agentFactory: EU5(A)
        }, (0, DU5.getHttpConfigurationFromEnvironment)(Q, B), (0, YB0.getHttpConfigurationDefaults)(G, B))
    }
    OK2.convertLegacyHttpOptions = zU5
});
var Si = U((xYA) => {
    Object.defineProperty(xYA, "__esModule", {
        value: !0
    });
    xYA.convertLegacyHttpOptions = xYA.getSharedConfigurationFromEnvironment = xYA.createOtlpHttpExportDelegate = xYA.httpAgentFactoryFromOptions = void 0;
    var UU5 = GB0();
    Object.defineProperty(xYA, "httpAgentFactoryFromOptions", {
        enumerable: !0,
        get: function() {
            return UU5.httpAgentFactoryFromOptions
        }
    });
    var $U5 = EK2();
    Object.defineProperty(xYA, "createOtlpHttpExportDelegate", {
        enumerable: !0,
        get: function() {
            return $U5.createOtlpHttpExportDelegate
        }
    });
    var wU5 = ZB0();
    Object.defineProperty(xYA, "getSharedConfigurationFromEnvironment", {
        enumerable: !0,
        get: function() {
            return wU5.getSharedConfigurationFromEnvironment
        }
    });
    var qU5 = TK2();
    Object.defineProperty(xYA, "convertLegacyHttpOptions", {
        enumerable: !0,
        get: function() {
            return qU5.convertLegacyHttpOptions
        }
    })
});
var kK2 = U((SK2) => {
    Object.defineProperty(SK2, "__esModule", {
        value: !0
    });
    SK2.OTLPMetricExporter = void 0;
    var LU5 = MQ0(),
        MU5 = pk(),
        OU5 = cV2(),
        PK2 = Si(),
        RU5 = {
            "User-Agent": `OTel-OTLP-Exporter-JavaScript/${OU5.VERSION}`
        };
    class jK2 extends LU5.OTLPMetricExporterBase {
        constructor(A) {
            super((0, PK2.createOtlpHttpExportDelegate)((0, PK2.convertLegacyHttpOptions)(A ?? {}, "METRICS", "v1/metrics", {
                ...RU5,
                "Content-Type": "application/json"
            }), MU5.JsonMetricsSerializer), A)
        }
    }
    SK2.OTLPMetricExporter = jK2
});
var yK2 = U((JB0) => {
    Object.defineProperty(JB0, "__esModule", {
        value: !0
    });
    JB0.OTLPMetricExporter = void 0;
    var TU5 = kK2();
    Object.defineProperty(JB0, "OTLPMetricExporter", {
        enumerable: !0,
        get: function() {
            return TU5.OTLPMetricExporter
        }
    })
});
var xK2 = U((WB0) => {
    Object.defineProperty(WB0, "__esModule", {
        value: !0
    });
    WB0.OTLPMetricExporter = void 0;
    var jU5 = yK2();
    Object.defineProperty(WB0, "OTLPMetricExporter", {
        enumerable: !0,
        get: function() {
            return jU5.OTLPMetricExporter
        }
    })
});
var c91 = U((_i) => {
    Object.defineProperty(_i, "__esModule", {
        value: !0
    });
    _i.OTLPMetricExporterBase = _i.LowMemoryTemporalitySelector = _i.DeltaTemporalitySelector = _i.CumulativeTemporalitySelector = _i.AggregationTemporalityPreference = _i.OTLPMetricExporter = void 0;
    var _U5 = xK2();
    Object.defineProperty(_i, "OTLPMetricExporter", {
        enumerable: !0,
        get: function() {
            return _U5.OTLPMetricExporter
        }
    });
    var kU5 = UQ0();
    Object.defineProperty(_i, "AggregationTemporalityPreference", {
        enumerable: !0,
        get: function() {
            return kU5.AggregationTemporalityPreference
        }
    });
    var d91 = MQ0();
    Object.defineProperty(_i, "CumulativeTemporalitySelector", {
        enumerable: !0,
        get: function() {
            return d91.CumulativeTemporalitySelector
        }
    });
    Object.defineProperty(_i, "DeltaTemporalitySelector", {
        enumerable: !0,
        get: function() {
            return d91.DeltaTemporalitySelector
        }
    });
    Object.defineProperty(_i, "LowMemoryTemporalitySelector", {
        enumerable: !0,
        get: function() {
            return d91.LowMemoryTemporalitySelector
        }
    });
    Object.defineProperty(_i, "OTLPMetricExporterBase", {
        enumerable: !0,
        get: function() {
            return d91.OTLPMetricExporterBase
        }
    })
});
var fK2 = U((vK2) => {
    Object.defineProperty(vK2, "__esModule", {
        value: !0
    });
    vK2.VERSION = void 0;
    vK2.VERSION = "0.204.0"
});
var dK2 = U((uK2) => {
    Object.defineProperty(uK2, "__esModule", {
        value: !0
    });
    uK2.OTLPMetricExporter = void 0;
    var xU5 = c91(),
        vU5 = pk(),
        bU5 = fK2(),
        hK2 = Si();
    class gK2 extends xU5.OTLPMetricExporterBase {
        constructor(A) {
            super((0, hK2.createOtlpHttpExportDelegate)((0, hK2.convertLegacyHttpOptions)(A ?? {}, "METRICS", "v1/metrics", {
                "User-Agent": `OTel-OTLP-Exporter-JavaScript/${bU5.VERSION}`,
                "Content-Type": "application/x-protobuf"
            }), vU5.ProtobufMetricsSerializer), A)
        }
    }
    uK2.OTLPMetricExporter = gK2
});
var cK2 = U((XB0) => {
    Object.defineProperty(XB0, "__esModule", {
        value: !0
    });
    XB0.OTLPMetricExporter = void 0;
    var fU5 = dK2();
    Object.defineProperty(XB0, "OTLPMetricExporter", {
        enumerable: !0,
        get: function() {
            return fU5.OTLPMetricExporter
        }
    })
});
var pK2 = U((FB0) => {
    Object.defineProperty(FB0, "__esModule", {
        value: !0
    });
    FB0.OTLPMetricExporter = void 0;
    var gU5 = cK2();
    Object.defineProperty(FB0, "OTLPMetricExporter", {
        enumerable: !0,
        get: function() {
            return gU5.OTLPMetricExporter
        }
    })
});
var lK2 = U((VB0) => {
    Object.defineProperty(VB0, "__esModule", {
        value: !0
    });
    VB0.OTLPMetricExporter = void 0;
    var mU5 = pK2();
    Object.defineProperty(VB0, "OTLPMetricExporter", {
        enumerable: !0,
        get: function() {
            return mU5.OTLPMetricExporter
        }
    })
});
var K6 = U((sK2) => {
    Object.defineProperty(sK2, "__esModule", {
        value: !0
    });
    sK2.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = sK2.DEFAULT_MAX_SEND_MESSAGE_LENGTH = sK2.Propagate = sK2.LogVerbosity = sK2.Status = void 0;
    var iK2;
    (function(A) {
        A[A.OK = 0] = "OK", A[A.CANCELLED = 1] = "CANCELLED", A[A.UNKNOWN = 2] = "UNKNOWN", A[A.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", A[A.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", A[A.NOT_FOUND = 5] = "NOT_FOUND", A[A.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", A[A.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", A[A.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", A[A.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", A[A.ABORTED = 10] = "ABORTED", A[A.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", A[A.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", A[A.INTERNAL = 13] = "INTERNAL", A[A.UNAVAILABLE = 14] = "UNAVAILABLE", A[A.DATA_LOSS = 15] = "DATA_LOSS", A[A.UNAUTHENTICATED = 16] = "UNAUTHENTICATED"
    })(iK2 || (sK2.Status = iK2 = {}));
    var nK2;
    (function(A) {
        A[A.DEBUG = 0] = "DEBUG", A[A.INFO = 1] = "INFO", A[A.ERROR = 2] = "ERROR", A[A.NONE = 3] = "NONE"
    })(nK2 || (sK2.LogVerbosity = nK2 = {}));
    var aK2;
    (function(A) {
        A[A.DEADLINE = 1] = "DEADLINE", A[A.CENSUS_STATS_CONTEXT = 2] = "CENSUS_STATS_CONTEXT", A[A.CENSUS_TRACING_CONTEXT = 4] = "CENSUS_TRACING_CONTEXT", A[A.CANCELLATION = 8] = "CANCELLATION", A[A.DEFAULTS = 65535] = "DEFAULTS"
    })(aK2 || (sK2.Propagate = aK2 = {}));
    sK2.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
    sK2.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4194304
});
var KB0 = U((ugG, nU5) => {
    nU5.exports = {
        name: "@grpc/grpc-js",
        version: "1.14.0",
        description: "gRPC Library for Node - pure JS implementation",
        homepage: "https://grpc.io/",
        repository: "https://github.com/grpc/grpc-node/tree/master/packages/grpc-js",
        main: "build/src/index.js",
        engines: {
            node: ">=12.10.0"
        },
        keywords: [],
        author: {
            name: "Google Inc."
        },
        types: "build/src/index.d.ts",
        license: "Apache-2.0",
        devDependencies: {
            "@grpc/proto-loader": "file:../proto-loader",
            "@types/gulp": "^4.0.17",
            "@types/gulp-mocha": "0.0.37",
            "@types/lodash": "^4.14.202",
            "@types/mocha": "^10.0.6",
            "@types/ncp": "^2.0.8",
            "@types/node": ">=20.11.20",
            "@types/pify": "^5.0.4",
            "@types/semver": "^7.5.8",
            "@typescript-eslint/eslint-plugin": "^7.1.0",
            "@typescript-eslint/parser": "^7.1.0",
            "@typescript-eslint/typescript-estree": "^7.1.0",
            "clang-format": "^1.8.0",
            eslint: "^8.42.0",
            "eslint-config-prettier": "^8.8.0",
            "eslint-plugin-node": "^11.1.0",
            "eslint-plugin-prettier": "^4.2.1",
            execa: "^2.0.3",
            gulp: "^4.0.2",
            "gulp-mocha": "^6.0.0",
            lodash: "^4.17.21",
            madge: "^5.0.1",
            "mocha-jenkins-reporter": "^0.4.1",
            ncp: "^2.0.0",
            pify: "^4.0.1",
            prettier: "^2.8.8",
            rimraf: "^3.0.2",
            semver: "^7.6.0",
            "ts-node": "^10.9.2",
            typescript: "^5.3.3"
        },
        contributors: [{
            name: "Google Inc."
        }],
        scripts: {
            build: "npm run compile",
            clean: "rimraf ./build",
            compile: "tsc -p .",
            format: 'clang-format -i -style="{Language: JavaScript, BasedOnStyle: Google, ColumnLimit: 80}" src/*.ts test/*.ts',
            lint: "eslint src/*.ts test/*.ts",
            prepare: "npm run copy-protos && npm run generate-types && npm run generate-test-types && npm run compile",
            test: "gulp test",
            check: "npm run lint",
            fix: "eslint --fix src/*.ts test/*.ts",
            pretest: "npm run generate-types && npm run generate-test-types && npm run compile",
            posttest: "npm run check && madge -c ./build/src",
            "generate-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --includeDirs proto/ --include-dirs proto/ proto/xds/ proto/protoc-gen-validate/ -O src/generated/ --grpcLib ../index channelz.proto xds/service/orca/v3/orca.proto",
            "generate-test-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --include-dirs test/fixtures/ -O test/generated/ --grpcLib ../../src/index test_service.proto echo_service.proto",
            "copy-protos": "node ./copy-protos"
        },
        dependencies: {
            "@grpc/proto-loader": "^0.8.0",
            "@js-sdsl/ordered-map": "^4.4.2"
        },
        files: ["src/**/*.ts", "build/src/**/*.{js,d.ts,js.map}", "proto/**/*.proto", "proto/**/LICENSE", "LICENSE", "deps/envoy-api/envoy/api/v2/**/*.proto", "deps/envoy-api/envoy/config/**/*.proto", "deps/envoy-api/envoy/service/**/*.proto", "deps/envoy-api/envoy/type/**/*.proto", "deps/udpa/udpa/**/*.proto", "deps/googleapis/google/api/*.proto", "deps/googleapis/google/rpc/*.proto", "deps/protoc-gen-validate/validate/**/*.proto"]
    }
});
var XZ = U((eK2) => {
    var DB0, HB0, CB0, EB0;
    Object.defineProperty(eK2, "__esModule", {
        value: !0
    });
    eK2.log = eK2.setLoggerVerbosity = eK2.setLogger = eK2.getLogger = void 0;
    eK2.trace = Z$5;
    eK2.isTracerEnabled = tK2;
    var ki = K6(),
        aU5 = UA("process"),
        sU5 = KB0().version,
        rU5 = {
            error: (A, ...Q) => {
                console.error("E " + A, ...Q)
            },
            info: (A, ...Q) => {
                console.error("I " + A, ...Q)
            },
            debug: (A, ...Q) => {
                console.error("D " + A, ...Q)
            }
        },
        h1A = rU5,
        vYA = ki.LogVerbosity.ERROR,
        oU5 = (HB0 = (DB0 = process.env.GRPC_NODE_VERBOSITY) !== null && DB0 !== void 0 ? DB0 : process.env.GRPC_VERBOSITY) !== null && HB0 !== void 0 ? HB0 : "";
    switch (oU5.toUpperCase()) {
        case "DEBUG":
            vYA = ki.LogVerbosity.DEBUG;
            break;
        case "INFO":
            vYA = ki.LogVerbosity.INFO;
            break;
        case "ERROR":
            vYA = ki.LogVerbosity.ERROR;
            break;
        case "NONE":
            vYA = ki.LogVerbosity.NONE;
            break;
        default:
    }
    var tU5 = () => {
        return h1A
    };
    eK2.getLogger = tU5;
    var eU5 = (A) => {
        h1A = A
    };
    eK2.setLogger = eU5;
    var A$5 = (A) => {
        vYA = A
    };
    eK2.setLoggerVerbosity = A$5;
    var Q$5 = (A, ...Q) => {
        let B;
        if (A >= vYA) {
            switch (A) {
                case ki.LogVerbosity.DEBUG:
                    B = h1A.debug;
                    break;
                case ki.LogVerbosity.INFO:
                    B = h1A.info;
                    break;
                case ki.LogVerbosity.ERROR:
                    B = h1A.error;
                    break
            }
            if (!B) B = h1A.error;
            if (B) B.bind(h1A)(...Q)
        }
    };
    eK2.log = Q$5;
    var B$5 = (EB0 = (CB0 = process.env.GRPC_NODE_TRACE) !== null && CB0 !== void 0 ? CB0 : process.env.GRPC_TRACE) !== null && EB0 !== void 0 ? EB0 : "",
        zB0 = new Set,
        oK2 = new Set;
    for (let A of B$5.split(","))
        if (A.startsWith("-")) oK2.add(A.substring(1));
        else zB0.add(A);
    var G$5 = zB0.has("all");

    function Z$5(A, Q, B) {
        if (tK2(Q)) eK2.log(A, new Date().toISOString() + " | v" + sU5 + " " + aU5.pid + " | " + Q + " | " + B)
    }

    function tK2(A) {
        return !oK2.has(A) && (G$5 || zB0.has(A))
    }
});
var p91 = U((AD2) => {
    Object.defineProperty(AD2, "__esModule", {
        value: !0
    });
    AD2.getErrorMessage = F$5;
    AD2.getErrorCode = V$5;

    function F$5(A) {
        if (A instanceof Error) return A.message;
        else return String(A)
    }

    function V$5(A) {
        if (typeof A === "object" && A !== null && "code" in A && typeof A.code === "number") return A.code;
        else return null
    }
});
var BK = U((GD2) => {
    Object.defineProperty(GD2, "__esModule", {
        value: !0
    });
    GD2.Metadata = void 0;
    var H$5 = XZ(),
        C$5 = K6(),
        E$5 = p91(),
        z$5 = /^[:0-9a-z_.-]+$/,
        U$5 = /^[ -~]*$/;

    function $$5(A) {
        return z$5.test(A)
    }

    function w$5(A) {
        return U$5.test(A)
    }

    function BD2(A) {
        return A.endsWith("-bin")
    }

    function q$5(A) {
        return !A.startsWith("grpc-")
    }

    function l91(A) {
        return A.toLowerCase()
    }

    function QD2(A, Q) {
        if (!$$5(A)) throw Error('Metadata key "' + A + '" contains illegal characters');
        if (Q !== null && Q !== void 0)
            if (BD2(A)) {
                if (!Buffer.isBuffer(Q)) throw Error("keys that end with '-bin' must have Buffer values")
            } else {
                if (Buffer.isBuffer(Q)) throw Error("keys that don't end with '-bin' must have String values");
                if (!w$5(Q)) throw Error('Metadata string value "' + Q + '" contains illegal characters')
            }
    }
    class i91 {
        constructor(A = {}) {
            this.internalRepr = new Map, this.opaqueData = new Map, this.options = A
        }
        set(A, Q) {
            A = l91(A), QD2(A, Q), this.internalRepr.set(A, [Q])
        }
        add(A, Q) {
            A = l91(A), QD2(A, Q);
            let B = this.internalRepr.get(A);
            if (B === void 0) this.internalRepr.set(A, [Q]);
            else B.push(Q)
        }
        remove(A) {
            A = l91(A), this.internalRepr.delete(A)
        }
        get(A) {
            return A = l91(A), this.internalRepr.get(A) || []
        }
        getMap() {
            let A = {};
            for (let [Q, B] of this.internalRepr)
                if (B.length > 0) {
                    let G = B[0];
                    A[Q] = Buffer.isBuffer(G) ? Buffer.from(G) : G
                } return A
        }
        clone() {
            let A = new i91(this.options),
                Q = A.internalRepr;
            for (let [B, G] of this.internalRepr) {
                let Z = G.map((I) => {
                    if (Buffer.isBuffer(I)) return Buffer.from(I);
                    else return I
                });
                Q.set(B, Z)
            }
            return A
        }
        merge(A) {
            for (let [Q, B] of A.internalRepr) {
                let G = (this.internalRepr.get(Q) || []).concat(B);
                this.internalRepr.set(Q, G)
            }
        }
        setOptions(A) {
            this.options = A
        }
        getOptions() {
            return this.options
        }
        toHttp2Headers() {
            let A = {};
            for (let [Q, B] of this.internalRepr) {
                if (Q.startsWith(":")) continue;
                A[Q] = B.map(N$5)
            }
            return A
        }
        toJSON() {
            let A = {};
            for (let [Q, B] of this.internalRepr) A[Q] = B;
            return A
        }
        setOpaque(A, Q) {
            this.opaqueData.set(A, Q)
        }
        getOpaque(A) {
            return this.opaqueData.get(A)
        }
        static fromHttp2Headers(A) {
            let Q = new i91;
            for (let B of Object.keys(A)) {
                if (B.charAt(0) === ":") continue;
                let G = A[B];
                try {
                    if (BD2(B)) {
                        if (Array.isArray(G)) G.forEach((Z) => {
                            Q.add(B, Buffer.from(Z, "base64"))
                        });
                        else if (G !== void 0)
                            if (q$5(B)) G.split(",").forEach((Z) => {
                                Q.add(B, Buffer.from(Z.trim(), "base64"))
                            });
                            else Q.add(B, Buffer.from(G, "base64"))
                    } else if (Array.isArray(G)) G.forEach((Z) => {
                        Q.add(B, Z)
                    });
                    else if (G !== void 0) Q.add(B, G)
                } catch (Z) {
                    let I = `Failed to add metadata entry ${B}: ${G}. ${(0,E$5.getErrorMessage)(Z)}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
                    (0, H$5.log)(C$5.LogVerbosity.ERROR, I)
                }
            }
            return Q
        }
    }
    GD2.Metadata = i91;
    var N$5 = (A) => {
        return Buffer.isBuffer(A) ? A.toString("base64") : A
    }
});
var a91 = U((ID2) => {
    Object.defineProperty(ID2, "__esModule", {
        value: !0
    });
    ID2.CallCredentials = void 0;
    var $B0 = BK();

    function L$5(A) {
        return "getRequestHeaders" in A && typeof A.getRequestHeaders === "function"
    }
    class bYA {
        static createFromMetadataGenerator(A) {
            return new wB0(A)
        }
        static createFromGoogleCredential(A) {
            return bYA.createFromMetadataGenerator((Q, B) => {
                let G;
                if (L$5(A)) G = A.getRequestHeaders(Q.service_url);
                else G = new Promise((Z, I) => {
                    A.getRequestMetadata(Q.service_url, (Y, J) => {
                        if (Y) {
                            I(Y);
                            return
                        }
                        if (!J) {
                            I(Error("Headers not set by metadata plugin"));
                            return
                        }
                        Z(J)
                    })
                });
                G.then((Z) => {
                    let I = new $B0.Metadata;
                    for (let Y of Object.keys(Z)) I.add(Y, Z[Y]);
                    B(null, I)
                }, (Z) => {
                    B(Z)
                })
            })
        }
        static createEmpty() {
            return new qB0
        }
    }
    ID2.CallCredentials = bYA;
    class n91 extends bYA {
        constructor(A) {
            super();
            this.creds = A
        }
        async generateMetadata(A) {
            let Q = new $B0.Metadata,
                B = await Promise.all(this.creds.map((G) => G.generateMetadata(A)));
            for (let G of B) Q.merge(G);
            return Q
        }
        compose(A) {
            return new n91(this.creds.concat([A]))
        }
        _equals(A) {
            if (this === A) return !0;
            if (A instanceof n91) return this.creds.every((Q, B) => Q._equals(A.creds[B]));
            else return !1
        }
    }
    class wB0 extends bYA {
        constructor(A) {
            super();