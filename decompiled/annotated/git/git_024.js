/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: git_024.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (30次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 24/34
 * Lines: 297472 - 298970 (1499 lines)
 * Original file: cli.js
 */

            return B
        }
    }
    class TW2 {
        _allowedAttributeNames;
        constructor(A) {
            this._allowedAttributeNames = A
        }
        process(A, Q) {
            let B = {};
            return Object.keys(A).filter((G) => this._allowedAttributeNames.includes(G)).forEach((G) => B[G] = A[G]), B
        }
    }
    class PW2 {
        _deniedAttributeNames;
        constructor(A) {
            this._deniedAttributeNames = A
        }
        process(A, Q) {
            let B = {};
            return Object.keys(A).filter((G) => !this._deniedAttributeNames.includes(G)).forEach((G) => B[G] = A[G]), B
        }
    }

    function _H5() {
        return vH5
    }
    jW2.createNoopAttributesProcessor = _H5;

    function kH5(A) {
        return new RW2(A)
    }
    jW2.createMultiAttributesProcessor = kH5;

    function yH5(A) {
        return new TW2(A)
    }
    jW2.createAllowListAttributesProcessor = yH5;

    function xH5(A) {
        return new PW2(A)
    }
    jW2.createDenyListAttributesProcessor = xH5;
    var vH5 = new OW2
});
var xW2 = U((kW2) => {
    Object.defineProperty(kW2, "__esModule", {
        value: !0
    });
    kW2.MeterSharedState = void 0;
    var gH5 = gMA(),
        uH5 = kJ2(),
        mH5 = GP(),
        dH5 = nJ2(),
        cH5 = ZW2(),
        pH5 = WW2(),
        lH5 = wW2(),
        iH5 = MW2(),
        nH5 = T91();
    class _W2 {
        _meterProviderSharedState;
        _instrumentationScope;
        metricStorageRegistry = new cH5.MetricStorageRegistry;
        observableRegistry = new lH5.ObservableRegistry;
        meter;
        constructor(A, Q) {
            this._meterProviderSharedState = A, this._instrumentationScope = Q, this.meter = new uH5.Meter(this)
        }
        registerMetricStorage(A) {
            let Q = this._registerMetricStorage(A, iH5.SyncMetricStorage);
            if (Q.length === 1) return Q[0];
            return new pH5.MultiMetricStorage(Q)
        }
        registerAsyncMetricStorage(A) {
            return this._registerMetricStorage(A, dH5.AsyncMetricStorage)
        }
        async collect(A, Q, B) {
            let G = await this.observableRegistry.observe(Q, B?.timeoutMillis),
                Z = this.metricStorageRegistry.getStorages(A);
            if (Z.length === 0) return null;
            let I = Z.map((Y) => {
                return Y.collect(A, Q)
            }).filter(mH5.isNotNullish);
            if (I.length === 0) return {
                errors: G
            };
            return {
                scopeMetrics: {
                    scope: this._instrumentationScope,
                    metrics: I
                },
                errors: G
            }
        }
        _registerMetricStorage(A, Q) {
            let G = this._meterProviderSharedState.viewRegistry.findViews(A, this._instrumentationScope).map((Z) => {
                let I = (0, gH5.createInstrumentDescriptorWithView)(Z, A),
                    Y = this.metricStorageRegistry.findOrUpdateCompatibleStorage(I);
                if (Y != null) return Y;
                let J = Z.aggregation.createAggregator(I),
                    W = new Q(I, J, Z.attributesProcessor, this._meterProviderSharedState.metricCollectors, Z.aggregationCardinalityLimit);
                return this.metricStorageRegistry.register(W), W
            });
            if (G.length === 0) {
                let I = this._meterProviderSharedState.selectAggregations(A.type).map(([Y, J]) => {
                    let W = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(Y, A);
                    if (W != null) return W;
                    let X = J.createAggregator(A),
                        F = Y.selectCardinalityLimit(A.type),
                        V = new Q(A, X, (0, nH5.createNoopAttributesProcessor)(), [Y], F);
                    return this.metricStorageRegistry.registerForCollector(Y, V), V
                });
                G = G.concat(I)
            }
            return G
        }
    }
    kW2.MeterSharedState = _W2
});
var hW2 = U((bW2) => {
    Object.defineProperty(bW2, "__esModule", {
        value: !0
    });
    bW2.MeterProviderSharedState = void 0;
    var aH5 = GP(),
        sH5 = CJ2(),
        rH5 = xW2(),
        oH5 = fMA();
    class vW2 {
        resource;
        viewRegistry = new sH5.ViewRegistry;
        metricCollectors = [];
        meterSharedStates = new Map;
        constructor(A) {
            this.resource = A
        }
        getMeterSharedState(A) {
            let Q = (0, aH5.instrumentationScopeId)(A),
                B = this.meterSharedStates.get(Q);
            if (B == null) B = new rH5.MeterSharedState(this, A), this.meterSharedStates.set(Q, B);
            return B
        }
        selectAggregations(A) {
            let Q = [];
            for (let B of this.metricCollectors) Q.push([B, (0, oH5.toAggregation)(B.selectAggregation(A))]);
            return Q
        }
    }
    bW2.MeterProviderSharedState = vW2
});
var dW2 = U((uW2) => {
    Object.defineProperty(uW2, "__esModule", {
        value: !0
    });
    uW2.MetricCollector = void 0;
    var tH5 = t6();
    class gW2 {
        _sharedState;
        _metricReader;
        constructor(A, Q) {
            this._sharedState = A, this._metricReader = Q
        }
        async collect(A) {
            let Q = (0, tH5.millisToHrTime)(Date.now()),
                B = [],
                G = [],
                Z = Array.from(this._sharedState.meterSharedStates.values()).map(async (I) => {
                    let Y = await I.collect(this, Q, A);
                    if (Y?.scopeMetrics != null) B.push(Y.scopeMetrics);
                    if (Y?.errors != null) G.push(...Y.errors)
                });
            return await Promise.all(Z), {
                resourceMetrics: {
                    resource: this._sharedState.resource,
                    scopeMetrics: B
                },
                errors: G
            }
        }
        async forceFlush(A) {
            await this._metricReader.forceFlush(A)
        }
        async shutdown(A) {
            await this._metricReader.shutdown(A)
        }
        selectAggregationTemporality(A) {
            return this._metricReader.selectAggregationTemporality(A)
        }
        selectAggregation(A) {
            return this._metricReader.selectAggregation(A)
        }
        selectCardinalityLimit(A) {
            return this._metricReader.selectCardinalityLimit?.(A) ?? 2000
        }
    }
    uW2.MetricCollector = gW2
});
var P91 = U((pW2) => {
    Object.defineProperty(pW2, "__esModule", {
        value: !0
    });
    pW2.ExactPredicate = pW2.PatternPredicate = void 0;
    var eH5 = /[\^$\\.+?()[\]{}|]/g;
    class CQ0 {
        _matchAll;
        _regexp;
        constructor(A) {
            if (A === "*") this._matchAll = !0, this._regexp = /.*/;
            else this._matchAll = !1, this._regexp = new RegExp(CQ0.escapePattern(A))
        }
        match(A) {
            if (this._matchAll) return !0;
            return this._regexp.test(A)
        }
        static escapePattern(A) {
            return `^${A.replace(eH5,"\\$&").replace("*",".*")}$`
        }
        static hasWildcard(A) {
            return A.includes("*")
        }
    }
    pW2.PatternPredicate = CQ0;
    class cW2 {
        _matchAll;
        _pattern;
        constructor(A) {
            this._matchAll = A === void 0, this._pattern = A
        }
        match(A) {
            if (this._matchAll) return !0;
            if (A === this._pattern) return !0;
            return !1
        }
    }
    pW2.ExactPredicate = cW2
});
var rW2 = U((aW2) => {
    Object.defineProperty(aW2, "__esModule", {
        value: !0
    });
    aW2.InstrumentSelector = void 0;
    var iW2 = P91();
    class nW2 {
        _nameFilter;
        _type;
        _unitFilter;
        constructor(A) {
            this._nameFilter = new iW2.PatternPredicate(A?.name ?? "*"), this._type = A?.type, this._unitFilter = new iW2.ExactPredicate(A?.unit)
        }
        getType() {
            return this._type
        }
        getNameFilter() {
            return this._nameFilter
        }
        getUnitFilter() {
            return this._unitFilter
        }
    }
    aW2.InstrumentSelector = nW2
});
var AX2 = U((tW2) => {
    Object.defineProperty(tW2, "__esModule", {
        value: !0
    });
    tW2.MeterSelector = void 0;
    var EQ0 = P91();
    class oW2 {
        _nameFilter;
        _versionFilter;
        _schemaUrlFilter;
        constructor(A) {
            this._nameFilter = new EQ0.ExactPredicate(A?.name), this._versionFilter = new EQ0.ExactPredicate(A?.version), this._schemaUrlFilter = new EQ0.ExactPredicate(A?.schemaUrl)
        }
        getNameFilter() {
            return this._nameFilter
        }
        getVersionFilter() {
            return this._versionFilter
        }
        getSchemaUrlFilter() {
            return this._schemaUrlFilter
        }
    }
    tW2.MeterSelector = oW2
});
var YX2 = U((ZX2) => {
    Object.defineProperty(ZX2, "__esModule", {
        value: !0
    });
    ZX2.View = void 0;
    var QC5 = P91(),
        QX2 = T91(),
        BC5 = rW2(),
        GC5 = AX2(),
        BX2 = fMA();

    function ZC5(A) {
        return A.instrumentName == null && A.instrumentType == null && A.instrumentUnit == null && A.meterName == null && A.meterVersion == null && A.meterSchemaUrl == null
    }

    function IC5(A) {
        if (ZC5(A)) throw Error("Cannot create view with no selector arguments supplied");
        if (A.name != null && (A?.instrumentName == null || QC5.PatternPredicate.hasWildcard(A.instrumentName))) throw Error("Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.")
    }
    class GX2 {
        name;
        description;
        aggregation;
        attributesProcessor;
        instrumentSelector;
        meterSelector;
        aggregationCardinalityLimit;
        constructor(A) {
            if (IC5(A), A.attributesProcessors != null) this.attributesProcessor = (0, QX2.createMultiAttributesProcessor)(A.attributesProcessors);
            else this.attributesProcessor = (0, QX2.createNoopAttributesProcessor)();
            this.name = A.name, this.description = A.description, this.aggregation = (0, BX2.toAggregation)(A.aggregation ?? {
                type: BX2.AggregationType.DEFAULT
            }), this.instrumentSelector = new BC5.InstrumentSelector({
                name: A.instrumentName,
                type: A.instrumentType,
                unit: A.instrumentUnit
            }), this.meterSelector = new GC5.MeterSelector({
                name: A.meterName,
                version: A.meterVersion,
                schemaUrl: A.meterSchemaUrl
            }), this.aggregationCardinalityLimit = A.aggregationCardinalityLimit
        }
    }
    ZX2.View = GX2
});
var FX2 = U((WX2) => {
    Object.defineProperty(WX2, "__esModule", {
        value: !0
    });
    WX2.MeterProvider = void 0;
    var j91 = W9(),
        YC5 = f7A(),
        JC5 = hW2(),
        WC5 = dW2(),
        XC5 = YX2();
    class JX2 {
        _sharedState;
        _shutdown = !1;
        constructor(A) {
            if (this._sharedState = new JC5.MeterProviderSharedState(A?.resource ?? (0, YC5.defaultResource)()), A?.views != null && A.views.length > 0)
                for (let Q of A.views) this._sharedState.viewRegistry.addView(new XC5.View(Q));
            if (A?.readers != null && A.readers.length > 0)
                for (let Q of A.readers) {
                    let B = new WC5.MetricCollector(this._sharedState, Q);
                    Q.setMetricProducer(B), this._sharedState.metricCollectors.push(B)
                }
        }
        getMeter(A, Q = "", B = {}) {
            if (this._shutdown) return j91.diag.warn("A shutdown MeterProvider cannot provide a Meter"), (0, j91.createNoopMeter)();
            return this._sharedState.getMeterSharedState({
                name: A,
                version: Q,
                schemaUrl: B.schemaUrl
            }).meter
        }
        async shutdown(A) {
            if (this._shutdown) {
                j91.diag.warn("shutdown may only be called once per MeterProvider");
                return
            }
            this._shutdown = !0, await Promise.all(this._sharedState.metricCollectors.map((Q) => {
                return Q.shutdown(A)
            }))
        }
        async forceFlush(A) {
            if (this._shutdown) {
                j91.diag.warn("invalid attempt to force flush after MeterProvider shutdown");
                return
            }
            await Promise.all(this._sharedState.metricCollectors.map((Q) => {
                return Q.forceFlush(A)
            }))
        }
    }
    WX2.MeterProvider = JX2
});
var Mi = U((nU) => {
    Object.defineProperty(nU, "__esModule", {
        value: !0
    });
    nU.TimeoutError = nU.createDenyListAttributesProcessor = nU.createAllowListAttributesProcessor = nU.AggregationType = nU.MeterProvider = nU.ConsoleMetricExporter = nU.InMemoryMetricExporter = nU.PeriodicExportingMetricReader = nU.MetricReader = nU.InstrumentType = nU.DataPointType = nU.AggregationTemporality = void 0;
    var FC5 = E91();
    Object.defineProperty(nU, "AggregationTemporality", {
        enumerable: !0,
        get: function() {
            return FC5.AggregationTemporality
        }
    });
    var VX2 = Li();
    Object.defineProperty(nU, "DataPointType", {
        enumerable: !0,
        get: function() {
            return VX2.DataPointType
        }
    });
    Object.defineProperty(nU, "InstrumentType", {
        enumerable: !0,
        get: function() {
            return VX2.InstrumentType
        }
    });
    var VC5 = YQ0();
    Object.defineProperty(nU, "MetricReader", {
        enumerable: !0,
        get: function() {
            return VC5.MetricReader
        }
    });
    var KC5 = BJ2();
    Object.defineProperty(nU, "PeriodicExportingMetricReader", {
        enumerable: !0,
        get: function() {
            return KC5.PeriodicExportingMetricReader
        }
    });
    var DC5 = JJ2();
    Object.defineProperty(nU, "InMemoryMetricExporter", {
        enumerable: !0,
        get: function() {
            return DC5.InMemoryMetricExporter
        }
    });
    var HC5 = VJ2();
    Object.defineProperty(nU, "ConsoleMetricExporter", {
        enumerable: !0,
        get: function() {
            return HC5.ConsoleMetricExporter
        }
    });
    var CC5 = FX2();
    Object.defineProperty(nU, "MeterProvider", {
        enumerable: !0,
        get: function() {
            return CC5.MeterProvider
        }
    });
    var EC5 = fMA();
    Object.defineProperty(nU, "AggregationType", {
        enumerable: !0,
        get: function() {
            return EC5.AggregationType
        }
    });
    var KX2 = T91();
    Object.defineProperty(nU, "createAllowListAttributesProcessor", {
        enumerable: !0,
        get: function() {
            return KX2.createAllowListAttributesProcessor
        }
    });
    Object.defineProperty(nU, "createDenyListAttributesProcessor", {
        enumerable: !0,
        get: function() {
            return KX2.createDenyListAttributesProcessor
        }
    });
    var zC5 = GP();
    Object.defineProperty(nU, "TimeoutError", {
        enumerable: !0,
        get: function() {
            return zC5.TimeoutError
        }
    })
});
var UQ0 = U((DX2) => {
    Object.defineProperty(DX2, "__esModule", {
        value: !0
    });
    DX2.AggregationTemporalityPreference = void 0;
    var $C5;
    (function(A) {
        A[A.DELTA = 0] = "DELTA", A[A.CUMULATIVE = 1] = "CUMULATIVE", A[A.LOWMEMORY = 2] = "LOWMEMORY"
    })($C5 = DX2.AggregationTemporalityPreference || (DX2.AggregationTemporalityPreference = {}))
});
var zX2 = U((CX2) => {
    Object.defineProperty(CX2, "__esModule", {
        value: !0
    });
    CX2.OTLPExporterBase = void 0;
    class HX2 {
        _delegate;
        constructor(A) {
            this._delegate = A
        }
        export (A, Q) {
            this._delegate.export(A, Q)
        }
        forceFlush() {
            return this._delegate.forceFlush()
        }
        shutdown() {
            return this._delegate.shutdown()
        }
    }
    CX2.OTLPExporterBase = HX2
});
var S91 = U(($X2) => {
    Object.defineProperty($X2, "__esModule", {
        value: !0
    });
    $X2.OTLPExporterError = void 0;
    class UX2 extends Error {
        code;
        name = "OTLPExporterError";
        data;
        constructor(A, Q, B) {
            super(A);
            this.data = B, this.code = Q
        }
    }
    $X2.OTLPExporterError = UX2
});
var cMA = U((NX2) => {
    Object.defineProperty(NX2, "__esModule", {
        value: !0
    });
    NX2.getSharedConfigurationDefaults = NX2.mergeOtlpSharedConfigurationWithDefaults = NX2.wrapStaticHeadersInFunction = NX2.validateTimeoutMillis = void 0;

    function qX2(A) {
        if (Number.isFinite(A) && A > 0) return A;
        throw Error(`Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${A}')`)
    }
    NX2.validateTimeoutMillis = qX2;

    function wC5(A) {
        if (A == null) return;
        return () => A
    }
    NX2.wrapStaticHeadersInFunction = wC5;

    function qC5(A, Q, B) {
        return {
            timeoutMillis: qX2(A.timeoutMillis ?? Q.timeoutMillis ?? B.timeoutMillis),
            concurrencyLimit: A.concurrencyLimit ?? Q.concurrencyLimit ?? B.concurrencyLimit,
            compression: A.compression ?? Q.compression ?? B.compression
        }
    }
    NX2.mergeOtlpSharedConfigurationWithDefaults = qC5;

    function NC5() {
        return {
            timeoutMillis: 1e4,
            concurrencyLimit: 30,
            compression: "none"
        }
    }
    NX2.getSharedConfigurationDefaults = NC5
});
var OX2 = U((MX2) => {
    Object.defineProperty(MX2, "__esModule", {
        value: !0
    });
    MX2.CompressionAlgorithm = void 0;
    var RC5;
    (function(A) {
        A.NONE = "none", A.GZIP = "gzip"
    })(RC5 = MX2.CompressionAlgorithm || (MX2.CompressionAlgorithm = {}))
});
var wQ0 = U((TX2) => {
    Object.defineProperty(TX2, "__esModule", {
        value: !0
    });
    TX2.createBoundedQueueExportPromiseHandler = void 0;
    class RX2 {
        _concurrencyLimit;
        _sendingPromises = [];
        constructor(A) {
            this._concurrencyLimit = A
        }
        pushPromise(A) {
            if (this.hasReachedLimit()) throw Error("Concurrency Limit reached");
            this._sendingPromises.push(A);
            let Q = () => {
                let B = this._sendingPromises.indexOf(A);
                this._sendingPromises.splice(B, 1)
            };
            A.then(Q, Q)
        }
        hasReachedLimit() {
            return this._sendingPromises.length >= this._concurrencyLimit
        }
        async awaitAll() {
            await Promise.all(this._sendingPromises)
        }
    }

    function TC5(A) {
        return new RX2(A.concurrencyLimit)
    }
    TX2.createBoundedQueueExportPromiseHandler = TC5
});
var _X2 = U((jX2) => {
    Object.defineProperty(jX2, "__esModule", {
        value: !0
    });
    jX2.createLoggingPartialSuccessResponseHandler = void 0;
    var PC5 = W9();

    function jC5(A) {
        return Object.prototype.hasOwnProperty.call(A, "partialSuccess")
    }

    function SC5() {
        return {
            handleResponse(A) {
                if (A == null || !jC5(A) || A.partialSuccess == null || Object.keys(A.partialSuccess).length === 0) return;
                PC5.diag.warn("Received Partial Success response:", JSON.stringify(A.partialSuccess))
            }
        }
    }
    jX2.createLoggingPartialSuccessResponseHandler = SC5
});
var qQ0 = U((xX2) => {
    Object.defineProperty(xX2, "__esModule", {
        value: !0
    });
    xX2.createOtlpExportDelegate = void 0;
    var v1A = t6(),
        kX2 = S91(),
        _C5 = _X2(),
        kC5 = W9();
    class yX2 {
        _transport;
        _serializer;
        _responseHandler;
        _promiseQueue;
        _timeout;
        _diagLogger;
        constructor(A, Q, B, G, Z) {
            this._transport = A, this._serializer = Q, this._responseHandler = B, this._promiseQueue = G, this._timeout = Z, this._diagLogger = kC5.diag.createComponentLogger({
                namespace: "OTLPExportDelegate"
            })
        }
        export (A, Q) {
            if (this._diagLogger.debug("items to be sent", A), this._promiseQueue.hasReachedLimit()) {
                Q({
                    code: v1A.ExportResultCode.FAILED,
                    error: Error("Concurrent export limit reached")
                });
                return
            }
            let B = this._serializer.serializeRequest(A);
            if (B == null) {
                Q({
                    code: v1A.ExportResultCode.FAILED,
                    error: Error("Nothing to send")
                });
                return
            }
            this._promiseQueue.pushPromise(this._transport.send(B, this._timeout).then((G) => {
                if (G.status === "success") {
                    if (G.data != null) try {
                        this._responseHandler.handleResponse(this._serializer.deserializeResponse(G.data))
                    } catch (Z) {
                        this._diagLogger.warn("Export succeeded but could not deserialize response - is the response specification compliant?", Z, G.data)
                    }
                    Q({
                        code: v1A.ExportResultCode.SUCCESS
                    });
                    return
                } else if (G.status === "failure" && G.error) {
                    Q({
                        code: v1A.ExportResultCode.FAILED,
                        error: G.error
                    });
                    return
                } else if (G.status === "retryable") Q({
                    code: v1A.ExportResultCode.FAILED,
                    error: new kX2.OTLPExporterError("Export failed with retryable status")
                });
                else Q({
                    code: v1A.ExportResultCode.FAILED,
                    error: new kX2.OTLPExporterError("Export failed with unknown error")
                })
            }, (G) => Q({
                code: v1A.ExportResultCode.FAILED,
                error: G
            })))
        }
        forceFlush() {
            return this._promiseQueue.awaitAll()
        }
        async shutdown() {
            this._diagLogger.debug("shutdown started"), await this.forceFlush(), this._transport.shutdown()
        }
    }

    function yC5(A, Q) {
        return new yX2(A.transport, A.serializer, (0, _C5.createLoggingPartialSuccessResponseHandler)(), A.promiseHandler, Q.timeout)
    }
    xX2.createOtlpExportDelegate = yC5
});
var hX2 = U((bX2) => {
    Object.defineProperty(bX2, "__esModule", {
        value: !0
    });
    bX2.createOtlpNetworkExportDelegate = void 0;
    var xC5 = wQ0(),
        vC5 = qQ0();

    function bC5(A, Q, B) {
        return (0, vC5.createOtlpExportDelegate)({
            transport: B,
            serializer: Q,
            promiseHandler: (0, xC5.createBoundedQueueExportPromiseHandler)(A)
        }, {
            timeout: A.timeoutMillis
        })
    }
    bX2.createOtlpNetworkExportDelegate = bC5
});
var mk = U((Oi) => {
    Object.defineProperty(Oi, "__esModule", {
        value: !0
    });
    Oi.createOtlpNetworkExportDelegate = Oi.CompressionAlgorithm = Oi.getSharedConfigurationDefaults = Oi.mergeOtlpSharedConfigurationWithDefaults = Oi.OTLPExporterError = Oi.OTLPExporterBase = void 0;
    var fC5 = zX2();
    Object.defineProperty(Oi, "OTLPExporterBase", {
        enumerable: !0,
        get: function() {
            return fC5.OTLPExporterBase
        }
    });
    var hC5 = S91();
    Object.defineProperty(Oi, "OTLPExporterError", {
        enumerable: !0,
        get: function() {
            return hC5.OTLPExporterError
        }
    });
    var gX2 = cMA();
    Object.defineProperty(Oi, "mergeOtlpSharedConfigurationWithDefaults", {
        enumerable: !0,
        get: function() {
            return gX2.mergeOtlpSharedConfigurationWithDefaults
        }
    });
    Object.defineProperty(Oi, "getSharedConfigurationDefaults", {
        enumerable: !0,
        get: function() {
            return gX2.getSharedConfigurationDefaults
        }
    });
    var gC5 = OX2();
    Object.defineProperty(Oi, "CompressionAlgorithm", {
        enumerable: !0,
        get: function() {
            return gC5.CompressionAlgorithm
        }
    });
    var uC5 = hX2();
    Object.defineProperty(Oi, "createOtlpNetworkExportDelegate", {
        enumerable: !0,
        get: function() {
            return uC5.createOtlpNetworkExportDelegate
        }
    })
});
var MQ0 = U((dX2) => {
    Object.defineProperty(dX2, "__esModule", {
        value: !0
    });
    dX2.OTLPMetricExporterBase = dX2.LowMemoryTemporalitySelector = dX2.DeltaTemporalitySelector = dX2.CumulativeTemporalitySelector = void 0;
    var dC5 = t6(),
        nX = Mi(),
        uX2 = UQ0(),
        cC5 = mk(),
        pC5 = W9(),
        lC5 = () => nX.AggregationTemporality.CUMULATIVE;
    dX2.CumulativeTemporalitySelector = lC5;
    var iC5 = (A) => {
        switch (A) {
            case nX.InstrumentType.COUNTER:
            case nX.InstrumentType.OBSERVABLE_COUNTER:
            case nX.InstrumentType.GAUGE:
            case nX.InstrumentType.HISTOGRAM:
            case nX.InstrumentType.OBSERVABLE_GAUGE:
                return nX.AggregationTemporality.DELTA;
            case nX.InstrumentType.UP_DOWN_COUNTER:
            case nX.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
                return nX.AggregationTemporality.CUMULATIVE
        }
    };
    dX2.DeltaTemporalitySelector = iC5;
    var nC5 = (A) => {
        switch (A) {
            case nX.InstrumentType.COUNTER:
            case nX.InstrumentType.HISTOGRAM:
                return nX.AggregationTemporality.DELTA;
            case nX.InstrumentType.GAUGE:
            case nX.InstrumentType.UP_DOWN_COUNTER:
            case nX.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
            case nX.InstrumentType.OBSERVABLE_COUNTER:
            case nX.InstrumentType.OBSERVABLE_GAUGE:
                return nX.AggregationTemporality.CUMULATIVE
        }
    };
    dX2.LowMemoryTemporalitySelector = nC5;

    function aC5() {
        let A = ((0, dC5.getStringFromEnv)("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE") ?? "cumulative").toLowerCase();
        if (A === "cumulative") return dX2.CumulativeTemporalitySelector;
        if (A === "delta") return dX2.DeltaTemporalitySelector;
        if (A === "lowmemory") return dX2.LowMemoryTemporalitySelector;
        return pC5.diag.warn(`OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${A}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`), dX2.CumulativeTemporalitySelector
    }

    function sC5(A) {
        if (A != null) {
            if (A === uX2.AggregationTemporalityPreference.DELTA) return dX2.DeltaTemporalitySelector;
            else if (A === uX2.AggregationTemporalityPreference.LOWMEMORY) return dX2.LowMemoryTemporalitySelector;
            return dX2.CumulativeTemporalitySelector
        }
        return aC5()
    }
    var rC5 = Object.freeze({
        type: nX.AggregationType.DEFAULT
    });

    function oC5(A) {
        return A?.aggregationPreference ?? (() => rC5)
    }
    class mX2 extends cC5.OTLPExporterBase {
        _aggregationTemporalitySelector;
        _aggregationSelector;
        constructor(A, Q) {
            super(A);
            this._aggregationSelector = oC5(Q), this._aggregationTemporalitySelector = sC5(Q?.temporalityPreference)
        }
        selectAggregation(A) {
            return this._aggregationSelector(A)
        }
        selectAggregationTemporality(A) {
            return this._aggregationTemporalitySelector(A)
        }
    }
    dX2.OTLPMetricExporterBase = mX2
});
var OQ0 = U((LhG, pX2) => {
    pX2.exports = tC5;

    function tC5(A, Q) {
        var B = Array(arguments.length - 1),
            G = 0,
            Z = 2,
            I = !0;
        while (Z < arguments.length) B[G++] = arguments[Z++];
        return new Promise(function(J, W) {
            B[G] = function(F) {
                if (I)
                    if (I = !1, F) W(F);
                    else {
                        var V = Array(arguments.length - 1),
                            K = 0;
                        while (K < V.length) V[K++] = arguments[K];
                        J.apply(null, V)
                    }
            };
            try {
                A.apply(Q || null, B)
            } catch (X) {
                if (I) I = !1, W(X)
            }
        })
    }
});
var aX2 = U((nX2) => {
    var k91 = nX2;
    k91.length = function(Q) {
        var B = Q.length;
        if (!B) return 0;
        var G = 0;
        while (--B % 4 > 1 && Q.charAt(B) === "=") ++G;
        return Math.ceil(Q.length * 3) / 4 - G
    };
    var kYA = Array(64),
        iX2 = Array(123);
    for (QO = 0; QO < 64;) iX2[kYA[QO] = QO < 26 ? QO + 65 : QO < 52 ? QO + 71 : QO < 62 ? QO - 4 : QO - 59 | 43] = QO++;
    var QO;
    k91.encode = function(Q, B, G) {
        var Z = null,
            I = [],
            Y = 0,
            J = 0,
            W;
        while (B < G) {
            var X = Q[B++];
            switch (J) {
                case 0:
                    I[Y++] = kYA[X >> 2], W = (X & 3) << 4, J = 1;
                    break;
                case 1:
                    I[Y++] = kYA[W | X >> 4], W = (X & 15) << 2, J = 2;
                    break;
                case 2:
                    I[Y++] = kYA[W | X >> 6], I[Y++] = kYA[X & 63], J = 0;
                    break
            }
            if (Y > 8191)(Z || (Z = [])).push(String.fromCharCode.apply(String, I)), Y = 0
        }
        if (J) {
            if (I[Y++] = kYA[W], I[Y++] = 61, J === 1) I[Y++] = 61
        }
        if (Z) {
            if (Y) Z.push(String.fromCharCode.apply(String, I.slice(0, Y)));
            return Z.join("")
        }
        return String.fromCharCode.apply(String, I.slice(0, Y))
    };
    var lX2 = "invalid encoding";
    k91.decode = function(Q, B, G) {
        var Z = G,
            I = 0,
            Y;
        for (var J = 0; J < Q.length;) {
            var W = Q.charCodeAt(J++);
            if (W === 61 && I > 1) break;
            if ((W = iX2[W]) === void 0) throw Error(lX2);
            switch (I) {
                case 0:
                    Y = W, I = 1;
                    break;
                case 1:
                    B[G++] = Y << 2 | (W & 48) >> 4, Y = W, I = 2;
                    break;
                case 2:
                    B[G++] = (Y & 15) << 4 | (W & 60) >> 2, Y = W, I = 3;
                    break;
                case 3:
                    B[G++] = (Y & 3) << 6 | W, I = 0;
                    break
            }
        }
        if (I === 1) throw Error(lX2);
        return G - Z
    };
    k91.test = function(Q) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(Q)
    }
});
var rX2 = U((OhG, sX2) => {
    sX2.exports = y91;

    function y91() {
        this._listeners = {}
    }
    y91.prototype.on = function(Q, B, G) {
        return (this._listeners[Q] || (this._listeners[Q] = [])).push({
            fn: B,
            ctx: G || this
        }), this
    };
    y91.prototype.off = function(Q, B) {
        if (Q === void 0) this._listeners = {};
        else if (B === void 0) this._listeners[Q] = [];
        else {
            var G = this._listeners[Q];
            for (var Z = 0; Z < G.length;)
                if (G[Z].fn === B) G.splice(Z, 1);
                else ++Z
        }
        return this
    };
    y91.prototype.emit = function(Q) {
        var B = this._listeners[Q];
        if (B) {
            var G = [],
                Z = 1;
            for (; Z < arguments.length;) G.push(arguments[Z++]);
            for (Z = 0; Z < B.length;) B[Z].fn.apply(B[Z++].ctx, G)
        }
        return this
    }
});
var GF2 = U((RhG, BF2) => {
    BF2.exports = oX2(oX2);

    function oX2(A) {
        if (typeof Float32Array < "u")(function() {
            var Q = new Float32Array([-0]),
                B = new Uint8Array(Q.buffer),
                G = B[3] === 128;

            function Z(W, X, F) {
                Q[0] = W, X[F] = B[0], X[F + 1] = B[1], X[F + 2] = B[2], X[F + 3] = B[3]
            }

            function I(W, X, F) {
                Q[0] = W, X[F] = B[3], X[F + 1] = B[2], X[F + 2] = B[1], X[F + 3] = B[0]
            }
            A.writeFloatLE = G ? Z : I, A.writeFloatBE = G ? I : Z;

            function Y(W, X) {
                return B[0] = W[X], B[1] = W[X + 1], B[2] = W[X + 2], B[3] = W[X + 3], Q[0]
            }

            function J(W, X) {
                return B[3] = W[X], B[2] = W[X + 1], B[1] = W[X + 2], B[0] = W[X + 3], Q[0]
            }
            A.readFloatLE = G ? Y : J, A.readFloatBE = G ? J : Y
        })();
        else(function() {
            function Q(G, Z, I, Y) {
                var J = Z < 0 ? 1 : 0;
                if (J) Z = -Z;
                if (Z === 0) G(1 / Z > 0 ? 0 : 2147483648, I, Y);
                else if (isNaN(Z)) G(2143289344, I, Y);
                else if (Z > 340282346638528860000000000000000000000) G((J << 31 | 2139095040) >>> 0, I, Y);
                else if (Z < 0.000000000000000000000000000000000000011754943508222875) G((J << 31 | Math.round(Z / 0.000000000000000000000000000000000000000000001401298464324817)) >>> 0, I, Y);
                else {
                    var W = Math.floor(Math.log(Z) / Math.LN2),
                        X = Math.round(Z * Math.pow(2, -W) * 8388608) & 8388607;
                    G((J << 31 | W + 127 << 23 | X) >>> 0, I, Y)
                }
            }
            A.writeFloatLE = Q.bind(null, tX2), A.writeFloatBE = Q.bind(null, eX2);

            function B(G, Z, I) {
                var Y = G(Z, I),
                    J = (Y >> 31) * 2 + 1,
                    W = Y >>> 23 & 255,
                    X = Y & 8388607;
                return W === 255 ? X ? NaN : J * (1 / 0) : W === 0 ? J * 0.000000000000000000000000000000000000000000001401298464324817 * X : J * Math.pow(2, W - 150) * (X + 8388608)
            }
            A.readFloatLE = B.bind(null, AF2), A.readFloatBE = B.bind(null, QF2)
        })();
        if (typeof Float64Array < "u")(function() {
            var Q = new Float64Array([-0]),
                B = new Uint8Array(Q.buffer),
                G = B[7] === 128;

            function Z(W, X, F) {
                Q[0] = W, X[F] = B[0], X[F + 1] = B[1], X[F + 2] = B[2], X[F + 3] = B[3], X[F + 4] = B[4], X[F + 5] = B[5], X[F + 6] = B[6], X[F + 7] = B[7]
            }

            function I(W, X, F) {
                Q[0] = W, X[F] = B[7], X[F + 1] = B[6], X[F + 2] = B[5], X[F + 3] = B[4], X[F + 4] = B[3], X[F + 5] = B[2], X[F + 6] = B[1], X[F + 7] = B[0]
            }
            A.writeDoubleLE = G ? Z : I, A.writeDoubleBE = G ? I : Z;

            function Y(W, X) {
                return B[0] = W[X], B[1] = W[X + 1], B[2] = W[X + 2], B[3] = W[X + 3], B[4] = W[X + 4], B[5] = W[X + 5], B[6] = W[X + 6], B[7] = W[X + 7], Q[0]
            }

            function J(W, X) {
                return B[7] = W[X], B[6] = W[X + 1], B[5] = W[X + 2], B[4] = W[X + 3], B[3] = W[X + 4], B[2] = W[X + 5], B[1] = W[X + 6], B[0] = W[X + 7], Q[0]
            }
            A.readDoubleLE = G ? Y : J, A.readDoubleBE = G ? J : Y
        })();
        else(function() {
            function Q(G, Z, I, Y, J, W) {
                var X = Y < 0 ? 1 : 0;
                if (X) Y = -Y;
                if (Y === 0) G(0, J, W + Z), G(1 / Y > 0 ? 0 : 2147483648, J, W + I);
                else if (isNaN(Y)) G(0, J, W + Z), G(2146959360, J, W + I);
                else if (Y > 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) G(0, J, W + Z), G((X << 31 | 2146435072) >>> 0, J, W + I);
                else {
                    var F;
                    if (Y < 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014) F = Y / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005, G(F >>> 0, J, W + Z), G((X << 31 | F / 4294967296) >>> 0, J, W + I);
                    else {
                        var V = Math.floor(Math.log(Y) / Math.LN2);
                        if (V === 1024) V = 1023;
                        F = Y * Math.pow(2, -V), G(F * 4503599627370496 >>> 0, J, W + Z), G((X << 31 | V + 1023 << 20 | F * 1048576 & 1048575) >>> 0, J, W + I)
                    }
                }
            }
            A.writeDoubleLE = Q.bind(null, tX2, 0, 4), A.writeDoubleBE = Q.bind(null, eX2, 4, 0);

            function B(G, Z, I, Y, J) {
                var W = G(Y, J + Z),
                    X = G(Y, J + I),
                    F = (X >> 31) * 2 + 1,
                    V = X >>> 20 & 2047,
                    K = 4294967296 * (X & 1048575) + W;
                return V === 2047 ? K ? NaN : F * (1 / 0) : V === 0 ? F * 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005 * K : F * Math.pow(2, V - 1075) * (K + 4503599627370496)
            }
            A.readDoubleLE = B.bind(null, AF2, 0, 4), A.readDoubleBE = B.bind(null, QF2, 4, 0)
        })();
        return A
    }

    function tX2(A, Q, B) {
        Q[B] = A & 255, Q[B + 1] = A >>> 8 & 255, Q[B + 2] = A >>> 16 & 255, Q[B + 3] = A >>> 24
    }

    function eX2(A, Q, B) {
        Q[B] = A >>> 24, Q[B + 1] = A >>> 16 & 255, Q[B + 2] = A >>> 8 & 255, Q[B + 3] = A & 255
    }

    function AF2(A, Q) {
        return (A[Q] | A[Q + 1] << 8 | A[Q + 2] << 16 | A[Q + 3] << 24) >>> 0
    }

    function QF2(A, Q) {
        return (A[Q] << 24 | A[Q + 1] << 16 | A[Q + 2] << 8 | A[Q + 3]) >>> 0
    }
});
var TQ0 = U((ZF2, RQ0) => {
    RQ0.exports = eC5;

    function eC5(moduleName) {
        try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) return mod
        } catch (A) {}
        return null
    }
});
var YF2 = U((IF2) => {
    var PQ0 = IF2;
    PQ0.length = function(Q) {
        var B = 0,
            G = 0;
        for (var Z = 0; Z < Q.length; ++Z)
            if (G = Q.charCodeAt(Z), G < 128) B += 1;
            else if (G < 2048) B += 2;
        else if ((G & 64512) === 55296 && (Q.charCodeAt(Z + 1) & 64512) === 56320) ++Z, B += 4;
        else B += 3;
        return B
    };
    PQ0.read = function(Q, B, G) {
        var Z = G - B;
        if (Z < 1) return "";
        var I = null,
            Y = [],
            J = 0,
            W;
        while (B < G) {
            if (W = Q[B++], W < 128) Y[J++] = W;
            else if (W > 191 && W < 224) Y[J++] = (W & 31) << 6 | Q[B++] & 63;
            else if (W > 239 && W < 365) W = ((W & 7) << 18 | (Q[B++] & 63) << 12 | (Q[B++] & 63) << 6 | Q[B++] & 63) - 65536, Y[J++] = 55296 + (W >> 10), Y[J++] = 56320 + (W & 1023);
            else Y[J++] = (W & 15) << 12 | (Q[B++] & 63) << 6 | Q[B++] & 63;
            if (J > 8191)(I || (I = [])).push(String.fromCharCode.apply(String, Y)), J = 0
        }
        if (I) {
            if (J) I.push(String.fromCharCode.apply(String, Y.slice(0, J)));
            return I.join("")
        }
        return String.fromCharCode.apply(String, Y.slice(0, J))
    };
    PQ0.write = function(Q, B, G) {
        var Z = G,
            I, Y;
        for (var J = 0; J < Q.length; ++J)
            if (I = Q.charCodeAt(J), I < 128) B[G++] = I;
            else if (I < 2048) B[G++] = I >> 6 | 192, B[G++] = I & 63 | 128;
        else if ((I & 64512) === 55296 && ((Y = Q.charCodeAt(J + 1)) & 64512) === 56320) I = 65536 + ((I & 1023) << 10) + (Y & 1023), ++J, B[G++] = I >> 18 | 240, B[G++] = I >> 12 & 63 | 128, B[G++] = I >> 6 & 63 | 128, B[G++] = I & 63 | 128;
        else B[G++] = I >> 12 | 224, B[G++] = I >> 6 & 63 | 128, B[G++] = I & 63 | 128;
        return G - Z
    }
});
var WF2 = U((PhG, JF2) => {
    JF2.exports = AE5;

    function AE5(A, Q, B) {
        var G = B || 8192,
            Z = G >>> 1,
            I = null,
            Y = G;
        return function(W) {
            if (W < 1 || W > Z) return A(W);
            if (Y + W > G) I = A(G), Y = 0;
            var X = Q.call(I, Y, Y += W);
            if (Y & 7) Y = (Y | 7) + 1;
            return X
        }
    }
});
var FF2 = U((jhG, XF2) => {
    XF2.exports = QK;
    var pMA = dk();

    function QK(A, Q) {
        this.lo = A >>> 0, this.hi = Q >>> 0
    }
    var b1A = QK.zero = new QK(0, 0);
    b1A.toNumber = function() {
        return 0
    };
    b1A.zzEncode = b1A.zzDecode = function() {
        return this
    };
    b1A.length = function() {
        return 1
    };
    var QE5 = QK.zeroHash = "\x00\x00\x00\x00\x00\x00\x00\x00";
    QK.fromNumber = function(Q) {
        if (Q === 0) return b1A;
        var B = Q < 0;
        if (B) Q = -Q;
        var G = Q >>> 0,
            Z = (Q - G) / 4294967296 >>> 0;
        if (B) {
            if (Z = ~Z >>> 0, G = ~G >>> 0, ++G > 4294967295) {
                if (G = 0, ++Z > 4294967295) Z = 0
            }
        }
        return new QK(G, Z)
    };
    QK.from = function(Q) {
        if (typeof Q === "number") return QK.fromNumber(Q);
        if (pMA.isString(Q))
            if (pMA.Long) Q = pMA.Long.fromString(Q);
            else return QK.fromNumber(parseInt(Q, 10));
        return Q.low || Q.high ? new QK(Q.low >>> 0, Q.high >>> 0) : b1A
    };
    QK.prototype.toNumber = function(Q) {
        if (!Q && this.hi >>> 31) {
            var B = ~this.lo + 1 >>> 0,
                G = ~this.hi >>> 0;
            if (!B) G = G + 1 >>> 0;
            return -(B + G * 4294967296)
        }
        return this.lo + this.hi * 4294967296
    };
    QK.prototype.toLong = function(Q) {
        return pMA.Long ? new pMA.Long(this.lo | 0, this.hi | 0, Boolean(Q)) : {
            low: this.lo | 0,
            high: this.hi | 0,
            unsigned: Boolean(Q)
        }
    };
    var Ri = String.prototype.charCodeAt;
    QK.fromHash = function(Q) {
        if (Q === QE5) return b1A;
        return new QK((Ri.call(Q, 0) | Ri.call(Q, 1) << 8 | Ri.call(Q, 2) << 16 | Ri.call(Q, 3) << 24) >>> 0, (Ri.call(Q, 4) | Ri.call(Q, 5) << 8 | Ri.call(Q, 6) << 16 | Ri.call(Q, 7) << 24) >>> 0)
    };
    QK.prototype.toHash = function() {
        return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
    };
    QK.prototype.zzEncode = function() {
        var Q = this.hi >> 31;
        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ Q) >>> 0, this.lo = (this.lo << 1 ^ Q) >>> 0, this
    };
    QK.prototype.zzDecode = function() {
        var Q = -(this.lo & 1);
        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ Q) >>> 0, this.hi = (this.hi >>> 1 ^ Q) >>> 0, this
    };
    QK.prototype.length = function() {
        var Q = this.lo,
            B = (this.lo >>> 28 | this.hi << 4) >>> 0,
            G = this.hi >>> 24;
        return G === 0 ? B === 0 ? Q < 16384 ? Q < 128 ? 1 : 2 : Q < 2097152 ? 3 : 4 : B < 16384 ? B < 128 ? 5 : 6 : B < 2097152 ? 7 : 8 : G < 128 ? 9 : 10
    }
});
var dk = U((jQ0) => {
    var F9 = jQ0;
    F9.asPromise = OQ0();
    F9.base64 = aX2();
    F9.EventEmitter = rX2();
    F9.float = GF2();
    F9.inquire = TQ0();
    F9.utf8 = YF2();
    F9.pool = WF2();
    F9.LongBits = FF2();
    F9.isNode = Boolean(typeof global < "u" && global && global.process && global.process.versions && global.process.versions.node);
    F9.global = F9.isNode && global || typeof window < "u" && window || typeof self < "u" && self || jQ0;
    F9.emptyArray = Object.freeze ? Object.freeze([]) : [];
    F9.emptyObject = Object.freeze ? Object.freeze({}) : {};
    F9.isInteger = Number.isInteger || function(Q) {
        return typeof Q === "number" && isFinite(Q) && Math.floor(Q) === Q
    };
    F9.isString = function(Q) {
        return typeof Q === "string" || Q instanceof String
    };
    F9.isObject = function(Q) {
        return Q && typeof Q === "object"
    };
    F9.isset = F9.isSet = function(Q, B) {
        var G = Q[B];
        if (G != null && Q.hasOwnProperty(B)) return typeof G !== "object" || (Array.isArray(G) ? G.length : Object.keys(G).length) > 0;
        return !1
    };
    F9.Buffer = function() {
        try {
            var A = F9.inquire("buffer").Buffer;
            return A.prototype.utf8Write ? A : null
        } catch (Q) {
            return null
        }
    }();
    F9._Buffer_from = null;
    F9._Buffer_allocUnsafe = null;
    F9.newBuffer = function(Q) {
        return typeof Q === "number" ? F9.Buffer ? F9._Buffer_allocUnsafe(Q) : new F9.Array(Q) : F9.Buffer ? F9._Buffer_from(Q) : typeof Uint8Array > "u" ? Q : new Uint8Array(Q)
    };
    F9.Array = typeof Uint8Array < "u" ? Uint8Array : Array;
    F9.Long = F9.global.dcodeIO && F9.global.dcodeIO.Long || F9.global.Long || F9.inquire("long");
    F9.key2Re = /^true|false|0|1$/;
    F9.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    F9.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    F9.longToHash = function(Q) {
        return Q ? F9.LongBits.from(Q).toHash() : F9.LongBits.zeroHash
    };
    F9.longFromHash = function(Q, B) {
        var G = F9.LongBits.fromHash(Q);
        if (F9.Long) return F9.Long.fromBits(G.lo, G.hi, B);
        return G.toNumber(Boolean(B))
    };

    function VF2(A, Q, B) {
        for (var G = Object.keys(Q), Z = 0; Z < G.length; ++Z)
            if (A[G[Z]] === void 0 || !B) A[G[Z]] = Q[G[Z]];
        return A
    }
    F9.merge = VF2;
    F9.lcFirst = function(Q) {
        return Q.charAt(0).toLowerCase() + Q.substring(1)
    };

    function KF2(A) {
        function Q(B, G) {
            if (!(this instanceof Q)) return new Q(B, G);
            if (Object.defineProperty(this, "message", {
                    get: function() {
                        return B
                    }
                }), Error.captureStackTrace) Error.captureStackTrace(this, Q);
            else Object.defineProperty(this, "stack", {
                value: Error().stack || ""
            });
            if (G) VF2(this, G)
        }
        return Q.prototype = Object.create(Error.prototype, {
            constructor: {
                value: Q,
                writable: !0,
                enumerable: !1,
                configurable: !0
            },
            name: {
                get: function() {
                    return A
                },
                set: void 0,
                enumerable: !1,
                configurable: !0
            },
            toString: {
                value: function() {
                    return this.name + ": " + this.message
                },
                writable: !0,
                enumerable: !1,
                configurable: !0
            }
        }), Q
    }
    F9.newError = KF2;
    F9.ProtocolError = KF2("ProtocolError");
    F9.oneOfGetter = function(Q) {
        var B = {};
        for (var G = 0; G < Q.length; ++G) B[Q[G]] = 1;
        return function() {
            for (var Z = Object.keys(this), I = Z.length - 1; I > -1; --I)
                if (B[Z[I]] === 1 && this[Z[I]] !== void 0 && this[Z[I]] !== null) return Z[I]
        }
    };
    F9.oneOfSetter = function(Q) {
        return function(B) {
            for (var G = 0; G < Q.length; ++G)
                if (Q[G] !== B) delete this[Q[G]]
        }
    };
    F9.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    };
    F9._configure = function() {
        var A = F9.Buffer;
        if (!A) {
            F9._Buffer_from = F9._Buffer_allocUnsafe = null;
            return
        }
        F9._Buffer_from = A.from !== Uint8Array.from && A.from || function(B, G) {
            return new A(B, G)
        }, F9._Buffer_allocUnsafe = A.allocUnsafe || function(B) {
            return new A(B)
        }
    }
});
var v91 = U((_hG, EF2) => {
    EF2.exports = y3;
    var BO = dk(),
        SQ0, x91 = BO.LongBits,
        DF2 = BO.base64,
        HF2 = BO.utf8;

    function lMA(A, Q, B) {
        this.fn = A, this.len = Q, this.next = void 0, this.val = B
    }

    function kQ0() {}

    function BE5(A) {
        this.head = A.head, this.tail = A.tail, this.len = A.len, this.next = A.states
    }

    function y3() {
        this.len = 0, this.head = new lMA(kQ0, 0, 0), this.tail = this.head, this.states = null
    }
    var CF2 = function() {
        return BO.Buffer ? function() {
            return (y3.create = function() {
                return new SQ0
            })()
        } : function() {
            return new y3
        }
    };
    y3.create = CF2();
    y3.alloc = function(Q) {
        return new BO.Array(Q)
    };
    if (BO.Array !== Array) y3.alloc = BO.pool(y3.alloc, BO.Array.prototype.subarray);
    y3.prototype._push = function(Q, B, G) {
        return this.tail = this.tail.next = new lMA(Q, B, G), this.len += B, this
    };

    function yQ0(A, Q, B) {
        Q[B] = A & 255
    }

    function GE5(A, Q, B) {
        while (A > 127) Q[B++] = A & 127 | 128, A >>>= 7;
        Q[B] = A
    }

    function xQ0(A, Q) {
        this.len = A, this.next = void 0, this.val = Q
    }
    xQ0.prototype = Object.create(lMA.prototype);
    xQ0.prototype.fn = GE5;
    y3.prototype.uint32 = function(Q) {
        return this.len += (this.tail = this.tail.next = new xQ0((Q = Q >>> 0) < 128 ? 1 : Q < 16384 ? 2 : Q < 2097152 ? 3 : Q < 268435456 ? 4 : 5, Q)).len, this
    };
    y3.prototype.int32 = function(Q) {
        return Q < 0 ? this._push(vQ0, 10, x91.fromNumber(Q)) : this.uint32(Q)
    };
    y3.prototype.sint32 = function(Q) {
        return this.uint32((Q << 1 ^ Q >> 31) >>> 0)
    };

    function vQ0(A, Q, B) {
        while (A.hi) Q[B++] = A.lo & 127 | 128, A.lo = (A.lo >>> 7 | A.hi << 25) >>> 0, A.hi >>>= 7;
        while (A.lo > 127) Q[B++] = A.lo & 127 | 128, A.lo = A.lo >>> 7;
        Q[B++] = A.lo
    }
    y3.prototype.uint64 = function(Q) {
        var B = x91.from(Q);
        return this._push(vQ0, B.length(), B)
    };
    y3.prototype.int64 = y3.prototype.uint64;
    y3.prototype.sint64 = function(Q) {
        var B = x91.from(Q).zzEncode();
        return this._push(vQ0, B.length(), B)
    };
    y3.prototype.bool = function(Q) {
        return this._push(yQ0, 1, Q ? 1 : 0)
    };

    function _Q0(A, Q, B) {
        Q[B] = A & 255, Q[B + 1] = A >>> 8 & 255, Q[B + 2] = A >>> 16 & 255, Q[B + 3] = A >>> 24
    }
    y3.prototype.fixed32 = function(Q) {
        return this._push(_Q0, 4, Q >>> 0)
    };
    y3.prototype.sfixed32 = y3.prototype.fixed32;
    y3.prototype.fixed64 = function(Q) {
        var B = x91.from(Q);
        return this._push(_Q0, 4, B.lo)._push(_Q0, 4, B.hi)
    };
    y3.prototype.sfixed64 = y3.prototype.fixed64;
    y3.prototype.float = function(Q) {
        return this._push(BO.float.writeFloatLE, 4, Q)
    };
    y3.prototype.double = function(Q) {
        return this._push(BO.float.writeDoubleLE, 8, Q)
    };
    var ZE5 = BO.Array.prototype.set ? function(Q, B, G) {
        B.set(Q, G)
    } : function(Q, B, G) {
        for (var Z = 0; Z < Q.length; ++Z) B[G + Z] = Q[Z]
    };
    y3.prototype.bytes = function(Q) {
        var B = Q.length >>> 0;
        if (!B) return this._push(yQ0, 1, 0);
        if (BO.isString(Q)) {
            var G = y3.alloc(B = DF2.length(Q));
            DF2.decode(Q, G, 0), Q = G
        }