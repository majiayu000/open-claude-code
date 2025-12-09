/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.952Z
 */

/**
 * Claude Code Decompiled
 * Category: config
 * File: 3/9
 * Lines: 47817 - 49316 (1500 lines)
 * Original file: cli.js
 */

    return B
}
var O64, R64, Vp0;
var Kp0 = L(() => {
    jN();
    y_A();
    Fp0();
    O64 = Object.prototype, R64 = O64.hasOwnProperty;
    Vp0 = T64
});

function P64(A) {
    return Tj(A) ? k_A(A, !0) : Vp0(A)
}
var lj;
var S9A = L(() => {
    hW1();
    Kp0();
    vBA();
    lj = P64
});

function j64(A) {
    return hN(A, lj(A))
}
var Dp0;
var Hp0 = L(() => {
    ns();
    S9A();
    Dp0 = j64
});

function S64(A, Q, B, G, Z, I, Y) {
    var J = CKA(A, B),
        W = CKA(Q, B),
        X = Y.get(W);
    if (X) {
        DKA(A, B, X);
        return
    }
    var F = I ? I(J, W, B + "", A, Q, Y) : void 0,
        V = F === void 0;
    if (V) {
        var K = j7(W),
            D = !K && Oj(W),
            H = !K && !D && yBA(W);
        if (F = W, K || D || H)
            if (j7(J)) F = J;
            else if (Yp0(J)) F = cxA(J);
        else if (D) V = !1, F = HKA(W, !0);
        else if (H) V = !1, F = dxA(W, !0);
        else F = [];
        else if (j9A(W) || px(W)) {
            if (F = J, px(J)) F = Dp0(J);
            else if (!TY(J) || wBA(J)) F = lxA(W)
        } else V = !1
    }
    if (V) Y.set(W, F), Z(F, W, G, I, Y), Y.delete(W);
    DKA(A, B, F)
}
var Cp0;
var Ep0 = L(() => {
    ZC1();
    YC1();
    JC1();
    WC1();
    XC1();
    oFA();
    gC();
    Jp0();
    tFA();
    X_A();
    jN();
    ixA();
    __A();
    FC1();
    Hp0();
    Cp0 = S64
});

function zp0(A, Q, B, G, Z) {
    if (A === Q) return;
    hxA(Q, function(I, Y) {
        if (Z || (Z = new Lj), TY(I)) Cp0(A, Q, Y, B, zp0, G, Z);
        else {
            var J = G ? G(CKA(A, Y), I, Y + "", A, Q, Z) : void 0;
            if (J === void 0) J = I;
            DKA(A, Y, J)
        }
    }, lj)
}
var Up0;
var $p0 = L(() => {
    rFA();
    ZC1();
    IC1();
    Ep0();
    jN();
    S9A();
    FC1();
    Up0 = zp0
});

function _64(A, Q, B) {
    switch (B.length) {
        case 0:
            return A.call(Q);
        case 1:
            return A.call(Q, B[0]);
        case 2:
            return A.call(Q, B[0], B[1]);
        case 3:
            return A.call(Q, B[0], B[1], B[2])
    }
    return A.apply(Q, B)
}
var wp0;
var qp0 = L(() => {
    wp0 = _64
});

function k64(A, Q, B) {
    return Q = Np0(Q === void 0 ? A.length - 1 : Q, 0),
        function() {
            var G = arguments,
                Z = -1,
                I = Np0(G.length - Q, 0),
                Y = Array(I);
            while (++Z < I) Y[Z] = G[Q + Z];
            Z = -1;
            var J = Array(Q + 1);
            while (++Z < Q) J[Z] = G[Z];
            return J[Q] = B(Y), wp0(A, this, J)
        }
}
var Np0, nxA;
var VC1 = L(() => {
    qp0();
    Np0 = Math.max;
    nxA = k64
});

function y64(A) {
    return function() {
        return A
    }
}
var Lp0;
var Mp0 = L(() => {
    Lp0 = y64
});
var x64, Op0;
var Rp0 = L(() => {
    Mp0();
    GC1();
    n_A();
    x64 = !R9A ? cBA : function(A, Q) {
        return R9A(A, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Lp0(Q),
            writable: !0
        })
    }, Op0 = x64
});

function h64(A) {
    var Q = 0,
        B = 0;
    return function() {
        var G = f64(),
            Z = b64 - (G - B);
        if (B = G, Z > 0) {
            if (++Q >= v64) return arguments[0]
        } else Q = 0;
        return A.apply(void 0, arguments)
    }
}
var v64 = 800,
    b64 = 16,
    f64, Tp0;
var Pp0 = L(() => {
    f64 = Date.now;
    Tp0 = h64
});
var g64, axA;
var KC1 = L(() => {
    Rp0();
    Pp0();
    g64 = Tp0(Op0), axA = g64
});

function u64(A, Q) {
    return axA(nxA(A, Q, cBA), A + "")
}
var jp0;
var Sp0 = L(() => {
    n_A();
    VC1();
    KC1();
    jp0 = u64
});

function m64(A, Q, B) {
    if (!TY(B)) return !1;
    var G = typeof Q;
    if (G == "number" ? Tj(B) && xu(Q, B.length) : G == "string" && (Q in B)) return wj(B[Q], A);
    return !1
}
var _p0;
var kp0 = L(() => {
    NBA();
    vBA();
    eFA();
    jN();
    _p0 = m64
});

