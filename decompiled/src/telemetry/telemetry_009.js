/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 9/14
 * Lines: 300468 - 301967 (1500 lines)
 * Original file: cli.js
 */

                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                    break
                            }
                            if (Y.startTimeUnixNano != null && Y.hasOwnProperty("startTimeUnixNano")) {
                                if (!_A.isInteger(Y.startTimeUnixNano) && !(Y.startTimeUnixNano && _A.isInteger(Y.startTimeUnixNano.low) && _A.isInteger(Y.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected"
                            }
                            if (Y.endTimeUnixNano != null && Y.hasOwnProperty("endTimeUnixNano")) {
                                if (!_A.isInteger(Y.endTimeUnixNano) && !(Y.endTimeUnixNano && _A.isInteger(Y.endTimeUnixNano.low) && _A.isInteger(Y.endTimeUnixNano.high))) return "endTimeUnixNano: integer|Long expected"
                            }
                            if (Y.attributes != null && Y.hasOwnProperty("attributes")) {
                                if (!Array.isArray(Y.attributes)) return "attributes: array expected";
                                for (var J = 0; J < Y.attributes.length; ++J) {
                                    var W = RA.opentelemetry.proto.common.v1.KeyValue.verify(Y.attributes[J]);
                                    if (W) return "attributes." + W
                                }
                            }
                            if (Y.droppedAttributesCount != null && Y.hasOwnProperty("droppedAttributesCount")) {
                                if (!_A.isInteger(Y.droppedAttributesCount)) return "droppedAttributesCount: integer expected"
                            }
                            if (Y.events != null && Y.hasOwnProperty("events")) {
                                if (!Array.isArray(Y.events)) return "events: array expected";
                                for (var J = 0; J < Y.events.length; ++J) {
                                    var W = RA.opentelemetry.proto.trace.v1.Span.Event.verify(Y.events[J]);
                                    if (W) return "events." + W
                                }
                            }
                            if (Y.droppedEventsCount != null && Y.hasOwnProperty("droppedEventsCount")) {
                                if (!_A.isInteger(Y.droppedEventsCount)) return "droppedEventsCount: integer expected"
                            }
                            if (Y.links != null && Y.hasOwnProperty("links")) {
                                if (!Array.isArray(Y.links)) return "links: array expected";
                                for (var J = 0; J < Y.links.length; ++J) {
                                    var W = RA.opentelemetry.proto.trace.v1.Span.Link.verify(Y.links[J]);
                                    if (W) return "links." + W
                                }
                            }
                            if (Y.droppedLinksCount != null && Y.hasOwnProperty("droppedLinksCount")) {
                                if (!_A.isInteger(Y.droppedLinksCount)) return "droppedLinksCount: integer expected"
                            }
                            if (Y.status != null && Y.hasOwnProperty("status")) {
                                var W = RA.opentelemetry.proto.trace.v1.Status.verify(Y.status);
                                if (W) return "status." + W
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.trace.v1.Span) return Y;
                            var J = new RA.opentelemetry.proto.trace.v1.Span;
                            if (Y.traceId != null) {
                                if (typeof Y.traceId === "string") _A.base64.decode(Y.traceId, J.traceId = _A.newBuffer(_A.base64.length(Y.traceId)), 0);
                                else if (Y.traceId.length >= 0) J.traceId = Y.traceId
                            }
                            if (Y.spanId != null) {
                                if (typeof Y.spanId === "string") _A.base64.decode(Y.spanId, J.spanId = _A.newBuffer(_A.base64.length(Y.spanId)), 0);
                                else if (Y.spanId.length >= 0) J.spanId = Y.spanId
                            }
                            if (Y.traceState != null) J.traceState = String(Y.traceState);
                            if (Y.parentSpanId != null) {
                                if (typeof Y.parentSpanId === "string") _A.base64.decode(Y.parentSpanId, J.parentSpanId = _A.newBuffer(_A.base64.length(Y.parentSpanId)), 0);
                                else if (Y.parentSpanId.length >= 0) J.parentSpanId = Y.parentSpanId
                            }
                            if (Y.flags != null) J.flags = Y.flags >>> 0;
                            if (Y.name != null) J.name = String(Y.name);
                            switch (Y.kind) {
                                default:
                                    if (typeof Y.kind === "number") {
                                        J.kind = Y.kind;
                                        break
                                    }
                                    break;
                                case "SPAN_KIND_UNSPECIFIED":
                                case 0:
                                    J.kind = 0;
                                    break;
                                case "SPAN_KIND_INTERNAL":
                                case 1:
                                    J.kind = 1;
                                    break;
                                case "SPAN_KIND_SERVER":
                                case 2:
                                    J.kind = 2;
                                    break;
                                case "SPAN_KIND_CLIENT":
                                case 3:
                                    J.kind = 3;
                                    break;
                                case "SPAN_KIND_PRODUCER":
                                case 4:
                                    J.kind = 4;
                                    break;
                                case "SPAN_KIND_CONSUMER":
                                case 5:
                                    J.kind = 5;
                                    break
                            }
                            if (Y.startTimeUnixNano != null) {
                                if (_A.Long)(J.startTimeUnixNano = _A.Long.fromValue(Y.startTimeUnixNano)).unsigned = !1;
                                else if (typeof Y.startTimeUnixNano === "string") J.startTimeUnixNano = parseInt(Y.startTimeUnixNano, 10);
                                else if (typeof Y.startTimeUnixNano === "number") J.startTimeUnixNano = Y.startTimeUnixNano;
                                else if (typeof Y.startTimeUnixNano === "object") J.startTimeUnixNano = new _A.LongBits(Y.startTimeUnixNano.low >>> 0, Y.startTimeUnixNano.high >>> 0).toNumber()
                            }
                            if (Y.endTimeUnixNano != null) {
                                if (_A.Long)(J.endTimeUnixNano = _A.Long.fromValue(Y.endTimeUnixNano)).unsigned = !1;
                                else if (typeof Y.endTimeUnixNano === "string") J.endTimeUnixNano = parseInt(Y.endTimeUnixNano, 10);
                                else if (typeof Y.endTimeUnixNano === "number") J.endTimeUnixNano = Y.endTimeUnixNano;
                                else if (typeof Y.endTimeUnixNano === "object") J.endTimeUnixNano = new _A.LongBits(Y.endTimeUnixNano.low >>> 0, Y.endTimeUnixNano.high >>> 0).toNumber()
                            }
                            if (Y.attributes) {
                                if (!Array.isArray(Y.attributes)) throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: array expected");
                                J.attributes = [];
                                for (var W = 0; W < Y.attributes.length; ++W) {
                                    if (typeof Y.attributes[W] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: object expected");
                                    J.attributes[W] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(Y.attributes[W])
                                }
                            }
                            if (Y.droppedAttributesCount != null) J.droppedAttributesCount = Y.droppedAttributesCount >>> 0;
                            if (Y.events) {
                                if (!Array.isArray(Y.events)) throw TypeError(".opentelemetry.proto.trace.v1.Span.events: array expected");
                                J.events = [];
                                for (var W = 0; W < Y.events.length; ++W) {
                                    if (typeof Y.events[W] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.events: object expected");
                                    J.events[W] = RA.opentelemetry.proto.trace.v1.Span.Event.fromObject(Y.events[W])
                                }
                            }
                            if (Y.droppedEventsCount != null) J.droppedEventsCount = Y.droppedEventsCount >>> 0;
                            if (Y.links) {
                                if (!Array.isArray(Y.links)) throw TypeError(".opentelemetry.proto.trace.v1.Span.links: array expected");
                                J.links = [];
                                for (var W = 0; W < Y.links.length; ++W) {
                                    if (typeof Y.links[W] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.links: object expected");
                                    J.links[W] = RA.opentelemetry.proto.trace.v1.Span.Link.fromObject(Y.links[W])
                                }
                            }
                            if (Y.droppedLinksCount != null) J.droppedLinksCount = Y.droppedLinksCount >>> 0;
                            if (Y.status != null) {
                                if (typeof Y.status !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.status: object expected");
                                J.status = RA.opentelemetry.proto.trace.v1.Status.fromObject(Y.status)
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.attributes = [], W.events = [], W.links = [];
                            if (J.defaults) {
                                if (J.bytes === String) W.traceId = "";
                                else if (W.traceId = [], J.bytes !== Array) W.traceId = _A.newBuffer(W.traceId);
                                if (J.bytes === String) W.spanId = "";
                                else if (W.spanId = [], J.bytes !== Array) W.spanId = _A.newBuffer(W.spanId);
                                if (W.traceState = "", J.bytes === String) W.parentSpanId = "";
                                else if (W.parentSpanId = [], J.bytes !== Array) W.parentSpanId = _A.newBuffer(W.parentSpanId);
                                if (W.name = "", W.kind = J.enums === String ? "SPAN_KIND_UNSPECIFIED" : 0, _A.Long) {
                                    var X = new _A.Long(0, 0, !1);
                                    W.startTimeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X
                                } else W.startTimeUnixNano = J.longs === String ? "0" : 0;
                                if (_A.Long) {
                                    var X = new _A.Long(0, 0, !1);
                                    W.endTimeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X
                                } else W.endTimeUnixNano = J.longs === String ? "0" : 0;
                                W.droppedAttributesCount = 0, W.droppedEventsCount = 0, W.droppedLinksCount = 0, W.status = null, W.flags = 0
                            }
                            if (Y.traceId != null && Y.hasOwnProperty("traceId")) W.traceId = J.bytes === String ? _A.base64.encode(Y.traceId, 0, Y.traceId.length) : J.bytes === Array ? Array.prototype.slice.call(Y.traceId) : Y.traceId;
                            if (Y.spanId != null && Y.hasOwnProperty("spanId")) W.spanId = J.bytes === String ? _A.base64.encode(Y.spanId, 0, Y.spanId.length) : J.bytes === Array ? Array.prototype.slice.call(Y.spanId) : Y.spanId;
                            if (Y.traceState != null && Y.hasOwnProperty("traceState")) W.traceState = Y.traceState;
                            if (Y.parentSpanId != null && Y.hasOwnProperty("parentSpanId")) W.parentSpanId = J.bytes === String ? _A.base64.encode(Y.parentSpanId, 0, Y.parentSpanId.length) : J.bytes === Array ? Array.prototype.slice.call(Y.parentSpanId) : Y.parentSpanId;
                            if (Y.name != null && Y.hasOwnProperty("name")) W.name = Y.name;
                            if (Y.kind != null && Y.hasOwnProperty("kind")) W.kind = J.enums === String ? RA.opentelemetry.proto.trace.v1.Span.SpanKind[Y.kind] === void 0 ? Y.kind : RA.opentelemetry.proto.trace.v1.Span.SpanKind[Y.kind] : Y.kind;
                            if (Y.startTimeUnixNano != null && Y.hasOwnProperty("startTimeUnixNano"))
                                if (typeof Y.startTimeUnixNano === "number") W.startTimeUnixNano = J.longs === String ? String(Y.startTimeUnixNano) : Y.startTimeUnixNano;
                                else W.startTimeUnixNano = J.longs === String ? _A.Long.prototype.toString.call(Y.startTimeUnixNano) : J.longs === Number ? new _A.LongBits(Y.startTimeUnixNano.low >>> 0, Y.startTimeUnixNano.high >>> 0).toNumber() : Y.startTimeUnixNano;
                            if (Y.endTimeUnixNano != null && Y.hasOwnProperty("endTimeUnixNano"))
                                if (typeof Y.endTimeUnixNano === "number") W.endTimeUnixNano = J.longs === String ? String(Y.endTimeUnixNano) : Y.endTimeUnixNano;
                                else W.endTimeUnixNano = J.longs === String ? _A.Long.prototype.toString.call(Y.endTimeUnixNano) : J.longs === Number ? new _A.LongBits(Y.endTimeUnixNano.low >>> 0, Y.endTimeUnixNano.high >>> 0).toNumber() : Y.endTimeUnixNano;
                            if (Y.attributes && Y.attributes.length) {
                                W.attributes = [];
                                for (var F = 0; F < Y.attributes.length; ++F) W.attributes[F] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(Y.attributes[F], J)
                            }
                            if (Y.droppedAttributesCount != null && Y.hasOwnProperty("droppedAttributesCount")) W.droppedAttributesCount = Y.droppedAttributesCount;
                            if (Y.events && Y.events.length) {
                                W.events = [];
                                for (var F = 0; F < Y.events.length; ++F) W.events[F] = RA.opentelemetry.proto.trace.v1.Span.Event.toObject(Y.events[F], J)
                            }
                            if (Y.droppedEventsCount != null && Y.hasOwnProperty("droppedEventsCount")) W.droppedEventsCount = Y.droppedEventsCount;
                            if (Y.links && Y.links.length) {
                                W.links = [];
                                for (var F = 0; F < Y.links.length; ++F) W.links[F] = RA.opentelemetry.proto.trace.v1.Span.Link.toObject(Y.links[F], J)
                            }
                            if (Y.droppedLinksCount != null && Y.hasOwnProperty("droppedLinksCount")) W.droppedLinksCount = Y.droppedLinksCount;
                            if (Y.status != null && Y.hasOwnProperty("status")) W.status = RA.opentelemetry.proto.trace.v1.Status.toObject(Y.status, J);
                            if (Y.flags != null && Y.hasOwnProperty("flags")) W.flags = Y.flags;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.trace.v1.Span"
                        }, Z.SpanKind = function() {
                            var I = {},
                                Y = Object.create(I);
                            return Y[I[0] = "SPAN_KIND_UNSPECIFIED"] = 0, Y[I[1] = "SPAN_KIND_INTERNAL"] = 1, Y[I[2] = "SPAN_KIND_SERVER"] = 2, Y[I[3] = "SPAN_KIND_CLIENT"] = 3, Y[I[4] = "SPAN_KIND_PRODUCER"] = 4, Y[I[5] = "SPAN_KIND_CONSUMER"] = 5, Y
                        }(), Z.Event = function() {
                            function I(Y) {
                                if (this.attributes = [], Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.timeUnixNano = null, I.prototype.name = null, I.prototype.attributes = _A.emptyArray, I.prototype.droppedAttributesCount = null, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.timeUnixNano != null && Object.hasOwnProperty.call(J, "timeUnixNano")) W.uint32(9).fixed64(J.timeUnixNano);
                                if (J.name != null && Object.hasOwnProperty.call(J, "name")) W.uint32(18).string(J.name);
                                if (J.attributes != null && J.attributes.length)
                                    for (var X = 0; X < J.attributes.length; ++X) RA.opentelemetry.proto.common.v1.KeyValue.encode(J.attributes[X], W.uint32(26).fork()).ldelim();
                                if (J.droppedAttributesCount != null && Object.hasOwnProperty.call(J, "droppedAttributesCount")) W.uint32(32).uint32(J.droppedAttributesCount);
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.trace.v1.Span.Event;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            V.timeUnixNano = J.fixed64();
                                            break
                                        }
                                        case 2: {
                                            V.name = J.string();
                                            break
                                        }
                                        case 3: {
                                            if (!(V.attributes && V.attributes.length)) V.attributes = [];
                                            V.attributes.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                                            break
                                        }
                                        case 4: {
                                            V.droppedAttributesCount = J.uint32();
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
                                if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) {
                                    if (!_A.isInteger(J.timeUnixNano) && !(J.timeUnixNano && _A.isInteger(J.timeUnixNano.low) && _A.isInteger(J.timeUnixNano.high))) return "timeUnixNano: integer|Long expected"
                                }
                                if (J.name != null && J.hasOwnProperty("name")) {
                                    if (!_A.isString(J.name)) return "name: string expected"
                                }
                                if (J.attributes != null && J.hasOwnProperty("attributes")) {
                                    if (!Array.isArray(J.attributes)) return "attributes: array expected";
                                    for (var W = 0; W < J.attributes.length; ++W) {
                                        var X = RA.opentelemetry.proto.common.v1.KeyValue.verify(J.attributes[W]);
                                        if (X) return "attributes." + X
                                    }
                                }
                                if (J.droppedAttributesCount != null && J.hasOwnProperty("droppedAttributesCount")) {
                                    if (!_A.isInteger(J.droppedAttributesCount)) return "droppedAttributesCount: integer expected"
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.trace.v1.Span.Event) return J;
                                var W = new RA.opentelemetry.proto.trace.v1.Span.Event;
                                if (J.timeUnixNano != null) {
                                    if (_A.Long)(W.timeUnixNano = _A.Long.fromValue(J.timeUnixNano)).unsigned = !1;
                                    else if (typeof J.timeUnixNano === "string") W.timeUnixNano = parseInt(J.timeUnixNano, 10);
                                    else if (typeof J.timeUnixNano === "number") W.timeUnixNano = J.timeUnixNano;
                                    else if (typeof J.timeUnixNano === "object") W.timeUnixNano = new _A.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber()
                                }
                                if (J.name != null) W.name = String(J.name);
                                if (J.attributes) {
                                    if (!Array.isArray(J.attributes)) throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: array expected");
                                    W.attributes = [];
                                    for (var X = 0; X < J.attributes.length; ++X) {
                                        if (typeof J.attributes[X] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: object expected");
                                        W.attributes[X] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.attributes[X])
                                    }
                                }
                                if (J.droppedAttributesCount != null) W.droppedAttributesCount = J.droppedAttributesCount >>> 0;
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.arrays || W.defaults) X.attributes = [];
                                if (W.defaults) {
                                    if (_A.Long) {
                                        var F = new _A.Long(0, 0, !1);
                                        X.timeUnixNano = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                    } else X.timeUnixNano = W.longs === String ? "0" : 0;
                                    X.name = "", X.droppedAttributesCount = 0
                                }
                                if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano"))
                                    if (typeof J.timeUnixNano === "number") X.timeUnixNano = W.longs === String ? String(J.timeUnixNano) : J.timeUnixNano;
                                    else X.timeUnixNano = W.longs === String ? _A.Long.prototype.toString.call(J.timeUnixNano) : W.longs === Number ? new _A.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber() : J.timeUnixNano;
                                if (J.name != null && J.hasOwnProperty("name")) X.name = J.name;
                                if (J.attributes && J.attributes.length) {
                                    X.attributes = [];
                                    for (var V = 0; V < J.attributes.length; ++V) X.attributes[V] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(J.attributes[V], W)
                                }
                                if (J.droppedAttributesCount != null && J.hasOwnProperty("droppedAttributesCount")) X.droppedAttributesCount = J.droppedAttributesCount;
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.trace.v1.Span.Event"
                            }, I
                        }(), Z.Link = function() {
                            function I(Y) {
                                if (this.attributes = [], Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.traceId = null, I.prototype.spanId = null, I.prototype.traceState = null, I.prototype.attributes = _A.emptyArray, I.prototype.droppedAttributesCount = null, I.prototype.flags = null, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.traceId != null && Object.hasOwnProperty.call(J, "traceId")) W.uint32(10).bytes(J.traceId);
                                if (J.spanId != null && Object.hasOwnProperty.call(J, "spanId")) W.uint32(18).bytes(J.spanId);
                                if (J.traceState != null && Object.hasOwnProperty.call(J, "traceState")) W.uint32(26).string(J.traceState);
                                if (J.attributes != null && J.attributes.length)
                                    for (var X = 0; X < J.attributes.length; ++X) RA.opentelemetry.proto.common.v1.KeyValue.encode(J.attributes[X], W.uint32(34).fork()).ldelim();
                                if (J.droppedAttributesCount != null && Object.hasOwnProperty.call(J, "droppedAttributesCount")) W.uint32(40).uint32(J.droppedAttributesCount);
                                if (J.flags != null && Object.hasOwnProperty.call(J, "flags")) W.uint32(53).fixed32(J.flags);
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.trace.v1.Span.Link;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            V.traceId = J.bytes();
                                            break
                                        }
                                        case 2: {
                                            V.spanId = J.bytes();
                                            break
                                        }
                                        case 3: {
                                            V.traceState = J.string();
                                            break
                                        }
                                        case 4: {
                                            if (!(V.attributes && V.attributes.length)) V.attributes = [];
                                            V.attributes.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                                            break
                                        }
                                        case 5: {
                                            V.droppedAttributesCount = J.uint32();
                                            break
                                        }
                                        case 6: {
                                            V.flags = J.fixed32();
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
                                if (J.traceId != null && J.hasOwnProperty("traceId")) {
                                    if (!(J.traceId && typeof J.traceId.length === "number" || _A.isString(J.traceId))) return "traceId: buffer expected"
                                }
                                if (J.spanId != null && J.hasOwnProperty("spanId")) {
                                    if (!(J.spanId && typeof J.spanId.length === "number" || _A.isString(J.spanId))) return "spanId: buffer expected"
                                }
                                if (J.traceState != null && J.hasOwnProperty("traceState")) {
                                    if (!_A.isString(J.traceState)) return "traceState: string expected"
                                }
                                if (J.attributes != null && J.hasOwnProperty("attributes")) {
                                    if (!Array.isArray(J.attributes)) return "attributes: array expected";
                                    for (var W = 0; W < J.attributes.length; ++W) {
                                        var X = RA.opentelemetry.proto.common.v1.KeyValue.verify(J.attributes[W]);
                                        if (X) return "attributes." + X
                                    }
                                }
                                if (J.droppedAttributesCount != null && J.hasOwnProperty("droppedAttributesCount")) {
                                    if (!_A.isInteger(J.droppedAttributesCount)) return "droppedAttributesCount: integer expected"
                                }
                                if (J.flags != null && J.hasOwnProperty("flags")) {
                                    if (!_A.isInteger(J.flags)) return "flags: integer expected"
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.trace.v1.Span.Link) return J;
                                var W = new RA.opentelemetry.proto.trace.v1.Span.Link;
                                if (J.traceId != null) {
                                    if (typeof J.traceId === "string") _A.base64.decode(J.traceId, W.traceId = _A.newBuffer(_A.base64.length(J.traceId)), 0);
                                    else if (J.traceId.length >= 0) W.traceId = J.traceId
                                }
                                if (J.spanId != null) {
                                    if (typeof J.spanId === "string") _A.base64.decode(J.spanId, W.spanId = _A.newBuffer(_A.base64.length(J.spanId)), 0);
                                    else if (J.spanId.length >= 0) W.spanId = J.spanId
                                }
                                if (J.traceState != null) W.traceState = String(J.traceState);
                                if (J.attributes) {
                                    if (!Array.isArray(J.attributes)) throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: array expected");
                                    W.attributes = [];
                                    for (var X = 0; X < J.attributes.length; ++X) {
                                        if (typeof J.attributes[X] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: object expected");
                                        W.attributes[X] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.attributes[X])
                                    }
                                }
                                if (J.droppedAttributesCount != null) W.droppedAttributesCount = J.droppedAttributesCount >>> 0;
                                if (J.flags != null) W.flags = J.flags >>> 0;
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.arrays || W.defaults) X.attributes = [];
                                if (W.defaults) {
                                    if (W.bytes === String) X.traceId = "";
                                    else if (X.traceId = [], W.bytes !== Array) X.traceId = _A.newBuffer(X.traceId);
                                    if (W.bytes === String) X.spanId = "";
                                    else if (X.spanId = [], W.bytes !== Array) X.spanId = _A.newBuffer(X.spanId);
                                    X.traceState = "", X.droppedAttributesCount = 0, X.flags = 0
                                }
                                if (J.traceId != null && J.hasOwnProperty("traceId")) X.traceId = W.bytes === String ? _A.base64.encode(J.traceId, 0, J.traceId.length) : W.bytes === Array ? Array.prototype.slice.call(J.traceId) : J.traceId;
                                if (J.spanId != null && J.hasOwnProperty("spanId")) X.spanId = W.bytes === String ? _A.base64.encode(J.spanId, 0, J.spanId.length) : W.bytes === Array ? Array.prototype.slice.call(J.spanId) : J.spanId;
                                if (J.traceState != null && J.hasOwnProperty("traceState")) X.traceState = J.traceState;
                                if (J.attributes && J.attributes.length) {
                                    X.attributes = [];
                                    for (var F = 0; F < J.attributes.length; ++F) X.attributes[F] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(J.attributes[F], W)
                                }
                                if (J.droppedAttributesCount != null && J.hasOwnProperty("droppedAttributesCount")) X.droppedAttributesCount = J.droppedAttributesCount;
                                if (J.flags != null && J.hasOwnProperty("flags")) X.flags = J.flags;
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.trace.v1.Span.Link"
                            }, I
                        }(), Z
                    }(), G.Status = function() {
                        function Z(I) {
                            if (I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.message = null, Z.prototype.code = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.message != null && Object.hasOwnProperty.call(Y, "message")) J.uint32(18).string(Y.message);
                            if (Y.code != null && Object.hasOwnProperty.call(Y, "code")) J.uint32(24).int32(Y.code);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.trace.v1.Status;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 2: {
                                        F.message = Y.string();
                                        break
                                    }
                                    case 3: {
                                        F.code = Y.int32();
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
                            if (Y.message != null && Y.hasOwnProperty("message")) {
                                if (!_A.isString(Y.message)) return "message: string expected"
                            }
                            if (Y.code != null && Y.hasOwnProperty("code")) switch (Y.code) {
                                default:
                                    return "code: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.trace.v1.Status) return Y;
                            var J = new RA.opentelemetry.proto.trace.v1.Status;
                            if (Y.message != null) J.message = String(Y.message);
                            switch (Y.code) {
                                default:
                                    if (typeof Y.code === "number") {
                                        J.code = Y.code;
                                        break
                                    }
                                    break;
                                case "STATUS_CODE_UNSET":
                                case 0:
                                    J.code = 0;
                                    break;
                                case "STATUS_CODE_OK":
                                case 1:
                                    J.code = 1;
                                    break;
                                case "STATUS_CODE_ERROR":
                                case 2:
                                    J.code = 2;
                                    break
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.defaults) W.message = "", W.code = J.enums === String ? "STATUS_CODE_UNSET" : 0;
                            if (Y.message != null && Y.hasOwnProperty("message")) W.message = Y.message;
                            if (Y.code != null && Y.hasOwnProperty("code")) W.code = J.enums === String ? RA.opentelemetry.proto.trace.v1.Status.StatusCode[Y.code] === void 0 ? Y.code : RA.opentelemetry.proto.trace.v1.Status.StatusCode[Y.code] : Y.code;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.trace.v1.Status"
                        }, Z.StatusCode = function() {
                            var I = {},
                                Y = Object.create(I);
                            return Y[I[0] = "STATUS_CODE_UNSET"] = 0, Y[I[1] = "STATUS_CODE_OK"] = 1, Y[I[2] = "STATUS_CODE_ERROR"] = 2, Y
                        }(), Z
                    }(), G.SpanFlags = function() {
                        var Z = {},
                            I = Object.create(Z);
                        return I[Z[0] = "SPAN_FLAGS_DO_NOT_USE"] = 0, I[Z[255] = "SPAN_FLAGS_TRACE_FLAGS_MASK"] = 255, I[Z[256] = "SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK"] = 256, I[Z[512] = "SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK"] = 512, I
                    }(), G
                }(), B
            }(), Q.collector = function() {
                var B = {};
                return B.trace = function() {
                    var G = {};
                    return G.v1 = function() {
                        var Z = {};
                        return Z.TraceService = function() {
                            function I(Y, J, W) {
                                S9.rpc.Service.call(this, Y, J, W)
                            }
                            return (I.prototype = Object.create(S9.rpc.Service.prototype)).constructor = I, I.create = function(J, W, X) {
                                return new this(J, W, X)
                            }, Object.defineProperty(I.prototype.export = function Y(J, W) {
                                return this.rpcCall(Y, RA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest, RA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse, J, W)
                            }, "name", {
                                value: "Export"
                            }), I
                        }(), Z.ExportTraceServiceRequest = function() {
                            function I(Y) {
                                if (this.resourceSpans = [], Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.resourceSpans = _A.emptyArray, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.resourceSpans != null && J.resourceSpans.length)
                                    for (var X = 0; X < J.resourceSpans.length; ++X) RA.opentelemetry.proto.trace.v1.ResourceSpans.encode(J.resourceSpans[X], W.uint32(10).fork()).ldelim();
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            if (!(V.resourceSpans && V.resourceSpans.length)) V.resourceSpans = [];
                                            V.resourceSpans.push(RA.opentelemetry.proto.trace.v1.ResourceSpans.decode(J, J.uint32()));
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
                                if (J.resourceSpans != null && J.hasOwnProperty("resourceSpans")) {
                                    if (!Array.isArray(J.resourceSpans)) return "resourceSpans: array expected";
                                    for (var W = 0; W < J.resourceSpans.length; ++W) {
                                        var X = RA.opentelemetry.proto.trace.v1.ResourceSpans.verify(J.resourceSpans[W]);
                                        if (X) return "resourceSpans." + X
                                    }
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest) return J;
                                var W = new RA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
                                if (J.resourceSpans) {
                                    if (!Array.isArray(J.resourceSpans)) throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: array expected");
                                    W.resourceSpans = [];
                                    for (var X = 0; X < J.resourceSpans.length; ++X) {
                                        if (typeof J.resourceSpans[X] !== "object") throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: object expected");
                                        W.resourceSpans[X] = RA.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(J.resourceSpans[X])
                                    }
                                }
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.arrays || W.defaults) X.resourceSpans = [];
                                if (J.resourceSpans && J.resourceSpans.length) {
                                    X.resourceSpans = [];
                                    for (var F = 0; F < J.resourceSpans.length; ++F) X.resourceSpans[F] = RA.opentelemetry.proto.trace.v1.ResourceSpans.toObject(J.resourceSpans[F], W)
                                }
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest"
                            }, I
                        }(), Z.ExportTraceServiceResponse = function() {
                            function I(Y) {
                                if (Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.partialSuccess = null, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.partialSuccess != null && Object.hasOwnProperty.call(J, "partialSuccess")) RA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.encode(J.partialSuccess, W.uint32(10).fork()).ldelim();
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            V.partialSuccess = RA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.decode(J, J.uint32());
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
                                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) {
                                    var W = RA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.verify(J.partialSuccess);
                                    if (W) return "partialSuccess." + W
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse) return J;
                                var W = new RA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
                                if (J.partialSuccess != null) {
                                    if (typeof J.partialSuccess !== "object") throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.partialSuccess: object expected");
                                    W.partialSuccess = RA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.fromObject(J.partialSuccess)
                                }
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.defaults) X.partialSuccess = null;
                                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) X.partialSuccess = RA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.toObject(J.partialSuccess, W);
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse"
                            }, I
                        }(), Z.ExportTracePartialSuccess = function() {
                            function I(Y) {
                                if (Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.rejectedSpans = null, I.prototype.errorMessage = null, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.rejectedSpans != null && Object.hasOwnProperty.call(J, "rejectedSpans")) W.uint32(8).int64(J.rejectedSpans);
                                if (J.errorMessage != null && Object.hasOwnProperty.call(J, "errorMessage")) W.uint32(18).string(J.errorMessage);
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            V.rejectedSpans = J.int64();
                                            break
                                        }
                                        case 2: {
                                            V.errorMessage = J.string();
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
                                if (J.rejectedSpans != null && J.hasOwnProperty("rejectedSpans")) {
                                    if (!_A.isInteger(J.rejectedSpans) && !(J.rejectedSpans && _A.isInteger(J.rejectedSpans.low) && _A.isInteger(J.rejectedSpans.high))) return "rejectedSpans: integer|Long expected"
                                }
                                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) {
                                    if (!_A.isString(J.errorMessage)) return "errorMessage: string expected"
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess) return J;
                                var W = new RA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess;
                                if (J.rejectedSpans != null) {
                                    if (_A.Long)(W.rejectedSpans = _A.Long.fromValue(J.rejectedSpans)).unsigned = !1;
                                    else if (typeof J.rejectedSpans === "string") W.rejectedSpans = parseInt(J.rejectedSpans, 10);
                                    else if (typeof J.rejectedSpans === "number") W.rejectedSpans = J.rejectedSpans;
                                    else if (typeof J.rejectedSpans === "object") W.rejectedSpans = new _A.LongBits(J.rejectedSpans.low >>> 0, J.rejectedSpans.high >>> 0).toNumber()
                                }
                                if (J.errorMessage != null) W.errorMessage = String(J.errorMessage);
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.defaults) {
                                    if (_A.Long) {
                                        var F = new _A.Long(0, 0, !1);
                                        X.rejectedSpans = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                    } else X.rejectedSpans = W.longs === String ? "0" : 0;
                                    X.errorMessage = ""
                                }
                                if (J.rejectedSpans != null && J.hasOwnProperty("rejectedSpans"))
                                    if (typeof J.rejectedSpans === "number") X.rejectedSpans = W.longs === String ? String(J.rejectedSpans) : J.rejectedSpans;
                                    else X.rejectedSpans = W.longs === String ? _A.Long.prototype.toString.call(J.rejectedSpans) : W.longs === Number ? new _A.LongBits(J.rejectedSpans.low >>> 0, J.rejectedSpans.high >>> 0).toNumber() : J.rejectedSpans;
                                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) X.errorMessage = J.errorMessage;
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess"
                            }, I
                        }(), Z
                    }(), G
                }(), B.metrics = function() {
                    var G = {};
                    return G.v1 = function() {
                        var Z = {};
                        return Z.MetricsService = function() {
                            function I(Y, J, W) {
                                S9.rpc.Service.call(this, Y, J, W)
                            }
                            return (I.prototype = Object.create(S9.rpc.Service.prototype)).constructor = I, I.create = function(J, W, X) {
                                return new this(J, W, X)
                            }, Object.defineProperty(I.prototype.export = function Y(J, W) {
                                return this.rpcCall(Y, RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest, RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse, J, W)
                            }, "name", {
                                value: "Export"
                            }), I
                        }(), Z.ExportMetricsServiceRequest = function() {
                            function I(Y) {
                                if (this.resourceMetrics = [], Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.resourceMetrics = _A.emptyArray, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.resourceMetrics != null && J.resourceMetrics.length)
                                    for (var X = 0; X < J.resourceMetrics.length; ++X) RA.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(J.resourceMetrics[X], W.uint32(10).fork()).ldelim();
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            if (!(V.resourceMetrics && V.resourceMetrics.length)) V.resourceMetrics = [];
                                            V.resourceMetrics.push(RA.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(J, J.uint32()));
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
                                if (J.resourceMetrics != null && J.hasOwnProperty("resourceMetrics")) {
                                    if (!Array.isArray(J.resourceMetrics)) return "resourceMetrics: array expected";
                                    for (var W = 0; W < J.resourceMetrics.length; ++W) {
                                        var X = RA.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(J.resourceMetrics[W]);
                                        if (X) return "resourceMetrics." + X
                                    }
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest) return J;
                                var W = new RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
                                if (J.resourceMetrics) {
                                    if (!Array.isArray(J.resourceMetrics)) throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: array expected");
                                    W.resourceMetrics = [];
                                    for (var X = 0; X < J.resourceMetrics.length; ++X) {
                                        if (typeof J.resourceMetrics[X] !== "object") throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: object expected");
                                        W.resourceMetrics[X] = RA.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(J.resourceMetrics[X])
                                    }
                                }
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.arrays || W.defaults) X.resourceMetrics = [];
                                if (J.resourceMetrics && J.resourceMetrics.length) {
                                    X.resourceMetrics = [];
                                    for (var F = 0; F < J.resourceMetrics.length; ++F) X.resourceMetrics[F] = RA.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(J.resourceMetrics[F], W)
                                }
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest"
                            }, I
                        }(), Z.ExportMetricsServiceResponse = function() {
                            function I(Y) {
                                if (Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.partialSuccess = null, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.partialSuccess != null && Object.hasOwnProperty.call(J, "partialSuccess")) RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.encode(J.partialSuccess, W.uint32(10).fork()).ldelim();
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            V.partialSuccess = RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.decode(J, J.uint32());
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
                                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) {
                                    var W = RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.verify(J.partialSuccess);
                                    if (W) return "partialSuccess." + W
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse) return J;
                                var W = new RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
                                if (J.partialSuccess != null) {
                                    if (typeof J.partialSuccess !== "object") throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.partialSuccess: object expected");
                                    W.partialSuccess = RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.fromObject(J.partialSuccess)
                                }
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.defaults) X.partialSuccess = null;
                                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) X.partialSuccess = RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.toObject(J.partialSuccess, W);
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse"
                            }, I
                        }(), Z.ExportMetricsPartialSuccess = function() {
                            function I(Y) {
                                if (Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.rejectedDataPoints = null, I.prototype.errorMessage = null, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.rejectedDataPoints != null && Object.hasOwnProperty.call(J, "rejectedDataPoints")) W.uint32(8).int64(J.rejectedDataPoints);
                                if (J.errorMessage != null && Object.hasOwnProperty.call(J, "errorMessage")) W.uint32(18).string(J.errorMessage);
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            V.rejectedDataPoints = J.int64();
                                            break
                                        }
                                        case 2: {
                                            V.errorMessage = J.string();
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
                                if (J.rejectedDataPoints != null && J.hasOwnProperty("rejectedDataPoints")) {
                                    if (!_A.isInteger(J.rejectedDataPoints) && !(J.rejectedDataPoints && _A.isInteger(J.rejectedDataPoints.low) && _A.isInteger(J.rejectedDataPoints.high))) return "rejectedDataPoints: integer|Long expected"
                                }
                                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) {
                                    if (!_A.isString(J.errorMessage)) return "errorMessage: string expected"
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess) return J;
                                var W = new RA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;
                                if (J.rejectedDataPoints != null) {
                                    if (_A.Long)(W.rejectedDataPoints = _A.Long.fromValue(J.rejectedDataPoints)).unsigned = !1;
                                    else if (typeof J.rejectedDataPoints === "string") W.rejectedDataPoints = parseInt(J.rejectedDataPoints, 10);
                                    else if (typeof J.rejectedDataPoints === "number") W.rejectedDataPoints = J.rejectedDataPoints;
                                    else if (typeof J.rejectedDataPoints === "object") W.rejectedDataPoints = new _A.LongBits(J.rejectedDataPoints.low >>> 0, J.rejectedDataPoints.high >>> 0).toNumber()
                                }
                                if (J.errorMessage != null) W.errorMessage = String(J.errorMessage);
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.defaults) {
                                    if (_A.Long) {
                                        var F = new _A.Long(0, 0, !1);
                                        X.rejectedDataPoints = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                    } else X.rejectedDataPoints = W.longs === String ? "0" : 0;
                                    X.errorMessage = ""
                                }
                                if (J.rejectedDataPoints != null && J.hasOwnProperty("rejectedDataPoints"))
                                    if (typeof J.rejectedDataPoints === "number") X.rejectedDataPoints = W.longs === String ? String(J.rejectedDataPoints) : J.rejectedDataPoints;
                                    else X.rejectedDataPoints = W.longs === String ? _A.Long.prototype.toString.call(J.rejectedDataPoints) : W.longs === Number ? new _A.LongBits(J.rejectedDataPoints.low >>> 0, J.rejectedDataPoints.high >>> 0).toNumber() : J.rejectedDataPoints;
                                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) X.errorMessage = J.errorMessage;
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess"
                            }, I
                        }(), Z
                    }(), G
                }(), B.logs = function() {
                    var G = {};
                    return G.v1 = function() {
                        var Z = {};
                        return Z.LogsService = function() {
                            function I(Y, J, W) {
                                S9.rpc.Service.call(this, Y, J, W)
                            }
                            return (I.prototype = Object.create(S9.rpc.Service.prototype)).constructor = I, I.create = function(J, W, X) {
                                return new this(J, W, X)
                            }, Object.defineProperty(I.prototype.export = function Y(J, W) {
                                return this.rpcCall(Y, RA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest, RA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse, J, W)
                            }, "name", {
                                value: "Export"
                            }), I
                        }(), Z.ExportLogsServiceRequest = function() {
                            function I(Y) {
                                if (this.resourceLogs = [], Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.resourceLogs = _A.emptyArray, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.resourceLogs != null && J.resourceLogs.length)
                                    for (var X = 0; X < J.resourceLogs.length; ++X) RA.opentelemetry.proto.logs.v1.ResourceLogs.encode(J.resourceLogs[X], W.uint32(10).fork()).ldelim();
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            if (!(V.resourceLogs && V.resourceLogs.length)) V.resourceLogs = [];
                                            V.resourceLogs.push(RA.opentelemetry.proto.logs.v1.ResourceLogs.decode(J, J.uint32()));
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
                                if (J.resourceLogs != null && J.hasOwnProperty("resourceLogs")) {
                                    if (!Array.isArray(J.resourceLogs)) return "resourceLogs: array expected";
                                    for (var W = 0; W < J.resourceLogs.length; ++W) {
                                        var X = RA.opentelemetry.proto.logs.v1.ResourceLogs.verify(J.resourceLogs[W]);
                                        if (X) return "resourceLogs." + X
                                    }
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest) return J;
                                var W = new RA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
                                if (J.resourceLogs) {
                                    if (!Array.isArray(J.resourceLogs)) throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: array expected");
                                    W.resourceLogs = [];
                                    for (var X = 0; X < J.resourceLogs.length; ++X) {
                                        if (typeof J.resourceLogs[X] !== "object") throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: object expected");
                                        W.resourceLogs[X] = RA.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(J.resourceLogs[X])
                                    }
                                }
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.arrays || W.defaults) X.resourceLogs = [];
                                if (J.resourceLogs && J.resourceLogs.length) {
                                    X.resourceLogs = [];
                                    for (var F = 0; F < J.resourceLogs.length; ++F) X.resourceLogs[F] = RA.opentelemetry.proto.logs.v1.ResourceLogs.toObject(J.resourceLogs[F], W)
                                }
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest"
                            }, I
                        }(), Z.ExportLogsServiceResponse = function() {
                            function I(Y) {
                                if (Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.partialSuccess = null, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.partialSuccess != null && Object.hasOwnProperty.call(J, "partialSuccess")) RA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.encode(J.partialSuccess, W.uint32(10).fork()).ldelim();
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            V.partialSuccess = RA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.decode(J, J.uint32());
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
                                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) {
                                    var W = RA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.verify(J.partialSuccess);
                                    if (W) return "partialSuccess." + W
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse) return J;
                                var W = new RA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;
                                if (J.partialSuccess != null) {
                                    if (typeof J.partialSuccess !== "object") throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.partialSuccess: object expected");
                                    W.partialSuccess = RA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.fromObject(J.partialSuccess)
                                }
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.defaults) X.partialSuccess = null;
                                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) X.partialSuccess = RA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.toObject(J.partialSuccess, W);
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse"
                            }, I
                        }(), Z.ExportLogsPartialSuccess = function() {
                            function I(Y) {
                                if (Y) {
                                    for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                        if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                                }
                            }
                            return I.prototype.rejectedLogRecords = null, I.prototype.errorMessage = null, I.create = function(J) {
                                return new I(J)
                            }, I.encode = function(J, W) {
                                if (!W) W = E8.create();
                                if (J.rejectedLogRecords != null && Object.hasOwnProperty.call(J, "rejectedLogRecords")) W.uint32(8).int64(J.rejectedLogRecords);
                                if (J.errorMessage != null && Object.hasOwnProperty.call(J, "errorMessage")) W.uint32(18).string(J.errorMessage);
                                return W
                            }, I.encodeDelimited = function(J, W) {
                                return this.encode(J, W).ldelim()
                            }, I.decode = function(J, W, X) {
                                if (!(J instanceof B0)) J = B0.create(J);
                                var F = W === void 0 ? J.len : J.pos + W,
                                    V = new RA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess;
                                while (J.pos < F) {
                                    var K = J.uint32();
                                    if (K === X) break;
                                    switch (K >>> 3) {
                                        case 1: {
                                            V.rejectedLogRecords = J.int64();
                                            break
                                        }
                                        case 2: {
                                            V.errorMessage = J.string();
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
                                if (J.rejectedLogRecords != null && J.hasOwnProperty("rejectedLogRecords")) {
                                    if (!_A.isInteger(J.rejectedLogRecords) && !(J.rejectedLogRecords && _A.isInteger(J.rejectedLogRecords.low) && _A.isInteger(J.rejectedLogRecords.high))) return "rejectedLogRecords: integer|Long expected"
                                }
                                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) {
                                    if (!_A.isString(J.errorMessage)) return "errorMessage: string expected"
                                }
                                return null
                            }, I.fromObject = function(J) {
                                if (J instanceof RA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess) return J;
                                var W = new RA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess;
                                if (J.rejectedLogRecords != null) {
                                    if (_A.Long)(W.rejectedLogRecords = _A.Long.fromValue(J.rejectedLogRecords)).unsigned = !1;
                                    else if (typeof J.rejectedLogRecords === "string") W.rejectedLogRecords = parseInt(J.rejectedLogRecords, 10);
                                    else if (typeof J.rejectedLogRecords === "number") W.rejectedLogRecords = J.rejectedLogRecords;
                                    else if (typeof J.rejectedLogRecords === "object") W.rejectedLogRecords = new _A.LongBits(J.rejectedLogRecords.low >>> 0, J.rejectedLogRecords.high >>> 0).toNumber()
                                }
                                if (J.errorMessage != null) W.errorMessage = String(J.errorMessage);
                                return W
                            }, I.toObject = function(J, W) {
                                if (!W) W = {};
                                var X = {};
                                if (W.defaults) {
                                    if (_A.Long) {
                                        var F = new _A.Long(0, 0, !1);
                                        X.rejectedLogRecords = W.longs === String ? F.toString() : W.longs === Number ? F.toNumber() : F
                                    } else X.rejectedLogRecords = W.longs === String ? "0" : 0;
                                    X.errorMessage = ""
                                }
                                if (J.rejectedLogRecords != null && J.hasOwnProperty("rejectedLogRecords"))
                                    if (typeof J.rejectedLogRecords === "number") X.rejectedLogRecords = W.longs === String ? String(J.rejectedLogRecords) : J.rejectedLogRecords;
                                    else X.rejectedLogRecords = W.longs === String ? _A.Long.prototype.toString.call(J.rejectedLogRecords) : W.longs === Number ? new _A.LongBits(J.rejectedLogRecords.low >>> 0, J.rejectedLogRecords.high >>> 0).toNumber() : J.rejectedLogRecords;
                                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) X.errorMessage = J.errorMessage;
                                return X
                            }, I.prototype.toJSON = function() {
                                return this.constructor.toObject(this, S9.util.toJSONOptions)
                            }, I.getTypeUrl = function(J) {
                                if (J === void 0) J = "type.googleapis.com";
                                return J + "/opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess"
                            }, I
                        }(), Z
                    }(), G
                }(), B
            }(), Q.metrics = function() {
                var B = {};
                return B.v1 = function() {
                    var G = {};
                    return G.MetricsData = function() {
                        function Z(I) {
                            if (this.resourceMetrics = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.resourceMetrics = _A.emptyArray, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.resourceMetrics != null && Y.resourceMetrics.length)
                                for (var W = 0; W < Y.resourceMetrics.length; ++W) RA.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(Y.resourceMetrics[W], J.uint32(10).fork()).ldelim();
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.metrics.v1.MetricsData;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        if (!(F.resourceMetrics && F.resourceMetrics.length)) F.resourceMetrics = [];
                                        F.resourceMetrics.push(RA.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(Y, Y.uint32()));
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
                            if (Y.resourceMetrics != null && Y.hasOwnProperty("resourceMetrics")) {
                                if (!Array.isArray(Y.resourceMetrics)) return "resourceMetrics: array expected";
                                for (var J = 0; J < Y.resourceMetrics.length; ++J) {
                                    var W = RA.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(Y.resourceMetrics[J]);
                                    if (W) return "resourceMetrics." + W
                                }
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.metrics.v1.MetricsData) return Y;
                            var J = new RA.opentelemetry.proto.metrics.v1.MetricsData;
                            if (Y.resourceMetrics) {
                                if (!Array.isArray(Y.resourceMetrics)) throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: array expected");
                                J.resourceMetrics = [];
                                for (var W = 0; W < Y.resourceMetrics.length; ++W) {
                                    if (typeof Y.resourceMetrics[W] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: object expected");
                                    J.resourceMetrics[W] = RA.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(Y.resourceMetrics[W])
                                }
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.resourceMetrics = [];
                            if (Y.resourceMetrics && Y.resourceMetrics.length) {
                                W.resourceMetrics = [];
                                for (var X = 0; X < Y.resourceMetrics.length; ++X) W.resourceMetrics[X] = RA.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(Y.resourceMetrics[X], J)
                            }
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.metrics.v1.MetricsData"
                        }, Z
                    }(), G.ResourceMetrics = function() {
                        function Z(I) {
                            if (this.scopeMetrics = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.resource = null, Z.prototype.scopeMetrics = _A.emptyArray, Z.prototype.schemaUrl = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.resource != null && Object.hasOwnProperty.call(Y, "resource")) RA.opentelemetry.proto.resource.v1.Resource.encode(Y.resource, J.uint32(10).fork()).ldelim();
                            if (Y.scopeMetrics != null && Y.scopeMetrics.length)
                                for (var W = 0; W < Y.scopeMetrics.length; ++W) RA.opentelemetry.proto.metrics.v1.ScopeMetrics.encode(Y.scopeMetrics[W], J.uint32(18).fork()).ldelim();
                            if (Y.schemaUrl != null && Object.hasOwnProperty.call(Y, "schemaUrl")) J.uint32(26).string(Y.schemaUrl);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.metrics.v1.ResourceMetrics;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        F.resource = RA.opentelemetry.proto.resource.v1.Resource.decode(Y, Y.uint32());
                                        break
                                    }
                                    case 2: {
                                        if (!(F.scopeMetrics && F.scopeMetrics.length)) F.scopeMetrics = [];
                                        F.scopeMetrics.push(RA.opentelemetry.proto.metrics.v1.ScopeMetrics.decode(Y, Y.uint32()));
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
                            if (Y.scopeMetrics != null && Y.hasOwnProperty("scopeMetrics")) {
                                if (!Array.isArray(Y.scopeMetrics)) return "scopeMetrics: array expected";
                                for (var W = 0; W < Y.scopeMetrics.length; ++W) {
                                    var J = RA.opentelemetry.proto.metrics.v1.ScopeMetrics.verify(Y.scopeMetrics[W]);
                                    if (J) return "scopeMetrics." + J
                                }
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) {
                                if (!_A.isString(Y.schemaUrl)) return "schemaUrl: string expected"
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.metrics.v1.ResourceMetrics) return Y;
                            var J = new RA.opentelemetry.proto.metrics.v1.ResourceMetrics;
                            if (Y.resource != null) {
                                if (typeof Y.resource !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.resource: object expected");
                                J.resource = RA.opentelemetry.proto.resource.v1.Resource.fromObject(Y.resource)
                            }
                            if (Y.scopeMetrics) {
                                if (!Array.isArray(Y.scopeMetrics)) throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: array expected");
                                J.scopeMetrics = [];
                                for (var W = 0; W < Y.scopeMetrics.length; ++W) {
                                    if (typeof Y.scopeMetrics[W] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: object expected");
                                    J.scopeMetrics[W] = RA.opentelemetry.proto.metrics.v1.ScopeMetrics.fromObject(Y.scopeMetrics[W])
                                }
                            }
                            if (Y.schemaUrl != null) J.schemaUrl = String(Y.schemaUrl);
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};
                            var W = {};
                            if (J.arrays || J.defaults) W.scopeMetrics = [];
                            if (J.defaults) W.resource = null, W.schemaUrl = "";
                            if (Y.resource != null && Y.hasOwnProperty("resource")) W.resource = RA.opentelemetry.proto.resource.v1.Resource.toObject(Y.resource, J);
                            if (Y.scopeMetrics && Y.scopeMetrics.length) {
                                W.scopeMetrics = [];
                                for (var X = 0; X < Y.scopeMetrics.length; ++X) W.scopeMetrics[X] = RA.opentelemetry.proto.metrics.v1.ScopeMetrics.toObject(Y.scopeMetrics[X], J)
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) W.schemaUrl = Y.schemaUrl;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.metrics.v1.ResourceMetrics"
                        }, Z
                    }(), G.ScopeMetrics = function() {
                        function Z(I) {
                            if (this.metrics = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.scope = null, Z.prototype.metrics = _A.emptyArray, Z.prototype.schemaUrl = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.scope != null && Object.hasOwnProperty.call(Y, "scope")) RA.opentelemetry.proto.common.v1.InstrumentationScope.encode(Y.scope, J.uint32(10).fork()).ldelim();
                            if (Y.metrics != null && Y.metrics.length)
                                for (var W = 0; W < Y.metrics.length; ++W) RA.opentelemetry.proto.metrics.v1.Metric.encode(Y.metrics[W], J.uint32(18).fork()).ldelim();
                            if (Y.schemaUrl != null && Object.hasOwnProperty.call(Y, "schemaUrl")) J.uint32(26).string(Y.schemaUrl);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.metrics.v1.ScopeMetrics;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        F.scope = RA.opentelemetry.proto.common.v1.InstrumentationScope.decode(Y, Y.uint32());
                                        break
                                    }
                                    case 2: {
                                        if (!(F.metrics && F.metrics.length)) F.metrics = [];
                                        F.metrics.push(RA.opentelemetry.proto.metrics.v1.Metric.decode(Y, Y.uint32()));
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