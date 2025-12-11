/**
 * Claude Code v2.0.62 - Sentry 错误追踪
 *
 * 原始位置: 行 10001 - 20000
 * 模块: telemetry/sentry
 */

          B
        );
      else return I;
    }, "");
  }
  pl0.BAGGAGE_HEADER_NAME = YqQ;
  pl0.MAX_BAGGAGE_STRING_LENGTH = ll0;
  pl0.SENTRY_BAGGAGE_KEY_PREFIX = ei1;
  pl0.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = cl0;
  pl0.baggageHeaderToDynamicSamplingContext = IqQ;
  pl0.dynamicSamplingContextToSentryBaggageHeader = WqQ;
});
var sl0 = U((al0) => {
  Object.defineProperty(al0, "__esModule", { value: !0 });
  var il0 = An1(),
    TC = bQ1(),
    nl0 = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
  function Bn1(A) {
    if (!A) return;
    let B = A.match(nl0);
    if (!B) return;
    let Q;
    if (B[3] === "1") Q = !0;
    else if (B[3] === "0") Q = !1;
    return { traceId: B[1], parentSampled: Q, parentSpanId: B[2] };
  }
  function DqQ(A, B) {
    let Q = Bn1(A),
      Z = il0.baggageHeaderToDynamicSamplingContext(B),
      { traceId: G, parentSpanId: Y, parentSampled: I } = Q || {};
    if (!Q)
      return {
        traceparentData: Q,
        dynamicSamplingContext: void 0,
        propagationContext: { traceId: G || TC.uuid4(), spanId: TC.uuid4().substring(16) },
      };
    else
      return {
        traceparentData: Q,
        dynamicSamplingContext: Z || {},
        propagationContext: {
          traceId: G || TC.uuid4(),
          parentSpanId: Y || TC.uuid4().substring(16),
          spanId: TC.uuid4().substring(16),
          sampled: I,
          dsc: Z || {},
        },
      };
  }
  function CqQ(A, B) {
    let Q = Bn1(A),
      Z = il0.baggageHeaderToDynamicSamplingContext(B),
      { traceId: G, parentSpanId: Y, parentSampled: I } = Q || {};
    if (!Q) return { traceId: G || TC.uuid4(), spanId: TC.uuid4().substring(16) };
    else
      return {
        traceId: G || TC.uuid4(),
        parentSpanId: Y || TC.uuid4().substring(16),
        spanId: TC.uuid4().substring(16),
        sampled: I,
        dsc: Z || {},
      };
  }
  function UqQ(A = TC.uuid4(), B = TC.uuid4().substring(16), Q) {
    let Z = "";
    if (Q !== void 0) Z = Q ? "-1" : "-0";
    return `${A}-${B}${Z}`;
  }
  al0.TRACEPARENT_REGEXP = nl0;
  al0.extractTraceparentData = Bn1;
  al0.generateSentryTraceHeader = UqQ;
  al0.propagationContextFromHeaders = CqQ;
  al0.tracingContextFromHeaders = DqQ;
});
var Zn1 = U((tl0) => {
  Object.defineProperty(tl0, "__esModule", { value: !0 });
  var LqQ = Ci1(),
    MqQ = uQ1(),
    rl0 = RC();
  function OqQ(A, B = []) {
    return [A, B];
  }
  function RqQ(A, B) {
    let [Q, Z] = A;
    return [Q, [...Z, B]];
  }
  function ol0(A, B) {
    let Q = A[1];
    for (let Z of Q) {
      let G = Z[0].type;
      if (B(Z, G)) return !0;
    }
    return !1;
  }
  function TqQ(A, B) {
    return ol0(A, (Q, Z) => B.includes(Z));
  }
  function Qn1(A, B) {
    return (B || new TextEncoder()).encode(A);
  }
  function PqQ(A, B) {
    let [Q, Z] = A,
      G = JSON.stringify(Q);
    function Y(I) {
      if (typeof G === "string") G = typeof I === "string" ? G + I : [Qn1(G, B), I];
      else G.push(typeof I === "string" ? Qn1(I, B) : I);
    }
    for (let I of Z) {
      let [W, J] = I;
      if (
        (Y(`
${JSON.stringify(W)}
`),
        typeof J === "string" || J instanceof Uint8Array)
      )
        Y(J);
      else {
        let X;
        try {
          X = JSON.stringify(J);
        } catch (F) {
          X = JSON.stringify(MqQ.normalize(J));
        }
        Y(X);
      }
    }
    return typeof G === "string" ? G : jqQ(G);
  }
  function jqQ(A) {
    let B = A.reduce((G, Y) => G + Y.length, 0),
      Q = new Uint8Array(B),
      Z = 0;
    for (let G of A) (Q.set(G, Z), (Z += G.length));
    return Q;
  }
  function SqQ(A, B, Q) {
    let Z = typeof A === "string" ? B.encode(A) : A;
    function G(J) {
      let X = Z.subarray(0, J);
      return ((Z = Z.subarray(J + 1)), X);
    }
    function Y() {
      let J = Z.indexOf(10);
      if (J < 0) J = Z.length;
      return JSON.parse(Q.decode(G(J)));
    }
    let I = Y(),
      W = [];
    while (Z.length) {
      let J = Y(),
        X = typeof J.length === "number" ? J.length : void 0;
      W.push([J, X ? G(X) : Y()]);
    }
    return [I, W];
  }
  function yqQ(A, B) {
    let Q = typeof A.data === "string" ? Qn1(A.data, B) : A.data;
    return [
      rl0.dropUndefinedKeys({
        type: "attachment",
        length: Q.length,
        filename: A.filename,
        content_type: A.contentType,
        attachment_type: A.attachmentType,
      }),
      Q,
    ];
  }
  var kqQ = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket",
  };
  function _qQ(A) {
    return kqQ[A];
  }
  function xqQ(A) {
    if (!A || !A.sdk) return;
    let { name: B, version: Q } = A.sdk;
    return { name: B, version: Q };
  }
  function vqQ(A, B, Q, Z) {
    let G = A.sdkProcessingMetadata && A.sdkProcessingMetadata.dynamicSamplingContext;
    return {
      event_id: A.event_id,
      sent_at: new Date().toISOString(),
      ...(B && { sdk: B }),
      ...(!!Q && Z && { dsn: LqQ.dsnToString(Z) }),
      ...(G && { trace: rl0.dropUndefinedKeys({ ...G }) }),
    };
  }
  tl0.addItemToEnvelope = RqQ;
  tl0.createAttachmentEnvelopeItem = yqQ;
  tl0.createEnvelope = OqQ;
  tl0.createEventEnvelopeHeaders = vqQ;
  tl0.envelopeContainsItemType = TqQ;
  tl0.envelopeItemTypeToDataCategory = _qQ;
  tl0.forEachEnvelopeItem = ol0;
  tl0.getSdkMetadataForEnvelopeHeader = xqQ;
  tl0.parseEnvelope = SqQ;
  tl0.serializeEnvelope = PqQ;
});
var Ap0 = U((el0) => {
  Object.defineProperty(el0, "__esModule", { value: !0 });
  var iqQ = Zn1(),
    nqQ = ti1();
  function aqQ(A, B, Q) {
    let Z = [{ type: "client_report" }, { timestamp: Q || nqQ.dateTimestampInSeconds(), discarded_events: A }];
    return iqQ.createEnvelope(B ? { dsn: B } : {}, [Z]);
  }
  el0.createClientReportEnvelope = aqQ;
});
var Yp0 = U((Gp0) => {
  Object.defineProperty(Gp0, "__esModule", { value: !0 });
  var Bp0 = 60000;
  function Qp0(A, B = Date.now()) {
    let Q = parseInt(`${A}`, 10);
    if (!isNaN(Q)) return Q * 1000;
    let Z = Date.parse(`${A}`);
    if (!isNaN(Z)) return Z - B;
    return Bp0;
  }
  function Zp0(A, B) {
    return A[B] || A.all || 0;
  }
  function rqQ(A, B, Q = Date.now()) {
    return Zp0(A, B) > Q;
  }
  function oqQ(A, { statusCode: B, headers: Q }, Z = Date.now()) {
    let G = { ...A },
      Y = Q && Q["x-sentry-rate-limits"],
      I = Q && Q["retry-after"];
    if (Y)
      for (let W of Y.trim().split(",")) {
        let [J, X, , , F] = W.split(":", 5),
          V = parseInt(J, 10),
          K = (!isNaN(V) ? V : 60) * 1000;
        if (!X) G.all = Z + K;
        else
          for (let H of X.split(";"))
            if (H === "metric_bucket") {
              if (!F || F.split(";").includes("custom")) G[H] = Z + K;
            } else G[H] = Z + K;
      }
    else if (I) G.all = Z + Qp0(I, Z);
    else if (B === 429) G.all = Z + 60000;
    return G;
  }
  Gp0.DEFAULT_RETRY_AFTER = Bp0;
  Gp0.disabledUntil = Zp0;
  Gp0.isRateLimited = rqQ;
  Gp0.parseRetryAfterHeader = Qp0;
  Gp0.updateRateLimits = oqQ;
});
var Xp0 = U((Jp0) => {
  Object.defineProperty(Jp0, "__esModule", { value: !0 });
  function Ip0(A, B, Q) {
    let Z = B.match(/([a-z_]+)\.(.*)/i);
    if (Z === null) A[B] = Q;
    else {
      let G = A[Z[1]];
      Ip0(G, Z[2], Q);
    }
  }
  function ZEQ(A, B, Q = {}) {
    return Array.isArray(B) ? Wp0(A, B, Q) : GEQ(A, B, Q);
  }
  function Wp0(A, B, Q) {
    let Z = B.find((G) => G.name === A.name);
    if (Z) {
      for (let [G, Y] of Object.entries(Q)) Ip0(Z, G, Y);
      return B;
    }
    return [...B, A];
  }
  function GEQ(A, B, Q) {
    return (G) => {
      let Y = B(G);
      if (A.allowExclusionByUser) {
        if (!Y.find((W) => W.name === A.name)) return Y;
      }
      return Wp0(A, Y, Q);
    };
  }
  Jp0.addOrUpdateIntegration = ZEQ;
});
var Vp0 = U((Fp0) => {
  Object.defineProperty(Fp0, "__esModule", { value: !0 });
  function IEQ(A) {
    let B = [],
      Q = {};
    return {
      add(Z, G) {
        while (B.length >= A) {
          let Y = B.shift();
          if (Y !== void 0) delete Q[Y];
        }
        if (Q[Z]) this.delete(Z);
        (B.push(Z), (Q[Z] = G));
      },
      clear() {
        ((Q = {}), (B = []));
      },
      get(Z) {
        return Q[Z];
      },
      size() {
        return B.length;
      },
      delete(Z) {
        if (!Q[Z]) return !1;
        delete Q[Z];
        for (let G = 0; G < B.length; G++)
          if (B[G] === Z) {
            B.splice(G, 1);
            break;
          }
        return !0;
      },
    };
  }
  Fp0.makeFifoCache = IEQ;
});
var Dp0 = U((zp0) => {
  Object.defineProperty(zp0, "__esModule", { value: !0 });
  var Gn1 = OC(),
    Kp0 = bQ1(),
    JEQ = uQ1(),
    XEQ = RC();
  function Yn1(A, B) {
    return A(B.stack || "", 1);
  }
  function Hp0(A, B) {
    let Q = { type: B.name || B.constructor.name, value: B.message },
      Z = Yn1(A, B);
    if (Z.length) Q.stacktrace = { frames: Z };
    return Q;
  }
  function FEQ(A) {
    if ("name" in A && typeof A.name === "string") {
      let B = `'${A.name}' captured as exception`;
      if ("message" in A && typeof A.message === "string") B += ` with message '${A.message}'`;
      return B;
    } else if ("message" in A && typeof A.message === "string") return A.message;
    else return `Object captured as exception with keys: ${XEQ.extractExceptionKeysForMessage(A)}`;
  }
  function VEQ(A, B, Q, Z) {
    let G = typeof A === "function" ? A().getClient() : A,
      Y = Q,
      W = (Z && Z.data && Z.data.mechanism) || { handled: !0, type: "generic" },
      J;
    if (!Gn1.isError(Q)) {
      if (Gn1.isPlainObject(Q)) {
        let F = G && G.getOptions().normalizeDepth;
        J = { ["__serialized__"]: JEQ.normalizeToSize(Q, F) };
        let V = FEQ(Q);
        ((Y = (Z && Z.syntheticException) || new Error(V)), (Y.message = V));
      } else ((Y = (Z && Z.syntheticException) || new Error(Q)), (Y.message = Q));
      W.synthetic = !0;
    }
    let X = { exception: { values: [Hp0(B, Y)] } };
    if (J) X.extra = J;
    return (
      Kp0.addExceptionTypeValue(X, void 0, void 0),
      Kp0.addExceptionMechanism(X, W),
      { ...X, event_id: Z && Z.event_id }
    );
  }
  function KEQ(A, B, Q = "info", Z, G) {
    let Y = { event_id: Z && Z.event_id, level: Q };
    if (G && Z && Z.syntheticException) {
      let I = Yn1(A, Z.syntheticException);
      if (I.length) Y.exception = { values: [{ value: B, stacktrace: { frames: I } }] };
    }
    if (Gn1.isParameterizedString(B)) {
      let { __sentry_template_string__: I, __sentry_template_values__: W } = B;
      return ((Y.logentry = { message: I, params: W }), Y);
    }
    return ((Y.message = B), Y);
  }
  zp0.eventFromMessage = KEQ;
  zp0.eventFromUnknownInput = VEQ;
  zp0.exceptionFromError = Hp0;
  zp0.parseStackFrames = Yn1;
});
var Up0 = U((Cp0) => {
  Object.defineProperty(Cp0, "__esModule", { value: !0 });
  var UEQ = RC(),
    $EQ = gK1();
  function wEQ(A, B, Q, Z) {
    let G = A(),
      Y = !1,
      I = !0;
    return (
      setInterval(() => {
        let W = G.getTimeMs();
        if (Y === !1 && W > B + Q) {
          if (((Y = !0), I)) Z();
        }
        if (W < B + Q) Y = !1;
      }, 20),
      {
        poll: () => {
          G.reset();
        },
        enabled: (W) => {
          I = W;
        },
      }
    );
  }
  function qEQ(A, B, Q) {
    let Z = B ? B.replace(/^file:\/\//, "") : void 0,
      G = A.location.columnNumber ? A.location.columnNumber + 1 : void 0,
      Y = A.location.lineNumber ? A.location.lineNumber + 1 : void 0;
    return UEQ.dropUndefinedKeys({
      filename: Z,
      module: Q(Z),
      function: A.functionName || "?",
      colno: G,
      lineno: Y,
      in_app: Z ? $EQ.filenameIsInApp(Z) : void 0,
    });
  }
  Cp0.callFrameToStackFrame = qEQ;
  Cp0.watchdogTimer = wEQ;
});
var qp0 = U((wp0) => {
  Object.defineProperty(wp0, "__esModule", { value: !0 });
  class $p0 {
    constructor(A) {
      ((this._maxSize = A), (this._cache = new Map()));
    }
    get size() {
      return this._cache.size;
    }
    get(A) {
      let B = this._cache.get(A);
      if (B === void 0) return;
      return (this._cache.delete(A), this._cache.set(A, B), B);
    }
    set(A, B) {
      if (this._cache.size >= this._maxSize) this._cache.delete(this._cache.keys().next().value);
      this._cache.set(A, B);
    }
    remove(A) {
      let B = this._cache.get(A);
      if (B) this._cache.delete(A);
      return B;
    }
    clear() {
      this._cache.clear();
    }
    keys() {
      return Array.from(this._cache.keys());
    }
    values() {
      let A = [];
      return (this._cache.forEach((B) => A.push(B)), A);
    }
  }
  wp0.LRUMap = $p0;
});
var In1 = U((Ep0) => {
  Object.defineProperty(Ep0, "__esModule", { value: !0 });
  function MEQ(A, B) {
    return A != null ? A : B();
  }
  Ep0._nullishCoalesce = MEQ;
});
var Lp0 = U((Np0) => {
  Object.defineProperty(Np0, "__esModule", { value: !0 });
  var REQ = In1();
  async function TEQ(A, B) {
    return REQ._nullishCoalesce(A, B);
  }
  Np0._asyncNullishCoalesce = TEQ;
});
var Wn1 = U((Mp0) => {
  Object.defineProperty(Mp0, "__esModule", { value: !0 });
  async function jEQ(A) {
    let B = void 0,
      Q = A[0],
      Z = 1;
    while (Z < A.length) {
      let G = A[Z],
        Y = A[Z + 1];
      if (((Z += 2), (G === "optionalAccess" || G === "optionalCall") && Q == null)) return;
      if (G === "access" || G === "optionalAccess") ((B = Q), (Q = await Y(Q)));
      else if (G === "call" || G === "optionalCall") ((Q = await Y((...I) => Q.call(B, ...I))), (B = void 0));
    }
    return Q;
  }
  Mp0._asyncOptionalChain = jEQ;
});
var Rp0 = U((Op0) => {
  Object.defineProperty(Op0, "__esModule", { value: !0 });
  var yEQ = Wn1();
  async function kEQ(A) {
    let B = await yEQ._asyncOptionalChain(A);
    return B == null ? !0 : B;
  }
  Op0._asyncOptionalChainDelete = kEQ;
});
var Jn1 = U((Tp0) => {
  Object.defineProperty(Tp0, "__esModule", { value: !0 });
  function xEQ(A) {
    let B = void 0,
      Q = A[0],
      Z = 1;
    while (Z < A.length) {
      let G = A[Z],
        Y = A[Z + 1];
      if (((Z += 2), (G === "optionalAccess" || G === "optionalCall") && Q == null)) return;
      if (G === "access" || G === "optionalAccess") ((B = Q), (Q = Y(Q)));
      else if (G === "call" || G === "optionalCall") ((Q = Y((...I) => Q.call(B, ...I))), (B = void 0));
    }
    return Q;
  }
  Tp0._optionalChain = xEQ;
});
var jp0 = U((Pp0) => {
  Object.defineProperty(Pp0, "__esModule", { value: !0 });
  var bEQ = Jn1();
  function fEQ(A) {
    let B = bEQ._optionalChain(A);
    return B == null ? !0 : B;
  }
  Pp0._optionalChainDelete = fEQ;
});
var yp0 = U((Sp0) => {
  Object.defineProperty(Sp0, "__esModule", { value: !0 });
  function gEQ(A) {
    return A.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  Sp0.escapeStringForRegex = gEQ;
});
var LA = U((zn1) => {
  Object.defineProperty(zn1, "__esModule", { value: !0 });
  var mEQ = Zc0(),
    QH1 = Ki1(),
    Xn1 = Ci1(),
    dEQ = Ui1(),
    Fn1 = YF(),
    cEQ = Gl0(),
    IF = OC(),
    lEQ = Xl0(),
    ZH1 = fw(),
    pEQ = pi1(),
    Bk = bQ1(),
    Vn1 = li1(),
    GH1 = uQ1(),
    WT = RC(),
    nh = ql0(),
    iEQ = Ll0(),
    ah = kl0(),
    Kn1 = bl0(),
    dQ1 = uK1(),
    cQ1 = xQ1(),
    Qk = Si1(),
    Hn1 = ai1(),
    lQ1 = ti1(),
    pQ1 = sl0(),
    kp0 = ci1(),
    SN = Zn1(),
    nEQ = Ap0(),
    iQ1 = Yp0(),
    qi = An1(),
    YH1 = ri1(),
    aEQ = Xp0(),
    sEQ = Vp0(),
    IH1 = Dp0(),
    _p0 = Up0(),
    rEQ = qp0(),
    oEQ = Lp0(),
    tEQ = Wn1(),
    eEQ = Rp0(),
    ANQ = In1(),
    BNQ = Jn1(),
    QNQ = jp0(),
    ZNQ = Ni1(),
    GNQ = Ti1(),
    xp0 = mi1(),
    YNQ = ki1(),
    INQ = ui1(),
    WNQ = vi1(),
    JNQ = hi1(),
    XNQ = YT(),
    FNQ = gK1(),
    VNQ = yp0(),
    KNQ = gi1();
  zn1.applyAggregateErrorsToEvent = mEQ.applyAggregateErrorsToEvent;
  zn1.getComponentName = QH1.getComponentName;
  zn1.getDomElement = QH1.getDomElement;
  zn1.getLocationHref = QH1.getLocationHref;
  zn1.htmlTreeAsString = QH1.htmlTreeAsString;
  zn1.dsnFromString = Xn1.dsnFromString;
  zn1.dsnToString = Xn1.dsnToString;
  zn1.makeDsn = Xn1.makeDsn;
  zn1.SentryError = dEQ.SentryError;
  zn1.GLOBAL_OBJ = Fn1.GLOBAL_OBJ;
  zn1.getGlobalObject = Fn1.getGlobalObject;
  zn1.getGlobalSingleton = Fn1.getGlobalSingleton;
  zn1.addInstrumentationHandler = cEQ.addInstrumentationHandler;
  zn1.isDOMError = IF.isDOMError;
  zn1.isDOMException = IF.isDOMException;
  zn1.isElement = IF.isElement;
  zn1.isError = IF.isError;
  zn1.isErrorEvent = IF.isErrorEvent;
  zn1.isEvent = IF.isEvent;
  zn1.isInstanceOf = IF.isInstanceOf;
  zn1.isNaN = IF.isNaN;
  zn1.isParameterizedString = IF.isParameterizedString;
  zn1.isPlainObject = IF.isPlainObject;
  zn1.isPrimitive = IF.isPrimitive;
  zn1.isRegExp = IF.isRegExp;
  zn1.isString = IF.isString;
  zn1.isSyntheticEvent = IF.isSyntheticEvent;
  zn1.isThenable = IF.isThenable;
  zn1.isVueViewModel = IF.isVueViewModel;
  zn1.isBrowser = lEQ.isBrowser;
  zn1.CONSOLE_LEVELS = ZH1.CONSOLE_LEVELS;
  zn1.consoleSandbox = ZH1.consoleSandbox;
  zn1.logger = ZH1.logger;
  zn1.originalConsoleMethods = ZH1.originalConsoleMethods;
  zn1.memoBuilder = pEQ.memoBuilder;
  zn1.addContextToFrame = Bk.addContextToFrame;
  zn1.addExceptionMechanism = Bk.addExceptionMechanism;
  zn1.addExceptionTypeValue = Bk.addExceptionTypeValue;
  zn1.arrayify = Bk.arrayify;
  zn1.checkOrSetAlreadyCaught = Bk.checkOrSetAlreadyCaught;
  zn1.getEventDescription = Bk.getEventDescription;
  zn1.parseSemver = Bk.parseSemver;
  zn1.uuid4 = Bk.uuid4;
  zn1.dynamicRequire = Vn1.dynamicRequire;
  zn1.isNodeEnv = Vn1.isNodeEnv;
  zn1.loadModule = Vn1.loadModule;
  zn1.normalize = GH1.normalize;
  zn1.normalizeToSize = GH1.normalizeToSize;
  zn1.normalizeUrlToBase = GH1.normalizeUrlToBase;
  zn1.walk = GH1.walk;
  zn1.addNonEnumerableProperty = WT.addNonEnumerableProperty;
  zn1.convertToPlainObject = WT.convertToPlainObject;
  zn1.dropUndefinedKeys = WT.dropUndefinedKeys;
  zn1.extractExceptionKeysForMessage = WT.extractExceptionKeysForMessage;
  zn1.fill = WT.fill;
  zn1.getOriginalFunction = WT.getOriginalFunction;
  zn1.markFunctionWrapped = WT.markFunctionWrapped;
  zn1.objectify = WT.objectify;
  zn1.urlEncode = WT.urlEncode;
  zn1.basename = nh.basename;
  zn1.dirname = nh.dirname;
  zn1.isAbsolute = nh.isAbsolute;
  zn1.join = nh.join;
  zn1.normalizePath = nh.normalizePath;
  zn1.relative = nh.relative;
  zn1.resolve = nh.resolve;
  zn1.makePromiseBuffer = iEQ.makePromiseBuffer;
  zn1.DEFAULT_USER_INCLUDES = ah.DEFAULT_USER_INCLUDES;
  zn1.addRequestDataToEvent = ah.addRequestDataToEvent;
  zn1.addRequestDataToTransaction = ah.addRequestDataToTransaction;
  zn1.extractPathForTransaction = ah.extractPathForTransaction;
  zn1.extractRequestData = ah.extractRequestData;
  zn1.winterCGHeadersToDict = ah.winterCGHeadersToDict;
  zn1.winterCGRequestToRequestData = ah.winterCGRequestToRequestData;
  zn1.severityFromString = Kn1.severityFromString;
  zn1.severityLevelFromString = Kn1.severityLevelFromString;
  zn1.validSeverityLevels = Kn1.validSeverityLevels;
  zn1.createStackParser = dQ1.createStackParser;
  zn1.getFunctionName = dQ1.getFunctionName;
  zn1.nodeStackLineParser = dQ1.nodeStackLineParser;
  zn1.stackParserFromStackParserOptions = dQ1.stackParserFromStackParserOptions;
  zn1.stripSentryFramesAndReverse = dQ1.stripSentryFramesAndReverse;
  zn1.isMatchingPattern = cQ1.isMatchingPattern;
  zn1.safeJoin = cQ1.safeJoin;
  zn1.snipLine = cQ1.snipLine;
  zn1.stringMatchesSomePattern = cQ1.stringMatchesSomePattern;
  zn1.truncate = cQ1.truncate;
  zn1.isNativeFetch = Qk.isNativeFetch;
  zn1.supportsDOMError = Qk.supportsDOMError;
  zn1.supportsDOMException = Qk.supportsDOMException;
  zn1.supportsErrorEvent = Qk.supportsErrorEvent;
  zn1.supportsFetch = Qk.supportsFetch;
  zn1.supportsNativeFetch = Qk.supportsNativeFetch;
  zn1.supportsReferrerPolicy = Qk.supportsReferrerPolicy;
  zn1.supportsReportingObserver = Qk.supportsReportingObserver;
  zn1.SyncPromise = Hn1.SyncPromise;
  zn1.rejectedSyncPromise = Hn1.rejectedSyncPromise;
  zn1.resolvedSyncPromise = Hn1.resolvedSyncPromise;
  Object.defineProperty(zn1, "_browserPerformanceTimeOriginMode", {
    enumerable: !0,
    get: () => lQ1._browserPerformanceTimeOriginMode,
  });
  zn1.browserPerformanceTimeOrigin = lQ1.browserPerformanceTimeOrigin;
  zn1.dateTimestampInSeconds = lQ1.dateTimestampInSeconds;
  zn1.timestampInSeconds = lQ1.timestampInSeconds;
  zn1.timestampWithMs = lQ1.timestampWithMs;
  zn1.TRACEPARENT_REGEXP = pQ1.TRACEPARENT_REGEXP;
  zn1.extractTraceparentData = pQ1.extractTraceparentData;
  zn1.generateSentryTraceHeader = pQ1.generateSentryTraceHeader;
  zn1.propagationContextFromHeaders = pQ1.propagationContextFromHeaders;
  zn1.tracingContextFromHeaders = pQ1.tracingContextFromHeaders;
  zn1.getSDKSource = kp0.getSDKSource;
  zn1.isBrowserBundle = kp0.isBrowserBundle;
  zn1.addItemToEnvelope = SN.addItemToEnvelope;
  zn1.createAttachmentEnvelopeItem = SN.createAttachmentEnvelopeItem;
  zn1.createEnvelope = SN.createEnvelope;
  zn1.createEventEnvelopeHeaders = SN.createEventEnvelopeHeaders;
  zn1.envelopeContainsItemType = SN.envelopeContainsItemType;
  zn1.envelopeItemTypeToDataCategory = SN.envelopeItemTypeToDataCategory;
  zn1.forEachEnvelopeItem = SN.forEachEnvelopeItem;
  zn1.getSdkMetadataForEnvelopeHeader = SN.getSdkMetadataForEnvelopeHeader;
  zn1.parseEnvelope = SN.parseEnvelope;
  zn1.serializeEnvelope = SN.serializeEnvelope;
  zn1.createClientReportEnvelope = nEQ.createClientReportEnvelope;
  zn1.DEFAULT_RETRY_AFTER = iQ1.DEFAULT_RETRY_AFTER;
  zn1.disabledUntil = iQ1.disabledUntil;
  zn1.isRateLimited = iQ1.isRateLimited;
  zn1.parseRetryAfterHeader = iQ1.parseRetryAfterHeader;
  zn1.updateRateLimits = iQ1.updateRateLimits;
  zn1.BAGGAGE_HEADER_NAME = qi.BAGGAGE_HEADER_NAME;
  zn1.MAX_BAGGAGE_STRING_LENGTH = qi.MAX_BAGGAGE_STRING_LENGTH;
  zn1.SENTRY_BAGGAGE_KEY_PREFIX = qi.SENTRY_BAGGAGE_KEY_PREFIX;
  zn1.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = qi.SENTRY_BAGGAGE_KEY_PREFIX_REGEX;
  zn1.baggageHeaderToDynamicSamplingContext = qi.baggageHeaderToDynamicSamplingContext;
  zn1.dynamicSamplingContextToSentryBaggageHeader = qi.dynamicSamplingContextToSentryBaggageHeader;
  zn1.getNumberOfUrlSegments = YH1.getNumberOfUrlSegments;
  zn1.getSanitizedUrlString = YH1.getSanitizedUrlString;
  zn1.parseUrl = YH1.parseUrl;
  zn1.stripUrlQueryAndFragment = YH1.stripUrlQueryAndFragment;
  zn1.addOrUpdateIntegration = aEQ.addOrUpdateIntegration;
  zn1.makeFifoCache = sEQ.makeFifoCache;
  zn1.eventFromMessage = IH1.eventFromMessage;
  zn1.eventFromUnknownInput = IH1.eventFromUnknownInput;
  zn1.exceptionFromError = IH1.exceptionFromError;
  zn1.parseStackFrames = IH1.parseStackFrames;
  zn1.callFrameToStackFrame = _p0.callFrameToStackFrame;
  zn1.watchdogTimer = _p0.watchdogTimer;
  zn1.LRUMap = rEQ.LRUMap;
  zn1._asyncNullishCoalesce = oEQ._asyncNullishCoalesce;
  zn1._asyncOptionalChain = tEQ._asyncOptionalChain;
  zn1._asyncOptionalChainDelete = eEQ._asyncOptionalChainDelete;
  zn1._nullishCoalesce = ANQ._nullishCoalesce;
  zn1._optionalChain = BNQ._optionalChain;
  zn1._optionalChainDelete = QNQ._optionalChainDelete;
  zn1.addConsoleInstrumentationHandler = ZNQ.addConsoleInstrumentationHandler;
  zn1.addClickKeypressInstrumentationHandler = GNQ.addClickKeypressInstrumentationHandler;
  zn1.SENTRY_XHR_DATA_KEY = xp0.SENTRY_XHR_DATA_KEY;
  zn1.addXhrInstrumentationHandler = xp0.addXhrInstrumentationHandler;
  zn1.addFetchInstrumentationHandler = YNQ.addFetchInstrumentationHandler;
  zn1.addHistoryInstrumentationHandler = INQ.addHistoryInstrumentationHandler;
  zn1.addGlobalErrorInstrumentationHandler = WNQ.addGlobalErrorInstrumentationHandler;
  zn1.addGlobalUnhandledRejectionInstrumentationHandler = JNQ.addGlobalUnhandledRejectionInstrumentationHandler;
  zn1.resetInstrumentationHandlers = XNQ.resetInstrumentationHandlers;
  zn1.filenameIsInApp = FNQ.filenameIsInApp;
  zn1.escapeStringForRegex = VNQ.escapeStringForRegex;
  zn1.supportsHistory = KNQ.supportsHistory;
});
var GI = U((vp0) => {
  Object.defineProperty(vp0, "__esModule", { value: !0 });
  var HOQ = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
  vp0.DEBUG_BUILD = HOQ;
});
var Ei = U((bp0) => {
  Object.defineProperty(bp0, "__esModule", { value: !0 });
  var DOQ = "production";
  bp0.DEFAULT_ENVIRONMENT = DOQ;
});
var nQ1 = U((hp0) => {
  Object.defineProperty(hp0, "__esModule", { value: !0 });
  var WH1 = LA(),
    UOQ = GI();
  function fp0() {
    return WH1.getGlobalSingleton("globalEventProcessors", () => []);
  }
  function $OQ(A) {
    fp0().push(A);
  }
  function Dn1(A, B, Q, Z = 0) {
    return new WH1.SyncPromise((G, Y) => {
      let I = A[Z];
      if (B === null || typeof I !== "function") G(B);
      else {
        let W = I({ ...B }, Q);
        if (
          (UOQ.DEBUG_BUILD && I.id && W === null && WH1.logger.log(`Event processor "${I.id}" dropped event`),
          WH1.isThenable(W))
        )
          W.then((J) => Dn1(A, J, Q, Z + 1).then(G)).then(null, Y);
        else
          Dn1(A, W, Q, Z + 1)
            .then(G)
            .then(null, Y);
      }
    });
  }
  hp0.addGlobalEventProcessor = $OQ;
  hp0.getGlobalEventProcessors = fp0;
  hp0.notifyEventProcessors = Dn1;
});
var Ni = U((gp0) => {
  Object.defineProperty(gp0, "__esModule", { value: !0 });
  var aQ1 = LA();
  function NOQ(A) {
    let B = aQ1.timestampInSeconds(),
      Q = {
        sid: aQ1.uuid4(),
        init: !0,
        timestamp: B,
        started: B,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => MOQ(Q),
      };
    if (A) Cn1(Q, A);
    return Q;
  }
  function Cn1(A, B = {}) {
    if (B.user) {
      if (!A.ipAddress && B.user.ip_address) A.ipAddress = B.user.ip_address;
      if (!A.did && !B.did) A.did = B.user.id || B.user.email || B.user.username;
    }
    if (((A.timestamp = B.timestamp || aQ1.timestampInSeconds()), B.abnormal_mechanism))
      A.abnormal_mechanism = B.abnormal_mechanism;
    if (B.ignoreDuration) A.ignoreDuration = B.ignoreDuration;
    if (B.sid) A.sid = B.sid.length === 32 ? B.sid : aQ1.uuid4();
    if (B.init !== void 0) A.init = B.init;
    if (!A.did && B.did) A.did = `${B.did}`;
    if (typeof B.started === "number") A.started = B.started;
    if (A.ignoreDuration) A.duration = void 0;
    else if (typeof B.duration === "number") A.duration = B.duration;
    else {
      let Q = A.timestamp - A.started;
      A.duration = Q >= 0 ? Q : 0;
    }
    if (B.release) A.release = B.release;
    if (B.environment) A.environment = B.environment;
    if (!A.ipAddress && B.ipAddress) A.ipAddress = B.ipAddress;
    if (!A.userAgent && B.userAgent) A.userAgent = B.userAgent;
    if (typeof B.errors === "number") A.errors = B.errors;
    if (B.status) A.status = B.status;
  }
  function LOQ(A, B) {
    let Q = {};
    if (B) Q = { status: B };
    else if (A.status === "ok") Q = { status: "exited" };
    Cn1(A, Q);
  }
  function MOQ(A) {
    return aQ1.dropUndefinedKeys({
      sid: `${A.sid}`,
      init: A.init,
      started: new Date(A.started * 1000).toISOString(),
      timestamp: new Date(A.timestamp * 1000).toISOString(),
      status: A.status,
      errors: A.errors,
      did: typeof A.did === "number" || typeof A.did === "string" ? `${A.did}` : void 0,
      duration: A.duration,
      abnormal_mechanism: A.abnormal_mechanism,
      attrs: { release: A.release, environment: A.environment, ip_address: A.ipAddress, user_agent: A.userAgent },
    });
  }
  gp0.closeSession = LOQ;
  gp0.makeSession = NOQ;
  gp0.updateSession = Cn1;
});
var pK = U((lp0) => {
  Object.defineProperty(lp0, "__esModule", { value: !0 });
  var Un1 = LA(),
    POQ = 0,
    mp0 = 1;
  function jOQ(A) {
    let { spanId: B, traceId: Q } = A.spanContext(),
      { data: Z, op: G, parent_span_id: Y, status: I, tags: W, origin: J } = dp0(A);
    return Un1.dropUndefinedKeys({
      data: Z,
      op: G,
      parent_span_id: Y,
      span_id: B,
      status: I,
      tags: W,
      trace_id: Q,
      origin: J,
    });
  }
  function SOQ(A) {
    let { traceId: B, spanId: Q } = A.spanContext(),
      Z = cp0(A);
    return Un1.generateSentryTraceHeader(B, Q, Z);
  }
  function yOQ(A) {
    if (typeof A === "number") return up0(A);
    if (Array.isArray(A)) return A[0] + A[1] / 1e9;
    if (A instanceof Date) return up0(A.getTime());
    return Un1.timestampInSeconds();
  }
  function up0(A) {
    return A > 9999999999 ? A / 1000 : A;
  }
  function dp0(A) {
    if (kOQ(A)) return A.getSpanJSON();
    if (typeof A.toJSON === "function") return A.toJSON();
    return {};
  }
  function kOQ(A) {
    return typeof A.getSpanJSON === "function";
  }
  function cp0(A) {
    let { traceFlags: B } = A.spanContext();
    return Boolean(B & mp0);
  }
  lp0.TRACE_FLAG_NONE = POQ;
  lp0.TRACE_FLAG_SAMPLED = mp0;
  lp0.spanIsSampled = cp0;
  lp0.spanTimeInputToSeconds = yOQ;
  lp0.spanToJSON = dp0;
  lp0.spanToTraceContext = jOQ;
  lp0.spanToTraceHeader = SOQ;
});
var JH1 = U((sp0) => {
  Object.defineProperty(sp0, "__esModule", { value: !0 });
  var Lz = LA(),
    uOQ = Ei(),
    pp0 = nQ1(),
    wn1 = FH1(),
    $n1 = XH1(),
    mOQ = pK();
  function dOQ(A, B, Q, Z, G, Y) {
    let { normalizeDepth: I = 3, normalizeMaxBreadth: W = 1000 } = A,
      J = {
        ...B,
        event_id: B.event_id || Q.event_id || Lz.uuid4(),
        timestamp: B.timestamp || Lz.dateTimestampInSeconds(),
      },
      X = Q.integrations || A.integrations.map((C) => C.name);
    if ((cOQ(J, A), lOQ(J, X), B.type === void 0)) np0(J, A.stackParser);
    let F = iOQ(Z, Q.captureContext);
    if (Q.mechanism) Lz.addExceptionMechanism(J, Q.mechanism);
    let V = G && G.getEventProcessors ? G.getEventProcessors() : [],
      K = wn1.getGlobalScope().getScopeData();
    if (Y) {
      let C = Y.getScopeData();
      $n1.mergeScopeData(K, C);
    }
    if (F) {
      let C = F.getScopeData();
      $n1.mergeScopeData(K, C);
    }
    let H = [...(Q.attachments || []), ...K.attachments];
    if (H.length) Q.attachments = H;
    $n1.applyScopeDataToEvent(J, K);
    let z = [...V, ...pp0.getGlobalEventProcessors(), ...K.eventProcessors];
    return pp0.notifyEventProcessors(z, J, Q).then((C) => {
      if (C) ap0(C);
      if (typeof I === "number" && I > 0) return pOQ(C, I, W);
      return C;
    });
  }
  function cOQ(A, B) {
    let { environment: Q, release: Z, dist: G, maxValueLength: Y = 250 } = B;
    if (!("environment" in A)) A.environment = "environment" in B ? Q : uOQ.DEFAULT_ENVIRONMENT;
    if (A.release === void 0 && Z !== void 0) A.release = Z;
    if (A.dist === void 0 && G !== void 0) A.dist = G;
    if (A.message) A.message = Lz.truncate(A.message, Y);
    let I = A.exception && A.exception.values && A.exception.values[0];
    if (I && I.value) I.value = Lz.truncate(I.value, Y);
    let W = A.request;
    if (W && W.url) W.url = Lz.truncate(W.url, Y);
  }
  var ip0 = new WeakMap();
  function np0(A, B) {
    let Q = Lz.GLOBAL_OBJ._sentryDebugIds;
    if (!Q) return;
    let Z,
      G = ip0.get(B);
    if (G) Z = G;
    else ((Z = new Map()), ip0.set(B, Z));
    let Y = Object.keys(Q).reduce((I, W) => {
      let J,
        X = Z.get(W);
      if (X) J = X;
      else ((J = B(W)), Z.set(W, J));
      for (let F = J.length - 1; F >= 0; F--) {
        let V = J[F];
        if (V.filename) {
          I[V.filename] = Q[W];
          break;
        }
      }
      return I;
    }, {});
    try {
      A.exception.values.forEach((I) => {
        I.stacktrace.frames.forEach((W) => {
          if (W.filename) W.debug_id = Y[W.filename];
        });
      });
    } catch (I) {}
  }
  function ap0(A) {
    let B = {};
    try {
      A.exception.values.forEach((Z) => {
        Z.stacktrace.frames.forEach((G) => {
          if (G.debug_id) {
            if (G.abs_path) B[G.abs_path] = G.debug_id;
            else if (G.filename) B[G.filename] = G.debug_id;
            delete G.debug_id;
          }
        });
      });
    } catch (Z) {}
    if (Object.keys(B).length === 0) return;
    ((A.debug_meta = A.debug_meta || {}), (A.debug_meta.images = A.debug_meta.images || []));
    let Q = A.debug_meta.images;
    Object.keys(B).forEach((Z) => {
      Q.push({ type: "sourcemap", code_file: Z, debug_id: B[Z] });
    });
  }
  function lOQ(A, B) {
    if (B.length > 0) ((A.sdk = A.sdk || {}), (A.sdk.integrations = [...(A.sdk.integrations || []), ...B]));
  }
  function pOQ(A, B, Q) {
    if (!A) return null;
    let Z = {
      ...A,
      ...(A.breadcrumbs && {
        breadcrumbs: A.breadcrumbs.map((G) => ({ ...G, ...(G.data && { data: Lz.normalize(G.data, B, Q) }) })),
      }),
      ...(A.user && { user: Lz.normalize(A.user, B, Q) }),
      ...(A.contexts && { contexts: Lz.normalize(A.contexts, B, Q) }),
      ...(A.extra && { extra: Lz.normalize(A.extra, B, Q) }),
    };
    if (A.contexts && A.contexts.trace && Z.contexts) {
      if (((Z.contexts.trace = A.contexts.trace), A.contexts.trace.data))
        Z.contexts.trace.data = Lz.normalize(A.contexts.trace.data, B, Q);
    }
    if (A.spans)
      Z.spans = A.spans.map((G) => {
        let Y = mOQ.spanToJSON(G).data;
        if (Y) G.data = Lz.normalize(Y, B, Q);
        return G;
      });
    return Z;
  }
  function iOQ(A, B) {
    if (!B) return A;
    let Q = A ? A.clone() : new wn1.Scope();
    return (Q.update(B), Q);
  }
  function nOQ(A) {
    if (!A) return;
    if (aOQ(A)) return { captureContext: A };
    if (rOQ(A)) return { captureContext: A };
    return A;
  }
  function aOQ(A) {
    return A instanceof wn1.Scope || typeof A === "function";
  }
  var sOQ = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
  function rOQ(A) {
    return Object.keys(A).some((B) => sOQ.includes(B));
  }
  sp0.applyDebugIds = np0;
  sp0.applyDebugMeta = ap0;
  sp0.parseEventHintOrCaptureContext = nOQ;
  sp0.prepareEvent = dOQ;
});
var PC = U((tp0) => {
  Object.defineProperty(tp0, "__esModule", { value: !0 });
  var JT = LA(),
    BRQ = Ei(),
    VH1 = GI(),
    YY = yN(),
    qn1 = Ni(),
    QRQ = JH1();
  function ZRQ(A, B) {
    return YY.getCurrentHub().captureException(A, QRQ.parseEventHintOrCaptureContext(B));
  }
  function GRQ(A, B) {
    let Q = typeof B === "string" ? B : void 0,
      Z = typeof B !== "string" ? { captureContext: B } : void 0;
    return YY.getCurrentHub().captureMessage(A, Q, Z);
  }
  function YRQ(A, B) {
    return YY.getCurrentHub().captureEvent(A, B);
  }
  function IRQ(A) {
    YY.getCurrentHub().configureScope(A);
  }
  function WRQ(A, B) {
    YY.getCurrentHub().addBreadcrumb(A, B);
  }
  function JRQ(A, B) {
    YY.getCurrentHub().setContext(A, B);
  }
  function XRQ(A) {
    YY.getCurrentHub().setExtras(A);
  }
  function FRQ(A, B) {
    YY.getCurrentHub().setExtra(A, B);
  }
  function VRQ(A) {
    YY.getCurrentHub().setTags(A);
  }
  function KRQ(A, B) {
    YY.getCurrentHub().setTag(A, B);
  }
  function HRQ(A) {
    YY.getCurrentHub().setUser(A);
  }
  function rp0(...A) {
    let B = YY.getCurrentHub();
    if (A.length === 2) {
      let [Q, Z] = A;
      if (!Q) return B.withScope(Z);
      return B.withScope(() => {
        return ((B.getStackTop().scope = Q), Z(Q));
      });
    }
    return B.withScope(A[0]);
  }
  function zRQ(A) {
    return YY.runWithAsyncContext(() => {
      return A(YY.getIsolationScope());
    });
  }
  function DRQ(A, B) {
    return rp0((Q) => {
      return (Q.setSpan(A), B(Q));
    });
  }
  function CRQ(A, B) {
    return YY.getCurrentHub().startTransaction({ ...A }, B);
  }
  function En1(A, B) {
    let Q = sQ1(),
      Z = sh();
    if (!Z) VH1.DEBUG_BUILD && JT.logger.warn("Cannot capture check-in. No client defined.");
    else if (!Z.captureCheckIn)
      VH1.DEBUG_BUILD && JT.logger.warn("Cannot capture check-in. Client does not support sending check-ins.");
    else return Z.captureCheckIn(A, B, Q);
    return JT.uuid4();
  }
  function URQ(A, B, Q) {
    let Z = En1({ monitorSlug: A, status: "in_progress" }, Q),
      G = JT.timestampInSeconds();
    function Y(W) {
      En1({ monitorSlug: A, status: W, checkInId: Z, duration: JT.timestampInSeconds() - G });
    }
    let I;
    try {
      I = B();
    } catch (W) {
      throw (Y("error"), W);
    }
    if (JT.isThenable(I))
      Promise.resolve(I).then(
        () => {
          Y("ok");
        },
        () => {
          Y("error");
        },
      );
    else Y("ok");
    return I;
  }
  async function $RQ(A) {
    let B = sh();
    if (B) return B.flush(A);
    return (VH1.DEBUG_BUILD && JT.logger.warn("Cannot flush events. No client defined."), Promise.resolve(!1));
  }
  async function wRQ(A) {
    let B = sh();
    if (B) return B.close(A);
    return (
      VH1.DEBUG_BUILD && JT.logger.warn("Cannot flush events and disable SDK. No client defined."),
      Promise.resolve(!1)
    );
  }
  function qRQ() {
    return YY.getCurrentHub().lastEventId();
  }
  function sh() {
    return YY.getCurrentHub().getClient();
  }
  function ERQ() {
    return !!sh();
  }
  function sQ1() {
    return YY.getCurrentHub().getScope();
  }
  function NRQ(A) {
    let B = sh(),
      Q = YY.getIsolationScope(),
      Z = sQ1(),
      { release: G, environment: Y = BRQ.DEFAULT_ENVIRONMENT } = (B && B.getOptions()) || {},
      { userAgent: I } = JT.GLOBAL_OBJ.navigator || {},
      W = qn1.makeSession({
        release: G,
        environment: Y,
        user: Z.getUser() || Q.getUser(),
        ...(I && { userAgent: I }),
        ...A,
      }),
      J = Q.getSession();
    if (J && J.status === "ok") qn1.updateSession(J, { status: "exited" });
    return (Nn1(), Q.setSession(W), Z.setSession(W), W);
  }
  function Nn1() {
    let A = YY.getIsolationScope(),
      B = sQ1(),
      Q = B.getSession() || A.getSession();
    if (Q) qn1.closeSession(Q);
    (op0(), A.setSession(), B.setSession());
  }
  function op0() {
    let A = YY.getIsolationScope(),
      B = sQ1(),
      Q = sh(),
      Z = B.getSession() || A.getSession();
    if (Z && Q && Q.captureSession) Q.captureSession(Z);
  }
  function LRQ(A = !1) {
    if (A) {
      Nn1();
      return;
    }
    op0();
  }
  tp0.addBreadcrumb = WRQ;
  tp0.captureCheckIn = En1;
  tp0.captureEvent = YRQ;
  tp0.captureException = ZRQ;
  tp0.captureMessage = GRQ;
  tp0.captureSession = LRQ;
  tp0.close = wRQ;
  tp0.configureScope = IRQ;
  tp0.endSession = Nn1;
  tp0.flush = $RQ;
  tp0.getClient = sh;
  tp0.getCurrentScope = sQ1;
  tp0.isInitialized = ERQ;
  tp0.lastEventId = qRQ;
  tp0.setContext = JRQ;
  tp0.setExtra = FRQ;
  tp0.setExtras = XRQ;
  tp0.setTag = KRQ;
  tp0.setTags = VRQ;
  tp0.setUser = HRQ;
  tp0.startSession = NRQ;
  tp0.startTransaction = CRQ;
  tp0.withActiveSpan = DRQ;
  tp0.withIsolationScope = zRQ;
  tp0.withMonitor = URQ;
  tp0.withScope = rp0;
});
var Li = U((ep0) => {
  Object.defineProperty(ep0, "__esModule", { value: !0 });
  function rRQ(A) {
    return A.transaction;
  }
  ep0.getRootSpan = rRQ;
});
var rh = U((Qi0) => {
  Object.defineProperty(Qi0, "__esModule", { value: !0 });
  var tRQ = LA(),
    eRQ = Ei(),
    Ai0 = PC(),
    ATQ = Li(),
    Ln1 = pK();
  function Bi0(A, B, Q) {
    let Z = B.getOptions(),
      { publicKey: G } = B.getDsn() || {},
      { segment: Y } = (Q && Q.getUser()) || {},
      I = tRQ.dropUndefinedKeys({
        environment: Z.environment || eRQ.DEFAULT_ENVIRONMENT,
        release: Z.release,
        user_segment: Y,
        public_key: G,
        trace_id: A,
      });
    return (B.emit && B.emit("createDsc", I), I);
  }
  function BTQ(A) {
    let B = Ai0.getClient();
    if (!B) return {};
    let Q = Bi0(Ln1.spanToJSON(A).trace_id || "", B, Ai0.getCurrentScope()),
      Z = ATQ.getRootSpan(A);
    if (!Z) return Q;
    let G = Z && Z._frozenDynamicSamplingContext;
    if (G) return G;
    let { sampleRate: Y, source: I } = Z.metadata;
    if (Y != null) Q.sample_rate = `${Y}`;
    let W = Ln1.spanToJSON(Z);
    if (I && I !== "url") Q.transaction = W.description;
    return ((Q.sampled = String(Ln1.spanIsSampled(Z))), B.emit && B.emit("createDsc", Q), Q);
  }
  Qi0.getDynamicSamplingContextFromClient = Bi0;
  Qi0.getDynamicSamplingContextFromSpan = BTQ;
});
var XH1 = U((Gi0) => {
  Object.defineProperty(Gi0, "__esModule", { value: !0 });
  var rQ1 = LA(),
    GTQ = rh(),
    YTQ = Li(),
    Zi0 = pK();
  function ITQ(A, B) {
    let { fingerprint: Q, span: Z, breadcrumbs: G, sdkProcessingMetadata: Y } = B;
    if ((JTQ(A, B), Z)) VTQ(A, Z);
    (KTQ(A, Q), XTQ(A, G), FTQ(A, Y));
  }
  function WTQ(A, B) {
    let {
      extra: Q,
      tags: Z,
      user: G,
      contexts: Y,
      level: I,
      sdkProcessingMetadata: W,
      breadcrumbs: J,
      fingerprint: X,
      eventProcessors: F,
      attachments: V,
      propagationContext: K,
      transactionName: H,
      span: z,
    } = B;
    if (
      (Mi(A, "extra", Q),
      Mi(A, "tags", Z),
      Mi(A, "user", G),
      Mi(A, "contexts", Y),
      Mi(A, "sdkProcessingMetadata", W),
      I)
    )
      A.level = I;
    if (H) A.transactionName = H;
    if (z) A.span = z;
    if (J.length) A.breadcrumbs = [...A.breadcrumbs, ...J];
    if (X.length) A.fingerprint = [...A.fingerprint, ...X];
    if (F.length) A.eventProcessors = [...A.eventProcessors, ...F];
    if (V.length) A.attachments = [...A.attachments, ...V];
    A.propagationContext = { ...A.propagationContext, ...K };
  }
  function Mi(A, B, Q) {
    if (Q && Object.keys(Q).length) {
      A[B] = { ...A[B] };
      for (let Z in Q) if (Object.prototype.hasOwnProperty.call(Q, Z)) A[B][Z] = Q[Z];
    }
  }
  function JTQ(A, B) {
    let { extra: Q, tags: Z, user: G, contexts: Y, level: I, transactionName: W } = B,
      J = rQ1.dropUndefinedKeys(Q);
    if (J && Object.keys(J).length) A.extra = { ...J, ...A.extra };
    let X = rQ1.dropUndefinedKeys(Z);
    if (X && Object.keys(X).length) A.tags = { ...X, ...A.tags };
    let F = rQ1.dropUndefinedKeys(G);
    if (F && Object.keys(F).length) A.user = { ...F, ...A.user };
    let V = rQ1.dropUndefinedKeys(Y);
    if (V && Object.keys(V).length) A.contexts = { ...V, ...A.contexts };
    if (I) A.level = I;
    if (W) A.transaction = W;
  }
  function XTQ(A, B) {
    let Q = [...(A.breadcrumbs || []), ...B];
    A.breadcrumbs = Q.length ? Q : void 0;
  }
  function FTQ(A, B) {
    A.sdkProcessingMetadata = { ...A.sdkProcessingMetadata, ...B };
  }
  function VTQ(A, B) {
    A.contexts = { trace: Zi0.spanToTraceContext(B), ...A.contexts };
    let Q = YTQ.getRootSpan(B);
    if (Q) {
      A.sdkProcessingMetadata = {
        dynamicSamplingContext: GTQ.getDynamicSamplingContextFromSpan(B),
        ...A.sdkProcessingMetadata,
      };
      let Z = Zi0.spanToJSON(Q).description;
      if (Z) A.tags = { transaction: Z, ...A.tags };
    }
  }
  function KTQ(A, B) {
    if (((A.fingerprint = A.fingerprint ? rQ1.arrayify(A.fingerprint) : []), B))
      A.fingerprint = A.fingerprint.concat(B);
    if (A.fingerprint && !A.fingerprint.length) delete A.fingerprint;
  }
  Gi0.applyScopeDataToEvent = ITQ;
  Gi0.mergeAndOverwriteScopeData = Mi;
  Gi0.mergeScopeData = WTQ;
});
var FH1 = U((Wi0) => {
  Object.defineProperty(Wi0, "__esModule", { value: !0 });
  var kN = LA(),
    Yi0 = nQ1(),
    CTQ = Ni(),
    UTQ = XH1(),
    $TQ = 100,
    KH1;
  class Oi {
    constructor() {
      ((this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {}),
        (this._propagationContext = Ii0()));
    }
    static clone(A) {
      return A ? A.clone() : new Oi();
    }
    clone() {
      let A = new Oi();
      return (
        (A._breadcrumbs = [...this._breadcrumbs]),
        (A._tags = { ...this._tags }),
        (A._extra = { ...this._extra }),
        (A._contexts = { ...this._contexts }),
        (A._user = this._user),
        (A._level = this._level),
        (A._span = this._span),
        (A._session = this._session),
        (A._transactionName = this._transactionName),
        (A._fingerprint = this._fingerprint),
        (A._eventProcessors = [...this._eventProcessors]),
        (A._requestSession = this._requestSession),
        (A._attachments = [...this._attachments]),
        (A._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
        (A._propagationContext = { ...this._propagationContext }),
        (A._client = this._client),
        A
      );
    }
    setClient(A) {
      this._client = A;
    }
    getClient() {
      return this._client;
    }
    addScopeListener(A) {
      this._scopeListeners.push(A);
    }
    addEventProcessor(A) {
      return (this._eventProcessors.push(A), this);
    }
    setUser(A) {
      if (
        ((this._user = A || { email: void 0, id: void 0, ip_address: void 0, segment: void 0, username: void 0 }),
        this._session)
      )
        CTQ.updateSession(this._session, { user: A });
      return (this._notifyScopeListeners(), this);
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(A) {
      return ((this._requestSession = A), this);
    }
    setTags(A) {
      return ((this._tags = { ...this._tags, ...A }), this._notifyScopeListeners(), this);
    }
    setTag(A, B) {
      return ((this._tags = { ...this._tags, [A]: B }), this._notifyScopeListeners(), this);
    }
    setExtras(A) {
      return ((this._extra = { ...this._extra, ...A }), this._notifyScopeListeners(), this);
    }
    setExtra(A, B) {
      return ((this._extra = { ...this._extra, [A]: B }), this._notifyScopeListeners(), this);
    }
    setFingerprint(A) {
      return ((this._fingerprint = A), this._notifyScopeListeners(), this);
    }
    setLevel(A) {
      return ((this._level = A), this._notifyScopeListeners(), this);
    }
    setTransactionName(A) {
      return ((this._transactionName = A), this._notifyScopeListeners(), this);
    }
    setContext(A, B) {
      if (B === null) delete this._contexts[A];
      else this._contexts[A] = B;
      return (this._notifyScopeListeners(), this);
    }
    setSpan(A) {
      return ((this._span = A), this._notifyScopeListeners(), this);
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      let A = this._span;
      return A && A.transaction;
    }
    setSession(A) {
      if (!A) delete this._session;
      else this._session = A;
      return (this._notifyScopeListeners(), this);
    }
    getSession() {
      return this._session;
    }
    update(A) {
      if (!A) return this;
      let B = typeof A === "function" ? A(this) : A;
      if (B instanceof Oi) {
        let Q = B.getScopeData();
        if (
          ((this._tags = { ...this._tags, ...Q.tags }),
          (this._extra = { ...this._extra, ...Q.extra }),
          (this._contexts = { ...this._contexts, ...Q.contexts }),
          Q.user && Object.keys(Q.user).length)
        )
          this._user = Q.user;
        if (Q.level) this._level = Q.level;
        if (Q.fingerprint.length) this._fingerprint = Q.fingerprint;
        if (B.getRequestSession()) this._requestSession = B.getRequestSession();
        if (Q.propagationContext) this._propagationContext = Q.propagationContext;
      } else if (kN.isPlainObject(B)) {
        let Q = A;
        if (
          ((this._tags = { ...this._tags, ...Q.tags }),
          (this._extra = { ...this._extra, ...Q.extra }),
          (this._contexts = { ...this._contexts, ...Q.contexts }),
          Q.user)
        )
          this._user = Q.user;
        if (Q.level) this._level = Q.level;
        if (Q.fingerprint) this._fingerprint = Q.fingerprint;
        if (Q.requestSession) this._requestSession = Q.requestSession;
        if (Q.propagationContext) this._propagationContext = Q.propagationContext;
      }
      return this;
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._requestSession = void 0),
        (this._span = void 0),
        (this._session = void 0),
        this._notifyScopeListeners(),
        (this._attachments = []),
        (this._propagationContext = Ii0()),
        this
      );
    }
    addBreadcrumb(A, B) {
      let Q = typeof B === "number" ? B : $TQ;
      if (Q <= 0) return this;
      let Z = { timestamp: kN.dateTimestampInSeconds(), ...A },
        G = this._breadcrumbs;
      return (G.push(Z), (this._breadcrumbs = G.length > Q ? G.slice(-Q) : G), this._notifyScopeListeners(), this);
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
    }
    addAttachment(A) {
      return (this._attachments.push(A), this);
    }
    getAttachments() {
      return this.getScopeData().attachments;
    }
    clearAttachments() {
      return ((this._attachments = []), this);
    }
    getScopeData() {
      let {
        _breadcrumbs: A,
        _attachments: B,
        _contexts: Q,
        _tags: Z,
        _extra: G,
        _user: Y,
        _level: I,
        _fingerprint: W,
        _eventProcessors: J,
        _propagationContext: X,
        _sdkProcessingMetadata: F,
        _transactionName: V,
        _span: K,
      } = this;
      return {
        breadcrumbs: A,
        attachments: B,
        contexts: Q,
        tags: Z,
        extra: G,
        user: Y,
        level: I,
        fingerprint: W || [],
        eventProcessors: J,
        propagationContext: X,
        sdkProcessingMetadata: F,
        transactionName: V,
        span: K,
      };
    }
    applyToEvent(A, B = {}, Q = []) {
      UTQ.applyScopeDataToEvent(A, this.getScopeData());
      let Z = [...Q, ...Yi0.getGlobalEventProcessors(), ...this._eventProcessors];
      return Yi0.notifyEventProcessors(Z, A, B);
    }
    setSDKProcessingMetadata(A) {
      return ((this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...A }), this);
    }
    setPropagationContext(A) {
      return ((this._propagationContext = A), this);
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(A, B) {
      let Q = B && B.event_id ? B.event_id : kN.uuid4();
      if (!this._client) return (kN.logger.warn("No client configured on scope - will not capture exception!"), Q);
      let Z = new Error("Sentry syntheticException");
      return (
        this._client.captureException(A, { originalException: A, syntheticException: Z, ...B, event_id: Q }, this),
        Q
      );
    }
    captureMessage(A, B, Q) {
      let Z = Q && Q.event_id ? Q.event_id : kN.uuid4();
      if (!this._client) return (kN.logger.warn("No client configured on scope - will not capture message!"), Z);
      let G = new Error(A);
      return (
        this._client.captureMessage(A, B, { originalException: A, syntheticException: G, ...Q, event_id: Z }, this),
        Z
      );
    }
    captureEvent(A, B) {
      let Q = B && B.event_id ? B.event_id : kN.uuid4();
      if (!this._client) return (kN.logger.warn("No client configured on scope - will not capture event!"), Q);
      return (this._client.captureEvent(A, { ...B, event_id: Q }, this), Q);
    }
    _notifyScopeListeners() {
      if (!this._notifyingListeners)
        ((this._notifyingListeners = !0),
          this._scopeListeners.forEach((A) => {
            A(this);
          }),
          (this._notifyingListeners = !1));
    }
  }
  function wTQ() {
    if (!KH1) KH1 = new Oi();
    return KH1;
  }
  function qTQ(A) {
    KH1 = A;
  }
  function Ii0() {
    return { traceId: kN.uuid4(), spanId: kN.uuid4().substring(16) };
  }
  Wi0.Scope = Oi;
  Wi0.getGlobalScope = wTQ;
  Wi0.setGlobalScope = qTQ;
});
var HH1 = U((Ji0) => {
  Object.defineProperty(Ji0, "__esModule", { value: !0 });
  var MTQ = "7.120.3";
  Ji0.SDK_VERSION = MTQ;
});
var yN = U((Hi0) => {
  Object.defineProperty(Hi0, "__esModule", { value: !0 });
  var zV = LA(),
    RTQ = Ei(),
    Mn1 = GI(),
    Xi0 = FH1(),
    On1 = Ni(),
    TTQ = HH1(),
    zH1 = parseFloat(TTQ.SDK_VERSION),
    PTQ = 100;
  class tQ1 {
    constructor(A, B, Q, Z = zH1) {
      this._version = Z;
      let G;
      if (!B) ((G = new Xi0.Scope()), G.setClient(A));
      else G = B;
      let Y;
      if (!Q) ((Y = new Xi0.Scope()), Y.setClient(A));
      else Y = Q;
      if (((this._stack = [{ scope: G }]), A)) this.bindClient(A);
      this._isolationScope = Y;
    }
    isOlderThan(A) {
      return this._version < A;
    }
    bindClient(A) {
      let B = this.getStackTop();
      if (((B.client = A), B.scope.setClient(A), A && A.setupIntegrations)) A.setupIntegrations();
    }
    pushScope() {
      let A = this.getScope().clone();
      return (this.getStack().push({ client: this.getClient(), scope: A }), A);
    }
    popScope() {
      if (this.getStack().length <= 1) return !1;
      return !!this.getStack().pop();
    }
    withScope(A) {
      let B = this.pushScope(),
        Q;
      try {
        Q = A(B);
      } catch (Z) {
        throw (this.popScope(), Z);
      }
      if (zV.isThenable(Q))
        return Q.then(
          (Z) => {
            return (this.popScope(), Z);
          },
          (Z) => {
            throw (this.popScope(), Z);
          },
        );
      return (this.popScope(), Q);
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getIsolationScope() {
      return this._isolationScope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(A, B) {
      let Q = (this._lastEventId = B && B.event_id ? B.event_id : zV.uuid4()),
        Z = new Error("Sentry syntheticException");
      return (
        this.getScope().captureException(A, { originalException: A, syntheticException: Z, ...B, event_id: Q }),
        Q
      );
    }
    captureMessage(A, B, Q) {
      let Z = (this._lastEventId = Q && Q.event_id ? Q.event_id : zV.uuid4()),
        G = new Error(A);
      return (
        this.getScope().captureMessage(A, B, { originalException: A, syntheticException: G, ...Q, event_id: Z }),
        Z
      );
    }
    captureEvent(A, B) {
      let Q = B && B.event_id ? B.event_id : zV.uuid4();
      if (!A.type) this._lastEventId = Q;
      return (this.getScope().captureEvent(A, { ...B, event_id: Q }), Q);
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(A, B) {
      let { scope: Q, client: Z } = this.getStackTop();
      if (!Z) return;
      let { beforeBreadcrumb: G = null, maxBreadcrumbs: Y = PTQ } = (Z.getOptions && Z.getOptions()) || {};
      if (Y <= 0) return;
      let W = { timestamp: zV.dateTimestampInSeconds(), ...A },
        J = G ? zV.consoleSandbox(() => G(W, B)) : W;
      if (J === null) return;
      if (Z.emit) Z.emit("beforeAddBreadcrumb", J, B);
      Q.addBreadcrumb(J, Y);
    }
    setUser(A) {
      (this.getScope().setUser(A), this.getIsolationScope().setUser(A));
    }
    setTags(A) {
      (this.getScope().setTags(A), this.getIsolationScope().setTags(A));
    }
    setExtras(A) {
      (this.getScope().setExtras(A), this.getIsolationScope().setExtras(A));
    }
    setTag(A, B) {
      (this.getScope().setTag(A, B), this.getIsolationScope().setTag(A, B));
    }
    setExtra(A, B) {
      (this.getScope().setExtra(A, B), this.getIsolationScope().setExtra(A, B));
    }
    setContext(A, B) {
      (this.getScope().setContext(A, B), this.getIsolationScope().setContext(A, B));
    }
    configureScope(A) {
      let { scope: B, client: Q } = this.getStackTop();
      if (Q) A(B);
    }
    run(A) {
      let B = Rn1(this);
      try {
        A(this);
      } finally {
        Rn1(B);
      }
    }
    getIntegration(A) {
      let B = this.getClient();
      if (!B) return null;
      try {
        return B.getIntegration(A);
      } catch (Q) {
        return (Mn1.DEBUG_BUILD && zV.logger.warn(`Cannot retrieve integration ${A.id} from the current Hub`), null);
      }
    }
    startTransaction(A, B) {
      let Q = this._callExtensionMethod("startTransaction", A, B);
      if (Mn1.DEBUG_BUILD && !Q)
        if (!this.getClient())
          zV.logger.warn(
            "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'",
          );
        else
          zV.logger
            .warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`);
      return Q;
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(A = !1) {
      if (A) return this.endSession();
      this._sendSessionUpdate();
    }
    endSession() {
      let B = this.getStackTop().scope,
        Q = B.getSession();
      if (Q) On1.closeSession(Q);
      (this._sendSessionUpdate(), B.setSession());
    }
    startSession(A) {
      let { scope: B, client: Q } = this.getStackTop(),
        { release: Z, environment: G = RTQ.DEFAULT_ENVIRONMENT } = (Q && Q.getOptions()) || {},
        { userAgent: Y } = zV.GLOBAL_OBJ.navigator || {},
        I = On1.makeSession({ release: Z, environment: G, user: B.getUser(), ...(Y && { userAgent: Y }), ...A }),
        W = B.getSession && B.getSession();
      if (W && W.status === "ok") On1.updateSession(W, { status: "exited" });
      return (this.endSession(), B.setSession(I), I);
    }
    shouldSendDefaultPii() {
      let A = this.getClient(),
        B = A && A.getOptions();
      return Boolean(B && B.sendDefaultPii);
    }
    _sendSessionUpdate() {
      let { scope: A, client: B } = this.getStackTop(),
        Q = A.getSession();
      if (Q && B && B.captureSession) B.captureSession(Q);
    }
    _callExtensionMethod(A, ...B) {
      let Z = oh().__SENTRY__;
      if (Z && Z.extensions && typeof Z.extensions[A] === "function") return Z.extensions[A].apply(this, B);
      Mn1.DEBUG_BUILD && zV.logger.warn(`Extension method ${A} couldn't be found, doing nothing.`);
    }
  }
  function oh() {
    return ((zV.GLOBAL_OBJ.__SENTRY__ = zV.GLOBAL_OBJ.__SENTRY__ || { extensions: {}, hub: void 0 }), zV.GLOBAL_OBJ);
  }
  function Rn1(A) {
    let B = oh(),
      Q = oQ1(B);
    return (DH1(B, A), Q);
  }
  function Fi0() {
    let A = oh();
    if (A.__SENTRY__ && A.__SENTRY__.acs) {
      let B = A.__SENTRY__.acs.getCurrentHub();
      if (B) return B;
    }
    return Vi0(A);
  }
  function jTQ() {
    return Fi0().getIsolationScope();
  }
  function Vi0(A = oh()) {
    if (!Ki0(A) || oQ1(A).isOlderThan(zH1)) DH1(A, new tQ1());
    return oQ1(A);
  }
  function STQ(A, B = Vi0()) {
    if (!Ki0(A) || oQ1(A).isOlderThan(zH1)) {
      let Q = B.getClient(),
        Z = B.getScope(),
        G = B.getIsolationScope();
      DH1(A, new tQ1(Q, Z.clone(), G.clone()));
    }
  }
  function yTQ(A) {
    let B = oh();
    ((B.__SENTRY__ = B.__SENTRY__ || {}), (B.__SENTRY__.acs = A));
  }
  function kTQ(A, B = {}) {
    let Q = oh();
    if (Q.__SENTRY__ && Q.__SENTRY__.acs) return Q.__SENTRY__.acs.runWithAsyncContext(A, B);
    return A();
  }
  function Ki0(A) {
    return !!(A && A.__SENTRY__ && A.__SENTRY__.hub);
  }
  function oQ1(A) {
    return zV.getGlobalSingleton("hub", () => new tQ1(), A);
  }
  function DH1(A, B) {
    if (!A) return !1;
    let Q = (A.__SENTRY__ = A.__SENTRY__ || {});
    return ((Q.hub = B), !0);
  }
  Hi0.API_VERSION = zH1;
  Hi0.Hub = tQ1;
  Hi0.ensureHubOnCarrier = STQ;
  Hi0.getCurrentHub = Fi0;
  Hi0.getHubFromCarrier = oQ1;
  Hi0.getIsolationScope = jTQ;
  Hi0.getMainCarrier = oh;
  Hi0.makeMain = Rn1;
  Hi0.runWithAsyncContext = kTQ;
  Hi0.setAsyncContextStrategy = yTQ;
  Hi0.setHubOnCarrier = DH1;
});
var CH1 = U((Di0) => {
  Object.defineProperty(Di0, "__esModule", { value: !0 });
  var zi0 = LA(),
    lTQ = yN();
  function pTQ(A) {
    return (A || lTQ.getCurrentHub()).getScope().getTransaction();
  }
  var iTQ = zi0.extractTraceparentData;
  Di0.stripUrlQueryAndFragment = zi0.stripUrlQueryAndFragment;
  Di0.extractTraceparentData = iTQ;
  Di0.getActiveTransaction = pTQ;
});
var UH1 = U((Ui0) => {
  Object.defineProperty(Ui0, "__esModule", { value: !0 });
  var Tn1 = LA(),
    rTQ = GI(),
    oTQ = CH1(),
    Ci0 = !1;
  function tTQ() {
    if (Ci0) return;
    ((Ci0 = !0),
      Tn1.addGlobalErrorInstrumentationHandler(Pn1),
      Tn1.addGlobalUnhandledRejectionInstrumentationHandler(Pn1));
  }
  function Pn1() {
    let A = oTQ.getActiveTransaction();
    if (A)
      (rTQ.DEBUG_BUILD && Tn1.logger.log("[Tracing] Transaction: internal_error -> Global error occured"),
        A.setStatus("internal_error"));
  }
  Pn1.tag = "sentry_tracingErrorCallback";
  Ui0.registerErrorInstrumentation = tTQ;
});
var Ri = U(($i0) => {
  Object.defineProperty($i0, "__esModule", { value: !0 });
  $i0.SpanStatus = void 0;
  (function (A) {
    A.Ok = "ok";
    let Q = "deadline_exceeded";
    A.DeadlineExceeded = Q;
    let Z = "unauthenticated";
    A.Unauthenticated = Z;
    let G = "permission_denied";
    A.PermissionDenied = G;
    let Y = "not_found";
    A.NotFound = Y;
    let I = "resource_exhausted";
    A.ResourceExhausted = I;
    let W = "invalid_argument";
    A.InvalidArgument = W;
    let J = "unimplemented";
    A.Unimplemented = J;
    let X = "unavailable";
    A.Unavailable = X;
    let F = "internal_error";
    A.InternalError = F;
    let V = "unknown_error";
    A.UnknownError = V;
    let K = "cancelled";
    A.Cancelled = K;
    let H = "already_exists";
    A.AlreadyExists = H;
    let z = "failed_precondition";
    A.FailedPrecondition = z;
    let D = "aborted";
    A.Aborted = D;
    let C = "out_of_range";
    A.OutOfRange = C;
    let w = "data_loss";
    A.DataLoss = w;
  })($i0.SpanStatus || ($i0.SpanStatus = {}));
  function Sn1(A) {
    if (A < 400 && A >= 100) return "ok";
    if (A >= 400 && A < 500)
      switch (A) {
        case 401:
          return "unauthenticated";
        case 403:
          return "permission_denied";
        case 404:
          return "not_found";
        case 409:
          return "already_exists";
        case 413:
          return "failed_precondition";
        case 429:
          return "resource_exhausted";
        default:
          return "invalid_argument";
      }
    if (A >= 500 && A < 600)
      switch (A) {
        case 501:
          return "unimplemented";
        case 503:
          return "unavailable";
        case 504:
          return "deadline_exceeded";
        default:
          return "internal_error";
      }
    return "unknown_error";
  }
  var APQ = Sn1;
  function BPQ(A, B) {
    (A.setTag("http.status_code", String(B)), A.setData("http.response.status_code", B));
    let Q = Sn1(B);
    if (Q !== "unknown_error") A.setStatus(Q);
  }
  $i0.getSpanStatusFromHttpCode = Sn1;
  $i0.setHttpStatus = BPQ;
  $i0.spanStatusfromHttpCode = APQ;
});
var yn1 = U((wi0) => {
  Object.defineProperty(wi0, "__esModule", { value: !0 });
  var YPQ = LA();
  function IPQ(A, B, Q = () => {}) {
    let Z;
    try {
      Z = A();
    } catch (G) {
      throw (B(G), Q(), G);
    }
    return WPQ(Z, B, Q);
  }
  function WPQ(A, B, Q) {
    if (YPQ.isThenable(A))
      return A.then(
        (Z) => {
          return (Q(), Z);
        },
        (Z) => {
          throw (B(Z), Q(), Z);
        },
      );
    return (Q(), A);
  }
  wi0.handleCallbackErrors = IPQ;
});
var $H1 = U((qi0) => {
  Object.defineProperty(qi0, "__esModule", { value: !0 });
  var XPQ = PC();
  function FPQ(A) {
    if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) return !1;
    let B = XPQ.getClient(),
      Q = A || (B && B.getOptions());
    return !!Q && (Q.enableTracing || "tracesSampleRate" in Q || "tracesSampler" in Q);
  }
  qi0.hasTracingEnabled = FPQ;
});
var NH1 = U((Ri0) => {
  Object.defineProperty(Ri0, "__esModule", { value: !0 });
  var eQ1 = LA(),
    KPQ = GI(),
    Zk = yN(),
    wH1 = pK();
  UH1();
  Ri();
  var HPQ = rh(),
    Ti = PC(),
    kn1 = yn1(),
    Ei0 = $H1();
  function zPQ(A, B, Q = () => {}, Z = () => {}) {
    let G = Zk.getCurrentHub(),
      Y = Ti.getCurrentScope(),
      I = Y.getSpan(),
      W = EH1(A),
      J = qH1(G, { parentSpan: I, spanContext: W, forceTransaction: !1, scope: Y });
    return (
      Y.setSpan(J),
      kn1.handleCallbackErrors(
        () => B(J),
        (X) => {
          (J && J.setStatus("internal_error"), Q(X, J));
        },
        () => {
          (J && J.end(), Y.setSpan(I), Z());
        },
      )
    );
  }
  function Ni0(A, B) {
    let Q = EH1(A);
    return Zk.runWithAsyncContext(() => {
      return Ti.withScope(A.scope, (Z) => {
        let G = Zk.getCurrentHub(),
          Y = Z.getSpan(),
          W =
            A.onlyIfParent && !Y
              ? void 0
              : qH1(G, { parentSpan: Y, spanContext: Q, forceTransaction: A.forceTransaction, scope: Z });
        return kn1.handleCallbackErrors(
          () => B(W),
          () => {
            if (W) {
              let { status: J } = wH1.spanToJSON(W);
              if (!J || J === "ok") W.setStatus("internal_error");
            }
          },
          () => W && W.end(),
        );
      });
    });
  }
  var DPQ = Ni0;
  function CPQ(A, B) {
    let Q = EH1(A);
    return Zk.runWithAsyncContext(() => {
      return Ti.withScope(A.scope, (Z) => {
        let G = Zk.getCurrentHub(),
          Y = Z.getSpan(),
          W =
            A.onlyIfParent && !Y
              ? void 0
              : qH1(G, { parentSpan: Y, spanContext: Q, forceTransaction: A.forceTransaction, scope: Z });
        function J() {
          W && W.end();
        }
        return kn1.handleCallbackErrors(
          () => B(W, J),
          () => {
            if (W && W.isRecording()) {
              let { status: X } = wH1.spanToJSON(W);
              if (!X || X === "ok") W.setStatus("internal_error");
            }
          },
        );
      });
    });
  }
  function UPQ(A) {
    if (!Ei0.hasTracingEnabled()) return;
    let B = EH1(A),
      Q = Zk.getCurrentHub(),
      Z = A.scope ? A.scope.getSpan() : Li0();
    if (A.onlyIfParent && !Z) return;
    let I = (A.scope || Ti.getCurrentScope()).clone();
    return qH1(Q, { parentSpan: Z, spanContext: B, forceTransaction: A.forceTransaction, scope: I });
  }
  function Li0() {
    return Ti.getCurrentScope().getSpan();
  }
  var $PQ = ({ sentryTrace: A, baggage: B }, Q) => {
    let Z = Ti.getCurrentScope(),
      { traceparentData: G, dynamicSamplingContext: Y, propagationContext: I } = eQ1.tracingContextFromHeaders(A, B);
    if ((Z.setPropagationContext(I), KPQ.DEBUG_BUILD && G)) eQ1.logger.log(`[Tracing] Continuing trace ${G.traceId}.`);
    let W = { ...G, metadata: eQ1.dropUndefinedKeys({ dynamicSamplingContext: Y }) };
    if (!Q) return W;
    return Zk.runWithAsyncContext(() => {
      return Q(W);
    });
  };
  function qH1(A, { parentSpan: B, spanContext: Q, forceTransaction: Z, scope: G }) {
    if (!Ei0.hasTracingEnabled()) return;
    let Y = Zk.getIsolationScope(),
      I;
    if (B && !Z) I = B.startChild(Q);
    else if (B) {
      let W = HPQ.getDynamicSamplingContextFromSpan(B),
        { traceId: J, spanId: X } = B.spanContext(),
        F = wH1.spanIsSampled(B);
      I = A.startTransaction({
        traceId: J,
        parentSpanId: X,
        parentSampled: F,
        ...Q,
        metadata: { dynamicSamplingContext: W, ...Q.metadata },
      });
    } else {
      let {
        traceId: W,
        dsc: J,
        parentSpanId: X,
        sampled: F,
      } = { ...Y.getPropagationContext(), ...G.getPropagationContext() };
      I = A.startTransaction({
        traceId: W,
        parentSpanId: X,
        parentSampled: F,
        ...Q,
        metadata: { dynamicSamplingContext: J, ...Q.metadata },
      });
    }
    return (G.setSpan(I), wPQ(I, G, Y), I);
  }
  function EH1(A) {
    if (A.startTime) {
      let B = { ...A };
      return ((B.startTimestamp = wH1.spanTimeInputToSeconds(A.startTime)), delete B.startTime, B);
    }
    return A;
  }
  var Mi0 = "_sentryScope",
    Oi0 = "_sentryIsolationScope";
  function wPQ(A, B, Q) {
    if (A) (eQ1.addNonEnumerableProperty(A, Oi0, Q), eQ1.addNonEnumerableProperty(A, Mi0, B));
  }
  function qPQ(A) {
    return { scope: A[Mi0], isolationScope: A[Oi0] };
  }
  Ri0.continueTrace = $PQ;
  Ri0.getActiveSpan = Li0;
  Ri0.getCapturedScopesOnSpan = qPQ;
  Ri0.startActiveSpan = DPQ;
  Ri0.startInactiveSpan = UPQ;
  Ri0.startSpan = Ni0;
  Ri0.startSpanManual = CPQ;
  Ri0.trace = zPQ;
});
var B91 = U((Pi0) => {
  Object.defineProperty(Pi0, "__esModule", { value: !0 });
  var jPQ = LA();
  GI();
  UH1();
  Ri();
  var SPQ = NH1(),
    A91;
  function Ti0(A) {
    return A91 ? A91.get(A) : void 0;
  }
  function yPQ(A) {
    let B = Ti0(A);
    if (!B) return;
    let Q = {};
    for (let [, [Z, G]] of B) {
      if (!Q[Z]) Q[Z] = [];
      Q[Z].push(jPQ.dropUndefinedKeys(G));
    }
    return Q;
  }
  function kPQ(A, B, Q, Z, G, Y) {
    let I = SPQ.getActiveSpan();
    if (I) {
      let W = Ti0(I) || new Map(),
        J = `${A}:${B}@${Z}`,
        X = W.get(Y);
      if (X) {
        let [, F] = X;
        W.set(Y, [
          J,
          { min: Math.min(F.min, Q), max: Math.max(F.max, Q), count: (F.count += 1), sum: (F.sum += Q), tags: F.tags },
        ]);
      } else W.set(Y, [J, { min: Q, max: Q, count: 1, sum: Q, tags: G }]);
      if (!A91) A91 = new WeakMap();
      A91.set(I, W);
    }
  }
  Pi0.getMetricSummaryJsonForSpan = yPQ;
  Pi0.updateMetricSummaryOnActiveSpan = kPQ;
});
var Q91 = U((ji0) => {
  Object.defineProperty(ji0, "__esModule", { value: !0 });
  var vPQ = "sentry.source",
    bPQ = "sentry.sample_rate",
    fPQ = "sentry.op",
    hPQ = "sentry.origin",
    gPQ = "profile_id";
  ji0.SEMANTIC_ATTRIBUTE_PROFILE_ID = gPQ;
  ji0.SEMANTIC_ATTRIBUTE_SENTRY_OP = fPQ;
  ji0.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = hPQ;
  ji0.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = bPQ;
  ji0.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = vPQ;
});
var LH1 = U((_i0) => {
  Object.defineProperty(_i0, "__esModule", { value: !0 });
  var th = LA(),
    Si0 = GI(),
    pPQ = B91(),
    XT = Q91(),
    yi0 = Li(),
    Pi = pK(),
    iPQ = Ri();
  class ki0 {
    constructor(A = 1000) {
      ((this._maxlen = A), (this.spans = []));
    }
    add(A) {
      if (this.spans.length > this._maxlen) A.spanRecorder = void 0;
      else this.spans.push(A);
    }
  }
  class _n1 {
    constructor(A = {}) {
      if (
        ((this._traceId = A.traceId || th.uuid4()),
        (this._spanId = A.spanId || th.uuid4().substring(16)),
        (this._startTime = A.startTimestamp || th.timestampInSeconds()),
        (this.tags = A.tags ? { ...A.tags } : {}),
        (this.data = A.data ? { ...A.data } : {}),
        (this.instrumenter = A.instrumenter || "sentry"),
        (this._attributes = {}),
        this.setAttributes({
          [XT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: A.origin || "manual",
          [XT.SEMANTIC_ATTRIBUTE_SENTRY_OP]: A.op,
          ...A.attributes,
        }),
        (this._name = A.name || A.description),
        A.parentSpanId)
      )
        this._parentSpanId = A.parentSpanId;
      if ("sampled" in A) this._sampled = A.sampled;
      if (A.status) this._status = A.status;
      if (A.endTimestamp) this._endTime = A.endTimestamp;
      if (A.exclusiveTime !== void 0) this._exclusiveTime = A.exclusiveTime;
      this._measurements = A.measurements ? { ...A.measurements } : {};
    }
    get name() {
      return this._name || "";
    }
    set name(A) {
      this.updateName(A);
    }
    get description() {
      return this._name;
    }
    set description(A) {
      this._name = A;
    }
    get traceId() {
      return this._traceId;
    }
    set traceId(A) {
      this._traceId = A;
    }
    get spanId() {
      return this._spanId;
    }
    set spanId(A) {
      this._spanId = A;
    }
    set parentSpanId(A) {
      this._parentSpanId = A;
    }
    get parentSpanId() {
      return this._parentSpanId;
    }
    get sampled() {
      return this._sampled;
    }
    set sampled(A) {
      this._sampled = A;
    }
    get attributes() {
      return this._attributes;
    }
    set attributes(A) {
      this._attributes = A;
    }
    get startTimestamp() {
      return this._startTime;
    }
    set startTimestamp(A) {
      this._startTime = A;
    }
    get endTimestamp() {
      return this._endTime;
    }
    set endTimestamp(A) {
      this._endTime = A;
    }
    get status() {
      return this._status;
    }
    set status(A) {
      this._status = A;
    }
    get op() {
      return this._attributes[XT.SEMANTIC_ATTRIBUTE_SENTRY_OP];
    }
    set op(A) {
      this.setAttribute(XT.SEMANTIC_ATTRIBUTE_SENTRY_OP, A);
    }
    get origin() {
      return this._attributes[XT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
    }
    set origin(A) {
      this.setAttribute(XT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, A);
    }
    spanContext() {
      let { _spanId: A, _traceId: B, _sampled: Q } = this;
      return { spanId: A, traceId: B, traceFlags: Q ? Pi.TRACE_FLAG_SAMPLED : Pi.TRACE_FLAG_NONE };
    }
    startChild(A) {
      let B = new _n1({ ...A, parentSpanId: this._spanId, sampled: this._sampled, traceId: this._traceId });
      if (((B.spanRecorder = this.spanRecorder), B.spanRecorder)) B.spanRecorder.add(B);
      let Q = yi0.getRootSpan(this);
      if (((B.transaction = Q), Si0.DEBUG_BUILD && Q)) {
        let Z = (A && A.op) || "< unknown op >",
          G = Pi.spanToJSON(B).description || "< unknown name >",
          Y = Q.spanContext().spanId,
          I = `[Tracing] Starting '${Z}' span on transaction '${G}' (${Y}).`;
        (th.logger.log(I), (this._logMessage = I));
      }
      return B;
    }
    setTag(A, B) {
      return ((this.tags = { ...this.tags, [A]: B }), this);
    }
    setData(A, B) {
      return ((this.data = { ...this.data, [A]: B }), this);
    }
    setAttribute(A, B) {
      if (B === void 0) delete this._attributes[A];
      else this._attributes[A] = B;
    }
    setAttributes(A) {
      Object.keys(A).forEach((B) => this.setAttribute(B, A[B]));
    }
    setStatus(A) {
      return ((this._status = A), this);
    }
    setHttpStatus(A) {
      return (iPQ.setHttpStatus(this, A), this);
    }
    setName(A) {
      this.updateName(A);
    }
    updateName(A) {
      return ((this._name = A), this);
    }
    isSuccess() {
      return this._status === "ok";
    }
    finish(A) {
      return this.end(A);
    }
    end(A) {
      if (this._endTime) return;
      let B = yi0.getRootSpan(this);
      if (Si0.DEBUG_BUILD && B && B.spanContext().spanId !== this._spanId) {
        let Q = this._logMessage;
        if (Q) th.logger.log(Q.replace("Starting", "Finishing"));
      }
      this._endTime = Pi.spanTimeInputToSeconds(A);
    }
    toTraceparent() {
      return Pi.spanToTraceHeader(this);
    }
    toContext() {
      return th.dropUndefinedKeys({
        data: this._getData(),
        description: this._name,
        endTimestamp: this._endTime,
        op: this.op,
        parentSpanId: this._parentSpanId,
        sampled: this._sampled,
        spanId: this._spanId,
        startTimestamp: this._startTime,
        status: this._status,
        tags: this.tags,
        traceId: this._traceId,
      });
    }
    updateWithContext(A) {
      return (
        (this.data = A.data || {}),
        (this._name = A.name || A.description),
        (this._endTime = A.endTimestamp),
        (this.op = A.op),
        (this._parentSpanId = A.parentSpanId),
        (this._sampled = A.sampled),
        (this._spanId = A.spanId || this._spanId),
        (this._startTime = A.startTimestamp || this._startTime),
        (this._status = A.status),
        (this.tags = A.tags || {}),
        (this._traceId = A.traceId || this._traceId),
        this
      );
    }
    getTraceContext() {
      return Pi.spanToTraceContext(this);
    }
    getSpanJSON() {
      return th.dropUndefinedKeys({
        data: this._getData(),
        description: this._name,
        op: this._attributes[XT.SEMANTIC_ATTRIBUTE_SENTRY_OP],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: this._status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[XT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
        _metrics_summary: pPQ.getMetricSummaryJsonForSpan(this),
        profile_id: this._attributes[XT.SEMANTIC_ATTRIBUTE_PROFILE_ID],
        exclusive_time: this._exclusiveTime,
        measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0,
      });
    }
    isRecording() {
      return !this._endTime && !!this._sampled;
    }
    toJSON() {
      return this.getSpanJSON();
    }
    _getData() {
      let { data: A, _attributes: B } = this,
        Q = Object.keys(A).length > 0,
        Z = Object.keys(B).length > 0;
      if (!Q && !Z) return;
      if (Q && Z) return { ...A, ...B };
      return Q ? A : B;
    }
  }
  _i0.Span = _n1;
  _i0.SpanRecorder = ki0;
});
var RH1 = U((fi0) => {
  Object.defineProperty(fi0, "__esModule", { value: !0 });
  var ji = LA(),
    MH1 = GI(),
    sPQ = yN(),
    rPQ = B91(),
    Z91 = Q91(),
    OH1 = pK(),
    xi0 = rh(),
    vi0 = LH1(),
    oPQ = NH1();
  class bi0 extends vi0.Span {
    constructor(A, B) {
      super(A);
      ((this._contexts = {}),
        (this._hub = B || sPQ.getCurrentHub()),
        (this._name = A.name || ""),
        (this._metadata = { ...A.metadata }),
        (this._trimEnd = A.trimEnd),
        (this.transaction = this));
      let Q = this._metadata.dynamicSamplingContext;
      if (Q) this._frozenDynamicSamplingContext = { ...Q };
    }
    get name() {
      return this._name;
    }
    set name(A) {
      this.setName(A);
    }
    get metadata() {
      return {
        source: "custom",
        spanMetadata: {},
        ...this._metadata,
        ...(this._attributes[Z91.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && {
          source: this._attributes[Z91.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
        }),
        ...(this._attributes[Z91.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] && {
          sampleRate: this._attributes[Z91.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE],
        }),
      };
    }
    set metadata(A) {
      this._metadata = A;
    }
    setName(A, B = "custom") {
      ((this._name = A), this.setAttribute(Z91.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, B));
    }
    updateName(A) {
      return ((this._name = A), this);
    }
    initSpanRecorder(A = 1000) {
      if (!this.spanRecorder) this.spanRecorder = new vi0.SpanRecorder(A);
      this.spanRecorder.add(this);
    }
    setContext(A, B) {
      if (B === null) delete this._contexts[A];
      else this._contexts[A] = B;
    }
    setMeasurement(A, B, Q = "") {
      this._measurements[A] = { value: B, unit: Q };
    }
    setMetadata(A) {
      this._metadata = { ...this._metadata, ...A };
    }
    end(A) {
      let B = OH1.spanTimeInputToSeconds(A),
        Q = this._finishTransaction(B);
      if (!Q) return;
      return this._hub.captureEvent(Q);
    }
    toContext() {
      let A = super.toContext();
      return ji.dropUndefinedKeys({ ...A, name: this._name, trimEnd: this._trimEnd });
    }
    updateWithContext(A) {
      return (super.updateWithContext(A), (this._name = A.name || ""), (this._trimEnd = A.trimEnd), this);
    }
    getDynamicSamplingContext() {
      return xi0.getDynamicSamplingContextFromSpan(this);
    }
    setHub(A) {
      this._hub = A;
    }
    getProfileId() {
      if (this._contexts !== void 0 && this._contexts.profile !== void 0) return this._contexts.profile.profile_id;
      return;
    }
    _finishTransaction(A) {
      if (this._endTime !== void 0) return;
      if (!this._name)
        (MH1.DEBUG_BUILD && ji.logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
          (this._name = "<unlabeled transaction>"));
      super.end(A);
      let B = this._hub.getClient();
      if (B && B.emit) B.emit("finishTransaction", this);
      if (this._sampled !== !0) {
        if (
          (MH1.DEBUG_BUILD &&
            ji.logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
          B)
        )
          B.recordDroppedEvent("sample_rate", "transaction");
        return;
      }
      let Q = this.spanRecorder ? this.spanRecorder.spans.filter((X) => X !== this && OH1.spanToJSON(X).timestamp) : [];
      if (this._trimEnd && Q.length > 0) {
        let X = Q.map((F) => OH1.spanToJSON(F).timestamp).filter(Boolean);
        this._endTime = X.reduce((F, V) => {
          return F > V ? F : V;
        });
      }
      let { scope: Z, isolationScope: G } = oPQ.getCapturedScopesOnSpan(this),
        { metadata: Y } = this,
        { source: I } = Y,
        W = {
          contexts: { ...this._contexts, trace: OH1.spanToTraceContext(this) },
          spans: Q,
          start_timestamp: this._startTime,
          tags: this.tags,
          timestamp: this._endTime,
          transaction: this._name,
          type: "transaction",
          sdkProcessingMetadata: {
            ...Y,
            capturedSpanScope: Z,
            capturedSpanIsolationScope: G,
            ...ji.dropUndefinedKeys({ dynamicSamplingContext: xi0.getDynamicSamplingContextFromSpan(this) }),
          },
          _metrics_summary: rPQ.getMetricSummaryJsonForSpan(this),
          ...(I && { transaction_info: { source: I } }),
        };
      if (Object.keys(this._measurements).length > 0)
        (MH1.DEBUG_BUILD &&
          ji.logger.log(
            "[Measurements] Adding measurements to transaction",
            JSON.stringify(this._measurements, void 0, 2),
          ),
          (W.measurements = this._measurements));
      return (MH1.DEBUG_BUILD && ji.logger.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), W);
    }
  }
  fi0.Transaction = bi0;
});
var vn1 = U((gi0) => {
  Object.defineProperty(gi0, "__esModule", { value: !0 });
  var WF = LA(),
    iK = GI(),
    TH1 = pK(),
    ePQ = LH1(),
    AjQ = RH1(),
    PH1 = { idleTimeout: 1000, finalTimeout: 30000, heartbeatInterval: 5000 },
    BjQ = "finishReason",
    Si = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
  class xn1 extends ePQ.SpanRecorder {
    constructor(A, B, Q, Z) {
      super(Z);
      ((this._pushActivity = A), (this._popActivity = B), (this.transactionSpanId = Q));
    }
    add(A) {
      if (A.spanContext().spanId !== this.transactionSpanId) {
        let B = A.end;
        if (
          ((A.end = (...Q) => {
            return (this._popActivity(A.spanContext().spanId), B.apply(A, Q));
          }),
          TH1.spanToJSON(A).timestamp === void 0)
        )
          this._pushActivity(A.spanContext().spanId);
      }
      super.add(A);
    }
  }
  class hi0 extends AjQ.Transaction {
    constructor(A, B, Q = PH1.idleTimeout, Z = PH1.finalTimeout, G = PH1.heartbeatInterval, Y = !1, I = !1) {
      super(A, B);
      if (
        ((this._idleHub = B),
        (this._idleTimeout = Q),
        (this._finalTimeout = Z),
        (this._heartbeatInterval = G),
        (this._onScope = Y),
        (this.activities = {}),
        (this._heartbeatCounter = 0),
        (this._finished = !1),
        (this._idleTimeoutCanceledPermanently = !1),
        (this._beforeFinishCallbacks = []),
        (this._finishReason = Si[4]),
        (this._autoFinishAllowed = !I),
        Y)
      )
        (iK.DEBUG_BUILD && WF.logger.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`),
          B.getScope().setSpan(this));
      if (!I) this._restartIdleTimeout();
      setTimeout(() => {
        if (!this._finished) (this.setStatus("deadline_exceeded"), (this._finishReason = Si[3]), this.end());
      }, this._finalTimeout);
    }
    end(A) {
      let B = TH1.spanTimeInputToSeconds(A);
      if (((this._finished = !0), (this.activities = {}), this.op === "ui.action.click"))
        this.setAttribute(BjQ, this._finishReason);
      if (this.spanRecorder) {
        iK.DEBUG_BUILD &&
          WF.logger.log("[Tracing] finishing IdleTransaction", new Date(B * 1000).toISOString(), this.op);
        for (let Q of this._beforeFinishCallbacks) Q(this, B);
        ((this.spanRecorder.spans = this.spanRecorder.spans.filter((Q) => {
          if (Q.spanContext().spanId === this.spanContext().spanId) return !0;
          if (!TH1.spanToJSON(Q).timestamp)
            (Q.setStatus("cancelled"),
              Q.end(B),
              iK.DEBUG_BUILD &&
                WF.logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(Q, void 0, 2)));
          let { start_timestamp: Z, timestamp: G } = TH1.spanToJSON(Q),
            Y = Z && Z < B,
            I = (this._finalTimeout + this._idleTimeout) / 1000,
            W = G && Z && G - Z < I;
          if (iK.DEBUG_BUILD) {
            let J = JSON.stringify(Q, void 0, 2);
            if (!Y) WF.logger.log("[Tracing] discarding Span since it happened after Transaction was finished", J);
            else if (!W)
              WF.logger.log("[Tracing] discarding Span since it finished after Transaction final timeout", J);
          }
          return Y && W;
        })),
          iK.DEBUG_BUILD && WF.logger.log("[Tracing] flushing IdleTransaction"));
      } else iK.DEBUG_BUILD && WF.logger.log("[Tracing] No active IdleTransaction");
      if (this._onScope) {
        let Q = this._idleHub.getScope();
        if (Q.getTransaction() === this) Q.setSpan(void 0);
      }
      return super.end(A);
    }
    registerBeforeFinishCallback(A) {
      this._beforeFinishCallbacks.push(A);
    }
    initSpanRecorder(A) {
      if (!this.spanRecorder) {
        let B = (Z) => {
            if (this._finished) return;
            this._pushActivity(Z);
          },
          Q = (Z) => {
            if (this._finished) return;
            this._popActivity(Z);
          };
        ((this.spanRecorder = new xn1(B, Q, this.spanContext().spanId, A)),
          iK.DEBUG_BUILD && WF.logger.log("Starting heartbeat"),
          this._pingHeartbeat());
      }
      this.spanRecorder.add(this);
    }
    cancelIdleTimeout(A, { restartOnChildSpanChange: B } = { restartOnChildSpanChange: !0 }) {
      if (((this._idleTimeoutCanceledPermanently = B === !1), this._idleTimeoutID)) {
        if (
          (clearTimeout(this._idleTimeoutID),
          (this._idleTimeoutID = void 0),
          Object.keys(this.activities).length === 0 && this._idleTimeoutCanceledPermanently)
        )
          ((this._finishReason = Si[5]), this.end(A));
      }
    }
    setFinishReason(A) {
      this._finishReason = A;
    }
    sendAutoFinishSignal() {
      if (!this._autoFinishAllowed)
        (iK.DEBUG_BUILD && WF.logger.log("[Tracing] Received finish signal for idle transaction."),
          this._restartIdleTimeout(),
          (this._autoFinishAllowed = !0));
    }
    _restartIdleTimeout(A) {
      (this.cancelIdleTimeout(),
        (this._idleTimeoutID = setTimeout(() => {
          if (!this._finished && Object.keys(this.activities).length === 0) ((this._finishReason = Si[1]), this.end(A));
        }, this._idleTimeout)));
    }
    _pushActivity(A) {
      (this.cancelIdleTimeout(void 0, { restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently }),
        iK.DEBUG_BUILD && WF.logger.log(`[Tracing] pushActivity: ${A}`),
        (this.activities[A] = !0),
        iK.DEBUG_BUILD && WF.logger.log("[Tracing] new activities count", Object.keys(this.activities).length));
    }
    _popActivity(A) {
      if (this.activities[A])
        (iK.DEBUG_BUILD && WF.logger.log(`[Tracing] popActivity ${A}`),
          delete this.activities[A],
          iK.DEBUG_BUILD && WF.logger.log("[Tracing] new activities count", Object.keys(this.activities).length));
      if (Object.keys(this.activities).length === 0) {
        let B = WF.timestampInSeconds();
        if (this._idleTimeoutCanceledPermanently) {
          if (this._autoFinishAllowed) ((this._finishReason = Si[5]), this.end(B));
        } else this._restartIdleTimeout(B + this._idleTimeout / 1000);
      }
    }
    _beat() {
      if (this._finished) return;
      let A = Object.keys(this.activities).join("");
      if (A === this._prevHeartbeatString) this._heartbeatCounter++;
      else this._heartbeatCounter = 1;
      if (((this._prevHeartbeatString = A), this._heartbeatCounter >= 3)) {
        if (this._autoFinishAllowed)
          (iK.DEBUG_BUILD && WF.logger.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
            this.setStatus("deadline_exceeded"),
            (this._finishReason = Si[0]),
            this.end());
      } else this._pingHeartbeat();
    }
    _pingHeartbeat() {
      (iK.DEBUG_BUILD && WF.logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
        setTimeout(() => {
          this._beat();
        }, this._heartbeatInterval));
    }
  }
  gi0.IdleTransaction = hi0;
  gi0.IdleTransactionSpanRecorder = xn1;
  gi0.TRACING_DEFAULTS = PH1;
});
var bn1 = U((mi0) => {
  Object.defineProperty(mi0, "__esModule", { value: !0 });
  var eh = LA(),
    yi = GI(),
    jH1 = Q91(),
    YjQ = $H1(),
    IjQ = pK();
  function WjQ(A, B, Q) {
    if (!YjQ.hasTracingEnabled(B)) return ((A.sampled = !1), A);
    if (A.sampled !== void 0) return (A.setAttribute(jH1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(A.sampled)), A);
    let Z;
    if (typeof B.tracesSampler === "function")
      ((Z = B.tracesSampler(Q)), A.setAttribute(jH1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(Z)));
    else if (Q.parentSampled !== void 0) Z = Q.parentSampled;
    else if (typeof B.tracesSampleRate !== "undefined")
      ((Z = B.tracesSampleRate), A.setAttribute(jH1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(Z)));
    else ((Z = 1), A.setAttribute(jH1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Z));
    if (!ui0(Z))
      return (
        yi.DEBUG_BUILD && eh.logger.warn("[Tracing] Discarding transaction because of invalid sample rate."),
        (A.sampled = !1),
        A
      );
    if (!Z)
      return (
        yi.DEBUG_BUILD &&
          eh.logger.log(
            `[Tracing] Discarding transaction because ${typeof B.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
          ),
        (A.sampled = !1),
        A
      );
    if (((A.sampled = Math.random() < Z), !A.sampled))
      return (
        yi.DEBUG_BUILD &&
          eh.logger.log(
            `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(Z)})`,
          ),
        A
      );
    return (
      yi.DEBUG_BUILD && eh.logger.log(`[Tracing] starting ${A.op} transaction - ${IjQ.spanToJSON(A).description}`),
      A
    );
  }
  function ui0(A) {
    if (eh.isNaN(A) || !(typeof A === "number" || typeof A === "boolean"))
      return (
        yi.DEBUG_BUILD &&
          eh.logger.warn(
            `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(A)} of type ${JSON.stringify(typeof A)}.`,
          ),
        !1
      );
    if (A < 0 || A > 1)
      return (
        yi.DEBUG_BUILD &&
          eh.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${A}.`),
        !1
      );
    return !0;
  }
  mi0.isValidSampleRate = ui0;
  mi0.sampleTransaction = WjQ;
});
var fn1 = U((ci0) => {
  Object.defineProperty(ci0, "__esModule", { value: !0 });
  var FjQ = LA(),
    VjQ = GI(),
    KjQ = yN(),
    HjQ = pK(),
    zjQ = UH1(),
    DjQ = vn1(),
    di0 = bn1(),
    CjQ = RH1();
  function UjQ() {
    let B = this.getScope().getSpan();
    return B ? { "sentry-trace": HjQ.spanToTraceHeader(B) } : {};
  }
  function $jQ(A, B) {
    let Q = this.getClient(),
      Z = (Q && Q.getOptions()) || {},
      G = Z.instrumenter || "sentry",
      Y = A.instrumenter || "sentry";
    if (G !== Y)
      (VjQ.DEBUG_BUILD &&
        FjQ.logger
          .error(`A transaction was started with instrumenter=\`${Y}\`, but the SDK is configured with the \`${G}\` instrumenter.
The transaction will not be sampled. Please use the ${G} instrumentation to start transactions.`),
        (A.sampled = !1));
    let I = new CjQ.Transaction(A, this);
    if (
      ((I = di0.sampleTransaction(I, Z, {
        name: A.name,
        parentSampled: A.parentSampled,
        transactionContext: A,
        attributes: { ...A.data, ...A.attributes },
        ...B,
      })),
      I.isRecording())
    )
      I.initSpanRecorder(Z._experiments && Z._experiments.maxSpans);
    if (Q && Q.emit) Q.emit("startTransaction", I);
    return I;
  }
  function wjQ(A, B, Q, Z, G, Y, I, W = !1) {
    let J = A.getClient(),
      X = (J && J.getOptions()) || {},
      F = new DjQ.IdleTransaction(B, A, Q, Z, I, G, W);
    if (
      ((F = di0.sampleTransaction(F, X, {
        name: B.name,
        parentSampled: B.parentSampled,
        transactionContext: B,
        attributes: { ...B.data, ...B.attributes },
        ...Y,
      })),
      F.isRecording())
    )
      F.initSpanRecorder(X._experiments && X._experiments.maxSpans);
    if (J && J.emit) J.emit("startTransaction", F);
    return F;
  }
  function qjQ() {
    let A = KjQ.getMainCarrier();
    if (!A.__SENTRY__) return;
    if (((A.__SENTRY__.extensions = A.__SENTRY__.extensions || {}), !A.__SENTRY__.extensions.startTransaction))
      A.__SENTRY__.extensions.startTransaction = $jQ;
    if (!A.__SENTRY__.extensions.traceHeaders) A.__SENTRY__.extensions.traceHeaders = UjQ;
    zjQ.registerErrorInstrumentation();
  }
  ci0.addTracingExtensions = qjQ;
  ci0.startIdleTransaction = wjQ;
});
var pi0 = U((li0) => {
  Object.defineProperty(li0, "__esModule", { value: !0 });
  var LjQ = CH1();
  function MjQ(A, B, Q) {
    let Z = LjQ.getActiveTransaction();
    if (Z) Z.setMeasurement(A, B, Q);
  }
  li0.setMeasurement = MjQ;
});
var hn1 = U((ii0) => {
  Object.defineProperty(ii0, "__esModule", { value: !0 });
  var ki = LA();
  function RjQ(A, B) {
    if (!B) return A;
    return (
      (A.sdk = A.sdk || {}),
      (A.sdk.name = A.sdk.name || B.name),
      (A.sdk.version = A.sdk.version || B.version),
      (A.sdk.integrations = [...(A.sdk.integrations || []), ...(B.integrations || [])]),
      (A.sdk.packages = [...(A.sdk.packages || []), ...(B.packages || [])]),
      A
    );
  }
  function TjQ(A, B, Q, Z) {
    let G = ki.getSdkMetadataForEnvelopeHeader(Q),
      Y = { sent_at: new Date().toISOString(), ...(G && { sdk: G }), ...(!!Z && B && { dsn: ki.dsnToString(B) }) },
      I = "aggregates" in A ? [{ type: "sessions" }, A] : [{ type: "session" }, A.toJSON()];
    return ki.createEnvelope(Y, [I]);
  }
  function PjQ(A, B, Q, Z) {
    let G = ki.getSdkMetadataForEnvelopeHeader(Q),
      Y = A.type && A.type !== "replay_event" ? A.type : "event";
    RjQ(A, Q && Q.sdk);
    let I = ki.createEventEnvelopeHeaders(A, G, Z, B);
    delete A.sdkProcessingMetadata;
    let W = [{ type: Y }, A];
    return ki.createEnvelope(I, [W]);
  }
  ii0.createEventEnvelope = PjQ;
  ii0.createSessionEnvelope = TjQ;
});
var gn1 = U((ai0) => {
  Object.defineProperty(ai0, "__esModule", { value: !0 });
  var yjQ = LA(),
    kjQ = PC();
  class ni0 {
    constructor(A, B) {
      if (
        ((this._client = A),
        (this.flushTimeout = 60),
        (this._pendingAggregates = {}),
        (this._isEnabled = !0),
        (this._intervalId = setInterval(() => this.flush(), this.flushTimeout * 1000)),
        this._intervalId.unref)
      )
        this._intervalId.unref();
      this._sessionAttrs = B;
    }
    flush() {
      let A = this.getSessionAggregates();
      if (A.aggregates.length === 0) return;
      ((this._pendingAggregates = {}), this._client.sendSession(A));
    }
    getSessionAggregates() {
      let A = Object.keys(this._pendingAggregates).map((Q) => {
          return this._pendingAggregates[parseInt(Q)];
        }),
        B = { attrs: this._sessionAttrs, aggregates: A };
      return yjQ.dropUndefinedKeys(B);
    }
    close() {
      (clearInterval(this._intervalId), (this._isEnabled = !1), this.flush());
    }
    incrementSessionStatusCount() {
      if (!this._isEnabled) return;
      let A = kjQ.getCurrentScope(),
        B = A.getRequestSession();
      if (B && B.status) (this._incrementSessionStatusCount(B.status, new Date()), A.setRequestSession(void 0));
    }
    _incrementSessionStatusCount(A, B) {
      let Q = new Date(B).setSeconds(0, 0);
      this._pendingAggregates[Q] = this._pendingAggregates[Q] || {};
      let Z = this._pendingAggregates[Q];
      if (!Z.started) Z.started = new Date(Q).toISOString();
      switch (A) {
        case "errored":
          return ((Z.errored = (Z.errored || 0) + 1), Z.errored);
        case "ok":
          return ((Z.exited = (Z.exited || 0) + 1), Z.exited);
        default:
          return ((Z.crashed = (Z.crashed || 0) + 1), Z.crashed);
      }
    }
  }
  ai0.SessionFlusher = ni0;
});
var SH1 = U((ri0) => {
  Object.defineProperty(ri0, "__esModule", { value: !0 });
  var un1 = LA(),
    xjQ = "7";
  function si0(A) {
    let B = A.protocol ? `${A.protocol}:` : "",
      Q = A.port ? `:${A.port}` : "";
    return `${B}//${A.host}${Q}${A.path ? `/${A.path}` : ""}/api/`;
  }
  function vjQ(A) {
    return `${si0(A)}${A.projectId}/envelope/`;
  }
  function bjQ(A, B) {
    return un1.urlEncode({
      sentry_key: A.publicKey,
      sentry_version: xjQ,
      ...(B && { sentry_client: `${B.name}/${B.version}` }),
    });
  }
  function fjQ(A, B = {}) {
    let Q = typeof B === "string" ? B : B.tunnel,
      Z = typeof B === "string" || !B._metadata ? void 0 : B._metadata.sdk;
    return Q ? Q : `${vjQ(A)}?${bjQ(A, Z)}`;
  }
  function hjQ(A, B) {
    let Q = un1.makeDsn(A);
    if (!Q) return "";
    let Z = `${si0(Q)}embed/error-page/`,
      G = `dsn=${un1.dsnToString(Q)}`;
    for (let Y in B) {
      if (Y === "dsn") continue;
      if (Y === "onClose") continue;
      if (Y === "user") {
        let I = B.user;
        if (!I) continue;
        if (I.name) G += `&name=${encodeURIComponent(I.name)}`;
        if (I.email) G += `&email=${encodeURIComponent(I.email)}`;
      } else G += `&${encodeURIComponent(Y)}=${encodeURIComponent(B[Y])}`;
    }
    return `${Z}?${G}`;
  }
  ri0.getEnvelopeEndpointWithUrlEncodedAuth = fjQ;
  ri0.getReportDialogEndpoint = hjQ;
});
var FT = U((ti0) => {
  Object.defineProperty(ti0, "__esModule", { value: !0 });
  var yH1 = LA(),
    mn1 = GI(),
    mjQ = nQ1(),
    djQ = PC(),
    cjQ = yN(),
    dn1 = [];
  function ljQ(A) {
    let B = {};
    return (
      A.forEach((Q) => {
        let { name: Z } = Q,
          G = B[Z];
        if (G && !G.isDefaultInstance && Q.isDefaultInstance) return;
        B[Z] = Q;
      }),
      Object.keys(B).map((Q) => B[Q])
    );
  }
  function pjQ(A) {
    let B = A.defaultIntegrations || [],
      Q = A.integrations;
    B.forEach((I) => {
      I.isDefaultInstance = !0;
    });
    let Z;
    if (Array.isArray(Q)) Z = [...B, ...Q];
    else if (typeof Q === "function") Z = yH1.arrayify(Q(B));
    else Z = B;
    let G = ljQ(Z),
      Y = sjQ(G, (I) => I.name === "Debug");
    if (Y !== -1) {
      let [I] = G.splice(Y, 1);
      G.push(I);
    }
    return G;
  }
  function ijQ(A, B) {
    let Q = {};
    return (
      B.forEach((Z) => {
        if (Z) oi0(A, Z, Q);
      }),
      Q
    );
  }
  function njQ(A, B) {
    for (let Q of B) if (Q && Q.afterAllSetup) Q.afterAllSetup(A);
  }
  function oi0(A, B, Q) {
    if (Q[B.name]) {
      mn1.DEBUG_BUILD && yH1.logger.log(`Integration skipped because it was already installed: ${B.name}`);
      return;
    }
    if (((Q[B.name] = B), dn1.indexOf(B.name) === -1))
      (B.setupOnce(mjQ.addGlobalEventProcessor, cjQ.getCurrentHub), dn1.push(B.name));
    if (B.setup && typeof B.setup === "function") B.setup(A);
    if (A.on && typeof B.preprocessEvent === "function") {
      let Z = B.preprocessEvent.bind(B);
      A.on("preprocessEvent", (G, Y) => Z(G, Y, A));
    }
    if (A.addEventProcessor && typeof B.processEvent === "function") {
      let Z = B.processEvent.bind(B),
        G = Object.assign((Y, I) => Z(Y, I, A), { id: B.name });
      A.addEventProcessor(G);
    }
    mn1.DEBUG_BUILD && yH1.logger.log(`Integration installed: ${B.name}`);
  }
  function ajQ(A) {
    let B = djQ.getClient();
    if (!B || !B.addIntegration) {
      mn1.DEBUG_BUILD && yH1.logger.warn(`Cannot add integration "${A.name}" because no SDK Client is available.`);
      return;
    }
    B.addIntegration(A);
  }
  function sjQ(A, B) {
    for (let Q = 0; Q < A.length; Q++) if (B(A[Q]) === !0) return Q;
    return -1;
  }
  function rjQ(A, B) {
    return Object.assign(
      function Q(...Z) {
        return B(...Z);
      },
      { id: A },
    );
  }
  function ojQ(A) {
    return A;
  }
  ti0.addIntegration = ajQ;
  ti0.afterSetupIntegrations = njQ;
  ti0.convertIntegrationFnToClass = rjQ;
  ti0.defineIntegration = ojQ;
  ti0.getIntegrationsToSetup = pjQ;
  ti0.installedIntegrations = dn1;
  ti0.setupIntegration = oi0;
  ti0.setupIntegrations = ijQ;
});
var G91 = U((ei0) => {
  Object.defineProperty(ei0, "__esModule", { value: !0 });
  var ISQ = LA();
  function WSQ(A, B, Q, Z) {
    let G = Object.entries(ISQ.dropUndefinedKeys(Z)).sort((Y, I) => Y[0].localeCompare(I[0]));
    return `${A}${B}${Q}${G}`;
  }
  function JSQ(A) {
    let B = 0;
    for (let Q = 0; Q < A.length; Q++) {
      let Z = A.charCodeAt(Q);
      ((B = (B << 5) - B + Z), (B &= B));
    }
    return B >>> 0;
  }
  function XSQ(A) {
    let B = "";
    for (let Q of A) {
      let Z = Object.entries(Q.tags),
        G = Z.length > 0 ? `|#${Z.map(([Y, I]) => `${Y}:${I}`).join(",")}` : "";
      B += `${Q.name}@${Q.unit}:${Q.metric}|${Q.metricType}${G}|T${Q.timestamp}
`;
    }
    return B;
  }
  function FSQ(A) {
    return A.replace(/[^\w]+/gi, "_");
  }
  function VSQ(A) {
    return A.replace(/[^\w\-.]+/gi, "_");
  }
  function KSQ(A) {
    return A.replace(/[^\w\-./]+/gi, "");
  }
  var HSQ = [
    [
      `
`,
      "\\n",
    ],
    ["\r", "\\r"],
    ["\t", "\\t"],
    ["\\", "\\\\"],
    ["|", "\\u{7c}"],
    [",", "\\u{2c}"],
  ];
  function zSQ(A) {
    for (let [B, Q] of HSQ) if (A === B) return Q;
    return A;
  }
  function DSQ(A) {
    return [...A].reduce((B, Q) => B + zSQ(Q), "");
  }
  function CSQ(A) {
    let B = {};
    for (let Q in A)
      if (Object.prototype.hasOwnProperty.call(A, Q)) {
        let Z = KSQ(Q);
        B[Z] = DSQ(String(A[Q]));
      }
    return B;
  }
  ei0.getBucketKey = WSQ;
  ei0.sanitizeMetricKey = VSQ;
  ei0.sanitizeTags = CSQ;
  ei0.sanitizeUnit = FSQ;
  ei0.serializeMetricBuckets = XSQ;
  ei0.simpleHash = JSQ;
});
var Qn0 = U((Bn0) => {
  Object.defineProperty(Bn0, "__esModule", { value: !0 });
  var An0 = LA(),
    LSQ = G91();
  function MSQ(A, B, Q, Z) {
    let G = { sent_at: new Date().toISOString() };
    if (Q && Q.sdk) G.sdk = { name: Q.sdk.name, version: Q.sdk.version };
    if (!!Z && B) G.dsn = An0.dsnToString(B);
    let Y = OSQ(A);
    return An0.createEnvelope(G, [Y]);
  }
  function OSQ(A) {
    let B = LSQ.serializeMetricBuckets(A);
    return [{ type: "statsd", length: B.length }, B];
  }
  Bn0.createMetricEnvelope = MSQ;
});
var cn1 = U((Xn0) => {
  Object.defineProperty(Xn0, "__esModule", { value: !0 });
  var a5 = LA(),
    TSQ = SH1(),
    _N = GI(),
    Zn0 = hn1(),
    PSQ = PC(),
    jSQ = yN(),
    kH1 = FT(),
    SSQ = Qn0(),
    Gn0 = Ni(),
    ySQ = rh(),
    kSQ = JH1(),
    Yn0 = "Not capturing exception because it's already been captured.";
  class In0 {
    constructor(A) {
      if (
        ((this._options = A),
        (this._integrations = {}),
        (this._integrationsInitialized = !1),
        (this._numProcessing = 0),
        (this._outcomes = {}),
        (this._hooks = {}),
        (this._eventProcessors = []),
        A.dsn)
      )
        this._dsn = a5.makeDsn(A.dsn);
      else _N.DEBUG_BUILD && a5.logger.warn("No DSN provided, client will not send events.");
      if (this._dsn) {
        let B = TSQ.getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, A);
        this._transport = A.transport({
          tunnel: this._options.tunnel,
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...A.transportOptions,
          url: B,
        });
      }
    }
    captureException(A, B, Q) {
      if (a5.checkOrSetAlreadyCaught(A)) {
        _N.DEBUG_BUILD && a5.logger.log(Yn0);
        return;
      }
      let Z = B && B.event_id;
      return (
        this._process(
          this.eventFromException(A, B)
            .then((G) => this._captureEvent(G, B, Q))
            .then((G) => {
              Z = G;
            }),
        ),
        Z
      );
    }
    captureMessage(A, B, Q, Z) {
      let G = Q && Q.event_id,
        Y = a5.isParameterizedString(A) ? A : String(A),
        I = a5.isPrimitive(A) ? this.eventFromMessage(Y, B, Q) : this.eventFromException(A, Q);
      return (
        this._process(
          I.then((W) => this._captureEvent(W, Q, Z)).then((W) => {
            G = W;
          }),
        ),
        G
      );
    }
    captureEvent(A, B, Q) {
      if (B && B.originalException && a5.checkOrSetAlreadyCaught(B.originalException)) {
        _N.DEBUG_BUILD && a5.logger.log(Yn0);
        return;
      }
      let Z = B && B.event_id,
        Y = (A.sdkProcessingMetadata || {}).capturedSpanScope;
      return (
        this._process(
          this._captureEvent(A, B, Y || Q).then((I) => {
            Z = I;
          }),
        ),
        Z
      );
    }
    captureSession(A) {
      if (typeof A.release !== "string")
        _N.DEBUG_BUILD && a5.logger.warn("Discarded session because of missing or non-string release");
      else (this.sendSession(A), Gn0.updateSession(A, { init: !1 }));
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    flush(A) {
      let B = this._transport;
      if (B) {
        if (this.metricsAggregator) this.metricsAggregator.flush();
        return this._isClientDoneProcessing(A).then((Q) => {
          return B.flush(A).then((Z) => Q && Z);
        });
      } else return a5.resolvedSyncPromise(!0);
    }
    close(A) {
      return this.flush(A).then((B) => {
        if (((this.getOptions().enabled = !1), this.metricsAggregator)) this.metricsAggregator.close();
        return B;
      });
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(A) {
      this._eventProcessors.push(A);
    }
    setupIntegrations(A) {
      if ((A && !this._integrationsInitialized) || (this._isEnabled() && !this._integrationsInitialized))
        this._setupIntegrations();
    }
    init() {
      if (this._isEnabled()) this._setupIntegrations();
    }
    getIntegrationById(A) {
      return this.getIntegrationByName(A);
    }
    getIntegrationByName(A) {
      return this._integrations[A];
    }
    getIntegration(A) {
      try {
        return this._integrations[A.id] || null;
      } catch (B) {
        return (_N.DEBUG_BUILD && a5.logger.warn(`Cannot retrieve integration ${A.id} from the current Client`), null);
      }
    }
    addIntegration(A) {
      let B = this._integrations[A.name];
      if ((kH1.setupIntegration(this, A, this._integrations), !B)) kH1.afterSetupIntegrations(this, [A]);
    }
    sendEvent(A, B = {}) {
      this.emit("beforeSendEvent", A, B);
      let Q = Zn0.createEventEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
      for (let G of B.attachments || [])
        Q = a5.addItemToEnvelope(
          Q,
          a5.createAttachmentEnvelopeItem(
            G,
            this._options.transportOptions && this._options.transportOptions.textEncoder,
          ),
        );
      let Z = this._sendEnvelope(Q);
      if (Z) Z.then((G) => this.emit("afterSendEvent", A, G), null);
    }
    sendSession(A) {
      let B = Zn0.createSessionEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(B);
    }
    recordDroppedEvent(A, B, Q) {
      if (this._options.sendClientReports) {
        let Z = typeof Q === "number" ? Q : 1,
          G = `${A}:${B}`;
        (_N.DEBUG_BUILD && a5.logger.log(`Recording outcome: "${G}"${Z > 1 ? ` (${Z} times)` : ""}`),
          (this._outcomes[G] = (this._outcomes[G] || 0) + Z));
      }
    }
    captureAggregateMetrics(A) {
      _N.DEBUG_BUILD && a5.logger.log(`Flushing aggregated metrics, number of metrics: ${A.length}`);
      let B = SSQ.createMetricEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(B);
    }
    on(A, B) {
      if (!this._hooks[A]) this._hooks[A] = [];
      this._hooks[A].push(B);
    }
    emit(A, ...B) {
      if (this._hooks[A]) this._hooks[A].forEach((Q) => Q(...B));
    }
    _setupIntegrations() {
      let { integrations: A } = this._options;
      ((this._integrations = kH1.setupIntegrations(this, A)),
        kH1.afterSetupIntegrations(this, A),
        (this._integrationsInitialized = !0));
    }
    _updateSessionFromEvent(A, B) {
      let Q = !1,
        Z = !1,
        G = B.exception && B.exception.values;
      if (G) {
        Z = !0;
        for (let W of G) {
          let J = W.mechanism;
          if (J && J.handled === !1) {
            Q = !0;
            break;
          }
        }
      }
      let Y = A.status === "ok";
      if ((Y && A.errors === 0) || (Y && Q))
        (Gn0.updateSession(A, { ...(Q && { status: "crashed" }), errors: A.errors || Number(Z || Q) }),
          this.captureSession(A));
    }
    _isClientDoneProcessing(A) {
      return new a5.SyncPromise((B) => {
        let Q = 0,
          Z = 1,
          G = setInterval(() => {
            if (this._numProcessing == 0) (clearInterval(G), B(!0));
            else if (((Q += Z), A && Q >= A)) (clearInterval(G), B(!1));
          }, Z);
      });
    }
    _isEnabled() {
      return this.getOptions().enabled !== !1 && this._transport !== void 0;
    }
    _prepareEvent(A, B, Q, Z = jSQ.getIsolationScope()) {
      let G = this.getOptions(),
        Y = Object.keys(this._integrations);
      if (!B.integrations && Y.length > 0) B.integrations = Y;
      return (
        this.emit("preprocessEvent", A, B),
        kSQ.prepareEvent(G, A, B, Q, this, Z).then((I) => {
          if (I === null) return I;
          let W = { ...Z.getPropagationContext(), ...(Q ? Q.getPropagationContext() : void 0) };
          if (!(I.contexts && I.contexts.trace) && W) {
            let { traceId: X, spanId: F, parentSpanId: V, dsc: K } = W;
            I.contexts = { trace: { trace_id: X, span_id: F, parent_span_id: V }, ...I.contexts };
            let H = K ? K : ySQ.getDynamicSamplingContextFromClient(X, this, Q);
            I.sdkProcessingMetadata = { dynamicSamplingContext: H, ...I.sdkProcessingMetadata };
          }
          return I;
        })
      );
    }
    _captureEvent(A, B = {}, Q) {
      return this._processEvent(A, B, Q).then(
        (Z) => {
          return Z.event_id;
        },
        (Z) => {
          if (_N.DEBUG_BUILD) {
            let G = Z;
            if (G.logLevel === "log") a5.logger.log(G.message);
            else a5.logger.warn(G);
          }
          return;
        },
      );
    }
    _processEvent(A, B, Q) {
      let Z = this.getOptions(),
        { sampleRate: G } = Z,
        Y = Jn0(A),
        I = Wn0(A),
        W = A.type || "error",
        J = `before send for type \`${W}\``;
      if (I && typeof G === "number" && Math.random() > G)
        return (
          this.recordDroppedEvent("sample_rate", "error", A),
          a5.rejectedSyncPromise(
            new a5.SentryError(
              `Discarding event because it's not included in the random sample (sampling rate = ${G})`,
              "log",
            ),
          )
        );
      let X = W === "replay_event" ? "replay" : W,
        V = (A.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
      return this._prepareEvent(A, B, Q, V)
        .then((K) => {
          if (K === null)
            throw (
              this.recordDroppedEvent("event_processor", X, A),
              new a5.SentryError("An event processor returned `null`, will not send event.", "log")
            );
          if (B.data && B.data.__sentry__ === !0) return K;
          let z = xSQ(Z, K, B);
          return _SQ(z, J);
        })
        .then((K) => {
          if (K === null) {
            if ((this.recordDroppedEvent("before_send", X, A), Y)) {
              let C = 1 + (A.spans || []).length;
              this.recordDroppedEvent("before_send", "span", C);
            }
            throw new a5.SentryError(`${J} returned \`null\`, will not send event.`, "log");
          }
          let H = Q && Q.getSession();
          if (!Y && H) this._updateSessionFromEvent(H, K);
          if (Y) {
            let D = (K.sdkProcessingMetadata && K.sdkProcessingMetadata.spanCountBeforeProcessing) || 0,
              C = K.spans ? K.spans.length : 0,
              w = D - C;
            if (w > 0) this.recordDroppedEvent("before_send", "span", w);
          }
          let z = K.transaction_info;
          if (Y && z && K.transaction !== A.transaction) K.transaction_info = { ...z, source: "custom" };
          return (this.sendEvent(K, B), K);
        })
        .then(null, (K) => {
          if (K instanceof a5.SentryError) throw K;
          throw (
            this.captureException(K, { data: { __sentry__: !0 }, originalException: K }),
            new a5.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${K}`)
          );
        });
    }
    _process(A) {
      (this._numProcessing++,
        A.then(
          (B) => {
            return (this._numProcessing--, B);
          },
          (B) => {
            return (this._numProcessing--, B);
          },
        ));
    }
    _sendEnvelope(A) {
      if ((this.emit("beforeEnvelope", A), this._isEnabled() && this._transport))
        return this._transport.send(A).then(null, (B) => {
          _N.DEBUG_BUILD && a5.logger.error("Error while sending event:", B);
        });
      else _N.DEBUG_BUILD && a5.logger.error("Transport disabled");
    }
    _clearOutcomes() {
      let A = this._outcomes;
      return (
        (this._outcomes = {}),
        Object.keys(A).map((B) => {
          let [Q, Z] = B.split(":");
          return { reason: Q, category: Z, quantity: A[B] };
        })
      );
    }
  }
  function _SQ(A, B) {
    let Q = `${B} must return \`null\` or a valid event.`;
    if (a5.isThenable(A))
      return A.then(
        (Z) => {
          if (!a5.isPlainObject(Z) && Z !== null) throw new a5.SentryError(Q);
          return Z;
        },
        (Z) => {
          throw new a5.SentryError(`${B} rejected with ${Z}`);
        },
      );
    else if (!a5.isPlainObject(A) && A !== null) throw new a5.SentryError(Q);
    return A;
  }
  function xSQ(A, B, Q) {
    let { beforeSend: Z, beforeSendTransaction: G } = A;
    if (Wn0(B) && Z) return Z(B, Q);
    if (Jn0(B) && G) {
      if (B.spans) {
        let Y = B.spans.length;
        B.sdkProcessingMetadata = { ...B.sdkProcessingMetadata, spanCountBeforeProcessing: Y };
      }
      return G(B, Q);
    }
    return B;
  }
  function Wn0(A) {
    return A.type === void 0;
  }
  function Jn0(A) {
    return A.type === "transaction";
  }
  function vSQ(A) {
    let B = PSQ.getClient();
    if (!B || !B.addEventProcessor) return;
    B.addEventProcessor(A);
  }
  Xn0.BaseClient = In0;
  Xn0.addEventProcessor = vSQ;
});
var pn1 = U((Fn0) => {
  Object.defineProperty(Fn0, "__esModule", { value: !0 });
  var ln1 = LA();
  function hSQ(A, B, Q, Z, G) {
    let Y = { sent_at: new Date().toISOString() };
    if (Q && Q.sdk) Y.sdk = { name: Q.sdk.name, version: Q.sdk.version };
    if (!!Z && !!G) Y.dsn = ln1.dsnToString(G);
    if (B) Y.trace = ln1.dropUndefinedKeys(B);
    let I = gSQ(A);
    return ln1.createEnvelope(Y, [I]);
  }
  function gSQ(A) {
    return [{ type: "check_in" }, A];
  }
  Fn0.createCheckInEnvelope = hSQ;
});
var Y91 = U((Vn0) => {
  Object.defineProperty(Vn0, "__esModule", { value: !0 });
  var mSQ = "c",
    dSQ = "g",
    cSQ = "s",
    lSQ = "d",
    pSQ = 5000,
    iSQ = 1e4,
    nSQ = 1e4;
  Vn0.COUNTER_METRIC_TYPE = mSQ;
  Vn0.DEFAULT_BROWSER_FLUSH_INTERVAL = pSQ;
  Vn0.DEFAULT_FLUSH_INTERVAL = iSQ;
  Vn0.DISTRIBUTION_METRIC_TYPE = lSQ;
  Vn0.GAUGE_METRIC_TYPE = dSQ;
  Vn0.MAX_WEIGHT = nSQ;
  Vn0.SET_METRIC_TYPE = cSQ;
});
var rn1 = U((Kn0) => {
  Object.defineProperty(Kn0, "__esModule", { value: !0 });
  var _H1 = Y91(),
    ByQ = G91();
  class in1 {
    constructor(A) {
      this._value = A;
    }
    get weight() {
      return 1;
    }
    add(A) {
      this._value += A;
    }
    toString() {
      return `${this._value}`;
    }
  }
  class nn1 {
    constructor(A) {
      ((this._last = A), (this._min = A), (this._max = A), (this._sum = A), (this._count = 1));
    }
    get weight() {
      return 5;
    }
    add(A) {
      if (((this._last = A), A < this._min)) this._min = A;
      if (A > this._max) this._max = A;
      ((this._sum += A), this._count++);
    }
    toString() {
      return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
    }
  }
  class an1 {
    constructor(A) {
      this._value = [A];
    }
    get weight() {
      return this._value.length;
    }
    add(A) {
      this._value.push(A);
    }
    toString() {
      return this._value.join(":");
    }
  }
  class sn1 {
    constructor(A) {
      ((this.first = A), (this._value = new Set([A])));
    }
    get weight() {
      return this._value.size;
    }
    add(A) {
      this._value.add(A);
    }
    toString() {
      return Array.from(this._value)
        .map((A) => (typeof A === "string" ? ByQ.simpleHash(A) : A))
        .join(":");
    }
  }
  var QyQ = {
    [_H1.COUNTER_METRIC_TYPE]: in1,
    [_H1.GAUGE_METRIC_TYPE]: nn1,
    [_H1.DISTRIBUTION_METRIC_TYPE]: an1,
    [_H1.SET_METRIC_TYPE]: sn1,
  };
  Kn0.CounterMetric = in1;
  Kn0.DistributionMetric = an1;
  Kn0.GaugeMetric = nn1;
  Kn0.METRIC_MAP = QyQ;
  Kn0.SetMetric = sn1;
});
var Cn0 = U((Dn0) => {
  Object.defineProperty(Dn0, "__esModule", { value: !0 });
  var Hn0 = LA(),
    I91 = Y91(),
    JyQ = rn1(),
    XyQ = B91(),
    xH1 = G91();
  class zn0 {
    constructor(A) {
      if (
        ((this._client = A),
        (this._buckets = new Map()),
        (this._bucketsTotalWeight = 0),
        (this._interval = setInterval(() => this._flush(), I91.DEFAULT_FLUSH_INTERVAL)),
        this._interval.unref)
      )
        this._interval.unref();
      ((this._flushShift = Math.floor((Math.random() * I91.DEFAULT_FLUSH_INTERVAL) / 1000)), (this._forceFlush = !1));
    }
    add(A, B, Q, Z = "none", G = {}, Y = Hn0.timestampInSeconds()) {
      let I = Math.floor(Y),
        W = xH1.sanitizeMetricKey(B),
        J = xH1.sanitizeTags(G),
        X = xH1.sanitizeUnit(Z),
        F = xH1.getBucketKey(A, W, X, J),
        V = this._buckets.get(F),
        K = V && A === I91.SET_METRIC_TYPE ? V.metric.weight : 0;
      if (V) {
        if ((V.metric.add(Q), V.timestamp < I)) V.timestamp = I;
      } else
        ((V = { metric: new JyQ.METRIC_MAP[A](Q), timestamp: I, metricType: A, name: W, unit: X, tags: J }),
          this._buckets.set(F, V));
      let H = typeof Q === "string" ? V.metric.weight - K : Q;
      if (
        (XyQ.updateMetricSummaryOnActiveSpan(A, W, H, X, G, F),
        (this._bucketsTotalWeight += V.metric.weight),
        this._bucketsTotalWeight >= I91.MAX_WEIGHT)
      )
        this.flush();
    }
    flush() {
      ((this._forceFlush = !0), this._flush());
    }
    close() {
      ((this._forceFlush = !0), clearInterval(this._interval), this._flush());
    }
    _flush() {
      if (this._forceFlush) {
        ((this._forceFlush = !1),
          (this._bucketsTotalWeight = 0),
          this._captureMetrics(this._buckets),
          this._buckets.clear());
        return;
      }
      let A = Math.floor(Hn0.timestampInSeconds()) - I91.DEFAULT_FLUSH_INTERVAL / 1000 - this._flushShift,
        B = new Map();
      for (let [Q, Z] of this._buckets)
        if (Z.timestamp <= A) (B.set(Q, Z), (this._bucketsTotalWeight -= Z.metric.weight));
      for (let [Q] of B) this._buckets.delete(Q);
      this._captureMetrics(B);
    }
    _captureMetrics(A) {
      if (A.size > 0 && this._client.captureAggregateMetrics) {
        let B = Array.from(A).map(([, Q]) => Q);
        this._client.captureAggregateMetrics(B);
      }
    }
  }
  Dn0.MetricsAggregator = zn0;
});
var qn0 = U((wn0) => {
  Object.defineProperty(wn0, "__esModule", { value: !0 });
  var VT = LA(),
    VyQ = cn1(),
    KyQ = pn1(),
    vH1 = GI(),
    HyQ = PC(),
    zyQ = Cn0(),
    DyQ = gn1(),
    CyQ = fn1(),
    UyQ = pK(),
    $yQ = Li();
  Ri();
  var Un0 = rh();
  class $n0 extends VyQ.BaseClient {
    constructor(A) {
      CyQ.addTracingExtensions();
      super(A);
      if (A._experiments && A._experiments.metricsAggregator) this.metricsAggregator = new zyQ.MetricsAggregator(this);
    }
    eventFromException(A, B) {
      return VT.resolvedSyncPromise(VT.eventFromUnknownInput(HyQ.getClient(), this._options.stackParser, A, B));
    }
    eventFromMessage(A, B = "info", Q) {
      return VT.resolvedSyncPromise(
        VT.eventFromMessage(this._options.stackParser, A, B, Q, this._options.attachStacktrace),
      );
    }
    captureException(A, B, Q) {
      if (this._options.autoSessionTracking && this._sessionFlusher && Q) {
        let Z = Q.getRequestSession();
        if (Z && Z.status === "ok") Z.status = "errored";
      }
      return super.captureException(A, B, Q);
    }
    captureEvent(A, B, Q) {
      if (this._options.autoSessionTracking && this._sessionFlusher && Q) {
        if (
          (A.type || "exception") === "exception" &&
          A.exception &&
          A.exception.values &&
          A.exception.values.length > 0
        ) {
          let Y = Q.getRequestSession();
          if (Y && Y.status === "ok") Y.status = "errored";
        }
      }
      return super.captureEvent(A, B, Q);
    }
    close(A) {
      if (this._sessionFlusher) this._sessionFlusher.close();
      return super.close(A);
    }
    initSessionFlusher() {
      let { release: A, environment: B } = this._options;
      if (!A)
        vH1.DEBUG_BUILD && VT.logger.warn("Cannot initialise an instance of SessionFlusher if no release is provided!");
      else this._sessionFlusher = new DyQ.SessionFlusher(this, { release: A, environment: B });
    }
    captureCheckIn(A, B, Q) {
      let Z = "checkInId" in A && A.checkInId ? A.checkInId : VT.uuid4();
      if (!this._isEnabled())
        return (vH1.DEBUG_BUILD && VT.logger.warn("SDK not enabled, will not capture checkin."), Z);
      let G = this.getOptions(),
        { release: Y, environment: I, tunnel: W } = G,
        J = { check_in_id: Z, monitor_slug: A.monitorSlug, status: A.status, release: Y, environment: I };
      if ("duration" in A) J.duration = A.duration;
      if (B)
        J.monitor_config = {
          schedule: B.schedule,
          checkin_margin: B.checkinMargin,
          max_runtime: B.maxRuntime,
          timezone: B.timezone,
        };
      let [X, F] = this._getTraceInfoFromScope(Q);
      if (F) J.contexts = { trace: F };
      let V = KyQ.createCheckInEnvelope(J, X, this.getSdkMetadata(), W, this.getDsn());
      return (vH1.DEBUG_BUILD && VT.logger.info("Sending checkin:", A.monitorSlug, A.status), this._sendEnvelope(V), Z);
    }
    _captureRequestSession() {
      if (!this._sessionFlusher)
        vH1.DEBUG_BUILD &&
          VT.logger.warn("Discarded request mode session because autoSessionTracking option was disabled");
      else this._sessionFlusher.incrementSessionStatusCount();
    }
    _prepareEvent(A, B, Q, Z) {
      if (this._options.platform) A.platform = A.platform || this._options.platform;
      if (this._options.runtime)
        A.contexts = { ...A.contexts, runtime: (A.contexts || {}).runtime || this._options.runtime };
      if (this._options.serverName) A.server_name = A.server_name || this._options.serverName;
      return super._prepareEvent(A, B, Q, Z);
    }
    _getTraceInfoFromScope(A) {
      if (!A) return [void 0, void 0];
      let B = A.getSpan();
      if (B) return [$yQ.getRootSpan(B) ? Un0.getDynamicSamplingContextFromSpan(B) : void 0, UyQ.spanToTraceContext(B)];
      let { traceId: Q, spanId: Z, parentSpanId: G, dsc: Y } = A.getPropagationContext(),
        I = { trace_id: Q, span_id: Z, parent_span_id: G };
      if (Y) return [Y, I];
      return [Un0.getDynamicSamplingContextFromClient(Q, this, A), I];
    }
  }
  wn0.ServerRuntimeClient = $n0;
});
var Mn0 = U((Ln0) => {
  Object.defineProperty(Ln0, "__esModule", { value: !0 });
  var En0 = LA(),
    qyQ = GI(),
    EyQ = PC(),
    NyQ = yN();
  function LyQ(A, B) {
    if (B.debug === !0)
      if (qyQ.DEBUG_BUILD) En0.logger.enable();
      else
        En0.consoleSandbox(() => {
          console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
        });
    EyQ.getCurrentScope().update(B.initialScope);
    let Z = new A(B);
    (Nn0(Z), MyQ(Z));
  }
  function Nn0(A) {
    let Q = NyQ.getCurrentHub().getStackTop();
    ((Q.client = A), Q.scope.setClient(A));
  }
  function MyQ(A) {
    if (A.init) A.init();
    else if (A.setupIntegrations) A.setupIntegrations();
  }
  Ln0.initAndBind = LyQ;
  Ln0.setCurrentClient = Nn0;
});
var jn0 = U((Pn0) => {
  Object.defineProperty(Pn0, "__esModule", { value: !0 });
  var nK = LA(),
    On0 = GI(),
    Tn0 = 30;
  function TyQ(A, B, Q = nK.makePromiseBuffer(A.bufferSize || Tn0)) {
    let Z = {},
      G = (I) => Q.drain(I);
    function Y(I) {
      let W = [];
      if (
        (nK.forEachEnvelopeItem(I, (V, K) => {
          let H = nK.envelopeItemTypeToDataCategory(K);
          if (nK.isRateLimited(Z, H)) {
            let z = Rn0(V, K);
            A.recordDroppedEvent("ratelimit_backoff", H, z);
          } else W.push(V);
        }),
        W.length === 0)
      )
        return nK.resolvedSyncPromise();
      let J = nK.createEnvelope(I[0], W),
        X = (V) => {
          nK.forEachEnvelopeItem(J, (K, H) => {
            let z = Rn0(K, H);
            A.recordDroppedEvent(V, nK.envelopeItemTypeToDataCategory(H), z);
          });
        },
        F = () =>
          B({ body: nK.serializeEnvelope(J, A.textEncoder) }).then(
            (V) => {
              if (V.statusCode !== void 0 && (V.statusCode < 200 || V.statusCode >= 300))
                On0.DEBUG_BUILD && nK.logger.warn(`Sentry responded with status code ${V.statusCode} to sent event.`);
              return ((Z = nK.updateRateLimits(Z, V)), V);
            },
            (V) => {
              throw (X("network_error"), V);
            },
          );
      return Q.add(F).then(
        (V) => V,
        (V) => {
          if (V instanceof nK.SentryError)
            return (
              On0.DEBUG_BUILD && nK.logger.error("Skipped sending event because buffer is full."),
              X("queue_overflow"),
              nK.resolvedSyncPromise()
            );
          else throw V;
        },
      );
    }
    return ((Y.__sentry__baseTransport__ = !0), { send: Y, flush: G });
  }
  function Rn0(A, B) {
    if (B !== "event" && B !== "transaction") return;
    return Array.isArray(A) ? A[1] : void 0;
  }
  Pn0.DEFAULT_TRANSPORT_BUFFER_SIZE = Tn0;
  Pn0.createTransport = TyQ;
});
var kn0 = U((yn0) => {
  Object.defineProperty(yn0, "__esModule", { value: !0 });
  var tn1 = LA(),
    SyQ = GI(),
    Sn0 = 100,
    en1 = 5000,
    yyQ = 3600000;
  function on1(A, B) {
    SyQ.DEBUG_BUILD && tn1.logger.info(`[Offline]: ${A}`, B);
  }
  function kyQ(A) {
    return (B) => {
      let Q = A(B),
        Z = B.createStore ? B.createStore(B) : void 0,
        G = en1,
        Y;
      function I(F, V, K) {
        if (tn1.envelopeContainsItemType(F, ["replay_event", "replay_recording", "client_report"])) return !1;
        if (B.shouldStore) return B.shouldStore(F, V, K);
        return !0;
      }
      function W(F) {
        if (!Z) return;
        if (Y) clearTimeout(Y);
        if (
          ((Y = setTimeout(async () => {
            Y = void 0;
            let V = await Z.pop();
            if (V)
              (on1("Attempting to send previously queued event"),
                X(V).catch((K) => {
                  on1("Failed to retry sending", K);
                }));
          }, F)),
          typeof Y !== "number" && Y.unref)
        )
          Y.unref();
      }
      function J() {
        if (Y) return;
        (W(G), (G = Math.min(G * 2, yyQ)));
      }
      async function X(F) {
        try {
          let V = await Q.send(F),
            K = Sn0;
          if (V) {
            if (V.headers && V.headers["retry-after"]) K = tn1.parseRetryAfterHeader(V.headers["retry-after"]);
            else if ((V.statusCode || 0) >= 400) return V;
          }
          return (W(K), (G = en1), V);
        } catch (V) {
          if (Z && (await I(F, V, G))) return (await Z.insert(F), J(), on1("Error sending. Event queued", V), {});
          else throw V;
        }
      }
      if (B.flushAtStartup) J();
      return { send: X, flush: (F) => Q.flush(F) };
    };
  }
  yn0.MIN_DELAY = Sn0;
  yn0.START_DELAY = en1;
  yn0.makeOfflineTransport = kyQ;
});
var xn0 = U((_n0) => {
  Object.defineProperty(_n0, "__esModule", { value: !0 });
  var Aa1 = LA(),
    byQ = SH1();
  function Ba1(A, B) {
    let Q;
    return (
      Aa1.forEachEnvelopeItem(A, (Z, G) => {
        if (B.includes(G)) Q = Array.isArray(Z) ? Z[1] : void 0;
        return !!Q;
      }),
      Q
    );
  }
  function fyQ(A, B) {
    return (Q) => {
      let Z = A(Q);
      return {
        ...Z,
        send: async (G) => {
          let Y = Ba1(G, ["event", "transaction", "profile", "replay_event"]);
          if (Y) Y.release = B;
          return Z.send(G);
        },
      };
    };
  }
  function hyQ(A, B) {
    return Aa1.createEnvelope(B ? { ...A[0], dsn: B } : A[0], A[1]);
  }
  function gyQ(A, B) {
    return (Q) => {
      let Z = A(Q),
        G = new Map();
      function Y(J, X) {
        let F = X ? `${J}:${X}` : J,
          V = G.get(F);
        if (!V) {
          let K = Aa1.dsnFromString(J);
          if (!K) return;
          let H = byQ.getEnvelopeEndpointWithUrlEncodedAuth(K, Q.tunnel);
          ((V = X ? fyQ(A, X)({ ...Q, url: H }) : A({ ...Q, url: H })), G.set(F, V));
        }
        return [J, V];
      }
      async function I(J) {
        function X(K) {
          let H = K && K.length ? K : ["event"];
          return Ba1(J, H);
        }
        let F = B({ envelope: J, getEvent: X })
          .map((K) => {
            if (typeof K === "string") return Y(K, void 0);
            else return Y(K.dsn, K.release);
          })
          .filter((K) => !!K);
        if (F.length === 0) F.push(["", Z]);
        return (await Promise.all(F.map(([K, H]) => H.send(hyQ(J, K)))))[0];
      }
      async function W(J) {
        let X = [await Z.flush(J)];
        for (let [, F] of G) X.push(await F.flush(J));
        return X.every((F) => F);
      }
      return { send: I, flush: W };
    };
  }
  _n0.eventFromEnvelope = Ba1;
  _n0.makeMultiplexedTransport = gyQ;
});
var fn0 = U((bn0) => {
  Object.defineProperty(bn0, "__esModule", { value: !0 });
  var vn0 = LA();
  function dyQ(A, B) {
    let Q = { sent_at: new Date().toISOString() };
    if (B) Q.dsn = vn0.dsnToString(B);
    let Z = A.map(cyQ);
    return vn0.createEnvelope(Q, Z);
  }
  function cyQ(A) {
    return [{ type: "span" }, A];
  }
  bn0.createSpanEnvelope = dyQ;
});
var un0 = U((gn0) => {
  Object.defineProperty(gn0, "__esModule", { value: !0 });
  function pyQ(A, B) {
    let Q = B && ayQ(B) ? B.getClient() : B,
      Z = Q && Q.getDsn(),
      G = Q && Q.getOptions().tunnel;
    return nyQ(A, Z) || iyQ(A, G);
  }
  function iyQ(A, B) {
    if (!B) return !1;
    return hn0(A) === hn0(B);
  }
  function nyQ(A, B) {
    return B ? A.includes(B.host) : !1;
  }
  function hn0(A) {
    return A[A.length - 1] === "/" ? A.slice(0, -1) : A;
  }
  function ayQ(A) {
    return A.getClient !== void 0;
  }
  gn0.isSentryRequestUrl = pyQ;
});
var dn0 = U((mn0) => {
  Object.defineProperty(mn0, "__esModule", { value: !0 });
  function ryQ(A, ...B) {
    let Q = new String(String.raw(A, ...B));
    return (
      (Q.__sentry_template_string__ = A.join("\x00").replace(/%/g, "%%").replace(/\0/g, "%s")),
      (Q.__sentry_template_values__ = B),
      Q
    );
  }
  mn0.parameterize = ryQ;
});
var pn0 = U((ln0) => {
  Object.defineProperty(ln0, "__esModule", { value: !0 });
  var cn0 = HH1();
  function tyQ(A, B, Q = [B], Z = "npm") {
    let G = A._metadata || {};
    if (!G.sdk)
      G.sdk = {
        name: `sentry.javascript.${B}`,
        packages: Q.map((Y) => ({ name: `${Z}:@sentry/${Y}`, version: cn0.SDK_VERSION })),
        version: cn0.SDK_VERSION,
      };
    A._metadata = G;
  }
  ln0.applySdkMetadata = tyQ;
});
var rn0 = U((sn0) => {
  Object.defineProperty(sn0, "__esModule", { value: !0 });
  var Qa1 = LA(),
    nn0 = new Map(),
    in0 = new Set();
  function AkQ(A) {
    if (!Qa1.GLOBAL_OBJ._sentryModuleMetadata) return;
    for (let B of Object.keys(Qa1.GLOBAL_OBJ._sentryModuleMetadata)) {
      let Q = Qa1.GLOBAL_OBJ._sentryModuleMetadata[B];
      if (in0.has(B)) continue;
      in0.add(B);
      let Z = A(B);
      for (let G of Z.reverse())
        if (G.filename) {
          nn0.set(G.filename, Q);
          break;
        }
    }
  }
  function an0(A, B) {
    return (AkQ(A), nn0.get(B));
  }
  function BkQ(A, B) {
    try {
      B.exception.values.forEach((Q) => {
        if (!Q.stacktrace) return;
        for (let Z of Q.stacktrace.frames || []) {
          if (!Z.filename) continue;
          let G = an0(A, Z.filename);
          if (G) Z.module_metadata = G;
        }
      });
    } catch (Q) {}
  }
  function QkQ(A) {
    try {
      A.exception.values.forEach((B) => {
        if (!B.stacktrace) return;
        for (let Q of B.stacktrace.frames || []) delete Q.module_metadata;
      });
    } catch (B) {}
  }
  sn0.addMetadataToStackFrames = BkQ;
  sn0.getMetadataForUrl = an0;
  sn0.stripMetadataFromStackFrames = QkQ;
});
var Qa0 = U((Ba0) => {
  Object.defineProperty(Ba0, "__esModule", { value: !0 });
  var IkQ = LA(),
    tn0 = FT(),
    on0 = rn0(),
    en0 = "ModuleMetadata",
    WkQ = () => {
      return {
        name: en0,
        setupOnce() {},
        setup(A) {
          if (typeof A.on !== "function") return;
          A.on("beforeEnvelope", (B) => {
            IkQ.forEachEnvelopeItem(B, (Q, Z) => {
              if (Z === "event") {
                let G = Array.isArray(Q) ? Q[1] : void 0;
                if (G) (on0.stripMetadataFromStackFrames(G), (Q[1] = G));
              }
            });
          });
        },
        processEvent(A, B, Q) {
          let Z = Q.getOptions().stackParser;
          return (on0.addMetadataToStackFrames(Z, A), A);
        },
      };
    },
    Aa0 = tn0.defineIntegration(WkQ),
    JkQ = tn0.convertIntegrationFnToClass(en0, Aa0);
  Ba0.ModuleMetadata = JkQ;
  Ba0.moduleMetadataIntegration = Aa0;
});
var Ja0 = U((Wa0) => {
  Object.defineProperty(Wa0, "__esModule", { value: !0 });
  var Za0 = LA(),
    Ga0 = FT(),
    VkQ = pK(),
    Za1 = {
      include: {
        cookies: !0,
        data: !0,
        headers: !0,
        ip: !1,
        query_string: !0,
        url: !0,
        user: { id: !0, username: !0, email: !0 },
      },
      transactionNamingScheme: "methodPath",
    },
    Ya0 = "RequestData",
    KkQ = (A = {}) => {
      let B = Za0.addRequestDataToEvent,
        Q = {
          ...Za1,
          ...A,
          include: {
            method: !0,
            ...Za1.include,
            ...A.include,
            user:
              A.include && typeof A.include.user === "boolean"
                ? A.include.user
                : { ...Za1.include.user, ...(A.include || {}).user },
          },
        };
      return {
        name: Ya0,
        setupOnce() {},
        processEvent(Z, G, Y) {
          let { transactionNamingScheme: I } = Q,
            { sdkProcessingMetadata: W = {} } = Z,
            J = W.request;
          if (!J) return Z;
          let X = W.requestDataOptionsFromExpressHandler || W.requestDataOptionsFromGCPWrapper || zkQ(Q),
            F = B(Z, J, X);
          if (Z.type === "transaction" || I === "handler") return F;
          let K = J._sentryTransaction;
          if (K) {
            let H = VkQ.spanToJSON(K).description || "",
              z = DkQ(Y) === "sentry.javascript.nextjs" ? H.startsWith("/api") : I !== "path",
              [D] = Za0.extractPathForTransaction(J, { path: !0, method: z, customRoute: H });
            F.transaction = D;
          }
          return F;
        },
      };
    },
    Ia0 = Ga0.defineIntegration(KkQ),
    HkQ = Ga0.convertIntegrationFnToClass(Ya0, Ia0);
  function zkQ(A) {
    let {
        transactionNamingScheme: B,
        include: { ip: Q, user: Z, ...G },
      } = A,
      Y = [];
    for (let [W, J] of Object.entries(G)) if (J) Y.push(W);
    let I;
    if (Z === void 0) I = !0;
    else if (typeof Z === "boolean") I = Z;
    else {
      let W = [];
      for (let [J, X] of Object.entries(Z)) if (X) W.push(J);
      I = W;
    }
    return { include: { ip: Q, user: I, request: Y.length !== 0 ? Y : void 0, transaction: B } };
  }
  function DkQ(A) {
    try {
      return A.getOptions()._metadata.sdk.name;
    } catch (B) {
      return;
    }
  }
  Wa0.RequestData = HkQ;
  Wa0.requestDataIntegration = Ia0;
});
var Ga1 = U((Ka0) => {
  Object.defineProperty(Ka0, "__esModule", { value: !0 });
  var bW = LA(),
    Ag = GI(),
    Xa0 = FT(),
    $kQ = [
      /^Script error\.?$/,
      /^Javascript error: Script error\.? on line 0$/,
      /^ResizeObserver loop completed with undelivered notifications.$/,
      /^Cannot redefine property: googletag$/,
    ],
    wkQ = [
      /^.*\/healthcheck$/,
      /^.*\/healthy$/,
      /^.*\/live$/,
      /^.*\/ready$/,
      /^.*\/heartbeat$/,
      /^.*\/health$/,
      /^.*\/healthz$/,
    ],
    Fa0 = "InboundFilters",
    qkQ = (A = {}) => {
      return {
        name: Fa0,
        setupOnce() {},
        processEvent(B, Q, Z) {
          let G = Z.getOptions(),
            Y = NkQ(A, G);
          return LkQ(B, Y) ? null : B;
        },
      };
    },
    Va0 = Xa0.defineIntegration(qkQ),
    EkQ = Xa0.convertIntegrationFnToClass(Fa0, Va0);
  function NkQ(A = {}, B = {}) {
    return {
      allowUrls: [...(A.allowUrls || []), ...(B.allowUrls || [])],
      denyUrls: [...(A.denyUrls || []), ...(B.denyUrls || [])],
      ignoreErrors: [...(A.ignoreErrors || []), ...(B.ignoreErrors || []), ...(A.disableErrorDefaults ? [] : $kQ)],
      ignoreTransactions: [
        ...(A.ignoreTransactions || []),
        ...(B.ignoreTransactions || []),
        ...(A.disableTransactionDefaults ? [] : wkQ),
      ],
      ignoreInternal: A.ignoreInternal !== void 0 ? A.ignoreInternal : !0,
    };
  }
  function LkQ(A, B) {
    if (B.ignoreInternal && jkQ(A))
      return (
        Ag.DEBUG_BUILD &&
          bW.logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${bW.getEventDescription(A)}`),
        !0
      );
    if (MkQ(A, B.ignoreErrors))
      return (
        Ag.DEBUG_BUILD &&
          bW.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${bW.getEventDescription(A)}`),
        !0
      );
    if (OkQ(A, B.ignoreTransactions))
      return (
        Ag.DEBUG_BUILD &&
          bW.logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${bW.getEventDescription(A)}`),
        !0
      );
    if (RkQ(A, B.denyUrls))
      return (
        Ag.DEBUG_BUILD &&
          bW.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${bW.getEventDescription(A)}.
Url: ${bH1(A)}`),
        !0
      );
    if (!TkQ(A, B.allowUrls))
      return (
        Ag.DEBUG_BUILD &&
          bW.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${bW.getEventDescription(A)}.
Url: ${bH1(A)}`),
        !0
      );
    return !1;
  }
  function MkQ(A, B) {
    if (A.type || !B || !B.length) return !1;
    return PkQ(A).some((Q) => bW.stringMatchesSomePattern(Q, B));
  }
  function OkQ(A, B) {
    if (A.type !== "transaction" || !B || !B.length) return !1;
    let Q = A.transaction;
    return Q ? bW.stringMatchesSomePattern(Q, B) : !1;
  }
  function RkQ(A, B) {
    if (!B || !B.length) return !1;
    let Q = bH1(A);
    return !Q ? !1 : bW.stringMatchesSomePattern(Q, B);
  }
  function TkQ(A, B) {
    if (!B || !B.length) return !0;
    let Q = bH1(A);
    return !Q ? !0 : bW.stringMatchesSomePattern(Q, B);
  }
  function PkQ(A) {
    let B = [];
    if (A.message) B.push(A.message);
    let Q;
    try {
      Q = A.exception.values[A.exception.values.length - 1];
    } catch (Z) {}
    if (Q) {
      if (Q.value) {
        if ((B.push(Q.value), Q.type)) B.push(`${Q.type}: ${Q.value}`);
      }
    }
    if (Ag.DEBUG_BUILD && B.length === 0)
      bW.logger.error(`Could not extract message for event ${bW.getEventDescription(A)}`);
    return B;
  }
  function jkQ(A) {
    try {
      return A.exception.values[0].type === "SentryError";
    } catch (B) {}
    return !1;
  }
  function SkQ(A = []) {
    for (let B = A.length - 1; B >= 0; B--) {
      let Q = A[B];
      if (Q && Q.filename !== "<anonymous>" && Q.filename !== "[native code]") return Q.filename || null;
    }
    return null;
  }
  function bH1(A) {
    try {
      let B;
      try {
        B = A.exception.values[0].stacktrace.frames;
      } catch (Q) {}
      return B ? SkQ(B) : null;
    } catch (B) {
      return (Ag.DEBUG_BUILD && bW.logger.error(`Cannot extract url for event ${bW.getEventDescription(A)}`), null);
    }
  }
  Ka0.InboundFilters = EkQ;
  Ka0.inboundFiltersIntegration = Va0;
});
var Ya1 = U(($a0) => {
  Object.defineProperty($a0, "__esModule", { value: !0 });
  var _kQ = LA(),
    xkQ = PC(),
    Da0 = FT(),
    Ha0,
    Ca0 = "FunctionToString",
    za0 = new WeakMap(),
    vkQ = () => {
      return {
        name: Ca0,
        setupOnce() {
          Ha0 = Function.prototype.toString;
          try {
            Function.prototype.toString = function (...A) {
              let B = _kQ.getOriginalFunction(this),
                Q = za0.has(xkQ.getClient()) && B !== void 0 ? B : this;
              return Ha0.apply(Q, A);
            };
          } catch (A) {}
        },
        setup(A) {
          za0.set(A, !0);
        },
      };
    },
    Ua0 = Da0.defineIntegration(vkQ),
    bkQ = Da0.convertIntegrationFnToClass(Ca0, Ua0);
  $a0.FunctionToString = bkQ;
  $a0.functionToStringIntegration = Ua0;
});
var Ia1 = U((La0) => {
  Object.defineProperty(La0, "__esModule", { value: !0 });
  var wa0 = LA(),
    qa0 = FT(),
    gkQ = "cause",
    ukQ = 5,
    Ea0 = "LinkedErrors",
    mkQ = (A = {}) => {
      let B = A.limit || ukQ,
        Q = A.key || gkQ;
      return {
        name: Ea0,
        setupOnce() {},
        preprocessEvent(Z, G, Y) {
          let I = Y.getOptions();
          wa0.applyAggregateErrorsToEvent(wa0.exceptionFromError, I.stackParser, I.maxValueLength, Q, B, Z, G);
        },
      };
    },
    Na0 = qa0.defineIntegration(mkQ),
    dkQ = qa0.convertIntegrationFnToClass(Ea0, Na0);
  La0.LinkedErrors = dkQ;
  La0.linkedErrorsIntegration = Na0;
});
var Oa0 = U((Ma0) => {
  Object.defineProperty(Ma0, "__esModule", { value: !0 });
  var pkQ = Ya1(),
    ikQ = Ga1(),
    nkQ = Ia1();
  Ma0.FunctionToString = pkQ.FunctionToString;
  Ma0.InboundFilters = ikQ.InboundFilters;
  Ma0.LinkedErrors = nkQ.LinkedErrors;
});
var ja0 = U((Pa0) => {
  Object.defineProperty(Pa0, "__esModule", { value: !0 });
  var okQ = LA(),
    Ra0 = Y91(),
    tkQ = rn1(),
    ekQ = B91(),
    fH1 = G91();
  class Ta0 {
    constructor(A) {
      ((this._client = A),
        (this._buckets = new Map()),
        (this._interval = setInterval(() => this.flush(), Ra0.DEFAULT_BROWSER_FLUSH_INTERVAL)));
    }
    add(A, B, Q, Z = "none", G = {}, Y = okQ.timestampInSeconds()) {
      let I = Math.floor(Y),
        W = fH1.sanitizeMetricKey(B),
        J = fH1.sanitizeTags(G),
        X = fH1.sanitizeUnit(Z),
        F = fH1.getBucketKey(A, W, X, J),
        V = this._buckets.get(F),
        K = V && A === Ra0.SET_METRIC_TYPE ? V.metric.weight : 0;
      if (V) {
        if ((V.metric.add(Q), V.timestamp < I)) V.timestamp = I;
      } else
        ((V = { metric: new tkQ.METRIC_MAP[A](Q), timestamp: I, metricType: A, name: W, unit: X, tags: J }),
          this._buckets.set(F, V));
      let H = typeof Q === "string" ? V.metric.weight - K : Q;
      ekQ.updateMetricSummaryOnActiveSpan(A, W, H, X, G, F);
    }
    flush() {
      if (this._buckets.size === 0) return;
      if (this._client.captureAggregateMetrics) {
        let A = Array.from(this._buckets).map(([, B]) => B);
        this._client.captureAggregateMetrics(A);
      }
      this._buckets.clear();
    }
    close() {
      (clearInterval(this._interval), this.flush());
    }
  }
  Pa0.BrowserMetricsAggregator = Ta0;
});
var xa0 = U((_a0) => {
  Object.defineProperty(_a0, "__esModule", { value: !0 });
  var Sa0 = FT(),
    B_Q = ja0(),
    ya0 = "MetricsAggregator",
    Q_Q = () => {
      return {
        name: ya0,
        setupOnce() {},
        setup(A) {
          A.metricsAggregator = new B_Q.BrowserMetricsAggregator(A);
        },
      };
    },
    ka0 = Sa0.defineIntegration(Q_Q),
    Z_Q = Sa0.convertIntegrationFnToClass(ya0, ka0);
  _a0.MetricsAggregator = Z_Q;
  _a0.metricsAggregatorIntegration = ka0;
});
var la0 = U((ca0) => {
  Object.defineProperty(ca0, "__esModule", { value: !0 });
  var va0 = LA(),
    ba0 = GI(),
    fa0 = PC(),
    I_Q = pK(),
    hH1 = Y91(),
    ha0 = xa0();
  function gH1(A, B, Q, Z = {}) {
    let G = fa0.getClient(),
      Y = fa0.getCurrentScope();
    if (G) {
      if (!G.metricsAggregator) {
        ba0.DEBUG_BUILD &&
          va0.logger.warn(
            "No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs",
          );
        return;
      }
      let { unit: I, tags: W, timestamp: J } = Z,
        { release: X, environment: F } = G.getOptions(),
        V = Y.getTransaction(),
        K = {};
      if (X) K.release = X;
      if (F) K.environment = F;
      if (V) K.transaction = I_Q.spanToJSON(V).description || "";
      (ba0.DEBUG_BUILD && va0.logger.log(`Adding value of ${Q} to ${A} metric ${B}`),
        G.metricsAggregator.add(A, B, Q, I, { ...K, ...W }, J));
    }
  }
  function ga0(A, B = 1, Q) {
    gH1(hH1.COUNTER_METRIC_TYPE, A, B, Q);
  }
  function ua0(A, B, Q) {
    gH1(hH1.DISTRIBUTION_METRIC_TYPE, A, B, Q);
  }
  function ma0(A, B, Q) {
    gH1(hH1.SET_METRIC_TYPE, A, B, Q);
  }
  function da0(A, B, Q) {
    gH1(hH1.GAUGE_METRIC_TYPE, A, B, Q);
  }
  var W_Q = {
    increment: ga0,
    distribution: ua0,
    set: ma0,
    gauge: da0,
    MetricsAggregator: ha0.MetricsAggregator,
    metricsAggregatorIntegration: ha0.metricsAggregatorIntegration,
  };
  ca0.distribution = ua0;
  ca0.gauge = da0;
  ca0.increment = ga0;
  ca0.metrics = W_Q;
  ca0.set = ma0;
});
var y9 = U((Xa1) => {
  Object.defineProperty(Xa1, "__esModule", { value: !0 });
  var pa0 = fn1(),
    ia0 = vn1(),
    H_Q = LH1(),
    z_Q = RH1(),
    na0 = CH1(),
    uH1 = Ri(),
    Bg = NH1(),
    aa0 = rh(),
    D_Q = pi0(),
    C_Q = bn1(),
    W91 = Q91(),
    sa0 = hn1(),
    Y3 = PC(),
    xN = yN(),
    Wa1 = Ni(),
    U_Q = gn1(),
    Ja1 = FH1(),
    ra0 = nQ1(),
    oa0 = SH1(),
    ta0 = cn1(),
    $_Q = qn0(),
    ea0 = Mn0(),
    w_Q = jn0(),
    q_Q = kn0(),
    E_Q = xn0(),
    N_Q = HH1(),
    mH1 = FT(),
    As0 = XH1(),
    L_Q = JH1(),
    M_Q = pn1(),
    O_Q = fn0(),
    R_Q = $H1(),
    T_Q = un0(),
    P_Q = yn1(),
    j_Q = dn0(),
    dH1 = pK(),
    S_Q = Li(),
    y_Q = pn0(),
    k_Q = Ei(),
    Bs0 = Qa0(),
    Qs0 = Ja0(),
    Zs0 = Ga1(),
    Gs0 = Ya1(),
    Ys0 = Ia1(),
    __Q = Oa0(),
    x_Q = la0(),
    v_Q = __Q;
  Xa1.addTracingExtensions = pa0.addTracingExtensions;
  Xa1.startIdleTransaction = pa0.startIdleTransaction;
  Xa1.IdleTransaction = ia0.IdleTransaction;
  Xa1.TRACING_DEFAULTS = ia0.TRACING_DEFAULTS;
  Xa1.Span = H_Q.Span;
  Xa1.Transaction = z_Q.Transaction;
  Xa1.extractTraceparentData = na0.extractTraceparentData;
  Xa1.getActiveTransaction = na0.getActiveTransaction;
  Object.defineProperty(Xa1, "SpanStatus", { enumerable: !0, get: () => uH1.SpanStatus });
  Xa1.getSpanStatusFromHttpCode = uH1.getSpanStatusFromHttpCode;
  Xa1.setHttpStatus = uH1.setHttpStatus;
  Xa1.spanStatusfromHttpCode = uH1.spanStatusfromHttpCode;
  Xa1.continueTrace = Bg.continueTrace;
  Xa1.getActiveSpan = Bg.getActiveSpan;
  Xa1.startActiveSpan = Bg.startActiveSpan;
  Xa1.startInactiveSpan = Bg.startInactiveSpan;
  Xa1.startSpan = Bg.startSpan;
  Xa1.startSpanManual = Bg.startSpanManual;
  Xa1.trace = Bg.trace;
  Xa1.getDynamicSamplingContextFromClient = aa0.getDynamicSamplingContextFromClient;
  Xa1.getDynamicSamplingContextFromSpan = aa0.getDynamicSamplingContextFromSpan;
  Xa1.setMeasurement = D_Q.setMeasurement;
  Xa1.isValidSampleRate = C_Q.isValidSampleRate;
  Xa1.SEMANTIC_ATTRIBUTE_PROFILE_ID = W91.SEMANTIC_ATTRIBUTE_PROFILE_ID;
  Xa1.SEMANTIC_ATTRIBUTE_SENTRY_OP = W91.SEMANTIC_ATTRIBUTE_SENTRY_OP;
  Xa1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = W91.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
  Xa1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = W91.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
  Xa1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = W91.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
  Xa1.createEventEnvelope = sa0.createEventEnvelope;
  Xa1.createSessionEnvelope = sa0.createSessionEnvelope;
  Xa1.addBreadcrumb = Y3.addBreadcrumb;
  Xa1.captureCheckIn = Y3.captureCheckIn;
  Xa1.captureEvent = Y3.captureEvent;
  Xa1.captureException = Y3.captureException;
  Xa1.captureMessage = Y3.captureMessage;
  Xa1.captureSession = Y3.captureSession;
  Xa1.close = Y3.close;
  Xa1.configureScope = Y3.configureScope;
  Xa1.endSession = Y3.endSession;
  Xa1.flush = Y3.flush;
  Xa1.getClient = Y3.getClient;
  Xa1.getCurrentScope = Y3.getCurrentScope;
  Xa1.isInitialized = Y3.isInitialized;
  Xa1.lastEventId = Y3.lastEventId;
  Xa1.setContext = Y3.setContext;
  Xa1.setExtra = Y3.setExtra;
  Xa1.setExtras = Y3.setExtras;
  Xa1.setTag = Y3.setTag;
  Xa1.setTags = Y3.setTags;
  Xa1.setUser = Y3.setUser;
  Xa1.startSession = Y3.startSession;
  Xa1.startTransaction = Y3.startTransaction;
  Xa1.withActiveSpan = Y3.withActiveSpan;
  Xa1.withIsolationScope = Y3.withIsolationScope;
  Xa1.withMonitor = Y3.withMonitor;
  Xa1.withScope = Y3.withScope;
  Xa1.Hub = xN.Hub;
  Xa1.ensureHubOnCarrier = xN.ensureHubOnCarrier;
  Xa1.getCurrentHub = xN.getCurrentHub;
  Xa1.getHubFromCarrier = xN.getHubFromCarrier;
  Xa1.getIsolationScope = xN.getIsolationScope;
  Xa1.getMainCarrier = xN.getMainCarrier;
  Xa1.makeMain = xN.makeMain;
  Xa1.runWithAsyncContext = xN.runWithAsyncContext;
  Xa1.setAsyncContextStrategy = xN.setAsyncContextStrategy;
  Xa1.setHubOnCarrier = xN.setHubOnCarrier;
  Xa1.closeSession = Wa1.closeSession;
  Xa1.makeSession = Wa1.makeSession;
  Xa1.updateSession = Wa1.updateSession;
  Xa1.SessionFlusher = U_Q.SessionFlusher;
  Xa1.Scope = Ja1.Scope;
  Xa1.getGlobalScope = Ja1.getGlobalScope;
  Xa1.setGlobalScope = Ja1.setGlobalScope;
  Xa1.addGlobalEventProcessor = ra0.addGlobalEventProcessor;
  Xa1.notifyEventProcessors = ra0.notifyEventProcessors;
  Xa1.getEnvelopeEndpointWithUrlEncodedAuth = oa0.getEnvelopeEndpointWithUrlEncodedAuth;
  Xa1.getReportDialogEndpoint = oa0.getReportDialogEndpoint;
  Xa1.BaseClient = ta0.BaseClient;
  Xa1.addEventProcessor = ta0.addEventProcessor;
  Xa1.ServerRuntimeClient = $_Q.ServerRuntimeClient;
  Xa1.initAndBind = ea0.initAndBind;
  Xa1.setCurrentClient = ea0.setCurrentClient;
  Xa1.createTransport = w_Q.createTransport;
  Xa1.makeOfflineTransport = q_Q.makeOfflineTransport;
  Xa1.makeMultiplexedTransport = E_Q.makeMultiplexedTransport;
  Xa1.SDK_VERSION = N_Q.SDK_VERSION;
  Xa1.addIntegration = mH1.addIntegration;
  Xa1.convertIntegrationFnToClass = mH1.convertIntegrationFnToClass;
  Xa1.defineIntegration = mH1.defineIntegration;
  Xa1.getIntegrationsToSetup = mH1.getIntegrationsToSetup;
  Xa1.applyScopeDataToEvent = As0.applyScopeDataToEvent;
  Xa1.mergeScopeData = As0.mergeScopeData;
  Xa1.prepareEvent = L_Q.prepareEvent;
  Xa1.createCheckInEnvelope = M_Q.createCheckInEnvelope;
  Xa1.createSpanEnvelope = O_Q.createSpanEnvelope;
  Xa1.hasTracingEnabled = R_Q.hasTracingEnabled;
  Xa1.isSentryRequestUrl = T_Q.isSentryRequestUrl;
  Xa1.handleCallbackErrors = P_Q.handleCallbackErrors;
  Xa1.parameterize = j_Q.parameterize;
  Xa1.spanIsSampled = dH1.spanIsSampled;
  Xa1.spanToJSON = dH1.spanToJSON;
  Xa1.spanToTraceContext = dH1.spanToTraceContext;
  Xa1.spanToTraceHeader = dH1.spanToTraceHeader;
  Xa1.getRootSpan = S_Q.getRootSpan;
  Xa1.applySdkMetadata = y_Q.applySdkMetadata;
  Xa1.DEFAULT_ENVIRONMENT = k_Q.DEFAULT_ENVIRONMENT;
  Xa1.ModuleMetadata = Bs0.ModuleMetadata;
  Xa1.moduleMetadataIntegration = Bs0.moduleMetadataIntegration;
  Xa1.RequestData = Qs0.RequestData;
  Xa1.requestDataIntegration = Qs0.requestDataIntegration;
  Xa1.InboundFilters = Zs0.InboundFilters;
  Xa1.inboundFiltersIntegration = Zs0.inboundFiltersIntegration;
  Xa1.FunctionToString = Gs0.FunctionToString;
  Xa1.functionToStringIntegration = Gs0.functionToStringIntegration;
  Xa1.LinkedErrors = Ys0.LinkedErrors;
  Xa1.linkedErrorsIntegration = Ys0.linkedErrorsIntegration;
  Xa1.metrics = x_Q.metrics;
  Xa1.Integrations = v_Q;
});
var aK = U((Is0) => {
  Object.defineProperty(Is0, "__esModule", { value: !0 });
  var pvQ = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
  Is0.DEBUG_BUILD = pvQ;
});
var Gk = U((Js0) => {
  var { _optionalChain: Ws0 } = LA();
  Object.defineProperty(Js0, "__esModule", { value: !0 });
  function nvQ(A) {
    let B = Ws0([
      A,
      "call",
      (Z) => Z(),
      "access",
      (Z) => Z.getClient,
      "call",
      (Z) => Z(),
      "optionalAccess",
      (Z) => Z.getOptions,
      "call",
      (Z) => Z(),
    ]);
    return (Ws0([B, "optionalAccess", (Z) => Z.instrumenter]) || "sentry") !== "sentry";
  }
  Js0.shouldDisableAutoInstrumentation = nvQ;
});
var Hs0 = U((Ks0) => {
  var { _optionalChain: hw } = LA();
  Object.defineProperty(Ks0, "__esModule", { value: !0 });
  var Fa1 = y9(),
    sK = LA(),
    cH1 = aK(),
    svQ = Gk();
  class lH1 {
    static __initStatic() {
      this.id = "Express";
    }
    constructor(A = {}) {
      ((this.name = lH1.id),
        (this._router = A.router || A.app),
        (this._methods = (Array.isArray(A.methods) ? A.methods : []).concat("use")));
    }
    setupOnce(A, B) {
      if (!this._router) {
        cH1.DEBUG_BUILD && sK.logger.error("ExpressIntegration is missing an Express instance");
        return;
      }
      if (svQ.shouldDisableAutoInstrumentation(B)) {
        cH1.DEBUG_BUILD && sK.logger.log("Express Integration is skipped because of instrumenter configuration.");
        return;
      }
      (tvQ(this._router, this._methods), evQ(this._router));
    }
  }
  lH1.__initStatic();
  function Xs0(A, B) {
    let Q = A.length;
    switch (Q) {
      case 2:
        return function (Z, G) {
          let Y = G.__sentry_transaction;
          if (Y) {
            let I = Y.startChild({
              description: A.name,
              op: `middleware.express.${B}`,
              origin: "auto.middleware.express",
            });
            G.once("finish", () => {
              I.end();
            });
          }
          return A.call(this, Z, G);
        };
      case 3:
        return function (Z, G, Y) {
          let I = G.__sentry_transaction,
            W = hw([
              I,
              "optionalAccess",
              (J) => J.startChild,
              "call",
              (J) => J({ description: A.name, op: `middleware.express.${B}`, origin: "auto.middleware.express" }),
            ]);
          A.call(this, Z, G, function (...J) {
            (hw([W, "optionalAccess", (X) => X.end, "call", (X) => X()]), Y.call(this, ...J));
          });
        };
      case 4:
        return function (Z, G, Y, I) {
          let W = Y.__sentry_transaction,
            J = hw([
              W,
              "optionalAccess",
              (X) => X.startChild,
              "call",
              (X) => X({ description: A.name, op: `middleware.express.${B}`, origin: "auto.middleware.express" }),
            ]);
          A.call(this, Z, G, Y, function (...X) {
            (hw([J, "optionalAccess", (F) => F.end, "call", (F) => F()]), I.call(this, ...X));
          });
        };
      default:
        throw new Error(`Express middleware takes 2-4 arguments. Got: ${Q}`);
    }
  }
  function rvQ(A, B) {
    return A.map((Q) => {
      if (typeof Q === "function") return Xs0(Q, B);
      if (Array.isArray(Q))
        return Q.map((Z) => {
          if (typeof Z === "function") return Xs0(Z, B);
          return Z;
        });
      return Q;
    });
  }
  function ovQ(A, B) {
    let Q = A[B];
    return (
      (A[B] = function (...Z) {
        return Q.call(this, ...rvQ(Z, B));
      }),
      A
    );
  }
  function tvQ(A, B = []) {
    B.forEach((Q) => ovQ(A, Q));
  }
  function evQ(A) {
    let B = "settings" in A;
    if (B && A._router === void 0 && A.lazyrouter) A.lazyrouter();
    let Q = B ? A._router : A;
    if (!Q) {
      (cH1.DEBUG_BUILD &&
        sK.logger.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."),
        cH1.DEBUG_BUILD && sK.logger.debug("Routing instrumentation is currently only supported in Express 4."));
      return;
    }
    let Z = Object.getPrototypeOf(Q),
      G = Z.process_params;
    Z.process_params = function Y(I, W, J, X, F) {
      if (!J._reconstructedRoute) J._reconstructedRoute = "";
      let { layerRoutePath: V, isRegex: K, isArray: H, numExtraSegments: z } = AbQ(I);
      if (V || K || H) J._hasParameters = !0;
      let D;
      if (V) D = V;
      else D = Vs0(J.originalUrl, J._reconstructedRoute, I.path) || "";
      let C = D.split("/")
        .filter((L) => L.length > 0 && (K || H || !L.includes("*")))
        .join("/");
      if (C && C.length > 0) J._reconstructedRoute += `/${C}${K ? "/" : ""}`;
      let w = sK.getNumberOfUrlSegments(sK.stripUrlQueryAndFragment(J.originalUrl || "")) + z,
        E = sK.getNumberOfUrlSegments(J._reconstructedRoute);
      if (w === E) {
        if (!J._hasParameters) {
          if (J._reconstructedRoute !== J.originalUrl)
            J._reconstructedRoute = J.originalUrl ? sK.stripUrlQueryAndFragment(J.originalUrl) : J.originalUrl;
        }
        let L = X.__sentry_transaction,
          O = (L && Fa1.spanToJSON(L).data) || {};
        if (L && O[Fa1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] !== "custom") {
          let R = J._reconstructedRoute || "/",
            [P, _] = sK.extractPathForTransaction(J, { path: !0, method: !0, customRoute: R });
          (L.updateName(P), L.setAttribute(Fa1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, _));
        }
      }
      return G.call(this, I, W, J, X, F);
    };
  }
  var Fs0 = (A, B, Q) => {
    if (
      !A ||
      !B ||
      !Q ||
      Object.keys(Q).length === 0 ||
      hw([Q, "access", (X) => X[0], "optionalAccess", (X) => X.offset]) === void 0 ||
      hw([Q, "access", (X) => X[0], "optionalAccess", (X) => X.offset]) === null
    )
      return;
    let Z = Q.sort((X, F) => X.offset - F.offset),
      Y = new RegExp(B, `${B.flags}d`).exec(A);
    if (!Y || !Y.indices) return;
    let [, ...I] = Y.indices;
    if (I.length !== Z.length) return;
    let W = A,
      J = 0;
    return (
      I.forEach((X, F) => {
        if (X) {
          let [V, K] = X,
            H = W.substring(0, V - J),
            z = `:${Z[F].name}`,
            D = W.substring(K - J);
          ((W = H + z + D), (J = J + (K - V - z.length)));
        }
      }),
      W
    );
  };
  function AbQ(A) {
    let B = hw([A, "access", (I) => I.route, "optionalAccess", (I) => I.path]),
      Q = sK.isRegExp(B),
      Z = Array.isArray(B);
    if (!B) {
      let [I] = sK.GLOBAL_OBJ.process.versions.node.split(".").map(Number);
      if (I >= 16) B = Fs0(A.path, A.regexp, A.keys);
    }
    if (!B) return { isRegex: Q, isArray: Z, numExtraSegments: 0 };
    let G = Z ? Math.max(BbQ(B) - sK.getNumberOfUrlSegments(A.path || ""), 0) : 0;
    return { layerRoutePath: QbQ(Z, B), isRegex: Q, isArray: Z, numExtraSegments: G };
  }
  function BbQ(A) {
    return A.reduce((B, Q) => {
      return B + sK.getNumberOfUrlSegments(Q.toString());
    }, 0);
  }
  function QbQ(A, B) {
    if (A) return B.map((Q) => Q.toString()).join(",");
    return B && B.toString();
  }
  function Vs0(A, B, Q) {
    let Z = sK.stripUrlQueryAndFragment(A || ""),
      G = hw([
        Z,
        "optionalAccess",
        (J) => J.split,
        "call",
        (J) => J("/"),
        "access",
        (J) => J.filter,
        "call",
        (J) => J((X) => !!X),
      ]),
      Y = 0,
      I =
        hw([
          B,
          "optionalAccess",
          (J) => J.split,
          "call",
          (J) => J("/"),
          "access",
          (J) => J.filter,
          "call",
          (J) => J((X) => !!X),
          "access",
          (J) => J.length,
        ]) || 0;
    return hw([
      Q,
      "optionalAccess",
      (J) => J.split,
      "call",
      (J) => J("/"),
      "access",
      (J) => J.filter,
      "call",
      (J) =>
        J((X) => {
          if (hw([G, "optionalAccess", (F) => F[I + Y]]) === X) return ((Y += 1), !0);
          return !1;
        }),
      "access",
      (J) => J.join,
      "call",
      (J) => J("/"),
    ]);
  }
  Ks0.Express = lH1;
  Ks0.extractOriginalRoute = Fs0;
  Ks0.preventDuplicateSegments = Vs0;
});
var Ds0 = U((zs0) => {
  var { _optionalChain: _i } = LA();
  Object.defineProperty(zs0, "__esModule", { value: !0 });
  var xi = LA(),
    Va1 = aK(),
    IbQ = Gk();
  class pH1 {
    static __initStatic() {
      this.id = "Postgres";
    }
    constructor(A = {}) {
      ((this.name = pH1.id), (this._usePgNative = !!A.usePgNative), (this._module = A.module));
    }
    loadDependency() {
      return (this._module = this._module || xi.loadModule("pg"));
    }
    setupOnce(A, B) {
      if (IbQ.shouldDisableAutoInstrumentation(B)) {
        Va1.DEBUG_BUILD && xi.logger.log("Postgres Integration is skipped because of instrumenter configuration.");
        return;
      }
      let Q = this.loadDependency();
      if (!Q) {
        Va1.DEBUG_BUILD && xi.logger.error("Postgres Integration was unable to require `pg` package.");
        return;
      }
      let Z = this._usePgNative ? _i([Q, "access", (G) => G.native, "optionalAccess", (G) => G.Client]) : Q.Client;
      if (!Z) {
        Va1.DEBUG_BUILD && xi.logger.error("Postgres Integration was unable to access 'pg-native' bindings.");
        return;
      }
      xi.fill(Z.prototype, "query", function (G) {
        return function (Y, I, W) {
          let X = B().getScope().getSpan(),
            F = { "db.system": "postgresql" };
          try {
            if (this.database) F["db.name"] = this.database;
            if (this.host) F["server.address"] = this.host;
            if (this.port) F["server.port"] = this.port;
            if (this.user) F["db.user"] = this.user;
          } catch (H) {}
          let V = _i([
            X,
            "optionalAccess",
            (H) => H.startChild,
            "call",
            (H) =>
              H({ description: typeof Y === "string" ? Y : Y.text, op: "db", origin: "auto.db.postgres", data: F }),
          ]);
          if (typeof W === "function")
            return G.call(this, Y, I, function (H, z) {
              (_i([V, "optionalAccess", (D) => D.end, "call", (D) => D()]), W(H, z));
            });
          if (typeof I === "function")
            return G.call(this, Y, function (H, z) {
              (_i([V, "optionalAccess", (D) => D.end, "call", (D) => D()]), I(H, z));
            });
          let K = typeof I !== "undefined" ? G.call(this, Y, I) : G.call(this, Y);
          if (xi.isThenable(K))
            return K.then((H) => {
              return (_i([V, "optionalAccess", (z) => z.end, "call", (z) => z()]), H);
            });
          return (_i([V, "optionalAccess", (H) => H.end, "call", (H) => H()]), K);
        };
      });
    }
  }
  pH1.__initStatic();
  zs0.Postgres = pH1;
});
var Us0 = U((Cs0) => {
  var { _optionalChain: JbQ } = LA();
  Object.defineProperty(Cs0, "__esModule", { value: !0 });
  var J91 = LA(),
    Ka1 = aK(),
    XbQ = Gk();
  class iH1 {
    static __initStatic() {
      this.id = "Mysql";
    }
    constructor() {
      this.name = iH1.id;
    }
    loadDependency() {
      return (this._module = this._module || J91.loadModule("mysql/lib/Connection.js"));
    }
    setupOnce(A, B) {
      if (XbQ.shouldDisableAutoInstrumentation(B)) {
        Ka1.DEBUG_BUILD && J91.logger.log("Mysql Integration is skipped because of instrumenter configuration.");
        return;
      }
      let Q = this.loadDependency();
      if (!Q) {
        Ka1.DEBUG_BUILD && J91.logger.error("Mysql Integration was unable to require `mysql` package.");
        return;
      }
      let Z = void 0;
      try {
        Q.prototype.connect = new Proxy(Q.prototype.connect, {
          apply(I, W, J) {
            if (!Z) Z = W.config;
            return I.apply(W, J);
          },
        });
      } catch (I) {
        Ka1.DEBUG_BUILD && J91.logger.error("Mysql Integration was unable to instrument `mysql` config.");
      }
      function G() {
        if (!Z) return {};
        return { "server.address": Z.host, "server.port": Z.port, "db.user": Z.user };
      }
      function Y(I) {
        if (!I) return;
        let W = G();
        (Object.keys(W).forEach((J) => {
          I.setAttribute(J, W[J]);
        }),
          I.end());
      }
      J91.fill(Q, "createQuery", function (I) {
        return function (W, J, X) {
          let V = B().getScope().getSpan(),
            K = JbQ([
              V,
              "optionalAccess",
              (z) => z.startChild,
              "call",
              (z) =>
                z({
                  description: typeof W === "string" ? W : W.sql,
                  op: "db",
                  origin: "auto.db.mysql",
                  data: { "db.system": "mysql" },
                }),
            ]);
          if (typeof X === "function")
            return I.call(this, W, J, function (z, D, C) {
              (Y(K), X(z, D, C));
            });
          if (typeof J === "function")
            return I.call(this, W, function (z, D, C) {
              (Y(K), J(z, D, C));
            });
          let H = I.call(this, W, J);
          return (
            H.on("end", () => {
              Y(K);
            }),
            H
          );
        };
      });
    }
  }
  iH1.__initStatic();
  Cs0.Mysql = iH1;
});
var qs0 = U((ws0) => {
  var { _optionalChain: Yk } = LA();
  Object.defineProperty(ws0, "__esModule", { value: !0 });
  var X91 = LA(),
    $s0 = aK(),
    VbQ = Gk(),
    KbQ = [
      "aggregate",
      "bulkWrite",
      "countDocuments",
      "createIndex",
      "createIndexes",
      "deleteMany",
      "deleteOne",
      "distinct",
      "drop",
      "dropIndex",
      "dropIndexes",
      "estimatedDocumentCount",
      "find",
      "findOne",
      "findOneAndDelete",
      "findOneAndReplace",
      "findOneAndUpdate",
      "indexes",
      "indexExists",
      "indexInformation",
      "initializeOrderedBulkOp",
      "insertMany",
      "insertOne",
      "isCapped",
      "mapReduce",
      "options",
      "parallelCollectionScan",
      "rename",
      "replaceOne",
      "stats",
      "updateMany",
      "updateOne",
    ],
    HbQ = {
      bulkWrite: ["operations"],
      countDocuments: ["query"],
      createIndex: ["fieldOrSpec"],
      createIndexes: ["indexSpecs"],
      deleteMany: ["filter"],
      deleteOne: ["filter"],
      distinct: ["key", "query"],
      dropIndex: ["indexName"],
      find: ["query"],
      findOne: ["query"],
      findOneAndDelete: ["filter"],
      findOneAndReplace: ["filter", "replacement"],
      findOneAndUpdate: ["filter", "update"],
      indexExists: ["indexes"],
      insertMany: ["docs"],
      insertOne: ["doc"],
      mapReduce: ["map", "reduce"],
      rename: ["newName"],
      replaceOne: ["filter", "doc"],
      updateMany: ["filter", "update"],
      updateOne: ["filter", "update"],
    };
  function zbQ(A) {
    return A && typeof A === "object" && A.once && typeof A.once === "function";
  }
  class nH1 {
    static __initStatic() {
      this.id = "Mongo";
    }
    constructor(A = {}) {
      ((this.name = nH1.id),
        (this._operations = Array.isArray(A.operations) ? A.operations : KbQ),
        (this._describeOperations = "describeOperations" in A ? A.describeOperations : !0),
        (this._useMongoose = !!A.useMongoose));
    }
    loadDependency() {
      let A = this._useMongoose ? "mongoose" : "mongodb";
      return (this._module = this._module || X91.loadModule(A));
    }
    setupOnce(A, B) {
      if (VbQ.shouldDisableAutoInstrumentation(B)) {
        $s0.DEBUG_BUILD && X91.logger.log("Mongo Integration is skipped because of instrumenter configuration.");
        return;
      }
      let Q = this.loadDependency();
      if (!Q) {
        let Z = this._useMongoose ? "mongoose" : "mongodb";
        $s0.DEBUG_BUILD && X91.logger.error(`Mongo Integration was unable to require \`${Z}\` package.`);
        return;
      }
      this._instrumentOperations(Q.Collection, this._operations, B);
    }
    _instrumentOperations(A, B, Q) {
      B.forEach((Z) => this._patchOperation(A, Z, Q));
    }
    _patchOperation(A, B, Q) {
      if (!(B in A.prototype)) return;
      let Z = this._getSpanContextFromOperationArguments.bind(this);
      X91.fill(A.prototype, B, function (G) {
        return function (...Y) {
          let I = Y[Y.length - 1],
            W = Q(),
            J = W.getScope(),
            X = W.getClient(),
            F = J.getSpan(),
            V = Yk([X, "optionalAccess", (H) => H.getOptions, "call", (H) => H(), "access", (H) => H.sendDefaultPii]);
          if (typeof I !== "function" || (B === "mapReduce" && Y.length === 2)) {
            let H = Yk([F, "optionalAccess", (D) => D.startChild, "call", (D) => D(Z(this, B, Y, V))]),
              z = G.call(this, ...Y);
            if (X91.isThenable(z))
              return z.then((D) => {
                return (Yk([H, "optionalAccess", (C) => C.end, "call", (C) => C()]), D);
              });
            else if (zbQ(z)) {
              let D = z;
              try {
                D.once("close", () => {
                  Yk([H, "optionalAccess", (C) => C.end, "call", (C) => C()]);
                });
              } catch (C) {
                Yk([H, "optionalAccess", (w) => w.end, "call", (w) => w()]);
              }
              return D;
            } else return (Yk([H, "optionalAccess", (D) => D.end, "call", (D) => D()]), z);
          }
          let K = Yk([F, "optionalAccess", (H) => H.startChild, "call", (H) => H(Z(this, B, Y.slice(0, -1)))]);
          return G.call(this, ...Y.slice(0, -1), function (H, z) {
            (Yk([K, "optionalAccess", (D) => D.end, "call", (D) => D()]), I(H, z));
          });
        };
      });
    }
    _getSpanContextFromOperationArguments(A, B, Q, Z = !1) {
      let G = {
          "db.system": "mongodb",
          "db.name": A.dbName,
          "db.operation": B,
          "db.mongodb.collection": A.collectionName,
        },
        Y = { op: "db", origin: "auto.db.mongo", description: B, data: G },
        I = HbQ[B],
        W = Array.isArray(this._describeOperations) ? this._describeOperations.includes(B) : this._describeOperations;
      if (!I || !W || !Z) return Y;
      try {
        if (B === "mapReduce") {
          let [J, X] = Q;
          ((G[I[0]] = typeof J === "string" ? J : J.name || "<anonymous>"),
            (G[I[1]] = typeof X === "string" ? X : X.name || "<anonymous>"));
        } else for (let J = 0; J < I.length; J++) G[`db.mongodb.${I[J]}`] = JSON.stringify(Q[J]);
      } catch (J) {}
      return Y;
    }
  }
  nH1.__initStatic();
  ws0.Mongo = nH1;
});
var Ls0 = U((Ns0) => {
  Object.defineProperty(Ns0, "__esModule", { value: !0 });
  var Ha1 = y9(),
    Es0 = LA(),
    CbQ = aK(),
    UbQ = Gk();
  function $bQ(A) {
    return !!A && !!A.$use;
  }
  class aH1 {
    static __initStatic() {
      this.id = "Prisma";
    }
    constructor(A = {}) {
      if (((this.name = aH1.id), $bQ(A.client) && !A.client._sentryInstrumented)) {
        Es0.addNonEnumerableProperty(A.client, "_sentryInstrumented", !0);
        let B = {};
        try {
          let Q = A.client._engineConfig;
          if (Q) {
            let { activeProvider: Z, clientVersion: G } = Q;
            if (Z) B["db.system"] = Z;
            if (G) B["db.prisma.version"] = G;
          }
        } catch (Q) {}
        A.client.$use((Q, Z) => {
          if (UbQ.shouldDisableAutoInstrumentation(Ha1.getCurrentHub)) return Z(Q);
          let { action: G, model: Y } = Q;
          return Ha1.startSpan(
            {
              name: Y ? `${Y} ${G}` : G,
              onlyIfParent: !0,
              op: "db.prisma",
              attributes: { [Ha1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.prisma" },
              data: { ...B, "db.operation": G },
            },
            () => Z(Q),
          );
        });
      } else
        CbQ.DEBUG_BUILD &&
          Es0.logger.warn("Unsupported Prisma client provided to PrismaIntegration. Provided client:", A.client);
    }
    setupOnce() {}
  }
  aH1.__initStatic();
  Ns0.Prisma = aH1;
});
var Rs0 = U((Os0) => {
  var { _optionalChain: vi } = LA();
  Object.defineProperty(Os0, "__esModule", { value: !0 });
  var F91 = LA(),
    Ms0 = aK(),
    qbQ = Gk();
  class sH1 {
    static __initStatic() {
      this.id = "GraphQL";
    }
    constructor() {
      this.name = sH1.id;
    }
    loadDependency() {
      return (this._module = this._module || F91.loadModule("graphql/execution/execute.js"));
    }
    setupOnce(A, B) {
      if (qbQ.shouldDisableAutoInstrumentation(B)) {
        Ms0.DEBUG_BUILD && F91.logger.log("GraphQL Integration is skipped because of instrumenter configuration.");
        return;
      }
      let Q = this.loadDependency();
      if (!Q) {
        Ms0.DEBUG_BUILD && F91.logger.error("GraphQL Integration was unable to require graphql/execution package.");
        return;
      }
      F91.fill(Q, "execute", function (Z) {
        return function (...G) {
          let Y = B().getScope(),
            I = Y.getSpan(),
            W = vi([
              I,
              "optionalAccess",
              (X) => X.startChild,
              "call",
              (X) => X({ description: "execute", op: "graphql.execute", origin: "auto.graphql.graphql" }),
            ]);
          vi([Y, "optionalAccess", (X) => X.setSpan, "call", (X) => X(W)]);
          let J = Z.call(this, ...G);
          if (F91.isThenable(J))
            return J.then((X) => {
              return (
                vi([W, "optionalAccess", (F) => F.end, "call", (F) => F()]),
                vi([Y, "optionalAccess", (F) => F.setSpan, "call", (F) => F(I)]),
                X
              );
            });
          return (
            vi([W, "optionalAccess", (X) => X.end, "call", (X) => X()]),
            vi([Y, "optionalAccess", (X) => X.setSpan, "call", (X) => X(I)]),
            J
          );
        };
      });
    }
  }
  sH1.__initStatic();
  Os0.GraphQL = sH1;
});
var js0 = U((Ps0) => {
  var { _optionalChain: za1 } = LA();
  Object.defineProperty(Ps0, "__esModule", { value: !0 });
  var JF = LA(),
    rH1 = aK(),
    NbQ = Gk();
  class oH1 {
    static __initStatic() {
      this.id = "Apollo";
    }
    constructor(A = { useNestjs: !1 }) {
      ((this.name = oH1.id), (this._useNest = !!A.useNestjs));
    }
    loadDependency() {
      if (this._useNest) this._module = this._module || JF.loadModule("@nestjs/graphql");
      else this._module = this._module || JF.loadModule("apollo-server-core");
      return this._module;
    }
    setupOnce(A, B) {
      if (NbQ.shouldDisableAutoInstrumentation(B)) {
        rH1.DEBUG_BUILD && JF.logger.log("Apollo Integration is skipped because of instrumenter configuration.");
        return;
      }
      if (this._useNest) {
        let Q = this.loadDependency();
        if (!Q) {
          rH1.DEBUG_BUILD &&
            JF.logger.error("Apollo-NestJS Integration was unable to require @nestjs/graphql package.");
          return;
        }
        JF.fill(Q.GraphQLFactory.prototype, "mergeWithSchema", function (Z) {
          return function (...G) {
            return (
              JF.fill(this.resolversExplorerService, "explore", function (Y) {
                return function () {
                  let I = JF.arrayify(Y.call(this));
                  return Ts0(I, B);
                };
              }),
              Z.call(this, ...G)
            );
          };
        });
      } else {
        let Q = this.loadDependency();
        if (!Q) {
          rH1.DEBUG_BUILD && JF.logger.error("Apollo Integration was unable to require apollo-server-core package.");
          return;
        }
        JF.fill(Q.ApolloServerBase.prototype, "constructSchema", function (Z) {
          return function () {
            if (!this.config.resolvers) {
              if (rH1.DEBUG_BUILD) {
                if (this.config.schema)
                  (JF.logger.warn(
                    "Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead.",
                  ),
                    JF.logger.warn());
                else if (this.config.modules)
                  JF.logger.warn(
                    "Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property.",
                  );
                JF.logger.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.");
              }
              return Z.call(this);
            }
            let G = JF.arrayify(this.config.resolvers);
            return ((this.config.resolvers = Ts0(G, B)), Z.call(this));
          };
        });
      }
    }
  }
  oH1.__initStatic();
  function Ts0(A, B) {
    return A.map((Q) => {
      return (
        Object.keys(Q).forEach((Z) => {
          Object.keys(Q[Z]).forEach((G) => {
            if (typeof Q[Z][G] !== "function") return;
            LbQ(Q, Z, G, B);
          });
        }),
        Q
      );
    });
  }
  function LbQ(A, B, Q, Z) {
    JF.fill(A[B], Q, function (G) {
      return function (...Y) {
        let W = Z().getScope().getSpan(),
          J = za1([
            W,
            "optionalAccess",
            (F) => F.startChild,
            "call",
            (F) => F({ description: `${B}.${Q}`, op: "graphql.resolve", origin: "auto.graphql.apollo" }),
          ]),
          X = G.call(this, ...Y);
        if (JF.isThenable(X))
          return X.then((F) => {
            return (za1([J, "optionalAccess", (V) => V.end, "call", (V) => V()]), F);
          });
        return (za1([J, "optionalAccess", (F) => F.end, "call", (F) => F()]), X);
      };
    });
  }
  Ps0.Apollo = oH1;
});
var ys0 = U((Ss0, Ik) => {
  Object.defineProperty(Ss0, "__esModule", { value: !0 });
  var Qg = LA(),
    ObQ = [
      () => {
        return new (Qg.dynamicRequire(Ik, "./apollo").Apollo)();
      },
      () => {
        return new (Qg.dynamicRequire(Ik, "./apollo").Apollo)({ useNestjs: !0 });
      },
      () => {
        return new (Qg.dynamicRequire(Ik, "./graphql").GraphQL)();
      },
      () => {
        return new (Qg.dynamicRequire(Ik, "./mongo").Mongo)();
      },
      () => {
        return new (Qg.dynamicRequire(Ik, "./mongo").Mongo)({ mongoose: !0 });
      },
      () => {
        return new (Qg.dynamicRequire(Ik, "./mysql").Mysql)();
      },
      () => {
        return new (Qg.dynamicRequire(Ik, "./postgres").Postgres)();
      },
    ];
  Ss0.lazyLoadedNodePerformanceMonitoringIntegrations = ObQ;
});
var Mz = U((ks0) => {
  Object.defineProperty(ks0, "__esModule", { value: !0 });
  var TbQ = LA(),
    PbQ = TbQ.GLOBAL_OBJ;
  ks0.WINDOW = PbQ;
});
var Ca1 = U((bs0) => {
  Object.defineProperty(bs0, "__esModule", { value: !0 });
  var _s0 = y9(),
    xs0 = LA(),
    vs0 = aK(),
    Da1 = Mz();
  function SbQ() {
    if (Da1.WINDOW.document)
      Da1.WINDOW.document.addEventListener("visibilitychange", () => {
        let A = _s0.getActiveTransaction();
        if (Da1.WINDOW.document.hidden && A) {
          let { op: Q, status: Z } = _s0.spanToJSON(A);
          if (
            (vs0.DEBUG_BUILD &&
              xs0.logger.log(`[Tracing] Transaction: cancelled -> since tab moved to the background, op: ${Q}`),
            !Z)
          )
            A.setStatus("cancelled");
          (A.setTag("visibilitychange", "document.hidden"), A.end());
        }
      });
    else
      vs0.DEBUG_BUILD &&
        xs0.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
  bs0.registerBackgroundTabDetection = SbQ;
});
var bi = U((fs0) => {
  Object.defineProperty(fs0, "__esModule", { value: !0 });
  var kbQ = (A, B, Q) => {
    let Z, G;
    return (Y) => {
      if (B.value >= 0) {
        if (Y || Q) {
          if (((G = B.value - (Z || 0)), G || Z === void 0)) ((Z = B.value), (B.delta = G), A(B));
        }
      }
    };
  };
  fs0.bindReporter = kbQ;
});
var gs0 = U((hs0) => {
  Object.defineProperty(hs0, "__esModule", { value: !0 });
  var xbQ = () => {
    return `v3-${Date.now()}-${Math.floor(Math.random() * 8999999999999) + 1000000000000}`;
  };
  hs0.generateUniqueID = xbQ;
});
var K91 = U((us0) => {
  Object.defineProperty(us0, "__esModule", { value: !0 });
  var V91 = Mz(),
    bbQ = () => {
      let A = V91.WINDOW.performance.timing,
        B = V91.WINDOW.performance.navigation.type,
        Q = { entryType: "navigation", startTime: 0, type: B == 2 ? "back_forward" : B === 1 ? "reload" : "navigate" };
      for (let Z in A) if (Z !== "navigationStart" && Z !== "toJSON") Q[Z] = Math.max(A[Z] - A.navigationStart, 0);
      return Q;
    },
    fbQ = () => {
      if (V91.WINDOW.__WEB_VITALS_POLYFILL__)
        return (
          V91.WINDOW.performance &&
          ((performance.getEntriesByType && performance.getEntriesByType("navigation")[0]) || bbQ())
        );
      else
        return V91.WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    };
  us0.getNavigationEntry = fbQ;
});
var tH1 = U((ms0) => {
  Object.defineProperty(ms0, "__esModule", { value: !0 });
  var gbQ = K91(),
    ubQ = () => {
      let A = gbQ.getNavigationEntry();
      return (A && A.activationStart) || 0;
    };
  ms0.getActivationStart = ubQ;
});
var fi = U((cs0) => {
  Object.defineProperty(cs0, "__esModule", { value: !0 });
  var ds0 = Mz(),
    dbQ = gs0(),
    cbQ = tH1(),
    lbQ = K91(),
    pbQ = (A, B) => {
      let Q = lbQ.getNavigationEntry(),
        Z = "navigate";
      if (Q)
        if ((ds0.WINDOW.document && ds0.WINDOW.document.prerendering) || cbQ.getActivationStart() > 0) Z = "prerender";
        else Z = Q.type.replace(/_/g, "-");
      return {
        name: A,
        value: typeof B === "undefined" ? -1 : B,
        rating: "good",
        delta: 0,
        entries: [],
        id: dbQ.generateUniqueID(),
        navigationType: Z,
      };
    };
  cs0.initMetric = pbQ;
});
var Zg = U((ls0) => {
  Object.defineProperty(ls0, "__esModule", { value: !0 });
  var nbQ = (A, B, Q) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(A)) {
        let Z = new PerformanceObserver((G) => {
          B(G.getEntries());
        });
        return (Z.observe(Object.assign({ type: A, buffered: !0 }, Q || {})), Z);
      }
    } catch (Z) {}
    return;
  };
  ls0.observe = nbQ;
});
var hi = U((is0) => {
  Object.defineProperty(is0, "__esModule", { value: !0 });
  var ps0 = Mz(),
    sbQ = (A, B) => {
      let Q = (Z) => {
        if (Z.type === "pagehide" || ps0.WINDOW.document.visibilityState === "hidden") {
          if ((A(Z), B)) (removeEventListener("visibilitychange", Q, !0), removeEventListener("pagehide", Q, !0));
        }
      };
      if (ps0.WINDOW.document) (addEventListener("visibilitychange", Q, !0), addEventListener("pagehide", Q, !0));
    };
  is0.onHidden = sbQ;
});
var as0 = U((ns0) => {
  Object.defineProperty(ns0, "__esModule", { value: !0 });
  var obQ = bi(),
    tbQ = fi(),
    ebQ = Zg(),
    AfQ = hi(),
    BfQ = (A, B = {}) => {
      let Q = tbQ.initMetric("CLS", 0),
        Z,
        G = 0,
        Y = [],
        I = (J) => {
          J.forEach((X) => {
            if (!X.hadRecentInput) {
              let F = Y[0],
                V = Y[Y.length - 1];
              if (G && Y.length !== 0 && X.startTime - V.startTime < 1000 && X.startTime - F.startTime < 5000)
                ((G += X.value), Y.push(X));
              else ((G = X.value), (Y = [X]));
              if (G > Q.value) {
                if (((Q.value = G), (Q.entries = Y), Z)) Z();
              }
            }
          });
        },
        W = ebQ.observe("layout-shift", I);
      if (W) {
        Z = obQ.bindReporter(A, Q, B.reportAllChanges);
        let J = () => {
          (I(W.takeRecords()), Z(!0));
        };
        return (AfQ.onHidden(J), J);
      }
      return;
    };
  ns0.onCLS = BfQ;
});
var Bz1 = U((ss0) => {
  Object.defineProperty(ss0, "__esModule", { value: !0 });
  var eH1 = Mz(),
    ZfQ = hi(),
    Az1 = -1,
    GfQ = () => {
      if (eH1.WINDOW.document && eH1.WINDOW.document.visibilityState)
        Az1 = eH1.WINDOW.document.visibilityState === "hidden" && !eH1.WINDOW.document.prerendering ? 0 : 1 / 0;
    },
    YfQ = () => {
      ZfQ.onHidden(({ timeStamp: A }) => {
        Az1 = A;
      }, !0);
    },
    IfQ = () => {
      if (Az1 < 0) (GfQ(), YfQ());
      return {
        get firstHiddenTime() {
          return Az1;
        },
      };
    };
  ss0.getVisibilityWatcher = IfQ;
});
var os0 = U((rs0) => {
  Object.defineProperty(rs0, "__esModule", { value: !0 });
  var JfQ = bi(),
    XfQ = Bz1(),
    FfQ = fi(),
    VfQ = Zg(),
    KfQ = hi(),
    HfQ = (A) => {
      let B = XfQ.getVisibilityWatcher(),
        Q = FfQ.initMetric("FID"),
        Z,
        G = (W) => {
          if (W.startTime < B.firstHiddenTime) ((Q.value = W.processingStart - W.startTime), Q.entries.push(W), Z(!0));
        },
        Y = (W) => {
          W.forEach(G);
        },
        I = VfQ.observe("first-input", Y);
      if (((Z = JfQ.bindReporter(A, Q)), I))
        KfQ.onHidden(() => {
          (Y(I.takeRecords()), I.disconnect());
        }, !0);
    };
  rs0.onFID = HfQ;
});
var Ar0 = U((es0) => {
  Object.defineProperty(es0, "__esModule", { value: !0 });
  var DfQ = Zg(),
    ts0 = 0,
    Ua1 = 1 / 0,
    Qz1 = 0,
    CfQ = (A) => {
      A.forEach((B) => {
        if (B.interactionId)
          ((Ua1 = Math.min(Ua1, B.interactionId)),
            (Qz1 = Math.max(Qz1, B.interactionId)),
            (ts0 = Qz1 ? (Qz1 - Ua1) / 7 + 1 : 0));
      });
    },
    $a1,
    UfQ = () => {
      return $a1 ? ts0 : performance.interactionCount || 0;
    },
    $fQ = () => {
      if ("interactionCount" in performance || $a1) return;
      $a1 = DfQ.observe("event", CfQ, { type: "event", buffered: !0, durationThreshold: 0 });
    };
  es0.getInteractionCount = UfQ;
  es0.initInteractionCountPolyfill = $fQ;
});
var Ir0 = U((Yr0) => {
  Object.defineProperty(Yr0, "__esModule", { value: !0 });
  var EfQ = bi(),
    NfQ = fi(),
    LfQ = Zg(),
    MfQ = hi(),
    Zr0 = Ar0(),
    Gr0 = () => {
      return Zr0.getInteractionCount();
    },
    Br0 = 10,
    KT = [],
    wa1 = {},
    Qr0 = (A) => {
      let B = KT[KT.length - 1],
        Q = wa1[A.interactionId];
      if (Q || KT.length < Br0 || A.duration > B.latency) {
        if (Q) (Q.entries.push(A), (Q.latency = Math.max(Q.latency, A.duration)));
        else {
          let Z = { id: A.interactionId, latency: A.duration, entries: [A] };
          ((wa1[Z.id] = Z), KT.push(Z));
        }
        (KT.sort((Z, G) => G.latency - Z.latency),
          KT.splice(Br0).forEach((Z) => {
            delete wa1[Z.id];
          }));
      }
    },
    OfQ = () => {
      let A = Math.min(KT.length - 1, Math.floor(Gr0() / 50));
      return KT[A];
    },
    RfQ = (A, B) => {
      ((B = B || {}), Zr0.initInteractionCountPolyfill());
      let Q = NfQ.initMetric("INP"),
        Z,
        G = (I) => {
          I.forEach((J) => {
            if (J.interactionId) Qr0(J);
            if (J.entryType === "first-input") {
              if (
                !KT.some((F) => {
                  return F.entries.some((V) => {
                    return J.duration === V.duration && J.startTime === V.startTime;
                  });
                })
              )
                Qr0(J);
            }
          });
          let W = OfQ();
          if (W && W.latency !== Q.value) ((Q.value = W.latency), (Q.entries = W.entries), Z());
        },
        Y = LfQ.observe("event", G, { durationThreshold: B.durationThreshold || 40 });
      if (((Z = EfQ.bindReporter(A, Q, B.reportAllChanges)), Y))
        (Y.observe({ type: "first-input", buffered: !0 }),
          MfQ.onHidden(() => {
            if ((G(Y.takeRecords()), Q.value < 0 && Gr0() > 0)) ((Q.value = 0), (Q.entries = []));
            Z(!0);
          }));
    };
  Yr0.onINP = RfQ;
});
var Xr0 = U((Jr0) => {
  Object.defineProperty(Jr0, "__esModule", { value: !0 });
  var PfQ = Mz(),
    jfQ = bi(),
    SfQ = tH1(),
    yfQ = Bz1(),
    kfQ = fi(),
    _fQ = Zg(),
    xfQ = hi(),
    Wr0 = {},
    vfQ = (A) => {
      let B = yfQ.getVisibilityWatcher(),
        Q = kfQ.initMetric("LCP"),
        Z,
        G = (I) => {
          let W = I[I.length - 1];
          if (W) {
            let J = Math.max(W.startTime - SfQ.getActivationStart(), 0);
            if (J < B.firstHiddenTime) ((Q.value = J), (Q.entries = [W]), Z());
          }
        },
        Y = _fQ.observe("largest-contentful-paint", G);
      if (Y) {
        Z = jfQ.bindReporter(A, Q);
        let I = () => {
          if (!Wr0[Q.id]) (G(Y.takeRecords()), Y.disconnect(), (Wr0[Q.id] = !0), Z(!0));
        };
        return (
          ["keydown", "click"].forEach((W) => {
            if (PfQ.WINDOW.document) addEventListener(W, I, { once: !0, capture: !0 });
          }),
          xfQ.onHidden(I, !0),
          I
        );
      }
      return;
    };
  Jr0.onLCP = vfQ;
});
var Vr0 = U((Fr0) => {
  Object.defineProperty(Fr0, "__esModule", { value: !0 });
  var qa1 = Mz(),
    ffQ = bi(),
    hfQ = tH1(),
    gfQ = K91(),
    ufQ = fi(),
    Ea1 = (A) => {
      if (!qa1.WINDOW.document) return;
      if (qa1.WINDOW.document.prerendering) addEventListener("prerenderingchange", () => Ea1(A), !0);
      else if (qa1.WINDOW.document.readyState !== "complete") addEventListener("load", () => Ea1(A), !0);
      else setTimeout(A, 0);
    },
    mfQ = (A, B) => {
      B = B || {};
      let Q = ufQ.initMetric("TTFB"),
        Z = ffQ.bindReporter(A, Q, B.reportAllChanges);
      Ea1(() => {
        let G = gfQ.getNavigationEntry();
        if (G) {
          if (
            ((Q.value = Math.max(G.responseStart - hfQ.getActivationStart(), 0)),
            Q.value < 0 || Q.value > performance.now())
          )
            return;
          ((Q.entries = [G]), Z(!0));
        }
      });
    };
  Fr0.onTTFB = mfQ;
});
var ui = U((qr0) => {
  Object.defineProperty(qr0, "__esModule", { value: !0 });
  var Kr0 = LA(),
    cfQ = aK(),
    lfQ = as0(),
    pfQ = os0(),
    ifQ = Ir0(),
    nfQ = Xr0(),
    afQ = Zg(),
    sfQ = Vr0(),
    H91 = {},
    Zz1 = {},
    Hr0,
    zr0,
    Dr0,
    Cr0,
    Ur0;
  function rfQ(A, B = !1) {
    return z91("cls", A, QhQ, Hr0, B);
  }
  function ofQ(A, B = !1) {
    return z91("lcp", A, GhQ, Dr0, B);
  }
  function tfQ(A) {
    return z91("ttfb", A, YhQ, Cr0);
  }
  function efQ(A) {
    return z91("fid", A, ZhQ, zr0);
  }
  function AhQ(A) {
    return z91("inp", A, IhQ, Ur0);
  }
  function BhQ(A, B) {
    if (($r0(A, B), !Zz1[A])) (WhQ(A), (Zz1[A] = !0));
    return wr0(A, B);
  }
  function gi(A, B) {
    let Q = H91[A];
    if (!Q || !Q.length) return;
    for (let Z of Q)
      try {
        Z(B);
      } catch (G) {
        cfQ.DEBUG_BUILD &&
          Kr0.logger.error(
            `Error while triggering instrumentation handler.
Type: ${A}
Name: ${Kr0.getFunctionName(Z)}
Error:`,
            G,
          );
      }
  }
  function QhQ() {
    return lfQ.onCLS(
      (A) => {
        (gi("cls", { metric: A }), (Hr0 = A));
      },
      { reportAllChanges: !0 },
    );
  }
  function ZhQ() {
    return pfQ.onFID((A) => {
      (gi("fid", { metric: A }), (zr0 = A));
    });
  }
  function GhQ() {
    return nfQ.onLCP((A) => {
      (gi("lcp", { metric: A }), (Dr0 = A));
    });
  }
  function YhQ() {
    return sfQ.onTTFB((A) => {
      (gi("ttfb", { metric: A }), (Cr0 = A));
    });
  }
  function IhQ() {
    return ifQ.onINP((A) => {
      (gi("inp", { metric: A }), (Ur0 = A));
    });
  }
  function z91(A, B, Q, Z, G = !1) {
    $r0(A, B);
    let Y;
    if (!Zz1[A]) ((Y = Q()), (Zz1[A] = !0));
    if (Z) B({ metric: Z });
    return wr0(A, B, G ? Y : void 0);
  }
  function WhQ(A) {
    let B = {};
    if (A === "event") B.durationThreshold = 0;
    afQ.observe(
      A,
      (Q) => {
        gi(A, { entries: Q });
      },
      B,
    );
  }
  function $r0(A, B) {
    ((H91[A] = H91[A] || []), H91[A].push(B));
  }
  function wr0(A, B, Q) {
    return () => {
      if (Q) Q();
      let Z = H91[A];
      if (!Z) return;
      let G = Z.indexOf(B);
      if (G !== -1) Z.splice(G, 1);
    };
  }
  qr0.addClsInstrumentationHandler = rfQ;
  qr0.addFidInstrumentationHandler = efQ;
  qr0.addInpInstrumentationHandler = AhQ;
  qr0.addLcpInstrumentationHandler = ofQ;
  qr0.addPerformanceInstrumentationHandler = BhQ;
  qr0.addTtfbInstrumentationHandler = tfQ;
});
var Nr0 = U((Er0) => {
  Object.defineProperty(Er0, "__esModule", { value: !0 });
  function zhQ(A) {
    return typeof A === "number" && isFinite(A);
  }
  function DhQ(A, { startTimestamp: B, ...Q }) {
    if (B && A.startTimestamp > B) A.startTimestamp = B;
    return A.startChild({ startTimestamp: B, ...Q });
  }
  Er0._startChild = DhQ;
  Er0.isMeasurementValue = zhQ;
});
var Ma1 = U((Tr0) => {
  Object.defineProperty(Tr0, "__esModule", { value: !0 });
  var HT = y9(),
    b7 = LA(),
    Oz = aK(),
    Gg = ui(),
    zT = Mz(),
    $hQ = Bz1(),
    DT = Nr0(),
    whQ = K91(),
    qhQ = 2147483647;
  function rI(A) {
    return A / 1000;
  }
  function La1() {
    return zT.WINDOW && zT.WINDOW.addEventListener && zT.WINDOW.performance;
  }
  var Lr0 = 0,
    yG = {},
    vN,
    D91;
  function EhQ() {
    let A = La1();
    if (A && b7.browserPerformanceTimeOrigin) {
      if (A.mark) zT.WINDOW.performance.mark("sentry-tracing-init");
      let B = ThQ(),
        Q = OhQ(),
        Z = RhQ(),
        G = PhQ();
      return () => {
        (B(), Q(), Z(), G());
      };
    }
    return () => {
      return;
    };
  }
  function NhQ() {
    Gg.addPerformanceInstrumentationHandler("longtask", ({ entries: A }) => {
      for (let B of A) {
        let Q = HT.getActiveTransaction();
        if (!Q) return;
        let Z = rI(b7.browserPerformanceTimeOrigin + B.startTime),
          G = rI(B.duration);
        Q.startChild({
          description: "Main UI thread blocked",
          op: "ui.long-task",
          origin: "auto.ui.browser.metrics",
          startTimestamp: Z,
          endTimestamp: Z + G,
        });
      }
    });
  }
  function LhQ() {
    Gg.addPerformanceInstrumentationHandler("event", ({ entries: A }) => {
      for (let B of A) {
        let Q = HT.getActiveTransaction();
        if (!Q) return;
        if (B.name === "click") {
          let Z = rI(b7.browserPerformanceTimeOrigin + B.startTime),
            G = rI(B.duration),
            Y = {
              description: b7.htmlTreeAsString(B.target),
              op: `ui.interaction.${B.name}`,
              origin: "auto.ui.browser.metrics",
              startTimestamp: Z,
              endTimestamp: Z + G,
            },
            I = b7.getComponentName(B.target);
          if (I) Y.attributes = { "ui.component_name": I };
          Q.startChild(Y);
        }
      }
    });
  }
  function MhQ(A, B) {
    if (La1() && b7.browserPerformanceTimeOrigin) {
      let Z = jhQ(A, B);
      return () => {
        Z();
      };
    }
    return () => {
      return;
    };
  }
  function OhQ() {
    return Gg.addClsInstrumentationHandler(({ metric: A }) => {
      let B = A.entries[A.entries.length - 1];
      if (!B) return;
      (Oz.DEBUG_BUILD && b7.logger.log("[Measurements] Adding CLS"),
        (yG.cls = { value: A.value, unit: "" }),
        (D91 = B));
    }, !0);
  }
  function RhQ() {
    return Gg.addLcpInstrumentationHandler(({ metric: A }) => {
      let B = A.entries[A.entries.length - 1];
      if (!B) return;
      (Oz.DEBUG_BUILD && b7.logger.log("[Measurements] Adding LCP"),
        (yG.lcp = { value: A.value, unit: "millisecond" }),
        (vN = B));
    }, !0);
  }
  function ThQ() {
    return Gg.addFidInstrumentationHandler(({ metric: A }) => {
      let B = A.entries[A.entries.length - 1];
      if (!B) return;
      let Q = rI(b7.browserPerformanceTimeOrigin),
        Z = rI(B.startTime);
      (Oz.DEBUG_BUILD && b7.logger.log("[Measurements] Adding FID"),
        (yG.fid = { value: A.value, unit: "millisecond" }),
        (yG["mark.fid"] = { value: Q + Z, unit: "second" }));
    });
  }
  function PhQ() {
    return Gg.addTtfbInstrumentationHandler(({ metric: A }) => {
      if (!A.entries[A.entries.length - 1]) return;
      (Oz.DEBUG_BUILD && b7.logger.log("[Measurements] Adding TTFB"),
        (yG.ttfb = { value: A.value, unit: "millisecond" }));
    });
  }
  var Mr0 = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press",
  };
  function jhQ(A, B) {
    return Gg.addInpInstrumentationHandler(({ metric: Q }) => {
      if (Q.value === void 0) return;
      let Z = Q.entries.find((L) => L.duration === Q.value && Mr0[L.name] !== void 0),
        G = HT.getClient();
      if (!Z || !G) return;
      let Y = Mr0[Z.name],
        I = G.getOptions(),
        W = rI(b7.browserPerformanceTimeOrigin + Z.startTime),
        J = rI(Q.value),
        X = Z.interactionId !== void 0 ? A[Z.interactionId] : void 0;
      if (X === void 0) return;
      let { routeName: F, parentContext: V, activeTransaction: K, user: H, replayId: z } = X,
        D = H !== void 0 ? H.email || H.id || H.ip_address : void 0,
        C = K !== void 0 ? K.getProfileId() : void 0,
        w = new HT.Span({
          startTimestamp: W,
          endTimestamp: W + J,
          op: `ui.interaction.${Y}`,
          name: b7.htmlTreeAsString(Z.target),
          attributes: {
            release: I.release,
            environment: I.environment,
            transaction: F,
            ...(D !== void 0 && D !== "" ? { user: D } : {}),
            ...(C !== void 0 ? { profile_id: C } : {}),
            ...(z !== void 0 ? { replay_id: z } : {}),
          },
          exclusiveTime: Q.value,
          measurements: { inp: { value: Q.value, unit: "millisecond" } },
        }),
        E = bhQ(V, I, B);
      if (!E) return;
      if (Math.random() < E) {
        let L = w ? HT.createSpanEnvelope([w], G.getDsn()) : void 0,
          O = G && G.getTransport();
        if (O && L)
          O.send(L).then(null, (R) => {
            Oz.DEBUG_BUILD && b7.logger.error("Error while sending interaction:", R);
          });
        return;
      }
    });
  }
  function ShQ(A) {
    let B = La1();
    if (!B || !zT.WINDOW.performance.getEntries || !b7.browserPerformanceTimeOrigin) return;
    Oz.DEBUG_BUILD && b7.logger.log("[Tracing] Adding & adjusting spans using Performance API");
    let Q = rI(b7.browserPerformanceTimeOrigin),
      Z = B.getEntries(),
      { op: G, start_timestamp: Y } = HT.spanToJSON(A);
    if (
      (Z.slice(Lr0).forEach((I) => {
        let W = rI(I.startTime),
          J = rI(I.duration);
        if (A.op === "navigation" && Y && Q + W < Y) return;
        switch (I.entryType) {
          case "navigation": {
            yhQ(A, I, Q);
            break;
          }
          case "mark":
          case "paint":
          case "measure": {
            Or0(A, I, W, J, Q);
            let X = $hQ.getVisibilityWatcher(),
              F = I.startTime < X.firstHiddenTime;
            if (I.name === "first-paint" && F)
              (Oz.DEBUG_BUILD && b7.logger.log("[Measurements] Adding FP"),
                (yG.fp = { value: I.startTime, unit: "millisecond" }));
            if (I.name === "first-contentful-paint" && F)
              (Oz.DEBUG_BUILD && b7.logger.log("[Measurements] Adding FCP"),
                (yG.fcp = { value: I.startTime, unit: "millisecond" }));
            break;
          }
          case "resource": {
            Rr0(A, I, I.name, W, J, Q);
            break;
          }
        }
      }),
      (Lr0 = Math.max(Z.length - 1, 0)),
      _hQ(A),
      G === "pageload")
    ) {
      (vhQ(yG),
        ["fcp", "fp", "lcp"].forEach((W) => {
          if (!yG[W] || !Y || Q >= Y) return;
          let J = yG[W].value,
            X = Q + rI(J),
            F = Math.abs((X - Y) * 1000),
            V = F - J;
          (Oz.DEBUG_BUILD && b7.logger.log(`[Measurements] Normalized ${W} from ${J} to ${F} (${V})`),
            (yG[W].value = F));
        }));
      let I = yG["mark.fid"];
      if (I && yG.fid)
        (DT._startChild(A, {
          description: "first input delay",
          endTimestamp: I.value + rI(yG.fid.value),
          op: "ui.action",
          origin: "auto.ui.browser.metrics",
          startTimestamp: I.value,
        }),
          delete yG["mark.fid"]);
      if (!("fcp" in yG)) delete yG.cls;
      (Object.keys(yG).forEach((W) => {
        HT.setMeasurement(W, yG[W].value, yG[W].unit);
      }),
        xhQ(A));
    }
    ((vN = void 0), (D91 = void 0), (yG = {}));
  }
  function Or0(A, B, Q, Z, G) {
    let Y = G + Q,
      I = Y + Z;
    return (
      DT._startChild(A, {
        description: B.name,
        endTimestamp: I,
        op: B.entryType,
        origin: "auto.resource.browser.metrics",
        startTimestamp: Y,
      }),
      Y
    );
  }
  function yhQ(A, B, Q) {
    (["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((Z) => {
      Gz1(A, B, Z, Q);
    }),
      Gz1(A, B, "secureConnection", Q, "TLS/SSL", "connectEnd"),
      Gz1(A, B, "fetch", Q, "cache", "domainLookupStart"),
      Gz1(A, B, "domainLookup", Q, "DNS"),
      khQ(A, B, Q));
  }
  function Gz1(A, B, Q, Z, G, Y) {
    let I = Y ? B[Y] : B[`${Q}End`],
      W = B[`${Q}Start`];
    if (!W || !I) return;
    DT._startChild(A, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: G || Q,
      startTimestamp: Z + rI(W),
      endTimestamp: Z + rI(I),
    });
  }
  function khQ(A, B, Q) {
    if (B.responseEnd)
      (DT._startChild(A, {
        op: "browser",
        origin: "auto.browser.browser.metrics",
        description: "request",
        startTimestamp: Q + rI(B.requestStart),
        endTimestamp: Q + rI(B.responseEnd),
      }),
        DT._startChild(A, {
          op: "browser",
          origin: "auto.browser.browser.metrics",
          description: "response",
          startTimestamp: Q + rI(B.responseStart),
          endTimestamp: Q + rI(B.responseEnd),
        }));
  }
  function Rr0(A, B, Q, Z, G, Y) {
    if (B.initiatorType === "xmlhttprequest" || B.initiatorType === "fetch") return;
    let I = b7.parseUrl(Q),
      W = {};
    if (
      (Na1(W, B, "transferSize", "http.response_transfer_size"),
      Na1(W, B, "encodedBodySize", "http.response_content_length"),
      Na1(W, B, "decodedBodySize", "http.decoded_response_content_length"),
      "renderBlockingStatus" in B)
    )
      W["resource.render_blocking_status"] = B.renderBlockingStatus;
    if (I.protocol) W["url.scheme"] = I.protocol.split(":").pop();
    if (I.host) W["server.address"] = I.host;
    W["url.same_origin"] = Q.includes(zT.WINDOW.location.origin);
    let J = Y + Z,
      X = J + G;
    DT._startChild(A, {
      description: Q.replace(zT.WINDOW.location.origin, ""),
      endTimestamp: X,
      op: B.initiatorType ? `resource.${B.initiatorType}` : "resource.other",
      origin: "auto.resource.browser.metrics",
      startTimestamp: J,
      data: W,
    });
  }
  function _hQ(A) {
    let B = zT.WINDOW.navigator;
    if (!B) return;
    let Q = B.connection;
    if (Q) {
      if (Q.effectiveType) A.setTag("effectiveConnectionType", Q.effectiveType);
      if (Q.type) A.setTag("connectionType", Q.type);
      if (DT.isMeasurementValue(Q.rtt)) yG["connection.rtt"] = { value: Q.rtt, unit: "millisecond" };
    }
    if (DT.isMeasurementValue(B.deviceMemory)) A.setTag("deviceMemory", `${B.deviceMemory} GB`);
    if (DT.isMeasurementValue(B.hardwareConcurrency)) A.setTag("hardwareConcurrency", String(B.hardwareConcurrency));
  }
  function xhQ(A) {
    if (vN) {
      if ((Oz.DEBUG_BUILD && b7.logger.log("[Measurements] Adding LCP Data"), vN.element))
        A.setTag("lcp.element", b7.htmlTreeAsString(vN.element));
      if (vN.id) A.setTag("lcp.id", vN.id);
      if (vN.url) A.setTag("lcp.url", vN.url.trim().slice(0, 200));
      A.setTag("lcp.size", vN.size);
    }
    if (D91 && D91.sources)
      (Oz.DEBUG_BUILD && b7.logger.log("[Measurements] Adding CLS Data"),
        D91.sources.forEach((B, Q) => A.setTag(`cls.source.${Q + 1}`, b7.htmlTreeAsString(B.node))));
  }
  function Na1(A, B, Q, Z) {
    let G = B[Q];
    if (G != null && G < qhQ) A[Z] = G;
  }
  function vhQ(A) {
    let B = whQ.getNavigationEntry();
    if (!B) return;
    let { responseStart: Q, requestStart: Z } = B;
    if (Z <= Q)
      (Oz.DEBUG_BUILD && b7.logger.log("[Measurements] Adding TTFB Request Time"),
        (A["ttfb.requestTime"] = { value: Q - Z, unit: "millisecond" }));
  }
  function bhQ(A, B, Q) {
    if (!HT.hasTracingEnabled(B)) return !1;
    let Z;
    if (A !== void 0 && typeof B.tracesSampler === "function")
      Z = B.tracesSampler({
        transactionContext: A,
        name: A.name,
        parentSampled: A.parentSampled,
        attributes: { ...A.data, ...A.attributes },
        location: zT.WINDOW.location,
      });
    else if (A !== void 0 && A.sampled !== void 0) Z = A.sampled;
    else if (typeof B.tracesSampleRate !== "undefined") Z = B.tracesSampleRate;
    else Z = 1;
    if (!HT.isValidSampleRate(Z))
      return (
        Oz.DEBUG_BUILD && b7.logger.warn("[Tracing] Discarding interaction span because of invalid sample rate."),
        !1
      );
    if (Z === !0) return Q;
    else if (Z === !1) return 0;
    return Z * Q;
  }
  Tr0._addMeasureSpans = Or0;
  Tr0._addResourceSpans = Rr0;
  Tr0.addPerformanceEntries = ShQ;
  Tr0.startTrackingINP = MhQ;
  Tr0.startTrackingInteractions = LhQ;
  Tr0.startTrackingLongTasks = NhQ;
  Tr0.startTrackingWebVitals = EhQ;
});
var Oa1 = U((jr0) => {
  Object.defineProperty(jr0, "__esModule", { value: !0 });
  var bN = y9(),
    Yg = LA();
  function lhQ(A, B, Q, Z, G = "auto.http.browser") {
    if (!bN.hasTracingEnabled() || !A.fetchData) return;
    let Y = B(A.fetchData.url);
    if (A.endTimestamp && Y) {
      let H = A.fetchData.__span;
      if (!H) return;
      let z = Z[H];
      if (z) (ihQ(z, A), delete Z[H]);
      return;
    }
    let I = bN.getCurrentScope(),
      W = bN.getClient(),
      { method: J, url: X } = A.fetchData,
      F = phQ(X),
      V = F ? Yg.parseUrl(F).host : void 0,
      K = Y
        ? bN.startInactiveSpan({
            name: `${J} ${X}`,
            onlyIfParent: !0,
            attributes: {
              url: X,
              type: "fetch",
              "http.method": J,
              "http.url": F,
              "server.address": V,
              [bN.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: G,
            },
            op: "http.client",
          })
        : void 0;
    if (K) ((A.fetchData.__span = K.spanContext().spanId), (Z[K.spanContext().spanId] = K));
    if (Q(A.fetchData.url) && W) {
      let H = A.args[0];
      A.args[1] = A.args[1] || {};
      let z = A.args[1];
      z.headers = Pr0(H, W, I, z, K);
    }
    return K;
  }
  function Pr0(A, B, Q, Z, G) {
    let Y = G || Q.getSpan(),
      I = bN.getIsolationScope(),
      { traceId: W, spanId: J, sampled: X, dsc: F } = { ...I.getPropagationContext(), ...Q.getPropagationContext() },
      V = Y ? bN.spanToTraceHeader(Y) : Yg.generateSentryTraceHeader(W, J, X),
      K = Yg.dynamicSamplingContextToSentryBaggageHeader(
        F || (Y ? bN.getDynamicSamplingContextFromSpan(Y) : bN.getDynamicSamplingContextFromClient(W, B, Q)),
      ),
      H = Z.headers || (typeof Request !== "undefined" && Yg.isInstanceOf(A, Request) ? A.headers : void 0);
    if (!H) return { "sentry-trace": V, baggage: K };
    else if (typeof Headers !== "undefined" && Yg.isInstanceOf(H, Headers)) {
      let z = new Headers(H);
      if ((z.append("sentry-trace", V), K)) z.append(Yg.BAGGAGE_HEADER_NAME, K);
      return z;
    } else if (Array.isArray(H)) {
      let z = [...H, ["sentry-trace", V]];
      if (K) z.push([Yg.BAGGAGE_HEADER_NAME, K]);
      return z;
    } else {
      let z = "baggage" in H ? H.baggage : void 0,
        D = [];
      if (Array.isArray(z)) D.push(...z);
      else if (z) D.push(z);
      if (K) D.push(K);
      return { ...H, "sentry-trace": V, baggage: D.length > 0 ? D.join(",") : void 0 };
    }
  }
  function phQ(A) {
    try {
      return new URL(A).href;
    } catch (B) {
      return;
    }
  }
  function ihQ(A, B) {
    if (B.response) {
      bN.setHttpStatus(A, B.response.status);
      let Q = B.response && B.response.headers && B.response.headers.get("content-length");
      if (Q) {
        let Z = parseInt(Q);
        if (Z > 0) A.setAttribute("http.response_content_length", Z);
      }
    } else if (B.error) A.setStatus("internal_error");
    A.end();
  }
  jr0.addTracingHeadersToFetchRequest = Pr0;
  jr0.instrumentFetchRequest = lhQ;
});
var Iz1 = U((vr0) => {
  Object.defineProperty(vr0, "__esModule", { value: !0 });
  var gw = y9(),
    uw = LA(),
    shQ = Oa1(),
    rhQ = ui(),
    ohQ = Mz(),
    Yz1 = ["localhost", /^\/(?!\/)/],
    Ra1 = { traceFetch: !0, traceXHR: !0, enableHTTPTimings: !0, tracingOrigins: Yz1, tracePropagationTargets: Yz1 };
  function thQ(A) {
    let {
        traceFetch: B,
        traceXHR: Q,
        tracePropagationTargets: Z,
        tracingOrigins: G,
        shouldCreateSpanForRequest: Y,
        enableHTTPTimings: I,
      } = { traceFetch: Ra1.traceFetch, traceXHR: Ra1.traceXHR, ...A },
      W = typeof Y === "function" ? Y : (F) => !0,
      J = (F) => kr0(F, Z || G),
      X = {};
    if (B)
      uw.addFetchInstrumentationHandler((F) => {
        let V = shQ.instrumentFetchRequest(F, W, J, X);
        if (V) {
          let K = xr0(F.fetchData.url),
            H = K ? uw.parseUrl(K).host : void 0;
          V.setAttributes({ "http.url": K, "server.address": H });
        }
        if (I && V) Sr0(V);
      });
    if (Q)
      uw.addXhrInstrumentationHandler((F) => {
        let V = _r0(F, W, J, X);
        if (I && V) Sr0(V);
      });
  }
  function ehQ(A) {
    return (
      A.entryType === "resource" &&
      "initiatorType" in A &&
      typeof A.nextHopProtocol === "string" &&
      (A.initiatorType === "fetch" || A.initiatorType === "xmlhttprequest")
    );
  }
  function Sr0(A) {
    let { url: B } = gw.spanToJSON(A).data || {};
    if (!B || typeof B !== "string") return;
    let Q = rhQ.addPerformanceInstrumentationHandler("resource", ({ entries: Z }) => {
      Z.forEach((G) => {
        if (ehQ(G) && G.name.endsWith(B)) (AgQ(G).forEach((I) => A.setAttribute(...I)), setTimeout(Q));
      });
    });
  }
  function yr0(A) {
    let B = "unknown",
      Q = "unknown",
      Z = "";
    for (let G of A) {
      if (G === "/") {
        [B, Q] = A.split("/");
        break;
      }
      if (!isNaN(Number(G))) {
        ((B = Z === "h" ? "http" : Z), (Q = A.split(Z)[1]));
        break;
      }
      Z += G;
    }
    if (Z === A) B = Z;
    return { name: B, version: Q };
  }
  function fN(A = 0) {
    return ((uw.browserPerformanceTimeOrigin || performance.timeOrigin) + A) / 1000;
  }
  function AgQ(A) {
    let { name: B, version: Q } = yr0(A.nextHopProtocol),
      Z = [];
    if ((Z.push(["network.protocol.version", Q], ["network.protocol.name", B]), !uw.browserPerformanceTimeOrigin))
      return Z;
    return [
      ...Z,
      ["http.request.redirect_start", fN(A.redirectStart)],
      ["http.request.fetch_start", fN(A.fetchStart)],
      ["http.request.domain_lookup_start", fN(A.domainLookupStart)],
      ["http.request.domain_lookup_end", fN(A.domainLookupEnd)],
      ["http.request.connect_start", fN(A.connectStart)],
      ["http.request.secure_connection_start", fN(A.secureConnectionStart)],
      ["http.request.connection_end", fN(A.connectEnd)],
      ["http.request.request_start", fN(A.requestStart)],
      ["http.request.response_start", fN(A.responseStart)],
      ["http.request.response_end", fN(A.responseEnd)],
    ];
  }
  function kr0(A, B) {
    return uw.stringMatchesSomePattern(A, B || Yz1);
  }
  function _r0(A, B, Q, Z) {
    let G = A.xhr,
      Y = G && G[uw.SENTRY_XHR_DATA_KEY];
    if (!gw.hasTracingEnabled() || !G || G.__sentry_own_request__ || !Y) return;
    let I = B(Y.url);
    if (A.endTimestamp && I) {
      let H = G.__sentry_xhr_span_id__;
      if (!H) return;
      let z = Z[H];
      if (z && Y.status_code !== void 0) (gw.setHttpStatus(z, Y.status_code), z.end(), delete Z[H]);
      return;
    }
    let W = gw.getCurrentScope(),
      J = gw.getIsolationScope(),
      X = xr0(Y.url),
      F = X ? uw.parseUrl(X).host : void 0,
      V = I
        ? gw.startInactiveSpan({
            name: `${Y.method} ${Y.url}`,
            onlyIfParent: !0,
            attributes: {
              type: "xhr",
              "http.method": Y.method,
              "http.url": X,
              url: Y.url,
              "server.address": F,
              [gw.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser",
            },
            op: "http.client",
          })
        : void 0;
    if (V) ((G.__sentry_xhr_span_id__ = V.spanContext().spanId), (Z[G.__sentry_xhr_span_id__] = V));
    let K = gw.getClient();
    if (G.setRequestHeader && Q(Y.url) && K) {
      let {
          traceId: H,
          spanId: z,
          sampled: D,
          dsc: C,
        } = { ...J.getPropagationContext(), ...W.getPropagationContext() },
        w = V ? gw.spanToTraceHeader(V) : uw.generateSentryTraceHeader(H, z, D),
        E = uw.dynamicSamplingContextToSentryBaggageHeader(
          C || (V ? gw.getDynamicSamplingContextFromSpan(V) : gw.getDynamicSamplingContextFromClient(H, K, W)),
        );
      BgQ(G, w, E);
    }
    return V;
  }
  function BgQ(A, B, Q) {
    try {
      if ((A.setRequestHeader("sentry-trace", B), Q)) A.setRequestHeader(uw.BAGGAGE_HEADER_NAME, Q);
    } catch (Z) {}
  }
  function xr0(A) {
    try {
      return new URL(A, ohQ.WINDOW.location.origin).href;
    } catch (B) {
      return;
    }
  }
  vr0.DEFAULT_TRACE_PROPAGATION_TARGETS = Yz1;
  vr0.defaultRequestInstrumentationOptions = Ra1;
  vr0.extractNetworkProtocol = yr0;
  vr0.instrumentOutgoingRequests = thQ;
  vr0.shouldAttachHeaders = kr0;
  vr0.xhrCallback = _r0;
});
var hr0 = U((fr0) => {
  Object.defineProperty(fr0, "__esModule", { value: !0 });
  var C91 = LA(),
    br0 = aK(),
    U91 = Mz();
  function JgQ(A, B = !0, Q = !0) {
    if (!U91.WINDOW || !U91.WINDOW.location) {
      br0.DEBUG_BUILD && C91.logger.warn("Could not initialize routing instrumentation due to invalid location");
      return;
    }
    let Z = U91.WINDOW.location.href,
      G;
    if (B)
      G = A({
        name: U91.WINDOW.location.pathname,
        startTimestamp: C91.browserPerformanceTimeOrigin ? C91.browserPerformanceTimeOrigin / 1000 : void 0,
        op: "pageload",
        origin: "auto.pageload.browser",
        metadata: { source: "url" },
      });
    if (Q)
      C91.addHistoryInstrumentationHandler(({ to: Y, from: I }) => {
        if (I === void 0 && Z && Z.indexOf(Y) !== -1) {
          Z = void 0;
          return;
        }
        if (I !== Y) {
          if (((Z = void 0), G))
            (br0.DEBUG_BUILD && C91.logger.log(`[Tracing] Finishing current transaction with op: ${G.op}`), G.end());
          G = A({
            name: U91.WINDOW.location.pathname,
            op: "navigation",
            origin: "auto.navigation.browser",
            metadata: { source: "url" },
          });
        }
      });
  }
  fr0.instrumentRoutingWithDefaults = JgQ;
});
var pr0 = U((lr0) => {
  Object.defineProperty(lr0, "__esModule", { value: !0 });
  var mw = y9(),
    CT = LA(),
    Wk = aK(),
    FgQ = Ca1(),
    gr0 = ui(),
    $91 = Ma1(),
    mr0 = Iz1(),
    VgQ = hr0(),
    Ig = Mz(),
    dr0 = "BrowserTracing",
    KgQ = {
      ...mw.TRACING_DEFAULTS,
      markBackgroundTransactions: !0,
      routingInstrumentation: VgQ.instrumentRoutingWithDefaults,
      startTransactionOnLocationChange: !0,
      startTransactionOnPageLoad: !0,
      enableLongTask: !0,
      enableInp: !1,
      interactionsSampleRate: 1,
      _experiments: {},
      ...mr0.defaultRequestInstrumentationOptions,
    },
    ur0 = 10;
  class cr0 {
    constructor(A) {
      if (((this.name = dr0), (this._hasSetTracePropagationTargets = !1), mw.addTracingExtensions(), Wk.DEBUG_BUILD))
        this._hasSetTracePropagationTargets = !!(A && (A.tracePropagationTargets || A.tracingOrigins));
      if (((this.options = { ...KgQ, ...A }), this.options._experiments.enableLongTask !== void 0))
        this.options.enableLongTask = this.options._experiments.enableLongTask;
      if (A && !A.tracePropagationTargets && A.tracingOrigins) this.options.tracePropagationTargets = A.tracingOrigins;
      if (
        ((this._collectWebVitals = $91.startTrackingWebVitals()),
        (this._interactionIdToRouteNameMapping = {}),
        this.options.enableInp)
      )
        $91.startTrackingINP(this._interactionIdToRouteNameMapping, this.options.interactionsSampleRate);
      if (this.options.enableLongTask) $91.startTrackingLongTasks();
      if (this.options._experiments.enableInteractions) $91.startTrackingInteractions();
      this._latestRoute = { name: void 0, context: void 0 };
    }
    setupOnce(A, B) {
      this._getCurrentHub = B;
      let Z = B().getClient(),
        G = Z && Z.getOptions(),
        {
          routingInstrumentation: Y,
          startTransactionOnLocationChange: I,
          startTransactionOnPageLoad: W,
          markBackgroundTransactions: J,
          traceFetch: X,
          traceXHR: F,
          shouldCreateSpanForRequest: V,
          enableHTTPTimings: K,
          _experiments: H,
        } = this.options,
        z = G && G.tracePropagationTargets,
        D = z || this.options.tracePropagationTargets;
      if (Wk.DEBUG_BUILD && this._hasSetTracePropagationTargets && z)
        CT.logger.warn(
          "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.",
        );
      if (
        (Y(
          (C) => {
            let w = this._createRouteTransaction(C);
            return (
              this.options._experiments.onStartRouteTransaction &&
                this.options._experiments.onStartRouteTransaction(w, C, B),
              w
            );
          },
          W,
          I,
        ),
        J)
      )
        FgQ.registerBackgroundTabDetection();
      if (H.enableInteractions) this._registerInteractionListener();
      if (this.options.enableInp) this._registerInpInteractionListener();
      mr0.instrumentOutgoingRequests({
        traceFetch: X,
        traceXHR: F,
        tracePropagationTargets: D,
        shouldCreateSpanForRequest: V,
        enableHTTPTimings: K,
      });
    }
    _createRouteTransaction(A) {
      if (!this._getCurrentHub) {
        Wk.DEBUG_BUILD &&
          CT.logger.warn(`[Tracing] Did not create ${A.op} transaction because _getCurrentHub is invalid.`);
        return;
      }
      let B = this._getCurrentHub(),
        { beforeNavigate: Q, idleTimeout: Z, finalTimeout: G, heartbeatInterval: Y } = this.options,
        I = A.op === "pageload",
        W;
      if (I) {
        let K = I ? Ta1("sentry-trace") : "",
          H = I ? Ta1("baggage") : void 0,
          { traceId: z, dsc: D, parentSpanId: C, sampled: w } = CT.propagationContextFromHeaders(K, H);
        W = {
          traceId: z,
          parentSpanId: C,
          parentSampled: w,
          ...A,
          metadata: { ...A.metadata, dynamicSamplingContext: D },
          trimEnd: !0,
        };
      } else W = { trimEnd: !0, ...A };
      let J = typeof Q === "function" ? Q(W) : W,
        X = J === void 0 ? { ...W, sampled: !1 } : J;
      if (
        ((X.metadata = X.name !== W.name ? { ...X.metadata, source: "custom" } : X.metadata),
        (this._latestRoute.name = X.name),
        (this._latestRoute.context = X),
        X.sampled === !1)
      )
        Wk.DEBUG_BUILD && CT.logger.log(`[Tracing] Will not send ${X.op} transaction because of beforeNavigate.`);
      Wk.DEBUG_BUILD && CT.logger.log(`[Tracing] Starting ${X.op} transaction on scope`);
      let { location: F } = Ig.WINDOW,
        V = mw.startIdleTransaction(B, X, Z, G, !0, { location: F }, Y, I);
      if (I) {
        if (Ig.WINDOW.document) {
          if (
            (Ig.WINDOW.document.addEventListener("readystatechange", () => {
              if (["interactive", "complete"].includes(Ig.WINDOW.document.readyState)) V.sendAutoFinishSignal();
            }),
            ["interactive", "complete"].includes(Ig.WINDOW.document.readyState))
          )
            V.sendAutoFinishSignal();
        }
      }
      return (
        V.registerBeforeFinishCallback((K) => {
          (this._collectWebVitals(), $91.addPerformanceEntries(K));
        }),
        V
      );
    }
    _registerInteractionListener() {
      let A,
        B = () => {
          let { idleTimeout: Q, finalTimeout: Z, heartbeatInterval: G } = this.options,
            Y = "ui.action.click",
            I = mw.getActiveTransaction();
          if (I && I.op && ["navigation", "pageload"].includes(I.op)) {
            Wk.DEBUG_BUILD &&
              CT.logger.warn(
                "[Tracing] Did not create ui.action.click transaction because a pageload or navigation transaction is in progress.",
              );
            return;
          }
          if (A) (A.setFinishReason("interactionInterrupted"), A.end(), (A = void 0));
          if (!this._getCurrentHub) {
            Wk.DEBUG_BUILD &&
              CT.logger.warn("[Tracing] Did not create ui.action.click transaction because _getCurrentHub is invalid.");
            return;
          }
          if (!this._latestRoute.name) {
            Wk.DEBUG_BUILD &&
              CT.logger.warn(
                "[Tracing] Did not create ui.action.click transaction because _latestRouteName is missing.",
              );
            return;
          }
          let W = this._getCurrentHub(),
            { location: J } = Ig.WINDOW,
            X = {
              name: this._latestRoute.name,
              op: "ui.action.click",
              trimEnd: !0,
              data: {
                [mw.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: this._latestRoute.context
                  ? HgQ(this._latestRoute.context)
                  : "url",
              },
            };
          A = mw.startIdleTransaction(W, X, Q, Z, !0, { location: J }, G);
        };
      ["click"].forEach((Q) => {
        if (Ig.WINDOW.document) addEventListener(Q, B, { once: !1, capture: !0 });
      });
    }
    _registerInpInteractionListener() {
      let A = ({ entries: B }) => {
        let Q = mw.getClient(),
          Z = Q !== void 0 && Q.getIntegrationByName !== void 0 ? Q.getIntegrationByName("Replay") : void 0,
          G = Z !== void 0 ? Z.getReplayId() : void 0,
          Y = mw.getActiveTransaction(),
          I = mw.getCurrentScope(),
          W = I !== void 0 ? I.getUser() : void 0;
        B.forEach((J) => {
          if (zgQ(J)) {
            let X = J.interactionId;
            if (X === void 0) return;
            let F = this._interactionIdToRouteNameMapping[X],
              V = J.duration,
              K = J.startTime,
              H = Object.keys(this._interactionIdToRouteNameMapping),
              z =
                H.length > 0
                  ? H.reduce((D, C) => {
                      return this._interactionIdToRouteNameMapping[D].duration <
                        this._interactionIdToRouteNameMapping[C].duration
                        ? D
                        : C;
                    })
                  : void 0;
            if (J.entryType === "first-input") {
              if (
                H.map((C) => this._interactionIdToRouteNameMapping[C]).some((C) => {
                  return C.duration === V && C.startTime === K;
                })
              )
                return;
            }
            if (!X) return;
            if (F) F.duration = Math.max(F.duration, V);
            else if (H.length < ur0 || z === void 0 || V > this._interactionIdToRouteNameMapping[z].duration) {
              let D = this._latestRoute.name,
                C = this._latestRoute.context;
              if (D && C) {
                if (z && Object.keys(this._interactionIdToRouteNameMapping).length >= ur0)
                  delete this._interactionIdToRouteNameMapping[z];
                this._interactionIdToRouteNameMapping[X] = {
                  routeName: D,
                  duration: V,
                  parentContext: C,
                  user: W,
                  activeTransaction: Y,
                  replayId: G,
                  startTime: K,
                };
              }
            }
          }
        });
      };
      (gr0.addPerformanceInstrumentationHandler("event", A),
        gr0.addPerformanceInstrumentationHandler("first-input", A));
    }
  }
  function Ta1(A) {
    let B = CT.getDomElement(`meta[name=${A}]`);
    return B ? B.getAttribute("content") : void 0;
  }
  function HgQ(A) {
    let B = A.attributes && A.attributes[mw.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      Q = A.data && A.data[mw.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      Z = A.metadata && A.metadata.source;
    return B || Q || Z;
  }
  function zgQ(A) {
    return "duration" in A;
  }
  lr0.BROWSER_TRACING_INTEGRATION_ID = dr0;
  lr0.BrowserTracing = cr0;
  lr0.getMetaContent = Ta1;
});
var er0 = U((tr0) => {
  Object.defineProperty(tr0, "__esModule", { value: !0 });
  var IY = y9(),
    jC = LA(),
    Jk = aK(),
    $gQ = Ca1(),
    ir0 = ui(),
    w91 = Ma1(),
    ar0 = Iz1(),
    Rz = Mz(),
    sr0 = "BrowserTracing",
    wgQ = {
      ...IY.TRACING_DEFAULTS,
      instrumentNavigation: !0,
      instrumentPageLoad: !0,
      markBackgroundSpan: !0,
      enableLongTask: !0,
      enableInp: !1,
      interactionsSampleRate: 1,
      _experiments: {},
      ...ar0.defaultRequestInstrumentationOptions,
    },
    qgQ = (A = {}) => {
      let B = Jk.DEBUG_BUILD ? !!(A.tracePropagationTargets || A.tracingOrigins) : !1;
      if ((IY.addTracingExtensions(), !A.tracePropagationTargets && A.tracingOrigins))
        A.tracePropagationTargets = A.tracingOrigins;
      let Q = { ...wgQ, ...A },
        Z = w91.startTrackingWebVitals(),
        G = {};
      if (Q.enableInp) w91.startTrackingINP(G, Q.interactionsSampleRate);
      if (Q.enableLongTask) w91.startTrackingLongTasks();
      if (Q._experiments.enableInteractions) w91.startTrackingInteractions();
      let Y = { name: void 0, context: void 0 };
      function I(W) {
        let J = IY.getCurrentHub(),
          { beforeStartSpan: X, idleTimeout: F, finalTimeout: V, heartbeatInterval: K } = Q,
          H = W.op === "pageload",
          z;
        if (H) {
          let E = H ? Pa1("sentry-trace") : "",
            L = H ? Pa1("baggage") : void 0,
            { traceId: O, dsc: R, parentSpanId: P, sampled: _ } = jC.propagationContextFromHeaders(E, L);
          z = {
            traceId: O,
            parentSpanId: P,
            parentSampled: _,
            ...W,
            metadata: { ...W.metadata, dynamicSamplingContext: R },
            trimEnd: !0,
          };
        } else z = { trimEnd: !0, ...W };
        let D = X ? X(z) : z;
        if (
          ((D.metadata = D.name !== z.name ? { ...D.metadata, source: "custom" } : D.metadata),
          (Y.name = D.name),
          (Y.context = D),
          D.sampled === !1)
        )
          Jk.DEBUG_BUILD && jC.logger.log(`[Tracing] Will not send ${D.op} transaction because of beforeNavigate.`);
        Jk.DEBUG_BUILD && jC.logger.log(`[Tracing] Starting ${D.op} transaction on scope`);
        let { location: C } = Rz.WINDOW,
          w = IY.startIdleTransaction(J, D, F, V, !0, { location: C }, K, H);
        if (H && Rz.WINDOW.document) {
          if (
            (Rz.WINDOW.document.addEventListener("readystatechange", () => {
              if (["interactive", "complete"].includes(Rz.WINDOW.document.readyState)) w.sendAutoFinishSignal();
            }),
            ["interactive", "complete"].includes(Rz.WINDOW.document.readyState))
          )
            w.sendAutoFinishSignal();
        }
        return (
          w.registerBeforeFinishCallback((E) => {
            (Z(), w91.addPerformanceEntries(E));
          }),
          w
        );
      }
      return {
        name: sr0,
        setupOnce: () => {},
        afterAllSetup(W) {
          let J = W.getOptions(),
            {
              markBackgroundSpan: X,
              traceFetch: F,
              traceXHR: V,
              shouldCreateSpanForRequest: K,
              enableHTTPTimings: H,
              _experiments: z,
            } = Q,
            D = J && J.tracePropagationTargets,
            C = D || Q.tracePropagationTargets;
          if (Jk.DEBUG_BUILD && B && D)
            jC.logger.warn(
              "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.",
            );
          let w,
            E = Rz.WINDOW.location && Rz.WINDOW.location.href;
          if (W.on)
            (W.on("startNavigationSpan", (L) => {
              if (w)
                (Jk.DEBUG_BUILD &&
                  jC.logger.log(`[Tracing] Finishing current transaction with op: ${IY.spanToJSON(w).op}`),
                  w.end());
              w = I({ op: "navigation", ...L });
            }),
              W.on("startPageLoadSpan", (L) => {
                if (w)
                  (Jk.DEBUG_BUILD &&
                    jC.logger.log(`[Tracing] Finishing current transaction with op: ${IY.spanToJSON(w).op}`),
                    w.end());
                w = I({ op: "pageload", ...L });
              }));
          if (Q.instrumentPageLoad && W.emit && Rz.WINDOW.location) {
            let L = {
              name: Rz.WINDOW.location.pathname,
              startTimestamp: jC.browserPerformanceTimeOrigin ? jC.browserPerformanceTimeOrigin / 1000 : void 0,
              origin: "auto.pageload.browser",
              attributes: { [IY.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url" },
            };
            rr0(W, L);
          }
          if (Q.instrumentNavigation && W.emit && Rz.WINDOW.location)
            jC.addHistoryInstrumentationHandler(({ to: L, from: O }) => {
              if (O === void 0 && E && E.indexOf(L) !== -1) {
                E = void 0;
                return;
              }
              if (O !== L) {
                E = void 0;
                let R = {
                  name: Rz.WINDOW.location.pathname,
                  origin: "auto.navigation.browser",
                  attributes: { [IY.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url" },
                };
                or0(W, R);
              }
            });
          if (X) $gQ.registerBackgroundTabDetection();
          if (z.enableInteractions) EgQ(Q, Y);
          if (Q.enableInp) LgQ(G, Y);
          ar0.instrumentOutgoingRequests({
            traceFetch: F,
            traceXHR: V,
            tracePropagationTargets: C,
            shouldCreateSpanForRequest: K,
            enableHTTPTimings: H,
          });
        },
        options: Q,
      };
    };
  function rr0(A, B) {
    if (!A.emit) return;
    A.emit("startPageLoadSpan", B);
    let Q = IY.getActiveSpan();
    return (Q && IY.spanToJSON(Q).op) === "pageload" ? Q : void 0;
  }
  function or0(A, B) {
    if (!A.emit) return;
    A.emit("startNavigationSpan", B);
    let Q = IY.getActiveSpan();
    return (Q && IY.spanToJSON(Q).op) === "navigation" ? Q : void 0;
  }
  function Pa1(A) {
    let B = jC.getDomElement(`meta[name=${A}]`);
    return B ? B.getAttribute("content") : void 0;
  }
  function EgQ(A, B) {
    let Q,
      Z = () => {
        let { idleTimeout: G, finalTimeout: Y, heartbeatInterval: I } = A,
          W = "ui.action.click",
          J = IY.getActiveTransaction();
        if (J && J.op && ["navigation", "pageload"].includes(J.op)) {
          Jk.DEBUG_BUILD &&
            jC.logger.warn(
              "[Tracing] Did not create ui.action.click transaction because a pageload or navigation transaction is in progress.",
            );
          return;
        }
        if (Q) (Q.setFinishReason("interactionInterrupted"), Q.end(), (Q = void 0));
        if (!B.name) {
          Jk.DEBUG_BUILD &&
            jC.logger.warn("[Tracing] Did not create ui.action.click transaction because _latestRouteName is missing.");
          return;
        }
        let { location: X } = Rz.WINDOW,
          F = {
            name: B.name,
            op: "ui.action.click",
            trimEnd: !0,
            data: { [IY.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: B.context ? MgQ(B.context) : "url" },
          };
        Q = IY.startIdleTransaction(IY.getCurrentHub(), F, G, Y, !0, { location: X }, I);
      };
    ["click"].forEach((G) => {
      if (Rz.WINDOW.document) addEventListener(G, Z, { once: !1, capture: !0 });
    });
  }
  function NgQ(A) {
    return "duration" in A;
  }
  var nr0 = 10;
  function LgQ(A, B) {
    let Q = ({ entries: Z }) => {
      let G = IY.getClient(),
        Y = G !== void 0 && G.getIntegrationByName !== void 0 ? G.getIntegrationByName("Replay") : void 0,
        I = Y !== void 0 ? Y.getReplayId() : void 0,
        W = IY.getActiveTransaction(),
        J = IY.getCurrentScope(),
        X = J !== void 0 ? J.getUser() : void 0;
      Z.forEach((F) => {
        if (NgQ(F)) {
          let V = F.interactionId;
          if (V === void 0) return;
          let K = A[V],
            H = F.duration,
            z = F.startTime,
            D = Object.keys(A),
            C =
              D.length > 0
                ? D.reduce((w, E) => {
                    return A[w].duration < A[E].duration ? w : E;
                  })
                : void 0;
          if (F.entryType === "first-input") {
            if (
              D.map((E) => A[E]).some((E) => {
                return E.duration === H && E.startTime === z;
              })
            )
              return;
          }
          if (!V) return;
          if (K) K.duration = Math.max(K.duration, H);
          else if (D.length < nr0 || C === void 0 || H > A[C].duration) {
            let { name: w, context: E } = B;
            if (w && E) {
              if (C && Object.keys(A).length >= nr0) delete A[C];
              A[V] = {
                routeName: w,
                duration: H,
                parentContext: E,
                user: X,
                activeTransaction: W,
                replayId: I,
                startTime: z,
              };
            }
          }
        }
      });
    };
    (ir0.addPerformanceInstrumentationHandler("event", Q), ir0.addPerformanceInstrumentationHandler("first-input", Q));
  }
  function MgQ(A) {
    let B = A.attributes && A.attributes[IY.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      Q = A.data && A.data[IY.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      Z = A.metadata && A.metadata.source;
    return B || Q || Z;
  }
  tr0.BROWSER_TRACING_INTEGRATION_ID = sr0;
  tr0.browserTracingIntegration = qgQ;
  tr0.getMetaContent = Pa1;
  tr0.startBrowserTracingNavigationSpan = or0;
  tr0.startBrowserTracingPageLoadSpan = rr0;
});
var Qo0 = U((Bo0, q91) => {
  Object.defineProperty(Bo0, "__esModule", { value: !0 });
  var Ao0 = y9(),
    mi = LA();
  function SgQ() {
    let A = Ao0.getMainCarrier();
    if (!A.__SENTRY__) return;
    let B = {
        mongodb() {
          return new (mi.dynamicRequire(q91, "./node/integrations/mongo").Mongo)();
        },
        mongoose() {
          return new (mi.dynamicRequire(q91, "./node/integrations/mongo").Mongo)();
        },
        mysql() {
          return new (mi.dynamicRequire(q91, "./node/integrations/mysql").Mysql)();
        },
        pg() {
          return new (mi.dynamicRequire(q91, "./node/integrations/postgres").Postgres)();
        },
      },
      Q = Object.keys(B)
        .filter((Z) => !!mi.loadModule(Z))
        .map((Z) => {
          try {
            return B[Z]();
          } catch (G) {
            return;
          }
        })
        .filter((Z) => Z);
    if (Q.length > 0) A.__SENTRY__.integrations = [...(A.__SENTRY__.integrations || []), ...Q];
  }
  function ygQ() {
    if ((Ao0.addTracingExtensions(), mi.isNodeEnv())) SgQ();
  }
  Bo0.addExtensionMethods = ygQ;
});
var Sa1 = U((Wo0) => {
  Object.defineProperty(Wo0, "__esModule", { value: !0 });
  var UT = y9(),
    Zo0 = LA(),
    _gQ = Hs0(),
    xgQ = Ds0(),
    vgQ = Us0(),
    bgQ = qs0(),
    fgQ = Ls0(),
    hgQ = Rs0(),
    ggQ = js0(),
    ugQ = ys0(),
    Go0 = pr0(),
    ja1 = er0(),
    Yo0 = Iz1(),
    Wz1 = ui(),
    Io0 = Oa1(),
    mgQ = Qo0();
  Wo0.IdleTransaction = UT.IdleTransaction;
  Wo0.Span = UT.Span;
  Wo0.SpanStatus = UT.SpanStatus;
  Wo0.Transaction = UT.Transaction;
  Wo0.extractTraceparentData = UT.extractTraceparentData;
  Wo0.getActiveTransaction = UT.getActiveTransaction;
  Wo0.hasTracingEnabled = UT.hasTracingEnabled;
  Wo0.spanStatusfromHttpCode = UT.spanStatusfromHttpCode;
  Wo0.startIdleTransaction = UT.startIdleTransaction;
  Wo0.TRACEPARENT_REGEXP = Zo0.TRACEPARENT_REGEXP;
  Wo0.stripUrlQueryAndFragment = Zo0.stripUrlQueryAndFragment;
  Wo0.Express = _gQ.Express;
  Wo0.Postgres = xgQ.Postgres;
  Wo0.Mysql = vgQ.Mysql;
  Wo0.Mongo = bgQ.Mongo;
  Wo0.Prisma = fgQ.Prisma;
  Wo0.GraphQL = hgQ.GraphQL;
  Wo0.Apollo = ggQ.Apollo;
  Wo0.lazyLoadedNodePerformanceMonitoringIntegrations = ugQ.lazyLoadedNodePerformanceMonitoringIntegrations;
  Wo0.BROWSER_TRACING_INTEGRATION_ID = Go0.BROWSER_TRACING_INTEGRATION_ID;
  Wo0.BrowserTracing = Go0.BrowserTracing;
  Wo0.browserTracingIntegration = ja1.browserTracingIntegration;
  Wo0.startBrowserTracingNavigationSpan = ja1.startBrowserTracingNavigationSpan;
  Wo0.startBrowserTracingPageLoadSpan = ja1.startBrowserTracingPageLoadSpan;
  Wo0.defaultRequestInstrumentationOptions = Yo0.defaultRequestInstrumentationOptions;
  Wo0.instrumentOutgoingRequests = Yo0.instrumentOutgoingRequests;
  Wo0.addClsInstrumentationHandler = Wz1.addClsInstrumentationHandler;
  Wo0.addFidInstrumentationHandler = Wz1.addFidInstrumentationHandler;
  Wo0.addLcpInstrumentationHandler = Wz1.addLcpInstrumentationHandler;
  Wo0.addPerformanceInstrumentationHandler = Wz1.addPerformanceInstrumentationHandler;
  Wo0.addTracingHeadersToFetchRequest = Io0.addTracingHeadersToFetchRequest;
  Wo0.instrumentFetchRequest = Io0.instrumentFetchRequest;
  Wo0.addExtensionMethods = mgQ.addExtensionMethods;
});
var Xo0 = U((Jo0) => {
  Object.defineProperty(Jo0, "__esModule", { value: !0 });
  var EuQ = Sa1(),
    NuQ = LA();
  function LuQ() {
    let A = EuQ.lazyLoadedNodePerformanceMonitoringIntegrations
      .map((B) => {
        try {
          return B();
        } catch (Q) {
          return;
        }
      })
      .filter((B) => !!B);
    if (A.length === 0) NuQ.logger.warn("Performance monitoring integrations could not be automatically loaded.");
    return A.filter((B) => !!B.loadDependency());
  }
  Jo0.autoDiscoverNodePerformanceMonitoringIntegrations = LuQ;
});
var ya1 = U((Ko0) => {
  Object.defineProperty(Ko0, "__esModule", { value: !0 });
  var OuQ = X1("os"),
    RuQ = X1("util"),
    Fo0 = y9();
  class Vo0 extends Fo0.ServerRuntimeClient {
    constructor(A) {
      (Fo0.applySdkMetadata(A, "node"),
        (A.transportOptions = { textEncoder: new RuQ.TextEncoder(), ...A.transportOptions }));
      let B = {
        ...A,
        platform: "node",
        runtime: { name: "node", version: global.process.version },
        serverName: A.serverName || global.process.env.SENTRY_NAME || OuQ.hostname(),
      };
      super(B);
    }
  }
  Ko0.NodeClient = Vo0;
});
var Uo0 = U((Co0) => {
  var { _nullishCoalesce: Ho0 } = LA();
  Object.defineProperty(Co0, "__esModule", { value: !0 });
  var zo0 = X1("http");
  X1("https");
  var hN = Symbol("AgentBaseInternalState");
  class Do0 extends zo0.Agent {
    constructor(A) {
      super(A);
      this[hN] = {};
    }
    isSecureEndpoint(A) {
      if (A) {
        if (typeof A.secureEndpoint === "boolean") return A.secureEndpoint;
        if (typeof A.protocol === "string") return A.protocol === "https:";
      }
      let { stack: B } = new Error();
      if (typeof B !== "string") return !1;
      return B.split(
        `
`,
      ).some((Q) => Q.indexOf("(https.js:") !== -1 || Q.indexOf("node:https:") !== -1);
    }
    createSocket(A, B, Q) {
      let Z = { ...B, secureEndpoint: this.isSecureEndpoint(B) };
      Promise.resolve()
        .then(() => this.connect(A, Z))
        .then((G) => {
          if (G instanceof zo0.Agent) return G.addRequest(A, Z);
          ((this[hN].currentSocket = G), super.createSocket(A, B, Q));
        }, Q);
    }
    createConnection() {
      let A = this[hN].currentSocket;
      if (((this[hN].currentSocket = void 0), !A))
        throw new Error("No socket was returned in the `connect()` function");
      return A;
    }
    get defaultPort() {
      return Ho0(this[hN].defaultPort, () => (this.protocol === "https:" ? 443 : 80));
    }
    set defaultPort(A) {
      if (this[hN]) this[hN].defaultPort = A;
    }
    get protocol() {
      return Ho0(this[hN].protocol, () => (this.isSecureEndpoint() ? "https:" : "http:"));
    }
    set protocol(A) {
      if (this[hN]) this[hN].protocol = A;
    }
  }
  Co0.Agent = Do0;
});
var wo0 = U(($o0) => {
  Object.defineProperty($o0, "__esModule", { value: !0 });
  var juQ = LA();
  function Jz1(...A) {
    juQ.logger.log("[https-proxy-agent:parse-proxy-response]", ...A);
  }
  function SuQ(A) {
    return new Promise((B, Q) => {
      let Z = 0,
        G = [];
      function Y() {
        let F = A.read();
        if (F) X(F);
        else A.once("readable", Y);
      }
      function I() {
        (A.removeListener("end", W), A.removeListener("error", J), A.removeListener("readable", Y));
      }
      function W() {
        (I(), Jz1("onend"), Q(new Error("Proxy connection ended before receiving CONNECT response")));
      }
      function J(F) {
        (I(), Jz1("onerror %o", F), Q(F));
      }
      function X(F) {
        (G.push(F), (Z += F.length));
        let V = Buffer.concat(G, Z),
          K = V.indexOf(`\r
\r
`);
        if (K === -1) {
          (Jz1("have not received end of HTTP headers yet..."), Y());
          return;
        }
        let H = V.slice(0, K).toString("ascii").split(`\r
`),
          z = H.shift();
        if (!z) return (A.destroy(), Q(new Error("No header received from proxy CONNECT response")));
        let D = z.split(" "),
          C = +D[1],
          w = D.slice(2).join(" "),
          E = {};
        for (let L of H) {
          if (!L) continue;
          let O = L.indexOf(":");
          if (O === -1) return (A.destroy(), Q(new Error(`Invalid header from proxy CONNECT response: "${L}"`)));
          let R = L.slice(0, O).toLowerCase(),
            P = L.slice(O + 1).trimStart(),
            _ = E[R];
          if (typeof _ === "string") E[R] = [_, P];
          else if (Array.isArray(_)) _.push(P);
          else E[R] = P;
        }
        (Jz1("got proxy server response: %o %o", z, E),
          I(),
          B({ connect: { statusCode: C, statusText: w, headers: E }, buffered: V }));
      }
      (A.on("error", J), A.on("end", W), Y());
    });
  }
  $o0.parseProxyResponse = SuQ;
});
var Lo0 = U((No0) => {
  var { _nullishCoalesce: kuQ, _optionalChain: _uQ } = LA();
  Object.defineProperty(No0, "__esModule", { value: !0 });
  var E91 = X1("net"),
    qo0 = X1("tls"),
    xuQ = X1("url"),
    vuQ = LA(),
    buQ = Uo0(),
    fuQ = wo0();
  function N91(...A) {
    vuQ.logger.log("[https-proxy-agent]", ...A);
  }
  class ka1 extends buQ.Agent {
    static __initStatic() {
      this.protocols = ["http", "https"];
    }
    constructor(A, B) {
      super(B);
      ((this.options = {}),
        (this.proxy = typeof A === "string" ? new xuQ.URL(A) : A),
        (this.proxyHeaders = kuQ(_uQ([B, "optionalAccess", (G) => G.headers]), () => ({}))),
        N91("Creating new HttpsProxyAgent instance: %o", this.proxy.href));
      let Q = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
        Z = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = { ALPNProtocols: ["http/1.1"], ...(B ? Eo0(B, "headers") : null), host: Q, port: Z };
    }
    async connect(A, B) {
      let { proxy: Q } = this;
      if (!B.host) throw new TypeError('No "host" provided');
      let Z;
      if (Q.protocol === "https:") {
        N91("Creating `tls.Socket`: %o", this.connectOpts);
        let V = this.connectOpts.servername || this.connectOpts.host;
        Z = qo0.connect({ ...this.connectOpts, servername: V && E91.isIP(V) ? void 0 : V });
      } else (N91("Creating `net.Socket`: %o", this.connectOpts), (Z = E91.connect(this.connectOpts)));
      let G = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : { ...this.proxyHeaders },
        Y = E91.isIPv6(B.host) ? `[${B.host}]` : B.host,
        I = `CONNECT ${Y}:${B.port} HTTP/1.1\r
`;
      if (Q.username || Q.password) {
        let V = `${decodeURIComponent(Q.username)}:${decodeURIComponent(Q.password)}`;
        G["Proxy-Authorization"] = `Basic ${Buffer.from(V).toString("base64")}`;
      }
      if (((G.Host = `${Y}:${B.port}`), !G["Proxy-Connection"]))
        G["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let V of Object.keys(G))
        I += `${V}: ${G[V]}\r
`;
      let W = fuQ.parseProxyResponse(Z);
      Z.write(`${I}\r
`);
      let { connect: J, buffered: X } = await W;
      if ((A.emit("proxyConnect", J), this.emit("proxyConnect", J, A), J.statusCode === 200)) {
        if ((A.once("socket", huQ), B.secureEndpoint)) {
          N91("Upgrading socket connection to TLS");
          let V = B.servername || B.host;
          return qo0.connect({ ...Eo0(B, "host", "path", "port"), socket: Z, servername: E91.isIP(V) ? void 0 : V });
        }
        return Z;
      }
      Z.destroy();
      let F = new E91.Socket({ writable: !1 });
      return (
        (F.readable = !0),
        A.once("socket", (V) => {
          (N91("Replaying proxy buffer for failed request"), V.push(X), V.push(null));
        }),
        F
      );
    }
  }
  ka1.__initStatic();
  function huQ(A) {
    A.resume();
  }
  function Eo0(A, ...B) {
    let Q = {},
      Z;
    for (Z in A) if (!B.includes(Z)) Q[Z] = A[Z];
    return Q;
  }
  No0.HttpsProxyAgent = ka1;
});
var xa1 = U((Ro0) => {
  var { _nullishCoalesce: _a1 } = LA();
  Object.defineProperty(Ro0, "__esModule", { value: !0 });
  var uuQ = X1("http"),
    muQ = X1("https"),
    duQ = X1("stream"),
    Oo0 = X1("url"),
    cuQ = X1("zlib"),
    Mo0 = y9(),
    luQ = LA(),
    puQ = Lo0(),
    iuQ = 32768;
  function nuQ(A) {
    return new duQ.Readable({
      read() {
        (this.push(A), this.push(null));
      },
    });
  }
  function auQ(A) {
    let B;
    try {
      B = new Oo0.URL(A.url);
    } catch (J) {
      return (
        luQ.consoleSandbox(() => {
          console.warn(
            "[@sentry/node]: Invalid dsn or tunnel option, will not send any events. The tunnel option must be a full URL when used.",
          );
        }),
        Mo0.createTransport(A, () => Promise.resolve({}))
      );
    }
    let Q = B.protocol === "https:",
      Z = suQ(B, A.proxy || (Q ? process.env.https_proxy : void 0) || process.env.http_proxy),
      G = Q ? muQ : uuQ,
      Y = A.keepAlive === void 0 ? !1 : A.keepAlive,
      I = Z ? new puQ.HttpsProxyAgent(Z) : new G.Agent({ keepAlive: Y, maxSockets: 30, timeout: 2000 }),
      W = ruQ(
        A,
        _a1(A.httpModule, () => G),
        I,
      );
    return Mo0.createTransport(A, W);
  }
  function suQ(A, B) {
    let { no_proxy: Q } = process.env;
    if (Q && Q.split(",").some((G) => A.host.endsWith(G) || A.hostname.endsWith(G))) return;
    else return B;
  }
  function ruQ(A, B, Q) {
    let { hostname: Z, pathname: G, port: Y, protocol: I, search: W } = new Oo0.URL(A.url);
    return function J(X) {
      return new Promise((F, V) => {
        let K = nuQ(X.body),
          H = { ...A.headers };
        if (X.body.length > iuQ) ((H["content-encoding"] = "gzip"), (K = K.pipe(cuQ.createGzip())));
        let z = B.request(
          { method: "POST", agent: Q, headers: H, hostname: Z, path: `${G}${W}`, port: Y, protocol: I, ca: A.caCerts },
          (D) => {
            (D.on("data", () => {}), D.on("end", () => {}), D.setEncoding("utf8"));
            let C = _a1(D.headers["retry-after"], () => null),
              w = _a1(D.headers["x-sentry-rate-limits"], () => null);
            F({
              statusCode: D.statusCode,
              headers: { "retry-after": C, "x-sentry-rate-limits": Array.isArray(w) ? w[0] : w },
            });
          },
        );
        (z.on("error", V), K.pipe(z));
      });
    };
  }
  Ro0.makeNodeTransport = auQ;
});
var Wg = U((To0) => {
  Object.defineProperty(To0, "__esModule", { value: !0 });
  var tuQ = LA(),
    euQ = tuQ.parseSemver(process.versions.node);
  To0.NODE_VERSION = euQ;
});
var yo0 = U((So0) => {
  var { _optionalChain: BmQ } = LA();
  Object.defineProperty(So0, "__esModule", { value: !0 });
  var Po0 = X1("domain"),
    Jg = y9();
  function jo0() {
    return Po0.active;
  }
  function QmQ() {
    let A = jo0();
    if (!A) return;
    return (Jg.ensureHubOnCarrier(A), Jg.getHubFromCarrier(A));
  }
  function ZmQ(A) {
    let B = {};
    return (Jg.ensureHubOnCarrier(B, A), Jg.getHubFromCarrier(B));
  }
  function GmQ(A, B) {
    let Q = jo0();
    if (Q && BmQ([B, "optionalAccess", (I) => I.reuseExisting])) return A();
    let Z = Po0.create(),
      G = Q ? Jg.getHubFromCarrier(Q) : void 0,
      Y = ZmQ(G);
    return (
      Jg.setHubOnCarrier(Z, Y),
      Z.bind(() => {
        return A();
      })()
    );
  }
  function YmQ() {
    Jg.setAsyncContextStrategy({ getCurrentHub: QmQ, runWithAsyncContext: GmQ });
  }
  So0.setDomainAsyncContextStrategy = YmQ;
});
var _o0 = U((ko0) => {
  var { _optionalChain: WmQ } = LA();
  Object.defineProperty(ko0, "__esModule", { value: !0 });
  var va1 = y9(),
    JmQ = X1("async_hooks"),
    Xz1;
  function XmQ() {
    if (!Xz1) Xz1 = new JmQ.AsyncLocalStorage();
    function A() {
      return Xz1.getStore();
    }
    function B(Z) {
      let G = {};
      return (va1.ensureHubOnCarrier(G, Z), va1.getHubFromCarrier(G));
    }
    function Q(Z, G) {
      let Y = A();
      if (Y && WmQ([G, "optionalAccess", (W) => W.reuseExisting])) return Z();
      let I = B(Y);
      return Xz1.run(I, () => {
        return Z();
      });
    }
    va1.setAsyncContextStrategy({ getCurrentHub: A, runWithAsyncContext: Q });
  }
  ko0.setHooksAsyncContextStrategy = XmQ;
});
var vo0 = U((xo0) => {
  Object.defineProperty(xo0, "__esModule", { value: !0 });
  var VmQ = Wg(),
    KmQ = yo0(),
    HmQ = _o0();
  function zmQ() {
    if (VmQ.NODE_VERSION.major >= 14) HmQ.setHooksAsyncContextStrategy();
    else KmQ.setDomainAsyncContextStrategy();
  }
  xo0.setNodeAsyncContextStrategy = zmQ;
});
var Vz1 = U((go0) => {
  Object.defineProperty(go0, "__esModule", { value: !0 });
  var CmQ = X1("util"),
    Fz1 = y9(),
    bo0 = LA(),
    fo0 = "Console",
    UmQ = () => {
      return {
        name: fo0,
        setupOnce() {},
        setup(A) {
          bo0.addConsoleInstrumentationHandler(({ args: B, level: Q }) => {
            if (Fz1.getClient() !== A) return;
            Fz1.addBreadcrumb(
              { category: "console", level: bo0.severityLevelFromString(Q), message: CmQ.format.apply(void 0, B) },
              { input: [...B], level: Q },
            );
          });
        },
      };
    },
    ho0 = Fz1.defineIntegration(UmQ),
    $mQ = Fz1.convertIntegrationFnToClass(fo0, ho0);
  go0.Console = $mQ;
  go0.consoleIntegration = ho0;
});
var Kz1 = U((so0) => {
  var { _optionalChain: Xg } = LA();
  Object.defineProperty(so0, "__esModule", { value: !0 });
  var EmQ = X1("child_process"),
    mo0 = X1("fs"),
    SC = X1("os"),
    NmQ = X1("path"),
    do0 = X1("util"),
    co0 = y9(),
    lo0 = do0.promisify(mo0.readFile),
    po0 = do0.promisify(mo0.readdir),
    io0 = "Context",
    LmQ = (A = {}) => {
      let B,
        Q = { app: !0, os: !0, device: !0, culture: !0, cloudResource: !0, ...A };
      async function Z(Y) {
        if (B === void 0) B = G();
        let I = OmQ(await B);
        return (
          (Y.contexts = {
            ...Y.contexts,
            app: { ...I.app, ...Xg([Y, "access", (W) => W.contexts, "optionalAccess", (W) => W.app]) },
            os: { ...I.os, ...Xg([Y, "access", (W) => W.contexts, "optionalAccess", (W) => W.os]) },
            device: { ...I.device, ...Xg([Y, "access", (W) => W.contexts, "optionalAccess", (W) => W.device]) },
            culture: { ...I.culture, ...Xg([Y, "access", (W) => W.contexts, "optionalAccess", (W) => W.culture]) },
            cloud_resource: {
              ...I.cloud_resource,
              ...Xg([Y, "access", (W) => W.contexts, "optionalAccess", (W) => W.cloud_resource]),
            },
          }),
          Y
        );
      }
      async function G() {
        let Y = {};
        if (Q.os) Y.os = await RmQ();
        if (Q.app) Y.app = PmQ();
        if (Q.device) Y.device = ao0(Q.device);
        if (Q.culture) {
          let I = TmQ();
          if (I) Y.culture = I;
        }
        if (Q.cloudResource) Y.cloud_resource = xmQ();
        return Y;
      }
      return {
        name: io0,
        setupOnce() {},
        processEvent(Y) {
          return Z(Y);
        },
      };
    },
    no0 = co0.defineIntegration(LmQ),
    MmQ = co0.convertIntegrationFnToClass(io0, no0);
  function OmQ(A) {
    if (Xg([A, "optionalAccess", (B) => B.app, "optionalAccess", (B) => B.app_memory]))
      A.app.app_memory = process.memoryUsage().rss;
    if (Xg([A, "optionalAccess", (B) => B.device, "optionalAccess", (B) => B.free_memory]))
      A.device.free_memory = SC.freemem();
    return A;
  }
  async function RmQ() {
    let A = SC.platform();
    switch (A) {
      case "darwin":
        return kmQ();
      case "linux":
        return _mQ();
      default:
        return { name: jmQ[A] || A, version: SC.release() };
    }
  }
  function TmQ() {
    try {
      if (typeof process.versions.icu !== "string") return;
      let A = new Date(900000000);
      if (new Intl.DateTimeFormat("es", { month: "long" }).format(A) === "enero") {
        let Q = Intl.DateTimeFormat().resolvedOptions();
        return { locale: Q.locale, timezone: Q.timeZone };
      }
    } catch (A) {}
    return;
  }
  function PmQ() {
    let A = process.memoryUsage().rss;
    return { app_start_time: new Date(Date.now() - process.uptime() * 1000).toISOString(), app_memory: A };
  }
  function ao0(A) {
    let B = {},
      Q;
    try {
      Q = SC.uptime && SC.uptime();
    } catch (Z) {}
    if (typeof Q === "number") B.boot_time = new Date(Date.now() - Q * 1000).toISOString();
    if (((B.arch = SC.arch()), A === !0 || A.memory)) ((B.memory_size = SC.totalmem()), (B.free_memory = SC.freemem()));
    if (A === !0 || A.cpu) {
      let Z = SC.cpus();
      if (Z && Z.length) {
        let G = Z[0];
        ((B.processor_count = Z.length), (B.cpu_description = G.model), (B.processor_frequency = G.speed));
      }
    }
    return B;
  }
  var jmQ = { aix: "IBM AIX", freebsd: "FreeBSD", openbsd: "OpenBSD", sunos: "SunOS", win32: "Windows" },
    SmQ = [
      { name: "fedora-release", distros: ["Fedora"] },
      { name: "redhat-release", distros: ["Red Hat Linux", "Centos"] },
      { name: "redhat_version", distros: ["Red Hat Linux"] },
      { name: "SuSE-release", distros: ["SUSE Linux"] },
      { name: "lsb-release", distros: ["Ubuntu Linux", "Arch Linux"] },
      { name: "debian_version", distros: ["Debian"] },
      { name: "debian_release", distros: ["Debian"] },
      { name: "arch-release", distros: ["Arch Linux"] },
      { name: "gentoo-release", distros: ["Gentoo Linux"] },
      { name: "novell-release", distros: ["SUSE Linux"] },
      { name: "alpine-release", distros: ["Alpine Linux"] },
    ],
    ymQ = {
      alpine: (A) => A,
      arch: (A) => gN(/distrib_release=(.*)/, A),
      centos: (A) => gN(/release ([^ ]+)/, A),
      debian: (A) => A,
      fedora: (A) => gN(/release (..)/, A),
      mint: (A) => gN(/distrib_release=(.*)/, A),
      red: (A) => gN(/release ([^ ]+)/, A),
      suse: (A) => gN(/VERSION = (.*)\n/, A),
      ubuntu: (A) => gN(/distrib_release=(.*)/, A),
    };
  function gN(A, B) {
    let Q = A.exec(B);
    return Q ? Q[1] : void 0;
  }
  async function kmQ() {
    let A = { kernel_version: SC.release(), name: "Mac OS X", version: `10.${Number(SC.release().split(".")[0]) - 4}` };
    try {
      let B = await new Promise((Q, Z) => {
        EmQ.execFile("/usr/bin/sw_vers", (G, Y) => {
          if (G) {
            Z(G);
            return;
          }
          Q(Y);
        });
      });
      ((A.name = gN(/^ProductName:\s+(.*)$/m, B)),
        (A.version = gN(/^ProductVersion:\s+(.*)$/m, B)),
        (A.build = gN(/^BuildVersion:\s+(.*)$/m, B)));
    } catch (B) {}
    return A;
  }
  function uo0(A) {
    return A.split(" ")[0].toLowerCase();
  }
  async function _mQ() {
    let A = { kernel_version: SC.release(), name: "Linux" };
    try {
      let B = await po0("/etc"),
        Q = SmQ.find((W) => B.includes(W.name));
      if (!Q) return A;
      let Z = NmQ.join("/etc", Q.name),
        G = (await lo0(Z, { encoding: "utf-8" })).toLowerCase(),
        { distros: Y } = Q;
      A.name = Y.find((W) => G.indexOf(uo0(W)) >= 0) || Y[0];
      let I = uo0(A.name);
      A.version = ymQ[I](G);
    } catch (B) {}
    return A;
  }
  function xmQ() {
    if (process.env.VERCEL) return { "cloud.provider": "vercel", "cloud.region": process.env.VERCEL_REGION };
    else if (process.env.AWS_REGION)
      return {
        "cloud.provider": "aws",
        "cloud.region": process.env.AWS_REGION,
        "cloud.platform": process.env.AWS_EXECUTION_ENV,
      };
    else if (process.env.GCP_PROJECT) return { "cloud.provider": "gcp" };
    else if (process.env.ALIYUN_REGION_ID)
      return { "cloud.provider": "alibaba_cloud", "cloud.region": process.env.ALIYUN_REGION_ID };
    else if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME)
      return { "cloud.provider": "azure", "cloud.region": process.env.REGION_NAME };
    else if (process.env.IBM_CLOUD_REGION)
      return { "cloud.provider": "ibm_cloud", "cloud.region": process.env.IBM_CLOUD_REGION };
    else if (process.env.TENCENTCLOUD_REGION)
      return {
        "cloud.provider": "tencent_cloud",
        "cloud.region": process.env.TENCENTCLOUD_REGION,
        "cloud.account.id": process.env.TENCENTCLOUD_APPID,
        "cloud.availability_zone": process.env.TENCENTCLOUD_ZONE,
      };
    else if (process.env.NETLIFY) return { "cloud.provider": "netlify" };
    else if (process.env.FLY_REGION) return { "cloud.provider": "fly.io", "cloud.region": process.env.FLY_REGION };
    else if (process.env.DYNO) return { "cloud.provider": "heroku" };
    else return;
  }
  so0.Context = MmQ;
  so0.getDeviceContext = ao0;
  so0.nodeContextIntegration = no0;
  so0.readDirAsync = po0;
  so0.readFileAsync = lo0;
});
var zz1 = U((At0) => {
  var { _optionalChain: ba1 } = LA();
  Object.defineProperty(At0, "__esModule", { value: !0 });
  var umQ = X1("fs"),
    ro0 = y9(),
    oo0 = LA(),
    Hz1 = new oo0.LRUMap(100),
    mmQ = 7,
    to0 = "ContextLines";
  function dmQ(A) {
    return new Promise((B, Q) => {
      umQ.readFile(A, "utf8", (Z, G) => {
        if (Z) Q(Z);
        else B(G);
      });
    });
  }
  var cmQ = (A = {}) => {
      let B = A.frameContextLines !== void 0 ? A.frameContextLines : mmQ;
      return {
        name: to0,
        setupOnce() {},
        processEvent(Q) {
          return pmQ(Q, B);
        },
      };
    },
    eo0 = ro0.defineIntegration(cmQ),
    lmQ = ro0.convertIntegrationFnToClass(to0, eo0);
  async function pmQ(A, B) {
    let Q = {},
      Z = [];
    if (B > 0 && ba1([A, "access", (G) => G.exception, "optionalAccess", (G) => G.values]))
      for (let G of A.exception.values) {
        if (!ba1([G, "access", (Y) => Y.stacktrace, "optionalAccess", (Y) => Y.frames])) continue;
        for (let Y = G.stacktrace.frames.length - 1; Y >= 0; Y--) {
          let I = G.stacktrace.frames[Y];
          if (I.filename && !Q[I.filename] && !Hz1.get(I.filename)) (Z.push(nmQ(I.filename)), (Q[I.filename] = 1));
        }
      }
    if (Z.length > 0) await Promise.all(Z);
    if (B > 0 && ba1([A, "access", (G) => G.exception, "optionalAccess", (G) => G.values])) {
      for (let G of A.exception.values) if (G.stacktrace && G.stacktrace.frames) await imQ(G.stacktrace.frames, B);
    }
    return A;
  }
  function imQ(A, B) {
    for (let Q of A)
      if (Q.filename && Q.context_line === void 0) {
        let Z = Hz1.get(Q.filename);
        if (Z)
          try {
            oo0.addContextToFrame(Z, Q, B);
          } catch (G) {}
      }
  }
  async function nmQ(A) {
    let B = Hz1.get(A);
    if (B === null) return null;
    if (B !== void 0) return B;
    let Q = null;
    try {
      Q = (await dmQ(A)).split(`
`);
    } catch (Z) {}
    return (Hz1.set(A, Q), Q);
  }
  At0.ContextLines = lmQ;
  At0.contextLinesIntegration = eo0;
});
var L91 = U((Bt0) => {
  Object.defineProperty(Bt0, "__esModule", { value: !0 });
  var rmQ = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
  Bt0.DEBUG_BUILD = rmQ;
});
var Yt0 = U((Gt0) => {
  var { _optionalChain: uN } = LA();
  Object.defineProperty(Gt0, "__esModule", { value: !0 });
  var fa1 = X1("url"),
    tmQ = Wg();
  function emQ(A) {
    let { protocol: B, hostname: Q, port: Z } = Zt0(A),
      G = A.path ? A.path : "/";
    return `${B}//${Q}${Z}${G}`;
  }
  function Qt0(A) {
    let { protocol: B, hostname: Q, port: Z } = Zt0(A),
      G = A.pathname || "/",
      Y = A.auth ? AdQ(A.auth) : "";
    return `${B}//${Y}${Q}${Z}${G}`;
  }
  function AdQ(A) {
    let [B, Q] = A.split(":");
    return `${B ? "[Filtered]" : ""}:${Q ? "[Filtered]" : ""}@`;
  }
  function BdQ(A, B, Q) {
    if (!A) return A;
    let [Z, G] = A.split(" ");
    if (B.host && !B.protocol)
      ((B.protocol = uN([Q, "optionalAccess", (Y) => Y.agent, "optionalAccess", (Y) => Y.protocol])), (G = Qt0(B)));
    if (uN([G, "optionalAccess", (Y) => Y.startsWith, "call", (Y) => Y("///")])) G = G.slice(2);
    return `${Z} ${G}`;
  }
  function ha1(A) {
    let B = {
      protocol: A.protocol,
      hostname: typeof A.hostname === "string" && A.hostname.startsWith("[") ? A.hostname.slice(1, -1) : A.hostname,
      hash: A.hash,
      search: A.search,
      pathname: A.pathname,
      path: `${A.pathname || ""}${A.search || ""}`,
      href: A.href,
    };
    if (A.port !== "") B.port = Number(A.port);
    if (A.username || A.password) B.auth = `${A.username}:${A.password}`;
    return B;
  }
  function QdQ(A, B) {
    let Q, Z;
    if (typeof B[B.length - 1] === "function") Q = B.pop();
    if (typeof B[0] === "string") Z = ha1(new fa1.URL(B[0]));
    else if (B[0] instanceof fa1.URL) Z = ha1(B[0]);
    else {
      Z = B[0];
      try {
        let G = new fa1.URL(Z.path || "", `${Z.protocol || "http:"}//${Z.hostname}`);
        Z = { pathname: G.pathname, search: G.search, hash: G.hash, ...Z };
      } catch (G) {}
    }
    if (B.length === 2) Z = { ...Z, ...B[1] };
    if (Z.protocol === void 0)
      if (tmQ.NODE_VERSION.major > 8)
        Z.protocol =
          uN([uN([A, "optionalAccess", (G) => G.globalAgent]), "optionalAccess", (G) => G.protocol]) ||
          uN([Z.agent, "optionalAccess", (G) => G.protocol]) ||
          uN([Z._defaultAgent, "optionalAccess", (G) => G.protocol]);
      else
        Z.protocol =
          uN([Z.agent, "optionalAccess", (G) => G.protocol]) ||
          uN([Z._defaultAgent, "optionalAccess", (G) => G.protocol]) ||
          uN([uN([A, "optionalAccess", (G) => G.globalAgent]), "optionalAccess", (G) => G.protocol]);
    if (Q) return [Z, Q];
    else return [Z];
  }
  function Zt0(A) {
    let B = A.protocol || "",
      Q = A.hostname || A.host || "",
      Z = !A.port || A.port === 80 || A.port === 443 || /^(.*):(\d+)$/.test(Q) ? "" : `:${A.port}`;
    return { protocol: B, hostname: Q, port: Z };
  }
  Gt0.cleanSpanDescription = BdQ;
  Gt0.extractRawUrl = emQ;
  Gt0.extractUrl = Qt0;
  Gt0.normalizeRequestArgs = QdQ;
  Gt0.urlToOptions = ha1;
});
var Dz1 = U((Xt0) => {
  var { _optionalChain: di } = LA();
  Object.defineProperty(Xt0, "__esModule", { value: !0 });
  var XF = y9(),
    Tz = LA(),
    ga1 = L91(),
    JdQ = Wg(),
    M91 = Yt0(),
    XdQ = (A = {}) => {
      let { breadcrumbs: B, tracing: Q, shouldCreateSpanForRequest: Z } = A,
        G = {
          breadcrumbs: B,
          tracing:
            Q === !1
              ? !1
              : Tz.dropUndefinedKeys({
                  enableIfHasTracingEnabled: Q === !0 ? void 0 : !0,
                  shouldCreateSpanForRequest: Z,
                }),
        };
      return new Fg(G);
    },
    FdQ = XF.defineIntegration(XdQ);
  class Fg {
    static __initStatic() {
      this.id = "Http";
    }
    __init() {
      this.name = Fg.id;
    }
    constructor(A = {}) {
      (Fg.prototype.__init.call(this),
        (this._breadcrumbs = typeof A.breadcrumbs === "undefined" ? !0 : A.breadcrumbs),
        (this._tracing = !A.tracing ? void 0 : A.tracing === !0 ? {} : A.tracing));
    }
    setupOnce(A, B) {
      let Q = di([
          B,
          "call",
          (J) => J(),
          "access",
          (J) => J.getClient,
          "call",
          (J) => J(),
          "optionalAccess",
          (J) => J.getOptions,
          "call",
          (J) => J(),
        ]),
        Z = Wt0(this._tracing, Q);
      if (!this._breadcrumbs && !Z) return;
      if (Q && Q.instrumenter !== "sentry") {
        ga1.DEBUG_BUILD && Tz.logger.log("HTTP Integration is skipped because of instrumenter configuration.");
        return;
      }
      let G = Jt0(Z, this._tracing, Q),
        Y =
          di([Q, "optionalAccess", (J) => J.tracePropagationTargets]) ||
          di([this, "access", (J) => J._tracing, "optionalAccess", (J) => J.tracePropagationTargets]),
        I = X1("http"),
        W = It0(I, this._breadcrumbs, G, Y);
      if ((Tz.fill(I, "get", W), Tz.fill(I, "request", W), JdQ.NODE_VERSION.major > 8)) {
        let J = X1("https"),
          X = It0(J, this._breadcrumbs, G, Y);
        (Tz.fill(J, "get", X), Tz.fill(J, "request", X));
      }
    }
  }
  Fg.__initStatic();
  function It0(A, B, Q, Z) {
    let G = new Tz.LRUMap(100),
      Y = new Tz.LRUMap(100),
      I = (X) => {
        if (Q === void 0) return !0;
        let F = G.get(X);
        if (F !== void 0) return F;
        let V = Q(X);
        return (G.set(X, V), V);
      },
      W = (X) => {
        if (Z === void 0) return !0;
        let F = Y.get(X);
        if (F !== void 0) return F;
        let V = Tz.stringMatchesSomePattern(X, Z);
        return (Y.set(X, V), V);
      };
    function J(X, F, V, K) {
      if (!XF.getCurrentHub().getIntegration(Fg)) return;
      XF.addBreadcrumb(
        { category: "http", data: { status_code: K && K.statusCode, ...F }, type: "http" },
        { event: X, request: V, response: K },
      );
    }
    return function X(F) {
      return function V(...K) {
        let H = M91.normalizeRequestArgs(A, K),
          z = H[0],
          D = M91.extractRawUrl(z),
          C = M91.extractUrl(z),
          w = XF.getClient();
        if (XF.isSentryRequestUrl(C, w)) return F.apply(A, H);
        let E = XF.getCurrentScope(),
          L = XF.getIsolationScope(),
          O = XF.getActiveSpan(),
          R = KdQ(C, z),
          P = I(D)
            ? di([
                O,
                "optionalAccess",
                (_) => _.startChild,
                "call",
                (_) =>
                  _({
                    op: "http.client",
                    origin: "auto.http.node.http",
                    description: `${R["http.method"]} ${R.url}`,
                    data: R,
                  }),
              ])
            : void 0;
        if (w && W(D)) {
          let {
              traceId: _,
              spanId: b,
              sampled: S,
              dsc: d,
            } = { ...L.getPropagationContext(), ...E.getPropagationContext() },
            u = P ? XF.spanToTraceHeader(P) : Tz.generateSentryTraceHeader(_, b, S),
            o = Tz.dynamicSamplingContextToSentryBaggageHeader(
              d || (P ? XF.getDynamicSamplingContextFromSpan(P) : XF.getDynamicSamplingContextFromClient(_, w, E)),
            );
          VdQ(z, C, u, o);
        } else
          ga1.DEBUG_BUILD &&
            Tz.logger.log(
              `[Tracing] Not adding sentry-trace header to outgoing request (${C}) due to mismatching tracePropagationTargets option.`,
            );
        return F.apply(A, H)
          .once("response", function (_) {
            let b = this;
            if (B) J("response", R, b, _);
            if (P) {
              if (_.statusCode) XF.setHttpStatus(P, _.statusCode);
              (P.updateName(M91.cleanSpanDescription(XF.spanToJSON(P).description || "", z, b) || ""), P.end());
            }
          })
          .once("error", function () {
            let _ = this;
            if (B) J("error", R, _);
            if (P)
              (XF.setHttpStatus(P, 500),
                P.updateName(M91.cleanSpanDescription(XF.spanToJSON(P).description || "", z, _) || ""),
                P.end());
          });
      };
    };
  }
  function VdQ(A, B, Q, Z) {
    if ((A.headers || {})["sentry-trace"]) return;
    (ga1.DEBUG_BUILD && Tz.logger.log(`[Tracing] Adding sentry-trace header ${Q} to outgoing request to "${B}": `),
      (A.headers = { ...A.headers, "sentry-trace": Q, ...(Z && Z.length > 0 && { baggage: HdQ(A, Z) }) }));
  }
  function KdQ(A, B) {
    let Q = B.method || "GET",
      Z = { url: A, "http.method": Q };
    if (B.hash) Z["http.fragment"] = B.hash.substring(1);
    if (B.search) Z["http.query"] = B.search.substring(1);
    return Z;
  }
  function HdQ(A, B) {
    if (!A.headers || !A.headers.baggage) return B;
    else if (!B) return A.headers.baggage;
    else if (Array.isArray(A.headers.baggage)) return [...A.headers.baggage, B];
    return [A.headers.baggage, B];
  }
  function Wt0(A, B) {
    return A === void 0 ? !1 : A.enableIfHasTracingEnabled ? XF.hasTracingEnabled(B) : !0;
  }
  function Jt0(A, B, Q) {
    return A
      ? di([B, "optionalAccess", (G) => G.shouldCreateSpanForRequest]) ||
          di([Q, "optionalAccess", (G) => G.shouldCreateSpanForRequest])
      : () => !1;
  }
  Xt0.Http = Fg;
  Xt0._getShouldCreateSpanForRequest = Jt0;
  Xt0._shouldCreateSpans = Wt0;
  Xt0.httpIntegration = FdQ;
});
var Kt0 = U((Vt0) => {
  Object.defineProperty(Vt0, "__esModule", { value: !0 });
  function $dQ(A, B, Q) {
    let Z = 0,
      G = 5,
      Y = 0;
    return (
      setInterval(() => {
        if (Y === 0) {
          if (Z > A) {
            if (((G *= 2), Q(G), G > 86400)) G = 86400;
            Y = G;
          }
        } else if (((Y -= 1), Y === 0)) B();
        Z = 0;
      }, 1000).unref(),
      () => {
        Z += 1;
      }
    );
  }
  function ua1(A) {
    return A !== void 0 && (A.length === 0 || A === "?" || A === "<anonymous>");
  }
  function wdQ(A, B) {
    return A === B || (ua1(A) && ua1(B));
  }
  function Ft0(A) {
    if (A === void 0) return;
    return A.slice(-10).reduce((B, Q) => `${B},${Q.function},${Q.lineno},${Q.colno}`, "");
  }
  function qdQ(A, B) {
    if (B === void 0) return;
    return Ft0(A(B, 1));
  }
  Vt0.createRateLimiter = $dQ;
  Vt0.functionNamesMatch = wdQ;
  Vt0.hashFrames = Ft0;
  Vt0.hashFromStack = qdQ;
  Vt0.isAnonymous = ua1;
});
var Ut0 = U((Ct0) => {
  var { _optionalChain: kG } = LA();
  Object.defineProperty(Ct0, "__esModule", { value: !0 });
  var ma1 = y9(),
    Cz1 = LA(),
    RdQ = Wg(),
    Uz1 = Kt0();
  function da1(A) {
    let B = [],
      Q = !1;
    function Z(I) {
      if (((B = []), Q)) return;
      ((Q = !0), A(I));
    }
    B.push(Z);
    function G(I) {
      B.push(I);
    }
    function Y(I) {
      let W = B.pop() || Z;
      try {
        W(I);
      } catch (J) {
        Z(I);
      }
    }
    return { add: G, next: Y };
  }
  class Ht0 {
    constructor() {
      let { Session: A } = X1("inspector");
      this._session = new A();
    }
    configureAndConnect(A, B) {
      (this._session.connect(),
        this._session.on("Debugger.paused", (Q) => {
          A(Q, () => {
            this._session.post("Debugger.resume");
          });
        }),
        this._session.post("Debugger.enable"),
        this._session.post("Debugger.setPauseOnExceptions", { state: B ? "all" : "uncaught" }));
    }
    setPauseOnExceptions(A) {
      this._session.post("Debugger.setPauseOnExceptions", { state: A ? "all" : "uncaught" });
    }
    getLocalVariables(A, B) {
      this._getProperties(A, (Q) => {
        let { add: Z, next: G } = da1(B);
        for (let Y of Q)
          if (
            kG([Y, "optionalAccess", (I) => I.value, "optionalAccess", (I) => I.objectId]) &&
            kG([Y, "optionalAccess", (I) => I.value, "access", (I) => I.className]) === "Array"
          ) {
            let I = Y.value.objectId;
            Z((W) => this._unrollArray(I, Y.name, W, G));
          } else if (
            kG([Y, "optionalAccess", (I) => I.value, "optionalAccess", (I) => I.objectId]) &&
            kG([Y, "optionalAccess", (I) => I.value, "optionalAccess", (I) => I.className]) === "Object"
          ) {
            let I = Y.value.objectId;
            Z((W) => this._unrollObject(I, Y.name, W, G));
          } else if (
            kG([Y, "optionalAccess", (I) => I.value, "optionalAccess", (I) => I.value]) != null ||
            kG([Y, "optionalAccess", (I) => I.value, "optionalAccess", (I) => I.description]) != null
          )
            Z((I) => this._unrollOther(Y, I, G));
        G({});
      });
    }
    _getProperties(A, B) {
      this._session.post("Runtime.getProperties", { objectId: A, ownProperties: !0 }, (Q, Z) => {
        if (Q) B([]);
        else B(Z.result);
      });
    }
    _unrollArray(A, B, Q, Z) {
      this._getProperties(A, (G) => {
        ((Q[B] = G.filter((Y) => Y.name !== "length" && !isNaN(parseInt(Y.name, 10)))
          .sort((Y, I) => parseInt(Y.name, 10) - parseInt(I.name, 10))
          .map((Y) => kG([Y, "optionalAccess", (I) => I.value, "optionalAccess", (I) => I.value]))),
          Z(Q));
      });
    }
    _unrollObject(A, B, Q, Z) {
      this._getProperties(A, (G) => {
        ((Q[B] = G.map((Y) => [
          Y.name,
          kG([Y, "optionalAccess", (I) => I.value, "optionalAccess", (I) => I.value]),
        ]).reduce((Y, [I, W]) => {
          return ((Y[I] = W), Y);
        }, {})),
          Z(Q));
      });
    }
    _unrollOther(A, B, Q) {
      if (kG([A, "optionalAccess", (Z) => Z.value, "optionalAccess", (Z) => Z.value]) != null)
        B[A.name] = A.value.value;
      else if (
        kG([A, "optionalAccess", (Z) => Z.value, "optionalAccess", (Z) => Z.description]) != null &&
        kG([A, "optionalAccess", (Z) => Z.value, "optionalAccess", (Z) => Z.type]) !== "function"
      )
        B[A.name] = `<${A.value.description}>`;
      Q(B);
    }
  }
  function TdQ() {
    try {
      return new Ht0();
    } catch (A) {
      return;
    }
  }
  var zt0 = "LocalVariables",
    PdQ = (A = {}, B = TdQ()) => {
      let Q = new Cz1.LRUMap(20),
        Z,
        G = !1;
      function Y(J, { params: { reason: X, data: F, callFrames: V } }, K) {
        if (X !== "exception" && X !== "promiseRejection") {
          K();
          return;
        }
        kG([Z, "optionalCall", (C) => C()]);
        let H = Uz1.hashFromStack(J, kG([F, "optionalAccess", (C) => C.description]));
        if (H == null) {
          K();
          return;
        }
        let { add: z, next: D } = da1((C) => {
          (Q.set(H, C), K());
        });
        for (let C = 0; C < Math.min(V.length, 5); C++) {
          let { scopeChain: w, functionName: E, this: L } = V[C],
            O = w.find((P) => P.type === "local"),
            R = L.className === "global" || !L.className ? E : `${L.className}.${E}`;
          if (kG([O, "optionalAccess", (P) => P.object, "access", (P) => P.objectId]) === void 0)
            z((P) => {
              ((P[C] = { function: R }), D(P));
            });
          else {
            let P = O.object.objectId;
            z((_) =>
              kG([
                B,
                "optionalAccess",
                (b) => b.getLocalVariables,
                "call",
                (b) =>
                  b(P, (S) => {
                    ((_[C] = { function: R, vars: S }), D(_));
                  }),
              ]),
            );
          }
        }
        D([]);
      }
      function I(J) {
        let X = Uz1.hashFrames(kG([J, "optionalAccess", (K) => K.stacktrace, "optionalAccess", (K) => K.frames]));
        if (X === void 0) return;
        let F = Q.remove(X);
        if (F === void 0) return;
        let V = (kG([J, "access", (K) => K.stacktrace, "optionalAccess", (K) => K.frames]) || []).filter(
          (K) => K.function !== "new Promise",
        );
        for (let K = 0; K < V.length; K++) {
          let H = V.length - K - 1;
          if (!V[H] || !F[K]) break;
          if (F[K].vars === void 0 || V[H].in_app === !1 || !Uz1.functionNamesMatch(V[H].function, F[K].function))
            continue;
          V[H].vars = F[K].vars;
        }
      }
      function W(J) {
        for (let X of kG([J, "optionalAccess", (F) => F.exception, "optionalAccess", (F) => F.values]) || []) I(X);
        return J;
      }
      return {
        name: zt0,
        setupOnce() {
          let J = ma1.getClient(),
            X = kG([J, "optionalAccess", (F) => F.getOptions, "call", (F) => F()]);
          if (B && kG([X, "optionalAccess", (F) => F.includeLocalVariables])) {
            if (RdQ.NODE_VERSION.major < 18) {
              Cz1.logger.log("The `LocalVariables` integration is only supported on Node >= v18.");
              return;
            }
            let V = A.captureAllExceptions !== !1;
            if ((B.configureAndConnect((K, H) => Y(X.stackParser, K, H), V), V)) {
              let K = A.maxExceptionsPerSecond || 50;
              Z = Uz1.createRateLimiter(
                K,
                () => {
                  (Cz1.logger.log("Local variables rate-limit lifted."),
                    kG([B, "optionalAccess", (H) => H.setPauseOnExceptions, "call", (H) => H(!0)]));
                },
                (H) => {
                  (Cz1.logger.log(
                    `Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${H} seconds.`,
                  ),
                    kG([B, "optionalAccess", (z) => z.setPauseOnExceptions, "call", (z) => z(!1)]));
                },
              );
            }
            G = !0;
          }
        },
        processEvent(J) {
          if (G) return W(J);
          return J;
        },
        _getCachedFramesCount() {
          return Q.size;
        },
        _getFirstCachedFrame() {
          return Q.values()[0];
        },
      };
    },
    Dt0 = ma1.defineIntegration(PdQ),
    jdQ = ma1.convertIntegrationFnToClass(zt0, Dt0);
  Ct0.LocalVariablesSync = jdQ;
  Ct0.createCallbackList = da1;
  Ct0.localVariablesSyncIntegration = Dt0;
});
var $z1 = U((wt0) => {
  Object.defineProperty(wt0, "__esModule", { value: !0 });
  var $t0 = Ut0(),
    _dQ = $t0.LocalVariablesSync,
    xdQ = $t0.localVariablesSyncIntegration;
  wt0.LocalVariables = _dQ;
  wt0.localVariablesIntegration = xdQ;
});
var wz1 = U((Ot0) => {
  Object.defineProperty(Ot0, "__esModule", { value: !0 });
  var qt0 = X1("fs"),
    Et0 = X1("path"),
    Nt0 = y9(),
    ca1,
    Lt0 = "Modules";
  function fdQ() {
    try {
      return X1.cache ? Object.keys(X1.cache) : [];
    } catch (A) {
      return [];
    }
  }
  function hdQ() {
    let A = (X1.main && X1.main.paths) || [],
      B = fdQ(),
      Q = {},
      Z = {};
    return (
      B.forEach((G) => {
        let Y = G,
          I = () => {
            let W = Y;
            if (((Y = Et0.dirname(W)), !Y || W === Y || Z[W])) return;
            if (A.indexOf(Y) < 0) return I();
            let J = Et0.join(W, "package.json");
            if (((Z[W] = !0), !qt0.existsSync(J))) return I();
            try {
              let X = JSON.parse(qt0.readFileSync(J, "utf8"));
              Q[X.name] = X.version;
            } catch (X) {}
          };
        I();
      }),
      Q
    );
  }
  function gdQ() {
    if (!ca1) ca1 = hdQ();
    return ca1;
  }
  var udQ = () => {
      return {
        name: Lt0,
        setupOnce() {},
        processEvent(A) {
          return ((A.modules = { ...A.modules, ...gdQ() }), A);
        },
      };
    },
    Mt0 = Nt0.defineIntegration(udQ),
    mdQ = Nt0.convertIntegrationFnToClass(Lt0, Mt0);
  Ot0.Modules = mdQ;
  Ot0.modulesIntegration = Mt0;
});
var pa1 = U((Rt0) => {
  Object.defineProperty(Rt0, "__esModule", { value: !0 });
  var ldQ = y9(),
    qz1 = LA(),
    la1 = L91(),
    pdQ = 2000;
  function idQ(A) {
    qz1.consoleSandbox(() => {
      console.error(A);
    });
    let B = ldQ.getClient();
    if (B === void 0)
      (la1.DEBUG_BUILD && qz1.logger.warn("No NodeClient was defined, we are exiting the process now."),
        global.process.exit(1));
    let Q = B.getOptions(),
      Z = (Q && Q.shutdownTimeout && Q.shutdownTimeout > 0 && Q.shutdownTimeout) || pdQ;
    B.close(Z).then(
      (G) => {
        if (!G)
          la1.DEBUG_BUILD &&
            qz1.logger.warn("We reached the timeout for emptying the request buffer, still exiting now!");
        global.process.exit(1);
      },
      (G) => {
        la1.DEBUG_BUILD && qz1.logger.error(G);
      },
    );
  }
  Rt0.logAndExitProcess = idQ;
});
var Nz1 = U((yt0) => {
  Object.defineProperty(yt0, "__esModule", { value: !0 });
  var Ez1 = y9(),
    adQ = LA(),
    sdQ = L91(),
    Tt0 = pa1(),
    Pt0 = "OnUncaughtException",
    rdQ = (A = {}) => {
      let B = { exitEvenIfOtherHandlersAreRegistered: !0, ...A };
      return {
        name: Pt0,
        setupOnce() {},
        setup(Q) {
          global.process.on("uncaughtException", St0(Q, B));
        },
      };
    },
    jt0 = Ez1.defineIntegration(rdQ),
    odQ = Ez1.convertIntegrationFnToClass(Pt0, jt0);
  function St0(A, B) {
    let Z = !1,
      G = !1,
      Y = !1,
      I,
      W = A.getOptions();
    return Object.assign(
      (J) => {
        let X = Tt0.logAndExitProcess;
        if (B.onFatalError) X = B.onFatalError;
        else if (W.onFatalError) X = W.onFatalError;
        let V =
            global.process.listeners("uncaughtException").reduce((H, z) => {
              if (
                z.name === "domainUncaughtExceptionClear" ||
                (z.tag && z.tag === "sentry_tracingErrorCallback") ||
                z._errorHandler
              )
                return H;
              else return H + 1;
            }, 0) === 0,
          K = B.exitEvenIfOtherHandlersAreRegistered || V;
        if (!Z) {
          if (((I = J), (Z = !0), Ez1.getClient() === A))
            Ez1.captureException(J, {
              originalException: J,
              captureContext: { level: "fatal" },
              mechanism: { handled: !1, type: "onuncaughtexception" },
            });
          if (!Y && K) ((Y = !0), X(J));
        } else if (K) {
          if (Y)
            (sdQ.DEBUG_BUILD &&
              adQ.logger.warn(
                "uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown",
              ),
              Tt0.logAndExitProcess(J));
          else if (!G)
            ((G = !0),
              setTimeout(() => {
                if (!Y) ((Y = !0), X(I, J));
              }, 2000));
        }
      },
      { _errorHandler: !0 },
    );
  }
  yt0.OnUncaughtException = odQ;
  yt0.makeErrorHandler = St0;
  yt0.onUncaughtExceptionIntegration = jt0;
});
var Mz1 = U((bt0) => {
  Object.defineProperty(bt0, "__esModule", { value: !0 });
  var Lz1 = y9(),
    kt0 = LA(),
    BcQ = pa1(),
    _t0 = "OnUnhandledRejection",
    QcQ = (A = {}) => {
      let B = A.mode || "warn";
      return {
        name: _t0,
        setupOnce() {},
        setup(Q) {
          global.process.on("unhandledRejection", vt0(Q, { mode: B }));
        },
      };
    },
    xt0 = Lz1.defineIntegration(QcQ),
    ZcQ = Lz1.convertIntegrationFnToClass(_t0, xt0);
  function vt0(A, B) {
    return function Q(Z, G) {
      if (Lz1.getClient() !== A) return;
      (Lz1.captureException(Z, {
        originalException: G,
        captureContext: { extra: { unhandledPromiseRejection: !0 } },
        mechanism: { handled: !1, type: "onunhandledrejection" },
      }),
        GcQ(Z, B));
    };
  }
  function GcQ(A, B) {
    let Q =
      "This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:";
    if (B.mode === "warn")
      kt0.consoleSandbox(() => {
        (console.warn(Q), console.error(A && A.stack ? A.stack : A));
      });
    else if (B.mode === "strict")
      (kt0.consoleSandbox(() => {
        console.warn(Q);
      }),
        BcQ.logAndExitProcess(A));
  }
  bt0.OnUnhandledRejection = ZcQ;
  bt0.makeUnhandledPromiseHandler = vt0;
  bt0.onUnhandledRejectionIntegration = xt0;
});
var Oz1 = U((mt0) => {
  Object.defineProperty(mt0, "__esModule", { value: !0 });
  var JcQ = X1("http"),
    XcQ = X1("url"),
    ft0 = y9(),
    ci = LA(),
    ht0 = "Spotlight",
    FcQ = (A = {}) => {
      let B = { sidecarUrl: A.sidecarUrl || "http://localhost:8969/stream" };
      return {
        name: ht0,
        setupOnce() {},
        setup(Q) {
          if (typeof process === "object" && process.env)
            ci.logger.warn(
              "[Spotlight] It seems you're not in dev mode. Do you really want to have Spotlight enabled?",
            );
          KcQ(Q, B);
        },
      };
    },
    gt0 = ft0.defineIntegration(FcQ),
    VcQ = ft0.convertIntegrationFnToClass(ht0, gt0);
  function KcQ(A, B) {
    let Q = HcQ(B.sidecarUrl);
    if (!Q) return;
    let Z = 0;
    if (typeof A.on !== "function") {
      ci.logger.warn("[Spotlight] Cannot connect to spotlight due to missing method on SDK client (`client.on`)");
      return;
    }
    A.on("beforeEnvelope", (G) => {
      if (Z > 3) {
        ci.logger.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests");
        return;
      }
      let Y = ci.serializeEnvelope(G),
        W = ut0()(
          {
            method: "POST",
            path: Q.pathname,
            hostname: Q.hostname,
            port: Q.port,
            headers: { "Content-Type": "application/x-sentry-envelope" },
          },
          (J) => {
            (J.on("data", () => {}), J.on("end", () => {}), J.setEncoding("utf8"));
          },
        );
      (W.on("error", () => {
        (Z++, ci.logger.warn("[Spotlight] Failed to send envelope to Spotlight Sidecar"));
      }),
        W.write(Y),
        W.end());
    });
  }
  function HcQ(A) {
    try {
      return new XcQ.URL(`${A}`);
    } catch (B) {
      ci.logger.warn(`[Spotlight] Invalid sidecar URL: ${A}`);
      return;
    }
  }
  function ut0() {
    let { request: A } = JcQ;
    if (zcQ(A)) return A.__sentry_original__;
    return A;
  }
  function zcQ(A) {
    return "__sentry_original__" in A;
  }
  mt0.Spotlight = VcQ;
  mt0.getNativeHttpRequest = ut0;
  mt0.spotlightIntegration = gt0;
});
var Tz1 = U((dt0) => {
  var { _optionalChain: Rz1 } = LA();
  Object.defineProperty(dt0, "__esModule", { value: !0 });
  var YI = y9(),
    Vg = LA(),
    $cQ = Wg();
  dt0.ChannelName = void 0;
  (function (A) {
    A.RequestCreate = "undici:request:create";
    let Q = "undici:request:headers";
    A.RequestEnd = Q;
    let Z = "undici:request:error";
    A.RequestError = Z;
  })(dt0.ChannelName || (dt0.ChannelName = {}));
  var wcQ = (A) => {
      return new rK(A);
    },
    qcQ = YI.defineIntegration(wcQ);
  class rK {
    static __initStatic() {
      this.id = "Undici";
    }
    __init() {
      this.name = rK.id;
    }
    __init2() {
      this._createSpanUrlMap = new Vg.LRUMap(100);
    }
    __init3() {
      this._headersUrlMap = new Vg.LRUMap(100);
    }
    constructor(A = {}) {
      (rK.prototype.__init.call(this),
        rK.prototype.__init2.call(this),
        rK.prototype.__init3.call(this),
        rK.prototype.__init4.call(this),
        rK.prototype.__init5.call(this),
        rK.prototype.__init6.call(this),
        (this._options = {
          breadcrumbs: A.breadcrumbs === void 0 ? !0 : A.breadcrumbs,
          tracing: A.tracing,
          shouldCreateSpanForRequest: A.shouldCreateSpanForRequest,
        }));
    }
    setupOnce(A) {
      if ($cQ.NODE_VERSION.major < 16) return;
      let B;
      try {
        B = X1("diagnostics_channel");
      } catch (Q) {}
      if (!B || !B.subscribe) return;
      (B.subscribe(dt0.ChannelName.RequestCreate, this._onRequestCreate),
        B.subscribe(dt0.ChannelName.RequestEnd, this._onRequestEnd),
        B.subscribe(dt0.ChannelName.RequestError, this._onRequestError));
    }
    _shouldCreateSpan(A) {
      if (this._options.tracing === !1 || (this._options.tracing === void 0 && !YI.hasTracingEnabled())) return !1;
      if (this._options.shouldCreateSpanForRequest === void 0) return !0;
      let B = this._createSpanUrlMap.get(A);
      if (B !== void 0) return B;
      let Q = this._options.shouldCreateSpanForRequest(A);
      return (this._createSpanUrlMap.set(A, Q), Q);
    }
    __init4() {
      this._onRequestCreate = (A) => {
        if (!Rz1([YI.getClient, "call", (F) => F(), "optionalAccess", (F) => F.getIntegration, "call", (F) => F(rK)]))
          return;
        let { request: B } = A,
          Q = B.origin ? B.origin.toString() + B.path : B.path,
          Z = YI.getClient();
        if (!Z) return;
        if (YI.isSentryRequestUrl(Q, Z) || B.__sentry_span__ !== void 0) return;
        let G = Z.getOptions(),
          Y = YI.getCurrentScope(),
          I = YI.getIsolationScope(),
          W = YI.getActiveSpan(),
          J = this._shouldCreateSpan(Q) ? NcQ(W, B, Q) : void 0;
        if (J) B.__sentry_span__ = J;
        if (
          ((F) => {
            if (G.tracePropagationTargets === void 0) return !0;
            let V = this._headersUrlMap.get(F);
            if (V !== void 0) return V;
            let K = Vg.stringMatchesSomePattern(F, G.tracePropagationTargets);
            return (this._headersUrlMap.set(F, K), K);
          })(Q)
        ) {
          let {
              traceId: F,
              spanId: V,
              sampled: K,
              dsc: H,
            } = { ...I.getPropagationContext(), ...Y.getPropagationContext() },
            z = J ? YI.spanToTraceHeader(J) : Vg.generateSentryTraceHeader(F, V, K),
            D = Vg.dynamicSamplingContextToSentryBaggageHeader(
              H || (J ? YI.getDynamicSamplingContextFromSpan(J) : YI.getDynamicSamplingContextFromClient(F, Z, Y)),
            );
          EcQ(B, z, D);
        }
      };
    }
    __init5() {
      this._onRequestEnd = (A) => {
        if (!Rz1([YI.getClient, "call", (Y) => Y(), "optionalAccess", (Y) => Y.getIntegration, "call", (Y) => Y(rK)]))
          return;
        let { request: B, response: Q } = A,
          Z = B.origin ? B.origin.toString() + B.path : B.path;
        if (YI.isSentryRequestUrl(Z, YI.getClient())) return;
        let G = B.__sentry_span__;
        if (G) (YI.setHttpStatus(G, Q.statusCode), G.end());
        if (this._options.breadcrumbs)
          YI.addBreadcrumb(
            { category: "http", data: { method: B.method, status_code: Q.statusCode, url: Z }, type: "http" },
            { event: "response", request: B, response: Q },
          );
      };
    }
    __init6() {
      this._onRequestError = (A) => {
        if (!Rz1([YI.getClient, "call", (G) => G(), "optionalAccess", (G) => G.getIntegration, "call", (G) => G(rK)]))
          return;
        let { request: B } = A,
          Q = B.origin ? B.origin.toString() + B.path : B.path;
        if (YI.isSentryRequestUrl(Q, YI.getClient())) return;
        let Z = B.__sentry_span__;
        if (Z) (Z.setStatus("internal_error"), Z.end());
        if (this._options.breadcrumbs)
          YI.addBreadcrumb(
            { category: "http", data: { method: B.method, url: Q }, level: "error", type: "http" },
            { event: "error", request: B },
          );
      };
    }
  }
  rK.__initStatic();
  function EcQ(A, B, Q) {
    let Z;
    if (Array.isArray(A.headers)) Z = A.headers.some((G) => G === "sentry-trace");
    else
      Z = A.headers
        .split(
          `\r
`,
        )
        .some((Y) => Y.startsWith("sentry-trace:"));
    if (Z) return;
    if ((A.addHeader("sentry-trace", B), Q)) A.addHeader("baggage", Q);
  }
  function NcQ(A, B, Q) {
    let Z = Vg.parseUrl(Q),
      G = B.method || "GET",
      Y = { "http.method": G };
    if (Z.search) Y["http.query"] = Z.search;
    if (Z.hash) Y["http.fragment"] = Z.hash;
    return Rz1([
      A,
      "optionalAccess",
      (I) => I.startChild,
      "call",
      (I) =>
        I({
          op: "http.client",
          origin: "auto.http.node.undici",
          description: `${G} ${Vg.getSanitizedUrlString(Z)}`,
          data: Y,
        }),
    ]);
  }
  dt0.Undici = rK;
  dt0.nativeNodeFetchintegration = qcQ;
});
var ia1 = U((pt0) => {
  Object.defineProperty(pt0, "__esModule", { value: !0 });
  var ct0 = X1("path"),
    OcQ = LA();
  function lt0(A) {
    return A.replace(/^[A-Z]:/, "").replace(/\\/g, "/");
  }
  function RcQ(A = process.argv[1] ? OcQ.dirname(process.argv[1]) : process.cwd(), B = ct0.sep === "\\") {
    let Q = B ? lt0(A) : A;
    return (Z) => {
      if (!Z) return;
      let G = B ? lt0(Z) : Z,
        { dir: Y, base: I, ext: W } = ct0.posix.parse(G);
      if (W === ".js" || W === ".mjs" || W === ".cjs") I = I.slice(0, W.length * -1);
      if (!Y) Y = ".";
      let J = Y.lastIndexOf("/node_modules");
      if (J > -1) return `${Y.slice(J + 14).replace(/\//g, ".")}:${I}`;
      if (Y.startsWith(Q)) {
        let X = Y.slice(Q.length + 1).replace(/\//g, ".");
        if (X) X += ":";
        return ((X += I), X);
      }
      return I;
    };
  }
  pt0.createGetModuleFromFilename = RcQ;
});
var na1 = U((rt0) => {
  var { _optionalChain: PcQ } = LA();
  Object.defineProperty(rt0, "__esModule", { value: !0 });
  var yC = y9(),
    Kg = LA(),
    jcQ = vo0(),
    ScQ = ya1(),
    ycQ = Vz1(),
    kcQ = Kz1(),
    _cQ = zz1(),
    xcQ = Dz1(),
    vcQ = $z1(),
    bcQ = wz1(),
    fcQ = Nz1(),
    hcQ = Mz1(),
    gcQ = Oz1(),
    ucQ = Tz1(),
    mcQ = ia1(),
    dcQ = xa1(),
    it0 = [
      yC.inboundFiltersIntegration(),
      yC.functionToStringIntegration(),
      yC.linkedErrorsIntegration(),
      yC.requestDataIntegration(),
      ycQ.consoleIntegration(),
      xcQ.httpIntegration(),
      ucQ.nativeNodeFetchintegration(),
      fcQ.onUncaughtExceptionIntegration(),
      hcQ.onUnhandledRejectionIntegration(),
      _cQ.contextLinesIntegration(),
      vcQ.localVariablesIntegration(),
      kcQ.nodeContextIntegration(),
      bcQ.modulesIntegration(),
    ];
  function nt0(A) {
    let B = yC.getMainCarrier(),
      Q = PcQ([B, "access", (Z) => Z.__SENTRY__, "optionalAccess", (Z) => Z.integrations]) || [];
    return [...it0, ...Q];
  }
  function ccQ(A = {}) {
    if ((jcQ.setNodeAsyncContextStrategy(), A.defaultIntegrations === void 0)) A.defaultIntegrations = nt0();
    if (A.dsn === void 0 && process.env.SENTRY_DSN) A.dsn = process.env.SENTRY_DSN;
    let B = process.env.SENTRY_TRACES_SAMPLE_RATE;
    if (A.tracesSampleRate === void 0 && B) {
      let Z = parseFloat(B);
      if (isFinite(Z)) A.tracesSampleRate = Z;
    }
    if (A.release === void 0) {
      let Z = at0();
      if (Z !== void 0) A.release = Z;
      else A.autoSessionTracking = !1;
    }
    if (A.environment === void 0 && process.env.SENTRY_ENVIRONMENT) A.environment = process.env.SENTRY_ENVIRONMENT;
    if (A.autoSessionTracking === void 0 && A.dsn !== void 0) A.autoSessionTracking = !0;
    if (A.instrumenter === void 0) A.instrumenter = "sentry";
    let Q = {
      ...A,
      stackParser: Kg.stackParserFromStackParserOptions(A.stackParser || st0),
      integrations: yC.getIntegrationsToSetup(A),
      transport: A.transport || dcQ.makeNodeTransport,
    };
    if ((yC.initAndBind(A.clientClass || ScQ.NodeClient, Q), A.autoSessionTracking)) pcQ();
    if ((icQ(), A.spotlight)) {
      let Z = yC.getClient();
      if (Z && Z.addIntegration) {
        let G = Z.getOptions().integrations;
        for (let Y of G) Z.addIntegration(Y);
        Z.addIntegration(
          gcQ.spotlightIntegration({ sidecarUrl: typeof A.spotlight === "string" ? A.spotlight : void 0 }),
        );
      }
    }
  }
  function lcQ(A) {
    if (A === void 0) return !1;
    let B = A && A.getOptions();
    if (B && B.autoSessionTracking !== void 0) return B.autoSessionTracking;
    return !1;
  }
  function at0(A) {
    if (process.env.SENTRY_RELEASE) return process.env.SENTRY_RELEASE;
    if (Kg.GLOBAL_OBJ.SENTRY_RELEASE && Kg.GLOBAL_OBJ.SENTRY_RELEASE.id) return Kg.GLOBAL_OBJ.SENTRY_RELEASE.id;
    return (
      process.env.GITHUB_SHA ||
      process.env.COMMIT_REF ||
      process.env.VERCEL_GIT_COMMIT_SHA ||
      process.env.VERCEL_GITHUB_COMMIT_SHA ||
      process.env.VERCEL_GITLAB_COMMIT_SHA ||
      process.env.VERCEL_BITBUCKET_COMMIT_SHA ||
      process.env.ZEIT_GITHUB_COMMIT_SHA ||
      process.env.ZEIT_GITLAB_COMMIT_SHA ||
      process.env.ZEIT_BITBUCKET_COMMIT_SHA ||
      process.env.CF_PAGES_COMMIT_SHA ||
      A
    );
  }
  var st0 = Kg.createStackParser(Kg.nodeStackLineParser(mcQ.createGetModuleFromFilename()));
  function pcQ() {
    (yC.startSession(),
      process.on("beforeExit", () => {
        let A = yC.getIsolationScope().getSession();
        if (A && !["exited", "crashed"].includes(A.status)) yC.endSession();
      }));
  }
  function icQ() {
    let A = (process.env.SENTRY_USE_ENVIRONMENT || "").toLowerCase();
    if (!["false", "n", "no", "off", "0"].includes(A)) {
      let B = process.env.SENTRY_TRACE,
        Q = process.env.SENTRY_BAGGAGE,
        Z = Kg.propagationContextFromHeaders(B, Q);
      yC.getCurrentScope().setPropagationContext(Z);
    }
  }
  rt0.defaultIntegrations = it0;
  rt0.defaultStackParser = st0;
  rt0.getDefaultIntegrations = nt0;
  rt0.getSentryRelease = at0;
  rt0.init = ccQ;
  rt0.isAutoSessionTrackingEnabled = lcQ;
});
var tt0 = U((ot0) => {
  Object.defineProperty(ot0, "__esModule", { value: !0 });
  var Pz1 = X1("fs"),
    aa1 = X1("path");
  function ecQ(A) {
    let B = aa1.resolve(A);
    if (!Pz1.existsSync(B)) throw new Error(`Cannot read contents of ${B}. Directory does not exist.`);
    if (!Pz1.statSync(B).isDirectory()) throw new Error(`Cannot read contents of ${B}, because it is not a directory.`);
    let Q = (Z) => {
      return Pz1.readdirSync(Z).reduce((G, Y) => {
        let I = aa1.join(Z, Y);
        if (Pz1.statSync(I).isDirectory()) return G.concat(Q(I));
        return (G.push(I), G);
      }, []);
    };
    return Q(B).map((Z) => aa1.relative(B, Z));
  }
  ot0.deepReadDirSync = ecQ;
});
var et0 = U((BlQ) => {
  /*! @sentry/node 7.120.3 (5a833b4) | https://github.com/getsentry/sentry-javascript */ BlQ.base64WorkerScript =
    "aW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJ2luc3BlY3Rvcic7CmltcG9ydCB7IHdvcmtlckRhdGEsIHBhcmVudFBvcnQgfSBmcm9tICd3b3JrZXJfdGhyZWFkcyc7CmltcG9ydCB7IHBvc2l4LCBzZXAgfSBmcm9tICdwYXRoJzsKaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJzsKaW1wb3J0ICogYXMgaHR0cHMgZnJvbSAnaHR0cHMnOwppbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gJ3N0cmVhbSc7CmltcG9ydCB7IFVSTCB9IGZyb20gJ3VybCc7CmltcG9ydCB7IGNyZWF0ZUd6aXAgfSBmcm9tICd6bGliJzsKaW1wb3J0ICogYXMgbmV0IGZyb20gJ25ldCc7CmltcG9ydCAqIGFzIHRscyBmcm9tICd0bHMnOwoKLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC91bmJvdW5kLW1ldGhvZApjb25zdCBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7CgovKioKICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIG9uZSBvZiBhIGZldyBFcnJvciBvciBFcnJvci1saWtlCiAqIHtAbGluayBpc0Vycm9yfS4KICoKICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuCiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC4KICovCmZ1bmN0aW9uIGlzRXJyb3Iod2F0KSB7CiAgc3dpdGNoIChvYmplY3RUb1N0cmluZy5jYWxsKHdhdCkpIHsKICAgIGNhc2UgJ1tvYmplY3QgRXJyb3JdJzoKICAgIGNhc2UgJ1tvYmplY3QgRXhjZXB0aW9uXSc6CiAgICBjYXNlICdbb2JqZWN0IERPTUV4Y2VwdGlvbl0nOgogICAgICByZXR1cm4gdHJ1ZTsKICAgIGRlZmF1bHQ6CiAgICAgIHJldHVybiBpc0luc3RhbmNlT2Yod2F0LCBFcnJvcik7CiAgfQp9Ci8qKgogKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gYnVpbHQtaW4gY2xhc3MuCiAqCiAqIEBwYXJhbSB3YXQgVGhlIHZhbHVlIHRvIGJlIGNoZWNrZWQKICogQHBhcmFtIGNsYXNzTmFtZQogKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuCiAqLwpmdW5jdGlvbiBpc0J1aWx0aW4od2F0LCBjbGFzc05hbWUpIHsKICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh3YXQpID09PSBgW29iamVjdCAke2NsYXNzTmFtZX1dYDsKfQoKLyoqCiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhIHN0cmluZwogKiB7QGxpbmsgaXNTdHJpbmd9LgogKgogKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC4KICogQHJldHVybnMgQSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0LgogKi8KZnVuY3Rpb24gaXNTdHJpbmcod2F0KSB7CiAgcmV0dXJuIGlzQnVpbHRpbih3YXQsICdTdHJpbmcnKTsKfQoKLyoqCiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhbiBvYmplY3QgbGl0ZXJhbCwgb3IgYSBjbGFzcyBpbnN0YW5jZS4KICoge0BsaW5rIGlzUGxhaW5PYmplY3R9LgogKgogKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC4KICogQHJldHVybnMgQSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0LgogKi8KZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh3YXQpIHsKICByZXR1cm4gaXNCdWlsdGluKHdhdCwgJ09iamVjdCcpOwp9CgovKioKICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIGFuIEV2ZW50IGluc3RhbmNlCiAqIHtAbGluayBpc0V2ZW50fS4KICoKICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuCiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC4KICovCmZ1bmN0aW9uIGlzRXZlbnQod2F0KSB7CiAgcmV0dXJuIHR5cGVvZiBFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJbnN0YW5jZU9mKHdhdCwgRXZlbnQpOwp9CgovKioKICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIGFuIEVsZW1lbnQgaW5zdGFuY2UKICoge0BsaW5rIGlzRWxlbWVudH0uCiAqCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuCiAqLwpmdW5jdGlvbiBpc0VsZW1lbnQod2F0KSB7CiAgcmV0dXJuIHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc0luc3RhbmNlT2Yod2F0LCBFbGVtZW50KTsKfQoKLyoqCiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlIGhhcyBhIHRoZW4gZnVuY3Rpb24uCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKi8KZnVuY3Rpb24gaXNUaGVuYWJsZSh3YXQpIHsKICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzCiAgcmV0dXJuIEJvb2xlYW4od2F0ICYmIHdhdC50aGVuICYmIHR5cGVvZiB3YXQudGhlbiA9PT0gJ2Z1bmN0aW9uJyk7Cn0KCi8qKgogKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSdzIHR5cGUgaXMgYSBTeW50aGV0aWNFdmVudAogKiB7QGxpbmsgaXNTeW50aGV0aWNFdmVudH0uCiAqCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuCiAqLwpmdW5jdGlvbiBpc1N5bnRoZXRpY0V2ZW50KHdhdCkgewogIHJldHVybiBpc1BsYWluT2JqZWN0KHdhdCkgJiYgJ25hdGl2ZUV2ZW50JyBpbiB3YXQgJiYgJ3ByZXZlbnREZWZhdWx0JyBpbiB3YXQgJiYgJ3N0b3BQcm9wYWdhdGlvbicgaW4gd2F0Owp9CgovKioKICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUgaXMgTmFOCiAqIHtAbGluayBpc05hTn0uCiAqCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuCiAqLwpmdW5jdGlvbiBpc05hTiQxKHdhdCkgewogIHJldHVybiB0eXBlb2Ygd2F0ID09PSAnbnVtYmVyJyAmJiB3YXQgIT09IHdhdDsKfQoKLyoqCiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhbiBpbnN0YW5jZSBvZiBwcm92aWRlZCBjb25zdHJ1Y3Rvci4KICoge0BsaW5rIGlzSW5zdGFuY2VPZn0uCiAqCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKiBAcGFyYW0gYmFzZSBBIGNvbnN0cnVjdG9yIHRvIGJlIHVzZWQgaW4gYSBjaGVjay4KICogQHJldHVybnMgQSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0LgogKi8KZnVuY3Rpb24gaXNJbnN0YW5jZU9mKHdhdCwgYmFzZSkgewogIHRyeSB7CiAgICByZXR1cm4gd2F0IGluc3RhbmNlb2YgYmFzZTsKICB9IGNhdGNoIChfZSkgewogICAgcmV0dXJuIGZhbHNlOwogIH0KfQoKLyoqCiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhIFZ1ZSBWaWV3TW9kZWwuCiAqCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuCiAqLwpmdW5jdGlvbiBpc1Z1ZVZpZXdNb2RlbCh3YXQpIHsKICAvLyBOb3QgdXNpbmcgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyBiZWNhdXNlIGluIFZ1ZSAzIGl0IHdvdWxkIHJlYWQgdGhlIGluc3RhbmNlJ3MgU3ltYm9sKFN5bWJvbC50b1N0cmluZ1RhZykgcHJvcGVydHkuCiAgcmV0dXJuICEhKHR5cGVvZiB3YXQgPT09ICdvYmplY3QnICYmIHdhdCAhPT0gbnVsbCAmJiAoKHdhdCApLl9faXNWdWUgfHwgKHdhdCApLl9pc1Z1ZSkpOwp9CgovKiogSW50ZXJuYWwgZ2xvYmFsIHdpdGggY29tbW9uIHByb3BlcnRpZXMgYW5kIFNlbnRyeSBleHRlbnNpb25zICAqLwoKLy8gVGhlIGNvZGUgYmVsb3cgZm9yICdpc0dsb2JhbE9iaicgYW5kICdHTE9CQUxfT0JKJyB3YXMgY29waWVkIGZyb20gY29yZS1qcyBiZWZvcmUgbW9kaWZpY2F0aW9uCi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvMWI5NDRkZjU1MjgyY2RjOTljOTBkYjVmNDllYjBiNmVkYTJjYzBhMy9wYWNrYWdlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMKLy8gY29yZS1qcyBoYXMgdGhlIGZvbGxvd2luZyBsaWNlbmNlOgovLwovLyBDb3B5cmlnaHQgKGMpIDIwMTQtMjAyMiBEZW5pcyBQdXNoa2FyZXYKLy8KLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weQovLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAiU29mdHdhcmUiKSwgdG8gZGVhbAovLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzCi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwKLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzCi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6Ci8vCi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluCi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLgovLwovLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgIkFTIElTIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUgovLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwKLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFCi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIKLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwKLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTgovLyBUSEUgU09GVFdBUkUuCgovKiogUmV0dXJucyAnb2JqJyBpZiBpdCdzIHRoZSBnbG9iYWwgb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB1bmRlZmluZWQgKi8KZnVuY3Rpb24gaXNHbG9iYWxPYmoob2JqKSB7CiAgcmV0dXJuIG9iaiAmJiBvYmouTWF0aCA9PSBNYXRoID8gb2JqIDogdW5kZWZpbmVkOwp9CgovKiogR2V0J3MgdGhlIGdsb2JhbCBvYmplY3QgZm9yIHRoZSBjdXJyZW50IEphdmFTY3JpcHQgcnVudGltZSAqLwpjb25zdCBHTE9CQUxfT0JKID0KICAodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgaXNHbG9iYWxPYmooZ2xvYmFsVGhpcykpIHx8CiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscwogICh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIGlzR2xvYmFsT2JqKHdpbmRvdykpIHx8CiAgKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIGlzR2xvYmFsT2JqKHNlbGYpKSB8fAogICh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGlzR2xvYmFsT2JqKGdsb2JhbCkpIHx8CiAgKGZ1bmN0aW9uICgpIHsKICAgIHJldHVybiB0aGlzOwogIH0pKCkgfHwKICB7fTsKCi8qKgogKiBAZGVwcmVjYXRlZCBVc2UgR0xPQkFMX09CSiBpbnN0ZWFkIG9yIFdJTkRPVyBmcm9tIEBzZW50cnkvYnJvd3Nlci4gVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gdjgKICovCmZ1bmN0aW9uIGdldEdsb2JhbE9iamVjdCgpIHsKICByZXR1cm4gR0xPQkFMX09CSiA7Cn0KCi8qKgogKiBSZXR1cm5zIGEgZ2xvYmFsIHNpbmdsZXRvbiBjb250YWluZWQgaW4gdGhlIGdsb2JhbCBgX19TRU5UUllfX2Agb2JqZWN0LgogKgogKiBJZiB0aGUgc2luZ2xldG9uIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCBpbiBgX19TRU5UUllfX2AsIGl0IHdpbGwgYmUgY3JlYXRlZCB1c2luZyB0aGUgZ2l2ZW4gZmFjdG9yeQogKiBmdW5jdGlvbiBhbmQgYWRkZWQgdG8gdGhlIGBfX1NFTlRSWV9fYCBvYmplY3QuCiAqCiAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgdGhlIGdsb2JhbCBzaW5nbGV0b24gb24gX19TRU5UUllfXwogKiBAcGFyYW0gY3JlYXRvciBjcmVhdG9yIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBzaW5nbGV0b24gaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0IG9uIGBfX1NFTlRSWV9fYAogKiBAcGFyYW0gb2JqIChPcHRpb25hbCkgVGhlIGdsb2JhbCBvYmplY3Qgb24gd2hpY2ggdG8gbG9vayBmb3IgYF9fU0VOVFJZX19gLCBpZiBub3QgYEdMT0JBTF9PQkpgJ3MgcmV0dXJuIHZhbHVlCiAqIEByZXR1cm5zIHRoZSBzaW5nbGV0b24KICovCmZ1bmN0aW9uIGdldEdsb2JhbFNpbmdsZXRvbihuYW1lLCBjcmVhdG9yLCBvYmopIHsKICBjb25zdCBnYmwgPSAob2JqIHx8IEdMT0JBTF9PQkopIDsKICBjb25zdCBfX1NFTlRSWV9fID0gKGdibC5fX1NFTlRSWV9fID0gZ2JsLl9fU0VOVFJZX18gfHwge30pOwogIGNvbnN0IHNpbmdsZXRvbiA9IF9fU0VOVFJZX19bbmFtZV0gfHwgKF9fU0VOVFJZX19bbmFtZV0gPSBjcmVhdG9yKCkpOwogIHJldHVybiBzaW5nbGV0b247Cn0KCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgpjb25zdCBXSU5ET1cgPSBnZXRHbG9iYWxPYmplY3QoKTsKCmNvbnN0IERFRkFVTFRfTUFYX1NUUklOR19MRU5HVEggPSA4MDsKCi8qKgogKiBHaXZlbiBhIGNoaWxkIERPTSBlbGVtZW50LCByZXR1cm5zIGEgcXVlcnktc2VsZWN0b3Igc3RhdGVtZW50IGRlc2NyaWJpbmcgdGhhdAogKiBhbmQgaXRzIGFuY2VzdG9ycwogKiBlLmcuIFtIVE1MRWxlbWVudF0gPT4gYm9keSA+IGRpdiA+IGlucHV0I2Zvby5idG5bbmFtZT1iYXpdCiAqIEByZXR1cm5zIGdlbmVyYXRlZCBET00gcGF0aAogKi8KZnVuY3Rpb24gaHRtbFRyZWVBc1N0cmluZygKICBlbGVtLAogIG9wdGlvbnMgPSB7fSwKKSB7CiAgaWYgKCFlbGVtKSB7CiAgICByZXR1cm4gJzx1bmtub3duPic7CiAgfQoKICAvLyB0cnkvY2F0Y2ggYm90aDoKICAvLyAtIGFjY2Vzc2luZyBldmVudC50YXJnZXQgKHNlZSBnZXRzZW50cnkvcmF2ZW4tanMjODM4LCAjNzY4KQogIC8vIC0gYGh0bWxUcmVlQXNTdHJpbmdgIGJlY2F1c2UgaXQncyBjb21wbGV4LCBhbmQganVzdCBhY2Nlc3NpbmcgdGhlIERPTSBpbmNvcnJlY3RseQogIC8vIC0gY2FuIHRocm93IGFuIGV4Y2VwdGlvbiBpbiBzb21lIGNpcmN1bXN0YW5jZXMuCiAgdHJ5IHsKICAgIGxldCBjdXJyZW50RWxlbSA9IGVsZW0gOwogICAgY29uc3QgTUFYX1RSQVZFUlNFX0hFSUdIVCA9IDU7CiAgICBjb25zdCBvdXQgPSBbXTsKICAgIGxldCBoZWlnaHQgPSAwOwogICAgbGV0IGxlbiA9IDA7CiAgICBjb25zdCBzZXBhcmF0b3IgPSAnID4gJzsKICAgIGNvbnN0IHNlcExlbmd0aCA9IHNlcGFyYXRvci5sZW5ndGg7CiAgICBsZXQgbmV4dFN0cjsKICAgIGNvbnN0IGtleUF0dHJzID0gQXJyYXkuaXNBcnJheShvcHRpb25zKSA/IG9wdGlvbnMgOiBvcHRpb25zLmtleUF0dHJzOwogICAgY29uc3QgbWF4U3RyaW5nTGVuZ3RoID0gKCFBcnJheS5pc0FycmF5KG9wdGlvbnMpICYmIG9wdGlvbnMubWF4U3RyaW5nTGVuZ3RoKSB8fCBERUZBVUxUX01BWF9TVFJJTkdfTEVOR1RIOwoKICAgIHdoaWxlIChjdXJyZW50RWxlbSAmJiBoZWlnaHQrKyA8IE1BWF9UUkFWRVJTRV9IRUlHSFQpIHsKICAgICAgbmV4dFN0ciA9IF9odG1sRWxlbWVudEFzU3RyaW5nKGN1cnJlbnRFbGVtLCBrZXlBdHRycyk7CiAgICAgIC8vIGJhaWwgb3V0IGlmCiAgICAgIC8vIC0gbmV4dFN0ciBpcyB0aGUgJ2h0bWwnIGVsZW1lbnQKICAgICAgLy8gLSB0aGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmcgdGhhdCB3b3VsZCBiZSBjcmVhdGVkIGV4Y2VlZHMgbWF4U3RyaW5nTGVuZ3RoCiAgICAgIC8vICAgKGlnbm9yZSB0aGlzIGxpbWl0IGlmIHdlIGFyZSBvbiB0aGUgZmlyc3QgaXRlcmF0aW9uKQogICAgICBpZiAobmV4dFN0ciA9PT0gJ2h0bWwnIHx8IChoZWlnaHQgPiAxICYmIGxlbiArIG91dC5sZW5ndGggKiBzZXBMZW5ndGggKyBuZXh0U3RyLmxlbmd0aCA+PSBtYXhTdHJpbmdMZW5ndGgpKSB7CiAgICAgICAgYnJlYWs7CiAgICAgIH0KCiAgICAgIG91dC5wdXNoKG5leHRTdHIpOwoKICAgICAgbGVuICs9IG5leHRTdHIubGVuZ3RoOwogICAgICBjdXJyZW50RWxlbSA9IGN1cnJlbnRFbGVtLnBhcmVudE5vZGU7CiAgICB9CgogICAgcmV0dXJuIG91dC5yZXZlcnNlKCkuam9pbihzZXBhcmF0b3IpOwogIH0gY2F0Y2ggKF9vTykgewogICAgcmV0dXJuICc8dW5rbm93bj4nOwogIH0KfQoKLyoqCiAqIFJldHVybnMgYSBzaW1wbGUsIHF1ZXJ5LXNlbGVjdG9yIHJlcHJlc2VudGF0aW9uIG9mIGEgRE9NIGVsZW1lbnQKICogZS5nLiBbSFRNTEVsZW1lbnRdID0+IGlucHV0I2Zvby5idG5bbmFtZT1iYXpdCiAqIEByZXR1cm5zIGdlbmVyYXRlZCBET00gcGF0aAogKi8KZnVuY3Rpb24gX2h0bWxFbGVtZW50QXNTdHJpbmcoZWwsIGtleUF0dHJzKSB7CiAgY29uc3QgZWxlbSA9IGVsCgo7CgogIGNvbnN0IG91dCA9IFtdOwogIGxldCBjbGFzc05hbWU7CiAgbGV0IGNsYXNzZXM7CiAgbGV0IGtleTsKICBsZXQgYXR0cjsKICBsZXQgaTsKCiAgaWYgKCFlbGVtIHx8ICFlbGVtLnRhZ05hbWUpIHsKICAgIHJldHVybiAnJzsKICB9CgogIC8vIEB0cy1leHBlY3QtZXJyb3IgV0lORE9XIGhhcyBIVE1MRWxlbWVudAogIGlmIChXSU5ET1cuSFRNTEVsZW1lbnQpIHsKICAgIC8vIElmIHVzaW5nIHRoZSBjb21wb25lbnQgbmFtZSBhbm5vdGF0aW9uIHBsdWdpbiwgdGhpcyB2YWx1ZSBtYXkgYmUgYXZhaWxhYmxlIG9uIHRoZSBET00gbm9kZQogICAgaWYgKGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBlbGVtLmRhdGFzZXQgJiYgZWxlbS5kYXRhc2V0WydzZW50cnlDb21wb25lbnQnXSkgewogICAgICByZXR1cm4gZWxlbS5kYXRhc2V0WydzZW50cnlDb21wb25lbnQnXTsKICAgIH0KICB9CgogIG91dC5wdXNoKGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpKTsKCiAgLy8gUGFpcnMgb2YgYXR0cmlidXRlIGtleXMgZGVmaW5lZCBpbiBgc2VyaWFsaXplQXR0cmlidXRlYCBhbmQgdGhlaXIgdmFsdWVzIG9uIGVsZW1lbnQuCiAgY29uc3Qga2V5QXR0clBhaXJzID0KICAgIGtleUF0dHJzICYmIGtleUF0dHJzLmxlbmd0aAogICAgICA/IGtleUF0dHJzLmZpbHRlcihrZXlBdHRyID0+IGVsZW0uZ2V0QXR0cmlidXRlKGtleUF0dHIpKS5tYXAoa2V5QXR0ciA9PiBba2V5QXR0ciwgZWxlbS5nZXRBdHRyaWJ1dGUoa2V5QXR0cildKQogICAgICA6IG51bGw7CgogIGlmIChrZXlBdHRyUGFpcnMgJiYga2V5QXR0clBhaXJzLmxlbmd0aCkgewogICAga2V5QXR0clBhaXJzLmZvckVhY2goa2V5QXR0clBhaXIgPT4gewogICAgICBvdXQucHVzaChgWyR7a2V5QXR0clBhaXJbMF19PSIke2tleUF0dHJQYWlyWzFdfSJdYCk7CiAgICB9KTsKICB9IGVsc2UgewogICAgaWYgKGVsZW0uaWQpIHsKICAgICAgb3V0LnB1c2goYCMke2VsZW0uaWR9YCk7CiAgICB9CgogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdAogICAgY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWU7CiAgICBpZiAoY2xhc3NOYW1lICYmIGlzU3RyaW5nKGNsYXNzTmFtZSkpIHsKICAgICAgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgvXHMrLyk7CiAgICAgIGZvciAoaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgb3V0LnB1c2goYC4ke2NsYXNzZXNbaV19YCk7CiAgICAgIH0KICAgIH0KICB9CiAgY29uc3QgYWxsb3dlZEF0dHJzID0gWydhcmlhLWxhYmVsJywgJ3R5cGUnLCAnbmFtZScsICd0aXRsZScsICdhbHQnXTsKICBmb3IgKGkgPSAwOyBpIDwgYWxsb3dlZEF0dHJzLmxlbmd0aDsgaSsrKSB7CiAgICBrZXkgPSBhbGxvd2VkQXR0cnNbaV07CiAgICBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoa2V5KTsKICAgIGlmIChhdHRyKSB7CiAgICAgIG91dC5wdXNoKGBbJHtrZXl9PSIke2F0dHJ9Il1gKTsKICAgIH0KICB9CiAgcmV0dXJuIG91dC5qb2luKCcnKTsKfQoKLyoqCiAqIFRoaXMgc2VydmVzIGFzIGEgYnVpbGQgdGltZSBmbGFnIHRoYXQgd2lsbCBiZSB0cnVlIGJ5IGRlZmF1bHQsIGJ1dCBmYWxzZSBpbiBub24tZGVidWcgYnVpbGRzIG9yIGlmIHVzZXJzIHJlcGxhY2UgYF9fU0VOVFJZX0RFQlVHX19gIGluIHRoZWlyIGdlbmVyYXRlZCBjb2RlLgogKgogKiBBVFRFTlRJT046IFRoaXMgY29uc3RhbnQgbXVzdCBuZXZlciBjcm9zcyBwYWNrYWdlIGJvdW5kYXJpZXMgKGkuZS4gYmUgZXhwb3J0ZWQpIHRvIGd1YXJhbnRlZSB0aGF0IGl0IGNhbiBiZSB1c2VkIGZvciB0cmVlIHNoYWtpbmcuCiAqLwpjb25zdCBERUJVR19CVUlMRCQxID0gKHR5cGVvZiBfX1NFTlRSWV9ERUJVR19fID09PSAndW5kZWZpbmVkJyB8fCBfX1NFTlRSWV9ERUJVR19fKTsKCi8qKiBQcmVmaXggZm9yIGxvZ2dpbmcgc3RyaW5ncyAqLwpjb25zdCBQUkVGSVggPSAnU2VudHJ5IExvZ2dlciAnOwoKY29uc3QgQ09OU09MRV9MRVZFTFMgPSBbCiAgJ2RlYnVnJywKICAnaW5mbycsCiAgJ3dhcm4nLAogICdlcnJvcicsCiAgJ2xvZycsCiAgJ2Fzc2VydCcsCiAgJ3RyYWNlJywKXSA7CgovKiogVGhpcyBtYXkgYmUgbXV0YXRlZCBieSB0aGUgY29uc29sZSBpbnN0cnVtZW50YXRpb24uICovCmNvbnN0IG9yaWdpbmFsQ29uc29sZU1ldGhvZHMKCiA9IHt9OwoKLyoqIEpTRG9jICovCgovKioKICogVGVtcG9yYXJpbHkgZGlzYWJsZSBzZW50cnkgY29uc29sZSBpbnN0cnVtZW50YXRpb25zLgogKgogKiBAcGFyYW0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIHJ1biBhZ2FpbnN0IHRoZSBvcmlnaW5hbCBgY29uc29sZWAgbWVzc2FnZXMKICogQHJldHVybnMgVGhlIHJlc3VsdHMgb2YgdGhlIGNhbGxiYWNrCiAqLwpmdW5jdGlvbiBjb25zb2xlU2FuZGJveChjYWxsYmFjaykgewogIGlmICghKCdjb25zb2xlJyBpbiBHTE9CQUxfT0JKKSkgewogICAgcmV0dXJuIGNhbGxiYWNrKCk7CiAgfQoKICBjb25zdCBjb25zb2xlID0gR0xPQkFMX09CSi5jb25zb2xlIDsKICBjb25zdCB3cmFwcGVkRnVuY3MgPSB7fTsKCiAgY29uc3Qgd3JhcHBlZExldmVscyA9IE9iamVjdC5rZXlzKG9yaWdpbmFsQ29uc29sZU1ldGhvZHMpIDsKCiAgLy8gUmVzdG9yZSBhbGwgd3JhcHBlZCBjb25zb2xlIG1ldGhvZHMKICB3cmFwcGVkTGV2ZWxzLmZvckVhY2gobGV2ZWwgPT4gewogICAgY29uc3Qgb3JpZ2luYWxDb25zb2xlTWV0aG9kID0gb3JpZ2luYWxDb25zb2xlTWV0aG9kc1tsZXZlbF0gOwogICAgd3JhcHBlZEZ1bmNzW2xldmVsXSA9IGNvbnNvbGVbbGV2ZWxdIDsKICAgIGNvbnNvbGVbbGV2ZWxdID0gb3JpZ2luYWxDb25zb2xlTWV0aG9kOwogIH0pOwoKICB0cnkgewogICAgcmV0dXJuIGNhbGxiYWNrKCk7CiAgfSBmaW5hbGx5IHsKICAgIC8vIFJldmVydCByZXN0b3JhdGlvbiB0byB3cmFwcGVkIHN0YXRlCiAgICB3cmFwcGVkTGV2ZWxzLmZvckVhY2gobGV2ZWwgPT4gewogICAgICBjb25zb2xlW2xldmVsXSA9IHdyYXBwZWRGdW5jc1tsZXZlbF0gOwogICAgfSk7CiAgfQp9CgpmdW5jdGlvbiBtYWtlTG9nZ2VyKCkgewogIGxldCBlbmFibGVkID0gZmFsc2U7CiAgY29uc3QgbG9nZ2VyID0gewogICAgZW5hYmxlOiAoKSA9PiB7CiAgICAgIGVuYWJsZWQgPSB0cnVlOwogICAgfSwKICAgIGRpc2FibGU6ICgpID0+IHsKICAgICAgZW5hYmxlZCA9IGZhbHNlOwogICAgfSwKICAgIGlzRW5hYmxlZDogKCkgPT4gZW5hYmxlZCwKICB9OwoKICBpZiAoREVCVUdfQlVJTEQkMSkgewogICAgQ09OU09MRV9MRVZFTFMuZm9yRWFjaChuYW1lID0+IHsKICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkKICAgICAgbG9nZ2VyW25hbWVdID0gKC4uLmFyZ3MpID0+IHsKICAgICAgICBpZiAoZW5hYmxlZCkgewogICAgICAgICAgY29uc29sZVNhbmRib3goKCkgPT4gewogICAgICAgICAgICBHTE9CQUxfT0JKLmNvbnNvbGVbbmFtZV0oYCR7UFJFRklYfVske25hbWV9XTpgLCAuLi5hcmdzKTsKICAgICAgICAgIH0pOwogICAgICAgIH0KICAgICAgfTsKICAgIH0pOwogIH0gZWxzZSB7CiAgICBDT05TT0xFX0xFVkVMUy5mb3JFYWNoKG5hbWUgPT4gewogICAgICBsb2dnZXJbbmFtZV0gPSAoKSA9PiB1bmRlZmluZWQ7CiAgICB9KTsKICB9CgogIHJldHVybiBsb2dnZXIgOwp9Cgpjb25zdCBsb2dnZXIgPSBtYWtlTG9nZ2VyKCk7CgovKioKICogUmVuZGVycyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHNuLgogKgogKiBCeSBkZWZhdWx0LCB0aGlzIHdpbGwgcmVuZGVyIHRoZSBwdWJsaWMgcmVwcmVzZW50YXRpb24gd2l0aG91dCB0aGUgcGFzc3dvcmQKICogY29tcG9uZW50LiBUbyBnZXQgdGhlIGRlcHJlY2F0ZWQgcHJpdmF0ZSByZXByZXNlbnRhdGlvbiwgc2V0IGB3aXRoUGFzc3dvcmRgCiAqIHRvIHRydWUuCiAqCiAqIEBwYXJhbSB3aXRoUGFzc3dvcmQgV2hlbiBzZXQgdG8gdHJ1ZSwgdGhlIHBhc3N3b3JkIHdpbGwgYmUgaW5jbHVkZWQuCiAqLwpmdW5jdGlvbiBkc25Ub1N0cmluZyhkc24sIHdpdGhQYXNzd29yZCA9IGZhbHNlKSB7CiAgY29uc3QgeyBob3N0LCBwYXRoLCBwYXNzLCBwb3J0LCBwcm9qZWN0SWQsIHByb3RvY29sLCBwdWJsaWNLZXkgfSA9IGRzbjsKICByZXR1cm4gKAogICAgYCR7cHJvdG9jb2x9Oi8vJHtwdWJsaWNLZXl9JHt3aXRoUGFzc3dvcmQgJiYgcGFzcyA/IGA6JHtwYXNzfWAgOiAnJ31gICsKICAgIGBAJHtob3N0fSR7cG9ydCA/IGA6JHtwb3J0fWAgOiAnJ30vJHtwYXRoID8gYCR7cGF0aH0vYCA6IHBhdGh9JHtwcm9qZWN0SWR9YAogICk7Cn0KCi8qKiBBbiBlcnJvciBlbWl0dGVkIGJ5IFNlbnRyeSBTREtzIGFuZCByZWxhdGVkIHV0aWxpdGllcy4gKi8KY2xhc3MgU2VudHJ5RXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgLyoqIERpc3BsYXkgbmFtZSBvZiB0aGlzIGVycm9yIGluc3RhbmNlLiAqLwoKICAgY29uc3RydWN0b3IoIG1lc3NhZ2UsIGxvZ0xldmVsID0gJ3dhcm4nKSB7CiAgICBzdXBlcihtZXNzYWdlKTt0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlOwogICAgdGhpcy5uYW1lID0gbmV3LnRhcmdldC5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTsKICAgIC8vIFRoaXMgc2V0cyB0aGUgcHJvdG90eXBlIHRvIGJlIGBFcnJvcmAsIG5vdCBgU2VudHJ5RXJyb3JgLiBJdCdzIHVuY2xlYXIgd2h5IHdlIGRvIHRoaXMsIGJ1dCBjb21tZW50aW5nIHRoaXMgbGluZQogICAgLy8gb3V0IGNhdXNlcyB2YXJpb3VzIChzZWVtaW5nbHkgdG90YWxseSB1bnJlbGF0ZWQpIHBsYXl3cmlnaHQgdGVzdHMgY29uc2lzdGVudGx5IHRpbWUgb3V0LiBGWUksIHRoaXMgbWFrZXMKICAgIC8vIGluc3RhbmNlcyBvZiBgU2VudHJ5RXJyb3JgIGZhaWwgYG9iaiBpbnN0YW5jZW9mIFNlbnRyeUVycm9yYCBjaGVja3MuCiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpOwogICAgdGhpcy5sb2dMZXZlbCA9IGxvZ0xldmVsOwogIH0KfQoKLyoqCiAqIEVuY29kZXMgZ2l2ZW4gb2JqZWN0IGludG8gdXJsLWZyaWVuZGx5IGZvcm1hdAogKgogKiBAcGFyYW0gb2JqZWN0IEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHNlcmlhbGl6YWJsZSB2YWx1ZXMKICogQHJldHVybnMgc3RyaW5nIEVuY29kZWQKICovCmZ1bmN0aW9uIHVybEVuY29kZShvYmplY3QpIHsKICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KQogICAgLm1hcChrZXkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9iamVjdFtrZXldKX1gKQogICAgLmpvaW4oJyYnKTsKfQoKLyoqCiAqIFRyYW5zZm9ybXMgYW55IGBFcnJvcmAgb3IgYEV2ZW50YCBpbnRvIGEgcGxhaW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZWlyIGVudW1lcmFibGUgcHJvcGVydGllcywgYW5kIHNvbWUgb2YgdGhlaXIKICogbm9uLWVudW1lcmFibGUgcHJvcGVydGllcyBhdHRhY2hlZC4KICoKICogQHBhcmFtIHZhbHVlIEluaXRpYWwgc291cmNlIHRoYXQgd2UgaGF2ZSB0byB0cmFuc2Zvcm0gaW4gb3JkZXIgZm9yIGl0IHRvIGJlIHVzYWJsZSBieSB0aGUgc2VyaWFsaXplcgogKiBAcmV0dXJucyBBbiBFdmVudCBvciBFcnJvciB0dXJuZWQgaW50byBhbiBvYmplY3QgLSBvciB0aGUgdmFsdWUgYXJndXJtZW50IGl0c2VsZiwgd2hlbiB2YWx1ZSBpcyBuZWl0aGVyIGFuIEV2ZW50IG5vcgogKiAgYW4gRXJyb3IuCiAqLwpmdW5jdGlvbiBjb252ZXJ0VG9QbGFpbk9iamVjdCgKICB2YWx1ZSwKKQoKIHsKICBpZiAoaXNFcnJvcih2YWx1ZSkpIHsKICAgIHJldHVybiB7CiAgICAgIG1lc3NhZ2U6IHZhbHVlLm1lc3NhZ2UsCiAgICAgIG5hbWU6IHZhbHVlLm5hbWUsCiAgICAgIHN0YWNrOiB2YWx1ZS5zdGFjaywKICAgICAgLi4uZ2V0T3duUHJvcGVydGllcyh2YWx1ZSksCiAgICB9OwogIH0gZWxzZSBpZiAoaXNFdmVudCh2YWx1ZSkpIHsKICAgIGNvbnN0IG5ld09iagoKID0gewogICAgICB0eXBlOiB2YWx1ZS50eXBlLAogICAgICB0YXJnZXQ6IHNlcmlhbGl6ZUV2ZW50VGFyZ2V0KHZhbHVlLnRhcmdldCksCiAgICAgIGN1cnJlbnRUYXJnZXQ6IHNlcmlhbGl6ZUV2ZW50VGFyZ2V0KHZhbHVlLmN1cnJlbnRUYXJnZXQpLAogICAgICAuLi5nZXRPd25Qcm9wZXJ0aWVzKHZhbHVlKSwKICAgIH07CgogICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJbnN0YW5jZU9mKHZhbHVlLCBDdXN0b21FdmVudCkpIHsKICAgICAgbmV3T2JqLmRldGFpbCA9IHZhbHVlLmRldGFpbDsKICAgIH0KCiAgICByZXR1cm4gbmV3T2JqOwogIH0gZWxzZSB7CiAgICByZXR1cm4gdmFsdWU7CiAgfQp9CgovKiogQ3JlYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdGFyZ2V0IG9mIGFuIGBFdmVudGAgb2JqZWN0ICovCmZ1bmN0aW9uIHNlcmlhbGl6ZUV2ZW50VGFyZ2V0KHRhcmdldCkgewogIHRyeSB7CiAgICByZXR1cm4gaXNFbGVtZW50KHRhcmdldCkgPyBodG1sVHJlZUFzU3RyaW5nKHRhcmdldCkgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFyZ2V0KTsKICB9IGNhdGNoIChfb08pIHsKICAgIHJldHVybiAnPHVua25vd24+JzsKICB9Cn0KCi8qKiBGaWx0ZXJzIG91dCBhbGwgYnV0IGFuIG9iamVjdCdzIG93biBwcm9wZXJ0aWVzICovCmZ1bmN0aW9uIGdldE93blByb3BlcnRpZXMob2JqKSB7CiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCkgewogICAgY29uc3QgZXh0cmFjdGVkUHJvcHMgPSB7fTsKICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gb2JqKSB7CiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wZXJ0eSkpIHsKICAgICAgICBleHRyYWN0ZWRQcm9wc1twcm9wZXJ0eV0gPSAob2JqIClbcHJvcGVydHldOwogICAgICB9CiAgICB9CiAgICByZXR1cm4gZXh0cmFjdGVkUHJvcHM7CiAgfSBlbHNlIHsKICAgIHJldHVybiB7fTsKICB9Cn0KCi8qKgogKiBHaXZlbiBhbnkgb2JqZWN0LCByZXR1cm4gYSBuZXcgb2JqZWN0IGhhdmluZyByZW1vdmVkIGFsbCBmaWVsZHMgd2hvc2UgdmFsdWUgd2FzIGB1bmRlZmluZWRgLgogKiBXb3JrcyByZWN1cnNpdmVseSBvbiBvYmplY3RzIGFuZCBhcnJheXMuCiAqCiAqIEF0dGVudGlvbjogVGhpcyBmdW5jdGlvbiBrZWVwcyBjaXJjdWxhciByZWZlcmVuY2VzIGluIHRoZSByZXR1cm5lZCBvYmplY3QuCiAqLwpmdW5jdGlvbiBkcm9wVW5kZWZpbmVkS2V5cyhpbnB1dFZhbHVlKSB7CiAgLy8gVGhpcyBtYXAga2VlcHMgdHJhY2sgb2Ygd2hhdCBhbHJlYWR5IHZpc2l0ZWQgbm9kZXMgbWFwIHRvLgogIC8vIE91ciBTZXQgLSBiYXNlZCBtZW1vQnVpbGRlciBkb2Vzbid0IHdvcmsgaGVyZSBiZWNhdXNlIHdlIHdhbnQgdG8gdGhlIG91dHB1dCBvYmplY3QgdG8gaGF2ZSB0aGUgc2FtZSBjaXJjdWxhcgogIC8vIHJlZmVyZW5jZXMgYXMgdGhlIGlucHV0IG9iamVjdC4KICBjb25zdCBtZW1vaXphdGlvbk1hcCA9IG5ldyBNYXAoKTsKCiAgLy8gVGhpcyBmdW5jdGlvbiBqdXN0IHByb3hpZXMgYF9kcm9wVW5kZWZpbmVkS2V5c2AgdG8ga2VlcCB0aGUgYG1lbW9CdWlsZGVyYCBvdXQgb2YgdGhpcyBmdW5jdGlvbidzIEFQSQogIHJldHVybiBfZHJvcFVuZGVmaW5lZEtleXMoaW5wdXRWYWx1ZSwgbWVtb2l6YXRpb25NYXApOwp9CgpmdW5jdGlvbiBfZHJvcFVuZGVmaW5lZEtleXMoaW5wdXRWYWx1ZSwgbWVtb2l6YXRpb25NYXApIHsKICBpZiAoaXNQb2pvKGlucHV0VmFsdWUpKSB7CiAgICAvLyBJZiB0aGlzIG5vZGUgaGFzIGFscmVhZHkgYmVlbiB2aXNpdGVkIGR1ZSB0byBhIGNpcmN1bGFyIHJlZmVyZW5jZSwgcmV0dXJuIHRoZSBvYmplY3QgaXQgd2FzIG1hcHBlZCB0byBpbiB0aGUgbmV3IG9iamVjdAogICAgY29uc3QgbWVtb1ZhbCA9IG1lbW9pemF0aW9uTWFwLmdldChpbnB1dFZhbHVlKTsKICAgIGlmIChtZW1vVmFsICE9PSB1bmRlZmluZWQpIHsKICAgICAgcmV0dXJuIG1lbW9WYWwgOwogICAgfQoKICAgIGNvbnN0IHJldHVyblZhbHVlID0ge307CiAgICAvLyBTdG9yZSB0aGUgbWFwcGluZyBvZiB0aGlzIHZhbHVlIGluIGNhc2Ugd2UgdmlzaXQgaXQgYWdhaW4sIGluIGNhc2Ugb2YgY2lyY3VsYXIgZGF0YQogICAgbWVtb2l6YXRpb25NYXAuc2V0KGlucHV0VmFsdWUsIHJldHVyblZhbHVlKTsKCiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhpbnB1dFZhbHVlKSkgewogICAgICBpZiAodHlwZW9mIGlucHV0VmFsdWVba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICByZXR1cm5WYWx1ZVtrZXldID0gX2Ryb3BVbmRlZmluZWRLZXlzKGlucHV0VmFsdWVba2V5XSwgbWVtb2l6YXRpb25NYXApOwogICAgICB9CiAgICB9CgogICAgcmV0dXJuIHJldHVyblZhbHVlIDsKICB9CgogIGlmIChBcnJheS5pc0FycmF5KGlucHV0VmFsdWUpKSB7CiAgICAvLyBJZiB0aGlzIG5vZGUgaGFzIGFscmVhZHkgYmVlbiB2aXNpdGVkIGR1ZSB0byBhIGNpcmN1bGFyIHJlZmVyZW5jZSwgcmV0dXJuIHRoZSBhcnJheSBpdCB3YXMgbWFwcGVkIHRvIGluIHRoZSBuZXcgb2JqZWN0CiAgICBjb25zdCBtZW1vVmFsID0gbWVtb2l6YXRpb25NYXAuZ2V0KGlucHV0VmFsdWUpOwogICAgaWYgKG1lbW9WYWwgIT09IHVuZGVmaW5lZCkgewogICAgICByZXR1cm4gbWVtb1ZhbCA7CiAgICB9CgogICAgY29uc3QgcmV0dXJuVmFsdWUgPSBbXTsKICAgIC8vIFN0b3JlIHRoZSBtYXBwaW5nIG9mIHRoaXMgdmFsdWUgaW4gY2FzZSB3ZSB2aXNpdCBpdCBhZ2FpbiwgaW4gY2FzZSBvZiBjaXJjdWxhciBkYXRhCiAgICBtZW1vaXphdGlvbk1hcC5zZXQoaW5wdXRWYWx1ZSwgcmV0dXJuVmFsdWUpOwoKICAgIGlucHV0VmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gewogICAgICByZXR1cm5WYWx1ZS5wdXNoKF9kcm9wVW5kZWZpbmVkS2V5cyhpdGVtLCBtZW1vaXphdGlvbk1hcCkpOwogICAgfSk7CgogICAgcmV0dXJuIHJldHVyblZhbHVlIDsKICB9CgogIHJldHVybiBpbnB1dFZhbHVlOwp9CgpmdW5jdGlvbiBpc1Bvam8oaW5wdXQpIHsKICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXQpKSB7CiAgICByZXR1cm4gZmFsc2U7CiAgfQoKICB0cnkgewogICAgY29uc3QgbmFtZSA9IChPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5wdXQpICkuY29uc3RydWN0b3IubmFtZTsKICAgIHJldHVybiAhbmFtZSB8fCBuYW1lID09PSAnT2JqZWN0JzsKICB9IGNhdGNoIChlKSB7CiAgICByZXR1cm4gdHJ1ZTsKICB9Cn0KCi8qKgogKiBEb2VzIHRoaXMgZmlsZW5hbWUgbG9vayBsaWtlIGl0J3MgcGFydCBvZiB0aGUgYXBwIGNvZGU/CiAqLwpmdW5jdGlvbiBmaWxlbmFtZUlzSW5BcHAoZmlsZW5hbWUsIGlzTmF0aXZlID0gZmFsc2UpIHsKICBjb25zdCBpc0ludGVybmFsID0KICAgIGlzTmF0aXZlIHx8CiAgICAoZmlsZW5hbWUgJiYKICAgICAgLy8gSXQncyBub3QgaW50ZXJuYWwgaWYgaXQncyBhbiBhYnNvbHV0ZSBsaW51eCBwYXRoCiAgICAgICFmaWxlbmFtZS5zdGFydHNXaXRoKCcvJykgJiYKICAgICAgLy8gSXQncyBub3QgaW50ZXJuYWwgaWYgaXQncyBhbiBhYnNvbHV0ZSB3aW5kb3dzIHBhdGgKICAgICAgIWZpbGVuYW1lLm1hdGNoKC9eW0EtWl06LykgJiYKICAgICAgLy8gSXQncyBub3QgaW50ZXJuYWwgaWYgdGhlIHBhdGggaXMgc3RhcnRpbmcgd2l0aCBhIGRvdAogICAgICAhZmlsZW5hbWUuc3RhcnRzV2l0aCgnLicpICYmCiAgICAgIC8vIEl0J3Mgbm90IGludGVybmFsIGlmIHRoZSBmcmFtZSBoYXMgYSBwcm90b2NvbC4gSW4gbm9kZSwgdGhpcyBpcyB1c3VhbGx5IHRoZSBjYXNlIGlmIHRoZSBmaWxlIGdvdCBwcmUtcHJvY2Vzc2VkIHdpdGggYSBidW5kbGVyIGxpa2Ugd2VicGFjawogICAgICAhZmlsZW5hbWUubWF0Y2goL15bYS16QS1aXShbYS16QS1aMC05LlwtK10pKjpcL1wvLykpOyAvLyBTY2hlbWEgZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2NDE3ODIKCiAgLy8gaW5fYXBwIGlzIGFsbCB0aGF0J3Mgbm90IGFuIGludGVybmFsIE5vZGUgZnVuY3Rpb24gb3IgYSBtb2R1bGUgd2l0aGluIG5vZGVfbW9kdWxlcwogIC8vIG5vdGUgdGhhdCBpc05hdGl2ZSBhcHBlYXJzIHRvIHJldHVybiB0cnVlIGV2ZW4gZm9yIG5vZGUgY29yZSBsaWJyYXJpZXMKICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9yYXZlbi1ub2RlL2lzc3Vlcy8xNzYKCiAgcmV0dXJuICFpc0ludGVybmFsICYmIGZpbGVuYW1lICE9PSB1bmRlZmluZWQgJiYgIWZpbGVuYW1lLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvJyk7Cn0KCmNvbnN0IFNUQUNLVFJBQ0VfRlJBTUVfTElNSVQgPSA1MDsKY29uc3QgU1RSSVBfRlJBTUVfUkVHRVhQID0gL2NhcHR1cmVNZXNzYWdlfGNhcHR1cmVFeGNlcHRpb24vOwoKLyoqCiAqIFJlbW92ZXMgU2VudHJ5IGZyYW1lcyBmcm9tIHRoZSB0b3AgYW5kIGJvdHRvbSBvZiB0aGUgc3RhY2sgaWYgcHJlc2VudCBhbmQgZW5mb3JjZXMgYSBsaW1pdCBvZiBtYXggbnVtYmVyIG9mIGZyYW1lcy4KICogQXNzdW1lcyBzdGFjayBpbnB1dCBpcyBvcmRlcmVkIGZyb20gdG9wIHRvIGJvdHRvbSBhbmQgcmV0dXJucyB0aGUgcmV2ZXJzZSByZXByZXNlbnRhdGlvbiBzbyBjYWxsIHNpdGUgb2YgdGhlCiAqIGZ1bmN0aW9uIHRoYXQgY2F1c2VkIHRoZSBjcmFzaCBpcyB0aGUgbGFzdCBmcmFtZSBpbiB0aGUgYXJyYXkuCiAqIEBoaWRkZW4KICovCmZ1bmN0aW9uIHN0cmlwU2VudHJ5RnJhbWVzQW5kUmV2ZXJzZShzdGFjaykgewogIGlmICghc3RhY2subGVuZ3RoKSB7CiAgICByZXR1cm4gW107CiAgfQoKICBjb25zdCBsb2NhbFN0YWNrID0gQXJyYXkuZnJvbShzdGFjayk7CgogIC8vIElmIHN0YWNrIHN0YXJ0cyB3aXRoIG9uZSBvZiBvdXIgQVBJIGNhbGxzLCByZW1vdmUgaXQgKHN0YXJ0cywgbWVhbmluZyBpdCdzIHRoZSB0b3Agb2YgdGhlIHN0YWNrIC0gYWthIGxhc3QgY2FsbCkKICBpZiAoL3NlbnRyeVdyYXBwZWQvLnRlc3QobG9jYWxTdGFja1tsb2NhbFN0YWNrLmxlbmd0aCAtIDFdLmZ1bmN0aW9uIHx8ICcnKSkgewogICAgbG9jYWxTdGFjay5wb3AoKTsKICB9CgogIC8vIFJldmVyc2luZyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBwcm9jZWR1cmUgYWxsb3dzIHVzIHRvIGp1c3QgcG9wIHRoZSB2YWx1ZXMgb2ZmIHRoZSBzdGFjawogIGxvY2FsU3RhY2sucmV2ZXJzZSgpOwoKICAvLyBJZiBzdGFjayBlbmRzIHdpdGggb25lIG9mIG91ciBpbnRlcm5hbCBBUEkgY2FsbHMsIHJlbW92ZSBpdCAoZW5kcywgbWVhbmluZyBpdCdzIHRoZSBib3R0b20gb2YgdGhlIHN0YWNrIC0gYWthIHRvcC1tb3N0IGNhbGwpCiAgaWYgKFNUUklQX0ZSQU1FX1JFR0VYUC50ZXN0KGxvY2FsU3RhY2tbbG9jYWxTdGFjay5sZW5ndGggLSAxXS5mdW5jdGlvbiB8fCAnJykpIHsKICAgIGxvY2FsU3RhY2sucG9wKCk7CgogICAgLy8gV2hlbiB1c2luZyBzeW50aGV0aWMgZXZlbnRzLCB3ZSB3aWxsIGhhdmUgYSAyIGxldmVscyBkZWVwIHN0YWNrLCBhcyBgbmV3IEVycm9yKCdTZW50cnkgc3ludGhldGljRXhjZXB0aW9uJylgCiAgICAvLyBpcyBwcm9kdWNlZCB3aXRoaW4gdGhlIGh1YiBpdHNlbGYsIG1ha2luZyBpdDoKICAgIC8vCiAgICAvLyAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKCkKICAgIC8vICAgZ2V0Q3VycmVudEh1YigpLmNhcHR1cmVFeGNlcHRpb24oKQogICAgLy8KICAgIC8vIGluc3RlYWQgb2YganVzdCB0aGUgdG9wIGBTZW50cnlgIGNhbGwgaXRzZWxmLgogICAgLy8gVGhpcyBmb3JjZXMgdXMgdG8gcG9zc2libHkgc3RyaXAgYW4gYWRkaXRpb25hbCBmcmFtZSBpbiB0aGUgZXhhY3Qgc2FtZSB3YXMgYXMgYWJvdmUuCiAgICBpZiAoU1RSSVBfRlJBTUVfUkVHRVhQLnRlc3QobG9jYWxTdGFja1tsb2NhbFN0YWNrLmxlbmd0aCAtIDFdLmZ1bmN0aW9uIHx8ICcnKSkgewogICAgICBsb2NhbFN0YWNrLnBvcCgpOwogICAgfQogIH0KCiAgcmV0dXJuIGxvY2FsU3RhY2suc2xpY2UoMCwgU1RBQ0tUUkFDRV9GUkFNRV9MSU1JVCkubWFwKGZyYW1lID0+ICh7CiAgICAuLi5mcmFtZSwKICAgIGZpbGVuYW1lOiBmcmFtZS5maWxlbmFtZSB8fCBsb2NhbFN0YWNrW2xvY2FsU3RhY2subGVuZ3RoIC0gMV0uZmlsZW5hbWUsCiAgICBmdW5jdGlvbjogZnJhbWUuZnVuY3Rpb24gfHwgJz8nLAogIH0pKTsKfQoKY29uc3QgZGVmYXVsdEZ1bmN0aW9uTmFtZSA9ICc8YW5vbnltb3VzPic7CgovKioKICogU2FmZWx5IGV4dHJhY3QgZnVuY3Rpb24gbmFtZSBmcm9tIGl0c2VsZgogKi8KZnVuY3Rpb24gZ2V0RnVuY3Rpb25OYW1lKGZuKSB7CiAgdHJ5IHsKICAgIGlmICghZm4gfHwgdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7CiAgICAgIHJldHVybiBkZWZhdWx0RnVuY3Rpb25OYW1lOwogICAgfQogICAgcmV0dXJuIGZuLm5hbWUgfHwgZGVmYXVsdEZ1bmN0aW9uTmFtZTsKICB9IGNhdGNoIChlKSB7CiAgICAvLyBKdXN0IGFjY2Vzc2luZyBjdXN0b20gcHJvcHMgaW4gc29tZSBTZWxlbml1bSBlbnZpcm9ubWVudHMKICAgIC8vIGNhbiBjYXVzZSBhICJQZXJtaXNzaW9uIGRlbmllZCIgZXhjZXB0aW9uIChzZWUgcmF2ZW4tanMjNDk1KS4KICAgIHJldHVybiBkZWZhdWx0RnVuY3Rpb25OYW1lOwogIH0KfQoKLyoqCiAqIFVVSUQ0IGdlbmVyYXRvcgogKgogKiBAcmV0dXJucyBzdHJpbmcgR2VuZXJhdGVkIFVVSUQ0LgogKi8KZnVuY3Rpb24gdXVpZDQoKSB7CiAgY29uc3QgZ2JsID0gR0xPQkFMX09CSiA7CiAgY29uc3QgY3J5cHRvID0gZ2JsLmNyeXB0byB8fCBnYmwubXNDcnlwdG87CgogIGxldCBnZXRSYW5kb21CeXRlID0gKCkgPT4gTWF0aC5yYW5kb20oKSAqIDE2OwogIHRyeSB7CiAgICBpZiAoY3J5cHRvICYmIGNyeXB0by5yYW5kb21VVUlEKSB7CiAgICAgIHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRCgpLnJlcGxhY2UoLy0vZywgJycpOwogICAgfQogICAgaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7CiAgICAgIGdldFJhbmRvbUJ5dGUgPSAoKSA9PiB7CiAgICAgICAgLy8gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyBtaWdodCByZXR1cm4gdW5kZWZpbmVkIGluc3RlYWQgb2YgdGhlIHR5cGVkIGFycmF5CiAgICAgICAgLy8gaW4gb2xkIENocm9taXVtIHZlcnNpb25zIChlLmcuIDIzLjAuMTIzNS4wICgxNTE0MjIpKQogICAgICAgIC8vIEhvd2V2ZXIsIGB0eXBlZEFycmF5YCBpcyBzdGlsbCBmaWxsZWQgaW4tcGxhY2UuCiAgICAgICAgLy8gQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3J5cHRvL2dldFJhbmRvbVZhbHVlcyN0eXBlZGFycmF5CiAgICAgICAgY29uc3QgdHlwZWRBcnJheSA9IG5ldyBVaW50OEFycmF5KDEpOwogICAgICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXModHlwZWRBcnJheSk7CiAgICAgICAgcmV0dXJuIHR5cGVkQXJyYXlbMF07CiAgICAgIH07CiAgICB9CiAgfSBjYXRjaCAoXykgewogICAgLy8gc29tZSBydW50aW1lcyBjYW4gY3Jhc2ggaW52b2tpbmcgY3J5cHRvCiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2V0c2VudHJ5L3NlbnRyeS1qYXZhc2NyaXB0L2lzc3Vlcy84OTM1CiAgfQoKICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9ob3ctdG8tY3JlYXRlLWEtZ3VpZC11dWlkLWluLWphdmFzY3JpcHQvMjExNzUyMyMyMTE3NTIzCiAgLy8gQ29uY2F0ZW5hdGluZyB0aGUgZm9sbG93aW5nIG51bWJlcnMgYXMgc3RyaW5ncyByZXN1bHRzIGluICcxMDAwMDAwMDEwMDA0MDAwODAwMDEwMDAwMDAwMDAwMCcKICByZXR1cm4gKChbMWU3XSApICsgMWUzICsgNGUzICsgOGUzICsgMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYyA9PgogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2UKICAgICgoYyApIF4gKChnZXRSYW5kb21CeXRlKCkgJiAxNSkgPj4gKChjICkgLyA0KSkpLnRvU3RyaW5nKDE2KSwKICApOwp9CgovKioKICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGlucHV0IGlzIGFscmVhZHkgYW4gYXJyYXksIGFuZCBpZiBpdCBpc24ndCwgd3JhcHMgaXQgaW4gb25lLgogKgogKiBAcGFyYW0gbWF5YmVBcnJheSBJbnB1dCB0byB0dXJuIGludG8gYW4gYXJyYXksIGlmIG5lY2Vzc2FyeQogKiBAcmV0dXJucyBUaGUgaW5wdXQsIGlmIGFscmVhZHkgYW4gYXJyYXksIG9yIGFuIGFycmF5IHdpdGggdGhlIGlucHV0IGFzIHRoZSBvbmx5IGVsZW1lbnQsIGlmIG5vdAogKi8KZnVuY3Rpb24gYXJyYXlpZnkobWF5YmVBcnJheSkgewogIHJldHVybiBBcnJheS5pc0FycmF5KG1heWJlQXJyYXkpID8gbWF5YmVBcnJheSA6IFttYXliZUFycmF5XTsKfQoKLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovCi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi8KCi8qKgogKiBIZWxwZXIgdG8gZGVjeWNsZSBqc29uIG9iamVjdHMKICovCmZ1bmN0aW9uIG1lbW9CdWlsZGVyKCkgewogIGNvbnN0IGhhc1dlYWtTZXQgPSB0eXBlb2YgV2Vha1NldCA9PT0gJ2Z1bmN0aW9uJzsKICBjb25zdCBpbm5lciA9IGhhc1dlYWtTZXQgPyBuZXcgV2Vha1NldCgpIDogW107CiAgZnVuY3Rpb24gbWVtb2l6ZShvYmopIHsKICAgIGlmIChoYXNXZWFrU2V0KSB7CiAgICAgIGlmIChpbm5lci5oYXMob2JqKSkgewogICAgICAgIHJldHVybiB0cnVlOwogICAgICB9CiAgICAgIGlubmVyLmFkZChvYmopOwogICAgICByZXR1cm4gZmFsc2U7CiAgICB9CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1mb3Itb2YKICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5uZXIubGVuZ3RoOyBpKyspIHsKICAgICAgY29uc3QgdmFsdWUgPSBpbm5lcltpXTsKICAgICAgaWYgKHZhbHVlID09PSBvYmopIHsKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgfQogICAgfQogICAgaW5uZXIucHVzaChvYmopOwogICAgcmV0dXJuIGZhbHNlOwogIH0KCiAgZnVuY3Rpb24gdW5tZW1vaXplKG9iaikgewogICAgaWYgKGhhc1dlYWtTZXQpIHsKICAgICAgaW5uZXIuZGVsZXRlKG9iaik7CiAgICB9IGVsc2UgewogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlubmVyLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgaWYgKGlubmVyW2ldID09PSBvYmopIHsKICAgICAgICAgIGlubmVyLnNwbGljZShpLCAxKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgICAgfQogICAgfQogIH0KICByZXR1cm4gW21lbW9pemUsIHVubWVtb2l6ZV07Cn0KCi8qKgogKiBSZWN1cnNpdmVseSBub3JtYWxpemVzIHRoZSBnaXZlbiBvYmplY3QuCiAqCiAqIC0gQ3JlYXRlcyBhIGNvcHkgdG8gcHJldmVudCBvcmlnaW5hbCBpbnB1dCBtdXRhdGlvbgogKiAtIFNraXBzIG5vbi1lbnVtZXJhYmxlIHByb3BlcnRpZXMKICogLSBXaGVuIHN0cmluZ2lmeWluZywgY2FsbHMgYHRvSlNPTmAgaWYgaW1wbGVtZW50ZWQKICogLSBSZW1vdmVzIGNpcmN1bGFyIHJlZmVyZW5jZXMKICogLSBUcmFuc2xhdGVzIG5vbi1zZXJpYWxpemFibGUgdmFsdWVzIChgdW5kZWZpbmVkYC9gTmFOYC9mdW5jdGlvbnMpIHRvIHNlcmlhbGl6YWJsZSBmb3JtYXQKICogLSBUcmFuc2xhdGVzIGtub3duIGdsb2JhbCBvYmplY3RzL2NsYXNzZXMgdG8gYSBzdHJpbmcgcmVwcmVzZW50YXRpb25zCiAqIC0gVGFrZXMgY2FyZSBvZiBgRXJyb3JgIG9iamVjdCBzZXJpYWxpemF0aW9uCiAqIC0gT3B0aW9uYWxseSBsaW1pdHMgZGVwdGggb2YgZmluYWwgb3V0cHV0CiAqIC0gT3B0aW9uYWxseSBsaW1pdHMgbnVtYmVyIG9mIHByb3BlcnRpZXMvZWxlbWVudHMgaW5jbHVkZWQgaW4gYW55IHNpbmdsZSBvYmplY3QvYXJyYXkKICoKICogQHBhcmFtIGlucHV0IFRoZSBvYmplY3QgdG8gYmUgbm9ybWFsaXplZC4KICogQHBhcmFtIGRlcHRoIFRoZSBtYXggZGVwdGggdG8gd2hpY2ggdG8gbm9ybWFsaXplIHRoZSBvYmplY3QuIChBbnl0aGluZyBkZWVwZXIgc3RyaW5naWZpZWQgd2hvbGUuKQogKiBAcGFyYW0gbWF4UHJvcGVydGllcyBUaGUgbWF4IG51bWJlciBvZiBlbGVtZW50cyBvciBwcm9wZXJ0aWVzIHRvIGJlIGluY2x1ZGVkIGluIGFueSBzaW5nbGUgYXJyYXkgb3IKICogb2JqZWN0IGluIHRoZSBub3JtYWxsaXplZCBvdXRwdXQuCiAqIEByZXR1cm5zIEEgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBvYmplY3QsIG9yIGAiKipub24tc2VyaWFsaXphYmxlKioiYCBpZiBhbnkgZXJyb3JzIGFyZSB0aHJvd24gZHVyaW5nIG5vcm1hbGl6YXRpb24uCiAqLwovLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueQpmdW5jdGlvbiBub3JtYWxpemUoaW5wdXQsIGRlcHRoID0gMTAwLCBtYXhQcm9wZXJ0aWVzID0gK0luZmluaXR5KSB7CiAgdHJ5IHsKICAgIC8vIHNpbmNlIHdlJ3JlIGF0IHRoZSBvdXRlcm1vc3QgbGV2ZWwsIHdlIGRvbid0IHByb3ZpZGUgYSBrZXkKICAgIHJldHVybiB2aXNpdCgnJywgaW5wdXQsIGRlcHRoLCBtYXhQcm9wZXJ0aWVzKTsKICB9IGNhdGNoIChlcnIpIHsKICAgIHJldHVybiB7IEVSUk9SOiBgKipub24tc2VyaWFsaXphYmxlKiogKCR7ZXJyfSlgIH07CiAgfQp9CgovKioKICogVmlzaXRzIGEgbm9kZSB0byBwZXJmb3JtIG5vcm1hbGl6YXRpb24gb24gaXQKICoKICogQHBhcmFtIGtleSBUaGUga2V5IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIG5vZGUKICogQHBhcmFtIHZhbHVlIFRoZSBub2RlIHRvIGJlIHZpc2l0ZWQKICogQHBhcmFtIGRlcHRoIE9wdGlvbmFsIG51bWJlciBpbmRpY2F0aW5nIHRoZSBtYXhpbXVtIHJlY3Vyc2lvbiBkZXB0aAogKiBAcGFyYW0gbWF4UHJvcGVydGllcyBPcHRpb25hbCBtYXhpbXVtIG51bWJlciBvZiBwcm9wZXJ0aWVzL2VsZW1lbnRzIGluY2x1ZGVkIGluIGFueSBzaW5nbGUgb2JqZWN0L2FycmF5CiAqIEBwYXJhbSBtZW1vIE9wdGlvbmFsIE1lbW8gY2xhc3MgaGFuZGxpbmcgZGVjeWNsaW5nCiAqLwpmdW5jdGlvbiB2aXNpdCgKICBrZXksCiAgdmFsdWUsCiAgZGVwdGggPSArSW5maW5pdHksCiAgbWF4UHJvcGVydGllcyA9ICtJbmZpbml0eSwKICBtZW1vID0gbWVtb0J1aWxkZXIoKSwKKSB7CiAgY29uc3QgW21lbW9pemUsIHVubWVtb2l6ZV0gPSBtZW1vOwoKICAvLyBHZXQgdGhlIHNpbXBsZSBjYXNlcyBvdXQgb2YgdGhlIHdheSBmaXJzdAogIGlmICgKICAgIHZhbHVlID09IG51bGwgfHwgLy8gdGhpcyBtYXRjaGVzIG51bGwgYW5kIHVuZGVmaW5lZCAtPiBlcWVxIG5vdCBlcWVxZXEKICAgIChbJ251bWJlcicsICdib29sZWFuJywgJ3N0cmluZyddLmluY2x1ZGVzKHR5cGVvZiB2YWx1ZSkgJiYgIWlzTmFOJDEodmFsdWUpKQogICkgewogICAgcmV0dXJuIHZhbHVlIDsKICB9CgogIGNvbnN0IHN0cmluZ2lmaWVkID0gc3RyaW5naWZ5VmFsdWUoa2V5LCB2YWx1ZSk7CgogIC8vIEFueXRoaW5nIHdlIGNvdWxkIHBvdGVudGlhbGx5IGRpZyBpbnRvIG1vcmUgKG9iamVjdHMgb3IgYXJyYXlzKSB3aWxsIGhhdmUgY29tZSBiYWNrIGFzIGAiW29iamVjdCBYWFhYXSJgLgogIC8vIEV2ZXJ5dGhpbmcgZWxzZSB3aWxsIGhhdmUgYWxyZWFkeSBiZWVuIHNlcmlhbGl6ZWQsIHNvIGlmIHdlIGRvbid0IHNlZSB0aGF0IHBhdHRlcm4sIHdlJ3JlIGRvbmUuCiAgaWYgKCFzdHJpbmdpZmllZC5zdGFydHNXaXRoKCdbb2JqZWN0ICcpKSB7CiAgICByZXR1cm4gc3RyaW5naWZpZWQ7CiAgfQoKICAvLyBGcm9tIGhlcmUgb24sIHdlIGNhbiBhc3NlcnQgdGhhdCBgdmFsdWVgIGlzIGVpdGhlciBhbiBvYmplY3Qgb3IgYW4gYXJyYXkuCgogIC8vIERvIG5vdCBub3JtYWxpemUgb2JqZWN0cyB0aGF0IHdlIGtub3cgaGF2ZSBhbHJlYWR5IGJlZW4gbm9ybWFsaXplZC4gQXMgYSBnZW5lcmFsIHJ1bGUsIHRoZQogIC8vICJfX3NlbnRyeV9za2lwX25vcm1hbGl6YXRpb25fXyIgcHJvcGVydHkgc2hvdWxkIG9ubHkgYmUgdXNlZCBzcGFyaW5nbHkgYW5kIG9ubHkgc2hvdWxkIG9ubHkgYmUgc2V0IG9uIG9iamVjdHMgdGhhdAogIC8vIGhhdmUgYWxyZWFkeSBiZWVuIG5vcm1hbGl6ZWQuCiAgaWYgKCh2YWx1ZSApWydfX3NlbnRyeV9za2lwX25vcm1hbGl6YXRpb25fXyddKSB7CiAgICByZXR1cm4gdmFsdWUgOwogIH0KCiAgLy8gV2UgY2FuIHNldCBgX19zZW50cnlfb3ZlcnJpZGVfbm9ybWFsaXphdGlvbl9kZXB0aF9fYCBvbiBhbiBvYmplY3QgdG8gZW5zdXJlIHRoYXQgZnJvbSB0aGVyZQogIC8vIFdlIGtlZXAgYSBjZXJ0YWluIGFtb3VudCBvZiBkZXB0aC4KICAvLyBUaGlzIHNob3VsZCBiZSB1c2VkIHNwYXJpbmdseSwgZS5nLiB3ZSB1c2UgaXQgZm9yIHRoZSByZWR1eCBpbnRlZ3JhdGlvbiB0byBlbnN1cmUgd2UgZ2V0IGEgY2VydGFpbiBhbW91bnQgb2Ygc3RhdGUuCiAgY29uc3QgcmVtYWluaW5nRGVwdGggPQogICAgdHlwZW9mICh2YWx1ZSApWydfX3NlbnRyeV9vdmVycmlkZV9ub3JtYWxpemF0aW9uX2RlcHRoX18nXSA9PT0gJ251bWJlcicKICAgICAgPyAoKHZhbHVlIClbJ19fc2VudHJ5X292ZXJyaWRlX25vcm1hbGl6YXRpb25fZGVwdGhfXyddICkKICAgICAgOiBkZXB0aDsKCiAgLy8gV2UncmUgYWxzbyBkb25lIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIG1heCBkZXB0aAogIGlmIChyZW1haW5pbmdEZXB0aCA9PT0gMCkgewogICAgLy8gQXQgdGhpcyBwb2ludCB3ZSBrbm93IGBzZXJpYWxpemVkYCBpcyBhIHN0cmluZyBvZiB0aGUgZm9ybSBgIltvYmplY3QgWFhYWF0iYC4gQ2xlYW4gaXQgdXAgc28gaXQncyBqdXN0IGAiW1hYWFhdImAuCiAgICByZXR1cm4gc3RyaW5naWZpZWQucmVwbGFjZSgnb2JqZWN0ICcsICcnKTsKICB9CgogIC8vIElmIHdlJ3ZlIGFscmVhZHkgdmlzaXRlZCB0aGlzIGJyYW5jaCwgYmFpbCBvdXQsIGFzIGl0J3MgY2lyY3VsYXIgcmVmZXJlbmNlLiBJZiBub3QsIG5vdGUgdGhhdCB3ZSdyZSBzZWVpbmcgaXQgbm93LgogIGlmIChtZW1vaXplKHZhbHVlKSkgewogICAgcmV0dXJuICdbQ2lyY3VsYXIgfl0nOwogIH0KCiAgLy8gSWYgdGhlIHZhbHVlIGhhcyBhIGB0b0pTT05gIG1ldGhvZCwgd2UgY2FsbCBpdCB0byBleHRyYWN0IG1vcmUgaW5mb3JtYXRpb24KICBjb25zdCB2YWx1ZVdpdGhUb0pTT04gPSB2YWx1ZSA7CiAgaWYgKHZhbHVlV2l0aFRvSlNPTiAmJiB0eXBlb2YgdmFsdWVXaXRoVG9KU09OLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykgewogICAgdHJ5IHsKICAgICAgY29uc3QganNvblZhbHVlID0gdmFsdWVXaXRoVG9KU09OLnRvSlNPTigpOwogICAgICAvLyBXZSBuZWVkIHRvIG5vcm1hbGl6ZSB0aGUgcmV0dXJuIHZhbHVlIG9mIGAudG9KU09OKClgIGluIGNhc2UgaXQgaGFzIGNpcmN1bGFyIHJlZmVyZW5jZXMKICAgICAgcmV0dXJuIHZpc2l0KCcnLCBqc29uVmFsdWUsIHJlbWFpbmluZ0RlcHRoIC0gMSwgbWF4UHJvcGVydGllcywgbWVtbyk7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgLy8gcGFzcyAoVGhlIGJ1aWx0LWluIGB0b0pTT05gIGZhaWxlZCwgYnV0IHdlIGNhbiBzdGlsbCB0cnkgdG8gZG8gaXQgb3Vyc2VsdmVzKQogICAgfQogIH0KCiAgLy8gQXQgdGhpcyBwb2ludCB3ZSBrbm93IHdlIGVpdGhlciBoYXZlIGFuIG9iamVjdCBvciBhbiBhcnJheSwgd2UgaGF2ZW4ndCBzZWVuIGl0IGJlZm9yZSwgYW5kIHdlJ3JlIGdvaW5nIHRvIHJlY3Vyc2UKICAvLyBiZWNhdXNlIHdlIGhhdmVuJ3QgeWV0IHJlYWNoZWQgdGhlIG1heCBkZXB0aC4gQ3JlYXRlIGFuIGFjY3VtdWxhdG9yIHRvIGhvbGQgdGhlIHJlc3VsdHMgb2YgdmlzaXRpbmcgZWFjaAogIC8vIHByb3BlcnR5L2VudHJ5LCBhbmQga2VlcCB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIHdlIGFkZCB0byBpdC4KICBjb25zdCBub3JtYWxpemVkID0gKEFycmF5LmlzQXJyYXkodmFsdWUpID8gW10gOiB7fSkgOwogIGxldCBudW1BZGRlZCA9IDA7CgogIC8vIEJlZm9yZSB3ZSBiZWdpbiwgY29udmVydGBFcnJvcmAgYW5kYEV2ZW50YCBpbnN0YW5jZXMgaW50byBwbGFpbiBvYmplY3RzLCBzaW5jZSBzb21lIG9mIGVhY2ggb2YgdGhlaXIgcmVsZXZhbnQKICAvLyBwcm9wZXJ0aWVzIGFyZSBub24tZW51bWVyYWJsZSBhbmQgb3RoZXJ3aXNlIHdvdWxkIGdldCBtaXNzZWQuCiAgY29uc3QgdmlzaXRhYmxlID0gY29udmVydFRvUGxhaW5PYmplY3QodmFsdWUgKTsKCiAgZm9yIChjb25zdCB2aXNpdEtleSBpbiB2aXNpdGFibGUpIHsKICAgIC8vIEF2b2lkIGl0ZXJhdGluZyBvdmVyIGZpZWxkcyBpbiB0aGUgcHJvdG90eXBlIGlmIHRoZXkndmUgc29tZWhvdyBiZWVuIGV4cG9zZWQgdG8gZW51bWVyYXRpb24uCiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2aXNpdGFibGUsIHZpc2l0S2V5KSkgewogICAgICBjb250aW51ZTsKICAgIH0KCiAgICBpZiAobnVtQWRkZWQgPj0gbWF4UHJvcGVydGllcykgewogICAgICBub3JtYWxpemVkW3Zpc2l0S2V5XSA9ICdbTWF4UHJvcGVydGllcyB+XSc7CiAgICAgIGJyZWFrOwogICAgfQoKICAgIC8vIFJlY3Vyc2l2ZWx5IHZpc2l0IGFsbCB0aGUgY2hpbGQgbm9kZXMKICAgIGNvbnN0IHZpc2l0VmFsdWUgPSB2aXNpdGFibGVbdmlzaXRLZXldOwogICAgbm9ybWFsaXplZFt2aXNpdEtleV0gPSB2aXNpdCh2aXNpdEtleSwgdmlzaXRWYWx1ZSwgcmVtYWluaW5nRGVwdGggLSAxLCBtYXhQcm9wZXJ0aWVzLCBtZW1vKTsKCiAgICBudW1BZGRlZCsrOwogIH0KCiAgLy8gT25jZSB3ZSd2ZSB2aXNpdGVkIGFsbCB0aGUgYnJhbmNoZXMsIHJlbW92ZSB0aGUgcGFyZW50IGZyb20gbWVtbyBzdG9yYWdlCiAgdW5tZW1vaXplKHZhbHVlKTsKCiAgLy8gUmV0dXJuIGFjY3VtdWxhdGVkIHZhbHVlcwogIHJldHVybiBub3JtYWxpemVkOwp9CgovKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovCi8qKgogKiBTdHJpbmdpZnkgdGhlIGdpdmVuIHZhbHVlLiBIYW5kbGVzIHZhcmlvdXMga25vd24gc3BlY2lhbCB2YWx1ZXMgYW5kIHR5cGVzLgogKgogKiBOb3QgbWVhbnQgdG8gYmUgdXNlZCBvbiBzaW1wbGUgcHJpbWl0aXZlcyB3aGljaCBhbHJlYWR5IGhhdmUgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24sIGFzIGl0IHdpbGwsIGZvciBleGFtcGxlLCB0dXJuCiAqIHRoZSBudW1iZXIgMTIzMSBpbnRvICJbT2JqZWN0IE51bWJlcl0iLCBub3Igb24gYG51bGxgLCBhcyBpdCB3aWxsIHRocm93LgogKgogKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHN0cmluZ2lmeQogKiBAcmV0dXJucyBBIHN0cmluZ2lmaWVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiB2YWx1ZQogKi8KZnVuY3Rpb24gc3RyaW5naWZ5VmFsdWUoCiAga2V5LAogIC8vIHRoaXMgdHlwZSBpcyBhIHRpbnkgYml0IG9mIGEgY2hlYXQsIHNpbmNlIHRoaXMgZnVuY3Rpb24gZG9lcyBoYW5kbGUgTmFOICh3aGljaCBpcyB0ZWNobmljYWxseSBhIG51bWJlciksIGJ1dCBmb3IKICAvLyBvdXIgaW50ZXJuYWwgdXNlLCBpdCdsbCBkbwogIHZhbHVlLAopIHsKICB0cnkgewogICAgaWYgKGtleSA9PT0gJ2RvbWFpbicgJiYgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAodmFsdWUgKS5fZXZlbnRzKSB7CiAgICAgIHJldHVybiAnW0RvbWFpbl0nOwogICAgfQoKICAgIGlmIChrZXkgPT09ICdkb21haW5FbWl0dGVyJykgewogICAgICByZXR1cm4gJ1tEb21haW5FbWl0dGVyXSc7CiAgICB9CgogICAgLy8gSXQncyBzYWZlIHRvIHVzZSBgZ2xvYmFsYCwgYHdpbmRvd2AsIGFuZCBgZG9jdW1lbnRgIGhlcmUgaW4gdGhpcyBtYW5uZXIsIGFzIHdlIGFyZSBhc3NlcnRpbmcgdXNpbmcgYHR5cGVvZmAgZmlyc3QKICAgIC8vIHdoaWNoIHdvbid0IHRocm93IGlmIHRoZXkgYXJlIG5vdCBwcmVzZW50LgoKICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSA9PT0gZ2xvYmFsKSB7CiAgICAgIHJldHVybiAnW0dsb2JhbF0nOwogICAgfQoKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMKICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSA9PT0gd2luZG93KSB7CiAgICAgIHJldHVybiAnW1dpbmRvd10nOwogICAgfQoKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMKICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlID09PSBkb2N1bWVudCkgewogICAgICByZXR1cm4gJ1tEb2N1bWVudF0nOwogICAgfQoKICAgIGlmIChpc1Z1ZVZpZXdNb2RlbCh2YWx1ZSkpIHsKICAgICAgcmV0dXJuICdbVnVlVmlld01vZGVsXSc7CiAgICB9CgogICAgLy8gUmVhY3QncyBTeW50aGV0aWNFdmVudCB0aGluZ3kKICAgIGlmIChpc1N5bnRoZXRpY0V2ZW50KHZhbHVlKSkgewogICAgICByZXR1cm4gJ1tTeW50aGV0aWNFdmVudF0nOwogICAgfQoKICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSB2YWx1ZSkgewogICAgICByZXR1cm4gJ1tOYU5dJzsKICAgIH0KCiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7CiAgICAgIHJldHVybiBgW0Z1bmN0aW9uOiAke2dldEZ1bmN0aW9uTmFtZSh2YWx1ZSl9XWA7CiAgICB9CgogICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHsKICAgICAgcmV0dXJuIGBbJHtTdHJpbmcodmFsdWUpfV1gOwogICAgfQoKICAgIC8vIHN0cmluZ2lmaWVkIEJpZ0ludHMgYXJlIGluZGlzdGluZ3Vpc2hhYmxlIGZyb20gcmVndWxhciBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGxhYmVsIHRoZW0gdG8gYXZvaWQgY29uZnVzaW9uCiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYmlnaW50JykgewogICAgICByZXR1cm4gYFtCaWdJbnQ6ICR7U3RyaW5nKHZhbHVlKX1dYDsKICAgIH0KCiAgICAvLyBOb3cgdGhhdCB3ZSd2ZSBrbm9ja2VkIG91dCBhbGwgdGhlIHNwZWNpYWwgY2FzZXMgYW5kIHRoZSBwcmltaXRpdmVzLCBhbGwgd2UgaGF2ZSBsZWZ0IGFyZSBvYmplY3RzLiBTaW1wbHkgY2FzdGluZwogICAgLy8gdGhlbSB0byBzdHJpbmdzIG1lYW5zIHRoYXQgaW5zdGFuY2VzIG9mIGNsYXNzZXMgd2hpY2ggaGF2ZW4ndCBkZWZpbmVkIHRoZWlyIGB0b1N0cmluZ1RhZ2Agd2lsbCBqdXN0IGNvbWUgb3V0IGFzCiAgICAvLyBgIltvYmplY3QgT2JqZWN0XSJgLiBJZiB3ZSBpbnN0ZWFkIGxvb2sgYXQgdGhlIGNvbnN0cnVjdG9yJ3MgbmFtZSAod2hpY2ggaXMgdGhlIHNhbWUgYXMgdGhlIG5hbWUgb2YgdGhlIGNsYXNzKSwKICAgIC8vIHdlIGNhbiBtYWtlIHN1cmUgdGhhdCBvbmx5IHBsYWluIG9iamVjdHMgY29tZSBvdXQgdGhhdCB3YXkuCiAgICBjb25zdCBvYmpOYW1lID0gZ2V0Q29uc3RydWN0b3JOYW1lKHZhbHVlKTsKCiAgICAvLyBIYW5kbGUgSFRNTCBFbGVtZW50cwogICAgaWYgKC9eSFRNTChcdyopRWxlbWVudCQvLnRlc3Qob2JqTmFtZSkpIHsKICAgICAgcmV0dXJuIGBbSFRNTEVsZW1lbnQ6ICR7b2JqTmFtZX1dYDsKICAgIH0KCiAgICByZXR1cm4gYFtvYmplY3QgJHtvYmpOYW1lfV1gOwogIH0gY2F0Y2ggKGVycikgewogICAgcmV0dXJuIGAqKm5vbi1zZXJpYWxpemFibGUqKiAoJHtlcnJ9KWA7CiAgfQp9Ci8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqLwoKZnVuY3Rpb24gZ2V0Q29uc3RydWN0b3JOYW1lKHZhbHVlKSB7CiAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTsKCiAgcmV0dXJuIHByb3RvdHlwZSA/IHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lIDogJ251bGwgcHJvdG90eXBlJzsKfQoKLyoqCiAqIE5vcm1hbGl6ZXMgVVJMcyBpbiBleGNlcHRpb25zIGFuZCBzdGFja3RyYWNlcyB0byBhIGJhc2UgcGF0aCBzbyBTZW50cnkgY2FuIGZpbmdlcnByaW50CiAqIGFjcm9zcyBwbGF0Zm9ybXMgYW5kIHdvcmtpbmcgZGlyZWN0b3J5LgogKgogKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gYmUgbm9ybWFsaXplZC4KICogQHBhcmFtIGJhc2VQYXRoIFRoZSBhcHBsaWNhdGlvbiBiYXNlIHBhdGguCiAqIEByZXR1cm5zIFRoZSBub3JtYWxpemVkIFVSTC4KICovCmZ1bmN0aW9uIG5vcm1hbGl6ZVVybFRvQmFzZSh1cmwsIGJhc2VQYXRoKSB7CiAgY29uc3QgZXNjYXBlZEJhc2UgPSBiYXNlUGF0aAogICAgLy8gQmFja3NsYXNoIHRvIGZvcndhcmQKICAgIC5yZXBsYWNlKC9cXC9nLCAnLycpCiAgICAvLyBFc2NhcGUgUmVnRXhwIHNwZWNpYWwgY2hhcmFjdGVycwogICAgLnJlcGxhY2UoL1t8XFx7fSgpW1xdXiQrKj8uXS9nLCAnXFwkJicpOwoKICBsZXQgbmV3VXJsID0gdXJsOwogIHRyeSB7CiAgICBuZXdVcmwgPSBkZWNvZGVVUkkodXJsKTsKICB9IGNhdGNoIChfT28pIHsKICAgIC8vIFNvbWV0aW1lIHRoaXMgYnJlYWtzCiAgfQogIHJldHVybiAoCiAgICBuZXdVcmwKICAgICAgLnJlcGxhY2UoL1xcL2csICcvJykKICAgICAgLnJlcGxhY2UoL3dlYnBhY2s6XC8/L2csICcnKSAvLyBSZW1vdmUgaW50ZXJtZWRpYXRlIGJhc2UgcGF0aAogICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHNlbnRyeS1pbnRlcm5hbC9zZGsvbm8tcmVnZXhwLWNvbnN0cnVjdG9yCiAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYChmaWxlOi8vKT8vKiR7ZXNjYXBlZEJhc2V9LypgLCAnaWcnKSwgJ2FwcDovLy8nKQogICk7Cn0KCi8vIFNsaWdodGx5IG1vZGlmaWVkIChubyBJRTggc3VwcG9ydCwgRVM2KSBhbmQgdHJhbnNjcmliZWQgdG8gVHlwZVNjcmlwdAoKLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb24KLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy4KY29uc3Qgc3BsaXRQYXRoUmUgPSAvXihcUys6XFx8XC8/KShbXHNcU10qPykoKD86XC57MSwyfXxbXi9cXF0rP3wpKFwuW14uL1xcXSp8KSkoPzpbL1xcXSopJC87Ci8qKiBKU0RvYyAqLwpmdW5jdGlvbiBzcGxpdFBhdGgoZmlsZW5hbWUpIHsKICAvLyBUcnVuY2F0ZSBmaWxlcyBuYW1lcyBncmVhdGVyIHRoYW4gMTAyNCBjaGFyYWN0ZXJzIHRvIGF2b2lkIHJlZ2V4IGRvcwogIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvc2VudHJ5LWphdmFzY3JpcHQvcHVsbC84NzM3I2Rpc2N1c3Npb25fcjEyODU3MTkxNzIKICBjb25zdCB0cnVuY2F0ZWQgPSBmaWxlbmFtZS5sZW5ndGggPiAxMDI0ID8gYDx0cnVuY2F0ZWQ+JHtmaWxlbmFtZS5zbGljZSgtMTAyNCl9YCA6IGZpbGVuYW1lOwogIGNvbnN0IHBhcnRzID0gc3BsaXRQYXRoUmUuZXhlYyh0cnVuY2F0ZWQpOwogIHJldHVybiBwYXJ0cyA/IHBhcnRzLnNsaWNlKDEpIDogW107Cn0KCi8qKiBKU0RvYyAqLwpmdW5jdGlvbiBkaXJuYW1lKHBhdGgpIHsKICBjb25zdCByZXN1bHQgPSBzcGxpdFBhdGgocGF0aCk7CiAgY29uc3Qgcm9vdCA9IHJlc3VsdFswXTsKICBsZXQgZGlyID0gcmVzdWx0WzFdOwoKICBpZiAoIXJvb3QgJiYgIWRpcikgewogICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyCiAgICByZXR1cm4gJy4nOwogIH0KCiAgaWYgKGRpcikgewogICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2gKICAgIGRpciA9IGRpci5zbGljZSgwLCBkaXIubGVuZ3RoIC0gMSk7CiAgfQoKICByZXR1cm4gcm9vdCArIGRpcjsKfQoKLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovCgovKiogU3luY1Byb21pc2UgaW50ZXJuYWwgc3RhdGVzICovCnZhciBTdGF0ZXM7IChmdW5jdGlvbiAoU3RhdGVzKSB7CiAgLyoqIFBlbmRpbmcgKi8KICBjb25zdCBQRU5ESU5HID0gMDsgU3RhdGVzW1N0YXRlc1siUEVORElORyJdID0gUEVORElOR10gPSAiUEVORElORyI7CiAgLyoqIFJlc29sdmVkIC8gT0sgKi8KICBjb25zdCBSRVNPTFZFRCA9IDE7IFN0YXRlc1tTdGF0ZXNbIlJFU09MVkVEIl0gPSBSRVNPTFZFRF0gPSAiUkVTT0xWRUQiOwogIC8qKiBSZWplY3RlZCAvIEVycm9yICovCiAgY29uc3QgUkVKRUNURUQgPSAyOyBTdGF0ZXNbU3RhdGVzWyJSRUpFQ1RFRCJdID0gUkVKRUNURURdID0gIlJFSkVDVEVEIjsKfSkoU3RhdGVzIHx8IChTdGF0ZXMgPSB7fSkpOwoKLy8gT3ZlcmxvYWRzIHNvIHdlIGNhbiBjYWxsIHJlc29sdmVkU3luY1Byb21pc2Ugd2l0aG91dCBhcmd1bWVudHMgYW5kIGdlbmVyaWMgYXJndW1lbnQKCi8qKgogKiBDcmVhdGVzIGEgcmVzb2x2ZWQgc3luYyBwcm9taXNlLgogKgogKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIHJlc29sdmUgdGhlIHByb21pc2Ugd2l0aAogKiBAcmV0dXJucyB0aGUgcmVzb2x2ZWQgc3luYyBwcm9taXNlCiAqLwpmdW5jdGlvbiByZXNvbHZlZFN5bmNQcm9taXNlKHZhbHVlKSB7CiAgcmV0dXJuIG5ldyBTeW5jUHJvbWlzZShyZXNvbHZlID0+IHsKICAgIHJlc29sdmUodmFsdWUpOwogIH0pOwp9CgovKioKICogQ3JlYXRlcyBhIHJlamVjdGVkIHN5bmMgcHJvbWlzZS4KICoKICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSB0byByZWplY3QgdGhlIHByb21pc2Ugd2l0aAogKiBAcmV0dXJucyB0aGUgcmVqZWN0ZWQgc3luYyBwcm9taXNlCiAqLwpmdW5jdGlvbiByZWplY3RlZFN5bmNQcm9taXNlKHJlYXNvbikgewogIHJldHVybiBuZXcgU3luY1Byb21pc2UoKF8sIHJlamVjdCkgPT4gewogICAgcmVqZWN0KHJlYXNvbik7CiAgfSk7Cn0KCi8qKgogKiBUaGVuYWJsZSBjbGFzcyB0aGF0IGJlaGF2ZXMgbGlrZSBhIFByb21pc2UgYW5kIGZvbGxvd3MgaXQncyBpbnRlcmZhY2UKICogYnV0IGlzIG5vdCBhc3luYyBpbnRlcm5hbGx5CiAqLwpjbGFzcyBTeW5jUHJvbWlzZSB7CgogICBjb25zdHJ1Y3RvcigKICAgIGV4ZWN1dG9yLAogICkge1N5bmNQcm9taXNlLnByb3RvdHlwZS5fX2luaXQuY2FsbCh0aGlzKTtTeW5jUHJvbWlzZS5wcm90b3R5cGUuX19pbml0Mi5jYWxsKHRoaXMpO1N5bmNQcm9taXNlLnByb3RvdHlwZS5fX2luaXQzLmNhbGwodGhpcyk7U3luY1Byb21pc2UucHJvdG90eXBlLl9faW5pdDQuY2FsbCh0aGlzKTsKICAgIHRoaXMuX3N0YXRlID0gU3RhdGVzLlBFTkRJTkc7CiAgICB0aGlzLl9oYW5kbGVycyA9IFtdOwoKICAgIHRyeSB7CiAgICAgIGV4ZWN1dG9yKHRoaXMuX3Jlc29sdmUsIHRoaXMuX3JlamVjdCk7CiAgICB9IGNhdGNoIChlKSB7CiAgICAgIHRoaXMuX3JlamVjdChlKTsKICAgIH0KICB9CgogIC8qKiBKU0RvYyAqLwogICB0aGVuKAogICAgb25mdWxmaWxsZWQsCiAgICBvbnJlamVjdGVkLAogICkgewogICAgcmV0dXJuIG5ldyBTeW5jUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7CiAgICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goWwogICAgICAgIGZhbHNlLAogICAgICAgIHJlc3VsdCA9PiB7CiAgICAgICAgICBpZiAoIW9uZnVsZmlsbGVkKSB7CiAgICAgICAgICAgIC8vIFRPRE86IMKvXF8o44OEKV8vwq8KICAgICAgICAgICAgLy8gVE9ETzogRklYTUUKICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQgKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmVzb2x2ZShvbmZ1bGZpbGxlZChyZXN1bHQpKTsKICAgICAgICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgICAgICAgIHJlamVjdChlKTsKICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgcmVhc29uID0+IHsKICAgICAgICAgIGlmICghb25yZWplY3RlZCkgewogICAgICAgICAgICByZWplY3QocmVhc29uKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmVzb2x2ZShvbnJlamVjdGVkKHJlYXNvbikpOwogICAgICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICAgICAgcmVqZWN0KGUpOwogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgfSwKICAgICAgXSk7CiAgICAgIHRoaXMuX2V4ZWN1dGVIYW5kbGVycygpOwogICAgfSk7CiAgfQoKICAvKiogSlNEb2MgKi8KICAgY2F0Y2goCiAgICBvbnJlamVjdGVkLAogICkgewogICAgcmV0dXJuIHRoaXMudGhlbih2YWwgPT4gdmFsLCBvbnJlamVjdGVkKTsKICB9CgogIC8qKiBKU0RvYyAqLwogICBmaW5hbGx5KG9uZmluYWxseSkgewogICAgcmV0dXJuIG5ldyBTeW5jUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7CiAgICAgIGxldCB2YWw7CiAgICAgIGxldCBpc1JlamVjdGVkOwoKICAgICAgcmV0dXJuIHRoaXMudGhlbigKICAgICAgICB2YWx1ZSA9PiB7CiAgICAgICAgICBpc1JlamVjdGVkID0gZmFsc2U7CiAgICAgICAgICB2YWwgPSB2YWx1ZTsKICAgICAgICAgIGlmIChvbmZpbmFsbHkpIHsKICAgICAgICAgICAgb25maW5hbGx5KCk7CiAgICAgICAgICB9CiAgICAgICAgfSwKICAgICAgICByZWFzb24gPT4gewogICAgICAgICAgaXNSZWplY3RlZCA9IHRydWU7CiAgICAgICAgICB2YWwgPSByZWFzb247CiAgICAgICAgICBpZiAob25maW5hbGx5KSB7CiAgICAgICAgICAgIG9uZmluYWxseSgpOwogICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICkudGhlbigoKSA9PiB7CiAgICAgICAgaWYgKGlzUmVqZWN0ZWQpIHsKICAgICAgICAgIHJlamVjdCh2YWwpOwogICAgICAgICAgcmV0dXJuOwogICAgICAgIH0KCiAgICAgICAgcmVzb2x2ZSh2YWwgKTsKICAgICAgfSk7CiAgICB9KTsKICB9CgogIC8qKiBKU0RvYyAqLwogICAgX19pbml0KCkge3RoaXMuX3Jlc29sdmUgPSAodmFsdWUpID0+IHsKICAgIHRoaXMuX3NldFJlc3VsdChTdGF0ZXMuUkVTT0xWRUQsIHZhbHVlKTsKICB9O30KCiAgLyoqIEpTRG9jICovCiAgICBfX2luaXQyKCkge3RoaXMuX3JlamVjdCA9IChyZWFzb24pID0+IHsKICAgIHRoaXMuX3NldFJlc3VsdChTdGF0ZXMuUkVKRUNURUQsIHJlYXNvbik7CiAgfTt9CgogIC8qKiBKU0RvYyAqLwogICAgX19pbml0MygpIHt0aGlzLl9zZXRSZXN1bHQgPSAoc3RhdGUsIHZhbHVlKSA9PiB7CiAgICBpZiAodGhpcy5fc3RhdGUgIT09IFN0YXRlcy5QRU5ESU5HKSB7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBpZiAoaXNUaGVuYWJsZSh2YWx1ZSkpIHsKICAgICAgdm9pZCAodmFsdWUgKS50aGVuKHRoaXMuX3Jlc29sdmUsIHRoaXMuX3JlamVjdCk7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlOwogICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTsKCiAgICB0aGlzLl9leGVjdXRlSGFuZGxlcnMoKTsKICB9O30KCiAgLyoqIEpTRG9jICovCiAgICBfX2luaXQ0KCkge3RoaXMuX2V4ZWN1dGVIYW5kbGVycyA9ICgpID0+IHsKICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU3RhdGVzLlBFTkRJTkcpIHsKICAgICAgcmV0dXJuOwogICAgfQoKICAgIGNvbnN0IGNhY2hlZEhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnMuc2xpY2UoKTsKICAgIHRoaXMuX2hhbmRsZXJzID0gW107CgogICAgY2FjaGVkSGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHsKICAgICAgaWYgKGhhbmRsZXJbMF0pIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU3RhdGVzLlJFU09MVkVEKSB7CiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcwogICAgICAgIGhhbmRsZXJbMV0odGhpcy5fdmFsdWUgKTsKICAgICAgfQoKICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTdGF0ZXMuUkVKRUNURUQpIHsKICAgICAgICBoYW5kbGVyWzJdKHRoaXMuX3ZhbHVlKTsKICAgICAgfQoKICAgICAgaGFuZGxlclswXSA9IHRydWU7CiAgICB9KTsKICB9O30KfQoKLyoqCiAqIENyZWF0ZXMgYW4gbmV3IFByb21pc2VCdWZmZXIgb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBsaW1pdAogKiBAcGFyYW0gbGltaXQgbWF4IG51bWJlciBvZiBwcm9taXNlcyB0aGF0IGNhbiBiZSBzdG9yZWQgaW4gdGhlIGJ1ZmZlcgogKi8KZnVuY3Rpb24gbWFrZVByb21pc2VCdWZmZXIobGltaXQpIHsKICBjb25zdCBidWZmZXIgPSBbXTsKCiAgZnVuY3Rpb24gaXNSZWFkeSgpIHsKICAgIHJldHVybiBsaW1pdCA9PT0gdW5kZWZpbmVkIHx8IGJ1ZmZlci5sZW5ndGggPCBsaW1pdDsKICB9CgogIC8qKgogICAqIFJlbW92ZSBhIHByb21pc2UgZnJvbSB0aGUgcXVldWUuCiAgICoKICAgKiBAcGFyYW0gdGFzayBDYW4gYmUgYW55IFByb21pc2VMaWtlPFQ+CiAgICogQHJldHVybnMgUmVtb3ZlZCBwcm9taXNlLgogICAqLwogIGZ1bmN0aW9uIHJlbW92ZSh0YXNrKSB7CiAgICByZXR1cm4gYnVmZmVyLnNwbGljZShidWZmZXIuaW5kZXhPZih0YXNrKSwgMSlbMF07CiAgfQoKICAvKioKICAgKiBBZGQgYSBwcm9taXNlIChyZXByZXNlbnRpbmcgYW4gaW4tZmxpZ2h0IGFjdGlvbikgdG8gdGhlIHF1ZXVlLCBhbmQgc2V0IGl0IHRvIHJlbW92ZSBpdHNlbGYgb24gZnVsZmlsbG1lbnQuCiAgICoKICAgKiBAcGFyYW0gdGFza1Byb2R1Y2VyIEEgZnVuY3Rpb24gcHJvZHVjaW5nIGFueSBQcm9taXNlTGlrZTxUPjsgSW4gcHJldmlvdXMgdmVyc2lvbnMgdGhpcyB1c2VkIHRvIGJlIGB0YXNrOgogICAqICAgICAgICBQcm9taXNlTGlrZTxUPmAsIGJ1dCB1bmRlciB0aGF0IG1vZGVsLCBQcm9taXNlcyB3ZXJlIGluc3RhbnRseSBjcmVhdGVkIG9uIHRoZSBjYWxsLXNpdGUgYW5kIHRoZWlyIGV4ZWN1dG9yCiAgICogICAgICAgIGZ1bmN0aW9ucyB0aGVyZWZvcmUgcmFuIGltbWVkaWF0ZWx5LiBUaHVzLCBldmVuIGlmIHRoZSBidWZmZXIgd2FzIGZ1bGwsIHRoZSBhY3Rpb24gc3RpbGwgaGFwcGVuZWQuIEJ5CiAgICogICAgICAgIHJlcXVpcmluZyB0aGUgcHJvbWlzZSB0byBiZSB3cmFwcGVkIGluIGEgZnVuY3Rpb24sIHdlIGNhbiBkZWZlciBwcm9taXNlIGNyZWF0aW9uIHVudGlsIGFmdGVyIHRoZSBidWZmZXIKICAgKiAgICAgICAgbGltaXQgY2hlY2suCiAgICogQHJldHVybnMgVGhlIG9yaWdpbmFsIHByb21pc2UuCiAgICovCiAgZnVuY3Rpb24gYWRkKHRhc2tQcm9kdWNlcikgewogICAgaWYgKCFpc1JlYWR5KCkpIHsKICAgICAgcmV0dXJuIHJlamVjdGVkU3luY1Byb21pc2UobmV3IFNlbnRyeUVycm9yKCdOb3QgYWRkaW5nIFByb21pc2UgYmVjYXVzZSBidWZmZXIgbGltaXQgd2FzIHJlYWNoZWQuJykpOwogICAgfQoKICAgIC8vIHN0YXJ0IHRoZSB0YXNrIGFuZCBhZGQgaXRzIHByb21pc2UgdG8gdGhlIHF1ZXVlCiAgICBjb25zdCB0YXNrID0gdGFza1Byb2R1Y2VyKCk7CiAgICBpZiAoYnVmZmVyLmluZGV4T2YodGFzaykgPT09IC0xKSB7CiAgICAgIGJ1ZmZlci5wdXNoKHRhc2spOwogICAgfQogICAgdm9pZCB0YXNrCiAgICAgIC50aGVuKCgpID0+IHJlbW92ZSh0YXNrKSkKICAgICAgLy8gVXNlIGB0aGVuKG51bGwsIHJlamVjdGlvbkhhbmRsZXIpYCByYXRoZXIgdGhhbiBgY2F0Y2gocmVqZWN0aW9uSGFuZGxlcilgIHNvIHRoYXQgd2UgY2FuIHVzZSBgUHJvbWlzZUxpa2VgCiAgICAgIC8vIHJhdGhlciB0aGFuIGBQcm9taXNlYC4gYFByb21pc2VMaWtlYCBkb2Vzbid0IGhhdmUgYSBgLmNhdGNoYCBtZXRob2QsIG1ha2luZyBpdHMgcG9seWZpbGwgc21hbGxlci4gKEVTNSBkaWRuJ3QKICAgICAgLy8gaGF2ZSBwcm9taXNlcywgc28gVFMgaGFzIHRvIHBvbHlmaWxsIHdoZW4gZG93bi1jb21waWxpbmcuKQogICAgICAudGhlbihudWxsLCAoKSA9PgogICAgICAgIHJlbW92ZSh0YXNrKS50aGVuKG51bGwsICgpID0+IHsKICAgICAgICAgIC8vIFdlIGhhdmUgdG8gYWRkIGFub3RoZXIgY2F0Y2ggaGVyZSBiZWNhdXNlIGByZW1vdmUoKWAgc3RhcnRzIGEgbmV3IHByb21pc2UgY2hhaW4uCiAgICAgICAgfSksCiAgICAgICk7CiAgICByZXR1cm4gdGFzazsKICB9CgogIC8qKgogICAqIFdhaXQgZm9yIGFsbCBwcm9taXNlcyBpbiB0aGUgcXVldWUgdG8gcmVzb2x2ZSBvciBmb3IgdGltZW91dCB0byBleHBpcmUsIHdoaWNoZXZlciBjb21lcyBmaXJzdC4KICAgKgogICAqIEBwYXJhbSB0aW1lb3V0IFRoZSB0aW1lLCBpbiBtcywgYWZ0ZXIgd2hpY2ggdG8gcmVzb2x2ZSB0byBgZmFsc2VgIGlmIHRoZSBxdWV1ZSBpcyBzdGlsbCBub24tZW1wdHkuIFBhc3NpbmcgYDBgIChvcgogICAqIG5vdCBwYXNzaW5nIGFueXRoaW5nKSB3aWxsIG1ha2UgdGhlIHByb21pc2Ugd2FpdCBhcyBsb25nIGFzIGl0IHRha2VzIGZvciB0aGUgcXVldWUgdG8gZHJhaW4gYmVmb3JlIHJlc29sdmluZyB0bwogICAqIGB0cnVlYC4KICAgKiBAcmV0dXJucyBBIHByb21pc2Ugd2hpY2ggd2lsbCByZXNvbHZlIHRvIGB0cnVlYCBpZiB0aGUgcXVldWUgaXMgYWxyZWFkeSBlbXB0eSBvciBkcmFpbnMgYmVmb3JlIHRoZSB0aW1lb3V0LCBhbmQKICAgKiBgZmFsc2VgIG90aGVyd2lzZQogICAqLwogIGZ1bmN0aW9uIGRyYWluKHRpbWVvdXQpIHsKICAgIHJldHVybiBuZXcgU3luY1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gewogICAgICBsZXQgY291bnRlciA9IGJ1ZmZlci5sZW5ndGg7CgogICAgICBpZiAoIWNvdW50ZXIpIHsKICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTsKICAgICAgfQoKICAgICAgLy8gd2FpdCBmb3IgYHRpbWVvdXRgIG1zIGFuZCB0aGVuIHJlc29sdmUgdG8gYGZhbHNlYCAoaWYgbm90IGNhbmNlbGxlZCBmaXJzdCkKICAgICAgY29uc3QgY2FwdHVyZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgaWYgKHRpbWVvdXQgJiYgdGltZW91dCA+IDApIHsKICAgICAgICAgIHJlc29sdmUoZmFsc2UpOwogICAgICAgIH0KICAgICAgfSwgdGltZW91dCk7CgogICAgICAvLyBpZiBhbGwgcHJvbWlzZXMgcmVzb2x2ZSBpbiB0aW1lLCBjYW5jZWwgdGhlIHRpbWVyIGFuZCByZXNvbHZlIHRvIGB0cnVlYAogICAgICBidWZmZXIuZm9yRWFjaChpdGVtID0+IHsKICAgICAgICB2b2lkIHJlc29sdmVkU3luY1Byb21pc2UoaXRlbSkudGhlbigoKSA9PiB7CiAgICAgICAgICBpZiAoIS0tY291bnRlcikgewogICAgICAgICAgICBjbGVhclRpbWVvdXQoY2FwdHVyZWRTZXRUaW1lb3V0KTsKICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTsKICAgICAgICAgIH0KICAgICAgICB9LCByZWplY3QpOwogICAgICB9KTsKICAgIH0pOwogIH0KCiAgcmV0dXJuIHsKICAgICQ6IGJ1ZmZlciwKICAgIGFkZCwKICAgIGRyYWluLAogIH07Cn0KCmNvbnN0IE9ORV9TRUNPTkRfSU5fTVMgPSAxMDAwOwoKLyoqCiAqIEEgcGFydGlhbCBkZWZpbml0aW9uIG9mIHRoZSBbUGVyZm9ybWFuY2UgV2ViIEFQSV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1BlcmZvcm1hbmNlfQogKiBmb3IgYWNjZXNzaW5nIGEgaGlnaC1yZXNvbHV0aW9uIG1vbm90b25pYyBjbG9jay4KICovCgovKioKICogUmV0dXJucyBhIHRpbWVzdGFtcCBpbiBzZWNvbmRzIHNpbmNlIHRoZSBVTklYIGVwb2NoIHVzaW5nIHRoZSBEYXRlIEFQSS4KICoKICogVE9ETyh2OCk6IFJldHVybiB0eXBlIHNob3VsZCBiZSByb3VuZGVkLgogKi8KZnVuY3Rpb24gZGF0ZVRpbWVzdGFtcEluU2Vjb25kcygpIHsKICByZXR1cm4gRGF0ZS5ub3coKSAvIE9ORV9TRUNPTkRfSU5fTVM7Cn0KCi8qKgogKiBSZXR1cm5zIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2ZSBQZXJmb3JtYW5jZSBBUEkgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiwgb3IgdW5kZWZpbmVkIGZvciBicm93c2VycyB0aGF0IGRvIG5vdAogKiBzdXBwb3J0IHRoZSBBUEkuCiAqCiAqIFdyYXBwaW5nIHRoZSBuYXRpdmUgQVBJIHdvcmtzIGFyb3VuZCBkaWZmZXJlbmNlcyBpbiBiZWhhdmlvciBmcm9tIGRpZmZlcmVudCBicm93c2Vycy4KICovCmZ1bmN0aW9uIGNyZWF0ZVVuaXhUaW1lc3RhbXBJblNlY29uZHNGdW5jKCkgewogIGNvbnN0IHsgcGVyZm9ybWFuY2UgfSA9IEdMT0JBTF9PQkogOwogIGlmICghcGVyZm9ybWFuY2UgfHwgIXBlcmZvcm1hbmNlLm5vdykgewogICAgcmV0dXJuIGRhdGVUaW1lc3RhbXBJblNlY29uZHM7CiAgfQoKICAvLyBTb21lIGJyb3dzZXIgYW5kIGVudmlyb25tZW50cyBkb24ndCBoYXZlIGEgdGltZU9yaWdpbiwgc28gd2UgZmFsbGJhY2sgdG8KICAvLyB1c2luZyBEYXRlLm5vdygpIHRvIGNvbXB1dGUgdGhlIHN0YXJ0aW5nIHRpbWUuCiAgY29uc3QgYXBwcm94U3RhcnRpbmdUaW1lT3JpZ2luID0gRGF0ZS5ub3coKSAtIHBlcmZvcm1hbmNlLm5vdygpOwogIGNvbnN0IHRpbWVPcmlnaW4gPSBwZXJmb3JtYW5jZS50aW1lT3JpZ2luID09IHVuZGVmaW5lZCA/IGFwcHJveFN0YXJ0aW5nVGltZU9yaWdpbiA6IHBlcmZvcm1hbmNlLnRpbWVPcmlnaW47CgogIC8vIHBlcmZvcm1hbmNlLm5vdygpIGlzIGEgbW9ub3RvbmljIGNsb2NrLCB3aGljaCBtZWFucyBpdCBzdGFydHMgYXQgMCB3aGVuIHRoZSBwcm9jZXNzIGJlZ2lucy4gVG8gZ2V0IHRoZSBjdXJyZW50CiAgLy8gd2FsbCBjbG9jayB0aW1lIChhY3R1YWwgVU5JWCB0aW1lc3RhbXApLCB3ZSBuZWVkIHRvIGFkZCB0aGUgc3RhcnRpbmcgdGltZSBvcmlnaW4gYW5kIHRoZSBjdXJyZW50IHRpbWUgZWxhcHNlZC4KICAvLwogIC8vIFRPRE86IFRoaXMgZG9lcyBub3QgYWNjb3VudCBmb3IgdGhlIGNhc2Ugd2hlcmUgdGhlIG1vbm90b25pYyBjbG9jayB0aGF0IHBvd2VycyBwZXJmb3JtYW5jZS5ub3coKSBkcmlmdHMgZnJvbSB0aGUKICAvLyB3YWxsIGNsb2NrIHRpbWUsIHdoaWNoIGNhdXNlcyB0aGUgcmV0dXJuZWQgdGltZXN0YW1wIHRvIGJlIGluYWNjdXJhdGUuIFdlIHNob3VsZCBpbnZlc3RpZ2F0ZSBob3cgdG8gZGV0ZWN0IGFuZAogIC8vIGNvcnJlY3QgZm9yIHRoaXMuCiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZ2V0c2VudHJ5L3NlbnRyeS1qYXZhc2NyaXB0L2lzc3Vlcy8yNTkwCiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbWRuL2NvbnRlbnQvaXNzdWVzLzQ3MTMKICAvLyBTZWU6IGh0dHBzOi8vZGV2LnRvL25vYW1yL3doZW4tYS1taWxsaXNlY29uZC1pcy1ub3QtYS1taWxsaXNlY29uZC0zaDYKICByZXR1cm4gKCkgPT4gewogICAgcmV0dXJuICh0aW1lT3JpZ2luICsgcGVyZm9ybWFuY2Uubm93KCkpIC8gT05FX1NFQ09ORF9JTl9NUzsKICB9Owp9CgovKioKICogUmV0dXJucyBhIHRpbWVzdGFtcCBpbiBzZWNvbmRzIHNpbmNlIHRoZSBVTklYIGVwb2NoIHVzaW5nIGVpdGhlciB0aGUgUGVyZm9ybWFuY2Ugb3IgRGF0ZSBBUElzLCBkZXBlbmRpbmcgb24gdGhlCiAqIGF2YWlsYWJpbGl0eSBvZiB0aGUgUGVyZm9ybWFuY2UgQVBJLgogKgogKiBCVUc6IE5vdGUgdGhhdCBiZWNhdXNlIG9mIGhvdyBicm93c2VycyBpbXBsZW1lbnQgdGhlIFBlcmZvcm1hbmNlIEFQSSwgdGhlIGNsb2NrIG1pZ2h0IHN0b3Agd2hlbiB0aGUgY29tcHV0ZXIgaXMKICogYXNsZWVwLiBUaGlzIGNyZWF0ZXMgYSBza2V3IGJldHdlZW4gYGRhdGVUaW1lc3RhbXBJblNlY29uZHNgIGFuZCBgdGltZXN0YW1wSW5TZWNvbmRzYC4gVGhlCiAqIHNrZXcgY2FuIGdyb3cgdG8gYXJiaXRyYXJ5IGFtb3VudHMgbGlrZSBkYXlzLCB3ZWVrcyBvciBtb250aHMuCiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZ2V0c2VudHJ5L3NlbnRyeS1qYXZhc2NyaXB0L2lzc3Vlcy8yNTkwLgogKi8KY29uc3QgdGltZXN0YW1wSW5TZWNvbmRzID0gY3JlYXRlVW5peFRpbWVzdGFtcEluU2Vjb25kc0Z1bmMoKTsKCi8qKgogKiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgVU5JWCBlcG9jaC4gVGhpcyB2YWx1ZSBpcyBvbmx5IHVzYWJsZSBpbiBhIGJyb3dzZXIsIGFuZCBvbmx5IHdoZW4gdGhlCiAqIHBlcmZvcm1hbmNlIEFQSSBpcyBhdmFpbGFibGUuCiAqLwooKCkgPT4gewogIC8vIFVuZm9ydHVuYXRlbHkgYnJvd3NlcnMgbWF5IHJlcG9ydCBhbiBpbmFjY3VyYXRlIHRpbWUgb3JpZ2luIGRhdGEsIHRocm91Z2ggZWl0aGVyIHBlcmZvcm1hbmNlLnRpbWVPcmlnaW4gb3IKICAvLyBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0LCB3aGljaCByZXN1bHRzIGluIHBvb3IgcmVzdWx0cyBpbiBwZXJmb3JtYW5jZSBkYXRhLiBXZSBvbmx5IHRyZWF0IHRpbWUgb3JpZ2luCiAgLy8gZGF0YSBhcyByZWxpYWJsZSBpZiB0aGV5IGFyZSB3aXRoaW4gYSByZWFzb25hYmxlIHRocmVzaG9sZCBvZiB0aGUgY3VycmVudCB0aW1lLgoKICBjb25zdCB7IHBlcmZvcm1hbmNlIH0gPSBHTE9CQUxfT0JKIDsKICBpZiAoIXBlcmZvcm1hbmNlIHx8ICFwZXJmb3JtYW5jZS5ub3cpIHsKICAgIHJldHVybiB1bmRlZmluZWQ7CiAgfQoKICBjb25zdCB0aHJlc2hvbGQgPSAzNjAwICogMTAwMDsKICBjb25zdCBwZXJmb3JtYW5jZU5vdyA9IHBlcmZvcm1hbmNlLm5vdygpOwogIGNvbnN0IGRhdGVOb3cgPSBEYXRlLm5vdygpOwoKICAvLyBpZiB0aW1lT3JpZ2luIGlzbid0IGF2YWlsYWJsZSBzZXQgZGVsdGEgdG8gdGhyZXNob2xkIHNvIGl0IGlzbid0IHVzZWQKICBjb25zdCB0aW1lT3JpZ2luRGVsdGEgPSBwZXJmb3JtYW5jZS50aW1lT3JpZ2luCiAgICA/IE1hdGguYWJzKHBlcmZvcm1hbmNlLnRpbWVPcmlnaW4gKyBwZXJmb3JtYW5jZU5vdyAtIGRhdGVOb3cpCiAgICA6IHRocmVzaG9sZDsKICBjb25zdCB0aW1lT3JpZ2luSXNSZWxpYWJsZSA9IHRpbWVPcmlnaW5EZWx0YSA8IHRocmVzaG9sZDsKCiAgLy8gV2hpbGUgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCBpcyBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHBlcmZvcm1hbmNlLnRpbWVPcmlnaW4sIHBlcmZvcm1hbmNlLnRpbWVPcmlnaW4KICAvLyBpcyBub3QgYXMgd2lkZWx5IHN1cHBvcnRlZC4gTmFtZWx5LCBwZXJmb3JtYW5jZS50aW1lT3JpZ2luIGlzIHVuZGVmaW5lZCBpbiBTYWZhcmkgYXMgb2Ygd3JpdGluZy4KICAvLyBBbHNvIGFzIG9mIHdyaXRpbmcsIHBlcmZvcm1hbmNlLnRpbWluZyBpcyBub3QgYXZhaWxhYmxlIGluIFdlYiBXb3JrZXJzIGluIG1haW5zdHJlYW0gYnJvd3NlcnMsIHNvIGl0IGlzIG5vdCBhbHdheXMKICAvLyBhIHZhbGlkIGZhbGxiYWNrLiBJbiB0aGUgYWJzZW5jZSBvZiBhbiBpbml0aWFsIHRpbWUgcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIsIGZhbGxiYWNrIHRvIHRoZSBjdXJyZW50IHRpbWUgZnJvbSB0aGUKICAvLyBEYXRlIEFQSS4KICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICBjb25zdCBuYXZpZ2F0aW9uU3RhcnQgPSBwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydDsKICBjb25zdCBoYXNOYXZpZ2F0aW9uU3RhcnQgPSB0eXBlb2YgbmF2aWdhdGlvblN0YXJ0ID09PSAnbnVtYmVyJzsKICAvLyBpZiBuYXZpZ2F0aW9uU3RhcnQgaXNuJ3QgYXZhaWxhYmxlIHNldCBkZWx0YSB0byB0aHJlc2hvbGQgc28gaXQgaXNuJ3QgdXNlZAogIGNvbnN0IG5hdmlnYXRpb25TdGFydERlbHRhID0gaGFzTmF2aWdhdGlvblN0YXJ0ID8gTWF0aC5hYnMobmF2aWdhdGlvblN0YXJ0ICsgcGVyZm9ybWFuY2VOb3cgLSBkYXRlTm93KSA6IHRocmVzaG9sZDsKICBjb25zdCBuYXZpZ2F0aW9uU3RhcnRJc1JlbGlhYmxlID0gbmF2aWdhdGlvblN0YXJ0RGVsdGEgPCB0aHJlc2hvbGQ7CgogIGlmICh0aW1lT3JpZ2luSXNSZWxpYWJsZSB8fCBuYXZpZ2F0aW9uU3RhcnRJc1JlbGlhYmxlKSB7CiAgICAvLyBVc2UgdGhlIG1vcmUgcmVsaWFibGUgdGltZSBvcmlnaW4KICAgIGlmICh0aW1lT3JpZ2luRGVsdGEgPD0gbmF2aWdhdGlvblN0YXJ0RGVsdGEpIHsKICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLnRpbWVPcmlnaW47CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gbmF2aWdhdGlvblN0YXJ0OwogICAgfQogIH0KICByZXR1cm4gZGF0ZU5vdzsKfSkoKTsKCi8qKgogKiBDcmVhdGVzIGFuIGVudmVsb3BlLgogKiBNYWtlIHN1cmUgdG8gYWx3YXlzIGV4cGxpY2l0bHkgcHJvdmlkZSB0aGUgZ2VuZXJpYyB0byB0aGlzIGZ1bmN0aW9uCiAqIHNvIHRoYXQgdGhlIGVudmVsb3BlIHR5cGVzIHJlc29sdmUgY29ycmVjdGx5LgogKi8KZnVuY3Rpb24gY3JlYXRlRW52ZWxvcGUoaGVhZGVycywgaXRlbXMgPSBbXSkgewogIHJldHVybiBbaGVhZGVycywgaXRlbXNdIDsKfQoKLyoqCiAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIGxvb3AgdGhyb3VnaCB0aGUgaXRlbXMgYW5kIGl0ZW0gdHlwZXMgb2YgYW4gZW52ZWxvcGUuCiAqIChUaGlzIGZ1bmN0aW9uIHdhcyBtb3N0bHkgY3JlYXRlZCBiZWNhdXNlIHdvcmtpbmcgd2l0aCBlbnZlbG9wZSB0eXBlcyBpcyBwYWluZnVsIGF0IHRoZSBtb21lbnQpCiAqCiAqIElmIHRoZSBjYWxsYmFjayByZXR1cm5zIHRydWUsIHRoZSByZXN0IG9mIHRoZSBpdGVtcyB3aWxsIGJlIHNraXBwZWQuCiAqLwpmdW5jdGlvbiBmb3JFYWNoRW52ZWxvcGVJdGVtKAogIGVudmVsb3BlLAogIGNhbGxiYWNrLAopIHsKICBjb25zdCBlbnZlbG9wZUl0ZW1zID0gZW52ZWxvcGVbMV07CgogIGZvciAoY29uc3QgZW52ZWxvcGVJdGVtIG9mIGVudmVsb3BlSXRlbXMpIHsKICAgIGNvbnN0IGVudmVsb3BlSXRlbVR5cGUgPSBlbnZlbG9wZUl0ZW1bMF0udHlwZTsKICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudmVsb3BlSXRlbSwgZW52ZWxvcGVJdGVtVHlwZSk7CgogICAgaWYgKHJlc3VsdCkgewogICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KICB9CgogIHJldHVybiBmYWxzZTsKfQoKLyoqCiAqIEVuY29kZSBhIHN0cmluZyB0byBVVEY4LgogKi8KZnVuY3Rpb24gZW5jb2RlVVRGOChpbnB1dCwgdGV4dEVuY29kZXIpIHsKICBjb25zdCB1dGY4ID0gdGV4dEVuY29kZXIgfHwgbmV3IFRleHRFbmNvZGVyKCk7CiAgcmV0dXJuIHV0ZjguZW5jb2RlKGlucHV0KTsKfQoKLyoqCiAqIFNlcmlhbGl6ZXMgYW4gZW52ZWxvcGUuCiAqLwpmdW5jdGlvbiBzZXJpYWxpemVFbnZlbG9wZShlbnZlbG9wZSwgdGV4dEVuY29kZXIpIHsKICBjb25zdCBbZW52SGVhZGVycywgaXRlbXNdID0gZW52ZWxvcGU7CgogIC8vIEluaXRpYWxseSB3ZSBjb25zdHJ1Y3Qgb3VyIGVudmVsb3BlIGFzIGEgc3RyaW5nIGFuZCBvbmx5IGNvbnZlcnQgdG8gYmluYXJ5IGNodW5rcyBpZiB3ZSBlbmNvdW50ZXIgYmluYXJ5IGRhdGEKICBsZXQgcGFydHMgPSBKU09OLnN0cmluZ2lmeShlbnZIZWFkZXJzKTsKCiAgZnVuY3Rpb24gYXBwZW5kKG5leHQpIHsKICAgIGlmICh0eXBlb2YgcGFydHMgPT09ICdzdHJpbmcnKSB7CiAgICAgIHBhcnRzID0gdHlwZW9mIG5leHQgPT09ICdzdHJpbmcnID8gcGFydHMgKyBuZXh0IDogW2VuY29kZVVURjgocGFydHMsIHRleHRFbmNvZGVyKSwgbmV4dF07CiAgICB9IGVsc2UgewogICAgICBwYXJ0cy5wdXNoKHR5cGVvZiBuZXh0ID09PSAnc3RyaW5nJyA/IGVuY29kZVVURjgobmV4dCwgdGV4dEVuY29kZXIpIDogbmV4dCk7CiAgICB9CiAgfQoKICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHsKICAgIGNvbnN0IFtpdGVtSGVhZGVycywgcGF5bG9hZF0gPSBpdGVtOwoKICAgIGFwcGVuZChgXG4ke0pTT04uc3RyaW5naWZ5KGl0ZW1IZWFkZXJzKX1cbmApOwoKICAgIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gJ3N0cmluZycgfHwgcGF5bG9hZCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHsKICAgICAgYXBwZW5kKHBheWxvYWQpOwogICAgfSBlbHNlIHsKICAgICAgbGV0IHN0cmluZ2lmaWVkUGF5bG9hZDsKICAgICAgdHJ5IHsKICAgICAgICBzdHJpbmdpZmllZFBheWxvYWQgPSBKU09OLnN0cmluZ2lmeShwYXlsb2FkKTsKICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgIC8vIEluIGNhc2UsIGRlc3BpdGUgYWxsIG91ciBlZmZvcnRzIHRvIGtlZXAgYHBheWxvYWRgIGNpcmN1bGFyLWRlcGVuZGVuY3ktZnJlZSwgYEpTT04uc3RyaW5pZnkoKWAgc3RpbGwKICAgICAgICAvLyBmYWlscywgd2UgdHJ5IGFnYWluIGFmdGVyIG5vcm1hbGl6aW5nIGl0IGFnYWluIHdpdGggaW5maW5pdGUgbm9ybWFsaXphdGlvbiBkZXB0aC4gVGhpcyBvZiBjb3Vyc2UgaGFzIGEKICAgICAgICAvLyBwZXJmb3JtYW5jZSBpbXBhY3QgYnV0IGluIHRoaXMgY2FzZSBhIHBlcmZvcm1hbmNlIGhpdCBpcyBiZXR0ZXIgdGhhbiB0aHJvd2luZy4KICAgICAgICBzdHJpbmdpZmllZFBheWxvYWQgPSBKU09OLnN0cmluZ2lmeShub3JtYWxpemUocGF5bG9hZCkpOwogICAgICB9CiAgICAgIGFwcGVuZChzdHJpbmdpZmllZFBheWxvYWQpOwogICAgfQogIH0KCiAgcmV0dXJuIHR5cGVvZiBwYXJ0cyA9PT0gJ3N0cmluZycgPyBwYXJ0cyA6IGNvbmNhdEJ1ZmZlcnMocGFydHMpOwp9CgpmdW5jdGlvbiBjb25jYXRCdWZmZXJzKGJ1ZmZlcnMpIHsKICBjb25zdCB0b3RhbExlbmd0aCA9IGJ1ZmZlcnMucmVkdWNlKChhY2MsIGJ1ZikgPT4gYWNjICsgYnVmLmxlbmd0aCwgMCk7CgogIGNvbnN0IG1lcmdlZCA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTsKICBsZXQgb2Zmc2V0ID0gMDsKICBmb3IgKGNvbnN0IGJ1ZmZlciBvZiBidWZmZXJzKSB7CiAgICBtZXJnZWQuc2V0KGJ1ZmZlciwgb2Zmc2V0KTsKICAgIG9mZnNldCArPSBidWZmZXIubGVuZ3RoOwogIH0KCiAgcmV0dXJuIG1lcmdlZDsKfQoKY29uc3QgSVRFTV9UWVBFX1RPX0RBVEFfQ0FURUdPUllfTUFQID0gewogIHNlc3Npb246ICdzZXNzaW9uJywKICBzZXNzaW9uczogJ3Nlc3Npb24nLAogIGF0dGFjaG1lbnQ6ICdhdHRhY2htZW50JywKICB0cmFuc2FjdGlvbjogJ3RyYW5zYWN0aW9uJywKICBldmVudDogJ2Vycm9yJywKICBjbGllbnRfcmVwb3J0OiAnaW50ZXJuYWwnLAogIHVzZXJfcmVwb3J0OiAnZGVmYXVsdCcsCiAgcHJvZmlsZTogJ3Byb2ZpbGUnLAogIHJlcGxheV9ldmVudDogJ3JlcGxheScsCiAgcmVwbGF5X3JlY29yZGluZzogJ3JlcGxheScsCiAgY2hlY2tfaW46ICdtb25pdG9yJywKICBmZWVkYmFjazogJ2ZlZWRiYWNrJywKICBzcGFuOiAnc3BhbicsCiAgc3RhdHNkOiAnbWV0cmljX2J1Y2tldCcsCn07CgovKioKICogTWFwcyB0aGUgdHlwZSBvZiBhbiBlbnZlbG9wZSBpdGVtIHRvIGEgZGF0YSBjYXRlZ29yeS4KICovCmZ1bmN0aW9uIGVudmVsb3BlSXRlbVR5cGVUb0RhdGFDYXRlZ29yeSh0eXBlKSB7CiAgcmV0dXJuIElURU1fVFlQRV9UT19EQVRBX0NBVEVHT1JZX01BUFt0eXBlXTsKfQoKLyoqIEV4dHJhY3RzIHRoZSBtaW5pbWFsIFNESyBpbmZvIGZyb20gdGhlIG1ldGFkYXRhIG9yIGFuIGV2ZW50cyAqLwpmdW5jdGlvbiBnZXRTZGtNZXRhZGF0YUZvckVudmVsb3BlSGVhZGVyKG1ldGFkYXRhT3JFdmVudCkgewogIGlmICghbWV0YWRhdGFPckV2ZW50IHx8ICFtZXRhZGF0YU9yRXZlbnQuc2RrKSB7CiAgICByZXR1cm47CiAgfQogIGNvbnN0IHsgbmFtZSwgdmVyc2lvbiB9ID0gbWV0YWRhdGFPckV2ZW50LnNkazsKICByZXR1cm4geyBuYW1lLCB2ZXJzaW9uIH07Cn0KCi8qKgogKiBDcmVhdGVzIGV2ZW50IGVudmVsb3BlIGhlYWRlcnMsIGJhc2VkIG9uIGV2ZW50LCBzZGsgaW5mbyBhbmQgdHVubmVsCiAqIE5vdGU6IFRoaXMgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBmcm9tIHRoZSBjb3JlIHBhY2thZ2UgdG8gbWFrZSBpdCBhdmFpbGFibGUgaW4gUmVwbGF5CiAqLwpmdW5jdGlvbiBjcmVhdGVFdmVudEVudmVsb3BlSGVhZGVycygKICBldmVudCwKICBzZGtJbmZvLAogIHR1bm5lbCwKICBkc24sCikgewogIGNvbnN0IGR5bmFtaWNTYW1wbGluZ0NvbnRleHQgPSBldmVudC5zZGtQcm9jZXNzaW5nTWV0YWRhdGEgJiYgZXZlbnQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhLmR5bmFtaWNTYW1wbGluZ0NvbnRleHQ7CiAgcmV0dXJuIHsKICAgIGV2ZW50X2lkOiBldmVudC5ldmVudF9pZCAsCiAgICBzZW50X2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksCiAgICAuLi4oc2RrSW5mbyAmJiB7IHNkazogc2RrSW5mbyB9KSwKICAgIC4uLighIXR1bm5lbCAmJiBkc24gJiYgeyBkc246IGRzblRvU3RyaW5nKGRzbikgfSksCiAgICAuLi4oZHluYW1pY1NhbXBsaW5nQ29udGV4dCAmJiB7CiAgICAgIHRyYWNlOiBkcm9wVW5kZWZpbmVkS2V5cyh7IC4uLmR5bmFtaWNTYW1wbGluZ0NvbnRleHQgfSksCiAgICB9KSwKICB9Owp9CgovLyBJbnRlbnRpb25hbGx5IGtlZXBpbmcgdGhlIGtleSBicm9hZCwgYXMgd2UgZG9uJ3Qga25vdyBmb3Igc3VyZSB3aGF0IHJhdGUgbGltaXQgaGVhZGVycyBnZXQgcmV0dXJuZWQgZnJvbSBiYWNrZW5kCgpjb25zdCBERUZBVUxUX1JFVFJZX0FGVEVSID0gNjAgKiAxMDAwOyAvLyA2MCBzZWNvbmRzCgovKioKICogRXh0cmFjdHMgUmV0cnktQWZ0ZXIgdmFsdWUgZnJvbSB0aGUgcmVxdWVzdCBoZWFkZXIgb3IgcmV0dXJucyBkZWZhdWx0IHZhbHVlCiAqIEBwYXJhbSBoZWFkZXIgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mICdSZXRyeS1BZnRlcicgaGVhZGVyCiAqIEBwYXJhbSBub3cgY3VycmVudCB1bml4IHRpbWVzdGFtcAogKgogKi8KZnVuY3Rpb24gcGFyc2VSZXRyeUFmdGVySGVhZGVyKGhlYWRlciwgbm93ID0gRGF0ZS5ub3coKSkgewogIGNvbnN0IGhlYWRlckRlbGF5ID0gcGFyc2VJbnQoYCR7aGVhZGVyfWAsIDEwKTsKICBpZiAoIWlzTmFOKGhlYWRlckRlbGF5KSkgewogICAgcmV0dXJuIGhlYWRlckRlbGF5ICogMTAwMDsKICB9CgogIGNvbnN0IGhlYWRlckRhdGUgPSBEYXRlLnBhcnNlKGAke2hlYWRlcn1gKTsKICBpZiAoIWlzTmFOKGhlYWRlckRhdGUpKSB7CiAgICByZXR1cm4gaGVhZGVyRGF0ZSAtIG5vdzsKICB9CgogIHJldHVybiBERUZBVUxUX1JFVFJZX0FGVEVSOwp9CgovKioKICogR2V0cyB0aGUgdGltZSB0aGF0IHRoZSBnaXZlbiBjYXRlZ29yeSBpcyBkaXNhYmxlZCB1bnRpbCBmb3IgcmF0ZSBsaW1pdGluZy4KICogSW4gY2FzZSBubyBjYXRlZ29yeS1zcGVjaWZpYyBsaW1pdCBpcyBzZXQgYnV0IGEgZ2VuZXJhbCByYXRlIGxpbWl0IGFjcm9zcyBhbGwgY2F0ZWdvcmllcyBpcyBhY3RpdmUsCiAqIHRoYXQgdGltZSBpcyByZXR1cm5lZC4KICoKICogQHJldHVybiB0aGUgdGltZSBpbiBtcyB0aGF0IHRoZSBjYXRlZ29yeSBpcyBkaXNhYmxlZCB1bnRpbCBvciAwIGlmIHRoZXJlJ3Mgbm8gYWN0aXZlIHJhdGUgbGltaXQuCiAqLwpmdW5jdGlvbiBkaXNhYmxlZFVudGlsKGxpbWl0cywgZGF0YUNhdGVnb3J5KSB7CiAgcmV0dXJuIGxpbWl0c1tkYXRhQ2F0ZWdvcnldIHx8IGxpbWl0cy5hbGwgfHwgMDsKfQoKLyoqCiAqIENoZWNrcyBpZiBhIGNhdGVnb3J5IGlzIHJhdGUgbGltaXRlZAogKi8KZnVuY3Rpb24gaXNSYXRlTGltaXRlZChsaW1pdHMsIGRhdGFDYXRlZ29yeSwgbm93ID0gRGF0ZS5ub3coKSkgewogIHJldHVybiBkaXNhYmxlZFVudGlsKGxpbWl0cywgZGF0YUNhdGVnb3J5KSA+IG5vdzsKfQoKLyoqCiAqIFVwZGF0ZSByYXRlbGltaXRzIGZyb20gaW5jb21pbmcgaGVhZGVycy4KICoKICogQHJldHVybiB0aGUgdXBkYXRlZCBSYXRlTGltaXRzIG9iamVjdC4KICovCmZ1bmN0aW9uIHVwZGF0ZVJhdGVMaW1pdHMoCiAgbGltaXRzLAogIHsgc3RhdHVzQ29kZSwgaGVhZGVycyB9LAogIG5vdyA9IERhdGUubm93KCksCikgewogIGNvbnN0IHVwZGF0ZWRSYXRlTGltaXRzID0gewogICAgLi4ubGltaXRzLAogIH07CgogIC8vICJUaGUgbmFtZSBpcyBjYXNlLWluc2Vuc2l0aXZlLiIKICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGVhZGVycy9nZXQKICBjb25zdCByYXRlTGltaXRIZWFkZXIgPSBoZWFkZXJzICYmIGhlYWRlcnNbJ3gtc2VudHJ5LXJhdGUtbGltaXRzJ107CiAgY29uc3QgcmV0cnlBZnRlckhlYWRlciA9IGhlYWRlcnMgJiYgaGVhZGVyc1sncmV0cnktYWZ0ZXInXTsKCiAgaWYgKHJhdGVMaW1pdEhlYWRlcikgewogICAgLyoqCiAgICAgKiByYXRlIGxpbWl0IGhlYWRlcnMgYXJlIG9mIHRoZSBmb3JtCiAgICAgKiAgICAgPGhlYWRlcj4sPGhlYWRlcj4sLi4KICAgICAqIHdoZXJlIGVhY2ggPGhlYWRlcj4gaXMgb2YgdGhlIGZvcm0KICAgICAqICAgICA8cmV0cnlfYWZ0ZXI+OiA8Y2F0ZWdvcmllcz46IDxzY29wZT46IDxyZWFzb25fY29kZT46IDxuYW1lc3BhY2VzPgogICAgICogd2hlcmUKICAgICAqICAgICA8cmV0cnlfYWZ0ZXI+IGlzIGEgZGVsYXkgaW4gc2Vjb25kcwogICAgICogICAgIDxjYXRlZ29yaWVzPiBpcyB0aGUgZXZlbnQgdHlwZShzKSAoZXJyb3IsIHRyYW5zYWN0aW9uLCBldGMpIGJlaW5nIHJhdGUgbGltaXRlZCBhbmQgaXMgb2YgdGhlIGZvcm0KICAgICAqICAgICAgICAgPGNhdGVnb3J5Pjs8Y2F0ZWdvcnk+Oy4uLgogICAgICogICAgIDxzY29wZT4gaXMgd2hhdCdzIGJlaW5nIGxpbWl0ZWQgKG9yZywgcHJvamVjdCwgb3Iga2V5KSAtIGlnbm9yZWQgYnkgU0RLCiAgICAgKiAgICAgPHJlYXNvbl9jb2RlPiBpcyBhbiBhcmJpdHJhcnkgc3RyaW5nIGxpa2UgIm9yZ19xdW90YSIgLSBpZ25vcmVkIGJ5IFNESwogICAgICogICAgIDxuYW1lc3BhY2VzPiBTZW1pY29sb24tc2VwYXJhdGVkIGxpc3Qgb2YgbWV0cmljIG5hbWVzcGFjZSBpZGVudGlmaWVycy4gRGVmaW5lcyB3aGljaCBuYW1lc3BhY2Uocykgd2lsbCBiZSBhZmZlY3RlZC4KICAgICAqICAgICAgICAgT25seSBwcmVzZW50IGlmIHJhdGUgbGltaXQgYXBwbGllcyB0byB0aGUgbWV0cmljX2J1Y2tldCBkYXRhIGNhdGVnb3J5LgogICAgICovCiAgICBmb3IgKGNvbnN0IGxpbWl0IG9mIHJhdGVMaW1pdEhlYWRlci50cmltKCkuc3BsaXQoJywnKSkgewogICAgICBjb25zdCBbcmV0cnlBZnRlciwgY2F0ZWdvcmllcywgLCAsIG5hbWVzcGFjZXNdID0gbGltaXQuc3BsaXQoJzonLCA1KTsKICAgICAgY29uc3QgaGVhZGVyRGVsYXkgPSBwYXJzZUludChyZXRyeUFmdGVyLCAxMCk7CiAgICAgIGNvbnN0IGRlbGF5ID0gKCFpc05hTihoZWFkZXJEZWxheSkgPyBoZWFkZXJEZWxheSA6IDYwKSAqIDEwMDA7IC8vIDYwc2VjIGRlZmF1bHQKICAgICAgaWYgKCFjYXRlZ29yaWVzKSB7CiAgICAgICAgdXBkYXRlZFJhdGVMaW1pdHMuYWxsID0gbm93ICsgZGVsYXk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzLnNwbGl0KCc7JykpIHsKICAgICAgICAgIGlmIChjYXRlZ29yeSA9PT0gJ21ldHJpY19idWNrZXQnKSB7CiAgICAgICAgICAgIC8vIG5hbWVzcGFjZXMgd2lsbCBiZSBwcmVzZW50IHdoZW4gY2F0ZWdvcnkgPT09ICdtZXRyaWNfYnVja2V0JwogICAgICAgICAgICBpZiAoIW5hbWVzcGFjZXMgfHwgbmFtZXNwYWNlcy5zcGxpdCgnOycpLmluY2x1ZGVzKCdjdXN0b20nKSkgewogICAgICAgICAgICAgIHVwZGF0ZWRSYXRlTGltaXRzW2NhdGVnb3J5XSA9IG5vdyArIGRlbGF5OwogICAgICAgICAgICB9CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICB1cGRhdGVkUmF0ZUxpbWl0c1tjYXRlZ29yeV0gPSBub3cgKyBkZWxheTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgIH0KICB9IGVsc2UgaWYgKHJldHJ5QWZ0ZXJIZWFkZXIpIHsKICAgIHVwZGF0ZWRSYXRlTGltaXRzLmFsbCA9IG5vdyArIHBhcnNlUmV0cnlBZnRlckhlYWRlcihyZXRyeUFmdGVySGVhZGVyLCBub3cpOwogIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA9PT0gNDI5KSB7CiAgICB1cGRhdGVkUmF0ZUxpbWl0cy5hbGwgPSBub3cgKyA2MCAqIDEwMDA7CiAgfQoKICByZXR1cm4gdXBkYXRlZFJhdGVMaW1pdHM7Cn0KCi8qKgogKiBBIG5vZGUuanMgd2F0Y2hkb2cgdGltZXIKICogQHBhcmFtIHBvbGxJbnRlcnZhbCBUaGUgaW50ZXJ2YWwgdGhhdCB3ZSBleHBlY3QgdG8gZ2V0IHBvbGxlZCBhdAogKiBAcGFyYW0gYW5yVGhyZXNob2xkIFRoZSB0aHJlc2hvbGQgZm9yIHdoZW4gd2UgY29uc2lkZXIgQU5SCiAqIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgdG8gY2FsbCBmb3IgQU5SCiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIGBwb2xsYCBhbmQgYGVuYWJsZWRgIGZ1bmN0aW9ucyB7QGxpbmsgV2F0Y2hkb2dSZXR1cm59CiAqLwpmdW5jdGlvbiB3YXRjaGRvZ1RpbWVyKAogIGNyZWF0ZVRpbWVyLAogIHBvbGxJbnRlcnZhbCwKICBhbnJUaHJlc2hvbGQsCiAgY2FsbGJhY2ssCikgewogIGNvbnN0IHRpbWVyID0gY3JlYXRlVGltZXIoKTsKICBsZXQgdHJpZ2dlcmVkID0gZmFsc2U7CiAgbGV0IGVuYWJsZWQgPSB0cnVlOwoKICBzZXRJbnRlcnZhbCgoKSA9PiB7CiAgICBjb25zdCBkaWZmTXMgPSB0aW1lci5nZXRUaW1lTXMoKTsKCiAgICBpZiAodHJpZ2dlcmVkID09PSBmYWxzZSAmJiBkaWZmTXMgPiBwb2xsSW50ZXJ2YWwgKyBhbnJUaHJlc2hvbGQpIHsKICAgICAgdHJpZ2dlcmVkID0gdHJ1ZTsKICAgICAgaWYgKGVuYWJsZWQpIHsKICAgICAgICBjYWxsYmFjaygpOwogICAgICB9CiAgICB9CgogICAgaWYgKGRpZmZNcyA8IHBvbGxJbnRlcnZhbCArIGFuclRocmVzaG9sZCkgewogICAgICB0cmlnZ2VyZWQgPSBmYWxzZTsKICAgIH0KICB9LCAyMCk7CgogIHJldHVybiB7CiAgICBwb2xsOiAoKSA9PiB7CiAgICAgIHRpbWVyLnJlc2V0KCk7CiAgICB9LAogICAgZW5hYmxlZDogKHN0YXRlKSA9PiB7CiAgICAgIGVuYWJsZWQgPSBzdGF0ZTsKICAgIH0sCiAgfTsKfQoKLy8gdHlwZXMgY29waWVkIGZyb20gaW5zcGVjdG9yLmQudHMKCi8qKgogKiBDb252ZXJ0cyBEZWJ1Z2dlci5DYWxsRnJhbWUgdG8gU2VudHJ5IFN0YWNrRnJhbWUKICovCmZ1bmN0aW9uIGNhbGxGcmFtZVRvU3RhY2tGcmFtZSgKICBmcmFtZSwKICB1cmwsCiAgZ2V0TW9kdWxlRnJvbUZpbGVuYW1lLAopIHsKICBjb25zdCBmaWxlbmFtZSA9IHVybCA/IHVybC5yZXBsYWNlKC9eZmlsZTpcL1wvLywgJycpIDogdW5kZWZpbmVkOwoKICAvLyBDYWxsRnJhbWUgcm93L2NvbCBhcmUgMCBiYXNlZCwgd2hlcmVhcyBTdGFja0ZyYW1lIGFyZSAxIGJhc2VkCiAgY29uc3QgY29sbm8gPSBmcmFtZS5sb2NhdGlvbi5jb2x1bW5OdW1iZXIgPyBmcmFtZS5sb2NhdGlvbi5jb2x1bW5OdW1iZXIgKyAxIDogdW5kZWZpbmVkOwogIGNvbnN0IGxpbmVubyA9IGZyYW1lLmxvY2F0aW9uLmxpbmVOdW1iZXIgPyBmcmFtZS5sb2NhdGlvbi5saW5lTnVtYmVyICsgMSA6IHVuZGVmaW5lZDsKCiAgcmV0dXJuIGRyb3BVbmRlZmluZWRLZXlzKHsKICAgIGZpbGVuYW1lLAogICAgbW9kdWxlOiBnZXRNb2R1bGVGcm9tRmlsZW5hbWUoZmlsZW5hbWUpLAogICAgZnVuY3Rpb246IGZyYW1lLmZ1bmN0aW9uTmFtZSB8fCAnPycsCiAgICBjb2xubywKICAgIGxpbmVubywKICAgIGluX2FwcDogZmlsZW5hbWUgPyBmaWxlbmFtZUlzSW5BcHAoZmlsZW5hbWUpIDogdW5kZWZpbmVkLAogIH0pOwp9CgovKioKICogVGhpcyBzZXJ2ZXMgYXMgYSBidWlsZCB0aW1lIGZsYWcgdGhhdCB3aWxsIGJlIHRydWUgYnkgZGVmYXVsdCwgYnV0IGZhbHNlIGluIG5vbi1kZWJ1ZyBidWlsZHMgb3IgaWYgdXNlcnMgcmVwbGFjZSBgX19TRU5UUllfREVCVUdfX2AgaW4gdGhlaXIgZ2VuZXJhdGVkIGNvZGUuCiAqCiAqIEFUVEVOVElPTjogVGhpcyBjb25zdGFudCBtdXN0IG5ldmVyIGNyb3NzIHBhY2thZ2UgYm91bmRhcmllcyAoaS5lLiBiZSBleHBvcnRlZCkgdG8gZ3VhcmFudGVlIHRoYXQgaXQgY2FuIGJlIHVzZWQgZm9yIHRyZWUgc2hha2luZy4KICovCmNvbnN0IERFQlVHX0JVSUxEID0gKHR5cGVvZiBfX1NFTlRSWV9ERUJVR19fID09PSAndW5kZWZpbmVkJyB8fCBfX1NFTlRSWV9ERUJVR19fKTsKCmNvbnN0IERFRkFVTFRfRU5WSVJPTk1FTlQgPSAncHJvZHVjdGlvbic7CgovKioKICogUmV0dXJucyB0aGUgZ2xvYmFsIGV2ZW50IHByb2Nlc3NvcnMuCiAqIEBkZXByZWNhdGVkIEdsb2JhbCBldmVudCBwcm9jZXNzb3JzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4KICovCmZ1bmN0aW9uIGdldEdsb2JhbEV2ZW50UHJvY2Vzc29ycygpIHsKICByZXR1cm4gZ2V0R2xvYmFsU2luZ2xldG9uKCdnbG9iYWxFdmVudFByb2Nlc3NvcnMnLCAoKSA9PiBbXSk7Cn0KCi8qKgogKiBQcm9jZXNzIGFuIGFycmF5IG9mIGV2ZW50IHByb2Nlc3NvcnMsIHJldHVybmluZyB0aGUgcHJvY2Vzc2VkIGV2ZW50IChvciBgbnVsbGAgaWYgdGhlIGV2ZW50IHdhcyBkcm9wcGVkKS4KICovCmZ1bmN0aW9uIG5vdGlmeUV2ZW50UHJvY2Vzc29ycygKICBwcm9jZXNzb3JzLAogIGV2ZW50LAogIGhpbnQsCiAgaW5kZXggPSAwLAopIHsKICByZXR1cm4gbmV3IFN5bmNQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsKICAgIGNvbnN0IHByb2Nlc3NvciA9IHByb2Nlc3NvcnNbaW5kZXhdOwogICAgaWYgKGV2ZW50ID09PSBudWxsIHx8IHR5cGVvZiBwcm9jZXNzb3IgIT09ICdmdW5jdGlvbicpIHsKICAgICAgcmVzb2x2ZShldmVudCk7CiAgICB9IGVsc2UgewogICAgICBjb25zdCByZXN1bHQgPSBwcm9jZXNzb3IoeyAuLi5ldmVudCB9LCBoaW50KSA7CgogICAgICBERUJVR19CVUlMRCAmJiBwcm9jZXNzb3IuaWQgJiYgcmVzdWx0ID09PSBudWxsICYmIGxvZ2dlci5sb2coYEV2ZW50IHByb2Nlc3NvciAiJHtwcm9jZXNzb3IuaWR9IiBkcm9wcGVkIGV2ZW50YCk7CgogICAgICBpZiAoaXNUaGVuYWJsZShyZXN1bHQpKSB7CiAgICAgICAgdm9pZCByZXN1bHQKICAgICAgICAgIC50aGVuKGZpbmFsID0+IG5vdGlmeUV2ZW50UHJvY2Vzc29ycyhwcm9jZXNzb3JzLCBmaW5hbCwgaGludCwgaW5kZXggKyAxKS50aGVuKHJlc29sdmUpKQogICAgICAgICAgLnRoZW4obnVsbCwgcmVqZWN0KTsKICAgICAgfSBlbHNlIHsKICAgICAgICB2b2lkIG5vdGlmeUV2ZW50UHJvY2Vzc29ycyhwcm9jZXNzb3JzLCByZXN1bHQsIGhpbnQsIGluZGV4ICsgMSkKICAgICAgICAgIC50aGVuKHJlc29sdmUpCiAgICAgICAgICAudGhlbihudWxsLCByZWplY3QpOwogICAgICB9CiAgICB9CiAgfSk7Cn0KCi8qKgogKiBDcmVhdGVzIGEgbmV3IGBTZXNzaW9uYCBvYmplY3QgYnkgc2V0dGluZyBjZXJ0YWluIGRlZmF1bHQgcGFyYW1ldGVycy4gSWYgb3B0aW9uYWwgQHBhcmFtIGNvbnRleHQKICogaXMgcGFzc2VkLCB0aGUgcGFzc2VkIHByb3BlcnRpZXMgYXJlIGFwcGxpZWQgdG8gdGhlIHNlc3Npb24gb2JqZWN0LgogKgogKiBAcGFyYW0gY29udGV4dCAob3B0aW9uYWwpIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBiZSBhcHBsaWVkIHRvIHRoZSByZXR1cm5lZCBzZXNzaW9uIG9iamVjdAogKgogKiBAcmV0dXJucyBhIG5ldyBgU2Vzc2lvbmAgb2JqZWN0CiAqLwpmdW5jdGlvbiBtYWtlU2Vzc2lvbihjb250ZXh0KSB7CiAgLy8gQm90aCB0aW1lc3RhbXAgYW5kIHN0YXJ0ZWQgYXJlIGluIHNlY29uZHMgc2luY2UgdGhlIFVOSVggZXBvY2guCiAgY29uc3Qgc3RhcnRpbmdUaW1lID0gdGltZXN0YW1wSW5TZWNvbmRzKCk7CgogIGNvbnN0IHNlc3Npb24gPSB7CiAgICBzaWQ6IHV1aWQ0KCksCiAgICBpbml0OiB0cnVlLAogICAgdGltZXN0YW1wOiBzdGFydGluZ1RpbWUsCiAgICBzdGFydGVkOiBzdGFydGluZ1RpbWUsCiAgICBkdXJhdGlvbjogMCwKICAgIHN0YXR1czogJ29rJywKICAgIGVycm9yczogMCwKICAgIGlnbm9yZUR1cmF0aW9uOiBmYWxzZSwKICAgIHRvSlNPTjogKCkgPT4gc2Vzc2lvblRvSlNPTihzZXNzaW9uKSwKICB9OwoKICBpZiAoY29udGV4dCkgewogICAgdXBkYXRlU2Vzc2lvbihzZXNzaW9uLCBjb250ZXh0KTsKICB9CgogIHJldHVybiBzZXNzaW9uOwp9CgovKioKICogVXBkYXRlcyBhIHNlc3Npb24gb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcGFzc2VkIGluIHRoZSBjb250ZXh0LgogKgogKiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBtdXRhdGVzIHRoZSBwYXNzZWQgb2JqZWN0IGFuZCByZXR1cm5zIHZvaWQuCiAqIChIYWQgdG8gZG8gdGhpcyBpbnN0ZWFkIG9mIHJldHVybmluZyBhIG5ldyBhbmQgdXBkYXRlZCBzZXNzaW9uIGJlY2F1c2UgY2xvc2luZyBhbmQgc2VuZGluZyBhIHNlc3Npb24KICogbWFrZXMgYW4gdXBkYXRlIHRvIHRoZSBzZXNzaW9uIGFmdGVyIGl0IHdhcyBwYXNzZWQgdG8gdGhlIHNlbmRpbmcgbG9naWMuCiAqIEBzZWUgQmFzZUNsaWVudC5jYXB0dXJlU2Vzc2lvbiApCiAqCiAqIEBwYXJhbSBzZXNzaW9uIHRoZSBgU2Vzc2lvbmAgdG8gdXBkYXRlCiAqIEBwYXJhbSBjb250ZXh0IHRoZSBgU2Vzc2lvbkNvbnRleHRgIGhvbGRpbmcgdGhlIHByb3BlcnRpZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBpbiBAcGFyYW0gc2Vzc2lvbgogKi8KLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHkKZnVuY3Rpb24gdXBkYXRlU2Vzc2lvbihzZXNzaW9uLCBjb250ZXh0ID0ge30pIHsKICBpZiAoY29udGV4dC51c2VyKSB7CiAgICBpZiAoIXNlc3Npb24uaXBBZGRyZXNzICYmIGNvbnRleHQudXNlci5pcF9hZGRyZXNzKSB7CiAgICAgIHNlc3Npb24uaXBBZGRyZXNzID0gY29udGV4dC51c2VyLmlwX2FkZHJlc3M7CiAgICB9CgogICAgaWYgKCFzZXNzaW9uLmRpZCAmJiAhY29udGV4dC5kaWQpIHsKICAgICAgc2Vzc2lvbi5kaWQgPSBjb250ZXh0LnVzZXIuaWQgfHwgY29udGV4dC51c2VyLmVtYWlsIHx8IGNvbnRleHQudXNlci51c2VybmFtZTsKICAgIH0KICB9CgogIHNlc3Npb24udGltZXN0YW1wID0gY29udGV4dC50aW1lc3RhbXAgfHwgdGltZXN0YW1wSW5TZWNvbmRzKCk7CgogIGlmIChjb250ZXh0LmFibm9ybWFsX21lY2hhbmlzbSkgewogICAgc2Vzc2lvbi5hYm5vcm1hbF9tZWNoYW5pc20gPSBjb250ZXh0LmFibm9ybWFsX21lY2hhbmlzbTsKICB9CgogIGlmIChjb250ZXh0Lmlnbm9yZUR1cmF0aW9uKSB7CiAgICBzZXNzaW9uLmlnbm9yZUR1cmF0aW9uID0gY29udGV4dC5pZ25vcmVEdXJhdGlvbjsKICB9CiAgaWYgKGNvbnRleHQuc2lkKSB7CiAgICAvLyBHb29kIGVub3VnaCB1dWlkIHZhbGlkYXRpb24uIOKAlCBLYW1pbAogICAgc2Vzc2lvbi5zaWQgPSBjb250ZXh0LnNpZC5sZW5ndGggPT09IDMyID8gY29udGV4dC5zaWQgOiB1dWlkNCgpOwogIH0KICBpZiAoY29udGV4dC5pbml0ICE9PSB1bmRlZmluZWQpIHsKICAgIHNlc3Npb24uaW5pdCA9IGNvbnRleHQuaW5pdDsKICB9CiAgaWYgKCFzZXNzaW9uLmRpZCAmJiBjb250ZXh0LmRpZCkgewogICAgc2Vzc2lvbi5kaWQgPSBgJHtjb250ZXh0LmRpZH1gOwogIH0KICBpZiAodHlwZW9mIGNvbnRleHQuc3RhcnRlZCA9PT0gJ251bWJlcicpIHsKICAgIHNlc3Npb24uc3RhcnRlZCA9IGNvbnRleHQuc3RhcnRlZDsKICB9CiAgaWYgKHNlc3Npb24uaWdub3JlRHVyYXRpb24pIHsKICAgIHNlc3Npb24uZHVyYXRpb24gPSB1bmRlZmluZWQ7CiAgfSBlbHNlIGlmICh0eXBlb2YgY29udGV4dC5kdXJhdGlvbiA9PT0gJ251bWJlcicpIHsKICAgIHNlc3Npb24uZHVyYXRpb24gPSBjb250ZXh0LmR1cmF0aW9uOwogIH0gZWxzZSB7CiAgICBjb25zdCBkdXJhdGlvbiA9IHNlc3Npb24udGltZXN0YW1wIC0gc2Vzc2lvbi5zdGFydGVkOwogICAgc2Vzc2lvbi5kdXJhdGlvbiA9IGR1cmF0aW9uID49IDAgPyBkdXJhdGlvbiA6IDA7CiAgfQogIGlmIChjb250ZXh0LnJlbGVhc2UpIHsKICAgIHNlc3Npb24ucmVsZWFzZSA9IGNvbnRleHQucmVsZWFzZTsKICB9CiAgaWYgKGNvbnRleHQuZW52aXJvbm1lbnQpIHsKICAgIHNlc3Npb24uZW52aXJvbm1lbnQgPSBjb250ZXh0LmVudmlyb25tZW50OwogIH0KICBpZiAoIXNlc3Npb24uaXBBZGRyZXNzICYmIGNvbnRleHQuaXBBZGRyZXNzKSB7CiAgICBzZXNzaW9uLmlwQWRkcmVzcyA9IGNvbnRleHQuaXBBZGRyZXNzOwogIH0KICBpZiAoIXNlc3Npb24udXNlckFnZW50ICYmIGNvbnRleHQudXNlckFnZW50KSB7CiAgICBzZXNzaW9uLnVzZXJBZ2VudCA9IGNvbnRleHQudXNlckFnZW50OwogIH0KICBpZiAodHlwZW9mIGNvbnRleHQuZXJyb3JzID09PSAnbnVtYmVyJykgewogICAgc2Vzc2lvbi5lcnJvcnMgPSBjb250ZXh0LmVycm9yczsKICB9CiAgaWYgKGNvbnRleHQuc3RhdHVzKSB7CiAgICBzZXNzaW9uLnN0YXR1cyA9IGNvbnRleHQuc3RhdHVzOwogIH0KfQoKLyoqCiAqIENsb3NlcyBhIHNlc3Npb24gYnkgc2V0dGluZyBpdHMgc3RhdHVzIGFuZCB1cGRhdGluZyB0aGUgc2Vzc2lvbiBvYmplY3Qgd2l0aCBpdC4KICogSW50ZXJuYWxseSBjYWxscyBgdXBkYXRlU2Vzc2lvbmAgdG8gdXBkYXRlIHRoZSBwYXNzZWQgc2Vzc2lvbiBvYmplY3QuCiAqCiAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIG11dGF0ZXMgdGhlIHBhc3NlZCBzZXNzaW9uIChAc2VlIHVwZGF0ZVNlc3Npb24gZm9yIGV4cGxhbmF0aW9uKS4KICoKICogQHBhcmFtIHNlc3Npb24gdGhlIGBTZXNzaW9uYCBvYmplY3QgdG8gYmUgY2xvc2VkCiAqIEBwYXJhbSBzdGF0dXMgdGhlIGBTZXNzaW9uU3RhdHVzYCB3aXRoIHdoaWNoIHRoZSBzZXNzaW9uIHdhcyBjbG9zZWQuIElmIHlvdSBkb24ndCBwYXNzIGEgc3RhdHVzLAogKiAgICAgICAgICAgICAgIHRoaXMgZnVuY3Rpb24gd2lsbCBrZWVwIHRoZSBwcmV2aW91c2x5IHNldCBzdGF0dXMsIHVubGVzcyBpdCB3YXMgYCdvaydgIGluIHdoaWNoIGNhc2UKICogICAgICAgICAgICAgICBpdCBpcyBjaGFuZ2VkIHRvIGAnZXhpdGVkJ2AuCiAqLwpmdW5jdGlvbiBjbG9zZVNlc3Npb24oc2Vzc2lvbiwgc3RhdHVzKSB7CiAgbGV0IGNvbnRleHQgPSB7fTsKICBpZiAoc3RhdHVzKSB7CiAgICBjb250ZXh0ID0geyBzdGF0dXMgfTsKICB9IGVsc2UgaWYgKHNlc3Npb24uc3RhdHVzID09PSAnb2snKSB7CiAgICBjb250ZXh0ID0geyBzdGF0dXM6ICdleGl0ZWQnIH07CiAgfQoKICB1cGRhdGVTZXNzaW9uKHNlc3Npb24sIGNvbnRleHQpOwp9CgovKioKICogU2VyaWFsaXplcyBhIHBhc3NlZCBzZXNzaW9uIG9iamVjdCB0byBhIEpTT04gb2JqZWN0IHdpdGggYSBzbGlnaHRseSBkaWZmZXJlbnQgc3RydWN0dXJlLgogKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHRoZSBTZW50cnkgYmFja2VuZCByZXF1aXJlcyBhIHNsaWdodGx5IGRpZmZlcmVudCBzY2hlbWEgb2YgYSBzZXNzaW9uCiAqIHRoYW4gdGhlIG9uZSB0aGUgSlMgU0RLcyB1c2UgaW50ZXJuYWxseS4KICoKICogQHBhcmFtIHNlc3Npb24gdGhlIHNlc3Npb24gdG8gYmUgY29udmVydGVkCiAqCiAqIEByZXR1cm5zIGEgSlNPTiBvYmplY3Qgb2YgdGhlIHBhc3NlZCBzZXNzaW9uCiAqLwpmdW5jdGlvbiBzZXNzaW9uVG9KU09OKHNlc3Npb24pIHsKICByZXR1cm4gZHJvcFVuZGVmaW5lZEtleXMoewogICAgc2lkOiBgJHtzZXNzaW9uLnNpZH1gLAogICAgaW5pdDogc2Vzc2lvbi5pbml0LAogICAgLy8gTWFrZSBzdXJlIHRoYXQgc2VjIGlzIGNvbnZlcnRlZCB0byBtcyBmb3IgZGF0ZSBjb25zdHJ1Y3RvcgogICAgc3RhcnRlZDogbmV3IERhdGUoc2Vzc2lvbi5zdGFydGVkICogMTAwMCkudG9JU09TdHJpbmcoKSwKICAgIHRpbWVzdGFtcDogbmV3IERhdGUoc2Vzc2lvbi50aW1lc3RhbXAgKiAxMDAwKS50b0lTT1N0cmluZygpLAogICAgc3RhdHVzOiBzZXNzaW9uLnN0YXR1cywKICAgIGVycm9yczogc2Vzc2lvbi5lcnJvcnMsCiAgICBkaWQ6IHR5cGVvZiBzZXNzaW9uLmRpZCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHNlc3Npb24uZGlkID09PSAnc3RyaW5nJyA/IGAke3Nlc3Npb24uZGlkfWAgOiB1bmRlZmluZWQsCiAgICBkdXJhdGlvbjogc2Vzc2lvbi5kdXJhdGlvbiwKICAgIGFibm9ybWFsX21lY2hhbmlzbTogc2Vzc2lvbi5hYm5vcm1hbF9tZWNoYW5pc20sCiAgICBhdHRyczogewogICAgICByZWxlYXNlOiBzZXNzaW9uLnJlbGVhc2UsCiAgICAgIGVudmlyb25tZW50OiBzZXNzaW9uLmVudmlyb25tZW50LAogICAgICBpcF9hZGRyZXNzOiBzZXNzaW9uLmlwQWRkcmVzcywKICAgICAgdXNlcl9hZ2VudDogc2Vzc2lvbi51c2VyQWdlbnQsCiAgICB9LAogIH0pOwp9Cgpjb25zdCBUUkFDRV9GTEFHX1NBTVBMRUQgPSAweDE7CgovKioKICogQ29udmVydCBhIHNwYW4gdG8gYSB0cmFjZSBjb250ZXh0LCB3aGljaCBjYW4gYmUgc2VudCBhcyB0aGUgYHRyYWNlYCBjb250ZXh0IGluIGFuIGV2ZW50LgogKi8KZnVuY3Rpb24gc3BhblRvVHJhY2VDb250ZXh0KHNwYW4pIHsKICBjb25zdCB7IHNwYW5JZDogc3Bhbl9pZCwgdHJhY2VJZDogdHJhY2VfaWQgfSA9IHNwYW4uc3BhbkNvbnRleHQoKTsKICBjb25zdCB7IGRhdGEsIG9wLCBwYXJlbnRfc3Bhbl9pZCwgc3RhdHVzLCB0YWdzLCBvcmlnaW4gfSA9IHNwYW5Ub0pTT04oc3Bhbik7CgogIHJldHVybiBkcm9wVW5kZWZpbmVkS2V5cyh7CiAgICBkYXRhLAogICAgb3AsCiAgICBwYXJlbnRfc3Bhbl9pZCwKICAgIHNwYW5faWQsCiAgICBzdGF0dXMsCiAgICB0YWdzLAogICAgdHJhY2VfaWQsCiAgICBvcmlnaW4sCiAgfSk7Cn0KCi8qKgogKiBDb252ZXJ0IGEgc3BhbiB0byBhIEpTT04gcmVwcmVzZW50YXRpb24uCiAqIE5vdGUgdGhhdCBhbGwgZmllbGRzIHJldHVybmVkIGhlcmUgYXJlIG9wdGlvbmFsIGFuZCBuZWVkIHRvIGJlIGd1YXJkZWQgYWdhaW5zdC4KICoKICogTm90ZTogQmVjYXVzZSBvZiB0aGlzLCB3ZSBjdXJyZW50bHkgaGF2ZSBhIGNpcmN1bGFyIHR5cGUgZGVwZW5kZW5jeSAod2hpY2ggd2Ugb3B0ZWQgb3V0IG9mIGluIHBhY2thZ2UuanNvbikuCiAqIFRoaXMgaXMgbm90IGF2b2lkYWJsZSBhcyB3ZSBuZWVkIGBzcGFuVG9KU09OYCBpbiBgc3BhblV0aWxzLnRzYCwgd2hpY2ggaW4gdHVybiBpcyBuZWVkZWQgYnkgYHNwYW4udHNgIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4KICogQW5kIGBzcGFuVG9KU09OYCBuZWVkcyB0aGUgU3BhbiBjbGFzcyBmcm9tIGBzcGFuLnRzYCB0byBjaGVjayBoZXJlLgogKiBUT0RPIHY4OiBXaGVuIHdlIHJlbW92ZSB0aGUgZGVwcmVjYXRlZCBzdHVmZiBmcm9tIGBzcGFuLnRzYCwgd2UgY2FuIHJlbW92ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeSBhZ2Fpbi4KICovCmZ1bmN0aW9uIHNwYW5Ub0pTT04oc3BhbikgewogIGlmIChzcGFuSXNTcGFuQ2xhc3Moc3BhbikpIHsKICAgIHJldHVybiBzcGFuLmdldFNwYW5KU09OKCk7CiAgfQoKICAvLyBGYWxsYmFjazogV2UgYWxzbyBjaGVjayBmb3IgYC50b0pTT04oKWAgaGVyZS4uLgogIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogIGlmICh0eXBlb2Ygc3Bhbi50b0pTT04gPT09ICdmdW5jdGlvbicpIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgcmV0dXJuIHNwYW4udG9KU09OKCk7CiAgfQoKICByZXR1cm4ge307Cn0KCi8qKgogKiBTYWRseSwgZHVlIHRvIGNpcmN1bGFyIGRlcGVuZGVuY3kgY2hlY2tzIHdlIGNhbm5vdCBhY3R1YWxseSBpbXBvcnQgdGhlIFNwYW4gY2xhc3MgaGVyZSBhbmQgY2hlY2sgZm9yIGluc3RhbmNlb2YuCiAqIDooIFNvIGluc3RlYWQgd2UgYXBwcm94aW1hdGUgdGhpcyBieSBjaGVja2luZyBpZiBpdCBoYXMgdGhlIGBnZXRTcGFuSlNPTmAgbWV0aG9kLgogKi8KZnVuY3Rpb24gc3BhbklzU3BhbkNsYXNzKHNwYW4pIHsKICByZXR1cm4gdHlwZW9mIChzcGFuICkuZ2V0U3BhbkpTT04gPT09ICdmdW5jdGlvbic7Cn0KCi8qKgogKiBSZXR1cm5zIHRydWUgaWYgYSBzcGFuIGlzIHNhbXBsZWQuCiAqIEluIG1vc3QgY2FzZXMsIHlvdSBzaG91bGQganVzdCB1c2UgYHNwYW4uaXNSZWNvcmRpbmcoKWAgaW5zdGVhZC4KICogSG93ZXZlciwgdGhpcyBoYXMgYSBzbGlnaHRseSBkaWZmZXJlbnQgc2VtYW50aWMsIGFzIGl0IGFsc28gcmV0dXJucyBmYWxzZSBpZiB0aGUgc3BhbiBpcyBmaW5pc2hlZC4KICogU28gaW4gdGhlIGNhc2Ugd2hlcmUgdGhpcyBkaXN0aW5jdGlvbiBpcyBpbXBvcnRhbnQsIHVzZSB0aGlzIG1ldGhvZC4KICovCmZ1bmN0aW9uIHNwYW5Jc1NhbXBsZWQoc3BhbikgewogIC8vIFdlIGFsaWduIG91ciB0cmFjZSBmbGFncyB3aXRoIHRoZSBvbmVzIE9wZW5UZWxlbWV0cnkgdXNlCiAgLy8gU28gd2UgYWxzbyBjaGVjayBmb3Igc2FtcGxlZCB0aGUgc2FtZSB3YXkgdGhleSBkby4KICBjb25zdCB7IHRyYWNlRmxhZ3MgfSA9IHNwYW4uc3BhbkNvbnRleHQoKTsKICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZQogIHJldHVybiBCb29sZWFuKHRyYWNlRmxhZ3MgJiBUUkFDRV9GTEFHX1NBTVBMRUQpOwp9CgovKioKICogR2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIGNsaWVudC4KICovCmZ1bmN0aW9uIGdldENsaWVudCgpIHsKICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICByZXR1cm4gZ2V0Q3VycmVudEh1YigpLmdldENsaWVudCgpOwp9CgovKioKICogR2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIHNjb3BlLgogKi8KZnVuY3Rpb24gZ2V0Q3VycmVudFNjb3BlKCkgewogIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogIHJldHVybiBnZXRDdXJyZW50SHViKCkuZ2V0U2NvcGUoKTsKfQoKLyoqCiAqIFJldHVybnMgdGhlIHJvb3Qgc3BhbiBvZiBhIGdpdmVuIHNwYW4uCiAqCiAqIEFzIGxvbmcgYXMgd2UgdXNlIGBUcmFuc2FjdGlvbmBzIGludGVybmFsbHksIHRoZSByZXR1cm5lZCByb290IHNwYW4KICogd2lsbCBiZSBhIGBUcmFuc2FjdGlvbmAgYnV0IGJlIGF3YXJlIHRoYXQgdGhpcyBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS4KICoKICogSWYgdGhlIGdpdmVuIHNwYW4gaGFzIG5vIHJvb3Qgc3BhbiBvciB0cmFuc2FjdGlvbiwgYHVuZGVmaW5lZGAgaXMgcmV0dXJuZWQuCiAqLwpmdW5jdGlvbiBnZXRSb290U3BhbihzcGFuKSB7CiAgLy8gVE9ETyAodjgpOiBSZW1vdmUgdGhpcyBjaGVjayBhbmQganVzdCByZXR1cm4gc3BhbgogIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogIHJldHVybiBzcGFuLnRyYW5zYWN0aW9uOwp9CgovKioKICogQ3JlYXRlcyBhIGR5bmFtaWMgc2FtcGxpbmcgY29udGV4dCBmcm9tIGEgY2xpZW50LgogKgogKiBEaXNwYXRjaGVzIHRoZSBgY3JlYXRlRHNjYCBsaWZlY3ljbGUgaG9vayBhcyBhIHNpZGUgZWZmZWN0LgogKi8KZnVuY3Rpb24gZ2V0RHluYW1pY1NhbXBsaW5nQ29udGV4dEZyb21DbGllbnQoCiAgdHJhY2VfaWQsCiAgY2xpZW50LAogIHNjb3BlLAopIHsKICBjb25zdCBvcHRpb25zID0gY2xpZW50LmdldE9wdGlvbnMoKTsKCiAgY29uc3QgeyBwdWJsaWNLZXk6IHB1YmxpY19rZXkgfSA9IGNsaWVudC5nZXREc24oKSB8fCB7fTsKICAvLyBUT0RPKHY4KTogUmVtb3ZlIHNlZ21lbnQgZnJvbSBVc2VyCiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgY29uc3QgeyBzZWdtZW50OiB1c2VyX3NlZ21lbnQgfSA9IChzY29wZSAmJiBzY29wZS5nZXRVc2VyKCkpIHx8IHt9OwoKICBjb25zdCBkc2MgPSBkcm9wVW5kZWZpbmVkS2V5cyh7CiAgICBlbnZpcm9ubWVudDogb3B0aW9ucy5lbnZpcm9ubWVudCB8fCBERUZBVUxUX0VOVklST05NRU5ULAogICAgcmVsZWFzZTogb3B0aW9ucy5yZWxlYXNlLAogICAgdXNlcl9zZWdtZW50LAogICAgcHVibGljX2tleSwKICAgIHRyYWNlX2lkLAogIH0pIDsKCiAgY2xpZW50LmVtaXQgJiYgY2xpZW50LmVtaXQoJ2NyZWF0ZURzYycsIGRzYyk7CgogIHJldHVybiBkc2M7Cn0KCi8qKgogKiBBIFNwYW4gd2l0aCBhIGZyb3plbiBkeW5hbWljIHNhbXBsaW5nIGNvbnRleHQuCiAqLwoKLyoqCiAqIENyZWF0ZXMgYSBkeW5hbWljIHNhbXBsaW5nIGNvbnRleHQgZnJvbSBhIHNwYW4gKGFuZCBjbGllbnQgYW5kIHNjb3BlKQogKgogKiBAcGFyYW0gc3BhbiB0aGUgc3BhbiBmcm9tIHdoaWNoIGEgZmV3IHZhbHVlcyBsaWtlIHRoZSByb290IHNwYW4gbmFtZSBhbmQgc2FtcGxlIHJhdGUgYXJlIGV4dHJhY3RlZC4KICoKICogQHJldHVybnMgYSBkeW5hbWljIHNhbXBsaW5nIGNvbnRleHQKICovCmZ1bmN0aW9uIGdldER5bmFtaWNTYW1wbGluZ0NvbnRleHRGcm9tU3BhbihzcGFuKSB7CiAgY29uc3QgY2xpZW50ID0gZ2V0Q2xpZW50KCk7CiAgaWYgKCFjbGllbnQpIHsKICAgIHJldHVybiB7fTsKICB9CgogIC8vIHBhc3NpbmcgZW1pdD1mYWxzZSBoZXJlIHRvIG9ubHkgZW1pdCBsYXRlciBvbmNlIHRoZSBEU0MgaXMgYWN0dWFsbHkgcG9wdWxhdGVkCiAgY29uc3QgZHNjID0gZ2V0RHluYW1pY1NhbXBsaW5nQ29udGV4dEZyb21DbGllbnQoc3BhblRvSlNPTihzcGFuKS50cmFjZV9pZCB8fCAnJywgY2xpZW50LCBnZXRDdXJyZW50U2NvcGUoKSk7CgogIC8vIFRPRE8gKHY4KTogUmVtb3ZlIHY3RnJvemVuRHNjIGFzIGEgVHJhbnNhY3Rpb24gd2lsbCBubyBsb25nZXIgaGF2ZSBfZnJvemVuRHluYW1pY1NhbXBsaW5nQ29udGV4dAogIGNvbnN0IHR4biA9IGdldFJvb3RTcGFuKHNwYW4pIDsKICBpZiAoIXR4bikgewogICAgcmV0dXJuIGRzYzsKICB9CgogIC8vIFRPRE8gKHY4KTogUmVtb3ZlIHY3RnJvemVuRHNjIGFzIGEgVHJhbnNhY3Rpb24gd2lsbCBubyBsb25nZXIgaGF2ZSBfZnJvemVuRHluYW1pY1NhbXBsaW5nQ29udGV4dAogIC8vIEZvciBub3cgd2UgbmVlZCB0byBhdm9pZCBicmVha2luZyB1c2VycyB3aG8gZGlyZWN0bHkgY3JlYXRlZCBhIHR4biB3aXRoIGEgRFNDLCB3aGVyZSB0aGlzIGZpZWxkIGlzIHN0aWxsIHNldC4KICAvLyBAc2VlIFRyYW5zYWN0aW9uIGNsYXNzIGNvbnN0cnVjdG9yCiAgY29uc3QgdjdGcm96ZW5Ec2MgPSB0eG4gJiYgdHhuLl9mcm96ZW5EeW5hbWljU2FtcGxpbmdDb250ZXh0OwogIGlmICh2N0Zyb3plbkRzYykgewogICAgcmV0dXJuIHY3RnJvemVuRHNjOwogIH0KCiAgLy8gVE9ETyAodjgpOiBSZXBsYWNlIHR4bi5tZXRhZGF0YSB3aXRoIHR4bi5hdHRyaWJ1dGVzW10KICAvLyBXZSBjYW4ndCBkbyB0aGlzIHlldCBiZWNhdXNlIGF0dHJpYnV0ZXMgYXJlbid0IGFsd2F5cyBzZXQgeWV0LgogIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogIGNvbnN0IHsgc2FtcGxlUmF0ZTogbWF5YmVTYW1wbGVSYXRlLCBzb3VyY2UgfSA9IHR4bi5tZXRhZGF0YTsKICBpZiAobWF5YmVTYW1wbGVSYXRlICE9IG51bGwpIHsKICAgIGRzYy5zYW1wbGVfcmF0ZSA9IGAke21heWJlU2FtcGxlUmF0ZX1gOwogIH0KCiAgLy8gV2UgZG9uJ3Qgd2FudCB0byBoYXZlIGEgdHJhbnNhY3Rpb24gbmFtZSBpbiB0aGUgRFNDIGlmIHRoZSBzb3VyY2UgaXMgInVybCIgYmVjYXVzZSBVUkxzIG1pZ2h0IGNvbnRhaW4gUElJCiAgY29uc3QganNvblNwYW4gPSBzcGFuVG9KU09OKHR4bik7CgogIC8vIGFmdGVyIEpTT04gY29udmVyc2lvbiwgdHhuLm5hbWUgYmVjb21lcyBqc29uU3Bhbi5kZXNjcmlwdGlvbgogIGlmIChzb3VyY2UgJiYgc291cmNlICE9PSAndXJsJykgewogICAgZHNjLnRyYW5zYWN0aW9uID0ganNvblNwYW4uZGVzY3JpcHRpb247CiAgfQoKICBkc2Muc2FtcGxlZCA9IFN0cmluZyhzcGFuSXNTYW1wbGVkKHR4bikpOwoKICBjbGllbnQuZW1pdCAmJiBjbGllbnQuZW1pdCgnY3JlYXRlRHNjJywgZHNjKTsKCiAgcmV0dXJuIGRzYzsKfQoKLyoqCiAqIEFwcGxpZXMgZGF0YSBmcm9tIHRoZSBzY29wZSB0byB0aGUgZXZlbnQgYW5kIHJ1bnMgYWxsIGV2ZW50IHByb2Nlc3NvcnMgb24gaXQuCiAqLwpmdW5jdGlvbiBhcHBseVNjb3BlRGF0YVRvRXZlbnQoZXZlbnQsIGRhdGEpIHsKICBjb25zdCB7IGZpbmdlcnByaW50LCBzcGFuLCBicmVhZGNydW1icywgc2RrUHJvY2Vzc2luZ01ldGFkYXRhIH0gPSBkYXRhOwoKICAvLyBBcHBseSBnZW5lcmFsIGRhdGEKICBhcHBseURhdGFUb0V2ZW50KGV2ZW50LCBkYXRhKTsKCiAgLy8gV2Ugd2FudCB0byBzZXQgdGhlIHRyYWNlIGNvbnRleHQgZm9yIG5vcm1hbCBldmVudHMgb25seSBpZiB0aGVyZSBpc24ndCBhbHJlYWR5CiAgLy8gYSB0cmFjZSBjb250ZXh0IG9uIHRoZSBldmVudC4gVGhlcmUgaXMgYSBwcm9kdWN0IGZlYXR1cmUgaW4gcGxhY2Ugd2hlcmUgd2UgbGluawogIC8vIGVycm9ycyB3aXRoIHRyYW5zYWN0aW9uIGFuZCBpdCByZWxpZXMgb24gdGhhdC4KICBpZiAoc3BhbikgewogICAgYXBwbHlTcGFuVG9FdmVudChldmVudCwgc3Bhbik7CiAgfQoKICBhcHBseUZpbmdlcnByaW50VG9FdmVudChldmVudCwgZmluZ2VycHJpbnQpOwogIGFwcGx5QnJlYWRjcnVtYnNUb0V2ZW50KGV2ZW50LCBicmVhZGNydW1icyk7CiAgYXBwbHlTZGtNZXRhZGF0YVRvRXZlbnQoZXZlbnQsIHNka1Byb2Nlc3NpbmdNZXRhZGF0YSk7Cn0KCmZ1bmN0aW9uIGFwcGx5RGF0YVRvRXZlbnQoZXZlbnQsIGRhdGEpIHsKICBjb25zdCB7CiAgICBleHRyYSwKICAgIHRhZ3MsCiAgICB1c2VyLAogICAgY29udGV4dHMsCiAgICBsZXZlbCwKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdHJhbnNhY3Rpb25OYW1lLAogIH0gPSBkYXRhOwoKICBjb25zdCBjbGVhbmVkRXh0cmEgPSBkcm9wVW5kZWZpbmVkS2V5cyhleHRyYSk7CiAgaWYgKGNsZWFuZWRFeHRyYSAmJiBPYmplY3Qua2V5cyhjbGVhbmVkRXh0cmEpLmxlbmd0aCkgewogICAgZXZlbnQuZXh0cmEgPSB7IC4uLmNsZWFuZWRFeHRyYSwgLi4uZXZlbnQuZXh0cmEgfTsKICB9CgogIGNvbnN0IGNsZWFuZWRUYWdzID0gZHJvcFVuZGVmaW5lZEtleXModGFncyk7CiAgaWYgKGNsZWFuZWRUYWdzICYmIE9iamVjdC5rZXlzKGNsZWFuZWRUYWdzKS5sZW5ndGgpIHsKICAgIGV2ZW50LnRhZ3MgPSB7IC4uLmNsZWFuZWRUYWdzLCAuLi5ldmVudC50YWdzIH07CiAgfQoKICBjb25zdCBjbGVhbmVkVXNlciA9IGRyb3BVbmRlZmluZWRLZXlzKHVzZXIpOwogIGlmIChjbGVhbmVkVXNlciAmJiBPYmplY3Qua2V5cyhjbGVhbmVkVXNlcikubGVuZ3RoKSB7CiAgICBldmVudC51c2VyID0geyAuLi5jbGVhbmVkVXNlciwgLi4uZXZlbnQudXNlciB9OwogIH0KCiAgY29uc3QgY2xlYW5lZENvbnRleHRzID0gZHJvcFVuZGVmaW5lZEtleXMoY29udGV4dHMpOwogIGlmIChjbGVhbmVkQ29udGV4dHMgJiYgT2JqZWN0LmtleXMoY2xlYW5lZENvbnRleHRzKS5sZW5ndGgpIHsKICAgIGV2ZW50LmNvbnRleHRzID0geyAuLi5jbGVhbmVkQ29udGV4dHMsIC4uLmV2ZW50LmNvbnRleHRzIH07CiAgfQoKICBpZiAobGV2ZWwpIHsKICAgIGV2ZW50LmxldmVsID0gbGV2ZWw7CiAgfQoKICBpZiAodHJhbnNhY3Rpb25OYW1lKSB7CiAgICBldmVudC50cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uTmFtZTsKICB9Cn0KCmZ1bmN0aW9uIGFwcGx5QnJlYWRjcnVtYnNUb0V2ZW50KGV2ZW50LCBicmVhZGNydW1icykgewogIGNvbnN0IG1lcmdlZEJyZWFkY3J1bWJzID0gWy4uLihldmVudC5icmVhZGNydW1icyB8fCBbXSksIC4uLmJyZWFkY3J1bWJzXTsKICBldmVudC5icmVhZGNydW1icyA9IG1lcmdlZEJyZWFkY3J1bWJzLmxlbmd0aCA/IG1lcmdlZEJyZWFkY3J1bWJzIDogdW5kZWZpbmVkOwp9CgpmdW5jdGlvbiBhcHBseVNka01ldGFkYXRhVG9FdmVudChldmVudCwgc2RrUHJvY2Vzc2luZ01ldGFkYXRhKSB7CiAgZXZlbnQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhID0gewogICAgLi4uZXZlbnQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhLAogICAgLi4uc2RrUHJvY2Vzc2luZ01ldGFkYXRhLAogIH07Cn0KCmZ1bmN0aW9uIGFwcGx5U3BhblRvRXZlbnQoZXZlbnQsIHNwYW4pIHsKICBldmVudC5jb250ZXh0cyA9IHsgdHJhY2U6IHNwYW5Ub1RyYWNlQ29udGV4dChzcGFuKSwgLi4uZXZlbnQuY29udGV4dHMgfTsKICBjb25zdCByb290U3BhbiA9IGdldFJvb3RTcGFuKHNwYW4pOwogIGlmIChyb290U3BhbikgewogICAgZXZlbnQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhID0gewogICAgICBkeW5hbWljU2FtcGxpbmdDb250ZXh0OiBnZXREeW5hbWljU2FtcGxpbmdDb250ZXh0RnJvbVNwYW4oc3BhbiksCiAgICAgIC4uLmV2ZW50LnNka1Byb2Nlc3NpbmdNZXRhZGF0YSwKICAgIH07CiAgICBjb25zdCB0cmFuc2FjdGlvbk5hbWUgPSBzcGFuVG9KU09OKHJvb3RTcGFuKS5kZXNjcmlwdGlvbjsKICAgIGlmICh0cmFuc2FjdGlvbk5hbWUpIHsKICAgICAgZXZlbnQudGFncyA9IHsgdHJhbnNhY3Rpb246IHRyYW5zYWN0aW9uTmFtZSwgLi4uZXZlbnQudGFncyB9OwogICAgfQogIH0KfQoKLyoqCiAqIEFwcGxpZXMgZmluZ2VycHJpbnQgZnJvbSB0aGUgc2NvcGUgdG8gdGhlIGV2ZW50IGlmIHRoZXJlJ3Mgb25lLAogKiB1c2VzIG1lc3NhZ2UgaWYgdGhlcmUncyBvbmUgaW5zdGVhZCBvciBnZXQgcmlkIG9mIGVtcHR5IGZpbmdlcnByaW50CiAqLwpmdW5jdGlvbiBhcHBseUZpbmdlcnByaW50VG9FdmVudChldmVudCwgZmluZ2VycHJpbnQpIHsKICAvLyBNYWtlIHN1cmUgaXQncyBhbiBhcnJheSBmaXJzdCBhbmQgd2UgYWN0dWFsbHkgaGF2ZSBzb21ldGhpbmcgaW4gcGxhY2UKICBldmVudC5maW5nZXJwcmludCA9IGV2ZW50LmZpbmdlcnByaW50ID8gYXJyYXlpZnkoZXZlbnQuZmluZ2VycHJpbnQpIDogW107CgogIC8vIElmIHdlIGhhdmUgc29tZXRoaW5nIG9uIHRoZSBzY29wZSwgdGhlbiBtZXJnZSBpdCB3aXRoIGV2ZW50CiAgaWYgKGZpbmdlcnByaW50KSB7CiAgICBldmVudC5maW5nZXJwcmludCA9IGV2ZW50LmZpbmdlcnByaW50LmNvbmNhdChmaW5nZXJwcmludCk7CiAgfQoKICAvLyBJZiB3ZSBoYXZlIG5vIGRhdGEgYXQgYWxsLCByZW1vdmUgZW1wdHkgYXJyYXkgZGVmYXVsdAogIGlmIChldmVudC5maW5nZXJwcmludCAmJiAhZXZlbnQuZmluZ2VycHJpbnQubGVuZ3RoKSB7CiAgICBkZWxldGUgZXZlbnQuZmluZ2VycHJpbnQ7CiAgfQp9CgovKioKICogRGVmYXVsdCB2YWx1ZSBmb3IgbWF4aW11bSBudW1iZXIgb2YgYnJlYWRjcnVtYnMgYWRkZWQgdG8gYW4gZXZlbnQuCiAqLwpjb25zdCBERUZBVUxUX01BWF9CUkVBRENSVU1CUyA9IDEwMDsKCi8qKgogKiBIb2xkcyBhZGRpdGlvbmFsIGV2ZW50IGluZm9ybWF0aW9uLiB7QGxpbmsgU2NvcGUuYXBwbHlUb0V2ZW50fSB3aWxsIGJlCiAqIGNhbGxlZCBieSB0aGUgY2xpZW50IGJlZm9yZSBhbiBldmVudCB3aWxsIGJlIHNlbnQuCiAqLwpjbGFzcyBTY29wZSAgewogIC8qKiBGbGFnIGlmIG5vdGlmeWluZyBpcyBoYXBwZW5pbmcuICovCgogIC8qKiBDYWxsYmFjayBmb3IgY2xpZW50IHRvIHJlY2VpdmUgc2NvcGUgY2hhbmdlcy4gKi8KCiAgLyoqIENhbGxiYWNrIGxpc3QgdGhhdCB3aWxsIGJlIGNhbGxlZCBhZnRlciB7QGxpbmsgYXBwbHlUb0V2ZW50fS4gKi8KCiAgLyoqIEFycmF5IG9mIGJyZWFkY3J1bWJzLiAqLwoKICAvKiogVXNlciAqLwoKICAvKiogVGFncyAqLwoKICAvKiogRXh0cmEgKi8KCiAgLyoqIENvbnRleHRzICovCgogIC8qKiBBdHRhY2htZW50cyAqLwoKICAvKiogUHJvcGFnYXRpb24gQ29udGV4dCBmb3IgZGlzdHJpYnV0ZWQgdHJhY2luZyAqLwoKICAvKioKICAgKiBBIHBsYWNlIHRvIHN0YXNoIGRhdGEgd2hpY2ggaXMgbmVlZGVkIGF0IHNvbWUgcG9pbnQgaW4gdGhlIFNESydzIGV2ZW50IHByb2Nlc3NpbmcgcGlwZWxpbmUgYnV0IHdoaWNoIHNob3VsZG4ndCBnZXQKICAgKiBzZW50IHRvIFNlbnRyeQogICAqLwoKICAvKiogRmluZ2VycHJpbnQgKi8KCiAgLyoqIFNldmVyaXR5ICovCiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCgogIC8qKgogICAqIFRyYW5zYWN0aW9uIE5hbWUKICAgKi8KCiAgLyoqIFNwYW4gKi8KCiAgLyoqIFNlc3Npb24gKi8KCiAgLyoqIFJlcXVlc3QgTW9kZSBTZXNzaW9uIFN0YXR1cyAqLwoKICAvKiogVGhlIGNsaWVudCBvbiB0aGlzIHNjb3BlICovCgogIC8vIE5PVEU6IEFueSBmaWVsZCB3aGljaCBnZXRzIGFkZGVkIGhlcmUgc2hvdWxkIGdldCBhZGRlZCBub3Qgb25seSB0byB0aGUgY29uc3RydWN0b3IgYnV0IGFsc28gdG8gdGhlIGBjbG9uZWAgbWV0aG9kLgoKICAgY29uc3RydWN0b3IoKSB7CiAgICB0aGlzLl9ub3RpZnlpbmdMaXN0ZW5lcnMgPSBmYWxzZTsKICAgIHRoaXMuX3Njb3BlTGlzdGVuZXJzID0gW107CiAgICB0aGlzLl9ldmVudFByb2Nlc3NvcnMgPSBbXTsKICAgIHRoaXMuX2JyZWFkY3J1bWJzID0gW107CiAgICB0aGlzLl9hdHRhY2htZW50cyA9IFtdOwogICAgdGhpcy5fdXNlciA9IHt9OwogICAgdGhpcy5fdGFncyA9IHt9OwogICAgdGhpcy5fZXh0cmEgPSB7fTsKICAgIHRoaXMuX2NvbnRleHRzID0ge307CiAgICB0aGlzLl9zZGtQcm9jZXNzaW5nTWV0YWRhdGEgPSB7fTsKICAgIHRoaXMuX3Byb3BhZ2F0aW9uQ29udGV4dCA9IGdlbmVyYXRlUHJvcGFnYXRpb25Db250ZXh0KCk7CiAgfQoKICAvKioKICAgKiBJbmhlcml0IHZhbHVlcyBmcm9tIHRoZSBwYXJlbnQgc2NvcGUuCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBzY29wZS5jbG9uZSgpYCBhbmQgYG5ldyBTY29wZSgpYCBpbnN0ZWFkLgogICAqLwogICBzdGF0aWMgY2xvbmUoc2NvcGUpIHsKICAgIHJldHVybiBzY29wZSA/IHNjb3BlLmNsb25lKCkgOiBuZXcgU2NvcGUoKTsKICB9CgogIC8qKgogICAqIENsb25lIHRoaXMgc2NvcGUgaW5zdGFuY2UuCiAgICovCiAgIGNsb25lKCkgewogICAgY29uc3QgbmV3U2NvcGUgPSBuZXcgU2NvcGUoKTsKICAgIG5ld1Njb3BlLl9icmVhZGNydW1icyA9IFsuLi50aGlzLl9icmVhZGNydW1ic107CiAgICBuZXdTY29wZS5fdGFncyA9IHsgLi4udGhpcy5fdGFncyB9OwogICAgbmV3U2NvcGUuX2V4dHJhID0geyAuLi50aGlzLl9leHRyYSB9OwogICAgbmV3U2NvcGUuX2NvbnRleHRzID0geyAuLi50aGlzLl9jb250ZXh0cyB9OwogICAgbmV3U2NvcGUuX3VzZXIgPSB0aGlzLl91c2VyOwogICAgbmV3U2NvcGUuX2xldmVsID0gdGhpcy5fbGV2ZWw7CiAgICBuZXdTY29wZS5fc3BhbiA9IHRoaXMuX3NwYW47CiAgICBuZXdTY29wZS5fc2Vzc2lvbiA9IHRoaXMuX3Nlc3Npb247CiAgICBuZXdTY29wZS5fdHJhbnNhY3Rpb25OYW1lID0gdGhpcy5fdHJhbnNhY3Rpb25OYW1lOwogICAgbmV3U2NvcGUuX2ZpbmdlcnByaW50ID0gdGhpcy5fZmluZ2VycHJpbnQ7CiAgICBuZXdTY29wZS5fZXZlbnRQcm9jZXNzb3JzID0gWy4uLnRoaXMuX2V2ZW50UHJvY2Vzc29yc107CiAgICBuZXdTY29wZS5fcmVxdWVzdFNlc3Npb24gPSB0aGlzLl9yZXF1ZXN0U2Vzc2lvbjsKICAgIG5ld1Njb3BlLl9hdHRhY2htZW50cyA9IFsuLi50aGlzLl9hdHRhY2htZW50c107CiAgICBuZXdTY29wZS5fc2RrUHJvY2Vzc2luZ01ldGFkYXRhID0geyAuLi50aGlzLl9zZGtQcm9jZXNzaW5nTWV0YWRhdGEgfTsKICAgIG5ld1Njb3BlLl9wcm9wYWdhdGlvbkNvbnRleHQgPSB7IC4uLnRoaXMuX3Byb3BhZ2F0aW9uQ29udGV4dCB9OwogICAgbmV3U2NvcGUuX2NsaWVudCA9IHRoaXMuX2NsaWVudDsKCiAgICByZXR1cm4gbmV3U2NvcGU7CiAgfQoKICAvKiogVXBkYXRlIHRoZSBjbGllbnQgb24gdGhlIHNjb3BlLiAqLwogICBzZXRDbGllbnQoY2xpZW50KSB7CiAgICB0aGlzLl9jbGllbnQgPSBjbGllbnQ7CiAgfQoKICAvKioKICAgKiBHZXQgdGhlIGNsaWVudCBhc3NpZ25lZCB0byB0aGlzIHNjb3BlLgogICAqCiAgICogSXQgaXMgZ2VuZXJhbGx5IHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgZ2xvYmFsIGZ1bmN0aW9uIGBTZW50cnkuZ2V0Q2xpZW50KClgIGluc3RlYWQsIHVubGVzcyB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuCiAgICovCiAgIGdldENsaWVudCgpIHsKICAgIHJldHVybiB0aGlzLl9jbGllbnQ7CiAgfQoKICAvKioKICAgKiBBZGQgaW50ZXJuYWwgb24gY2hhbmdlIGxpc3RlbmVyLiBVc2VkIGZvciBzdWIgU0RLcyB0aGF0IG5lZWQgdG8gc3RvcmUgdGhlIHNjb3BlLgogICAqIEBoaWRkZW4KICAgKi8KICAgYWRkU2NvcGVMaXN0ZW5lcihjYWxsYmFjaykgewogICAgdGhpcy5fc2NvcGVMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBhZGRFdmVudFByb2Nlc3NvcihjYWxsYmFjaykgewogICAgdGhpcy5fZXZlbnRQcm9jZXNzb3JzLnB1c2goY2FsbGJhY2spOwogICAgcmV0dXJuIHRoaXM7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRVc2VyKHVzZXIpIHsKICAgIC8vIElmIG51bGwgaXMgcGFzc2VkIHdlIHdhbnQgdG8gdW5zZXQgZXZlcnl0aGluZywgYnV0IHN0aWxsIGRlZmluZSBrZXlzLAogICAgLy8gc28gdGhhdCBsYXRlciBkb3duIGluIHRoZSBwaXBlbGluZSBhbnkgZXhpc3RpbmcgdmFsdWVzIGFyZSBjbGVhcmVkLgogICAgdGhpcy5fdXNlciA9IHVzZXIgfHwgewogICAgICBlbWFpbDogdW5kZWZpbmVkLAogICAgICBpZDogdW5kZWZpbmVkLAogICAgICBpcF9hZGRyZXNzOiB1bmRlZmluZWQsCiAgICAgIHNlZ21lbnQ6IHVuZGVmaW5lZCwKICAgICAgdXNlcm5hbWU6IHVuZGVmaW5lZCwKICAgIH07CgogICAgaWYgKHRoaXMuX3Nlc3Npb24pIHsKICAgICAgdXBkYXRlU2Vzc2lvbih0aGlzLl9zZXNzaW9uLCB7IHVzZXIgfSk7CiAgICB9CgogICAgdGhpcy5fbm90aWZ5U2NvcGVMaXN0ZW5lcnMoKTsKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgZ2V0VXNlcigpIHsKICAgIHJldHVybiB0aGlzLl91c2VyOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgZ2V0UmVxdWVzdFNlc3Npb24oKSB7CiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdFNlc3Npb247CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRSZXF1ZXN0U2Vzc2lvbihyZXF1ZXN0U2Vzc2lvbikgewogICAgdGhpcy5fcmVxdWVzdFNlc3Npb24gPSByZXF1ZXN0U2Vzc2lvbjsKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgc2V0VGFncyh0YWdzKSB7CiAgICB0aGlzLl90YWdzID0gewogICAgICAuLi50aGlzLl90YWdzLAogICAgICAuLi50YWdzLAogICAgfTsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIHNldFRhZyhrZXksIHZhbHVlKSB7CiAgICB0aGlzLl90YWdzID0geyAuLi50aGlzLl90YWdzLCBba2V5XTogdmFsdWUgfTsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIHNldEV4dHJhcyhleHRyYXMpIHsKICAgIHRoaXMuX2V4dHJhID0gewogICAgICAuLi50aGlzLl9leHRyYSwKICAgICAgLi4uZXh0cmFzLAogICAgfTsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIHNldEV4dHJhKGtleSwgZXh0cmEpIHsKICAgIHRoaXMuX2V4dHJhID0geyAuLi50aGlzLl9leHRyYSwgW2tleV06IGV4dHJhIH07CiAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpOwogICAgcmV0dXJuIHRoaXM7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRGaW5nZXJwcmludChmaW5nZXJwcmludCkgewogICAgdGhpcy5fZmluZ2VycHJpbnQgPSBmaW5nZXJwcmludDsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIHNldExldmVsKAogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBsZXZlbCwKICApIHsKICAgIHRoaXMuX2xldmVsID0gbGV2ZWw7CiAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpOwogICAgcmV0dXJuIHRoaXM7CiAgfQoKICAvKioKICAgKiBTZXRzIHRoZSB0cmFuc2FjdGlvbiBuYW1lIG9uIHRoZSBzY29wZSBmb3IgZnV0dXJlIGV2ZW50cy4KICAgKi8KICAgc2V0VHJhbnNhY3Rpb25OYW1lKG5hbWUpIHsKICAgIHRoaXMuX3RyYW5zYWN0aW9uTmFtZSA9IG5hbWU7CiAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpOwogICAgcmV0dXJuIHRoaXM7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRDb250ZXh0KGtleSwgY29udGV4dCkgewogICAgaWYgKGNvbnRleHQgPT09IG51bGwpIHsKICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1keW5hbWljLWRlbGV0ZQogICAgICBkZWxldGUgdGhpcy5fY29udGV4dHNba2V5XTsKICAgIH0gZWxzZSB7CiAgICAgIHRoaXMuX2NvbnRleHRzW2tleV0gPSBjb250ZXh0OwogICAgfQoKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIFNldHMgdGhlIFNwYW4gb24gdGhlIHNjb3BlLgogICAqIEBwYXJhbSBzcGFuIFNwYW4KICAgKiBAZGVwcmVjYXRlZCBJbnN0ZWFkIG9mIHNldHRpbmcgYSBzcGFuIG9uIGEgc2NvcGUsIHVzZSBgc3RhcnRTcGFuKClgL2BzdGFydFNwYW5NYW51YWwoKWAgaW5zdGVhZC4KICAgKi8KICAgc2V0U3BhbihzcGFuKSB7CiAgICB0aGlzLl9zcGFuID0gc3BhbjsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIFJldHVybnMgdGhlIGBTcGFuYCBpZiB0aGVyZSBpcyBvbmUuCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBnZXRBY3RpdmVTcGFuKClgIGluc3RlYWQuCiAgICovCiAgIGdldFNwYW4oKSB7CiAgICByZXR1cm4gdGhpcy5fc3BhbjsKICB9CgogIC8qKgogICAqIFJldHVybnMgdGhlIGBUcmFuc2FjdGlvbmAgYXR0YWNoZWQgdG8gdGhlIHNjb3BlIChpZiB0aGVyZSBpcyBvbmUpLgogICAqIEBkZXByZWNhdGVkIFlvdSBzaG91bGQgbm90IHJlbHkgb24gdGhlIHRyYW5zYWN0aW9uLCBidXQganVzdCB1c2UgYHN0YXJ0U3BhbigpYCBBUElzIGluc3RlYWQuCiAgICovCiAgIGdldFRyYW5zYWN0aW9uKCkgewogICAgLy8gT2Z0ZW4sIHRoaXMgc3BhbiAoaWYgaXQgZXhpc3RzIGF0IGFsbCkgd2lsbCBiZSBhIHRyYW5zYWN0aW9uLCBidXQgaXQncyBub3QgZ3VhcmFudGVlZCB0byBiZS4gUmVnYXJkbGVzcywgaXQgd2lsbAogICAgLy8gaGF2ZSBhIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseS1hY3RpdmUgdHJhbnNhY3Rpb24uCiAgICBjb25zdCBzcGFuID0gdGhpcy5fc3BhbjsKICAgIC8vIENhbm5vdCByZXBsYWNlIHdpdGggZ2V0Um9vdFNwYW4gYmVjYXVzZSBnZXRSb290U3BhbiByZXR1cm5zIGEgc3Bhbiwgbm90IGEgdHJhbnNhY3Rpb24KICAgIC8vIEFsc28sIHRoaXMgbWV0aG9kIHdpbGwgYmUgcmVtb3ZlZCBhbnl3YXkuCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHJldHVybiBzcGFuICYmIHNwYW4udHJhbnNhY3Rpb247CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRTZXNzaW9uKHNlc3Npb24pIHsKICAgIGlmICghc2Vzc2lvbikgewogICAgICBkZWxldGUgdGhpcy5fc2Vzc2lvbjsKICAgIH0gZWxzZSB7CiAgICAgIHRoaXMuX3Nlc3Npb24gPSBzZXNzaW9uOwogICAgfQogICAgdGhpcy5fbm90aWZ5U2NvcGVMaXN0ZW5lcnMoKTsKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgZ2V0U2Vzc2lvbigpIHsKICAgIHJldHVybiB0aGlzLl9zZXNzaW9uOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgdXBkYXRlKGNhcHR1cmVDb250ZXh0KSB7CiAgICBpZiAoIWNhcHR1cmVDb250ZXh0KSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfQoKICAgIGNvbnN0IHNjb3BlVG9NZXJnZSA9IHR5cGVvZiBjYXB0dXJlQ29udGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IGNhcHR1cmVDb250ZXh0KHRoaXMpIDogY2FwdHVyZUNvbnRleHQ7CgogICAgaWYgKHNjb3BlVG9NZXJnZSBpbnN0YW5jZW9mIFNjb3BlKSB7CiAgICAgIGNvbnN0IHNjb3BlRGF0YSA9IHNjb3BlVG9NZXJnZS5nZXRTY29wZURhdGEoKTsKCiAgICAgIHRoaXMuX3RhZ3MgPSB7IC4uLnRoaXMuX3RhZ3MsIC4uLnNjb3BlRGF0YS50YWdzIH07CiAgICAgIHRoaXMuX2V4dHJhID0geyAuLi50aGlzLl9leHRyYSwgLi4uc2NvcGVEYXRhLmV4dHJhIH07CiAgICAgIHRoaXMuX2NvbnRleHRzID0geyAuLi50aGlzLl9jb250ZXh0cywgLi4uc2NvcGVEYXRhLmNvbnRleHRzIH07CiAgICAgIGlmIChzY29wZURhdGEudXNlciAmJiBPYmplY3Qua2V5cyhzY29wZURhdGEudXNlcikubGVuZ3RoKSB7CiAgICAgICAgdGhpcy5fdXNlciA9IHNjb3BlRGF0YS51c2VyOwogICAgICB9CiAgICAgIGlmIChzY29wZURhdGEubGV2ZWwpIHsKICAgICAgICB0aGlzLl9sZXZlbCA9IHNjb3BlRGF0YS5sZXZlbDsKICAgICAgfQogICAgICBpZiAoc2NvcGVEYXRhLmZpbmdlcnByaW50Lmxlbmd0aCkgewogICAgICAgIHRoaXMuX2ZpbmdlcnByaW50ID0gc2NvcGVEYXRhLmZpbmdlcnByaW50OwogICAgICB9CiAgICAgIGlmIChzY29wZVRvTWVyZ2UuZ2V0UmVxdWVzdFNlc3Npb24oKSkgewogICAgICAgIHRoaXMuX3JlcXVlc3RTZXNzaW9uID0gc2NvcGVUb01lcmdlLmdldFJlcXVlc3RTZXNzaW9uKCk7CiAgICAgIH0KICAgICAgaWYgKHNjb3BlRGF0YS5wcm9wYWdhdGlvbkNvbnRleHQpIHsKICAgICAgICB0aGlzLl9wcm9wYWdhdGlvbkNvbnRleHQgPSBzY29wZURhdGEucHJvcGFnYXRpb25Db250ZXh0OwogICAgICB9CiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoc2NvcGVUb01lcmdlKSkgewogICAgICBjb25zdCBzY29wZUNvbnRleHQgPSBjYXB0dXJlQ29udGV4dCA7CiAgICAgIHRoaXMuX3RhZ3MgPSB7IC4uLnRoaXMuX3RhZ3MsIC4uLnNjb3BlQ29udGV4dC50YWdzIH07CiAgICAgIHRoaXMuX2V4dHJhID0geyAuLi50aGlzLl9leHRyYSwgLi4uc2NvcGVDb250ZXh0LmV4dHJhIH07CiAgICAgIHRoaXMuX2NvbnRleHRzID0geyAuLi50aGlzLl9jb250ZXh0cywgLi4uc2NvcGVDb250ZXh0LmNvbnRleHRzIH07CiAgICAgIGlmIChzY29wZUNvbnRleHQudXNlcikgewogICAgICAgIHRoaXMuX3VzZXIgPSBzY29wZUNvbnRleHQudXNlcjsKICAgICAgfQogICAgICBpZiAoc2NvcGVDb250ZXh0LmxldmVsKSB7CiAgICAgICAgdGhpcy5fbGV2ZWwgPSBzY29wZUNvbnRleHQubGV2ZWw7CiAgICAgIH0KICAgICAgaWYgKHNjb3BlQ29udGV4dC5maW5nZXJwcmludCkgewogICAgICAgIHRoaXMuX2ZpbmdlcnByaW50ID0gc2NvcGVDb250ZXh0LmZpbmdlcnByaW50OwogICAgICB9CiAgICAgIGlmIChzY29wZUNvbnRleHQucmVxdWVzdFNlc3Npb24pIHsKICAgICAgICB0aGlzLl9yZXF1ZXN0U2Vzc2lvbiA9IHNjb3BlQ29udGV4dC5yZXF1ZXN0U2Vzc2lvbjsKICAgICAgfQogICAgICBpZiAoc2NvcGVDb250ZXh0LnByb3BhZ2F0aW9uQ29udGV4dCkgewogICAgICAgIHRoaXMuX3Byb3BhZ2F0aW9uQ29udGV4dCA9IHNjb3BlQ29udGV4dC5wcm9wYWdhdGlvbkNvbnRleHQ7CiAgICAgIH0KICAgIH0KCiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIGNsZWFyKCkgewogICAgdGhpcy5fYnJlYWRjcnVtYnMgPSBbXTsKICAgIHRoaXMuX3RhZ3MgPSB7fTsKICAgIHRoaXMuX2V4dHJhID0ge307CiAgICB0aGlzLl91c2VyID0ge307CiAgICB0aGlzLl9jb250ZXh0cyA9IHt9OwogICAgdGhpcy5fbGV2ZWwgPSB1bmRlZmluZWQ7CiAgICB0aGlzLl90cmFuc2FjdGlvbk5hbWUgPSB1bmRlZmluZWQ7CiAgICB0aGlzLl9maW5nZXJwcmludCA9IHVuZGVmaW5lZDsKICAgIHRoaXMuX3JlcXVlc3RTZXNzaW9uID0gdW5kZWZpbmVkOwogICAgdGhpcy5fc3BhbiA9IHVuZGVmaW5lZDsKICAgIHRoaXMuX3Nlc3Npb24gPSB1bmRlZmluZWQ7CiAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpOwogICAgdGhpcy5fYXR0YWNobWVudHMgPSBbXTsKICAgIHRoaXMuX3Byb3BhZ2F0aW9uQ29udGV4dCA9IGdlbmVyYXRlUHJvcGFnYXRpb25Db250ZXh0KCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIGFkZEJyZWFkY3J1bWIoYnJlYWRjcnVtYiwgbWF4QnJlYWRjcnVtYnMpIHsKICAgIGNvbnN0IG1heENydW1icyA9IHR5cGVvZiBtYXhCcmVhZGNydW1icyA9PT0gJ251bWJlcicgPyBtYXhCcmVhZGNydW1icyA6IERFRkFVTFRfTUFYX0JSRUFEQ1JVTUJTOwoKICAgIC8vIE5vIGRhdGEgaGFzIGJlZW4gY2hhbmdlZCwgc28gZG9uJ3Qgbm90aWZ5IHNjb3BlIGxpc3RlbmVycwogICAgaWYgKG1heENydW1icyA8PSAwKSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfQoKICAgIGNvbnN0IG1lcmdlZEJyZWFkY3J1bWIgPSB7CiAgICAgIHRpbWVzdGFtcDogZGF0ZVRpbWVzdGFtcEluU2Vjb25kcygpLAogICAgICAuLi5icmVhZGNydW1iLAogICAgfTsKCiAgICBjb25zdCBicmVhZGNydW1icyA9IHRoaXMuX2JyZWFkY3J1bWJzOwogICAgYnJlYWRjcnVtYnMucHVzaChtZXJnZWRCcmVhZGNydW1iKTsKICAgIHRoaXMuX2JyZWFkY3J1bWJzID0gYnJlYWRjcnVtYnMubGVuZ3RoID4gbWF4Q3J1bWJzID8gYnJlYWRjcnVtYnMuc2xpY2UoLW1heENydW1icykgOiBicmVhZGNydW1iczsKCiAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpOwoKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgZ2V0TGFzdEJyZWFkY3J1bWIoKSB7CiAgICByZXR1cm4gdGhpcy5fYnJlYWRjcnVtYnNbdGhpcy5fYnJlYWRjcnVtYnMubGVuZ3RoIC0gMV07CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBjbGVhckJyZWFkY3J1bWJzKCkgewogICAgdGhpcy5fYnJlYWRjcnVtYnMgPSBbXTsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIGFkZEF0dGFjaG1lbnQoYXR0YWNobWVudCkgewogICAgdGhpcy5fYXR0YWNobWVudHMucHVzaChhdHRhY2htZW50KTsKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKiBAZGVwcmVjYXRlZCBVc2UgYGdldFNjb3BlRGF0YSgpYCBpbnN0ZWFkLgogICAqLwogICBnZXRBdHRhY2htZW50cygpIHsKICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldFNjb3BlRGF0YSgpOwoKICAgIHJldHVybiBkYXRhLmF0dGFjaG1lbnRzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgY2xlYXJBdHRhY2htZW50cygpIHsKICAgIHRoaXMuX2F0dGFjaG1lbnRzID0gW107CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKiBAaW5oZXJpdERvYyAqLwogICBnZXRTY29wZURhdGEoKSB7CiAgICBjb25zdCB7CiAgICAgIF9icmVhZGNydW1icywKICAgICAgX2F0dGFjaG1lbnRzLAogICAgICBfY29udGV4dHMsCiAgICAgIF90YWdzLAogICAgICBfZXh0cmEsCiAgICAgIF91c2VyLAogICAgICBfbGV2ZWwsCiAgICAgIF9maW5nZXJwcmludCwKICAgICAgX2V2ZW50UHJvY2Vzc29ycywKICAgICAgX3Byb3BhZ2F0aW9uQ29udGV4dCwKICAgICAgX3Nka1Byb2Nlc3NpbmdNZXRhZGF0YSwKICAgICAgX3RyYW5zYWN0aW9uTmFtZSwKICAgICAgX3NwYW4sCiAgICB9ID0gdGhpczsKCiAgICByZXR1cm4gewogICAgICBicmVhZGNydW1iczogX2JyZWFkY3J1bWJzLAogICAgICBhdHRhY2htZW50czogX2F0dGFjaG1lbnRzLAogICAgICBjb250ZXh0czogX2NvbnRleHRzLAogICAgICB0YWdzOiBfdGFncywKICAgICAgZXh0cmE6IF9leHRyYSwKICAgICAgdXNlcjogX3VzZXIsCiAgICAgIGxldmVsOiBfbGV2ZWwsCiAgICAgIGZpbmdlcnByaW50OiBfZmluZ2VycHJpbnQgfHwgW10sCiAgICAgIGV2ZW50UHJvY2Vzc29yczogX2V2ZW50UHJvY2Vzc29ycywKICAgICAgcHJvcGFnYXRpb25Db250ZXh0OiBfcHJvcGFnYXRpb25Db250ZXh0LAogICAgICBzZGtQcm9jZXNzaW5nTWV0YWRhdGE6IF9zZGtQcm9jZXNzaW5nTWV0YWRhdGEsCiAgICAgIHRyYW5zYWN0aW9uTmFtZTogX3RyYW5zYWN0aW9uTmFtZSwKICAgICAgc3BhbjogX3NwYW4sCiAgICB9OwogIH0KCiAgLyoqCiAgICogQXBwbGllcyBkYXRhIGZyb20gdGhlIHNjb3BlIHRvIHRoZSBldmVudCBhbmQgcnVucyBhbGwgZXZlbnQgcHJvY2Vzc29ycyBvbiBpdC4KICAgKgogICAqIEBwYXJhbSBldmVudCBFdmVudAogICAqIEBwYXJhbSBoaW50IE9iamVjdCBjb250YWluaW5nIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG9yaWdpbmFsIGV4Y2VwdGlvbiwgZm9yIHVzZSBieSB0aGUgZXZlbnQgcHJvY2Vzc29ycy4KICAgKiBAaGlkZGVuCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBhcHBseVNjb3BlRGF0YVRvRXZlbnQoKWAgZGlyZWN0bHkKICAgKi8KICAgYXBwbHlUb0V2ZW50KAogICAgZXZlbnQsCiAgICBoaW50ID0ge30sCiAgICBhZGRpdGlvbmFsRXZlbnRQcm9jZXNzb3JzID0gW10sCiAgKSB7CiAgICBhcHBseVNjb3BlRGF0YVRvRXZlbnQoZXZlbnQsIHRoaXMuZ2V0U2NvcGVEYXRhKCkpOwoKICAgIC8vIFRPRE8gKHY4KTogVXBkYXRlIHRoaXMgb3JkZXIgdG8gYmU6IEdsb2JhbCA+IENsaWVudCA+IFNjb3BlCiAgICBjb25zdCBldmVudFByb2Nlc3NvcnMgPSBbCiAgICAgIC4uLmFkZGl0aW9uYWxFdmVudFByb2Nlc3NvcnMsCiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgICAuLi5nZXRHbG9iYWxFdmVudFByb2Nlc3NvcnMoKSwKICAgICAgLi4udGhpcy5fZXZlbnRQcm9jZXNzb3JzLAogICAgXTsKCiAgICByZXR1cm4gbm90aWZ5RXZlbnRQcm9jZXNzb3JzKGV2ZW50UHJvY2Vzc29ycywgZXZlbnQsIGhpbnQpOwogIH0KCiAgLyoqCiAgICogQWRkIGRhdGEgd2hpY2ggd2lsbCBiZSBhY2Nlc3NpYmxlIGR1cmluZyBldmVudCBwcm9jZXNzaW5nIGJ1dCB3b24ndCBnZXQgc2VudCB0byBTZW50cnkKICAgKi8KICAgc2V0U0RLUHJvY2Vzc2luZ01ldGFkYXRhKG5ld0RhdGEpIHsKICAgIHRoaXMuX3Nka1Byb2Nlc3NpbmdNZXRhZGF0YSA9IHsgLi4udGhpcy5fc2RrUHJvY2Vzc2luZ01ldGFkYXRhLCAuLi5uZXdEYXRhIH07CgogICAgcmV0dXJuIHRoaXM7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRQcm9wYWdhdGlvbkNvbnRleHQoY29udGV4dCkgewogICAgdGhpcy5fcHJvcGFnYXRpb25Db250ZXh0ID0gY29udGV4dDsKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgZ2V0UHJvcGFnYXRpb25Db250ZXh0KCkgewogICAgcmV0dXJuIHRoaXMuX3Byb3BhZ2F0aW9uQ29udGV4dDsKICB9CgogIC8qKgogICAqIENhcHR1cmUgYW4gZXhjZXB0aW9uIGZvciB0aGlzIHNjb3BlLgogICAqCiAgICogQHBhcmFtIGV4Y2VwdGlvbiBUaGUgZXhjZXB0aW9uIHRvIGNhcHR1cmUuCiAgICogQHBhcmFtIGhpbnQgT3B0aW5hbCBhZGRpdGlvbmFsIGRhdGEgdG8gYXR0YWNoIHRvIHRoZSBTZW50cnkgZXZlbnQuCiAgICogQHJldHVybnMgdGhlIGlkIG9mIHRoZSBjYXB0dXJlZCBTZW50cnkgZXZlbnQuCiAgICovCiAgIGNhcHR1cmVFeGNlcHRpb24oZXhjZXB0aW9uLCBoaW50KSB7CiAgICBjb25zdCBldmVudElkID0gaGludCAmJiBoaW50LmV2ZW50X2lkID8gaGludC5ldmVudF9pZCA6IHV1aWQ0KCk7CgogICAgaWYgKCF0aGlzLl9jbGllbnQpIHsKICAgICAgbG9nZ2VyLndhcm4oJ05vIGNsaWVudCBjb25maWd1cmVkIG9uIHNjb3BlIC0gd2lsbCBub3QgY2FwdHVyZSBleGNlcHRpb24hJyk7CiAgICAgIHJldHVybiBldmVudElkOwogICAgfQoKICAgIGNvbnN0IHN5bnRoZXRpY0V4Y2VwdGlvbiA9IG5ldyBFcnJvcignU2VudHJ5IHN5bnRoZXRpY0V4Y2VwdGlvbicpOwoKICAgIHRoaXMuX2NsaWVudC5jYXB0dXJlRXhjZXB0aW9uKAogICAgICBleGNlcHRpb24sCiAgICAgIHsKICAgICAgICBvcmlnaW5hbEV4Y2VwdGlvbjogZXhjZXB0aW9uLAogICAgICAgIHN5bnRoZXRpY0V4Y2VwdGlvbiwKICAgICAgICAuLi5oaW50LAogICAgICAgIGV2ZW50X2lkOiBldmVudElkLAogICAgICB9LAogICAgICB0aGlzLAogICAgKTsKCiAgICByZXR1cm4gZXZlbnRJZDsKICB9CgogIC8qKgogICAqIENhcHR1cmUgYSBtZXNzYWdlIGZvciB0aGlzIHNjb3BlLgogICAqCiAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gY2FwdHVyZS4KICAgKiBAcGFyYW0gbGV2ZWwgQW4gb3B0aW9uYWwgc2V2ZXJpdHkgbGV2ZWwgdG8gcmVwb3J0IHRoZSBtZXNzYWdlIHdpdGguCiAgICogQHBhcmFtIGhpbnQgT3B0aW9uYWwgYWRkaXRpb25hbCBkYXRhIHRvIGF0dGFjaCB0byB0aGUgU2VudHJ5IGV2ZW50LgogICAqIEByZXR1cm5zIHRoZSBpZCBvZiB0aGUgY2FwdHVyZWQgbWVzc2FnZS4KICAgKi8KICAgY2FwdHVyZU1lc3NhZ2UobWVzc2FnZSwgbGV2ZWwsIGhpbnQpIHsKICAgIGNvbnN0IGV2ZW50SWQgPSBoaW50ICYmIGhpbnQuZXZlbnRfaWQgPyBoaW50LmV2ZW50X2lkIDogdXVpZDQoKTsKCiAgICBpZiAoIXRoaXMuX2NsaWVudCkgewogICAgICBsb2dnZXIud2FybignTm8gY2xpZW50IGNvbmZpZ3VyZWQgb24gc2NvcGUgLSB3aWxsIG5vdCBjYXB0dXJlIG1lc3NhZ2UhJyk7CiAgICAgIHJldHVybiBldmVudElkOwogICAgfQoKICAgIGNvbnN0IHN5bnRoZXRpY0V4Y2VwdGlvbiA9IG5ldyBFcnJvcihtZXNzYWdlKTsKCiAgICB0aGlzLl9jbGllbnQuY2FwdHVyZU1lc3NhZ2UoCiAgICAgIG1lc3NhZ2UsCiAgICAgIGxldmVsLAogICAgICB7CiAgICAgICAgb3JpZ2luYWxFeGNlcHRpb246IG1lc3NhZ2UsCiAgICAgICAgc3ludGhldGljRXhjZXB0aW9uLAogICAgICAgIC4uLmhpbnQsCiAgICAgICAgZXZlbnRfaWQ6IGV2ZW50SWQsCiAgICAgIH0sCiAgICAgIHRoaXMsCiAgICApOwoKICAgIHJldHVybiBldmVudElkOwogIH0KCiAgLyoqCiAgICogQ2FwdHVyZXMgYSBtYW51YWxseSBjcmVhdGVkIGV2ZW50IGZvciB0aGlzIHNjb3BlIGFuZCBzZW5kcyBpdCB0byBTZW50cnkuCiAgICoKICAgKiBAcGFyYW0gZXhjZXB0aW9uIFRoZSBldmVudCB0byBjYXB0dXJlLgogICAqIEBwYXJhbSBoaW50IE9wdGlvbmFsIGFkZGl0aW9uYWwgZGF0YSB0byBhdHRhY2ggdG8gdGhlIFNlbnRyeSBldmVudC4KICAgKiBAcmV0dXJucyB0aGUgaWQgb2YgdGhlIGNhcHR1cmVkIGV2ZW50LgogICAqLwogICBjYXB0dXJlRXZlbnQoZXZlbnQsIGhpbnQpIHsKICAgIGNvbnN0IGV2ZW50SWQgPSBoaW50ICYmIGhpbnQuZXZlbnRfaWQgPyBoaW50LmV2ZW50X2lkIDogdXVpZDQoKTsKCiAgICBpZiAoIXRoaXMuX2NsaWVudCkgewogICAgICBsb2dnZXIud2FybignTm8gY2xpZW50IGNvbmZpZ3VyZWQgb24gc2NvcGUgLSB3aWxsIG5vdCBjYXB0dXJlIGV2ZW50IScpOwogICAgICByZXR1cm4gZXZlbnRJZDsKICAgIH0KCiAgICB0aGlzLl9jbGllbnQuY2FwdHVyZUV2ZW50KGV2ZW50LCB7IC4uLmhpbnQsIGV2ZW50X2lkOiBldmVudElkIH0sIHRoaXMpOwoKICAgIHJldHVybiBldmVudElkOwogIH0KCiAgLyoqCiAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBvbiBldmVyeSBzZXQgY2FsbC4KICAgKi8KICAgX25vdGlmeVNjb3BlTGlzdGVuZXJzKCkgewogICAgLy8gV2UgbmVlZCB0aGlzIGNoZWNrIGZvciB0aGlzLl9ub3RpZnlpbmdMaXN0ZW5lcnMgdG8gYmUgYWJsZSB0byB3b3JrIG9uIHNjb3BlIGR1cmluZyB1cGRhdGVzCiAgICAvLyBJZiB0aGlzIGNoZWNrIGlzIG5vdCBoZXJlIHdlJ2xsIHByb2R1Y2UgZW5kbGVzcyByZWN1cnNpb24gd2hlbiBzb21ldGhpbmcgaXMgZG9uZSB3aXRoIHRoZSBzY29wZQogICAgLy8gZHVyaW5nIHRoZSBjYWxsYmFjay4KICAgIGlmICghdGhpcy5fbm90aWZ5aW5nTGlzdGVuZXJzKSB7CiAgICAgIHRoaXMuX25vdGlmeWluZ0xpc3RlbmVycyA9IHRydWU7CiAgICAgIHRoaXMuX3Njb3BlTGlzdGVuZXJzLmZvckVhY2goY2FsbGJhY2sgPT4gewogICAgICAgIGNhbGxiYWNrKHRoaXMpOwogICAgICB9KTsKICAgICAgdGhpcy5fbm90aWZ5aW5nTGlzdGVuZXJzID0gZmFsc2U7CiAgICB9CiAgfQp9CgpmdW5jdGlvbiBnZW5lcmF0ZVByb3BhZ2F0aW9uQ29udGV4dCgpIHsKICByZXR1cm4gewogICAgdHJhY2VJZDogdXVpZDQoKSwKICAgIHNwYW5JZDogdXVpZDQoKS5zdWJzdHJpbmcoMTYpLAogIH07Cn0KCmNvbnN0IFNES19WRVJTSU9OID0gJzcuMTIwLjMnOwoKLyoqCiAqIEFQSSBjb21wYXRpYmlsaXR5IHZlcnNpb24gb2YgdGhpcyBodWIuCiAqCiAqIFdBUk5JTkc6IFRoaXMgbnVtYmVyIHNob3VsZCBvbmx5IGJlIGluY3JlYXNlZCB3aGVuIHRoZSBnbG9iYWwgaW50ZXJmYWNlCiAqIGNoYW5nZXMgYW5kIG5ldyBtZXRob2RzIGFyZSBpbnRyb2R1Y2VkLgogKgogKiBAaGlkZGVuCiAqLwpjb25zdCBBUElfVkVSU0lPTiA9IHBhcnNlRmxvYXQoU0RLX1ZFUlNJT04pOwoKLyoqCiAqIERlZmF1bHQgbWF4aW11bSBudW1iZXIgb2YgYnJlYWRjcnVtYnMgYWRkZWQgdG8gYW4gZXZlbnQuIENhbiBiZSBvdmVyd3JpdHRlbgogKiB3aXRoIHtAbGluayBPcHRpb25zLm1heEJyZWFkY3J1bWJzfS4KICovCmNvbnN0IERFRkFVTFRfQlJFQURDUlVNQlMgPSAxMDA7CgovKioKICogQGRlcHJlY2F0ZWQgVGhlIGBIdWJgIGNsYXNzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDggb2YgdGhlIFNESyBpbiBmYXZvdXIgb2YgYFNjb3BlYCBhbmQgYENsaWVudGAgb2JqZWN0cy4KICoKICogSWYgeW91IHByZXZpb3VzbHkgdXNlZCB0aGUgYEh1YmAgY2xhc3MgZGlyZWN0bHksIHJlcGxhY2UgaXQgd2l0aCBgU2NvcGVgIGFuZCBgQ2xpZW50YCBvYmplY3RzLiBNb3JlIGluZm9ybWF0aW9uOgogKiAtIFtNdWx0aXBsZSBTZW50cnkgSW5zdGFuY2VzXShodHRwczovL2RvY3Muc2VudHJ5LmlvL3BsYXRmb3Jtcy9qYXZhc2NyaXB0L2Jlc3QtcHJhY3RpY2VzL211bHRpcGxlLXNlbnRyeS1pbnN0YW5jZXMvKQogKiAtIFtCcm93c2VyIEV4dGVuc2lvbnNdKGh0dHBzOi8vZG9jcy5zZW50cnkuaW8vcGxhdGZvcm1zL2phdmFzY3JpcHQvYmVzdC1wcmFjdGljZXMvYnJvd3Nlci1leHRlbnNpb25zLykKICoKICogU29tZSBvZiBvdXIgQVBJcyBhcmUgdHlwZWQgd2l0aCB0aGUgSHViIGNsYXNzIGluc3RlYWQgb2YgdGhlIGludGVyZmFjZSAoZS5nLiBgZ2V0Q3VycmVudEh1YmApLiBNb3N0IG9mIHRoZW0gYXJlIGRlcHJlY2F0ZWQKICogdGhlbXNlbHZlcyBhbmQgd2lsbCBhbHNvIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiA4LiBNb3JlIGluZm9ybWF0aW9uOgogKiAtIFtNaWdyYXRpb24gR3VpZGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvc2VudHJ5LWphdmFzY3JpcHQvYmxvYi9kZXZlbG9wL01JR1JBVElPTi5tZCNkZXByZWNhdGUtaHViKQogKi8KLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCmNsYXNzIEh1YiAgewogIC8qKiBJcyBhIHtAbGluayBMYXllcn1bXSBjb250YWluaW5nIHRoZSBjbGllbnQgYW5kIHNjb3BlICovCgogIC8qKiBDb250YWlucyB0aGUgbGFzdCBldmVudCBpZCBvZiBhIGNhcHR1cmVkIGV2ZW50LiAgKi8KCiAgLyoqCiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgaHViLCB3aWxsIHB1c2ggb25lIHtAbGluayBMYXllcn0gaW50byB0aGUKICAgKiBpbnRlcm5hbCBzdGFjayBvbiBjcmVhdGlvbi4KICAgKgogICAqIEBwYXJhbSBjbGllbnQgYm91bmQgdG8gdGhlIGh1Yi4KICAgKiBAcGFyYW0gc2NvcGUgYm91bmQgdG8gdGhlIGh1Yi4KICAgKiBAcGFyYW0gdmVyc2lvbiBudW1iZXIsIGhpZ2hlciBudW1iZXIgbWVhbnMgaGlnaGVyIHByaW9yaXR5LgogICAqCiAgICogQGRlcHJlY2F0ZWQgSW5zdGFudGlhdGlvbiBvZiBIdWIgb2JqZWN0cyBpcyBkZXByZWNhdGVkIGFuZCB0aGUgY29uc3RydWN0b3Igd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gOCBvZiB0aGUgU0RLLgogICAqCiAgICogSWYgeW91IGFyZSBjdXJyZW50bHkgdXNpbmcgdGhlIEh1YiBmb3IgbXVsdGktY2xpZW50IHVzZSBsaWtlIHNvOgogICAqCiAgICogYGBgCiAgICogLy8gT0xECiAgICogY29uc3QgaHViID0gbmV3IEh1YigpOwogICAqIGh1Yi5iaW5kQ2xpZW50KGNsaWVudCk7CiAgICogbWFrZU1haW4oaHViKQogICAqIGBgYAogICAqCiAgICogaW5zdGVhZCBpbml0aWFsaXplIHRoZSBjbGllbnQgYXMgZm9sbG93czoKICAgKgogICAqIGBgYAogICAqIC8vIE5FVwogICAqIFNlbnRyeS53aXRoSXNvbGF0aW9uU2NvcGUoKCkgPT4gewogICAqICAgIFNlbnRyeS5zZXRDdXJyZW50Q2xpZW50KGNsaWVudCk7CiAgICogICAgY2xpZW50LmluaXQoKTsKICAgKiB9KTsKICAgKiBgYGAKICAgKgogICAqIElmIHlvdSBhcmUgdXNpbmcgdGhlIEh1YiB0byBjYXB0dXJlIGV2ZW50cyBsaWtlIHNvOgogICAqCiAgICogYGBgCiAgICogLy8gT0xECiAgICogY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCgpOwogICAqIGNvbnN0IGh1YiA9IG5ldyBIdWIoY2xpZW50KTsKICAgKiBodWIuY2FwdHVyZUV4Y2VwdGlvbigpCiAgICogYGBgCiAgICoKICAgKiBpbnN0ZWFkIGNhcHR1cmUgaXNvbGF0ZWQgZXZlbnRzIGFzIGZvbGxvd3M6CiAgICoKICAgKiBgYGAKICAgKiAvLyBORVcKICAgKiBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KCk7CiAgICogY29uc3Qgc2NvcGUgPSBuZXcgU2NvcGUoKTsKICAgKiBzY29wZS5zZXRDbGllbnQoY2xpZW50KTsKICAgKiBzY29wZS5jYXB0dXJlRXhjZXB0aW9uKCk7CiAgICogYGBgCiAgICovCiAgIGNvbnN0cnVjdG9yKAogICAgY2xpZW50LAogICAgc2NvcGUsCiAgICBpc29sYXRpb25TY29wZSwKICAgICAgX3ZlcnNpb24gPSBBUElfVkVSU0lPTiwKICApIHt0aGlzLl92ZXJzaW9uID0gX3ZlcnNpb247CiAgICBsZXQgYXNzaWduZWRTY29wZTsKICAgIGlmICghc2NvcGUpIHsKICAgICAgYXNzaWduZWRTY29wZSA9IG5ldyBTY29wZSgpOwogICAgICBhc3NpZ25lZFNjb3BlLnNldENsaWVudChjbGllbnQpOwogICAgfSBlbHNlIHsKICAgICAgYXNzaWduZWRTY29wZSA9IHNjb3BlOwogICAgfQoKICAgIGxldCBhc3NpZ25lZElzb2xhdGlvblNjb3BlOwogICAgaWYgKCFpc29sYXRpb25TY29wZSkgewogICAgICBhc3NpZ25lZElzb2xhdGlvblNjb3BlID0gbmV3IFNjb3BlKCk7CiAgICAgIGFzc2lnbmVkSXNvbGF0aW9uU2NvcGUuc2V0Q2xpZW50KGNsaWVudCk7CiAgICB9IGVsc2UgewogICAgICBhc3NpZ25lZElzb2xhdGlvblNjb3BlID0gaXNvbGF0aW9uU2NvcGU7CiAgICB9CgogICAgdGhpcy5fc3RhY2sgPSBbeyBzY29wZTogYXNzaWduZWRTY29wZSB9XTsKCiAgICBpZiAoY2xpZW50KSB7CiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgICB0aGlzLmJpbmRDbGllbnQoY2xpZW50KTsKICAgIH0KCiAgICB0aGlzLl9pc29sYXRpb25TY29wZSA9IGFzc2lnbmVkSXNvbGF0aW9uU2NvcGU7CiAgfQoKICAvKioKICAgKiBDaGVja3MgaWYgdGhpcyBodWIncyB2ZXJzaW9uIGlzIG9sZGVyIHRoYW4gdGhlIGdpdmVuIHZlcnNpb24uCiAgICoKICAgKiBAcGFyYW0gdmVyc2lvbiBBIHZlcnNpb24gbnVtYmVyIHRvIGNvbXBhcmUgdG8uCiAgICogQHJldHVybiBUcnVlIGlmIHRoZSBnaXZlbiB2ZXJzaW9uIGlzIG5ld2VyOyBvdGhlcndpc2UgZmFsc2UuCiAgICoKICAgKiBAZGVwcmVjYXRlZCBUaGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4KICAgKi8KICAgaXNPbGRlclRoYW4odmVyc2lvbikgewogICAgcmV0dXJuIHRoaXMuX3ZlcnNpb24gPCB2ZXJzaW9uOwogIH0KCiAgLyoqCiAgICogVGhpcyBiaW5kcyB0aGUgZ2l2ZW4gY2xpZW50IHRvIHRoZSBjdXJyZW50IHNjb3BlLgogICAqIEBwYXJhbSBjbGllbnQgQW4gU0RLIGNsaWVudCAoY2xpZW50KSBpbnN0YW5jZS4KICAgKgogICAqIEBkZXByZWNhdGVkIFVzZSBgaW5pdEFuZEJpbmQoKWAgZGlyZWN0bHksIG9yIGBzZXRDdXJyZW50Q2xpZW50KClgIGFuZC9vciBgY2xpZW50LmluaXQoKWAgaW5zdGVhZC4KICAgKi8KICAgYmluZENsaWVudChjbGllbnQpIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgY29uc3QgdG9wID0gdGhpcy5nZXRTdGFja1RvcCgpOwogICAgdG9wLmNsaWVudCA9IGNsaWVudDsKICAgIHRvcC5zY29wZS5zZXRDbGllbnQoY2xpZW50KTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgaWYgKGNsaWVudCAmJiBjbGllbnQuc2V0dXBJbnRlZ3JhdGlvbnMpIHsKICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICAgIGNsaWVudC5zZXR1cEludGVncmF0aW9ucygpOwogICAgfQogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKgogICAqIEBkZXByZWNhdGVkIFVzZSBgd2l0aFNjb3BlYCBpbnN0ZWFkLgogICAqLwogICBwdXNoU2NvcGUoKSB7CiAgICAvLyBXZSB3YW50IHRvIGNsb25lIHRoZSBjb250ZW50IG9mIHByZXYgc2NvcGUKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgY29uc3Qgc2NvcGUgPSB0aGlzLmdldFNjb3BlKCkuY2xvbmUoKTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRTdGFjaygpLnB1c2goewogICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgICAgY2xpZW50OiB0aGlzLmdldENsaWVudCgpLAogICAgICBzY29wZSwKICAgIH0pOwogICAgcmV0dXJuIHNjb3BlOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKgogICAqIEBkZXByZWNhdGVkIFVzZSBgd2l0aFNjb3BlYCBpbnN0ZWFkLgogICAqLwogICBwb3BTY29wZSgpIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgaWYgKHRoaXMuZ2V0U3RhY2soKS5sZW5ndGggPD0gMSkgcmV0dXJuIGZhbHNlOwogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICByZXR1cm4gISF0aGlzLmdldFN0YWNrKCkucG9wKCk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBTZW50cnkud2l0aFNjb3BlKClgIGluc3RlYWQuCiAgICovCiAgIHdpdGhTY29wZShjYWxsYmFjaykgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBjb25zdCBzY29wZSA9IHRoaXMucHVzaFNjb3BlKCk7CgogICAgbGV0IG1heWJlUHJvbWlzZVJlc3VsdDsKICAgIHRyeSB7CiAgICAgIG1heWJlUHJvbWlzZVJlc3VsdCA9IGNhbGxiYWNrKHNjb3BlKTsKICAgIH0gY2F0Y2ggKGUpIHsKICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICAgIHRoaXMucG9wU2NvcGUoKTsKICAgICAgdGhyb3cgZTsKICAgIH0KCiAgICBpZiAoaXNUaGVuYWJsZShtYXliZVByb21pc2VSZXN1bHQpKSB7CiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBpc1RoZW5hYmxlIHJldHVybnMgdGhlIHdyb25nIHR5cGUKICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZVJlc3VsdC50aGVuKAogICAgICAgIHJlcyA9PiB7CiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgICAgICAgIHRoaXMucG9wU2NvcGUoKTsKICAgICAgICAgIHJldHVybiByZXM7CiAgICAgICAgfSwKICAgICAgICBlID0+IHsKICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgICAgICAgdGhpcy5wb3BTY29wZSgpOwogICAgICAgICAgdGhyb3cgZTsKICAgICAgICB9LAogICAgICApOwogICAgfQoKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5wb3BTY29wZSgpOwogICAgcmV0dXJuIG1heWJlUHJvbWlzZVJlc3VsdDsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICoKICAgKiBAZGVwcmVjYXRlZCBVc2UgYFNlbnRyeS5nZXRDbGllbnQoKWAgaW5zdGVhZC4KICAgKi8KICAgZ2V0Q2xpZW50KCkgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICByZXR1cm4gdGhpcy5nZXRTdGFja1RvcCgpLmNsaWVudCA7CiAgfQoKICAvKioKICAgKiBSZXR1cm5zIHRoZSBzY29wZSBvZiB0aGUgdG9wIHN0YWNrLgogICAqCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBTZW50cnkuZ2V0Q3VycmVudFNjb3BlKClgIGluc3RlYWQuCiAgICovCiAgIGdldFNjb3BlKCkgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICByZXR1cm4gdGhpcy5nZXRTdGFja1RvcCgpLnNjb3BlOwogIH0KCiAgLyoqCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBTZW50cnkuZ2V0SXNvbGF0aW9uU2NvcGUoKWAgaW5zdGVhZC4KICAgKi8KICAgZ2V0SXNvbGF0aW9uU2NvcGUoKSB7CiAgICByZXR1cm4gdGhpcy5faXNvbGF0aW9uU2NvcGU7CiAgfQoKICAvKioKICAgKiBSZXR1cm5zIHRoZSBzY29wZSBzdGFjayBmb3IgZG9tYWlucyBvciB0aGUgcHJvY2Vzcy4KICAgKiBAZGVwcmVjYXRlZCBUaGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4KICAgKi8KICAgZ2V0U3RhY2soKSB7CiAgICByZXR1cm4gdGhpcy5fc3RhY2s7CiAgfQoKICAvKioKICAgKiBSZXR1cm5zIHRoZSB0b3Btb3N0IHNjb3BlIGxheWVyIGluIHRoZSBvcmRlciBkb21haW4gPiBsb2NhbCA+IHByb2Nlc3MuCiAgICogQGRlcHJlY2F0ZWQgVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gdjguCiAgICovCiAgIGdldFN0YWNrVG9wKCkgewogICAgcmV0dXJuIHRoaXMuX3N0YWNrW3RoaXMuX3N0YWNrLmxlbmd0aCAtIDFdOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKgogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oKWAgaW5zdGVhZC4KICAgKi8KICAgY2FwdHVyZUV4Y2VwdGlvbihleGNlcHRpb24sIGhpbnQpIHsKICAgIGNvbnN0IGV2ZW50SWQgPSAodGhpcy5fbGFzdEV2ZW50SWQgPSBoaW50ICYmIGhpbnQuZXZlbnRfaWQgPyBoaW50LmV2ZW50X2lkIDogdXVpZDQoKSk7CiAgICBjb25zdCBzeW50aGV0aWNFeGNlcHRpb24gPSBuZXcgRXJyb3IoJ1NlbnRyeSBzeW50aGV0aWNFeGNlcHRpb24nKTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRTY29wZSgpLmNhcHR1cmVFeGNlcHRpb24oZXhjZXB0aW9uLCB7CiAgICAgIG9yaWdpbmFsRXhjZXB0aW9uOiBleGNlcHRpb24sCiAgICAgIHN5bnRoZXRpY0V4Y2VwdGlvbiwKICAgICAgLi4uaGludCwKICAgICAgZXZlbnRfaWQ6IGV2ZW50SWQsCiAgICB9KTsKCiAgICByZXR1cm4gZXZlbnRJZDsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICoKICAgKiBAZGVwcmVjYXRlZCBVc2UgIGBTZW50cnkuY2FwdHVyZU1lc3NhZ2UoKWAgaW5zdGVhZC4KICAgKi8KICAgY2FwdHVyZU1lc3NhZ2UoCiAgICBtZXNzYWdlLAogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBsZXZlbCwKICAgIGhpbnQsCiAgKSB7CiAgICBjb25zdCBldmVudElkID0gKHRoaXMuX2xhc3RFdmVudElkID0gaGludCAmJiBoaW50LmV2ZW50X2lkID8gaGludC5ldmVudF9pZCA6IHV1aWQ0KCkpOwogICAgY29uc3Qgc3ludGhldGljRXhjZXB0aW9uID0gbmV3IEVycm9yKG1lc3NhZ2UpOwogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICB0aGlzLmdldFNjb3BlKCkuY2FwdHVyZU1lc3NhZ2UobWVzc2FnZSwgbGV2ZWwsIHsKICAgICAgb3JpZ2luYWxFeGNlcHRpb246IG1lc3NhZ2UsCiAgICAgIHN5bnRoZXRpY0V4Y2VwdGlvbiwKICAgICAgLi4uaGludCwKICAgICAgZXZlbnRfaWQ6IGV2ZW50SWQsCiAgICB9KTsKCiAgICByZXR1cm4gZXZlbnRJZDsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICoKICAgKiBAZGVwcmVjYXRlZCBVc2UgYFNlbnRyeS5jYXB0dXJlRXZlbnQoKWAgaW5zdGVhZC4KICAgKi8KICAgY2FwdHVyZUV2ZW50KGV2ZW50LCBoaW50KSB7CiAgICBjb25zdCBldmVudElkID0gaGludCAmJiBoaW50LmV2ZW50X2lkID8gaGludC5ldmVudF9pZCA6IHV1aWQ0KCk7CiAgICBpZiAoIWV2ZW50LnR5cGUpIHsKICAgICAgdGhpcy5fbGFzdEV2ZW50SWQgPSBldmVudElkOwogICAgfQogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICB0aGlzLmdldFNjb3BlKCkuY2FwdHVyZUV2ZW50KGV2ZW50LCB7IC4uLmhpbnQsIGV2ZW50X2lkOiBldmVudElkIH0pOwogICAgcmV0dXJuIGV2ZW50SWQ7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqCiAgICogQGRlcHJlY2F0ZWQgVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gdjguCiAgICovCiAgIGxhc3RFdmVudElkKCkgewogICAgcmV0dXJuIHRoaXMuX2xhc3RFdmVudElkOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKgogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LmFkZEJyZWFkY3J1bWIoKWAgaW5zdGVhZC4KICAgKi8KICAgYWRkQnJlYWRjcnVtYihicmVhZGNydW1iLCBoaW50KSB7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIGNvbnN0IHsgc2NvcGUsIGNsaWVudCB9ID0gdGhpcy5nZXRTdGFja1RvcCgpOwoKICAgIGlmICghY2xpZW50KSByZXR1cm47CgogICAgY29uc3QgeyBiZWZvcmVCcmVhZGNydW1iID0gbnVsbCwgbWF4QnJlYWRjcnVtYnMgPSBERUZBVUxUX0JSRUFEQ1JVTUJTIH0gPQogICAgICAoY2xpZW50LmdldE9wdGlvbnMgJiYgY2xpZW50LmdldE9wdGlvbnMoKSkgfHwge307CgogICAgaWYgKG1heEJyZWFkY3J1bWJzIDw9IDApIHJldHVybjsKCiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlVGltZXN0YW1wSW5TZWNvbmRzKCk7CiAgICBjb25zdCBtZXJnZWRCcmVhZGNydW1iID0geyB0aW1lc3RhbXAsIC4uLmJyZWFkY3J1bWIgfTsKICAgIGNvbnN0IGZpbmFsQnJlYWRjcnVtYiA9IGJlZm9yZUJyZWFkY3J1bWIKICAgICAgPyAoY29uc29sZVNhbmRib3goKCkgPT4gYmVmb3JlQnJlYWRjcnVtYihtZXJnZWRCcmVhZGNydW1iLCBoaW50KSkgKQogICAgICA6IG1lcmdlZEJyZWFkY3J1bWI7CgogICAgaWYgKGZpbmFsQnJlYWRjcnVtYiA9PT0gbnVsbCkgcmV0dXJuOwoKICAgIGlmIChjbGllbnQuZW1pdCkgewogICAgICBjbGllbnQuZW1pdCgnYmVmb3JlQWRkQnJlYWRjcnVtYicsIGZpbmFsQnJlYWRjcnVtYiwgaGludCk7CiAgICB9CgogICAgLy8gVE9ETyh2OCk6IEkga25vdyB0aGlzIGNvbW1lbnQgZG9lc24ndCBtYWtlIG11Y2ggc2Vuc2UgYmVjYXVzZSB0aGUgaHViIHdpbGwgYmUgZGVwcmVjYXRlZCBidXQgSSBzdGlsbCB3YW50ZWQgdG8KICAgIC8vIHdyaXRlIGl0IGRvd24uIEluIHRoZW9yeSwgd2Ugd291bGQgaGF2ZSB0byBhZGQgdGhlIGJyZWFkY3J1bWJzIHRvIHRoZSBpc29sYXRpb24gc2NvcGUgaGVyZSwgaG93ZXZlciwgdGhhdCB3b3VsZAogICAgLy8gZHVwbGljYXRlIGFsbCBvZiB0aGUgYnJlYWRjcnVtYnMuIFRoZXJlIHdhcyB0aGUgcG9zc2liaWxpdHkgb2YgYWRkaW5nIGJyZWFkY3J1bWJzIHRvIGJvdGgsIHRoZSBpc29sYXRpb24gc2NvcGUKICAgIC8vIGFuZCB0aGUgbm9ybWFsIHNjb3BlLCBhbmQgZGVkdXBsaWNhdGluZyBpdCBkb3duIHRoZSBsaW5lIGluIHRoZSBldmVudCBwcm9jZXNzaW5nIHBpcGVsaW5lLiBIb3dldmVyLCB0aGF0IHdvdWxkCiAgICAvLyBoYXZlIGJlZW4gdmVyeSBmcmFnaWxlLCBiZWNhdXNlIHRoZSBicmVhZGNydW1iIG9iamVjdHMgd291bGQgaGF2ZSBuZWVkZWQgdG8ga2VlcCB0aGVpciBpZGVudGl0eSBhbGwgdGhyb3VnaG91dAogICAgLy8gdGhlIGV2ZW50IHByb2Nlc3NpbmcgcGlwZWxpbmUuCiAgICAvLyBJbiB0aGUgbmV3IGltcGxlbWVudGF0aW9uLCB0aGUgdG9wIGxldmVsIGBTZW50cnkuYWRkQnJlYWRjcnVtYigpYCBzaG91bGQgT05MWSB3cml0ZSB0byB0aGUgaXNvbGF0aW9uIHNjb3BlLgoKICAgIHNjb3BlLmFkZEJyZWFkY3J1bWIoZmluYWxCcmVhZGNydW1iLCBtYXhCcmVhZGNydW1icyk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LnNldFVzZXIoKWAgaW5zdGVhZC4KICAgKi8KICAgc2V0VXNlcih1c2VyKSB7CiAgICAvLyBUT0RPKHY4KTogVGhlIHRvcCBsZXZlbCBgU2VudHJ5LnNldFVzZXIoKWAgZnVuY3Rpb24gc2hvdWxkIHdyaXRlIE9OTFkgdG8gdGhlIGlzb2xhdGlvbiBzY29wZS4KICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRTY29wZSgpLnNldFVzZXIodXNlcik7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHRoaXMuZ2V0SXNvbGF0aW9uU2NvcGUoKS5zZXRVc2VyKHVzZXIpOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKiBAZGVwcmVjYXRlZCBVc2UgYFNlbnRyeS5zZXRUYWdzKClgIGluc3RlYWQuCiAgICovCiAgIHNldFRhZ3ModGFncykgewogICAgLy8gVE9ETyh2OCk6IFRoZSB0b3AgbGV2ZWwgYFNlbnRyeS5zZXRUYWdzKClgIGZ1bmN0aW9uIHNob3VsZCB3cml0ZSBPTkxZIHRvIHRoZSBpc29sYXRpb24gc2NvcGUuCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHRoaXMuZ2V0U2NvcGUoKS5zZXRUYWdzKHRhZ3MpOwogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICB0aGlzLmdldElzb2xhdGlvblNjb3BlKCkuc2V0VGFncyh0YWdzKTsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBTZW50cnkuc2V0RXh0cmFzKClgIGluc3RlYWQuCiAgICovCiAgIHNldEV4dHJhcyhleHRyYXMpIHsKICAgIC8vIFRPRE8odjgpOiBUaGUgdG9wIGxldmVsIGBTZW50cnkuc2V0RXh0cmFzKClgIGZ1bmN0aW9uIHNob3VsZCB3cml0ZSBPTkxZIHRvIHRoZSBpc29sYXRpb24gc2NvcGUuCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHRoaXMuZ2V0U2NvcGUoKS5zZXRFeHRyYXMoZXh0cmFzKTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRJc29sYXRpb25TY29wZSgpLnNldEV4dHJhcyhleHRyYXMpOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKiBAZGVwcmVjYXRlZCBVc2UgYFNlbnRyeS5zZXRUYWcoKWAgaW5zdGVhZC4KICAgKi8KICAgc2V0VGFnKGtleSwgdmFsdWUpIHsKICAgIC8vIFRPRE8odjgpOiBUaGUgdG9wIGxldmVsIGBTZW50cnkuc2V0VGFnKClgIGZ1bmN0aW9uIHNob3VsZCB3cml0ZSBPTkxZIHRvIHRoZSBpc29sYXRpb24gc2NvcGUuCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHRoaXMuZ2V0U2NvcGUoKS5zZXRUYWcoa2V5LCB2YWx1ZSk7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHRoaXMuZ2V0SXNvbGF0aW9uU2NvcGUoKS5zZXRUYWcoa2V5LCB2YWx1ZSk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LnNldEV4dHJhKClgIGluc3RlYWQuCiAgICovCiAgIHNldEV4dHJhKGtleSwgZXh0cmEpIHsKICAgIC8vIFRPRE8odjgpOiBUaGUgdG9wIGxldmVsIGBTZW50cnkuc2V0RXh0cmEoKWAgZnVuY3Rpb24gc2hvdWxkIHdyaXRlIE9OTFkgdG8gdGhlIGlzb2xhdGlvbiBzY29wZS4KICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRTY29wZSgpLnNldEV4dHJhKGtleSwgZXh0cmEpOwogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICB0aGlzLmdldElzb2xhdGlvblNjb3BlKCkuc2V0RXh0cmEoa2V5LCBleHRyYSk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LnNldENvbnRleHQoKWAgaW5zdGVhZC4KICAgKi8KICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueQogICBzZXRDb250ZXh0KG5hbWUsIGNvbnRleHQpIHsKICAgIC8vIFRPRE8odjgpOiBUaGUgdG9wIGxldmVsIGBTZW50cnkuc2V0Q29udGV4dCgpYCBmdW5jdGlvbiBzaG91bGQgd3JpdGUgT05MWSB0byB0aGUgaXNvbGF0aW9uIHNjb3BlLgogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICB0aGlzLmdldFNjb3BlKCkuc2V0Q29udGV4dChuYW1lLCBjb250ZXh0KTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRJc29sYXRpb25TY29wZSgpLnNldENvbnRleHQobmFtZSwgY29udGV4dCk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBnZXRTY29wZSgpYCBkaXJlY3RseS4KICAgKi8KICAgY29uZmlndXJlU2NvcGUoY2FsbGJhY2spIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgY29uc3QgeyBzY29wZSwgY2xpZW50IH0gPSB0aGlzLmdldFN0YWNrVG9wKCk7CiAgICBpZiAoY2xpZW50KSB7CiAgICAgIGNhbGxiYWNrKHNjb3BlKTsKICAgIH0KICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgIHJ1bihjYWxsYmFjaykgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBjb25zdCBvbGRIdWIgPSBtYWtlTWFpbih0aGlzKTsKICAgIHRyeSB7CiAgICAgIGNhbGxiYWNrKHRoaXMpOwogICAgfSBmaW5hbGx5IHsKICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICAgIG1ha2VNYWluKG9sZEh1Yik7CiAgICB9CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LmdldENsaWVudCgpLmdldEludGVncmF0aW9uQnlOYW1lKClgIGluc3RlYWQuCiAgICovCiAgIGdldEludGVncmF0aW9uKGludGVncmF0aW9uKSB7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuZ2V0Q2xpZW50KCk7CiAgICBpZiAoIWNsaWVudCkgcmV0dXJuIG51bGw7CiAgICB0cnkgewogICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgICAgcmV0dXJuIGNsaWVudC5nZXRJbnRlZ3JhdGlvbihpbnRlZ3JhdGlvbik7CiAgICB9IGNhdGNoIChfb08pIHsKICAgICAgREVCVUdfQlVJTEQgJiYgbG9nZ2VyLndhcm4oYENhbm5vdCByZXRyaWV2ZSBpbnRlZ3JhdGlvbiAke2ludGVncmF0aW9uLmlkfSBmcm9tIHRoZSBjdXJyZW50IEh1YmApOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0KICB9CgogIC8qKgogICAqIFN0YXJ0cyBhIG5ldyBgVHJhbnNhY3Rpb25gIGFuZCByZXR1cm5zIGl0LiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCB0byBtYW51YWwgdHJhY2luZyBpbnN0cnVtZW50YXRpb24uCiAgICoKICAgKiBBIHRyZWUgc3RydWN0dXJlIGNhbiBiZSBidWlsdCBieSBhZGRpbmcgY2hpbGQgc3BhbnMgdG8gdGhlIHRyYW5zYWN0aW9uLCBhbmQgY2hpbGQgc3BhbnMgdG8gb3RoZXIgc3BhbnMuIFRvIHN0YXJ0IGEKICAgKiBuZXcgY2hpbGQgc3BhbiB3aXRoaW4gdGhlIHRyYW5zYWN0aW9uIG9yIGFueSBzcGFuLCBjYWxsIHRoZSByZXNwZWN0aXZlIGAuc3RhcnRDaGlsZCgpYCBtZXRob2QuCiAgICoKICAgKiBFdmVyeSBjaGlsZCBzcGFuIG11c3QgYmUgZmluaXNoZWQgYmVmb3JlIHRoZSB0cmFuc2FjdGlvbiBpcyBmaW5pc2hlZCwgb3RoZXJ3aXNlIHRoZSB1bmZpbmlzaGVkIHNwYW5zIGFyZSBkaXNjYXJkZWQuCiAgICoKICAgKiBUaGUgdHJhbnNhY3Rpb24gbXVzdCBiZSBmaW5pc2hlZCB3aXRoIGEgY2FsbCB0byBpdHMgYC5lbmQoKWAgbWV0aG9kLCBhdCB3aGljaCBwb2ludCB0aGUgdHJhbnNhY3Rpb24gd2l0aCBhbGwgaXRzCiAgICogZmluaXNoZWQgY2hpbGQgc3BhbnMgd2lsbCBiZSBzZW50IHRvIFNlbnRyeS4KICAgKgogICAqIEBwYXJhbSBjb250ZXh0IFByb3BlcnRpZXMgb2YgdGhlIG5ldyBgVHJhbnNhY3Rpb25gLgogICAqIEBwYXJhbSBjdXN0b21TYW1wbGluZ0NvbnRleHQgSW5mb3JtYXRpb24gZ2l2ZW4gdG8gdGhlIHRyYW5zYWN0aW9uIHNhbXBsaW5nIGZ1bmN0aW9uIChhbG9uZyB3aXRoIGNvbnRleHQtZGVwZW5kZW50CiAgICogZGVmYXVsdCB2YWx1ZXMpLiBTZWUge0BsaW5rIE9wdGlvbnMudHJhY2VzU2FtcGxlcn0uCiAgICoKICAgKiBAcmV0dXJucyBUaGUgdHJhbnNhY3Rpb24gd2hpY2ggd2FzIGp1c3Qgc3RhcnRlZAogICAqCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBzdGFydFNwYW4oKWAsIGBzdGFydFNwYW5NYW51YWwoKWAgb3IgYHN0YXJ0SW5hY3RpdmVTcGFuKClgIGluc3RlYWQuCiAgICovCiAgIHN0YXJ0VHJhbnNhY3Rpb24oY29udGV4dCwgY3VzdG9tU2FtcGxpbmdDb250ZXh0KSB7CiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9jYWxsRXh0ZW5zaW9uTWV0aG9kKCdzdGFydFRyYW5zYWN0aW9uJywgY29udGV4dCwgY3VzdG9tU2FtcGxpbmdDb250ZXh0KTsKCiAgICBpZiAoREVCVUdfQlVJTEQgJiYgIXJlc3VsdCkgewogICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5nZXRDbGllbnQoKTsKICAgICAgaWYgKCFjbGllbnQpIHsKICAgICAgICBsb2dnZXIud2FybigKICAgICAgICAgICJUcmFjaW5nIGV4dGVuc2lvbiAnc3RhcnRUcmFuc2FjdGlvbicgaXMgbWlzc2luZy4gWW91IHNob3VsZCAnaW5pdCcgdGhlIFNESyBiZWZvcmUgY2FsbGluZyAnc3RhcnRUcmFuc2FjdGlvbiciLAogICAgICAgICk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgbG9nZ2VyLndhcm4oYFRyYWNpbmcgZXh0ZW5zaW9uICdzdGFydFRyYW5zYWN0aW9uJyBoYXMgbm90IGJlZW4gYWRkZWQuIENhbGwgJ2FkZFRyYWNpbmdFeHRlbnNpb25zJyBiZWZvcmUgY2FsbGluZyAnaW5pdCc6ClNlbnRyeS5hZGRUcmFjaW5nRXh0ZW5zaW9ucygpOwpTZW50cnkuaW5pdCh7Li4ufSk7CmApOwogICAgICB9CiAgICB9CgogICAgcmV0dXJuIHJlc3VsdDsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBzcGFuVG9UcmFjZUhlYWRlcigpYCBpbnN0ZWFkLgogICAqLwogICB0cmFjZUhlYWRlcnMoKSB7CiAgICByZXR1cm4gdGhpcy5fY2FsbEV4dGVuc2lvbk1ldGhvZCgndHJhY2VIZWFkZXJzJyk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqCiAgICogQGRlcHJlY2F0ZWQgVXNlIHRvcCBsZXZlbCBgY2FwdHVyZVNlc3Npb25gIGluc3RlYWQuCiAgICovCiAgIGNhcHR1cmVTZXNzaW9uKGVuZFNlc3Npb24gPSBmYWxzZSkgewogICAgLy8gYm90aCBzZW5kIHRoZSB1cGRhdGUgYW5kIHB1bGwgdGhlIHNlc3Npb24gZnJvbSB0aGUgc2NvcGUKICAgIGlmIChlbmRTZXNzaW9uKSB7CiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgICByZXR1cm4gdGhpcy5lbmRTZXNzaW9uKCk7CiAgICB9CgogICAgLy8gb25seSBzZW5kIHRoZSB1cGRhdGUKICAgIHRoaXMuX3NlbmRTZXNzaW9uVXBkYXRlKCk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqIEBkZXByZWNhdGVkIFVzZSB0b3AgbGV2ZWwgYGVuZFNlc3Npb25gIGluc3RlYWQuCiAgICovCiAgIGVuZFNlc3Npb24oKSB7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIGNvbnN0IGxheWVyID0gdGhpcy5nZXRTdGFja1RvcCgpOwogICAgY29uc3Qgc2NvcGUgPSBsYXllci5zY29wZTsKICAgIGNvbnN0IHNlc3Npb24gPSBzY29wZS5nZXRTZXNzaW9uKCk7CiAgICBpZiAoc2Vzc2lvbikgewogICAgICBjbG9zZVNlc3Npb24oc2Vzc2lvbik7CiAgICB9CiAgICB0aGlzLl9zZW5kU2Vzc2lvblVwZGF0ZSgpOwoKICAgIC8vIHRoZSBzZXNzaW9uIGlzIG92ZXI7IHRha2UgaXQgb2ZmIG9mIHRoZSBzY29wZQogICAgc2NvcGUuc2V0U2Vzc2lvbigpOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKiBAZGVwcmVjYXRlZCBVc2UgdG9wIGxldmVsIGBzdGFydFNlc3Npb25gIGluc3RlYWQuCiAgICovCiAgIHN0YXJ0U2Vzc2lvbihjb250ZXh0KSB7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIGNvbnN0IHsgc2NvcGUsIGNsaWVudCB9ID0gdGhpcy5nZXRTdGFja1RvcCgpOwogICAgY29uc3QgeyByZWxlYXNlLCBlbnZpcm9ubWVudCA9IERFRkFVTFRfRU5WSVJPTk1FTlQgfSA9IChjbGllbnQgJiYgY2xpZW50LmdldE9wdGlvbnMoKSkgfHwge307CgogICAgLy8gV2lsbCBmZXRjaCB1c2VyQWdlbnQgaWYgY2FsbGVkIGZyb20gYnJvd3NlciBzZGsKICAgIGNvbnN0IHsgdXNlckFnZW50IH0gPSBHTE9CQUxfT0JKLm5hdmlnYXRvciB8fCB7fTsKCiAgICBjb25zdCBzZXNzaW9uID0gbWFrZVNlc3Npb24oewogICAgICByZWxlYXNlLAogICAgICBlbnZpcm9ubWVudCwKICAgICAgdXNlcjogc2NvcGUuZ2V0VXNlcigpLAogICAgICAuLi4odXNlckFnZW50ICYmIHsgdXNlckFnZW50IH0pLAogICAgICAuLi5jb250ZXh0LAogICAgfSk7CgogICAgLy8gRW5kIGV4aXN0aW5nIHNlc3Npb24gaWYgdGhlcmUncyBvbmUKICAgIGNvbnN0IGN1cnJlbnRTZXNzaW9uID0gc2NvcGUuZ2V0U2Vzc2lvbiAmJiBzY29wZS5nZXRTZXNzaW9uKCk7CiAgICBpZiAoY3VycmVudFNlc3Npb24gJiYgY3VycmVudFNlc3Npb24uc3RhdHVzID09PSAnb2snKSB7CiAgICAgIHVwZGF0ZVNlc3Npb24oY3VycmVudFNlc3Npb24sIHsgc3RhdHVzOiAnZXhpdGVkJyB9KTsKICAgIH0KICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5lbmRTZXNzaW9uKCk7CgogICAgLy8gQWZ0ZXJ3YXJkcyB3ZSBzZXQgdGhlIG5ldyBzZXNzaW9uIG9uIHRoZSBzY29wZQogICAgc2NvcGUuc2V0U2Vzc2lvbihzZXNzaW9uKTsKCiAgICByZXR1cm4gc2Vzc2lvbjsKICB9CgogIC8qKgogICAqIFJldHVybnMgaWYgZGVmYXVsdCBQSUkgc2hvdWxkIGJlIHNlbnQgdG8gU2VudHJ5IGFuZCBwcm9wYWdhdGVkIGluIG91cmdvaW5nIHJlcXVlc3RzCiAgICogd2hlbiBUcmFjaW5nIGlzIHVzZWQuCiAgICoKICAgKiBAZGVwcmVjYXRlZCBVc2UgdG9wLWxldmVsIGBnZXRDbGllbnQoKS5nZXRPcHRpb25zKCkuc2VuZERlZmF1bHRQaWlgIGluc3RlYWQuIFRoaXMgZnVuY3Rpb24KICAgKiBvbmx5IHVubmVjZXNzYXJpbHkgaW5jcmVhc2VkIEFQSSBzdXJmYWNlIGJ1dCBvbmx5IHdyYXBwZWQgYWNjZXNzaW5nIHRoZSBvcHRpb24uCiAgICovCiAgIHNob3VsZFNlbmREZWZhdWx0UGlpKCkgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBjb25zdCBjbGllbnQgPSB0aGlzLmdldENsaWVudCgpOwogICAgY29uc3Qgb3B0aW9ucyA9IGNsaWVudCAmJiBjbGllbnQuZ2V0T3B0aW9ucygpOwogICAgcmV0dXJuIEJvb2xlYW4ob3B0aW9ucyAmJiBvcHRpb25zLnNlbmREZWZhdWx0UGlpKTsKICB9CgogIC8qKgogICAqIFNlbmRzIHRoZSBjdXJyZW50IFNlc3Npb24gb24gdGhlIHNjb3BlCiAgICovCiAgIF9zZW5kU2Vzc2lvblVwZGF0ZSgpIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgY29uc3QgeyBzY29wZSwgY2xpZW50IH0gPSB0aGlzLmdldFN0YWNrVG9wKCk7CgogICAgY29uc3Qgc2Vzc2lvbiA9IHNjb3BlLmdldFNlc3Npb24oKTsKICAgIGlmIChzZXNzaW9uICYmIGNsaWVudCAmJiBjbGllbnQuY2FwdHVyZVNlc3Npb24pIHsKICAgICAgY2xpZW50LmNhcHR1cmVTZXNzaW9uKHNlc3Npb24pOwogICAgfQogIH0KCiAgLyoqCiAgICogQ2FsbHMgZ2xvYmFsIGV4dGVuc2lvbiBtZXRob2QgYW5kIGJpbmRpbmcgY3VycmVudCBpbnN0YW5jZSB0byB0aGUgZnVuY3Rpb24gY2FsbAogICAqLwogIC8vIEB0cy1leHBlY3QtZXJyb3IgRnVuY3Rpb24gbGFja3MgZW5kaW5nIHJldHVybiBzdGF0ZW1lbnQgYW5kIHJldHVybiB0eXBlIGRvZXMgbm90IGluY2x1ZGUgJ3VuZGVmaW5lZCcuIHRzKDIzNjYpCiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkKICAgX2NhbGxFeHRlbnNpb25NZXRob2QobWV0aG9kLCAuLi5hcmdzKSB7CiAgICBjb25zdCBjYXJyaWVyID0gZ2V0TWFpbkNhcnJpZXIoKTsKICAgIGNvbnN0IHNlbnRyeSA9IGNhcnJpZXIuX19TRU5UUllfXzsKICAgIGlmIChzZW50cnkgJiYgc2VudHJ5LmV4dGVuc2lvbnMgJiYgdHlwZW9mIHNlbnRyeS5leHRlbnNpb25zW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHsKICAgICAgcmV0dXJuIHNlbnRyeS5leHRlbnNpb25zW21ldGhvZF0uYXBwbHkodGhpcywgYXJncyk7CiAgICB9CiAgICBERUJVR19CVUlMRCAmJiBsb2dnZXIud2FybihgRXh0ZW5zaW9uIG1ldGhvZCAke21ldGhvZH0gY291bGRuJ3QgYmUgZm91bmQsIGRvaW5nIG5vdGhpbmcuYCk7CiAgfQp9CgovKioKICogUmV0dXJucyB0aGUgZ2xvYmFsIHNoaW0gcmVnaXN0cnkuCiAqCiAqIEZJWE1FOiBUaGlzIGZ1bmN0aW9uIGlzIHByb2JsZW1hdGljLCBiZWNhdXNlIGRlc3BpdGUgYWx3YXlzIHJldHVybmluZyBhIHZhbGlkIENhcnJpZXIsCiAqIGl0IGhhcyBhbiBvcHRpb25hbCBgX19TRU5UUllfX2AgcHJvcGVydHksIHdoaWNoIHRoZW4gaW4gdHVybiByZXF1aXJlcyB1cyB0byBhbHdheXMgcGVyZm9ybSBhbiB1bm5lY2Vzc2FyeSBjaGVjawogKiBhdCB0aGUgY2FsbC1zaXRlLiBXZSBhbHdheXMgYWNjZXNzIHRoZSBjYXJyaWVyIHRocm91Z2ggdGhpcyBmdW5jdGlvbiwgc28gd2UgY2FuIGd1YXJhbnRlZSB0aGF0IGBfX1NFTlRSWV9fYCBpcyB0aGVyZS4KICoqLwpmdW5jdGlvbiBnZXRNYWluQ2FycmllcigpIHsKICBHTE9CQUxfT0JKLl9fU0VOVFJZX18gPSBHTE9CQUxfT0JKLl9fU0VOVFJZX18gfHwgewogICAgZXh0ZW5zaW9uczoge30sCiAgICBodWI6IHVuZGVmaW5lZCwKICB9OwogIHJldHVybiBHTE9CQUxfT0JKOwp9CgovKioKICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgbWFpbiBodWIgd2l0aCB0aGUgcGFzc2VkIG9uZSBvbiB0aGUgZ2xvYmFsIG9iamVjdAogKgogKiBAcmV0dXJucyBUaGUgb2xkIHJlcGxhY2VkIGh1YgogKgogKiBAZGVwcmVjYXRlZCBVc2UgYHNldEN1cnJlbnRDbGllbnQoKWAgaW5zdGVhZC4KICovCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgpmdW5jdGlvbiBtYWtlTWFpbihodWIpIHsKICBjb25zdCByZWdpc3RyeSA9IGdldE1haW5DYXJyaWVyKCk7CiAgY29uc3Qgb2xkSHViID0gZ2V0SHViRnJvbUNhcnJpZXIocmVnaXN0cnkpOwogIHNldEh1Yk9uQ2FycmllcihyZWdpc3RyeSwgaHViKTsKICByZXR1cm4gb2xkSHViOwp9CgovKioKICogUmV0dXJucyB0aGUgZGVmYXVsdCBodWIgaW5zdGFuY2UuCiAqCiAqIElmIGEgaHViIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBpbiB0aGUgZ2xvYmFsIGNhcnJpZXIgYnV0IHRoaXMgbW9kdWxlCiAqIGNvbnRhaW5zIGEgbW9yZSByZWNlbnQgdmVyc2lvbiwgaXQgcmVwbGFjZXMgdGhlIHJlZ2lzdGVyZWQgdmVyc2lvbi4KICogT3RoZXJ3aXNlLCB0aGUgY3VycmVudGx5IHJlZ2lzdGVyZWQgaHViIHdpbGwgYmUgcmV0dXJuZWQuCiAqCiAqIEBkZXByZWNhdGVkIFVzZSB0aGUgcmVzcGVjdGl2ZSByZXBsYWNlbWVudCBtZXRob2QgZGlyZWN0bHkgaW5zdGVhZC4KICovCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgpmdW5jdGlvbiBnZXRDdXJyZW50SHViKCkgewogIC8vIEdldCBtYWluIGNhcnJpZXIgKGdsb2JhbCBmb3IgZXZlcnkgZW52aXJvbm1lbnQpCiAgY29uc3QgcmVnaXN0cnkgPSBnZXRNYWluQ2FycmllcigpOwoKICBpZiAocmVnaXN0cnkuX19TRU5UUllfXyAmJiByZWdpc3RyeS5fX1NFTlRSWV9fLmFjcykgewogICAgY29uc3QgaHViID0gcmVnaXN0cnkuX19TRU5UUllfXy5hY3MuZ2V0Q3VycmVudEh1YigpOwoKICAgIGlmIChodWIpIHsKICAgICAgcmV0dXJuIGh1YjsKICAgIH0KICB9CgogIC8vIFJldHVybiBodWIgdGhhdCBsaXZlcyBvbiBhIGdsb2JhbCBvYmplY3QKICByZXR1cm4gZ2V0R2xvYmFsSHViKHJlZ2lzdHJ5KTsKfQoKLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCmZ1bmN0aW9uIGdldEdsb2JhbEh1YihyZWdpc3RyeSA9IGdldE1haW5DYXJyaWVyKCkpIHsKICAvLyBJZiB0aGVyZSdzIG5vIGh1Yiwgb3IgaXRzIGFuIG9sZCBBUEksIGFzc2lnbiBhIG5ldyBvbmUKCiAgaWYgKAogICAgIWhhc0h1Yk9uQ2FycmllcihyZWdpc3RyeSkgfHwKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgZ2V0SHViRnJvbUNhcnJpZXIocmVnaXN0cnkpLmlzT2xkZXJUaGFuKEFQSV9WRVJTSU9OKQogICkgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBzZXRIdWJPbkNhcnJpZXIocmVnaXN0cnksIG5ldyBIdWIoKSk7CiAgfQoKICAvLyBSZXR1cm4gaHViIHRoYXQgbGl2ZXMgb24gYSBnbG9iYWwgb2JqZWN0CiAgcmV0dXJuIGdldEh1YkZyb21DYXJyaWVyKHJlZ2lzdHJ5KTsKfQoKLyoqCiAqIFRoaXMgd2lsbCB0ZWxsIHdoZXRoZXIgYSBjYXJyaWVyIGhhcyBhIGh1YiBvbiBpdCBvciBub3QKICogQHBhcmFtIGNhcnJpZXIgb2JqZWN0CiAqLwpmdW5jdGlvbiBoYXNIdWJPbkNhcnJpZXIoY2FycmllcikgewogIHJldHVybiAhIShjYXJyaWVyICYmIGNhcnJpZXIuX19TRU5UUllfXyAmJiBjYXJyaWVyLl9fU0VOVFJZX18uaHViKTsKfQoKLyoqCiAqIFRoaXMgd2lsbCBjcmVhdGUgYSBuZXcge0BsaW5rIEh1Yn0gYW5kIGFkZCB0byB0aGUgcGFzc2VkIG9iamVjdCBvbgogKiBfX1NFTlRSWV9fLmh1Yi4KICogQHBhcmFtIGNhcnJpZXIgb2JqZWN0CiAqIEBoaWRkZW4KICovCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgpmdW5jdGlvbiBnZXRIdWJGcm9tQ2FycmllcihjYXJyaWVyKSB7CiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgcmV0dXJuIGdldEdsb2JhbFNpbmdsZXRvbignaHViJywgKCkgPT4gbmV3IEh1YigpLCBjYXJyaWVyKTsKfQoKLyoqCiAqIFRoaXMgd2lsbCBzZXQgcGFzc2VkIHtAbGluayBIdWJ9IG9uIHRoZSBwYXNzZWQgb2JqZWN0J3MgX19TRU5UUllfXy5odWIgYXR0cmlidXRlCiAqIEBwYXJhbSBjYXJyaWVyIG9iamVjdAogKiBAcGFyYW0gaHViIEh1YgogKiBAcmV0dXJucyBBIGJvb2xlYW4gaW5kaWNhdGluZyBzdWNjZXNzIG9yIGZhaWx1cmUKICovCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgpmdW5jdGlvbiBzZXRIdWJPbkNhcnJpZXIoY2FycmllciwgaHViKSB7CiAgaWYgKCFjYXJyaWVyKSByZXR1cm4gZmFsc2U7CiAgY29uc3QgX19TRU5UUllfXyA9IChjYXJyaWVyLl9fU0VOVFJZX18gPSBjYXJyaWVyLl9fU0VOVFJZX18gfHwge30pOwogIF9fU0VOVFJZX18uaHViID0gaHViOwogIHJldHVybiB0cnVlOwp9CgovKioKICogQXBwbHkgU2RrSW5mbyAobmFtZSwgdmVyc2lvbiwgcGFja2FnZXMsIGludGVncmF0aW9ucykgdG8gdGhlIGNvcnJlc3BvbmRpbmcgZXZlbnQga2V5LgogKiBNZXJnZSB3aXRoIGV4aXN0aW5nIGRhdGEgaWYgYW55LgogKiovCmZ1bmN0aW9uIGVuaGFuY2VFdmVudFdpdGhTZGtJbmZvKGV2ZW50LCBzZGtJbmZvKSB7CiAgaWYgKCFzZGtJbmZvKSB7CiAgICByZXR1cm4gZXZlbnQ7CiAgfQogIGV2ZW50LnNkayA9IGV2ZW50LnNkayB8fCB7fTsKICBldmVudC5zZGsubmFtZSA9IGV2ZW50LnNkay5uYW1lIHx8IHNka0luZm8ubmFtZTsKICBldmVudC5zZGsudmVyc2lvbiA9IGV2ZW50LnNkay52ZXJzaW9uIHx8IHNka0luZm8udmVyc2lvbjsKICBldmVudC5zZGsuaW50ZWdyYXRpb25zID0gWy4uLihldmVudC5zZGsuaW50ZWdyYXRpb25zIHx8IFtdKSwgLi4uKHNka0luZm8uaW50ZWdyYXRpb25zIHx8IFtdKV07CiAgZXZlbnQuc2RrLnBhY2thZ2VzID0gWy4uLihldmVudC5zZGsucGFja2FnZXMgfHwgW10pLCAuLi4oc2RrSW5mby5wYWNrYWdlcyB8fCBbXSldOwogIHJldHVybiBldmVudDsKfQoKLyoqIENyZWF0ZXMgYW4gZW52ZWxvcGUgZnJvbSBhIFNlc3Npb24gKi8KZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbkVudmVsb3BlKAogIHNlc3Npb24sCiAgZHNuLAogIG1ldGFkYXRhLAogIHR1bm5lbCwKKSB7CiAgY29uc3Qgc2RrSW5mbyA9IGdldFNka01ldGFkYXRhRm9yRW52ZWxvcGVIZWFkZXIobWV0YWRhdGEpOwogIGNvbnN0IGVudmVsb3BlSGVhZGVycyA9IHsKICAgIHNlbnRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwKICAgIC4uLihzZGtJbmZvICYmIHsgc2RrOiBzZGtJbmZvIH0pLAogICAgLi4uKCEhdHVubmVsICYmIGRzbiAmJiB7IGRzbjogZHNuVG9TdHJpbmcoZHNuKSB9KSwKICB9OwoKICBjb25zdCBlbnZlbG9wZUl0ZW0gPQogICAgJ2FnZ3JlZ2F0ZXMnIGluIHNlc3Npb24gPyBbeyB0eXBlOiAnc2Vzc2lvbnMnIH0sIHNlc3Npb25dIDogW3sgdHlwZTogJ3Nlc3Npb24nIH0sIHNlc3Npb24udG9KU09OKCldOwoKICByZXR1cm4gY3JlYXRlRW52ZWxvcGUoZW52ZWxvcGVIZWFkZXJzLCBbZW52ZWxvcGVJdGVtXSk7Cn0KCi8qKgogKiBDcmVhdGUgYW4gRW52ZWxvcGUgZnJvbSBhbiBldmVudC4KICovCmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RW52ZWxvcGUoCiAgZXZlbnQsCiAgZHNuLAogIG1ldGFkYXRhLAogIHR1bm5lbCwKKSB7CiAgY29uc3Qgc2RrSW5mbyA9IGdldFNka01ldGFkYXRhRm9yRW52ZWxvcGVIZWFkZXIobWV0YWRhdGEpOwoKICAvKgogICAgTm90ZTogRHVlIHRvIFRTLCBldmVudC50eXBlIG1heSBiZSBgcmVwbGF5X2V2ZW50YCwgdGhlb3JldGljYWxseS4KICAgIEluIHByYWN0aWNlLCB3ZSBuZXZlciBjYWxsIGBjcmVhdGVFdmVudEVudmVsb3BlYCB3aXRoIGByZXBsYXlfZXZlbnRgIHR5cGUsCiAgICBhbmQgd2UnZCBoYXZlIHRvIGFkanV0IGEgbG9vb3Qgb2YgdHlwZXMgdG8gbWFrZSB0aGlzIHdvcmsgcHJvcGVybHkuCiAgICBXZSB3YW50IHRvIGF2b2lkIGNhc3RpbmcgdGhpcyBhcm91bmQsIGFzIHRoYXQgY291bGQgbGVhZCB0byBidWdzIChlLmcuIHdoZW4gd2UgYWRkIGFub3RoZXIgdHlwZSkKICAgIFNvIHRoZSBzYWZlIGNob2ljZSBpcyB0byByZWFsbHkgZ3VhcmQgYWdhaW5zdCB0aGUgcmVwbGF5X2V2ZW50IHR5cGUgaGVyZS4KICAqLwogIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50LnR5cGUgJiYgZXZlbnQudHlwZSAhPT0gJ3JlcGxheV9ldmVudCcgPyBldmVudC50eXBlIDogJ2V2ZW50JzsKCiAgZW5oYW5jZUV2ZW50V2l0aFNka0luZm8oZXZlbnQsIG1ldGFkYXRhICYmIG1ldGFkYXRhLnNkayk7CgogIGNvbnN0IGVudmVsb3BlSGVhZGVycyA9IGNyZWF0ZUV2ZW50RW52ZWxvcGVIZWFkZXJzKGV2ZW50LCBzZGtJbmZvLCB0dW5uZWwsIGRzbik7CgogIC8vIFByZXZlbnQgdGhpcyBkYXRhICh3aGljaCwgaWYgaXQgZXhpc3RzLCB3YXMgdXNlZCBpbiBlYXJsaWVyIHN0ZXBzIGluIHRoZSBwcm9jZXNzaW5nIHBpcGVsaW5lKSBmcm9tIGJlaW5nIHNlbnQgdG8KICAvLyBzZW50cnkuIChOb3RlOiBPdXIgdXNlIG9mIHRoaXMgcHJvcGVydHkgY29tZXMgYW5kIGdvZXMgd2l0aCB3aGF0ZXZlciB3ZSBtaWdodCBiZSBkZWJ1Z2dpbmcsIHdoYXRldmVyIGhhY2tzIHdlIG1heQogIC8vIGhhdmUgdGVtcG9yYXJpbHkgYWRkZWQsIGV0Yy4gRXZlbiBpZiB3ZSBkb24ndCBoYXBwZW4gdG8gYmUgdXNpbmcgaXQgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLCBsZXQncyBub3QgZ2V0IHJpZAogIC8vIG9mIHRoaXMgYGRlbGV0ZWAsIGxlc3Qgd2UgbWlzcyBwdXR0aW5nIGl0IGJhY2sgaW4gdGhlIG5leHQgdGltZSB0aGUgcHJvcGVydHkgaXMgaW4gdXNlLikKICBkZWxldGUgZXZlbnQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhOwoKICBjb25zdCBldmVudEl0ZW0gPSBbeyB0eXBlOiBldmVudFR5cGUgfSwgZXZlbnRdOwogIHJldHVybiBjcmVhdGVFbnZlbG9wZShlbnZlbG9wZUhlYWRlcnMsIFtldmVudEl0ZW1dKTsKfQoKY29uc3QgU0VOVFJZX0FQSV9WRVJTSU9OID0gJzcnOwoKLyoqIFJldHVybnMgdGhlIHByZWZpeCB0byBjb25zdHJ1Y3QgU2VudHJ5IGluZ2VzdGlvbiBBUEkgZW5kcG9pbnRzLiAqLwpmdW5jdGlvbiBnZXRCYXNlQXBpRW5kcG9pbnQoZHNuKSB7CiAgY29uc3QgcHJvdG9jb2wgPSBkc24ucHJvdG9jb2wgPyBgJHtkc24ucHJvdG9jb2x9OmAgOiAnJzsKICBjb25zdCBwb3J0ID0gZHNuLnBvcnQgPyBgOiR7ZHNuLnBvcnR9YCA6ICcnOwogIHJldHVybiBgJHtwcm90b2NvbH0vLyR7ZHNuLmhvc3R9JHtwb3J0fSR7ZHNuLnBhdGggPyBgLyR7ZHNuLnBhdGh9YCA6ICcnfS9hcGkvYDsKfQoKLyoqIFJldHVybnMgdGhlIGluZ2VzdCBBUEkgZW5kcG9pbnQgZm9yIHRhcmdldC4gKi8KZnVuY3Rpb24gX2dldEluZ2VzdEVuZHBvaW50KGRzbikgewogIHJldHVybiBgJHtnZXRCYXNlQXBpRW5kcG9pbnQoZHNuKX0ke2Rzbi5wcm9qZWN0SWR9L2VudmVsb3BlL2A7Cn0KCi8qKiBSZXR1cm5zIGEgVVJMLWVuY29kZWQgc3RyaW5nIHdpdGggYXV0aCBjb25maWcgc3VpdGFibGUgZm9yIGEgcXVlcnkgc3RyaW5nLiAqLwpmdW5jdGlvbiBfZW5jb2RlZEF1dGgoZHNuLCBzZGtJbmZvKSB7CiAgcmV0dXJuIHVybEVuY29kZSh7CiAgICAvLyBXZSBzZW5kIG9ubHkgdGhlIG1pbmltdW0gc2V0IG9mIHJlcXVpcmVkIGluZm9ybWF0aW9uLiBTZWUKICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvc2VudHJ5LWphdmFzY3JpcHQvaXNzdWVzLzI1NzIuCiAgICBzZW50cnlfa2V5OiBkc24ucHVibGljS2V5LAogICAgc2VudHJ5X3ZlcnNpb246IFNFTlRSWV9BUElfVkVSU0lPTiwKICAgIC4uLihzZGtJbmZvICYmIHsgc2VudHJ5X2NsaWVudDogYCR7c2RrSW5mby5uYW1lfS8ke3Nka0luZm8udmVyc2lvbn1gIH0pLAogIH0pOwp9CgovKioKICogUmV0dXJucyB0aGUgZW52ZWxvcGUgZW5kcG9pbnQgVVJMIHdpdGggYXV0aCBpbiB0aGUgcXVlcnkgc3RyaW5nLgogKgogKiBTZW5kaW5nIGF1dGggYXMgcGFydCBvZiB0aGUgcXVlcnkgc3RyaW5nIGFuZCBub3QgYXMgY3VzdG9tIEhUVFAgaGVhZGVycyBhdm9pZHMgQ09SUyBwcmVmbGlnaHQgcmVxdWVzdHMuCiAqLwpmdW5jdGlvbiBnZXRFbnZlbG9wZUVuZHBvaW50V2l0aFVybEVuY29kZWRBdXRoKAogIGRzbiwKICAvLyBUT0RPICh2OCk6IFJlbW92ZSBgdHVubmVsT3JPcHRpb25zYCBpbiBmYXZvciBvZiBgb3B0aW9uc2AsIGFuZCB1c2UgdGhlIHN1YnN0aXR1dGUgY29kZSBiZWxvdwogIC8vIG9wdGlvbnM6IENsaWVudE9wdGlvbnMgPSB7fSBhcyBDbGllbnRPcHRpb25zLAogIHR1bm5lbE9yT3B0aW9ucyA9IHt9ICwKKSB7CiAgLy8gVE9ETyAodjgpOiBVc2UgdGhpcyBjb2RlIGluc3RlYWQKICAvLyBjb25zdCB7IHR1bm5lbCwgX21ldGFkYXRhID0ge30gfSA9IG9wdGlvbnM7CiAgLy8gcmV0dXJuIHR1bm5lbCA/IHR1bm5lbCA6IGAke19nZXRJbmdlc3RFbmRwb2ludChkc24pfT8ke19lbmNvZGVkQXV0aChkc24sIF9tZXRhZGF0YS5zZGspfWA7CgogIGNvbnN0IHR1bm5lbCA9IHR5cGVvZiB0dW5uZWxPck9wdGlvbnMgPT09ICdzdHJpbmcnID8gdHVubmVsT3JPcHRpb25zIDogdHVubmVsT3JPcHRpb25zLnR1bm5lbDsKICBjb25zdCBzZGtJbmZvID0KICAgIHR5cGVvZiB0dW5uZWxPck9wdGlvbnMgPT09ICdzdHJpbmcnIHx8ICF0dW5uZWxPck9wdGlvbnMuX21ldGFkYXRhID8gdW5kZWZpbmVkIDogdHVubmVsT3JPcHRpb25zLl9tZXRhZGF0YS5zZGs7CgogIHJldHVybiB0dW5uZWwgPyB0dW5uZWwgOiBgJHtfZ2V0SW5nZXN0RW5kcG9pbnQoZHNuKX0/JHtfZW5jb2RlZEF1dGgoZHNuLCBzZGtJbmZvKX1gOwp9Cgpjb25zdCBERUZBVUxUX1RSQU5TUE9SVF9CVUZGRVJfU0laRSA9IDMwOwoKLyoqCiAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBTZW50cnkgYFRyYW5zcG9ydGAKICoKICogQHBhcmFtIG9wdGlvbnMKICogQHBhcmFtIG1ha2VSZXF1ZXN0CiAqLwpmdW5jdGlvbiBjcmVhdGVUcmFuc3BvcnQoCiAgb3B0aW9ucywKICBtYWtlUmVxdWVzdCwKICBidWZmZXIgPSBtYWtlUHJvbWlzZUJ1ZmZlcigKICAgIG9wdGlvbnMuYnVmZmVyU2l6ZSB8fCBERUZBVUxUX1RSQU5TUE9SVF9CVUZGRVJfU0laRSwKICApLAopIHsKICBsZXQgcmF0ZUxpbWl0cyA9IHt9OwogIGNvbnN0IGZsdXNoID0gKHRpbWVvdXQpID0+IGJ1ZmZlci5kcmFpbih0aW1lb3V0KTsKCiAgZnVuY3Rpb24gc2VuZChlbnZlbG9wZSkgewogICAgY29uc3QgZmlsdGVyZWRFbnZlbG9wZUl0ZW1zID0gW107CgogICAgLy8gRHJvcCByYXRlIGxpbWl0ZWQgaXRlbXMgZnJvbSBlbnZlbG9wZQogICAgZm9yRWFjaEVudmVsb3BlSXRlbShlbnZlbG9wZSwgKGl0ZW0sIHR5cGUpID0+IHsKICAgICAgY29uc3QgZGF0YUNhdGVnb3J5ID0gZW52ZWxvcGVJdGVtVHlwZVRvRGF0YUNhdGVnb3J5KHR5cGUpOwogICAgICBpZiAoaXNSYXRlTGltaXRlZChyYXRlTGltaXRzLCBkYXRhQ2F0ZWdvcnkpKSB7CiAgICAgICAgY29uc3QgZXZlbnQgPSBnZXRFdmVudEZvckVudmVsb3BlSXRlbShpdGVtLCB0eXBlKTsKICAgICAgICBvcHRpb25zLnJlY29yZERyb3BwZWRFdmVudCgncmF0ZWxpbWl0X2JhY2tvZmYnLCBkYXRhQ2F0ZWdvcnksIGV2ZW50KTsKICAgICAgfSBlbHNlIHsKICAgICAgICBmaWx0ZXJlZEVudmVsb3BlSXRlbXMucHVzaChpdGVtKTsKICAgICAgfQogICAgfSk7CgogICAgLy8gU2tpcCBzZW5kaW5nIGlmIGVudmVsb3BlIGlzIGVtcHR5IGFmdGVyIGZpbHRlcmluZyBvdXQgcmF0ZSBsaW1pdGVkIGV2ZW50cwogICAgaWYgKGZpbHRlcmVkRW52ZWxvcGVJdGVtcy5sZW5ndGggPT09IDApIHsKICAgICAgcmV0dXJuIHJlc29sdmVkU3luY1Byb21pc2UoKTsKICAgIH0KCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueQogICAgY29uc3QgZmlsdGVyZWRFbnZlbG9wZSA9IGNyZWF0ZUVudmVsb3BlKGVudmVsb3BlWzBdLCBmaWx0ZXJlZEVudmVsb3BlSXRlbXMgKTsKCiAgICAvLyBDcmVhdGVzIGNsaWVudCByZXBvcnQgZm9yIGVhY2ggaXRlbSBpbiBhbiBlbnZlbG9wZQogICAgY29uc3QgcmVjb3JkRW52ZWxvcGVMb3NzID0gKHJlYXNvbikgPT4gewogICAgICBmb3JFYWNoRW52ZWxvcGVJdGVtKGZpbHRlcmVkRW52ZWxvcGUsIChpdGVtLCB0eXBlKSA9PiB7CiAgICAgICAgY29uc3QgZXZlbnQgPSBnZXRFdmVudEZvckVudmVsb3BlSXRlbShpdGVtLCB0eXBlKTsKICAgICAgICBvcHRpb25zLnJlY29yZERyb3BwZWRFdmVudChyZWFzb24sIGVudmVsb3BlSXRlbVR5cGVUb0RhdGFDYXRlZ29yeSh0eXBlKSwgZXZlbnQpOwogICAgICB9KTsKICAgIH07CgogICAgY29uc3QgcmVxdWVzdFRhc2sgPSAoKSA9PgogICAgICBtYWtlUmVxdWVzdCh7IGJvZHk6IHNlcmlhbGl6ZUVudmVsb3BlKGZpbHRlcmVkRW52ZWxvcGUsIG9wdGlvbnMudGV4dEVuY29kZXIpIH0pLnRoZW4oCiAgICAgICAgcmVzcG9uc2UgPT4gewogICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byB0aHJvdyBvbiBOT0sgcmVzcG9uc2VzLCBidXQgd2Ugd2FudCB0byBhdCBsZWFzdCBsb2cgdGhlbQogICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IHVuZGVmaW5lZCAmJiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA8IDIwMCB8fCByZXNwb25zZS5zdGF0dXNDb2RlID49IDMwMCkpIHsKICAgICAgICAgICAgREVCVUdfQlVJTEQgJiYgbG9nZ2VyLndhcm4oYFNlbnRyeSByZXNwb25kZWQgd2l0aCBzdGF0dXMgY29kZSAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9IHRvIHNlbnQgZXZlbnQuYCk7CiAgICAgICAgICB9CgogICAgICAgICAgcmF0ZUxpbWl0cyA9IHVwZGF0ZVJhdGVMaW1pdHMocmF0ZUxpbWl0cywgcmVzcG9uc2UpOwogICAgICAgICAgcmV0dXJuIHJlc3BvbnNlOwogICAgICAgIH0sCiAgICAgICAgZXJyb3IgPT4gewogICAgICAgICAgcmVjb3JkRW52ZWxvcGVMb3NzKCduZXR3b3JrX2Vycm9yJyk7CiAgICAgICAgICB0aHJvdyBlcnJvcjsKICAgICAgICB9LAogICAgICApOwoKICAgIHJldHVybiBidWZmZXIuYWRkKHJlcXVlc3RUYXNrKS50aGVuKAogICAgICByZXN1bHQgPT4gcmVzdWx0LAogICAgICBlcnJvciA9PiB7CiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgU2VudHJ5RXJyb3IpIHsKICAgICAgICAgIERFQlVHX0JVSUxEICYmIGxvZ2dlci5lcnJvcignU2tpcHBlZCBzZW5kaW5nIGV2ZW50IGJlY2F1c2UgYnVmZmVyIGlzIGZ1bGwuJyk7CiAgICAgICAgICByZWNvcmRFbnZlbG9wZUxvc3MoJ3F1ZXVlX292ZXJmbG93Jyk7CiAgICAgICAgICByZXR1cm4gcmVzb2x2ZWRTeW5jUHJvbWlzZSgpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICB0aHJvdyBlcnJvcjsKICAgICAgICB9CiAgICAgIH0sCiAgICApOwogIH0KCiAgLy8gV2UgdXNlIHRoaXMgdG8gaWRlbnRpZmlmeSBpZiB0aGUgdHJhbnNwb3J0IGlzIHRoZSBiYXNlIHRyYW5zcG9ydAogIC8vIFRPRE8gKHY4KTogUmVtb3ZlIHRoaXMgYWdhaW4gYXMgd2UnbGwgbm8gbG9uZ2VyIG5lZWQgaXQKICBzZW5kLl9fc2VudHJ5X19iYXNlVHJhbnNwb3J0X18gPSB0cnVlOwoKICByZXR1cm4gewogICAgc2VuZCwKICAgIGZsdXNoLAogIH07Cn0KCmZ1bmN0aW9uIGdldEV2ZW50Rm9yRW52ZWxvcGVJdGVtKGl0ZW0sIHR5cGUpIHsKICBpZiAodHlwZSAhPT0gJ2V2ZW50JyAmJiB0eXBlICE9PSAndHJhbnNhY3Rpb24nKSB7CiAgICByZXR1cm4gdW5kZWZpbmVkOwogIH0KCiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaXRlbSkgPyAoaXRlbSApWzFdIDogdW5kZWZpbmVkOwp9CgovKiogbm9ybWFsaXplcyBXaW5kb3dzIHBhdGhzICovCmZ1bmN0aW9uIG5vcm1hbGl6ZVdpbmRvd3NQYXRoKHBhdGgpIHsKICByZXR1cm4gcGF0aAogICAgLnJlcGxhY2UoL15bQS1aXTovLCAnJykgLy8gcmVtb3ZlIFdpbmRvd3Mtc3R5bGUgcHJlZml4CiAgICAucmVwbGFjZSgvXFwvZywgJy8nKTsgLy8gcmVwbGFjZSBhbGwgYFxgIGluc3RhbmNlcyB3aXRoIGAvYAp9CgovKiogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0aGUgbW9kdWxlIG5hbWUgZnJvbSBhIGZpbGVuYW1lICovCmZ1bmN0aW9uIGNyZWF0ZUdldE1vZHVsZUZyb21GaWxlbmFtZSgKICBiYXNlUGF0aCA9IHByb2Nlc3MuYXJndlsxXSA/IGRpcm5hbWUocHJvY2Vzcy5hcmd2WzFdKSA6IHByb2Nlc3MuY3dkKCksCiAgaXNXaW5kb3dzID0gc2VwID09PSAnXFwnLAopIHsKICBjb25zdCBub3JtYWxpemVkQmFzZSA9IGlzV2luZG93cyA/IG5vcm1hbGl6ZVdpbmRvd3NQYXRoKGJhc2VQYXRoKSA6IGJhc2VQYXRoOwoKICByZXR1cm4gKGZpbGVuYW1lKSA9PiB7CiAgICBpZiAoIWZpbGVuYW1lKSB7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBjb25zdCBub3JtYWxpemVkRmlsZW5hbWUgPSBpc1dpbmRvd3MgPyBub3JtYWxpemVXaW5kb3dzUGF0aChmaWxlbmFtZSkgOiBmaWxlbmFtZTsKCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0CiAgICBsZXQgeyBkaXIsIGJhc2U6IGZpbGUsIGV4dCB9ID0gcG9zaXgucGFyc2Uobm9ybWFsaXplZEZpbGVuYW1lKTsKCiAgICBpZiAoZXh0ID09PSAnLmpzJyB8fCBleHQgPT09ICcubWpzJyB8fCBleHQgPT09ICcuY2pzJykgewogICAgICBmaWxlID0gZmlsZS5zbGljZSgwLCBleHQubGVuZ3RoICogLTEpOwogICAgfQoKICAgIGlmICghZGlyKSB7CiAgICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlcgogICAgICBkaXIgPSAnLic7CiAgICB9CgogICAgY29uc3QgbiA9IGRpci5sYXN0SW5kZXhPZignL25vZGVfbW9kdWxlcycpOwogICAgaWYgKG4gPiAtMSkgewogICAgICByZXR1cm4gYCR7ZGlyLnNsaWNlKG4gKyAxNCkucmVwbGFjZSgvXC8vZywgJy4nKX06JHtmaWxlfWA7CiAgICB9CgogICAgLy8gTGV0J3Mgc2VlIGlmIGl0J3MgYSBwYXJ0IG9mIHRoZSBtYWluIG1vZHVsZQogICAgLy8gVG8gYmUgYSBwYXJ0IG9mIG1haW4gbW9kdWxlLCBpdCBoYXMgdG8gc2hhcmUgdGhlIHNhbWUgYmFzZQogICAgaWYgKGRpci5zdGFydHNXaXRoKG5vcm1hbGl6ZWRCYXNlKSkgewogICAgICBsZXQgbW9kdWxlTmFtZSA9IGRpci5zbGljZShub3JtYWxpemVkQmFzZS5sZW5ndGggKyAxKS5yZXBsYWNlKC9cLy9nLCAnLicpOwoKICAgICAgaWYgKG1vZHVsZU5hbWUpIHsKICAgICAgICBtb2R1bGVOYW1lICs9ICc6JzsKICAgICAgfQogICAgICBtb2R1bGVOYW1lICs9IGZpbGU7CgogICAgICByZXR1cm4gbW9kdWxlTmFtZTsKICAgIH0KCiAgICByZXR1cm4gZmlsZTsKICB9Owp9CgpmdW5jdGlvbiBfbnVsbGlzaENvYWxlc2NlJDIobGhzLCByaHNGbikgeyBpZiAobGhzICE9IG51bGwpIHsgcmV0dXJuIGxoczsgfSBlbHNlIHsgcmV0dXJuIHJoc0ZuKCk7IH0gfS8qKgogKiBUaGlzIGNvZGUgd2FzIG9yaWdpbmFsbHkgZm9ya2VkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL1Rvb1RhbGxOYXRlL3Byb3h5LWFnZW50cy90cmVlL2IxMzMyOTVmZDE2ZjY0NzU1NzhiNmIxNWJkOWI0ZTMzZWNiMGQwYjcKICogV2l0aCB0aGUgZm9sbG93aW5nIGxpY2VuY2U6CiAqCiAqIChUaGUgTUlUIExpY2Vuc2UpCiAqCiAqIENvcHlyaWdodCAoYykgMjAxMyBOYXRoYW4gUmFqbGljaCA8bmF0aGFuQHRvb3RhbGxuYXRlLm5ldD4qCiAqCiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZwogKiBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUKICogJ1NvZnR3YXJlJyksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZwogKiB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsCiAqIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0bwogKiBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8KICogdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOioKICoKICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUKICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuKgogKgogKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwKICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GCiAqIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4KICogSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkKICogQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwKICogVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUKICogU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuCiAqLwoKY29uc3QgSU5URVJOQUwgPSBTeW1ib2woJ0FnZW50QmFzZUludGVybmFsU3RhdGUnKTsKCmNsYXNzIEFnZW50IGV4dGVuZHMgaHR0cC5BZ2VudCB7CgogIC8vIFNldCBieSBgaHR0cC5BZ2VudGAgLSBtaXNzaW5nIGZyb20gYEB0eXBlcy9ub2RlYAoKICBjb25zdHJ1Y3RvcihvcHRzKSB7CiAgICBzdXBlcihvcHRzKTsKICAgIHRoaXNbSU5URVJOQUxdID0ge307CiAgfQoKICAvKioKICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIGBodHRwYCBvciBgaHR0cHNgIHJlcXVlc3QuCiAgICovCiAgaXNTZWN1cmVFbmRwb2ludChvcHRpb25zKSB7CiAgICBpZiAob3B0aW9ucykgewogICAgICAvLyBGaXJzdCBjaGVjayB0aGUgYHNlY3VyZUVuZHBvaW50YCBwcm9wZXJ0eSBleHBsaWNpdGx5LCBzaW5jZSB0aGlzCiAgICAgIC8vIG1lYW5zIHRoYXQgYSBwYXJlbnQgYEFnZW50YCBpcyAicGFzc2luZyB0aHJvdWdoIiB0byB0aGlzIGluc3RhbmNlLgogICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzCiAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMgKS5zZWN1cmVFbmRwb2ludCA9PT0gJ2Jvb2xlYW4nKSB7CiAgICAgICAgcmV0dXJuIG9wdGlvbnMuc2VjdXJlRW5kcG9pbnQ7CiAgICAgIH0KCiAgICAgIC8vIElmIG5vIGV4cGxpY2l0IGBzZWN1cmVgIGVuZHBvaW50LCBjaGVjayBpZiBgcHJvdG9jb2xgIHByb3BlcnR5IGlzCiAgICAgIC8vIHNldC4gVGhpcyB3aWxsIHVzdWFsbHkgYmUgdGhlIGNhc2Ugc2luY2UgdXNpbmcgYSBmdWxsIHN0cmluZyBVUkwKICAgICAgLy8gb3IgYFVSTGAgaW5zdGFuY2Ugc2hvdWxkIGJlIHRoZSBtb3N0IGNvbW1vbiB1c2FnZS4KICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnByb3RvY29sID09PSAnc3RyaW5nJykgewogICAgICAgIHJldHVybiBvcHRpb25zLnByb3RvY29sID09PSAnaHR0cHM6JzsKICAgICAgfQogICAgfQoKICAgIC8vIEZpbmFsbHksIGlmIG5vIGBwcm90b2NvbGAgcHJvcGVydHkgd2FzIHNldCwgdGhlbiBmYWxsIGJhY2sgdG8KICAgIC8vIGNoZWNraW5nIHRoZSBzdGFjayB0cmFjZSBvZiB0aGUgY3VycmVudCBjYWxsIHN0YWNrLCBhbmQgdHJ5IHRvCiAgICAvLyBkZXRlY3QgdGhlICJodHRwcyIgbW9kdWxlLgogICAgY29uc3QgeyBzdGFjayB9ID0gbmV3IEVycm9yKCk7CiAgICBpZiAodHlwZW9mIHN0YWNrICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlOwogICAgcmV0dXJuIHN0YWNrLnNwbGl0KCdcbicpLnNvbWUobCA9PiBsLmluZGV4T2YoJyhodHRwcy5qczonKSAhPT0gLTEgfHwgbC5pbmRleE9mKCdub2RlOmh0dHBzOicpICE9PSAtMSk7CiAgfQoKICBjcmVhdGVTb2NrZXQocmVxLCBvcHRpb25zLCBjYikgewogICAgY29uc3QgY29ubmVjdE9wdHMgPSB7CiAgICAgIC4uLm9wdGlvbnMsCiAgICAgIHNlY3VyZUVuZHBvaW50OiB0aGlzLmlzU2VjdXJlRW5kcG9pbnQob3B0aW9ucyksCiAgICB9OwogICAgUHJvbWlzZS5yZXNvbHZlKCkKICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jb25uZWN0KHJlcSwgY29ubmVjdE9wdHMpKQogICAgICAudGhlbihzb2NrZXQgPT4gewogICAgICAgIGlmIChzb2NrZXQgaW5zdGFuY2VvZiBodHRwLkFnZW50KSB7CiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGBhZGRSZXF1ZXN0KClgIGlzbid0IGRlZmluZWQgaW4gYEB0eXBlcy9ub2RlYAogICAgICAgICAgcmV0dXJuIHNvY2tldC5hZGRSZXF1ZXN0KHJlcSwgY29ubmVjdE9wdHMpOwogICAgICAgIH0KICAgICAgICB0aGlzW0lOVEVSTkFMXS5jdXJyZW50U29ja2V0ID0gc29ja2V0OwogICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgYGNyZWF0ZVNvY2tldCgpYCBpc24ndCBkZWZpbmVkIGluIGBAdHlwZXMvbm9kZWAKICAgICAgICBzdXBlci5jcmVhdGVTb2NrZXQocmVxLCBvcHRpb25zLCBjYik7CiAgICAgIH0sIGNiKTsKICB9CgogIGNyZWF0ZUNvbm5lY3Rpb24oKSB7CiAgICBjb25zdCBzb2NrZXQgPSB0aGlzW0lOVEVSTkFMXS5jdXJyZW50U29ja2V0OwogICAgdGhpc1tJTlRFUk5BTF0uY3VycmVudFNvY2tldCA9IHVuZGVmaW5lZDsKICAgIGlmICghc29ja2V0KSB7CiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc29ja2V0IHdhcyByZXR1cm5lZCBpbiB0aGUgYGNvbm5lY3QoKWAgZnVuY3Rpb24nKTsKICAgIH0KICAgIHJldHVybiBzb2NrZXQ7CiAgfQoKICBnZXQgZGVmYXVsdFBvcnQoKSB7CiAgICByZXR1cm4gX251bGxpc2hDb2FsZXNjZSQyKHRoaXNbSU5URVJOQUxdLmRlZmF1bHRQb3J0LCAoKSA9PiAoICh0aGlzLnByb3RvY29sID09PSAnaHR0cHM6JyA/IDQ0MyA6IDgwKSkpOwogIH0KCiAgc2V0IGRlZmF1bHRQb3J0KHYpIHsKICAgIGlmICh0aGlzW0lOVEVSTkFMXSkgewogICAgICB0aGlzW0lOVEVSTkFMXS5kZWZhdWx0UG9ydCA9IHY7CiAgICB9CiAgfQoKICBnZXQgcHJvdG9jb2woKSB7CiAgICByZXR1cm4gX251bGxpc2hDb2FsZXNjZSQyKHRoaXNbSU5URVJOQUxdLnByb3RvY29sLCAoKSA9PiAoICh0aGlzLmlzU2VjdXJlRW5kcG9pbnQoKSA/ICdodHRwczonIDogJ2h0dHA6JykpKTsKICB9CgogIHNldCBwcm90b2NvbCh2KSB7CiAgICBpZiAodGhpc1tJTlRFUk5BTF0pIHsKICAgICAgdGhpc1tJTlRFUk5BTF0ucHJvdG9jb2wgPSB2OwogICAgfQogIH0KfQoKZnVuY3Rpb24gZGVidWckMSguLi5hcmdzKSB7CiAgbG9nZ2VyLmxvZygnW2h0dHBzLXByb3h5LWFnZW50OnBhcnNlLXByb3h5LXJlc3BvbnNlXScsIC4uLmFyZ3MpOwp9CgpmdW5jdGlvbiBwYXJzZVByb3h5UmVzcG9uc2Uoc29ja2V0KSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsKICAgIC8vIHdlIG5lZWQgdG8gYnVmZmVyIGFueSBIVFRQIHRyYWZmaWMgdGhhdCBoYXBwZW5zIHdpdGggdGhlIHByb3h5IGJlZm9yZSB3ZSBnZXQKICAgIC8vIHRoZSBDT05ORUNUIHJlc3BvbnNlLCBzbyB0aGF0IGlmIHRoZSByZXNwb25zZSBpcyBhbnl0aGluZyBvdGhlciB0aGFuIGFuICIyMDAiCiAgICAvLyByZXNwb25zZSBjb2RlLCB0aGVuIHdlIGNhbiByZS1wbGF5IHRoZSAiZGF0YSIgZXZlbnRzIG9uIHRoZSBzb2NrZXQgb25jZSB0aGUKICAgIC8vIEhUVFAgcGFyc2VyIGlzIGhvb2tlZCB1cC4uLgogICAgbGV0IGJ1ZmZlcnNMZW5ndGggPSAwOwogICAgY29uc3QgYnVmZmVycyA9IFtdOwoKICAgIGZ1bmN0aW9uIHJlYWQoKSB7CiAgICAgIGNvbnN0IGIgPSBzb2NrZXQucmVhZCgpOwogICAgICBpZiAoYikgb25kYXRhKGIpOwogICAgICBlbHNlIHNvY2tldC5vbmNlKCdyZWFkYWJsZScsIHJlYWQpOwogICAgfQoKICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7CiAgICAgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25lbmQpOwogICAgICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7CiAgICAgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcigncmVhZGFibGUnLCByZWFkKTsKICAgIH0KCiAgICBmdW5jdGlvbiBvbmVuZCgpIHsKICAgICAgY2xlYW51cCgpOwogICAgICBkZWJ1ZyQxKCdvbmVuZCcpOwogICAgICByZWplY3QobmV3IEVycm9yKCdQcm94eSBjb25uZWN0aW9uIGVuZGVkIGJlZm9yZSByZWNlaXZpbmcgQ09OTkVDVCByZXNwb25zZScpKTsKICAgIH0KCiAgICBmdW5jdGlvbiBvbmVycm9yKGVycikgewogICAgICBjbGVhbnVwKCk7CiAgICAgIGRlYnVnJDEoJ29uZXJyb3IgJW8nLCBlcnIpOwogICAgICByZWplY3QoZXJyKTsKICAgIH0KCiAgICBmdW5jdGlvbiBvbmRhdGEoYikgewogICAgICBidWZmZXJzLnB1c2goYik7CiAgICAgIGJ1ZmZlcnNMZW5ndGggKz0gYi5sZW5ndGg7CgogICAgICBjb25zdCBidWZmZXJlZCA9IEJ1ZmZlci5jb25jYXQoYnVmZmVycywgYnVmZmVyc0xlbmd0aCk7CiAgICAgIGNvbnN0IGVuZE9mSGVhZGVycyA9IGJ1ZmZlcmVkLmluZGV4T2YoJ1xyXG5cclxuJyk7CgogICAgICBpZiAoZW5kT2ZIZWFkZXJzID09PSAtMSkgewogICAgICAgIC8vIGtlZXAgYnVmZmVyaW5nCiAgICAgICAgZGVidWckMSgnaGF2ZSBub3QgcmVjZWl2ZWQgZW5kIG9mIEhUVFAgaGVhZGVycyB5ZXQuLi4nKTsKICAgICAgICByZWFkKCk7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBjb25zdCBoZWFkZXJQYXJ0cyA9IGJ1ZmZlcmVkLnNsaWNlKDAsIGVuZE9mSGVhZGVycykudG9TdHJpbmcoJ2FzY2lpJykuc3BsaXQoJ1xyXG4nKTsKICAgICAgY29uc3QgZmlyc3RMaW5lID0gaGVhZGVyUGFydHMuc2hpZnQoKTsKICAgICAgaWYgKCFmaXJzdExpbmUpIHsKICAgICAgICBzb2NrZXQuZGVzdHJveSgpOwogICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKCdObyBoZWFkZXIgcmVjZWl2ZWQgZnJvbSBwcm94eSBDT05ORUNUIHJlc3BvbnNlJykpOwogICAgICB9CiAgICAgIGNvbnN0IGZpcnN0TGluZVBhcnRzID0gZmlyc3RMaW5lLnNwbGl0KCcgJyk7CiAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSArZmlyc3RMaW5lUGFydHNbMV07CiAgICAgIGNvbnN0IHN0YXR1c1RleHQgPSBmaXJzdExpbmVQYXJ0cy5zbGljZSgyKS5qb2luKCcgJyk7CiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTsKICAgICAgZm9yIChjb25zdCBoZWFkZXIgb2YgaGVhZGVyUGFydHMpIHsKICAgICAgICBpZiAoIWhlYWRlcikgY29udGludWU7CiAgICAgICAgY29uc3QgZmlyc3RDb2xvbiA9IGhlYWRlci5pbmRleE9mKCc6Jyk7CiAgICAgICAgaWYgKGZpcnN0Q29sb24gPT09IC0xKSB7CiAgICAgICAgICBzb2NrZXQuZGVzdHJveSgpOwogICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYEludmFsaWQgaGVhZGVyIGZyb20gcHJveHkgQ09OTkVDVCByZXNwb25zZTogIiR7aGVhZGVyfSJgKSk7CiAgICAgICAgfQogICAgICAgIGNvbnN0IGtleSA9IGhlYWRlci5zbGljZSgwLCBmaXJzdENvbG9uKS50b0xvd2VyQ2FzZSgpOwogICAgICAgIGNvbnN0IHZhbHVlID0gaGVhZGVyLnNsaWNlKGZpcnN0Q29sb24gKyAxKS50cmltU3RhcnQoKTsKICAgICAgICBjb25zdCBjdXJyZW50ID0gaGVhZGVyc1trZXldOwogICAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gJ3N0cmluZycpIHsKICAgICAgICAgIGhlYWRlcnNba2V5XSA9IFtjdXJyZW50LCB2YWx1ZV07CiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7CiAgICAgICAgICBjdXJyZW50LnB1c2godmFsdWUpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBoZWFkZXJzW2tleV0gPSB2YWx1ZTsKICAgICAgICB9CiAgICAgIH0KICAgICAgZGVidWckMSgnZ290IHByb3h5IHNlcnZlciByZXNwb25zZTogJW8gJW8nLCBmaXJzdExpbmUsIGhlYWRlcnMpOwogICAgICBjbGVhbnVwKCk7CiAgICAgIHJlc29sdmUoewogICAgICAgIGNvbm5lY3Q6IHsKICAgICAgICAgIHN0YXR1c0NvZGUsCiAgICAgICAgICBzdGF0dXNUZXh0LAogICAgICAgICAgaGVhZGVycywKICAgICAgICB9LAogICAgICAgIGJ1ZmZlcmVkLAogICAgICB9KTsKICAgIH0KCiAgICBzb2NrZXQub24oJ2Vycm9yJywgb25lcnJvcik7CiAgICBzb2NrZXQub24oJ2VuZCcsIG9uZW5kKTsKCiAgICByZWFkKCk7CiAgfSk7Cn0KCmZ1bmN0aW9uIF9udWxsaXNoQ29hbGVzY2UkMShsaHMsIHJoc0ZuKSB7IGlmIChsaHMgIT0gbnVsbCkgeyByZXR1cm4gbGhzOyB9IGVsc2UgeyByZXR1cm4gcmhzRm4oKTsgfSB9IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluJDEob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH0KCmZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHsKICBsb2dnZXIubG9nKCdbaHR0cHMtcHJveHktYWdlbnRdJywgLi4uYXJncyk7Cn0KCi8qKgogKiBUaGUgYEh0dHBzUHJveHlBZ2VudGAgaW1wbGVtZW50cyBhbiBIVFRQIEFnZW50IHN1YmNsYXNzIHRoYXQgY29ubmVjdHMgdG8KICogdGhlIHNwZWNpZmllZCAiSFRUUChzKSBwcm94eSBzZXJ2ZXIiIGluIG9yZGVyIHRvIHByb3h5IEhUVFBTIHJlcXVlc3RzLgogKgogKiBPdXRnb2luZyBIVFRQIHJlcXVlc3RzIGFyZSBmaXJzdCB0dW5uZWxlZCB0aHJvdWdoIHRoZSBwcm94eSBzZXJ2ZXIgdXNpbmcgdGhlCiAqIGBDT05ORUNUYCBIVFRQIHJlcXVlc3QgbWV0aG9kIHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gdGhlIHByb3h5IHNlcnZlciwKICogYW5kIHRoZW4gdGhlIHByb3h5IHNlcnZlciBjb25uZWN0cyB0byB0aGUgZGVzdGluYXRpb24gdGFyZ2V0IGFuZCBpc3N1ZXMgdGhlCiAqIEhUVFAgcmVxdWVzdCBmcm9tIHRoZSBwcm94eSBzZXJ2ZXIuCiAqCiAqIGBodHRwczpgIHJlcXVlc3RzIGhhdmUgdGhlaXIgc29ja2V0IGNvbm5lY3Rpb24gdXBncmFkZWQgdG8gVExTIG9uY2UKICogdGhlIGNvbm5lY3Rpb24gdG8gdGhlIHByb3h5IHNlcnZlciBoYXMgYmVlbiBlc3RhYmxpc2hlZC4KICovCmNsYXNzIEh0dHBzUHJveHlBZ2VudCBleHRlbmRzIEFnZW50IHsKICBzdGF0aWMgX19pbml0U3RhdGljKCkge3RoaXMucHJvdG9jb2xzID0gWydodHRwJywgJ2h0dHBzJ107IH0KCiAgY29uc3RydWN0b3IocHJveHksIG9wdHMpIHsKICAgIHN1cGVyKG9wdHMpOwogICAgdGhpcy5vcHRpb25zID0ge307CiAgICB0aGlzLnByb3h5ID0gdHlwZW9mIHByb3h5ID09PSAnc3RyaW5nJyA/IG5ldyBVUkwocHJveHkpIDogcHJveHk7CiAgICB0aGlzLnByb3h5SGVhZGVycyA9IF9udWxsaXNoQ29hbGVzY2UkMShfb3B0aW9uYWxDaGFpbiQxKFtvcHRzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMi5oZWFkZXJzXSksICgpID0+ICgge30pKTsKICAgIGRlYnVnKCdDcmVhdGluZyBuZXcgSHR0cHNQcm94eUFnZW50IGluc3RhbmNlOiAlbycsIHRoaXMucHJveHkuaHJlZik7CgogICAgLy8gVHJpbSBvZmYgdGhlIGJyYWNrZXRzIGZyb20gSVB2NiBhZGRyZXNzZXMKICAgIGNvbnN0IGhvc3QgPSAodGhpcy5wcm94eS5ob3N0bmFtZSB8fCB0aGlzLnByb3h5Lmhvc3QpLnJlcGxhY2UoL15cW3xcXSQvZywgJycpOwogICAgY29uc3QgcG9ydCA9IHRoaXMucHJveHkucG9ydCA/IHBhcnNlSW50KHRoaXMucHJveHkucG9ydCwgMTApIDogdGhpcy5wcm94eS5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyA0NDMgOiA4MDsKICAgIHRoaXMuY29ubmVjdE9wdHMgPSB7CiAgICAgIC8vIEF0dGVtcHQgdG8gbmVnb3RpYXRlIGh0dHAvMS4xIGZvciBwcm94eSBzZXJ2ZXJzIHRoYXQgc3VwcG9ydCBodHRwLzIKICAgICAgQUxQTlByb3RvY29sczogWydodHRwLzEuMSddLAogICAgICAuLi4ob3B0cyA/IG9taXQob3B0cywgJ2hlYWRlcnMnKSA6IG51bGwpLAogICAgICBob3N0LAogICAgICBwb3J0LAogICAgfTsKICB9CgogIC8qKgogICAqIENhbGxlZCB3aGVuIHRoZSBub2RlLWNvcmUgSFRUUCBjbGllbnQgbGlicmFyeSBpcyBjcmVhdGluZyBhCiAgICogbmV3IEhUVFAgcmVxdWVzdC4KICAgKi8KICBhc3luYyBjb25uZWN0KHJlcSwgb3B0cykgewogICAgY29uc3QgeyBwcm94eSB9ID0gdGhpczsKCiAgICBpZiAoIW9wdHMuaG9zdCkgewogICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdObyAiaG9zdCIgcHJvdmlkZWQnKTsKICAgIH0KCiAgICAvLyBDcmVhdGUgYSBzb2NrZXQgY29ubmVjdGlvbiB0byB0aGUgcHJveHkgc2VydmVyLgogICAgbGV0IHNvY2tldDsKICAgIGlmIChwcm94eS5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHsKICAgICAgZGVidWcoJ0NyZWF0aW5nIGB0bHMuU29ja2V0YDogJW8nLCB0aGlzLmNvbm5lY3RPcHRzKTsKICAgICAgY29uc3Qgc2VydmVybmFtZSA9IHRoaXMuY29ubmVjdE9wdHMuc2VydmVybmFtZSB8fCB0aGlzLmNvbm5lY3RPcHRzLmhvc3Q7CiAgICAgIHNvY2tldCA9IHRscy5jb25uZWN0KHsKICAgICAgICAuLi50aGlzLmNvbm5lY3RPcHRzLAogICAgICAgIHNlcnZlcm5hbWU6IHNlcnZlcm5hbWUgJiYgbmV0LmlzSVAoc2VydmVybmFtZSkgPyB1bmRlZmluZWQgOiBzZXJ2ZXJuYW1lLAogICAgICB9KTsKICAgIH0gZWxzZSB7CiAgICAgIGRlYnVnKCdDcmVhdGluZyBgbmV0LlNvY2tldGA6ICVvJywgdGhpcy5jb25uZWN0T3B0cyk7CiAgICAgIHNvY2tldCA9IG5ldC5jb25uZWN0KHRoaXMuY29ubmVjdE9wdHMpOwogICAgfQoKICAgIGNvbnN0IGhlYWRlcnMgPQogICAgICB0eXBlb2YgdGhpcy5wcm94eUhlYWRlcnMgPT09ICdmdW5jdGlvbicgPyB0aGlzLnByb3h5SGVhZGVycygpIDogeyAuLi50aGlzLnByb3h5SGVhZGVycyB9OwogICAgY29uc3QgaG9zdCA9IG5ldC5pc0lQdjYob3B0cy5ob3N0KSA/IGBbJHtvcHRzLmhvc3R9XWAgOiBvcHRzLmhvc3Q7CiAgICBsZXQgcGF5bG9hZCA9IGBDT05ORUNUICR7aG9zdH06JHtvcHRzLnBvcnR9IEhUVFAvMS4xXHJcbmA7CgogICAgLy8gSW5qZWN0IHRoZSBgUHJveHktQXV0aG9yaXphdGlvbmAgaGVhZGVyIGlmIG5lY2Vzc2FyeS4KICAgIGlmIChwcm94eS51c2VybmFtZSB8fCBwcm94eS5wYXNzd29yZCkgewogICAgICBjb25zdCBhdXRoID0gYCR7ZGVjb2RlVVJJQ29tcG9uZW50KHByb3h5LnVzZXJuYW1lKX06JHtkZWNvZGVVUklDb21wb25lbnQocHJveHkucGFzc3dvcmQpfWA7CiAgICAgIGhlYWRlcnNbJ1Byb3h5LUF1dGhvcml6YXRpb24nXSA9IGBCYXNpYyAke0J1ZmZlci5mcm9tKGF1dGgpLnRvU3RyaW5nKCdiYXNlNjQnKX1gOwogICAgfQoKICAgIGhlYWRlcnMuSG9zdCA9IGAke2hvc3R9OiR7b3B0cy5wb3J0fWA7CgogICAgaWYgKCFoZWFkZXJzWydQcm94eS1Db25uZWN0aW9uJ10pIHsKICAgICAgaGVhZGVyc1snUHJveHktQ29ubmVjdGlvbiddID0gdGhpcy5rZWVwQWxpdmUgPyAnS2VlcC1BbGl2ZScgOiAnY2xvc2UnOwogICAgfQogICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpKSB7CiAgICAgIHBheWxvYWQgKz0gYCR7bmFtZX06ICR7aGVhZGVyc1tuYW1lXX1cclxuYDsKICAgIH0KCiAgICBjb25zdCBwcm94eVJlc3BvbnNlUHJvbWlzZSA9IHBhcnNlUHJveHlSZXNwb25zZShzb2NrZXQpOwoKICAgIHNvY2tldC53cml0ZShgJHtwYXlsb2FkfVxyXG5gKTsKCiAgICBjb25zdCB7IGNvbm5lY3QsIGJ1ZmZlcmVkIH0gPSBhd2FpdCBwcm94eVJlc3BvbnNlUHJvbWlzZTsKICAgIHJlcS5lbWl0KCdwcm94eUNvbm5lY3QnLCBjb25uZWN0KTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQKICAgIC8vIEB0cy1pZ25vcmUgTm90IEV2ZW50RW1pdHRlciBpbiBOb2RlIHR5cGVzCiAgICB0aGlzLmVtaXQoJ3Byb3h5Q29ubmVjdCcsIGNvbm5lY3QsIHJlcSk7CgogICAgaWYgKGNvbm5lY3Quc3RhdHVzQ29kZSA9PT0gMjAwKSB7CiAgICAgIHJlcS5vbmNlKCdzb2NrZXQnLCByZXN1bWUpOwoKICAgICAgaWYgKG9wdHMuc2VjdXJlRW5kcG9pbnQpIHsKICAgICAgICAvLyBUaGUgcHJveHkgaXMgY29ubmVjdGluZyB0byBhIFRMUyBzZXJ2ZXIsIHNvIHVwZ3JhZGUKICAgICAgICAvLyB0aGlzIHNvY2tldCBjb25uZWN0aW9uIHRvIGEgVExTIGNvbm5lY3Rpb24uCiAgICAgICAgZGVidWcoJ1VwZ3JhZGluZyBzb2NrZXQgY29ubmVjdGlvbiB0byBUTFMnKTsKICAgICAgICBjb25zdCBzZXJ2ZXJuYW1lID0gb3B0cy5zZXJ2ZXJuYW1lIHx8IG9wdHMuaG9zdDsKICAgICAgICByZXR1cm4gdGxzLmNvbm5lY3QoewogICAgICAgICAgLi4ub21pdChvcHRzLCAnaG9zdCcsICdwYXRoJywgJ3BvcnQnKSwKICAgICAgICAgIHNvY2tldCwKICAgICAgICAgIHNlcnZlcm5hbWU6IG5ldC5pc0lQKHNlcnZlcm5hbWUpID8gdW5kZWZpbmVkIDogc2VydmVybmFtZSwKICAgICAgICB9KTsKICAgICAgfQoKICAgICAgcmV0dXJuIHNvY2tldDsKICAgIH0KCiAgICAvLyBTb21lIG90aGVyIHN0YXR1cyBjb2RlIHRoYXQncyBub3QgMjAwLi4uIG5lZWQgdG8gcmUtcGxheSB0aGUgSFRUUAogICAgLy8gaGVhZGVyICJkYXRhIiBldmVudHMgb250byB0aGUgc29ja2V0IG9uY2UgdGhlIEhUVFAgbWFjaGluZXJ5IGlzCiAgICAvLyBhdHRhY2hlZCBzbyB0aGF0IHRoZSBub2RlIGNvcmUgYGh0dHBgIGNhbiBwYXJzZSBhbmQgaGFuZGxlIHRoZQogICAgLy8gZXJyb3Igc3RhdHVzIGNvZGUuCgogICAgLy8gQ2xvc2UgdGhlIG9yaWdpbmFsIHNvY2tldCwgYW5kIGEgbmV3ICJmYWtlIiBzb2NrZXQgaXMgcmV0dXJuZWQKICAgIC8vIGluc3RlYWQsIHNvIHRoYXQgdGhlIHByb3h5IGRvZXNuJ3QgZ2V0IHRoZSBIVFRQIHJlcXVlc3QKICAgIC8vIHdyaXR0ZW4gdG8gaXQgKHdoaWNoIG1heSBjb250YWluIGBBdXRob3JpemF0aW9uYCBoZWFkZXJzIG9yIG90aGVyCiAgICAvLyBzZW5zaXRpdmUgZGF0YSkuCiAgICAvLwogICAgLy8gU2VlOiBodHRwczovL2hhY2tlcm9uZS5jb20vcmVwb3J0cy81NDE1MDIKICAgIHNvY2tldC5kZXN0cm95KCk7CgogICAgY29uc3QgZmFrZVNvY2tldCA9IG5ldyBuZXQuU29ja2V0KHsgd3JpdGFibGU6IGZhbHNlIH0pOwogICAgZmFrZVNvY2tldC5yZWFkYWJsZSA9IHRydWU7CgogICAgLy8gTmVlZCB0byB3YWl0IGZvciB0aGUgInNvY2tldCIgZXZlbnQgdG8gcmUtcGxheSB0aGUgImRhdGEiIGV2ZW50cy4KICAgIHJlcS5vbmNlKCdzb2NrZXQnLCAocykgPT4gewogICAgICBkZWJ1ZygnUmVwbGF5aW5nIHByb3h5IGJ1ZmZlciBmb3IgZmFpbGVkIHJlcXVlc3QnKTsKICAgICAgLy8gUmVwbGF5IHRoZSAiYnVmZmVyZWQiIEJ1ZmZlciBvbnRvIHRoZSBmYWtlIGBzb2NrZXRgLCBzaW5jZSBhdAogICAgICAvLyB0aGlzIHBvaW50IHRoZSBIVFRQIG1vZHVsZSBtYWNoaW5lcnkgaGFzIGJlZW4gaG9va2VkIHVwIGZvcgogICAgICAvLyB0aGUgdXNlci4KICAgICAgcy5wdXNoKGJ1ZmZlcmVkKTsKICAgICAgcy5wdXNoKG51bGwpOwogICAgfSk7CgogICAgcmV0dXJuIGZha2VTb2NrZXQ7CiAgfQp9IEh0dHBzUHJveHlBZ2VudC5fX2luaXRTdGF0aWMoKTsKCmZ1bmN0aW9uIHJlc3VtZShzb2NrZXQpIHsKICBzb2NrZXQucmVzdW1lKCk7Cn0KCmZ1bmN0aW9uIG9taXQoCiAgb2JqLAogIC4uLmtleXMKKQoKIHsKICBjb25zdCByZXQgPSB7fQoKOwogIGxldCBrZXk7CiAgZm9yIChrZXkgaW4gb2JqKSB7CiAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkgewogICAgICByZXRba2V5XSA9IG9ialtrZXldOwogICAgfQogIH0KICByZXR1cm4gcmV0Owp9CgpmdW5jdGlvbiBfbnVsbGlzaENvYWxlc2NlKGxocywgcmhzRm4pIHsgaWYgKGxocyAhPSBudWxsKSB7IHJldHVybiBsaHM7IH0gZWxzZSB7IHJldHVybiByaHNGbigpOyB9IH0KLy8gRXN0aW1hdGVkIG1heGltdW0gc2l6ZSBmb3IgcmVhc29uYWJsZSBzdGFuZGFsb25lIGV2ZW50CmNvbnN0IEdaSVBfVEhSRVNIT0xEID0gMTAyNCAqIDMyOwoKLyoqCiAqIEdldHMgYSBzdHJlYW0gZnJvbSBhIFVpbnQ4QXJyYXkgb3Igc3RyaW5nCiAqIFJlYWRhYmxlLmZyb20gaXMgaWRlYWwgYnV0IHdhcyBhZGRlZCBpbiBub2RlLmpzIHYxMi4zLjAgYW5kIHYxMC4xNy4wCiAqLwpmdW5jdGlvbiBzdHJlYW1Gcm9tQm9keShib2R5KSB7CiAgcmV0dXJuIG5ldyBSZWFkYWJsZSh7CiAgICByZWFkKCkgewogICAgICB0aGlzLnB1c2goYm9keSk7CiAgICAgIHRoaXMucHVzaChudWxsKTsKICAgIH0sCiAgfSk7Cn0KCi8qKgogKiBDcmVhdGVzIGEgVHJhbnNwb3J0IHRoYXQgdXNlcyBuYXRpdmUgdGhlIG5hdGl2ZSAnaHR0cCcgYW5kICdodHRwcycgbW9kdWxlcyB0byBzZW5kIGV2ZW50cyB0byBTZW50cnkuCiAqLwpmdW5jdGlvbiBtYWtlTm9kZVRyYW5zcG9ydChvcHRpb25zKSB7CiAgbGV0IHVybFNlZ21lbnRzOwoKICB0cnkgewogICAgdXJsU2VnbWVudHMgPSBuZXcgVVJMKG9wdGlvbnMudXJsKTsKICB9IGNhdGNoIChlKSB7CiAgICBjb25zb2xlU2FuZGJveCgoKSA9PiB7CiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlCiAgICAgIGNvbnNvbGUud2FybigKICAgICAgICAnW0BzZW50cnkvbm9kZV06IEludmFsaWQgZHNuIG9yIHR1bm5lbCBvcHRpb24sIHdpbGwgbm90IHNlbmQgYW55IGV2ZW50cy4gVGhlIHR1bm5lbCBvcHRpb24gbXVzdCBiZSBhIGZ1bGwgVVJMIHdoZW4gdXNlZC4nLAogICAgICApOwogICAgfSk7CiAgICByZXR1cm4gY3JlYXRlVHJhbnNwb3J0KG9wdGlvbnMsICgpID0+IFByb21pc2UucmVzb2x2ZSh7fSkpOwogIH0KCiAgY29uc3QgaXNIdHRwcyA9IHVybFNlZ21lbnRzLnByb3RvY29sID09PSAnaHR0cHM6JzsKCiAgLy8gUHJveHkgcHJpb3JpdGl6YXRpb246IGh0dHAgPT4gYG9wdGlvbnMucHJveHlgIHwgYHByb2Nlc3MuZW52Lmh0dHBfcHJveHlgCiAgLy8gUHJveHkgcHJpb3JpdGl6YXRpb246IGh0dHBzID0+IGBvcHRpb25zLnByb3h5YCB8IGBwcm9jZXNzLmVudi5odHRwc19wcm94eWAgfCBgcHJvY2Vzcy5lbnYuaHR0cF9wcm94eWAKICBjb25zdCBwcm94eSA9IGFwcGx5Tm9Qcm94eU9wdGlvbigKICAgIHVybFNlZ21lbnRzLAogICAgb3B0aW9ucy5wcm94eSB8fCAoaXNIdHRwcyA/IHByb2Nlc3MuZW52Lmh0dHBzX3Byb3h5IDogdW5kZWZpbmVkKSB8fCBwcm9jZXNzLmVudi5odHRwX3Byb3h5LAogICk7CgogIGNvbnN0IG5hdGl2ZUh0dHBNb2R1bGUgPSBpc0h0dHBzID8gaHR0cHMgOiBodHRwOwogIGNvbnN0IGtlZXBBbGl2ZSA9IG9wdGlvbnMua2VlcEFsaXZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IG9wdGlvbnMua2VlcEFsaXZlOwoKICAvLyBUT0RPKHY3KTogRXZhbHVhdGUgaWYgd2UgY2FuIHNldCBrZWVwQWxpdmUgdG8gdHJ1ZS4gVGhpcyB3b3VsZCBpbnZvbHZlIHRlc3RpbmcgZm9yIG1lbW9yeSBsZWFrcyBpbiBvbGRlciBub2RlCiAgLy8gdmVyc2lvbnMoPj0gOCkgYXMgdGhleSBoYWQgbWVtb3J5IGxlYWtzIHdoZW4gdXNpbmcgaXQ6ICMyNTU1CiAgY29uc3QgYWdlbnQgPSBwcm94eQogICAgPyAobmV3IEh0dHBzUHJveHlBZ2VudChwcm94eSkgKQogICAgOiBuZXcgbmF0aXZlSHR0cE1vZHVsZS5BZ2VudCh7IGtlZXBBbGl2ZSwgbWF4U29ja2V0czogMzAsIHRpbWVvdXQ6IDIwMDAgfSk7CgogIGNvbnN0IHJlcXVlc3RFeGVjdXRvciA9IGNyZWF0ZVJlcXVlc3RFeGVjdXRvcihvcHRpb25zLCBfbnVsbGlzaENvYWxlc2NlKG9wdGlvbnMuaHR0cE1vZHVsZSwgKCkgPT4gKCBuYXRpdmVIdHRwTW9kdWxlKSksIGFnZW50KTsKICByZXR1cm4gY3JlYXRlVHJhbnNwb3J0KG9wdGlvbnMsIHJlcXVlc3RFeGVjdXRvcik7Cn0KCi8qKgogKiBIb25vcnMgdGhlIGBub19wcm94eWAgZW52IHZhcmlhYmxlIHdpdGggdGhlIGhpZ2hlc3QgcHJpb3JpdHkgdG8gYWxsb3cgZm9yIGhvc3RzIGV4Y2x1c2lvbi4KICoKICogQHBhcmFtIHRyYW5zcG9ydFVybCBUaGUgVVJMIHRoZSB0cmFuc3BvcnQgaW50ZW5kcyB0byBzZW5kIGV2ZW50cyB0by4KICogQHBhcmFtIHByb3h5IFRoZSBjbGllbnQgY29uZmlndXJlZCBwcm94eS4KICogQHJldHVybnMgQSBwcm94eSB0aGUgdHJhbnNwb3J0IHNob3VsZCB1c2UuCiAqLwpmdW5jdGlvbiBhcHBseU5vUHJveHlPcHRpb24odHJhbnNwb3J0VXJsU2VnbWVudHMsIHByb3h5KSB7CiAgY29uc3QgeyBub19wcm94eSB9ID0gcHJvY2Vzcy5lbnY7CgogIGNvbnN0IHVybElzRXhlbXB0RnJvbVByb3h5ID0KICAgIG5vX3Byb3h5ICYmCiAgICBub19wcm94eQogICAgICAuc3BsaXQoJywnKQogICAgICAuc29tZSgKICAgICAgICBleGVtcHRpb24gPT4gdHJhbnNwb3J0VXJsU2VnbWVudHMuaG9zdC5lbmRzV2l0aChleGVtcHRpb24pIHx8IHRyYW5zcG9ydFVybFNlZ21lbnRzLmhvc3RuYW1lLmVuZHNXaXRoKGV4ZW1wdGlvbiksCiAgICAgICk7CgogIGlmICh1cmxJc0V4ZW1wdEZyb21Qcm94eSkgewogICAgcmV0dXJuIHVuZGVmaW5lZDsKICB9IGVsc2UgewogICAgcmV0dXJuIHByb3h5OwogIH0KfQoKLyoqCiAqIENyZWF0ZXMgYSBSZXF1ZXN0RXhlY3V0b3IgdG8gYmUgdXNlZCB3aXRoIGBjcmVhdGVUcmFuc3BvcnRgLgogKi8KZnVuY3Rpb24gY3JlYXRlUmVxdWVzdEV4ZWN1dG9yKAogIG9wdGlvbnMsCiAgaHR0cE1vZHVsZSwKICBhZ2VudCwKKSB7CiAgY29uc3QgeyBob3N0bmFtZSwgcGF0aG5hbWUsIHBvcnQsIHByb3RvY29sLCBzZWFyY2ggfSA9IG5ldyBVUkwob3B0aW9ucy51cmwpOwogIHJldHVybiBmdW5jdGlvbiBtYWtlUmVxdWVzdChyZXF1ZXN0KSB7CiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gewogICAgICBsZXQgYm9keSA9IHN0cmVhbUZyb21Cb2R5KHJlcXVlc3QuYm9keSk7CgogICAgICBjb25zdCBoZWFkZXJzID0geyAuLi5vcHRpb25zLmhlYWRlcnMgfTsKCiAgICAgIGlmIChyZXF1ZXN0LmJvZHkubGVuZ3RoID4gR1pJUF9USFJFU0hPTEQpIHsKICAgICAgICBoZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ10gPSAnZ3ppcCc7CiAgICAgICAgYm9keSA9IGJvZHkucGlwZShjcmVhdGVHemlwKCkpOwogICAgICB9CgogICAgICBjb25zdCByZXEgPSBodHRwTW9kdWxlLnJlcXVlc3QoCiAgICAgICAgewogICAgICAgICAgbWV0aG9kOiAnUE9TVCcsCiAgICAgICAgICBhZ2VudCwKICAgICAgICAgIGhlYWRlcnMsCiAgICAgICAgICBob3N0bmFtZSwKICAgICAgICAgIHBhdGg6IGAke3BhdGhuYW1lfSR7c2VhcmNofWAsCiAgICAgICAgICBwb3J0LAogICAgICAgICAgcHJvdG9jb2wsCiAgICAgICAgICBjYTogb3B0aW9ucy5jYUNlcnRzLAogICAgICAgIH0sCiAgICAgICAgcmVzID0+IHsKICAgICAgICAgIHJlcy5vbignZGF0YScsICgpID0+IHsKICAgICAgICAgICAgLy8gRHJhaW4gc29ja2V0CiAgICAgICAgICB9KTsKCiAgICAgICAgICByZXMub24oJ2VuZCcsICgpID0+IHsKICAgICAgICAgICAgLy8gRHJhaW4gc29ja2V0CiAgICAgICAgICB9KTsKCiAgICAgICAgICByZXMuc2V0RW5jb2RpbmcoJ3V0ZjgnKTsKCiAgICAgICAgICAvLyAiS2V5LXZhbHVlIHBhaXJzIG9mIGhlYWRlciBuYW1lcyBhbmQgdmFsdWVzLiBIZWFkZXIgbmFtZXMgYXJlIGxvd2VyLWNhc2VkLiIKICAgICAgICAgIC8vIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzCiAgICAgICAgICBjb25zdCByZXRyeUFmdGVySGVhZGVyID0gX251bGxpc2hDb2FsZXNjZShyZXMuaGVhZGVyc1sncmV0cnktYWZ0ZXInXSwgKCkgPT4gKCBudWxsKSk7CiAgICAgICAgICBjb25zdCByYXRlTGltaXRzSGVhZGVyID0gX251bGxpc2hDb2FsZXNjZShyZXMuaGVhZGVyc1sneC1zZW50cnktcmF0ZS1saW1pdHMnXSwgKCkgPT4gKCBudWxsKSk7CgogICAgICAgICAgcmVzb2x2ZSh7CiAgICAgICAgICAgIHN0YXR1c0NvZGU6IHJlcy5zdGF0dXNDb2RlLAogICAgICAgICAgICBoZWFkZXJzOiB7CiAgICAgICAgICAgICAgJ3JldHJ5LWFmdGVyJzogcmV0cnlBZnRlckhlYWRlciwKICAgICAgICAgICAgICAneC1zZW50cnktcmF0ZS1saW1pdHMnOiBBcnJheS5pc0FycmF5KHJhdGVMaW1pdHNIZWFkZXIpID8gcmF0ZUxpbWl0c0hlYWRlclswXSA6IHJhdGVMaW1pdHNIZWFkZXIsCiAgICAgICAgICAgIH0sCiAgICAgICAgICB9KTsKICAgICAgICB9LAogICAgICApOwoKICAgICAgcmVxLm9uKCdlcnJvcicsIHJlamVjdCk7CiAgICAgIGJvZHkucGlwZShyZXEpOwogICAgfSk7CiAgfTsKfQoKZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH0KY29uc3Qgb3B0aW9ucyA9IHdvcmtlckRhdGE7CmxldCBzZXNzaW9uOwpsZXQgaGFzU2VudEFuckV2ZW50ID0gZmFsc2U7CgpmdW5jdGlvbiBsb2cobXNnKSB7CiAgaWYgKG9wdGlvbnMuZGVidWcpIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlCiAgICBjb25zb2xlLmxvZyhgW0FOUiBXb3JrZXJdICR7bXNnfWApOwogIH0KfQoKY29uc3QgdXJsID0gZ2V0RW52ZWxvcGVFbmRwb2ludFdpdGhVcmxFbmNvZGVkQXV0aChvcHRpb25zLmRzbik7CmNvbnN0IHRyYW5zcG9ydCA9IG1ha2VOb2RlVHJhbnNwb3J0KHsKICB1cmwsCiAgcmVjb3JkRHJvcHBlZEV2ZW50OiAoKSA9PiB7CiAgICAvLwogIH0sCn0pOwoKYXN5bmMgZnVuY3Rpb24gc2VuZEFibm9ybWFsU2Vzc2lvbigpIHsKICAvLyBvZiB3ZSBoYXZlIGFuIGV4aXN0aW5nIHNlc3Npb24gcGFzc2VkIGZyb20gdGhlIG1haW4gdGhyZWFkLCBzZW5kIGl0IGFzIGFibm9ybWFsCiAgaWYgKHNlc3Npb24pIHsKICAgIGxvZygnU2VuZGluZyBhYm5vcm1hbCBzZXNzaW9uJyk7CiAgICB1cGRhdGVTZXNzaW9uKHNlc3Npb24sIHsgc3RhdHVzOiAnYWJub3JtYWwnLCBhYm5vcm1hbF9tZWNoYW5pc206ICdhbnJfZm9yZWdyb3VuZCcgfSk7CgogICAgY29uc3QgZW52ZWxvcGUgPSBjcmVhdGVTZXNzaW9uRW52ZWxvcGUoc2Vzc2lvbiwgb3B0aW9ucy5kc24sIG9wdGlvbnMuc2RrTWV0YWRhdGEpOwogICAgLy8gTG9nIHRoZSBlbnZlbG9wZSBzbyB0byBhaWQgaW4gdGVzdGluZwogICAgbG9nKEpTT04uc3RyaW5naWZ5KGVudmVsb3BlKSk7CgogICAgYXdhaXQgdHJhbnNwb3J0LnNlbmQoZW52ZWxvcGUpOwoKICAgIHRyeSB7CiAgICAgIC8vIE5vdGlmeSB0aGUgbWFpbiBwcm9jZXNzIHRoYXQgdGhlIHNlc3Npb24gaGFzIGVuZGVkIHNvIHRoZSBzZXNzaW9uIGNhbiBiZSBjbGVhcmVkIGZyb20gdGhlIHNjb3BlCiAgICAgIF9vcHRpb25hbENoYWluKFtwYXJlbnRQb3J0LCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMi5wb3N0TWVzc2FnZSwgJ2NhbGwnLCBfMyA9PiBfMygnc2Vzc2lvbi1lbmRlZCcpXSk7CiAgICB9IGNhdGNoIChfKSB7CiAgICAgIC8vIGlnbm9yZQogICAgfQogIH0KfQoKbG9nKCdTdGFydGVkJyk7CgpmdW5jdGlvbiBwcmVwYXJlU3RhY2tGcmFtZXMoc3RhY2tGcmFtZXMpIHsKICBpZiAoIXN0YWNrRnJhbWVzKSB7CiAgICByZXR1cm4gdW5kZWZpbmVkOwogIH0KCiAgLy8gU3RyaXAgU2VudHJ5IGZyYW1lcyBhbmQgcmV2ZXJzZSB0aGUgc3RhY2sgZnJhbWVzIHNvIHRoZXkgYXJlIGluIHRoZSBjb3JyZWN0IG9yZGVyCiAgY29uc3Qgc3RyaXBwZWRGcmFtZXMgPSBzdHJpcFNlbnRyeUZyYW1lc0FuZFJldmVyc2Uoc3RhY2tGcmFtZXMpOwoKICAvLyBJZiB3ZSBoYXZlIGFuIGFwcCByb290IHBhdGgsIHJld3JpdGUgdGhlIGZpbGVuYW1lcyB0byBiZSByZWxhdGl2ZSB0byB0aGUgYXBwIHJvb3QKICBpZiAob3B0aW9ucy5hcHBSb290UGF0aCkgewogICAgZm9yIChjb25zdCBmcmFtZSBvZiBzdHJpcHBlZEZyYW1lcykgewogICAgICBpZiAoIWZyYW1lLmZpbGVuYW1lKSB7CiAgICAgICAgY29udGludWU7CiAgICAgIH0KCiAgICAgIGZyYW1lLmZpbGVuYW1lID0gbm9ybWFsaXplVXJsVG9CYXNlKGZyYW1lLmZpbGVuYW1lLCBvcHRpb25zLmFwcFJvb3RQYXRoKTsKICAgIH0KICB9CgogIHJldHVybiBzdHJpcHBlZEZyYW1lczsKfQoKZnVuY3Rpb24gYXBwbHlTY29wZVRvRXZlbnQoZXZlbnQsIHNjb3BlKSB7CiAgYXBwbHlTY29wZURhdGFUb0V2ZW50KGV2ZW50LCBzY29wZSk7CgogIGlmICghX29wdGlvbmFsQ2hhaW4oW2V2ZW50LCAnYWNjZXNzJywgXzQgPT4gXzQuY29udGV4dHMsICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81LnRyYWNlXSkpIHsKICAgIGNvbnN0IHsgdHJhY2VJZCwgc3BhbklkLCBwYXJlbnRTcGFuSWQgfSA9IHNjb3BlLnByb3BhZ2F0aW9uQ29udGV4dDsKICAgIGV2ZW50LmNvbnRleHRzID0gewogICAgICB0cmFjZTogewogICAgICAgIHRyYWNlX2lkOiB0cmFjZUlkLAogICAgICAgIHNwYW5faWQ6IHNwYW5JZCwKICAgICAgICBwYXJlbnRfc3Bhbl9pZDogcGFyZW50U3BhbklkLAogICAgICB9LAogICAgICAuLi5ldmVudC5jb250ZXh0cywKICAgIH07CiAgfQp9Cgphc3luYyBmdW5jdGlvbiBzZW5kQW5yRXZlbnQoZnJhbWVzLCBzY29wZSkgewogIGlmIChoYXNTZW50QW5yRXZlbnQpIHsKICAgIHJldHVybjsKICB9CgogIGhhc1NlbnRBbnJFdmVudCA9IHRydWU7CgogIGF3YWl0IHNlbmRBYm5vcm1hbFNlc3Npb24oKTsKCiAgbG9nKCdTZW5kaW5nIGV2ZW50Jyk7CgogIGNvbnN0IGV2ZW50ID0gewogICAgZXZlbnRfaWQ6IHV1aWQ0KCksCiAgICBjb250ZXh0czogb3B0aW9ucy5jb250ZXh0cywKICAgIHJlbGVhc2U6IG9wdGlvbnMucmVsZWFzZSwKICAgIGVudmlyb25tZW50OiBvcHRpb25zLmVudmlyb25tZW50LAogICAgZGlzdDogb3B0aW9ucy5kaXN0LAogICAgcGxhdGZvcm06ICdub2RlJywKICAgIGxldmVsOiAnZXJyb3InLAogICAgZXhjZXB0aW9uOiB7CiAgICAgIHZhbHVlczogWwogICAgICAgIHsKICAgICAgICAgIHR5cGU6ICdBcHBsaWNhdGlvbk5vdFJlc3BvbmRpbmcnLAogICAgICAgICAgdmFsdWU6IGBBcHBsaWNhdGlvbiBOb3QgUmVzcG9uZGluZyBmb3IgYXQgbGVhc3QgJHtvcHRpb25zLmFuclRocmVzaG9sZH0gbXNgLAogICAgICAgICAgc3RhY2t0cmFjZTogeyBmcmFtZXM6IHByZXBhcmVTdGFja0ZyYW1lcyhmcmFtZXMpIH0sCiAgICAgICAgICAvLyBUaGlzIGVuc3VyZXMgdGhlIFVJIGRvZXNuJ3Qgc2F5ICdDcmFzaGVkIGluJyBmb3IgdGhlIHN0YWNrIHRyYWNlCiAgICAgICAgICBtZWNoYW5pc206IHsgdHlwZTogJ0FOUicgfSwKICAgICAgICB9LAogICAgICBdLAogICAgfSwKICAgIHRhZ3M6IG9wdGlvbnMuc3RhdGljVGFncywKICB9OwoKICBpZiAoc2NvcGUpIHsKICAgIGFwcGx5U2NvcGVUb0V2ZW50KGV2ZW50LCBzY29wZSk7CiAgfQoKICBjb25zdCBlbnZlbG9wZSA9IGNyZWF0ZUV2ZW50RW52ZWxvcGUoZXZlbnQsIG9wdGlvbnMuZHNuLCBvcHRpb25zLnNka01ldGFkYXRhKTsKICAvLyBMb2cgdGhlIGVudmVsb3BlIHRvIGFpZCBpbiB0ZXN0aW5nCiAgbG9nKEpTT04uc3RyaW5naWZ5KGVudmVsb3BlKSk7CgogIGF3YWl0IHRyYW5zcG9ydC5zZW5kKGVudmVsb3BlKTsKICBhd2FpdCB0cmFuc3BvcnQuZmx1c2goMjAwMCk7CgogIC8vIERlbGF5IGZvciA1IHNlY29uZHMgc28gdGhhdCBzdGRpbyBjYW4gZmx1c2ggaW4gdGhlIG1haW4gZXZlbnQgbG9vcCBldmVyIHJlc3RhcnRzLgogIC8vIFRoaXMgaXMgbWFpbmx5IGZvciB0aGUgYmVuZWZpdCBvZiBsb2dnaW5nL2RlYnVnZ2luZyBpc3N1ZXMuCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBwcm9jZXNzLmV4aXQoMCk7CiAgfSwgNTAwMCk7Cn0KCmxldCBkZWJ1Z2dlclBhdXNlOwoKaWYgKG9wdGlvbnMuY2FwdHVyZVN0YWNrVHJhY2UpIHsKICBsb2coJ0Nvbm5lY3RpbmcgdG8gZGVidWdnZXInKTsKCiAgY29uc3Qgc2Vzc2lvbiA9IG5ldyBTZXNzaW9uKCkgOwogIHNlc3Npb24uY29ubmVjdFRvTWFpblRocmVhZCgpOwoKICBsb2coJ0Nvbm5lY3RlZCB0byBkZWJ1Z2dlcicpOwoKICAvLyBDb2xsZWN0IHNjcmlwdElkIC0+IHVybCBtYXAgc28gd2UgY2FuIGxvb2sgdXAgdGhlIGZpbGVuYW1lcyBsYXRlcgogIGNvbnN0IHNjcmlwdHMgPSBuZXcgTWFwKCk7CgogIHNlc3Npb24ub24oJ0RlYnVnZ2VyLnNjcmlwdFBhcnNlZCcsIGV2ZW50ID0+IHsKICAgIHNjcmlwdHMuc2V0KGV2ZW50LnBhcmFtcy5zY3JpcHRJZCwgZXZlbnQucGFyYW1zLnVybCk7CiAgfSk7CgogIHNlc3Npb24ub24oJ0RlYnVnZ2VyLnBhdXNlZCcsIGV2ZW50ID0+IHsKICAgIGlmIChldmVudC5wYXJhbXMucmVhc29uICE9PSAnb3RoZXInKSB7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICB0cnkgewogICAgICBsb2coJ0RlYnVnZ2VyIHBhdXNlZCcpOwoKICAgICAgLy8gY29weSB0aGUgZnJhbWVzCiAgICAgIGNvbnN0IGNhbGxGcmFtZXMgPSBbLi4uZXZlbnQucGFyYW1zLmNhbGxGcmFtZXNdOwoKICAgICAgY29uc3QgZ2V0TW9kdWxlTmFtZSA9IG9wdGlvbnMuYXBwUm9vdFBhdGggPyBjcmVhdGVHZXRNb2R1bGVGcm9tRmlsZW5hbWUob3B0aW9ucy5hcHBSb290UGF0aCkgOiAoKSA9PiB1bmRlZmluZWQ7CiAgICAgIGNvbnN0IHN0YWNrRnJhbWVzID0gY2FsbEZyYW1lcy5tYXAoZnJhbWUgPT4KICAgICAgICBjYWxsRnJhbWVUb1N0YWNrRnJhbWUoZnJhbWUsIHNjcmlwdHMuZ2V0KGZyYW1lLmxvY2F0aW9uLnNjcmlwdElkKSwgZ2V0TW9kdWxlTmFtZSksCiAgICAgICk7CgogICAgICAvLyBFdmFsdWF0ZSBhIHNjcmlwdCBpbiB0aGUgY3VycmVudGx5IHBhdXNlZCBjb250ZXh0CiAgICAgIHNlc3Npb24ucG9zdCgKICAgICAgICAnUnVudGltZS5ldmFsdWF0ZScsCiAgICAgICAgewogICAgICAgICAgLy8gR3JhYiB0aGUgdHJhY2UgY29udGV4dCBmcm9tIHRoZSBjdXJyZW50IHNjb3BlCiAgICAgICAgICBleHByZXNzaW9uOiAnZ2xvYmFsLl9fU0VOVFJZX0dFVF9TQ09QRVNfXygpOycsCiAgICAgICAgICAvLyBEb24ndCByZS10cmlnZ2VyIHRoZSBkZWJ1Z2dlciBpZiB0aGlzIGNhdXNlcyBhbiBlcnJvcgogICAgICAgICAgc2lsZW50OiB0cnVlLAogICAgICAgICAgLy8gU2VyaWFsaXplIHRoZSByZXN1bHQgdG8ganNvbiBvdGhlcndpc2Ugb25seSBwcmltaXRpdmVzIGFyZSBzdXBwb3J0ZWQKICAgICAgICAgIHJldHVybkJ5VmFsdWU6IHRydWUsCiAgICAgICAgfSwKICAgICAgICAoZXJyLCBwYXJhbSkgPT4gewogICAgICAgICAgaWYgKGVycikgewogICAgICAgICAgICBsb2coYEVycm9yIGV4ZWN1dGluZyBzY3JpcHQ6ICcke2Vyci5tZXNzYWdlfSdgKTsKICAgICAgICAgIH0KCiAgICAgICAgICBjb25zdCBzY29wZXMgPSBwYXJhbSAmJiBwYXJhbS5yZXN1bHQgPyAocGFyYW0ucmVzdWx0LnZhbHVlICkgOiB1bmRlZmluZWQ7CgogICAgICAgICAgc2Vzc2lvbi5wb3N0KCdEZWJ1Z2dlci5yZXN1bWUnKTsKICAgICAgICAgIHNlc3Npb24ucG9zdCgnRGVidWdnZXIuZGlzYWJsZScpOwoKICAgICAgICAgIHNlbmRBbnJFdmVudChzdGFja0ZyYW1lcywgc2NvcGVzKS50aGVuKG51bGwsICgpID0+IHsKICAgICAgICAgICAgbG9nKCdTZW5kaW5nIEFOUiBldmVudCBmYWlsZWQuJyk7CiAgICAgICAgICB9KTsKICAgICAgICB9LAogICAgICApOwogICAgfSBjYXRjaCAoZSkgewogICAgICBzZXNzaW9uLnBvc3QoJ0RlYnVnZ2VyLnJlc3VtZScpOwogICAgICBzZXNzaW9uLnBvc3QoJ0RlYnVnZ2VyLmRpc2FibGUnKTsKICAgICAgdGhyb3cgZTsKICAgIH0KICB9KTsKCiAgZGVidWdnZXJQYXVzZSA9ICgpID0+IHsKICAgIHRyeSB7CiAgICAgIHNlc3Npb24ucG9zdCgnRGVidWdnZXIuZW5hYmxlJywgKCkgPT4gewogICAgICAgIHNlc3Npb24ucG9zdCgnRGVidWdnZXIucGF1c2UnKTsKICAgICAgfSk7CiAgICB9IGNhdGNoIChfKSB7CiAgICAgIC8vCiAgICB9CiAgfTsKfQoKZnVuY3Rpb24gY3JlYXRlSHJUaW1lcigpIHsKICAvLyBUT0RPICh2OCk6IFdlIGNhbiB1c2UgcHJvY2Vzcy5ocnRpbWUuYmlnaW50KCkgYWZ0ZXIgd2UgZHJvcCBub2RlIHY4CiAgbGV0IGxhc3RQb2xsID0gcHJvY2Vzcy5ocnRpbWUoKTsKCiAgcmV0dXJuIHsKICAgIGdldFRpbWVNczogKCkgPT4gewogICAgICBjb25zdCBbc2Vjb25kcywgbmFub1NlY29uZHNdID0gcHJvY2Vzcy5ocnRpbWUobGFzdFBvbGwpOwogICAgICByZXR1cm4gTWF0aC5mbG9vcihzZWNvbmRzICogMWUzICsgbmFub1NlY29uZHMgLyAxZTYpOwogICAgfSwKICAgIHJlc2V0OiAoKSA9PiB7CiAgICAgIGxhc3RQb2xsID0gcHJvY2Vzcy5ocnRpbWUoKTsKICAgIH0sCiAgfTsKfQoKZnVuY3Rpb24gd2F0Y2hkb2dUaW1lb3V0KCkgewogIGxvZygnV2F0Y2hkb2cgdGltZW91dCcpOwoKICBpZiAoZGVidWdnZXJQYXVzZSkgewogICAgbG9nKCdQYXVzaW5nIGRlYnVnZ2VyIHRvIGNhcHR1cmUgc3RhY2sgdHJhY2UnKTsKICAgIGRlYnVnZ2VyUGF1c2UoKTsKICB9IGVsc2UgewogICAgbG9nKCdDYXB0dXJpbmcgZXZlbnQgd2l0aG91dCBhIHN0YWNrIHRyYWNlJyk7CiAgICBzZW5kQW5yRXZlbnQoKS50aGVuKG51bGwsICgpID0+IHsKICAgICAgbG9nKCdTZW5kaW5nIEFOUiBldmVudCBmYWlsZWQgb24gd2F0Y2hkb2cgdGltZW91dC4nKTsKICAgIH0pOwogIH0KfQoKY29uc3QgeyBwb2xsIH0gPSB3YXRjaGRvZ1RpbWVyKGNyZWF0ZUhyVGltZXIsIG9wdGlvbnMucG9sbEludGVydmFsLCBvcHRpb25zLmFuclRocmVzaG9sZCwgd2F0Y2hkb2dUaW1lb3V0KTsKCl9vcHRpb25hbENoYWluKFtwYXJlbnRQb3J0LCAnb3B0aW9uYWxBY2Nlc3MnLCBfNiA9PiBfNi5vbiwgJ2NhbGwnLCBfNyA9PiBfNygnbWVzc2FnZScsIChtc2cpID0+IHsKICBpZiAobXNnLnNlc3Npb24pIHsKICAgIHNlc3Npb24gPSBtYWtlU2Vzc2lvbihtc2cuc2Vzc2lvbik7CiAgfQoKICBwb2xsKCk7Cn0pXSk7";
});
var Sz1 = U((Ze0, Ge0) => {
  var { _optionalChain: ZlQ, _optionalChainDelete: Ae0 } = LA();
  Object.defineProperty(Ze0, "__esModule", { value: !0 });
  var GlQ = X1("url"),
    $T = y9(),
    jz1 = LA(),
    sa1 = Wg(),
    YlQ = et0(),
    IlQ = 50,
    WlQ = 5000;
  function ra1(A, ...B) {
    jz1.logger.log(`[ANR] ${A}`, ...B);
  }
  function JlQ() {
    return jz1.GLOBAL_OBJ;
  }
  function XlQ() {
    let A = $T.getGlobalScope().getScopeData();
    return (
      $T.mergeScopeData(A, $T.getIsolationScope().getScopeData()),
      $T.mergeScopeData(A, $T.getCurrentScope().getScopeData()),
      (A.attachments = []),
      (A.eventProcessors = []),
      A
    );
  }
  function FlQ() {
    return jz1.dynamicRequire(Ge0, "worker_threads");
  }
  async function VlQ(A) {
    let B = { message: "ANR" },
      Q = {};
    for (let Z of A.getEventProcessors()) {
      if (B === null) break;
      B = await Z(B, Q);
    }
    return ZlQ([B, "optionalAccess", (Z) => Z.contexts]) || {};
  }
  var Be0 = "Anr",
    KlQ = (A = {}) => {
      if (sa1.NODE_VERSION.major < 16 || (sa1.NODE_VERSION.major === 16 && sa1.NODE_VERSION.minor < 17))
        throw new Error("ANR detection requires Node 16.17.0 or later");
      let B,
        Q,
        Z = JlQ();
      return (
        (Z.__SENTRY_GET_SCOPES__ = XlQ),
        {
          name: Be0,
          setupOnce() {},
          startWorker: () => {
            if (B) return;
            if (Q) B = zlQ(Q, A);
          },
          stopWorker: () => {
            if (B)
              B.then((G) => {
                (G(), (B = void 0));
              });
          },
          setup(G) {
            ((Q = G), setImmediate(() => this.startWorker()));
          },
        }
      );
    },
    Qe0 = $T.defineIntegration(KlQ),
    HlQ = $T.convertIntegrationFnToClass(Be0, Qe0);
  async function zlQ(A, B) {
    let Q = A.getDsn();
    if (!Q) return () => {};
    let Z = await VlQ(A);
    (Ae0([Z, "access", (F) => F.app, "optionalAccess", (F) => delete F.app_memory]),
      Ae0([Z, "access", (F) => F.device, "optionalAccess", (F) => delete F.free_memory]));
    let G = A.getOptions(),
      Y = A.getSdkMetadata() || {};
    if (Y.sdk) Y.sdk.integrations = G.integrations.map((F) => F.name);
    let I = {
      debug: jz1.logger.isEnabled(),
      dsn: Q,
      environment: G.environment || "production",
      release: G.release,
      dist: G.dist,
      sdkMetadata: Y,
      appRootPath: B.appRootPath,
      pollInterval: B.pollInterval || IlQ,
      anrThreshold: B.anrThreshold || WlQ,
      captureStackTrace: !!B.captureStackTrace,
      staticTags: B.staticTags || {},
      contexts: Z,
    };
    if (I.captureStackTrace) {
      let F = X1("inspector");
      if (!F.url()) F.open(0);
    }
    let { Worker: W } = FlQ(),
      J = new W(new GlQ.URL(`data:application/javascript;base64,${YlQ.base64WorkerScript}`), { workerData: I });
    process.on("exit", () => {
      J.terminate();
    });
    let X = setInterval(() => {
      try {
        let F = $T.getCurrentScope().getSession(),
          V = F ? { ...F, toJSON: void 0 } : void 0;
        J.postMessage({ session: V });
      } catch (F) {}
    }, I.pollInterval);
    return (
      X.unref(),
      J.on("message", (F) => {
        if (F === "session-ended")
          (ra1("ANR event sent from ANR worker. Clearing session in this thread."),
            $T.getCurrentScope().setSession(void 0));
      }),
      J.once("error", (F) => {
        (clearInterval(X), ra1("ANR worker error", F));
      }),
      J.once("exit", (F) => {
        (clearInterval(X), ra1("ANR worker exit", F));
      }),
      J.unref(),
      () => {
        (J.terminate(), clearInterval(X));
      }
    );
  }
  Ze0.Anr = HlQ;
  Ze0.anrIntegration = Qe0;
});
var Ie0 = U((Ye0) => {
  Object.defineProperty(Ye0, "__esModule", { value: !0 });
  var UlQ = y9(),
    $lQ = Sz1();
  function wlQ(A) {
    let B = UlQ.getClient();
    return (new $lQ.Anr(A).setup(B), Promise.resolve());
  }
  Ye0.enableAnrDetection = wlQ;
});
var oa1 = U((Xe0) => {
  var { _optionalChain: We0 } = LA();
  Object.defineProperty(Xe0, "__esModule", { value: !0 });
  var pi = y9(),
    Je0 = LA();
  function ElQ(A = {}) {
    return function ({ path: B, type: Q, next: Z, rawInput: G }) {
      let Y = We0([pi.getClient, "call", (X) => X(), "optionalAccess", (X) => X.getOptions, "call", (X) => X()]),
        I = pi.getCurrentScope().getTransaction();
      if (I) {
        (I.updateName(`trpc/${B}`),
          I.setAttribute(pi.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route"),
          (I.op = "rpc.server"));
        let X = { procedure_type: Q };
        if (A.attachRpcInput !== void 0 ? A.attachRpcInput : We0([Y, "optionalAccess", (F) => F.sendDefaultPii]))
          X.input = Je0.normalize(G);
        I.setContext("trpc", X);
      }
      function W(X) {
        if (!X.ok) pi.captureException(X.error, { mechanism: { handled: !1, data: { function: "trpcMiddleware" } } });
      }
      let J;
      try {
        J = Z();
      } catch (X) {
        throw (pi.captureException(X, { mechanism: { handled: !1, data: { function: "trpcMiddleware" } } }), X);
      }
      if (Je0.isThenable(J))
        Promise.resolve(J).then(
          (X) => {
            W(X);
          },
          (X) => {
            pi.captureException(X, { mechanism: { handled: !1, data: { function: "trpcMiddleware" } } });
          },
        );
      else W(J);
      return J;
    };
  }
  Xe0.trpcMiddleware = ElQ;
});
var Ke0 = U((Ve0) => {
  Object.defineProperty(Ve0, "__esModule", { value: !0 });
  var Fe0 = LA();
  function LlQ(A, B) {
    return Fe0.extractRequestData(A, { include: B });
  }
  function MlQ(A, B, Q = {}) {
    return Fe0.addRequestDataToEvent(A, B, { include: Q });
  }
  Ve0.extractRequestData = LlQ;
  Ve0.parseRequest = MlQ;
});
var De0 = U((ze0) => {
  var { _optionalChain: yz1 } = LA();
  Object.defineProperty(ze0, "__esModule", { value: !0 });
  var fW = y9(),
    ii = LA(),
    TlQ = L91(),
    kz1 = na1(),
    PlQ = oa1(),
    He0 = Ke0();
  function jlQ() {
    return function A(B, Q, Z) {
      let G = yz1([fW.getClient, "call", (F) => F(), "optionalAccess", (F) => F.getOptions, "call", (F) => F()]);
      if (
        !G ||
        G.instrumenter !== "sentry" ||
        yz1([B, "access", (F) => F.method, "optionalAccess", (F) => F.toUpperCase, "call", (F) => F()]) === "OPTIONS" ||
        yz1([B, "access", (F) => F.method, "optionalAccess", (F) => F.toUpperCase, "call", (F) => F()]) === "HEAD"
      )
        return Z();
      let Y = B.headers && ii.isString(B.headers["sentry-trace"]) ? B.headers["sentry-trace"] : void 0,
        I = yz1([B, "access", (F) => F.headers, "optionalAccess", (F) => F.baggage]);
      if (!fW.hasTracingEnabled(G)) return Z();
      let [W, J] = ii.extractPathForTransaction(B, { path: !0, method: !0 }),
        X = fW.continueTrace({ sentryTrace: Y, baggage: I }, (F) =>
          fW.startTransaction(
            {
              name: W,
              op: "http.server",
              origin: "auto.http.node.tracingHandler",
              ...F,
              data: { [fW.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: J },
              metadata: { ...F.metadata, request: B },
            },
            { request: ii.extractRequestData(B) },
          ),
        );
      (fW.getCurrentScope().setSpan(X),
        (Q.__sentry_transaction = X),
        Q.once("finish", () => {
          setImmediate(() => {
            (ii.addRequestDataToTransaction(X, B), fW.setHttpStatus(X, Q.statusCode), X.end());
          });
        }),
        Z());
    };
  }
  function SlQ(A = {}) {
    let B;
    if ("include" in A) B = { include: A.include };
    else {
      let { ip: Q, request: Z, transaction: G, user: Y } = A;
      if (Q || Z || G || Y) B = { include: ii.dropUndefinedKeys({ ip: Q, request: Z, transaction: G, user: Y }) };
    }
    return B;
  }
  function ylQ(A) {
    let B = SlQ(A),
      Q = fW.getClient();
    if (Q && kz1.isAutoSessionTrackingEnabled(Q)) {
      Q.initSessionFlusher();
      let Z = fW.getCurrentScope();
      if (Z.getSession()) Z.setSession();
    }
    return function Z(G, Y, I) {
      if (A && A.flushTimeout && A.flushTimeout > 0) {
        let W = Y.end;
        Y.end = function (J, X, F) {
          fW.flush(A.flushTimeout)
            .then(() => {
              W.call(this, J, X, F);
            })
            .then(null, (V) => {
              (TlQ.DEBUG_BUILD && ii.logger.error(V), W.call(this, J, X, F));
            });
        };
      }
      fW.runWithAsyncContext(() => {
        let W = fW.getCurrentScope();
        W.setSDKProcessingMetadata({ request: G, requestDataOptionsFromExpressHandler: B });
        let J = fW.getClient();
        if (kz1.isAutoSessionTrackingEnabled(J)) W.setRequestSession({ status: "ok" });
        (Y.once("finish", () => {
          let X = fW.getClient();
          if (kz1.isAutoSessionTrackingEnabled(X))
            setImmediate(() => {
              if (X && X._captureRequestSession) X._captureRequestSession();
            });
        }),
          I());
      });
    };
  }
  function klQ(A) {
    let B = A.status || A.statusCode || A.status_code || (A.output && A.output.statusCode);
    return B ? parseInt(B, 10) : 500;
  }
  function _lQ(A) {
    return klQ(A) >= 500;
  }
  function xlQ(A) {
    return function B(Q, Z, G, Y) {
      if (((A && A.shouldHandleError) || _lQ)(Q)) {
        fW.withScope((W) => {
          W.setSDKProcessingMetadata({ request: Z });
          let J = G.__sentry_transaction;
          if (J && !fW.getActiveSpan()) W.setSpan(J);
          let X = fW.getClient();
          if (X && kz1.isAutoSessionTrackingEnabled(X)) {
            if (X._sessionFlusher !== void 0) {
              let K = W.getRequestSession();
              if (K && K.status !== void 0) K.status = "crashed";
            }
          }
          let F = fW.captureException(Q, { mechanism: { type: "middleware", handled: !1 } });
          ((G.sentry = F), Y(Q));
        });
        return;
      }
      Y(Q);
    };
  }
  var vlQ = PlQ.trpcMiddleware;
  ze0.extractRequestData = He0.extractRequestData;
  ze0.parseRequest = He0.parseRequest;
  ze0.errorHandler = xlQ;
  ze0.requestHandler = ylQ;
  ze0.tracingHandler = jlQ;
  ze0.trpcMiddleware = vlQ;
});
var ta1 = U((Ne0) => {
  Object.defineProperty(Ne0, "__esModule", { value: !0 });
  var oK = y9(),
    Ue0 = LA();
  function Ce0(A) {
    return A && A.statusCode !== void 0;
  }
  function dlQ(A) {
    return A && A.error !== void 0;
  }
  function clQ(A) {
    oK.captureException(A, { mechanism: { type: "hapi", handled: !1, data: { function: "hapiErrorPlugin" } } });
  }
  var $e0 = {
      name: "SentryHapiErrorPlugin",
      version: oK.SDK_VERSION,
      register: async function (A) {
        A.events.on("request", (Q, Z) => {
          let G = oK.getActiveTransaction();
          if (dlQ(Z)) clQ(Z.error);
          if (G) (G.setStatus("internal_error"), G.end());
        });
      },
    },
    we0 = {
      name: "SentryHapiTracingPlugin",
      version: oK.SDK_VERSION,
      register: async function (A) {
        let B = A;
        (B.ext("onPreHandler", (Q, Z) => {
          let G = oK.continueTrace(
            { sentryTrace: Q.headers["sentry-trace"] || void 0, baggage: Q.headers.baggage || void 0 },
            (Y) => {
              return oK.startTransaction({
                ...Y,
                op: "hapi.request",
                name: Q.route.path,
                description: `${Q.route.method} ${Q.path}`,
              });
            },
          );
          return (oK.getCurrentScope().setSpan(G), Z.continue);
        }),
          B.ext("onPreResponse", (Q, Z) => {
            let G = oK.getActiveTransaction();
            if (Q.response && Ce0(Q.response) && G) {
              let Y = Q.response;
              Y.header("sentry-trace", oK.spanToTraceHeader(G));
              let I = Ue0.dynamicSamplingContextToSentryBaggageHeader(oK.getDynamicSamplingContextFromSpan(G));
              if (I) Y.header("baggage", I);
            }
            return Z.continue;
          }),
          B.ext("onPostHandler", (Q, Z) => {
            let G = oK.getActiveTransaction();
            if (G) {
              if (Q.response && Ce0(Q.response)) oK.setHttpStatus(G, Q.response.statusCode);
              G.end();
            }
            return Z.continue;
          }));
      },
    },
    qe0 = "Hapi",
    llQ = (A = {}) => {
      let B = A.server;
      return {
        name: qe0,
        setupOnce() {
          if (!B) return;
          Ue0.fill(B, "start", (Q) => {
            return async function () {
              return (await this.register(we0), await this.register($e0), Q.apply(this));
            };
          });
        },
      };
    },
    Ee0 = oK.defineIntegration(llQ),
    plQ = oK.convertIntegrationFnToClass(qe0, Ee0);
  Ne0.Hapi = plQ;
  Ne0.hapiErrorPlugin = $e0;
  Ne0.hapiIntegration = Ee0;
  Ne0.hapiTracingPlugin = we0;
});
var Me0 = U((Le0) => {
  Object.defineProperty(Le0, "__esModule", { value: !0 });
  var rlQ = Vz1(),
    olQ = Dz1(),
    tlQ = Nz1(),
    elQ = Mz1(),
    ApQ = wz1(),
    BpQ = zz1(),
    QpQ = Kz1(),
    ZpQ = y9(),
    GpQ = $z1(),
    YpQ = Tz1(),
    IpQ = Oz1(),
    WpQ = Sz1(),
    JpQ = ta1();
  Le0.Console = rlQ.Console;
  Le0.Http = olQ.Http;
  Le0.OnUncaughtException = tlQ.OnUncaughtException;
  Le0.OnUnhandledRejection = elQ.OnUnhandledRejection;
  Le0.Modules = ApQ.Modules;
  Le0.ContextLines = BpQ.ContextLines;
  Le0.Context = QpQ.Context;
  Le0.RequestData = ZpQ.RequestData;
  Le0.LocalVariables = GpQ.LocalVariables;
  Le0.Undici = YpQ.Undici;
  Le0.Spotlight = IpQ.Spotlight;
  Le0.Anr = WpQ.Anr;
  Le0.Hapi = JpQ.Hapi;
});
var Re0 = U((Oe0) => {
  Object.defineProperty(Oe0, "__esModule", { value: !0 });
  var Hg = Sa1();
  Oe0.Apollo = Hg.Apollo;
  Oe0.Express = Hg.Express;
  Oe0.GraphQL = Hg.GraphQL;
  Oe0.Mongo = Hg.Mongo;
  Oe0.Mysql = Hg.Mysql;
  Oe0.Postgres = Hg.Postgres;
  Oe0.Prisma = Hg.Prisma;
});
var Se0 = U((je0) => {
  Object.defineProperty(je0, "__esModule", { value: !0 });
  var zg = y9(),
    Dg = LA(),
    Te0 = "CaptureConsole",
    jpQ = (A = {}) => {
      let B = A.levels || Dg.CONSOLE_LEVELS;
      return {
        name: Te0,
        setupOnce() {},
        setup(Q) {
          if (!("console" in Dg.GLOBAL_OBJ)) return;
          Dg.addConsoleInstrumentationHandler(({ args: Z, level: G }) => {
            if (zg.getClient() !== Q || !B.includes(G)) return;
            ypQ(Z, G);
          });
        },
      };
    },
    Pe0 = zg.defineIntegration(jpQ),
    SpQ = zg.convertIntegrationFnToClass(Te0, Pe0);
  function ypQ(A, B) {
    let Q = { level: Dg.severityLevelFromString(B), extra: { arguments: A } };
    zg.withScope((Z) => {
      if (
        (Z.addEventProcessor((I) => {
          return ((I.logger = "console"), Dg.addExceptionMechanism(I, { handled: !1, type: "console" }), I);
        }),
        B === "assert" && A[0] === !1)
      ) {
        let I = `Assertion failed: ${Dg.safeJoin(A.slice(1), " ") || "console.assert"}`;
        (Z.setExtra("arguments", A.slice(1)), zg.captureMessage(I, Q));
        return;
      }
      let G = A.find((I) => I instanceof Error);
      if (B === "error" && G) {
        zg.captureException(G, Q);
        return;
      }
      let Y = Dg.safeJoin(A, " ");
      zg.captureMessage(Y, Q);
    });
  }
  je0.CaptureConsole = SpQ;
  je0.captureConsoleIntegration = Pe0;
});
var ve0 = U((xe0) => {
  Object.defineProperty(xe0, "__esModule", { value: !0 });
  var ye0 = y9(),
    xpQ = LA(),
    ke0 = "Debug",
    vpQ = (A = {}) => {
      let B = { debugger: !1, stringify: !1, ...A };
      return {
        name: ke0,
        setupOnce() {},
        setup(Q) {
          if (!Q.on) return;
          Q.on("beforeSendEvent", (Z, G) => {
            if (B.debugger) debugger;
            xpQ.consoleSandbox(() => {
              if (B.stringify) {
                if ((console.log(JSON.stringify(Z, null, 2)), G && Object.keys(G).length))
                  console.log(JSON.stringify(G, null, 2));
              } else if ((console.log(Z), G && Object.keys(G).length)) console.log(G);
            });
          });
        },