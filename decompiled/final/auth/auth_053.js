/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_053.js
 * 处理时间: 2025-12-09T03:41:36.957Z
 * 变量映射: 4 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * Q5       (  2x) formatFilePath(path)
 * SB5      (  2x) EXPECTED_FUNCTION_ERROR2
 * GA       (  1x) esmImport(module) - ESM import
 * UA       (  1x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 53/61
 * Lines: 258558 - 260045 (1488 lines)
 * Original file: cli.js
 */

var D02 = U((gDG, K02) => {
    var W02 = 1 / 0,
        F02 = 9007199254740991,
        IQ5 = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
        X02 = NaN,
        YQ5 = "[object Arguments]",
        JQ5 = "[object Function]",
        WQ5 = "[object GeneratorFunction]",
        XQ5 = "[object String]",
        FQ5 = "[object Symbol]",
        VQ5 = /^\s+|\s+$/g,
        KQ5 = /^[-+]0x[0-9a-f]+$/i,
        DQ5 = /^0b[01]+$/i,
        HQ5 = /^0o[0-7]+$/i,
        CQ5 = /^(?:0|[1-9]\d*)$/,
        EQ5 = parseInt;

    function zQ5(A, Q) {
        var B = -1,
            G = A ? A.length : 0,
            Z = Array(G);
        while (++B < G) Z[B] = Q(A[B], B, A);
        return Z
    }

    function UQ5(A, Q, B, G) {
        var Z = A.length,
            I = B + (G ? 1 : -1);
        while (G ? I-- : ++I < Z)
            if (Q(A[I], I, A)) return I;
        return -1
    }

    function $Q5(A, Q, B) {
        if (Q !== Q) return UQ5(A, wQ5, B);
        var G = B - 1,
            Z = A.length;
        while (++G < Z)
            if (A[G] === Q) return G;
        return -1
    }

    function wQ5(A) {
        return A !== A
    }

    function qQ5(A, Q) {
        var B = -1,
            G = Array(A);
        while (++B < A) G[B] = Q(B);
        return G
    }

    function NQ5(A, Q) {
        return zQ5(Q, function(B) {
            return A[B]
        })
    }

    function LQ5(A, Q) {
        return function(B) {
            return A(Q(B))
        }
    }
    var R01 = Object.prototype,
        No1 = R01.hasOwnProperty,
        T01 = R01.toString,
        MQ5 = R01.propertyIsEnumerable,
        OQ5 = LQ5(Object.keys, Object),
        RQ5 = Math.max;

    function TQ5(A, Q) {
        var B = V02(A) || kQ5(A) ? qQ5(A.length, String) : [],
            G = B.length,
            Z = !!G;
        for (var I in A)
            if ((Q || No1.call(A, I)) && !(Z && (I == "length" || jQ5(I, G)))) B.push(I);
        return B
    }

    function PQ5(A) {
        if (!SQ5(A)) return OQ5(A);
        var Q = [];
        for (var B in Object(A))
            if (No1.call(A, B) && B != "constructor") Q.push(B);
        return Q
    }

    function jQ5(A, Q) {
        return Q = Q == null ? F02 : Q, !!Q && (typeof A == "number" || CQ5.test(A)) && (A > -1 && A % 1 == 0 && A < Q)
    }

    function SQ5(A) {
        var Q = A && A.constructor,
            B = typeof Q == "function" && Q.prototype || R01;
        return A === B
    }

    function _Q5(A, Q, B, G) {
        A = Lo1(A) ? A : dQ5(A), B = B && !G ? gQ5(B) : 0;
        var Z = A.length;
        if (B < 0) B = RQ5(Z + B, 0);
        return bQ5(A) ? B <= Z && A.indexOf(Q, B) > -1 : !!Z && $Q5(A, Q, B) > -1
    }

    function kQ5(A) {
        return yQ5(A) && No1.call(A, "callee") && (!MQ5.call(A, "callee") || T01.call(A) == YQ5)
    }
    var V02 = Array.isArray;

    function Lo1(A) {
        return A != null && vQ5(A.length) && !xQ5(A)
    }

    function yQ5(A) {
        return Mo1(A) && Lo1(A)
    }

    function xQ5(A) {
        var Q = qo1(A) ? T01.call(A) : "";
        return Q == JQ5 || Q == WQ5
    }

    function vQ5(A) {
        return typeof A == "number" && A > -1 && A % 1 == 0 && A <= F02
    }

    function qo1(A) {
        var Q = typeof A;
        return !!A && (Q == "object" || Q == "function")
    }

    function Mo1(A) {
        return !!A && typeof A == "object"
    }

    function bQ5(A) {
        return typeof A == "string" || !V02(A) && Mo1(A) && T01.call(A) == XQ5
    }

    function fQ5(A) {
        return typeof A == "symbol" || Mo1(A) && T01.call(A) == FQ5
    }

    function hQ5(A) {
        if (!A) return A === 0 ? A : 0;
        if (A = uQ5(A), A === W02 || A === -W02) {
            var Q = A < 0 ? -1 : 1;
            return Q * IQ5
        }
        return A === A ? A : 0
    }

    function gQ5(A) {
        var Q = hQ5(A),
            B = Q % 1;
        return Q === Q ? B ? Q - B : Q : 0
    }

    function uQ5(A) {
        if (typeof A == "number") return A;
        if (fQ5(A)) return X02;
        if (qo1(A)) {
            var Q = typeof A.valueOf == "function" ? A.valueOf() : A;
            A = qo1(Q) ? Q + "" : Q
        }
        if (typeof A != "string") return A === 0 ? A : +A;
        A = A.replace(VQ5, "");
        var B = DQ5.test(A);
        return B || HQ5.test(A) ? EQ5(A.slice(2), B ? 2 : 8) : KQ5.test(A) ? X02 : +A
    }

    function mQ5(A) {
        return Lo1(A) ? TQ5(A) : PQ5(A)
    }

    function dQ5(A) {
        return A ? NQ5(A, mQ5(A)) : []
    }
    K02.exports = _Q5
});
var C02 = U((uDG, H02) => {
    var cQ5 = "[object Boolean]",
        pQ5 = Object.prototype,
        lQ5 = pQ5.toString;

    function iQ5(A) {
        return A === !0 || A === !1 || nQ5(A) && lQ5.call(A) == cQ5
    }

    function nQ5(A) {
        return !!A && typeof A == "object"
    }
    H02.exports = iQ5
});
var w02 = U((mDG, $02) => {
    var E02 = 1 / 0,
        aQ5 = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
        z02 = NaN,
        sQ5 = "[object Symbol]",
        rQ5 = /^\s+|\s+$/g,
        oQ5 = /^[-+]0x[0-9a-f]+$/i,
        tQ5 = /^0b[01]+$/i,
        eQ5 = /^0o[0-7]+$/i,
        AB5 = parseInt,
        QB5 = Object.prototype,
        BB5 = QB5.toString;

    function GB5(A) {
        return typeof A == "number" && A == JB5(A)
    }

    function U02(A) {
        var Q = typeof A;
        return !!A && (Q == "object" || Q == "function")
    }

    function ZB5(A) {
        return !!A && typeof A == "object"
    }

    function IB5(A) {
        return typeof A == "symbol" || ZB5(A) && BB5.call(A) == sQ5
    }

    function YB5(A) {
        if (!A) return A === 0 ? A : 0;
        if (A = WB5(A), A === E02 || A === -E02) {
            var Q = A < 0 ? -1 : 1;
            return Q * aQ5
        }
        return A === A ? A : 0
    }

    function JB5(A) {
        var Q = YB5(A),
            B = Q % 1;
        return Q === Q ? B ? Q - B : Q : 0
    }

    function WB5(A) {
        if (typeof A == "number") return A;
        if (IB5(A)) return z02;
        if (U02(A)) {
            var Q = typeof A.valueOf == "function" ? A.valueOf() : A;
            A = U02(Q) ? Q + "" : Q
        }
        if (typeof A != "string") return A === 0 ? A : +A;
        A = A.replace(rQ5, "");
        var B = tQ5.test(A);
        return B || eQ5.test(A) ? AB5(A.slice(2), B ? 2 : 8) : oQ5.test(A) ? z02 : +A
    }
    $02.exports = GB5
});
var N02 = U((dDG, q02) => {
    var XB5 = "[object Number]",
        FB5 = Object.prototype,
        VB5 = FB5.toString;

    function KB5(A) {
        return !!A && typeof A == "object"
    }

    function DB5(A) {
        return typeof A == "number" || KB5(A) && VB5.call(A) == XB5
    }
    q02.exports = DB5
});
var R02 = U((cDG, O02) => {
    var HB5 = "[object Object]";

    function CB5(A) {
        var Q = !1;
        if (A != null && typeof A.toString != "function") try {
            Q = !!(A + "")
        } catch (B) {}
        return Q
    }

    function EB5(A, Q) {
        return function(B) {
            return A(Q(B))
        }
    }
    var zB5 = Function.prototype,
        L02 = Object.prototype,
        M02 = zB5.toString,
        UB5 = L02.hasOwnProperty,
        $B5 = M02.call(Object),
        wB5 = L02.toString,
        qB5 = EB5(Object.getPrototypeOf, Object);

    function NB5(A) {
        return !!A && typeof A == "object"
    }

    function LB5(A) {
        if (!NB5(A) || wB5.call(A) != HB5 || CB5(A)) return !1;
        var Q = qB5(A);
        if (Q === null) return !0;
        var B = UB5.call(Q, "constructor") && Q.constructor;
        return typeof B == "function" && B instanceof B && M02.call(B) == $B5
    }
    O02.exports = LB5
});
var P02 = U((pDG, T02) => {
    var MB5 = "[object String]",
        OB5 = Object.prototype,
        RB5 = OB5.toString,
        TB5 = Array.isArray;

    function PB5(A) {
        return !!A && typeof A == "object"
    }

    function jB5(A) {
        return typeof A == "string" || !TB5(A) && PB5(A) && RB5.call(A) == MB5
    }
    T02.exports = jB5
});
var y02 = U((lDG, k02) => {
    /* SB5 = EXPECTED_FUNCTION_ERROR2 */
var SB5 = "Expected a function",
        j02 = 1 / 0,
        _B5 = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
        S02 = NaN,
        kB5 = "[object Symbol]",
        yB5 = /^\s+|\s+$/g,
        xB5 = /^[-+]0x[0-9a-f]+$/i,
        vB5 = /^0b[01]+$/i,
        bB5 = /^0o[0-7]+$/i,
        fB5 = parseInt,
        hB5 = Object.prototype,
        gB5 = hB5.toString;

    function uB5(A, Q) {
        var B;
        if (typeof Q != "function") throw TypeError(SB5);
        return A = lB5(A),
            function() {
                if (--A > 0) B = Q.apply(this, arguments);
                if (A <= 1) Q = void 0;
                return B
            }
    }

    function mB5(A) {
        return uB5(2, A)
    }

    function _02(A) {
        var Q = typeof A;
        return !!A && (Q == "object" || Q == "function")
    }

    function dB5(A) {
        return !!A && typeof A == "object"
    }

    function cB5(A) {
        return typeof A == "symbol" || dB5(A) && gB5.call(A) == kB5
    }

    function pB5(A) {
        if (!A) return A === 0 ? A : 0;
        if (A = iB5(A), A === j02 || A === -j02) {
            var Q = A < 0 ? -1 : 1;
            return Q * _B5
        }
        return A === A ? A : 0
    }

    function lB5(A) {
        var Q = pB5(A),
            B = Q % 1;
        return Q === Q ? B ? Q - B : Q : 0
    }

    function iB5(A) {
        if (typeof A == "number") return A;
        if (cB5(A)) return S02;
        if (_02(A)) {
            var Q = typeof A.valueOf == "function" ? A.valueOf() : A;
            A = _02(Q) ? Q + "" : Q
        }
        if (typeof A != "string") return A === 0 ? A : +A;
        A = A.replace(yB5, "");
        var B = vB5.test(A);
        return B || bB5.test(A) ? fB5(A.slice(2), B ? 2 : 8) : xB5.test(A) ? S02 : +A
    }
    k02.exports = mB5
});
var d02 = U((iDG, m02) => {
    var x02 = Eo1(),
        nB5 = Uo1(),
        aB5 = zo1(),
        v02 = N01(),
        sB5 = D02(),
        P01 = C02(),
        b02 = w02(),
        Oo1 = N02(),
        h02 = R02(),
        _l = P02(),
        rB5 = y02(),
        {
            KeyObject: oB5,
            createSecretKey: tB5,
            createPrivateKey: eB5
        } = UA("crypto"),
        g02 = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
    if (nB5) g02.splice(3, 0, "PS256", "PS384", "PS512");
    var A25 = {
            expiresIn: {
                isValid: function(A) {
                    return b02(A) || _l(A) && A
                },
                message: '"expiresIn" should be a number of seconds or string representing a timespan'
            },
            notBefore: {
                isValid: function(A) {
                    return b02(A) || _l(A) && A
                },
                message: '"notBefore" should be a number of seconds or string representing a timespan'
            },
            audience: {
                isValid: function(A) {
                    return _l(A) || Array.isArray(A)
                },
                message: '"audience" must be a string or array'
            },
            algorithm: {
                isValid: sB5.bind(null, g02),
                message: '"algorithm" must be a valid string enum value'
            },
            header: {
                isValid: h02,
                message: '"header" must be an object'
            },
            encoding: {
                isValid: _l,
                message: '"encoding" must be a string'
            },
            issuer: {
                isValid: _l,
                message: '"issuer" must be a string'
            },
            subject: {
                isValid: _l,
                message: '"subject" must be a string'
            },
            jwtid: {
                isValid: _l,
                message: '"jwtid" must be a string'
            },
            noTimestamp: {
                isValid: P01,
                message: '"noTimestamp" must be a boolean'
            },
            keyid: {
                isValid: _l,
                message: '"keyid" must be a string'
            },
            mutatePayload: {
                isValid: P01,
                message: '"mutatePayload" must be a boolean'
            },
            allowInsecureKeySizes: {
                isValid: P01,
                message: '"allowInsecureKeySizes" must be a boolean'
            },
            allowInvalidAsymmetricKeyTypes: {
                isValid: P01,
                message: '"allowInvalidAsymmetricKeyTypes" must be a boolean'
            }
        },
        Q25 = {
            iat: {
                isValid: Oo1,
                message: '"iat" should be a number of seconds'
            },
            exp: {
                isValid: Oo1,
                message: '"exp" should be a number of seconds'
            },
            nbf: {
                isValid: Oo1,
                message: '"nbf" should be a number of seconds'
            }
        };

    function u02(A, Q, B, G) {
        if (!h02(B)) throw Error('Expected "' + G + '" to be a plain object.');
        Object.keys(B).forEach(function(Z) {
            let I = A[Z];
            if (!I) {
                if (!Q) throw Error('"' + Z + '" is not allowed in "' + G + '"');
                return
            }
            if (!I.isValid(B[Z])) throw Error(I.message)
        })
    }

    function B25(A) {
        return u02(A25, !1, A, "options")
    }

    function G25(A) {
        return u02(Q25, !0, A, "payload")
    }
    var f02 = {
            audience: "aud",
            issuer: "iss",
            subject: "sub",
            jwtid: "jti"
        },
        Z25 = ["expiresIn", "notBefore", "noTimestamp", "audience", "issuer", "subject", "jwtid"];
    m02.exports = function(A, Q, B, G) {
        if (typeof B === "function") G = B, B = {};
        else B = B || {};
        let Z = typeof A === "object" && !Buffer.isBuffer(A),
            I = Object.assign({
                alg: B.algorithm || "HS256",
                typ: Z ? "JWT" : void 0,
                kid: B.keyid
            }, B.header);

        function Y(X) {
            if (G) return G(X);
            throw X
        }
        if (!Q && B.algorithm !== "none") return Y(Error("secretOrPrivateKey must have a value"));
        if (Q != null && !(Q instanceof oB5)) try {
            Q = eB5(Q)
        } catch (X) {
            try {
                Q = tB5(typeof Q === "string" ? Buffer.from(Q) : Q)
            } catch (F) {
                return Y(Error("secretOrPrivateKey is not valid key material"))
            }
        }
        if (I.alg.startsWith("HS") && Q.type !== "secret") return Y(Error(`secretOrPrivateKey must be a symmetric key when using ${I.alg}`));
        else if (/^(?:RS|PS|ES)/.test(I.alg)) {
            if (Q.type !== "private") return Y(Error(`secretOrPrivateKey must be an asymmetric key when using ${I.alg}`));
            if (!B.allowInsecureKeySizes && !I.alg.startsWith("ES") && Q.asymmetricKeyDetails !== void 0 && Q.asymmetricKeyDetails.modulusLength < 2048) return Y(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${I.alg}`))
        }
        if (typeof A > "u") return Y(Error("payload is required"));
        else if (Z) {
            try {
                G25(A)
            } catch (X) {
                return Y(X)
            }
            if (!B.mutatePayload) A = Object.assign({}, A)
        } else {
            let X = Z25.filter(function(F) {
                return typeof B[F] < "u"
            });
            if (X.length > 0) return Y(Error("invalid " + X.join(",") + " option for " + typeof A + " payload"))
        }
        if (typeof A.exp < "u" && typeof B.expiresIn < "u") return Y(Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
        if (typeof A.nbf < "u" && typeof B.notBefore < "u") return Y(Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
        try {
            B25(B)
        } catch (X) {
            return Y(X)
        }
        if (!B.allowInvalidAsymmetricKeyTypes) try {
            aB5(I.alg, Q)
        } catch (X) {
            return Y(X)
        }
        let J = A.iat || Math.floor(Date.now() / 1000);
        if (B.noTimestamp) delete A.iat;
        else if (Z) A.iat = J;
        if (typeof B.notBefore < "u") {
            try {
                A.nbf = x02(B.notBefore, J)
            } catch (X) {
                return Y(X)
            }
            if (typeof A.nbf > "u") return Y(Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))
        }
        if (typeof B.expiresIn < "u" && typeof A === "object") {
            try {
                A.exp = x02(B.expiresIn, J)
            } catch (X) {
                return Y(X)
            }
            if (typeof A.exp > "u") return Y(Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))
        }
        Object.keys(f02).forEach(function(X) {
            let F = f02[X];
            if (typeof B[X] < "u") {
                if (typeof A[F] < "u") return Y(Error('Bad "options.' + X + '" option. The payload already has an "' + F + '" property.'));
                A[F] = B[X]
            }
        });
        let W = B.encoding || "utf8";
        if (typeof G === "function") G = G && rB5(G), v02.createSign({
            header: I,
            privateKey: Q,
            payload: A,
            encoding: W
        }).once("error", G).once("done", function(X) {
            if (!B.allowInsecureKeySizes && /^(?:RS|PS)/.test(I.alg) && X.length < 256) return G(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${I.alg}`));
            G(null, X)
        });
        else {
            let X = v02.sign({
                header: I,
                payload: A,
                secret: Q,
                encoding: W
            });
            if (!B.allowInsecureKeySizes && /^(?:RS|PS)/.test(I.alg) && X.length < 256) throw Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${I.alg}`);
            return X
        }
    }
});
var p02 = U((nDG, c02) => {
    c02.exports = {
        decode: Do1(),
        verify: J02(),
        sign: d02(),
        JsonWebTokenError: tNA(),
        NotBeforeError: Ho1(),
        TokenExpiredError: Co1()
    }
});
class cT {
    static fromAssertion(A) {
        let Q = new cT;
        return Q.jwt = A, Q
    }
    static fromCertificate(A, Q, B) {
        let G = new cT;
        if (G.privateKey = Q, G.thumbprint = A, G.useSha256 = !1, B) G.publicCertificate = this.parseCertificate(B);
        return G
    }
    static fromCertificateWithSha256Thumbprint(A, Q, B) {
        let G = new cT;
        if (G.privateKey = Q, G.thumbprint = A, G.useSha256 = !0, B) G.publicCertificate = this.parseCertificate(B);
        return G
    }
    getJwt(A, Q, B) {
        if (this.privateKey && this.thumbprint) {
            if (this.jwt && !this.isExpired() && Q === this.issuer && B === this.jwtAudience) return this.jwt;
            return this.createJwt(A, Q, B)
        }
        if (this.jwt) return this.jwt;
        throw v0(PG.invalidAssertion)
    }
    createJwt(A, Q, B) {
        this.issuer = Q, this.jwtAudience = B;
        let G = KI.nowSeconds();
        this.expirationTime = G + 600;
        let I = {
                alg: this.useSha256 ? bM.PSS_256 : bM.RSA_256
            },
            Y = this.useSha256 ? bM.X5T_256 : bM.X5T;
        if (Object.assign(I, {
                [Y]: _U.base64EncodeUrl(this.thumbprint, ND.HEX)
            }), this.publicCertificate) Object.assign(I, {
            [bM.X5C]: this.publicCertificate
        });
        let J = {
            [bM.AUDIENCE]: this.jwtAudience,
            [bM.EXPIRATION_TIME]: this.expirationTime,
            [bM.ISSUER]: this.issuer,
            [bM.SUBJECT]: this.issuer,
            [bM.NOT_BEFORE]: G,
            [bM.JWT_ID]: A.createNewGuid()
        };
        return this.jwt = l02.default.sign(J, this.privateKey, {
            header: I
        }), this.jwt
    }
    isExpired() {
        return this.expirationTime < KI.nowSeconds()
    }
    static parseCertificate(A) {
        let Q = /-----BEGIN CERTIFICATE-----\r*\n(.+?)\r*\n-----END CERTIFICATE-----/gs,
            B = [],
            G;
        while ((G = Q.exec(A)) !== null) B.push(G[1].replace(/\r*\n/g, L0.EMPTY_STRING));
        return B
    }
}
var l02;
var j01 = L(() => {
    u7();
    iNA();
    HI();
    l02 = GA(p02(), 1); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
var S01 = "@azure/msal-node",
    pT = "3.8.1";
var XIA = L(() => {
    /*! @azure/msal-node v3.8.1 2025-10-29 */ });
var eNA;
var Ro1 = L(() => {
    u7(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    eNA = class eNA extends iH {
        constructor(A) {
            super(A)
        }
        async acquireToken(A) {
            this.logger.info("in acquireToken call in username-password client");
            let Q = KI.nowSeconds(),
                B = await this.executeTokenRequest(this.authority, A),
                G = new jJ(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
            return G.validateTokenResponse(B.body), G.handleServerTokenResponse(B.body, this.authority, Q, A)
        }
        async executeTokenRequest(A, Q) {
            let B = this.createTokenQueryParameters(Q),
                G = H8.appendQueryString(A.tokenEndpoint, B),
                Z = await this.createTokenRequestBody(Q),
                I = this.createTokenRequestHeaders({
                    credential: Q.username,
                    type: RE.UPN
                }),
                Y = {
                    clientId: this.config.authOptions.clientId,
                    authority: A.canonicalAuthority,
                    scopes: Q.scopes,
                    claims: Q.claims,
                    authenticationScheme: Q.authenticationScheme,
                    resourceRequestMethod: Q.resourceRequestMethod,
                    resourceRequestUri: Q.resourceRequestUri,
                    shrClaims: Q.shrClaims,
                    sshKid: Q.sshKid
                };
            return this.executePostToTokenEndpoint(G, Z, I, Y, Q.correlationId)
        }
        async createTokenRequestBody(A) {
            let Q = new Map;
            if (OB.addClientId(Q, this.config.authOptions.clientId), OB.addUsername(Q, A.username), OB.addPassword(Q, A.password), OB.addScopes(Q, A.scopes), OB.addResponseType(Q, hZA.IDTOKEN_TOKEN), OB.addGrantType(Q, PU.RESOURCE_OWNER_PASSWORD_GRANT), OB.addClientInfo(Q), OB.addLibraryInfo(Q, this.config.libraryInfo), OB.addApplicationTelemetry(Q, this.config.telemetry.application), OB.addThrottling(Q), this.serverTelemetryManager) OB.addServerTelemetry(Q, this.serverTelemetryManager);
            let B = A.correlationId || this.config.cryptoInterface.createNewGuid();
            if (OB.addCorrelationId(Q, B), this.config.clientCredentials.clientSecret) OB.addClientSecret(Q, this.config.clientCredentials.clientSecret);
            let G = this.config.clientCredentials.clientAssertion;
            if (G) OB.addClientAssertion(Q, await jE(G.assertion, this.config.authOptions.clientId, A.resourceRequestUri)), OB.addClientAssertionType(Q, G.assertionType);
            if (!YZ.isEmptyObj(A.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) OB.addClaims(Q, A.claims, this.config.authOptions.clientCapabilities);
            if (this.config.systemOptions.preventCorsPreflight && A.username) OB.addCcsUpn(Q, A.username);
            return LD.mapToQueryString(Q)
        }
    }
});

function i02(A, Q, B, G) {
    let Z = hNA.getStandardAuthorizeRequestParameters({
        ...A.auth,
        authority: Q,
        redirectUri: B.redirectUri || ""
    }, B, G);
    if (OB.addLibraryInfo(Z, {
            sku: SE.MSAL_SKU,
            version: pT,
            cpu: process.arch || "",
            os: process.platform || ""
        }), A.auth.protocolMode !== lH.OIDC) OB.addApplicationTelemetry(Z, A.telemetry.application);
    if (OB.addResponseType(Z, hZA.CODE), B.codeChallenge && B.codeChallengeMethod) OB.addCodeChallengeParams(Z, B.codeChallenge, B.codeChallengeMethod);
    return OB.addExtraQueryParameters(Z, B.extraQueryParameters || {}), hNA.getAuthorizeUrl(Q, Z, A.auth.encodeExtraQueryParams, B.extraQueryParameters)
}
var n02 = L(() => {
    u7();
    HI();
    XIA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
class OAA {
    constructor(A) {
        this.config = $A2(A), this.cryptoProvider = new rf, this.logger = new jU(this.config.system.loggerOptions, S01, pT), this.storage = new MAA(this.logger, this.config.auth.clientId, this.cryptoProvider, vr1(this.config.auth)), this.tokenCache = new sNA(this.storage, this.logger, this.config.cache.cachePlugin)
    }
    async getAuthCodeUrl(A) {
        this.logger.info("getAuthCodeUrl called", A.correlationId);
        let Q = {
                ...A,
                ...await this.initializeBaseRequest(A),
                responseMode: A.responseMode || Xk.QUERY,
                authenticationScheme: e6.BEARER,
                state: A.state || "",
                nonce: A.nonce || ""
            },
            B = await this.createAuthority(Q.authority, Q.correlationId, void 0, A.azureCloudOptions);
        return i02(this.config, B, Q, this.logger)
    }
    async acquireTokenByCode(A, Q) {
        if (this.logger.info("acquireTokenByCode called"), A.state && Q) this.logger.info("acquireTokenByCode - validating state"), this.validateState(A.state, Q.state || ""), Q = {
            ...Q,
            state: ""
        };
        let B = {
                ...A,
                ...await this.initializeBaseRequest(A),
                authenticationScheme: e6.BEARER
            },
            G = this.initializeServerTelemetryManager(af.acquireTokenByCode, B.correlationId);
        try {
            let Z = await this.createAuthority(B.authority, B.correlationId, void 0, A.azureCloudOptions),
                I = await this.buildOauthClientConfiguration(Z, B.correlationId, B.redirectUri, G),
                Y = new t11(I);
            return this.logger.verbose("Auth code client created", B.correlationId), await Y.acquireToken(B, Q)
        } catch (Z) {
            if (Z instanceof t4) Z.setCorrelationId(B.correlationId);
            throw G.cacheFailedRequest(Z), Z
        }
    }
    async acquireTokenByRefreshToken(A) {
        this.logger.info("acquireTokenByRefreshToken called", A.correlationId);
        let Q = {
                ...A,
                ...await this.initializeBaseRequest(A),
                authenticationScheme: e6.BEARER
            },
            B = this.initializeServerTelemetryManager(af.acquireTokenByRefreshToken, Q.correlationId);
        try {
            let G = await this.createAuthority(Q.authority, Q.correlationId, void 0, A.azureCloudOptions),
                Z = await this.buildOauthClientConfiguration(G, Q.correlationId, Q.redirectUri || "", B),
                I = new ZIA(Z);
            return this.logger.verbose("Refresh token client created", Q.correlationId), await I.acquireToken(Q)
        } catch (G) {
            if (G instanceof t4) G.setCorrelationId(Q.correlationId);
            throw B.cacheFailedRequest(G), G
        }
    }
    async acquireTokenSilent(A) {
        let Q = {
                ...A,
                ...await this.initializeBaseRequest(A),
                forceRefresh: A.forceRefresh || !1
            },
            B = this.initializeServerTelemetryManager(af.acquireTokenSilent, Q.correlationId, Q.forceRefresh);
        try {
            let G = await this.createAuthority(Q.authority, Q.correlationId, void 0, A.azureCloudOptions),
                Z = await this.buildOauthClientConfiguration(G, Q.correlationId, Q.redirectUri || "", B),
                I = new e11(Z);
            this.logger.verbose("Silent flow client created", Q.correlationId);
            try {
                return await this.tokenCache.overwriteCache(), await this.acquireCachedTokenSilent(Q, I, Z)
            } catch (Y) {
                if (Y instanceof Ul && Y.errorCode === PG.tokenRefreshRequired) return new ZIA(Z).acquireTokenByRefreshToken(Q);
                throw Y
            }
        } catch (G) {
            if (G instanceof t4) G.setCorrelationId(Q.correlationId);
            throw B.cacheFailedRequest(G), G
        }
    }
    async acquireCachedTokenSilent(A, Q, B) {
        let [G, Z] = await Q.acquireCachedToken({
            ...A,
            scopes: A.scopes?.length ? A.scopes : [...pH]
        });
        if (Z === IZ.PROACTIVELY_REFRESHED) {
            this.logger.info("ClientApplication:acquireCachedTokenSilent - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
            let I = new ZIA(B);
            try {
                await I.acquireTokenByRefreshToken(A)
            } catch {}
        }
        return G
    }
    async acquireTokenByUsernamePassword(A) {
        this.logger.info("acquireTokenByUsernamePassword called", A.correlationId);
        let Q = {
                ...A,
                ...await this.initializeBaseRequest(A)
            },
            B = this.initializeServerTelemetryManager(af.acquireTokenByUsernamePassword, Q.correlationId);
        try {
            let G = await this.createAuthority(Q.authority, Q.correlationId, void 0, A.azureCloudOptions),
                Z = await this.buildOauthClientConfiguration(G, Q.correlationId, "", B),
                I = new eNA(Z);
            return this.logger.verbose("Username password client created", Q.correlationId), await I.acquireToken(Q)
        } catch (G) {
            if (G instanceof t4) G.setCorrelationId(Q.correlationId);
            throw B.cacheFailedRequest(G), G
        }
    }
    getTokenCache() {
        return this.logger.info("getTokenCache called"), this.tokenCache
    }
    validateState(A, Q) {
        if (!A) throw IY.createStateNotFoundError();
        if (A !== Q) throw v0(PG.stateMismatch)
    }
    getLogger() {
        return this.logger
    }
    setLogger(A) {
        this.logger = A
    }
    async buildOauthClientConfiguration(A, Q, B, G) {
        return this.logger.verbose("buildOauthClientConfiguration called", Q), this.logger.info(`Building oauth client configuration with the following authority: ${A.tokenEndpoint}.`, Q), G?.updateRegionDiscoveryMetadata(A.regionDiscoveryMetadata), {
            authOptions: {
                clientId: this.config.auth.clientId,
                authority: A,
                clientCapabilities: this.config.auth.clientCapabilities,
                redirectUri: B
            },
            loggerOptions: {
                logLevel: this.config.system.loggerOptions.logLevel,
                loggerCallback: this.config.system.loggerOptions.loggerCallback,
                piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled,
                correlationId: Q
            },
            cacheOptions: {
                claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled
            },
            cryptoInterface: this.cryptoProvider,
            networkInterface: this.config.system.networkClient,
            storageInterface: this.storage,
            serverTelemetryManager: G,
            clientCredentials: {
                clientSecret: this.clientSecret,
                clientAssertion: await this.getClientAssertion(A)
            },
            libraryInfo: {
                sku: SE.MSAL_SKU,
                version: pT,
                cpu: process.arch || L0.EMPTY_STRING,
                os: process.platform || L0.EMPTY_STRING
            },
            telemetry: this.config.telemetry,
            persistencePlugin: this.config.cache.cachePlugin,
            serializableCache: this.tokenCache
        }
    }
    async getClientAssertion(A) {
        if (this.developerProvidedClientAssertion) this.clientAssertion = cT.fromAssertion(await jE(this.developerProvidedClientAssertion, this.config.auth.clientId, A.tokenEndpoint));
        return this.clientAssertion && {
            assertion: this.clientAssertion.getJwt(this.cryptoProvider, this.config.auth.clientId, A.tokenEndpoint),
            assertionType: SE.JWT_BEARER_ASSERTION_TYPE
        }
    }
    async initializeBaseRequest(A) {
        if (this.logger.verbose("initializeRequestScopes called", A.correlationId), A.authenticationScheme && A.authenticationScheme === e6.POP) this.logger.verbose("Authentication Scheme 'pop' is not supported yet, setting Authentication Scheme to 'Bearer' for request", A.correlationId);
        if (A.authenticationScheme = e6.BEARER, this.config.cache.claimsBasedCachingEnabled && A.claims && !YZ.isEmptyObj(A.claims)) A.requestedClaimsHash = await this.cryptoProvider.hashString(A.claims);
        return {
            ...A,
            scopes: [...A && A.scopes || [], ...pH],
            correlationId: A && A.correlationId || this.cryptoProvider.createNewGuid(),
            authority: A.authority || this.config.auth.authority
        }
    }
    initializeServerTelemetryManager(A, Q, B) {
        let G = {
            clientId: this.config.auth.clientId,
            correlationId: Q,
            apiId: A,
            forceRefresh: B || !1
        };
        return new Pl(G, this.storage)
    }
    async createAuthority(A, Q, B, G) {
        this.logger.verbose("createAuthority called", Q);
        let Z = TF.generateAuthority(A, G || this.config.auth.azureCloudOptions),
            I = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata,
                azureRegionConfiguration: B,
                skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
            };
        return u11.createDiscoveredInstance(Z, this.config.system.networkClient, this.storage, I, this.logger, Q)
    }
    clearCache() {
        this.storage.clear()
    }
}
var _01 = L(() => {
    u7();
    rr1();
    nNA();
    z01();
    HI();
    Io1();
    j01();
    XIA();
    dNA();
    Ro1();
    n02(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
import I25 from "http";
class To1 {
    async listenForAuthCode(A, Q) {
        if (this.server) throw IY.createLoopbackServerAlreadyExistsError();
        return new Promise((B, G) => {
            this.server = I25.createServer((Z, I) => {
                let Y = Z.url;
                if (!Y) {
                    I.end(Q || "Error occurred loading redirectUrl"), G(IY.createUnableToLoadRedirectUrlError());
                    return
                } else if (Y === L0.FORWARD_SLASH) {
                    I.end(A || "Auth code was successfully acquired. You can close this window now.");
                    return
                }
                let J = this.getRedirectUri(),
                    W = new URL(Y, J),
                    X = LD.getDeserializedResponse(W.search) || {};
                if (X.code) I.writeHead(o4.REDIRECT, {
                    location: J
                }), I.end();
                if (X.error) I.end(Q || `Error occurred: ${X.error}`);
                B(X)
            }), this.server.listen(0, "127.0.0.1")
        })
    }
    getRedirectUri() {
        if (!this.server || !this.server.listening) throw IY.createNoLoopbackServerExistsError();
        let A = this.server.address();
        if (!A || typeof A === "string" || !A.port) throw this.closeServer(), IY.createInvalidLoopbackAddressTypeError();
        let Q = A && A.port;
        return `${SE.HTTP_PROTOCOL}${SE.LOCALHOST}:${Q}`
    }
    closeServer() {
        if (this.server) {
            if (this.server.close(), typeof this.server.closeAllConnections === "function") this.server.closeAllConnections();
            this.server.unref(), this.server = void 0
        }
    }
}
var a02 = L(() => {
    u7();
    dNA();
    HI(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
var ALA;
var Po1 = L(() => {
    u7(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    ALA = class ALA extends iH {
        constructor(A) {
            super(A)
        }
        async acquireToken(A) {
            let Q = await this.getDeviceCode(A);
            A.deviceCodeCallback(Q);
            let B = KI.nowSeconds(),
                G = await this.acquireTokenWithDeviceCode(A, Q),
                Z = new jJ(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
            return Z.validateTokenResponse(G), Z.handleServerTokenResponse(G, this.authority, B, A)
        }
        async getDeviceCode(A) {
            let Q = this.createExtraQueryParameters(A),
                B = H8.appendQueryString(this.authority.deviceCodeEndpoint, Q),
                G = this.createQueryString(A),
                Z = this.createTokenRequestHeaders(),
                I = {
                    clientId: this.config.authOptions.clientId,
                    authority: A.authority,
                    scopes: A.scopes,
                    claims: A.claims,
                    authenticationScheme: A.authenticationScheme,
                    resourceRequestMethod: A.resourceRequestMethod,
                    resourceRequestUri: A.resourceRequestUri,
                    shrClaims: A.shrClaims,
                    sshKid: A.sshKid
                };
            return this.executePostRequestToDeviceCodeEndpoint(B, G, Z, I, A.correlationId)
        }
        createExtraQueryParameters(A) {
            let Q = new Map;
            if (A.extraQueryParameters) OB.addExtraQueryParameters(Q, A.extraQueryParameters);
            return LD.mapToQueryString(Q)
        }
        async executePostRequestToDeviceCodeEndpoint(A, Q, B, G, Z) {
            let {
                body: {
                    user_code: I,
                    device_code: Y,
                    verification_uri: J,
                    expires_in: W,
                    interval: X,
                    message: F
                }
            } = await this.sendPostRequest(G, A, {
                body: Q,
                headers: B
            }, Z);
            return {
                userCode: I,
                deviceCode: Y,
                verificationUri: J,
                expiresIn: W,
                interval: X,
                message: F
            }
        }
        createQueryString(A) {
            let Q = new Map;
            if (OB.addScopes(Q, A.scopes), OB.addClientId(Q, this.config.authOptions.clientId), A.extraQueryParameters) OB.addExtraQueryParameters(Q, A.extraQueryParameters);
            if (A.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) OB.addClaims(Q, A.claims, this.config.authOptions.clientCapabilities);
            return LD.mapToQueryString(Q)
        }
        continuePolling(A, Q, B) {
            if (B) throw this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true"), v0(PG.deviceCodePollingCancelled);
            else if (Q && Q < A && KI.nowSeconds() > Q) throw this.logger.error(`User defined timeout for device code polling reached. The timeout was set for ${Q}`), v0(PG.userTimeoutReached);
            else if (KI.nowSeconds() > A) {
                if (Q) this.logger.verbose(`User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for ${Q}`);
                throw this.logger.error(`Device code expired. Expiration time of device code was ${A}`), v0(PG.deviceCodeExpired)
            }
            return !0
        }
        async acquireTokenWithDeviceCode(A, Q) {
            let B = this.createTokenQueryParameters(A),
                G = H8.appendQueryString(this.authority.tokenEndpoint, B),
                Z = this.createTokenRequestBody(A, Q),
                I = this.createTokenRequestHeaders(),
                Y = A.timeout ? KI.nowSeconds() + A.timeout : void 0,
                J = KI.nowSeconds() + Q.expiresIn,
                W = Q.interval * 1000;
            while (this.continuePolling(J, Y, A.cancel)) {
                let X = {
                        clientId: this.config.authOptions.clientId,
                        authority: A.authority,
                        scopes: A.scopes,
                        claims: A.claims,
                        authenticationScheme: A.authenticationScheme,
                        resourceRequestMethod: A.resourceRequestMethod,
                        resourceRequestUri: A.resourceRequestUri,
                        shrClaims: A.shrClaims,
                        sshKid: A.sshKid
                    },
                    F = await this.executePostToTokenEndpoint(G, Z, I, X, A.correlationId);
                if (F.body && F.body.error)
                    if (F.body.error === L0.AUTHORIZATION_PENDING) this.logger.info("Authorization pending. Continue polling."), await KI.delay(W);
                    else throw this.logger.info("Unexpected error in polling from the server"), ws1(mZA.postRequestFailed, F.body.error);
                else return this.logger.verbose("Authorization completed successfully. Polling stopped."), F.body
            }
            throw this.logger.error("Polling stopped for unknown reasons."), v0(PG.deviceCodeUnknownError)
        }
        createTokenRequestBody(A, Q) {
            let B = new Map;
            OB.addScopes(B, A.scopes), OB.addClientId(B, this.config.authOptions.clientId), OB.addGrantType(B, PU.DEVICE_CODE_GRANT), OB.addDeviceCode(B, Q.deviceCode);
            let G = A.correlationId || this.config.cryptoInterface.createNewGuid();
            if (OB.addCorrelationId(B, G), OB.addClientInfo(B), OB.addLibraryInfo(B, this.config.libraryInfo), OB.addApplicationTelemetry(B, this.config.telemetry.application), OB.addThrottling(B), this.serverTelemetryManager) OB.addServerTelemetry(B, this.serverTelemetryManager);
            if (!YZ.isEmptyObj(A.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) OB.addClaims(B, A.claims, this.config.authOptions.clientCapabilities);
            return LD.mapToQueryString(B)
        }
    }
});
var QLA;
var s02 = L(() => {
    HI();
    u7();
    _01();
    dNA();
    a02();
    Po1();
    XIA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    QLA = class QLA extends OAA {
        constructor(A) {
            super(A);
            if (this.config.broker.nativeBrokerPlugin)
                if (this.config.broker.nativeBrokerPlugin.isBrokerAvailable) this.nativeBrokerPlugin = this.config.broker.nativeBrokerPlugin, this.nativeBrokerPlugin.setLogger(this.config.system.loggerOptions);
                else this.logger.warning("NativeBroker implementation was provided but the broker is unavailable.");
            this.skus = Pl.makeExtraSkuString({
                libraryName: SE.MSAL_SKU,
                libraryVersion: pT
            })
        }
        async acquireTokenByDeviceCode(A) {
            this.logger.info("acquireTokenByDeviceCode called", A.correlationId);
            let Q = Object.assign(A, await this.initializeBaseRequest(A)),
                B = this.initializeServerTelemetryManager(af.acquireTokenByDeviceCode, Q.correlationId);
            try {
                let G = await this.createAuthority(Q.authority, Q.correlationId, void 0, A.azureCloudOptions),
                    Z = await this.buildOauthClientConfiguration(G, Q.correlationId, "", B),
                    I = new ALA(Z);
                return this.logger.verbose("Device code client created", Q.correlationId), await I.acquireToken(Q)
            } catch (G) {
                if (G instanceof t4) G.setCorrelationId(Q.correlationId);
                throw B.cacheFailedRequest(G), G
            }
        }
        async acquireTokenInteractive(A) {
            let Q = A.correlationId || this.cryptoProvider.createNewGuid();
            this.logger.trace("acquireTokenInteractive called", Q);
            let {
                openBrowser: B,
                successTemplate: G,
                errorTemplate: Z,
                windowHandle: I,
                loopbackClient: Y,
                ...J
            } = A;
            if (this.nativeBrokerPlugin) {
                let D = {
                    ...J,
                    clientId: this.config.auth.clientId,
                    scopes: A.scopes || pH,
                    redirectUri: A.redirectUri || "",
                    authority: A.authority || this.config.auth.authority,
                    correlationId: Q,
                    extraParameters: {
                        ...J.extraQueryParameters,
                        ...J.tokenQueryParameters,
                        [KAA.X_CLIENT_EXTRA_SKU]: this.skus
                    },
                    accountId: J.account?.nativeAccountId
                };
                return this.nativeBrokerPlugin.acquireTokenInteractive(D, I)
            }
            if (A.redirectUri) {
                if (!this.config.broker.nativeBrokerPlugin) throw IY.createRedirectUriNotSupportedError();
                A.redirectUri = ""
            }
            let {
                verifier: W,
                challenge: X
            } = await this.cryptoProvider.generatePkceCodes(), F = Y || new To1, V = {}, K = null;
            try {
                let D = F.listenForAuthCode(G, Z).then((N) => {
                        V = N
                    }).catch((N) => {
                        K = N
                    }),
                    H = await this.waitForRedirectUri(F),
                    C = {
                        ...J,
                        correlationId: Q,
                        scopes: A.scopes || pH,
                        redirectUri: H,
                        responseMode: Xk.QUERY,
                        codeChallenge: X,
                        codeChallengeMethod: K11.S256
                    },
                    E = await this.getAuthCodeUrl(C);
                if (await B(E), await D, K) throw K;
                if (V.error) throw new PE(V.error, V.error_description, V.suberror);
                else if (!V.code) throw IY.createNoAuthCodeInResponseError();
                let z = V.client_info,
                    w = {
                        code: V.code,
                        codeVerifier: W,
                        clientInfo: z || L0.EMPTY_STRING,
                        ...C
                    };
                return await this.acquireTokenByCode(w)
            } finally {
                F.closeServer()
            }
        }
        async acquireTokenSilent(A) {
            let Q = A.correlationId || this.cryptoProvider.createNewGuid();
            if (this.logger.trace("acquireTokenSilent called", Q), this.nativeBrokerPlugin) {
                let B = {
                    ...A,
                    clientId: this.config.auth.clientId,
                    scopes: A.scopes || pH,
                    redirectUri: A.redirectUri || "",
                    authority: A.authority || this.config.auth.authority,
                    correlationId: Q,
                    extraParameters: {
                        ...A.tokenQueryParameters,
                        [KAA.X_CLIENT_EXTRA_SKU]: this.skus
                    },
                    accountId: A.account.nativeAccountId,
                    forceRefresh: A.forceRefresh || !1
                };
                return this.nativeBrokerPlugin.acquireTokenSilent(B)
            }
            if (A.redirectUri) {
                if (!this.config.broker.nativeBrokerPlugin) throw IY.createRedirectUriNotSupportedError();
                A.redirectUri = ""
            }
            return super.acquireTokenSilent(A)
        }
        async signOut(A) {
            if (this.nativeBrokerPlugin && A.account.nativeAccountId) {
                let Q = {
                    clientId: this.config.auth.clientId,
                    accountId: A.account.nativeAccountId,
                    correlationId: A.correlationId || this.cryptoProvider.createNewGuid()
                };
                await this.nativeBrokerPlugin.signOut(Q)
            }
            await this.getTokenCache().removeAccount(A.account, A.correlationId)
        }
        async getAllAccounts() {
            if (this.nativeBrokerPlugin) {
                let A = this.cryptoProvider.createNewGuid();
                return this.nativeBrokerPlugin.getAllAccounts(this.config.auth.clientId, A)
            }
            return this.getTokenCache().getAllAccounts()
        }
        async waitForRedirectUri(A) {
            return new Promise((Q, B) => {
                let G = 0,
                    Z = setInterval(() => {
                        if (G01.TIMEOUT_MS / G01.INTERVAL_MS < G) {
                            clearInterval(Z), B(IY.createLoopbackServerTimeoutError());
                            return
                        }
                        try {
                            let I = A.getRedirectUri();
                            clearInterval(Z), Q(I);
                            return
                        } catch (I) {
                            if (I instanceof t4 && I.errorCode === pX.noLoopbackServerExists.code) {
                                G++;
                                return
                            }
                            clearInterval(Z), B(I);
                            return
                        }
                    }, G01.INTERVAL_MS)
            })
        }
    }
});
var RAA;
var k01 = L(() => {
    u7(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    RAA = class RAA extends iH {
        constructor(A, Q) {
            super(A);
            this.appTokenProvider = Q
        }
        async acquireToken(A) {
            if (A.skipCache || A.claims) return this.executeTokenRequest(A, this.authority);
            let [Q, B] = await this.getCachedAuthenticationResult(A, this.config, this.cryptoUtils, this.authority, this.cacheManager, this.serverTelemetryManager);
            if (Q) {
                if (B === IZ.PROACTIVELY_REFRESHED) {
                    this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
                    let G = !0;
                    await this.executeTokenRequest(A, this.authority, G)
                }
                return Q
            } else return this.executeTokenRequest(A, this.authority)
        }
        async getCachedAuthenticationResult(A, Q, B, G, Z, I) {
            let Y = Q,
                J = Q,
                W = IZ.NOT_APPLICABLE,
                X;
            if (Y.serializableCache && Y.persistencePlugin) X = new vM(Y.serializableCache, !1), await Y.persistencePlugin.beforeCacheAccess(X);
            let F = this.readAccessTokenFromCache(G, J.managedIdentityId?.id || Y.authOptions.clientId, new PJ(A.scopes || []), Z, A.correlationId);
            if (Y.serializableCache && Y.persistencePlugin && X) await Y.persistencePlugin.afterCacheAccess(X);
            if (!F) return I?.setCacheOutcome(IZ.NO_CACHED_ACCESS_TOKEN), [null, IZ.NO_CACHED_ACCESS_TOKEN];
            if (KI.isTokenExpired(F.expiresOn, Y.systemOptions?.tokenRenewalOffsetSeconds || uZA)) return I?.setCacheOutcome(IZ.CACHED_ACCESS_TOKEN_EXPIRED), [null, IZ.CACHED_ACCESS_TOKEN_EXPIRED];
            if (F.refreshOn && KI.isTokenExpired(F.refreshOn.toString(), 0)) W = IZ.PROACTIVELY_REFRESHED, I?.setCacheOutcome(IZ.PROACTIVELY_REFRESHED);
            return [await jJ.generateAuthenticationResult(B, G, {
                account: null,
                idToken: null,
                accessToken: F,
                refreshToken: null,
                appMetadata: null
            }, !0, A), W]
        }
        readAccessTokenFromCache(A, Q, B, G, Z) {
            let I = {
                    homeAccountId: L0.EMPTY_STRING,
                    environment: A.canonicalAuthorityUrlComponents.HostNameAndPort,
                    credentialType: g7.ACCESS_TOKEN,
                    clientId: Q,
                    realm: A.tenant,
                    target: PJ.createSearchScopes(B.asArray())
                },
                Y = G.getAccessTokensByFilter(I, Z);
            if (Y.length < 1) return null;
            else if (Y.length > 1) throw v0(PG.multipleMatchingTokens);
            return Y[0]
        }
        async executeTokenRequest(A, Q, B) {
            let G, Z;
            if (this.appTokenProvider) {
                this.logger.info("Using appTokenProvider extensibility.");
                let J = {
                    correlationId: A.correlationId,
                    tenantId: this.config.authOptions.authority.tenant,
                    scopes: A.scopes,
                    claims: A.claims
                };
                Z = KI.nowSeconds();
                let W = await this.appTokenProvider(J);
                G = {
                    access_token: W.accessToken,
                    expires_in: W.expiresInSeconds,
                    refresh_in: W.refreshInSeconds,
                    token_type: e6.BEARER
                }
            } else {
                let J = this.createTokenQueryParameters(A),
                    W = H8.appendQueryString(Q.tokenEndpoint, J),
                    X = await this.createTokenRequestBody(A),
                    F = this.createTokenRequestHeaders(),
                    V = {
                        clientId: this.config.authOptions.clientId,
                        authority: A.authority,
                        scopes: A.scopes,
                        claims: A.claims,
                        authenticationScheme: A.authenticationScheme,
                        resourceRequestMethod: A.resourceRequestMethod,
                        resourceRequestUri: A.resourceRequestUri,
                        shrClaims: A.shrClaims,
                        sshKid: A.sshKid
                    };
                this.logger.info("Sending token request to endpoint: " + Q.tokenEndpoint), Z = KI.nowSeconds();
                let K = await this.executePostToTokenEndpoint(W, X, F, V, A.correlationId);
                G = K.body, G.status = K.status
            }
            let I = new jJ(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
            return I.validateTokenResponse(G, B), await I.handleServerTokenResponse(G, this.authority, Z, A)
        }
        async createTokenRequestBody(A) {
            let Q = new Map;
            if (OB.addClientId(Q, this.config.authOptions.clientId), OB.addScopes(Q, A.scopes, !1), OB.addGrantType(Q, PU.CLIENT_CREDENTIALS_GRANT), OB.addLibraryInfo(Q, this.config.libraryInfo), OB.addApplicationTelemetry(Q, this.config.telemetry.application), OB.addThrottling(Q), this.serverTelemetryManager) OB.addServerTelemetry(Q, this.serverTelemetryManager);
            let B = A.correlationId || this.config.cryptoInterface.createNewGuid();
            if (OB.addCorrelationId(Q, B), this.config.clientCredentials.clientSecret) OB.addClientSecret(Q, this.config.clientCredentials.clientSecret);
            let G = A.clientAssertion || this.config.clientCredentials.clientAssertion;
            if (G) OB.addClientAssertion(Q, await jE(G.assertion, this.config.authOptions.clientId, A.resourceRequestUri)), OB.addClientAssertionType(Q, G.assertionType);
            if (!YZ.isEmptyObj(A.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) OB.addClaims(Q, A.claims, this.config.authOptions.clientCapabilities);
            return LD.mapToQueryString(Q)
        }
    }
});
var BLA;
var jo1 = L(() => {
    u7();
    iNA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    BLA = class BLA extends iH {
        constructor(A) {
            super(A)
        }
        async acquireToken(A) {
            if (this.scopeSet = new PJ(A.scopes || []), this.userAssertionHash = await this.cryptoUtils.hashString(A.oboAssertion), A.skipCache || A.claims) return this.executeTokenRequest(A, this.authority, this.userAssertionHash);
            try {
                return await this.getCachedAuthenticationResult(A)
            } catch (Q) {
                return await this.executeTokenRequest(A, this.authority, this.userAssertionHash)
            }
        }
        async getCachedAuthenticationResult(A) {
            let Q = this.readAccessTokenFromCacheForOBO(this.config.authOptions.clientId, A);
            if (!Q) throw this.serverTelemetryManager?.setCacheOutcome(IZ.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), v0(PG.tokenRefreshRequired);
            else if (KI.isTokenExpired(Q.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.serverTelemetryManager?.setCacheOutcome(IZ.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info(`OnbehalfofFlow:getCachedAuthenticationResult - Cached access token is expired or will expire within ${this.config.systemOptions.tokenRenewalOffsetSeconds} seconds.`), v0(PG.tokenRefreshRequired);
            let B = this.readIdTokenFromCacheForOBO(Q.homeAccountId, A.correlationId),
                G, Z = null;
            if (B) {
                G = L11.extractTokenClaims(B.secret, _U.base64Decode);
                let I = G.oid || G.sub,
                    Y = {
                        homeAccountId: B.homeAccountId,
                        environment: B.environment,
                        tenantId: B.realm,
                        username: L0.EMPTY_STRING,
                        localAccountId: I || L0.EMPTY_STRING
                    };
                Z = this.cacheManager.getAccount(this.cacheManager.generateAccountKey(Y), A.correlationId)
            }
            if (this.config.serverTelemetryManager) this.config.serverTelemetryManager.incrementCacheHits();
            return jJ.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                account: Z,
                accessToken: Q,
                idToken: B,
                refreshToken: null,
                appMetadata: null
            }, !0, A, G)
        }
        readIdTokenFromCacheForOBO(A, Q) {
            let B = {
                    homeAccountId: A,
                    environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
                    credentialType: g7.ID_TOKEN,
                    clientId: this.config.authOptions.clientId,
                    realm: this.authority.tenant
                },
                G = this.cacheManager.getIdTokensByFilter(B, Q);
            if (Object.values(G).length < 1) return null;
            return Object.values(G)[0]
        }
        readAccessTokenFromCacheForOBO(A, Q) {
            let B = Q.authenticationScheme || e6.BEARER,
                Z = {
                    credentialType: B && B.toLowerCase() !== e6.BEARER.toLowerCase() ? g7.ACCESS_TOKEN_WITH_AUTH_SCHEME : g7.ACCESS_TOKEN,
                    clientId: A,
                    target: PJ.createSearchScopes(this.scopeSet.asArray()),
                    tokenType: B,
                    keyId: Q.sshKid,
                    requestedClaimsHash: Q.requestedClaimsHash,
                    userAssertionHash: this.userAssertionHash
                },
                I = this.cacheManager.getAccessTokensByFilter(Z, Q.correlationId),
                Y = I.length;
            if (Y < 1) return null;
            else if (Y > 1) throw v0(PG.multipleMatchingTokens);
            return I[0]
        }