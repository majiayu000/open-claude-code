/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: git_028.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (10次) = moduleWrapper(fn) - CommonJS module wrapper
 *   UA       (4次) = require(moduleName) - Node.js require
 *   L        (3次) = lazyLoader(fn) - Lazy module loader
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 28/34
 * Lines: 319936 - 321428 (1493 lines)
 * Original file: cli.js
 */

                if ((0, pi.isTcpSubchannelAddress)(Z[0]) && Z[0].port === 0) {
                    let Y = await this.bindOneAddress(Z[0], I);
                    if (Y.error) {
                        let J = await this.bindManyPorts(Z.slice(1), I);
                        return Object.assign(Object.assign({}, J), {
                            errors: [Y.error, ...J.errors]
                        })
                    } else {
                        let J = Z.slice(1).map((F) => (0, pi.isTcpSubchannelAddress)(F) ? {
                                host: F.host,
                                port: Y.port
                            } : F),
                            W = await Promise.all(J.map((F) => this.bindOneAddress(F, I))),
                            X = [Y, ...W];
                        return {
                            count: X.filter((F) => F.error === void 0).length,
                            port: Y.port,
                            errors: X.filter((F) => F.error).map((F) => F.error)
                        }
                    }
                } else {
                    let Y = await Promise.all(Z.map((J) => this.bindOneAddress(J, I)));
                    return {
                        count: Y.filter((J) => J.error === void 0).length,
                        port: Y[0].port,
                        errors: Y.filter((J) => J.error).map((J) => J.error)
                    }
                }
            }
            async bindAddressList(Z, I) {
                let Y = await this.bindManyPorts(Z, I);
                if (Y.count > 0) {
                    if (Y.count < Z.length) WJA.log(yW.LogVerbosity.INFO, `WARNING Only ${Y.count} addresses added out of total ${Z.length} resolved`);
                    return Y.port
                } else {
                    let J = `No address added out of total ${Z.length} resolved`;
                    throw WJA.log(yW.LogVerbosity.ERROR, J), Error(`${J} errors: [${Y.errors.join(",")}]`)
                }
            }
            resolvePort(Z) {
                return new Promise((I, Y) => {
                    let J = !1,
                        W = (F, V, K, D) => {
                            if (J) return !0;
                            if (J = !0, !F.ok) return Y(Error(F.error.details)), !0;
                            let H = [].concat(...F.value.map((C) => C.addresses));
                            if (H.length === 0) return Y(Error(`No addresses resolved for port ${Z}`)), !0;
                            return I(H), !0
                        };
                    (0, J$2.createResolver)(Z, W, this.options).updateResolution()
                })
            }
            async bindPort(Z, I) {
                let Y = await this.resolvePort(Z);
                if (I.cancelled) throw this.completeUnbind(I), Error("bindAsync operation cancelled by unbind call");
                let J = await this.bindAddressList(Y, I);
                if (I.cancelled) throw this.completeUnbind(I), Error("bindAsync operation cancelled by unbind call");
                return J
            }
            normalizePort(Z) {
                let I = (0, DP.parseUri)(Z);
                if (I === null) throw Error(`Could not parse port "${Z}"`);
                let Y = (0, J$2.mapUriDefaultScheme)(I);
                if (Y === null) throw Error(`Could not get a default scheme for port "${Z}"`);
                return Y
            }
            bindAsync(Z, I, Y) {
                if (this.shutdown) throw Error("bindAsync called after shutdown");
                if (typeof Z !== "string") throw TypeError("port must be a string");
                if (I === null || !(I instanceof U90.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
                if (typeof Y !== "function") throw TypeError("callback must be a function");
                this.trace("bindAsync port=" + Z);
                let J = this.normalizePort(Z),
                    W = (K, D) => {
                        process.nextTick(() => Y(K, D))
                    },
                    X = this.boundPorts.get((0, DP.uriToString)(J));
                if (X) {
                    if (!I._equals(X.credentials)) {
                        W(Error(`${Z} already bound with incompatible credentials`), 0);
                        return
                    }
                    if (X.cancelled = !1, X.completionPromise) X.completionPromise.then((K) => Y(null, K), (K) => Y(K, 0));
                    else W(null, X.portNumber);
                    return
                }
                X = {
                    mapKey: (0, DP.uriToString)(J),
                    originalUri: J,
                    completionPromise: null,
                    cancelled: !1,
                    portNumber: 0,
                    credentials: I,
                    listeningServers: new Set
                };
                let F = (0, DP.splitHostPort)(J.path),
                    V = this.bindPort(J, X);
                if (X.completionPromise = V, (F === null || F === void 0 ? void 0 : F.port) === 0) V.then((K) => {
                    let D = {
                        scheme: J.scheme,
                        authority: J.authority,
                        path: (0, DP.combineHostPort)({
                            host: F.host,
                            port: K
                        })
                    };
                    X.mapKey = (0, DP.uriToString)(D), X.completionPromise = null, X.portNumber = K, this.boundPorts.set(X.mapKey, X), Y(null, K)
                }, (K) => {
                    Y(K, 0)
                });
                else this.boundPorts.set(X.mapKey, X), V.then((K) => {
                    X.completionPromise = null, X.portNumber = K, Y(null, K)
                }, (K) => {
                    Y(K, 0)
                })
            }
            registerInjectorToChannelz() {
                return (0, bF.registerChannelzSocket)("injector", () => {
                    return {
                        localAddress: null,
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
            experimentalCreateConnectionInjectorWithChannelzRef(Z, I, Y = !1) {
                if (Z === null || !(Z instanceof U90.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
                if (this.channelzEnabled) this.listenerChildrenTracker.refChild(I);
                let J = this.createHttp2Server(Z),
                    W = new Set;
                return this.http2Servers.set(J, {
                    channelzRef: I,
                    sessions: W,
                    ownsChannelzRef: Y
                }), {
                    injectConnection: (X) => {
                        J.emit("connection", X)
                    },
                    drain: (X) => {
                        var F, V;
                        for (let K of W) this.closeSession(K);
                        (V = (F = setTimeout(() => {
                            for (let K of W) K.destroy(tU.constants.NGHTTP2_CANCEL)
                        }, X)).unref) === null || V === void 0 || V.call(F)
                    },
                    destroy: () => {
                        this.closeServer(J);
                        for (let X of W) this.closeSession(X)
                    }
                }
            }
            createConnectionInjector(Z) {
                if (Z === null || !(Z instanceof U90.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
                let I = this.registerInjectorToChannelz();
                return this.experimentalCreateConnectionInjectorWithChannelzRef(Z, I, !0)
            }
            closeServer(Z, I) {
                this.trace("Closing server with address " + JSON.stringify(Z.address()));
                let Y = this.http2Servers.get(Z);
                Z.close(() => {
                    if (Y && Y.ownsChannelzRef) this.listenerChildrenTracker.unrefChild(Y.channelzRef), (0, bF.unregisterChannelzRef)(Y.channelzRef);
                    this.http2Servers.delete(Z), I === null || I === void 0 || I()
                })
            }
            closeSession(Z, I) {
                var Y;
                this.trace("Closing session initiated by " + ((Y = Z.socket) === null || Y === void 0 ? void 0 : Y.remoteAddress));
                let J = this.sessions.get(Z),
                    W = () => {
                        if (J) this.sessionChildrenTracker.unrefChild(J.ref), (0, bF.unregisterChannelzRef)(J.ref);
                        I === null || I === void 0 || I()
                    };
                if (Z.closed) queueMicrotask(W);
                else Z.close(W)
            }
            completeUnbind(Z) {
                for (let I of Z.listeningServers) {
                    let Y = this.http2Servers.get(I);
                    if (this.closeServer(I, () => {
                            Z.listeningServers.delete(I)
                        }), Y)
                        for (let J of Y.sessions) this.closeSession(J)
                }
                this.boundPorts.delete(Z.mapKey)
            }
            unbind(Z) {
                this.trace("unbind port=" + Z);
                let I = this.normalizePort(Z),
                    Y = (0, DP.splitHostPort)(I.path);
                if ((Y === null || Y === void 0 ? void 0 : Y.port) === 0) throw Error("Cannot unbind port 0");
                let J = this.boundPorts.get((0, DP.uriToString)(I));
                if (J)
                    if (this.trace("unbinding " + J.mapKey + " originally bound as " + (0, DP.uriToString)(J.originalUri)), J.completionPromise) J.cancelled = !0;
                    else this.completeUnbind(J)
            }
            drain(Z, I) {
                var Y, J;
                this.trace("drain port=" + Z + " graceTimeMs=" + I);
                let W = this.normalizePort(Z),
                    X = (0, DP.splitHostPort)(W.path);
                if ((X === null || X === void 0 ? void 0 : X.port) === 0) throw Error("Cannot drain port 0");
                let F = this.boundPorts.get((0, DP.uriToString)(W));
                if (!F) return;
                let V = new Set;
                for (let K of F.listeningServers) {
                    let D = this.http2Servers.get(K);
                    if (D)
                        for (let H of D.sessions) V.add(H), this.closeSession(H, () => {
                            V.delete(H)
                        })
                }(J = (Y = setTimeout(() => {
                    for (let K of V) K.destroy(tU.constants.NGHTTP2_CANCEL)
                }, I)).unref) === null || J === void 0 || J.call(Y)
            }
            forceShutdown() {
                for (let Z of this.boundPorts.values()) Z.cancelled = !0;
                this.boundPorts.clear();
                for (let Z of this.http2Servers.keys()) this.closeServer(Z);
                this.sessions.forEach((Z, I) => {
                    this.closeSession(I), I.destroy(tU.constants.NGHTTP2_CANCEL)
                }), this.sessions.clear(), (0, bF.unregisterChannelzRef)(this.channelzRef), this.shutdown = !0
            }
            register(Z, I, Y, J, W) {
                if (this.handlers.has(Z)) return !1;
                return this.handlers.set(Z, {
                    func: I,
                    serialize: Y,
                    deserialize: J,
                    type: W,
                    path: Z
                }), !0
            }
            unregister(Z) {
                return this.handlers.delete(Z)
            }
            start() {
                if (this.http2Servers.size === 0 || [...this.http2Servers.keys()].every((Z) => !Z.listening)) throw Error("server must be bound in order to start");
                if (this.started === !0) throw Error("server is already started");
                this.started = !0
            }
            tryShutdown(Z) {
                var I;
                let Y = (X) => {
                        (0, bF.unregisterChannelzRef)(this.channelzRef), Z(X)
                    },
                    J = 0;

                function W() {
                    if (J--, J === 0) Y()
                }
                this.shutdown = !0;
                for (let [X, F] of this.http2Servers.entries()) {
                    J++;
                    let V = F.channelzRef.name;
                    this.trace("Waiting for server " + V + " to close"), this.closeServer(X, () => {
                        this.trace("Server " + V + " finished closing"), W()
                    });
                    for (let K of F.sessions.keys()) {
                        J++;
                        let D = (I = K.socket) === null || I === void 0 ? void 0 : I.remoteAddress;
                        this.trace("Waiting for session " + D + " to close"), this.closeSession(K, () => {
                            this.trace("Session " + D + " finished closing"), W()
                        })
                    }
                }
                if (J === 0) Y()
            }
            addHttp2Port() {
                throw Error("Not yet implemented")
            }
            getChannelzRef() {
                return this.channelzRef
            }
            _verifyContentType(Z, I) {
                let Y = I[tU.constants.HTTP2_HEADER_CONTENT_TYPE];
                if (typeof Y !== "string" || !Y.startsWith("application/grpc")) return Z.respond({
                    [tU.constants.HTTP2_HEADER_STATUS]: tU.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
                }, {
                    endStream: !0
                }), !1;
                return !0
            }
            _retrieveHandler(Z) {
                K$2("Received call to method " + Z + " at address " + this.serverAddressString);
                let I = this.handlers.get(Z);
                if (I === void 0) return K$2("No handler registered for method " + Z + ". Sending UNIMPLEMENTED status."), null;
                return I
            }
            _respondWithError(Z, I, Y = null) {
                var J, W;
                let X = Object.assign({
                    "grpc-status": (J = Z.code) !== null && J !== void 0 ? J : yW.Status.INTERNAL,
                    "grpc-message": Z.details,
                    [tU.constants.HTTP2_HEADER_STATUS]: tU.constants.HTTP_STATUS_OK,
                    [tU.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
                }, (W = Z.metadata) === null || W === void 0 ? void 0 : W.toHttp2Headers());
                I.respond(X, {
                    endStream: !0
                }), this.callTracker.addCallFailed(), Y === null || Y === void 0 || Y.streamTracker.addCallFailed()
            }
            _channelzHandler(Z, I, Y) {
                this.onStreamOpened(I);
                let J = this.sessions.get(I.session);
                if (this.callTracker.addCallStarted(), J === null || J === void 0 || J.streamTracker.addCallStarted(), !this._verifyContentType(I, Y)) {
                    this.callTracker.addCallFailed(), J === null || J === void 0 || J.streamTracker.addCallFailed();
                    return
                }
                let W = Y[F$2],
                    X = this._retrieveHandler(W);
                if (!X) {
                    this._respondWithError(w90(W), I, J);
                    return
                }
                let F = {
                        addMessageSent: () => {
                            if (J) J.messagesSent += 1, J.lastMessageSentTimestamp = new Date
                        },
                        addMessageReceived: () => {
                            if (J) J.messagesReceived += 1, J.lastMessageReceivedTimestamp = new Date
                        },
                        onCallEnd: (K) => {
                            if (K.code === yW.Status.OK) this.callTracker.addCallSucceeded();
                            else this.callTracker.addCallFailed()
                        },
                        onStreamEnd: (K) => {
                            if (J)
                                if (K) J.streamTracker.addCallSucceeded();
                                else J.streamTracker.addCallFailed()
                        }
                    },
                    V = (0, W$2.getServerInterceptingCall)([...Z, ...this.interceptors], I, Y, F, X, this.options);
                if (!this._runHandlerForCall(V, X)) this.callTracker.addCallFailed(), J === null || J === void 0 || J.streamTracker.addCallFailed(), V.sendStatus({
                    code: yW.Status.INTERNAL,
                    details: `Unknown handler type: ${X.type}`
                })
            }
            _streamHandler(Z, I, Y) {
                if (this.onStreamOpened(I), this._verifyContentType(I, Y) !== !0) return;
                let J = Y[F$2],
                    W = this._retrieveHandler(J);
                if (!W) {
                    this._respondWithError(w90(J), I, null);
                    return
                }
                let X = (0, W$2.getServerInterceptingCall)([...Z, ...this.interceptors], I, Y, null, W, this.options);
                if (!this._runHandlerForCall(X, W)) X.sendStatus({
                    code: yW.Status.INTERNAL,
                    details: `Unknown handler type: ${W.type}`
                })
            }
            _runHandlerForCall(Z, I) {
                let {
                    type: Y
                } = I;
                if (Y === "unary") yP5(Z, I);
                else if (Y === "clientStream") xP5(Z, I);
                else if (Y === "serverStream") vP5(Z, I);
                else if (Y === "bidi") bP5(Z, I);
                else return !1;
                return !0
            }
            _setupHandlers(Z, I) {
                if (Z === null) return;
                let Y = Z.address(),
                    J = "null";
                if (Y)
                    if (typeof Y === "string") J = Y;
                    else J = Y.address + ":" + Y.port;
                this.serverAddressString = J;
                let W = this.channelzEnabled ? this._channelzHandler : this._streamHandler,
                    X = this.channelzEnabled ? this._channelzSessionHandler(Z) : this._sessionHandler(Z);
                Z.on("stream", W.bind(this, I)), Z.on("session", X)
            }
            _sessionHandler(Z) {
                return (I) => {
                    var Y, J;
                    (Y = this.http2Servers.get(Z)) === null || Y === void 0 || Y.sessions.add(I);
                    let W = null,
                        X = null,
                        F = null,
                        V = !1,
                        K = this.enableIdleTimeout(I);
                    if (this.maxConnectionAgeMs !== JJA) {
                        let z = this.maxConnectionAgeMs / 10,
                            w = Math.random() * z * 2 - z;
                        W = setTimeout(() => {
                            var N, q;
                            V = !0, this.trace("Connection dropped by max connection age: " + ((N = I.socket) === null || N === void 0 ? void 0 : N.remoteAddress));
                            try {
                                I.goaway(tU.constants.NGHTTP2_NO_ERROR, 2147483647, V$2)
                            } catch (R) {
                                I.destroy();
                                return
                            }
                            if (I.close(), this.maxConnectionAgeGraceMs !== JJA) X = setTimeout(() => {
                                I.destroy()
                            }, this.maxConnectionAgeGraceMs), (q = X.unref) === null || q === void 0 || q.call(X)
                        }, this.maxConnectionAgeMs + w), (J = W.unref) === null || J === void 0 || J.call(W)
                    }
                    let D = () => {
                            if (F) clearTimeout(F), F = null
                        },
                        H = () => {
                            return !I.destroyed && this.keepaliveTimeMs < $90 && this.keepaliveTimeMs > 0
                        },
                        C, E = () => {
                            var z;
                            if (!H()) return;
                            this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), F = setTimeout(() => {
                                D(), C()
                            }, this.keepaliveTimeMs), (z = F.unref) === null || z === void 0 || z.call(F)
                        };
                    C = () => {
                        var z;
                        if (!H()) return;
                        this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
                        let w = "";
                        try {
                            if (!I.ping((q, R, P) => {
                                    if (D(), q) this.keepaliveTrace("Ping failed with error: " + q.message), V = !0, I.close();
                                    else this.keepaliveTrace("Received ping response"), E()
                                })) w = "Ping returned false"
                        } catch (N) {
                            w = (N instanceof Error ? N.message : "") || "Unknown error"
                        }
                        if (w) {
                            this.keepaliveTrace("Ping send failed: " + w), this.trace("Connection dropped due to ping send error: " + w), V = !0, I.close();
                            return
                        }
                        F = setTimeout(() => {
                            D(), this.keepaliveTrace("Ping timeout passed without response"), this.trace("Connection dropped by keepalive timeout"), V = !0, I.close()
                        }, this.keepaliveTimeoutMs), (z = F.unref) === null || z === void 0 || z.call(F)
                    }, E(), I.on("close", () => {
                        var z, w;
                        if (!V) this.trace(`Connection dropped by client ${(z=I.socket)===null||z===void 0?void 0:z.remoteAddress}`);
                        if (W) clearTimeout(W);
                        if (X) clearTimeout(X);
                        if (D(), K !== null) clearTimeout(K.timeout), this.sessionIdleTimeouts.delete(I);
                        (w = this.http2Servers.get(Z)) === null || w === void 0 || w.sessions.delete(I)
                    })
                }
            }
            _channelzSessionHandler(Z) {
                return (I) => {
                    var Y, J, W, X;
                    let F = (0, bF.registerChannelzSocket)((J = (Y = I.socket) === null || Y === void 0 ? void 0 : Y.remoteAddress) !== null && J !== void 0 ? J : "unknown", this.getChannelzSessionInfo.bind(this, I), this.channelzEnabled),
                        V = {
                            ref: F,
                            streamTracker: new bF.ChannelzCallTracker,
                            messagesSent: 0,
                            messagesReceived: 0,
                            keepAlivesSent: 0,
                            lastMessageSentTimestamp: null,
                            lastMessageReceivedTimestamp: null
                        };
                    (W = this.http2Servers.get(Z)) === null || W === void 0 || W.sessions.add(I), this.sessions.set(I, V);
                    let K = `${I.socket.remoteAddress}:${I.socket.remotePort}`;
                    this.channelzTrace.addTrace("CT_INFO", "Connection established by client " + K), this.trace("Connection established by client " + K), this.sessionChildrenTracker.refChild(F);
                    let D = null,
                        H = null,
                        C = null,
                        E = !1,
                        z = this.enableIdleTimeout(I);
                    if (this.maxConnectionAgeMs !== JJA) {
                        let P = this.maxConnectionAgeMs / 10,
                            y = Math.random() * P * 2 - P;
                        D = setTimeout(() => {
                            var v;
                            E = !0, this.channelzTrace.addTrace("CT_INFO", "Connection dropped by max connection age from " + K);
                            try {
                                I.goaway(tU.constants.NGHTTP2_NO_ERROR, 2147483647, V$2)
                            } catch (x) {
                                I.destroy();
                                return
                            }
                            if (I.close(), this.maxConnectionAgeGraceMs !== JJA) H = setTimeout(() => {
                                I.destroy()
                            }, this.maxConnectionAgeGraceMs), (v = H.unref) === null || v === void 0 || v.call(H)
                        }, this.maxConnectionAgeMs + y), (X = D.unref) === null || X === void 0 || X.call(D)
                    }
                    let w = () => {
                            if (C) clearTimeout(C), C = null
                        },
                        N = () => {
                            return !I.destroyed && this.keepaliveTimeMs < $90 && this.keepaliveTimeMs > 0
                        },
                        q, R = () => {
                            var P;
                            if (!N()) return;
                            this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), C = setTimeout(() => {
                                w(), q()
                            }, this.keepaliveTimeMs), (P = C.unref) === null || P === void 0 || P.call(C)
                        };
                    q = () => {
                        var P;
                        if (!N()) return;
                        this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
                        let y = "";
                        try {
                            if (!I.ping((x, p, u) => {
                                    if (w(), x) this.keepaliveTrace("Ping failed with error: " + x.message), this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to error of a ping frame " + x.message + " return in " + p), E = !0, I.close();
                                    else this.keepaliveTrace("Received ping response"), R()
                                })) y = "Ping returned false"
                        } catch (v) {
                            y = (v instanceof Error ? v.message : "") || "Unknown error"
                        }
                        if (y) {
                            this.keepaliveTrace("Ping send failed: " + y), this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to ping send error: " + y), E = !0, I.close();
                            return
                        }
                        V.keepAlivesSent += 1, C = setTimeout(() => {
                            w(), this.keepaliveTrace("Ping timeout passed without response"), this.channelzTrace.addTrace("CT_INFO", "Connection dropped by keepalive timeout from " + K), E = !0, I.close()
                        }, this.keepaliveTimeoutMs), (P = C.unref) === null || P === void 0 || P.call(C)
                    }, R(), I.on("close", () => {
                        var P;
                        if (!E) this.channelzTrace.addTrace("CT_INFO", "Connection dropped by client " + K);
                        if (this.sessionChildrenTracker.unrefChild(F), (0, bF.unregisterChannelzRef)(F), D) clearTimeout(D);
                        if (H) clearTimeout(H);
                        if (w(), z !== null) clearTimeout(z.timeout), this.sessionIdleTimeouts.delete(I);
                        (P = this.http2Servers.get(Z)) === null || P === void 0 || P.sessions.delete(I), this.sessions.delete(I)
                    })
                }
            }
            enableIdleTimeout(Z) {
                var I, Y;
                if (this.sessionIdleTimeout >= X$2) return null;
                let J = {
                    activeStreams: 0,
                    lastIdle: Date.now(),
                    onClose: this.onStreamClose.bind(this, Z),
                    timeout: setTimeout(this.onIdleTimeout, this.sessionIdleTimeout, this, Z)
                };
                (Y = (I = J.timeout).unref) === null || Y === void 0 || Y.call(I), this.sessionIdleTimeouts.set(Z, J);
                let {
                    socket: W
                } = Z;
                return this.trace("Enable idle timeout for " + W.remoteAddress + ":" + W.remotePort), J
            }
            onIdleTimeout(Z, I) {
                let {
                    socket: Y
                } = I, J = Z.sessionIdleTimeouts.get(I);
                if (J !== void 0 && J.activeStreams === 0)
                    if (Date.now() - J.lastIdle >= Z.sessionIdleTimeout) Z.trace("Session idle timeout triggered for " + (Y === null || Y === void 0 ? void 0 : Y.remoteAddress) + ":" + (Y === null || Y === void 0 ? void 0 : Y.remotePort) + " last idle at " + J.lastIdle), Z.closeSession(I);
                    else J.timeout.refresh()
            }
            onStreamOpened(Z) {
                let I = Z.session,
                    Y = this.sessionIdleTimeouts.get(I);
                if (Y) Y.activeStreams += 1, Z.once("close", Y.onClose)
            }
            onStreamClose(Z) {
                var I, Y;
                let J = this.sessionIdleTimeouts.get(Z);
                if (J) {
                    if (J.activeStreams -= 1, J.activeStreams === 0) J.lastIdle = Date.now(), J.timeout.refresh(), this.trace("Session onStreamClose" + ((I = Z.socket) === null || I === void 0 ? void 0 : I.remoteAddress) + ":" + ((Y = Z.socket) === null || Y === void 0 ? void 0 : Y.remotePort) + " at " + J.lastIdle)
                }
            }
        }, (() => {
            let G = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            if (B = [SP5("Calling start() is no longer necessary. It can be safely omitted.")], OP5(A, null, B, {
                    kind: "method",
                    name: "start",
                    static: !1,
                    private: !1,
                    access: {
                        has: (Z) => ("start" in Z),
                        get: (Z) => Z.start
                    },
                    metadata: G
                }, null, Q), G) Object.defineProperty(A, Symbol.metadata, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: G
            })
        })(), A
    })();
    li.Server = kP5;
    async function yP5(A, Q) {
        let B;

        function G(Y, J, W, X) {
            if (Y) {
                A.sendStatus((0, XJA.serverErrorToStatus)(Y, W));
                return
            }
            A.sendMessage(J, () => {
                A.sendStatus({
                    code: yW.Status.OK,
                    details: "OK",
                    metadata: W !== null && W !== void 0 ? W : null
                })
            })
        }
        let Z, I = null;
        A.start({
            onReceiveMetadata(Y) {
                Z = Y, A.startRead()
            },
            onReceiveMessage(Y) {
                if (I) {
                    A.sendStatus({
                        code: yW.Status.UNIMPLEMENTED,
                        details: `Received a second request message for server streaming method ${Q.path}`,
                        metadata: null
                    });
                    return
                }
                I = Y, A.startRead()
            },
            onReceiveHalfClose() {
                if (!I) {
                    A.sendStatus({
                        code: yW.Status.UNIMPLEMENTED,
                        details: `Received no request message for server streaming method ${Q.path}`,
                        metadata: null
                    });
                    return
                }
                B = new XJA.ServerWritableStreamImpl(Q.path, A, Z, I);
                try {
                    Q.func(B, G)
                } catch (Y) {
                    A.sendStatus({
                        code: yW.Status.UNKNOWN,
                        details: `Server method handler threw error ${Y.message}`,
                        metadata: null
                    })
                }
            },
            onCancel() {
                if (B) B.cancelled = !0, B.emit("cancelled", "cancelled")
            }
        })
    }

    function xP5(A, Q) {
        let B;

        function G(Z, I, Y, J) {
            if (Z) {
                A.sendStatus((0, XJA.serverErrorToStatus)(Z, Y));
                return
            }
            A.sendMessage(I, () => {
                A.sendStatus({
                    code: yW.Status.OK,
                    details: "OK",
                    metadata: Y !== null && Y !== void 0 ? Y : null
                })
            })
        }
        A.start({
            onReceiveMetadata(Z) {
                B = new XJA.ServerDuplexStreamImpl(Q.path, A, Z);
                try {
                    Q.func(B, G)
                } catch (I) {
                    A.sendStatus({
                        code: yW.Status.UNKNOWN,
                        details: `Server method handler threw error ${I.message}`,
                        metadata: null
                    })
                }
            },
            onReceiveMessage(Z) {
                B.push(Z)
            },
            onReceiveHalfClose() {
                B.push(null)
            },
            onCancel() {
                if (B) B.cancelled = !0, B.emit("cancelled", "cancelled"), B.destroy()
            }
        })
    }

    function vP5(A, Q) {
        let B, G, Z = null;
        A.start({
            onReceiveMetadata(I) {
                G = I, A.startRead()
            },
            onReceiveMessage(I) {
                if (Z) {
                    A.sendStatus({
                        code: yW.Status.UNIMPLEMENTED,
                        details: `Received a second request message for server streaming method ${Q.path}`,
                        metadata: null
                    });
                    return
                }
                Z = I, A.startRead()
            },
            onReceiveHalfClose() {
                if (!Z) {
                    A.sendStatus({
                        code: yW.Status.UNIMPLEMENTED,
                        details: `Received no request message for server streaming method ${Q.path}`,
                        metadata: null
                    });
                    return
                }
                B = new XJA.ServerWritableStreamImpl(Q.path, A, G, Z);
                try {
                    Q.func(B)
                } catch (I) {
                    A.sendStatus({
                        code: yW.Status.UNKNOWN,
                        details: `Server method handler threw error ${I.message}`,
                        metadata: null
                    })
                }
            },
            onCancel() {
                if (B) B.cancelled = !0, B.emit("cancelled", "cancelled"), B.destroy()
            }
        })
    }

    function bP5(A, Q) {
        let B;
        A.start({
            onReceiveMetadata(G) {
                B = new XJA.ServerDuplexStreamImpl(Q.path, A, G);
                try {
                    Q.func(B)
                } catch (Z) {
                    A.sendStatus({
                        code: yW.Status.UNKNOWN,
                        details: `Server method handler threw error ${Z.message}`,
                        metadata: null
                    })
                }
            },
            onReceiveMessage(G) {
                B.push(G)
            },
            onReceiveHalfClose() {
                B.push(null)
            },
            onCancel() {
                if (B) B.cancelled = !0, B.emit("cancelled", "cancelled"), B.destroy()
            }
        })
    }
});
var z$2 = U((C$2) => {
    Object.defineProperty(C$2, "__esModule", {
        value: !0
    });
    C$2.StatusBuilder = void 0;
    class H$2 {
        constructor() {
            this.code = null, this.details = null, this.metadata = null
        }
        withCode(A) {
            return this.code = A, this
        }
        withDetails(A) {
            return this.details = A, this
        }
        withMetadata(A) {
            return this.metadata = A, this
        }
        build() {
            let A = {};
            if (this.code !== null) A.code = this.code;
            if (this.details !== null) A.details = this.details;
            if (this.metadata !== null) A.metadata = this.metadata;
            return A
        }
    }
    C$2.StatusBuilder = H$2
});
var yOA = U((O$2) => {
    Object.defineProperty(O$2, "__esModule", {
        value: !0
    });
    O$2.LeafLoadBalancer = O$2.PickFirstLoadBalancer = O$2.PickFirstLoadBalancingConfig = void 0;
    O$2.shuffled = N$2;
    O$2.setup = pP5;
    var q90 = xi(),
        xW = dE(),
        ii = wh(),
        U$2 = rU(),
        fP5 = XZ(),
        hP5 = K6(),
        $$2 = rU(),
        w$2 = UA("net"),
        gP5 = u1A(),
        uP5 = "pick_first";

    function _OA(A) {
        fP5.trace(hP5.LogVerbosity.DEBUG, uP5, A)
    }
    var kOA = "pick_first",
        mP5 = 250;
    class FJA {
        constructor(A) {
            this.shuffleAddressList = A
        }
        getLoadBalancerName() {
            return kOA
        }
        toJsonObject() {
            return {
                [kOA]: {
                    shuffleAddressList: this.shuffleAddressList
                }
            }
        }
        getShuffleAddressList() {
            return this.shuffleAddressList
        }
        static createFromJson(A) {
            if ("shuffleAddressList" in A && typeof A.shuffleAddressList !== "boolean") throw Error("pick_first config field shuffleAddressList must be a boolean if provided");
            return new FJA(A.shuffleAddressList === !0)
        }
    }
    O$2.PickFirstLoadBalancingConfig = FJA;
    class q$2 {
        constructor(A) {
            this.subchannel = A
        }
        pick(A) {
            return {
                pickResultType: ii.PickResultType.COMPLETE,
                subchannel: this.subchannel,
                status: null,
                onCallStarted: null,
                onCallEnded: null
            }
        }
    }

    function N$2(A) {
        let Q = A.slice();
        for (let B = Q.length - 1; B > 1; B--) {
            let G = Math.floor(Math.random() * (B + 1)),
                Z = Q[B];
            Q[B] = Q[G], Q[G] = Z
        }
        return Q
    }

    function dP5(A) {
        if (A.length === 0) return [];
        let Q = [],
            B = [],
            G = [],
            Z = (0, $$2.isTcpSubchannelAddress)(A[0]) && (0, w$2.isIPv6)(A[0].host);
        for (let J of A)
            if ((0, $$2.isTcpSubchannelAddress)(J) && (0, w$2.isIPv6)(J.host)) B.push(J);
            else G.push(J);
        let I = Z ? B : G,
            Y = Z ? G : B;
        for (let J = 0; J < Math.max(I.length, Y.length); J++) {
            if (J < I.length) Q.push(I[J]);
            if (J < Y.length) Q.push(Y[J])
        }
        return Q
    }
    var L$2 = "grpc-node.internal.pick-first.report_health_status";
    class B81 {
        constructor(A) {
            this.channelControlHelper = A, this.children = [], this.currentState = xW.ConnectivityState.IDLE, this.currentSubchannelIndex = 0, this.currentPick = null, this.subchannelStateListener = (Q, B, G, Z, I) => {
                this.onSubchannelStateUpdate(Q, B, G, I)
            }, this.pickedSubchannelHealthListener = () => this.calculateAndReportNewState(), this.stickyTransientFailureMode = !1, this.reportHealthStatus = !1, this.lastError = null, this.latestAddressList = null, this.latestOptions = {}, this.latestResolutionNote = "", this.connectionDelayTimeout = setTimeout(() => {}, 0), clearTimeout(this.connectionDelayTimeout)
        }
        allChildrenHaveReportedTF() {
            return this.children.every((A) => A.hasReportedTransientFailure)
        }
        resetChildrenReportedTF() {
            this.children.every((A) => A.hasReportedTransientFailure = !1)
        }
        calculateAndReportNewState() {
            var A;
            if (this.currentPick)
                if (this.reportHealthStatus && !this.currentPick.isHealthy()) {
                    let Q = `Picked subchannel ${this.currentPick.getAddress()} is unhealthy`;
                    this.updateState(xW.ConnectivityState.TRANSIENT_FAILURE, new ii.UnavailablePicker({
                        details: Q
                    }), Q)
                } else this.updateState(xW.ConnectivityState.READY, new q$2(this.currentPick), null);
            else if (((A = this.latestAddressList) === null || A === void 0 ? void 0 : A.length) === 0) {
                let Q = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
                this.updateState(xW.ConnectivityState.TRANSIENT_FAILURE, new ii.UnavailablePicker({
                    details: Q
                }), Q)
            } else if (this.children.length === 0) this.updateState(xW.ConnectivityState.IDLE, new ii.QueuePicker(this), null);
            else if (this.stickyTransientFailureMode) {
                let Q = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
                this.updateState(xW.ConnectivityState.TRANSIENT_FAILURE, new ii.UnavailablePicker({
                    details: Q
                }), Q)
            } else this.updateState(xW.ConnectivityState.CONNECTING, new ii.QueuePicker(this), null)
        }
        requestReresolution() {
            this.channelControlHelper.requestReresolution()
        }
        maybeEnterStickyTransientFailureMode() {
            if (!this.allChildrenHaveReportedTF()) return;
            if (this.requestReresolution(), this.resetChildrenReportedTF(), this.stickyTransientFailureMode) {
                this.calculateAndReportNewState();
                return
            }
            this.stickyTransientFailureMode = !0;
            for (let {
                    subchannel: A
                }
                of this.children) A.startConnecting();
            this.calculateAndReportNewState()
        }
        removeCurrentPick() {
            if (this.currentPick !== null) this.currentPick.removeConnectivityStateListener(this.subchannelStateListener), this.channelControlHelper.removeChannelzChild(this.currentPick.getChannelzRef()), this.currentPick.removeHealthStateWatcher(this.pickedSubchannelHealthListener), this.currentPick.unref(), this.currentPick = null
        }
        onSubchannelStateUpdate(A, Q, B, G) {
            var Z;
            if ((Z = this.currentPick) === null || Z === void 0 ? void 0 : Z.realSubchannelEquals(A)) {
                if (B !== xW.ConnectivityState.READY) this.removeCurrentPick(), this.calculateAndReportNewState();
                return
            }
            for (let [I, Y] of this.children.entries())
                if (A.realSubchannelEquals(Y.subchannel)) {
                    if (B === xW.ConnectivityState.READY) this.pickSubchannel(Y.subchannel);
                    if (B === xW.ConnectivityState.TRANSIENT_FAILURE) {
                        if (Y.hasReportedTransientFailure = !0, G) this.lastError = G;
                        if (this.maybeEnterStickyTransientFailureMode(), I === this.currentSubchannelIndex) this.startNextSubchannelConnecting(I + 1)
                    }
                    Y.subchannel.startConnecting();
                    return
                }
        }
        startNextSubchannelConnecting(A) {
            clearTimeout(this.connectionDelayTimeout);
            for (let [Q, B] of this.children.entries())
                if (Q >= A) {
                    let G = B.subchannel.getConnectivityState();
                    if (G === xW.ConnectivityState.IDLE || G === xW.ConnectivityState.CONNECTING) {
                        this.startConnecting(Q);
                        return
                    }
                } this.maybeEnterStickyTransientFailureMode()
        }
        startConnecting(A) {
            var Q, B;
            if (clearTimeout(this.connectionDelayTimeout), this.currentSubchannelIndex = A, this.children[A].subchannel.getConnectivityState() === xW.ConnectivityState.IDLE) _OA("Start connecting to subchannel with address " + this.children[A].subchannel.getAddress()), process.nextTick(() => {
                var G;
                (G = this.children[A]) === null || G === void 0 || G.subchannel.startConnecting()
            });
            this.connectionDelayTimeout = setTimeout(() => {
                this.startNextSubchannelConnecting(A + 1)
            }, mP5), (B = (Q = this.connectionDelayTimeout).unref) === null || B === void 0 || B.call(Q)
        }
        pickSubchannel(A) {
            _OA("Pick subchannel with address " + A.getAddress()), this.stickyTransientFailureMode = !1, A.ref(), this.channelControlHelper.addChannelzChild(A.getChannelzRef()), this.removeCurrentPick(), this.resetSubchannelList(), A.addConnectivityStateListener(this.subchannelStateListener), A.addHealthStateWatcher(this.pickedSubchannelHealthListener), this.currentPick = A, clearTimeout(this.connectionDelayTimeout), this.calculateAndReportNewState()
        }
        updateState(A, Q, B) {
            _OA(xW.ConnectivityState[this.currentState] + " -> " + xW.ConnectivityState[A]), this.currentState = A, this.channelControlHelper.updateState(A, Q, B)
        }
        resetSubchannelList() {
            for (let A of this.children) A.subchannel.removeConnectivityStateListener(this.subchannelStateListener), A.subchannel.unref(), this.channelControlHelper.removeChannelzChild(A.subchannel.getChannelzRef());
            this.currentSubchannelIndex = 0, this.children = []
        }
        connectToAddressList(A, Q) {
            _OA("connectToAddressList([" + A.map((G) => (0, U$2.subchannelAddressToString)(G)) + "])");
            let B = A.map((G) => ({
                subchannel: this.channelControlHelper.createSubchannel(G, Q),
                hasReportedTransientFailure: !1
            }));
            for (let {
                    subchannel: G
                }
                of B)
                if (G.getConnectivityState() === xW.ConnectivityState.READY) {
                    this.pickSubchannel(G);
                    return
                } for (let {
                    subchannel: G
                }
                of B) G.ref(), this.channelControlHelper.addChannelzChild(G.getChannelzRef());
            this.resetSubchannelList(), this.children = B;
            for (let {
                    subchannel: G
                }
                of this.children) G.addConnectivityStateListener(this.subchannelStateListener);
            for (let G of this.children)
                if (G.subchannel.getConnectivityState() === xW.ConnectivityState.TRANSIENT_FAILURE) G.hasReportedTransientFailure = !0;
            this.startNextSubchannelConnecting(0), this.calculateAndReportNewState()
        }
        updateAddressList(A, Q, B, G) {
            if (!(Q instanceof FJA)) return !1;
            if (!A.ok) {
                if (this.children.length === 0 && this.currentPick === null) this.channelControlHelper.updateState(xW.ConnectivityState.TRANSIENT_FAILURE, new ii.UnavailablePicker(A.error), A.error.details);
                return !0
            }
            let Z = A.value;
            if (this.reportHealthStatus = B[L$2], Q.getShuffleAddressList()) Z = N$2(Z);
            let I = [].concat(...Z.map((J) => J.addresses));
            _OA("updateAddressList([" + I.map((J) => (0, U$2.subchannelAddressToString)(J)) + "])");
            let Y = dP5(I);
            if (this.latestAddressList = Y, this.latestOptions = B, this.connectToAddressList(Y, B), this.latestResolutionNote = G, I.length > 0) return !0;
            else return this.lastError = "No addresses resolved", !1
        }
        exitIdle() {
            if (this.currentState === xW.ConnectivityState.IDLE && this.latestAddressList) this.connectToAddressList(this.latestAddressList, this.latestOptions)
        }
        resetBackoff() {}
        destroy() {
            this.resetSubchannelList(), this.removeCurrentPick()
        }
        getTypeName() {
            return kOA
        }
    }
    O$2.PickFirstLoadBalancer = B81;
    var cP5 = new FJA(!1);
    class M$2 {
        constructor(A, Q, B, G) {
            this.endpoint = A, this.options = B, this.resolutionNote = G, this.latestState = xW.ConnectivityState.IDLE;
            let Z = (0, q90.createChildChannelControlHelper)(Q, {
                updateState: (I, Y, J) => {
                    this.latestState = I, this.latestPicker = Y, Q.updateState(I, Y, J)
                }
            });
            this.pickFirstBalancer = new B81(Z), this.latestPicker = new ii.QueuePicker(this.pickFirstBalancer)
        }
        startConnecting() {
            this.pickFirstBalancer.updateAddressList((0, gP5.statusOrFromValue)([this.endpoint]), cP5, Object.assign(Object.assign({}, this.options), {
                [L$2]: !0
            }), this.resolutionNote)
        }
        updateEndpoint(A, Q) {
            if (this.options = Q, this.endpoint = A, this.latestState !== xW.ConnectivityState.IDLE) this.startConnecting()
        }
        getConnectivityState() {
            return this.latestState
        }
        getPicker() {
            return this.latestPicker
        }
        getEndpoint() {
            return this.endpoint
        }
        exitIdle() {
            this.pickFirstBalancer.exitIdle()
        }
        destroy() {
            this.pickFirstBalancer.destroy()
        }
    }
    O$2.LeafLoadBalancer = M$2;

    function pP5() {
        (0, q90.registerLoadBalancerType)(kOA, B81, FJA), (0, q90.registerDefaultLoadBalancerType)(kOA)
    }
});
var S$2 = U((P$2) => {
    Object.defineProperty(P$2, "__esModule", {
        value: !0
    });
    P$2.FileWatcherCertificateProvider = void 0;
    var sP5 = UA("fs"),
        rP5 = XZ(),
        oP5 = K6(),
        tP5 = UA("util"),
        eP5 = "certificate_provider";

    function G81(A) {
        rP5.trace(oP5.LogVerbosity.DEBUG, eP5, A)
    }
    var N90 = (0, tP5.promisify)(sP5.readFile);
    class T$2 {
        constructor(A) {
            if (this.config = A, this.refreshTimer = null, this.fileResultPromise = null, this.latestCaUpdate = void 0, this.caListeners = new Set, this.latestIdentityUpdate = void 0, this.identityListeners = new Set, this.lastUpdateTime = null, A.certificateFile === void 0 !== (A.privateKeyFile === void 0)) throw Error("certificateFile and privateKeyFile must be set or unset together");
            if (A.certificateFile === void 0 && A.caCertificateFile === void 0) throw Error("At least one of certificateFile and caCertificateFile must be set");
            G81("File watcher constructed with config " + JSON.stringify(A))
        }
        updateCertificates() {
            if (this.fileResultPromise) return;
            this.fileResultPromise = Promise.allSettled([this.config.certificateFile ? N90(this.config.certificateFile) : Promise.reject(), this.config.privateKeyFile ? N90(this.config.privateKeyFile) : Promise.reject(), this.config.caCertificateFile ? N90(this.config.caCertificateFile) : Promise.reject()]), this.fileResultPromise.then(([A, Q, B]) => {
                if (!this.refreshTimer) return;
                if (G81("File watcher read certificates certificate " + A.status + ", privateKey " + Q.status + ", CA certificate " + B.status), this.lastUpdateTime = new Date, this.fileResultPromise = null, A.status === "fulfilled" && Q.status === "fulfilled") this.latestIdentityUpdate = {
                    certificate: A.value,
                    privateKey: Q.value
                };
                else this.latestIdentityUpdate = null;
                if (B.status === "fulfilled") this.latestCaUpdate = {
                    caCertificate: B.value
                };
                else this.latestCaUpdate = null;
                for (let G of this.identityListeners) G(this.latestIdentityUpdate);
                for (let G of this.caListeners) G(this.latestCaUpdate)
            }), G81("File watcher initiated certificate update")
        }
        maybeStartWatchingFiles() {
            if (!this.refreshTimer) {
                let A = this.lastUpdateTime ? new Date().getTime() - this.lastUpdateTime.getTime() : 1 / 0;
                if (A > this.config.refreshIntervalMs) this.updateCertificates();
                if (A > this.config.refreshIntervalMs * 2) this.latestCaUpdate = void 0, this.latestIdentityUpdate = void 0;
                this.refreshTimer = setInterval(() => this.updateCertificates(), this.config.refreshIntervalMs), G81("File watcher started watching")
            }
        }
        maybeStopWatchingFiles() {
            if (this.caListeners.size === 0 && this.identityListeners.size === 0) {
                if (this.fileResultPromise = null, this.refreshTimer) clearInterval(this.refreshTimer), this.refreshTimer = null
            }
        }
        addCaCertificateListener(A) {
            if (this.caListeners.add(A), this.maybeStartWatchingFiles(), this.latestCaUpdate !== void 0) process.nextTick(A, this.latestCaUpdate)
        }
        removeCaCertificateListener(A) {
            this.caListeners.delete(A), this.maybeStopWatchingFiles()
        }
        addIdentityCertificateListener(A) {
            if (this.identityListeners.add(A), this.maybeStartWatchingFiles(), this.latestIdentityUpdate !== void 0) process.nextTick(A, this.latestIdentityUpdate)
        }
        removeIdentityCertificateListener(A) {
            this.identityListeners.delete(A), this.maybeStopWatchingFiles()
        }
    }
    P$2.FileWatcherCertificateProvider = T$2
});
var O90 = U((G5) => {
    Object.defineProperty(G5, "__esModule", {
        value: !0
    });
    G5.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = G5.createCertificateProviderChannelCredentials = G5.FileWatcherCertificateProvider = G5.createCertificateProviderServerCredentials = G5.createServerCredentialsWithInterceptors = G5.BaseSubchannelWrapper = G5.registerAdminService = G5.FilterStackFactory = G5.BaseFilter = G5.statusOrFromError = G5.statusOrFromValue = G5.PickResultType = G5.QueuePicker = G5.UnavailablePicker = G5.ChildLoadBalancerHandler = G5.EndpointMap = G5.endpointHasAddress = G5.endpointToString = G5.subchannelAddressToString = G5.LeafLoadBalancer = G5.isLoadBalancerNameRegistered = G5.parseLoadBalancingConfig = G5.selectLbConfigFromList = G5.registerLoadBalancerType = G5.createChildChannelControlHelper = G5.BackoffTimeout = G5.parseDuration = G5.durationToMs = G5.splitHostPort = G5.uriToString = G5.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = G5.createResolver = G5.registerResolver = G5.log = G5.trace = void 0;
    var _$2 = XZ();
    Object.defineProperty(G5, "trace", {
        enumerable: !0,
        get: function() {
            return _$2.trace
        }
    });
    Object.defineProperty(G5, "log", {
        enumerable: !0,
        get: function() {
            return _$2.log
        }
    });
    var L90 = JP();
    Object.defineProperty(G5, "registerResolver", {
        enumerable: !0,
        get: function() {
            return L90.registerResolver
        }
    });
    Object.defineProperty(G5, "createResolver", {
        enumerable: !0,
        get: function() {
            return L90.createResolver
        }
    });
    Object.defineProperty(G5, "CHANNEL_ARGS_CONFIG_SELECTOR_KEY", {
        enumerable: !0,
        get: function() {
            return L90.CHANNEL_ARGS_CONFIG_SELECTOR_KEY
        }
    });
    var k$2 = mE();
    Object.defineProperty(G5, "uriToString", {
        enumerable: !0,
        get: function() {
            return k$2.uriToString
        }
    });
    Object.defineProperty(G5, "splitHostPort", {
        enumerable: !0,
        get: function() {
            return k$2.splitHostPort
        }
    });
    var y$2 = SOA();
    Object.defineProperty(G5, "durationToMs", {
        enumerable: !0,
        get: function() {
            return y$2.durationToMs
        }
    });
    Object.defineProperty(G5, "parseDuration", {
        enumerable: !0,
        get: function() {
            return y$2.parseDuration
        }
    });
    var Aj5 = uYA();
    Object.defineProperty(G5, "BackoffTimeout", {
        enumerable: !0,
        get: function() {
            return Aj5.BackoffTimeout
        }
    });
    var xOA = xi();
    Object.defineProperty(G5, "createChildChannelControlHelper", {
        enumerable: !0,
        get: function() {
            return xOA.createChildChannelControlHelper
        }
    });
    Object.defineProperty(G5, "registerLoadBalancerType", {
        enumerable: !0,
        get: function() {
            return xOA.registerLoadBalancerType
        }
    });
    Object.defineProperty(G5, "selectLbConfigFromList", {
        enumerable: !0,
        get: function() {
            return xOA.selectLbConfigFromList
        }
    });
    Object.defineProperty(G5, "parseLoadBalancingConfig", {
        enumerable: !0,
        get: function() {
            return xOA.parseLoadBalancingConfig
        }
    });
    Object.defineProperty(G5, "isLoadBalancerNameRegistered", {
        enumerable: !0,
        get: function() {
            return xOA.isLoadBalancerNameRegistered
        }
    });
    var Qj5 = yOA();
    Object.defineProperty(G5, "LeafLoadBalancer", {
        enumerable: !0,
        get: function() {
            return Qj5.LeafLoadBalancer
        }
    });
    var Z81 = rU();
    Object.defineProperty(G5, "subchannelAddressToString", {
        enumerable: !0,
        get: function() {
            return Z81.subchannelAddressToString
        }
    });
    Object.defineProperty(G5, "endpointToString", {
        enumerable: !0,
        get: function() {
            return Z81.endpointToString
        }
    });
    Object.defineProperty(G5, "endpointHasAddress", {
        enumerable: !0,
        get: function() {
            return Z81.endpointHasAddress
        }
    });
    Object.defineProperty(G5, "EndpointMap", {
        enumerable: !0,
        get: function() {
            return Z81.EndpointMap
        }
    });
    var Bj5 = B41();
    Object.defineProperty(G5, "ChildLoadBalancerHandler", {
        enumerable: !0,
        get: function() {
            return Bj5.ChildLoadBalancerHandler
        }
    });
    var M90 = wh();
    Object.defineProperty(G5, "UnavailablePicker", {
        enumerable: !0,
        get: function() {
            return M90.UnavailablePicker
        }
    });
    Object.defineProperty(G5, "QueuePicker", {
        enumerable: !0,
        get: function() {
            return M90.QueuePicker
        }
    });
    Object.defineProperty(G5, "PickResultType", {
        enumerable: !0,
        get: function() {
            return M90.PickResultType
        }
    });
    var x$2 = u1A();
    Object.defineProperty(G5, "statusOrFromValue", {
        enumerable: !0,
        get: function() {
            return x$2.statusOrFromValue
        }
    });
    Object.defineProperty(G5, "statusOrFromError", {
        enumerable: !0,
        get: function() {
            return x$2.statusOrFromError
        }
    });
    var Gj5 = f20();
    Object.defineProperty(G5, "BaseFilter", {
        enumerable: !0,
        get: function() {
            return Gj5.BaseFilter
        }
    });
    var Zj5 = f41();
    Object.defineProperty(G5, "FilterStackFactory", {
        enumerable: !0,
        get: function() {
            return Zj5.FilterStackFactory
        }
    });
    var Ij5 = Z41();
    Object.defineProperty(G5, "registerAdminService", {
        enumerable: !0,
        get: function() {
            return Ij5.registerAdminService
        }
    });
    var Yj5 = POA();
    Object.defineProperty(G5, "BaseSubchannelWrapper", {
        enumerable: !0,
        get: function() {
            return Yj5.BaseSubchannelWrapper
        }
    });
    var v$2 = r41();
    Object.defineProperty(G5, "createServerCredentialsWithInterceptors", {
        enumerable: !0,
        get: function() {
            return v$2.createServerCredentialsWithInterceptors
        }
    });
    Object.defineProperty(G5, "createCertificateProviderServerCredentials", {
        enumerable: !0,
        get: function() {
            return v$2.createCertificateProviderServerCredentials
        }
    });
    var Jj5 = S$2();
    Object.defineProperty(G5, "FileWatcherCertificateProvider", {
        enumerable: !0,
        get: function() {
            return Jj5.FileWatcherCertificateProvider
        }
    });
    var Wj5 = gYA();
    Object.defineProperty(G5, "createCertificateProviderChannelCredentials", {
        enumerable: !0,
        get: function() {
            return Wj5.createCertificateProviderChannelCredentials
        }
    });
    var Xj5 = Z90();
    Object.defineProperty(G5, "SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX", {
        enumerable: !0,
        get: function() {
            return Xj5.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX
        }
    })
});
var h$2 = U((f$2) => {
    Object.defineProperty(f$2, "__esModule", {
        value: !0
    });
    f$2.setup = Dj5;
    var Vj5 = JP(),
        Kj5 = u1A();
    class b$2 {
        constructor(A, Q, B) {
            this.listener = Q, this.hasReturnedResult = !1, this.endpoints = [];
            let G;
            if (A.authority === "") G = "/" + A.path;
            else G = A.path;
            this.endpoints = [{
                addresses: [{
                    path: G
                }]
            }]
        }
        updateResolution() {
            if (!this.hasReturnedResult) this.hasReturnedResult = !0, process.nextTick(this.listener, (0, Kj5.statusOrFromValue)(this.endpoints), {}, null, "")
        }
        destroy() {
            this.hasReturnedResult = !1
        }
        static getDefaultAuthority(A) {
            return "localhost"
        }
    }

    function Dj5() {
        (0, Vj5.registerResolver)("unix", b$2)
    }
});
var l$2 = U((p$2) => {
    Object.defineProperty(p$2, "__esModule", {
        value: !0
    });
    p$2.setup = $j5;
    var g$2 = UA("net"),
        u$2 = u1A(),
        I81 = K6(),
        R90 = BK(),
        m$2 = JP(),
        Cj5 = rU(),
        d$2 = mE(),
        Ej5 = XZ(),
        zj5 = "ip_resolver";

    function c$2(A) {
        Ej5.trace(I81.LogVerbosity.DEBUG, zj5, A)
    }
    var T90 = "ipv4",
        P90 = "ipv6",
        Uj5 = 443;
    class j90 {
        constructor(A, Q, B) {
            var G;
            this.listener = Q, this.endpoints = [], this.error = null, this.hasReturnedResult = !1, c$2("Resolver constructed for target " + (0, d$2.uriToString)(A));
            let Z = [];
            if (!(A.scheme === T90 || A.scheme === P90)) {
                this.error = {
                    code: I81.Status.UNAVAILABLE,
                    details: `Unrecognized scheme ${A.scheme} in IP resolver`,
                    metadata: new R90.Metadata
                };
                return
            }
            let I = A.path.split(",");
            for (let Y of I) {
                let J = (0, d$2.splitHostPort)(Y);
                if (J === null) {
                    this.error = {
                        code: I81.Status.UNAVAILABLE,
                        details: `Failed to parse ${A.scheme} address ${Y}`,
                        metadata: new R90.Metadata
                    };
                    return
                }
                if (A.scheme === T90 && !(0, g$2.isIPv4)(J.host) || A.scheme === P90 && !(0, g$2.isIPv6)(J.host)) {
                    this.error = {
                        code: I81.Status.UNAVAILABLE,
                        details: `Failed to parse ${A.scheme} address ${Y}`,
                        metadata: new R90.Metadata
                    };
                    return
                }
                Z.push({
                    host: J.host,
                    port: (G = J.port) !== null && G !== void 0 ? G : Uj5
                })
            }
            this.endpoints = Z.map((Y) => ({
                addresses: [Y]
            })), c$2("Parsed " + A.scheme + " address list " + Z.map(Cj5.subchannelAddressToString))
        }
        updateResolution() {
            if (!this.hasReturnedResult) this.hasReturnedResult = !0, process.nextTick(() => {
                if (this.error) this.listener((0, u$2.statusOrFromError)(this.error), {}, null, "");
                else this.listener((0, u$2.statusOrFromValue)(this.endpoints), {}, null, "")
            })
        }
        destroy() {
            this.hasReturnedResult = !1
        }
        static getDefaultAuthority(A) {
            return A.path.split(",")[0]
        }
    }

    function $j5() {
        (0, m$2.registerResolver)(T90, j90), (0, m$2.registerResolver)(P90, j90)
    }
});
var t$2 = U((r$2) => {
    Object.defineProperty(r$2, "__esModule", {
        value: !0
    });
    r$2.RoundRobinLoadBalancer = void 0;
    r$2.setup = Rj5;