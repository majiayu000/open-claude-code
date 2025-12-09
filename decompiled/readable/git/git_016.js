/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.975Z
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 16/34
 * Lines: 155220 - 156719 (1500 lines)
 * Original file: cli.js
 */

            p.start(J, A), p.update(T1.toDer(P).getBytes());
            var u = p.getMac();
            y = T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OID, !1, T1.oidToDer(s6.oids.sha1).getBytes()), T1.create(T1.Class.UNIVERSAL, T1.Type.NULL, !1, "")]), T1.create(T1.Class.UNIVERSAL, T1.Type.OCTETSTRING, !1, u.getBytes())]), T1.create(T1.Class.UNIVERSAL, T1.Type.OCTETSTRING, !1, v.getBytes()), T1.create(T1.Class.UNIVERSAL, T1.Type.INTEGER, !1, T1.integerToDer(x).getBytes())])
        }
        return T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.INTEGER, !1, T1.integerToDer(3).getBytes()), T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OID, !1, T1.oidToDer(s6.oids.data).getBytes()), T1.create(T1.Class.CONTEXT_SPECIFIC, 0, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OCTETSTRING, !1, T1.toDer(P).getBytes())])]), y])
    };
    SzA.generateKey = jZ.pbe.generatePkcs12Key
});
var wv1 = U((PT7, V8B) => {
    var _c = n8();
    GT();
    Tc();
    Dv1();
    io();
    CiA();
    Uv1();
    NiA();
    PzA();
    P3();
    OiA();
    var $v1 = _c.asn1,
        f3A = V8B.exports = _c.pki = _c.pki || {};
    f3A.pemToDer = function(A) {
        var Q = _c.pem.decode(A)[0];
        if (Q.procType && Q.procType.type === "ENCRYPTED") throw Error("Could not convert PEM to DER; PEM is encrypted.");
        return _c.util.createBuffer(Q.body)
    };
    f3A.privateKeyFromPem = function(A) {
        var Q = _c.pem.decode(A)[0];
        if (Q.type !== "PRIVATE KEY" && Q.type !== "RSA PRIVATE KEY") {
            var B = Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');
            throw B.headerType = Q.type, B
        }
        if (Q.procType && Q.procType.type === "ENCRYPTED") throw Error("Could not convert private key from PEM; PEM is encrypted.");
        var G = $v1.fromDer(Q.body);
        return f3A.privateKeyFromAsn1(G)
    };
    f3A.privateKeyToPem = function(A, Q) {
        var B = {
            type: "RSA PRIVATE KEY",
            body: $v1.toDer(f3A.privateKeyToAsn1(A)).getBytes()
        };
        return _c.pem.encode(B, {
            maxline: Q
        })
    };
    f3A.privateKeyInfoToPem = function(A, Q) {
        var B = {
            type: "PRIVATE KEY",
            body: $v1.toDer(A).getBytes()
        };
        return _c.pem.encode(B, {
            maxline: Q
        })
    }
});
var Rv1 = U((jT7, $8B) => {
    var VQ = n8();
    GT();
    j3A();
    ViA();
    io();
    wv1();
    aL();
    y3A();
    P3();

var PiA = function(A, Q, B, G) {
            var Z = VQ.util.createBuffer(),
                I = A.length >> 1,
                Y = I + (A.length & 1),
                J = A.substr(0, Y),
                W = A.substr(I, Y),
                X = VQ.util.createBuffer(),
                F = VQ.hmac.create();
            B = Q + B;
            var V = Math.ceil(G / 16),
                K = Math.ceil(G / 20);
            F.start("MD5", J);
            var D = VQ.util.createBuffer();
            X.putBytes(B);
            for (var H = 0; H < V; ++H) F.start(null, null), F.update(X.getBytes()), X.putBuffer(F.digest()), F.start(null, null), F.update(X.bytes() + B), D.putBuffer(F.digest());
            F.start("SHA1", W);
            var C = VQ.util.createBuffer();
            X.clear(), X.putBytes(B);
            for (var H = 0; H < K; ++H) F.start(null, null), F.update(X.getBytes()), X.putBuffer(F.digest()), F.start(null, null), F.update(X.bytes() + B), C.putBuffer(F.digest());
            return Z.putBytes(VQ.util.xorBytes(D.getBytes(), C.getBytes(), G)), Z
        },
        vo8 = function(A, Q, B) {
            var G = VQ.hmac.create();
            G.start("SHA1", A);
            var Z = VQ.util.createBuffer();
            return Z.putInt32(Q[0]), Z.putInt32(Q[1]), Z.putByte(B.type), Z.putByte(B.version.major), Z.putByte(B.version.minor), Z.putInt16(B.length), Z.putBytes(B.fragment.bytes()), G.update(Z.getBytes()), G.digest().getBytes()
        },
        bo8 = function(A, Q, B) {
            var G = !1;
            try {
                var Z = A.deflate(Q.fragment.getBytes());
                Q.fragment = VQ.util.createBuffer(Z), Q.length = Z.length, G = !0
            } catch (I) {}
            return G
        },
        fo8 = function(A, Q, B) {
            var G = !1;
            try {
                var Z = A.inflate(Q.fragment.getBytes());
                Q.fragment = VQ.util.createBuffer(Z), Q.length = Z.length, G = !0
            } catch (I) {}
            return G
        },
        gw = function(A, Q) {
            var B = 0;
            switch (Q) {
                case 1:
                    B = A.getByte();
                    break;
                case 2:
                    B = A.getInt16();
                    break;
                case 3:
                    B = A.getInt24();
                    break;
                case 4:
                    B = A.getInt32();
                    break
            }
            return VQ.util.createBuffer(A.getBytes(B))
        },
        tL = function(A, Q, B) {
            A.putInt(B.length(), Q << 3), A.putBuffer(B)
        },
        cA = {};
    cA.Versions = {
        TLS_1_0: {
            major: 3,
            minor: 1
        },
        TLS_1_1: {
            major: 3,
            minor: 2
        },
        TLS_1_2: {
            major: 3,
            minor: 3
        }
    };
    cA.SupportedVersions = [cA.Versions.TLS_1_1, cA.Versions.TLS_1_0];
    cA.Version = cA.SupportedVersions[0];
    cA.MaxFragment = 15360;
    cA.ConnectionEnd = {
        server: 0,
        client: 1
    };
    cA.PRFAlgorithm = {
        tls_prf_sha256: 0
    };
    cA.BulkCipherAlgorithm = {
        none: null,
        rc4: 0,
        des3: 1,
        aes: 2
    };
    cA.CipherType = {
        stream: 0,
        block: 1,
        aead: 2
    };
    cA.MACAlgorithm = {
        none: null,
        hmac_md5: 0,
        hmac_sha1: 1,
        hmac_sha256: 2,
        hmac_sha384: 3,
        hmac_sha512: 4
    };
    cA.CompressionMethod = {
        none: 0,
        deflate: 1
    };
    cA.ContentType = {
        change_cipher_spec: 20,
        alert: 21,
        handshake: 22,
        application_data: 23,
        heartbeat: 24
    };
    cA.HandshakeType = {
        hello_request: 0,
        client_hello: 1,
        server_hello: 2,
        certificate: 11,
        server_key_exchange: 12,
        certificate_request: 13,
        server_hello_done: 14,
        certificate_verify: 15,
        client_key_exchange: 16,
        finished: 20
    };
    cA.Alert = {};
    cA.Alert.Level = {
        warning: 1,
        fatal: 2
    };
    cA.Alert.Description = {
        close_notify: 0,
        unexpected_message: 10,
        bad_record_mac: 20,
        decryption_failed: 21,
        record_overflow: 22,
        decompression_failure: 30,
        handshake_failure: 40,
        bad_certificate: 42,
        unsupported_certificate: 43,
        certificate_revoked: 44,
        certificate_expired: 45,
        certificate_unknown: 46,
        illegal_parameter: 47,
        unknown_ca: 48,
        access_denied: 49,
        decode_error: 50,
        decrypt_error: 51,
        export_restriction: 60,
        protocol_version: 70,
        insufficient_security: 71,
        internal_error: 80,
        user_canceled: 90,
        no_renegotiation: 100
    };
    cA.HeartbeatMessageType = {
        heartbeat_request: 1,
        heartbeat_response: 2
    };
    cA.CipherSuites = {};
    cA.getCipherSuite = function(A) {
        var Q = null;
        for (var B in cA.CipherSuites) {
            var G = cA.CipherSuites[B];
            if (G.id[0] === A.charCodeAt(0) && G.id[1] === A.charCodeAt(1)) {
                Q = G;
                break
            }
        }
        return Q
    };
    cA.handleUnexpected = function(A, Q) {
        var B = !A.open && A.entity === cA.ConnectionEnd.client;
        if (!B) A.error(A, {
            message: "Unexpected message. Received TLS record out of order.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.unexpected_message
            }
        })
    };
    cA.handleHelloRequest = function(A, Q, B) {
        if (!A.handshaking && A.handshakes > 0) cA.queue(A, cA.createAlert(A, {
            level: cA.Alert.Level.warning,
            description: cA.Alert.Description.no_renegotiation
        })), cA.flush(A);
        A.process()
    };
    cA.parseHelloMessage = function(A, Q, B) {
        var G = null,
            Z = A.entity === cA.ConnectionEnd.client;
        if (B < 38) A.error(A, {
            message: Z ? "Invalid ServerHello message. Message too short." : "Invalid ClientHello message. Message too short.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.illegal_parameter
            }
        });
        else {
            var I = Q.fragment,
                Y = I.length();
            if (G = {
                    version: {
                        major: I.getByte(),
                        minor: I.getByte()
                    },
                    random: VQ.util.createBuffer(I.getBytes(32)),
                    session_id: gw(I, 1),
                    extensions: []
                }, Z) G.cipher_suite = I.getBytes(2), G.compression_method = I.getByte();
            else G.cipher_suites = gw(I, 2), G.compression_methods = gw(I, 1);
            if (Y = B - (Y - I.length()), Y > 0) {
                var J = gw(I, 2);
                while (J.length() > 0) G.extensions.push({
                    type: [J.getByte(), J.getByte()],
                    data: gw(J, 2)
                });
                if (!Z)
                    for (var W = 0; W < G.extensions.length; ++W) {
                        var X = G.extensions[W];
                        if (X.type[0] === 0 && X.type[1] === 0) {
                            var F = gw(X.data, 2);
                            while (F.length() > 0) {
                                var V = F.getByte();
                                if (V !== 0) break;
                                A.session.extensions.server_name.serverNameList.push(gw(F, 2).getBytes())
                            }
                        }
                    }
            }
            if (A.session.version) {
                if (G.version.major !== A.session.version.major || G.version.minor !== A.session.version.minor) return A.error(A, {
                    message: "TLS version change is disallowed during renegotiation.",
                    send: !0,
                    alert: {
                        level: cA.Alert.Level.fatal,
                        description: cA.Alert.Description.protocol_version
                    }
                })
            }
            if (Z) A.session.cipherSuite = cA.getCipherSuite(G.cipher_suite);
            else {
                var K = VQ.util.createBuffer(G.cipher_suites.bytes());
                while (K.length() > 0)
                    if (A.session.cipherSuite = cA.getCipherSuite(K.getBytes(2)), A.session.cipherSuite !== null) break
            }
            if (A.session.cipherSuite === null) return A.error(A, {
                message: "No cipher suites in common.",
                send: !0,
                alert: {
                    level: cA.Alert.Level.fatal,
                    description: cA.Alert.Description.handshake_failure
                },
                cipherSuite: VQ.util.bytesToHex(G.cipher_suite)
            });
            if (Z) A.session.compressionMethod = G.compression_method;
            else A.session.compressionMethod = cA.CompressionMethod.none
        }
        return G
    };
    cA.createSecurityParameters = function(A, Q) {
        var B = A.entity === cA.ConnectionEnd.client,
            G = Q.random.bytes(),
            Z = B ? A.session.sp.client_random : G,
            I = B ? G : cA.createRandom().getBytes();
        A.session.sp = {
            entity: A.entity,
            prf_algorithm: cA.PRFAlgorithm.tls_prf_sha256,
            bulk_cipher_algorithm: null,
            cipher_type: null,
            enc_key_length: null,
            block_length: null,
            fixed_iv_length: null,
            record_iv_length: null,
            mac_algorithm: null,
            mac_length: null,
            mac_key_length: null,
            compression_algorithm: A.session.compressionMethod,
            pre_master_secret: null,
            master_secret: null,
            client_random: Z,
            server_random: I
        }
    };
    cA.handleServerHello = function(A, Q, B) {
        var G = cA.parseHelloMessage(A, Q, B);
        if (A.fail) return;
        if (G.version.minor <= A.version.minor) A.version.minor = G.version.minor;
        else return A.error(A, {
            message: "Incompatible TLS version.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.protocol_version
            }
        });
        A.session.version = A.version;
        var Z = G.session_id.bytes();
        if (Z.length > 0 && Z === A.session.id) A.expect = H8B, A.session.resuming = !0, A.session.sp.server_random = G.random.bytes();
        else A.expect = go8, A.session.resuming = !1, cA.createSecurityParameters(A, G);
        A.session.id = Z, A.process()
    };
    cA.handleClientHello = function(A, Q, B) {
        var G = cA.parseHelloMessage(A, Q, B);
        if (A.fail) return;
        var Z = G.session_id.bytes(),
            I = null;
        if (A.sessionCache) {
            if (I = A.sessionCache.getSession(Z), I === null) Z = "";
            else if (I.version.major !== G.version.major || I.version.minor > G.version.minor) I = null, Z = ""
        }
        if (Z.length === 0) Z = VQ.random.getBytes(32);
        if (A.session.id = Z, A.session.clientHelloVersion = G.version, A.session.sp = {}, I) A.version = A.session.version = I.version, A.session.sp = I.sp;
        else {
            var Y;
            for (var J = 1; J < cA.SupportedVersions.length; ++J)
                if (Y = cA.SupportedVersions[J], Y.minor <= G.version.minor) break;
            A.version = {
                major: Y.major,
                minor: Y.minor
            }, A.session.version = A.version
        }
        if (I !== null) A.expect = Mv1, A.session.resuming = !0, A.session.sp.client_random = G.random.bytes();
        else A.expect = A.verifyClient !== !1 ? io8 : Lv1, A.session.resuming = !1, cA.createSecurityParameters(A, G);
        if (A.open = !0, cA.queue(A, cA.createRecord(A, {
                type: cA.ContentType.handshake,
                data: cA.createServerHello(A)
            })), A.session.resuming) cA.queue(A, cA.createRecord(A, {
            type: cA.ContentType.change_cipher_spec,
            data: cA.createChangeCipherSpec()
        })), A.state.pending = cA.createConnectionState(A), A.state.current.write = A.state.pending.write, cA.queue(A, cA.createRecord(A, {
            type: cA.ContentType.handshake,
            data: cA.createFinished(A)
        }));
        else if (cA.queue(A, cA.createRecord(A, {
                type: cA.ContentType.handshake,
                data: cA.createCertificate(A)
            })), !A.fail) {
            if (cA.queue(A, cA.createRecord(A, {
                    type: cA.ContentType.handshake,
                    data: cA.createServerKeyExchange(A)
                })), A.verifyClient !== !1) cA.queue(A, cA.createRecord(A, {
                type: cA.ContentType.handshake,
                data: cA.createCertificateRequest(A)
            }));
            cA.queue(A, cA.createRecord(A, {
                type: cA.ContentType.handshake,
                data: cA.createServerHelloDone(A)
            }))
        }
        cA.flush(A), A.process()
    };
    cA.handleCertificate = function(A, Q, B) {
        if (B < 3) return A.error(A, {
            message: "Invalid Certificate message. Message too short.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.illegal_parameter
            }
        });
        var G = Q.fragment,
            Z = {
                certificate_list: gw(G, 3)
            },
            I, Y, J = [];
        try {
            while (Z.certificate_list.length() > 0) I = gw(Z.certificate_list, 3), Y = VQ.asn1.fromDer(I), I = VQ.pki.certificateFromAsn1(Y, !0), J.push(I)
        } catch (X) {
            return A.error(A, {
                message: "Could not parse certificate list.",
                cause: X,
                send: !0,
                alert: {
                    level: cA.Alert.Level.fatal,
                    description: cA.Alert.Description.bad_certificate
                }
            })
        }
        var W = A.entity === cA.ConnectionEnd.client;
        if ((W || A.verifyClient === !0) && J.length === 0) A.error(A, {
            message: W ? "No server certificate provided." : "No client certificate provided.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.illegal_parameter
            }
        });
        else if (J.length === 0) A.expect = W ? K8B : Lv1;
        else {
            if (W) A.session.serverCertificate = J[0];
            else A.session.clientCertificate = J[0];
            if (cA.verifyCertificateChain(A, J)) A.expect = W ? K8B : Lv1
        }
        A.process()
    };
    cA.handleServerKeyExchange = function(A, Q, B) {
        if (B > 0) return A.error(A, {
            message: "Invalid key parameters. Only RSA is supported.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.unsupported_certificate
            }
        });
        A.expect = uo8, A.process()
    };
    cA.handleClientKeyExchange = function(A, Q, B) {
        if (B < 48) return A.error(A, {
            message: "Invalid key parameters. Only RSA is supported.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.unsupported_certificate
            }
        });
        var G = Q.fragment,
            Z = {
                enc_pre_master_secret: gw(G, 2).getBytes()
            },
            I = null;
        if (A.getPrivateKey) try {
            I = A.getPrivateKey(A, A.session.serverCertificate), I = VQ.pki.privateKeyFromPem(I)
        } catch (W) {
            A.error(A, {
                message: "Could not get private key.",
                cause: W,
                send: !0,
                alert: {
                    level: cA.Alert.Level.fatal,
                    description: cA.Alert.Description.internal_error
                }
            })
        }
        if (I === null) return A.error(A, {
            message: "No private key set.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.internal_error
            }
        });
        try {
            var Y = A.session.sp;
            Y.pre_master_secret = I.decrypt(Z.enc_pre_master_secret);
            var J = A.session.clientHelloVersion;
            if (J.major !== Y.pre_master_secret.charCodeAt(0) || J.minor !== Y.pre_master_secret.charCodeAt(1)) throw Error("TLS version rollback attack detected.")
        } catch (W) {
            Y.pre_master_secret = VQ.random.getBytes(48)
        }
        if (A.expect = Mv1, A.session.clientCertificate !== null) A.expect = no8;
        A.process()
    };
    cA.handleCertificateRequest = function(A, Q, B) {
        if (B < 3) return A.error(A, {
            message: "Invalid CertificateRequest. Message too short.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.illegal_parameter
            }
        });
        var G = Q.fragment,
            Z = {
                certificate_types: gw(G, 1),
                certificate_authorities: gw(G, 2)
            };
        A.session.certificateRequest = Z, A.expect = mo8, A.process()
    };
    cA.handleCertificateVerify = function(A, Q, B) {
        if (B < 2) return A.error(A, {
            message: "Invalid CertificateVerify. Message too short.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.illegal_parameter
            }
        });
        var G = Q.fragment;
        G.read -= 4;
        var Z = G.bytes();
        G.read += 4;

