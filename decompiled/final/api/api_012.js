/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_012.js
 * 处理时间: 2025-12-09T03:41:36.115Z
 * 变量映射: 9 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * J6       (  6x) getProvider() - Returns current provider ("vertex", ...
 * S3       (  2x) getDefaultSonnetModel() - Returns "claude-sonnet-4-5...
 * Uw6      (  2x) SERVICE_NAME = "claude-code"
 * V0       (  2x) parseBoolean(value) - Parse bool env
 * ZI       (  2x) getFeatureFlag(name, scope, default)
 * o9       (  1x) getConfig() - Returns config with BASE_API_URL, OAut...
 * LW       (  1x) getSmallFastModel() - Returns haiku model
 * bRB      (  1x) SENTRY_DSN = "https://...@sentry.io/..."
 * GA       (  1x) esmImport(module) - ESM import
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 12/30
 * Lines: 198664 - 200163 (1500 lines)
 * Original file: cli.js
 */

    onDestroy(A) {
        this._destroyCallbacks.push(A)
    }
    isDestroyed() {
        return !!this._destroyed
    }
    destroy() {
        if (this._destroyed = !0, this._destroyCallbacks.forEach((A) => {
                try {
                    A()
                } catch (Q) {
                    console.error(Q)
                }
            }), this._subscriptions.clear(), this._assigned.clear(), this._trackedExperiments.clear(), this._completedChangeIds.clear(), this._deferredTrackingCalls.clear(), this._trackedFeatures = {}, this._destroyCallbacks = [], this._payload = void 0, this._saveStickyBucketAssignmentDoc = void 0, IRB(this), this.logs = [], i7A && window._growthbook === this) delete window._growthbook;
        this._activeAutoExperiments.forEach((A) => {
            A.undo()
        }), this._activeAutoExperiments.clear(), this._triggeredExpKeys.clear()
    }
    setRenderer(A) {
        this._renderer = A
    }
    forceVariation(A, Q) {
        if (this._options.forcedVariations = this._options.forcedVariations || {}, this._options.forcedVariations[A] = Q, this._options.remoteEval) {
            this._refreshForRemoteEval();
            return
        }
        this._updateAllAutoExperiments(), this._render()
    }
    run(A) {
        let {
            result: Q
        } = tsA(A, null, this._getEvalContext());
        return this._fireSubscriptions(A, Q), Q
    }
    triggerExperiment(A) {
        if (this._triggeredExpKeys.add(A), !this._options.experiments) return null;
        return this._options.experiments.filter((B) => B.key === A).map((B) => {
            return this._runAutoExperiment(B)
        }).filter((B) => B !== null)
    }
    triggerAutoExperiments() {
        this._autoExperimentsAllowed = !0, this._updateAllAutoExperiments(!0)
    }
    _getEvalContext() {
        return {
            user: this._getUserContext(),
            global: this._getGlobalContext(),
            stack: {
                evaluatedFeatures: new Set
            }
        }
    }
    _getUserContext() {
        return {
            attributes: this._options.user ? {
                ...this._options.user,
                ...this._options.attributes
            } : this._options.attributes,
            enableDevMode: this._options.enableDevMode,
            blockedChangeIds: this._options.blockedChangeIds,
            stickyBucketAssignmentDocs: this._options.stickyBucketAssignmentDocs,
            url: this._getContextUrl(),
            forcedVariations: this._options.forcedVariations,
            forcedFeatureValues: this._options.forcedFeatureValues,
            attributeOverrides: this._options.attributeOverrides,
            saveStickyBucketAssignmentDoc: this._saveStickyBucketAssignmentDoc,
            trackingCallback: this._options.trackingCallback,
            onFeatureUsage: this._options.onFeatureUsage,
            devLogs: this.logs,
            trackedExperiments: this._trackedExperiments,
            trackedFeatureUsage: this._trackedFeatures
        }
    }
    _getGlobalContext() {
        return {
            features: this._options.features,
            experiments: this._options.experiments,
            log: this.log,
            enabled: this._options.enabled,
            qaMode: this._options.qaMode,
            savedGroups: this._options.savedGroups,
            groups: this._options.groups,
            overrides: this._options.overrides,
            onExperimentEval: this._subscriptions.size > 0 ? this._fireSubscriptions : void 0,
            recordChangeId: this._recordChangedId,
            saveDeferredTrack: this._saveDeferredTrack,
            eventLogger: this._options.eventLogger
        }
    }
    _runAutoExperiment(A, Q) {
        let B = this._activeAutoExperiments.get(A);
        if (A.manual && !this._triggeredExpKeys.has(A.key) && !B) return null;
        let G = this._isAutoExperimentBlockedByContext(A),
            Z, I;
        if (G) Z = AY(this._getEvalContext(), A, -1, !1, "");
        else({
            result: Z,
            trackingCall: I
        } = tsA(A, null, this._getEvalContext())), this._fireSubscriptions(A, Z);
        let Y = JSON.stringify(Z.value);
        if (!Q && Z.inExperiment && B && B.valueHash === Y) return Z;
        if (B) this._undoActiveAutoExperiment(A);
        if (Z.inExperiment) {
            let J = hsA(A);
            if (J === "redirect" && Z.value.urlRedirect && A.urlPatterns) {
                let W = A.persistQueryString ? ARB(this._getContextUrl(), Z.value.urlRedirect) : Z.value.urlRedirect;
                if (fsA(W, A.urlPatterns)) return this.log("Skipping redirect because original URL matches redirect URL", {
                    id: A.key
                }), Z;
                this._redirectedUrl = W;
                let {
                    navigate: X,
                    delay: F
                } = this._getNavigateFunction();
                if (X)
                    if (i7A) Promise.all([...I ? [gsA(I, this._options.maxNavigateDelay ?? 1000)] : [], new Promise((V) => window.setTimeout(V, this._options.navigateDelay ?? F))]).then(() => {
                        try {
                            X(W)
                        } catch (V) {
                            console.error(V)
                        }
                    });
                    else try {
                        X(W)
                    } catch (V) {
                        console.error(V)
                    }
            } else if (J === "visual") {
                let W = this._options.applyDomChangesCallback ? this._options.applyDomChangesCallback(Z.value) : this._applyDOMChanges(Z.value);
                if (W) this._activeAutoExperiments.set(A, {
                    undo: W,
                    valueHash: Y
                })
            }
        }
        return Z
    }
    _undoActiveAutoExperiment(A) {
        let Q = this._activeAutoExperiments.get(A);
        if (Q) Q.undo(), this._activeAutoExperiments.delete(A)
    }
    _updateAllAutoExperiments(A) {
        if (!this._autoExperimentsAllowed) return;
        let Q = this._options.experiments || [],
            B = new Set(Q);
        this._activeAutoExperiments.forEach((G, Z) => {
            if (!B.has(Z)) G.undo(), this._activeAutoExperiments.delete(Z)
        });
        for (let G of Q) {
            let Z = this._runAutoExperiment(G, A);
            if (Z !== null && Z !== void 0 && Z.inExperiment && hsA(G) === "redirect") break
        }
    }
    _fireSubscriptions(A, Q) {
        let B = A.key,
            G = this._assigned.get(B);
        if (!G || G.result.inExperiment !== Q.inExperiment || G.result.variationId !== Q.variationId) this._assigned.set(B, {
            experiment: A,
            result: Q
        }), this._subscriptions.forEach((Z) => {
            try {
                Z(A, Q)
            } catch (I) {
                console.error(I)
            }
        })
    }
    _recordChangedId(A) {
        this._completedChangeIds.add(A)
    }
    isOn(A) {
        return this.evalFeature(A).on
    }
    isOff(A) {
        return this.evalFeature(A).off
    }
    getFeatureValue(A, Q) {
        let B = this.evalFeature(A).value;
        return B === null ? Q : B
    }
    feature(A) {
        return this.evalFeature(A)
    }
    evalFeature(A) {
        return osA(A, this._getEvalContext())
    }
    log(A, Q) {
        if (!this.debug) return;
        if (this._options.log) this._options.log(A, Q);
        else console.log(A, Q)
    }
    getDeferredTrackingCalls() {
        return Array.from(this._deferredTrackingCalls.values())
    }
    setDeferredTrackingCalls(A) {
        this._deferredTrackingCalls = new Map(A.filter((Q) => Q && Q.experiment && Q.result).map((Q) => {
            return [esA(Q.experiment, Q.result), Q]
        }))
    }
    async fireDeferredTrackingCalls() {
        if (!this._options.trackingCallback) return;
        let A = [];
        this._deferredTrackingCalls.forEach((Q) => {
            if (!Q || !Q.experiment || !Q.result) console.error("Invalid deferred tracking call", {
                call: Q
            });
            else A.push(this._options.trackingCallback(Q.experiment, Q.result))
        }), this._deferredTrackingCalls.clear(), await Promise.all(A)
    }
    setTrackingCallback(A) {
        this._options.trackingCallback = A, this.fireDeferredTrackingCalls()
    }
    setEventLogger(A) {
        this._options.eventLogger = A
    }
    async logEvent(A, Q) {
        if (this._destroyed) {
            console.error("Cannot log event to destroyed GrowthBook instance");
            return
        }
        if (this._options.enableDevMode) this.logs.push({
            eventName: A,
            properties: Q,
            timestamp: Date.now().toString(),
            logType: "event"
        });
        if (this._options.eventLogger) try {
            await this._options.eventLogger(A, Q || {}, this._getUserContext())
        } catch (B) {
            console.error(B)
        } else console.error("No event logger configured")
    }
    _saveDeferredTrack(A) {
        this._deferredTrackingCalls.set(esA(A.experiment, A.result), A)
    }
    _getContextUrl() {
        return this._options.url || (i7A ? window.location.href : "")
    }
    _isAutoExperimentBlockedByContext(A) {
        let Q = hsA(A);
        if (Q === "visual") {
            if (this._options.disableVisualExperiments) return !0;
            if (this._options.disableJsInjection) {
                if (A.variations.some((B) => B.js)) return !0
            }
        } else if (Q === "redirect") {
            if (this._options.disableUrlRedirectExperiments) return !0;
            try {
                let B = new URL(this._getContextUrl());
                for (let G of A.variations) {
                    if (!G || !G.urlRedirect) continue;
                    let Z = new URL(G.urlRedirect);
                    if (this._options.disableCrossOriginUrlRedirectExperiments) {
                        if (Z.protocol !== B.protocol) return !0;
                        if (Z.host !== B.host) return !0
                    }
                }
            } catch (B) {
                return this.log("Error parsing current or redirect URL", {
                    id: A.key,
                    error: B
                }), !0
            }
        } else return !0;
        if (A.changeId && (this._options.blockedChangeIds || []).includes(A.changeId)) return !0;
        return !1
    }
    getRedirectUrl() {
        return this._redirectedUrl
    }
    _getNavigateFunction() {
        if (this._options.navigate) return {
            navigate: this._options.navigate,
            delay: 0
        };
        else if (i7A) return {
            navigate: (A) => {
                window.location.replace(A)
            },
            delay: 100
        };
        return {
            navigate: null,
            delay: 0
        }
    }
    _applyDOMChanges(A) {
        if (!i7A) return;
        let Q = [];
        if (A.css) {
            let B = document.createElement("style");
            B.innerHTML = A.css, document.head.appendChild(B), Q.push(() => B.remove())
        }
        if (A.js) {
            let B = document.createElement("script");
            if (B.innerHTML = A.js, this._options.jsInjectionNonce) B.nonce = this._options.jsInjectionNonce;
            document.head.appendChild(B), Q.push(() => B.remove())
        }
        if (A.domMutations) A.domMutations.forEach((B) => {
            Q.push(yRB.default.declarative(B).revert)
        });
        return () => {
            Q.forEach((B) => B())
        }
    }
    async refreshStickyBuckets(A) {
        if (this._options.stickyBucketService) {
            let Q = this._getEvalContext(),
                B = await jRB(Q, this._options.stickyBucketService, A);
            this._options.stickyBucketAssignmentDocs = B
        }
    }
    generateStickyBucketAssignmentDocsSync(A, Q) {
        if (!("getAllAssignmentsSync" in A)) {
            console.error("generating StickyBucketAssignmentDocs docs requires StickyBucketServiceSync");
            return
        }
        let B = this._getEvalContext(),
            G = ym1(B, Q);
        return A.getAllAssignmentsSync(G)
    }
    inDevMode() {
        return !!this._options.enableDevMode
    }
}
var yRB, i7A, Iw6;
var xRB = L(() => {
    R$A();
    XRB();
    kRB();
    yRB = GA(qRB(), 1), i7A = typeof window < "u" && typeof document < "u", Iw6 = eOB()
});
var vRB = L(() => {
    xRB()
});
/* bRB = SENTRY_DSN = "https://...@sentry.io/..." */
var bRB = "https://e531a1d9ec1de9064fae9d4affb0b0f4@o1158394.ingest.us.sentry.io/4508259541909504",
    fRB = "client-RRNS7R65EAtReO5XA4xDC3eU6ZdJQi6lLEP6b5j32Me",
    xm1 = void 0,
    hRB = "sdk-rC3xnlkyYSbBFJS";

