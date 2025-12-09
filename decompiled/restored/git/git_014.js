/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: git_014.js
 * 处理时间: 2025-12-09T03:37:24.723Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * s8         (  2x) = TASK_TOOL = "Task"
 * UA         (  2x) = require(moduleName) - Node.js require
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 14/34
 * Lines: 149259 - 150758 (1500 lines)
 * Original file: cli.js
 */

            return !0
        }
        if (typeof A !== typeof Q) return !1;
        if (typeof A === "string") return A === Q;
        var Z = A.tagClass === Q.tagClass && A.type === Q.type && A.constructed === Q.constructed && A.composed === Q.composed && TB.equals(A.value, Q.value);
        if (B && B.includeBitStringContents) Z = Z && A.bitStringContents === Q.bitStringContents;
        return Z
    };
    TB.getBerValueLength = function(A) {
        var Q = A.getByte();
        if (Q === 128) return;
        var B, G = Q & 128;
        if (!G) B = Q;
        else B = A.getInt((Q & 127) << 3);
        return B
    };

    function LzA(A, Q, B) {
        if (B > Q) {
            var G = Error("Too few bytes to parse DER.");
            throw G.available = A.length(), G.remaining = Q, G.requested = B, G
        }
    }
    var ea8 = function(A, Q) {
        var B = A.getByte();
        if (Q--, B === 128) return;
        var G, Z = B & 128;
        if (!Z) G = B;
        else {
            var I = B & 127;
            LzA(A, Q, I), G = A.getInt(I << 3)
        }
        if (G < 0) throw Error("Negative length: " + G);
        return G
    };
    TB.fromDer = function(A, Q) {
        if (Q === void 0) Q = {
            strict: !0,
            parseAllBytes: !0,
            decodeBitStrings: !0
        };
        if (typeof Q === "boolean") Q = {
            strict: Q,
            parseAllBytes: !0,
            decodeBitStrings: !0
        };
        if (!("strict" in Q)) Q.strict = !0;
        if (!("parseAllBytes" in Q)) Q.parseAllBytes = !0;
        if (!("decodeBitStrings" in Q)) Q.decodeBitStrings = !0;
        if (typeof A === "string") A = JI.util.createBuffer(A);
        var B = A.length(),
            G = WiA(A, A.length(), 0, Q);
        if (Q.parseAllBytes && A.length() !== 0) {
            var Z = Error("Unparsed DER bytes remain after ASN.1 parsing.");
            throw Z.byteCount = B, Z.remaining = A.length(), Z
        }
        return G
    };

    function WiA(A, Q, B, G) {
        var Z;
        LzA(A, Q, 2);
        var I = A.getByte();
        Q--;
        var Y = I & 192,
            J = I & 31;
        Z = A.length();
        var W = ea8(A, Q);
        if (Q -= Z - A.length(), W !== void 0 && W > Q) {
            if (G.strict) {
                var X = Error("Too few bytes to read ASN.1 value.");
                throw X.available = A.length(), X.remaining = Q, X.requested = W, X
            }
            W = Q
        }
        var F, V, K = (I & 32) === 32;
        if (K)
            if (F = [], W === void 0)
                for (;;) {
                    if (LzA(A, Q, 2), A.bytes(2) === String.fromCharCode(0, 0)) {
                        A.getBytes(2), Q -= 2;
                        break
                    }
                    Z = A.length(), F.push(WiA(A, Q, B + 1, G)), Q -= Z - A.length()
                } else
                    while (W > 0) Z = A.length(), F.push(WiA(A, W, B + 1, G)), Q -= Z - A.length(), W -= Z - A.length();
        if (F === void 0 && Y === TB.Class.UNIVERSAL && J === TB.Type.BITSTRING) V = A.bytes(W);
        if (F === void 0 && G.decodeBitStrings && Y === TB.Class.UNIVERSAL && J === TB.Type.BITSTRING && W > 1) {
            var D = A.read,
                H = Q,
                C = 0;
            if (J === TB.Type.BITSTRING) LzA(A, Q, 1), C = A.getByte(), Q--;
            if (C === 0) try {
                Z = A.length();
                var E = {
                        strict: !0,
                        decodeBitStrings: !0
                    },
                    z = WiA(A, Q, B + 1, E),
                    w = Z - A.length();
                if (Q -= w, J == TB.Type.BITSTRING) w++;
                var N = z.tagClass;
                if (w === W && (N === TB.Class.UNIVERSAL || N === TB.Class.CONTEXT_SPECIFIC)) F = [z]
            } catch (R) {}
            if (F === void 0) A.read = D, Q = H
        }
        if (F === void 0) {
            if (W === void 0) {
                if (G.strict) throw Error("Non-constructed ASN.1 object of indefinite length.");
                W = Q
            }
            if (J === TB.Type.BMPSTRING) {
                F = "";
                for (; W > 0; W -= 2) LzA(A, Q, 2), F += String.fromCharCode(A.getInt16()), Q -= 2
            } else F = A.getBytes(W), Q -= W
        }
        var q = V === void 0 ? null : {
            bitStringContents: V
        };
        return TB.create(Y, J, K, F, q)
    }
    TB.toDer = function(A) {
        var Q = JI.util.createBuffer(),
            B = A.tagClass | A.type,
            G = JI.util.createBuffer(),
            Z = !1;
        if ("bitStringContents" in A) {
            if (Z = !0, A.original) Z = TB.equals(A, A.original)
        }
        if (Z) G.putBytes(A.bitStringContents);
        else if (A.composed) {
            if (A.constructed) B |= 32;
            else G.putByte(0);
            for (var I = 0; I < A.value.length; ++I)
                if (A.value[I] !== void 0) G.putBuffer(TB.toDer(A.value[I]))
        } else if (A.type === TB.Type.BMPSTRING)
            for (var I = 0; I < A.value.length; ++I) G.putInt16(A.value.charCodeAt(I));
        else if (A.type === TB.Type.INTEGER && A.value.length > 1 && (A.value.charCodeAt(0) === 0 && (A.value.charCodeAt(1) & 128) === 0 || A.value.charCodeAt(0) === 255 && (A.value.charCodeAt(1) & 128) === 128)) G.putBytes(A.value.substr(1));
        else G.putBytes(A.value);
        if (Q.putByte(B), G.length() <= 127) Q.putByte(G.length() & 127);
        else {
            var Y = G.length(),
                J = "";
            do J += String.fromCharCode(Y & 255), Y = Y >>> 8; while (Y > 0);
            Q.putByte(J.length | 128);
            for (var I = J.length - 1; I >= 0; --I) Q.putByte(J.charCodeAt(I))
        }
        return Q.putBuffer(G), Q
    };
    TB.oidToDer = function(A) {
        var Q = A.split("."),
            B = JI.util.createBuffer();
        B.putByte(40 * parseInt(Q[0], 10) + parseInt(Q[1], 10));
        var G, Z, I, Y;
        for (var J = 2; J < Q.length; ++J) {
            G = !0, Z = [], I = parseInt(Q[J], 10);
            do {
                if (Y = I & 127, I = I >>> 7, !G) Y |= 128;
                Z.push(Y), G = !1
            } while (I > 0);
            for (var W = Z.length - 1; W >= 0; --W) B.putByte(Z[W])
        }
        return B
    };
    TB.derToOid = function(A) {
        var Q;
        if (typeof A === "string") A = JI.util.createBuffer(A);
        var B = A.getByte();
        Q = Math.floor(B / 40) + "." + B % 40;
        var G = 0;
        while (A.length() > 0)
            if (B = A.getByte(), G = G << 7, B & 128) G += B & 127;
            else Q += "." + (G + B), G = 0;
        return Q
    };
    TB.utcTimeToDate = function(A) {
        var Q = new Date,
            B = parseInt(A.substr(0, 2), 10);
        B = B >= 50 ? 1900 + B : 2000 + B;
        var G = parseInt(A.substr(2, 2), 10) - 1,
            Z = parseInt(A.substr(4, 2), 10),
            I = parseInt(A.substr(6, 2), 10),
            Y = parseInt(A.substr(8, 2), 10),
            J = 0;
        if (A.length > 11) {
            var W = A.charAt(10),
                X = 10;
            if (W !== "+" && W !== "-") J = parseInt(A.substr(10, 2), 10), X += 2
        }
        if (Q.setUTCFullYear(B, G, Z), Q.setUTCHours(I, Y, J, 0), X) {
            if (W = A.charAt(X), W === "+" || W === "-") {
                var F = parseInt(A.substr(X + 1, 2), 10),
                    V = parseInt(A.substr(X + 4, 2), 10),
                    K = F * 60 + V;
                if (K *= 60000, W === "+") Q.setTime(+Q - K);
                else Q.setTime(+Q + K)
            }
        }
        return Q
    };
    TB.generalizedTimeToDate = function(A) {
        var Q = new Date,
            B = parseInt(A.substr(0, 4), 10),
            G = parseInt(A.substr(4, 2), 10) - 1,
            Z = parseInt(A.substr(6, 2), 10),
            I = parseInt(A.substr(8, 2), 10),
            Y = parseInt(A.substr(10, 2), 10),
            J = parseInt(A.substr(12, 2), 10),
            W = 0,
            X = 0,
            F = !1;
        if (A.charAt(A.length - 1) === "Z") F = !0;
        var V = A.length - 5,
            K = A.charAt(V);
        if (K === "+" || K === "-") {
            var D = parseInt(A.substr(V + 1, 2), 10),
                H = parseInt(A.substr(V + 4, 2), 10);
            if (X = D * 60 + H, X *= 60000, K === "+") X *= -1;
            F = !0
        }
        if (A.charAt(14) === ".") W = parseFloat(A.substr(14), 10) * 1000;
        if (F) Q.setUTCFullYear(B, G, Z), Q.setUTCHours(I, Y, J, W), Q.setTime(+Q + X);
        else Q.setFullYear(B, G, Z), Q.setHours(I, Y, J, W);
        return Q
    };
    TB.dateToUtcTime = function(A) {
        if (typeof A === "string") return A;
        var Q = "",
            B = [];
        B.push(("" + A.getUTCFullYear()).substr(2)), B.push("" + (A.getUTCMonth() + 1)), B.push("" + A.getUTCDate()), B.push("" + A.getUTCHours()), B.push("" + A.getUTCMinutes()), B.push("" + A.getUTCSeconds());
        for (var G = 0; G < B.length; ++G) {
            if (B[G].length < 2) Q += "0";
            Q += B[G]
        }
        return Q += "Z", Q
    };
    TB.dateToGeneralizedTime = function(A) {
        if (typeof A === "string") return A;
        var Q = "",
            B = [];
        B.push("" + A.getUTCFullYear()), B.push("" + (A.getUTCMonth() + 1)), B.push("" + A.getUTCDate()), B.push("" + A.getUTCHours()), B.push("" + A.getUTCMinutes()), B.push("" + A.getUTCSeconds());
        for (var G = 0; G < B.length; ++G) {
            if (B[G].length < 2) Q += "0";
            Q += B[G]
        }
        return Q += "Z", Q
    };
    TB.integerToDer = function(A) {
        var Q = JI.util.createBuffer();
        if (A >= -128 && A < 128) return Q.putSignedInt(A, 8);
        if (A >= -32768 && A < 32768) return Q.putSignedInt(A, 16);
        if (A >= -8388608 && A < 8388608) return Q.putSignedInt(A, 24);
        if (A >= -2147483648 && A < 2147483648) return Q.putSignedInt(A, 32);
        var B = Error("Integer too large; max is 32-bits.");
        throw B.integer = A, B
    };
    TB.derToInteger = function(A) {
        if (typeof A === "string") A = JI.util.createBuffer(A);
        var Q = A.length() * 8;
        if (Q > 32) throw Error("Integer too large; max is 32-bits.");
        return A.getSignedInt(Q)
    };
    TB.validate = function(A, Q, B, G) {
        var Z = !1;
        if ((A.tagClass === Q.tagClass || typeof Q.tagClass > "u") && (A.type === Q.type || typeof Q.type > "u")) {
            if (A.constructed === Q.constructed || typeof Q.constructed > "u") {
                if (Z = !0, Q.value && JI.util.isArray(Q.value)) {
                    var I = 0;
                    for (var Y = 0; Z && Y < Q.value.length; ++Y) {
                        if (Z = Q.value[Y].optional || !1, A.value[I]) {
                            if (Z = TB.validate(A.value[I], Q.value[Y], B, G), Z) ++I;
                            else if (Q.value[Y].optional) Z = !0
                        }
                        if (!Z && G) G.push("[" + Q.name + '] Tag class "' + Q.tagClass + '", type "' + Q.type + '" expected value length "' + Q.value.length + '", got "' + A.value.length + '"')
                    }
                }
                if (Z && B) {
                    if (Q.capture) B[Q.capture] = A.value;
                    if (Q.captureAsn1) B[Q.captureAsn1] = A;
                    if (Q.captureBitStringContents && "bitStringContents" in A) B[Q.captureBitStringContents] = A.bitStringContents;
                    if (Q.captureBitStringValue && "bitStringContents" in A) {
                        var J;
                        if (A.bitStringContents.length < 2) B[Q.captureBitStringValue] = "";
                        else {
                            var W = A.bitStringContents.charCodeAt(0);
                            if (W !== 0) throw Error("captureBitStringValue only supported for zero unused bits");
                            B[Q.captureBitStringValue] = A.bitStringContents.slice(1)
                        }
                    }
                }
            } else if (G) G.push("[" + Q.name + '] Expected constructed "' + Q.constructed + '", got "' + A.constructed + '"')
        } else if (G) {
            if (A.tagClass !== Q.tagClass) G.push("[" + Q.name + '] Expected tag class "' + Q.tagClass + '", got "' + A.tagClass + '"');
            if (A.type !== Q.type) G.push("[" + Q.name + '] Expected type "' + Q.type + '", got "' + A.type + '"')
        }
        return Z
    };
    var Z4B = /[^\\u0000-\\u00ff]/;
    TB.prettyPrint = function(A, Q, B) {
        var G = "";
        if (Q = Q || 0, B = B || 2, Q > 0) G += `
`;
        var Z = "";
        for (var I = 0; I < Q * B; ++I) Z += " ";
        switch (G += Z + "Tag: ", A.tagClass) {
            case TB.Class.UNIVERSAL:
                G += "Universal:";
                break;
            case TB.Class.APPLICATION:
                G += "Application:";
                break;
            case TB.Class.CONTEXT_SPECIFIC:
                G += "Context-Specific:";
                break;
            case TB.Class.PRIVATE:
                G += "Private:";
                break
        }
        if (A.tagClass === TB.Class.UNIVERSAL) switch (G += A.type, A.type) {
            case TB.Type.NONE:
                G += " (None)";
                break;
            case TB.Type.BOOLEAN:
                G += " (Boolean)";
                break;
            case TB.Type.INTEGER:
                G += " (Integer)";
                break;
            case TB.Type.BITSTRING:
                G += " (Bit string)";
                break;
            case TB.Type.OCTETSTRING:
                G += " (Octet string)";
                break;
            case TB.Type.NULL:
                G += " (Null)";
                break;
            case TB.Type.OID:
                G += " (Object Identifier)";
                break;
            case TB.Type.ODESC:
                G += " (Object Descriptor)";
                break;
            case TB.Type.EXTERNAL:
                G += " (External or Instance of)";
                break;
            case TB.Type.REAL:
                G += " (Real)";
                break;
            case TB.Type.ENUMERATED:
                G += " (Enumerated)";
                break;
            case TB.Type.EMBEDDED:
                G += " (Embedded PDV)";
                break;
            case TB.Type.UTF8:
                G += " (UTF8)";
                break;
            case TB.Type.ROID:
                G += " (Relative Object Identifier)";
                break;
            case TB.Type.SEQUENCE:
                G += " (Sequence)";
                break;
            case TB.Type.SET:
                G += " (Set)";
                break;
            case TB.Type.PRINTABLESTRING:
                G += " (Printable String)";
                break;
            case TB.Type.IA5String:
                G += " (IA5String (ASCII))";
                break;
            case TB.Type.UTCTIME:
                G += " (UTC time)";
                break;
            case TB.Type.GENERALIZEDTIME:
                G += " (Generalized time)";
                break;
            case TB.Type.BMPSTRING:
                G += " (BMP String)";
                break
        } else G += A.type;
        if (G += `
`, G += Z + "Constructed: " + A.constructed + `
`, A.composed) {
            var Y = 0,
                J = "";
            for (var I = 0; I < A.value.length; ++I)
                if (A.value[I] !== void 0) {
                    if (Y += 1, J += TB.prettyPrint(A.value[I], Q + 1, B), I + 1 < A.value.length) J += ","
                } G += Z + "Sub values: " + Y + J
        } else {
            if (G += Z + "Value: ", A.type === TB.Type.OID) {
                var W = TB.derToOid(A.value);
                if (G += W, JI.pki && JI.pki.oids) {
                    if (W in JI.pki.oids) G += " (" + JI.pki.oids[W] + ") "
                }
            }
            if (A.type === TB.Type.INTEGER) try {
                G += TB.derToInteger(A.value)
            } catch (F) {
                G += "0x" + JI.util.bytesToHex(A.value)
            } else if (A.type === TB.Type.BITSTRING) {
                if (A.value.length > 1) G += "0x" + JI.util.bytesToHex(A.value.slice(1));
                else G += "(none)";
                if (A.value.length > 0) {
                    var X = A.value.charCodeAt(0);
                    if (X == 1) G += " (1 unused bit shown)";
                    else if (X > 1) G += " (" + X + " unused bits shown)"
                }
            } else if (A.type === TB.Type.OCTETSTRING) {
                if (!Z4B.test(A.value)) G += "(" + A.value + ") ";
                G += "0x" + JI.util.bytesToHex(A.value)
            } else if (A.type === TB.Type.UTF8) try {
                    G += JI.util.decodeUtf8(A.value)
                } catch (F) {
                    if (F.message === "URI malformed") G += "0x" + JI.util.bytesToHex(A.value) + " (malformed UTF8)";
                    else throw F
                } else if (A.type === TB.Type.PRINTABLESTRING || A.type === TB.Type.IA5String) G += A.value;
                else if (Z4B.test(A.value)) G += "0x" + JI.util.bytesToHex(A.value);
            else if (A.value.length === 0) G += "[null]";
            else G += A.value
        }
        return G
    }
});
var F_ = U((YT7, Y4B) => {
    var XiA = n8();
    Y4B.exports = XiA.md = XiA.md || {};
    XiA.md.algorithms = XiA.md.algorithms || {}
});
var j3A = U((JT7, J4B) => {
    var _b = n8();
    F_();
    P3();
    var As8 = J4B.exports = _b.hmac = _b.hmac || {};
    As8.create = function() {
        var A = null,
            Q = null,
            B = null,
            G = null,
            Z = {};
        return Z.start = function(I, Y) {
            if (I !== null)
                if (typeof I === "string")
                    if (I = I.toLowerCase(), I in _b.md.algorithms) Q = _b.md.algorithms[I].create();
                    else throw Error('Unknown hash algorithm "' + I + '"');
            else Q = I;
            if (Y === null) Y = A;
            else {
                if (typeof Y === "string") Y = _b.util.createBuffer(Y);
                else if (_b.util.isArray(Y)) {
                    var J = Y;
                    Y = _b.util.createBuffer();
                    for (var W = 0; W < J.length; ++W) Y.putByte(J[W])
                }
                var X = Y.length();
                if (X > Q.blockLength) Q.start(), Q.update(Y.bytes()), Y = Q.digest();
                B = _b.util.createBuffer(), G = _b.util.createBuffer(), X = Y.length();
                for (var W = 0; W < X; ++W) {
                    var J = Y.at(W);
                    B.putByte(54 ^ J), G.putByte(92 ^ J)
                }
                if (X < Q.blockLength) {
                    var J = Q.blockLength - X;
                    for (var W = 0; W < J; ++W) B.putByte(54), G.putByte(92)
                }
                A = Y, B = B.bytes(), G = G.bytes()
            }
            Q.start(), Q.update(B)
        }, Z.update = function(I) {
            Q.update(I)
        }, Z.getMac = function() {
            var I = Q.digest().bytes();
            return Q.start(), Q.update(G), Q.update(I), Q.digest()
        }, Z.digest = Z.getMac, Z
    }
});
var ViA = U((WT7, V4B) => {
    var V_ = n8();
    F_();
    P3();
    var X4B = V4B.exports = V_.md5 = V_.md5 || {};
    V_.md.md5 = V_.md.algorithms.md5 = X4B;
    X4B.create = function() {
        if (!F4B) Qs8();
        var A = null,
            Q = V_.util.createBuffer(),
            B = Array(16),
            G = {
                algorithm: "md5",
                blockLength: 64,
                digestLength: 16,
                messageLength: 0,
                fullMessageLength: null,
                messageLengthSize: 8
            };
        return G.start = function() {
            G.messageLength = 0, G.fullMessageLength = G.messageLength64 = [];
            var Z = G.messageLengthSize / 4;
            for (var I = 0; I < Z; ++I) G.fullMessageLength.push(0);
            return Q = V_.util.createBuffer(), A = {
                h0: 1732584193,
                h1: 4023233417,
                h2: 2562383102,
                h3: 271733878
            }, G
        }, G.start(), G.update = function(Z, I) {
            if (I === "utf8") Z = V_.util.encodeUtf8(Z);
            var Y = Z.length;
            G.messageLength += Y, Y = [Y / 4294967296 >>> 0, Y >>> 0];
            for (var J = G.fullMessageLength.length - 1; J >= 0; --J) G.fullMessageLength[J] += Y[1], Y[1] = Y[0] + (G.fullMessageLength[J] / 4294967296 >>> 0), G.fullMessageLength[J] = G.fullMessageLength[J] >>> 0, Y[0] = Y[1] / 4294967296 >>> 0;
            if (Q.putBytes(Z), W4B(A, B, Q), Q.read > 2048 || Q.length() === 0) Q.compact();
            return G
        }, G.digest = function() {
            var Z = V_.util.createBuffer();
            Z.putBytes(Q.bytes());
            var I = G.fullMessageLength[G.fullMessageLength.length - 1] + G.messageLengthSize,
                Y = I & G.blockLength - 1;
            Z.putBytes(ox1.substr(0, G.blockLength - Y));
            var J, W = 0;
            for (var X = G.fullMessageLength.length - 1; X >= 0; --X) J = G.fullMessageLength[X] * 8 + W, W = J / 4294967296 >>> 0, Z.putInt32Le(J >>> 0);
            var F = {
                h0: A.h0,
                h1: A.h1,
                h2: A.h2,
                h3: A.h3
            };
            W4B(F, B, Z);
            var V = V_.util.createBuffer();
            return V.putInt32Le(F.h0), V.putInt32Le(F.h1), V.putInt32Le(F.h2), V.putInt32Le(F.h3), V
        }, G
    };
    var ox1 = null,
        FiA = null,
        MzA = null,
        S3A = null,
        F4B = !1;

    function Qs8() {
        ox1 = String.fromCharCode(128), ox1 += V_.util.fillString(String.fromCharCode(0), 64), FiA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 6, 11, 0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 5, 8, 11, 14, 1, 4, 7, 10, 13, 0, 3, 6, 9, 12, 15, 2, 0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 4, 11, 2, 9], MzA = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21], S3A = Array(64);
        for (var A = 0; A < 64; ++A) S3A[A] = Math.floor(Math.abs(Math.sin(A + 1)) * 4294967296);
        F4B = !0
    }

    function W4B(A, Q, B) {
        var G, Z, I, Y, J, W, X, F, V = B.length();
        while (V >= 64) {
            Z = A.h0, I = A.h1, Y = A.h2, J = A.h3;
            for (F = 0; F < 16; ++F) Q[F] = B.getInt32Le(), W = J ^ I & (Y ^ J), G = Z + W + S3A[F] + Q[F], X = MzA[F], Z = J, J = Y, Y = I, I += G << X | G >>> 32 - X;
            for (; F < 32; ++F) W = Y ^ J & (I ^ Y), G = Z + W + S3A[F] + Q[FiA[F]], X = MzA[F], Z = J, J = Y, Y = I, I += G << X | G >>> 32 - X;
            for (; F < 48; ++F) W = I ^ Y ^ J, G = Z + W + S3A[F] + Q[FiA[F]], X = MzA[F], Z = J, J = Y, Y = I, I += G << X | G >>> 32 - X;
            for (; F < 64; ++F) W = Y ^ (I | ~J), G = Z + W + S3A[F] + Q[FiA[F]], X = MzA[F], Z = J, J = Y, Y = I, I += G << X | G >>> 32 - X;
            A.h0 = A.h0 + Z | 0, A.h1 = A.h1 + I | 0, A.h2 = A.h2 + Y | 0, A.h3 = A.h3 + J | 0, V -= 64
        }
    }
});
var io = U((XT7, D4B) => {
    var DiA = n8();
    P3();
    var K4B = D4B.exports = DiA.pem = DiA.pem || {};
    K4B.encode = function(A, Q) {
        Q = Q || {};
        var B = "-----BEGIN " + A.type + `-----\r
`,
            G;
        if (A.procType) G = {
            name: "Proc-Type",
            values: [String(A.procType.version), A.procType.type]
        }, B += KiA(G);
        if (A.contentDomain) G = {
            name: "Content-Domain",
            values: [A.contentDomain]
        }, B += KiA(G);
        if (A.dekInfo) {
            if (G = {
                    name: "DEK-Info",
                    values: [A.dekInfo.algorithm]
                }, A.dekInfo.parameters) G.values.push(A.dekInfo.parameters);
            B += KiA(G)
        }
        if (A.headers)
            for (var Z = 0; Z < A.headers.length; ++Z) B += KiA(A.headers[Z]);
        if (A.procType) B += `\r
`;
        return B += DiA.util.encode64(A.body, Q.maxline || 64) + `\r
`, B += "-----END " + A.type + `-----\r
`, B
    };
    K4B.decode = function(A) {
        var Q = [],
            B = /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,
            G = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,
            Z = /\r?\n/,
            I;
        while (!0) {
            if (I = B.exec(A), !I) break;
            var Y = I[1];
            if (Y === "NEW CERTIFICATE REQUEST") Y = "CERTIFICATE REQUEST";
            var J = {
                type: Y,
                procType: null,
                contentDomain: null,
                dekInfo: null,
                headers: [],
                body: DiA.util.decode64(I[3])
            };
            if (Q.push(J), !I[2]) continue;
            var W = I[2].split(Z),
                X = 0;
            while (I && X < W.length) {
                var F = W[X].replace(/\s+$/, "");
                for (var V = X + 1; V < W.length; ++V) {
                    var K = W[V];
                    if (!/\s/.test(K[0])) break;
                    F += K, X = V
                }
                if (I = F.match(G), I) {
                    var D = {
                            name: I[1],
                            values: []
                        },
                        H = I[2].split(",");
                    for (var C = 0; C < H.length; ++C) D.values.push(Bs8(H[C]));
                    if (!J.procType) {
                        if (D.name !== "Proc-Type") throw Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');
                        else if (D.values.length !== 2) throw Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');
                        J.procType = {
                            version: H[0],
                            type: H[1]
                        }
                    } else if (!J.contentDomain && D.name === "Content-Domain") J.contentDomain = H[0] || "";
                    else if (!J.dekInfo && D.name === "DEK-Info") {
                        if (D.values.length === 0) throw Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');
                        J.dekInfo = {
                            algorithm: H[0],
                            parameters: H[1] || null
                        }
                    } else J.headers.push(D)
                }++X
            }
            if (J.procType === "ENCRYPTED" && !J.dekInfo) throw Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".')
        }
        if (Q.length === 0) throw Error("Invalid PEM formatted message.");
        return Q
    };

    function KiA(A) {
        var Q = A.name + ": ",
            B = [],
            G = function(W, X) {
                return " " + X
            };
        for (var Z = 0; Z < A.values.length; ++Z) B.push(A.values[Z].replace(/^(\S+\r\n)/, G));
        Q += B.join(",") + `\r
`;
        var I = 0,
            Y = -1;
        for (var Z = 0; Z < Q.length; ++Z, ++I)
            if (I > 65 && Y !== -1) {
                var J = Q[Y];
                if (J === ",") ++Y, Q = Q.substr(0, Y) + `\r
 ` + Q.substr(Y);
                else Q = Q.substr(0, Y) + `\r
` + J + Q.substr(Y + 1);
                I = Z - Y - 1, Y = -1, ++Z
            } else if (Q[Z] === " " || Q[Z] === "\t" || Q[Z] === ",") Y = Z;
        return Q
    }

    function Bs8(A) {
        return A.replace(/^\s+/, "")
    }
});
var OzA = U((FT7, C4B) => {
    var sI = n8();
    ZiA();
    ix1();
    P3();
    C4B.exports = sI.des = sI.des || {};
    sI.des.startEncrypting = function(A, Q, B, G) {
        var Z = HiA({
            key: A,
            output: B,
            decrypt: !1,
            mode: G || (Q === null ? "ECB" : "CBC")
        });
        return Z.start(Q), Z
    };
    sI.des.createEncryptionCipher = function(A, Q) {
        return HiA({
            key: A,
            output: null,
            decrypt: !1,
            mode: Q
        })
    };
    sI.des.startDecrypting = function(A, Q, B, G) {
        var Z = HiA({
            key: A,
            output: B,
            decrypt: !0,
            mode: G || (Q === null ? "ECB" : "CBC")
        });
        return Z.start(Q), Z
    };
    sI.des.createDecryptionCipher = function(A, Q) {
        return HiA({
            key: A,
            output: null,
            decrypt: !0,
            mode: Q
        })
    };
    sI.des.Algorithm = function(A, Q) {
        var B = this;
        B.name = A, B.mode = new Q({
            blockSize: 8,
            cipher: {
                encrypt: function(G, Z) {
                    return H4B(B._keys, G, Z, !1)
                },
                decrypt: function(G, Z) {
                    return H4B(B._keys, G, Z, !0)
                }
            }
        }), B._init = !1
    };
    sI.des.Algorithm.prototype.initialize = function(A) {
        if (this._init) return;
        var Q = sI.util.createBuffer(A.key);
        if (this.name.indexOf("3DES") === 0) {
            if (Q.length() !== 24) throw Error("Invalid Triple-DES key size: " + Q.length() * 8)
        }
        this._keys = Vs8(Q), this._init = !0
    };
    K_("DES-ECB", sI.cipher.modes.ecb);
    K_("DES-CBC", sI.cipher.modes.cbc);
    K_("DES-CFB", sI.cipher.modes.cfb);
    K_("DES-OFB", sI.cipher.modes.ofb);
    K_("DES-CTR", sI.cipher.modes.ctr);
    K_("3DES-ECB", sI.cipher.modes.ecb);
    K_("3DES-CBC", sI.cipher.modes.cbc);
    K_("3DES-CFB", sI.cipher.modes.cfb);
    K_("3DES-OFB", sI.cipher.modes.ofb);
    K_("3DES-CTR", sI.cipher.modes.ctr);

    function K_(A, Q) {
        var B = function() {
            return new sI.des.Algorithm(A, Q)
        };
        sI.cipher.registerAlgorithm(A, B)
    }
    var Gs8 = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756],
        Zs8 = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344],
        Is8 = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584],
        Ys8 = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928],
        Js8 = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080],
        Ws8 = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312],
        Xs8 = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154],
        Fs8 = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696];

    function Vs8(A) {
        var Q = [0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964],
            B = [0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697],
            G = [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272],
            Z = [0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144],
            I = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256],
            Y = [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488],
            J = [0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746],
            W = [0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568],
            X = [0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578],
            F = [0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488],
            V = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800],
            K = [0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744],
            D = [0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128],
            H = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261],
            C = A.length() > 8 ? 3 : 1,
            E = [],
            z = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
            w = 0,
            N;
        for (var q = 0; q < C; q++) {
            var R = A.getInt32(),
                P = A.getInt32();
            N = (R >>> 4 ^ P) & 252645135, P ^= N, R ^= N << 4, N = (P >>> -16 ^ R) & 65535, R ^= N, P ^= N << -16, N = (R >>> 2 ^ P) & 858993459, P ^= N, R ^= N << 2, N = (P >>> -16 ^ R) & 65535, R ^= N, P ^= N << -16, N = (R >>> 1 ^ P) & 1431655765, P ^= N, R ^= N << 1, N = (P >>> 8 ^ R) & 16711935, R ^= N, P ^= N << 8, N = (R >>> 1 ^ P) & 1431655765, P ^= N, R ^= N << 1, N = R << 8 | P >>> 20 & 240, R = P << 24 | P << 8 & 16711680 | P >>> 8 & 65280 | P >>> 24 & 240, P = N;
            for (var y = 0; y < z.length; ++y) {
                if (z[y]) R = R << 2 | R >>> 26, P = P << 2 | P >>> 26;
                else R = R << 1 | R >>> 27, P = P << 1 | P >>> 27;
                R &= -15, P &= -15;
                var v = Q[R >>> 28] | B[R >>> 24 & 15] | G[R >>> 20 & 15] | Z[R >>> 16 & 15] | I[R >>> 12 & 15] | Y[R >>> 8 & 15] | J[R >>> 4 & 15],
                    x = W[P >>> 28] | X[P >>> 24 & 15] | F[P >>> 20 & 15] | V[P >>> 16 & 15] | K[P >>> 12 & 15] | D[P >>> 8 & 15] | H[P >>> 4 & 15];
                N = (x >>> 16 ^ v) & 65535, E[w++] = v ^ N, E[w++] = x ^ N << 16
            }
        }
        return E
    }

    function H4B(A, Q, B, G) {
        var Z = A.length === 32 ? 3 : 9,
            I;
        if (Z === 3) I = G ? [30, -2, -2] : [0, 32, 2];
        else I = G ? [94, 62, -2, 32, 64, 2, 30, -2, -2] : [0, 32, 2, 62, 30, -2, 64, 96, 2];
        var Y, J = Q[0],
            W = Q[1];
        Y = (J >>> 4 ^ W) & 252645135, W ^= Y, J ^= Y << 4, Y = (J >>> 16 ^ W) & 65535, W ^= Y, J ^= Y << 16, Y = (W >>> 2 ^ J) & 858993459, J ^= Y, W ^= Y << 2, Y = (W >>> 8 ^ J) & 16711935, J ^= Y, W ^= Y << 8, Y = (J >>> 1 ^ W) & 1431655765, W ^= Y, J ^= Y << 1, J = J << 1 | J >>> 31, W = W << 1 | W >>> 31;
        for (var X = 0; X < Z; X += 3) {
            var F = I[X + 1],
                V = I[X + 2];
            for (var K = I[X]; K != F; K += V) {
                var D = W ^ A[K],
                    H = (W >>> 4 | W << 28) ^ A[K + 1];
                Y = J, J = W, W = Y ^ (Zs8[D >>> 24 & 63] | Ys8[D >>> 16 & 63] | Ws8[D >>> 8 & 63] | Fs8[D & 63] | Gs8[H >>> 24 & 63] | Is8[H >>> 16 & 63] | Js8[H >>> 8 & 63] | Xs8[H & 63])
            }
            Y = J, J = W, W = Y
        }
        J = J >>> 1 | J << 31, W = W >>> 1 | W << 31, Y = (J >>> 1 ^ W) & 1431655765, W ^= Y, J ^= Y << 1, Y = (W >>> 8 ^ J) & 16711935, J ^= Y, W ^= Y << 8, Y = (W >>> 2 ^ J) & 858993459, J ^= Y, W ^= Y << 2, Y = (J >>> 16 ^ W) & 65535, W ^= Y, J ^= Y << 16, Y = (J >>> 4 ^ W) & 252645135, W ^= Y, J ^= Y << 4, B[0] = J, B[1] = W
    }

    function HiA(A) {
        A = A || {};
        var Q = (A.mode || "CBC").toUpperCase(),
            B = "DES-" + Q,
            G;
        if (A.decrypt) G = sI.cipher.createDecipher(B, A.key);
        else G = sI.cipher.createCipher(B, A.key);
        var Z = G.start;
        return G.start = function(I, Y) {
            var J = null;
            if (Y instanceof sI.util.ByteBuffer) J = Y, Y = {};
            Y = Y || {}, Y.output = J, Y.iv = I, Z.call(G, Y)
        }, G
    }
});
var CiA = U((VT7, E4B) => {
    var AE = n8();
    j3A();
    F_();
    P3();
    var Ks8 = AE.pkcs5 = AE.pkcs5 || {},
        kb;
    if (AE.util.isNodejs && !AE.options.usePureJavaScript) kb = UA("crypto");
    E4B.exports = AE.pbkdf2 = Ks8.pbkdf2 = function(A, Q, B, G, Z, I) {
        if (typeof Z === "function") I = Z, Z = null;
        if (AE.util.isNodejs && !AE.options.usePureJavaScript && kb.pbkdf2 && (Z === null || typeof Z !== "object") && (kb.pbkdf2Sync.length > 4 || (!Z || Z === "sha1"))) {
            if (typeof Z !== "string") Z = "sha1";
            if (A = Buffer.from(A, "binary"), Q = Buffer.from(Q, "binary"), !I) {
                if (kb.pbkdf2Sync.length === 4) return kb.pbkdf2Sync(A, Q, B, G).toString("binary");
                return kb.pbkdf2Sync(A, Q, B, G, Z).toString("binary")
            }
            if (kb.pbkdf2Sync.length === 4) return kb.pbkdf2(A, Q, B, G, function(N, q) {
                if (N) return I(N);
                I(null, q.toString("binary"))
            });
            return kb.pbkdf2(A, Q, B, G, Z, function(N, q) {
                if (N) return I(N);
                I(null, q.toString("binary"))
            })
        }
        if (typeof Z > "u" || Z === null) Z = "sha1";
        if (typeof Z === "string") {
            if (!(Z in AE.md.algorithms)) throw Error("Unknown hash algorithm: " + Z);
            Z = AE.md[Z].create()
        }
        var Y = Z.digestLength;
        if (G > 4294967295 * Y) {
            var J = Error("Derived key is too long.");
            if (I) return I(J);
            throw J
        }
        var W = Math.ceil(G / Y),
            X = G - (W - 1) * Y,
            F = AE.hmac.create();
        F.start(Z, A);
        var V = "",
            K, D, H;
        if (!I) {
            for (var C = 1; C <= W; ++C) {
                F.start(null, null), F.update(Q), F.update(AE.util.int32ToBytes(C)), K = H = F.digest().getBytes();
                for (var E = 2; E <= B; ++E) F.start(null, null), F.update(H), D = F.digest().getBytes(), K = AE.util.xorBytes(K, D, Y), H = D;
                V += C < W ? K : K.substr(0, X)
            }
            return V
        }
        var C = 1,
            E;

        function z() {
            if (C > W) return I(null, V);
            F.start(null, null), F.update(Q), F.update(AE.util.int32ToBytes(C)), K = H = F.digest().getBytes(), E = 2, w()
        }

        function w() {
            if (E <= B) return F.start(null, null), F.update(H), D = F.digest().getBytes(), K = AE.util.xorBytes(K, D, Y), H = D, ++E, AE.util.setImmediate(w);
            V += C < W ? K : K.substr(0, X), ++C, z()
        }
        z()
    }
});
var ex1 = U((KT7, q4B) => {
    var D_ = n8();
    F_();
    P3();
    var U4B = q4B.exports = D_.sha256 = D_.sha256 || {};
    D_.md.sha256 = D_.md.algorithms.sha256 = U4B;
    U4B.create = function() {
        if (!$4B) Ds8();
        var A = null,
            Q = D_.util.createBuffer(),
            B = Array(64),
            G = {
                algorithm: "sha256",
                blockLength: 64,
                digestLength: 32,
                messageLength: 0,
                fullMessageLength: null,
                messageLengthSize: 8
            };
        return G.start = function() {
            G.messageLength = 0, G.fullMessageLength = G.messageLength64 = [];
            var Z = G.messageLengthSize / 4;
            for (var I = 0; I < Z; ++I) G.fullMessageLength.push(0);
            return Q = D_.util.createBuffer(), A = {
                h0: 1779033703,
                h1: 3144134277,
                h2: 1013904242,
                h3: 2773480762,
                h4: 1359893119,
                h5: 2600822924,
                h6: 528734635,
                h7: 1541459225
            }, G
        }, G.start(), G.update = function(Z, I) {
            if (I === "utf8") Z = D_.util.encodeUtf8(Z);
            var Y = Z.length;
            G.messageLength += Y, Y = [Y / 4294967296 >>> 0, Y >>> 0];
            for (var J = G.fullMessageLength.length - 1; J >= 0; --J) G.fullMessageLength[J] += Y[1], Y[1] = Y[0] + (G.fullMessageLength[J] / 4294967296 >>> 0), G.fullMessageLength[J] = G.fullMessageLength[J] >>> 0, Y[0] = Y[1] / 4294967296 >>> 0;
            if (Q.putBytes(Z), z4B(A, B, Q), Q.read > 2048 || Q.length() === 0) Q.compact();
            return G
        }, G.digest = function() {
            var Z = D_.util.createBuffer();
            Z.putBytes(Q.bytes());
            var I = G.fullMessageLength[G.fullMessageLength.length - 1] + G.messageLengthSize,
                Y = I & G.blockLength - 1;
            Z.putBytes(tx1.substr(0, G.blockLength - Y));
            var J, W, X = G.fullMessageLength[0] * 8;
            for (var F = 0; F < G.fullMessageLength.length - 1; ++F) J = G.fullMessageLength[F + 1] * 8, W = J / 4294967296 >>> 0, X += W, Z.putInt32(X >>> 0), X = J >>> 0;
            Z.putInt32(X);
            var V = {
                h0: A.h0,
                h1: A.h1,
                h2: A.h2,
                h3: A.h3,
                h4: A.h4,
                h5: A.h5,
                h6: A.h6,
                h7: A.h7
            };
            z4B(V, B, Z);
            var K = D_.util.createBuffer();
            return K.putInt32(V.h0), K.putInt32(V.h1), K.putInt32(V.h2), K.putInt32(V.h3), K.putInt32(V.h4), K.putInt32(V.h5), K.putInt32(V.h6), K.putInt32(V.h7), K
        }, G
    };
    var tx1 = null,
        $4B = !1,
        w4B = null;

    function Ds8() {
        tx1 = String.fromCharCode(128), tx1 += D_.util.fillString(String.fromCharCode(0), 64), w4B = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], $4B = !0
    }

    function z4B(A, Q, B) {
        var G, Z, I, Y, J, W, X, F, V, K, D, H, C, E, z, w = B.length();
        while (w >= 64) {
            for (X = 0; X < 16; ++X) Q[X] = B.getInt32();
            for (; X < 64; ++X) G = Q[X - 2], G = (G >>> 17 | G << 15) ^ (G >>> 19 | G << 13) ^ G >>> 10, Z = Q[X - 15], Z = (Z >>> 7 | Z << 25) ^ (Z >>> 18 | Z << 14) ^ Z >>> 3, Q[X] = G + Q[X - 7] + Z + Q[X - 16] | 0;
            F = A.h0, V = A.h1, K = A.h2, D = A.h3, H = A.h4, C = A.h5, E = A.h6, z = A.h7;
            for (X = 0; X < 64; ++X) Y = (H >>> 6 | H << 26) ^ (H >>> 11 | H << 21) ^ (H >>> 25 | H << 7), J = E ^ H & (C ^ E), I = (F >>> 2 | F << 30) ^ (F >>> 13 | F << 19) ^ (F >>> 22 | F << 10), W = F & V | K & (F ^ V), G = z + Y + J + w4B[X] + Q[X], Z = I + W, z = E, E = C, C = H, H = D + G >>> 0, D = K, K = V, V = F, F = G + Z >>> 0;
            A.h0 = A.h0 + F | 0, A.h1 = A.h1 + V | 0, A.h2 = A.h2 + K | 0, A.h3 = A.h3 + D | 0, A.h4 = A.h4 + H | 0, A.h5 = A.h5 + C | 0, A.h6 = A.h6 + E | 0, A.h7 = A.h7 + z | 0, w -= 64
        }
    }
});
var Av1 = U((DT7, N4B) => {
    var H_ = n8();
    P3();
    var EiA = null;
    if (H_.util.isNodejs && !H_.options.usePureJavaScript && !process.versions["node-webkit"]) EiA = UA("crypto");
    var Hs8 = N4B.exports = H_.prng = H_.prng || {};
    Hs8.create = function(A) {
        var Q = {
                plugin: A,
                key: null,
                seed: null,
                time: null,
                reseeds: 0,
                generated: 0,
                keyBytes: ""
            },
            B = A.md,
            G = Array(32);
        for (var Z = 0; Z < 32; ++Z) G[Z] = B.create();
        Q.pools = G, Q.pool = 0, Q.generate = function(X, F) {
            if (!F) return Q.generateSync(X);
            var V = Q.plugin.cipher,
                K = Q.plugin.increment,
                D = Q.plugin.formatKey,
                H = Q.plugin.formatSeed,
                C = H_.util.createBuffer();
            Q.key = null, E();

            function E(z) {
                if (z) return F(z);
                if (C.length() >= X) return F(null, C.getBytes(X));
                if (Q.generated > 1048575) Q.key = null;
                if (Q.key === null) return H_.util.nextTick(function() {
                    I(E)
                });
                var w = V(Q.key, Q.seed);
                Q.generated += w.length, C.putBytes(w), Q.key = D(V(Q.key, K(Q.seed))), Q.seed = H(V(Q.key, Q.seed)), H_.util.setImmediate(E)
            }
        }, Q.generateSync = function(X) {
            var F = Q.plugin.cipher,
                V = Q.plugin.increment,
                K = Q.plugin.formatKey,
                D = Q.plugin.formatSeed;
            Q.key = null;
            var H = H_.util.createBuffer();
            while (H.length() < X) {
                if (Q.generated > 1048575) Q.key = null;
                if (Q.key === null) Y();
                var C = F(Q.key, Q.seed);
                Q.generated += C.length, H.putBytes(C), Q.key = K(F(Q.key, V(Q.seed))), Q.seed = D(F(Q.key, Q.seed))
            }
            return H.getBytes(X)
        };

        function I(X) {
            if (Q.pools[0].messageLength >= 32) return J(), X();
            var F = 32 - Q.pools[0].messageLength << 5;
            Q.seedFile(F, function(V, K) {
                if (V) return X(V);
                Q.collect(K), J(), X()
            })
        }

        function Y() {
            if (Q.pools[0].messageLength >= 32) return J();
            var X = 32 - Q.pools[0].messageLength << 5;
            Q.collect(Q.seedFileSync(X)), J()
        }

        function J() {
            Q.reseeds = Q.reseeds === 4294967295 ? 0 : Q.reseeds + 1;
            var X = Q.plugin.md.create();
            X.update(Q.keyBytes);
            var F = 1;
            for (var V = 0; V < 32; ++V) {
                if (Q.reseeds % F === 0) X.update(Q.pools[V].digest().getBytes()), Q.pools[V].start();
                F = F << 1
            }
            Q.keyBytes = X.digest().getBytes(), X.start(), X.update(Q.keyBytes);
            var K = X.digest().getBytes();
            Q.key = Q.plugin.formatKey(Q.keyBytes), Q.seed = Q.plugin.formatSeed(K), Q.generated = 0
        }

        function W(X) {
            var F = null,
                V = H_.util.globalScope,
                K = V.crypto || V.msCrypto;
            if (K && K.getRandomValues) F = function(R) {
                return K.getRandomValues(R)
            };
            var D = H_.util.createBuffer();
            if (F)
                while (D.length() < X) {
                    var H = Math.max(1, Math.min(X - D.length(), 65536) / 4),
                        C = new Uint32Array(Math.floor(H));
                    try {
                        F(C);
                        for (var E = 0; E < C.length; ++E) D.putInt32(C[E])
                    } catch (R) {
                        if (!(typeof QuotaExceededError < "u" && R instanceof QuotaExceededError)) throw R
                    }
                }
            if (D.length() < X) {
                var z, w, N, q = Math.floor(Math.random() * 65536);
                while (D.length() < X) {
                    w = 16807 * (q & 65535), z = 16807 * (q >> 16), w += (z & 32767) << 16, w += z >> 15, w = (w & 2147483647) + (w >> 31), q = w & 4294967295;
                    for (var E = 0; E < 3; ++E) N = q >>> (E << 3), N ^= Math.floor(Math.random() * 256), D.putByte(N & 255)
                }
            }
            return D.getBytes(X)
        }
        if (EiA) Q.seedFile = function(X, F) {
            EiA.randomBytes(X, function(V, K) {
                if (V) return F(V);
                F(null, K.toString())
            })
        }, Q.seedFileSync = function(X) {
            return EiA.randomBytes(X).toString()
        };
        else Q.seedFile = function(X, F) {
            try {
                F(null, W(X))
            } catch (V) {
                F(V)
            }
        }, Q.seedFileSync = W;
        return Q.collect = function(X) {
            var F = X.length;
            for (var V = 0; V < F; ++V) Q.pools[Q.pool].update(X.substr(V, 1)), Q.pool = Q.pool === 31 ? 0 : Q.pool + 1
        }, Q.collectInt = function(X, F) {
            var V = "";
            for (var K = 0; K < F; K += 8) V += String.fromCharCode(X >> K & 255);
            Q.collect(V)
        }, Q.registerWorker = function(X) {
            if (X === self) Q.seedFile = function(V, K) {
                function D(H) {
                    var C = H.data;
                    if (C.forge && C.forge.prng) self.removeEventListener("message", D), K(C.forge.prng.err, C.forge.prng.bytes)
                }
                self.addEventListener("message", D), self.postMessage({
                    forge: {
                        prng: {
                            needed: V
                        }
                    }
                })
            };
            else {
                var F = function(V) {
                    var K = V.data;
                    if (K.forge && K.forge.prng) Q.seedFile(K.forge.prng.needed, function(D, H) {
                        X.postMessage({
                            forge: {
                                prng: {
                                    err: D,
                                    bytes: H
                                }
                            }
                        })
                    })
                };
                X.addEventListener("message", F)
            }
        }, Q
    }
});
var aL = U((HT7, Qv1) => {
    var kV = n8();
    Rc();
    ex1();
    Av1();
    P3();
    (function() {
        if (kV.random && kV.random.getBytes) {
            Qv1.exports = kV.random;
            return
        }(function(A) {
            var Q = {},
                B = [, , , , ],
                G = kV.util.createBuffer();
            Q.formatKey = function(V) {
                var K = kV.util.createBuffer(V);
                return V = [, , , , ], V[0] = K.getInt32(), V[1] = K.getInt32(), V[2] = K.getInt32(), V[3] = K.getInt32(), kV.aes._expandKey(V, !1)
            }, Q.formatSeed = function(V) {
                var K = kV.util.createBuffer(V);
                return V = [, , , , ], V[0] = K.getInt32(), V[1] = K.getInt32(), V[2] = K.getInt32(), V[3] = K.getInt32(), V
            }, Q.cipher = function(V, K) {
                return kV.aes._updateBlock(V, K, B, !1), G.putInt32(B[0]), G.putInt32(B[1]), G.putInt32(B[2]), G.putInt32(B[3]), G.getBytes()
            }, Q.increment = function(V) {
                return ++V[3], V
            }, Q.md = kV.md.sha256;

            function Z() {
                var V = kV.prng.create(Q);
                return V.getBytes = function(K, D) {
                    return V.generate(K, D)
                }, V.getBytesSync = function(K) {
                    return V.generate(K)
                }, V
            }
            var I = Z(),
                Y = null,
                J = kV.util.globalScope,
                W = J.crypto || J.msCrypto;
            if (W && W.getRandomValues) Y = function(V) {
                return W.getRandomValues(V)
            };
            if (kV.options.usePureJavaScript || !kV.util.isNodejs && !Y) {
                if (typeof window > "u" || window.document === void 0);
                if (I.collectInt(+new Date, 32), typeof navigator < "u") {
                    var X = "";
                    for (var F in navigator) try {
                        if (typeof navigator[F] == "string") X += navigator[F]
                    } catch (V) {}
                    I.collect(X), X = null
                }
                if (A) A().mousemove(function(V) {
                    I.collectInt(V.clientX, 16), I.collectInt(V.clientY, 16)
                }), A().keypress(function(V) {
                    I.collectInt(V.charCode, 8)
                })
            }
            if (!kV.random) kV.random = I;
            else
                for (var F in I) kV.random[F] = I[F];
            kV.random.createInstance = Z, Qv1.exports = kV.random
        })(typeof jQuery < "u" ? jQuery : null)
    })()
});
var Gv1 = U((CT7, O4B) => {
    var WU = n8();
    P3();
    var Bv1 = [217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160, 216, 157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136, 68, 139, 251, 162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141, 9, 129, 125, 50, 189, 143, 64, 235, 134, 183, 123, 11, 240, 149, 33, 34, 92, 107, 78, 130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86, 192, 20, 167, 140, 241, 220, 18, 117, 202, 31, 59, 190, 228, 209, 66, 61, 212, 48, 163, 60, 182, 38, 111, 191, 14, 218, 70, 105, 7, 87, 39, 242, 29, 155, 188, 148, 67, 3, 248, 17, 199, 246, 144, 239, 62, 231, 6, 195, 213, 47, 200, 102, 30, 215, 8, 232, 234, 222, 128, 82, 238, 247, 132, 170, 114, 172, 53, 77, 106, 42, 150, 26, 210, 113, 90, 21, 73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65, 110, 15, 81, 203, 204, 36, 145, 175, 80, 161, 244, 112, 57, 153, 124, 58, 133, 35, 184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152, 227, 138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207, 225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56, 52, 27, 171, 51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219, 71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173],
        L4B = [1, 2, 3, 5],
        Cs8 = function(A, Q) {
            return A << Q & 65535 | (A & 65535) >> 16 - Q
        },
        Es8 = function(A, Q) {
            return (A & 65535) >> Q | A << 16 - Q & 65535
        };
    O4B.exports = WU.rc2 = WU.rc2 || {};
    WU.rc2.expandKey = function(A, Q) {
        if (typeof A === "string") A = WU.util.createBuffer(A);
        Q = Q || 128;
        var B = A,
            G = A.length(),
            Z = Q,
            I = Math.ceil(Z / 8),
            Y = 255 >> (Z & 7),
            J;
        for (J = G; J < 128; J++) B.putByte(Bv1[B.at(J - 1) + B.at(J - G) & 255]);
        B.setAt(128 - I, Bv1[B.at(128 - I) & Y]);
        for (J = 127 - I; J >= 0; J--) B.setAt(J, Bv1[B.at(J + 1) ^ B.at(J + I)]);
        return B
    };
    var M4B = function(A, Q, B) {
        var G = !1,
            Z = null,
            I = null,
            Y = null,
            J, W, X, F, V = [];
        A = WU.rc2.expandKey(A, Q);
        for (X = 0; X < 64; X++) V.push(A.getInt16Le());
        if (B) J = function(H) {
            for (X = 0; X < 4; X++) H[X] += V[F] + (H[(X + 3) % 4] & H[(X + 2) % 4]) + (~H[(X + 3) % 4] & H[(X + 1) % 4]), H[X] = Cs8(H[X], L4B[X]), F++
        }, W = function(H) {
            for (X = 0; X < 4; X++) H[X] += V[H[(X + 3) % 4] & 63]
        };
        else J = function(H) {
            for (X = 3; X >= 0; X--) H[X] = Es8(H[X], L4B[X]), H[X] -= V[F] + (H[(X + 3) % 4] & H[(X + 2) % 4]) + (~H[(X + 3) % 4] & H[(X + 1) % 4]), F--
        }, W = function(H) {
            for (X = 3; X >= 0; X--) H[X] -= V[H[(X + 3) % 4] & 63]
        };
        var K = function(H) {
                var C = [];
                for (X = 0; X < 4; X++) {
                    var E = Z.getInt16Le();
                    if (Y !== null)
                        if (B) E ^= Y.getInt16Le();
                        else Y.putInt16Le(E);
                    C.push(E & 65535)
                }
                F = B ? 0 : 63;
                for (var z = 0; z < H.length; z++)
                    for (var w = 0; w < H[z][0]; w++) H[z][1](C);
                for (X = 0; X < 4; X++) {
                    if (Y !== null)
                        if (B) Y.putInt16Le(C[X]);
                        else C[X] ^= Y.getInt16Le();
                    I.putInt16Le(C[X])
                }
            },
            D = null;
        return D = {
            start: function(H, C) {
                if (H) {
                    if (typeof H === "string") H = WU.util.createBuffer(H)
                }
                G = !1, Z = WU.util.createBuffer(), I = C || new WU.util.createBuffer, Y = H, D.output = I
            },
            update: function(H) {
                if (!G) Z.putBuffer(H);
                while (Z.length() >= 8) K([
                    [5, J],
                    [1, W],
                    [6, J],
                    [1, W],
                    [5, J]
                ])
            },
            finish: function(H) {
                var C = !0;
                if (B)
                    if (H) C = H(8, Z, !B);
                    else {
                        var E = Z.length() === 8 ? 8 : 8 - Z.length();
                        Z.fillWithByte(E, E)
                    } if (C) G = !0, D.update();
                if (!B) {
                    if (C = Z.length() === 0, C)
                        if (H) C = H(8, I, !B);
                        else {
                            var z = I.length(),
                                w = I.at(z - 1);
                            if (w > z) C = !1;
                            else I.truncate(w)
                        }
                }
                return C
            }
        }, D
    };
    WU.rc2.startEncrypting = function(A, Q, B) {
        var G = WU.rc2.createEncryptionCipher(A, 128);
        return G.start(Q, B), G
    };
    WU.rc2.createEncryptionCipher = function(A, Q) {
        return M4B(A, Q, !0)
    };
    WU.rc2.startDecrypting = function(A, Q, B) {
        var G = WU.rc2.createDecryptionCipher(A, 128);
        return G.start(Q, B), G
    };
    WU.rc2.createDecryptionCipher = function(A, Q) {
        return M4B(A, Q, !1)
    }
});
var TzA = U((ET7, y4B) => {
    var Zv1 = n8();
    y4B.exports = Zv1.jsbn = Zv1.jsbn || {};
    var yb, zs8 = 244837814094590,
        R4B = (zs8 & 16777215) == 15715070;

    function FQ(A, Q, B) {
        if (this.data = [], A != null)
            if (typeof A == "number") this.fromNumber(A, Q, B);
            else if (Q == null && typeof A != "string") this.fromString(A, 256);
        else this.fromString(A, Q)
    }
    Zv1.jsbn.BigInteger = FQ;

    function j3() {
        return new FQ(null)
    }

    function Us8(A, Q, B, G, Z, I) {
        while (--I >= 0) {
            var Y = Q * this.data[A++] + B.data[G] + Z;
            Z = Math.floor(Y / 67108864), B.data[G++] = Y & 67108863
        }
        return Z
    }

    function $s8(A, Q, B, G, Z, I) {
        var Y = Q & 32767,
            J = Q >> 15;
        while (--I >= 0) {
            var W = this.data[A] & 32767,
                X = this.data[A++] >> 15,
                F = J * W + X * Y;
            W = Y * W + ((F & 32767) << 15) + B.data[G] + (Z & 1073741823), Z = (W >>> 30) + (F >>> 15) + J * X + (Z >>> 30), B.data[G++] = W & 1073741823
        }
        return Z
    }

    function T4B(A, Q, B, G, Z, I) {
        var Y = Q & 16383,
            J = Q >> 14;
        while (--I >= 0) {
            var W = this.data[A] & 16383,
                X = this.data[A++] >> 14,
                F = J * W + X * Y;
            W = Y * W + ((F & 16383) << 14) + B.data[G] + Z, Z = (W >> 28) + (F >> 14) + J * X, B.data[G++] = W & 268435455
        }
        return Z
    }
    if (typeof navigator > "u") FQ.prototype.am = T4B, yb = 28;
    else if (R4B && navigator.appName == "Microsoft Internet Explorer") FQ.prototype.am = $s8, yb = 30;
    else if (R4B && navigator.appName != "Netscape") FQ.prototype.am = Us8, yb = 26;
    else FQ.prototype.am = T4B, yb = 28;
    FQ.prototype.DB = yb;
    FQ.prototype.DM = (1 << yb) - 1;
    FQ.prototype.DV = 1 << yb;
    var Iv1 = 52;
    FQ.prototype.FV = Math.pow(2, Iv1);
    FQ.prototype.F1 = Iv1 - yb;
    FQ.prototype.F2 = 2 * yb - Iv1;
    var ws8 = "0123456789abcdefghijklmnopqrstuvwxyz",
        ziA = [],
        _3A, sL;
    _3A = 48;
    for (sL = 0; sL <= 9; ++sL) ziA[_3A++] = sL;
    _3A = 97;
    for (sL = 10; sL < 36; ++sL) ziA[_3A++] = sL;
    _3A = 65;
    for (sL = 10; sL < 36; ++sL) ziA[_3A++] = sL;

    function P4B(A) {
        return ws8.charAt(A)
    }

    function j4B(A, Q) {
        var B = ziA[A.charCodeAt(Q)];
        return B == null ? -1 : B
    }

    function qs8(A) {
        for (var Q = this.t - 1; Q >= 0; --Q) A.data[Q] = this.data[Q];
        A.t = this.t, A.s = this.s
    }

    function Ns8(A) {
        if (this.t = 1, this.s = A < 0 ? -1 : 0, A > 0) this.data[0] = A;
        else if (A < -1) this.data[0] = A + this.DV;
        else this.t = 0
    }

    function Pc(A) {
        var Q = j3();
        return Q.fromInt(A), Q
    }

    function Ls8(A, Q) {
        var B;
        if (Q == 16) B = 4;
        else if (Q == 8) B = 3;
        else if (Q == 256) B = 8;
        else if (Q == 2) B = 1;
        else if (Q == 32) B = 5;
        else if (Q == 4) B = 2;
        else {
            this.fromRadix(A, Q);
            return
        }
        this.t = 0, this.s = 0;
        var G = A.length,
            Z = !1,
            I = 0;
        while (--G >= 0) {
            var Y = B == 8 ? A[G] & 255 : j4B(A, G);
            if (Y < 0) {
                if (A.charAt(G) == "-") Z = !0;
                continue
            }
            if (Z = !1, I == 0) this.data[this.t++] = Y;
            else if (I + B > this.DB) this.data[this.t - 1] |= (Y & (1 << this.DB - I) - 1) << I, this.data[this.t++] = Y >> this.DB - I;
            else this.data[this.t - 1] |= Y << I;
            if (I += B, I >= this.DB) I -= this.DB
        }
        if (B == 8 && (A[0] & 128) != 0) {
            if (this.s = -1, I > 0) this.data[this.t - 1] |= (1 << this.DB - I) - 1 << I
        }
        if (this.clamp(), Z) FQ.ZERO.subTo(this, this)
    }

    function Ms8() {
        var A = this.s & this.DM;
        while (this.t > 0 && this.data[this.t - 1] == A) --this.t
    }

    function Os8(A) {
        if (this.s < 0) return "-" + this.negate().toString(A);
        var Q;
        if (A == 16) Q = 4;
        else if (A == 8) Q = 3;
        else if (A == 2) Q = 1;
        else if (A == 32) Q = 5;
        else if (A == 4) Q = 2;
        else return this.toRadix(A);
        var B = (1 << Q) - 1,
            G, Z = !1,
            I = "",
            Y = this.t,
            J = this.DB - Y * this.DB % Q;
        if (Y-- > 0) {
            if (J < this.DB && (G = this.data[Y] >> J) > 0) Z = !0, I = P4B(G);
            while (Y >= 0) {
                if (J < Q) G = (this.data[Y] & (1 << J) - 1) << Q - J, G |= this.data[--Y] >> (J += this.DB - Q);
                else if (G = this.data[Y] >> (J -= Q) & B, J <= 0) J += this.DB, --Y;
                if (G > 0) Z = !0;
                if (Z) I += P4B(G)
            }
        }
        return Z ? I : "0"
    }

    function Rs8() {
        var A = j3();
        return FQ.ZERO.subTo(this, A), A
    }

    function Ts8() {
        return this.s < 0 ? this.negate() : this
    }

    function Ps8(A) {
        var Q = this.s - A.s;