function d64(A) {
    return jp0(function(Q, B) {
        var G = -1,
            Z = B.length,
            I = Z > 1 ? B[Z - 1] : void 0,
            Y = Z > 2 ? B[2] : void 0;
        if (I = A.length > 3 && typeof I == "function" ? (Z--, I) : void 0, Y && _p0(B[0], B[1], Y)) I = Z < 3 ? void 0 : I, Z = 1;
        Q = Object(Q);
        while (++G < Z) {
            var J = B[G];
            if (J) A(Q, J, G, I)
        }
        return Q
    })
}
var yp0;
var xp0 = L(() => {
    Sp0();
    kp0();
    yp0 = d64
});
var c64, DC1;
var vp0 = L(() => {
    $p0();
    xp0();
    c64 = yp0(function(A, Q, B, G) {
        Up0(A, Q, B, G)
    }), DC1 = c64
});

function UKA(A, Q = !1) {
    let B = A.length,
        G = 0,
        Z = "",
        I = 0,
        Y = 16,
        J = 0,
        W = 0,
        X = 0,
        F = 0,
        V = 0;

function K(N, q) {
        let R = 0,
            P = 0;
        while (R < N || !q) {
            let y = A.charCodeAt(G);
            if (y >= 48 && y <= 57) P = P * 16 + y - 48;
            else if (y >= 65 && y <= 70) P = P * 16 + y - 65 + 10;
            else if (y >= 97 && y <= 102) P = P * 16 + y - 97 + 10;
            else break;
            G++, R++
        }
        if (R < N) P = -1;
        return P
    }

function D(N) {
        G = N, Z = "", I = 0, Y = 16, V = 0
    }

function H() {
        let N = G;
        if (A.charCodeAt(G) === 48) G++;
        else {
            G++;
            while (G < A.length && _9A(A.charCodeAt(G))) G++
        }
        if (G < A.length && A.charCodeAt(G) === 46)
            if (G++, G < A.length && _9A(A.charCodeAt(G))) {
                G++;
                while (G < A.length && _9A(A.charCodeAt(G))) G++
            } else return V = 3, A.substring(N, G);
        let q = G;
        if (G < A.length && (A.charCodeAt(G) === 69 || A.charCodeAt(G) === 101)) {
            if (G++, G < A.length && A.charCodeAt(G) === 43 || A.charCodeAt(G) === 45) G++;
            if (G < A.length && _9A(A.charCodeAt(G))) {
                G++;
                while (G < A.length && _9A(A.charCodeAt(G))) G++;
                q = G
            } else V = 3
        }
        return A.substring(N, q)
    }

function C() {
        let N = "",
            q = G;
        while (!0) {
            if (G >= B) {
                N += A.substring(q, G), V = 2;
                break
            }
            let R = A.charCodeAt(G);
            if (R === 34) {
                N += A.substring(q, G), G++;
                break
            }
            if (R === 92) {
                if (N += A.substring(q, G), G++, G >= B) {
                    V = 2;
                    break
                }
                switch (A.charCodeAt(G++)) {
                    case 34:
                        N += '"';
                        break;
                    case 92:
                        N += "\\";
                        break;
                    case 47:
                        N += "/";
                        break;
                    case 98:
                        N += "\b";
                        break;
                    case 102:
                        N += "\f";
                        break;
                    case 110:
                        N += `
`;
                        break;
                    case 114:
                        N += "\r";
                        break;
                    case 116:
                        N += "\t";
                        break;
                    case 117:
                        let y = K(4, !0);
                        if (y >= 0) N += String.fromCharCode(y);
                        else V = 4;
                        break;
                    default:
                        V = 5
                }
                q = G;
                continue
            }
            if (R >= 0 && R <= 31)
                if (zKA(R)) {
                    N += A.substring(q, G), V = 2;
                    break
                } else V = 6;
            G++
        }
        return N
    }

function E() {
        if (Z = "", V = 0, I = G, W = J, F = X, G >= B) return I = B, Y = 17;
        let N = A.charCodeAt(G);
        if (HC1(N)) {
            do G++, Z += String.fromCharCode(N), N = A.charCodeAt(G); while (HC1(N));
            return Y = 15
        }
        if (zKA(N)) {
            if (G++, Z += String.fromCharCode(N), N === 13 && A.charCodeAt(G) === 10) G++, Z += `
`;
            return J++, X = G, Y = 14
        }
        switch (N) {
            case 123:
                return G++, Y = 1;
            case 125:
                return G++, Y = 2;
            case 91:
                return G++, Y = 3;
            case 93:
                return G++, Y = 4;
            case 58:
                return G++, Y = 6;
            case 44:
                return G++, Y = 5;
            case 34:
                return G++, Z = C(), Y = 10;
            case 47:
                let q = G - 1;
                if (A.charCodeAt(G + 1) === 47) {
                    G += 2;
                    while (G < B) {
                        if (zKA(A.charCodeAt(G))) break;
                        G++
                    }
                    return Z = A.substring(q, G), Y = 12
                }
                if (A.charCodeAt(G + 1) === 42) {
                    G += 2;
                    let R = B - 1,
                        P = !1;
                    while (G < R) {
                        let y = A.charCodeAt(G);
                        if (y === 42 && A.charCodeAt(G + 1) === 47) {
                            G += 2, P = !0;
                            break
                        }
                        if (G++, zKA(y)) {
                            if (y === 13 && A.charCodeAt(G) === 10) G++;
                            J++, X = G
                        }
                    }
                    if (!P) G++, V = 1;
                    return Z = A.substring(q, G), Y = 13
                }
                return Z += String.fromCharCode(N), G++, Y = 16;
            case 45:
                if (Z += String.fromCharCode(N), G++, G === B || !_9A(A.charCodeAt(G))) return Y = 16;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return Z += H(), Y = 11;
            default:
                while (G < B && z(N)) G++, N = A.charCodeAt(G);
                if (I !== G) {
                    switch (Z = A.substring(I, G), Z) {
                        case "true":
                            return Y = 8;
                        case "false":
                            return Y = 9;
                        case "null":
                            return Y = 7
                    }
                    return Y = 16
                }
                return Z += String.fromCharCode(N), G++, Y = 16
        }
    }

function z(N) {
        if (HC1(N) || zKA(N)) return !1;
        switch (N) {
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
                return !1
        }
        return !0
    }

function w() {
        let N;
        do N = E(); while (N >= 12 && N <= 15);
        return N
    }
    return {
        setPosition: D,
        getPosition: () => G,
        scan: Q ? w : E,
        getToken: () => Y,
        getTokenValue: () => Z,
        getTokenOffset: () => I,
        getTokenLength: () => G - I,
        getTokenStartLine: () => W,
        getTokenStartCharacter: () => I - F,
        getTokenError: () => V
    }
}

