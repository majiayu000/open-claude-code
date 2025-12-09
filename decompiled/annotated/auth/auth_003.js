/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: auth_003.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (50次) = moduleWrapper(fn) - CommonJS module wrapper
 *   L        (19次) = lazyLoader(fn) - Lazy module loader
 *   UA       (7次) = require(moduleName) - Node.js require
 *   GA       (1次) = esmImport(module) - ESM import helper
 *   pG       (1次) = esmExport(obj, key) - ESM export binding
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 3/61
 * Lines: 11992 - 13491 (1500 lines)
 * Original file: cli.js
 */

    function GT9(A) {
        var Q = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
        if (Q) Q(A);
        else setTimeout(A, 0)
    }
});
var HX1 = U((fp3, Rz0) => {
    var Oz0 = Mz0();
    Rz0.exports = ZT9;

    function ZT9(A) {
        var Q = !1;
        return Oz0(function() {
                Q = !0
            }),
            function(G, Z) {
                if (Q) A(G, Z);
                else Oz0(function() {
                    A(G, Z)
                })
            }
    }
});
var CX1 = U((hp3, Tz0) => {
    Tz0.exports = IT9;

    function IT9(A) {
        Object.keys(A.jobs).forEach(YT9.bind(A)), A.jobs = {}
    }

    function YT9(A) {
        if (typeof this.jobs[A] == "function") this.jobs[A]()
    }
});
var EX1 = U((gp3, jz0) => {
    var Pz0 = HX1(),
        JT9 = CX1();
    jz0.exports = WT9;

    function WT9(A, Q, B, G) {
        var Z = B.keyedList ? B.keyedList[B.index] : B.index;
        B.jobs[Z] = XT9(Q, Z, A[Z], function(I, Y) {
            if (!(Z in B.jobs)) return;
            if (delete B.jobs[Z], I) JT9(B);
            else B.results[Z] = Y;
            G(I, B.results)
        })
    }

    function XT9(A, Q, B, G) {
        var Z;
        if (A.length == 2) Z = A(B, Pz0(G));
        else Z = A(B, Q, Pz0(G));
        return Z
    }
});
var zX1 = U((up3, Sz0) => {
    Sz0.exports = FT9;

    function FT9(A, Q) {
        var B = !Array.isArray(A),
            G = {
                index: 0,
                keyedList: B || Q ? Object.keys(A) : null,
                jobs: {},
                results: B ? {} : [],
                size: B ? Object.keys(A).length : A.length
            };
        if (Q) G.keyedList.sort(B ? Q : function(Z, I) {
            return Q(A[Z], A[I])
        });
        return G
    }
});
var UX1 = U((mp3, _z0) => {
    var VT9 = CX1(),
        KT9 = HX1();
    _z0.exports = DT9;

    function DT9(A) {
        if (!Object.keys(this.jobs).length) return;
        this.index = this.size, VT9(this), KT9(A)(null, this.results)
    }
});
var yz0 = U((dp3, kz0) => {
    var HT9 = EX1(),
        CT9 = zX1(),
        ET9 = UX1();
    kz0.exports = zT9;

    function zT9(A, Q, B) {
        var G = CT9(A);
        while (G.index < (G.keyedList || A).length) HT9(A, Q, G, function(Z, I) {
            if (Z) {
                B(Z, I);
                return
            }
            if (Object.keys(G.jobs).length === 0) {
                B(null, G.results);
                return
            }
        }), G.index++;
        return ET9.bind(G, B)
    }
});
var $X1 = U((cp3, CkA) => {
    var xz0 = EX1(),
        UT9 = zX1(),
        $T9 = UX1();
    CkA.exports = wT9;
    CkA.exports.ascending = vz0;
    CkA.exports.descending = qT9;

    function wT9(A, Q, B, G) {
        var Z = UT9(A, B);
        return xz0(A, Q, Z, function I(Y, J) {
            if (Y) {
                G(Y, J);
                return
            }
            if (Z.index++, Z.index < (Z.keyedList || A).length) {
                xz0(A, Q, Z, I);
                return
            }
            G(null, Z.results)
        }), $T9.bind(Z, G)
    }

    function vz0(A, Q) {
        return A < Q ? -1 : A > Q ? 1 : 0
    }

    function qT9(A, Q) {
        return -1 * vz0(A, Q)
    }
});
var fz0 = U((pp3, bz0) => {
    var NT9 = $X1();
    bz0.exports = LT9;

    function LT9(A, Q, B) {
        return NT9(A, Q, null, B)
    }
});
var gz0 = U((lp3, hz0) => {
    hz0.exports = {
        parallel: yz0(),
        serial: fz0(),
        serialOrdered: $X1()
    }
});
var wX1 = U((ip3, uz0) => {
    uz0.exports = Object
});
var dz0 = U((np3, mz0) => {
    mz0.exports = Error
});
var pz0 = U((ap3, cz0) => {
    cz0.exports = EvalError
});
var iz0 = U((sp3, lz0) => {
    lz0.exports = RangeError
});
var az0 = U((rp3, nz0) => {
    nz0.exports = ReferenceError
});
var rz0 = U((op3, sz0) => {
    sz0.exports = SyntaxError
});
var EkA = U((tp3, oz0) => {
    oz0.exports = TypeError
});
var ez0 = U((ep3, tz0) => {
    tz0.exports = URIError
});
var QU0 = U((Al3, AU0) => {
    AU0.exports = Math.abs
});
var GU0 = U((Ql3, BU0) => {
    BU0.exports = Math.floor
});
var IU0 = U((Bl3, ZU0) => {
    ZU0.exports = Math.max
});
var JU0 = U((Gl3, YU0) => {
    YU0.exports = Math.min
});
var XU0 = U((Zl3, WU0) => {
    WU0.exports = Math.pow
});
var VU0 = U((Il3, FU0) => {
    FU0.exports = Math.round
});
var DU0 = U((Yl3, KU0) => {
    KU0.exports = Number.isNaN || function(Q) {
        return Q !== Q
    }
});
var CU0 = U((Jl3, HU0) => {
    var MT9 = DU0();
    HU0.exports = function(Q) {
        if (MT9(Q) || Q === 0) return Q;
        return Q < 0 ? -1 : 1
    }
});
var zU0 = U((Wl3, EU0) => {
    EU0.exports = Object.getOwnPropertyDescriptor
});
var qX1 = U((Xl3, UU0) => {
    var zkA = zU0();
    if (zkA) try {
        zkA([], "length")
    } catch (A) {
        zkA = null
    }
    UU0.exports = zkA
});
var wU0 = U((Fl3, $U0) => {
    var UkA = Object.defineProperty || !1;
    if (UkA) try {
        UkA({}, "a", {
            value: 1
        })
    } catch (A) {
        UkA = !1
    }
    $U0.exports = UkA
});
var NX1 = U((Vl3, qU0) => {
    qU0.exports = function() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return !1;
        if (typeof Symbol.iterator === "symbol") return !0;
        var Q = {},
            B = Symbol("test"),
            G = Object(B);
        if (typeof B === "string") return !1;
        if (Object.prototype.toString.call(B) !== "[object Symbol]") return !1;
        if (Object.prototype.toString.call(G) !== "[object Symbol]") return !1;
        var Z = 42;
        Q[B] = Z;
        for (var I in Q) return !1;
        if (typeof Object.keys === "function" && Object.keys(Q).length !== 0) return !1;
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(Q).length !== 0) return !1;
        var Y = Object.getOwnPropertySymbols(Q);
        if (Y.length !== 1 || Y[0] !== B) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(Q, B)) return !1;
        if (typeof Object.getOwnPropertyDescriptor === "function") {
            var J = Object.getOwnPropertyDescriptor(Q, B);
            if (J.value !== Z || J.enumerable !== !0) return !1
        }
        return !0
    }
});
var MU0 = U((Kl3, LU0) => {
    var NU0 = typeof Symbol < "u" && Symbol,
        OT9 = NX1();
    LU0.exports = function() {
        if (typeof NU0 !== "function") return !1;
        if (typeof Symbol !== "function") return !1;
        if (typeof NU0("foo") !== "symbol") return !1;
        if (typeof Symbol("bar") !== "symbol") return !1;
        return OT9()
    }
});
var LX1 = U((Dl3, OU0) => {
    OU0.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null
});
var MX1 = U((Hl3, RU0) => {
    var RT9 = wX1();
    RU0.exports = RT9.getPrototypeOf || null
});
var jU0 = U((Cl3, PU0) => {
    var TT9 = "Function.prototype.bind called on incompatible ",
        PT9 = Object.prototype.toString,
        jT9 = Math.max,
        ST9 = "[object Function]",
        TU0 = function(Q, B) {
            var G = [];
            for (var Z = 0; Z < Q.length; Z += 1) G[Z] = Q[Z];
            for (var I = 0; I < B.length; I += 1) G[I + Q.length] = B[I];
            return G
        },
        _T9 = function(Q, B) {
            var G = [];
            for (var Z = B || 0, I = 0; Z < Q.length; Z += 1, I += 1) G[I] = Q[Z];
            return G
        },
        kT9 = function(A, Q) {
            var B = "";
            for (var G = 0; G < A.length; G += 1)
                if (B += A[G], G + 1 < A.length) B += Q;
            return B
        };
    PU0.exports = function(Q) {
        var B = this;
        if (typeof B !== "function" || PT9.apply(B) !== ST9) throw TypeError(TT9 + B);
        var G = _T9(arguments, 1),
            Z, I = function() {
                if (this instanceof Z) {
                    var F = B.apply(this, TU0(G, arguments));
                    if (Object(F) === F) return F;
                    return this
                }
                return B.apply(Q, TU0(G, arguments))
            },
            Y = jT9(0, B.length - G.length),
            J = [];
        for (var W = 0; W < Y; W++) J[W] = "$" + W;
        if (Z = Function("binder", "return function (" + kT9(J, ",") + "){ return binder.apply(this,arguments); }")(I), B.prototype) {
            var X = function() {};
            X.prototype = B.prototype, Z.prototype = new X, X.prototype = null
        }
        return Z
    }
});
var DVA = U((El3, SU0) => {
    var yT9 = jU0();
    SU0.exports = Function.prototype.bind || yT9
});
var $kA = U((zl3, _U0) => {
    _U0.exports = Function.prototype.call
});
var OX1 = U((Ul3, kU0) => {
    kU0.exports = Function.prototype.apply
});
var xU0 = U(($l3, yU0) => {
    yU0.exports = typeof Reflect < "u" && Reflect && Reflect.apply
});
var bU0 = U((wl3, vU0) => {
    var xT9 = DVA(),
        vT9 = OX1(),
        bT9 = $kA(),
        fT9 = xU0();
    vU0.exports = fT9 || xT9.call(bT9, vT9)
});
var hU0 = U((ql3, fU0) => {
    var hT9 = DVA(),
        gT9 = EkA(),
        uT9 = $kA(),
        mT9 = bU0();
    fU0.exports = function(Q) {
        if (Q.length < 1 || typeof Q[0] !== "function") throw new gT9("a function is required");
        return mT9(hT9, uT9, Q)
    }
});
var pU0 = U((Nl3, cU0) => {
    var dT9 = hU0(),
        gU0 = qX1(),
        mU0;
    try {
        mU0 = [].__proto__ === Array.prototype
    } catch (A) {
        if (!A || typeof A !== "object" || !("code" in A) || A.code !== "ERR_PROTO_ACCESS") throw A
    }
    var RX1 = !!mU0 && gU0 && gU0(Object.prototype, "__proto__"),
        dU0 = Object,
        uU0 = dU0.getPrototypeOf;
    cU0.exports = RX1 && typeof RX1.get === "function" ? dT9([RX1.get]) : typeof uU0 === "function" ? function(Q) {
        return uU0(Q == null ? Q : dU0(Q))
    } : !1
});
var sU0 = U((Ll3, aU0) => {
    var lU0 = LX1(),
        iU0 = MX1(),
        nU0 = pU0();
    aU0.exports = lU0 ? function(Q) {
        return lU0(Q)
    } : iU0 ? function(Q) {
        if (!Q || typeof Q !== "object" && typeof Q !== "function") throw TypeError("getProto: not an object");
        return iU0(Q)
    } : nU0 ? function(Q) {
        return nU0(Q)
    } : null
});
var TX1 = U((Ml3, rU0) => {
    var cT9 = Function.prototype.call,
        pT9 = Object.prototype.hasOwnProperty,
        lT9 = DVA();
    rU0.exports = lT9.call(cT9, pT9)
});
var B$0 = U((Ol3, Q$0) => {
    var m6, iT9 = wX1(),
        nT9 = dz0(),
        aT9 = pz0(),
        sT9 = iz0(),
        rT9 = az0(),
        I2A = rz0(),
        Z2A = EkA(),
        oT9 = ez0(),
        tT9 = QU0(),
        eT9 = GU0(),
        AP9 = IU0(),
        QP9 = JU0(),
        BP9 = XU0(),
        GP9 = VU0(),
        ZP9 = CU0(),
        eU0 = Function,
        PX1 = function(A) {
            try {
                return eU0('"use strict"; return (' + A + ").constructor;")()
            } catch (Q) {}
        },
        HVA = qX1(),
        IP9 = wU0(),
        jX1 = function() {
            throw new Z2A
        },
        YP9 = HVA ? function() {
            try {
                return arguments.callee, jX1
            } catch (A) {
                try {
                    return HVA(arguments, "callee").get
                } catch (Q) {
                    return jX1
                }
            }
        }() : jX1,
        B2A = MU0()(),
        CV = sU0(),
        JP9 = MX1(),
        WP9 = LX1(),
        A$0 = OX1(),
        CVA = $kA(),
        G2A = {},
        XP9 = typeof Uint8Array > "u" || !CV ? m6 : CV(Uint8Array),
        $s = {
            __proto__: null,
            "%AggregateError%": typeof AggregateError > "u" ? m6 : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? m6 : ArrayBuffer,
            "%ArrayIteratorPrototype%": B2A && CV ? CV([][Symbol.iterator]()) : m6,
            "%AsyncFromSyncIteratorPrototype%": m6,
            "%AsyncFunction%": G2A,
            "%AsyncGenerator%": G2A,
            "%AsyncGeneratorFunction%": G2A,
            "%AsyncIteratorPrototype%": G2A,
            "%Atomics%": typeof Atomics > "u" ? m6 : Atomics,
            "%BigInt%": typeof BigInt > "u" ? m6 : BigInt,
            "%BigInt64Array%": typeof BigInt64Array > "u" ? m6 : BigInt64Array,
            "%BigUint64Array%": typeof BigUint64Array > "u" ? m6 : BigUint64Array,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? m6 : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": nT9,
            "%eval%": eval,
            "%EvalError%": aT9,
            "%Float16Array%": typeof Float16Array > "u" ? m6 : Float16Array,
            "%Float32Array%": typeof Float32Array > "u" ? m6 : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? m6 : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? m6 : FinalizationRegistry,
            "%Function%": eU0,
            "%GeneratorFunction%": G2A,
            "%Int8Array%": typeof Int8Array > "u" ? m6 : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? m6 : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? m6 : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": B2A && CV ? CV(CV([][Symbol.iterator]())) : m6,
            "%JSON%": typeof JSON === "object" ? JSON : m6,
            "%Map%": typeof Map > "u" ? m6 : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !B2A || !CV ? m6 : CV(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": iT9,
            "%Object.getOwnPropertyDescriptor%": HVA,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? m6 : Promise,
            "%Proxy%": typeof Proxy > "u" ? m6 : Proxy,
            "%RangeError%": sT9,
            "%ReferenceError%": rT9,
            "%Reflect%": typeof Reflect > "u" ? m6 : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? m6 : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !B2A || !CV ? m6 : CV(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? m6 : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": B2A && CV ? CV("" [Symbol.iterator]()) : m6,
            "%Symbol%": B2A ? Symbol : m6,
            "%SyntaxError%": I2A,
            "%ThrowTypeError%": YP9,
            "%TypedArray%": XP9,
            "%TypeError%": Z2A,
            "%Uint8Array%": typeof Uint8Array > "u" ? m6 : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? m6 : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? m6 : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? m6 : Uint32Array,
            "%URIError%": oT9,
            "%WeakMap%": typeof WeakMap > "u" ? m6 : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? m6 : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? m6 : WeakSet,
            "%Function.prototype.call%": CVA,
            "%Function.prototype.apply%": A$0,
            "%Object.defineProperty%": IP9,
            "%Object.getPrototypeOf%": JP9,
            "%Math.abs%": tT9,
            "%Math.floor%": eT9,
            "%Math.max%": AP9,
            "%Math.min%": QP9,
            "%Math.pow%": BP9,
            "%Math.round%": GP9,
            "%Math.sign%": ZP9,
            "%Reflect.getPrototypeOf%": WP9
        };
    if (CV) try {
        null.error
    } catch (A) {
        SX1 = CV(CV(A)), $s["%Error.prototype%"] = SX1
    }
    var SX1, FP9 = function A(Q) {
            var B;
            if (Q === "%AsyncFunction%") B = PX1("async function () {}");
            else if (Q === "%GeneratorFunction%") B = PX1("function* () {}");
            else if (Q === "%AsyncGeneratorFunction%") B = PX1("async function* () {}");
            else if (Q === "%AsyncGenerator%") {
                var G = A("%AsyncGeneratorFunction%");
                if (G) B = G.prototype
            } else if (Q === "%AsyncIteratorPrototype%") {
                var Z = A("%AsyncGenerator%");
                if (Z && CV) B = CV(Z.prototype)
            }
            return $s[Q] = B, B
        },
        oU0 = {
            __proto__: null,
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"]
        },
        EVA = DVA(),
        wkA = TX1(),
        VP9 = EVA.call(CVA, Array.prototype.concat),
        KP9 = EVA.call(A$0, Array.prototype.splice),
        tU0 = EVA.call(CVA, String.prototype.replace),
        qkA = EVA.call(CVA, String.prototype.slice),
        DP9 = EVA.call(CVA, RegExp.prototype.exec),
        HP9 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        CP9 = /\\(\\)?/g,
        EP9 = function(Q) {
            var B = qkA(Q, 0, 1),
                G = qkA(Q, -1);
            if (B === "%" && G !== "%") throw new I2A("invalid intrinsic syntax, expected closing `%`");
            else if (G === "%" && B !== "%") throw new I2A("invalid intrinsic syntax, expected opening `%`");
            var Z = [];
            return tU0(Q, HP9, function(I, Y, J, W) {
                Z[Z.length] = J ? tU0(W, CP9, "$1") : Y || I
            }), Z
        },
        zP9 = function(Q, B) {
            var G = Q,
                Z;
            if (wkA(oU0, G)) Z = oU0[G], G = "%" + Z[0] + "%";
            if (wkA($s, G)) {
                var I = $s[G];
                if (I === G2A) I = FP9(G);
                if (typeof I > "u" && !B) throw new Z2A("intrinsic " + Q + " exists, but is not available. Please file an issue!");
                return {
                    alias: Z,
                    name: G,
                    value: I
                }
            }
            throw new I2A("intrinsic " + Q + " does not exist!")
        };
    Q$0.exports = function(Q, B) {
        if (typeof Q !== "string" || Q.length === 0) throw new Z2A("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof B !== "boolean") throw new Z2A('"allowMissing" argument must be a boolean');
        if (DP9(/^%?[^%]*%?$/, Q) === null) throw new I2A("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var G = EP9(Q),
            Z = G.length > 0 ? G[0] : "",
            I = zP9("%" + Z + "%", B),
            Y = I.name,
            J = I.value,
            W = !1,
            X = I.alias;
        if (X) Z = X[0], KP9(G, VP9([0, 1], X));
        for (var F = 1, V = !0; F < G.length; F += 1) {
            var K = G[F],
                D = qkA(K, 0, 1),
                H = qkA(K, -1);
            if ((D === '"' || D === "'" || D === "`" || (H === '"' || H === "'" || H === "`")) && D !== H) throw new I2A("property names with quotes must have matching quotes");
            if (K === "constructor" || !V) W = !0;
            if (Z += "." + K, Y = "%" + Z + "%", wkA($s, Y)) J = $s[Y];
            else if (J != null) {
                if (!(K in J)) {
                    if (!B) throw new Z2A("base intrinsic for " + Q + " exists, but the property is not available.");
                    return
                }
                if (HVA && F + 1 >= G.length) {
                    var C = HVA(J, K);
                    if (V = !!C, V && "get" in C && !("originalValue" in C.get)) J = C.get;
                    else J = J[K]
                } else V = wkA(J, K), J = J[K];
                if (V && !W) $s[Y] = J
            }
        }
        return J
    }
});
var Z$0 = U((Rl3, G$0) => {
    var UP9 = NX1();
    G$0.exports = function() {
        return UP9() && !!Symbol.toStringTag
    }
});
var J$0 = U((Tl3, Y$0) => {
    var $P9 = B$0(),
        I$0 = $P9("%Object.defineProperty%", !0),
        wP9 = Z$0()(),
        qP9 = TX1(),
        NP9 = EkA(),
        NkA = wP9 ? Symbol.toStringTag : null;
    Y$0.exports = function(Q, B) {
        var G = arguments.length > 2 && !!arguments[2] && arguments[2].force,
            Z = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
        if (typeof G < "u" && typeof G !== "boolean" || typeof Z < "u" && typeof Z !== "boolean") throw new NP9("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
        if (NkA && (G || !qP9(Q, NkA)))
            if (I$0) I$0(Q, NkA, {
                configurable: !Z,
                enumerable: !1,
                value: B,
                writable: !1
            });
            else Q[NkA] = B
    }
});
var X$0 = U((Pl3, W$0) => {
    W$0.exports = function(A, Q) {
        return Object.keys(Q).forEach(function(B) {
            A[B] = A[B] || Q[B]
        }), A
    }
});
var V$0 = U((jl3, F$0) => {
    var xX1 = Hz0(),
        LP9 = UA("util"),
        _X1 = UA("path"),
        MP9 = UA("http"),
        OP9 = UA("https"),
        RP9 = UA("url").parse,
        TP9 = UA("fs"),
        PP9 = UA("stream").Stream,
        kX1 = Nz0(),
        jP9 = gz0(),
        SP9 = J$0(),
        yX1 = X$0();
    F$0.exports = a5;
    LP9.inherits(a5, xX1);

    function a5(A) {
        if (!(this instanceof a5)) return new a5(A);
        this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], xX1.call(this), A = A || {};
        for (var Q in A) this[Q] = A[Q]
    }
    a5.LINE_BREAK = `\r
`;
    a5.DEFAULT_CONTENT_TYPE = "application/octet-stream";
    a5.prototype.append = function(A, Q, B) {
        if (B = B || {}, typeof B == "string") B = {
            filename: B
        };
        var G = xX1.prototype.append.bind(this);
        if (typeof Q == "number") Q = "" + Q;
        if (Array.isArray(Q)) {
            this._error(Error("Arrays are not supported."));
            return
        }
        var Z = this._multiPartHeader(A, Q, B),
            I = this._multiPartFooter();
        G(Z), G(Q), G(I), this._trackLength(Z, Q, B)
    };
    a5.prototype._trackLength = function(A, Q, B) {
        var G = 0;
        if (B.knownLength != null) G += +B.knownLength;
        else if (Buffer.isBuffer(Q)) G = Q.length;
        else if (typeof Q === "string") G = Buffer.byteLength(Q);
        if (this._valueLength += G, this._overheadLength += Buffer.byteLength(A) + a5.LINE_BREAK.length, !Q || !Q.path && !(Q.readable && Object.prototype.hasOwnProperty.call(Q, "httpVersion")) && !(Q instanceof PP9)) return;
        if (!B.knownLength) this._valuesToMeasure.push(Q)
    };
    a5.prototype._lengthRetriever = function(A, Q) {
        if (Object.prototype.hasOwnProperty.call(A, "fd"))
            if (A.end != null && A.end != 1 / 0 && A.start != null) Q(null, A.end + 1 - (A.start ? A.start : 0));
            else TP9.stat(A.path, function(B, G) {
                var Z;
                if (B) {
                    Q(B);
                    return
                }
                Z = G.size - (A.start ? A.start : 0), Q(null, Z)
            });
        else if (Object.prototype.hasOwnProperty.call(A, "httpVersion")) Q(null, +A.headers["content-length"]);
        else if (Object.prototype.hasOwnProperty.call(A, "httpModule")) A.on("response", function(B) {
            A.pause(), Q(null, +B.headers["content-length"])
        }), A.resume();
        else Q("Unknown stream")
    };
    a5.prototype._multiPartHeader = function(A, Q, B) {
        if (typeof B.header == "string") return B.header;
        var G = this._getContentDisposition(Q, B),
            Z = this._getContentType(Q, B),
            I = "",
            Y = {
                "Content-Disposition": ["form-data", 'name="' + A + '"'].concat(G || []),
                "Content-Type": [].concat(Z || [])
            };
        if (typeof B.header == "object") yX1(Y, B.header);
        var J;
        for (var W in Y)
            if (Object.prototype.hasOwnProperty.call(Y, W)) {
                if (J = Y[W], J == null) continue;
                if (!Array.isArray(J)) J = [J];
                if (J.length) I += W + ": " + J.join("; ") + a5.LINE_BREAK
            } return "--" + this.getBoundary() + a5.LINE_BREAK + I + a5.LINE_BREAK
    };
    a5.prototype._getContentDisposition = function(A, Q) {
        var B, G;
        if (typeof Q.filepath === "string") B = _X1.normalize(Q.filepath).replace(/\\/g, "/");
        else if (Q.filename || A.name || A.path) B = _X1.basename(Q.filename || A.name || A.path);
        else if (A.readable && Object.prototype.hasOwnProperty.call(A, "httpVersion")) B = _X1.basename(A.client._httpMessage.path || "");
        if (B) G = 'filename="' + B + '"';
        return G
    };
    a5.prototype._getContentType = function(A, Q) {
        var B = Q.contentType;
        if (!B && A.name) B = kX1.lookup(A.name);
        if (!B && A.path) B = kX1.lookup(A.path);
        if (!B && A.readable && Object.prototype.hasOwnProperty.call(A, "httpVersion")) B = A.headers["content-type"];
        if (!B && (Q.filepath || Q.filename)) B = kX1.lookup(Q.filepath || Q.filename);
        if (!B && typeof A == "object") B = a5.DEFAULT_CONTENT_TYPE;
        return B
    };
    a5.prototype._multiPartFooter = function() {
        return function(A) {
            var Q = a5.LINE_BREAK,
                B = this._streams.length === 0;
            if (B) Q += this._lastBoundary();
            A(Q)
        }.bind(this)
    };
    a5.prototype._lastBoundary = function() {
        return "--" + this.getBoundary() + "--" + a5.LINE_BREAK
    };
    a5.prototype.getHeaders = function(A) {
        var Q, B = {
            "content-type": "multipart/form-data; boundary=" + this.getBoundary()
        };
        for (Q in A)
            if (Object.prototype.hasOwnProperty.call(A, Q)) B[Q.toLowerCase()] = A[Q];
        return B
    };
    a5.prototype.setBoundary = function(A) {
        this._boundary = A
    };
    a5.prototype.getBoundary = function() {
        if (!this._boundary) this._generateBoundary();
        return this._boundary
    };
    a5.prototype.getBuffer = function() {
        var A = new Buffer.alloc(0),
            Q = this.getBoundary();
        for (var B = 0, G = this._streams.length; B < G; B++)
            if (typeof this._streams[B] !== "function") {
                if (Buffer.isBuffer(this._streams[B])) A = Buffer.concat([A, this._streams[B]]);
                else A = Buffer.concat([A, Buffer.from(this._streams[B])]);
                if (typeof this._streams[B] !== "string" || this._streams[B].substring(2, Q.length + 2) !== Q) A = Buffer.concat([A, Buffer.from(a5.LINE_BREAK)])
            } return Buffer.concat([A, Buffer.from(this._lastBoundary())])
    };
    a5.prototype._generateBoundary = function() {
        var A = "--------------------------";
        for (var Q = 0; Q < 24; Q++) A += Math.floor(Math.random() * 10).toString(16);
        this._boundary = A
    };
    a5.prototype.getLengthSync = function() {
        var A = this._overheadLength + this._valueLength;
        if (this._streams.length) A += this._lastBoundary().length;
        if (!this.hasKnownLength()) this._error(Error("Cannot calculate proper length in synchronous way."));
        return A
    };
    a5.prototype.hasKnownLength = function() {
        var A = !0;
        if (this._valuesToMeasure.length) A = !1;
        return A
    };
    a5.prototype.getLength = function(A) {
        var Q = this._overheadLength + this._valueLength;
        if (this._streams.length) Q += this._lastBoundary().length;
        if (!this._valuesToMeasure.length) {
            process.nextTick(A.bind(this, null, Q));
            return
        }
        jP9.parallel(this._valuesToMeasure, this._lengthRetriever, function(B, G) {
            if (B) {
                A(B);
                return
            }
            G.forEach(function(Z) {
                Q += Z
            }), A(null, Q)
        })
    };
    a5.prototype.submit = function(A, Q) {
        var B, G, Z = {
            method: "post"
        };
        if (typeof A == "string") A = RP9(A), G = yX1({
            port: A.port,
            path: A.pathname,
            host: A.hostname,
            protocol: A.protocol
        }, Z);
        else if (G = yX1(A, Z), !G.port) G.port = G.protocol == "https:" ? 443 : 80;
        if (G.headers = this.getHeaders(A.headers), G.protocol == "https:") B = OP9.request(G);
        else B = MP9.request(G);
        return this.getLength(function(I, Y) {
            if (I && I !== "Unknown stream") {
                this._error(I);
                return
            }
            if (Y) B.setHeader("Content-Length", Y);
            if (this.pipe(B), Q) {
                var J, W = function(X, F) {
                    return B.removeListener("error", W), B.removeListener("response", J), Q.call(this, X, F)
                };
                J = W.bind(this, null), B.on("error", W), B.on("response", J)
            }
        }.bind(this)), B
    };
    a5.prototype._error = function(A) {
        if (!this.error) this.error = A, this.pause(), this.emit("error", A)
    };
    a5.prototype.toString = function() {
        return "[object FormData]"
    };
    SP9(a5, "FormData")
});
var K$0, LkA;
var vX1 = L(() => {
    K$0 = GA(V$0(), 1), LkA = K$0.default
});

function bX1(A) {
    return f1.isPlainObject(A) || f1.isArray(A)
}

function H$0(A) {
    return f1.endsWith(A, "[]") ? A.slice(0, -2) : A
}

function D$0(A, Q, B) {
    if (!A) return Q;
    return A.concat(Q).map(function(Z, I) {
        return Z = H$0(Z), !B && I ? "[" + Z + "]" : Z
    }).join(B ? "." : "")
}

function _P9(A) {
    return f1.isArray(A) && !A.some(bX1)
}

function yP9(A, Q, B) {
    if (!f1.isObject(A)) throw TypeError("target must be an object");
    Q = Q || new(LkA || FormData), B = f1.toFlatObject(B, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(C, E) {
        return !f1.isUndefined(E[C])
    });
    let G = B.metaTokens,
        Z = B.visitor || F,
        I = B.dots,
        Y = B.indexes,
        W = (B.Blob || typeof Blob < "u" && Blob) && f1.isSpecCompliantForm(Q);
    if (!f1.isFunction(Z)) throw TypeError("visitor must be a function");

    function X(H) {
        if (H === null) return "";
        if (f1.isDate(H)) return H.toISOString();
        if (!W && f1.isBlob(H)) throw new NB("Blob is not supported. Use a Buffer instead.");
        if (f1.isArrayBuffer(H) || f1.isTypedArray(H)) return W && typeof Blob === "function" ? new Blob([H]) : Buffer.from(H);
        return H
    }

    function F(H, C, E) {
        let z = H;
        if (H && !E && typeof H === "object") {
            if (f1.endsWith(C, "{}")) C = G ? C : C.slice(0, -2), H = JSON.stringify(H);
            else if (f1.isArray(H) && _P9(H) || (f1.isFileList(H) || f1.endsWith(C, "[]")) && (z = f1.toArray(H))) return C = H$0(C), z.forEach(function(N, q) {
                !(f1.isUndefined(N) || N === null) && Q.append(Y === !0 ? D$0([C], q, I) : Y === null ? C : C + "[]", X(N))
            }), !1
        }
        if (bX1(H)) return !0;
        return Q.append(D$0(E, C, I), X(H)), !1
    }
    let V = [],
        K = Object.assign(kP9, {
            defaultVisitor: F,
            convertValue: X,
            isVisitable: bX1
        });

    function D(H, C) {
        if (f1.isUndefined(H)) return;
        if (V.indexOf(H) !== -1) throw Error("Circular reference detected in " + C.join("."));
        V.push(H), f1.forEach(H, function(z, w) {
            if ((!(f1.isUndefined(z) || z === null) && Z.call(Q, z, f1.isString(w) ? w.trim() : w, C, K)) === !0) D(z, C ? C.concat(w) : [w])
        }), V.pop()
    }
    if (!f1.isObject(A)) throw TypeError("data must be an object");
    return D(A), Q
}
var kP9, gu;
var zVA = L(() => {
    lG();
    a$();
    vX1();
    kP9 = f1.toFlatObject(f1, {}, null, function(Q) {
        return /^is[A-Z]/.test(Q)
    });
    gu = yP9
});

function C$0(A) {
    let Q = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(A).replace(/[!'()~]|%20|%00/g, function(G) {
        return Q[G]
    })
}

function E$0(A, Q) {
    this._pairs = [], A && gu(A, this, Q)
}
var z$0, U$0;
var $$0 = L(() => {
    zVA();
    z$0 = E$0.prototype;
    z$0.append = function(Q, B) {
        this._pairs.push([Q, B])
    };
    z$0.toString = function(Q) {
        let B = Q ? function(G) {
            return Q.call(this, G, C$0)
        } : C$0;
        return this._pairs.map(function(Z) {
            return B(Z[0]) + "=" + B(Z[1])
        }, "").join("&")
    };
    U$0 = E$0
});

function xP9(A) {
    return encodeURIComponent(A).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function ws(A, Q, B) {
    if (!Q) return A;
    let G = B && B.encode || xP9;
    if (f1.isFunction(B)) B = {
        serialize: B
    };
    let Z = B && B.serialize,
        I;
    if (Z) I = Z(Q, B);
    else I = f1.isURLSearchParams(Q) ? Q.toString() : new U$0(Q, B).toString(G);
    if (I) {
        let Y = A.indexOf("#");
        if (Y !== -1) A = A.slice(0, Y);
        A += (A.indexOf("?") === -1 ? "?" : "&") + I
    }
    return A
}
var MkA = L(() => {
    lG();
    $$0()
});
class w$0 {
    constructor() {
        this.handlers = []
    }
    use(A, Q, B) {
        return this.handlers.push({
            fulfilled: A,
            rejected: Q,
            synchronous: B ? B.synchronous : !1,
            runWhen: B ? B.runWhen : null
        }), this.handlers.length - 1
    }
    eject(A) {
        if (this.handlers[A]) this.handlers[A] = null
    }
    clear() {
        if (this.handlers) this.handlers = []
    }
    forEach(A) {
        f1.forEach(this.handlers, function(B) {
            if (B !== null) A(B)
        })
    }
}
var fX1;
var q$0 = L(() => {
    lG();
    fX1 = w$0
});
var Y2A;
var OkA = L(() => {
    Y2A = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }
});
import vP9 from "url";
var N$0;
var L$0 = L(() => {
    N$0 = vP9.URLSearchParams
});
import bP9 from "crypto";
var hX1 = "abcdefghijklmnopqrstuvwxyz",
    M$0 = "0123456789",
    O$0, fP9 = (A = 16, Q = O$0.ALPHA_DIGIT) => {
        let B = "",
            {
                length: G
            } = Q,
            Z = new Uint32Array(A);
        bP9.randomFillSync(Z);
        for (let I = 0; I < A; I++) B += Q[Z[I] % G];
        return B
    },
    R$0;
var T$0 = L(() => {
    L$0();
    vX1();
    O$0 = {
        DIGIT: M$0,
        ALPHA: hX1,
        ALPHA_DIGIT: hX1 + hX1.toUpperCase() + M$0
    }, R$0 = {
        isNode: !0,
        classes: {
            URLSearchParams: N$0,
            FormData: LkA,
            Blob: typeof Blob < "u" && Blob || null
        },
        ALPHABET: O$0,
        generateString: fP9,
        protocols: ["http", "https", "file", "data"]
    }
});
var mX1 = {};
pG(mX1, {
    origin: () => uP9,
    navigator: () => gX1,
    hasStandardBrowserWebWorkerEnv: () => gP9,
    hasStandardBrowserEnv: () => hP9,
    hasBrowserEnv: () => uX1
});
var uX1, gX1, hP9, gP9, uP9;
var P$0 = L(() => {
    uX1 = typeof window < "u" && typeof document < "u", gX1 = typeof navigator === "object" && navigator || void 0, hP9 = uX1 && (!gX1 || ["ReactNative", "NativeScript", "NS"].indexOf(gX1.product) < 0), gP9 = (() => {
        return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function"
    })(), uP9 = uX1 && window.location.href || "http://localhost"
});
var c3;
var DR = L(() => {
    T$0();
    P$0();
    c3 = {
        ...mX1,
        ...R$0
    }
});

function dX1(A, Q) {
    return gu(A, new c3.classes.URLSearchParams, Object.assign({
        visitor: function(B, G, Z, I) {
            if (c3.isNode && f1.isBuffer(B)) return this.append(G, B.toString("base64")), !1;
            return I.defaultVisitor.apply(this, arguments)
        }
    }, Q))
}
var j$0 = L(() => {
    lG();
    zVA();
    DR()
});

function mP9(A) {
    return f1.matchAll(/\w+|\[(\w*)]/g, A).map((Q) => {
        return Q[0] === "[]" ? "" : Q[1] || Q[0]
    })
}

function dP9(A) {
    let Q = {},
        B = Object.keys(A),
        G, Z = B.length,
        I;
    for (G = 0; G < Z; G++) I = B[G], Q[I] = A[I];
    return Q
}

function cP9(A) {
    function Q(B, G, Z, I) {
        let Y = B[I++];
        if (Y === "__proto__") return !0;
        let J = Number.isFinite(+Y),
            W = I >= B.length;
        if (Y = !Y && f1.isArray(Z) ? Z.length : Y, W) {
            if (f1.hasOwnProp(Z, Y)) Z[Y] = [Z[Y], G];
            else Z[Y] = G;
            return !J
        }
        if (!Z[Y] || !f1.isObject(Z[Y])) Z[Y] = [];
        if (Q(B, G, Z[Y], I) && f1.isArray(Z[Y])) Z[Y] = dP9(Z[Y]);
        return !J
    }
    if (f1.isFormData(A) && f1.isFunction(A.entries)) {
        let B = {};
        return f1.forEachEntry(A, (G, Z) => {
            Q(mP9(G), Z, B, 0)
        }), B
    }
    return null
}
var RkA;
var cX1 = L(() => {
    lG();
    RkA = cP9
});

function pP9(A, Q, B) {
    if (f1.isString(A)) try {
        return (Q || JSON.parse)(A), f1.trim(A)
    } catch (G) {
        if (G.name !== "SyntaxError") throw G
    }
    return (B || JSON.stringify)(A)
}
var pX1, J2A;
var TkA = L(() => {
    lG();
    a$();
    OkA();
    zVA();
    j$0();
    DR();
    cX1();
    pX1 = {
        transitional: Y2A,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function(Q, B) {
            let G = B.getContentType() || "",
                Z = G.indexOf("application/json") > -1,
                I = f1.isObject(Q);
            if (I && f1.isHTMLForm(Q)) Q = new FormData(Q);
            if (f1.isFormData(Q)) return Z ? JSON.stringify(RkA(Q)) : Q;
            if (f1.isArrayBuffer(Q) || f1.isBuffer(Q) || f1.isStream(Q) || f1.isFile(Q) || f1.isBlob(Q) || f1.isReadableStream(Q)) return Q;
            if (f1.isArrayBufferView(Q)) return Q.buffer;
            if (f1.isURLSearchParams(Q)) return B.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), Q.toString();
            let J;
            if (I) {
                if (G.indexOf("application/x-www-form-urlencoded") > -1) return dX1(Q, this.formSerializer).toString();
                if ((J = f1.isFileList(Q)) || G.indexOf("multipart/form-data") > -1) {
                    let W = this.env && this.env.FormData;
                    return gu(J ? {
                        "files[]": Q
                    } : Q, W && new W, this.formSerializer)
                }
            }
            if (I || Z) return B.setContentType("application/json", !1), pP9(Q);
            return Q
        }],
        transformResponse: [function(Q) {
            let B = this.transitional || pX1.transitional,
                G = B && B.forcedJSONParsing,
                Z = this.responseType === "json";
            if (f1.isResponse(Q) || f1.isReadableStream(Q)) return Q;
            if (Q && f1.isString(Q) && (G && !this.responseType || Z)) {
                let Y = !(B && B.silentJSONParsing) && Z;
                try {
                    return JSON.parse(Q)
                } catch (J) {
                    if (Y) {
                        if (J.name === "SyntaxError") throw NB.from(J, NB.ERR_BAD_RESPONSE, this, null, this.response);
                        throw J
                    }
                }
            }
            return Q
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: c3.classes.FormData,
            Blob: c3.classes.Blob
        },
        validateStatus: function(Q) {
            return Q >= 200 && Q < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    f1.forEach(["delete", "get", "head", "post", "put", "patch"], (A) => {
        pX1.headers[A] = {}
    });
    J2A = pX1
});
var lP9, S$0 = (A) => {
    let Q = {},
        B, G, Z;
    return A && A.split(`
`).forEach(function(Y) {
        if (Z = Y.indexOf(":"), B = Y.substring(0, Z).trim().toLowerCase(), G = Y.substring(Z + 1).trim(), !B || Q[B] && lP9[B]) return;
        if (B === "set-cookie")
            if (Q[B]) Q[B].push(G);
            else Q[B] = [G];
        else Q[B] = Q[B] ? Q[B] + ", " + G : G
    }), Q
};
var _$0 = L(() => {
    lG();
    lP9 = f1.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
});

function UVA(A) {
    return A && String(A).trim().toLowerCase()
}

function PkA(A) {
    if (A === !1 || A == null) return A;
    return f1.isArray(A) ? A.map(PkA) : String(A)
}

function iP9(A) {
    let Q = Object.create(null),
        B = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
        G;
    while (G = B.exec(A)) Q[G[1]] = G[2];
    return Q
}

function lX1(A, Q, B, G, Z) {
    if (f1.isFunction(G)) return G.call(this, Q, B);
    if (Z) Q = B;
    if (!f1.isString(Q)) return;
    if (f1.isString(G)) return Q.indexOf(G) !== -1;
    if (f1.isRegExp(G)) return G.test(Q)
}

function aP9(A) {
    return A.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (Q, B, G) => {
        return B.toUpperCase() + G
    })
}

function sP9(A, Q) {
    let B = f1.toCamelCase(" " + Q);
    ["get", "set", "has"].forEach((G) => {
        Object.defineProperty(A, G + B, {
            value: function(Z, I, Y) {
                return this[G].call(this, Q, Z, I, Y)
            },
            configurable: !0
        })
    })
}
var k$0, nP9 = (A) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(A.trim()),
    $VA, PY;
var _j = L(() => {
    lG();
    _$0();
    k$0 = Symbol("internals");
    $VA = class $VA {
        constructor(A) {
            A && this.set(A)
        }
        set(A, Q, B) {
            let G = this;

            function Z(Y, J, W) {
                let X = UVA(J);
                if (!X) throw Error("header name must be a non-empty string");
                let F = f1.findKey(G, X);
                if (!F || G[F] === void 0 || W === !0 || W === void 0 && G[F] !== !1) G[F || J] = PkA(Y)
            }
            let I = (Y, J) => f1.forEach(Y, (W, X) => Z(W, X, J));
            if (f1.isPlainObject(A) || A instanceof this.constructor) I(A, Q);
            else if (f1.isString(A) && (A = A.trim()) && !nP9(A)) I(S$0(A), Q);
            else if (f1.isHeaders(A))
                for (let [Y, J] of A.entries()) Z(J, Y, B);
            else A != null && Z(Q, A, B);
            return this
        }
        get(A, Q) {
            if (A = UVA(A), A) {
                let B = f1.findKey(this, A);
                if (B) {
                    let G = this[B];
                    if (!Q) return G;
                    if (Q === !0) return iP9(G);
                    if (f1.isFunction(Q)) return Q.call(this, G, B);
                    if (f1.isRegExp(Q)) return Q.exec(G);
                    throw TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(A, Q) {
            if (A = UVA(A), A) {
                let B = f1.findKey(this, A);
                return !!(B && this[B] !== void 0 && (!Q || lX1(this, this[B], B, Q)))
            }
            return !1
        }
        delete(A, Q) {
            let B = this,
                G = !1;

            function Z(I) {
                if (I = UVA(I), I) {
                    let Y = f1.findKey(B, I);
                    if (Y && (!Q || lX1(B, B[Y], Y, Q))) delete B[Y], G = !0
                }
            }
            if (f1.isArray(A)) A.forEach(Z);
            else Z(A);
            return G
        }
        clear(A) {
            let Q = Object.keys(this),
                B = Q.length,
                G = !1;
            while (B--) {
                let Z = Q[B];
                if (!A || lX1(this, this[Z], Z, A, !0)) delete this[Z], G = !0
            }
            return G
        }
        normalize(A) {
            let Q = this,
                B = {};
            return f1.forEach(this, (G, Z) => {
                let I = f1.findKey(B, Z);
                if (I) {
                    Q[I] = PkA(G), delete Q[Z];
                    return
                }
                let Y = A ? aP9(Z) : String(Z).trim();
                if (Y !== Z) delete Q[Z];
                Q[Y] = PkA(G), B[Y] = !0
            }), this
        }
        concat(...A) {
            return this.constructor.concat(this, ...A)
        }
        toJSON(A) {
            let Q = Object.create(null);
            return f1.forEach(this, (B, G) => {
                B != null && B !== !1 && (Q[G] = A && f1.isArray(B) ? B.join(", ") : B)
            }), Q
        } [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(([A, Q]) => A + ": " + Q).join(`
`)
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(A) {
            return A instanceof this ? A : new this(A)
        }
        static concat(A, ...Q) {
            let B = new this(A);
            return Q.forEach((G) => B.set(G)), B
        }
        static accessor(A) {
            let B = (this[k$0] = this[k$0] = {
                    accessors: {}
                }).accessors,
                G = this.prototype;

            function Z(I) {
                let Y = UVA(I);
                if (!B[Y]) sP9(G, I), B[Y] = !0
            }
            return f1.isArray(A) ? A.forEach(Z) : Z(A), this
        }
    };
    $VA.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    f1.reduceDescriptors($VA.prototype, ({
        value: A
    }, Q) => {
        let B = Q[0].toUpperCase() + Q.slice(1);
        return {
            get: () => A,
            set(G) {
                this[B] = G
            }
        }
    });
    f1.freezeMethods($VA);
    PY = $VA
});

function wVA(A, Q) {
    let B = this || J2A,
        G = Q || B,
        Z = PY.from(G.headers),
        I = G.data;
    return f1.forEach(A, function(J) {
        I = J.call(B, I, Z.normalize(), Q ? Q.status : void 0)
    }), Z.normalize(), I
}
var y$0 = L(() => {
    lG();
    TkA();
    _j()
});

function qVA(A) {
    return !!(A && A.__CANCEL__)
}

function x$0(A, Q, B) {
    NB.call(this, A == null ? "canceled" : A, NB.ERR_CANCELED, Q, B), this.name = "CanceledError"
}
var s$;
var qs = L(() => {
    a$();