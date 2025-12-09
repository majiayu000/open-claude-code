/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: ui_048.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 48/53
 * Lines: 363342 - 364839 (1498 lines)
 * Original file: cli.js
 */

        function E3(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                case 47:
                case 62:
                    if (VC(w) === "script") D = V9;
                    else D = g4;
                    qA.push(CA);
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    w.push(CA + 32), qA.push(CA);
                    break;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    w.push(CA), qA.push(CA);
                    break;
                default:
                    nA(CA, g4);
                    break
            }
        }

        function V9(CA) {
            switch (CA) {
                case 45:
                    D = Q4, qA.push(45);
                    break;
                case 60:
                    D = YA, qA.push(60);
                    break;
                case 0:
                    qA.push(65533);
                    break;
                case -1:
                    s1();
                    break;
                default:
                    qA.push(CA);
                    break
            }
        }

        function Q4(CA) {
            switch (CA) {
                case 45:
                    D = dA, qA.push(45);
                    break;
                case 60:
                    D = YA, qA.push(60);
                    break;
                case 0:
                    D = V9, qA.push(65533);
                    break;
                case -1:
                    s1();
                    break;
                default:
                    D = V9, qA.push(CA);
                    break
            }
        }

        function dA(CA) {
            switch (CA) {
                case 45:
                    qA.push(45);
                    break;
                case 60:
                    D = YA, qA.push(60);
                    break;
                case 62:
                    D = O0, qA.push(62);
                    break;
                case 0:
                    D = V9, qA.push(65533);
                    break;
                case -1:
                    s1();
                    break;
                default:
                    D = V9, qA.push(CA);
                    break
            }
        }

        function YA(CA) {
            if (CA === 47) aA(), D = ZA, qA.push(47);
            else nA(CA, V9)
        }

        function ZA(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                case 47:
                case 62:
                    if (VC(w) === "script") D = g4;
                    else D = V9;
                    qA.push(CA);
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    w.push(CA + 32), qA.push(CA);
                    break;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    w.push(CA), qA.push(CA);
                    break;
                default:
                    nA(CA, V9);
                    break
            }
        }

        function jA(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 47:
                    D = I0;
                    break;
                case 62:
                    D = C1, R1();
                    break;
                case -1:
                    s1();
                    break;
                case 61:
                    I1(), N += String.fromCharCode(CA), D = xA;
                    break;
                default:
                    if (LA()) break;
                    I1(), nA(CA, xA);
                    break
            }
        }

        function xA(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                case 47:
                case 62:
                case -1:
                    nA(CA, mA);
                    break;
                case 61:
                    D = E1;
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    N += String.fromCharCode(CA + 32);
                    break;
                case 0:
                    N += String.fromCharCode(65533);
                    break;
                case 34:
                case 39:
                case 60:
                default:
                    N += T0(Ta5);
                    break
            }
        }

        function mA(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 47:
                    $A(N), D = I0;
                    break;
                case 61:
                    D = E1;
                    break;
                case 62:
                    D = C1, $A(N), R1();
                    break;
                case -1:
                    $A(N), s1();
                    break;
                default:
                    $A(N), I1(), nA(CA, xA);
                    break
            }
        }

        function E1(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 34:
                    w1(), D = S1;
                    break;
                case 39:
                    w1(), D = P1;
                    break;
                case 62:
                default:
                    w1(), nA(CA, c1);
                    break
            }
        }

        function S1(CA) {
            switch (CA) {
                case 34:
                    $A(N, q), D = l1;
                    break;
                case 38:
                    H = S1, D = a7;
                    break;
                case 0:
                    q += String.fromCharCode(65533);
                    break;
                case -1:
                    s1();
                    break;
                case 10:
                    q += String.fromCharCode(CA);
                    break;
                default:
                    q += T0(La5);
                    break
            }
        }

        function P1(CA) {
            switch (CA) {
                case 39:
                    $A(N, q), D = l1;
                    break;
                case 38:
                    H = P1, D = a7;
                    break;
                case 0:
                    q += String.fromCharCode(65533);
                    break;
                case -1:
                    s1();
                    break;
                case 10:
                    q += String.fromCharCode(CA);
                    break;
                default:
                    q += T0(Ma5);
                    break
            }
        }

        function c1(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    $A(N, q), D = jA;
                    break;
                case 38:
                    H = c1, D = a7;
                    break;
                case 62:
                    $A(N, q), D = C1, R1();
                    break;
                case 0:
                    q += String.fromCharCode(65533);
                    break;
                case -1:
                    I--, D = C1;
                    break;
                case 34:
                case 39:
                case 60:
                case 61:
                case 96:
                default:
                    q += T0(Oa5);
                    break
            }
        }

        function l1(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    D = jA;
                    break;
                case 47:
                    D = I0;
                    break;
                case 62:
                    D = C1, R1();
                    break;
                case -1:
                    s1();
                    break;
                default:
                    nA(CA, jA);
                    break
            }
        }

        function I0(CA) {
            switch (CA) {
                case 62:
                    D = C1, Z0(!0);
                    break;
                case -1:
                    s1();
                    break;
                default:
                    nA(CA, jA);
                    break
            }
        }

        function e0(CA, MA, H1) {
            var X0 = MA.length;
            if (H1) I += X0 - 1;
            else I += X0;
            var z0 = MA.substring(0, X0 - 1);
            z0 = z0.replace(/\u0000/g, "�"), z0 = z0.replace(/\u000D\u000A/g, `
`), z0 = z0.replace(/\u000D/g, `
`), p0(Ty, z0), D = C1
        }
        e0.lookahead = ">";

        function dQ(CA, MA, H1) {
            if (MA[0] === "-" && MA[1] === "-") {
                I += 2, PA(), D = iB;
                return
            }
            if (MA.toUpperCase() === "DOCTYPE") I += 7, D = B4;
            else if (MA === "[CDATA[" && x0()) I += 7, D = G8;
            else D = e0
        }
        dQ.lookahead = 7;

        function iB(CA) {
            switch (PA(), CA) {
                case 45:
                    D = EB;
                    break;
                case 62:
                    D = C1, p0(Ty, VC(R));
                    break;
                default:
                    nA(CA, m2);
                    break
            }
        }

        function EB(CA) {
            switch (CA) {
                case 45:
                    D = tJ;
                    break;
                case 62:
                    D = C1, p0(Ty, VC(R));
                    break;
                case -1:
                    p0(Ty, VC(R)), s1();
                    break;
                default:
                    R.push(45), nA(CA, m2);
                    break
            }
        }

        function m2(CA) {
            switch (CA) {
                case 60:
                    R.push(CA), D = q4;
                    break;
                case 45:
                    D = l5;
                    break;
                case 0:
                    R.push(65533);
                    break;
                case -1:
                    p0(Ty, VC(R)), s1();
                    break;
                default:
                    R.push(CA);
                    break
            }
        }

        function q4(CA) {
            switch (CA) {
                case 33:
                    R.push(CA), D = J7;
                    break;
                case 60:
                    R.push(CA);
                    break;
                default:
                    nA(CA, m2);
                    break
            }
        }

        function J7(CA) {
            switch (CA) {
                case 45:
                    D = X5;
                    break;
                default:
                    nA(CA, m2);
                    break
            }
        }

        function X5(CA) {
            switch (CA) {
                case 45:
                    D = sW;
                    break;
                default:
                    nA(CA, l5);
                    break
            }
        }

        function sW(CA) {
            switch (CA) {
                case 62:
                case -1:
                    nA(CA, tJ);
                    break;
                default:
                    nA(CA, tJ);
                    break
            }
        }

        function l5(CA) {
            switch (CA) {
                case 45:
                    D = tJ;
                    break;
                case -1:
                    p0(Ty, VC(R)), s1();
                    break;
                default:
                    R.push(45), nA(CA, m2);
                    break
            }
        }

        function tJ(CA) {
            switch (CA) {
                case 62:
                    D = C1, p0(Ty, VC(R));
                    break;
                case 33:
                    D = AJ;
                    break;
                case 45:
                    R.push(45);
                    break;
                case -1:
                    p0(Ty, VC(R)), s1();
                    break;
                default:
                    R.push(45), R.push(45), nA(CA, m2);
                    break
            }
        }

        function AJ(CA) {
            switch (CA) {
                case 45:
                    R.push(45), R.push(45), R.push(33), D = l5;
                    break;
                case 62:
                    D = C1, p0(Ty, VC(R));
                    break;
                case -1:
                    p0(Ty, VC(R)), s1();
                    break;
                default:
                    R.push(45), R.push(45), R.push(33), nA(CA, m2);
                    break
            }
        }

        function B4(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    D = QV;
                    break;
                case -1:
                    B1(), Y0(), J0(), s1();
                    break;
                default:
                    nA(CA, QV);
                    break
            }
        }

        function QV(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    B1(), P.push(CA + 32), D = HG;
                    break;
                case 0:
                    B1(), P.push(65533), D = HG;
                    break;
                case 62:
                    B1(), Y0(), D = C1, J0();
                    break;
                case -1:
                    B1(), Y0(), J0(), s1();
                    break;
                default:
                    B1(), P.push(CA), D = HG;
                    break
            }
        }

        function HG(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    D = eJ;
                    break;
                case 62:
                    D = C1, J0();
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    P.push(CA + 32);
                    break;
                case 0:
                    P.push(65533);
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    P.push(CA);
                    break
            }
        }

        function eJ(CA, MA, H1) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    I += 1;
                    break;
                case 62:
                    D = C1, I += 1, J0();
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    if (MA = MA.toUpperCase(), MA === "PUBLIC") I += 6, D = WF;
                    else if (MA === "SYSTEM") I += 6, D = C2;
                    else Y0(), D = U9;
                    break
            }
        }
        eJ.lookahead = 6;

        function WF(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    D = BV;
                    break;
                case 34:
                    Q0(), D = z3;
                    break;
                case 39:
                    Q0(), D = GV;
                    break;
                case 62:
                    Y0(), D = C1, J0();
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    Y0(), D = U9;
                    break
            }
        }

        function BV(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 34:
                    Q0(), D = z3;
                    break;
                case 39:
                    Q0(), D = GV;
                    break;
                case 62:
                    Y0(), D = C1, J0();
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    Y0(), D = U9;
                    break
            }
        }

        function z3(CA) {
            switch (CA) {
                case 34:
                    D = UY;
                    break;
                case 0:
                    y.push(65533);
                    break;
                case 62:
                    Y0(), D = C1, J0();
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    y.push(CA);
                    break
            }
        }

        function GV(CA) {
            switch (CA) {
                case 39:
                    D = UY;
                    break;
                case 0:
                    y.push(65533);
                    break;
                case 62:
                    Y0(), D = C1, J0();
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    y.push(CA);
                    break
            }
        }

        function UY(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    D = AQ;
                    break;
                case 62:
                    D = C1, J0();
                    break;
                case 34:
                    b1(), D = IB;
                    break;
                case 39:
                    b1(), D = E6;
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    Y0(), D = U9;
                    break
            }
        }

        function AQ(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 62:
                    D = C1, J0();
                    break;
                case 34:
                    b1(), D = IB;
                    break;
                case 39:
                    b1(), D = E6;
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    Y0(), D = U9;
                    break
            }
        }

        function C2(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    D = xQ;
                    break;
                case 34:
                    b1(), D = IB;
                    break;
                case 39:
                    b1(), D = E6;
                    break;
                case 62:
                    Y0(), D = C1, J0();
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    Y0(), D = U9;
                    break
            }
        }

        function xQ(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 34:
                    b1(), D = IB;
                    break;
                case 39:
                    b1(), D = E6;
                    break;
                case 62:
                    Y0(), D = C1, J0();
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    Y0(), D = U9;
                    break
            }
        }

        function IB(CA) {
            switch (CA) {
                case 34:
                    D = X8;
                    break;
                case 0:
                    v.push(65533);
                    break;
                case 62:
                    Y0(), D = C1, J0();
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    v.push(CA);
                    break
            }
        }

        function E6(CA) {
            switch (CA) {
                case 39:
                    D = X8;
                    break;
                case 0:
                    v.push(65533);
                    break;
                case 62:
                    Y0(), D = C1, J0();
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    v.push(CA);
                    break
            }
        }

        function X8(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    break;
                case 62:
                    D = C1, J0();
                    break;
                case -1:
                    Y0(), J0(), s1();
                    break;
                default:
                    D = U9;
                    break
            }
        }

        function U9(CA) {
            switch (CA) {
                case 62:
                    D = C1, J0();
                    break;
                case -1:
                    J0(), s1();
                    break;
                default:
                    break
            }
        }

        function G8(CA) {
            switch (CA) {
                case 93:
                    D = AW;
                    break;
                case -1:
                    s1();
                    break;
                case 0:
                    DA = !0;
                default:
                    fQ(Pa5) || qA.push(CA);
                    break
            }
        }

        function AW(CA) {
            switch (CA) {
                case 93:
                    D = M4;
                    break;
                default:
                    qA.push(93), nA(CA, G8);
                    break
            }
        }

        function M4(CA) {
            switch (CA) {
                case 93:
                    qA.push(93);
                    break;
                case 62:
                    k1(), D = C1;
                    break;
                default:
                    qA.push(93), qA.push(93), nA(CA, G8);
                    break
            }
        }

        function a7(CA) {
            switch (aA(), w.push(38), CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                case 60:
                case 38:
                case -1:
                    nA(CA, nZ);
                    break;
                case 35:
                    w.push(CA), D = p8;
                    break;
                default:
                    nA(CA, iZ);
                    break
            }
        }

        function iZ(CA) {
            pg2.lastIndex = I;
            var MA = pg2.exec(G);
            if (!MA) throw Error("should never happen");
            var H1 = MA[1];
            if (!H1) {
                D = nZ;
                return
            }
            switch (I += H1.length, j0A(w, ka5(H1)), H) {
                case S1:
                case P1:
                case c1:
                    if (H1[H1.length - 1] !== ";") {
                        if (/[=A-Za-z0-9]/.test(G[I])) {
                            D = nZ;
                            return
                        }
                    }
                    break;
                default:
                    break
            }
            aA();
            var X0 = qa5[H1];
            if (typeof X0 === "number") w.push(X0);
            else j0A(w, X0);
            D = nZ
        }
        iZ.lookahead = -Na5;

        function p8(CA) {
            switch (C = 0, CA) {
                case 120:
                case 88:
                    w.push(CA), D = s7;
                    break;
                default:
                    nA(CA, $Y);
                    break
            }
        }

        function s7(CA) {
            switch (CA) {
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
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                    nA(CA, PC);
                    break;
                default:
                    nA(CA, nZ);
                    break
            }
        }

        function $Y(CA) {
            switch (CA) {
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
                    nA(CA, YN);
                    break;
                default:
                    nA(CA, nZ);
                    break
            }
        }

        function PC(CA) {
            switch (CA) {
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                    C *= 16, C += CA - 55;
                    break;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                    C *= 16, C += CA - 87;
                    break;
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
                    C *= 16, C += CA - 48;
                    break;
                case 59:
                    D = h3;
                    break;
                default:
                    nA(CA, h3);
                    break
            }
        }

        function YN(CA) {
            switch (CA) {
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
                    C *= 10, C += CA - 48;
                    break;
                case 59:
                    D = h3;
                    break;
                default:
                    nA(CA, h3);
                    break
            }
        }

        function h3(CA) {
            if (C in cg2) C = cg2[C];
            else if (C > 1114111 || C >= 55296 && C < 57344) C = 65533;
            if (aA(), C <= 65535) w.push(C);
            else C = C - 65536, w.push(55296 + (C >> 10)), w.push(56320 + (C & 1023));
            nA(CA, nZ)
        }

        function nZ(CA) {
            switch (H) {
                case S1:
                case P1:
                case c1:
                    q += VC(w);
                    break;
                default:
                    j0A(qA, w);
                    break
            }
            nA(CA, H)
        }

        function oD(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    if (MA = MA.replace(S0A, ""), MA.length === 0) return;
                    break;
                case 4:
                    K1._appendChild(K1.createComment(MA));
                    return;
                case 5:
                    var z0 = MA,
                        iQ = H1,
                        O2 = X0;
                    if (K1.appendChild(new Ha5(K1, z0, iQ, O2)), SA || z0.toLowerCase() !== "html" || za5.test(iQ) || O2 && O2.toLowerCase() === Ua5 || O2 === void 0 && gg2.test(iQ)) K1._quirks = !0;
                    else if ($a5.test(iQ) || O2 !== void 0 && gg2.test(iQ)) K1._limitedQuirks = !0;
                    u = rW;
                    return
            }
            K1._quirks = !0, u = rW, u(CA, MA, H1, X0)
        }

        function rW(CA, MA, H1, X0) {
            var z0;
            switch (CA) {
                case 1:
                    if (MA = MA.replace(S0A, ""), MA.length === 0) return;
                    break;
                case 5:
                    return;
                case 4:
                    K1._appendChild(K1.createComment(MA));
                    return;
                case 2:
                    if (MA === "html") {
                        z0 = rQ(K1, MA, H1), k.push(z0), K1.appendChild(z0), u = oW;
                        return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "html":
                        case "head":
                        case "body":
                        case "br":
                            break;
                        default:
                            return
                    }
            }
            z0 = rQ(K1, "html", null), k.push(z0), K1.appendChild(z0), u = oW, u(CA, MA, H1, X0)
        }

        function oW(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    if (MA = MA.replace(S0A, ""), MA.length === 0) return;
                    break;
                case 5:
                    return;
                case 4:
                    HQ(MA);
                    return;
                case 2:
                    switch (MA) {
                        case "html":
                            d2(CA, MA, H1, X0);
                            return;
                        case "head":
                            var z0 = IQ(MA, H1);
                            IA = z0, u = F5;
                            return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "html":
                        case "head":
                        case "body":
                        case "br":
                            break;
                        default:
                            return
                    }
            }
            oW(FC, "head", null), u(CA, MA, H1, X0)
        }

        function F5(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    var z0 = MA.match(S0A);
                    if (z0) ZB(z0[0]), MA = MA.substring(z0[0].length);
                    if (MA.length === 0) return;
                    break;
                case 4:
                    HQ(MA);
                    return;
                case 5:
                    return;
                case 2:
                    switch (MA) {
                        case "html":
                            d2(CA, MA, H1, X0);
                            return;
                        case "meta":
                        case "base":
                        case "basefont":
                        case "bgsound":
                        case "link":
                            IQ(MA, H1), k.pop();
                            return;
                        case "title":
                            CZ(MA, H1);
                            return;
                        case "noscript":
                            if (!wA) {
                                IQ(MA, H1), u = eP;
                                return
                            }
                        case "noframes":
                        case "style":
                            C3(MA, H1);
                            return;
                        case "script":
                            l9(function(iQ) {
                                var O2 = rQ(iQ, MA, H1);
                                if (O2._parser_inserted = !0, O2._force_async = !1, QA) O2._already_started = !0;
                                return k1(), O2
                            }), D = O0, o = u, u = b6;
                            return;
                        case "template":
                            IQ(MA, H1), d.insertMarker(), KA = !1, u = RK, l.push(u);
                            return;
                        case "head":
                            return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "head":
                            k.pop(), u = aZ;
                            return;
                        case "body":
                        case "html":
                        case "br":
                            break;
                        case "template":
                            if (!k.contains("template")) return;
                            k.generateImpliedEndTags(null, "thorough"), k.popTag("template"), d.clearToMarker(), l.pop(), DG();
                            return;
                        default:
                            return
                    }
                    break
            }
            F5(Z5, "head", null), u(CA, MA, H1, X0)
        }

        function eP(CA, MA, H1, X0) {
            switch (CA) {
                case 5:
                    return;
                case 4:
                    F5(CA, MA);
                    return;
                case 1:
                    var z0 = MA.match(S0A);
                    if (z0) F5(CA, z0[0]), MA = MA.substring(z0[0].length);
                    if (MA.length === 0) return;
                    break;
                case 2:
                    switch (MA) {
                        case "html":
                            d2(CA, MA, H1, X0);
                            return;
                        case "basefont":
                        case "bgsound":
                        case "link":
                        case "meta":
                        case "noframes":
                        case "style":
                            F5(CA, MA, H1);
                            return;
                        case "head":
                        case "noscript":
                            return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "noscript":
                            k.pop(), u = F5;
                            return;
                        case "br":
                            break;
                        default:
                            return
                    }
                    break
            }
            eP(Z5, "noscript", null), u(CA, MA, H1, X0)
        }

        function aZ(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    var z0 = MA.match(S0A);
                    if (z0) ZB(z0[0]), MA = MA.substring(z0[0].length);
                    if (MA.length === 0) return;
                    break;
                case 4:
                    HQ(MA);
                    return;
                case 5:
                    return;
                case 2:
                    switch (MA) {
                        case "html":
                            d2(CA, MA, H1, X0);
                            return;
                        case "body":
                            IQ(MA, H1), KA = !1, u = d2;
                            return;
                        case "frameset":
                            IQ(MA, H1), u = jC;
                            return;