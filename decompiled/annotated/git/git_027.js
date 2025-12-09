/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: git_027.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   UA       (7次) = require(moduleName) - Node.js require
 *   U        (6次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 27/34
 * Lines: 318436 - 319935 (1500 lines)
 * Original file: cli.js
 */

        getTarget() {
            return this.internalChannel.getTarget()
        }
        getConnectivityState(A) {
            return this.internalChannel.getConnectivityState(A)
        }
        watchConnectivityState(A, Q, B) {
            this.internalChannel.watchConnectivityState(A, Q, B)
        }
        getChannelzRef() {
            return this.internalChannel.getChannelzRef()
        }
        createCall(A, Q, B, G, Z) {
            if (typeof A !== "string") throw TypeError("Channel#createCall: method must be a string");
            if (!(typeof Q === "number" || Q instanceof Date)) throw TypeError("Channel#createCall: deadline must be a number or Date");
            return this.internalChannel.createCall(A, Q, B, G, Z)
        }
    }
    wU2.ChannelImplementation = $U2
});
var jU2 = U((TU2) => {
    Object.defineProperty(TU2, "__esModule", {
        value: !0
    });
    TU2.ServerDuplexStreamImpl = TU2.ServerWritableStreamImpl = TU2.ServerReadableStreamImpl = TU2.ServerUnaryCallImpl = void 0;
    TU2.serverErrorToStatus = J90;
    var jT5 = UA("events"),
        I90 = UA("stream"),
        Y90 = K6(),
        NU2 = BK();

    function J90(A, Q) {
        var B;
        let G = {
            code: Y90.Status.UNKNOWN,
            details: "message" in A ? A.message : "Unknown Error",
            metadata: (B = Q !== null && Q !== void 0 ? Q : A.metadata) !== null && B !== void 0 ? B : null
        };
        if ("code" in A && typeof A.code === "number" && Number.isInteger(A.code)) {
            if (G.code = A.code, "details" in A && typeof A.details === "string") G.details = A.details
        }
        return G
    }
    class LU2 extends jT5.EventEmitter {
        constructor(A, Q, B, G) {
            super();
            this.path = A, this.call = Q, this.metadata = B, this.request = G, this.cancelled = !1
        }
        getPeer() {
            return this.call.getPeer()
        }
        sendMetadata(A) {
            this.call.sendMetadata(A)
        }
        getDeadline() {
            return this.call.getDeadline()
        }
        getPath() {
            return this.path
        }
        getHost() {
            return this.call.getHost()
        }
        getAuthContext() {
            return this.call.getAuthContext()
        }
        getMetricsRecorder() {
            return this.call.getMetricsRecorder()
        }
    }
    TU2.ServerUnaryCallImpl = LU2;
    class MU2 extends I90.Readable {
        constructor(A, Q, B) {
            super({
                objectMode: !0
            });
            this.path = A, this.call = Q, this.metadata = B, this.cancelled = !1
        }
        _read(A) {
            this.call.startRead()
        }
        getPeer() {
            return this.call.getPeer()
        }
        sendMetadata(A) {
            this.call.sendMetadata(A)
        }
        getDeadline() {
            return this.call.getDeadline()
        }
        getPath() {
            return this.path
        }
        getHost() {
            return this.call.getHost()
        }
        getAuthContext() {
            return this.call.getAuthContext()
        }
        getMetricsRecorder() {
            return this.call.getMetricsRecorder()
        }
    }
    TU2.ServerReadableStreamImpl = MU2;
    class OU2 extends I90.Writable {
        constructor(A, Q, B, G) {
            super({
                objectMode: !0
            });
            this.path = A, this.call = Q, this.metadata = B, this.request = G, this.pendingStatus = {
                code: Y90.Status.OK,
                details: "OK"
            }, this.cancelled = !1, this.trailingMetadata = new NU2.Metadata, this.on("error", (Z) => {
                this.pendingStatus = J90(Z), this.end()
            })
        }
        getPeer() {
            return this.call.getPeer()
        }
        sendMetadata(A) {
            this.call.sendMetadata(A)
        }
        getDeadline() {
            return this.call.getDeadline()
        }
        getPath() {
            return this.path
        }
        getHost() {
            return this.call.getHost()
        }
        getAuthContext() {
            return this.call.getAuthContext()
        }
        getMetricsRecorder() {
            return this.call.getMetricsRecorder()
        }
        _write(A, Q, B) {
            this.call.sendMessage(A, B)
        }
        _final(A) {
            var Q;
            A(null), this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), {
                metadata: (Q = this.pendingStatus.metadata) !== null && Q !== void 0 ? Q : this.trailingMetadata
            }))
        }
        end(A) {
            if (A) this.trailingMetadata = A;
            return super.end()
        }
    }
    TU2.ServerWritableStreamImpl = OU2;
    class RU2 extends I90.Duplex {
        constructor(A, Q, B) {
            super({
                objectMode: !0
            });
            this.path = A, this.call = Q, this.metadata = B, this.pendingStatus = {
                code: Y90.Status.OK,
                details: "OK"
            }, this.cancelled = !1, this.trailingMetadata = new NU2.Metadata, this.on("error", (G) => {
                this.pendingStatus = J90(G), this.end()
            })
        }
        getPeer() {
            return this.call.getPeer()
        }
        sendMetadata(A) {
            this.call.sendMetadata(A)
        }
        getDeadline() {
            return this.call.getDeadline()
        }
        getPath() {
            return this.path
        }
        getHost() {
            return this.call.getHost()
        }
        getAuthContext() {
            return this.call.getAuthContext()
        }
        getMetricsRecorder() {
            return this.call.getMetricsRecorder()
        }
        _read(A) {
            this.call.startRead()
        }
        _write(A, Q, B) {
            this.call.sendMessage(A, B)
        }
        _final(A) {
            var Q;
            A(null), this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), {
                metadata: (Q = this.pendingStatus.metadata) !== null && Q !== void 0 ? Q : this.trailingMetadata
            }))
        }
        end(A) {
            if (A) this.trailingMetadata = A;
            return super.end()
        }
    }
    TU2.ServerDuplexStreamImpl = RU2
});
var r41 = U((SU2) => {
    Object.defineProperty(SU2, "__esModule", {
        value: !0
    });
    SU2.ServerCredentials = void 0;
    SU2.createCertificateProviderServerCredentials = xT5;
    SU2.createServerCredentialsWithInterceptors = vT5;
    var W90 = LB0();
    class IJA {
        constructor(A, Q) {
            this.serverConstructorOptions = A, this.watchers = new Set, this.latestContextOptions = null, this.latestContextOptions = Q !== null && Q !== void 0 ? Q : null
        }
        _addWatcher(A) {
            this.watchers.add(A)
        }
        _removeWatcher(A) {
            this.watchers.delete(A)
        }
        getWatcherCount() {
            return this.watchers.size
        }
        updateSecureContextOptions(A) {
            this.latestContextOptions = A;
            for (let Q of this.watchers) Q(this.latestContextOptions)
        }
        _isSecure() {
            return this.serverConstructorOptions !== null
        }
        _getSecureContextOptions() {
            return this.latestContextOptions
        }
        _getConstructorOptions() {
            return this.serverConstructorOptions
        }
        _getInterceptors() {
            return []
        }
        static createInsecure() {
            return new X90
        }
        static createSsl(A, Q, B = !1) {
            var G;
            if (A !== null && !Buffer.isBuffer(A)) throw TypeError("rootCerts must be null or a Buffer");
            if (!Array.isArray(Q)) throw TypeError("keyCertPairs must be an array");
            if (typeof B !== "boolean") throw TypeError("checkClientCertificate must be a boolean");
            let Z = [],
                I = [];
            for (let Y = 0; Y < Q.length; Y++) {
                let J = Q[Y];
                if (J === null || typeof J !== "object") throw TypeError(`keyCertPair[${Y}] must be an object`);
                if (!Buffer.isBuffer(J.private_key)) throw TypeError(`keyCertPair[${Y}].private_key must be a Buffer`);
                if (!Buffer.isBuffer(J.cert_chain)) throw TypeError(`keyCertPair[${Y}].cert_chain must be a Buffer`);
                Z.push(J.cert_chain), I.push(J.private_key)
            }
            return new F90({
                requestCert: B,
                ciphers: W90.CIPHER_SUITES
            }, {
                ca: (G = A !== null && A !== void 0 ? A : (0, W90.getDefaultRootsData)()) !== null && G !== void 0 ? G : void 0,
                cert: Z,
                key: I
            })
        }
    }
    SU2.ServerCredentials = IJA;
    class X90 extends IJA {
        constructor() {
            super(null)
        }
        _getSettings() {
            return null
        }
        _equals(A) {
            return A instanceof X90
        }
    }
    class F90 extends IJA {
        constructor(A, Q) {
            super(A, Q);
            this.options = Object.assign(Object.assign({}, A), Q)
        }
        _equals(A) {
            if (this === A) return !0;
            if (!(A instanceof F90)) return !1;
            if (Buffer.isBuffer(this.options.ca) && Buffer.isBuffer(A.options.ca)) {
                if (!this.options.ca.equals(A.options.ca)) return !1
            } else if (this.options.ca !== A.options.ca) return !1;
            if (Array.isArray(this.options.cert) && Array.isArray(A.options.cert)) {
                if (this.options.cert.length !== A.options.cert.length) return !1;
                for (let Q = 0; Q < this.options.cert.length; Q++) {
                    let B = this.options.cert[Q],
                        G = A.options.cert[Q];
                    if (Buffer.isBuffer(B) && Buffer.isBuffer(G)) {
                        if (!B.equals(G)) return !1
                    } else if (B !== G) return !1
                }
            } else if (this.options.cert !== A.options.cert) return !1;
            if (Array.isArray(this.options.key) && Array.isArray(A.options.key)) {
                if (this.options.key.length !== A.options.key.length) return !1;
                for (let Q = 0; Q < this.options.key.length; Q++) {
                    let B = this.options.key[Q],
                        G = A.options.key[Q];
                    if (Buffer.isBuffer(B) && Buffer.isBuffer(G)) {
                        if (!B.equals(G)) return !1
                    } else if (B !== G) return !1
                }
            } else if (this.options.key !== A.options.key) return !1;
            if (this.options.requestCert !== A.options.requestCert) return !1;
            return !0
        }
    }
    class V90 extends IJA {
        constructor(A, Q, B) {
            super({
                requestCert: Q !== null,
                rejectUnauthorized: B,
                ciphers: W90.CIPHER_SUITES
            });
            this.identityCertificateProvider = A, this.caCertificateProvider = Q, this.requireClientCertificate = B, this.latestCaUpdate = null, this.latestIdentityUpdate = null, this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this), this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this)
        }
        _addWatcher(A) {
            var Q;
            if (this.getWatcherCount() === 0)(Q = this.caCertificateProvider) === null || Q === void 0 || Q.addCaCertificateListener(this.caCertificateUpdateListener), this.identityCertificateProvider.addIdentityCertificateListener(this.identityCertificateUpdateListener);
            super._addWatcher(A)
        }
        _removeWatcher(A) {
            var Q;
            if (super._removeWatcher(A), this.getWatcherCount() === 0)(Q = this.caCertificateProvider) === null || Q === void 0 || Q.removeCaCertificateListener(this.caCertificateUpdateListener), this.identityCertificateProvider.removeIdentityCertificateListener(this.identityCertificateUpdateListener)
        }
        _equals(A) {
            if (this === A) return !0;
            if (!(A instanceof V90)) return !1;
            return this.caCertificateProvider === A.caCertificateProvider && this.identityCertificateProvider === A.identityCertificateProvider && this.requireClientCertificate === A.requireClientCertificate
        }
        calculateSecureContextOptions() {
            var A;
            if (this.latestIdentityUpdate === null) return null;
            if (this.caCertificateProvider !== null && this.latestCaUpdate === null) return null;
            return {
                ca: (A = this.latestCaUpdate) === null || A === void 0 ? void 0 : A.caCertificate,
                cert: [this.latestIdentityUpdate.certificate],
                key: [this.latestIdentityUpdate.privateKey]
            }
        }
        finalizeUpdate() {
            let A = this.calculateSecureContextOptions();
            this.updateSecureContextOptions(A)
        }
        handleCaCertificateUpdate(A) {
            this.latestCaUpdate = A, this.finalizeUpdate()
        }
        handleIdentityCertitificateUpdate(A) {
            this.latestIdentityUpdate = A, this.finalizeUpdate()
        }
    }

    function xT5(A, Q, B) {
        return new V90(A, Q, B)
    }
    class K90 extends IJA {
        constructor(A, Q) {
            super({});
            this.childCredentials = A, this.interceptors = Q
        }
        _isSecure() {
            return this.childCredentials._isSecure()
        }
        _equals(A) {
            if (!(A instanceof K90)) return !1;
            if (!this.childCredentials._equals(A.childCredentials)) return !1;
            if (this.interceptors.length !== A.interceptors.length) return !1;
            for (let Q = 0; Q < this.interceptors.length; Q++)
                if (this.interceptors[Q] !== A.interceptors[Q]) return !1;
            return !0
        }
        _getInterceptors() {
            return this.interceptors
        }
        _addWatcher(A) {
            this.childCredentials._addWatcher(A)
        }
        _removeWatcher(A) {
            this.childCredentials._removeWatcher(A)
        }
        _getConstructorOptions() {
            return this.childCredentials._getConstructorOptions()
        }
        _getSecureContextOptions() {
            return this.childCredentials._getSecureContextOptions()
        }
    }

    function vT5(A, Q) {
        return new K90(A, Q)
    }
});
var SOA = U((kU2) => {
    Object.defineProperty(kU2, "__esModule", {
        value: !0
    });
    kU2.durationMessageToDuration = hT5;
    kU2.msToDuration = gT5;
    kU2.durationToMs = uT5;
    kU2.isDuration = mT5;
    kU2.isDurationMessage = dT5;
    kU2.parseDuration = pT5;
    kU2.durationToString = lT5;

    function hT5(A) {
        return {
            seconds: Number.parseInt(A.seconds),
            nanos: A.nanos
        }
    }

    function gT5(A) {
        return {
            seconds: A / 1000 | 0,
            nanos: A % 1000 * 1e6 | 0
        }
    }

    function uT5(A) {
        return A.seconds * 1000 + A.nanos / 1e6 | 0
    }

    function mT5(A) {
        return typeof A.seconds === "number" && typeof A.nanos === "number"
    }

    function dT5(A) {
        return typeof A.seconds === "string" && typeof A.nanos === "number"
    }
    var cT5 = /^(\d+)(?:\.(\d+))?s$/;

    function pT5(A) {
        let Q = A.match(cT5);
        if (!Q) return null;
        return {
            seconds: Number.parseInt(Q[1], 10),
            nanos: Q[2] ? Number.parseInt(Q[2].padEnd(9, "0"), 10) : 0
        }
    }

    function lT5(A) {
        if (A.nanos === 0) return `${A.seconds}s`;
        let Q;
        if (A.nanos % 1e6 === 0) Q = 1e6;
        else if (A.nanos % 1000 === 0) Q = 1000;
        else Q = 1;
        return `${A.seconds}.${A.nanos/Q}s`
    }
});
var t41 = U((cU2) => {
    var __dirname = "/home/runner/code/tmp/claude-cli-external-build-2215/node_modules/@grpc/grpc-js/build/src";
    Object.defineProperty(cU2, "__esModule", {
        value: !0
    });
    cU2.OrcaOobMetricsSubchannelWrapper = cU2.GRPC_METRICS_HEADER = cU2.ServerMetricRecorder = cU2.PerRequestMetricRecorder = void 0;
    cU2.createOrcaClient = hU2;
    cU2.createMetricsReader = IP5;
    var eT5 = Y41(),
        D90 = SOA(),
        AP5 = gYA(),
        QP5 = POA(),
        yU2 = K6(),
        BP5 = uYA(),
        GP5 = dE(),
        xU2 = null;

    function o41() {
        if (xU2) return xU2;
        let A = S20().loadSync,
            Q = A("xds/service/orca/v3/orca.proto", {
                keepCase: !0,
                longs: String,
                enums: String,
                defaults: !0,
                oneofs: !0,
                includeDirs: [`${__dirname}/../../proto/xds`, `${__dirname}/../../proto/protoc-gen-validate`]
            });
        return (0, eT5.loadPackageDefinition)(Q)
    }
    class bU2 {
        constructor() {
            this.message = {}
        }
        recordRequestCostMetric(A, Q) {
            if (!this.message.request_cost) this.message.request_cost = {};
            this.message.request_cost[A] = Q
        }
        recordUtilizationMetric(A, Q) {
            if (!this.message.utilization) this.message.utilization = {};
            this.message.utilization[A] = Q
        }
        recordNamedMetric(A, Q) {
            if (!this.message.named_metrics) this.message.named_metrics = {};
            this.message.named_metrics[A] = Q
        }
        recordCPUUtilizationMetric(A) {
            this.message.cpu_utilization = A
        }
        recordMemoryUtilizationMetric(A) {
            this.message.mem_utilization = A
        }
        recordApplicationUtilizationMetric(A) {
            this.message.application_utilization = A
        }
        recordQpsMetric(A) {
            this.message.rps_fractional = A
        }
        recordEpsMetric(A) {
            this.message.eps = A
        }
        serialize() {
            return o41().xds.data.orca.v3.OrcaLoadReport.serialize(this.message)
        }
    }
    cU2.PerRequestMetricRecorder = bU2;
    var ZP5 = 30000;
    class fU2 {
        constructor() {
            this.message = {}, this.serviceImplementation = {
                StreamCoreMetrics: (A) => {
                    let Q = A.request.report_interval ? (0, D90.durationToMs)((0, D90.durationMessageToDuration)(A.request.report_interval)) : ZP5,
                        B = setInterval(() => {
                            A.write(this.message)
                        }, Q);
                    A.on("cancelled", () => {
                        clearInterval(B)
                    })
                }
            }
        }
        putUtilizationMetric(A, Q) {
            if (!this.message.utilization) this.message.utilization = {};
            this.message.utilization[A] = Q
        }
        setAllUtilizationMetrics(A) {
            this.message.utilization = Object.assign({}, A)
        }
        deleteUtilizationMetric(A) {
            var Q;
            (Q = this.message.utilization) === null || Q === void 0 || delete Q[A]
        }
        setCpuUtilizationMetric(A) {
            this.message.cpu_utilization = A
        }
        deleteCpuUtilizationMetric() {
            delete this.message.cpu_utilization
        }
        setApplicationUtilizationMetric(A) {
            this.message.application_utilization = A
        }
        deleteApplicationUtilizationMetric() {
            delete this.message.application_utilization
        }
        setQpsMetric(A) {
            this.message.rps_fractional = A
        }
        deleteQpsMetric() {
            delete this.message.rps_fractional
        }
        setEpsMetric(A) {
            this.message.eps = A
        }
        deleteEpsMetric() {
            delete this.message.eps
        }
        addToServer(A) {
            let Q = o41().xds.service.orca.v3.OpenRcaService.service;
            A.addService(Q, this.serviceImplementation)
        }
    }
    cU2.ServerMetricRecorder = fU2;

    function hU2(A) {
        return new(o41()).xds.service.orca.v3.OpenRcaService("unused", AP5.ChannelCredentials.createInsecure(), {
            channelOverride: A
        })
    }
    cU2.GRPC_METRICS_HEADER = "endpoint-load-metrics-bin";
    var vU2 = "grpc_orca_load_report";

    function IP5(A, Q) {
        return (B, G, Z) => {
            let I = Z.getOpaque(vU2);
            if (I) A(I);
            else {
                let Y = Z.get(cU2.GRPC_METRICS_HEADER);
                if (Y.length > 0) I = o41().xds.data.orca.v3.OrcaLoadReport.deserialize(Y[0]), A(I), Z.setOpaque(vU2, I)
            }
            if (Q) Q(B, G, Z)
        }
    }
    var gU2 = "orca_oob_metrics";
    class uU2 {
        constructor(A, Q) {
            this.metricsListener = A, this.intervalMs = Q, this.dataProducer = null
        }
        setSubchannel(A) {
            let Q = A.getOrCreateDataProducer(gU2, YP5);
            this.dataProducer = Q, Q.addDataWatcher(this)
        }
        destroy() {
            var A;
            (A = this.dataProducer) === null || A === void 0 || A.removeDataWatcher(this)
        }
        getInterval() {
            return this.intervalMs
        }
        onMetricsUpdate(A) {
            this.metricsListener(A)
        }
    }
    class mU2 {
        constructor(A) {
            this.subchannel = A, this.dataWatchers = new Set, this.orcaSupported = !0, this.metricsCall = null, this.currentInterval = 1 / 0, this.backoffTimer = new BP5.BackoffTimeout(() => this.updateMetricsSubscription()), this.subchannelStateListener = () => this.updateMetricsSubscription();
            let Q = A.getChannel();
            this.client = hU2(Q), A.addConnectivityStateListener(this.subchannelStateListener)
        }
        addDataWatcher(A) {
            this.dataWatchers.add(A), this.updateMetricsSubscription()
        }
        removeDataWatcher(A) {
            var Q;
            if (this.dataWatchers.delete(A), this.dataWatchers.size === 0) this.subchannel.removeDataProducer(gU2), (Q = this.metricsCall) === null || Q === void 0 || Q.cancel(), this.metricsCall = null, this.client.close(), this.subchannel.removeConnectivityStateListener(this.subchannelStateListener);
            else this.updateMetricsSubscription()
        }
        updateMetricsSubscription() {
            var A;
            if (this.dataWatchers.size === 0 || !this.orcaSupported || this.subchannel.getConnectivityState() !== GP5.ConnectivityState.READY) return;
            let Q = Math.min(...Array.from(this.dataWatchers).map((B) => B.getInterval()));
            if (!this.metricsCall || Q !== this.currentInterval) {
                (A = this.metricsCall) === null || A === void 0 || A.cancel(), this.currentInterval = Q;
                let B = this.client.streamCoreMetrics({
                    report_interval: (0, D90.msToDuration)(Q)
                });
                this.metricsCall = B, B.on("data", (G) => {
                    this.dataWatchers.forEach((Z) => {
                        Z.onMetricsUpdate(G)
                    })
                }), B.on("error", (G) => {
                    if (this.metricsCall = null, G.code === yU2.Status.UNIMPLEMENTED) {
                        this.orcaSupported = !1;
                        return
                    }
                    if (G.code === yU2.Status.CANCELLED) return;
                    this.backoffTimer.runOnce()
                })
            }
        }
    }
    class dU2 extends QP5.BaseSubchannelWrapper {
        constructor(A, Q, B) {
            super(A);
            this.addDataWatcher(new uU2(Q, B))
        }
        getWrappedSubchannel() {
            return this.child
        }
    }
    cU2.OrcaOobMetricsSubchannelWrapper = dU2;

    function YP5(A) {
        return new mU2(A)
    }
});
var z90 = U((I$2) => {
    Object.defineProperty(I$2, "__esModule", {
        value: !0
    });
    I$2.BaseServerInterceptingCall = I$2.ServerInterceptingCall = I$2.ResponderBuilder = I$2.ServerListenerBuilder = void 0;
    I$2.isInterceptingServerListener = DP5;
    I$2.getServerInterceptingCall = UP5;
    var Q81 = BK(),
        oU = K6(),
        YJA = UA("http2"),
        iU2 = p91(),
        nU2 = UA("zlib"),
        VP5 = s20(),
        tU2 = XZ(),
        KP5 = UA("tls"),
        aU2 = t41(),
        eU2 = "server_call";

    function r1A(A) {
        tU2.trace(oU.LogVerbosity.DEBUG, eU2, A)
    }
    class A$2 {
        constructor() {
            this.metadata = void 0, this.message = void 0, this.halfClose = void 0, this.cancel = void 0
        }
        withOnReceiveMetadata(A) {
            return this.metadata = A, this
        }
        withOnReceiveMessage(A) {
            return this.message = A, this
        }
        withOnReceiveHalfClose(A) {
            return this.halfClose = A, this
        }
        withOnCancel(A) {
            return this.cancel = A, this
        }
        build() {
            return {
                onReceiveMetadata: this.metadata,
                onReceiveMessage: this.message,
                onReceiveHalfClose: this.halfClose,
                onCancel: this.cancel
            }
        }
    }
    I$2.ServerListenerBuilder = A$2;

    function DP5(A) {
        return A.onReceiveMetadata !== void 0 && A.onReceiveMetadata.length === 1
    }
    class Q$2 {
        constructor(A, Q) {
            this.listener = A, this.nextListener = Q, this.cancelled = !1, this.processingMetadata = !1, this.hasPendingMessage = !1, this.pendingMessage = null, this.processingMessage = !1, this.hasPendingHalfClose = !1
        }
        processPendingMessage() {
            if (this.hasPendingMessage) this.nextListener.onReceiveMessage(this.pendingMessage), this.pendingMessage = null, this.hasPendingMessage = !1
        }
        processPendingHalfClose() {
            if (this.hasPendingHalfClose) this.nextListener.onReceiveHalfClose(), this.hasPendingHalfClose = !1
        }
        onReceiveMetadata(A) {
            if (this.cancelled) return;
            this.processingMetadata = !0, this.listener.onReceiveMetadata(A, (Q) => {
                if (this.processingMetadata = !1, this.cancelled) return;
                this.nextListener.onReceiveMetadata(Q), this.processPendingMessage(), this.processPendingHalfClose()
            })
        }
        onReceiveMessage(A) {
            if (this.cancelled) return;
            this.processingMessage = !0, this.listener.onReceiveMessage(A, (Q) => {
                if (this.processingMessage = !1, this.cancelled) return;
                if (this.processingMetadata) this.pendingMessage = Q, this.hasPendingMessage = !0;
                else this.nextListener.onReceiveMessage(Q), this.processPendingHalfClose()
            })
        }
        onReceiveHalfClose() {
            if (this.cancelled) return;
            this.listener.onReceiveHalfClose(() => {
                if (this.cancelled) return;
                if (this.processingMetadata || this.processingMessage) this.hasPendingHalfClose = !0;
                else this.nextListener.onReceiveHalfClose()
            })
        }
        onCancel() {
            this.cancelled = !0, this.listener.onCancel(), this.nextListener.onCancel()
        }
    }
    class B$2 {
        constructor() {
            this.start = void 0, this.metadata = void 0, this.message = void 0, this.status = void 0
        }
        withStart(A) {
            return this.start = A, this
        }
        withSendMetadata(A) {
            return this.metadata = A, this
        }
        withSendMessage(A) {
            return this.message = A, this
        }
        withSendStatus(A) {
            return this.status = A, this
        }
        build() {
            return {
                start: this.start,
                sendMetadata: this.metadata,
                sendMessage: this.message,
                sendStatus: this.status
            }
        }
    }
    I$2.ResponderBuilder = B$2;
    var e41 = {
            onReceiveMetadata: (A, Q) => {
                Q(A)
            },
            onReceiveMessage: (A, Q) => {
                Q(A)
            },
            onReceiveHalfClose: (A) => {
                A()
            },
            onCancel: () => {}
        },
        A81 = {
            start: (A) => {
                A()
            },
            sendMetadata: (A, Q) => {
                Q(A)
            },
            sendMessage: (A, Q) => {
                Q(A)
            },
            sendStatus: (A, Q) => {
                Q(A)
            }
        };
    class G$2 {
        constructor(A, Q) {
            var B, G, Z, I;
            this.nextCall = A, this.processingMetadata = !1, this.sentMetadata = !1, this.processingMessage = !1, this.pendingMessage = null, this.pendingMessageCallback = null, this.pendingStatus = null, this.responder = {
                start: (B = Q === null || Q === void 0 ? void 0 : Q.start) !== null && B !== void 0 ? B : A81.start,
                sendMetadata: (G = Q === null || Q === void 0 ? void 0 : Q.sendMetadata) !== null && G !== void 0 ? G : A81.sendMetadata,
                sendMessage: (Z = Q === null || Q === void 0 ? void 0 : Q.sendMessage) !== null && Z !== void 0 ? Z : A81.sendMessage,
                sendStatus: (I = Q === null || Q === void 0 ? void 0 : Q.sendStatus) !== null && I !== void 0 ? I : A81.sendStatus
            }
        }
        processPendingMessage() {
            if (this.pendingMessageCallback) this.nextCall.sendMessage(this.pendingMessage, this.pendingMessageCallback), this.pendingMessage = null, this.pendingMessageCallback = null
        }
        processPendingStatus() {
            if (this.pendingStatus) this.nextCall.sendStatus(this.pendingStatus), this.pendingStatus = null
        }
        start(A) {
            this.responder.start((Q) => {
                var B, G, Z, I;
                let Y = {
                        onReceiveMetadata: (B = Q === null || Q === void 0 ? void 0 : Q.onReceiveMetadata) !== null && B !== void 0 ? B : e41.onReceiveMetadata,
                        onReceiveMessage: (G = Q === null || Q === void 0 ? void 0 : Q.onReceiveMessage) !== null && G !== void 0 ? G : e41.onReceiveMessage,
                        onReceiveHalfClose: (Z = Q === null || Q === void 0 ? void 0 : Q.onReceiveHalfClose) !== null && Z !== void 0 ? Z : e41.onReceiveHalfClose,
                        onCancel: (I = Q === null || Q === void 0 ? void 0 : Q.onCancel) !== null && I !== void 0 ? I : e41.onCancel
                    },
                    J = new Q$2(Y, A);
                this.nextCall.start(J)
            })
        }
        sendMetadata(A) {
            this.processingMetadata = !0, this.sentMetadata = !0, this.responder.sendMetadata(A, (Q) => {
                this.processingMetadata = !1, this.nextCall.sendMetadata(Q), this.processPendingMessage(), this.processPendingStatus()
            })
        }
        sendMessage(A, Q) {
            if (this.processingMessage = !0, !this.sentMetadata) this.sendMetadata(new Q81.Metadata);
            this.responder.sendMessage(A, (B) => {
                if (this.processingMessage = !1, this.processingMetadata) this.pendingMessage = B, this.pendingMessageCallback = Q;
                else this.nextCall.sendMessage(B, Q)
            })
        }
        sendStatus(A) {
            this.responder.sendStatus(A, (Q) => {
                if (this.processingMetadata || this.processingMessage) this.pendingStatus = Q;
                else this.nextCall.sendStatus(Q)
            })
        }
        startRead() {
            this.nextCall.startRead()
        }
        getPeer() {
            return this.nextCall.getPeer()
        }
        getDeadline() {
            return this.nextCall.getDeadline()
        }
        getHost() {
            return this.nextCall.getHost()
        }
        getAuthContext() {
            return this.nextCall.getAuthContext()
        }
        getConnectionInfo() {
            return this.nextCall.getConnectionInfo()
        }
        getMetricsRecorder() {
            return this.nextCall.getMetricsRecorder()
        }
    }
    I$2.ServerInterceptingCall = G$2;
    var Z$2 = "grpc-accept-encoding",
        C90 = "grpc-encoding",
        sU2 = "grpc-message",
        rU2 = "grpc-status",
        H90 = "grpc-timeout",
        HP5 = /(\d{1,8})\s*([HMSmun])/,
        CP5 = {
            H: 3600000,
            M: 60000,
            S: 1000,
            m: 1,
            u: 0.001,
            n: 0.000001
        },
        EP5 = {
            [Z$2]: "identity,deflate,gzip",
            [C90]: "identity"
        },
        oU2 = {
            [YJA.constants.HTTP2_HEADER_STATUS]: YJA.constants.HTTP_STATUS_OK,
            [YJA.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
        },
        zP5 = {
            waitForTrailers: !0
        };
    class E90 {
        constructor(A, Q, B, G, Z) {
            var I, Y;
            if (this.stream = A, this.callEventTracker = B, this.handler = G, this.listener = null, this.deadlineTimer = null, this.deadline = 1 / 0, this.maxSendMessageSize = oU.DEFAULT_MAX_SEND_MESSAGE_LENGTH, this.maxReceiveMessageSize = oU.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH, this.cancelled = !1, this.metadataSent = !1, this.wantTrailers = !1, this.cancelNotified = !1, this.incomingEncoding = "identity", this.readQueue = [], this.isReadPending = !1, this.receivedHalfClose = !1, this.streamEnded = !1, this.metricsRecorder = new aU2.PerRequestMetricRecorder, this.stream.once("error", (V) => {}), this.stream.once("close", () => {
                    var V;
                    if (r1A("Request to method " + ((V = this.handler) === null || V === void 0 ? void 0 : V.path) + " stream closed with rstCode " + this.stream.rstCode), this.callEventTracker && !this.streamEnded) this.streamEnded = !0, this.callEventTracker.onStreamEnd(!1), this.callEventTracker.onCallEnd({
                        code: oU.Status.CANCELLED,
                        details: "Stream closed before sending status",
                        metadata: null
                    });
                    this.notifyOnCancel()
                }), this.stream.on("data", (V) => {
                    this.handleDataFrame(V)
                }), this.stream.pause(), this.stream.on("end", () => {
                    this.handleEndEvent()
                }), "grpc.max_send_message_length" in Z) this.maxSendMessageSize = Z["grpc.max_send_message_length"];
            if ("grpc.max_receive_message_length" in Z) this.maxReceiveMessageSize = Z["grpc.max_receive_message_length"];
            this.host = (I = Q[":authority"]) !== null && I !== void 0 ? I : Q.host, this.decoder = new VP5.StreamDecoder(this.maxReceiveMessageSize);
            let J = Q81.Metadata.fromHttp2Headers(Q);
            if (tU2.isTracerEnabled(eU2)) r1A("Request to " + this.handler.path + " received headers " + JSON.stringify(J.toJSON()));
            let W = J.get(H90);
            if (W.length > 0) this.handleTimeoutHeader(W[0]);
            let X = J.get(C90);
            if (X.length > 0) this.incomingEncoding = X[0];
            J.remove(H90), J.remove(C90), J.remove(Z$2), J.remove(YJA.constants.HTTP2_HEADER_ACCEPT_ENCODING), J.remove(YJA.constants.HTTP2_HEADER_TE), J.remove(YJA.constants.HTTP2_HEADER_CONTENT_TYPE), this.metadata = J;
            let F = (Y = A.session) === null || Y === void 0 ? void 0 : Y.socket;
            this.connectionInfo = {
                localAddress: F === null || F === void 0 ? void 0 : F.localAddress,
                localPort: F === null || F === void 0 ? void 0 : F.localPort,
                remoteAddress: F === null || F === void 0 ? void 0 : F.remoteAddress,
                remotePort: F === null || F === void 0 ? void 0 : F.remotePort
            }, this.shouldSendMetrics = !!Z["grpc.server_call_metric_recording"]
        }
        handleTimeoutHeader(A) {
            let Q = A.toString().match(HP5);
            if (Q === null) {
                let Z = {
                    code: oU.Status.INTERNAL,
                    details: `Invalid ${H90} value "${A}"`,
                    metadata: null
                };
                process.nextTick(() => {
                    this.sendStatus(Z)
                });
                return
            }
            let B = +Q[1] * CP5[Q[2]] | 0,
                G = new Date;
            this.deadline = G.setMilliseconds(G.getMilliseconds() + B), this.deadlineTimer = setTimeout(() => {
                let Z = {
                    code: oU.Status.DEADLINE_EXCEEDED,
                    details: "Deadline exceeded",
                    metadata: null
                };
                this.sendStatus(Z)
            }, B)
        }
        checkCancelled() {
            if (!this.cancelled && (this.stream.destroyed || this.stream.closed)) this.notifyOnCancel(), this.cancelled = !0;
            return this.cancelled
        }
        notifyOnCancel() {
            if (this.cancelNotified) return;
            if (this.cancelNotified = !0, this.cancelled = !0, process.nextTick(() => {
                    var A;
                    (A = this.listener) === null || A === void 0 || A.onCancel()
                }), this.deadlineTimer) clearTimeout(this.deadlineTimer);
            this.stream.resume()
        }
        maybeSendMetadata() {
            if (!this.metadataSent) this.sendMetadata(new Q81.Metadata)
        }
        serializeMessage(A) {
            let Q = this.handler.serialize(A),
                B = Q.byteLength,
                G = Buffer.allocUnsafe(B + 5);
            return G.writeUInt8(0, 0), G.writeUInt32BE(B, 1), Q.copy(G, 5), G
        }
        decompressMessage(A, Q) {
            let B = A.subarray(5);
            if (Q === "identity") return B;
            else if (Q === "deflate" || Q === "gzip") {
                let G;
                if (Q === "deflate") G = nU2.createInflate();
                else G = nU2.createGunzip();
                return new Promise((Z, I) => {
                    let Y = 0,
                        J = [];
                    G.on("data", (W) => {
                        if (J.push(W), Y += W.byteLength, this.maxReceiveMessageSize !== -1 && Y > this.maxReceiveMessageSize) G.destroy(), I({
                            code: oU.Status.RESOURCE_EXHAUSTED,
                            details: `Received message that decompresses to a size larger than ${this.maxReceiveMessageSize}`
                        })
                    }), G.on("end", () => {
                        Z(Buffer.concat(J))
                    }), G.write(B), G.end()
                })
            } else return Promise.reject({
                code: oU.Status.UNIMPLEMENTED,
                details: `Received message compressed with unsupported encoding "${Q}"`
            })
        }
        async decompressAndMaybePush(A) {
            if (A.type !== "COMPRESSED") throw Error(`Invalid queue entry type: ${A.type}`);
            let B = A.compressedMessage.readUInt8(0) === 1 ? this.incomingEncoding : "identity",
                G;
            try {
                G = await this.decompressMessage(A.compressedMessage, B)
            } catch (Z) {
                this.sendStatus(Z);
                return
            }
            try {
                A.parsedMessage = this.handler.deserialize(G)
            } catch (Z) {
                this.sendStatus({
                    code: oU.Status.INTERNAL,
                    details: `Error deserializing request: ${Z.message}`
                });
                return
            }
            A.type = "READABLE", this.maybePushNextMessage()
        }
        maybePushNextMessage() {
            if (this.listener && this.isReadPending && this.readQueue.length > 0 && this.readQueue[0].type !== "COMPRESSED") {
                this.isReadPending = !1;
                let A = this.readQueue.shift();
                if (A.type === "READABLE") this.listener.onReceiveMessage(A.parsedMessage);
                else this.listener.onReceiveHalfClose()
            }
        }
        handleDataFrame(A) {
            var Q;
            if (this.checkCancelled()) return;
            r1A("Request to " + this.handler.path + " received data frame of size " + A.length);
            let B;
            try {
                B = this.decoder.write(A)
            } catch (G) {
                this.sendStatus({
                    code: oU.Status.RESOURCE_EXHAUSTED,
                    details: G.message
                });
                return
            }
            for (let G of B) {
                this.stream.pause();
                let Z = {
                    type: "COMPRESSED",
                    compressedMessage: G,
                    parsedMessage: null
                };
                this.readQueue.push(Z), this.decompressAndMaybePush(Z), (Q = this.callEventTracker) === null || Q === void 0 || Q.addMessageReceived()
            }
        }
        handleEndEvent() {
            this.readQueue.push({
                type: "HALF_CLOSE",
                compressedMessage: null,
                parsedMessage: null
            }), this.receivedHalfClose = !0, this.maybePushNextMessage()
        }
        start(A) {
            if (r1A("Request to " + this.handler.path + " start called"), this.checkCancelled()) return;
            this.listener = A, A.onReceiveMetadata(this.metadata)
        }
        sendMetadata(A) {
            if (this.checkCancelled()) return;
            if (this.metadataSent) return;
            this.metadataSent = !0;
            let Q = A ? A.toHttp2Headers() : null,
                B = Object.assign(Object.assign(Object.assign({}, oU2), EP5), Q);
            this.stream.respond(B, zP5)
        }
        sendMessage(A, Q) {
            if (this.checkCancelled()) return;
            let B;
            try {
                B = this.serializeMessage(A)
            } catch (G) {
                this.sendStatus({
                    code: oU.Status.INTERNAL,
                    details: `Error serializing response: ${(0,iU2.getErrorMessage)(G)}`,
                    metadata: null
                });
                return
            }
            if (this.maxSendMessageSize !== -1 && B.length - 5 > this.maxSendMessageSize) {
                this.sendStatus({
                    code: oU.Status.RESOURCE_EXHAUSTED,
                    details: `Sent message larger than max (${B.length} vs. ${this.maxSendMessageSize})`,
                    metadata: null
                });
                return
            }
            this.maybeSendMetadata(), r1A("Request to " + this.handler.path + " sent data frame of size " + B.length), this.stream.write(B, (G) => {
                var Z;
                if (G) {
                    this.sendStatus({
                        code: oU.Status.INTERNAL,
                        details: `Error writing message: ${(0,iU2.getErrorMessage)(G)}`,
                        metadata: null
                    });
                    return
                }(Z = this.callEventTracker) === null || Z === void 0 || Z.addMessageSent(), Q()
            })
        }
        sendStatus(A) {
            var Q, B, G;
            if (this.checkCancelled()) return;
            r1A("Request to method " + ((Q = this.handler) === null || Q === void 0 ? void 0 : Q.path) + " ended with status code: " + oU.Status[A.code] + " details: " + A.details);
            let Z = (G = (B = A.metadata) === null || B === void 0 ? void 0 : B.clone()) !== null && G !== void 0 ? G : new Q81.Metadata;
            if (this.shouldSendMetrics) Z.set(aU2.GRPC_METRICS_HEADER, this.metricsRecorder.serialize());
            if (this.metadataSent)
                if (!this.wantTrailers) this.wantTrailers = !0, this.stream.once("wantTrailers", () => {
                    if (this.callEventTracker && !this.streamEnded) this.streamEnded = !0, this.callEventTracker.onStreamEnd(!0), this.callEventTracker.onCallEnd(A);
                    let I = Object.assign({
                        [rU2]: A.code,
                        [sU2]: encodeURI(A.details)
                    }, Z.toHttp2Headers());
                    this.stream.sendTrailers(I), this.notifyOnCancel()
                }), this.stream.end();
                else this.notifyOnCancel();
            else {
                if (this.callEventTracker && !this.streamEnded) this.streamEnded = !0, this.callEventTracker.onStreamEnd(!0), this.callEventTracker.onCallEnd(A);
                let I = Object.assign(Object.assign({
                    [rU2]: A.code,
                    [sU2]: encodeURI(A.details)
                }, oU2), Z.toHttp2Headers());
                this.stream.respond(I, {
                    endStream: !0
                }), this.notifyOnCancel()
            }
        }
        startRead() {
            if (r1A("Request to " + this.handler.path + " startRead called"), this.checkCancelled()) return;
            if (this.isReadPending = !0, this.readQueue.length === 0) {
                if (!this.receivedHalfClose) this.stream.resume()
            } else this.maybePushNextMessage()
        }
        getPeer() {
            var A;
            let Q = (A = this.stream.session) === null || A === void 0 ? void 0 : A.socket;
            if (Q === null || Q === void 0 ? void 0 : Q.remoteAddress)
                if (Q.remotePort) return `${Q.remoteAddress}:${Q.remotePort}`;
                else return Q.remoteAddress;
            else return "unknown"
        }
        getDeadline() {
            return this.deadline
        }
        getHost() {
            return this.host
        }
        getAuthContext() {
            var A;
            if (((A = this.stream.session) === null || A === void 0 ? void 0 : A.socket) instanceof KP5.TLSSocket) {
                let Q = this.stream.session.socket.getPeerCertificate();
                return {
                    transportSecurityType: "ssl",
                    sslPeerCertificate: Q.raw ? Q : void 0
                }
            } else return {}
        }
        getConnectionInfo() {
            return this.connectionInfo
        }
        getMetricsRecorder() {
            return this.metricsRecorder
        }
    }
    I$2.BaseServerInterceptingCall = E90;

    function UP5(A, Q, B, G, Z, I) {
        let Y = {
                path: Z.path,
                requestStream: Z.type === "clientStream" || Z.type === "bidi",
                responseStream: Z.type === "serverStream" || Z.type === "bidi",
                requestDeserialize: Z.deserialize,
                responseSerialize: Z.serialize
            },
            J = new E90(Q, B, G, Z, I);
        return A.reduce((W, X) => {
            return X(Y, W)
        }, J)
    }
});
var D$2 = U((li) => {
    var MP5 = li && li.__runInitializers || function(A, Q, B) {
            var G = arguments.length > 2;
            for (var Z = 0; Z < Q.length; Z++) B = G ? Q[Z].call(A, B) : Q[Z].call(A);
            return G ? B : void 0
        },
        OP5 = li && li.__esDecorate || function(A, Q, B, G, Z, I) {
            function Y(z) {
                if (z !== void 0 && typeof z !== "function") throw TypeError("Function expected");
                return z
            }
            var J = G.kind,
                W = J === "getter" ? "get" : J === "setter" ? "set" : "value",
                X = !Q && A ? G.static ? A : A.prototype : null,
                F = Q || (X ? Object.getOwnPropertyDescriptor(X, G.name) : {}),
                V, K = !1;
            for (var D = B.length - 1; D >= 0; D--) {
                var H = {};
                for (var C in G) H[C] = C === "access" ? {} : G[C];
                for (var C in G.access) H.access[C] = G.access[C];
                H.addInitializer = function(z) {
                    if (K) throw TypeError("Cannot add initializers after decoration has completed");
                    I.push(Y(z || null))
                };
                var E = (0, B[D])(J === "accessor" ? {
                    get: F.get,
                    set: F.set
                } : F[W], H);
                if (J === "accessor") {
                    if (E === void 0) continue;
                    if (E === null || typeof E !== "object") throw TypeError("Object expected");
                    if (V = Y(E.get)) F.get = V;
                    if (V = Y(E.set)) F.set = V;
                    if (V = Y(E.init)) Z.unshift(V)
                } else if (V = Y(E))
                    if (J === "field") Z.unshift(V);
                    else F[W] = V
            }
            if (X) Object.defineProperty(X, G.name, F);
            K = !0
        };
    Object.defineProperty(li, "__esModule", {
        value: !0
    });
    li.Server = void 0;
    var tU = UA("http2"),
        RP5 = UA("util"),
        yW = K6(),
        XJA = jU2(),
        U90 = r41(),
        J$2 = JP(),
        WJA = XZ(),
        pi = rU(),
        DP = mE(),
        bF = mi(),
        W$2 = z90(),
        JJA = 2147483647,
        $90 = 2147483647,
        TP5 = 20000,
        X$2 = 2147483647,
        {
            HTTP2_HEADER_PATH: F$2
        } = tU.constants,
        PP5 = "server",
        V$2 = Buffer.from("max_age");

    function K$2(A) {
        WJA.trace(yW.LogVerbosity.DEBUG, "server_call", A)
    }

    function jP5() {}

    function SP5(A) {
        return function(Q, B) {
            return RP5.deprecate(Q, A)
        }
    }

    function w90(A) {
        return {
            code: yW.Status.UNIMPLEMENTED,
            details: `The server does not implement the method ${A}`
        }
    }

    function _P5(A, Q) {
        let B = w90(Q);
        switch (A) {
            case "unary":
                return (G, Z) => {
                    Z(B, null)
                };
            case "clientStream":
                return (G, Z) => {
                    Z(B, null)
                };
            case "serverStream":
                return (G) => {
                    G.emit("error", B)
                };
            case "bidi":
                return (G) => {
                    G.emit("error", B)
                };
            default:
                throw Error(`Invalid handlerType ${A}`)
        }
    }
    var kP5 = (() => {
        var A;
        let Q = [],
            B;
        return A = class {
            constructor(Z) {
                var I, Y, J, W, X, F;
                if (this.boundPorts = (MP5(this, Q), new Map), this.http2Servers = new Map, this.sessionIdleTimeouts = new Map, this.handlers = new Map, this.sessions = new Map, this.started = !1, this.shutdown = !1, this.serverAddressString = "null", this.channelzEnabled = !0, this.options = Z !== null && Z !== void 0 ? Z : {}, this.options["grpc.enable_channelz"] === 0) this.channelzEnabled = !1, this.channelzTrace = new bF.ChannelzTraceStub, this.callTracker = new bF.ChannelzCallTrackerStub, this.listenerChildrenTracker = new bF.ChannelzChildrenTrackerStub, this.sessionChildrenTracker = new bF.ChannelzChildrenTrackerStub;
                else this.channelzTrace = new bF.ChannelzTrace, this.callTracker = new bF.ChannelzCallTracker, this.listenerChildrenTracker = new bF.ChannelzChildrenTracker, this.sessionChildrenTracker = new bF.ChannelzChildrenTracker;
                if (this.channelzRef = (0, bF.registerChannelzServer)("server", () => this.getChannelzInfo(), this.channelzEnabled), this.channelzTrace.addTrace("CT_INFO", "Server created"), this.maxConnectionAgeMs = (I = this.options["grpc.max_connection_age_ms"]) !== null && I !== void 0 ? I : JJA, this.maxConnectionAgeGraceMs = (Y = this.options["grpc.max_connection_age_grace_ms"]) !== null && Y !== void 0 ? Y : JJA, this.keepaliveTimeMs = (J = this.options["grpc.keepalive_time_ms"]) !== null && J !== void 0 ? J : $90, this.keepaliveTimeoutMs = (W = this.options["grpc.keepalive_timeout_ms"]) !== null && W !== void 0 ? W : TP5, this.sessionIdleTimeout = (X = this.options["grpc.max_connection_idle_ms"]) !== null && X !== void 0 ? X : X$2, this.commonServerOptions = {
                        maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER
                    }, "grpc-node.max_session_memory" in this.options) this.commonServerOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"];
                else this.commonServerOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER;
                if ("grpc.max_concurrent_streams" in this.options) this.commonServerOptions.settings = {
                    maxConcurrentStreams: this.options["grpc.max_concurrent_streams"]
                };
                this.interceptors = (F = this.options.interceptors) !== null && F !== void 0 ? F : [], this.trace("Server constructed")
            }
            getChannelzInfo() {
                return {
                    trace: this.channelzTrace,
                    callTracker: this.callTracker,
                    listenerChildren: this.listenerChildrenTracker.getChildLists(),
                    sessionChildren: this.sessionChildrenTracker.getChildLists()
                }
            }
            getChannelzSessionInfo(Z) {
                var I, Y, J;
                let W = this.sessions.get(Z),
                    X = Z.socket,
                    F = X.remoteAddress ? (0, pi.stringToSubchannelAddress)(X.remoteAddress, X.remotePort) : null,
                    V = X.localAddress ? (0, pi.stringToSubchannelAddress)(X.localAddress, X.localPort) : null,
                    K;
                if (Z.encrypted) {
                    let H = X,
                        C = H.getCipher(),
                        E = H.getCertificate(),
                        z = H.getPeerCertificate();
                    K = {
                        cipherSuiteStandardName: (I = C.standardName) !== null && I !== void 0 ? I : null,
                        cipherSuiteOtherName: C.standardName ? null : C.name,
                        localCertificate: E && "raw" in E ? E.raw : null,
                        remoteCertificate: z && "raw" in z ? z.raw : null
                    }
                } else K = null;
                return {
                    remoteAddress: F,
                    localAddress: V,
                    security: K,
                    remoteName: null,
                    streamsStarted: W.streamTracker.callsStarted,
                    streamsSucceeded: W.streamTracker.callsSucceeded,
                    streamsFailed: W.streamTracker.callsFailed,
                    messagesSent: W.messagesSent,
                    messagesReceived: W.messagesReceived,
                    keepAlivesSent: W.keepAlivesSent,
                    lastLocalStreamCreatedTimestamp: null,
                    lastRemoteStreamCreatedTimestamp: W.streamTracker.lastCallStartedTimestamp,
                    lastMessageSentTimestamp: W.lastMessageSentTimestamp,
                    lastMessageReceivedTimestamp: W.lastMessageReceivedTimestamp,
                    localFlowControlWindow: (Y = Z.state.localWindowSize) !== null && Y !== void 0 ? Y : null,
                    remoteFlowControlWindow: (J = Z.state.remoteWindowSize) !== null && J !== void 0 ? J : null
                }
            }
            trace(Z) {
                WJA.trace(yW.LogVerbosity.DEBUG, PP5, "(" + this.channelzRef.id + ") " + Z)
            }
            keepaliveTrace(Z) {
                WJA.trace(yW.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + Z)
            }
            addProtoService() {
                throw Error("Not implemented. Use addService() instead")
            }
            addService(Z, I) {
                if (Z === null || typeof Z !== "object" || I === null || typeof I !== "object") throw Error("addService() requires two objects as arguments");
                let Y = Object.keys(Z);
                if (Y.length === 0) throw Error("Cannot add an empty service to a server");
                Y.forEach((J) => {
                    let W = Z[J],
                        X;
                    if (W.requestStream)
                        if (W.responseStream) X = "bidi";
                        else X = "clientStream";
                    else if (W.responseStream) X = "serverStream";
                    else X = "unary";
                    let F = I[J],
                        V;
                    if (F === void 0 && typeof W.originalName === "string") F = I[W.originalName];
                    if (F !== void 0) V = F.bind(I);
                    else V = _P5(X, J);
                    if (this.register(W.path, V, W.responseSerialize, W.requestDeserialize, X) === !1) throw Error(`Method handler for ${W.path} already provided.`)
                })
            }
            removeService(Z) {
                if (Z === null || typeof Z !== "object") throw Error("removeService() requires object as argument");
                Object.keys(Z).forEach((Y) => {
                    let J = Z[Y];
                    this.unregister(J.path)
                })
            }
            bind(Z, I) {
                throw Error("Not implemented. Use bindAsync() instead")
            }
            experimentalRegisterListenerToChannelz(Z) {
                return (0, bF.registerChannelzSocket)((0, pi.subchannelAddressToString)(Z), () => {
                    return {
                        localAddress: Z,
                        remoteAddress: null,
                        security: null,
                        remoteName: null,
                        streamsStarted: 0,
                        streamsSucceeded: 0,
                        streamsFailed: 0,
                        messagesSent: 0,
                        messagesReceived: 0,
                        keepAlivesSent: 0,
                        lastLocalStreamCreatedTimestamp: null,
                        lastRemoteStreamCreatedTimestamp: null,
                        lastMessageSentTimestamp: null,
                        lastMessageReceivedTimestamp: null,
                        localFlowControlWindow: null,
                        remoteFlowControlWindow: null
                    }
                }, this.channelzEnabled)
            }
            experimentalUnregisterListenerFromChannelz(Z) {
                (0, bF.unregisterChannelzRef)(Z)
            }
            createHttp2Server(Z) {
                let I;
                if (Z._isSecure()) {
                    let Y = Z._getConstructorOptions(),
                        J = Z._getSecureContextOptions(),
                        W = Object.assign(Object.assign(Object.assign(Object.assign({}, this.commonServerOptions), Y), J), {
                            enableTrace: this.options["grpc-node.tls_enable_trace"] === 1
                        }),
                        X = J !== null;
                    this.trace("Initial credentials valid: " + X), I = tU.createSecureServer(W), I.prependListener("connection", (V) => {
                        if (!X) this.trace("Dropped connection from " + JSON.stringify(V.address()) + " due to unloaded credentials"), V.destroy()
                    }), I.on("secureConnection", (V) => {
                        V.on("error", (K) => {
                            this.trace("An incoming TLS connection closed with error: " + K.message)
                        })
                    });
                    let F = (V) => {
                        if (V) {
                            let K = I;
                            try {
                                K.setSecureContext(V)
                            } catch (D) {
                                WJA.log(yW.LogVerbosity.ERROR, "Failed to set secure context with error " + D.message), V = null
                            }
                        }
                        X = V !== null, this.trace("Post-update credentials valid: " + X)
                    };
                    Z._addWatcher(F), I.on("close", () => {
                        Z._removeWatcher(F)
                    })
                } else I = tU.createServer(this.commonServerOptions);
                return I.setTimeout(0, jP5), this._setupHandlers(I, Z._getInterceptors()), I
            }
            bindOneAddress(Z, I) {
                this.trace("Attempting to bind " + (0, pi.subchannelAddressToString)(Z));
                let Y = this.createHttp2Server(I.credentials);
                return new Promise((J, W) => {
                    let X = (F) => {
                        this.trace("Failed to bind " + (0, pi.subchannelAddressToString)(Z) + " with error " + F.message), J({
                            port: "port" in Z ? Z.port : 1,
                            error: F.message
                        })
                    };
                    Y.once("error", X), Y.listen(Z, () => {
                        let F = Y.address(),
                            V;
                        if (typeof F === "string") V = {
                            path: F
                        };
                        else V = {
                            host: F.address,
                            port: F.port
                        };
                        let K = this.experimentalRegisterListenerToChannelz(V);
                        this.listenerChildrenTracker.refChild(K), this.http2Servers.set(Y, {
                            channelzRef: K,
                            sessions: new Set,
                            ownsChannelzRef: !0
                        }), I.listeningServers.add(Y), this.trace("Successfully bound " + (0, pi.subchannelAddressToString)(V)), J({
                            port: "port" in V ? V.port : 1
                        }), Y.removeListener("error", X)
                    })
                })
            }
            async bindManyPorts(Z, I) {
                if (Z.length === 0) return {
                    count: 0,
                    port: 0,
                    errors: []
                };