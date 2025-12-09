/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 1/14
 * Lines: 16490 - 17989 (1500 lines)
 * Original file: cli.js
 */

    Sq0._subscribeToVisiblityChanged = j_9;
    var S_9 = (A) => {
        if (A === hF1) return;
        hF1 = A, jq0.forEach((Q) => Q(A))
    };
    Sq0._notifyVisibilityChanged = S_9;
    (0, ZyA._addWindowEventListenerSafe)("focus", () => {
        uF1 = !1, Sq0._notifyVisibilityChanged(IyA)
    });
    (0, ZyA._addWindowEventListenerSafe)("blur", () => Sq0._notifyVisibilityChanged(gF1));
    (0, ZyA._addWindowEventListenerSafe)("beforeunload", () => {
        uF1 = !0, Sq0._notifyVisibilityChanged(gF1)
    });
    (0, ZyA._addDocumentEventListenerSafe)("visibilitychange", () => {
        Sq0._notifyVisibilityChanged(document.visibilityState === "visible" ? IyA : gF1)
    })
});
var dF1 = U((L2A) => {
    var q2A = L2A && L2A.__awaiter || function(A, Q, B, G) {
        function Z(I) {
            return I instanceof B ? I : new B(function(Y) {
                Y(I)
            })
        }
        return new(B || (B = Promise))(function(I, Y) {
            function J(F) {
                try {
                    X(G.next(F))
                } catch (V) {
                    Y(V)
                }
            }

            function W(F) {
                try {
                    X(G.throw(F))
                } catch (V) {
                    Y(V)
                }
            }

            function X(F) {
                F.done ? I(F.value) : Z(F.value).then(J, W)
            }
            X((G = G.apply(A, Q || [])).next())
        })
    };
    Object.defineProperty(L2A, "__esModule", {
        value: !0
    });
    L2A.EventLogger = void 0;
    var x_9 = yVA(),
        v_9 = $2A(),
        bVA = FH(),
        _q0 = xVA(),
        mF1 = _s(),
        b_9 = xF1(),
        N2A = nx(),
        f_9 = fF1(),
        kq0 = YyA(),
        h_9 = 100,
        g_9 = 1e4,
        u_9 = 1000,
        m_9 = 600000,
        d_9 = 500,
        yq0 = 200,
        fVA = {},
        JyA = {
            Startup: "startup",
            GainedFocus: "gained_focus"
        };
    class ks {
        static _safeFlushAndForget(A) {
            var Q;
            (Q = fVA[A]) === null || Q === void 0 || Q.flush().catch(() => {})
        }
        static _safeRetryFailedLogs(A) {
            var Q;
            (Q = fVA[A]) === null || Q === void 0 || Q._retryFailedLogs(JyA.GainedFocus)
        }
        constructor(A, Q, B, G) {
            var Z;
            this._sdkKey = A, this._emitter = Q, this._network = B, this._options = G, this._queue = [], this._lastExposureTimeMap = {}, this._nonExposedChecks = {}, this._hasRunQuickFlush = !1, this._creationTime = Date.now(), this._isLoggingDisabled = (G === null || G === void 0 ? void 0 : G.disableLogging) === !0, this._maxQueueSize = (Z = G === null || G === void 0 ? void 0 : G.loggingBufferMaxSize) !== null && Z !== void 0 ? Z : h_9;
            let I = G === null || G === void 0 ? void 0 : G.networkConfig;
            this._logEventUrlConfig = new f_9.UrlConfiguration(_q0.Endpoint._rgstr, I === null || I === void 0 ? void 0 : I.logEventUrl, I === null || I === void 0 ? void 0 : I.api, I === null || I === void 0 ? void 0 : I.logEventFallbackUrls)
        }
        setLoggingDisabled(A) {
            this._isLoggingDisabled = A
        }
        enqueue(A) {
            if (!this._shouldLogEvent(A)) return;
            if (this._normalizeAndAppendEvent(A), this._quickFlushIfNeeded(), this._queue.length > this._maxQueueSize) ks._safeFlushAndForget(this._sdkKey)
        }
        incrementNonExposureCount(A) {
            var Q;
            let B = (Q = this._nonExposedChecks[A]) !== null && Q !== void 0 ? Q : 0;
            this._nonExposedChecks[A] = B + 1
        }
        reset() {
            this._lastExposureTimeMap = {}
        }
        start() {
            if ((0, mF1._isServerEnv)()) return;
            fVA[this._sdkKey] = this, (0, kq0._subscribeToVisiblityChanged)((A) => {
                if (A === "background") ks._safeFlushAndForget(this._sdkKey);
                else if (A === "foreground") ks._safeRetryFailedLogs(this._sdkKey)
            }), this._retryFailedLogs(JyA.Startup), this._startBackgroundFlushInterval()
        }
        stop() {
            return q2A(this, void 0, void 0, function*() {
                if (this._flushIntervalId) clearInterval(this._flushIntervalId), this._flushIntervalId = null;
                delete fVA[this._sdkKey], yield this.flush()
            })
        }
        flush() {
            return q2A(this, void 0, void 0, function*() {
                if (this._appendAndResetNonExposedChecks(), this._queue.length === 0) return;
                let A = this._queue;
                this._queue = [], yield this._sendEvents(A)
            })
        }
        _quickFlushIfNeeded() {
            if (this._hasRunQuickFlush) return;
            if (this._hasRunQuickFlush = !0, Date.now() - this._creationTime > yq0) return;
            setTimeout(() => ks._safeFlushAndForget(this._sdkKey), yq0)
        }
        _shouldLogEvent(A) {
            if ((0, mF1._isServerEnv)()) return !1;
            if (!(0, b_9._isExposureEvent)(A)) return !0;
            let Q = A.user ? A.user : {
                    statsigEnvironment: void 0
                },
                B = (0, x_9._getUserStorageKey)(this._sdkKey, Q),
                G = A.metadata ? A.metadata : {},
                Z = [A.eventName, B, G.gate, G.config, G.ruleID, G.allocatedExperiment, G.parameterName, String(G.isExplicitParameter), G.reason].join("|"),
                I = this._lastExposureTimeMap[Z],
                Y = Date.now();
            if (I && Y - I < m_9) return !1;
            if (Object.keys(this._lastExposureTimeMap).length > u_9) this._lastExposureTimeMap = {};
            return this._lastExposureTimeMap[Z] = Y, !0
        }
        _sendEvents(A) {
            var Q, B;
            return q2A(this, void 0, void 0, function*() {
                if (this._isLoggingDisabled) return this._saveFailedLogsToStorage(A), !1;
                try {
                    let Z = (0, kq0._isUnloading)() && this._network.isBeaconSupported() && ((B = (Q = this._options) === null || Q === void 0 ? void 0 : Q.networkConfig) === null || B === void 0 ? void 0 : B.networkOverrideFunc) == null;
                    if (this._emitter({
                            name: "pre_logs_flushed",
                            events: A
                        }), (Z ? yield this._sendEventsViaBeacon(A): yield this._sendEventsViaPost(A)).success) return this._emitter({
                        name: "logs_flushed",
                        events: A
                    }), !0;
                    else return bVA.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(A), !1
                } catch (G) {
                    return bVA.Log.warn("Failed to flush events."), !1
                }
            })
        }
        _sendEventsViaPost(A) {
            var Q;
            return q2A(this, void 0, void 0, function*() {
                let B = yield this._network.post(this._getRequestData(A)), G = (Q = B === null || B === void 0 ? void 0 : B.code) !== null && Q !== void 0 ? Q : -1;
                return {
                    success: G >= 200 && G < 300
                }
            })
        }
        _sendEventsViaBeacon(A) {
            return q2A(this, void 0, void 0, function*() {
                return {
                    success: yield this._network.beacon(this._getRequestData(A))
                }
            })
        }
        _getRequestData(A) {
            return {
                sdkKey: this._sdkKey,
                data: {
                    events: A
                },
                urlConfig: this._logEventUrlConfig,
                retries: 3,
                isCompressable: !0,
                params: {
                    [_q0.NetworkParam.EventCount]: String(A.length)
                }
            }
        }
        _saveFailedLogsToStorage(A) {
            while (A.length > d_9) A.shift();
            let Q = this._getStorageKey();
            try {
                (0, N2A._setObjectInStorage)(Q, A)
            } catch (B) {
                bVA.Log.warn("Unable to save failed logs to storage")
            }
        }
        _retryFailedLogs(A) {
            let Q = this._getStorageKey();
            (() => q2A(this, void 0, void 0, function*() {
                if (!N2A.Storage.isReady()) yield N2A.Storage.isReadyResolver();
                let B = (0, N2A._getObjectFromStorage)(Q);
                if (!B) return;
                if (A === JyA.Startup) N2A.Storage.removeItem(Q);
                if ((yield this._sendEvents(B)) && A === JyA.GainedFocus) N2A.Storage.removeItem(Q)
            }))().catch(() => {
                bVA.Log.warn("Failed to flush stored logs")
            })
        }
        _getStorageKey() {
            return `statsig.failed_logs.${(0,v_9._DJB2)(this._sdkKey)}`
        }
        _normalizeAndAppendEvent(A) {
            if (A.user) A.user = Object.assign({}, A.user), delete A.user.privateAttributes;
            let Q = {},
                B = this._getCurrentPageUrl();
            if (B) Q.statsigMetadata = {
                currentPage: B
            };
            let G = Object.assign(Object.assign({}, A), Q);
            bVA.Log.debug("Enqueued Event:", G), this._queue.push(G)
        }
        _appendAndResetNonExposedChecks() {
            if (Object.keys(this._nonExposedChecks).length === 0) return;
            this._normalizeAndAppendEvent({
                eventName: "statsig::non_exposed_checks",
                user: null,
                time: Date.now(),
                metadata: {
                    checks: Object.assign({}, this._nonExposedChecks)
                }
            }), this._nonExposedChecks = {}
        }
        _getCurrentPageUrl() {
            var A;
            if (((A = this._options) === null || A === void 0 ? void 0 : A.includeCurrentPageUrlWithEvents) === !1) return;
            return (0, mF1._getCurrentPageUrlSafe)()
        }
        _startBackgroundFlushInterval() {
            var A, Q;
            let B = (Q = (A = this._options) === null || A === void 0 ? void 0 : A.loggingIntervalMs) !== null && Q !== void 0 ? Q : g_9,
                G = setInterval(() => {
                    let Z = fVA[this._sdkKey];
                    if (!Z || Z._flushIntervalId !== G) clearInterval(G);
                    else ks._safeFlushAndForget(this._sdkKey)
                }, B);
            this._flushIntervalId = G
        }
    }
    L2A.EventLogger = ks
});
var hVA = U((xq0) => {
    Object.defineProperty(xq0, "__esModule", {
        value: !0
    });
    xq0.StatsigMetadataProvider = xq0.SDK_VERSION = void 0;
    xq0.SDK_VERSION = "3.12.1";
    var cF1 = {
        sdkVersion: xq0.SDK_VERSION,
        sdkType: "js-mono"
    };
    xq0.StatsigMetadataProvider = {
        get: () => cF1,
        add: (A) => {
            cF1 = Object.assign(Object.assign({}, cF1), A)
        }
    }
});
var hq0 = U((fq0) => {
    Object.defineProperty(fq0, "__esModule", {
        value: !0
    })
});
var WyA = U((gq0) => {
    Object.defineProperty(gq0, "__esModule", {
        value: !0
    });
    gq0.getUUID = void 0;

    function c_9() {
        if (typeof crypto < "u" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
        let A = new Date().getTime(),
            Q = typeof performance < "u" && performance.now && performance.now() * 1000 || 0;
        return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random()*4)]}xxx-xxxxxxxxxxxx`.replace(/[xy]/g, (G) => {
            let Z = Math.random() * 16;
            if (A > 0) Z = (A + Z) % 16 | 0, A = Math.floor(A / 16);
            else Z = (Q + Z) % 16 | 0, Q = Math.floor(Q / 16);
            return (G === "x" ? Z : Z & 7 | 8).toString(16)
        })
    }
    gq0.getUUID = c_9
});
var FyA = U((pq0) => {
    Object.defineProperty(pq0, "__esModule", {
        value: !0
    });
    pq0.StableID = void 0;
    var p_9 = yVA(),
        l_9 = FH(),
        dq0 = nx(),
        i_9 = WyA(),
        XyA = {};
    pq0.StableID = {
        get: (A) => {
            if (XyA[A] == null) {
                let Q = n_9(A);
                if (Q == null) Q = (0, i_9.getUUID)(), mq0(Q, A);
                XyA[A] = Q
            }
            return XyA[A]
        },
        setOverride: (A, Q) => {
            XyA[Q] = A, mq0(A, Q)
        }
    };

    function cq0(A) {
        return `statsig.stable_id.${(0,p_9._getStorageKey)(A)}`
    }

    function mq0(A, Q) {
        let B = cq0(Q);
        try {
            (0, dq0._setObjectInStorage)(B, A)
        } catch (G) {
            l_9.Log.warn("Failed to save StableID")
        }
    }

    function n_9(A) {
        let Q = cq0(A);
        return (0, dq0._getObjectFromStorage)(Q)
    }
});
var pF1 = U((iq0) => {
    Object.defineProperty(iq0, "__esModule", {
        value: !0
    });
    iq0._getFullUserHash = iq0._normalizeUser = void 0;
    var a_9 = $2A(),
        s_9 = FH();

    function r_9(A, Q, B) {
        try {
            let G = JSON.parse(JSON.stringify(A));
            if (Q != null && Q.environment != null) G.statsigEnvironment = Q.environment;
            else if (B != null) G.statsigEnvironment = {
                tier: B
            };
            return G
        } catch (G) {
            return s_9.Log.error("Failed to JSON.stringify user"), {
                statsigEnvironment: void 0
            }
        }
    }
    iq0._normalizeUser = r_9;

    function o_9(A) {
        return A ? (0, a_9._DJB2Object)(A) : null
    }
    iq0._getFullUserHash = o_9
});
var lF1 = U((aq0) => {
    Object.defineProperty(aq0, "__esModule", {
        value: !0
    });
    aq0._typedJsonParse = void 0;
    var e_9 = FH();

    function Ak9(A, Q, B) {
        try {
            let G = JSON.parse(A);
            if (G && typeof G === "object" && Q in G) return G
        } catch (G) {}
        return e_9.Log.error(`Failed to parse ${B}`), null
    }
    aq0._typedJsonParse = Ak9
});
var QN0 = U((cu) => {
    var iF1 = cu && cu.__awaiter || function(A, Q, B, G) {
        function Z(I) {
            return I instanceof B ? I : new B(function(Y) {
                Y(I)
            })
        }
        return new(B || (B = Promise))(function(I, Y) {
            function J(F) {
                try {
                    X(G.next(F))
                } catch (V) {
                    Y(V)
                }
            }

            function W(F) {
                try {
                    X(G.throw(F))
                } catch (V) {
                    Y(V)
                }
            }

            function X(F) {
                F.done ? I(F.value) : Z(F.value).then(J, W)
            }
            X((G = G.apply(A, Q || [])).next())
        })
    };
    Object.defineProperty(cu, "__esModule", {
        value: !0
    });
    cu._makeDataAdapterResult = cu.DataAdapterCore = void 0;
    var VyA = FH(),
        Qk9 = FyA(),
        KyA = pF1(),
        du = nx(),
        rq0 = lF1(),
        oq0 = 10;
    class tq0 {
        constructor(A, Q) {
            this._adapterName = A, this._cacheSuffix = Q, this._options = null, this._sdkKey = null, this._lastModifiedStoreKey = `statsig.last_modified_time.${Q}`, this._inMemoryCache = new eq0
        }
        attach(A, Q) {
            this._sdkKey = A, this._options = Q
        }
        getDataSync(A) {
            let Q = A && (0, KyA._normalizeUser)(A, this._options),
                B = this._getCacheKey(Q),
                G = this._inMemoryCache.get(B, Q);
            if (G) return G;
            let Z = this._loadFromCache(B);
            if (Z) return this._inMemoryCache.add(B, Z), this._inMemoryCache.get(B, Q);
            return null
        }
        setData(A, Q) {
            let B = Q && (0, KyA._normalizeUser)(Q, this._options),
                G = this._getCacheKey(B);
            this._inMemoryCache.add(G, DyA("Bootstrap", A, null, B))
        }
        _getDataAsyncImpl(A, Q, B) {
            return iF1(this, void 0, void 0, function*() {
                if (!du.Storage.isReady()) yield du.Storage.isReadyResolver();
                let G = A !== null && A !== void 0 ? A : this.getDataSync(Q),
                    Z = [this._fetchAndPrepFromNetwork(G, Q, B)];
                if (B === null || B === void 0 ? void 0 : B.timeoutMs) Z.push(new Promise((I) => setTimeout(I, B.timeoutMs)).then(() => {
                    return VyA.Log.debug("Fetching latest value timed out"), null
                }));
                return yield Promise.race(Z)
            })
        }
        _prefetchDataImpl(A, Q) {
            return iF1(this, void 0, void 0, function*() {
                let B = A && (0, KyA._normalizeUser)(A, this._options),
                    G = this._getCacheKey(B),
                    Z = yield this._getDataAsyncImpl(null, B, Q);
                if (Z) this._inMemoryCache.add(G, Object.assign(Object.assign({}, Z), {
                    source: "Prefetch"
                }))
            })
        }
        _fetchAndPrepFromNetwork(A, Q, B) {
            var G;
            return iF1(this, void 0, void 0, function*() {
                let Z = (G = A === null || A === void 0 ? void 0 : A.data) !== null && G !== void 0 ? G : null,
                    I = A != null && this._isCachedResultValidFor204(A, Q),
                    Y = yield this._fetchFromNetwork(Z, Q, B, I);
                if (!Y) return VyA.Log.debug("No response returned for latest value"), null;
                let J = (0, rq0._typedJsonParse)(Y, "has_updates", "Response"),
                    W = this._getSdkKey(),
                    X = Qk9.StableID.get(W),
                    F = null;
                if ((J === null || J === void 0 ? void 0 : J.has_updates) === !0) F = DyA("Network", Y, X, Q);
                else if (Z && (J === null || J === void 0 ? void 0 : J.has_updates) === !1) F = DyA("NetworkNotModified", Z, X, Q);
                else return null;
                let V = this._getCacheKey(Q);
                return this._inMemoryCache.add(V, F), this._writeToCache(V, F), F
            })
        }
        _getSdkKey() {
            if (this._sdkKey != null) return this._sdkKey;
            return VyA.Log.error(`${this._adapterName} is not attached to a Client`), ""
        }
        _loadFromCache(A) {
            var Q;
            let B = (Q = du.Storage.getItem) === null || Q === void 0 ? void 0 : Q.call(du.Storage, A);
            if (B == null) return null;
            let G = (0, rq0._typedJsonParse)(B, "source", "Cached Result");
            return G ? Object.assign(Object.assign({}, G), {
                source: "Cache"
            }) : null
        }
        _writeToCache(A, Q) {
            du.Storage.setItem(A, JSON.stringify(Q)), this._runLocalStorageCacheEviction(A)
        }
        _runLocalStorageCacheEviction(A) {
            var Q;
            let B = (Q = (0, du._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && Q !== void 0 ? Q : {};
            B[A] = Date.now();
            let G = AN0(B, oq0);
            if (G) delete B[G], du.Storage.removeItem(G);
            (0, du._setObjectInStorage)(this._lastModifiedStoreKey, B)
        }
    }
    cu.DataAdapterCore = tq0;

    function DyA(A, Q, B, G) {
        return {
            source: A,
            data: Q,
            receivedAt: Date.now(),
            stableID: B,
            fullUserHash: (0, KyA._getFullUserHash)(G)
        }
    }
    cu._makeDataAdapterResult = DyA;
    class eq0 {
        constructor() {
            this._data = {}
        }
        get(A, Q) {
            var B;
            let G = this._data[A],
                Z = G === null || G === void 0 ? void 0 : G.stableID,
                I = (B = Q === null || Q === void 0 ? void 0 : Q.customIDs) === null || B === void 0 ? void 0 : B.stableID;
            if (I && Z && I !== Z) return VyA.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null;
            return G
        }
        add(A, Q) {
            let B = AN0(this._data, oq0 - 1);
            if (B) delete this._data[B];
            this._data[A] = Q
        }
        merge(A) {
            this._data = Object.assign(Object.assign({}, this._data), A)
        }
    }

    function AN0(A, Q) {
        let B = Object.keys(A);
        if (B.length <= Q) return null;
        return B.reduce((G, Z) => {
            let I = A[G],
                Y = A[Z];
            if (typeof I === "object" && typeof Y === "object") return Y.receivedAt < I.receivedAt ? Z : G;
            return Y < I ? Z : G
        })
    }
});
var GN0 = U((BN0) => {
    Object.defineProperty(BN0, "__esModule", {
        value: !0
    })
});
var HyA = U((IN0) => {
    Object.defineProperty(IN0, "__esModule", {
        value: !0
    });
    IN0.SDKType = void 0;
    var ZN0 = {},
        M2A;
    IN0.SDKType = {
        _get: (A) => {
            var Q;
            return ((Q = ZN0[A]) !== null && Q !== void 0 ? Q : "js-mono") + (M2A !== null && M2A !== void 0 ? M2A : "")
        },
        _setClientType(A, Q) {
            ZN0[A] = Q
        },
        _setBindingType(A) {
            if (!M2A || M2A === "-react") M2A = "-" + A
        }
    }
});
var nF1 = U((ax) => {
    var Bk9 = ax && ax.__awaiter || function(A, Q, B, G) {
        function Z(I) {
            return I instanceof B ? I : new B(function(Y) {
                Y(I)
            })
        }
        return new(B || (B = Promise))(function(I, Y) {
            function J(F) {
                try {
                    X(G.next(F))
                } catch (V) {
                    Y(V)
                }
            }

            function W(F) {
                try {
                    X(G.throw(F))
                } catch (V) {
                    Y(V)
                }
            }

            function X(F) {
                F.done ? I(F.value) : Z(F.value).then(J, W)
            }
            X((G = G.apply(A, Q || [])).next())
        })
    };
    Object.defineProperty(ax, "__esModule", {
        value: !0
    });
    ax.ErrorBoundary = ax.EXCEPTION_ENDPOINT = void 0;
    var Gk9 = FH(),
        Zk9 = HyA(),
        Ik9 = hVA();
    ax.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
    var WN0 = "[Statsig] UnknownError";
    class XN0 {
        constructor(A, Q, B, G) {
            this._sdkKey = A, this._options = Q, this._emitter = B, this._lastSeenError = G, this._seen = new Set
        }
        wrap(A) {
            try {
                let Q = A;
                Jk9(Q).forEach((B) => {
                    let G = Q[B];
                    if ("$EB" in G) return;
                    Q[B] = (...Z) => {
                        return this._capture(B, () => G.apply(A, Z))
                    }, Q[B].$EB = !0
                })
            } catch (Q) {
                this._onError("eb:wrap", Q)
            }
        }
        logError(A, Q) {
            this._onError(A, Q)
        }
        getLastSeenErrorAndReset() {
            let A = this._lastSeenError;
            return this._lastSeenError = void 0, A !== null && A !== void 0 ? A : null
        }
        attachErrorIfNoneExists(A) {
            if (this._lastSeenError) return;
            this._lastSeenError = JN0(A)
        }
        _capture(A, Q) {
            try {
                let B = Q();
                if (B && B instanceof Promise) return B.catch((G) => this._onError(A, G));
                return B
            } catch (B) {
                return this._onError(A, B), null
            }
        }
        _onError(A, Q) {
            try {
                Gk9.Log.warn(`Caught error in ${A}`, {
                    error: Q
                }), (() => Bk9(this, void 0, void 0, function*() {
                    var G, Z, I, Y, J, W, X;
                    let F = Q ? Q : Error(WN0),
                        V = F instanceof Error,
                        K = V ? F.name : "No Name",
                        D = JN0(F);
                    if (this._lastSeenError = D, this._seen.has(K)) return;
                    if (this._seen.add(K), (Z = (G = this._options) === null || G === void 0 ? void 0 : G.networkConfig) === null || Z === void 0 ? void 0 : Z.preventAllNetworkTraffic) {
                        (I = this._emitter) === null || I === void 0 || I.call(this, {
                            name: "error",
                            error: Q,
                            tag: A
                        });
                        return
                    }
                    let H = Zk9.SDKType._get(this._sdkKey),
                        C = Ik9.StatsigMetadataProvider.get(),
                        E = V ? F.stack : Yk9(F),
                        z = JSON.stringify(Object.assign({
                            tag: A,
                            exception: K,
                            info: E
                        }, Object.assign(Object.assign({}, C), {
                            sdkType: H
                        })));
                    yield((W = (J = (Y = this._options) === null || Y === void 0 ? void 0 : Y.networkConfig) === null || J === void 0 ? void 0 : J.networkOverrideFunc) !== null && W !== void 0 ? W : fetch)(ax.EXCEPTION_ENDPOINT, {
                        method: "POST",
                        headers: {
                            "STATSIG-API-KEY": this._sdkKey,
                            "STATSIG-SDK-TYPE": String(H),
                            "STATSIG-SDK-VERSION": String(C.sdkVersion),
                            "Content-Type": "application/json"
                        },
                        body: z
                    }), (X = this._emitter) === null || X === void 0 || X.call(this, {
                        name: "error",
                        error: Q,
                        tag: A
                    })
                }))().then(() => {}).catch(() => {})
            } catch (B) {}
        }
    }
    ax.ErrorBoundary = XN0;

    function JN0(A) {
        if (A instanceof Error) return A;
        else if (typeof A === "string") return Error(A);
        else return Error("An unknown error occurred.")
    }

    function Yk9(A) {
        try {
            return JSON.stringify(A)
        } catch (Q) {
            return WN0
        }
    }

    function Jk9(A) {
        let Q = new Set,
            B = Object.getPrototypeOf(A);
        while (B && B !== Object.prototype) Object.getOwnPropertyNames(B).filter((G) => typeof(B === null || B === void 0 ? void 0 : B[G]) === "function").forEach((G) => Q.add(G)), B = Object.getPrototypeOf(B);
        return Array.from(Q)
    }
});
var VN0 = U((FN0) => {
    Object.defineProperty(FN0, "__esModule", {
        value: !0
    })
});
var DN0 = U((KN0) => {
    Object.defineProperty(KN0, "__esModule", {
        value: !0
    })
});
var CN0 = U((HN0) => {
    Object.defineProperty(HN0, "__esModule", {
        value: !0
    })
});
var aF1 = U((EN0) => {
    Object.defineProperty(EN0, "__esModule", {
        value: !0
    });
    EN0.createMemoKey = EN0.MemoPrefix = void 0;
    EN0.MemoPrefix = {
        _gate: "g",
        _dynamicConfig: "c",
        _experiment: "e",
        _layer: "l",
        _paramStore: "p"
    };
    var Wk9 = new Set([]),
        Xk9 = new Set(["userPersistedValues"]);

    function Fk9(A, Q, B) {
        let G = `${A}|${Q}`;
        if (!B) return G;
        for (let Z of Object.keys(B)) {
            if (Xk9.has(Z)) return;
            if (Wk9.has(Z)) G += `|${Z}=true`;
            else G += `|${Z}=${B[Z]}`
        }
        return G
    }
    EN0.createMemoKey = Fk9
});
var UN0 = U((O2A) => {
    var Kk9 = O2A && O2A.__awaiter || function(A, Q, B, G) {
        function Z(I) {
            return I instanceof B ? I : new B(function(Y) {
                Y(I)
            })
        }
        return new(B || (B = Promise))(function(I, Y) {
            function J(F) {
                try {
                    X(G.next(F))
                } catch (V) {
                    Y(V)
                }
            }

            function W(F) {
                try {
                    X(G.throw(F))
                } catch (V) {
                    Y(V)
                }
            }

            function X(F) {
                F.done ? I(F.value) : Z(F.value).then(J, W)
            }
            X((G = G.apply(A, Q || [])).next())
        })
    };
    Object.defineProperty(O2A, "__esModule", {
        value: !0
    });
    O2A._fetchTxtRecords = void 0;
    var Dk9 = new Uint8Array([0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101, 116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1]),
        Hk9 = "https://cloudflare-dns.com/dns-query",
        Ck9 = ["i", "e", "d"],
        Ek9 = 200;

    function zk9(A) {
        return Kk9(this, void 0, void 0, function*() {
            let Q = yield A(Hk9, {
                method: "POST",
                headers: {
                    "Content-Type": "application/dns-message",
                    Accept: "application/dns-message"
                },
                body: Dk9
            });
            if (!Q.ok) {
                let Z = Error("Failed to fetch TXT records from DNS");
                throw Z.name = "DnsTxtFetchError", Z
            }
            let B = yield Q.arrayBuffer(), G = new Uint8Array(B);
            return Uk9(G)
        })
    }
    O2A._fetchTxtRecords = zk9;

    function Uk9(A) {
        let Q = A.findIndex((G, Z) => Z < Ek9 && String.fromCharCode(G) === "=" && Ck9.includes(String.fromCharCode(A[Z - 1])));
        if (Q === -1) {
            let G = Error("Failed to parse TXT records from DNS");
            throw G.name = "DnsTxtParseError", G
        }
        let B = "";
        for (let G = Q - 1; G < A.length; G++) B += String.fromCharCode(A[G]);
        return B.split(",")
    }
});
var ON0 = U((pu) => {
    var $N0 = pu && pu.__awaiter || function(A, Q, B, G) {
        function Z(I) {
            return I instanceof B ? I : new B(function(Y) {
                Y(I)
            })
        }
        return new(B || (B = Promise))(function(I, Y) {
            function J(F) {
                try {
                    X(G.next(F))
                } catch (V) {
                    Y(V)
                }
            }

            function W(F) {
                try {
                    X(G.throw(F))
                } catch (V) {
                    Y(V)
                }
            }

            function X(F) {
                F.done ? I(F.value) : Z(F.value).then(J, W)
            }
            X((G = G.apply(A, Q || [])).next())
        })
    };
    Object.defineProperty(pu, "__esModule", {
        value: !0
    });
    pu._isDomainFailure = pu.NetworkFallbackResolver = void 0;
    var $k9 = UN0(),
        wk9 = $2A(),
        qk9 = FH(),
        rF1 = nx(),
        wN0 = 604800000,
        Nk9 = 14400000;
    class NN0 {
        constructor(A) {
            var Q;
            this._fallbackInfo = null, this._errorBoundary = null, this._dnsQueryCooldowns = {}, this._networkOverrideFunc = (Q = A.networkConfig) === null || Q === void 0 ? void 0 : Q.networkOverrideFunc
        }
        setErrorBoundary(A) {
            this._errorBoundary = A
        }
        tryBumpExpiryTime(A, Q) {
            var B;
            let G = (B = this._fallbackInfo) === null || B === void 0 ? void 0 : B[Q.endpoint];
            if (!G) return;
            G.expiryTime = Date.now() + wN0, sF1(A, Object.assign(Object.assign({}, this._fallbackInfo), {
                [Q.endpoint]: G
            }))
        }
        getActiveFallbackUrl(A, Q) {
            var B, G;
            let Z = this._fallbackInfo;
            if (Z == null) Z = (B = Lk9(A)) !== null && B !== void 0 ? B : {}, this._fallbackInfo = Z;
            let I = Z[Q.endpoint];
            if (!I || Date.now() > ((G = I.expiryTime) !== null && G !== void 0 ? G : 0)) return delete Z[Q.endpoint], this._fallbackInfo = Z, sF1(A, this._fallbackInfo), null;
            if (I.url) return I.url;
            return null
        }
        getFallbackFromProvided(A) {
            let Q = qN0(A);
            if (Q) return A.replace(Q, "");
            return null
        }
        tryFetchUpdatedFallbackInfo(A, Q, B, G) {
            var Z, I;
            return $N0(this, void 0, void 0, function*() {
                try {
                    if (!LN0(B, G)) return !1;
                    let J = Q.customUrl == null && Q.fallbackUrls == null ? yield this._tryFetchFallbackUrlsFromNetwork(Q): Q.fallbackUrls, W = this._pickNewFallbackUrl((Z = this._fallbackInfo) === null || Z === void 0 ? void 0 : Z[Q.endpoint], J);
                    if (!W) return !1;
                    return this._updateFallbackInfoWithNewUrl(A, Q.endpoint, W), !0
                } catch (Y) {
                    return (I = this._errorBoundary) === null || I === void 0 || I.logError("tryFetchUpdatedFallbackInfo", Y), !1
                }
            })
        }
        _updateFallbackInfoWithNewUrl(A, Q, B) {
            var G, Z, I;
            let Y = {
                    url: B,
                    expiryTime: Date.now() + wN0,
                    previous: []
                },
                J = (G = this._fallbackInfo) === null || G === void 0 ? void 0 : G[Q];
            if (J) Y.previous.push(...J.previous);
            if (Y.previous.length > 10) Y.previous = [];
            let W = (I = (Z = this._fallbackInfo) === null || Z === void 0 ? void 0 : Z[Q]) === null || I === void 0 ? void 0 : I.url;
            if (W != null) Y.previous.push(W);
            this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), {
                [Q]: Y
            }), sF1(A, this._fallbackInfo)
        }
        _tryFetchFallbackUrlsFromNetwork(A) {
            var Q;
            return $N0(this, void 0, void 0, function*() {
                let B = this._dnsQueryCooldowns[A.endpoint];
                if (B && Date.now() < B) return null;
                this._dnsQueryCooldowns[A.endpoint] = Date.now() + Nk9;
                let G = [],
                    Z = yield(0, $k9._fetchTxtRecords)((Q = this._networkOverrideFunc) !== null && Q !== void 0 ? Q : fetch), I = qN0(A.defaultUrl);
                for (let Y of Z) {
                    if (!Y.startsWith(A.endpointDnsKey + "=")) continue;
                    let J = Y.split("=");
                    if (J.length > 1) {
                        let W = J[1];
                        if (W.endsWith("/")) W = W.slice(0, -1);
                        G.push(`https://${W}${I}`)
                    }
                }
                return G
            })
        }
        _pickNewFallbackUrl(A, Q) {
            var B;
            if (Q == null) return null;
            let G = new Set((B = A === null || A === void 0 ? void 0 : A.previous) !== null && B !== void 0 ? B : []),
                Z = A === null || A === void 0 ? void 0 : A.url,
                I = null;
            for (let Y of Q) {
                let J = Y.endsWith("/") ? Y.slice(0, -1) : Y;
                if (!G.has(Y) && J !== Z) {
                    I = J;
                    break
                }
            }
            return I
        }
    }
    pu.NetworkFallbackResolver = NN0;

    function LN0(A, Q) {
        var B;
        let G = (B = A === null || A === void 0 ? void 0 : A.toLowerCase()) !== null && B !== void 0 ? B : "";
        return Q || G.includes("uncaught exception") || G.includes("failed to fetch") || G.includes("networkerror when attempting to fetch resource")
    }
    pu._isDomainFailure = LN0;

    function MN0(A) {
        return `statsig.network_fallback.${(0,wk9._DJB2)(A)}`
    }

    function sF1(A, Q) {
        let B = MN0(A);
        if (!Q || Object.keys(Q).length === 0) {
            rF1.Storage.removeItem(B);
            return
        }
        rF1.Storage.setItem(B, JSON.stringify(Q))
    }

    function Lk9(A) {
        let Q = MN0(A),
            B = rF1.Storage.getItem(Q);
        if (!B) return null;
        try {
            return JSON.parse(B)
        } catch (G) {
            return qk9.Log.error("Failed to parse FallbackInfo"), null
        }
    }

    function qN0(A) {
        try {
            return new URL(A).pathname
        } catch (Q) {
            return null
        }
    }
});
var oF1 = U((TN0) => {
    Object.defineProperty(TN0, "__esModule", {
        value: !0
    });
    TN0.SDKFlags = void 0;
    var RN0 = {};
    TN0.SDKFlags = {
        setFlags: (A, Q) => {
            RN0[A] = Q
        },
        get: (A, Q) => {
            var B, G;
            return (G = (B = RN0[A]) === null || B === void 0 ? void 0 : B[Q]) !== null && G !== void 0 ? G : !1
        }
    }
});
var EyA = U((vN0) => {
    Object.defineProperty(vN0, "__esModule", {
        value: !0
    });
    vN0.StatsigSession = vN0.SessionID = void 0;
    var Mk9 = yVA(),
        Ok9 = FH(),
        SN0 = nx(),
        _N0 = WyA(),
        kN0 = 1800000,
        yN0 = 14400000,
        CyA = {};
    vN0.SessionID = {
        get: (A) => {
            return vN0.StatsigSession.get(A).data.sessionID
        }
    };
    vN0.StatsigSession = {
        get: (A) => {
            if (CyA[A] == null) CyA[A] = Rk9(A);
            let Q = CyA[A];
            return Pk9(Q)
        },
        overrideInitialSessionID: (A, Q) => {
            CyA[Q] = Tk9(A, Q)
        }
    };

    function Rk9(A) {
        let Q = kk9(A),
            B = Date.now();
        if (!Q) Q = {
            sessionID: (0, _N0.getUUID)(),
            startTime: B,
            lastUpdate: B
        };
        return {
            data: Q,
            sdkKey: A
        }
    }

    function Tk9(A, Q) {
        let B = Date.now();
        return {
            data: {
                sessionID: A,
                startTime: B,
                lastUpdate: B
            },
            sdkKey: Q
        }
    }

    function Pk9(A) {
        let Q = Date.now(),
            B = A.data;
        if (jk9(B) || Sk9(B)) B.sessionID = (0, _N0.getUUID)(), B.startTime = Q;
        B.lastUpdate = Q, _k9(B, A.sdkKey), clearTimeout(A.idleTimeoutID), clearTimeout(A.ageTimeoutID);
        let G = Q - B.startTime,
            Z = A.sdkKey;
        return A.idleTimeoutID = jN0(Z, kN0), A.ageTimeoutID = jN0(Z, yN0 - G), A
    }

    function jN0(A, Q) {
        return setTimeout(() => {
            let B = __STATSIG__ === null || __STATSIG__ === void 0 ? void 0 : __STATSIG__.instance(A);
            if (B) B.$emt({
                name: "session_expired"
            })
        }, Q)
    }

    function jk9({
        lastUpdate: A
    }) {
        return Date.now() - A > kN0
    }

    function Sk9({
        startTime: A
    }) {
        return Date.now() - A > yN0
    }

    function xN0(A) {
        return `statsig.session_id.${(0,Mk9._getStorageKey)(A)}`
    }

    function _k9(A, Q) {
        let B = xN0(Q);
        try {
            (0, SN0._setObjectInStorage)(B, A)
        } catch (G) {
            Ok9.Log.warn("Failed to save SessionID")
        }
    }

    function kk9(A) {
        let Q = xN0(A);
        return (0, SN0._getObjectFromStorage)(Q)
    }
});
var eF1 = U((bN0) => {
    Object.defineProperty(bN0, "__esModule", {
        value: !0
    });
    bN0.ErrorTag = void 0;
    bN0.ErrorTag = {
        NetworkError: "NetworkError"
    }
});
var iN0 = U((T2A) => {
    var R2A = T2A && T2A.__awaiter || function(A, Q, B, G) {
        function Z(I) {
            return I instanceof B ? I : new B(function(Y) {
                Y(I)
            })
        }
        return new(B || (B = Promise))(function(I, Y) {
            function J(F) {
                try {
                    X(G.next(F))
                } catch (V) {
                    Y(V)
                }
            }

            function W(F) {
                try {
                    X(G.throw(F))
                } catch (V) {
                    Y(V)
                }
            }

            function X(F) {
                F.done ? I(F.value) : Z(F.value).then(J, W)
            }
            X((G = G.apply(A, Q || [])).next())
        })
    };
    Object.defineProperty(T2A, "__esModule", {
        value: !0
    });
    T2A.NetworkCore = void 0;
    Ss();
    var hN0 = Ss(),
        AV1 = skA(),
        ys = FH(),
        CR = xVA(),
        xk9 = ON0(),
        vk9 = oF1(),
        mN0 = HyA(),
        bk9 = _s(),
        dN0 = EyA(),
        fk9 = FyA(),
        hk9 = eF1(),
        cN0 = hVA(),
        gk9 = YyA(),
        uk9 = 1e4,
        mk9 = 500,
        dk9 = 30000,
        ck9 = 1000,
        pN0 = 50,
        pk9 = pN0 / ck9,
        lk9 = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
    class lN0 {
        constructor(A, Q) {
            if (this._emitter = Q, this._errorBoundary = null, this._timeout = uk9, this._netConfig = {}, this._options = {}, this._leakyBucket = {}, this._lastUsedInitUrl = null, A) this._options = A;
            if (this._options.networkConfig) this._netConfig = this._options.networkConfig;
            if (this._netConfig.networkTimeoutMs) this._timeout = this._netConfig.networkTimeoutMs;
            this._fallbackResolver = new xk9.NetworkFallbackResolver(this._options)
        }
        setErrorBoundary(A) {
            this._errorBoundary = A, this._errorBoundary.wrap(this), this._errorBoundary.wrap(this._fallbackResolver), this._fallbackResolver.setErrorBoundary(A)
        }
        isBeaconSupported() {
            return typeof navigator < "u" && typeof navigator.sendBeacon === "function"
        }
        getLastUsedInitUrlAndReset() {
            let A = this._lastUsedInitUrl;
            return this._lastUsedInitUrl = null, A
        }
        beacon(A) {
            return R2A(this, void 0, void 0, function*() {
                if (!gN0(A)) return !1;
                let Q = this._getInternalRequestArgs("POST", A);
                yield this._tryToCompressBody(Q);
                let B = yield this._getPopulatedURL(Q), G = navigator;
                return G.sendBeacon.bind(G)(B, Q.body)
            })
        }
        post(A) {
            return R2A(this, void 0, void 0, function*() {
                let Q = this._getInternalRequestArgs("POST", A);
                return this._tryEncodeBody(Q), yield this._tryToCompressBody(Q), this._sendRequest(Q)
            })
        }
        get(A) {
            let Q = this._getInternalRequestArgs("GET", A);
            return this._sendRequest(Q)
        }
        _sendRequest(A) {
            var Q, B, G, Z;
            return R2A(this, void 0, void 0, function*() {
                if (!gN0(A)) return null;
                if (this._netConfig.preventAllNetworkTraffic) return null;
                let {
                    method: I,
                    body: Y,
                    retries: J,
                    attempt: W
                } = A, X = A.urlConfig.endpoint;
                if (this._isRateLimited(X)) return ys.Log.warn(`Request to ${X} was blocked because you are making requests too frequently.`), null;
                let F = W !== null && W !== void 0 ? W : 1,
                    V = typeof AbortController < "u" ? new AbortController : null,
                    K = setTimeout(() => {
                        V === null || V === void 0 || V.abort(`Timeout of ${this._timeout}ms expired.`)
                    }, this._timeout),
                    D = yield this._getPopulatedURL(A), H = null, C = (0, gk9._isUnloading)();
                try {
                    let E = {
                        method: I,
                        body: Y,
                        headers: Object.assign({}, A.headers),
                        signal: V === null || V === void 0 ? void 0 : V.signal,
                        priority: A.priority,
                        keepalive: C
                    };
                    sk9(A, F);
                    let z = this._leakyBucket[X];
                    if (z) z.lastRequestTime = Date.now(), this._leakyBucket[X] = z;
                    if (H = yield((Q = this._netConfig.networkOverrideFunc) !== null && Q !== void 0 ? Q : fetch)(D, E), clearTimeout(K), !H.ok) {
                        let q = yield H.text().catch(() => "No Text"), R = Error(`NetworkError: ${D} ${q}`);
                        throw R.name = "NetworkError", R
                    }
                    let N = yield H.text();
                    return uN0(A, H, F, N), this._fallbackResolver.tryBumpExpiryTime(A.sdkKey, A.urlConfig), {
                        body: N,
                        code: H.status
                    }
                } catch (E) {
                    let z = nk9(V, E),
                        w = ak9(V);
                    if (uN0(A, H, F, "", E), yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(A.sdkKey, A.urlConfig, z, w)) A.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(A.sdkKey, A.urlConfig);
                    if (!J || F > J || !lk9.has((B = H === null || H === void 0 ? void 0 : H.status) !== null && B !== void 0 ? B : 500)) {
                        (G = this._emitter) === null || G === void 0 || G.call(this, {
                            name: "error",
                            error: E,
                            tag: hk9.ErrorTag.NetworkError,
                            requestArgs: A
                        });
                        let q = `A networking error occurred during ${I} request to ${D}.`;
                        return ys.Log.error(q, z, E), (Z = this._errorBoundary) === null || Z === void 0 || Z.attachErrorIfNoneExists(q), null
                    }
                    return yield rk9(F), this._sendRequest(Object.assign(Object.assign({}, A), {
                        retries: J,
                        attempt: F + 1
                    }))
                }
            })
        }
        _isRateLimited(A) {
            var Q;
            let B = Date.now(),
                G = (Q = this._leakyBucket[A]) !== null && Q !== void 0 ? Q : {
                    count: 0,
                    lastRequestTime: B
                },
                Z = B - G.lastRequestTime,
                I = Math.floor(Z * pk9);
            if (G.count = Math.max(0, G.count - I), G.count >= pN0) return !0;
            return G.count += 1, G.lastRequestTime = B, this._leakyBucket[A] = G, !1
        }
        _getPopulatedURL(A) {
            var Q;
            return R2A(this, void 0, void 0, function*() {
                let B = (Q = A.fallbackUrl) !== null && Q !== void 0 ? Q : A.urlConfig.getUrl();
                if (A.urlConfig.endpoint === CR.Endpoint._initialize || A.urlConfig.endpoint === CR.Endpoint._download_config_specs) this._lastUsedInitUrl = B;
                let G = Object.assign({
                        [CR.NetworkParam.SdkKey]: A.sdkKey,
                        [CR.NetworkParam.SdkType]: mN0.SDKType._get(A.sdkKey),
                        [CR.NetworkParam.SdkVersion]: cN0.SDK_VERSION,
                        [CR.NetworkParam.Time]: String(Date.now()),
                        [CR.NetworkParam.SessionID]: dN0.SessionID.get(A.sdkKey)
                    }, A.params),
                    Z = Object.keys(G).map((I) => {
                        return `${encodeURIComponent(I)}=${encodeURIComponent(G[I])}`
                    }).join("&");
                return `${B}${Z?`?${Z}`:""}`
            })
        }
        _tryEncodeBody(A) {
            var Q;
            let B = (0, bk9._getWindowSafe)(),
                G = A.body;
            if (!A.isStatsigEncodable || this._options.disableStatsigEncoding || typeof G !== "string" || (0, hN0._getStatsigGlobalFlag)("no-encode") != null || !(B === null || B === void 0 ? void 0 : B.btoa)) return;
            try {
                A.body = B.btoa(G).split("").reverse().join(""), A.params = Object.assign(Object.assign({}, (Q = A.params) !== null && Q !== void 0 ? Q : {}), {
                    [CR.NetworkParam.StatsigEncoded]: "1"
                })
            } catch (Z) {
                ys.Log.warn(`Request encoding failed for ${A.urlConfig.getUrl()}`, Z)
            }
        }
        _tryToCompressBody(A) {
            var Q;
            return R2A(this, void 0, void 0, function*() {
                let B = A.body;
                if (!A.isCompressable || this._options.disableCompression || typeof B !== "string" || vk9.SDKFlags.get(A.sdkKey, "enable_log_event_compression") !== !0 || (0, hN0._getStatsigGlobalFlag)("no-compress") != null || typeof CompressionStream > "u" || typeof TextEncoder > "u") return;
                try {
                    let G = new TextEncoder().encode(B),
                        Z = new CompressionStream("gzip"),
                        I = Z.writable.getWriter();
                    I.write(G).catch(ys.Log.error), I.close().catch(ys.Log.error);
                    let Y = Z.readable.getReader(),
                        J = [],
                        W;
                    while (!(W = yield Y.read()).done) J.push(W.value);
                    let X = J.reduce((K, D) => K + D.length, 0),
                        F = new Uint8Array(X),
                        V = 0;
                    for (let K of J) F.set(K, V), V += K.length;
                    A.body = F, A.params = Object.assign(Object.assign({}, (Q = A.params) !== null && Q !== void 0 ? Q : {}), {
                        [CR.NetworkParam.IsGzipped]: "1"
                    })
                } catch (G) {
                    ys.Log.warn(`Request compression failed for ${A.urlConfig.getUrl()}`, G)
                }
            })
        }
        _getInternalRequestArgs(A, Q) {
            let B = this._fallbackResolver.getActiveFallbackUrl(Q.sdkKey, Q.urlConfig),
                G = Object.assign(Object.assign({}, Q), {
                    method: A,
                    fallbackUrl: B
                });
            if ("data" in Q) ik9(G, Q.data);
            return G
        }
    }
    T2A.NetworkCore = lN0;
    var gN0 = (A) => {
            if (!A.sdkKey) return ys.Log.warn("Unable to make request without an SDK key"), !1;
            return !0
        },
        ik9 = (A, Q) => {
            let {
                sdkKey: B,
                fallbackUrl: G
            } = A, Z = fk9.StableID.get(B), I = dN0.SessionID.get(B), Y = mN0.SDKType._get(B);
            A.body = JSON.stringify(Object.assign(Object.assign({}, Q), {
                statsigMetadata: Object.assign(Object.assign({}, cN0.StatsigMetadataProvider.get()), {
                    stableID: Z,
                    sessionID: I,
                    sdkType: Y,
                    fallbackUrl: G
                })
            }))
        };

    function nk9(A, Q) {
        if ((A === null || A === void 0 ? void 0 : A.signal.aborted) && typeof A.signal.reason === "string") return A.signal.reason;
        if (typeof Q === "string") return Q;
        if (Q instanceof Error) return `${Q.name}: ${Q.message}`;
        return "Unknown Error"
    }

    function ak9(A) {
        return (A === null || A === void 0 ? void 0 : A.signal.aborted) && typeof A.signal.reason === "string" && A.signal.reason.includes("Timeout") || !1
    }

    function sk9(A, Q) {
        if (A.urlConfig.endpoint !== CR.Endpoint._initialize) return;
        AV1.Diagnostics._markInitNetworkReqStart(A.sdkKey, {
            attempt: Q
        })
    }

    function uN0(A, Q, B, G, Z) {
        if (A.urlConfig.endpoint !== CR.Endpoint._initialize) return;
        AV1.Diagnostics._markInitNetworkReqEnd(A.sdkKey, AV1.Diagnostics._getDiagnosticsData(Q, B, G, Z))
    }

    function rk9(A) {
        return R2A(this, void 0, void 0, function*() {
            yield new Promise((Q) => setTimeout(Q, Math.min(mk9 * (A * A), dk9)))
        })
    }
});
var aN0 = U((nN0) => {
    Object.defineProperty(nN0, "__esModule", {
        value: !0
    })
});
var rN0 = U((sN0) => {
    Object.defineProperty(sN0, "__esModule", {
        value: !0
    })
});
var tN0 = U((P2A) => {
    var ok9 = P2A && P2A.__awaiter || function(A, Q, B, G) {
        function Z(I) {
            return I instanceof B ? I : new B(function(Y) {
                Y(I)
            })
        }
        return new(B || (B = Promise))(function(I, Y) {
            function J(F) {
                try {
                    X(G.next(F))
                } catch (V) {
                    Y(V)
                }
            }

            function W(F) {
                try {
                    X(G.throw(F))
                } catch (V) {
                    Y(V)
                }
            }

            function X(F) {
                F.done ? I(F.value) : Z(F.value).then(J, W)
            }
            X((G = G.apply(A, Q || [])).next())
        })
    };
    Object.defineProperty(P2A, "__esModule", {
        value: !0
    });
    P2A.StatsigClientBase = void 0;
    Ss();
    var tk9 = Ss(),
        ek9 = nF1(),
        Ay9 = dF1(),
        QV1 = FH(),
        Qy9 = aF1(),
        By9 = _s(),
        Gy9 = EyA(),
        zyA = nx(),
        Zy9 = 3000;
    class oN0 {
        constructor(A, Q, B, G) {
            var Z;
            this.loadingStatus = "Uninitialized", this._initializePromise = null, this._listeners = {};
            let I = this.$emt.bind(this);
            (G === null || G === void 0 ? void 0 : G.logLevel) != null && (QV1.Log.level = G.logLevel), (G === null || G === void 0 ? void 0 : G.disableStorage) && zyA.Storage._setDisabled(!0), (G === null || G === void 0 ? void 0 : G.initialSessionID) && Gy9.StatsigSession.overrideInitialSessionID(G.initialSessionID, A), (G === null || G === void 0 ? void 0 : G.storageProvider) && zyA.Storage._setProvider(G.storageProvider), this._sdkKey = A, this._options = G !== null && G !== void 0 ? G : {}, this._memoCache = {}, this.overrideAdapter = (Z = G === null || G === void 0 ? void 0 : G.overrideAdapter) !== null && Z !== void 0 ? Z : null, this._logger = new Ay9.EventLogger(A, I, B, G), this._errorBoundary = new ek9.ErrorBoundary(A, G, I), this._errorBoundary.wrap(this), this._errorBoundary.wrap(Q), this._errorBoundary.wrap(this._logger), B.setErrorBoundary(this._errorBoundary), this.dataAdapter = Q, this.dataAdapter.attach(A, G), this.storageProvider = zyA.Storage, this._primeReadyRipcord(), Iy9(A, this)
        }
        updateRuntimeOptions(A) {
            if (A.disableLogging != null) this._options.disableLogging = A.disableLogging, this._logger.setLoggingDisabled(A.disableLogging);
            if (A.disableStorage != null) this._options.disableStorage = A.disableStorage, zyA.Storage._setDisabled(A.disableStorage)
        }
        flush() {
            return this._logger.flush()
        }
        shutdown() {
            return ok9(this, void 0, void 0, function*() {
                this.$emt({
                    name: "pre_shutdown"
                }), this._setStatus("Uninitialized", null), this._initializePromise = null, yield this._logger.stop()
            })
        }
        on(A, Q) {
            if (!this._listeners[A]) this._listeners[A] = [];
            this._listeners[A].push(Q)
        }
        off(A, Q) {
            if (this._listeners[A]) {
                let B = this._listeners[A].indexOf(Q);