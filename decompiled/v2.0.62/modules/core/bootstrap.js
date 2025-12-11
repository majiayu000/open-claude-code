/**
 * Claude Code v2.0.62 - 启动引导代码
 *
 * 原始位置: 行 1 - 5000
 * 模块: core/bootstrap
 */

#!/usr/bin/env node

// (c) Anthropic PBC. All rights reserved. Use is subject to Anthropic's Commercial Terms of Service (https://www.anthropic.com/legal/commercial-terms).

// Version: 1.0.119

// Want to see the unminified source? We're hiring!
// https://job-boards.greenhouse.io/anthropic/jobs/4816199008

import { createRequire as X6Q } from "node:module";
var Y6Q = Object.create;
var { getPrototypeOf: I6Q, defineProperty: Bl1, getOwnPropertyNames: W6Q } = Object;
var J6Q = Object.prototype.hasOwnProperty;
var A1 = (A, B, Q) => {
  Q = A != null ? Y6Q(I6Q(A)) : {};
  let Z = B || !A || !A.__esModule ? Bl1(Q, "default", { value: A, enumerable: !0 }) : Q;
  for (let G of W6Q(A)) if (!J6Q.call(Z, G)) Bl1(Z, G, { get: () => A[G], enumerable: !0 });
  return Z;
};
var U = (A, B) => () => (B || A((B = { exports: {} }).exports, B), B.exports);
var Oh = (A, B) => {
  for (var Q in B) Bl1(A, Q, { get: B[Q], enumerable: !0, configurable: !0, set: (Z) => (B[Q] = () => Z) });
};
var vF1 = (A, B) => () => (A && (B = A((A = 0))), B);
var X1 = X6Q(import.meta.url);
var V1 = U((O6Q) => {
  var aB1 = Symbol.for("react.element"),
    F6Q = Symbol.for("react.portal"),
    V6Q = Symbol.for("react.fragment"),
    K6Q = Symbol.for("react.strict_mode"),
    H6Q = Symbol.for("react.profiler"),
    z6Q = Symbol.for("react.provider"),
    D6Q = Symbol.for("react.context"),
    C6Q = Symbol.for("react.forward_ref"),
    U6Q = Symbol.for("react.suspense"),
    $6Q = Symbol.for("react.memo"),
    w6Q = Symbol.for("react.lazy"),
    j_0 = Symbol.iterator;
  function q6Q(A) {
    if (A === null || typeof A !== "object") return null;
    return ((A = (j_0 && A[j_0]) || A["@@iterator"]), typeof A === "function" ? A : null);
  }
  var k_0 = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    __0 = Object.assign,
    x_0 = {};
  function Cp(A, B, Q) {
    ((this.props = A), (this.context = B), (this.refs = x_0), (this.updater = Q || k_0));
  }
  Cp.prototype.isReactComponent = {};
  Cp.prototype.setState = function (A, B) {
    if (typeof A !== "object" && typeof A !== "function" && A != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, A, B, "setState");
  };
  Cp.prototype.forceUpdate = function (A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function v_0() {}
  v_0.prototype = Cp.prototype;
  function Zl1(A, B, Q) {
    ((this.props = A), (this.context = B), (this.refs = x_0), (this.updater = Q || k_0));
  }
  var Gl1 = (Zl1.prototype = new v_0());
  Gl1.constructor = Zl1;
  __0(Gl1, Cp.prototype);
  Gl1.isPureReactComponent = !0;
  var S_0 = Array.isArray,
    b_0 = Object.prototype.hasOwnProperty,
    Yl1 = { current: null },
    f_0 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h_0(A, B, Q) {
    var Z,
      G = {},
      Y = null,
      I = null;
    if (B != null)
      for (Z in (B.ref !== void 0 && (I = B.ref), B.key !== void 0 && (Y = "" + B.key), B))
        b_0.call(B, Z) && !f_0.hasOwnProperty(Z) && (G[Z] = B[Z]);
    var W = arguments.length - 2;
    if (W === 1) G.children = Q;
    else if (1 < W) {
      for (var J = Array(W), X = 0; X < W; X++) J[X] = arguments[X + 2];
      G.children = J;
    }
    if (A && A.defaultProps) for (Z in ((W = A.defaultProps), W)) G[Z] === void 0 && (G[Z] = W[Z]);
    return { $$typeof: aB1, type: A, key: Y, ref: I, props: G, _owner: Yl1.current };
  }
  function E6Q(A, B) {
    return { $$typeof: aB1, type: A.type, key: B, ref: A.ref, props: A.props, _owner: A._owner };
  }
  function Il1(A) {
    return typeof A === "object" && A !== null && A.$$typeof === aB1;
  }
  function N6Q(A) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (Q) {
        return B[Q];
      })
    );
  }
  var y_0 = /\/+/g;
  function Ql1(A, B) {
    return typeof A === "object" && A !== null && A.key != null ? N6Q("" + A.key) : B.toString(36);
  }
  function fF1(A, B, Q, Z, G) {
    var Y = typeof A;
    if (Y === "undefined" || Y === "boolean") A = null;
    var I = !1;
    if (A === null) I = !0;
    else
      switch (Y) {
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case aB1:
            case F6Q:
              I = !0;
          }
      }
    if (I)
      return (
        (I = A),
        (G = G(I)),
        (A = Z === "" ? "." + Ql1(I, 0) : Z),
        S_0(G)
          ? ((Q = ""),
            A != null && (Q = A.replace(y_0, "$&/") + "/"),
            fF1(G, B, Q, "", function (X) {
              return X;
            }))
          : G != null &&
            (Il1(G) &&
              (G = E6Q(G, Q + (!G.key || (I && I.key === G.key) ? "" : ("" + G.key).replace(y_0, "$&/") + "/") + A)),
            B.push(G)),
        1
      );
    if (((I = 0), (Z = Z === "" ? "." : Z + ":"), S_0(A)))
      for (var W = 0; W < A.length; W++) {
        Y = A[W];
        var J = Z + Ql1(Y, W);
        I += fF1(Y, B, Q, J, G);
      }
    else if (((J = q6Q(A)), typeof J === "function"))
      for (A = J.call(A), W = 0; !(Y = A.next()).done; )
        ((Y = Y.value), (J = Z + Ql1(Y, W++)), (I += fF1(Y, B, Q, J, G)));
    else if (Y === "object")
      throw (
        (B = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : B) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return I;
  }
  function bF1(A, B, Q) {
    if (A == null) return A;
    var Z = [],
      G = 0;
    return (
      fF1(A, Z, "", "", function (Y) {
        return B.call(Q, Y, G++);
      }),
      Z
    );
  }
  function L6Q(A) {
    if (A._status === -1) {
      var B = A._result;
      ((B = B()),
        B.then(
          function (Q) {
            if (A._status === 0 || A._status === -1) ((A._status = 1), (A._result = Q));
          },
          function (Q) {
            if (A._status === 0 || A._status === -1) ((A._status = 2), (A._result = Q));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = B)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var HV = { current: null },
    hF1 = { transition: null },
    M6Q = { ReactCurrentDispatcher: HV, ReactCurrentBatchConfig: hF1, ReactCurrentOwner: Yl1 };
  function g_0() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  O6Q.Children = {
    map: bF1,
    forEach: function (A, B, Q) {
      bF1(
        A,
        function () {
          B.apply(this, arguments);
        },
        Q,
      );
    },
    count: function (A) {
      var B = 0;
      return (
        bF1(A, function () {
          B++;
        }),
        B
      );
    },
    toArray: function (A) {
      return (
        bF1(A, function (B) {
          return B;
        }) || []
      );
    },
    only: function (A) {
      if (!Il1(A)) throw Error("React.Children.only expected to receive a single React element child.");
      return A;
    },
  };
  O6Q.Component = Cp;
  O6Q.Fragment = V6Q;
  O6Q.Profiler = H6Q;
  O6Q.PureComponent = Zl1;
  O6Q.StrictMode = K6Q;
  O6Q.Suspense = U6Q;
  O6Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M6Q;
  O6Q.act = g_0;
  O6Q.cloneElement = function (A, B, Q) {
    if (A === null || A === void 0)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
    var Z = __0({}, A.props),
      G = A.key,
      Y = A.ref,
      I = A._owner;
    if (B != null) {
      if (
        (B.ref !== void 0 && ((Y = B.ref), (I = Yl1.current)),
        B.key !== void 0 && (G = "" + B.key),
        A.type && A.type.defaultProps)
      )
        var W = A.type.defaultProps;
      for (J in B) b_0.call(B, J) && !f_0.hasOwnProperty(J) && (Z[J] = B[J] === void 0 && W !== void 0 ? W[J] : B[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) Z.children = Q;
    else if (1 < J) {
      W = Array(J);
      for (var X = 0; X < J; X++) W[X] = arguments[X + 2];
      Z.children = W;
    }
    return { $$typeof: aB1, type: A.type, key: G, ref: Y, props: Z, _owner: I };
  };
  O6Q.createContext = function (A) {
    return (
      (A = {
        $$typeof: D6Q,
        _currentValue: A,
        _currentValue2: A,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (A.Provider = { $$typeof: z6Q, _context: A }),
      (A.Consumer = A)
    );
  };
  O6Q.createElement = h_0;
  O6Q.createFactory = function (A) {
    var B = h_0.bind(null, A);
    return ((B.type = A), B);
  };
  O6Q.createRef = function () {
    return { current: null };
  };
  O6Q.forwardRef = function (A) {
    return { $$typeof: C6Q, render: A };
  };
  O6Q.isValidElement = Il1;
  O6Q.lazy = function (A) {
    return { $$typeof: w6Q, _payload: { _status: -1, _result: A }, _init: L6Q };
  };
  O6Q.memo = function (A, B) {
    return { $$typeof: $6Q, type: A, compare: B === void 0 ? null : B };
  };
  O6Q.startTransition = function (A) {
    var B = hF1.transition;
    hF1.transition = {};
    try {
      A();
    } finally {
      hF1.transition = B;
    }
  };
  O6Q.unstable_act = g_0;
  O6Q.useCallback = function (A, B) {
    return HV.current.useCallback(A, B);
  };
  O6Q.useContext = function (A) {
    return HV.current.useContext(A);
  };
  O6Q.useDebugValue = function () {};
  O6Q.useDeferredValue = function (A) {
    return HV.current.useDeferredValue(A);
  };
  O6Q.useEffect = function (A, B) {
    return HV.current.useEffect(A, B);
  };
  O6Q.useId = function () {
    return HV.current.useId();
  };
  O6Q.useImperativeHandle = function (A, B, Q) {
    return HV.current.useImperativeHandle(A, B, Q);
  };
  O6Q.useInsertionEffect = function (A, B) {
    return HV.current.useInsertionEffect(A, B);
  };
  O6Q.useLayoutEffect = function (A, B) {
    return HV.current.useLayoutEffect(A, B);
  };
  O6Q.useMemo = function (A, B) {
    return HV.current.useMemo(A, B);
  };
  O6Q.useReducer = function (A, B, Q) {
    return HV.current.useReducer(A, B, Q);
  };
  O6Q.useRef = function (A) {
    return HV.current.useRef(A);
  };
  O6Q.useState = function (A) {
    return HV.current.useState(A);
  };
  O6Q.useSyncExternalStore = function (A, B, Q) {
    return HV.current.useSyncExternalStore(A, B, Q);
  };
  O6Q.useTransition = function () {
    return HV.current.useTransition();
  };
  O6Q.version = "18.3.1";
});
var rb0 = U((Y58, sb0) => {
  var ab0 = X1("stream").Stream,
    OWQ = X1("util");
  sb0.exports = xw;
  function xw() {
    ((this.source = null),
      (this.dataSize = 0),
      (this.maxDataSize = 1048576),
      (this.pauseStream = !0),
      (this._maxDataSizeExceeded = !1),
      (this._released = !1),
      (this._bufferedEvents = []));
  }
  OWQ.inherits(xw, ab0);
  xw.create = function (A, B) {
    var Q = new this();
    B = B || {};
    for (var Z in B) Q[Z] = B[Z];
    Q.source = A;
    var G = A.emit;
    if (
      ((A.emit = function () {
        return (Q._handleEmit(arguments), G.apply(A, arguments));
      }),
      A.on("error", function () {}),
      Q.pauseStream)
    )
      A.pause();
    return Q;
  };
  Object.defineProperty(xw.prototype, "readable", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return this.source.readable;
    },
  });
  xw.prototype.setEncoding = function () {
    return this.source.setEncoding.apply(this.source, arguments);
  };
  xw.prototype.resume = function () {
    if (!this._released) this.release();
    this.source.resume();
  };
  xw.prototype.pause = function () {
    this.source.pause();
  };
  xw.prototype.release = function () {
    ((this._released = !0),
      this._bufferedEvents.forEach(
        function (A) {
          this.emit.apply(this, A);
        }.bind(this),
      ),
      (this._bufferedEvents = []));
  };
  xw.prototype.pipe = function () {
    var A = ab0.prototype.pipe.apply(this, arguments);
    return (this.resume(), A);
  };
  xw.prototype._handleEmit = function (A) {
    if (this._released) {
      this.emit.apply(this, A);
      return;
    }
    if (A[0] === "data") ((this.dataSize += A[1].length), this._checkIfMaxDataSizeExceeded());
    this._bufferedEvents.push(A);
  };
  xw.prototype._checkIfMaxDataSizeExceeded = function () {
    if (this._maxDataSizeExceeded) return;
    if (this.dataSize <= this.maxDataSize) return;
    this._maxDataSizeExceeded = !0;
    var A = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", new Error(A));
  };
});
var Af0 = U((I58, eb0) => {
  var RWQ = X1("util"),
    tb0 = X1("stream").Stream,
    ob0 = rb0();
  eb0.exports = SG;
  function SG() {
    ((this.writable = !1),
      (this.readable = !0),
      (this.dataSize = 0),
      (this.maxDataSize = 2097152),
      (this.pauseStreams = !0),
      (this._released = !1),
      (this._streams = []),
      (this._currentStream = null),
      (this._insideLoop = !1),
      (this._pendingNext = !1));
  }
  RWQ.inherits(SG, tb0);
  SG.create = function (A) {
    var B = new this();
    A = A || {};
    for (var Q in A) B[Q] = A[Q];
    return B;
  };
  SG.isStreamLike = function (A) {
    return (
      typeof A !== "function" &&
      typeof A !== "string" &&
      typeof A !== "boolean" &&
      typeof A !== "number" &&
      !Buffer.isBuffer(A)
    );
  };
  SG.prototype.append = function (A) {
    var B = SG.isStreamLike(A);
    if (B) {
      if (!(A instanceof ob0)) {
        var Q = ob0.create(A, { maxDataSize: 1 / 0, pauseStream: this.pauseStreams });
        (A.on("data", this._checkDataSize.bind(this)), (A = Q));
      }
      if ((this._handleErrors(A), this.pauseStreams)) A.pause();
    }
    return (this._streams.push(A), this);
  };
  SG.prototype.pipe = function (A, B) {
    return (tb0.prototype.pipe.call(this, A, B), this.resume(), A);
  };
  SG.prototype._getNext = function () {
    if (((this._currentStream = null), this._insideLoop)) {
      this._pendingNext = !0;
      return;
    }
    this._insideLoop = !0;
    try {
      do ((this._pendingNext = !1), this._realGetNext());
      while (this._pendingNext);
    } finally {
      this._insideLoop = !1;
    }
  };
  SG.prototype._realGetNext = function () {
    var A = this._streams.shift();
    if (typeof A == "undefined") {
      this.end();
      return;
    }
    if (typeof A !== "function") {
      this._pipeNext(A);
      return;
    }
    var B = A;
    B(
      function (Q) {
        var Z = SG.isStreamLike(Q);
        if (Z) (Q.on("data", this._checkDataSize.bind(this)), this._handleErrors(Q));
        this._pipeNext(Q);
      }.bind(this),
    );
  };
  SG.prototype._pipeNext = function (A) {
    this._currentStream = A;
    var B = SG.isStreamLike(A);
    if (B) {
      (A.on("end", this._getNext.bind(this)), A.pipe(this, { end: !1 }));
      return;
    }
    var Q = A;
    (this.write(Q), this._getNext());
  };
  SG.prototype._handleErrors = function (A) {
    var B = this;
    A.on("error", function (Q) {
      B._emitError(Q);
    });
  };
  SG.prototype.write = function (A) {
    this.emit("data", A);
  };
  SG.prototype.pause = function () {
    if (!this.pauseStreams) return;
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function")
      this._currentStream.pause();
    this.emit("pause");
  };
  SG.prototype.resume = function () {
    if (!this._released) ((this._released = !0), (this.writable = !0), this._getNext());
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function")
      this._currentStream.resume();
    this.emit("resume");
  };
  SG.prototype.end = function () {
    (this._reset(), this.emit("end"));
  };
  SG.prototype.destroy = function () {
    (this._reset(), this.emit("close"));
  };
  SG.prototype._reset = function () {
    ((this.writable = !1), (this._streams = []), (this._currentStream = null));
  };
  SG.prototype._checkDataSize = function () {
    if ((this._updateDataSize(), this.dataSize <= this.maxDataSize)) return;
    var A = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(new Error(A));
  };
  SG.prototype._updateDataSize = function () {
    this.dataSize = 0;
    var A = this;
    if (
      (this._streams.forEach(function (B) {
        if (!B.dataSize) return;
        A.dataSize += B.dataSize;
      }),
      this._currentStream && this._currentStream.dataSize)
    )
      this.dataSize += this._currentStream.dataSize;
  };
  SG.prototype._emitError = function (A) {
    (this._reset(), this.emit("error", A));
  };
});
var Bf0 = U((W58, TWQ) => {
  TWQ.exports = {
    "application/1d-interleaved-parityfec": { source: "iana" },
    "application/3gpdash-qoe-report+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/3gpp-ims+xml": { source: "iana", compressible: !0 },
    "application/3gpphal+json": { source: "iana", compressible: !0 },
    "application/3gpphalforms+json": { source: "iana", compressible: !0 },
    "application/a2l": { source: "iana" },
    "application/ace+cbor": { source: "iana" },
    "application/activemessage": { source: "iana" },
    "application/activity+json": { source: "iana", compressible: !0 },
    "application/alto-costmap+json": { source: "iana", compressible: !0 },
    "application/alto-costmapfilter+json": { source: "iana", compressible: !0 },
    "application/alto-directory+json": { source: "iana", compressible: !0 },
    "application/alto-endpointcost+json": { source: "iana", compressible: !0 },
    "application/alto-endpointcostparams+json": { source: "iana", compressible: !0 },
    "application/alto-endpointprop+json": { source: "iana", compressible: !0 },
    "application/alto-endpointpropparams+json": { source: "iana", compressible: !0 },
    "application/alto-error+json": { source: "iana", compressible: !0 },
    "application/alto-networkmap+json": { source: "iana", compressible: !0 },
    "application/alto-networkmapfilter+json": { source: "iana", compressible: !0 },
    "application/alto-updatestreamcontrol+json": { source: "iana", compressible: !0 },
    "application/alto-updatestreamparams+json": { source: "iana", compressible: !0 },
    "application/aml": { source: "iana" },
    "application/andrew-inset": { source: "iana", extensions: ["ez"] },
    "application/applefile": { source: "iana" },
    "application/applixware": { source: "apache", extensions: ["aw"] },
    "application/at+jwt": { source: "iana" },
    "application/atf": { source: "iana" },
    "application/atfx": { source: "iana" },
    "application/atom+xml": { source: "iana", compressible: !0, extensions: ["atom"] },
    "application/atomcat+xml": { source: "iana", compressible: !0, extensions: ["atomcat"] },
    "application/atomdeleted+xml": { source: "iana", compressible: !0, extensions: ["atomdeleted"] },
    "application/atomicmail": { source: "iana" },
    "application/atomsvc+xml": { source: "iana", compressible: !0, extensions: ["atomsvc"] },
    "application/atsc-dwd+xml": { source: "iana", compressible: !0, extensions: ["dwd"] },
    "application/atsc-dynamic-event-message": { source: "iana" },
    "application/atsc-held+xml": { source: "iana", compressible: !0, extensions: ["held"] },
    "application/atsc-rdt+json": { source: "iana", compressible: !0 },
    "application/atsc-rsat+xml": { source: "iana", compressible: !0, extensions: ["rsat"] },
    "application/atxml": { source: "iana" },
    "application/auth-policy+xml": { source: "iana", compressible: !0 },
    "application/bacnet-xdd+zip": { source: "iana", compressible: !1 },
    "application/batch-smtp": { source: "iana" },
    "application/bdoc": { compressible: !1, extensions: ["bdoc"] },
    "application/beep+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/calendar+json": { source: "iana", compressible: !0 },
    "application/calendar+xml": { source: "iana", compressible: !0, extensions: ["xcs"] },
    "application/call-completion": { source: "iana" },
    "application/cals-1840": { source: "iana" },
    "application/captive+json": { source: "iana", compressible: !0 },
    "application/cbor": { source: "iana" },
    "application/cbor-seq": { source: "iana" },
    "application/cccex": { source: "iana" },
    "application/ccmp+xml": { source: "iana", compressible: !0 },
    "application/ccxml+xml": { source: "iana", compressible: !0, extensions: ["ccxml"] },
    "application/cdfx+xml": { source: "iana", compressible: !0, extensions: ["cdfx"] },
    "application/cdmi-capability": { source: "iana", extensions: ["cdmia"] },
    "application/cdmi-container": { source: "iana", extensions: ["cdmic"] },
    "application/cdmi-domain": { source: "iana", extensions: ["cdmid"] },
    "application/cdmi-object": { source: "iana", extensions: ["cdmio"] },
    "application/cdmi-queue": { source: "iana", extensions: ["cdmiq"] },
    "application/cdni": { source: "iana" },
    "application/cea": { source: "iana" },
    "application/cea-2018+xml": { source: "iana", compressible: !0 },
    "application/cellml+xml": { source: "iana", compressible: !0 },
    "application/cfw": { source: "iana" },
    "application/city+json": { source: "iana", compressible: !0 },
    "application/clr": { source: "iana" },
    "application/clue+xml": { source: "iana", compressible: !0 },
    "application/clue_info+xml": { source: "iana", compressible: !0 },
    "application/cms": { source: "iana" },
    "application/cnrp+xml": { source: "iana", compressible: !0 },
    "application/coap-group+json": { source: "iana", compressible: !0 },
    "application/coap-payload": { source: "iana" },
    "application/commonground": { source: "iana" },
    "application/conference-info+xml": { source: "iana", compressible: !0 },
    "application/cose": { source: "iana" },
    "application/cose-key": { source: "iana" },
    "application/cose-key-set": { source: "iana" },
    "application/cpl+xml": { source: "iana", compressible: !0, extensions: ["cpl"] },
    "application/csrattrs": { source: "iana" },
    "application/csta+xml": { source: "iana", compressible: !0 },
    "application/cstadata+xml": { source: "iana", compressible: !0 },
    "application/csvm+json": { source: "iana", compressible: !0 },
    "application/cu-seeme": { source: "apache", extensions: ["cu"] },
    "application/cwt": { source: "iana" },
    "application/cybercash": { source: "iana" },
    "application/dart": { compressible: !0 },
    "application/dash+xml": { source: "iana", compressible: !0, extensions: ["mpd"] },
    "application/dash-patch+xml": { source: "iana", compressible: !0, extensions: ["mpp"] },
    "application/dashdelta": { source: "iana" },
    "application/davmount+xml": { source: "iana", compressible: !0, extensions: ["davmount"] },
    "application/dca-rft": { source: "iana" },
    "application/dcd": { source: "iana" },
    "application/dec-dx": { source: "iana" },
    "application/dialog-info+xml": { source: "iana", compressible: !0 },
    "application/dicom": { source: "iana" },
    "application/dicom+json": { source: "iana", compressible: !0 },
    "application/dicom+xml": { source: "iana", compressible: !0 },
    "application/dii": { source: "iana" },
    "application/dit": { source: "iana" },
    "application/dns": { source: "iana" },
    "application/dns+json": { source: "iana", compressible: !0 },
    "application/dns-message": { source: "iana" },
    "application/docbook+xml": { source: "apache", compressible: !0, extensions: ["dbk"] },
    "application/dots+cbor": { source: "iana" },
    "application/dskpp+xml": { source: "iana", compressible: !0 },
    "application/dssc+der": { source: "iana", extensions: ["dssc"] },
    "application/dssc+xml": { source: "iana", compressible: !0, extensions: ["xdssc"] },
    "application/dvcs": { source: "iana" },
    "application/ecmascript": { source: "iana", compressible: !0, extensions: ["es", "ecma"] },
    "application/edi-consent": { source: "iana" },
    "application/edi-x12": { source: "iana", compressible: !1 },
    "application/edifact": { source: "iana", compressible: !1 },
    "application/efi": { source: "iana" },
    "application/elm+json": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/elm+xml": { source: "iana", compressible: !0 },
    "application/emergencycalldata.cap+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/emergencycalldata.comment+xml": { source: "iana", compressible: !0 },
    "application/emergencycalldata.control+xml": { source: "iana", compressible: !0 },
    "application/emergencycalldata.deviceinfo+xml": { source: "iana", compressible: !0 },
    "application/emergencycalldata.ecall.msd": { source: "iana" },
    "application/emergencycalldata.providerinfo+xml": { source: "iana", compressible: !0 },
    "application/emergencycalldata.serviceinfo+xml": { source: "iana", compressible: !0 },
    "application/emergencycalldata.subscriberinfo+xml": { source: "iana", compressible: !0 },
    "application/emergencycalldata.veds+xml": { source: "iana", compressible: !0 },
    "application/emma+xml": { source: "iana", compressible: !0, extensions: ["emma"] },
    "application/emotionml+xml": { source: "iana", compressible: !0, extensions: ["emotionml"] },
    "application/encaprtp": { source: "iana" },
    "application/epp+xml": { source: "iana", compressible: !0 },
    "application/epub+zip": { source: "iana", compressible: !1, extensions: ["epub"] },
    "application/eshop": { source: "iana" },
    "application/exi": { source: "iana", extensions: ["exi"] },
    "application/expect-ct-report+json": { source: "iana", compressible: !0 },
    "application/express": { source: "iana", extensions: ["exp"] },
    "application/fastinfoset": { source: "iana" },
    "application/fastsoap": { source: "iana" },
    "application/fdt+xml": { source: "iana", compressible: !0, extensions: ["fdt"] },
    "application/fhir+json": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/fhir+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/fido.trusted-apps+json": { compressible: !0 },
    "application/fits": { source: "iana" },
    "application/flexfec": { source: "iana" },
    "application/font-sfnt": { source: "iana" },
    "application/font-tdpfr": { source: "iana", extensions: ["pfr"] },
    "application/font-woff": { source: "iana", compressible: !1 },
    "application/framework-attributes+xml": { source: "iana", compressible: !0 },
    "application/geo+json": { source: "iana", compressible: !0, extensions: ["geojson"] },
    "application/geo+json-seq": { source: "iana" },
    "application/geopackage+sqlite3": { source: "iana" },
    "application/geoxacml+xml": { source: "iana", compressible: !0 },
    "application/gltf-buffer": { source: "iana" },
    "application/gml+xml": { source: "iana", compressible: !0, extensions: ["gml"] },
    "application/gpx+xml": { source: "apache", compressible: !0, extensions: ["gpx"] },
    "application/gxf": { source: "apache", extensions: ["gxf"] },
    "application/gzip": { source: "iana", compressible: !1, extensions: ["gz"] },
    "application/h224": { source: "iana" },
    "application/held+xml": { source: "iana", compressible: !0 },
    "application/hjson": { extensions: ["hjson"] },
    "application/http": { source: "iana" },
    "application/hyperstudio": { source: "iana", extensions: ["stk"] },
    "application/ibe-key-request+xml": { source: "iana", compressible: !0 },
    "application/ibe-pkg-reply+xml": { source: "iana", compressible: !0 },
    "application/ibe-pp-data": { source: "iana" },
    "application/iges": { source: "iana" },
    "application/im-iscomposing+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/index": { source: "iana" },
    "application/index.cmd": { source: "iana" },
    "application/index.obj": { source: "iana" },
    "application/index.response": { source: "iana" },
    "application/index.vnd": { source: "iana" },
    "application/inkml+xml": { source: "iana", compressible: !0, extensions: ["ink", "inkml"] },
    "application/iotp": { source: "iana" },
    "application/ipfix": { source: "iana", extensions: ["ipfix"] },
    "application/ipp": { source: "iana" },
    "application/isup": { source: "iana" },
    "application/its+xml": { source: "iana", compressible: !0, extensions: ["its"] },
    "application/java-archive": { source: "apache", compressible: !1, extensions: ["jar", "war", "ear"] },
    "application/java-serialized-object": { source: "apache", compressible: !1, extensions: ["ser"] },
    "application/java-vm": { source: "apache", compressible: !1, extensions: ["class"] },
    "application/javascript": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["js", "mjs"] },
    "application/jf2feed+json": { source: "iana", compressible: !0 },
    "application/jose": { source: "iana" },
    "application/jose+json": { source: "iana", compressible: !0 },
    "application/jrd+json": { source: "iana", compressible: !0 },
    "application/jscalendar+json": { source: "iana", compressible: !0 },
    "application/json": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["json", "map"] },
    "application/json-patch+json": { source: "iana", compressible: !0 },
    "application/json-seq": { source: "iana" },
    "application/json5": { extensions: ["json5"] },
    "application/jsonml+json": { source: "apache", compressible: !0, extensions: ["jsonml"] },
    "application/jwk+json": { source: "iana", compressible: !0 },
    "application/jwk-set+json": { source: "iana", compressible: !0 },
    "application/jwt": { source: "iana" },
    "application/kpml-request+xml": { source: "iana", compressible: !0 },
    "application/kpml-response+xml": { source: "iana", compressible: !0 },
    "application/ld+json": { source: "iana", compressible: !0, extensions: ["jsonld"] },
    "application/lgr+xml": { source: "iana", compressible: !0, extensions: ["lgr"] },
    "application/link-format": { source: "iana" },
    "application/load-control+xml": { source: "iana", compressible: !0 },
    "application/lost+xml": { source: "iana", compressible: !0, extensions: ["lostxml"] },
    "application/lostsync+xml": { source: "iana", compressible: !0 },
    "application/lpf+zip": { source: "iana", compressible: !1 },
    "application/lxf": { source: "iana" },
    "application/mac-binhex40": { source: "iana", extensions: ["hqx"] },
    "application/mac-compactpro": { source: "apache", extensions: ["cpt"] },
    "application/macwriteii": { source: "iana" },
    "application/mads+xml": { source: "iana", compressible: !0, extensions: ["mads"] },
    "application/manifest+json": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["webmanifest"] },
    "application/marc": { source: "iana", extensions: ["mrc"] },
    "application/marcxml+xml": { source: "iana", compressible: !0, extensions: ["mrcx"] },
    "application/mathematica": { source: "iana", extensions: ["ma", "nb", "mb"] },
    "application/mathml+xml": { source: "iana", compressible: !0, extensions: ["mathml"] },
    "application/mathml-content+xml": { source: "iana", compressible: !0 },
    "application/mathml-presentation+xml": { source: "iana", compressible: !0 },
    "application/mbms-associated-procedure-description+xml": { source: "iana", compressible: !0 },
    "application/mbms-deregister+xml": { source: "iana", compressible: !0 },
    "application/mbms-envelope+xml": { source: "iana", compressible: !0 },
    "application/mbms-msk+xml": { source: "iana", compressible: !0 },
    "application/mbms-msk-response+xml": { source: "iana", compressible: !0 },
    "application/mbms-protection-description+xml": { source: "iana", compressible: !0 },
    "application/mbms-reception-report+xml": { source: "iana", compressible: !0 },
    "application/mbms-register+xml": { source: "iana", compressible: !0 },
    "application/mbms-register-response+xml": { source: "iana", compressible: !0 },
    "application/mbms-schedule+xml": { source: "iana", compressible: !0 },
    "application/mbms-user-service-description+xml": { source: "iana", compressible: !0 },
    "application/mbox": { source: "iana", extensions: ["mbox"] },
    "application/media-policy-dataset+xml": { source: "iana", compressible: !0, extensions: ["mpf"] },
    "application/media_control+xml": { source: "iana", compressible: !0 },
    "application/mediaservercontrol+xml": { source: "iana", compressible: !0, extensions: ["mscml"] },
    "application/merge-patch+json": { source: "iana", compressible: !0 },
    "application/metalink+xml": { source: "apache", compressible: !0, extensions: ["metalink"] },
    "application/metalink4+xml": { source: "iana", compressible: !0, extensions: ["meta4"] },
    "application/mets+xml": { source: "iana", compressible: !0, extensions: ["mets"] },
    "application/mf4": { source: "iana" },
    "application/mikey": { source: "iana" },
    "application/mipc": { source: "iana" },
    "application/missing-blocks+cbor-seq": { source: "iana" },
    "application/mmt-aei+xml": { source: "iana", compressible: !0, extensions: ["maei"] },
    "application/mmt-usd+xml": { source: "iana", compressible: !0, extensions: ["musd"] },
    "application/mods+xml": { source: "iana", compressible: !0, extensions: ["mods"] },
    "application/moss-keys": { source: "iana" },
    "application/moss-signature": { source: "iana" },
    "application/mosskey-data": { source: "iana" },
    "application/mosskey-request": { source: "iana" },
    "application/mp21": { source: "iana", extensions: ["m21", "mp21"] },
    "application/mp4": { source: "iana", extensions: ["mp4s", "m4p"] },
    "application/mpeg4-generic": { source: "iana" },
    "application/mpeg4-iod": { source: "iana" },
    "application/mpeg4-iod-xmt": { source: "iana" },
    "application/mrb-consumer+xml": { source: "iana", compressible: !0 },
    "application/mrb-publish+xml": { source: "iana", compressible: !0 },
    "application/msc-ivr+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/msc-mixer+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/msword": { source: "iana", compressible: !1, extensions: ["doc", "dot"] },
    "application/mud+json": { source: "iana", compressible: !0 },
    "application/multipart-core": { source: "iana" },
    "application/mxf": { source: "iana", extensions: ["mxf"] },
    "application/n-quads": { source: "iana", extensions: ["nq"] },
    "application/n-triples": { source: "iana", extensions: ["nt"] },
    "application/nasdata": { source: "iana" },
    "application/news-checkgroups": { source: "iana", charset: "US-ASCII" },
    "application/news-groupinfo": { source: "iana", charset: "US-ASCII" },
    "application/news-transmission": { source: "iana" },
    "application/nlsml+xml": { source: "iana", compressible: !0 },
    "application/node": { source: "iana", extensions: ["cjs"] },
    "application/nss": { source: "iana" },
    "application/oauth-authz-req+jwt": { source: "iana" },
    "application/oblivious-dns-message": { source: "iana" },
    "application/ocsp-request": { source: "iana" },
    "application/ocsp-response": { source: "iana" },
    "application/octet-stream": {
      source: "iana",
      compressible: !1,
      extensions: [
        "bin",
        "dms",
        "lrf",
        "mar",
        "so",
        "dist",
        "distz",
        "pkg",
        "bpk",
        "dump",
        "elc",
        "deploy",
        "exe",
        "dll",
        "deb",
        "dmg",
        "iso",
        "img",
        "msi",
        "msp",
        "msm",
        "buffer",
      ],
    },
    "application/oda": { source: "iana", extensions: ["oda"] },
    "application/odm+xml": { source: "iana", compressible: !0 },
    "application/odx": { source: "iana" },
    "application/oebps-package+xml": { source: "iana", compressible: !0, extensions: ["opf"] },
    "application/ogg": { source: "iana", compressible: !1, extensions: ["ogx"] },
    "application/omdoc+xml": { source: "apache", compressible: !0, extensions: ["omdoc"] },
    "application/onenote": { source: "apache", extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"] },
    "application/opc-nodeset+xml": { source: "iana", compressible: !0 },
    "application/oscore": { source: "iana" },
    "application/oxps": { source: "iana", extensions: ["oxps"] },
    "application/p21": { source: "iana" },
    "application/p21+zip": { source: "iana", compressible: !1 },
    "application/p2p-overlay+xml": { source: "iana", compressible: !0, extensions: ["relo"] },
    "application/parityfec": { source: "iana" },
    "application/passport": { source: "iana" },
    "application/patch-ops-error+xml": { source: "iana", compressible: !0, extensions: ["xer"] },
    "application/pdf": { source: "iana", compressible: !1, extensions: ["pdf"] },
    "application/pdx": { source: "iana" },
    "application/pem-certificate-chain": { source: "iana" },
    "application/pgp-encrypted": { source: "iana", compressible: !1, extensions: ["pgp"] },
    "application/pgp-keys": { source: "iana", extensions: ["asc"] },
    "application/pgp-signature": { source: "iana", extensions: ["asc", "sig"] },
    "application/pics-rules": { source: "apache", extensions: ["prf"] },
    "application/pidf+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/pidf-diff+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/pkcs10": { source: "iana", extensions: ["p10"] },
    "application/pkcs12": { source: "iana" },
    "application/pkcs7-mime": { source: "iana", extensions: ["p7m", "p7c"] },
    "application/pkcs7-signature": { source: "iana", extensions: ["p7s"] },
    "application/pkcs8": { source: "iana", extensions: ["p8"] },
    "application/pkcs8-encrypted": { source: "iana" },
    "application/pkix-attr-cert": { source: "iana", extensions: ["ac"] },
    "application/pkix-cert": { source: "iana", extensions: ["cer"] },
    "application/pkix-crl": { source: "iana", extensions: ["crl"] },
    "application/pkix-pkipath": { source: "iana", extensions: ["pkipath"] },
    "application/pkixcmp": { source: "iana", extensions: ["pki"] },
    "application/pls+xml": { source: "iana", compressible: !0, extensions: ["pls"] },
    "application/poc-settings+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/postscript": { source: "iana", compressible: !0, extensions: ["ai", "eps", "ps"] },
    "application/ppsp-tracker+json": { source: "iana", compressible: !0 },
    "application/problem+json": { source: "iana", compressible: !0 },
    "application/problem+xml": { source: "iana", compressible: !0 },
    "application/provenance+xml": { source: "iana", compressible: !0, extensions: ["provx"] },
    "application/prs.alvestrand.titrax-sheet": { source: "iana" },
    "application/prs.cww": { source: "iana", extensions: ["cww"] },
    "application/prs.cyn": { source: "iana", charset: "7-BIT" },
    "application/prs.hpub+zip": { source: "iana", compressible: !1 },
    "application/prs.nprend": { source: "iana" },
    "application/prs.plucker": { source: "iana" },
    "application/prs.rdf-xml-crypt": { source: "iana" },
    "application/prs.xsf+xml": { source: "iana", compressible: !0 },
    "application/pskc+xml": { source: "iana", compressible: !0, extensions: ["pskcxml"] },
    "application/pvd+json": { source: "iana", compressible: !0 },
    "application/qsig": { source: "iana" },
    "application/raml+yaml": { compressible: !0, extensions: ["raml"] },
    "application/raptorfec": { source: "iana" },
    "application/rdap+json": { source: "iana", compressible: !0 },
    "application/rdf+xml": { source: "iana", compressible: !0, extensions: ["rdf", "owl"] },
    "application/reginfo+xml": { source: "iana", compressible: !0, extensions: ["rif"] },
    "application/relax-ng-compact-syntax": { source: "iana", extensions: ["rnc"] },
    "application/remote-printing": { source: "iana" },
    "application/reputon+json": { source: "iana", compressible: !0 },
    "application/resource-lists+xml": { source: "iana", compressible: !0, extensions: ["rl"] },
    "application/resource-lists-diff+xml": { source: "iana", compressible: !0, extensions: ["rld"] },
    "application/rfc+xml": { source: "iana", compressible: !0 },
    "application/riscos": { source: "iana" },
    "application/rlmi+xml": { source: "iana", compressible: !0 },
    "application/rls-services+xml": { source: "iana", compressible: !0, extensions: ["rs"] },
    "application/route-apd+xml": { source: "iana", compressible: !0, extensions: ["rapd"] },
    "application/route-s-tsid+xml": { source: "iana", compressible: !0, extensions: ["sls"] },
    "application/route-usd+xml": { source: "iana", compressible: !0, extensions: ["rusd"] },
    "application/rpki-ghostbusters": { source: "iana", extensions: ["gbr"] },
    "application/rpki-manifest": { source: "iana", extensions: ["mft"] },
    "application/rpki-publication": { source: "iana" },
    "application/rpki-roa": { source: "iana", extensions: ["roa"] },
    "application/rpki-updown": { source: "iana" },
    "application/rsd+xml": { source: "apache", compressible: !0, extensions: ["rsd"] },
    "application/rss+xml": { source: "apache", compressible: !0, extensions: ["rss"] },
    "application/rtf": { source: "iana", compressible: !0, extensions: ["rtf"] },
    "application/rtploopback": { source: "iana" },
    "application/rtx": { source: "iana" },
    "application/samlassertion+xml": { source: "iana", compressible: !0 },
    "application/samlmetadata+xml": { source: "iana", compressible: !0 },
    "application/sarif+json": { source: "iana", compressible: !0 },
    "application/sarif-external-properties+json": { source: "iana", compressible: !0 },
    "application/sbe": { source: "iana" },
    "application/sbml+xml": { source: "iana", compressible: !0, extensions: ["sbml"] },
    "application/scaip+xml": { source: "iana", compressible: !0 },
    "application/scim+json": { source: "iana", compressible: !0 },
    "application/scvp-cv-request": { source: "iana", extensions: ["scq"] },
    "application/scvp-cv-response": { source: "iana", extensions: ["scs"] },
    "application/scvp-vp-request": { source: "iana", extensions: ["spq"] },
    "application/scvp-vp-response": { source: "iana", extensions: ["spp"] },
    "application/sdp": { source: "iana", extensions: ["sdp"] },
    "application/secevent+jwt": { source: "iana" },
    "application/senml+cbor": { source: "iana" },
    "application/senml+json": { source: "iana", compressible: !0 },
    "application/senml+xml": { source: "iana", compressible: !0, extensions: ["senmlx"] },
    "application/senml-etch+cbor": { source: "iana" },
    "application/senml-etch+json": { source: "iana", compressible: !0 },
    "application/senml-exi": { source: "iana" },
    "application/sensml+cbor": { source: "iana" },
    "application/sensml+json": { source: "iana", compressible: !0 },
    "application/sensml+xml": { source: "iana", compressible: !0, extensions: ["sensmlx"] },
    "application/sensml-exi": { source: "iana" },
    "application/sep+xml": { source: "iana", compressible: !0 },
    "application/sep-exi": { source: "iana" },
    "application/session-info": { source: "iana" },
    "application/set-payment": { source: "iana" },
    "application/set-payment-initiation": { source: "iana", extensions: ["setpay"] },
    "application/set-registration": { source: "iana" },
    "application/set-registration-initiation": { source: "iana", extensions: ["setreg"] },
    "application/sgml": { source: "iana" },
    "application/sgml-open-catalog": { source: "iana" },
    "application/shf+xml": { source: "iana", compressible: !0, extensions: ["shf"] },
    "application/sieve": { source: "iana", extensions: ["siv", "sieve"] },
    "application/simple-filter+xml": { source: "iana", compressible: !0 },
    "application/simple-message-summary": { source: "iana" },
    "application/simplesymbolcontainer": { source: "iana" },
    "application/sipc": { source: "iana" },
    "application/slate": { source: "iana" },
    "application/smil": { source: "iana" },
    "application/smil+xml": { source: "iana", compressible: !0, extensions: ["smi", "smil"] },
    "application/smpte336m": { source: "iana" },
    "application/soap+fastinfoset": { source: "iana" },
    "application/soap+xml": { source: "iana", compressible: !0 },
    "application/sparql-query": { source: "iana", extensions: ["rq"] },
    "application/sparql-results+xml": { source: "iana", compressible: !0, extensions: ["srx"] },
    "application/spdx+json": { source: "iana", compressible: !0 },
    "application/spirits-event+xml": { source: "iana", compressible: !0 },
    "application/sql": { source: "iana" },
    "application/srgs": { source: "iana", extensions: ["gram"] },
    "application/srgs+xml": { source: "iana", compressible: !0, extensions: ["grxml"] },
    "application/sru+xml": { source: "iana", compressible: !0, extensions: ["sru"] },
    "application/ssdl+xml": { source: "apache", compressible: !0, extensions: ["ssdl"] },
    "application/ssml+xml": { source: "iana", compressible: !0, extensions: ["ssml"] },
    "application/stix+json": { source: "iana", compressible: !0 },
    "application/swid+xml": { source: "iana", compressible: !0, extensions: ["swidtag"] },
    "application/tamp-apex-update": { source: "iana" },
    "application/tamp-apex-update-confirm": { source: "iana" },
    "application/tamp-community-update": { source: "iana" },
    "application/tamp-community-update-confirm": { source: "iana" },
    "application/tamp-error": { source: "iana" },
    "application/tamp-sequence-adjust": { source: "iana" },
    "application/tamp-sequence-adjust-confirm": { source: "iana" },
    "application/tamp-status-query": { source: "iana" },
    "application/tamp-status-response": { source: "iana" },
    "application/tamp-update": { source: "iana" },
    "application/tamp-update-confirm": { source: "iana" },
    "application/tar": { compressible: !0 },
    "application/taxii+json": { source: "iana", compressible: !0 },
    "application/td+json": { source: "iana", compressible: !0 },
    "application/tei+xml": { source: "iana", compressible: !0, extensions: ["tei", "teicorpus"] },
    "application/tetra_isi": { source: "iana" },
    "application/thraud+xml": { source: "iana", compressible: !0, extensions: ["tfi"] },
    "application/timestamp-query": { source: "iana" },
    "application/timestamp-reply": { source: "iana" },
    "application/timestamped-data": { source: "iana", extensions: ["tsd"] },
    "application/tlsrpt+gzip": { source: "iana" },
    "application/tlsrpt+json": { source: "iana", compressible: !0 },
    "application/tnauthlist": { source: "iana" },
    "application/token-introspection+jwt": { source: "iana" },
    "application/toml": { compressible: !0, extensions: ["toml"] },
    "application/trickle-ice-sdpfrag": { source: "iana" },
    "application/trig": { source: "iana", extensions: ["trig"] },
    "application/ttml+xml": { source: "iana", compressible: !0, extensions: ["ttml"] },
    "application/tve-trigger": { source: "iana" },
    "application/tzif": { source: "iana" },
    "application/tzif-leap": { source: "iana" },
    "application/ubjson": { compressible: !1, extensions: ["ubj"] },
    "application/ulpfec": { source: "iana" },
    "application/urc-grpsheet+xml": { source: "iana", compressible: !0 },
    "application/urc-ressheet+xml": { source: "iana", compressible: !0, extensions: ["rsheet"] },
    "application/urc-targetdesc+xml": { source: "iana", compressible: !0, extensions: ["td"] },
    "application/urc-uisocketdesc+xml": { source: "iana", compressible: !0 },
    "application/vcard+json": { source: "iana", compressible: !0 },
    "application/vcard+xml": { source: "iana", compressible: !0 },
    "application/vemmi": { source: "iana" },
    "application/vividence.scriptfile": { source: "apache" },
    "application/vnd.1000minds.decision-model+xml": { source: "iana", compressible: !0, extensions: ["1km"] },
    "application/vnd.3gpp-prose+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp-prose-pc3ch+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp-v2x-local-service-information": { source: "iana" },
    "application/vnd.3gpp.5gnas": { source: "iana" },
    "application/vnd.3gpp.access-transfer-events+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.bsf+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.gmop+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.gtpc": { source: "iana" },
    "application/vnd.3gpp.interworking-data": { source: "iana" },
    "application/vnd.3gpp.lpp": { source: "iana" },
    "application/vnd.3gpp.mc-signalling-ear": { source: "iana" },
    "application/vnd.3gpp.mcdata-affiliation-command+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcdata-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcdata-payload": { source: "iana" },
    "application/vnd.3gpp.mcdata-service-config+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcdata-signalling": { source: "iana" },
    "application/vnd.3gpp.mcdata-ue-config+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcdata-user-profile+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcptt-affiliation-command+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcptt-floor-request+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcptt-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcptt-location-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcptt-mbms-usage-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcptt-service-config+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcptt-signed+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcptt-ue-config+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcptt-ue-init-config+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcptt-user-profile+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcvideo-affiliation-command+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcvideo-affiliation-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcvideo-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcvideo-location-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcvideo-service-config+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcvideo-transmission-request+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcvideo-ue-config+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcvideo-user-profile+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mid-call+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.ngap": { source: "iana" },
    "application/vnd.3gpp.pfcp": { source: "iana" },
    "application/vnd.3gpp.pic-bw-large": { source: "iana", extensions: ["plb"] },
    "application/vnd.3gpp.pic-bw-small": { source: "iana", extensions: ["psb"] },
    "application/vnd.3gpp.pic-bw-var": { source: "iana", extensions: ["pvb"] },
    "application/vnd.3gpp.s1ap": { source: "iana" },
    "application/vnd.3gpp.sms": { source: "iana" },
    "application/vnd.3gpp.sms+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.srvcc-ext+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.srvcc-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.state-and-event-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.ussd+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp2.bcmcsinfo+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp2.sms": { source: "iana" },
    "application/vnd.3gpp2.tcap": { source: "iana", extensions: ["tcap"] },
    "application/vnd.3lightssoftware.imagescal": { source: "iana" },
    "application/vnd.3m.post-it-notes": { source: "iana", extensions: ["pwn"] },
    "application/vnd.accpac.simply.aso": { source: "iana", extensions: ["aso"] },
    "application/vnd.accpac.simply.imp": { source: "iana", extensions: ["imp"] },
    "application/vnd.acucobol": { source: "iana", extensions: ["acu"] },
    "application/vnd.acucorp": { source: "iana", extensions: ["atc", "acutc"] },
    "application/vnd.adobe.air-application-installer-package+zip": {
      source: "apache",
      compressible: !1,
      extensions: ["air"],
    },
    "application/vnd.adobe.flash.movie": { source: "iana" },
    "application/vnd.adobe.formscentral.fcdt": { source: "iana", extensions: ["fcdt"] },
    "application/vnd.adobe.fxp": { source: "iana", extensions: ["fxp", "fxpl"] },
    "application/vnd.adobe.partial-upload": { source: "iana" },
    "application/vnd.adobe.xdp+xml": { source: "iana", compressible: !0, extensions: ["xdp"] },
    "application/vnd.adobe.xfdf": { source: "iana", extensions: ["xfdf"] },
    "application/vnd.aether.imp": { source: "iana" },
    "application/vnd.afpc.afplinedata": { source: "iana" },
    "application/vnd.afpc.afplinedata-pagedef": { source: "iana" },
    "application/vnd.afpc.cmoca-cmresource": { source: "iana" },
    "application/vnd.afpc.foca-charset": { source: "iana" },
    "application/vnd.afpc.foca-codedfont": { source: "iana" },
    "application/vnd.afpc.foca-codepage": { source: "iana" },
    "application/vnd.afpc.modca": { source: "iana" },
    "application/vnd.afpc.modca-cmtable": { source: "iana" },
    "application/vnd.afpc.modca-formdef": { source: "iana" },
    "application/vnd.afpc.modca-mediummap": { source: "iana" },
    "application/vnd.afpc.modca-objectcontainer": { source: "iana" },
    "application/vnd.afpc.modca-overlay": { source: "iana" },
    "application/vnd.afpc.modca-pagesegment": { source: "iana" },
    "application/vnd.age": { source: "iana", extensions: ["age"] },
    "application/vnd.ah-barcode": { source: "iana" },
    "application/vnd.ahead.space": { source: "iana", extensions: ["ahead"] },
    "application/vnd.airzip.filesecure.azf": { source: "iana", extensions: ["azf"] },
    "application/vnd.airzip.filesecure.azs": { source: "iana", extensions: ["azs"] },
    "application/vnd.amadeus+json": { source: "iana", compressible: !0 },
    "application/vnd.amazon.ebook": { source: "apache", extensions: ["azw"] },
    "application/vnd.amazon.mobi8-ebook": { source: "iana" },
    "application/vnd.americandynamics.acc": { source: "iana", extensions: ["acc"] },
    "application/vnd.amiga.ami": { source: "iana", extensions: ["ami"] },
    "application/vnd.amundsen.maze+xml": { source: "iana", compressible: !0 },
    "application/vnd.android.ota": { source: "iana" },
    "application/vnd.android.package-archive": { source: "apache", compressible: !1, extensions: ["apk"] },
    "application/vnd.anki": { source: "iana" },
    "application/vnd.anser-web-certificate-issue-initiation": { source: "iana", extensions: ["cii"] },
    "application/vnd.anser-web-funds-transfer-initiation": { source: "apache", extensions: ["fti"] },
    "application/vnd.antix.game-component": { source: "iana", extensions: ["atx"] },
    "application/vnd.apache.arrow.file": { source: "iana" },
    "application/vnd.apache.arrow.stream": { source: "iana" },
    "application/vnd.apache.thrift.binary": { source: "iana" },
    "application/vnd.apache.thrift.compact": { source: "iana" },
    "application/vnd.apache.thrift.json": { source: "iana" },
    "application/vnd.api+json": { source: "iana", compressible: !0 },
    "application/vnd.aplextor.warrp+json": { source: "iana", compressible: !0 },
    "application/vnd.apothekende.reservation+json": { source: "iana", compressible: !0 },
    "application/vnd.apple.installer+xml": { source: "iana", compressible: !0, extensions: ["mpkg"] },
    "application/vnd.apple.keynote": { source: "iana", extensions: ["key"] },
    "application/vnd.apple.mpegurl": { source: "iana", extensions: ["m3u8"] },
    "application/vnd.apple.numbers": { source: "iana", extensions: ["numbers"] },
    "application/vnd.apple.pages": { source: "iana", extensions: ["pages"] },
    "application/vnd.apple.pkpass": { compressible: !1, extensions: ["pkpass"] },
    "application/vnd.arastra.swi": { source: "iana" },
    "application/vnd.aristanetworks.swi": { source: "iana", extensions: ["swi"] },
    "application/vnd.artisan+json": { source: "iana", compressible: !0 },
    "application/vnd.artsquare": { source: "iana" },
    "application/vnd.astraea-software.iota": { source: "iana", extensions: ["iota"] },
    "application/vnd.audiograph": { source: "iana", extensions: ["aep"] },
    "application/vnd.autopackage": { source: "iana" },
    "application/vnd.avalon+json": { source: "iana", compressible: !0 },
    "application/vnd.avistar+xml": { source: "iana", compressible: !0 },
    "application/vnd.balsamiq.bmml+xml": { source: "iana", compressible: !0, extensions: ["bmml"] },
    "application/vnd.balsamiq.bmpr": { source: "iana" },
    "application/vnd.banana-accounting": { source: "iana" },
    "application/vnd.bbf.usp.error": { source: "iana" },
    "application/vnd.bbf.usp.msg": { source: "iana" },
    "application/vnd.bbf.usp.msg+json": { source: "iana", compressible: !0 },
    "application/vnd.bekitzur-stech+json": { source: "iana", compressible: !0 },
    "application/vnd.bint.med-content": { source: "iana" },
    "application/vnd.biopax.rdf+xml": { source: "iana", compressible: !0 },
    "application/vnd.blink-idb-value-wrapper": { source: "iana" },
    "application/vnd.blueice.multipass": { source: "iana", extensions: ["mpm"] },
    "application/vnd.bluetooth.ep.oob": { source: "iana" },
    "application/vnd.bluetooth.le.oob": { source: "iana" },
    "application/vnd.bmi": { source: "iana", extensions: ["bmi"] },
    "application/vnd.bpf": { source: "iana" },
    "application/vnd.bpf3": { source: "iana" },
    "application/vnd.businessobjects": { source: "iana", extensions: ["rep"] },
    "application/vnd.byu.uapi+json": { source: "iana", compressible: !0 },
    "application/vnd.cab-jscript": { source: "iana" },
    "application/vnd.canon-cpdl": { source: "iana" },
    "application/vnd.canon-lips": { source: "iana" },
    "application/vnd.capasystems-pg+json": { source: "iana", compressible: !0 },
    "application/vnd.cendio.thinlinc.clientconf": { source: "iana" },
    "application/vnd.century-systems.tcp_stream": { source: "iana" },
    "application/vnd.chemdraw+xml": { source: "iana", compressible: !0, extensions: ["cdxml"] },
    "application/vnd.chess-pgn": { source: "iana" },
    "application/vnd.chipnuts.karaoke-mmd": { source: "iana", extensions: ["mmd"] },
    "application/vnd.ciedi": { source: "iana" },
    "application/vnd.cinderella": { source: "iana", extensions: ["cdy"] },
    "application/vnd.cirpack.isdn-ext": { source: "iana" },
    "application/vnd.citationstyles.style+xml": { source: "iana", compressible: !0, extensions: ["csl"] },
    "application/vnd.claymore": { source: "iana", extensions: ["cla"] },
    "application/vnd.cloanto.rp9": { source: "iana", extensions: ["rp9"] },
    "application/vnd.clonk.c4group": { source: "iana", extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"] },
    "application/vnd.cluetrust.cartomobile-config": { source: "iana", extensions: ["c11amc"] },
    "application/vnd.cluetrust.cartomobile-config-pkg": { source: "iana", extensions: ["c11amz"] },
    "application/vnd.coffeescript": { source: "iana" },
    "application/vnd.collabio.xodocuments.document": { source: "iana" },
    "application/vnd.collabio.xodocuments.document-template": { source: "iana" },
    "application/vnd.collabio.xodocuments.presentation": { source: "iana" },
    "application/vnd.collabio.xodocuments.presentation-template": { source: "iana" },
    "application/vnd.collabio.xodocuments.spreadsheet": { source: "iana" },
    "application/vnd.collabio.xodocuments.spreadsheet-template": { source: "iana" },
    "application/vnd.collection+json": { source: "iana", compressible: !0 },
    "application/vnd.collection.doc+json": { source: "iana", compressible: !0 },
    "application/vnd.collection.next+json": { source: "iana", compressible: !0 },
    "application/vnd.comicbook+zip": { source: "iana", compressible: !1 },
    "application/vnd.comicbook-rar": { source: "iana" },
    "application/vnd.commerce-battelle": { source: "iana" },
    "application/vnd.commonspace": { source: "iana", extensions: ["csp"] },
    "application/vnd.contact.cmsg": { source: "iana", extensions: ["cdbcmsg"] },
    "application/vnd.coreos.ignition+json": { source: "iana", compressible: !0 },
    "application/vnd.cosmocaller": { source: "iana", extensions: ["cmc"] },
    "application/vnd.crick.clicker": { source: "iana", extensions: ["clkx"] },
    "application/vnd.crick.clicker.keyboard": { source: "iana", extensions: ["clkk"] },
    "application/vnd.crick.clicker.palette": { source: "iana", extensions: ["clkp"] },
    "application/vnd.crick.clicker.template": { source: "iana", extensions: ["clkt"] },
    "application/vnd.crick.clicker.wordbank": { source: "iana", extensions: ["clkw"] },
    "application/vnd.criticaltools.wbs+xml": { source: "iana", compressible: !0, extensions: ["wbs"] },
    "application/vnd.cryptii.pipe+json": { source: "iana", compressible: !0 },
    "application/vnd.crypto-shade-file": { source: "iana" },
    "application/vnd.cryptomator.encrypted": { source: "iana" },
    "application/vnd.cryptomator.vault": { source: "iana" },
    "application/vnd.ctc-posml": { source: "iana", extensions: ["pml"] },
    "application/vnd.ctct.ws+xml": { source: "iana", compressible: !0 },
    "application/vnd.cups-pdf": { source: "iana" },
    "application/vnd.cups-postscript": { source: "iana" },
    "application/vnd.cups-ppd": { source: "iana", extensions: ["ppd"] },
    "application/vnd.cups-raster": { source: "iana" },
    "application/vnd.cups-raw": { source: "iana" },
    "application/vnd.curl": { source: "iana" },
    "application/vnd.curl.car": { source: "apache", extensions: ["car"] },
    "application/vnd.curl.pcurl": { source: "apache", extensions: ["pcurl"] },
    "application/vnd.cyan.dean.root+xml": { source: "iana", compressible: !0 },
    "application/vnd.cybank": { source: "iana" },
    "application/vnd.cyclonedx+json": { source: "iana", compressible: !0 },
    "application/vnd.cyclonedx+xml": { source: "iana", compressible: !0 },
    "application/vnd.d2l.coursepackage1p0+zip": { source: "iana", compressible: !1 },
    "application/vnd.d3m-dataset": { source: "iana" },
    "application/vnd.d3m-problem": { source: "iana" },
    "application/vnd.dart": { source: "iana", compressible: !0, extensions: ["dart"] },
    "application/vnd.data-vision.rdz": { source: "iana", extensions: ["rdz"] },
    "application/vnd.datapackage+json": { source: "iana", compressible: !0 },
    "application/vnd.dataresource+json": { source: "iana", compressible: !0 },
    "application/vnd.dbf": { source: "iana", extensions: ["dbf"] },
    "application/vnd.debian.binary-package": { source: "iana" },
    "application/vnd.dece.data": { source: "iana", extensions: ["uvf", "uvvf", "uvd", "uvvd"] },
    "application/vnd.dece.ttml+xml": { source: "iana", compressible: !0, extensions: ["uvt", "uvvt"] },
    "application/vnd.dece.unspecified": { source: "iana", extensions: ["uvx", "uvvx"] },
    "application/vnd.dece.zip": { source: "iana", extensions: ["uvz", "uvvz"] },
    "application/vnd.denovo.fcselayout-link": { source: "iana", extensions: ["fe_launch"] },
    "application/vnd.desmume.movie": { source: "iana" },
    "application/vnd.dir-bi.plate-dl-nosuffix": { source: "iana" },
    "application/vnd.dm.delegation+xml": { source: "iana", compressible: !0 },
    "application/vnd.dna": { source: "iana", extensions: ["dna"] },
    "application/vnd.document+json": { source: "iana", compressible: !0 },
    "application/vnd.dolby.mlp": { source: "apache", extensions: ["mlp"] },
    "application/vnd.dolby.mobile.1": { source: "iana" },
    "application/vnd.dolby.mobile.2": { source: "iana" },
    "application/vnd.doremir.scorecloud-binary-document": { source: "iana" },
    "application/vnd.dpgraph": { source: "iana", extensions: ["dpg"] },
    "application/vnd.dreamfactory": { source: "iana", extensions: ["dfac"] },
    "application/vnd.drive+json": { source: "iana", compressible: !0 },
    "application/vnd.ds-keypoint": { source: "apache", extensions: ["kpxx"] },
    "application/vnd.dtg.local": { source: "iana" },
    "application/vnd.dtg.local.flash": { source: "iana" },
    "application/vnd.dtg.local.html": { source: "iana" },
    "application/vnd.dvb.ait": { source: "iana", extensions: ["ait"] },
    "application/vnd.dvb.dvbisl+xml": { source: "iana", compressible: !0 },
    "application/vnd.dvb.dvbj": { source: "iana" },
    "application/vnd.dvb.esgcontainer": { source: "iana" },
    "application/vnd.dvb.ipdcdftnotifaccess": { source: "iana" },
    "application/vnd.dvb.ipdcesgaccess": { source: "iana" },
    "application/vnd.dvb.ipdcesgaccess2": { source: "iana" },
    "application/vnd.dvb.ipdcesgpdd": { source: "iana" },
    "application/vnd.dvb.ipdcroaming": { source: "iana" },
    "application/vnd.dvb.iptv.alfec-base": { source: "iana" },
    "application/vnd.dvb.iptv.alfec-enhancement": { source: "iana" },
    "application/vnd.dvb.notif-aggregate-root+xml": { source: "iana", compressible: !0 },
    "application/vnd.dvb.notif-container+xml": { source: "iana", compressible: !0 },
    "application/vnd.dvb.notif-generic+xml": { source: "iana", compressible: !0 },
    "application/vnd.dvb.notif-ia-msglist+xml": { source: "iana", compressible: !0 },
    "application/vnd.dvb.notif-ia-registration-request+xml": { source: "iana", compressible: !0 },
    "application/vnd.dvb.notif-ia-registration-response+xml": { source: "iana", compressible: !0 },
    "application/vnd.dvb.notif-init+xml": { source: "iana", compressible: !0 },
    "application/vnd.dvb.pfr": { source: "iana" },
    "application/vnd.dvb.service": { source: "iana", extensions: ["svc"] },
    "application/vnd.dxr": { source: "iana" },
    "application/vnd.dynageo": { source: "iana", extensions: ["geo"] },
    "application/vnd.dzr": { source: "iana" },
    "application/vnd.easykaraoke.cdgdownload": { source: "iana" },
    "application/vnd.ecdis-update": { source: "iana" },
    "application/vnd.ecip.rlp": { source: "iana" },
    "application/vnd.eclipse.ditto+json": { source: "iana", compressible: !0 },
    "application/vnd.ecowin.chart": { source: "iana", extensions: ["mag"] },
    "application/vnd.ecowin.filerequest": { source: "iana" },
    "application/vnd.ecowin.fileupdate": { source: "iana" },
    "application/vnd.ecowin.series": { source: "iana" },
    "application/vnd.ecowin.seriesrequest": { source: "iana" },
    "application/vnd.ecowin.seriesupdate": { source: "iana" },
    "application/vnd.efi.img": { source: "iana" },
    "application/vnd.efi.iso": { source: "iana" },
    "application/vnd.emclient.accessrequest+xml": { source: "iana", compressible: !0 },
    "application/vnd.enliven": { source: "iana", extensions: ["nml"] },
    "application/vnd.enphase.envoy": { source: "iana" },
    "application/vnd.eprints.data+xml": { source: "iana", compressible: !0 },
    "application/vnd.epson.esf": { source: "iana", extensions: ["esf"] },
    "application/vnd.epson.msf": { source: "iana", extensions: ["msf"] },
    "application/vnd.epson.quickanime": { source: "iana", extensions: ["qam"] },
    "application/vnd.epson.salt": { source: "iana", extensions: ["slt"] },
    "application/vnd.epson.ssf": { source: "iana", extensions: ["ssf"] },
    "application/vnd.ericsson.quickcall": { source: "iana" },
    "application/vnd.espass-espass+zip": { source: "iana", compressible: !1 },
    "application/vnd.eszigno3+xml": { source: "iana", compressible: !0, extensions: ["es3", "et3"] },
    "application/vnd.etsi.aoc+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.asic-e+zip": { source: "iana", compressible: !1 },
    "application/vnd.etsi.asic-s+zip": { source: "iana", compressible: !1 },
    "application/vnd.etsi.cug+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvcommand+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvdiscovery+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvprofile+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvsad-bc+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvsad-cod+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvsad-npvr+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvservice+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvsync+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvueprofile+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.mcid+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.mheg5": { source: "iana" },
    "application/vnd.etsi.overload-control-policy-dataset+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.pstn+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.sci+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.simservs+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.timestamp-token": { source: "iana" },
    "application/vnd.etsi.tsl+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.tsl.der": { source: "iana" },
    "application/vnd.eu.kasparian.car+json": { source: "iana", compressible: !0 },
    "application/vnd.eudora.data": { source: "iana" },
    "application/vnd.evolv.ecig.profile": { source: "iana" },
    "application/vnd.evolv.ecig.settings": { source: "iana" },
    "application/vnd.evolv.ecig.theme": { source: "iana" },
    "application/vnd.exstream-empower+zip": { source: "iana", compressible: !1 },
    "application/vnd.exstream-package": { source: "iana" },
    "application/vnd.ezpix-album": { source: "iana", extensions: ["ez2"] },
    "application/vnd.ezpix-package": { source: "iana", extensions: ["ez3"] },
    "application/vnd.f-secure.mobile": { source: "iana" },
    "application/vnd.familysearch.gedcom+zip": { source: "iana", compressible: !1 },
    "application/vnd.fastcopy-disk-image": { source: "iana" },
    "application/vnd.fdf": { source: "iana", extensions: ["fdf"] },
    "application/vnd.fdsn.mseed": { source: "iana", extensions: ["mseed"] },
    "application/vnd.fdsn.seed": { source: "iana", extensions: ["seed", "dataless"] },
    "application/vnd.ffsns": { source: "iana" },
    "application/vnd.ficlab.flb+zip": { source: "iana", compressible: !1 },
    "application/vnd.filmit.zfc": { source: "iana" },
    "application/vnd.fints": { source: "iana" },
    "application/vnd.firemonkeys.cloudcell": { source: "iana" },
    "application/vnd.flographit": { source: "iana", extensions: ["gph"] },
    "application/vnd.fluxtime.clip": { source: "iana", extensions: ["ftc"] },
    "application/vnd.font-fontforge-sfd": { source: "iana" },
    "application/vnd.framemaker": { source: "iana", extensions: ["fm", "frame", "maker", "book"] },
    "application/vnd.frogans.fnc": { source: "iana", extensions: ["fnc"] },
    "application/vnd.frogans.ltf": { source: "iana", extensions: ["ltf"] },
    "application/vnd.fsc.weblaunch": { source: "iana", extensions: ["fsc"] },
    "application/vnd.fujifilm.fb.docuworks": { source: "iana" },
    "application/vnd.fujifilm.fb.docuworks.binder": { source: "iana" },
    "application/vnd.fujifilm.fb.docuworks.container": { source: "iana" },
    "application/vnd.fujifilm.fb.jfi+xml": { source: "iana", compressible: !0 },
    "application/vnd.fujitsu.oasys": { source: "iana", extensions: ["oas"] },
    "application/vnd.fujitsu.oasys2": { source: "iana", extensions: ["oa2"] },
    "application/vnd.fujitsu.oasys3": { source: "iana", extensions: ["oa3"] },
    "application/vnd.fujitsu.oasysgp": { source: "iana", extensions: ["fg5"] },
    "application/vnd.fujitsu.oasysprs": { source: "iana", extensions: ["bh2"] },
    "application/vnd.fujixerox.art-ex": { source: "iana" },
    "application/vnd.fujixerox.art4": { source: "iana" },
    "application/vnd.fujixerox.ddd": { source: "iana", extensions: ["ddd"] },
    "application/vnd.fujixerox.docuworks": { source: "iana", extensions: ["xdw"] },
    "application/vnd.fujixerox.docuworks.binder": { source: "iana", extensions: ["xbd"] },
    "application/vnd.fujixerox.docuworks.container": { source: "iana" },
    "application/vnd.fujixerox.hbpl": { source: "iana" },
    "application/vnd.fut-misnet": { source: "iana" },
    "application/vnd.futoin+cbor": { source: "iana" },
    "application/vnd.futoin+json": { source: "iana", compressible: !0 },
    "application/vnd.fuzzysheet": { source: "iana", extensions: ["fzs"] },
    "application/vnd.genomatix.tuxedo": { source: "iana", extensions: ["txd"] },
    "application/vnd.gentics.grd+json": { source: "iana", compressible: !0 },
    "application/vnd.geo+json": { source: "iana", compressible: !0 },
    "application/vnd.geocube+xml": { source: "iana", compressible: !0 },
    "application/vnd.geogebra.file": { source: "iana", extensions: ["ggb"] },
    "application/vnd.geogebra.slides": { source: "iana" },
    "application/vnd.geogebra.tool": { source: "iana", extensions: ["ggt"] },
    "application/vnd.geometry-explorer": { source: "iana", extensions: ["gex", "gre"] },
    "application/vnd.geonext": { source: "iana", extensions: ["gxt"] },
    "application/vnd.geoplan": { source: "iana", extensions: ["g2w"] },
    "application/vnd.geospace": { source: "iana", extensions: ["g3w"] },
    "application/vnd.gerber": { source: "iana" },
    "application/vnd.globalplatform.card-content-mgt": { source: "iana" },
    "application/vnd.globalplatform.card-content-mgt-response": { source: "iana" },
    "application/vnd.gmx": { source: "iana", extensions: ["gmx"] },
    "application/vnd.google-apps.document": { compressible: !1, extensions: ["gdoc"] },
    "application/vnd.google-apps.presentation": { compressible: !1, extensions: ["gslides"] },
    "application/vnd.google-apps.spreadsheet": { compressible: !1, extensions: ["gsheet"] },
    "application/vnd.google-earth.kml+xml": { source: "iana", compressible: !0, extensions: ["kml"] },
    "application/vnd.google-earth.kmz": { source: "iana", compressible: !1, extensions: ["kmz"] },
    "application/vnd.gov.sk.e-form+xml": { source: "iana", compressible: !0 },
    "application/vnd.gov.sk.e-form+zip": { source: "iana", compressible: !1 },
    "application/vnd.gov.sk.xmldatacontainer+xml": { source: "iana", compressible: !0 },
    "application/vnd.grafeq": { source: "iana", extensions: ["gqf", "gqs"] },
    "application/vnd.gridmp": { source: "iana" },
    "application/vnd.groove-account": { source: "iana", extensions: ["gac"] },
    "application/vnd.groove-help": { source: "iana", extensions: ["ghf"] },
    "application/vnd.groove-identity-message": { source: "iana", extensions: ["gim"] },
    "application/vnd.groove-injector": { source: "iana", extensions: ["grv"] },
    "application/vnd.groove-tool-message": { source: "iana", extensions: ["gtm"] },
    "application/vnd.groove-tool-template": { source: "iana", extensions: ["tpl"] },
    "application/vnd.groove-vcard": { source: "iana", extensions: ["vcg"] },
    "application/vnd.hal+json": { source: "iana", compressible: !0 },
    "application/vnd.hal+xml": { source: "iana", compressible: !0, extensions: ["hal"] },
    "application/vnd.handheld-entertainment+xml": { source: "iana", compressible: !0, extensions: ["zmm"] },
    "application/vnd.hbci": { source: "iana", extensions: ["hbci"] },
    "application/vnd.hc+json": { source: "iana", compressible: !0 },
    "application/vnd.hcl-bireports": { source: "iana" },
    "application/vnd.hdt": { source: "iana" },
    "application/vnd.heroku+json": { source: "iana", compressible: !0 },
    "application/vnd.hhe.lesson-player": { source: "iana", extensions: ["les"] },
    "application/vnd.hl7cda+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/vnd.hl7v2+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/vnd.hp-hpgl": { source: "iana", extensions: ["hpgl"] },
    "application/vnd.hp-hpid": { source: "iana", extensions: ["hpid"] },
    "application/vnd.hp-hps": { source: "iana", extensions: ["hps"] },
    "application/vnd.hp-jlyt": { source: "iana", extensions: ["jlt"] },
    "application/vnd.hp-pcl": { source: "iana", extensions: ["pcl"] },
    "application/vnd.hp-pclxl": { source: "iana", extensions: ["pclxl"] },
    "application/vnd.httphone": { source: "iana" },
    "application/vnd.hydrostatix.sof-data": { source: "iana", extensions: ["sfd-hdstx"] },
    "application/vnd.hyper+json": { source: "iana", compressible: !0 },
    "application/vnd.hyper-item+json": { source: "iana", compressible: !0 },
    "application/vnd.hyperdrive+json": { source: "iana", compressible: !0 },
    "application/vnd.hzn-3d-crossword": { source: "iana" },
    "application/vnd.ibm.afplinedata": { source: "iana" },
    "application/vnd.ibm.electronic-media": { source: "iana" },
    "application/vnd.ibm.minipay": { source: "iana", extensions: ["mpy"] },
    "application/vnd.ibm.modcap": { source: "iana", extensions: ["afp", "listafp", "list3820"] },
    "application/vnd.ibm.rights-management": { source: "iana", extensions: ["irm"] },
    "application/vnd.ibm.secure-container": { source: "iana", extensions: ["sc"] },
    "application/vnd.iccprofile": { source: "iana", extensions: ["icc", "icm"] },
    "application/vnd.ieee.1905": { source: "iana" },
    "application/vnd.igloader": { source: "iana", extensions: ["igl"] },
    "application/vnd.imagemeter.folder+zip": { source: "iana", compressible: !1 },
    "application/vnd.imagemeter.image+zip": { source: "iana", compressible: !1 },
    "application/vnd.immervision-ivp": { source: "iana", extensions: ["ivp"] },
    "application/vnd.immervision-ivu": { source: "iana", extensions: ["ivu"] },
    "application/vnd.ims.imsccv1p1": { source: "iana" },
    "application/vnd.ims.imsccv1p2": { source: "iana" },
    "application/vnd.ims.imsccv1p3": { source: "iana" },
    "application/vnd.ims.lis.v2.result+json": { source: "iana", compressible: !0 },
    "application/vnd.ims.lti.v2.toolconsumerprofile+json": { source: "iana", compressible: !0 },
    "application/vnd.ims.lti.v2.toolproxy+json": { source: "iana", compressible: !0 },
    "application/vnd.ims.lti.v2.toolproxy.id+json": { source: "iana", compressible: !0 },
    "application/vnd.ims.lti.v2.toolsettings+json": { source: "iana", compressible: !0 },
    "application/vnd.ims.lti.v2.toolsettings.simple+json": { source: "iana", compressible: !0 },
    "application/vnd.informedcontrol.rms+xml": { source: "iana", compressible: !0 },
    "application/vnd.informix-visionary": { source: "iana" },
    "application/vnd.infotech.project": { source: "iana" },
    "application/vnd.infotech.project+xml": { source: "iana", compressible: !0 },
    "application/vnd.innopath.wamp.notification": { source: "iana" },
    "application/vnd.insors.igm": { source: "iana", extensions: ["igm"] },
    "application/vnd.intercon.formnet": { source: "iana", extensions: ["xpw", "xpx"] },
    "application/vnd.intergeo": { source: "iana", extensions: ["i2g"] },
    "application/vnd.intertrust.digibox": { source: "iana" },
    "application/vnd.intertrust.nncp": { source: "iana" },
    "application/vnd.intu.qbo": { source: "iana", extensions: ["qbo"] },
    "application/vnd.intu.qfx": { source: "iana", extensions: ["qfx"] },
    "application/vnd.iptc.g2.catalogitem+xml": { source: "iana", compressible: !0 },
    "application/vnd.iptc.g2.conceptitem+xml": { source: "iana", compressible: !0 },
    "application/vnd.iptc.g2.knowledgeitem+xml": { source: "iana", compressible: !0 },
    "application/vnd.iptc.g2.newsitem+xml": { source: "iana", compressible: !0 },
    "application/vnd.iptc.g2.newsmessage+xml": { source: "iana", compressible: !0 },
    "application/vnd.iptc.g2.packageitem+xml": { source: "iana", compressible: !0 },
    "application/vnd.iptc.g2.planningitem+xml": { source: "iana", compressible: !0 },
    "application/vnd.ipunplugged.rcprofile": { source: "iana", extensions: ["rcprofile"] },
    "application/vnd.irepository.package+xml": { source: "iana", compressible: !0, extensions: ["irp"] },
    "application/vnd.is-xpr": { source: "iana", extensions: ["xpr"] },
    "application/vnd.isac.fcs": { source: "iana", extensions: ["fcs"] },
    "application/vnd.iso11783-10+zip": { source: "iana", compressible: !1 },
    "application/vnd.jam": { source: "iana", extensions: ["jam"] },
    "application/vnd.japannet-directory-service": { source: "iana" },
    "application/vnd.japannet-jpnstore-wakeup": { source: "iana" },
    "application/vnd.japannet-payment-wakeup": { source: "iana" },
    "application/vnd.japannet-registration": { source: "iana" },
    "application/vnd.japannet-registration-wakeup": { source: "iana" },
    "application/vnd.japannet-setstore-wakeup": { source: "iana" },
    "application/vnd.japannet-verification": { source: "iana" },
    "application/vnd.japannet-verification-wakeup": { source: "iana" },
    "application/vnd.jcp.javame.midlet-rms": { source: "iana", extensions: ["rms"] },
    "application/vnd.jisp": { source: "iana", extensions: ["jisp"] },
    "application/vnd.joost.joda-archive": { source: "iana", extensions: ["joda"] },
    "application/vnd.jsk.isdn-ngn": { source: "iana" },
    "application/vnd.kahootz": { source: "iana", extensions: ["ktz", "ktr"] },
    "application/vnd.kde.karbon": { source: "iana", extensions: ["karbon"] },
    "application/vnd.kde.kchart": { source: "iana", extensions: ["chrt"] },
    "application/vnd.kde.kformula": { source: "iana", extensions: ["kfo"] },
    "application/vnd.kde.kivio": { source: "iana", extensions: ["flw"] },
    "application/vnd.kde.kontour": { source: "iana", extensions: ["kon"] },
    "application/vnd.kde.kpresenter": { source: "iana", extensions: ["kpr", "kpt"] },
    "application/vnd.kde.kspread": { source: "iana", extensions: ["ksp"] },
    "application/vnd.kde.kword": { source: "iana", extensions: ["kwd", "kwt"] },
    "application/vnd.kenameaapp": { source: "iana", extensions: ["htke"] },
    "application/vnd.kidspiration": { source: "iana", extensions: ["kia"] },
    "application/vnd.kinar": { source: "iana", extensions: ["kne", "knp"] },
    "application/vnd.koan": { source: "iana", extensions: ["skp", "skd", "skt", "skm"] },
    "application/vnd.kodak-descriptor": { source: "iana", extensions: ["sse"] },
    "application/vnd.las": { source: "iana" },
    "application/vnd.las.las+json": { source: "iana", compressible: !0 },
    "application/vnd.las.las+xml": { source: "iana", compressible: !0, extensions: ["lasxml"] },
    "application/vnd.laszip": { source: "iana" },
    "application/vnd.leap+json": { source: "iana", compressible: !0 },
    "application/vnd.liberty-request+xml": { source: "iana", compressible: !0 },
    "application/vnd.llamagraphics.life-balance.desktop": { source: "iana", extensions: ["lbd"] },
    "application/vnd.llamagraphics.life-balance.exchange+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["lbe"],
    },
    "application/vnd.logipipe.circuit+zip": { source: "iana", compressible: !1 },
    "application/vnd.loom": { source: "iana" },
    "application/vnd.lotus-1-2-3": { source: "iana", extensions: ["123"] },
    "application/vnd.lotus-approach": { source: "iana", extensions: ["apr"] },
    "application/vnd.lotus-freelance": { source: "iana", extensions: ["pre"] },
    "application/vnd.lotus-notes": { source: "iana", extensions: ["nsf"] },
    "application/vnd.lotus-organizer": { source: "iana", extensions: ["org"] },
    "application/vnd.lotus-screencam": { source: "iana", extensions: ["scm"] },
    "application/vnd.lotus-wordpro": { source: "iana", extensions: ["lwp"] },
    "application/vnd.macports.portpkg": { source: "iana", extensions: ["portpkg"] },
    "application/vnd.mapbox-vector-tile": { source: "iana", extensions: ["mvt"] },
    "application/vnd.marlin.drm.actiontoken+xml": { source: "iana", compressible: !0 },
    "application/vnd.marlin.drm.conftoken+xml": { source: "iana", compressible: !0 },
    "application/vnd.marlin.drm.license+xml": { source: "iana", compressible: !0 },
    "application/vnd.marlin.drm.mdcf": { source: "iana" },
    "application/vnd.mason+json": { source: "iana", compressible: !0 },
    "application/vnd.maxar.archive.3tz+zip": { source: "iana", compressible: !1 },
    "application/vnd.maxmind.maxmind-db": { source: "iana" },
    "application/vnd.mcd": { source: "iana", extensions: ["mcd"] },
    "application/vnd.medcalcdata": { source: "iana", extensions: ["mc1"] },
    "application/vnd.mediastation.cdkey": { source: "iana", extensions: ["cdkey"] },
    "application/vnd.meridian-slingshot": { source: "iana" },
    "application/vnd.mfer": { source: "iana", extensions: ["mwf"] },
    "application/vnd.mfmp": { source: "iana", extensions: ["mfm"] },
    "application/vnd.micro+json": { source: "iana", compressible: !0 },
    "application/vnd.micrografx.flo": { source: "iana", extensions: ["flo"] },
    "application/vnd.micrografx.igx": { source: "iana", extensions: ["igx"] },
    "application/vnd.microsoft.portable-executable": { source: "iana" },
    "application/vnd.microsoft.windows.thumbnail-cache": { source: "iana" },
    "application/vnd.miele+json": { source: "iana", compressible: !0 },
    "application/vnd.mif": { source: "iana", extensions: ["mif"] },
    "application/vnd.minisoft-hp3000-save": { source: "iana" },
    "application/vnd.mitsubishi.misty-guard.trustweb": { source: "iana" },
    "application/vnd.mobius.daf": { source: "iana", extensions: ["daf"] },
    "application/vnd.mobius.dis": { source: "iana", extensions: ["dis"] },
    "application/vnd.mobius.mbk": { source: "iana", extensions: ["mbk"] },
    "application/vnd.mobius.mqy": { source: "iana", extensions: ["mqy"] },
    "application/vnd.mobius.msl": { source: "iana", extensions: ["msl"] },
    "application/vnd.mobius.plc": { source: "iana", extensions: ["plc"] },
    "application/vnd.mobius.txf": { source: "iana", extensions: ["txf"] },
    "application/vnd.mophun.application": { source: "iana", extensions: ["mpn"] },
    "application/vnd.mophun.certificate": { source: "iana", extensions: ["mpc"] },
    "application/vnd.motorola.flexsuite": { source: "iana" },
    "application/vnd.motorola.flexsuite.adsi": { source: "iana" },
    "application/vnd.motorola.flexsuite.fis": { source: "iana" },
    "application/vnd.motorola.flexsuite.gotap": { source: "iana" },
    "application/vnd.motorola.flexsuite.kmr": { source: "iana" },
    "application/vnd.motorola.flexsuite.ttc": { source: "iana" },
    "application/vnd.motorola.flexsuite.wem": { source: "iana" },
    "application/vnd.motorola.iprm": { source: "iana" },
    "application/vnd.mozilla.xul+xml": { source: "iana", compressible: !0, extensions: ["xul"] },
    "application/vnd.ms-3mfdocument": { source: "iana" },
    "application/vnd.ms-artgalry": { source: "iana", extensions: ["cil"] },
    "application/vnd.ms-asf": { source: "iana" },
    "application/vnd.ms-cab-compressed": { source: "iana", extensions: ["cab"] },
    "application/vnd.ms-color.iccprofile": { source: "apache" },
    "application/vnd.ms-excel": {
      source: "iana",
      compressible: !1,
      extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
    },
    "application/vnd.ms-excel.addin.macroenabled.12": { source: "iana", extensions: ["xlam"] },
    "application/vnd.ms-excel.sheet.binary.macroenabled.12": { source: "iana", extensions: ["xlsb"] },
    "application/vnd.ms-excel.sheet.macroenabled.12": { source: "iana", extensions: ["xlsm"] },
    "application/vnd.ms-excel.template.macroenabled.12": { source: "iana", extensions: ["xltm"] },
    "application/vnd.ms-fontobject": { source: "iana", compressible: !0, extensions: ["eot"] },
    "application/vnd.ms-htmlhelp": { source: "iana", extensions: ["chm"] },
    "application/vnd.ms-ims": { source: "iana", extensions: ["ims"] },
    "application/vnd.ms-lrm": { source: "iana", extensions: ["lrm"] },
    "application/vnd.ms-office.activex+xml": { source: "iana", compressible: !0 },
    "application/vnd.ms-officetheme": { source: "iana", extensions: ["thmx"] },
    "application/vnd.ms-opentype": { source: "apache", compressible: !0 },
    "application/vnd.ms-outlook": { compressible: !1, extensions: ["msg"] },
    "application/vnd.ms-package.obfuscated-opentype": { source: "apache" },
    "application/vnd.ms-pki.seccat": { source: "apache", extensions: ["cat"] },
    "application/vnd.ms-pki.stl": { source: "apache", extensions: ["stl"] },
    "application/vnd.ms-playready.initiator+xml": { source: "iana", compressible: !0 },
    "application/vnd.ms-powerpoint": { source: "iana", compressible: !1, extensions: ["ppt", "pps", "pot"] },
    "application/vnd.ms-powerpoint.addin.macroenabled.12": { source: "iana", extensions: ["ppam"] },
    "application/vnd.ms-powerpoint.presentation.macroenabled.12": { source: "iana", extensions: ["pptm"] },
    "application/vnd.ms-powerpoint.slide.macroenabled.12": { source: "iana", extensions: ["sldm"] },
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12": { source: "iana", extensions: ["ppsm"] },
    "application/vnd.ms-powerpoint.template.macroenabled.12": { source: "iana", extensions: ["potm"] },
    "application/vnd.ms-printdevicecapabilities+xml": { source: "iana", compressible: !0 },
    "application/vnd.ms-printing.printticket+xml": { source: "apache", compressible: !0 },
    "application/vnd.ms-printschematicket+xml": { source: "iana", compressible: !0 },
    "application/vnd.ms-project": { source: "iana", extensions: ["mpp", "mpt"] },
    "application/vnd.ms-tnef": { source: "iana" },
    "application/vnd.ms-windows.devicepairing": { source: "iana" },
    "application/vnd.ms-windows.nwprinting.oob": { source: "iana" },
    "application/vnd.ms-windows.printerpairing": { source: "iana" },
    "application/vnd.ms-windows.wsd.oob": { source: "iana" },
    "application/vnd.ms-wmdrm.lic-chlg-req": { source: "iana" },
    "application/vnd.ms-wmdrm.lic-resp": { source: "iana" },
    "application/vnd.ms-wmdrm.meter-chlg-req": { source: "iana" },
    "application/vnd.ms-wmdrm.meter-resp": { source: "iana" },
    "application/vnd.ms-word.document.macroenabled.12": { source: "iana", extensions: ["docm"] },
    "application/vnd.ms-word.template.macroenabled.12": { source: "iana", extensions: ["dotm"] },
    "application/vnd.ms-works": { source: "iana", extensions: ["wps", "wks", "wcm", "wdb"] },
    "application/vnd.ms-wpl": { source: "iana", extensions: ["wpl"] },
    "application/vnd.ms-xpsdocument": { source: "iana", compressible: !1, extensions: ["xps"] },
    "application/vnd.msa-disk-image": { source: "iana" },
    "application/vnd.mseq": { source: "iana", extensions: ["mseq"] },
    "application/vnd.msign": { source: "iana" },
    "application/vnd.multiad.creator": { source: "iana" },
    "application/vnd.multiad.creator.cif": { source: "iana" },
    "application/vnd.music-niff": { source: "iana" },
    "application/vnd.musician": { source: "iana", extensions: ["mus"] },
    "application/vnd.muvee.style": { source: "iana", extensions: ["msty"] },
    "application/vnd.mynfc": { source: "iana", extensions: ["taglet"] },
    "application/vnd.nacamar.ybrid+json": { source: "iana", compressible: !0 },
    "application/vnd.ncd.control": { source: "iana" },
    "application/vnd.ncd.reference": { source: "iana" },
    "application/vnd.nearst.inv+json": { source: "iana", compressible: !0 },
    "application/vnd.nebumind.line": { source: "iana" },
    "application/vnd.nervana": { source: "iana" },
    "application/vnd.netfpx": { source: "iana" },
    "application/vnd.neurolanguage.nlu": { source: "iana", extensions: ["nlu"] },
    "application/vnd.nimn": { source: "iana" },
    "application/vnd.nintendo.nitro.rom": { source: "iana" },
    "application/vnd.nintendo.snes.rom": { source: "iana" },
    "application/vnd.nitf": { source: "iana", extensions: ["ntf", "nitf"] },
    "application/vnd.noblenet-directory": { source: "iana", extensions: ["nnd"] },
    "application/vnd.noblenet-sealer": { source: "iana", extensions: ["nns"] },
    "application/vnd.noblenet-web": { source: "iana", extensions: ["nnw"] },
    "application/vnd.nokia.catalogs": { source: "iana" },
    "application/vnd.nokia.conml+wbxml": { source: "iana" },
    "application/vnd.nokia.conml+xml": { source: "iana", compressible: !0 },
    "application/vnd.nokia.iptv.config+xml": { source: "iana", compressible: !0 },
    "application/vnd.nokia.isds-radio-presets": { source: "iana" },
    "application/vnd.nokia.landmark+wbxml": { source: "iana" },
    "application/vnd.nokia.landmark+xml": { source: "iana", compressible: !0 },
    "application/vnd.nokia.landmarkcollection+xml": { source: "iana", compressible: !0 },
    "application/vnd.nokia.n-gage.ac+xml": { source: "iana", compressible: !0, extensions: ["ac"] },
    "application/vnd.nokia.n-gage.data": { source: "iana", extensions: ["ngdat"] },
    "application/vnd.nokia.n-gage.symbian.install": { source: "iana", extensions: ["n-gage"] },
    "application/vnd.nokia.ncd": { source: "iana" },
    "application/vnd.nokia.pcd+wbxml": { source: "iana" },
    "application/vnd.nokia.pcd+xml": { source: "iana", compressible: !0 },
    "application/vnd.nokia.radio-preset": { source: "iana", extensions: ["rpst"] },
    "application/vnd.nokia.radio-presets": { source: "iana", extensions: ["rpss"] },
    "application/vnd.novadigm.edm": { source: "iana", extensions: ["edm"] },
    "application/vnd.novadigm.edx": { source: "iana", extensions: ["edx"] },
    "application/vnd.novadigm.ext": { source: "iana", extensions: ["ext"] },
    "application/vnd.ntt-local.content-share": { source: "iana" },
    "application/vnd.ntt-local.file-transfer": { source: "iana" },
    "application/vnd.ntt-local.ogw_remote-access": { source: "iana" },
    "application/vnd.ntt-local.sip-ta_remote": { source: "iana" },
    "application/vnd.ntt-local.sip-ta_tcp_stream": { source: "iana" },
    "application/vnd.oasis.opendocument.chart": { source: "iana", extensions: ["odc"] },
    "application/vnd.oasis.opendocument.chart-template": { source: "iana", extensions: ["otc"] },
    "application/vnd.oasis.opendocument.database": { source: "iana", extensions: ["odb"] },
    "application/vnd.oasis.opendocument.formula": { source: "iana", extensions: ["odf"] },
    "application/vnd.oasis.opendocument.formula-template": { source: "iana", extensions: ["odft"] },
    "application/vnd.oasis.opendocument.graphics": { source: "iana", compressible: !1, extensions: ["odg"] },
    "application/vnd.oasis.opendocument.graphics-template": { source: "iana", extensions: ["otg"] },
    "application/vnd.oasis.opendocument.image": { source: "iana", extensions: ["odi"] },
    "application/vnd.oasis.opendocument.image-template": { source: "iana", extensions: ["oti"] },
    "application/vnd.oasis.opendocument.presentation": { source: "iana", compressible: !1, extensions: ["odp"] },
    "application/vnd.oasis.opendocument.presentation-template": { source: "iana", extensions: ["otp"] },
    "application/vnd.oasis.opendocument.spreadsheet": { source: "iana", compressible: !1, extensions: ["ods"] },
    "application/vnd.oasis.opendocument.spreadsheet-template": { source: "iana", extensions: ["ots"] },
    "application/vnd.oasis.opendocument.text": { source: "iana", compressible: !1, extensions: ["odt"] },
    "application/vnd.oasis.opendocument.text-master": { source: "iana", extensions: ["odm"] },
    "application/vnd.oasis.opendocument.text-template": { source: "iana", extensions: ["ott"] },
    "application/vnd.oasis.opendocument.text-web": { source: "iana", extensions: ["oth"] },
    "application/vnd.obn": { source: "iana" },
    "application/vnd.ocf+cbor": { source: "iana" },
    "application/vnd.oci.image.manifest.v1+json": { source: "iana", compressible: !0 },
    "application/vnd.oftn.l10n+json": { source: "iana", compressible: !0 },
    "application/vnd.oipf.contentaccessdownload+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.contentaccessstreaming+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.cspg-hexbinary": { source: "iana" },
    "application/vnd.oipf.dae.svg+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.dae.xhtml+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.mippvcontrolmessage+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.pae.gem": { source: "iana" },
    "application/vnd.oipf.spdiscovery+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.spdlist+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.ueprofile+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.userprofile+xml": { source: "iana", compressible: !0 },
    "application/vnd.olpc-sugar": { source: "iana", extensions: ["xo"] },
    "application/vnd.oma-scws-config": { source: "iana" },
    "application/vnd.oma-scws-http-request": { source: "iana" },
    "application/vnd.oma-scws-http-response": { source: "iana" },
    "application/vnd.oma.bcast.associated-procedure-parameter+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.bcast.drm-trigger+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.bcast.imd+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.bcast.ltkm": { source: "iana" },
    "application/vnd.oma.bcast.notification+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.bcast.provisioningtrigger": { source: "iana" },
    "application/vnd.oma.bcast.sgboot": { source: "iana" },
    "application/vnd.oma.bcast.sgdd+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.bcast.sgdu": { source: "iana" },
    "application/vnd.oma.bcast.simple-symbol-container": { source: "iana" },
    "application/vnd.oma.bcast.smartcard-trigger+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.bcast.sprov+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.bcast.stkm": { source: "iana" },
    "application/vnd.oma.cab-address-book+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.cab-feature-handler+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.cab-pcc+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.cab-subs-invite+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.cab-user-prefs+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.dcd": { source: "iana" },
    "application/vnd.oma.dcdc": { source: "iana" },
    "application/vnd.oma.dd2+xml": { source: "iana", compressible: !0, extensions: ["dd2"] },
    "application/vnd.oma.drm.risd+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.group-usage-list+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.lwm2m+cbor": { source: "iana" },
    "application/vnd.oma.lwm2m+json": { source: "iana", compressible: !0 },
    "application/vnd.oma.lwm2m+tlv": { source: "iana" },
    "application/vnd.oma.pal+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.poc.detailed-progress-report+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.poc.final-report+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.poc.groups+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.poc.invocation-descriptor+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.poc.optimized-progress-report+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.push": { source: "iana" },
    "application/vnd.oma.scidm.messages+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.xcap-directory+xml": { source: "iana", compressible: !0 },
    "application/vnd.omads-email+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/vnd.omads-file+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/vnd.omads-folder+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/vnd.omaloc-supl-init": { source: "iana" },
    "application/vnd.onepager": { source: "iana" },
    "application/vnd.onepagertamp": { source: "iana" },
    "application/vnd.onepagertamx": { source: "iana" },
    "application/vnd.onepagertat": { source: "iana" },
    "application/vnd.onepagertatp": { source: "iana" },
    "application/vnd.onepagertatx": { source: "iana" },
    "application/vnd.openblox.game+xml": { source: "iana", compressible: !0, extensions: ["obgx"] },
    "application/vnd.openblox.game-binary": { source: "iana" },
    "application/vnd.openeye.oeb": { source: "iana" },
    "application/vnd.openofficeorg.extension": { source: "apache", extensions: ["oxt"] },
    "application/vnd.openstreetmap.data+xml": { source: "iana", compressible: !0, extensions: ["osm"] },
    "application/vnd.opentimestamps.ots": { source: "iana" },
    "application/vnd.openxmlformats-officedocument.custom-properties+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.drawing+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.extended-properties+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
      source: "iana",
      compressible: !1,
      extensions: ["pptx"],
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.slide": { source: "iana", extensions: ["sldx"] },
    "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow": { source: "iana", extensions: ["ppsx"] },
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.template": { source: "iana", extensions: ["potx"] },
    "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
      source: "iana",
      compressible: !1,
      extensions: ["xlsx"],
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template": { source: "iana", extensions: ["xltx"] },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.theme+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.themeoverride+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.vmldrawing": { source: "iana" },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
      source: "iana",
      compressible: !1,
      extensions: ["docx"],
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": { source: "iana", extensions: ["dotx"] },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-package.core-properties+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-package.relationships+xml": { source: "iana", compressible: !0 },
    "application/vnd.oracle.resource+json": { source: "iana", compressible: !0 },
    "application/vnd.orange.indata": { source: "iana" },
    "application/vnd.osa.netdeploy": { source: "iana" },
    "application/vnd.osgeo.mapguide.package": { source: "iana", extensions: ["mgp"] },
    "application/vnd.osgi.bundle": { source: "iana" },
    "application/vnd.osgi.dp": { source: "iana", extensions: ["dp"] },
    "application/vnd.osgi.subsystem": { source: "iana", extensions: ["esa"] },
    "application/vnd.otps.ct-kip+xml": { source: "iana", compressible: !0 },
    "application/vnd.oxli.countgraph": { source: "iana" },
    "application/vnd.pagerduty+json": { source: "iana", compressible: !0 },
    "application/vnd.palm": { source: "iana", extensions: ["pdb", "pqa", "oprc"] },
    "application/vnd.panoply": { source: "iana" },
    "application/vnd.paos.xml": { source: "iana" },
    "application/vnd.patentdive": { source: "iana" },
    "application/vnd.patientecommsdoc": { source: "iana" },
    "application/vnd.pawaafile": { source: "iana", extensions: ["paw"] },
    "application/vnd.pcos": { source: "iana" },
    "application/vnd.pg.format": { source: "iana", extensions: ["str"] },
    "application/vnd.pg.osasli": { source: "iana", extensions: ["ei6"] },
    "application/vnd.piaccess.application-licence": { source: "iana" },
    "application/vnd.picsel": { source: "iana", extensions: ["efif"] },
    "application/vnd.pmi.widget": { source: "iana", extensions: ["wg"] },
    "application/vnd.poc.group-advertisement+xml": { source: "iana", compressible: !0 },
    "application/vnd.pocketlearn": { source: "iana", extensions: ["plf"] },
    "application/vnd.powerbuilder6": { source: "iana", extensions: ["pbd"] },
    "application/vnd.powerbuilder6-s": { source: "iana" },
    "application/vnd.powerbuilder7": { source: "iana" },
    "application/vnd.powerbuilder7-s": { source: "iana" },
    "application/vnd.powerbuilder75": { source: "iana" },
    "application/vnd.powerbuilder75-s": { source: "iana" },
    "application/vnd.preminet": { source: "iana" },
    "application/vnd.previewsystems.box": { source: "iana", extensions: ["box"] },
    "application/vnd.proteus.magazine": { source: "iana", extensions: ["mgz"] },
    "application/vnd.psfs": { source: "iana" },
    "application/vnd.publishare-delta-tree": { source: "iana", extensions: ["qps"] },
    "application/vnd.pvi.ptid1": { source: "iana", extensions: ["ptid"] },
    "application/vnd.pwg-multiplexed": { source: "iana" },
    "application/vnd.pwg-xhtml-print+xml": { source: "iana", compressible: !0 },
    "application/vnd.qualcomm.brew-app-res": { source: "iana" },
    "application/vnd.quarantainenet": { source: "iana" },
    "application/vnd.quark.quarkxpress": { source: "iana", extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"] },
    "application/vnd.quobject-quoxdocument": { source: "iana" },
    "application/vnd.radisys.moml+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-audit+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-audit-conf+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-audit-conn+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-audit-dialog+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-audit-stream+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-conf+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-dialog+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-dialog-base+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-dialog-fax-detect+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-dialog-group+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-dialog-speech+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-dialog-transform+xml": { source: "iana", compressible: !0 },
    "application/vnd.rainstor.data": { source: "iana" },
    "application/vnd.rapid": { source: "iana" },
    "application/vnd.rar": { source: "iana", extensions: ["rar"] },
    "application/vnd.realvnc.bed": { source: "iana", extensions: ["bed"] },
    "application/vnd.recordare.musicxml": { source: "iana", extensions: ["mxl"] },
    "application/vnd.recordare.musicxml+xml": { source: "iana", compressible: !0, extensions: ["musicxml"] },
    "application/vnd.renlearn.rlprint": { source: "iana" },
    "application/vnd.resilient.logic": { source: "iana" },
    "application/vnd.restful+json": { source: "iana", compressible: !0 },
    "application/vnd.rig.cryptonote": { source: "iana", extensions: ["cryptonote"] },
    "application/vnd.rim.cod": { source: "apache", extensions: ["cod"] },
    "application/vnd.rn-realmedia": { source: "apache", extensions: ["rm"] },
    "application/vnd.rn-realmedia-vbr": { source: "apache", extensions: ["rmvb"] },
    "application/vnd.route66.link66+xml": { source: "iana", compressible: !0, extensions: ["link66"] },
    "application/vnd.rs-274x": { source: "iana" },
    "application/vnd.ruckus.download": { source: "iana" },
    "application/vnd.s3sms": { source: "iana" },
    "application/vnd.sailingtracker.track": { source: "iana", extensions: ["st"] },
    "application/vnd.sar": { source: "iana" },
    "application/vnd.sbm.cid": { source: "iana" },
    "application/vnd.sbm.mid2": { source: "iana" },
    "application/vnd.scribus": { source: "iana" },
    "application/vnd.sealed.3df": { source: "iana" },
    "application/vnd.sealed.csf": { source: "iana" },
    "application/vnd.sealed.doc": { source: "iana" },
    "application/vnd.sealed.eml": { source: "iana" },
    "application/vnd.sealed.mht": { source: "iana" },
    "application/vnd.sealed.net": { source: "iana" },
    "application/vnd.sealed.ppt": { source: "iana" },
    "application/vnd.sealed.tiff": { source: "iana" },
    "application/vnd.sealed.xls": { source: "iana" },
    "application/vnd.sealedmedia.softseal.html": { source: "iana" },
    "application/vnd.sealedmedia.softseal.pdf": { source: "iana" },
    "application/vnd.seemail": { source: "iana", extensions: ["see"] },
    "application/vnd.seis+json": { source: "iana", compressible: !0 },
    "application/vnd.sema": { source: "iana", extensions: ["sema"] },
    "application/vnd.semd": { source: "iana", extensions: ["semd"] },
    "application/vnd.semf": { source: "iana", extensions: ["semf"] },
    "application/vnd.shade-save-file": { source: "iana" },
    "application/vnd.shana.informed.formdata": { source: "iana", extensions: ["ifm"] },
    "application/vnd.shana.informed.formtemplate": { source: "iana", extensions: ["itp"] },
    "application/vnd.shana.informed.interchange": { source: "iana", extensions: ["iif"] },
    "application/vnd.shana.informed.package": { source: "iana", extensions: ["ipk"] },
    "application/vnd.shootproof+json": { source: "iana", compressible: !0 },
    "application/vnd.shopkick+json": { source: "iana", compressible: !0 },
    "application/vnd.shp": { source: "iana" },
    "application/vnd.shx": { source: "iana" },
    "application/vnd.sigrok.session": { source: "iana" },
    "application/vnd.simtech-mindmapper": { source: "iana", extensions: ["twd", "twds"] },
    "application/vnd.siren+json": { source: "iana", compressible: !0 },
    "application/vnd.smaf": { source: "iana", extensions: ["mmf"] },
    "application/vnd.smart.notebook": { source: "iana" },
    "application/vnd.smart.teacher": { source: "iana", extensions: ["teacher"] },
    "application/vnd.snesdev-page-table": { source: "iana" },
    "application/vnd.software602.filler.form+xml": { source: "iana", compressible: !0, extensions: ["fo"] },
    "application/vnd.software602.filler.form-xml-zip": { source: "iana" },
    "application/vnd.solent.sdkm+xml": { source: "iana", compressible: !0, extensions: ["sdkm", "sdkd"] },
    "application/vnd.spotfire.dxp": { source: "iana", extensions: ["dxp"] },
    "application/vnd.spotfire.sfs": { source: "iana", extensions: ["sfs"] },
    "application/vnd.sqlite3": { source: "iana" },
    "application/vnd.sss-cod": { source: "iana" },
    "application/vnd.sss-dtf": { source: "iana" },
    "application/vnd.sss-ntf": { source: "iana" },
    "application/vnd.stardivision.calc": { source: "apache", extensions: ["sdc"] },
    "application/vnd.stardivision.draw": { source: "apache", extensions: ["sda"] },
    "application/vnd.stardivision.impress": { source: "apache", extensions: ["sdd"] },
    "application/vnd.stardivision.math": { source: "apache", extensions: ["smf"] },
    "application/vnd.stardivision.writer": { source: "apache", extensions: ["sdw", "vor"] },
    "application/vnd.stardivision.writer-global": { source: "apache", extensions: ["sgl"] },
    "application/vnd.stepmania.package": { source: "iana", extensions: ["smzip"] },
    "application/vnd.stepmania.stepchart": { source: "iana", extensions: ["sm"] },
    "application/vnd.street-stream": { source: "iana" },
    "application/vnd.sun.wadl+xml": { source: "iana", compressible: !0, extensions: ["wadl"] },
    "application/vnd.sun.xml.calc": { source: "apache", extensions: ["sxc"] },
    "application/vnd.sun.xml.calc.template": { source: "apache", extensions: ["stc"] },
    "application/vnd.sun.xml.draw": { source: "apache", extensions: ["sxd"] },
    "application/vnd.sun.xml.draw.template": { source: "apache", extensions: ["std"] },
    "application/vnd.sun.xml.impress": { source: "apache", extensions: ["sxi"] },
    "application/vnd.sun.xml.impress.template": { source: "apache", extensions: ["sti"] },
    "application/vnd.sun.xml.math": { source: "apache", extensions: ["sxm"] },
    "application/vnd.sun.xml.writer": { source: "apache", extensions: ["sxw"] },
    "application/vnd.sun.xml.writer.global": { source: "apache", extensions: ["sxg"] },
    "application/vnd.sun.xml.writer.template": { source: "apache", extensions: ["stw"] },
    "application/vnd.sus-calendar": { source: "iana", extensions: ["sus", "susp"] },
    "application/vnd.svd": { source: "iana", extensions: ["svd"] },
    "application/vnd.swiftview-ics": { source: "iana" },
    "application/vnd.sycle+xml": { source: "iana", compressible: !0 },
    "application/vnd.syft+json": { source: "iana", compressible: !0 },
    "application/vnd.symbian.install": { source: "apache", extensions: ["sis", "sisx"] },
    "application/vnd.syncml+xml": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["xsm"] },
    "application/vnd.syncml.dm+wbxml": { source: "iana", charset: "UTF-8", extensions: ["bdm"] },
    "application/vnd.syncml.dm+xml": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["xdm"] },
    "application/vnd.syncml.dm.notification": { source: "iana" },
    "application/vnd.syncml.dmddf+wbxml": { source: "iana" },
    "application/vnd.syncml.dmddf+xml": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["ddf"] },
    "application/vnd.syncml.dmtnds+wbxml": { source: "iana" },
    "application/vnd.syncml.dmtnds+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
    "application/vnd.syncml.ds.notification": { source: "iana" },
    "application/vnd.tableschema+json": { source: "iana", compressible: !0 },
    "application/vnd.tao.intent-module-archive": { source: "iana", extensions: ["tao"] },
    "application/vnd.tcpdump.pcap": { source: "iana", extensions: ["pcap", "cap", "dmp"] },
    "application/vnd.think-cell.ppttc+json": { source: "iana", compressible: !0 },
    "application/vnd.tmd.mediaflex.api+xml": { source: "iana", compressible: !0 },
    "application/vnd.tml": { source: "iana" },
    "application/vnd.tmobile-livetv": { source: "iana", extensions: ["tmo"] },
    "application/vnd.tri.onesource": { source: "iana" },
    "application/vnd.trid.tpt": { source: "iana", extensions: ["tpt"] },
    "application/vnd.triscape.mxs": { source: "iana", extensions: ["mxs"] },
    "application/vnd.trueapp": { source: "iana", extensions: ["tra"] },
    "application/vnd.truedoc": { source: "iana" },
    "application/vnd.ubisoft.webplayer": { source: "iana" },
    "application/vnd.ufdl": { source: "iana", extensions: ["ufd", "ufdl"] },
    "application/vnd.uiq.theme": { source: "iana", extensions: ["utz"] },
    "application/vnd.umajin": { source: "iana", extensions: ["umj"] },
    "application/vnd.unity": { source: "iana", extensions: ["unityweb"] },
    "application/vnd.uoml+xml": { source: "iana", compressible: !0, extensions: ["uoml"] },
    "application/vnd.uplanet.alert": { source: "iana" },
    "application/vnd.uplanet.alert-wbxml": { source: "iana" },
    "application/vnd.uplanet.bearer-choice": { source: "iana" },
    "application/vnd.uplanet.bearer-choice-wbxml": { source: "iana" },
    "application/vnd.uplanet.cacheop": { source: "iana" },
    "application/vnd.uplanet.cacheop-wbxml": { source: "iana" },
    "application/vnd.uplanet.channel": { source: "iana" },
    "application/vnd.uplanet.channel-wbxml": { source: "iana" },
    "application/vnd.uplanet.list": { source: "iana" },
    "application/vnd.uplanet.list-wbxml": { source: "iana" },
    "application/vnd.uplanet.listcmd": { source: "iana" },
    "application/vnd.uplanet.listcmd-wbxml": { source: "iana" },
    "application/vnd.uplanet.signal": { source: "iana" },
    "application/vnd.uri-map": { source: "iana" },
    "application/vnd.valve.source.material": { source: "iana" },
    "application/vnd.vcx": { source: "iana", extensions: ["vcx"] },
    "application/vnd.vd-study": { source: "iana" },
    "application/vnd.vectorworks": { source: "iana" },
    "application/vnd.vel+json": { source: "iana", compressible: !0 },
    "application/vnd.verimatrix.vcas": { source: "iana" },
    "application/vnd.veritone.aion+json": { source: "iana", compressible: !0 },
    "application/vnd.veryant.thin": { source: "iana" },
    "application/vnd.ves.encrypted": { source: "iana" },
    "application/vnd.vidsoft.vidconference": { source: "iana" },
    "application/vnd.visio": { source: "iana", extensions: ["vsd", "vst", "vss", "vsw"] },
    "application/vnd.visionary": { source: "iana", extensions: ["vis"] },
    "application/vnd.vividence.scriptfile": { source: "iana" },
    "application/vnd.vsf": { source: "iana", extensions: ["vsf"] },
    "application/vnd.wap.sic": { source: "iana" },
    "application/vnd.wap.slc": { source: "iana" },
    "application/vnd.wap.wbxml": { source: "iana", charset: "UTF-8", extensions: ["wbxml"] },
    "application/vnd.wap.wmlc": { source: "iana", extensions: ["wmlc"] },
    "application/vnd.wap.wmlscriptc": { source: "iana", extensions: ["wmlsc"] },
    "application/vnd.webturbo": { source: "iana", extensions: ["wtb"] },
    "application/vnd.wfa.dpp": { source: "iana" },
    "application/vnd.wfa.p2p": { source: "iana" },
    "application/vnd.wfa.wsc": { source: "iana" },
    "application/vnd.windows.devicepairing": { source: "iana" },
    "application/vnd.wmc": { source: "iana" },
    "application/vnd.wmf.bootstrap": { source: "iana" },
    "application/vnd.wolfram.mathematica": { source: "iana" },
    "application/vnd.wolfram.mathematica.package": { source: "iana" },
    "application/vnd.wolfram.player": { source: "iana", extensions: ["nbp"] },
    "application/vnd.wordperfect": { source: "iana", extensions: ["wpd"] },
    "application/vnd.wqd": { source: "iana", extensions: ["wqd"] },
    "application/vnd.wrq-hp3000-labelled": { source: "iana" },
    "application/vnd.wt.stf": { source: "iana", extensions: ["stf"] },
    "application/vnd.wv.csp+wbxml": { source: "iana" },
    "application/vnd.wv.csp+xml": { source: "iana", compressible: !0 },
    "application/vnd.wv.ssp+xml": { source: "iana", compressible: !0 },
    "application/vnd.xacml+json": { source: "iana", compressible: !0 },
    "application/vnd.xara": { source: "iana", extensions: ["xar"] },
    "application/vnd.xfdl": { source: "iana", extensions: ["xfdl"] },
    "application/vnd.xfdl.webform": { source: "iana" },
    "application/vnd.xmi+xml": { source: "iana", compressible: !0 },
    "application/vnd.xmpie.cpkg": { source: "iana" },
    "application/vnd.xmpie.dpkg": { source: "iana" },
    "application/vnd.xmpie.plan": { source: "iana" },
    "application/vnd.xmpie.ppkg": { source: "iana" },
    "application/vnd.xmpie.xlim": { source: "iana" },
    "application/vnd.yamaha.hv-dic": { source: "iana", extensions: ["hvd"] },
    "application/vnd.yamaha.hv-script": { source: "iana", extensions: ["hvs"] },
    "application/vnd.yamaha.hv-voice": { source: "iana", extensions: ["hvp"] },
    "application/vnd.yamaha.openscoreformat": { source: "iana", extensions: ["osf"] },
    "application/vnd.yamaha.openscoreformat.osfpvg+xml": { source: "iana", compressible: !0, extensions: ["osfpvg"] },
    "application/vnd.yamaha.remote-setup": { source: "iana" },
    "application/vnd.yamaha.smaf-audio": { source: "iana", extensions: ["saf"] },
    "application/vnd.yamaha.smaf-phrase": { source: "iana", extensions: ["spf"] },
    "application/vnd.yamaha.through-ngn": { source: "iana" },
    "application/vnd.yamaha.tunnel-udpencap": { source: "iana" },
    "application/vnd.yaoweme": { source: "iana" },
    "application/vnd.yellowriver-custom-menu": { source: "iana", extensions: ["cmp"] },
    "application/vnd.youtube.yt": { source: "iana" },
    "application/vnd.zul": { source: "iana", extensions: ["zir", "zirz"] },
    "application/vnd.zzazz.deck+xml": { source: "iana", compressible: !0, extensions: ["zaz"] },
    "application/voicexml+xml": { source: "iana", compressible: !0, extensions: ["vxml"] },
    "application/voucher-cms+json": { source: "iana", compressible: !0 },
    "application/vq-rtcpxr": { source: "iana" },
    "application/wasm": { source: "iana", compressible: !0, extensions: ["wasm"] },
    "application/watcherinfo+xml": { source: "iana", compressible: !0, extensions: ["wif"] },
    "application/webpush-options+json": { source: "iana", compressible: !0 },
    "application/whoispp-query": { source: "iana" },
    "application/whoispp-response": { source: "iana" },
    "application/widget": { source: "iana", extensions: ["wgt"] },
    "application/winhlp": { source: "apache", extensions: ["hlp"] },
    "application/wita": { source: "iana" },
    "application/wordperfect5.1": { source: "iana" },
    "application/wsdl+xml": { source: "iana", compressible: !0, extensions: ["wsdl"] },
    "application/wspolicy+xml": { source: "iana", compressible: !0, extensions: ["wspolicy"] },
    "application/x-7z-compressed": { source: "apache", compressible: !1, extensions: ["7z"] },
    "application/x-abiword": { source: "apache", extensions: ["abw"] },
    "application/x-ace-compressed": { source: "apache", extensions: ["ace"] },
    "application/x-amf": { source: "apache" },
    "application/x-apple-diskimage": { source: "apache", extensions: ["dmg"] },
    "application/x-arj": { compressible: !1, extensions: ["arj"] },
    "application/x-authorware-bin": { source: "apache", extensions: ["aab", "x32", "u32", "vox"] },
    "application/x-authorware-map": { source: "apache", extensions: ["aam"] },
    "application/x-authorware-seg": { source: "apache", extensions: ["aas"] },
    "application/x-bcpio": { source: "apache", extensions: ["bcpio"] },
    "application/x-bdoc": { compressible: !1, extensions: ["bdoc"] },
    "application/x-bittorrent": { source: "apache", extensions: ["torrent"] },
    "application/x-blorb": { source: "apache", extensions: ["blb", "blorb"] },
    "application/x-bzip": { source: "apache", compressible: !1, extensions: ["bz"] },
    "application/x-bzip2": { source: "apache", compressible: !1, extensions: ["bz2", "boz"] },
    "application/x-cbr": { source: "apache", extensions: ["cbr", "cba", "cbt", "cbz", "cb7"] },
    "application/x-cdlink": { source: "apache", extensions: ["vcd"] },
    "application/x-cfs-compressed": { source: "apache", extensions: ["cfs"] },
    "application/x-chat": { source: "apache", extensions: ["chat"] },
    "application/x-chess-pgn": { source: "apache", extensions: ["pgn"] },
    "application/x-chrome-extension": { extensions: ["crx"] },
    "application/x-cocoa": { source: "nginx", extensions: ["cco"] },
    "application/x-compress": { source: "apache" },
    "application/x-conference": { source: "apache", extensions: ["nsc"] },
    "application/x-cpio": { source: "apache", extensions: ["cpio"] },
    "application/x-csh": { source: "apache", extensions: ["csh"] },
    "application/x-deb": { compressible: !1 },
    "application/x-debian-package": { source: "apache", extensions: ["deb", "udeb"] },
    "application/x-dgc-compressed": { source: "apache", extensions: ["dgc"] },
    "application/x-director": {
      source: "apache",
      extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"],
    },
    "application/x-doom": { source: "apache", extensions: ["wad"] },
    "application/x-dtbncx+xml": { source: "apache", compressible: !0, extensions: ["ncx"] },
    "application/x-dtbook+xml": { source: "apache", compressible: !0, extensions: ["dtb"] },
    "application/x-dtbresource+xml": { source: "apache", compressible: !0, extensions: ["res"] },
    "application/x-dvi": { source: "apache", compressible: !1, extensions: ["dvi"] },
    "application/x-envoy": { source: "apache", extensions: ["evy"] },
    "application/x-eva": { source: "apache", extensions: ["eva"] },
    "application/x-font-bdf": { source: "apache", extensions: ["bdf"] },
    "application/x-font-dos": { source: "apache" },
    "application/x-font-framemaker": { source: "apache" },
    "application/x-font-ghostscript": { source: "apache", extensions: ["gsf"] },
    "application/x-font-libgrx": { source: "apache" },
    "application/x-font-linux-psf": { source: "apache", extensions: ["psf"] },
    "application/x-font-pcf": { source: "apache", extensions: ["pcf"] },
    "application/x-font-snf": { source: "apache", extensions: ["snf"] },
    "application/x-font-speedo": { source: "apache" },
    "application/x-font-sunos-news": { source: "apache" },
    "application/x-font-type1": { source: "apache", extensions: ["pfa", "pfb", "pfm", "afm"] },
    "application/x-font-vfont": { source: "apache" },
    "application/x-freearc": { source: "apache", extensions: ["arc"] },
    "application/x-futuresplash": { source: "apache", extensions: ["spl"] },
    "application/x-gca-compressed": { source: "apache", extensions: ["gca"] },
    "application/x-glulx": { source: "apache", extensions: ["ulx"] },
    "application/x-gnumeric": { source: "apache", extensions: ["gnumeric"] },
    "application/x-gramps-xml": { source: "apache", extensions: ["gramps"] },
    "application/x-gtar": { source: "apache", extensions: ["gtar"] },
    "application/x-gzip": { source: "apache" },
    "application/x-hdf": { source: "apache", extensions: ["hdf"] },
    "application/x-httpd-php": { compressible: !0, extensions: ["php"] },
    "application/x-install-instructions": { source: "apache", extensions: ["install"] },
    "application/x-iso9660-image": { source: "apache", extensions: ["iso"] },
    "application/x-iwork-keynote-sffkey": { extensions: ["key"] },
    "application/x-iwork-numbers-sffnumbers": { extensions: ["numbers"] },
    "application/x-iwork-pages-sffpages": { extensions: ["pages"] },
    "application/x-java-archive-diff": { source: "nginx", extensions: ["jardiff"] },
    "application/x-java-jnlp-file": { source: "apache", compressible: !1, extensions: ["jnlp"] },
    "application/x-javascript": { compressible: !0 },
    "application/x-keepass2": { extensions: ["kdbx"] },
    "application/x-latex": { source: "apache", compressible: !1, extensions: ["latex"] },
    "application/x-lua-bytecode": { extensions: ["luac"] },
    "application/x-lzh-compressed": { source: "apache", extensions: ["lzh", "lha"] },
    "application/x-makeself": { source: "nginx", extensions: ["run"] },
    "application/x-mie": { source: "apache", extensions: ["mie"] },
    "application/x-mobipocket-ebook": { source: "apache", extensions: ["prc", "mobi"] },
    "application/x-mpegurl": { compressible: !1 },
    "application/x-ms-application": { source: "apache", extensions: ["application"] },
    "application/x-ms-shortcut": { source: "apache", extensions: ["lnk"] },
    "application/x-ms-wmd": { source: "apache", extensions: ["wmd"] },
    "application/x-ms-wmz": { source: "apache", extensions: ["wmz"] },
    "application/x-ms-xbap": { source: "apache", extensions: ["xbap"] },
    "application/x-msaccess": { source: "apache", extensions: ["mdb"] },
    "application/x-msbinder": { source: "apache", extensions: ["obd"] },
    "application/x-mscardfile": { source: "apache", extensions: ["crd"] },
    "application/x-msclip": { source: "apache", extensions: ["clp"] },
    "application/x-msdos-program": { extensions: ["exe"] },
    "application/x-msdownload": { source: "apache", extensions: ["exe", "dll", "com", "bat", "msi"] },
    "application/x-msmediaview": { source: "apache", extensions: ["mvb", "m13", "m14"] },
    "application/x-msmetafile": { source: "apache", extensions: ["wmf", "wmz", "emf", "emz"] },
    "application/x-msmoney": { source: "apache", extensions: ["mny"] },
    "application/x-mspublisher": { source: "apache", extensions: ["pub"] },
    "application/x-msschedule": { source: "apache", extensions: ["scd"] },
    "application/x-msterminal": { source: "apache", extensions: ["trm"] },
    "application/x-mswrite": { source: "apache", extensions: ["wri"] },
    "application/x-netcdf": { source: "apache", extensions: ["nc", "cdf"] },
    "application/x-ns-proxy-autoconfig": { compressible: !0, extensions: ["pac"] },
    "application/x-nzb": { source: "apache", extensions: ["nzb"] },
    "application/x-perl": { source: "nginx", extensions: ["pl", "pm"] },
    "application/x-pilot": { source: "nginx", extensions: ["prc", "pdb"] },
    "application/x-pkcs12": { source: "apache", compressible: !1, extensions: ["p12", "pfx"] },
    "application/x-pkcs7-certificates": { source: "apache", extensions: ["p7b", "spc"] },
    "application/x-pkcs7-certreqresp": { source: "apache", extensions: ["p7r"] },
    "application/x-pki-message": { source: "iana" },
    "application/x-rar-compressed": { source: "apache", compressible: !1, extensions: ["rar"] },
    "application/x-redhat-package-manager": { source: "nginx", extensions: ["rpm"] },
    "application/x-research-info-systems": { source: "apache", extensions: ["ris"] },
    "application/x-sea": { source: "nginx", extensions: ["sea"] },
    "application/x-sh": { source: "apache", compressible: !0, extensions: ["sh"] },
    "application/x-shar": { source: "apache", extensions: ["shar"] },
    "application/x-shockwave-flash": { source: "apache", compressible: !1, extensions: ["swf"] },
    "application/x-silverlight-app": { source: "apache", extensions: ["xap"] },
    "application/x-sql": { source: "apache", extensions: ["sql"] },
    "application/x-stuffit": { source: "apache", compressible: !1, extensions: ["sit"] },
    "application/x-stuffitx": { source: "apache", extensions: ["sitx"] },
    "application/x-subrip": { source: "apache", extensions: ["srt"] },
    "application/x-sv4cpio": { source: "apache", extensions: ["sv4cpio"] },
    "application/x-sv4crc": { source: "apache", extensions: ["sv4crc"] },
    "application/x-t3vm-image": { source: "apache", extensions: ["t3"] },
    "application/x-tads": { source: "apache", extensions: ["gam"] },
    "application/x-tar": { source: "apache", compressible: !0, extensions: ["tar"] },
    "application/x-tcl": { source: "apache", extensions: ["tcl", "tk"] },
    "application/x-tex": { source: "apache", extensions: ["tex"] },
    "application/x-tex-tfm": { source: "apache", extensions: ["tfm"] },
    "application/x-texinfo": { source: "apache", extensions: ["texinfo", "texi"] },
    "application/x-tgif": { source: "apache", extensions: ["obj"] },
    "application/x-ustar": { source: "apache", extensions: ["ustar"] },
    "application/x-virtualbox-hdd": { compressible: !0, extensions: ["hdd"] },
    "application/x-virtualbox-ova": { compressible: !0, extensions: ["ova"] },
    "application/x-virtualbox-ovf": { compressible: !0, extensions: ["ovf"] },
    "application/x-virtualbox-vbox": { compressible: !0, extensions: ["vbox"] },
    "application/x-virtualbox-vbox-extpack": { compressible: !1, extensions: ["vbox-extpack"] },
    "application/x-virtualbox-vdi": { compressible: !0, extensions: ["vdi"] },
    "application/x-virtualbox-vhd": { compressible: !0, extensions: ["vhd"] },
    "application/x-virtualbox-vmdk": { compressible: !0, extensions: ["vmdk"] },
    "application/x-wais-source": { source: "apache", extensions: ["src"] },
    "application/x-web-app-manifest+json": { compressible: !0, extensions: ["webapp"] },
    "application/x-www-form-urlencoded": { source: "iana", compressible: !0 },
    "application/x-x509-ca-cert": { source: "iana", extensions: ["der", "crt", "pem"] },
    "application/x-x509-ca-ra-cert": { source: "iana" },
    "application/x-x509-next-ca-cert": { source: "iana" },
    "application/x-xfig": { source: "apache", extensions: ["fig"] },
    "application/x-xliff+xml": { source: "apache", compressible: !0, extensions: ["xlf"] },
    "application/x-xpinstall": { source: "apache", compressible: !1, extensions: ["xpi"] },
    "application/x-xz": { source: "apache", extensions: ["xz"] },
    "application/x-zmachine": { source: "apache", extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"] },
    "application/x400-bp": { source: "iana" },
    "application/xacml+xml": { source: "iana", compressible: !0 },
    "application/xaml+xml": { source: "apache", compressible: !0, extensions: ["xaml"] },
    "application/xcap-att+xml": { source: "iana", compressible: !0, extensions: ["xav"] },
    "application/xcap-caps+xml": { source: "iana", compressible: !0, extensions: ["xca"] },
    "application/xcap-diff+xml": { source: "iana", compressible: !0, extensions: ["xdf"] },
    "application/xcap-el+xml": { source: "iana", compressible: !0, extensions: ["xel"] },
    "application/xcap-error+xml": { source: "iana", compressible: !0 },
    "application/xcap-ns+xml": { source: "iana", compressible: !0, extensions: ["xns"] },
    "application/xcon-conference-info+xml": { source: "iana", compressible: !0 },
    "application/xcon-conference-info-diff+xml": { source: "iana", compressible: !0 },
    "application/xenc+xml": { source: "iana", compressible: !0, extensions: ["xenc"] },
    "application/xhtml+xml": { source: "iana", compressible: !0, extensions: ["xhtml", "xht"] },
    "application/xhtml-voice+xml": { source: "apache", compressible: !0 },
    "application/xliff+xml": { source: "iana", compressible: !0, extensions: ["xlf"] },
    "application/xml": { source: "iana", compressible: !0, extensions: ["xml", "xsl", "xsd", "rng"] },
    "application/xml-dtd": { source: "iana", compressible: !0, extensions: ["dtd"] },
    "application/xml-external-parsed-entity": { source: "iana" },
    "application/xml-patch+xml": { source: "iana", compressible: !0 },
    "application/xmpp+xml": { source: "iana", compressible: !0 },
    "application/xop+xml": { source: "iana", compressible: !0, extensions: ["xop"] },
    "application/xproc+xml": { source: "apache", compressible: !0, extensions: ["xpl"] },
    "application/xslt+xml": { source: "iana", compressible: !0, extensions: ["xsl", "xslt"] },
    "application/xspf+xml": { source: "apache", compressible: !0, extensions: ["xspf"] },
    "application/xv+xml": { source: "iana", compressible: !0, extensions: ["mxml", "xhvml", "xvml", "xvm"] },
    "application/yang": { source: "iana", extensions: ["yang"] },
    "application/yang-data+json": { source: "iana", compressible: !0 },
    "application/yang-data+xml": { source: "iana", compressible: !0 },
    "application/yang-patch+json": { source: "iana", compressible: !0 },
    "application/yang-patch+xml": { source: "iana", compressible: !0 },
    "application/yin+xml": { source: "iana", compressible: !0, extensions: ["yin"] },
    "application/zip": { source: "iana", compressible: !1, extensions: ["zip"] },
    "application/zlib": { source: "iana" },
    "application/zstd": { source: "iana" },
    "audio/1d-interleaved-parityfec": { source: "iana" },
    "audio/32kadpcm": { source: "iana" },
    "audio/3gpp": { source: "iana", compressible: !1, extensions: ["3gpp"] },
    "audio/3gpp2": { source: "iana" },
    "audio/aac": { source: "iana" },
    "audio/ac3": { source: "iana" },
    "audio/adpcm": { source: "apache", extensions: ["adp"] },
    "audio/amr": { source: "iana", extensions: ["amr"] },
    "audio/amr-wb": { source: "iana" },
    "audio/amr-wb+": { source: "iana" },
    "audio/aptx": { source: "iana" },
    "audio/asc": { source: "iana" },
    "audio/atrac-advanced-lossless": { source: "iana" },
    "audio/atrac-x": { source: "iana" },
    "audio/atrac3": { source: "iana" },
    "audio/basic": { source: "iana", compressible: !1, extensions: ["au", "snd"] },
    "audio/bv16": { source: "iana" },
    "audio/bv32": { source: "iana" },
    "audio/clearmode": { source: "iana" },
    "audio/cn": { source: "iana" },
    "audio/dat12": { source: "iana" },
    "audio/dls": { source: "iana" },
    "audio/dsr-es201108": { source: "iana" },
    "audio/dsr-es202050": { source: "iana" },
    "audio/dsr-es202211": { source: "iana" },
    "audio/dsr-es202212": { source: "iana" },
    "audio/dv": { source: "iana" },
    "audio/dvi4": { source: "iana" },
    "audio/eac3": { source: "iana" },
    "audio/encaprtp": { source: "iana" },
    "audio/evrc": { source: "iana" },
    "audio/evrc-qcp": { source: "iana" },
    "audio/evrc0": { source: "iana" },
    "audio/evrc1": { source: "iana" },
    "audio/evrcb": { source: "iana" },
    "audio/evrcb0": { source: "iana" },
    "audio/evrcb1": { source: "iana" },
    "audio/evrcnw": { source: "iana" },
    "audio/evrcnw0": { source: "iana" },
    "audio/evrcnw1": { source: "iana" },
    "audio/evrcwb": { source: "iana" },
    "audio/evrcwb0": { source: "iana" },
    "audio/evrcwb1": { source: "iana" },
    "audio/evs": { source: "iana" },
    "audio/flexfec": { source: "iana" },
    "audio/fwdred": { source: "iana" },
    "audio/g711-0": { source: "iana" },
    "audio/g719": { source: "iana" },
    "audio/g722": { source: "iana" },
    "audio/g7221": { source: "iana" },
    "audio/g723": { source: "iana" },
    "audio/g726-16": { source: "iana" },
    "audio/g726-24": { source: "iana" },
    "audio/g726-32": { source: "iana" },
    "audio/g726-40": { source: "iana" },
    "audio/g728": { source: "iana" },
    "audio/g729": { source: "iana" },
    "audio/g7291": { source: "iana" },
    "audio/g729d": { source: "iana" },
    "audio/g729e": { source: "iana" },
    "audio/gsm": { source: "iana" },
    "audio/gsm-efr": { source: "iana" },
    "audio/gsm-hr-08": { source: "iana" },
    "audio/ilbc": { source: "iana" },
    "audio/ip-mr_v2.5": { source: "iana" },
    "audio/isac": { source: "apache" },
    "audio/l16": { source: "iana" },
    "audio/l20": { source: "iana" },
    "audio/l24": { source: "iana", compressible: !1 },
    "audio/l8": { source: "iana" },
    "audio/lpc": { source: "iana" },
    "audio/melp": { source: "iana" },
    "audio/melp1200": { source: "iana" },
    "audio/melp2400": { source: "iana" },
    "audio/melp600": { source: "iana" },
    "audio/mhas": { source: "iana" },
    "audio/midi": { source: "apache", extensions: ["mid", "midi", "kar", "rmi"] },
    "audio/mobile-xmf": { source: "iana", extensions: ["mxmf"] },
    "audio/mp3": { compressible: !1, extensions: ["mp3"] },
    "audio/mp4": { source: "iana", compressible: !1, extensions: ["m4a", "mp4a"] },
    "audio/mp4a-latm": { source: "iana" },
    "audio/mpa": { source: "iana" },
    "audio/mpa-robust": { source: "iana" },
    "audio/mpeg": { source: "iana", compressible: !1, extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"] },
    "audio/mpeg4-generic": { source: "iana" },
    "audio/musepack": { source: "apache" },
    "audio/ogg": { source: "iana", compressible: !1, extensions: ["oga", "ogg", "spx", "opus"] },
    "audio/opus": { source: "iana" },
    "audio/parityfec": { source: "iana" },
    "audio/pcma": { source: "iana" },
    "audio/pcma-wb": { source: "iana" },
    "audio/pcmu": { source: "iana" },
    "audio/pcmu-wb": { source: "iana" },
    "audio/prs.sid": { source: "iana" },
    "audio/qcelp": { source: "iana" },
    "audio/raptorfec": { source: "iana" },
    "audio/red": { source: "iana" },
    "audio/rtp-enc-aescm128": { source: "iana" },
    "audio/rtp-midi": { source: "iana" },
    "audio/rtploopback": { source: "iana" },
    "audio/rtx": { source: "iana" },
    "audio/s3m": { source: "apache", extensions: ["s3m"] },
    "audio/scip": { source: "iana" },
    "audio/silk": { source: "apache", extensions: ["sil"] },
    "audio/smv": { source: "iana" },
    "audio/smv-qcp": { source: "iana" },
    "audio/smv0": { source: "iana" },
    "audio/sofa": { source: "iana" },
    "audio/sp-midi": { source: "iana" },
    "audio/speex": { source: "iana" },
    "audio/t140c": { source: "iana" },
    "audio/t38": { source: "iana" },
    "audio/telephone-event": { source: "iana" },
    "audio/tetra_acelp": { source: "iana" },
    "audio/tetra_acelp_bb": { source: "iana" },
    "audio/tone": { source: "iana" },
    "audio/tsvcis": { source: "iana" },
    "audio/uemclip": { source: "iana" },
    "audio/ulpfec": { source: "iana" },
    "audio/usac": { source: "iana" },
    "audio/vdvi": { source: "iana" },
    "audio/vmr-wb": { source: "iana" },
    "audio/vnd.3gpp.iufp": { source: "iana" },
    "audio/vnd.4sb": { source: "iana" },
    "audio/vnd.audiokoz": { source: "iana" },
    "audio/vnd.celp": { source: "iana" },
    "audio/vnd.cisco.nse": { source: "iana" },
    "audio/vnd.cmles.radio-events": { source: "iana" },
    "audio/vnd.cns.anp1": { source: "iana" },
    "audio/vnd.cns.inf1": { source: "iana" },
    "audio/vnd.dece.audio": { source: "iana", extensions: ["uva", "uvva"] },
    "audio/vnd.digital-winds": { source: "iana", extensions: ["eol"] },
    "audio/vnd.dlna.adts": { source: "iana" },
    "audio/vnd.dolby.heaac.1": { source: "iana" },
    "audio/vnd.dolby.heaac.2": { source: "iana" },
    "audio/vnd.dolby.mlp": { source: "iana" },
    "audio/vnd.dolby.mps": { source: "iana" },
    "audio/vnd.dolby.pl2": { source: "iana" },
    "audio/vnd.dolby.pl2x": { source: "iana" },
    "audio/vnd.dolby.pl2z": { source: "iana" },
    "audio/vnd.dolby.pulse.1": { source: "iana" },
    "audio/vnd.dra": { source: "iana", extensions: ["dra"] },
    "audio/vnd.dts": { source: "iana", extensions: ["dts"] },
    "audio/vnd.dts.hd": { source: "iana", extensions: ["dtshd"] },
    "audio/vnd.dts.uhd": { source: "iana" },
    "audio/vnd.dvb.file": { source: "iana" },
    "audio/vnd.everad.plj": { source: "iana" },
    "audio/vnd.hns.audio": { source: "iana" },
    "audio/vnd.lucent.voice": { source: "iana", extensions: ["lvp"] },
    "audio/vnd.ms-playready.media.pya": { source: "iana", extensions: ["pya"] },
    "audio/vnd.nokia.mobile-xmf": { source: "iana" },
    "audio/vnd.nortel.vbk": { source: "iana" },
    "audio/vnd.nuera.ecelp4800": { source: "iana", extensions: ["ecelp4800"] },
    "audio/vnd.nuera.ecelp7470": { source: "iana", extensions: ["ecelp7470"] },
    "audio/vnd.nuera.ecelp9600": { source: "iana", extensions: ["ecelp9600"] },
    "audio/vnd.octel.sbc": { source: "iana" },
    "audio/vnd.presonus.multitrack": { source: "iana" },
    "audio/vnd.qcelp": { source: "iana" },
    "audio/vnd.rhetorex.32kadpcm": { source: "iana" },
    "audio/vnd.rip": { source: "iana", extensions: ["rip"] },
    "audio/vnd.rn-realaudio": { compressible: !1 },
    "audio/vnd.sealedmedia.softseal.mpeg": { source: "iana" },
    "audio/vnd.vmx.cvsd": { source: "iana" },
    "audio/vnd.wave": { compressible: !1 },
    "audio/vorbis": { source: "iana", compressible: !1 },
    "audio/vorbis-config": { source: "iana" },
    "audio/wav": { compressible: !1, extensions: ["wav"] },
    "audio/wave": { compressible: !1, extensions: ["wav"] },
    "audio/webm": { source: "apache", compressible: !1, extensions: ["weba"] },
    "audio/x-aac": { source: "apache", compressible: !1, extensions: ["aac"] },
    "audio/x-aiff": { source: "apache", extensions: ["aif", "aiff", "aifc"] },
    "audio/x-caf": { source: "apache", compressible: !1, extensions: ["caf"] },
    "audio/x-flac": { source: "apache", extensions: ["flac"] },
    "audio/x-m4a": { source: "nginx", extensions: ["m4a"] },
    "audio/x-matroska": { source: "apache", extensions: ["mka"] },
    "audio/x-mpegurl": { source: "apache", extensions: ["m3u"] },
    "audio/x-ms-wax": { source: "apache", extensions: ["wax"] },
    "audio/x-ms-wma": { source: "apache", extensions: ["wma"] },
    "audio/x-pn-realaudio": { source: "apache", extensions: ["ram", "ra"] },
    "audio/x-pn-realaudio-plugin": { source: "apache", extensions: ["rmp"] },
    "audio/x-realaudio": { source: "nginx", extensions: ["ra"] },
    "audio/x-tta": { source: "apache" },
    "audio/x-wav": { source: "apache", extensions: ["wav"] },
    "audio/xm": { source: "apache", extensions: ["xm"] },
    "chemical/x-cdx": { source: "apache", extensions: ["cdx"] },
    "chemical/x-cif": { source: "apache", extensions: ["cif"] },
    "chemical/x-cmdf": { source: "apache", extensions: ["cmdf"] },
    "chemical/x-cml": { source: "apache", extensions: ["cml"] },
    "chemical/x-csml": { source: "apache", extensions: ["csml"] },
    "chemical/x-pdb": { source: "apache" },
    "chemical/x-xyz": { source: "apache", extensions: ["xyz"] },
    "font/collection": { source: "iana", extensions: ["ttc"] },
    "font/otf": { source: "iana", compressible: !0, extensions: ["otf"] },
    "font/sfnt": { source: "iana" },
    "font/ttf": { source: "iana", compressible: !0, extensions: ["ttf"] },
    "font/woff": { source: "iana", extensions: ["woff"] },
    "font/woff2": { source: "iana", extensions: ["woff2"] },
    "image/aces": { source: "iana", extensions: ["exr"] },
    "image/apng": { compressible: !1, extensions: ["apng"] },
    "image/avci": { source: "iana", extensions: ["avci"] },
    "image/avcs": { source: "iana", extensions: ["avcs"] },
    "image/avif": { source: "iana", compressible: !1, extensions: ["avif"] },
    "image/bmp": { source: "iana", compressible: !0, extensions: ["bmp"] },
    "image/cgm": { source: "iana", extensions: ["cgm"] },
    "image/dicom-rle": { source: "iana", extensions: ["drle"] },
    "image/emf": { source: "iana", extensions: ["emf"] },
    "image/fits": { source: "iana", extensions: ["fits"] },
    "image/g3fax": { source: "iana", extensions: ["g3"] },
    "image/gif": { source: "iana", compressible: !1, extensions: ["gif"] },
    "image/heic": { source: "iana", extensions: ["heic"] },
    "image/heic-sequence": { source: "iana", extensions: ["heics"] },
    "image/heif": { source: "iana", extensions: ["heif"] },
    "image/heif-sequence": { source: "iana", extensions: ["heifs"] },
    "image/hej2k": { source: "iana", extensions: ["hej2"] },
    "image/hsj2": { source: "iana", extensions: ["hsj2"] },
    "image/ief": { source: "iana", extensions: ["ief"] },
    "image/jls": { source: "iana", extensions: ["jls"] },
    "image/jp2": { source: "iana", compressible: !1, extensions: ["jp2", "jpg2"] },
    "image/jpeg": { source: "iana", compressible: !1, extensions: ["jpeg", "jpg", "jpe"] },
    "image/jph": { source: "iana", extensions: ["jph"] },
    "image/jphc": { source: "iana", extensions: ["jhc"] },
    "image/jpm": { source: "iana", compressible: !1, extensions: ["jpm"] },
    "image/jpx": { source: "iana", compressible: !1, extensions: ["jpx", "jpf"] },
    "image/jxr": { source: "iana", extensions: ["jxr"] },
    "image/jxra": { source: "iana", extensions: ["jxra"] },
    "image/jxrs": { source: "iana", extensions: ["jxrs"] },
    "image/jxs": { source: "iana", extensions: ["jxs"] },
    "image/jxsc": { source: "iana", extensions: ["jxsc"] },
    "image/jxsi": { source: "iana", extensions: ["jxsi"] },
    "image/jxss": { source: "iana", extensions: ["jxss"] },
    "image/ktx": { source: "iana", extensions: ["ktx"] },
    "image/ktx2": { source: "iana", extensions: ["ktx2"] },
    "image/naplps": { source: "iana" },
    "image/pjpeg": { compressible: !1 },
    "image/png": { source: "iana", compressible: !1, extensions: ["png"] },
    "image/prs.btif": { source: "iana", extensions: ["btif"] },
    "image/prs.pti": { source: "iana", extensions: ["pti"] },
    "image/pwg-raster": { source: "iana" },
    "image/sgi": { source: "apache", extensions: ["sgi"] },
    "image/svg+xml": { source: "iana", compressible: !0, extensions: ["svg", "svgz"] },
    "image/t38": { source: "iana", extensions: ["t38"] },
    "image/tiff": { source: "iana", compressible: !1, extensions: ["tif", "tiff"] },
    "image/tiff-fx": { source: "iana", extensions: ["tfx"] },
    "image/vnd.adobe.photoshop": { source: "iana", compressible: !0, extensions: ["psd"] },
    "image/vnd.airzip.accelerator.azv": { source: "iana", extensions: ["azv"] },
    "image/vnd.cns.inf2": { source: "iana" },
    "image/vnd.dece.graphic": { source: "iana", extensions: ["uvi", "uvvi", "uvg", "uvvg"] },
    "image/vnd.djvu": { source: "iana", extensions: ["djvu", "djv"] },
    "image/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
    "image/vnd.dwg": { source: "iana", extensions: ["dwg"] },
    "image/vnd.dxf": { source: "iana", extensions: ["dxf"] },
    "image/vnd.fastbidsheet": { source: "iana", extensions: ["fbs"] },
    "image/vnd.fpx": { source: "iana", extensions: ["fpx"] },
    "image/vnd.fst": { source: "iana", extensions: ["fst"] },
    "image/vnd.fujixerox.edmics-mmr": { source: "iana", extensions: ["mmr"] },
    "image/vnd.fujixerox.edmics-rlc": { source: "iana", extensions: ["rlc"] },
    "image/vnd.globalgraphics.pgb": { source: "iana" },
    "image/vnd.microsoft.icon": { source: "iana", compressible: !0, extensions: ["ico"] },
    "image/vnd.mix": { source: "iana" },
    "image/vnd.mozilla.apng": { source: "iana" },
    "image/vnd.ms-dds": { compressible: !0, extensions: ["dds"] },
    "image/vnd.ms-modi": { source: "iana", extensions: ["mdi"] },
    "image/vnd.ms-photo": { source: "apache", extensions: ["wdp"] },
    "image/vnd.net-fpx": { source: "iana", extensions: ["npx"] },
    "image/vnd.pco.b16": { source: "iana", extensions: ["b16"] },
    "image/vnd.radiance": { source: "iana" },
    "image/vnd.sealed.png": { source: "iana" },
    "image/vnd.sealedmedia.softseal.gif": { source: "iana" },
    "image/vnd.sealedmedia.softseal.jpg": { source: "iana" },
    "image/vnd.svf": { source: "iana" },
    "image/vnd.tencent.tap": { source: "iana", extensions: ["tap"] },
    "image/vnd.valve.source.texture": { source: "iana", extensions: ["vtf"] },
    "image/vnd.wap.wbmp": { source: "iana", extensions: ["wbmp"] },
    "image/vnd.xiff": { source: "iana", extensions: ["xif"] },
    "image/vnd.zbrush.pcx": { source: "iana", extensions: ["pcx"] },
    "image/webp": { source: "apache", extensions: ["webp"] },
    "image/wmf": { source: "iana", extensions: ["wmf"] },
    "image/x-3ds": { source: "apache", extensions: ["3ds"] },
    "image/x-cmu-raster": { source: "apache", extensions: ["ras"] },
    "image/x-cmx": { source: "apache", extensions: ["cmx"] },
    "image/x-freehand": { source: "apache", extensions: ["fh", "fhc", "fh4", "fh5", "fh7"] },
    "image/x-icon": { source: "apache", compressible: !0, extensions: ["ico"] },
    "image/x-jng": { source: "nginx", extensions: ["jng"] },
    "image/x-mrsid-image": { source: "apache", extensions: ["sid"] },
    "image/x-ms-bmp": { source: "nginx", compressible: !0, extensions: ["bmp"] },
    "image/x-pcx": { source: "apache", extensions: ["pcx"] },
    "image/x-pict": { source: "apache", extensions: ["pic", "pct"] },
    "image/x-portable-anymap": { source: "apache", extensions: ["pnm"] },
    "image/x-portable-bitmap": { source: "apache", extensions: ["pbm"] },
    "image/x-portable-graymap": { source: "apache", extensions: ["pgm"] },
    "image/x-portable-pixmap": { source: "apache", extensions: ["ppm"] },
    "image/x-rgb": { source: "apache", extensions: ["rgb"] },
    "image/x-tga": { source: "apache", extensions: ["tga"] },
    "image/x-xbitmap": { source: "apache", extensions: ["xbm"] },
    "image/x-xcf": { compressible: !1 },
    "image/x-xpixmap": { source: "apache", extensions: ["xpm"] },
    "image/x-xwindowdump": { source: "apache", extensions: ["xwd"] },
    "message/cpim": { source: "iana" },
    "message/delivery-status": { source: "iana" },
    "message/disposition-notification": { source: "iana", extensions: ["disposition-notification"] },
    "message/external-body": { source: "iana" },
    "message/feedback-report": { source: "iana" },
    "message/global": { source: "iana", extensions: ["u8msg"] },
    "message/global-delivery-status": { source: "iana", extensions: ["u8dsn"] },
    "message/global-disposition-notification": { source: "iana", extensions: ["u8mdn"] },
    "message/global-headers": { source: "iana", extensions: ["u8hdr"] },
    "message/http": { source: "iana", compressible: !1 },
    "message/imdn+xml": { source: "iana", compressible: !0 },
    "message/news": { source: "iana" },
    "message/partial": { source: "iana", compressible: !1 },
    "message/rfc822": { source: "iana", compressible: !0, extensions: ["eml", "mime"] },
    "message/s-http": { source: "iana" },
    "message/sip": { source: "iana" },
    "message/sipfrag": { source: "iana" },
    "message/tracking-status": { source: "iana" },
    "message/vnd.si.simp": { source: "iana" },
    "message/vnd.wfa.wsc": { source: "iana", extensions: ["wsc"] },
    "model/3mf": { source: "iana", extensions: ["3mf"] },
    "model/e57": { source: "iana" },
    "model/gltf+json": { source: "iana", compressible: !0, extensions: ["gltf"] },
    "model/gltf-binary": { source: "iana", compressible: !0, extensions: ["glb"] },
    "model/iges": { source: "iana", compressible: !1, extensions: ["igs", "iges"] },
    "model/mesh": { source: "iana", compressible: !1, extensions: ["msh", "mesh", "silo"] },
    "model/mtl": { source: "iana", extensions: ["mtl"] },
    "model/obj": { source: "iana", extensions: ["obj"] },
    "model/step": { source: "iana" },
    "model/step+xml": { source: "iana", compressible: !0, extensions: ["stpx"] },
    "model/step+zip": { source: "iana", compressible: !1, extensions: ["stpz"] },
    "model/step-xml+zip": { source: "iana", compressible: !1, extensions: ["stpxz"] },
    "model/stl": { source: "iana", extensions: ["stl"] },
    "model/vnd.collada+xml": { source: "iana", compressible: !0, extensions: ["dae"] },
    "model/vnd.dwf": { source: "iana", extensions: ["dwf"] },
    "model/vnd.flatland.3dml": { source: "iana" },
    "model/vnd.gdl": { source: "iana", extensions: ["gdl"] },
    "model/vnd.gs-gdl": { source: "apache" },
    "model/vnd.gs.gdl": { source: "iana" },
    "model/vnd.gtw": { source: "iana", extensions: ["gtw"] },
    "model/vnd.moml+xml": { source: "iana", compressible: !0 },
    "model/vnd.mts": { source: "iana", extensions: ["mts"] },
    "model/vnd.opengex": { source: "iana", extensions: ["ogex"] },
    "model/vnd.parasolid.transmit.binary": { source: "iana", extensions: ["x_b"] },
    "model/vnd.parasolid.transmit.text": { source: "iana", extensions: ["x_t"] },
    "model/vnd.pytha.pyox": { source: "iana" },
    "model/vnd.rosette.annotated-data-model": { source: "iana" },
    "model/vnd.sap.vds": { source: "iana", extensions: ["vds"] },
    "model/vnd.usdz+zip": { source: "iana", compressible: !1, extensions: ["usdz"] },
    "model/vnd.valve.source.compiled-map": { source: "iana", extensions: ["bsp"] },
    "model/vnd.vtu": { source: "iana", extensions: ["vtu"] },
    "model/vrml": { source: "iana", compressible: !1, extensions: ["wrl", "vrml"] },
    "model/x3d+binary": { source: "apache", compressible: !1, extensions: ["x3db", "x3dbz"] },
    "model/x3d+fastinfoset": { source: "iana", extensions: ["x3db"] },
    "model/x3d+vrml": { source: "apache", compressible: !1, extensions: ["x3dv", "x3dvz"] },
    "model/x3d+xml": { source: "iana", compressible: !0, extensions: ["x3d", "x3dz"] },
    "model/x3d-vrml": { source: "iana", extensions: ["x3dv"] },
    "multipart/alternative": { source: "iana", compressible: !1 },
    "multipart/appledouble": { source: "iana" },
    "multipart/byteranges": { source: "iana" },
    "multipart/digest": { source: "iana" },
    "multipart/encrypted": { source: "iana", compressible: !1 },
    "multipart/form-data": { source: "iana", compressible: !1 },
    "multipart/header-set": { source: "iana" },
    "multipart/mixed": { source: "iana" },
    "multipart/multilingual": { source: "iana" },
    "multipart/parallel": { source: "iana" },
    "multipart/related": { source: "iana", compressible: !1 },
    "multipart/report": { source: "iana" },
    "multipart/signed": { source: "iana", compressible: !1 },
    "multipart/vnd.bint.med-plus": { source: "iana" },
    "multipart/voice-message": { source: "iana" },
    "multipart/x-mixed-replace": { source: "iana" },
    "text/1d-interleaved-parityfec": { source: "iana" },
    "text/cache-manifest": { source: "iana", compressible: !0, extensions: ["appcache", "manifest"] },
    "text/calendar": { source: "iana", extensions: ["ics", "ifb"] },
    "text/calender": { compressible: !0 },
    "text/cmd": { compressible: !0 },
    "text/coffeescript": { extensions: ["coffee", "litcoffee"] },
    "text/cql": { source: "iana" },
    "text/cql-expression": { source: "iana" },
    "text/cql-identifier": { source: "iana" },
    "text/css": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["css"] },
    "text/csv": { source: "iana", compressible: !0, extensions: ["csv"] },
    "text/csv-schema": { source: "iana" },
    "text/directory": { source: "iana" },
    "text/dns": { source: "iana" },
    "text/ecmascript": { source: "iana" },
    "text/encaprtp": { source: "iana" },
    "text/enriched": { source: "iana" },
    "text/fhirpath": { source: "iana" },
    "text/flexfec": { source: "iana" },
    "text/fwdred": { source: "iana" },
    "text/gff3": { source: "iana" },
    "text/grammar-ref-list": { source: "iana" },
    "text/html": { source: "iana", compressible: !0, extensions: ["html", "htm", "shtml"] },
    "text/jade": { extensions: ["jade"] },
    "text/javascript": { source: "iana", compressible: !0 },
    "text/jcr-cnd": { source: "iana" },
    "text/jsx": { compressible: !0, extensions: ["jsx"] },
    "text/less": { compressible: !0, extensions: ["less"] },
    "text/markdown": { source: "iana", compressible: !0, extensions: ["markdown", "md"] },
    "text/mathml": { source: "nginx", extensions: ["mml"] },
    "text/mdx": { compressible: !0, extensions: ["mdx"] },
    "text/mizar": { source: "iana" },
    "text/n3": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["n3"] },
    "text/parameters": { source: "iana", charset: "UTF-8" },
    "text/parityfec": { source: "iana" },
    "text/plain": {
      source: "iana",
      compressible: !0,
      extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
    },
    "text/provenance-notation": { source: "iana", charset: "UTF-8" },
    "text/prs.fallenstein.rst": { source: "iana" },
    "text/prs.lines.tag": { source: "iana", extensions: ["dsc"] },
    "text/prs.prop.logic": { source: "iana" },
    "text/raptorfec": { source: "iana" },
    "text/red": { source: "iana" },
    "text/rfc822-headers": { source: "iana" },
    "text/richtext": { source: "iana", compressible: !0, extensions: ["rtx"] },
    "text/rtf": { source: "iana", compressible: !0, extensions: ["rtf"] },
    "text/rtp-enc-aescm128": { source: "iana" },
    "text/rtploopback": { source: "iana" },
    "text/rtx": { source: "iana" },
    "text/sgml": { source: "iana", extensions: ["sgml", "sgm"] },
    "text/shaclc": { source: "iana" },
    "text/shex": { source: "iana", extensions: ["shex"] },
    "text/slim": { extensions: ["slim", "slm"] },
    "text/spdx": { source: "iana", extensions: ["spdx"] },
    "text/strings": { source: "iana" },
    "text/stylus": { extensions: ["stylus", "styl"] },
    "text/t140": { source: "iana" },
    "text/tab-separated-values": { source: "iana", compressible: !0, extensions: ["tsv"] },
    "text/troff": { source: "iana", extensions: ["t", "tr", "roff", "man", "me", "ms"] },
    "text/turtle": { source: "iana", charset: "UTF-8", extensions: ["ttl"] },
    "text/ulpfec": { source: "iana" },
    "text/uri-list": { source: "iana", compressible: !0, extensions: ["uri", "uris", "urls"] },
    "text/vcard": { source: "iana", compressible: !0, extensions: ["vcard"] },
    "text/vnd.a": { source: "iana" },
    "text/vnd.abc": { source: "iana" },
    "text/vnd.ascii-art": { source: "iana" },
    "text/vnd.curl": { source: "iana", extensions: ["curl"] },
    "text/vnd.curl.dcurl": { source: "apache", extensions: ["dcurl"] },
    "text/vnd.curl.mcurl": { source: "apache", extensions: ["mcurl"] },
    "text/vnd.curl.scurl": { source: "apache", extensions: ["scurl"] },
    "text/vnd.debian.copyright": { source: "iana", charset: "UTF-8" },
    "text/vnd.dmclientscript": { source: "iana" },
    "text/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
    "text/vnd.esmertec.theme-descriptor": { source: "iana", charset: "UTF-8" },
    "text/vnd.familysearch.gedcom": { source: "iana", extensions: ["ged"] },
    "text/vnd.ficlab.flt": { source: "iana" },
    "text/vnd.fly": { source: "iana", extensions: ["fly"] },
    "text/vnd.fmi.flexstor": { source: "iana", extensions: ["flx"] },
    "text/vnd.gml": { source: "iana" },
    "text/vnd.graphviz": { source: "iana", extensions: ["gv"] },
    "text/vnd.hans": { source: "iana" },
    "text/vnd.hgl": { source: "iana" },
    "text/vnd.in3d.3dml": { source: "iana", extensions: ["3dml"] },
    "text/vnd.in3d.spot": { source: "iana", extensions: ["spot"] },
    "text/vnd.iptc.newsml": { source: "iana" },
    "text/vnd.iptc.nitf": { source: "iana" },
    "text/vnd.latex-z": { source: "iana" },
    "text/vnd.motorola.reflex": { source: "iana" },
    "text/vnd.ms-mediapackage": { source: "iana" },
    "text/vnd.net2phone.commcenter.command": { source: "iana" },
    "text/vnd.radisys.msml-basic-layout": { source: "iana" },
    "text/vnd.senx.warpscript": { source: "iana" },
    "text/vnd.si.uricatalogue": { source: "iana" },
    "text/vnd.sosi": { source: "iana" },
    "text/vnd.sun.j2me.app-descriptor": { source: "iana", charset: "UTF-8", extensions: ["jad"] },
    "text/vnd.trolltech.linguist": { source: "iana", charset: "UTF-8" },
    "text/vnd.wap.si": { source: "iana" },
    "text/vnd.wap.sl": { source: "iana" },
    "text/vnd.wap.wml": { source: "iana", extensions: ["wml"] },
    "text/vnd.wap.wmlscript": { source: "iana", extensions: ["wmls"] },
    "text/vtt": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["vtt"] },
    "text/x-asm": { source: "apache", extensions: ["s", "asm"] },
    "text/x-c": { source: "apache", extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"] },
    "text/x-component": { source: "nginx", extensions: ["htc"] },
    "text/x-fortran": { source: "apache", extensions: ["f", "for", "f77", "f90"] },
    "text/x-gwt-rpc": { compressible: !0 },
    "text/x-handlebars-template": { extensions: ["hbs"] },
    "text/x-java-source": { source: "apache", extensions: ["java"] },
    "text/x-jquery-tmpl": { compressible: !0 },
    "text/x-lua": { extensions: ["lua"] },
    "text/x-markdown": { compressible: !0, extensions: ["mkd"] },
    "text/x-nfo": { source: "apache", extensions: ["nfo"] },
    "text/x-opml": { source: "apache", extensions: ["opml"] },
    "text/x-org": { compressible: !0, extensions: ["org"] },
    "text/x-pascal": { source: "apache", extensions: ["p", "pas"] },
    "text/x-processing": { compressible: !0, extensions: ["pde"] },
    "text/x-sass": { extensions: ["sass"] },
    "text/x-scss": { extensions: ["scss"] },
    "text/x-setext": { source: "apache", extensions: ["etx"] },
    "text/x-sfv": { source: "apache", extensions: ["sfv"] },
    "text/x-suse-ymp": { compressible: !0, extensions: ["ymp"] },
    "text/x-uuencode": { source: "apache", extensions: ["uu"] },
    "text/x-vcalendar": { source: "apache", extensions: ["vcs"] },
    "text/x-vcard": { source: "apache", extensions: ["vcf"] },
    "text/xml": { source: "iana", compressible: !0, extensions: ["xml"] },
    "text/xml-external-parsed-entity": { source: "iana" },
    "text/yaml": { compressible: !0, extensions: ["yaml", "yml"] },
    "video/1d-interleaved-parityfec": { source: "iana" },
    "video/3gpp": { source: "iana", extensions: ["3gp", "3gpp"] },
    "video/3gpp-tt": { source: "iana" },
    "video/3gpp2": { source: "iana", extensions: ["3g2"] },
    "video/av1": { source: "iana" },
    "video/bmpeg": { source: "iana" },
    "video/bt656": { source: "iana" },
    "video/celb": { source: "iana" },
    "video/dv": { source: "iana" },
    "video/encaprtp": { source: "iana" },
    "video/ffv1": { source: "iana" },
    "video/flexfec": { source: "iana" },
    "video/h261": { source: "iana", extensions: ["h261"] },
    "video/h263": { source: "iana", extensions: ["h263"] },
    "video/h263-1998": { source: "iana" },
    "video/h263-2000": { source: "iana" },
    "video/h264": { source: "iana", extensions: ["h264"] },
    "video/h264-rcdo": { source: "iana" },
    "video/h264-svc": { source: "iana" },
    "video/h265": { source: "iana" },
    "video/iso.segment": { source: "iana", extensions: ["m4s"] },
    "video/jpeg": { source: "iana", extensions: ["jpgv"] },
    "video/jpeg2000": { source: "iana" },
    "video/jpm": { source: "apache", extensions: ["jpm", "jpgm"] },
    "video/jxsv": { source: "iana" },
    "video/mj2": { source: "iana", extensions: ["mj2", "mjp2"] },
    "video/mp1s": { source: "iana" },
    "video/mp2p": { source: "iana" },
    "video/mp2t": { source: "iana", extensions: ["ts"] },
    "video/mp4": { source: "iana", compressible: !1, extensions: ["mp4", "mp4v", "mpg4"] },
    "video/mp4v-es": { source: "iana" },
    "video/mpeg": { source: "iana", compressible: !1, extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"] },
    "video/mpeg4-generic": { source: "iana" },
    "video/mpv": { source: "iana" },
    "video/nv": { source: "iana" },
    "video/ogg": { source: "iana", compressible: !1, extensions: ["ogv"] },
    "video/parityfec": { source: "iana" },
    "video/pointer": { source: "iana" },
    "video/quicktime": { source: "iana", compressible: !1, extensions: ["qt", "mov"] },
    "video/raptorfec": { source: "iana" },
    "video/raw": { source: "iana" },
    "video/rtp-enc-aescm128": { source: "iana" },
    "video/rtploopback": { source: "iana" },
    "video/rtx": { source: "iana" },
    "video/scip": { source: "iana" },
    "video/smpte291": { source: "iana" },
    "video/smpte292m": { source: "iana" },
    "video/ulpfec": { source: "iana" },
    "video/vc1": { source: "iana" },
    "video/vc2": { source: "iana" },
    "video/vnd.cctv": { source: "iana" },
    "video/vnd.dece.hd": { source: "iana", extensions: ["uvh", "uvvh"] },
    "video/vnd.dece.mobile": { source: "iana", extensions: ["uvm", "uvvm"] },
    "video/vnd.dece.mp4": { source: "iana" },
    "video/vnd.dece.pd": { source: "iana", extensions: ["uvp", "uvvp"] },
    "video/vnd.dece.sd": { source: "iana", extensions: ["uvs", "uvvs"] },
    "video/vnd.dece.video": { source: "iana", extensions: ["uvv", "uvvv"] },
    "video/vnd.directv.mpeg": { source: "iana" },
    "video/vnd.directv.mpeg-tts": { source: "iana" },
    "video/vnd.dlna.mpeg-tts": { source: "iana" },
    "video/vnd.dvb.file": { source: "iana", extensions: ["dvb"] },
    "video/vnd.fvt": { source: "iana", extensions: ["fvt"] },
    "video/vnd.hns.video": { source: "iana" },
    "video/vnd.iptvforum.1dparityfec-1010": { source: "iana" },
    "video/vnd.iptvforum.1dparityfec-2005": { source: "iana" },
    "video/vnd.iptvforum.2dparityfec-1010": { source: "iana" },
    "video/vnd.iptvforum.2dparityfec-2005": { source: "iana" },
    "video/vnd.iptvforum.ttsavc": { source: "iana" },
    "video/vnd.iptvforum.ttsmpeg2": { source: "iana" },
    "video/vnd.motorola.video": { source: "iana" },
    "video/vnd.motorola.videop": { source: "iana" },
    "video/vnd.mpegurl": { source: "iana", extensions: ["mxu", "m4u"] },
    "video/vnd.ms-playready.media.pyv": { source: "iana", extensions: ["pyv"] },
    "video/vnd.nokia.interleaved-multimedia": { source: "iana" },
    "video/vnd.nokia.mp4vr": { source: "iana" },
    "video/vnd.nokia.videovoip": { source: "iana" },
    "video/vnd.objectvideo": { source: "iana" },
    "video/vnd.radgamettools.bink": { source: "iana" },
    "video/vnd.radgamettools.smacker": { source: "iana" },
    "video/vnd.sealed.mpeg1": { source: "iana" },
    "video/vnd.sealed.mpeg4": { source: "iana" },
    "video/vnd.sealed.swf": { source: "iana" },
    "video/vnd.sealedmedia.softseal.mov": { source: "iana" },
    "video/vnd.uvvu.mp4": { source: "iana", extensions: ["uvu", "uvvu"] },
    "video/vnd.vivo": { source: "iana", extensions: ["viv"] },
    "video/vnd.youtube.yt": { source: "iana" },
    "video/vp8": { source: "iana" },
    "video/vp9": { source: "iana" },
    "video/webm": { source: "apache", compressible: !1, extensions: ["webm"] },
    "video/x-f4v": { source: "apache", extensions: ["f4v"] },
    "video/x-fli": { source: "apache", extensions: ["fli"] },
    "video/x-flv": { source: "apache", compressible: !1, extensions: ["flv"] },
    "video/x-m4v": { source: "apache", extensions: ["m4v"] },
    "video/x-matroska": { source: "apache", compressible: !1, extensions: ["mkv", "mk3d", "mks"] },
    "video/x-mng": { source: "apache", extensions: ["mng"] },
    "video/x-ms-asf": { source: "apache", extensions: ["asf", "asx"] },
    "video/x-ms-vob": { source: "apache", extensions: ["vob"] },
    "video/x-ms-wm": { source: "apache", extensions: ["wm"] },
    "video/x-ms-wmv": { source: "apache", compressible: !1, extensions: ["wmv"] },
    "video/x-ms-wmx": { source: "apache", extensions: ["wmx"] },
    "video/x-ms-wvx": { source: "apache", extensions: ["wvx"] },
    "video/x-msvideo": { source: "apache", extensions: ["avi"] },
    "video/x-sgi-movie": { source: "apache", extensions: ["movie"] },
    "video/x-smv": { source: "apache", extensions: ["smv"] },
    "x-conference/x-cooltalk": { source: "apache", extensions: ["ice"] },
    "x-shader/x-fragment": { compressible: !0 },
    "x-shader/x-vertex": { compressible: !0 },
  };
});
var Zf0 = U((J58, Qf0) => {
  /*!
   * mime-db
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015-2022 Douglas Christopher Wilson
   * MIT Licensed
   */ Qf0.exports = Bf0();
});
var Jf0 = U((xWQ) => {
  /*!
   * mime-types
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   */ var xV1 = Zf0(),
    PWQ = X1("path").extname,
    Gf0 = /^\s*([^;\s]*)(?:;|\s|$)/,
    jWQ = /^text\//i;
  xWQ.charset = Yf0;
  xWQ.charsets = { lookup: Yf0 };
  xWQ.contentType = SWQ;
  xWQ.extension = yWQ;
  xWQ.extensions = Object.create(null);
  xWQ.lookup = kWQ;
  xWQ.types = Object.create(null);
  _WQ(xWQ.extensions, xWQ.types);
  function Yf0(A) {
    if (!A || typeof A !== "string") return !1;
    var B = Gf0.exec(A),
      Q = B && xV1[B[1].toLowerCase()];
    if (Q && Q.charset) return Q.charset;
    if (B && jWQ.test(B[1])) return "UTF-8";
    return !1;
  }
  function SWQ(A) {
    if (!A || typeof A !== "string") return !1;
    var B = A.indexOf("/") === -1 ? xWQ.lookup(A) : A;
    if (!B) return !1;
    if (B.indexOf("charset") === -1) {
      var Q = xWQ.charset(B);
      if (Q) B += "; charset=" + Q.toLowerCase();
    }
    return B;
  }
  function yWQ(A) {
    if (!A || typeof A !== "string") return !1;
    var B = Gf0.exec(A),
      Q = B && xWQ.extensions[B[1].toLowerCase()];
    if (!Q || !Q.length) return !1;
    return Q[0];
  }
  function kWQ(A) {
    if (!A || typeof A !== "string") return !1;
    var B = PWQ("x." + A)
      .toLowerCase()
      .substr(1);
    if (!B) return !1;
    return xWQ.types[B] || !1;
  }
  function _WQ(A, B) {
    var Q = ["nginx", "apache", void 0, "iana"];
    Object.keys(xV1).forEach(function Z(G) {
      var Y = xV1[G],
        I = Y.extensions;
      if (!I || !I.length) return;
      A[G] = I;
      for (var W = 0; W < I.length; W++) {
        var J = I[W];
        if (B[J]) {
          var X = Q.indexOf(xV1[B[J]].source),
            F = Q.indexOf(Y.source);
          if (B[J] !== "application/octet-stream" && (X > F || (X === F && B[J].substr(0, 12) === "application/")))
            continue;
        }
        B[J] = G;
      }
    });
  }
});
var Ff0 = U((F58, Xf0) => {
  Xf0.exports = hWQ;
  function hWQ(A) {
    var B =
      typeof setImmediate == "function"
        ? setImmediate
        : typeof process == "object" && typeof process.nextTick == "function"
          ? process.nextTick
          : null;
    if (B) B(A);
    else setTimeout(A, 0);
  }
});
var Nl1 = U((V58, Kf0) => {
  var Vf0 = Ff0();
  Kf0.exports = gWQ;
  function gWQ(A) {
    var B = !1;
    return (
      Vf0(function () {
        B = !0;
      }),
      function Q(Z, G) {
        if (B) A(Z, G);
        else
          Vf0(function Y() {
            A(Z, G);
          });
      }
    );
  }
});
var Ll1 = U((K58, Hf0) => {
  Hf0.exports = uWQ;
  function uWQ(A) {
    (Object.keys(A.jobs).forEach(mWQ.bind(A)), (A.jobs = {}));
  }
  function mWQ(A) {
    if (typeof this.jobs[A] == "function") this.jobs[A]();
  }
});
var Ml1 = U((H58, Df0) => {
  var zf0 = Nl1(),
    dWQ = Ll1();
  Df0.exports = cWQ;
  function cWQ(A, B, Q, Z) {
    var G = Q.keyedList ? Q.keyedList[Q.index] : Q.index;
    Q.jobs[G] = lWQ(B, G, A[G], function (Y, I) {
      if (!(G in Q.jobs)) return;
      if ((delete Q.jobs[G], Y)) dWQ(Q);
      else Q.results[G] = I;
      Z(Y, Q.results);
    });
  }
  function lWQ(A, B, Q, Z) {
    var G;
    if (A.length == 2) G = A(Q, zf0(Z));
    else G = A(Q, B, zf0(Z));
    return G;
  }
});
var Ol1 = U((z58, Cf0) => {
  Cf0.exports = pWQ;
  function pWQ(A, B) {
    var Q = !Array.isArray(A),
      Z = {
        index: 0,
        keyedList: Q || B ? Object.keys(A) : null,
        jobs: {},
        results: Q ? {} : [],
        size: Q ? Object.keys(A).length : A.length,
      };
    if (B)
      Z.keyedList.sort(
        Q
          ? B
          : function (G, Y) {
              return B(A[G], A[Y]);
            },
      );
    return Z;
  }
});
var Rl1 = U((D58, Uf0) => {
  var iWQ = Ll1(),
    nWQ = Nl1();
  Uf0.exports = aWQ;
  function aWQ(A) {
    if (!Object.keys(this.jobs).length) return;
    ((this.index = this.size), iWQ(this), nWQ(A)(null, this.results));
  }
});
var wf0 = U((C58, $f0) => {
  var sWQ = Ml1(),
    rWQ = Ol1(),
    oWQ = Rl1();
  $f0.exports = tWQ;
  function tWQ(A, B, Q) {
    var Z = rWQ(A);
    while (Z.index < (Z.keyedList || A).length)
      (sWQ(A, B, Z, function (G, Y) {
        if (G) {
          Q(G, Y);
          return;
        }
        if (Object.keys(Z.jobs).length === 0) {
          Q(null, Z.results);
          return;
        }
      }),
        Z.index++);
    return oWQ.bind(Z, Q);
  }
});
var Tl1 = U((U58, vV1) => {
  var qf0 = Ml1(),
    eWQ = Ol1(),
    AJQ = Rl1();
  vV1.exports = BJQ;
  vV1.exports.ascending = Ef0;
  vV1.exports.descending = QJQ;
  function BJQ(A, B, Q, Z) {
    var G = eWQ(A, Q);
    return (
      qf0(A, B, G, function Y(I, W) {
        if (I) {
          Z(I, W);
          return;
        }
        if ((G.index++, G.index < (G.keyedList || A).length)) {
          qf0(A, B, G, Y);
          return;
        }
        Z(null, G.results);
      }),
      AJQ.bind(G, Z)
    );
  }
  function Ef0(A, B) {
    return A < B ? -1 : A > B ? 1 : 0;
  }
  function QJQ(A, B) {
    return -1 * Ef0(A, B);
  }
});
var Lf0 = U(($58, Nf0) => {
  var ZJQ = Tl1();
  Nf0.exports = GJQ;
  function GJQ(A, B, Q) {
    return ZJQ(A, B, null, Q);
  }
});
var Of0 = U((w58, Mf0) => {
  Mf0.exports = { parallel: wf0(), serial: Lf0(), serialOrdered: Tl1() };
});
var Pl1 = U((q58, Rf0) => {
  Rf0.exports = Object;
});
var Pf0 = U((E58, Tf0) => {
  Tf0.exports = Error;
});
var Sf0 = U((N58, jf0) => {
  jf0.exports = EvalError;
});
var kf0 = U((L58, yf0) => {
  yf0.exports = RangeError;
});
var xf0 = U((M58, _f0) => {
  _f0.exports = ReferenceError;
});
var bf0 = U((O58, vf0) => {
  vf0.exports = SyntaxError;
});
var bV1 = U((R58, ff0) => {
  ff0.exports = TypeError;
});
var gf0 = U((T58, hf0) => {
  hf0.exports = URIError;
});
var mf0 = U((P58, uf0) => {
  uf0.exports = Math.abs;
});
var cf0 = U((j58, df0) => {
  df0.exports = Math.floor;
});
var pf0 = U((S58, lf0) => {
  lf0.exports = Math.max;
});
var nf0 = U((y58, if0) => {
  if0.exports = Math.min;
});
var sf0 = U((k58, af0) => {
  af0.exports = Math.pow;
});
var of0 = U((_58, rf0) => {
  rf0.exports = Math.round;
});
var ef0 = U((x58, tf0) => {
  tf0.exports =
    Number.isNaN ||
    function A(B) {
      return B !== B;
    };
});
var Bh0 = U((v58, Ah0) => {
  var YJQ = ef0();
  Ah0.exports = function A(B) {
    if (YJQ(B) || B === 0) return B;
    return B < 0 ? -1 : 1;
  };
});
var Zh0 = U((b58, Qh0) => {
  Qh0.exports = Object.getOwnPropertyDescriptor;
});
var jl1 = U((f58, Gh0) => {
  var fV1 = Zh0();
  if (fV1)
    try {
      fV1([], "length");
    } catch (A) {
      fV1 = null;
    }
  Gh0.exports = fV1;
});
var Ih0 = U((h58, Yh0) => {
  var hV1 = Object.defineProperty || !1;
  if (hV1)
    try {
      hV1({}, "a", { value: 1 });
    } catch (A) {
      hV1 = !1;
    }
  Yh0.exports = hV1;
});
var Sl1 = U((g58, Wh0) => {
  Wh0.exports = function A() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return !1;
    if (typeof Symbol.iterator === "symbol") return !0;
    var B = {},
      Q = Symbol("test"),
      Z = Object(Q);
    if (typeof Q === "string") return !1;
    if (Object.prototype.toString.call(Q) !== "[object Symbol]") return !1;
    if (Object.prototype.toString.call(Z) !== "[object Symbol]") return !1;
    var G = 42;
    B[Q] = G;
    for (var Y in B) return !1;
    if (typeof Object.keys === "function" && Object.keys(B).length !== 0) return !1;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(B).length !== 0) return !1;
    var I = Object.getOwnPropertySymbols(B);
    if (I.length !== 1 || I[0] !== Q) return !1;
    if (!Object.prototype.propertyIsEnumerable.call(B, Q)) return !1;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var W = Object.getOwnPropertyDescriptor(B, Q);
      if (W.value !== G || W.enumerable !== !0) return !1;
    }
    return !0;
  };
});
var Fh0 = U((u58, Xh0) => {
  var Jh0 = typeof Symbol !== "undefined" && Symbol,
    IJQ = Sl1();
  Xh0.exports = function A() {
    if (typeof Jh0 !== "function") return !1;
    if (typeof Symbol !== "function") return !1;
    if (typeof Jh0("foo") !== "symbol") return !1;
    if (typeof Symbol("bar") !== "symbol") return !1;
    return IJQ();
  };
});
var yl1 = U((m58, Vh0) => {
  Vh0.exports = (typeof Reflect !== "undefined" && Reflect.getPrototypeOf) || null;
});
var kl1 = U((d58, Kh0) => {
  var WJQ = Pl1();
  Kh0.exports = WJQ.getPrototypeOf || null;
});
var Dh0 = U((c58, zh0) => {
  var JJQ = "Function.prototype.bind called on incompatible ",
    XJQ = Object.prototype.toString,
    FJQ = Math.max,
    VJQ = "[object Function]",
    Hh0 = function A(B, Q) {
      var Z = [];
      for (var G = 0; G < B.length; G += 1) Z[G] = B[G];
      for (var Y = 0; Y < Q.length; Y += 1) Z[Y + B.length] = Q[Y];
      return Z;
    },
    KJQ = function A(B, Q) {
      var Z = [];
      for (var G = Q || 0, Y = 0; G < B.length; G += 1, Y += 1) Z[Y] = B[G];
      return Z;
    },
    HJQ = function (A, B) {
      var Q = "";
      for (var Z = 0; Z < A.length; Z += 1) if (((Q += A[Z]), Z + 1 < A.length)) Q += B;
      return Q;
    };
  zh0.exports = function A(B) {
    var Q = this;
    if (typeof Q !== "function" || XJQ.apply(Q) !== VJQ) throw new TypeError(JJQ + Q);
    var Z = KJQ(arguments, 1),
      G,
      Y = function () {
        if (this instanceof G) {
          var F = Q.apply(this, Hh0(Z, arguments));
          if (Object(F) === F) return F;
          return this;
        }
        return Q.apply(B, Hh0(Z, arguments));
      },
      I = FJQ(0, Q.length - Z.length),
      W = [];
    for (var J = 0; J < I; J++) W[J] = "$" + J;
    if (
      ((G = Function("binder", "return function (" + HJQ(W, ",") + "){ return binder.apply(this,arguments); }")(Y)),
      Q.prototype)
    ) {
      var X = function F() {};
      ((X.prototype = Q.prototype), (G.prototype = new X()), (X.prototype = null));
    }
    return G;
  };
});
var IQ1 = U((l58, Ch0) => {
  var zJQ = Dh0();
  Ch0.exports = Function.prototype.bind || zJQ;
});
var gV1 = U((p58, Uh0) => {
  Uh0.exports = Function.prototype.call;
});
var _l1 = U((i58, $h0) => {
  $h0.exports = Function.prototype.apply;
});
var qh0 = U((n58, wh0) => {
  wh0.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
});
var Nh0 = U((a58, Eh0) => {
  var DJQ = IQ1(),
    CJQ = _l1(),
    UJQ = gV1(),
    $JQ = qh0();
  Eh0.exports = $JQ || DJQ.call(UJQ, CJQ);
});
var Mh0 = U((s58, Lh0) => {
  var wJQ = IQ1(),
    qJQ = bV1(),
    EJQ = gV1(),
    NJQ = Nh0();
  Lh0.exports = function A(B) {
    if (B.length < 1 || typeof B[0] !== "function") throw new qJQ("a function is required");
    return NJQ(wJQ, EJQ, B);
  };
});
var Sh0 = U((r58, jh0) => {
  var LJQ = Mh0(),
    Oh0 = jl1(),
    Th0;
  try {
    Th0 = [].__proto__ === Array.prototype;
  } catch (A) {
    if (!A || typeof A !== "object" || !("code" in A) || A.code !== "ERR_PROTO_ACCESS") throw A;
  }
  var xl1 = !!Th0 && Oh0 && Oh0(Object.prototype, "__proto__"),
    Ph0 = Object,
    Rh0 = Ph0.getPrototypeOf;
  jh0.exports =
    xl1 && typeof xl1.get === "function"
      ? LJQ([xl1.get])
      : typeof Rh0 === "function"
        ? function A(B) {
            return Rh0(B == null ? B : Ph0(B));
          }
        : !1;
});
var vh0 = U((o58, xh0) => {
  var yh0 = yl1(),
    kh0 = kl1(),
    _h0 = Sh0();
  xh0.exports = yh0
    ? function A(B) {
        return yh0(B);
      }
    : kh0
      ? function A(B) {
          if (!B || (typeof B !== "object" && typeof B !== "function")) throw new TypeError("getProto: not an object");
          return kh0(B);
        }
      : _h0
        ? function A(B) {
            return _h0(B);
          }
        : null;
});
var vl1 = U((t58, bh0) => {
  var MJQ = Function.prototype.call,
    OJQ = Object.prototype.hasOwnProperty,
    RJQ = IQ1();
  bh0.exports = RJQ.call(MJQ, OJQ);
});
var dh0 = U((e58, mh0) => {
  var z6,
    TJQ = Pl1(),
    PJQ = Pf0(),
    jJQ = Sf0(),
    SJQ = kf0(),
    yJQ = xf0(),
    lp = bf0(),
    cp = bV1(),
    kJQ = gf0(),
    _JQ = mf0(),
    xJQ = cf0(),
    vJQ = pf0(),
    bJQ = nf0(),
    fJQ = sf0(),
    hJQ = of0(),
    gJQ = Bh0(),
    gh0 = Function,
    bl1 = function (A) {
      try {
        return gh0('"use strict"; return (' + A + ").constructor;")();
      } catch (B) {}
    },
    WQ1 = jl1(),
    uJQ = Ih0(),
    fl1 = function () {
      throw new cp();
    },
    mJQ = WQ1
      ? (function () {
          try {
            return (arguments.callee, fl1);
          } catch (A) {
            try {
              return WQ1(arguments, "callee").get;
            } catch (B) {
              return fl1;
            }
          }
        })()
      : fl1,
    mp = Fh0()(),
    xW = vh0(),
    dJQ = kl1(),
    cJQ = yl1(),
    uh0 = _l1(),
    JQ1 = gV1(),
    dp = {},
    lJQ = typeof Uint8Array === "undefined" || !xW ? z6 : xW(Uint8Array),
    kh = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? z6 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? z6 : ArrayBuffer,
      "%ArrayIteratorPrototype%": mp && xW ? xW([][Symbol.iterator]()) : z6,
      "%AsyncFromSyncIteratorPrototype%": z6,
      "%AsyncFunction%": dp,
      "%AsyncGenerator%": dp,
      "%AsyncGeneratorFunction%": dp,
      "%AsyncIteratorPrototype%": dp,
      "%Atomics%": typeof Atomics === "undefined" ? z6 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? z6 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? z6 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? z6 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? z6 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": PJQ,
      "%eval%": eval,
      "%EvalError%": jJQ,
      "%Float16Array%": typeof Float16Array === "undefined" ? z6 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? z6 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? z6 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? z6 : FinalizationRegistry,
      "%Function%": gh0,
      "%GeneratorFunction%": dp,
      "%Int8Array%": typeof Int8Array === "undefined" ? z6 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? z6 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? z6 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": mp && xW ? xW(xW([][Symbol.iterator]())) : z6,
      "%JSON%": typeof JSON === "object" ? JSON : z6,
      "%Map%": typeof Map === "undefined" ? z6 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !mp || !xW ? z6 : xW(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": TJQ,
      "%Object.getOwnPropertyDescriptor%": WQ1,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? z6 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? z6 : Proxy,
      "%RangeError%": SJQ,
      "%ReferenceError%": yJQ,
      "%Reflect%": typeof Reflect === "undefined" ? z6 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? z6 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !mp || !xW ? z6 : xW(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? z6 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": mp && xW ? xW(""[Symbol.iterator]()) : z6,
      "%Symbol%": mp ? Symbol : z6,
      "%SyntaxError%": lp,
      "%ThrowTypeError%": mJQ,
      "%TypedArray%": lJQ,
      "%TypeError%": cp,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? z6 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? z6 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? z6 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? z6 : Uint32Array,
      "%URIError%": kJQ,
      "%WeakMap%": typeof WeakMap === "undefined" ? z6 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? z6 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? z6 : WeakSet,
      "%Function.prototype.call%": JQ1,
      "%Function.prototype.apply%": uh0,
      "%Object.defineProperty%": uJQ,
      "%Object.getPrototypeOf%": dJQ,
      "%Math.abs%": _JQ,
      "%Math.floor%": xJQ,
      "%Math.max%": vJQ,
      "%Math.min%": bJQ,
      "%Math.pow%": fJQ,
      "%Math.round%": hJQ,
      "%Math.sign%": gJQ,
      "%Reflect.getPrototypeOf%": cJQ,
    };
  if (xW)
    try {
      null.error;
    } catch (A) {
      ((hl1 = xW(xW(A))), (kh["%Error.prototype%"] = hl1));
    }
  var hl1,
    pJQ = function A(B) {
      var Q;
      if (B === "%AsyncFunction%") Q = bl1("async function () {}");
      else if (B === "%GeneratorFunction%") Q = bl1("function* () {}");
      else if (B === "%AsyncGeneratorFunction%") Q = bl1("async function* () {}");
      else if (B === "%AsyncGenerator%") {
        var Z = A("%AsyncGeneratorFunction%");
        if (Z) Q = Z.prototype;
      } else if (B === "%AsyncIteratorPrototype%") {
        var G = A("%AsyncGenerator%");
        if (G && xW) Q = xW(G.prototype);
      }
      return ((kh[B] = Q), Q);
    },
    fh0 = {
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
      "%WeakSetPrototype%": ["WeakSet", "prototype"],
    },
    XQ1 = IQ1(),
    uV1 = vl1(),
    iJQ = XQ1.call(JQ1, Array.prototype.concat),
    nJQ = XQ1.call(uh0, Array.prototype.splice),
    hh0 = XQ1.call(JQ1, String.prototype.replace),
    mV1 = XQ1.call(JQ1, String.prototype.slice),
    aJQ = XQ1.call(JQ1, RegExp.prototype.exec),
    sJQ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    rJQ = /\\(\\)?/g,
    oJQ = function A(B) {
      var Q = mV1(B, 0, 1),
        Z = mV1(B, -1);
      if (Q === "%" && Z !== "%") throw new lp("invalid intrinsic syntax, expected closing `%`");
      else if (Z === "%" && Q !== "%") throw new lp("invalid intrinsic syntax, expected opening `%`");
      var G = [];
      return (
        hh0(B, sJQ, function (Y, I, W, J) {
          G[G.length] = W ? hh0(J, rJQ, "$1") : I || Y;
        }),
        G
      );
    },
    tJQ = function A(B, Q) {
      var Z = B,
        G;
      if (uV1(fh0, Z)) ((G = fh0[Z]), (Z = "%" + G[0] + "%"));
      if (uV1(kh, Z)) {
        var Y = kh[Z];
        if (Y === dp) Y = pJQ(Z);
        if (typeof Y === "undefined" && !Q)
          throw new cp("intrinsic " + B + " exists, but is not available. Please file an issue!");
        return { alias: G, name: Z, value: Y };
      }
      throw new lp("intrinsic " + B + " does not exist!");
    };
  mh0.exports = function A(B, Q) {
    if (typeof B !== "string" || B.length === 0) throw new cp("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof Q !== "boolean") throw new cp('"allowMissing" argument must be a boolean');
    if (aJQ(/^%?[^%]*%?$/, B) === null)
      throw new lp("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var Z = oJQ(B),
      G = Z.length > 0 ? Z[0] : "",
      Y = tJQ("%" + G + "%", Q),
      I = Y.name,
      W = Y.value,
      J = !1,
      X = Y.alias;
    if (X) ((G = X[0]), nJQ(Z, iJQ([0, 1], X)));
    for (var F = 1, V = !0; F < Z.length; F += 1) {
      var K = Z[F],
        H = mV1(K, 0, 1),
        z = mV1(K, -1);
      if ((H === '"' || H === "'" || H === "`" || z === '"' || z === "'" || z === "`") && H !== z)
        throw new lp("property names with quotes must have matching quotes");
      if (K === "constructor" || !V) J = !0;
      if (((G += "." + K), (I = "%" + G + "%"), uV1(kh, I))) W = kh[I];
      else if (W != null) {
        if (!(K in W)) {
          if (!Q) throw new cp("base intrinsic for " + B + " exists, but the property is not available.");
          return;
        }
        if (WQ1 && F + 1 >= Z.length) {
          var D = WQ1(W, K);
          if (((V = !!D), V && "get" in D && !("originalValue" in D.get))) W = D.get;
          else W = W[K];
        } else ((V = uV1(W, K)), (W = W[K]));
        if (V && !J) kh[I] = W;
      }
    }
    return W;
  };
});
var lh0 = U((A88, ch0) => {
  var eJQ = Sl1();
  ch0.exports = function A() {
    return eJQ() && !!Symbol.toStringTag;
  };
});
var nh0 = U((B88, ih0) => {
  var AXQ = dh0(),
    ph0 = AXQ("%Object.defineProperty%", !0),
    BXQ = lh0()(),
    QXQ = vl1(),
    ZXQ = bV1(),
    dV1 = BXQ ? Symbol.toStringTag : null;
  ih0.exports = function A(B, Q) {
    var Z = arguments.length > 2 && !!arguments[2] && arguments[2].force,
      G = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
    if ((typeof Z !== "undefined" && typeof Z !== "boolean") || (typeof G !== "undefined" && typeof G !== "boolean"))
      throw new ZXQ("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
    if (dV1 && (Z || !QXQ(B, dV1)))
      if (ph0) ph0(B, dV1, { configurable: !G, enumerable: !1, value: Q, writable: !1 });
      else B[dV1] = Q;
  };
});
var sh0 = U((Q88, ah0) => {
  ah0.exports = function (A, B) {
    return (
      Object.keys(B).forEach(function (Q) {
        A[Q] = A[Q] || B[Q];
      }),
      A
    );
  };
});
var oh0 = U((Z88, rh0) => {
  var dl1 = Af0(),
    GXQ = X1("util"),
    gl1 = X1("path"),
    YXQ = X1("http"),
    IXQ = X1("https"),
    WXQ = X1("url").parse,
    JXQ = X1("fs"),
    XXQ = X1("stream").Stream,
    ul1 = Jf0(),
    FXQ = Of0(),
    VXQ = nh0(),
    ml1 = sh0();
  rh0.exports = Q5;
  GXQ.inherits(Q5, dl1);
  function Q5(A) {
    if (!(this instanceof Q5)) return new Q5(A);
    ((this._overheadLength = 0), (this._valueLength = 0), (this._valuesToMeasure = []), dl1.call(this), (A = A || {}));
    for (var B in A) this[B] = A[B];
  }
  Q5.LINE_BREAK = `\r
`;
  Q5.DEFAULT_CONTENT_TYPE = "application/octet-stream";
  Q5.prototype.append = function (A, B, Q) {
    if (((Q = Q || {}), typeof Q == "string")) Q = { filename: Q };
    var Z = dl1.prototype.append.bind(this);
    if (typeof B == "number") B = "" + B;
    if (Array.isArray(B)) {
      this._error(new Error("Arrays are not supported."));
      return;
    }
    var G = this._multiPartHeader(A, B, Q),
      Y = this._multiPartFooter();
    (Z(G), Z(B), Z(Y), this._trackLength(G, B, Q));
  };
  Q5.prototype._trackLength = function (A, B, Q) {
    var Z = 0;
    if (Q.knownLength != null) Z += +Q.knownLength;
    else if (Buffer.isBuffer(B)) Z = B.length;
    else if (typeof B === "string") Z = Buffer.byteLength(B);
    if (
      ((this._valueLength += Z),
      (this._overheadLength += Buffer.byteLength(A) + Q5.LINE_BREAK.length),
      !B || (!B.path && !(B.readable && Object.prototype.hasOwnProperty.call(B, "httpVersion")) && !(B instanceof XXQ)))
    )
      return;
    if (!Q.knownLength) this._valuesToMeasure.push(B);
  };
  Q5.prototype._lengthRetriever = function (A, B) {
    if (Object.prototype.hasOwnProperty.call(A, "fd"))
      if (A.end != null && A.end != 1 / 0 && A.start != null) B(null, A.end + 1 - (A.start ? A.start : 0));
      else
        JXQ.stat(A.path, function (Q, Z) {
          var G;
          if (Q) {
            B(Q);
            return;
          }
          ((G = Z.size - (A.start ? A.start : 0)), B(null, G));
        });
    else if (Object.prototype.hasOwnProperty.call(A, "httpVersion")) B(null, +A.headers["content-length"]);
    else if (Object.prototype.hasOwnProperty.call(A, "httpModule"))
      (A.on("response", function (Q) {
        (A.pause(), B(null, +Q.headers["content-length"]));
      }),
        A.resume());
    else B("Unknown stream");
  };
  Q5.prototype._multiPartHeader = function (A, B, Q) {
    if (typeof Q.header == "string") return Q.header;
    var Z = this._getContentDisposition(B, Q),
      G = this._getContentType(B, Q),
      Y = "",
      I = {
        "Content-Disposition": ["form-data", 'name="' + A + '"'].concat(Z || []),
        "Content-Type": [].concat(G || []),
      };
    if (typeof Q.header == "object") ml1(I, Q.header);
    var W;
    for (var J in I)
      if (Object.prototype.hasOwnProperty.call(I, J)) {
        if (((W = I[J]), W == null)) continue;
        if (!Array.isArray(W)) W = [W];
        if (W.length) Y += J + ": " + W.join("; ") + Q5.LINE_BREAK;
      }
    return "--" + this.getBoundary() + Q5.LINE_BREAK + Y + Q5.LINE_BREAK;
  };
  Q5.prototype._getContentDisposition = function (A, B) {
    var Q, Z;
    if (typeof B.filepath === "string") Q = gl1.normalize(B.filepath).replace(/\\/g, "/");
    else if (B.filename || A.name || A.path) Q = gl1.basename(B.filename || A.name || A.path);
    else if (A.readable && Object.prototype.hasOwnProperty.call(A, "httpVersion"))
      Q = gl1.basename(A.client._httpMessage.path || "");
    if (Q) Z = 'filename="' + Q + '"';
    return Z;
  };
  Q5.prototype._getContentType = function (A, B) {
    var Q = B.contentType;
    if (!Q && A.name) Q = ul1.lookup(A.name);
    if (!Q && A.path) Q = ul1.lookup(A.path);
    if (!Q && A.readable && Object.prototype.hasOwnProperty.call(A, "httpVersion")) Q = A.headers["content-type"];
    if (!Q && (B.filepath || B.filename)) Q = ul1.lookup(B.filepath || B.filename);
    if (!Q && typeof A == "object") Q = Q5.DEFAULT_CONTENT_TYPE;
    return Q;
  };
  Q5.prototype._multiPartFooter = function () {
    return function (A) {
      var B = Q5.LINE_BREAK,
        Q = this._streams.length === 0;
      if (Q) B += this._lastBoundary();
      A(B);
    }.bind(this);
  };
  Q5.prototype._lastBoundary = function () {
    return "--" + this.getBoundary() + "--" + Q5.LINE_BREAK;
  };
  Q5.prototype.getHeaders = function (A) {
    var B,
      Q = { "content-type": "multipart/form-data; boundary=" + this.getBoundary() };
    for (B in A) if (Object.prototype.hasOwnProperty.call(A, B)) Q[B.toLowerCase()] = A[B];
    return Q;
  };
  Q5.prototype.setBoundary = function (A) {
    this._boundary = A;
  };
  Q5.prototype.getBoundary = function () {
    if (!this._boundary) this._generateBoundary();
    return this._boundary;
  };
  Q5.prototype.getBuffer = function () {
    var A = new Buffer.alloc(0),
      B = this.getBoundary();
    for (var Q = 0, Z = this._streams.length; Q < Z; Q++)
      if (typeof this._streams[Q] !== "function") {
        if (Buffer.isBuffer(this._streams[Q])) A = Buffer.concat([A, this._streams[Q]]);
        else A = Buffer.concat([A, Buffer.from(this._streams[Q])]);
        if (typeof this._streams[Q] !== "string" || this._streams[Q].substring(2, B.length + 2) !== B)
          A = Buffer.concat([A, Buffer.from(Q5.LINE_BREAK)]);
      }
    return Buffer.concat([A, Buffer.from(this._lastBoundary())]);
  };
  Q5.prototype._generateBoundary = function () {
    var A = "--------------------------";
    for (var B = 0; B < 24; B++) A += Math.floor(Math.random() * 10).toString(16);
    this._boundary = A;
  };
  Q5.prototype.getLengthSync = function () {
    var A = this._overheadLength + this._valueLength;
    if (this._streams.length) A += this._lastBoundary().length;
    if (!this.hasKnownLength()) this._error(new Error("Cannot calculate proper length in synchronous way."));
    return A;
  };
  Q5.prototype.hasKnownLength = function () {
    var A = !0;
    if (this._valuesToMeasure.length) A = !1;
    return A;
  };
  Q5.prototype.getLength = function (A) {
    var B = this._overheadLength + this._valueLength;
    if (this._streams.length) B += this._lastBoundary().length;
    if (!this._valuesToMeasure.length) {
      process.nextTick(A.bind(this, null, B));
      return;
    }
    FXQ.parallel(this._valuesToMeasure, this._lengthRetriever, function (Q, Z) {
      if (Q) {
        A(Q);
        return;
      }
      (Z.forEach(function (G) {
        B += G;
      }),
        A(null, B));
    });
  };
  Q5.prototype.submit = function (A, B) {
    var Q,
      Z,
      G = { method: "post" };
    if (typeof A == "string")
      ((A = WXQ(A)), (Z = ml1({ port: A.port, path: A.pathname, host: A.hostname, protocol: A.protocol }, G)));
    else if (((Z = ml1(A, G)), !Z.port)) Z.port = Z.protocol == "https:" ? 443 : 80;
    if (((Z.headers = this.getHeaders(A.headers)), Z.protocol == "https:")) Q = IXQ.request(Z);
    else Q = YXQ.request(Z);
    return (
      this.getLength(
        function (Y, I) {
          if (Y && Y !== "Unknown stream") {
            this._error(Y);
            return;
          }
          if (I) Q.setHeader("Content-Length", I);
          if ((this.pipe(Q), B)) {
            var W,
              J = function (X, F) {
                return (Q.removeListener("error", J), Q.removeListener("response", W), B.call(this, X, F));
              };
            ((W = J.bind(this, null)), Q.on("error", J), Q.on("response", W));
          }
        }.bind(this),
      ),
      Q
    );
  };
  Q5.prototype._error = function (A) {
    if (!this.error) ((this.error = A), this.pause(), this.emit("error", A));
  };
  Q5.prototype.toString = function () {
    return "[object FormData]";
  };
  VXQ(Q5, "FormData");
});
var Hg0 = U((bXQ) => {
  var yXQ = X1("url").parse,
    kXQ = { ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 },
    _XQ =
      String.prototype.endsWith ||
      function (A) {
        return A.length <= this.length && this.indexOf(A, this.length - A.length) !== -1;
      };
  function xXQ(A) {
    var B = typeof A === "string" ? yXQ(A) : A || {},
      Q = B.protocol,
      Z = B.host,
      G = B.port;
    if (typeof Z !== "string" || !Z || typeof Q !== "string") return "";
    if (((Q = Q.split(":", 1)[0]), (Z = Z.replace(/:\d*$/, "")), (G = parseInt(G) || kXQ[Q] || 0), !vXQ(Z, G)))
      return "";
    var Y = np("npm_config_" + Q + "_proxy") || np(Q + "_proxy") || np("npm_config_proxy") || np("all_proxy");
    if (Y && Y.indexOf("://") === -1) Y = Q + "://" + Y;
    return Y;
  }
  function vXQ(A, B) {
    var Q = (np("npm_config_no_proxy") || np("no_proxy")).toLowerCase();
    if (!Q) return !0;
    if (Q === "*") return !1;
    return Q.split(/[,\s]/).every(function (Z) {
      if (!Z) return !0;
      var G = Z.match(/^(.+):(\d+)$/),
        Y = G ? G[1] : Z,
        I = G ? parseInt(G[2]) : 0;
      if (I && I !== B) return !0;
      if (!/^[.*]/.test(Y)) return A !== Y;
      if (Y.charAt(0) === "*") Y = Y.slice(1);
      return !_XQ.call(A, Y);
    });
  }
  function np(A) {
    return process.env[A.toLowerCase()] || process.env[A.toUpperCase()] || "";
  }
  bXQ.getProxyForUrl = xXQ;
});
var Dg0 = U((I78, zg0) => {
  var ap = 1000,
    sp = ap * 60,
    rp = sp * 60,
    vh = rp * 24,
    hXQ = vh * 7,
    gXQ = vh * 365.25;
  zg0.exports = function (A, B) {
    B = B || {};
    var Q = typeof A;
    if (Q === "string" && A.length > 0) return uXQ(A);
    else if (Q === "number" && isFinite(A)) return B.long ? dXQ(A) : mXQ(A);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(A));
  };
  function uXQ(A) {
    if (((A = String(A)), A.length > 100)) return;
    var B =
      /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        A,
      );
    if (!B) return;
    var Q = parseFloat(B[1]),
      Z = (B[2] || "ms").toLowerCase();
    switch (Z) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return Q * gXQ;
      case "weeks":
      case "week":
      case "w":
        return Q * hXQ;
      case "days":
      case "day":
      case "d":
        return Q * vh;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return Q * rp;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return Q * sp;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return Q * ap;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return Q;
      default:
        return;
    }
  }
  function mXQ(A) {
    var B = Math.abs(A);
    if (B >= vh) return Math.round(A / vh) + "d";
    if (B >= rp) return Math.round(A / rp) + "h";
    if (B >= sp) return Math.round(A / sp) + "m";
    if (B >= ap) return Math.round(A / ap) + "s";
    return A + "ms";
  }
  function dXQ(A) {
    var B = Math.abs(A);
    if (B >= vh) return iV1(A, B, vh, "day");
    if (B >= rp) return iV1(A, B, rp, "hour");
    if (B >= sp) return iV1(A, B, sp, "minute");
    if (B >= ap) return iV1(A, B, ap, "second");
    return A + " ms";
  }
  function iV1(A, B, Q, Z) {
    var G = B >= Q * 1.5;
    return Math.round(A / Q) + " " + Z + (G ? "s" : "");
  }
});
var Ap1 = U((W78, Cg0) => {
  function cXQ(A) {
    ((Q.debug = Q),
      (Q.default = Q),
      (Q.coerce = J),
      (Q.disable = I),
      (Q.enable = G),
      (Q.enabled = W),
      (Q.humanize = Dg0()),
      (Q.destroy = X),
      Object.keys(A).forEach((F) => {
        Q[F] = A[F];
      }),
      (Q.names = []),
      (Q.skips = []),
      (Q.formatters = {}));
    function B(F) {
      let V = 0;
      for (let K = 0; K < F.length; K++) ((V = (V << 5) - V + F.charCodeAt(K)), (V |= 0));
      return Q.colors[Math.abs(V) % Q.colors.length];
    }
    Q.selectColor = B;
    function Q(F) {
      let V,
        K = null,
        H,
        z;
      function D(...C) {
        if (!D.enabled) return;
        let w = D,
          E = Number(new Date()),
          L = E - (V || E);
        if (((w.diff = L), (w.prev = V), (w.curr = E), (V = E), (C[0] = Q.coerce(C[0])), typeof C[0] !== "string"))
          C.unshift("%O");
        let O = 0;
        ((C[0] = C[0].replace(/%([a-zA-Z%])/g, (P, _) => {
          if (P === "%%") return "%";
          O++;
          let b = Q.formatters[_];
          if (typeof b === "function") {
            let S = C[O];
            ((P = b.call(w, S)), C.splice(O, 1), O--);
          }
          return P;
        })),
          Q.formatArgs.call(w, C),
          (w.log || Q.log).apply(w, C));
      }
      if (
        ((D.namespace = F),
        (D.useColors = Q.useColors()),
        (D.color = Q.selectColor(F)),
        (D.extend = Z),
        (D.destroy = Q.destroy),
        Object.defineProperty(D, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () => {
            if (K !== null) return K;
            if (H !== Q.namespaces) ((H = Q.namespaces), (z = Q.enabled(F)));
            return z;
          },
          set: (C) => {
            K = C;
          },
        }),
        typeof Q.init === "function")
      )
        Q.init(D);
      return D;
    }
    function Z(F, V) {
      let K = Q(this.namespace + (typeof V === "undefined" ? ":" : V) + F);
      return ((K.log = this.log), K);
    }
    function G(F) {
      (Q.save(F), (Q.namespaces = F), (Q.names = []), (Q.skips = []));
      let V = (typeof F === "string" ? F : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (let K of V)
        if (K[0] === "-") Q.skips.push(K.slice(1));
        else Q.names.push(K);
    }
    function Y(F, V) {
      let K = 0,
        H = 0,
        z = -1,
        D = 0;
      while (K < F.length)
        if (H < V.length && (V[H] === F[K] || V[H] === "*"))
          if (V[H] === "*") ((z = H), (D = K), H++);
          else (K++, H++);
        else if (z !== -1) ((H = z + 1), D++, (K = D));
        else return !1;
      while (H < V.length && V[H] === "*") H++;
      return H === V.length;
    }
    function I() {
      let F = [...Q.names, ...Q.skips.map((V) => "-" + V)].join(",");
      return (Q.enable(""), F);
    }
    function W(F) {
      for (let V of Q.skips) if (Y(F, V)) return !1;
      for (let V of Q.names) if (Y(F, V)) return !0;
      return !1;
    }
    function J(F) {
      if (F instanceof Error) return F.stack || F.message;
      return F;
    }
    function X() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
      );
    }
    return (Q.enable(Q.load()), Q);
  }
  Cg0.exports = cXQ;
});
var $g0 = U((Ug0, aV1) => {
  Ug0.formatArgs = pXQ;
  Ug0.save = iXQ;
  Ug0.load = nXQ;
  Ug0.useColors = lXQ;
  Ug0.storage = aXQ();
  Ug0.destroy = (() => {
    let A = !1;
    return () => {
      if (!A)
        ((A = !0),
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
          ));
    };
  })();
  Ug0.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33",
  ];
  function lXQ() {
    if (
      typeof window !== "undefined" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
    )
      return !0;
    if (
      typeof navigator !== "undefined" &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
    )
      return !1;
    let A;
    return (
      (typeof document !== "undefined" &&
        document.documentElement &&
        document.documentElement.style &&
        document.documentElement.style.WebkitAppearance) ||
      (typeof window !== "undefined" &&
        window.console &&
        (window.console.firebug || (window.console.exception && window.console.table))) ||
      (typeof navigator !== "undefined" &&
        navigator.userAgent &&
        (A = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
        parseInt(A[1], 10) >= 31) ||
      (typeof navigator !== "undefined" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    );
  }
  function pXQ(A) {
    if (
      ((A[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        A[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        aV1.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let B = "color: " + this.color;
    A.splice(1, 0, B, "color: inherit");
    let Q = 0,
      Z = 0;
    (A[0].replace(/%[a-zA-Z%]/g, (G) => {
      if (G === "%%") return;
      if ((Q++, G === "%c")) Z = Q;
    }),
      A.splice(Z, 0, B));
  }
  Ug0.log = console.debug || console.log || (() => {});
  function iXQ(A) {
    try {
      if (A) Ug0.storage.setItem("debug", A);
      else Ug0.storage.removeItem("debug");
    } catch (B) {}
  }
  function nXQ() {
    let A;
    try {
      A = Ug0.storage.getItem("debug");
    } catch (B) {}
    if (!A && typeof process !== "undefined" && "env" in process) A = process.env.DEBUG;
    return A;
  }
  function aXQ() {
    try {
      return localStorage;
    } catch (A) {}
  }
  aV1.exports = Ap1()(Ug0);
  var { formatters: sXQ } = aV1.exports;
  sXQ.j = function (A) {
    try {
      return JSON.stringify(A);
    } catch (B) {
      return "[UnexpectedJSONParseError]: " + B.message;
    }
  };
});
var zQ1 = U((X78, wg0) => {
  wg0.exports = (A, B = process.argv) => {
    let Q = A.startsWith("-") ? "" : A.length === 1 ? "-" : "--",
      Z = B.indexOf(Q + A),
      G = B.indexOf("--");
    return Z !== -1 && (G === -1 || Z < G);
  };
});
var Ng0 = U((F78, Eg0) => {
  var ZFQ = X1("os"),
    qg0 = X1("tty"),
    MC = zQ1(),
    { env: vW } = process,
    sV1;
  if (MC("no-color") || MC("no-colors") || MC("color=false") || MC("color=never")) sV1 = 0;
  else if (MC("color") || MC("colors") || MC("color=true") || MC("color=always")) sV1 = 1;
  function GFQ() {
    if ("FORCE_COLOR" in vW) {
      if (vW.FORCE_COLOR === "true") return 1;
      if (vW.FORCE_COLOR === "false") return 0;
      return vW.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(vW.FORCE_COLOR, 10), 3);
    }
  }
  function YFQ(A) {
    if (A === 0) return !1;
    return { level: A, hasBasic: !0, has256: A >= 2, has16m: A >= 3 };
  }
  function IFQ(A, { streamIsTTY: B, sniffFlags: Q = !0 } = {}) {
    let Z = GFQ();
    if (Z !== void 0) sV1 = Z;
    let G = Q ? sV1 : Z;
    if (G === 0) return 0;
    if (Q) {
      if (MC("color=16m") || MC("color=full") || MC("color=truecolor")) return 3;
      if (MC("color=256")) return 2;
    }
    if (A && !B && G === void 0) return 0;
    let Y = G || 0;
    if (vW.TERM === "dumb") return Y;
    if (process.platform === "win32") {
      let I = ZFQ.release().split(".");
      if (Number(I[0]) >= 10 && Number(I[2]) >= 10586) return Number(I[2]) >= 14931 ? 3 : 2;
      return 1;
    }
    if ("CI" in vW) {
      if (
        ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE", "DRONE"].some((I) => I in vW) ||
        vW.CI_NAME === "codeship"
      )
        return 1;
      return Y;
    }
    if ("TEAMCITY_VERSION" in vW) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(vW.TEAMCITY_VERSION) ? 1 : 0;
    if (vW.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in vW) {
      let I = Number.parseInt((vW.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (vW.TERM_PROGRAM) {
        case "iTerm.app":
          return I >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(vW.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(vW.TERM)) return 1;
    if ("COLORTERM" in vW) return 1;
    return Y;
  }
  function Bp1(A, B = {}) {
    let Q = IFQ(A, { streamIsTTY: A && A.isTTY, ...B });
    return YFQ(Q);
  }
  Eg0.exports = { supportsColor: Bp1, stdout: Bp1({ isTTY: qg0.isatty(1) }), stderr: Bp1({ isTTY: qg0.isatty(2) }) };
});
var Rg0 = U((Mg0, oV1) => {
  var WFQ = X1("tty"),
    rV1 = X1("util");
  Mg0.init = zFQ;
  Mg0.log = VFQ;
  Mg0.formatArgs = XFQ;
  Mg0.save = KFQ;
  Mg0.load = HFQ;
  Mg0.useColors = JFQ;
  Mg0.destroy = rV1.deprecate(
    () => {},
    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
  );
  Mg0.colors = [6, 2, 3, 4, 5, 1];
  try {
    let A = Ng0();
    if (A && (A.stderr || A).level >= 2)
      Mg0.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81,
        92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
        171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214,
        215, 220, 221,
      ];
  } catch (A) {}
  Mg0.inspectOpts = Object.keys(process.env)
    .filter((A) => {
      return /^debug_/i.test(A);
    })
    .reduce((A, B) => {
      let Q = B.substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (G, Y) => {
            return Y.toUpperCase();
          }),
        Z = process.env[B];
      if (/^(yes|on|true|enabled)$/i.test(Z)) Z = !0;
      else if (/^(no|off|false|disabled)$/i.test(Z)) Z = !1;
      else if (Z === "null") Z = null;
      else Z = Number(Z);
      return ((A[Q] = Z), A);
    }, {});
  function JFQ() {
    return "colors" in Mg0.inspectOpts ? Boolean(Mg0.inspectOpts.colors) : WFQ.isatty(process.stderr.fd);
  }
  function XFQ(A) {
    let { namespace: B, useColors: Q } = this;
    if (Q) {
      let Z = this.color,
        G = "\x1B[3" + (Z < 8 ? Z : "8;5;" + Z),
        Y = `  ${G};1m${B} \x1B[0m`;
      ((A[0] =
        Y +
        A[0]
          .split(
            `
`,
          )
          .join(
            `
` + Y,
          )),
        A.push(G + "m+" + oV1.exports.humanize(this.diff) + "\x1B[0m"));
    } else A[0] = FFQ() + B + " " + A[0];
  }
  function FFQ() {
    if (Mg0.inspectOpts.hideDate) return "";
    return new Date().toISOString() + " ";
  }
  function VFQ(...A) {
    return process.stderr.write(
      rV1.formatWithOptions(Mg0.inspectOpts, ...A) +
        `
`,
    );
  }
  function KFQ(A) {
    if (A) process.env.DEBUG = A;
    else delete process.env.DEBUG;
  }
  function HFQ() {
    return process.env.DEBUG;
  }
  function zFQ(A) {
    A.inspectOpts = {};
    let B = Object.keys(Mg0.inspectOpts);
    for (let Q = 0; Q < B.length; Q++) A.inspectOpts[B[Q]] = Mg0.inspectOpts[B[Q]];
  }
  oV1.exports = Ap1()(Mg0);
  var { formatters: Lg0 } = oV1.exports;
  Lg0.o = function (A) {
    return (
      (this.inspectOpts.colors = this.useColors),
      rV1
        .inspect(A, this.inspectOpts)
        .split(
          `
`,
        )
        .map((B) => B.trim())
        .join(" ")
    );
  };
  Lg0.O = function (A) {
    return ((this.inspectOpts.colors = this.useColors), rV1.inspect(A, this.inspectOpts));
  };
});
var DQ1 = U((K78, Qp1) => {
  if (typeof process === "undefined" || process.type === "renderer" || !1 || process.__nwjs) Qp1.exports = $g0();
  else Qp1.exports = Rg0();
});
var Pg0 = U((H78, Tg0) => {
  var CQ1;
  Tg0.exports = function () {
    if (!CQ1) {
      try {
        CQ1 = DQ1()("follow-redirects");
      } catch (A) {}
      if (typeof CQ1 !== "function") CQ1 = function () {};
    }
    CQ1.apply(null, arguments);
  };
});
var _g0 = U((z78, zp1) => {
  var $Q1 = X1("url"),
    UQ1 = $Q1.URL,
    NFQ = X1("http"),
    LFQ = X1("https"),
    Wp1 = X1("stream").Writable,
    Jp1 = X1("assert"),
    jg0 = Pg0();
  (function A() {
    var B = typeof process !== "undefined",
      Q = typeof window !== "undefined" && typeof document !== "undefined",
      Z = hh(Error.captureStackTrace);
    if (!B && (Q || !Z)) console.warn("The follow-redirects package should be excluded from browser builds.");
  })();
  var Xp1 = !1;
  try {
    Jp1(new UQ1(""));
  } catch (A) {
    Xp1 = A.code === "ERR_INVALID_URL";
  }
  var MFQ = ["auth", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "hash"],
    Fp1 = ["abort", "aborted", "connect", "error", "socket", "timeout"],
    Vp1 = Object.create(null);
  Fp1.forEach(function (A) {
    Vp1[A] = function (B, Q, Z) {
      this._redirectable.emit(A, B, Q, Z);
    };
  });
  var Gp1 = wQ1("ERR_INVALID_URL", "Invalid URL", TypeError),
    Yp1 = wQ1("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"),
    OFQ = wQ1("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", Yp1),
    RFQ = wQ1("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"),
    TFQ = wQ1("ERR_STREAM_WRITE_AFTER_END", "write after end"),
    PFQ = Wp1.prototype.destroy || yg0;
  function lK(A, B) {
    if (
      (Wp1.call(this),
      this._sanitizeOptions(A),
      (this._options = A),
      (this._ended = !1),
      (this._ending = !1),
      (this._redirectCount = 0),
      (this._redirects = []),
      (this._requestBodyLength = 0),
      (this._requestBodyBuffers = []),
      B)
    )
      this.on("response", B);
    var Q = this;
    ((this._onNativeResponse = function (Z) {
      try {
        Q._processResponse(Z);
      } catch (G) {
        Q.emit("error", G instanceof Yp1 ? G : new Yp1({ cause: G }));
      }
    }),
      this._performRequest());
  }
  lK.prototype = Object.create(Wp1.prototype);
  lK.prototype.abort = function () {
    (Hp1(this._currentRequest), this._currentRequest.abort(), this.emit("abort"));
  };
  lK.prototype.destroy = function (A) {
    return (Hp1(this._currentRequest, A), PFQ.call(this, A), this);
  };
  lK.prototype.write = function (A, B, Q) {
    if (this._ending) throw new TFQ();
    if (!fh(A) && !yFQ(A)) throw new TypeError("data should be a string, Buffer or Uint8Array");
    if (hh(B)) ((Q = B), (B = null));
    if (A.length === 0) {
      if (Q) Q();
      return;
    }
    if (this._requestBodyLength + A.length <= this._options.maxBodyLength)
      ((this._requestBodyLength += A.length),
        this._requestBodyBuffers.push({ data: A, encoding: B }),
        this._currentRequest.write(A, B, Q));
    else (this.emit("error", new RFQ()), this.abort());
  };
  lK.prototype.end = function (A, B, Q) {
    if (hh(A)) ((Q = A), (A = B = null));
    else if (hh(B)) ((Q = B), (B = null));
    if (!A) ((this._ended = this._ending = !0), this._currentRequest.end(null, null, Q));
    else {
      var Z = this,
        G = this._currentRequest;
      (this.write(A, B, function () {
        ((Z._ended = !0), G.end(null, null, Q));
      }),
        (this._ending = !0));
    }
  };
  lK.prototype.setHeader = function (A, B) {
    ((this._options.headers[A] = B), this._currentRequest.setHeader(A, B));
  };
  lK.prototype.removeHeader = function (A) {
    (delete this._options.headers[A], this._currentRequest.removeHeader(A));
  };
  lK.prototype.setTimeout = function (A, B) {
    var Q = this;
    function Z(I) {
      (I.setTimeout(A), I.removeListener("timeout", I.destroy), I.addListener("timeout", I.destroy));
    }
    function G(I) {
      if (Q._timeout) clearTimeout(Q._timeout);
      ((Q._timeout = setTimeout(function () {
        (Q.emit("timeout"), Y());
      }, A)),
        Z(I));
    }
    function Y() {
      if (Q._timeout) (clearTimeout(Q._timeout), (Q._timeout = null));
      if (
        (Q.removeListener("abort", Y),
        Q.removeListener("error", Y),
        Q.removeListener("response", Y),
        Q.removeListener("close", Y),
        B)
      )
        Q.removeListener("timeout", B);
      if (!Q.socket) Q._currentRequest.removeListener("socket", G);
    }
    if (B) this.on("timeout", B);
    if (this.socket) G(this.socket);
    else this._currentRequest.once("socket", G);
    return (
      this.on("socket", Z),
      this.on("abort", Y),
      this.on("error", Y),
      this.on("response", Y),
      this.on("close", Y),
      this
    );
  };
  ["flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach(function (A) {
    lK.prototype[A] = function (B, Q) {
      return this._currentRequest[A](B, Q);
    };
  });
  ["aborted", "connection", "socket"].forEach(function (A) {
    Object.defineProperty(lK.prototype, A, {
      get: function () {
        return this._currentRequest[A];
      },
    });
  });
  lK.prototype._sanitizeOptions = function (A) {
    if (!A.headers) A.headers = {};
    if (A.host) {
      if (!A.hostname) A.hostname = A.host;
      delete A.host;
    }
    if (!A.pathname && A.path) {
      var B = A.path.indexOf("?");
      if (B < 0) A.pathname = A.path;
      else ((A.pathname = A.path.substring(0, B)), (A.search = A.path.substring(B)));
    }
  };
  lK.prototype._performRequest = function () {
    var A = this._options.protocol,
      B = this._options.nativeProtocols[A];
    if (!B) throw new TypeError("Unsupported protocol " + A);
    if (this._options.agents) {
      var Q = A.slice(0, -1);
      this._options.agent = this._options.agents[Q];
    }
    var Z = (this._currentRequest = B.request(this._options, this._onNativeResponse));
    Z._redirectable = this;
    for (var G of Fp1) Z.on(G, Vp1[G]);
    if (
      ((this._currentUrl = /^\//.test(this._options.path) ? $Q1.format(this._options) : this._options.path),
      this._isRedirect)
    ) {
      var Y = 0,
        I = this,
        W = this._requestBodyBuffers;
      (function J(X) {
        if (Z === I._currentRequest) {
          if (X) I.emit("error", X);
          else if (Y < W.length) {
            var F = W[Y++];
            if (!Z.finished) Z.write(F.data, F.encoding, J);
          } else if (I._ended) Z.end();
        }
      })();
    }
  };
  lK.prototype._processResponse = function (A) {
    var B = A.statusCode;
    if (this._options.trackRedirects)
      this._redirects.push({ url: this._currentUrl, headers: A.headers, statusCode: B });
    var Q = A.headers.location;
    if (!Q || this._options.followRedirects === !1 || B < 300 || B >= 400) {
      ((A.responseUrl = this._currentUrl),
        (A.redirects = this._redirects),
        this.emit("response", A),
        (this._requestBodyBuffers = []));
      return;
    }
    if ((Hp1(this._currentRequest), A.destroy(), ++this._redirectCount > this._options.maxRedirects)) throw new OFQ();
    var Z,
      G = this._options.beforeRedirect;
    if (G) Z = Object.assign({ Host: A.req.getHeader("host") }, this._options.headers);
    var Y = this._options.method;
    if (
      ((B === 301 || B === 302) && this._options.method === "POST") ||
      (B === 303 && !/^(?:GET|HEAD)$/.test(this._options.method))
    )
      ((this._options.method = "GET"), (this._requestBodyBuffers = []), Zp1(/^content-/i, this._options.headers));
    var I = Zp1(/^host$/i, this._options.headers),
      W = Kp1(this._currentUrl),
      J = I || W.host,
      X = /^\w+:/.test(Q) ? this._currentUrl : $Q1.format(Object.assign(W, { host: J })),
      F = jFQ(Q, X);
    if (
      (jg0("redirecting to", F.href),
      (this._isRedirect = !0),
      Ip1(F, this._options),
      (F.protocol !== W.protocol && F.protocol !== "https:") || (F.host !== J && !SFQ(F.host, J)))
    )
      Zp1(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    if (hh(G)) {
      var V = { headers: A.headers, statusCode: B },
        K = { url: X, method: Y, headers: Z };
      (G(this._options, V, K), this._sanitizeOptions(this._options));
    }
    this._performRequest();
  };
  function Sg0(A) {
    var B = { maxRedirects: 21, maxBodyLength: 10485760 },
      Q = {};
    return (
      Object.keys(A).forEach(function (Z) {
        var G = Z + ":",
          Y = (Q[G] = A[Z]),
          I = (B[Z] = Object.create(Y));
        function W(X, F, V) {
          if (kFQ(X)) X = Ip1(X);
          else if (fh(X)) X = Ip1(Kp1(X));
          else ((V = F), (F = kg0(X)), (X = { protocol: G }));
          if (hh(F)) ((V = F), (F = null));
          if (
            ((F = Object.assign({ maxRedirects: B.maxRedirects, maxBodyLength: B.maxBodyLength }, X, F)),
            (F.nativeProtocols = Q),
            !fh(F.host) && !fh(F.hostname))
          )
            F.hostname = "::1";
          return (Jp1.equal(F.protocol, G, "protocol mismatch"), jg0("options", F), new lK(F, V));
        }
        function J(X, F, V) {
          var K = I.request(X, F, V);
          return (K.end(), K);
        }
        Object.defineProperties(I, {
          request: { value: W, configurable: !0, enumerable: !0, writable: !0 },
          get: { value: J, configurable: !0, enumerable: !0, writable: !0 },
        });
      }),
      B
    );
  }
  function yg0() {}
  function Kp1(A) {
    var B;
    if (Xp1) B = new UQ1(A);
    else if (((B = kg0($Q1.parse(A))), !fh(B.protocol))) throw new Gp1({ input: A });
    return B;
  }
  function jFQ(A, B) {
    return Xp1 ? new UQ1(A, B) : Kp1($Q1.resolve(B, A));
  }
  function kg0(A) {
    if (/^\[/.test(A.hostname) && !/^\[[:0-9a-f]+\]$/i.test(A.hostname)) throw new Gp1({ input: A.href || A });
    if (/^\[/.test(A.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(A.host)) throw new Gp1({ input: A.href || A });
    return A;
  }
  function Ip1(A, B) {
    var Q = B || {};
    for (var Z of MFQ) Q[Z] = A[Z];
    if (Q.hostname.startsWith("[")) Q.hostname = Q.hostname.slice(1, -1);
    if (Q.port !== "") Q.port = Number(Q.port);
    return ((Q.path = Q.search ? Q.pathname + Q.search : Q.pathname), Q);
  }
  function Zp1(A, B) {
    var Q;
    for (var Z in B) if (A.test(Z)) ((Q = B[Z]), delete B[Z]);
    return Q === null || typeof Q === "undefined" ? void 0 : String(Q).trim();
  }
  function wQ1(A, B, Q) {
    function Z(G) {
      if (hh(Error.captureStackTrace)) Error.captureStackTrace(this, this.constructor);
      (Object.assign(this, G || {}), (this.code = A), (this.message = this.cause ? B + ": " + this.cause.message : B));
    }
    return (
      (Z.prototype = new (Q || Error)()),
      Object.defineProperties(Z.prototype, {
        constructor: { value: Z, enumerable: !1 },
        name: { value: "Error [" + A + "]", enumerable: !1 },
      }),
      Z
    );
  }
  function Hp1(A, B) {
    for (var Q of Fp1) A.removeListener(Q, Vp1[Q]);
    (A.on("error", yg0), A.destroy(B));
  }
  function SFQ(A, B) {
    Jp1(fh(A) && fh(B));
    var Q = A.length - B.length - 1;
    return Q > 0 && A[Q] === "." && A.endsWith(B);
  }
  function fh(A) {
    return typeof A === "string" || A instanceof String;
  }
  function hh(A) {
    return typeof A === "function";
  }
  function yFQ(A) {
    return typeof A === "object" && "length" in A;
  }
  function kFQ(A) {
    return UQ1 && A instanceof UQ1;
  }
  zp1.exports = Sg0({ http: NFQ, https: LFQ });
  zp1.exports.wrap = Sg0;
});
var GF = U((Hu0) => {
  Object.defineProperty(Hu0, "__esModule", { value: !0 });
  Hu0.Log = Hu0.LogLevel = void 0;
  var DVQ = " DEBUG ",
    CVQ = "  INFO ",
    UVQ = "  WARN ",
    $VQ = " ERROR ";
  function YK1(A) {
    return (A.unshift("[Statsig]"), A);
  }
  Hu0.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
  class uh {
    static info(...A) {
      if (uh.level >= Hu0.LogLevel.Info) console.info(CVQ, ...YK1(A));
    }
    static debug(...A) {
      if (uh.level >= Hu0.LogLevel.Debug) console.debug(DVQ, ...YK1(A));
    }
    static warn(...A) {
      if (uh.level >= Hu0.LogLevel.Warn) console.warn(UVQ, ...YK1(A));
    }
    static error(...A) {
      if (uh.level >= Hu0.LogLevel.Error) console.error($VQ, ...YK1(A));
    }
  }
  Hu0.Log = uh;
  uh.level = Hu0.LogLevel.Warn;
});
var mh = U(($u0) => {
  var Rp1, Tp1, Pp1;
  Object.defineProperty($u0, "__esModule", { value: !0 });
  $u0._getInstance = $u0._getStatsigGlobalFlag = $u0._getStatsigGlobal = void 0;
  var wVQ = GF(),
    qVQ = () => {
      return __STATSIG__ ? __STATSIG__ : IK1;
    };
  $u0._getStatsigGlobal = qVQ;
  var EVQ = (A) => {
    return $u0._getStatsigGlobal()[A];
  };
  $u0._getStatsigGlobalFlag = EVQ;
  var NVQ = (A) => {
    let B = $u0._getStatsigGlobal();
    if (!A) {
      if (B.instances && Object.keys(B.instances).length > 1)
        wVQ.Log.warn(
          "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
        );
      return B.firstInstance;
    }
    return B.instances && B.instances[A];
  };
  $u0._getInstance = NVQ;
  var Bi = "__STATSIG__",
    Du0 = typeof window !== "undefined" ? window : {},
    Cu0 = typeof global !== "undefined" ? global : {},
    Uu0 = typeof globalThis !== "undefined" ? globalThis : {},
    IK1 =
      (Pp1 =