var I = {
                signature: gw(G, 2).getBytes()
            },
            Y = VQ.util.createBuffer();
        Y.putBuffer(A.session.md5.digest()), Y.putBuffer(A.session.sha1.digest()), Y = Y.getBytes();
        try {
            var J = A.session.clientCertificate;
            if (!J.publicKey.verify(Y, I.signature, "NONE")) throw Error("CertificateVerify signature does not match.");
            A.session.md5.update(Z), A.session.sha1.update(Z)
        } catch (W) {
            return A.error(A, {
                message: "Bad signature in CertificateVerify.",
                send: !0,
                alert: {
                    level: cA.Alert.Level.fatal,
                    description: cA.Alert.Description.handshake_failure
                }
            })
        }
        A.expect = Mv1, A.process()
    };
    cA.handleServerHelloDone = function(A, Q, B) {
        if (B > 0) return A.error(A, {
            message: "Invalid ServerHelloDone message. Invalid length.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.record_overflow
            }
        });
        if (A.serverCertificate === null) {
            var G = {
                    message: "No server certificate provided. Not enough security.",
                    send: !0,
                    alert: {
                        level: cA.Alert.Level.fatal,
                        description: cA.Alert.Description.insufficient_security
                    }
                },
                Z = 0,
                I = A.verify(A, G.alert.description, Z, []);
            if (I !== !0) {
                if (I || I === 0) {
                    if (typeof I === "object" && !VQ.util.isArray(I)) {
                        if (I.message) G.message = I.message;
                        if (I.alert) G.alert.description = I.alert
                    } else if (typeof I === "number") G.alert.description = I
                }
                return A.error(A, G)
            }
        }
        if (A.session.certificateRequest !== null) Q = cA.createRecord(A, {
            type: cA.ContentType.handshake,
            data: cA.createCertificate(A)
        }), cA.queue(A, Q);
        Q = cA.createRecord(A, {
            type: cA.ContentType.handshake,
            data: cA.createClientKeyExchange(A)
        }), cA.queue(A, Q), A.expect = po8;

