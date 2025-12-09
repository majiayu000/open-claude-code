/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: crypto_001.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (26次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: crypto
 * File: 1/1
 * Lines: 295973 - 297471 (1499 lines)
 * Original file: cli.js
 */

                if (A.max > this.max) this._max = A.max
            }
            this.startTime = A.startTime, this._sum += A.sum, this._count += A.count, this._zeroCount += A.zeroCount;
            let Q = this._minScale(A);
            this._downscale(this.scale - Q), this._mergeBuckets(this.positive, A, A.positive, Q), this._mergeBuckets(this.negative, A, A.negative, Q)
        }
        diff(A) {
            this._min = 1 / 0, this._max = -1 / 0, this._sum -= A.sum, this._count -= A.count, this._zeroCount -= A.zeroCount;
            let Q = this._minScale(A);
            this._downscale(this.scale - Q), this._diffBuckets(this.positive, A, A.positive, Q), this._diffBuckets(this.negative, A, A.negative, Q)
        }
        clone() {
            return new w91(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping)
        }
        _updateBuckets(A, Q, B) {
            let G = this._mapping.mapToIndex(Q),
                Z = !1,
                I = 0,
                Y = 0;
            if (A.length === 0) A.indexStart = G, A.indexEnd = A.indexStart, A.indexBase = A.indexStart;
            else if (G < A.indexStart && A.indexEnd - G >= this._maxSize) Z = !0, Y = G, I = A.indexEnd;
            else if (G > A.indexEnd && G - A.indexStart >= this._maxSize) Z = !0, Y = A.indexStart, I = G;
            if (Z) {
                let J = this._changeScale(I, Y);
                this._downscale(J), G = this._mapping.mapToIndex(Q)
            }
            this._incrementIndexBy(A, G, B)
        }
        _incrementIndexBy(A, Q, B) {
            if (B === 0) return;
            if (A.length === 0) A.indexStart = A.indexEnd = A.indexBase = Q;
            if (Q < A.indexStart) {
                let Z = A.indexEnd - Q;
                if (Z >= A.backing.length) this._grow(A, Z + 1);
                A.indexStart = Q
            } else if (Q > A.indexEnd) {
                let Z = Q - A.indexStart;
                if (Z >= A.backing.length) this._grow(A, Z + 1);
                A.indexEnd = Q
            }
            let G = Q - A.indexBase;
            if (G < 0) G += A.backing.length;
            A.incrementBucket(G, B)
        }
        _grow(A, Q) {
            let B = A.backing.length,
                G = A.indexBase - A.indexStart,
                Z = B - G,
                I = (0, KD5.nextGreaterSquare)(Q);
            if (I > this._maxSize) I = this._maxSize;
            let Y = I - G;
            A.backing.growTo(I, Z, Y)
        }
        _changeScale(A, Q) {
            let B = 0;
            while (A - Q >= this._maxSize) A >>= 1, Q >>= 1, B++;
            return B
        }
        _downscale(A) {
            if (A === 0) return;
            if (A < 0) throw Error(`impossible change of scale: ${this.scale}`);
            let Q = this._mapping.scale - A;
            this._positive.downscale(A), this._negative.downscale(A), this._mapping = (0, zY2.getMapping)(Q)
        }
        _minScale(A) {
            let Q = Math.min(this.scale, A.scale),
                B = TYA.combine(this._highLowAtScale(this.positive, this.scale, Q), this._highLowAtScale(A.positive, A.scale, Q)),
                G = TYA.combine(this._highLowAtScale(this.negative, this.scale, Q), this._highLowAtScale(A.negative, A.scale, Q));
            return Math.min(Q - this._changeScale(B.high, B.low), Q - this._changeScale(G.high, G.low))
        }
        _highLowAtScale(A, Q, B) {
            if (A.length === 0) return new TYA(0, -1);
            let G = Q - B;
            return new TYA(A.indexStart >> G, A.indexEnd >> G)
        }
        _mergeBuckets(A, Q, B, G) {
            let Z = B.offset,
                I = Q.scale - G;
            for (let Y = 0; Y < B.length; Y++) this._incrementIndexBy(A, Z + Y >> I, B.at(Y))
        }
        _diffBuckets(A, Q, B, G) {
            let Z = B.offset,
                I = Q.scale - G;
            for (let Y = 0; Y < B.length; Y++) {
                let W = (Z + Y >> I) - A.indexBase;
                if (W < 0) W += A.backing.length;
                A.decrementBucket(W, B.at(Y))
            }
            A.trim()
        }
    }
    $Y2.ExponentialHistogramAccumulation = w91;
    class UY2 {
        _maxSize;
        _recordMinMax;
        kind = FD5.AggregatorKind.EXPONENTIAL_HISTOGRAM;
        constructor(A, Q) {
            this._maxSize = A, this._recordMinMax = Q
        }
        createAccumulation(A) {
            return new w91(A, this._maxSize, this._recordMinMax)
        }
        merge(A, Q) {
            let B = Q.clone();
            return B.merge(A), B
        }
        diff(A, Q) {
            let B = Q.clone();
            return B.diff(A), B
        }
        toMetricData(A, Q, B, G) {
            return {
                descriptor: A,
                aggregationTemporality: Q,
                dataPointType: yMA.DataPointType.EXPONENTIAL_HISTOGRAM,
                dataPoints: B.map(([Z, I]) => {
                    let Y = I.toPointValue(),
                        J = A.type === yMA.InstrumentType.GAUGE || A.type === yMA.InstrumentType.UP_DOWN_COUNTER || A.type === yMA.InstrumentType.OBSERVABLE_GAUGE || A.type === yMA.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
                    return {
                        attributes: Z,
                        startTime: I.startTime,
                        endTime: G,
                        value: {
                            min: Y.hasMinMax ? Y.min : void 0,
                            max: Y.hasMinMax ? Y.max : void 0,
                            sum: !J ? Y.sum : void 0,
                            positive: {
                                offset: Y.positive.offset,
                                bucketCounts: Y.positive.bucketCounts
                            },
                            negative: {
                                offset: Y.negative.offset,
                                bucketCounts: Y.negative.bucketCounts
                            },
                            count: Y.count,
                            scale: Y.scale,
                            zeroCount: Y.zeroCount
                        }
                    }
                })
            }
        }
    }
    $Y2.ExponentialHistogramAggregator = UY2
});
var OY2 = U((LY2) => {
    Object.defineProperty(LY2, "__esModule", {
        value: !0
    });
    LY2.LastValueAggregator = LY2.LastValueAccumulation = void 0;
    var ED5 = MYA(),
        xMA = t6(),
        zD5 = Li();
    class vMA {
        startTime;
        _current;
        sampleTime;
        constructor(A, Q = 0, B = [0, 0]) {
            this.startTime = A, this._current = Q, this.sampleTime = B
        }
        record(A) {
            this._current = A, this.sampleTime = (0, xMA.millisToHrTime)(Date.now())
        }
        setStartTime(A) {
            this.startTime = A
        }
        toPointValue() {
            return this._current
        }
    }
    LY2.LastValueAccumulation = vMA;
    class NY2 {
        kind = ED5.AggregatorKind.LAST_VALUE;
        createAccumulation(A) {
            return new vMA(A)
        }
        merge(A, Q) {
            let B = (0, xMA.hrTimeToMicroseconds)(Q.sampleTime) >= (0, xMA.hrTimeToMicroseconds)(A.sampleTime) ? Q : A;
            return new vMA(A.startTime, B.toPointValue(), B.sampleTime)
        }
        diff(A, Q) {
            let B = (0, xMA.hrTimeToMicroseconds)(Q.sampleTime) >= (0, xMA.hrTimeToMicroseconds)(A.sampleTime) ? Q : A;
            return new vMA(Q.startTime, B.toPointValue(), B.sampleTime)
        }
        toMetricData(A, Q, B, G) {
            return {
                descriptor: A,
                aggregationTemporality: Q,
                dataPointType: zD5.DataPointType.GAUGE,
                dataPoints: B.map(([Z, I]) => {
                    return {
                        attributes: Z,
                        startTime: I.startTime,
                        endTime: G,
                        value: I.toPointValue()
                    }
                })
            }
        }
    }
    LY2.LastValueAggregator = NY2
});
var jY2 = U((TY2) => {
    Object.defineProperty(TY2, "__esModule", {
        value: !0
    });
    TY2.SumAggregator = TY2.SumAccumulation = void 0;
    var $D5 = MYA(),
        wD5 = Li();
    class P1A {
        startTime;
        monotonic;
        _current;
        reset;
        constructor(A, Q, B = 0, G = !1) {
            this.startTime = A, this.monotonic = Q, this._current = B, this.reset = G
        }
        record(A) {
            if (this.monotonic && A < 0) return;
            this._current += A
        }
        setStartTime(A) {
            this.startTime = A
        }
        toPointValue() {
            return this._current
        }
    }
    TY2.SumAccumulation = P1A;
    class RY2 {
        monotonic;
        kind = $D5.AggregatorKind.SUM;
        constructor(A) {
            this.monotonic = A
        }
        createAccumulation(A) {
            return new P1A(A, this.monotonic)
        }
        merge(A, Q) {
            let B = A.toPointValue(),
                G = Q.toPointValue();
            if (Q.reset) return new P1A(Q.startTime, this.monotonic, G, Q.reset);
            return new P1A(A.startTime, this.monotonic, B + G)
        }
        diff(A, Q) {
            let B = A.toPointValue(),
                G = Q.toPointValue();
            if (this.monotonic && B > G) return new P1A(Q.startTime, this.monotonic, G, !0);
            return new P1A(Q.startTime, this.monotonic, G - B)
        }
        toMetricData(A, Q, B, G) {
            return {
                descriptor: A,
                aggregationTemporality: Q,
                dataPointType: wD5.DataPointType.SUM,
                dataPoints: B.map(([Z, I]) => {
                    return {
                        attributes: Z,
                        startTime: I.startTime,
                        endTime: G,
                        value: I.toPointValue()
                    }
                }),
                isMonotonic: this.monotonic
            }
        }
    }
    TY2.SumAggregator = RY2
});
var xY2 = U((ZP) => {
    Object.defineProperty(ZP, "__esModule", {
        value: !0
    });
    ZP.SumAggregator = ZP.SumAccumulation = ZP.LastValueAggregator = ZP.LastValueAccumulation = ZP.ExponentialHistogramAggregator = ZP.ExponentialHistogramAccumulation = ZP.HistogramAggregator = ZP.HistogramAccumulation = ZP.DropAggregator = void 0;
    var ND5 = gI2();
    Object.defineProperty(ZP, "DropAggregator", {
        enumerable: !0,
        get: function() {
            return ND5.DropAggregator
        }
    });
    var SY2 = cI2();
    Object.defineProperty(ZP, "HistogramAccumulation", {
        enumerable: !0,
        get: function() {
            return SY2.HistogramAccumulation
        }
    });
    Object.defineProperty(ZP, "HistogramAggregator", {
        enumerable: !0,
        get: function() {
            return SY2.HistogramAggregator
        }
    });
    var _Y2 = qY2();
    Object.defineProperty(ZP, "ExponentialHistogramAccumulation", {
        enumerable: !0,
        get: function() {
            return _Y2.ExponentialHistogramAccumulation
        }
    });
    Object.defineProperty(ZP, "ExponentialHistogramAggregator", {
        enumerable: !0,
        get: function() {
            return _Y2.ExponentialHistogramAggregator
        }
    });
    var kY2 = OY2();
    Object.defineProperty(ZP, "LastValueAccumulation", {
        enumerable: !0,
        get: function() {
            return kY2.LastValueAccumulation
        }
    });
    Object.defineProperty(ZP, "LastValueAggregator", {
        enumerable: !0,
        get: function() {
            return kY2.LastValueAggregator
        }
    });
    var yY2 = jY2();
    Object.defineProperty(ZP, "SumAccumulation", {
        enumerable: !0,
        get: function() {
            return yY2.SumAccumulation
        }
    });
    Object.defineProperty(ZP, "SumAggregator", {
        enumerable: !0,
        get: function() {
            return yY2.SumAggregator
        }
    })
});
var mY2 = U((vY2) => {
    Object.defineProperty(vY2, "__esModule", {
        value: !0
    });
    vY2.DEFAULT_AGGREGATION = vY2.EXPONENTIAL_HISTOGRAM_AGGREGATION = vY2.HISTOGRAM_AGGREGATION = vY2.LAST_VALUE_AGGREGATION = vY2.SUM_AGGREGATION = vY2.DROP_AGGREGATION = vY2.DefaultAggregation = vY2.ExponentialHistogramAggregation = vY2.ExplicitBucketHistogramAggregation = vY2.HistogramAggregation = vY2.LastValueAggregation = vY2.SumAggregation = vY2.DropAggregation = void 0;
    var MD5 = W9(),
        j1A = xY2(),
        uk = Li();
    class q91 {
        static DEFAULT_INSTANCE = new j1A.DropAggregator;
        createAggregator(A) {
            return q91.DEFAULT_INSTANCE
        }
    }
    vY2.DropAggregation = q91;
    class bMA {
        static MONOTONIC_INSTANCE = new j1A.SumAggregator(!0);
        static NON_MONOTONIC_INSTANCE = new j1A.SumAggregator(!1);
        createAggregator(A) {
            switch (A.type) {
                case uk.InstrumentType.COUNTER:
                case uk.InstrumentType.OBSERVABLE_COUNTER:
                case uk.InstrumentType.HISTOGRAM:
                    return bMA.MONOTONIC_INSTANCE;
                default:
                    return bMA.NON_MONOTONIC_INSTANCE
            }
        }
    }
    vY2.SumAggregation = bMA;
    class N91 {
        static DEFAULT_INSTANCE = new j1A.LastValueAggregator;
        createAggregator(A) {
            return N91.DEFAULT_INSTANCE
        }
    }
    vY2.LastValueAggregation = N91;
    class L91 {
        static DEFAULT_INSTANCE = new j1A.HistogramAggregator([0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 1e4], !0);
        createAggregator(A) {
            return L91.DEFAULT_INSTANCE
        }
    }
    vY2.HistogramAggregation = L91;
    class BQ0 {
        _recordMinMax;
        _boundaries;
        constructor(A, Q = !0) {
            if (this._recordMinMax = Q, A == null) throw Error("ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array");
            A = A.concat(), A = A.sort((Z, I) => Z - I);
            let B = A.lastIndexOf(-1 / 0),
                G = A.indexOf(1 / 0);
            if (G === -1) G = void 0;
            this._boundaries = A.slice(B + 1, G)
        }
        createAggregator(A) {
            return new j1A.HistogramAggregator(this._boundaries, this._recordMinMax)
        }
    }
    vY2.ExplicitBucketHistogramAggregation = BQ0;
    class GQ0 {
        _maxSize;
        _recordMinMax;
        constructor(A = 160, Q = !0) {
            this._maxSize = A, this._recordMinMax = Q
        }
        createAggregator(A) {
            return new j1A.ExponentialHistogramAggregator(this._maxSize, this._recordMinMax)
        }
    }
    vY2.ExponentialHistogramAggregation = GQ0;
    class ZQ0 {
        _resolve(A) {
            switch (A.type) {
                case uk.InstrumentType.COUNTER:
                case uk.InstrumentType.UP_DOWN_COUNTER:
                case uk.InstrumentType.OBSERVABLE_COUNTER:
                case uk.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
                    return vY2.SUM_AGGREGATION;
                case uk.InstrumentType.GAUGE:
                case uk.InstrumentType.OBSERVABLE_GAUGE:
                    return vY2.LAST_VALUE_AGGREGATION;
                case uk.InstrumentType.HISTOGRAM: {
                    if (A.advice.explicitBucketBoundaries) return new BQ0(A.advice.explicitBucketBoundaries);
                    return vY2.HISTOGRAM_AGGREGATION
                }
            }
            return MD5.diag.warn(`Unable to recognize instrument type: ${A.type}`), vY2.DROP_AGGREGATION
        }
        createAggregator(A) {
            return this._resolve(A).createAggregator(A)
        }
    }
    vY2.DefaultAggregation = ZQ0;
    vY2.DROP_AGGREGATION = new q91;
    vY2.SUM_AGGREGATION = new bMA;
    vY2.LAST_VALUE_AGGREGATION = new N91;
    vY2.HISTOGRAM_AGGREGATION = new L91;
    vY2.EXPONENTIAL_HISTOGRAM_AGGREGATION = new GQ0;
    vY2.DEFAULT_AGGREGATION = new ZQ0
});
var fMA = U((cY2) => {
    Object.defineProperty(cY2, "__esModule", {
        value: !0
    });
    cY2.toAggregation = cY2.AggregationType = void 0;
    var S1A = mY2(),
        _1A;
    (function(A) {
        A[A.DEFAULT = 0] = "DEFAULT", A[A.DROP = 1] = "DROP", A[A.SUM = 2] = "SUM", A[A.LAST_VALUE = 3] = "LAST_VALUE", A[A.EXPLICIT_BUCKET_HISTOGRAM = 4] = "EXPLICIT_BUCKET_HISTOGRAM", A[A.EXPONENTIAL_HISTOGRAM = 5] = "EXPONENTIAL_HISTOGRAM"
    })(_1A = cY2.AggregationType || (cY2.AggregationType = {}));

    function yD5(A) {
        switch (A.type) {
            case _1A.DEFAULT:
                return S1A.DEFAULT_AGGREGATION;
            case _1A.DROP:
                return S1A.DROP_AGGREGATION;
            case _1A.SUM:
                return S1A.SUM_AGGREGATION;
            case _1A.LAST_VALUE:
                return S1A.LAST_VALUE_AGGREGATION;
            case _1A.EXPONENTIAL_HISTOGRAM: {
                let Q = A;
                return new S1A.ExponentialHistogramAggregation(Q.options?.maxSize, Q.options?.recordMinMax)
            }
            case _1A.EXPLICIT_BUCKET_HISTOGRAM: {
                let Q = A;
                if (Q.options == null) return S1A.HISTOGRAM_AGGREGATION;
                else return new S1A.ExplicitBucketHistogramAggregation(Q.options?.boundaries, Q.options?.recordMinMax)
            }
            default:
                throw Error("Unsupported Aggregation")
        }
    }
    cY2.toAggregation = yD5
});
var IQ0 = U((lY2) => {
    Object.defineProperty(lY2, "__esModule", {
        value: !0
    });
    lY2.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = lY2.DEFAULT_AGGREGATION_SELECTOR = void 0;
    var xD5 = E91(),
        vD5 = fMA(),
        bD5 = (A) => {
            return {
                type: vD5.AggregationType.DEFAULT
            }
        };
    lY2.DEFAULT_AGGREGATION_SELECTOR = bD5;
    var fD5 = (A) => xD5.AggregationTemporality.CUMULATIVE;
    lY2.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = fD5
});
var YQ0 = U((rY2) => {
    Object.defineProperty(rY2, "__esModule", {
        value: !0
    });
    rY2.MetricReader = void 0;
    var nY2 = W9(),
        M91 = GP(),
        aY2 = IQ0();
    class sY2 {
        _shutdown = !1;
        _metricProducers;
        _sdkMetricProducer;
        _aggregationTemporalitySelector;
        _aggregationSelector;
        _cardinalitySelector;
        constructor(A) {
            this._aggregationSelector = A?.aggregationSelector ?? aY2.DEFAULT_AGGREGATION_SELECTOR, this._aggregationTemporalitySelector = A?.aggregationTemporalitySelector ?? aY2.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR, this._metricProducers = A?.metricProducers ?? [], this._cardinalitySelector = A?.cardinalitySelector
        }
        setMetricProducer(A) {
            if (this._sdkMetricProducer) throw Error("MetricReader can not be bound to a MeterProvider again.");
            this._sdkMetricProducer = A, this.onInitialized()
        }
        selectAggregation(A) {
            return this._aggregationSelector(A)
        }
        selectAggregationTemporality(A) {
            return this._aggregationTemporalitySelector(A)
        }
        selectCardinalityLimit(A) {
            return this._cardinalitySelector ? this._cardinalitySelector(A) : 2000
        }
        onInitialized() {}
        async collect(A) {
            if (this._sdkMetricProducer === void 0) throw Error("MetricReader is not bound to a MetricProducer");
            if (this._shutdown) throw Error("MetricReader is shutdown");
            let [Q, ...B] = await Promise.all([this._sdkMetricProducer.collect({
                timeoutMillis: A?.timeoutMillis
            }), ...this._metricProducers.map((Y) => Y.collect({
                timeoutMillis: A?.timeoutMillis
            }))]), G = Q.errors.concat((0, M91.FlatMap)(B, (Y) => Y.errors)), Z = Q.resourceMetrics.resource, I = Q.resourceMetrics.scopeMetrics.concat((0, M91.FlatMap)(B, (Y) => Y.resourceMetrics.scopeMetrics));
            return {
                resourceMetrics: {
                    resource: Z,
                    scopeMetrics: I
                },
                errors: G
            }
        }
        async shutdown(A) {
            if (this._shutdown) {
                nY2.diag.error("Cannot call shutdown twice.");
                return
            }
            if (A?.timeoutMillis == null) await this.onShutdown();
            else await (0, M91.callWithTimeout)(this.onShutdown(), A.timeoutMillis);
            this._shutdown = !0
        }
        async forceFlush(A) {
            if (this._shutdown) {
                nY2.diag.warn("Cannot forceFlush on already shutdown MetricReader.");
                return
            }
            if (A?.timeoutMillis == null) {
                await this.onForceFlush();
                return
            }
            await (0, M91.callWithTimeout)(this.onForceFlush(), A.timeoutMillis)
        }
    }
    rY2.MetricReader = sY2
});
var BJ2 = U((AJ2) => {
    Object.defineProperty(AJ2, "__esModule", {
        value: !0
    });
    AJ2.PeriodicExportingMetricReader = void 0;
    var JQ0 = W9(),
        hMA = t6(),
        gD5 = YQ0(),
        tY2 = GP();
    class eY2 extends gD5.MetricReader {
        _interval;
        _exporter;
        _exportInterval;
        _exportTimeout;
        constructor(A) {
            super({
                aggregationSelector: A.exporter.selectAggregation?.bind(A.exporter),
                aggregationTemporalitySelector: A.exporter.selectAggregationTemporality?.bind(A.exporter),
                metricProducers: A.metricProducers
            });
            if (A.exportIntervalMillis !== void 0 && A.exportIntervalMillis <= 0) throw Error("exportIntervalMillis must be greater than 0");
            if (A.exportTimeoutMillis !== void 0 && A.exportTimeoutMillis <= 0) throw Error("exportTimeoutMillis must be greater than 0");
            if (A.exportTimeoutMillis !== void 0 && A.exportIntervalMillis !== void 0 && A.exportIntervalMillis < A.exportTimeoutMillis) throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");
            this._exportInterval = A.exportIntervalMillis ?? 60000, this._exportTimeout = A.exportTimeoutMillis ?? 30000, this._exporter = A.exporter
        }
        async _runOnce() {
            try {
                await (0, tY2.callWithTimeout)(this._doRun(), this._exportTimeout)
            } catch (A) {
                if (A instanceof tY2.TimeoutError) {
                    JQ0.diag.error("Export took longer than %s milliseconds and timed out.", this._exportTimeout);
                    return
                }(0, hMA.globalErrorHandler)(A)
            }
        }
        async _doRun() {
            let {
                resourceMetrics: A,
                errors: Q
            } = await this.collect({
                timeoutMillis: this._exportTimeout
            });
            if (Q.length > 0) JQ0.diag.error("PeriodicExportingMetricReader: metrics collection errors", ...Q);
            if (A.resource.asyncAttributesPending) try {
                await A.resource.waitForAsyncAttributes?.()
            } catch (G) {
                JQ0.diag.debug("Error while resolving async portion of resource: ", G), (0, hMA.globalErrorHandler)(G)
            }
            if (A.scopeMetrics.length === 0) return;
            let B = await hMA.internal._export(this._exporter, A);
            if (B.code !== hMA.ExportResultCode.SUCCESS) throw Error(`PeriodicExportingMetricReader: metrics export failed (error ${B.error})`)
        }
        onInitialized() {
            this._interval = setInterval(() => {
                this._runOnce()
            }, this._exportInterval), (0, hMA.unrefTimer)(this._interval)
        }
        async onForceFlush() {
            await this._runOnce(), await this._exporter.forceFlush()
        }
        async onShutdown() {
            if (this._interval) clearInterval(this._interval);
            await this.onForceFlush(), await this._exporter.shutdown()
        }
    }
    AJ2.PeriodicExportingMetricReader = eY2
});
var JJ2 = U((IJ2) => {
    Object.defineProperty(IJ2, "__esModule", {
        value: !0
    });
    IJ2.InMemoryMetricExporter = void 0;
    var GJ2 = t6();
    class ZJ2 {
        _shutdown = !1;
        _aggregationTemporality;
        _metrics = [];
        constructor(A) {
            this._aggregationTemporality = A
        }
        export (A, Q) {
            if (this._shutdown) {
                setTimeout(() => Q({
                    code: GJ2.ExportResultCode.FAILED
                }), 0);
                return
            }
            this._metrics.push(A), setTimeout(() => Q({
                code: GJ2.ExportResultCode.SUCCESS
            }), 0)
        }
        getMetrics() {
            return this._metrics
        }
        forceFlush() {
            return Promise.resolve()
        }
        reset() {
            this._metrics = []
        }
        selectAggregationTemporality(A) {
            return this._aggregationTemporality
        }
        shutdown() {
            return this._shutdown = !0, Promise.resolve()
        }
    }
    IJ2.InMemoryMetricExporter = ZJ2
});
var VJ2 = U((XJ2) => {
    Object.defineProperty(XJ2, "__esModule", {
        value: !0
    });
    XJ2.ConsoleMetricExporter = void 0;
    var WJ2 = t6(),
        uD5 = IQ0();
    class WQ0 {
        _shutdown = !1;
        _temporalitySelector;
        constructor(A) {
            this._temporalitySelector = A?.temporalitySelector ?? uD5.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR
        }
        export (A, Q) {
            if (this._shutdown) {
                setImmediate(Q, {
                    code: WJ2.ExportResultCode.FAILED
                });
                return
            }
            return WQ0._sendMetrics(A, Q)
        }
        forceFlush() {
            return Promise.resolve()
        }
        selectAggregationTemporality(A) {
            return this._temporalitySelector(A)
        }
        shutdown() {
            return this._shutdown = !0, Promise.resolve()
        }
        static _sendMetrics(A, Q) {
            for (let B of A.scopeMetrics)
                for (let G of B.metrics) console.dir({
                    descriptor: G.descriptor,
                    dataPointType: G.dataPointType,
                    dataPoints: G.dataPoints
                }, {
                    depth: null
                });
            Q({
                code: WJ2.ExportResultCode.SUCCESS
            })
        }
    }
    XJ2.ConsoleMetricExporter = WQ0
});
var CJ2 = U((DJ2) => {
    Object.defineProperty(DJ2, "__esModule", {
        value: !0
    });
    DJ2.ViewRegistry = void 0;
    class KJ2 {
        _registeredViews = [];
        addView(A) {
            this._registeredViews.push(A)
        }
        findViews(A, Q) {
            return this._registeredViews.filter((G) => {
                return this._matchInstrument(G.instrumentSelector, A) && this._matchMeter(G.meterSelector, Q)
            })
        }
        _matchInstrument(A, Q) {
            return (A.getType() === void 0 || Q.type === A.getType()) && A.getNameFilter().match(Q.name) && A.getUnitFilter().match(Q.unit)
        }
        _matchMeter(A, Q) {
            return A.getNameFilter().match(Q.name) && (Q.version === void 0 || A.getVersionFilter().match(Q.version)) && (Q.schemaUrl === void 0 || A.getSchemaUrlFilter().match(Q.schemaUrl))
        }
    }
    DJ2.ViewRegistry = KJ2
});
var gMA = U((UJ2) => {
    Object.defineProperty(UJ2, "__esModule", {
        value: !0
    });
    UJ2.isValidName = UJ2.isDescriptorCompatibleWith = UJ2.createInstrumentDescriptorWithView = UJ2.createInstrumentDescriptor = void 0;
    var EJ2 = W9(),
        mD5 = GP();

    function dD5(A, Q, B) {
        if (!zJ2(A)) EJ2.diag.warn(`Invalid metric name: "${A}". The metric name should be a ASCII string with a length no greater than 255 characters.`);
        return {
            name: A,
            type: Q,
            description: B?.description ?? "",
            unit: B?.unit ?? "",
            valueType: B?.valueType ?? EJ2.ValueType.DOUBLE,
            advice: B?.advice ?? {}
        }
    }
    UJ2.createInstrumentDescriptor = dD5;

    function cD5(A, Q) {
        return {
            name: A.name ?? Q.name,
            description: A.description ?? Q.description,
            type: Q.type,
            unit: Q.unit,
            valueType: Q.valueType,
            advice: Q.advice
        }
    }
    UJ2.createInstrumentDescriptorWithView = cD5;

    function pD5(A, Q) {
        return (0, mD5.equalsCaseInsensitive)(A.name, Q.name) && A.unit === Q.unit && A.type === Q.type && A.valueType === Q.valueType
    }
    UJ2.isDescriptorCompatibleWith = pD5;
    var lD5 = /^[a-z][a-z0-9_.\-/]{0,254}$/i;

    function zJ2(A) {
        return A.match(lD5) != null
    }
    UJ2.isValidName = zJ2
});
var O91 = U((TJ2) => {
    Object.defineProperty(TJ2, "__esModule", {
        value: !0
    });
    TJ2.isObservableInstrument = TJ2.ObservableUpDownCounterInstrument = TJ2.ObservableGaugeInstrument = TJ2.ObservableCounterInstrument = TJ2.ObservableInstrument = TJ2.HistogramInstrument = TJ2.GaugeInstrument = TJ2.CounterInstrument = TJ2.UpDownCounterInstrument = TJ2.SyncInstrument = void 0;
    var PYA = W9(),
        sD5 = t6();
    class jYA {
        _writableMetricStorage;
        _descriptor;
        constructor(A, Q) {
            this._writableMetricStorage = A, this._descriptor = Q
        }
        _record(A, Q = {}, B = PYA.context.active()) {
            if (typeof A !== "number") {
                PYA.diag.warn(`non-number value provided to metric ${this._descriptor.name}: ${A}`);
                return
            }
            if (this._descriptor.valueType === PYA.ValueType.INT && !Number.isInteger(A)) {
                if (PYA.diag.warn(`INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`), A = Math.trunc(A), !Number.isInteger(A)) return
            }
            this._writableMetricStorage.record(A, Q, B, (0, sD5.millisToHrTime)(Date.now()))
        }
    }
    TJ2.SyncInstrument = jYA;
    class wJ2 extends jYA {
        add(A, Q, B) {
            this._record(A, Q, B)
        }
    }
    TJ2.UpDownCounterInstrument = wJ2;
    class qJ2 extends jYA {
        add(A, Q, B) {
            if (A < 0) {
                PYA.diag.warn(`negative value provided to counter ${this._descriptor.name}: ${A}`);
                return
            }
            this._record(A, Q, B)
        }
    }
    TJ2.CounterInstrument = qJ2;
    class NJ2 extends jYA {
        record(A, Q, B) {
            this._record(A, Q, B)
        }
    }
    TJ2.GaugeInstrument = NJ2;
    class LJ2 extends jYA {
        record(A, Q, B) {
            if (A < 0) {
                PYA.diag.warn(`negative value provided to histogram ${this._descriptor.name}: ${A}`);
                return
            }
            this._record(A, Q, B)
        }
    }
    TJ2.HistogramInstrument = LJ2;
    class SYA {
        _observableRegistry;
        _metricStorages;
        _descriptor;
        constructor(A, Q, B) {
            this._observableRegistry = B, this._descriptor = A, this._metricStorages = Q
        }
        addCallback(A) {
            this._observableRegistry.addCallback(A, this)
        }
        removeCallback(A) {
            this._observableRegistry.removeCallback(A, this)
        }
    }
    TJ2.ObservableInstrument = SYA;
    class MJ2 extends SYA {}
    TJ2.ObservableCounterInstrument = MJ2;
    class OJ2 extends SYA {}
    TJ2.ObservableGaugeInstrument = OJ2;
    class RJ2 extends SYA {}
    TJ2.ObservableUpDownCounterInstrument = RJ2;

    function rD5(A) {
        return A instanceof SYA
    }
    TJ2.isObservableInstrument = rD5
});
var kJ2 = U((SJ2) => {
    Object.defineProperty(SJ2, "__esModule", {
        value: !0
    });
    SJ2.Meter = void 0;
    var k1A = gMA(),
        y1A = O91(),
        x1A = Li();
    class jJ2 {
        _meterSharedState;
        constructor(A) {
            this._meterSharedState = A
        }
        createGauge(A, Q) {
            let B = (0, k1A.createInstrumentDescriptor)(A, x1A.InstrumentType.GAUGE, Q),
                G = this._meterSharedState.registerMetricStorage(B);
            return new y1A.GaugeInstrument(G, B)
        }
        createHistogram(A, Q) {
            let B = (0, k1A.createInstrumentDescriptor)(A, x1A.InstrumentType.HISTOGRAM, Q),
                G = this._meterSharedState.registerMetricStorage(B);
            return new y1A.HistogramInstrument(G, B)
        }
        createCounter(A, Q) {
            let B = (0, k1A.createInstrumentDescriptor)(A, x1A.InstrumentType.COUNTER, Q),
                G = this._meterSharedState.registerMetricStorage(B);
            return new y1A.CounterInstrument(G, B)
        }
        createUpDownCounter(A, Q) {
            let B = (0, k1A.createInstrumentDescriptor)(A, x1A.InstrumentType.UP_DOWN_COUNTER, Q),
                G = this._meterSharedState.registerMetricStorage(B);
            return new y1A.UpDownCounterInstrument(G, B)
        }
        createObservableGauge(A, Q) {
            let B = (0, k1A.createInstrumentDescriptor)(A, x1A.InstrumentType.OBSERVABLE_GAUGE, Q),
                G = this._meterSharedState.registerAsyncMetricStorage(B);
            return new y1A.ObservableGaugeInstrument(B, G, this._meterSharedState.observableRegistry)
        }
        createObservableCounter(A, Q) {
            let B = (0, k1A.createInstrumentDescriptor)(A, x1A.InstrumentType.OBSERVABLE_COUNTER, Q),
                G = this._meterSharedState.registerAsyncMetricStorage(B);
            return new y1A.ObservableCounterInstrument(B, G, this._meterSharedState.observableRegistry)
        }
        createObservableUpDownCounter(A, Q) {
            let B = (0, k1A.createInstrumentDescriptor)(A, x1A.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, Q),
                G = this._meterSharedState.registerAsyncMetricStorage(B);
            return new y1A.ObservableUpDownCounterInstrument(B, G, this._meterSharedState.observableRegistry)
        }
        addBatchObservableCallback(A, Q) {
            this._meterSharedState.observableRegistry.addBatchCallback(A, Q)
        }
        removeBatchObservableCallback(A, Q) {
            this._meterSharedState.observableRegistry.removeBatchCallback(A, Q)
        }
    }
    SJ2.Meter = jJ2
});
var XQ0 = U((xJ2) => {
    Object.defineProperty(xJ2, "__esModule", {
        value: !0
    });
    xJ2.MetricStorage = void 0;
    var YH5 = gMA();
    class yJ2 {
        _instrumentDescriptor;
        constructor(A) {
            this._instrumentDescriptor = A
        }
        getInstrumentDescriptor() {
            return this._instrumentDescriptor
        }
        updateDescription(A) {
            this._instrumentDescriptor = (0, YH5.createInstrumentDescriptor)(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
                description: A,
                valueType: this._instrumentDescriptor.valueType,
                unit: this._instrumentDescriptor.unit,
                advice: this._instrumentDescriptor.advice
            })
        }
    }
    xJ2.MetricStorage = yJ2
});
var uMA = U((fJ2) => {
    Object.defineProperty(fJ2, "__esModule", {
        value: !0
    });
    fJ2.AttributeHashMap = fJ2.HashMap = void 0;
    var JH5 = GP();
    class FQ0 {
        _hash;
        _valueMap = new Map;
        _keyMap = new Map;
        constructor(A) {
            this._hash = A
        }
        get(A, Q) {
            return Q ??= this._hash(A), this._valueMap.get(Q)
        }
        getOrDefault(A, Q) {
            let B = this._hash(A);
            if (this._valueMap.has(B)) return this._valueMap.get(B);
            let G = Q();
            if (!this._keyMap.has(B)) this._keyMap.set(B, A);
            return this._valueMap.set(B, G), G
        }
        set(A, Q, B) {
            if (B ??= this._hash(A), !this._keyMap.has(B)) this._keyMap.set(B, A);
            this._valueMap.set(B, Q)
        }
        has(A, Q) {
            return Q ??= this._hash(A), this._valueMap.has(Q)
        }* keys() {
            let A = this._keyMap.entries(),
                Q = A.next();
            while (Q.done !== !0) yield [Q.value[1], Q.value[0]], Q = A.next()
        }* entries() {
            let A = this._valueMap.entries(),
                Q = A.next();
            while (Q.done !== !0) yield [this._keyMap.get(Q.value[0]), Q.value[1], Q.value[0]], Q = A.next()
        }
        get size() {
            return this._valueMap.size
        }
    }
    fJ2.HashMap = FQ0;
    class bJ2 extends FQ0 {
        constructor() {
            super(JH5.hashAttributes)
        }
    }
    fJ2.AttributeHashMap = bJ2
});
var KQ0 = U((uJ2) => {
    Object.defineProperty(uJ2, "__esModule", {
        value: !0
    });
    uJ2.DeltaMetricProcessor = void 0;
    var XH5 = GP(),
        VQ0 = uMA();
    class gJ2 {
        _aggregator;
        _activeCollectionStorage = new VQ0.AttributeHashMap;
        _cumulativeMemoStorage = new VQ0.AttributeHashMap;
        _cardinalityLimit;
        _overflowAttributes = {
            "otel.metric.overflow": !0
        };
        _overflowHashCode;
        constructor(A, Q) {
            this._aggregator = A, this._cardinalityLimit = (Q ?? 2000) - 1, this._overflowHashCode = (0, XH5.hashAttributes)(this._overflowAttributes)
        }
        record(A, Q, B, G) {
            let Z = this._activeCollectionStorage.get(Q);
            if (!Z) {
                if (this._activeCollectionStorage.size >= this._cardinalityLimit) {
                    this._activeCollectionStorage.getOrDefault(this._overflowAttributes, () => this._aggregator.createAccumulation(G))?.record(A);
                    return
                }
                Z = this._aggregator.createAccumulation(G), this._activeCollectionStorage.set(Q, Z)
            }
            Z?.record(A)
        }
        batchCumulate(A, Q) {
            Array.from(A.entries()).forEach(([B, G, Z]) => {
                let I = this._aggregator.createAccumulation(Q);
                I?.record(G);
                let Y = I;
                if (this._cumulativeMemoStorage.has(B, Z)) {
                    let J = this._cumulativeMemoStorage.get(B, Z);
                    Y = this._aggregator.diff(J, I)
                } else if (this._cumulativeMemoStorage.size >= this._cardinalityLimit) {
                    if (B = this._overflowAttributes, Z = this._overflowHashCode, this._cumulativeMemoStorage.has(B, Z)) {
                        let J = this._cumulativeMemoStorage.get(B, Z);
                        Y = this._aggregator.diff(J, I)
                    }
                }
                if (this._activeCollectionStorage.has(B, Z)) {
                    let J = this._activeCollectionStorage.get(B, Z);
                    Y = this._aggregator.merge(J, Y)
                }
                this._cumulativeMemoStorage.set(B, I, Z), this._activeCollectionStorage.set(B, Y, Z)
            })
        }
        collect() {
            let A = this._activeCollectionStorage;
            return this._activeCollectionStorage = new VQ0.AttributeHashMap, A
        }
    }
    uJ2.DeltaMetricProcessor = gJ2
});
var DQ0 = U((dJ2) => {
    Object.defineProperty(dJ2, "__esModule", {
        value: !0
    });
    dJ2.TemporalMetricProcessor = void 0;
    var FH5 = E91(),
        VH5 = uMA();
    class mMA {
        _aggregator;
        _unreportedAccumulations = new Map;
        _reportHistory = new Map;
        constructor(A, Q) {
            this._aggregator = A, Q.forEach((B) => {
                this._unreportedAccumulations.set(B, [])
            })
        }
        buildMetrics(A, Q, B, G) {
            this._stashAccumulations(B);
            let Z = this._getMergedUnreportedAccumulations(A),
                I = Z,
                Y;
            if (this._reportHistory.has(A)) {
                let W = this._reportHistory.get(A),
                    X = W.collectionTime;
                if (Y = W.aggregationTemporality, Y === FH5.AggregationTemporality.CUMULATIVE) I = mMA.merge(W.accumulations, Z, this._aggregator);
                else I = mMA.calibrateStartTime(W.accumulations, Z, X)
            } else Y = A.selectAggregationTemporality(Q.type);
            this._reportHistory.set(A, {
                accumulations: I,
                collectionTime: G,
                aggregationTemporality: Y
            });
            let J = KH5(I);
            if (J.length === 0) return;
            return this._aggregator.toMetricData(Q, Y, J, G)
        }
        _stashAccumulations(A) {
            let Q = this._unreportedAccumulations.keys();
            for (let B of Q) {
                let G = this._unreportedAccumulations.get(B);
                if (G === void 0) G = [], this._unreportedAccumulations.set(B, G);
                G.push(A)
            }
        }
        _getMergedUnreportedAccumulations(A) {
            let Q = new VH5.AttributeHashMap,
                B = this._unreportedAccumulations.get(A);
            if (this._unreportedAccumulations.set(A, []), B === void 0) return Q;
            for (let G of B) Q = mMA.merge(Q, G, this._aggregator);
            return Q
        }
        static merge(A, Q, B) {
            let G = A,
                Z = Q.entries(),
                I = Z.next();
            while (I.done !== !0) {
                let [Y, J, W] = I.value;
                if (A.has(Y, W)) {
                    let X = A.get(Y, W),
                        F = B.merge(X, J);
                    G.set(Y, F, W)
                } else G.set(Y, J, W);
                I = Z.next()
            }
            return G
        }
        static calibrateStartTime(A, Q, B) {
            for (let [G, Z] of A.keys()) Q.get(G, Z)?.setStartTime(B);
            return Q
        }
    }
    dJ2.TemporalMetricProcessor = mMA;

    function KH5(A) {
        return Array.from(A.entries())
    }
});
var nJ2 = U((lJ2) => {
    Object.defineProperty(lJ2, "__esModule", {
        value: !0
    });
    lJ2.AsyncMetricStorage = void 0;
    var DH5 = XQ0(),
        HH5 = KQ0(),
        CH5 = DQ0(),
        EH5 = uMA();
    class pJ2 extends DH5.MetricStorage {
        _attributesProcessor;
        _aggregationCardinalityLimit;
        _deltaMetricStorage;
        _temporalMetricStorage;
        constructor(A, Q, B, G, Z) {
            super(A);
            this._attributesProcessor = B, this._aggregationCardinalityLimit = Z, this._deltaMetricStorage = new HH5.DeltaMetricProcessor(Q, this._aggregationCardinalityLimit), this._temporalMetricStorage = new CH5.TemporalMetricProcessor(Q, G)
        }
        record(A, Q) {
            let B = new EH5.AttributeHashMap;
            Array.from(A.entries()).forEach(([G, Z]) => {
                B.set(this._attributesProcessor.process(G), Z)
            }), this._deltaMetricStorage.batchCumulate(B, Q)
        }
        collect(A, Q) {
            let B = this._deltaMetricStorage.collect();
            return this._temporalMetricStorage.buildMetrics(A, this._instrumentDescriptor, B, Q)
        }
    }
    lJ2.AsyncMetricStorage = pJ2
});
var AW2 = U((tJ2) => {
    Object.defineProperty(tJ2, "__esModule", {
        value: !0
    });
    tJ2.getConflictResolutionRecipe = tJ2.getDescriptionResolutionRecipe = tJ2.getTypeConflictResolutionRecipe = tJ2.getUnitConflictResolutionRecipe = tJ2.getValueTypeConflictResolutionRecipe = tJ2.getIncompatibilityDetails = void 0;

    function zH5(A, Q) {
        let B = "";
        if (A.unit !== Q.unit) B += `	- Unit '${A.unit}' does not match '${Q.unit}'
`;
        if (A.type !== Q.type) B += `	- Type '${A.type}' does not match '${Q.type}'
`;
        if (A.valueType !== Q.valueType) B += `	- Value Type '${A.valueType}' does not match '${Q.valueType}'
`;
        if (A.description !== Q.description) B += `	- Description '${A.description}' does not match '${Q.description}'
`;
        return B
    }
    tJ2.getIncompatibilityDetails = zH5;

    function aJ2(A, Q) {
        return `	- use valueType '${A.valueType}' on instrument creation or use an instrument name other than '${Q.name}'`
    }
    tJ2.getValueTypeConflictResolutionRecipe = aJ2;

    function sJ2(A, Q) {
        return `	- use unit '${A.unit}' on instrument creation or use an instrument name other than '${Q.name}'`
    }
    tJ2.getUnitConflictResolutionRecipe = sJ2;

    function rJ2(A, Q) {
        let B = {
                name: Q.name,
                type: Q.type,
                unit: Q.unit
            },
            G = JSON.stringify(B);
        return `	- create a new view with a name other than '${A.name}' and InstrumentSelector '${G}'`
    }
    tJ2.getTypeConflictResolutionRecipe = rJ2;

    function oJ2(A, Q) {
        let B = {
                name: Q.name,
                type: Q.type,
                unit: Q.unit
            },
            G = JSON.stringify(B);
        return `	- create a new view with a name other than '${A.name}' and InstrumentSelector '${G}'
    	- OR - create a new view with the name ${A.name} and description '${A.description}' and InstrumentSelector ${G}
    	- OR - create a new view with the name ${Q.name} and description '${A.description}' and InstrumentSelector ${G}`
    }
    tJ2.getDescriptionResolutionRecipe = oJ2;

    function UH5(A, Q) {
        if (A.valueType !== Q.valueType) return aJ2(A, Q);
        if (A.unit !== Q.unit) return sJ2(A, Q);
        if (A.type !== Q.type) return rJ2(A, Q);
        if (A.description !== Q.description) return oJ2(A, Q);
        return ""
    }
    tJ2.getConflictResolutionRecipe = UH5
});
var ZW2 = U((BW2) => {
    Object.defineProperty(BW2, "__esModule", {
        value: !0
    });
    BW2.MetricStorageRegistry = void 0;
    var MH5 = gMA(),
        QW2 = W9(),
        R91 = AW2();
    class HQ0 {
        _sharedRegistry = new Map;
        _perCollectorRegistry = new Map;
        static create() {
            return new HQ0
        }
        getStorages(A) {
            let Q = [];
            for (let G of this._sharedRegistry.values()) Q = Q.concat(G);
            let B = this._perCollectorRegistry.get(A);
            if (B != null)
                for (let G of B.values()) Q = Q.concat(G);
            return Q
        }
        register(A) {
            this._registerStorage(A, this._sharedRegistry)
        }
        registerForCollector(A, Q) {
            let B = this._perCollectorRegistry.get(A);
            if (B == null) B = new Map, this._perCollectorRegistry.set(A, B);
            this._registerStorage(Q, B)
        }
        findOrUpdateCompatibleStorage(A) {
            let Q = this._sharedRegistry.get(A.name);
            if (Q === void 0) return null;
            return this._findOrUpdateCompatibleStorage(A, Q)
        }
        findOrUpdateCompatibleCollectorStorage(A, Q) {
            let B = this._perCollectorRegistry.get(A);
            if (B === void 0) return null;
            let G = B.get(Q.name);
            if (G === void 0) return null;
            return this._findOrUpdateCompatibleStorage(Q, G)
        }
        _registerStorage(A, Q) {
            let B = A.getInstrumentDescriptor(),
                G = Q.get(B.name);
            if (G === void 0) {
                Q.set(B.name, [A]);
                return
            }
            G.push(A)
        }
        _findOrUpdateCompatibleStorage(A, Q) {
            let B = null;
            for (let G of Q) {
                let Z = G.getInstrumentDescriptor();
                if ((0, MH5.isDescriptorCompatibleWith)(Z, A)) {
                    if (Z.description !== A.description) {
                        if (A.description.length > Z.description.length) G.updateDescription(A.description);
                        QW2.diag.warn("A view or instrument with the name ", A.name, ` has already been registered, but has a different description and is incompatible with another registered view.
`, `Details:
`, (0, R91.getIncompatibilityDetails)(Z, A), `The longer description will be used.
To resolve the conflict:`, (0, R91.getConflictResolutionRecipe)(Z, A))
                    }
                    B = G
                } else QW2.diag.warn("A view or instrument with the name ", A.name, ` has already been registered and is incompatible with another registered view.
`, `Details:
`, (0, R91.getIncompatibilityDetails)(Z, A), `To resolve the conflict:
`, (0, R91.getConflictResolutionRecipe)(Z, A))
            }
            return B
        }
    }
    BW2.MetricStorageRegistry = HQ0
});
var WW2 = U((YW2) => {
    Object.defineProperty(YW2, "__esModule", {
        value: !0
    });
    YW2.MultiMetricStorage = void 0;
    class IW2 {
        _backingStorages;
        constructor(A) {
            this._backingStorages = A
        }
        record(A, Q, B, G) {
            this._backingStorages.forEach((Z) => {
                Z.record(A, Q, B, G)
            })
        }
    }
    YW2.MultiMetricStorage = IW2
});
var HW2 = U((KW2) => {
    Object.defineProperty(KW2, "__esModule", {
        value: !0
    });
    KW2.BatchObservableResultImpl = KW2.ObservableResultImpl = void 0;
    var _YA = W9(),
        XW2 = uMA(),
        OH5 = O91();
    class FW2 {
        _instrumentName;
        _valueType;
        _buffer = new XW2.AttributeHashMap;
        constructor(A, Q) {
            this._instrumentName = A, this._valueType = Q
        }
        observe(A, Q = {}) {
            if (typeof A !== "number") {
                _YA.diag.warn(`non-number value provided to metric ${this._instrumentName}: ${A}`);
                return
            }
            if (this._valueType === _YA.ValueType.INT && !Number.isInteger(A)) {
                if (_YA.diag.warn(`INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`), A = Math.trunc(A), !Number.isInteger(A)) return
            }
            this._buffer.set(Q, A)
        }
    }
    KW2.ObservableResultImpl = FW2;
    class VW2 {
        _buffer = new Map;
        observe(A, Q, B = {}) {
            if (!(0, OH5.isObservableInstrument)(A)) return;
            let G = this._buffer.get(A);
            if (G == null) G = new XW2.AttributeHashMap, this._buffer.set(A, G);
            if (typeof Q !== "number") {
                _YA.diag.warn(`non-number value provided to metric ${A._descriptor.name}: ${Q}`);
                return
            }
            if (A._descriptor.valueType === _YA.ValueType.INT && !Number.isInteger(Q)) {
                if (_YA.diag.warn(`INT value type cannot accept a floating-point value for ${A._descriptor.name}, ignoring the fractional digits.`), Q = Math.trunc(Q), !Number.isInteger(Q)) return
            }
            G.set(B, Q)
        }
    }
    KW2.BatchObservableResultImpl = VW2
});
var wW2 = U((UW2) => {
    Object.defineProperty(UW2, "__esModule", {
        value: !0
    });
    UW2.ObservableRegistry = void 0;
    var TH5 = W9(),
        CW2 = O91(),
        EW2 = HW2(),
        dMA = GP();
    class zW2 {
        _callbacks = [];
        _batchCallbacks = [];
        addCallback(A, Q) {
            if (this._findCallback(A, Q) >= 0) return;
            this._callbacks.push({
                callback: A,
                instrument: Q
            })
        }
        removeCallback(A, Q) {
            let B = this._findCallback(A, Q);
            if (B < 0) return;
            this._callbacks.splice(B, 1)
        }
        addBatchCallback(A, Q) {
            let B = new Set(Q.filter(CW2.isObservableInstrument));
            if (B.size === 0) {
                TH5.diag.error("BatchObservableCallback is not associated with valid instruments", Q);
                return
            }
            if (this._findBatchCallback(A, B) >= 0) return;
            this._batchCallbacks.push({
                callback: A,
                instruments: B
            })
        }
        removeBatchCallback(A, Q) {
            let B = new Set(Q.filter(CW2.isObservableInstrument)),
                G = this._findBatchCallback(A, B);
            if (G < 0) return;
            this._batchCallbacks.splice(G, 1)
        }
        async observe(A, Q) {
            let B = this._observeCallbacks(A, Q),
                G = this._observeBatchCallbacks(A, Q);
            return (await (0, dMA.PromiseAllSettled)([...B, ...G])).filter(dMA.isPromiseAllSettledRejectionResult).map((Y) => Y.reason)
        }
        _observeCallbacks(A, Q) {
            return this._callbacks.map(async ({
                callback: B,
                instrument: G
            }) => {
                let Z = new EW2.ObservableResultImpl(G._descriptor.name, G._descriptor.valueType),
                    I = Promise.resolve(B(Z));
                if (Q != null) I = (0, dMA.callWithTimeout)(I, Q);
                await I, G._metricStorages.forEach((Y) => {
                    Y.record(Z._buffer, A)
                })
            })
        }
        _observeBatchCallbacks(A, Q) {
            return this._batchCallbacks.map(async ({
                callback: B,
                instruments: G
            }) => {
                let Z = new EW2.BatchObservableResultImpl,
                    I = Promise.resolve(B(Z));
                if (Q != null) I = (0, dMA.callWithTimeout)(I, Q);
                await I, G.forEach((Y) => {
                    let J = Z._buffer.get(Y);
                    if (J == null) return;
                    Y._metricStorages.forEach((W) => {
                        W.record(J, A)
                    })
                })
            })
        }
        _findCallback(A, Q) {
            return this._callbacks.findIndex((B) => {
                return B.callback === A && B.instrument === Q
            })
        }
        _findBatchCallback(A, Q) {
            return this._batchCallbacks.findIndex((B) => {
                return B.callback === A && (0, dMA.setEquals)(B.instruments, Q)
            })
        }
    }
    UW2.ObservableRegistry = zW2
});
var MW2 = U((NW2) => {
    Object.defineProperty(NW2, "__esModule", {
        value: !0
    });
    NW2.SyncMetricStorage = void 0;
    var PH5 = XQ0(),
        jH5 = KQ0(),
        SH5 = DQ0();
    class qW2 extends PH5.MetricStorage {
        _attributesProcessor;
        _aggregationCardinalityLimit;
        _deltaMetricStorage;
        _temporalMetricStorage;
        constructor(A, Q, B, G, Z) {
            super(A);
            this._attributesProcessor = B, this._aggregationCardinalityLimit = Z, this._deltaMetricStorage = new jH5.DeltaMetricProcessor(Q, this._aggregationCardinalityLimit), this._temporalMetricStorage = new SH5.TemporalMetricProcessor(Q, G)
        }
        record(A, Q, B, G) {
            Q = this._attributesProcessor.process(Q, B), this._deltaMetricStorage.record(A, Q, B, G)
        }
        collect(A, Q) {
            let B = this._deltaMetricStorage.collect();
            return this._temporalMetricStorage.buildMetrics(A, this._instrumentDescriptor, B, Q)
        }
    }
    NW2.SyncMetricStorage = qW2
});
var T91 = U((jW2) => {
    Object.defineProperty(jW2, "__esModule", {
        value: !0
    });
    jW2.createDenyListAttributesProcessor = jW2.createAllowListAttributesProcessor = jW2.createMultiAttributesProcessor = jW2.createNoopAttributesProcessor = void 0;
    class OW2 {
        process(A, Q) {
            return A
        }
    }
    class RW2 {
        _processors;
        constructor(A) {
            this._processors = A
        }
        process(A, Q) {
            let B = A;
            for (let G of this._processors) B = G.process(B, Q);