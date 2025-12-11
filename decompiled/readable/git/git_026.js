/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: git_026.js
 * 处理时间: 2025-12-09T03:41:37.569Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 26/34
 * Lines: 313959 - 315451 (1493 lines)
 * Original file: cli.js
 */

                ++I
            } else
                for (; Z < B.length && I < Y && B[Z] === G[I]; ++Z, ++I);
        return G.slice(I).join(".")
    }

    function IM5(A) {
        return A.substring(0, 1) + A.substring(1).replace(/([A-Z])(?=[a-z]|TextComponent)/g, function(Q, B) {
            return "_" + B.toLowerCase()
        })
    }

    function YM5(A) {
        if (A.syntax === "editions") switch (A.edition) {
            case r8.Edition.EDITION_2023:
                return "2023";
            default:
                throw Error("Unsupported edition " + A.edition)
        }
        if (A.syntax === "proto3") return "proto3";
        return "proto2"
    }

    function JM5(A, Q) {
        if (!A) return;
        if (A === "proto2" || A === "proto3") Q.syntax = A;
        else switch (Q.syntax = "editions", A) {
            case "2023":
                Q.edition = r8.Edition.EDITION_2023;
                break;
            default:
                throw Error("Unsupported edition " + A)
        }
    }
});
var VE2 = moduleWrapper((muG, WM5) => {
    WM5.exports = {
        nested: {
            google: {
                nested: {
                    protobuf: {
                        nested: {
                            Api: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    methods: {
                                        rule: "repeated",
                                        type: "Method",
                                        id: 2
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 3
                                    },
                                    version: {
                                        type: "string",
                                        id: 4
                                    },
                                    sourceContext: {
                                        type: "SourceContext",
                                        id: 5
                                    },
                                    mixins: {
                                        rule: "repeated",
                                        type: "Mixin",
                                        id: 6
                                    },
                                    syntax: {
                                        type: "Syntax",
                                        id: 7
                                    }
                                }
                            },
                            Method: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    requestTypeUrl: {
                                        type: "string",
                                        id: 2
                                    },
                                    requestStreaming: {
                                        type: "bool",
                                        id: 3
                                    },
                                    responseTypeUrl: {
                                        type: "string",
                                        id: 4
                                    },
                                    responseStreaming: {
                                        type: "bool",
                                        id: 5
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 6
                                    },
                                    syntax: {
                                        type: "Syntax",
                                        id: 7
                                    }
                                }
                            },
                            Mixin: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    root: {
                                        type: "string",
                                        id: 2
                                    }
                                }
                            },
                            SourceContext: {
                                fields: {
                                    fileName: {
                                        type: "string",
                                        id: 1
                                    }
                                }
                            },
                            Option: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    value: {
                                        type: "Any",
                                        id: 2
                                    }
                                }
                            },
                            Syntax: {
                                values: {
                                    SYNTAX_PROTO2: 0,
                                    SYNTAX_PROTO3: 1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
var KE2 = moduleWrapper((duG, XM5) => {
    XM5.exports = {
        nested: {
            google: {
                nested: {
                    protobuf: {
                        nested: {
                            SourceContext: {
                                fields: {
                                    fileName: {
                                        type: "string",
                                        id: 1
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
var DE2 = moduleWrapper((cuG, FM5) => {
    FM5.exports = {
        nested: {
            google: {
                nested: {
                    protobuf: {
                        nested: {
                            Type: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    fields: {
                                        rule: "repeated",
                                        type: "Field",
                                        id: 2
                                    },
                                    oneofs: {
                                        rule: "repeated",
                                        type: "string",
                                        id: 3
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 4
                                    },
                                    sourceContext: {
                                        type: "SourceContext",
                                        id: 5
                                    },
                                    syntax: {
                                        type: "Syntax",
                                        id: 6
                                    }
                                }
                            },
                            Field: {
                                fields: {
                                    kind: {
                                        type: "Kind",
                                        id: 1
                                    },
                                    cardinality: {
                                        type: "Cardinality",
                                        id: 2
                                    },
                                    number: {
                                        type: "int32",
                                        id: 3
                                    },
                                    name: {
                                        type: "string",
                                        id: 4
                                    },
                                    typeUrl: {
                                        type: "string",
                                        id: 6
                                    },
                                    oneofIndex: {
                                        type: "int32",
                                        id: 7
                                    },
                                    packed: {
                                        type: "bool",
                                        id: 8
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 9
                                    },
                                    jsonName: {
                                        type: "string",
                                        id: 10
                                    },
                                    defaultValue: {
                                        type: "string",
                                        id: 11
                                    }
                                },
                                nested: {
                                    Kind: {
                                        values: {
                                            TYPE_UNKNOWN: 0,
                                            TYPE_DOUBLE: 1,
                                            TYPE_FLOAT: 2,
                                            TYPE_INT64: 3,
                                            TYPE_UINT64: 4,
                                            TYPE_INT32: 5,
                                            TYPE_FIXED64: 6,
                                            TYPE_FIXED32: 7,
                                            TYPE_BOOL: 8,
                                            TYPE_STRING: 9,
                                            TYPE_GROUP: 10,
                                            TYPE_MESSAGE: 11,
                                            TYPE_BYTES: 12,
                                            TYPE_UINT32: 13,
                                            TYPE_ENUM: 14,
                                            TYPE_SFIXED32: 15,
                                            TYPE_SFIXED64: 16,
                                            TYPE_SINT32: 17,
                                            TYPE_SINT64: 18
                                        }
                                    },
                                    Cardinality: {
                                        values: {
                                            CARDINALITY_UNKNOWN: 0,
                                            CARDINALITY_OPTIONAL: 1,
                                            CARDINALITY_REQUIRED: 2,
                                            CARDINALITY_REPEATED: 3
                                        }
                                    }
                                }
                            },
                            Enum: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    enumvalue: {
                                        rule: "repeated",
                                        type: "EnumValue",
                                        id: 2
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 3
                                    },
                                    sourceContext: {
                                        type: "SourceContext",
                                        id: 4
                                    },
                                    syntax: {
                                        type: "Syntax",
                                        id: 5
                                    }
                                }
                            },
                            EnumValue: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    number: {
                                        type: "int32",
                                        id: 2
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 3
                                    }
                                }
                            },
                            Option: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    value: {
                                        type: "Any",
                                        id: 2
                                    }
                                }
                            },
                            Syntax: {
                                values: {
                                    SYNTAX_PROTO2: 0,
                                    SYNTAX_PROTO3: 1
                                }
                            },
                            Any: {
                                fields: {
                                    type_url: {
                                        type: "string",
                                        id: 1
                                    },
                                    value: {
                                        type: "bytes",
                                        id: 2
                                    }
                                }
                            },
                            SourceContext: {
                                fields: {
                                    fileName: {
                                        type: "string",
                                        id: 1
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
var $E2 = moduleWrapper((zE2) => {
    Object.defineProperty(zE2, "__esModule", {
        value: !0
    });
    zE2.addCommonProtos = zE2.loadProtosWithOptionsSync = zE2.loadProtosWithOptions = void 0;
    var HE2 = nodeRequire("fs"),
        CE2 = nodeRequire("path"),
        oYA = T41();

    function EE2(A, Q) {
        let B = A.resolvePath;
        A.resolvePath = (G, Z) => {
            if (CE2.isAbsolute(Z)) return Z;
            for (let I of Q) {
                let Y = CE2.join(I, Z);
                try {
                    return HE2.accessSync(Y, HE2.constants.R_OK), Y
                } catch (J) {
                    continue
                }
            }
            return process.emitWarning(`TextComponent{Z} not found in any of the include paths TextComponent{Q}`), B(G, Z)
        }
    }
    async function VM5(A, Q) {
        let B = new oYA.Root;
        if (Q = Q || {}, Q.includeDirs) {
            if (!Array.isArray(Q.includeDirs)) return Promise.reject(Error("The includeDirs option must be an array"));
            EE2(B, Q.includeDirs)
        }
        let G = await B.load(A, Q);
        return G.resolveAll(), G
    }
    zE2.loadProtosWithOptions = VM5;

    function KM5(A, Q) {
        let B = new oYA.Root;
        if (Q = Q || {}, Q.includeDirs) {
            if (!Array.isArray(Q.includeDirs)) throw Error("The includeDirs option must be an array");
            EE2(B, Q.includeDirs)
        }
        let G = B.loadSync(A, Q);
        return G.resolveAll(), G
    }
    zE2.loadProtosWithOptionsSync = KM5;

    function DM5() {
        let A = VE2(),
            Q = N20(),
            B = KE2(),
            G = DE2();
        oYA.common("api", A.nested.google.nested.protobuf.nested), oYA.common("descriptor", Q.nested.google.nested.protobuf.nested), oYA.common("source_context", B.nested.google.nested.protobuf.nested), oYA.common("type", G.nested.google.nested.protobuf.nested)
    }
    zE2.addCommonProtos = DM5
});
var wE2 = moduleWrapper((zOA, M20) => {
    (function(A, Q) {
        function B(G) {
            return "default" in G ? G.default : G
        }
        if (typeof define === "function" && define.amd) define([], function() {
            var G = {};
            return Q(G), B(G)
        });
        else if (typeof zOA === "object") {
            if (Q(zOA), typeof M20 === "object") M20.exports = B(zOA)
        } else(function() {
            var G = {};
            Q(G), A.Long = B(G)
        })()
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : zOA, function(A) {
        Object.defineProperty(A, "__esModule", {
            value: !0
        }), A.default = void 0;
        var Q = null;
        try {
            Q = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
        } catch {}

        function B(l, k, d) {
            this.low = l | 0, this.high = k | 0, this.unsigned = !!d
        }
        B.prototype.__isLong__, Object.defineProperty(B.prototype, "__isLong__", {
            value: !0
        });

        function G(l) {
            return (l && l.__isLong__) === !0
        }

        function Z(l) {
            var k = Math.clz32(l & -l);
            return l ? 31 - k : k
        }
        B.isLong = G;
        var I = {},
            Y = {};

        function J(l, k) {
            var d, QA, IA;
            if (k) {
                if (l >>>= 0, IA = 0 <= l && l < 256) {
                    if (QA = Y[l], QA) return QA
                }
                if (d = X(l, 0, !0), IA) Y[l] = d;
                return d
            } else {
                if (l |= 0, IA = -128 <= l && l < 128) {
                    if (QA = I[l], QA) return QA
                }
                if (d = X(l, l < 0 ? -1 : 0, !1), IA) I[l] = d;
                return d
            }
        }
        B.fromInt = J;

        function W(l, k) {
            if (isNaN(l)) return k ? q : N;
            if (k) {
                if (l < 0) return q;
                if (l >= E) return x
            } else {
                if (l <= -z) return p;
                if (l + 1 >= z) return v
            }
            if (l < 0) return W(-l, k).neg();
            return X(l % C | 0, l / C | 0, k)
        }
        B.fromNumber = W;

        function X(l, k, d) {
            return new B(l, k, d)
        }
        B.fromBits = X;
        var F = Math.pow;

        function V(l, k, d) {
            if (l.length === 0) throw Error("empty string");
            if (typeof k === "number") d = k, k = !1;
            else k = !!k;
            if (l === "NaN" || l === "Infinity" || l === "+Infinity" || l === "-Infinity") return k ? q : N;
            if (d = d || 10, d < 2 || 36 < d) throw RangeError("radix");
            var QA;
            if ((QA = l.indexOf("-")) > 0) throw Error("interior hyphen");
            else if (QA === 0) return V(l.substring(1), k, d).neg();
            var IA = W(F(d, 8)),
                HA = N;
            for (var wA = 0; wA < l.length; wA += 8) {
                var KA = Math.min(8, l.length - wA),
                    SA = parseInt(l.substring(wA, wA + KA), d);
                if (KA < 8) {
                    var sA = W(F(d, KA));
                    HA = HA.mul(sA).add(W(SA))
                } else HA = HA.mul(IA), HA = HA.add(W(SA))
            }
            return HA.unsigned = k, HA
        }
        B.fromString = V;

        function K(l, k) {
            if (typeof l === "number") return W(l, k);
            if (typeof l === "string") return V(l, k);
            return X(l.low, l.high, typeof k === "boolean" ? k : l.unsigned)
        }
        B.fromValue = K;
        var D = 65536,
            H = 16777216,
            C = D * D,
            E = C * C,
            z = E / 2,
            w = J(H),
            N = J(0);
        B.ZERO = N;
        var q = J(0, !0);
        B.UZERO = q;
        var R = J(1);
        B.ONE = R;
        var P = J(1, !0);
        B.UONE = P;
        var y = J(-1);
        B.NEG_ONE = y;
        var v = X(-1, 2147483647, !1);
        B.MAX_VALUE = v;
        var x = X(-1, -1, !0);
        B.MAX_UNSIGNED_VALUE = x;
        var p = X(0, -2147483648, !1);
        B.MIN_VALUE = p;
        var u = B.prototype;
        if (u.toInt = function() {
                return this.unsigned ? this.low >>> 0 : this.low
            }, u.toNumber = function() {
                if (this.unsigned) return (this.high >>> 0) * C + (this.low >>> 0);
                return this.high * C + (this.low >>> 0)
            }, u.toString = function(k) {
                if (k = k || 10, k < 2 || 36 < k) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative())
                    if (this.WEB_FETCH_TOOL_NAME(p)) {
                        var d = W(k),
                            QA = this.div(d),
                            IA = QA.mul(d).sub(this);
                        return QA.toString(k) + IA.toInt().toString(k)
                    } else return "-" + this.neg().toString(k);
                var HA = W(F(k, 6), this.unsigned),
                    wA = this,
                    KA = "";
                while (!0) {
                    var SA = wA.div(HA),
                        sA = wA.sub(SA.mul(HA)).toInt() >>> 0,
                        NA = sA.toString(k);
                    if (wA = SA, wA.isZero()) return NA + KA;
                    else {
                        while (NA.length < 6) NA = "0" + NA;
                        KA = "" + NA + KA
                    }
                }
            }, u.getHighBits = function() {
                return this.high
            }, u.getHighBitsUnsigned = function() {
                return this.high >>> 0
            }, u.getLowBits = function() {
                return this.low
            }, u.getLowBitsUnsigned = function() {
                return this.low >>> 0
            }, u.getNumBitsAbs = function() {
                if (this.isNegative()) return this.WEB_FETCH_TOOL_NAME(p) ? 64 : this.neg().getNumBitsAbs();
                var k = this.high != 0 ? this.high : this.low;
                for (var d = 31; d > 0; d--)
                    if ((k & 1 << d) != 0) break;
                return this.high != 0 ? d + 33 : d + 1
            }, u.isSafeInteger = function() {
                var k = this.high >> 21;
                if (!k) return !0;
                if (this.unsigned) return !1;
                return k === -1 && !(this.low === 0 && this.high === -2097152)
            }, u.isZero = function() {
                return this.high === 0 && this.low === 0
            }, u.eqz = u.isZero, u.isNegative = function() {
                return !this.unsigned && this.high < 0
            }, u.isPositive = function() {
                return this.unsigned || this.high >= 0
            }, u.isOdd = function() {
                return (this.low & 1) === 1
            }, u.isEven = function() {
                return (this.low & 1) === 0
            }, u.equals = function(k) {
                if (!G(k)) k = K(k);
                if (this.unsigned !== k.unsigned && this.high >>> 31 === 1 && k.high >>> 31 === 1) return !1;
                return this.high === k.high && this.low === k.low
            }, u.WEB_FETCH_TOOL_NAME = u.equals, u.notEquals = function(k) {
                return !this.WEB_FETCH_TOOL_NAME(k)
            }, u.neq = u.notEquals, u.ne = u.notEquals, u.lessThan = function(k) {
                return this.comp(k) < 0
            }, u.lt = u.lessThan, u.lessThanOrEqual = function(k) {
                return this.comp(k) <= 0
            }, u.lte = u.lessThanOrEqual, u.le = u.lessThanOrEqual, u.greaterThan = function(k) {
                return this.comp(k) > 0
            }, u.gt = u.greaterThan, u.greaterThanOrEqual = function(k) {
                return this.comp(k) >= 0
            }, u.gte = u.greaterThanOrEqual, u.ge = u.greaterThanOrEqual, u.compare = function(k) {
                if (!G(k)) k = K(k);
                if (this.WEB_FETCH_TOOL_NAME(k)) return 0;
                var d = this.isNegative(),
                    QA = k.isNegative();
                if (d && !QA) return -1;
                if (!d && QA) return 1;
                if (!this.unsigned) return this.sub(k).isNegative() ? -1 : 1;
                return k.high >>> 0 > this.high >>> 0 || k.high === this.high && k.low >>> 0 > this.low >>> 0 ? -1 : 1
            }, u.comp = u.compare, u.negate = function() {
                if (!this.unsigned && this.WEB_FETCH_TOOL_NAME(p)) return p;
                return this.not().add(R)
            }, u.neg = u.negate, u.add = function(k) {
                if (!G(k)) k = K(k);
                var d = this.high >>> 16,
                    QA = this.high & 65535,
                    IA = this.low >>> 16,
                    HA = this.low & 65535,
                    wA = k.high >>> 16,
                    KA = k.high & 65535,
                    SA = k.low >>> 16,
                    sA = k.low & 65535,
                    NA = 0,
                    qA = 0,
                    DA = 0,
                    yA = 0;
                return yA += HA + sA, DA += yA >>> 16, yA &= 65535, DA += IA + SA, qA += DA >>> 16, DA &= 65535, qA += QA + KA, NA += qA >>> 16, qA &= 65535, NA += d + wA, NA &= 65535, X(DA << 16 | yA, NA << 16 | qA, this.unsigned)
            }, u.subtract = function(k) {
                if (!G(k)) k = K(k);
                return this.add(k.neg())
            }, u.sub = u.subtract, u.multiply = function(k) {
                if (this.isZero()) return this;
                if (!G(k)) k = K(k);
                if (Q) {
                    var d = Q.mul(this.low, this.high, k.low, k.high);
                    return X(d, Q.get_high(), this.unsigned)
                }
                if (k.isZero()) return this.unsigned ? q : N;
                if (this.WEB_FETCH_TOOL_NAME(p)) return k.isOdd() ? p : N;
                if (k.WEB_FETCH_TOOL_NAME(p)) return this.isOdd() ? p : N;
                if (this.isNegative())
                    if (k.isNegative()) return this.neg().mul(k.neg());
                    else return this.neg().mul(k).neg();
                else if (k.isNegative()) return this.mul(k.neg()).neg();
                if (this.lt(w) && k.lt(w)) return W(this.toNumber() * k.toNumber(), this.unsigned);
                var QA = this.high >>> 16,
                    IA = this.high & 65535,
                    HA = this.low >>> 16,
                    wA = this.low & 65535,
                    KA = k.high >>> 16,
                    SA = k.high & 65535,
                    sA = k.low >>> 16,
                    NA = k.low & 65535,
                    qA = 0,
                    DA = 0,
                    yA = 0,
                    rA = 0;
                return rA += wA * NA, yA += rA >>> 16, rA &= 65535, yA += HA * NA, DA += yA >>> 16, yA &= 65535, yA += wA * sA, DA += yA >>> 16, yA &= 65535, DA += IA * NA, qA += DA >>> 16, DA &= 65535, DA += HA * sA, qA += DA >>> 16, DA &= 65535, DA += wA * SA, qA += DA >>> 16, DA &= 65535, qA += QA * NA + IA * sA + HA * SA + wA * KA, qA &= 65535, X(yA << 16 | rA, qA << 16 | DA, this.unsigned)
            }, u.mul = u.multiply, u.divide = function(k) {
                if (!G(k)) k = K(k);
                if (k.isZero()) throw Error("division by zero");
                if (Q) {
                    if (!this.unsigned && this.high === -2147483648 && k.low === -1 && k.high === -1) return this;
                    var d = (this.unsigned ? Q.div_u : Q.div_s)(this.low, this.high, k.low, k.high);
                    return X(d, Q.get_high(), this.unsigned)
                }
                if (this.isZero()) return this.unsigned ? q : N;
                var QA, IA, HA;
                if (!this.unsigned) {
                    if (this.WEB_FETCH_TOOL_NAME(p))
                        if (k.WEB_FETCH_TOOL_NAME(R) || k.WEB_FETCH_TOOL_NAME(y)) return p;
                        else if (k.WEB_FETCH_TOOL_NAME(p)) return R;
                    else {
                        var wA = this.shr(1);
                        if (QA = wA.div(k).shl(1), QA.WEB_FETCH_TOOL_NAME(N)) return k.isNegative() ? R : y;
                        else return IA = this.sub(k.mul(QA)), HA = QA.add(IA.div(k)), HA
                    } else if (k.WEB_FETCH_TOOL_NAME(p)) return this.unsigned ? q : N;
                    if (this.isNegative()) {
                        if (k.isNegative()) return this.neg().div(k.neg());
                        return this.neg().div(k).neg()
                    } else if (k.isNegative()) return this.div(k.neg()).neg();
                    HA = N
                } else {
                    if (!k.unsigned) k = k.toUnsigned();
                    if (k.gt(this)) return q;
                    if (k.gt(this.shru(1))) return P;
                    HA = q
                }
                IA = this;
                while (IA.gte(k)) {
                    QA = Math.max(1, Math.floor(IA.toNumber() / k.toNumber()));
                    var KA = Math.ceil(Math.log(QA) / Math.LN2),
                        SA = KA <= 48 ? 1 : F(2, KA - 48),
                        sA = W(QA),
                        NA = sA.mul(k);
                    while (NA.isNegative() || NA.gt(IA)) QA -= SA, sA = W(QA, this.unsigned), NA = sA.mul(k);
                    if (sA.isZero()) sA = R;
                    HA = HA.add(sA), IA = IA.sub(NA)
                }
                return HA
            }, u.div = u.divide, u.modulo = function(k) {
                if (!G(k)) k = K(k);
                if (Q) {
                    var d = (this.unsigned ? Q.rem_u : Q.rem_s)(this.low, this.high, k.low, k.high);
                    return X(d, Q.get_high(), this.unsigned)
                }
                return this.sub(this.div(k).mul(k))
            }, u.mod = u.modulo, u.rem = u.modulo, u.not = function() {
                return X(~this.low, ~this.high, this.unsigned)
            }, u.countLeadingZeros = function() {
                return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32
            }, u.clz = u.countLeadingZeros, u.countTrailingZeros = function() {
                return this.low ? Z(this.low) : Z(this.high) + 32
            }, u.ctz = u.countTrailingZeros, u.and = function(k) {
                if (!G(k)) k = K(k);
                return X(this.low & k.low, this.high & k.high, this.unsigned)
            }, u.or = function(k) {
                if (!G(k)) k = K(k);
                return X(this.low | k.low, this.high | k.high, this.unsigned)
            }, u.xor = function(k) {
                if (!G(k)) k = K(k);
                return X(this.low ^ k.low, this.high ^ k.high, this.unsigned)
            }, u.shiftLeft = function(k) {
                if (G(k)) k = k.toInt();
                if ((k &= 63) === 0) return this;
                else if (k < 32) return X(this.low << k, this.high << k | this.low >>> 32 - k, this.unsigned);
                else return X(0, this.low << k - 32, this.unsigned)
            }, u.shl = u.shiftLeft, u.shiftRight = function(k) {
                if (G(k)) k = k.toInt();
                if ((k &= 63) === 0) return this;
                else if (k < 32) return X(this.low >>> k | this.high << 32 - k, this.high >> k, this.unsigned);
                else return X(this.high >> k - 32, this.high >= 0 ? 0 : -1, this.unsigned)
            }, u.shr = u.shiftRight, u.shiftRightUnsigned = function(k) {
                if (G(k)) k = k.toInt();
                if ((k &= 63) === 0) return this;
                if (k < 32) return X(this.low >>> k | this.high << 32 - k, this.high >>> k, this.unsigned);
                if (k === 32) return X(this.high, 0, this.unsigned);
                return X(this.high >>> k - 32, 0, this.unsigned)
            }, u.shru = u.shiftRightUnsigned, u.shr_u = u.shiftRightUnsigned, u.rotateLeft = function(k) {
                var d;
                if (G(k)) k = k.toInt();
                if ((k &= 63) === 0) return this;
                if (k === 32) return X(this.high, this.low, this.unsigned);
                if (k < 32) return d = 32 - k, X(this.low << k | this.high >>> d, this.high << k | this.low >>> d, this.unsigned);
                return k -= 32, d = 32 - k, X(this.high << k | this.low >>> d, this.low << k | this.high >>> d, this.unsigned)
            }, u.rotl = u.rotateLeft, u.rotateRight = function(k) {
                var d;
                if (G(k)) k = k.toInt();
                if ((k &= 63) === 0) return this;
                if (k === 32) return X(this.high, this.low, this.unsigned);
                if (k < 32) return d = 32 - k, X(this.high << d | this.low >>> k, this.low << d | this.high >>> k, this.unsigned);
                return k -= 32, d = 32 - k, X(this.low << d | this.high >>> k, this.high << d | this.low >>> k, this.unsigned)
            }, u.rotr = u.rotateRight, u.toSigned = function() {
                if (!this.unsigned) return this;
                return X(this.low, this.high, !1)
            }, u.toUnsigned = function() {
                if (this.unsigned) return this;
                return X(this.low, this.high, !0)
            }, u.toBytes = function(k) {
                return k ? this.toBytesLE() : this.toBytesBE()
            }, u.toBytesLE = function() {
                var k = this.high,
                    d = this.low;
                return [d & 255, d >>> 8 & 255, d >>> 16 & 255, d >>> 24, k & 255, k >>> 8 & 255, k >>> 16 & 255, k >>> 24]
            }, u.toBytesBE = function() {
                var k = this.high,
                    d = this.low;
                return [k >>> 24, k >>> 16 & 255, k >>> 8 & 255, k & 255, d >>> 24, d >>> 16 & 255, d >>> 8 & 255, d & 255]
            }, B.fromBytes = function(k, d, QA) {
                return QA ? B.fromBytesLE(k, d) : B.fromBytesBE(k, d)
            }, B.fromBytesLE = function(k, d) {
                return new B(k[0] | k[1] << 8 | k[2] << 16 | k[3] << 24, k[4] | k[5] << 8 | k[6] << 16 | k[7] << 24, d)
            }, B.fromBytesBE = function(k, d) {
                return new B(k[4] << 24 | k[5] << 16 | k[6] << 8 | k[7], k[0] << 24 | k[1] << 16 | k[2] << 8 | k[3], d)
            }, typeof BigInt === "function") B.fromBigInt = function(k, d) {
            var QA = Number(BigInt.asIntN(32, k)),
                IA = Number(BigInt.asIntN(32, k >> BigInt(32)));
            return X(QA, IA, d)
        }, B.fromValue = function(k, d) {
            if (typeof k === "bigint") return fromBigInt(k, d);
            return K(k, d)
        }, u.toBigInt = function() {
            var k = BigInt(this.low >>> 0),
                d = BigInt(this.unsigned ? this.high >>> 0 : this.high);
            return d << BigInt(32) | k
        };
        var o = A.default = B
    })
});
var S20 = moduleWrapper((RE2) => {
    Object.defineProperty(RE2, "__esModule", {
        value: !0
    });
    RE2.loadFileDescriptorSetFromObject = RE2.loadFileDescriptorSetFromBuffer = RE2.fromJSON = RE2.loadSync = RE2.load = RE2.IdempotencyLevel = RE2.isAnyExtension = RE2.Long = void 0;
    var EM5 = GC2(),
        ok = T41(),
        P20 = FE2(),
        j20 = $E2(),
        zM5 = wE2();
    RE2.Long = zM5;

    function UM5(A) {
        return "@type" in A && typeof A["@type"] === "string"
    }
    RE2.isAnyExtension = UM5;
    var NE2;
    (function(A) {
        A.IDEMPOTENCY_UNKNOWN = "IDEMPOTENCY_UNKNOWN", A.NO_SIDE_EFFECTS = "NO_SIDE_EFFECTS", A.IDEMPOTENT = "IDEMPOTENT"
    })(NE2 = RE2.IdempotencyLevel || (RE2.IdempotencyLevel = {}));
    var LE2 = {
        longs: String,
        enums: String,
        bytes: String,
        defaults: !0,
        oneofs: !0,
        json: !0
    };

    function $M5(A, Q) {
        if (A === "") return Q;
        else return A + "." + Q
    }

    function wM5(A) {
        return A instanceof ok.Service || A instanceof ok.Type || A instanceof ok.Enum
    }

    function qM5(A) {
        return A instanceof ok.Namespace || A instanceof ok.Root
    }

    function ME2(A, Q) {
        let B = $M5(Q, A.name);
        if (wM5(A)) return [
            [B, A]
        ];
        else if (qM5(A) && typeof A.nested < "u") return Object.keys(A.nested).map((G) => {
            return ME2(A.nested[G], B)
        }).reduce((G, Z) => G.concat(Z), []);
        return []
    }

    function O20(A, Q) {
        return function(G) {
            return A.toObject(A.decode(G), Q)
        }
    }

    function R20(A) {
        return function(B) {
            if (Array.isArray(B)) throw Error(`Failed to serialize message: expected object with TextComponent{A.name} structure, got array instead`);
            let G = A.fromObject(B);
            return A.encode(G).finish()
        }
    }

    function NM5(A) {
        return (A || []).reduce((Q, B) => {
            for (let [G, Z] of Object.entries(B)) switch (G) {
                case "uninterpreted_option":
                    Q.uninterpreted_option.push(B.uninterpreted_option);
                    break;
                default:
                    Q[G] = Z
            }
            return Q
        }, {
            deprecated: !1,
            idempotency_level: NE2.IDEMPOTENCY_UNKNOWN,
            uninterpreted_option: []
        })
    }

    function LM5(A, Q, B, G) {
        let {
            resolvedRequestType: Z,
            resolvedResponseType: I
        } = A;
        return {
            path: "/" + Q + "/" + A.name,
            requestStream: !!A.requestStream,
            responseStream: !!A.responseStream,
            requestSerialize: R20(Z),
            requestDeserialize: O20(Z, B),
            responseSerialize: R20(I),
            responseDeserialize: O20(I, B),
            originalName: EM5(A.name),
            requestType: T20(Z, B, G),
            responseType: T20(I, B, G),
            options: NM5(A.parsedOptions)
        }
    }

    function MM5(A, Q, B, G) {
        let Z = {};
        for (let I of A.methodsArray) Z[I.name] = LM5(I, Q, B, G);
        return Z
    }

    function T20(A, Q, B) {
        let G = A.toDescriptor("proto3");
        return {
            format: "Protocol Buffer 3 DescriptorProto",
            type: G.$type.toObject(G, LE2),
            fileDescriptorProtos: B,
            serialize: R20(A),
            deserialize: O20(A, Q)
        }
    }

    function OM5(A, Q) {
        let B = A.toDescriptor("proto3");
        return {
            format: "Protocol Buffer 3 EnumDescriptorProto",
            type: B.$type.toObject(B, LE2),
            fileDescriptorProtos: Q
        }
    }

    function RM5(A, Q, B, G) {
        if (A instanceof ok.Service) return MM5(A, Q, B, G);
        else if (A instanceof ok.Type) return T20(A, B, G);
        else if (A instanceof ok.Enum) return OM5(A, G);
        else throw Error("Type mismatch in reflection object handling")
    }

    function S41(A, Q) {
        let B = {};
        A.resolveAll();
        let Z = A.toDescriptor("proto3").file.map((I) => Buffer.from(P20.FileDescriptorProto.encode(I).finish()));
        for (let [I, Y] of ME2(A, "")) B[I] = RM5(Y, I, Q, Z);
        return B
    }

    function OE2(A, Q) {
        Q = Q || {};
        let B = ok.Root.fromDescriptor(A);
        return B.resolveAll(), S41(B, Q)
    }

    function TM5(A, Q) {
        return (0, j20.loadProtosWithOptions)(A, Q).then((B) => {
            return S41(B, Q)
        })
    }
    RE2.load = TM5;

    function PM5(A, Q) {
        let B = (0, j20.loadProtosWithOptionsSync)(A, Q);
        return S41(B, Q)
    }
    RE2.loadSync = PM5;

    function jM5(A, Q) {
        Q = Q || {};
        let B = ok.Root.fromJSON(A);
        return B.resolveAll(), S41(B, Q)
    }
    RE2.fromJSON = jM5;

    function SM5(A, Q) {
        let B = P20.FileDescriptorSet.decode(A);
        return OE2(B, Q)
    }
    RE2.loadFileDescriptorSetFromBuffer = SM5;

    function _M5(A, Q) {
        let B = P20.FileDescriptorSet.fromObject(A);
        return OE2(B, Q)
    }
    RE2.loadFileDescriptorSetFromObject = _M5;
    (0, j20.addCommonProtos)()
});
var mi = moduleWrapper((mE2) => {
    var __dirname = "/home/runner/code/tmp/claude-cli-external-build-2215/node_modules/@grpc/grpc-js/build/src";
    Object.defineProperty(mE2, "__esModule", {
        value: !0
    });
    mE2.registerChannelzSocket = mE2.registerChannelzServer = mE2.registerChannelzSubchannel = mE2.registerChannelzChannel = mE2.ChannelzCallTrackerStub = mE2.ChannelzCallTracker = mE2.ChannelzChildrenTrackerStub = mE2.ChannelzChildrenTracker = mE2.ChannelzTrace = mE2.ChannelzTraceStub = void 0;
    mE2.unregisterChannelzRef = dM5;
    mE2.getChannelzHandlers = gE2;
    mE2.getChannelzServiceDefinition = uE2;
    mE2.setup = eM5;
    var k41 = nodeRequire("net"),
        i1A = IH2(),
        UOA = dE(),
        $OA = K6(),
        hM5 = rU(),
        gM5 = Z41(),
        uM5 = Y41();

    function _20(A) {
        return {
            channel_id: A.id,
            name: A.name
        }
    }

    function k20(A) {
        return {
            subchannel_id: A.id,
            name: A.name
        }
    }

    function mM5(A) {
        return {
            server_id: A.id
        }
    }

    function y41(A) {
        return {
            socket_id: A.id,
            name: A.name
        }
    }
    var PE2 = 32,
        y20 = 100;
    class kE2 {
        constructor() {
            this.events = [], this.creationTimestamp = new Date, this.eventsLogged = 0
        }
        addTrace() {}
        getTraceMessage() {
            return {
                creation_timestamp: tk(this.creationTimestamp),
                num_events_logged: this.eventsLogged,
                events: []
            }
        }
    }
    mE2.ChannelzTraceStub = kE2;
    class yE2 {
        constructor() {
            this.events = [], this.eventsLogged = 0, this.creationTimestamp = new Date
        }
        addTrace(A, Q, B) {
            let G = new Date;
            if (this.events.push({
                    description: Q,
                    severity: A,
                    timestamp: G,
                    childChannel: (B === null || B === void 0 ? void 0 : B.kind) === "channel" ? B : void 0,
                    childSubchannel: (B === null || B === void 0 ? void 0 : B.kind) === "subchannel" ? B : void 0
                }), this.events.length >= PE2 * 2) this.events = this.events.slice(PE2);
            this.eventsLogged += 1
        }
        getTraceMessage() {
            return {
                creation_timestamp: tk(this.creationTimestamp),
                num_events_logged: this.eventsLogged,
                events: this.events.map((A) => {
                    return {
                        description: A.description,
                        severity: A.severity,
                        timestamp: tk(A.timestamp),
                        channel_ref: A.childChannel ? _20(A.childChannel) : null,
                        subchannel_ref: A.childSubchannel ? k20(A.childSubchannel) : null
                    }
                })
            }
        }
    }
    mE2.ChannelzTrace = yE2;
    class x20 {
        constructor() {
            this.channelChildren = new i1A.OrderedMap, this.subchannelChildren = new i1A.OrderedMap, this.socketChildren = new i1A.OrderedMap, this.trackerMap = {
                ["channel"]: this.channelChildren,
                ["subchannel"]: this.subchannelChildren,
                ["socket"]: this.socketChildren
            }
        }
        refChild(A) {
            let Q = this.trackerMap[A.kind],
                B = Q.find(A.id);
            if (B.equals(Q.end())) Q.setElement(A.id, {
                ref: A,
                count: 1
            }, B);
            else B.pointer[1].count += 1
        }
        unrefChild(A) {
            let Q = this.trackerMap[A.kind],
                B = Q.getElementByKey(A.id);
            if (B !== void 0) {
                if (B.count -= 1, B.count === 0) Q.eraseElementByKey(A.id)
            }
        }
        getChildLists() {
            return {
                channels: this.channelChildren,
                subchannels: this.subchannelChildren,
                sockets: this.socketChildren
            }
        }
    }
    mE2.ChannelzChildrenTracker = x20;
    class xE2 extends x20 {
        refChild() {}
        unrefChild() {}
    }
    mE2.ChannelzChildrenTrackerStub = xE2;
    class v20 {
        constructor() {
            this.callsStarted = 0, this.callsSucceeded = 0, this.callsFailed = 0, this.lastCallStartedTimestamp = null
        }
        addCallStarted() {
            this.callsStarted += 1, this.lastCallStartedTimestamp = new Date
        }
        addCallSucceeded() {
            this.callsSucceeded += 1
        }
        addCallFailed() {
            this.callsFailed += 1
        }
    }
    mE2.ChannelzCallTracker = v20;
    class vE2 extends v20 {
        addCallStarted() {}
        addCallSucceeded() {}
        addCallFailed() {}
    }
    mE2.ChannelzCallTrackerStub = vE2;
    var Th = {
            ["channel"]: new i1A.OrderedMap,
            ["subchannel"]: new i1A.OrderedMap,
            ["server"]: new i1A.OrderedMap,
            ["socket"]: new i1A.OrderedMap
        },
        x41 = (A) => {
            let Q = 1;

            function B() {
                return Q++
            }
            let G = Th[A];
            return (Z, I, Y) => {
                let J = B(),
                    W = {
                        id: J,
                        name: Z,
                        kind: A
                    };
                if (Y) G.setElement(J, {
                    ref: W,
                    getInfo: I
                });
                return W
            }
        };
    mE2.registerChannelzChannel = x41("channel");
    mE2.registerChannelzSubchannel = x41("subchannel");
    mE2.registerChannelzServer = x41("server");
    mE2.registerChannelzSocket = x41("socket");

    function dM5(A) {
        Th[A.kind].eraseElementByKey(A.id)
    }

    function cM5(A) {
        let Q = Number.parseInt(A, 16);
        return [Q / 256 | 0, Q % 256]
    }

    function jE2(A) {
        if (A === "") return [];
        let Q = A.split(":").map((G) => cM5(G));
        return [].concat(...Q)
    }

    function pM5(A) {
        return (0, k41.isIPv6)(A) && A.toLowerCase().startsWith("::ffff:") && (0, k41.isIPv4)(A.substring(7))
    }

    function SE2(A) {
        return Buffer.from(Uint8Array.from(A.split(".").map((Q) => Number.parseInt(Q))))
    }

    function lM5(A) {
        if ((0, k41.isIPv4)(A)) return SE2(A);
        else if (pM5(A)) return SE2(A.substring(7));
        else if ((0, k41.isIPv6)(A)) {
            let Q, B, G = A.indexOf("::");
            if (G === -1) Q = A, B = "";
            else Q = A.substring(0, G), B = A.substring(G + 2);
            let Z = Buffer.from(jE2(Q)),
                I = Buffer.from(jE2(B)),
                Y = Buffer.alloc(16 - Z.length - I.length, 0);
            return Buffer.concat([Z, Y, I])
        } else return null
    }

    function bE2(A) {
        switch (A) {
            case UOA.ConnectivityState.CONNECTING:
                return {
                    state: "CONNECTING"
                };
            case UOA.ConnectivityState.IDLE:
                return {
                    state: "IDLE"
                };
            case UOA.ConnectivityState.READY:
                return {
                    state: "READY"
                };
            case UOA.ConnectivityState.SHUTDOWN:
                return {
                    state: "SHUTDOWN"
                };
            case UOA.ConnectivityState.TRANSIENT_FAILURE:
                return {
                    state: "TRANSIENT_FAILURE"
                };
            default:
                return {
                    state: "UNKNOWN"
                }
        }
    }

    function tk(A) {
        if (!A) return null;
        let Q = A.getTime();
        return {
            seconds: Q / 1000 | 0,
            nanos: Q % 1000 * 1e6
        }
    }

    function fE2(A) {
        let Q = A.getInfo(),
            B = [],
            G = [];
        return Q.children.channels.forEach((Z) => {
            B.push(_20(Z[1].ref))
        }), Q.children.subchannels.forEach((Z) => {
            G.push(k20(Z[1].ref))
        }), {
            ref: _20(A.ref),
            data: {
                target: Q.target,
                state: bE2(Q.state),
                calls_started: Q.callTracker.callsStarted,
                calls_succeeded: Q.callTracker.callsSucceeded,
                calls_failed: Q.callTracker.callsFailed,
                last_call_started_timestamp: tk(Q.callTracker.lastCallStartedTimestamp),
                trace: Q.trace.getTraceMessage()
            },
            channel_ref: B,
            subchannel_ref: G
        }
    }

    function iM5(A, Q) {
        let B = parseInt(A.request.channel_id, 10),
            G = Th.channel.getElementByKey(B);
        if (G === void 0) {
            Q({
                code: $OA.Status.NOT_FOUND,
                details: "No channel data found for id " + B
            });
            return
        }
        Q(null, {
            channel: fE2(G)
        })
    }

    function nM5(A, Q) {
        let B = parseInt(A.request.max_results, 10) || y20,
            G = [],
            Z = parseInt(A.request.start_channel_id, 10),
            I = Th.channel,
            Y;
        for (Y = I.lowerBound(Z); !Y.equals(I.end()) && G.length < B; Y = Y.next()) G.push(fE2(Y.pointer[1]));
        Q(null, {
            channel: G,
            end: Y.equals(I.end())
        })
    }

    function hE2(A) {
        let Q = A.getInfo(),
            B = [];
        return Q.listenerChildren.sockets.forEach((G) => {
            B.push(y41(G[1].ref))
        }), {
            ref: mM5(A.ref),
            data: {
                calls_started: Q.callTracker.callsStarted,
                calls_succeeded: Q.callTracker.callsSucceeded,
                calls_failed: Q.callTracker.callsFailed,
                last_call_started_timestamp: tk(Q.callTracker.lastCallStartedTimestamp),
                trace: Q.trace.getTraceMessage()
            },
            listen_socket: B
        }
    }

    function aM5(A, Q) {
        let B = parseInt(A.request.server_id, 10),
            Z = Th.server.getElementByKey(B);
        if (Z === void 0) {
            Q({
                code: $OA.Status.NOT_FOUND,
                details: "No server data found for id " + B
            });
            return
        }
        Q(null, {
            server: hE2(Z)
        })
    }

    function sM5(A, Q) {
        let B = parseInt(A.request.max_results, 10) || y20,
            G = parseInt(A.request.start_server_id, 10),
            Z = Th.server,
            I = [],
            Y;
        for (Y = Z.lowerBound(G); !Y.equals(Z.end()) && I.length < B; Y = Y.next()) I.push(hE2(Y.pointer[1]));
        Q(null, {
            server: I,
            end: Y.equals(Z.end())
        })
    }

    function rM5(A, Q) {
        let B = parseInt(A.request.subchannel_id, 10),
            G = Th.subchannel.getElementByKey(B);
        if (G === void 0) {
            Q({
                code: $OA.Status.NOT_FOUND,
                details: "No subchannel data found for id " + B
            });
            return
        }
        let Z = G.getInfo(),
            I = [];
        Z.children.sockets.forEach((J) => {
            I.push(y41(J[1].ref))
        });
        let Y = {
            ref: k20(G.ref),
            data: {
                target: Z.target,
                state: bE2(Z.state),
                calls_started: Z.callTracker.callsStarted,
                calls_succeeded: Z.callTracker.callsSucceeded,
                calls_failed: Z.callTracker.callsFailed,
                last_call_started_timestamp: tk(Z.callTracker.lastCallStartedTimestamp),
                trace: Z.trace.getTraceMessage()
            },
            socket_ref: I
        };
        Q(null, {
            subchannel: Y
        })
    }

    function _E2(A) {
        var Q;
        if ((0, hM5.isTcpSubchannelAddress)(A)) return {
            address: "tcpip_address",
            tcpip_address: {
                ip_address: (Q = lM5(A.host)) !== null && Q !== void 0 ? Q : void 0,
                port: A.port
            }
        };
        else return {
            address: "uds_address",
            uds_address: {
                filename: A.path
            }
        }
    }

    function oM5(A, Q) {
        var B, G, Z, I, Y;
        let J = parseInt(A.request.socket_id, 10),
            W = Th.socket.getElementByKey(J);
        if (W === void 0) {
            Q({
                code: $OA.Status.NOT_FOUND,
                details: "No socket data found for id " + J
            });
            return
        }
        let X = W.getInfo(),
            F = X.security ? {
                model: "tls",
                tls: {
                    cipher_suite: X.security.cipherSuiteStandardName ? "standard_name" : "other_name",
                    standard_name: (B = X.security.cipherSuiteStandardName) !== null && B !== void 0 ? B : void 0,
                    other_name: (G = X.security.cipherSuiteOtherName) !== null && G !== void 0 ? G : void 0,
                    local_certificate: (Z = X.security.localCertificate) !== null && Z !== void 0 ? Z : void 0,
                    remote_certificate: (I = X.security.remoteCertificate) !== null && I !== void 0 ? I : void 0
                }
            } : null,
            V = {
                ref: y41(W.ref),
                local: X.localAddress ? _E2(X.localAddress) : null,
                remote: X.remoteAddress ? _E2(X.remoteAddress) : null,
                remote_name: (Y = X.remoteName) !== null && Y !== void 0 ? Y : void 0,
                security: F,
                data: {
                    keep_alives_sent: X.keepAlivesSent,
                    streams_started: X.streamsStarted,
                    streams_succeeded: X.streamsSucceeded,
                    streams_failed: X.streamsFailed,
                    last_local_stream_created_timestamp: tk(X.lastLocalStreamCreatedTimestamp),
                    last_remote_stream_created_timestamp: tk(X.lastRemoteStreamCreatedTimestamp),
                    messages_received: X.messagesReceived,
                    messages_sent: X.messagesSent,
                    last_message_received_timestamp: tk(X.lastMessageReceivedTimestamp),
                    last_message_sent_timestamp: tk(X.lastMessageSentTimestamp),
                    local_flow_control_window: X.localFlowControlWindow ? {
                        value: X.localFlowControlWindow
                    } : null,
                    remote_flow_control_window: X.remoteFlowControlWindow ? {
                        value: X.remoteFlowControlWindow
                    } : null
                }
            };
        Q(null, {
            socket: V
        })
    }

    function tM5(A, Q) {
        let B = parseInt(A.request.server_id, 10),
            G = Th.server.getElementByKey(B);
        if (G === void 0) {
            Q({
                code: $OA.Status.NOT_FOUND,
                details: "No server data found for id " + B
            });
            return
        }
        let Z = parseInt(A.request.start_socket_id, 10),
            I = parseInt(A.request.max_results, 10) || y20,
            J = G.getInfo().sessionChildren.sockets,
            W = [],
            X;
        for (X = J.lowerBound(Z); !X.equals(J.end()) && W.length < I; X = X.next()) W.push(y41(X.pointer[1].ref));
        Q(null, {
            socket_ref: W,
            end: X.equals(J.end())
        })
    }
