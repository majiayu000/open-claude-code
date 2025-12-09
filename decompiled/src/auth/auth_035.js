/**
 * Claude Code Decompiled
 * Category: auth
 * File: 35/61
 * Lines: 152258 - 153719 (1462 lines)
 * Original file: cli.js
 */

            Y = +new Date, J += Y - I, I = Y
        }
        return A.keys !== null
    };
    V8.rsa.generateKeyPair = function(A, Q, B, G) {
        if (arguments.length === 1) {
            if (typeof A === "object") B = A, A = void 0;
            else if (typeof A === "function") G = A, A = void 0
        } else if (arguments.length === 2)
            if (typeof A === "number") {
                if (typeof Q === "function") G = Q, Q = void 0;
                else if (typeof Q !== "number") B = Q, Q = void 0
            } else B = A, G = Q, A = void 0, Q = void 0;
        else if (arguments.length === 3)
            if (typeof Q === "number") {
                if (typeof B === "function") G = B, B = void 0
            } else G = B, B = Q, Q = void 0;
        if (B = B || {}, A === void 0) A = B.bits || 2048;
        if (Q === void 0) Q = B.e || 65537;
        if (!T9.options.usePureJavaScript && !B.prng && A >= 256 && A <= 16384 && (Q === 65537 || Q === 3)) {
            if (G) {
                if (u4B("generateKeyPair")) return Vv1.generateKeyPair("rsa", {
                    modulusLength: A,
                    publicExponent: Q,
                    publicKeyEncoding: {
                        type: "spki",
                        format: "pem"
                    },
                    privateKeyEncoding: {
                        type: "pkcs8",
                        format: "pem"
                    }
                }, function(J, W, X) {
                    if (J) return G(J);
                    G(null, {
                        privateKey: V8.privateKeyFromPem(X),
                        publicKey: V8.publicKeyFromPem(W)
                    })
                });
                if (m4B("generateKey") && m4B("exportKey")) return rL.globalScope.crypto.subtle.generateKey({
                    name: "RSASSA-PKCS1-v1_5",
                    modulusLength: A,
                    publicExponent: c4B(Q),
                    hash: {
                        name: "SHA-256"
                    }
                }, !0, ["sign", "verify"]).then(function(J) {
                    return rL.globalScope.crypto.subtle.exportKey("pkcs8", J.privateKey)
                }).then(void 0, function(J) {
                    G(J)
                }).then(function(J) {
                    if (J) {
                        var W = V8.privateKeyFromAsn1(F0.fromDer(T9.util.createBuffer(J)));
                        G(null, {
                            privateKey: W,
                            publicKey: V8.setRsaPublicKey(W.n, W.e)
                        })
                    }
                });
                if (d4B("generateKey") && d4B("exportKey")) {
                    var Z = rL.globalScope.msCrypto.subtle.generateKey({
                        name: "RSASSA-PKCS1-v1_5",
                        modulusLength: A,
                        publicExponent: c4B(Q),
                        hash: {
                            name: "SHA-256"
                        }
                    }, !0, ["sign", "verify"]);
                    Z.oncomplete = function(J) {
                        var W = J.target.result,
                            X = rL.globalScope.msCrypto.subtle.exportKey("pkcs8", W.privateKey);
                        X.oncomplete = function(F) {
                            var V = F.target.result,
                                K = V8.privateKeyFromAsn1(F0.fromDer(T9.util.createBuffer(V)));
                            G(null, {
                                privateKey: K,
                                publicKey: V8.setRsaPublicKey(K.n, K.e)
                            })
                        }, X.onerror = function(F) {
                            G(F)
                        }
                    }, Z.onerror = function(J) {
                        G(J)
                    };
                    return
                }
            } else if (u4B("generateKeyPairSync")) {
                var I = Vv1.generateKeyPairSync("rsa", {
                    modulusLength: A,
                    publicExponent: Q,
                    publicKeyEncoding: {
                        type: "spki",
                        format: "pem"
                    },
                    privateKeyEncoding: {
                        type: "pkcs8",
                        format: "pem"
                    }
                });
                return {
                    privateKey: V8.privateKeyFromPem(I.privateKey),
                    publicKey: V8.publicKeyFromPem(I.publicKey)
                }
            }
        }
        var Y = V8.rsa.createKeyPairGenerationState(A, Q, B);
        if (!G) return V8.rsa.stepKeyPairGenerationState(Y, 0), Y.keys;
        Vo8(Y, B, G)
    };
    V8.setRsaPublicKey = V8.rsa.setPublicKey = function(A, Q) {
        var B = {
            n: A,
            e: Q
        };
        return B.encrypt = function(G, Z, I) {
            if (typeof Z === "string") Z = Z.toUpperCase();
            else if (Z === void 0) Z = "RSAES-PKCS1-V1_5";
            if (Z === "RSAES-PKCS1-V1_5") Z = {
                encode: function(J, W, X) {
                    return l4B(J, W, 2).getBytes()
                }
            };
            else if (Z === "RSA-OAEP" || Z === "RSAES-OAEP") Z = {
                encode: function(J, W) {
                    return T9.pkcs1.encode_rsa_oaep(W, J, I)
                }
            };
            else if (["RAW", "NONE", "NULL", null].indexOf(Z) !== -1) Z = {
                encode: function(J) {
                    return J
                }
            };
            else if (typeof Z === "string") throw Error('Unsupported encryption scheme: "' + Z + '".');
            var Y = Z.encode(G, B, !0);
            return V8.rsa.encrypt(Y, B, !0)
        }, B.verify = function(G, Z, I, Y) {
            if (typeof I === "string") I = I.toUpperCase();
            else if (I === void 0) I = "RSASSA-PKCS1-V1_5";
            if (Y === void 0) Y = {
                _parseAllDigestBytes: !0
            };
            if (!("_parseAllDigestBytes" in Y)) Y._parseAllDigestBytes = !0;
            if (I === "RSASSA-PKCS1-V1_5") I = {
                verify: function(W, X) {
                    X = wiA(X, B, !0);
                    var F = F0.fromDer(X, {
                            parseAllBytes: Y._parseAllDigestBytes
                        }),
                        V = {},
                        K = [];
                    if (!F0.validate(F, Xo8, V, K)) {
                        var D = Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.");
                        throw D.errors = K, D
                    }
                    var H = F0.derToOid(V.algorithmIdentifier);
                    if (!(H === T9.oids.md2 || H === T9.oids.md5 || H === T9.oids.sha1 || H === T9.oids.sha224 || H === T9.oids.sha256 || H === T9.oids.sha384 || H === T9.oids.sha512 || H === T9.oids["sha512-224"] || H === T9.oids["sha512-256"])) {
                        var D = Error("Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.");
                        throw D.oid = H, D
                    }
                    if (H === T9.oids.md2 || H === T9.oids.md5) {
                        if (!("parameters" in V)) throw Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters.")
                    }
                    return W === V.digest
                }
            };
            else if (I === "NONE" || I === "NULL" || I === null) I = {
                verify: function(W, X) {
                    return X = wiA(X, B, !0), W === X
                }
            };
            var J = V8.rsa.decrypt(Z, B, !0, !1);
            return I.verify(G, J, B.n.bitLength())
        }, B
    };
    V8.setRsaPrivateKey = V8.rsa.setPrivateKey = function(A, Q, B, G, Z, I, Y, J) {
        var W = {
            n: A,
            e: Q,
            d: B,
            p: G,
            q: Z,
            dP: I,
            dQ: Y,
            qInv: J
        };
        return W.decrypt = function(X, F, V) {
            if (typeof F === "string") F = F.toUpperCase();
            else if (F === void 0) F = "RSAES-PKCS1-V1_5";
            var K = V8.rsa.decrypt(X, W, !1, !1);
            if (F === "RSAES-PKCS1-V1_5") F = {
                decode: wiA
            };
            else if (F === "RSA-OAEP" || F === "RSAES-OAEP") F = {
                decode: function(D, H) {
                    return T9.pkcs1.decode_rsa_oaep(H, D, V)
                }
            };
            else if (["RAW", "NONE", "NULL", null].indexOf(F) !== -1) F = {
                decode: function(D) {
                    return D
                }
            };
            else throw Error('Unsupported encryption scheme: "' + F + '".');
            return F.decode(K, W, !1)
        }, W.sign = function(X, F) {
            var V = !1;
            if (typeof F === "string") F = F.toUpperCase();
            if (F === void 0 || F === "RSASSA-PKCS1-V1_5") F = {
                encode: Fo8
            }, V = 1;
            else if (F === "NONE" || F === "NULL" || F === null) F = {
                encode: function() {
                    return X
                }
            }, V = 1;
            var K = F.encode(X, W.n.bitLength());
            return V8.rsa.encrypt(K, W, V)
        }, W
    };
    V8.wrapRsaPrivateKey = function(A) {
        return F0.create(F0.Class.UNIVERSAL, F0.Type.SEQUENCE, !0, [F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, F0.integerToDer(0).getBytes()), F0.create(F0.Class.UNIVERSAL, F0.Type.SEQUENCE, !0, [F0.create(F0.Class.UNIVERSAL, F0.Type.OID, !1, F0.oidToDer(V8.oids.rsaEncryption).getBytes()), F0.create(F0.Class.UNIVERSAL, F0.Type.NULL, !1, "")]), F0.create(F0.Class.UNIVERSAL, F0.Type.OCTETSTRING, !1, F0.toDer(A).getBytes())])
    };
    V8.privateKeyFromAsn1 = function(A) {
        var Q = {},
            B = [];
        if (F0.validate(A, Io8, Q, B)) A = F0.fromDer(T9.util.createBuffer(Q.privateKey));
        if (Q = {}, B = [], !F0.validate(A, Yo8, Q, B)) {
            var G = Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");
            throw G.errors = B, G
        }
        var Z, I, Y, J, W, X, F, V;
        return Z = T9.util.createBuffer(Q.privateKeyModulus).toHex(), I = T9.util.createBuffer(Q.privateKeyPublicExponent).toHex(), Y = T9.util.createBuffer(Q.privateKeyPrivateExponent).toHex(), J = T9.util.createBuffer(Q.privateKeyPrime1).toHex(), W = T9.util.createBuffer(Q.privateKeyPrime2).toHex(), X = T9.util.createBuffer(Q.privateKeyExponent1).toHex(), F = T9.util.createBuffer(Q.privateKeyExponent2).toHex(), V = T9.util.createBuffer(Q.privateKeyCoefficient).toHex(), V8.setRsaPrivateKey(new h5(Z, 16), new h5(I, 16), new h5(Y, 16), new h5(J, 16), new h5(W, 16), new h5(X, 16), new h5(F, 16), new h5(V, 16))
    };
    V8.privateKeyToAsn1 = V8.privateKeyToRSAPrivateKey = function(A) {
        return F0.create(F0.Class.UNIVERSAL, F0.Type.SEQUENCE, !0, [F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, F0.integerToDer(0).getBytes()), F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, z_(A.n)), F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, z_(A.e)), F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, z_(A.d)), F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, z_(A.p)), F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, z_(A.q)), F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, z_(A.dP)), F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, z_(A.dQ)), F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, z_(A.qInv))])
    };
    V8.publicKeyFromAsn1 = function(A) {
        var Q = {},
            B = [];
        if (F0.validate(A, Wo8, Q, B)) {
            var G = F0.derToOid(Q.publicKeyOid);
            if (G !== V8.oids.rsaEncryption) {
                var Z = Error("Cannot read public key. Unknown OID.");
                throw Z.oid = G, Z
            }
            A = Q.rsaPublicKey
        }
        if (B = [], !F0.validate(A, Jo8, Q, B)) {
            var Z = Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.");
            throw Z.errors = B, Z
        }
        var I = T9.util.createBuffer(Q.publicKeyModulus).toHex(),
            Y = T9.util.createBuffer(Q.publicKeyExponent).toHex();
        return V8.setRsaPublicKey(new h5(I, 16), new h5(Y, 16))
    };
    V8.publicKeyToAsn1 = V8.publicKeyToSubjectPublicKeyInfo = function(A) {
        return F0.create(F0.Class.UNIVERSAL, F0.Type.SEQUENCE, !0, [F0.create(F0.Class.UNIVERSAL, F0.Type.SEQUENCE, !0, [F0.create(F0.Class.UNIVERSAL, F0.Type.OID, !1, F0.oidToDer(V8.oids.rsaEncryption).getBytes()), F0.create(F0.Class.UNIVERSAL, F0.Type.NULL, !1, "")]), F0.create(F0.Class.UNIVERSAL, F0.Type.BITSTRING, !1, [V8.publicKeyToRSAPublicKey(A)])])
    };
    V8.publicKeyToRSAPublicKey = function(A) {
        return F0.create(F0.Class.UNIVERSAL, F0.Type.SEQUENCE, !0, [F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, z_(A.n)), F0.create(F0.Class.UNIVERSAL, F0.Type.INTEGER, !1, z_(A.e))])
    };

    function l4B(A, Q, B) {
        var G = T9.util.createBuffer(),
            Z = Math.ceil(Q.n.bitLength() / 8);
        if (A.length > Z - 11) {
            var I = Error("Message is too long for PKCS#1 v1.5 padding.");
            throw I.length = A.length, I.max = Z - 11, I
        }
        G.putByte(0), G.putByte(B);
        var Y = Z - 3 - A.length,
            J;
        if (B === 0 || B === 1) {
            J = B === 0 ? 0 : 255;
            for (var W = 0; W < Y; ++W) G.putByte(J)
        } else
            while (Y > 0) {
                var X = 0,
                    F = T9.random.getBytes(Y);
                for (var W = 0; W < Y; ++W)
                    if (J = F.charCodeAt(W), J === 0) ++X;
                    else G.putByte(J);
                Y = X
            }
        return G.putByte(0), G.putBytes(A), G
    }

    function wiA(A, Q, B, G) {
        var Z = Math.ceil(Q.n.bitLength() / 8),
            I = T9.util.createBuffer(A),
            Y = I.getByte(),
            J = I.getByte();
        if (Y !== 0 || B && J !== 0 && J !== 1 || !B && J != 2 || B && J === 0 && typeof G > "u") throw Error("Encryption block is invalid.");
        var W = 0;
        if (J === 0) {
            W = Z - 3 - G;
            for (var X = 0; X < W; ++X)
                if (I.getByte() !== 0) throw Error("Encryption block is invalid.")
        } else if (J === 1) {
            W = 0;
            while (I.length() > 1) {
                if (I.getByte() !== 255) {
                    --I.read;
                    break
                }++W
            }
        } else if (J === 2) {
            W = 0;
            while (I.length() > 1) {
                if (I.getByte() === 0) {
                    --I.read;
                    break
                }++W
            }
        }
        var F = I.getByte();
        if (F !== 0 || W !== Z - 3 - I.length()) throw Error("Encryption block is invalid.");
        return I.getBytes()
    }

    function Vo8(A, Q, B) {
        if (typeof Q === "function") B = Q, Q = {};
        Q = Q || {};
        var G = {
            algorithm: {
                name: Q.algorithm || "PRIMEINC",
                options: {
                    workers: Q.workers || 2,
                    workLoad: Q.workLoad || 100,
                    workerScript: Q.workerScript
                }
            }
        };
        if ("prng" in Q) G.prng = Q.prng;
        Z();

        function Z() {
            I(A.pBits, function(J, W) {
                if (J) return B(J);
                if (A.p = W, A.q !== null) return Y(J, A.q);
                I(A.qBits, Y)
            })
        }

        function I(J, W) {
            T9.prime.generateProbablePrime(J, G, W)
        }

        function Y(J, W) {
            if (J) return B(J);
            if (A.q = W, A.p.compareTo(A.q) < 0) {
                var X = A.p;
                A.p = A.q, A.q = X
            }
            if (A.p.subtract(h5.ONE).gcd(A.e).compareTo(h5.ONE) !== 0) {
                A.p = null, Z();
                return
            }
            if (A.q.subtract(h5.ONE).gcd(A.e).compareTo(h5.ONE) !== 0) {
                A.q = null, I(A.qBits, Y);
                return
            }
            if (A.p1 = A.p.subtract(h5.ONE), A.q1 = A.q.subtract(h5.ONE), A.phi = A.p1.multiply(A.q1), A.phi.gcd(A.e).compareTo(h5.ONE) !== 0) {
                A.p = A.q = null, Z();
                return
            }
            if (A.n = A.p.multiply(A.q), A.n.bitLength() !== A.bits) {
                A.q = null, I(A.qBits, Y);
                return
            }
            var F = A.e.modInverse(A.phi);
            A.keys = {
                privateKey: V8.rsa.setPrivateKey(A.n, A.e, F, A.p, A.q, F.mod(A.p1), F.mod(A.q1), A.q.modInverse(A.p)),
                publicKey: V8.rsa.setPublicKey(A.n, A.e)
            }, B(null, A.keys)
        }
    }

    function z_(A) {
        var Q = A.toString(16);
        if (Q[0] >= "8") Q = "00" + Q;
        var B = T9.util.hexToBytes(Q);
        if (B.length > 1 && (B.charCodeAt(0) === 0 && (B.charCodeAt(1) & 128) === 0 || B.charCodeAt(0) === 255 && (B.charCodeAt(1) & 128) === 128)) return B.substr(1);
        return B
    }

    function Ko8(A) {
        if (A <= 100) return 27;
        if (A <= 150) return 18;
        if (A <= 200) return 15;
        if (A <= 250) return 12;
        if (A <= 300) return 9;
        if (A <= 350) return 8;
        if (A <= 400) return 7;
        if (A <= 500) return 6;
        if (A <= 600) return 5;
        if (A <= 800) return 4;
        if (A <= 1250) return 3;
        return 2
    }

    function u4B(A) {
        return T9.util.isNodejs && typeof Vv1[A] === "function"
    }

    function m4B(A) {
        return typeof rL.globalScope < "u" && typeof rL.globalScope.crypto === "object" && typeof rL.globalScope.crypto.subtle === "object" && typeof rL.globalScope.crypto.subtle[A] === "function"
    }

    function d4B(A) {
        return typeof rL.globalScope < "u" && typeof rL.globalScope.msCrypto === "object" && typeof rL.globalScope.msCrypto.subtle === "object" && typeof rL.globalScope.msCrypto.subtle[A] === "function"
    }

    function c4B(A) {
        var Q = T9.util.hexToBytes(A.toString(16)),
            B = new Uint8Array(Q.length);
        for (var G = 0; G < Q.length; ++G) B[G] = Q.charCodeAt(G);
        return B
    }
});
var Dv1 = U((qT7, r4B) => {
    var gB = n8();
    Rc();
    GT();
    OzA();
    F_();
    Tc();
    CiA();
    io();
    aL();
    Gv1();
    PzA();
    P3();
    if (typeof Kv1 > "u") Kv1 = gB.jsbn.BigInteger;
    var Kv1, k0 = gB.asn1,
        h8 = gB.pki = gB.pki || {};
    r4B.exports = h8.pbe = gB.pbe = gB.pbe || {};
    var so = h8.oids,
        Do8 = {
            name: "EncryptedPrivateKeyInfo",
            tagClass: k0.Class.UNIVERSAL,
            type: k0.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
                tagClass: k0.Class.UNIVERSAL,
                type: k0.Type.SEQUENCE,
                constructed: !0,
                value: [{
                    name: "AlgorithmIdentifier.algorithm",
                    tagClass: k0.Class.UNIVERSAL,
                    type: k0.Type.OID,
                    constructed: !1,
                    capture: "encryptionOid"
                }, {
                    name: "AlgorithmIdentifier.parameters",
                    tagClass: k0.Class.UNIVERSAL,
                    type: k0.Type.SEQUENCE,
                    constructed: !0,
                    captureAsn1: "encryptionParams"
                }]
            }, {
                name: "EncryptedPrivateKeyInfo.encryptedData",
                tagClass: k0.Class.UNIVERSAL,
                type: k0.Type.OCTETSTRING,
                constructed: !1,
                capture: "encryptedData"
            }]
        },
        Ho8 = {
            name: "PBES2Algorithms",
            tagClass: k0.Class.UNIVERSAL,
            type: k0.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "PBES2Algorithms.keyDerivationFunc",
                tagClass: k0.Class.UNIVERSAL,
                type: k0.Type.SEQUENCE,
                constructed: !0,
                value: [{
                    name: "PBES2Algorithms.keyDerivationFunc.oid",
                    tagClass: k0.Class.UNIVERSAL,
                    type: k0.Type.OID,
                    constructed: !1,
                    capture: "kdfOid"
                }, {
                    name: "PBES2Algorithms.params",
                    tagClass: k0.Class.UNIVERSAL,
                    type: k0.Type.SEQUENCE,
                    constructed: !0,
                    value: [{
                        name: "PBES2Algorithms.params.salt",
                        tagClass: k0.Class.UNIVERSAL,
                        type: k0.Type.OCTETSTRING,
                        constructed: !1,
                        capture: "kdfSalt"
                    }, {
                        name: "PBES2Algorithms.params.iterationCount",
                        tagClass: k0.Class.UNIVERSAL,
                        type: k0.Type.INTEGER,
                        constructed: !1,
                        capture: "kdfIterationCount"
                    }, {
                        name: "PBES2Algorithms.params.keyLength",
                        tagClass: k0.Class.UNIVERSAL,
                        type: k0.Type.INTEGER,
                        constructed: !1,
                        optional: !0,
                        capture: "keyLength"
                    }, {
                        name: "PBES2Algorithms.params.prf",
                        tagClass: k0.Class.UNIVERSAL,
                        type: k0.Type.SEQUENCE,
                        constructed: !0,
                        optional: !0,
                        value: [{
                            name: "PBES2Algorithms.params.prf.algorithm",
                            tagClass: k0.Class.UNIVERSAL,
                            type: k0.Type.OID,
                            constructed: !1,
                            capture: "prfOid"
                        }]
                    }]
                }]
            }, {
                name: "PBES2Algorithms.encryptionScheme",
                tagClass: k0.Class.UNIVERSAL,
                type: k0.Type.SEQUENCE,
                constructed: !0,
                value: [{
                    name: "PBES2Algorithms.encryptionScheme.oid",
                    tagClass: k0.Class.UNIVERSAL,
                    type: k0.Type.OID,
                    constructed: !1,
                    capture: "encOid"
                }, {
                    name: "PBES2Algorithms.encryptionScheme.iv",
                    tagClass: k0.Class.UNIVERSAL,
                    type: k0.Type.OCTETSTRING,
                    constructed: !1,
                    capture: "encIv"
                }]
            }]
        },
        Co8 = {
            name: "pkcs-12PbeParams",
            tagClass: k0.Class.UNIVERSAL,
            type: k0.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "pkcs-12PbeParams.salt",
                tagClass: k0.Class.UNIVERSAL,
                type: k0.Type.OCTETSTRING,
                constructed: !1,
                capture: "salt"
            }, {
                name: "pkcs-12PbeParams.iterations",
                tagClass: k0.Class.UNIVERSAL,
                type: k0.Type.INTEGER,
                constructed: !1,
                capture: "iterations"
            }]
        };
    h8.encryptPrivateKeyInfo = function(A, Q, B) {
        B = B || {}, B.saltSize = B.saltSize || 8, B.count = B.count || 2048, B.algorithm = B.algorithm || "aes128", B.prfAlgorithm = B.prfAlgorithm || "sha1";
        var G = gB.random.getBytesSync(B.saltSize),
            Z = B.count,
            I = k0.integerToDer(Z),
            Y, J, W;
        if (B.algorithm.indexOf("aes") === 0 || B.algorithm === "des") {
            var X, F, V;
            switch (B.algorithm) {
                case "aes128":
                    Y = 16, X = 16, F = so["aes128-CBC"], V = gB.aes.createEncryptionCipher;
                    break;
                case "aes192":
                    Y = 24, X = 16, F = so["aes192-CBC"], V = gB.aes.createEncryptionCipher;
                    break;
                case "aes256":
                    Y = 32, X = 16, F = so["aes256-CBC"], V = gB.aes.createEncryptionCipher;
                    break;
                case "des":
                    Y = 8, X = 8, F = so.desCBC, V = gB.des.createEncryptionCipher;
                    break;
                default:
                    var K = Error("Cannot encrypt private key. Unknown encryption algorithm.");
                    throw K.algorithm = B.algorithm, K
            }
            var D = "hmacWith" + B.prfAlgorithm.toUpperCase(),
                H = s4B(D),
                C = gB.pkcs5.pbkdf2(Q, G, Z, Y, H),
                E = gB.random.getBytesSync(X),
                z = V(C);
            z.start(E), z.update(k0.toDer(A)), z.finish(), W = z.output.getBytes();
            var w = Eo8(G, I, Y, D);
            J = k0.create(k0.Class.UNIVERSAL, k0.Type.SEQUENCE, !0, [k0.create(k0.Class.UNIVERSAL, k0.Type.OID, !1, k0.oidToDer(so.pkcs5PBES2).getBytes()), k0.create(k0.Class.UNIVERSAL, k0.Type.SEQUENCE, !0, [k0.create(k0.Class.UNIVERSAL, k0.Type.SEQUENCE, !0, [k0.create(k0.Class.UNIVERSAL, k0.Type.OID, !1, k0.oidToDer(so.pkcs5PBKDF2).getBytes()), w]), k0.create(k0.Class.UNIVERSAL, k0.Type.SEQUENCE, !0, [k0.create(k0.Class.UNIVERSAL, k0.Type.OID, !1, k0.oidToDer(F).getBytes()), k0.create(k0.Class.UNIVERSAL, k0.Type.OCTETSTRING, !1, E)])])])
        } else if (B.algorithm === "3des") {
            Y = 24;
            var N = new gB.util.ByteBuffer(G),
                C = h8.pbe.generatePkcs12Key(Q, N, 1, Z, Y),
                E = h8.pbe.generatePkcs12Key(Q, N, 2, Z, Y),
                z = gB.des.createEncryptionCipher(C);
            z.start(E), z.update(k0.toDer(A)), z.finish(), W = z.output.getBytes(), J = k0.create(k0.Class.UNIVERSAL, k0.Type.SEQUENCE, !0, [k0.create(k0.Class.UNIVERSAL, k0.Type.OID, !1, k0.oidToDer(so["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()), k0.create(k0.Class.UNIVERSAL, k0.Type.SEQUENCE, !0, [k0.create(k0.Class.UNIVERSAL, k0.Type.OCTETSTRING, !1, G), k0.create(k0.Class.UNIVERSAL, k0.Type.INTEGER, !1, I.getBytes())])])
        } else {
            var K = Error("Cannot encrypt private key. Unknown encryption algorithm.");
            throw K.algorithm = B.algorithm, K
        }
        var q = k0.create(k0.Class.UNIVERSAL, k0.Type.SEQUENCE, !0, [J, k0.create(k0.Class.UNIVERSAL, k0.Type.OCTETSTRING, !1, W)]);
        return q
    };
    h8.decryptPrivateKeyInfo = function(A, Q) {
        var B = null,
            G = {},
            Z = [];
        if (!k0.validate(A, Do8, G, Z)) {
            var I = Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
            throw I.errors = Z, I
        }
        var Y = k0.derToOid(G.encryptionOid),
            J = h8.pbe.getCipher(Y, G.encryptionParams, Q),
            W = gB.util.createBuffer(G.encryptedData);
        if (J.update(W), J.finish()) B = k0.fromDer(J.output);
        return B
    };
    h8.encryptedPrivateKeyToPem = function(A, Q) {
        var B = {
            type: "ENCRYPTED PRIVATE KEY",
            body: k0.toDer(A).getBytes()
        };
        return gB.pem.encode(B, {
            maxline: Q
        })
    };
    h8.encryptedPrivateKeyFromPem = function(A) {
        var Q = gB.pem.decode(A)[0];
        if (Q.type !== "ENCRYPTED PRIVATE KEY") {
            var B = Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');
            throw B.headerType = Q.type, B
        }
        if (Q.procType && Q.procType.type === "ENCRYPTED") throw Error("Could not convert encrypted private key from PEM; PEM is encrypted.");
        return k0.fromDer(Q.body)
    };
    h8.encryptRsaPrivateKey = function(A, Q, B) {
        if (B = B || {}, !B.legacy) {
            var G = h8.wrapRsaPrivateKey(h8.privateKeyToAsn1(A));
            return G = h8.encryptPrivateKeyInfo(G, Q, B), h8.encryptedPrivateKeyToPem(G)
        }
        var Z, I, Y, J;
        switch (B.algorithm) {
            case "aes128":
                Z = "AES-128-CBC", Y = 16, I = gB.random.getBytesSync(16), J = gB.aes.createEncryptionCipher;
                break;
            case "aes192":
                Z = "AES-192-CBC", Y = 24, I = gB.random.getBytesSync(16), J = gB.aes.createEncryptionCipher;
                break;
            case "aes256":
                Z = "AES-256-CBC", Y = 32, I = gB.random.getBytesSync(16), J = gB.aes.createEncryptionCipher;
                break;
            case "3des":
                Z = "DES-EDE3-CBC", Y = 24, I = gB.random.getBytesSync(8), J = gB.des.createEncryptionCipher;
                break;
            case "des":
                Z = "DES-CBC", Y = 8, I = gB.random.getBytesSync(8), J = gB.des.createEncryptionCipher;
                break;
            default:
                var W = Error('Could not encrypt RSA private key; unsupported encryption algorithm "' + B.algorithm + '".');
                throw W.algorithm = B.algorithm, W
        }
        var X = gB.pbe.opensslDeriveBytes(Q, I.substr(0, 8), Y),
            F = J(X);
        F.start(I), F.update(k0.toDer(h8.privateKeyToAsn1(A))), F.finish();
        var V = {
            type: "RSA PRIVATE KEY",
            procType: {
                version: "4",
                type: "ENCRYPTED"
            },
            dekInfo: {
                algorithm: Z,
                parameters: gB.util.bytesToHex(I).toUpperCase()
            },
            body: F.output.getBytes()
        };
        return gB.pem.encode(V)
    };
    h8.decryptRsaPrivateKey = function(A, Q) {
        var B = null,
            G = gB.pem.decode(A)[0];
        if (G.type !== "ENCRYPTED PRIVATE KEY" && G.type !== "PRIVATE KEY" && G.type !== "RSA PRIVATE KEY") {
            var Z = Error('Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".');
            throw Z.headerType = Z, Z
        }
        if (G.procType && G.procType.type === "ENCRYPTED") {
            var I, Y;
            switch (G.dekInfo.algorithm) {
                case "DES-CBC":
                    I = 8, Y = gB.des.createDecryptionCipher;
                    break;
                case "DES-EDE3-CBC":
                    I = 24, Y = gB.des.createDecryptionCipher;
                    break;
                case "AES-128-CBC":
                    I = 16, Y = gB.aes.createDecryptionCipher;
                    break;
                case "AES-192-CBC":
                    I = 24, Y = gB.aes.createDecryptionCipher;
                    break;
                case "AES-256-CBC":
                    I = 32, Y = gB.aes.createDecryptionCipher;
                    break;
                case "RC2-40-CBC":
                    I = 5, Y = function(V) {
                        return gB.rc2.createDecryptionCipher(V, 40)
                    };
                    break;
                case "RC2-64-CBC":
                    I = 8, Y = function(V) {
                        return gB.rc2.createDecryptionCipher(V, 64)
                    };
                    break;
                case "RC2-128-CBC":
                    I = 16, Y = function(V) {
                        return gB.rc2.createDecryptionCipher(V, 128)
                    };
                    break;
                default:
                    var Z = Error('Could not decrypt private key; unsupported encryption algorithm "' + G.dekInfo.algorithm + '".');
                    throw Z.algorithm = G.dekInfo.algorithm, Z
            }
            var J = gB.util.hexToBytes(G.dekInfo.parameters),
                W = gB.pbe.opensslDeriveBytes(Q, J.substr(0, 8), I),
                X = Y(W);
            if (X.start(J), X.update(gB.util.createBuffer(G.body)), X.finish()) B = X.output.getBytes();
            else return B
        } else B = G.body;
        if (G.type === "ENCRYPTED PRIVATE KEY") B = h8.decryptPrivateKeyInfo(k0.fromDer(B), Q);
        else B = k0.fromDer(B);
        if (B !== null) B = h8.privateKeyFromAsn1(B);
        return B
    };
    h8.pbe.generatePkcs12Key = function(A, Q, B, G, Z, I) {
        var Y, J;
        if (typeof I > "u" || I === null) {
            if (!("sha1" in gB.md)) throw Error('"sha1" hash algorithm unavailable.');
            I = gB.md.sha1.create()
        }
        var {
            digestLength: W,
            blockLength: X
        } = I, F = new gB.util.ByteBuffer, V = new gB.util.ByteBuffer;
        if (A !== null && A !== void 0) {
            for (J = 0; J < A.length; J++) V.putInt16(A.charCodeAt(J));
            V.putInt16(0)
        }
        var K = V.length(),
            D = Q.length(),
            H = new gB.util.ByteBuffer;
        H.fillWithByte(B, X);
        var C = X * Math.ceil(D / X),
            E = new gB.util.ByteBuffer;
        for (J = 0; J < C; J++) E.putByte(Q.at(J % D));
        var z = X * Math.ceil(K / X),
            w = new gB.util.ByteBuffer;
        for (J = 0; J < z; J++) w.putByte(V.at(J % K));
        var N = E;
        N.putBuffer(w);
        var q = Math.ceil(Z / W);
        for (var R = 1; R <= q; R++) {
            var P = new gB.util.ByteBuffer;
            P.putBytes(H.bytes()), P.putBytes(N.bytes());
            for (var y = 0; y < G; y++) I.start(), I.update(P.getBytes()), P = I.digest();
            var v = new gB.util.ByteBuffer;
            for (J = 0; J < X; J++) v.putByte(P.at(J % W));
            var x = Math.ceil(D / X) + Math.ceil(K / X),
                p = new gB.util.ByteBuffer;
            for (Y = 0; Y < x; Y++) {
                var u = new gB.util.ByteBuffer(N.getBytes(X)),
                    o = 511;
                for (J = v.length() - 1; J >= 0; J--) o = o >> 8, o += v.at(J) + u.at(J), u.setAt(J, o & 255);
                p.putBuffer(u)
            }
            N = p, F.putBuffer(P)
        }
        return F.truncate(F.length() - Z), F
    };
    h8.pbe.getCipher = function(A, Q, B) {
        switch (A) {
            case h8.oids.pkcs5PBES2:
                return h8.pbe.getCipherForPBES2(A, Q, B);
            case h8.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
            case h8.oids["pbewithSHAAnd40BitRC2-CBC"]:
                return h8.pbe.getCipherForPKCS12PBE(A, Q, B);
            default:
                var G = Error("Cannot read encrypted PBE data block. Unsupported OID.");
                throw G.oid = A, G.supportedOids = ["pkcs5PBES2", "pbeWithSHAAnd3-KeyTripleDES-CBC", "pbewithSHAAnd40BitRC2-CBC"], G
        }
    };
    h8.pbe.getCipherForPBES2 = function(A, Q, B) {
        var G = {},
            Z = [];
        if (!k0.validate(Q, Ho8, G, Z)) {
            var I = Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
            throw I.errors = Z, I
        }
        if (A = k0.derToOid(G.kdfOid), A !== h8.oids.pkcs5PBKDF2) {
            var I = Error("Cannot read encrypted private key. Unsupported key derivation function OID.");
            throw I.oid = A, I.supportedOids = ["pkcs5PBKDF2"], I
        }
        if (A = k0.derToOid(G.encOid), A !== h8.oids["aes128-CBC"] && A !== h8.oids["aes192-CBC"] && A !== h8.oids["aes256-CBC"] && A !== h8.oids["des-EDE3-CBC"] && A !== h8.oids.desCBC) {
            var I = Error("Cannot read encrypted private key. Unsupported encryption scheme OID.");
            throw I.oid = A, I.supportedOids = ["aes128-CBC", "aes192-CBC", "aes256-CBC", "des-EDE3-CBC", "desCBC"], I
        }
        var Y = G.kdfSalt,
            J = gB.util.createBuffer(G.kdfIterationCount);
        J = J.getInt(J.length() << 3);
        var W, X;
        switch (h8.oids[A]) {
            case "aes128-CBC":
                W = 16, X = gB.aes.createDecryptionCipher;
                break;
            case "aes192-CBC":
                W = 24, X = gB.aes.createDecryptionCipher;
                break;
            case "aes256-CBC":
                W = 32, X = gB.aes.createDecryptionCipher;
                break;
            case "des-EDE3-CBC":
                W = 24, X = gB.des.createDecryptionCipher;
                break;
            case "desCBC":
                W = 8, X = gB.des.createDecryptionCipher;
                break
        }
        var F = a4B(G.prfOid),
            V = gB.pkcs5.pbkdf2(B, Y, J, W, F),
            K = G.encIv,
            D = X(V);
        return D.start(K), D
    };
    h8.pbe.getCipherForPKCS12PBE = function(A, Q, B) {
        var G = {},
            Z = [];
        if (!k0.validate(Q, Co8, G, Z)) {
            var I = Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
            throw I.errors = Z, I
        }
        var Y = gB.util.createBuffer(G.salt),
            J = gB.util.createBuffer(G.iterations);
        J = J.getInt(J.length() << 3);
        var W, X, F;
        switch (A) {
            case h8.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
                W = 24, X = 8, F = gB.des.startDecrypting;
                break;
            case h8.oids["pbewithSHAAnd40BitRC2-CBC"]:
                W = 5, X = 8, F = function(C, E) {
                    var z = gB.rc2.createDecryptionCipher(C, 40);
                    return z.start(E, null), z
                };
                break;
            default:
                var I = Error("Cannot read PKCS #12 PBE data block. Unsupported OID.");
                throw I.oid = A, I
        }
        var V = a4B(G.prfOid),
            K = h8.pbe.generatePkcs12Key(B, Y, 1, J, W, V);
        V.start();
        var D = h8.pbe.generatePkcs12Key(B, Y, 2, J, X, V);
        return F(K, D)
    };
    h8.pbe.opensslDeriveBytes = function(A, Q, B, G) {
        if (typeof G > "u" || G === null) {
            if (!("md5" in gB.md)) throw Error('"md5" hash algorithm unavailable.');
            G = gB.md.md5.create()
        }
        if (Q === null) Q = "";
        var Z = [n4B(G, A + Q)];
        for (var I = 16, Y = 1; I < B; ++Y, I += 16) Z.push(n4B(G, Z[Y - 1] + A + Q));
        return Z.join("").substr(0, B)
    };

    function n4B(A, Q) {
        return A.start().update(Q).digest().getBytes()
    }

    function a4B(A) {
        var Q;
        if (!A) Q = "hmacWithSHA1";
        else if (Q = h8.oids[k0.derToOid(A)], !Q) {
            var B = Error("Unsupported PRF OID.");
            throw B.oid = A, B.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"], B
        }
        return s4B(Q)
    }

    function s4B(A) {
        var Q = gB.md;
        switch (A) {
            case "hmacWithSHA224":
                Q = gB.md.sha512;
            case "hmacWithSHA1":
            case "hmacWithSHA256":
            case "hmacWithSHA384":
            case "hmacWithSHA512":
                A = A.substr(8).toLowerCase();
                break;
            default:
                var B = Error("Unsupported PRF algorithm.");
                throw B.algorithm = A, B.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"], B
        }
        if (!Q || !(A in Q)) throw Error("Unknown hash algorithm: " + A);
        return Q[A].create()
    }

    function Eo8(A, Q, B, G) {
        var Z = k0.create(k0.Class.UNIVERSAL, k0.Type.SEQUENCE, !0, [k0.create(k0.Class.UNIVERSAL, k0.Type.OCTETSTRING, !1, A), k0.create(k0.Class.UNIVERSAL, k0.Type.INTEGER, !1, Q.getBytes())]);
        if (G !== "hmacWithSHA1") Z.value.push(k0.create(k0.Class.UNIVERSAL, k0.Type.INTEGER, !1, gB.util.hexToBytes(B.toString(16))), k0.create(k0.Class.UNIVERSAL, k0.Type.SEQUENCE, !0, [k0.create(k0.Class.UNIVERSAL, k0.Type.OID, !1, k0.oidToDer(h8.oids[G]).getBytes()), k0.create(k0.Class.UNIVERSAL, k0.Type.NULL, !1, "")]));
        return Z
    }
});
var Hv1 = U((NT7, e4B) => {
    var x3A = n8();
    GT();
    P3();
    var _B = x3A.asn1,
        v3A = e4B.exports = x3A.pkcs7asn1 = x3A.pkcs7asn1 || {};
    x3A.pkcs7 = x3A.pkcs7 || {};
    x3A.pkcs7.asn1 = v3A;
    var o4B = {
        name: "ContentInfo",
        tagClass: _B.Class.UNIVERSAL,
        type: _B.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "ContentInfo.ContentType",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.OID,
            constructed: !1,
            capture: "contentType"
        }, {
            name: "ContentInfo.content",
            tagClass: _B.Class.CONTEXT_SPECIFIC,
            type: 0,
            constructed: !0,
            optional: !0,
            captureAsn1: "content"
        }]
    };
    v3A.contentInfoValidator = o4B;
    var t4B = {
        name: "EncryptedContentInfo",
        tagClass: _B.Class.UNIVERSAL,
        type: _B.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "EncryptedContentInfo.contentType",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.OID,
            constructed: !1,
            capture: "contentType"
        }, {
            name: "EncryptedContentInfo.contentEncryptionAlgorithm",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
                tagClass: _B.Class.UNIVERSAL,
                type: _B.Type.OID,
                constructed: !1,
                capture: "encAlgorithm"
            }, {
                name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
                tagClass: _B.Class.UNIVERSAL,
                captureAsn1: "encParameter"
            }]
        }, {
            name: "EncryptedContentInfo.encryptedContent",
            tagClass: _B.Class.CONTEXT_SPECIFIC,
            type: 0,
            capture: "encryptedContent",
            captureAsn1: "encryptedContentAsn1"
        }]
    };
    v3A.envelopedDataValidator = {
        name: "EnvelopedData",
        tagClass: _B.Class.UNIVERSAL,
        type: _B.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "EnvelopedData.Version",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.INTEGER,
            constructed: !1,
            capture: "version"
        }, {
            name: "EnvelopedData.RecipientInfos",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.SET,
            constructed: !0,
            captureAsn1: "recipientInfos"
        }].concat(t4B)
    };
    v3A.encryptedDataValidator = {
        name: "EncryptedData",
        tagClass: _B.Class.UNIVERSAL,
        type: _B.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "EncryptedData.Version",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.INTEGER,
            constructed: !1,
            capture: "version"
        }].concat(t4B)
    };
    var zo8 = {
        name: "SignerInfo",
        tagClass: _B.Class.UNIVERSAL,
        type: _B.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "SignerInfo.version",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.INTEGER,
            constructed: !1
        }, {
            name: "SignerInfo.issuerAndSerialNumber",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "SignerInfo.issuerAndSerialNumber.issuer",
                tagClass: _B.Class.UNIVERSAL,
                type: _B.Type.SEQUENCE,
                constructed: !0,
                captureAsn1: "issuer"
            }, {
                name: "SignerInfo.issuerAndSerialNumber.serialNumber",
                tagClass: _B.Class.UNIVERSAL,
                type: _B.Type.INTEGER,
                constructed: !1,
                capture: "serial"
            }]
        }, {
            name: "SignerInfo.digestAlgorithm",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "SignerInfo.digestAlgorithm.algorithm",
                tagClass: _B.Class.UNIVERSAL,
                type: _B.Type.OID,
                constructed: !1,
                capture: "digestAlgorithm"
            }, {
                name: "SignerInfo.digestAlgorithm.parameter",
                tagClass: _B.Class.UNIVERSAL,
                constructed: !1,
                captureAsn1: "digestParameter",
                optional: !0
            }]
        }, {
            name: "SignerInfo.authenticatedAttributes",
            tagClass: _B.Class.CONTEXT_SPECIFIC,
            type: 0,
            constructed: !0,
            optional: !0,
            capture: "authenticatedAttributes"
        }, {
            name: "SignerInfo.digestEncryptionAlgorithm",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.SEQUENCE,
            constructed: !0,
            capture: "signatureAlgorithm"
        }, {
            name: "SignerInfo.encryptedDigest",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.OCTETSTRING,
            constructed: !1,
            capture: "signature"
        }, {
            name: "SignerInfo.unauthenticatedAttributes",
            tagClass: _B.Class.CONTEXT_SPECIFIC,
            type: 1,
            constructed: !0,
            optional: !0,
            capture: "unauthenticatedAttributes"
        }]
    };
    v3A.signedDataValidator = {
        name: "SignedData",
        tagClass: _B.Class.UNIVERSAL,
        type: _B.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "SignedData.Version",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.INTEGER,
            constructed: !1,
            capture: "version"
        }, {
            name: "SignedData.DigestAlgorithms",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.SET,
            constructed: !0,
            captureAsn1: "digestAlgorithms"
        }, o4B, {
            name: "SignedData.Certificates",
            tagClass: _B.Class.CONTEXT_SPECIFIC,
            type: 0,
            optional: !0,
            captureAsn1: "certificates"
        }, {
            name: "SignedData.CertificateRevocationLists",
            tagClass: _B.Class.CONTEXT_SPECIFIC,
            type: 1,
            optional: !0,
            captureAsn1: "crls"
        }, {
            name: "SignedData.SignerInfos",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.SET,
            capture: "signerInfos",
            optional: !0,
            value: [zo8]
        }]
    };
    v3A.recipientInfoValidator = {
        name: "RecipientInfo",
        tagClass: _B.Class.UNIVERSAL,
        type: _B.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "RecipientInfo.version",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.INTEGER,
            constructed: !1,
            capture: "version"
        }, {
            name: "RecipientInfo.issuerAndSerial",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "RecipientInfo.issuerAndSerial.issuer",
                tagClass: _B.Class.UNIVERSAL,
                type: _B.Type.SEQUENCE,
                constructed: !0,
                captureAsn1: "issuer"
            }, {
                name: "RecipientInfo.issuerAndSerial.serialNumber",
                tagClass: _B.Class.UNIVERSAL,
                type: _B.Type.INTEGER,
                constructed: !1,
                capture: "serial"
            }]
        }, {
            name: "RecipientInfo.keyEncryptionAlgorithm",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
                tagClass: _B.Class.UNIVERSAL,
                type: _B.Type.OID,
                constructed: !1,
                capture: "encAlgorithm"
            }, {
                name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
                tagClass: _B.Class.UNIVERSAL,
                constructed: !1,
                captureAsn1: "encParameter",
                optional: !0
            }]
        }, {
            name: "RecipientInfo.encryptedKey",
            tagClass: _B.Class.UNIVERSAL,
            type: _B.Type.OCTETSTRING,
            constructed: !1,
            capture: "encKey"
        }]
    }
});
var Cv1 = U((LT7, A8B) => {
    var ro = n8();
    P3();
    ro.mgf = ro.mgf || {};
    var Uo8 = A8B.exports = ro.mgf.mgf1 = ro.mgf1 = ro.mgf1 || {};
    Uo8.create = function(A) {
        var Q = {
            generate: function(B, G) {
                var Z = new ro.util.ByteBuffer,
                    I = Math.ceil(G / A.digestLength);
                for (var Y = 0; Y < I; Y++) {
                    var J = new ro.util.ByteBuffer;
                    J.putInt32(Y), A.start(), A.update(B + J.getBytes()), Z.putBuffer(A.digest())
                }
                return Z.truncate(Z.length() - G), Z.getBytes()
            }
        };
        return Q
    }
});
var B8B = U((MT7, Q8B) => {
    var qiA = n8();
    Cv1();
    Q8B.exports = qiA.mgf = qiA.mgf || {};
    qiA.mgf.mgf1 = qiA.mgf1
});
var NiA = U((OT7, G8B) => {
    var oo = n8();
    aL();
    P3();
    var $o8 = G8B.exports = oo.pss = oo.pss || {};
    $o8.create = function(A) {
        if (arguments.length === 3) A = {
            md: arguments[0],
            mgf: arguments[1],
            saltLength: arguments[2]
        };
        var {
            md: Q,
            mgf: B
        } = A, G = Q.digestLength, Z = A.salt || null;
        if (typeof Z === "string") Z = oo.util.createBuffer(Z);
        var I;
        if ("saltLength" in A) I = A.saltLength;
        else if (Z !== null) I = Z.length();
        else throw Error("Salt length not specified or specific salt not given.");
        if (Z !== null && Z.length() !== I) throw Error("Given salt length does not match length of given salt.");
        var Y = A.prng || oo.random,
            J = {};
        return J.encode = function(W, X) {
            var F, V = X - 1,
                K = Math.ceil(V / 8),
                D = W.digest().getBytes();
            if (K < G + I + 2) throw Error("Message is too long to encrypt.");
            var H;
            if (Z === null) H = Y.getBytesSync(I);
            else H = Z.bytes();
            var C = new oo.util.ByteBuffer;
            C.fillWithByte(0, 8), C.putBytes(D), C.putBytes(H), Q.start(), Q.update(C.getBytes());
            var E = Q.digest().getBytes(),
                z = new oo.util.ByteBuffer;
            z.fillWithByte(0, K - I - G - 2), z.putByte(1), z.putBytes(H);
            var w = z.getBytes(),
                N = K - G - 1,
                q = B.generate(E, N),
                R = "";
            for (F = 0; F < N; F++) R += String.fromCharCode(w.charCodeAt(F) ^ q.charCodeAt(F));
            var P = 65280 >> 8 * K - V & 255;
            return R = String.fromCharCode(R.charCodeAt(0) & ~P) + R.substr(1), R + E + String.fromCharCode(188)
        }, J.verify = function(W, X, F) {
            var V, K = F - 1,
                D = Math.ceil(K / 8);
            if (X = X.substr(-D), D < G + I + 2) throw Error("Inconsistent parameters to PSS signature verification.");
            if (X.charCodeAt(D - 1) !== 188) throw Error("Encoded message does not end in 0xBC.");
            var H = D - G - 1,
                C = X.substr(0, H),
                E = X.substr(H, G),
                z = 65280 >> 8 * D - K & 255;
            if ((C.charCodeAt(0) & z) !== 0) throw Error("Bits beyond keysize not zero as expected.");
            var w = B.generate(E, H),
                N = "";
            for (V = 0; V < H; V++) N += String.fromCharCode(C.charCodeAt(V) ^ w.charCodeAt(V));
            N = String.fromCharCode(N.charCodeAt(0) & ~z) + N.substr(1);
            var q = D - G - I - 2;
            for (V = 0; V < q; V++)
                if (N.charCodeAt(V) !== 0) throw Error("Leftmost octets not zero as expected");
            if (N.charCodeAt(q) !== 1) throw Error("Inconsistent PSS signature, 0x01 marker not found");
            var R = N.substr(-I),
                P = new oo.util.ByteBuffer;
            P.fillWithByte(0, 8), P.putBytes(W), P.putBytes(R), Q.start(), Q.update(P.getBytes());
            var y = Q.digest().getBytes();
            return E === y
        }, J
    }
});
var OiA = U((RT7, W8B) => {
    var P9 = n8();
    Rc();
    GT();
    OzA();
    F_();
    B8B();
    Tc();
    io();
    NiA();
    PzA();
    P3();
    var fA = P9.asn1,
        sQ = W8B.exports = P9.pki = P9.pki || {},
        G3 = sQ.oids,
        NJ = {};
    NJ.CN = G3.commonName;
    NJ.commonName = "CN";
    NJ.C = G3.countryName;
    NJ.countryName = "C";
    NJ.L = G3.localityName;
    NJ.localityName = "L";
    NJ.ST = G3.stateOrProvinceName;
    NJ.stateOrProvinceName = "ST";
    NJ.O = G3.organizationName;
    NJ.organizationName = "O";
    NJ.OU = G3.organizationalUnitName;
    NJ.organizationalUnitName = "OU";
    NJ.E = G3.emailAddress;
    NJ.emailAddress = "E";
    var I8B = P9.pki.rsa.publicKeyValidator,
        wo8 = {
            name: "Certificate",
            tagClass: fA.Class.UNIVERSAL,
            type: fA.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "Certificate.TBSCertificate",
                tagClass: fA.Class.UNIVERSAL,
                type: fA.Type.SEQUENCE,
                constructed: !0,
                captureAsn1: "tbsCertificate",
                value: [{
                    name: "Certificate.TBSCertificate.version",
                    tagClass: fA.Class.CONTEXT_SPECIFIC,
                    type: 0,
                    constructed: !0,
                    optional: !0,
                    value: [{
                        name: "Certificate.TBSCertificate.version.integer",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.INTEGER,
                        constructed: !1,
                        capture: "certVersion"
                    }]
                }, {
                    name: "Certificate.TBSCertificate.serialNumber",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Type.INTEGER,
                    constructed: !1,
                    capture: "certSerialNumber"
                }, {
                    name: "Certificate.TBSCertificate.signature",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Type.SEQUENCE,
                    constructed: !0,
                    value: [{
                        name: "Certificate.TBSCertificate.signature.algorithm",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.OID,
                        constructed: !1,
                        capture: "certinfoSignatureOid"
                    }, {
                        name: "Certificate.TBSCertificate.signature.parameters",
                        tagClass: fA.Class.UNIVERSAL,
                        optional: !0,
                        captureAsn1: "certinfoSignatureParams"
                    }]
                }, {
                    name: "Certificate.TBSCertificate.issuer",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Type.SEQUENCE,
                    constructed: !0,
                    captureAsn1: "certIssuer"
                }, {
                    name: "Certificate.TBSCertificate.validity",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Type.SEQUENCE,
                    constructed: !0,
                    value: [{
                        name: "Certificate.TBSCertificate.validity.notBefore (utc)",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.UTCTIME,
                        constructed: !1,
                        optional: !0,
                        capture: "certValidity1UTCTime"
                    }, {
                        name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.GENERALIZEDTIME,
                        constructed: !1,
                        optional: !0,
                        capture: "certValidity2GeneralizedTime"
                    }, {
                        name: "Certificate.TBSCertificate.validity.notAfter (utc)",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.UTCTIME,
                        constructed: !1,
                        optional: !0,
                        capture: "certValidity3UTCTime"
                    }, {
                        name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.GENERALIZEDTIME,
                        constructed: !1,
                        optional: !0,
                        capture: "certValidity4GeneralizedTime"
                    }]
                }, {
                    name: "Certificate.TBSCertificate.subject",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Type.SEQUENCE,
                    constructed: !0,
                    captureAsn1: "certSubject"
                }, I8B, {
                    name: "Certificate.TBSCertificate.issuerUniqueID",
                    tagClass: fA.Class.CONTEXT_SPECIFIC,
                    type: 1,
                    constructed: !0,
                    optional: !0,
                    value: [{
                        name: "Certificate.TBSCertificate.issuerUniqueID.id",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.BITSTRING,
                        constructed: !1,
                        captureBitStringValue: "certIssuerUniqueId"
                    }]
                }, {
                    name: "Certificate.TBSCertificate.subjectUniqueID",
                    tagClass: fA.Class.CONTEXT_SPECIFIC,
                    type: 2,
                    constructed: !0,
                    optional: !0,
                    value: [{
                        name: "Certificate.TBSCertificate.subjectUniqueID.id",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.BITSTRING,
                        constructed: !1,
                        captureBitStringValue: "certSubjectUniqueId"
                    }]
                }, {
                    name: "Certificate.TBSCertificate.extensions",
                    tagClass: fA.Class.CONTEXT_SPECIFIC,
                    type: 3,
                    constructed: !0,
                    captureAsn1: "certExtensions",
                    optional: !0
                }]
            }, {
                name: "Certificate.signatureAlgorithm",
                tagClass: fA.Class.UNIVERSAL,
                type: fA.Type.SEQUENCE,
                constructed: !0,
                value: [{
                    name: "Certificate.signatureAlgorithm.algorithm",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Type.OID,
                    constructed: !1,
                    capture: "certSignatureOid"
                }, {
                    name: "Certificate.TBSCertificate.signature.parameters",
                    tagClass: fA.Class.UNIVERSAL,
                    optional: !0,
                    captureAsn1: "certSignatureParams"
                }]
            }, {
                name: "Certificate.signatureValue",
                tagClass: fA.Class.UNIVERSAL,
                type: fA.Type.BITSTRING,
                constructed: !1,
                captureBitStringValue: "certSignature"
            }]
        },