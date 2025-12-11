/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: telemetry_011.js
 * 处理时间: 2025-12-09T03:41:38.435Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 11/14
 * Lines: 303468 - 304965 (1498 lines)
 * Original file: cli.js
 */

                                for (var V = 0; V < J.attributes.length; ++V) X.attributes[V] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(J.attributes[V], W)
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
                            if (J.scale != null && J.hasOwnProperty("scale")) X.scale = J.scale;
                            if (J.zeroCount != null && J.hasOwnProperty("zeroCount"))
                                if (typeof J.zeroCount === "number") X.zeroCount = W.longs === String ? String(J.zeroCount) : J.zeroCount;
                                else X.zeroCount = W.longs === String ? _A.Long.prototype.toString.call(J.zeroCount) : W.longs === Number ? new _A.LongBits(J.zeroCount.low >>> 0, J.zeroCount.high >>> 0).toNumber() : J.zeroCount;
                            if (J.positive != null && J.hasOwnProperty("positive")) X.positive = RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(J.positive, W);
                            if (J.negative != null && J.hasOwnProperty("negative")) X.negative = RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(J.negative, W);
                            if (J.flags != null && J.hasOwnProperty("flags")) X.flags = J.flags;
                            if (J.exemplars && J.exemplars.length) {
                                X.exemplars = [];
                                for (var V = 0; V < J.exemplars.length; ++V) X.exemplars[V] = RA.opentelemetry.proto.metrics.v1.Exemplar.toObject(J.exemplars[V], W)
                            }
                            if (J.min != null && J.hasOwnProperty("min")) {
                                if (X.min = W.json && !isFinite(J.min) ? String(J.min) : J.min, W.oneofs) X._min = "min"
                            }
                            if (J.max != null && J.hasOwnProperty("max")) {
                                if (X.max = W.json && !isFinite(J.max) ? String(J.max) : J.max, W.oneofs) X._max = "max"
                            }
                            if (J.zeroThreshold != null && J.hasOwnProperty("zeroThreshold")) X.zeroThreshold = W.json && !isFinite(J.zeroThreshold) ? String(J.zeroThreshold) : J.zeroThreshold;
                            return X
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(J) {
                            if (J === void 0) J = "type.googleapis.com";
                            return J + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint"
                        }, Z.Buckets = function() {
                            function Y(J) {
                                if (this.bucketCounts = [], J) {
                                    for (var W = Object.keys(J), X = 0; X < W.length; ++X)
                                        if (J[W[X]] != null) this[W[X]] = J[W[X]]
                                }
                            }
                            return Y.prototype.offset = null, Y.prototype.bucketCounts = _A.emptyArray, Y.create = function(W) {
                                return new Y(W)
                            }, Y.encode = function(W, X) {
                                if (!X) X = E8.create();
                                if (W.offset != null && Object.hasOwnProperty.call(W, "offset")) X.uint32(8).sint32(W.offset);
                                if (W.bucketCounts != null && W.bucketCounts.length) {
                                    X.uint32(18).fork();
                                    for (var F = 0; F < W.bucketCounts.length; ++F) X.uint64(W.bucketCounts[F]);
                                    X.ldelim()
                                }
                                return X
                            }, Y.encodeDelimited = function(W, X) {
                                return this.encode(W, X).ldelim()
                            }, Y.decode = function(W, X, F) {
                                if (!(W instanceof B0)) W = B0.create(W);
                                var V = X === void 0 ? W.len : W.pos + X,
                                    K = new RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets;
                                while (W.pos < V) {
                                    var D = W.uint32();
                                    if (D === F) break;
                                    switch (D >>> 3) {
                                        case 1: {
                                            K.offset = W.sint32();
                                            break
                                        }
                                        case 2: {
                                            if (!(K.bucketCounts && K.bucketCounts.length)) K.bucketCounts = [];
                                            if ((D & 7) === 2) {
                                                var H = W.uint32() + W.pos;
                                                while (W.pos < H) K.bucketCounts.push(W.uint64())
                                            } else K.bucketCounts.push(W.uint64());
                                            break
                                        }
                                        default:
                                            W.skipType(D & 7);
                                            break
                                    }
                                }
                                return K
                            }, Y.decodeDelimited = function(W) {
                                if (!(W instanceof B0)) W = new B0(W);
                                return this.decode(W, W.uint32())
                            }, Y.verify = function(W) {
                                if (typeof W !== "object" || W === null) return "object expected";
                                if (W.offset != null && W.hasOwnProperty("offset")) {
                                    if (!_A.isInteger(W.offset)) return "offset: integer expected"
                                }
                                if (W.bucketCounts != null && W.hasOwnProperty("bucketCounts")) {
                                    if (!Array.isArray(W.bucketCounts)) return "bucketCounts: array expected";
                                    for (var X = 0; X < W.bucketCounts.length; ++X)
                                        if (!_A.isInteger(W.bucketCounts[X]) && !(W.bucketCounts[X] && _A.isInteger(W.bucketCounts[X].low) && _A.isInteger(W.bucketCounts[X].high))) return "bucketCounts: integer|Long[] expected"
                                }
                                return null
                            }, Y.fromObject = function(W) {
                                if (W instanceof RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets) return W;
                                var X = new RA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets;
                                if (W.offset != null) X.offset = W.offset | 0;
                                if (W.bucketCounts) {
                                    if (!Array.isArray(W.bucketCounts)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.bucketCounts: array expected");
                                    X.bucketCounts = [];
                                    for (var F = 0; F < W.bucketCounts.length; ++F)
                                        if (_A.Long)(X.bucketCounts[F] = _A.Long.fromValue(W.bucketCounts[F])).unsigned = !0;
                                        else if (typeof W.bucketCounts[F] === "string") X.bucketCounts[F] = parseInt(W.bucketCounts[F], 10);
                                    else if (typeof W.bucketCounts[F] === "number") X.bucketCounts[F] = W.bucketCounts[F];
                                    else if (typeof W.bucketCounts[F] === "object") X.bucketCounts[F] = new _A.LongBits(W.bucketCounts[F].low >>> 0, W.bucketCounts[F].high >>> 0).toNumber(!0)
                                }
                                return X
                            }, Y.toObject = function(W, X) {
                                if (!X) X = {};
                                var F = {};
                                if (X.arrays || X.defaults) F.bucketCounts = [];
                                if (X.defaults) F.offset = 0;
                                if (W.offset != null && W.hasOwnProperty("offset")) F.offset = W.offset;
                                if (W.bucketCounts && W.bucketCounts.length) {
                                    F.bucketCounts = [];
                                    for (var V = 0; V < W.bucketCounts.length; ++V)
                                        if (typeof W.bucketCounts[V] === "number") F.bucketCounts[V] = X.longs === String ? String(W.bucketCounts[V]) : W.bucketCounts[V];
                                        else F.bucketCounts[V] = X.longs === String ? _A.Long.prototype.toString.call(W.bucketCounts[V]) : X.longs === Number ? new _A.LongBits(W.bucketCounts[V].low >>> 0, W.bucketCounts[V].high >>> 0).toNumber(!0) : W.bucketCounts[V]
                                }
                                return F
                            }, Y.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, Y.getTypeUrl = function(W) {
                                if (W === void 0) W = "type.googleapis.com";
                                return W + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets"
                            }, Y
                        }(), Z
                    }(), G.SummaryDataPoint = function() {
                        function Z(I) {
                            if (this.attributes = [], this.quantileValues = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.attributes = _A.emptyArray, Z.prototype.startTimeUnixNano = null, Z.prototype.timeUnixNano = null, Z.prototype.count = null, Z.prototype.sum = null, Z.prototype.quantileValues = _A.emptyArray, Z.prototype.flags = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.startTimeUnixNano != null && Object.hasOwnProperty.call(Y, "startTimeUnixNano")) J.uint32(17).fixed64(Y.startTimeUnixNano);
                            if (Y.timeUnixNano != null && Object.hasOwnProperty.call(Y, "timeUnixNano")) J.uint32(25).fixed64(Y.timeUnixNano);
                            if (Y.count != null && Object.hasOwnProperty.call(Y, "count")) J.uint32(33).fixed64(Y.count);
                            if (Y.sum != null && Object.hasOwnProperty.call(Y, "sum")) J.uint32(41).double(Y.sum);
                            if (Y.quantileValues != null && Y.quantileValues.length)
                                for (var W = 0; W < Y.quantileValues.length; ++W) RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.encode(Y.quantileValues[W], J.uint32(50).fork()).ldelim();
                            if (Y.attributes != null && Y.attributes.length)
                                for (var W = 0; W < Y.attributes.length; ++W) RA.opentelemetry.proto.common.v1.KeyValue.encode(Y.attributes[W], J.uint32(58).fork()).ldelim();
                            if (Y.flags != null && Object.hasOwnProperty.call(Y, "flags")) J.uint32(64).uint32(Y.flags);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.metrics.v1.SummaryDataPoint;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 7: {
                                        if (!(F.attributes && F.attributes.length)) F.attributes = [];
                                        F.attributes.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 2: {
                                        F.startTimeUnixNano = Y.fixed64();
                                        break
                                    }
                                    case 3: {
                                        F.timeUnixNano = Y.fixed64();
                                        break
                                    }
                                    case 4: {
                                        F.count = Y.fixed64();
                                        break
                                    }
                                    case 5: {
                                        F.sum = Y.double();
                                        break
                                    }
                                    case 6: {
                                        if (!(F.quantileValues && F.quantileValues.length)) F.quantileValues = [];
                                        F.quantileValues.push(RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 8: {
                                        F.flags = Y.uint32();
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
                            if (Y.attributes != null && Y.hasOwnProperty("attributes")) {
                                if (!Array.isArray(Y.attributes)) return "attributes: array expected";
                                for (var J = 0; J < Y.attributes.length; ++J) {
                                    var W = RA.opentelemetry.proto.common.v1.KeyValue.verify(Y.attributes[J]);
                                    if (W) return "attributes." + W
                                }
                            }
                            if (Y.startTimeUnixNano != null && Y.hasOwnProperty("startTimeUnixNano")) {
                                if (!_A.isInteger(Y.startTimeUnixNano) && !(Y.startTimeUnixNano && _A.isInteger(Y.startTimeUnixNano.low) && _A.isInteger(Y.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected"
                            }
                            if (Y.timeUnixNano != null && Y.hasOwnProperty("timeUnixNano")) {
                                if (!_A.isInteger(Y.timeUnixNano) && !(Y.timeUnixNano && _A.isInteger(Y.timeUnixNano.low) && _A.isInteger(Y.timeUnixNano.high))) return "timeUnixNano: integer|Long expected"
                            }
                            if (Y.count != null && Y.hasOwnProperty("count")) {
                                if (!_A.isInteger(Y.count) && !(Y.count && _A.isInteger(Y.count.low) && _A.isInteger(Y.count.high))) return "count: integer|Long expected"
                            }
                            if (Y.sum != null && Y.hasOwnProperty("sum")) {
                                if (typeof Y.sum !== "number") return "sum: number expected"
                            }
                            if (Y.quantileValues != null && Y.hasOwnProperty("quantileValues")) {
                                if (!Array.isArray(Y.quantileValues)) return "quantileValues: array expected";
                                for (var J = 0; J < Y.quantileValues.length; ++J) {
                                    var W = RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.verify(Y.quantileValues[J]);
                                    if (W) return "quantileValues." + W
                                }
                            }
                            if (Y.flags != null && Y.hasOwnProperty("flags")) {
                                if (!_A.isInteger(Y.flags)) return "flags: integer expected"
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.metrics.v1.SummaryDataPoint) return Y;
                            var J = new RA.opentelemetry.proto.metrics.v1.SummaryDataPoint;
                            if (Y.attributes) {
                                if (!Array.isArray(Y.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: array expected");
                                J.attributes = [];
                                for (var W = 0; W < Y.attributes.length; ++W) {
                                    if (typeof Y.attributes[W] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: object expected");
                                    J.attributes[W] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(Y.attributes[W])
                                }
                            }
                            if (Y.startTimeUnixNano != null) {
                                if (_A.Long)(J.startTimeUnixNano = _A.Long.fromValue(Y.startTimeUnixNano)).unsigned = !1;
                                else if (typeof Y.startTimeUnixNano === "string") J.startTimeUnixNano = parseInt(Y.startTimeUnixNano, 10);
                                else if (typeof Y.startTimeUnixNano === "number") J.startTimeUnixNano = Y.startTimeUnixNano;
                                else if (typeof Y.startTimeUnixNano === "object") J.startTimeUnixNano = new _A.LongBits(Y.startTimeUnixNano.low >>> 0, Y.startTimeUnixNano.high >>> 0).toNumber()
                            }
                            if (Y.timeUnixNano != null) {
                                if (_A.Long)(J.timeUnixNano = _A.Long.fromValue(Y.timeUnixNano)).unsigned = !1;
                                else if (typeof Y.timeUnixNano === "string") J.timeUnixNano = parseInt(Y.timeUnixNano, 10);
                                else if (typeof Y.timeUnixNano === "number") J.timeUnixNano = Y.timeUnixNano;
                                else if (typeof Y.timeUnixNano === "object") J.timeUnixNano = new _A.LongBits(Y.timeUnixNano.low >>> 0, Y.timeUnixNano.high >>> 0).toNumber()
                            }
                            if (Y.count != null) {
                                if (_A.Long)(J.count = _A.Long.fromValue(Y.count)).unsigned = !1;
                                else if (typeof Y.count === "string") J.count = parseInt(Y.count, 10);
                                else if (typeof Y.count === "number") J.count = Y.count;
                                else if (typeof Y.count === "object") J.count = new _A.LongBits(Y.count.low >>> 0, Y.count.high >>> 0).toNumber()
                            }
                            if (Y.sum != null) J.sum = Number(Y.sum);
                            if (Y.quantileValues) {
                                if (!Array.isArray(Y.quantileValues)) throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: array expected");
                                J.quantileValues = [];
                                for (var W = 0; W < Y.quantileValues.length; ++W) {
                                    if (typeof Y.quantileValues[W] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: object expected");
                                    J.quantileValues[W] = RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.fromObject(Y.quantileValues[W])
                                }
                            }
                            if (Y.flags != null) J.flags = Y.flags >>> 0;
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.quantileValues = [], W.attributes = [];
                            if (J.defaults) {
                                if (_A.Long) {
                                    var X = new _A.Long(0, 0, !1);
                                    W.startTimeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X
                                } else W.startTimeUnixNano = J.longs === String ? "0" : 0;
                                if (_A.Long) {
                                    var X = new _A.Long(0, 0, !1);
                                    W.timeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X
                                } else W.timeUnixNano = J.longs === String ? "0" : 0;
                                if (_A.Long) {
                                    var X = new _A.Long(0, 0, !1);
                                    W.count = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X
                                } else W.count = J.longs === String ? "0" : 0;
                                W.sum = 0, W.flags = 0
                            }
                            if (Y.startTimeUnixNano != null && Y.hasOwnProperty("startTimeUnixNano"))
                                if (typeof Y.startTimeUnixNano === "number") W.startTimeUnixNano = J.longs === String ? String(Y.startTimeUnixNano) : Y.startTimeUnixNano;
                                else W.startTimeUnixNano = J.longs === String ? _A.Long.prototype.toString.call(Y.startTimeUnixNano) : J.longs === Number ? new _A.LongBits(Y.startTimeUnixNano.low >>> 0, Y.startTimeUnixNano.high >>> 0).toNumber() : Y.startTimeUnixNano;
                            if (Y.timeUnixNano != null && Y.hasOwnProperty("timeUnixNano"))
                                if (typeof Y.timeUnixNano === "number") W.timeUnixNano = J.longs === String ? String(Y.timeUnixNano) : Y.timeUnixNano;
                                else W.timeUnixNano = J.longs === String ? _A.Long.prototype.toString.call(Y.timeUnixNano) : J.longs === Number ? new _A.LongBits(Y.timeUnixNano.low >>> 0, Y.timeUnixNano.high >>> 0).toNumber() : Y.timeUnixNano;
                            if (Y.count != null && Y.hasOwnProperty("count"))
                                if (typeof Y.count === "number") W.count = J.longs === String ? String(Y.count) : Y.count;
                                else W.count = J.longs === String ? _A.Long.prototype.toString.call(Y.count) : J.longs === Number ? new _A.LongBits(Y.count.low >>> 0, Y.count.high >>> 0).toNumber() : Y.count;
                            if (Y.sum != null && Y.hasOwnProperty("sum")) W.sum = J.json && !isFinite(Y.sum) ? String(Y.sum) : Y.sum;
                            if (Y.quantileValues && Y.quantileValues.length) {
                                W.quantileValues = [];
                                for (var F = 0; F < Y.quantileValues.length; ++F) W.quantileValues[F] = RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.toObject(Y.quantileValues[F], J)
                            }
                            if (Y.attributes && Y.attributes.length) {
                                W.attributes = [];
                                for (var F = 0; F < Y.attributes.length; ++F) W.attributes[F] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(Y.attributes[F], J)
                            }
                            if (Y.flags != null && Y.hasOwnProperty("flags")) W.flags = Y.flags;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.metrics.v1.SummaryDataPoint"
                        }, Z.ValueAtQuantile = function() {
                            function I(Y) {
                                if (Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.quantile = null, I.prototype.value = null, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.quantile != null && Object.hasOwnProperty.call(J, "quantile")) W.uint32(9).double(J.quantile);
                                if (J.value != null && Object.hasOwnProperty.call(J, "value")) W.uint32(17).double(J.value);
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            V.quantile = J.double();
                                            break
                                        }
                                        case 2: {
                                            V.value = J.double();
                                            break
                                        }
                                        default:
                                            J.skipType(K & 7);
                                            break
                                    }
                                }
                                return V
                            }, I.decodeDelimited = function(J) {
                                if (!(J instanceof B0)) J = new B0(J);
                                return this.decode(J, J.uint32())
                            }, I.verify = function(J) {
                                if (typeof J !== "object" || J === null) return "object expected";
                                if (J.quantile != null && J.hasOwnProperty("quantile")) {
                                    if (typeof J.quantile !== "number") return "quantile: number expected"
                                }
                                if (J.value != null && J.hasOwnProperty("value")) {
                                    if (typeof J.value !== "number") return "value: number expected"
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile) return J;
                                var W = new RA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile;
                                if (J.quantile != null) W.quantile = Number(J.quantile);
                                if (J.value != null) W.value = Number(J.value);
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.defaults) X.quantile = 0, X.value = 0;
                                if (J.quantile != null && J.hasOwnProperty("quantile")) X.quantile = W.json && !isFinite(J.quantile) ? String(J.quantile) : J.quantile;
                                if (J.value != null && J.hasOwnProperty("value")) X.value = W.json && !isFinite(J.value) ? String(J.value) : J.value;
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile"
                            }, I
                        }(), Z
                    }(), G.Exemplar = function() {
                        function Z(Y) {
                            if (this.filteredAttributes = [], Y) {
                                for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                    if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                            }
                        }
                        Z.prototype.filteredAttributes = _A.emptyArray, Z.prototype.timeUnixNano = null, Z.prototype.asDouble = null, Z.prototype.asInt = null, Z.prototype.spanId = null, Z.prototype.traceId = null;
                        var I;
                        return Object.defineProperty(Z.prototype, "value", {
                            get: _A.oneOfGetter(I = ["asDouble", "asInt"]),
                            set: _A.oneOfSetter(I)
                        }), Z.create = function(J) {
                            return new Z(J)
                        }, Z.encode = function(J, W) {
                            if (!W) W = E8.create();
                            if (J.timeUnixNano != null && Object.hasOwnProperty.call(J, "timeUnixNano")) W.uint32(17).fixed64(J.timeUnixNano);
                            if (J.asDouble != null && Object.hasOwnProperty.call(J, "asDouble")) W.uint32(25).double(J.asDouble);
                            if (J.spanId != null && Object.hasOwnProperty.call(J, "spanId")) W.uint32(34).bytes(J.spanId);
                            if (J.traceId != null && Object.hasOwnProperty.call(J, "traceId")) W.uint32(42).bytes(J.traceId);
                            if (J.asInt != null && Object.hasOwnProperty.call(J, "asInt")) W.uint32(49).sfixed64(J.asInt);
                            if (J.filteredAttributes != null && J.filteredAttributes.length)
                                for (var X = 0; X < J.filteredAttributes.length; ++X) RA.opentelemetry.proto.common.v1.KeyValue.encode(J.filteredAttributes[X], W.uint32(58).fork()).ldelim();
                            return W
                        }, Z.encodeDelimited = function(J, W) {
                            return this.encode(J, W).ldelim()
                        }, Z.decode = function(J, W, X) {
                            if (!(J instanceof B0)) J = B0.create(J);
                            var F = W === void 0 ? J.len : J.pos + W,
                                V = new RA.opentelemetry.proto.metrics.v1.Exemplar;
                            while (J.pos < F) {
                                var K = J.uint32();
                                if (K === X) break;
                                switch (K >>> 3) {
                                    case 7: {
                                        if (!(V.filteredAttributes && V.filteredAttributes.length)) V.filteredAttributes = [];
                                        V.filteredAttributes.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                                        break
                                    }
                                    case 2: {
                                        V.timeUnixNano = J.fixed64();
                                        break
                                    }
                                    case 3: {
                                        V.asDouble = J.double();
                                        break
                                    }
                                    case 6: {
                                        V.asInt = J.sfixed64();
                                        break
                                    }
                                    case 4: {
                                        V.spanId = J.bytes();
                                        break
                                    }
                                    case 5: {
                                        V.traceId = J.bytes();
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
                            if (J.filteredAttributes != null && J.hasOwnProperty("filteredAttributes")) {
                                if (!Array.isArray(J.filteredAttributes)) return "filteredAttributes: array expected";
                                for (var X = 0; X < J.filteredAttributes.length; ++X) {
                                    var F = RA.opentelemetry.proto.common.v1.KeyValue.verify(J.filteredAttributes[X]);
                                    if (F) return "filteredAttributes." + F
                                }
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
                            if (J.spanId != null && J.hasOwnProperty("spanId")) {
                                if (!(J.spanId && typeof J.spanId.length === "number" || _A.isString(J.spanId))) return "spanId: buffer expected"
                            }
                            if (J.traceId != null && J.hasOwnProperty("traceId")) {
                                if (!(J.traceId && typeof J.traceId.length === "number" || _A.isString(J.traceId))) return "traceId: buffer expected"
                            }
                            return null
                        }, Z.fromObject = function(J) {
                            if (J instanceof RA.opentelemetry.proto.metrics.v1.Exemplar) return J;
                            var W = new RA.opentelemetry.proto.metrics.v1.Exemplar;
                            if (J.filteredAttributes) {
                                if (!Array.isArray(J.filteredAttributes)) throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: array expected");
                                W.filteredAttributes = [];
                                for (var X = 0; X < J.filteredAttributes.length; ++X) {
                                    if (typeof J.filteredAttributes[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: object expected");
                                    W.filteredAttributes[X] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.filteredAttributes[X])
                                }
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
                            if (J.spanId != null) {
                                if (typeof J.spanId === "string") _A.base64.decode(J.spanId, W.spanId = _A.newBuffer(_A.base64.length(J.spanId)), 0);
                                else if (J.spanId.length >= 0) W.spanId = J.spanId
                            }
                            if (J.traceId != null) {
                                if (typeof J.traceId === "string") _A.base64.decode(J.traceId, W.traceId = _A.newBuffer(_A.base64.length(J.traceId)), 0);
                                else if (J.traceId.length >= 0) W.traceId = J.traceId
                            }
                            return W
                        }, Z.toObject = function(J, W) {
                            if (!W) W = {};
                            var X = {};
                            if (W.arrays || W.defaults) X.filteredAttributes = [];
                            if (W.defaults) {
                                if (_A.Long) {
                                    var F = new _A.Long(0, 0, !1);
                                    X.timeUnixNano = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                } else X.timeUnixNano = W.longs === String ? "0" : 0;
                                if (W.bytes === String) X.spanId = "";
                                else if (X.spanId = [], W.bytes !== Array) X.spanId = _A.newBuffer(X.spanId);
                                if (W.bytes === String) X.traceId = "";
                                else if (X.traceId = [], W.bytes !== Array) X.traceId = _A.newBuffer(X.traceId)
                            }
                            if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano"))
                                if (typeof J.timeUnixNano === "number") X.timeUnixNano = W.longs === String ? String(J.timeUnixNano) : J.timeUnixNano;
                                else X.timeUnixNano = W.longs === String ? _A.Long.prototype.toString.call(J.timeUnixNano) : W.longs === Number ? new _A.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber() : J.timeUnixNano;
                            if (J.asDouble != null && J.hasOwnProperty("asDouble")) {
                                if (X.asDouble = W.json && !isFinite(J.asDouble) ? String(J.asDouble) : J.asDouble, W.oneofs) X.value = "asDouble"
                            }
                            if (J.spanId != null && J.hasOwnProperty("spanId")) X.spanId = W.bytes === String ? _A.base64.encode(J.spanId, 0, J.spanId.length) : W.bytes === Array ? Array.prototype.slice.call(J.spanId) : J.spanId;
                            if (J.traceId != null && J.hasOwnProperty("traceId")) X.traceId = W.bytes === String ? _A.base64.encode(J.traceId, 0, J.traceId.length) : W.bytes === Array ? Array.prototype.slice.call(J.traceId) : J.traceId;
                            if (J.asInt != null && J.hasOwnProperty("asInt")) {
                                if (typeof J.asInt === "number") X.asInt = W.longs === String ? String(J.asInt) : J.asInt;
                                else X.asInt = W.longs === String ? _A.Long.prototype.toString.call(J.asInt) : W.longs === Number ? new _A.LongBits(J.asInt.low >>> 0, J.asInt.high >>> 0).toNumber() : J.asInt;
                                if (W.oneofs) X.value = "asInt"
                            }
                            if (J.filteredAttributes && J.filteredAttributes.length) {
                                X.filteredAttributes = [];
                                for (var V = 0; V < J.filteredAttributes.length; ++V) X.filteredAttributes[V] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(J.filteredAttributes[V], W)
                            }
                            return X
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(J) {
                            if (J === void 0) J = "type.googleapis.com";
                            return J + "/opentelemetry.proto.metrics.v1.Exemplar"
                        }, Z
                    }(), G
                }(), B
            }(), Q.logs = function() {
                var B = {};
                return B.v1 = function() {
                    var G = {};
                    return G.LogsData = function() {
                        function Z(I) {
                            if (this.resourceLogs = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.resourceLogs = _A.emptyArray, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.resourceLogs != null && Y.resourceLogs.length)
                                for (var W = 0; W < Y.resourceLogs.length; ++W) RA.opentelemetry.proto.logs.v1.ResourceLogs.encode(Y.resourceLogs[W], J.uint32(10).fork()).ldelim();
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.logs.v1.LogsData;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        if (!(F.resourceLogs && F.resourceLogs.length)) F.resourceLogs = [];
                                        F.resourceLogs.push(RA.opentelemetry.proto.logs.v1.ResourceLogs.decode(Y, Y.uint32()));
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
                            if (Y.resourceLogs != null && Y.hasOwnProperty("resourceLogs")) {
                                if (!Array.isArray(Y.resourceLogs)) return "resourceLogs: array expected";
                                for (var J = 0; J < Y.resourceLogs.length; ++J) {
                                    var W = RA.opentelemetry.proto.logs.v1.ResourceLogs.verify(Y.resourceLogs[J]);
                                    if (W) return "resourceLogs." + W
                                }
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.logs.v1.LogsData) return Y;
                            var J = new RA.opentelemetry.proto.logs.v1.LogsData;
                            if (Y.resourceLogs) {
                                if (!Array.isArray(Y.resourceLogs)) throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: array expected");
                                J.resourceLogs = [];
                                for (var W = 0; W < Y.resourceLogs.length; ++W) {
                                    if (typeof Y.resourceLogs[W] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: object expected");
                                    J.resourceLogs[W] = RA.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(Y.resourceLogs[W])
                                }
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.resourceLogs = [];
                            if (Y.resourceLogs && Y.resourceLogs.length) {
                                W.resourceLogs = [];
                                for (var X = 0; X < Y.resourceLogs.length; ++X) W.resourceLogs[X] = RA.opentelemetry.proto.logs.v1.ResourceLogs.toObject(Y.resourceLogs[X], J)
                            }
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.logs.v1.LogsData"
                        }, Z
                    }(), G.ResourceLogs = function() {
                        function Z(I) {
                            if (this.scopeLogs = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.resource = null, Z.prototype.scopeLogs = _A.emptyArray, Z.prototype.schemaUrl = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.resource != null && Object.hasOwnProperty.call(Y, "resource")) RA.opentelemetry.proto.resource.v1.Resource.encode(Y.resource, J.uint32(10).fork()).ldelim();
                            if (Y.scopeLogs != null && Y.scopeLogs.length)
                                for (var W = 0; W < Y.scopeLogs.length; ++W) RA.opentelemetry.proto.logs.v1.ScopeLogs.encode(Y.scopeLogs[W], J.uint32(18).fork()).ldelim();
                            if (Y.schemaUrl != null && Object.hasOwnProperty.call(Y, "schemaUrl")) J.uint32(26).string(Y.schemaUrl);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.logs.v1.ResourceLogs;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        F.resource = RA.opentelemetry.proto.resource.v1.Resource.decode(Y, Y.uint32());
                                        break
                                    }
                                    case 2: {
                                        if (!(F.scopeLogs && F.scopeLogs.length)) F.scopeLogs = [];
                                        F.scopeLogs.push(RA.opentelemetry.proto.logs.v1.ScopeLogs.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 3: {
                                        F.schemaUrl = Y.string();
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
                            if (Y.resource != null && Y.hasOwnProperty("resource")) {
                                var J = RA.opentelemetry.proto.resource.v1.Resource.verify(Y.resource);
                                if (J) return "resource." + J
                            }
                            if (Y.scopeLogs != null && Y.hasOwnProperty("scopeLogs")) {
                                if (!Array.isArray(Y.scopeLogs)) return "scopeLogs: array expected";
                                for (var W = 0; W < Y.scopeLogs.length; ++W) {
                                    var J = RA.opentelemetry.proto.logs.v1.ScopeLogs.verify(Y.scopeLogs[W]);
                                    if (J) return "scopeLogs." + J
                                }
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) {
                                if (!_A.isString(Y.schemaUrl)) return "schemaUrl: string expected"
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.logs.v1.ResourceLogs) return Y;
                            var J = new RA.opentelemetry.proto.logs.v1.ResourceLogs;
                            if (Y.resource != null) {
                                if (typeof Y.resource !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.resource: object expected");
                                J.resource = RA.opentelemetry.proto.resource.v1.Resource.fromObject(Y.resource)
                            }
                            if (Y.scopeLogs) {
                                if (!Array.isArray(Y.scopeLogs)) throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: array expected");
                                J.scopeLogs = [];
                                for (var W = 0; W < Y.scopeLogs.length; ++W) {
                                    if (typeof Y.scopeLogs[W] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: object expected");
                                    J.scopeLogs[W] = RA.opentelemetry.proto.logs.v1.ScopeLogs.fromObject(Y.scopeLogs[W])
                                }
                            }
                            if (Y.schemaUrl != null) J.schemaUrl = String(Y.schemaUrl);
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.scopeLogs = [];
                            if (J.defaults) W.resource = null, W.schemaUrl = "";
                            if (Y.resource != null && Y.hasOwnProperty("resource")) W.resource = RA.opentelemetry.proto.resource.v1.Resource.toObject(Y.resource, J);
                            if (Y.scopeLogs && Y.scopeLogs.length) {
                                W.scopeLogs = [];
                                for (var X = 0; X < Y.scopeLogs.length; ++X) W.scopeLogs[X] = RA.opentelemetry.proto.logs.v1.ScopeLogs.toObject(Y.scopeLogs[X], J)
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) W.schemaUrl = Y.schemaUrl;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.logs.v1.ResourceLogs"
                        }, Z
                    }(), G.ScopeLogs = function() {
                        function Z(I) {
                            if (this.logRecords = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.scope = null, Z.prototype.logRecords = _A.emptyArray, Z.prototype.schemaUrl = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.scope != null && Object.hasOwnProperty.call(Y, "scope")) RA.opentelemetry.proto.common.v1.InstrumentationScope.encode(Y.scope, J.uint32(10).fork()).ldelim();
                            if (Y.logRecords != null && Y.logRecords.length)
                                for (var W = 0; W < Y.logRecords.length; ++W) RA.opentelemetry.proto.logs.v1.LogRecord.encode(Y.logRecords[W], J.uint32(18).fork()).ldelim();
                            if (Y.schemaUrl != null && Object.hasOwnProperty.call(Y, "schemaUrl")) J.uint32(26).string(Y.schemaUrl);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.logs.v1.ScopeLogs;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        F.scope = RA.opentelemetry.proto.common.v1.InstrumentationScope.decode(Y, Y.uint32());
                                        break
                                    }
                                    case 2: {
                                        if (!(F.logRecords && F.logRecords.length)) F.logRecords = [];
                                        F.logRecords.push(RA.opentelemetry.proto.logs.v1.LogRecord.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 3: {
                                        F.schemaUrl = Y.string();
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
                            if (Y.scope != null && Y.hasOwnProperty("scope")) {
                                var J = RA.opentelemetry.proto.common.v1.InstrumentationScope.verify(Y.scope);
                                if (J) return "scope." + J
                            }
                            if (Y.logRecords != null && Y.hasOwnProperty("logRecords")) {
                                if (!Array.isArray(Y.logRecords)) return "logRecords: array expected";
                                for (var W = 0; W < Y.logRecords.length; ++W) {
                                    var J = RA.opentelemetry.proto.logs.v1.LogRecord.verify(Y.logRecords[W]);
                                    if (J) return "logRecords." + J
                                }
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) {
                                if (!_A.isString(Y.schemaUrl)) return "schemaUrl: string expected"
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.logs.v1.ScopeLogs) return Y;
                            var J = new RA.opentelemetry.proto.logs.v1.ScopeLogs;
                            if (Y.scope != null) {
                                if (typeof Y.scope !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.scope: object expected");
                                J.scope = RA.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(Y.scope)
                            }
                            if (Y.logRecords) {
                                if (!Array.isArray(Y.logRecords)) throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: array expected");
                                J.logRecords = [];
                                for (var W = 0; W < Y.logRecords.length; ++W) {
                                    if (typeof Y.logRecords[W] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: object expected");
                                    J.logRecords[W] = RA.opentelemetry.proto.logs.v1.LogRecord.fromObject(Y.logRecords[W])
                                }
                            }
                            if (Y.schemaUrl != null) J.schemaUrl = String(Y.schemaUrl);
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.logRecords = [];
                            if (J.defaults) W.scope = null, W.schemaUrl = "";
                            if (Y.scope != null && Y.hasOwnProperty("scope")) W.scope = RA.opentelemetry.proto.common.v1.InstrumentationScope.toObject(Y.scope, J);
                            if (Y.logRecords && Y.logRecords.length) {
                                W.logRecords = [];
                                for (var X = 0; X < Y.logRecords.length; ++X) W.logRecords[X] = RA.opentelemetry.proto.logs.v1.LogRecord.toObject(Y.logRecords[X], J)
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) W.schemaUrl = Y.schemaUrl;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.logs.v1.ScopeLogs"
                        }, Z
                    }(), G.SeverityNumber = function() {
                        var Z = {},
                            I = Object.create(Z);
                        return I[Z[0] = "SEVERITY_NUMBER_UNSPECIFIED"] = 0, I[Z[1] = "SEVERITY_NUMBER_TRACE"] = 1, I[Z[2] = "SEVERITY_NUMBER_TRACE2"] = 2, I[Z[3] = "SEVERITY_NUMBER_TRACE3"] = 3, I[Z[4] = "SEVERITY_NUMBER_TRACE4"] = 4, I[Z[5] = "SEVERITY_NUMBER_DEBUG"] = 5, I[Z[6] = "SEVERITY_NUMBER_DEBUG2"] = 6, I[Z[7] = "SEVERITY_NUMBER_DEBUG3"] = 7, I[Z[8] = "SEVERITY_NUMBER_DEBUG4"] = 8, I[Z[9] = "SEVERITY_NUMBER_INFO"] = 9, I[Z[10] = "SEVERITY_NUMBER_INFO2"] = 10, I[Z[11] = "SEVERITY_NUMBER_INFO3"] = 11, I[Z[12] = "SEVERITY_NUMBER_INFO4"] = 12, I[Z[13] = "SEVERITY_NUMBER_WARN"] = 13, I[Z[14] = "SEVERITY_NUMBER_WARN2"] = 14, I[Z[15] = "SEVERITY_NUMBER_WARN3"] = 15, I[Z[16] = "SEVERITY_NUMBER_WARN4"] = 16, I[Z[17] = "SEVERITY_NUMBER_ERROR"] = 17, I[Z[18] = "SEVERITY_NUMBER_ERROR2"] = 18, I[Z[19] = "SEVERITY_NUMBER_ERROR3"] = 19, I[Z[20] = "SEVERITY_NUMBER_ERROR4"] = 20, I[Z[21] = "SEVERITY_NUMBER_FATAL"] = 21, I[Z[22] = "SEVERITY_NUMBER_FATAL2"] = 22, I[Z[23] = "SEVERITY_NUMBER_FATAL3"] = 23, I[Z[24] = "SEVERITY_NUMBER_FATAL4"] = 24, I
                    }(), G.LogRecordFlags = function() {
                        var Z = {},
                            I = Object.create(Z);
                        return I[Z[0] = "LOG_RECORD_FLAGS_DO_NOT_USE"] = 0, I[Z[255] = "LOG_RECORD_FLAGS_TRACE_FLAGS_MASK"] = 255, I
                    }(), G.LogRecord = function() {
                        function Z(I) {
                            if (this.attributes = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.timeUnixNano = null, Z.prototype.observedTimeUnixNano = null, Z.prototype.severityNumber = null, Z.prototype.severityText = null, Z.prototype.body = null, Z.prototype.attributes = _A.emptyArray, Z.prototype.droppedAttributesCount = null, Z.prototype.flags = null, Z.prototype.traceId = null, Z.prototype.spanId = null, Z.prototype.eventName = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.timeUnixNano != null && Object.hasOwnProperty.call(Y, "timeUnixNano")) J.uint32(9).fixed64(Y.timeUnixNano);
                            if (Y.severityNumber != null && Object.hasOwnProperty.call(Y, "severityNumber")) J.uint32(16).int32(Y.severityNumber);
                            if (Y.severityText != null && Object.hasOwnProperty.call(Y, "severityText")) J.uint32(26).string(Y.severityText);
                            if (Y.body != null && Object.hasOwnProperty.call(Y, "body")) RA.opentelemetry.proto.common.v1.AnyValue.encode(Y.body, J.uint32(42).fork()).ldelim();
                            if (Y.attributes != null && Y.attributes.length)
                                for (var W = 0; W < Y.attributes.length; ++W) RA.opentelemetry.proto.common.v1.KeyValue.encode(Y.attributes[W], J.uint32(50).fork()).ldelim();
                            if (Y.droppedAttributesCount != null && Object.hasOwnProperty.call(Y, "droppedAttributesCount")) J.uint32(56).uint32(Y.droppedAttributesCount);
                            if (Y.flags != null && Object.hasOwnProperty.call(Y, "flags")) J.uint32(69).fixed32(Y.flags);
                            if (Y.traceId != null && Object.hasOwnProperty.call(Y, "traceId")) J.uint32(74).bytes(Y.traceId);
                            if (Y.spanId != null && Object.hasOwnProperty.call(Y, "spanId")) J.uint32(82).bytes(Y.spanId);
                            if (Y.observedTimeUnixNano != null && Object.hasOwnProperty.call(Y, "observedTimeUnixNano")) J.uint32(89).fixed64(Y.observedTimeUnixNano);
                            if (Y.eventName != null && Object.hasOwnProperty.call(Y, "eventName")) J.uint32(98).string(Y.eventName);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.logs.v1.LogRecord;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        F.timeUnixNano = Y.fixed64();
                                        break
                                    }
                                    case 11: {
                                        F.observedTimeUnixNano = Y.fixed64();
                                        break
                                    }
                                    case 2: {
                                        F.severityNumber = Y.int32();
                                        break
                                    }
                                    case 3: {
                                        F.severityText = Y.string();
                                        break
                                    }
                                    case 5: {
                                        F.body = RA.opentelemetry.proto.common.v1.AnyValue.decode(Y, Y.uint32());
                                        break
                                    }
                                    case 6: {
                                        if (!(F.attributes && F.attributes.length)) F.attributes = [];
                                        F.attributes.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 7: {
                                        F.droppedAttributesCount = Y.uint32();
                                        break
                                    }
                                    case 8: {
                                        F.flags = Y.fixed32();
                                        break
                                    }
                                    case 9: {
                                        F.traceId = Y.bytes();
                                        break
                                    }
                                    case 10: {
                                        F.spanId = Y.bytes();
                                        break
                                    }
                                    case 12: {
                                        F.eventName = Y.string();
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
                            if (Y.timeUnixNano != null && Y.hasOwnProperty("timeUnixNano")) {
                                if (!_A.isInteger(Y.timeUnixNano) && !(Y.timeUnixNano && _A.isInteger(Y.timeUnixNano.low) && _A.isInteger(Y.timeUnixNano.high))) return "timeUnixNano: integer|Long expected"
                            }
                            if (Y.observedTimeUnixNano != null && Y.hasOwnProperty("observedTimeUnixNano")) {
                                if (!_A.isInteger(Y.observedTimeUnixNano) && !(Y.observedTimeUnixNano && _A.isInteger(Y.observedTimeUnixNano.low) && _A.isInteger(Y.observedTimeUnixNano.high))) return "observedTimeUnixNano: integer|Long expected"
                            }
                            if (Y.severityNumber != null && Y.hasOwnProperty("severityNumber")) switch (Y.severityNumber) {
                                default:
                                    return "severityNumber: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                case 13:
                                case 14:
                                case 15:
                                case 16:
                                case 17:
                                case 18:
                                case 19:
                                case 20:
                                case 21:
                                case 22:
                                case 23:
                                case 24:
                                    break
                            }
                            if (Y.severityText != null && Y.hasOwnProperty("severityText")) {
                                if (!_A.isString(Y.severityText)) return "severityText: string expected"
                            }
                            if (Y.body != null && Y.hasOwnProperty("body")) {
                                var J = RA.opentelemetry.proto.common.v1.AnyValue.verify(Y.body);
                                if (J) return "body." + J
                            }
                            if (Y.attributes != null && Y.hasOwnProperty("attributes")) {
                                if (!Array.isArray(Y.attributes)) return "attributes: array expected";
                                for (var W = 0; W < Y.attributes.length; ++W) {
                                    var J = RA.opentelemetry.proto.common.v1.KeyValue.verify(Y.attributes[W]);
                                    if (J) return "attributes." + J
                                }
                            }
                            if (Y.droppedAttributesCount != null && Y.hasOwnProperty("droppedAttributesCount")) {
                                if (!_A.isInteger(Y.droppedAttributesCount)) return "droppedAttributesCount: integer expected"
                            }
                            if (Y.flags != null && Y.hasOwnProperty("flags")) {
                                if (!_A.isInteger(Y.flags)) return "flags: integer expected"
                            }
                            if (Y.traceId != null && Y.hasOwnProperty("traceId")) {
                                if (!(Y.traceId && typeof Y.traceId.length === "number" || _A.isString(Y.traceId))) return "traceId: buffer expected"
                            }
                            if (Y.spanId != null && Y.hasOwnProperty("spanId")) {
                                if (!(Y.spanId && typeof Y.spanId.length === "number" || _A.isString(Y.spanId))) return "spanId: buffer expected"
                            }
                            if (Y.eventName != null && Y.hasOwnProperty("eventName")) {
                                if (!_A.isString(Y.eventName)) return "eventName: string expected"
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.logs.v1.LogRecord) return Y;
                            var J = new RA.opentelemetry.proto.logs.v1.LogRecord;
                            if (Y.timeUnixNano != null) {
                                if (_A.Long)(J.timeUnixNano = _A.Long.fromValue(Y.timeUnixNano)).unsigned = !1;
                                else if (typeof Y.timeUnixNano === "string") J.timeUnixNano = parseInt(Y.timeUnixNano, 10);
                                else if (typeof Y.timeUnixNano === "number") J.timeUnixNano = Y.timeUnixNano;
                                else if (typeof Y.timeUnixNano === "object") J.timeUnixNano = new _A.LongBits(Y.timeUnixNano.low >>> 0, Y.timeUnixNano.high >>> 0).toNumber()
                            }
                            if (Y.observedTimeUnixNano != null) {
                                if (_A.Long)(J.observedTimeUnixNano = _A.Long.fromValue(Y.observedTimeUnixNano)).unsigned = !1;
                                else if (typeof Y.observedTimeUnixNano === "string") J.observedTimeUnixNano = parseInt(Y.observedTimeUnixNano, 10);
                                else if (typeof Y.observedTimeUnixNano === "number") J.observedTimeUnixNano = Y.observedTimeUnixNano;
                                else if (typeof Y.observedTimeUnixNano === "object") J.observedTimeUnixNano = new _A.LongBits(Y.observedTimeUnixNano.low >>> 0, Y.observedTimeUnixNano.high >>> 0).toNumber()
                            }
                            switch (Y.severityNumber) {
                                default:
                                    if (typeof Y.severityNumber === "number") {
                                        J.severityNumber = Y.severityNumber;
                                        break
                                    }
                                    break;
                                case "SEVERITY_NUMBER_UNSPECIFIED":
                                case 0:
                                    J.severityNumber = 0;
                                    break;
                                case "SEVERITY_NUMBER_TRACE":
                                case 1:
                                    J.severityNumber = 1;
                                    break;
                                case "SEVERITY_NUMBER_TRACE2":
                                case 2:
                                    J.severityNumber = 2;
                                    break;
                                case "SEVERITY_NUMBER_TRACE3":
                                case 3:
                                    J.severityNumber = 3;
                                    break;
                                case "SEVERITY_NUMBER_TRACE4":
                                case 4:
                                    J.severityNumber = 4;
                                    break;
                                case "SEVERITY_NUMBER_DEBUG":
                                case 5:
                                    J.severityNumber = 5;
                                    break;
                                case "SEVERITY_NUMBER_DEBUG2":
                                case 6:
                                    J.severityNumber = 6;
                                    break;
                                case "SEVERITY_NUMBER_DEBUG3":
                                case 7:
                                    J.severityNumber = 7;
                                    break;
                                case "SEVERITY_NUMBER_DEBUG4":
                                case 8:
                                    J.severityNumber = 8;
                                    break;
                                case "SEVERITY_NUMBER_INFO":
                                case 9:
                                    J.severityNumber = 9;
                                    break;
                                case "SEVERITY_NUMBER_INFO2":
                                case 10:
                                    J.severityNumber = 10;
                                    break;
                                case "SEVERITY_NUMBER_INFO3":
                                case 11:
                                    J.severityNumber = 11;
                                    break;
                                case "SEVERITY_NUMBER_INFO4":
                                case 12:
                                    J.severityNumber = 12;
                                    break;
                                case "SEVERITY_NUMBER_WARN":
                                case 13:
                                    J.severityNumber = 13;
                                    break;
                                case "SEVERITY_NUMBER_WARN2":
                                case 14:
                                    J.severityNumber = 14;
                                    break;
                                case "SEVERITY_NUMBER_WARN3":
                                case 15:
                                    J.severityNumber = 15;
                                    break;
                                case "SEVERITY_NUMBER_WARN4":
                                case 16:
                                    J.severityNumber = 16;
                                    break;
                                case "SEVERITY_NUMBER_ERROR":
                                case 17:
                                    J.severityNumber = 17;
                                    break;
                                case "SEVERITY_NUMBER_ERROR2":
                                case 18:
                                    J.severityNumber = 18;
                                    break;
                                case "SEVERITY_NUMBER_ERROR3":
                                case 19:
                                    J.severityNumber = 19;
                                    break;
                                case "SEVERITY_NUMBER_ERROR4":
                                case 20:
                                    J.severityNumber = 20;
                                    break;
                                case "SEVERITY_NUMBER_FATAL":
                                case 21:
                                    J.severityNumber = 21;
                                    break;
                                case "SEVERITY_NUMBER_FATAL2":
                                case 22:
                                    J.severityNumber = 22;
                                    break;
                                case "SEVERITY_NUMBER_FATAL3":
                                case 23:
                                    J.severityNumber = 23;
                                    break;
                                case "SEVERITY_NUMBER_FATAL4":
                                case 24:
                                    J.severityNumber = 24;
                                    break
                            }
                            if (Y.severityText != null) J.severityText = String(Y.severityText);
                            if (Y.body != null) {
                                if (typeof Y.body !== "object") throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.body: object expected");
                                J.body = RA.opentelemetry.proto.common.v1.AnyValue.fromObject(Y.body)
                            }
                            if (Y.attributes) {
                                if (!Array.isArray(Y.attributes)) throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: array expected");
                                J.attributes = [];
                                for (var W = 0; W < Y.attributes.length; ++W) {
                                    if (typeof Y.attributes[W] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: object expected");
                                    J.attributes[W] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(Y.attributes[W])
                                }
                            }
                            if (Y.droppedAttributesCount != null) J.droppedAttributesCount = Y.droppedAttributesCount >>> 0;
                            if (Y.flags != null) J.flags = Y.flags >>> 0;
                            if (Y.traceId != null) {
                                if (typeof Y.traceId === "string") _A.base64.decode(Y.traceId, J.traceId = _A.newBuffer(_A.base64.length(Y.traceId)), 0);
                                else if (Y.traceId.length >= 0) J.traceId = Y.traceId
                            }
                            if (Y.spanId != null) {
                                if (typeof Y.spanId === "string") _A.base64.decode(Y.spanId, J.spanId = _A.newBuffer(_A.base64.length(Y.spanId)), 0);
                                else if (Y.spanId.length >= 0) J.spanId = Y.spanId
                            }
                            if (Y.eventName != null) J.eventName = String(Y.eventName);
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.attributes = [];
                            if (J.defaults) {
                                if (_A.Long) {
                                    var X = new _A.Long(0, 0, !1);
                                    W.timeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X
                                } else W.timeUnixNano = J.longs === String ? "0" : 0;
                                if (W.severityNumber = J.enums === String ? "SEVERITY_NUMBER_UNSPECIFIED" : 0, W.severityText = "", W.body = null, W.droppedAttributesCount = 0, W.flags = 0, J.bytes === String) W.traceId = "";
                                else if (W.traceId = [], J.bytes !== Array) W.traceId = _A.newBuffer(W.traceId);
                                if (J.bytes === String) W.spanId = "";
                                else if (W.spanId = [], J.bytes !== Array) W.spanId = _A.newBuffer(W.spanId);
                                if (_A.Long) {
                                    var X = new _A.Long(0, 0, !1);
                                    W.observedTimeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X
                                } else W.observedTimeUnixNano = J.longs === String ? "0" : 0;
                                W.eventName = ""
                            }
                            if (Y.timeUnixNano != null && Y.hasOwnProperty("timeUnixNano"))
                                if (typeof Y.timeUnixNano === "number") W.timeUnixNano = J.longs === String ? String(Y.timeUnixNano) : Y.timeUnixNano;
                                else W.timeUnixNano = J.longs === String ? _A.Long.prototype.toString.call(Y.timeUnixNano) : J.longs === Number ? new _A.LongBits(Y.timeUnixNano.low >>> 0, Y.timeUnixNano.high >>> 0).toNumber() : Y.timeUnixNano;
                            if (Y.severityNumber != null && Y.hasOwnProperty("severityNumber")) W.severityNumber = J.enums === String ? RA.opentelemetry.proto.logs.v1.SeverityNumber[Y.severityNumber] === void 0 ? Y.severityNumber : RA.opentelemetry.proto.logs.v1.SeverityNumber[Y.severityNumber] : Y.severityNumber;
                            if (Y.severityText != null && Y.hasOwnProperty("severityText")) W.severityText = Y.severityText;
                            if (Y.body != null && Y.hasOwnProperty("body")) W.body = RA.opentelemetry.proto.common.v1.AnyValue.toObject(Y.body, J);
                            if (Y.attributes && Y.attributes.length) {
                                W.attributes = [];
                                for (var F = 0; F < Y.attributes.length; ++F) W.attributes[F] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(Y.attributes[F], J)
                            }
                            if (Y.droppedAttributesCount != null && Y.hasOwnProperty("droppedAttributesCount")) W.droppedAttributesCount = Y.droppedAttributesCount;
                            if (Y.flags != null && Y.hasOwnProperty("flags")) W.flags = Y.flags;
                            if (Y.traceId != null && Y.hasOwnProperty("traceId")) W.traceId = J.bytes === String ? _A.base64.encode(Y.traceId, 0, Y.traceId.length) : J.bytes === Array ? Array.prototype.slice.call(Y.traceId) : Y.traceId;
                            if (Y.spanId != null && Y.hasOwnProperty("spanId")) W.spanId = J.bytes === String ? _A.base64.encode(Y.spanId, 0, Y.spanId.length) : J.bytes === Array ? Array.prototype.slice.call(Y.spanId) : Y.spanId;
                            if (Y.observedTimeUnixNano != null && Y.hasOwnProperty("observedTimeUnixNano"))
                                if (typeof Y.observedTimeUnixNano === "number") W.observedTimeUnixNano = J.longs === String ? String(Y.observedTimeUnixNano) : Y.observedTimeUnixNano;
                                else W.observedTimeUnixNano = J.longs === String ? _A.Long.prototype.toString.call(Y.observedTimeUnixNano) : J.longs === Number ? new _A.LongBits(Y.observedTimeUnixNano.low >>> 0, Y.observedTimeUnixNano.high >>> 0).toNumber() : Y.observedTimeUnixNano;
                            if (Y.eventName != null && Y.hasOwnProperty("eventName")) W.eventName = Y.eventName;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.logs.v1.LogRecord"
                        }, Z
                    }(), G
                }(), B
            }(), Q
        }(), A
    }();
    bF2.exports = RA
});
var uF2 = moduleWrapper((hF2) => {
    Object.defineProperty(hF2, "__esModule", {
        value: !0
    });
    hF2.hexToBinary = void 0;

    function fF2(A) {
        if (A >= 48 && A <= 57) return A - 48;
        if (A >= 97 && A <= 102) return A - 87;
        return A - 55
    }

    function WE5(A) {
        let Q = new Uint8Array(A.length / 2),
            B = 0;
        for (let G = 0; G < A.length; G += 2) {
            let Z = fF2(A.charCodeAt(G)),
                I = fF2(A.charCodeAt(G + 1));
            Q[B++] = Z << 4 | I
        }
        return Q
    }
    hF2.hexToBinary = WE5
});
var g91 = moduleWrapper((lF2) => {
    Object.defineProperty(lF2, "__esModule", {
        value: !0
    });
    lF2.getOtlpEncoder = lF2.encodeAsString = lF2.encodeAsLongBits = lF2.toLongBits = lF2.hrTimeToNanos = void 0;
    var XE5 = t6(),
        dQ0 = uF2();

    function cQ0(A) {
        let Q = BigInt(1e9);
        return BigInt(A[0]) * Q + BigInt(A[1])
    }
    lF2.hrTimeToNanos = cQ0;

    function dF2(A) {
        let Q = Number(BigInt.asUintN(32, A)),
            B = Number(BigInt.asUintN(32, A >> BigInt(32)));
        return {
            low: Q,
            high: B
        }
    }
    lF2.toLongBits = dF2;

    function pQ0(A) {
        let Q = cQ0(A);
        return dF2(Q)
    }
    lF2.encodeAsLongBits = pQ0;

    function cF2(A) {
        return cQ0(A).toString()
    }
    lF2.encodeAsString = cF2;
    var FE5 = typeof BigInt < "u" ? cF2 : XE5.hrTimeToNanoseconds;

    function mF2(A) {
        return A
    }

    function pF2(A) {
        if (A === void 0) return;
        return (0, dQ0.hexToBinary)(A)
    }
    var VE5 = {
        encodeHrTime: pQ0,
        encodeSpanContext: dQ0.hexToBinary,
        encodeOptionalSpanContext: pF2
    };

    function KE5(A) {
        if (A === void 0) return VE5;
        let Q = A.useLongBits ?? !0,
            B = A.useHex ?? !1;
        return {
            encodeHrTime: Q ? pQ0 : FE5,
            encodeSpanContext: B ? mF2 : dQ0.hexToBinary,
            encodeOptionalSpanContext: B ? mF2 : pF2
        }
    }
    lF2.getOtlpEncoder = KE5
});
var u91 = moduleWrapper((aF2) => {
    Object.defineProperty(aF2, "__esModule", {
        value: !0
    });
    aF2.toAnyValue = aF2.toKeyValue = aF2.toAttributes = aF2.createInstrumentationScope = aF2.createResource = void 0;

    function zE5(A) {
        let Q = {
                attributes: nF2(A.attributes),
                droppedAttributesCount: 0
            },
            B = A.schemaUrl;
        if (B && B !== "") Q.schemaUrl = B;
        return Q
    }
    aF2.createResource = zE5;

    function UE5(A) {
        return {
            name: A.name,
            version: A.version
        }
    }
    aF2.createInstrumentationScope = UE5;

    function nF2(A) {
        return Object.keys(A).map((Q) => lQ0(Q, A[Q]))
    }
    aF2.toAttributes = nF2;

    function lQ0(A, Q) {
        return {
            key: A,
            value: iQ0(Q)
        }
    }
    aF2.toKeyValue = lQ0;

    function iQ0(A) {
        let Q = typeof A;
        if (Q === "string") return {
            stringValue: A
        };
        if (Q === "number") {
            if (!Number.isInteger(A)) return {
                doubleValue: A
            };
            return {
                intValue: A
            }
        }
        if (Q === "boolean") return {
            boolValue: A
        };
        if (A instanceof Uint8Array) return {
            bytesValue: A
        };
        if (Array.isArray(A)) return {
            arrayValue: {
                values: A.map(iQ0)
            }
        };
        if (Q === "object" && A != null) return {
            kvlistValue: {
                values: Object.entries(A).map(([B, G]) => lQ0(B, G))
            }
        };
        return {}
    }
    aF2.toAnyValue = iQ0
});
var nQ0 = moduleWrapper((oF2) => {
    Object.defineProperty(oF2, "__esModule", {
        value: !0
    });
    oF2.toLogAttributes = oF2.createExportLogsServiceRequest = void 0;
    var LE5 = g91(),
        m91 = u91();

    function ME5(A, Q) {
        let B = (0, LE5.getOtlpEncoder)(Q);
        return {
            resourceLogs: RE5(A, B)
        }
    }
    oF2.createExportLogsServiceRequest = ME5;

    function OE5(A) {
        let Q = new Map;
        for (let B of A) {
            let {
                resource: G,
                instrumentationScope: {
                    name: Z,
                    version: I = "",
                    schemaUrl: Y = ""
                }
            } = B, J = Q.get(G);
            if (!J) J = new Map, Q.set(G, J);
            let W = `TextComponent{Z}@TextComponent{I}:TextComponent{Y}`,
                X = J.get(W);
            if (!X) X = [], J.set(W, X);
            X.push(B)
        }
        return Q
    }

    function RE5(A, Q) {
        let B = OE5(A);
        return Array.from(B, ([G, Z]) => {
            let I = (0, m91.createResource)(G);
            return {
                resource: I,
                scopeLogs: Array.from(Z, ([, Y]) => {
                    return {
                        scope: (0, m91.createInstrumentationScope)(Y[0].instrumentationScope),
                        logRecords: Y.map((J) => TE5(J, Q)),
                        schemaUrl: Y[0].instrumentationScope.schemaUrl
                    }
                }),
                schemaUrl: I.schemaUrl
            }
        })
    }

    function TE5(A, Q) {
        return {
            timeUnixNano: Q.encodeHrTime(A.hrTime),
            observedTimeUnixNano: Q.encodeHrTime(A.hrTimeObserved),
            severityNumber: PE5(A.severityNumber),
            severityText: A.severityText,
            body: (0, m91.toAnyValue)(A.body),
            eventName: A.eventName,
            attributes: rF2(A.attributes),
            droppedAttributesCount: A.droppedAttributesCount,
            flags: A.spanContext?.traceFlags,
            traceId: Q.encodeOptionalSpanContext(A.spanContext?.traceId),
            spanId: Q.encodeOptionalSpanContext(A.spanContext?.spanId)
        }
    }

    function PE5(A) {
        return A
    }

    function rF2(A) {
        return Object.keys(A).map((Q) => (0, m91.toKeyValue)(Q, A[Q]))
    }
    oF2.toLogAttributes = rF2
});
var BV2 = moduleWrapper((AV2) => {
    Object.defineProperty(AV2, "__esModule", {
        value: !0
    });
    AV2.ProtobufLogsSerializer = void 0;
    var eF2 = h91(),
        SE5 = nQ0(),
        _E5 = eF2.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse,
        kE5 = eF2.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
    AV2.ProtobufLogsSerializer = {
        serializeRequest: (A) => {
            let Q = (0, SE5.createExportLogsServiceRequest)(A);
            return kE5.encode(Q).finish()
        },
        deserializeResponse: (A) => {
            return _E5.decode(A)
        }
    }
});
var GV2 = moduleWrapper((aQ0) => {
    Object.defineProperty(aQ0, "__esModule", {
        value: !0
    });
    aQ0.ProtobufLogsSerializer = void 0;
    var yE5 = BV2();
    Object.defineProperty(aQ0, "ProtobufLogsSerializer", {
        enumerable: !0,
        get: function() {
            return yE5.ProtobufLogsSerializer
        }
    })
});
var IV2 = moduleWrapper((ZV2) => {
    Object.defineProperty(ZV2, "__esModule", {
        value: !0
    });
    ZV2.EAggregationTemporality = void 0;
    var vE5;
    (function(A) {
        A[A.AGGREGATION_TEMPORALITY_UNSPECIFIED = 0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED", A[A.AGGREGATION_TEMPORALITY_DELTA = 1] = "AGGREGATION_TEMPORALITY_DELTA", A[A.AGGREGATION_TEMPORALITY_CUMULATIVE = 2] = "AGGREGATION_TEMPORALITY_CUMULATIVE"
    })(vE5 = ZV2.EAggregationTemporality || (ZV2.EAggregationTemporality = {}))
});
var rQ0 = moduleWrapper((KV2) => {
    Object.defineProperty(KV2, "__esModule", {
        value: !0
    });
    KV2.createExportMetricsServiceRequest = KV2.toMetric = KV2.toScopeMetrics = KV2.toResourceMetrics = void 0;
    var YV2 = W9(),
        yYA = Mi(),
        JV2 = IV2(),
        bE5 = g91(),
        nMA = u91();

    function XV2(A, Q) {
        let B = (0, bE5.getOtlpEncoder)(Q),
            G = (0, nMA.createResource)(A.resource);
        return {
            resource: G,
            schemaUrl: G.schemaUrl,
            scopeMetrics: FV2(A.scopeMetrics, B)
        }
    }
    KV2.toResourceMetrics = XV2;
