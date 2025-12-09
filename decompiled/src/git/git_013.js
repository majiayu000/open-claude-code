/**
 * Claude Code Decompiled
 * Category: git
 * File: 13/34
 * Lines: 147759 - 149258 (1500 lines)
 * Original file: cli.js
 */

        return this.putInt(A, Q)
    };
    g1.ByteStringBuffer.prototype.putBuffer = function(A) {
        return this.putBytes(A.getBytes())
    };
    g1.ByteStringBuffer.prototype.getByte = function() {
        return this.data.charCodeAt(this.read++)
    };
    g1.ByteStringBuffer.prototype.getInt16 = function() {
        var A = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1);
        return this.read += 2, A
    };
    g1.ByteStringBuffer.prototype.getInt24 = function() {
        var A = this.data.charCodeAt(this.read) << 16 ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2);
        return this.read += 3, A
    };
    g1.ByteStringBuffer.prototype.getInt32 = function() {
        var A = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3);
        return this.read += 4, A
    };
    g1.ByteStringBuffer.prototype.getInt16Le = function() {
        var A = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8;
        return this.read += 2, A
    };
    g1.ByteStringBuffer.prototype.getInt24Le = function() {
        var A = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16;
        return this.read += 3, A
    };
    g1.ByteStringBuffer.prototype.getInt32Le = function() {
        var A = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24;
        return this.read += 4, A
    };
    g1.ByteStringBuffer.prototype.getInt = function(A) {
        qzA(A);
        var Q = 0;
        do Q = (Q << 8) + this.data.charCodeAt(this.read++), A -= 8; while (A > 0);
        return Q
    };
    g1.ByteStringBuffer.prototype.getSignedInt = function(A) {
        var Q = this.getInt(A),
            B = 2 << A - 2;
        if (Q >= B) Q -= B << 1;
        return Q
    };
    g1.ByteStringBuffer.prototype.getBytes = function(A) {
        var Q;
        if (A) A = Math.min(this.length(), A), Q = this.data.slice(this.read, this.read + A), this.read += A;
        else if (A === 0) Q = "";
        else Q = this.read === 0 ? this.data : this.data.slice(this.read), this.clear();
        return Q
    };
    g1.ByteStringBuffer.prototype.bytes = function(A) {
        return typeof A > "u" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + A)
    };
    g1.ByteStringBuffer.prototype.at = function(A) {
        return this.data.charCodeAt(this.read + A)
    };
    g1.ByteStringBuffer.prototype.setAt = function(A, Q) {
        return this.data = this.data.substr(0, this.read + A) + String.fromCharCode(Q) + this.data.substr(this.read + A + 1), this
    };
    g1.ByteStringBuffer.prototype.last = function() {
        return this.data.charCodeAt(this.data.length - 1)
    };
    g1.ByteStringBuffer.prototype.copy = function() {
        var A = g1.createBuffer(this.data);
        return A.read = this.read, A
    };
    g1.ByteStringBuffer.prototype.compact = function() {
        if (this.read > 0) this.data = this.data.slice(this.read), this.read = 0;
        return this
    };
    g1.ByteStringBuffer.prototype.clear = function() {
        return this.data = "", this.read = 0, this
    };
    g1.ByteStringBuffer.prototype.truncate = function(A) {
        var Q = Math.max(0, this.length() - A);
        return this.data = this.data.substr(this.read, Q), this.read = 0, this
    };
    g1.ByteStringBuffer.prototype.toHex = function() {
        var A = "";
        for (var Q = this.read; Q < this.data.length; ++Q) {
            var B = this.data.charCodeAt(Q);
            if (B < 16) A += "0";
            A += B.toString(16)
        }
        return A
    };
    g1.ByteStringBuffer.prototype.toString = function() {
        return g1.decodeUtf8(this.bytes())
    };

    function aa8(A, Q) {
        Q = Q || {}, this.read = Q.readOffset || 0, this.growSize = Q.growSize || 1024;
        var B = g1.isArrayBuffer(A),
            G = g1.isArrayBufferView(A);
        if (B || G) {
            if (B) this.data = new DataView(A);
            else this.data = new DataView(A.buffer, A.byteOffset, A.byteLength);
            this.write = "writeOffset" in Q ? Q.writeOffset : this.data.byteLength;
            return
        }
        if (this.data = new DataView(new ArrayBuffer(0)), this.write = 0, A !== null && A !== void 0) this.putBytes(A);
        if ("writeOffset" in Q) this.write = Q.writeOffset
    }
    g1.DataBuffer = aa8;
    g1.DataBuffer.prototype.length = function() {
        return this.write - this.read
    };
    g1.DataBuffer.prototype.isEmpty = function() {
        return this.length() <= 0
    };
    g1.DataBuffer.prototype.accommodate = function(A, Q) {
        if (this.length() >= A) return this;
        Q = Math.max(Q || this.growSize, A);
        var B = new Uint8Array(this.data.buffer, this.data.byteOffset, this.data.byteLength),
            G = new Uint8Array(this.length() + Q);
        return G.set(B), this.data = new DataView(G.buffer), this
    };
    g1.DataBuffer.prototype.putByte = function(A) {
        return this.accommodate(1), this.data.setUint8(this.write++, A), this
    };
    g1.DataBuffer.prototype.fillWithByte = function(A, Q) {
        this.accommodate(Q);
        for (var B = 0; B < Q; ++B) this.data.setUint8(A);
        return this
    };
    g1.DataBuffer.prototype.putBytes = function(A, Q) {
        if (g1.isArrayBufferView(A)) {
            var B = new Uint8Array(A.buffer, A.byteOffset, A.byteLength),
                G = B.byteLength - B.byteOffset;
            this.accommodate(G);
            var Z = new Uint8Array(this.data.buffer, this.write);
            return Z.set(B), this.write += G, this
        }
        if (g1.isArrayBuffer(A)) {
            var B = new Uint8Array(A);
            this.accommodate(B.byteLength);
            var Z = new Uint8Array(this.data.buffer);
            return Z.set(B, this.write), this.write += B.byteLength, this
        }
        if (A instanceof g1.DataBuffer || typeof A === "object" && typeof A.read === "number" && typeof A.write === "number" && g1.isArrayBufferView(A.data)) {
            var B = new Uint8Array(A.data.byteLength, A.read, A.length());
            this.accommodate(B.byteLength);
            var Z = new Uint8Array(A.data.byteLength, this.write);
            return Z.set(B), this.write += B.byteLength, this
        }
        if (A instanceof g1.ByteStringBuffer) A = A.data, Q = "binary";
        if (Q = Q || "binary", typeof A === "string") {
            var I;
            if (Q === "hex") return this.accommodate(Math.ceil(A.length / 2)), I = new Uint8Array(this.data.buffer, this.write), this.write += g1.binary.hex.decode(A, I, this.write), this;
            if (Q === "base64") return this.accommodate(Math.ceil(A.length / 4) * 3), I = new Uint8Array(this.data.buffer, this.write), this.write += g1.binary.base64.decode(A, I, this.write), this;
            if (Q === "utf8") A = g1.encodeUtf8(A), Q = "binary";
            if (Q === "binary" || Q === "raw") return this.accommodate(A.length), I = new Uint8Array(this.data.buffer, this.write), this.write += g1.binary.raw.decode(I), this;
            if (Q === "utf16") return this.accommodate(A.length * 2), I = new Uint16Array(this.data.buffer, this.write), this.write += g1.text.utf16.encode(I), this;
            throw Error("Invalid encoding: " + Q)
        }
        throw Error("Invalid parameter: " + A)
    };
    g1.DataBuffer.prototype.putBuffer = function(A) {
        return this.putBytes(A), A.clear(), this
    };
    g1.DataBuffer.prototype.putString = function(A) {
        return this.putBytes(A, "utf16")
    };
    g1.DataBuffer.prototype.putInt16 = function(A) {
        return this.accommodate(2), this.data.setInt16(this.write, A), this.write += 2, this
    };
    g1.DataBuffer.prototype.putInt24 = function(A) {
        return this.accommodate(3), this.data.setInt16(this.write, A >> 8 & 65535), this.data.setInt8(this.write, A >> 16 & 255), this.write += 3, this
    };
    g1.DataBuffer.prototype.putInt32 = function(A) {
        return this.accommodate(4), this.data.setInt32(this.write, A), this.write += 4, this
    };
    g1.DataBuffer.prototype.putInt16Le = function(A) {
        return this.accommodate(2), this.data.setInt16(this.write, A, !0), this.write += 2, this
    };
    g1.DataBuffer.prototype.putInt24Le = function(A) {
        return this.accommodate(3), this.data.setInt8(this.write, A >> 16 & 255), this.data.setInt16(this.write, A >> 8 & 65535, !0), this.write += 3, this
    };
    g1.DataBuffer.prototype.putInt32Le = function(A) {
        return this.accommodate(4), this.data.setInt32(this.write, A, !0), this.write += 4, this
    };
    g1.DataBuffer.prototype.putInt = function(A, Q) {
        qzA(Q), this.accommodate(Q / 8);
        do Q -= 8, this.data.setInt8(this.write++, A >> Q & 255); while (Q > 0);
        return this
    };
    g1.DataBuffer.prototype.putSignedInt = function(A, Q) {
        if (qzA(Q), this.accommodate(Q / 8), A < 0) A += 2 << Q - 1;
        return this.putInt(A, Q)
    };
    g1.DataBuffer.prototype.getByte = function() {
        return this.data.getInt8(this.read++)
    };
    g1.DataBuffer.prototype.getInt16 = function() {
        var A = this.data.getInt16(this.read);
        return this.read += 2, A
    };
    g1.DataBuffer.prototype.getInt24 = function() {
        var A = this.data.getInt16(this.read) << 8 ^ this.data.getInt8(this.read + 2);
        return this.read += 3, A
    };
    g1.DataBuffer.prototype.getInt32 = function() {
        var A = this.data.getInt32(this.read);
        return this.read += 4, A
    };
    g1.DataBuffer.prototype.getInt16Le = function() {
        var A = this.data.getInt16(this.read, !0);
        return this.read += 2, A
    };
    g1.DataBuffer.prototype.getInt24Le = function() {
        var A = this.data.getInt8(this.read) ^ this.data.getInt16(this.read + 1, !0) << 8;
        return this.read += 3, A
    };
    g1.DataBuffer.prototype.getInt32Le = function() {
        var A = this.data.getInt32(this.read, !0);
        return this.read += 4, A
    };
    g1.DataBuffer.prototype.getInt = function(A) {
        qzA(A);
        var Q = 0;
        do Q = (Q << 8) + this.data.getInt8(this.read++), A -= 8; while (A > 0);
        return Q
    };
    g1.DataBuffer.prototype.getSignedInt = function(A) {
        var Q = this.getInt(A),
            B = 2 << A - 2;
        if (Q >= B) Q -= B << 1;
        return Q
    };
    g1.DataBuffer.prototype.getBytes = function(A) {
        var Q;
        if (A) A = Math.min(this.length(), A), Q = this.data.slice(this.read, this.read + A), this.read += A;
        else if (A === 0) Q = "";
        else Q = this.read === 0 ? this.data : this.data.slice(this.read), this.clear();
        return Q
    };
    g1.DataBuffer.prototype.bytes = function(A) {
        return typeof A > "u" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + A)
    };
    g1.DataBuffer.prototype.at = function(A) {
        return this.data.getUint8(this.read + A)
    };
    g1.DataBuffer.prototype.setAt = function(A, Q) {
        return this.data.setUint8(A, Q), this
    };
    g1.DataBuffer.prototype.last = function() {
        return this.data.getUint8(this.write - 1)
    };
    g1.DataBuffer.prototype.copy = function() {
        return new g1.DataBuffer(this)
    };
    g1.DataBuffer.prototype.compact = function() {
        if (this.read > 0) {
            var A = new Uint8Array(this.data.buffer, this.read),
                Q = new Uint8Array(A.byteLength);
            Q.set(A), this.data = new DataView(Q), this.write -= this.read, this.read = 0
        }
        return this
    };
    g1.DataBuffer.prototype.clear = function() {
        return this.data = new DataView(new ArrayBuffer(0)), this.read = this.write = 0, this
    };
    g1.DataBuffer.prototype.truncate = function(A) {
        return this.write = Math.max(0, this.length() - A), this.read = Math.min(this.read, this.write), this
    };
    g1.DataBuffer.prototype.toHex = function() {
        var A = "";
        for (var Q = this.read; Q < this.data.byteLength; ++Q) {
            var B = this.data.getUint8(Q);
            if (B < 16) A += "0";
            A += B.toString(16)
        }
        return A
    };
    g1.DataBuffer.prototype.toString = function(A) {
        var Q = new Uint8Array(this.data, this.read, this.length());
        if (A = A || "utf8", A === "binary" || A === "raw") return g1.binary.raw.encode(Q);
        if (A === "hex") return g1.binary.hex.encode(Q);
        if (A === "base64") return g1.binary.base64.encode(Q);
        if (A === "utf8") return g1.text.utf8.decode(Q);
        if (A === "utf16") return g1.text.utf16.decode(Q);
        throw Error("Invalid encoding: " + A)
    };
    g1.createBuffer = function(A, Q) {
        if (Q = Q || "raw", A !== void 0 && Q === "utf8") A = g1.encodeUtf8(A);
        return new g1.ByteBuffer(A)
    };
    g1.fillString = function(A, Q) {
        var B = "";
        while (Q > 0) {
            if (Q & 1) B += A;
            if (Q >>>= 1, Q > 0) A += A
        }
        return B
    };
    g1.xorBytes = function(A, Q, B) {
        var G = "",
            Z = "",
            I = "",
            Y = 0,
            J = 0;
        for (; B > 0; --B, ++Y) {
            if (Z = A.charCodeAt(Y) ^ Q.charCodeAt(Y), J >= 10) G += I, I = "", J = 0;
            I += String.fromCharCode(Z), ++J
        }
        return G += I, G
    };
    g1.hexToBytes = function(A) {
        var Q = "",
            B = 0;
        if (A.length & !0) B = 1, Q += String.fromCharCode(parseInt(A[0], 16));
        for (; B < A.length; B += 2) Q += String.fromCharCode(parseInt(A.substr(B, 2), 16));
        return Q
    };
    g1.bytesToHex = function(A) {
        return g1.createBuffer(A).toHex()
    };
    g1.int32ToBytes = function(A) {
        return String.fromCharCode(A >> 24 & 255) + String.fromCharCode(A >> 16 & 255) + String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A & 255)
    };
    var Mc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        Oc = [62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
        s9B = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    g1.encode64 = function(A, Q) {
        var B = "",
            G = "",
            Z, I, Y, J = 0;
        while (J < A.length) {
            if (Z = A.charCodeAt(J++), I = A.charCodeAt(J++), Y = A.charCodeAt(J++), B += Mc.charAt(Z >> 2), B += Mc.charAt((Z & 3) << 4 | I >> 4), isNaN(I)) B += "==";
            else B += Mc.charAt((I & 15) << 2 | Y >> 6), B += isNaN(Y) ? "=" : Mc.charAt(Y & 63);
            if (Q && B.length > Q) G += B.substr(0, Q) + `\r
`, B = B.substr(Q)
        }
        return G += B, G
    };
    g1.decode64 = function(A) {
        A = A.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        var Q = "",
            B, G, Z, I, Y = 0;
        while (Y < A.length)
            if (B = Oc[A.charCodeAt(Y++) - 43], G = Oc[A.charCodeAt(Y++) - 43], Z = Oc[A.charCodeAt(Y++) - 43], I = Oc[A.charCodeAt(Y++) - 43], Q += String.fromCharCode(B << 2 | G >> 4), Z !== 64) {
                if (Q += String.fromCharCode((G & 15) << 4 | Z >> 2), I !== 64) Q += String.fromCharCode((Z & 3) << 6 | I)
            } return Q
    };
    g1.encodeUtf8 = function(A) {
        return unescape(encodeURIComponent(A))
    };
    g1.decodeUtf8 = function(A) {
        return decodeURIComponent(escape(A))
    };
    g1.binary = {
        raw: {},
        hex: {},
        base64: {},
        base58: {},
        baseN: {
            encode: a9B.encode,
            decode: a9B.decode
        }
    };
    g1.binary.raw.encode = function(A) {
        return String.fromCharCode.apply(null, A)
    };
    g1.binary.raw.decode = function(A, Q, B) {
        var G = Q;
        if (!G) G = new Uint8Array(A.length);
        B = B || 0;
        var Z = B;
        for (var I = 0; I < A.length; ++I) G[Z++] = A.charCodeAt(I);
        return Q ? Z - B : G
    };
    g1.binary.hex.encode = g1.bytesToHex;
    g1.binary.hex.decode = function(A, Q, B) {
        var G = Q;
        if (!G) G = new Uint8Array(Math.ceil(A.length / 2));
        B = B || 0;
        var Z = 0,
            I = B;
        if (A.length & 1) Z = 1, G[I++] = parseInt(A[0], 16);
        for (; Z < A.length; Z += 2) G[I++] = parseInt(A.substr(Z, 2), 16);
        return Q ? I - B : G
    };
    g1.binary.base64.encode = function(A, Q) {
        var B = "",
            G = "",
            Z, I, Y, J = 0;
        while (J < A.byteLength) {
            if (Z = A[J++], I = A[J++], Y = A[J++], B += Mc.charAt(Z >> 2), B += Mc.charAt((Z & 3) << 4 | I >> 4), isNaN(I)) B += "==";
            else B += Mc.charAt((I & 15) << 2 | Y >> 6), B += isNaN(Y) ? "=" : Mc.charAt(Y & 63);
            if (Q && B.length > Q) G += B.substr(0, Q) + `\r
`, B = B.substr(Q)
        }
        return G += B, G
    };
    g1.binary.base64.decode = function(A, Q, B) {
        var G = Q;
        if (!G) G = new Uint8Array(Math.ceil(A.length / 4) * 3);
        A = A.replace(/[^A-Za-z0-9\+\/\=]/g, ""), B = B || 0;
        var Z, I, Y, J, W = 0,
            X = B;
        while (W < A.length)
            if (Z = Oc[A.charCodeAt(W++) - 43], I = Oc[A.charCodeAt(W++) - 43], Y = Oc[A.charCodeAt(W++) - 43], J = Oc[A.charCodeAt(W++) - 43], G[X++] = Z << 2 | I >> 4, Y !== 64) {
                if (G[X++] = (I & 15) << 4 | Y >> 2, J !== 64) G[X++] = (Y & 3) << 6 | J
            } return Q ? X - B : G.subarray(0, X)
    };
    g1.binary.base58.encode = function(A, Q) {
        return g1.binary.baseN.encode(A, s9B, Q)
    };
    g1.binary.base58.decode = function(A, Q) {
        return g1.binary.baseN.decode(A, s9B, Q)
    };
    g1.text = {
        utf8: {},
        utf16: {}
    };
    g1.text.utf8.encode = function(A, Q, B) {
        A = g1.encodeUtf8(A);
        var G = Q;
        if (!G) G = new Uint8Array(A.length);
        B = B || 0;
        var Z = B;
        for (var I = 0; I < A.length; ++I) G[Z++] = A.charCodeAt(I);
        return Q ? Z - B : G
    };
    g1.text.utf8.decode = function(A) {
        return g1.decodeUtf8(String.fromCharCode.apply(null, A))
    };
    g1.text.utf16.encode = function(A, Q, B) {
        var G = Q;
        if (!G) G = new Uint8Array(A.length * 2);
        var Z = new Uint16Array(G.buffer);
        B = B || 0;
        var I = B,
            Y = B;
        for (var J = 0; J < A.length; ++J) Z[Y++] = A.charCodeAt(J), I += 2;
        return Q ? I - B : G
    };
    g1.text.utf16.decode = function(A) {
        return String.fromCharCode.apply(null, new Uint16Array(A.buffer))
    };
    g1.deflate = function(A, Q, B) {
        if (Q = g1.decode64(A.deflate(g1.encode64(Q)).rval), B) {
            var G = 2,
                Z = Q.charCodeAt(1);
            if (Z & 32) G = 6;
            Q = Q.substring(G, Q.length - 4)
        }
        return Q
    };
    g1.inflate = function(A, Q, B) {
        var G = A.inflate(g1.encode64(Q)).rval;
        return G === null ? null : g1.decode64(G)
    };
    var dx1 = function(A, Q, B) {
            if (!A) throw Error("WebStorage not available.");
            var G;
            if (B === null) G = A.removeItem(Q);
            else B = g1.encode64(JSON.stringify(B)), G = A.setItem(Q, B);
            if (typeof G < "u" && G.rval !== !0) {
                var Z = Error(G.error.message);
                throw Z.id = G.error.id, Z.name = G.error.name, Z
            }
        },
        cx1 = function(A, Q) {
            if (!A) throw Error("WebStorage not available.");
            var B = A.getItem(Q);
            if (A.init)
                if (B.rval === null) {
                    if (B.error) {
                        var G = Error(B.error.message);
                        throw G.id = B.error.id, G.name = B.error.name, G
                    }
                    B = null
                } else B = B.rval;
            if (B !== null) B = JSON.parse(g1.decode64(B));
            return B
        },
        sa8 = function(A, Q, B, G) {
            var Z = cx1(A, Q);
            if (Z === null) Z = {};
            Z[B] = G, dx1(A, Q, Z)
        },
        ra8 = function(A, Q, B) {
            var G = cx1(A, Q);
            if (G !== null) G = B in G ? G[B] : null;
            return G
        },
        oa8 = function(A, Q, B) {
            var G = cx1(A, Q);
            if (G !== null && B in G) {
                delete G[B];
                var Z = !0;
                for (var I in G) {
                    Z = !1;
                    break
                }
                if (Z) G = null;
                dx1(A, Q, G)
            }
        },
        ta8 = function(A, Q) {
            dx1(A, Q, null)
        },
        GiA = function(A, Q, B) {
            var G = null;
            if (typeof B > "u") B = ["web", "flash"];
            var Z, I = !1,
                Y = null;
            for (var J in B) {
                Z = B[J];
                try {
                    if (Z === "flash" || Z === "both") {
                        if (Q[0] === null) throw Error("Flash local storage not available.");
                        G = A.apply(this, Q), I = Z === "flash"
                    }
                    if (Z === "web" || Z === "both") Q[0] = localStorage, G = A.apply(this, Q), I = !0
                } catch (W) {
                    Y = W
                }
                if (I) break
            }
            if (!I) throw Y;
            return G
        };
    g1.setItem = function(A, Q, B, G, Z) {
        GiA(sa8, arguments, Z)
    };
    g1.getItem = function(A, Q, B, G) {
        return GiA(ra8, arguments, G)
    };
    g1.removeItem = function(A, Q, B, G) {
        GiA(oa8, arguments, G)
    };
    g1.clearItems = function(A, Q, B) {
        GiA(ta8, arguments, B)
    };
    g1.isEmpty = function(A) {
        for (var Q in A)
            if (A.hasOwnProperty(Q)) return !1;
        return !0
    };
    g1.format = function(A) {
        var Q = /%./g,
            B, G, Z = 0,
            I = [],
            Y = 0;
        while (B = Q.exec(A)) {
            if (G = A.substring(Y, Q.lastIndex - 2), G.length > 0) I.push(G);
            Y = Q.lastIndex;
            var J = B[0][1];
            switch (J) {
                case "s":
                case "o":
                    if (Z < arguments.length) I.push(arguments[Z++ + 1]);
                    else I.push("<?>");
                    break;
                case "%":
                    I.push("%");
                    break;
                default:
                    I.push("<%" + J + "?>")
            }
        }
        return I.push(A.substring(Y)), I.join("")
    };
    g1.formatNumber = function(A, Q, B, G) {
        var Z = A,
            I = isNaN(Q = Math.abs(Q)) ? 2 : Q,
            Y = B === void 0 ? "," : B,
            J = G === void 0 ? "." : G,
            W = Z < 0 ? "-" : "",
            X = parseInt(Z = Math.abs(+Z || 0).toFixed(I), 10) + "",
            F = X.length > 3 ? X.length % 3 : 0;
        return W + (F ? X.substr(0, F) + J : "") + X.substr(F).replace(/(\d{3})(?=\d)/g, "$1" + J) + (I ? Y + Math.abs(Z - X).toFixed(I).slice(2) : "")
    };
    g1.formatSize = function(A) {
        if (A >= 1073741824) A = g1.formatNumber(A / 1073741824, 2, ".", "") + " GiB";
        else if (A >= 1048576) A = g1.formatNumber(A / 1048576, 2, ".", "") + " MiB";
        else if (A >= 1024) A = g1.formatNumber(A / 1024, 0) + " KiB";
        else A = g1.formatNumber(A, 0) + " bytes";
        return A
    };
    g1.bytesFromIP = function(A) {
        if (A.indexOf(".") !== -1) return g1.bytesFromIPv4(A);
        if (A.indexOf(":") !== -1) return g1.bytesFromIPv6(A);
        return null
    };
    g1.bytesFromIPv4 = function(A) {
        if (A = A.split("."), A.length !== 4) return null;
        var Q = g1.createBuffer();
        for (var B = 0; B < A.length; ++B) {
            var G = parseInt(A[B], 10);
            if (isNaN(G)) return null;
            Q.putByte(G)
        }
        return Q.getBytes()
    };
    g1.bytesFromIPv6 = function(A) {
        var Q = 0;
        A = A.split(":").filter(function(Y) {
            if (Y.length === 0) ++Q;
            return !0
        });
        var B = (8 - A.length + Q) * 2,
            G = g1.createBuffer();
        for (var Z = 0; Z < 8; ++Z) {
            if (!A[Z] || A[Z].length === 0) {
                G.fillWithByte(0, B), B = 0;
                continue
            }
            var I = g1.hexToBytes(A[Z]);
            if (I.length < 2) G.putByte(0);
            G.putBytes(I)
        }
        return G.getBytes()
    };
    g1.bytesToIP = function(A) {
        if (A.length === 4) return g1.bytesToIPv4(A);
        if (A.length === 16) return g1.bytesToIPv6(A);
        return null
    };
    g1.bytesToIPv4 = function(A) {
        if (A.length !== 4) return null;
        var Q = [];
        for (var B = 0; B < A.length; ++B) Q.push(A.charCodeAt(B));
        return Q.join(".")
    };
    g1.bytesToIPv6 = function(A) {
        if (A.length !== 16) return null;
        var Q = [],
            B = [],
            G = 0;
        for (var Z = 0; Z < A.length; Z += 2) {
            var I = g1.bytesToHex(A[Z] + A[Z + 1]);
            while (I[0] === "0" && I !== "0") I = I.substr(1);
            if (I === "0") {
                var Y = B[B.length - 1],
                    J = Q.length;
                if (!Y || J !== Y.end + 1) B.push({
                    start: J,
                    end: J
                });
                else if (Y.end = J, Y.end - Y.start > B[G].end - B[G].start) G = B.length - 1
            }
            Q.push(I)
        }
        if (B.length > 0) {
            var W = B[G];
            if (W.end - W.start > 0) {
                if (Q.splice(W.start, W.end - W.start + 1, ""), W.start === 0) Q.unshift("");
                if (W.end === 7) Q.push("")
            }
        }
        return Q.join(":")
    };
    g1.estimateCores = function(A, Q) {
        if (typeof A === "function") Q = A, A = {};
        if (A = A || {}, "cores" in g1 && !A.update) return Q(null, g1.cores);
        if (typeof navigator < "u" && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0) return g1.cores = navigator.hardwareConcurrency, Q(null, g1.cores);
        if (typeof Worker > "u") return g1.cores = 1, Q(null, g1.cores);
        if (typeof Blob > "u") return g1.cores = 2, Q(null, g1.cores);
        var B = URL.createObjectURL(new Blob(["(", function() {
            self.addEventListener("message", function(Y) {
                var J = Date.now(),
                    W = J + 4;
                while (Date.now() < W);
                self.postMessage({
                    st: J,
                    et: W
                })
            })
        }.toString(), ")()"], {
            type: "application/javascript"
        }));
        G([], 5, 16);

        function G(Y, J, W) {
            if (J === 0) {
                var X = Math.floor(Y.reduce(function(F, V) {
                    return F + V
                }, 0) / Y.length);
                return g1.cores = Math.max(1, X), URL.revokeObjectURL(B), Q(null, g1.cores)
            }
            Z(W, function(F, V) {
                Y.push(I(W, V)), G(Y, J - 1, W)
            })
        }

        function Z(Y, J) {
            var W = [],
                X = [];
            for (var F = 0; F < Y; ++F) {
                var V = new Worker(B);
                V.addEventListener("message", function(K) {
                    if (X.push(K.data), X.length === Y) {
                        for (var D = 0; D < Y; ++D) W[D].terminate();
                        J(null, X)
                    }
                }), W.push(V)
            }
            for (var F = 0; F < Y; ++F) W[F].postMessage(F)
        }

        function I(Y, J) {
            var W = [];
            for (var X = 0; X < Y; ++X) {
                var F = J[X],
                    V = W[X] = [];
                for (var K = 0; K < Y; ++K) {
                    if (X === K) continue;
                    var D = J[K];
                    if (F.st > D.st && F.st < D.et || D.st > F.st && D.st < F.et) V.push(K)
                }
            }
            return W.reduce(function(H, C) {
                return Math.max(H, C.length)
            }, 0)
        }
    }
});
var ZiA = U((QT7, o9B) => {
    var SV = n8();
    P3();
    o9B.exports = SV.cipher = SV.cipher || {};
    SV.cipher.algorithms = SV.cipher.algorithms || {};
    SV.cipher.createCipher = function(A, Q) {
        var B = A;
        if (typeof B === "string") {
            if (B = SV.cipher.getAlgorithm(B), B) B = B()
        }
        if (!B) throw Error("Unsupported algorithm: " + A);
        return new SV.cipher.BlockCipher({
            algorithm: B,
            key: Q,
            decrypt: !1
        })
    };
    SV.cipher.createDecipher = function(A, Q) {
        var B = A;
        if (typeof B === "string") {
            if (B = SV.cipher.getAlgorithm(B), B) B = B()
        }
        if (!B) throw Error("Unsupported algorithm: " + A);
        return new SV.cipher.BlockCipher({
            algorithm: B,
            key: Q,
            decrypt: !0
        })
    };
    SV.cipher.registerAlgorithm = function(A, Q) {
        A = A.toUpperCase(), SV.cipher.algorithms[A] = Q
    };
    SV.cipher.getAlgorithm = function(A) {
        if (A = A.toUpperCase(), A in SV.cipher.algorithms) return SV.cipher.algorithms[A];
        return null
    };
    var px1 = SV.cipher.BlockCipher = function(A) {
        this.algorithm = A.algorithm, this.mode = this.algorithm.mode, this.blockSize = this.mode.blockSize, this._finish = !1, this._input = null, this.output = null, this._op = A.decrypt ? this.mode.decrypt : this.mode.encrypt, this._decrypt = A.decrypt, this.algorithm.initialize(A)
    };
    px1.prototype.start = function(A) {
        A = A || {};
        var Q = {};
        for (var B in A) Q[B] = A[B];
        Q.decrypt = this._decrypt, this._finish = !1, this._input = SV.util.createBuffer(), this.output = A.output || SV.util.createBuffer(), this.mode.start(Q)
    };
    px1.prototype.update = function(A) {
        if (A) this._input.putBuffer(A);
        while (!this._op.call(this.mode, this._input, this.output, this._finish) && !this._finish);
        this._input.compact()
    };
    px1.prototype.finish = function(A) {
        if (A && (this.mode.name === "ECB" || this.mode.name === "CBC")) this.mode.pad = function(B) {
            return A(this.blockSize, B, !1)
        }, this.mode.unpad = function(B) {
            return A(this.blockSize, B, !0)
        };
        var Q = {};
        if (Q.decrypt = this._decrypt, Q.overflow = this._input.length() % this.blockSize, !this._decrypt && this.mode.pad) {
            if (!this.mode.pad(this._input, Q)) return !1
        }
        if (this._finish = !0, this.update(), this._decrypt && this.mode.unpad) {
            if (!this.mode.unpad(this.output, Q)) return !1
        }
        if (this.mode.afterFinish) {
            if (!this.mode.afterFinish(this.output, Q)) return !1
        }
        return !0
    }
});
var ix1 = U((BT7, t9B) => {
    var _V = n8();
    P3();
    _V.cipher = _V.cipher || {};
    var a6 = t9B.exports = _V.cipher.modes = _V.cipher.modes || {};
    a6.ecb = function(A) {
        A = A || {}, this.name = "ECB", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = Array(this._ints), this._outBlock = Array(this._ints)
    };
    a6.ecb.prototype.start = function(A) {};
    a6.ecb.prototype.encrypt = function(A, Q, B) {
        if (A.length() < this.blockSize && !(B && A.length() > 0)) return !0;
        for (var G = 0; G < this._ints; ++G) this._inBlock[G] = A.getInt32();
        this.cipher.encrypt(this._inBlock, this._outBlock);
        for (var G = 0; G < this._ints; ++G) Q.putInt32(this._outBlock[G])
    };
    a6.ecb.prototype.decrypt = function(A, Q, B) {
        if (A.length() < this.blockSize && !(B && A.length() > 0)) return !0;
        for (var G = 0; G < this._ints; ++G) this._inBlock[G] = A.getInt32();
        this.cipher.decrypt(this._inBlock, this._outBlock);
        for (var G = 0; G < this._ints; ++G) Q.putInt32(this._outBlock[G])
    };
    a6.ecb.prototype.pad = function(A, Q) {
        var B = A.length() === this.blockSize ? this.blockSize : this.blockSize - A.length();
        return A.fillWithByte(B, B), !0
    };
    a6.ecb.prototype.unpad = function(A, Q) {
        if (Q.overflow > 0) return !1;
        var B = A.length(),
            G = A.at(B - 1);
        if (G > this.blockSize << 2) return !1;
        return A.truncate(G), !0
    };
    a6.cbc = function(A) {
        A = A || {}, this.name = "CBC", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = Array(this._ints), this._outBlock = Array(this._ints)
    };
    a6.cbc.prototype.start = function(A) {
        if (A.iv === null) {
            if (!this._prev) throw Error("Invalid IV parameter.");
            this._iv = this._prev.slice(0)
        } else if (!("iv" in A)) throw Error("Invalid IV parameter.");
        else this._iv = IiA(A.iv, this.blockSize), this._prev = this._iv.slice(0)
    };
    a6.cbc.prototype.encrypt = function(A, Q, B) {
        if (A.length() < this.blockSize && !(B && A.length() > 0)) return !0;
        for (var G = 0; G < this._ints; ++G) this._inBlock[G] = this._prev[G] ^ A.getInt32();
        this.cipher.encrypt(this._inBlock, this._outBlock);
        for (var G = 0; G < this._ints; ++G) Q.putInt32(this._outBlock[G]);
        this._prev = this._outBlock
    };
    a6.cbc.prototype.decrypt = function(A, Q, B) {
        if (A.length() < this.blockSize && !(B && A.length() > 0)) return !0;
        for (var G = 0; G < this._ints; ++G) this._inBlock[G] = A.getInt32();
        this.cipher.decrypt(this._inBlock, this._outBlock);
        for (var G = 0; G < this._ints; ++G) Q.putInt32(this._prev[G] ^ this._outBlock[G]);
        this._prev = this._inBlock.slice(0)
    };
    a6.cbc.prototype.pad = function(A, Q) {
        var B = A.length() === this.blockSize ? this.blockSize : this.blockSize - A.length();
        return A.fillWithByte(B, B), !0
    };
    a6.cbc.prototype.unpad = function(A, Q) {
        if (Q.overflow > 0) return !1;
        var B = A.length(),
            G = A.at(B - 1);
        if (G > this.blockSize << 2) return !1;
        return A.truncate(G), !0
    };
    a6.cfb = function(A) {
        A = A || {}, this.name = "CFB", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = Array(this._ints), this._partialBlock = Array(this._ints), this._partialOutput = _V.util.createBuffer(), this._partialBytes = 0
    };
    a6.cfb.prototype.start = function(A) {
        if (!("iv" in A)) throw Error("Invalid IV parameter.");
        this._iv = IiA(A.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0
    };
    a6.cfb.prototype.encrypt = function(A, Q, B) {
        var G = A.length();
        if (G === 0) return !0;
        if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && G >= this.blockSize) {
            for (var Z = 0; Z < this._ints; ++Z) this._inBlock[Z] = A.getInt32() ^ this._outBlock[Z], Q.putInt32(this._inBlock[Z]);
            return
        }
        var I = (this.blockSize - G) % this.blockSize;
        if (I > 0) I = this.blockSize - I;
        this._partialOutput.clear();
        for (var Z = 0; Z < this._ints; ++Z) this._partialBlock[Z] = A.getInt32() ^ this._outBlock[Z], this._partialOutput.putInt32(this._partialBlock[Z]);
        if (I > 0) A.read -= this.blockSize;
        else
            for (var Z = 0; Z < this._ints; ++Z) this._inBlock[Z] = this._partialBlock[Z];
        if (this._partialBytes > 0) this._partialOutput.getBytes(this._partialBytes);
        if (I > 0 && !B) return Q.putBytes(this._partialOutput.getBytes(I - this._partialBytes)), this._partialBytes = I, !0;
        Q.putBytes(this._partialOutput.getBytes(G - this._partialBytes)), this._partialBytes = 0
    };
    a6.cfb.prototype.decrypt = function(A, Q, B) {
        var G = A.length();
        if (G === 0) return !0;
        if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && G >= this.blockSize) {
            for (var Z = 0; Z < this._ints; ++Z) this._inBlock[Z] = A.getInt32(), Q.putInt32(this._inBlock[Z] ^ this._outBlock[Z]);
            return
        }
        var I = (this.blockSize - G) % this.blockSize;
        if (I > 0) I = this.blockSize - I;
        this._partialOutput.clear();
        for (var Z = 0; Z < this._ints; ++Z) this._partialBlock[Z] = A.getInt32(), this._partialOutput.putInt32(this._partialBlock[Z] ^ this._outBlock[Z]);
        if (I > 0) A.read -= this.blockSize;
        else
            for (var Z = 0; Z < this._ints; ++Z) this._inBlock[Z] = this._partialBlock[Z];
        if (this._partialBytes > 0) this._partialOutput.getBytes(this._partialBytes);
        if (I > 0 && !B) return Q.putBytes(this._partialOutput.getBytes(I - this._partialBytes)), this._partialBytes = I, !0;
        Q.putBytes(this._partialOutput.getBytes(G - this._partialBytes)), this._partialBytes = 0
    };
    a6.ofb = function(A) {
        A = A || {}, this.name = "OFB", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = Array(this._ints), this._partialOutput = _V.util.createBuffer(), this._partialBytes = 0
    };
    a6.ofb.prototype.start = function(A) {
        if (!("iv" in A)) throw Error("Invalid IV parameter.");
        this._iv = IiA(A.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0
    };
    a6.ofb.prototype.encrypt = function(A, Q, B) {
        var G = A.length();
        if (A.length() === 0) return !0;
        if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && G >= this.blockSize) {
            for (var Z = 0; Z < this._ints; ++Z) Q.putInt32(A.getInt32() ^ this._outBlock[Z]), this._inBlock[Z] = this._outBlock[Z];
            return
        }
        var I = (this.blockSize - G) % this.blockSize;
        if (I > 0) I = this.blockSize - I;
        this._partialOutput.clear();
        for (var Z = 0; Z < this._ints; ++Z) this._partialOutput.putInt32(A.getInt32() ^ this._outBlock[Z]);
        if (I > 0) A.read -= this.blockSize;
        else
            for (var Z = 0; Z < this._ints; ++Z) this._inBlock[Z] = this._outBlock[Z];
        if (this._partialBytes > 0) this._partialOutput.getBytes(this._partialBytes);
        if (I > 0 && !B) return Q.putBytes(this._partialOutput.getBytes(I - this._partialBytes)), this._partialBytes = I, !0;
        Q.putBytes(this._partialOutput.getBytes(G - this._partialBytes)), this._partialBytes = 0
    };
    a6.ofb.prototype.decrypt = a6.ofb.prototype.encrypt;
    a6.ctr = function(A) {
        A = A || {}, this.name = "CTR", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = Array(this._ints), this._partialOutput = _V.util.createBuffer(), this._partialBytes = 0
    };
    a6.ctr.prototype.start = function(A) {
        if (!("iv" in A)) throw Error("Invalid IV parameter.");
        this._iv = IiA(A.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0
    };
    a6.ctr.prototype.encrypt = function(A, Q, B) {
        var G = A.length();
        if (G === 0) return !0;
        if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && G >= this.blockSize)
            for (var Z = 0; Z < this._ints; ++Z) Q.putInt32(A.getInt32() ^ this._outBlock[Z]);
        else {
            var I = (this.blockSize - G) % this.blockSize;
            if (I > 0) I = this.blockSize - I;
            this._partialOutput.clear();
            for (var Z = 0; Z < this._ints; ++Z) this._partialOutput.putInt32(A.getInt32() ^ this._outBlock[Z]);
            if (I > 0) A.read -= this.blockSize;
            if (this._partialBytes > 0) this._partialOutput.getBytes(this._partialBytes);
            if (I > 0 && !B) return Q.putBytes(this._partialOutput.getBytes(I - this._partialBytes)), this._partialBytes = I, !0;
            Q.putBytes(this._partialOutput.getBytes(G - this._partialBytes)), this._partialBytes = 0
        }
        YiA(this._inBlock)
    };
    a6.ctr.prototype.decrypt = a6.ctr.prototype.encrypt;
    a6.gcm = function(A) {
        A = A || {}, this.name = "GCM", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = Array(this._ints), this._outBlock = Array(this._ints), this._partialOutput = _V.util.createBuffer(), this._partialBytes = 0, this._R = 3774873600
    };
    a6.gcm.prototype.start = function(A) {
        if (!("iv" in A)) throw Error("Invalid IV parameter.");
        var Q = _V.util.createBuffer(A.iv);
        this._cipherLength = 0;
        var B;
        if ("additionalData" in A) B = _V.util.createBuffer(A.additionalData);
        else B = _V.util.createBuffer();
        if ("tagLength" in A) this._tagLength = A.tagLength;
        else this._tagLength = 128;
        if (this._tag = null, A.decrypt) {
            if (this._tag = _V.util.createBuffer(A.tag).getBytes(), this._tag.length !== this._tagLength / 8) throw Error("Authentication tag does not match tag length.")
        }
        this._hashBlock = Array(this._ints), this.tag = null, this._hashSubkey = Array(this._ints), this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey), this.componentBits = 4, this._m = this.generateHashTable(this._hashSubkey, this.componentBits);
        var G = Q.length();
        if (G === 12) this._j0 = [Q.getInt32(), Q.getInt32(), Q.getInt32(), 1];
        else {
            this._j0 = [0, 0, 0, 0];
            while (Q.length() > 0) this._j0 = this.ghash(this._hashSubkey, this._j0, [Q.getInt32(), Q.getInt32(), Q.getInt32(), Q.getInt32()]);
            this._j0 = this.ghash(this._hashSubkey, this._j0, [0, 0].concat(lx1(G * 8)))
        }
        this._inBlock = this._j0.slice(0), YiA(this._inBlock), this._partialBytes = 0, B = _V.util.createBuffer(B), this._aDataLength = lx1(B.length() * 8);
        var Z = B.length() % this.blockSize;
        if (Z) B.fillWithByte(0, this.blockSize - Z);
        this._s = [0, 0, 0, 0];
        while (B.length() > 0) this._s = this.ghash(this._hashSubkey, this._s, [B.getInt32(), B.getInt32(), B.getInt32(), B.getInt32()])
    };
    a6.gcm.prototype.encrypt = function(A, Q, B) {
        var G = A.length();
        if (G === 0) return !0;
        if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && G >= this.blockSize) {
            for (var Z = 0; Z < this._ints; ++Z) Q.putInt32(this._outBlock[Z] ^= A.getInt32());
            this._cipherLength += this.blockSize
        } else {
            var I = (this.blockSize - G) % this.blockSize;
            if (I > 0) I = this.blockSize - I;
            this._partialOutput.clear();
            for (var Z = 0; Z < this._ints; ++Z) this._partialOutput.putInt32(A.getInt32() ^ this._outBlock[Z]);
            if (I <= 0 || B) {
                if (B) {
                    var Y = G % this.blockSize;
                    this._cipherLength += Y, this._partialOutput.truncate(this.blockSize - Y)
                } else this._cipherLength += this.blockSize;
                for (var Z = 0; Z < this._ints; ++Z) this._outBlock[Z] = this._partialOutput.getInt32();
                this._partialOutput.read -= this.blockSize
            }
            if (this._partialBytes > 0) this._partialOutput.getBytes(this._partialBytes);
            if (I > 0 && !B) return A.read -= this.blockSize, Q.putBytes(this._partialOutput.getBytes(I - this._partialBytes)), this._partialBytes = I, !0;
            Q.putBytes(this._partialOutput.getBytes(G - this._partialBytes)), this._partialBytes = 0
        }
        this._s = this.ghash(this._hashSubkey, this._s, this._outBlock), YiA(this._inBlock)
    };
    a6.gcm.prototype.decrypt = function(A, Q, B) {
        var G = A.length();
        if (G < this.blockSize && !(B && G > 0)) return !0;
        this.cipher.encrypt(this._inBlock, this._outBlock), YiA(this._inBlock), this._hashBlock[0] = A.getInt32(), this._hashBlock[1] = A.getInt32(), this._hashBlock[2] = A.getInt32(), this._hashBlock[3] = A.getInt32(), this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock);
        for (var Z = 0; Z < this._ints; ++Z) Q.putInt32(this._outBlock[Z] ^ this._hashBlock[Z]);
        if (G < this.blockSize) this._cipherLength += G % this.blockSize;
        else this._cipherLength += this.blockSize
    };
    a6.gcm.prototype.afterFinish = function(A, Q) {
        var B = !0;
        if (Q.decrypt && Q.overflow) A.truncate(this.blockSize - Q.overflow);
        this.tag = _V.util.createBuffer();
        var G = this._aDataLength.concat(lx1(this._cipherLength * 8));
        this._s = this.ghash(this._hashSubkey, this._s, G);
        var Z = [];
        this.cipher.encrypt(this._j0, Z);
        for (var I = 0; I < this._ints; ++I) this.tag.putInt32(this._s[I] ^ Z[I]);
        if (this.tag.truncate(this.tag.length() % (this._tagLength / 8)), Q.decrypt && this.tag.bytes() !== this._tag) B = !1;
        return B
    };
    a6.gcm.prototype.multiply = function(A, Q) {
        var B = [0, 0, 0, 0],
            G = Q.slice(0);
        for (var Z = 0; Z < 128; ++Z) {
            var I = A[Z / 32 | 0] & 1 << 31 - Z % 32;
            if (I) B[0] ^= G[0], B[1] ^= G[1], B[2] ^= G[2], B[3] ^= G[3];
            this.pow(G, G)
        }
        return B
    };
    a6.gcm.prototype.pow = function(A, Q) {
        var B = A[3] & 1;
        for (var G = 3; G > 0; --G) Q[G] = A[G] >>> 1 | (A[G - 1] & 1) << 31;
        if (Q[0] = A[0] >>> 1, B) Q[0] ^= this._R
    };
    a6.gcm.prototype.tableMultiply = function(A) {
        var Q = [0, 0, 0, 0];
        for (var B = 0; B < 32; ++B) {
            var G = B / 8 | 0,
                Z = A[G] >>> (7 - B % 8) * 4 & 15,
                I = this._m[B][Z];
            Q[0] ^= I[0], Q[1] ^= I[1], Q[2] ^= I[2], Q[3] ^= I[3]
        }
        return Q
    };
    a6.gcm.prototype.ghash = function(A, Q, B) {
        return Q[0] ^= B[0], Q[1] ^= B[1], Q[2] ^= B[2], Q[3] ^= B[3], this.tableMultiply(Q)
    };
    a6.gcm.prototype.generateHashTable = function(A, Q) {
        var B = 8 / Q,
            G = 4 * B,
            Z = 16 * B,
            I = Array(Z);
        for (var Y = 0; Y < Z; ++Y) {
            var J = [0, 0, 0, 0],
                W = Y / G | 0,
                X = (G - 1 - Y % G) * Q;
            J[W] = 1 << Q - 1 << X, I[Y] = this.generateSubHashTable(this.multiply(J, A), Q)
        }
        return I
    };
    a6.gcm.prototype.generateSubHashTable = function(A, Q) {
        var B = 1 << Q,
            G = B >>> 1,
            Z = Array(B);
        Z[G] = A.slice(0);
        var I = G >>> 1;
        while (I > 0) this.pow(Z[2 * I], Z[I] = []), I >>= 1;
        I = 2;
        while (I < G) {
            for (var Y = 1; Y < I; ++Y) {
                var J = Z[I],
                    W = Z[Y];
                Z[I + Y] = [J[0] ^ W[0], J[1] ^ W[1], J[2] ^ W[2], J[3] ^ W[3]]
            }
            I *= 2
        }
        Z[0] = [0, 0, 0, 0];
        for (I = G + 1; I < B; ++I) {
            var X = Z[I ^ G];
            Z[I] = [A[0] ^ X[0], A[1] ^ X[1], A[2] ^ X[2], A[3] ^ X[3]]
        }
        return Z
    };

    function IiA(A, Q) {
        if (typeof A === "string") A = _V.util.createBuffer(A);
        if (_V.util.isArray(A) && A.length > 4) {
            var B = A;
            A = _V.util.createBuffer();
            for (var G = 0; G < B.length; ++G) A.putByte(B[G])
        }
        if (A.length() < Q) throw Error("Invalid IV length; got " + A.length() + " bytes and expected " + Q + " bytes.");
        if (!_V.util.isArray(A)) {
            var Z = [],
                I = Q / 4;
            for (var G = 0; G < I; ++G) Z.push(A.getInt32());
            A = Z
        }
        return A
    }

    function YiA(A) {
        A[A.length - 1] = A[A.length - 1] + 1 & 4294967295
    }

    function lx1(A) {
        return [A / 4294967296 | 0, A & 4294967295]
    }
});
var Rc = U((GT7, B4B) => {
    var PZ = n8();
    ZiA();
    ix1();
    P3();
    B4B.exports = PZ.aes = PZ.aes || {};
    PZ.aes.startEncrypting = function(A, Q, B, G) {
        var Z = JiA({
            key: A,
            output: B,
            decrypt: !1,
            mode: G
        });
        return Z.start(Q), Z
    };
    PZ.aes.createEncryptionCipher = function(A, Q) {
        return JiA({
            key: A,
            output: null,
            decrypt: !1,
            mode: Q
        })
    };
    PZ.aes.startDecrypting = function(A, Q, B, G) {
        var Z = JiA({
            key: A,
            output: B,
            decrypt: !0,
            mode: G
        });
        return Z.start(Q), Z
    };
    PZ.aes.createDecryptionCipher = function(A, Q) {
        return JiA({
            key: A,
            output: null,
            decrypt: !0,
            mode: Q
        })
    };
    PZ.aes.Algorithm = function(A, Q) {
        if (!sx1) A4B();
        var B = this;
        B.name = A, B.mode = new Q({
            blockSize: 16,
            cipher: {
                encrypt: function(G, Z) {
                    return ax1(B._w, G, Z, !1)
                },
                decrypt: function(G, Z) {
                    return ax1(B._w, G, Z, !0)
                }
            }
        }), B._init = !1
    };
    PZ.aes.Algorithm.prototype.initialize = function(A) {
        if (this._init) return;
        var Q = A.key,
            B;
        if (typeof Q === "string" && (Q.length === 16 || Q.length === 24 || Q.length === 32)) Q = PZ.util.createBuffer(Q);
        else if (PZ.util.isArray(Q) && (Q.length === 16 || Q.length === 24 || Q.length === 32)) {
            B = Q, Q = PZ.util.createBuffer();
            for (var G = 0; G < B.length; ++G) Q.putByte(B[G])
        }
        if (!PZ.util.isArray(Q)) {
            B = Q, Q = [];
            var Z = B.length();
            if (Z === 16 || Z === 24 || Z === 32) {
                Z = Z >>> 2;
                for (var G = 0; G < Z; ++G) Q.push(B.getInt32())
            }
        }
        if (!PZ.util.isArray(Q) || !(Q.length === 4 || Q.length === 6 || Q.length === 8)) throw Error("Invalid key parameter.");
        var I = this.mode.name,
            Y = ["CFB", "OFB", "CTR", "GCM"].indexOf(I) !== -1;
        this._w = Q4B(Q, A.decrypt && !Y), this._init = !0
    };
    PZ.aes._expandKey = function(A, Q) {
        if (!sx1) A4B();
        return Q4B(A, Q)
    };
    PZ.aes._updateBlock = ax1;
    P3A("AES-ECB", PZ.cipher.modes.ecb);
    P3A("AES-CBC", PZ.cipher.modes.cbc);
    P3A("AES-CFB", PZ.cipher.modes.cfb);
    P3A("AES-OFB", PZ.cipher.modes.ofb);
    P3A("AES-CTR", PZ.cipher.modes.ctr);
    P3A("AES-GCM", PZ.cipher.modes.gcm);

    function P3A(A, Q) {
        var B = function() {
            return new PZ.aes.Algorithm(A, Q)
        };
        PZ.cipher.registerAlgorithm(A, B)
    }
    var sx1 = !1,
        T3A = 4,
        eC, nx1, e9B, lo, BT;

    function A4B() {
        sx1 = !0, e9B = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        var A = Array(256);
        for (var Q = 0; Q < 128; ++Q) A[Q] = Q << 1, A[Q + 128] = Q + 128 << 1 ^ 283;
        eC = Array(256), nx1 = Array(256), lo = [, , , , ], BT = [, , , , ];
        for (var Q = 0; Q < 4; ++Q) lo[Q] = Array(256), BT[Q] = Array(256);
        var B = 0,
            G = 0,
            Z, I, Y, J, W, X, F;
        for (var Q = 0; Q < 256; ++Q) {
            J = G ^ G << 1 ^ G << 2 ^ G << 3 ^ G << 4, J = J >> 8 ^ J & 255 ^ 99, eC[B] = J, nx1[J] = B, W = A[J], Z = A[B], I = A[Z], Y = A[I], X = W << 24 ^ J << 16 ^ J << 8 ^ (J ^ W), F = (Z ^ I ^ Y) << 24 ^ (B ^ Y) << 16 ^ (B ^ I ^ Y) << 8 ^ (B ^ Z ^ Y);
            for (var V = 0; V < 4; ++V) lo[V][B] = X, BT[V][J] = F, X = X << 24 | X >>> 8, F = F << 24 | F >>> 8;
            if (B === 0) B = G = 1;
            else B = Z ^ A[A[A[Z ^ Y]]], G ^= A[A[G]]
        }
    }

    function Q4B(A, Q) {
        var B = A.slice(0),
            G, Z = 1,
            I = B.length,
            Y = I + 6 + 1,
            J = T3A * Y;
        for (var W = I; W < J; ++W) {
            if (G = B[W - 1], W % I === 0) G = eC[G >>> 16 & 255] << 24 ^ eC[G >>> 8 & 255] << 16 ^ eC[G & 255] << 8 ^ eC[G >>> 24] ^ e9B[Z] << 24, Z++;
            else if (I > 6 && W % I === 4) G = eC[G >>> 24] << 24 ^ eC[G >>> 16 & 255] << 16 ^ eC[G >>> 8 & 255] << 8 ^ eC[G & 255];
            B[W] = B[W - I] ^ G
        }
        if (Q) {
            var X, F = BT[0],
                V = BT[1],
                K = BT[2],
                D = BT[3],
                H = B.slice(0);
            J = B.length;
            for (var W = 0, C = J - T3A; W < J; W += T3A, C -= T3A)
                if (W === 0 || W === J - T3A) H[W] = B[C], H[W + 1] = B[C + 3], H[W + 2] = B[C + 2], H[W + 3] = B[C + 1];
                else
                    for (var E = 0; E < T3A; ++E) X = B[C + E], H[W + (3 & -E)] = F[eC[X >>> 24]] ^ V[eC[X >>> 16 & 255]] ^ K[eC[X >>> 8 & 255]] ^ D[eC[X & 255]];
            B = H
        }
        return B
    }

    function ax1(A, Q, B, G) {
        var Z = A.length / 4 - 1,
            I, Y, J, W, X;
        if (G) I = BT[0], Y = BT[1], J = BT[2], W = BT[3], X = nx1;
        else I = lo[0], Y = lo[1], J = lo[2], W = lo[3], X = eC;
        var F, V, K, D, H, C, E;
        F = Q[0] ^ A[0], V = Q[G ? 3 : 1] ^ A[1], K = Q[2] ^ A[2], D = Q[G ? 1 : 3] ^ A[3];
        var z = 3;
        for (var w = 1; w < Z; ++w) H = I[F >>> 24] ^ Y[V >>> 16 & 255] ^ J[K >>> 8 & 255] ^ W[D & 255] ^ A[++z], C = I[V >>> 24] ^ Y[K >>> 16 & 255] ^ J[D >>> 8 & 255] ^ W[F & 255] ^ A[++z], E = I[K >>> 24] ^ Y[D >>> 16 & 255] ^ J[F >>> 8 & 255] ^ W[V & 255] ^ A[++z], D = I[D >>> 24] ^ Y[F >>> 16 & 255] ^ J[V >>> 8 & 255] ^ W[K & 255] ^ A[++z], F = H, V = C, K = E;
        B[0] = X[F >>> 24] << 24 ^ X[V >>> 16 & 255] << 16 ^ X[K >>> 8 & 255] << 8 ^ X[D & 255] ^ A[++z], B[G ? 3 : 1] = X[V >>> 24] << 24 ^ X[K >>> 16 & 255] << 16 ^ X[D >>> 8 & 255] << 8 ^ X[F & 255] ^ A[++z], B[2] = X[K >>> 24] << 24 ^ X[D >>> 16 & 255] << 16 ^ X[F >>> 8 & 255] << 8 ^ X[V & 255] ^ A[++z], B[G ? 1 : 3] = X[D >>> 24] << 24 ^ X[F >>> 16 & 255] << 16 ^ X[V >>> 8 & 255] << 8 ^ X[K & 255] ^ A[++z]
    }

    function JiA(A) {
        A = A || {};
        var Q = (A.mode || "CBC").toUpperCase(),
            B = "AES-" + Q,
            G;
        if (A.decrypt) G = PZ.cipher.createDecipher(B, A.key);
        else G = PZ.cipher.createCipher(B, A.key);
        var Z = G.start;
        return G.start = function(I, Y) {
            var J = null;
            if (Y instanceof PZ.util.ByteBuffer) J = Y, Y = {};
            Y = Y || {}, Y.output = J, Y.iv = I, Z.call(G, Y)
        }, G
    }
});
var Tc = U((ZT7, G4B) => {
    var NzA = n8();
    NzA.pki = NzA.pki || {};
    var rx1 = G4B.exports = NzA.pki.oids = NzA.oids = NzA.oids || {};

    function $Q(A, Q) {
        rx1[A] = Q, rx1[Q] = A
    }

    function x7(A, Q) {
        rx1[A] = Q
    }
    $Q("1.2.840.113549.1.1.1", "rsaEncryption");
    $Q("1.2.840.113549.1.1.4", "md5WithRSAEncryption");
    $Q("1.2.840.113549.1.1.5", "sha1WithRSAEncryption");
    $Q("1.2.840.113549.1.1.7", "RSAES-OAEP");
    $Q("1.2.840.113549.1.1.8", "mgf1");
    $Q("1.2.840.113549.1.1.9", "pSpecified");
    $Q("1.2.840.113549.1.1.10", "RSASSA-PSS");
    $Q("1.2.840.113549.1.1.11", "sha256WithRSAEncryption");
    $Q("1.2.840.113549.1.1.12", "sha384WithRSAEncryption");
    $Q("1.2.840.113549.1.1.13", "sha512WithRSAEncryption");
    $Q("1.3.101.112", "EdDSA25519");
    $Q("1.2.840.10040.4.3", "dsa-with-sha1");
    $Q("1.3.14.3.2.7", "desCBC");
    $Q("1.3.14.3.2.26", "sha1");
    $Q("1.3.14.3.2.29", "sha1WithRSASignature");
    $Q("2.16.840.1.101.3.4.2.1", "sha256");
    $Q("2.16.840.1.101.3.4.2.2", "sha384");
    $Q("2.16.840.1.101.3.4.2.3", "sha512");
    $Q("2.16.840.1.101.3.4.2.4", "sha224");
    $Q("2.16.840.1.101.3.4.2.5", "sha512-224");
    $Q("2.16.840.1.101.3.4.2.6", "sha512-256");
    $Q("1.2.840.113549.2.2", "md2");
    $Q("1.2.840.113549.2.5", "md5");
    $Q("1.2.840.113549.1.7.1", "data");
    $Q("1.2.840.113549.1.7.2", "signedData");
    $Q("1.2.840.113549.1.7.3", "envelopedData");
    $Q("1.2.840.113549.1.7.4", "signedAndEnvelopedData");
    $Q("1.2.840.113549.1.7.5", "digestedData");
    $Q("1.2.840.113549.1.7.6", "encryptedData");
    $Q("1.2.840.113549.1.9.1", "emailAddress");
    $Q("1.2.840.113549.1.9.2", "unstructuredName");
    $Q("1.2.840.113549.1.9.3", "contentType");
    $Q("1.2.840.113549.1.9.4", "messageDigest");
    $Q("1.2.840.113549.1.9.5", "signingTime");
    $Q("1.2.840.113549.1.9.6", "counterSignature");
    $Q("1.2.840.113549.1.9.7", "challengePassword");
    $Q("1.2.840.113549.1.9.8", "unstructuredAddress");
    $Q("1.2.840.113549.1.9.14", "extensionRequest");
    $Q("1.2.840.113549.1.9.20", "friendlyName");
    $Q("1.2.840.113549.1.9.21", "localKeyId");
    $Q("1.2.840.113549.1.9.22.1", "x509Certificate");
    $Q("1.2.840.113549.1.12.10.1.1", "keyBag");
    $Q("1.2.840.113549.1.12.10.1.2", "pkcs8ShroudedKeyBag");
    $Q("1.2.840.113549.1.12.10.1.3", "certBag");
    $Q("1.2.840.113549.1.12.10.1.4", "crlBag");
    $Q("1.2.840.113549.1.12.10.1.5", "secretBag");
    $Q("1.2.840.113549.1.12.10.1.6", "safeContentsBag");
    $Q("1.2.840.113549.1.5.13", "pkcs5PBES2");
    $Q("1.2.840.113549.1.5.12", "pkcs5PBKDF2");
    $Q("1.2.840.113549.1.12.1.1", "pbeWithSHAAnd128BitRC4");
    $Q("1.2.840.113549.1.12.1.2", "pbeWithSHAAnd40BitRC4");
    $Q("1.2.840.113549.1.12.1.3", "pbeWithSHAAnd3-KeyTripleDES-CBC");
    $Q("1.2.840.113549.1.12.1.4", "pbeWithSHAAnd2-KeyTripleDES-CBC");
    $Q("1.2.840.113549.1.12.1.5", "pbeWithSHAAnd128BitRC2-CBC");
    $Q("1.2.840.113549.1.12.1.6", "pbewithSHAAnd40BitRC2-CBC");
    $Q("1.2.840.113549.2.7", "hmacWithSHA1");
    $Q("1.2.840.113549.2.8", "hmacWithSHA224");
    $Q("1.2.840.113549.2.9", "hmacWithSHA256");
    $Q("1.2.840.113549.2.10", "hmacWithSHA384");
    $Q("1.2.840.113549.2.11", "hmacWithSHA512");
    $Q("1.2.840.113549.3.7", "des-EDE3-CBC");
    $Q("2.16.840.1.101.3.4.1.2", "aes128-CBC");
    $Q("2.16.840.1.101.3.4.1.22", "aes192-CBC");
    $Q("2.16.840.1.101.3.4.1.42", "aes256-CBC");
    $Q("2.5.4.3", "commonName");
    $Q("2.5.4.4", "surname");
    $Q("2.5.4.5", "serialNumber");
    $Q("2.5.4.6", "countryName");
    $Q("2.5.4.7", "localityName");
    $Q("2.5.4.8", "stateOrProvinceName");
    $Q("2.5.4.9", "streetAddress");
    $Q("2.5.4.10", "organizationName");
    $Q("2.5.4.11", "organizationalUnitName");
    $Q("2.5.4.12", "title");
    $Q("2.5.4.13", "description");
    $Q("2.5.4.15", "businessCategory");
    $Q("2.5.4.17", "postalCode");
    $Q("2.5.4.42", "givenName");
    $Q("1.3.6.1.4.1.311.60.2.1.2", "jurisdictionOfIncorporationStateOrProvinceName");
    $Q("1.3.6.1.4.1.311.60.2.1.3", "jurisdictionOfIncorporationCountryName");
    $Q("2.16.840.1.113730.1.1", "nsCertType");
    $Q("2.16.840.1.113730.1.13", "nsComment");
    x7("2.5.29.1", "authorityKeyIdentifier");
    x7("2.5.29.2", "keyAttributes");
    x7("2.5.29.3", "certificatePolicies");
    x7("2.5.29.4", "keyUsageRestriction");
    x7("2.5.29.5", "policyMapping");
    x7("2.5.29.6", "subtreesConstraint");
    x7("2.5.29.7", "subjectAltName");
    x7("2.5.29.8", "issuerAltName");
    x7("2.5.29.9", "subjectDirectoryAttributes");
    x7("2.5.29.10", "basicConstraints");
    x7("2.5.29.11", "nameConstraints");
    x7("2.5.29.12", "policyConstraints");
    x7("2.5.29.13", "basicConstraints");
    $Q("2.5.29.14", "subjectKeyIdentifier");
    $Q("2.5.29.15", "keyUsage");
    x7("2.5.29.16", "privateKeyUsagePeriod");
    $Q("2.5.29.17", "subjectAltName");
    $Q("2.5.29.18", "issuerAltName");
    $Q("2.5.29.19", "basicConstraints");
    x7("2.5.29.20", "cRLNumber");
    x7("2.5.29.21", "cRLReason");
    x7("2.5.29.22", "expirationDate");
    x7("2.5.29.23", "instructionCode");
    x7("2.5.29.24", "invalidityDate");
    x7("2.5.29.25", "cRLDistributionPoints");
    x7("2.5.29.26", "issuingDistributionPoint");
    x7("2.5.29.27", "deltaCRLIndicator");
    x7("2.5.29.28", "issuingDistributionPoint");
    x7("2.5.29.29", "certificateIssuer");
    x7("2.5.29.30", "nameConstraints");
    $Q("2.5.29.31", "cRLDistributionPoints");
    $Q("2.5.29.32", "certificatePolicies");
    x7("2.5.29.33", "policyMappings");
    x7("2.5.29.34", "policyConstraints");
    $Q("2.5.29.35", "authorityKeyIdentifier");
    x7("2.5.29.36", "policyConstraints");
    $Q("2.5.29.37", "extKeyUsage");
    x7("2.5.29.46", "freshestCRL");
    x7("2.5.29.54", "inhibitAnyPolicy");
    $Q("1.3.6.1.4.1.11129.2.4.2", "timestampList");
    $Q("1.3.6.1.5.5.7.1.1", "authorityInfoAccess");
    $Q("1.3.6.1.5.5.7.3.1", "serverAuth");
    $Q("1.3.6.1.5.5.7.3.2", "clientAuth");
    $Q("1.3.6.1.5.5.7.3.3", "codeSigning");
    $Q("1.3.6.1.5.5.7.3.4", "emailProtection");
    $Q("1.3.6.1.5.5.7.3.8", "timeStamping")
});
var GT = U((IT7, I4B) => {
    var JI = n8();
    P3();
    Tc();
    var TB = I4B.exports = JI.asn1 = JI.asn1 || {};
    TB.Class = {
        UNIVERSAL: 0,
        APPLICATION: 64,
        CONTEXT_SPECIFIC: 128,
        PRIVATE: 192
    };
    TB.Type = {
        NONE: 0,
        BOOLEAN: 1,
        INTEGER: 2,
        BITSTRING: 3,
        OCTETSTRING: 4,
        NULL: 5,
        OID: 6,
        ODESC: 7,
        EXTERNAL: 8,
        REAL: 9,
        ENUMERATED: 10,
        EMBEDDED: 11,
        UTF8: 12,
        ROID: 13,
        SEQUENCE: 16,
        SET: 17,
        PRINTABLESTRING: 19,
        IA5STRING: 22,
        UTCTIME: 23,
        GENERALIZEDTIME: 24,
        BMPSTRING: 30
    };
    TB.create = function(A, Q, B, G, Z) {
        if (JI.util.isArray(G)) {
            var I = [];
            for (var Y = 0; Y < G.length; ++Y)
                if (G[Y] !== void 0) I.push(G[Y]);
            G = I
        }
        var J = {
            tagClass: A,
            type: Q,
            constructed: B,
            composed: B || JI.util.isArray(G),
            value: G
        };
        if (Z && "bitStringContents" in Z) J.bitStringContents = Z.bitStringContents, J.original = TB.copy(J);
        return J
    };
    TB.copy = function(A, Q) {
        var B;
        if (JI.util.isArray(A)) {
            B = [];
            for (var G = 0; G < A.length; ++G) B.push(TB.copy(A[G], Q));
            return B
        }
        if (typeof A === "string") return A;
        if (B = {
                tagClass: A.tagClass,
                type: A.type,
                constructed: A.constructed,
                composed: A.composed,
                value: TB.copy(A.value, Q)
            }, Q && !Q.excludeBitStringContents) B.bitStringContents = A.bitStringContents;
        return B
    };
    TB.equals = function(A, Q, B) {
        if (JI.util.isArray(A)) {
            if (!JI.util.isArray(Q)) return !1;
            if (A.length !== Q.length) return !1;
            for (var G = 0; G < A.length; ++G)
                if (!TB.equals(A[G], Q[G])) return !1;