function HC1(A) {
    return A === 32 || A === 9
}

function zKA(A) {
    return A === 10 || A === 13
}

function _9A(A) {
    return A >= 48 && A <= 57
}
var bp0;
var sxA = L(() => {
    (function(A) {
        A[A.lineFeed = 10] = "lineFeed", A[A.carriageReturn = 13] = "carriageReturn", A[A.space = 32] = "space", A[A._0 = 48] = "_0", A[A._1 = 49] = "_1", A[A._2 = 50] = "_2", A[A._3 = 51] = "_3", A[A._4 = 52] = "_4", A[A._5 = 53] = "_5", A[A._6 = 54] = "_6", A[A._7 = 55] = "_7", A[A._8 = 56] = "_8", A[A._9 = 57] = "_9", A[A.a = 97] = "a", A[A.b = 98] = "b", A[A.c = 99] = "c", A[A.d = 100] = "d", A[A.e = 101] = "e", A[A.f = 102] = "f", A[A.g = 103] = "g", A[A.h = 104] = "h", A[A.i = 105] = "i", A[A.j = 106] = "j", A[A.k = 107] = "k", A[A.l = 108] = "l", A[A.m = 109] = "m", A[A.n = 110] = "n", A[A.o = 111] = "o", A[A.p = 112] = "p", A[A.q = 113] = "q", A[A.r = 114] = "r", A[A.s = 115] = "s", A[A.t = 116] = "t", A[A.u = 117] = "u", A[A.v = 118] = "v", A[A.w = 119] = "w", A[A.x = 120] = "x", A[A.y = 121] = "y", A[A.z = 122] = "z", A[A.A = 65] = "A", A[A.B = 66] = "B", A[A.C = 67] = "C", A[A.D = 68] = "D", A[A.E = 69] = "E", A[A.F = 70] = "F", A[A.G = 71] = "G", A[A.H = 72] = "H", A[A.I = 73] = "I", A[A.J = 74] = "J", A[A.K = 75] = "K", A[A.L = 76] = "L", A[A.M = 77] = "M", A[A.N = 78] = "N", A[A.O = 79] = "O", A[A.P = 80] = "P", A[A.Q = 81] = "Q", A[A.R = 82] = "R", A[A.S = 83] = "S", A[A.T = 84] = "T", A[A.U = 85] = "U", A[A.V = 86] = "V", A[A.W = 87] = "W", A[A.X = 88] = "X", A[A.Y = 89] = "Y", A[A.Z = 90] = "Z", A[A.asterisk = 42] = "asterisk", A[A.backslash = 92] = "backslash", A[A.closeBrace = 125] = "closeBrace", A[A.closeBracket = 93] = "closeBracket", A[A.colon = 58] = "colon", A[A.comma = 44] = "comma", A[A.dot = 46] = "dot", A[A.doubleQuote = 34] = "doubleQuote", A[A.minus = 45] = "minus", A[A.openBrace = 123] = "openBrace", A[A.openBracket = 91] = "openBracket", A[A.plus = 43] = "plus", A[A.slash = 47] = "slash", A[A.formFeed = 12] = "formFeed", A[A.tab = 9] = "tab"
    })(bp0 || (bp0 = {}))
});
var t$, CC1, fp0;
var hp0 = L(() => {
    t$ = Array(20).fill(0).map((A, Q) => {
        return " ".repeat(Q)
    }), CC1 = {
        " ": {
            "\n": Array(200).fill(0).map((A, Q) => {
                return `
` + " ".repeat(Q)
            }),
            "\r": Array(200).fill(0).map((A, Q) => {
                return "\r" + " ".repeat(Q)
            }),
            "\r\n": Array(200).fill(0).map((A, Q) => {
                return `\r
` + " ".repeat(Q)
            })
        },
        "\t": {
            "\n": Array(200).fill(0).map((A, Q) => {
                return `
` + "\t".repeat(Q)
            }),
            "\r": Array(200).fill(0).map((A, Q) => {
                return "\r" + "\t".repeat(Q)
            }),
            "\r\n": Array(200).fill(0).map((A, Q) => {
                return `\r
` + "\t".repeat(Q)
            })
        }
    }, fp0 = [`
`, "\r", `\r
`]
});