function gRB(A) {
    let Q = fm1.get(A);
    if (Q) cRB({
        experimentId: Q.experimentId,
        variationId: Q.variationId,
        userAttributes: uRB(),
        experimentMetadata: {
            feature_id: A
        }
    })
}

function hm1() {
    if (hX()) return !1;
    return V0(process.env.CLAUDE_CODE_ENABLE_GROWTHBOOK)
}

function uRB() {
    let A = cOB();
    return {
        id: A.deviceId,
        sessionId: A.sessionId,
        deviceID: A.deviceId,
        ...A.organizationUuid && {
            organizationUUID: A.organizationUuid
        },
        ...A.accountUuid && {
            accountUUID: A.accountUuid
        },
        ...A.userType && {
            userType: A.userType
        },
        ...A.subscriptionType && {
            subscriptionType: A.subscriptionType
        },
        ...A.firstTokenTime && {
            firstTokenTime: A.firstTokenTime
        },
        ...A.email && {
            email: A.email
        },
        ...A.appVersion && {
            appVersion: A.appVersion
        },
        ...A.githubActionsMetadata && {
            githubActionsMetadata: A.githubActionsMetadata
        }
    }
}
async function mRB(A, Q, B) {
    if (!hm1()) return Q;
    let G = await n7A();
    if (!G) return Q;
    let Z = G.getFeatureValue(A, Q);
    if (B) gRB(A);
    return Z
}

