/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: telemetry_002.js
 * 处理时间: 2025-12-09T03:41:38.300Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * en       (  2x) AGENT_OUTPUT_TOOL = "AgentOutputTool"
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 2/14
 * Lines: 17990 - 19487 (1498 lines)
 * Original file: cli.js
 */

                if (B !== -1) this._listeners[A].splice(B, 1)
            }
        }
        $on(A, Q) {
            Q.__isInternal = !0, this.on(A, Q)
        }
        $emt(A) {
            var Q;
            let B = (G) => {
                try {
                    G(A)
                } catch (Z) {
                    if (G.__isInternal === !0) {
                        this._errorBoundary.logError(`__emit:${A.name}`, Z);
                        return
                    }
                    QV1.Log.error("An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.", A)
                }
            };
            if (this._listeners[A.name]) this._listeners[A.name].forEach((G) => B(G));
            (Q = this._listeners["*"]) === null || Q === void 0 || Q.forEach(B)
        }
        _setStatus(A, Q) {
            this.loadingStatus = A, this._memoCache = {}, this.$emt({
                name: "values_updated",
                status: A,
                values: Q
            })
        }
        _enqueueExposure(A, Q, B) {
            if ((B === null || B === void 0 ? void 0 : B.disableExposureLog) === !0) {
                this._logger.incrementNonExposureCount(A);
                return
            }
            this._logger.enqueue(Q)
        }
        _memoize(A, Q) {
            return (B, G) => {
                if (this._options.disableEvaluationMemoization) return Q(B, G);
                let Z = (0, Qy9.createMemoKey)(A, B, G);
                if (!Z) return Q(B, G);
                if (!(Z in this._memoCache)) {
                    if (Object.keys(this._memoCache).length >= Zy9) this._memoCache = {};
                    this._memoCache[Z] = Q(B, G)
                }
                return this._memoCache[Z]
            }
        }
    }
    P2A.StatsigClientBase = oN0;

    function Iy9(A, Q) {
        var B;
        if ((0, By9._isServerEnv)()) return;
        let G = (0, tk9._getStatsigGlobal)(),
            Z = (B = G.instances) !== null && B !== void 0 ? B : {},
            I = Q;
        if (Z[A] != null) QV1.Log.warn("Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.");
        if (Z[A] = I, !G.firstInstance) G.firstInstance = I;
        G.instances = Z, __STATSIG__ = G
    }
});
var QL0 = U((eN0) => {
    Object.defineProperty(eN0, "__esModule", {
        value: !0
    });
    eN0.DataAdapterCachePrefix = void 0;
    eN0.DataAdapterCachePrefix = "statsig.cached"
});
var GL0 = U((BL0) => {
    Object.defineProperty(BL0, "__esModule", {
        value: !0
    })
});
var IL0 = U((ZL0) => {
    Object.defineProperty(ZL0, "__esModule", {
        value: !0
    })
});
var XL0 = U((JL0) => {
    Object.defineProperty(JL0, "__esModule", {
        value: !0
    });
    JL0._makeTypedGet = JL0._mergeOverride = JL0._makeLayer = JL0._makeExperiment = JL0._makeDynamicConfig = JL0._makeFeatureGate = void 0;
    var Yy9 = FH(),
        Jy9 = rkA(),
        Wy9 = "default";

    function BV1(A, Q, B, G) {
        var Z;
        return {
            name: A,
            details: Q,
            ruleID: (Z = B === null || B === void 0 ? void 0 : B.rule_id) !== null && Z !== void 0 ? Z : Wy9,
            __evaluation: B,
            value: G
        }
    }

    function Xy9(A, Q, B) {
        return BV1(A, Q, B, (B === null || B === void 0 ? void 0 : B.value) === !0)
    }
    JL0._makeFeatureGate = Xy9;

    function YL0(A, Q, B) {
        var G;
        let Z = (G = B === null || B === void 0 ? void 0 : B.value) !== null && G !== void 0 ? G : {};
        return Object.assign(Object.assign({}, BV1(A, Q, B, Z)), {
            get: UyA(A, B === null || B === void 0 ? void 0 : B.value)
        })
    }
    JL0._makeDynamicConfig = YL0;

    function Fy9(A, Q, B) {
        var G;
        let Z = YL0(A, Q, B);
        return Object.assign(Object.assign({}, Z), {
            groupName: (G = B === null || B === void 0 ? void 0 : B.group_name) !== null && G !== void 0 ? G : null
        })
    }
    JL0._makeExperiment = Fy9;

    function Vy9(A, Q, B, G) {
        var Z, I;
        return Object.assign(Object.assign({}, BV1(A, Q, B, void 0)), {
            get: UyA(A, B === null || B === void 0 ? void 0 : B.value, G),
            groupName: (Z = B === null || B === void 0 ? void 0 : B.group_name) !== null && Z !== void 0 ? Z : null,
            __value: (I = B === null || B === void 0 ? void 0 : B.value) !== null && I !== void 0 ? I : {}
        })
    }
    JL0._makeLayer = Vy9;

    function Ky9(A, Q, B, G) {
        return Object.assign(Object.assign(Object.assign({}, A), Q), {
            get: UyA(A.name, B, G)
        })
    }
    JL0._mergeOverride = Ky9;

    function UyA(A, Q, B) {
        return (G, Z) => {
            var I;
            let Y = (I = Q === null || Q === void 0 ? void 0 : Q[G]) !== null && I !== void 0 ? I : null;
            if (Y == null) return Z !== null && Z !== void 0 ? Z : null;
            if (Z != null && !(0, Jy9._isTypeMatch)(Y, Z)) return Yy9.Log.warn(`Parameter type mismatch. '${A}.${G}' was found to be type '${typeof Y}' but fallback/return type is '${typeof Z}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`), Z !== null && Z !== void 0 ? Z : null;
            return B === null || B === void 0 || B(G), Y
        }
    }
    JL0._makeTypedGet = UyA
});
var VL0 = U((FL0) => {
    Object.defineProperty(FL0, "__esModule", {
        value: !0
    })
});
var HL0 = U((KL0) => {
    Object.defineProperty(KL0, "__esModule", {
        value: !0
    });
    KL0.UPDATE_DETAIL_ERROR_MESSAGES = KL0.createUpdateDetails = void 0;
    var Uy9 = (A, Q, B, G, Z, I) => {
        return {
            duration: B,
            source: Q,
            success: A,
            error: G,
            sourceUrl: Z,
            warnings: I
        }
    };
    KL0.createUpdateDetails = Uy9;
    KL0.UPDATE_DETAIL_ERROR_MESSAGES = {
        NO_NETWORK_DATA: "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error."
    }
});
var lu = U((v9) => {
    var wy9 = v9 && v9.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        Z6 = v9 && v9.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) wy9(Q, A, B)
        };
    Object.defineProperty(v9, "__esModule", {
        value: !0
    });
    v9.Storage = v9.Log = v9.EventLogger = v9.Diagnostics = void 0;
    Ss();
    var qy9 = skA();
    Object.defineProperty(v9, "Diagnostics", {
        enumerable: !0,
        get: function() {
            return qy9.Diagnostics
        }
    });
    var Ny9 = dF1();
    Object.defineProperty(v9, "EventLogger", {
        enumerable: !0,
        get: function() {
            return Ny9.EventLogger
        }
    });
    var CL0 = FH();
    Object.defineProperty(v9, "Log", {
        enumerable: !0,
        get: function() {
            return CL0.Log
        }
    });
    var Ly9 = hVA(),
        My9 = nx();
    Object.defineProperty(v9, "Storage", {
        enumerable: !0,
        get: function() {
            return My9.Storage
        }
    });
    Z6(Ss(), v9);
    Z6(yVA(), v9);
    Z6(hq0(), v9);
    Z6(QN0(), v9);
    Z6(skA(), v9);
    Z6(GN0(), v9);
    Z6(nF1(), v9);
    Z6(VN0(), v9);
    Z6(DN0(), v9);
    Z6($2A(), v9);
    Z6(CN0(), v9);
    Z6(FH(), v9);
    Z6(aF1(), v9);
    Z6(xVA(), v9);
    Z6(iN0(), v9);
    Z6(aN0(), v9);
    Z6(rN0(), v9);
    Z6(_s(), v9);
    Z6(HyA(), v9);
    Z6(EyA(), v9);
    Z6(FyA(), v9);
    Z6(tN0(), v9);
    Z6(eF1(), v9);
    Z6(QL0(), v9);
    Z6(xF1(), v9);
    Z6(hVA(), v9);
    Z6(GL0(), v9);
    Z6(IL0(), v9);
    Z6(XL0(), v9);
    Z6(VL0(), v9);
    Z6(pF1(), v9);
    Z6(nx(), v9);
    Z6(lF1(), v9);
    Z6(rkA(), v9);
    Z6(fF1(), v9);
    Z6(WyA(), v9);
    Z6(YyA(), v9);
    Z6(HL0(), v9);
    Z6(oF1(), v9);
    __STATSIG__ = Object.assign(Object.assign({}, __STATSIG__ !== null && __STATSIG__ !== void 0 ? __STATSIG__ : {}), {
        Log: CL0.Log,
        SDK_VERSION: Ly9.SDK_VERSION
    })
});
var UL0 = U((zL0) => {
    Object.defineProperty(zL0, "__esModule", {
        value: !0
    });
    var xs = lu();
    class EL0 {
        constructor(A) {
            this._sdkKey = A, this._rawValues = null, this._values = null, this._source = "Uninitialized", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null, this._warnings = new Set
        }
        reset() {
            this._values = null, this._rawValues = null, this._source = "Loading", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null
        }
        finalize() {
            if (this._values) return;
            this._source = "NoValues"
        }
        getValues() {
            return this._rawValues ? (0, xs._typedJsonParse)(this._rawValues, "has_updates", "EvaluationStoreValues") : null
        }
        setValues(A, Q) {
            var B;
            if (!A) return !1;
            let G = (0, xs._typedJsonParse)(A.data, "has_updates", "EvaluationResponse");
            if (G == null) return !1;
            if (this._source = A.source, (G === null || G === void 0 ? void 0 : G.has_updates) !== !0) return !0;
            if (this._rawValues = A.data, this._lcut = G.time, this._receivedAt = A.receivedAt, this._values = G, this._bootstrapMetadata = this._extractBootstrapMetadata(A.source, G), A.source && G.user) this._setWarningState(Q, G);
            return xs.SDKFlags.setFlags(this._sdkKey, (B = G.sdk_flags) !== null && B !== void 0 ? B : {}), !0
        }
        getWarnings() {
            if (this._warnings.size === 0) return;
            return Array.from(this._warnings)
        }
        getGate(A) {
            var Q;
            return this._getDetailedStoreResult((Q = this._values) === null || Q === void 0 ? void 0 : Q.feature_gates, A)
        }
        getConfig(A) {
            var Q;
            return this._getDetailedStoreResult((Q = this._values) === null || Q === void 0 ? void 0 : Q.dynamic_configs, A)
        }
        getLayer(A) {
            var Q;
            return this._getDetailedStoreResult((Q = this._values) === null || Q === void 0 ? void 0 : Q.layer_configs, A)
        }
        getParamStore(A) {
            var Q;
            return this._getDetailedStoreResult((Q = this._values) === null || Q === void 0 ? void 0 : Q.param_stores, A)
        }
        getSource() {
            return this._source
        }
        getExposureMapping() {
            var A;
            return (A = this._values) === null || A === void 0 ? void 0 : A.exposures
        }
        _extractBootstrapMetadata(A, Q) {
            if (A !== "Bootstrap") return null;
            let B = {};
            if (Q.user) B.user = Q.user;
            if (Q.sdkInfo) B.generatorSDKInfo = Q.sdkInfo;
            return B.lcut = Q.time, B
        }
        _getDetailedStoreResult(A, Q) {
            let B = null;
            if (A) B = A[Q] ? A[Q] : A[(0, xs._DJB2)(Q)];
            return {
                result: B,
                details: this._getDetails(B == null)
            }
        }
        _setWarningState(A, Q) {
            var B;
            let G = xs.StableID.get(this._sdkKey);
            if (((B = A.customIDs) === null || B === void 0 ? void 0 : B.stableID) !== G) {
                this._warnings.add("StableIDMismatch");
                return
            }
            if ("user" in Q) {
                let Z = Q.user;
                if ((0, xs._getFullUserHash)(A) !== (0, xs._getFullUserHash)(Z)) this._warnings.add("PartialUserMatch")
            }
        }
        getCurrentSourceDetails() {
            if (this._source === "Uninitialized" || this._source === "NoValues") return {
                reason: this._source
            };
            let A = {
                reason: this._source,
                lcut: this._lcut,
                receivedAt: this._receivedAt
            };
            if (this._warnings.size > 0) A.warnings = Array.from(this._warnings);
            return A
        }
        _getDetails(A) {
            var Q, B;
            let G = this.getCurrentSourceDetails(),
                Z = G.reason,
                I = (Q = G.warnings) !== null && Q !== void 0 ? Q : [];
            if (this._source === "Bootstrap" && I.length > 0) Z = Z + I[0];
            if (Z !== "Uninitialized" && Z !== "NoValues") Z = `${Z}:${A?"Unrecognized":"Recognized"}`;
            let Y = this._source === "Bootstrap" ? (B = this._bootstrapMetadata) !== null && B !== void 0 ? B : void 0 : void 0;
            if (Y) G.bootstrapMetadata = Y;
            return Object.assign(Object.assign({}, G), {
                reason: Z
            })
        }
    }
    zL0.default = EL0
});
var NL0 = U((wL0) => {
    Object.defineProperty(wL0, "__esModule", {
        value: !0
    });
    wL0._resolveDeltasResponse = void 0;
    var $L0 = lu(),
        Ry9 = 2;

    function Ty9(A, Q) {
        let B = (0, $L0._typedJsonParse)(Q, "checksum", "DeltasEvaluationResponse");
        if (!B) return {
            hadBadDeltaChecksum: !0
        };
        let G = Py9(A, B),
            Z = jy9(G),
            I = (0, $L0._DJB2Object)({
                feature_gates: Z.feature_gates,
                dynamic_configs: Z.dynamic_configs,
                layer_configs: Z.layer_configs
            }, Ry9);
        if (I !== B.checksumV2) return {
            hadBadDeltaChecksum: !0,
            badChecksum: I,
            badMergedConfigs: Z,
            badFullResponse: B.deltas_full_response
        };
        return JSON.stringify(Z)
    }
    wL0._resolveDeltasResponse = Ty9;

    function Py9(A, Q) {
        return Object.assign(Object.assign(Object.assign({}, A), Q), {
            feature_gates: Object.assign(Object.assign({}, A.feature_gates), Q.feature_gates),
            layer_configs: Object.assign(Object.assign({}, A.layer_configs), Q.layer_configs),
            dynamic_configs: Object.assign(Object.assign({}, A.dynamic_configs), Q.dynamic_configs)
        })
    }

    function jy9(A) {
        let Q = A;
        return GV1(A.deleted_gates, Q.feature_gates), delete Q.deleted_gates, GV1(A.deleted_configs, Q.dynamic_configs), delete Q.deleted_configs, GV1(A.deleted_layers, Q.layer_configs), delete Q.deleted_layers, Q
    }

    function GV1(A, Q) {
        A === null || A === void 0 || A.forEach((B) => {
            delete Q[B]
        })
    }
});
var ZV1 = U((gVA) => {
    var LL0 = gVA && gVA.__awaiter || function(A, Q, B, G) {
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
    Object.defineProperty(gVA, "__esModule", {
        value: !0
    });
    var $yA = lu(),
        Sy9 = NL0();
    class ML0 extends $yA.NetworkCore {
        constructor(A, Q) {
            super(A, Q);
            let B = A === null || A === void 0 ? void 0 : A.networkConfig;
            this._initializeUrlConfig = new $yA.UrlConfiguration($yA.Endpoint._initialize, B === null || B === void 0 ? void 0 : B.initializeUrl, B === null || B === void 0 ? void 0 : B.api, B === null || B === void 0 ? void 0 : B.initializeFallbackUrls)
        }
        fetchEvaluations(A, Q, B, G, Z) {
            return LL0(this, void 0, void 0, function*() {
                let I = Q ? (0, $yA._typedJsonParse)(Q, "has_updates", "InitializeResponse") : null,
                    Y = {
                        user: G,
                        hash: "djb2",
                        deltasResponseRequested: !1,
                        full_checksum: null
                    };
                if (I === null || I === void 0 ? void 0 : I.has_updates) Y = Object.assign(Object.assign({}, Y), {
                    sinceTime: Z ? I.time : 0,
                    previousDerivedFields: "derived_fields" in I && Z ? I.derived_fields : {},
                    deltasResponseRequested: !0,
                    full_checksum: I.full_checksum
                });
                return this._fetchEvaluations(A, I, Y, B)
            })
        }
        _fetchEvaluations(A, Q, B, G) {
            var Z, I;
            return LL0(this, void 0, void 0, function*() {
                let Y = yield this.post({
                    sdkKey: A,
                    urlConfig: this._initializeUrlConfig,
                    data: B,
                    retries: 2,
                    isStatsigEncodable: !0,
                    priority: G
                });
                if ((Y === null || Y === void 0 ? void 0 : Y.code) === 204) return '{"has_updates": false}';
                if ((Y === null || Y === void 0 ? void 0 : Y.code) !== 200) return (Z = Y === null || Y === void 0 ? void 0 : Y.body) !== null && Z !== void 0 ? Z : null;
                if ((Q === null || Q === void 0 ? void 0 : Q.has_updates) !== !0 || ((I = Y.body) === null || I === void 0 ? void 0 : I.includes('"is_delta":true')) !== !0 || B.deltasResponseRequested !== !0) return Y.body;
                let J = (0, Sy9._resolveDeltasResponse)(Q, Y.body);
                if (typeof J === "string") return J;
                return this._fetchEvaluations(A, Q, Object.assign(Object.assign(Object.assign({}, B), J), {
                    deltasResponseRequested: !1
                }), G)
            })
        }
    }
    gVA.default = ML0
});
var PL0 = U((RL0) => {
    Object.defineProperty(RL0, "__esModule", {
        value: !0
    });
    RL0._makeParamStoreGetter = void 0;
    var OL0 = lu(),
        wyA = {
            disableExposureLog: !0
        };

    function qyA(A) {
        return A == null || A.disableExposureLog === !1
    }

    function IV1(A, Q) {
        return Q != null && !(0, OL0._isTypeMatch)(A, Q)
    }

    function _y9(A, Q) {
        return A.value
    }

    function ky9(A, Q, B) {
        if (A.getFeatureGate(Q.gate_name, qyA(B) ? void 0 : wyA).value) return Q.pass_value;
        return Q.fail_value
    }

    function yy9(A, Q, B, G) {
        let I = A.getDynamicConfig(Q.config_name, wyA).get(Q.param_name);
        if (IV1(I, B)) return B;
        if (qyA(G)) A.getDynamicConfig(Q.config_name);
        return I
    }

    function xy9(A, Q, B, G) {
        let I = A.getExperiment(Q.experiment_name, wyA).get(Q.param_name);
        if (IV1(I, B)) return B;
        if (qyA(G)) A.getExperiment(Q.experiment_name);
        return I
    }

    function vy9(A, Q, B, G) {
        let I = A.getLayer(Q.layer_name, wyA).get(Q.param_name);
        if (IV1(I, B)) return B;
        if (qyA(G)) A.getLayer(Q.layer_name).get(Q.param_name);
        return I
    }

    function by9(A, Q, B) {
        return (G, Z) => {
            if (Q == null) return Z;
            let I = Q[G];
            if (I == null || Z != null && (0, OL0._typeOf)(Z) !== I.param_type) return Z;
            switch (I.ref_type) {
                case "static":
                    return _y9(I, B);
                case "gate":
                    return ky9(A, I, B);
                case "dynamic_config":
                    return yy9(A, I, Z, B);
                case "experiment":
                    return xy9(A, I, Z, B);
                case "layer":
                    return vy9(A, I, Z, B);
                default:
                    return Z
            }
        }
    }
    RL0._makeParamStoreGetter = by9
});
var SL0 = U((j2A) => {
    var fy9 = j2A && j2A.__awaiter || function(A, Q, B, G) {
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
    Object.defineProperty(j2A, "__esModule", {
        value: !0
    });
    j2A.StatsigEvaluationsDataAdapter = void 0;
    var vs = lu(),
        hy9 = ZV1();
    class jL0 extends vs.DataAdapterCore {
        constructor() {
            super("EvaluationsDataAdapter", "evaluations");
            this._network = null, this._options = null
        }
        attach(A, Q) {
            super.attach(A, Q), this._network = new hy9.default(Q !== null && Q !== void 0 ? Q : {})
        }
        getDataAsync(A, Q, B) {
            return this._getDataAsyncImpl(A, (0, vs._normalizeUser)(Q, this._options), B)
        }
        prefetchData(A, Q) {
            return this._prefetchDataImpl(A, Q)
        }
        setData(A) {
            let Q = (0, vs._typedJsonParse)(A, "has_updates", "data");
            if (Q && "user" in Q) super.setData(A, Q.user);
            else vs.Log.error("StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.")
        }
        setDataLegacy(A, Q) {
            super.setData(A, Q)
        }
        _fetchFromNetwork(A, Q, B, G) {
            var Z;
            return fy9(this, void 0, void 0, function*() {
                let I = yield(Z = this._network) === null || Z === void 0 ? void 0 : Z.fetchEvaluations(this._getSdkKey(), A, B === null || B === void 0 ? void 0 : B.priority, Q, G);
                return I !== null && I !== void 0 ? I : null
            })
        }
        _getCacheKey(A) {
            var Q;
            let B = (0, vs._getStorageKey)(this._getSdkKey(), A, (Q = this._options) === null || Q === void 0 ? void 0 : Q.customUserCacheKeyFunc);
            return `${vs.DataAdapterCachePrefix}.${this._cacheSuffix}.${B}`
        }
        _isCachedResultValidFor204(A, Q) {
            return A.fullUserHash != null && A.fullUserHash === (0, vs._getFullUserHash)(Q)
        }
    }
    j2A.StatsigEvaluationsDataAdapter = jL0
});
var kL0 = U((uVA) => {
    var YV1 = uVA && uVA.__awaiter || function(A, Q, B, G) {
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
    Object.defineProperty(uVA, "__esModule", {
        value: !0
    });
    var z6 = lu(),
        gy9 = UL0(),
        uy9 = ZV1(),
        _L0 = PL0(),
        my9 = SL0();
    class NyA extends z6.StatsigClientBase {
        static instance(A) {
            let Q = (0, z6._getStatsigGlobal)().instance(A);
            if (Q instanceof NyA) return Q;
            return z6.Log.warn((0, z6._isServerEnv)() ? "StatsigClient.instance is not supported in server environments" : "Unable to find StatsigClient instance"), new NyA(A !== null && A !== void 0 ? A : "", {})
        }
        constructor(A, Q, B = null) {
            var G, Z;
            z6.SDKType._setClientType(A, "javascript-client");
            let I = new uy9.default(B, (J) => {
                this.$emt(J)
            });
            super(A, (G = B === null || B === void 0 ? void 0 : B.dataAdapter) !== null && G !== void 0 ? G : new my9.StatsigEvaluationsDataAdapter, I, B);
            this.getFeatureGate = this._memoize(z6.MemoPrefix._gate, this._getFeatureGateImpl.bind(this)), this.getDynamicConfig = this._memoize(z6.MemoPrefix._dynamicConfig, this._getDynamicConfigImpl.bind(this)), this.getExperiment = this._memoize(z6.MemoPrefix._experiment, this._getExperimentImpl.bind(this)), this.getLayer = this._memoize(z6.MemoPrefix._layer, this._getLayerImpl.bind(this)), this.getParameterStore = this._memoize(z6.MemoPrefix._paramStore, this._getParameterStoreImpl.bind(this)), this._store = new gy9.default(A), this._network = I, this._user = this._configureUser(Q, B);
            let Y = (Z = B === null || B === void 0 ? void 0 : B.plugins) !== null && Z !== void 0 ? Z : [];
            for (let J of Y) J.bind(this)
        }
        initializeSync(A) {
            var Q;
            if (this.loadingStatus !== "Uninitialized") return (0, z6.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, ["MultipleInitializations", ...(Q = this._store.getWarnings()) !== null && Q !== void 0 ? Q : []]);
            return this._logger.start(), this.updateUserSync(this._user, A)
        }
        initializeAsync(A) {
            return YV1(this, void 0, void 0, function*() {
                if (this._initializePromise) return this._initializePromise;
                return this._initializePromise = this._initializeAsyncImpl(A), this._initializePromise
            })
        }
        updateUserSync(A, Q) {
            var B;
            let G = performance.now(),
                Z = [...(B = this._store.getWarnings()) !== null && B !== void 0 ? B : []];
            this._resetForUser(A);
            let I = this.dataAdapter.getDataSync(this._user);
            if (I == null) Z.push("NoCachedValues");
            this._store.setValues(I, this._user), this._finalizeUpdate(I);
            let Y = Q === null || Q === void 0 ? void 0 : Q.disableBackgroundCacheRefresh;
            if (Y === !0 || Y == null && (I === null || I === void 0 ? void 0 : I.source) === "Bootstrap") return (0, z6.createUpdateDetails)(!0, this._store.getSource(), performance.now() - G, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), Z);
            return this._runPostUpdate(I !== null && I !== void 0 ? I : null, this._user), (0, z6.createUpdateDetails)(!0, this._store.getSource(), performance.now() - G, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), Z)
        }
        updateUserAsync(A, Q) {
            return YV1(this, void 0, void 0, function*() {
                this._resetForUser(A);
                let B = this._user;
                z6.Diagnostics._markInitOverallStart(this._sdkKey);
                let G = this.dataAdapter.getDataSync(B);
                if (this._store.setValues(G, this._user), this._setStatus("Loading", G), G = yield this.dataAdapter.getDataAsync(G, B, Q), B !== this._user) return (0, z6.createUpdateDetails)(!1, this._store.getSource(), -1, Error("User changed during update"), this._network.getLastUsedInitUrlAndReset());
                let Z = !1;
                if (G != null) z6.Diagnostics._markInitProcessStart(this._sdkKey), Z = this._store.setValues(G, this._user), z6.Diagnostics._markInitProcessEnd(this._sdkKey, {
                    success: Z
                });
                if (this._finalizeUpdate(G), !Z) this._errorBoundary.attachErrorIfNoneExists(z6.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA), this.$emt({
                    name: "initialization_failure"
                });
                z6.Diagnostics._markInitOverallEnd(this._sdkKey, Z, this._store.getCurrentSourceDetails());
                let I = z6.Diagnostics._enqueueDiagnosticsEvent(this._user, this._logger, this._sdkKey, this._options);
                return (0, z6.createUpdateDetails)(Z, this._store.getSource(), I, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), this._store.getWarnings())
            })
        }
        getContext() {
            return {
                sdkKey: this._sdkKey,
                options: this._options,
                values: this._store.getValues(),
                user: JSON.parse(JSON.stringify(this._user)),
                errorBoundary: this._errorBoundary,
                session: z6.StatsigSession.get(this._sdkKey),
                stableID: z6.StableID.get(this._sdkKey)
            }
        }
        checkGate(A, Q) {
            return this.getFeatureGate(A, Q).value
        }
        logEvent(A, Q, B) {
            let G = typeof A === "string" ? {
                eventName: A,
                value: Q,
                metadata: B
            } : A;
            this._logger.enqueue(Object.assign(Object.assign({}, G), {
                user: this._user,
                time: Date.now()
            }))
        }
        _primeReadyRipcord() {
            this.$on("error", () => {
                this.loadingStatus === "Loading" && this._finalizeUpdate(null)
            })
        }
        _initializeAsyncImpl(A) {
            return YV1(this, void 0, void 0, function*() {
                if (!z6.Storage.isReady()) yield z6.Storage.isReadyResolver();
                return this._logger.start(), this.updateUserAsync(this._user, A)
            })
        }
        _finalizeUpdate(A) {
            this._store.finalize(), this._setStatus("Ready", A)
        }
        _runPostUpdate(A, Q) {
            this.dataAdapter.getDataAsync(A, Q, {
                priority: "low"
            }).catch((B) => {
                z6.Log.error("An error occurred after update.", B)
            })
        }
        _resetForUser(A) {
            this._logger.reset(), this._store.reset(), this._user = this._configureUser(A, this._options)
        }
        _configureUser(A, Q) {
            var B;
            let G = (0, z6._normalizeUser)(A, Q),
                Z = (B = G.customIDs) === null || B === void 0 ? void 0 : B.stableID;
            if (Z) z6.StableID.setOverride(Z, this._sdkKey);
            return G
        }
        _getFeatureGateImpl(A, Q) {
            var B, G;
            let {
                result: Z,
                details: I
            } = this._store.getGate(A), Y = (0, z6._makeFeatureGate)(A, I, Z), J = (G = (B = this.overrideAdapter) === null || B === void 0 ? void 0 : B.getGateOverride) === null || G === void 0 ? void 0 : G.call(B, Y, this._user, Q), W = J !== null && J !== void 0 ? J : Y;
            return this._enqueueExposure(A, (0, z6._createGateExposure)(this._user, W, this._store.getExposureMapping()), Q), this.$emt({
                name: "gate_evaluation",
                gate: W
            }), W
        }
        _getDynamicConfigImpl(A, Q) {
            var B, G;
            let {
                result: Z,
                details: I
            } = this._store.getConfig(A), Y = (0, z6._makeDynamicConfig)(A, I, Z), J = (G = (B = this.overrideAdapter) === null || B === void 0 ? void 0 : B.getDynamicConfigOverride) === null || G === void 0 ? void 0 : G.call(B, Y, this._user, Q), W = J !== null && J !== void 0 ? J : Y;
            return this._enqueueExposure(A, (0, z6._createConfigExposure)(this._user, W, this._store.getExposureMapping()), Q), this.$emt({
                name: "dynamic_config_evaluation",
                dynamicConfig: W
            }), W
        }
        _getExperimentImpl(A, Q) {
            var B, G, Z, I;
            let {
                result: Y,
                details: J
            } = this._store.getConfig(A), W = (0, z6._makeExperiment)(A, J, Y);
            if (W.__evaluation != null) W.__evaluation.secondary_exposures = (0, z6._mapExposures)((G = (B = W.__evaluation) === null || B === void 0 ? void 0 : B.secondary_exposures) !== null && G !== void 0 ? G : [], this._store.getExposureMapping());
            let X = (I = (Z = this.overrideAdapter) === null || Z === void 0 ? void 0 : Z.getExperimentOverride) === null || I === void 0 ? void 0 : I.call(Z, W, this._user, Q),
                F = X !== null && X !== void 0 ? X : W;
            return this._enqueueExposure(A, (0, z6._createConfigExposure)(this._user, F, this._store.getExposureMapping()), Q), this.$emt({
                name: "experiment_evaluation",
                experiment: F
            }), F
        }
        _getLayerImpl(A, Q) {
            var B, G, Z;
            let {
                result: I,
                details: Y
            } = this._store.getLayer(A), J = (0, z6._makeLayer)(A, Y, I), W = (G = (B = this.overrideAdapter) === null || B === void 0 ? void 0 : B.getLayerOverride) === null || G === void 0 ? void 0 : G.call(B, J, this._user, Q);
            if (Q === null || Q === void 0 ? void 0 : Q.disableExposureLog) this._logger.incrementNonExposureCount(A);
            let X = (0, z6._mergeOverride)(J, W, (Z = W === null || W === void 0 ? void 0 : W.__value) !== null && Z !== void 0 ? Z : J.__value, (F) => {
                if (Q === null || Q === void 0 ? void 0 : Q.disableExposureLog) return;
                this._enqueueExposure(A, (0, z6._createLayerParameterExposure)(this._user, X, F, this._store.getExposureMapping()), Q)
            });
            return this.$emt({
                name: "layer_evaluation",
                layer: X
            }), X
        }
        _getParameterStoreImpl(A, Q) {
            var B, G;
            let {
                result: Z,
                details: I
            } = this._store.getParamStore(A);
            this._logger.incrementNonExposureCount(A);
            let Y = {
                    name: A,
                    details: I,
                    __configuration: Z,
                    get: (0, _L0._makeParamStoreGetter)(this, Z, Q)
                },
                J = (G = (B = this.overrideAdapter) === null || B === void 0 ? void 0 : B.getParamStoreOverride) === null || G === void 0 ? void 0 : G.call(B, Y, Q);
            if (J != null) Y.__configuration = J.config, Y.details = J.details, Y.get = (0, _L0._makeParamStoreGetter)(this, J.config, Q);
            return Y
        }
    }
    uVA.default = NyA
});
var xL0 = U((vj) => {
    var dy9 = vj && vj.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        cy9 = vj && vj.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) dy9(Q, A, B)
        };
    Object.defineProperty(vj, "__esModule", {
        value: !0
    });
    vj.StatsigClient = void 0;
    var yL0 = kL0();
    vj.StatsigClient = yL0.default;
    cy9(lu(), vj);
    __STATSIG__ = Object.assign(Object.assign({}, __STATSIG__ !== null && __STATSIG__ !== void 0 ? __STATSIG__ : {}), {
        StatsigClient: yL0.default
    });
    vj.default = __STATSIG__
});
var py9, ly9, iy9;
var vL0 = L(() => {
    py9 = {
        visibilityState: "visible",
        documentElement: {
            lang: "en"
        },
        addEventListener: (A, Q) => {}
    }, ly9 = {
        document: py9,
        location: {
            href: "node://localhost",
            pathname: "/"
        },
        addEventListener: (A, Q) => {
            if (A === "beforeunload") process.on("exit", () => {
                if (typeof Q === "function") Q({});
                else Q.handleEvent({})
            })
        },
        focus: () => {},
        innerHeight: 768,
        innerWidth: 1024
    }, iy9 = {
        sendBeacon: (A, Q) => {
            return !0
        },
        userAgent: "Mozilla/5.0 (Node.js) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0",
        language: "en-US"
    };
    if (typeof window > "u") global.window = ly9;
    if (typeof navigator > "u") global.navigator = iy9
});

