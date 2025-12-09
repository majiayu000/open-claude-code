/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: auth_059.js
 * 处理时间: 2025-12-09T03:37:24.425Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         (  1x) = require(moduleName) - Node.js require
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 59/61
 * Lines: 316938 - 318435 (1498 lines)
 * Original file: cli.js
 */

            return {
                remoteAddress: Z,
                localAddress: I,
                security: Y,
                remoteName: this.remoteName,
                streamsStarted: this.streamTracker.callsStarted,
                streamsSucceeded: this.streamTracker.callsSucceeded,
                streamsFailed: this.streamTracker.callsFailed,
                messagesSent: this.messagesSent,
                messagesReceived: this.messagesReceived,
                keepAlivesSent: this.keepalivesSent,
                lastLocalStreamCreatedTimestamp: this.streamTracker.lastCallStartedTimestamp,
                lastRemoteStreamCreatedTimestamp: null,
                lastMessageSentTimestamp: this.lastMessageSentTimestamp,
                lastMessageReceivedTimestamp: this.lastMessageReceivedTimestamp,
                localFlowControlWindow: (Q = this.session.state.localWindowSize) !== null && Q !== void 0 ? Q : null,
                remoteFlowControlWindow: (B = this.session.state.remoteWindowSize) !== null && B !== void 0 ? B : null
            }
        }
        trace(A) {
            ZJA.trace(ROA.LogVerbosity.DEBUG, t20, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A)
        }
        keepaliveTrace(A) {
            ZJA.trace(ROA.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A)
        }
        flowControlTrace(A) {
            ZJA.trace(ROA.LogVerbosity.DEBUG, SR5, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A)
        }
        internalsTrace(A) {
            ZJA.trace(ROA.LogVerbosity.DEBUG, "transport_internals", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A)
        }
        reportDisconnectToOwner(A) {
            if (this.disconnectHandled) return;
            this.disconnectHandled = !0, this.disconnectListeners.forEach((Q) => Q(A))
        }
        handleDisconnect() {
            this.clearKeepaliveTimeout(), this.reportDisconnectToOwner(!1);
            for (let A of this.activeCalls) A.onDisconnect();
            setImmediate(() => {
                this.session.destroy()
            })
        }
        addDisconnectListener(A) {
            this.disconnectListeners.push(A)
        }
        canSendPing() {
            return !this.session.destroyed && this.keepaliveTimeMs > 0 && (this.keepaliveWithoutCalls || this.activeCalls.size > 0)
        }
        maybeSendPing() {
            var A, Q;
            if (!this.canSendPing()) {
                this.pendingSendKeepalivePing = !0;
                return
            }
            if (this.keepaliveTimer) {
                console.error("keepaliveTimeout is not null");
                return
            }
            if (this.channelzEnabled) this.keepalivesSent += 1;
            this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms"), this.keepaliveTimer = setTimeout(() => {
                this.keepaliveTimer = null, this.keepaliveTrace("Ping timeout passed without response"), this.handleDisconnect()
            }, this.keepaliveTimeoutMs), (Q = (A = this.keepaliveTimer).unref) === null || Q === void 0 || Q.call(A);
            let B = "";
            try {
                if (!this.session.ping((Z, I, Y) => {
                        if (this.clearKeepaliveTimeout(), Z) this.keepaliveTrace("Ping failed with error " + Z.message), this.handleDisconnect();
                        else this.keepaliveTrace("Received ping response"), this.maybeStartKeepalivePingTimer()
                    })) B = "Ping returned false"
            } catch (G) {
                B = (G instanceof Error ? G.message : "") || "Unknown error"
            }
            if (B) this.keepaliveTrace("Ping send failed: " + B), this.handleDisconnect()
        }
        maybeStartKeepalivePingTimer() {
            var A, Q;
            if (!this.canSendPing()) return;
            if (this.pendingSendKeepalivePing) this.pendingSendKeepalivePing = !1, this.maybeSendPing();
            else if (!this.keepaliveTimer) this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), this.keepaliveTimer = setTimeout(() => {
                this.keepaliveTimer = null, this.maybeSendPing()
            }, this.keepaliveTimeMs), (Q = (A = this.keepaliveTimer).unref) === null || Q === void 0 || Q.call(A)
        }
        clearKeepaliveTimeout() {
            if (this.keepaliveTimer) clearTimeout(this.keepaliveTimer), this.keepaliveTimer = null
        }
        removeActiveCall(A) {
            if (this.activeCalls.delete(A), this.activeCalls.size === 0) this.session.unref()
        }
        addActiveCall(A) {
            if (this.activeCalls.add(A), this.activeCalls.size === 1) {
                if (this.session.ref(), !this.keepaliveWithoutCalls) this.maybeStartKeepalivePingTimer()
            }
        }
        createCall(A, Q, B, G, Z) {
            let I = A.toHttp2Headers();
            I[kR5] = Q, I[fR5] = this.userAgent, I[yR5] = "application/grpc", I[xR5] = "POST", I[vR5] = B, I[bR5] = "trailers";
            let Y;
            try {
                Y = this.session.request(I)
            } catch (X) {
                throw this.handleDisconnect(), X
            }
            this.flowControlTrace("local window size: " + this.session.state.localWindowSize + " remote window size: " + this.session.state.remoteWindowSize), this.internalsTrace("session.closed=" + this.session.closed + " session.destroyed=" + this.session.destroyed + " session.socket.destroyed=" + this.session.socket.destroyed);
            let J, W;
            if (this.channelzEnabled) this.streamTracker.addCallStarted(), J = {
                addMessageSent: () => {
                    var X;
                    this.messagesSent += 1, this.lastMessageSentTimestamp = new Date, (X = Z.addMessageSent) === null || X === void 0 || X.call(Z)
                },
                addMessageReceived: () => {
                    var X;
                    this.messagesReceived += 1, this.lastMessageReceivedTimestamp = new Date, (X = Z.addMessageReceived) === null || X === void 0 || X.call(Z)
                },
                onCallEnd: (X) => {
                    var F;
                    (F = Z.onCallEnd) === null || F === void 0 || F.call(Z, X), this.removeActiveCall(W)
                },
                onStreamEnd: (X) => {
                    var F;
                    if (X) this.streamTracker.addCallSucceeded();
                    else this.streamTracker.addCallFailed();
                    (F = Z.onStreamEnd) === null || F === void 0 || F.call(Z, X)
                }
            };
            else J = {
                addMessageSent: () => {
                    var X;
                    (X = Z.addMessageSent) === null || X === void 0 || X.call(Z)
                },
                addMessageReceived: () => {
                    var X;
                    (X = Z.addMessageReceived) === null || X === void 0 || X.call(Z)
                },
                onCallEnd: (X) => {
                    var F;
                    (F = Z.onCallEnd) === null || F === void 0 || F.call(Z, X), this.removeActiveCall(W)
                },
                onStreamEnd: (X) => {
                    var F;
                    (F = Z.onStreamEnd) === null || F === void 0 || F.call(Z, X)
                }
            };
            return W = new PR5.Http2SubchannelCall(Y, J, G, this, (0, jR5.getNextCallNumber)()), this.addActiveCall(W), W
        }
        getChannelzRef() {
            return this.channelzRef
        }
        getPeerName() {
            return this.subchannelAddressString
        }
        getOptions() {
            return this.options
        }
        getAuthContext() {
            return this.authContext
        }
        shutdown() {
            this.session.close(), (0, m41.unregisterChannelzRef)(this.channelzRef)
        }
    }
    class hz2 {
        constructor(A) {
            this.channelTarget = A, this.session = null, this.isShutdown = !1
        }
        trace(A) {
            ZJA.trace(ROA.LogVerbosity.DEBUG, t20, (0, o20.uriToString)(this.channelTarget) + " " + A)
        }
        createSession(A, Q, B) {
            if (this.isShutdown) return Promise.reject();
            if (A.socket.closed) return Promise.reject("Connection closed before starting HTTP/2 handshake");
            return new Promise((G, Z) => {
                var I, Y, J, W, X, F, V;
                let K = null,
                    D = this.channelTarget;
                if ("grpc.http_connect_target" in B) {
                    let v = (0, o20.parseUri)(B["grpc.http_connect_target"]);
                    if (v) D = v, K = (0, o20.uriToString)(v)
                }
                let H = A.secure ? "https" : "http",
                    C = (0, RR5.getDefaultAuthority)(D),
                    E = () => {
                        var v;
                        (v = this.session) === null || v === void 0 || v.destroy(), this.session = null, setImmediate(() => {
                            if (!y) y = !0, Z(`${P.trim()} (${new Date().toISOString()})`)
                        })
                    },
                    z = (v) => {
                        var x;
                        if ((x = this.session) === null || x === void 0 || x.destroy(), P = v.message, this.trace("connection failed with error " + P), !y) y = !0, Z(`${P} (${new Date().toISOString()})`)
                    },
                    w = {
                        createConnection: (v, x) => {
                            return A.socket
                        },
                        settings: {
                            initialWindowSize: (W = (I = B["grpc-node.flow_control_window"]) !== null && I !== void 0 ? I : (J = (Y = n1A.getDefaultSettings) === null || Y === void 0 ? void 0 : Y.call(n1A)) === null || J === void 0 ? void 0 : J.initialWindowSize) !== null && W !== void 0 ? W : 65535
                        }
                    },
                    N = n1A.connect(`${H}://${C}`, w),
                    q = (V = (F = (X = n1A.getDefaultSettings) === null || X === void 0 ? void 0 : X.call(n1A)) === null || F === void 0 ? void 0 : F.initialWindowSize) !== null && V !== void 0 ? V : 65535,
                    R = B["grpc-node.flow_control_window"];
                this.session = N;
                let P = "Failed to connect",
                    y = !1;
                N.unref(), N.once("remoteSettings", () => {
                    var v;
                    if (R && R > q) try {
                        N.setLocalWindowSize(R)
                    } catch (x) {
                        let p = R - ((v = N.state.localWindowSize) !== null && v !== void 0 ? v : q);
                        if (p > 0) N.incrementWindowSize(p)
                    }
                    N.removeAllListeners(), A.socket.removeListener("close", E), A.socket.removeListener("error", z), G(new fz2(N, Q, B, K)), this.session = null
                }), N.once("close", E), N.once("error", z), A.socket.once("close", E), A.socket.once("error", z)
            })
        }
        tcpConnect(A, Q) {
            return (0, OR5.getProxiedConnection)(A, Q).then((B) => {
                if (B) return B;
                else return new Promise((G, Z) => {
                    let I = () => {
                            Z(Error("Socket closed"))
                        },
                        Y = (W) => {
                            Z(W)
                        },
                        J = TR5.connect(A, () => {
                            J.removeListener("close", I), J.removeListener("error", Y), G(J)
                        });
                    J.once("close", I), J.once("error", Y)
                })
            })
        }
        async connect(A, Q, B) {
            if (this.isShutdown) return Promise.reject();
            let G = null,
                Z = null,
                I = (0, d41.subchannelAddressToString)(A);
            try {
                return this.trace(I + " Waiting for secureConnector to be ready"), await Q.waitForReady(), this.trace(I + " secureConnector is ready"), G = await this.tcpConnect(A, B), G.setNoDelay(), this.trace(I + " Established TCP connection"), Z = await Q.connect(G), this.trace(I + " Established secure connection"), this.createSession(Z, A, B)
            } catch (Y) {
                throw G === null || G === void 0 || G.destroy(), Z === null || Z === void 0 || Z.socket.destroy(), Y
            }
        }
        shutdown() {
            var A;
            this.isShutdown = !0, (A = this.session) === null || A === void 0 || A.close(), this.session = null
        }
    }
    gz2.Http2SubchannelConnector = hz2
});
var pz2 = U((dz2) => {
    Object.defineProperty(dz2, "__esModule", {
        value: !0
    });
    dz2.SubchannelPool = void 0;
    dz2.getSubchannelPool = nR5;
    var uR5 = pD2(),
        mR5 = Ez2(),
        dR5 = rU(),
        cR5 = mE(),
        pR5 = mz2(),
        lR5 = 1e4;
    class c41 {
        constructor() {
            this.pool = Object.create(null), this.cleanupTimer = null
        }
        unrefUnusedSubchannels() {
            let A = !0;
            for (let Q in this.pool) {
                let G = this.pool[Q].filter((Z) => !Z.subchannel.unrefIfOneRef());
                if (G.length > 0) A = !1;
                this.pool[Q] = G
            }
            if (A && this.cleanupTimer !== null) clearInterval(this.cleanupTimer), this.cleanupTimer = null
        }
        ensureCleanupTask() {
            var A, Q;
            if (this.cleanupTimer === null) this.cleanupTimer = setInterval(() => {
                this.unrefUnusedSubchannels()
            }, lR5), (Q = (A = this.cleanupTimer).unref) === null || Q === void 0 || Q.call(A)
        }
        getOrCreateSubchannel(A, Q, B, G) {
            this.ensureCleanupTask();
            let Z = (0, cR5.uriToString)(A);
            if (Z in this.pool) {
                let Y = this.pool[Z];
                for (let J of Y)
                    if ((0, dR5.subchannelAddressEqual)(Q, J.subchannelAddress) && (0, uR5.channelOptionsEqual)(B, J.channelArguments) && G._equals(J.channelCredentials)) return J.subchannel
            }
            let I = new mR5.Subchannel(A, Q, B, G, new pR5.Http2SubchannelConnector(A));
            if (!(Z in this.pool)) this.pool[Z] = [];
            return this.pool[Z].push({
                subchannelAddress: Q,
                channelArguments: B,
                channelCredentials: G,
                subchannel: I
            }), I.ref(), I
        }
    }
    dz2.SubchannelPool = c41;
    var iR5 = new c41;

    function nR5(A) {
        if (A) return iR5;
        else return new c41
    }
});
var rz2 = U((az2) => {
    Object.defineProperty(az2, "__esModule", {
        value: !0
    });
    az2.LoadBalancingCall = void 0;
    var lz2 = dE(),
        p41 = K6(),
        iz2 = AJA(),
        l41 = BK(),
        TOA = wh(),
        sR5 = mE(),
        rR5 = XZ(),
        e20 = qOA(),
        oR5 = UA("http2"),
        tR5 = "load_balancing_call";
    class nz2 {
        constructor(A, Q, B, G, Z, I, Y) {
            var J, W;
            this.channel = A, this.callConfig = Q, this.methodName = B, this.host = G, this.credentials = Z, this.deadline = I, this.callNumber = Y, this.child = null, this.readPending = !1, this.pendingMessage = null, this.pendingHalfClose = !1, this.ended = !1, this.metadata = null, this.listener = null, this.onCallEnded = null, this.childStartTime = null;
            let X = this.methodName.split("/"),
                F = "";
            if (X.length >= 2) F = X[1];
            let V = (W = (J = (0, sR5.splitHostPort)(this.host)) === null || J === void 0 ? void 0 : J.host) !== null && W !== void 0 ? W : "localhost";
            this.serviceUrl = `https://${V}/${F}`, this.startTime = new Date
        }
        getDeadlineInfo() {
            var A, Q;
            let B = [];
            if (this.childStartTime) {
                if (this.childStartTime > this.startTime) {
                    if ((A = this.metadata) === null || A === void 0 ? void 0 : A.getOptions().waitForReady) B.push("wait_for_ready");
                    B.push(`LB pick: ${(0,iz2.formatDateDifference)(this.startTime,this.childStartTime)}`)
                }
                return B.push(...this.child.getDeadlineInfo()), B
            } else {
                if ((Q = this.metadata) === null || Q === void 0 ? void 0 : Q.getOptions().waitForReady) B.push("wait_for_ready");
                B.push("Waiting for LB pick")
            }
            return B
        }
        trace(A) {
            rR5.trace(p41.LogVerbosity.DEBUG, tR5, "[" + this.callNumber + "] " + A)
        }
        outputStatus(A, Q) {
            var B, G;
            if (!this.ended) {
                this.ended = !0, this.trace("ended with status: code=" + A.code + ' details="' + A.details + '" start time=' + this.startTime.toISOString());
                let Z = Object.assign(Object.assign({}, A), {
                    progress: Q
                });
                (B = this.listener) === null || B === void 0 || B.onReceiveStatus(Z), (G = this.onCallEnded) === null || G === void 0 || G.call(this, Z.code, Z.details, Z.metadata)
            }
        }
        doPick() {
            var A, Q;
            if (this.ended) return;
            if (!this.metadata) throw Error("doPick called before start");
            this.trace("Pick called");
            let B = this.metadata.clone(),
                G = this.channel.doPick(B, this.callConfig.pickInformation),
                Z = G.subchannel ? "(" + G.subchannel.getChannelzRef().id + ") " + G.subchannel.getAddress() : "" + G.subchannel;
            switch (this.trace("Pick result: " + TOA.PickResultType[G.pickResultType] + " subchannel: " + Z + " status: " + ((A = G.status) === null || A === void 0 ? void 0 : A.code) + " " + ((Q = G.status) === null || Q === void 0 ? void 0 : Q.details)), G.pickResultType) {
                case TOA.PickResultType.COMPLETE:
                    this.credentials.compose(G.subchannel.getCallCredentials()).generateMetadata({
                        method_name: this.methodName,
                        service_url: this.serviceUrl
                    }).then((W) => {
                        var X;
                        if (this.ended) {
                            this.trace("Credentials metadata generation finished after call ended");
                            return
                        }
                        if (B.merge(W), B.get("authorization").length > 1) this.outputStatus({
                            code: p41.Status.INTERNAL,
                            details: '"authorization" metadata cannot have multiple values',
                            metadata: new l41.Metadata
                        }, "PROCESSED");
                        if (G.subchannel.getConnectivityState() !== lz2.ConnectivityState.READY) {
                            this.trace("Picked subchannel " + Z + " has state " + lz2.ConnectivityState[G.subchannel.getConnectivityState()] + " after getting credentials metadata. Retrying pick"), this.doPick();
                            return
                        }
                        if (this.deadline !== 1 / 0) B.set("grpc-timeout", (0, iz2.getDeadlineTimeoutString)(this.deadline));
                        try {
                            this.child = G.subchannel.getRealSubchannel().createCall(B, this.host, this.methodName, {
                                onReceiveMetadata: (F) => {
                                    this.trace("Received metadata"), this.listener.onReceiveMetadata(F)
                                },
                                onReceiveMessage: (F) => {
                                    this.trace("Received message"), this.listener.onReceiveMessage(F)
                                },
                                onReceiveStatus: (F) => {
                                    if (this.trace("Received status"), F.rstCode === oR5.constants.NGHTTP2_REFUSED_STREAM) this.outputStatus(F, "REFUSED");
                                    else this.outputStatus(F, "PROCESSED")
                                }
                            }), this.childStartTime = new Date
                        } catch (F) {
                            this.trace("Failed to start call on picked subchannel " + Z + " with error " + F.message), this.outputStatus({
                                code: p41.Status.INTERNAL,
                                details: "Failed to start HTTP/2 stream with error " + F.message,
                                metadata: new l41.Metadata
                            }, "NOT_STARTED");
                            return
                        }
                        if ((X = G.onCallStarted) === null || X === void 0 || X.call(G), this.onCallEnded = G.onCallEnded, this.trace("Created child call [" + this.child.getCallNumber() + "]"), this.readPending) this.child.startRead();
                        if (this.pendingMessage) this.child.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
                        if (this.pendingHalfClose) this.child.halfClose()
                    }, (W) => {
                        let {
                            code: X,
                            details: F
                        } = (0, e20.restrictControlPlaneStatusCode)(typeof W.code === "number" ? W.code : p41.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${W.message}`);
                        this.outputStatus({
                            code: X,
                            details: F,
                            metadata: new l41.Metadata
                        }, "PROCESSED")
                    });
                    break;
                case TOA.PickResultType.DROP:
                    let {
                        code: Y, details: J
                    } = (0, e20.restrictControlPlaneStatusCode)(G.status.code, G.status.details);
                    setImmediate(() => {
                        this.outputStatus({
                            code: Y,
                            details: J,
                            metadata: G.status.metadata
                        }, "DROP")
                    });
                    break;
                case TOA.PickResultType.TRANSIENT_FAILURE:
                    if (this.metadata.getOptions().waitForReady) this.channel.queueCallForPick(this);
                    else {
                        let {
                            code: W,
                            details: X
                        } = (0, e20.restrictControlPlaneStatusCode)(G.status.code, G.status.details);
                        setImmediate(() => {
                            this.outputStatus({
                                code: W,
                                details: X,
                                metadata: G.status.metadata
                            }, "PROCESSED")
                        })
                    }
                    break;
                case TOA.PickResultType.QUEUE:
                    this.channel.queueCallForPick(this)
            }
        }
        cancelWithStatus(A, Q) {
            var B;
            this.trace("cancelWithStatus code: " + A + ' details: "' + Q + '"'), (B = this.child) === null || B === void 0 || B.cancelWithStatus(A, Q), this.outputStatus({
                code: A,
                details: Q,
                metadata: new l41.Metadata
            }, "PROCESSED")
        }
        getPeer() {
            var A, Q;
            return (Q = (A = this.child) === null || A === void 0 ? void 0 : A.getPeer()) !== null && Q !== void 0 ? Q : this.channel.getTarget()
        }
        start(A, Q) {
            this.trace("start called"), this.listener = Q, this.metadata = A, this.doPick()
        }
        sendMessageWithContext(A, Q) {
            if (this.trace("write() called with message of length " + Q.length), this.child) this.child.sendMessageWithContext(A, Q);
            else this.pendingMessage = {
                context: A,
                message: Q
            }
        }
        startRead() {
            if (this.trace("startRead called"), this.child) this.child.startRead();
            else this.readPending = !0
        }
        halfClose() {
            if (this.trace("halfClose called"), this.child) this.child.halfClose();
            else this.pendingHalfClose = !0
        }
        setCredentials(A) {
            throw Error("Method not implemented.")
        }
        getCallNumber() {
            return this.callNumber
        }
        getAuthContext() {
            if (this.child) return this.child.getAuthContext();
            else return null
        }
    }
    az2.LoadBalancingCall = nz2
});
var QU2 = U((ez2) => {
    Object.defineProperty(ez2, "__esModule", {
        value: !0
    });
    ez2.ResolvingCall = void 0;
    var eR5 = a91(),
        a1A = K6(),
        s1A = AJA(),
        oz2 = BK(),
        AT5 = XZ(),
        QT5 = qOA(),
        BT5 = "resolving_call";
    class tz2 {
        constructor(A, Q, B, G, Z) {
            if (this.channel = A, this.method = Q, this.filterStackFactory = G, this.callNumber = Z, this.child = null, this.readPending = !1, this.pendingMessage = null, this.pendingHalfClose = !1, this.ended = !1, this.readFilterPending = !1, this.writeFilterPending = !1, this.pendingChildStatus = null, this.metadata = null, this.listener = null, this.statusWatchers = [], this.deadlineTimer = setTimeout(() => {}, 0), this.filterStack = null, this.deadlineStartTime = null, this.configReceivedTime = null, this.childStartTime = null, this.credentials = eR5.CallCredentials.createEmpty(), this.deadline = B.deadline, this.host = B.host, B.parentCall) {
                if (B.flags & a1A.Propagate.CANCELLATION) B.parentCall.on("cancelled", () => {
                    this.cancelWithStatus(a1A.Status.CANCELLED, "Cancelled by parent call")
                });
                if (B.flags & a1A.Propagate.DEADLINE) this.trace("Propagating deadline from parent: " + B.parentCall.getDeadline()), this.deadline = (0, s1A.minDeadline)(this.deadline, B.parentCall.getDeadline())
            }
            this.trace("Created"), this.runDeadlineTimer()
        }
        trace(A) {
            AT5.trace(a1A.LogVerbosity.DEBUG, BT5, "[" + this.callNumber + "] " + A)
        }
        runDeadlineTimer() {
            clearTimeout(this.deadlineTimer), this.deadlineStartTime = new Date, this.trace("Deadline: " + (0, s1A.deadlineToString)(this.deadline));
            let A = (0, s1A.getRelativeTimeout)(this.deadline);
            if (A !== 1 / 0) {
                this.trace("Deadline will be reached in " + A + "ms");
                let Q = () => {
                    if (!this.deadlineStartTime) {
                        this.cancelWithStatus(a1A.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
                        return
                    }
                    let B = [],
                        G = new Date;
                    if (B.push(`Deadline exceeded after ${(0,s1A.formatDateDifference)(this.deadlineStartTime,G)}`), this.configReceivedTime) {
                        if (this.configReceivedTime > this.deadlineStartTime) B.push(`name resolution: ${(0,s1A.formatDateDifference)(this.deadlineStartTime,this.configReceivedTime)}`);
                        if (this.childStartTime) {
                            if (this.childStartTime > this.configReceivedTime) B.push(`metadata filters: ${(0,s1A.formatDateDifference)(this.configReceivedTime,this.childStartTime)}`)
                        } else B.push("waiting for metadata filters")
                    } else B.push("waiting for name resolution");
                    if (this.child) B.push(...this.child.getDeadlineInfo());
                    this.cancelWithStatus(a1A.Status.DEADLINE_EXCEEDED, B.join(","))
                };
                if (A <= 0) process.nextTick(Q);
                else this.deadlineTimer = setTimeout(Q, A)
            }
        }
        outputStatus(A) {
            if (!this.ended) {
                if (this.ended = !0, !this.filterStack) this.filterStack = this.filterStackFactory.createFilter();
                clearTimeout(this.deadlineTimer);
                let Q = this.filterStack.receiveTrailers(A);
                this.trace("ended with status: code=" + Q.code + ' details="' + Q.details + '"'), this.statusWatchers.forEach((B) => B(Q)), process.nextTick(() => {
                    var B;
                    (B = this.listener) === null || B === void 0 || B.onReceiveStatus(Q)
                })
            }
        }
        sendMessageOnChild(A, Q) {
            if (!this.child) throw Error("sendMessageonChild called with child not populated");
            let B = this.child;
            this.writeFilterPending = !0, this.filterStack.sendMessage(Promise.resolve({
                message: Q,
                flags: A.flags
            })).then((G) => {
                if (this.writeFilterPending = !1, B.sendMessageWithContext(A, G.message), this.pendingHalfClose) B.halfClose()
            }, (G) => {
                this.cancelWithStatus(G.code, G.details)
            })
        }
        getConfig() {
            if (this.ended) return;
            if (!this.metadata || !this.listener) throw Error("getConfig called before start");
            let A = this.channel.getConfig(this.method, this.metadata);
            if (A.type === "NONE") {
                this.channel.queueCallForConfig(this);
                return
            } else if (A.type === "ERROR") {
                if (this.metadata.getOptions().waitForReady) this.channel.queueCallForConfig(this);
                else this.outputStatus(A.error);
                return
            }
            this.configReceivedTime = new Date;
            let Q = A.config;
            if (Q.status !== a1A.Status.OK) {
                let {
                    code: B,
                    details: G
                } = (0, QT5.restrictControlPlaneStatusCode)(Q.status, "Failed to route call to method " + this.method);
                this.outputStatus({
                    code: B,
                    details: G,
                    metadata: new oz2.Metadata
                });
                return
            }
            if (Q.methodConfig.timeout) {
                let B = new Date;
                B.setSeconds(B.getSeconds() + Q.methodConfig.timeout.seconds), B.setMilliseconds(B.getMilliseconds() + Q.methodConfig.timeout.nanos / 1e6), this.deadline = (0, s1A.minDeadline)(this.deadline, B), this.runDeadlineTimer()
            }
            this.filterStackFactory.push(Q.dynamicFilterFactories), this.filterStack = this.filterStackFactory.createFilter(), this.filterStack.sendMetadata(Promise.resolve(this.metadata)).then((B) => {
                if (this.child = this.channel.createRetryingCall(Q, this.method, this.host, this.credentials, this.deadline), this.trace("Created child [" + this.child.getCallNumber() + "]"), this.childStartTime = new Date, this.child.start(B, {
                        onReceiveMetadata: (G) => {
                            this.trace("Received metadata"), this.listener.onReceiveMetadata(this.filterStack.receiveMetadata(G))
                        },
                        onReceiveMessage: (G) => {
                            this.trace("Received message"), this.readFilterPending = !0, this.filterStack.receiveMessage(G).then((Z) => {
                                if (this.trace("Finished filtering received message"), this.readFilterPending = !1, this.listener.onReceiveMessage(Z), this.pendingChildStatus) this.outputStatus(this.pendingChildStatus)
                            }, (Z) => {
                                this.cancelWithStatus(Z.code, Z.details)
                            })
                        },
                        onReceiveStatus: (G) => {
                            if (this.trace("Received status"), this.readFilterPending) this.pendingChildStatus = G;
                            else this.outputStatus(G)
                        }
                    }), this.readPending) this.child.startRead();
                if (this.pendingMessage) this.sendMessageOnChild(this.pendingMessage.context, this.pendingMessage.message);
                else if (this.pendingHalfClose) this.child.halfClose()
            }, (B) => {
                this.outputStatus(B)
            })
        }
        reportResolverError(A) {
            var Q;
            if ((Q = this.metadata) === null || Q === void 0 ? void 0 : Q.getOptions().waitForReady) this.channel.queueCallForConfig(this);
            else this.outputStatus(A)
        }
        cancelWithStatus(A, Q) {
            var B;
            this.trace("cancelWithStatus code: " + A + ' details: "' + Q + '"'), (B = this.child) === null || B === void 0 || B.cancelWithStatus(A, Q), this.outputStatus({
                code: A,
                details: Q,
                metadata: new oz2.Metadata
            })
        }
        getPeer() {
            var A, Q;
            return (Q = (A = this.child) === null || A === void 0 ? void 0 : A.getPeer()) !== null && Q !== void 0 ? Q : this.channel.getTarget()
        }
        start(A, Q) {
            this.trace("start called"), this.metadata = A.clone(), this.listener = Q, this.getConfig()
        }
        sendMessageWithContext(A, Q) {
            if (this.trace("write() called with message of length " + Q.length), this.child) this.sendMessageOnChild(A, Q);
            else this.pendingMessage = {
                context: A,
                message: Q
            }
        }
        startRead() {
            if (this.trace("startRead called"), this.child) this.child.startRead();
            else this.readPending = !0
        }
        halfClose() {
            if (this.trace("halfClose called"), this.child && !this.writeFilterPending) this.child.halfClose();
            else this.pendingHalfClose = !0
        }
        setCredentials(A) {
            this.credentials = A
        }
        addStatusWatcher(A) {
            this.statusWatchers.push(A)
        }
        getCallNumber() {
            return this.callNumber
        }
        getAuthContext() {
            if (this.child) return this.child.getAuthContext();
            else return null
        }
    }
    ez2.ResolvingCall = tz2
});
var JU2 = U((IU2) => {
    Object.defineProperty(IU2, "__esModule", {
        value: !0
    });
    IU2.RetryingCall = IU2.MessageBufferTracker = IU2.RetryThrottler = void 0;
    var i41 = K6(),
        GT5 = AJA(),
        ZT5 = BK(),
        IT5 = XZ(),
        YT5 = "retrying_call";
    class BU2 {
        constructor(A, Q, B) {
            if (this.maxTokens = A, this.tokenRatio = Q, B) this.tokens = B.tokens * (A / B.maxTokens);
            else this.tokens = A
        }
        addCallSucceeded() {
            this.tokens = Math.min(this.tokens + this.tokenRatio, this.maxTokens)
        }
        addCallFailed() {
            this.tokens = Math.max(this.tokens - 1, 0)
        }
        canRetryCall() {
            return this.tokens > this.maxTokens / 2
        }
    }
    IU2.RetryThrottler = BU2;
    class GU2 {
        constructor(A, Q) {
            this.totalLimit = A, this.limitPerCall = Q, this.totalAllocated = 0, this.allocatedPerCall = new Map
        }
        allocate(A, Q) {
            var B;
            let G = (B = this.allocatedPerCall.get(Q)) !== null && B !== void 0 ? B : 0;
            if (this.limitPerCall - G < A || this.totalLimit - this.totalAllocated < A) return !1;
            return this.allocatedPerCall.set(Q, G + A), this.totalAllocated += A, !0
        }
        free(A, Q) {
            var B;
            if (this.totalAllocated < A) throw Error(`Invalid buffer allocation state: call ${Q} freed ${A} > total allocated ${this.totalAllocated}`);
            this.totalAllocated -= A;
            let G = (B = this.allocatedPerCall.get(Q)) !== null && B !== void 0 ? B : 0;
            if (G < A) throw Error(`Invalid buffer allocation state: call ${Q} freed ${A} > allocated for call ${G}`);
            this.allocatedPerCall.set(Q, G - A)
        }
        freeAll(A) {
            var Q;
            let B = (Q = this.allocatedPerCall.get(A)) !== null && Q !== void 0 ? Q : 0;
            if (this.totalAllocated < B) throw Error(`Invalid buffer allocation state: call ${A} allocated ${B} > total allocated ${this.totalAllocated}`);
            this.totalAllocated -= B, this.allocatedPerCall.delete(A)
        }
    }
    IU2.MessageBufferTracker = GU2;
    var A90 = "grpc-previous-rpc-attempts",
        JT5 = 5;
    class ZU2 {
        constructor(A, Q, B, G, Z, I, Y, J, W) {
            var X;
            this.channel = A, this.callConfig = Q, this.methodName = B, this.host = G, this.credentials = Z, this.deadline = I, this.callNumber = Y, this.bufferTracker = J, this.retryThrottler = W, this.listener = null, this.initialMetadata = null, this.underlyingCalls = [], this.writeBuffer = [], this.writeBufferOffset = 0, this.readStarted = !1, this.transparentRetryUsed = !1, this.attempts = 0, this.hedgingTimer = null, this.committedCallIndex = null, this.initialRetryBackoffSec = 0, this.nextRetryBackoffSec = 0;
            let F = (X = A.getOptions()["grpc-node.retry_max_attempts_limit"]) !== null && X !== void 0 ? X : JT5;
            if (A.getOptions()["grpc.enable_retries"] === 0) this.state = "NO_RETRY", this.maxAttempts = 1;
            else if (Q.methodConfig.retryPolicy) {
                this.state = "RETRY";
                let V = Q.methodConfig.retryPolicy;
                this.nextRetryBackoffSec = this.initialRetryBackoffSec = Number(V.initialBackoff.substring(0, V.initialBackoff.length - 1)), this.maxAttempts = Math.min(V.maxAttempts, F)
            } else if (Q.methodConfig.hedgingPolicy) this.state = "HEDGING", this.maxAttempts = Math.min(Q.methodConfig.hedgingPolicy.maxAttempts, F);
            else this.state = "TRANSPARENT_ONLY", this.maxAttempts = 1;
            this.startTime = new Date
        }
        getDeadlineInfo() {
            if (this.underlyingCalls.length === 0) return [];
            let A = [],
                Q = this.underlyingCalls[this.underlyingCalls.length - 1];
            if (this.underlyingCalls.length > 1) A.push(`previous attempts: ${this.underlyingCalls.length-1}`);
            if (Q.startTime > this.startTime) A.push(`time to current attempt start: ${(0,GT5.formatDateDifference)(this.startTime,Q.startTime)}`);
            return A.push(...Q.call.getDeadlineInfo()), A
        }
        getCallNumber() {
            return this.callNumber
        }
        trace(A) {
            IT5.trace(i41.LogVerbosity.DEBUG, YT5, "[" + this.callNumber + "] " + A)
        }
        reportStatus(A) {
            this.trace("ended with status: code=" + A.code + ' details="' + A.details + '" start time=' + this.startTime.toISOString()), this.bufferTracker.freeAll(this.callNumber), this.writeBufferOffset = this.writeBufferOffset + this.writeBuffer.length, this.writeBuffer = [], process.nextTick(() => {
                var Q;
                (Q = this.listener) === null || Q === void 0 || Q.onReceiveStatus({
                    code: A.code,
                    details: A.details,
                    metadata: A.metadata
                })
            })
        }
        cancelWithStatus(A, Q) {
            this.trace("cancelWithStatus code: " + A + ' details: "' + Q + '"'), this.reportStatus({
                code: A,
                details: Q,
                metadata: new ZT5.Metadata
            });
            for (let {
                    call: B
                }
                of this.underlyingCalls) B.cancelWithStatus(A, Q)
        }
        getPeer() {
            if (this.committedCallIndex !== null) return this.underlyingCalls[this.committedCallIndex].call.getPeer();
            else return "unknown"
        }
        getBufferEntry(A) {
            var Q;
            return (Q = this.writeBuffer[A - this.writeBufferOffset]) !== null && Q !== void 0 ? Q : {
                entryType: "FREED",
                allocated: !1
            }
        }
        getNextBufferIndex() {
            return this.writeBufferOffset + this.writeBuffer.length
        }
        clearSentMessages() {
            if (this.state !== "COMMITTED") return;
            let A;
            if (this.underlyingCalls[this.committedCallIndex].state === "COMPLETED") A = this.getNextBufferIndex();
            else A = this.underlyingCalls[this.committedCallIndex].nextMessageToSend;
            for (let Q = this.writeBufferOffset; Q < A; Q++) {
                let B = this.getBufferEntry(Q);
                if (B.allocated) this.bufferTracker.free(B.message.message.length, this.callNumber)
            }
            this.writeBuffer = this.writeBuffer.slice(A - this.writeBufferOffset), this.writeBufferOffset = A
        }
        commitCall(A) {
            var Q, B;
            if (this.state === "COMMITTED") return;
            this.trace("Committing call [" + this.underlyingCalls[A].call.getCallNumber() + "] at index " + A), this.state = "COMMITTED", (B = (Q = this.callConfig).onCommitted) === null || B === void 0 || B.call(Q), this.committedCallIndex = A;
            for (let G = 0; G < this.underlyingCalls.length; G++) {
                if (G === A) continue;
                if (this.underlyingCalls[G].state === "COMPLETED") continue;
                this.underlyingCalls[G].state = "COMPLETED", this.underlyingCalls[G].call.cancelWithStatus(i41.Status.CANCELLED, "Discarded in favor of other hedged attempt")
            }
            this.clearSentMessages()
        }
        commitCallWithMostMessages() {
            if (this.state === "COMMITTED") return;
            let A = -1,
                Q = -1;
            for (let [B, G] of this.underlyingCalls.entries())
                if (G.state === "ACTIVE" && G.nextMessageToSend > A) A = G.nextMessageToSend, Q = B;
            if (Q === -1) this.state = "TRANSPARENT_ONLY";
            else this.commitCall(Q)
        }
        isStatusCodeInList(A, Q) {
            return A.some((B) => {
                var G;
                return B === Q || B.toString().toLowerCase() === ((G = i41.Status[Q]) === null || G === void 0 ? void 0 : G.toLowerCase())
            })
        }
        getNextRetryJitter() {
            return Math.random() * 0.3999999999999999 + 0.8
        }
        getNextRetryBackoffMs() {
            var A;
            let Q = (A = this.callConfig) === null || A === void 0 ? void 0 : A.methodConfig.retryPolicy;
            if (!Q) return 0;
            let G = this.getNextRetryJitter() * this.nextRetryBackoffSec * 1000,
                Z = Number(Q.maxBackoff.substring(0, Q.maxBackoff.length - 1));
            return this.nextRetryBackoffSec = Math.min(this.nextRetryBackoffSec * Q.backoffMultiplier, Z), G
        }
        maybeRetryCall(A, Q) {
            if (this.state !== "RETRY") {
                Q(!1);
                return
            }
            if (this.attempts >= this.maxAttempts) {
                Q(!1);
                return
            }
            let B;
            if (A === null) B = this.getNextRetryBackoffMs();
            else if (A < 0) {
                this.state = "TRANSPARENT_ONLY", Q(!1);
                return
            } else B = A, this.nextRetryBackoffSec = this.initialRetryBackoffSec;
            setTimeout(() => {
                var G, Z;
                if (this.state !== "RETRY") {
                    Q(!1);
                    return
                }
                if ((Z = (G = this.retryThrottler) === null || G === void 0 ? void 0 : G.canRetryCall()) !== null && Z !== void 0 ? Z : !0) Q(!0), this.attempts += 1, this.startNewAttempt();
                else this.trace("Retry attempt denied by throttling policy"), Q(!1)
            }, B)
        }
        countActiveCalls() {
            let A = 0;
            for (let Q of this.underlyingCalls)
                if ((Q === null || Q === void 0 ? void 0 : Q.state) === "ACTIVE") A += 1;
            return A
        }
        handleProcessedStatus(A, Q, B) {
            var G, Z, I;
            switch (this.state) {
                case "COMMITTED":
                case "NO_RETRY":
                case "TRANSPARENT_ONLY":
                    this.commitCall(Q), this.reportStatus(A);
                    break;
                case "HEDGING":
                    if (this.isStatusCodeInList((G = this.callConfig.methodConfig.hedgingPolicy.nonFatalStatusCodes) !== null && G !== void 0 ? G : [], A.code)) {
                        (Z = this.retryThrottler) === null || Z === void 0 || Z.addCallFailed();
                        let Y;
                        if (B === null) Y = 0;
                        else if (B < 0) {
                            this.state = "TRANSPARENT_ONLY", this.commitCall(Q), this.reportStatus(A);
                            return
                        } else Y = B;
                        setTimeout(() => {
                            if (this.maybeStartHedgingAttempt(), this.countActiveCalls() === 0) this.commitCall(Q), this.reportStatus(A)
                        }, Y)
                    } else this.commitCall(Q), this.reportStatus(A);
                    break;
                case "RETRY":
                    if (this.isStatusCodeInList(this.callConfig.methodConfig.retryPolicy.retryableStatusCodes, A.code))(I = this.retryThrottler) === null || I === void 0 || I.addCallFailed(), this.maybeRetryCall(B, (Y) => {
                        if (!Y) this.commitCall(Q), this.reportStatus(A)
                    });
                    else this.commitCall(Q), this.reportStatus(A);
                    break
            }
        }
        getPushback(A) {
            let Q = A.get("grpc-retry-pushback-ms");
            if (Q.length === 0) return null;
            try {
                return parseInt(Q[0])
            } catch (B) {
                return -1
            }
        }
        handleChildStatus(A, Q) {
            var B;
            if (this.underlyingCalls[Q].state === "COMPLETED") return;
            if (this.trace("state=" + this.state + " handling status with progress " + A.progress + " from child [" + this.underlyingCalls[Q].call.getCallNumber() + "] in state " + this.underlyingCalls[Q].state), this.underlyingCalls[Q].state = "COMPLETED", A.code === i41.Status.OK) {
                (B = this.retryThrottler) === null || B === void 0 || B.addCallSucceeded(), this.commitCall(Q), this.reportStatus(A);
                return
            }
            if (this.state === "NO_RETRY") {
                this.commitCall(Q), this.reportStatus(A);
                return
            }
            if (this.state === "COMMITTED") {
                this.reportStatus(A);
                return
            }
            let G = this.getPushback(A.metadata);
            switch (A.progress) {
                case "NOT_STARTED":
                    this.startNewAttempt();
                    break;
                case "REFUSED":
                    if (this.transparentRetryUsed) this.handleProcessedStatus(A, Q, G);
                    else this.transparentRetryUsed = !0, this.startNewAttempt();
                    break;
                case "DROP":
                    this.commitCall(Q), this.reportStatus(A);
                    break;
                case "PROCESSED":
                    this.handleProcessedStatus(A, Q, G);
                    break
            }
        }
        maybeStartHedgingAttempt() {
            if (this.state !== "HEDGING") return;
            if (!this.callConfig.methodConfig.hedgingPolicy) return;
            if (this.attempts >= this.maxAttempts) return;
            this.attempts += 1, this.startNewAttempt(), this.maybeStartHedgingTimer()
        }
        maybeStartHedgingTimer() {
            var A, Q, B;
            if (this.hedgingTimer) clearTimeout(this.hedgingTimer);
            if (this.state !== "HEDGING") return;
            if (!this.callConfig.methodConfig.hedgingPolicy) return;
            let G = this.callConfig.methodConfig.hedgingPolicy;
            if (this.attempts >= this.maxAttempts) return;
            let Z = (A = G.hedgingDelay) !== null && A !== void 0 ? A : "0s",
                I = Number(Z.substring(0, Z.length - 1));
            this.hedgingTimer = setTimeout(() => {
                this.maybeStartHedgingAttempt()
            }, I * 1000), (B = (Q = this.hedgingTimer).unref) === null || B === void 0 || B.call(Q)
        }
        startNewAttempt() {
            let A = this.channel.createLoadBalancingCall(this.callConfig, this.methodName, this.host, this.credentials, this.deadline);
            this.trace("Created child call [" + A.getCallNumber() + "] for attempt " + this.attempts);
            let Q = this.underlyingCalls.length;
            this.underlyingCalls.push({
                state: "ACTIVE",
                call: A,
                nextMessageToSend: 0,
                startTime: new Date
            });
            let B = this.attempts - 1,
                G = this.initialMetadata.clone();
            if (B > 0) G.set(A90, `${B}`);
            let Z = !1;
            if (A.start(G, {
                    onReceiveMetadata: (I) => {
                        if (this.trace("Received metadata from child [" + A.getCallNumber() + "]"), this.commitCall(Q), Z = !0, B > 0) I.set(A90, `${B}`);
                        if (this.underlyingCalls[Q].state === "ACTIVE") this.listener.onReceiveMetadata(I)
                    },
                    onReceiveMessage: (I) => {
                        if (this.trace("Received message from child [" + A.getCallNumber() + "]"), this.commitCall(Q), this.underlyingCalls[Q].state === "ACTIVE") this.listener.onReceiveMessage(I)
                    },
                    onReceiveStatus: (I) => {
                        if (this.trace("Received status from child [" + A.getCallNumber() + "]"), !Z && B > 0) I.metadata.set(A90, `${B}`);
                        this.handleChildStatus(I, Q)
                    }
                }), this.sendNextChildMessage(Q), this.readStarted) A.startRead()
        }
        start(A, Q) {
            this.trace("start called"), this.listener = Q, this.initialMetadata = A, this.attempts += 1, this.startNewAttempt(), this.maybeStartHedgingTimer()
        }
        handleChildWriteCompleted(A) {
            var Q, B;
            let G = this.underlyingCalls[A],
                Z = G.nextMessageToSend;
            (B = (Q = this.getBufferEntry(Z)).callback) === null || B === void 0 || B.call(Q), this.clearSentMessages(), G.nextMessageToSend += 1, this.sendNextChildMessage(A)
        }
        sendNextChildMessage(A) {
            let Q = this.underlyingCalls[A];
            if (Q.state === "COMPLETED") return;
            if (this.getBufferEntry(Q.nextMessageToSend)) {
                let B = this.getBufferEntry(Q.nextMessageToSend);
                switch (B.entryType) {
                    case "MESSAGE":
                        Q.call.sendMessageWithContext({
                            callback: (G) => {
                                this.handleChildWriteCompleted(A)
                            }
                        }, B.message.message);
                        break;
                    case "HALF_CLOSE":
                        Q.nextMessageToSend += 1, Q.call.halfClose();
                        break;
                    case "FREED":
                        break
                }
            }
        }
        sendMessageWithContext(A, Q) {
            var B;
            this.trace("write() called with message of length " + Q.length);
            let G = {
                    message: Q,
                    flags: A.flags
                },
                Z = this.getNextBufferIndex(),
                I = {
                    entryType: "MESSAGE",
                    message: G,
                    allocated: this.bufferTracker.allocate(Q.length, this.callNumber)
                };
            if (this.writeBuffer.push(I), I.allocated) {
                (B = A.callback) === null || B === void 0 || B.call(A);
                for (let [Y, J] of this.underlyingCalls.entries())
                    if (J.state === "ACTIVE" && J.nextMessageToSend === Z) J.call.sendMessageWithContext({
                        callback: (W) => {
                            this.handleChildWriteCompleted(Y)
                        }
                    }, Q)
            } else {
                if (this.commitCallWithMostMessages(), this.committedCallIndex === null) return;
                let Y = this.underlyingCalls[this.committedCallIndex];
                if (I.callback = A.callback, Y.state === "ACTIVE" && Y.nextMessageToSend === Z) Y.call.sendMessageWithContext({
                    callback: (J) => {
                        this.handleChildWriteCompleted(this.committedCallIndex)
                    }
                }, Q)
            }
        }
        startRead() {
            this.trace("startRead called"), this.readStarted = !0;
            for (let A of this.underlyingCalls)
                if ((A === null || A === void 0 ? void 0 : A.state) === "ACTIVE") A.call.startRead()
        }
        halfClose() {
            this.trace("halfClose called");
            let A = this.getNextBufferIndex();
            this.writeBuffer.push({
                entryType: "HALF_CLOSE",
                allocated: !1
            });
            for (let Q of this.underlyingCalls)
                if ((Q === null || Q === void 0 ? void 0 : Q.state) === "ACTIVE" && Q.nextMessageToSend === A) Q.nextMessageToSend += 1, Q.call.halfClose()
        }
        setCredentials(A) {
            throw Error("Method not implemented.")
        }
        getMethod() {
            return this.methodName
        }
        getHost() {
            return this.host
        }
        getAuthContext() {
            if (this.committedCallIndex !== null) return this.underlyingCalls[this.committedCallIndex].call.getAuthContext();
            else return null
        }
    }
    IU2.RetryingCall = ZU2
});
var POA = U((XU2) => {
    Object.defineProperty(XU2, "__esModule", {
        value: !0
    });
    XU2.BaseSubchannelWrapper = void 0;
    class WU2 {
        constructor(A) {
            this.child = A, this.healthy = !0, this.healthListeners = new Set, this.refcount = 0, this.dataWatchers = new Set, A.addHealthStateWatcher((Q) => {
                if (this.healthy) this.updateHealthListeners()
            })
        }
        updateHealthListeners() {
            for (let A of this.healthListeners) A(this.isHealthy())
        }
        getConnectivityState() {
            return this.child.getConnectivityState()
        }
        addConnectivityStateListener(A) {
            this.child.addConnectivityStateListener(A)
        }
        removeConnectivityStateListener(A) {
            this.child.removeConnectivityStateListener(A)
        }
        startConnecting() {
            this.child.startConnecting()
        }
        getAddress() {
            return this.child.getAddress()
        }
        throttleKeepalive(A) {
            this.child.throttleKeepalive(A)
        }
        ref() {
            this.child.ref(), this.refcount += 1
        }
        unref() {
            if (this.child.unref(), this.refcount -= 1, this.refcount === 0) this.destroy()
        }
        destroy() {
            for (let A of this.dataWatchers) A.destroy()
        }
        getChannelzRef() {
            return this.child.getChannelzRef()
        }
        isHealthy() {
            return this.healthy && this.child.isHealthy()
        }
        addHealthStateWatcher(A) {
            this.healthListeners.add(A)
        }
        removeHealthStateWatcher(A) {
            this.healthListeners.delete(A)
        }
        addDataWatcher(A) {
            A.setSubchannel(this.getRealSubchannel()), this.dataWatchers.add(A)
        }
        setHealthy(A) {
            if (A !== this.healthy) {
                if (this.healthy = A, this.child.isHealthy()) this.updateHealthListeners()
            }
        }
        getRealSubchannel() {
            return this.child.getRealSubchannel()
        }
        realSubchannelEquals(A) {
            return this.getRealSubchannel() === A.getRealSubchannel()
        }
        getCallCredentials() {
            return this.child.getCallCredentials()
        }
        getChannel() {
            return this.child.getChannel()
        }
    }
    XU2.BaseSubchannelWrapper = WU2
});
var Z90 = U((EU2) => {
    Object.defineProperty(EU2, "__esModule", {
        value: !0
    });
    EU2.InternalChannel = EU2.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = void 0;
    var FT5 = gYA(),
        VT5 = mD2(),
        KT5 = pz2(),
        G90 = wh(),
        DT5 = BK(),
        ci = K6(),
        HT5 = f41(),
        CT5 = g20(),
        VU2 = JP(),
        n41 = XZ(),
        ET5 = a20(),
        a41 = mE(),
        IO = dE(),
        jOA = mi(),
        zT5 = rz2(),
        UT5 = AJA(),
        $T5 = QU2(),
        Q90 = v41(),
        wT5 = qOA(),
        B90 = JU2(),
        qT5 = POA(),
        NT5 = 2147483647,
        LT5 = 1000,
        MT5 = 1800000,
        s41 = new Map,
        OT5 = 16777216,
        RT5 = 1048576;
    class KU2 extends qT5.BaseSubchannelWrapper {
        constructor(A, Q) {
            super(A);
            this.channel = Q, this.refCount = 0, this.subchannelStateListener = (B, G, Z, I) => {
                Q.throttleKeepalive(I)
            }
        }
        ref() {
            if (this.refCount === 0) this.child.addConnectivityStateListener(this.subchannelStateListener), this.channel.addWrappedSubchannel(this);
            this.child.ref(), this.refCount += 1
        }
        unref() {
            if (this.child.unref(), this.refCount -= 1, this.refCount <= 0) this.child.removeConnectivityStateListener(this.subchannelStateListener), this.channel.removeWrappedSubchannel(this)
        }
    }
    class DU2 {
        pick(A) {
            return {
                pickResultType: G90.PickResultType.DROP,
                status: {
                    code: ci.Status.UNAVAILABLE,
                    details: "Channel closed before call started",
                    metadata: new DT5.Metadata
                },
                subchannel: null,
                onCallStarted: null,
                onCallEnded: null
            }
        }
    }
    EU2.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = "grpc.internal.no_subchannel";
    class HU2 {
        constructor(A) {
            this.target = A, this.trace = new jOA.ChannelzTrace, this.callTracker = new jOA.ChannelzCallTracker, this.childrenTracker = new jOA.ChannelzChildrenTracker, this.state = IO.ConnectivityState.IDLE
        }
        getChannelzInfoCallback() {
            return () => {
                return {
                    target: this.target,
                    state: this.state,
                    trace: this.trace,
                    callTracker: this.callTracker,
                    children: this.childrenTracker.getChildLists()
                }
            }
        }
    }
    class CU2 {
        constructor(A, Q, B) {
            var G, Z, I, Y, J, W;
            if (this.credentials = Q, this.options = B, this.connectivityState = IO.ConnectivityState.IDLE, this.currentPicker = new G90.UnavailablePicker, this.configSelectionQueue = [], this.pickQueue = [], this.connectivityStateWatchers = [], this.callRefTimer = null, this.configSelector = null, this.currentResolutionError = null, this.wrappedSubchannels = new Set, this.callCount = 0, this.idleTimer = null, this.channelzEnabled = !0, this.randomChannelId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER), typeof A !== "string") throw TypeError("Channel target must be a string");
            if (!(Q instanceof FT5.ChannelCredentials)) throw TypeError("Channel credentials must be a ChannelCredentials object");
            if (B) {
                if (typeof B !== "object") throw TypeError("Channel options must be an object")
            }
            this.channelzInfoTracker = new HU2(A);
            let X = (0, a41.parseUri)(A);
            if (X === null) throw Error(`Could not parse target name "${A}"`);
            let F = (0, VU2.mapUriDefaultScheme)(X);
            if (F === null) throw Error(`Could not find a default scheme for target name "${A}"`);
            if (this.options["grpc.enable_channelz"] === 0) this.channelzEnabled = !1;
            if (this.channelzRef = (0, jOA.registerChannelzChannel)(A, this.channelzInfoTracker.getChannelzInfoCallback(), this.channelzEnabled), this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Channel created");
            if (this.options["grpc.default_authority"]) this.defaultAuthority = this.options["grpc.default_authority"];
            else this.defaultAuthority = (0, VU2.getDefaultAuthority)(F);
            let V = (0, ET5.mapProxyName)(F, B);
            this.target = V.target, this.options = Object.assign({}, this.options, V.extraOptions), this.subchannelPool = (0, KT5.getSubchannelPool)(((G = this.options["grpc.use_local_subchannel_pool"]) !== null && G !== void 0 ? G : 0) === 0), this.retryBufferTracker = new B90.MessageBufferTracker((Z = this.options["grpc.retry_buffer_size"]) !== null && Z !== void 0 ? Z : OT5, (I = this.options["grpc.per_rpc_retry_buffer_size"]) !== null && I !== void 0 ? I : RT5), this.keepaliveTime = (Y = this.options["grpc.keepalive_time_ms"]) !== null && Y !== void 0 ? Y : -1, this.idleTimeoutMs = Math.max((J = this.options["grpc.client_idle_timeout_ms"]) !== null && J !== void 0 ? J : MT5, LT5);
            let K = {
                createSubchannel: (H, C) => {
                    let E = {};
                    for (let [N, q] of Object.entries(C))
                        if (!N.startsWith(EU2.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX)) E[N] = q;
                    let z = this.subchannelPool.getOrCreateSubchannel(this.target, H, E, this.credentials);
                    if (z.throttleKeepalive(this.keepaliveTime), this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Created subchannel or used existing subchannel", z.getChannelzRef());
                    return new KU2(z, this)
                },
                updateState: (H, C) => {
                    this.currentPicker = C;
                    let E = this.pickQueue.slice();
                    if (this.pickQueue = [], E.length > 0) this.callRefTimerUnref();
                    for (let z of E) z.doPick();
                    this.updateState(H)
                },
                requestReresolution: () => {
                    throw Error("Resolving load balancer should never call requestReresolution")
                },
                addChannelzChild: (H) => {
                    if (this.channelzEnabled) this.channelzInfoTracker.childrenTracker.refChild(H)
                },
                removeChannelzChild: (H) => {
                    if (this.channelzEnabled) this.channelzInfoTracker.childrenTracker.unrefChild(H)
                }
            };
            this.resolvingLoadBalancer = new VT5.ResolvingLoadBalancer(this.target, K, this.options, (H, C) => {
                var E;
                if (H.retryThrottling) s41.set(this.getTarget(), new B90.RetryThrottler(H.retryThrottling.maxTokens, H.retryThrottling.tokenRatio, s41.get(this.getTarget())));
                else s41.delete(this.getTarget());
                if (this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Address resolution succeeded");
                (E = this.configSelector) === null || E === void 0 || E.unref(), this.configSelector = C, this.currentResolutionError = null, process.nextTick(() => {
                    let z = this.configSelectionQueue;
                    if (this.configSelectionQueue = [], z.length > 0) this.callRefTimerUnref();
                    for (let w of z) w.getConfig()
                })
            }, (H) => {
                if (this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_WARNING", "Address resolution failed with code " + H.code + ' and details "' + H.details + '"');
                if (this.configSelectionQueue.length > 0) this.trace("Name resolution failed with calls queued for config selection");
                if (this.configSelector === null) this.currentResolutionError = Object.assign(Object.assign({}, (0, wT5.restrictControlPlaneStatusCode)(H.code, H.details)), {
                    metadata: H.metadata
                });
                let C = this.configSelectionQueue;
                if (this.configSelectionQueue = [], C.length > 0) this.callRefTimerUnref();
                for (let E of C) E.reportResolverError(H)
            }), this.filterStackFactory = new HT5.FilterStackFactory([new CT5.CompressionFilterFactory(this, this.options)]), this.trace("Channel constructed with options " + JSON.stringify(B, void 0, 2));
            let D = Error();
            if ((0, n41.isTracerEnabled)("channel_stacktrace"))(0, n41.trace)(ci.LogVerbosity.DEBUG, "channel_stacktrace", "(" + this.channelzRef.id + `) Channel constructed 
` + ((W = D.stack) === null || W === void 0 ? void 0 : W.substring(D.stack.indexOf(`
`) + 1)));
            this.lastActivityTimestamp = new Date
        }
        trace(A, Q) {
            (0, n41.trace)(Q !== null && Q !== void 0 ? Q : ci.LogVerbosity.DEBUG, "channel", "(" + this.channelzRef.id + ") " + (0, a41.uriToString)(this.target) + " " + A)
        }
        callRefTimerRef() {
            var A, Q, B, G;
            if (!this.callRefTimer) this.callRefTimer = setInterval(() => {}, NT5);
            if (!((Q = (A = this.callRefTimer).hasRef) === null || Q === void 0 ? void 0 : Q.call(A))) this.trace("callRefTimer.ref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length), (G = (B = this.callRefTimer).ref) === null || G === void 0 || G.call(B)
        }
        callRefTimerUnref() {
            var A, Q, B;
            if (!((A = this.callRefTimer) === null || A === void 0 ? void 0 : A.hasRef) || this.callRefTimer.hasRef()) this.trace("callRefTimer.unref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length), (B = (Q = this.callRefTimer) === null || Q === void 0 ? void 0 : Q.unref) === null || B === void 0 || B.call(Q)
        }
        removeConnectivityStateWatcher(A) {
            let Q = this.connectivityStateWatchers.findIndex((B) => B === A);
            if (Q >= 0) this.connectivityStateWatchers.splice(Q, 1)
        }
        updateState(A) {
            if ((0, n41.trace)(ci.LogVerbosity.DEBUG, "connectivity_state", "(" + this.channelzRef.id + ") " + (0, a41.uriToString)(this.target) + " " + IO.ConnectivityState[this.connectivityState] + " -> " + IO.ConnectivityState[A]), this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Connectivity state change to " + IO.ConnectivityState[A]);
            this.connectivityState = A, this.channelzInfoTracker.state = A;
            let Q = this.connectivityStateWatchers.slice();
            for (let B of Q)
                if (A !== B.currentState) {
                    if (B.timer) clearTimeout(B.timer);
                    this.removeConnectivityStateWatcher(B), B.callback()
                } if (A !== IO.ConnectivityState.TRANSIENT_FAILURE) this.currentResolutionError = null
        }
        throttleKeepalive(A) {
            if (A > this.keepaliveTime) {
                this.keepaliveTime = A;
                for (let Q of this.wrappedSubchannels) Q.throttleKeepalive(A)
            }
        }
        addWrappedSubchannel(A) {
            this.wrappedSubchannels.add(A)
        }
        removeWrappedSubchannel(A) {
            this.wrappedSubchannels.delete(A)
        }
        doPick(A, Q) {
            return this.currentPicker.pick({
                metadata: A,
                extraPickInfo: Q
            })
        }
        queueCallForPick(A) {
            this.pickQueue.push(A), this.callRefTimerRef()
        }
        getConfig(A, Q) {
            if (this.connectivityState !== IO.ConnectivityState.SHUTDOWN) this.resolvingLoadBalancer.exitIdle();
            if (this.configSelector) return {
                type: "SUCCESS",
                config: this.configSelector.invoke(A, Q, this.randomChannelId)
            };
            else if (this.currentResolutionError) return {
                type: "ERROR",
                error: this.currentResolutionError
            };
            else return {
                type: "NONE"
            }
        }
        queueCallForConfig(A) {
            this.configSelectionQueue.push(A), this.callRefTimerRef()
        }
        enterIdle() {
            if (this.resolvingLoadBalancer.destroy(), this.updateState(IO.ConnectivityState.IDLE), this.currentPicker = new G90.QueuePicker(this.resolvingLoadBalancer), this.idleTimer) clearTimeout(this.idleTimer), this.idleTimer = null;
            if (this.callRefTimer) clearInterval(this.callRefTimer), this.callRefTimer = null
        }
        startIdleTimeout(A) {
            var Q, B;
            this.idleTimer = setTimeout(() => {
                if (this.callCount > 0) {
                    this.startIdleTimeout(this.idleTimeoutMs);
                    return
                }
                let Z = new Date().valueOf() - this.lastActivityTimestamp.valueOf();
                if (Z >= this.idleTimeoutMs) this.trace("Idle timer triggered after " + this.idleTimeoutMs + "ms of inactivity"), this.enterIdle();
                else this.startIdleTimeout(this.idleTimeoutMs - Z)
            }, A), (B = (Q = this.idleTimer).unref) === null || B === void 0 || B.call(Q)
        }
        maybeStartIdleTimer() {
            if (this.connectivityState !== IO.ConnectivityState.SHUTDOWN && !this.idleTimer) this.startIdleTimeout(this.idleTimeoutMs)
        }
        onCallStart() {
            if (this.channelzEnabled) this.channelzInfoTracker.callTracker.addCallStarted();
            this.callCount += 1
        }
        onCallEnd(A) {
            if (this.channelzEnabled)
                if (A.code === ci.Status.OK) this.channelzInfoTracker.callTracker.addCallSucceeded();
                else this.channelzInfoTracker.callTracker.addCallFailed();
            this.callCount -= 1, this.lastActivityTimestamp = new Date, this.maybeStartIdleTimer()
        }
        createLoadBalancingCall(A, Q, B, G, Z) {
            let I = (0, Q90.getNextCallNumber)();
            return this.trace("createLoadBalancingCall [" + I + '] method="' + Q + '"'), new zT5.LoadBalancingCall(this, A, Q, B, G, Z, I)
        }
        createRetryingCall(A, Q, B, G, Z) {
            let I = (0, Q90.getNextCallNumber)();
            return this.trace("createRetryingCall [" + I + '] method="' + Q + '"'), new B90.RetryingCall(this, A, Q, B, G, Z, I, this.retryBufferTracker, s41.get(this.getTarget()))
        }
        createResolvingCall(A, Q, B, G, Z) {
            let I = (0, Q90.getNextCallNumber)();
            this.trace("createResolvingCall [" + I + '] method="' + A + '", deadline=' + (0, UT5.deadlineToString)(Q));
            let Y = {
                    deadline: Q,
                    flags: Z !== null && Z !== void 0 ? Z : ci.Propagate.DEFAULTS,
                    host: B !== null && B !== void 0 ? B : this.defaultAuthority,
                    parentCall: G
                },
                J = new $T5.ResolvingCall(this, A, Y, this.filterStackFactory.clone(), I);
            return this.onCallStart(), J.addStatusWatcher((W) => {
                this.onCallEnd(W)
            }), J
        }
        close() {
            var A;
            this.resolvingLoadBalancer.destroy(), this.updateState(IO.ConnectivityState.SHUTDOWN), this.currentPicker = new DU2;
            for (let Q of this.configSelectionQueue) Q.cancelWithStatus(ci.Status.UNAVAILABLE, "Channel closed before call started");
            this.configSelectionQueue = [];
            for (let Q of this.pickQueue) Q.cancelWithStatus(ci.Status.UNAVAILABLE, "Channel closed before call started");
            if (this.pickQueue = [], this.callRefTimer) clearInterval(this.callRefTimer);
            if (this.idleTimer) clearTimeout(this.idleTimer);
            if (this.channelzEnabled)(0, jOA.unregisterChannelzRef)(this.channelzRef);
            this.subchannelPool.unrefUnusedSubchannels(), (A = this.configSelector) === null || A === void 0 || A.unref(), this.configSelector = null
        }
        getTarget() {
            return (0, a41.uriToString)(this.target)
        }
        getConnectivityState(A) {
            let Q = this.connectivityState;
            if (A) this.resolvingLoadBalancer.exitIdle(), this.lastActivityTimestamp = new Date, this.maybeStartIdleTimer();
            return Q
        }
        watchConnectivityState(A, Q, B) {
            if (this.connectivityState === IO.ConnectivityState.SHUTDOWN) throw Error("Channel has been shut down");
            let G = null;
            if (Q !== 1 / 0) {
                let I = Q instanceof Date ? Q : new Date(Q),
                    Y = new Date;
                if (Q === -1 / 0 || I <= Y) {
                    process.nextTick(B, Error("Deadline passed without connectivity state change"));
                    return
                }
                G = setTimeout(() => {
                    this.removeConnectivityStateWatcher(Z), B(Error("Deadline passed without connectivity state change"))
                }, I.getTime() - Y.getTime())
            }
            let Z = {
                currentState: A,
                callback: B,
                timer: G
            };
            this.connectivityStateWatchers.push(Z)
        }
        getChannelzRef() {
            return this.channelzRef
        }
        createCall(A, Q, B, G, Z) {
            if (typeof A !== "string") throw TypeError("Channel#createCall: method must be a string");
            if (!(typeof Q === "number" || Q instanceof Date)) throw TypeError("Channel#createCall: deadline must be a number or Date");
            if (this.connectivityState === IO.ConnectivityState.SHUTDOWN) throw Error("Channel has been shut down");
            return this.createResolvingCall(A, Q, B, G, Z)
        }
        getOptions() {
            return this.options
        }
    }
    EU2.InternalChannel = CU2
});
var hB0 = U((wU2) => {
    Object.defineProperty(wU2, "__esModule", {
        value: !0
    });
    wU2.ChannelImplementation = void 0;
    var TT5 = gYA(),
        PT5 = Z90();
    class $U2 {
        constructor(A, Q, B) {
            if (typeof A !== "string") throw TypeError("Channel target must be a string");
            if (!(Q instanceof TT5.ChannelCredentials)) throw TypeError("Channel credentials must be a ChannelCredentials object");
            if (B) {
                if (typeof B !== "object") throw TypeError("Channel options must be an object")
            }
            this.internalChannel = new PT5.InternalChannel(A, Q, B)
        }
        close() {
            this.internalChannel.close()
        }