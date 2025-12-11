/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_036.js
 * 处理时间: 2025-12-09T03:41:36.745Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 36/61
 * Lines: 153720 - 155219 (1500 lines)
 * Original file: cli.js
 */

        qo8 = {
            name: "rsapss",
            tagClass: fA.Class.UNIVERSAL,
            type: fA.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "rsapss.hashAlgorithm",
                tagClass: fA.Class.CONTEXT_SPECIFIC,
                type: 0,
                constructed: !0,
                value: [{
                    name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Class.SEQUENCE,
                    constructed: !0,
                    optional: !0,
                    value: [{
                        name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.OID,
                        constructed: !1,
                        capture: "hashOid"
                    }]
                }]
            }, {
                name: "rsapss.maskGenAlgorithm",
                tagClass: fA.Class.CONTEXT_SPECIFIC,
                type: 1,
                constructed: !0,
                value: [{
                    name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Class.SEQUENCE,
                    constructed: !0,
                    optional: !0,
                    value: [{
                        name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.OID,
                        constructed: !1,
                        capture: "maskGenOid"
                    }, {
                        name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.SEQUENCE,
                        constructed: !0,
                        value: [{
                            name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
                            tagClass: fA.Class.UNIVERSAL,
                            type: fA.Type.OID,
                            constructed: !1,
                            capture: "maskGenHashOid"
                        }]
                    }]
                }]
            }, {
                name: "rsapss.saltLength",
                tagClass: fA.Class.CONTEXT_SPECIFIC,
                type: 2,
                optional: !0,
                value: [{
                    name: "rsapss.saltLength.saltLength",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Class.INTEGER,
                    constructed: !1,
                    capture: "saltLength"
                }]
            }, {
                name: "rsapss.trailerField",
                tagClass: fA.Class.CONTEXT_SPECIFIC,
                type: 3,
                optional: !0,
                value: [{
                    name: "rsapss.trailer.trailer",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Class.INTEGER,
                    constructed: !1,
                    capture: "trailer"
                }]
            }]
        },
        No8 = {
            name: "CertificationRequestInfo",
            tagClass: fA.Class.UNIVERSAL,
            type: fA.Type.SEQUENCE,
            constructed: !0,
            captureAsn1: "certificationRequestInfo",
            value: [{
                name: "CertificationRequestInfo.integer",
                tagClass: fA.Class.UNIVERSAL,
                type: fA.Type.INTEGER,
                constructed: !1,
                capture: "certificationRequestInfoVersion"
            }, {
                name: "CertificationRequestInfo.subject",
                tagClass: fA.Class.UNIVERSAL,
                type: fA.Type.SEQUENCE,
                constructed: !0,
                captureAsn1: "certificationRequestInfoSubject"
            }, I8B, {
                name: "CertificationRequestInfo.attributes",
                tagClass: fA.Class.CONTEXT_SPECIFIC,
                type: 0,
                constructed: !0,
                optional: !0,
                capture: "certificationRequestInfoAttributes",
                value: [{
                    name: "CertificationRequestInfo.attributes",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Type.SEQUENCE,
                    constructed: !0,
                    value: [{
                        name: "CertificationRequestInfo.attributes.type",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.OID,
                        constructed: !1
                    }, {
                        name: "CertificationRequestInfo.attributes.value",
                        tagClass: fA.Class.UNIVERSAL,
                        type: fA.Type.SET,
                        constructed: !0
                    }]
                }]
            }]
        },
        Lo8 = {
            name: "CertificationRequest",
            tagClass: fA.Class.UNIVERSAL,
            type: fA.Type.SEQUENCE,
            constructed: !0,
            captureAsn1: "csr",
            value: [No8, {
                name: "CertificationRequest.signatureAlgorithm",
                tagClass: fA.Class.UNIVERSAL,
                type: fA.Type.SEQUENCE,
                constructed: !0,
                value: [{
                    name: "CertificationRequest.signatureAlgorithm.algorithm",
                    tagClass: fA.Class.UNIVERSAL,
                    type: fA.Type.OID,
                    constructed: !1,
                    capture: "csrSignatureOid"
                }, {
                    name: "CertificationRequest.signatureAlgorithm.parameters",
                    tagClass: fA.Class.UNIVERSAL,
                    optional: !0,
                    captureAsn1: "csrSignatureParams"
                }]
            }, {
                name: "CertificationRequest.signature",
                tagClass: fA.Class.UNIVERSAL,
                type: fA.Type.BITSTRING,
                constructed: !1,
                captureBitStringValue: "csrSignature"
            }]
        };
    sQ.RDNAttributesAsArray = function(A, Q) {
        var B = [],
            G, Z, I;
        for (var Y = 0; Y < A.value.length; ++Y) {
            G = A.value[Y];
            for (var J = 0; J < G.value.length; ++J) {
                if (I = {}, Z = G.value[J], I.type = fA.derToOid(Z.value[0].value), I.value = Z.value[1].value, I.valueTagClass = Z.value[1].type, I.type in G3) {
                    if (I.name = G3[I.type], I.name in NJ) I.shortName = NJ[I.name]
                }
                if (Q) Q.update(I.type), Q.update(I.value);
                B.push(I)
            }
        }
        return B
    };
    sQ.CRIAttributesAsArray = function(A) {
        var Q = [];
        for (var B = 0; B < A.length; ++B) {
            var G = A[B],
                Z = fA.derToOid(G.value[0].value),
                I = G.value[1].value;
            for (var Y = 0; Y < I.length; ++Y) {
                var J = {};
                if (J.type = Z, J.value = I[Y].value, J.valueTagClass = I[Y].type, J.type in G3) {
                    if (J.name = G3[J.type], J.name in NJ) J.shortName = NJ[J.name]
                }
                if (J.type === G3.extensionRequest) {
                    J.extensions = [];
                    for (var W = 0; W < J.value.length; ++W) J.extensions.push(sQ.certificateExtensionFromAsn1(J.value[W]))
                }
                Q.push(J)
            }
        }
        return Q
    };

    function Sc(A, Q) {
        if (typeof Q === "string") Q = {
            shortName: Q
        };
        var B = null,
            G;
        for (var Z = 0; B === null && Z < A.attributes.length; ++Z)
            if (G = A.attributes[Z], Q.type && Q.type === G.type) B = G;
            else if (Q.name && Q.name === G.name) B = G;
        else if (Q.shortName && Q.shortName === G.shortName) B = G;
        return B
    }
    var LiA = function(A, Q, B) {
            var G = {};
            if (A !== G3["RSASSA-PSS"]) return G;
            if (B) G = {
                hash: {
                    algorithmOid: G3.sha1
                },
                mgf: {
                    algorithmOid: G3.mgf1,
                    hash: {
                        algorithmOid: G3.sha1
                    }
                },
                saltLength: 20
            };
            var Z = {},
                I = [];
            if (!fA.validate(Q, qo8, Z, I)) {
                var Y = Error("Cannot read RSASSA-PSS parameter block.");
                throw Y.errors = I, Y
            }
            if (Z.hashOid !== void 0) G.hash = G.hash || {}, G.hash.algorithmOid = fA.derToOid(Z.hashOid);
            if (Z.maskGenOid !== void 0) G.mgf = G.mgf || {}, G.mgf.algorithmOid = fA.derToOid(Z.maskGenOid), G.mgf.hash = G.mgf.hash || {}, G.mgf.hash.algorithmOid = fA.derToOid(Z.maskGenHashOid);
            if (Z.saltLength !== void 0) G.saltLength = Z.saltLength.charCodeAt(0);
            return G
        },
        MiA = function(A) {
            switch (G3[A.signatureOid]) {
                case "sha1WithRSAEncryption":
                case "sha1WithRSASignature":
                    return P9.md.sha1.create();
                case "md5WithRSAEncryption":
                    return P9.md.md5.create();
                case "sha256WithRSAEncryption":
                    return P9.md.sha256.create();
                case "sha384WithRSAEncryption":
                    return P9.md.sha384.create();
                case "sha512WithRSAEncryption":
                    return P9.md.sha512.create();
                case "RSASSA-PSS":
                    return P9.md.sha256.create();
                default:
                    var Q = Error("Could not compute " + A.type + " digest. Unknown signature OID.");
                    throw Q.signatureOid = A.signatureOid, Q
            }
        },
        Y8B = function(A) {
            var Q = A.certificate,
                B;
            switch (Q.signatureOid) {
                case G3.sha1WithRSAEncryption:
                case G3.sha1WithRSASignature:
                    break;
                case G3["RSASSA-PSS"]:
                    var G, Z;
                    if (G = G3[Q.signatureParameters.mgf.hash.algorithmOid], G === void 0 || P9.md[G] === void 0) {
                        var I = Error("Unsupported MGF hash function.");
                        throw I.oid = Q.signatureParameters.mgf.hash.algorithmOid, I.name = G, I
                    }
                    if (Z = G3[Q.signatureParameters.mgf.algorithmOid], Z === void 0 || P9.mgf[Z] === void 0) {
                        var I = Error("Unsupported MGF function.");
                        throw I.oid = Q.signatureParameters.mgf.algorithmOid, I.name = Z, I
                    }
                    if (Z = P9.mgf[Z].create(P9.md[G].create()), G = G3[Q.signatureParameters.hash.algorithmOid], G === void 0 || P9.md[G] === void 0) {
                        var I = Error("Unsupported RSASSA-PSS hash function.");
                        throw I.oid = Q.signatureParameters.hash.algorithmOid, I.name = G, I
                    }
                    B = P9.pss.create(P9.md[G].create(), Z, Q.signatureParameters.saltLength);
                    break
            }
            return Q.publicKey.verify(A.md.digest().getBytes(), A.signature, B)
        };
    sQ.certificateFromPem = function(A, Q, B) {
        var G = P9.pem.decode(A)[0];
        if (G.type !== "CERTIFICATE" && G.type !== "X509 CERTIFICATE" && G.type !== "TRUSTED CERTIFICATE") {
            var Z = Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');
            throw Z.headerType = G.type, Z
        }
        if (G.procType && G.procType.type === "ENCRYPTED") throw Error("Could not convert certificate from PEM; PEM is encrypted.");
        var I = fA.fromDer(G.body, B);
        return sQ.certificateFromAsn1(I, Q)
    };
    sQ.certificateToPem = function(A, Q) {
        var B = {
            type: "CERTIFICATE",
            body: fA.toDer(sQ.certificateToAsn1(A)).getBytes()
        };
        return P9.pem.encode(B, {
            maxline: Q
        })
    };
    sQ.publicKeyFromPem = function(A) {
        var Q = P9.pem.decode(A)[0];
        if (Q.type !== "PUBLIC KEY" && Q.type !== "RSA PUBLIC KEY") {
            var B = Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');
            throw B.headerType = Q.type, B
        }
        if (Q.procType && Q.procType.type === "ENCRYPTED") throw Error("Could not convert public key from PEM; PEM is encrypted.");
        var G = fA.fromDer(Q.body);
        return sQ.publicKeyFromAsn1(G)
    };
    sQ.publicKeyToPem = function(A, Q) {
        var B = {
            type: "PUBLIC KEY",
            body: fA.toDer(sQ.publicKeyToAsn1(A)).getBytes()
        };
        return P9.pem.encode(B, {
            maxline: Q
        })
    };
    sQ.publicKeyToRSAPublicKeyPem = function(A, Q) {
        var B = {
            type: "RSA PUBLIC KEY",
            body: fA.toDer(sQ.publicKeyToRSAPublicKey(A)).getBytes()
        };
        return P9.pem.encode(B, {
            maxline: Q
        })
    };
    sQ.getPublicKeyFingerprint = function(A, Q) {
        Q = Q || {};
        var B = Q.md || P9.md.sha1.create(),
            G = Q.type || "RSAPublicKey",
            Z;
        switch (G) {
            case "RSAPublicKey":
                Z = fA.toDer(sQ.publicKeyToRSAPublicKey(A)).getBytes();
                break;
            case "SubjectPublicKeyInfo":
                Z = fA.toDer(sQ.publicKeyToAsn1(A)).getBytes();
                break;
            default:
                throw Error('Unknown fingerprint type "' + Q.type + '".')
        }
        B.start(), B.update(Z);
        var I = B.digest();
        if (Q.encoding === "hex") {
            var Y = I.toHex();
            if (Q.delimiter) return Y.match(/.{2}/g).join(Q.delimiter);
            return Y
        } else if (Q.encoding === "binary") return I.getBytes();
        else if (Q.encoding) throw Error('Unknown encoding "' + Q.encoding + '".');
        return I
    };
    sQ.certificationRequestFromPem = function(A, Q, B) {
        var G = P9.pem.decode(A)[0];
        if (G.type !== "CERTIFICATE REQUEST") {
            var Z = Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');
            throw Z.headerType = G.type, Z
        }
        if (G.procType && G.procType.type === "ENCRYPTED") throw Error("Could not convert certification request from PEM; PEM is encrypted.");
        var I = fA.fromDer(G.body, B);
        return sQ.certificationRequestFromAsn1(I, Q)
    };
    sQ.certificationRequestToPem = function(A, Q) {
        var B = {
            type: "CERTIFICATE REQUEST",
            body: fA.toDer(sQ.certificationRequestToAsn1(A)).getBytes()
        };
        return P9.pem.encode(B, {
            maxline: Q
        })
    };
    sQ.createCertificate = function() {
        var A = {};
        return A.version = 2, A.serialNumber = "00", A.signatureOid = null, A.signature = null, A.siginfo = {}, A.siginfo.algorithmOid = null, A.validity = {}, A.validity.notBefore = new Date, A.validity.notAfter = new Date, A.issuer = {}, A.issuer.getField = function(Q) {
            return Sc(A.issuer, Q)
        }, A.issuer.addField = function(Q) {
            oL([Q]), A.issuer.attributes.push(Q)
        }, A.issuer.attributes = [], A.issuer.hash = null, A.subject = {}, A.subject.getField = function(Q) {
            return Sc(A.subject, Q)
        }, A.subject.addField = function(Q) {
            oL([Q]), A.subject.attributes.push(Q)
        }, A.subject.attributes = [], A.subject.hash = null, A.extensions = [], A.publicKey = null, A.md = null, A.setSubject = function(Q, B) {
            if (oL(Q), A.subject.attributes = Q, delete A.subject.uniqueId, B) A.subject.uniqueId = B;
            A.subject.hash = null
        }, A.setIssuer = function(Q, B) {
            if (oL(Q), A.issuer.attributes = Q, delete A.issuer.uniqueId, B) A.issuer.uniqueId = B;
            A.issuer.hash = null
        }, A.setExtensions = function(Q) {
            for (var B = 0; B < Q.length; ++B) J8B(Q[B], {
                cert: A
            });
            A.extensions = Q
        }, A.getExtension = function(Q) {
            if (typeof Q === "string") Q = {
                name: Q
            };
            var B = null,
                G;
            for (var Z = 0; B === null && Z < A.extensions.length; ++Z)
                if (G = A.extensions[Z], Q.id && G.id === Q.id) B = G;
                else if (Q.name && G.name === Q.name) B = G;
            return B
        }, A.sign = function(Q, B) {
            A.md = B || P9.md.sha1.create();
            var G = G3[A.md.algorithm + "WithRSAEncryption"];
            if (!G) {
                var Z = Error("Could not compute certificate digest. Unknown message digest algorithm OID.");
                throw Z.algorithm = A.md.algorithm, Z
            }
            A.signatureOid = A.siginfo.algorithmOid = G, A.tbsCertificate = sQ.getTBSCertificate(A);
            var I = fA.toDer(A.tbsCertificate);
            A.md.update(I.getBytes()), A.signature = Q.sign(A.md)
        }, A.verify = function(Q) {
            var B = !1;
            if (!A.issued(Q)) {
                var G = Q.issuer,
                    Z = A.subject,
                    I = Error("The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.");
                throw I.expectedIssuer = Z.attributes, I.actualIssuer = G.attributes, I
            }
            var Y = Q.md;
            if (Y === null) {
                Y = MiA({
                    signatureOid: Q.signatureOid,
                    type: "certificate"
                });
                var J = Q.tbsCertificate || sQ.getTBSCertificate(Q),
                    W = fA.toDer(J);
                Y.update(W.getBytes())
            }
            if (Y !== null) B = Y8B({
                certificate: A,
                md: Y,
                signature: Q.signature
            });
            return B
        }, A.isIssuer = function(Q) {
            var B = !1,
                G = A.issuer,
                Z = Q.subject;
            if (G.hash && Z.hash) B = G.hash === Z.hash;
            else if (G.attributes.length === Z.attributes.length) {
                B = !0;
                var I, Y;
                for (var J = 0; B && J < G.attributes.length; ++J)
                    if (I = G.attributes[J], Y = Z.attributes[J], I.type !== Y.type || I.value !== Y.value) B = !1
            }
            return B
        }, A.issued = function(Q) {
            return Q.isIssuer(A)
        }, A.generateSubjectKeyIdentifier = function() {
            return sQ.getPublicKeyFingerprint(A.publicKey, {
                type: "RSAPublicKey"
            })
        }, A.verifySubjectKeyIdentifier = function() {
            var Q = G3.subjectKeyIdentifier;
            for (var B = 0; B < A.extensions.length; ++B) {
                var G = A.extensions[B];
                if (G.id === Q) {
                    var Z = A.generateSubjectKeyIdentifier().getBytes();
                    return P9.util.hexToBytes(G.subjectKeyIdentifier) === Z
                }
            }
            return !1
        }, A
    };
    sQ.certificateFromAsn1 = function(A, Q) {
        var B = {},
            G = [];
        if (!fA.validate(A, wo8, B, G)) {
            var Z = Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");
            throw Z.errors = G, Z
        }
        var I = fA.derToOid(B.publicKeyOid);
        if (I !== sQ.oids.rsaEncryption) throw Error("Cannot read public key. OID is not RSA.");
        var Y = sQ.createCertificate();
        Y.version = B.certVersion ? B.certVersion.charCodeAt(0) : 0;
        var J = P9.util.createBuffer(B.certSerialNumber);
        Y.serialNumber = J.toHex(), Y.signatureOid = P9.asn1.derToOid(B.certSignatureOid), Y.signatureParameters = LiA(Y.signatureOid, B.certSignatureParams, !0), Y.siginfo.algorithmOid = P9.asn1.derToOid(B.certinfoSignatureOid), Y.siginfo.parameters = LiA(Y.siginfo.algorithmOid, B.certinfoSignatureParams, !1), Y.signature = B.certSignature;
        var W = [];
        if (B.certValidity1UTCTime !== void 0) W.push(fA.utcTimeToDate(B.certValidity1UTCTime));
        if (B.certValidity2GeneralizedTime !== void 0) W.push(fA.generalizedTimeToDate(B.certValidity2GeneralizedTime));
        if (B.certValidity3UTCTime !== void 0) W.push(fA.utcTimeToDate(B.certValidity3UTCTime));
        if (B.certValidity4GeneralizedTime !== void 0) W.push(fA.generalizedTimeToDate(B.certValidity4GeneralizedTime));
        if (W.length > 2) throw Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");
        if (W.length < 2) throw Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");
        if (Y.validity.notBefore = W[0], Y.validity.notAfter = W[1], Y.tbsCertificate = B.tbsCertificate, Q) {
            Y.md = MiA({
                signatureOid: Y.signatureOid,
                type: "certificate"
            });
            var X = fA.toDer(Y.tbsCertificate);
            Y.md.update(X.getBytes())
        }
        var F = P9.md.sha1.create(),
            V = fA.toDer(B.certIssuer);
        if (F.update(V.getBytes()), Y.issuer.getField = function(H) {
                return Sc(Y.issuer, H)
            }, Y.issuer.addField = function(H) {
                oL([H]), Y.issuer.attributes.push(H)
            }, Y.issuer.attributes = sQ.RDNAttributesAsArray(B.certIssuer), B.certIssuerUniqueId) Y.issuer.uniqueId = B.certIssuerUniqueId;
        Y.issuer.hash = F.digest().toHex();
        var K = P9.md.sha1.create(),
            D = fA.toDer(B.certSubject);
        if (K.update(D.getBytes()), Y.subject.getField = function(H) {
                return Sc(Y.subject, H)
            }, Y.subject.addField = function(H) {
                oL([H]), Y.subject.attributes.push(H)
            }, Y.subject.attributes = sQ.RDNAttributesAsArray(B.certSubject), B.certSubjectUniqueId) Y.subject.uniqueId = B.certSubjectUniqueId;
        if (Y.subject.hash = K.digest().toHex(), B.certExtensions) Y.extensions = sQ.certificateExtensionsFromAsn1(B.certExtensions);
        else Y.extensions = [];
        return Y.publicKey = sQ.publicKeyFromAsn1(B.subjectPublicKeyInfo), Y
    };
    sQ.certificateExtensionsFromAsn1 = function(A) {
        var Q = [];
        for (var B = 0; B < A.value.length; ++B) {
            var G = A.value[B];
            for (var Z = 0; Z < G.value.length; ++Z) Q.push(sQ.certificateExtensionFromAsn1(G.value[Z]))
        }
        return Q
    };
    sQ.certificateExtensionFromAsn1 = function(A) {
        var Q = {};
        if (Q.id = fA.derToOid(A.value[0].value), Q.critical = !1, A.value[1].type === fA.Type.BOOLEAN) Q.critical = A.value[1].value.charCodeAt(0) !== 0, Q.value = A.value[2].value;
        else Q.value = A.value[1].value;
        if (Q.id in G3) {
            if (Q.name = G3[Q.id], Q.name === "keyUsage") {
                var B = fA.fromDer(Q.value),
                    G = 0,
                    Z = 0;
                if (B.value.length > 1) G = B.value.charCodeAt(1), Z = B.value.length > 2 ? B.value.charCodeAt(2) : 0;
                Q.digitalSignature = (G & 128) === 128, Q.nonRepudiation = (G & 64) === 64, Q.keyEncipherment = (G & 32) === 32, Q.dataEncipherment = (G & 16) === 16, Q.keyAgreement = (G & 8) === 8, Q.keyCertSign = (G & 4) === 4, Q.cRLSign = (G & 2) === 2, Q.encipherOnly = (G & 1) === 1, Q.decipherOnly = (Z & 128) === 128
            } else if (Q.name === "basicConstraints") {
                var B = fA.fromDer(Q.value);
                if (B.value.length > 0 && B.value[0].type === fA.Type.BOOLEAN) Q.cA = B.value[0].value.charCodeAt(0) !== 0;
                else Q.cA = !1;
                var I = null;
                if (B.value.length > 0 && B.value[0].type === fA.Type.INTEGER) I = B.value[0].value;
                else if (B.value.length > 1) I = B.value[1].value;
                if (I !== null) Q.pathLenConstraint = fA.derToInteger(I)
            } else if (Q.name === "extKeyUsage") {
                var B = fA.fromDer(Q.value);
                for (var Y = 0; Y < B.value.length; ++Y) {
                    var J = fA.derToOid(B.value[Y].value);
                    if (J in G3) Q[G3[J]] = !0;
                    else Q[J] = !0
                }
            } else if (Q.name === "nsCertType") {
                var B = fA.fromDer(Q.value),
                    G = 0;
                if (B.value.length > 1) G = B.value.charCodeAt(1);
                Q.client = (G & 128) === 128, Q.server = (G & 64) === 64, Q.email = (G & 32) === 32, Q.objsign = (G & 16) === 16, Q.reserved = (G & 8) === 8, Q.sslCA = (G & 4) === 4, Q.emailCA = (G & 2) === 2, Q.objCA = (G & 1) === 1
            } else if (Q.name === "subjectAltName" || Q.name === "issuerAltName") {
                Q.altNames = [];
                var W, B = fA.fromDer(Q.value);
                for (var X = 0; X < B.value.length; ++X) {
                    W = B.value[X];
                    var F = {
                        type: W.type,
                        value: W.value
                    };
                    switch (Q.altNames.push(F), W.type) {
                        case 1:
                        case 2:
                        case 6:
                            break;
                        case 7:
                            F.ip = P9.util.bytesToIP(W.value);
                            break;
                        case 8:
                            F.oid = fA.derToOid(W.value);
                            break;
                        default:
                    }
                }
            } else if (Q.name === "subjectKeyIdentifier") {
                var B = fA.fromDer(Q.value);
                Q.subjectKeyIdentifier = P9.util.bytesToHex(B.value)
            }
        }
        return Q
    };
    sQ.certificationRequestFromAsn1 = function(A, Q) {
        var B = {},
            G = [];
        if (!fA.validate(A, Lo8, B, G)) {
            var Z = Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");
            throw Z.errors = G, Z
        }
        var I = fA.derToOid(B.publicKeyOid);
        if (I !== sQ.oids.rsaEncryption) throw Error("Cannot read public key. OID is not RSA.");
        var Y = sQ.createCertificationRequest();
        if (Y.version = B.csrVersion ? B.csrVersion.charCodeAt(0) : 0, Y.signatureOid = P9.asn1.derToOid(B.csrSignatureOid), Y.signatureParameters = LiA(Y.signatureOid, B.csrSignatureParams, !0), Y.siginfo.algorithmOid = P9.asn1.derToOid(B.csrSignatureOid), Y.siginfo.parameters = LiA(Y.siginfo.algorithmOid, B.csrSignatureParams, !1), Y.signature = B.csrSignature, Y.certificationRequestInfo = B.certificationRequestInfo, Q) {
            Y.md = MiA({
                signatureOid: Y.signatureOid,
                type: "certification request"
            });
            var J = fA.toDer(Y.certificationRequestInfo);
            Y.md.update(J.getBytes())
        }
        var W = P9.md.sha1.create();
        return Y.subject.getField = function(X) {
            return Sc(Y.subject, X)
        }, Y.subject.addField = function(X) {
            oL([X]), Y.subject.attributes.push(X)
        }, Y.subject.attributes = sQ.RDNAttributesAsArray(B.certificationRequestInfoSubject, W), Y.subject.hash = W.digest().toHex(), Y.publicKey = sQ.publicKeyFromAsn1(B.subjectPublicKeyInfo), Y.getAttribute = function(X) {
            return Sc(Y, X)
        }, Y.addAttribute = function(X) {
            oL([X]), Y.attributes.push(X)
        }, Y.attributes = sQ.CRIAttributesAsArray(B.certificationRequestInfoAttributes || []), Y
    };
    sQ.createCertificationRequest = function() {
        var A = {};
        return A.version = 0, A.signatureOid = null, A.signature = null, A.siginfo = {}, A.siginfo.algorithmOid = null, A.subject = {}, A.subject.getField = function(Q) {
            return Sc(A.subject, Q)
        }, A.subject.addField = function(Q) {
            oL([Q]), A.subject.attributes.push(Q)
        }, A.subject.attributes = [], A.subject.hash = null, A.publicKey = null, A.attributes = [], A.getAttribute = function(Q) {
            return Sc(A, Q)
        }, A.addAttribute = function(Q) {
            oL([Q]), A.attributes.push(Q)
        }, A.md = null, A.setSubject = function(Q) {
            oL(Q), A.subject.attributes = Q, A.subject.hash = null
        }, A.setAttributes = function(Q) {
            oL(Q), A.attributes = Q
        }, A.sign = function(Q, B) {
            A.md = B || P9.md.sha1.create();
            var G = G3[A.md.algorithm + "WithRSAEncryption"];
            if (!G) {
                var Z = Error("Could not compute certification request digest. Unknown message digest algorithm OID.");
                throw Z.algorithm = A.md.algorithm, Z
            }
            A.signatureOid = A.siginfo.algorithmOid = G, A.certificationRequestInfo = sQ.getCertificationRequestInfo(A);
            var I = fA.toDer(A.certificationRequestInfo);
            A.md.update(I.getBytes()), A.signature = Q.sign(A.md)
        }, A.verify = function() {
            var Q = !1,
                B = A.md;
            if (B === null) {
                B = MiA({
                    signatureOid: A.signatureOid,
                    type: "certification request"
                });
                var G = A.certificationRequestInfo || sQ.getCertificationRequestInfo(A),
                    Z = fA.toDer(G);
                B.update(Z.getBytes())
            }
            if (B !== null) Q = Y8B({
                certificate: A,
                md: B,
                signature: A.signature
            });
            return Q
        }, A
    };

    function b3A(A) {
        var Q = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, []),
            B, G, Z = A.attributes;
        for (var I = 0; I < Z.length; ++I) {
            B = Z[I];
            var Y = B.value,
                J = fA.Type.PRINTABLESTRING;
            if ("valueTagClass" in B) {
                if (J = B.valueTagClass, J === fA.Type.UTF8) Y = P9.util.encodeUtf8(Y)
            }
            G = fA.create(fA.Class.UNIVERSAL, fA.Type.SET, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.OID, !1, fA.oidToDer(B.type).getBytes()), fA.create(fA.Class.UNIVERSAL, J, !1, Y)])]), Q.value.push(G)
        }
        return Q
    }

    function oL(A) {
        var Q;
        for (var B = 0; B < A.length; ++B) {
            if (Q = A[B], typeof Q.name > "u") {
                if (Q.type && Q.type in sQ.oids) Q.name = sQ.oids[Q.type];
                else if (Q.shortName && Q.shortName in NJ) Q.name = sQ.oids[NJ[Q.shortName]]
            }
            if (typeof Q.type > "u")
                if (Q.name && Q.name in sQ.oids) Q.type = sQ.oids[Q.name];
                else {
                    var G = Error("Attribute type not specified.");
                    throw G.attribute = Q, G
                } if (typeof Q.shortName > "u") {
                if (Q.name && Q.name in NJ) Q.shortName = NJ[Q.name]
            }
            if (Q.type === G3.extensionRequest) {
                if (Q.valueConstructed = !0, Q.valueTagClass = fA.Type.SEQUENCE, !Q.value && Q.extensions) {
                    Q.value = [];
                    for (var Z = 0; Z < Q.extensions.length; ++Z) Q.value.push(sQ.certificateExtensionToAsn1(J8B(Q.extensions[Z])))
                }
            }
            if (typeof Q.value > "u") {
                var G = Error("Attribute value not specified.");
                throw G.attribute = Q, G
            }
        }
    }

    function J8B(A, Q) {
        if (Q = Q || {}, typeof A.name > "u") {
            if (A.id && A.id in sQ.oids) A.name = sQ.oids[A.id]
        }
        if (typeof A.id > "u")
            if (A.name && A.name in sQ.oids) A.id = sQ.oids[A.name];
            else {
                var B = Error("Extension ID not specified.");
                throw B.extension = A, B
            } if (typeof A.value < "u") return A;
        if (A.name === "keyUsage") {
            var G = 0,
                Z = 0,
                I = 0;
            if (A.digitalSignature) Z |= 128, G = 7;
            if (A.nonRepudiation) Z |= 64, G = 6;
            if (A.keyEncipherment) Z |= 32, G = 5;
            if (A.dataEncipherment) Z |= 16, G = 4;
            if (A.keyAgreement) Z |= 8, G = 3;
            if (A.keyCertSign) Z |= 4, G = 2;
            if (A.cRLSign) Z |= 2, G = 1;
            if (A.encipherOnly) Z |= 1, G = 0;
            if (A.decipherOnly) I |= 128, G = 7;
            var Y = String.fromCharCode(G);
            if (I !== 0) Y += String.fromCharCode(Z) + String.fromCharCode(I);
            else if (Z !== 0) Y += String.fromCharCode(Z);
            A.value = fA.create(fA.Class.UNIVERSAL, fA.Type.BITSTRING, !1, Y)
        } else if (A.name === "basicConstraints") {
            if (A.value = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, []), A.cA) A.value.value.push(fA.create(fA.Class.UNIVERSAL, fA.Type.BOOLEAN, !1, String.fromCharCode(255)));
            if ("pathLenConstraint" in A) A.value.value.push(fA.create(fA.Class.UNIVERSAL, fA.Type.INTEGER, !1, fA.integerToDer(A.pathLenConstraint).getBytes()))
        } else if (A.name === "extKeyUsage") {
            A.value = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, []);
            var J = A.value.value;
            for (var W in A) {
                if (A[W] !== !0) continue;
                if (W in G3) J.push(fA.create(fA.Class.UNIVERSAL, fA.Type.OID, !1, fA.oidToDer(G3[W]).getBytes()));
                else if (W.indexOf(".") !== -1) J.push(fA.create(fA.Class.UNIVERSAL, fA.Type.OID, !1, fA.oidToDer(W).getBytes()))
            }
        } else if (A.name === "nsCertType") {
            var G = 0,
                Z = 0;
            if (A.client) Z |= 128, G = 7;
            if (A.server) Z |= 64, G = 6;
            if (A.email) Z |= 32, G = 5;
            if (A.objsign) Z |= 16, G = 4;
            if (A.reserved) Z |= 8, G = 3;
            if (A.sslCA) Z |= 4, G = 2;
            if (A.emailCA) Z |= 2, G = 1;
            if (A.objCA) Z |= 1, G = 0;
            var Y = String.fromCharCode(G);
            if (Z !== 0) Y += String.fromCharCode(Z);
            A.value = fA.create(fA.Class.UNIVERSAL, fA.Type.BITSTRING, !1, Y)
        } else if (A.name === "subjectAltName" || A.name === "issuerAltName") {
            A.value = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, []);
            var X;
            for (var F = 0; F < A.altNames.length; ++F) {
                X = A.altNames[F];
                var Y = X.value;
                if (X.type === 7 && X.ip) {
                    if (Y = P9.util.bytesFromIP(X.ip), Y === null) {
                        var B = Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');
                        throw B.extension = A, B
                    }
                } else if (X.type === 8)
                    if (X.oid) Y = fA.oidToDer(fA.oidToDer(X.oid));
                    else Y = fA.oidToDer(Y);
                A.value.value.push(fA.create(fA.Class.CONTEXT_SPECIFIC, X.type, !1, Y))
            }
        } else if (A.name === "nsComment" && Q.cert) {
            if (!/^[\x00-\x7F]*TextComponent/.test(A.comment) || A.comment.length < 1 || A.comment.length > 128) throw Error('Invalid "nsComment" content.');
            A.value = fA.create(fA.Class.UNIVERSAL, fA.Type.IA5STRING, !1, A.comment)
        } else if (A.name === "subjectKeyIdentifier" && Q.cert) {
            var V = Q.cert.generateSubjectKeyIdentifier();
            A.subjectKeyIdentifier = V.toHex(), A.value = fA.create(fA.Class.UNIVERSAL, fA.Type.OCTETSTRING, !1, V.getBytes())
        } else if (A.name === "authorityKeyIdentifier" && Q.cert) {
            A.value = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, []);
            var J = A.value.value;
            if (A.keyIdentifier) {
                var K = A.keyIdentifier === !0 ? Q.cert.generateSubjectKeyIdentifier().getBytes() : A.keyIdentifier;
                J.push(fA.create(fA.Class.CONTEXT_SPECIFIC, 0, !1, K))
            }
            if (A.authorityCertIssuer) {
                var D = [fA.create(fA.Class.CONTEXT_SPECIFIC, 4, !0, [b3A(A.authorityCertIssuer === !0 ? Q.cert.issuer : A.authorityCertIssuer)])];
                J.push(fA.create(fA.Class.CONTEXT_SPECIFIC, 1, !0, D))
            }
            if (A.serialNumber) {
                var H = P9.util.hexToBytes(A.serialNumber === !0 ? Q.cert.serialNumber : A.serialNumber);
                J.push(fA.create(fA.Class.CONTEXT_SPECIFIC, 2, !1, H))
            }
        } else if (A.name === "cRLDistributionPoints") {
            A.value = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, []);
            var J = A.value.value,
                C = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, []),
                E = fA.create(fA.Class.CONTEXT_SPECIFIC, 0, !0, []),
                X;
            for (var F = 0; F < A.altNames.length; ++F) {
                X = A.altNames[F];
                var Y = X.value;
                if (X.type === 7 && X.ip) {
                    if (Y = P9.util.bytesFromIP(X.ip), Y === null) {
                        var B = Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');
                        throw B.extension = A, B
                    }
                } else if (X.type === 8)
                    if (X.oid) Y = fA.oidToDer(fA.oidToDer(X.oid));
                    else Y = fA.oidToDer(Y);
                E.value.push(fA.create(fA.Class.CONTEXT_SPECIFIC, X.type, !1, Y))
            }
            C.value.push(fA.create(fA.Class.CONTEXT_SPECIFIC, 0, !0, [E])), J.push(C)
        }
        if (typeof A.value > "u") {
            var B = Error("Extension value not specified.");
            throw B.extension = A, B
        }
        return A
    }

    function Ev1(A, Q) {
        switch (A) {
            case G3["RSASSA-PSS"]:
                var B = [];
                if (Q.hash.algorithmOid !== void 0) B.push(fA.create(fA.Class.CONTEXT_SPECIFIC, 0, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.OID, !1, fA.oidToDer(Q.hash.algorithmOid).getBytes()), fA.create(fA.Class.UNIVERSAL, fA.Type.NULL, !1, "")])]));
                if (Q.mgf.algorithmOid !== void 0) B.push(fA.create(fA.Class.CONTEXT_SPECIFIC, 1, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.OID, !1, fA.oidToDer(Q.mgf.algorithmOid).getBytes()), fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.OID, !1, fA.oidToDer(Q.mgf.hash.algorithmOid).getBytes()), fA.create(fA.Class.UNIVERSAL, fA.Type.NULL, !1, "")])])]));
                if (Q.saltLength !== void 0) B.push(fA.create(fA.Class.CONTEXT_SPECIFIC, 2, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.INTEGER, !1, fA.integerToDer(Q.saltLength).getBytes())]));
                return fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, B);
            default:
                return fA.create(fA.Class.UNIVERSAL, fA.Type.NULL, !1, "")
        }
    }

    function Mo8(A) {
        var Q = fA.create(fA.Class.CONTEXT_SPECIFIC, 0, !0, []);
        if (A.attributes.length === 0) return Q;
        var B = A.attributes;
        for (var G = 0; G < B.length; ++G) {
            var Z = B[G],
                I = Z.value,
                Y = fA.Type.UTF8;
            if ("valueTagClass" in Z) Y = Z.valueTagClass;
            if (Y === fA.Type.UTF8) I = P9.util.encodeUtf8(I);
            var J = !1;
            if ("valueConstructed" in Z) J = Z.valueConstructed;
            var W = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.OID, !1, fA.oidToDer(Z.type).getBytes()), fA.create(fA.Class.UNIVERSAL, fA.Type.SET, !0, [fA.create(fA.Class.UNIVERSAL, Y, J, I)])]);
            Q.value.push(W)
        }
        return Q
    }
    var Oo8 = new Date("1950-01-01T00:00:00Z"),
        Ro8 = new Date("2050-01-01T00:00:00Z");

    function Z8B(A) {
        if (A >= Oo8 && A < Ro8) return fA.create(fA.Class.UNIVERSAL, fA.Type.UTCTIME, !1, fA.dateToUtcTime(A));
        else return fA.create(fA.Class.UNIVERSAL, fA.Type.GENERALIZEDTIME, !1, fA.dateToGeneralizedTime(A))
    }
    sQ.getTBSCertificate = function(A) {
        var Q = Z8B(A.validity.notBefore),
            B = Z8B(A.validity.notAfter),
            G = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [fA.create(fA.Class.CONTEXT_SPECIFIC, 0, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.INTEGER, !1, fA.integerToDer(A.version).getBytes())]), fA.create(fA.Class.UNIVERSAL, fA.Type.INTEGER, !1, P9.util.hexToBytes(A.serialNumber)), fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.OID, !1, fA.oidToDer(A.siginfo.algorithmOid).getBytes()), Ev1(A.siginfo.algorithmOid, A.siginfo.parameters)]), b3A(A.issuer), fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [Q, B]), b3A(A.subject), sQ.publicKeyToAsn1(A.publicKey)]);
        if (A.issuer.uniqueId) G.value.push(fA.create(fA.Class.CONTEXT_SPECIFIC, 1, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.BITSTRING, !1, String.fromCharCode(0) + A.issuer.uniqueId)]));
        if (A.subject.uniqueId) G.value.push(fA.create(fA.Class.CONTEXT_SPECIFIC, 2, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.BITSTRING, !1, String.fromCharCode(0) + A.subject.uniqueId)]));
        if (A.extensions.length > 0) G.value.push(sQ.certificateExtensionsToAsn1(A.extensions));
        return G
    };
    sQ.getCertificationRequestInfo = function(A) {
        var Q = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.INTEGER, !1, fA.integerToDer(A.version).getBytes()), b3A(A.subject), sQ.publicKeyToAsn1(A.publicKey), Mo8(A)]);
        return Q
    };
    sQ.distinguishedNameToAsn1 = function(A) {
        return b3A(A)
    };
    sQ.certificateToAsn1 = function(A) {
        var Q = A.tbsCertificate || sQ.getTBSCertificate(A);
        return fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [Q, fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.OID, !1, fA.oidToDer(A.signatureOid).getBytes()), Ev1(A.signatureOid, A.signatureParameters)]), fA.create(fA.Class.UNIVERSAL, fA.Type.BITSTRING, !1, String.fromCharCode(0) + A.signature)])
    };
    sQ.certificateExtensionsToAsn1 = function(A) {
        var Q = fA.create(fA.Class.CONTEXT_SPECIFIC, 3, !0, []),
            B = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, []);
        Q.value.push(B);
        for (var G = 0; G < A.length; ++G) B.value.push(sQ.certificateExtensionToAsn1(A[G]));
        return Q
    };
    sQ.certificateExtensionToAsn1 = function(A) {
        var Q = fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, []);
        if (Q.value.push(fA.create(fA.Class.UNIVERSAL, fA.Type.OID, !1, fA.oidToDer(A.id).getBytes())), A.critical) Q.value.push(fA.create(fA.Class.UNIVERSAL, fA.Type.BOOLEAN, !1, String.fromCharCode(255)));
        var B = A.value;
        if (typeof A.value !== "string") B = fA.toDer(B).getBytes();
        return Q.value.push(fA.create(fA.Class.UNIVERSAL, fA.Type.OCTETSTRING, !1, B)), Q
    };
    sQ.certificationRequestToAsn1 = function(A) {
        var Q = A.certificationRequestInfo || sQ.getCertificationRequestInfo(A);
        return fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [Q, fA.create(fA.Class.UNIVERSAL, fA.Type.SEQUENCE, !0, [fA.create(fA.Class.UNIVERSAL, fA.Type.OID, !1, fA.oidToDer(A.signatureOid).getBytes()), Ev1(A.signatureOid, A.signatureParameters)]), fA.create(fA.Class.UNIVERSAL, fA.Type.BITSTRING, !1, String.fromCharCode(0) + A.signature)])
    };
    sQ.createCaStore = function(A) {
        var Q = {
            certs: {}
        };
        Q.getIssuer = function(Y) {
            var J = B(Y.issuer);
            return J
        }, Q.addCertificate = function(Y) {
            if (typeof Y === "string") Y = P9.pki.certificateFromPem(Y);
            if (G(Y.subject), !Q.hasCertificate(Y))
                if (Y.subject.hash in Q.certs) {
                    var J = Q.certs[Y.subject.hash];
                    if (!P9.util.isArray(J)) J = [J];
                    J.push(Y), Q.certs[Y.subject.hash] = J
                } else Q.certs[Y.subject.hash] = Y
        }, Q.hasCertificate = function(Y) {
            if (typeof Y === "string") Y = P9.pki.certificateFromPem(Y);
            var J = B(Y.subject);
            if (!J) return !1;
            if (!P9.util.isArray(J)) J = [J];
            var W = fA.toDer(sQ.certificateToAsn1(Y)).getBytes();
            for (var X = 0; X < J.length; ++X) {
                var F = fA.toDer(sQ.certificateToAsn1(J[X])).getBytes();
                if (W === F) return !0
            }
            return !1
        }, Q.listAllCertificates = function() {
            var Y = [];
            for (var J in Q.certs)
                if (Q.certs.hasOwnProperty(J)) {
                    var W = Q.certs[J];
                    if (!P9.util.isArray(W)) Y.push(W);
                    else
                        for (var X = 0; X < W.length; ++X) Y.push(W[X])
                } return Y
        }, Q.removeCertificate = function(Y) {
            var J;
            if (typeof Y === "string") Y = P9.pki.certificateFromPem(Y);
            if (G(Y.subject), !Q.hasCertificate(Y)) return null;
            var W = B(Y.subject);
            if (!P9.util.isArray(W)) return J = Q.certs[Y.subject.hash], delete Q.certs[Y.subject.hash], J;
            var X = fA.toDer(sQ.certificateToAsn1(Y)).getBytes();
            for (var F = 0; F < W.length; ++F) {
                var V = fA.toDer(sQ.certificateToAsn1(W[F])).getBytes();
                if (X === V) J = W[F], W.splice(F, 1)
            }
            if (W.length === 0) delete Q.certs[Y.subject.hash];
            return J
        };

        function B(Y) {
            return G(Y), Q.certs[Y.hash] || null
        }

        function G(Y) {
            if (!Y.hash) {
                var J = P9.md.sha1.create();
                Y.attributes = sQ.RDNAttributesAsArray(b3A(Y), J), Y.hash = J.digest().toHex()
            }
        }
        if (A)
            for (var Z = 0; Z < A.length; ++Z) {
                var I = A[Z];
                Q.addCertificate(I)
            }
        return Q
    };
    sQ.certificateError = {
        bad_certificate: "forge.pki.BadCertificate",
        unsupported_certificate: "forge.pki.UnsupportedCertificate",
        certificate_revoked: "forge.pki.CertificateRevoked",
        certificate_expired: "forge.pki.CertificateExpired",
        certificate_unknown: "forge.pki.CertificateUnknown",
        unknown_ca: "forge.pki.UnknownCertificateAuthority"
    };
    sQ.verifyCertificateChain = function(A, Q, B) {
        if (typeof B === "function") B = {
            verify: B
        };
        B = B || {}, Q = Q.slice(0);
        var G = Q.slice(0),
            Z = B.validityCheckDate;
        if (typeof Z > "u") Z = new Date;
        var I = !0,
            Y = null,
            J = 0;
        do {
            var W = Q.shift(),
                X = null,
                F = !1;
            if (Z) {
                if (Z < W.validity.notBefore || Z > W.validity.notAfter) Y = {
                    message: "Certificate is not valid yet or has expired.",
                    error: sQ.certificateError.certificate_expired,
                    notBefore: W.validity.notBefore,
                    notAfter: W.validity.notAfter,
                    now: Z
                }
            }
            if (Y === null) {
                if (X = Q[0] || A.getIssuer(W), X === null) {
                    if (W.isIssuer(W)) F = !0, X = W
                }
                if (X) {
                    var V = X;
                    if (!P9.util.isArray(V)) V = [V];
                    var K = !1;
                    while (!K && V.length > 0) {
                        X = V.shift();
                        try {
                            K = X.verify(W)
                        } catch (R) {}
                    }
                    if (!K) Y = {
                        message: "Certificate signature is invalid.",
                        error: sQ.certificateError.bad_certificate
                    }
                }
                if (Y === null && (!X || F) && !A.hasCertificate(W)) Y = {
                    message: "Certificate is not trusted.",
                    error: sQ.certificateError.unknown_ca
                }
            }
            if (Y === null && X && !W.isIssuer(X)) Y = {
                message: "Certificate issuer is invalid.",
                error: sQ.certificateError.bad_certificate
            };
            if (Y === null) {
                var D = {
                    keyUsage: !0,
                    basicConstraints: !0
                };
                for (var H = 0; Y === null && H < W.extensions.length; ++H) {
                    var C = W.extensions[H];
                    if (C.critical && !(C.name in D)) Y = {
                        message: "Certificate has an unsupported critical extension.",
                        error: sQ.certificateError.unsupported_certificate
                    }
                }
            }
            if (Y === null && (!I || Q.length === 0 && (!X || F))) {
                var E = W.getExtension("basicConstraints"),
                    z = W.getExtension("keyUsage");
                if (z !== null) {
                    if (!z.keyCertSign || E === null) Y = {
                        message: "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
                        error: sQ.certificateError.bad_certificate
                    }
                }
                if (Y === null && E !== null && !E.cA) Y = {
                    message: "Certificate basicConstraints indicates the certificate is not a CA.",
                    error: sQ.certificateError.bad_certificate
                };
                if (Y === null && z !== null && "pathLenConstraint" in E) {
                    var w = J - 1;
                    if (w > E.pathLenConstraint) Y = {
                        message: "Certificate basicConstraints pathLenConstraint violated.",
                        error: sQ.certificateError.bad_certificate
                    }
                }
            }
            var N = Y === null ? !0 : Y.error,
                q = B.verify ? B.verify(N, J, G) : N;
            if (q === !0) Y = null;
            else {
                if (N === !0) Y = {
                    message: "The application rejected the certificate.",
                    error: sQ.certificateError.bad_certificate
                };
                if (q || q === 0) {
                    if (typeof q === "object" && !P9.util.isArray(q)) {
                        if (q.message) Y.message = q.message;
                        if (q.error) Y.error = q.error
                    } else if (typeof q === "string") Y.error = q
                }
                throw Y
            }
            I = !1, ++J
        } while (Q.length > 0);
        return !0
    }
});
var Uv1 = moduleWrapper((TT7, F8B) => {
    var jZ = n8();
    GT();
    j3A();
    Tc();
    Hv1();
    Dv1();
    aL();
    PzA();
    y3A();
    P3();
    OiA();
    var {
        asn1: T1,
        pki: s6
    } = jZ, SzA = F8B.exports = jZ.pkcs12 = jZ.pkcs12 || {}, X8B = {
        name: "ContentInfo",
        tagClass: T1.Class.UNIVERSAL,
        type: T1.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "ContentInfo.contentType",
            tagClass: T1.Class.UNIVERSAL,
            type: T1.Type.OID,
            constructed: !1,
            capture: "contentType"
        }, {
            name: "ContentInfo.content",
            tagClass: T1.Class.CONTEXT_SPECIFIC,
            constructed: !0,
            captureAsn1: "content"
        }]
    }, To8 = {
        name: "PFX",
        tagClass: T1.Class.UNIVERSAL,
        type: T1.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "PFX.version",
            tagClass: T1.Class.UNIVERSAL,
            type: T1.Type.INTEGER,
            constructed: !1,
            capture: "version"
        }, X8B, {
            name: "PFX.macData",
            tagClass: T1.Class.UNIVERSAL,
            type: T1.Type.SEQUENCE,
            constructed: !0,
            optional: !0,
            captureAsn1: "mac",
            value: [{
                name: "PFX.macData.mac",
                tagClass: T1.Class.UNIVERSAL,
                type: T1.Type.SEQUENCE,
                constructed: !0,
                value: [{
                    name: "PFX.macData.mac.digestAlgorithm",
                    tagClass: T1.Class.UNIVERSAL,
                    type: T1.Type.SEQUENCE,
                    constructed: !0,
                    value: [{
                        name: "PFX.macData.mac.digestAlgorithm.algorithm",
                        tagClass: T1.Class.UNIVERSAL,
                        type: T1.Type.OID,
                        constructed: !1,
                        capture: "macAlgorithm"
                    }, {
                        name: "PFX.macData.mac.digestAlgorithm.parameters",
                        tagClass: T1.Class.UNIVERSAL,
                        captureAsn1: "macAlgorithmParameters"
                    }]
                }, {
                    name: "PFX.macData.mac.digest",
                    tagClass: T1.Class.UNIVERSAL,
                    type: T1.Type.OCTETSTRING,
                    constructed: !1,
                    capture: "macDigest"
                }]
            }, {
                name: "PFX.macData.macSalt",
                tagClass: T1.Class.UNIVERSAL,
                type: T1.Type.OCTETSTRING,
                constructed: !1,
                capture: "macSalt"
            }, {
                name: "PFX.macData.iterations",
                tagClass: T1.Class.UNIVERSAL,
                type: T1.Type.INTEGER,
                constructed: !1,
                optional: !0,
                capture: "macIterations"
            }]
        }]
    }, Po8 = {
        name: "SafeBag",
        tagClass: T1.Class.UNIVERSAL,
        type: T1.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "SafeBag.bagId",
            tagClass: T1.Class.UNIVERSAL,
            type: T1.Type.OID,
            constructed: !1,
            capture: "bagId"
        }, {
            name: "SafeBag.bagValue",
            tagClass: T1.Class.CONTEXT_SPECIFIC,
            constructed: !0,
            captureAsn1: "bagValue"
        }, {
            name: "SafeBag.bagAttributes",
            tagClass: T1.Class.UNIVERSAL,
            type: T1.Type.SET,
            constructed: !0,
            optional: !0,
            capture: "bagAttributes"
        }]
    }, jo8 = {
        name: "Attribute",
        tagClass: T1.Class.UNIVERSAL,
        type: T1.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "Attribute.attrId",
            tagClass: T1.Class.UNIVERSAL,
            type: T1.Type.OID,
            constructed: !1,
            capture: "oid"
        }, {
            name: "Attribute.attrValues",
            tagClass: T1.Class.UNIVERSAL,
            type: T1.Type.SET,
            constructed: !0,
            capture: "values"
        }]
    }, So8 = {
        name: "CertBag",
        tagClass: T1.Class.UNIVERSAL,
        type: T1.Type.SEQUENCE,
        constructed: !0,
        value: [{
            name: "CertBag.certId",
            tagClass: T1.Class.UNIVERSAL,
            type: T1.Type.OID,
            constructed: !1,
            capture: "certId"
        }, {
            name: "CertBag.certValue",
            tagClass: T1.Class.CONTEXT_SPECIFIC,
            constructed: !0,
            value: [{
                name: "CertBag.certValue[0]",
                tagClass: T1.Class.UNIVERSAL,
                type: T1.Class.OCTETSTRING,
                constructed: !1,
                capture: "cert"
            }]
        }]
    };

    function jzA(A, Q, B, G) {
        var Z = [];
        for (var I = 0; I < A.length; I++)
            for (var Y = 0; Y < A[I].safeBags.length; Y++) {
                var J = A[I].safeBags[Y];
                if (G !== void 0 && J.type !== G) continue;
                if (Q === null) {
                    Z.push(J);
                    continue
                }
                if (J.attributes[Q] !== void 0 && J.attributes[Q].indexOf(B) >= 0) Z.push(J)
            }
        return Z
    }
    SzA.pkcs12FromAsn1 = function(A, Q, B) {
        if (typeof Q === "string") B = Q, Q = !0;
        else if (Q === void 0) Q = !0;
        var G = {},
            Z = [];
        if (!T1.validate(A, To8, G, Z)) {
            var I = Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.");
            throw I.errors = I, I
        }
        var Y = {
            version: G.version.charCodeAt(0),
            safeContents: [],
            getBags: function(E) {
                var z = {},
                    w;
                if ("localKeyId" in E) w = E.localKeyId;
                else if ("localKeyIdHex" in E) w = jZ.util.hexToBytes(E.localKeyIdHex);
                if (w === void 0 && !("friendlyName" in E) && "bagType" in E) z[E.bagType] = jzA(Y.safeContents, null, null, E.bagType);
                if (w !== void 0) z.localKeyId = jzA(Y.safeContents, "localKeyId", w, E.bagType);
                if ("friendlyName" in E) z.friendlyName = jzA(Y.safeContents, "friendlyName", E.friendlyName, E.bagType);
                return z
            },
            getBagsByFriendlyName: function(E, z) {
                return jzA(Y.safeContents, "friendlyName", E, z)
            },
            getBagsByLocalKeyId: function(E, z) {
                return jzA(Y.safeContents, "localKeyId", E, z)
            }
        };
        if (G.version.charCodeAt(0) !== 3) {
            var I = Error("PKCS#12 PFX of version other than 3 not supported.");
            throw I.version = G.version.charCodeAt(0), I
        }
        if (T1.derToOid(G.contentType) !== s6.oids.data) {
            var I = Error("Only PKCS#12 PFX in password integrity mode supported.");
            throw I.oid = T1.derToOid(G.contentType), I
        }
        var J = G.content.value[0];
        if (J.tagClass !== T1.Class.UNIVERSAL || J.type !== T1.Type.OCTETSTRING) throw Error("PKCS#12 authSafe content data is not an OCTET STRING.");
        if (J = zv1(J), G.mac) {
            var W = null,
                X = 0,
                F = T1.derToOid(G.macAlgorithm);
            switch (F) {
                case s6.oids.sha1:
                    W = jZ.md.sha1.create(), X = 20;
                    break;
                case s6.oids.sha256:
                    W = jZ.md.sha256.create(), X = 32;
                    break;
                case s6.oids.sha384:
                    W = jZ.md.sha384.create(), X = 48;
                    break;
                case s6.oids.sha512:
                    W = jZ.md.sha512.create(), X = 64;
                    break;
                case s6.oids.md5:
                    W = jZ.md.md5.create(), X = 16;
                    break
            }
            if (W === null) throw Error("PKCS#12 uses unsupported MAC algorithm: " + F);
            var V = new jZ.util.ByteBuffer(G.macSalt),
                K = "macIterations" in G ? parseInt(jZ.util.bytesToHex(G.macIterations), 16) : 1,
                D = SzA.generateKey(B, V, 3, K, X, W),
                H = jZ.hmac.create();
            H.start(W, D), H.update(J.value);
            var C = H.getMac();
            if (C.getBytes() !== G.macDigest) throw Error("PKCS#12 MAC could not be verified. Invalid password?")
        }
        return _o8(Y, J.value, Q, B), Y
    };

    function zv1(A) {
        if (A.composed || A.constructed) {
            var Q = jZ.util.createBuffer();
            for (var B = 0; B < A.value.length; ++B) Q.putBytes(A.value[B].value);
            A.composed = A.constructed = !1, A.value = Q.getBytes()
        }
        return A
    }

    function _o8(A, Q, B, G) {
        if (Q = T1.fromDer(Q, B), Q.tagClass !== T1.Class.UNIVERSAL || Q.type !== T1.Type.SEQUENCE || Q.constructed !== !0) throw Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");
        for (var Z = 0; Z < Q.value.length; Z++) {
            var I = Q.value[Z],
                Y = {},
                J = [];
            if (!T1.validate(I, X8B, Y, J)) {
                var W = Error("Cannot read ContentInfo.");
                throw W.errors = J, W
            }
            var X = {
                    encrypted: !1
                },
                F = null,
                V = Y.content.value[0];
            switch (T1.derToOid(Y.contentType)) {
                case s6.oids.data:
                    if (V.tagClass !== T1.Class.UNIVERSAL || V.type !== T1.Type.OCTETSTRING) throw Error("PKCS#12 SafeContents Data is not an OCTET STRING.");
                    F = zv1(V).value;
                    break;
                case s6.oids.encryptedData:
                    F = ko8(V, G), X.encrypted = !0;
                    break;
                default:
                    var W = Error("Unsupported PKCS#12 contentType.");
                    throw W.contentType = T1.derToOid(Y.contentType), W
            }
            X.safeBags = yo8(F, B, G), A.safeContents.push(X)
        }
    }

    function ko8(A, Q) {
        var B = {},
            G = [];
        if (!T1.validate(A, jZ.pkcs7.asn1.encryptedDataValidator, B, G)) {
            var Z = Error("Cannot read EncryptedContentInfo.");
            throw Z.errors = G, Z
        }
        var I = T1.derToOid(B.contentType);
        if (I !== s6.oids.data) {
            var Z = Error("PKCS#12 EncryptedContentInfo ContentType is not Data.");
            throw Z.oid = I, Z
        }
        I = T1.derToOid(B.encAlgorithm);
        var Y = s6.pbe.getCipher(I, B.encParameter, Q),
            J = zv1(B.encryptedContentAsn1),
            W = jZ.util.createBuffer(J.value);
        if (Y.update(W), !Y.finish()) throw Error("Failed to decrypt PKCS#12 SafeContents.");
        return Y.output.getBytes()
    }

    function yo8(A, Q, B) {
        if (!Q && A.length === 0) return [];
        if (A = T1.fromDer(A, Q), A.tagClass !== T1.Class.UNIVERSAL || A.type !== T1.Type.SEQUENCE || A.constructed !== !0) throw Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");
        var G = [];
        for (var Z = 0; Z < A.value.length; Z++) {
            var I = A.value[Z],
                Y = {},
                J = [];
            if (!T1.validate(I, Po8, Y, J)) {
                var W = Error("Cannot read SafeBag.");
                throw W.errors = J, W
            }
            var X = {
                type: T1.derToOid(Y.bagId),
                attributes: xo8(Y.bagAttributes)
            };
            G.push(X);
            var F, V, K = Y.bagValue.value[0];
            switch (X.type) {
                case s6.oids.pkcs8ShroudedKeyBag:
                    if (K = s6.decryptPrivateKeyInfo(K, B), K === null) throw Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");
                case s6.oids.keyBag:
                    try {
                        X.key = s6.privateKeyFromAsn1(K)
                    } catch (H) {
                        X.key = null, X.asn1 = K
                    }
                    continue;
                case s6.oids.certBag:
                    F = So8, V = function() {
                        if (T1.derToOid(Y.certId) !== s6.oids.x509Certificate) {
                            var H = Error("Unsupported certificate type, only X.509 supported.");
                            throw H.oid = T1.derToOid(Y.certId), H
                        }
                        var C = T1.fromDer(Y.cert, Q);
                        try {
                            X.cert = s6.certificateFromAsn1(C, !0)
                        } catch (E) {
                            X.cert = null, X.asn1 = C
                        }
                    };
                    break;
                default:
                    var W = Error("Unsupported PKCS#12 SafeBag type.");
                    throw W.oid = X.type, W
            }
            if (F !== void 0 && !T1.validate(K, F, Y, J)) {
                var W = Error("Cannot read PKCS#12 " + F.name);
                throw W.errors = J, W
            }
            V()
        }
        return G
    }

    function xo8(A) {
        var Q = {};
        if (A !== void 0)
            for (var B = 0; B < A.length; ++B) {
                var G = {},
                    Z = [];
                if (!T1.validate(A[B], jo8, G, Z)) {
                    var I = Error("Cannot read PKCS#12 BagAttribute.");
                    throw I.errors = Z, I
                }
                var Y = T1.derToOid(G.oid);
                if (s6.oids[Y] === void 0) continue;
                Q[s6.oids[Y]] = [];
                for (var J = 0; J < G.values.length; ++J) Q[s6.oids[Y]].push(G.values[J].value)
            }
        return Q
    }
    SzA.toPkcs12Asn1 = function(A, Q, B, G) {
        if (G = G || {}, G.saltSize = G.saltSize || 8, G.count = G.count || 2048, G.algorithm = G.algorithm || G.encAlgorithm || "aes128", !("useMac" in G)) G.useMac = !0;
        if (!("localKeyId" in G)) G.localKeyId = null;
        if (!("generateLocalKeyId" in G)) G.generateLocalKeyId = !0;
        var Z = G.localKeyId,
            I;
        if (Z !== null) Z = jZ.util.hexToBytes(Z);
        else if (G.generateLocalKeyId)
            if (Q) {
                var Y = jZ.util.isArray(Q) ? Q[0] : Q;
                if (typeof Y === "string") Y = s6.certificateFromPem(Y);
                var J = jZ.md.sha1.create();
                J.update(T1.toDer(s6.certificateToAsn1(Y)).getBytes()), Z = J.digest().getBytes()
            } else Z = jZ.random.getBytes(20);
        var W = [];
        if (Z !== null) W.push(T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OID, !1, T1.oidToDer(s6.oids.localKeyId).getBytes()), T1.create(T1.Class.UNIVERSAL, T1.Type.SET, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OCTETSTRING, !1, Z)])]));
        if ("friendlyName" in G) W.push(T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OID, !1, T1.oidToDer(s6.oids.friendlyName).getBytes()), T1.create(T1.Class.UNIVERSAL, T1.Type.SET, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.BMPSTRING, !1, G.friendlyName)])]));
        if (W.length > 0) I = T1.create(T1.Class.UNIVERSAL, T1.Type.SET, !0, W);
        var X = [],
            F = [];
        if (Q !== null)
            if (jZ.util.isArray(Q)) F = Q;
            else F = [Q];
        var V = [];
        for (var K = 0; K < F.length; ++K) {
            if (Q = F[K], typeof Q === "string") Q = s6.certificateFromPem(Q);
            var D = K === 0 ? I : void 0,
                H = s6.certificateToAsn1(Q),
                C = T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OID, !1, T1.oidToDer(s6.oids.certBag).getBytes()), T1.create(T1.Class.CONTEXT_SPECIFIC, 0, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OID, !1, T1.oidToDer(s6.oids.x509Certificate).getBytes()), T1.create(T1.Class.CONTEXT_SPECIFIC, 0, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OCTETSTRING, !1, T1.toDer(H).getBytes())])])]), D]);
            V.push(C)
        }
        if (V.length > 0) {
            var E = T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, V),
                z = T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OID, !1, T1.oidToDer(s6.oids.data).getBytes()), T1.create(T1.Class.CONTEXT_SPECIFIC, 0, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OCTETSTRING, !1, T1.toDer(E).getBytes())])]);
            X.push(z)
        }
        var w = null;
        if (A !== null) {
            var N = s6.wrapRsaPrivateKey(s6.privateKeyToAsn1(A));
            if (B === null) w = T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OID, !1, T1.oidToDer(s6.oids.keyBag).getBytes()), T1.create(T1.Class.CONTEXT_SPECIFIC, 0, !0, [N]), I]);
            else w = T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OID, !1, T1.oidToDer(s6.oids.pkcs8ShroudedKeyBag).getBytes()), T1.create(T1.Class.CONTEXT_SPECIFIC, 0, !0, [s6.encryptPrivateKeyInfo(N, B, G)]), I]);
            var q = T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [w]),
                R = T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OID, !1, T1.oidToDer(s6.oids.data).getBytes()), T1.create(T1.Class.CONTEXT_SPECIFIC, 0, !0, [T1.create(T1.Class.UNIVERSAL, T1.Type.OCTETSTRING, !1, T1.toDer(q).getBytes())])]);
            X.push(R)
        }
        var P = T1.create(T1.Class.UNIVERSAL, T1.Type.SEQUENCE, !0, X),
            y;
        if (G.useMac) {
            var J = jZ.md.sha1.create(),
                v = new jZ.util.ByteBuffer(jZ.random.getBytes(G.saltSize)),
                x = G.count,
                A = SzA.generateKey(B, v, 3, x, 20),
                p = jZ.hmac.create();