var Y = function(J, W) {
            if (J.session.certificateRequest !== null && J.session.clientCertificate !== null) cA.queue(J, cA.createRecord(J, {
                type: cA.ContentType.handshake,
                data: cA.createCertificateVerify(J, W)
            }));
            cA.queue(J, cA.createRecord(J, {
                type: cA.ContentType.change_cipher_spec,
                data: cA.createChangeCipherSpec()
            })), J.state.pending = cA.createConnectionState(J), J.state.current.write = J.state.pending.write, cA.queue(J, cA.createRecord(J, {
                type: cA.ContentType.handshake,
                data: cA.createFinished(J)
            })), J.expect = H8B, cA.flush(J), J.process()
        };
        if (A.session.certificateRequest === null || A.session.clientCertificate === null) return Y(A, null);
        cA.getClientSignature(A, Y)
    };
    cA.handleChangeCipherSpec = function(A, Q) {
        if (Q.fragment.getByte() !== 1) return A.error(A, {
            message: "Invalid ChangeCipherSpec message received.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.illegal_parameter
            }
        });
        var B = A.entity === cA.ConnectionEnd.client;
        if (A.session.resuming && B || !A.session.resuming && !B) A.state.pending = cA.createConnectionState(A);
        if (A.state.current.read = A.state.pending.read, !A.session.resuming && B || A.session.resuming && !B) A.state.pending = null;
        A.expect = B ? do8 : ao8, A.process()
    };
    cA.handleFinished = function(A, Q, B) {
        var G = Q.fragment;
        G.read -= 4;
        var Z = G.bytes();
        G.read += 4;
        var I = Q.fragment.getBytes();
        G = VQ.util.createBuffer(), G.putBuffer(A.session.md5.digest()), G.putBuffer(A.session.sha1.digest());
        var Y = A.entity === cA.ConnectionEnd.client,
            J = Y ? "server finished" : "client finished",
            W = A.session.sp,
            X = 12,
            F = PiA;
        if (G = F(W.master_secret, J, G.getBytes(), X), G.getBytes() !== I) return A.error(A, {
            message: "Invalid verify_data in Finished message.",
            send: !0,
            alert: {
                level: cA.Alert.Level.fatal,
                description: cA.Alert.Description.decrypt_error
            }
        });
        if (A.session.md5.update(Z), A.session.sha1.update(Z), A.session.resuming && Y || !A.session.resuming && !Y) cA.queue(A, cA.createRecord(A, {
            type: cA.ContentType.change_cipher_spec,
            data: cA.createChangeCipherSpec()
        })), A.state.current.write = A.state.pending.write, A.state.pending = null, cA.queue(A, cA.createRecord(A, {
            type: cA.ContentType.handshake,
            data: cA.createFinished(A)
        }));
        A.expect = Y ? co8 : so8, A.handshaking = !1, ++A.handshakes, A.peerCertificate = Y ? A.session.serverCertificate : A.session.clientCertificate, cA.flush(A), A.isConnected = !0, A.connected(A), A.process()
    };
    cA.handleAlert = function(A, Q) {
        var B = Q.fragment,
            G = {
                level: B.getByte(),
                description: B.getByte()
            },
            Z;
        switch (G.description) {
            case cA.Alert.Description.close_notify:
                Z = "Connection closed.";
                break;
            case cA.Alert.Description.unexpected_message:
                Z = "Unexpected message.";
                break;
            case cA.Alert.Description.bad_record_mac:
                Z = "Bad record MAC.";
                break;
            case cA.Alert.Description.decryption_failed:
                Z = "Decryption failed.";
                break;
            case cA.Alert.Description.record_overflow:
                Z = "Record overflow.";
                break;
            case cA.Alert.Description.decompression_failure:
                Z = "Decompression failed.";
                break;
            case cA.Alert.Description.handshake_failure:
                Z = "Handshake failure.";
                break;
            case cA.Alert.Description.bad_certificate:
                Z = "Bad certificate.";
                break;
            case cA.Alert.Description.unsupported_certificate:
                Z = "Unsupported certificate.";
                break;
            case cA.Alert.Description.certificate_revoked:
                Z = "Certificate revoked.";
                break;
            case cA.Alert.Description.certificate_expired:
                Z = "Certificate expired.";
                break;
            case cA.Alert.Description.certificate_unknown:
                Z = "Certificate unknown.";
                break;
            case cA.Alert.Description.illegal_parameter:
                Z = "Illegal parameter.";
                break;
            case cA.Alert.Description.unknown_ca:
                Z = "Unknown certificate authority.";
                break;
            case cA.Alert.Description.access_denied:
                Z = "Access denied.";
                break;
            case cA.Alert.Description.decode_error:
                Z = "Decode error.";
                break;
            case cA.Alert.Description.decrypt_error:
                Z = "Decrypt error.";
                break;
            case cA.Alert.Description.export_restriction:
                Z = "Export restriction.";
                break;
            case cA.Alert.Description.protocol_version:
                Z = "Unsupported protocol version.";
                break;
            case cA.Alert.Description.insufficient_security:
                Z = "Insufficient security.";
                break;
            case cA.Alert.Description.internal_error:
                Z = "Internal error.";
                break;
            case cA.Alert.Description.user_canceled:
                Z = "User canceled.";
                break;
            case cA.Alert.Description.no_renegotiation:
                Z = "Renegotiation not supported.";
                break;
            default:
                Z = "Unknown error.";
                break
        }
        if (G.description === cA.Alert.Description.close_notify) return A.close();
        A.error(A, {
            message: Z,
            send: !1,
            origin: A.entity === cA.ConnectionEnd.client ? "server" : "client",
            alert: G
        }), A.process()
    };
    cA.handleHandshake = function(A, Q) {
        var B = Q.fragment,
            G = B.getByte(),
            Z = B.getInt24();
        if (Z > B.length()) return A.fragmented = Q, Q.fragment = VQ.util.createBuffer(), B.read -= 4, A.process();
        A.fragmented = null, B.read -= 4;
        var I = B.bytes(Z + 4);
        if (B.read += 4, G in TiA[A.entity][A.expect]) {
            if (A.entity === cA.ConnectionEnd.server && !A.open && !A.fail) A.handshaking = !0, A.session = {
                version: null,
                extensions: {
                    server_name: {
                        serverNameList: []
                    }
                },
                cipherSuite: null,
                compressionMethod: null,
                serverCertificate: null,
                clientCertificate: null,
                md5: VQ.md.md5.create(),
                sha1: VQ.md.sha1.create()
            };
            if (G !== cA.HandshakeType.hello_request && G !== cA.HandshakeType.certificate_verify && G !== cA.HandshakeType.finished) A.session.md5.update(I), A.session.sha1.update(I);
            TiA[A.entity][A.expect][G](A, Q, Z)
        } else cA.handleUnexpected(A, Q)
    };
    cA.handleApplicationData = function(A, Q) {
        A.data.putBuffer(Q.fragment), A.dataReady(A), A.process()
    };
    cA.handleHeartbeat = function(A, Q) {
        var B = Q.fragment,
            G = B.getByte(),
            Z = B.getInt16(),
            I = B.getBytes(Z);
        if (G === cA.HeartbeatMessageType.heartbeat_request) {
            if (A.handshaking || Z > I.length) return A.process();
            cA.queue(A, cA.createRecord(A, {
                type: cA.ContentType.heartbeat,
                data: cA.createHeartbeat(cA.HeartbeatMessageType.heartbeat_response, I)
            })), cA.flush(A)
        } else if (G === cA.HeartbeatMessageType.heartbeat_response) {
            if (I !== A.expectedHeartbeatPayload) return A.process();
            if (A.heartbeatReceived) A.heartbeatReceived(A, VQ.util.createBuffer(I))
        }
        A.process()
    };
    var ho8 = 0,
        go8 = 1,
        K8B = 2,
        uo8 = 3,
        mo8 = 4,
        H8B = 5,
        do8 = 6,
        co8 = 7,
        po8 = 8,
        lo8 = 0,
        io8 = 1,
        Lv1 = 2,
        no8 = 3,
        Mv1 = 4,
        ao8 = 5,
        so8 = 6,
        gA = cA.handleUnexpected,
        C8B = cA.handleChangeCipherSpec,
        KD = cA.handleAlert,
        QE = cA.handleHandshake,
        E8B = cA.handleApplicationData,
        DD = cA.handleHeartbeat,
        Ov1 = [];
    Ov1[cA.ConnectionEnd.client] = [
        [gA, KD, QE, gA, DD],
        [gA, KD, QE, gA, DD],
        [gA, KD, QE, gA, DD],
        [gA, KD, QE, gA, DD],
        [gA, KD, QE, gA, DD],
        [C8B, KD, gA, gA, DD],
        [gA, KD, QE, gA, DD],
        [gA, KD, QE, E8B, DD],
        [gA, KD, QE, gA, DD]
    ];
    Ov1[cA.ConnectionEnd.server] = [
        [gA, KD, QE, gA, DD],
        [gA, KD, QE, gA, DD],
        [gA, KD, QE, gA, DD],
        [gA, KD, QE, gA, DD],
        [C8B, KD, gA, gA, DD],
        [gA, KD, QE, gA, DD],
        [gA, KD, QE, E8B, DD],
        [gA, KD, QE, gA, DD]
    ];
    var {
        handleHelloRequest: kc,
        handleServerHello: ro8,
        handleCertificate: z8B,
        handleServerKeyExchange: D8B,
        handleCertificateRequest: qv1,
        handleServerHelloDone: RiA,
        handleFinished: U8B
    } = cA, TiA = [];
    TiA[cA.ConnectionEnd.client] = [
        [gA, gA, ro8, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA],
        [kc, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, z8B, D8B, qv1, RiA, gA, gA, gA, gA, gA, gA],
        [kc, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, D8B, qv1, RiA, gA, gA, gA, gA, gA, gA],
        [kc, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, qv1, RiA, gA, gA, gA, gA, gA, gA],
        [kc, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, RiA, gA, gA, gA, gA, gA, gA],
        [kc, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA],
        [kc, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, U8B],
        [kc, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA],
        [kc, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA]
    ];
    var {
        handleClientHello: oo8,
        handleClientKeyExchange: to8,
        handleCertificateVerify: eo8
    } = cA;
    TiA[cA.ConnectionEnd.server] = [
        [gA, oo8, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA],
        [gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, z8B, gA, gA, gA, gA, gA, gA, gA, gA, gA],
        [gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, to8, gA, gA, gA, gA],
        [gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, eo8, gA, gA, gA, gA, gA],
        [gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA],
        [gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, U8B],
        [gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA],
        [gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA, gA]
    ];
    cA.generateKeys = function(A, Q) {
        var B = PiA,
            G = Q.client_random + Q.server_random;
        if (!A.session.resuming) Q.master_secret = B(Q.pre_master_secret, "master secret", G, 48).bytes(), Q.pre_master_secret = null;
        G = Q.server_random + Q.client_random;
        var Z = 2 * Q.mac_key_length + 2 * Q.enc_key_length,
            I = A.version.major === cA.Versions.TLS_1_0.major && A.version.minor === cA.Versions.TLS_1_0.minor;
        if (I) Z += 2 * Q.fixed_iv_length;
        var Y = B(Q.master_secret, "key expansion", G, Z),
            J = {
                client_write_MAC_key: Y.getBytes(Q.mac_key_length),
                server_write_MAC_key: Y.getBytes(Q.mac_key_length),
                client_write_key: Y.getBytes(Q.enc_key_length),
                server_write_key: Y.getBytes(Q.enc_key_length)
            };
        if (I) J.client_write_IV = Y.getBytes(Q.fixed_iv_length), J.server_write_IV = Y.getBytes(Q.fixed_iv_length);
        return J
    };
    cA.createConnectionState = function(A) {
        var Q = A.entity === cA.ConnectionEnd.client,
            B = function() {
                var I = {
                    sequenceNumber: [0, 0],
                    macKey: null,
                    macLength: 0,
                    macFunction: null,
                    cipherState: null,
                    cipherFunction: function(Y) {
                        return !0
                    },
                    compressionState: null,
                    compressFunction: function(Y) {
                        return !0
                    },
                    updateSequenceNumber: function() {
                        if (I.sequenceNumber[1] === 4294967295) I.sequenceNumber[1] = 0, ++I.sequenceNumber[0];
                        else ++I.sequenceNumber[1]
                    }
                };
                return I
            },
            G = {
                read: B(),
                write: B()
            };
        if (G.read.update = function(I, Y) {
                if (!G.read.cipherFunction(Y, G.read)) I.error(I, {
                    message: "Could not decrypt record or bad MAC.",
                    send: !0,
                    alert: {
                        level: cA.Alert.Level.fatal,
                        description: cA.Alert.Description.bad_record_mac
                    }
                });
                else if (!G.read.compressFunction(I, Y, G.read)) I.error(I, {
                    message: "Could not decompress record.",
                    send: !0,
                    alert: {
                        level: cA.Alert.Level.fatal,
                        description: cA.Alert.Description.decompression_failure
                    }
                });
                return !I.fail
            }, G.write.update = function(I, Y) {
                if (!G.write.compressFunction(I, Y, G.write)) I.error(I, {
                    message: "Could not compress record.",
                    send: !1,
                    alert: {
                        level: cA.Alert.Level.fatal,
                        description: cA.Alert.Description.internal_error
                    }
                });
                else if (!G.write.cipherFunction(Y, G.write)) I.error(I, {
                    message: "Could not encrypt record.",
                    send: !1,
                    alert: {
                        level: cA.Alert.Level.fatal,
                        description: cA.Alert.Description.internal_error
                    }
                });
                return !I.fail
            }, A.session) {
            var Z = A.session.sp;
            switch (A.session.cipherSuite.initSecurityParameters(Z), Z.keys = cA.generateKeys(A, Z), G.read.macKey = Q ? Z.keys.server_write_MAC_key : Z.keys.client_write_MAC_key, G.write.macKey = Q ? Z.keys.client_write_MAC_key : Z.keys.server_write_MAC_key, A.session.cipherSuite.initConnectionState(G, A, Z), Z.compression_algorithm) {
                case cA.CompressionMethod.none:
                    break;
                case cA.CompressionMethod.deflate:
                    G.read.compressFunction = fo8, G.write.compressFunction = bo8;
                    break;
                default:
                    throw Error("Unsupported compression algorithm.")
            }
        }
        return G
    };
    cA.createRandom = function() {
        var A = new Date,
            Q = +A + A.getTimezoneOffset() * 60000,
            B = VQ.util.createBuffer();
        return B.putInt32(Q), B.putBytes(VQ.random.getBytes(28)), B
    };
    cA.createRecord = function(A, Q) {
        if (!Q.data) return null;

var B = {
            type: Q.type,
            version: {
                major: A.version.major,
                minor: A.version.minor
            },
            length: Q.data.length(),
            fragment: Q.data
        };
        return B
    };
    cA.createAlert = function(A, Q) {
        var B = VQ.util.createBuffer();
        return B.putByte(Q.level), B.putByte(Q.description), cA.createRecord(A, {
            type: cA.ContentType.alert,
            data: B
        })
    };
    cA.createClientHello = function(A) {
        A.session.clientHelloVersion = {
            major: A.version.major,
            minor: A.version.minor
        };
        var Q = VQ.util.createBuffer();
        for (var B = 0; B < A.cipherSuites.length; ++B) {
            var G = A.cipherSuites[B];
            Q.putByte(G.id[0]), Q.putByte(G.id[1])
        }
        var Z = Q.length(),
            I = VQ.util.createBuffer();
        I.putByte(cA.CompressionMethod.none);
        var Y = I.length(),
            J = VQ.util.createBuffer();
        if (A.virtualHost) {
            var W = VQ.util.createBuffer();
            W.putByte(0), W.putByte(0);
            var X = VQ.util.createBuffer();
            X.putByte(0), tL(X, 2, VQ.util.createBuffer(A.virtualHost));
            var F = VQ.util.createBuffer();
            tL(F, 2, X), tL(W, 2, F), J.putBuffer(W)
        }
        var V = J.length();
        if (V > 0) V += 2;
        var K = A.session.id,
            D = K.length + 1 + 2 + 4 + 28 + 2 + Z + 1 + Y + V,
            H = VQ.util.createBuffer();
        if (H.putByte(cA.HandshakeType.client_hello), H.putInt24(D), H.putByte(A.version.major), H.putByte(A.version.minor), H.putBytes(A.session.sp.client_random), tL(H, 1, VQ.util.createBuffer(K)), tL(H, 2, Q), tL(H, 1, I), V > 0) tL(H, 2, J);
        return H
    };
    cA.createServerHello = function(A) {
        var Q = A.session.id,
            B = Q.length + 1 + 2 + 4 + 28 + 2 + 1,
            G = VQ.util.createBuffer();
        return G.putByte(cA.HandshakeType.server_hello), G.putInt24(B), G.putByte(A.version.major), G.putByte(A.version.minor), G.putBytes(A.session.sp.server_random), tL(G, 1, VQ.util.createBuffer(Q)), G.putByte(A.session.cipherSuite.id[0]), G.putByte(A.session.cipherSuite.id[1]), G.putByte(A.session.compressionMethod), G
    };
    cA.createCertificate = function(A) {
        var Q = A.entity === cA.ConnectionEnd.client,
            B = null;
        if (A.getCertificate) {
            var G;
            if (Q) G = A.session.certificateRequest;
            else G = A.session.extensions.server_name.serverNameList;
            B = A.getCertificate(A, G)
        }
        var Z = VQ.util.createBuffer();
        if (B !== null) try {
            if (!VQ.util.isArray(B)) B = [B];
            var I = null;
            for (var Y = 0; Y < B.length; ++Y) {
                var J = VQ.pem.decode(B[Y])[0];
                if (J.type !== "CERTIFICATE" && J.type !== "X509 CERTIFICATE" && J.type !== "TRUSTED CERTIFICATE") {
                    var W = Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');
                    throw W.headerType = J.type, W
                }
                if (J.procType && J.procType.type === "ENCRYPTED") throw Error("Could not convert certificate from PEM; PEM is encrypted.");
                var X = VQ.util.createBuffer(J.body);
                if (I === null) I = VQ.asn1.fromDer(X.bytes(), !1);
                var F = VQ.util.createBuffer();
                tL(F, 3, X), Z.putBuffer(F)
            }
            if (B = VQ.pki.certificateFromAsn1(I), Q) A.session.clientCertificate = B;
            else A.session.serverCertificate = B
        } catch (D) {
            return A.error(A, {
                message: "Could not send certificate list.",
                cause: D,
                send: !0,
                alert: {
                    level: cA.Alert.Level.fatal,
                    description: cA.Alert.Description.bad_certificate
                }
            })
        }
        var V = 3 + Z.length(),
            K = VQ.util.createBuffer();
        return K.putByte(cA.HandshakeType.certificate), K.putInt24(V), tL(K, 3, Z), K
    };
    cA.createClientKeyExchange = function(A) {
        var Q = VQ.util.createBuffer();
        Q.putByte(A.session.clientHelloVersion.major), Q.putByte(A.session.clientHelloVersion.minor), Q.putBytes(VQ.random.getBytes(46));
        var B = A.session.sp;
        B.pre_master_secret = Q.getBytes();
        var G = A.session.serverCertificate.publicKey;
        Q = G.encrypt(B.pre_master_secret);
        var Z = Q.length + 2,
            I = VQ.util.createBuffer();
        return I.putByte(cA.HandshakeType.client_key_exchange), I.putInt24(Z), I.putInt16(Q.length), I.putBytes(Q), I
    };
    cA.createServerKeyExchange = function(A) {
        var Q = 0,
            B = VQ.util.createBuffer();
        if (Q > 0) B.putByte(cA.HandshakeType.server_key_exchange), B.putInt24(Q);
        return B
    };
    cA.getClientSignature = function(A, Q) {
        var B = VQ.util.createBuffer();
        B.putBuffer(A.session.md5.digest()), B.putBuffer(A.session.sha1.digest()), B = B.getBytes(), A.getSignature = A.getSignature || function(G, Z, I) {
            var Y = null;
            if (G.getPrivateKey) try {
                Y = G.getPrivateKey(G, G.session.clientCertificate), Y = VQ.pki.privateKeyFromPem(Y)
            } catch (J) {
                G.error(G, {
                    message: "Could not get private key.",
                    cause: J,
                    send: !0,
                    alert: {
                        level: cA.Alert.Level.fatal,
                        description: cA.Alert.Description.internal_error
                    }
                })
            }
            if (Y === null) G.error(G, {
                message: "No private key set.",
                send: !0,
                alert: {
                    level: cA.Alert.Level.fatal,
                    description: cA.Alert.Description.internal_error
                }
            });
            else Z = Y.sign(Z, null);
            I(G, Z)
        }, A.getSignature(A, B, Q)
    };
    cA.createCertificateVerify = function(A, Q) {
        var B = Q.length + 2,
            G = VQ.util.createBuffer();
        return G.putByte(cA.HandshakeType.certificate_verify), G.putInt24(B), G.putInt16(Q.length), G.putBytes(Q), G
    };
    cA.createCertificateRequest = function(A) {
        var Q = VQ.util.createBuffer();
        Q.putByte(1);
        var B = VQ.util.createBuffer();
        for (var G in A.caStore.certs) {
            var Z = A.caStore.certs[G],
                I = VQ.pki.distinguishedNameToAsn1(Z.subject),
                Y = VQ.asn1.toDer(I);
            B.putInt16(Y.length()), B.putBuffer(Y)
        }
        var J = 1 + Q.length() + 2 + B.length(),
            W = VQ.util.createBuffer();
        return W.putByte(cA.HandshakeType.certificate_request), W.putInt24(J), tL(W, 1, Q), tL(W, 2, B), W
    };
    cA.createServerHelloDone = function(A) {
        var Q = VQ.util.createBuffer();
        return Q.putByte(cA.HandshakeType.server_hello_done), Q.putInt24(0), Q
    };
    cA.createChangeCipherSpec = function() {
        var A = VQ.util.createBuffer();
        return A.putByte(1), A
    };
    cA.createFinished = function(A) {
        var Q = VQ.util.createBuffer();
        Q.putBuffer(A.session.md5.digest()), Q.putBuffer(A.session.sha1.digest());
        var B = A.entity === cA.ConnectionEnd.client,
            G = A.session.sp,
            Z = 12,
            I = PiA,
            Y = B ? "client finished" : "server finished";
        Q = I(G.master_secret, Y, Q.getBytes(), Z);
        var J = VQ.util.createBuffer();
        return J.putByte(cA.HandshakeType.finished), J.putInt24(Q.length()), J.putBuffer(Q), J
    };
    cA.createHeartbeat = function(A, Q, B) {
        if (typeof B > "u") B = Q.length;
        var G = VQ.util.createBuffer();
        G.putByte(A), G.putInt16(B), G.putBytes(Q);
        var Z = G.length(),
            I = Math.max(16, Z - B - 3);
        return G.putBytes(VQ.random.getBytes(I)), G
    };
    cA.queue = function(A, Q) {
        if (!Q) return;
        if (Q.fragment.length() === 0) {
            if (Q.type === cA.ContentType.handshake || Q.type === cA.ContentType.alert || Q.type === cA.ContentType.change_cipher_spec) return
        }
        if (Q.type === cA.ContentType.handshake) {
            var B = Q.fragment.bytes();
            A.session.md5.update(B), A.session.sha1.update(B), B = null
        }
        var G;
        if (Q.fragment.length() <= cA.MaxFragment) G = [Q];
        else {
            G = [];
            var Z = Q.fragment.bytes();
            while (Z.length > cA.MaxFragment) G.push(cA.createRecord(A, {
                type: Q.type,
                data: VQ.util.createBuffer(Z.slice(0, cA.MaxFragment))
            })), Z = Z.slice(cA.MaxFragment);
            if (Z.length > 0) G.push(cA.createRecord(A, {
                type: Q.type,
                data: VQ.util.createBuffer(Z)
            }))
        }
        for (var I = 0; I < G.length && !A.fail; ++I) {
            var Y = G[I],
                J = A.state.current.write;
            if (J.update(A, Y)) A.records.push(Y)
        }
    };
    cA.flush = function(A) {
        for (var Q = 0; Q < A.records.length; ++Q) {
            var B = A.records[Q];
            A.tlsData.putByte(B.type), A.tlsData.putByte(B.version.major), A.tlsData.putByte(B.version.minor), A.tlsData.putInt16(B.fragment.length()), A.tlsData.putBuffer(A.records[Q].fragment)
        }
        return A.records = [], A.tlsDataReady(A)
    };

