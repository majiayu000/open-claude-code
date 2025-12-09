/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.052Z
 */

/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 8/14
 * Lines: 298971 - 300467 (1497 lines)
 * Original file: cli.js
 */

        return this.uint32(B)._push(ZE5, B, Q)
    };
    y3.prototype.string = function(Q) {
        var B = HF2.length(Q);
        return B ? this.uint32(B)._push(HF2.write, B, Q) : this._push(yQ0, 1, 0)
    };
    y3.prototype.fork = function() {
        return this.states = new BE5(this), this.head = this.tail = new lMA(kQ0, 0, 0), this.len = 0, this
    };
    y3.prototype.reset = function() {
        if (this.states) this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next;
        else this.head = this.tail = new lMA(kQ0, 0, 0), this.len = 0;
        return this
    };
    y3.prototype.ldelim = function() {
        var Q = this.head,
            B = this.tail,
            G = this.len;
        if (this.reset().uint32(G), G) this.tail.next = Q.next, this.tail = B, this.len += G;
        return this
    };
    y3.prototype.finish = function() {
        var Q = this.head.next,
            B = this.constructor.alloc(this.len),
            G = 0;
        while (Q) Q.fn(Q.val, B, G), G += Q.len, Q = Q.next;
        return B
    };
    y3._configure = function(A) {
        SQ0 = A, y3.create = CF2(), SQ0._configure()
    }
});
var $F2 = U((khG, UF2) => {
    UF2.exports = ck;
    var zF2 = v91();
    (ck.prototype = Object.create(zF2.prototype)).constructor = ck;
    var Ti = dk();

function ck() {
        zF2.call(this)
    }
    ck._configure = function() {
        ck.alloc = Ti._Buffer_allocUnsafe, ck.writeBytesBuffer = Ti.Buffer && Ti.Buffer.prototype instanceof Uint8Array && Ti.Buffer.prototype.set.name === "set" ? function(Q, B, G) {
            B.set(Q, G)
        } : function(Q, B, G) {
            if (Q.copy) Q.copy(B, G, 0, Q.length);
            else
                for (var Z = 0; Z < Q.length;) B[G++] = Q[Z++]
        }
    };
    ck.prototype.bytes = function(Q) {
        if (Ti.isString(Q)) Q = Ti._Buffer_from(Q, "base64");
        var B = Q.length >>> 0;
        if (this.uint32(B), B) this._push(ck.writeBytesBuffer, B, Q);
        return this
    };

function IE5(A, Q, B) {
        if (A.length < 40) Ti.utf8.write(A, Q, B);
        else if (Q.utf8Write) Q.utf8Write(A, B);
        else Q.write(A, B)
    }
    ck.prototype.string = function(Q) {
        var B = Ti.Buffer.byteLength(Q);
        if (this.uint32(B), B) this._push(IE5, B, Q);
        return this
    };
    ck._configure()
});
var f91 = U((yhG, MF2) => {
    MF2.exports = _W;
    var IP = dk(),
        fQ0, NF2 = IP.LongBits,
        YE5 = IP.utf8;

function YP(A, Q) {
        return RangeError("index out of range: " + A.pos + " + " + (Q || 1) + " > " + A.len)
    }

function _W(A) {
        this.buf = A, this.pos = 0, this.len = A.length
    }
    var wF2 = typeof Uint8Array < "u" ? function(Q) {
            if (Q instanceof Uint8Array || Array.isArray(Q)) return new _W(Q);
            throw Error("illegal buffer")
        } : function(Q) {
            if (Array.isArray(Q)) return new _W(Q);
            throw Error("illegal buffer")
        },
        LF2 = function() {
            return IP.Buffer ? function(B) {
                return (_W.create = function(Z) {
                    return IP.Buffer.isBuffer(Z) ? new fQ0(Z) : wF2(Z)
                })(B)
            } : wF2
        };
    _W.create = LF2();
    _W.prototype._slice = IP.Array.prototype.subarray || IP.Array.prototype.slice;
    _W.prototype.uint32 = function() {
        var Q = 4294967295;
        return function() {
            if (Q = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128) return Q;
            if (Q = (Q | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) return Q;
            if (Q = (Q | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) return Q;
            if (Q = (Q | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) return Q;
            if (Q = (Q | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128) return Q;
            if ((this.pos += 5) > this.len) throw this.pos = this.len, YP(this, 10);
            return Q
        }
    }();
    _W.prototype.int32 = function() {
        return this.uint32() | 0
    };
    _W.prototype.sint32 = function() {
        var Q = this.uint32();
        return Q >>> 1 ^ -(Q & 1) | 0
    };

function bQ0() {
        var A = new NF2(0, 0),
            Q = 0;
        if (this.len - this.pos > 4) {
            for (; Q < 4; ++Q)
                if (A.lo = (A.lo | (this.buf[this.pos] & 127) << Q * 7) >>> 0, this.buf[this.pos++] < 128) return A;
            if (A.lo = (A.lo | (this.buf[this.pos] & 127) << 28) >>> 0, A.hi = (A.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128) return A;
            Q = 0
        } else {
            for (; Q < 3; ++Q) {
                if (this.pos >= this.len) throw YP(this);
                if (A.lo = (A.lo | (this.buf[this.pos] & 127) << Q * 7) >>> 0, this.buf[this.pos++] < 128) return A
            }
            return A.lo = (A.lo | (this.buf[this.pos++] & 127) << Q * 7) >>> 0, A
        }
        if (this.len - this.pos > 4) {
            for (; Q < 5; ++Q)
                if (A.hi = (A.hi | (this.buf[this.pos] & 127) << Q * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return A
        } else
            for (; Q < 5; ++Q) {
                if (this.pos >= this.len) throw YP(this);
                if (A.hi = (A.hi | (this.buf[this.pos] & 127) << Q * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return A
            }
        throw Error("invalid varint encoding")
    }
    _W.prototype.bool = function() {
        return this.uint32() !== 0
    };

function b91(A, Q) {
        return (A[Q - 4] | A[Q - 3] << 8 | A[Q - 2] << 16 | A[Q - 1] << 24) >>> 0
    }
    _W.prototype.fixed32 = function() {
        if (this.pos + 4 > this.len) throw YP(this, 4);
        return b91(this.buf, this.pos += 4)
    };
    _W.prototype.sfixed32 = function() {
        if (this.pos + 4 > this.len) throw YP(this, 4);
        return b91(this.buf, this.pos += 4) | 0
    };

function qF2() {
        if (this.pos + 8 > this.len) throw YP(this, 8);
        return new NF2(b91(this.buf, this.pos += 4), b91(this.buf, this.pos += 4))
    }
    _W.prototype.float = function() {
        if (this.pos + 4 > this.len) throw YP(this, 4);
        var Q = IP.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4, Q
    };
    _W.prototype.double = function() {
        if (this.pos + 8 > this.len) throw YP(this, 4);
        var Q = IP.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8, Q
    };
    _W.prototype.bytes = function() {
        var Q = this.uint32(),
            B = this.pos,
            G = this.pos + Q;
        if (G > this.len) throw YP(this, Q);
        if (this.pos += Q, Array.isArray(this.buf)) return this.buf.slice(B, G);
        if (B === G) {
            var Z = IP.Buffer;
            return Z ? Z.alloc(0) : new this.buf.constructor(0)
        }
        return this._slice.call(this.buf, B, G)
    };
    _W.prototype.string = function() {
        var Q = this.bytes();
        return YE5.read(Q, 0, Q.length)
    };
    _W.prototype.skip = function(Q) {
        if (typeof Q === "number") {
            if (this.pos + Q > this.len) throw YP(this, Q);
            this.pos += Q
        } else
            do
                if (this.pos >= this.len) throw YP(this); while (this.buf[this.pos++] & 128);
        return this
    };
    _W.prototype.skipType = function(A) {
        switch (A) {
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                while ((A = this.uint32() & 7) !== 4) this.skipType(A);
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + A + " at offset " + this.pos)
        }
        return this
    };
    _W._configure = function(A) {
        fQ0 = A, _W.create = LF2(), fQ0._configure();
        var Q = IP.Long ? "toLong" : "toNumber";
        IP.merge(_W.prototype, {
            int64: function() {
                return bQ0.call(this)[Q](!1)
            },
            uint64: function() {
                return bQ0.call(this)[Q](!0)
            },
            sint64: function() {
                return bQ0.call(this).zzDecode()[Q](!1)
            },
            fixed64: function() {
                return qF2.call(this)[Q](!0)
            },
            sfixed64: function() {
                return qF2.call(this)[Q](!1)
            }
        })
    }
});
var PF2 = U((xhG, TF2) => {
    TF2.exports = f1A;
    var RF2 = f91();
    (f1A.prototype = Object.create(RF2.prototype)).constructor = f1A;
    var OF2 = dk();

function f1A(A) {
        RF2.call(this, A)
    }
    f1A._configure = function() {
        if (OF2.Buffer) f1A.prototype._slice = OF2.Buffer.prototype.slice
    };
    f1A.prototype.string = function() {
        var Q = this.uint32();
        return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + Q, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + Q, this.len))
    };
    f1A._configure()
});
var SF2 = U((vhG, jF2) => {
    jF2.exports = iMA;
    var hQ0 = dk();
    (iMA.prototype = Object.create(hQ0.EventEmitter.prototype)).constructor = iMA;

function iMA(A, Q, B) {
        if (typeof A !== "function") throw TypeError("rpcImpl must be a function");
        hQ0.EventEmitter.call(this), this.rpcImpl = A, this.requestDelimited = Boolean(Q), this.responseDelimited = Boolean(B)
    }
    iMA.prototype.rpcCall = function A(Q, B, G, Z, I) {
        if (!Z) throw TypeError("request must be specified");
        var Y = this;
        if (!I) return hQ0.asPromise(A, Y, Q, B, G, Z);
        if (!Y.rpcImpl) {
            setTimeout(function() {
                I(Error("already ended"))
            }, 0);
            return
        }
        try {
            return Y.rpcImpl(Q, B[Y.requestDelimited ? "encodeDelimited" : "encode"](Z).finish(), function(W, X) {
                if (W) return Y.emit("error", W, Q), I(W);
                if (X === null) {
                    Y.end(!0);
                    return
                }
                if (!(X instanceof G)) try {
                    X = G[Y.responseDelimited ? "decodeDelimited" : "decode"](X)
                } catch (F) {
                    return Y.emit("error", F, Q), I(F)
                }
                return Y.emit("data", X, Q), I(null, X)
            })
        } catch (J) {
            Y.emit("error", J, Q), setTimeout(function() {
                I(J)
            }, 0);
            return
        }
    };
    iMA.prototype.end = function(Q) {
        if (this.rpcImpl) {
            if (!Q) this.rpcImpl(null, null, null);
            this.rpcImpl = null, this.emit("end").off()
        }
        return this
    }
});
var gQ0 = U((_F2) => {
    var JE5 = _F2;
    JE5.Service = SF2()
});
var uQ0 = U((fhG, kF2) => {
    kF2.exports = {}
});
var mQ0 = U((xF2) => {
    var aU = xF2;
    aU.build = "minimal";
    aU.Writer = v91();
    aU.BufferWriter = $F2();
    aU.Reader = f91();
    aU.BufferReader = PF2();
    aU.util = dk();
    aU.rpc = gQ0();
    aU.roots = uQ0();
    aU.configure = yF2;

function yF2() {
        aU.util._configure(), aU.Writer._configure(aU.BufferWriter), aU.Reader._configure(aU.BufferReader)
    }
    yF2()
});
var h91 = U((vF2, bF2) => {
    Object.defineProperty(vF2, "__esModule", {
        value: !0
    });
    var S9 = mQ0(),
        B0 = S9.Reader,
        E8 = S9.Writer,
        _A = S9.util,
        RA = S9.roots.default || (S9.roots.default = {});
    RA.opentelemetry = function() {
        var A = {};
        return A.proto = function() {
            var Q = {};
            return Q.common = function() {
                var B = {};
                return B.v1 = function() {
                    var G = {};
                    return G.AnyValue = function() {
                        function Z(Y) {
                            if (Y) {
                                for (var J = Object.keys(Y), W = 0; W < J.length; ++W)
                                    if (Y[J[W]] != null) this[J[W]] = Y[J[W]]
                            }
                        }
                        Z.prototype.stringValue = null, Z.prototype.boolValue = null, Z.prototype.intValue = null, Z.prototype.doubleValue = null, Z.prototype.arrayValue = null, Z.prototype.kvlistValue = null, Z.prototype.bytesValue = null;
                        var I;
                        return Object.defineProperty(Z.prototype, "value", {
                            get: _A.oneOfGetter(I = ["stringValue", "boolValue", "intValue", "doubleValue", "arrayValue", "kvlistValue", "bytesValue"]),
                            set: _A.oneOfSetter(I)
                        }), Z.create = function(J) {
                            return new Z(J)
                        }, Z.encode = function(J, W) {
                            if (!W) W = E8.create();
                            if (J.stringValue != null && Object.hasOwnProperty.call(J, "stringValue")) W.uint32(10).string(J.stringValue);
                            if (J.boolValue != null && Object.hasOwnProperty.call(J, "boolValue")) W.uint32(16).bool(J.boolValue);
                            if (J.intValue != null && Object.hasOwnProperty.call(J, "intValue")) W.uint32(24).int64(J.intValue);
                            if (J.doubleValue != null && Object.hasOwnProperty.call(J, "doubleValue")) W.uint32(33).double(J.doubleValue);
                            if (J.arrayValue != null && Object.hasOwnProperty.call(J, "arrayValue")) RA.opentelemetry.proto.common.v1.ArrayValue.encode(J.arrayValue, W.uint32(42).fork()).ldelim();
                            if (J.kvlistValue != null && Object.hasOwnProperty.call(J, "kvlistValue")) RA.opentelemetry.proto.common.v1.KeyValueList.encode(J.kvlistValue, W.uint32(50).fork()).ldelim();
                            if (J.bytesValue != null && Object.hasOwnProperty.call(J, "bytesValue")) W.uint32(58).bytes(J.bytesValue);
                            return W
                        }, Z.encodeDelimited = function(J, W) {
                            return this.encode(J, W).ldelim()
                        }, Z.decode = function(J, W, X) {
                            if (!(J instanceof B0)) J = B0.create(J);
                            var F = W === void 0 ? J.len : J.pos + W,
                                V = new RA.opentelemetry.proto.common.v1.AnyValue;
                            while (J.pos < F) {
                                var K = J.uint32();
                                if (K === X) break;
                                switch (K >>> 3) {
                                    case 1: {
                                        V.stringValue = J.string();
                                        break
                                    }
                                    case 2: {
                                        V.boolValue = J.bool();
                                        break
                                    }
                                    case 3: {
                                        V.intValue = J.int64();
                                        break
                                    }
                                    case 4: {
                                        V.doubleValue = J.double();
                                        break
                                    }
                                    case 5: {
                                        V.arrayValue = RA.opentelemetry.proto.common.v1.ArrayValue.decode(J, J.uint32());
                                        break
                                    }
                                    case 6: {
                                        V.kvlistValue = RA.opentelemetry.proto.common.v1.KeyValueList.decode(J, J.uint32());
                                        break
                                    }
                                    case 7: {
                                        V.bytesValue = J.bytes();
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
                            if (J.stringValue != null && J.hasOwnProperty("stringValue")) {
                                if (W.value = 1, !_A.isString(J.stringValue)) return "stringValue: string expected"
                            }
                            if (J.boolValue != null && J.hasOwnProperty("boolValue")) {
                                if (W.value === 1) return "value: multiple values";
                                if (W.value = 1, typeof J.boolValue !== "boolean") return "boolValue: boolean expected"
                            }
                            if (J.intValue != null && J.hasOwnProperty("intValue")) {
                                if (W.value === 1) return "value: multiple values";
                                if (W.value = 1, !_A.isInteger(J.intValue) && !(J.intValue && _A.isInteger(J.intValue.low) && _A.isInteger(J.intValue.high))) return "intValue: integer|Long expected"
                            }
                            if (J.doubleValue != null && J.hasOwnProperty("doubleValue")) {
                                if (W.value === 1) return "value: multiple values";
                                if (W.value = 1, typeof J.doubleValue !== "number") return "doubleValue: number expected"
                            }
                            if (J.arrayValue != null && J.hasOwnProperty("arrayValue")) {
                                if (W.value === 1) return "value: multiple values";
                                W.value = 1;
                                {
                                    var X = RA.opentelemetry.proto.common.v1.ArrayValue.verify(J.arrayValue);
                                    if (X) return "arrayValue." + X
                                }
                            }
                            if (J.kvlistValue != null && J.hasOwnProperty("kvlistValue")) {
                                if (W.value === 1) return "value: multiple values";
                                W.value = 1;
                                {
                                    var X = RA.opentelemetry.proto.common.v1.KeyValueList.verify(J.kvlistValue);
                                    if (X) return "kvlistValue." + X
                                }
                            }
                            if (J.bytesValue != null && J.hasOwnProperty("bytesValue")) {
                                if (W.value === 1) return "value: multiple values";
                                if (W.value = 1, !(J.bytesValue && typeof J.bytesValue.length === "number" || _A.isString(J.bytesValue))) return "bytesValue: buffer expected"
                            }
                            return null
                        }, Z.fromObject = function(J) {
                            if (J instanceof RA.opentelemetry.proto.common.v1.AnyValue) return J;
                            var W = new RA.opentelemetry.proto.common.v1.AnyValue;
                            if (J.stringValue != null) W.stringValue = String(J.stringValue);
                            if (J.boolValue != null) W.boolValue = Boolean(J.boolValue);
                            if (J.intValue != null) {
                                if (_A.Long)(W.intValue = _A.Long.fromValue(J.intValue)).unsigned = !1;
                                else if (typeof J.intValue === "string") W.intValue = parseInt(J.intValue, 10);
                                else if (typeof J.intValue === "number") W.intValue = J.intValue;
                                else if (typeof J.intValue === "object") W.intValue = new _A.LongBits(J.intValue.low >>> 0, J.intValue.high >>> 0).toNumber()
                            }
                            if (J.doubleValue != null) W.doubleValue = Number(J.doubleValue);
                            if (J.arrayValue != null) {
                                if (typeof J.arrayValue !== "object") throw TypeError(".opentelemetry.proto.common.v1.AnyValue.arrayValue: object expected");
                                W.arrayValue = RA.opentelemetry.proto.common.v1.ArrayValue.fromObject(J.arrayValue)
                            }
                            if (J.kvlistValue != null) {
                                if (typeof J.kvlistValue !== "object") throw TypeError(".opentelemetry.proto.common.v1.AnyValue.kvlistValue: object expected");
                                W.kvlistValue = RA.opentelemetry.proto.common.v1.KeyValueList.fromObject(J.kvlistValue)
                            }
                            if (J.bytesValue != null) {
                                if (typeof J.bytesValue === "string") _A.base64.decode(J.bytesValue, W.bytesValue = _A.newBuffer(_A.base64.length(J.bytesValue)), 0);
                                else if (J.bytesValue.length >= 0) W.bytesValue = J.bytesValue
                            }
                            return W
                        }, Z.toObject = function(J, W) {
                            if (!W) W = {};

var X = {};
                            if (J.stringValue != null && J.hasOwnProperty("stringValue")) {
                                if (X.stringValue = J.stringValue, W.oneofs) X.value = "stringValue"
                            }
                            if (J.boolValue != null && J.hasOwnProperty("boolValue")) {
                                if (X.boolValue = J.boolValue, W.oneofs) X.value = "boolValue"
                            }
                            if (J.intValue != null && J.hasOwnProperty("intValue")) {
                                if (typeof J.intValue === "number") X.intValue = W.longs === String ? String(J.intValue) : J.intValue;
                                else X.intValue = W.longs === String ? _A.Long.prototype.toString.call(J.intValue) : W.longs === Number ? new _A.LongBits(J.intValue.low >>> 0, J.intValue.high >>> 0).toNumber() : J.intValue;
                                if (W.oneofs) X.value = "intValue"
                            }
                            if (J.doubleValue != null && J.hasOwnProperty("doubleValue")) {
                                if (X.doubleValue = W.json && !isFinite(J.doubleValue) ? String(J.doubleValue) : J.doubleValue, W.oneofs) X.value = "doubleValue"
                            }
                            if (J.arrayValue != null && J.hasOwnProperty("arrayValue")) {
                                if (X.arrayValue = RA.opentelemetry.proto.common.v1.ArrayValue.toObject(J.arrayValue, W), W.oneofs) X.value = "arrayValue"
                            }
                            if (J.kvlistValue != null && J.hasOwnProperty("kvlistValue")) {
                                if (X.kvlistValue = RA.opentelemetry.proto.common.v1.KeyValueList.toObject(J.kvlistValue, W), W.oneofs) X.value = "kvlistValue"
                            }
                            if (J.bytesValue != null && J.hasOwnProperty("bytesValue")) {
                                if (X.bytesValue = W.bytes === String ? _A.base64.encode(J.bytesValue, 0, J.bytesValue.length) : W.bytes === Array ? Array.prototype.slice.call(J.bytesValue) : J.bytesValue, W.oneofs) X.value = "bytesValue"
                            }
                            return X
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(J) {
                            if (J === void 0) J = "type.googleapis.com";
                            return J + "/opentelemetry.proto.common.v1.AnyValue"
                        }, Z
                    }(), G.ArrayValue = function() {
                        function Z(I) {
                            if (this.values = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.values = _A.emptyArray, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.values != null && Y.values.length)
                                for (var W = 0; W < Y.values.length; ++W) RA.opentelemetry.proto.common.v1.AnyValue.encode(Y.values[W], J.uint32(10).fork()).ldelim();
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.common.v1.ArrayValue;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        if (!(F.values && F.values.length)) F.values = [];
                                        F.values.push(RA.opentelemetry.proto.common.v1.AnyValue.decode(Y, Y.uint32()));
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
                            if (Y.values != null && Y.hasOwnProperty("values")) {
                                if (!Array.isArray(Y.values)) return "values: array expected";
                                for (var J = 0; J < Y.values.length; ++J) {
                                    var W = RA.opentelemetry.proto.common.v1.AnyValue.verify(Y.values[J]);
                                    if (W) return "values." + W
                                }
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.common.v1.ArrayValue) return Y;
                            var J = new RA.opentelemetry.proto.common.v1.ArrayValue;
                            if (Y.values) {
                                if (!Array.isArray(Y.values)) throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: array expected");
                                J.values = [];
                                for (var W = 0; W < Y.values.length; ++W) {
                                    if (typeof Y.values[W] !== "object") throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: object expected");
                                    J.values[W] = RA.opentelemetry.proto.common.v1.AnyValue.fromObject(Y.values[W])
                                }
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};

var W = {};
                            if (J.arrays || J.defaults) W.values = [];
                            if (Y.values && Y.values.length) {
                                W.values = [];
                                for (var X = 0; X < Y.values.length; ++X) W.values[X] = RA.opentelemetry.proto.common.v1.AnyValue.toObject(Y.values[X], J)
                            }
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.common.v1.ArrayValue"
                        }, Z
                    }(), G.KeyValueList = function() {
                        function Z(I) {
                            if (this.values = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.values = _A.emptyArray, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.values != null && Y.values.length)
                                for (var W = 0; W < Y.values.length; ++W) RA.opentelemetry.proto.common.v1.KeyValue.encode(Y.values[W], J.uint32(10).fork()).ldelim();
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.common.v1.KeyValueList;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        if (!(F.values && F.values.length)) F.values = [];
                                        F.values.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32()));
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
                            if (Y.values != null && Y.hasOwnProperty("values")) {
                                if (!Array.isArray(Y.values)) return "values: array expected";
                                for (var J = 0; J < Y.values.length; ++J) {
                                    var W = RA.opentelemetry.proto.common.v1.KeyValue.verify(Y.values[J]);
                                    if (W) return "values." + W
                                }
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.common.v1.KeyValueList) return Y;
                            var J = new RA.opentelemetry.proto.common.v1.KeyValueList;
                            if (Y.values) {
                                if (!Array.isArray(Y.values)) throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: array expected");
                                J.values = [];
                                for (var W = 0; W < Y.values.length; ++W) {
                                    if (typeof Y.values[W] !== "object") throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: object expected");
                                    J.values[W] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(Y.values[W])
                                }
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};

var W = {};
                            if (J.arrays || J.defaults) W.values = [];
                            if (Y.values && Y.values.length) {
                                W.values = [];
                                for (var X = 0; X < Y.values.length; ++X) W.values[X] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(Y.values[X], J)
                            }
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.common.v1.KeyValueList"
                        }, Z
                    }(), G.KeyValue = function() {
                        function Z(I) {
                            if (I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.key = null, Z.prototype.value = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.key != null && Object.hasOwnProperty.call(Y, "key")) J.uint32(10).string(Y.key);
                            if (Y.value != null && Object.hasOwnProperty.call(Y, "value")) RA.opentelemetry.proto.common.v1.AnyValue.encode(Y.value, J.uint32(18).fork()).ldelim();
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.common.v1.KeyValue;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        F.key = Y.string();
                                        break
                                    }
                                    case 2: {
                                        F.value = RA.opentelemetry.proto.common.v1.AnyValue.decode(Y, Y.uint32());
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
                            if (Y.key != null && Y.hasOwnProperty("key")) {
                                if (!_A.isString(Y.key)) return "key: string expected"
                            }
                            if (Y.value != null && Y.hasOwnProperty("value")) {
                                var J = RA.opentelemetry.proto.common.v1.AnyValue.verify(Y.value);
                                if (J) return "value." + J
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.common.v1.KeyValue) return Y;
                            var J = new RA.opentelemetry.proto.common.v1.KeyValue;
                            if (Y.key != null) J.key = String(Y.key);
                            if (Y.value != null) {
                                if (typeof Y.value !== "object") throw TypeError(".opentelemetry.proto.common.v1.KeyValue.value: object expected");
                                J.value = RA.opentelemetry.proto.common.v1.AnyValue.fromObject(Y.value)
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};

var W = {};
                            if (J.defaults) W.key = "", W.value = null;
                            if (Y.key != null && Y.hasOwnProperty("key")) W.key = Y.key;
                            if (Y.value != null && Y.hasOwnProperty("value")) W.value = RA.opentelemetry.proto.common.v1.AnyValue.toObject(Y.value, J);
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.common.v1.KeyValue"
                        }, Z
                    }(), G.InstrumentationScope = function() {
                        function Z(I) {
                            if (this.attributes = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.name = null, Z.prototype.version = null, Z.prototype.attributes = _A.emptyArray, Z.prototype.droppedAttributesCount = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.name != null && Object.hasOwnProperty.call(Y, "name")) J.uint32(10).string(Y.name);
                            if (Y.version != null && Object.hasOwnProperty.call(Y, "version")) J.uint32(18).string(Y.version);
                            if (Y.attributes != null && Y.attributes.length)
                                for (var W = 0; W < Y.attributes.length; ++W) RA.opentelemetry.proto.common.v1.KeyValue.encode(Y.attributes[W], J.uint32(26).fork()).ldelim();
                            if (Y.droppedAttributesCount != null && Object.hasOwnProperty.call(Y, "droppedAttributesCount")) J.uint32(32).uint32(Y.droppedAttributesCount);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.common.v1.InstrumentationScope;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        F.name = Y.string();
                                        break
                                    }
                                    case 2: {
                                        F.version = Y.string();
                                        break
                                    }
                                    case 3: {
                                        if (!(F.attributes && F.attributes.length)) F.attributes = [];
                                        F.attributes.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 4: {
                                        F.droppedAttributesCount = Y.uint32();
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
                            if (Y.name != null && Y.hasOwnProperty("name")) {
                                if (!_A.isString(Y.name)) return "name: string expected"
                            }
                            if (Y.version != null && Y.hasOwnProperty("version")) {
                                if (!_A.isString(Y.version)) return "version: string expected"
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
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.common.v1.InstrumentationScope) return Y;
                            var J = new RA.opentelemetry.proto.common.v1.InstrumentationScope;
                            if (Y.name != null) J.name = String(Y.name);
                            if (Y.version != null) J.version = String(Y.version);
                            if (Y.attributes) {
                                if (!Array.isArray(Y.attributes)) throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: array expected");
                                J.attributes = [];
                                for (var W = 0; W < Y.attributes.length; ++W) {
                                    if (typeof Y.attributes[W] !== "object") throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: object expected");
                                    J.attributes[W] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(Y.attributes[W])
                                }
                            }
                            if (Y.droppedAttributesCount != null) J.droppedAttributesCount = Y.droppedAttributesCount >>> 0;
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};

var W = {};
                            if (J.arrays || J.defaults) W.attributes = [];
                            if (J.defaults) W.name = "", W.version = "", W.droppedAttributesCount = 0;
                            if (Y.name != null && Y.hasOwnProperty("name")) W.name = Y.name;
                            if (Y.version != null && Y.hasOwnProperty("version")) W.version = Y.version;
                            if (Y.attributes && Y.attributes.length) {
                                W.attributes = [];
                                for (var X = 0; X < Y.attributes.length; ++X) W.attributes[X] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(Y.attributes[X], J)
                            }
                            if (Y.droppedAttributesCount != null && Y.hasOwnProperty("droppedAttributesCount")) W.droppedAttributesCount = Y.droppedAttributesCount;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.common.v1.InstrumentationScope"
                        }, Z
                    }(), G.EntityRef = function() {
                        function Z(I) {
                            if (this.idKeys = [], this.descriptionKeys = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.schemaUrl = null, Z.prototype.type = null, Z.prototype.idKeys = _A.emptyArray, Z.prototype.descriptionKeys = _A.emptyArray, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.schemaUrl != null && Object.hasOwnProperty.call(Y, "schemaUrl")) J.uint32(10).string(Y.schemaUrl);
                            if (Y.type != null && Object.hasOwnProperty.call(Y, "type")) J.uint32(18).string(Y.type);
                            if (Y.idKeys != null && Y.idKeys.length)
                                for (var W = 0; W < Y.idKeys.length; ++W) J.uint32(26).string(Y.idKeys[W]);
                            if (Y.descriptionKeys != null && Y.descriptionKeys.length)
                                for (var W = 0; W < Y.descriptionKeys.length; ++W) J.uint32(34).string(Y.descriptionKeys[W]);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.common.v1.EntityRef;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        F.schemaUrl = Y.string();
                                        break
                                    }
                                    case 2: {
                                        F.type = Y.string();
                                        break
                                    }
                                    case 3: {
                                        if (!(F.idKeys && F.idKeys.length)) F.idKeys = [];
                                        F.idKeys.push(Y.string());
                                        break
                                    }
                                    case 4: {
                                        if (!(F.descriptionKeys && F.descriptionKeys.length)) F.descriptionKeys = [];
                                        F.descriptionKeys.push(Y.string());
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
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) {
                                if (!_A.isString(Y.schemaUrl)) return "schemaUrl: string expected"
                            }
                            if (Y.type != null && Y.hasOwnProperty("type")) {
                                if (!_A.isString(Y.type)) return "type: string expected"
                            }
                            if (Y.idKeys != null && Y.hasOwnProperty("idKeys")) {
                                if (!Array.isArray(Y.idKeys)) return "idKeys: array expected";
                                for (var J = 0; J < Y.idKeys.length; ++J)
                                    if (!_A.isString(Y.idKeys[J])) return "idKeys: string[] expected"
                            }
                            if (Y.descriptionKeys != null && Y.hasOwnProperty("descriptionKeys")) {
                                if (!Array.isArray(Y.descriptionKeys)) return "descriptionKeys: array expected";
                                for (var J = 0; J < Y.descriptionKeys.length; ++J)
                                    if (!_A.isString(Y.descriptionKeys[J])) return "descriptionKeys: string[] expected"
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.common.v1.EntityRef) return Y;
                            var J = new RA.opentelemetry.proto.common.v1.EntityRef;
                            if (Y.schemaUrl != null) J.schemaUrl = String(Y.schemaUrl);
                            if (Y.type != null) J.type = String(Y.type);
                            if (Y.idKeys) {
                                if (!Array.isArray(Y.idKeys)) throw TypeError(".opentelemetry.proto.common.v1.EntityRef.idKeys: array expected");
                                J.idKeys = [];
                                for (var W = 0; W < Y.idKeys.length; ++W) J.idKeys[W] = String(Y.idKeys[W])
                            }
                            if (Y.descriptionKeys) {
                                if (!Array.isArray(Y.descriptionKeys)) throw TypeError(".opentelemetry.proto.common.v1.EntityRef.descriptionKeys: array expected");
                                J.descriptionKeys = [];
                                for (var W = 0; W < Y.descriptionKeys.length; ++W) J.descriptionKeys[W] = String(Y.descriptionKeys[W])
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};

var W = {};
                            if (J.arrays || J.defaults) W.idKeys = [], W.descriptionKeys = [];
                            if (J.defaults) W.schemaUrl = "", W.type = "";
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) W.schemaUrl = Y.schemaUrl;
                            if (Y.type != null && Y.hasOwnProperty("type")) W.type = Y.type;
                            if (Y.idKeys && Y.idKeys.length) {
                                W.idKeys = [];
                                for (var X = 0; X < Y.idKeys.length; ++X) W.idKeys[X] = Y.idKeys[X]
                            }
                            if (Y.descriptionKeys && Y.descriptionKeys.length) {
                                W.descriptionKeys = [];
                                for (var X = 0; X < Y.descriptionKeys.length; ++X) W.descriptionKeys[X] = Y.descriptionKeys[X]
                            }
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.common.v1.EntityRef"
                        }, Z
                    }(), G
                }(), B
            }(), Q.resource = function() {
                var B = {};
                return B.v1 = function() {
                    var G = {};
                    return G.Resource = function() {
                        function Z(I) {
                            if (this.attributes = [], this.entityRefs = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.attributes = _A.emptyArray, Z.prototype.droppedAttributesCount = null, Z.prototype.entityRefs = _A.emptyArray, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.attributes != null && Y.attributes.length)
                                for (var W = 0; W < Y.attributes.length; ++W) RA.opentelemetry.proto.common.v1.KeyValue.encode(Y.attributes[W], J.uint32(10).fork()).ldelim();
                            if (Y.droppedAttributesCount != null && Object.hasOwnProperty.call(Y, "droppedAttributesCount")) J.uint32(16).uint32(Y.droppedAttributesCount);
                            if (Y.entityRefs != null && Y.entityRefs.length)
                                for (var W = 0; W < Y.entityRefs.length; ++W) RA.opentelemetry.proto.common.v1.EntityRef.encode(Y.entityRefs[W], J.uint32(26).fork()).ldelim();
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.resource.v1.Resource;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        if (!(F.attributes && F.attributes.length)) F.attributes = [];
                                        F.attributes.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 2: {
                                        F.droppedAttributesCount = Y.uint32();
                                        break
                                    }
                                    case 3: {
                                        if (!(F.entityRefs && F.entityRefs.length)) F.entityRefs = [];
                                        F.entityRefs.push(RA.opentelemetry.proto.common.v1.EntityRef.decode(Y, Y.uint32()));
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
                            if (Y.droppedAttributesCount != null && Y.hasOwnProperty("droppedAttributesCount")) {
                                if (!_A.isInteger(Y.droppedAttributesCount)) return "droppedAttributesCount: integer expected"
                            }
                            if (Y.entityRefs != null && Y.hasOwnProperty("entityRefs")) {
                                if (!Array.isArray(Y.entityRefs)) return "entityRefs: array expected";
                                for (var J = 0; J < Y.entityRefs.length; ++J) {
                                    var W = RA.opentelemetry.proto.common.v1.EntityRef.verify(Y.entityRefs[J]);
                                    if (W) return "entityRefs." + W
                                }
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.resource.v1.Resource) return Y;
                            var J = new RA.opentelemetry.proto.resource.v1.Resource;
                            if (Y.attributes) {
                                if (!Array.isArray(Y.attributes)) throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: array expected");
                                J.attributes = [];
                                for (var W = 0; W < Y.attributes.length; ++W) {
                                    if (typeof Y.attributes[W] !== "object") throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: object expected");
                                    J.attributes[W] = RA.opentelemetry.proto.common.v1.KeyValue.fromObject(Y.attributes[W])
                                }
                            }
                            if (Y.droppedAttributesCount != null) J.droppedAttributesCount = Y.droppedAttributesCount >>> 0;
                            if (Y.entityRefs) {
                                if (!Array.isArray(Y.entityRefs)) throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: array expected");
                                J.entityRefs = [];
                                for (var W = 0; W < Y.entityRefs.length; ++W) {
                                    if (typeof Y.entityRefs[W] !== "object") throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: object expected");
                                    J.entityRefs[W] = RA.opentelemetry.proto.common.v1.EntityRef.fromObject(Y.entityRefs[W])
                                }
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};

var W = {};
                            if (J.arrays || J.defaults) W.attributes = [], W.entityRefs = [];
                            if (J.defaults) W.droppedAttributesCount = 0;
                            if (Y.attributes && Y.attributes.length) {
                                W.attributes = [];
                                for (var X = 0; X < Y.attributes.length; ++X) W.attributes[X] = RA.opentelemetry.proto.common.v1.KeyValue.toObject(Y.attributes[X], J)
                            }
                            if (Y.droppedAttributesCount != null && Y.hasOwnProperty("droppedAttributesCount")) W.droppedAttributesCount = Y.droppedAttributesCount;
                            if (Y.entityRefs && Y.entityRefs.length) {
                                W.entityRefs = [];
                                for (var X = 0; X < Y.entityRefs.length; ++X) W.entityRefs[X] = RA.opentelemetry.proto.common.v1.EntityRef.toObject(Y.entityRefs[X], J)
                            }
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.resource.v1.Resource"
                        }, Z
                    }(), G
                }(), B
            }(), Q.trace = function() {
                var B = {};
                return B.v1 = function() {
                    var G = {};
                    return G.TracesData = function() {
                        function Z(I) {
                            if (this.resourceSpans = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.resourceSpans = _A.emptyArray, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.resourceSpans != null && Y.resourceSpans.length)
                                for (var W = 0; W < Y.resourceSpans.length; ++W) RA.opentelemetry.proto.trace.v1.ResourceSpans.encode(Y.resourceSpans[W], J.uint32(10).fork()).ldelim();
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.trace.v1.TracesData;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        if (!(F.resourceSpans && F.resourceSpans.length)) F.resourceSpans = [];
                                        F.resourceSpans.push(RA.opentelemetry.proto.trace.v1.ResourceSpans.decode(Y, Y.uint32()));
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
                            if (Y.resourceSpans != null && Y.hasOwnProperty("resourceSpans")) {
                                if (!Array.isArray(Y.resourceSpans)) return "resourceSpans: array expected";
                                for (var J = 0; J < Y.resourceSpans.length; ++J) {
                                    var W = RA.opentelemetry.proto.trace.v1.ResourceSpans.verify(Y.resourceSpans[J]);
                                    if (W) return "resourceSpans." + W
                                }
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.trace.v1.TracesData) return Y;
                            var J = new RA.opentelemetry.proto.trace.v1.TracesData;
                            if (Y.resourceSpans) {
                                if (!Array.isArray(Y.resourceSpans)) throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: array expected");
                                J.resourceSpans = [];
                                for (var W = 0; W < Y.resourceSpans.length; ++W) {
                                    if (typeof Y.resourceSpans[W] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: object expected");
                                    J.resourceSpans[W] = RA.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(Y.resourceSpans[W])
                                }
                            }
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};

var W = {};
                            if (J.arrays || J.defaults) W.resourceSpans = [];
                            if (Y.resourceSpans && Y.resourceSpans.length) {
                                W.resourceSpans = [];
                                for (var X = 0; X < Y.resourceSpans.length; ++X) W.resourceSpans[X] = RA.opentelemetry.proto.trace.v1.ResourceSpans.toObject(Y.resourceSpans[X], J)
                            }
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.trace.v1.TracesData"
                        }, Z
                    }(), G.ResourceSpans = function() {
                        function Z(I) {
                            if (this.scopeSpans = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.resource = null, Z.prototype.scopeSpans = _A.emptyArray, Z.prototype.schemaUrl = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.resource != null && Object.hasOwnProperty.call(Y, "resource")) RA.opentelemetry.proto.resource.v1.Resource.encode(Y.resource, J.uint32(10).fork()).ldelim();
                            if (Y.scopeSpans != null && Y.scopeSpans.length)
                                for (var W = 0; W < Y.scopeSpans.length; ++W) RA.opentelemetry.proto.trace.v1.ScopeSpans.encode(Y.scopeSpans[W], J.uint32(18).fork()).ldelim();
                            if (Y.schemaUrl != null && Object.hasOwnProperty.call(Y, "schemaUrl")) J.uint32(26).string(Y.schemaUrl);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.trace.v1.ResourceSpans;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        F.resource = RA.opentelemetry.proto.resource.v1.Resource.decode(Y, Y.uint32());
                                        break
                                    }
                                    case 2: {
                                        if (!(F.scopeSpans && F.scopeSpans.length)) F.scopeSpans = [];
                                        F.scopeSpans.push(RA.opentelemetry.proto.trace.v1.ScopeSpans.decode(Y, Y.uint32()));
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
                            if (Y.scopeSpans != null && Y.hasOwnProperty("scopeSpans")) {
                                if (!Array.isArray(Y.scopeSpans)) return "scopeSpans: array expected";
                                for (var W = 0; W < Y.scopeSpans.length; ++W) {
                                    var J = RA.opentelemetry.proto.trace.v1.ScopeSpans.verify(Y.scopeSpans[W]);
                                    if (J) return "scopeSpans." + J
                                }
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) {
                                if (!_A.isString(Y.schemaUrl)) return "schemaUrl: string expected"
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.trace.v1.ResourceSpans) return Y;
                            var J = new RA.opentelemetry.proto.trace.v1.ResourceSpans;
                            if (Y.resource != null) {
                                if (typeof Y.resource !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.resource: object expected");
                                J.resource = RA.opentelemetry.proto.resource.v1.Resource.fromObject(Y.resource)
                            }
                            if (Y.scopeSpans) {
                                if (!Array.isArray(Y.scopeSpans)) throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: array expected");
                                J.scopeSpans = [];
                                for (var W = 0; W < Y.scopeSpans.length; ++W) {
                                    if (typeof Y.scopeSpans[W] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: object expected");
                                    J.scopeSpans[W] = RA.opentelemetry.proto.trace.v1.ScopeSpans.fromObject(Y.scopeSpans[W])
                                }
                            }
                            if (Y.schemaUrl != null) J.schemaUrl = String(Y.schemaUrl);
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};

var W = {};
                            if (J.arrays || J.defaults) W.scopeSpans = [];
                            if (J.defaults) W.resource = null, W.schemaUrl = "";
                            if (Y.resource != null && Y.hasOwnProperty("resource")) W.resource = RA.opentelemetry.proto.resource.v1.Resource.toObject(Y.resource, J);
                            if (Y.scopeSpans && Y.scopeSpans.length) {
                                W.scopeSpans = [];
                                for (var X = 0; X < Y.scopeSpans.length; ++X) W.scopeSpans[X] = RA.opentelemetry.proto.trace.v1.ScopeSpans.toObject(Y.scopeSpans[X], J)
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) W.schemaUrl = Y.schemaUrl;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.trace.v1.ResourceSpans"
                        }, Z
                    }(), G.ScopeSpans = function() {
                        function Z(I) {
                            if (this.spans = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.scope = null, Z.prototype.spans = _A.emptyArray, Z.prototype.schemaUrl = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.scope != null && Object.hasOwnProperty.call(Y, "scope")) RA.opentelemetry.proto.common.v1.InstrumentationScope.encode(Y.scope, J.uint32(10).fork()).ldelim();
                            if (Y.spans != null && Y.spans.length)
                                for (var W = 0; W < Y.spans.length; ++W) RA.opentelemetry.proto.trace.v1.Span.encode(Y.spans[W], J.uint32(18).fork()).ldelim();
                            if (Y.schemaUrl != null && Object.hasOwnProperty.call(Y, "schemaUrl")) J.uint32(26).string(Y.schemaUrl);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.trace.v1.ScopeSpans;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        F.scope = RA.opentelemetry.proto.common.v1.InstrumentationScope.decode(Y, Y.uint32());
                                        break
                                    }
                                    case 2: {
                                        if (!(F.spans && F.spans.length)) F.spans = [];
                                        F.spans.push(RA.opentelemetry.proto.trace.v1.Span.decode(Y, Y.uint32()));
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
                            if (Y.spans != null && Y.hasOwnProperty("spans")) {
                                if (!Array.isArray(Y.spans)) return "spans: array expected";
                                for (var W = 0; W < Y.spans.length; ++W) {
                                    var J = RA.opentelemetry.proto.trace.v1.Span.verify(Y.spans[W]);
                                    if (J) return "spans." + J
                                }
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) {
                                if (!_A.isString(Y.schemaUrl)) return "schemaUrl: string expected"
                            }
                            return null
                        }, Z.fromObject = function(Y) {
                            if (Y instanceof RA.opentelemetry.proto.trace.v1.ScopeSpans) return Y;
                            var J = new RA.opentelemetry.proto.trace.v1.ScopeSpans;
                            if (Y.scope != null) {
                                if (typeof Y.scope !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.scope: object expected");
                                J.scope = RA.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(Y.scope)
                            }
                            if (Y.spans) {
                                if (!Array.isArray(Y.spans)) throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: array expected");
                                J.spans = [];
                                for (var W = 0; W < Y.spans.length; ++W) {
                                    if (typeof Y.spans[W] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: object expected");
                                    J.spans[W] = RA.opentelemetry.proto.trace.v1.Span.fromObject(Y.spans[W])
                                }
                            }
                            if (Y.schemaUrl != null) J.schemaUrl = String(Y.schemaUrl);
                            return J
                        }, Z.toObject = function(Y, J) {
                            if (!J) J = {};

var W = {};
                            if (J.arrays || J.defaults) W.spans = [];
                            if (J.defaults) W.scope = null, W.schemaUrl = "";
                            if (Y.scope != null && Y.hasOwnProperty("scope")) W.scope = RA.opentelemetry.proto.common.v1.InstrumentationScope.toObject(Y.scope, J);
                            if (Y.spans && Y.spans.length) {
                                W.spans = [];
                                for (var X = 0; X < Y.spans.length; ++X) W.spans[X] = RA.opentelemetry.proto.trace.v1.Span.toObject(Y.spans[X], J)
                            }
                            if (Y.schemaUrl != null && Y.hasOwnProperty("schemaUrl")) W.schemaUrl = Y.schemaUrl;
                            return W
                        }, Z.prototype.toJSON = function() {
                            return this.constructor.toObject(this, S9.util.toJSONOptions)
                        }, Z.getTypeUrl = function(Y) {
                            if (Y === void 0) Y = "type.googleapis.com";
                            return Y + "/opentelemetry.proto.trace.v1.ScopeSpans"
                        }, Z
                    }(), G.Span = function() {
                        function Z(I) {
                            if (this.attributes = [], this.events = [], this.links = [], I) {
                                for (var Y = Object.keys(I), J = 0; J < Y.length; ++J)
                                    if (I[Y[J]] != null) this[Y[J]] = I[Y[J]]
                            }
                        }
                        return Z.prototype.traceId = null, Z.prototype.spanId = null, Z.prototype.traceState = null, Z.prototype.parentSpanId = null, Z.prototype.flags = null, Z.prototype.name = null, Z.prototype.kind = null, Z.prototype.startTimeUnixNano = null, Z.prototype.endTimeUnixNano = null, Z.prototype.attributes = _A.emptyArray, Z.prototype.droppedAttributesCount = null, Z.prototype.events = _A.emptyArray, Z.prototype.droppedEventsCount = null, Z.prototype.links = _A.emptyArray, Z.prototype.droppedLinksCount = null, Z.prototype.status = null, Z.create = function(Y) {
                            return new Z(Y)
                        }, Z.encode = function(Y, J) {
                            if (!J) J = E8.create();
                            if (Y.traceId != null && Object.hasOwnProperty.call(Y, "traceId")) J.uint32(10).bytes(Y.traceId);
                            if (Y.spanId != null && Object.hasOwnProperty.call(Y, "spanId")) J.uint32(18).bytes(Y.spanId);
                            if (Y.traceState != null && Object.hasOwnProperty.call(Y, "traceState")) J.uint32(26).string(Y.traceState);
                            if (Y.parentSpanId != null && Object.hasOwnProperty.call(Y, "parentSpanId")) J.uint32(34).bytes(Y.parentSpanId);
                            if (Y.name != null && Object.hasOwnProperty.call(Y, "name")) J.uint32(42).string(Y.name);
                            if (Y.kind != null && Object.hasOwnProperty.call(Y, "kind")) J.uint32(48).int32(Y.kind);
                            if (Y.startTimeUnixNano != null && Object.hasOwnProperty.call(Y, "startTimeUnixNano")) J.uint32(57).fixed64(Y.startTimeUnixNano);
                            if (Y.endTimeUnixNano != null && Object.hasOwnProperty.call(Y, "endTimeUnixNano")) J.uint32(65).fixed64(Y.endTimeUnixNano);
                            if (Y.attributes != null && Y.attributes.length)
                                for (var W = 0; W < Y.attributes.length; ++W) RA.opentelemetry.proto.common.v1.KeyValue.encode(Y.attributes[W], J.uint32(74).fork()).ldelim();
                            if (Y.droppedAttributesCount != null && Object.hasOwnProperty.call(Y, "droppedAttributesCount")) J.uint32(80).uint32(Y.droppedAttributesCount);
                            if (Y.events != null && Y.events.length)
                                for (var W = 0; W < Y.events.length; ++W) RA.opentelemetry.proto.trace.v1.Span.Event.encode(Y.events[W], J.uint32(90).fork()).ldelim();
                            if (Y.droppedEventsCount != null && Object.hasOwnProperty.call(Y, "droppedEventsCount")) J.uint32(96).uint32(Y.droppedEventsCount);
                            if (Y.links != null && Y.links.length)
                                for (var W = 0; W < Y.links.length; ++W) RA.opentelemetry.proto.trace.v1.Span.Link.encode(Y.links[W], J.uint32(106).fork()).ldelim();
                            if (Y.droppedLinksCount != null && Object.hasOwnProperty.call(Y, "droppedLinksCount")) J.uint32(112).uint32(Y.droppedLinksCount);
                            if (Y.status != null && Object.hasOwnProperty.call(Y, "status")) RA.opentelemetry.proto.trace.v1.Status.encode(Y.status, J.uint32(122).fork()).ldelim();
                            if (Y.flags != null && Object.hasOwnProperty.call(Y, "flags")) J.uint32(133).fixed32(Y.flags);
                            return J
                        }, Z.encodeDelimited = function(Y, J) {
                            return this.encode(Y, J).ldelim()
                        }, Z.decode = function(Y, J, W) {
                            if (!(Y instanceof B0)) Y = B0.create(Y);
                            var X = J === void 0 ? Y.len : Y.pos + J,
                                F = new RA.opentelemetry.proto.trace.v1.Span;
                            while (Y.pos < X) {
                                var V = Y.uint32();
                                if (V === W) break;
                                switch (V >>> 3) {
                                    case 1: {
                                        F.traceId = Y.bytes();
                                        break
                                    }
                                    case 2: {
                                        F.spanId = Y.bytes();
                                        break
                                    }
                                    case 3: {
                                        F.traceState = Y.string();
                                        break
                                    }
                                    case 4: {
                                        F.parentSpanId = Y.bytes();
                                        break
                                    }
                                    case 16: {
                                        F.flags = Y.fixed32();
                                        break
                                    }
                                    case 5: {
                                        F.name = Y.string();
                                        break
                                    }
                                    case 6: {
                                        F.kind = Y.int32();
                                        break
                                    }
                                    case 7: {
                                        F.startTimeUnixNano = Y.fixed64();
                                        break
                                    }
                                    case 8: {
                                        F.endTimeUnixNano = Y.fixed64();
                                        break
                                    }
                                    case 9: {
                                        if (!(F.attributes && F.attributes.length)) F.attributes = [];
                                        F.attributes.push(RA.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 10: {
                                        F.droppedAttributesCount = Y.uint32();
                                        break
                                    }
                                    case 11: {
                                        if (!(F.events && F.events.length)) F.events = [];
                                        F.events.push(RA.opentelemetry.proto.trace.v1.Span.Event.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 12: {
                                        F.droppedEventsCount = Y.uint32();
                                        break
                                    }
                                    case 13: {
                                        if (!(F.links && F.links.length)) F.links = [];
                                        F.links.push(RA.opentelemetry.proto.trace.v1.Span.Link.decode(Y, Y.uint32()));
                                        break
                                    }
                                    case 14: {
                                        F.droppedLinksCount = Y.uint32();
                                        break
                                    }
                                    case 15: {
                                        F.status = RA.opentelemetry.proto.trace.v1.Status.decode(Y, Y.uint32());
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
                            if (Y.traceId != null && Y.hasOwnProperty("traceId")) {
                                if (!(Y.traceId && typeof Y.traceId.length === "number" || _A.isString(Y.traceId))) return "traceId: buffer expected"
                            }
                            if (Y.spanId != null && Y.hasOwnProperty("spanId")) {
                                if (!(Y.spanId && typeof Y.spanId.length === "number" || _A.isString(Y.spanId))) return "spanId: buffer expected"
                            }
                            if (Y.traceState != null && Y.hasOwnProperty("traceState")) {
                                if (!_A.isString(Y.traceState)) return "traceState: string expected"
                            }
                            if (Y.parentSpanId != null && Y.hasOwnProperty("parentSpanId")) {
                                if (!(Y.parentSpanId && typeof Y.parentSpanId.length === "number" || _A.isString(Y.parentSpanId))) return "parentSpanId: buffer expected"
                            }
                            if (Y.flags != null && Y.hasOwnProperty("flags")) {
                                if (!_A.isInteger(Y.flags)) return "flags: integer expected"
                            }
                            if (Y.name != null && Y.hasOwnProperty("name")) {
                                if (!_A.isString(Y.name)) return "name: string expected"
                            }
                            if (Y.kind != null && Y.hasOwnProperty("kind")) switch (Y.kind) {
                                default:
                                    return "kind: enum value expected";