function dRB() {
    if (!hm1()) return;
    try {
        Ww6(), n7A()
    } catch (A) {
        e(A instanceof Error ? A : Error(`GrowthBook: Force refresh failed: ${A}`))
    }
}

function Ww6() {
    Qf?.destroy(), Qf = null, bm1 = !1, fm1.clear(), vm1.clear(), QrA.cache?.clear?.(), n7A.cache?.clear?.(), Yw6.cache?.clear?.(), Jw6.cache?.clear?.()
}
var Qf = null,
    bm1 = !1,
    fm1, vm1, QrA, n7A, Yw6, Jw6;
var BrA = L(() => {
    n3A();
    vRB();
    eb();
    D0();
    u1();
    St();
    _$A();
    hQ();
    jQ();
    XE();
    fm1 = new Map, vm1 = new Set;
    QrA = t1(() => {
        if (!hm1()) return null;
        let A = uRB(),
            Q = "https://api.anthropic.com",
            B = VI();
        bm1 = !B.error, Qf = new ArA({
            apiHost: Q,
            clientKey: hRB,
            attributes: A,
            remoteEval: !0,
            cacheKeyAttributes: ["id"],
            ...B.error ? {} : {
                apiHostRequestHeaders: B.headers
            },
            ...{}
        });
        let Z = Qf.init({
            timeout: 5000
        }).then(async (I) => {
            let Y = Qf?.getPayload();
            if (Y?.features) {
                let J = {};
                for (let [W, X] of Object.entries(Y.features)) {
                    let F = X;
                    if ("value" in F && !("defaultValue" in F)) J[W] = {
                        ...F,
                        defaultValue: F.value
                    };
                    else J[W] = F;
                    if (F.source === "experiment" && F.experimentResult) {
                        let {
                            experimentResult: V,
                            experiment: K
                        } = F;
                        if (K?.key && V.variationId !== void 0) fm1.set(W, {
                            experimentId: K.key,
                            variationId: V.variationId
                        })
                    }
                }
                await Qf?.setPayload({
                    ...Y,
                    features: J
                });
                for (let W of vm1) gRB(W);
                vm1.clear()
            }
        }).catch((I) => {});
        return process.on("beforeExit", () => {
            Qf?.destroy()
        }), process.on("exit", () => {
            Qf?.destroy()
        }), {
            client: Qf,
            initialized: Z
        }
    }), n7A = t1(async () => {
        let A = QrA();
        if (!A) return null;
        if (!bm1) {
            if (!VI().error) {
                if (g("GrowthBook: Auth became available after client creation, reinitializing"), QrA.cache?.clear?.(), n7A.cache?.clear?.(), A = QrA(), !A) return null
            }
        }
        return await A.initialized, A.client
    });
    Yw6 = t1(async (A, Q) => {
        return mRB(A, Q, !0)
    }), Jw6 = t1(async (A, Q) => {
        let B = await mRB(A, Q, !1),
            G = L1();
        if (G.cachedGrowthBookFeatures?.[A] === B) return;
        d0({
            ...G,
            cachedGrowthBookFeatures: {
                ...G.cachedGrowthBookFeatures ?? {},
                [A]: B
            }
        })
    })
});

/* LW = getSmallFastModel() - Returns haiku model */
/* Signature: () => string */
function LW() {
    return process.env.ANTHROPIC_SMALL_FAST_MODEL || o7A()
}

function r7A(A) {
    return A === nI().opus40 || A === nI().opus41 || A === nI().opus45
}

function UT(A) {
    return A.includes("opus")
}

function GrA() {
    let A, Q = JE0();
    if (Q !== void 0) A = Q;
    else {
        let B = c0() || {};
        A = process.env.ANTHROPIC_MODEL || B.model || void 0
    }
    if (AB() && !bw() && A && UT(A)) return;
    return A
}

function ot(A = {}) {
    let Q = GrA();
    if (Q !== null && Q !== void 0) return Q;
    let {
        forDisplay: B = !1
    } = A;
    return iRB(B)
}

/* S3 = getDefaultSonnetModel() - Returns "claude-sonnet-4-5-..." */
/* Signature: () => string */
function S3() {
    let A = ot();
    if (A !== void 0 && A !== null) return VE(A);
    return et()
}

function HU() {
    if (process.env.ANTHROPIC_DEFAULT_SONNET_MODEL) return process.env.ANTHROPIC_DEFAULT_SONNET_MODEL;
    return nI().sonnet45
}

function x$A() {
    return x4() === "max"
}

function v$A() {
    return x4() === "team"
}

function b$A() {
    if (process.env.ANTHROPIC_DEFAULT_OPUS_MODEL) return process.env.ANTHROPIC_DEFAULT_OPUS_MODEL;
    if (J6() === "firstParty") return nI().opus45;
    return nI().opus41
}

function o7A() {
    if (process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL) return process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL;
    if (J6() === "firstParty" || J6() === "foundry") return nI().haiku45;
    return nI().haiku35
}

function ZrA() {
    return ZI("tengu_haiku_default_pro_plan", "haiku_is_default", !1)
}

function tt(A) {
    let {
        permissionMode: Q,
        mainLoopModel: B,
        exceeds200kTokens: G = !1
    } = A;
    if (ot() === "opusplan" && Q === "plan" && !G) return b$A();
    if (ot() === "haiku" && Q === "plan") return HU();
    return B
}

function um1() {
    if (!AB()) return !1;
    let {
        hasAccess: A
    } = Kp();
    if (!A) return !1;
    return ZI("sonnet_1m_default", "enabled", !1)
}

function iRB(A) {
    let Q = Fw6();
    if (Q !== null && Q.name) return A ? Q.displayName ?? Q.name : Q.name;
    if (um1()) return "sonnet[1m]";
    return
}

function IrA(A = {}) {
    let {
        forDisplay: Q = !1
    } = A, B = iRB(Q);
    if (B !== void 0) return B;
    if (AB() && !bw() && ZrA()) return o7A();
    if (x$A() || v$A()) return b$A();
    return HU()
}

function et(A = {}) {
    return VE(IrA(A))
}

function rw(A) {
    if (A.includes("claude-opus-4-5")) return "claude-opus-4-5";
    if (A.includes("claude-opus-4-1")) return "claude-opus-4-1";
    if (A.includes("claude-opus-4")) return "claude-opus-4";
    let Q = A.match(/(claude-(\d+-\d+-)?\w+)/);
    if (Q && Q[1]) return Q[1];
    return A
}
async function nRB() {
    try {
        let A = L1();
        if (A.claudeCodeFirstTokenDate !== void 0) return;
        let Q = VI();
        if (Q.error) {
            e(Error(`Failed to get auth headers: ${Q.error}`));
            return
        }
        let G = `${o9().BASE_API_URL}/api/organization/claude_code_first_token_date`,
            I = (await GQ.get(G, {
                headers: {
                    ...Q.headers,
                    "User-Agent": MF()
                }
            })).data?.first_token_date ?? null;
        if (I !== null) {
            let Y = new Date(I).getTime();
            if (isNaN(Y)) {
                e(Error(`Received invalid first_token_date from API: ${I}`));
                return
            }
        }
        d0({
            ...A,
            claudeCodeFirstTokenDate: I
        })
    } catch (A) {
        e(A instanceof Error ? A : Error(String(A)))
    }
}