function EC1(A, Q, B) {
    let G, Z, I, Y, J;
    if (Q) {
        Y = Q.offset, J = Y + Q.length, I = Y;
        while (I > 0 && !$KA(A, I - 1)) I--;
        let R = J;
        while (R < A.length && !$KA(A, R)) R++;
        Z = A.substring(I, R), G = l64(Z, B)
    } else Z = A, G = 0, I = 0, Y = 0, J = A.length;
    let W = i64(B, A),
        X = fp0.includes(W),
        F = 0,
        V = 0,
        K;
    if (B.insertSpaces) K = t$[B.tabSize || 4] ?? k9A(t$[1], B.tabSize || 4);
    else K = "\t";
    let D = K === "\t" ? "\t" : " ",
        H = UKA(Z, !1),
        C = !1;

function E() {
        if (F > 1) return k9A(W, F) + k9A(K, G + V);
        let R = K.length * (G + V);
        if (!X || R > CC1[D][W].length) return W + k9A(K, G + V);
        if (R <= 0) return W;
        return CC1[D][W][R]
    }

function z() {
        let R = H.scan();
        F = 0;
        while (R === 15 || R === 14) {
            if (R === 14 && B.keepLines) F += 1;
            else if (R === 14) F = 1;
            R = H.scan()
        }
        return C = R === 16 || H.getTokenError() !== 0, R
    }
    let w = [];

function N(R, P, y) {
        if (!C && (!Q || P < J && y > Y) && A.substring(P, y) !== R) w.push({
            offset: P,
            length: y - P,
            content: R
        })
    }
    let q = z();
    if (B.keepLines && F > 0) N(k9A(W, F), 0, 0);
    if (q !== 17) {
        let R = H.getTokenOffset() + I,
            P = K.length * G < 20 && B.insertSpaces ? t$[K.length * G] : k9A(K, G);
        N(P, I, R)
    }
    while (q !== 17) {
        let R = H.getTokenOffset() + H.getTokenLength() + I,
            P = z(),
            y = "",
            v = !1;
        while (F === 0 && (P === 12 || P === 13)) {
            let p = H.getTokenOffset() + I;
            N(t$[1], R, p), R = H.getTokenOffset() + H.getTokenLength() + I, v = P === 12, y = v ? E() : "", P = z()
        }
        if (P === 2) {
            if (q !== 1) V--;
            if (B.keepLines && F > 0 || !B.keepLines && q !== 1) y = E();
            else if (B.keepLines) y = t$[1]
        } else if (P === 4) {
            if (q !== 3) V--;
            if (B.keepLines && F > 0 || !B.keepLines && q !== 3) y = E();
            else if (B.keepLines) y = t$[1]
        } else {
            switch (q) {
                case 3:
                case 1:
                    if (V++, B.keepLines && F > 0 || !B.keepLines) y = E();
                    else y = t$[1];
                    break;
                case 5:
                    if (B.keepLines && F > 0 || !B.keepLines) y = E();
                    else y = t$[1];
                    break;
                case 12:
                    y = E();
                    break;
                case 13:
                    if (F > 0) y = E();
                    else if (!v) y = t$[1];
                    break;
                case 6:
                    if (B.keepLines && F > 0) y = E();
                    else if (!v) y = t$[1];
                    break;
                case 10:
                    if (B.keepLines && F > 0) y = E();
                    else if (P === 6 && !v) y = "";
                    break;
                case 7:
                case 8:
                case 9:
                case 11:
                case 2:
                case 4:
                    if (B.keepLines && F > 0) y = E();
                    else if ((P === 12 || P === 13) && !v) y = t$[1];
                    else if (P !== 5 && P !== 17) C = !0;
                    break;
                case 16:
                    C = !0;
                    break
            }
            if (F > 0 && (P === 12 || P === 13)) y = E()
        }
        if (P === 17)
            if (B.keepLines && F > 0) y = E();
            else y = B.insertFinalNewline ? W : "";
        let x = H.getTokenOffset() + I;
        N(y, R, x), q = P
    }
    return w
}

function k9A(A, Q) {
    let B = "";
    for (let G = 0; G < Q; G++) B += A;
    return B
}

function l64(A, Q) {
    let B = 0,
        G = 0,
        Z = Q.tabSize || 4;
    while (B < A.length) {
        let I = A.charAt(B);
        if (I === t$[1]) G++;
        else if (I === "\t") G += Z;
        else break;
        B++
    }
    return Math.floor(G / Z)
}

function i64(A, Q) {
    for (let B = 0; B < Q.length; B++) {
        let G = Q.charAt(B);
        if (G === "\r") {
            if (B + 1 < Q.length && Q.charAt(B + 1) === `
`) return `\r
`;
            return "\r"
        } else if (G === `
`) return `
`
    }
    return A && A.eol || `
`
}

function $KA(A, Q) {
    return `\r
`.indexOf(A.charAt(Q)) !== -1
}
var zC1 = L(() => {
    sxA();
    hp0()
});

function gp0(A, Q = [], B = wKA.DEFAULT) {
    let G = null,
        Z = [],
        I = [];

function Y(W) {
        if (Array.isArray(Z)) Z.push(W);
        else if (G !== null) Z[G] = W
    }
    return $C1(A, {
        onObjectBegin: () => {
            let W = {};
            Y(W), I.push(Z), Z = W, G = null
        },
        onObjectProperty: (W) => {
            G = W
        },
        onObjectEnd: () => {
            Z = I.pop()
        },
        onArrayBegin: () => {
            let W = [];
            Y(W), I.push(Z), Z = W, G = null
        },
        onArrayEnd: () => {
            Z = I.pop()
        },
        onLiteralValue: Y,
        onError: (W, X, F) => {
            Q.push({
                error: W,
                offset: X,
                length: F
            })
        }
    }, B), Z[0]
}