function LyA(A) {
    return A.sort((Q, B) => {
        let G = B.modified.getTime() - Q.modified.getTime();
        if (G !== 0) return G;
        let Z = B.created.getTime() - Q.created.getTime();
        if (Z !== 0) return Z;
        return Q.created.getTime() - B.created.getTime()
    })
}
import {
    setMaxListeners as ny9
} from "events";

function s9(A = ay9) {
    let Q = new AbortController;
    return ny9(A, Q.signal), Q
}

function bL0() {
    return s9(sy9)
}

function fL0(A, Q) {
    let B = s9(Q);
    return A.signal.addEventListener("abort", () => B.abort(A.signal.reason), {
        once: !0
    }), B
}
var ay9 = 50,
    sy9 = 500;
var UZ = () => {};
import jY from "node:path";
import hL0 from "node:os";
import JV1 from "node:process";

function XV1(A, {
    suffix: Q = "nodejs"
} = {}) {
    if (typeof A !== "string") throw TypeError(`Expected a string, got ${typeof A}`);
    if (Q) A += `-${Q}`;
    if (JV1.platform === "darwin") return ry9(A);
    if (JV1.platform === "win32") return oy9(A);
    return ty9(A)
}
var iu, WV1, S2A, ry9 = (A) => {
        let Q = jY.join(iu, "Library");
        return {
            data: jY.join(Q, "Application Support", A),
            config: jY.join(Q, "Preferences", A),
            cache: jY.join(Q, "Caches", A),
            log: jY.join(Q, "Logs", A),
            temp: jY.join(WV1, A)
        }
    },
    oy9 = (A) => {
        let Q = S2A.APPDATA || jY.join(iu, "AppData", "Roaming"),
            B = S2A.LOCALAPPDATA || jY.join(iu, "AppData", "Local");
        return {
            data: jY.join(B, A, "Data"),
            config: jY.join(Q, A, "Config"),
            cache: jY.join(B, A, "Cache"),
            log: jY.join(B, A, "Log"),
            temp: jY.join(WV1, A)
        }
    },
    ty9 = (A) => {
        let Q = jY.basename(iu);
        return {
            data: jY.join(S2A.XDG_DATA_HOME || jY.join(iu, ".local", "share"), A),
            config: jY.join(S2A.XDG_CONFIG_HOME || jY.join(iu, ".config"), A),
            cache: jY.join(S2A.XDG_CACHE_HOME || jY.join(iu, ".cache"), A),
            log: jY.join(S2A.XDG_STATE_HOME || jY.join(iu, ".local", "state"), A),
            temp: jY.join(WV1, Q, A)
        }
    };