function YrA() {
    if (um1()) return "Sonnet 4.5 with 1M context · Best for everyday tasks";
    if (x$A() || v$A()) return "Opus 4.5 · Most capable for complex work";
    return "Sonnet 4.5 · Best for everyday tasks"
}

function Vw6(A) {
    if (A === "opusplan") return "Opus 4.5 in plan mode, else Sonnet 4.5";
    return Ep(VE(A))
}

function aRB(A) {
    if (A === "opusplan") return x4() === "pro" ? `Opus Plan${y$A}` : "Opus Plan";
    if (dm1(A)) {
        if (UT(A) && x4() === "pro") return `Opus${y$A}`;
        return A.charAt(0).toUpperCase() + A.slice(1)
    }
    return Ep(A)
}

function Ep(A) {
    if (A === nI().opus45) return "Opus 4.5";
    if (A === nI().opus41) return "Opus 4.1";
    if (A === nI().opus40) return "Opus 4";
    if (A === nI().sonnet45 + "[1m]") return "Sonnet 4.5 (1M context)";
    if (A === nI().sonnet45) return "Sonnet 4.5";
    if (A === nI().sonnet40) return "Sonnet 4";
    if (A === nI().sonnet40 + "[1m]") return "Sonnet 4 (1M context)";
    if (A === nI().sonnet37) return "Sonnet 3.7";
    if (A === nI().sonnet35) return "Sonnet 3.5";
    if (A === nI().haiku45) return "Haiku 4.5";
    if (A === nI().haiku35) return "Haiku 3.5";
    return A
}

function Cp() {
    if (AB()) {
        if (!bw()) {
            if (ZrA()) return {
                value: null,
                label: "Haiku",
                description: k$A.description
            };
            return {
                value: null,
                label: "Sonnet",
                description: mm1.description
            }
        }
        return {
            value: null,
            label: "Default (recommended)",
            description: YrA()
        }
    }
    return {
        value: null,
        label: "Default (recommended)",
        description: `Use the default model (currently ${Vw6(IrA({forDisplay:!0}))}) · ${Fp(nt)}`
    }
}

function Hw6() {
    return o7A() === nI().haiku45 ? oRB : Dw6
}

function zw6() {
    let A = J6() === "firstParty" ? oRB : null;
    if (AB()) {
        if (!bw())
            if (ZrA()) return [Cp(), lRB];
            else return [Cp(), k$A];
        if (x$A() || v$A()) {
            let G = [Cp(), lRB];
            if (Kp().hasAccess) G.push(pRB);
            return G.push(k$A), G
        }
        let B = [Cp(), Cw6];
        if (um1()) B.push({
            value: "sonnet",
            label: "Sonnet",
            description: "Sonnet 4.5 with 200K context"
        });
        else if (Kp().hasAccess) B.push(pRB);
        return B.push(k$A), B
    }
    let Q = [Cp(), rRB()];
    if (J6() !== "firstParty") Q.push(Kw6());
    if (Kp().hasAccess) Q.push(sRB);
    if (A) Q.push(A);
    return Q
}

function JrA() {
    let A = zw6(),
        Q = null,
        B = GrA(),
        G = e_A();
    if (B !== void 0 && B !== null) Q = B;
    else if (G !== null) Q = G;
    if (Q === null || A.some((Z) => Z.value === Q)) return A;
    if (Q === "opusplan") return [...A, Ew6()];
    if (!AB() && dm1(Q))
        if (Q === "sonnet") A.push(mm1);
        else if (Q === "sonnet[1m]") A.push(sRB);
    else if (Q === "opus") A.push(rRB());
    else if (Q === "haiku") A.push(Hw6());
    else A.push({
        value: Q,
        label: Q,
        description: "Custom model"
    });
    else A.push({
        value: Q,
        label: Q,
        description: "Custom model"
    });
    return A
}

function dm1(A) {
    return a7A.includes(A)
}

function VE(A) {
    let Q = A.toLowerCase().trim(),
        B = Q.endsWith("[1m]"),
        G = B ? Q.replace(/\[1m]$/i, "").trim() : Q;
    if (dm1(G)) switch (G) {
        case "opusplan":
            return HU() + (B ? "[1m]" : "");
        case "sonnet":
            return HU() + (B ? "[1m]" : "");
        case "haiku":
            return o7A() + (B ? "[1m]" : "");
        case "opus":
            return b$A();
        default:
    }
    return Q
}

function UM(A) {
    if (A === null) {
        if (AB() && !bw()) {
            if (ZrA()) return `Haiku (${k$A.description})`;
            return `Sonnet (${mm1.description})`
        } else if (AB()) return `Default (${YrA()})`;
        return `Default (${et({forDisplay:!0})})`
    }
    let Q = VE(A);
    return (A === Q ? Q : `${A} (${Q})`) + (x4() === "pro" && UT(Q) ? y$A : "")
}

function WrA(A, Q, B, G) {
    if (process.env.CLAUDE_CODE_SUBAGENT_MODEL) return process.env.CLAUDE_CODE_SUBAGENT_MODEL;
    if (B) return VE(B);
    if (!A) return VE(gm1);
    if (A === "inherit") return tt({
        permissionMode: G ?? "default",
        mainLoopModel: Q,
        exceeds200kTokens: !1
    });
    return VE(A)
}

function XrA(A) {
    if (!A) return "Sonnet (default)";
    if (A === "inherit") return "Inherit from parent";
    return A.charAt(0).toUpperCase() + A.slice(1)
}

function tRB() {
    let A = [{
        value: "sonnet",
        label: "Sonnet",
        description: "Balanced performance - best for most agents"
    }];
    if (bw()) A.push({
        value: "opus",
        label: "Opus",
        description: "Most capable for complex reasoning tasks"
    });
    return A.push({
        value: "haiku",
        label: "Haiku",
        description: "Fast and efficient for simple tasks"
    }, {
        value: "inherit",
        label: "Inherit from parent",
        description: "Use the same model as the main conversation"
    }), A
}

function zp(A) {
    return A.replace(/\[1m\]/gi, "")
}
var a7A, Xw6, mOB, s7A, gm1 = "sonnet",
    y$A = " · Uses your extra usage balance",
    Fw6, mm1, sRB, rRB = () => {
        let A = J6() !== "firstParty";
        return {
            value: "opus",
            label: A ? "Opus 4.1" : "Opus",
            description: `Opus ${A?"4.1":"4.5"} · ${A?"Legacy":"Most capable for complex work"} · ${Fp(A?jsA:SsA)}` + (x4() === "pro" ? y$A : ""),
            descriptionForModel: A ? "Opus 4.1 - legacy version" : "Opus 4.5 - most capable for complex work"
        }
    },
    Kw6 = () => {
        return {
            value: nI().opus45,
            label: "Opus 4.5",
            description: `Opus 4.5 · Most capable for complex work · ${Fp(SsA)}`,
            descriptionForModel: "Opus 4.5 - most capable for complex work"
        }
    },
    oRB, Dw6, Cw6, pRB, lRB, k$A, Ew6 = () => {
        return {
            value: "opusplan",
            label: "Opus Plan Mode",
            description: "Use Opus 4.5 in plan mode, Sonnet 4.5 otherwise" + (x4() === "pro" ? y$A : "")
        }
    };