function UC1(A, Q = [], B = wKA.DEFAULT) {
    let G = {
        type: "array",
        offset: -1,
        length: -1,
        children: [],
        parent: void 0
    };

function Z(W) {
        if (G.type === "property") G.length = W - G.offset, G = G.parent
    }

function I(W) {
        return G.children.push(W), W
    }
    $C1(A, {
        onObjectBegin: (W) => {
            G = I({
                type: "object",
                offset: W,
                length: -1,
                parent: G,
                children: []
            })
        },
        onObjectProperty: (W, X, F) => {
            G = I({
                type: "property",
                offset: X,
                length: -1,
                parent: G,
                children: []
            }), G.children.push({
                type: "string",
                value: W,
                offset: X,
                length: F,
                parent: G
            })
        },
        onObjectEnd: (W, X) => {
            Z(W + X), G.length = W + X - G.offset, G = G.parent, Z(W + X)
        },
        onArrayBegin: (W, X) => {
            G = I({
                type: "array",
                offset: W,
                length: -1,
                parent: G,
                children: []
            })
        },
        onArrayEnd: (W, X) => {
            G.length = W + X - G.offset, G = G.parent, Z(W + X)
        },
        onLiteralValue: (W, X, F) => {
            I({
                type: a64(W),
                offset: X,
                length: F,
                parent: G,
                value: W
            }), Z(X + F)
        },
        onSeparator: (W, X, F) => {
            if (G.type === "property") {
                if (W === ":") G.colonOffset = X;
                else if (W === ",") Z(X)
            }
        },
        onError: (W, X, F) => {
            Q.push({
                error: W,
                offset: X,
                length: F
            })
        }
    }, B);
    let J = G.children[0];
    if (J) delete J.parent;
    return J
}

function rxA(A, Q) {
    if (!A) return;
    let B = A;
    for (let G of Q)
        if (typeof G === "string") {
            if (B.type !== "object" || !Array.isArray(B.children)) return;
            let Z = !1;
            for (let I of B.children)
                if (Array.isArray(I.children) && I.children[0].value === G && I.children.length === 2) {
                    B = I.children[1], Z = !0;
                    break
                } if (!Z) return
        } else {
            let Z = G;
            if (B.type !== "array" || Z < 0 || !Array.isArray(B.children) || Z >= B.children.length) return;
            B = B.children[Z]
        } return B
}

function $C1(A, Q, B = wKA.DEFAULT) {
    let G = UKA(A, !1),
        Z = [];

function I(o) {
        return o ? () => o(G.getTokenOffset(), G.getTokenLength(), G.getTokenStartLine(), G.getTokenStartCharacter()) : () => !0
    }

function Y(o) {
        return o ? () => o(G.getTokenOffset(), G.getTokenLength(), G.getTokenStartLine(), G.getTokenStartCharacter(), () => Z.slice()) : () => !0
    }

function J(o) {
        return o ? (l) => o(l, G.getTokenOffset(), G.getTokenLength(), G.getTokenStartLine(), G.getTokenStartCharacter()) : () => !0
    }

function W(o) {
        return o ? (l) => o(l, G.getTokenOffset(), G.getTokenLength(), G.getTokenStartLine(), G.getTokenStartCharacter(), () => Z.slice()) : () => !0
    }
    let X = Y(Q.onObjectBegin),
        F = W(Q.onObjectProperty),
        V = I(Q.onObjectEnd),
        K = Y(Q.onArrayBegin),
        D = I(Q.onArrayEnd),
        H = W(Q.onLiteralValue),
        C = J(Q.onSeparator),
        E = I(Q.onComment),
        z = J(Q.onError),
        w = B && B.disallowComments,
        N = B && B.allowTrailingComma;

function q() {
        while (!0) {
            let o = G.scan();
            switch (G.getTokenError()) {
                case 4:
                    R(14);
                    break;
                case 5:
                    R(15);
                    break;
                case 3:
                    R(13);
                    break;
                case 1:
                    if (!w) R(11);
                    break;
                case 2:
                    R(12);
                    break;
                case 6:
                    R(16);
                    break
            }
            switch (o) {
                case 12:
                case 13:
                    if (w) R(10);
                    else E();
                    break;
                case 16:
                    R(1);
                    break;
                case 15:
                case 14:
                    break;
                default:
                    return o
            }
        }
    }

function R(o, l = [], k = []) {
        if (z(o), l.length + k.length > 0) {
            let d = G.getToken();
            while (d !== 17) {
                if (l.indexOf(d) !== -1) {
                    q();
                    break
                } else if (k.indexOf(d) !== -1) break;
                d = q()
            }
        }
    }

function P(o) {
        let l = G.getTokenValue();
        if (o) H(l);
        else F(l), Z.push(l);
        return q(), !0
    }

function y() {
        switch (G.getToken()) {
            case 11:
                let o = G.getTokenValue(),
                    l = Number(o);
                if (isNaN(l)) R(2), l = 0;
                H(l);
                break;
            case 7:
                H(null);
                break;
            case 8:
                H(!0);
                break;
            case 9:
                H(!1);
                break;
            default:
                return !1
        }
        return q(), !0
    }

function v() {
        if (G.getToken() !== 10) return R(3, [], [2, 5]), !1;
        if (P(!1), G.getToken() === 6) {
            if (C(":"), q(), !u()) R(4, [], [2, 5])
        } else R(5, [], [2, 5]);
        return Z.pop(), !0
    }

function x() {
        X(), q();
        let o = !1;
        while (G.getToken() !== 2 && G.getToken() !== 17) {
            if (G.getToken() === 5) {
                if (!o) R(4, [], []);
                if (C(","), q(), G.getToken() === 2 && N) break
            } else if (o) R(6, [], []);
            if (!v()) R(4, [], [2, 5]);
            o = !0
        }
        if (V(), G.getToken() !== 2) R(7, [2], []);
        else q();
        return !0
    }

function p() {
        K(), q();
        let o = !0,
            l = !1;
        while (G.getToken() !== 4 && G.getToken() !== 17) {
            if (G.getToken() === 5) {
                if (!l) R(4, [], []);
                if (C(","), q(), G.getToken() === 4 && N) break
            } else if (l) R(6, [], []);
            if (o) Z.push(0), o = !1;
            else Z[Z.length - 1]++;
            if (!u()) R(4, [], [4, 5]);
            l = !0
        }
        if (D(), !o) Z.pop();
        if (G.getToken() !== 4) R(8, [4], []);
        else q();
        return !0
    }

function u() {
        switch (G.getToken()) {
            case 3:
                return p();
            case 1:
                return x();
            case 10:
                return P(!0);
            default:
                return y()
        }
    }
    if (q(), G.getToken() === 17) {
        if (B.allowEmptyContent) return !0;
        return R(4, [], []), !1
    }
    if (!u()) return R(4, [], []), !1;
    if (G.getToken() !== 17) R(9, [], []);
    return !0
}

