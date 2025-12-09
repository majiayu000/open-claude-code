/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_039.js
 * 处理时间: 2025-12-09T03:41:36.783Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       (  2x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 39/61
 * Lines: 191190 - 192672 (1483 lines)
 * Original file: cli.js
 */

        createObservableCounter(A, Q) {
            return _FB.NOOP_OBSERVABLE_COUNTER_METRIC
        }
        createObservableUpDownCounter(A, Q) {
            return _FB.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC
        }
        addBatchObservableCallback(A, Q) {}
        removeBatchObservableCallback(A) {}
    }
    _FB.NoopMeter = hg1;
    class y7A {}
    _FB.NoopMetric = y7A;
    class gg1 extends y7A {
        add(A, Q) {}
    }
    _FB.NoopCounterMetric = gg1;
    class ug1 extends y7A {
        add(A, Q) {}
    }
    _FB.NoopUpDownCounterMetric = ug1;
    class mg1 extends y7A {
        record(A, Q) {}
    }
    _FB.NoopGaugeMetric = mg1;
    class dg1 extends y7A {
        record(A, Q) {}
    }
    _FB.NoopHistogramMetric = dg1;
    class K$A {
        addCallback(A) {}
        removeCallback(A) {}
    }
    _FB.NoopObservableMetric = K$A;
    class cg1 extends K$A {}
    _FB.NoopObservableCounterMetric = cg1;
    class pg1 extends K$A {}
    _FB.NoopObservableGaugeMetric = pg1;
    class lg1 extends K$A {}
    _FB.NoopObservableUpDownCounterMetric = lg1;
    _FB.NOOP_METER = new hg1;
    _FB.NOOP_COUNTER_METRIC = new gg1;
    _FB.NOOP_GAUGE_METRIC = new mg1;
    _FB.NOOP_HISTOGRAM_METRIC = new dg1;
    _FB.NOOP_UP_DOWN_COUNTER_METRIC = new ug1;
    _FB.NOOP_OBSERVABLE_COUNTER_METRIC = new cg1;
    _FB.NOOP_OBSERVABLE_GAUGE_METRIC = new pg1;
    _FB.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new lg1;

    function H36() {
        return _FB.NOOP_METER
    }
    _FB.createNoopMeter = H36
});
var dFB = U((mFB) => {
    Object.defineProperty(mFB, "__esModule", {
        value: !0
    });
    mFB.ValueType = void 0;
    var O36;
    (function(A) {
        A[A.INT = 0] = "INT", A[A.DOUBLE = 1] = "DOUBLE"
    })(O36 = mFB.ValueType || (mFB.ValueType = {}))
});
var ag1 = U((cFB) => {
    Object.defineProperty(cFB, "__esModule", {
        value: !0
    });
    cFB.defaultTextMapSetter = cFB.defaultTextMapGetter = void 0;
    cFB.defaultTextMapGetter = {
        get(A, Q) {
            if (A == null) return;
            return A[Q]
        },
        keys(A) {
            if (A == null) return [];
            return Object.keys(A)
        }
    };
    cFB.defaultTextMapSetter = {
        set(A, Q, B) {
            if (A == null) return;
            A[Q] = B
        }
    }
});
var aFB = U((iFB) => {
    Object.defineProperty(iFB, "__esModule", {
        value: !0
    });
    iFB.NoopContextManager = void 0;
    var T36 = V$A();
    class lFB {
        active() {
            return T36.ROOT_CONTEXT
        }
        with(A, Q, B, ...G) {
            return Q.call(B, ...G)
        }
        bind(A, Q) {
            return Q
        }
        enable() {
            return this
        }
        disable() {
            return this
        }
    }
    iFB.NoopContextManager = lFB
});
var D$A = U((rFB) => {
    Object.defineProperty(rFB, "__esModule", {
        value: !0
    });
    rFB.ContextAPI = void 0;
    var P36 = aFB(),
        sg1 = yt(),
        sFB = xt(),
        rg1 = "context",
        j36 = new P36.NoopContextManager;
    class og1 {
        constructor() {}
        static getInstance() {
            if (!this._instance) this._instance = new og1;
            return this._instance
        }
        setGlobalContextManager(A) {
            return (0, sg1.registerGlobal)(rg1, A, sFB.DiagAPI.instance())
        }
        active() {
            return this._getContextManager().active()
        }
        with(A, Q, B, ...G) {
            return this._getContextManager().with(A, Q, B, ...G)
        }
        bind(A, Q) {
            return this._getContextManager().bind(A, Q)
        }
        _getContextManager() {
            return (0, sg1.getGlobal)(rg1) || j36
        }
        disable() {
            this._getContextManager().disable(), (0, sg1.unregisterGlobal)(rg1, sFB.DiagAPI.instance())
        }
    }
    rFB.ContextAPI = og1
});
var eg1 = U((tFB) => {
    Object.defineProperty(tFB, "__esModule", {
        value: !0
    });
    tFB.TraceFlags = void 0;
    var S36;
    (function(A) {
        A[A.NONE = 0] = "NONE", A[A.SAMPLED = 1] = "SAMPLED"
    })(S36 = tFB.TraceFlags || (tFB.TraceFlags = {}))
});
var ZsA = U((eFB) => {
    Object.defineProperty(eFB, "__esModule", {
        value: !0
    });
    eFB.INVALID_SPAN_CONTEXT = eFB.INVALID_TRACEID = eFB.INVALID_SPANID = void 0;
    var _36 = eg1();
    eFB.INVALID_SPANID = "0000000000000000";
    eFB.INVALID_TRACEID = "00000000000000000000000000000000";
    eFB.INVALID_SPAN_CONTEXT = {
        traceId: eFB.INVALID_TRACEID,
        spanId: eFB.INVALID_SPANID,
        traceFlags: _36.TraceFlags.NONE
    }
});
var IsA = U((ZVB) => {
    Object.defineProperty(ZVB, "__esModule", {
        value: !0
    });
    ZVB.NonRecordingSpan = void 0;
    var k36 = ZsA();
    class GVB {
        constructor(A = k36.INVALID_SPAN_CONTEXT) {
            this._spanContext = A
        }
        spanContext() {
            return this._spanContext
        }
        setAttribute(A, Q) {
            return this
        }
        setAttributes(A) {
            return this
        }
        addEvent(A, Q) {
            return this
        }
        addLink(A) {
            return this
        }
        addLinks(A) {
            return this
        }
        setStatus(A) {
            return this
        }
        updateName(A) {
            return this
        }
        end(A) {}
        isRecording() {
            return !1
        }
        recordException(A, Q) {}
    }
    ZVB.NonRecordingSpan = GVB
});
var Bu1 = U((JVB) => {
    Object.defineProperty(JVB, "__esModule", {
        value: !0
    });
    JVB.getSpanContext = JVB.setSpanContext = JVB.deleteSpan = JVB.setSpan = JVB.getActiveSpan = JVB.getSpan = void 0;
    var y36 = V$A(),
        x36 = IsA(),
        v36 = D$A(),
        Au1 = (0, y36.createContextKey)("OpenTelemetry Context Key SPAN");

    function Qu1(A) {
        return A.getValue(Au1) || void 0
    }
    JVB.getSpan = Qu1;

    function b36() {
        return Qu1(v36.ContextAPI.getInstance().active())
    }
    JVB.getActiveSpan = b36;

    function YVB(A, Q) {
        return A.setValue(Au1, Q)
    }
    JVB.setSpan = YVB;

    function f36(A) {
        return A.deleteValue(Au1)
    }
    JVB.deleteSpan = f36;

    function h36(A, Q) {
        return YVB(A, new x36.NonRecordingSpan(Q))
    }
    JVB.setSpanContext = h36;

    function g36(A) {
        var Q;
        return (Q = Qu1(A)) === null || Q === void 0 ? void 0 : Q.spanContext()
    }
    JVB.getSpanContext = g36
});
var YsA = U((KVB) => {
    Object.defineProperty(KVB, "__esModule", {
        value: !0
    });
    KVB.wrapSpanContext = KVB.isSpanContextValid = KVB.isValidSpanId = KVB.isValidTraceId = void 0;
    var XVB = ZsA(),
        l36 = IsA(),
        i36 = /^([0-9a-f]{32})$/i,
        n36 = /^[0-9a-f]{16}$/i;

    function FVB(A) {
        return i36.test(A) && A !== XVB.INVALID_TRACEID
    }
    KVB.isValidTraceId = FVB;

    function VVB(A) {
        return n36.test(A) && A !== XVB.INVALID_SPANID
    }
    KVB.isValidSpanId = VVB;

    function a36(A) {
        return FVB(A.traceId) && VVB(A.spanId)
    }
    KVB.isSpanContextValid = a36;

    function s36(A) {
        return new l36.NonRecordingSpan(A)
    }
    KVB.wrapSpanContext = s36
});
var Iu1 = U((EVB) => {
    Object.defineProperty(EVB, "__esModule", {
        value: !0
    });
    EVB.NoopTracer = void 0;
    var e36 = D$A(),
        HVB = Bu1(),
        Gu1 = IsA(),
        A76 = YsA(),
        Zu1 = e36.ContextAPI.getInstance();
    class CVB {
        startSpan(A, Q, B = Zu1.active()) {
            if (Boolean(Q === null || Q === void 0 ? void 0 : Q.root)) return new Gu1.NonRecordingSpan;
            let Z = B && (0, HVB.getSpanContext)(B);
            if (Q76(Z) && (0, A76.isSpanContextValid)(Z)) return new Gu1.NonRecordingSpan(Z);
            else return new Gu1.NonRecordingSpan
        }
        startActiveSpan(A, Q, B, G) {
            let Z, I, Y;
            if (arguments.length < 2) return;
            else if (arguments.length === 2) Y = Q;
            else if (arguments.length === 3) Z = Q, Y = B;
            else Z = Q, I = B, Y = G;
            let J = I !== null && I !== void 0 ? I : Zu1.active(),
                W = this.startSpan(A, Z, J),
                X = (0, HVB.setSpan)(J, W);
            return Zu1.with(X, Y, void 0, W)
        }
    }
    EVB.NoopTracer = CVB;

    function Q76(A) {
        return typeof A === "object" && typeof A.spanId === "string" && typeof A.traceId === "string" && typeof A.traceFlags === "number"
    }
});
var Yu1 = U(($VB) => {
    Object.defineProperty($VB, "__esModule", {
        value: !0
    });
    $VB.ProxyTracer = void 0;
    var B76 = Iu1(),
        G76 = new B76.NoopTracer;
    class UVB {
        constructor(A, Q, B, G) {
            this._provider = A, this.name = Q, this.version = B, this.options = G
        }
        startSpan(A, Q, B) {
            return this._getTracer().startSpan(A, Q, B)
        }
        startActiveSpan(A, Q, B, G) {
            let Z = this._getTracer();
            return Reflect.apply(Z.startActiveSpan, Z, arguments)
        }
        _getTracer() {
            if (this._delegate) return this._delegate;
            let A = this._provider.getDelegateTracer(this.name, this.version, this.options);
            if (!A) return G76;
            return this._delegate = A, this._delegate
        }
    }
    $VB.ProxyTracer = UVB
});
var MVB = U((NVB) => {
    Object.defineProperty(NVB, "__esModule", {
        value: !0
    });
    NVB.NoopTracerProvider = void 0;
    var Z76 = Iu1();
    class qVB {
        getTracer(A, Q, B) {
            return new Z76.NoopTracer
        }
    }
    NVB.NoopTracerProvider = qVB
});
var Ju1 = U((RVB) => {
    Object.defineProperty(RVB, "__esModule", {
        value: !0
    });
    RVB.ProxyTracerProvider = void 0;
    var I76 = Yu1(),
        Y76 = MVB(),
        J76 = new Y76.NoopTracerProvider;
    class OVB {
        getTracer(A, Q, B) {
            var G;
            return (G = this.getDelegateTracer(A, Q, B)) !== null && G !== void 0 ? G : new I76.ProxyTracer(this, A, Q, B)
        }
        getDelegate() {
            var A;
            return (A = this._delegate) !== null && A !== void 0 ? A : J76
        }
        setDelegate(A) {
            this._delegate = A
        }
        getDelegateTracer(A, Q, B) {
            var G;
            return (G = this._delegate) === null || G === void 0 ? void 0 : G.getTracer(A, Q, B)
        }
    }
    RVB.ProxyTracerProvider = OVB
});
var jVB = U((PVB) => {
    Object.defineProperty(PVB, "__esModule", {
        value: !0
    });
    PVB.SamplingDecision = void 0;
    var W76;
    (function(A) {
        A[A.NOT_RECORD = 0] = "NOT_RECORD", A[A.RECORD = 1] = "RECORD", A[A.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
    })(W76 = PVB.SamplingDecision || (PVB.SamplingDecision = {}))
});
var _VB = U((SVB) => {
    Object.defineProperty(SVB, "__esModule", {
        value: !0
    });
    SVB.SpanKind = void 0;
    var X76;
    (function(A) {
        A[A.INTERNAL = 0] = "INTERNAL", A[A.SERVER = 1] = "SERVER", A[A.CLIENT = 2] = "CLIENT", A[A.PRODUCER = 3] = "PRODUCER", A[A.CONSUMER = 4] = "CONSUMER"
    })(X76 = SVB.SpanKind || (SVB.SpanKind = {}))
});
var yVB = U((kVB) => {
    Object.defineProperty(kVB, "__esModule", {
        value: !0
    });
    kVB.SpanStatusCode = void 0;
    var F76;
    (function(A) {
        A[A.UNSET = 0] = "UNSET", A[A.OK = 1] = "OK", A[A.ERROR = 2] = "ERROR"
    })(F76 = kVB.SpanStatusCode || (kVB.SpanStatusCode = {}))
});
var bVB = U((xVB) => {
    Object.defineProperty(xVB, "__esModule", {
        value: !0
    });
    xVB.validateValue = xVB.validateKey = void 0;
    var Vu1 = "[_0-9a-z-*/]",
        V76 = `[a-z]${Vu1}{0,255}`,
        K76 = `[a-z0-9]${Vu1}{0,240}@[a-z]${Vu1}{0,13}`,
        D76 = new RegExp(`^(?:${V76}|${K76})$`),
        H76 = /^[ -~]{0,255}[!-~]$/,
        C76 = /,|=/;

    function E76(A) {
        return D76.test(A)
    }
    xVB.validateKey = E76;

    function z76(A) {
        return H76.test(A) && !C76.test(A)
    }
    xVB.validateValue = z76
});
var cVB = U((mVB) => {
    Object.defineProperty(mVB, "__esModule", {
        value: !0
    });
    mVB.TraceStateImpl = void 0;
    var fVB = bVB(),
        hVB = 32,
        $76 = 512,
        gVB = ",",
        uVB = "=";
    class Ku1 {
        constructor(A) {
            if (this._internalState = new Map, A) this._parse(A)
        }
        set(A, Q) {
            let B = this._clone();
            if (B._internalState.has(A)) B._internalState.delete(A);
            return B._internalState.set(A, Q), B
        }
        unset(A) {
            let Q = this._clone();
            return Q._internalState.delete(A), Q
        }
        get(A) {
            return this._internalState.get(A)
        }
        serialize() {
            return this._keys().reduce((A, Q) => {
                return A.push(Q + uVB + this.get(Q)), A
            }, []).join(gVB)
        }
        _parse(A) {
            if (A.length > $76) return;
            if (this._internalState = A.split(gVB).reverse().reduce((Q, B) => {
                    let G = B.trim(),
                        Z = G.indexOf(uVB);
                    if (Z !== -1) {
                        let I = G.slice(0, Z),
                            Y = G.slice(Z + 1, B.length);
                        if ((0, fVB.validateKey)(I) && (0, fVB.validateValue)(Y)) Q.set(I, Y)
                    }
                    return Q
                }, new Map), this._internalState.size > hVB) this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, hVB))
        }
        _keys() {
            return Array.from(this._internalState.keys()).reverse()
        }
        _clone() {
            let A = new Ku1;
            return A._internalState = new Map(this._internalState), A
        }
    }
    mVB.TraceStateImpl = Ku1
});
var iVB = U((pVB) => {
    Object.defineProperty(pVB, "__esModule", {
        value: !0
    });
    pVB.createTraceState = void 0;
    var w76 = cVB();

    function q76(A) {
        return new w76.TraceStateImpl(A)
    }
    pVB.createTraceState = q76
});
var sVB = U((nVB) => {
    Object.defineProperty(nVB, "__esModule", {
        value: !0
    });
    nVB.context = void 0;
    var N76 = D$A();
    nVB.context = N76.ContextAPI.getInstance()
});
var tVB = U((rVB) => {
    Object.defineProperty(rVB, "__esModule", {
        value: !0
    });
    rVB.diag = void 0;
    var L76 = xt();
    rVB.diag = L76.DiagAPI.instance()
});
var QKB = U((eVB) => {
    Object.defineProperty(eVB, "__esModule", {
        value: !0
    });
    eVB.NOOP_METER_PROVIDER = eVB.NoopMeterProvider = void 0;
    var M76 = ig1();
    class Du1 {
        getMeter(A, Q, B) {
            return M76.NOOP_METER
        }
    }
    eVB.NoopMeterProvider = Du1;
    eVB.NOOP_METER_PROVIDER = new Du1
});
var IKB = U((GKB) => {
    Object.defineProperty(GKB, "__esModule", {
        value: !0
    });
    GKB.MetricsAPI = void 0;
    var R76 = QKB(),
        Hu1 = yt(),
        BKB = xt(),
        Cu1 = "metrics";
    class Eu1 {
        constructor() {}
        static getInstance() {
            if (!this._instance) this._instance = new Eu1;
            return this._instance
        }
        setGlobalMeterProvider(A) {
            return (0, Hu1.registerGlobal)(Cu1, A, BKB.DiagAPI.instance())
        }
        getMeterProvider() {
            return (0, Hu1.getGlobal)(Cu1) || R76.NOOP_METER_PROVIDER
        }
        getMeter(A, Q, B) {
            return this.getMeterProvider().getMeter(A, Q, B)
        }
        disable() {
            (0, Hu1.unregisterGlobal)(Cu1, BKB.DiagAPI.instance())
        }
    }
    GKB.MetricsAPI = Eu1
});
var WKB = U((YKB) => {
    Object.defineProperty(YKB, "__esModule", {
        value: !0
    });
    YKB.metrics = void 0;
    var T76 = IKB();
    YKB.metrics = T76.MetricsAPI.getInstance()
});
var KKB = U((FKB) => {
    Object.defineProperty(FKB, "__esModule", {
        value: !0
    });
    FKB.NoopTextMapPropagator = void 0;
    class XKB {
        inject(A, Q) {}
        extract(A, Q) {
            return A
        }
        fields() {
            return []
        }
    }
    FKB.NoopTextMapPropagator = XKB
});
var EKB = U((HKB) => {
    Object.defineProperty(HKB, "__esModule", {
        value: !0
    });
    HKB.deleteBaggage = HKB.setBaggage = HKB.getActiveBaggage = HKB.getBaggage = void 0;
    var P76 = D$A(),
        j76 = V$A(),
        zu1 = (0, j76.createContextKey)("OpenTelemetry Baggage Key");

    function DKB(A) {
        return A.getValue(zu1) || void 0
    }
    HKB.getBaggage = DKB;

    function S76() {
        return DKB(P76.ContextAPI.getInstance().active())
    }
    HKB.getActiveBaggage = S76;

    function _76(A, Q) {
        return A.setValue(zu1, Q)
    }
    HKB.setBaggage = _76;

    function k76(A) {
        return A.deleteValue(zu1)
    }
    HKB.deleteBaggage = k76
});
var qKB = U(($KB) => {
    Object.defineProperty($KB, "__esModule", {
        value: !0
    });
    $KB.PropagationAPI = void 0;
    var Uu1 = yt(),
        b76 = KKB(),
        zKB = ag1(),
        JsA = EKB(),
        f76 = bg1(),
        UKB = xt(),
        $u1 = "propagation",
        h76 = new b76.NoopTextMapPropagator;
    class wu1 {
        constructor() {
            this.createBaggage = f76.createBaggage, this.getBaggage = JsA.getBaggage, this.getActiveBaggage = JsA.getActiveBaggage, this.setBaggage = JsA.setBaggage, this.deleteBaggage = JsA.deleteBaggage
        }
        static getInstance() {
            if (!this._instance) this._instance = new wu1;
            return this._instance
        }
        setGlobalPropagator(A) {
            return (0, Uu1.registerGlobal)($u1, A, UKB.DiagAPI.instance())
        }
        inject(A, Q, B = zKB.defaultTextMapSetter) {
            return this._getGlobalPropagator().inject(A, Q, B)
        }
        extract(A, Q, B = zKB.defaultTextMapGetter) {
            return this._getGlobalPropagator().extract(A, Q, B)
        }
        fields() {
            return this._getGlobalPropagator().fields()
        }
        disable() {
            (0, Uu1.unregisterGlobal)($u1, UKB.DiagAPI.instance())
        }
        _getGlobalPropagator() {
            return (0, Uu1.getGlobal)($u1) || h76
        }
    }
    $KB.PropagationAPI = wu1
});
var MKB = U((NKB) => {
    Object.defineProperty(NKB, "__esModule", {
        value: !0
    });
    NKB.propagation = void 0;
    var g76 = qKB();
    NKB.propagation = g76.PropagationAPI.getInstance()
});
var SKB = U((PKB) => {
    Object.defineProperty(PKB, "__esModule", {
        value: !0
    });
    PKB.TraceAPI = void 0;
    var qu1 = yt(),
        OKB = Ju1(),
        RKB = YsA(),
        x7A = Bu1(),
        TKB = xt(),
        Nu1 = "trace";
    class Lu1 {
        constructor() {
            this._proxyTracerProvider = new OKB.ProxyTracerProvider, this.wrapSpanContext = RKB.wrapSpanContext, this.isSpanContextValid = RKB.isSpanContextValid, this.deleteSpan = x7A.deleteSpan, this.getSpan = x7A.getSpan, this.getActiveSpan = x7A.getActiveSpan, this.getSpanContext = x7A.getSpanContext, this.setSpan = x7A.setSpan, this.setSpanContext = x7A.setSpanContext
        }
        static getInstance() {
            if (!this._instance) this._instance = new Lu1;
            return this._instance
        }
        setGlobalTracerProvider(A) {
            let Q = (0, qu1.registerGlobal)(Nu1, this._proxyTracerProvider, TKB.DiagAPI.instance());
            if (Q) this._proxyTracerProvider.setDelegate(A);
            return Q
        }
        getTracerProvider() {
            return (0, qu1.getGlobal)(Nu1) || this._proxyTracerProvider
        }
        getTracer(A, Q) {
            return this.getTracerProvider().getTracer(A, Q)
        }
        disable() {
            (0, qu1.unregisterGlobal)(Nu1, TKB.DiagAPI.instance()), this._proxyTracerProvider = new OKB.ProxyTracerProvider
        }
    }
    PKB.TraceAPI = Lu1
});
var yKB = U((_KB) => {
    Object.defineProperty(_KB, "__esModule", {
        value: !0
    });
    _KB.trace = void 0;
    var u76 = SKB();
    _KB.trace = u76.TraceAPI.getInstance()
});
var W9 = U((BG) => {
    Object.defineProperty(BG, "__esModule", {
        value: !0
    });
    BG.trace = BG.propagation = BG.metrics = BG.diag = BG.context = BG.INVALID_SPAN_CONTEXT = BG.INVALID_TRACEID = BG.INVALID_SPANID = BG.isValidSpanId = BG.isValidTraceId = BG.isSpanContextValid = BG.createTraceState = BG.TraceFlags = BG.SpanStatusCode = BG.SpanKind = BG.SamplingDecision = BG.ProxyTracerProvider = BG.ProxyTracer = BG.defaultTextMapSetter = BG.defaultTextMapGetter = BG.ValueType = BG.createNoopMeter = BG.DiagLogLevel = BG.DiagConsoleLogger = BG.ROOT_CONTEXT = BG.createContextKey = BG.baggageEntryMetadataFromString = void 0;
    var m76 = bg1();
    Object.defineProperty(BG, "baggageEntryMetadataFromString", {
        enumerable: !0,
        get: function() {
            return m76.baggageEntryMetadataFromString
        }
    });
    var xKB = V$A();
    Object.defineProperty(BG, "createContextKey", {
        enumerable: !0,
        get: function() {
            return xKB.createContextKey
        }
    });
    Object.defineProperty(BG, "ROOT_CONTEXT", {
        enumerable: !0,
        get: function() {
            return xKB.ROOT_CONTEXT
        }
    });
    var d76 = SFB();
    Object.defineProperty(BG, "DiagConsoleLogger", {
        enumerable: !0,
        get: function() {
            return d76.DiagConsoleLogger
        }
    });
    var c76 = QsA();
    Object.defineProperty(BG, "DiagLogLevel", {
        enumerable: !0,
        get: function() {
            return c76.DiagLogLevel
        }
    });
    var p76 = ig1();
    Object.defineProperty(BG, "createNoopMeter", {
        enumerable: !0,
        get: function() {
            return p76.createNoopMeter
        }
    });
    var l76 = dFB();
    Object.defineProperty(BG, "ValueType", {
        enumerable: !0,
        get: function() {
            return l76.ValueType
        }
    });
    var vKB = ag1();
    Object.defineProperty(BG, "defaultTextMapGetter", {
        enumerable: !0,
        get: function() {
            return vKB.defaultTextMapGetter
        }
    });
    Object.defineProperty(BG, "defaultTextMapSetter", {
        enumerable: !0,
        get: function() {
            return vKB.defaultTextMapSetter
        }
    });
    var i76 = Yu1();
    Object.defineProperty(BG, "ProxyTracer", {
        enumerable: !0,
        get: function() {
            return i76.ProxyTracer
        }
    });
    var n76 = Ju1();
    Object.defineProperty(BG, "ProxyTracerProvider", {
        enumerable: !0,
        get: function() {
            return n76.ProxyTracerProvider
        }
    });
    var a76 = jVB();
    Object.defineProperty(BG, "SamplingDecision", {
        enumerable: !0,
        get: function() {
            return a76.SamplingDecision
        }
    });
    var s76 = _VB();
    Object.defineProperty(BG, "SpanKind", {
        enumerable: !0,
        get: function() {
            return s76.SpanKind
        }
    });
    var r76 = yVB();
    Object.defineProperty(BG, "SpanStatusCode", {
        enumerable: !0,
        get: function() {
            return r76.SpanStatusCode
        }
    });
    var o76 = eg1();
    Object.defineProperty(BG, "TraceFlags", {
        enumerable: !0,
        get: function() {
            return o76.TraceFlags
        }
    });
    var t76 = iVB();
    Object.defineProperty(BG, "createTraceState", {
        enumerable: !0,
        get: function() {
            return t76.createTraceState
        }
    });
    var Mu1 = YsA();
    Object.defineProperty(BG, "isSpanContextValid", {
        enumerable: !0,
        get: function() {
            return Mu1.isSpanContextValid
        }
    });
    Object.defineProperty(BG, "isValidTraceId", {
        enumerable: !0,
        get: function() {
            return Mu1.isValidTraceId
        }
    });
    Object.defineProperty(BG, "isValidSpanId", {
        enumerable: !0,
        get: function() {
            return Mu1.isValidSpanId
        }
    });
    var Ou1 = ZsA();
    Object.defineProperty(BG, "INVALID_SPANID", {
        enumerable: !0,
        get: function() {
            return Ou1.INVALID_SPANID
        }
    });
    Object.defineProperty(BG, "INVALID_TRACEID", {
        enumerable: !0,
        get: function() {
            return Ou1.INVALID_TRACEID
        }
    });
    Object.defineProperty(BG, "INVALID_SPAN_CONTEXT", {
        enumerable: !0,
        get: function() {
            return Ou1.INVALID_SPAN_CONTEXT
        }
    });
    var bKB = sVB();
    Object.defineProperty(BG, "context", {
        enumerable: !0,
        get: function() {
            return bKB.context
        }
    });
    var fKB = tVB();
    Object.defineProperty(BG, "diag", {
        enumerable: !0,
        get: function() {
            return fKB.diag
        }
    });
    var hKB = WKB();
    Object.defineProperty(BG, "metrics", {
        enumerable: !0,
        get: function() {
            return hKB.metrics
        }
    });
    var gKB = MKB();
    Object.defineProperty(BG, "propagation", {
        enumerable: !0,
        get: function() {
            return gKB.propagation
        }
    });
    var uKB = yKB();
    Object.defineProperty(BG, "trace", {
        enumerable: !0,
        get: function() {
            return uKB.trace
        }
    });
    BG.default = {
        context: bKB.context,
        diag: fKB.diag,
        metrics: hKB.metrics,
        propagation: gKB.propagation,
        trace: uKB.trace
    }
});
var dKB = U((mKB) => {
    Object.defineProperty(mKB, "__esModule", {
        value: !0
    });
    mKB.SeverityNumber = void 0;
    var QG6;
    (function(A) {
        A[A.UNSPECIFIED = 0] = "UNSPECIFIED", A[A.TRACE = 1] = "TRACE", A[A.TRACE2 = 2] = "TRACE2", A[A.TRACE3 = 3] = "TRACE3", A[A.TRACE4 = 4] = "TRACE4", A[A.DEBUG = 5] = "DEBUG", A[A.DEBUG2 = 6] = "DEBUG2", A[A.DEBUG3 = 7] = "DEBUG3", A[A.DEBUG4 = 8] = "DEBUG4", A[A.INFO = 9] = "INFO", A[A.INFO2 = 10] = "INFO2", A[A.INFO3 = 11] = "INFO3", A[A.INFO4 = 12] = "INFO4", A[A.WARN = 13] = "WARN", A[A.WARN2 = 14] = "WARN2", A[A.WARN3 = 15] = "WARN3", A[A.WARN4 = 16] = "WARN4", A[A.ERROR = 17] = "ERROR", A[A.ERROR2 = 18] = "ERROR2", A[A.ERROR3 = 19] = "ERROR3", A[A.ERROR4 = 20] = "ERROR4", A[A.FATAL = 21] = "FATAL", A[A.FATAL2 = 22] = "FATAL2", A[A.FATAL3 = 23] = "FATAL3", A[A.FATAL4 = 24] = "FATAL4"
    })(QG6 = mKB.SeverityNumber || (mKB.SeverityNumber = {}))
});
var WsA = U((cKB) => {
    Object.defineProperty(cKB, "__esModule", {
        value: !0
    });
    cKB.NOOP_LOGGER = cKB.NoopLogger = void 0;
    class Tu1 {
        emit(A) {}
    }
    cKB.NoopLogger = Tu1;
    cKB.NOOP_LOGGER = new Tu1
});
var XsA = U((lKB) => {
    Object.defineProperty(lKB, "__esModule", {
        value: !0
    });
    lKB.NOOP_LOGGER_PROVIDER = lKB.NoopLoggerProvider = void 0;
    var GG6 = WsA();
    class Pu1 {
        getLogger(A, Q, B) {
            return new GG6.NoopLogger
        }
    }
    lKB.NoopLoggerProvider = Pu1;
    lKB.NOOP_LOGGER_PROVIDER = new Pu1
});
var ju1 = U((aKB) => {
    Object.defineProperty(aKB, "__esModule", {
        value: !0
    });
    aKB.ProxyLogger = void 0;
    var IG6 = WsA();
    class nKB {
        constructor(A, Q, B, G) {
            this._provider = A, this.name = Q, this.version = B, this.options = G
        }
        emit(A) {
            this._getLogger().emit(A)
        }
        _getLogger() {
            if (this._delegate) return this._delegate;
            let A = this._provider._getDelegateLogger(this.name, this.version, this.options);
            if (!A) return IG6.NOOP_LOGGER;
            return this._delegate = A, this._delegate
        }
    }
    aKB.ProxyLogger = nKB
});
var Su1 = U((oKB) => {
    Object.defineProperty(oKB, "__esModule", {
        value: !0
    });
    oKB.ProxyLoggerProvider = void 0;
    var YG6 = XsA(),
        JG6 = ju1();
    class rKB {
        getLogger(A, Q, B) {
            var G;
            return (G = this._getDelegateLogger(A, Q, B)) !== null && G !== void 0 ? G : new JG6.ProxyLogger(this, A, Q, B)
        }
        _getDelegate() {
            var A;
            return (A = this._delegate) !== null && A !== void 0 ? A : YG6.NOOP_LOGGER_PROVIDER
        }
        _setDelegate(A) {
            this._delegate = A
        }
        _getDelegateLogger(A, Q, B) {
            var G;
            return (G = this._delegate) === null || G === void 0 ? void 0 : G.getLogger(A, Q, B)
        }
    }
    oKB.ProxyLoggerProvider = rKB
});
var QDB = U((eKB) => {
    Object.defineProperty(eKB, "__esModule", {
        value: !0
    });
    eKB._globalThis = void 0;
    eKB._globalThis = typeof globalThis === "object" ? globalThis : global
});
var BDB = U((_u1) => {
    Object.defineProperty(_u1, "__esModule", {
        value: !0
    });
    _u1._globalThis = void 0;
    var WG6 = QDB();
    Object.defineProperty(_u1, "_globalThis", {
        enumerable: !0,
        get: function() {
            return WG6._globalThis
        }
    })
});
var GDB = U((ku1) => {
    Object.defineProperty(ku1, "__esModule", {
        value: !0
    });
    ku1._globalThis = void 0;
    var FG6 = BDB();
    Object.defineProperty(ku1, "_globalThis", {
        enumerable: !0,
        get: function() {
            return FG6._globalThis
        }
    })
});
var YDB = U((ZDB) => {
    Object.defineProperty(ZDB, "__esModule", {
        value: !0
    });
    ZDB.API_BACKWARDS_COMPATIBILITY_VERSION = ZDB.makeGetter = ZDB._global = ZDB.GLOBAL_LOGS_API_KEY = void 0;
    var KG6 = GDB();
    ZDB.GLOBAL_LOGS_API_KEY = Symbol.for("io.opentelemetry.js.api.logs");
    ZDB._global = KG6._globalThis;

    function DG6(A, Q, B) {
        return (G) => G === A ? Q : B
    }
    ZDB.makeGetter = DG6;
    ZDB.API_BACKWARDS_COMPATIBILITY_VERSION = 1
});
var FDB = U((WDB) => {
    Object.defineProperty(WDB, "__esModule", {
        value: !0
    });
    WDB.LogsAPI = void 0;
    var HM = YDB(),
        zG6 = XsA(),
        JDB = Su1();
    class yu1 {
        constructor() {
            this._proxyLoggerProvider = new JDB.ProxyLoggerProvider
        }
        static getInstance() {
            if (!this._instance) this._instance = new yu1;
            return this._instance
        }
        setGlobalLoggerProvider(A) {
            if (HM._global[HM.GLOBAL_LOGS_API_KEY]) return this.getLoggerProvider();
            return HM._global[HM.GLOBAL_LOGS_API_KEY] = (0, HM.makeGetter)(HM.API_BACKWARDS_COMPATIBILITY_VERSION, A, zG6.NOOP_LOGGER_PROVIDER), this._proxyLoggerProvider._setDelegate(A), A
        }
        getLoggerProvider() {
            var A, Q;
            return (Q = (A = HM._global[HM.GLOBAL_LOGS_API_KEY]) === null || A === void 0 ? void 0 : A.call(HM._global, HM.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && Q !== void 0 ? Q : this._proxyLoggerProvider
        }
        getLogger(A, Q, B) {
            return this.getLoggerProvider().getLogger(A, Q, B)
        }
        disable() {
            delete HM._global[HM.GLOBAL_LOGS_API_KEY], this._proxyLoggerProvider = new JDB.ProxyLoggerProvider
        }
    }
    WDB.LogsAPI = yu1
});
var xu1 = U((rb) => {
    Object.defineProperty(rb, "__esModule", {
        value: !0
    });
    rb.logs = rb.ProxyLoggerProvider = rb.ProxyLogger = rb.NoopLoggerProvider = rb.NOOP_LOGGER_PROVIDER = rb.NoopLogger = rb.NOOP_LOGGER = rb.SeverityNumber = void 0;
    var UG6 = dKB();
    Object.defineProperty(rb, "SeverityNumber", {
        enumerable: !0,
        get: function() {
            return UG6.SeverityNumber
        }
    });
    var VDB = WsA();
    Object.defineProperty(rb, "NOOP_LOGGER", {
        enumerable: !0,
        get: function() {
            return VDB.NOOP_LOGGER
        }
    });
    Object.defineProperty(rb, "NoopLogger", {
        enumerable: !0,
        get: function() {
            return VDB.NoopLogger
        }
    });
    var KDB = XsA();
    Object.defineProperty(rb, "NOOP_LOGGER_PROVIDER", {
        enumerable: !0,
        get: function() {
            return KDB.NOOP_LOGGER_PROVIDER
        }
    });
    Object.defineProperty(rb, "NoopLoggerProvider", {
        enumerable: !0,
        get: function() {
            return KDB.NoopLoggerProvider
        }
    });
    var $G6 = ju1();
    Object.defineProperty(rb, "ProxyLogger", {
        enumerable: !0,
        get: function() {
            return $G6.ProxyLogger
        }
    });
    var wG6 = Su1();
    Object.defineProperty(rb, "ProxyLoggerProvider", {
        enumerable: !0,
        get: function() {
            return wG6.ProxyLoggerProvider
        }
    });
    var qG6 = FDB();
    rb.logs = qG6.LogsAPI.getInstance()
});
var H$A = U((HDB) => {
    Object.defineProperty(HDB, "__esModule", {
        value: !0
    });
    HDB.isTracingSuppressed = HDB.unsuppressTracing = HDB.suppressTracing = void 0;
    var NG6 = W9(),
        vu1 = (0, NG6.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

    function LG6(A) {
        return A.setValue(vu1, !0)
    }
    HDB.suppressTracing = LG6;

    function MG6(A) {
        return A.deleteValue(vu1)
    }
    HDB.unsuppressTracing = MG6;

    function OG6(A) {
        return A.getValue(vu1) === !0
    }
    HDB.isTracingSuppressed = OG6
});
var bu1 = U((EDB) => {
    Object.defineProperty(EDB, "__esModule", {
        value: !0
    });
    EDB.BAGGAGE_MAX_TOTAL_LENGTH = EDB.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = EDB.BAGGAGE_MAX_NAME_VALUE_PAIRS = EDB.BAGGAGE_HEADER = EDB.BAGGAGE_ITEMS_SEPARATOR = EDB.BAGGAGE_PROPERTIES_SEPARATOR = EDB.BAGGAGE_KEY_PAIR_SEPARATOR = void 0;
    EDB.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
    EDB.BAGGAGE_PROPERTIES_SEPARATOR = ";";
    EDB.BAGGAGE_ITEMS_SEPARATOR = ",";
    EDB.BAGGAGE_HEADER = "baggage";
    EDB.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
    EDB.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
    EDB.BAGGAGE_MAX_TOTAL_LENGTH = 8192
});
var fu1 = U(($DB) => {
    Object.defineProperty($DB, "__esModule", {
        value: !0
    });
    $DB.parseKeyPairsIntoRecord = $DB.parsePairKeyValue = $DB.getKeyPairs = $DB.serializeKeyPairs = void 0;
    var xG6 = W9(),
        vt = bu1();

    function vG6(A) {
        return A.reduce((Q, B) => {
            let G = `${Q}${Q!==""?vt.BAGGAGE_ITEMS_SEPARATOR:""}${B}`;
            return G.length > vt.BAGGAGE_MAX_TOTAL_LENGTH ? Q : G
        }, "")
    }
    $DB.serializeKeyPairs = vG6;

    function bG6(A) {
        return A.getAllEntries().map(([Q, B]) => {
            let G = `${encodeURIComponent(Q)}=${encodeURIComponent(B.value)}`;
            if (B.metadata !== void 0) G += vt.BAGGAGE_PROPERTIES_SEPARATOR + B.metadata.toString();
            return G
        })
    }
    $DB.getKeyPairs = bG6;

    function UDB(A) {
        let Q = A.split(vt.BAGGAGE_PROPERTIES_SEPARATOR);
        if (Q.length <= 0) return;
        let B = Q.shift();
        if (!B) return;
        let G = B.indexOf(vt.BAGGAGE_KEY_PAIR_SEPARATOR);
        if (G <= 0) return;
        let Z = decodeURIComponent(B.substring(0, G).trim()),
            I = decodeURIComponent(B.substring(G + 1).trim()),
            Y;
        if (Q.length > 0) Y = (0, xG6.baggageEntryMetadataFromString)(Q.join(vt.BAGGAGE_PROPERTIES_SEPARATOR));
        return {
            key: Z,
            value: I,
            metadata: Y
        }
    }
    $DB.parsePairKeyValue = UDB;

    function fG6(A) {
        let Q = {};
        if (typeof A === "string" && A.length > 0) A.split(vt.BAGGAGE_ITEMS_SEPARATOR).forEach((B) => {
            let G = UDB(B);
            if (G !== void 0 && G.value.length > 0) Q[G.key] = G.value
        });
        return Q
    }
    $DB.parseKeyPairsIntoRecord = fG6
});
var MDB = U((NDB) => {
    Object.defineProperty(NDB, "__esModule", {
        value: !0
    });
    NDB.W3CBaggagePropagator = void 0;
    var hu1 = W9(),
        mG6 = H$A(),
        bt = bu1(),
        gu1 = fu1();
    class qDB {
        inject(A, Q, B) {
            let G = hu1.propagation.getBaggage(A);
            if (!G || (0, mG6.isTracingSuppressed)(A)) return;
            let Z = (0, gu1.getKeyPairs)(G).filter((Y) => {
                    return Y.length <= bt.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS
                }).slice(0, bt.BAGGAGE_MAX_NAME_VALUE_PAIRS),
                I = (0, gu1.serializeKeyPairs)(Z);
            if (I.length > 0) B.set(Q, bt.BAGGAGE_HEADER, I)
        }
        extract(A, Q, B) {
            let G = B.get(Q, bt.BAGGAGE_HEADER),
                Z = Array.isArray(G) ? G.join(bt.BAGGAGE_ITEMS_SEPARATOR) : G;
            if (!Z) return A;
            let I = {};
            if (Z.length === 0) return A;
            if (Z.split(bt.BAGGAGE_ITEMS_SEPARATOR).forEach((J) => {
                    let W = (0, gu1.parsePairKeyValue)(J);
                    if (W) {
                        let X = {
                            value: W.value
                        };
                        if (W.metadata) X.metadata = W.metadata;
                        I[W.key] = X
                    }
                }), Object.entries(I).length === 0) return A;
            return hu1.propagation.setBaggage(A, hu1.propagation.createBaggage(I))
        }
        fields() {
            return [bt.BAGGAGE_HEADER]
        }
    }
    NDB.W3CBaggagePropagator = qDB
});
var PDB = U((RDB) => {
    Object.defineProperty(RDB, "__esModule", {
        value: !0
    });
    RDB.AnchoredClock = void 0;
    class ODB {
        _monotonicClock;
        _epochMillis;
        _performanceMillis;
        constructor(A, Q) {
            this._monotonicClock = Q, this._epochMillis = A.now(), this._performanceMillis = Q.now()
        }
        now() {
            let A = this._monotonicClock.now() - this._performanceMillis;
            return this._epochMillis + A
        }
    }
    RDB.AnchoredClock = ODB
});
var vDB = U((yDB) => {
    Object.defineProperty(yDB, "__esModule", {
        value: !0
    });
    yDB.isAttributeValue = yDB.isAttributeKey = yDB.sanitizeAttributes = void 0;
    var jDB = W9();

    function dG6(A) {
        let Q = {};
        if (typeof A !== "object" || A == null) return Q;
        for (let [B, G] of Object.entries(A)) {
            if (!SDB(B)) {
                jDB.diag.warn(`Invalid attribute key: ${B}`);
                continue
            }
            if (!_DB(G)) {
                jDB.diag.warn(`Invalid attribute value set for key: ${B}`);
                continue
            }
            if (Array.isArray(G)) Q[B] = G.slice();
            else Q[B] = G
        }
        return Q
    }
    yDB.sanitizeAttributes = dG6;

    function SDB(A) {
        return typeof A === "string" && A.length > 0
    }
    yDB.isAttributeKey = SDB;

    function _DB(A) {
        if (A == null) return !0;
        if (Array.isArray(A)) return cG6(A);
        return kDB(A)
    }
    yDB.isAttributeValue = _DB;

    function cG6(A) {
        let Q;
        for (let B of A) {
            if (B == null) continue;
            if (!Q) {
                if (kDB(B)) {
                    Q = typeof B;
                    continue
                }
                return !1
            }
            if (typeof B === Q) continue;
            return !1
        }
        return !0
    }

    function kDB(A) {
        switch (typeof A) {
            case "number":
            case "boolean":
            case "string":
                return !0
        }
        return !1
    }
});
var uu1 = U((bDB) => {
    Object.defineProperty(bDB, "__esModule", {
        value: !0
    });
    bDB.loggingErrorHandler = void 0;
    var iG6 = W9();

    function nG6() {
        return (A) => {
            iG6.diag.error(aG6(A))
        }
    }
    bDB.loggingErrorHandler = nG6;

    function aG6(A) {
        if (typeof A === "string") return A;
        else return JSON.stringify(sG6(A))
    }

    function sG6(A) {
        let Q = {},
            B = A;
        while (B !== null) Object.getOwnPropertyNames(B).forEach((G) => {
            if (Q[G]) return;
            let Z = B[G];
            if (Z) Q[G] = String(Z)
        }), B = Object.getPrototypeOf(B);
        return Q
    }
});
var mDB = U((gDB) => {
    Object.defineProperty(gDB, "__esModule", {
        value: !0
    });
    gDB.globalErrorHandler = gDB.setGlobalErrorHandler = void 0;
    var rG6 = uu1(),
        hDB = (0, rG6.loggingErrorHandler)();

    function oG6(A) {
        hDB = A
    }
    gDB.setGlobalErrorHandler = oG6;

    function tG6(A) {
        try {
            hDB(A)
        } catch {}
    }
    gDB.globalErrorHandler = tG6
});
var nDB = U((lDB) => {
    Object.defineProperty(lDB, "__esModule", {
        value: !0
    });
    lDB.getStringListFromEnv = lDB.getBooleanFromEnv = lDB.getStringFromEnv = lDB.getNumberFromEnv = void 0;
    var dDB = W9(),
        cDB = UA("util");

    function AZ6(A) {
        let Q = process.env[A];
        if (Q == null || Q.trim() === "") return;
        let B = Number(Q);
        if (isNaN(B)) {
            dDB.diag.warn(`Unknown value ${(0,cDB.inspect)(Q)} for ${A}, expected a number, using defaults`);
            return
        }
        return B
    }
    lDB.getNumberFromEnv = AZ6;

    function pDB(A) {
        let Q = process.env[A];
        if (Q == null || Q.trim() === "") return;
        return Q
    }
    lDB.getStringFromEnv = pDB;

    function QZ6(A) {
        let Q = process.env[A]?.trim().toLowerCase();
        if (Q == null || Q === "") return !1;
        if (Q === "true") return !0;
        else if (Q === "false") return !1;
        else return dDB.diag.warn(`Unknown value ${(0,cDB.inspect)(Q)} for ${A}, expected 'true' or 'false', falling back to 'false' (default)`), !1
    }
    lDB.getBooleanFromEnv = QZ6;

    function BZ6(A) {
        return pDB(A)?.split(",").map((Q) => Q.trim()).filter((Q) => Q !== "")
    }
    lDB.getStringListFromEnv = BZ6
});
var rDB = U((aDB) => {
    Object.defineProperty(aDB, "__esModule", {
        value: !0
    });
    aDB._globalThis = void 0;
    aDB._globalThis = typeof globalThis === "object" ? globalThis : global
});
var eDB = U((oDB) => {
    Object.defineProperty(oDB, "__esModule", {
        value: !0
    });
    oDB.otperformance = void 0;
    var YZ6 = UA("perf_hooks");
    oDB.otperformance = YZ6.performance
});
var BHB = U((AHB) => {
    Object.defineProperty(AHB, "__esModule", {
        value: !0
    });
    AHB.VERSION = void 0;
    AHB.VERSION = "2.1.0"
});
var mu1 = U((GHB) => {
    Object.defineProperty(GHB, "__esModule", {
        value: !0
    });
    GHB.createConstMap = void 0;

    function JZ6(A) {
        let Q = {},
            B = A.length;
        for (let G = 0; G < B; G++) {
            let Z = A[G];
            if (Z) Q[String(Z).toUpperCase().replace(/[-.]/g, "_")] = Z
        }
        return Q
    }
    GHB.createConstMap = JZ6
});
var Q$B = U((aUB) => {
    Object.defineProperty(aUB, "__esModule", {
        value: !0
    });
    aUB.SEMATTRS_NET_HOST_CARRIER_ICC = aUB.SEMATTRS_NET_HOST_CARRIER_MNC = aUB.SEMATTRS_NET_HOST_CARRIER_MCC = aUB.SEMATTRS_NET_HOST_CARRIER_NAME = aUB.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = aUB.SEMATTRS_NET_HOST_CONNECTION_TYPE = aUB.SEMATTRS_NET_HOST_NAME = aUB.SEMATTRS_NET_HOST_PORT = aUB.SEMATTRS_NET_HOST_IP = aUB.SEMATTRS_NET_PEER_NAME = aUB.SEMATTRS_NET_PEER_PORT = aUB.SEMATTRS_NET_PEER_IP = aUB.SEMATTRS_NET_TRANSPORT = aUB.SEMATTRS_FAAS_INVOKED_REGION = aUB.SEMATTRS_FAAS_INVOKED_PROVIDER = aUB.SEMATTRS_FAAS_INVOKED_NAME = aUB.SEMATTRS_FAAS_COLDSTART = aUB.SEMATTRS_FAAS_CRON = aUB.SEMATTRS_FAAS_TIME = aUB.SEMATTRS_FAAS_DOCUMENT_NAME = aUB.SEMATTRS_FAAS_DOCUMENT_TIME = aUB.SEMATTRS_FAAS_DOCUMENT_OPERATION = aUB.SEMATTRS_FAAS_DOCUMENT_COLLECTION = aUB.SEMATTRS_FAAS_EXECUTION = aUB.SEMATTRS_FAAS_TRIGGER = aUB.SEMATTRS_EXCEPTION_ESCAPED = aUB.SEMATTRS_EXCEPTION_STACKTRACE = aUB.SEMATTRS_EXCEPTION_MESSAGE = aUB.SEMATTRS_EXCEPTION_TYPE = aUB.SEMATTRS_DB_SQL_TABLE = aUB.SEMATTRS_DB_MONGODB_COLLECTION = aUB.SEMATTRS_DB_REDIS_DATABASE_INDEX = aUB.SEMATTRS_DB_HBASE_NAMESPACE = aUB.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = aUB.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = aUB.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = aUB.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = aUB.SEMATTRS_DB_CASSANDRA_TABLE = aUB.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = aUB.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = aUB.SEMATTRS_DB_CASSANDRA_KEYSPACE = aUB.SEMATTRS_DB_MSSQL_INSTANCE_NAME = aUB.SEMATTRS_DB_OPERATION = aUB.SEMATTRS_DB_STATEMENT = aUB.SEMATTRS_DB_NAME = aUB.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = aUB.SEMATTRS_DB_USER = aUB.SEMATTRS_DB_CONNECTION_STRING = aUB.SEMATTRS_DB_SYSTEM = aUB.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = void 0;
    aUB.SEMATTRS_MESSAGING_DESTINATION_KIND = aUB.SEMATTRS_MESSAGING_DESTINATION = aUB.SEMATTRS_MESSAGING_SYSTEM = aUB.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = aUB.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = aUB.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = aUB.SEMATTRS_AWS_DYNAMODB_COUNT = aUB.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = aUB.SEMATTRS_AWS_DYNAMODB_SEGMENT = aUB.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = aUB.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = aUB.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = aUB.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = aUB.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = aUB.SEMATTRS_AWS_DYNAMODB_SELECT = aUB.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = aUB.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = aUB.SEMATTRS_AWS_DYNAMODB_LIMIT = aUB.SEMATTRS_AWS_DYNAMODB_PROJECTION = aUB.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = aUB.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = aUB.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = aUB.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = aUB.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = aUB.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = aUB.SEMATTRS_HTTP_CLIENT_IP = aUB.SEMATTRS_HTTP_ROUTE = aUB.SEMATTRS_HTTP_SERVER_NAME = aUB.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = aUB.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = aUB.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = aUB.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = aUB.SEMATTRS_HTTP_USER_AGENT = aUB.SEMATTRS_HTTP_FLAVOR = aUB.SEMATTRS_HTTP_STATUS_CODE = aUB.SEMATTRS_HTTP_SCHEME = aUB.SEMATTRS_HTTP_HOST = aUB.SEMATTRS_HTTP_TARGET = aUB.SEMATTRS_HTTP_URL = aUB.SEMATTRS_HTTP_METHOD = aUB.SEMATTRS_CODE_LINENO = aUB.SEMATTRS_CODE_FILEPATH = aUB.SEMATTRS_CODE_NAMESPACE = aUB.SEMATTRS_CODE_FUNCTION = aUB.SEMATTRS_THREAD_NAME = aUB.SEMATTRS_THREAD_ID = aUB.SEMATTRS_ENDUSER_SCOPE = aUB.SEMATTRS_ENDUSER_ROLE = aUB.SEMATTRS_ENDUSER_ID = aUB.SEMATTRS_PEER_SERVICE = void 0;
    aUB.DBSYSTEMVALUES_FILEMAKER = aUB.DBSYSTEMVALUES_DERBY = aUB.DBSYSTEMVALUES_FIREBIRD = aUB.DBSYSTEMVALUES_ADABAS = aUB.DBSYSTEMVALUES_CACHE = aUB.DBSYSTEMVALUES_EDB = aUB.DBSYSTEMVALUES_FIRSTSQL = aUB.DBSYSTEMVALUES_INGRES = aUB.DBSYSTEMVALUES_HANADB = aUB.DBSYSTEMVALUES_MAXDB = aUB.DBSYSTEMVALUES_PROGRESS = aUB.DBSYSTEMVALUES_HSQLDB = aUB.DBSYSTEMVALUES_CLOUDSCAPE = aUB.DBSYSTEMVALUES_HIVE = aUB.DBSYSTEMVALUES_REDSHIFT = aUB.DBSYSTEMVALUES_POSTGRESQL = aUB.DBSYSTEMVALUES_DB2 = aUB.DBSYSTEMVALUES_ORACLE = aUB.DBSYSTEMVALUES_MYSQL = aUB.DBSYSTEMVALUES_MSSQL = aUB.DBSYSTEMVALUES_OTHER_SQL = aUB.SemanticAttributes = aUB.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = aUB.SEMATTRS_MESSAGE_COMPRESSED_SIZE = aUB.SEMATTRS_MESSAGE_ID = aUB.SEMATTRS_MESSAGE_TYPE = aUB.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = aUB.SEMATTRS_RPC_JSONRPC_ERROR_CODE = aUB.SEMATTRS_RPC_JSONRPC_REQUEST_ID = aUB.SEMATTRS_RPC_JSONRPC_VERSION = aUB.SEMATTRS_RPC_GRPC_STATUS_CODE = aUB.SEMATTRS_RPC_METHOD = aUB.SEMATTRS_RPC_SERVICE = aUB.SEMATTRS_RPC_SYSTEM = aUB.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = aUB.SEMATTRS_MESSAGING_KAFKA_PARTITION = aUB.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = aUB.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = aUB.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = aUB.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = aUB.SEMATTRS_MESSAGING_CONSUMER_ID = aUB.SEMATTRS_MESSAGING_OPERATION = aUB.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = aUB.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = aUB.SEMATTRS_MESSAGING_CONVERSATION_ID = aUB.SEMATTRS_MESSAGING_MESSAGE_ID = aUB.SEMATTRS_MESSAGING_URL = aUB.SEMATTRS_MESSAGING_PROTOCOL_VERSION = aUB.SEMATTRS_MESSAGING_PROTOCOL = aUB.SEMATTRS_MESSAGING_TEMP_DESTINATION = void 0;
    aUB.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = aUB.FaasDocumentOperationValues = aUB.FAASDOCUMENTOPERATIONVALUES_DELETE = aUB.FAASDOCUMENTOPERATIONVALUES_EDIT = aUB.FAASDOCUMENTOPERATIONVALUES_INSERT = aUB.FaasTriggerValues = aUB.FAASTRIGGERVALUES_OTHER = aUB.FAASTRIGGERVALUES_TIMER = aUB.FAASTRIGGERVALUES_PUBSUB = aUB.FAASTRIGGERVALUES_HTTP = aUB.FAASTRIGGERVALUES_DATASOURCE = aUB.DbCassandraConsistencyLevelValues = aUB.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = aUB.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = aUB.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = aUB.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = aUB.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = aUB.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = aUB.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = aUB.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = aUB.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = aUB.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = aUB.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = aUB.DbSystemValues = aUB.DBSYSTEMVALUES_COCKROACHDB = aUB.DBSYSTEMVALUES_MEMCACHED = aUB.DBSYSTEMVALUES_ELASTICSEARCH = aUB.DBSYSTEMVALUES_GEODE = aUB.DBSYSTEMVALUES_NEO4J = aUB.DBSYSTEMVALUES_DYNAMODB = aUB.DBSYSTEMVALUES_COSMOSDB = aUB.DBSYSTEMVALUES_COUCHDB = aUB.DBSYSTEMVALUES_COUCHBASE = aUB.DBSYSTEMVALUES_REDIS = aUB.DBSYSTEMVALUES_MONGODB = aUB.DBSYSTEMVALUES_HBASE = aUB.DBSYSTEMVALUES_CASSANDRA = aUB.DBSYSTEMVALUES_COLDFUSION = aUB.DBSYSTEMVALUES_H2 = aUB.DBSYSTEMVALUES_VERTICA = aUB.DBSYSTEMVALUES_TERADATA = aUB.DBSYSTEMVALUES_SYBASE = aUB.DBSYSTEMVALUES_SQLITE = aUB.DBSYSTEMVALUES_POINTBASE = aUB.DBSYSTEMVALUES_PERVASIVE = aUB.DBSYSTEMVALUES_NETEZZA = aUB.DBSYSTEMVALUES_MARIADB = aUB.DBSYSTEMVALUES_INTERBASE = aUB.DBSYSTEMVALUES_INSTANTDB = aUB.DBSYSTEMVALUES_INFORMIX = void 0;
    aUB.MESSAGINGOPERATIONVALUES_RECEIVE = aUB.MessagingDestinationKindValues = aUB.MESSAGINGDESTINATIONKINDVALUES_TOPIC = aUB.MESSAGINGDESTINATIONKINDVALUES_QUEUE = aUB.HttpFlavorValues = aUB.HTTPFLAVORVALUES_QUIC = aUB.HTTPFLAVORVALUES_SPDY = aUB.HTTPFLAVORVALUES_HTTP_2_0 = aUB.HTTPFLAVORVALUES_HTTP_1_1 = aUB.HTTPFLAVORVALUES_HTTP_1_0 = aUB.NetHostConnectionSubtypeValues = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_NR = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = aUB.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = aUB.NetHostConnectionTypeValues = aUB.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = aUB.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = aUB.NETHOSTCONNECTIONTYPEVALUES_CELL = aUB.NETHOSTCONNECTIONTYPEVALUES_WIRED = aUB.NETHOSTCONNECTIONTYPEVALUES_WIFI = aUB.NetTransportValues = aUB.NETTRANSPORTVALUES_OTHER = aUB.NETTRANSPORTVALUES_INPROC = aUB.NETTRANSPORTVALUES_PIPE = aUB.NETTRANSPORTVALUES_UNIX = aUB.NETTRANSPORTVALUES_IP = aUB.NETTRANSPORTVALUES_IP_UDP = aUB.NETTRANSPORTVALUES_IP_TCP = aUB.FaasInvokedProviderValues = aUB.FAASINVOKEDPROVIDERVALUES_GCP = aUB.FAASINVOKEDPROVIDERVALUES_AZURE = aUB.FAASINVOKEDPROVIDERVALUES_AWS = void 0;
    aUB.MessageTypeValues = aUB.MESSAGETYPEVALUES_RECEIVED = aUB.MESSAGETYPEVALUES_SENT = aUB.RpcGrpcStatusCodeValues = aUB.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = aUB.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = aUB.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = aUB.RPCGRPCSTATUSCODEVALUES_INTERNAL = aUB.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = aUB.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = aUB.RPCGRPCSTATUSCODEVALUES_ABORTED = aUB.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = aUB.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = aUB.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = aUB.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = aUB.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = aUB.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = aUB.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = aUB.RPCGRPCSTATUSCODEVALUES_UNKNOWN = aUB.RPCGRPCSTATUSCODEVALUES_CANCELLED = aUB.RPCGRPCSTATUSCODEVALUES_OK = aUB.MessagingOperationValues = aUB.MESSAGINGOPERATIONVALUES_PROCESS = void 0;