var s2 = L(() => {
    o2();
    jQ();
    S0();
    hB();
    iEA();
    ay1();
    ksA();
    RB();
    O9();
    eb();
    w3();
    EX();
    u1();
    XE();
    vsA();
    dK();
    BrA();
    a7A = ["sonnet", "opus", "haiku", "sonnet[1m]", "opusplan"], Xw6 = _o, mOB = Xw6.firstParty, s7A = [...a7A, "inherit"];
    Fw6 = t1(() => {
        return null
    });
    mm1 = {
        value: "sonnet",
        label: "Sonnet",
        description: `Sonnet 4.5 · Best for everyday tasks · ${Fp(nt)}`,
        descriptionForModel: "Sonnet 4.5 - best for everyday tasks. Generally recommended for most coding tasks"
    }, sRB = {
        value: "sonnet[1m]",
        label: "Sonnet (1M context)",
        description: `Sonnet 4.5 for long sessions · ${Fp(Em1)}`,
        descriptionForModel: "Sonnet 4.5 with 1M context window - for long sessions with large codebases"
    }, oRB = {
        value: "haiku",
        label: "Haiku",
        description: `Haiku 4.5 · Fastest for quick answers · ${Fp(Um1)}`,
        descriptionForModel: "Haiku 4.5 - fastest for quick answers. Lower cost but less capable than Sonnet 4.5."
    }, Dw6 = {
        value: "haiku",
        label: "Haiku",
        description: `Haiku 3.5 for simple tasks · ${Fp(zm1)}`,
        descriptionForModel: "Haiku 3.5 - faster and lower cost, but less capable than Sonnet. Use for simple tasks."
    };
    Cw6 = {
        value: "opus",
        label: "Opus",
        description: "Opus 4.5 · Most capable for complex work"
    }, pRB = {
        value: "sonnet[1m]",
        label: "Sonnet (1M context)",
        description: "Sonnet 4.5 with 1M context · Uses rate limits faster"
    }, lRB = {
        value: "sonnet",
        label: "Sonnet",
        description: "Sonnet 4.5 · Best for everyday tasks"
    }, k$A = {
        value: "haiku",
        label: "Haiku",
        description: "Haiku 4.5 · Fastest for quick answers"
    }
});
async function ww6() {
    let [A, Q] = await Promise.all([m0.getPackageManagers(), m0.getRuntimes()]);
    return {
        platform: m0.platform,
        arch: m0.arch,
        nodeVersion: m0.nodeVersion,
        terminal: DU.terminal,
        packageManagers: A.join(","),
        runtimes: Q.join(","),
        isRunningWithBun: m0.isRunningWithBun(),
        isCi: V0(!1),
        isClaubbit: process.env.CLAUBBIT === "true",
        isClaudeCodeRemote: process.env.CLAUDE_CODE_REMOTE === "true",
        isConductor: m0.isConductor(),
        ...process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE && {
            remoteEnvironmentType: process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE
        },
        ...process.env.CLAUDE_CODE_CONTAINER_ID && {
            claudeCodeContainerId: process.env.CLAUDE_CODE_CONTAINER_ID
        },
        ...process.env.CLAUDE_CODE_REMOTE_SESSION_ID && {
            claudeCodeRemoteSessionId: process.env.CLAUDE_CODE_REMOTE_SESSION_ID
        },
        ...process.env.CLAUDE_CODE_TAGS && {
            tags: process.env.CLAUDE_CODE_TAGS
        },
        isGithubAction: process.env.GITHUB_ACTIONS === "true",
        isClaudeCodeAction: process.env.CLAUDE_CODE_ACTION === "1" || process.env.CLAUDE_CODE_ACTION === "true",
        isClaudeAiAuth: AB(),
        version: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION,
        versionBase: $w6(),
        deploymentEnvironment: m0.detectDeploymentEnvironment(),
        ...process.env.GITHUB_ACTIONS === "true" && {
            githubEventName: process.env.GITHUB_EVENT_NAME,
            githubActionsRunnerEnvironment: process.env.RUNNER_ENVIRONMENT,
            githubActionsRunnerOs: process.env.RUNNER_OS,
            githubActionRef: process.env.GITHUB_ACTION_PATH?.includes("claude-code-action/") ? process.env.GITHUB_ACTION_PATH.split("claude-code-action/")[1] : void 0
        },
        ...ps() && {
            wslVersion: ps()
        }
    }
}

function qw6() {
    return
}
async function Up(A = {}) {
    let Q = A.model ? String(A.model) : S3(),
        B = Iw(Q),
        G = await ww6(),
        Z = qw6();
    return {
        model: Q,
        sessionId: G0(),
        userType: "external",
        ...B.length > 0 ? {
            betas: B.join(",")
        } : {},
        envContext: G,
        ...process.env.CLAUDE_CODE_ENTRYPOINT && {
            entrypoint: process.env.CLAUDE_CODE_ENTRYPOINT
        },
        ...process.env.CLAUDE_AGENT_SDK_VERSION && {
            agentSdkVersion: process.env.CLAUDE_AGENT_SDK_VERSION
        },
        isInteractive: String(QkA()),
        clientType: BkA(),
        ...Z && {
            processMetrics: Z
        },
        sweBenchRunId: process.env.SWE_BENCH_RUN_ID || "",
        sweBenchInstanceId: process.env.SWE_BENCH_INSTANCE_ID || "",
        sweBenchTaskId: process.env.SWE_BENCH_TASK_ID || ""
    }
}

function eRB(A, Q = {}) {
    let B = {};
    for (let [G, Z] of Object.entries(Q))
        if (Z !== void 0) B[G] = String(Z);
    for (let [G, Z] of Object.entries(A)) {
        if (Z === void 0) continue;
        if (G === "envContext") B.env = JSON.stringify(Z);
        else if (G === "processMetrics") B.process = JSON.stringify(Z);
        else B[G] = String(Z)
    }
    return B
}

function ATB(A, Q = {}) {
    let {
        envContext: B,
        processMetrics: G,
        ...Z
    } = A;
    return {
        ...Q,
        ...Z,
        env: B,
        ...G && {
            process: G
        },
        surface: Uw6
    }
}