function a64(A) {
    switch (typeof A) {
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
        case "object": {
            if (!A) return "null";
            else if (Array.isArray(A)) return "array";
            return "object"
        }
        default:
            return "null"
    }
}
var wKA;
var wC1 = L(() => {
    sxA();
    (function(A) {
        A.DEFAULT = {
            allowTrailingComma: !1
        }
    })(wKA || (wKA = {}))
});

function up0(A, Q, B, G) {
    let Z = Q.slice(),
        Y = UC1(A, []),
        J = void 0,
        W = void 0;
    while (Z.length > 0)
        if (W = Z.pop(), J = rxA(Y, Z), J === void 0 && B !== void 0)
            if (typeof W === "string") B = {
                [W]: B
            };
            else B = [B];
    else break;
    if (!J) {
        if (B === void 0) throw Error("Can not delete in empty document");
        return as(A, {
            offset: Y ? Y.offset : 0,
            length: Y ? Y.length : 0,
            content: JSON.stringify(B)
        }, G)
    } else if (J.type === "object" && typeof W === "string" && Array.isArray(J.children)) {
        let X = rxA(J, [W]);
        if (X !== void 0)
            if (B === void 0) {
                if (!X.parent) throw Error("Malformed AST");
                let F = J.children.indexOf(X.parent),
                    V, K = X.parent.offset + X.parent.length;
                if (F > 0) {
                    let D = J.children[F - 1];
                    V = D.offset + D.length
                } else if (V = J.offset + 1, J.children.length > 1) K = J.children[1].offset;
                return as(A, {
                    offset: V,
                    length: K - V,
                    content: ""
                }, G)
            } else return as(A, {
                offset: X.offset,
                length: X.length,
                content: JSON.stringify(B)
            }, G);
        else {
            if (B === void 0) return [];
            let F = `${JSON.stringify(W)}: ${JSON.stringify(B)}`,
                V = G.getInsertionIndex ? G.getInsertionIndex(J.children.map((D) => D.children[0].value)) : J.children.length,
                K;
            if (V > 0) {
                let D = J.children[V - 1];
                K = {
                    offset: D.offset + D.length,
                    length: 0,
                    content: "," + F
                }
            } else if (J.children.length === 0) K = {
                offset: J.offset + 1,
                length: 0,
                content: F
            };
            else K = {
                offset: J.offset + 1,
                length: 0,
                content: F + ","
            };
            return as(A, K, G)
        }
    } else if (J.type === "array" && typeof W === "number" && Array.isArray(J.children)) {
        let X = W;
        if (X === -1) {
            let F = `${JSON.stringify(B)}`,
                V;
            if (J.children.length === 0) V = {
                offset: J.offset + 1,
                length: 0,
                content: F
            };
            else {
                let K = J.children[J.children.length - 1];
                V = {
                    offset: K.offset + K.length,
                    length: 0,
                    content: "," + F
                }
            }
            return as(A, V, G)
        } else if (B === void 0 && J.children.length >= 0) {
            let F = W,
                V = J.children[F],
                K;
            if (J.children.length === 1) K = {
                offset: J.offset + 1,
                length: J.length - 2,
                content: ""
            };
            else if (J.children.length - 1 === F) {
                let D = J.children[F - 1],
                    H = D.offset + D.length,
                    C = J.offset + J.length;
                K = {
                    offset: H,
                    length: C - 2 - H,
                    content: ""
                }
            } else K = {
                offset: V.offset,
                length: J.children[F + 1].offset - V.offset,
                content: ""
            };
            return as(A, K, G)
        } else if (B !== void 0) {
            let F, V = `${JSON.stringify(B)}`;
            if (!G.isArrayInsertion && J.children.length > W) {
                let K = J.children[W];
                F = {
                    offset: K.offset,
                    length: K.length,
                    content: V
                }
            } else if (J.children.length === 0 || W === 0) F = {
                offset: J.offset + 1,
                length: 0,
                content: J.children.length === 0 ? V : V + ","
            };
            else {
                let K = W > J.children.length ? J.children.length : W,
                    D = J.children[K - 1];
                F = {
                    offset: D.offset + D.length,
                    length: 0,
                    content: "," + V
                }
            }
            return as(A, F, G)
        } else throw Error(`Can not ${B===void 0?"remove":G.isArrayInsertion?"insert":"modify"} Array index ${X} as length is not sufficient`)
    } else throw Error(`Can not add ${typeof W!=="number"?"index":"property"} to parent of type ${J.type}`)
}

