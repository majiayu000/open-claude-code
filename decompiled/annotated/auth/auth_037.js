/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: auth_037.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (9次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 37/61
 * Lines: 156720 - 158219 (1500 lines)
 * Original file: cli.js
 */

            if (typeof V > "u") V = F.length;
            return Y.expectedHeartbeatPayload = F, cA.queue(Y, cA.createRecord(Y, {
                type: cA.ContentType.heartbeat,
                data: cA.createHeartbeat(cA.HeartbeatMessageType.heartbeat_request, F, V)
            })), cA.flush(Y)
        }, Y.close = function(F) {
            if (!Y.fail && Y.sessionCache && Y.session) {
                var V = {
                    id: Y.session.id,
                    version: Y.session.version,
                    sp: Y.session.sp
                };
                V.sp.keys = null, Y.sessionCache.setSession(V.id, V)
            }
            if (Y.open) {
                if (Y.open = !1, Y.input.clear(), Y.isConnected || Y.handshaking) Y.isConnected = Y.handshaking = !1, cA.queue(Y, cA.createAlert(Y, {
                    level: cA.Alert.Level.warning,
                    description: cA.Alert.Description.close_notify
                })), cA.flush(Y);
                Y.closed(Y)
            }
            Y.reset(F)
        }, Y
    };
    $8B.exports = VQ.tls = VQ.tls || {};
    for (_zA in cA)
        if (typeof cA[_zA] !== "function") VQ.tls[_zA] = cA[_zA];
    var _zA;
    VQ.tls.prf_tls1 = PiA;
    VQ.tls.hmac_sha1 = vo8;
    VQ.tls.createSessionCache = cA.createSessionCache;
    VQ.tls.createConnection = cA.createConnection
});
var N8B = U((ST7, q8B) => {
    var yc = n8();
    Rc();
    Rv1();
    var eL = q8B.exports = yc.tls;
    eL.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA = {
        id: [0, 47],
        name: "TLS_RSA_WITH_AES_128_CBC_SHA",
        initSecurityParameters: function(A) {
            A.bulk_cipher_algorithm = eL.BulkCipherAlgorithm.aes, A.cipher_type = eL.CipherType.block, A.enc_key_length = 16, A.block_length = 16, A.fixed_iv_length = 16, A.record_iv_length = 16, A.mac_algorithm = eL.MACAlgorithm.hmac_sha1, A.mac_length = 20, A.mac_key_length = 20
        },
        initConnectionState: w8B
    };
    eL.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA = {
        id: [0, 53],
        name: "TLS_RSA_WITH_AES_256_CBC_SHA",
        initSecurityParameters: function(A) {
            A.bulk_cipher_algorithm = eL.BulkCipherAlgorithm.aes, A.cipher_type = eL.CipherType.block, A.enc_key_length = 32, A.block_length = 16, A.fixed_iv_length = 16, A.record_iv_length = 16, A.mac_algorithm = eL.MACAlgorithm.hmac_sha1, A.mac_length = 20, A.mac_key_length = 20
        },
        initConnectionState: w8B
    };

    function w8B(A, Q, B) {
        var G = Q.entity === yc.tls.ConnectionEnd.client;
        A.read.cipherState = {
            init: !1,
            cipher: yc.cipher.createDecipher("AES-CBC", G ? B.keys.server_write_key : B.keys.client_write_key),
            iv: G ? B.keys.server_write_IV : B.keys.client_write_IV
        }, A.write.cipherState = {
            init: !1,
            cipher: yc.cipher.createCipher("AES-CBC", G ? B.keys.client_write_key : B.keys.server_write_key),
            iv: G ? B.keys.client_write_IV : B.keys.server_write_IV
        }, A.read.cipherFunction = Zt8, A.write.cipherFunction = Qt8, A.read.macLength = A.write.macLength = B.mac_length, A.read.macFunction = A.write.macFunction = eL.hmac_sha1
    }

    function Qt8(A, Q) {
        var B = !1,
            G = Q.macFunction(Q.macKey, Q.sequenceNumber, A);
        A.fragment.putBytes(G), Q.updateSequenceNumber();
        var Z;
        if (A.version.minor === eL.Versions.TLS_1_0.minor) Z = Q.cipherState.init ? null : Q.cipherState.iv;
        else Z = yc.random.getBytesSync(16);
        Q.cipherState.init = !0;
        var I = Q.cipherState.cipher;
        if (I.start({
                iv: Z
            }), A.version.minor >= eL.Versions.TLS_1_1.minor) I.output.putBytes(Z);
        if (I.update(A.fragment), I.finish(Bt8)) A.fragment = I.output, A.length = A.fragment.length(), B = !0;
        return B
    }

    function Bt8(A, Q, B) {
        if (!B) {
            var G = A - Q.length() % A;
            Q.fillWithByte(G - 1, G)
        }
        return !0
    }

    function Gt8(A, Q, B) {
        var G = !0;
        if (B) {
            var Z = Q.length(),
                I = Q.last();
            for (var Y = Z - 1 - I; Y < Z - 1; ++Y) G = G && Q.at(Y) == I;
            if (G) Q.truncate(I + 1)
        }
        return G
    }

    function Zt8(A, Q) {
        var B = !1,
            G;
        if (A.version.minor === eL.Versions.TLS_1_0.minor) G = Q.cipherState.init ? null : Q.cipherState.iv;
        else G = A.fragment.getBytes(16);
        Q.cipherState.init = !0;
        var Z = Q.cipherState.cipher;
        Z.start({
            iv: G
        }), Z.update(A.fragment), B = Z.finish(Gt8);
        var I = Q.macLength,
            Y = yc.random.getBytesSync(I),
            J = Z.output.length();
        if (J >= I) A.fragment = Z.output.getBytes(J - I), Y = Z.output.getBytes(I);
        else A.fragment = Z.output.getBytes();
        A.fragment = yc.util.createBuffer(A.fragment), A.length = A.fragment.length();
        var W = Q.macFunction(Q.macKey, Q.sequenceNumber, A);
        return Q.updateSequenceNumber(), B = It8(Q.macKey, Y, W) && B, B
    }

    function It8(A, Q, B) {
        var G = yc.hmac.create();
        return G.start("SHA1", A), G.update(Q), Q = G.digest().getBytes(), G.start(null, null), G.update(B), B = G.digest().getBytes(), Q === B
    }
});
var jv1 = U((_T7, R8B) => {
    var WI = n8();
    F_();
    P3();
    var kzA = R8B.exports = WI.sha512 = WI.sha512 || {};
    WI.md.sha512 = WI.md.algorithms.sha512 = kzA;
    var M8B = WI.sha384 = WI.sha512.sha384 = WI.sha512.sha384 || {};
    M8B.create = function() {
        return kzA.create("SHA-384")
    };
    WI.md.sha384 = WI.md.algorithms.sha384 = M8B;
    WI.sha512.sha256 = WI.sha512.sha256 || {
        create: function() {
            return kzA.create("SHA-512/256")
        }
    };
    WI.md["sha512/256"] = WI.md.algorithms["sha512/256"] = WI.sha512.sha256;
    WI.sha512.sha224 = WI.sha512.sha224 || {
        create: function() {
            return kzA.create("SHA-512/224")
        }
    };
    WI.md["sha512/224"] = WI.md.algorithms["sha512/224"] = WI.sha512.sha224;
    kzA.create = function(A) {
        if (!O8B) Yt8();
        if (typeof A > "u") A = "SHA-512";
        if (!(A in to)) throw Error("Invalid SHA-512 algorithm: " + A);
        var Q = to[A],
            B = null,
            G = WI.util.createBuffer(),
            Z = Array(80);
        for (var I = 0; I < 80; ++I) Z[I] = [, , ];
        var Y = 64;
        switch (A) {
            case "SHA-384":
                Y = 48;
                break;
            case "SHA-512/256":
                Y = 32;
                break;
            case "SHA-512/224":
                Y = 28;
                break
        }
        var J = {
            algorithm: A.replace("-", "").toLowerCase(),
            blockLength: 128,
            digestLength: Y,
            messageLength: 0,
            fullMessageLength: null,
            messageLengthSize: 16
        };
        return J.start = function() {
            J.messageLength = 0, J.fullMessageLength = J.messageLength128 = [];
            var W = J.messageLengthSize / 4;
            for (var X = 0; X < W; ++X) J.fullMessageLength.push(0);
            G = WI.util.createBuffer(), B = Array(Q.length);
            for (var X = 0; X < Q.length; ++X) B[X] = Q[X].slice(0);
            return J
        }, J.start(), J.update = function(W, X) {
            if (X === "utf8") W = WI.util.encodeUtf8(W);
            var F = W.length;
            J.messageLength += F, F = [F / 4294967296 >>> 0, F >>> 0];
            for (var V = J.fullMessageLength.length - 1; V >= 0; --V) J.fullMessageLength[V] += F[1], F[1] = F[0] + (J.fullMessageLength[V] / 4294967296 >>> 0), J.fullMessageLength[V] = J.fullMessageLength[V] >>> 0, F[0] = F[1] / 4294967296 >>> 0;
            if (G.putBytes(W), L8B(B, Z, G), G.read > 2048 || G.length() === 0) G.compact();
            return J
        }, J.digest = function() {
            var W = WI.util.createBuffer();
            W.putBytes(G.bytes());
            var X = J.fullMessageLength[J.fullMessageLength.length - 1] + J.messageLengthSize,
                F = X & J.blockLength - 1;
            W.putBytes(Tv1.substr(0, J.blockLength - F));
            var V, K, D = J.fullMessageLength[0] * 8;
            for (var H = 0; H < J.fullMessageLength.length - 1; ++H) V = J.fullMessageLength[H + 1] * 8, K = V / 4294967296 >>> 0, D += K, W.putInt32(D >>> 0), D = V >>> 0;
            W.putInt32(D);
            var C = Array(B.length);
            for (var H = 0; H < B.length; ++H) C[H] = B[H].slice(0);
            L8B(C, Z, W);
            var E = WI.util.createBuffer(),
                z;
            if (A === "SHA-512") z = C.length;
            else if (A === "SHA-384") z = C.length - 2;
            else z = C.length - 4;
            for (var H = 0; H < z; ++H)
                if (E.putInt32(C[H][0]), H !== z - 1 || A !== "SHA-512/224") E.putInt32(C[H][1]);
            return E
        }, J
    };
    var Tv1 = null,
        O8B = !1,
        Pv1 = null,
        to = null;

    function Yt8() {
        Tv1 = String.fromCharCode(128), Tv1 += WI.util.fillString(String.fromCharCode(0), 128), Pv1 = [
            [1116352408, 3609767458],
            [1899447441, 602891725],
            [3049323471, 3964484399],
            [3921009573, 2173295548],
            [961987163, 4081628472],
            [1508970993, 3053834265],
            [2453635748, 2937671579],
            [2870763221, 3664609560],
            [3624381080, 2734883394],
            [310598401, 1164996542],
            [607225278, 1323610764],
            [1426881987, 3590304994],
            [1925078388, 4068182383],
            [2162078206, 991336113],
            [2614888103, 633803317],
            [3248222580, 3479774868],
            [3835390401, 2666613458],
            [4022224774, 944711139],
            [264347078, 2341262773],
            [604807628, 2007800933],
            [770255983, 1495990901],
            [1249150122, 1856431235],
            [1555081692, 3175218132],
            [1996064986, 2198950837],
            [2554220882, 3999719339],
            [2821834349, 766784016],
            [2952996808, 2566594879],
            [3210313671, 3203337956],
            [3336571891, 1034457026],
            [3584528711, 2466948901],
            [113926993, 3758326383],
            [338241895, 168717936],
            [666307205, 1188179964],
            [773529912, 1546045734],
            [1294757372, 1522805485],
            [1396182291, 2643833823],
            [1695183700, 2343527390],
            [1986661051, 1014477480],
            [2177026350, 1206759142],
            [2456956037, 344077627],
            [2730485921, 1290863460],
            [2820302411, 3158454273],
            [3259730800, 3505952657],
            [3345764771, 106217008],
            [3516065817, 3606008344],
            [3600352804, 1432725776],
            [4094571909, 1467031594],
            [275423344, 851169720],
            [430227734, 3100823752],
            [506948616, 1363258195],
            [659060556, 3750685593],
            [883997877, 3785050280],
            [958139571, 3318307427],
            [1322822218, 3812723403],
            [1537002063, 2003034995],
            [1747873779, 3602036899],
            [1955562222, 1575990012],
            [2024104815, 1125592928],
            [2227730452, 2716904306],
            [2361852424, 442776044],
            [2428436474, 593698344],
            [2756734187, 3733110249],
            [3204031479, 2999351573],
            [3329325298, 3815920427],
            [3391569614, 3928383900],
            [3515267271, 566280711],
            [3940187606, 3454069534],
            [4118630271, 4000239992],
            [116418474, 1914138554],
            [174292421, 2731055270],
            [289380356, 3203993006],
            [460393269, 320620315],
            [685471733, 587496836],
            [852142971, 1086792851],
            [1017036298, 365543100],
            [1126000580, 2618297676],
            [1288033470, 3409855158],
            [1501505948, 4234509866],
            [1607167915, 987167468],
            [1816402316, 1246189591]
        ], to = {}, to["SHA-512"] = [
            [1779033703, 4089235720],
            [3144134277, 2227873595],
            [1013904242, 4271175723],
            [2773480762, 1595750129],
            [1359893119, 2917565137],
            [2600822924, 725511199],
            [528734635, 4215389547],
            [1541459225, 327033209]
        ], to["SHA-384"] = [
            [3418070365, 3238371032],
            [1654270250, 914150663],
            [2438529370, 812702999],
            [355462360, 4144912697],
            [1731405415, 4290775857],
            [2394180231, 1750603025],
            [3675008525, 1694076839],
            [1203062813, 3204075428]
        ], to["SHA-512/256"] = [
            [573645204, 4230739756],
            [2673172387, 3360449730],
            [596883563, 1867755857],
            [2520282905, 1497426621],
            [2519219938, 2827943907],
            [3193839141, 1401305490],
            [721525244, 746961066],
            [246885852, 2177182882]
        ], to["SHA-512/224"] = [
            [2352822216, 424955298],
            [1944164710, 2312950998],
            [502970286, 855612546],
            [1738396948, 1479516111],
            [258812777, 2077511080],
            [2011393907, 79989058],
            [1067287976, 1780299464],
            [286451373, 2446758561]
        ], O8B = !0
    }

    function L8B(A, Q, B) {
        var G, Z, I, Y, J, W, X, F, V, K, D, H, C, E, z, w, N, q, R, P, y, v, x, p, u, o, l, k, d, QA, IA, HA, wA, KA, SA, sA = B.length();
        while (sA >= 128) {
            for (d = 0; d < 16; ++d) Q[d][0] = B.getInt32() >>> 0, Q[d][1] = B.getInt32() >>> 0;
            for (; d < 80; ++d) HA = Q[d - 2], QA = HA[0], IA = HA[1], G = ((QA >>> 19 | IA << 13) ^ (IA >>> 29 | QA << 3) ^ QA >>> 6) >>> 0, Z = ((QA << 13 | IA >>> 19) ^ (IA << 3 | QA >>> 29) ^ (QA << 26 | IA >>> 6)) >>> 0, KA = Q[d - 15], QA = KA[0], IA = KA[1], I = ((QA >>> 1 | IA << 31) ^ (QA >>> 8 | IA << 24) ^ QA >>> 7) >>> 0, Y = ((QA << 31 | IA >>> 1) ^ (QA << 24 | IA >>> 8) ^ (QA << 25 | IA >>> 7)) >>> 0, wA = Q[d - 7], SA = Q[d - 16], IA = Z + wA[1] + Y + SA[1], Q[d][0] = G + wA[0] + I + SA[0] + (IA / 4294967296 >>> 0) >>> 0, Q[d][1] = IA >>> 0;
            C = A[0][0], E = A[0][1], z = A[1][0], w = A[1][1], N = A[2][0], q = A[2][1], R = A[3][0], P = A[3][1], y = A[4][0], v = A[4][1], x = A[5][0], p = A[5][1], u = A[6][0], o = A[6][1], l = A[7][0], k = A[7][1];
            for (d = 0; d < 80; ++d) X = ((y >>> 14 | v << 18) ^ (y >>> 18 | v << 14) ^ (v >>> 9 | y << 23)) >>> 0, F = ((y << 18 | v >>> 14) ^ (y << 14 | v >>> 18) ^ (v << 23 | y >>> 9)) >>> 0, V = (u ^ y & (x ^ u)) >>> 0, K = (o ^ v & (p ^ o)) >>> 0, J = ((C >>> 28 | E << 4) ^ (E >>> 2 | C << 30) ^ (E >>> 7 | C << 25)) >>> 0, W = ((C << 4 | E >>> 28) ^ (E << 30 | C >>> 2) ^ (E << 25 | C >>> 7)) >>> 0, D = (C & z | N & (C ^ z)) >>> 0, H = (E & w | q & (E ^ w)) >>> 0, IA = k + F + K + Pv1[d][1] + Q[d][1], G = l + X + V + Pv1[d][0] + Q[d][0] + (IA / 4294967296 >>> 0) >>> 0, Z = IA >>> 0, IA = W + H, I = J + D + (IA / 4294967296 >>> 0) >>> 0, Y = IA >>> 0, l = u, k = o, u = x, o = p, x = y, p = v, IA = P + Z, y = R + G + (IA / 4294967296 >>> 0) >>> 0, v = IA >>> 0, R = N, P = q, N = z, q = w, z = C, w = E, IA = Z + Y, C = G + I + (IA / 4294967296 >>> 0) >>> 0, E = IA >>> 0;
            IA = A[0][1] + E, A[0][0] = A[0][0] + C + (IA / 4294967296 >>> 0) >>> 0, A[0][1] = IA >>> 0, IA = A[1][1] + w, A[1][0] = A[1][0] + z + (IA / 4294967296 >>> 0) >>> 0, A[1][1] = IA >>> 0, IA = A[2][1] + q, A[2][0] = A[2][0] + N + (IA / 4294967296 >>> 0) >>> 0, A[2][1] = IA >>> 0, IA = A[3][1] + P, A[3][0] = A[3][0] + R + (IA / 4294967296 >>> 0) >>> 0, A[3][1] = IA >>> 0, IA = A[4][1] + v, A[4][0] = A[4][0] + y + (IA / 4294967296 >>> 0) >>> 0, A[4][1] = IA >>> 0, IA = A[5][1] + p, A[5][0] = A[5][0] + x + (IA / 4294967296 >>> 0) >>> 0, A[5][1] = IA >>> 0, IA = A[6][1] + o, A[6][0] = A[6][0] + u + (IA / 4294967296 >>> 0) >>> 0, A[6][1] = IA >>> 0, IA = A[7][1] + k, A[7][0] = A[7][0] + l + (IA / 4294967296 >>> 0) >>> 0, A[7][1] = IA >>> 0, sA -= 128
        }
    }
});
var T8B = U((Wt8) => {
    var Jt8 = n8();
    GT();
    var yV = Jt8.asn1;
    Wt8.privateKeyValidator = {
        name: "PrivateKeyInfo",
        tagClass: yV.Class.UNIVERSAL,
        type: yV.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "PrivateKeyInfo.version",
            tagClass: yV.Class.UNIVERSAL,
            type: yV.Type.INTEGER,
            constructed: !1,
            capture: "privateKeyVersion"
        }, {
            name: "PrivateKeyInfo.privateKeyAlgorithm",
            tagClass: yV.Class.UNIVERSAL,
            type: yV.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "AlgorithmIdentifier.algorithm",
                tagClass: yV.Class.UNIVERSAL,
                type: yV.Type.OID,
                constructed: !1,
                capture: "privateKeyOid"
            }]
        }, {
            name: "PrivateKeyInfo",
            tagClass: yV.Class.UNIVERSAL,
            type: yV.Type.OCTETSTRING,
            constructed: !1,
            capture: "privateKey"
        }]
    };
    Wt8.publicKeyValidator = {
        name: "SubjectPublicKeyInfo",
        tagClass: yV.Class.UNIVERSAL,
        type: yV.Type.SEQUENCE,
        constructed: !0,
        captureAsn1: "subjectPublicKeyInfo",
        value: [{
            name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
            tagClass: yV.Class.UNIVERSAL,
            type: yV.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "AlgorithmIdentifier.algorithm",
                tagClass: yV.Class.UNIVERSAL,
                type: yV.Type.OID,
                constructed: !1,
                capture: "publicKeyOid"
            }]
        }, {
            tagClass: yV.Class.UNIVERSAL,
            type: yV.Type.BITSTRING,
            constructed: !1,
            composed: !0,
            captureBitStringValue: "ed25519PublicKey"
        }]
    }
});
var g8B = U((yT7, h8B) => {
    var HD = n8();
    TzA();
    aL();
    jv1();
    P3();
    var k8B = T8B(),
        Vt8 = k8B.publicKeyValidator,
        Kt8 = k8B.privateKeyValidator;
    if (typeof kv1 > "u") kv1 = HD.jsbn.BigInteger;
    var kv1, yv1 = HD.util.ByteBuffer,
        XU = typeof Buffer > "u" ? Uint8Array : Buffer;
    HD.pki = HD.pki || {};
    h8B.exports = HD.pki.ed25519 = HD.ed25519 = HD.ed25519 || {};
    var r6 = HD.ed25519;
    r6.constants = {};
    r6.constants.PUBLIC_KEY_BYTE_LENGTH = 32;
    r6.constants.PRIVATE_KEY_BYTE_LENGTH = 64;
    r6.constants.SEED_BYTE_LENGTH = 32;
    r6.constants.SIGN_BYTE_LENGTH = 64;
    r6.constants.HASH_BYTE_LENGTH = 64;
    r6.generateKeyPair = function(A) {
        A = A || {};
        var Q = A.seed;
        if (Q === void 0) Q = HD.random.getBytesSync(r6.constants.SEED_BYTE_LENGTH);
        else if (typeof Q === "string") {
            if (Q.length !== r6.constants.SEED_BYTE_LENGTH) throw TypeError('"seed" must be ' + r6.constants.SEED_BYTE_LENGTH + " bytes in length.")
        } else if (!(Q instanceof Uint8Array)) throw TypeError('"seed" must be a node.js Buffer, Uint8Array, or a binary string.');
        Q = xb({
            message: Q,
            encoding: "binary"
        });
        var B = new XU(r6.constants.PUBLIC_KEY_BYTE_LENGTH),
            G = new XU(r6.constants.PRIVATE_KEY_BYTE_LENGTH);
        for (var Z = 0; Z < 32; ++Z) G[Z] = Q[Z];
        return Et8(B, G), {
            publicKey: B,
            privateKey: G
        }
    };
    r6.privateKeyFromAsn1 = function(A) {
        var Q = {},
            B = [],
            G = HD.asn1.validate(A, Kt8, Q, B);
        if (!G) {
            var Z = Error("Invalid Key.");
            throw Z.errors = B, Z
        }
        var I = HD.asn1.derToOid(Q.privateKeyOid),
            Y = HD.oids.EdDSA25519;
        if (I !== Y) throw Error('Invalid OID "' + I + '"; OID must be "' + Y + '".');
        var J = Q.privateKey,
            W = xb({
                message: HD.asn1.fromDer(J).value,
                encoding: "binary"
            });
        return {
            privateKeyBytes: W
        }
    };
    r6.publicKeyFromAsn1 = function(A) {
        var Q = {},
            B = [],
            G = HD.asn1.validate(A, Vt8, Q, B);
        if (!G) {
            var Z = Error("Invalid Key.");
            throw Z.errors = B, Z
        }
        var I = HD.asn1.derToOid(Q.publicKeyOid),
            Y = HD.oids.EdDSA25519;
        if (I !== Y) throw Error('Invalid OID "' + I + '"; OID must be "' + Y + '".');
        var J = Q.ed25519PublicKey;
        if (J.length !== r6.constants.PUBLIC_KEY_BYTE_LENGTH) throw Error("Key length is invalid.");
        return xb({
            message: J,
            encoding: "binary"
        })
    };
    r6.publicKeyFromPrivateKey = function(A) {
        A = A || {};
        var Q = xb({
            message: A.privateKey,
            encoding: "binary"
        });
        if (Q.length !== r6.constants.PRIVATE_KEY_BYTE_LENGTH) throw TypeError('"options.privateKey" must have a byte length of ' + r6.constants.PRIVATE_KEY_BYTE_LENGTH);
        var B = new XU(r6.constants.PUBLIC_KEY_BYTE_LENGTH);
        for (var G = 0; G < B.length; ++G) B[G] = Q[32 + G];
        return B
    };
    r6.sign = function(A) {
        A = A || {};
        var Q = xb(A),
            B = xb({
                message: A.privateKey,
                encoding: "binary"
            });
        if (B.length === r6.constants.SEED_BYTE_LENGTH) {
            var G = r6.generateKeyPair({
                seed: B
            });
            B = G.privateKey
        } else if (B.length !== r6.constants.PRIVATE_KEY_BYTE_LENGTH) throw TypeError('"options.privateKey" must have a byte length of ' + r6.constants.SEED_BYTE_LENGTH + " or " + r6.constants.PRIVATE_KEY_BYTE_LENGTH);
        var Z = new XU(r6.constants.SIGN_BYTE_LENGTH + Q.length);
        zt8(Z, Q, Q.length, B);
        var I = new XU(r6.constants.SIGN_BYTE_LENGTH);
        for (var Y = 0; Y < I.length; ++Y) I[Y] = Z[Y];
        return I
    };
    r6.verify = function(A) {
        A = A || {};
        var Q = xb(A);
        if (A.signature === void 0) throw TypeError('"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.');
        var B = xb({
            message: A.signature,
            encoding: "binary"
        });
        if (B.length !== r6.constants.SIGN_BYTE_LENGTH) throw TypeError('"options.signature" must have a byte length of ' + r6.constants.SIGN_BYTE_LENGTH);
        var G = xb({
            message: A.publicKey,
            encoding: "binary"
        });
        if (G.length !== r6.constants.PUBLIC_KEY_BYTE_LENGTH) throw TypeError('"options.publicKey" must have a byte length of ' + r6.constants.PUBLIC_KEY_BYTE_LENGTH);
        var Z = new XU(r6.constants.SIGN_BYTE_LENGTH + Q.length),
            I = new XU(r6.constants.SIGN_BYTE_LENGTH + Q.length),
            Y;
        for (Y = 0; Y < r6.constants.SIGN_BYTE_LENGTH; ++Y) Z[Y] = B[Y];
        for (Y = 0; Y < Q.length; ++Y) Z[Y + r6.constants.SIGN_BYTE_LENGTH] = Q[Y];
        return Ut8(I, Z, Z.length, G) >= 0
    };

    function xb(A) {
        var Q = A.message;
        if (Q instanceof Uint8Array || Q instanceof XU) return Q;
        var B = A.encoding;
        if (Q === void 0)
            if (A.md) Q = A.md.digest().getBytes(), B = "binary";
            else throw TypeError('"options.message" or "options.md" not specified.');
        if (typeof Q === "string" && !B) throw TypeError('"options.encoding" must be "binary" or "utf8".');
        if (typeof Q === "string") {
            if (typeof Buffer < "u") return Buffer.from(Q, B);
            Q = new yv1(Q, B)
        } else if (!(Q instanceof yv1)) throw TypeError('"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.');
        var G = new XU(Q.length());
        for (var Z = 0; Z < G.length; ++Z) G[Z] = Q.at(Z);
        return G
    }
    var xv1 = W4(),
        jiA = W4([1]),
        Dt8 = W4([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
        Ht8 = W4([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
        P8B = W4([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
        j8B = W4([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
        Sv1 = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]),
        Ct8 = W4([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

    function yzA(A, Q) {
        var B = HD.md.sha512.create(),
            G = new yv1(A);
        B.update(G.getBytes(Q), "binary");
        var Z = B.digest().getBytes();
        if (typeof Buffer < "u") return Buffer.from(Z, "binary");
        var I = new XU(r6.constants.HASH_BYTE_LENGTH);
        for (var Y = 0; Y < 64; ++Y) I[Y] = Z.charCodeAt(Y);
        return I
    }

    function Et8(A, Q) {
        var B = [W4(), W4(), W4(), W4()],
            G, Z = yzA(Q, 32);
        Z[0] &= 248, Z[31] &= 127, Z[31] |= 64, hv1(B, Z), fv1(A, B);
        for (G = 0; G < 32; ++G) Q[G + 32] = A[G];
        return 0
    }

    function zt8(A, Q, B, G) {
        var Z, I, Y = new Float64Array(64),
            J = [W4(), W4(), W4(), W4()],
            W = yzA(G, 32);
        W[0] &= 248, W[31] &= 127, W[31] |= 64;
        var X = B + 64;
        for (Z = 0; Z < B; ++Z) A[64 + Z] = Q[Z];
        for (Z = 0; Z < 32; ++Z) A[32 + Z] = W[32 + Z];
        var F = yzA(A.subarray(32), B + 32);
        vv1(F), hv1(J, F), fv1(A, J);
        for (Z = 32; Z < 64; ++Z) A[Z] = G[Z];
        var V = yzA(A, B + 64);
        vv1(V);
        for (Z = 32; Z < 64; ++Z) Y[Z] = 0;
        for (Z = 0; Z < 32; ++Z) Y[Z] = F[Z];
        for (Z = 0; Z < 32; ++Z)
            for (I = 0; I < 32; I++) Y[Z + I] += V[Z] * W[I];
        return y8B(A.subarray(32), Y), X
    }

    function Ut8(A, Q, B, G) {
        var Z, I, Y = new XU(32),
            J = [W4(), W4(), W4(), W4()],
            W = [W4(), W4(), W4(), W4()];
        if (I = -1, B < 64) return -1;
        if ($t8(W, G)) return -1;
        for (Z = 0; Z < B; ++Z) A[Z] = Q[Z];
        for (Z = 0; Z < 32; ++Z) A[Z + 32] = G[Z];
        var X = yzA(A, B);
        if (vv1(X), b8B(J, W, X), hv1(W, Q.subarray(32)), bv1(J, W), fv1(Y, J), B -= 64, x8B(Q, 0, Y, 0)) {
            for (Z = 0; Z < B; ++Z) A[Z] = 0;
            return -1
        }
        for (Z = 0; Z < B; ++Z) A[Z] = Q[Z + 64];
        return I = B, I
    }

    function y8B(A, Q) {
        var B, G, Z, I;
        for (G = 63; G >= 32; --G) {
            B = 0;
            for (Z = G - 32, I = G - 12; Z < I; ++Z) Q[Z] += B - 16 * Q[G] * Sv1[Z - (G - 32)], B = Q[Z] + 128 >> 8, Q[Z] -= B * 256;
            Q[Z] += B, Q[G] = 0
        }
        B = 0;
        for (Z = 0; Z < 32; ++Z) Q[Z] += B - (Q[31] >> 4) * Sv1[Z], B = Q[Z] >> 8, Q[Z] &= 255;
        for (Z = 0; Z < 32; ++Z) Q[Z] -= B * Sv1[Z];
        for (G = 0; G < 32; ++G) Q[G + 1] += Q[G] >> 8, A[G] = Q[G] & 255
    }

    function vv1(A) {
        var Q = new Float64Array(64);
        for (var B = 0; B < 64; ++B) Q[B] = A[B], A[B] = 0;
        y8B(A, Q)
    }

    function bv1(A, Q) {
        var B = W4(),
            G = W4(),
            Z = W4(),
            I = W4(),
            Y = W4(),
            J = W4(),
            W = W4(),
            X = W4(),
            F = W4();
        g3A(B, A[1], A[0]), g3A(F, Q[1], Q[0]), AZ(B, B, F), h3A(G, A[0], A[1]), h3A(F, Q[0], Q[1]), AZ(G, G, F), AZ(Z, A[3], Q[3]), AZ(Z, Z, Ht8), AZ(I, A[2], Q[2]), h3A(I, I, I), g3A(Y, G, B), g3A(J, I, Z), h3A(W, I, Z), h3A(X, G, B), AZ(A[0], Y, J), AZ(A[1], X, W), AZ(A[2], W, J), AZ(A[3], Y, X)
    }

    function S8B(A, Q, B) {
        for (var G = 0; G < 4; ++G) f8B(A[G], Q[G], B)
    }

    function fv1(A, Q) {
        var B = W4(),
            G = W4(),
            Z = W4();
        Lt8(Z, Q[2]), AZ(B, Q[0], Z), AZ(G, Q[1], Z), SiA(A, G), A[31] ^= v8B(B) << 7
    }

    function SiA(A, Q) {
        var B, G, Z, I = W4(),
            Y = W4();
        for (B = 0; B < 16; ++B) Y[B] = Q[B];
        _v1(Y), _v1(Y), _v1(Y);
        for (G = 0; G < 2; ++G) {
            I[0] = Y[0] - 65517;
            for (B = 1; B < 15; ++B) I[B] = Y[B] - 65535 - (I[B - 1] >> 16 & 1), I[B - 1] &= 65535;
            I[15] = Y[15] - 32767 - (I[14] >> 16 & 1), Z = I[15] >> 16 & 1, I[14] &= 65535, f8B(Y, I, 1 - Z)
        }
        for (B = 0; B < 16; B++) A[2 * B] = Y[B] & 255, A[2 * B + 1] = Y[B] >> 8
    }

    function $t8(A, Q) {
        var B = W4(),
            G = W4(),
            Z = W4(),
            I = W4(),
            Y = W4(),
            J = W4(),
            W = W4();
        if (xc(A[2], jiA), wt8(A[1], Q), eo(Z, A[1]), AZ(I, Z, Dt8), g3A(Z, Z, A[2]), h3A(I, A[2], I), eo(Y, I), eo(J, Y), AZ(W, J, Y), AZ(B, W, Z), AZ(B, B, I), qt8(B, B), AZ(B, B, Z), AZ(B, B, I), AZ(B, B, I), AZ(A[0], B, I), eo(G, A[0]), AZ(G, G, I), _8B(G, Z)) AZ(A[0], A[0], Ct8);
        if (eo(G, A[0]), AZ(G, G, I), _8B(G, Z)) return -1;
        if (v8B(A[0]) === Q[31] >> 7) g3A(A[0], xv1, A[0]);
        return AZ(A[3], A[0], A[1]), 0
    }

    function wt8(A, Q) {
        var B;
        for (B = 0; B < 16; ++B) A[B] = Q[2 * B] + (Q[2 * B + 1] << 8);
        A[15] &= 32767
    }

    function qt8(A, Q) {
        var B = W4(),
            G;
        for (G = 0; G < 16; ++G) B[G] = Q[G];
        for (G = 250; G >= 0; --G)
            if (eo(B, B), G !== 1) AZ(B, B, Q);
        for (G = 0; G < 16; ++G) A[G] = B[G]
    }

    function _8B(A, Q) {
        var B = new XU(32),
            G = new XU(32);
        return SiA(B, A), SiA(G, Q), x8B(B, 0, G, 0)
    }

    function x8B(A, Q, B, G) {
        return Nt8(A, Q, B, G, 32)
    }

    function Nt8(A, Q, B, G, Z) {
        var I, Y = 0;
        for (I = 0; I < Z; ++I) Y |= A[Q + I] ^ B[G + I];
        return (1 & Y - 1 >>> 8) - 1
    }

    function v8B(A) {
        var Q = new XU(32);
        return SiA(Q, A), Q[0] & 1
    }

    function b8B(A, Q, B) {
        var G, Z;
        xc(A[0], xv1), xc(A[1], jiA), xc(A[2], jiA), xc(A[3], xv1);
        for (Z = 255; Z >= 0; --Z) G = B[Z / 8 | 0] >> (Z & 7) & 1, S8B(A, Q, G), bv1(Q, A), bv1(A, A), S8B(A, Q, G)
    }

    function hv1(A, Q) {
        var B = [W4(), W4(), W4(), W4()];
        xc(B[0], P8B), xc(B[1], j8B), xc(B[2], jiA), AZ(B[3], P8B, j8B), b8B(A, B, Q)
    }

    function xc(A, Q) {
        var B;
        for (B = 0; B < 16; B++) A[B] = Q[B] | 0
    }

    function Lt8(A, Q) {
        var B = W4(),
            G;
        for (G = 0; G < 16; ++G) B[G] = Q[G];
        for (G = 253; G >= 0; --G)
            if (eo(B, B), G !== 2 && G !== 4) AZ(B, B, Q);
        for (G = 0; G < 16; ++G) A[G] = B[G]
    }

    function _v1(A) {
        var Q, B, G = 1;
        for (Q = 0; Q < 16; ++Q) B = A[Q] + G + 65535, G = Math.floor(B / 65536), A[Q] = B - G * 65536;
        A[0] += G - 1 + 37 * (G - 1)
    }

    function f8B(A, Q, B) {
        var G, Z = ~(B - 1);
        for (var I = 0; I < 16; ++I) G = Z & (A[I] ^ Q[I]), A[I] ^= G, Q[I] ^= G
    }

    function W4(A) {
        var Q, B = new Float64Array(16);
        if (A)
            for (Q = 0; Q < A.length; ++Q) B[Q] = A[Q];
        return B
    }

    function h3A(A, Q, B) {
        for (var G = 0; G < 16; ++G) A[G] = Q[G] + B[G]
    }

    function g3A(A, Q, B) {
        for (var G = 0; G < 16; ++G) A[G] = Q[G] - B[G]
    }

    function eo(A, Q) {
        AZ(A, Q, Q)
    }

    function AZ(A, Q, B) {
        var G, Z, I = 0,
            Y = 0,
            J = 0,
            W = 0,
            X = 0,
            F = 0,
            V = 0,
            K = 0,
            D = 0,
            H = 0,
            C = 0,
            E = 0,
            z = 0,
            w = 0,
            N = 0,
            q = 0,
            R = 0,
            P = 0,
            y = 0,
            v = 0,
            x = 0,
            p = 0,
            u = 0,
            o = 0,
            l = 0,
            k = 0,
            d = 0,
            QA = 0,
            IA = 0,
            HA = 0,
            wA = 0,
            KA = B[0],
            SA = B[1],
            sA = B[2],
            NA = B[3],
            qA = B[4],
            DA = B[5],
            yA = B[6],
            rA = B[7],
            K1 = B[8],
            WA = B[9],
            XA = B[10],
            zA = B[11],
            $A = B[12],
            LA = B[13],
            TA = B[14],
            eA = B[15];
        G = Q[0], I += G * KA, Y += G * SA, J += G * sA, W += G * NA, X += G * qA, F += G * DA, V += G * yA, K += G * rA, D += G * K1, H += G * WA, C += G * XA, E += G * zA, z += G * $A, w += G * LA, N += G * TA, q += G * eA, G = Q[1], Y += G * KA, J += G * SA, W += G * sA, X += G * NA, F += G * qA, V += G * DA, K += G * yA, D += G * rA, H += G * K1, C += G * WA, E += G * XA, z += G * zA, w += G * $A, N += G * LA, q += G * TA, R += G * eA, G = Q[2], J += G * KA, W += G * SA, X += G * sA, F += G * NA, V += G * qA, K += G * DA, D += G * yA, H += G * rA, C += G * K1, E += G * WA, z += G * XA, w += G * zA, N += G * $A, q += G * LA, R += G * TA, P += G * eA, G = Q[3], W += G * KA, X += G * SA, F += G * sA, V += G * NA, K += G * qA, D += G * DA, H += G * yA, C += G * rA, E += G * K1, z += G * WA, w += G * XA, N += G * zA, q += G * $A, R += G * LA, P += G * TA, y += G * eA, G = Q[4], X += G * KA, F += G * SA, V += G * sA, K += G * NA, D += G * qA, H += G * DA, C += G * yA, E += G * rA, z += G * K1, w += G * WA, N += G * XA, q += G * zA, R += G * $A, P += G * LA, y += G * TA, v += G * eA, G = Q[5], F += G * KA, V += G * SA, K += G * sA, D += G * NA, H += G * qA, C += G * DA, E += G * yA, z += G * rA, w += G * K1, N += G * WA, q += G * XA, R += G * zA, P += G * $A, y += G * LA, v += G * TA, x += G * eA, G = Q[6], V += G * KA, K += G * SA, D += G * sA, H += G * NA, C += G * qA, E += G * DA, z += G * yA, w += G * rA, N += G * K1, q += G * WA, R += G * XA, P += G * zA, y += G * $A, v += G * LA, x += G * TA, p += G * eA, G = Q[7], K += G * KA, D += G * SA, H += G * sA, C += G * NA, E += G * qA, z += G * DA, w += G * yA, N += G * rA, q += G * K1, R += G * WA, P += G * XA, y += G * zA, v += G * $A, x += G * LA, p += G * TA, u += G * eA, G = Q[8], D += G * KA, H += G * SA, C += G * sA, E += G * NA, z += G * qA, w += G * DA, N += G * yA, q += G * rA, R += G * K1, P += G * WA, y += G * XA, v += G * zA, x += G * $A, p += G * LA, u += G * TA, o += G * eA, G = Q[9], H += G * KA, C += G * SA, E += G * sA, z += G * NA, w += G * qA, N += G * DA, q += G * yA, R += G * rA, P += G * K1, y += G * WA, v += G * XA, x += G * zA, p += G * $A, u += G * LA, o += G * TA, l += G * eA, G = Q[10], C += G * KA, E += G * SA, z += G * sA, w += G * NA, N += G * qA, q += G * DA, R += G * yA, P += G * rA, y += G * K1, v += G * WA, x += G * XA, p += G * zA, u += G * $A, o += G * LA, l += G * TA, k += G * eA, G = Q[11], E += G * KA, z += G * SA, w += G * sA, N += G * NA, q += G * qA, R += G * DA, P += G * yA, y += G * rA, v += G * K1, x += G * WA, p += G * XA, u += G * zA, o += G * $A, l += G * LA, k += G * TA, d += G * eA, G = Q[12], z += G * KA, w += G * SA, N += G * sA, q += G * NA, R += G * qA, P += G * DA, y += G * yA, v += G * rA, x += G * K1, p += G * WA, u += G * XA, o += G * zA, l += G * $A, k += G * LA, d += G * TA, QA += G * eA, G = Q[13], w += G * KA, N += G * SA, q += G * sA, R += G * NA, P += G * qA, y += G * DA, v += G * yA, x += G * rA, p += G * K1, u += G * WA, o += G * XA, l += G * zA, k += G * $A, d += G * LA, QA += G * TA, IA += G * eA, G = Q[14], N += G * KA, q += G * SA, R += G * sA, P += G * NA, y += G * qA, v += G * DA, x += G * yA, p += G * rA, u += G * K1, o += G * WA, l += G * XA, k += G * zA, d += G * $A, QA += G * LA, IA += G * TA, HA += G * eA, G = Q[15], q += G * KA, R += G * SA, P += G * sA, y += G * NA, v += G * qA, x += G * DA, p += G * yA, u += G * rA, o += G * K1, l += G * WA, k += G * XA, d += G * zA, QA += G * $A, IA += G * LA, HA += G * TA, wA += G * eA, I += 38 * R, Y += 38 * P, J += 38 * y, W += 38 * v, X += 38 * x, F += 38 * p, V += 38 * u, K += 38 * o, D += 38 * l, H += 38 * k, C += 38 * d, E += 38 * QA, z += 38 * IA, w += 38 * HA, N += 38 * wA, Z = 1, G = I + Z + 65535, Z = Math.floor(G / 65536), I = G - Z * 65536, G = Y + Z + 65535, Z = Math.floor(G / 65536), Y = G - Z * 65536, G = J + Z + 65535, Z = Math.floor(G / 65536), J = G - Z * 65536, G = W + Z + 65535, Z = Math.floor(G / 65536), W = G - Z * 65536, G = X + Z + 65535, Z = Math.floor(G / 65536), X = G - Z * 65536, G = F + Z + 65535, Z = Math.floor(G / 65536), F = G - Z * 65536, G = V + Z + 65535, Z = Math.floor(G / 65536), V = G - Z * 65536, G = K + Z + 65535, Z = Math.floor(G / 65536), K = G - Z * 65536, G = D + Z + 65535, Z = Math.floor(G / 65536), D = G - Z * 65536, G = H + Z + 65535, Z = Math.floor(G / 65536), H = G - Z * 65536, G = C + Z + 65535, Z = Math.floor(G / 65536), C = G - Z * 65536, G = E + Z + 65535, Z = Math.floor(G / 65536), E = G - Z * 65536, G = z + Z + 65535, Z = Math.floor(G / 65536), z = G - Z * 65536, G = w + Z + 65535, Z = Math.floor(G / 65536), w = G - Z * 65536, G = N + Z + 65535, Z = Math.floor(G / 65536), N = G - Z * 65536, G = q + Z + 65535, Z = Math.floor(G / 65536), q = G - Z * 65536, I += Z - 1 + 37 * (Z - 1), Z = 1, G = I + Z + 65535, Z = Math.floor(G / 65536), I = G - Z * 65536, G = Y + Z + 65535, Z = Math.floor(G / 65536), Y = G - Z * 65536, G = J + Z + 65535, Z = Math.floor(G / 65536), J = G - Z * 65536, G = W + Z + 65535, Z = Math.floor(G / 65536), W = G - Z * 65536, G = X + Z + 65535, Z = Math.floor(G / 65536), X = G - Z * 65536, G = F + Z + 65535, Z = Math.floor(G / 65536), F = G - Z * 65536, G = V + Z + 65535, Z = Math.floor(G / 65536), V = G - Z * 65536, G = K + Z + 65535, Z = Math.floor(G / 65536), K = G - Z * 65536, G = D + Z + 65535, Z = Math.floor(G / 65536), D = G - Z * 65536, G = H + Z + 65535, Z = Math.floor(G / 65536), H = G - Z * 65536, G = C + Z + 65535, Z = Math.floor(G / 65536), C = G - Z * 65536, G = E + Z + 65535, Z = Math.floor(G / 65536), E = G - Z * 65536, G = z + Z + 65535, Z = Math.floor(G / 65536), z = G - Z * 65536, G = w + Z + 65535, Z = Math.floor(G / 65536), w = G - Z * 65536, G = N + Z + 65535, Z = Math.floor(G / 65536), N = G - Z * 65536, G = q + Z + 65535, Z = Math.floor(G / 65536), q = G - Z * 65536, I += Z - 1 + 37 * (Z - 1), A[0] = I, A[1] = Y, A[2] = J, A[3] = W, A[4] = X, A[5] = F, A[6] = V, A[7] = K, A[8] = D, A[9] = H, A[10] = C, A[11] = E, A[12] = z, A[13] = w, A[14] = N, A[15] = q
    }
});
var c8B = U((xT7, d8B) => {
    var uw = n8();
    P3();
    aL();
    TzA();
    d8B.exports = uw.kem = uw.kem || {};
    var u8B = uw.jsbn.BigInteger;
    uw.kem.rsa = {};
    uw.kem.rsa.create = function(A, Q) {
        Q = Q || {};
        var B = Q.prng || uw.random,
            G = {};
        return G.encrypt = function(Z, I) {
            var Y = Math.ceil(Z.n.bitLength() / 8),
                J;
            do J = new u8B(uw.util.bytesToHex(B.getBytesSync(Y)), 16).mod(Z.n); while (J.compareTo(u8B.ONE) <= 0);
            J = uw.util.hexToBytes(J.toString(16));
            var W = Y - J.length;
            if (W > 0) J = uw.util.fillString(String.fromCharCode(0), W) + J;
            var X = Z.encrypt(J, "NONE"),
                F = A.generate(J, I);
            return {
                encapsulation: X,
                key: F
            }
        }, G.decrypt = function(Z, I, Y) {
            var J = Z.decrypt(I, "NONE");
            return A.generate(J, Y)
        }, G
    };
    uw.kem.kdf1 = function(A, Q) {
        m8B(this, A, 0, Q || A.digestLength)
    };
    uw.kem.kdf2 = function(A, Q) {
        m8B(this, A, 1, Q || A.digestLength)
    };

    function m8B(A, Q, B, G) {
        A.generate = function(Z, I) {
            var Y = new uw.util.ByteBuffer,
                J = Math.ceil(I / G) + B,
                W = new uw.util.ByteBuffer;
            for (var X = B; X < J; ++X) {
                W.putInt32(X), Q.start(), Q.update(Z + W.getBytes());
                var F = Q.digest();
                Y.putBytes(F.getBytes(G))
            }
            return Y.truncate(Y.length() - I), Y.getBytes()
        }
    }
});
var l8B = U((vT7, p8B) => {
    var O5 = n8();
    P3();
    p8B.exports = O5.log = O5.log || {};
    O5.log.levels = ["none", "error", "warning", "info", "debug", "verbose", "max"];
    var yiA = {},
        gv1 = [],
        xzA = null;
    O5.log.LEVEL_LOCKED = 2;
    O5.log.NO_LEVEL_CHECK = 4;
    O5.log.INTERPOLATE = 8;
    for (AM = 0; AM < O5.log.levels.length; ++AM) _iA = O5.log.levels[AM], yiA[_iA] = {
        index: AM,
        name: _iA.toUpperCase()
    };
    var _iA, AM;
    O5.log.logMessage = function(A) {
        var Q = yiA[A.level].index;
        for (var B = 0; B < gv1.length; ++B) {
            var G = gv1[B];
            if (G.flags & O5.log.NO_LEVEL_CHECK) G.f(A);
            else {
                var Z = yiA[G.level].index;
                if (Q <= Z) G.f(G, A)
            }
        }
    };
    O5.log.prepareStandard = function(A) {
        if (!("standard" in A)) A.standard = yiA[A.level].name + " [" + A.category + "] " + A.message
    };
    O5.log.prepareFull = function(A) {
        if (!("full" in A)) {
            var Q = [A.message];
            Q = Q.concat([]), A.full = O5.util.format.apply(this, Q)
        }
    };
    O5.log.prepareStandardFull = function(A) {
        if (!("standardFull" in A)) O5.log.prepareStandard(A), A.standardFull = A.standard
    };
    kiA = ["error", "warning", "info", "debug", "verbose"];
    for (AM = 0; AM < kiA.length; ++AM)(function(Q) {
        O5.log[Q] = function(B, G) {
            var Z = Array.prototype.slice.call(arguments).slice(2),
                I = {
                    timestamp: new Date,
                    level: Q,
                    category: B,
                    message: G,
                    arguments: Z
                };
            O5.log.logMessage(I)
        }
    })(kiA[AM]);
    var kiA, AM;
    O5.log.makeLogger = function(A) {
        var Q = {
            flags: 0,
            f: A
        };
        return O5.log.setLevel(Q, "none"), Q
    };
    O5.log.setLevel = function(A, Q) {
        var B = !1;
        if (A && !(A.flags & O5.log.LEVEL_LOCKED))
            for (var G = 0; G < O5.log.levels.length; ++G) {
                var Z = O5.log.levels[G];
                if (Q == Z) {
                    A.level = Q, B = !0;
                    break
                }
            }
        return B
    };
    O5.log.lock = function(A, Q) {
        if (typeof Q > "u" || Q) A.flags |= O5.log.LEVEL_LOCKED;
        else A.flags &= ~O5.log.LEVEL_LOCKED
    };
    O5.log.addLogger = function(A) {
        gv1.push(A)
    };
    if (typeof console < "u" && "log" in console) {
        if (console.error && console.warn && console.info && console.debug) uv1 = {
            error: console.error,
            warning: console.warn,
            info: console.info,
            debug: console.debug,
            verbose: console.debug
        }, m3A = function(A, Q) {
            O5.log.prepareStandard(Q);
            var B = uv1[Q.level],
                G = [Q.standard];
            G = G.concat(Q.arguments.slice()), B.apply(console, G)
        }, At = O5.log.makeLogger(m3A);
        else m3A = function(Q, B) {
            O5.log.prepareStandardFull(B), console.log(B.standardFull)
        }, At = O5.log.makeLogger(m3A);
        O5.log.setLevel(At, "debug"), O5.log.addLogger(At), xzA = At
    } else console = {
        log: function() {}
    };
    var At, uv1, m3A;
    if (xzA !== null && typeof window < "u" && window.location) {
        if (u3A = new URL(window.location.href).searchParams, u3A.has("console.level")) O5.log.setLevel(xzA, u3A.get("console.level").slice(-1)[0]);
        if (u3A.has("console.lock")) {
            if (mv1 = u3A.get("console.lock").slice(-1)[0], mv1 == "true") O5.log.lock(xzA)
        }
    }
    var u3A, mv1;
    O5.log.consoleLogger = xzA
});
var n8B = U((bT7, i8B) => {
    i8B.exports = F_();
    ViA();
    y3A();
    ex1();
    jv1()
});
var r8B = U((fT7, s8B) => {
    var DB = n8();
    Rc();
    GT();
    OzA();
    Tc();
    io();
    Hv1();
    aL();
    P3();
    OiA();
    var v1 = DB.asn1,
        BE = s8B.exports = DB.pkcs7 = DB.pkcs7 || {};
    BE.messageFromPem = function(A) {
        var Q = DB.pem.decode(A)[0];
        if (Q.type !== "PKCS7") {
            var B = Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');
            throw B.headerType = Q.type, B
        }
        if (Q.procType && Q.procType.type === "ENCRYPTED") throw Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");
        var G = v1.fromDer(Q.body);
        return BE.messageFromAsn1(G)
    };
    BE.messageToPem = function(A, Q) {
        var B = {
            type: "PKCS7",
            body: v1.toDer(A.toAsn1()).getBytes()
        };
        return DB.pem.encode(B, {
            maxline: Q
        })
    };
    BE.messageFromAsn1 = function(A) {
        var Q = {},
            B = [];
        if (!v1.validate(A, BE.asn1.contentInfoValidator, Q, B)) {
            var G = Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");
            throw G.errors = B, G
        }
        var Z = v1.derToOid(Q.contentType),
            I;
        switch (Z) {
            case DB.pki.oids.envelopedData:
                I = BE.createEnvelopedData();
                break;
            case DB.pki.oids.encryptedData:
                I = BE.createEncryptedData();
                break;
            case DB.pki.oids.signedData:
                I = BE.createSignedData();
                break;
            default:
                throw Error("Cannot read PKCS#7 message. ContentType with OID " + Z + " is not (yet) supported.")
        }
        return I.fromAsn1(Q.content.value[0]), I
    };
    BE.createSignedData = function() {
        var A = null;
        return A = {
            type: DB.pki.oids.signedData,
            version: 1,
            certificates: [],
            crls: [],
            signers: [],
            digestAlgorithmIdentifiers: [],
            contentInfo: null,
            signerInfos: [],
            fromAsn1: function(G) {
                if (cv1(A, G, BE.asn1.signedDataValidator), A.certificates = [], A.crls = [], A.digestAlgorithmIdentifiers = [], A.contentInfo = null, A.signerInfos = [], A.rawCapture.certificates) {
                    var Z = A.rawCapture.certificates.value;
                    for (var I = 0; I < Z.length; ++I) A.certificates.push(DB.pki.certificateFromAsn1(Z[I]))
                }
            },
            toAsn1: function() {
                if (!A.contentInfo) A.sign();
                var G = [];
                for (var Z = 0; Z < A.certificates.length; ++Z) G.push(DB.pki.certificateToAsn1(A.certificates[Z]));
                var I = [],
                    Y = v1.create(v1.Class.CONTEXT_SPECIFIC, 0, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.INTEGER, !1, v1.integerToDer(A.version).getBytes()), v1.create(v1.Class.UNIVERSAL, v1.Type.SET, !0, A.digestAlgorithmIdentifiers), A.contentInfo])]);
                if (G.length > 0) Y.value[0].value.push(v1.create(v1.Class.CONTEXT_SPECIFIC, 0, !0, G));
                if (I.length > 0) Y.value[0].value.push(v1.create(v1.Class.CONTEXT_SPECIFIC, 1, !0, I));
                return Y.value[0].value.push(v1.create(v1.Class.UNIVERSAL, v1.Type.SET, !0, A.signerInfos)), v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.OID, !1, v1.oidToDer(A.type).getBytes()), Y])
            },
            addSigner: function(G) {
                var {
                    issuer: Z,
                    serialNumber: I
                } = G;
                if (G.certificate) {
                    var Y = G.certificate;
                    if (typeof Y === "string") Y = DB.pki.certificateFromPem(Y);
                    Z = Y.issuer.attributes, I = Y.serialNumber
                }
                var J = G.key;
                if (!J) throw Error("Could not add PKCS#7 signer; no private key specified.");
                if (typeof J === "string") J = DB.pki.privateKeyFromPem(J);
                var W = G.digestAlgorithm || DB.pki.oids.sha1;
                switch (W) {
                    case DB.pki.oids.sha1:
                    case DB.pki.oids.sha256:
                    case DB.pki.oids.sha384:
                    case DB.pki.oids.sha512:
                    case DB.pki.oids.md5:
                        break;
                    default:
                        throw Error("Could not add PKCS#7 signer; unknown message digest algorithm: " + W)
                }
                var X = G.authenticatedAttributes || [];
                if (X.length > 0) {
                    var F = !1,
                        V = !1;
                    for (var K = 0; K < X.length; ++K) {
                        var D = X[K];
                        if (!F && D.type === DB.pki.oids.contentType) {
                            if (F = !0, V) break;
                            continue
                        }
                        if (!V && D.type === DB.pki.oids.messageDigest) {
                            if (V = !0, F) break;
                            continue
                        }
                    }
                    if (!F || !V) throw Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.")
                }
                A.signers.push({
                    key: J,
                    version: 1,
                    issuer: Z,
                    serialNumber: I,
                    digestAlgorithm: W,
                    signatureAlgorithm: DB.pki.oids.rsaEncryption,
                    signature: null,
                    authenticatedAttributes: X,
                    unauthenticatedAttributes: []
                })
            },
            sign: function(G) {
                if (G = G || {}, typeof A.content !== "object" || A.contentInfo === null) {
                    if (A.contentInfo = v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.OID, !1, v1.oidToDer(DB.pki.oids.data).getBytes())]), "content" in A) {
                        var Z;
                        if (A.content instanceof DB.util.ByteBuffer) Z = A.content.bytes();
                        else if (typeof A.content === "string") Z = DB.util.encodeUtf8(A.content);
                        if (G.detached) A.detachedContent = v1.create(v1.Class.UNIVERSAL, v1.Type.OCTETSTRING, !1, Z);
                        else A.contentInfo.value.push(v1.create(v1.Class.CONTEXT_SPECIFIC, 0, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.OCTETSTRING, !1, Z)]))
                    }
                }
                if (A.signers.length === 0) return;
                var I = Q();
                B(I)
            },
            verify: function() {
                throw Error("PKCS#7 signature verification not yet implemented.")
            },
            addCertificate: function(G) {
                if (typeof G === "string") G = DB.pki.certificateFromPem(G);
                A.certificates.push(G)
            },
            addCertificateRevokationList: function(G) {
                throw Error("PKCS#7 CRL support not yet implemented.")
            }
        }, A;

        function Q() {
            var G = {};
            for (var Z = 0; Z < A.signers.length; ++Z) {
                var I = A.signers[Z],
                    Y = I.digestAlgorithm;
                if (!(Y in G)) G[Y] = DB.md[DB.pki.oids[Y]].create();
                if (I.authenticatedAttributes.length === 0) I.md = G[Y];
                else I.md = DB.md[DB.pki.oids[Y]].create()
            }
            A.digestAlgorithmIdentifiers = [];
            for (var Y in G) A.digestAlgorithmIdentifiers.push(v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.OID, !1, v1.oidToDer(Y).getBytes()), v1.create(v1.Class.UNIVERSAL, v1.Type.NULL, !1, "")]));
            return G
        }

        function B(G) {
            var Z;
            if (A.detachedContent) Z = A.detachedContent;
            else Z = A.contentInfo.value[1], Z = Z.value[0];
            if (!Z) throw Error("Could not sign PKCS#7 message; there is no content to sign.");
            var I = v1.derToOid(A.contentInfo.value[0].value),
                Y = v1.toDer(Z);
            Y.getByte(), v1.getBerValueLength(Y), Y = Y.getBytes();
            for (var J in G) G[J].start().update(Y);
            var W = new Date;
            for (var X = 0; X < A.signers.length; ++X) {
                var F = A.signers[X];
                if (F.authenticatedAttributes.length === 0) {
                    if (I !== DB.pki.oids.data) throw Error("Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.")
                } else {
                    F.authenticatedAttributesAsn1 = v1.create(v1.Class.CONTEXT_SPECIFIC, 0, !0, []);
                    var V = v1.create(v1.Class.UNIVERSAL, v1.Type.SET, !0, []);
                    for (var K = 0; K < F.authenticatedAttributes.length; ++K) {
                        var D = F.authenticatedAttributes[K];
                        if (D.type === DB.pki.oids.messageDigest) D.value = G[F.digestAlgorithm].digest();
                        else if (D.type === DB.pki.oids.signingTime) {
                            if (!D.value) D.value = W
                        }
                        V.value.push(dv1(D)), F.authenticatedAttributesAsn1.value.push(dv1(D))
                    }
                    Y = v1.toDer(V).getBytes(), F.md.start().update(Y)
                }
                F.signature = F.key.sign(F.md, "RSASSA-PKCS1-V1_5")
            }
            A.signerInfos = jt8(A.signers)
        }
    };
    BE.createEncryptedData = function() {
        var A = null;
        return A = {
            type: DB.pki.oids.encryptedData,
            version: 0,
            encryptedContent: {
                algorithm: DB.pki.oids["aes256-CBC"]
            },
            fromAsn1: function(Q) {
                cv1(A, Q, BE.asn1.encryptedDataValidator)
            },
            decrypt: function(Q) {
                if (Q !== void 0) A.encryptedContent.key = Q;
                a8B(A)
            }
        }, A
    };
    BE.createEnvelopedData = function() {
        var A = null;
        return A = {
            type: DB.pki.oids.envelopedData,
            version: 0,
            recipients: [],
            encryptedContent: {
                algorithm: DB.pki.oids["aes256-CBC"]
            },
            fromAsn1: function(Q) {
                var B = cv1(A, Q, BE.asn1.envelopedDataValidator);
                A.recipients = Rt8(B.recipientInfos.value)
            },
            toAsn1: function() {
                return v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.OID, !1, v1.oidToDer(A.type).getBytes()), v1.create(v1.Class.CONTEXT_SPECIFIC, 0, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.INTEGER, !1, v1.integerToDer(A.version).getBytes()), v1.create(v1.Class.UNIVERSAL, v1.Type.SET, !0, Tt8(A.recipients)), v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, St8(A.encryptedContent))])])])
            },
            findRecipient: function(Q) {
                var B = Q.issuer.attributes;
                for (var G = 0; G < A.recipients.length; ++G) {
                    var Z = A.recipients[G],
                        I = Z.issuer;
                    if (Z.serialNumber !== Q.serialNumber) continue;
                    if (I.length !== B.length) continue;
                    var Y = !0;
                    for (var J = 0; J < B.length; ++J)
                        if (I[J].type !== B[J].type || I[J].value !== B[J].value) {
                            Y = !1;
                            break
                        } if (Y) return Z
                }
                return null
            },
            decrypt: function(Q, B) {
                if (A.encryptedContent.key === void 0 && Q !== void 0 && B !== void 0) switch (Q.encryptedContent.algorithm) {
                    case DB.pki.oids.rsaEncryption:
                    case DB.pki.oids.desCBC:
                        var G = B.decrypt(Q.encryptedContent.content);
                        A.encryptedContent.key = DB.util.createBuffer(G);
                        break;
                    default:
                        throw Error("Unsupported asymmetric cipher, OID " + Q.encryptedContent.algorithm)
                }
                a8B(A)
            },
            addRecipient: function(Q) {
                A.recipients.push({
                    version: 0,
                    issuer: Q.issuer.attributes,
                    serialNumber: Q.serialNumber,
                    encryptedContent: {
                        algorithm: DB.pki.oids.rsaEncryption,
                        key: Q.publicKey
                    }
                })
            },
            encrypt: function(Q, B) {
                if (A.encryptedContent.content === void 0) {
                    B = B || A.encryptedContent.algorithm, Q = Q || A.encryptedContent.key;
                    var G, Z, I;
                    switch (B) {
                        case DB.pki.oids["aes128-CBC"]:
                            G = 16, Z = 16, I = DB.aes.createEncryptionCipher;
                            break;
                        case DB.pki.oids["aes192-CBC"]:
                            G = 24, Z = 16, I = DB.aes.createEncryptionCipher;
                            break;
                        case DB.pki.oids["aes256-CBC"]:
                            G = 32, Z = 16, I = DB.aes.createEncryptionCipher;
                            break;
                        case DB.pki.oids["des-EDE3-CBC"]:
                            G = 24, Z = 8, I = DB.des.createEncryptionCipher;
                            break;
                        default:
                            throw Error("Unsupported symmetric cipher, OID " + B)
                    }
                    if (Q === void 0) Q = DB.util.createBuffer(DB.random.getBytes(G));
                    else if (Q.length() != G) throw Error("Symmetric key has wrong length; got " + Q.length() + " bytes, expected " + G + ".");
                    A.encryptedContent.algorithm = B, A.encryptedContent.key = Q, A.encryptedContent.parameter = DB.util.createBuffer(DB.random.getBytes(Z));
                    var Y = I(Q);
                    if (Y.start(A.encryptedContent.parameter.copy()), Y.update(A.content), !Y.finish()) throw Error("Symmetric encryption failed.");
                    A.encryptedContent.content = Y.output
                }
                for (var J = 0; J < A.recipients.length; ++J) {
                    var W = A.recipients[J];
                    if (W.encryptedContent.content !== void 0) continue;
                    switch (W.encryptedContent.algorithm) {
                        case DB.pki.oids.rsaEncryption:
                            W.encryptedContent.content = W.encryptedContent.key.encrypt(A.encryptedContent.key.data);
                            break;
                        default:
                            throw Error("Unsupported asymmetric cipher, OID " + W.encryptedContent.algorithm)
                    }
                }
            }
        }, A
    };

    function Mt8(A) {
        var Q = {},
            B = [];
        if (!v1.validate(A, BE.asn1.recipientInfoValidator, Q, B)) {
            var G = Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");
            throw G.errors = B, G
        }
        return {
            version: Q.version.charCodeAt(0),
            issuer: DB.pki.RDNAttributesAsArray(Q.issuer),
            serialNumber: DB.util.createBuffer(Q.serial).toHex(),
            encryptedContent: {
                algorithm: v1.derToOid(Q.encAlgorithm),
                parameter: Q.encParameter ? Q.encParameter.value : void 0,
                content: Q.encKey
            }
        }
    }

    function Ot8(A) {
        return v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.INTEGER, !1, v1.integerToDer(A.version).getBytes()), v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [DB.pki.distinguishedNameToAsn1({
            attributes: A.issuer
        }), v1.create(v1.Class.UNIVERSAL, v1.Type.INTEGER, !1, DB.util.hexToBytes(A.serialNumber))]), v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.OID, !1, v1.oidToDer(A.encryptedContent.algorithm).getBytes()), v1.create(v1.Class.UNIVERSAL, v1.Type.NULL, !1, "")]), v1.create(v1.Class.UNIVERSAL, v1.Type.OCTETSTRING, !1, A.encryptedContent.content)])
    }

    function Rt8(A) {
        var Q = [];
        for (var B = 0; B < A.length; ++B) Q.push(Mt8(A[B]));
        return Q
    }

    function Tt8(A) {
        var Q = [];
        for (var B = 0; B < A.length; ++B) Q.push(Ot8(A[B]));
        return Q
    }

    function Pt8(A) {
        var Q = v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.INTEGER, !1, v1.integerToDer(A.version).getBytes()), v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [DB.pki.distinguishedNameToAsn1({
            attributes: A.issuer
        }), v1.create(v1.Class.UNIVERSAL, v1.Type.INTEGER, !1, DB.util.hexToBytes(A.serialNumber))]), v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.OID, !1, v1.oidToDer(A.digestAlgorithm).getBytes()), v1.create(v1.Class.UNIVERSAL, v1.Type.NULL, !1, "")])]);
        if (A.authenticatedAttributesAsn1) Q.value.push(A.authenticatedAttributesAsn1);
        if (Q.value.push(v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.OID, !1, v1.oidToDer(A.signatureAlgorithm).getBytes()), v1.create(v1.Class.UNIVERSAL, v1.Type.NULL, !1, "")])), Q.value.push(v1.create(v1.Class.UNIVERSAL, v1.Type.OCTETSTRING, !1, A.signature)), A.unauthenticatedAttributes.length > 0) {
            var B = v1.create(v1.Class.CONTEXT_SPECIFIC, 1, !0, []);
            for (var G = 0; G < A.unauthenticatedAttributes.length; ++G) {
                var Z = A.unauthenticatedAttributes[G];
                B.values.push(dv1(Z))
            }
            Q.value.push(B)
        }
        return Q
    }

    function jt8(A) {
        var Q = [];
        for (var B = 0; B < A.length; ++B) Q.push(Pt8(A[B]));
        return Q
    }

    function dv1(A) {
        var Q;
        if (A.type === DB.pki.oids.contentType) Q = v1.create(v1.Class.UNIVERSAL, v1.Type.OID, !1, v1.oidToDer(A.value).getBytes());
        else if (A.type === DB.pki.oids.messageDigest) Q = v1.create(v1.Class.UNIVERSAL, v1.Type.OCTETSTRING, !1, A.value.bytes());
        else if (A.type === DB.pki.oids.signingTime) {
            var B = new Date("1950-01-01T00:00:00Z"),
                G = new Date("2050-01-01T00:00:00Z"),
                Z = A.value;
            if (typeof Z === "string") {
                var I = Date.parse(Z);
                if (!isNaN(I)) Z = new Date(I);
                else if (Z.length === 13) Z = v1.utcTimeToDate(Z);
                else Z = v1.generalizedTimeToDate(Z)
            }
            if (Z >= B && Z < G) Q = v1.create(v1.Class.UNIVERSAL, v1.Type.UTCTIME, !1, v1.dateToUtcTime(Z));
            else Q = v1.create(v1.Class.UNIVERSAL, v1.Type.GENERALIZEDTIME, !1, v1.dateToGeneralizedTime(Z))
        }
        return v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.OID, !1, v1.oidToDer(A.type).getBytes()), v1.create(v1.Class.UNIVERSAL, v1.Type.SET, !0, [Q])])
    }

    function St8(A) {
        return [v1.create(v1.Class.UNIVERSAL, v1.Type.OID, !1, v1.oidToDer(DB.pki.oids.data).getBytes()), v1.create(v1.Class.UNIVERSAL, v1.Type.SEQUENCE, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.OID, !1, v1.oidToDer(A.algorithm).getBytes()), !A.parameter ? void 0 : v1.create(v1.Class.UNIVERSAL, v1.Type.OCTETSTRING, !1, A.parameter.getBytes())]), v1.create(v1.Class.CONTEXT_SPECIFIC, 0, !0, [v1.create(v1.Class.UNIVERSAL, v1.Type.OCTETSTRING, !1, A.content.getBytes())])]
    }

    function cv1(A, Q, B) {
        var G = {},
            Z = [];
        if (!v1.validate(Q, B, G, Z)) {
            var I = Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");
            throw I.errors = I, I
        }
        var Y = v1.derToOid(G.contentType);
        if (Y !== DB.pki.oids.data) throw Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");
        if (G.encryptedContent) {
            var J = "";
            if (DB.util.isArray(G.encryptedContent))
                for (var W = 0; W < G.encryptedContent.length; ++W) {
                    if (G.encryptedContent[W].type !== v1.Type.OCTETSTRING) throw Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");
                    J += G.encryptedContent[W].value
                } else J = G.encryptedContent;
            A.encryptedContent = {
                algorithm: v1.derToOid(G.encAlgorithm),
                parameter: DB.util.createBuffer(G.encParameter.value),
                content: DB.util.createBuffer(J)
            }
        }
        if (G.content) {
            var J = "";
            if (DB.util.isArray(G.content))
                for (var W = 0; W < G.content.length; ++W) {
                    if (G.content[W].type !== v1.Type.OCTETSTRING) throw Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");
                    J += G.content[W].value
                } else J = G.content;
            A.content = DB.util.createBuffer(J)
        }
        return A.version = G.version.charCodeAt(0), A.rawCapture = G, G
    }

    function a8B(A) {
        if (A.encryptedContent.key === void 0) throw Error("Symmetric key not available.");
        if (A.content === void 0) {
            var Q;
            switch (A.encryptedContent.algorithm) {
                case DB.pki.oids["aes128-CBC"]:
                case DB.pki.oids["aes192-CBC"]:
                case DB.pki.oids["aes256-CBC"]:
                    Q = DB.aes.createDecryptionCipher(A.encryptedContent.key);
                    break;
                case DB.pki.oids.desCBC:
                case DB.pki.oids["des-EDE3-CBC"]:
                    Q = DB.des.createDecryptionCipher(A.encryptedContent.key);
                    break;
                default:
                    throw Error("Unsupported symmetric cipher, OID " + A.encryptedContent.algorithm)
            }
            if (Q.start(A.encryptedContent.parameter), Q.update(A.encryptedContent.content), !Q.finish()) throw Error("Symmetric decryption failed.");
            A.content = Q.output
        }
    }
});
var t8B = U((hT7, o8B) => {
    var kX = n8();
    Rc();
    j3A();
    ViA();
    y3A();
    P3();
    var viA = o8B.exports = kX.ssh = kX.ssh || {};
    viA.privateKeyToPutty = function(A, Q, B) {
        B = B || "", Q = Q || "";
        var G = "ssh-rsa",
            Z = Q === "" ? "none" : "aes256-cbc",
            I = "PuTTY-User-Key-File-2: " + G + `\r
`;
        I += "Encryption: " + Z + `\r
`, I += "Comment: " + B + `\r
`;
        var Y = kX.util.createBuffer();
        d3A(Y, G), U_(Y, A.e), U_(Y, A.n);
        var J = kX.util.encode64(Y.bytes(), 64),
            W = Math.floor(J.length / 66) + 1;
        I += "Public-Lines: " + W + `\r
`, I += J;
        var X = kX.util.createBuffer();
        U_(X, A.d), U_(X, A.p), U_(X, A.q), U_(X, A.qInv);
        var F;
        if (!Q) F = kX.util.encode64(X.bytes(), 64);
        else {
            var V = X.length() + 16 - 1;
            V -= V % 16;
            var K = xiA(X.bytes());
            K.truncate(K.length() - V + X.length()), X.putBuffer(K);
            var D = kX.util.createBuffer();