function QTB(A, Q, B = {}) {
    let {
        envContext: G,
        processMetrics: Z,
        ...I
    } = A, Y = {
        platform: G.platform,
        arch: G.arch,
        node_version: G.nodeVersion,
        terminal: G.terminal || "unknown",
        package_managers: G.packageManagers,
        runtimes: G.runtimes,
        is_running_with_bun: G.isRunningWithBun,
        is_ci: G.isCi,
        is_claubbit: G.isClaubbit,
        is_claude_code_remote: G.isClaudeCodeRemote,
        is_conductor: G.isConductor,
        is_github_action: G.isGithubAction,
        is_claude_code_action: G.isClaudeCodeAction,
        is_claude_ai_auth: G.isClaudeAiAuth,
        version: G.version,
        deployment_environment: G.deploymentEnvironment
    };
    if (G.remoteEnvironmentType) Y.remote_environment_type = G.remoteEnvironmentType;
    if (G.claudeCodeContainerId) Y.claude_code_container_id = G.claudeCodeContainerId;
    if (G.claudeCodeRemoteSessionId) Y.claude_code_remote_session_id = G.claudeCodeRemoteSessionId;
    if (G.tags) Y.tags = G.tags.split(",").map((W) => W.trim()).filter(Boolean);
    if (G.githubEventName) Y.github_event_name = G.githubEventName;
    if (G.githubActionsRunnerEnvironment) Y.github_actions_runner_environment = G.githubActionsRunnerEnvironment;
    if (G.githubActionsRunnerOs) Y.github_actions_runner_os = G.githubActionsRunnerOs;
    if (G.githubActionRef) Y.github_action_ref = G.githubActionRef;
    if (G.wslVersion) Y.wsl_version = G.wslVersion;
    if (G.versionBase) Y.version_base = G.versionBase;
    let J = {
        session_id: I.sessionId,
        model: I.model,
        user_type: I.userType,
        is_interactive: I.isInteractive === "true",
        client_type: I.clientType
    };
    if (I.betas) J.betas = I.betas;
    if (I.entrypoint) J.entrypoint = I.entrypoint;
    if (I.agentSdkVersion) J.agent_sdk_version = I.agentSdkVersion;
    if (I.sweBenchRunId) J.swe_bench_run_id = I.sweBenchRunId;
    if (I.sweBenchInstanceId) J.swe_bench_instance_id = I.sweBenchInstanceId;
    if (I.sweBenchTaskId) J.swe_bench_task_id = I.sweBenchTaskId;
    if (Q.githubActionsMetadata) {
        let W = Q.githubActionsMetadata;
        Y.github_actions_metadata = {
            actor_id: W.actorId,
            repository_id: W.repositoryId,
            repository_owner_id: W.repositoryOwnerId
        }
    }
    return {
        env: Y,
        ...Z && {
            process: JSON.stringify(Z)
        },
        core: J,
        additional: B
    }
}
/* Uw6 = SERVICE_NAME = "claude-code" */
var Uw6 = "claude-code",
    $w6;
