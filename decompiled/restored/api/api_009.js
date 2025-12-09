/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: api_009.js
 * 处理时间: 2025-12-09T03:37:23.755Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         (  9x) = require(moduleName) - Node.js require
 * GA         (  3x) = esmImport(module) - ESM import helper
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 9/30
 * Lines: 140347 - 141842 (1496 lines)
 * Original file: cli.js
 */

            throw TypeError("Invalid utf-8 received.")
        };
    a1B.exports = {
        isConnecting: bd8,
        isEstablished: fd8,
        isClosing: hd8,
        isClosed: gd8,
        fireEvent: yy1,
        isValidSubprotocol: dd8,
        isValidStatusCode: cd8,
        failWebsocketConnection: d1B,
        websocketMessageReceived: ud8,
        utf8Decode: n1B,
        isControlFrame: c1B,
        isContinuationFrame: p1B,
        isTextBinaryFrame: l1B,
        isValidOpcode: pd8,
        parseExtensions: ld8,
        isValidClientWindowBits: id8
    }
});
var GlA = U((IL7, r1B) => {
    var {
        maxUnsigned16Bit: nd8
    } = jo(), xy1, _EA = null, G3A = 16386;
    try {
        xy1 = UA("node:crypto")
    } catch {
        xy1 = {
            randomFillSync: function(Q, B, G) {
                for (let Z = 0; Z < Q.length; ++Z) Q[Z] = Math.random() * 255 | 0;
                return Q
            }
        }
    }

    function ad8() {
        if (G3A === 16386) G3A = 0, xy1.randomFillSync(_EA ??= Buffer.allocUnsafe(16386), 0, 16386);
        return [_EA[G3A++], _EA[G3A++], _EA[G3A++], _EA[G3A++]]
    }
    class s1B {
        constructor(A) {
            this.frameData = A
        }
        createFrame(A) {
            let Q = this.frameData,
                B = ad8(),
                G = Q?.byteLength ?? 0,
                Z = G,
                I = 6;
            if (G > nd8) I += 8, Z = 127;
            else if (G > 125) I += 2, Z = 126;
            let Y = Buffer.allocUnsafe(G + I);
            Y[0] = Y[1] = 0, Y[0] |= 128, Y[0] = (Y[0] & 240) + A; /*! ws. MIT License. Einar Otto Stangvik <einaros@gmail.com> */
            if (Y[I - 4] = B[0], Y[I - 3] = B[1], Y[I - 2] = B[2], Y[I - 1] = B[3], Y[1] = Z, Z === 126) Y.writeUInt16BE(G, 2);
            else if (Z === 127) Y[2] = Y[3] = 0, Y.writeUIntBE(G, 4, 6);
            Y[1] |= 128;
            for (let J = 0; J < G; ++J) Y[I + J] = Q[J] ^ B[J & 3];
            return Y
        }
    }
    r1B.exports = {
        WebsocketFrameSend: s1B
    }
});
var by1 = U((YL7, G0B) => {
    var {
        uid: sd8,
        states: kEA,
        sentCloseFrameState: ZlA,
        emptyBuffer: rd8,
        opcodes: od8
    } = jo(), {
        kReadyState: yEA,
        kSentClose: IlA,
        kByteParser: t1B,
        kReceivedClose: o1B,
        kResponse: e1B
    } = TEA(), {
        fireEvent: td8,
        failWebsocketConnection: Wc,
        isClosing: ed8,
        isClosed: Ac8,
        isEstablished: Qc8,
        parseExtensions: Bc8
    } = SEA(), {
        channels: Z3A
    } = U5A(), {
        CloseEvent: Gc8
    } = B3A(), {
        makeRequest: Zc8
    } = r5A(), {
        fetching: Ic8
    } = NEA(), {
        Headers: Yc8,
        getHeadersList: Jc8
    } = Mo(), {
        getDecodeSplit: Wc8
    } = Rw(), {
        WebsocketFrameSend: Xc8
    } = GlA(), vy1;
    try {
        vy1 = UA("node:crypto")
    } catch {}

    function Fc8(A, Q, B, G, Z, I) {
        let Y = A;
        Y.protocol = A.protocol === "ws:" ? "http:" : "https:";
        let J = Zc8({
            urlList: [Y],
            client: B,
            serviceWorkers: "none",
            referrer: "no-referrer",
            mode: "websocket",
            credentials: "include",
            cache: "no-store",
            redirect: "error"
        });
        if (I.headers) {
            let V = Jc8(new Yc8(I.headers));
            J.headersList = V
        }
        let W = vy1.randomBytes(16).toString("base64");
        J.headersList.append("sec-websocket-key", W), J.headersList.append("sec-websocket-version", "13");
        for (let V of Q) J.headersList.append("sec-websocket-protocol", V);
        let X = "permessage-deflate; client_max_window_bits";
        return J.headersList.append("sec-websocket-extensions", X), Ic8({
            request: J,
            useParallelQueue: !0,
            dispatcher: I.dispatcher,
            processResponse(V) {
                if (V.type === "error" || V.status !== 101) {
                    Wc(G, "Received network error or non-101 status code.");
                    return
                }
                if (Q.length !== 0 && !V.headersList.get("Sec-WebSocket-Protocol")) {
                    Wc(G, "Server did not respond with sent protocols.");
                    return
                }
                if (V.headersList.get("Upgrade")?.toLowerCase() !== "websocket") {
                    Wc(G, 'Server did not set Upgrade header to "websocket".');
                    return
                }
                if (V.headersList.get("Connection")?.toLowerCase() !== "upgrade") {
                    Wc(G, 'Server did not set Connection header to "upgrade".');
                    return
                }
                let K = V.headersList.get("Sec-WebSocket-Accept"),
                    D = vy1.createHash("sha1").update(W + sd8).digest("base64");
                if (K !== D) {
                    Wc(G, "Incorrect hash received in Sec-WebSocket-Accept header.");
                    return
                }
                let H = V.headersList.get("Sec-WebSocket-Extensions"),
                    C;
                if (H !== null) {
                    if (C = Bc8(H), !C.has("permessage-deflate")) {
                        Wc(G, "Sec-WebSocket-Extensions header does not match.");
                        return
                    }
                }
                let E = V.headersList.get("Sec-WebSocket-Protocol");
                if (E !== null) {
                    if (!Wc8("sec-websocket-protocol", J.headersList).includes(E)) {
                        Wc(G, "Protocol was not set in the opening handshake.");
                        return
                    }
                }
                if (V.socket.on("data", A0B), V.socket.on("close", Q0B), V.socket.on("error", B0B), Z3A.open.hasSubscribers) Z3A.open.publish({
                    address: V.socket.address(),
                    protocol: E,
                    extensions: H
                });
                Z(V, C)
            }
        })
    }

    function Vc8(A, Q, B, G) {
        if (ed8(A) || Ac8(A));
        else if (!Qc8(A)) Wc(A, "Connection was closed before it was established."), A[yEA] = kEA.CLOSING;
        else if (A[IlA] === ZlA.NOT_SENT) {
            A[IlA] = ZlA.PROCESSING;
            let Z = new Xc8;
            if (Q !== void 0 && B === void 0) Z.frameData = Buffer.allocUnsafe(2), Z.frameData.writeUInt16BE(Q, 0);
            else if (Q !== void 0 && B !== void 0) Z.frameData = Buffer.allocUnsafe(2 + G), Z.frameData.writeUInt16BE(Q, 0), Z.frameData.write(B, 2, "utf-8");
            else Z.frameData = rd8;
            A[e1B].socket.write(Z.createFrame(od8.CLOSE)), A[IlA] = ZlA.SENT, A[yEA] = kEA.CLOSING
        } else A[yEA] = kEA.CLOSING
    }

    function A0B(A) {
        if (!this.ws[t1B].write(A)) this.pause()
    }

    function Q0B() {
        let {
            ws: A
        } = this, {
            [e1B]: Q
        } = A;
        Q.socket.off("data", A0B), Q.socket.off("close", Q0B), Q.socket.off("error", B0B);
        let B = A[IlA] === ZlA.SENT && A[o1B],
            G = 1005,
            Z = "",
            I = A[t1B].closingInfo;
        if (I && !I.error) G = I.code ?? 1005, Z = I.reason;
        else if (!A[o1B]) G = 1006;
        if (A[yEA] = kEA.CLOSED, td8("close", A, (Y, J) => new Gc8(Y, J), {
                wasClean: B,
                code: G,
                reason: Z
            }), Z3A.close.hasSubscribers) Z3A.close.publish({
            websocket: A,
            code: G,
            reason: Z
        })
    }

    function B0B(A) {
        let {
            ws: Q
        } = this;
        if (Q[yEA] = kEA.CLOSING, Z3A.socketError.hasSubscribers) Z3A.socketError.publish(A);
        this.destroy()
    }
    G0B.exports = {
        establishWebSocketConnection: Fc8,
        closeWebSocketConnection: Vc8
    }
});
var Y0B = U((JL7, I0B) => {
    var {
        createInflateRaw: Kc8,
        Z_DEFAULT_WINDOWBITS: Dc8
    } = UA("node:zlib"), {
        isValidClientWindowBits: Hc8
    } = SEA(), Cc8 = Buffer.from([0, 0, 255, 255]), YlA = Symbol("kBuffer"), JlA = Symbol("kLength");
    class Z0B {
        #A;
        #Q = {};
        constructor(A) {
            this.#Q.serverNoContextTakeover = A.has("server_no_context_takeover"), this.#Q.serverMaxWindowBits = A.get("server_max_window_bits")
        }
        decompress(A, Q, B) {
            if (!this.#A) {
                let G = Dc8;
                if (this.#Q.serverMaxWindowBits) {
                    if (!Hc8(this.#Q.serverMaxWindowBits)) {
                        B(Error("Invalid server_max_window_bits"));
                        return
                    }
                    G = Number.parseInt(this.#Q.serverMaxWindowBits)
                }
                this.#A = Kc8({
                    windowBits: G
                }), this.#A[YlA] = [], this.#A[JlA] = 0, this.#A.on("data", (Z) => {
                    this.#A[YlA].push(Z), this.#A[JlA] += Z.length
                }), this.#A.on("error", (Z) => {
                    this.#A = null, B(Z)
                })
            }
            if (this.#A.write(A), Q) this.#A.write(Cc8);
            this.#A.flush(() => {
                let G = Buffer.concat(this.#A[YlA], this.#A[JlA]);
                this.#A[YlA].length = 0, this.#A[JlA] = 0, B(null, G)
            })
        }
    }
    I0B.exports = {
        PerMessageDeflate: Z0B
    }
});
var U0B = U((WL7, z0B) => {
    var {
        Writable: Ec8
    } = UA("node:stream"), zc8 = UA("node:assert"), {
        parserStates: GU,
        opcodes: I3A,
        states: Uc8,
        emptyBuffer: J0B,
        sentCloseFrameState: W0B
    } = jo(), {
        kReadyState: $c8,
        kSentClose: X0B,
        kResponse: F0B,
        kReceivedClose: V0B
    } = TEA(), {
        channels: WlA
    } = U5A(), {
        isValidStatusCode: wc8,
        isValidOpcode: qc8,
        failWebsocketConnection: pL,
        websocketMessageReceived: K0B,
        utf8Decode: Nc8,
        isControlFrame: D0B,
        isTextBinaryFrame: fy1,
        isContinuationFrame: Lc8
    } = SEA(), {
        WebsocketFrameSend: H0B
    } = GlA(), {
        closeWebSocketConnection: C0B
    } = by1(), {
        PerMessageDeflate: Mc8
    } = Y0B();
    class E0B extends Ec8 {
        #A = [];
        #Q = 0;
        #B = !1;
        #Z = GU.INFO;
        #G = {};
        #J = [];
        #I;
        constructor(A, Q) {
            super();
            if (this.ws = A, this.#I = Q == null ? new Map : Q, this.#I.has("permessage-deflate")) this.#I.set("permessage-deflate", new Mc8(Q))
        }
        _write(A, Q, B) {
            this.#A.push(A), this.#Q += A.length, this.#B = !0, this.run(B)
        }
        run(A) {
            while (this.#B)
                if (this.#Z === GU.INFO) {
                    if (this.#Q < 2) return A();
                    let Q = this.consume(2),
                        B = (Q[0] & 128) !== 0,
                        G = Q[0] & 15,
                        Z = (Q[1] & 128) === 128,
                        I = !B && G !== I3A.CONTINUATION,
                        Y = Q[1] & 127,
                        J = Q[0] & 64,
                        W = Q[0] & 32,
                        X = Q[0] & 16;
                    if (!qc8(G)) return pL(this.ws, "Invalid opcode received"), A();
                    if (Z) return pL(this.ws, "Frame cannot be masked"), A();
                    if (J !== 0 && !this.#I.has("permessage-deflate")) {
                        pL(this.ws, "Expected RSV1 to be clear.");
                        return
                    }
                    if (W !== 0 || X !== 0) {
                        pL(this.ws, "RSV1, RSV2, RSV3 must be clear");
                        return
                    }
                    if (I && !fy1(G)) {
                        pL(this.ws, "Invalid frame type was fragmented.");
                        return
                    }
                    if (fy1(G) && this.#J.length > 0) {
                        pL(this.ws, "Expected continuation frame");
                        return
                    }
                    if (this.#G.fragmented && I) {
                        pL(this.ws, "Fragmented frame exceeded 125 bytes.");
                        return
                    }
                    if ((Y > 125 || I) && D0B(G)) {
                        pL(this.ws, "Control frame either too large or fragmented");
                        return
                    }
                    if (Lc8(G) && this.#J.length === 0 && !this.#G.compressed) {
                        pL(this.ws, "Unexpected continuation frame");
                        return
                    }
                    if (Y <= 125) this.#G.payloadLength = Y, this.#Z = GU.READ_DATA;
                    else if (Y === 126) this.#Z = GU.PAYLOADLENGTH_16;
                    else if (Y === 127) this.#Z = GU.PAYLOADLENGTH_64;
                    if (fy1(G)) this.#G.binaryType = G, this.#G.compressed = J !== 0;
                    this.#G.opcode = G, this.#G.masked = Z, this.#G.fin = B, this.#G.fragmented = I
                } else if (this.#Z === GU.PAYLOADLENGTH_16) {
                if (this.#Q < 2) return A();
                let Q = this.consume(2);
                this.#G.payloadLength = Q.readUInt16BE(0), this.#Z = GU.READ_DATA
            } else if (this.#Z === GU.PAYLOADLENGTH_64) {
                if (this.#Q < 8) return A();
                let Q = this.consume(8),
                    B = Q.readUInt32BE(0);
                if (B > 2147483647) {
                    pL(this.ws, "Received payload length > 2^31 bytes.");
                    return
                }
                let G = Q.readUInt32BE(4);
                this.#G.payloadLength = (B << 8) + G, this.#Z = GU.READ_DATA
            } else if (this.#Z === GU.READ_DATA) {
                if (this.#Q < this.#G.payloadLength) return A();
                let Q = this.consume(this.#G.payloadLength);
                if (D0B(this.#G.opcode)) this.#B = this.parseControlFrame(Q), this.#Z = GU.INFO;
                else if (!this.#G.compressed) {
                    if (this.#J.push(Q), !this.#G.fragmented && this.#G.fin) {
                        let B = Buffer.concat(this.#J);
                        K0B(this.ws, this.#G.binaryType, B), this.#J.length = 0
                    }
                    this.#Z = GU.INFO
                } else {
                    this.#I.get("permessage-deflate").decompress(Q, this.#G.fin, (B, G) => {
                        if (B) {
                            C0B(this.ws, 1007, B.message, B.message.length);
                            return
                        }
                        if (this.#J.push(G), !this.#G.fin) {
                            this.#Z = GU.INFO, this.#B = !0, this.run(A);
                            return
                        }
                        K0B(this.ws, this.#G.binaryType, Buffer.concat(this.#J)), this.#B = !0, this.#Z = GU.INFO, this.#J.length = 0, this.run(A)
                    }), this.#B = !1;
                    break
                }
            }
        }
        consume(A) {
            if (A > this.#Q) throw Error("Called consume() before buffers satiated.");
            else if (A === 0) return J0B;
            if (this.#A[0].length === A) return this.#Q -= this.#A[0].length, this.#A.shift();
            let Q = Buffer.allocUnsafe(A),
                B = 0;
            while (B !== A) {
                let G = this.#A[0],
                    {
                        length: Z
                    } = G;
                if (Z + B === A) {
                    Q.set(this.#A.shift(), B);
                    break
                } else if (Z + B > A) {
                    Q.set(G.subarray(0, A - B), B), this.#A[0] = G.subarray(A - B);
                    break
                } else Q.set(this.#A.shift(), B), B += G.length
            }
            return this.#Q -= A, Q
        }
        parseCloseBody(A) {
            zc8(A.length !== 1);
            let Q;
            if (A.length >= 2) Q = A.readUInt16BE(0);
            if (Q !== void 0 && !wc8(Q)) return {
                code: 1002,
                reason: "Invalid status code",
                error: !0
            };
            let B = A.subarray(2);
            if (B[0] === 239 && B[1] === 187 && B[2] === 191) B = B.subarray(3);
            try {
                B = Nc8(B)
            } catch {
                return {
                    code: 1007,
                    reason: "Invalid UTF-8",
                    error: !0
                }
            }
            return {
                code: Q,
                reason: B,
                error: !1
            }
        }
        parseControlFrame(A) {
            let {
                opcode: Q,
                payloadLength: B
            } = this.#G;
            if (Q === I3A.CLOSE) {
                if (B === 1) return pL(this.ws, "Received close frame with a 1-byte body."), !1;
                if (this.#G.closeInfo = this.parseCloseBody(A), this.#G.closeInfo.error) {
                    let {
                        code: G,
                        reason: Z
                    } = this.#G.closeInfo;
                    return C0B(this.ws, G, Z, Z.length), pL(this.ws, Z), !1
                }
                if (this.ws[X0B] !== W0B.SENT) {
                    let G = J0B;
                    if (this.#G.closeInfo.code) G = Buffer.allocUnsafe(2), G.writeUInt16BE(this.#G.closeInfo.code, 0);
                    let Z = new H0B(G);
                    this.ws[F0B].socket.write(Z.createFrame(I3A.CLOSE), (I) => {
                        if (!I) this.ws[X0B] = W0B.SENT
                    })
                }
                return this.ws[$c8] = Uc8.CLOSING, this.ws[V0B] = !0, !1
            } else if (Q === I3A.PING) {
                if (!this.ws[V0B]) {
                    let G = new H0B(A);
                    if (this.ws[F0B].socket.write(G.createFrame(I3A.PONG)), WlA.ping.hasSubscribers) WlA.ping.publish({
                        payload: A
                    })
                }
            } else if (Q === I3A.PONG) {
                if (WlA.pong.hasSubscribers) WlA.pong.publish({
                    payload: A
                })
            }
            return !0
        }
        get closingInfo() {
            return this.#G.closeInfo
        }
    }
    z0B.exports = {
        ByteParser: E0B
    }
});
var M0B = U((XL7, L0B) => {
    var {
        WebsocketFrameSend: Oc8
    } = GlA(), {
        opcodes: $0B,
        sendHints: Y3A
    } = jo(), Rc8 = qk1(), w0B = Buffer[Symbol.species];
    class N0B {
        #A = new Rc8;
        #Q = !1;
        #B;
        constructor(A) {
            this.#B = A
        }
        add(A, Q, B) {
            if (B !== Y3A.blob) {
                let Z = q0B(A, B);
                if (!this.#Q) this.#B.write(Z, Q);
                else {
                    let I = {
                        promise: null,
                        callback: Q,
                        frame: Z
                    };
                    this.#A.push(I)
                }
                return
            }
            let G = {
                promise: A.arrayBuffer().then((Z) => {
                    G.promise = null, G.frame = q0B(Z, B)
                }),
                callback: Q,
                frame: null
            };
            if (this.#A.push(G), !this.#Q) this.#Z()
        }
        async #Z() {
            this.#Q = !0;
            let A = this.#A;
            while (!A.isEmpty()) {
                let Q = A.shift();
                if (Q.promise !== null) await Q.promise;
                this.#B.write(Q.frame, Q.callback), Q.callback = Q.frame = null
            }
            this.#Q = !1
        }
    }

    function q0B(A, Q) {
        return new Oc8(Tc8(A, Q)).createFrame(Q === Y3A.string ? $0B.TEXT : $0B.BINARY)
    }

    function Tc8(A, Q) {
        switch (Q) {
            case Y3A.string:
                return Buffer.from(A);
            case Y3A.arrayBuffer:
            case Y3A.blob:
                return new w0B(A);
            case Y3A.typedArray:
                return new w0B(A.buffer, A.byteOffset, A.byteLength)
        }
    }
    L0B.exports = {
        SendQueue: N0B
    }
});
var y0B = U((FL7, k0B) => {
    var {
        webidl: R4
    } = FD(), {
        URLSerializer: Pc8
    } = tz(), {
        environmentSettingsObject: O0B
    } = Rw(), {
        staticPropertyDescriptors: Xc,
        states: xEA,
        sentCloseFrameState: jc8,
        sendHints: XlA
    } = jo(), {
        kWebSocketURL: R0B,
        kReadyState: hy1,
        kController: Sc8,
        kBinaryType: FlA,
        kResponse: T0B,
        kSentClose: _c8,
        kByteParser: kc8
    } = TEA(), {
        isConnecting: yc8,
        isEstablished: xc8,
        isClosing: vc8,
        isValidSubprotocol: bc8,
        fireEvent: P0B
    } = SEA(), {
        establishWebSocketConnection: fc8,
        closeWebSocketConnection: j0B
    } = by1(), {
        ByteParser: hc8
    } = U0B(), {
        kEnumerableProperty: lL,
        isBlobLike: S0B
    } = M6(), {
        getGlobalDispatcher: gc8
    } = SpA(), {
        types: _0B
    } = UA("node:util"), {
        ErrorEvent: uc8,
        CloseEvent: mc8
    } = B3A(), {
        SendQueue: dc8
    } = M0B();
    class k7 extends EventTarget {
        #A = {
            open: null,
            error: null,
            close: null,
            message: null
        };
        #Q = 0;
        #B = "";
        #Z = "";
        #G;
        constructor(A, Q = []) {
            super();
            R4.util.markAsUncloneable(this);
            let B = "WebSocket constructor";
            R4.argumentLengthCheck(arguments, 1, B);
            let G = R4.converters["DOMString or sequence<DOMString> or WebSocketInit"](Q, B, "options");
            A = R4.converters.USVString(A, B, "url"), Q = G.protocols;
            let Z = O0B.settingsObject.baseUrl,
                I;
            try {
                I = new URL(A, Z)
            } catch (J) {
                throw new DOMException(J, "SyntaxError")
            }
            if (I.protocol === "http:") I.protocol = "ws:";
            else if (I.protocol === "https:") I.protocol = "wss:";
            if (I.protocol !== "ws:" && I.protocol !== "wss:") throw new DOMException(`Expected a ws: or wss: protocol, got ${I.protocol}`, "SyntaxError");
            if (I.hash || I.href.endsWith("#")) throw new DOMException("Got fragment", "SyntaxError");
            if (typeof Q === "string") Q = [Q];
            if (Q.length !== new Set(Q.map((J) => J.toLowerCase())).size) throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
            if (Q.length > 0 && !Q.every((J) => bc8(J))) throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
            this[R0B] = new URL(I.href);
            let Y = O0B.settingsObject;
            this[Sc8] = fc8(I, Q, Y, this, (J, W) => this.#J(J, W), G), this[hy1] = k7.CONNECTING, this[_c8] = jc8.NOT_SENT, this[FlA] = "blob"
        }
        close(A = void 0, Q = void 0) {
            R4.brandCheck(this, k7);
            let B = "WebSocket.close";
            if (A !== void 0) A = R4.converters["unsigned short"](A, B, "code", {
                clamp: !0
            });
            if (Q !== void 0) Q = R4.converters.USVString(Q, B, "reason");
            if (A !== void 0) {
                if (A !== 1000 && (A < 3000 || A > 4999)) throw new DOMException("invalid code", "InvalidAccessError")
            }
            let G = 0;
            if (Q !== void 0) {
                if (G = Buffer.byteLength(Q), G > 123) throw new DOMException(`Reason must be less than 123 bytes; received ${G}`, "SyntaxError")
            }
            j0B(this, A, Q, G)
        }
        send(A) {
            R4.brandCheck(this, k7);
            let Q = "WebSocket.send";
            if (R4.argumentLengthCheck(arguments, 1, Q), A = R4.converters.WebSocketSendData(A, Q, "data"), yc8(this)) throw new DOMException("Sent before connected.", "InvalidStateError");
            if (!xc8(this) || vc8(this)) return;
            if (typeof A === "string") {
                let B = Buffer.byteLength(A);
                this.#Q += B, this.#G.add(A, () => {
                    this.#Q -= B
                }, XlA.string)
            } else if (_0B.isArrayBuffer(A)) this.#Q += A.byteLength, this.#G.add(A, () => {
                this.#Q -= A.byteLength
            }, XlA.arrayBuffer);
            else if (ArrayBuffer.isView(A)) this.#Q += A.byteLength, this.#G.add(A, () => {
                this.#Q -= A.byteLength
            }, XlA.typedArray);
            else if (S0B(A)) this.#Q += A.size, this.#G.add(A, () => {
                this.#Q -= A.size
            }, XlA.blob)
        }
        get readyState() {
            return R4.brandCheck(this, k7), this[hy1]
        }
        get bufferedAmount() {
            return R4.brandCheck(this, k7), this.#Q
        }
        get url() {
            return R4.brandCheck(this, k7), Pc8(this[R0B])
        }
        get extensions() {
            return R4.brandCheck(this, k7), this.#Z
        }
        get protocol() {
            return R4.brandCheck(this, k7), this.#B
        }
        get onopen() {
            return R4.brandCheck(this, k7), this.#A.open
        }
        set onopen(A) {
            if (R4.brandCheck(this, k7), this.#A.open) this.removeEventListener("open", this.#A.open);
            if (typeof A === "function") this.#A.open = A, this.addEventListener("open", A);
            else this.#A.open = null
        }
        get onerror() {
            return R4.brandCheck(this, k7), this.#A.error
        }
        set onerror(A) {
            if (R4.brandCheck(this, k7), this.#A.error) this.removeEventListener("error", this.#A.error);
            if (typeof A === "function") this.#A.error = A, this.addEventListener("error", A);
            else this.#A.error = null
        }
        get onclose() {
            return R4.brandCheck(this, k7), this.#A.close
        }
        set onclose(A) {
            if (R4.brandCheck(this, k7), this.#A.close) this.removeEventListener("close", this.#A.close);
            if (typeof A === "function") this.#A.close = A, this.addEventListener("close", A);
            else this.#A.close = null
        }
        get onmessage() {
            return R4.brandCheck(this, k7), this.#A.message
        }
        set onmessage(A) {
            if (R4.brandCheck(this, k7), this.#A.message) this.removeEventListener("message", this.#A.message);
            if (typeof A === "function") this.#A.message = A, this.addEventListener("message", A);
            else this.#A.message = null
        }
        get binaryType() {
            return R4.brandCheck(this, k7), this[FlA]
        }
        set binaryType(A) {
            if (R4.brandCheck(this, k7), A !== "blob" && A !== "arraybuffer") this[FlA] = "blob";
            else this[FlA] = A
        }
        #J(A, Q) {
            this[T0B] = A;
            let B = new hc8(this, Q);
            B.on("drain", cc8), B.on("error", pc8.bind(this)), A.socket.ws = this, this[kc8] = B, this.#G = new dc8(A.socket), this[hy1] = xEA.OPEN;
            let G = A.headersList.get("sec-websocket-extensions");
            if (G !== null) this.#Z = G;
            let Z = A.headersList.get("sec-websocket-protocol");
            if (Z !== null) this.#B = Z;
            P0B("open", this)
        }
    }
    k7.CONNECTING = k7.prototype.CONNECTING = xEA.CONNECTING;
    k7.OPEN = k7.prototype.OPEN = xEA.OPEN;
    k7.CLOSING = k7.prototype.CLOSING = xEA.CLOSING;
    k7.CLOSED = k7.prototype.CLOSED = xEA.CLOSED;
    Object.defineProperties(k7.prototype, {
        CONNECTING: Xc,
        OPEN: Xc,
        CLOSING: Xc,
        CLOSED: Xc,
        url: lL,
        readyState: lL,
        bufferedAmount: lL,
        onopen: lL,
        onerror: lL,
        onclose: lL,
        close: lL,
        onmessage: lL,
        binaryType: lL,
        send: lL,
        extensions: lL,
        protocol: lL,
        [Symbol.toStringTag]: {
            value: "WebSocket",
            writable: !1,
            enumerable: !1,
            configurable: !0
        }
    });
    Object.defineProperties(k7, {
        CONNECTING: Xc,
        OPEN: Xc,
        CLOSING: Xc,
        CLOSED: Xc
    });
    R4.converters["sequence<DOMString>"] = R4.sequenceConverter(R4.converters.DOMString);
    R4.converters["DOMString or sequence<DOMString>"] = function(A, Q, B) {
        if (R4.util.Type(A) === "Object" && Symbol.iterator in A) return R4.converters["sequence<DOMString>"](A);
        return R4.converters.DOMString(A, Q, B)
    };
    R4.converters.WebSocketInit = R4.dictionaryConverter([{
        key: "protocols",
        converter: R4.converters["DOMString or sequence<DOMString>"],
        defaultValue: () => []
    }, {
        key: "dispatcher",
        converter: R4.converters.any,
        defaultValue: () => gc8()
    }, {
        key: "headers",
        converter: R4.nullableConverter(R4.converters.HeadersInit)
    }]);
    R4.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(A) {
        if (R4.util.Type(A) === "Object" && !(Symbol.iterator in A)) return R4.converters.WebSocketInit(A);
        return {
            protocols: R4.converters["DOMString or sequence<DOMString>"](A)
        }
    };
    R4.converters.WebSocketSendData = function(A) {
        if (R4.util.Type(A) === "Object") {
            if (S0B(A)) return R4.converters.Blob(A, {
                strict: !1
            });
            if (ArrayBuffer.isView(A) || _0B.isArrayBuffer(A)) return R4.converters.BufferSource(A)
        }
        return R4.converters.USVString(A)
    };

    function cc8() {
        this.ws[T0B].socket.resume()
    }

    function pc8(A) {
        let Q, B;
        if (A instanceof mc8) Q = A.reason, B = A.code;
        else Q = A.message;
        P0B("error", this, () => new uc8("error", {
            error: A,
            message: Q
        })), j0B(this, B)
    }
    k0B.exports = {
        WebSocket: k7
    }
});
var gy1 = U((VL7, x0B) => {
    function lc8(A) {
        return A.indexOf("\x00") === -1
    }

    function ic8(A) {
        if (A.length === 0) return !1;
        for (let Q = 0; Q < A.length; Q++)
            if (A.charCodeAt(Q) < 48 || A.charCodeAt(Q) > 57) return !1;
        return !0
    }

    function nc8(A) {
        return new Promise((Q) => {
            setTimeout(Q, A).unref()
        })
    }
    x0B.exports = {
        isValidLastEventId: lc8,
        isASCIINumber: ic8,
        delay: nc8
    }
});
var g0B = U((KL7, h0B) => {
    var {
        Transform: ac8
    } = UA("node:stream"), {
        isASCIINumber: v0B,
        isValidLastEventId: b0B
    } = gy1(), Lb = [239, 187, 191];
    class f0B extends ac8 {
        state = null;
        checkBOM = !0;
        crlfCheck = !1;
        eventEndCheck = !1;
        buffer = null;
        pos = 0;
        event = {
            data: void 0,
            event: void 0,
            id: void 0,
            retry: void 0
        };
        constructor(A = {}) {
            A.readableObjectMode = !0;
            super(A);
            if (this.state = A.eventSourceSettings || {}, A.push) this.push = A.push
        }
        _transform(A, Q, B) {
            if (A.length === 0) {
                B();
                return
            }
            if (this.buffer) this.buffer = Buffer.concat([this.buffer, A]);
            else this.buffer = A;
            if (this.checkBOM) switch (this.buffer.length) {
                case 1:
                    if (this.buffer[0] === Lb[0]) {
                        B();
                        return
                    }
                    this.checkBOM = !1, B();
                    return;
                case 2:
                    if (this.buffer[0] === Lb[0] && this.buffer[1] === Lb[1]) {
                        B();
                        return
                    }
                    this.checkBOM = !1;
                    break;
                case 3:
                    if (this.buffer[0] === Lb[0] && this.buffer[1] === Lb[1] && this.buffer[2] === Lb[2]) {
                        this.buffer = Buffer.alloc(0), this.checkBOM = !1, B();
                        return
                    }
                    this.checkBOM = !1;
                    break;
                default:
                    if (this.buffer[0] === Lb[0] && this.buffer[1] === Lb[1] && this.buffer[2] === Lb[2]) this.buffer = this.buffer.subarray(3);
                    this.checkBOM = !1;
                    break
            }
            while (this.pos < this.buffer.length) {
                if (this.eventEndCheck) {
                    if (this.crlfCheck) {
                        if (this.buffer[this.pos] === 10) {
                            this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, this.crlfCheck = !1;
                            continue
                        }
                        this.crlfCheck = !1
                    }
                    if (this.buffer[this.pos] === 10 || this.buffer[this.pos] === 13) {
                        if (this.buffer[this.pos] === 13) this.crlfCheck = !0;
                        if (this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, this.event.data !== void 0 || this.event.event || this.event.id || this.event.retry) this.processEvent(this.event);
                        this.clearEvent();
                        continue
                    }
                    this.eventEndCheck = !1;
                    continue
                }
                if (this.buffer[this.pos] === 10 || this.buffer[this.pos] === 13) {
                    if (this.buffer[this.pos] === 13) this.crlfCheck = !0;
                    this.parseLine(this.buffer.subarray(0, this.pos), this.event), this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, this.eventEndCheck = !0;
                    continue
                }
                this.pos++
            }
            B()
        }
        parseLine(A, Q) {
            if (A.length === 0) return;
            let B = A.indexOf(58);
            if (B === 0) return;
            let G = "",
                Z = "";
            if (B !== -1) {
                G = A.subarray(0, B).toString("utf8");
                let I = B + 1;
                if (A[I] === 32) ++I;
                Z = A.subarray(I).toString("utf8")
            } else G = A.toString("utf8"), Z = "";
            switch (G) {
                case "data":
                    if (Q[G] === void 0) Q[G] = Z;
                    else Q[G] += `
${Z}`;
                    break;
                case "retry":
                    if (v0B(Z)) Q[G] = Z;
                    break;
                case "id":
                    if (b0B(Z)) Q[G] = Z;
                    break;
                case "event":
                    if (Z.length > 0) Q[G] = Z;
                    break
            }
        }
        processEvent(A) {
            if (A.retry && v0B(A.retry)) this.state.reconnectionTime = parseInt(A.retry, 10);
            if (A.id && b0B(A.id)) this.state.lastEventId = A.id;
            if (A.data !== void 0) this.push({
                type: A.event || "message",
                options: {
                    data: A.data,
                    lastEventId: this.state.lastEventId,
                    origin: this.state.origin
                }
            })
        }
        clearEvent() {
            this.event = {
                data: void 0,
                event: void 0,
                id: void 0,
                retry: void 0
            }
        }
    }
    h0B.exports = {
        EventSourceStream: f0B
    }
});
var n0B = U((DL7, i0B) => {
    var {
        pipeline: sc8
    } = UA("node:stream"), {
        fetching: rc8
    } = NEA(), {
        makeRequest: oc8
    } = r5A(), {
        webidl: Mb
    } = FD(), {
        EventSourceStream: tc8
    } = g0B(), {
        parseMIMEType: ec8
    } = tz(), {
        createFastMessageEvent: Ap8
    } = B3A(), {
        isNetworkError: u0B
    } = wEA(), {
        delay: Qp8
    } = gy1(), {
        kEnumerableProperty: So
    } = M6(), {
        environmentSettingsObject: m0B
    } = Rw(), d0B = !1, c0B = 3000, vEA = 0, p0B = 1, bEA = 2, Bp8 = "anonymous", Gp8 = "use-credentials";
    class J3A extends EventTarget {
        #A = {
            open: null,
            error: null,
            message: null
        };
        #Q = null;
        #B = !1;
        #Z = vEA;
        #G = null;
        #J = null;
        #I;
        #F;
        constructor(A, Q = {}) {
            super();
            Mb.util.markAsUncloneable(this);
            let B = "EventSource constructor";
            if (Mb.argumentLengthCheck(arguments, 1, B), !d0B) d0B = !0, process.emitWarning("EventSource is experimental, expect them to change at any time.", {
                code: "UNDICI-ES"
            });
            A = Mb.converters.USVString(A, B, "url"), Q = Mb.converters.EventSourceInitDict(Q, B, "eventSourceInitDict"), this.#I = Q.dispatcher, this.#F = {
                lastEventId: "",
                reconnectionTime: c0B
            };
            let G = m0B,
                Z;
            try {
                Z = new URL(A, G.settingsObject.baseUrl), this.#F.origin = Z.origin
            } catch (J) {
                throw new DOMException(J, "SyntaxError")
            }
            this.#Q = Z.href;
            let I = Bp8;
            if (Q.withCredentials) I = Gp8, this.#B = !0;
            let Y = {
                redirect: "follow",
                keepalive: !0,
                mode: "cors",
                credentials: I === "anonymous" ? "same-origin" : "omit",
                referrer: "no-referrer"
            };
            Y.client = m0B.settingsObject, Y.headersList = [
                ["accept", {
                    name: "accept",
                    value: "text/event-stream"
                }]
            ], Y.cache = "no-store", Y.initiator = "other", Y.urlList = [new URL(this.#Q)], this.#G = oc8(Y), this.#V()
        }
        get readyState() {
            return this.#Z
        }
        get url() {
            return this.#Q
        }
        get withCredentials() {
            return this.#B
        }
        #V() {
            if (this.#Z === bEA) return;
            this.#Z = vEA;
            let A = {
                    request: this.#G,
                    dispatcher: this.#I
                },
                Q = (B) => {
                    if (u0B(B)) this.dispatchEvent(new Event("error")), this.close();
                    this.#W()
                };
            A.processResponseEndOfBody = Q, A.processResponse = (B) => {
                if (u0B(B))
                    if (B.aborted) {
                        this.close(), this.dispatchEvent(new Event("error"));
                        return
                    } else {
                        this.#W();
                        return
                    } let G = B.headersList.get("content-type", !0),
                    Z = G !== null ? ec8(G) : "failure",
                    I = Z !== "failure" && Z.essence === "text/event-stream";
                if (B.status !== 200 || I === !1) {
                    this.close(), this.dispatchEvent(new Event("error"));
                    return
                }
                this.#Z = p0B, this.dispatchEvent(new Event("open")), this.#F.origin = B.urlList[B.urlList.length - 1].origin;
                let Y = new tc8({
                    eventSourceSettings: this.#F,
                    push: (J) => {
                        this.dispatchEvent(Ap8(J.type, J.options))
                    }
                });
                sc8(B.body.stream, Y, (J) => {
                    if (J?.aborted === !1) this.close(), this.dispatchEvent(new Event("error"))
                })
            }, this.#J = rc8(A)
        }
        async #W() {
            if (this.#Z === bEA) return;
            if (this.#Z = vEA, this.dispatchEvent(new Event("error")), await Qp8(this.#F.reconnectionTime), this.#Z !== vEA) return;
            if (this.#F.lastEventId.length) this.#G.headersList.set("last-event-id", this.#F.lastEventId, !0);
            this.#V()
        }
        close() {
            if (Mb.brandCheck(this, J3A), this.#Z === bEA) return;
            this.#Z = bEA, this.#J.abort(), this.#G = null
        }
        get onopen() {
            return this.#A.open
        }
        set onopen(A) {
            if (this.#A.open) this.removeEventListener("open", this.#A.open);
            if (typeof A === "function") this.#A.open = A, this.addEventListener("open", A);
            else this.#A.open = null
        }
        get onmessage() {
            return this.#A.message
        }
        set onmessage(A) {
            if (this.#A.message) this.removeEventListener("message", this.#A.message);
            if (typeof A === "function") this.#A.message = A, this.addEventListener("message", A);
            else this.#A.message = null
        }
        get onerror() {
            return this.#A.error
        }
        set onerror(A) {
            if (this.#A.error) this.removeEventListener("error", this.#A.error);
            if (typeof A === "function") this.#A.error = A, this.addEventListener("error", A);
            else this.#A.error = null
        }
    }
    var l0B = {
        CONNECTING: {
            __proto__: null,
            configurable: !1,
            enumerable: !0,
            value: vEA,
            writable: !1
        },
        OPEN: {
            __proto__: null,
            configurable: !1,
            enumerable: !0,
            value: p0B,
            writable: !1
        },
        CLOSED: {
            __proto__: null,
            configurable: !1,
            enumerable: !0,
            value: bEA,
            writable: !1
        }
    };
    Object.defineProperties(J3A, l0B);
    Object.defineProperties(J3A.prototype, l0B);
    Object.defineProperties(J3A.prototype, {
        close: So,
        onerror: So,
        onmessage: So,
        onopen: So,
        readyState: So,
        url: So,
        withCredentials: So
    });
    Mb.converters.EventSourceInitDict = Mb.dictionaryConverter([{
        key: "withCredentials",
        converter: Mb.converters.boolean,
        defaultValue: () => !1
    }, {
        key: "dispatcher",
        converter: Mb.converters.any
    }]);
    i0B.exports = {
        EventSource: J3A,
        defaultReconnectionTime: c0B
    }
});

function fEA(A) {
    return (Q, B, G) => {
        if (typeof B === "function") G = B, B = null;
        if (!Q || typeof Q !== "string" && typeof Q !== "object" && !(Q instanceof URL)) throw new VlA("invalid url");
        if (B != null && typeof B !== "object") throw new VlA("invalid opts");
        if (B && B.path != null) {
            if (typeof B.path !== "string") throw new VlA("invalid opts.path");
            let Y = B.path;
            if (!B.path.startsWith("/")) Y = `/${Y}`;
            Q = new URL(KlA.parseOrigin(Q).origin + Y)
        } else {
            if (!B) B = typeof Q === "object" ? Q : {};
            Q = KlA.parseURL(Q)
        }
        let {
            agent: Z,
            dispatcher: I = Wp8()
        } = B;
        if (Z) throw new VlA("unsupported opts.agent. Did you mean opts.client?");
        return A.call(I, {
            ...B,
            origin: Q.origin,
            path: Q.search ? `${Q.pathname}${Q.search}` : Q.pathname,
            method: B.method || (B.body ? "PUT" : "GET")
        }, G)
    }
}
var HL7, Zp8, CL7, EL7, Ip8, zL7, Yp8, UL7, Jp8, KlA, VlA, W3A, $L7, wL7, qL7, NL7, LL7, ML7, Wp8, Xp8, OL7, RL7, TL7, uy1, my1, Kp8, Dp8, DlA, PL7, Hp8, Cp8, Ep8, zp8, Up8, $p8, jL7, SL7, Fp8, Vp8, wp8, _L7, kL7, yL7, xL7, vL7, bL7, fL7, hL7, gL7, qp8, Np8, Lp8, Mp8, Op8, Rp8, uL7;
var dy1 = L(() => {
    HL7 = ZEA(), Zp8 = fCA(), CL7 = h5A(), EL7 = SoQ(), Ip8 = g5A(), zL7 = yk1(), Yp8 = roQ(), UL7 = GtQ(), Jp8 = U7(), KlA = M6(), {
        InvalidArgumentError: VlA
    } = Jp8, W3A = rtQ(), $L7 = gCA(), wL7 = Zy1(), qL7 = veQ(), NL7 = Yy1(), LL7 = nk1(), ML7 = qpA(), {
        getGlobalDispatcher: Wp8,
        setGlobalDispatcher: Xp8
    } = SpA(), OL7 = _pA(), RL7 = VpA(), TL7 = KpA();
    Object.assign(Zp8.prototype, W3A);
    uy1 = Ip8, my1 = Yp8, Kp8 = {
        redirect: deQ(),
        retry: peQ(),
        dump: neQ(),
        dns: teQ()
    }, Dp8 = {
        parseHeaders: KlA.parseHeaders,
        headerNameToString: KlA.headerNameToString
    };
    DlA = Xp8;
    PL7 = NEA().fetch;
    Hp8 = Mo().Headers, Cp8 = wEA().Response, Ep8 = r5A().Request, zp8 = lCA().FormData, Up8 = globalThis.File ?? UA("node:buffer").File, $p8 = H1B().FileReader;
    ({
        setGlobalOrigin: jL7,
        getGlobalOrigin: SL7
    } = p_1()), {
        CacheStorage: Fp8
    } = L1B(), {
        kConstruct: Vp8
    } = opA();
    wp8 = new Fp8(Vp8);
    ({
        deleteCookie: _L7,
        getCookies: kL7,
        getSetCookies: yL7,
        setCookie: xL7
    } = v1B()), {
        parseMIMEType: vL7,
        serializeAMimeType: bL7
    } = tz(), {
        CloseEvent: fL7,
        ErrorEvent: hL7,
        MessageEvent: gL7
    } = B3A();
    qp8 = y0B().WebSocket, Np8 = fEA(W3A.request), Lp8 = fEA(W3A.stream), Mp8 = fEA(W3A.pipeline), Op8 = fEA(W3A.connect), Rp8 = fEA(W3A.upgrade);
    ({
        EventSource: uL7
    } = n0B())
});
import {
    Agent as Tp8
} from "https";

function cy1() {
    let A = oR();
    if (!A) return;
    return {
        cert: A.cert,
        key: A.key,
        passphrase: A.passphrase
    }
}

function py1() {
    let A = oR();
    if (!A) return {};
    let Q = {
            cert: A.cert,
            key: A.key,
            passphrase: A.passphrase
        },
        B = new uy1({
            connect: Q,
            pipelining: 1
        });
    return g("mTLS: Created undici agent with custom certificates"), {
        dispatcher: B
    }
}

function r0B() {
    if (!oR()) return;
    if (process.env.NODE_EXTRA_CA_CERTS) g("NODE_EXTRA_CA_CERTS detected - Node.js will automatically append to built-in CAs")
}
var oR, s0B;
var X3A = L(() => {
    o2();
    dy1();
    D0();
    o0();
    oR = t1(() => {
        let A = {};
        if (process.env.CLAUDE_CODE_CLIENT_CERT) try {
            A.cert = OA().readFileSync(process.env.CLAUDE_CODE_CLIENT_CERT, {
                encoding: "utf8"
            }), g("mTLS: Loaded client certificate from CLAUDE_CODE_CLIENT_CERT")
        } catch (Q) {
            g(`mTLS: Failed to load client certificate: ${Q}`, {
                level: "error"
            })
        }
        if (process.env.CLAUDE_CODE_CLIENT_KEY) try {
            A.key = OA().readFileSync(process.env.CLAUDE_CODE_CLIENT_KEY, {
                encoding: "utf8"
            }), g("mTLS: Loaded client key from CLAUDE_CODE_CLIENT_KEY")
        } catch (Q) {
            g(`mTLS: Failed to load client key: ${Q}`, {
                level: "error"
            })
        }
        if (process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE) A.passphrase = process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE, g("mTLS: Using client key passphrase");
        if (Object.keys(A).length === 0) return;
        return A
    }), s0B = t1(() => {
        let A = oR();
        if (!A) return;
        let Q = {
            ...A,
            keepAlive: !0
        };
        return g("mTLS: Creating HTTPS agent with custom certificates"), new Tp8(Q)
    })
});

function Pp8(A) {
    switch (A.family) {
        case 0:
        case 4:
        case 6:
            return A.family;
        case "IPv6":
            return 6;
        case "IPv4":
        case void 0:
            return 4;
        default:
            throw Error(`Unsupported address family: ${A.family}`)
    }
}

function Fc() {
    return process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY
}

function jp8() {
    return process.env.no_proxy || process.env.NO_PROXY
}

function HlA(A) {
    let Q = jp8();
    if (!Q) return !1;
    if (Q === "*") return !0;
    try {
        let B = new URL(A),
            G = B.hostname.toLowerCase(),
            Z = B.port || (B.protocol === "https:" ? "443" : "80"),
            I = `${G}:${Z}`;
        return Q.split(/[,\s]+/).filter(Boolean).some((J) => {
            if (J = J.toLowerCase().trim(), J.includes(":")) return I === J;
            if (J.startsWith(".")) {
                let W = J;
                return G === J.substring(1) || G.endsWith(W)
            }
            return G === J
        })
    } catch {
        return !1
    }
}

function e0B(A) {
    let Q = oR(),
        B = {
            ...Q && {
                cert: Q.cert,
                key: Q.key,
                passphrase: Q.passphrase
            }
        };
    if (V0(process.env.CLAUDE_CODE_PROXY_RESOLVES_HOSTS)) B.lookup = (G, Z, I) => {
        I(null, G, Pp8(Z))
    };
    return new ly1.HttpsProxyAgent(A, B)
}

function hEA(A) {
    let Q = Fc();
    if (!Q) return;
    if (HlA(A)) return;
    return e0B(Q)
}

function F3A() {
    let A = Fc(),
        Q = py1();
    if (A) return {
        dispatcher: AQB(A)
    };
    return Q
}

function QQB() {
    let A = Fc(),
        Q = s0B();
    if (A) {
        GQ.defaults.proxy = !1;
        let B = e0B(A);
        GQ.interceptors.request.use((G) => {
            if (G.url && HlA(G.url))
                if (Q) G.httpsAgent = Q, G.httpAgent = Q;
                else delete G.httpsAgent, delete G.httpAgent;
            else G.httpsAgent = B, G.httpAgent = B;
            return G
        }), DlA(AQB(A))
    } else if (Q) {
        GQ.defaults.httpsAgent = Q;
        let B = py1();
        if (B.dispatcher) DlA(B.dispatcher)
    }
}

function BQB() {
    let A = Fc();
    if (!A) return {};
    let Q = new ly1.HttpsProxyAgent(A),
        B = new t0B.NodeHttpHandler({
            httpAgent: Q,
            httpsAgent: Q
        });
    return {
        requestHandler: B,
        credentials: o0B.defaultProvider({
            clientConfig: {
                requestHandler: B
            }
        })
    }
}
var o0B, t0B, ly1, AQB;
var Vc = L(() => {
    w3();
    o2();
    dy1();
    X3A();
    hQ();
    o0B = GA(C_1(), 1), t0B = GA(oG(), 1), ly1 = GA(vCA(), 1);
    AQB = t1((A) => {
        let Q = oR(),
            B = {
                httpProxy: A,
                httpsProxy: A,
                noProxy: process.env.NO_PROXY || process.env.no_proxy
            };
        if (Q) B.connect = {
            cert: Q.cert,
            key: Q.key,
            passphrase: Q.passphrase
        };
        return new my1(B)
    })
});

function Z_(A, Q) {
    return A.find((B) => B.includes(Q)) ?? null
}
async function ZQB() {
    let Q = {
        region: OBA(),
        ...BQB()
    };
    if (!process.env.AWS_BEARER_TOKEN_BEDROCK) {
        let B = await K3A();