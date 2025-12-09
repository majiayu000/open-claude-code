/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: api_026.js
 * 处理时间: 2025-12-09T03:37:23.899Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 26/30
 * Lines: 334921 - 336420 (1500 lines)
 * Original file: cli.js
 */

var jP2 = U((TP2) => {
    Object.defineProperty(TP2, "__esModule", {
        value: !0
    });
    TP2.SharedArrayReceiverStrategy = TP2.SharedArraySenderStrategy = void 0;
    var Ib5 = w61(),
        zRA;
    (function(A) {
        A.Continue = 0, A.Cancelled = 1
    })(zRA || (zRA = {}));
    class LP2 {
        constructor() {
            this.buffers = new Map
        }
        enableCancellation(A) {
            if (A.id === null) return;
            let Q = new SharedArrayBuffer(4),
                B = new Int32Array(Q, 0, 1);
            B[0] = zRA.Continue, this.buffers.set(A.id, Q), A.$cancellationData = Q
        }
        async sendCancellation(A, Q) {
            let B = this.buffers.get(Q);
            if (B === void 0) return;
            let G = new Int32Array(B, 0, 1);
            Atomics.store(G, 0, zRA.Cancelled)
        }
        cleanup(A) {
            this.buffers.delete(A)
        }
        dispose() {
            this.buffers.clear()
        }
    }
    TP2.SharedArraySenderStrategy = LP2;
    class MP2 {
        constructor(A) {
            this.data = new Int32Array(A, 0, 1)
        }
        get isCancellationRequested() {
            return Atomics.load(this.data, 0) === zRA.Cancelled
        }
        get onCancellationRequested() {
            throw Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")
        }
    }
    class OP2 {
        constructor(A) {
            this.token = new MP2(A)
        }
        cancel() {}
        dispose() {}
    }
    class RP2 {
        constructor() {
            this.kind = "request"
        }
        createCancellationTokenSource(A) {
            let Q = A.$cancellationData;
            if (Q === void 0) return new Ib5.CancellationTokenSource;
            return new OP2(Q)
        }
    }
    TP2.SharedArrayReceiverStrategy = RP2
});
var d80 = U((_P2) => {
    Object.defineProperty(_P2, "__esModule", {
        value: !0
    });
    _P2.Semaphore = void 0;
    var Jb5 = Qn();
    class SP2 {
        constructor(A = 1) {
            if (A <= 0) throw Error("Capacity must be greater than 0");
            this._capacity = A, this._active = 0, this._waiting = []
        }
        lock(A) {
            return new Promise((Q, B) => {
                this._waiting.push({
                    thunk: A,
                    resolve: Q,
                    reject: B
                }), this.runNext()
            })
        }
        get active() {
            return this._active
        }
        runNext() {
            if (this._waiting.length === 0 || this._active === this._capacity) return;
            (0, Jb5.default)().timer.setImmediate(() => this.doRunNext())
        }
        doRunNext() {
            if (this._waiting.length === 0 || this._active === this._capacity) return;
            let A = this._waiting.shift();
            if (this._active++, this._active > this._capacity) throw Error("To many thunks active");
            try {
                let Q = A.thunk();
                if (Q instanceof Promise) Q.then((B) => {
                    this._active--, A.resolve(B), this.runNext()
                }, (B) => {
                    this._active--, A.reject(B), this.runNext()
                });
                else this._active--, A.resolve(Q), this.runNext()
            } catch (Q) {
                this._active--, A.reject(Q), this.runNext()
            }
        }
    }
    _P2.Semaphore = SP2
});
var fP2 = U((vP2) => {
    Object.defineProperty(vP2, "__esModule", {
        value: !0
    });
    vP2.ReadableStreamMessageReader = vP2.AbstractMessageReader = vP2.MessageReader = void 0;
    var p80 = Qn(),
        gJA = fJA(),
        c80 = hJA(),
        Wb5 = d80(),
        yP2;
    (function(A) {
        function Q(B) {
            let G = B;
            return G && gJA.func(G.listen) && gJA.func(G.dispose) && gJA.func(G.onError) && gJA.func(G.onClose) && gJA.func(G.onPartialMessage)
        }
        A.is = Q
    })(yP2 || (vP2.MessageReader = yP2 = {}));
    class i80 {
        constructor() {
            this.errorEmitter = new c80.Emitter, this.closeEmitter = new c80.Emitter, this.partialMessageEmitter = new c80.Emitter
        }
        dispose() {
            this.errorEmitter.dispose(), this.closeEmitter.dispose()
        }
        get onError() {
            return this.errorEmitter.event
        }
        fireError(A) {
            this.errorEmitter.fire(this.asError(A))
        }
        get onClose() {
            return this.closeEmitter.event
        }
        fireClose() {
            this.closeEmitter.fire(void 0)
        }
        get onPartialMessage() {
            return this.partialMessageEmitter.event
        }
        firePartialMessage(A) {
            this.partialMessageEmitter.fire(A)
        }
        asError(A) {
            if (A instanceof Error) return A;
            else return Error(`Reader received error. Reason: ${gJA.string(A.message)?A.message:"unknown"}`)
        }
    }
    vP2.AbstractMessageReader = i80;
    var l80;
    (function(A) {
        function Q(B) {
            let G, Z, I, Y = new Map,
                J, W = new Map;
            if (B === void 0 || typeof B === "string") G = B ?? "utf-8";
            else {
                if (G = B.charset ?? "utf-8", B.contentDecoder !== void 0) I = B.contentDecoder, Y.set(I.name, I);
                if (B.contentDecoders !== void 0)
                    for (let X of B.contentDecoders) Y.set(X.name, X);
                if (B.contentTypeDecoder !== void 0) J = B.contentTypeDecoder, W.set(J.name, J);
                if (B.contentTypeDecoders !== void 0)
                    for (let X of B.contentTypeDecoders) W.set(X.name, X)
            }
            if (J === void 0) J = (0, p80.default)().applicationJson.decoder, W.set(J.name, J);
            return {
                charset: G,
                contentDecoder: I,
                contentDecoders: Y,
                contentTypeDecoder: J,
                contentTypeDecoders: W
            }
        }
        A.fromOptions = Q
    })(l80 || (l80 = {}));
    class xP2 extends i80 {
        constructor(A, Q) {
            super();
            this.readable = A, this.options = l80.fromOptions(Q), this.buffer = (0, p80.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new Wb5.Semaphore(1)
        }
        set partialMessageTimeout(A) {
            this._partialMessageTimeout = A
        }
        get partialMessageTimeout() {
            return this._partialMessageTimeout
        }
        listen(A) {
            this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = A;
            let Q = this.readable.onData((B) => {
                this.onData(B)
            });
            return this.readable.onError((B) => this.fireError(B)), this.readable.onClose(() => this.fireClose()), Q
        }
        onData(A) {
            try {
                this.buffer.append(A);
                while (!0) {
                    if (this.nextMessageLength === -1) {
                        let B = this.buffer.tryReadHeaders(!0);
                        if (!B) return;
                        let G = B.get("content-length");
                        if (!G) {
                            this.fireError(Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(B))}`));
                            return
                        }
                        let Z = parseInt(G);
                        if (isNaN(Z)) {
                            this.fireError(Error(`Content-Length value must be a number. Got ${G}`));
                            return
                        }
                        this.nextMessageLength = Z
                    }
                    let Q = this.buffer.tryReadBody(this.nextMessageLength);
                    if (Q === void 0) {
                        this.setPartialMessageTimer();
                        return
                    }
                    this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock(async () => {
                        let B = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(Q) : Q,
                            G = await this.options.contentTypeDecoder.decode(B, this.options);
                        this.callback(G)
                    }).catch((B) => {
                        this.fireError(B)
                    })
                }
            } catch (Q) {
                this.fireError(Q)
            }
        }
        clearPartialMessageTimer() {
            if (this.partialMessageTimer) this.partialMessageTimer.dispose(), this.partialMessageTimer = void 0
        }
        setPartialMessageTimer() {
            if (this.clearPartialMessageTimer(), this._partialMessageTimeout <= 0) return;
            this.partialMessageTimer = (0, p80.default)().timer.setTimeout((A, Q) => {
                if (this.partialMessageTimer = void 0, A === this.messageToken) this.firePartialMessage({
                    messageToken: A,
                    waitingTime: Q
                }), this.setPartialMessageTimer()
            }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout)
        }
    }
    vP2.ReadableStreamMessageReader = xP2
});
var lP2 = U((cP2) => {
    Object.defineProperty(cP2, "__esModule", {
        value: !0
    });
    cP2.WriteableStreamMessageWriter = cP2.AbstractMessageWriter = cP2.MessageWriter = void 0;
    var hP2 = Qn(),
        URA = fJA(),
        Vb5 = d80(),
        gP2 = hJA(),
        Kb5 = "Content-Length: ",
        uP2 = `\r
`,
        mP2;
    (function(A) {
        function Q(B) {
            let G = B;
            return G && URA.func(G.dispose) && URA.func(G.onClose) && URA.func(G.onError) && URA.func(G.write)
        }
        A.is = Q
    })(mP2 || (cP2.MessageWriter = mP2 = {}));
    class a80 {
        constructor() {
            this.errorEmitter = new gP2.Emitter, this.closeEmitter = new gP2.Emitter
        }
        dispose() {
            this.errorEmitter.dispose(), this.closeEmitter.dispose()
        }
        get onError() {
            return this.errorEmitter.event
        }
        fireError(A, Q, B) {
            this.errorEmitter.fire([this.asError(A), Q, B])
        }
        get onClose() {
            return this.closeEmitter.event
        }
        fireClose() {
            this.closeEmitter.fire(void 0)
        }
        asError(A) {
            if (A instanceof Error) return A;
            else return Error(`Writer received error. Reason: ${URA.string(A.message)?A.message:"unknown"}`)
        }
    }
    cP2.AbstractMessageWriter = a80;
    var n80;
    (function(A) {
        function Q(B) {
            if (B === void 0 || typeof B === "string") return {
                charset: B ?? "utf-8",
                contentTypeEncoder: (0, hP2.default)().applicationJson.encoder
            };
            else return {
                charset: B.charset ?? "utf-8",
                contentEncoder: B.contentEncoder,
                contentTypeEncoder: B.contentTypeEncoder ?? (0, hP2.default)().applicationJson.encoder
            }
        }
        A.fromOptions = Q
    })(n80 || (n80 = {}));
    class dP2 extends a80 {
        constructor(A, Q) {
            super();
            this.writable = A, this.options = n80.fromOptions(Q), this.errorCount = 0, this.writeSemaphore = new Vb5.Semaphore(1), this.writable.onError((B) => this.fireError(B)), this.writable.onClose(() => this.fireClose())
        }
        async write(A) {
            return this.writeSemaphore.lock(async () => {
                return this.options.contentTypeEncoder.encode(A, this.options).then((B) => {
                    if (this.options.contentEncoder !== void 0) return this.options.contentEncoder.encode(B);
                    else return B
                }).then((B) => {
                    let G = [];
                    return G.push(Kb5, B.byteLength.toString(), uP2), G.push(uP2), this.doWrite(A, G, B)
                }, (B) => {
                    throw this.fireError(B), B
                })
            })
        }
        async doWrite(A, Q, B) {
            try {
                return await this.writable.write(Q.join(""), "ascii"), this.writable.write(B)
            } catch (G) {
                return this.handleError(G, A), Promise.reject(G)
            }
        }
        handleError(A, Q) {
            this.errorCount++, this.fireError(A, Q, this.errorCount)
        }
        end() {
            this.writable.end()
        }
    }
    cP2.WriteableStreamMessageWriter = dP2
});
var sP2 = U((nP2) => {
    Object.defineProperty(nP2, "__esModule", {
        value: !0
    });
    nP2.AbstractMessageBuffer = void 0;
    var Cb5 = 13,
        Eb5 = 10,
        zb5 = `\r
`;
    class iP2 {
        constructor(A = "utf-8") {
            this._encoding = A, this._chunks = [], this._totalLength = 0
        }
        get encoding() {
            return this._encoding
        }
        append(A) {
            let Q = typeof A === "string" ? this.fromString(A, this._encoding) : A;
            this._chunks.push(Q), this._totalLength += Q.byteLength
        }
        tryReadHeaders(A = !1) {
            if (this._chunks.length === 0) return;
            let Q = 0,
                B = 0,
                G = 0,
                Z = 0;
            A: while (B < this._chunks.length) {
                let W = this._chunks[B];
                G = 0;
                Q: while (G < W.length) {
                    switch (W[G]) {
                        case Cb5:
                            switch (Q) {
                                case 0:
                                    Q = 1;
                                    break;
                                case 2:
                                    Q = 3;
                                    break;
                                default:
                                    Q = 0
                            }
                            break;
                        case Eb5:
                            switch (Q) {
                                case 1:
                                    Q = 2;
                                    break;
                                case 3:
                                    Q = 4, G++;
                                    break A;
                                default:
                                    Q = 0
                            }
                            break;
                        default:
                            Q = 0
                    }
                    G++
                }
                Z += W.byteLength, B++
            }
            if (Q !== 4) return;
            let I = this._read(Z + G),
                Y = new Map,
                J = this.toString(I, "ascii").split(zb5);
            if (J.length < 2) return Y;
            for (let W = 0; W < J.length - 2; W++) {
                let X = J[W],
                    F = X.indexOf(":");
                if (F === -1) throw Error(`Message header must separate key and value using ':'
${X}`);
                let V = X.substr(0, F),
                    K = X.substr(F + 1).trim();
                Y.set(A ? V.toLowerCase() : V, K)
            }
            return Y
        }
        tryReadBody(A) {
            if (this._totalLength < A) return;
            return this._read(A)
        }
        get numberOfBytes() {
            return this._totalLength
        }
        _read(A) {
            if (A === 0) return this.emptyBuffer();
            if (A > this._totalLength) throw Error("Cannot read so many bytes!");
            if (this._chunks[0].byteLength === A) {
                let Z = this._chunks[0];
                return this._chunks.shift(), this._totalLength -= A, this.asNative(Z)
            }
            if (this._chunks[0].byteLength > A) {
                let Z = this._chunks[0],
                    I = this.asNative(Z, A);
                return this._chunks[0] = Z.slice(A), this._totalLength -= A, I
            }
            let Q = this.allocNative(A),
                B = 0,
                G = 0;
            while (A > 0) {
                let Z = this._chunks[G];
                if (Z.byteLength > A) {
                    let I = Z.slice(0, A);
                    Q.set(I, B), B += A, this._chunks[G] = Z.slice(A), this._totalLength -= A, A -= A
                } else Q.set(Z, B), B += Z.byteLength, this._chunks.shift(), this._totalLength -= Z.byteLength, A -= Z.byteLength
            }
            return Q
        }
    }
    nP2.AbstractMessageBuffer = iP2
});
var Yj2 = U((Qj2) => {
    Object.defineProperty(Qj2, "__esModule", {
        value: !0
    });
    Qj2.createMessageConnection = Qj2.ConnectionOptions = Qj2.MessageStrategy = Qj2.CancellationStrategy = Qj2.CancellationSenderStrategy = Qj2.CancellationReceiverStrategy = Qj2.RequestCancellationReceiverStrategy = Qj2.IdCancellationReceiverStrategy = Qj2.ConnectionStrategy = Qj2.ConnectionError = Qj2.ConnectionErrors = Qj2.LogTraceNotification = Qj2.SetTraceNotification = Qj2.TraceFormat = Qj2.TraceValues = Qj2.Trace = Qj2.NullLogger = Qj2.ProgressType = Qj2.ProgressToken = void 0;
    var rP2 = Qn(),
        aY = fJA(),
        H4 = v80(),
        oP2 = f80(),
        $RA = hJA(),
        s80 = w61(),
        NRA;
    (function(A) {
        A.type = new H4.NotificationType("$/cancelRequest")
    })(NRA || (NRA = {}));
    var r80;
    (function(A) {
        function Q(B) {
            return typeof B === "string" || typeof B === "number"
        }
        A.is = Q
    })(r80 || (Qj2.ProgressToken = r80 = {}));
    var wRA;
    (function(A) {
        A.type = new H4.NotificationType("$/progress")
    })(wRA || (wRA = {}));
    class Aj2 {
        constructor() {}
    }
    Qj2.ProgressType = Aj2;
    var o80;
    (function(A) {
        function Q(B) {
            return aY.func(B)
        }
        A.is = Q
    })(o80 || (o80 = {}));
    Qj2.NullLogger = Object.freeze({
        error: () => {},
        warn: () => {},
        info: () => {},
        log: () => {}
    });
    var O7;
    (function(A) {
        A[A.Off = 0] = "Off", A[A.Messages = 1] = "Messages", A[A.Compact = 2] = "Compact", A[A.Verbose = 3] = "Verbose"
    })(O7 || (Qj2.Trace = O7 = {}));
    var tP2;
    (function(A) {
        A.Off = "off", A.Messages = "messages", A.Compact = "compact", A.Verbose = "verbose"
    })(tP2 || (Qj2.TraceValues = tP2 = {}));
    (function(A) {
        function Q(G) {
            if (!aY.string(G)) return A.Off;
            switch (G = G.toLowerCase(), G) {
                case "off":
                    return A.Off;
                case "messages":
                    return A.Messages;
                case "compact":
                    return A.Compact;
                case "verbose":
                    return A.Verbose;
                default:
                    return A.Off
            }
        }
        A.fromString = Q;

        function B(G) {
            switch (G) {
                case A.Off:
                    return "off";
                case A.Messages:
                    return "messages";
                case A.Compact:
                    return "compact";
                case A.Verbose:
                    return "verbose";
                default:
                    return "off"
            }
        }
        A.toString = B
    })(O7 || (Qj2.Trace = O7 = {}));
    var Oq;
    (function(A) {
        A.Text = "text", A.JSON = "json"
    })(Oq || (Qj2.TraceFormat = Oq = {}));
    (function(A) {
        function Q(B) {
            if (!aY.string(B)) return A.Text;
            if (B = B.toLowerCase(), B === "json") return A.JSON;
            else return A.Text
        }
        A.fromString = Q
    })(Oq || (Qj2.TraceFormat = Oq = {}));
    var t80;
    (function(A) {
        A.type = new H4.NotificationType("$/setTrace")
    })(t80 || (Qj2.SetTraceNotification = t80 = {}));
    var q61;
    (function(A) {
        A.type = new H4.NotificationType("$/logTrace")
    })(q61 || (Qj2.LogTraceNotification = q61 = {}));
    var qRA;
    (function(A) {
        A[A.Closed = 1] = "Closed", A[A.Disposed = 2] = "Disposed", A[A.AlreadyListening = 3] = "AlreadyListening"
    })(qRA || (Qj2.ConnectionErrors = qRA = {}));
    class uJA extends Error {
        constructor(A, Q) {
            super(Q);
            this.code = A, Object.setPrototypeOf(this, uJA.prototype)
        }
    }
    Qj2.ConnectionError = uJA;
    var e80;
    (function(A) {
        function Q(B) {
            let G = B;
            return G && aY.func(G.cancelUndispatched)
        }
        A.is = Q
    })(e80 || (Qj2.ConnectionStrategy = e80 = {}));
    var N61;
    (function(A) {
        function Q(B) {
            let G = B;
            return G && (G.kind === void 0 || G.kind === "id") && aY.func(G.createCancellationTokenSource) && (G.dispose === void 0 || aY.func(G.dispose))
        }
        A.is = Q
    })(N61 || (Qj2.IdCancellationReceiverStrategy = N61 = {}));
    var A60;
    (function(A) {
        function Q(B) {
            let G = B;
            return G && G.kind === "request" && aY.func(G.createCancellationTokenSource) && (G.dispose === void 0 || aY.func(G.dispose))
        }
        A.is = Q
    })(A60 || (Qj2.RequestCancellationReceiverStrategy = A60 = {}));
    var L61;
    (function(A) {
        A.Message = Object.freeze({
            createCancellationTokenSource(B) {
                return new s80.CancellationTokenSource
            }
        });

        function Q(B) {
            return N61.is(B) || A60.is(B)
        }
        A.is = Q
    })(L61 || (Qj2.CancellationReceiverStrategy = L61 = {}));
    var M61;
    (function(A) {
        A.Message = Object.freeze({
            sendCancellation(B, G) {
                return B.sendNotification(NRA.type, {
                    id: G
                })
            },
            cleanup(B) {}
        });

        function Q(B) {
            let G = B;
            return G && aY.func(G.sendCancellation) && aY.func(G.cleanup)
        }
        A.is = Q
    })(M61 || (Qj2.CancellationSenderStrategy = M61 = {}));
    var O61;
    (function(A) {
        A.Message = Object.freeze({
            receiver: L61.Message,
            sender: M61.Message
        });

        function Q(B) {
            let G = B;
            return G && L61.is(G.receiver) && M61.is(G.sender)
        }
        A.is = Q
    })(O61 || (Qj2.CancellationStrategy = O61 = {}));
    var R61;
    (function(A) {
        function Q(B) {
            let G = B;
            return G && aY.func(G.handleMessage)
        }
        A.is = Q
    })(R61 || (Qj2.MessageStrategy = R61 = {}));
    var eP2;
    (function(A) {
        function Q(B) {
            let G = B;
            return G && (O61.is(G.cancellationStrategy) || e80.is(G.connectionStrategy) || R61.is(G.messageStrategy))
        }
        A.is = Q
    })(eP2 || (Qj2.ConnectionOptions = eP2 = {}));
    var $P;
    (function(A) {
        A[A.New = 1] = "New", A[A.Listening = 2] = "Listening", A[A.Closed = 3] = "Closed", A[A.Disposed = 4] = "Disposed"
    })($P || ($P = {}));

    function Ub5(A, Q, B, G) {
        let Z = B !== void 0 ? B : Qj2.NullLogger,
            I = 0,
            Y = 0,
            J = 0,
            W = "2.0",
            X = void 0,
            F = new Map,
            V = void 0,
            K = new Map,
            D = new Map,
            H, C = new oP2.LinkedMap,
            E = new Map,
            z = new Set,
            w = new Map,
            N = O7.Off,
            q = Oq.Text,
            R, P = $P.New,
            y = new $RA.Emitter,
            v = new $RA.Emitter,
            x = new $RA.Emitter,
            p = new $RA.Emitter,
            u = new $RA.Emitter,
            o = G && G.cancellationStrategy ? G.cancellationStrategy : O61.Message;

        function l(F1) {
            if (F1 === null) throw Error("Can't send requests with id null since the response can't be correlated.");
            return "req-" + F1.toString()
        }

        function k(F1) {
            if (F1 === null) return "res-unknown-" + (++J).toString();
            else return "res-" + F1.toString()
        }

        function d() {
            return "not-" + (++Y).toString()
        }

        function QA(F1, R1) {
            if (H4.Message.isRequest(R1)) F1.set(l(R1.id), R1);
            else if (H4.Message.isResponse(R1)) F1.set(k(R1.id), R1);
            else F1.set(d(), R1)
        }

        function IA(F1) {
            return
        }

        function HA() {
            return P === $P.Listening
        }

        function wA() {
            return P === $P.Closed
        }

        function KA() {
            return P === $P.Disposed
        }

        function SA() {
            if (P === $P.New || P === $P.Listening) P = $P.Closed, v.fire(void 0)
        }

        function sA(F1) {
            y.fire([F1, void 0, void 0])
        }

        function NA(F1) {
            y.fire(F1)
        }
        A.onClose(SA), A.onError(sA), Q.onClose(SA), Q.onError(NA);

        function qA() {
            if (H || C.size === 0) return;
            H = (0, rP2.default)().timer.setImmediate(() => {
                H = void 0, yA()
            })
        }

        function DA(F1) {
            if (H4.Message.isRequest(F1)) K1(F1);
            else if (H4.Message.isNotification(F1)) XA(F1);
            else if (H4.Message.isResponse(F1)) WA(F1);
            else zA(F1)
        }

        function yA() {
            if (C.size === 0) return;
            let F1 = C.shift();
            try {
                let R1 = G?.messageStrategy;
                if (R61.is(R1)) R1.handleMessage(F1, DA);
                else DA(F1)
            } finally {
                qA()
            }
        }
        let rA = (F1) => {
            try {
                if (H4.Message.isNotification(F1) && F1.method === NRA.type.method) {
                    let R1 = F1.params.id,
                        N1 = l(R1),
                        Z0 = C.get(N1);
                    if (H4.Message.isRequest(Z0)) {
                        let s1 = G?.connectionStrategy,
                            p0 = s1 && s1.cancelUndispatched ? s1.cancelUndispatched(Z0, IA) : IA(Z0);
                        if (p0 && (p0.error !== void 0 || p0.result !== void 0)) {
                            C.delete(N1), w.delete(R1), p0.id = Z0.id, eA(p0, F1.method, Date.now()), Q.write(p0).catch(() => Z.error("Sending response for canceled message failed."));
                            return
                        }
                    }
                    let J0 = w.get(R1);
                    if (J0 !== void 0) {
                        J0.cancel(), I1(F1);
                        return
                    } else z.add(R1)
                }
                QA(C, F1)
            } finally {
                qA()
            }
        };

        function K1(F1) {
            if (KA()) return;

            function R1(ZB, rQ, PB) {
                let IQ = {
                    jsonrpc: W,
                    id: F1.id
                };
                if (ZB instanceof H4.ResponseError) IQ.error = ZB.toJson();
                else IQ.result = ZB === void 0 ? null : ZB;
                eA(IQ, rQ, PB), Q.write(IQ).catch(() => Z.error("Sending response failed."))
            }

            function N1(ZB, rQ, PB) {
                let IQ = {
                    jsonrpc: W,
                    id: F1.id,
                    error: ZB.toJson()
                };
                eA(IQ, rQ, PB), Q.write(IQ).catch(() => Z.error("Sending response failed."))
            }

            function Z0(ZB, rQ, PB) {
                if (ZB === void 0) ZB = null;
                let IQ = {
                    jsonrpc: W,
                    id: F1.id,
                    result: ZB
                };
                eA(IQ, rQ, PB), Q.write(IQ).catch(() => Z.error("Sending response failed."))
            }
            aA(F1);
            let J0 = F.get(F1.method),
                s1, p0;
            if (J0) s1 = J0.type, p0 = J0.handler;
            let HQ = Date.now();
            if (p0 || X) {
                let ZB = F1.id ?? String(Date.now()),
                    rQ = N61.is(o.receiver) ? o.receiver.createCancellationTokenSource(ZB) : o.receiver.createCancellationTokenSource(F1);
                if (F1.id !== null && z.has(F1.id)) rQ.cancel();
                if (F1.id !== null) w.set(ZB, rQ);
                try {
                    let PB;
                    if (p0)
                        if (F1.params === void 0) {
                            if (s1 !== void 0 && s1.numberOfParams !== 0) {
                                N1(new H4.ResponseError(H4.ErrorCodes.InvalidParams, `Request ${F1.method} defines ${s1.numberOfParams} params but received none.`), F1.method, HQ);
                                return
                            }
                            PB = p0(rQ.token)
                        } else if (Array.isArray(F1.params)) {
                        if (s1 !== void 0 && s1.parameterStructures === H4.ParameterStructures.byName) {
                            N1(new H4.ResponseError(H4.ErrorCodes.InvalidParams, `Request ${F1.method} defines parameters by name but received parameters by position`), F1.method, HQ);
                            return
                        }
                        PB = p0(...F1.params, rQ.token)
                    } else {
                        if (s1 !== void 0 && s1.parameterStructures === H4.ParameterStructures.byPosition) {
                            N1(new H4.ResponseError(H4.ErrorCodes.InvalidParams, `Request ${F1.method} defines parameters by position but received parameters by name`), F1.method, HQ);
                            return
                        }
                        PB = p0(F1.params, rQ.token)
                    } else if (X) PB = X(F1.method, F1.params, rQ.token);
                    let IQ = PB;
                    if (!PB) w.delete(ZB), Z0(PB, F1.method, HQ);
                    else if (IQ.then) IQ.then((l9) => {
                        w.delete(ZB), R1(l9, F1.method, HQ)
                    }, (l9) => {
                        if (w.delete(ZB), l9 instanceof H4.ResponseError) N1(l9, F1.method, HQ);
                        else if (l9 && aY.string(l9.message)) N1(new H4.ResponseError(H4.ErrorCodes.InternalError, `Request ${F1.method} failed with message: ${l9.message}`), F1.method, HQ);
                        else N1(new H4.ResponseError(H4.ErrorCodes.InternalError, `Request ${F1.method} failed unexpectedly without providing any details.`), F1.method, HQ)
                    });
                    else w.delete(ZB), R1(PB, F1.method, HQ)
                } catch (PB) {
                    if (w.delete(ZB), PB instanceof H4.ResponseError) R1(PB, F1.method, HQ);
                    else if (PB && aY.string(PB.message)) N1(new H4.ResponseError(H4.ErrorCodes.InternalError, `Request ${F1.method} failed with message: ${PB.message}`), F1.method, HQ);
                    else N1(new H4.ResponseError(H4.ErrorCodes.InternalError, `Request ${F1.method} failed unexpectedly without providing any details.`), F1.method, HQ)
                }
            } else N1(new H4.ResponseError(H4.ErrorCodes.MethodNotFound, `Unhandled method ${F1.method}`), F1.method, HQ)
        }

        function WA(F1) {
            if (KA()) return;
            if (F1.id === null)
                if (F1.error) Z.error(`Received response message without id: Error is: 
${JSON.stringify(F1.error,void 0,4)}`);
                else Z.error("Received response message without id. No further error information provided.");
            else {
                let R1 = F1.id,
                    N1 = E.get(R1);
                if (w1(F1, N1), N1 !== void 0) {
                    E.delete(R1);
                    try {
                        if (F1.error) {
                            let Z0 = F1.error;
                            N1.reject(new H4.ResponseError(Z0.code, Z0.message, Z0.data))
                        } else if (F1.result !== void 0) N1.resolve(F1.result);
                        else throw Error("Should never happen.")
                    } catch (Z0) {
                        if (Z0.message) Z.error(`Response handler '${N1.method}' failed with message: ${Z0.message}`);
                        else Z.error(`Response handler '${N1.method}' failed unexpectedly.`)
                    }
                }
            }
        }

        function XA(F1) {
            if (KA()) return;
            let R1 = void 0,
                N1;
            if (F1.method === NRA.type.method) {
                let Z0 = F1.params.id;
                z.delete(Z0), I1(F1);
                return
            } else {
                let Z0 = K.get(F1.method);
                if (Z0) N1 = Z0.handler, R1 = Z0.type
            }
            if (N1 || V) try {
                if (I1(F1), N1)
                    if (F1.params === void 0) {
                        if (R1 !== void 0) {
                            if (R1.numberOfParams !== 0 && R1.parameterStructures !== H4.ParameterStructures.byName) Z.error(`Notification ${F1.method} defines ${R1.numberOfParams} params but received none.`)
                        }
                        N1()
                    } else if (Array.isArray(F1.params)) {
                    let Z0 = F1.params;
                    if (F1.method === wRA.type.method && Z0.length === 2 && r80.is(Z0[0])) N1({
                        token: Z0[0],
                        value: Z0[1]
                    });
                    else {
                        if (R1 !== void 0) {
                            if (R1.parameterStructures === H4.ParameterStructures.byName) Z.error(`Notification ${F1.method} defines parameters by name but received parameters by position`);
                            if (R1.numberOfParams !== F1.params.length) Z.error(`Notification ${F1.method} defines ${R1.numberOfParams} params but received ${Z0.length} arguments`)
                        }
                        N1(...Z0)
                    }
                } else {
                    if (R1 !== void 0 && R1.parameterStructures === H4.ParameterStructures.byPosition) Z.error(`Notification ${F1.method} defines parameters by position but received parameters by name`);
                    N1(F1.params)
                } else if (V) V(F1.method, F1.params)
            } catch (Z0) {
                if (Z0.message) Z.error(`Notification handler '${F1.method}' failed with message: ${Z0.message}`);
                else Z.error(`Notification handler '${F1.method}' failed unexpectedly.`)
            } else x.fire(F1)
        }

        function zA(F1) {
            if (!F1) {
                Z.error("Received empty message.");
                return
            }
            Z.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(F1,null,4)}`);
            let R1 = F1;
            if (aY.string(R1.id) || aY.number(R1.id)) {
                let N1 = R1.id,
                    Z0 = E.get(N1);
                if (Z0) Z0.reject(Error("The received response has neither a result nor an error property."))
            }
        }

        function $A(F1) {
            if (F1 === void 0 || F1 === null) return;
            switch (N) {
                case O7.Verbose:
                    return JSON.stringify(F1, null, 4);
                case O7.Compact:
                    return JSON.stringify(F1);
                default:
                    return
            }
        }

        function LA(F1) {
            if (N === O7.Off || !R) return;
            if (q === Oq.Text) {
                let R1 = void 0;
                if ((N === O7.Verbose || N === O7.Compact) && F1.params) R1 = `Params: ${$A(F1.params)}

`;
                R.log(`Sending request '${F1.method} - (${F1.id})'.`, R1)
            } else PA("send-request", F1)
        }

        function TA(F1) {
            if (N === O7.Off || !R) return;
            if (q === Oq.Text) {
                let R1 = void 0;
                if (N === O7.Verbose || N === O7.Compact)
                    if (F1.params) R1 = `Params: ${$A(F1.params)}

`;
                    else R1 = `No parameters provided.

`;
                R.log(`Sending notification '${F1.method}'.`, R1)
            } else PA("send-notification", F1)
        }

        function eA(F1, R1, N1) {
            if (N === O7.Off || !R) return;
            if (q === Oq.Text) {
                let Z0 = void 0;
                if (N === O7.Verbose || N === O7.Compact) {
                    if (F1.error && F1.error.data) Z0 = `Error data: ${$A(F1.error.data)}

`;
                    else if (F1.result) Z0 = `Result: ${$A(F1.result)}

`;
                    else if (F1.error === void 0) Z0 = `No result returned.

`
                }
                R.log(`Sending response '${R1} - (${F1.id})'. Processing request took ${Date.now()-N1}ms`, Z0)
            } else PA("send-response", F1)
        }

        function aA(F1) {
            if (N === O7.Off || !R) return;
            if (q === Oq.Text) {
                let R1 = void 0;
                if ((N === O7.Verbose || N === O7.Compact) && F1.params) R1 = `Params: ${$A(F1.params)}

`;
                R.log(`Received request '${F1.method} - (${F1.id})'.`, R1)
            } else PA("receive-request", F1)
        }

        function I1(F1) {
            if (N === O7.Off || !R || F1.method === q61.type.method) return;
            if (q === Oq.Text) {
                let R1 = void 0;
                if (N === O7.Verbose || N === O7.Compact)
                    if (F1.params) R1 = `Params: ${$A(F1.params)}

`;
                    else R1 = `No parameters provided.

`;
                R.log(`Received notification '${F1.method}'.`, R1)
            } else PA("receive-notification", F1)
        }

        function w1(F1, R1) {
            if (N === O7.Off || !R) return;
            if (q === Oq.Text) {
                let N1 = void 0;
                if (N === O7.Verbose || N === O7.Compact) {
                    if (F1.error && F1.error.data) N1 = `Error data: ${$A(F1.error.data)}

`;
                    else if (F1.result) N1 = `Result: ${$A(F1.result)}

`;
                    else if (F1.error === void 0) N1 = `No result returned.

`
                }
                if (R1) {
                    let Z0 = F1.error ? ` Request failed: ${F1.error.message} (${F1.error.code}).` : "";
                    R.log(`Received response '${R1.method} - (${F1.id})' in ${Date.now()-R1.timerStart}ms.${Z0}`, N1)
                } else R.log(`Received response ${F1.id} without active response promise.`, N1)
            } else PA("receive-response", F1)
        }

        function PA(F1, R1) {
            if (!R || N === O7.Off) return;
            let N1 = {
                isLSPMessage: !0,
                type: F1,
                message: R1,
                timestamp: Date.now()
            };
            R.log(N1)
        }

        function B1() {
            if (wA()) throw new uJA(qRA.Closed, "Connection is closed.");
            if (KA()) throw new uJA(qRA.Disposed, "Connection is disposed.")
        }

        function Q0() {
            if (HA()) throw new uJA(qRA.AlreadyListening, "Connection is already listening")
        }

        function b1() {
            if (!HA()) throw Error("Call listen() first.")
        }

        function Y0(F1) {
            if (F1 === void 0) return null;
            else return F1
        }

        function x0(F1) {
            if (F1 === null) return;
            else return F1
        }

        function u0(F1) {
            return F1 !== void 0 && F1 !== null && !Array.isArray(F1) && typeof F1 === "object"
        }

        function k1(F1, R1) {
            switch (F1) {
                case H4.ParameterStructures.auto:
                    if (u0(R1)) return x0(R1);
                    else return [Y0(R1)];
                case H4.ParameterStructures.byName:
                    if (!u0(R1)) throw Error("Received parameters by name but param is not an object literal.");
                    return x0(R1);
                case H4.ParameterStructures.byPosition:
                    return [Y0(R1)];
                default:
                    throw Error(`Unknown parameter structure ${F1.toString()}`)
            }
        }

        function T0(F1, R1) {
            let N1, Z0 = F1.numberOfParams;
            switch (Z0) {
                case 0:
                    N1 = void 0;
                    break;
                case 1:
                    N1 = k1(F1.parameterStructures, R1[0]);
                    break;
                default:
                    N1 = [];
                    for (let J0 = 0; J0 < R1.length && J0 < Z0; J0++) N1.push(Y0(R1[J0]));
                    if (R1.length < Z0)
                        for (let J0 = R1.length; J0 < Z0; J0++) N1.push(null);
                    break
            }
            return N1
        }
        let fQ = {
            sendNotification: (F1, ...R1) => {
                B1();
                let N1, Z0;
                if (aY.string(F1)) {
                    N1 = F1;
                    let s1 = R1[0],
                        p0 = 0,
                        HQ = H4.ParameterStructures.auto;
                    if (H4.ParameterStructures.is(s1)) p0 = 1, HQ = s1;
                    let ZB = R1.length,
                        rQ = ZB - p0;
                    switch (rQ) {
                        case 0:
                            Z0 = void 0;
                            break;
                        case 1:
                            Z0 = k1(HQ, R1[p0]);
                            break;
                        default:
                            if (HQ === H4.ParameterStructures.byName) throw Error(`Received ${rQ} parameters for 'by Name' notification parameter structure.`);
                            Z0 = R1.slice(p0, ZB).map((PB) => Y0(PB));
                            break
                    }
                } else {
                    let s1 = R1;
                    N1 = F1.method, Z0 = T0(F1, s1)
                }
                let J0 = {
                    jsonrpc: W,
                    method: N1,
                    params: Z0
                };
                return TA(J0), Q.write(J0).catch((s1) => {
                    throw Z.error("Sending notification failed."), s1
                })
            },
            onNotification: (F1, R1) => {
                B1();
                let N1;
                if (aY.func(F1)) V = F1;
                else if (R1)
                    if (aY.string(F1)) N1 = F1, K.set(F1, {
                        type: void 0,
                        handler: R1
                    });
                    else N1 = F1.method, K.set(F1.method, {
                        type: F1,
                        handler: R1
                    });
                return {
                    dispose: () => {
                        if (N1 !== void 0) K.delete(N1);
                        else V = void 0
                    }
                }
            },
            onProgress: (F1, R1, N1) => {
                if (D.has(R1)) throw Error(`Progress handler for token ${R1} already registered`);
                return D.set(R1, N1), {
                    dispose: () => {
                        D.delete(R1)
                    }
                }
            },
            sendProgress: (F1, R1, N1) => {
                return fQ.sendNotification(wRA.type, {
                    token: R1,
                    value: N1
                })
            },
            onUnhandledProgress: p.event,
            sendRequest: (F1, ...R1) => {
                B1(), b1();
                let N1, Z0, J0 = void 0;
                if (aY.string(F1)) {
                    N1 = F1;
                    let ZB = R1[0],
                        rQ = R1[R1.length - 1],
                        PB = 0,
                        IQ = H4.ParameterStructures.auto;
                    if (H4.ParameterStructures.is(ZB)) PB = 1, IQ = ZB;
                    let l9 = R1.length;
                    if (s80.CancellationToken.is(rQ)) l9 = l9 - 1, J0 = rQ;
                    let h4 = l9 - PB;
                    switch (h4) {
                        case 0:
                            Z0 = void 0;
                            break;
                        case 1:
                            Z0 = k1(IQ, R1[PB]);
                            break;
                        default:
                            if (IQ === H4.ParameterStructures.byName) throw Error(`Received ${h4} parameters for 'by Name' request parameter structure.`);
                            Z0 = R1.slice(PB, l9).map((p5) => Y0(p5));
                            break
                    }
                } else {
                    let ZB = R1;
                    N1 = F1.method, Z0 = T0(F1, ZB);
                    let rQ = F1.numberOfParams;
                    J0 = s80.CancellationToken.is(ZB[rQ]) ? ZB[rQ] : void 0
                }
                let s1 = I++,
                    p0;
                if (J0) p0 = J0.onCancellationRequested(() => {
                    let ZB = o.sender.sendCancellation(fQ, s1);
                    if (ZB === void 0) return Z.log(`Received no promise from cancellation strategy when cancelling id ${s1}`), Promise.resolve();
                    else return ZB.catch(() => {
                        Z.log(`Sending cancellation messages for id ${s1} failed`)
                    })
                });
                let HQ = {
                    jsonrpc: W,
                    id: s1,
                    method: N1,
                    params: Z0
                };
                if (LA(HQ), typeof o.sender.enableCancellation === "function") o.sender.enableCancellation(HQ);
                return new Promise(async (ZB, rQ) => {
                    let PB = (h4) => {
                            ZB(h4), o.sender.cleanup(s1), p0?.dispose()
                        },
                        IQ = (h4) => {
                            rQ(h4), o.sender.cleanup(s1), p0?.dispose()
                        },
                        l9 = {
                            method: N1,
                            timerStart: Date.now(),
                            resolve: PB,
                            reject: IQ
                        };
                    try {
                        E.set(s1, l9), await Q.write(HQ)
                    } catch (h4) {
                        throw E.delete(s1), l9.reject(new H4.ResponseError(H4.ErrorCodes.MessageWriteError, h4.message ? h4.message : "Unknown reason")), Z.error("Sending request failed."), h4
                    }
                })
            },
            onRequest: (F1, R1) => {
                B1();
                let N1 = null;
                if (o80.is(F1)) N1 = void 0, X = F1;
                else if (aY.string(F1)) {
                    if (N1 = null, R1 !== void 0) N1 = F1, F.set(F1, {
                        handler: R1,
                        type: void 0
                    })
                } else if (R1 !== void 0) N1 = F1.method, F.set(F1.method, {
                    type: F1,
                    handler: R1
                });
                return {
                    dispose: () => {
                        if (N1 === null) return;
                        if (N1 !== void 0) F.delete(N1);
                        else X = void 0
                    }
                }
            },
            hasPendingResponse: () => {
                return E.size > 0
            },
            trace: async (F1, R1, N1) => {
                let Z0 = !1,
                    J0 = Oq.Text;
                if (N1 !== void 0)
                    if (aY.boolean(N1)) Z0 = N1;
                    else Z0 = N1.sendNotification || !1, J0 = N1.traceFormat || Oq.Text;
                if (N = F1, q = J0, N === O7.Off) R = void 0;
                else R = R1;
                if (Z0 && !wA() && !KA()) await fQ.sendNotification(t80.type, {
                    value: O7.toString(F1)
                })
            },
            onError: y.event,
            onClose: v.event,
            onUnhandledNotification: x.event,
            onDispose: u.event,
            end: () => {
                Q.end()
            },
            dispose: () => {
                if (KA()) return;
                P = $P.Disposed, u.fire(void 0);
                let F1 = new H4.ResponseError(H4.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
                for (let R1 of E.values()) R1.reject(F1);
                if (E = new Map, w = new Map, z = new Set, C = new oP2.LinkedMap, aY.func(Q.dispose)) Q.dispose();
                if (aY.func(A.dispose)) A.dispose()
            },
            listen: () => {
                B1(), Q0(), P = $P.Listening, A.listen(rA)
            },
            inspect: () => {
                (0, rP2.default)().console.log("inspect")
            }
        };
        return fQ.onNotification(q61.type, (F1) => {
            if (N === O7.Off || !R) return;
            let R1 = N === O7.Verbose || N === O7.Compact;
            R.log(F1.message, R1 ? F1.verbose : void 0)
        }), fQ.onNotification(wRA.type, (F1) => {
            let R1 = D.get(F1.token);
            if (R1) R1(F1.value);
            else p.fire(F1)
        }), fQ
    }
    Qj2.createMessageConnection = Ub5
});
var T61 = U((x2) => {
    Object.defineProperty(x2, "__esModule", {
        value: !0
    });
    x2.ProgressType = x2.ProgressToken = x2.createMessageConnection = x2.NullLogger = x2.ConnectionOptions = x2.ConnectionStrategy = x2.AbstractMessageBuffer = x2.WriteableStreamMessageWriter = x2.AbstractMessageWriter = x2.MessageWriter = x2.ReadableStreamMessageReader = x2.AbstractMessageReader = x2.MessageReader = x2.SharedArrayReceiverStrategy = x2.SharedArraySenderStrategy = x2.CancellationToken = x2.CancellationTokenSource = x2.Emitter = x2.Event = x2.Disposable = x2.LRUCache = x2.Touch = x2.LinkedMap = x2.ParameterStructures = x2.NotificationType9 = x2.NotificationType8 = x2.NotificationType7 = x2.NotificationType6 = x2.NotificationType5 = x2.NotificationType4 = x2.NotificationType3 = x2.NotificationType2 = x2.NotificationType1 = x2.NotificationType0 = x2.NotificationType = x2.ErrorCodes = x2.ResponseError = x2.RequestType9 = x2.RequestType8 = x2.RequestType7 = x2.RequestType6 = x2.RequestType5 = x2.RequestType4 = x2.RequestType3 = x2.RequestType2 = x2.RequestType1 = x2.RequestType0 = x2.RequestType = x2.Message = x2.RAL = void 0;
    x2.MessageStrategy = x2.CancellationStrategy = x2.CancellationSenderStrategy = x2.CancellationReceiverStrategy = x2.ConnectionError = x2.ConnectionErrors = x2.LogTraceNotification = x2.SetTraceNotification = x2.TraceFormat = x2.TraceValues = x2.Trace = void 0;
    var mZ = v80();
    Object.defineProperty(x2, "Message", {
        enumerable: !0,
        get: function() {
            return mZ.Message
        }
    });
    Object.defineProperty(x2, "RequestType", {
        enumerable: !0,
        get: function() {
            return mZ.RequestType
        }
    });
    Object.defineProperty(x2, "RequestType0", {
        enumerable: !0,
        get: function() {
            return mZ.RequestType0
        }
    });
    Object.defineProperty(x2, "RequestType1", {
        enumerable: !0,
        get: function() {
            return mZ.RequestType1
        }
    });
    Object.defineProperty(x2, "RequestType2", {
        enumerable: !0,
        get: function() {
            return mZ.RequestType2
        }
    });
    Object.defineProperty(x2, "RequestType3", {
        enumerable: !0,
        get: function() {
            return mZ.RequestType3
        }
    });
    Object.defineProperty(x2, "RequestType4", {
        enumerable: !0,
        get: function() {
            return mZ.RequestType4
        }
    });
    Object.defineProperty(x2, "RequestType5", {
        enumerable: !0,
        get: function() {
            return mZ.RequestType5
        }
    });
    Object.defineProperty(x2, "RequestType6", {
        enumerable: !0,
        get: function() {
            return mZ.RequestType6
        }
    });
    Object.defineProperty(x2, "RequestType7", {
        enumerable: !0,
        get: function() {
            return mZ.RequestType7
        }
    });
    Object.defineProperty(x2, "RequestType8", {
        enumerable: !0,
        get: function() {
            return mZ.RequestType8
        }
    });
    Object.defineProperty(x2, "RequestType9", {
        enumerable: !0,
        get: function() {
            return mZ.RequestType9
        }
    });
    Object.defineProperty(x2, "ResponseError", {
        enumerable: !0,
        get: function() {
            return mZ.ResponseError
        }
    });
    Object.defineProperty(x2, "ErrorCodes", {
        enumerable: !0,
        get: function() {
            return mZ.ErrorCodes
        }
    });
    Object.defineProperty(x2, "NotificationType", {
        enumerable: !0,
        get: function() {
            return mZ.NotificationType
        }
    });
    Object.defineProperty(x2, "NotificationType0", {
        enumerable: !0,
        get: function() {
            return mZ.NotificationType0
        }
    });
    Object.defineProperty(x2, "NotificationType1", {
        enumerable: !0,
        get: function() {
            return mZ.NotificationType1
        }
    });
    Object.defineProperty(x2, "NotificationType2", {
        enumerable: !0,
        get: function() {
            return mZ.NotificationType2
        }
    });
    Object.defineProperty(x2, "NotificationType3", {
        enumerable: !0,
        get: function() {
            return mZ.NotificationType3
        }
    });
    Object.defineProperty(x2, "NotificationType4", {
        enumerable: !0,
        get: function() {
            return mZ.NotificationType4
        }
    });
    Object.defineProperty(x2, "NotificationType5", {
        enumerable: !0,
        get: function() {
            return mZ.NotificationType5
        }
    });
    Object.defineProperty(x2, "NotificationType6", {
        enumerable: !0,
        get: function() {
            return mZ.NotificationType6
        }
    });
    Object.defineProperty(x2, "NotificationType7", {
        enumerable: !0,
        get: function() {
            return mZ.NotificationType7
        }
    });
    Object.defineProperty(x2, "NotificationType8", {
        enumerable: !0,
        get: function() {
            return mZ.NotificationType8
        }
    });
    Object.defineProperty(x2, "NotificationType9", {
        enumerable: !0,
        get: function() {
            return mZ.NotificationType9
        }
    });
    Object.defineProperty(x2, "ParameterStructures", {
        enumerable: !0,
        get: function() {
            return mZ.ParameterStructures
        }
    });
    var Q60 = f80();