var Nv1 = function(A) {
            switch (A) {
                case !0:
                    return !0;
                case VQ.pki.certificateError.bad_certificate:
                    return cA.Alert.Description.bad_certificate;
                case VQ.pki.certificateError.unsupported_certificate:
                    return cA.Alert.Description.unsupported_certificate;
                case VQ.pki.certificateError.certificate_revoked:
                    return cA.Alert.Description.certificate_revoked;
                case VQ.pki.certificateError.certificate_expired:
                    return cA.Alert.Description.certificate_expired;
                case VQ.pki.certificateError.certificate_unknown:
                    return cA.Alert.Description.certificate_unknown;
                case VQ.pki.certificateError.unknown_ca:
                    return cA.Alert.Description.unknown_ca;
                default:
                    return cA.Alert.Description.bad_certificate
            }
        },
        At8 = function(A) {
            switch (A) {
                case !0:
                    return !0;
                case cA.Alert.Description.bad_certificate:
                    return VQ.pki.certificateError.bad_certificate;
                case cA.Alert.Description.unsupported_certificate:
                    return VQ.pki.certificateError.unsupported_certificate;
                case cA.Alert.Description.certificate_revoked:
                    return VQ.pki.certificateError.certificate_revoked;
                case cA.Alert.Description.certificate_expired:
                    return VQ.pki.certificateError.certificate_expired;
                case cA.Alert.Description.certificate_unknown:
                    return VQ.pki.certificateError.certificate_unknown;
                case cA.Alert.Description.unknown_ca:
                    return VQ.pki.certificateError.unknown_ca;
                default:
                    return VQ.pki.certificateError.bad_certificate
            }
        };
    cA.verifyCertificateChain = function(A, Q) {
        try {
            var B = {};
            for (var G in A.verifyOptions) B[G] = A.verifyOptions[G];
            B.verify = function(I, Y, J) {
                var W = Nv1(I),
                    X = A.verify(A, I, Y, J);
                if (X !== !0) {
                    if (typeof X === "object" && !VQ.util.isArray(X)) {
                        var F = Error("The application rejected the certificate.");
                        if (F.send = !0, F.alert = {
                                level: cA.Alert.Level.fatal,
                                description: cA.Alert.Description.bad_certificate
                            }, X.message) F.message = X.message;
                        if (X.alert) F.alert.description = X.alert;
                        throw F
                    }
                    if (X !== I) X = At8(X)
                }
                return X
            }, VQ.pki.verifyCertificateChain(A.caStore, Q, B)
        } catch (I) {
            var Z = I;
            if (typeof Z !== "object" || VQ.util.isArray(Z)) Z = {
                send: !0,
                alert: {
                    level: cA.Alert.Level.fatal,
                    description: Nv1(I)
                }
            };
            if (!("send" in Z)) Z.send = !0;
            if (!("alert" in Z)) Z.alert = {
                level: cA.Alert.Level.fatal,
                description: Nv1(Z.error)
            };
            A.error(A, Z)
        }
        return !A.fail
    };
    cA.createSessionCache = function(A, Q) {
        var B = null;
        if (A && A.getSession && A.setSession && A.order) B = A;
        else {
            B = {}, B.cache = A || {}, B.capacity = Math.max(Q || 100, 1), B.order = [];
            for (var G in A)
                if (B.order.length <= Q) B.order.push(G);
                else delete A[G];
            B.getSession = function(Z) {
                var I = null,
                    Y = null;
                if (Z) Y = VQ.util.bytesToHex(Z);
                else if (B.order.length > 0) Y = B.order[0];
                if (Y !== null && Y in B.cache) {
                    I = B.cache[Y], delete B.cache[Y];
                    for (var J in B.order)
                        if (B.order[J] === Y) {
                            B.order.splice(J, 1);
                            break
                        }
                }
                return I
            }, B.setSession = function(Z, I) {
                if (B.order.length === B.capacity) {
                    var Y = B.order.shift();
                    delete B.cache[Y]
                }
                var Y = VQ.util.bytesToHex(Z);
                B.order.push(Y), B.cache[Y] = I
            }
        }
        return B
    };
    cA.createConnection = function(A) {
        var Q = null;
        if (A.caStore)
            if (VQ.util.isArray(A.caStore)) Q = VQ.pki.createCaStore(A.caStore);
            else Q = A.caStore;
        else Q = VQ.pki.createCaStore();
        var B = A.cipherSuites || null;
        if (B === null) {
            B = [];
            for (var G in cA.CipherSuites) B.push(cA.CipherSuites[G])
        }
        var Z = A.server ? cA.ConnectionEnd.server : cA.ConnectionEnd.client,
            I = A.sessionCache ? cA.createSessionCache(A.sessionCache) : null,
            Y = {
                version: {
                    major: cA.Version.major,
                    minor: cA.Version.minor
                },
                entity: Z,
                sessionId: A.sessionId,
                caStore: Q,
                sessionCache: I,
                cipherSuites: B,
                connected: A.connected,
                virtualHost: A.virtualHost || null,
                verifyClient: A.verifyClient || !1,
                verify: A.verify || function(F, V, K, D) {
                    return V
                },
                verifyOptions: A.verifyOptions || {},
                getCertificate: A.getCertificate || null,
                getPrivateKey: A.getPrivateKey || null,
                getSignature: A.getSignature || null,
                input: VQ.util.createBuffer(),
                tlsData: VQ.util.createBuffer(),
                data: VQ.util.createBuffer(),
                tlsDataReady: A.tlsDataReady,
                dataReady: A.dataReady,
                heartbeatReceived: A.heartbeatReceived,
                closed: A.closed,
                error: function(F, V) {
                    if (V.origin = V.origin || (F.entity === cA.ConnectionEnd.client ? "client" : "server"), V.send) cA.queue(F, cA.createAlert(F, V.alert)), cA.flush(F);
                    var K = V.fatal !== !1;
                    if (K) F.fail = !0;
                    if (A.error(F, V), K) F.close(!1)
                },
                deflate: A.deflate || null,
                inflate: A.inflate || null
            };
        Y.reset = function(F) {
            Y.version = {
                major: cA.Version.major,
                minor: cA.Version.minor
            }, Y.record = null, Y.session = null, Y.peerCertificate = null, Y.state = {
                pending: null,
                current: null
            }, Y.expect = Y.entity === cA.ConnectionEnd.client ? ho8 : lo8, Y.fragmented = null, Y.records = [], Y.open = !1, Y.handshakes = 0, Y.handshaking = !1, Y.isConnected = !1, Y.fail = !(F || typeof F > "u"), Y.input.clear(), Y.tlsData.clear(), Y.data.clear(), Y.state.current = cA.createConnectionState(Y)
        }, Y.reset();

var J = function(F, V) {
                var K = V.type - cA.ContentType.change_cipher_spec,
                    D = Ov1[F.entity][F.expect];
                if (K in D) D[K](F, V);
                else cA.handleUnexpected(F, V)
            },
            W = function(F) {
                var V = 0,
                    K = F.input,
                    D = K.length();
                if (D < 5) V = 5 - D;
                else {
                    F.record = {
                        type: K.getByte(),
                        version: {
                            major: K.getByte(),
                            minor: K.getByte()
                        },
                        length: K.getInt16(),
                        fragment: VQ.util.createBuffer(),
                        ready: !1
                    };
                    var H = F.record.version.major === F.version.major;
                    if (H && F.session && F.session.version) H = F.record.version.minor === F.version.minor;
                    if (!H) F.error(F, {
                        message: "Incompatible TLS version.",
                        send: !0,
                        alert: {
                            level: cA.Alert.Level.fatal,
                            description: cA.Alert.Description.protocol_version
                        }
                    })
                }
                return V
            },
            X = function(F) {
                var V = 0,
                    K = F.input,
                    D = K.length();
                if (D < F.record.length) V = F.record.length - D;
                else {
                    F.record.fragment.putBytes(K.getBytes(F.record.length)), K.compact();
                    var H = F.state.current.read;
                    if (H.update(F, F.record)) {
                        if (F.fragmented !== null)
                            if (F.fragmented.type === F.record.type) F.fragmented.fragment.putBuffer(F.record.fragment), F.record = F.fragmented;
                            else F.error(F, {
                                message: "Invalid fragmented record.",
                                send: !0,
                                alert: {
                                    level: cA.Alert.Level.fatal,
                                    description: cA.Alert.Description.unexpected_message
                                }
                            });
                        F.record.ready = !0
                    }
                }
                return V
            };
        return Y.handshake = function(F) {
            if (Y.entity !== cA.ConnectionEnd.client) Y.error(Y, {
                message: "Cannot initiate handshake as a server.",
                fatal: !1
            });
            else if (Y.handshaking) Y.error(Y, {
                message: "Handshake already in progress.",
                fatal: !1
            });
            else {
                if (Y.fail && !Y.open && Y.handshakes === 0) Y.fail = !1;
                Y.handshaking = !0, F = F || "";
                var V = null;
                if (F.length > 0) {
                    if (Y.sessionCache) V = Y.sessionCache.getSession(F);
                    if (V === null) F = ""
                }
                if (F.length === 0 && Y.sessionCache) {
                    if (V = Y.sessionCache.getSession(), V !== null) F = V.id
                }
                if (Y.session = {
                        id: F,
                        version: null,
                        cipherSuite: null,
                        compressionMethod: null,
                        serverCertificate: null,
                        certificateRequest: null,
                        clientCertificate: null,
                        sp: {},
                        md5: VQ.md.md5.create(),
                        sha1: VQ.md.sha1.create()
                    }, V) Y.version = V.version, Y.session.sp = V.sp;
                Y.session.sp.client_random = cA.createRandom().getBytes(), Y.open = !0, cA.queue(Y, cA.createRecord(Y, {
                    type: cA.ContentType.handshake,
                    data: cA.createClientHello(Y)
                })), cA.flush(Y)
            }
        }, Y.process = function(F) {
            var V = 0;
            if (F) Y.input.putBytes(F);
            if (!Y.fail) {
                if (Y.record !== null && Y.record.ready && Y.record.fragment.isEmpty()) Y.record = null;
                if (Y.record === null) V = W(Y);
                if (!Y.fail && Y.record !== null && !Y.record.ready) V = X(Y);
                if (!Y.fail && Y.record !== null && Y.record.ready) J(Y, Y.record)
            }
            return V
        }, Y.prepare = function(F) {
            return cA.queue(Y, cA.createRecord(Y, {
                type: cA.ContentType.application_data,
                data: VQ.util.createBuffer(F)
            })), cA.flush(Y)
        }, Y.prepareHeartbeatRequest = function(F, V) {
            if (F instanceof VQ.util.ByteBuffer) F = F.bytes();