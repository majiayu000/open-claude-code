/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: telemetry_005.js
 * 处理时间: 2025-12-09T03:37:25.363Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         ( 10x) = require(moduleName) - Node.js require
 * GA         (  5x) = esmImport(module) - ESM import helper
 * rd1        (  1x) = getShellRcFile() - Get .bashrc/.zshrc path
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 5/14
 * Lines: 194170 - 195666 (1497 lines)
 * Original file: cli.js
 */

    var iC6 = "00",
        nC6 = "(?!ff)[\\da-f]{2}",
        aC6 = "(?![0]{32})[\\da-f]{32}",
        sC6 = "(?![0]{16})[\\da-f]{16}",
        rC6 = "[\\da-f]{2}",
        oC6 = new RegExp(`^\\s?(${nC6})-(${aC6})-(${sC6})-(${rC6})(-.*)?\\s?$`);

    function LNB(A) {
        let Q = oC6.exec(A);
        if (!Q) return null;
        if (Q[1] === "00" && Q[5]) return null;
        return {
            traceId: Q[2],
            spanId: Q[3],
            traceFlags: parseInt(Q[4], 16)
        }
    }
    ONB.parseTraceParent = LNB;
    class MNB {
        inject(A, Q, B) {
            let G = DsA.trace.getSpanContext(A);
            if (!G || (0, pC6.isTracingSuppressed)(A) || !(0, DsA.isSpanContextValid)(G)) return;
            let Z = `${iC6}-${G.traceId}-${G.spanId}-0${Number(G.traceFlags||DsA.TraceFlags.NONE).toString(16)}`;
            if (B.set(Q, ONB.TRACE_PARENT_HEADER, Z), G.traceState) B.set(Q, ONB.TRACE_STATE_HEADER, G.traceState.serialize())
        }
        extract(A, Q, B) {
            let G = B.get(Q, ONB.TRACE_PARENT_HEADER);
            if (!G) return A;
            let Z = Array.isArray(G) ? G[0] : G;
            if (typeof Z !== "string") return A;
            let I = LNB(Z);
            if (!I) return A;
            I.isRemote = !0;
            let Y = B.get(Q, ONB.TRACE_STATE_HEADER);
            if (Y) {
                let J = Array.isArray(Y) ? Y.join(",") : Y;
                I.traceState = new lC6.TraceState(typeof J === "string" ? J : void 0)
            }
            return DsA.trace.setSpanContext(A, I)
        }
        fields() {
            return [ONB.TRACE_PARENT_HEADER, ONB.TRACE_STATE_HEADER]
        }
    }
    ONB.W3CTraceContextPropagator = MNB
});
var _NB = U((jNB) => {
    Object.defineProperty(jNB, "__esModule", {
        value: !0
    });
    jNB.getRPCMetadata = jNB.deleteRPCMetadata = jNB.setRPCMetadata = jNB.RPCType = void 0;
    var eC6 = W9(),
        ru1 = (0, eC6.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA"),
        AE6;
    (function(A) {
        A.HTTP = "http"
    })(AE6 = jNB.RPCType || (jNB.RPCType = {}));

    function QE6(A, Q) {
        return A.setValue(ru1, Q)
    }
    jNB.setRPCMetadata = QE6;

    function BE6(A) {
        return A.deleteValue(ru1)
    }
    jNB.deleteRPCMetadata = BE6;

    function GE6(A) {
        return A.getValue(ru1)
    }
    jNB.getRPCMetadata = GE6
});
var hNB = U((bNB) => {
    Object.defineProperty(bNB, "__esModule", {
        value: !0
    });
    bNB.isPlainObject = void 0;
    var YE6 = "[object Object]",
        JE6 = "[object Null]",
        WE6 = "[object Undefined]",
        XE6 = Function.prototype,
        kNB = XE6.toString,
        FE6 = kNB.call(Object),
        VE6 = Object.getPrototypeOf,
        yNB = Object.prototype,
        xNB = yNB.hasOwnProperty,
        mt = Symbol ? Symbol.toStringTag : void 0,
        vNB = yNB.toString;

    function KE6(A) {
        if (!DE6(A) || HE6(A) !== YE6) return !1;
        let Q = VE6(A);
        if (Q === null) return !0;
        let B = xNB.call(Q, "constructor") && Q.constructor;
        return typeof B == "function" && B instanceof B && kNB.call(B) === FE6
    }
    bNB.isPlainObject = KE6;

    function DE6(A) {
        return A != null && typeof A == "object"
    }

    function HE6(A) {
        if (A == null) return A === void 0 ? WE6 : JE6;
        return mt && mt in Object(A) ? CE6(A) : EE6(A)
    }

    function CE6(A) {
        let Q = xNB.call(A, mt),
            B = A[mt],
            G = !1;
        try {
            A[mt] = void 0, G = !0
        } catch {}
        let Z = vNB.call(A);
        if (G)
            if (Q) A[mt] = B;
            else delete A[mt];
        return Z
    }

    function EE6(A) {
        return vNB.call(A)
    }
});
var lNB = U((cNB) => {
    Object.defineProperty(cNB, "__esModule", {
        value: !0
    });
    cNB.merge = void 0;
    var gNB = hNB(),
        zE6 = 20;

    function UE6(...A) {
        let Q = A.shift(),
            B = new WeakMap;
        while (A.length > 0) Q = mNB(Q, A.shift(), 0, B);
        return Q
    }
    cNB.merge = UE6;

    function ou1(A) {
        if (zsA(A)) return A.slice();
        return A
    }

    function mNB(A, Q, B = 0, G) {
        let Z;
        if (B > zE6) return;
        if (B++, EsA(A) || EsA(Q) || dNB(Q)) Z = ou1(Q);
        else if (zsA(A)) {
            if (Z = A.slice(), zsA(Q))
                for (let I = 0, Y = Q.length; I < Y; I++) Z.push(ou1(Q[I]));
            else if (z$A(Q)) {
                let I = Object.keys(Q);
                for (let Y = 0, J = I.length; Y < J; Y++) {
                    let W = I[Y];
                    Z[W] = ou1(Q[W])
                }
            }
        } else if (z$A(A))
            if (z$A(Q)) {
                if (!$E6(A, Q)) return Q;
                Z = Object.assign({}, A);
                let I = Object.keys(Q);
                for (let Y = 0, J = I.length; Y < J; Y++) {
                    let W = I[Y],
                        X = Q[W];
                    if (EsA(X))
                        if (typeof X > "u") delete Z[W];
                        else Z[W] = X;
                    else {
                        let F = Z[W],
                            V = X;
                        if (uNB(A, W, G) || uNB(Q, W, G)) delete Z[W];
                        else {
                            if (z$A(F) && z$A(V)) {
                                let K = G.get(F) || [],
                                    D = G.get(V) || [];
                                K.push({
                                    obj: A,
                                    key: W
                                }), D.push({
                                    obj: Q,
                                    key: W
                                }), G.set(F, K), G.set(V, D)
                            }
                            Z[W] = mNB(Z[W], X, B, G)
                        }
                    }
                }
            } else Z = Q;
        return Z
    }

    function uNB(A, Q, B) {
        let G = B.get(A[Q]) || [];
        for (let Z = 0, I = G.length; Z < I; Z++) {
            let Y = G[Z];
            if (Y.key === Q && Y.obj === A) return !0
        }
        return !1
    }

    function zsA(A) {
        return Array.isArray(A)
    }

    function dNB(A) {
        return typeof A === "function"
    }

    function z$A(A) {
        return !EsA(A) && !zsA(A) && !dNB(A) && typeof A === "object"
    }

    function EsA(A) {
        return typeof A === "string" || typeof A === "number" || typeof A === "boolean" || typeof A > "u" || A instanceof Date || A instanceof RegExp || A === null
    }

    function $E6(A, Q) {
        if (!(0, gNB.isPlainObject)(A) || !(0, gNB.isPlainObject)(Q)) return !1;
        return !0
    }
});
var aNB = U((iNB) => {
    Object.defineProperty(iNB, "__esModule", {
        value: !0
    });
    iNB.callWithTimeout = iNB.TimeoutError = void 0;
    class UsA extends Error {
        constructor(A) {
            super(A);
            Object.setPrototypeOf(this, UsA.prototype)
        }
    }
    iNB.TimeoutError = UsA;

    function wE6(A, Q) {
        let B, G = new Promise(function(I, Y) {
            B = setTimeout(function() {
                Y(new UsA("Operation timed out."))
            }, Q)
        });
        return Promise.race([A, G]).then((Z) => {
            return clearTimeout(B), Z
        }, (Z) => {
            throw clearTimeout(B), Z
        })
    }
    iNB.callWithTimeout = wE6
});
var tNB = U((rNB) => {
    Object.defineProperty(rNB, "__esModule", {
        value: !0
    });
    rNB.isUrlIgnored = rNB.urlMatches = void 0;

    function sNB(A, Q) {
        if (typeof Q === "string") return A === Q;
        else return !!A.match(Q)
    }
    rNB.urlMatches = sNB;

    function NE6(A, Q) {
        if (!Q) return !1;
        for (let B of Q)
            if (sNB(A, B)) return !0;
        return !1
    }
    rNB.isUrlIgnored = NE6
});
var BLB = U((ALB) => {
    Object.defineProperty(ALB, "__esModule", {
        value: !0
    });
    ALB.Deferred = void 0;
    class eNB {
        _promise;
        _resolve;
        _reject;
        constructor() {
            this._promise = new Promise((A, Q) => {
                this._resolve = A, this._reject = Q
            })
        }
        get promise() {
            return this._promise
        }
        resolve(A) {
            this._resolve(A)
        }
        reject(A) {
            this._reject(A)
        }
    }
    ALB.Deferred = eNB
});
var YLB = U((ZLB) => {
    Object.defineProperty(ZLB, "__esModule", {
        value: !0
    });
    ZLB.BindOnceFuture = void 0;
    var ME6 = BLB();
    class GLB {
        _callback;
        _that;
        _isCalled = !1;
        _deferred = new ME6.Deferred;
        constructor(A, Q) {
            this._callback = A, this._that = Q
        }
        get isCalled() {
            return this._isCalled
        }
        get promise() {
            return this._deferred.promise
        }
        call(...A) {
            if (!this._isCalled) {
                this._isCalled = !0;
                try {
                    Promise.resolve(this._callback.call(this._that, ...A)).then((Q) => this._deferred.resolve(Q), (Q) => this._deferred.reject(Q))
                } catch (Q) {
                    this._deferred.reject(Q)
                }
            }
            return this._deferred.promise
        }
    }
    ZLB.BindOnceFuture = GLB
});
var FLB = U((WLB) => {
    Object.defineProperty(WLB, "__esModule", {
        value: !0
    });
    WLB.diagLogLevelFromString = void 0;
    var ob = W9(),
        JLB = {
            ALL: ob.DiagLogLevel.ALL,
            VERBOSE: ob.DiagLogLevel.VERBOSE,
            DEBUG: ob.DiagLogLevel.DEBUG,
            INFO: ob.DiagLogLevel.INFO,
            WARN: ob.DiagLogLevel.WARN,
            ERROR: ob.DiagLogLevel.ERROR,
            NONE: ob.DiagLogLevel.NONE
        };

    function OE6(A) {
        if (A == null) return;
        let Q = JLB[A.toUpperCase()];
        if (Q == null) return ob.diag.warn(`Unknown log level "${A}", expected one of ${Object.keys(JLB)}, using default`), ob.DiagLogLevel.INFO;
        return Q
    }
    WLB.diagLogLevelFromString = OE6
});
var HLB = U((KLB) => {
    Object.defineProperty(KLB, "__esModule", {
        value: !0
    });
    KLB._export = void 0;
    var VLB = W9(),
        RE6 = H$A();

    function TE6(A, Q) {
        return new Promise((B) => {
            VLB.context.with((0, RE6.suppressTracing)(VLB.context.active()), () => {
                A.export(Q, (G) => {
                    B(G)
                })
            })
        })
    }
    KLB._export = TE6
});
var t6 = U((t9) => {
    Object.defineProperty(t9, "__esModule", {
        value: !0
    });
    t9.internal = t9.diagLogLevelFromString = t9.BindOnceFuture = t9.urlMatches = t9.isUrlIgnored = t9.callWithTimeout = t9.TimeoutError = t9.merge = t9.TraceState = t9.unsuppressTracing = t9.suppressTracing = t9.isTracingSuppressed = t9.setRPCMetadata = t9.getRPCMetadata = t9.deleteRPCMetadata = t9.RPCType = t9.parseTraceParent = t9.W3CTraceContextPropagator = t9.TRACE_STATE_HEADER = t9.TRACE_PARENT_HEADER = t9.CompositePropagator = t9.unrefTimer = t9.otperformance = t9.getStringListFromEnv = t9.getNumberFromEnv = t9.getBooleanFromEnv = t9.getStringFromEnv = t9._globalThis = t9.SDK_INFO = t9.parseKeyPairsIntoRecord = t9.ExportResultCode = t9.timeInputToHrTime = t9.millisToHrTime = t9.isTimeInputHrTime = t9.isTimeInput = t9.hrTimeToTimeStamp = t9.hrTimeToNanoseconds = t9.hrTimeToMilliseconds = t9.hrTimeToMicroseconds = t9.hrTimeDuration = t9.hrTime = t9.getTimeOrigin = t9.addHrTimes = t9.loggingErrorHandler = t9.setGlobalErrorHandler = t9.globalErrorHandler = t9.sanitizeAttributes = t9.isAttributeValue = t9.AnchoredClock = t9.W3CBaggagePropagator = void 0;
    var PE6 = MDB();
    Object.defineProperty(t9, "W3CBaggagePropagator", {
        enumerable: !0,
        get: function() {
            return PE6.W3CBaggagePropagator
        }
    });
    var jE6 = PDB();
    Object.defineProperty(t9, "AnchoredClock", {
        enumerable: !0,
        get: function() {
            return jE6.AnchoredClock
        }
    });
    var CLB = vDB();
    Object.defineProperty(t9, "isAttributeValue", {
        enumerable: !0,
        get: function() {
            return CLB.isAttributeValue
        }
    });
    Object.defineProperty(t9, "sanitizeAttributes", {
        enumerable: !0,
        get: function() {
            return CLB.sanitizeAttributes
        }
    });
    var ELB = mDB();
    Object.defineProperty(t9, "globalErrorHandler", {
        enumerable: !0,
        get: function() {
            return ELB.globalErrorHandler
        }
    });
    Object.defineProperty(t9, "setGlobalErrorHandler", {
        enumerable: !0,
        get: function() {
            return ELB.setGlobalErrorHandler
        }
    });
    var SE6 = uu1();
    Object.defineProperty(t9, "loggingErrorHandler", {
        enumerable: !0,
        get: function() {
            return SE6.loggingErrorHandler
        }
    });
    var EM = YNB();
    Object.defineProperty(t9, "addHrTimes", {
        enumerable: !0,
        get: function() {
            return EM.addHrTimes
        }
    });
    Object.defineProperty(t9, "getTimeOrigin", {
        enumerable: !0,
        get: function() {
            return EM.getTimeOrigin
        }
    });
    Object.defineProperty(t9, "hrTime", {
        enumerable: !0,
        get: function() {
            return EM.hrTime
        }
    });
    Object.defineProperty(t9, "hrTimeDuration", {
        enumerable: !0,
        get: function() {
            return EM.hrTimeDuration
        }
    });
    Object.defineProperty(t9, "hrTimeToMicroseconds", {
        enumerable: !0,
        get: function() {
            return EM.hrTimeToMicroseconds
        }
    });
    Object.defineProperty(t9, "hrTimeToMilliseconds", {
        enumerable: !0,
        get: function() {
            return EM.hrTimeToMilliseconds
        }
    });
    Object.defineProperty(t9, "hrTimeToNanoseconds", {
        enumerable: !0,
        get: function() {
            return EM.hrTimeToNanoseconds
        }
    });
    Object.defineProperty(t9, "hrTimeToTimeStamp", {
        enumerable: !0,
        get: function() {
            return EM.hrTimeToTimeStamp
        }
    });
    Object.defineProperty(t9, "isTimeInput", {
        enumerable: !0,
        get: function() {
            return EM.isTimeInput
        }
    });
    Object.defineProperty(t9, "isTimeInputHrTime", {
        enumerable: !0,
        get: function() {
            return EM.isTimeInputHrTime
        }
    });
    Object.defineProperty(t9, "millisToHrTime", {
        enumerable: !0,
        get: function() {
            return EM.millisToHrTime
        }
    });
    Object.defineProperty(t9, "timeInputToHrTime", {
        enumerable: !0,
        get: function() {
            return EM.timeInputToHrTime
        }
    });
    var _E6 = WNB();
    Object.defineProperty(t9, "ExportResultCode", {
        enumerable: !0,
        get: function() {
            return _E6.ExportResultCode
        }
    });
    var kE6 = fu1();
    Object.defineProperty(t9, "parseKeyPairsIntoRecord", {
        enumerable: !0,
        get: function() {
            return kE6.parseKeyPairsIntoRecord
        }
    });
    var Ip = du1();
    Object.defineProperty(t9, "SDK_INFO", {
        enumerable: !0,
        get: function() {
            return Ip.SDK_INFO
        }
    });
    Object.defineProperty(t9, "_globalThis", {
        enumerable: !0,
        get: function() {
            return Ip._globalThis
        }
    });
    Object.defineProperty(t9, "getStringFromEnv", {
        enumerable: !0,
        get: function() {
            return Ip.getStringFromEnv
        }
    });
    Object.defineProperty(t9, "getBooleanFromEnv", {
        enumerable: !0,
        get: function() {
            return Ip.getBooleanFromEnv
        }
    });
    Object.defineProperty(t9, "getNumberFromEnv", {
        enumerable: !0,
        get: function() {
            return Ip.getNumberFromEnv
        }
    });
    Object.defineProperty(t9, "getStringListFromEnv", {
        enumerable: !0,
        get: function() {
            return Ip.getStringListFromEnv
        }
    });
    Object.defineProperty(t9, "otperformance", {
        enumerable: !0,
        get: function() {
            return Ip.otperformance
        }
    });
    Object.defineProperty(t9, "unrefTimer", {
        enumerable: !0,
        get: function() {
            return Ip.unrefTimer
        }
    });
    var yE6 = DNB();
    Object.defineProperty(t9, "CompositePropagator", {
        enumerable: !0,
        get: function() {
            return yE6.CompositePropagator
        }
    });
    var $sA = TNB();
    Object.defineProperty(t9, "TRACE_PARENT_HEADER", {
        enumerable: !0,
        get: function() {
            return $sA.TRACE_PARENT_HEADER
        }
    });
    Object.defineProperty(t9, "TRACE_STATE_HEADER", {
        enumerable: !0,
        get: function() {
            return $sA.TRACE_STATE_HEADER
        }
    });
    Object.defineProperty(t9, "W3CTraceContextPropagator", {
        enumerable: !0,
        get: function() {
            return $sA.W3CTraceContextPropagator
        }
    });
    Object.defineProperty(t9, "parseTraceParent", {
        enumerable: !0,
        get: function() {
            return $sA.parseTraceParent
        }
    });
    var wsA = _NB();
    Object.defineProperty(t9, "RPCType", {
        enumerable: !0,
        get: function() {
            return wsA.RPCType
        }
    });
    Object.defineProperty(t9, "deleteRPCMetadata", {
        enumerable: !0,
        get: function() {
            return wsA.deleteRPCMetadata
        }
    });
    Object.defineProperty(t9, "getRPCMetadata", {
        enumerable: !0,
        get: function() {
            return wsA.getRPCMetadata
        }
    });
    Object.defineProperty(t9, "setRPCMetadata", {
        enumerable: !0,
        get: function() {
            return wsA.setRPCMetadata
        }
    });
    var tu1 = H$A();
    Object.defineProperty(t9, "isTracingSuppressed", {
        enumerable: !0,
        get: function() {
            return tu1.isTracingSuppressed
        }
    });
    Object.defineProperty(t9, "suppressTracing", {
        enumerable: !0,
        get: function() {
            return tu1.suppressTracing
        }
    });
    Object.defineProperty(t9, "unsuppressTracing", {
        enumerable: !0,
        get: function() {
            return tu1.unsuppressTracing
        }
    });
    var xE6 = su1();
    Object.defineProperty(t9, "TraceState", {
        enumerable: !0,
        get: function() {
            return xE6.TraceState
        }
    });
    var vE6 = lNB();
    Object.defineProperty(t9, "merge", {
        enumerable: !0,
        get: function() {
            return vE6.merge
        }
    });
    var zLB = aNB();
    Object.defineProperty(t9, "TimeoutError", {
        enumerable: !0,
        get: function() {
            return zLB.TimeoutError
        }
    });
    Object.defineProperty(t9, "callWithTimeout", {
        enumerable: !0,
        get: function() {
            return zLB.callWithTimeout
        }
    });
    var ULB = tNB();
    Object.defineProperty(t9, "isUrlIgnored", {
        enumerable: !0,
        get: function() {
            return ULB.isUrlIgnored
        }
    });
    Object.defineProperty(t9, "urlMatches", {
        enumerable: !0,
        get: function() {
            return ULB.urlMatches
        }
    });
    var bE6 = YLB();
    Object.defineProperty(t9, "BindOnceFuture", {
        enumerable: !0,
        get: function() {
            return bE6.BindOnceFuture
        }
    });
    var fE6 = FLB();
    Object.defineProperty(t9, "diagLogLevelFromString", {
        enumerable: !0,
        get: function() {
            return fE6.diagLogLevelFromString
        }
    });
    var hE6 = HLB();
    t9.internal = {
        _export: hE6._export
    }
});
var NLB = U((wLB) => {
    Object.defineProperty(wLB, "__esModule", {
        value: !0
    });
    wLB.defaultServiceName = void 0;

    function gE6() {
        return `unknown_service:${process.argv0}`
    }
    wLB.defaultServiceName = gE6
});
var LLB = U((eu1) => {
    Object.defineProperty(eu1, "__esModule", {
        value: !0
    });
    eu1.defaultServiceName = void 0;
    var uE6 = NLB();
    Object.defineProperty(eu1, "defaultServiceName", {
        enumerable: !0,
        get: function() {
            return uE6.defaultServiceName
        }
    })
});
var Qm1 = U((Am1) => {
    Object.defineProperty(Am1, "__esModule", {
        value: !0
    });
    Am1.defaultServiceName = void 0;
    var dE6 = LLB();
    Object.defineProperty(Am1, "defaultServiceName", {
        enumerable: !0,
        get: function() {
            return dE6.defaultServiceName
        }
    })
});
var RLB = U((MLB) => {
    Object.defineProperty(MLB, "__esModule", {
        value: !0
    });
    MLB.identity = MLB.isPromiseLike = void 0;
    var pE6 = (A) => {
        return A !== null && typeof A === "object" && typeof A.then === "function"
    };
    MLB.isPromiseLike = pE6;

    function lE6(A) {
        return A
    }
    MLB.identity = lE6
});
var Zm1 = U((PLB) => {
    Object.defineProperty(PLB, "__esModule", {
        value: !0
    });
    PLB.defaultResource = PLB.emptyResource = PLB.resourceFromDetectedResource = PLB.resourceFromAttributes = void 0;
    var $$A = W9(),
        Bm1 = t6(),
        dt = ut(),
        nE6 = Qm1(),
        U$A = RLB();
    class w$A {
        _rawAttributes;
        _asyncAttributesPending = !1;
        _schemaUrl;
        _memoizedAttributes;
        static FromAttributeList(A, Q) {
            let B = new w$A({}, Q);
            return B._rawAttributes = TLB(A), B._asyncAttributesPending = A.filter(([G, Z]) => (0, U$A.isPromiseLike)(Z)).length > 0, B
        }
        constructor(A, Q) {
            let B = A.attributes ?? {};
            this._rawAttributes = Object.entries(B).map(([G, Z]) => {
                if ((0, U$A.isPromiseLike)(Z)) this._asyncAttributesPending = !0;
                return [G, Z]
            }), this._rawAttributes = TLB(this._rawAttributes), this._schemaUrl = oE6(Q?.schemaUrl)
        }
        get asyncAttributesPending() {
            return this._asyncAttributesPending
        }
        async waitForAsyncAttributes() {
            if (!this.asyncAttributesPending) return;
            for (let A = 0; A < this._rawAttributes.length; A++) {
                let [Q, B] = this._rawAttributes[A];
                this._rawAttributes[A] = [Q, (0, U$A.isPromiseLike)(B) ? await B : B]
            }
            this._asyncAttributesPending = !1
        }
        get attributes() {
            if (this.asyncAttributesPending) $$A.diag.error("Accessing resource attributes before async attributes settled");
            if (this._memoizedAttributes) return this._memoizedAttributes;
            let A = {};
            for (let [Q, B] of this._rawAttributes) {
                if ((0, U$A.isPromiseLike)(B)) {
                    $$A.diag.debug(`Unsettled resource attribute ${Q} skipped`);
                    continue
                }
                if (B != null) A[Q] ??= B
            }
            if (!this._asyncAttributesPending) this._memoizedAttributes = A;
            return A
        }
        getRawAttributes() {
            return this._rawAttributes
        }
        get schemaUrl() {
            return this._schemaUrl
        }
        merge(A) {
            if (A == null) return this;
            let Q = tE6(this, A),
                B = Q ? {
                    schemaUrl: Q
                } : void 0;
            return w$A.FromAttributeList([...A.getRawAttributes(), ...this.getRawAttributes()], B)
        }
    }

    function Gm1(A, Q) {
        return w$A.FromAttributeList(Object.entries(A), Q)
    }
    PLB.resourceFromAttributes = Gm1;

    function aE6(A, Q) {
        return new w$A(A, Q)
    }
    PLB.resourceFromDetectedResource = aE6;

    function sE6() {
        return Gm1({})
    }
    PLB.emptyResource = sE6;

    function rE6() {
        return Gm1({
            [dt.ATTR_SERVICE_NAME]: (0, nE6.defaultServiceName)(),
            [dt.ATTR_TELEMETRY_SDK_LANGUAGE]: Bm1.SDK_INFO[dt.ATTR_TELEMETRY_SDK_LANGUAGE],
            [dt.ATTR_TELEMETRY_SDK_NAME]: Bm1.SDK_INFO[dt.ATTR_TELEMETRY_SDK_NAME],
            [dt.ATTR_TELEMETRY_SDK_VERSION]: Bm1.SDK_INFO[dt.ATTR_TELEMETRY_SDK_VERSION]
        })
    }
    PLB.defaultResource = rE6;

    function TLB(A) {
        return A.map(([Q, B]) => {
            if ((0, U$A.isPromiseLike)(B)) return [Q, B.catch((G) => {
                $$A.diag.debug("promise rejection for resource attribute: %s - %s", Q, G);
                return
            })];
            return [Q, B]
        })
    }

    function oE6(A) {
        if (typeof A === "string" || A === void 0) return A;
        $$A.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", A);
        return
    }

    function tE6(A, Q) {
        let B = A?.schemaUrl,
            G = Q?.schemaUrl,
            Z = B === void 0 || B === "",
            I = G === void 0 || G === "";
        if (Z) return G;
        if (I) return B;
        if (B === G) return B;
        $$A.diag.warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', B, G);
        return
    }
});
var yLB = U((_LB) => {
    Object.defineProperty(_LB, "__esModule", {
        value: !0
    });
    _LB.detectResources = void 0;
    var SLB = W9(),
        Im1 = Zm1(),
        Bz6 = (A = {}) => {
            return (A.detectors || []).map((B) => {
                try {
                    let G = (0, Im1.resourceFromDetectedResource)(B.detect(A));
                    return SLB.diag.debug(`${B.constructor.name} found resource.`, G), G
                } catch (G) {
                    return SLB.diag.debug(`${B.constructor.name} failed: ${G.message}`), (0, Im1.emptyResource)()
                }
            }).reduce((B, G) => B.merge(G), (0, Im1.emptyResource)())
        };
    _LB.detectResources = Bz6
});
var hLB = U((bLB) => {
    Object.defineProperty(bLB, "__esModule", {
        value: !0
    });
    bLB.envDetector = void 0;
    var Gz6 = W9(),
        Zz6 = ut(),
        xLB = t6();
    class vLB {
        _MAX_LENGTH = 255;
        _COMMA_SEPARATOR = ",";
        _LABEL_KEY_VALUE_SPLITTER = "=";
        _ERROR_MESSAGE_INVALID_CHARS = "should be a ASCII string with a length greater than 0 and not exceed " + this._MAX_LENGTH + " characters.";
        _ERROR_MESSAGE_INVALID_VALUE = "should be a ASCII string with a length not exceed " + this._MAX_LENGTH + " characters.";
        detect(A) {
            let Q = {},
                B = (0, xLB.getStringFromEnv)("OTEL_RESOURCE_ATTRIBUTES"),
                G = (0, xLB.getStringFromEnv)("OTEL_SERVICE_NAME");
            if (B) try {
                let Z = this._parseResourceAttributes(B);
                Object.assign(Q, Z)
            } catch (Z) {
                Gz6.diag.debug(`EnvDetector failed: ${Z.message}`)
            }
            if (G) Q[Zz6.ATTR_SERVICE_NAME] = G;
            return {
                attributes: Q
            }
        }
        _parseResourceAttributes(A) {
            if (!A) return {};
            let Q = {},
                B = A.split(this._COMMA_SEPARATOR, -1);
            for (let G of B) {
                let Z = G.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
                if (Z.length !== 2) continue;
                let [I, Y] = Z;
                if (I = I.trim(), Y = Y.trim().split(/^"|"$/).join(""), !this._isValidAndNotEmpty(I)) throw Error(`Attribute key ${this._ERROR_MESSAGE_INVALID_CHARS}`);
                if (!this._isValid(Y)) throw Error(`Attribute value ${this._ERROR_MESSAGE_INVALID_VALUE}`);
                Q[I] = decodeURIComponent(Y)
            }
            return Q
        }
        _isValid(A) {
            return A.length <= this._MAX_LENGTH && this._isBaggageOctetString(A)
        }
        _isBaggageOctetString(A) {
            for (let Q = 0; Q < A.length; Q++) {
                let B = A.charCodeAt(Q);
                if (B < 33 || B === 44 || B === 59 || B === 92 || B > 126) return !1
            }
            return !0
        }
        _isValidAndNotEmpty(A) {
            return A.length > 0 && this._isValid(A)
        }
    }
    bLB.envDetector = new vLB
});
var q$A = U((gLB) => {
    Object.defineProperty(gLB, "__esModule", {
        value: !0
    });
    gLB.ATTR_WEBENGINE_VERSION = gLB.ATTR_WEBENGINE_NAME = gLB.ATTR_WEBENGINE_DESCRIPTION = gLB.ATTR_SERVICE_NAMESPACE = gLB.ATTR_SERVICE_INSTANCE_ID = gLB.ATTR_PROCESS_RUNTIME_VERSION = gLB.ATTR_PROCESS_RUNTIME_NAME = gLB.ATTR_PROCESS_RUNTIME_DESCRIPTION = gLB.ATTR_PROCESS_PID = gLB.ATTR_PROCESS_OWNER = gLB.ATTR_PROCESS_EXECUTABLE_PATH = gLB.ATTR_PROCESS_EXECUTABLE_NAME = gLB.ATTR_PROCESS_COMMAND_ARGS = gLB.ATTR_PROCESS_COMMAND = gLB.ATTR_OS_VERSION = gLB.ATTR_OS_TYPE = gLB.ATTR_K8S_POD_NAME = gLB.ATTR_K8S_NAMESPACE_NAME = gLB.ATTR_K8S_DEPLOYMENT_NAME = gLB.ATTR_K8S_CLUSTER_NAME = gLB.ATTR_HOST_TYPE = gLB.ATTR_HOST_NAME = gLB.ATTR_HOST_IMAGE_VERSION = gLB.ATTR_HOST_IMAGE_NAME = gLB.ATTR_HOST_IMAGE_ID = gLB.ATTR_HOST_ID = gLB.ATTR_HOST_ARCH = gLB.ATTR_CONTAINER_NAME = gLB.ATTR_CONTAINER_IMAGE_TAGS = gLB.ATTR_CONTAINER_IMAGE_NAME = gLB.ATTR_CONTAINER_ID = gLB.ATTR_CLOUD_REGION = gLB.ATTR_CLOUD_PROVIDER = gLB.ATTR_CLOUD_AVAILABILITY_ZONE = gLB.ATTR_CLOUD_ACCOUNT_ID = void 0;
    gLB.ATTR_CLOUD_ACCOUNT_ID = "cloud.account.id";
    gLB.ATTR_CLOUD_AVAILABILITY_ZONE = "cloud.availability_zone";
    gLB.ATTR_CLOUD_PROVIDER = "cloud.provider";
    gLB.ATTR_CLOUD_REGION = "cloud.region";
    gLB.ATTR_CONTAINER_ID = "container.id";
    gLB.ATTR_CONTAINER_IMAGE_NAME = "container.image.name";
    gLB.ATTR_CONTAINER_IMAGE_TAGS = "container.image.tags";
    gLB.ATTR_CONTAINER_NAME = "container.name";
    gLB.ATTR_HOST_ARCH = "host.arch";
    gLB.ATTR_HOST_ID = "host.id";
    gLB.ATTR_HOST_IMAGE_ID = "host.image.id";
    gLB.ATTR_HOST_IMAGE_NAME = "host.image.name";
    gLB.ATTR_HOST_IMAGE_VERSION = "host.image.version";
    gLB.ATTR_HOST_NAME = "host.name";
    gLB.ATTR_HOST_TYPE = "host.type";
    gLB.ATTR_K8S_CLUSTER_NAME = "k8s.cluster.name";
    gLB.ATTR_K8S_DEPLOYMENT_NAME = "k8s.deployment.name";
    gLB.ATTR_K8S_NAMESPACE_NAME = "k8s.namespace.name";
    gLB.ATTR_K8S_POD_NAME = "k8s.pod.name";
    gLB.ATTR_OS_TYPE = "os.type";
    gLB.ATTR_OS_VERSION = "os.version";
    gLB.ATTR_PROCESS_COMMAND = "process.command";
    gLB.ATTR_PROCESS_COMMAND_ARGS = "process.command_args";
    gLB.ATTR_PROCESS_EXECUTABLE_NAME = "process.executable.name";
    gLB.ATTR_PROCESS_EXECUTABLE_PATH = "process.executable.path";
    gLB.ATTR_PROCESS_OWNER = "process.owner";
    gLB.ATTR_PROCESS_PID = "process.pid";
    gLB.ATTR_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
    gLB.ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
    gLB.ATTR_PROCESS_RUNTIME_VERSION = "process.runtime.version";
    gLB.ATTR_SERVICE_INSTANCE_ID = "service.instance.id";
    gLB.ATTR_SERVICE_NAMESPACE = "service.namespace";
    gLB.ATTR_WEBENGINE_DESCRIPTION = "webengine.description";
    gLB.ATTR_WEBENGINE_NAME = "webengine.name";
    gLB.ATTR_WEBENGINE_VERSION = "webengine.version"
});
var qsA = U((mLB) => {
    Object.defineProperty(mLB, "__esModule", {
        value: !0
    });
    mLB.execAsync = void 0;
    var gz6 = UA("child_process"),
        uz6 = UA("util");
    mLB.execAsync = uz6.promisify(gz6.exec)
});
var lLB = U((cLB) => {
    Object.defineProperty(cLB, "__esModule", {
        value: !0
    });
    cLB.getMachineId = void 0;
    var mz6 = qsA(),
        dz6 = W9();
    async function cz6() {
        try {
            let Q = (await (0, mz6.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find((G) => G.includes("IOPlatformUUID"));
            if (!Q) return;
            let B = Q.split('" = "');
            if (B.length === 2) return B[1].slice(0, -1)
        } catch (A) {
            dz6.diag.debug(`error reading machine id: ${A}`)
        }
        return
    }
    cLB.getMachineId = cz6
});
var aLB = U((iLB) => {
    Object.defineProperty(iLB, "__esModule", {
        value: !0
    });
    iLB.getMachineId = void 0;
    var pz6 = UA("fs"),
        lz6 = W9();
    async function iz6() {
        let A = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
        for (let Q of A) try {
            return (await pz6.promises.readFile(Q, {
                encoding: "utf8"
            })).trim()
        } catch (B) {
            lz6.diag.debug(`error reading machine id: ${B}`)
        }
        return
    }
    iLB.getMachineId = iz6
});
var tLB = U((rLB) => {
    Object.defineProperty(rLB, "__esModule", {
        value: !0
    });
    rLB.getMachineId = void 0;
    var nz6 = UA("fs"),
        az6 = qsA(),
        sLB = W9();
    async function sz6() {
        try {
            return (await nz6.promises.readFile("/etc/hostid", {
                encoding: "utf8"
            })).trim()
        } catch (A) {
            sLB.diag.debug(`error reading machine id: ${A}`)
        }
        try {
            return (await (0, az6.execAsync)("kenv -q smbios.system.uuid")).stdout.trim()
        } catch (A) {
            sLB.diag.debug(`error reading machine id: ${A}`)
        }
        return
    }
    rLB.getMachineId = sz6
});
var BMB = U((AMB) => {
    Object.defineProperty(AMB, "__esModule", {
        value: !0
    });
    AMB.getMachineId = void 0;
    var eLB = UA("process"),
        rz6 = qsA(),
        oz6 = W9();
    async function tz6() {
        let Q = "%windir%\\System32\\REG.exe";
        if (eLB.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in eLB.env) Q = "%windir%\\sysnative\\cmd.exe /c " + Q;
        try {
            let G = (await (0, rz6.execAsync)(`${Q} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`)).stdout.split("REG_SZ");
            if (G.length === 2) return G[1].trim()
        } catch (B) {
            oz6.diag.debug(`error reading machine id: ${B}`)
        }
        return
    }
    AMB.getMachineId = tz6
});
var IMB = U((GMB) => {
    Object.defineProperty(GMB, "__esModule", {
        value: !0
    });
    GMB.getMachineId = void 0;
    var ez6 = W9();
    async function AU6() {
        ez6.diag.debug("could not read machine-id: unsupported platform");
        return
    }
    GMB.getMachineId = AU6
});
var WMB = U((YMB) => {
    Object.defineProperty(YMB, "__esModule", {
        value: !0
    });
    YMB.getMachineId = void 0;
    var QU6 = UA("process"),
        ct;
    async function BU6() {
        if (!ct) switch (QU6.platform) {
            case "darwin":
                ct = (await Promise.resolve().then(() => GA(lLB()))).getMachineId;
                break;
            case "linux":
                ct = (await Promise.resolve().then(() => GA(aLB()))).getMachineId;
                break;
            case "freebsd":
                ct = (await Promise.resolve().then(() => GA(tLB()))).getMachineId;
                break;
            case "win32":
                ct = (await Promise.resolve().then(() => GA(BMB()))).getMachineId;
                break;
            default:
                ct = (await Promise.resolve().then(() => GA(IMB()))).getMachineId;
                break
        }
        return ct()
    }
    YMB.getMachineId = BU6
});
var Ym1 = U((XMB) => {
    Object.defineProperty(XMB, "__esModule", {
        value: !0
    });
    XMB.normalizeType = XMB.normalizeArch = void 0;
    var GU6 = (A) => {
        switch (A) {
            case "arm":
                return "arm32";
            case "ppc":
                return "ppc32";
            case "x64":
                return "amd64";
            default:
                return A
        }
    };
    XMB.normalizeArch = GU6;
    var ZU6 = (A) => {
        switch (A) {
            case "sunos":
                return "solaris";
            case "win32":
                return "windows";
            default:
                return A
        }
    };
    XMB.normalizeType = ZU6
});
var CMB = U((DMB) => {
    Object.defineProperty(DMB, "__esModule", {
        value: !0
    });
    DMB.hostDetector = void 0;
    var Jm1 = q$A(),
        VMB = UA("os"),
        YU6 = WMB(),
        JU6 = Ym1();
    class KMB {
        detect(A) {
            return {
                attributes: {
                    [Jm1.ATTR_HOST_NAME]: (0, VMB.hostname)(),
                    [Jm1.ATTR_HOST_ARCH]: (0, JU6.normalizeArch)((0, VMB.arch)()),
                    [Jm1.ATTR_HOST_ID]: (0, YU6.getMachineId)()
                }
            }
        }
    }
    DMB.hostDetector = new KMB
});
var qMB = U(($MB) => {
    Object.defineProperty($MB, "__esModule", {
        value: !0
    });
    $MB.osDetector = void 0;
    var EMB = q$A(),
        zMB = UA("os"),
        WU6 = Ym1();
    class UMB {
        detect(A) {
            return {
                attributes: {
                    [EMB.ATTR_OS_TYPE]: (0, WU6.normalizeType)((0, zMB.platform)()),
                    [EMB.ATTR_OS_VERSION]: (0, zMB.release)()
                }
            }
        }
    }
    $MB.osDetector = new UMB
});
var OMB = U((LMB) => {
    Object.defineProperty(LMB, "__esModule", {
        value: !0
    });
    LMB.processDetector = void 0;
    var XU6 = W9(),
        tb = q$A(),
        FU6 = UA("os");
    class NMB {
        detect(A) {
            let Q = {
                [tb.ATTR_PROCESS_PID]: process.pid,
                [tb.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
                [tb.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
                [tb.ATTR_PROCESS_COMMAND_ARGS]: [process.argv[0], ...process.execArgv, ...process.argv.slice(1)],
                [tb.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
                [tb.ATTR_PROCESS_RUNTIME_NAME]: "nodejs",
                [tb.ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js"
            };
            if (process.argv.length > 1) Q[tb.ATTR_PROCESS_COMMAND] = process.argv[1];
            try {
                let B = FU6.userInfo();
                Q[tb.ATTR_PROCESS_OWNER] = B.username
            } catch (B) {
                XU6.diag.debug(`error obtaining process owner: ${B}`)
            }
            return {
                attributes: Q
            }
        }
    }
    LMB.processDetector = new NMB
});
var jMB = U((TMB) => {
    Object.defineProperty(TMB, "__esModule", {
        value: !0
    });
    TMB.serviceInstanceIdDetector = void 0;
    var VU6 = q$A(),
        KU6 = UA("crypto");
    class RMB {
        detect(A) {
            return {
                attributes: {
                    [VU6.ATTR_SERVICE_INSTANCE_ID]: (0, KU6.randomUUID)()
                }
            }
        }
    }
    TMB.serviceInstanceIdDetector = new RMB
});
var SMB = U((v7A) => {
    Object.defineProperty(v7A, "__esModule", {
        value: !0
    });
    v7A.serviceInstanceIdDetector = v7A.processDetector = v7A.osDetector = v7A.hostDetector = void 0;
    var DU6 = CMB();
    Object.defineProperty(v7A, "hostDetector", {
        enumerable: !0,
        get: function() {
            return DU6.hostDetector
        }
    });
    var HU6 = qMB();
    Object.defineProperty(v7A, "osDetector", {
        enumerable: !0,
        get: function() {
            return HU6.osDetector
        }
    });
    var CU6 = OMB();
    Object.defineProperty(v7A, "processDetector", {
        enumerable: !0,
        get: function() {
            return CU6.processDetector
        }
    });
    var EU6 = jMB();
    Object.defineProperty(v7A, "serviceInstanceIdDetector", {
        enumerable: !0,
        get: function() {
            return EU6.serviceInstanceIdDetector
        }
    })
});
var _MB = U((b7A) => {
    Object.defineProperty(b7A, "__esModule", {
        value: !0
    });
    b7A.serviceInstanceIdDetector = b7A.processDetector = b7A.osDetector = b7A.hostDetector = void 0;
    var NsA = SMB();
    Object.defineProperty(b7A, "hostDetector", {
        enumerable: !0,
        get: function() {
            return NsA.hostDetector
        }
    });
    Object.defineProperty(b7A, "osDetector", {
        enumerable: !0,
        get: function() {
            return NsA.osDetector
        }
    });
    Object.defineProperty(b7A, "processDetector", {
        enumerable: !0,
        get: function() {
            return NsA.processDetector
        }
    });
    Object.defineProperty(b7A, "serviceInstanceIdDetector", {
        enumerable: !0,
        get: function() {
            return NsA.serviceInstanceIdDetector
        }
    })
});
var xMB = U((kMB) => {
    Object.defineProperty(kMB, "__esModule", {
        value: !0
    });
    kMB.noopDetector = kMB.NoopDetector = void 0;
    class Wm1 {
        detect() {
            return {
                attributes: {}
            }
        }
    }
    kMB.NoopDetector = Wm1;
    kMB.noopDetector = new Wm1
});
var vMB = U((Yp) => {
    Object.defineProperty(Yp, "__esModule", {
        value: !0
    });
    Yp.noopDetector = Yp.serviceInstanceIdDetector = Yp.processDetector = Yp.osDetector = Yp.hostDetector = Yp.envDetector = void 0;
    var wU6 = hLB();
    Object.defineProperty(Yp, "envDetector", {
        enumerable: !0,
        get: function() {
            return wU6.envDetector
        }
    });
    var LsA = _MB();
    Object.defineProperty(Yp, "hostDetector", {
        enumerable: !0,
        get: function() {
            return LsA.hostDetector
        }
    });
    Object.defineProperty(Yp, "osDetector", {
        enumerable: !0,
        get: function() {
            return LsA.osDetector
        }
    });
    Object.defineProperty(Yp, "processDetector", {
        enumerable: !0,
        get: function() {
            return LsA.processDetector
        }
    });
    Object.defineProperty(Yp, "serviceInstanceIdDetector", {
        enumerable: !0,
        get: function() {
            return LsA.serviceInstanceIdDetector
        }
    });
    var qU6 = xMB();
    Object.defineProperty(Yp, "noopDetector", {
        enumerable: !0,
        get: function() {
            return qU6.noopDetector
        }
    })
});
var f7A = U((zM) => {
    Object.defineProperty(zM, "__esModule", {
        value: !0
    });
    zM.defaultServiceName = zM.emptyResource = zM.defaultResource = zM.resourceFromAttributes = zM.serviceInstanceIdDetector = zM.processDetector = zM.osDetector = zM.hostDetector = zM.envDetector = zM.detectResources = void 0;
    var LU6 = yLB();
    Object.defineProperty(zM, "detectResources", {
        enumerable: !0,
        get: function() {
            return LU6.detectResources
        }
    });
    var N$A = vMB();
    Object.defineProperty(zM, "envDetector", {
        enumerable: !0,
        get: function() {
            return N$A.envDetector
        }
    });
    Object.defineProperty(zM, "hostDetector", {
        enumerable: !0,
        get: function() {
            return N$A.hostDetector
        }
    });
    Object.defineProperty(zM, "osDetector", {
        enumerable: !0,
        get: function() {
            return N$A.osDetector
        }
    });
    Object.defineProperty(zM, "processDetector", {
        enumerable: !0,
        get: function() {
            return N$A.processDetector
        }
    });
    Object.defineProperty(zM, "serviceInstanceIdDetector", {
        enumerable: !0,
        get: function() {
            return N$A.serviceInstanceIdDetector
        }
    });
    var Xm1 = Zm1();
    Object.defineProperty(zM, "resourceFromAttributes", {
        enumerable: !0,
        get: function() {
            return Xm1.resourceFromAttributes
        }
    });
    Object.defineProperty(zM, "defaultResource", {
        enumerable: !0,
        get: function() {
            return Xm1.defaultResource
        }
    });
    Object.defineProperty(zM, "emptyResource", {
        enumerable: !0,
        get: function() {
            return Xm1.emptyResource
        }
    });
    var MU6 = Qm1();
    Object.defineProperty(zM, "defaultServiceName", {
        enumerable: !0,
        get: function() {
            return MU6.defaultServiceName
        }
    })
});
var gMB = U((fMB) => {
    Object.defineProperty(fMB, "__esModule", {
        value: !0
    });
    fMB.LogRecordImpl = void 0;
    var pt = W9(),
        MsA = t6();
    class bMB {
        hrTime;
        hrTimeObserved;
        spanContext;
        resource;
        instrumentationScope;
        attributes = {};
        _severityText;
        _severityNumber;
        _body;
        _eventName;
        totalAttributesCount = 0;
        _isReadonly = !1;
        _logRecordLimits;
        set severityText(A) {
            if (this._isLogRecordReadonly()) return;
            this._severityText = A
        }
        get severityText() {
            return this._severityText
        }
        set severityNumber(A) {
            if (this._isLogRecordReadonly()) return;
            this._severityNumber = A
        }
        get severityNumber() {
            return this._severityNumber
        }
        set body(A) {
            if (this._isLogRecordReadonly()) return;
            this._body = A
        }
        get body() {
            return this._body
        }
        get eventName() {
            return this._eventName
        }
        set eventName(A) {
            if (this._isLogRecordReadonly()) return;
            this._eventName = A
        }
        get droppedAttributesCount() {
            return this.totalAttributesCount - Object.keys(this.attributes).length
        }