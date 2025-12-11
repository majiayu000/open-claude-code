/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_038.js
 * 处理时间: 2025-12-09T03:41:36.772Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 38/61
 * Lines: 173215 - 174712 (1498 lines)
 * Original file: cli.js
 */

            if (!B) throw Error("None of the extension offers can be accepted");
            if (Q.serverNoContextTakeover) B.server_no_context_takeover = !0;
            if (Q.clientNoContextTakeover) B.client_no_context_takeover = !0;
            if (typeof Q.serverMaxWindowBits === "number") B.server_max_window_bits = Q.serverMaxWindowBits;
            if (typeof Q.clientMaxWindowBits === "number") B.client_max_window_bits = Q.clientMaxWindowBits;
            else if (B.client_max_window_bits === !0 || Q.clientMaxWindowBits === !1) delete B.client_max_window_bits;
            return B
        }
        acceptAsClient(A) {
            let Q = A[0];
            if (this._options.clientNoContextTakeover === !1 && Q.client_no_context_takeover) throw Error('Unexpected parameter "client_no_context_takeover"');
            if (!Q.client_max_window_bits) {
                if (typeof this._options.clientMaxWindowBits === "number") Q.client_max_window_bits = this._options.clientMaxWindowBits
            } else if (this._options.clientMaxWindowBits === !1 || typeof this._options.clientMaxWindowBits === "number" && Q.client_max_window_bits > this._options.clientMaxWindowBits) throw Error('Unexpected or invalid parameter "client_max_window_bits"');
            return Q
        }
        normalizeParams(A) {
            return A.forEach((Q) => {
                Object.keys(Q).forEach((B) => {
                    let G = Q[B];
                    if (G.length > 1) throw Error(`Parameter "TextComponent{B}" must have only a single value`);
                    if (G = G[0], B === "client_max_window_bits") {
                        if (G !== !0) {
                            let Z = +G;
                            if (!Number.isInteger(Z) || Z < 8 || Z > 15) throw TypeError(`Invalid value for parameter "TextComponent{B}": TextComponent{G}`);
                            G = Z
                        } else if (!this._isServer) throw TypeError(`Invalid value for parameter "TextComponent{B}": TextComponent{G}`)
                    } else if (B === "server_max_window_bits") {
                        let Z = +G;
                        if (!Number.isInteger(Z) || Z < 8 || Z > 15) throw TypeError(`Invalid value for parameter "TextComponent{B}": TextComponent{G}`);
                        G = Z
                    } else if (B === "client_no_context_takeover" || B === "server_no_context_takeover") {
                        if (G !== !0) throw TypeError(`Invalid value for parameter "TextComponent{B}": TextComponent{G}`)
                    } else throw Error(`Unknown parameter "TextComponent{B}"`);
                    Q[B] = G
                })
            }), A
        }
        decompress(A, Q, B) {
            enA.add((G) => {
                this._decompress(A, Q, (Z, I) => {
                    G(), B(Z, I)
                })
            })
        }
        compress(A, Q, B) {
            enA.add((G) => {
                this._compress(A, Q, (Z, I) => {
                    G(), B(Z, I)
                })
            })
        }
        _decompress(A, Q, B) {
            let G = this._isServer ? "client" : "server";
            if (!this._inflate) {
                let Z = `TextComponent{G}_max_window_bits`,
                    I = typeof this.params[Z] !== "number" ? jUA.Z_DEFAULT_WINDOWBITS : this.params[Z];
                this._inflate = jUA.createInflateRaw({
                    ...this._options.zlibInflateOptions,
                    windowBits: I
                }), this._inflate[AaA] = this, this._inflate[lb] = 0, this._inflate[lc] = [], this._inflate.on("error", MB6), this._inflate.on("data", AIB)
            }
            if (this._inflate[D7A] = B, this._inflate.write(A), Q) this._inflate.write(NB6);
            this._inflate.flush(() => {
                let Z = this._inflate[H7A];
                if (Z) {
                    this._inflate.close(), this._inflate = null, B(Z);
                    return
                }
                let I = oZB.concat(this._inflate[lc], this._inflate[lb]);
                if (this._inflate._readableState.endEmitted) this._inflate.close(), this._inflate = null;
                else if (this._inflate[lb] = 0, this._inflate[lc] = [], Q && this.params[`TextComponent{G}_no_context_takeover`]) this._inflate.reset();
                B(null, I)
            })
        }
        _compress(A, Q, B) {
            let G = this._isServer ? "server" : "client";
            if (!this._deflate) {
                let Z = `TextComponent{G}_max_window_bits`,
                    I = typeof this.params[Z] !== "number" ? jUA.Z_DEFAULT_WINDOWBITS : this.params[Z];
                this._deflate = jUA.createDeflateRaw({
                    ...this._options.zlibDeflateOptions,
                    windowBits: I
                }), this._deflate[lb] = 0, this._deflate[lc] = [], this._deflate.on("data", LB6)
            }
            this._deflate[D7A] = B, this._deflate.write(A), this._deflate.flush(jUA.Z_SYNC_FLUSH, () => {
                if (!this._deflate) return;
                let Z = oZB.concat(this._deflate[lc], this._deflate[lb]);
                if (Q) Z = new qB6(Z.buffer, Z.byteOffset, Z.length - 4);
                if (this._deflate[D7A] = null, this._deflate[lb] = 0, this._deflate[lc] = [], Q && this.params[`TextComponent{G}_no_context_takeover`]) this._deflate.reset();
                B(null, Z)
            })
        }
    }
    QIB.exports = eZB;

    function LB6(A) {
        this[lc].push(A), this[lb] += A.length
    }

    function AIB(A) {
        if (this[lb] += A.length, this[AaA]._maxPayload < 1 || this[lb] <= this[AaA]._maxPayload) {
            this[lc].push(A);
            return
        }
        this[H7A] = RangeError("Max payload size exceeded"), this[H7A].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[H7A][tZB] = 1009, this.removeListener("data", AIB), this.reset()
    }

    function MB6(A) {
        if (this[AaA]._inflate = null, this[H7A]) {
            this[D7A](this[H7A]);
            return
        }
        A[tZB] = 1007, this[D7A](A)
    }
});
var C7A = moduleWrapper((Qf7, QaA) => {
    var {
        isUtf8: BIB
    } = nodeRequire("buffer"), {
        hasBlob: OB6
    } = pb(), RB6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0];

    function TB6(A) {
        return A >= 1000 && A <= 1014 && A !== 1004 && A !== 1005 && A !== 1006 || A >= 3000 && A <= 4999
    }

    function Zh1(A) {
        let Q = A.length,
            B = 0;
        while (B < Q)
            if ((A[B] & 128) === 0) B++;
            else if ((A[B] & 224) === 192) {
            if (B + 1 === Q || (A[B + 1] & 192) !== 128 || (A[B] & 254) === 192) return !1;
            B += 2
        } else if ((A[B] & 240) === 224) {
            if (B + 2 >= Q || (A[B + 1] & 192) !== 128 || (A[B + 2] & 192) !== 128 || A[B] === 224 && (A[B + 1] & 224) === 128 || A[B] === 237 && (A[B + 1] & 224) === 160) return !1;
            B += 3
        } else if ((A[B] & 248) === 240) {
            if (B + 3 >= Q || (A[B + 1] & 192) !== 128 || (A[B + 2] & 192) !== 128 || (A[B + 3] & 192) !== 128 || A[B] === 240 && (A[B + 1] & 240) === 128 || A[B] === 244 && A[B + 1] > 143 || A[B] > 244) return !1;
            B += 4
        } else return !1;
        return !0
    }

    function PB6(A) {
        return OB6 && typeof A === "object" && typeof A.arrayBuffer === "function" && typeof A.type === "string" && typeof A.stream === "function" && (A[Symbol.toStringTag] === "Blob" || A[Symbol.toStringTag] === "File")
    }
    QaA.exports = {
        isBlob: PB6,
        isValidStatusCode: TB6,
        isValidUTF8: Zh1,
        tokenChars: RB6
    };
    if (BIB) QaA.exports.isValidUTF8 = function(A) {
        return A.length < 24 ? Zh1(A) : BIB(A)
    };
    else if (!process.env.WS_NO_UTF_8_VALIDATE) try {
        let A = (() => {
            throw new Error("Cannot require module " + "utf-8-validate");
        })();
        QaA.exports.isValidUTF8 = function(Q) {
            return Q.length < 32 ? Zh1(Q) : A(Q)
        }
    } catch (A) {}
});
var Yh1 = moduleWrapper((Bf7, JIB) => {
    var {
        Writable: jB6
    } = nodeRequire("stream"), GIB = SUA(), {
        BINARY_TYPES: SB6,
        EMPTY_BUFFER: ZIB,
        kStatusCode: _B6,
        kWebSocket: kB6
    } = pb(), {
        concat: Ih1,
        toArrayBuffer: yB6,
        unmask: xB6
    } = PUA(), {
        isValidStatusCode: vB6,
        isValidUTF8: IIB
    } = C7A(), BaA = Buffer[Symbol.species];
    class YIB extends jB6 {
        constructor(A = {}) {
            super();
            this._allowSynchronousEvents = A.allowSynchronousEvents !== void 0 ? A.allowSynchronousEvents : !0, this._binaryType = A.binaryType || SB6[0], this._extensions = A.extensions || {}, this._isServer = !!A.isServer, this._maxPayload = A.maxPayload | 0, this._skipUTF8Validation = !!A.skipUTF8Validation, this[kB6] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = !1, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = !1, this._fin = !1, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._fragments = [], this._errored = !1, this._loop = !1, this._state = 0
        }
        _write(A, Q, B) {
            if (this._opcode === 8 && this._state == 0) return B();
            this._bufferedBytes += A.length, this._buffers.push(A), this.startLoop(B)
        }
        consume(A) {
            if (this._bufferedBytes -= A, A === this._buffers[0].length) return this._buffers.shift();
            if (A < this._buffers[0].length) {
                let B = this._buffers[0];
                return this._buffers[0] = new BaA(B.buffer, B.byteOffset + A, B.length - A), new BaA(B.buffer, B.byteOffset, A)
            }
            let Q = Buffer.allocUnsafe(A);
            do {
                let B = this._buffers[0],
                    G = Q.length - A;
                if (A >= B.length) Q.set(this._buffers.shift(), G);
                else Q.set(new Uint8Array(B.buffer, B.byteOffset, A), G), this._buffers[0] = new BaA(B.buffer, B.byteOffset + A, B.length - A);
                A -= B.length
            } while (A > 0);
            return Q
        }
        startLoop(A) {
            this._loop = !0;
            do switch (this._state) {
                case 0:
                    this.getInfo(A);
                    break;
                case 1:
                    this.getPayloadLength16(A);
                    break;
                case 2:
                    this.getPayloadLength64(A);
                    break;
                case 3:
                    this.getMask();
                    break;
                case 4:
                    this.getData(A);
                    break;
                case 5:
                case 6:
                    this._loop = !1;
                    return
            }
            while (this._loop);
            if (!this._errored) A()
        }
        getInfo(A) {
            if (this._bufferedBytes < 2) {
                this._loop = !1;
                return
            }
            let Q = this.consume(2);
            if ((Q[0] & 48) !== 0) {
                let G = this.createError(RangeError, "RSV2 and RSV3 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
                A(G);
                return
            }
            let B = (Q[0] & 64) === 64;
            if (B && !this._extensions[GIB.extensionName]) {
                let G = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
                A(G);
                return
            }
            if (this._fin = (Q[0] & 128) === 128, this._opcode = Q[0] & 15, this._payloadLength = Q[1] & 127, this._opcode === 0) {
                if (B) {
                    let G = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
                    A(G);
                    return
                }
                if (!this._fragmented) {
                    let G = this.createError(RangeError, "invalid opcode 0", !0, 1002, "WS_ERR_INVALID_OPCODE");
                    A(G);
                    return
                }
                this._opcode = this._fragmented
            } else if (this._opcode === 1 || this._opcode === 2) {
                if (this._fragmented) {
                    let G = this.createError(RangeError, `invalid opcode TextComponent{this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE");
                    A(G);
                    return
                }
                this._compressed = B
            } else if (this._opcode > 7 && this._opcode < 11) {
                if (!this._fin) {
                    let G = this.createError(RangeError, "FIN must be set", !0, 1002, "WS_ERR_EXPECTED_FIN");
                    A(G);
                    return
                }
                if (B) {
                    let G = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
                    A(G);
                    return
                }
                if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
                    let G = this.createError(RangeError, `invalid payload length TextComponent{this._payloadLength}`, !0, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
                    A(G);
                    return
                }
            } else {
                let G = this.createError(RangeError, `invalid opcode TextComponent{this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE");
                A(G);
                return
            }
            if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
            if (this._masked = (Q[1] & 128) === 128, this._isServer) {
                if (!this._masked) {
                    let G = this.createError(RangeError, "MASK must be set", !0, 1002, "WS_ERR_EXPECTED_MASK");
                    A(G);
                    return
                }
            } else if (this._masked) {
                let G = this.createError(RangeError, "MASK must be clear", !0, 1002, "WS_ERR_UNEXPECTED_MASK");
                A(G);
                return
            }
            if (this._payloadLength === 126) this._state = 1;
            else if (this._payloadLength === 127) this._state = 2;
            else this.haveLength(A)
        }
        getPayloadLength16(A) {
            if (this._bufferedBytes < 2) {
                this._loop = !1;
                return
            }
            this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(A)
        }
        getPayloadLength64(A) {
            if (this._bufferedBytes < 8) {
                this._loop = !1;
                return
            }
            let Q = this.consume(8),
                B = Q.readUInt32BE(0);
            if (B > Math.pow(2, 21) - 1) {
                let G = this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", !1, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
                A(G);
                return
            }
            this._payloadLength = B * Math.pow(2, 32) + Q.readUInt32BE(4), this.haveLength(A)
        }
        haveLength(A) {
            if (this._payloadLength && this._opcode < 8) {
                if (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
                    let Q = this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
                    A(Q);
                    return
                }
            }
            if (this._masked) this._state = 3;
            else this._state = 4
        }
        getMask() {
            if (this._bufferedBytes < 4) {
                this._loop = !1;
                return
            }
            this._mask = this.consume(4), this._state = 4
        }
        getData(A) {
            let Q = ZIB;
            if (this._payloadLength) {
                if (this._bufferedBytes < this._payloadLength) {
                    this._loop = !1;
                    return
                }
                if (Q = this.consume(this._payloadLength), this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) xB6(Q, this._mask)
            }
            if (this._opcode > 7) {
                this.controlMessage(Q, A);
                return
            }
            if (this._compressed) {
                this._state = 5, this.decompress(Q, A);
                return
            }
            if (Q.length) this._messageLength = this._totalPayloadLength, this._fragments.push(Q);
            this.dataMessage(A)
        }
        decompress(A, Q) {
            this._extensions[GIB.extensionName].decompress(A, this._fin, (G, Z) => {
                if (G) return Q(G);
                if (Z.length) {
                    if (this._messageLength += Z.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
                        let I = this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
                        Q(I);
                        return
                    }
                    this._fragments.push(Z)
                }
                if (this.dataMessage(Q), this._state === 0) this.startLoop(Q)
            })
        }
        dataMessage(A) {
            if (!this._fin) {
                this._state = 0;
                return
            }
            let Q = this._messageLength,
                B = this._fragments;
            if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._fragments = [], this._opcode === 2) {
                let G;
                if (this._binaryType === "nodebuffer") G = Ih1(B, Q);
                else if (this._binaryType === "arraybuffer") G = yB6(Ih1(B, Q));
                else if (this._binaryType === "blob") G = new Blob(B);
                else G = B;
                if (this._allowSynchronousEvents) this.emit("message", G, !0), this._state = 0;
                else this._state = 6, setImmediate(() => {
                    this.emit("message", G, !0), this._state = 0, this.startLoop(A)
                })
            } else {
                let G = Ih1(B, Q);
                if (!this._skipUTF8Validation && !IIB(G)) {
                    let Z = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
                    A(Z);
                    return
                }
                if (this._state === 5 || this._allowSynchronousEvents) this.emit("message", G, !1), this._state = 0;
                else this._state = 6, setImmediate(() => {
                    this.emit("message", G, !1), this._state = 0, this.startLoop(A)
                })
            }
        }
        controlMessage(A, Q) {
            if (this._opcode === 8) {
                if (A.length === 0) this._loop = !1, this.emit("conclude", 1005, ZIB), this.end();
                else {
                    let B = A.readUInt16BE(0);
                    if (!vB6(B)) {
                        let Z = this.createError(RangeError, `invalid status code TextComponent{B}`, !0, 1002, "WS_ERR_INVALID_CLOSE_CODE");
                        Q(Z);
                        return
                    }
                    let G = new BaA(A.buffer, A.byteOffset + 2, A.length - 2);
                    if (!this._skipUTF8Validation && !IIB(G)) {
                        let Z = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
                        Q(Z);
                        return
                    }
                    this._loop = !1, this.emit("conclude", B, G), this.end()
                }
                this._state = 0;
                return
            }
            if (this._allowSynchronousEvents) this.emit(this._opcode === 9 ? "ping" : "pong", A), this._state = 0;
            else this._state = 6, setImmediate(() => {
                this.emit(this._opcode === 9 ? "ping" : "pong", A), this._state = 0, this.startLoop(Q)
            })
        }
        createError(A, Q, B, G, Z) {
            this._loop = !1, this._errored = !0;
            let I = new A(B ? `Invalid WebSocket frame: TextComponent{Q}` : Q);
            return Error.captureStackTrace(I, this.createError), I.code = Z, I[_B6] = G, I
        }
    }
    JIB.exports = YIB
});
var Wh1 = moduleWrapper((Zf7, FIB) => {
    var {
        Duplex: Gf7
    } = nodeRequire("stream"), {
        randomFillSync: bB6
    } = nodeRequire("crypto"), WIB = SUA(), {
        EMPTY_BUFFER: fB6,
        kWebSocket: hB6,
        NOOP: gB6
    } = pb(), {
        isBlob: E7A,
        isValidStatusCode: uB6
    } = C7A(), {
        mask: XIB,
        toBuffer: qt
    } = PUA(), WM = Symbol("kByteLength"), mB6 = Buffer.alloc(4), Nt, z7A = 8192, CT = 0, dB6 = 1, cB6 = 2;
    class ic {
        constructor(A, Q, B) {
            if (this._extensions = Q || {}, B) this._generateMask = B, this._maskBuffer = Buffer.alloc(4);
            this._socket = A, this._firstFragment = !0, this._compress = !1, this._bufferedBytes = 0, this._queue = [], this._state = CT, this.onerror = gB6, this[hB6] = void 0
        }
        static frame(A, Q) {
            let B, G = !1,
                Z = 2,
                I = !1;
            if (Q.mask) {
                if (B = Q.maskBuffer || mB6, Q.generateMask) Q.generateMask(B);
                else {
                    if (z7A === 8192) {
                        if (Nt === void 0) Nt = Buffer.alloc(8192);
                        bB6(Nt, 0, 8192), z7A = 0
                    }
                    B[0] = Nt[z7A++], B[1] = Nt[z7A++], B[2] = Nt[z7A++], B[3] = Nt[z7A++]
                }
                I = (B[0] | B[1] | B[2] | B[3]) === 0, Z = 6
            }
            let Y;
            if (typeof A === "string")
                if ((!Q.mask || I) && Q[WM] !== void 0) Y = Q[WM];
                else A = Buffer.from(A), Y = A.length;
            else Y = A.length, G = Q.mask && Q.readOnly && !I;
            let J = Y;
            if (Y >= 65536) Z += 8, J = 127;
            else if (Y > 125) Z += 2, J = 126;
            let W = Buffer.allocUnsafe(G ? Y + Z : Z);
            if (W[0] = Q.fin ? Q.opcode | 128 : Q.opcode, Q.rsv1) W[0] |= 64;
            if (W[1] = J, J === 126) W.writeUInt16BE(Y, 2);
            else if (J === 127) W[2] = W[3] = 0, W.writeUIntBE(Y, 4, 6);
            if (!Q.mask) return [W, A];
            if (W[1] |= 128, W[Z - 4] = B[0], W[Z - 3] = B[1], W[Z - 2] = B[2], W[Z - 1] = B[3], I) return [W, A];
            if (G) return XIB(A, B, W, Z, Y), [W];
            return XIB(A, B, A, 0, Y), [W, A]
        }
        close(A, Q, B, G) {
            let Z;
            if (A === void 0) Z = fB6;
            else if (typeof A !== "number" || !uB6(A)) throw TypeError("First argument must be a valid error code number");
            else if (Q === void 0 || !Q.length) Z = Buffer.allocUnsafe(2), Z.writeUInt16BE(A, 0);
            else {
                let Y = Buffer.byteLength(Q);
                if (Y > 123) throw RangeError("The message must not be greater than 123 bytes");
                if (Z = Buffer.allocUnsafe(2 + Y), Z.writeUInt16BE(A, 0), typeof Q === "string") Z.write(Q, 2);
                else Z.set(Q, 2)
            }
            let I = {
                [WM]: Z.length,
                fin: !0,
                generateMask: this._generateMask,
                mask: B,
                maskBuffer: this._maskBuffer,
                opcode: 8,
                readOnly: !1,
                rsv1: !1
            };
            if (this._state !== CT) this.enqueue([this.dispatch, Z, !1, I, G]);
            else this.sendFrame(ic.frame(Z, I), G)
        }
        ping(A, Q, B) {
            let G, Z;
            if (typeof A === "string") G = Buffer.byteLength(A), Z = !1;
            else if (E7A(A)) G = A.size, Z = !1;
            else A = qt(A), G = A.length, Z = qt.readOnly;
            if (G > 125) throw RangeError("The data size must not be greater than 125 bytes");
            let I = {
                [WM]: G,
                fin: !0,
                generateMask: this._generateMask,
                mask: Q,
                maskBuffer: this._maskBuffer,
                opcode: 9,
                readOnly: Z,
                rsv1: !1
            };
            if (E7A(A))
                if (this._state !== CT) this.enqueue([this.getBlobData, A, !1, I, B]);
                else this.getBlobData(A, !1, I, B);
            else if (this._state !== CT) this.enqueue([this.dispatch, A, !1, I, B]);
            else this.sendFrame(ic.frame(A, I), B)
        }
        pong(A, Q, B) {
            let G, Z;
            if (typeof A === "string") G = Buffer.byteLength(A), Z = !1;
            else if (E7A(A)) G = A.size, Z = !1;
            else A = qt(A), G = A.length, Z = qt.readOnly;
            if (G > 125) throw RangeError("The data size must not be greater than 125 bytes");
            let I = {
                [WM]: G,
                fin: !0,
                generateMask: this._generateMask,
                mask: Q,
                maskBuffer: this._maskBuffer,
                opcode: 10,
                readOnly: Z,
                rsv1: !1
            };
            if (E7A(A))
                if (this._state !== CT) this.enqueue([this.getBlobData, A, !1, I, B]);
                else this.getBlobData(A, !1, I, B);
            else if (this._state !== CT) this.enqueue([this.dispatch, A, !1, I, B]);
            else this.sendFrame(ic.frame(A, I), B)
        }
        send(A, Q, B) {
            let G = this._extensions[WIB.extensionName],
                Z = Q.binary ? 2 : 1,
                I = Q.compress,
                Y, J;
            if (typeof A === "string") Y = Buffer.byteLength(A), J = !1;
            else if (E7A(A)) Y = A.size, J = !1;
            else A = qt(A), Y = A.length, J = qt.readOnly;
            if (this._firstFragment) {
                if (this._firstFragment = !1, I && G && G.params[G._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) I = Y >= G._threshold;
                this._compress = I
            } else I = !1, Z = 0;
            if (Q.fin) this._firstFragment = !0;
            let W = {
                [WM]: Y,
                fin: Q.fin,
                generateMask: this._generateMask,
                mask: Q.mask,
                maskBuffer: this._maskBuffer,
                opcode: Z,
                readOnly: J,
                rsv1: I
            };
            if (E7A(A))
                if (this._state !== CT) this.enqueue([this.getBlobData, A, this._compress, W, B]);
                else this.getBlobData(A, this._compress, W, B);
            else if (this._state !== CT) this.enqueue([this.dispatch, A, this._compress, W, B]);
            else this.dispatch(A, this._compress, W, B)
        }
        getBlobData(A, Q, B, G) {
            this._bufferedBytes += B[WM], this._state = cB6, A.arrayBuffer().then((Z) => {
                if (this._socket.destroyed) {
                    let Y = Error("The socket was closed while the blob was being read");
                    process.nextTick(Jh1, this, Y, G);
                    return
                }
                this._bufferedBytes -= B[WM];
                let I = qt(Z);
                if (!Q) this._state = CT, this.sendFrame(ic.frame(I, B), G), this.dequeue();
                else this.dispatch(I, Q, B, G)
            }).catch((Z) => {
                process.nextTick(pB6, this, Z, G)
            })
        }
        dispatch(A, Q, B, G) {
            if (!Q) {
                this.sendFrame(ic.frame(A, B), G);
                return
            }
            let Z = this._extensions[WIB.extensionName];
            this._bufferedBytes += B[WM], this._state = dB6, Z.compress(A, B.fin, (I, Y) => {
                if (this._socket.destroyed) {
                    let J = Error("The socket was closed while data was being compressed");
                    Jh1(this, J, G);
                    return
                }
                this._bufferedBytes -= B[WM], this._state = CT, B.readOnly = !1, this.sendFrame(ic.frame(Y, B), G), this.dequeue()
            })
        }
        dequeue() {
            while (this._state === CT && this._queue.length) {
                let A = this._queue.shift();
                this._bufferedBytes -= A[3][WM], Reflect.apply(A[0], this, A.slice(1))
            }
        }
        enqueue(A) {
            this._bufferedBytes += A[3][WM], this._queue.push(A)
        }
        sendFrame(A, Q) {
            if (A.length === 2) this._socket.cork(), this._socket.write(A[0]), this._socket.write(A[1], Q), this._socket.uncork();
            else this._socket.write(A[0], Q)
        }
    }
    FIB.exports = ic;

    function Jh1(A, Q, B) {
        if (typeof B === "function") B(Q);
        for (let G = 0; G < A._queue.length; G++) {
            let Z = A._queue[G],
                I = Z[Z.length - 1];
            if (typeof I === "function") I(Q)
        }
    }

    function pB6(A, Q, B) {
        Jh1(A, Q, B), A.onerror(Q)
    }
});
var $IB = moduleWrapper((If7, UIB) => {
    var {
        kForOnEventAttribute: _UA,
        kListener: Xh1
    } = pb(), VIB = Symbol("kCode"), KIB = Symbol("kData"), DIB = Symbol("kError"), HIB = Symbol("kMessage"), CIB = Symbol("kReason"), U7A = Symbol("kTarget"), EIB = Symbol("kType"), zIB = Symbol("kWasClean");
    class nc {
        constructor(A) {
            this[U7A] = null, this[EIB] = A
        }
        get target() {
            return this[U7A]
        }
        get type() {
            return this[EIB]
        }
    }
    Object.defineProperty(nc.prototype, "target", {
        enumerable: !0
    });
    Object.defineProperty(nc.prototype, "type", {
        enumerable: !0
    });
    class $7A extends nc {
        constructor(A, Q = {}) {
            super(A);
            this[VIB] = Q.code === void 0 ? 0 : Q.code, this[CIB] = Q.reason === void 0 ? "" : Q.reason, this[zIB] = Q.wasClean === void 0 ? !1 : Q.wasClean
        }
        get code() {
            return this[VIB]
        }
        get reason() {
            return this[CIB]
        }
        get wasClean() {
            return this[zIB]
        }
    }
    Object.defineProperty($7A.prototype, "code", {
        enumerable: !0
    });
    Object.defineProperty($7A.prototype, "reason", {
        enumerable: !0
    });
    Object.defineProperty($7A.prototype, "wasClean", {
        enumerable: !0
    });
    class kUA extends nc {
        constructor(A, Q = {}) {
            super(A);
            this[DIB] = Q.error === void 0 ? null : Q.error, this[HIB] = Q.message === void 0 ? "" : Q.message
        }
        get error() {
            return this[DIB]
        }
        get message() {
            return this[HIB]
        }
    }
    Object.defineProperty(kUA.prototype, "error", {
        enumerable: !0
    });
    Object.defineProperty(kUA.prototype, "message", {
        enumerable: !0
    });
    class ZaA extends nc {
        constructor(A, Q = {}) {
            super(A);
            this[KIB] = Q.data === void 0 ? null : Q.data
        }
        get data() {
            return this[KIB]
        }
    }
    Object.defineProperty(ZaA.prototype, "data", {
        enumerable: !0
    });
    var lB6 = {
        addEventListener(A, Q, B = {}) {
            for (let Z of this.listeners(A))
                if (!B[_UA] && Z[Xh1] === Q && !Z[_UA]) return;
            let G;
            if (A === "message") G = function(I, Y) {
                let J = new ZaA("message", {
                    data: Y ? I : I.toString()
                });
                J[U7A] = this, GaA(Q, this, J)
            };
            else if (A === "close") G = function(I, Y) {
                let J = new $7A("close", {
                    code: I,
                    reason: Y.toString(),
                    wasClean: this._closeFrameReceived && this._closeFrameSent
                });
                J[U7A] = this, GaA(Q, this, J)
            };
            else if (A === "error") G = function(I) {
                let Y = new kUA("error", {
                    error: I,
                    message: I.message
                });
                Y[U7A] = this, GaA(Q, this, Y)
            };
            else if (A === "open") G = function() {
                let I = new nc("open");
                I[U7A] = this, GaA(Q, this, I)
            };
            else return;
            if (G[_UA] = !!B[_UA], G[Xh1] = Q, B.once) this.once(A, G);
            else this.on(A, G)
        },
        removeEventListener(A, Q) {
            for (let B of this.listeners(A))
                if (B[Xh1] === Q && !B[_UA]) {
                    this.removeListener(A, B);
                    break
                }
        }
    };
    UIB.exports = {
        CloseEvent: $7A,
        ErrorEvent: kUA,
        Event: nc,
        EventTarget: lB6,
        MessageEvent: ZaA
    };

    function GaA(A, Q, B) {
        if (typeof A === "object" && A.handleEvent) A.handleEvent.call(A, B);
        else A.call(Q, B)
    }
});
var Fh1 = moduleWrapper((Yf7, wIB) => {
    var {
        tokenChars: yUA
    } = C7A();

    function P_(A, Q, B) {
        if (A[Q] === void 0) A[Q] = [B];
        else A[Q].push(B)
    }

    function iB6(A) {
        let Q = Object.create(null),
            B = Object.create(null),
            G = !1,
            Z = !1,
            I = !1,
            Y, J, W = -1,
            X = -1,
            F = -1,
            V = 0;
        for (; V < A.length; V++)
            if (X = A.charCodeAt(V), Y === void 0)
                if (F === -1 && yUA[X] === 1) {
                    if (W === -1) W = V
                } else if (V !== 0 && (X === 32 || X === 9)) {
            if (F === -1 && W !== -1) F = V
        } else if (X === 59 || X === 44) {
            if (W === -1) throw SyntaxError(`Unexpected character at index TextComponent{V}`);
            if (F === -1) F = V;
            let D = A.slice(W, F);
            if (X === 44) P_(Q, D, B), B = Object.create(null);
            else Y = D;
            W = F = -1
        } else throw SyntaxError(`Unexpected character at index TextComponent{V}`);
        else if (J === void 0)
            if (F === -1 && yUA[X] === 1) {
                if (W === -1) W = V
            } else if (X === 32 || X === 9) {
            if (F === -1 && W !== -1) F = V
        } else if (X === 59 || X === 44) {
            if (W === -1) throw SyntaxError(`Unexpected character at index TextComponent{V}`);
            if (F === -1) F = V;
            if (P_(B, A.slice(W, F), !0), X === 44) P_(Q, Y, B), B = Object.create(null), Y = void 0;
            W = F = -1
        } else if (X === 61 && W !== -1 && F === -1) J = A.slice(W, V), W = F = -1;
        else throw SyntaxError(`Unexpected character at index TextComponent{V}`);
        else if (Z) {
            if (yUA[X] !== 1) throw SyntaxError(`Unexpected character at index TextComponent{V}`);
            if (W === -1) W = V;
            else if (!G) G = !0;
            Z = !1
        } else if (I)
            if (yUA[X] === 1) {
                if (W === -1) W = V
            } else if (X === 34 && W !== -1) I = !1, F = V;
        else if (X === 92) Z = !0;
        else throw SyntaxError(`Unexpected character at index TextComponent{V}`);
        else if (X === 34 && A.charCodeAt(V - 1) === 61) I = !0;
        else if (F === -1 && yUA[X] === 1) {
            if (W === -1) W = V
        } else if (W !== -1 && (X === 32 || X === 9)) {
            if (F === -1) F = V
        } else if (X === 59 || X === 44) {
            if (W === -1) throw SyntaxError(`Unexpected character at index TextComponent{V}`);
            if (F === -1) F = V;
            let D = A.slice(W, F);
            if (G) D = D.replace(/\\/g, ""), G = !1;
            if (P_(B, J, D), X === 44) P_(Q, Y, B), B = Object.create(null), Y = void 0;
            J = void 0, W = F = -1
        } else throw SyntaxError(`Unexpected character at index TextComponent{V}`);
        if (W === -1 || I || X === 32 || X === 9) throw SyntaxError("Unexpected end of input");
        if (F === -1) F = V;
        let K = A.slice(W, F);
        if (Y === void 0) P_(Q, K, B);
        else {
            if (J === void 0) P_(B, K, !0);
            else if (G) P_(B, J, K.replace(/\\/g, ""));
            else P_(B, J, K);
            P_(Q, Y, B)
        }
        return Q
    }

    function nB6(A) {
        return Object.keys(A).map((Q) => {
            let B = A[Q];
            if (!Array.isArray(B)) B = [B];
            return B.map((G) => {
                return [Q].concat(Object.keys(G).map((Z) => {
                    let I = G[Z];
                    if (!Array.isArray(I)) I = [I];
                    return I.map((Y) => Y === !0 ? Z : `TextComponent{Z}=TextComponent{Y}`).join("; ")
                })).join("; ")
            }).join(", ")
        }).join(", ")
    }
    wIB.exports = {
        format: nB6,
        parse: iB6
    }
});
var WaA = moduleWrapper((Xf7, kIB) => {
    var aB6 = nodeRequire("events"),
        sB6 = nodeRequire("https"),
        rB6 = nodeRequire("http"),
        LIB = nodeRequire("net"),
        oB6 = nodeRequire("tls"),
        {
            randomBytes: tB6,
            createHash: eB6
        } = nodeRequire("crypto"),
        {
            Duplex: Jf7,
            Readable: Wf7
        } = nodeRequire("stream"),
        {
            URL: Vh1
        } = nodeRequire("url"),
        ac = SUA(),
        A26 = Yh1(),
        Q26 = Wh1(),
        {
            isBlob: B26
        } = C7A(),
        {
            BINARY_TYPES: qIB,
            EMPTY_BUFFER: IaA,
            GUID: G26,
            kForOnEventAttribute: Kh1,
            kListener: Z26,
            kStatusCode: I26,
            kWebSocket: fV,
            NOOP: MIB
        } = pb(),
        {
            EventTarget: {
                addEventListener: Y26,
                removeEventListener: J26
            }
        } = $IB(),
        {
            format: W26,
            parse: X26
        } = Fh1(),
        {
            toBuffer: F26
        } = PUA(),
        OIB = Symbol("kAborted"),
        Dh1 = [8, 13],
        ib = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
        V26 = /^[!#TextComponent%&'*+\-.0-9A-Z^_`|a-z~]+TextComponent/;
    class W8 extends aB6 {
        constructor(A, Q, B) {
            super();
            if (this._binaryType = qIB[0], this._closeCode = 1006, this._closeFrameReceived = !1, this._closeFrameSent = !1, this._closeMessage = IaA, this._closeTimer = null, this._errorEmitted = !1, this._extensions = {}, this._paused = !1, this._protocol = "", this._readyState = W8.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, A !== null) {
                if (this._bufferedAmount = 0, this._isServer = !1, this._redirects = 0, Q === void 0) Q = [];
                else if (!Array.isArray(Q))
                    if (typeof Q === "object" && Q !== null) B = Q, Q = [];
                    else Q = [Q];
                RIB(this, A, Q, B)
            } else this._autoPong = B.autoPong, this._isServer = !0
        }
        get binaryType() {
            return this._binaryType
        }
        set binaryType(A) {
            if (!qIB.includes(A)) return;
            if (this._binaryType = A, this._receiver) this._receiver._binaryType = A
        }
        get bufferedAmount() {
            if (!this._socket) return this._bufferedAmount;
            return this._socket._writableState.length + this._sender._bufferedBytes
        }
        get extensions() {
            return Object.keys(this._extensions).join()
        }
        get isPaused() {
            return this._paused
        }
        get onclose() {
            return null
        }
        get onerror() {
            return null
        }
        get onopen() {
            return null
        }
        get onmessage() {
            return null
        }
        get protocol() {
            return this._protocol
        }
        get readyState() {
            return this._readyState
        }
        get url() {
            return this._url
        }
        setSocket(A, Q, B) {
            let G = new A26({
                    allowSynchronousEvents: B.allowSynchronousEvents,
                    binaryType: this.binaryType,
                    extensions: this._extensions,
                    isServer: this._isServer,
                    maxPayload: B.maxPayload,
                    skipUTF8Validation: B.skipUTF8Validation
                }),
                Z = new Q26(A, this._extensions, B.generateMask);
            if (this._receiver = G, this._sender = Z, this._socket = A, G[fV] = this, Z[fV] = this, A[fV] = this, G.on("conclude", H26), G.on("drain", C26), G.on("error", E26), G.on("message", z26), G.on("ping", U26), G.on("pong", $26), Z.onerror = w26, A.setTimeout) A.setTimeout(0);
            if (A.setNoDelay) A.setNoDelay();
            if (Q.length > 0) A.unshift(Q);
            A.on("close", jIB), A.on("data", JaA), A.on("end", SIB), A.on("error", _IB), this._readyState = W8.OPEN, this.emit("open")
        }
        emitClose() {
            if (!this._socket) {
                this._readyState = W8.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
                return
            }
            if (this._extensions[ac.extensionName]) this._extensions[ac.extensionName].cleanup();
            this._receiver.removeAllListeners(), this._readyState = W8.CLOSED, this.emit("close", this._closeCode, this._closeMessage)
        }
        close(A, Q) {
            if (this.readyState === W8.CLOSED) return;
            if (this.readyState === W8.CONNECTING) {
                aw(this, this._req, "WebSocket was closed before the connection was established");
                return
            }
            if (this.readyState === W8.CLOSING) {
                if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) this._socket.end();
                return
            }
            this._readyState = W8.CLOSING, this._sender.close(A, Q, !this._isServer, (B) => {
                if (B) return;
                if (this._closeFrameSent = !0, this._closeFrameReceived || this._receiver._writableState.errorEmitted) this._socket.end()
            }), PIB(this)
        }
        pause() {
            if (this.readyState === W8.CONNECTING || this.readyState === W8.CLOSED) return;
            this._paused = !0, this._socket.pause()
        }
        ping(A, Q, B) {
            if (this.readyState === W8.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)");
            if (typeof A === "function") B = A, A = Q = void 0;
            else if (typeof Q === "function") B = Q, Q = void 0;
            if (typeof A === "number") A = A.toString();
            if (this.readyState !== W8.OPEN) {
                Hh1(this, A, B);
                return
            }
            if (Q === void 0) Q = !this._isServer;
            this._sender.ping(A || IaA, Q, B)
        }
        pong(A, Q, B) {
            if (this.readyState === W8.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)");
            if (typeof A === "function") B = A, A = Q = void 0;
            else if (typeof Q === "function") B = Q, Q = void 0;
            if (typeof A === "number") A = A.toString();
            if (this.readyState !== W8.OPEN) {
                Hh1(this, A, B);
                return
            }
            if (Q === void 0) Q = !this._isServer;
            this._sender.pong(A || IaA, Q, B)
        }
        resume() {
            if (this.readyState === W8.CONNECTING || this.readyState === W8.CLOSED) return;
            if (this._paused = !1, !this._receiver._writableState.needDrain) this._socket.resume()
        }
        send(A, Q, B) {
            if (this.readyState === W8.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)");
            if (typeof Q === "function") B = Q, Q = {};
            if (typeof A === "number") A = A.toString();
            if (this.readyState !== W8.OPEN) {
                Hh1(this, A, B);
                return
            }
            let G = {
                binary: typeof A !== "string",
                mask: !this._isServer,
                compress: !0,
                fin: !0,
                ...Q
            };
            if (!this._extensions[ac.extensionName]) G.compress = !1;
            this._sender.send(A || IaA, G, B)
        }
        terminate() {
            if (this.readyState === W8.CLOSED) return;
            if (this.readyState === W8.CONNECTING) {
                aw(this, this._req, "WebSocket was closed before the connection was established");
                return
            }
            if (this._socket) this._readyState = W8.CLOSING, this._socket.destroy()
        }
    }
    Object.defineProperty(W8, "CONNECTING", {
        enumerable: !0,
        value: ib.indexOf("CONNECTING")
    });
    Object.defineProperty(W8.prototype, "CONNECTING", {
        enumerable: !0,
        value: ib.indexOf("CONNECTING")
    });
    Object.defineProperty(W8, "OPEN", {
        enumerable: !0,
        value: ib.indexOf("OPEN")
    });
    Object.defineProperty(W8.prototype, "OPEN", {
        enumerable: !0,
        value: ib.indexOf("OPEN")
    });
    Object.defineProperty(W8, "CLOSING", {
        enumerable: !0,
        value: ib.indexOf("CLOSING")
    });
    Object.defineProperty(W8.prototype, "CLOSING", {
        enumerable: !0,
        value: ib.indexOf("CLOSING")
    });
    Object.defineProperty(W8, "CLOSED", {
        enumerable: !0,
        value: ib.indexOf("CLOSED")
    });
    Object.defineProperty(W8.prototype, "CLOSED", {
        enumerable: !0,
        value: ib.indexOf("CLOSED")
    });
    ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach((A) => {
        Object.defineProperty(W8.prototype, A, {
            enumerable: !0
        })
    });
    ["open", "error", "close", "message"].forEach((A) => {
        Object.defineProperty(W8.prototype, `on${A}`, {
            enumerable: !0,
            get() {
                for (let Q of this.listeners(A))
                    if (Q[Kh1]) return Q[Z26];
                return null
            },
            set(Q) {
                for (let B of this.listeners(A))
                    if (B[Kh1]) {
                        this.removeListener(A, B);
                        break
                    } if (typeof Q !== "function") return;
                this.addEventListener(A, Q, {
                    [Kh1]: !0
                })
            }
        })
    });
    W8.prototype.addEventListener = Y26;
    W8.prototype.removeEventListener = J26;
    kIB.exports = W8;

    function RIB(A, Q, B, G) {
        let Z = {
            allowSynchronousEvents: !0,
            autoPong: !0,
            protocolVersion: Dh1[1],
            maxPayload: 104857600,
            skipUTF8Validation: !1,
            perMessageDeflate: !0,
            followRedirects: !1,
            maxRedirects: 10,
            ...G,
            socketPath: void 0,
            hostname: void 0,
            protocol: void 0,
            timeout: void 0,
            method: "GET",
            host: void 0,
            path: void 0,
            port: void 0
        };
        if (A._autoPong = Z.autoPong, !Dh1.includes(Z.protocolVersion)) throw RangeError(`Unsupported protocol version: TextComponent{Z.protocolVersion} (supported versions: TextComponent{Dh1.join(", ")})`);
        let I;
        if (Q instanceof Vh1) I = Q;
        else try {
            I = new Vh1(Q)
        } catch (C) {
            throw SyntaxError(`Invalid URL: TextComponent{Q}`)
        }
        if (I.protocol === "http:") I.protocol = "ws:";
        else if (I.protocol === "https:") I.protocol = "wss:";
        A._url = I.href;
        let Y = I.protocol === "wss:",
            J = I.protocol === "ws+unix:",
            W;
        if (I.protocol !== "ws:" && !Y && !J) W = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
        else if (J && !I.pathname) W = "The URL's pathname is empty";
        else if (I.hash) W = "The URL contains a fragment identifier";
        if (W) {
            let C = SyntaxError(W);
            if (A._redirects === 0) throw C;
            else {
                YaA(A, C);
                return
            }
        }
        let X = Y ? 443 : 80,
            F = tB6(16).toString("base64"),
            V = Y ? sB6.request : rB6.request,
            K = new Set,
            D;
        if (Z.createConnection = Z.createConnection || (Y ? D26 : K26), Z.defaultPort = Z.defaultPort || X, Z.port = I.port || X, Z.host = I.hostname.startsWith("[") ? I.hostname.slice(1, -1) : I.hostname, Z.headers = {
                ...Z.headers,
                "Sec-WebSocket-Version": Z.protocolVersion,
                "Sec-WebSocket-Key": F,
                Connection: "Upgrade",
                Upgrade: "websocket"
            }, Z.path = I.pathname + I.search, Z.timeout = Z.handshakeTimeout, Z.perMessageDeflate) D = new ac(Z.perMessageDeflate !== !0 ? Z.perMessageDeflate : {}, !1, Z.maxPayload), Z.headers["Sec-WebSocket-Extensions"] = W26({
            [ac.extensionName]: D.offer()
        });
        if (B.length) {
            for (let C of B) {
                if (typeof C !== "string" || !V26.test(C) || K.has(C)) throw SyntaxError("An invalid or duplicated subprotocol was specified");
                K.add(C)
            }
            Z.headers["Sec-WebSocket-Protocol"] = B.join(",")
        }
        if (Z.origin)
            if (Z.protocolVersion < 13) Z.headers["Sec-WebSocket-Origin"] = Z.origin;
            else Z.headers.Origin = Z.origin;
        if (I.username || I.password) Z.auth = `TextComponent{I.username}:TextComponent{I.password}`;
        if (J) {
            let C = Z.path.split(":");
            Z.socketPath = C[0], Z.path = C[1]
        }
        let H;
        if (Z.followRedirects) {
            if (A._redirects === 0) {
                A._originalIpc = J, A._originalSecure = Y, A._originalHostOrSocketPath = J ? Z.socketPath : I.host;
                let C = G && G.headers;
                if (G = {
                        ...G,
                        headers: {}
                    }, C)
                    for (let [E, z] of Object.entries(C)) G.headers[E.toLowerCase()] = z
            } else if (A.listenerCount("redirect") === 0) {
                let C = J ? A._originalIpc ? Z.socketPath === A._originalHostOrSocketPath : !1 : A._originalIpc ? !1 : I.host === A._originalHostOrSocketPath;
                if (!C || A._originalSecure && !Y) {
                    if (delete Z.headers.authorization, delete Z.headers.cookie, !C) delete Z.headers.host;
                    Z.auth = void 0
                }
            }
            if (Z.auth && !G.headers.authorization) G.headers.authorization = "Basic " + Buffer.from(Z.auth).toString("base64");
            if (H = A._req = V(Z), A._redirects) A.emit("redirect", A.url, H)
        } else H = A._req = V(Z);
        if (Z.timeout) H.on("timeout", () => {
            aw(A, H, "Opening handshake has timed out")
        });
        if (H.on("error", (C) => {
                if (H === null || H[OIB]) return;
                H = A._req = null, YaA(A, C)
            }), H.on("response", (C) => {
                let E = C.headers.location,
                    z = C.statusCode;
                if (E && Z.followRedirects && z >= 300 && z < 400) {
                    if (++A._redirects > Z.maxRedirects) {
                        aw(A, H, "Maximum redirects exceeded");
                        return
                    }
                    H.abort();
                    let w;
                    try {
                        w = new Vh1(E, Q)
                    } catch (N) {
                        let q = SyntaxError(`Invalid URL: TextComponent{E}`);
                        YaA(A, q);
                        return
                    }
                    RIB(A, w, B, G)
                } else if (!A.emit("unexpected-response", H, C)) aw(A, H, `Unexpected server response: TextComponent{C.statusCode}`)
            }), H.on("upgrade", (C, E, z) => {
                if (A.emit("upgrade", C), A.readyState !== W8.CONNECTING) return;
                H = A._req = null;
                let w = C.headers.upgrade;
                if (w === void 0 || w.toLowerCase() !== "websocket") {
                    aw(A, E, "Invalid Upgrade header");
                    return
                }
                let N = eB6("sha1").update(F + G26).digest("base64");
                if (C.headers["sec-websocket-accept"] !== N) {
                    aw(A, E, "Invalid Sec-WebSocket-Accept header");
                    return
                }
                let q = C.headers["sec-websocket-protocol"],
                    R;
                if (q !== void 0) {
                    if (!K.size) R = "Server sent a subprotocol but none was requested";
                    else if (!K.has(q)) R = "Server sent an invalid subprotocol"
                } else if (K.size) R = "Server sent no subprotocol";
                if (R) {
                    aw(A, E, R);
                    return
                }
                if (q) A._protocol = q;
                let P = C.headers["sec-websocket-extensions"];
                if (P !== void 0) {
                    if (!D) {
                        aw(A, E, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
                        return
                    }
                    let y;
                    try {
                        y = X26(P)
                    } catch (x) {
                        aw(A, E, "Invalid Sec-WebSocket-Extensions header");
                        return
                    }
                    let v = Object.keys(y);
                    if (v.length !== 1 || v[0] !== ac.extensionName) {
                        aw(A, E, "Server indicated an extension that was not requested");
                        return
                    }
                    try {
                        D.accept(y[ac.extensionName])
                    } catch (x) {
                        aw(A, E, "Invalid Sec-WebSocket-Extensions header");
                        return
                    }
                    A._extensions[ac.extensionName] = D
                }
                A.setSocket(E, z, {
                    allowSynchronousEvents: Z.allowSynchronousEvents,
                    generateMask: Z.generateMask,
                    maxPayload: Z.maxPayload,
                    skipUTF8Validation: Z.skipUTF8Validation
                })
            }), Z.finishRequest) Z.finishRequest(H, A);
        else H.end()
    }

    function YaA(A, Q) {
        A._readyState = W8.CLOSING, A._errorEmitted = !0, A.emit("error", Q), A.emitClose()
    }

    function K26(A) {
        return A.path = A.socketPath, LIB.connect(A)
    }

    function D26(A) {
        if (A.path = void 0, !A.servername && A.servername !== "") A.servername = LIB.isIP(A.host) ? "" : A.host;
        return oB6.connect(A)
    }

    function aw(A, Q, B) {
        A._readyState = W8.CLOSING;
        let G = Error(B);
        if (Error.captureStackTrace(G, aw), Q.setHeader) {
            if (Q[OIB] = !0, Q.abort(), Q.socket && !Q.socket.destroyed) Q.socket.destroy();
            process.nextTick(YaA, A, G)
        } else Q.destroy(G), Q.once("error", A.emit.bind(A, "error")), Q.once("close", A.emitClose.bind(A))
    }

    function Hh1(A, Q, B) {
        if (Q) {
            let G = B26(Q) ? Q.size : F26(Q).length;
            if (A._socket) A._sender._bufferedBytes += G;
            else A._bufferedAmount += G
        }
        if (B) {
            let G = Error(`WebSocket is not open: readyState TextComponent{A.readyState} (TextComponent{ib[A.readyState]})`);
            process.nextTick(B, G)
        }
    }

    function H26(A, Q) {
        let B = this[fV];
        if (B._closeFrameReceived = !0, B._closeMessage = Q, B._closeCode = A, B._socket[fV] === void 0) return;
        if (B._socket.removeListener("data", JaA), process.nextTick(TIB, B._socket), A === 1005) B.close();
        else B.close(A, Q)
    }

    function C26() {
        let A = this[fV];
        if (!A.isPaused) A._socket.resume()
    }

    function E26(A) {
        let Q = this[fV];
        if (Q._socket[fV] !== void 0) Q._socket.removeListener("data", JaA), process.nextTick(TIB, Q._socket), Q.close(A[I26]);
        if (!Q._errorEmitted) Q._errorEmitted = !0, Q.emit("error", A)
    }

    function NIB() {
        this[fV].emitClose()
    }

    function z26(A, Q) {
        this[fV].emit("message", A, Q)
    }

    function U26(A) {
        let Q = this[fV];
        if (Q._autoPong) Q.pong(A, !this._isServer, MIB);
        Q.emit("ping", A)
    }

    function $26(A) {
        this[fV].emit("pong", A)
    }

    function TIB(A) {
        A.resume()
    }

    function w26(A) {
        let Q = this[fV];
        if (Q.readyState === W8.CLOSED) return;
        if (Q.readyState === W8.OPEN) Q._readyState = W8.CLOSING, PIB(Q);
        if (this._socket.end(), !Q._errorEmitted) Q._errorEmitted = !0, Q.emit("error", A)
    }

    function PIB(A) {
        A._closeTimer = setTimeout(A._socket.destroy.bind(A._socket), 30000)
    }

    function jIB() {
        let A = this[fV];
        this.removeListener("close", jIB), this.removeListener("data", JaA), this.removeListener("end", SIB), A._readyState = W8.CLOSING;
        let Q;
        if (!this._readableState.endEmitted && !A._closeFrameReceived && !A._receiver._writableState.errorEmitted && (Q = A._socket.read()) !== null) A._receiver.write(Q);
        if (A._receiver.end(), this[fV] = void 0, clearTimeout(A._closeTimer), A._receiver._writableState.finished || A._receiver._writableState.errorEmitted) A.emitClose();
        else A._receiver.on("error", NIB), A._receiver.on("finish", NIB)
    }

    function JaA(A) {
        if (!this[fV]._receiver.write(A)) this.pause()
    }

    function SIB() {
        let A = this[fV];
        A._readyState = W8.CLOSING, A._receiver.end(), this.end()
    }

    function _IB() {
        let A = this[fV];
        if (this.removeListener("error", _IB), this.on("error", MIB), A) A._readyState = W8.CLOSING, this.destroy()
    }
});
var bIB = moduleWrapper((Vf7, vIB) => {
    var Ff7 = WaA(),
        {
            Duplex: q26
        } = nodeRequire("stream");

    function yIB(A) {
        A.emit("close")
    }

    function N26() {
        if (!this.destroyed && this._writableState.finished) this.destroy()
    }

    function xIB(A) {
        if (this.removeListener("error", xIB), this.destroy(), this.listenerCount("error") === 0) this.emit("error", A)
    }

    function L26(A, Q) {
        let B = !0,
            G = new q26({
                ...Q,
                autoDestroy: !1,
                emitClose: !1,
                objectMode: !1,
                writableObjectMode: !1
            });
        return A.on("message", function(I, Y) {
            let J = !Y && G._readableState.objectMode ? I.toString() : I;
            if (!G.push(J)) A.pause()
        }), A.once("error", function(I) {
            if (G.destroyed) return;
            B = !1, G.destroy(I)
        }), A.once("close", function() {
            if (G.destroyed) return;
            G.push(null)
        }), G._destroy = function(Z, I) {
            if (A.readyState === A.CLOSED) {
                I(Z), process.nextTick(yIB, G);
                return
            }
            let Y = !1;
            if (A.once("error", function(W) {
                    Y = !0, I(W)
                }), A.once("close", function() {
                    if (!Y) I(Z);
                    process.nextTick(yIB, G)
                }), B) A.terminate()
        }, G._final = function(Z) {
            if (A.readyState === A.CONNECTING) {
                A.once("open", function() {
                    G._final(Z)
                });
                return
            }
            if (A._socket === null) return;
            if (A._socket._writableState.finished) {
                if (Z(), G._readableState.endEmitted) G.destroy()
            } else A._socket.once("finish", function() {
                Z()
            }), A.close()
        }, G._read = function() {
            if (A.isPaused) A.resume()
        }, G._write = function(Z, I, Y) {
            if (A.readyState === A.CONNECTING) {
                A.once("open", function() {
                    G._write(Z, I, Y)
                });
                return
            }