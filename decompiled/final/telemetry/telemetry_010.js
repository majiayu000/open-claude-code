/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: telemetry_010.js
 * 处理时间: 2025-12-09T03:41:38.416Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 10/14
 * Lines: 301968 - 303467 (1500 lines)
 * Original file: cli.js
 */

                            }
                            return F
                        }, Z.decodeDelimited = function(Y) {
                            if (!(Y instanceof B0)) Y = new B0(Y);
                            return this.decode(Y, Y.uint32())
                        }, Z.verify = function(Y) {
                            if (typeof Y !== "object" || Y === null) return "object expected";
                            if (Y.scope != null && Y.hasOwnProperty("scope")) {
                                var J = RA.opentelemetry.proto.common.v1.InstrumentationScope.verify(Y.scope);
                                if (J) return "scope." + J
                            }
                            if (Y.metrics != null && Y.hasOwnProperty("metrics")) {
                                if (!Array.isArray(Y.metrics)) return "metrics: array expected";
                                for (var W = 0; W < Y.metrics.length; ++W) {
                                    var J = RA.opentelemetry.proto.metrics.v1.Metric.verify(Y.metrics[W]);
                                    if (J) return "metrics." + J
                                }
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) {
                                if (!_A.isString(Y.schemaUrl)) return "schemaUrl: string expected"
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.metrics.v1.ScopeMetrics) return Y;
                            var J = new RA.opentelemetry.proto.metrics.v1.ScopeMetrics;
                            if (Y.scope != null) {
                                if (typeof Y.scope !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.scope: object expected");
                                J.scope = RA.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(Y.scope)
                            }
                            if (Y.metrics) {
                                if (!Array.isArray(Y.metrics)) throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: array expected");
                                J.metrics = [];
                                for (var W = 0; W < Y.metrics.length; ++W) {
                                    if (typeof Y.metrics[W] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: object expected");
                                    J.metrics[W] = RA.opentelemetry.proto.metrics.v1.Metric.fromObject(Y.metrics[W])
                                }
                            }
                            if (Y.schemaUrl != null) J.schemaUrl = String(Y.schemaUrl);
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.metrics = [];
                            if (J.defaults) W.scope = null, W.schemaUrl = "";
                            if (Y.scope != null && Y.hasOwnProperty("scope")) W.scope = RA.opentelemetry.proto.common.v1.InstrumentationScope.toObject(Y.scope, J);
                            if (Y.metrics && Y.metrics.length) {
                                W.metrics = [];
                                for (var X = 0; X < Y.metrics.length; ++X) W.metrics[X] = RA.opentelemetry.proto.metrics.v1.Metric.toObject(Y.metrics[X], J)
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) W.schemaUrl = Y.schemaUrl;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.metrics.v1.ScopeMetrics"
                        }, Z
                    }(), G.Metric = function() {
                        function Z(Y) {
                            if (this.metadata = [], Y) {
                                for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                    if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                            }
                        }
                        Z.prototype.name = null, Z.prototype.description = null, Z.prototype.unit = null, Z.prototype.gauge = null, Z.prototype.sum = null, Z.prototype.histogram = null, Z.prototype.exponentialHistogram = null, Z.prototype.summary = null, Z.prototype.metadata = _A.emptyArray;
                        var I;
                        return Object.defineProperty(Z.prototype, "data", {
                            get: _A.oneOfGetter(I = ["gauge", "sum", "histogram", "exponentialHistogram", "summary"]),
                            set: _A.oneOfSetter(I)
                        }), Z.create = function(J) {
                            return new Z(J)
                        }, Z.encode = function(J, W) {
                            if (!W) W = E8.create();
                            if (J.name != null && Object.hasOwnProperty.call(J, "name")) W.uint32(10).string(J.name);
                            if (J.description != null && Object.hasOwnProperty.call(J, "description")) W.uint32(18).string(J.description);
                            if (J.unit != null && Object.hasOwnProperty.call(J, "unit")) W.uint32(26).string(J.unit);
                            if (J.gauge != null && Object.hasOwnProperty.call(J, "gauge")) RA.opentelemetry.proto.metrics.v1.Gauge.encode(J.gauge, W.uint32(42).fork()).ldelim();
                            if (J.sum != null && Object.hasOwnProperty.call(J, "sum")) RA.opentelemetry.proto.metrics.v1.Sum.encode(J.sum, W.uint32(58).fork()).ldelim();
                            if (J.histogram != null && Object.hasOwnProperty.call(J, "histogram")) RA.opentelemetry.proto.metrics.v1.Histogram.encode(J.histogram, W.uint32(74).fork()).ldelim();
                            if (J.exponentialHistogram != null && Object.hasOwnProperty.call(J, "exponentialHistogram")) RA.opentelemetry.proto.metrics.v1.ExponentialHistogram.encode(J.exponentialHistogram, W.uint32(82).fork()).ldelim();
                            if (J.summary != null && Object.hasOwnProperty.call(J, "summary")) RA.opentelemetry.proto.metrics.v1.Summary.encode(J.summary, W.uint32(90).fork()).ldelim();
                            if (J.metadata != null && J.metadata.length)
                                for (var X = 0; X < J.metadata.length; ++X) RA.opentelemetry.proto.common.v1.KeyValue.encode(J.metadata[X], W.uint32(98).fork()).ldelim();
                            return W
                        }, Z.encodeDelimited = function(J, W) {
                            return this.encode(J, W).ldelim()
                        }, Z.decode = function(J, W, X) {
                            if (!(J instanceof B0)) J = B0.create(J);
                            var F = W === void 0 ? J.len : J.pos + W,
                                V = new RA.opentelemetry.proto.metrics.v1.Metric;
                            while (J.pos < F) {
                                var K = J.uint32();
                                if (K === X) break;
                                switch (K >>> 3) {
                                    case 1: {
                                        V.name = J.string();
                                        break
                                    }
                                    case 2: {
                                        V.description = J.string();
                                        break
                                    }
                                    case 3: {
                                        V.unit = J.string();
                                        break
                                    }
                                    case 5: {
                                        V.gauge = RA.opentelemetry.proto.metrics.v1.Gauge.decode(J, J.uint32());
                                        break
                                    }
                                    case 7: {
                                        V.sum = RA.opentelemetry.proto.metrics.v1.Sum.decode(J, J.uint32());
                                        break
                                    }
                                    case 9: {
                                        V.histogram = RA.opentelemetry.proto.metrics.v1.Histogram.decode(J, J.uint32());
                                        break
                                    }
                                    case 10: {
                                        V.exponentialHistogram = RA.opentelemetry.proto.metrics.v1.ExponentialHistogram.decode(J, J.uint32());
                                        break
                                    }
                                    case 11: {
                                        V.summary = RA.opentelemetry.proto.metrics.v1.Summary.decode(J, J.uint32());
                                        break
                                    }
                                    case 12: {
                                        if (!(V.metadata && V.metadata.length)) V.metadata = [];
                                        V.metadata.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                                        break
                                    }
                                    default:
                                        J.skipType(K & 7);
                                        break
                                }
                            }
                            return V
                        }, Z.decodeDelimited = function(J) {
                            if (!(J instanceof B0)) J = new B0(J);
                            return this.decode(J, J.uint32())
                        }, Z.verify = function(J) {
                            if (typeof J !== "object" || J === null) return "object expected";
                            var W = {};
                            if (J.name != null && J.hasOwnProperty("name")) {
                                if (!_A.isString(J.name)) return "name: string expected"
                            }
                            if (J.description != null && J.hasOwnProperty("description")) {
                                if (!_A.isString(J.description)) return "description: string expected"
                            }
                            if (J.unit != null && J.hasOwnProperty("unit")) {
                                if (!_A.isString(J.unit)) return "unit: string expected"
                            }
                            if (J.gauge != null && J.hasOwnProperty("gauge")) {
                                W.data = 1;
                                {
                                    var X = RA.opentelemetry.proto.metrics.v1.Gauge.verify(J.gauge);
                                    if (X) return "gauge." + X
                                }
                            }
                            if (J.sum != null && J.hasOwnProperty("sum")) {
                                if (W.data === 1) return "data: multiple values";
                                W.data = 1;
                                {
                                    var X = RA.opentelemetry.proto.metrics.v1.Sum.verify(J.sum);
                                    if (X) return "sum." + X
                                }
                            }
                            if (J.histogram != null && J.hasOwnProperty("histogram")) {
                                if (W.data === 1) return "data: multiple values";
                                W.data = 1;
                                {
                                    var X = RA.opentelemetry.proto.metrics.v1.Histogram.verify(J.histogram);
                                    if (X) return "histogram." + X
                                }
                            }
                            if (J.exponentialHistogram != null && J.hasOwnProperty("exponentialHistogram")) {
                                if (W.data === 1) return "data: multiple values";
                                W.data = 1;
                                {
                                    var X = RA.opentelemetry.proto.metrics.v1.ExponentialHistogram.verify(J.exponentialHistogram);
                                    if (X) return "exponentialHistogram." + X
                                }
                            }
                            if (J.summary != null && J.hasOwnProperty("summary")) {
                                if (W.data === 1) return "data: multiple values";
                                W.data = 1;
                                {
                                    var X = RA.opentelemetry.proto.metrics.v1.Summary.verify(J.summary);
                                    if (X) return "summary." + X
                                }
                            }
                            if (J.metadata != null && J.hasOwnProperty("metadata")) {
                                if (!Array.isArray(J.metadata)) return "metadata: array expected";
                                for (var F = 0; F < J.metadata.length; ++F) {
                                    var X = RA.opentelemetry.proto.common.v1.KeyValue.verify(J.metadata[F]);
                                    if (X) return "metadata." + X
                                }
                            }
                            return null
                        }, Z.fromObject = function(J) {
                            if (J instanceof RA.opentelemetry.proto.metrics.v1.Metric) return J;
                            var W = new RA.opentelemetry.proto.metrics.v1.Metric;
                            if (J.name != null) W.name = String(J.name);
                            if (J.description != null) W.description = String(J.description);
                            if (J.unit != null) W.unit = String(J.unit);
                            if (J.gauge != null) {
                                if (typeof J.gauge !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.gauge: object expected");
                                W.gauge = RA.opentelemetry.proto.metrics.v1.Gauge.fromObject(J.gauge)
                            }
                            if (J.sum != null) {
                                if (typeof J.sum !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.sum: object expected");
                                W.sum = RA.opentelemetry.proto.metrics.v1.Sum.fromObject(J.sum)
                            }
                            if (J.histogram != null) {
                                if (typeof J.histogram !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.histogram: object expected");
                                W.histogram = RA.opentelemetry.proto.metrics.v1.Histogram.fromObject(J.histogram)
                            }
                            if (J.exponentialHistogram != null) {
                                if (typeof J.exponentialHistogram !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.exponentialHistogram: object expected");
                                W.exponentialHistogram = RA.opentelemetry.proto.metrics.v1.ExponentialHistogram.fromObject(J.exponentialHistogram)
                            }
                            if (J.summary != null) {
                                if (typeof J.summary !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.summary: object expected");
                                W.summary = RA.opentelemetry.proto.metrics.v1.Summary.fromObject(J.summary)
                            }
                            if (J.metadata) {
                                if (!Array.isArray(J.metadata)) throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: array expected");
                                W.metadata = [];
                                for (var X = 0; X < J.metadata.length; ++X) {
                                    if (typeof J.metadata[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: object expected");
                                    W.metadata[X] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.metadata[X])
                                }
                            }
                            return W
                        }, Z.toObject = function(J, W) {
                            if (!W) W = {};
                            var X = {};
                            if (W.arrays || W.defaults) X.metadata = [];
                            if (W.defaults) X.name = "", X.description = "", X.unit = "";
                            if (J.name != null && J.hasOwnProperty("name")) X.name = J.name;
                            if (J.description != null && J.hasOwnProperty("description")) X.description = J.description;
                            if (J.unit != null && J.hasOwnProperty("unit")) X.unit = J.unit;
                            if (J.gauge != null && J.hasOwnProperty("gauge")) {
                                if (X.gauge = RA.opentelemetry.proto.metrics.v1.Gauge.toObject(J.gauge, W), W.oneofs) X.data = "gauge"
                            }
                            if (J.sum != null && J.hasOwnProperty("sum")) {
                                if (X.sum = RA.opentelemetry.proto.metrics.v1.Sum.toObject(J.sum, W), W.oneofs) X.data = "sum"
                            }
                            if (J.histogram != null && J.hasOwnProperty("histogram")) {
                                if (X.histogram = RA.opentelemetry.proto.metrics.v1.Histogram.toObject(J.histogram, W), W.oneofs) X.data = "histogram"
                            }
                            if (J.exponentialHistogram != null && J.hasOwnProperty("exponentialHistogram")) {
                                if (X.exponentialHistogram = RA.opentelemetry.proto.metrics.v1.ExponentialHistogram.toObject(J.exponentialHistogram, W), W.oneofs) X.data = "exponentialHistogram"
                            }
                            if (J.summary != null && J.hasOwnProperty("summary")) {
                                if (X.summary = RA.opentelemetry.proto.metrics.v1.Summary.toObject(J.summary, W), W.oneofs) X.data = "summary"
                            }
                            if (J.metadata && J.metadata.length) {
                                X.metadata = [];
                                for (var F = 0; F < J.metadata.length; ++F) X.metadata[F] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(J.metadata[F], W)
                            }
                            return X
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(J) {
                            if (J === void 0) J = "type.googleapis.com";
                            return J + "/opentelemetry.proto.metrics.v1.Metric"
                        }, Z
                    }(), G.Gauge = function() {
                        function Z(I) {
                            if (this.dataPoints = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.dataPoints = _A.emptyArray, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.dataPoints != null && Y.dataPoints.length)
                                for (var W = 0; W < Y.dataPoints.length; ++W) RA.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(Y.dataPoints[W], J.uint32(10).fork()).ldelim();
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.metrics.v1.Gauge;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        if (!(F.dataPoints && F.dataPoints.length)) F.dataPoints = [];
                                        F.dataPoints.push(RA.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(Y, Y.uint32()));
                                        break
                                    }
                                    default:
                                        Y.skipType(V & 7);
                                        break
                                }
                            }
                            return F
                        }, Z.decodeDelimited = function(Y) {
                            if (!(Y instanceof B0)) Y = new B0(Y);
                            return this.decode(Y, Y.uint32())
                        }, Z.verify = function(Y) {
                            if (typeof Y !== "object" || Y === null) return "object expected";
                            if (Y.dataPoints != null && Y.hasOwnProperty("dataPoints")) {
                                if (!Array.isArray(Y.dataPoints)) return "dataPoints: array expected";
                                for (var J = 0; J < Y.dataPoints.length; ++J) {
                                    var W = RA.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(Y.dataPoints[J]);
                                    if (W) return "dataPoints." + W
                                }
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.metrics.v1.Gauge) return Y;
                            var J = new RA.opentelemetry.proto.metrics.v1.Gauge;
                            if (Y.dataPoints) {
                                if (!Array.isArray(Y.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: array expected");
                                J.dataPoints = [];
                                for (var W = 0; W < Y.dataPoints.length; ++W) {
                                    if (typeof Y.dataPoints[W] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: object expected");
                                    J.dataPoints[W] = RA.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(Y.dataPoints[W])
                                }
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.dataPoints = [];
                            if (Y.dataPoints && Y.dataPoints.length) {
                                W.dataPoints = [];
                                for (var X = 0; X < Y.dataPoints.length; ++X) W.dataPoints[X] = RA.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(Y.dataPoints[X], J)
                            }
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.metrics.v1.Gauge"
                        }, Z
                    }(), G.Sum = function() {
                        function Z(I) {
                            if (this.dataPoints = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.dataPoints = _A.emptyArray, Z.prototype.aggregationTemporality = null, Z.prototype.isMonotonic = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.dataPoints != null && Y.dataPoints.length)
                                for (var W = 0; W < Y.dataPoints.length; ++W) RA.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(Y.dataPoints[W], J.uint32(10).fork()).ldelim();
                            if (Y.aggregationTemporality != null && Object.hasOwnProperty.call(Y, "aggregationTemporality")) J.uint32(16).int32(Y.aggregationTemporality);
                            if (Y.isMonotonic != null && Object.hasOwnProperty.call(Y, "isMonotonic")) J.uint32(24).bool(Y.isMonotonic);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.metrics.v1.Sum;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        if (!(F.dataPoints && F.dataPoints.length)) F.dataPoints = [];
                                        F.dataPoints.push(RA.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 2: {
                                        F.aggregationTemporality = Y.int32();
                                        break
                                    }
                                    case 3: {
                                        F.isMonotonic = Y.bool();
                                        break
                                    }
                                    default:
                                        Y.skipType(V & 7);
                                        break
                                }
                            }
                            return F
                        }, Z.decodeDelimited = function(Y) {
                            if (!(Y instanceof B0)) Y = new B0(Y);
                            return this.decode(Y, Y.uint32())
                        }, Z.verify = function(Y) {
                            if (typeof Y !== "object" || Y === null) return "object expected";
                            if (Y.dataPoints != null && Y.hasOwnProperty("dataPoints")) {
                                if (!Array.isArray(Y.dataPoints)) return "dataPoints: array expected";
                                for (var J = 0; J < Y.dataPoints.length; ++J) {
                                    var W = RA.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(Y.dataPoints[J]);
                                    if (W) return "dataPoints." + W
                                }
                            }
                            if (Y.aggregationTemporality != null && Y.hasOwnProperty("aggregationTemporality")) switch (Y.aggregationTemporality) {
                                default:
                                    return "aggregationTemporality: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break
                            }
                            if (Y.isMonotonic != null && Y.hasOwnProperty("isMonotonic")) {
                                if (typeof Y.isMonotonic !== "boolean") return "isMonotonic: boolean expected"
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.metrics.v1.Sum) return Y;
                            var J = new RA.opentelemetry.proto.metrics.v1.Sum;
                            if (Y.dataPoints) {
                                if (!Array.isArray(Y.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: array expected");
                                J.dataPoints = [];
                                for (var W = 0; W < Y.dataPoints.length; ++W) {
                                    if (typeof Y.dataPoints[W] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: object expected");
                                    J.dataPoints[W] = RA.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(Y.dataPoints[W])
                                }
                            }
                            switch (Y.aggregationTemporality) {
                                default:
                                    if (typeof Y.aggregationTemporality === "number") {
                                        J.aggregationTemporality = Y.aggregationTemporality;
                                        break
                                    }
                                    break;
                                case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                                case 0:
                                    J.aggregationTemporality = 0;
                                    break;
                                case "AGGREGATION_TEMPORALITY_DELTA":
                                case 1:
                                    J.aggregationTemporality = 1;
                                    break;
                                case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                                case 2:
                                    J.aggregationTemporality = 2;
                                    break
                            }
                            if (Y.isMonotonic != null) J.isMonotonic = Boolean(Y.isMonotonic);
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.dataPoints = [];
                            if (J.defaults) W.aggregationTemporality = J.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0, W.isMonotonic = !1;
                            if (Y.dataPoints && Y.dataPoints.length) {
                                W.dataPoints = [];
                                for (var X = 0; X < Y.dataPoints.length; ++X) W.dataPoints[X] = RA.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(Y.dataPoints[X], J)
                            }
                            if (Y.aggregationTemporality != null && Y.hasOwnProperty("aggregationTemporality")) W.aggregationTemporality = J.enums === String ? RA.opentelemetry.proto.metrics.v1.AggregationTemporality[Y.aggregationTemporality] === void 0 ? Y.aggregationTemporality : RA.opentelemetry.proto.metrics.v1.AggregationTemporality[Y.aggregationTemporality] : Y.aggregationTemporality;
                            if (Y.isMonotonic != null && Y.hasOwnProperty("isMonotonic")) W.isMonotonic = Y.isMonotonic;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.metrics.v1.Sum"
                        }, Z
                    }(), G.Histogram = function() {
                        function Z(I) {
                            if (this.dataPoints = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.dataPoints = _A.emptyArray, Z.prototype.aggregationTemporality = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.dataPoints != null && Y.dataPoints.length)
                                for (var W = 0; W < Y.dataPoints.length; ++W) RA.opentelemetry.proto.metrics.v1.HistogramDataPoint.encode(Y.dataPoints[W], J.uint32(10).fork()).ldelim();
                            if (Y.aggregationTemporality != null && Object.hasOwnProperty.call(Y, "aggregationTemporality")) J.uint32(16).int32(Y.aggregationTemporality);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.metrics.v1.Histogram;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        if (!(F.dataPoints && F.dataPoints.length)) F.dataPoints = [];
                                        F.dataPoints.push(RA.opentelemetry.proto.metrics.v1.HistogramDataPoint.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 2: {
                                        F.aggregationTemporality = Y.int32();
                                        break
                                    }
                                    default:
                                        Y.skipType(V & 7);
                                        break
                                }
                            }
                            return F
                        }, Z.decodeDelimited = function(Y) {
                            if (!(Y instanceof B0)) Y = new B0(Y);
                            return this.decode(Y, Y.uint32())
                        }, Z.verify = function(Y) {
                            if (typeof Y !== "object" || Y === null) return "object expected";
                            if (Y.dataPoints != null && Y.hasOwnProperty("dataPoints")) {
                                if (!Array.isArray(Y.dataPoints)) return "dataPoints: array expected";
                                for (var J = 0; J < Y.dataPoints.length; ++J) {
                                    var W = RA.opentelemetry.proto.metrics.v1.HistogramDataPoint.verify(Y.dataPoints[J]);
                                    if (W) return "dataPoints." + W
                                }
                            }
                            if (Y.aggregationTemporality != null && Y.hasOwnProperty("aggregationTemporality")) switch (Y.aggregationTemporality) {
                                default:
                                    return "aggregationTemporality: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.metrics.v1.Histogram) return Y;
                            var J = new RA.opentelemetry.proto.metrics.v1.Histogram;
                            if (Y.dataPoints) {
                                if (!Array.isArray(Y.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: array expected");
                                J.dataPoints = [];
                                for (var W = 0; W < Y.dataPoints.length; ++W) {
                                    if (typeof Y.dataPoints[W] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: object expected");
                                    J.dataPoints[W] = RA.opentelemetry.proto.metrics.v1.HistogramDataPoint.fromObject(Y.dataPoints[W])
                                }
                            }
                            switch (Y.aggregationTemporality) {
                                default:
                                    if (typeof Y.aggregationTemporality === "number") {
                                        J.aggregationTemporality = Y.aggregationTemporality;
                                        break
                                    }
                                    break;
                                case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                                case 0:
                                    J.aggregationTemporality = 0;
                                    break;
                                case "AGGREGATION_TEMPORALITY_DELTA":
                                case 1:
                                    J.aggregationTemporality = 1;
                                    break;
                                case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                                case 2:
                                    J.aggregationTemporality = 2;
                                    break
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.dataPoints = [];
                            if (J.defaults) W.aggregationTemporality = J.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
                            if (Y.dataPoints && Y.dataPoints.length) {
                                W.dataPoints = [];
                                for (var X = 0; X < Y.dataPoints.length; ++X) W.dataPoints[X] = RA.opentelemetry.proto.metrics.v1.HistogramDataPoint.toObject(Y.dataPoints[X], J)
                            }
                            if (Y.aggregationTemporality != null && Y.hasOwnProperty("aggregationTemporality")) W.aggregationTemporality = J.enums === String ? RA.opentelemetry.proto.metrics.v1.AggregationTemporality[Y.aggregationTemporality] === void 0 ? Y.aggregationTemporality : RA.opentelemetry.proto.metrics.v1.AggregationTemporality[Y.aggregationTemporality] : Y.aggregationTemporality;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.metrics.v1.Histogram"
                        }, Z
                    }(), G.ExponentialHistogram = function() {
                        function Z(I) {
                            if (this.dataPoints = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.dataPoints = _A.emptyArray, Z.prototype.aggregationTemporality = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.dataPoints != null && Y.dataPoints.length)
                                for (var W = 0; W < Y.dataPoints.length; ++W) RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.encode(Y.dataPoints[W], J.uint32(10).fork()).ldelim();
                            if (Y.aggregationTemporality != null && Object.hasOwnProperty.call(Y, "aggregationTemporality")) J.uint32(16).int32(Y.aggregationTemporality);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.metrics.v1.ExponentialHistogram;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        if (!(F.dataPoints && F.dataPoints.length)) F.dataPoints = [];
                                        F.dataPoints.push(RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 2: {
                                        F.aggregationTemporality = Y.int32();
                                        break
                                    }
                                    default:
                                        Y.skipType(V & 7);
                                        break
                                }
                            }
                            return F
                        }, Z.decodeDelimited = function(Y) {
                            if (!(Y instanceof B0)) Y = new B0(Y);
                            return this.decode(Y, Y.uint32())
                        }, Z.verify = function(Y) {
                            if (typeof Y !== "object" || Y === null) return "object expected";
                            if (Y.dataPoints != null && Y.hasOwnProperty("dataPoints")) {
                                if (!Array.isArray(Y.dataPoints)) return "dataPoints: array expected";
                                for (var J = 0; J < Y.dataPoints.length; ++J) {
                                    var W = RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.verify(Y.dataPoints[J]);
                                    if (W) return "dataPoints." + W
                                }
                            }
                            if (Y.aggregationTemporality != null && Y.hasOwnProperty("aggregationTemporality")) switch (Y.aggregationTemporality) {
                                default:
                                    return "aggregationTemporality: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.metrics.v1.ExponentialHistogram) return Y;
                            var J = new RA.opentelemetry.proto.metrics.v1.ExponentialHistogram;
                            if (Y.dataPoints) {
                                if (!Array.isArray(Y.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: array expected");
                                J.dataPoints = [];
                                for (var W = 0; W < Y.dataPoints.length; ++W) {
                                    if (typeof Y.dataPoints[W] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: object expected");
                                    J.dataPoints[W] = RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.fromObject(Y.dataPoints[W])
                                }
                            }
                            switch (Y.aggregationTemporality) {
                                default:
                                    if (typeof Y.aggregationTemporality === "number") {
                                        J.aggregationTemporality = Y.aggregationTemporality;
                                        break
                                    }
                                    break;
                                case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                                case 0:
                                    J.aggregationTemporality = 0;
                                    break;
                                case "AGGREGATION_TEMPORALITY_DELTA":
                                case 1:
                                    J.aggregationTemporality = 1;
                                    break;
                                case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                                case 2:
                                    J.aggregationTemporality = 2;
                                    break
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.dataPoints = [];
                            if (J.defaults) W.aggregationTemporality = J.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
                            if (Y.dataPoints && Y.dataPoints.length) {
                                W.dataPoints = [];
                                for (var X = 0; X < Y.dataPoints.length; ++X) W.dataPoints[X] = RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.toObject(Y.dataPoints[X], J)
                            }
                            if (Y.aggregationTemporality != null && Y.hasOwnProperty("aggregationTemporality")) W.aggregationTemporality = J.enums === String ? RA.opentelemetry.proto.metrics.v1.AggregationTemporality[Y.aggregationTemporality] === void 0 ? Y.aggregationTemporality : RA.opentelemetry.proto.metrics.v1.AggregationTemporality[Y.aggregationTemporality] : Y.aggregationTemporality;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.metrics.v1.ExponentialHistogram"
                        }, Z
                    }(), G.Summary = function() {
                        function Z(I) {
                            if (this.dataPoints = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.dataPoints = _A.emptyArray, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.dataPoints != null && Y.dataPoints.length)
                                for (var W = 0; W < Y.dataPoints.length; ++W) RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.encode(Y.dataPoints[W], J.uint32(10).fork()).ldelim();
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.metrics.v1.Summary;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        if (!(F.dataPoints && F.dataPoints.length)) F.dataPoints = [];
                                        F.dataPoints.push(RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.decode(Y, Y.uint32()));
                                        break
                                    }
                                    default:
                                        Y.skipType(V & 7);
                                        break
                                }
                            }
                            return F
                        }, Z.decodeDelimited = function(Y) {
                            if (!(Y instanceof B0)) Y = new B0(Y);
                            return this.decode(Y, Y.uint32())
                        }, Z.verify = function(Y) {
                            if (typeof Y !== "object" || Y === null) return "object expected";
                            if (Y.dataPoints != null && Y.hasOwnProperty("dataPoints")) {
                                if (!Array.isArray(Y.dataPoints)) return "dataPoints: array expected";
                                for (var J = 0; J < Y.dataPoints.length; ++J) {
                                    var W = RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.verify(Y.dataPoints[J]);
                                    if (W) return "dataPoints." + W
                                }
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.metrics.v1.Summary) return Y;
                            var J = new RA.opentelemetry.proto.metrics.v1.Summary;
                            if (Y.dataPoints) {
                                if (!Array.isArray(Y.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: array expected");
                                J.dataPoints = [];
                                for (var W = 0; W < Y.dataPoints.length; ++W) {
                                    if (typeof Y.dataPoints[W] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: object expected");
                                    J.dataPoints[W] = RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.fromObject(Y.dataPoints[W])
                                }
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.dataPoints = [];
                            if (Y.dataPoints && Y.dataPoints.length) {
                                W.dataPoints = [];
                                for (var X = 0; X < Y.dataPoints.length; ++X) W.dataPoints[X] = RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.toObject(Y.dataPoints[X], J)
                            }
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.metrics.v1.Summary"
                        }, Z
                    }(), G.AggregationTemporality = function() {
                        var Z = {},
                            I = Object.create(Z);
                        return I[Z[0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0, I[Z[1] = "AGGREGATION_TEMPORALITY_DELTA"] = 1, I[Z[2] = "AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2, I
                    }(), G.DataPointFlags = function() {
                        var Z = {},
                            I = Object.create(Z);
                        return I[Z[0] = "DATA_POINT_FLAGS_DO_NOT_USE"] = 0, I[Z[1] = "DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK"] = 1, I
                    }(), G.NumberDataPoint = function() {
                        function Z(Y) {
                            if (this.attributes = [], this.exemplars = [], Y) {
                                for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                    if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                            }
                        }
                        Z.prototype.attributes = _A.emptyArray, Z.prototype.startTimeUnixNano = null, Z.prototype.timeUnixNano = null, Z.prototype.asDouble = null, Z.prototype.asInt = null, Z.prototype.exemplars = _A.emptyArray, Z.prototype.flags = null;
                        var I;
                        return Object.defineProperty(Z.prototype, "value", {
                            get: _A.oneOfGetter(I = ["asDouble", "asInt"]),
                            set: _A.oneOfSetter(I)
                        }), Z.create = function(J) {
                            return new Z(J)
                        }, Z.encode = function(J, W) {
                            if (!W) W = E8.create();
                            if (J.startTimeUnixNano != null && Object.hasOwnProperty.call(J, "startTimeUnixNano")) W.uint32(17).fixed64(J.startTimeUnixNano);
                            if (J.timeUnixNano != null && Object.hasOwnProperty.call(J, "timeUnixNano")) W.uint32(25).fixed64(J.timeUnixNano);
                            if (J.asDouble != null && Object.hasOwnProperty.call(J, "asDouble")) W.uint32(33).double(J.asDouble);
                            if (J.exemplars != null && J.exemplars.length)
                                for (var X = 0; X < J.exemplars.length; ++X) RA.opentelemetry.proto.metrics.v1.Exemplar.encode(J.exemplars[X], W.uint32(42).fork()).ldelim();
                            if (J.asInt != null && Object.hasOwnProperty.call(J, "asInt")) W.uint32(49).sfixed64(J.asInt);
                            if (J.attributes != null && J.attributes.length)
                                for (var X = 0; X < J.attributes.length; ++X) RA.opentelemetry.proto.common.v1.KeyValue.encode(J.attributes[X], W.uint32(58).fork()).ldelim();
                            if (J.flags != null && Object.hasOwnProperty.call(J, "flags")) W.uint32(64).uint32(J.flags);
                            return W
                        }, Z.encodeDelimited = function(J, W) {
                            return this.encode(J, W).ldelim()
                        }, Z.decode = function(J, W, X) {
                            if (!(J instanceof B0)) J = B0.create(J);
                            var F = W === void 0 ? J.len : J.pos + W,
                                V = new RA.opentelemetry.proto.metrics.v1.NumberDataPoint;
                            while (J.pos < F) {
                                var K = J.uint32();
                                if (K === X) break;
                                switch (K >>> 3) {
                                    case 7: {
                                        if (!(V.attributes && V.attributes.length)) V.attributes = [];
                                        V.attributes.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                                        break
                                    }
                                    case 2: {
                                        V.startTimeUnixNano = J.fixed64();
                                        break
                                    }
                                    case 3: {
                                        V.timeUnixNano = J.fixed64();
                                        break
                                    }
                                    case 4: {
                                        V.asDouble = J.double();
                                        break
                                    }
                                    case 6: {
                                        V.asInt = J.sfixed64();
                                        break
                                    }
                                    case 5: {
                                        if (!(V.exemplars && V.exemplars.length)) V.exemplars = [];
                                        V.exemplars.push(RA.opentelemetry.proto.metrics.v1.Exemplar.decode(J, J.uint32()));
                                        break
                                    }
                                    case 8: {
                                        V.flags = J.uint32();
                                        break
                                    }
                                    default:
                                        J.skipType(K & 7);
                                        break
                                }
                            }
                            return V
                        }, Z.decodeDelimited = function(J) {
                            if (!(J instanceof B0)) J = new B0(J);
                            return this.decode(J, J.uint32())
                        }, Z.verify = function(J) {
                            if (typeof J !== "object" || J === null) return "object expected";
                            var W = {};
                            if (J.attributes != null && J.hasOwnProperty("attributes")) {
                                if (!Array.isArray(J.attributes)) return "attributes: array expected";
                                for (var X = 0; X < J.attributes.length; ++X) {
                                    var F = RA.opentelemetry.proto.common.v1.KeyValue.verify(J.attributes[X]);
                                    if (F) return "attributes." + F
                                }
                            }
                            if (J.startTimeUnixNano != null && J.hasOwnProperty("startTimeUnixNano")) {
                                if (!_A.isInteger(J.startTimeUnixNano) && !(J.startTimeUnixNano && _A.isInteger(J.startTimeUnixNano.low) && _A.isInteger(J.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected"
                            }
                            if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) {
                                if (!_A.isInteger(J.timeUnixNano) && !(J.timeUnixNano && _A.isInteger(J.timeUnixNano.low) && _A.isInteger(J.timeUnixNano.high))) return "timeUnixNano: integer|Long expected"
                            }
                            if (J.asDouble != null && J.hasOwnProperty("asDouble")) {
                                if (W.value = 1, typeof J.asDouble !== "number") return "asDouble: number expected"
                            }
                            if (J.asInt != null && J.hasOwnProperty("asInt")) {
                                if (W.value === 1) return "value: multiple values";
                                if (W.value = 1, !_A.isInteger(J.asInt) && !(J.asInt && _A.isInteger(J.asInt.low) && _A.isInteger(J.asInt.high))) return "asInt: integer|Long expected"
                            }
                            if (J.exemplars != null && J.hasOwnProperty("exemplars")) {
                                if (!Array.isArray(J.exemplars)) return "exemplars: array expected";
                                for (var X = 0; X < J.exemplars.length; ++X) {
                                    var F = RA.opentelemetry.proto.metrics.v1.Exemplar.verify(J.exemplars[X]);
                                    if (F) return "exemplars." + F
                                }
                            }
                            if (J.flags != null && J.hasOwnProperty("flags")) {
                                if (!_A.isInteger(J.flags)) return "flags: integer expected"
                            }
                            return null
                        }, Z.fromObject = function(J) {
                            if (J instanceof RA.opentelemetry.proto.metrics.v1.NumberDataPoint) return J;
                            var W = new RA.opentelemetry.proto.metrics.v1.NumberDataPoint;
                            if (J.attributes) {
                                if (!Array.isArray(J.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: array expected");
                                W.attributes = [];
                                for (var X = 0; X < J.attributes.length; ++X) {
                                    if (typeof J.attributes[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: object expected");
                                    W.attributes[X] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.attributes[X])
                                }
                            }
                            if (J.startTimeUnixNano != null) {
                                if (_A.Long)(W.startTimeUnixNano = _A.Long.fromValue(J.startTimeUnixNano)).unsigned = !1;
                                else if (typeof J.startTimeUnixNano === "string") W.startTimeUnixNano = parseInt(J.startTimeUnixNano, 10);
                                else if (typeof J.startTimeUnixNano === "number") W.startTimeUnixNano = J.startTimeUnixNano;
                                else if (typeof J.startTimeUnixNano === "object") W.startTimeUnixNano = new _A.LongBits(J.startTimeUnixNano.low >>> 0, J.startTimeUnixNano.high >>> 0).toNumber()
                            }
                            if (J.timeUnixNano != null) {
                                if (_A.Long)(W.timeUnixNano = _A.Long.fromValue(J.timeUnixNano)).unsigned = !1;
                                else if (typeof J.timeUnixNano === "string") W.timeUnixNano = parseInt(J.timeUnixNano, 10);
                                else if (typeof J.timeUnixNano === "number") W.timeUnixNano = J.timeUnixNano;
                                else if (typeof J.timeUnixNano === "object") W.timeUnixNano = new _A.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber()
                            }
                            if (J.asDouble != null) W.asDouble = Number(J.asDouble);
                            if (J.asInt != null) {
                                if (_A.Long)(W.asInt = _A.Long.fromValue(J.asInt)).unsigned = !1;
                                else if (typeof J.asInt === "string") W.asInt = parseInt(J.asInt, 10);
                                else if (typeof J.asInt === "number") W.asInt = J.asInt;
                                else if (typeof J.asInt === "object") W.asInt = new _A.LongBits(J.asInt.low >>> 0, J.asInt.high >>> 0).toNumber()
                            }
                            if (J.exemplars) {
                                if (!Array.isArray(J.exemplars)) throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: array expected");
                                W.exemplars = [];
                                for (var X = 0; X < J.exemplars.length; ++X) {
                                    if (typeof J.exemplars[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: object expected");
                                    W.exemplars[X] = RA.opentelemetry.proto.metrics.v1.Exemplar.fromObject(J.exemplars[X])
                                }
                            }
                            if (J.flags != null) W.flags = J.flags >>> 0;
                            return W
                        }, Z.toObject = function(J, W) {
                            if (!W) W = {};
                            var X = {};
                            if (W.arrays || W.defaults) X.exemplars = [], X.attributes = [];
                            if (W.defaults) {
                                if (_A.Long) {
                                    var F = new _A.Long(0, 0, !1);
                                    X.startTimeUnixNano = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                } else X.startTimeUnixNano = W.longs === String ? "0" : 0;
                                if (_A.Long) {
                                    var F = new _A.Long(0, 0, !1);
                                    X.timeUnixNano = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                } else X.timeUnixNano = W.longs === String ? "0" : 0;
                                X.flags = 0
                            }
                            if (J.startTimeUnixNano != null && J.hasOwnProperty("startTimeUnixNano"))
                                if (typeof J.startTimeUnixNano === "number") X.startTimeUnixNano = W.longs === String ? String(J.startTimeUnixNano) : J.startTimeUnixNano;
                                else X.startTimeUnixNano = W.longs === String ? _A.Long.prototype.toString.call(J.startTimeUnixNano) : W.longs === Number ? new _A.LongBits(J.startTimeUnixNano.low >>> 0, J.startTimeUnixNano.high >>> 0).toNumber() : J.startTimeUnixNano;
                            if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano"))
                                if (typeof J.timeUnixNano === "number") X.timeUnixNano = W.longs === String ? String(J.timeUnixNano) : J.timeUnixNano;
                                else X.timeUnixNano = W.longs === String ? _A.Long.prototype.toString.call(J.timeUnixNano) : W.longs === Number ? new _A.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber() : J.timeUnixNano;
                            if (J.asDouble != null && J.hasOwnProperty("asDouble")) {
                                if (X.asDouble = W.json && !isFinite(J.asDouble) ? String(J.asDouble) : J.asDouble, W.oneofs) X.value = "asDouble"
                            }
                            if (J.exemplars && J.exemplars.length) {
                                X.exemplars = [];
                                for (var V = 0; V < J.exemplars.length; ++V) X.exemplars[V] = RA.opentelemetry.proto.metrics.v1.Exemplar.toObject(J.exemplars[V], W)
                            }
                            if (J.asInt != null && J.hasOwnProperty("asInt")) {
                                if (typeof J.asInt === "number") X.asInt = W.longs === String ? String(J.asInt) : J.asInt;
                                else X.asInt = W.longs === String ? _A.Long.prototype.toString.call(J.asInt) : W.longs === Number ? new _A.LongBits(J.asInt.low >>> 0, J.asInt.high >>> 0).toNumber() : J.asInt;
                                if (W.oneofs) X.value = "asInt"
                            }
                            if (J.attributes && J.attributes.length) {
                                X.attributes = [];
                                for (var V = 0; V < J.attributes.length; ++V) X.attributes[V] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(J.attributes[V], W)
                            }
                            if (J.flags != null && J.hasOwnProperty("flags")) X.flags = J.flags;
                            return X
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(J) {
                            if (J === void 0) J = "type.googleapis.com";
                            return J + "/opentelemetry.proto.metrics.v1.NumberDataPoint"
                        }, Z
                    }(), G.HistogramDataPoint = function() {
                        function Z(Y) {
                            if (this.attributes = [], this.bucketCounts = [], this.explicitBounds = [], this.exemplars = [], Y) {
                                for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                    if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                            }
                        }
                        Z.prototype.attributes = _A.emptyArray, Z.prototype.startTimeUnixNano = null, Z.prototype.timeUnixNano = null, Z.prototype.count = null, Z.prototype.sum = null, Z.prototype.bucketCounts = _A.emptyArray, Z.prototype.explicitBounds = _A.emptyArray, Z.prototype.exemplars = _A.emptyArray, Z.prototype.flags = null, Z.prototype.min = null, Z.prototype.max = null;
                        var I;
                        return Object.defineProperty(Z.prototype, "_sum", {
                            get: _A.oneOfGetter(I = ["sum"]),
                            set: _A.oneOfSetter(I)
                        }), Object.defineProperty(Z.prototype, "_min", {
                            get: _A.oneOfGetter(I = ["min"]),
                            set: _A.oneOfSetter(I)
                        }), Object.defineProperty(Z.prototype, "_max", {
                            get: _A.oneOfGetter(I = ["max"]),
                            set: _A.oneOfSetter(I)
                        }), Z.create = function(J) {
                            return new Z(J)
                        }, Z.encode = function(J, W) {
                            if (!W) W = E8.create();
                            if (J.startTimeUnixNano != null && Object.hasOwnProperty.call(J, "startTimeUnixNano")) W.uint32(17).fixed64(J.startTimeUnixNano);
                            if (J.timeUnixNano != null && Object.hasOwnProperty.call(J, "timeUnixNano")) W.uint32(25).fixed64(J.timeUnixNano);
                            if (J.count != null && Object.hasOwnProperty.call(J, "count")) W.uint32(33).fixed64(J.count);
                            if (J.sum != null && Object.hasOwnProperty.call(J, "sum")) W.uint32(41).double(J.sum);
                            if (J.bucketCounts != null && J.bucketCounts.length) {
                                W.uint32(50).fork();
                                for (var X = 0; X < J.bucketCounts.length; ++X) W.fixed64(J.bucketCounts[X]);
                                W.ldelim()
                            }
                            if (J.explicitBounds != null && J.explicitBounds.length) {
                                W.uint32(58).fork();
                                for (var X = 0; X < J.explicitBounds.length; ++X) W.double(J.explicitBounds[X]);
                                W.ldelim()
                            }
                            if (J.exemplars != null && J.exemplars.length)
                                for (var X = 0; X < J.exemplars.length; ++X) RA.opentelemetry.proto.metrics.v1.Exemplar.encode(J.exemplars[X], W.uint32(66).fork()).ldelim();
                            if (J.attributes != null && J.attributes.length)
                                for (var X = 0; X < J.attributes.length; ++X) RA.opentelemetry.proto.common.v1.KeyValue.encode(J.attributes[X], W.uint32(74).fork()).ldelim();
                            if (J.flags != null && Object.hasOwnProperty.call(J, "flags")) W.uint32(80).uint32(J.flags);
                            if (J.min != null && Object.hasOwnProperty.call(J, "min")) W.uint32(89).double(J.min);
                            if (J.max != null && Object.hasOwnProperty.call(J, "max")) W.uint32(97).double(J.max);
                            return W
                        }, Z.encodeDelimited = function(J, W) {
                            return this.encode(J, W).ldelim()
                        }, Z.decode = function(J, W, X) {
                            if (!(J instanceof B0)) J = B0.create(J);
                            var F = W === void 0 ? J.len : J.pos + W,
                                V = new RA.opentelemetry.proto.metrics.v1.HistogramDataPoint;
                            while (J.pos < F) {
                                var K = J.uint32();
                                if (K === X) break;
                                switch (K >>> 3) {
                                    case 9: {
                                        if (!(V.attributes && V.attributes.length)) V.attributes = [];
                                        V.attributes.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                                        break
                                    }
                                    case 2: {
                                        V.startTimeUnixNano = J.fixed64();
                                        break
                                    }
                                    case 3: {
                                        V.timeUnixNano = J.fixed64();
                                        break
                                    }
                                    case 4: {
                                        V.count = J.fixed64();
                                        break
                                    }
                                    case 5: {
                                        V.sum = J.double();
                                        break
                                    }
                                    case 6: {
                                        if (!(V.bucketCounts && V.bucketCounts.length)) V.bucketCounts = [];
                                        if ((K & 7) === 2) {
                                            var D = J.uint32() + J.pos;
                                            while (J.pos < D) V.bucketCounts.push(J.fixed64())
                                        } else V.bucketCounts.push(J.fixed64());
                                        break
                                    }
                                    case 7: {
                                        if (!(V.explicitBounds && V.explicitBounds.length)) V.explicitBounds = [];
                                        if ((K & 7) === 2) {
                                            var D = J.uint32() + J.pos;
                                            while (J.pos < D) V.explicitBounds.push(J.double())
                                        } else V.explicitBounds.push(J.double());
                                        break
                                    }
                                    case 8: {
                                        if (!(V.exemplars && V.exemplars.length)) V.exemplars = [];
                                        V.exemplars.push(RA.opentelemetry.proto.metrics.v1.Exemplar.decode(J, J.uint32()));
                                        break
                                    }
                                    case 10: {
                                        V.flags = J.uint32();
                                        break
                                    }
                                    case 11: {
                                        V.min = J.double();
                                        break
                                    }
                                    case 12: {
                                        V.max = J.double();
                                        break
                                    }
                                    default:
                                        J.skipType(K & 7);
                                        break
                                }
                            }
                            return V
                        }, Z.decodeDelimited = function(J) {
                            if (!(J instanceof B0)) J = new B0(J);
                            return this.decode(J, J.uint32())
                        }, Z.verify = function(J) {
                            if (typeof J !== "object" || J === null) return "object expected";
                            var W = {};
                            if (J.attributes != null && J.hasOwnProperty("attributes")) {
                                if (!Array.isArray(J.attributes)) return "attributes: array expected";
                                for (var X = 0; X < J.attributes.length; ++X) {
                                    var F = RA.opentelemetry.proto.common.v1.KeyValue.verify(J.attributes[X]);
                                    if (F) return "attributes." + F
                                }
                            }
                            if (J.startTimeUnixNano != null && J.hasOwnProperty("startTimeUnixNano")) {
                                if (!_A.isInteger(J.startTimeUnixNano) && !(J.startTimeUnixNano && _A.isInteger(J.startTimeUnixNano.low) && _A.isInteger(J.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected"
                            }
                            if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) {
                                if (!_A.isInteger(J.timeUnixNano) && !(J.timeUnixNano && _A.isInteger(J.timeUnixNano.low) && _A.isInteger(J.timeUnixNano.high))) return "timeUnixNano: integer|Long expected"
                            }
                            if (J.count != null && J.hasOwnProperty("count")) {
                                if (!_A.isInteger(J.count) && !(J.count && _A.isInteger(J.count.low) && _A.isInteger(J.count.high))) return "count: integer|Long expected"
                            }
                            if (J.sum != null && J.hasOwnProperty("sum")) {
                                if (W._sum = 1, typeof J.sum !== "number") return "sum: number expected"
                            }
                            if (J.bucketCounts != null && J.hasOwnProperty("bucketCounts")) {
                                if (!Array.isArray(J.bucketCounts)) return "bucketCounts: array expected";
                                for (var X = 0; X < J.bucketCounts.length; ++X)
                                    if (!_A.isInteger(J.bucketCounts[X]) && !(J.bucketCounts[X] && _A.isInteger(J.bucketCounts[X].low) && _A.isInteger(J.bucketCounts[X].high))) return "bucketCounts: integer|Long[] expected"
                            }
                            if (J.explicitBounds != null && J.hasOwnProperty("explicitBounds")) {
                                if (!Array.isArray(J.explicitBounds)) return "explicitBounds: array expected";
                                for (var X = 0; X < J.explicitBounds.length; ++X)
                                    if (typeof J.explicitBounds[X] !== "number") return "explicitBounds: number[] expected"
                            }
                            if (J.exemplars != null && J.hasOwnProperty("exemplars")) {
                                if (!Array.isArray(J.exemplars)) return "exemplars: array expected";
                                for (var X = 0; X < J.exemplars.length; ++X) {
                                    var F = RA.opentelemetry.proto.metrics.v1.Exemplar.verify(J.exemplars[X]);
                                    if (F) return "exemplars." + F
                                }
                            }
                            if (J.flags != null && J.hasOwnProperty("flags")) {
                                if (!_A.isInteger(J.flags)) return "flags: integer expected"
                            }
                            if (J.min != null && J.hasOwnProperty("min")) {
                                if (W._min = 1, typeof J.min !== "number") return "min: number expected"
                            }
                            if (J.max != null && J.hasOwnProperty("max")) {
                                if (W._max = 1, typeof J.max !== "number") return "max: number expected"
                            }
                            return null
                        }, Z.fromObject = function(J) {
                            if (J instanceof RA.opentelemetry.proto.metrics.v1.HistogramDataPoint) return J;
                            var W = new RA.opentelemetry.proto.metrics.v1.HistogramDataPoint;
                            if (J.attributes) {
                                if (!Array.isArray(J.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: array expected");
                                W.attributes = [];
                                for (var X = 0; X < J.attributes.length; ++X) {
                                    if (typeof J.attributes[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: object expected");
                                    W.attributes[X] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.attributes[X])
                                }
                            }
                            if (J.startTimeUnixNano != null) {
                                if (_A.Long)(W.startTimeUnixNano = _A.Long.fromValue(J.startTimeUnixNano)).unsigned = !1;
                                else if (typeof J.startTimeUnixNano === "string") W.startTimeUnixNano = parseInt(J.startTimeUnixNano, 10);
                                else if (typeof J.startTimeUnixNano === "number") W.startTimeUnixNano = J.startTimeUnixNano;
                                else if (typeof J.startTimeUnixNano === "object") W.startTimeUnixNano = new _A.LongBits(J.startTimeUnixNano.low >>> 0, J.startTimeUnixNano.high >>> 0).toNumber()
                            }
                            if (J.timeUnixNano != null) {
                                if (_A.Long)(W.timeUnixNano = _A.Long.fromValue(J.timeUnixNano)).unsigned = !1;
                                else if (typeof J.timeUnixNano === "string") W.timeUnixNano = parseInt(J.timeUnixNano, 10);
                                else if (typeof J.timeUnixNano === "number") W.timeUnixNano = J.timeUnixNano;
                                else if (typeof J.timeUnixNano === "object") W.timeUnixNano = new _A.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber()
                            }
                            if (J.count != null) {
                                if (_A.Long)(W.count = _A.Long.fromValue(J.count)).unsigned = !1;
                                else if (typeof J.count === "string") W.count = parseInt(J.count, 10);
                                else if (typeof J.count === "number") W.count = J.count;
                                else if (typeof J.count === "object") W.count = new _A.LongBits(J.count.low >>> 0, J.count.high >>> 0).toNumber()
                            }
                            if (J.sum != null) W.sum = Number(J.sum);
                            if (J.bucketCounts) {
                                if (!Array.isArray(J.bucketCounts)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.bucketCounts: array expected");
                                W.bucketCounts = [];
                                for (var X = 0; X < J.bucketCounts.length; ++X)
                                    if (_A.Long)(W.bucketCounts[X] = _A.Long.fromValue(J.bucketCounts[X])).unsigned = !1;
                                    else if (typeof J.bucketCounts[X] === "string") W.bucketCounts[X] = parseInt(J.bucketCounts[X], 10);
                                else if (typeof J.bucketCounts[X] === "number") W.bucketCounts[X] = J.bucketCounts[X];
                                else if (typeof J.bucketCounts[X] === "object") W.bucketCounts[X] = new _A.LongBits(J.bucketCounts[X].low >>> 0, J.bucketCounts[X].high >>> 0).toNumber()
                            }
                            if (J.explicitBounds) {
                                if (!Array.isArray(J.explicitBounds)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.explicitBounds: array expected");
                                W.explicitBounds = [];
                                for (var X = 0; X < J.explicitBounds.length; ++X) W.explicitBounds[X] = Number(J.explicitBounds[X])
                            }
                            if (J.exemplars) {
                                if (!Array.isArray(J.exemplars)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: array expected");
                                W.exemplars = [];
                                for (var X = 0; X < J.exemplars.length; ++X) {
                                    if (typeof J.exemplars[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: object expected");
                                    W.exemplars[X] = RA.opentelemetry.proto.metrics.v1.Exemplar.fromObject(J.exemplars[X])
                                }
                            }
                            if (J.flags != null) W.flags = J.flags >>> 0;
                            if (J.min != null) W.min = Number(J.min);
                            if (J.max != null) W.max = Number(J.max);
                            return W
                        }, Z.toObject = function(J, W) {
                            if (!W) W = {};
                            var X = {};
                            if (W.arrays || W.defaults) X.bucketCounts = [], X.explicitBounds = [], X.exemplars = [], X.attributes = [];
                            if (W.defaults) {
                                if (_A.Long) {
                                    var F = new _A.Long(0, 0, !1);
                                    X.startTimeUnixNano = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                } else X.startTimeUnixNano = W.longs === String ? "0" : 0;
                                if (_A.Long) {
                                    var F = new _A.Long(0, 0, !1);
                                    X.timeUnixNano = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                } else X.timeUnixNano = W.longs === String ? "0" : 0;
                                if (_A.Long) {
                                    var F = new _A.Long(0, 0, !1);
                                    X.count = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                } else X.count = W.longs === String ? "0" : 0;
                                X.flags = 0
                            }
                            if (J.startTimeUnixNano != null && J.hasOwnProperty("startTimeUnixNano"))
                                if (typeof J.startTimeUnixNano === "number") X.startTimeUnixNano = W.longs === String ? String(J.startTimeUnixNano) : J.startTimeUnixNano;
                                else X.startTimeUnixNano = W.longs === String ? _A.Long.prototype.toString.call(J.startTimeUnixNano) : W.longs === Number ? new _A.LongBits(J.startTimeUnixNano.low >>> 0, J.startTimeUnixNano.high >>> 0).toNumber() : J.startTimeUnixNano;
                            if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano"))
                                if (typeof J.timeUnixNano === "number") X.timeUnixNano = W.longs === String ? String(J.timeUnixNano) : J.timeUnixNano;
                                else X.timeUnixNano = W.longs === String ? _A.Long.prototype.toString.call(J.timeUnixNano) : W.longs === Number ? new _A.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber() : J.timeUnixNano;
                            if (J.count != null && J.hasOwnProperty("count"))
                                if (typeof J.count === "number") X.count = W.longs === String ? String(J.count) : J.count;
                                else X.count = W.longs === String ? _A.Long.prototype.toString.call(J.count) : W.longs === Number ? new _A.LongBits(J.count.low >>> 0, J.count.high >>> 0).toNumber() : J.count;
                            if (J.sum != null && J.hasOwnProperty("sum")) {
                                if (X.sum = W.json && !isFinite(J.sum) ? String(J.sum) : J.sum, W.oneofs) X._sum = "sum"
                            }
                            if (J.bucketCounts && J.bucketCounts.length) {
                                X.bucketCounts = [];
                                for (var V = 0; V < J.bucketCounts.length; ++V)
                                    if (typeof J.bucketCounts[V] === "number") X.bucketCounts[V] = W.longs === String ? String(J.bucketCounts[V]) : J.bucketCounts[V];
                                    else X.bucketCounts[V] = W.longs === String ? _A.Long.prototype.toString.call(J.bucketCounts[V]) : W.longs === Number ? new _A.LongBits(J.bucketCounts[V].low >>> 0, J.bucketCounts[V].high >>> 0).toNumber() : J.bucketCounts[V]
                            }
                            if (J.explicitBounds && J.explicitBounds.length) {
                                X.explicitBounds = [];
                                for (var V = 0; V < J.explicitBounds.length; ++V) X.explicitBounds[V] = W.json && !isFinite(J.explicitBounds[V]) ? String(J.explicitBounds[V]) : J.explicitBounds[V]
                            }
                            if (J.exemplars && J.exemplars.length) {
                                X.exemplars = [];
                                for (var V = 0; V < J.exemplars.length; ++V) X.exemplars[V] = RA.opentelemetry.proto.metrics.v1.Exemplar.toObject(J.exemplars[V], W)
                            }
                            if (J.attributes && J.attributes.length) {
                                X.attributes = [];
                                for (var V = 0; V < J.attributes.length; ++V) X.attributes[V] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(J.attributes[V], W)
                            }
                            if (J.flags != null && J.hasOwnProperty("flags")) X.flags = J.flags;
                            if (J.min != null && J.hasOwnProperty("min")) {
                                if (X.min = W.json && !isFinite(J.min) ? String(J.min) : J.min, W.oneofs) X._min = "min"
                            }
                            if (J.max != null && J.hasOwnProperty("max")) {
                                if (X.max = W.json && !isFinite(J.max) ? String(J.max) : J.max, W.oneofs) X._max = "max"
                            }
                            return X
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(J) {
                            if (J === void 0) J = "type.googleapis.com";
                            return J + "/opentelemetry.proto.metrics.v1.HistogramDataPoint"
                        }, Z
                    }(), G.ExponentialHistogramDataPoint = function() {
                        function Z(Y) {
                            if (this.attributes = [], this.exemplars = [], Y) {
                                for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                    if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                            }
                        }
                        Z.prototype.attributes = _A.emptyArray, Z.prototype.startTimeUnixNano = null, Z.prototype.timeUnixNano = null, Z.prototype.count = null, Z.prototype.sum = null, Z.prototype.scale = null, Z.prototype.zeroCount = null, Z.prototype.positive = null, Z.prototype.negative = null, Z.prototype.flags = null, Z.prototype.exemplars = _A.emptyArray, Z.prototype.min = null, Z.prototype.max = null, Z.prototype.zeroThreshold = null;
                        var I;
                        return Object.defineProperty(Z.prototype, "_sum", {
                            get: _A.oneOfGetter(I = ["sum"]),
                            set: _A.oneOfSetter(I)
                        }), Object.defineProperty(Z.prototype, "_min", {
                            get: _A.oneOfGetter(I = ["min"]),
                            set: _A.oneOfSetter(I)
                        }), Object.defineProperty(Z.prototype, "_max", {
                            get: _A.oneOfGetter(I = ["max"]),
                            set: _A.oneOfSetter(I)
                        }), Z.create = function(J) {
                            return new Z(J)
                        }, Z.encode = function(J, W) {
                            if (!W) W = E8.create();
                            if (J.attributes != null && J.attributes.length)
                                for (var X = 0; X < J.attributes.length; ++X) RA.opentelemetry.proto.common.v1.KeyValue.encode(J.attributes[X], W.uint32(10).fork()).ldelim();
                            if (J.startTimeUnixNano != null && Object.hasOwnProperty.call(J, "startTimeUnixNano")) W.uint32(17).fixed64(J.startTimeUnixNano);
                            if (J.timeUnixNano != null && Object.hasOwnProperty.call(J, "timeUnixNano")) W.uint32(25).fixed64(J.timeUnixNano);
                            if (J.count != null && Object.hasOwnProperty.call(J, "count")) W.uint32(33).fixed64(J.count);
                            if (J.sum != null && Object.hasOwnProperty.call(J, "sum")) W.uint32(41).double(J.sum);
                            if (J.scale != null && Object.hasOwnProperty.call(J, "scale")) W.uint32(48).sint32(J.scale);
                            if (J.zeroCount != null && Object.hasOwnProperty.call(J, "zeroCount")) W.uint32(57).fixed64(J.zeroCount);
                            if (J.positive != null && Object.hasOwnProperty.call(J, "positive")) RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(J.positive, W.uint32(66).fork()).ldelim();
                            if (J.negative != null && Object.hasOwnProperty.call(J, "negative")) RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(J.negative, W.uint32(74).fork()).ldelim();
                            if (J.flags != null && Object.hasOwnProperty.call(J, "flags")) W.uint32(80).uint32(J.flags);
                            if (J.exemplars != null && J.exemplars.length)
                                for (var X = 0; X < J.exemplars.length; ++X) RA.opentelemetry.proto.metrics.v1.Exemplar.encode(J.exemplars[X], W.uint32(90).fork()).ldelim();
                            if (J.min != null && Object.hasOwnProperty.call(J, "min")) W.uint32(97).double(J.min);
                            if (J.max != null && Object.hasOwnProperty.call(J, "max")) W.uint32(105).double(J.max);
                            if (J.zeroThreshold != null && Object.hasOwnProperty.call(J, "zeroThreshold")) W.uint32(113).double(J.zeroThreshold);
                            return W
                        }, Z.encodeDelimited = function(J, W) {
                            return this.encode(J, W).ldelim()
                        }, Z.decode = function(J, W, X) {
                            if (!(J instanceof B0)) J = B0.create(J);
                            var F = W === void 0 ? J.len : J.pos + W,
                                V = new RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint;
                            while (J.pos < F) {
                                var K = J.uint32();
                                if (K === X) break;
                                switch (K >>> 3) {
                                    case 1: {
                                        if (!(V.attributes && V.attributes.length)) V.attributes = [];
                                        V.attributes.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                                        break
                                    }
                                    case 2: {
                                        V.startTimeUnixNano = J.fixed64();
                                        break
                                    }
                                    case 3: {
                                        V.timeUnixNano = J.fixed64();
                                        break
                                    }
                                    case 4: {
                                        V.count = J.fixed64();
                                        break
                                    }
                                    case 5: {
                                        V.sum = J.double();
                                        break
                                    }
                                    case 6: {
                                        V.scale = J.sint32();
                                        break
                                    }
                                    case 7: {
                                        V.zeroCount = J.fixed64();
                                        break
                                    }
                                    case 8: {
                                        V.positive = RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(J, J.uint32());
                                        break
                                    }
                                    case 9: {
                                        V.negative = RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(J, J.uint32());
                                        break
                                    }
                                    case 10: {
                                        V.flags = J.uint32();
                                        break
                                    }
                                    case 11: {
                                        if (!(V.exemplars && V.exemplars.length)) V.exemplars = [];
                                        V.exemplars.push(RA.opentelemetry.proto.metrics.v1.Exemplar.decode(J, J.uint32()));
                                        break
                                    }
                                    case 12: {
                                        V.min = J.double();
                                        break
                                    }
                                    case 13: {
                                        V.max = J.double();
                                        break
                                    }
                                    case 14: {
                                        V.zeroThreshold = J.double();
                                        break
                                    }
                                    default:
                                        J.skipType(K & 7);
                                        break
                                }
                            }
                            return V
                        }, Z.decodeDelimited = function(J) {
                            if (!(J instanceof B0)) J = new B0(J);
                            return this.decode(J, J.uint32())
                        }, Z.verify = function(J) {
                            if (typeof J !== "object" || J === null) return "object expected";
                            var W = {};
                            if (J.attributes != null && J.hasOwnProperty("attributes")) {
                                if (!Array.isArray(J.attributes)) return "attributes: array expected";
                                for (var X = 0; X < J.attributes.length; ++X) {
                                    var F = RA.opentelemetry.proto.common.v1.KeyValue.verify(J.attributes[X]);
                                    if (F) return "attributes." + F
                                }
                            }
                            if (J.startTimeUnixNano != null && J.hasOwnProperty("startTimeUnixNano")) {
                                if (!_A.isInteger(J.startTimeUnixNano) && !(J.startTimeUnixNano && _A.isInteger(J.startTimeUnixNano.low) && _A.isInteger(J.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected"
                            }
                            if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) {
                                if (!_A.isInteger(J.timeUnixNano) && !(J.timeUnixNano && _A.isInteger(J.timeUnixNano.low) && _A.isInteger(J.timeUnixNano.high))) return "timeUnixNano: integer|Long expected"
                            }
                            if (J.count != null && J.hasOwnProperty("count")) {
                                if (!_A.isInteger(J.count) && !(J.count && _A.isInteger(J.count.low) && _A.isInteger(J.count.high))) return "count: integer|Long expected"
                            }
                            if (J.sum != null && J.hasOwnProperty("sum")) {
                                if (W._sum = 1, typeof J.sum !== "number") return "sum: number expected"
                            }
                            if (J.scale != null && J.hasOwnProperty("scale")) {
                                if (!_A.isInteger(J.scale)) return "scale: integer expected"
                            }
                            if (J.zeroCount != null && J.hasOwnProperty("zeroCount")) {
                                if (!_A.isInteger(J.zeroCount) && !(J.zeroCount && _A.isInteger(J.zeroCount.low) && _A.isInteger(J.zeroCount.high))) return "zeroCount: integer|Long expected"
                            }
                            if (J.positive != null && J.hasOwnProperty("positive")) {
                                var F = RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(J.positive);
                                if (F) return "positive." + F
                            }
                            if (J.negative != null && J.hasOwnProperty("negative")) {
                                var F = RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(J.negative);
                                if (F) return "negative." + F
                            }
                            if (J.flags != null && J.hasOwnProperty("flags")) {
                                if (!_A.isInteger(J.flags)) return "flags: integer expected"
                            }
                            if (J.exemplars != null && J.hasOwnProperty("exemplars")) {
                                if (!Array.isArray(J.exemplars)) return "exemplars: array expected";
                                for (var X = 0; X < J.exemplars.length; ++X) {
                                    var F = RA.opentelemetry.proto.metrics.v1.Exemplar.verify(J.exemplars[X]);
                                    if (F) return "exemplars." + F
                                }
                            }
                            if (J.min != null && J.hasOwnProperty("min")) {
                                if (W._min = 1, typeof J.min !== "number") return "min: number expected"
                            }
                            if (J.max != null && J.hasOwnProperty("max")) {
                                if (W._max = 1, typeof J.max !== "number") return "max: number expected"
                            }
                            if (J.zeroThreshold != null && J.hasOwnProperty("zeroThreshold")) {
                                if (typeof J.zeroThreshold !== "number") return "zeroThreshold: number expected"
                            }
                            return null
                        }, Z.fromObject = function(J) {
                            if (J instanceof RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint) return J;
                            var W = new RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint;
                            if (J.attributes) {
                                if (!Array.isArray(J.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: array expected");
                                W.attributes = [];
                                for (var X = 0; X < J.attributes.length; ++X) {
                                    if (typeof J.attributes[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: object expected");
                                    W.attributes[X] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.attributes[X])
                                }
                            }
                            if (J.startTimeUnixNano != null) {
                                if (_A.Long)(W.startTimeUnixNano = _A.Long.fromValue(J.startTimeUnixNano)).unsigned = !1;
                                else if (typeof J.startTimeUnixNano === "string") W.startTimeUnixNano = parseInt(J.startTimeUnixNano, 10);
                                else if (typeof J.startTimeUnixNano === "number") W.startTimeUnixNano = J.startTimeUnixNano;
                                else if (typeof J.startTimeUnixNano === "object") W.startTimeUnixNano = new _A.LongBits(J.startTimeUnixNano.low >>> 0, J.startTimeUnixNano.high >>> 0).toNumber()
                            }
                            if (J.timeUnixNano != null) {
                                if (_A.Long)(W.timeUnixNano = _A.Long.fromValue(J.timeUnixNano)).unsigned = !1;
                                else if (typeof J.timeUnixNano === "string") W.timeUnixNano = parseInt(J.timeUnixNano, 10);
                                else if (typeof J.timeUnixNano === "number") W.timeUnixNano = J.timeUnixNano;
                                else if (typeof J.timeUnixNano === "object") W.timeUnixNano = new _A.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber()
                            }
                            if (J.count != null) {
                                if (_A.Long)(W.count = _A.Long.fromValue(J.count)).unsigned = !1;
                                else if (typeof J.count === "string") W.count = parseInt(J.count, 10);
                                else if (typeof J.count === "number") W.count = J.count;
                                else if (typeof J.count === "object") W.count = new _A.LongBits(J.count.low >>> 0, J.count.high >>> 0).toNumber()
                            }
                            if (J.sum != null) W.sum = Number(J.sum);
                            if (J.scale != null) W.scale = J.scale | 0;
                            if (J.zeroCount != null) {
                                if (_A.Long)(W.zeroCount = _A.Long.fromValue(J.zeroCount)).unsigned = !1;
                                else if (typeof J.zeroCount === "string") W.zeroCount = parseInt(J.zeroCount, 10);
                                else if (typeof J.zeroCount === "number") W.zeroCount = J.zeroCount;
                                else if (typeof J.zeroCount === "object") W.zeroCount = new _A.LongBits(J.zeroCount.low >>> 0, J.zeroCount.high >>> 0).toNumber()
                            }
                            if (J.positive != null) {
                                if (typeof J.positive !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.positive: object expected");
                                W.positive = RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(J.positive)
                            }
                            if (J.negative != null) {
                                if (typeof J.negative !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.negative: object expected");
                                W.negative = RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(J.negative)
                            }
                            if (J.flags != null) W.flags = J.flags >>> 0;
                            if (J.exemplars) {
                                if (!Array.isArray(J.exemplars)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: array expected");
                                W.exemplars = [];
                                for (var X = 0; X < J.exemplars.length; ++X) {
                                    if (typeof J.exemplars[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: object expected");
                                    W.exemplars[X] = RA.opentelemetry.proto.metrics.v1.Exemplar.fromObject(J.exemplars[X])
                                }
                            }
                            if (J.min != null) W.min = Number(J.min);
                            if (J.max != null) W.max = Number(J.max);
                            if (J.zeroThreshold != null) W.zeroThreshold = Number(J.zeroThreshold);
                            return W
                        }, Z.toObject = function(J, W) {
                            if (!W) W = {};
                            var X = {};
                            if (W.arrays || W.defaults) X.attributes = [], X.exemplars = [];
                            if (W.defaults) {
                                if (_A.Long) {
                                    var F = new _A.Long(0, 0, !1);
                                    X.startTimeUnixNano = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                } else X.startTimeUnixNano = W.longs === String ? "0" : 0;
                                if (_A.Long) {
                                    var F = new _A.Long(0, 0, !1);
                                    X.timeUnixNano = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                } else X.timeUnixNano = W.longs === String ? "0" : 0;
                                if (_A.Long) {
                                    var F = new _A.Long(0, 0, !1);
                                    X.count = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                } else X.count = W.longs === String ? "0" : 0;
                                if (X.scale = 0, _A.Long) {
                                    var F = new _A.Long(0, 0, !1);
                                    X.zeroCount = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                } else X.zeroCount = W.longs === String ? "0" : 0;
                                X.positive = null, X.negative = null, X.flags = 0, X.zeroThreshold = 0
                            }
                            if (J.attributes && J.attributes.length) {
                                X.attributes = [];