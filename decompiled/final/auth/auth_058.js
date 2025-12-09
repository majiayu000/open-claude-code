/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_058.js
 * 处理时间: 2025-12-09T03:41:37.017Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       ( 11x) require(name) - Node require
 * R5       (  2x) EDIT_TOOL = "Edit"
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 58/61
 * Lines: 315452 - 316937 (1486 lines)
 * Original file: cli.js
 */

    function gE2() {
        return {
            GetChannel: iM5,
            GetTopChannels: nM5,
            GetServer: aM5,
            GetServers: sM5,
            GetSubchannel: rM5,
            GetSocket: oM5,
            GetServerSockets: tM5
        }
    }
    var _41 = null;

    function uE2() {
        if (_41) return _41;
        let A = S20().loadSync,
            Q = A("channelz.proto", {
                keepCase: !0,
                longs: String,
                enums: String,
                defaults: !0,
                oneofs: !0,
                includeDirs: [`${__dirname}/../../proto`]
            });
        return _41 = (0, uM5.loadPackageDefinition)(Q).grpc.channelz.v1.Channelz.service, _41
    }

    function eM5() {
        (0, gM5.registerAdminService)(uE2, gE2)
    }
});
var v41 = U((cE2) => {
    Object.defineProperty(cE2, "__esModule", {
        value: !0
    });
    cE2.getNextCallNumber = HO5;
    var DO5 = 0;

    function HO5() {
        return DO5++
    }
});
var b20 = U((lE2) => {
    Object.defineProperty(lE2, "__esModule", {
        value: !0
    });
    lE2.CompressionAlgorithms = void 0;
    var pE2;
    (function(A) {
        A[A.identity = 0] = "identity", A[A.deflate = 1] = "deflate", A[A.gzip = 2] = "gzip"
    })(pE2 || (lE2.CompressionAlgorithms = pE2 = {}))
});
var f20 = U((aE2) => {
    Object.defineProperty(aE2, "__esModule", {
        value: !0
    });
    aE2.BaseFilter = void 0;
    class nE2 {
        async sendMetadata(A) {
            return A
        }
        receiveMetadata(A) {
            return A
        }
        async sendMessage(A) {
            return A
        }
        async receiveMessage(A) {
            return A
        }
        receiveTrailers(A) {
            return A
        }
    }
    aE2.BaseFilter = nE2
});
var g20 = U((Bz2) => {
    Object.defineProperty(Bz2, "__esModule", {
        value: !0
    });
    Bz2.CompressionFilterFactory = Bz2.CompressionFilter = void 0;
    var b41 = UA("zlib"),
        oE2 = b20(),
        tYA = K6(),
        EO5 = f20(),
        zO5 = XZ(),
        UO5 = (A) => {
            return typeof A === "number" && typeof oE2.CompressionAlgorithms[A] === "string"
        };
    class wOA {
        async writeMessage(A, Q) {
            let B = A;
            if (Q) B = await this.compressMessage(B);
            let G = Buffer.allocUnsafe(B.length + 5);
            return G.writeUInt8(Q ? 1 : 0, 0), G.writeUInt32BE(B.length, 1), B.copy(G, 5), G
        }
        async readMessage(A) {
            let Q = A.readUInt8(0) === 1,
                B = A.slice(5);
            if (Q) B = await this.decompressMessage(B);
            return B
        }
    }
    class eYA extends wOA {
        async compressMessage(A) {
            return A
        }
        async writeMessage(A, Q) {
            let B = Buffer.allocUnsafe(A.length + 5);
            return B.writeUInt8(0, 0), B.writeUInt32BE(A.length, 1), A.copy(B, 5), B
        }
        decompressMessage(A) {
            return Promise.reject(Error('Received compressed message but "grpc-encoding" header was identity'))
        }
    }
    class tE2 extends wOA {
        constructor(A) {
            super();
            this.maxRecvMessageLength = A
        }
        compressMessage(A) {
            return new Promise((Q, B) => {
                b41.deflate(A, (G, Z) => {
                    if (G) B(G);
                    else Q(Z)
                })
            })
        }
        decompressMessage(A) {
            return new Promise((Q, B) => {
                let G = 0,
                    Z = [],
                    I = b41.createInflate();
                I.on("data", (Y) => {
                    if (Z.push(Y), G += Y.byteLength, this.maxRecvMessageLength !== -1 && G > this.maxRecvMessageLength) I.destroy(), B({
                        code: tYA.Status.RESOURCE_EXHAUSTED,
                        details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
                    })
                }), I.on("end", () => {
                    Q(Buffer.concat(Z))
                }), I.write(A), I.end()
            })
        }
    }
    class eE2 extends wOA {
        constructor(A) {
            super();
            this.maxRecvMessageLength = A
        }
        compressMessage(A) {
            return new Promise((Q, B) => {
                b41.gzip(A, (G, Z) => {
                    if (G) B(G);
                    else Q(Z)
                })
            })
        }
        decompressMessage(A) {
            return new Promise((Q, B) => {
                let G = 0,
                    Z = [],
                    I = b41.createGunzip();
                I.on("data", (Y) => {
                    if (Z.push(Y), G += Y.byteLength, this.maxRecvMessageLength !== -1 && G > this.maxRecvMessageLength) I.destroy(), B({
                        code: tYA.Status.RESOURCE_EXHAUSTED,
                        details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
                    })
                }), I.on("end", () => {
                    Q(Buffer.concat(Z))
                }), I.write(A), I.end()
            })
        }
    }
    class Az2 extends wOA {
        constructor(A) {
            super();
            this.compressionName = A
        }
        compressMessage(A) {
            return Promise.reject(Error(`Received message compressed with unsupported compression method ${this.compressionName}`))
        }
        decompressMessage(A) {
            return Promise.reject(Error(`Compression method not supported: ${this.compressionName}`))
        }
    }

    function rE2(A, Q) {
        switch (A) {
            case "identity":
                return new eYA;
            case "deflate":
                return new tE2(Q);
            case "gzip":
                return new eE2(Q);
            default:
                return new Az2(A)
        }
    }
    class h20 extends EO5.BaseFilter {
        constructor(A, Q) {
            var B, G, Z;
            super();
            this.sharedFilterConfig = Q, this.sendCompression = new eYA, this.receiveCompression = new eYA, this.currentCompressionAlgorithm = "identity";
            let I = A["grpc.default_compression_algorithm"];
            if (this.maxReceiveMessageLength = (B = A["grpc.max_receive_message_length"]) !== null && B !== void 0 ? B : tYA.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH, this.maxSendMessageLength = (G = A["grpc.max_send_message_length"]) !== null && G !== void 0 ? G : tYA.DEFAULT_MAX_SEND_MESSAGE_LENGTH, I !== void 0)
                if (UO5(I)) {
                    let Y = oE2.CompressionAlgorithms[I],
                        J = (Z = Q.serverSupportedEncodingHeader) === null || Z === void 0 ? void 0 : Z.split(",");
                    if (!J || J.includes(Y)) this.currentCompressionAlgorithm = Y, this.sendCompression = rE2(this.currentCompressionAlgorithm, -1)
                } else zO5.log(tYA.LogVerbosity.ERROR, `Invalid value provided for grpc.default_compression_algorithm option: ${I}`)
        }
        async sendMetadata(A) {
            let Q = await A;
            if (Q.set("grpc-accept-encoding", "identity,deflate,gzip"), Q.set("accept-encoding", "identity"), this.currentCompressionAlgorithm === "identity") Q.remove("grpc-encoding");
            else Q.set("grpc-encoding", this.currentCompressionAlgorithm);
            return Q
        }
        receiveMetadata(A) {
            let Q = A.get("grpc-encoding");
            if (Q.length > 0) {
                let G = Q[0];
                if (typeof G === "string") this.receiveCompression = rE2(G, this.maxReceiveMessageLength)
            }
            A.remove("grpc-encoding");
            let B = A.get("grpc-accept-encoding")[0];
            if (B) {
                if (this.sharedFilterConfig.serverSupportedEncodingHeader = B, !B.split(",").includes(this.currentCompressionAlgorithm)) this.sendCompression = new eYA, this.currentCompressionAlgorithm = "identity"
            }
            return A.remove("grpc-accept-encoding"), A
        }
        async sendMessage(A) {
            var Q;
            let B = await A;
            if (this.maxSendMessageLength !== -1 && B.message.length > this.maxSendMessageLength) throw {
                code: tYA.Status.RESOURCE_EXHAUSTED,
                details: `Attempted to send message with a size larger than ${this.maxSendMessageLength}`
            };
            let G;
            if (this.sendCompression instanceof eYA) G = !1;
            else G = (((Q = B.flags) !== null && Q !== void 0 ? Q : 0) & 2) === 0;
            return {
                message: await this.sendCompression.writeMessage(B.message, G),
                flags: B.flags
            }
        }
        async receiveMessage(A) {
            return this.receiveCompression.readMessage(await A)
        }
    }
    Bz2.CompressionFilter = h20;
    class Qz2 {
        constructor(A, Q) {
            this.options = Q, this.sharedFilterConfig = {}
        }
        createFilter() {
            return new h20(this.options, this.sharedFilterConfig)
        }
    }
    Bz2.CompressionFilterFactory = Qz2
});
var qOA = U((Zz2) => {
    Object.defineProperty(Zz2, "__esModule", {
        value: !0
    });
    Zz2.restrictControlPlaneStatusCode = qO5;
    var ek = K6(),
        wO5 = [ek.Status.OK, ek.Status.INVALID_ARGUMENT, ek.Status.NOT_FOUND, ek.Status.ALREADY_EXISTS, ek.Status.FAILED_PRECONDITION, ek.Status.ABORTED, ek.Status.OUT_OF_RANGE, ek.Status.DATA_LOSS];

    function qO5(A, Q) {
        if (wO5.includes(A)) return {
            code: ek.Status.INTERNAL,
            details: `Invalid status from control plane: ${A} ${ek.Status[A]} ${Q}`
        };
        else return {
            code: A,
            details: Q
        }
    }
});
var AJA = U((Iz2) => {
    Object.defineProperty(Iz2, "__esModule", {
        value: !0
    });
    Iz2.minDeadline = LO5;
    Iz2.getDeadlineTimeoutString = OO5;
    Iz2.getRelativeTimeout = TO5;
    Iz2.deadlineToString = PO5;
    Iz2.formatDateDifference = jO5;

    function LO5(...A) {
        let Q = 1 / 0;
        for (let B of A) {
            let G = B instanceof Date ? B.getTime() : B;
            if (G < Q) Q = G
        }
        return Q
    }
    var MO5 = [
        ["m", 1],
        ["S", 1000],
        ["M", 60000],
        ["H", 3600000]
    ];

    function OO5(A) {
        let Q = new Date().getTime();
        if (A instanceof Date) A = A.getTime();
        let B = Math.max(A - Q, 0);
        for (let [G, Z] of MO5) {
            let I = B / Z;
            if (I < 1e8) return String(Math.ceil(I)) + G
        }
        throw Error("Deadline is too far in the future")
    }
    var RO5 = 2147483647;

    function TO5(A) {
        let Q = A instanceof Date ? A.getTime() : A,
            B = new Date().getTime(),
            G = Q - B;
        if (G < 0) return 0;
        else if (G > RO5) return 1 / 0;
        else return G
    }

    function PO5(A) {
        if (A instanceof Date) return A.toISOString();
        else {
            let Q = new Date(A);
            if (Number.isNaN(Q.getTime())) return "" + A;
            else return Q.toISOString()
        }
    }

    function jO5(A, Q) {
        return ((Q.getTime() - A.getTime()) / 1000).toFixed(3) + "s"
    }
});
var f41 = U((Yz2) => {
    Object.defineProperty(Yz2, "__esModule", {
        value: !0
    });
    Yz2.FilterStackFactory = Yz2.FilterStack = void 0;
    class u20 {
        constructor(A) {
            this.filters = A
        }
        sendMetadata(A) {
            let Q = A;
            for (let B = 0; B < this.filters.length; B++) Q = this.filters[B].sendMetadata(Q);
            return Q
        }
        receiveMetadata(A) {
            let Q = A;
            for (let B = this.filters.length - 1; B >= 0; B--) Q = this.filters[B].receiveMetadata(Q);
            return Q
        }
        sendMessage(A) {
            let Q = A;
            for (let B = 0; B < this.filters.length; B++) Q = this.filters[B].sendMessage(Q);
            return Q
        }
        receiveMessage(A) {
            let Q = A;
            for (let B = this.filters.length - 1; B >= 0; B--) Q = this.filters[B].receiveMessage(Q);
            return Q
        }
        receiveTrailers(A) {
            let Q = A;
            for (let B = this.filters.length - 1; B >= 0; B--) Q = this.filters[B].receiveTrailers(Q);
            return Q
        }
        push(A) {
            this.filters.unshift(...A)
        }
        getFilters() {
            return this.filters
        }
    }
    Yz2.FilterStack = u20;
    class m20 {
        constructor(A) {
            this.factories = A
        }
        push(A) {
            this.factories.unshift(...A)
        }
        clone() {
            return new m20([...this.factories])
        }
        createFilter() {
            return new u20(this.factories.map((A) => A.createFilter()))
        }
    }
    Yz2.FilterStackFactory = m20
});
var Kz2 = U((Fz2) => {
    Object.defineProperty(Fz2, "__esModule", {
        value: !0
    });
    Fz2.SingleSubchannelChannel = void 0;
    var bO5 = v41(),
        NOA = mi(),
        fO5 = g20(),
        hO5 = dE(),
        LOA = K6(),
        gO5 = qOA(),
        uO5 = AJA(),
        mO5 = f41(),
        d20 = BK(),
        dO5 = JP(),
        h41 = mE();
    class Wz2 {
        constructor(A, Q, B, G, Z) {
            var I, Y;
            this.subchannel = A, this.method = Q, this.options = G, this.callNumber = Z, this.childCall = null, this.pendingMessage = null, this.readPending = !1, this.halfClosePending = !1, this.pendingStatus = null, this.readFilterPending = !1, this.writeFilterPending = !1;
            let J = this.method.split("/"),
                W = "";
            if (J.length >= 2) W = J[1];
            let X = (Y = (I = (0, h41.splitHostPort)(this.options.host)) === null || I === void 0 ? void 0 : I.host) !== null && Y !== void 0 ? Y : "localhost";
            this.serviceUrl = `https://${X}/${W}`;
            let F = (0, uO5.getRelativeTimeout)(G.deadline);
            if (F !== 1 / 0)
                if (F <= 0) this.cancelWithStatus(LOA.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
                else setTimeout(() => {
                    this.cancelWithStatus(LOA.Status.DEADLINE_EXCEEDED, "Deadline exceeded")
                }, F);
            this.filterStack = B.createFilter()
        }
        cancelWithStatus(A, Q) {
            if (this.childCall) this.childCall.cancelWithStatus(A, Q);
            else this.pendingStatus = {
                code: A,
                details: Q,
                metadata: new d20.Metadata
            }
        }
        getPeer() {
            var A, Q;
            return (Q = (A = this.childCall) === null || A === void 0 ? void 0 : A.getPeer()) !== null && Q !== void 0 ? Q : this.subchannel.getAddress()
        }
        async start(A, Q) {
            if (this.pendingStatus) {
                Q.onReceiveStatus(this.pendingStatus);
                return
            }
            if (this.subchannel.getConnectivityState() !== hO5.ConnectivityState.READY) {
                Q.onReceiveStatus({
                    code: LOA.Status.UNAVAILABLE,
                    details: "Subchannel not ready",
                    metadata: new d20.Metadata
                });
                return
            }
            let B = await this.filterStack.sendMetadata(Promise.resolve(A)),
                G;
            try {
                G = await this.subchannel.getCallCredentials().generateMetadata({
                    method_name: this.method,
                    service_url: this.serviceUrl
                })
            } catch (I) {
                let Y = I,
                    {
                        code: J,
                        details: W
                    } = (0, gO5.restrictControlPlaneStatusCode)(typeof Y.code === "number" ? Y.code : LOA.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${Y.message}`);
                Q.onReceiveStatus({
                    code: J,
                    details: W,
                    metadata: new d20.Metadata
                });
                return
            }
            G.merge(B);
            let Z = {
                onReceiveMetadata: async (I) => {
                    Q.onReceiveMetadata(await this.filterStack.receiveMetadata(I))
                },
                onReceiveMessage: async (I) => {
                    this.readFilterPending = !0;
                    let Y = await this.filterStack.receiveMessage(I);
                    if (this.readFilterPending = !1, Q.onReceiveMessage(Y), this.pendingStatus) Q.onReceiveStatus(this.pendingStatus)
                },
                onReceiveStatus: async (I) => {
                    let Y = await this.filterStack.receiveTrailers(I);
                    if (this.readFilterPending) this.pendingStatus = Y;
                    else Q.onReceiveStatus(Y)
                }
            };
            if (this.childCall = this.subchannel.createCall(G, this.options.host, this.method, Z), this.readPending) this.childCall.startRead();
            if (this.pendingMessage) this.childCall.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
            if (this.halfClosePending && !this.writeFilterPending) this.childCall.halfClose()
        }
        async sendMessageWithContext(A, Q) {
            this.writeFilterPending = !0;
            let B = await this.filterStack.sendMessage(Promise.resolve({
                message: Q,
                flags: A.flags
            }));
            if (this.writeFilterPending = !1, this.childCall) {
                if (this.childCall.sendMessageWithContext(A, B.message), this.halfClosePending) this.childCall.halfClose()
            } else this.pendingMessage = {
                context: A,
                message: B.message
            }
        }
        startRead() {
            if (this.childCall) this.childCall.startRead();
            else this.readPending = !0
        }
        halfClose() {
            if (this.childCall && !this.writeFilterPending) this.childCall.halfClose();
            else this.halfClosePending = !0
        }
        getCallNumber() {
            return this.callNumber
        }
        setCredentials(A) {
            throw Error("Method not implemented.")
        }
        getAuthContext() {
            if (this.childCall) return this.childCall.getAuthContext();
            else return null
        }
    }
    class Xz2 {
        constructor(A, Q, B) {
            if (this.subchannel = A, this.target = Q, this.channelzEnabled = !1, this.channelzTrace = new NOA.ChannelzTrace, this.callTracker = new NOA.ChannelzCallTracker, this.childrenTracker = new NOA.ChannelzChildrenTracker, this.channelzEnabled = B["grpc.enable_channelz"] !== 0, this.channelzRef = (0, NOA.registerChannelzChannel)((0, h41.uriToString)(Q), () => ({
                    target: `${(0,h41.uriToString)(Q)} (${A.getAddress()})`,
                    state: this.subchannel.getConnectivityState(),
                    trace: this.channelzTrace,
                    callTracker: this.callTracker,
                    children: this.childrenTracker.getChildLists()
                }), this.channelzEnabled), this.channelzEnabled) this.childrenTracker.refChild(A.getChannelzRef());
            this.filterStackFactory = new mO5.FilterStackFactory([new fO5.CompressionFilterFactory(this, B)])
        }
        close() {
            if (this.channelzEnabled) this.childrenTracker.unrefChild(this.subchannel.getChannelzRef());
            (0, NOA.unregisterChannelzRef)(this.channelzRef)
        }
        getTarget() {
            return (0, h41.uriToString)(this.target)
        }
        getConnectivityState(A) {
            throw Error("Method not implemented.")
        }
        watchConnectivityState(A, Q, B) {
            throw Error("Method not implemented.")
        }
        getChannelzRef() {
            return this.channelzRef
        }
        createCall(A, Q) {
            let B = {
                deadline: Q,
                host: (0, dO5.getDefaultAuthority)(this.target),
                flags: LOA.Propagate.DEFAULTS,
                parentCall: null
            };
            return new Wz2(this.subchannel, A, this.filterStackFactory, B, (0, bO5.getNextCallNumber)())
        }
    }
    Fz2.SingleSubchannelChannel = Xz2
});
var Ez2 = U((Hz2) => {
    Object.defineProperty(Hz2, "__esModule", {
        value: !0
    });
    Hz2.Subchannel = void 0;
    var yG = dE(),
        cO5 = uYA(),
        c20 = XZ(),
        g41 = K6(),
        pO5 = mE(),
        lO5 = rU(),
        Ay = mi(),
        iO5 = Kz2(),
        nO5 = "subchannel",
        aO5 = 2147483647;
    class Dz2 {
        constructor(A, Q, B, G, Z) {
            var I;
            this.channelTarget = A, this.subchannelAddress = Q, this.options = B, this.connector = Z, this.connectivityState = yG.ConnectivityState.IDLE, this.transport = null, this.continueConnecting = !1, this.stateListeners = new Set, this.refcount = 0, this.channelzEnabled = !0, this.dataProducers = new Map, this.subchannelChannel = null;
            let Y = {
                initialDelay: B["grpc.initial_reconnect_backoff_ms"],
                maxDelay: B["grpc.max_reconnect_backoff_ms"]
            };
            if (this.backoffTimeout = new cO5.BackoffTimeout(() => {
                    this.handleBackoffTimer()
                }, Y), this.backoffTimeout.unref(), this.subchannelAddressString = (0, lO5.subchannelAddressToString)(Q), this.keepaliveTime = (I = B["grpc.keepalive_time_ms"]) !== null && I !== void 0 ? I : -1, B["grpc.enable_channelz"] === 0) this.channelzEnabled = !1, this.channelzTrace = new Ay.ChannelzTraceStub, this.callTracker = new Ay.ChannelzCallTrackerStub, this.childrenTracker = new Ay.ChannelzChildrenTrackerStub, this.streamTracker = new Ay.ChannelzCallTrackerStub;
            else this.channelzTrace = new Ay.ChannelzTrace, this.callTracker = new Ay.ChannelzCallTracker, this.childrenTracker = new Ay.ChannelzChildrenTracker, this.streamTracker = new Ay.ChannelzCallTracker;
            this.channelzRef = (0, Ay.registerChannelzSubchannel)(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled), this.channelzTrace.addTrace("CT_INFO", "Subchannel created"), this.trace("Subchannel constructed with options " + JSON.stringify(B, void 0, 2)), this.secureConnector = G._createSecureConnector(A, B)
        }
        getChannelzInfo() {
            return {
                state: this.connectivityState,
                trace: this.channelzTrace,
                callTracker: this.callTracker,
                children: this.childrenTracker.getChildLists(),
                target: this.subchannelAddressString
            }
        }
        trace(A) {
            c20.trace(g41.LogVerbosity.DEBUG, nO5, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A)
        }
        refTrace(A) {
            c20.trace(g41.LogVerbosity.DEBUG, "subchannel_refcount", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A)
        }
        handleBackoffTimer() {
            if (this.continueConnecting) this.transitionToState([yG.ConnectivityState.TRANSIENT_FAILURE], yG.ConnectivityState.CONNECTING);
            else this.transitionToState([yG.ConnectivityState.TRANSIENT_FAILURE], yG.ConnectivityState.IDLE)
        }
        startBackoff() {
            this.backoffTimeout.runOnce()
        }
        stopBackoff() {
            this.backoffTimeout.stop(), this.backoffTimeout.reset()
        }
        startConnectingInternal() {
            let A = this.options;
            if (A["grpc.keepalive_time_ms"]) {
                let Q = Math.min(this.keepaliveTime, aO5);
                A = Object.assign(Object.assign({}, A), {
                    "grpc.keepalive_time_ms": Q
                })
            }
            this.connector.connect(this.subchannelAddress, this.secureConnector, A).then((Q) => {
                if (this.transitionToState([yG.ConnectivityState.CONNECTING], yG.ConnectivityState.READY)) {
                    if (this.transport = Q, this.channelzEnabled) this.childrenTracker.refChild(Q.getChannelzRef());
                    Q.addDisconnectListener((B) => {
                        if (this.transitionToState([yG.ConnectivityState.READY], yG.ConnectivityState.IDLE), B && this.keepaliveTime > 0) this.keepaliveTime *= 2, c20.log(g41.LogVerbosity.ERROR, `Connection to ${(0,pO5.uriToString)(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTime} ms`)
                    })
                } else Q.shutdown()
            }, (Q) => {
                this.transitionToState([yG.ConnectivityState.CONNECTING], yG.ConnectivityState.TRANSIENT_FAILURE, `${Q}`)
            })
        }
        transitionToState(A, Q, B) {
            var G, Z;
            if (A.indexOf(this.connectivityState) === -1) return !1;
            if (B) this.trace(yG.ConnectivityState[this.connectivityState] + " -> " + yG.ConnectivityState[Q] + ' with error "' + B + '"');
            else this.trace(yG.ConnectivityState[this.connectivityState] + " -> " + yG.ConnectivityState[Q]);
            if (this.channelzEnabled) this.channelzTrace.addTrace("CT_INFO", "Connectivity state change to " + yG.ConnectivityState[Q]);
            let I = this.connectivityState;
            switch (this.connectivityState = Q, Q) {
                case yG.ConnectivityState.READY:
                    this.stopBackoff();
                    break;
                case yG.ConnectivityState.CONNECTING:
                    this.startBackoff(), this.startConnectingInternal(), this.continueConnecting = !1;
                    break;
                case yG.ConnectivityState.TRANSIENT_FAILURE:
                    if (this.channelzEnabled && this.transport) this.childrenTracker.unrefChild(this.transport.getChannelzRef());
                    if ((G = this.transport) === null || G === void 0 || G.shutdown(), this.transport = null, !this.backoffTimeout.isRunning()) process.nextTick(() => {
                        this.handleBackoffTimer()
                    });
                    break;
                case yG.ConnectivityState.IDLE:
                    if (this.channelzEnabled && this.transport) this.childrenTracker.unrefChild(this.transport.getChannelzRef());
                    (Z = this.transport) === null || Z === void 0 || Z.shutdown(), this.transport = null;
                    break;
                default:
                    throw Error(`Invalid state: unknown ConnectivityState ${Q}`)
            }
            for (let Y of this.stateListeners) Y(this, I, Q, this.keepaliveTime, B);
            return !0
        }
        ref() {
            this.refTrace("refcount " + this.refcount + " -> " + (this.refcount + 1)), this.refcount += 1
        }
        unref() {
            if (this.refTrace("refcount " + this.refcount + " -> " + (this.refcount - 1)), this.refcount -= 1, this.refcount === 0) this.channelzTrace.addTrace("CT_INFO", "Shutting down"), (0, Ay.unregisterChannelzRef)(this.channelzRef), this.secureConnector.destroy(), process.nextTick(() => {
                this.transitionToState([yG.ConnectivityState.CONNECTING, yG.ConnectivityState.READY], yG.ConnectivityState.IDLE)
            })
        }
        unrefIfOneRef() {
            if (this.refcount === 1) return this.unref(), !0;
            return !1
        }
        createCall(A, Q, B, G) {
            if (!this.transport) throw Error("Cannot create call, subchannel not READY");
            let Z;
            if (this.channelzEnabled) this.callTracker.addCallStarted(), this.streamTracker.addCallStarted(), Z = {
                onCallEnd: (I) => {
                    if (I.code === g41.Status.OK) this.callTracker.addCallSucceeded();
                    else this.callTracker.addCallFailed()
                }
            };
            else Z = {};
            return this.transport.createCall(A, Q, B, G, Z)
        }
        startConnecting() {
            process.nextTick(() => {
                if (!this.transitionToState([yG.ConnectivityState.IDLE], yG.ConnectivityState.CONNECTING)) {
                    if (this.connectivityState === yG.ConnectivityState.TRANSIENT_FAILURE) this.continueConnecting = !0
                }
            })
        }
        getConnectivityState() {
            return this.connectivityState
        }
        addConnectivityStateListener(A) {
            this.stateListeners.add(A)
        }
        removeConnectivityStateListener(A) {
            this.stateListeners.delete(A)
        }
        resetBackoff() {
            process.nextTick(() => {
                this.backoffTimeout.reset(), this.transitionToState([yG.ConnectivityState.TRANSIENT_FAILURE], yG.ConnectivityState.CONNECTING)
            })
        }
        getAddress() {
            return this.subchannelAddressString
        }
        getChannelzRef() {
            return this.channelzRef
        }
        isHealthy() {
            return !0
        }
        addHealthStateWatcher(A) {}
        removeHealthStateWatcher(A) {}
        getRealSubchannel() {
            return this
        }
        realSubchannelEquals(A) {
            return A.getRealSubchannel() === this
        }
        throttleKeepalive(A) {
            if (A > this.keepaliveTime) this.keepaliveTime = A
        }
        getCallCredentials() {
            return this.secureConnector.getCallCredentials()
        }
        getChannel() {
            if (!this.subchannelChannel) this.subchannelChannel = new iO5.SingleSubchannelChannel(this, this.channelTarget, this.options);
            return this.subchannelChannel
        }
        addDataWatcher(A) {
            throw Error("Not implemented")
        }
        getOrCreateDataProducer(A, Q) {
            let B = this.dataProducers.get(A);
            if (B) return B;
            let G = Q(this);
            return this.dataProducers.set(A, G), G
        }
        removeDataProducer(A) {
            this.dataProducers.delete(A)
        }
    }
    Hz2.Subchannel = Dz2
});
var $z2 = U((zz2) => {
    var p20;
    Object.defineProperty(zz2, "__esModule", {
        value: !0
    });
    zz2.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = void 0;
    zz2.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = ((p20 = process.env.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) !== null && p20 !== void 0 ? p20 : "false") === "true"
});
var n20 = U((Mz2) => {
    Object.defineProperty(Mz2, "__esModule", {
        value: !0
    });
    Mz2.DEFAULT_PORT = void 0;
    Mz2.setup = BR5;
    var wz2 = JP(),
        l20 = UA("dns"),
        sO5 = jB0(),
        i20 = K6(),
        QJA = u1A(),
        rO5 = BK(),
        oO5 = XZ(),
        tO5 = K6(),
        di = mE(),
        qz2 = UA("net"),
        eO5 = uYA(),
        Nz2 = $z2(),
        AR5 = "dns_resolver";

    function Qy(A) {
        oO5.trace(tO5.LogVerbosity.DEBUG, AR5, A)
    }
    Mz2.DEFAULT_PORT = 443;
    var QR5 = 30000;
    class Lz2 {
        constructor(A, Q, B) {
            var G, Z, I;
            if (this.target = A, this.listener = Q, this.pendingLookupPromise = null, this.pendingTxtPromise = null, this.latestLookupResult = null, this.latestServiceConfigResult = null, this.continueResolving = !1, this.isNextResolutionTimerRunning = !1, this.isServiceConfigEnabled = !0, this.returnedIpResult = !1, this.alternativeResolver = new l20.promises.Resolver, Qy("Resolver constructed for target " + (0, di.uriToString)(A)), A.authority) this.alternativeResolver.setServers([A.authority]);
            let Y = (0, di.splitHostPort)(A.path);
            if (Y === null) this.ipResult = null, this.dnsHostname = null, this.port = null;
            else if ((0, qz2.isIPv4)(Y.host) || (0, qz2.isIPv6)(Y.host)) this.ipResult = [{
                addresses: [{
                    host: Y.host,
                    port: (G = Y.port) !== null && G !== void 0 ? G : Mz2.DEFAULT_PORT
                }]
            }], this.dnsHostname = null, this.port = null;
            else this.ipResult = null, this.dnsHostname = Y.host, this.port = (Z = Y.port) !== null && Z !== void 0 ? Z : Mz2.DEFAULT_PORT;
            if (this.percentage = Math.random() * 100, B["grpc.service_config_disable_resolution"] === 1) this.isServiceConfigEnabled = !1;
            this.defaultResolutionError = {
                code: i20.Status.UNAVAILABLE,
                details: `Name resolution failed for target ${(0,di.uriToString)(this.target)}`,
                metadata: new rO5.Metadata
            };
            let J = {
                initialDelay: B["grpc.initial_reconnect_backoff_ms"],
                maxDelay: B["grpc.max_reconnect_backoff_ms"]
            };
            this.backoff = new eO5.BackoffTimeout(() => {
                if (this.continueResolving) this.startResolutionWithBackoff()
            }, J), this.backoff.unref(), this.minTimeBetweenResolutionsMs = (I = B["grpc.dns_min_time_between_resolutions_ms"]) !== null && I !== void 0 ? I : QR5, this.nextResolutionTimer = setTimeout(() => {}, 0), clearTimeout(this.nextResolutionTimer)
        }
        startResolution() {
            if (this.ipResult !== null) {
                if (!this.returnedIpResult) Qy("Returning IP address for target " + (0, di.uriToString)(this.target)), setImmediate(() => {
                    this.listener((0, QJA.statusOrFromValue)(this.ipResult), {}, null, "")
                }), this.returnedIpResult = !0;
                this.backoff.stop(), this.backoff.reset(), this.stopNextResolutionTimer();
                return
            }
            if (this.dnsHostname === null) Qy("Failed to parse DNS address " + (0, di.uriToString)(this.target)), setImmediate(() => {
                this.listener((0, QJA.statusOrFromError)({
                    code: i20.Status.UNAVAILABLE,
                    details: `Failed to parse DNS address ${(0,di.uriToString)(this.target)}`
                }), {}, null, "")
            }), this.stopNextResolutionTimer();
            else {
                if (this.pendingLookupPromise !== null) return;
                Qy("Looking up DNS hostname " + this.dnsHostname), this.latestLookupResult = null;
                let A = this.dnsHostname;
                if (this.pendingLookupPromise = this.lookup(A), this.pendingLookupPromise.then((Q) => {
                        if (this.pendingLookupPromise === null) return;
                        this.pendingLookupPromise = null, this.latestLookupResult = (0, QJA.statusOrFromValue)(Q.map((Z) => ({
                            addresses: [Z]
                        })));
                        let B = "[" + Q.map((Z) => Z.host + ":" + Z.port).join(",") + "]";
                        Qy("Resolved addresses for target " + (0, di.uriToString)(this.target) + ": " + B);
                        let G = this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
                        this.handleHealthStatus(G)
                    }, (Q) => {
                        if (this.pendingLookupPromise === null) return;
                        Qy("Resolution error for target " + (0, di.uriToString)(this.target) + ": " + Q.message), this.pendingLookupPromise = null, this.stopNextResolutionTimer(), this.listener((0, QJA.statusOrFromError)(this.defaultResolutionError), {}, this.latestServiceConfigResult, "")
                    }), this.isServiceConfigEnabled && this.pendingTxtPromise === null) this.pendingTxtPromise = this.resolveTxt(A), this.pendingTxtPromise.then((Q) => {
                    if (this.pendingTxtPromise === null) return;
                    this.pendingTxtPromise = null;
                    let B;
                    try {
                        if (B = (0, sO5.extractAndSelectServiceConfig)(Q, this.percentage), B) this.latestServiceConfigResult = (0, QJA.statusOrFromValue)(B);
                        else this.latestServiceConfigResult = null
                    } catch (G) {
                        this.latestServiceConfigResult = (0, QJA.statusOrFromError)({
                            code: i20.Status.UNAVAILABLE,
                            details: `Parsing service config failed with error ${G.message}`
                        })
                    }
                    if (this.latestLookupResult !== null) this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "")
                }, (Q) => {})
            }
        }
        handleHealthStatus(A) {
            if (A) this.backoff.stop(), this.backoff.reset();
            else this.continueResolving = !0
        }
        async lookup(A) {
            if (Nz2.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
                Qy("Using alternative DNS resolver.");
                let B = await Promise.allSettled([this.alternativeResolver.resolve4(A), this.alternativeResolver.resolve6(A)]);
                if (B.every((G) => G.status === "rejected")) throw Error(B[0].reason);
                return B.reduce((G, Z) => {
                    return Z.status === "fulfilled" ? [...G, ...Z.value] : G
                }, []).map((G) => ({
                    host: G,
                    port: +this.port
                }))
            }
            return (await l20.promises.lookup(A, {
                all: !0
            })).map((B) => ({
                host: B.address,
                port: +this.port
            }))
        }
        async resolveTxt(A) {
            if (Nz2.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) return Qy("Using alternative DNS resolver."), this.alternativeResolver.resolveTxt(A);
            return l20.promises.resolveTxt(A)
        }
        startNextResolutionTimer() {
            var A, Q;
            clearTimeout(this.nextResolutionTimer), this.nextResolutionTimer = setTimeout(() => {
                if (this.stopNextResolutionTimer(), this.continueResolving) this.startResolutionWithBackoff()
            }, this.minTimeBetweenResolutionsMs), (Q = (A = this.nextResolutionTimer).unref) === null || Q === void 0 || Q.call(A), this.isNextResolutionTimerRunning = !0
        }
        stopNextResolutionTimer() {
            clearTimeout(this.nextResolutionTimer), this.isNextResolutionTimerRunning = !1
        }
        startResolutionWithBackoff() {
            if (this.pendingLookupPromise === null) this.continueResolving = !1, this.backoff.runOnce(), this.startNextResolutionTimer(), this.startResolution()
        }
        updateResolution() {
            if (this.pendingLookupPromise === null)
                if (this.isNextResolutionTimerRunning || this.backoff.isRunning()) {
                    if (this.isNextResolutionTimerRunning) Qy('resolution update delayed by "min time between resolutions" rate limit');
                    else Qy("resolution update delayed by backoff timer until " + this.backoff.getEndTime().toISOString());
                    this.continueResolving = !0
                } else this.startResolutionWithBackoff()
        }
        destroy() {
            this.continueResolving = !1, this.backoff.reset(), this.backoff.stop(), this.stopNextResolutionTimer(), this.pendingLookupPromise = null, this.pendingTxtPromise = null, this.latestLookupResult = null, this.latestServiceConfigResult = null, this.returnedIpResult = !1
        }
        static getDefaultAuthority(A) {
            return A.path
        }
    }

    function BR5() {
        (0, wz2.registerResolver)("dns", Lz2), (0, wz2.registerDefaultScheme)("dns")
    }
});
var a20 = U((jz2) => {
    Object.defineProperty(jz2, "__esModule", {
        value: !0
    });
    jz2.parseCIDR = Tz2;
    jz2.mapProxyName = DR5;
    jz2.getProxiedConnection = HR5;
    var MOA = XZ(),
        BJA = K6(),
        Rz2 = UA("net"),
        ZR5 = UA("http"),
        IR5 = XZ(),
        Oz2 = rU(),
        OOA = mE(),
        YR5 = UA("url"),
        JR5 = n20(),
        WR5 = "proxy";

    function GJA(A) {
        IR5.trace(BJA.LogVerbosity.DEBUG, WR5, A)
    }

    function XR5() {
        let A = "",
            Q = "";
        if (process.env.grpc_proxy) Q = "grpc_proxy", A = process.env.grpc_proxy;
        else if (process.env.https_proxy) Q = "https_proxy", A = process.env.https_proxy;
        else if (process.env.http_proxy) Q = "http_proxy", A = process.env.http_proxy;
        else return {};
        let B;
        try {
            B = new YR5.URL(A)
        } catch (J) {
            return (0, MOA.log)(BJA.LogVerbosity.ERROR, `cannot parse value of "${Q}" env var`), {}
        }
        if (B.protocol !== "http:") return (0, MOA.log)(BJA.LogVerbosity.ERROR, `"${B.protocol}" scheme not supported in proxy URI`), {};
        let G = null;
        if (B.username)
            if (B.password)(0, MOA.log)(BJA.LogVerbosity.INFO, "userinfo found in proxy URI"), G = decodeURIComponent(`${B.username}:${B.password}`);
            else G = B.username;
        let {
            hostname: Z,
            port: I
        } = B;
        if (I === "") I = "80";
        let Y = {
            address: `${Z}:${I}`
        };
        if (G) Y.creds = G;
        return GJA("Proxy server " + Y.address + " set by environment variable " + Q), Y
    }

    function FR5() {
        let A = process.env.no_grpc_proxy,
            Q = "no_grpc_proxy";
        if (!A) A = process.env.no_proxy, Q = "no_proxy";
        if (A) return GJA("No proxy server list set by environment variable " + Q), A.split(",");
        else return []
    }

    function Tz2(A) {
        let Q = A.split("/");
        if (Q.length !== 2) return null;
        let B = parseInt(Q[1], 10);
        if (!(0, Rz2.isIPv4)(Q[0]) || Number.isNaN(B) || B < 0 || B > 32) return null;
        return {
            ip: Pz2(Q[0]),
            prefixLength: B
        }
    }

    function Pz2(A) {
        return A.split(".").reduce((Q, B) => (Q << 8) + parseInt(B, 10), 0)
    }

    function VR5(A, Q) {
        let B = A.ip,
            G = -1 << 32 - A.prefixLength;
        return (Pz2(Q) & G) === (B & G)
    }

    function KR5(A) {
        for (let Q of FR5()) {
            let B = Tz2(Q);
            if ((0, Rz2.isIPv4)(A) && B && VR5(B, A)) return !0;
            else if (A.endsWith(Q)) return !0
        }
        return !1
    }

    function DR5(A, Q) {
        var B;
        let G = {
            target: A,
            extraOptions: {}
        };
        if (((B = Q["grpc.enable_http_proxy"]) !== null && B !== void 0 ? B : 1) === 0) return G;
        if (A.scheme === "unix") return G;
        let Z = XR5();
        if (!Z.address) return G;
        let I = (0, OOA.splitHostPort)(A.path);
        if (!I) return G;
        let Y = I.host;
        if (KR5(Y)) return GJA("Not using proxy for target in no_proxy list: " + (0, OOA.uriToString)(A)), G;
        let J = {
            "grpc.http_connect_target": (0, OOA.uriToString)(A)
        };
        if (Z.creds) J["grpc.http_connect_creds"] = Z.creds;
        return {
            target: {
                scheme: "dns",
                path: Z.address
            },
            extraOptions: J
        }
    }

    function HR5(A, Q) {
        var B;
        if (!("grpc.http_connect_target" in Q)) return Promise.resolve(null);
        let G = Q["grpc.http_connect_target"],
            Z = (0, OOA.parseUri)(G);
        if (Z === null) return Promise.resolve(null);
        let I = (0, OOA.splitHostPort)(Z.path);
        if (I === null) return Promise.resolve(null);
        let Y = `${I.host}:${(B=I.port)!==null&&B!==void 0?B:JR5.DEFAULT_PORT}`,
            J = {
                method: "CONNECT",
                path: Y
            },
            W = {
                Host: Y
            };
        if ((0, Oz2.isTcpSubchannelAddress)(A)) J.host = A.host, J.port = A.port;
        else J.socketPath = A.path;
        if ("grpc.http_connect_creds" in Q) W["Proxy-Authorization"] = "Basic " + Buffer.from(Q["grpc.http_connect_creds"]).toString("base64");
        J.headers = W;
        let X = (0, Oz2.subchannelAddressToString)(A);
        return GJA("Using proxy " + X + " to connect to " + J.path), new Promise((F, V) => {
            let K = ZR5.request(J);
            K.once("connect", (D, H, C) => {
                if (K.removeAllListeners(), H.removeAllListeners(), D.statusCode === 200) {
                    if (GJA("Successfully connected to " + J.path + " through proxy " + X), C.length > 0) H.unshift(C);
                    GJA("Successfully established a plaintext connection to " + J.path + " through proxy " + X), F(H)
                } else(0, MOA.log)(BJA.LogVerbosity.ERROR, "Failed to connect to " + J.path + " through proxy " + X + " with status " + D.statusCode), V()
            }), K.once("error", (D) => {
                K.removeAllListeners(), (0, MOA.log)(BJA.LogVerbosity.ERROR, "Failed to connect to proxy " + X + " with error " + D.message), V()
            }), K.end()
        })
    }
});
var s20 = U((_z2) => {
    Object.defineProperty(_z2, "__esModule", {
        value: !0
    });
    _z2.StreamDecoder = void 0;
    var By;
    (function(A) {
        A[A.NO_DATA = 0] = "NO_DATA", A[A.READING_SIZE = 1] = "READING_SIZE", A[A.READING_MESSAGE = 2] = "READING_MESSAGE"
    })(By || (By = {}));
    class Sz2 {
        constructor(A) {
            this.maxReadMessageLength = A, this.readState = By.NO_DATA, this.readCompressFlag = Buffer.alloc(1), this.readPartialSize = Buffer.alloc(4), this.readSizeRemaining = 4, this.readMessageSize = 0, this.readPartialMessage = [], this.readMessageRemaining = 0
        }
        write(A) {
            let Q = 0,
                B, G = [];
            while (Q < A.length) switch (this.readState) {
                case By.NO_DATA:
                    this.readCompressFlag = A.slice(Q, Q + 1), Q += 1, this.readState = By.READING_SIZE, this.readPartialSize.fill(0), this.readSizeRemaining = 4, this.readMessageSize = 0, this.readMessageRemaining = 0, this.readPartialMessage = [];
                    break;
                case By.READING_SIZE:
                    if (B = Math.min(A.length - Q, this.readSizeRemaining), A.copy(this.readPartialSize, 4 - this.readSizeRemaining, Q, Q + B), this.readSizeRemaining -= B, Q += B, this.readSizeRemaining === 0) {
                        if (this.readMessageSize = this.readPartialSize.readUInt32BE(0), this.maxReadMessageLength !== -1 && this.readMessageSize > this.maxReadMessageLength) throw Error(`Received message larger than max (${this.readMessageSize} vs ${this.maxReadMessageLength})`);
                        if (this.readMessageRemaining = this.readMessageSize, this.readMessageRemaining > 0) this.readState = By.READING_MESSAGE;
                        else {
                            let Z = Buffer.concat([this.readCompressFlag, this.readPartialSize], 5);
                            this.readState = By.NO_DATA, G.push(Z)
                        }
                    }
                    break;
                case By.READING_MESSAGE:
                    if (B = Math.min(A.length - Q, this.readMessageRemaining), this.readPartialMessage.push(A.slice(Q, Q + B)), this.readMessageRemaining -= B, Q += B, this.readMessageRemaining === 0) {
                        let Z = [this.readCompressFlag, this.readPartialSize].concat(this.readPartialMessage),
                            I = Buffer.concat(Z, this.readMessageSize + 5);
                        this.readState = By.NO_DATA, G.push(I)
                    }
                    break;
                default:
                    throw Error("Unexpected read state")
            }
            return G
        }
    }
    _z2.StreamDecoder = Sz2
});
var bz2 = U((xz2) => {
    Object.defineProperty(xz2, "__esModule", {
        value: !0
    });
    xz2.Http2SubchannelCall = void 0;
    var Ph = UA("http2"),
        UR5 = UA("os"),
        xG = K6(),
        jh = BK(),
        $R5 = s20(),
        wR5 = XZ(),
        qR5 = K6(),
        NR5 = "subchannel_call";

    function LR5(A) {
        for (let [Q, B] of Object.entries(UR5.constants.errno))
            if (B === A) return Q;
        return "Unknown system error " + A
    }

    function r20(A) {
        let Q = `Received HTTP status code ${A}`,
            B;
        switch (A) {
            case 400:
                B = xG.Status.INTERNAL;
                break;
            case 401:
                B = xG.Status.UNAUTHENTICATED;
                break;
            case 403:
                B = xG.Status.PERMISSION_DENIED;
                break;
            case 404:
                B = xG.Status.UNIMPLEMENTED;
                break;
            case 429:
            case 502:
            case 503:
            case 504:
                B = xG.Status.UNAVAILABLE;
                break;
            default:
                B = xG.Status.UNKNOWN
        }
        return {
            code: B,
            details: Q,
            metadata: new jh.Metadata
        }
    }
    class yz2 {
        constructor(A, Q, B, G, Z) {
            var I;
            this.http2Stream = A, this.callEventTracker = Q, this.listener = B, this.transport = G, this.callId = Z, this.isReadFilterPending = !1, this.isPushPending = !1, this.canPush = !1, this.readsClosed = !1, this.statusOutput = !1, this.unpushedReadMessages = [], this.finalStatus = null, this.internalError = null, this.serverEndedCall = !1, this.connectionDropped = !1;
            let Y = (I = G.getOptions()["grpc.max_receive_message_length"]) !== null && I !== void 0 ? I : xG.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
            this.decoder = new $R5.StreamDecoder(Y), A.on("response", (J, W) => {
                let X = "";
                for (let F of Object.keys(J)) X += "\t\t" + F + ": " + J[F] + `
`;
                if (this.trace(`Received server headers:
` + X), this.httpStatusCode = J[":status"], W & Ph.constants.NGHTTP2_FLAG_END_STREAM) this.handleTrailers(J);
                else {
                    let F;
                    try {
                        F = jh.Metadata.fromHttp2Headers(J)
                    } catch (V) {
                        this.endCall({
                            code: xG.Status.UNKNOWN,
                            details: V.message,
                            metadata: new jh.Metadata
                        });
                        return
                    }
                    this.listener.onReceiveMetadata(F)
                }
            }), A.on("trailers", (J) => {
                this.handleTrailers(J)
            }), A.on("data", (J) => {
                if (this.statusOutput) return;
                this.trace("receive HTTP/2 data frame of length " + J.length);
                let W;
                try {
                    W = this.decoder.write(J)
                } catch (X) {
                    if (this.httpStatusCode !== void 0 && this.httpStatusCode !== 200) {
                        let F = r20(this.httpStatusCode);
                        this.cancelWithStatus(F.code, F.details)
                    } else this.cancelWithStatus(xG.Status.RESOURCE_EXHAUSTED, X.message);
                    return
                }
                for (let X of W) this.trace("parsed message of length " + X.length), this.callEventTracker.addMessageReceived(), this.tryPush(X)
            }), A.on("end", () => {
                this.readsClosed = !0, this.maybeOutputStatus()
            }), A.on("close", () => {
                this.serverEndedCall = !0, process.nextTick(() => {
                    var J;
                    if (this.trace("HTTP/2 stream closed with code " + A.rstCode), ((J = this.finalStatus) === null || J === void 0 ? void 0 : J.code) === xG.Status.OK) return;
                    let W, X = "";
                    switch (A.rstCode) {
                        case Ph.constants.NGHTTP2_NO_ERROR:
                            if (this.finalStatus !== null) return;
                            if (this.httpStatusCode && this.httpStatusCode !== 200) {
                                let F = r20(this.httpStatusCode);
                                W = F.code, X = F.details
                            } else W = xG.Status.INTERNAL, X = `Received RST_STREAM with code ${A.rstCode} (Call ended without gRPC status)`;
                            break;
                        case Ph.constants.NGHTTP2_REFUSED_STREAM:
                            W = xG.Status.UNAVAILABLE, X = "Stream refused by server";
                            break;
                        case Ph.constants.NGHTTP2_CANCEL:
                            if (this.connectionDropped) W = xG.Status.UNAVAILABLE, X = "Connection dropped";
                            else W = xG.Status.CANCELLED, X = "Call cancelled";
                            break;
                        case Ph.constants.NGHTTP2_ENHANCE_YOUR_CALM:
                            W = xG.Status.RESOURCE_EXHAUSTED, X = "Bandwidth exhausted or memory limit exceeded";
                            break;
                        case Ph.constants.NGHTTP2_INADEQUATE_SECURITY:
                            W = xG.Status.PERMISSION_DENIED, X = "Protocol not secure enough";
                            break;
                        case Ph.constants.NGHTTP2_INTERNAL_ERROR:
                            if (W = xG.Status.INTERNAL, this.internalError === null) X = `Received RST_STREAM with code ${A.rstCode} (Internal server error)`;
                            else if (this.internalError.code === "ECONNRESET" || this.internalError.code === "ETIMEDOUT") W = xG.Status.UNAVAILABLE, X = this.internalError.message;
                            else X = `Received RST_STREAM with code ${A.rstCode} triggered by internal client error: ${this.internalError.message}`;
                            break;
                        default:
                            W = xG.Status.INTERNAL, X = `Received RST_STREAM with code ${A.rstCode}`
                    }
                    this.endCall({
                        code: W,
                        details: X,
                        metadata: new jh.Metadata,
                        rstCode: A.rstCode
                    })
                })
            }), A.on("error", (J) => {
                if (J.code !== "ERR_HTTP2_STREAM_ERROR") this.trace("Node error event: message=" + J.message + " code=" + J.code + " errno=" + LR5(J.errno) + " syscall=" + J.syscall), this.internalError = J;
                this.callEventTracker.onStreamEnd(!1)
            })
        }
        getDeadlineInfo() {
            return [`remote_addr=${this.getPeer()}`]
        }
        onDisconnect() {
            this.connectionDropped = !0, setImmediate(() => {
                this.endCall({
                    code: xG.Status.UNAVAILABLE,
                    details: "Connection dropped",
                    metadata: new jh.Metadata
                })
            })
        }
        outputStatus() {
            if (!this.statusOutput) this.statusOutput = !0, this.trace("ended with status: code=" + this.finalStatus.code + ' details="' + this.finalStatus.details + '"'), this.callEventTracker.onCallEnd(this.finalStatus), process.nextTick(() => {
                this.listener.onReceiveStatus(this.finalStatus)
            }), this.http2Stream.resume()
        }
        trace(A) {
            wR5.trace(qR5.LogVerbosity.DEBUG, NR5, "[" + this.callId + "] " + A)
        }
        endCall(A) {
            if (this.finalStatus === null || this.finalStatus.code === xG.Status.OK) this.finalStatus = A, this.maybeOutputStatus();
            this.destroyHttp2Stream()
        }
        maybeOutputStatus() {
            if (this.finalStatus !== null) {
                if (this.finalStatus.code !== xG.Status.OK || this.readsClosed && this.unpushedReadMessages.length === 0 && !this.isReadFilterPending && !this.isPushPending) this.outputStatus()
            }
        }
        push(A) {
            this.trace("pushing to reader message of length " + (A instanceof Buffer ? A.length : null)), this.canPush = !1, this.isPushPending = !0, process.nextTick(() => {
                if (this.isPushPending = !1, this.statusOutput) return;
                this.listener.onReceiveMessage(A), this.maybeOutputStatus()
            })
        }
        tryPush(A) {
            if (this.canPush) this.http2Stream.pause(), this.push(A);
            else this.trace("unpushedReadMessages.push message of length " + A.length), this.unpushedReadMessages.push(A)
        }
        handleTrailers(A) {
            this.serverEndedCall = !0, this.callEventTracker.onStreamEnd(!0);
            let Q = "";
            for (let I of Object.keys(A)) Q += "\t\t" + I + ": " + A[I] + `
`;
            this.trace(`Received server trailers:
` + Q);
            let B;
            try {
                B = jh.Metadata.fromHttp2Headers(A)
            } catch (I) {
                B = new jh.Metadata
            }
            let G = B.getMap(),
                Z;
            if (typeof G["grpc-status"] === "string") {
                let I = Number(G["grpc-status"]);
                this.trace("received status code " + I + " from server"), B.remove("grpc-status");
                let Y = "";
                if (typeof G["grpc-message"] === "string") {
                    try {
                        Y = decodeURI(G["grpc-message"])
                    } catch (J) {
                        Y = G["grpc-message"]
                    }
                    B.remove("grpc-message"), this.trace('received status details string "' + Y + '" from server')
                }
                Z = {
                    code: I,
                    details: Y,
                    metadata: B
                }
            } else if (this.httpStatusCode) Z = r20(this.httpStatusCode), Z.metadata = B;
            else Z = {
                code: xG.Status.UNKNOWN,
                details: "No status information received",
                metadata: B
            };
            this.endCall(Z)
        }
        destroyHttp2Stream() {
            var A;
            if (this.http2Stream.destroyed) return;
            if (this.serverEndedCall) this.http2Stream.end();
            else {
                let Q;
                if (((A = this.finalStatus) === null || A === void 0 ? void 0 : A.code) === xG.Status.OK) Q = Ph.constants.NGHTTP2_NO_ERROR;
                else Q = Ph.constants.NGHTTP2_CANCEL;
                this.trace("close http2 stream with code " + Q), this.http2Stream.close(Q)
            }
        }
        cancelWithStatus(A, Q) {
            this.trace("cancelWithStatus code: " + A + ' details: "' + Q + '"'), this.endCall({
                code: A,
                details: Q,
                metadata: new jh.Metadata
            })
        }
        getStatus() {
            return this.finalStatus
        }
        getPeer() {
            return this.transport.getPeerName()
        }
        getCallNumber() {
            return this.callId
        }
        getAuthContext() {
            return this.transport.getAuthContext()
        }
        startRead() {
            if (this.finalStatus !== null && this.finalStatus.code !== xG.Status.OK) {
                this.readsClosed = !0, this.maybeOutputStatus();
                return
            }
            if (this.canPush = !0, this.unpushedReadMessages.length > 0) {
                let A = this.unpushedReadMessages.shift();
                this.push(A);
                return
            }
            this.http2Stream.resume()
        }
        sendMessageWithContext(A, Q) {
            this.trace("write() called with message of length " + Q.length);
            let B = (G) => {
                process.nextTick(() => {
                    var Z;
                    let I = xG.Status.UNAVAILABLE;
                    if ((G === null || G === void 0 ? void 0 : G.code) === "ERR_STREAM_WRITE_AFTER_END") I = xG.Status.INTERNAL;
                    if (G) this.cancelWithStatus(I, `Write error: ${G.message}`);
                    (Z = A.callback) === null || Z === void 0 || Z.call(A)
                })
            };
            this.trace("sending data chunk of length " + Q.length), this.callEventTracker.addMessageSent();
            try {
                this.http2Stream.write(Q, B)
            } catch (G) {
                this.endCall({
                    code: xG.Status.UNAVAILABLE,
                    details: `Write failed with error ${G.message}`,
                    metadata: new jh.Metadata
                })
            }
        }
        halfClose() {
            this.trace("end() called"), this.trace("calling end() on HTTP/2 stream"), this.http2Stream.end()
        }
    }
    xz2.Http2SubchannelCall = yz2
});
var mz2 = U((gz2) => {
    Object.defineProperty(gz2, "__esModule", {
        value: !0
    });
    gz2.Http2SubchannelConnector = void 0;
    var n1A = UA("http2"),
        MR5 = UA("tls"),
        m41 = mi(),
        ROA = K6(),
        OR5 = a20(),
        ZJA = XZ(),
        RR5 = JP(),
        d41 = rU(),
        o20 = mE(),
        TR5 = UA("net"),
        PR5 = bz2(),
        jR5 = v41(),
        t20 = "transport",
        SR5 = "transport_flowctrl",
        _R5 = KB0().version,
        {
            HTTP2_HEADER_AUTHORITY: kR5,
            HTTP2_HEADER_CONTENT_TYPE: yR5,
            HTTP2_HEADER_METHOD: xR5,
            HTTP2_HEADER_PATH: vR5,
            HTTP2_HEADER_TE: bR5,
            HTTP2_HEADER_USER_AGENT: fR5
        } = n1A.constants,
        hR5 = 20000,
        gR5 = Buffer.from("too_many_pings", "ascii");
    class fz2 {
        constructor(A, Q, B, G) {
            if (this.session = A, this.options = B, this.remoteName = G, this.keepaliveTimer = null, this.pendingSendKeepalivePing = !1, this.activeCalls = new Set, this.disconnectListeners = [], this.disconnectHandled = !1, this.channelzEnabled = !0, this.keepalivesSent = 0, this.messagesSent = 0, this.messagesReceived = 0, this.lastMessageSentTimestamp = null, this.lastMessageReceivedTimestamp = null, this.subchannelAddressString = (0, d41.subchannelAddressToString)(Q), B["grpc.enable_channelz"] === 0) this.channelzEnabled = !1, this.streamTracker = new m41.ChannelzCallTrackerStub;
            else this.streamTracker = new m41.ChannelzCallTracker;
            if (this.channelzRef = (0, m41.registerChannelzSocket)(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled), this.userAgent = [B["grpc.primary_user_agent"], `grpc-node-js/${_R5}`, B["grpc.secondary_user_agent"]].filter((Z) => Z).join(" "), "grpc.keepalive_time_ms" in B) this.keepaliveTimeMs = B["grpc.keepalive_time_ms"];
            else this.keepaliveTimeMs = -1;
            if ("grpc.keepalive_timeout_ms" in B) this.keepaliveTimeoutMs = B["grpc.keepalive_timeout_ms"];
            else this.keepaliveTimeoutMs = hR5;
            if ("grpc.keepalive_permit_without_calls" in B) this.keepaliveWithoutCalls = B["grpc.keepalive_permit_without_calls"] === 1;
            else this.keepaliveWithoutCalls = !1;
            if (A.once("close", () => {
                    this.trace("session closed"), this.handleDisconnect()
                }), A.once("goaway", (Z, I, Y) => {
                    let J = !1;
                    if (Z === n1A.constants.NGHTTP2_ENHANCE_YOUR_CALM && Y && Y.equals(gR5)) J = !0;
                    this.trace("connection closed by GOAWAY with code " + Z + " and data " + (Y === null || Y === void 0 ? void 0 : Y.toString())), this.reportDisconnectToOwner(J)
                }), A.once("error", (Z) => {
                    this.trace("connection closed with error " + Z.message), this.handleDisconnect()
                }), A.socket.once("close", (Z) => {
                    this.trace("connection closed. hadError=" + Z), this.handleDisconnect()
                }), ZJA.isTracerEnabled(t20)) A.on("remoteSettings", (Z) => {
                this.trace("new settings received" + (this.session !== A ? " on the old connection" : "") + ": " + JSON.stringify(Z))
            }), A.on("localSettings", (Z) => {
                this.trace("local settings acknowledged by remote" + (this.session !== A ? " on the old connection" : "") + ": " + JSON.stringify(Z))
            });
            if (this.keepaliveWithoutCalls) this.maybeStartKeepalivePingTimer();
            if (A.socket instanceof MR5.TLSSocket) this.authContext = {
                transportSecurityType: "ssl",
                sslPeerCertificate: A.socket.getPeerCertificate()
            };
            else this.authContext = {}
        }
        getChannelzInfo() {
            var A, Q, B;
            let G = this.session.socket,
                Z = G.remoteAddress ? (0, d41.stringToSubchannelAddress)(G.remoteAddress, G.remotePort) : null,
                I = G.localAddress ? (0, d41.stringToSubchannelAddress)(G.localAddress, G.localPort) : null,
                Y;
            if (this.session.encrypted) {
                let W = G,
                    X = W.getCipher(),
                    F = W.getCertificate(),
                    V = W.getPeerCertificate();
                Y = {
                    cipherSuiteStandardName: (A = X.standardName) !== null && A !== void 0 ? A : null,
                    cipherSuiteOtherName: X.standardName ? null : X.name,
                    localCertificate: F && "raw" in F ? F.raw : null,
                    remoteCertificate: V && "raw" in V ? V.raw : null
                }
            } else Y = null;