var gL0 = L(() => {
    iu = hL0.homedir(), WV1 = hL0.tmpdir(), {
        env: S2A
    } = JV1
});
var t7 = U((uL0) => {
    Object.defineProperty(uL0, "__esModule", {
        value: !0
    });
    uL0.isFunction = void 0;

    function ey9(A) {
        return typeof A === "function"
    }
    uL0.isFunction = ey9
});
var nu = U((dL0) => {
    Object.defineProperty(dL0, "__esModule", {
        value: !0
    });
    dL0.createErrorClass = void 0;

    function Ax9(A) {
        var Q = function(G) {
                Error.call(G), G.stack = Error().stack
            },
            B = A(Q);
        return B.prototype = Object.create(Error.prototype), B.prototype.constructor = B, B
    }
    dL0.createErrorClass = Ax9
});
var FV1 = U((pL0) => {
    Object.defineProperty(pL0, "__esModule", {
        value: !0
    });
    pL0.UnsubscriptionError = void 0;
    var Qx9 = nu();
    pL0.UnsubscriptionError = Qx9.createErrorClass(function(A) {
        return function(B) {
            A(this), this.message = B ? B.length + ` errors occurred during unsubscription:
` + B.map(function(G, Z) {
                return Z + 1 + ") " + G.toString()
            }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = B
        }
    })
});
var sx = U((iL0) => {
    Object.defineProperty(iL0, "__esModule", {
        value: !0
    });
    iL0.arrRemove = void 0;

    function Bx9(A, Q) {
        if (A) {
            var B = A.indexOf(Q);
            0 <= B && A.splice(B, 1)
        }
    }
    iL0.arrRemove = Bx9
});
var r$ = U((bz) => {
    var aL0 = bz && bz.__values || function(A) {
            var Q = typeof Symbol === "function" && Symbol.iterator,
                B = Q && A[Q],
                G = 0;
            if (B) return B.call(A);
            if (A && typeof A.length === "number") return {
                next: function() {
                    if (A && G >= A.length) A = void 0;
                    return {
                        value: A && A[G++],
                        done: !A
                    }
                }
            };
            throw TypeError(Q ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        sL0 = bz && bz.__read || function(A, Q) {
            var B = typeof Symbol === "function" && A[Symbol.iterator];
            if (!B) return A;
            var G = B.call(A),
                Z, I = [],
                Y;
            try {
                while ((Q === void 0 || Q-- > 0) && !(Z = G.next()).done) I.push(Z.value)
            } catch (J) {
                Y = {
                    error: J
                }
            } finally {
                try {
                    if (Z && !Z.done && (B = G.return)) B.call(G)
                } finally {
                    if (Y) throw Y.error
                }
            }
            return I
        },
        rL0 = bz && bz.__spreadArray || function(A, Q) {
            for (var B = 0, G = Q.length, Z = A.length; B < G; B++, Z++) A[Z] = Q[B];
            return A
        };
    Object.defineProperty(bz, "__esModule", {
        value: !0
    });
    bz.isSubscription = bz.EMPTY_SUBSCRIPTION = bz.Subscription = void 0;
    var mVA = t7(),
        VV1 = FV1(),
        oL0 = sx(),
        KV1 = function() {
            function A(Q) {
                this.initialTeardown = Q, this.closed = !1, this._parentage = null, this._finalizers = null
            }
            return A.prototype.unsubscribe = function() {
                var Q, B, G, Z, I;
                if (!this.closed) {
                    this.closed = !0;
                    var Y = this._parentage;
                    if (Y)
                        if (this._parentage = null, Array.isArray(Y)) try {
                            for (var J = aL0(Y), W = J.next(); !W.done; W = J.next()) {
                                var X = W.value;
                                X.remove(this)
                            }
                        } catch (C) {
                            Q = {
                                error: C
                            }
                        } finally {
                            try {
                                if (W && !W.done && (B = J.return)) B.call(J)
                            } finally {
                                if (Q) throw Q.error
                            }
                        } else Y.remove(this);
                    var F = this.initialTeardown;
                    if (mVA.isFunction(F)) try {
                        F()
                    } catch (C) {
                        I = C instanceof VV1.UnsubscriptionError ? C.errors : [C]
                    }
                    var V = this._finalizers;
                    if (V) {
                        this._finalizers = null;
                        try {
                            for (var K = aL0(V), D = K.next(); !D.done; D = K.next()) {
                                var H = D.value;
                                try {
                                    tL0(H)
                                } catch (C) {
                                    if (I = I !== null && I !== void 0 ? I : [], C instanceof VV1.UnsubscriptionError) I = rL0(rL0([], sL0(I)), sL0(C.errors));
                                    else I.push(C)
                                }
                            }
                        } catch (C) {
                            G = {
                                error: C
                            }
                        } finally {
                            try {
                                if (D && !D.done && (Z = K.return)) Z.call(K)
                            } finally {
                                if (G) throw G.error
                            }
                        }
                    }
                    if (I) throw new VV1.UnsubscriptionError(I)
                }
            }, A.prototype.add = function(Q) {
                var B;
                if (Q && Q !== this)
                    if (this.closed) tL0(Q);
                    else {
                        if (Q instanceof A) {
                            if (Q.closed || Q._hasParent(this)) return;
                            Q._addParent(this)
                        }(this._finalizers = (B = this._finalizers) !== null && B !== void 0 ? B : []).push(Q)
                    }
            }, A.prototype._hasParent = function(Q) {
                var B = this._parentage;
                return B === Q || Array.isArray(B) && B.includes(Q)
            }, A.prototype._addParent = function(Q) {
                var B = this._parentage;
                this._parentage = Array.isArray(B) ? (B.push(Q), B) : B ? [B, Q] : Q
            }, A.prototype._removeParent = function(Q) {
                var B = this._parentage;
                if (B === Q) this._parentage = null;
                else if (Array.isArray(B)) oL0.arrRemove(B, Q)
            }, A.prototype.remove = function(Q) {
                var B = this._finalizers;
                if (B && oL0.arrRemove(B, Q), Q instanceof A) Q._removeParent(this)
            }, A.EMPTY = function() {
                var Q = new A;
                return Q.closed = !0, Q
            }(), A
        }();
    bz.Subscription = KV1;
    bz.EMPTY_SUBSCRIPTION = KV1.EMPTY;

    function Gx9(A) {
        return A instanceof KV1 || A && "closed" in A && mVA.isFunction(A.remove) && mVA.isFunction(A.add) && mVA.isFunction(A.unsubscribe)
    }
    bz.isSubscription = Gx9;

    function tL0(A) {
        if (mVA.isFunction(A)) A();
        else A.unsubscribe()
    }
});
var _2A = U((eL0) => {
    Object.defineProperty(eL0, "__esModule", {
        value: !0
    });
    eL0.config = void 0;
    eL0.config = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    }
});
var DV1 = U((bj) => {
    var QM0 = bj && bj.__read || function(A, Q) {
            var B = typeof Symbol === "function" && A[Symbol.iterator];
            if (!B) return A;
            var G = B.call(A),
                Z, I = [],
                Y;
            try {
                while ((Q === void 0 || Q-- > 0) && !(Z = G.next()).done) I.push(Z.value)
            } catch (J) {
                Y = {
                    error: J
                }
            } finally {
                try {
                    if (Z && !Z.done && (B = G.return)) B.call(G)
                } finally {
                    if (Y) throw Y.error
                }
            }
            return I
        },
        BM0 = bj && bj.__spreadArray || function(A, Q) {
            for (var B = 0, G = Q.length, Z = A.length; B < G; B++, Z++) A[Z] = Q[B];
            return A
        };
    Object.defineProperty(bj, "__esModule", {
        value: !0
    });
    bj.timeoutProvider = void 0;
    bj.timeoutProvider = {
        setTimeout: function(A, Q) {
            var B = [];
            for (var G = 2; G < arguments.length; G++) B[G - 2] = arguments[G];
            var Z = bj.timeoutProvider.delegate;
            if (Z === null || Z === void 0 ? void 0 : Z.setTimeout) return Z.setTimeout.apply(Z, BM0([A, Q], QM0(B)));
            return setTimeout.apply(void 0, BM0([A, Q], QM0(B)))
        },
        clearTimeout: function(A) {
            var Q = bj.timeoutProvider.delegate;
            return ((Q === null || Q === void 0 ? void 0 : Q.clearTimeout) || clearTimeout)(A)
        },
        delegate: void 0
    }
});
var HV1 = U((GM0) => {
    Object.defineProperty(GM0, "__esModule", {
        value: !0
    });
    GM0.reportUnhandledError = void 0;
    var Zx9 = _2A(),
        Ix9 = DV1();

    function Yx9(A) {
        Ix9.timeoutProvider.setTimeout(function() {
            var Q = Zx9.config.onUnhandledError;
            if (Q) Q(A);
            else throw A
        })
    }
    GM0.reportUnhandledError = Yx9
});
var xK = U((IM0) => {
    Object.defineProperty(IM0, "__esModule", {
        value: !0
    });
    IM0.noop = void 0;

    function Jx9() {}
    IM0.noop = Jx9
});
var XM0 = U((JM0) => {
    Object.defineProperty(JM0, "__esModule", {
        value: !0
    });
    JM0.createNotification = JM0.nextNotification = JM0.errorNotification = JM0.COMPLETE_NOTIFICATION = void 0;
    JM0.COMPLETE_NOTIFICATION = function() {
        return MyA("C", void 0, void 0)
    }();

    function Wx9(A) {
        return MyA("E", void 0, A)
    }
    JM0.errorNotification = Wx9;

    function Xx9(A) {
        return MyA("N", A, void 0)
    }
    JM0.nextNotification = Xx9;

    function MyA(A, Q, B) {
        return {
            kind: A,
            value: Q,
            error: B
        }
    }
    JM0.createNotification = MyA
});
var OyA = U((VM0) => {
    Object.defineProperty(VM0, "__esModule", {
        value: !0
    });
    VM0.captureError = VM0.errorContext = void 0;
    var FM0 = _2A(),
        bs = null;

    function Dx9(A) {
        if (FM0.config.useDeprecatedSynchronousErrorHandling) {
            var Q = !bs;
            if (Q) bs = {
                errorThrown: !1,
                error: null
            };
            if (A(), Q) {
                var B = bs,
                    G = B.errorThrown,
                    Z = B.error;
                if (bs = null, G) throw Z
            }
        } else A()
    }
    VM0.errorContext = Dx9;

    function Hx9(A) {
        if (FM0.config.useDeprecatedSynchronousErrorHandling && bs) bs.errorThrown = !0, bs.error = A
    }
    VM0.captureError = Hx9
});
var k2A = U((ER) => {
    var CM0 = ER && ER.__extends || function() {
        var A = function(Q, B) {
            return A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(G, Z) {
                G.__proto__ = Z
            } || function(G, Z) {
                for (var I in Z)
                    if (Object.prototype.hasOwnProperty.call(Z, I)) G[I] = Z[I]
            }, A(Q, B)
        };
        return function(Q, B) {
            if (typeof B !== "function" && B !== null) throw TypeError("Class extends value " + String(B) + " is not a constructor or null");
            A(Q, B);

            function G() {
                this.constructor = Q
            }
            Q.prototype = B === null ? Object.create(B) : (G.prototype = B.prototype, new G)
        }
    }();
    Object.defineProperty(ER, "__esModule", {
        value: !0
    });
    ER.EMPTY_OBSERVER = ER.SafeSubscriber = ER.Subscriber = void 0;
    var Ex9 = t7(),
        DM0 = r$(),
        UV1 = _2A(),
        zx9 = HV1(),
        HM0 = xK(),
        CV1 = XM0(),
        Ux9 = DV1(),
        $x9 = OyA(),
        EM0 = function(A) {
            CM0(Q, A);

            function Q(B) {
                var G = A.call(this) || this;
                if (G.isStopped = !1, B) {
                    if (G.destination = B, DM0.isSubscription(B)) B.add(G)
                } else G.destination = ER.EMPTY_OBSERVER;
                return G
            }
            return Q.create = function(B, G, Z) {
                return new zM0(B, G, Z)
            }, Q.prototype.next = function(B) {
                if (this.isStopped) zV1(CV1.nextNotification(B), this);
                else this._next(B)
            }, Q.prototype.error = function(B) {
                if (this.isStopped) zV1(CV1.errorNotification(B), this);
                else this.isStopped = !0, this._error(B)
            }, Q.prototype.complete = function() {
                if (this.isStopped) zV1(CV1.COMPLETE_NOTIFICATION, this);
                else this.isStopped = !0, this._complete()
            }, Q.prototype.unsubscribe = function() {
                if (!this.closed) this.isStopped = !0, A.prototype.unsubscribe.call(this), this.destination = null
            }, Q.prototype._next = function(B) {
                this.destination.next(B)
            }, Q.prototype._error = function(B) {
                try {
                    this.destination.error(B)
                } finally {
                    this.unsubscribe()
                }
            }, Q.prototype._complete = function() {
                try {
                    this.destination.complete()
                } finally {
                    this.unsubscribe()
                }
            }, Q
        }(DM0.Subscription);
    ER.Subscriber = EM0;
    var wx9 = Function.prototype.bind;

    function EV1(A, Q) {
        return wx9.call(A, Q)
    }
    var qx9 = function() {
            function A(Q) {
                this.partialObserver = Q
            }
            return A.prototype.next = function(Q) {
                var B = this.partialObserver;
                if (B.next) try {
                    B.next(Q)
                } catch (G) {
                    RyA(G)
                }
            }, A.prototype.error = function(Q) {
                var B = this.partialObserver;
                if (B.error) try {
                    B.error(Q)
                } catch (G) {
                    RyA(G)
                } else RyA(Q)
            }, A.prototype.complete = function() {
                var Q = this.partialObserver;
                if (Q.complete) try {
                    Q.complete()
                } catch (B) {
                    RyA(B)
                }
            }, A
        }(),
        zM0 = function(A) {
            CM0(Q, A);

            function Q(B, G, Z) {
                var I = A.call(this) || this,
                    Y;
                if (Ex9.isFunction(B) || !B) Y = {
                    next: B !== null && B !== void 0 ? B : void 0,
                    error: G !== null && G !== void 0 ? G : void 0,
                    complete: Z !== null && Z !== void 0 ? Z : void 0
                };
                else {
                    var J;