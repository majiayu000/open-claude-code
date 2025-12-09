/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: telemetry_012.js
 * 处理时间: 2025-12-09T03:41:38.449Z
 * 变量映射: 4 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * Y81      (  5x) ROUND_ROBIN = "round_robin"
 * v90      (  4x) OUTLIER_DETECTION = "outlier_detection"
 * g90      (  4x) WEIGHTED_ROUND_ROBIN = "weighted_round_robin"
 * UA       (  3x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 12/14
 * Lines: 321429 - 322928 (1500 lines)
 * Original file: cli.js
 */

    var a$2 = xi(),
        bD = dE(),
        vOA = wh(),
        qj5 = XZ(),
        Nj5 = K6(),
        i$2 = rU(),
        Lj5 = yOA(),
        Mj5 = "round_robin";

    function n$2(A) {
        qj5.trace(Nj5.LogVerbosity.DEBUG, Mj5, A)
    }
    /* Y81 = ROUND_ROBIN = "round_robin" */
var Y81 = "round_robin";
    class J81 {
        getLoadBalancerName() {
            return Y81
        }
        constructor() {}
        toJsonObject() {
            return {
                [Y81]: {}
            }
        }
        static createFromJson(A) {
            return new J81
        }
    }
    class s$2 {
        constructor(A, Q = 0) {
            this.children = A, this.nextIndex = Q
        }
        pick(A) {
            let Q = this.children[this.nextIndex].picker;
            return this.nextIndex = (this.nextIndex + 1) % this.children.length, Q.pick(A)
        }
        peekNextEndpoint() {
            return this.children[this.nextIndex].endpoint
        }
    }

    function Oj5(A, Q) {
        return [...A.slice(Q), ...A.slice(0, Q)]
    }
    class S90 {
        constructor(A) {
            this.channelControlHelper = A, this.children = [], this.currentState = bD.ConnectivityState.IDLE, this.currentReadyPicker = null, this.updatesPaused = !1, this.lastError = null, this.childChannelControlHelper = (0, a$2.createChildChannelControlHelper)(A, {
                updateState: (Q, B, G) => {
                    if (this.currentState === bD.ConnectivityState.READY && Q !== bD.ConnectivityState.READY) this.channelControlHelper.requestReresolution();
                    if (G) this.lastError = G;
                    this.calculateAndUpdateState()
                }
            })
        }
        countChildrenWithState(A) {
            return this.children.filter((Q) => Q.getConnectivityState() === A).length
        }
        calculateAndUpdateState() {
            if (this.updatesPaused) return;
            if (this.countChildrenWithState(bD.ConnectivityState.READY) > 0) {
                let A = this.children.filter((B) => B.getConnectivityState() === bD.ConnectivityState.READY),
                    Q = 0;
                if (this.currentReadyPicker !== null) {
                    let B = this.currentReadyPicker.peekNextEndpoint();
                    if (Q = A.findIndex((G) => (0, i$2.endpointEqual)(G.getEndpoint(), B)), Q < 0) Q = 0
                }
                this.updateState(bD.ConnectivityState.READY, new s$2(A.map((B) => ({
                    endpoint: B.getEndpoint(),
                    picker: B.getPicker()
                })), Q), null)
            } else if (this.countChildrenWithState(bD.ConnectivityState.CONNECTING) > 0) this.updateState(bD.ConnectivityState.CONNECTING, new vOA.QueuePicker(this), null);
            else if (this.countChildrenWithState(bD.ConnectivityState.TRANSIENT_FAILURE) > 0) {
                let A = `round_robin: No connection established. Last error: ${this.lastError}`;
                this.updateState(bD.ConnectivityState.TRANSIENT_FAILURE, new vOA.UnavailablePicker({
                    details: A
                }), A)
            } else this.updateState(bD.ConnectivityState.IDLE, new vOA.QueuePicker(this), null);
            for (let A of this.children)
                if (A.getConnectivityState() === bD.ConnectivityState.IDLE) A.exitIdle()
        }
        updateState(A, Q, B) {
            if (n$2(bD.ConnectivityState[this.currentState] + " -> " + bD.ConnectivityState[A]), A === bD.ConnectivityState.READY) this.currentReadyPicker = Q;
            else this.currentReadyPicker = null;
            this.currentState = A, this.channelControlHelper.updateState(A, Q, B)
        }
        resetSubchannelList() {
            for (let A of this.children) A.destroy();
            this.children = []
        }
        updateAddressList(A, Q, B, G) {
            if (!(Q instanceof J81)) return !1;
            if (!A.ok) {
                if (this.children.length === 0) this.updateState(bD.ConnectivityState.TRANSIENT_FAILURE, new vOA.UnavailablePicker(A.error), A.error.details);
                return !0
            }
            let Z = Math.random() * A.value.length | 0,
                I = Oj5(A.value, Z);
            if (this.resetSubchannelList(), I.length === 0) {
                let Y = `No addresses resolved. Resolution note: ${G}`;
                this.updateState(bD.ConnectivityState.TRANSIENT_FAILURE, new vOA.UnavailablePicker({
                    details: Y
                }), Y)
            }
            n$2("Connect to endpoint list " + I.map(i$2.endpointToString)), this.updatesPaused = !0, this.children = I.map((Y) => new Lj5.LeafLoadBalancer(Y, this.childChannelControlHelper, B, G));
            for (let Y of this.children) Y.startConnecting();
            return this.updatesPaused = !1, this.calculateAndUpdateState(), !0
        }
        exitIdle() {}
        resetBackoff() {}
        destroy() {
            this.resetSubchannelList()
        }
        getTypeName() {
            return Y81
        }
    }
    r$2.RoundRobinLoadBalancer = S90;

    function Rj5() {
        (0, a$2.registerLoadBalancerType)(Y81, S90, J81)
    }
});
var Yw2 = U((Zw2) => {
    var _90;
    Object.defineProperty(Zw2, "__esModule", {
        value: !0
    });
    Zw2.OutlierDetectionLoadBalancer = Zw2.OutlierDetectionLoadBalancingConfig = void 0;
    Zw2.setup = hj5;
    var Pj5 = dE(),
        e$2 = K6(),
        o1A = SOA(),
        Aw2 = O90(),
        jj5 = xi(),
        Sj5 = B41(),
        _j5 = wh(),
        k90 = rU(),
        kj5 = POA(),
        yj5 = XZ(),
        xj5 = "outlier_detection";

    function IK(A) {
        yj5.trace(e$2.LogVerbosity.DEBUG, xj5, A)
    }
    /* v90 = OUTLIER_DETECTION = "outlier_detection" */
var v90 = "outlier_detection",
        vj5 = ((_90 = process.env.GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION) !== null && _90 !== void 0 ? _90 : "true") === "true",
        bj5 = {
            stdev_factor: 1900,
            enforcement_percentage: 100,
            minimum_hosts: 5,
            request_volume: 100
        },
        fj5 = {
            threshold: 85,
            enforcement_percentage: 100,
            minimum_hosts: 5,
            request_volume: 50
        };

    function VJA(A, Q, B, G) {
        if (Q in A && A[Q] !== void 0 && typeof A[Q] !== B) {
            let Z = G ? `${G}.${Q}` : Q;
            throw Error(`outlier detection config ${Z} parse error: expected ${B}, got ${typeof A[Q]}`)
        }
    }

    function y90(A, Q, B) {
        let G = B ? `${B}.${Q}` : Q;
        if (Q in A && A[Q] !== void 0) {
            if (!(0, o1A.isDuration)(A[Q])) throw Error(`outlier detection config ${G} parse error: expected Duration, got ${typeof A[Q]}`);
            if (!(A[Q].seconds >= 0 && A[Q].seconds <= 315576000000 && A[Q].nanos >= 0 && A[Q].nanos <= 999999999)) throw Error(`outlier detection config ${G} parse error: values out of range for non-negative Duaration`)
        }
    }

    function W81(A, Q, B) {
        let G = B ? `${B}.${Q}` : Q;
        if (VJA(A, Q, "number", B), Q in A && A[Q] !== void 0 && !(A[Q] >= 0 && A[Q] <= 100)) throw Error(`outlier detection config ${G} parse error: value out of range for percentage (0-100)`)
    }
    class bOA {
        constructor(A, Q, B, G, Z, I, Y) {
            if (this.childPolicy = Y, Y.getLoadBalancerName() === "pick_first") throw Error("outlier_detection LB policy cannot have a pick_first child policy");
            this.intervalMs = A !== null && A !== void 0 ? A : 1e4, this.baseEjectionTimeMs = Q !== null && Q !== void 0 ? Q : 30000, this.maxEjectionTimeMs = B !== null && B !== void 0 ? B : 300000, this.maxEjectionPercent = G !== null && G !== void 0 ? G : 10, this.successRateEjection = Z ? Object.assign(Object.assign({}, bj5), Z) : null, this.failurePercentageEjection = I ? Object.assign(Object.assign({}, fj5), I) : null
        }
        getLoadBalancerName() {
            return v90
        }
        toJsonObject() {
            var A, Q;
            return {
                outlier_detection: {
                    interval: (0, o1A.msToDuration)(this.intervalMs),
                    base_ejection_time: (0, o1A.msToDuration)(this.baseEjectionTimeMs),
                    max_ejection_time: (0, o1A.msToDuration)(this.maxEjectionTimeMs),
                    max_ejection_percent: this.maxEjectionPercent,
                    success_rate_ejection: (A = this.successRateEjection) !== null && A !== void 0 ? A : void 0,
                    failure_percentage_ejection: (Q = this.failurePercentageEjection) !== null && Q !== void 0 ? Q : void 0,
                    child_policy: [this.childPolicy.toJsonObject()]
                }
            }
        }
        getIntervalMs() {
            return this.intervalMs
        }
        getBaseEjectionTimeMs() {
            return this.baseEjectionTimeMs
        }
        getMaxEjectionTimeMs() {
            return this.maxEjectionTimeMs
        }
        getMaxEjectionPercent() {
            return this.maxEjectionPercent
        }
        getSuccessRateEjectionConfig() {
            return this.successRateEjection
        }
        getFailurePercentageEjectionConfig() {
            return this.failurePercentageEjection
        }
        getChildPolicy() {
            return this.childPolicy
        }
        static createFromJson(A) {
            var Q;
            if (y90(A, "interval"), y90(A, "base_ejection_time"), y90(A, "max_ejection_time"), W81(A, "max_ejection_percent"), "success_rate_ejection" in A && A.success_rate_ejection !== void 0) {
                if (typeof A.success_rate_ejection !== "object") throw Error("outlier detection config success_rate_ejection must be an object");
                VJA(A.success_rate_ejection, "stdev_factor", "number", "success_rate_ejection"), W81(A.success_rate_ejection, "enforcement_percentage", "success_rate_ejection"), VJA(A.success_rate_ejection, "minimum_hosts", "number", "success_rate_ejection"), VJA(A.success_rate_ejection, "request_volume", "number", "success_rate_ejection")
            }
            if ("failure_percentage_ejection" in A && A.failure_percentage_ejection !== void 0) {
                if (typeof A.failure_percentage_ejection !== "object") throw Error("outlier detection config failure_percentage_ejection must be an object");
                W81(A.failure_percentage_ejection, "threshold", "failure_percentage_ejection"), W81(A.failure_percentage_ejection, "enforcement_percentage", "failure_percentage_ejection"), VJA(A.failure_percentage_ejection, "minimum_hosts", "number", "failure_percentage_ejection"), VJA(A.failure_percentage_ejection, "request_volume", "number", "failure_percentage_ejection")
            }
            if (!("child_policy" in A) || !Array.isArray(A.child_policy)) throw Error("outlier detection config child_policy must be an array");
            let B = (0, jj5.selectLbConfigFromList)(A.child_policy);
            if (!B) throw Error("outlier detection config child_policy: no valid recognized policy found");
            return new bOA(A.interval ? (0, o1A.durationToMs)(A.interval) : null, A.base_ejection_time ? (0, o1A.durationToMs)(A.base_ejection_time) : null, A.max_ejection_time ? (0, o1A.durationToMs)(A.max_ejection_time) : null, (Q = A.max_ejection_percent) !== null && Q !== void 0 ? Q : null, A.success_rate_ejection, A.failure_percentage_ejection, B)
        }
    }
    Zw2.OutlierDetectionLoadBalancingConfig = bOA;
    class Qw2 extends kj5.BaseSubchannelWrapper {
        constructor(A, Q) {
            super(A);
            this.mapEntry = Q, this.refCount = 0
        }
        ref() {
            this.child.ref(), this.refCount += 1
        }
        unref() {
            if (this.child.unref(), this.refCount -= 1, this.refCount <= 0) {
                if (this.mapEntry) {
                    let A = this.mapEntry.subchannelWrappers.indexOf(this);
                    if (A >= 0) this.mapEntry.subchannelWrappers.splice(A, 1)
                }
            }
        }
        eject() {
            this.setHealthy(!1)
        }
        uneject() {
            this.setHealthy(!0)
        }
        getMapEntry() {
            return this.mapEntry
        }
        getWrappedSubchannel() {
            return this.child
        }
    }

    function x90() {
        return {
            success: 0,
            failure: 0
        }
    }
    class Bw2 {
        constructor() {
            this.activeBucket = x90(), this.inactiveBucket = x90()
        }
        addSuccess() {
            this.activeBucket.success += 1
        }
        addFailure() {
            this.activeBucket.failure += 1
        }
        switchBuckets() {
            this.inactiveBucket = this.activeBucket, this.activeBucket = x90()
        }
        getLastSuccesses() {
            return this.inactiveBucket.success
        }
        getLastFailures() {
            return this.inactiveBucket.failure
        }
    }
    class Gw2 {
        constructor(A, Q) {
            this.wrappedPicker = A, this.countCalls = Q
        }
        pick(A) {
            let Q = this.wrappedPicker.pick(A);
            if (Q.pickResultType === _j5.PickResultType.COMPLETE) {
                let B = Q.subchannel,
                    G = B.getMapEntry();
                if (G) {
                    let Z = Q.onCallEnded;
                    if (this.countCalls) Z = (I, Y, J) => {
                        var W;
                        if (I === e$2.Status.OK) G.counter.addSuccess();
                        else G.counter.addFailure();
                        (W = Q.onCallEnded) === null || W === void 0 || W.call(Q, I, Y, J)
                    };
                    return Object.assign(Object.assign({}, Q), {
                        subchannel: B.getWrappedSubchannel(),
                        onCallEnded: Z
                    })
                } else return Object.assign(Object.assign({}, Q), {
                    subchannel: B.getWrappedSubchannel()
                })
            } else return Q
        }
    }
    class b90 {
        constructor(A) {
            this.entryMap = new k90.EndpointMap, this.latestConfig = null, this.timerStartTime = null, this.childBalancer = new Sj5.ChildLoadBalancerHandler((0, Aw2.createChildChannelControlHelper)(A, {
                createSubchannel: (Q, B) => {
                    let G = A.createSubchannel(Q, B),
                        Z = this.entryMap.getForSubchannelAddress(Q),
                        I = new Qw2(G, Z);
                    if ((Z === null || Z === void 0 ? void 0 : Z.currentEjectionTimestamp) !== null) I.eject();
                    return Z === null || Z === void 0 || Z.subchannelWrappers.push(I), I
                },
                updateState: (Q, B, G) => {
                    if (Q === Pj5.ConnectivityState.READY) A.updateState(Q, new Gw2(B, this.isCountingEnabled()), G);
                    else A.updateState(Q, B, G)
                }
            })), this.ejectionTimer = setInterval(() => {}, 0), clearInterval(this.ejectionTimer)
        }
        isCountingEnabled() {
            return this.latestConfig !== null && (this.latestConfig.getSuccessRateEjectionConfig() !== null || this.latestConfig.getFailurePercentageEjectionConfig() !== null)
        }
        getCurrentEjectionPercent() {
            let A = 0;
            for (let Q of this.entryMap.values())
                if (Q.currentEjectionTimestamp !== null) A += 1;
            return A * 100 / this.entryMap.size
        }
        runSuccessRateCheck(A) {
            if (!this.latestConfig) return;
            let Q = this.latestConfig.getSuccessRateEjectionConfig();
            if (!Q) return;
            IK("Running success rate check");
            let B = Q.request_volume,
                G = 0,
                Z = [];
            for (let [F, V] of this.entryMap.entries()) {
                let K = V.counter.getLastSuccesses(),
                    D = V.counter.getLastFailures();
                if (IK("Stats for " + (0, k90.endpointToString)(F) + ": successes=" + K + " failures=" + D + " targetRequestVolume=" + B), K + D >= B) G += 1, Z.push(K / (K + D))
            }
            if (IK("Found " + G + " success rate candidates; currentEjectionPercent=" + this.getCurrentEjectionPercent() + " successRates=[" + Z + "]"), G < Q.minimum_hosts) return;
            let I = Z.reduce((F, V) => F + V) / Z.length,
                Y = 0;
            for (let F of Z) {
                let V = F - I;
                Y += V * V
            }
            let J = Y / Z.length,
                W = Math.sqrt(J),
                X = I - W * (Q.stdev_factor / 1000);
            IK("stdev=" + W + " ejectionThreshold=" + X);
            for (let [F, V] of this.entryMap.entries()) {
                if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
                let K = V.counter.getLastSuccesses(),
                    D = V.counter.getLastFailures();
                if (K + D < B) continue;
                let H = K / (K + D);
                if (IK("Checking candidate " + F + " successRate=" + H), H < X) {
                    let C = Math.random() * 100;
                    if (IK("Candidate " + F + " randomNumber=" + C + " enforcement_percentage=" + Q.enforcement_percentage), C < Q.enforcement_percentage) IK("Ejecting candidate " + F), this.eject(V, A)
                }
            }
        }
        runFailurePercentageCheck(A) {
            if (!this.latestConfig) return;
            let Q = this.latestConfig.getFailurePercentageEjectionConfig();
            if (!Q) return;
            IK("Running failure percentage check. threshold=" + Q.threshold + " request volume threshold=" + Q.request_volume);
            let B = 0;
            for (let G of this.entryMap.values()) {
                let Z = G.counter.getLastSuccesses(),
                    I = G.counter.getLastFailures();
                if (Z + I >= Q.request_volume) B += 1
            }
            if (B < Q.minimum_hosts) return;
            for (let [G, Z] of this.entryMap.entries()) {
                if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
                let I = Z.counter.getLastSuccesses(),
                    Y = Z.counter.getLastFailures();
                if (IK("Candidate successes=" + I + " failures=" + Y), I + Y < Q.request_volume) continue;
                if (Y * 100 / (Y + I) > Q.threshold) {
                    let W = Math.random() * 100;
                    if (IK("Candidate " + G + " randomNumber=" + W + " enforcement_percentage=" + Q.enforcement_percentage), W < Q.enforcement_percentage) IK("Ejecting candidate " + G), this.eject(Z, A)
                }
            }
        }
        eject(A, Q) {
            A.currentEjectionTimestamp = new Date, A.ejectionTimeMultiplier += 1;
            for (let B of A.subchannelWrappers) B.eject()
        }
        uneject(A) {
            A.currentEjectionTimestamp = null;
            for (let Q of A.subchannelWrappers) Q.uneject()
        }
        switchAllBuckets() {
            for (let A of this.entryMap.values()) A.counter.switchBuckets()
        }
        startTimer(A) {
            var Q, B;
            this.ejectionTimer = setTimeout(() => this.runChecks(), A), (B = (Q = this.ejectionTimer).unref) === null || B === void 0 || B.call(Q)
        }
        runChecks() {
            let A = new Date;
            if (IK("Ejection timer running"), this.switchAllBuckets(), !this.latestConfig) return;
            this.timerStartTime = A, this.startTimer(this.latestConfig.getIntervalMs()), this.runSuccessRateCheck(A), this.runFailurePercentageCheck(A);
            for (let [Q, B] of this.entryMap.entries())
                if (B.currentEjectionTimestamp === null) {
                    if (B.ejectionTimeMultiplier > 0) B.ejectionTimeMultiplier -= 1
                } else {
                    let G = this.latestConfig.getBaseEjectionTimeMs(),
                        Z = this.latestConfig.getMaxEjectionTimeMs(),
                        I = new Date(B.currentEjectionTimestamp.getTime());
                    if (I.setMilliseconds(I.getMilliseconds() + Math.min(G * B.ejectionTimeMultiplier, Math.max(G, Z))), I < new Date) IK("Unejecting " + Q), this.uneject(B)
                }
        }
        updateAddressList(A, Q, B, G) {
            if (!(Q instanceof bOA)) return !1;
            if (IK("Received update with config: " + JSON.stringify(Q.toJsonObject(), void 0, 2)), A.ok) {
                for (let I of A.value)
                    if (!this.entryMap.has(I)) IK("Adding map entry for " + (0, k90.endpointToString)(I)), this.entryMap.set(I, {
                        counter: new Bw2,
                        currentEjectionTimestamp: null,
                        ejectionTimeMultiplier: 0,
                        subchannelWrappers: []
                    });
                this.entryMap.deleteMissing(A.value)
            }
            let Z = Q.getChildPolicy();
            if (this.childBalancer.updateAddressList(A, Z, B, G), Q.getSuccessRateEjectionConfig() || Q.getFailurePercentageEjectionConfig())
                if (this.timerStartTime) {
                    IK("Previous timer existed. Replacing timer"), clearTimeout(this.ejectionTimer);
                    let I = Q.getIntervalMs() - (new Date().getTime() - this.timerStartTime.getTime());
                    this.startTimer(I)
                } else IK("Starting new timer"), this.timerStartTime = new Date, this.startTimer(Q.getIntervalMs()), this.switchAllBuckets();
            else {
                IK("Counting disabled. Cancelling timer."), this.timerStartTime = null, clearTimeout(this.ejectionTimer);
                for (let I of this.entryMap.values()) this.uneject(I), I.ejectionTimeMultiplier = 0
            }
            return this.latestConfig = Q, !0
        }
        exitIdle() {
            this.childBalancer.exitIdle()
        }
        resetBackoff() {
            this.childBalancer.resetBackoff()
        }
        destroy() {
            clearTimeout(this.ejectionTimer), this.childBalancer.destroy()
        }
        getTypeName() {
            return v90
        }
    }
    Zw2.OutlierDetectionLoadBalancer = b90;

    function hj5() {
        if (vj5)(0, Aw2.registerLoadBalancerType)(v90, b90, bOA)
    }
});
var Fw2 = U((Ww2) => {
    Object.defineProperty(Ww2, "__esModule", {
        value: !0
    });
    Ww2.PriorityQueue = void 0;
    var KJA = 0,
        f90 = (A) => Math.floor(A / 2),
        X81 = (A) => A * 2 + 1,
        fOA = (A) => A * 2 + 2;
    class Jw2 {
        constructor(A = (Q, B) => Q > B) {
            this.comparator = A, this.heap = []
        }
        size() {
            return this.heap.length
        }
        isEmpty() {
            return this.size() == 0
        }
        peek() {
            return this.heap[KJA]
        }
        push(...A) {
            return A.forEach((Q) => {
                this.heap.push(Q), this.siftUp()
            }), this.size()
        }
        pop() {
            let A = this.peek(),
                Q = this.size() - 1;
            if (Q > KJA) this.swap(KJA, Q);
            return this.heap.pop(), this.siftDown(), A
        }
        replace(A) {
            let Q = this.peek();
            return this.heap[KJA] = A, this.siftDown(), Q
        }
        greater(A, Q) {
            return this.comparator(this.heap[A], this.heap[Q])
        }
        swap(A, Q) {
            [this.heap[A], this.heap[Q]] = [this.heap[Q], this.heap[A]]
        }
        siftUp() {
            let A = this.size() - 1;
            while (A > KJA && this.greater(A, f90(A))) this.swap(A, f90(A)), A = f90(A)
        }
        siftDown() {
            let A = KJA;
            while (X81(A) < this.size() && this.greater(X81(A), A) || fOA(A) < this.size() && this.greater(fOA(A), A)) {
                let Q = fOA(A) < this.size() && this.greater(fOA(A), X81(A)) ? fOA(A) : X81(A);
                this.swap(A, Q), A = Q
            }
        }
    }
    Ww2.PriorityQueue = Jw2
});
var $w2 = U((zw2) => {
    Object.defineProperty(zw2, "__esModule", {
        value: !0
    });
    zw2.WeightedRoundRobinLoadBalancingConfig = void 0;
    zw2.setup = oj5;
    var YK = dE(),
        mj5 = K6(),
        Nq = SOA(),
        Dw2 = xi(),
        dj5 = yOA(),
        cj5 = XZ(),
        Hw2 = t41(),
        DJA = wh(),
        pj5 = Fw2(),
        Vw2 = rU(),
        lj5 = "weighted_round_robin";

    function h90(A) {
        cj5.trace(mj5.LogVerbosity.DEBUG, lj5, A)
    }
    /* g90 = WEIGHTED_ROUND_ROBIN = "weighted_round_robin" */
var g90 = "weighted_round_robin",
        ij5 = 1e4,
        nj5 = 1e4,
        aj5 = 180000,
        sj5 = 1000,
        rj5 = 1;

    function Kw2(A, Q, B) {
        if (Q in A && A[Q] !== void 0 && typeof A[Q] !== B) throw Error(`weighted round robin config ${Q} parse error: expected ${B}, got ${typeof A[Q]}`)
    }

    function F81(A, Q) {
        if (Q in A && A[Q] !== void 0 && A[Q] !== null) {
            let B;
            if ((0, Nq.isDuration)(A[Q])) B = A[Q];
            else if ((0, Nq.isDurationMessage)(A[Q])) B = (0, Nq.durationMessageToDuration)(A[Q]);
            else if (typeof A[Q] === "string") {
                let G = (0, Nq.parseDuration)(A[Q]);
                if (!G) throw Error(`weighted round robin config ${Q}: failed to parse duration string ${A[Q]}`);
                B = G
            } else throw Error(`weighted round robin config ${Q}: expected duration, got ${typeof A[Q]}`);
            return (0, Nq.durationToMs)(B)
        }
        return null
    }
    class hOA {
        constructor(A, Q, B, G, Z, I) {
            this.enableOobLoadReport = A !== null && A !== void 0 ? A : !1, this.oobLoadReportingPeriodMs = Q !== null && Q !== void 0 ? Q : ij5, this.blackoutPeriodMs = B !== null && B !== void 0 ? B : nj5, this.weightExpirationPeriodMs = G !== null && G !== void 0 ? G : aj5, this.weightUpdatePeriodMs = Math.max(Z !== null && Z !== void 0 ? Z : sj5, 100), this.errorUtilizationPenalty = I !== null && I !== void 0 ? I : rj5
        }
        getLoadBalancerName() {
            return g90
        }
        toJsonObject() {
            return {
                enable_oob_load_report: this.enableOobLoadReport,
                oob_load_reporting_period: (0, Nq.durationToString)((0, Nq.msToDuration)(this.oobLoadReportingPeriodMs)),
                blackout_period: (0, Nq.durationToString)((0, Nq.msToDuration)(this.blackoutPeriodMs)),
                weight_expiration_period: (0, Nq.durationToString)((0, Nq.msToDuration)(this.weightExpirationPeriodMs)),
                weight_update_period: (0, Nq.durationToString)((0, Nq.msToDuration)(this.weightUpdatePeriodMs)),
                error_utilization_penalty: this.errorUtilizationPenalty
            }
        }
        static createFromJson(A) {
            if (Kw2(A, "enable_oob_load_report", "boolean"), Kw2(A, "error_utilization_penalty", "number"), A.error_utilization_penalty < 0) throw Error("weighted round robin config error_utilization_penalty < 0");
            return new hOA(A.enable_oob_load_report, F81(A, "oob_load_reporting_period"), F81(A, "blackout_period"), F81(A, "weight_expiration_period"), F81(A, "weight_update_period"), A.error_utilization_penalty)
        }
        getEnableOobLoadReport() {
            return this.enableOobLoadReport
        }
        getOobLoadReportingPeriodMs() {
            return this.oobLoadReportingPeriodMs
        }
        getBlackoutPeriodMs() {
            return this.blackoutPeriodMs
        }
        getWeightExpirationPeriodMs() {
            return this.weightExpirationPeriodMs
        }
        getWeightUpdatePeriodMs() {
            return this.weightUpdatePeriodMs
        }
        getErrorUtilizationPenalty() {
            return this.errorUtilizationPenalty
        }
    }
    zw2.WeightedRoundRobinLoadBalancingConfig = hOA;
    class Cw2 {
        constructor(A, Q) {
            this.metricsHandler = Q, this.queue = new pj5.PriorityQueue((Z, I) => Z.deadline < I.deadline);
            let B = A.filter((Z) => Z.weight > 0),
                G;
            if (B.length < 2) G = 1;
            else {
                let Z = 0;
                for (let {
                        weight: I
                    }
                    of B) Z += I;
                G = Z / B.length
            }
            for (let Z of A) {
                let I = Z.weight > 0 ? 1 / Z.weight : G;
                this.queue.push({
                    endpointName: Z.endpointName,
                    picker: Z.picker,
                    period: I,
                    deadline: Math.random() * I
                })
            }
        }
        pick(A) {
            let Q = this.queue.pop();
            this.queue.push(Object.assign(Object.assign({}, Q), {
                deadline: Q.deadline + Q.period
            }));
            let B = Q.picker.pick(A);
            if (B.pickResultType === DJA.PickResultType.COMPLETE)
                if (this.metricsHandler) return Object.assign(Object.assign({}, B), {
                    onCallEnded: (0, Hw2.createMetricsReader)((G) => this.metricsHandler(G, Q.endpointName), B.onCallEnded)
                });
                else {
                    let G = B.subchannel;
                    return Object.assign(Object.assign({}, B), {
                        subchannel: G.getWrappedSubchannel()
                    })
                }
            else return B
        }
    }
    class Ew2 {
        constructor(A) {
            this.channelControlHelper = A, this.latestConfig = null, this.children = new Map, this.currentState = YK.ConnectivityState.IDLE, this.updatesPaused = !1, this.lastError = null, this.weightUpdateTimer = null
        }
        countChildrenWithState(A) {
            let Q = 0;
            for (let B of this.children.values())
                if (B.child.getConnectivityState() === A) Q += 1;
            return Q
        }
        updateWeight(A, Q) {
            var B, G;
            let {
                rps_fractional: Z,
                application_utilization: I
            } = Q;
            if (I > 0 && Z > 0) I += Q.eps / Z * ((G = (B = this.latestConfig) === null || B === void 0 ? void 0 : B.getErrorUtilizationPenalty()) !== null && G !== void 0 ? G : 0);
            let Y = I === 0 ? 0 : Z / I;
            if (Y === 0) return;
            let J = new Date;
            if (A.nonEmptySince === null) A.nonEmptySince = J;
            A.lastUpdated = J, A.weight = Y
        }
        getWeight(A) {
            if (!this.latestConfig) return 0;
            let Q = new Date().getTime();
            if (Q - A.lastUpdated.getTime() >= this.latestConfig.getWeightExpirationPeriodMs()) return A.nonEmptySince = null, 0;
            let B = this.latestConfig.getBlackoutPeriodMs();
            if (B > 0 && (A.nonEmptySince === null || Q - A.nonEmptySince.getTime() < B)) return 0;
            return A.weight
        }
        calculateAndUpdateState() {
            if (this.updatesPaused || !this.latestConfig) return;
            if (this.countChildrenWithState(YK.ConnectivityState.READY) > 0) {
                let A = [];
                for (let [B, G] of this.children) {
                    if (G.child.getConnectivityState() !== YK.ConnectivityState.READY) continue;
                    A.push({
                        endpointName: B,
                        picker: G.child.getPicker(),
                        weight: this.getWeight(G)
                    })
                }
                h90("Created picker with weights: " + A.map((B) => B.endpointName + ":" + B.weight).join(","));
                let Q;
                if (!this.latestConfig.getEnableOobLoadReport()) Q = (B, G) => {
                    let Z = this.children.get(G);
                    if (Z) this.updateWeight(Z, B)
                };
                else Q = null;
                this.updateState(YK.ConnectivityState.READY, new Cw2(A, Q), null)
            } else if (this.countChildrenWithState(YK.ConnectivityState.CONNECTING) > 0) this.updateState(YK.ConnectivityState.CONNECTING, new DJA.QueuePicker(this), null);
            else if (this.countChildrenWithState(YK.ConnectivityState.TRANSIENT_FAILURE) > 0) {
                let A = `weighted_round_robin: No connection established. Last error: ${this.lastError}`;
                this.updateState(YK.ConnectivityState.TRANSIENT_FAILURE, new DJA.UnavailablePicker({
                    details: A
                }), A)
            } else this.updateState(YK.ConnectivityState.IDLE, new DJA.QueuePicker(this), null);
            for (let {
                    child: A
                }
                of this.children.values())
                if (A.getConnectivityState() === YK.ConnectivityState.IDLE) A.exitIdle()
        }
        updateState(A, Q, B) {
            h90(YK.ConnectivityState[this.currentState] + " -> " + YK.ConnectivityState[A]), this.currentState = A, this.channelControlHelper.updateState(A, Q, B)
        }
        updateAddressList(A, Q, B, G) {
            var Z, I;
            if (!(Q instanceof hOA)) return !1;
            if (!A.ok) {
                if (this.children.size === 0) this.updateState(YK.ConnectivityState.TRANSIENT_FAILURE, new DJA.UnavailablePicker(A.error), A.error.details);
                return !0
            }
            if (A.value.length === 0) {
                let W = `No addresses resolved. Resolution note: ${G}`;
                return this.updateState(YK.ConnectivityState.TRANSIENT_FAILURE, new DJA.UnavailablePicker({
                    details: W
                }), W), !1
            }
            h90("Connect to endpoint list " + A.value.map(Vw2.endpointToString));
            let Y = new Date,
                J = new Set;
            this.updatesPaused = !0, this.latestConfig = Q;
            for (let W of A.value) {
                let X = (0, Vw2.endpointToString)(W);
                J.add(X);
                let F = this.children.get(X);
                if (!F) F = {
                    child: new dj5.LeafLoadBalancer(W, (0, Dw2.createChildChannelControlHelper)(this.channelControlHelper, {
                        updateState: (V, K, D) => {
                            if (this.currentState === YK.ConnectivityState.READY && V !== YK.ConnectivityState.READY) this.channelControlHelper.requestReresolution();
                            if (V === YK.ConnectivityState.READY) F.nonEmptySince = null;
                            if (D) this.lastError = D;
                            this.calculateAndUpdateState()
                        },
                        createSubchannel: (V, K) => {
                            let D = this.channelControlHelper.createSubchannel(V, K);
                            if (F === null || F === void 0 ? void 0 : F.oobMetricsListener) return new Hw2.OrcaOobMetricsSubchannelWrapper(D, F.oobMetricsListener, this.latestConfig.getOobLoadReportingPeriodMs());
                            else return D
                        }
                    }), B, G),
                    lastUpdated: Y,
                    nonEmptySince: null,
                    weight: 0,
                    oobMetricsListener: null
                }, this.children.set(X, F);
                if (Q.getEnableOobLoadReport()) F.oobMetricsListener = (V) => {
                    this.updateWeight(F, V)
                };
                else F.oobMetricsListener = null
            }
            for (let [W, X] of this.children)
                if (J.has(W)) X.child.startConnecting();
                else X.child.destroy(), this.children.delete(W);
            if (this.updatesPaused = !1, this.calculateAndUpdateState(), this.weightUpdateTimer) clearInterval(this.weightUpdateTimer);
            return this.weightUpdateTimer = (I = (Z = setInterval(() => {
                if (this.currentState === YK.ConnectivityState.READY) this.calculateAndUpdateState()
            }, Q.getWeightUpdatePeriodMs())).unref) === null || I === void 0 ? void 0 : I.call(Z), !0
        }
        exitIdle() {}
        resetBackoff() {}
        destroy() {
            for (let A of this.children.values()) A.child.destroy();
            if (this.children.clear(), this.weightUpdateTimer) clearInterval(this.weightUpdateTimer)
        }
        getTypeName() {
            return g90
        }
    }

    function oj5() {
        (0, Dw2.registerLoadBalancerType)(g90, Ew2, hOA)
    }
});
var gOA = U((WG) => {
    Object.defineProperty(WG, "__esModule", {
        value: !0
    });
    WG.experimental = WG.ServerMetricRecorder = WG.ServerInterceptingCall = WG.ResponderBuilder = WG.ServerListenerBuilder = WG.addAdminServicesToServer = WG.getChannelzHandlers = WG.getChannelzServiceDefinition = WG.InterceptorConfigurationError = WG.InterceptingCall = WG.RequesterBuilder = WG.ListenerBuilder = WG.StatusBuilder = WG.getClientChannel = WG.ServerCredentials = WG.Server = WG.setLogVerbosity = WG.setLogger = WG.load = WG.loadObject = WG.CallCredentials = WG.ChannelCredentials = WG.waitForClientReady = WG.closeClient = WG.Channel = WG.makeGenericClientConstructor = WG.makeClientConstructor = WG.loadPackageDefinition = WG.Client = WG.compressionAlgorithms = WG.propagate = WG.connectivityState = WG.status = WG.logVerbosity = WG.Metadata = WG.credentials = void 0;
    var V81 = a91();
    Object.defineProperty(WG, "CallCredentials", {
        enumerable: !0,
        get: function() {
            return V81.CallCredentials
        }
    });
    var ej5 = hB0();
    Object.defineProperty(WG, "Channel", {
        enumerable: !0,
        get: function() {
            return ej5.ChannelImplementation
        }
    });
    var AS5 = b20();
    Object.defineProperty(WG, "compressionAlgorithms", {
        enumerable: !0,
        get: function() {
            return AS5.CompressionAlgorithms
        }
    });
    var QS5 = dE();
    Object.defineProperty(WG, "connectivityState", {
        enumerable: !0,
        get: function() {
            return QS5.ConnectivityState
        }
    });
    var K81 = gYA();
    Object.defineProperty(WG, "ChannelCredentials", {
        enumerable: !0,
        get: function() {
            return K81.ChannelCredentials
        }
    });
    var ww2 = fB0();
    Object.defineProperty(WG, "Client", {
        enumerable: !0,
        get: function() {
            return ww2.Client
        }
    });
    var u90 = K6();
    Object.defineProperty(WG, "logVerbosity", {
        enumerable: !0,
        get: function() {
            return u90.LogVerbosity
        }
    });
    Object.defineProperty(WG, "status", {
        enumerable: !0,
        get: function() {
            return u90.Status
        }
    });
    Object.defineProperty(WG, "propagate", {
        enumerable: !0,
        get: function() {
            return u90.Propagate
        }
    });
    var qw2 = XZ(),
        m90 = Y41();
    Object.defineProperty(WG, "loadPackageDefinition", {
        enumerable: !0,
        get: function() {
            return m90.loadPackageDefinition
        }
    });
    Object.defineProperty(WG, "makeClientConstructor", {
        enumerable: !0,
        get: function() {
            return m90.makeClientConstructor
        }
    });
    Object.defineProperty(WG, "makeGenericClientConstructor", {
        enumerable: !0,
        get: function() {
            return m90.makeClientConstructor
        }
    });
    var BS5 = BK();
    Object.defineProperty(WG, "Metadata", {
        enumerable: !0,
        get: function() {
            return BS5.Metadata
        }
    });
    var GS5 = D$2();
    Object.defineProperty(WG, "Server", {
        enumerable: !0,
        get: function() {
            return GS5.Server
        }
    });
    var ZS5 = r41();
    Object.defineProperty(WG, "ServerCredentials", {
        enumerable: !0,
        get: function() {
            return ZS5.ServerCredentials
        }
    });
    var IS5 = z$2();
    Object.defineProperty(WG, "StatusBuilder", {
        enumerable: !0,
        get: function() {
            return IS5.StatusBuilder
        }
    });
    WG.credentials = {
        combineChannelCredentials: (A, ...Q) => {
            return Q.reduce((B, G) => B.compose(G), A)
        },
        combineCallCredentials: (A, ...Q) => {
            return Q.reduce((B, G) => B.compose(G), A)
        },
        createInsecure: K81.ChannelCredentials.createInsecure,
        createSsl: K81.ChannelCredentials.createSsl,
        createFromSecureContext: K81.ChannelCredentials.createFromSecureContext,
        createFromMetadataGenerator: V81.CallCredentials.createFromMetadataGenerator,
        createFromGoogleCredential: V81.CallCredentials.createFromGoogleCredential,
        createEmpty: V81.CallCredentials.createEmpty
    };
    var YS5 = (A) => A.close();
    WG.closeClient = YS5;
    var JS5 = (A, Q, B) => A.waitForReady(Q, B);
    WG.waitForClientReady = JS5;
    var WS5 = (A, Q) => {
        throw Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead")
    };
    WG.loadObject = WS5;
    var XS5 = (A, Q, B) => {
        throw Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead")
    };
    WG.load = XS5;
    var FS5 = (A) => {
        qw2.setLogger(A)
    };
    WG.setLogger = FS5;
    var VS5 = (A) => {
        qw2.setLoggerVerbosity(A)
    };
    WG.setLogVerbosity = VS5;
    var KS5 = (A) => {
        return ww2.Client.prototype.getChannel.call(A)
    };
    WG.getClientChannel = KS5;
    var D81 = vB0();
    Object.defineProperty(WG, "ListenerBuilder", {
        enumerable: !0,
        get: function() {
            return D81.ListenerBuilder
        }
    });
    Object.defineProperty(WG, "RequesterBuilder", {
        enumerable: !0,
        get: function() {
            return D81.RequesterBuilder
        }
    });
    Object.defineProperty(WG, "InterceptingCall", {
        enumerable: !0,
        get: function() {
            return D81.InterceptingCall
        }
    });
    Object.defineProperty(WG, "InterceptorConfigurationError", {
        enumerable: !0,
        get: function() {
            return D81.InterceptorConfigurationError
        }
    });
    var Nw2 = mi();
    Object.defineProperty(WG, "getChannelzServiceDefinition", {
        enumerable: !0,
        get: function() {
            return Nw2.getChannelzServiceDefinition
        }
    });
    Object.defineProperty(WG, "getChannelzHandlers", {
        enumerable: !0,
        get: function() {
            return Nw2.getChannelzHandlers
        }
    });
    var DS5 = Z41();
    Object.defineProperty(WG, "addAdminServicesToServer", {
        enumerable: !0,
        get: function() {
            return DS5.addAdminServicesToServer
        }
    });
    var d90 = z90();
    Object.defineProperty(WG, "ServerListenerBuilder", {
        enumerable: !0,
        get: function() {
            return d90.ServerListenerBuilder
        }
    });
    Object.defineProperty(WG, "ResponderBuilder", {
        enumerable: !0,
        get: function() {
            return d90.ResponderBuilder
        }
    });
    Object.defineProperty(WG, "ServerInterceptingCall", {
        enumerable: !0,
        get: function() {
            return d90.ServerInterceptingCall
        }
    });
    var HS5 = t41();
    Object.defineProperty(WG, "ServerMetricRecorder", {
        enumerable: !0,
        get: function() {
            return HS5.ServerMetricRecorder
        }
    });
    var CS5 = O90();
    WG.experimental = CS5;
    var ES5 = n20(),
        zS5 = h$2(),
        US5 = l$2(),
        $S5 = yOA(),
        wS5 = t$2(),
        qS5 = Yw2(),
        NS5 = $w2(),
        LS5 = mi();
    (() => {
        ES5.setup(), zS5.setup(), US5.setup(), $S5.setup(), wS5.setup(), qS5.setup(), NS5.setup(), LS5.setup()
    })()
});
var Rw2 = U((Mw2) => {
    Object.defineProperty(Mw2, "__esModule", {
        value: !0
    });
    Mw2.createServiceClientConstructor = void 0;
    var kS5 = gOA();

    function yS5(A, Q) {
        let B = {
            export: {
                path: A,
                requestStream: !1,
                responseStream: !1,
                requestSerialize: (G) => {
                    return G
                },
                requestDeserialize: (G) => {
                    return G
                },
                responseSerialize: (G) => {
                    return G
                },
                responseDeserialize: (G) => {
                    return G
                }
            }
        };
        return kS5.makeGenericClientConstructor(B, Q)
    }
    Mw2.createServiceClientConstructor = yS5
});
var uOA = U((Tw2) => {
    Object.defineProperty(Tw2, "__esModule", {
        value: !0
    });
    Tw2.createOtlpGrpcExporterTransport = Tw2.GrpcExporterTransport = Tw2.createEmptyMetadata = Tw2.createSslCredentials = Tw2.createInsecureCredentials = void 0;
    var xS5 = 0,
        vS5 = 2;

    function bS5(A) {
        return A === "gzip" ? vS5 : xS5
    }

    function fS5() {
        let {
            credentials: A
        } = gOA();
        return A.createInsecure()
    }
    Tw2.createInsecureCredentials = fS5;

    function hS5(A, Q, B) {
        let {
            credentials: G
        } = gOA();
        return G.createSsl(A, Q, B)
    }
    Tw2.createSslCredentials = hS5;

    function gS5() {
        let {
            Metadata: A
        } = gOA();
        return new A
    }
    Tw2.createEmptyMetadata = gS5;
    class c90 {
        _parameters;
        _client;
        _metadata;
        constructor(A) {
            this._parameters = A
        }
        shutdown() {
            this._client?.close()
        }
        send(A, Q) {
            let B = Buffer.from(A);
            if (this._client == null) {
                let {
                    createServiceClientConstructor: G
                } = Rw2();
                try {
                    this._metadata = this._parameters.metadata()
                } catch (I) {
                    return Promise.resolve({
                        status: "failure",
                        error: I
                    })
                }
                let Z = G(this._parameters.grpcPath, this._parameters.grpcName);
                try {
                    this._client = new Z(this._parameters.address, this._parameters.credentials(), {
                        "grpc.default_compression_algorithm": bS5(this._parameters.compression)
                    })
                } catch (I) {
                    return Promise.resolve({
                        status: "failure",
                        error: I
                    })
                }
            }
            return new Promise((G) => {
                let Z = Date.now() + Q;
                if (this._metadata == null) return G({
                    error: Error("metadata was null"),
                    status: "failure"
                });
                this._client.export(B, this._metadata, {
                    deadline: Z
                }, (I, Y) => {
                    if (I) G({
                        status: "failure",
                        error: I
                    });
                    else G({
                        data: Y,
                        status: "success"
                    })
                })
            })
        }
    }
    Tw2.GrpcExporterTransport = c90;

    function uS5(A) {
        return new c90(A)
    }
    Tw2.createOtlpGrpcExporterTransport = uS5
});
var _w2 = U((jw2) => {
    Object.defineProperty(jw2, "__esModule", {
        value: !0
    });
    jw2.VERSION = void 0;
    jw2.VERSION = "0.204.0"
});
var hw2 = U((bw2) => {
    Object.defineProperty(bw2, "__esModule", {
        value: !0
    });
    bw2.getOtlpGrpcDefaultConfiguration = bw2.mergeOtlpGrpcConfigurationWithDefaults = bw2.validateAndNormalizeUrl = void 0;
    var xw2 = mk(),
        mOA = uOA(),
        lS5 = _w2(),
        iS5 = UA("url"),
        kw2 = W9();

    function vw2(A) {
        if (A = A.trim(), !A.match(/^([\w]{1,8}):\/\//)) A = `https://${A}`;
        let B = new iS5.URL(A);
        if (B.protocol === "unix:") return A;
        if (B.pathname && B.pathname !== "/") kw2.diag.warn("URL path should not be set when using grpc, the path part of the URL will be ignored.");
        if (B.protocol !== "" && !B.protocol?.match(/^(http)s?:$/)) kw2.diag.warn("URL protocol should be http(s)://. Using http://.");
        return B.host
    }
    bw2.validateAndNormalizeUrl = vw2;

    function yw2(A, Q) {
        for (let [B, G] of Object.entries(Q.getMap()))
            if (A.get(B).length < 1) A.set(B, G)
    }

    function nS5(A, Q, B) {
        let G = A.url ?? Q.url ?? B.url;
        return {
            ...(0, xw2.mergeOtlpSharedConfigurationWithDefaults)(A, Q, B),
            metadata: () => {
                let Z = B.metadata();
                return yw2(Z, A.metadata?.().clone() ?? (0, mOA.createEmptyMetadata)()), yw2(Z, Q.metadata?.() ?? (0, mOA.createEmptyMetadata)()), Z
            },
            url: vw2(G),
            credentials: A.credentials ?? Q.credentials?.(G) ?? B.credentials(G)
        }
    }
    bw2.mergeOtlpGrpcConfigurationWithDefaults = nS5;

    function aS5() {
        return {
            ...(0, xw2.getSharedConfigurationDefaults)(),
            metadata: () => {
                let A = (0, mOA.createEmptyMetadata)();
                return A.set("User-Agent", `OTel-OTLP-Exporter-JavaScript/${lS5.VERSION}`), A
            },
            url: "http://localhost:4317",
            credentials: (A) => {
                if (A.startsWith("http://")) return () => (0, mOA.createInsecureCredentials)();
                else return () => (0, mOA.createSslCredentials)()
            }
        }
    }
    bw2.getOtlpGrpcDefaultConfiguration = aS5
});
var lw2 = U((cw2) => {
    Object.defineProperty(cw2, "__esModule", {
        value: !0
    });
    cw2.getOtlpGrpcConfigurationFromEnv = void 0;
    var gw2 = t6(),
        dOA = uOA(),
        oS5 = Si(),
        tS5 = UA("fs"),
        eS5 = UA("path"),
        mw2 = W9();

    function p90(A, Q) {
        if (A != null && A !== "") return A;
        if (Q != null && Q !== "") return Q;
        return
    }

    function A_5(A) {
        let Q = process.env[`OTEL_EXPORTER_OTLP_${A}_HEADERS`]?.trim(),
            B = process.env.OTEL_EXPORTER_OTLP_HEADERS?.trim(),
            G = (0, gw2.parseKeyPairsIntoRecord)(Q),
            Z = (0, gw2.parseKeyPairsIntoRecord)(B);
        if (Object.keys(G).length === 0 && Object.keys(Z).length === 0) return;
        let I = Object.assign({}, Z, G),
            Y = (0, dOA.createEmptyMetadata)();
        for (let [J, W] of Object.entries(I)) Y.set(J, W);
        return Y
    }

    function Q_5(A) {
        let Q = A_5(A);
        if (Q == null) return;
        return () => Q
    }

    function B_5(A) {
        let Q = process.env[`OTEL_EXPORTER_OTLP_${A}_ENDPOINT`]?.trim(),
            B = process.env.OTEL_EXPORTER_OTLP_ENDPOINT?.trim();
        return p90(Q, B)
    }

    function G_5(A) {
        let Q = process.env[`OTEL_EXPORTER_OTLP_${A}_INSECURE`]?.toLowerCase().trim(),
            B = process.env.OTEL_EXPORTER_OTLP_INSECURE?.toLowerCase().trim();
        return p90(Q, B) === "true"
    }

    function l90(A, Q, B) {
        let G = process.env[A]?.trim(),
            Z = process.env[Q]?.trim(),
            I = p90(G, Z);
        if (I != null) try {
            return tS5.readFileSync(eS5.resolve(process.cwd(), I))
        } catch {
            mw2.diag.warn(B);
            return
        } else return
    }

    function Z_5(A) {
        return l90(`OTEL_EXPORTER_OTLP_${A}_CLIENT_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE", "Failed to read client certificate chain file")
    }

    function I_5(A) {
        return l90(`OTEL_EXPORTER_OTLP_${A}_CLIENT_KEY`, "OTEL_EXPORTER_OTLP_CLIENT_KEY", "Failed to read client certificate private key file")
    }

    function uw2(A) {
        return l90(`OTEL_EXPORTER_OTLP_${A}_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CERTIFICATE", "Failed to read root certificate file")
    }

    function dw2(A) {
        let Q = I_5(A),
            B = Z_5(A),
            G = uw2(A),
            Z = Q != null && B != null;
        if (G != null && !Z) return mw2.diag.warn("Client key and certificate must both be provided, but one was missing - attempting to create credentials from just the root certificate"), (0, dOA.createSslCredentials)(uw2(A));
        return (0, dOA.createSslCredentials)(G, Q, B)
    }

    function Y_5(A) {
        if (G_5(A)) return (0, dOA.createInsecureCredentials)();
        return dw2(A)
    }

    function J_5(A) {
        return {
            ...(0, oS5.getSharedConfigurationFromEnvironment)(A),
            metadata: Q_5(A),
            url: B_5(A),
            credentials: (Q) => {
                if (Q.startsWith("http://")) return () => {
                    return (0, dOA.createInsecureCredentials)()
                };
                else if (Q.startsWith("https://")) return () => {
                    return dw2(A)
                };
                return () => {
                    return Y_5(A)
                }
            }
        }
    }
    cw2.getOtlpGrpcConfigurationFromEnv = J_5
});
var sw2 = U((nw2) => {
    Object.defineProperty(nw2, "__esModule", {
        value: !0
    });
    nw2.convertLegacyOtlpGrpcOptions = void 0;
    var W_5 = W9(),
        iw2 = hw2(),
        X_5 = uOA(),
        F_5 = lw2();

    function V_5(A, Q) {
        if (A.headers) W_5.diag.warn("Headers cannot be set when using grpc");
        let B = A.credentials;
        return (0, iw2.mergeOtlpGrpcConfigurationWithDefaults)({
            url: A.url,
            metadata: () => {
                return A.metadata ?? (0, X_5.createEmptyMetadata)()
            },
            compression: A.compression,
            timeoutMillis: A.timeoutMillis,
            concurrencyLimit: A.concurrencyLimit,
            credentials: B != null ? () => B : void 0
        }, (0, F_5.getOtlpGrpcConfigurationFromEnv)(Q), (0, iw2.getOtlpGrpcDefaultConfiguration)())
    }
    nw2.convertLegacyOtlpGrpcOptions = V_5
});
var tw2 = U((rw2) => {
    Object.defineProperty(rw2, "__esModule", {
        value: !0
    });
    rw2.createOtlpGrpcExportDelegate = void 0;
    var K_5 = mk(),
        D_5 = uOA();

    function H_5(A, Q, B, G) {
        return (0, K_5.createOtlpNetworkExportDelegate)(A, Q, (0, D_5.createOtlpGrpcExporterTransport)({
            address: A.url,
            compression: A.compression,
            credentials: A.credentials,
            metadata: A.metadata,
            grpcName: B,
            grpcPath: G
        }))
    }
    rw2.createOtlpGrpcExportDelegate = H_5
});
var C81 = U((H81) => {
    Object.defineProperty(H81, "__esModule", {
        value: !0
    });
    H81.createOtlpGrpcExportDelegate = H81.convertLegacyOtlpGrpcOptions = void 0;
    var C_5 = sw2();
    Object.defineProperty(H81, "convertLegacyOtlpGrpcOptions", {
        enumerable: !0,
        get: function() {
            return C_5.convertLegacyOtlpGrpcOptions
        }
    });
    var E_5 = tw2();
    Object.defineProperty(H81, "createOtlpGrpcExportDelegate", {
        enumerable: !0,
        get: function() {
            return E_5.createOtlpGrpcExportDelegate
        }
    })
});
var Gq2 = U((Qq2) => {
    Object.defineProperty(Qq2, "__esModule", {
        value: !0
    });
    Qq2.OTLPMetricExporter = void 0;
    var U_5 = c91(),
        ew2 = C81(),
        $_5 = pk();
    class Aq2 extends U_5.OTLPMetricExporterBase {
        constructor(A) {
            super((0, ew2.createOtlpGrpcExportDelegate)((0, ew2.convertLegacyOtlpGrpcOptions)(A ?? {}, "METRICS"), $_5.ProtobufMetricsSerializer, "MetricsExportService", "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"), A)
        }
    }
    Qq2.OTLPMetricExporter = Aq2
});
var Zq2 = U((i90) => {
    Object.defineProperty(i90, "__esModule", {
        value: !0
    });
    i90.OTLPMetricExporter = void 0;
    var w_5 = Gq2();
    Object.defineProperty(i90, "OTLPMetricExporter", {
        enumerable: !0,
        get: function() {
            return w_5.OTLPMetricExporter
        }
    })
});
var s90 = U((Wq2) => {
    Object.defineProperty(Wq2, "__esModule", {
        value: !0
    });
    Wq2.PrometheusSerializer = void 0;
    var N_5 = W9(),
        t1A = Mi(),
        Iq2 = t6();

    function z81(A) {
        return A.replace(/\\/g, "\\\\").replace(/\n/g, "\\n")
    }

    function Yq2(A = "") {
        if (typeof A !== "string") A = JSON.stringify(A);
        return z81(A).replace(/"/g, "\\\"")
    }
    var L_5 = /[^a-z0-9_]/gi,
        M_5 = /_{2,}/g;

    function a90(A) {
        return A.replace(L_5, "_").replace(M_5, "_")
    }

    function n90(A, Q) {
        if (!A.endsWith("_total") && Q.dataPointType === t1A.DataPointType.SUM && Q.isMonotonic) A = A + "_total";
        return A
    }

    function O_5(A) {
        if (A === 1 / 0) return "+Inf";
        else if (A === -1 / 0) return "-Inf";
        else return `${A}`
    }

    function R_5(A) {
        switch (A.dataPointType) {
            case t1A.DataPointType.SUM:
                if (A.isMonotonic) return "counter";
                return "gauge";
            case t1A.DataPointType.GAUGE:
                return "gauge";
            case t1A.DataPointType.HISTOGRAM:
                return "histogram";
            default:
                return "untyped"
        }
    }

    function E81(A, Q, B, G, Z) {
        let I = !1,
            Y = "";
        for (let [J, W] of Object.entries(Q)) {
            let X = a90(J);
            I = !0, Y += `${Y.length>0?",":""}${X}="${Yq2(W)}"`
        }
        if (Z)
            for (let [J, W] of Object.entries(Z)) {
                let X = a90(J);
                I = !0, Y += `${Y.length>0?",":""}${X}="${Yq2(W)}"`
            }
        if (I) A += `{${Y}}`;
        return `${A} ${O_5(B)}${G!==void 0?" "+String(G):""}
`
    }
    var T_5 = "# no registered metrics";
    class Jq2 {
        _prefix;
        _appendTimestamp;
        _additionalAttributes;
        _withResourceConstantLabels;