function as(A, Q, B) {
    if (!B.formattingOptions) return [Q];
    let G = oxA(A, Q),
        Z = Q.offset,
        I = Q.offset + Q.content.length;
    if (Q.length === 0 || Q.content.length === 0) {
        while (Z > 0 && !$KA(G, Z - 1)) Z--;
        while (I < G.length && !$KA(G, I)) I++
    }
    let Y = EC1(G, {
        offset: Z,
        length: I - Z
    }, {
        ...B.formattingOptions,
        keepLines: !1
    });
    for (let W = Y.length - 1; W >= 0; W--) {
        let X = Y[W];
        G = oxA(G, X), Z = Math.min(Z, X.offset), I = Math.max(I, X.offset + X.length), I += X.content.length - X.length
    }
    let J = A.length - (G.length - I) - Z;
    return [{
        offset: Z,
        length: J,
        content: G.substring(Z, I)
    }]
}

function oxA(A, Q) {
    return A.substring(0, Q.offset) + Q.content + A.substring(Q.offset + Q.length)
}
var mp0 = L(() => {
    zC1();
    wC1()
});

function lp0(A, Q, B, G) {
    return up0(A, Q, B, G)
}

function ip0(A, Q) {
    let B = Q.slice(0).sort((Z, I) => {
            let Y = Z.offset - I.offset;
            if (Y === 0) return Z.length - I.length;
            return Y
        }),
        G = A.length;
    for (let Z = B.length - 1; Z >= 0; Z--) {
        let I = B[Z];
        if (I.offset + I.length <= G) A = oxA(A, I);
        else throw Error("Overlapping edit");
        G = I.offset
    }
    return A
}
var dp0, cp0, qC1, pp0;
var np0 = L(() => {
    zC1();
    mp0();
    sxA();
    wC1();
    (function(A) {
        A[A.None = 0] = "None", A[A.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", A[A.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", A[A.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", A[A.InvalidUnicode = 4] = "InvalidUnicode", A[A.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", A[A.InvalidCharacter = 6] = "InvalidCharacter"
    })(dp0 || (dp0 = {}));
    (function(A) {
        A[A.OpenBraceToken = 1] = "OpenBraceToken", A[A.CloseBraceToken = 2] = "CloseBraceToken", A[A.OpenBracketToken = 3] = "OpenBracketToken", A[A.CloseBracketToken = 4] = "CloseBracketToken", A[A.CommaToken = 5] = "CommaToken", A[A.ColonToken = 6] = "ColonToken", A[A.NullKeyword = 7] = "NullKeyword", A[A.TrueKeyword = 8] = "TrueKeyword", A[A.FalseKeyword = 9] = "FalseKeyword", A[A.StringLiteral = 10] = "StringLiteral", A[A.NumericLiteral = 11] = "NumericLiteral", A[A.LineCommentTrivia = 12] = "LineCommentTrivia", A[A.BlockCommentTrivia = 13] = "BlockCommentTrivia", A[A.LineBreakTrivia = 14] = "LineBreakTrivia", A[A.Trivia = 15] = "Trivia", A[A.Unknown = 16] = "Unknown", A[A.EOF = 17] = "EOF"
    })(cp0 || (cp0 = {}));
    qC1 = gp0;
    (function(A) {
        A[A.InvalidSymbol = 1] = "InvalidSymbol", A[A.InvalidNumberFormat = 2] = "InvalidNumberFormat", A[A.PropertyNameExpected = 3] = "PropertyNameExpected", A[A.ValueExpected = 4] = "ValueExpected", A[A.ColonExpected = 5] = "ColonExpected", A[A.CommaExpected = 6] = "CommaExpected", A[A.CloseBraceExpected = 7] = "CloseBraceExpected", A[A.CloseBracketExpected = 8] = "CloseBracketExpected", A[A.EndOfFileExpected = 9] = "EndOfFileExpected", A[A.InvalidCommentToken = 10] = "InvalidCommentToken", A[A.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", A[A.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", A[A.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", A[A.InvalidUnicode = 14] = "InvalidUnicode", A[A.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", A[A.InvalidCharacter = 16] = "InvalidCharacter"
    })(pp0 || (pp0 = {}))
});
import {
    readFile as o64
} from "fs/promises";

function ap0(A) {
    if (!A) return null;
    try {
        return qC1(A)
    } catch (Q) {
        return e(Q), null
    }
}

async function ss(A) {
    try {
        let Q = await o64(A, "utf8");
        if (!Q.trim()) return [];
        return Q.split(`
`).filter((B) => B.trim()).map((B) => {
            try {
                return JSON.parse(B)
            } catch (G) {
                return e(Error(`Error parsing line in ${A}: ${G}`)), null
            }
        }).filter((B) => B !== null)
    } catch (Q) {
        return e(Error(`Error opening file ${A}: ${Q}`)), []
    }
}

function sp0(A, Q) {
    try {
        if (!A || A.trim() === "") return JSON.stringify([Q], null, 4);
        let B = qC1(A);
        if (Array.isArray(B)) {
            let G = B.length,
                Y = lp0(A, G === 0 ? [0] : [G], Q, {
                    formattingOptions: {
                        insertSpaces: !0,
                        tabSize: 4
                    },
                    isArrayInsertion: !0
                });
            if (!Y || Y.length === 0) {
                let J = [...B, Q];
                return JSON.stringify(J, null, 4)
            }
            return ip0(A, Y)
        } else return JSON.stringify([Q], null, 4)
    } catch (B) {
        return e(B), JSON.stringify([Q], null, 4)
    }
}
var S7;
var zV = L(() => {
    u1();
    np0();
    o2();
    S7 = t1((A, Q = !0) => {
        if (!A) return null;
        try {
            return JSON.parse(A)
        } catch (B) {
            if (Q) e(B);
            return null
        }
    })
});

function wm(A) {
    switch (A) {
        case "userSettings":
            return "user";
        case "projectSettings":
            return "project";
        case "localSettings":
            return "project, gitignored";
        case "flagSettings":
            return "cli flag";
        case "policySettings":
            return "managed"
    }
}

function rp0(A) {
    if (A === "") return [];
    let Q = A.split(",").map((G) => G.trim()),
        B = [];
    for (let G of Q) switch (G) {
        case "user":
            B.push("userSettings");
            break;
        case "project":
            B.push("projectSettings");
            break;
        case "local":
            B.push("localSettings");
            break;
        default:
            throw Error(`Invalid setting source: ${G}. Valid options are: user, project, local`)
    }
    return B
}

function rs() {
    let A = jE0(),
        Q = new Set(A);
    return Q.add("policySettings"), Q.add("flagSettings"), Array.from(Q)
}

function DH(A) {
    return rs().includes(A)
}
var gN, op0 = "https://json.schemastore.org/claude-code-settings.json";
var UF = L(() => {
    S0();
    gN = ["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"]
});
var d6, NC1, aQ, ij = (A) => {
    switch (typeof A) {
        case "undefined":
            return aQ.undefined;
        case "string":
            return aQ.string;
        case "number":
            return Number.isNaN(A) ? aQ.nan : aQ.number;
        case "boolean":
            return aQ.boolean;
        case "function":
            return aQ.function;
        case "bigint":
            return aQ.bigint;
        case "symbol":
            return aQ.symbol;
        case "object":
            if (Array.isArray(A)) return aQ.array;
            if (A === null) return aQ.null;
            if (A.then && typeof A.then === "function" && A.catch && typeof A.catch === "function") return aQ.promise;
            if (typeof Map < "u" && A instanceof Map) return aQ.map;
            if (typeof Set < "u" && A instanceof Set) return aQ.set;
            if (typeof Date < "u" && A instanceof Date) return aQ.date;
            return aQ.object;
        default:
            return aQ.unknown
    }
};
var qKA = L(() => {
    (function(A) {
        A.assertEqual = (Z) => {};

function Q(Z) {}
        A.assertIs = Q;

function B(Z) {
            throw Error()
        }
        A.assertNever = B, A.arrayToEnum = (Z) => {
            let I = {};
            for (let Y of Z) I[Y] = Y;
            return I
        }, A.getValidEnumValues = (Z) => {
            let I = A.objectKeys(Z).filter((J) => typeof Z[Z[J]] !== "number"),
                Y = {};
            for (let J of I) Y[J] = Z[J];
            return A.objectValues(Y)
        }, A.objectValues = (Z) => {
            return A.objectKeys(Z).map(function(I) {
                return Z[I]
            })
        }, A.objectKeys = typeof Object.keys === "function" ? (Z) => Object.keys(Z) : (Z) => {
            let I = [];
            for (let Y in Z)
                if (Object.prototype.hasOwnProperty.call(Z, Y)) I.push(Y);
            return I
        }, A.find = (Z, I) => {
            for (let Y of Z)
                if (I(Y)) return Y;
            return
        }, A.isInteger = typeof Number.isInteger === "function" ? (Z) => Number.isInteger(Z) : (Z) => typeof Z === "number" && Number.isFinite(Z) && Math.floor(Z) === Z;

function G(Z, I = " | ") {
            return Z.map((Y) => typeof Y === "string" ? `'${Y}'` : Y).join(I)
        }
        A.joinValues = G, A.jsonStringifyReplacer = (Z, I) => {
            if (typeof I === "bigint") return I.toString();
            return I
        }
    })(d6 || (d6 = {}));
    (function(A) {
        A.mergeShapes = (Q, B) => {
            return {
                ...Q,
                ...B
            }
        }
    })(NC1 || (NC1 = {}));
    aQ = d6.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
});
var wQ, t64 = (A) => {
        return JSON.stringify(A, null, 2).replace(/"([^"]+)":/g, "$1:")
    },
    gz;
var txA = L(() => {
    qKA();
    wQ = d6.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    gz = class gz extends Error {
        get errors() {
            return this.issues
        }
        constructor(A) {
            super();
            this.issues = [], this.addIssue = (B) => {
                this.issues = [...this.issues, B]
            }, this.addIssues = (B = []) => {
                this.issues = [...this.issues, ...B]
            };
            let Q = new.target.prototype;
            if (Object.setPrototypeOf) Object.setPrototypeOf(this, Q);
            else this.__proto__ = Q;
            this.name = "ZodError", this.issues = A
        }
        format(A) {
            let Q = A || function(Z) {
                    return Z.message
                },
                B = {
                    _errors: []
                },
                G = (Z) => {
                    for (let I of Z.issues)
                        if (I.code === "invalid_union") I.unionErrors.map(G);
                        else if (I.code === "invalid_return_type") G(I.returnTypeError);
                    else if (I.code === "invalid_arguments") G(I.argumentsError);
                    else if (I.path.length === 0) B._errors.push(Q(I));
                    else {
                        let Y = B,
                            J = 0;