var t7A = L(() => {
    o2();
    f5();
    it();
    ej();
    s2();
    S0();
    hQ();
    hB();
    s5();
    $w6 = t1(() => {
        let A = {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION.match(/^\d+\.\d+\.\d+(?:-[a-z]+)?/);
        return A ? A[0] : void 0
    })
});

function Nw6() {
    return {
        seconds: 0,
        nanos: 0
    }
}

function BTB(A) {
    return A !== null && A !== void 0
}
var f$A;
var cm1 = L(() => {
    f$A = {
        fromJSON(A) {
            return {
                seconds: BTB(A.seconds) ? globalThis.Number(A.seconds) : 0,
                nanos: BTB(A.nanos) ? globalThis.Number(A.nanos) : 0
            }
        },
        toJSON(A) {
            let Q = {};
            if (A.seconds !== void 0) Q.seconds = Math.round(A.seconds);
            if (A.nanos !== void 0) Q.nanos = Math.round(A.nanos);
            return Q
        },
        create(A) {
            return f$A.fromPartial(A ?? {})
        },
        fromPartial(A) {
            let Q = Nw6();
            return Q.seconds = A.seconds ?? 0, Q.nanos = A.nanos ?? 0, Q
        }
    }
});

function Lw6() {
    return {
        account_id: 0,
        organization_uuid: "",
        account_uuid: ""
    }
}

function pm1(A) {
    return A !== null && A !== void 0
}
var Bf;
var lm1 = L(() => {
    Bf = {
        fromJSON(A) {
            return {
                account_id: pm1(A.account_id) ? globalThis.Number(A.account_id) : 0,
                organization_uuid: pm1(A.organization_uuid) ? globalThis.String(A.organization_uuid) : "",
                account_uuid: pm1(A.account_uuid) ? globalThis.String(A.account_uuid) : ""
            }
        },
        toJSON(A) {
            let Q = {};
            if (A.account_id !== void 0) Q.account_id = Math.round(A.account_id);
            if (A.organization_uuid !== void 0) Q.organization_uuid = A.organization_uuid;
            if (A.account_uuid !== void 0) Q.account_uuid = A.account_uuid;
            return Q
        },
        create(A) {
            return Bf.fromPartial(A ?? {})
        },
        fromPartial(A) {
            let Q = Lw6();
            return Q.account_id = A.account_id ?? 0, Q.organization_uuid = A.organization_uuid ?? "", Q.account_uuid = A.account_uuid ?? "", Q
        }
    }
});

function Mw6() {
    return {
        actor_id: "",
        repository_id: "",
        repository_owner_id: ""
    }
}

function Ow6() {
    return {
        platform: "",
        node_version: "",
        terminal: "",
        package_managers: "",
        runtimes: "",
        is_running_with_bun: !1,
        is_ci: !1,
        is_claubbit: !1,
        is_github_action: !1,
        is_claude_code_action: !1,
        is_claude_ai_auth: !1,
        version: "",
        github_event_name: "",
        github_actions_runner_environment: "",
        github_actions_runner_os: "",
        github_action_ref: "",
        wsl_version: "",
        github_actions_metadata: void 0,
        arch: "",
        is_claude_code_remote: !1,
        remote_environment_type: "",
        claude_code_container_id: "",
        claude_code_remote_session_id: "",
        tags: [],
        deployment_environment: ""
    }
}

function Rw6() {
    return {
        event_name: "",
        client_timestamp: void 0,
        model: "",
        session_id: "",
        user_type: "",
        betas: "",
        env: void 0,
        entrypoint: "",
        agent_sdk_version: "",
        is_interactive: !1,
        client_type: "",
        process: "",
        additional_metadata: "",
        auth: void 0,
        server_timestamp: void 0,
        event_id: "",
        device_id: "",
        swe_bench_run_id: "",
        swe_bench_instance_id: "",
        swe_bench_task_id: "",
        email: ""
    }
}

function Tw6(A) {
    let Q = (A.seconds || 0) * 1000;
    return Q += (A.nanos || 0) / 1e6, new globalThis.Date(Q)
}

function GTB(A) {
    if (A instanceof globalThis.Date) return A;
    else if (typeof A === "string") return new globalThis.Date(A);
    else return Tw6(f$A.fromJSON(A))
}

function L4(A) {
    return A !== null && A !== void 0
}
var FrA, VrA, KrA;
var ZTB = L(() => {
    cm1();
    lm1();
    FrA = {
        fromJSON(A) {
            return {
                actor_id: L4(A.actor_id) ? globalThis.String(A.actor_id) : "",
                repository_id: L4(A.repository_id) ? globalThis.String(A.repository_id) : "",
                repository_owner_id: L4(A.repository_owner_id) ? globalThis.String(A.repository_owner_id) : ""
            }
        },
        toJSON(A) {
            let Q = {};
            if (A.actor_id !== void 0) Q.actor_id = A.actor_id;
            if (A.repository_id !== void 0) Q.repository_id = A.repository_id;
            if (A.repository_owner_id !== void 0) Q.repository_owner_id = A.repository_owner_id;
            return Q
        },
        create(A) {
            return FrA.fromPartial(A ?? {})
        },
        fromPartial(A) {
            let Q = Mw6();
            return Q.actor_id = A.actor_id ?? "", Q.repository_id = A.repository_id ?? "", Q.repository_owner_id = A.repository_owner_id ?? "", Q
        }
    };
    VrA = {
        fromJSON(A) {
            return {
                platform: L4(A.platform) ? globalThis.String(A.platform) : "",
                node_version: L4(A.node_version) ? globalThis.String(A.node_version) : "",
                terminal: L4(A.terminal) ? globalThis.String(A.terminal) : "",
                package_managers: L4(A.package_managers) ? globalThis.String(A.package_managers) : "",
                runtimes: L4(A.runtimes) ? globalThis.String(A.runtimes) : "",
                is_running_with_bun: L4(A.is_running_with_bun) ? globalThis.Boolean(A.is_running_with_bun) : !1,
                is_ci: L4(A.is_ci) ? globalThis.Boolean(A.is_ci) : !1,
                is_claubbit: L4(A.is_claubbit) ? globalThis.Boolean(A.is_claubbit) : !1,
                is_github_action: L4(A.is_github_action) ? globalThis.Boolean(A.is_github_action) : !1,
                is_claude_code_action: L4(A.is_claude_code_action) ? globalThis.Boolean(A.is_claude_code_action) : !1,
                is_claude_ai_auth: L4(A.is_claude_ai_auth) ? globalThis.Boolean(A.is_claude_ai_auth) : !1,
                version: L4(A.version) ? globalThis.String(A.version) : "",
                github_event_name: L4(A.github_event_name) ? globalThis.String(A.github_event_name) : "",
                github_actions_runner_environment: L4(A.github_actions_runner_environment) ? globalThis.String(A.github_actions_runner_environment) : "",
                github_actions_runner_os: L4(A.github_actions_runner_os) ? globalThis.String(A.github_actions_runner_os) : "",
                github_action_ref: L4(A.github_action_ref) ? globalThis.String(A.github_action_ref) : "",
                wsl_version: L4(A.wsl_version) ? globalThis.String(A.wsl_version) : "",
                github_actions_metadata: L4(A.github_actions_metadata) ? FrA.fromJSON(A.github_actions_metadata) : void 0,
                arch: L4(A.arch) ? globalThis.String(A.arch) : "",
                is_claude_code_remote: L4(A.is_claude_code_remote) ? globalThis.Boolean(A.is_claude_code_remote) : !1,
                remote_environment_type: L4(A.remote_environment_type) ? globalThis.String(A.remote_environment_type) : "",
                claude_code_container_id: L4(A.claude_code_container_id) ? globalThis.String(A.claude_code_container_id) : "",
                claude_code_remote_session_id: L4(A.claude_code_remote_session_id) ? globalThis.String(A.claude_code_remote_session_id) : "",
                tags: globalThis.Array.isArray(A?.tags) ? A.tags.map((Q) => globalThis.String(Q)) : [],
                deployment_environment: L4(A.deployment_environment) ? globalThis.String(A.deployment_environment) : ""
            }
        },
        toJSON(A) {
            let Q = {};
            if (A.platform !== void 0) Q.platform = A.platform;
            if (A.node_version !== void 0) Q.node_version = A.node_version;
            if (A.terminal !== void 0) Q.terminal = A.terminal;
            if (A.package_managers !== void 0) Q.package_managers = A.package_managers;
            if (A.runtimes !== void 0) Q.runtimes = A.runtimes;
            if (A.is_running_with_bun !== void 0) Q.is_running_with_bun = A.is_running_with_bun;
            if (A.is_ci !== void 0) Q.is_ci = A.is_ci;
            if (A.is_claubbit !== void 0) Q.is_claubbit = A.is_claubbit;
            if (A.is_github_action !== void 0) Q.is_github_action = A.is_github_action;
            if (A.is_claude_code_action !== void 0) Q.is_claude_code_action = A.is_claude_code_action;
            if (A.is_claude_ai_auth !== void 0) Q.is_claude_ai_auth = A.is_claude_ai_auth;
            if (A.version !== void 0) Q.version = A.version;
            if (A.github_event_name !== void 0) Q.github_event_name = A.github_event_name;
            if (A.github_actions_runner_environment !== void 0) Q.github_actions_runner_environment = A.github_actions_runner_environment;
            if (A.github_actions_runner_os !== void 0) Q.github_actions_runner_os = A.github_actions_runner_os;
            if (A.github_action_ref !== void 0) Q.github_action_ref = A.github_action_ref;
            if (A.wsl_version !== void 0) Q.wsl_version = A.wsl_version;
            if (A.github_actions_metadata !== void 0) Q.github_actions_metadata = FrA.toJSON(A.github_actions_metadata);
            if (A.arch !== void 0) Q.arch = A.arch;
            if (A.is_claude_code_remote !== void 0) Q.is_claude_code_remote = A.is_claude_code_remote;
            if (A.remote_environment_type !== void 0) Q.remote_environment_type = A.remote_environment_type;
            if (A.claude_code_container_id !== void 0) Q.claude_code_container_id = A.claude_code_container_id;
            if (A.claude_code_remote_session_id !== void 0) Q.claude_code_remote_session_id = A.claude_code_remote_session_id;
            if (A.tags?.length) Q.tags = A.tags;
            if (A.deployment_environment !== void 0) Q.deployment_environment = A.deployment_environment;
            return Q
        },
        create(A) {
            return VrA.fromPartial(A ?? {})
        },
        fromPartial(A) {
            let Q = Ow6();
            return Q.platform = A.platform ?? "", Q.node_version = A.node_version ?? "", Q.terminal = A.terminal ?? "", Q.package_managers = A.package_managers ?? "", Q.runtimes = A.runtimes ?? "", Q.is_running_with_bun = A.is_running_with_bun ?? !1, Q.is_ci = A.is_ci ?? !1, Q.is_claubbit = A.is_claubbit ?? !1, Q.is_github_action = A.is_github_action ?? !1, Q.is_claude_code_action = A.is_claude_code_action ?? !1, Q.is_claude_ai_auth = A.is_claude_ai_auth ?? !1, Q.version = A.version ?? "", Q.github_event_name = A.github_event_name ?? "", Q.github_actions_runner_environment = A.github_actions_runner_environment ?? "", Q.github_actions_runner_os = A.github_actions_runner_os ?? "", Q.github_action_ref = A.github_action_ref ?? "", Q.wsl_version = A.wsl_version ?? "", Q.github_actions_metadata = A.github_actions_metadata !== void 0 && A.github_actions_metadata !== null ? FrA.fromPartial(A.github_actions_metadata) : void 0, Q.arch = A.arch ?? "", Q.is_claude_code_remote = A.is_claude_code_remote ?? !1, Q.remote_environment_type = A.remote_environment_type ?? "", Q.claude_code_container_id = A.claude_code_container_id ?? "", Q.claude_code_remote_session_id = A.claude_code_remote_session_id ?? "", Q.tags = A.tags?.map((B) => B) || [], Q.deployment_environment = A.deployment_environment ?? "", Q
        }
    };
    KrA = {
        fromJSON(A) {
            return {
                event_name: L4(A.event_name) ? globalThis.String(A.event_name) : "",
                client_timestamp: L4(A.client_timestamp) ? GTB(A.client_timestamp) : void 0,
                model: L4(A.model) ? globalThis.String(A.model) : "",
                session_id: L4(A.session_id) ? globalThis.String(A.session_id) : "",
                user_type: L4(A.user_type) ? globalThis.String(A.user_type) : "",
                betas: L4(A.betas) ? globalThis.String(A.betas) : "",
                env: L4(A.env) ? VrA.fromJSON(A.env) : void 0,
                entrypoint: L4(A.entrypoint) ? globalThis.String(A.entrypoint) : "",
                agent_sdk_version: L4(A.agent_sdk_version) ? globalThis.String(A.agent_sdk_version) : "",
                is_interactive: L4(A.is_interactive) ? globalThis.Boolean(A.is_interactive) : !1,
                client_type: L4(A.client_type) ? globalThis.String(A.client_type) : "",
                process: L4(A.process) ? globalThis.String(A.process) : "",
                additional_metadata: L4(A.additional_metadata) ? globalThis.String(A.additional_metadata) : "",
                auth: L4(A.auth) ? Bf.fromJSON(A.auth) : void 0,
                server_timestamp: L4(A.server_timestamp) ? GTB(A.server_timestamp) : void 0,
                event_id: L4(A.event_id) ? globalThis.String(A.event_id) : "",
                device_id: L4(A.device_id) ? globalThis.String(A.device_id) : "",
                swe_bench_run_id: L4(A.swe_bench_run_id) ? globalThis.String(A.swe_bench_run_id) : "",
                swe_bench_instance_id: L4(A.swe_bench_instance_id) ? globalThis.String(A.swe_bench_instance_id) : "",
                swe_bench_task_id: L4(A.swe_bench_task_id) ? globalThis.String(A.swe_bench_task_id) : "",
                email: L4(A.email) ? globalThis.String(A.email) : ""
            }
        },
        toJSON(A) {
            let Q = {};
            if (A.event_name !== void 0) Q.event_name = A.event_name;
            if (A.client_timestamp !== void 0) Q.client_timestamp = A.client_timestamp.toISOString();
            if (A.model !== void 0) Q.model = A.model;
            if (A.session_id !== void 0) Q.session_id = A.session_id;
            if (A.user_type !== void 0) Q.user_type = A.user_type;
            if (A.betas !== void 0) Q.betas = A.betas;
            if (A.env !== void 0) Q.env = VrA.toJSON(A.env);
            if (A.entrypoint !== void 0) Q.entrypoint = A.entrypoint;
            if (A.agent_sdk_version !== void 0) Q.agent_sdk_version = A.agent_sdk_version;
            if (A.is_interactive !== void 0) Q.is_interactive = A.is_interactive;
            if (A.client_type !== void 0) Q.client_type = A.client_type;
            if (A.process !== void 0) Q.process = A.process;
            if (A.additional_metadata !== void 0) Q.additional_metadata = A.additional_metadata;
            if (A.auth !== void 0) Q.auth = Bf.toJSON(A.auth);
            if (A.server_timestamp !== void 0) Q.server_timestamp = A.server_timestamp.toISOString();
            if (A.event_id !== void 0) Q.event_id = A.event_id;
            if (A.device_id !== void 0) Q.device_id = A.device_id;
            if (A.swe_bench_run_id !== void 0) Q.swe_bench_run_id = A.swe_bench_run_id;
            if (A.swe_bench_instance_id !== void 0) Q.swe_bench_instance_id = A.swe_bench_instance_id;
            if (A.swe_bench_task_id !== void 0) Q.swe_bench_task_id = A.swe_bench_task_id;
            if (A.email !== void 0) Q.email = A.email;
            return Q
        },
        create(A) {
            return KrA.fromPartial(A ?? {})
        },
        fromPartial(A) {
            let Q = Rw6();
            return Q.event_name = A.event_name ?? "", Q.client_timestamp = A.client_timestamp ?? void 0, Q.model = A.model ?? "", Q.session_id = A.session_id ?? "", Q.user_type = A.user_type ?? "", Q.betas = A.betas ?? "", Q.env = A.env !== void 0 && A.env !== null ? VrA.fromPartial(A.env) : void 0, Q.entrypoint = A.entrypoint ?? "", Q.agent_sdk_version = A.agent_sdk_version ?? "", Q.is_interactive = A.is_interactive ?? !1, Q.client_type = A.client_type ?? "", Q.process = A.process ?? "", Q.additional_metadata = A.additional_metadata ?? "", Q.auth = A.auth !== void 0 && A.auth !== null ? Bf.fromPartial(A.auth) : void 0, Q.server_timestamp = A.server_timestamp ?? void 0, Q.event_id = A.event_id ?? "", Q.device_id = A.device_id ?? "", Q.swe_bench_run_id = A.swe_bench_run_id ?? "", Q.swe_bench_instance_id = A.swe_bench_instance_id ?? "", Q.swe_bench_task_id = A.swe_bench_task_id ?? "", Q.email = A.email ?? "", Q
        }
    }
});

function Pw6() {
    return {
        event_id: "",
        event_timestamp: void 0,
        timestamp: void 0,
        experiment_id: "",
        variation_id: 0,
        environment: "",
        user_attributes: "",
        experiment_metadata: "",
        device_id: "",
        auth: void 0,
        session_id: ""
    }
}

function jw6(A) {
    let Q = (A.seconds || 0) * 1000;
    return Q += (A.nanos || 0) / 1e6, new globalThis.Date(Q)
}

function ITB(A) {
    if (A instanceof globalThis.Date) return A;
    else if (typeof A === "string") return new globalThis.Date(A);
    else return jw6(f$A.fromJSON(A))
}

function $T(A) {
    return A !== null && A !== void 0
}
var im1;
var YTB = L(() => {
    cm1();
    lm1();
    im1 = {
        fromJSON(A) {
            return {
                event_id: $T(A.event_id) ? globalThis.String(A.event_id) : "",
                event_timestamp: $T(A.event_timestamp) ? ITB(A.event_timestamp) : void 0,
                timestamp: $T(A.timestamp) ? ITB(A.timestamp) : void 0,
                experiment_id: $T(A.experiment_id) ? globalThis.String(A.experiment_id) : "",
                variation_id: $T(A.variation_id) ? globalThis.Number(A.variation_id) : 0,
                environment: $T(A.environment) ? globalThis.String(A.environment) : "",
                user_attributes: $T(A.user_attributes) ? globalThis.String(A.user_attributes) : "",
                experiment_metadata: $T(A.experiment_metadata) ? globalThis.String(A.experiment_metadata) : "",
                device_id: $T(A.device_id) ? globalThis.String(A.device_id) : "",
                auth: $T(A.auth) ? Bf.fromJSON(A.auth) : void 0,
                session_id: $T(A.session_id) ? globalThis.String(A.session_id) : ""
            }
        },
        toJSON(A) {
            let Q = {};
            if (A.event_id !== void 0) Q.event_id = A.event_id;
            if (A.event_timestamp !== void 0) Q.event_timestamp = A.event_timestamp.toISOString();
            if (A.timestamp !== void 0) Q.timestamp = A.timestamp.toISOString();