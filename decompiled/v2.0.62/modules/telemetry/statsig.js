/**
 * Claude Code v2.0.62 - Statsig 遥测
 *
 * 原始位置: 行 5001 - 10000
 * 模块: telemetry/statsig
 */

        (Tp1 = (Rp1 = Du0[Bi]) !== null && Rp1 !== void 0 ? Rp1 : Cu0[Bi]) !== null && Tp1 !== void 0
          ? Tp1
          : Uu0[Bi]) !== null && Pp1 !== void 0
        ? Pp1
        : { instance: $u0._getInstance };
  Du0[Bi] = IK1;
  Cu0[Bi] = IK1;
  Uu0[Bi] = IK1;
});
var JK1 = U((wu0) => {
  Object.defineProperty(wu0, "__esModule", { value: !0 });
  wu0.Diagnostics = void 0;
  var WK1 = new Map(),
    yp1 = "start",
    kp1 = "end",
    MVQ = "statsig::diagnostics";
  wu0.Diagnostics = {
    _getMarkers: (A) => {
      return WK1.get(A);
    },
    _markInitOverallStart: (A) => {
      Zi(A, Qi({}, yp1, "overall"));
    },
    _markInitOverallEnd: (A, B, Q) => {
      Zi(
        A,
        Qi(
          {
            success: B,
            error: B ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
            evaluationDetails: Q,
          },
          kp1,
          "overall",
        ),
      );
    },
    _markInitNetworkReqStart: (A, B) => {
      Zi(A, Qi(B, yp1, "initialize", "network_request"));
    },
    _markInitNetworkReqEnd: (A, B) => {
      Zi(A, Qi(B, kp1, "initialize", "network_request"));
    },
    _markInitProcessStart: (A) => {
      Zi(A, Qi({}, yp1, "initialize", "process"));
    },
    _markInitProcessEnd: (A, B) => {
      Zi(A, Qi(B, kp1, "initialize", "process"));
    },
    _clearMarkers: (A) => {
      WK1.delete(A);
    },
    _formatError(A) {
      if (!(A && typeof A === "object")) return;
      return { code: _p1(A, "code"), name: _p1(A, "name"), message: _p1(A, "message") };
    },
    _getDiagnosticsData(A, B, Q, Z) {
      var G;
      return {
        success: (A === null || A === void 0 ? void 0 : A.ok) === !0,
        statusCode: A === null || A === void 0 ? void 0 : A.status,
        sdkRegion:
          (G = A === null || A === void 0 ? void 0 : A.headers) === null || G === void 0
            ? void 0
            : G.get("x-statsig-region"),
        isDelta: Q.includes('"is_delta":true') === !0 ? !0 : void 0,
        attempt: B,
        error: wu0.Diagnostics._formatError(Z),
      };
    },
    _enqueueDiagnosticsEvent(A, B, Q, Z) {
      let G = wu0.Diagnostics._getMarkers(Q);
      if (G == null || G.length <= 0) return -1;
      let Y = G[G.length - 1].timestamp - G[0].timestamp;
      wu0.Diagnostics._clearMarkers(Q);
      let I = OVQ(A, { context: "initialize", markers: G.slice(), statsigOptions: Z });
      return (B.enqueue(I), Y);
    },
  };
  function Qi(A, B, Q, Z) {
    return Object.assign({ key: Q, action: B, step: Z, timestamp: Date.now() }, A);
  }
  function OVQ(A, B) {
    return { eventName: MVQ, user: A, value: null, metadata: B, time: Date.now() };
  }
  function Zi(A, B) {
    var Q;
    let Z = (Q = WK1.get(A)) !== null && Q !== void 0 ? Q : [];
    (Z.push(B), WK1.set(A, Z));
  }
  function _p1(A, B) {
    if (B in A) return A[B];
    return;
  }
});
var XK1 = U((qu0) => {
  Object.defineProperty(qu0, "__esModule", { value: !0 });
  qu0._isTypeMatch = qu0._typeOf = void 0;
  function RVQ(A) {
    return Array.isArray(A) ? "array" : typeof A;
  }
  qu0._typeOf = RVQ;
  function TVQ(A, B) {
    let Q = (Z) => (Array.isArray(Z) ? "array" : typeof Z);
    return Q(A) === Q(B);
  }
  qu0._isTypeMatch = TVQ;
});
var Gi = U((Nu0) => {
  Object.defineProperty(Nu0, "__esModule", { value: !0 });
  Nu0._getSortedObject = Nu0._DJB2Object = Nu0._DJB2 = void 0;
  var jVQ = XK1(),
    SVQ = (A) => {
      let B = 0;
      for (let Q = 0; Q < A.length; Q++) {
        let Z = A.charCodeAt(Q);
        ((B = (B << 5) - B + Z), (B = B & B));
      }
      return String(B >>> 0);
    };
  Nu0._DJB2 = SVQ;
  var yVQ = (A, B) => {
    return Nu0._DJB2(JSON.stringify(Nu0._getSortedObject(A, B)));
  };
  Nu0._DJB2Object = yVQ;
  var kVQ = (A, B) => {
    if (A == null) return null;
    let Q = Object.keys(A).sort(),
      Z = {};
    return (
      Q.forEach((G) => {
        let Y = A[G];
        if (B === 0 || jVQ._typeOf(Y) !== "object") {
          Z[G] = Y;
          return;
        }
        Z[G] = Nu0._getSortedObject(Y, B != null ? B - 1 : B);
      }),
      Z
    );
  };
  Nu0._getSortedObject = kVQ;
});
var RQ1 = U((Ru0) => {
  Object.defineProperty(Ru0, "__esModule", { value: !0 });
  Ru0._getStorageKey = Ru0._getUserStorageKey = void 0;
  var Mu0 = Gi();
  function Ou0(A, B, Q) {
    var Z;
    if (Q) return Q(A, B);
    let G = B && B.customIDs ? B.customIDs : {},
      Y = [
        `uid:${(Z = B === null || B === void 0 ? void 0 : B.userID) !== null && Z !== void 0 ? Z : ""}`,
        `cids:${Object.keys(G)
          .sort((I, W) => I.localeCompare(W))
          .map((I) => `${I}-${G[I]}`)
          .join(",")}`,
        `k:${A}`,
      ];
    return Mu0._DJB2(Y.join("|"));
  }
  Ru0._getUserStorageKey = Ou0;
  function xVQ(A, B, Q) {
    if (B) return Ou0(A, B, Q);
    return Mu0._DJB2(`k:${A}`);
  }
  Ru0._getStorageKey = xVQ;
});
var TQ1 = U((Pu0) => {
  Object.defineProperty(Pu0, "__esModule", { value: !0 });
  Pu0.NetworkParam = Pu0.NetworkDefault = Pu0.Endpoint = void 0;
  Pu0.Endpoint = { _initialize: "initialize", _rgstr: "rgstr", _download_config_specs: "download_config_specs" };
  Pu0.NetworkDefault = {
    [Pu0.Endpoint._rgstr]: "https://prodregistryv2.org/v1",
    [Pu0.Endpoint._initialize]: "https://featureassets.org/v1",
    [Pu0.Endpoint._download_config_specs]: "https://api.statsigcdn.com/v1",
  };
  Pu0.NetworkParam = {
    EventCount: "ec",
    SdkKey: "k",
    SdkType: "st",
    SdkVersion: "sv",
    Time: "t",
    SessionID: "sid",
    StatsigEncoded: "se",
    IsGzipped: "gz",
  };
});
var dh = U((Su0) => {
  Object.defineProperty(Su0, "__esModule", { value: !0 });
  Su0._getCurrentPageUrlSafe =
    Su0._addDocumentEventListenerSafe =
    Su0._addWindowEventListenerSafe =
    Su0._isServerEnv =
    Su0._getDocumentSafe =
    Su0._getWindowSafe =
      void 0;
  var fVQ = () => {
    return typeof window !== "undefined" ? window : null;
  };
  Su0._getWindowSafe = fVQ;
  var hVQ = () => {
    var A;
    let B = Su0._getWindowSafe();
    return (A = B === null || B === void 0 ? void 0 : B.document) !== null && A !== void 0 ? A : null;
  };
  Su0._getDocumentSafe = hVQ;
  var gVQ = () => {
    if (Su0._getDocumentSafe() !== null) return !1;
    let A = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
    return typeof EdgeRuntime === "string" || A;
  };
  Su0._isServerEnv = gVQ;
  var uVQ = (A, B) => {
    let Q = Su0._getWindowSafe();
    if (typeof (Q === null || Q === void 0 ? void 0 : Q.addEventListener) === "function") Q.addEventListener(A, B);
  };
  Su0._addWindowEventListenerSafe = uVQ;
  var mVQ = (A, B) => {
    let Q = Su0._getDocumentSafe();
    if (typeof (Q === null || Q === void 0 ? void 0 : Q.addEventListener) === "function") Q.addEventListener(A, B);
  };
  Su0._addDocumentEventListenerSafe = mVQ;
  var dVQ = () => {
    var A;
    try {
      return (A = Su0._getWindowSafe()) === null || A === void 0 ? void 0 : A.location.href.split(/[?#]/)[0];
    } catch (B) {
      return;
    }
  };
  Su0._getCurrentPageUrlSafe = dVQ;
});
var bp1 = U((vu0) => {
  Object.defineProperty(vu0, "__esModule", { value: !0 });
  vu0._createLayerParameterExposure =
    vu0._createConfigExposure =
    vu0._mapExposures =
    vu0._createGateExposure =
    vu0._isExposureEvent =
      void 0;
  var ku0 = "statsig::config_exposure",
    _u0 = "statsig::gate_exposure",
    xu0 = "statsig::layer_exposure",
    vp1 = (A, B, Q, Z, G) => {
      if (Q.bootstrapMetadata) Z.bootstrapMetadata = Q.bootstrapMetadata;
      return { eventName: A, user: B, value: null, metadata: rVQ(Q, Z), secondaryExposures: G, time: Date.now() };
    },
    iVQ = ({ eventName: A }) => {
      return A === _u0 || A === ku0 || A === xu0;
    };
  vu0._isExposureEvent = iVQ;
  var nVQ = (A, B, Q) => {
    var Z, G, Y;
    let I = { gate: B.name, gateValue: String(B.value), ruleID: B.ruleID };
    if (((Z = B.__evaluation) === null || Z === void 0 ? void 0 : Z.version) != null)
      I.configVersion = B.__evaluation.version;
    return vp1(
      _u0,
      A,
      B.details,
      I,
      HK1(
        (Y = (G = B.__evaluation) === null || G === void 0 ? void 0 : G.secondary_exposures) !== null && Y !== void 0
          ? Y
          : [],
        Q,
      ),
    );
  };
  vu0._createGateExposure = nVQ;
  function HK1(A, B) {
    return A.map((Q) => {
      if (typeof Q === "string") return (B !== null && B !== void 0 ? B : {})[Q];
      return Q;
    }).filter((Q) => Q != null);
  }
  vu0._mapExposures = HK1;
  var aVQ = (A, B, Q) => {
    var Z, G, Y, I;
    let W = { config: B.name, ruleID: B.ruleID };
    if (((Z = B.__evaluation) === null || Z === void 0 ? void 0 : Z.version) != null)
      W.configVersion = B.__evaluation.version;
    if (((G = B.__evaluation) === null || G === void 0 ? void 0 : G.passed) != null)
      W.rulePassed = String(B.__evaluation.passed);
    return vp1(
      ku0,
      A,
      B.details,
      W,
      HK1(
        (I = (Y = B.__evaluation) === null || Y === void 0 ? void 0 : Y.secondary_exposures) !== null && I !== void 0
          ? I
          : [],
        Q,
      ),
    );
  };
  vu0._createConfigExposure = aVQ;
  var sVQ = (A, B, Q, Z) => {
    var G, Y, I, W;
    let J = B.__evaluation,
      X =
        ((G = J === null || J === void 0 ? void 0 : J.explicit_parameters) === null || G === void 0
          ? void 0
          : G.includes(Q)) === !0,
      F = "",
      V =
        (Y = J === null || J === void 0 ? void 0 : J.undelegated_secondary_exposures) !== null && Y !== void 0 ? Y : [];
    if (X) ((F = (I = J.allocated_experiment_name) !== null && I !== void 0 ? I : ""), (V = J.secondary_exposures));
    let K = {
      config: B.name,
      parameterName: Q,
      ruleID: B.ruleID,
      allocatedExperiment: F,
      isExplicitParameter: String(X),
    };
    if (((W = B.__evaluation) === null || W === void 0 ? void 0 : W.version) != null)
      K.configVersion = B.__evaluation.version;
    return vp1(xu0, A, B.details, K, HK1(V, Z));
  };
  vu0._createLayerParameterExposure = sVQ;
  var rVQ = (A, B) => {
    if (((B.reason = A.reason), A.lcut)) B.lcut = String(A.lcut);
    if (A.receivedAt) B.receivedAt = String(A.receivedAt);
    return B;
  };
});
var ZT = U((fu0) => {
  Object.defineProperty(fu0, "__esModule", { value: !0 });
  fu0._setObjectInStorage = fu0._getObjectFromStorage = fu0.Storage = void 0;
  var BKQ = GF(),
    QKQ = dh(),
    PQ1 = {},
    hp1 = {
      isReady: () => !0,
      isReadyResolver: () => null,
      getProviderName: () => "InMemory",
      getItem: (A) => (PQ1[A] ? PQ1[A] : null),
      setItem: (A, B) => {
        PQ1[A] = B;
      },
      removeItem: (A) => {
        delete PQ1[A];
      },
      getAllKeys: () => Object.keys(PQ1),
    },
    zK1 = null;
  try {
    let A = QKQ._getWindowSafe();
    if (A && A.localStorage && typeof A.localStorage.getItem === "function")
      zK1 = {
        isReady: () => !0,
        isReadyResolver: () => null,
        getProviderName: () => "LocalStorage",
        getItem: (B) => A.localStorage.getItem(B),
        setItem: (B, Q) => A.localStorage.setItem(B, Q),
        removeItem: (B) => A.localStorage.removeItem(B),
        getAllKeys: () => Object.keys(A.localStorage),
      };
  } catch (A) {
    BKQ.Log.warn("Failed to setup localStorageProvider.");
  }
  var fp1 = zK1 !== null && zK1 !== void 0 ? zK1 : hp1,
    RN = fp1;
  function ZKQ(A) {
    try {
      return A();
    } catch (B) {
      if (B instanceof Error && B.name === "SecurityError") return (fu0.Storage._setProvider(hp1), null);
      throw B;
    }
  }
  fu0.Storage = {
    isReady: () => RN.isReady(),
    isReadyResolver: () => RN.isReadyResolver(),
    getProviderName: () => RN.getProviderName(),
    getItem: (A) => ZKQ(() => RN.getItem(A)),
    setItem: (A, B) => RN.setItem(A, B),
    removeItem: (A) => RN.removeItem(A),
    getAllKeys: () => RN.getAllKeys(),
    _setProvider: (A) => {
      ((fp1 = A), (RN = A));
    },
    _setDisabled: (A) => {
      if (A) RN = hp1;
      else RN = fp1;
    },
  };
  function GKQ(A) {
    let B = fu0.Storage.getItem(A);
    return JSON.parse(B !== null && B !== void 0 ? B : "null");
  }
  fu0._getObjectFromStorage = GKQ;
  function YKQ(A, B) {
    fu0.Storage.setItem(A, JSON.stringify(B));
  }
  fu0._setObjectInStorage = YKQ;
});
var gp1 = U((uu0) => {
  Object.defineProperty(uu0, "__esModule", { value: !0 });
  uu0.UrlConfiguration = void 0;
  var CK1 = TQ1(),
    WKQ = { [CK1.Endpoint._initialize]: "i", [CK1.Endpoint._rgstr]: "e", [CK1.Endpoint._download_config_specs]: "d" };
  class gu0 {
    constructor(A, B, Q, Z) {
      if (((this.customUrl = null), (this.fallbackUrls = null), (this.endpoint = A), (this.endpointDnsKey = WKQ[A]), B))
        this.customUrl = B;
      if (!B && Q) this.customUrl = Q.endsWith("/") ? `${Q}${A}` : `${Q}/${A}`;
      if (Z) this.fallbackUrls = Z;
      let G = CK1.NetworkDefault[A];
      this.defaultUrl = `${G}/${A}`;
    }
    getUrl() {
      var A;
      return (A = this.customUrl) !== null && A !== void 0 ? A : this.defaultUrl;
    }
  }
  uu0.UrlConfiguration = gu0;
});
var wK1 = U((cu0) => {
  Object.defineProperty(cu0, "__esModule", { value: !0 });
  cu0._notifyVisibilityChanged = cu0._subscribeToVisiblityChanged = cu0._isUnloading = cu0._isCurrentlyVisible = void 0;
  var UK1 = dh(),
    $K1 = "foreground",
    mp1 = "background",
    du0 = [],
    up1 = $K1,
    dp1 = !1,
    JKQ = () => {
      return up1 === $K1;
    };
  cu0._isCurrentlyVisible = JKQ;
  var XKQ = () => dp1;
  cu0._isUnloading = XKQ;
  var FKQ = (A) => {
    du0.unshift(A);
  };
  cu0._subscribeToVisiblityChanged = FKQ;
  var VKQ = (A) => {
    if (A === up1) return;
    ((up1 = A), du0.forEach((B) => B(A)));
  };
  cu0._notifyVisibilityChanged = VKQ;
  UK1._addWindowEventListenerSafe("focus", () => {
    ((dp1 = !1), cu0._notifyVisibilityChanged($K1));
  });
  UK1._addWindowEventListenerSafe("blur", () => cu0._notifyVisibilityChanged(mp1));
  UK1._addWindowEventListenerSafe("beforeunload", () => {
    ((dp1 = !0), cu0._notifyVisibilityChanged(mp1));
  });
  UK1._addDocumentEventListenerSafe("visibilitychange", () => {
    cu0._notifyVisibilityChanged(document.visibilityState === "visible" ? $K1 : mp1);
  });
});
var lp1 = U((Ji) => {
  var Ii =
    (Ji && Ji.__awaiter) ||
    function (A, B, Q, Z) {
      function G(Y) {
        return Y instanceof Q
          ? Y
          : new Q(function (I) {
              I(Y);
            });
      }
      return new (Q || (Q = Promise))(function (Y, I) {
        function W(F) {
          try {
            X(Z.next(F));
          } catch (V) {
            I(V);
          }
        }
        function J(F) {
          try {
            X(Z.throw(F));
          } catch (V) {
            I(V);
          }
        }
        function X(F) {
          F.done ? Y(F.value) : G(F.value).then(W, J);
        }
        X((Z = Z.apply(A, B || [])).next());
      });
    };
  Object.defineProperty(Ji, "__esModule", { value: !0 });
  Ji.EventLogger = void 0;
  var DKQ = RQ1(),
    CKQ = Gi(),
    jQ1 = GF(),
    lu0 = TQ1(),
    cp1 = dh(),
    UKQ = bp1(),
    Wi = ZT(),
    $KQ = gp1(),
    pu0 = wK1(),
    wKQ = 100,
    qKQ = 1e4,
    EKQ = 1000,
    MAX_TIMEOUT_MS = 600000,
    LKQ = 500,
    iu0 = 200,
    SQ1 = {},
    qK1 = { Startup: "startup", GainedFocus: "gained_focus" };
  class ch {
    static _safeFlushAndForget(A) {
      var B;
      (B = SQ1[A]) === null || B === void 0 || B.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(A) {
      var B;
      (B = SQ1[A]) === null || B === void 0 || B._retryFailedLogs(qK1.GainedFocus);
    }
    constructor(A, B, Q, Z) {
      var G;
      ((this._sdkKey = A),
        (this._emitter = B),
        (this._network = Q),
        (this._options = Z),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._isLoggingDisabled = (Z === null || Z === void 0 ? void 0 : Z.disableLogging) === !0),
        (this._maxQueueSize =
          (G = Z === null || Z === void 0 ? void 0 : Z.loggingBufferMaxSize) !== null && G !== void 0 ? G : wKQ));
      let Y = Z === null || Z === void 0 ? void 0 : Z.networkConfig;
      this._logEventUrlConfig = new $KQ.UrlConfiguration(
        lu0.Endpoint._rgstr,
        Y === null || Y === void 0 ? void 0 : Y.logEventUrl,
        Y === null || Y === void 0 ? void 0 : Y.api,
        Y === null || Y === void 0 ? void 0 : Y.logEventFallbackUrls,
      );
    }
    setLoggingDisabled(A) {
      this._isLoggingDisabled = A;
    }
    enqueue(A) {
      if (!this._shouldLogEvent(A)) return;
      if ((this._normalizeAndAppendEvent(A), this._quickFlushIfNeeded(), this._queue.length > this._maxQueueSize))
        ch._safeFlushAndForget(this._sdkKey);
    }
    incrementNonExposureCount(A) {
      var B;
      let Q = (B = this._nonExposedChecks[A]) !== null && B !== void 0 ? B : 0;
      this._nonExposedChecks[A] = Q + 1;
    }
    reset() {
      this._lastExposureTimeMap = {};
    }
    start() {
      if (cp1._isServerEnv()) return;
      ((SQ1[this._sdkKey] = this),
        pu0._subscribeToVisiblityChanged((A) => {
          if (A === "background") ch._safeFlushAndForget(this._sdkKey);
          else if (A === "foreground") ch._safeRetryFailedLogs(this._sdkKey);
        }),
        this._retryFailedLogs(qK1.Startup),
        this._startBackgroundFlushInterval());
    }
    stop() {
      return Ii(this, void 0, void 0, function* () {
        if (this._flushIntervalId) (clearInterval(this._flushIntervalId), (this._flushIntervalId = null));
        (delete SQ1[this._sdkKey], yield this.flush());
      });
    }
    flush() {
      return Ii(this, void 0, void 0, function* () {
        if ((this._appendAndResetNonExposedChecks(), this._queue.length === 0)) return;
        let A = this._queue;
        ((this._queue = []), yield this._sendEvents(A));
      });
    }
    _quickFlushIfNeeded() {
      if (this._hasRunQuickFlush) return;
      if (((this._hasRunQuickFlush = !0), Date.now() - this._creationTime > iu0)) return;
      setTimeout(() => ch._safeFlushAndForget(this._sdkKey), iu0);
    }
    _shouldLogEvent(A) {
      if (cp1._isServerEnv()) return !1;
      if (!UKQ._isExposureEvent(A)) return !0;
      let B = A.user ? A.user : { statsigEnvironment: void 0 },
        Q = DKQ._getUserStorageKey(this._sdkKey, B),
        Z = A.metadata ? A.metadata : {},
        G = [
          A.eventName,
          Q,
          Z.gate,
          Z.config,
          Z.ruleID,
          Z.allocatedExperiment,
          Z.parameterName,
          String(Z.isExplicitParameter),
          Z.reason,
        ].join("|"),
        Y = this._lastExposureTimeMap[G],
        I = Date.now();
      if (Y && I - Y < MAX_TIMEOUT_MS) return !1;
      if (Object.keys(this._lastExposureTimeMap).length > EKQ) this._lastExposureTimeMap = {};
      return ((this._lastExposureTimeMap[G] = I), !0);
    }
    _sendEvents(A) {
      var B, Q;
      return Ii(this, void 0, void 0, function* () {
        if (this._isLoggingDisabled) return (this._saveFailedLogsToStorage(A), !1);
        try {
          let G =
            pu0._isUnloading() &&
            this._network.isBeaconSupported() &&
            ((Q = (B = this._options) === null || B === void 0 ? void 0 : B.networkConfig) === null || Q === void 0
              ? void 0
              : Q.networkOverrideFunc) == null;
          if (
            (this._emitter({ name: "pre_logs_flushed", events: A }),
            (G ? yield this._sendEventsViaBeacon(A) : yield this._sendEventsViaPost(A)).success)
          )
            return (this._emitter({ name: "logs_flushed", events: A }), !0);
          else return (jQ1.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(A), !1);
        } catch (Z) {
          return (jQ1.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(A) {
      var B;
      return Ii(this, void 0, void 0, function* () {
        let Q = yield this._network.post(this._getRequestData(A)),
          Z = (B = Q === null || Q === void 0 ? void 0 : Q.code) !== null && B !== void 0 ? B : -1;
        return { success: Z >= 200 && Z < 300 };
      });
    }
    _sendEventsViaBeacon(A) {
      return Ii(this, void 0, void 0, function* () {
        return { success: yield this._network.beacon(this._getRequestData(A)) };
      });
    }
    _getRequestData(A) {
      return {
        sdkKey: this._sdkKey,
        data: { events: A },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [lu0.NetworkParam.EventCount]: String(A.length) },
      };
    }
    _saveFailedLogsToStorage(A) {
      while (A.length > LKQ) A.shift();
      let B = this._getStorageKey();
      try {
        Wi._setObjectInStorage(B, A);
      } catch (Q) {
        jQ1.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(A) {
      let B = this._getStorageKey();
      (() =>
        Ii(this, void 0, void 0, function* () {
          if (!Wi.Storage.isReady()) yield Wi.Storage.isReadyResolver();
          let Q = Wi._getObjectFromStorage(B);
          if (!Q) return;
          if (A === qK1.Startup) Wi.Storage.removeItem(B);
          if ((yield this._sendEvents(Q)) && A === qK1.GainedFocus) Wi.Storage.removeItem(B);
        }))().catch(() => {
        jQ1.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${CKQ._DJB2(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(A) {
      if (A.user) ((A.user = Object.assign({}, A.user)), delete A.user.privateAttributes);
      let B = {},
        Q = this._getCurrentPageUrl();
      if (Q) B.statsigMetadata = { currentPage: Q };
      let Z = Object.assign(Object.assign({}, A), B);
      (jQ1.Log.debug("Enqueued Event:", Z), this._queue.push(Z));
    }
    _appendAndResetNonExposedChecks() {
      if (Object.keys(this._nonExposedChecks).length === 0) return;
      (this._normalizeAndAppendEvent({
        eventName: "statsig::non_exposed_checks",
        user: null,
        time: Date.now(),
        metadata: { checks: Object.assign({}, this._nonExposedChecks) },
      }),
        (this._nonExposedChecks = {}));
    }
    _getCurrentPageUrl() {
      var A;
      if (((A = this._options) === null || A === void 0 ? void 0 : A.includeCurrentPageUrlWithEvents) === !1) return;
      return cp1._getCurrentPageUrlSafe();
    }
    _startBackgroundFlushInterval() {
      var A, B;
      let Q =
          (B = (A = this._options) === null || A === void 0 ? void 0 : A.loggingIntervalMs) !== null && B !== void 0
            ? B
            : qKQ,
        Z = setInterval(() => {
          let G = SQ1[this._sdkKey];
          if (!G || G._flushIntervalId !== Z) clearInterval(Z);
          else ch._safeFlushAndForget(this._sdkKey);
        }, Q);
      this._flushIntervalId = Z;
    }
  }
  Ji.EventLogger = ch;
});
var yQ1 = U((nu0) => {
  Object.defineProperty(nu0, "__esModule", { value: !0 });
  nu0.StatsigMetadataProvider = nu0.SDK_VERSION = void 0;
  nu0.SDK_VERSION = "3.12.1";
  var pp1 = { sdkVersion: nu0.SDK_VERSION, sdkType: "js-mono" };
  nu0.StatsigMetadataProvider = {
    get: () => pp1,
    add: (A) => {
      pp1 = Object.assign(Object.assign({}, pp1), A);
    },
  };
});
var ou0 = U((ru0) => {
  Object.defineProperty(ru0, "__esModule", { value: !0 });
});
var EK1 = U((tu0) => {
  Object.defineProperty(tu0, "__esModule", { value: !0 });
  tu0.getUUID = void 0;
  function MKQ() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
    let A = new Date().getTime(),
      B = (typeof performance !== "undefined" && performance.now && performance.now() * 1000) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(/[xy]/g, (Z) => {
      let G = Math.random() * 16;
      if (A > 0) ((G = ((A + G) % 16) | 0), (A = Math.floor(A / 16)));
      else ((G = ((B + G) % 16) | 0), (B = Math.floor(B / 16)));
      return (Z === "x" ? G : (G & 7) | 8).toString(16);
    });
  }
  tu0.getUUID = MKQ;
});
var LK1 = U((Zm0) => {
  Object.defineProperty(Zm0, "__esModule", { value: !0 });
  Zm0.StableID = void 0;
  var OKQ = RQ1(),
    RKQ = GF(),
    Bm0 = ZT(),
    TKQ = EK1(),
    NK1 = {};
  Zm0.StableID = {
    get: (A) => {
      if (NK1[A] == null) {
        let B = PKQ(A);
        if (B == null) ((B = TKQ.getUUID()), Am0(B, A));
        NK1[A] = B;
      }
      return NK1[A];
    },
    setOverride: (A, B) => {
      ((NK1[B] = A), Am0(A, B));
    },
  };
  function Qm0(A) {
    return `statsig.stable_id.${OKQ._getStorageKey(A)}`;
  }
  function Am0(A, B) {
    let Q = Qm0(B);
    try {
      Bm0._setObjectInStorage(Q, A);
    } catch (Z) {
      RKQ.Log.warn("Failed to save StableID");
    }
  }
  function PKQ(A) {
    let B = Qm0(A);
    return Bm0._getObjectFromStorage(B);
  }
});
var ip1 = U((Ym0) => {
  Object.defineProperty(Ym0, "__esModule", { value: !0 });
  Ym0._getFullUserHash = Ym0._normalizeUser = void 0;
  var jKQ = Gi(),
    SKQ = GF();
  function yKQ(A, B, Q) {
    try {
      let Z = JSON.parse(JSON.stringify(A));
      if (B != null && B.environment != null) Z.statsigEnvironment = B.environment;
      else if (Q != null) Z.statsigEnvironment = { tier: Q };
      return Z;
    } catch (Z) {
      return (SKQ.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  Ym0._normalizeUser = yKQ;
  function kKQ(A) {
    return A ? jKQ._DJB2Object(A) : null;
  }
  Ym0._getFullUserHash = kKQ;
});
var np1 = U((Wm0) => {
  Object.defineProperty(Wm0, "__esModule", { value: !0 });
  Wm0._typedJsonParse = void 0;
  var xKQ = GF();
  function vKQ(A, B, Q) {
    try {
      let Z = JSON.parse(A);
      if (Z && typeof Z === "object" && B in Z) return Z;
    } catch (Z) {}
    return (xKQ.Log.error(`Failed to parse ${Q}`), null);
  }
  Wm0._typedJsonParse = vKQ;
});
var zm0 = U((ty) => {
  var ap1 =
    (ty && ty.__awaiter) ||
    function (A, B, Q, Z) {
      function G(Y) {
        return Y instanceof Q
          ? Y
          : new Q(function (I) {
              I(Y);
            });
      }
      return new (Q || (Q = Promise))(function (Y, I) {
        function W(F) {
          try {
            X(Z.next(F));
          } catch (V) {
            I(V);
          }
        }
        function J(F) {
          try {
            X(Z.throw(F));
          } catch (V) {
            I(V);
          }
        }
        function X(F) {
          F.done ? Y(F.value) : G(F.value).then(W, J);
        }
        X((Z = Z.apply(A, B || [])).next());
      });
    };
  Object.defineProperty(ty, "__esModule", { value: !0 });
  ty._makeDataAdapterResult = ty.DataAdapterCore = void 0;
  var MK1 = GF(),
    bKQ = LK1(),
    OK1 = ip1(),
    oy = ZT(),
    Xm0 = np1(),
    Fm0 = 10;
  class Vm0 {
    constructor(A, B) {
      ((this._adapterName = A),
        (this._cacheSuffix = B),
        (this._options = null),
        (this._sdkKey = null),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${B}`),
        (this._inMemoryCache = new Km0()));
    }
    attach(A, B) {
      ((this._sdkKey = A), (this._options = B));
    }
    getDataSync(A) {
      let B = A && OK1._normalizeUser(A, this._options),
        Q = this._getCacheKey(B),
        Z = this._inMemoryCache.get(Q, B);
      if (Z) return Z;
      let G = this._loadFromCache(Q);
      if (G) return (this._inMemoryCache.add(Q, G), this._inMemoryCache.get(Q, B));
      return null;
    }
    setData(A, B) {
      let Q = B && OK1._normalizeUser(B, this._options),
        Z = this._getCacheKey(Q);
      this._inMemoryCache.add(Z, RK1("Bootstrap", A, null, Q));
    }
    _getDataAsyncImpl(A, B, Q) {
      return ap1(this, void 0, void 0, function* () {
        if (!oy.Storage.isReady()) yield oy.Storage.isReadyResolver();
        let Z = A !== null && A !== void 0 ? A : this.getDataSync(B),
          G = [this._fetchAndPrepFromNetwork(Z, B, Q)];
        if (Q === null || Q === void 0 ? void 0 : Q.timeoutMs)
          G.push(
            new Promise((Y) => setTimeout(Y, Q.timeoutMs)).then(() => {
              return (MK1.Log.debug("Fetching latest value timed out"), null);
            }),
          );
        return yield Promise.race(G);
      });
    }
    _prefetchDataImpl(A, B) {
      return ap1(this, void 0, void 0, function* () {
        let Q = A && OK1._normalizeUser(A, this._options),
          Z = this._getCacheKey(Q),
          G = yield this._getDataAsyncImpl(null, Q, B);
        if (G) this._inMemoryCache.add(Z, Object.assign(Object.assign({}, G), { source: "Prefetch" }));
      });
    }
    _fetchAndPrepFromNetwork(A, B, Q) {
      var Z;
      return ap1(this, void 0, void 0, function* () {
        let G = (Z = A === null || A === void 0 ? void 0 : A.data) !== null && Z !== void 0 ? Z : null,
          Y = A != null && this._isCachedResultValidFor204(A, B),
          I = yield this._fetchFromNetwork(G, B, Q, Y);
        if (!I) return (MK1.Log.debug("No response returned for latest value"), null);
        let W = Xm0._typedJsonParse(I, "has_updates", "Response"),
          J = this._getSdkKey(),
          X = bKQ.StableID.get(J),
          F = null;
        if ((W === null || W === void 0 ? void 0 : W.has_updates) === !0) F = RK1("Network", I, X, B);
        else if (G && (W === null || W === void 0 ? void 0 : W.has_updates) === !1)
          F = RK1("NetworkNotModified", G, X, B);
        else return null;
        let V = this._getCacheKey(B);
        return (this._inMemoryCache.add(V, F), this._writeToCache(V, F), F);
      });
    }
    _getSdkKey() {
      if (this._sdkKey != null) return this._sdkKey;
      return (MK1.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(A) {
      var B;
      let Q = (B = oy.Storage.getItem) === null || B === void 0 ? void 0 : B.call(oy.Storage, A);
      if (Q == null) return null;
      let Z = Xm0._typedJsonParse(Q, "source", "Cached Result");
      return Z ? Object.assign(Object.assign({}, Z), { source: "Cache" }) : null;
    }
    _writeToCache(A, B) {
      (oy.Storage.setItem(A, JSON.stringify(B)), this._runLocalStorageCacheEviction(A));
    }
    _runLocalStorageCacheEviction(A) {
      var B;
      let Q = (B = oy._getObjectFromStorage(this._lastModifiedStoreKey)) !== null && B !== void 0 ? B : {};
      Q[A] = Date.now();
      let Z = Hm0(Q, Fm0);
      if (Z) (delete Q[Z], oy.Storage.removeItem(Z));
      oy._setObjectInStorage(this._lastModifiedStoreKey, Q);
    }
  }
  ty.DataAdapterCore = Vm0;
  function RK1(A, B, Q, Z) {
    return { source: A, data: B, receivedAt: Date.now(), stableID: Q, fullUserHash: OK1._getFullUserHash(Z) };
  }
  ty._makeDataAdapterResult = RK1;
  class Km0 {
    constructor() {
      this._data = {};
    }
    get(A, B) {
      var Q;
      let Z = this._data[A],
        G = Z === null || Z === void 0 ? void 0 : Z.stableID,
        Y = (Q = B === null || B === void 0 ? void 0 : B.customIDs) === null || Q === void 0 ? void 0 : Q.stableID;
      if (Y && G && Y !== G) return (MK1.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null);
      return Z;
    }
    add(A, B) {
      let Q = Hm0(this._data, Fm0 - 1);
      if (Q) delete this._data[Q];
      this._data[A] = B;
    }
    merge(A) {
      this._data = Object.assign(Object.assign({}, this._data), A);
    }
  }
  function Hm0(A, B) {
    let Q = Object.keys(A);
    if (Q.length <= B) return null;
    return Q.reduce((Z, G) => {
      let Y = A[Z],
        I = A[G];
      if (typeof Y === "object" && typeof I === "object") return I.receivedAt < Y.receivedAt ? G : Z;
      return I < Y ? G : Z;
    });
  }
});
var Cm0 = U((Dm0) => {
  Object.defineProperty(Dm0, "__esModule", { value: !0 });
});
var TK1 = U(($m0) => {
  Object.defineProperty($m0, "__esModule", { value: !0 });
  $m0.SDKType = void 0;
  var Um0 = {},
    Xi;
  $m0.SDKType = {
    _get: (A) => {
      var B;
      return ((B = Um0[A]) !== null && B !== void 0 ? B : "js-mono") + (Xi !== null && Xi !== void 0 ? Xi : "");
    },
    _setClientType(A, B) {
      Um0[A] = B;
    },
    _setBindingType(A) {
      if (!Xi || Xi === "-react") Xi = "-" + A;
    },
  };
});
var sp1 = U((GT) => {
  var fKQ =
    (GT && GT.__awaiter) ||
    function (A, B, Q, Z) {
      function G(Y) {
        return Y instanceof Q
          ? Y
          : new Q(function (I) {
              I(Y);
            });
      }
      return new (Q || (Q = Promise))(function (Y, I) {
        function W(F) {
          try {
            X(Z.next(F));
          } catch (V) {
            I(V);
          }
        }
        function J(F) {
          try {
            X(Z.throw(F));
          } catch (V) {
            I(V);
          }
        }
        function X(F) {
          F.done ? Y(F.value) : G(F.value).then(W, J);
        }
        X((Z = Z.apply(A, B || [])).next());
      });
    };
  Object.defineProperty(GT, "__esModule", { value: !0 });
  GT.ErrorBoundary = GT.EXCEPTION_ENDPOINT = void 0;
  var hKQ = GF(),
    gKQ = TK1(),
    uKQ = yQ1();
  GT.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
  var Em0 = "[Statsig] UnknownError";
  class Nm0 {
    constructor(A, B, Q, Z) {
      ((this._sdkKey = A),
        (this._options = B),
        (this._emitter = Q),
        (this._lastSeenError = Z),
        (this._seen = new Set()));
    }
    wrap(A) {
      try {
        let B = A;
        dKQ(B).forEach((Q) => {
          let Z = B[Q];
          if ("$EB" in Z) return;
          ((B[Q] = (...G) => {
            return this._capture(Q, () => Z.apply(A, G));
          }),
            (B[Q].$EB = !0));
        });
      } catch (B) {
        this._onError("eb:wrap", B);
      }
    }
    logError(A, B) {
      this._onError(A, B);
    }
    getLastSeenErrorAndReset() {
      let A = this._lastSeenError;
      return ((this._lastSeenError = void 0), A !== null && A !== void 0 ? A : null);
    }
    attachErrorIfNoneExists(A) {
      if (this._lastSeenError) return;
      this._lastSeenError = qm0(A);
    }
    _capture(A, B) {
      try {
        let Q = B();
        if (Q && Q instanceof Promise) return Q.catch((Z) => this._onError(A, Z));
        return Q;
      } catch (Q) {
        return (this._onError(A, Q), null);
      }
    }
    _onError(A, B) {
      try {
        (hKQ.Log.warn(`Caught error in ${A}`, { error: B }),
          (() =>
            fKQ(this, void 0, void 0, function* () {
              var Z, G, Y, I, W, J, X;
              let F = B ? B : Error(Em0),
                V = F instanceof Error,
                K = V ? F.name : "No Name",
                H = qm0(F);
              if (((this._lastSeenError = H), this._seen.has(K))) return;
              if (
                (this._seen.add(K),
                (G = (Z = this._options) === null || Z === void 0 ? void 0 : Z.networkConfig) === null || G === void 0
                  ? void 0
                  : G.preventAllNetworkTraffic)
              ) {
                (Y = this._emitter) === null || Y === void 0 || Y.call(this, { name: "error", error: B, tag: A });
                return;
              }
              let z = gKQ.SDKType._get(this._sdkKey),
                D = uKQ.StatsigMetadataProvider.get(),
                C = V ? F.stack : mKQ(F),
                w = JSON.stringify(
                  Object.assign({ tag: A, exception: K, info: C }, Object.assign(Object.assign({}, D), { sdkType: z })),
                );
              (yield (
                (J =
                  (W = (I = this._options) === null || I === void 0 ? void 0 : I.networkConfig) === null || W === void 0
                    ? void 0
                    : W.networkOverrideFunc) !== null && J !== void 0
                  ? J
                  : fetch
              )(GT.EXCEPTION_ENDPOINT, {
                method: "POST",
                headers: {
                  "STATSIG-API-KEY": this._sdkKey,
                  "STATSIG-SDK-TYPE": String(z),
                  "STATSIG-SDK-VERSION": String(D.sdkVersion),
                  "Content-Type": "application/json",
                },
                body: w,
              }),
                (X = this._emitter) === null || X === void 0 || X.call(this, { name: "error", error: B, tag: A }));
            }))()
            .then(() => {})
            .catch(() => {}));
      } catch (Q) {}
    }
  }
  GT.ErrorBoundary = Nm0;
  function qm0(A) {
    if (A instanceof Error) return A;
    else if (typeof A === "string") return new Error(A);
    else return new Error("An unknown error occurred.");
  }
  function mKQ(A) {
    try {
      return JSON.stringify(A);
    } catch (B) {
      return Em0;
    }
  }
  function dKQ(A) {
    let B = new Set(),
      Q = Object.getPrototypeOf(A);
    while (Q && Q !== Object.prototype)
      (Object.getOwnPropertyNames(Q)
        .filter((Z) => typeof (Q === null || Q === void 0 ? void 0 : Q[Z]) === "function")
        .forEach((Z) => B.add(Z)),
        (Q = Object.getPrototypeOf(Q)));
    return Array.from(B);
  }
});
var Mm0 = U((Lm0) => {
  Object.defineProperty(Lm0, "__esModule", { value: !0 });
});
var Rm0 = U((Om0) => {
  Object.defineProperty(Om0, "__esModule", { value: !0 });
});
var Pm0 = U((Tm0) => {
  Object.defineProperty(Tm0, "__esModule", { value: !0 });
});
var rp1 = U((jm0) => {
  Object.defineProperty(jm0, "__esModule", { value: !0 });
  jm0.createMemoKey = jm0.MemoPrefix = void 0;
  jm0.MemoPrefix = { _gate: "g", _dynamicConfig: "c", _experiment: "e", _layer: "l", _paramStore: "p" };
  var cKQ = new Set([]),
    lKQ = new Set(["userPersistedValues"]);
  function pKQ(A, B, Q) {
    let Z = `${A}|${B}`;
    if (!Q) return Z;
    for (let G of Object.keys(Q)) {
      if (lKQ.has(G)) return;
      if (cKQ.has(G)) Z += `|${G}=true`;
      else Z += `|${G}=${Q[G]}`;
    }
    return Z;
  }
  jm0.createMemoKey = pKQ;
});
var ym0 = U((Fi) => {
  var nKQ =
    (Fi && Fi.__awaiter) ||
    function (A, B, Q, Z) {
      function G(Y) {
        return Y instanceof Q
          ? Y
          : new Q(function (I) {
              I(Y);
            });
      }
      return new (Q || (Q = Promise))(function (Y, I) {
        function W(F) {
          try {
            X(Z.next(F));
          } catch (V) {
            I(V);
          }
        }
        function J(F) {
          try {
            X(Z.throw(F));
          } catch (V) {
            I(V);
          }
        }
        function X(F) {
          F.done ? Y(F.value) : G(F.value).then(W, J);
        }
        X((Z = Z.apply(A, B || [])).next());
      });
    };
  Object.defineProperty(Fi, "__esModule", { value: !0 });
  Fi._fetchTxtRecords = void 0;
  var aKQ = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101, 116, 115, 3, 111,
      114, 103, 0, 0, 16, 0, 1,
    ]),
    sKQ = "https://cloudflare-dns.com/dns-query",
    rKQ = ["i", "e", "d"],
    oKQ = 200;
  function tKQ(A) {
    return nKQ(this, void 0, void 0, function* () {
      let B = yield A(sKQ, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: aKQ,
      });
      if (!B.ok) {
        let G = new Error("Failed to fetch TXT records from DNS");
        throw ((G.name = "DnsTxtFetchError"), G);
      }
      let Q = yield B.arrayBuffer(),
        Z = new Uint8Array(Q);
      return eKQ(Z);
    });
  }
  Fi._fetchTxtRecords = tKQ;
  function eKQ(A) {
    let B = A.findIndex(
      (Z, G) => G < oKQ && String.fromCharCode(Z) === "=" && rKQ.includes(String.fromCharCode(A[G - 1])),
    );
    if (B === -1) {
      let Z = new Error("Failed to parse TXT records from DNS");
      throw ((Z.name = "DnsTxtParseError"), Z);
    }
    let Q = "";
    for (let Z = B - 1; Z < A.length; Z++) Q += String.fromCharCode(A[Z]);
    return Q.split(",");
  }
});
var hm0 = U((ey) => {
  var km0 =
    (ey && ey.__awaiter) ||
    function (A, B, Q, Z) {
      function G(Y) {
        return Y instanceof Q
          ? Y
          : new Q(function (I) {
              I(Y);
            });
      }
      return new (Q || (Q = Promise))(function (Y, I) {
        function W(F) {
          try {
            X(Z.next(F));
          } catch (V) {
            I(V);
          }
        }
        function J(F) {
          try {
            X(Z.throw(F));
          } catch (V) {
            I(V);
          }
        }
        function X(F) {
          F.done ? Y(F.value) : G(F.value).then(W, J);
        }
        X((Z = Z.apply(A, B || [])).next());
      });
    };
  Object.defineProperty(ey, "__esModule", { value: !0 });
  ey._isDomainFailure = ey.NetworkFallbackResolver = void 0;
  var AHQ = ym0(),
    BHQ = Gi(),
    QHQ = GF(),
    tp1 = ZT(),
    _m0 = 604800000,
    ZHQ = 14400000;
  class vm0 {
    constructor(A) {
      var B;
      ((this._fallbackInfo = null),
        (this._errorBoundary = null),
        (this._dnsQueryCooldowns = {}),
        (this._networkOverrideFunc = (B = A.networkConfig) === null || B === void 0 ? void 0 : B.networkOverrideFunc));
    }
    setErrorBoundary(A) {
      this._errorBoundary = A;
    }
    tryBumpExpiryTime(A, B) {
      var Q;
      let Z = (Q = this._fallbackInfo) === null || Q === void 0 ? void 0 : Q[B.endpoint];
      if (!Z) return;
      ((Z.expiryTime = Date.now() + _m0),
        op1(A, Object.assign(Object.assign({}, this._fallbackInfo), { [B.endpoint]: Z })));
    }
    getActiveFallbackUrl(A, B) {
      var Q, Z;
      let G = this._fallbackInfo;
      if (G == null) ((G = (Q = GHQ(A)) !== null && Q !== void 0 ? Q : {}), (this._fallbackInfo = G));
      let Y = G[B.endpoint];
      if (!Y || Date.now() > ((Z = Y.expiryTime) !== null && Z !== void 0 ? Z : 0))
        return (delete G[B.endpoint], (this._fallbackInfo = G), op1(A, this._fallbackInfo), null);
      if (Y.url) return Y.url;
      return null;
    }
    getFallbackFromProvided(A) {
      let B = xm0(A);
      if (B) return A.replace(B, "");
      return null;
    }
    tryFetchUpdatedFallbackInfo(A, B, Q, Z) {
      var G, Y;
      return km0(this, void 0, void 0, function* () {
        try {
          if (!bm0(Q, Z)) return !1;
          let W =
              B.customUrl == null && B.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(B)
                : B.fallbackUrls,
            J = this._pickNewFallbackUrl((G = this._fallbackInfo) === null || G === void 0 ? void 0 : G[B.endpoint], W);
          if (!J) return !1;
          return (this._updateFallbackInfoWithNewUrl(A, B.endpoint, J), !0);
        } catch (I) {
          return (
            (Y = this._errorBoundary) === null || Y === void 0 || Y.logError("tryFetchUpdatedFallbackInfo", I),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(A, B, Q) {
      var Z, G, Y;
      let I = { url: Q, expiryTime: Date.now() + _m0, previous: [] },
        W = (Z = this._fallbackInfo) === null || Z === void 0 ? void 0 : Z[B];
      if (W) I.previous.push(...W.previous);
      if (I.previous.length > 10) I.previous = [];
      let J =
        (Y = (G = this._fallbackInfo) === null || G === void 0 ? void 0 : G[B]) === null || Y === void 0
          ? void 0
          : Y.url;
      if (J != null) I.previous.push(J);
      ((this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [B]: I })),
        op1(A, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(A) {
      var B;
      return km0(this, void 0, void 0, function* () {
        let Q = this._dnsQueryCooldowns[A.endpoint];
        if (Q && Date.now() < Q) return null;
        this._dnsQueryCooldowns[A.endpoint] = Date.now() + ZHQ;
        let Z = [],
          G = yield AHQ._fetchTxtRecords((B = this._networkOverrideFunc) !== null && B !== void 0 ? B : fetch),
          Y = xm0(A.defaultUrl);
        for (let I of G) {
          if (!I.startsWith(A.endpointDnsKey + "=")) continue;
          let W = I.split("=");
          if (W.length > 1) {
            let J = W[1];
            if (J.endsWith("/")) J = J.slice(0, -1);
            Z.push(`https://${J}${Y}`);
          }
        }
        return Z;
      });
    }
    _pickNewFallbackUrl(A, B) {
      var Q;
      if (B == null) return null;
      let Z = new Set((Q = A === null || A === void 0 ? void 0 : A.previous) !== null && Q !== void 0 ? Q : []),
        G = A === null || A === void 0 ? void 0 : A.url,
        Y = null;
      for (let I of B) {
        let W = I.endsWith("/") ? I.slice(0, -1) : I;
        if (!Z.has(I) && W !== G) {
          Y = W;
          break;
        }
      }
      return Y;
    }
  }
  ey.NetworkFallbackResolver = vm0;
  function bm0(A, B) {
    var Q;
    let Z = (Q = A === null || A === void 0 ? void 0 : A.toLowerCase()) !== null && Q !== void 0 ? Q : "";
    return (
      B ||
      Z.includes("uncaught exception") ||
      Z.includes("failed to fetch") ||
      Z.includes("networkerror when attempting to fetch resource")
    );
  }
  ey._isDomainFailure = bm0;
  function fm0(A) {
    return `statsig.network_fallback.${BHQ._DJB2(A)}`;
  }
  function op1(A, B) {
    let Q = fm0(A);
    if (!B || Object.keys(B).length === 0) {
      tp1.Storage.removeItem(Q);
      return;
    }
    tp1.Storage.setItem(Q, JSON.stringify(B));
  }
  function GHQ(A) {
    let B = fm0(A),
      Q = tp1.Storage.getItem(B);
    if (!Q) return null;
    try {
      return JSON.parse(Q);
    } catch (Z) {
      return (QHQ.Log.error("Failed to parse FallbackInfo"), null);
    }
  }
  function xm0(A) {
    try {
      return new URL(A).pathname;
    } catch (B) {
      return null;
    }
  }
});
var ep1 = U((um0) => {
  Object.defineProperty(um0, "__esModule", { value: !0 });
  um0.SDKFlags = void 0;
  var gm0 = {};
  um0.SDKFlags = {
    setFlags: (A, B) => {
      gm0[A] = B;
    },
    get: (A, B) => {
      var Q, Z;
      return (Z = (Q = gm0[A]) === null || Q === void 0 ? void 0 : Q[B]) !== null && Z !== void 0 ? Z : !1;
    },
  };
});
var jK1 = U((am0) => {
  Object.defineProperty(am0, "__esModule", { value: !0 });
  am0.StatsigSession = am0.SessionID = void 0;
  var YHQ = RQ1(),
    IHQ = GF(),
    cm0 = ZT(),
    lm0 = EK1(),
    pm0 = 1800000,
    im0 = 14400000,
    PK1 = {};
  am0.SessionID = {
    get: (A) => {
      return am0.StatsigSession.get(A).data.sessionID;
    },
  };
  am0.StatsigSession = {
    get: (A) => {
      if (PK1[A] == null) PK1[A] = WHQ(A);
      let B = PK1[A];
      return XHQ(B);
    },
    overrideInitialSessionID: (A, B) => {
      PK1[B] = JHQ(A, B);
    },
  };
  function WHQ(A) {
    let B = HHQ(A),
      Q = Date.now();
    if (!B) B = { sessionID: lm0.getUUID(), startTime: Q, lastUpdate: Q };
    return { data: B, sdkKey: A };
  }
  function JHQ(A, B) {
    let Q = Date.now();
    return { data: { sessionID: A, startTime: Q, lastUpdate: Q }, sdkKey: B };
  }
  function XHQ(A) {
    let B = Date.now(),
      Q = A.data;
    if (FHQ(Q) || VHQ(Q)) ((Q.sessionID = lm0.getUUID()), (Q.startTime = B));
    ((Q.lastUpdate = B), KHQ(Q, A.sdkKey), clearTimeout(A.idleTimeoutID), clearTimeout(A.ageTimeoutID));
    let Z = B - Q.startTime,
      G = A.sdkKey;
    return ((A.idleTimeoutID = dm0(G, pm0)), (A.ageTimeoutID = dm0(G, im0 - Z)), A);
  }
  function dm0(A, B) {
    return setTimeout(() => {
      let Q = __STATSIG__ === null || __STATSIG__ === void 0 ? void 0 : __STATSIG__.instance(A);
      if (Q) Q.$emt({ name: "session_expired" });
    }, B);
  }
  function FHQ({ lastUpdate: A }) {
    return Date.now() - A > pm0;
  }
  function VHQ({ startTime: A }) {
    return Date.now() - A > im0;
  }
  function nm0(A) {
    return `statsig.session_id.${YHQ._getStorageKey(A)}`;
  }
  function KHQ(A, B) {
    let Q = nm0(B);
    try {
      cm0._setObjectInStorage(Q, A);
    } catch (Z) {
      IHQ.Log.warn("Failed to save SessionID");
    }
  }
  function HHQ(A) {
    let B = nm0(A);
    return cm0._getObjectFromStorage(B);
  }
});
var Bi1 = U((sm0) => {
  Object.defineProperty(sm0, "__esModule", { value: !0 });
  sm0.ErrorTag = void 0;
  sm0.ErrorTag = { NetworkError: "NetworkError" };
});
var Yd0 = U((Ki) => {
  var Vi =
    (Ki && Ki.__awaiter) ||
    function (A, B, Q, Z) {
      function G(Y) {
        return Y instanceof Q
          ? Y
          : new Q(function (I) {
              I(Y);
            });
      }
      return new (Q || (Q = Promise))(function (Y, I) {
        function W(F) {
          try {
            X(Z.next(F));
          } catch (V) {
            I(V);
          }
        }
        function J(F) {
          try {
            X(Z.throw(F));
          } catch (V) {
            I(V);
          }
        }
        function X(F) {
          F.done ? Y(F.value) : G(F.value).then(W, J);
        }
        X((Z = Z.apply(A, B || [])).next());
      });
    };
  Object.defineProperty(Ki, "__esModule", { value: !0 });
  Ki.NetworkCore = void 0;
  mh();
  var om0 = mh(),
    Qi1 = JK1(),
    lh = GF(),
    bw = TQ1(),
    DHQ = hm0(),
    CHQ = ep1(),
    Ad0 = TK1(),
    UHQ = dh(),
    Bd0 = jK1(),
    $HQ = LK1(),
    wHQ = Bi1(),
    Qd0 = yQ1(),
    qHQ = wK1(),
    EHQ = 1e4,
    NHQ = 500,
    MAX_OUTPUT_LENGTH = 30000,
    MHQ = 1000,
    Zd0 = 50,
    OHQ = Zd0 / MHQ,
    RHQ = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  class Gd0 {
    constructor(A, B) {
      if (
        ((this._emitter = B),
        (this._errorBoundary = null),
        (this._timeout = EHQ),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        A)
      )
        this._options = A;
      if (this._options.networkConfig) this._netConfig = this._options.networkConfig;
      if (this._netConfig.networkTimeoutMs) this._timeout = this._netConfig.networkTimeoutMs;
      this._fallbackResolver = new DHQ.NetworkFallbackResolver(this._options);
    }
    setErrorBoundary(A) {
      ((this._errorBoundary = A),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(A));
    }
    isBeaconSupported() {
      return typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function";
    }
    getLastUsedInitUrlAndReset() {
      let A = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), A);
    }
    beacon(A) {
      return Vi(this, void 0, void 0, function* () {
        if (!tm0(A)) return !1;
        let B = this._getInternalRequestArgs("POST", A);
        yield this._tryToCompressBody(B);
        let Q = yield this._getPopulatedURL(B),
          Z = navigator;
        return Z.sendBeacon.bind(Z)(Q, B.body);
      });
    }
    post(A) {
      return Vi(this, void 0, void 0, function* () {
        let B = this._getInternalRequestArgs("POST", A);
        return (this._tryEncodeBody(B), yield this._tryToCompressBody(B), this._sendRequest(B));
      });
    }
    get(A) {
      let B = this._getInternalRequestArgs("GET", A);
      return this._sendRequest(B);
    }
    _sendRequest(A) {
      var B, Q, Z, G;
      return Vi(this, void 0, void 0, function* () {
        if (!tm0(A)) return null;
        if (this._netConfig.preventAllNetworkTraffic) return null;
        let { method: Y, body: I, retries: W, attempt: J } = A,
          X = A.urlConfig.endpoint;
        if (this._isRateLimited(X))
          return (lh.Log.warn(`Request to ${X} was blocked because you are making requests too frequently.`), null);
        let F = J !== null && J !== void 0 ? J : 1,
          V = typeof AbortController !== "undefined" ? new AbortController() : null,
          K = setTimeout(() => {
            V === null || V === void 0 || V.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          H = yield this._getPopulatedURL(A),
          z = null,
          D = qHQ._isUnloading();
        try {
          let C = {
            method: Y,
            body: I,
            headers: Object.assign({}, A.headers),
            signal: V === null || V === void 0 ? void 0 : V.signal,
            priority: A.priority,
            keepalive: D,
          };
          SHQ(A, F);
          let w = this._leakyBucket[X];
          if (w) ((w.lastRequestTime = Date.now()), (this._leakyBucket[X] = w));
          if (
            ((z = yield ((B = this._netConfig.networkOverrideFunc) !== null && B !== void 0 ? B : fetch)(H, C)),
            clearTimeout(K),
            !z.ok)
          ) {
            let O = yield z.text().catch(() => "No Text"),
              R = new Error(`NetworkError: ${H} ${O}`);
            throw ((R.name = "NetworkError"), R);
          }
          let L = yield z.text();
          return (
            em0(A, z, F, L),
            this._fallbackResolver.tryBumpExpiryTime(A.sdkKey, A.urlConfig),
            { body: L, code: z.status }
          );
        } catch (C) {
          let w = PHQ(V, C),
            E = jHQ(V);
          if (
            (em0(A, z, F, "", C), yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(A.sdkKey, A.urlConfig, w, E))
          )
            A.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(A.sdkKey, A.urlConfig);
          if (
            !W ||
            F > W ||
            !RHQ.has((Q = z === null || z === void 0 ? void 0 : z.status) !== null && Q !== void 0 ? Q : 500)
          ) {
            (Z = this._emitter) === null ||
              Z === void 0 ||
              Z.call(this, { name: "error", error: C, tag: wHQ.ErrorTag.NetworkError, requestArgs: A });
            let O = `A networking error occurred during ${Y} request to ${H}.`;
            return (
              lh.Log.error(O, w, C),
              (G = this._errorBoundary) === null || G === void 0 || G.attachErrorIfNoneExists(O),
              null
            );
          }
          return (yield yHQ(F), this._sendRequest(Object.assign(Object.assign({}, A), { retries: W, attempt: F + 1 })));
        }
      });
    }
    _isRateLimited(A) {
      var B;
      let Q = Date.now(),
        Z = (B = this._leakyBucket[A]) !== null && B !== void 0 ? B : { count: 0, lastRequestTime: Q },
        G = Q - Z.lastRequestTime,
        Y = Math.floor(G * OHQ);
      if (((Z.count = Math.max(0, Z.count - Y)), Z.count >= Zd0)) return !0;
      return ((Z.count += 1), (Z.lastRequestTime = Q), (this._leakyBucket[A] = Z), !1);
    }
    _getPopulatedURL(A) {
      var B;
      return Vi(this, void 0, void 0, function* () {
        let Q = (B = A.fallbackUrl) !== null && B !== void 0 ? B : A.urlConfig.getUrl();
        if (
          A.urlConfig.endpoint === bw.Endpoint._initialize ||
          A.urlConfig.endpoint === bw.Endpoint._download_config_specs
        )
          this._lastUsedInitUrl = Q;
        let Z = Object.assign(
            {
              [bw.NetworkParam.SdkKey]: A.sdkKey,
              [bw.NetworkParam.SdkType]: Ad0.SDKType._get(A.sdkKey),
              [bw.NetworkParam.SdkVersion]: Qd0.SDK_VERSION,
              [bw.NetworkParam.Time]: String(Date.now()),
              [bw.NetworkParam.SessionID]: Bd0.SessionID.get(A.sdkKey),
            },
            A.params,
          ),
          G = Object.keys(Z)
            .map((Y) => {
              return `${encodeURIComponent(Y)}=${encodeURIComponent(Z[Y])}`;
            })
            .join("&");
        return `${Q}${G ? `?${G}` : ""}`;
      });
    }
    _tryEncodeBody(A) {
      var B;
      let Q = UHQ._getWindowSafe(),
        Z = A.body;
      if (
        !A.isStatsigEncodable ||
        this._options.disableStatsigEncoding ||
        typeof Z !== "string" ||
        om0._getStatsigGlobalFlag("no-encode") != null ||
        !(Q === null || Q === void 0 ? void 0 : Q.btoa)
      )
        return;
      try {
        ((A.body = Q.btoa(Z).split("").reverse().join("")),
          (A.params = Object.assign(Object.assign({}, (B = A.params) !== null && B !== void 0 ? B : {}), {
            [bw.NetworkParam.StatsigEncoded]: "1",
          })));
      } catch (G) {
        lh.Log.warn(`Request encoding failed for ${A.urlConfig.getUrl()}`, G);
      }
    }
    _tryToCompressBody(A) {
      var B;
      return Vi(this, void 0, void 0, function* () {
        let Q = A.body;
        if (
          !A.isCompressable ||
          this._options.disableCompression ||
          typeof Q !== "string" ||
          CHQ.SDKFlags.get(A.sdkKey, "enable_log_event_compression") !== !0 ||
          om0._getStatsigGlobalFlag("no-compress") != null ||
          typeof CompressionStream === "undefined" ||
          typeof TextEncoder === "undefined"
        )
          return;
        try {
          let Z = new TextEncoder().encode(Q),
            G = new CompressionStream("gzip"),
            Y = G.writable.getWriter();
          (Y.write(Z).catch(lh.Log.error), Y.close().catch(lh.Log.error));
          let I = G.readable.getReader(),
            W = [],
            J;
          while (!(J = yield I.read()).done) W.push(J.value);
          let X = W.reduce((K, H) => K + H.length, 0),
            F = new Uint8Array(X),
            V = 0;
          for (let K of W) (F.set(K, V), (V += K.length));
          ((A.body = F),
            (A.params = Object.assign(Object.assign({}, (B = A.params) !== null && B !== void 0 ? B : {}), {
              [bw.NetworkParam.IsGzipped]: "1",
            })));
        } catch (Z) {
          lh.Log.warn(`Request compression failed for ${A.urlConfig.getUrl()}`, Z);
        }
      });
    }
    _getInternalRequestArgs(A, B) {
      let Q = this._fallbackResolver.getActiveFallbackUrl(B.sdkKey, B.urlConfig),
        Z = Object.assign(Object.assign({}, B), { method: A, fallbackUrl: Q });
      if ("data" in B) THQ(Z, B.data);
      return Z;
    }
  }
  Ki.NetworkCore = Gd0;
  var tm0 = (A) => {
      if (!A.sdkKey) return (lh.Log.warn("Unable to make request without an SDK key"), !1);
      return !0;
    },
    THQ = (A, B) => {
      let { sdkKey: Q, fallbackUrl: Z } = A,
        G = $HQ.StableID.get(Q),
        Y = Bd0.SessionID.get(Q),
        I = Ad0.SDKType._get(Q);
      A.body = JSON.stringify(
        Object.assign(Object.assign({}, B), {
          statsigMetadata: Object.assign(Object.assign({}, Qd0.StatsigMetadataProvider.get()), {
            stableID: G,
            sessionID: Y,
            sdkType: I,
            fallbackUrl: Z,
          }),
        }),
      );
    };
  function PHQ(A, B) {
    if ((A === null || A === void 0 ? void 0 : A.signal.aborted) && typeof A.signal.reason === "string")
      return A.signal.reason;
    if (typeof B === "string") return B;
    if (B instanceof Error) return `${B.name}: ${B.message}`;
    return "Unknown Error";
  }
  function jHQ(A) {
    return (
      ((A === null || A === void 0 ? void 0 : A.signal.aborted) &&
        typeof A.signal.reason === "string" &&
        A.signal.reason.includes("Timeout")) ||
      !1
    );
  }
  function SHQ(A, B) {
    if (A.urlConfig.endpoint !== bw.Endpoint._initialize) return;
    Qi1.Diagnostics._markInitNetworkReqStart(A.sdkKey, { attempt: B });
  }
  function em0(A, B, Q, Z, G) {
    if (A.urlConfig.endpoint !== bw.Endpoint._initialize) return;
    Qi1.Diagnostics._markInitNetworkReqEnd(A.sdkKey, Qi1.Diagnostics._getDiagnosticsData(B, Q, Z, G));
  }
  function yHQ(A) {
    return Vi(this, void 0, void 0, function* () {
      yield new Promise((B) => setTimeout(B, Math.min(NHQ * (A * A), MAX_OUTPUT_LENGTH)));
    });
  }
});
var Wd0 = U((Id0) => {
  Object.defineProperty(Id0, "__esModule", { value: !0 });
});
var Xd0 = U((Jd0) => {
  Object.defineProperty(Jd0, "__esModule", { value: !0 });
});
var Vd0 = U((Hi) => {
  var kHQ =
    (Hi && Hi.__awaiter) ||
    function (A, B, Q, Z) {
      function G(Y) {
        return Y instanceof Q
          ? Y
          : new Q(function (I) {
              I(Y);
            });
      }
      return new (Q || (Q = Promise))(function (Y, I) {
        function W(F) {
          try {
            X(Z.next(F));
          } catch (V) {
            I(V);
          }
        }
        function J(F) {
          try {
            X(Z.throw(F));
          } catch (V) {
            I(V);
          }
        }
        function X(F) {
          F.done ? Y(F.value) : G(F.value).then(W, J);
        }
        X((Z = Z.apply(A, B || [])).next());
      });
    };
  Object.defineProperty(Hi, "__esModule", { value: !0 });
  Hi.StatsigClientBase = void 0;
  mh();
  var _HQ = mh(),
    xHQ = sp1(),
    vHQ = lp1(),
    Zi1 = GF(),
    bHQ = rp1(),
    fHQ = dh(),
    hHQ = jK1(),
    SK1 = ZT(),
    gHQ = 3000;
  class Fd0 {
    constructor(A, B, Q, Z) {
      var G;
      ((this.loadingStatus = "Uninitialized"), (this._initializePromise = null), (this._listeners = {}));
      let Y = this.$emt.bind(this);
      ((Z === null || Z === void 0 ? void 0 : Z.logLevel) != null && (Zi1.Log.level = Z.logLevel),
        (Z === null || Z === void 0 ? void 0 : Z.disableStorage) && SK1.Storage._setDisabled(!0),
        (Z === null || Z === void 0 ? void 0 : Z.initialSessionID) &&
          hHQ.StatsigSession.overrideInitialSessionID(Z.initialSessionID, A),
        (Z === null || Z === void 0 ? void 0 : Z.storageProvider) && SK1.Storage._setProvider(Z.storageProvider),
        (this._sdkKey = A),
        (this._options = Z !== null && Z !== void 0 ? Z : {}),
        (this._memoCache = {}),
        (this.overrideAdapter =
          (G = Z === null || Z === void 0 ? void 0 : Z.overrideAdapter) !== null && G !== void 0 ? G : null),
        (this._logger = new vHQ.EventLogger(A, Y, Q, Z)),
        (this._errorBoundary = new xHQ.ErrorBoundary(A, Z, Y)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(B),
        this._errorBoundary.wrap(this._logger),
        Q.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = B),
        this.dataAdapter.attach(A, Z),
        (this.storageProvider = SK1.Storage),
        this._primeReadyRipcord(),
        uHQ(A, this));
    }
    updateRuntimeOptions(A) {
      if (A.disableLogging != null)
        ((this._options.disableLogging = A.disableLogging), this._logger.setLoggingDisabled(A.disableLogging));
      if (A.disableStorage != null)
        ((this._options.disableStorage = A.disableStorage), SK1.Storage._setDisabled(A.disableStorage));
    }
    flush() {
      return this._logger.flush();
    }
    shutdown() {
      return kHQ(this, void 0, void 0, function* () {
        (this.$emt({ name: "pre_shutdown" }),
          this._setStatus("Uninitialized", null),
          (this._initializePromise = null),
          yield this._logger.stop());
      });
    }
    on(A, B) {
      if (!this._listeners[A]) this._listeners[A] = [];
      this._listeners[A].push(B);
    }
    off(A, B) {
      if (this._listeners[A]) {
        let Q = this._listeners[A].indexOf(B);
        if (Q !== -1) this._listeners[A].splice(Q, 1);
      }
    }
    $on(A, B) {
      ((B.__isInternal = !0), this.on(A, B));
    }
    $emt(A) {
      var B;
      let Q = (Z) => {
        try {
          Z(A);
        } catch (G) {
          if (Z.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${A.name}`, G);
            return;
          }
          Zi1.Log.error("An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.", A);
        }
      };
      if (this._listeners[A.name]) this._listeners[A.name].forEach((Z) => Q(Z));
      (B = this._listeners["*"]) === null || B === void 0 || B.forEach(Q);
    }
    _setStatus(A, B) {
      ((this.loadingStatus = A), (this._memoCache = {}), this.$emt({ name: "values_updated", status: A, values: B }));
    }
    _enqueueExposure(A, B, Q) {
      if ((Q === null || Q === void 0 ? void 0 : Q.disableExposureLog) === !0) {
        this._logger.incrementNonExposureCount(A);
        return;
      }
      this._logger.enqueue(B);
    }
    _memoize(A, B) {
      return (Q, Z) => {
        if (this._options.disableEvaluationMemoization) return B(Q, Z);
        let G = bHQ.createMemoKey(A, Q, Z);
        if (!G) return B(Q, Z);
        if (!(G in this._memoCache)) {
          if (Object.keys(this._memoCache).length >= gHQ) this._memoCache = {};
          this._memoCache[G] = B(Q, Z);
        }
        return this._memoCache[G];
      };
    }
  }
  Hi.StatsigClientBase = Fd0;
  function uHQ(A, B) {
    var Q;
    if (fHQ._isServerEnv()) return;
    let Z = _HQ._getStatsigGlobal(),
      G = (Q = Z.instances) !== null && Q !== void 0 ? Q : {},
      Y = B;
    if (G[A] != null)
      Zi1.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      );
    if (((G[A] = Y), !Z.firstInstance)) Z.firstInstance = Y;
    ((Z.instances = G), (__STATSIG__ = Z));
  }
});
var zd0 = U((Kd0) => {
  Object.defineProperty(Kd0, "__esModule", { value: !0 });
  Kd0.DataAdapterCachePrefix = void 0;
  Kd0.DataAdapterCachePrefix = "statsig.cached";
});
var Cd0 = U((Dd0) => {
  Object.defineProperty(Dd0, "__esModule", { value: !0 });
});
var $d0 = U((Ud0) => {
  Object.defineProperty(Ud0, "__esModule", { value: !0 });
});
var Nd0 = U((qd0) => {
  Object.defineProperty(qd0, "__esModule", { value: !0 });
  qd0._makeTypedGet =
    qd0._mergeOverride =
    qd0._makeLayer =
    qd0._makeExperiment =
    qd0._makeDynamicConfig =
    qd0._makeFeatureGate =
      void 0;
  var mHQ = GF(),
    dHQ = XK1(),
    cHQ = "default";
  function Gi1(A, B, Q, Z) {
    var G;
    return {
      name: A,
      details: B,
      ruleID: (G = Q === null || Q === void 0 ? void 0 : Q.rule_id) !== null && G !== void 0 ? G : cHQ,
      __evaluation: Q,
      value: Z,
    };
  }
  function lHQ(A, B, Q) {
    return Gi1(A, B, Q, (Q === null || Q === void 0 ? void 0 : Q.value) === !0);
  }
  qd0._makeFeatureGate = lHQ;
  function wd0(A, B, Q) {
    var Z;
    let G = (Z = Q === null || Q === void 0 ? void 0 : Q.value) !== null && Z !== void 0 ? Z : {};
    return Object.assign(Object.assign({}, Gi1(A, B, Q, G)), {
      get: yK1(A, Q === null || Q === void 0 ? void 0 : Q.value),
    });
  }
  qd0._makeDynamicConfig = wd0;
  function pHQ(A, B, Q) {
    var Z;
    let G = wd0(A, B, Q);
    return Object.assign(Object.assign({}, G), {
      groupName: (Z = Q === null || Q === void 0 ? void 0 : Q.group_name) !== null && Z !== void 0 ? Z : null,
    });
  }
  qd0._makeExperiment = pHQ;
  function iHQ(A, B, Q, Z) {
    var G, Y;
    return Object.assign(Object.assign({}, Gi1(A, B, Q, void 0)), {
      get: yK1(A, Q === null || Q === void 0 ? void 0 : Q.value, Z),
      groupName: (G = Q === null || Q === void 0 ? void 0 : Q.group_name) !== null && G !== void 0 ? G : null,
      __value: (Y = Q === null || Q === void 0 ? void 0 : Q.value) !== null && Y !== void 0 ? Y : {},
    });
  }
  qd0._makeLayer = iHQ;
  function nHQ(A, B, Q, Z) {
    return Object.assign(Object.assign(Object.assign({}, A), B), { get: yK1(A.name, Q, Z) });
  }
  qd0._mergeOverride = nHQ;
  function yK1(A, B, Q) {
    return (Z, G) => {
      var Y;
      let I = (Y = B === null || B === void 0 ? void 0 : B[Z]) !== null && Y !== void 0 ? Y : null;
      if (I == null) return G !== null && G !== void 0 ? G : null;
      if (G != null && !dHQ._isTypeMatch(I, G))
        return (
          mHQ.Log.warn(
            `Parameter type mismatch. '${A}.${Z}' was found to be type '${typeof I}' but fallback/return type is '${typeof G}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
          ),
          G !== null && G !== void 0 ? G : null
        );
      return (Q === null || Q === void 0 || Q(Z), I);
    };
  }
  qd0._makeTypedGet = yK1;
});
var Md0 = U((Ld0) => {
  Object.defineProperty(Ld0, "__esModule", { value: !0 });
});
var Td0 = U((Od0) => {
  Object.defineProperty(Od0, "__esModule", { value: !0 });
  Od0.UPDATE_DETAIL_ERROR_MESSAGES = Od0.createUpdateDetails = void 0;
  var eHQ = (A, B, Q, Z, G, Y) => {
    return { duration: Q, source: B, success: A, error: Z, sourceUrl: G, warnings: Y };
  };
  Od0.createUpdateDetails = eHQ;
  Od0.UPDATE_DETAIL_ERROR_MESSAGES = {
    NO_NETWORK_DATA:
      "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
  };
});
var Ak = U((aQ) => {
  var BzQ =
      (aQ && aQ.__createBinding) ||
      (Object.create
        ? function (A, B, Q, Z) {
            if (Z === void 0) Z = Q;
            var G = Object.getOwnPropertyDescriptor(B, Q);
            if (!G || ("get" in G ? !B.__esModule : G.writable || G.configurable))
              G = {
                enumerable: !0,
                get: function () {
                  return B[Q];
                },
              };
            Object.defineProperty(A, Z, G);
          }
        : function (A, B, Q, Z) {
            if (Z === void 0) Z = Q;
            A[Z] = B[Q];
          }),
    m4 =
      (aQ && aQ.__exportStar) ||
      function (A, B) {
        for (var Q in A) if (Q !== "default" && !Object.prototype.hasOwnProperty.call(B, Q)) BzQ(B, A, Q);
      };
  Object.defineProperty(aQ, "__esModule", { value: !0 });
  aQ.Storage = aQ.Log = aQ.EventLogger = aQ.Diagnostics = void 0;
  mh();
  var QzQ = JK1();
  Object.defineProperty(aQ, "Diagnostics", {
    enumerable: !0,
    get: function () {
      return QzQ.Diagnostics;
    },
  });
  var ZzQ = lp1();
  Object.defineProperty(aQ, "EventLogger", {
    enumerable: !0,
    get: function () {
      return ZzQ.EventLogger;
    },
  });
  var Pd0 = GF();
  Object.defineProperty(aQ, "Log", {
    enumerable: !0,
    get: function () {
      return Pd0.Log;
    },
  });
  var GzQ = yQ1(),
    YzQ = ZT();
  Object.defineProperty(aQ, "Storage", {
    enumerable: !0,
    get: function () {
      return YzQ.Storage;
    },
  });
  m4(mh(), aQ);
  m4(RQ1(), aQ);
  m4(ou0(), aQ);
  m4(zm0(), aQ);
  m4(JK1(), aQ);
  m4(Cm0(), aQ);
  m4(sp1(), aQ);
  m4(Mm0(), aQ);
  m4(Rm0(), aQ);
  m4(Gi(), aQ);
  m4(Pm0(), aQ);
  m4(GF(), aQ);
  m4(rp1(), aQ);
  m4(TQ1(), aQ);
  m4(Yd0(), aQ);
  m4(Wd0(), aQ);
  m4(Xd0(), aQ);
  m4(dh(), aQ);
  m4(TK1(), aQ);
  m4(jK1(), aQ);
  m4(LK1(), aQ);
  m4(Vd0(), aQ);
  m4(Bi1(), aQ);
  m4(zd0(), aQ);
  m4(bp1(), aQ);
  m4(yQ1(), aQ);
  m4(Cd0(), aQ);
  m4($d0(), aQ);
  m4(Nd0(), aQ);
  m4(Md0(), aQ);
  m4(ip1(), aQ);
  m4(ZT(), aQ);
  m4(np1(), aQ);
  m4(XK1(), aQ);
  m4(gp1(), aQ);
  m4(EK1(), aQ);
  m4(wK1(), aQ);
  m4(Td0(), aQ);
  m4(ep1(), aQ);
  __STATSIG__ = Object.assign(Object.assign({}, __STATSIG__ !== null && __STATSIG__ !== void 0 ? __STATSIG__ : {}), {
    Log: Pd0.Log,
    SDK_VERSION: GzQ.SDK_VERSION,
  });
});
var yd0 = U((Sd0) => {
  Object.defineProperty(Sd0, "__esModule", { value: !0 });
  var ph = Ak();
  class jd0 {
    constructor(A) {
      ((this._sdkKey = A),
        (this._rawValues = null),
        (this._values = null),
        (this._source = "Uninitialized"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null),
        (this._warnings = new Set()));
    }
    reset() {
      ((this._values = null),
        (this._rawValues = null),
        (this._source = "Loading"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null));
    }
    finalize() {
      if (this._values) return;
      this._source = "NoValues";
    }
    getValues() {
      return this._rawValues ? ph._typedJsonParse(this._rawValues, "has_updates", "EvaluationStoreValues") : null;
    }
    setValues(A, B) {
      var Q;
      if (!A) return !1;
      let Z = ph._typedJsonParse(A.data, "has_updates", "EvaluationResponse");
      if (Z == null) return !1;
      if (((this._source = A.source), (Z === null || Z === void 0 ? void 0 : Z.has_updates) !== !0)) return !0;
      if (
        ((this._rawValues = A.data),
        (this._lcut = Z.time),
        (this._receivedAt = A.receivedAt),
        (this._values = Z),
        (this._bootstrapMetadata = this._extractBootstrapMetadata(A.source, Z)),
        A.source && Z.user)
      )
        this._setWarningState(B, Z);
      return (ph.SDKFlags.setFlags(this._sdkKey, (Q = Z.sdk_flags) !== null && Q !== void 0 ? Q : {}), !0);
    }
    getWarnings() {
      if (this._warnings.size === 0) return;
      return Array.from(this._warnings);
    }
    getGate(A) {
      var B;
      return this._getDetailedStoreResult((B = this._values) === null || B === void 0 ? void 0 : B.feature_gates, A);
    }
    getConfig(A) {
      var B;
      return this._getDetailedStoreResult((B = this._values) === null || B === void 0 ? void 0 : B.dynamic_configs, A);
    }
    getLayer(A) {
      var B;
      return this._getDetailedStoreResult((B = this._values) === null || B === void 0 ? void 0 : B.layer_configs, A);
    }
    getParamStore(A) {
      var B;
      return this._getDetailedStoreResult((B = this._values) === null || B === void 0 ? void 0 : B.param_stores, A);
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var A;
      return (A = this._values) === null || A === void 0 ? void 0 : A.exposures;
    }
    _extractBootstrapMetadata(A, B) {
      if (A !== "Bootstrap") return null;
      let Q = {};
      if (B.user) Q.user = B.user;
      if (B.sdkInfo) Q.generatorSDKInfo = B.sdkInfo;
      return ((Q.lcut = B.time), Q);
    }
    _getDetailedStoreResult(A, B) {
      let Q = null;
      if (A) Q = A[B] ? A[B] : A[ph._DJB2(B)];
      return { result: Q, details: this._getDetails(Q == null) };
    }
    _setWarningState(A, B) {
      var Q;
      let Z = ph.StableID.get(this._sdkKey);
      if (((Q = A.customIDs) === null || Q === void 0 ? void 0 : Q.stableID) !== Z) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in B) {
        let G = B.user;
        if (ph._getFullUserHash(A) !== ph._getFullUserHash(G)) this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues") return { reason: this._source };
      let A = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      if (this._warnings.size > 0) A.warnings = Array.from(this._warnings);
      return A;
    }
    _getDetails(A) {
      var B, Q;
      let Z = this.getCurrentSourceDetails(),
        G = Z.reason,
        Y = (B = Z.warnings) !== null && B !== void 0 ? B : [];
      if (this._source === "Bootstrap" && Y.length > 0) G = G + Y[0];
      if (G !== "Uninitialized" && G !== "NoValues") G = `${G}:${A ? "Unrecognized" : "Recognized"}`;
      let I =
        this._source === "Bootstrap" ? ((Q = this._bootstrapMetadata) !== null && Q !== void 0 ? Q : void 0) : void 0;
      if (I) Z.bootstrapMetadata = I;
      return Object.assign(Object.assign({}, Z), { reason: G });
    }
  }
  Sd0.default = jd0;
});
var vd0 = U((_d0) => {
  Object.defineProperty(_d0, "__esModule", { value: !0 });
  _d0._resolveDeltasResponse = void 0;
  var kd0 = Ak(),
    WzQ = 2;
  function JzQ(A, B) {
    let Q = kd0._typedJsonParse(B, "checksum", "DeltasEvaluationResponse");
    if (!Q) return { hadBadDeltaChecksum: !0 };
    let Z = XzQ(A, Q),
      G = FzQ(Z),
      Y = kd0._DJB2Object(
        { feature_gates: G.feature_gates, dynamic_configs: G.dynamic_configs, layer_configs: G.layer_configs },
        WzQ,
      );
    if (Y !== Q.checksumV2)
      return { hadBadDeltaChecksum: !0, badChecksum: Y, badMergedConfigs: G, badFullResponse: Q.deltas_full_response };
    return JSON.stringify(G);
  }
  _d0._resolveDeltasResponse = JzQ;
  function XzQ(A, B) {
    return Object.assign(Object.assign(Object.assign({}, A), B), {
      feature_gates: Object.assign(Object.assign({}, A.feature_gates), B.feature_gates),
      layer_configs: Object.assign(Object.assign({}, A.layer_configs), B.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, A.dynamic_configs), B.dynamic_configs),
    });
  }
  function FzQ(A) {
    let B = A;
    return (
      Yi1(A.deleted_gates, B.feature_gates),
      delete B.deleted_gates,
      Yi1(A.deleted_configs, B.dynamic_configs),
      delete B.deleted_configs,
      Yi1(A.deleted_layers, B.layer_configs),
      delete B.deleted_layers,
      B
    );
  }
  function Yi1(A, B) {
    A === null ||
      A === void 0 ||
      A.forEach((Q) => {
        delete B[Q];
      });
  }
});
var Ii1 = U((kQ1) => {
  var bd0 =
    (kQ1 && kQ1.__awaiter) ||
    function (A, B, Q, Z) {
      function G(Y) {
        return Y instanceof Q
          ? Y
          : new Q(function (I) {
              I(Y);
            });
      }
      return new (Q || (Q = Promise))(function (Y, I) {
        function W(F) {
          try {
            X(Z.next(F));
          } catch (V) {
            I(V);
          }
        }
        function J(F) {
          try {
            X(Z.throw(F));
          } catch (V) {
            I(V);
          }
        }
        function X(F) {
          F.done ? Y(F.value) : G(F.value).then(W, J);
        }
        X((Z = Z.apply(A, B || [])).next());
      });
    };
  Object.defineProperty(kQ1, "__esModule", { value: !0 });
  var kK1 = Ak(),
    VzQ = vd0();
  class fd0 extends kK1.NetworkCore {
    constructor(A, B) {
      super(A, B);
      let Q = A === null || A === void 0 ? void 0 : A.networkConfig;
      this._initializeUrlConfig = new kK1.UrlConfiguration(
        kK1.Endpoint._initialize,
        Q === null || Q === void 0 ? void 0 : Q.initializeUrl,
        Q === null || Q === void 0 ? void 0 : Q.api,
        Q === null || Q === void 0 ? void 0 : Q.initializeFallbackUrls,
      );
    }
    fetchEvaluations(A, B, Q, Z, G) {
      return bd0(this, void 0, void 0, function* () {
        let Y = B ? kK1._typedJsonParse(B, "has_updates", "InitializeResponse") : null,
          I = { user: Z, hash: "djb2", deltasResponseRequested: !1, full_checksum: null };
        if (Y === null || Y === void 0 ? void 0 : Y.has_updates)
          I = Object.assign(Object.assign({}, I), {
            sinceTime: G ? Y.time : 0,
            previousDerivedFields: "derived_fields" in Y && G ? Y.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: Y.full_checksum,
          });
        return this._fetchEvaluations(A, Y, I, Q);
      });
    }
    _fetchEvaluations(A, B, Q, Z) {
      var G, Y;
      return bd0(this, void 0, void 0, function* () {
        let I = yield this.post({
          sdkKey: A,
          urlConfig: this._initializeUrlConfig,
          data: Q,
          retries: 2,
          isStatsigEncodable: !0,
          priority: Z,
        });
        if ((I === null || I === void 0 ? void 0 : I.code) === 204) return '{"has_updates": false}';
        if ((I === null || I === void 0 ? void 0 : I.code) !== 200)
          return (G = I === null || I === void 0 ? void 0 : I.body) !== null && G !== void 0 ? G : null;
        if (
          (B === null || B === void 0 ? void 0 : B.has_updates) !== !0 ||
          ((Y = I.body) === null || Y === void 0 ? void 0 : Y.includes('"is_delta":true')) !== !0 ||
          Q.deltasResponseRequested !== !0
        )
          return I.body;
        let W = VzQ._resolveDeltasResponse(B, I.body);
        if (typeof W === "string") return W;
        return this._fetchEvaluations(
          A,
          B,
          Object.assign(Object.assign(Object.assign({}, Q), W), { deltasResponseRequested: !1 }),
          Z,
        );
      });
    }
  }
  kQ1.default = fd0;
});
var md0 = U((gd0) => {
  Object.defineProperty(gd0, "__esModule", { value: !0 });
  gd0._makeParamStoreGetter = void 0;
  var hd0 = Ak(),
    _K1 = { disableExposureLog: !0 };
  function xK1(A) {
    return A == null || A.disableExposureLog === !1;
  }
  function Wi1(A, B) {
    return B != null && !hd0._isTypeMatch(A, B);
  }
  function KzQ(A, B) {
    return A.value;
  }
  function HzQ(A, B, Q) {
    if (A.getFeatureGate(B.gate_name, xK1(Q) ? void 0 : _K1).value) return B.pass_value;
    return B.fail_value;
  }
  function zzQ(A, B, Q, Z) {
    let Y = A.getDynamicConfig(B.config_name, _K1).get(B.param_name);
    if (Wi1(Y, Q)) return Q;
    if (xK1(Z)) A.getDynamicConfig(B.config_name);
    return Y;
  }
  function DzQ(A, B, Q, Z) {
    let Y = A.getExperiment(B.experiment_name, _K1).get(B.param_name);
    if (Wi1(Y, Q)) return Q;
    if (xK1(Z)) A.getExperiment(B.experiment_name);
    return Y;
  }
  function CzQ(A, B, Q, Z) {
    let Y = A.getLayer(B.layer_name, _K1).get(B.param_name);
    if (Wi1(Y, Q)) return Q;
    if (xK1(Z)) A.getLayer(B.layer_name).get(B.param_name);
    return Y;
  }
  function UzQ(A, B, Q) {
    return (Z, G) => {
      if (B == null) return G;
      let Y = B[Z];
      if (Y == null || (G != null && hd0._typeOf(G) !== Y.param_type)) return G;
      switch (Y.ref_type) {
        case "static":
          return KzQ(Y, Q);
        case "gate":
          return HzQ(A, Y, Q);
        case "dynamic_config":
          return zzQ(A, Y, G, Q);
        case "experiment":
          return DzQ(A, Y, G, Q);
        case "layer":
          return CzQ(A, Y, G, Q);
        default:
          return G;
      }
    };
  }
  gd0._makeParamStoreGetter = UzQ;
});
var cd0 = U((zi) => {
  var $zQ =
    (zi && zi.__awaiter) ||
    function (A, B, Q, Z) {
      function G(Y) {
        return Y instanceof Q
          ? Y
          : new Q(function (I) {
              I(Y);
            });
      }
      return new (Q || (Q = Promise))(function (Y, I) {
        function W(F) {
          try {
            X(Z.next(F));
          } catch (V) {
            I(V);
          }
        }
        function J(F) {
          try {
            X(Z.throw(F));
          } catch (V) {
            I(V);
          }
        }
        function X(F) {
          F.done ? Y(F.value) : G(F.value).then(W, J);
        }
        X((Z = Z.apply(A, B || [])).next());
      });
    };
  Object.defineProperty(zi, "__esModule", { value: !0 });
  zi.StatsigEvaluationsDataAdapter = void 0;
  var ih = Ak(),
    wzQ = Ii1();
  class dd0 extends ih.DataAdapterCore {
    constructor() {
      super("EvaluationsDataAdapter", "evaluations");
      ((this._network = null), (this._options = null));
    }
    attach(A, B) {
      (super.attach(A, B), (this._network = new wzQ.default(B !== null && B !== void 0 ? B : {})));
    }
    getDataAsync(A, B, Q) {
      return this._getDataAsyncImpl(A, ih._normalizeUser(B, this._options), Q);
    }
    prefetchData(A, B) {
      return this._prefetchDataImpl(A, B);
    }
    setData(A) {
      let B = ih._typedJsonParse(A, "has_updates", "data");
      if (B && "user" in B) super.setData(A, B.user);
      else
        ih.Log.error(
          "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
        );
    }
    setDataLegacy(A, B) {
      super.setData(A, B);
    }
    _fetchFromNetwork(A, B, Q, Z) {
      var G;
      return $zQ(this, void 0, void 0, function* () {
        let Y = yield (G = this._network) === null || G === void 0
          ? void 0
          : G.fetchEvaluations(this._getSdkKey(), A, Q === null || Q === void 0 ? void 0 : Q.priority, B, Z);
        return Y !== null && Y !== void 0 ? Y : null;
      });
    }
    _getCacheKey(A) {
      var B;
      let Q = ih._getStorageKey(
        this._getSdkKey(),
        A,
        (B = this._options) === null || B === void 0 ? void 0 : B.customUserCacheKeyFunc,
      );
      return `${ih.DataAdapterCachePrefix}.${this._cacheSuffix}.${Q}`;
    }
    _isCachedResultValidFor204(A, B) {
      return A.fullUserHash != null && A.fullUserHash === ih._getFullUserHash(B);
    }
  }
  zi.StatsigEvaluationsDataAdapter = dd0;
});
var pd0 = U((_Q1) => {
  var Ji1 =
    (_Q1 && _Q1.__awaiter) ||
    function (A, B, Q, Z) {
      function G(Y) {
        return Y instanceof Q
          ? Y
          : new Q(function (I) {
              I(Y);
            });
      }
      return new (Q || (Q = Promise))(function (Y, I) {
        function W(F) {
          try {
            X(Z.next(F));
          } catch (V) {
            I(V);
          }
        }
        function J(F) {
          try {
            X(Z.throw(F));
          } catch (V) {
            I(V);
          }
        }
        function X(F) {
          F.done ? Y(F.value) : G(F.value).then(W, J);
        }
        X((Z = Z.apply(A, B || [])).next());
      });
    };
  Object.defineProperty(_Q1, "__esModule", { value: !0 });
  var a4 = Ak(),
    qzQ = yd0(),
    EzQ = Ii1(),
    ld0 = md0(),
    NzQ = cd0();
  class vK1 extends a4.StatsigClientBase {
    static instance(A) {
      let B = a4._getStatsigGlobal().instance(A);
      if (B instanceof vK1) return B;
      return (
        a4.Log.warn(
          a4._isServerEnv()
            ? "StatsigClient.instance is not supported in server environments"
            : "Unable to find StatsigClient instance",
        ),
        new vK1(A !== null && A !== void 0 ? A : "", {})
      );
    }
    constructor(A, B, Q = null) {
      var Z, G;
      a4.SDKType._setClientType(A, "javascript-client");
      let Y = new EzQ.default(Q, (W) => {
        this.$emt(W);
      });
      super(
        A,
        (Z = Q === null || Q === void 0 ? void 0 : Q.dataAdapter) !== null && Z !== void 0
          ? Z
          : new NzQ.StatsigEvaluationsDataAdapter(),
        Y,
        Q,
      );
      ((this.getFeatureGate = this._memoize(a4.MemoPrefix._gate, this._getFeatureGateImpl.bind(this))),
        (this.getDynamicConfig = this._memoize(a4.MemoPrefix._dynamicConfig, this._getDynamicConfigImpl.bind(this))),
        (this.getExperiment = this._memoize(a4.MemoPrefix._experiment, this._getExperimentImpl.bind(this))),
        (this.getLayer = this._memoize(a4.MemoPrefix._layer, this._getLayerImpl.bind(this))),
        (this.getParameterStore = this._memoize(a4.MemoPrefix._paramStore, this._getParameterStoreImpl.bind(this))),
        (this._store = new qzQ.default(A)),
        (this._network = Y),
        (this._user = this._configureUser(B, Q)));
      let I = (G = Q === null || Q === void 0 ? void 0 : Q.plugins) !== null && G !== void 0 ? G : [];
      for (let W of I) W.bind(this);
    }
    initializeSync(A) {
      var B;
      if (this.loadingStatus !== "Uninitialized")
        return a4.createUpdateDetails(!0, this._store.getSource(), -1, null, null, [
          "MultipleInitializations",
          ...((B = this._store.getWarnings()) !== null && B !== void 0 ? B : []),
        ]);
      return (this._logger.start(), this.updateUserSync(this._user, A));
    }
    initializeAsync(A) {
      return Ji1(this, void 0, void 0, function* () {
        if (this._initializePromise) return this._initializePromise;
        return ((this._initializePromise = this._initializeAsyncImpl(A)), this._initializePromise);
      });
    }
    updateUserSync(A, B) {
      var Q;
      let Z = performance.now(),
        G = [...((Q = this._store.getWarnings()) !== null && Q !== void 0 ? Q : [])];
      this._resetForUser(A);
      let Y = this.dataAdapter.getDataSync(this._user);
      if (Y == null) G.push("NoCachedValues");
      (this._store.setValues(Y, this._user), this._finalizeUpdate(Y));
      let I = B === null || B === void 0 ? void 0 : B.disableBackgroundCacheRefresh;
      if (I === !0 || (I == null && (Y === null || Y === void 0 ? void 0 : Y.source) === "Bootstrap"))
        return a4.createUpdateDetails(
          !0,
          this._store.getSource(),
          performance.now() - Z,
          this._errorBoundary.getLastSeenErrorAndReset(),
          this._network.getLastUsedInitUrlAndReset(),
          G,
        );
      return (
        this._runPostUpdate(Y !== null && Y !== void 0 ? Y : null, this._user),
        a4.createUpdateDetails(
          !0,
          this._store.getSource(),
          performance.now() - Z,
          this._errorBoundary.getLastSeenErrorAndReset(),
          this._network.getLastUsedInitUrlAndReset(),
          G,
        )
      );
    }
    updateUserAsync(A, B) {
      return Ji1(this, void 0, void 0, function* () {
        this._resetForUser(A);
        let Q = this._user;
        a4.Diagnostics._markInitOverallStart(this._sdkKey);
        let Z = this.dataAdapter.getDataSync(Q);
        if (
          (this._store.setValues(Z, this._user),
          this._setStatus("Loading", Z),
          (Z = yield this.dataAdapter.getDataAsync(Z, Q, B)),
          Q !== this._user)
        )
          return a4.createUpdateDetails(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let G = !1;
        if (Z != null)
          (a4.Diagnostics._markInitProcessStart(this._sdkKey),
            (G = this._store.setValues(Z, this._user)),
            a4.Diagnostics._markInitProcessEnd(this._sdkKey, { success: G }));
        if ((this._finalizeUpdate(Z), !G))
          (this._errorBoundary.attachErrorIfNoneExists(a4.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA),
            this.$emt({ name: "initialization_failure" }));
        a4.Diagnostics._markInitOverallEnd(this._sdkKey, G, this._store.getCurrentSourceDetails());
        let Y = a4.Diagnostics._enqueueDiagnosticsEvent(this._user, this._logger, this._sdkKey, this._options);
        return a4.createUpdateDetails(
          G,
          this._store.getSource(),
          Y,
          this._errorBoundary.getLastSeenErrorAndReset(),
          this._network.getLastUsedInitUrlAndReset(),
          this._store.getWarnings(),
        );
      });
    }
    getContext() {
      return {
        sdkKey: this._sdkKey,
        options: this._options,
        values: this._store.getValues(),
        user: JSON.parse(JSON.stringify(this._user)),
        errorBoundary: this._errorBoundary,
        session: a4.StatsigSession.get(this._sdkKey),
        stableID: a4.StableID.get(this._sdkKey),
      };
    }
    checkGate(A, B) {
      return this.getFeatureGate(A, B).value;
    }
    logEvent(A, B, Q) {
      let Z = typeof A === "string" ? { eventName: A, value: B, metadata: Q } : A;
      this._logger.enqueue(Object.assign(Object.assign({}, Z), { user: this._user, time: Date.now() }));
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null);
      });
    }
    _initializeAsyncImpl(A) {
      return Ji1(this, void 0, void 0, function* () {
        if (!a4.Storage.isReady()) yield a4.Storage.isReadyResolver();
        return (this._logger.start(), this.updateUserAsync(this._user, A));
      });
    }
    _finalizeUpdate(A) {
      (this._store.finalize(), this._setStatus("Ready", A));
    }
    _runPostUpdate(A, B) {
      this.dataAdapter.getDataAsync(A, B, { priority: "low" }).catch((Q) => {
        a4.Log.error("An error occurred after update.", Q);
      });
    }
    _resetForUser(A) {
      (this._logger.reset(), this._store.reset(), (this._user = this._configureUser(A, this._options)));
    }
    _configureUser(A, B) {
      var Q;
      let Z = a4._normalizeUser(A, B),
        G = (Q = Z.customIDs) === null || Q === void 0 ? void 0 : Q.stableID;
      if (G) a4.StableID.setOverride(G, this._sdkKey);
      return Z;
    }
    _getFeatureGateImpl(A, B) {
      var Q, Z;
      let { result: G, details: Y } = this._store.getGate(A),
        I = a4._makeFeatureGate(A, Y, G),
        W =
          (Z = (Q = this.overrideAdapter) === null || Q === void 0 ? void 0 : Q.getGateOverride) === null ||
          Z === void 0
            ? void 0
            : Z.call(Q, I, this._user, B),
        J = W !== null && W !== void 0 ? W : I;
      return (
        this._enqueueExposure(A, a4._createGateExposure(this._user, J, this._store.getExposureMapping()), B),
        this.$emt({ name: "gate_evaluation", gate: J }),
        J
      );
    }
    _getDynamicConfigImpl(A, B) {
      var Q, Z;
      let { result: G, details: Y } = this._store.getConfig(A),
        I = a4._makeDynamicConfig(A, Y, G),
        W =
          (Z = (Q = this.overrideAdapter) === null || Q === void 0 ? void 0 : Q.getDynamicConfigOverride) === null ||
          Z === void 0
            ? void 0
            : Z.call(Q, I, this._user, B),
        J = W !== null && W !== void 0 ? W : I;
      return (
        this._enqueueExposure(A, a4._createConfigExposure(this._user, J, this._store.getExposureMapping()), B),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: J }),
        J
      );
    }
    _getExperimentImpl(A, B) {
      var Q, Z, G, Y;
      let { result: I, details: W } = this._store.getConfig(A),
        J = a4._makeExperiment(A, W, I);
      if (J.__evaluation != null)
        J.__evaluation.secondary_exposures = a4._mapExposures(
          (Z = (Q = J.__evaluation) === null || Q === void 0 ? void 0 : Q.secondary_exposures) !== null && Z !== void 0
            ? Z
            : [],
          this._store.getExposureMapping(),
        );
      let X =
          (Y = (G = this.overrideAdapter) === null || G === void 0 ? void 0 : G.getExperimentOverride) === null ||
          Y === void 0
            ? void 0
            : Y.call(G, J, this._user, B),
        F = X !== null && X !== void 0 ? X : J;
      return (
        this._enqueueExposure(A, a4._createConfigExposure(this._user, F, this._store.getExposureMapping()), B),
        this.$emt({ name: "experiment_evaluation", experiment: F }),
        F
      );
    }
    _getLayerImpl(A, B) {
      var Q, Z, G;
      let { result: Y, details: I } = this._store.getLayer(A),
        W = a4._makeLayer(A, I, Y),
        J =
          (Z = (Q = this.overrideAdapter) === null || Q === void 0 ? void 0 : Q.getLayerOverride) === null ||
          Z === void 0
            ? void 0
            : Z.call(Q, W, this._user, B);
      if (B === null || B === void 0 ? void 0 : B.disableExposureLog) this._logger.incrementNonExposureCount(A);
      let X = a4._mergeOverride(
        W,
        J,
        (G = J === null || J === void 0 ? void 0 : J.__value) !== null && G !== void 0 ? G : W.__value,
        (F) => {
          if (B === null || B === void 0 ? void 0 : B.disableExposureLog) return;
          this._enqueueExposure(
            A,
            a4._createLayerParameterExposure(this._user, X, F, this._store.getExposureMapping()),
            B,
          );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: X }), X);
    }
    _getParameterStoreImpl(A, B) {
      var Q, Z;
      let { result: G, details: Y } = this._store.getParamStore(A);
      this._logger.incrementNonExposureCount(A);
      let I = { name: A, details: Y, __configuration: G, get: ld0._makeParamStoreGetter(this, G, B) },
        W =
          (Z = (Q = this.overrideAdapter) === null || Q === void 0 ? void 0 : Q.getParamStoreOverride) === null ||
          Z === void 0
            ? void 0
            : Z.call(Q, I, B);
      if (W != null)
        ((I.__configuration = W.config),
          (I.details = W.details),
          (I.get = ld0._makeParamStoreGetter(this, W.config, B)));
      return I;
    }
  }
  _Q1.default = vK1;
});
var nd0 = U((TN) => {
  var LzQ =
      (TN && TN.__createBinding) ||
      (Object.create
        ? function (A, B, Q, Z) {
            if (Z === void 0) Z = Q;
            var G = Object.getOwnPropertyDescriptor(B, Q);
            if (!G || ("get" in G ? !B.__esModule : G.writable || G.configurable))
              G = {
                enumerable: !0,
                get: function () {
                  return B[Q];
                },
              };
            Object.defineProperty(A, Z, G);
          }
        : function (A, B, Q, Z) {
            if (Z === void 0) Z = Q;
            A[Z] = B[Q];
          }),
    MzQ =
      (TN && TN.__exportStar) ||
      function (A, B) {
        for (var Q in A) if (Q !== "default" && !Object.prototype.hasOwnProperty.call(B, Q)) LzQ(B, A, Q);
      };
  Object.defineProperty(TN, "__esModule", { value: !0 });
  TN.StatsigClient = void 0;
  var id0 = pd0();
  TN.StatsigClient = id0.default;
  MzQ(Ak(), TN);
  __STATSIG__ = Object.assign(Object.assign({}, __STATSIG__ !== null && __STATSIG__ !== void 0 ? __STATSIG__ : {}), {
    StatsigClient: id0.default,
  });
  TN.default = __STATSIG__;
});
var OC = U((od0) => {
  Object.defineProperty(od0, "__esModule", { value: !0 });
  var ad0 = Object.prototype.toString;
  function PzQ(A) {
    switch (ad0.call(A)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return !0;
      default:
        return bK1(A, Error);
    }
  }
  function Di(A, B) {
    return ad0.call(A) === `[object ${B}]`;
  }
  function jzQ(A) {
    return Di(A, "ErrorEvent");
  }
  function SzQ(A) {
    return Di(A, "DOMError");
  }
  function yzQ(A) {
    return Di(A, "DOMException");
  }
  function kzQ(A) {
    return Di(A, "String");
  }
  function sd0(A) {
    return (
      typeof A === "object" && A !== null && "__sentry_template_string__" in A && "__sentry_template_values__" in A
    );
  }
  function _zQ(A) {
    return A === null || sd0(A) || (typeof A !== "object" && typeof A !== "function");
  }
  function rd0(A) {
    return Di(A, "Object");
  }
  function xzQ(A) {
    return typeof Event !== "undefined" && bK1(A, Event);
  }
  function vzQ(A) {
    return typeof Element !== "undefined" && bK1(A, Element);
  }
  function bzQ(A) {
    return Di(A, "RegExp");
  }
  function fzQ(A) {
    return Boolean(A && A.then && typeof A.then === "function");
  }
  function hzQ(A) {
    return rd0(A) && "nativeEvent" in A && "preventDefault" in A && "stopPropagation" in A;
  }
  function gzQ(A) {
    return typeof A === "number" && A !== A;
  }
  function bK1(A, B) {
    try {
      return A instanceof B;
    } catch (Q) {
      return !1;
    }
  }
  function uzQ(A) {
    return !!(typeof A === "object" && A !== null && (A.__isVue || A._isVue));
  }
  od0.isDOMError = SzQ;
  od0.isDOMException = yzQ;
  od0.isElement = vzQ;
  od0.isError = PzQ;
  od0.isErrorEvent = jzQ;
  od0.isEvent = xzQ;
  od0.isInstanceOf = bK1;
  od0.isNaN = gzQ;
  od0.isParameterizedString = sd0;
  od0.isPlainObject = rd0;
  od0.isPrimitive = _zQ;
  od0.isRegExp = bzQ;
  od0.isString = kzQ;
  od0.isSyntheticEvent = hzQ;
  od0.isThenable = fzQ;
  od0.isVueViewModel = uzQ;
});
var xQ1 = U((ed0) => {
  Object.defineProperty(ed0, "__esModule", { value: !0 });
  var fK1 = OC();
  function ZDQ(A, B = 0) {
    if (typeof A !== "string" || B === 0) return A;
    return A.length <= B ? A : `${A.slice(0, B)}...`;
  }
  function GDQ(A, B) {
    let Q = A,
      Z = Q.length;
    if (Z <= 150) return Q;
    if (B > Z) B = Z;
    let G = Math.max(B - 60, 0);
    if (G < 5) G = 0;
    let Y = Math.min(G + 140, Z);
    if (Y > Z - 5) Y = Z;
    if (Y === Z) G = Math.max(Y - 140, 0);
    if (((Q = Q.slice(G, Y)), G > 0)) Q = `'{snip} ${Q}`;
    if (Y < Z) Q += " {snip}";
    return Q;
  }
  function YDQ(A, B) {
    if (!Array.isArray(A)) return "";
    let Q = [];
    for (let Z = 0; Z < A.length; Z++) {
      let G = A[Z];
      try {
        if (fK1.isVueViewModel(G)) Q.push("[VueViewModel]");
        else Q.push(String(G));
      } catch (Y) {
        Q.push("[value cannot be serialized]");
      }
    }
    return Q.join(B);
  }
  function td0(A, B, Q = !1) {
    if (!fK1.isString(A)) return !1;
    if (fK1.isRegExp(B)) return B.test(A);
    if (fK1.isString(B)) return Q ? A === B : A.includes(B);
    return !1;
  }
  function IDQ(A, B = [], Q = !1) {
    return B.some((Z) => td0(A, Z, Q));
  }
  ed0.isMatchingPattern = td0;
  ed0.safeJoin = YDQ;
  ed0.snipLine = GDQ;
  ed0.stringMatchesSomePattern = IDQ;
  ed0.truncate = ZDQ;
});
var Zc0 = U((Qc0) => {
  Object.defineProperty(Qc0, "__esModule", { value: !0 });
  var Xi1 = OC(),
    KDQ = xQ1();
  function HDQ(A, B, Q = 250, Z, G, Y, I) {
    if (!Y.exception || !Y.exception.values || !I || !Xi1.isInstanceOf(I.originalException, Error)) return;
    let W = Y.exception.values.length > 0 ? Y.exception.values[Y.exception.values.length - 1] : void 0;
    if (W) Y.exception.values = zDQ(Fi1(A, B, G, I.originalException, Z, Y.exception.values, W, 0), Q);
  }
  function Fi1(A, B, Q, Z, G, Y, I, W) {
    if (Y.length >= Q + 1) return Y;
    let J = [...Y];
    if (Xi1.isInstanceOf(Z[G], Error)) {
      Ac0(I, W);
      let X = A(B, Z[G]),
        F = J.length;
      (Bc0(X, G, F, W), (J = Fi1(A, B, Q, Z[G], G, [X, ...J], X, F)));
    }
    if (Array.isArray(Z.errors))
      Z.errors.forEach((X, F) => {
        if (Xi1.isInstanceOf(X, Error)) {
          Ac0(I, W);
          let V = A(B, X),
            K = J.length;
          (Bc0(V, `errors[${F}]`, K, W), (J = Fi1(A, B, Q, X, G, [V, ...J], V, K)));
        }
      });
    return J;
  }
  function Ac0(A, B) {
    ((A.mechanism = A.mechanism || { type: "generic", handled: !0 }),
      (A.mechanism = {
        ...A.mechanism,
        ...(A.type === "AggregateError" && { is_exception_group: !0 }),
        exception_id: B,
      }));
  }
  function Bc0(A, B, Q, Z) {
    ((A.mechanism = A.mechanism || { type: "generic", handled: !0 }),
      (A.mechanism = { ...A.mechanism, type: "chained", source: B, exception_id: Q, parent_id: Z }));
  }
  function zDQ(A, B) {
    return A.map((Q) => {
      if (Q.value) Q.value = KDQ.truncate(Q.value, B);
      return Q;
    });
  }
  Qc0.applyAggregateErrorsToEvent = HDQ;
});
var YF = U((Gc0) => {
  Object.defineProperty(Gc0, "__esModule", { value: !0 });
  function hK1(A) {
    return A && A.Math == Math ? A : void 0;
  }
  var Vi1 =
    (typeof globalThis == "object" && hK1(globalThis)) ||
    (typeof window == "object" && hK1(window)) ||
    (typeof self == "object" && hK1(self)) ||
    (typeof global == "object" && hK1(global)) ||
    (function () {
      return this;
    })() ||
    {};
  function CDQ() {
    return Vi1;
  }
  function UDQ(A, B, Q) {
    let Z = Q || Vi1,
      G = (Z.__SENTRY__ = Z.__SENTRY__ || {});
    return G[A] || (G[A] = B());
  }
  Gc0.GLOBAL_OBJ = Vi1;
  Gc0.getGlobalObject = CDQ;
  Gc0.getGlobalSingleton = UDQ;
});
var Ki1 = U((Yc0) => {
  Object.defineProperty(Yc0, "__esModule", { value: !0 });
  var EDQ = OC(),
    NDQ = YF(),
    Ci = NDQ.getGlobalObject(),
    LDQ = 80;
  function MDQ(A, B = {}) {
    if (!A) return "<unknown>";
    try {
      let Q = A,
        Z = 5,
        G = [],
        Y = 0,
        I = 0,
        W = " > ",
        J = W.length,
        X,
        F = Array.isArray(B) ? B : B.keyAttrs,
        V = (!Array.isArray(B) && B.maxStringLength) || LDQ;
      while (Q && Y++ < Z) {
        if (((X = ODQ(Q, F)), X === "html" || (Y > 1 && I + G.length * J + X.length >= V))) break;
        (G.push(X), (I += X.length), (Q = Q.parentNode));
      }
      return G.reverse().join(W);
    } catch (Q) {
      return "<unknown>";
    }
  }
  function ODQ(A, B) {
    let Q = A,
      Z = [],
      G,
      Y,
      I,
      W,
      J;
    if (!Q || !Q.tagName) return "";
    if (Ci.HTMLElement) {
      if (Q instanceof HTMLElement && Q.dataset && Q.dataset.sentryComponent) return Q.dataset.sentryComponent;
    }
    Z.push(Q.tagName.toLowerCase());
    let X = B && B.length ? B.filter((V) => Q.getAttribute(V)).map((V) => [V, Q.getAttribute(V)]) : null;
    if (X && X.length)
      X.forEach((V) => {
        Z.push(`[${V[0]}="${V[1]}"]`);
      });
    else {
      if (Q.id) Z.push(`#${Q.id}`);
      if (((G = Q.className), G && EDQ.isString(G))) {
        Y = G.split(/\s+/);
        for (J = 0; J < Y.length; J++) Z.push(`.${Y[J]}`);
      }
    }
    let F = ["aria-label", "type", "name", "title", "alt"];
    for (J = 0; J < F.length; J++) if (((I = F[J]), (W = Q.getAttribute(I)), W)) Z.push(`[${I}="${W}"]`);
    return Z.join("");
  }
  function RDQ() {
    try {
      return Ci.document.location.href;
    } catch (A) {
      return "";
    }
  }
  function TDQ(A) {
    if (Ci.document && Ci.document.querySelector) return Ci.document.querySelector(A);
    return null;
  }
  function PDQ(A) {
    if (!Ci.HTMLElement) return null;
    let B = A,
      Q = 5;
    for (let Z = 0; Z < Q; Z++) {
      if (!B) return null;
      if (B instanceof HTMLElement && B.dataset.sentryComponent) return B.dataset.sentryComponent;
      B = B.parentNode;
    }
    return null;
  }
  Yc0.getComponentName = PDQ;
  Yc0.getDomElement = TDQ;
  Yc0.getLocationHref = RDQ;
  Yc0.htmlTreeAsString = MDQ;
});
var PN = U((Ic0) => {
  Object.defineProperty(Ic0, "__esModule", { value: !0 });
  var _DQ = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
  Ic0.DEBUG_BUILD = _DQ;
});
var fw = U((Jc0) => {
  Object.defineProperty(Jc0, "__esModule", { value: !0 });
  var vDQ = PN(),
    Hi1 = YF(),
    bDQ = "Sentry Logger ",
    zi1 = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    Di1 = {};
  function Wc0(A) {
    if (!("console" in Hi1.GLOBAL_OBJ)) return A();
    let B = Hi1.GLOBAL_OBJ.console,
      Q = {},
      Z = Object.keys(Di1);
    Z.forEach((G) => {
      let Y = Di1[G];
      ((Q[G] = B[G]), (B[G] = Y));
    });
    try {
      return A();
    } finally {
      Z.forEach((G) => {
        B[G] = Q[G];
      });
    }
  }
  function fDQ() {
    let A = !1,
      B = {
        enable: () => {
          A = !0;
        },
        disable: () => {
          A = !1;
        },
        isEnabled: () => A,
      };
    if (vDQ.DEBUG_BUILD)
      zi1.forEach((Q) => {
        B[Q] = (...Z) => {
          if (A)
            Wc0(() => {
              Hi1.GLOBAL_OBJ.console[Q](`${bDQ}[${Q}]:`, ...Z);
            });
        };
      });
    else
      zi1.forEach((Q) => {
        B[Q] = () => {
          return;
        };
      });
    return B;
  }
  var hDQ = fDQ();
  Jc0.CONSOLE_LEVELS = zi1;
  Jc0.consoleSandbox = Wc0;
  Jc0.logger = hDQ;
  Jc0.originalConsoleMethods = Di1;
});
var Ci1 = U((Vc0) => {
  Object.defineProperty(Vc0, "__esModule", { value: !0 });
  var cDQ = PN(),
    vQ1 = fw(),
    lDQ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function pDQ(A) {
    return A === "http" || A === "https";
  }
  function iDQ(A, B = !1) {
    let { host: Q, path: Z, pass: G, port: Y, projectId: I, protocol: W, publicKey: J } = A;
    return `${W}://${J}${B && G ? `:${G}` : ""}@${Q}${Y ? `:${Y}` : ""}/${Z ? `${Z}/` : Z}${I}`;
  }
  function Xc0(A) {
    let B = lDQ.exec(A);
    if (!B) {
      vQ1.consoleSandbox(() => {
        console.error(`Invalid Sentry Dsn: ${A}`);
      });
      return;
    }
    let [Q, Z, G = "", Y, I = "", W] = B.slice(1),
      J = "",
      X = W,
      F = X.split("/");
    if (F.length > 1) ((J = F.slice(0, -1).join("/")), (X = F.pop()));
    if (X) {
      let V = X.match(/^\d+/);
      if (V) X = V[0];
    }
    return Fc0({ host: Y, pass: G, path: J, projectId: X, port: I, protocol: Q, publicKey: Z });
  }
  function Fc0(A) {
    return {
      protocol: A.protocol,
      publicKey: A.publicKey || "",
      pass: A.pass || "",
      host: A.host,
      port: A.port || "",
      path: A.path || "",
      projectId: A.projectId,
    };
  }
  function nDQ(A) {
    if (!cDQ.DEBUG_BUILD) return !0;
    let { port: B, projectId: Q, protocol: Z } = A;
    if (
      ["protocol", "publicKey", "host", "projectId"].find((I) => {
        if (!A[I]) return (vQ1.logger.error(`Invalid Sentry Dsn: ${I} missing`), !0);
        return !1;
      })
    )
      return !1;
    if (!Q.match(/^\d+$/)) return (vQ1.logger.error(`Invalid Sentry Dsn: Invalid projectId ${Q}`), !1);
    if (!pDQ(Z)) return (vQ1.logger.error(`Invalid Sentry Dsn: Invalid protocol ${Z}`), !1);
    if (B && isNaN(parseInt(B, 10))) return (vQ1.logger.error(`Invalid Sentry Dsn: Invalid port ${B}`), !1);
    return !0;
  }
  function aDQ(A) {
    let B = typeof A === "string" ? Xc0(A) : Fc0(A);
    if (!B || !nDQ(B)) return;
    return B;
  }
  Vc0.dsnFromString = Xc0;
  Vc0.dsnToString = iDQ;
  Vc0.makeDsn = aDQ;
});
var Ui1 = U((Hc0) => {
  Object.defineProperty(Hc0, "__esModule", { value: !0 });
  class Kc0 extends Error {
    constructor(A, B = "warn") {
      super(A);
      ((this.message = A),
        (this.name = new.target.prototype.constructor.name),
        Object.setPrototypeOf(this, new.target.prototype),
        (this.logLevel = B));
    }
  }
  Hc0.SentryError = Kc0;
});
var RC = U((qc0) => {
  Object.defineProperty(qc0, "__esModule", { value: !0 });
  var eDQ = Ki1(),
    ACQ = PN(),
    Ui = OC(),
    BCQ = fw(),
    zc0 = xQ1();
  function QCQ(A, B, Q) {
    if (!(B in A)) return;
    let Z = A[B],
      G = Q(Z);
    if (typeof G === "function") $c0(G, Z);
    A[B] = G;
  }
  function Uc0(A, B, Q) {
    try {
      Object.defineProperty(A, B, { value: Q, writable: !0, configurable: !0 });
    } catch (Z) {
      ACQ.DEBUG_BUILD && BCQ.logger.log(`Failed to add non-enumerable property "${B}" to object`, A);
    }
  }
  function $c0(A, B) {
    try {
      let Q = B.prototype || {};
      ((A.prototype = B.prototype = Q), Uc0(A, "__sentry_original__", B));
    } catch (Q) {}
  }
  function ZCQ(A) {
    return A.__sentry_original__;
  }
  function GCQ(A) {
    return Object.keys(A)
      .map((B) => `${encodeURIComponent(B)}=${encodeURIComponent(A[B])}`)
      .join("&");
  }
  function wc0(A) {
    if (Ui.isError(A)) return { message: A.message, name: A.name, stack: A.stack, ...Cc0(A) };
    else if (Ui.isEvent(A)) {
      let B = { type: A.type, target: Dc0(A.target), currentTarget: Dc0(A.currentTarget), ...Cc0(A) };
      if (typeof CustomEvent !== "undefined" && Ui.isInstanceOf(A, CustomEvent)) B.detail = A.detail;
      return B;
    } else return A;
  }
  function Dc0(A) {
    try {
      return Ui.isElement(A) ? eDQ.htmlTreeAsString(A) : Object.prototype.toString.call(A);
    } catch (B) {
      return "<unknown>";
    }
  }
  function Cc0(A) {
    if (typeof A === "object" && A !== null) {
      let B = {};
      for (let Q in A) if (Object.prototype.hasOwnProperty.call(A, Q)) B[Q] = A[Q];
      return B;
    } else return {};
  }
  function YCQ(A, B = 40) {
    let Q = Object.keys(wc0(A));
    if ((Q.sort(), !Q.length)) return "[object has no keys]";
    if (Q[0].length >= B) return zc0.truncate(Q[0], B);
    for (let Z = Q.length; Z > 0; Z--) {
      let G = Q.slice(0, Z).join(", ");
      if (G.length > B) continue;
      if (Z === Q.length) return G;
      return zc0.truncate(G, B);
    }
    return "";
  }
  function ICQ(A) {
    return $i1(A, new Map());
  }
  function $i1(A, B) {
    if (WCQ(A)) {
      let Q = B.get(A);
      if (Q !== void 0) return Q;
      let Z = {};
      B.set(A, Z);
      for (let G of Object.keys(A)) if (typeof A[G] !== "undefined") Z[G] = $i1(A[G], B);
      return Z;
    }
    if (Array.isArray(A)) {
      let Q = B.get(A);
      if (Q !== void 0) return Q;
      let Z = [];
      return (
        B.set(A, Z),
        A.forEach((G) => {
          Z.push($i1(G, B));
        }),
        Z
      );
    }
    return A;
  }
  function WCQ(A) {
    if (!Ui.isPlainObject(A)) return !1;
    try {
      let B = Object.getPrototypeOf(A).constructor.name;
      return !B || B === "Object";
    } catch (B) {
      return !0;
    }
  }
  function JCQ(A) {
    let B;
    switch (!0) {
      case A === void 0 || A === null:
        B = new String(A);
        break;
      case typeof A === "symbol" || typeof A === "bigint":
        B = Object(A);
        break;
      case Ui.isPrimitive(A):
        B = new A.constructor(A);
        break;
      default:
        B = A;
        break;
    }
    return B;
  }
  qc0.addNonEnumerableProperty = Uc0;
  qc0.convertToPlainObject = wc0;
  qc0.dropUndefinedKeys = ICQ;
  qc0.extractExceptionKeysForMessage = YCQ;
  qc0.fill = QCQ;
  qc0.getOriginalFunction = ZCQ;
  qc0.markFunctionWrapped = $c0;
  qc0.objectify = JCQ;
  qc0.urlEncode = GCQ;
});
var gK1 = U((Nc0) => {
  Object.defineProperty(Nc0, "__esModule", { value: !0 });
  function Ec0(A, B = !1) {
    return (
      !(
        B ||
        (A &&
          !A.startsWith("/") &&
          !A.match(/^[A-Z]:/) &&
          !A.startsWith(".") &&
          !A.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))
      ) &&
      A !== void 0 &&
      !A.includes("node_modules/")
    );
  }
  function $CQ(A) {
    let B = /^\s*[-]{4,}$/,
      Q = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
    return (Z) => {
      let G = Z.match(Q);
      if (G) {
        let Y, I, W, J, X;
        if (G[1]) {
          W = G[1];
          let K = W.lastIndexOf(".");
          if (W[K - 1] === ".") K--;
          if (K > 0) {
            ((Y = W.slice(0, K)), (I = W.slice(K + 1)));
            let H = Y.indexOf(".Module");
            if (H > 0) ((W = W.slice(H + 1)), (Y = Y.slice(0, H)));
          }
          J = void 0;
        }
        if (I) ((J = Y), (X = I));
        if (I === "<anonymous>") ((X = void 0), (W = void 0));
        if (W === void 0) ((X = X || "<anonymous>"), (W = J ? `${J}.${X}` : X));
        let F = G[2] && G[2].startsWith("file://") ? G[2].slice(7) : G[2],
          V = G[5] === "native";
        if (F && F.match(/\/[A-Z]:/)) F = F.slice(1);
        if (!F && G[5] && !V) F = G[5];
        return {
          filename: F,
          module: A ? A(F) : void 0,
          function: W,
          lineno: parseInt(G[3], 10) || void 0,
          colno: parseInt(G[4], 10) || void 0,
          in_app: Ec0(F, V),
        };
      }
      if (Z.match(B)) return { filename: Z };
      return;
    };
  }
  Nc0.filenameIsInApp = Ec0;
  Nc0.node = $CQ;
});
var uK1 = U((jc0) => {
  Object.defineProperty(jc0, "__esModule", { value: !0 });
  var Oc0 = gK1(),
    Rc0 = 50,
    Lc0 = /\(error: (.*)\)/,
    Mc0 = /captureMessage|captureException/;
  function Tc0(...A) {
    let B = A.sort((Q, Z) => Q[0] - Z[0]).map((Q) => Q[1]);
    return (Q, Z = 0) => {
      let G = [],
        Y = Q.split(`
`);
      for (let I = Z; I < Y.length; I++) {
        let W = Y[I];
        if (W.length > 1024) continue;
        let J = Lc0.test(W) ? W.replace(Lc0, "$1") : W;
        if (J.match(/\S*Error: /)) continue;
        for (let X of B) {
          let F = X(J);
          if (F) {
            G.push(F);
            break;
          }
        }
        if (G.length >= Rc0) break;
      }
      return Pc0(G);
    };
  }
  function ECQ(A) {
    if (Array.isArray(A)) return Tc0(...A);
    return A;
  }
  function Pc0(A) {
    if (!A.length) return [];
    let B = Array.from(A);
    if (/sentryWrapped/.test(B[B.length - 1].function || "")) B.pop();
    if ((B.reverse(), Mc0.test(B[B.length - 1].function || ""))) {
      if ((B.pop(), Mc0.test(B[B.length - 1].function || ""))) B.pop();
    }
    return B.slice(0, Rc0).map((Q) => ({
      ...Q,
      filename: Q.filename || B[B.length - 1].filename,
      function: Q.function || "?",
    }));
  }
  var wi1 = "<anonymous>";
  function NCQ(A) {
    try {
      if (!A || typeof A !== "function") return wi1;
      return A.name || wi1;
    } catch (B) {
      return wi1;
    }
  }
  function LCQ(A) {
    return [90, Oc0.node(A)];
  }
  jc0.filenameIsInApp = Oc0.filenameIsInApp;
  jc0.createStackParser = Tc0;
  jc0.getFunctionName = NCQ;
  jc0.nodeStackLineParser = LCQ;
  jc0.stackParserFromStackParserOptions = ECQ;
  jc0.stripSentryFramesAndReverse = Pc0;
});
var YT = U((yc0) => {
  Object.defineProperty(yc0, "__esModule", { value: !0 });
  var SCQ = PN(),
    yCQ = fw(),
    kCQ = uK1(),
    $i = {},
    Sc0 = {};
  function _CQ(A, B) {
    (($i[A] = $i[A] || []), $i[A].push(B));
  }
  function xCQ() {
    Object.keys($i).forEach((A) => {
      $i[A] = void 0;
    });
  }
  function vCQ(A, B) {
    if (!Sc0[A]) (B(), (Sc0[A] = !0));
  }
  function bCQ(A, B) {
    let Q = A && $i[A];
    if (!Q) return;
    for (let Z of Q)
      try {
        Z(B);
      } catch (G) {
        SCQ.DEBUG_BUILD &&
          yCQ.logger.error(
            `Error while triggering instrumentation handler.
Type: ${A}
Name: ${kCQ.getFunctionName(Z)}
Error:`,
            G,
          );
      }
  }
  yc0.addHandler = _CQ;
  yc0.maybeInstrument = vCQ;
  yc0.resetInstrumentationHandlers = xCQ;
  yc0.triggerHandlers = bCQ;
});
var Ni1 = U((kc0) => {
  Object.defineProperty(kc0, "__esModule", { value: !0 });
  var qi1 = fw(),
    mCQ = RC(),
    mK1 = YF(),
    Ei1 = YT();
  function dCQ(A) {
    (Ei1.addHandler("console", A), Ei1.maybeInstrument("console", cCQ));
  }
  function cCQ() {
    if (!("console" in mK1.GLOBAL_OBJ)) return;
    qi1.CONSOLE_LEVELS.forEach(function (A) {
      if (!(A in mK1.GLOBAL_OBJ.console)) return;
      mCQ.fill(mK1.GLOBAL_OBJ.console, A, function (B) {
        return (
          (qi1.originalConsoleMethods[A] = B),
          function (...Q) {
            let Z = { args: Q, level: A };
            Ei1.triggerHandlers("console", Z);
            let G = qi1.originalConsoleMethods[A];
            G && G.apply(mK1.GLOBAL_OBJ.console, Q);
          }
        );
      });
    });
  }
  kc0.addConsoleInstrumentationHandler = dCQ;
});
var bQ1 = U((xc0) => {
  Object.defineProperty(xc0, "__esModule", { value: !0 });
  var pCQ = RC(),
    Li1 = xQ1(),
    iCQ = YF();
  function nCQ() {
    let A = iCQ.GLOBAL_OBJ,
      B = A.crypto || A.msCrypto,
      Q = () => Math.random() * 16;
    try {
      if (B && B.randomUUID) return B.randomUUID().replace(/-/g, "");
      if (B && B.getRandomValues)
        Q = () => {
          let Z = new Uint8Array(1);
          return (B.getRandomValues(Z), Z[0]);
        };
    } catch (Z) {}
    return ([1e7] + 1000 + 4000 + 8000 + 100000000000).replace(/[018]/g, (Z) =>
      (Z ^ ((Q() & 15) >> (Z / 4))).toString(16),
    );
  }
  function _c0(A) {
    return A.exception && A.exception.values ? A.exception.values[0] : void 0;
  }
  function aCQ(A) {
    let { message: B, event_id: Q } = A;
    if (B) return B;
    let Z = _c0(A);
    if (Z) {
      if (Z.type && Z.value) return `${Z.type}: ${Z.value}`;
      return Z.type || Z.value || Q || "<unknown>";
    }
    return Q || "<unknown>";
  }
  function sCQ(A, B, Q) {
    let Z = (A.exception = A.exception || {}),
      G = (Z.values = Z.values || []),
      Y = (G[0] = G[0] || {});
    if (!Y.value) Y.value = B || "";
    if (!Y.type) Y.type = Q || "Error";
  }
  function rCQ(A, B) {
    let Q = _c0(A);
    if (!Q) return;
    let Z = { type: "generic", handled: !0 },
      G = Q.mechanism;
    if (((Q.mechanism = { ...Z, ...G, ...B }), B && "data" in B)) {
      let Y = { ...(G && G.data), ...B.data };
      Q.mechanism.data = Y;
    }
  }
  var oCQ =
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
  function tCQ(A) {
    let B = A.match(oCQ) || [],
      Q = parseInt(B[1], 10),
      Z = parseInt(B[2], 10),
      G = parseInt(B[3], 10);
    return {
      buildmetadata: B[5],
      major: isNaN(Q) ? void 0 : Q,
      minor: isNaN(Z) ? void 0 : Z,
      patch: isNaN(G) ? void 0 : G,
      prerelease: B[4],
    };
  }
  function eCQ(A, B, Q = 5) {
    if (B.lineno === void 0) return;
    let Z = A.length,
      G = Math.max(Math.min(Z - 1, B.lineno - 1), 0);
    ((B.pre_context = A.slice(Math.max(0, G - Q), G).map((Y) => Li1.snipLine(Y, 0))),
      (B.context_line = Li1.snipLine(A[Math.min(Z - 1, G)], B.colno || 0)),
      (B.post_context = A.slice(Math.min(G + 1, Z), G + 1 + Q).map((Y) => Li1.snipLine(Y, 0))));
  }
  function AUQ(A) {
    if (A && A.__sentry_captured__) return !0;
    try {
      pCQ.addNonEnumerableProperty(A, "__sentry_captured__", !0);
    } catch (B) {}
    return !1;
  }
  function BUQ(A) {
    return Array.isArray(A) ? A : [A];
  }
  xc0.addContextToFrame = eCQ;
  xc0.addExceptionMechanism = rCQ;
  xc0.addExceptionTypeValue = sCQ;
  xc0.arrayify = BUQ;
  xc0.checkOrSetAlreadyCaught = AUQ;
  xc0.getEventDescription = aCQ;
  xc0.parseSemver = tCQ;
  xc0.uuid4 = nCQ;
});
var Ti1 = U((hc0) => {
  Object.defineProperty(hc0, "__esModule", { value: !0 });
  var FUQ = bQ1(),
    dK1 = RC(),
    VUQ = YF(),
    Mi1 = YT(),
    wi = VUQ.GLOBAL_OBJ,
    KUQ = 1000,
    vc0,
    Oi1,
    Ri1;
  function HUQ(A) {
    (Mi1.addHandler("dom", A), Mi1.maybeInstrument("dom", fc0));
  }
  function fc0() {
    if (!wi.document) return;
    let A = Mi1.triggerHandlers.bind(null, "dom"),
      B = bc0(A, !0);
    (wi.document.addEventListener("click", B, !1),
      wi.document.addEventListener("keypress", B, !1),
      ["EventTarget", "Node"].forEach((Q) => {
        let Z = wi[Q] && wi[Q].prototype;
        if (!Z || !Z.hasOwnProperty || !Z.hasOwnProperty("addEventListener")) return;
        (dK1.fill(Z, "addEventListener", function (G) {
          return function (Y, I, W) {
            if (Y === "click" || Y == "keypress")
              try {
                let J = this,
                  X = (J.__sentry_instrumentation_handlers__ = J.__sentry_instrumentation_handlers__ || {}),
                  F = (X[Y] = X[Y] || { refCount: 0 });
                if (!F.handler) {
                  let V = bc0(A);
                  ((F.handler = V), G.call(this, Y, V, W));
                }
                F.refCount++;
              } catch (J) {}
            return G.call(this, Y, I, W);
          };
        }),
          dK1.fill(Z, "removeEventListener", function (G) {
            return function (Y, I, W) {
              if (Y === "click" || Y == "keypress")
                try {
                  let J = this,
                    X = J.__sentry_instrumentation_handlers__ || {},
                    F = X[Y];
                  if (F) {
                    if ((F.refCount--, F.refCount <= 0))
                      (G.call(this, Y, F.handler, W), (F.handler = void 0), delete X[Y]);
                    if (Object.keys(X).length === 0) delete J.__sentry_instrumentation_handlers__;
                  }
                } catch (J) {}
              return G.call(this, Y, I, W);
            };
          }));
      }));
  }
  function zUQ(A) {
    if (A.type !== Oi1) return !1;
    try {
      if (!A.target || A.target._sentryId !== Ri1) return !1;
    } catch (B) {}
    return !0;
  }
  function DUQ(A, B) {
    if (A !== "keypress") return !1;
    if (!B || !B.tagName) return !0;
    if (B.tagName === "INPUT" || B.tagName === "TEXTAREA" || B.isContentEditable) return !1;
    return !0;
  }
  function bc0(A, B = !1) {
    return (Q) => {
      if (!Q || Q._sentryCaptured) return;
      let Z = CUQ(Q);
      if (DUQ(Q.type, Z)) return;
      if ((dK1.addNonEnumerableProperty(Q, "_sentryCaptured", !0), Z && !Z._sentryId))
        dK1.addNonEnumerableProperty(Z, "_sentryId", FUQ.uuid4());
      let G = Q.type === "keypress" ? "input" : Q.type;
      if (!zUQ(Q)) (A({ event: Q, name: G, global: B }), (Oi1 = Q.type), (Ri1 = Z ? Z._sentryId : void 0));
      (clearTimeout(vc0),
        (vc0 = wi.setTimeout(() => {
          ((Ri1 = void 0), (Oi1 = void 0));
        }, KUQ)));
    };
  }
  function CUQ(A) {
    try {
      return A.target;
    } catch (B) {
      return null;
    }
  }
  hc0.addClickKeypressInstrumentationHandler = HUQ;
  hc0.instrumentDOM = fc0;
});
var Si1 = U((gc0) => {
  Object.defineProperty(gc0, "__esModule", { value: !0 });
  var wUQ = PN(),
    qUQ = fw(),
    EUQ = YF(),
    cK1 = EUQ.getGlobalObject();
  function NUQ() {
    try {
      return (new ErrorEvent(""), !0);
    } catch (A) {
      return !1;
    }
  }
  function LUQ() {
    try {
      return (new DOMError(""), !0);
    } catch (A) {
      return !1;
    }
  }
  function MUQ() {
    try {
      return (new DOMException(""), !0);
    } catch (A) {
      return !1;
    }
  }
  function ji1() {
    if (!("fetch" in cK1)) return !1;
    try {
      return (new Request("http://www.example.com"), !0);
    } catch (A) {
      return !1;
    }
  }
  function Pi1(A) {
    return A && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(A.toString());
  }
  function OUQ() {
    if (typeof EdgeRuntime === "string") return !0;
    if (!ji1()) return !1;
    if (Pi1(cK1.fetch)) return !0;
    let A = !1,
      B = cK1.document;
    if (B && typeof B.createElement === "function")
      try {
        let Q = B.createElement("iframe");
        if (((Q.hidden = !0), B.head.appendChild(Q), Q.contentWindow && Q.contentWindow.fetch))
          A = Pi1(Q.contentWindow.fetch);
        B.head.removeChild(Q);
      } catch (Q) {
        wUQ.DEBUG_BUILD &&
          qUQ.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", Q);
      }
    return A;
  }
  function RUQ() {
    return "ReportingObserver" in cK1;
  }
  function TUQ() {
    if (!ji1()) return !1;
    try {
      return (new Request("_", { referrerPolicy: "origin" }), !0);
    } catch (A) {
      return !1;
    }
  }
  gc0.isNativeFetch = Pi1;
  gc0.supportsDOMError = LUQ;
  gc0.supportsDOMException = MUQ;
  gc0.supportsErrorEvent = NUQ;
  gc0.supportsFetch = ji1;
  gc0.supportsNativeFetch = OUQ;
  gc0.supportsReferrerPolicy = TUQ;
  gc0.supportsReportingObserver = RUQ;
});
var ki1 = U((cc0) => {
  Object.defineProperty(cc0, "__esModule", { value: !0 });
  var bUQ = RC(),
    fUQ = Si1(),
    uc0 = YF(),
    fQ1 = YT();
  function hUQ(A) {
    (fQ1.addHandler("fetch", A), fQ1.maybeInstrument("fetch", gUQ));
  }
  function gUQ() {
    if (!fUQ.supportsNativeFetch()) return;
    bUQ.fill(uc0.GLOBAL_OBJ, "fetch", function (A) {
      return function (...B) {
        let { method: Q, url: Z } = dc0(B),
          G = { args: B, fetchData: { method: Q, url: Z }, startTimestamp: Date.now() };
        return (
          fQ1.triggerHandlers("fetch", { ...G }),
          A.apply(uc0.GLOBAL_OBJ, B).then(
            (Y) => {
              let I = { ...G, endTimestamp: Date.now(), response: Y };
              return (fQ1.triggerHandlers("fetch", I), Y);
            },
            (Y) => {
              let I = { ...G, endTimestamp: Date.now(), error: Y };
              throw (fQ1.triggerHandlers("fetch", I), Y);
            },
          )
        );
      };
    });
  }
  function yi1(A, B) {
    return !!A && typeof A === "object" && !!A[B];
  }
  function mc0(A) {
    if (typeof A === "string") return A;
    if (!A) return "";
    if (yi1(A, "url")) return A.url;
    if (A.toString) return A.toString();
    return "";
  }
  function dc0(A) {
    if (A.length === 0) return { method: "GET", url: "" };
    if (A.length === 2) {
      let [Q, Z] = A;
      return { url: mc0(Q), method: yi1(Z, "method") ? String(Z.method).toUpperCase() : "GET" };
    }
    let B = A[0];
    return { url: mc0(B), method: yi1(B, "method") ? String(B.method).toUpperCase() : "GET" };
  }
  cc0.addFetchInstrumentationHandler = hUQ;
  cc0.parseFetchArgs = dc0;
});
var vi1 = U((lc0) => {
  Object.defineProperty(lc0, "__esModule", { value: !0 });
  var _i1 = YF(),
    xi1 = YT(),
    lK1 = null;
  function dUQ(A) {
    (xi1.addHandler("error", A), xi1.maybeInstrument("error", cUQ));
  }
  function cUQ() {
    ((lK1 = _i1.GLOBAL_OBJ.onerror),
      (_i1.GLOBAL_OBJ.onerror = function (A, B, Q, Z, G) {
        let Y = { column: Z, error: G, line: Q, msg: A, url: B };
        if ((xi1.triggerHandlers("error", Y), lK1 && !lK1.__SENTRY_LOADER__)) return lK1.apply(this, arguments);
        return !1;
      }),
      (_i1.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0));
  }
  lc0.addGlobalErrorInstrumentationHandler = dUQ;
});
var hi1 = U((pc0) => {
  Object.defineProperty(pc0, "__esModule", { value: !0 });
  var bi1 = YF(),
    fi1 = YT(),
    pK1 = null;
  function pUQ(A) {
    (fi1.addHandler("unhandledrejection", A), fi1.maybeInstrument("unhandledrejection", iUQ));
  }
  function iUQ() {
    ((pK1 = bi1.GLOBAL_OBJ.onunhandledrejection),
      (bi1.GLOBAL_OBJ.onunhandledrejection = function (A) {
        let B = A;
        if ((fi1.triggerHandlers("unhandledrejection", B), pK1 && !pK1.__SENTRY_LOADER__))
          return pK1.apply(this, arguments);
        return !0;
      }),
      (bi1.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
  }
  pc0.addGlobalUnhandledRejectionInstrumentationHandler = pUQ;
});
var gi1 = U((ic0) => {
  Object.defineProperty(ic0, "__esModule", { value: !0 });
  var aUQ = YF(),
    iK1 = aUQ.getGlobalObject();
  function sUQ() {
    let A = iK1.chrome,
      B = A && A.app && A.app.runtime,
      Q = "history" in iK1 && !!iK1.history.pushState && !!iK1.history.replaceState;
    return !B && Q;
  }
  ic0.supportsHistory = sUQ;
});
var ui1 = U((ac0) => {
  Object.defineProperty(ac0, "__esModule", { value: !0 });
  var nc0 = RC();
  PN();
  fw();
  var oUQ = YF(),
    tUQ = gi1(),
    aK1 = YT(),
    hQ1 = oUQ.GLOBAL_OBJ,
    nK1;
  function eUQ(A) {
    (aK1.addHandler("history", A), aK1.maybeInstrument("history", A$Q));
  }
  function A$Q() {
    if (!tUQ.supportsHistory()) return;
    let A = hQ1.onpopstate;
    hQ1.onpopstate = function (...Q) {
      let Z = hQ1.location.href,
        G = nK1;
      nK1 = Z;
      let Y = { from: G, to: Z };
      if ((aK1.triggerHandlers("history", Y), A))
        try {
          return A.apply(this, Q);
        } catch (I) {}
    };
    function B(Q) {
      return function (...Z) {
        let G = Z.length > 2 ? Z[2] : void 0;
        if (G) {
          let Y = nK1,
            I = String(G);
          nK1 = I;
          let W = { from: Y, to: I };
          aK1.triggerHandlers("history", W);
        }
        return Q.apply(this, Z);
      };
    }
    (nc0.fill(hQ1.history, "pushState", B), nc0.fill(hQ1.history, "replaceState", B));
  }
  ac0.addHistoryInstrumentationHandler = eUQ;
});
var mi1 = U((rc0) => {
  Object.defineProperty(rc0, "__esModule", { value: !0 });
  var rK1 = OC(),
    sK1 = RC(),
    Q$Q = YF(),
    oK1 = YT(),
    Z$Q = Q$Q.GLOBAL_OBJ,
    gQ1 = "__sentry_xhr_v3__";
  function G$Q(A) {
    (oK1.addHandler("xhr", A), oK1.maybeInstrument("xhr", sc0));
  }
  function sc0() {
    if (!Z$Q.XMLHttpRequest) return;
    let A = XMLHttpRequest.prototype;
    (sK1.fill(A, "open", function (B) {
      return function (...Q) {
        let Z = Date.now(),
          G = rK1.isString(Q[0]) ? Q[0].toUpperCase() : void 0,
          Y = Y$Q(Q[1]);
        if (!G || !Y) return B.apply(this, Q);
        if (((this[gQ1] = { method: G, url: Y, request_headers: {} }), G === "POST" && Y.match(/sentry_key/)))
          this.__sentry_own_request__ = !0;
        let I = () => {
          let W = this[gQ1];
          if (!W) return;
          if (this.readyState === 4) {
            try {
              W.status_code = this.status;
            } catch (X) {}
            let J = { args: [G, Y], endTimestamp: Date.now(), startTimestamp: Z, xhr: this };
            oK1.triggerHandlers("xhr", J);
          }
        };
        if ("onreadystatechange" in this && typeof this.onreadystatechange === "function")
          sK1.fill(this, "onreadystatechange", function (W) {
            return function (...J) {
              return (I(), W.apply(this, J));
            };
          });
        else this.addEventListener("readystatechange", I);
        return (
          sK1.fill(this, "setRequestHeader", function (W) {
            return function (...J) {
              let [X, F] = J,
                V = this[gQ1];
              if (V && rK1.isString(X) && rK1.isString(F)) V.request_headers[X.toLowerCase()] = F;
              return W.apply(this, J);
            };
          }),
          B.apply(this, Q)
        );
      };
    }),
      sK1.fill(A, "send", function (B) {
        return function (...Q) {
          let Z = this[gQ1];
          if (!Z) return B.apply(this, Q);
          if (Q[0] !== void 0) Z.body = Q[0];
          let G = { args: [Z.method, Z.url], startTimestamp: Date.now(), xhr: this };
          return (oK1.triggerHandlers("xhr", G), B.apply(this, Q));
        };
      }));
  }
  function Y$Q(A) {
    if (rK1.isString(A)) return A;
    try {
      return A.toString();
    } catch (B) {}
    return;
  }
  rc0.SENTRY_XHR_DATA_KEY = gQ1;
  rc0.addXhrInstrumentationHandler = G$Q;
  rc0.instrumentXHR = sc0;
});
var Gl0 = U((Zl0) => {
  Object.defineProperty(Zl0, "__esModule", { value: !0 });
  var X$Q = PN(),
    F$Q = fw(),
    oc0 = Ni1(),
    tc0 = Ti1(),
    ec0 = ki1(),
    Al0 = vi1(),
    Bl0 = hi1(),
    Ql0 = ui1(),
    di1 = mi1();
  function V$Q(A, B) {
    switch (A) {
      case "console":
        return oc0.addConsoleInstrumentationHandler(B);
      case "dom":
        return tc0.addClickKeypressInstrumentationHandler(B);
      case "xhr":
        return di1.addXhrInstrumentationHandler(B);
      case "fetch":
        return ec0.addFetchInstrumentationHandler(B);
      case "history":
        return Ql0.addHistoryInstrumentationHandler(B);
      case "error":
        return Al0.addGlobalErrorInstrumentationHandler(B);
      case "unhandledrejection":
        return Bl0.addGlobalUnhandledRejectionInstrumentationHandler(B);
      default:
        X$Q.DEBUG_BUILD && F$Q.logger.warn("unknown instrumentation type:", A);
    }
  }
  Zl0.addConsoleInstrumentationHandler = oc0.addConsoleInstrumentationHandler;
  Zl0.addClickKeypressInstrumentationHandler = tc0.addClickKeypressInstrumentationHandler;
  Zl0.addFetchInstrumentationHandler = ec0.addFetchInstrumentationHandler;
  Zl0.addGlobalErrorInstrumentationHandler = Al0.addGlobalErrorInstrumentationHandler;
  Zl0.addGlobalUnhandledRejectionInstrumentationHandler = Bl0.addGlobalUnhandledRejectionInstrumentationHandler;
  Zl0.addHistoryInstrumentationHandler = Ql0.addHistoryInstrumentationHandler;
  Zl0.SENTRY_XHR_DATA_KEY = di1.SENTRY_XHR_DATA_KEY;
  Zl0.addXhrInstrumentationHandler = di1.addXhrInstrumentationHandler;
  Zl0.addInstrumentationHandler = V$Q;
});
var ci1 = U((Yl0) => {
  Object.defineProperty(Yl0, "__esModule", { value: !0 });
  function E$Q() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
  }
  function N$Q() {
    return "npm";
  }
  Yl0.getSDKSource = N$Q;
  Yl0.isBrowserBundle = E$Q;
});
var li1 = U((Il0, eK1) => {
  Object.defineProperty(Il0, "__esModule", { value: !0 });
  var O$Q = ci1();
  function R$Q() {
    return (
      !O$Q.isBrowserBundle() &&
      Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]"
    );
  }
  function tK1(A, B) {
    return A.require(B);
  }
  function T$Q(A) {
    let B;
    try {
      B = tK1(eK1, A);
    } catch (Q) {}
    try {
      let { cwd: Q } = tK1(eK1, "process");
      B = tK1(eK1, `${Q()}/node_modules/${A}`);
    } catch (Q) {}
    return B;
  }
  Il0.dynamicRequire = tK1;
  Il0.isNodeEnv = R$Q;
  Il0.loadModule = T$Q;
});
var Xl0 = U((Jl0) => {
  Object.defineProperty(Jl0, "__esModule", { value: !0 });
  var y$Q = li1(),
    Wl0 = YF();
  function k$Q() {
    return typeof window !== "undefined" && (!y$Q.isNodeEnv() || _$Q());
  }
  function _$Q() {
    return Wl0.GLOBAL_OBJ.process !== void 0 && Wl0.GLOBAL_OBJ.process.type === "renderer";
  }
  Jl0.isBrowser = k$Q;
});
var pi1 = U((Fl0) => {
  Object.defineProperty(Fl0, "__esModule", { value: !0 });
  function v$Q() {
    let A = typeof WeakSet === "function",
      B = A ? new WeakSet() : [];
    function Q(G) {
      if (A) {
        if (B.has(G)) return !0;
        return (B.add(G), !1);
      }
      for (let Y = 0; Y < B.length; Y++) if (B[Y] === G) return !0;
      return (B.push(G), !1);
    }
    function Z(G) {
      if (A) B.delete(G);
      else
        for (let Y = 0; Y < B.length; Y++)
          if (B[Y] === G) {
            B.splice(Y, 1);
            break;
          }
    }
    return [Q, Z];
  }
  Fl0.memoBuilder = v$Q;
});
var uQ1 = U((Hl0) => {
  Object.defineProperty(Hl0, "__esModule", { value: !0 });
  var ii1 = OC(),
    f$Q = pi1(),
    h$Q = RC(),
    g$Q = uK1();
  function Vl0(A, B = 100, Q = 1 / 0) {
    try {
      return AH1("", A, B, Q);
    } catch (Z) {
      return { ERROR: `**non-serializable** (${Z})` };
    }
  }
  function Kl0(A, B = 3, Q = 102400) {
    let Z = Vl0(A, B);
    if (c$Q(Z) > Q) return Kl0(A, B - 1, Q);
    return Z;
  }
  function AH1(A, B, Q = 1 / 0, Z = 1 / 0, G = f$Q.memoBuilder()) {
    let [Y, I] = G;
    if (B == null || (["number", "boolean", "string"].includes(typeof B) && !ii1.isNaN(B))) return B;
    let W = u$Q(A, B);
    if (!W.startsWith("[object ")) return W;
    if (B.__sentry_skip_normalization__) return B;
    let J =
      typeof B.__sentry_override_normalization_depth__ === "number" ? B.__sentry_override_normalization_depth__ : Q;
    if (J === 0) return W.replace("object ", "");
    if (Y(B)) return "[Circular ~]";
    let X = B;
    if (X && typeof X.toJSON === "function")
      try {
        let H = X.toJSON();
        return AH1("", H, J - 1, Z, G);
      } catch (H) {}
    let F = Array.isArray(B) ? [] : {},
      V = 0,
      K = h$Q.convertToPlainObject(B);
    for (let H in K) {
      if (!Object.prototype.hasOwnProperty.call(K, H)) continue;
      if (V >= Z) {
        F[H] = "[MaxProperties ~]";
        break;
      }
      let z = K[H];
      ((F[H] = AH1(H, z, J - 1, Z, G)), V++);
    }
    return (I(B), F);
  }
  function u$Q(A, B) {
    try {
      if (A === "domain" && B && typeof B === "object" && B._events) return "[Domain]";
      if (A === "domainEmitter") return "[DomainEmitter]";
      if (typeof global !== "undefined" && B === global) return "[Global]";
      if (typeof window !== "undefined" && B === window) return "[Window]";
      if (typeof document !== "undefined" && B === document) return "[Document]";
      if (ii1.isVueViewModel(B)) return "[VueViewModel]";
      if (ii1.isSyntheticEvent(B)) return "[SyntheticEvent]";
      if (typeof B === "number" && B !== B) return "[NaN]";
      if (typeof B === "function") return `[Function: ${g$Q.getFunctionName(B)}]`;
      if (typeof B === "symbol") return `[${String(B)}]`;
      if (typeof B === "bigint") return `[BigInt: ${String(B)}]`;
      let Q = m$Q(B);
      if (/^HTML(\w*)Element$/.test(Q)) return `[HTMLElement: ${Q}]`;
      return `[object ${Q}]`;
    } catch (Q) {
      return `**non-serializable** (${Q})`;
    }
  }
  function m$Q(A) {
    let B = Object.getPrototypeOf(A);
    return B ? B.constructor.name : "null prototype";
  }
  function d$Q(A) {
    return ~-encodeURI(A).split(/%..|./).length;
  }
  function c$Q(A) {
    return d$Q(JSON.stringify(A));
  }
  function l$Q(A, B) {
    let Q = B.replace(/\\/g, "/").replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"),
      Z = A;
    try {
      Z = decodeURI(A);
    } catch (G) {}
    return Z.replace(/\\/g, "/")
      .replace(/webpack:\/?/g, "")
      .replace(new RegExp(`(file://)?/*${Q}/*`, "ig"), "app:///");
  }
  Hl0.normalize = Vl0;
  Hl0.normalizeToSize = Kl0;
  Hl0.normalizeUrlToBase = l$Q;
  Hl0.walk = AH1;
});
var ql0 = U((wl0) => {
  Object.defineProperty(wl0, "__esModule", { value: !0 });
  function Dl0(A, B) {
    let Q = 0;
    for (let Z = A.length - 1; Z >= 0; Z--) {
      let G = A[Z];
      if (G === ".") A.splice(Z, 1);
      else if (G === "..") (A.splice(Z, 1), Q++);
      else if (Q) (A.splice(Z, 1), Q--);
    }
    if (B) for (; Q--; Q) A.unshift("..");
    return A;
  }
  var s$Q = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
  function Cl0(A) {
    let B = A.length > 1024 ? `<truncated>${A.slice(-1024)}` : A,
      Q = s$Q.exec(B);
    return Q ? Q.slice(1) : [];
  }
  function ni1(...A) {
    let B = "",
      Q = !1;
    for (let Z = A.length - 1; Z >= -1 && !Q; Z--) {
      let G = Z >= 0 ? A[Z] : "/";
      if (!G) continue;
      ((B = `${G}/${B}`), (Q = G.charAt(0) === "/"));
    }
    return (
      (B = Dl0(
        B.split("/").filter((Z) => !!Z),
        !Q,
      ).join("/")),
      (Q ? "/" : "") + B || "."
    );
  }
  function zl0(A) {
    let B = 0;
    for (; B < A.length; B++) if (A[B] !== "") break;
    let Q = A.length - 1;
    for (; Q >= 0; Q--) if (A[Q] !== "") break;
    if (B > Q) return [];
    return A.slice(B, Q - B + 1);
  }
  function r$Q(A, B) {
    ((A = ni1(A).slice(1)), (B = ni1(B).slice(1)));
    let Q = zl0(A.split("/")),
      Z = zl0(B.split("/")),
      G = Math.min(Q.length, Z.length),
      Y = G;
    for (let W = 0; W < G; W++)
      if (Q[W] !== Z[W]) {
        Y = W;
        break;
      }
    let I = [];
    for (let W = Y; W < Q.length; W++) I.push("..");
    return ((I = I.concat(Z.slice(Y))), I.join("/"));
  }
  function Ul0(A) {
    let B = $l0(A),
      Q = A.slice(-1) === "/",
      Z = Dl0(
        A.split("/").filter((G) => !!G),
        !B,
      ).join("/");
    if (!Z && !B) Z = ".";
    if (Z && Q) Z += "/";
    return (B ? "/" : "") + Z;
  }
  function $l0(A) {
    return A.charAt(0) === "/";
  }
  function o$Q(...A) {
    return Ul0(A.join("/"));
  }
  function t$Q(A) {
    let B = Cl0(A),
      Q = B[0],
      Z = B[1];
    if (!Q && !Z) return ".";
    if (Z) Z = Z.slice(0, Z.length - 1);
    return Q + Z;
  }
  function e$Q(A, B) {
    let Q = Cl0(A)[2];
    if (B && Q.slice(B.length * -1) === B) Q = Q.slice(0, Q.length - B.length);
    return Q;
  }
  wl0.basename = e$Q;
  wl0.dirname = t$Q;
  wl0.isAbsolute = $l0;
  wl0.join = o$Q;
  wl0.normalizePath = Ul0;
  wl0.relative = r$Q;
  wl0.resolve = ni1;
});
var ai1 = U((El0) => {
  Object.defineProperty(El0, "__esModule", { value: !0 });
  var WwQ = OC(),
    IT;
  (function (A) {
    A[(A.PENDING = 0)] = "PENDING";
    let Q = 1;
    A[(A.RESOLVED = Q)] = "RESOLVED";
    let Z = 2;
    A[(A.REJECTED = Z)] = "REJECTED";
  })(IT || (IT = {}));
  function JwQ(A) {
    return new jN((B) => {
      B(A);
    });
  }
  function XwQ(A) {
    return new jN((B, Q) => {
      Q(A);
    });
  }
  class jN {
    constructor(A) {
      (jN.prototype.__init.call(this),
        jN.prototype.__init2.call(this),
        jN.prototype.__init3.call(this),
        jN.prototype.__init4.call(this),
        (this._state = IT.PENDING),
        (this._handlers = []));
      try {
        A(this._resolve, this._reject);
      } catch (B) {
        this._reject(B);
      }
    }
    then(A, B) {
      return new jN((Q, Z) => {
        (this._handlers.push([
          !1,
          (G) => {
            if (!A) Q(G);
            else
              try {
                Q(A(G));
              } catch (Y) {
                Z(Y);
              }
          },
          (G) => {
            if (!B) Z(G);
            else
              try {
                Q(B(G));
              } catch (Y) {
                Z(Y);
              }
          },
        ]),
          this._executeHandlers());
      });
    }
    catch(A) {
      return this.then((B) => B, A);
    }
    finally(A) {
      return new jN((B, Q) => {
        let Z, G;
        return this.then(
          (Y) => {
            if (((G = !1), (Z = Y), A)) A();
          },
          (Y) => {
            if (((G = !0), (Z = Y), A)) A();
          },
        ).then(() => {
          if (G) {
            Q(Z);
            return;
          }
          B(Z);
        });
      });
    }
    __init() {
      this._resolve = (A) => {
        this._setResult(IT.RESOLVED, A);
      };
    }
    __init2() {
      this._reject = (A) => {
        this._setResult(IT.REJECTED, A);
      };
    }
    __init3() {
      this._setResult = (A, B) => {
        if (this._state !== IT.PENDING) return;
        if (WwQ.isThenable(B)) {
          B.then(this._resolve, this._reject);
          return;
        }
        ((this._state = A), (this._value = B), this._executeHandlers());
      };
    }
    __init4() {
      this._executeHandlers = () => {
        if (this._state === IT.PENDING) return;
        let A = this._handlers.slice();
        ((this._handlers = []),
          A.forEach((B) => {
            if (B[0]) return;
            if (this._state === IT.RESOLVED) B[1](this._value);
            if (this._state === IT.REJECTED) B[2](this._value);
            B[0] = !0;
          }));
      };
    }
  }
  El0.SyncPromise = jN;
  El0.rejectedSyncPromise = XwQ;
  El0.resolvedSyncPromise = JwQ;
});
var Ll0 = U((Nl0) => {
  Object.defineProperty(Nl0, "__esModule", { value: !0 });
  var HwQ = Ui1(),
    si1 = ai1();
  function zwQ(A) {
    let B = [];
    function Q() {
      return A === void 0 || B.length < A;
    }
    function Z(I) {
      return B.splice(B.indexOf(I), 1)[0];
    }
    function G(I) {
      if (!Q())
        return si1.rejectedSyncPromise(new HwQ.SentryError("Not adding Promise because buffer limit was reached."));
      let W = I();
      if (B.indexOf(W) === -1) B.push(W);
      return (W.then(() => Z(W)).then(null, () => Z(W).then(null, () => {})), W);
    }
    function Y(I) {
      return new si1.SyncPromise((W, J) => {
        let X = B.length;
        if (!X) return W(!0);
        let F = setTimeout(() => {
          if (I && I > 0) W(!1);
        }, I);
        B.forEach((V) => {
          si1.resolvedSyncPromise(V).then(() => {
            if (!--X) (clearTimeout(F), W(!0));
          }, J);
        });
      });
    }
    return { $: B, add: G, drain: Y };
  }
  Nl0.makePromiseBuffer = zwQ;
});
var Ol0 = U((Ml0) => {
  Object.defineProperty(Ml0, "__esModule", { value: !0 });
  function CwQ(A) {
    let B = {},
      Q = 0;
    while (Q < A.length) {
      let Z = A.indexOf("=", Q);
      if (Z === -1) break;
      let G = A.indexOf(";", Q);
      if (G === -1) G = A.length;
      else if (G < Z) {
        Q = A.lastIndexOf(";", Z - 1) + 1;
        continue;
      }
      let Y = A.slice(Q, Z).trim();
      if (B[Y] === void 0) {
        let I = A.slice(Z + 1, G).trim();
        if (I.charCodeAt(0) === 34) I = I.slice(1, -1);
        try {
          B[Y] = I.indexOf("%") !== -1 ? decodeURIComponent(I) : I;
        } catch (W) {
          B[Y] = I;
        }
      }
      Q = G + 1;
    }
    return B;
  }
  Ml0.parseCookie = CwQ;
});
var ri1 = U((Rl0) => {
  Object.defineProperty(Rl0, "__esModule", { value: !0 });
  function $wQ(A) {
    if (!A) return {};
    let B = A.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!B) return {};
    let Q = B[6] || "",
      Z = B[8] || "";
    return { host: B[4], path: B[5], protocol: B[2], search: Q, hash: Z, relative: B[5] + Q + Z };
  }
  function wwQ(A) {
    return A.split(/[\?#]/, 1)[0];
  }
  function qwQ(A) {
    return A.split(/\\?\//).filter((B) => B.length > 0 && B !== ",").length;
  }
  function EwQ(A) {
    let { protocol: B, host: Q, path: Z } = A,
      G =
        (Q &&
          Q.replace(/^.*@/, "[filtered]:[filtered]@")
            .replace(/(:80)$/, "")
            .replace(/(:443)$/, "")) ||
        "";
    return `${B ? `${B}://` : ""}${G}${Z}`;
  }
  Rl0.getNumberOfUrlSegments = qwQ;
  Rl0.getSanitizedUrlString = EwQ;
  Rl0.parseUrl = $wQ;
  Rl0.stripUrlQueryAndFragment = wwQ;
});
var kl0 = U((yl0) => {
  Object.defineProperty(yl0, "__esModule", { value: !0 });
  var RwQ = Ol0(),
    TwQ = PN(),
    Tl0 = OC(),
    PwQ = fw(),
    jwQ = uQ1(),
    SwQ = ri1(),
    ywQ = { ip: !1, request: !0, transaction: !0, user: !0 },
    kwQ = ["cookies", "data", "headers", "method", "query_string", "url"],
    Pl0 = ["id", "username", "email"];
  function _wQ(A, B, Q) {
    if (!A) return;
    if (!A.metadata.source || A.metadata.source === "url") {
      let [Z, G] = BH1(B, { path: !0, method: !0 });
      (A.updateName(Z), A.setMetadata({ source: G }));
    }
    if ((A.setAttribute("url", B.originalUrl || B.url), B.baseUrl)) A.setAttribute("baseUrl", B.baseUrl);
    A.setData("query", jl0(B, Q));
  }
  function BH1(A, B = {}) {
    let Q = A.method && A.method.toUpperCase(),
      Z = "",
      G = "url";
    if (B.customRoute || A.route)
      ((Z = B.customRoute || `${A.baseUrl || ""}${A.route && A.route.path}`), (G = "route"));
    else if (A.originalUrl || A.url) Z = SwQ.stripUrlQueryAndFragment(A.originalUrl || A.url || "");
    let Y = "";
    if (B.method && Q) Y += Q;
    if (B.method && B.path) Y += " ";
    if (B.path && Z) Y += Z;
    return [Y, G];
  }
  function xwQ(A, B) {
    switch (B) {
      case "path":
        return BH1(A, { path: !0 })[0];
      case "handler":
        return (A.route && A.route.stack && A.route.stack[0] && A.route.stack[0].name) || "<anonymous>";
      case "methodPath":
      default: {
        let Q = A._reconstructedRoute ? A._reconstructedRoute : void 0;
        return BH1(A, { path: !0, method: !0, customRoute: Q })[0];
      }
    }
  }
  function vwQ(A, B) {
    let Q = {};
    return (
      (Array.isArray(B) ? B : Pl0).forEach((G) => {
        if (A && G in A) Q[G] = A[G];
      }),
      Q
    );
  }
  function oi1(A, B) {
    let { include: Q = kwQ, deps: Z } = B || {},
      G = {},
      Y = A.headers || {},
      I = A.method,
      W = Y.host || A.hostname || A.host || "<no host>",
      J = A.protocol === "https" || (A.socket && A.socket.encrypted) ? "https" : "http",
      X = A.originalUrl || A.url || "",
      F = X.startsWith(J) ? X : `${J}://${W}${X}`;
    return (
      Q.forEach((V) => {
        switch (V) {
          case "headers": {
            if (((G.headers = Y), !Q.includes("cookies"))) delete G.headers.cookie;
            break;
          }
          case "method": {
            G.method = I;
            break;
          }
          case "url": {
            G.url = F;
            break;
          }
          case "cookies": {
            G.cookies = A.cookies || (Y.cookie && RwQ.parseCookie(Y.cookie)) || {};
            break;
          }
          case "query_string": {
            G.query_string = jl0(A, Z);
            break;
          }
          case "data": {
            if (I === "GET" || I === "HEAD") break;
            if (A.body !== void 0) G.data = Tl0.isString(A.body) ? A.body : JSON.stringify(jwQ.normalize(A.body));
            break;
          }
          default:
            if ({}.hasOwnProperty.call(A, V)) G[V] = A[V];
        }
      }),
      G
    );
  }
  function bwQ(A, B, Q) {
    let Z = { ...ywQ, ...(Q && Q.include) };
    if (Z.request) {
      let G = Array.isArray(Z.request)
        ? oi1(B, { include: Z.request, deps: Q && Q.deps })
        : oi1(B, { deps: Q && Q.deps });
      A.request = { ...A.request, ...G };
    }
    if (Z.user) {
      let G = B.user && Tl0.isPlainObject(B.user) ? vwQ(B.user, Z.user) : {};
      if (Object.keys(G).length) A.user = { ...A.user, ...G };
    }
    if (Z.ip) {
      let G = B.ip || (B.socket && B.socket.remoteAddress);
      if (G) A.user = { ...A.user, ip_address: G };
    }
    if (Z.transaction && !A.transaction) A.transaction = xwQ(B, Z.transaction);
    return A;
  }
  function jl0(A, B) {
    let Q = A.originalUrl || A.url || "";
    if (!Q) return;
    if (Q.startsWith("/")) Q = `http://dogs.are.great${Q}`;
    try {
      return (
        A.query ||
        (typeof URL !== "undefined" && new URL(Q).search.slice(1)) ||
        (B && B.url && B.url.parse(Q).query) ||
        void 0
      );
    } catch (Z) {
      return;
    }
  }
  function Sl0(A) {
    let B = {};
    try {
      A.forEach((Q, Z) => {
        if (typeof Q === "string") B[Z] = Q;
      });
    } catch (Q) {
      TwQ.DEBUG_BUILD &&
        PwQ.logger.warn(
          "Sentry failed extracting headers from a request object. If you see this, please file an issue.",
        );
    }
    return B;
  }
  function fwQ(A) {
    let B = Sl0(A.headers);
    return { method: A.method, url: A.url, headers: B };
  }
  yl0.DEFAULT_USER_INCLUDES = Pl0;
  yl0.addRequestDataToEvent = bwQ;
  yl0.addRequestDataToTransaction = _wQ;
  yl0.extractPathForTransaction = BH1;
  yl0.extractRequestData = oi1;
  yl0.winterCGHeadersToDict = Sl0;
  yl0.winterCGRequestToRequestData = fwQ;
});
var bl0 = U((vl0) => {
  Object.defineProperty(vl0, "__esModule", { value: !0 });
  var _l0 = ["fatal", "error", "warning", "log", "info", "debug"];
  function pwQ(A) {
    return xl0(A);
  }
  function xl0(A) {
    return A === "warn" ? "warning" : _l0.includes(A) ? A : "log";
  }
  vl0.severityFromString = pwQ;
  vl0.severityLevelFromString = xl0;
  vl0.validSeverityLevels = _l0;
});
var ti1 = U((ml0) => {
  Object.defineProperty(ml0, "__esModule", { value: !0 });
  var fl0 = YF(),
    hl0 = 1000;
  function gl0() {
    return Date.now() / hl0;
  }
  function swQ() {
    let { performance: A } = fl0.GLOBAL_OBJ;
    if (!A || !A.now) return gl0;
    let B = Date.now() - A.now(),
      Q = A.timeOrigin == null ? B : A.timeOrigin;
    return () => {
      return (Q + A.now()) / hl0;
    };
  }
  var ul0 = swQ(),
    rwQ = ul0;
  ml0._browserPerformanceTimeOriginMode = void 0;
  var owQ = (() => {
    let { performance: A } = fl0.GLOBAL_OBJ;
    if (!A || !A.now) {
      ml0._browserPerformanceTimeOriginMode = "none";
      return;
    }
    let B = 3600000,
      Q = A.now(),
      Z = Date.now(),
      G = A.timeOrigin ? Math.abs(A.timeOrigin + Q - Z) : B,
      Y = G < B,
      I = A.timing && A.timing.navigationStart,
      J = typeof I === "number" ? Math.abs(I + Q - Z) : B,
      X = J < B;
    if (Y || X)
      if (G <= J) return ((ml0._browserPerformanceTimeOriginMode = "timeOrigin"), A.timeOrigin);
      else return ((ml0._browserPerformanceTimeOriginMode = "navigationStart"), I);
    return ((ml0._browserPerformanceTimeOriginMode = "dateNow"), Z);
  })();
  ml0.browserPerformanceTimeOrigin = owQ;
  ml0.dateTimestampInSeconds = gl0;
  ml0.timestampInSeconds = ul0;
  ml0.timestampWithMs = rwQ;
});
var An1 = U((pl0) => {
  Object.defineProperty(pl0, "__esModule", { value: !0 });
  var QqQ = PN(),
    ZqQ = OC(),
    GqQ = fw(),
    YqQ = "baggage",
    ei1 = "sentry-",
    cl0 = /^sentry-/,
    ll0 = 8192;
  function IqQ(A) {
    if (!ZqQ.isString(A) && !Array.isArray(A)) return;
    let B = {};
    if (Array.isArray(A))
      B = A.reduce((Z, G) => {
        let Y = dl0(G);
        for (let I of Object.keys(Y)) Z[I] = Y[I];
        return Z;
      }, {});
    else {
      if (!A) return;
      B = dl0(A);
    }
    let Q = Object.entries(B).reduce((Z, [G, Y]) => {
      if (G.match(cl0)) {
        let I = G.slice(ei1.length);
        Z[I] = Y;
      }
      return Z;
    }, {});
    if (Object.keys(Q).length > 0) return Q;
    else return;
  }
  function WqQ(A) {
    if (!A) return;
    let B = Object.entries(A).reduce((Q, [Z, G]) => {
      if (G) Q[`${ei1}${Z}`] = G;
      return Q;
    }, {});
    return JqQ(B);
  }
  function dl0(A) {
    return A.split(",")
      .map((B) => B.split("=").map((Q) => decodeURIComponent(Q.trim())))
      .reduce((B, [Q, Z]) => {
        return ((B[Q] = Z), B);
      }, {});
  }
  function JqQ(A) {
    if (Object.keys(A).length === 0) return;
    return Object.entries(A).reduce((B, [Q, Z], G) => {
      let Y = `${encodeURIComponent(Q)}=${encodeURIComponent(Z)}`,
        I = G === 0 ? Y : `${B},${Y}`;
      if (I.length > ll0)
        return (
          QqQ.DEBUG_BUILD &&
            GqQ.logger.warn(
              `Not adding key: ${Q} with val: ${Z} to baggage header due to exceeding baggage size limits.`,
            ),