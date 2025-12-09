/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: ui_033.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (14次) = moduleWrapper(fn) - CommonJS module wrapper
 *   UA       (6次) = require(moduleName) - Node.js require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 33/53
 * Lines: 242077 - 243568 (1492 lines)
 * Original file: cli.js
 */

                                    eA = B1[0] += aA;
                                    for (aA = 1; eA >= 10; eA /= 10, aA++);
                                    if (TA != aA) {
                                        if (WA.e++, B1[0] == J) B1[0] = 1
                                    }
                                    break
                                } else {
                                    if (B1[w1] += aA, B1[w1] != J) break;
                                    B1[w1--] = 0, aA = 1
                                } for (TA = B1.length; B1[--TA] === 0; B1.pop());
                    }
                    if (WA.e > QA) WA.c = WA.e = null;
                    else if (WA.e < d) WA.c = [WA.e = 0]
                }
                return WA
            }

            function K1(WA) {
                var XA, zA = WA.e;
                if (zA === null) return WA.toString();
                return XA = C(WA.c), XA = zA <= l || zA >= k ? N(XA, zA) : q(XA, zA, "0"), WA.s < 0 ? "-" + XA : XA
            }
            if (x.absoluteValue = x.abs = function() {
                    var WA = new NA(this);
                    if (WA.s < 0) WA.s = 1;
                    return WA
                }, x.comparedTo = function(WA, XA) {
                    return E(this, new NA(WA, XA))
                }, x.decimalPlaces = x.dp = function(WA, XA) {
                    var zA, $A, LA, TA = this;
                    if (WA != null) {
                        if (z(WA, 0, K), XA == null) XA = o;
                        else z(XA, 0, 8);
                        return rA(new NA(TA), WA + TA.e + 1, XA)
                    }
                    if (!(zA = TA.c)) return null;
                    if ($A = ((LA = zA.length - 1) - H(this.e / W)) * W, LA = zA[LA])
                        for (; LA % 10 == 0; LA /= 10, $A--);
                    if ($A < 0) $A = 0;
                    return $A
                }, x.dividedBy = x.div = function(WA, XA) {
                    return P(this, new NA(WA, XA), u, o)
                }, x.dividedToIntegerBy = x.idiv = function(WA, XA) {
                    return P(this, new NA(WA, XA), 0, 1)
                }, x.exponentiatedBy = x.pow = function(WA, XA) {
                    var zA, $A, LA, TA, eA, aA, I1, w1, PA, B1 = this;
                    if (WA = new NA(WA), WA.c && !WA.isInteger()) throw Error(I + "Exponent not an integer: " + K1(WA));
                    if (XA != null) XA = new NA(XA);
                    if (aA = WA.e > 14, !B1.c || !B1.c[0] || B1.c[0] == 1 && !B1.e && B1.c.length == 1 || !WA.c || !WA.c[0]) return PA = new NA(Math.pow(+K1(B1), aA ? WA.s * (2 - w(WA)) : +K1(WA))), XA ? PA.mod(XA) : PA;
                    if (I1 = WA.s < 0, XA) {
                        if (XA.c ? !XA.c[0] : !XA.s) return new NA(NaN);
                        if ($A = !I1 && B1.isInteger() && XA.isInteger(), $A) B1 = B1.mod(XA)
                    } else if (WA.e > 9 && (B1.e > 0 || B1.e < -1 || (B1.e == 0 ? B1.c[0] > 1 || aA && B1.c[1] >= 240000000 : B1.c[0] < 80000000000000 || aA && B1.c[0] <= 99999750000000))) {
                        if (TA = B1.s < 0 && w(WA) ? -0 : 0, B1.e > -1) TA = 1 / TA;
                        return new NA(I1 ? 1 / TA : TA)
                    } else if (wA) TA = G(wA / W + 2);
                    if (aA) {
                        if (zA = new NA(0.5), I1) WA.s = 1;
                        w1 = w(WA)
                    } else LA = Math.abs(+K1(WA)), w1 = LA % 2;
                    PA = new NA(p);
                    for (;;) {
                        if (w1) {
                            if (PA = PA.times(B1), !PA.c) break;
                            if (TA) {
                                if (PA.c.length > TA) PA.c.length = TA
                            } else if ($A) PA = PA.mod(XA)
                        }
                        if (LA) {
                            if (LA = Z(LA / 2), LA === 0) break;
                            w1 = LA % 2
                        } else if (WA = WA.times(zA), rA(WA, WA.e + 1, 1), WA.e > 14) w1 = w(WA);
                        else {
                            if (LA = +K1(WA), LA === 0) break;
                            w1 = LA % 2
                        }
                        if (B1 = B1.times(B1), TA) {
                            if (B1.c && B1.c.length > TA) B1.c.length = TA
                        } else if ($A) B1 = B1.mod(XA)
                    }
                    if ($A) return PA;
                    if (I1) PA = p.div(PA);
                    return XA ? PA.mod(XA) : TA ? rA(PA, wA, o, eA) : PA
                }, x.integerValue = function(WA) {
                    var XA = new NA(this);
                    if (WA == null) WA = o;
                    else z(WA, 0, 8);
                    return rA(XA, XA.e + 1, WA)
                }, x.isEqualTo = x.eq = function(WA, XA) {
                    return E(this, new NA(WA, XA)) === 0
                }, x.isFinite = function() {
                    return !!this.c
                }, x.isGreaterThan = x.gt = function(WA, XA) {
                    return E(this, new NA(WA, XA)) > 0
                }, x.isGreaterThanOrEqualTo = x.gte = function(WA, XA) {
                    return (XA = E(this, new NA(WA, XA))) === 1 || XA === 0
                }, x.isInteger = function() {
                    return !!this.c && H(this.e / W) > this.c.length - 2
                }, x.isLessThan = x.lt = function(WA, XA) {
                    return E(this, new NA(WA, XA)) < 0
                }, x.isLessThanOrEqualTo = x.lte = function(WA, XA) {
                    return (XA = E(this, new NA(WA, XA))) === -1 || XA === 0
                }, x.isNaN = function() {
                    return !this.s
                }, x.isNegative = function() {
                    return this.s < 0
                }, x.isPositive = function() {
                    return this.s > 0
                }, x.isZero = function() {
                    return !!this.c && this.c[0] == 0
                }, x.minus = function(WA, XA) {
                    var zA, $A, LA, TA, eA = this,
                        aA = eA.s;
                    if (WA = new NA(WA, XA), XA = WA.s, !aA || !XA) return new NA(NaN);
                    if (aA != XA) return WA.s = -XA, eA.plus(WA);
                    var I1 = eA.e / W,
                        w1 = WA.e / W,
                        PA = eA.c,
                        B1 = WA.c;
                    if (!I1 || !w1) {
                        if (!PA || !B1) return PA ? (WA.s = -XA, WA) : new NA(B1 ? eA : NaN);
                        if (!PA[0] || !B1[0]) return B1[0] ? (WA.s = -XA, WA) : new NA(PA[0] ? eA : o == 3 ? -0 : 0)
                    }
                    if (I1 = H(I1), w1 = H(w1), PA = PA.slice(), aA = I1 - w1) {
                        if (TA = aA < 0) aA = -aA, LA = PA;
                        else w1 = I1, LA = B1;
                        LA.reverse();
                        for (XA = aA; XA--; LA.push(0));
                        LA.reverse()
                    } else {
                        $A = (TA = (aA = PA.length) < (XA = B1.length)) ? aA : XA;
                        for (aA = XA = 0; XA < $A; XA++)
                            if (PA[XA] != B1[XA]) {
                                TA = PA[XA] < B1[XA];
                                break
                            }
                    }
                    if (TA) LA = PA, PA = B1, B1 = LA, WA.s = -WA.s;
                    if (XA = ($A = B1.length) - (zA = PA.length), XA > 0)
                        for (; XA--; PA[zA++] = 0);
                    XA = J - 1;
                    for (; $A > aA;) {
                        if (PA[--$A] < B1[$A]) {
                            for (zA = $A; zA && !PA[--zA]; PA[zA] = XA);
                            --PA[zA], PA[$A] += J
                        }
                        PA[$A] -= B1[$A]
                    }
                    for (; PA[0] == 0; PA.splice(0, 1), --w1);
                    if (!PA[0]) return WA.s = o == 3 ? -1 : 1, WA.c = [WA.e = 0], WA;
                    return yA(WA, PA, w1)
                }, x.modulo = x.mod = function(WA, XA) {
                    var zA, $A, LA = this;
                    if (WA = new NA(WA, XA), !LA.c || !WA.s || WA.c && !WA.c[0]) return new NA(NaN);
                    else if (!WA.c || LA.c && !LA.c[0]) return new NA(LA);
                    if (HA == 9) $A = WA.s, WA.s = 1, zA = P(LA, WA, 0, 3), WA.s = $A, zA.s *= $A;
                    else zA = P(LA, WA, 0, HA);
                    if (WA = LA.minus(zA.times(WA)), !WA.c[0] && HA == 1) WA.s = LA.s;
                    return WA
                }, x.multipliedBy = x.times = function(WA, XA) {
                    var zA, $A, LA, TA, eA, aA, I1, w1, PA, B1, Q0, b1, Y0, x0, u0, k1 = this,
                        T0 = k1.c,
                        fQ = (WA = new NA(WA, XA)).c;
                    if (!T0 || !fQ || !T0[0] || !fQ[0]) {
                        if (!k1.s || !WA.s || T0 && !T0[0] && !fQ || fQ && !fQ[0] && !T0) WA.c = WA.e = WA.s = null;
                        else if (WA.s *= k1.s, !T0 || !fQ) WA.c = WA.e = null;
                        else WA.c = [0], WA.e = 0;
                        return WA
                    }
                    if ($A = H(k1.e / W) + H(WA.e / W), WA.s *= k1.s, I1 = T0.length, B1 = fQ.length, I1 < B1) Y0 = T0, T0 = fQ, fQ = Y0, LA = I1, I1 = B1, B1 = LA;
                    for (LA = I1 + B1, Y0 = []; LA--; Y0.push(0));
                    x0 = J, u0 = V;
                    for (LA = B1; --LA >= 0;) {
                        zA = 0, Q0 = fQ[LA] % u0, b1 = fQ[LA] / u0 | 0;
                        for (eA = I1, TA = LA + eA; TA > LA;) w1 = T0[--eA] % u0, PA = T0[eA] / u0 | 0, aA = b1 * w1 + PA * Q0, w1 = Q0 * w1 + aA % u0 * u0 + Y0[TA] + zA, zA = (w1 / x0 | 0) + (aA / u0 | 0) + b1 * PA, Y0[TA--] = w1 % x0;
                        Y0[TA] = zA
                    }
                    if (zA) ++$A;
                    else Y0.splice(0, 1);
                    return yA(WA, Y0, $A)
                }, x.negated = function() {
                    var WA = new NA(this);
                    return WA.s = -WA.s || null, WA
                }, x.plus = function(WA, XA) {
                    var zA, $A = this,
                        LA = $A.s;
                    if (WA = new NA(WA, XA), XA = WA.s, !LA || !XA) return new NA(NaN);
                    if (LA != XA) return WA.s = -XA, $A.minus(WA);
                    var TA = $A.e / W,
                        eA = WA.e / W,
                        aA = $A.c,
                        I1 = WA.c;
                    if (!TA || !eA) {
                        if (!aA || !I1) return new NA(LA / 0);
                        if (!aA[0] || !I1[0]) return I1[0] ? WA : new NA(aA[0] ? $A : LA * 0)
                    }
                    if (TA = H(TA), eA = H(eA), aA = aA.slice(), LA = TA - eA) {
                        if (LA > 0) eA = TA, zA = I1;
                        else LA = -LA, zA = aA;
                        zA.reverse();
                        for (; LA--; zA.push(0));
                        zA.reverse()
                    }
                    if (LA = aA.length, XA = I1.length, LA - XA < 0) zA = I1, I1 = aA, aA = zA, XA = LA;
                    for (LA = 0; XA;) LA = (aA[--XA] = aA[XA] + I1[XA] + LA) / J | 0, aA[XA] = J === aA[XA] ? 0 : aA[XA] % J;
                    if (LA) aA = [LA].concat(aA), ++eA;
                    return yA(WA, aA, eA)
                }, x.precision = x.sd = function(WA, XA) {
                    var zA, $A, LA, TA = this;
                    if (WA != null && WA !== !!WA) {
                        if (z(WA, 1, K), XA == null) XA = o;
                        else z(XA, 0, 8);
                        return rA(new NA(TA), WA, XA)
                    }
                    if (!(zA = TA.c)) return null;
                    if (LA = zA.length - 1, $A = LA * W + 1, LA = zA[LA]) {
                        for (; LA % 10 == 0; LA /= 10, $A--);
                        for (LA = zA[0]; LA >= 10; LA /= 10, $A++);
                    }
                    if (WA && TA.e + 1 > $A) $A = TA.e + 1;
                    return $A
                }, x.shiftedBy = function(WA) {
                    return z(WA, -X, X), this.times("1e" + WA)
                }, x.squareRoot = x.sqrt = function() {
                    var WA, XA, zA, $A, LA, TA = this,
                        eA = TA.c,
                        aA = TA.s,
                        I1 = TA.e,
                        w1 = u + 4,
                        PA = new NA("0.5");
                    if (aA !== 1 || !eA || !eA[0]) return new NA(!aA || aA < 0 && (!eA || eA[0]) ? NaN : eA ? TA : 1 / 0);
                    if (aA = Math.sqrt(+K1(TA)), aA == 0 || aA == 1 / 0) {
                        if (XA = C(eA), (XA.length + I1) % 2 == 0) XA += "0";
                        if (aA = Math.sqrt(+XA), I1 = H((I1 + 1) / 2) - (I1 < 0 || I1 % 2), aA == 1 / 0) XA = "5e" + I1;
                        else XA = aA.toExponential(), XA = XA.slice(0, XA.indexOf("e") + 1) + I1;
                        zA = new NA(XA)
                    } else zA = new NA(aA + "");
                    if (zA.c[0]) {
                        if (I1 = zA.e, aA = I1 + w1, aA < 3) aA = 0;
                        for (;;)
                            if (LA = zA, zA = PA.times(LA.plus(P(TA, LA, w1, 1))), C(LA.c).slice(0, aA) === (XA = C(zA.c)).slice(0, aA)) {
                                if (zA.e < I1) --aA;
                                if (XA = XA.slice(aA - 3, aA + 1), XA == "9999" || !$A && XA == "4999") {
                                    if (!$A) {
                                        if (rA(LA, LA.e + u + 2, 0), LA.times(LA).eq(TA)) {
                                            zA = LA;
                                            break
                                        }
                                    }
                                    w1 += 4, aA += 4, $A = 1
                                } else {
                                    if (!+XA || !+XA.slice(1) && XA.charAt(0) == "5") rA(zA, zA.e + u + 2, 1), WA = !zA.times(zA).eq(TA);
                                    break
                                }
                            }
                    }
                    return rA(zA, zA.e + u + 1, o, WA)
                }, x.toExponential = function(WA, XA) {
                    if (WA != null) z(WA, 0, K), WA++;
                    return qA(this, WA, XA, 1)
                }, x.toFixed = function(WA, XA) {
                    if (WA != null) z(WA, 0, K), WA = WA + this.e + 1;
                    return qA(this, WA, XA)
                }, x.toFormat = function(WA, XA, zA) {
                    var $A, LA = this;
                    if (zA == null)
                        if (WA != null && XA && typeof XA == "object") zA = XA, XA = null;
                        else if (WA && typeof WA == "object") zA = WA, WA = XA = null;
                    else zA = KA;
                    else if (typeof zA != "object") throw Error(I + "Argument not an object: " + zA);
                    if ($A = LA.toFixed(WA, XA), LA.c) {
                        var TA, eA = $A.split("."),
                            aA = +zA.groupSize,
                            I1 = +zA.secondaryGroupSize,
                            w1 = zA.groupSeparator || "",
                            PA = eA[0],
                            B1 = eA[1],
                            Q0 = LA.s < 0,
                            b1 = Q0 ? PA.slice(1) : PA,
                            Y0 = b1.length;
                        if (I1) TA = aA, aA = I1, I1 = TA, Y0 -= TA;
                        if (aA > 0 && Y0 > 0) {
                            TA = Y0 % aA || aA, PA = b1.substr(0, TA);
                            for (; TA < Y0; TA += aA) PA += w1 + b1.substr(TA, aA);
                            if (I1 > 0) PA += w1 + b1.slice(TA);
                            if (Q0) PA = "-" + PA
                        }
                        $A = B1 ? PA + (zA.decimalSeparator || "") + ((I1 = +zA.fractionGroupSize) ? B1.replace(new RegExp("\\d{" + I1 + "}\\B", "g"), "$&" + (zA.fractionGroupSeparator || "")) : B1) : PA
                    }
                    return (zA.prefix || "") + $A + (zA.suffix || "")
                }, x.toFraction = function(WA) {
                    var XA, zA, $A, LA, TA, eA, aA, I1, w1, PA, B1, Q0, b1 = this,
                        Y0 = b1.c;
                    if (WA != null) {
                        if (aA = new NA(WA), !aA.isInteger() && (aA.c || aA.s !== 1) || aA.lt(p)) throw Error(I + "Argument " + (aA.isInteger() ? "out of range: " : "not an integer: ") + K1(aA))
                    }
                    if (!Y0) return new NA(b1);
                    XA = new NA(p), w1 = zA = new NA(p), $A = I1 = new NA(p), Q0 = C(Y0), TA = XA.e = Q0.length - b1.e - 1, XA.c[0] = F[(eA = TA % W) < 0 ? W + eA : eA], WA = !WA || aA.comparedTo(XA) > 0 ? TA > 0 ? XA : w1 : aA, eA = QA, QA = 1 / 0, aA = new NA(Q0), I1.c[0] = 0;
                    for (;;) {
                        if (PA = P(aA, XA, 0, 1), LA = zA.plus(PA.times($A)), LA.comparedTo(WA) == 1) break;
                        zA = $A, $A = LA, w1 = I1.plus(PA.times(LA = w1)), I1 = LA, XA = aA.minus(PA.times(LA = XA)), aA = LA
                    }
                    return LA = P(WA.minus(zA), $A, 0, 1), I1 = I1.plus(LA.times(w1)), zA = zA.plus(LA.times($A)), I1.s = w1.s = b1.s, TA = TA * 2, B1 = P(w1, $A, TA, o).minus(b1).abs().comparedTo(P(I1, zA, TA, o).minus(b1).abs()) < 1 ? [w1, $A] : [I1, zA], QA = eA, B1
                }, x.toNumber = function() {
                    return +K1(this)
                }, x.toPrecision = function(WA, XA) {
                    if (WA != null) z(WA, 1, K);
                    return qA(this, WA, XA, 2)
                }, x.toString = function(WA) {
                    var XA, zA = this,
                        $A = zA.s,
                        LA = zA.e;
                    if (LA === null)
                        if ($A) {
                            if (XA = "Infinity", $A < 0) XA = "-" + XA
                        } else XA = "NaN";
                    else {
                        if (WA == null) XA = LA <= l || LA >= k ? N(C(zA.c), LA) : q(C(zA.c), LA, "0");
                        else if (WA === 10 && sA) zA = rA(new NA(zA), u + LA + 1, o), XA = q(C(zA.c), zA.e, "0");
                        else z(WA, 2, SA.length, "Base"), XA = y(q(C(zA.c), LA, "0"), 10, WA, $A, !0);
                        if ($A < 0 && zA.c[0]) XA = "-" + XA
                    }
                    return XA
                }, x.valueOf = x.toJSON = function() {
                    return K1(this)
                }, x._isBigNumber = !0, R != null) NA.set(R);
            return NA
        }

        function H(R) {
            var P = R | 0;
            return R > 0 || R === P ? P : P - 1
        }

        function C(R) {
            var P, y, v = 1,
                x = R.length,
                p = R[0] + "";
            for (; v < x;) {
                P = R[v++] + "", y = W - P.length;
                for (; y--; P = "0" + P);
                p += P
            }
            for (x = p.length; p.charCodeAt(--x) === 48;);
            return p.slice(0, x + 1 || 1)
        }

        function E(R, P) {
            var y, v, x = R.c,
                p = P.c,
                u = R.s,
                o = P.s,
                l = R.e,
                k = P.e;
            if (!u || !o) return null;
            if (y = x && !x[0], v = p && !p[0], y || v) return y ? v ? 0 : -o : u;
            if (u != o) return u;
            if (y = u < 0, v = l == k, !x || !p) return v ? 0 : !x ^ y ? 1 : -1;
            if (!v) return l > k ^ y ? 1 : -1;
            o = (l = x.length) < (k = p.length) ? l : k;
            for (u = 0; u < o; u++)
                if (x[u] != p[u]) return x[u] > p[u] ^ y ? 1 : -1;
            return l == k ? 0 : l > k ^ y ? 1 : -1
        }

        function z(R, P, y, v) {
            if (R < P || R > y || R !== Z(R)) throw Error(I + (v || "Argument") + (typeof R == "number" ? R < P || R > y ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(R))
        }

        function w(R) {
            var P = R.c.length - 1;
            return H(R.e / W) == P && R.c[P] % 2 != 0
        }

        function N(R, P) {
            return (R.length > 1 ? R.charAt(0) + "." + R.slice(1) : R) + (P < 0 ? "e" : "e+") + P
        }

        function q(R, P, y) {
            var v, x;
            if (P < 0) {
                for (x = y + "."; ++P; x += y);
                R = x + R
            } else if (v = R.length, ++P > v) {
                for (x = y, P -= v; --P; x += y);
                R += x
            } else if (P < v) R = R.slice(0, P) + "." + R.slice(P);
            return R
        }
        if (Q = D(), Q.default = Q.BigNumber = Q, typeof define == "function" && define.amd) define(function() {
            return Q
        });
        else if (typeof ZA1 < "u" && ZA1.exports) ZA1.exports = Q;
        else {
            if (!A) A = typeof self < "u" && self ? self : window;
            A.BigNumber = Q
        }
    })(rlB)
});
var AiB = U((k8G, elB) => {
    var olB = Si1(),
        tlB = k8G;
    (function() {
        function A(X) {
            return X < 10 ? "0" + X : X
        }
        var Q = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            B = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            G, Z, I = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': "\\\"",
                "\\": "\\\\"
            },
            Y;

        function J(X) {
            return B.lastIndex = 0, B.test(X) ? '"' + X.replace(B, function(F) {
                var V = I[F];
                return typeof V === "string" ? V : "\\u" + ("0000" + F.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + X + '"'
        }

        function W(X, F) {
            var V, K, D, H, C = G,
                E, z = F[X],
                w = z != null && (z instanceof olB || olB.isBigNumber(z));
            if (z && typeof z === "object" && typeof z.toJSON === "function") z = z.toJSON(X);
            if (typeof Y === "function") z = Y.call(F, X, z);
            switch (typeof z) {
                case "string":
                    if (w) return z;
                    else return J(z);
                case "number":
                    return isFinite(z) ? String(z) : "null";
                case "boolean":
                case "null":
                case "bigint":
                    return String(z);
                case "object":
                    if (!z) return "null";
                    if (G += Z, E = [], Object.prototype.toString.apply(z) === "[object Array]") {
                        H = z.length;
                        for (V = 0; V < H; V += 1) E[V] = W(V, z) || "null";
                        return D = E.length === 0 ? "[]" : G ? `[
` + G + E.join(`,
` + G) + `
` + C + "]" : "[" + E.join(",") + "]", G = C, D
                    }
                    if (Y && typeof Y === "object") {
                        H = Y.length;
                        for (V = 0; V < H; V += 1)
                            if (typeof Y[V] === "string") {
                                if (K = Y[V], D = W(K, z), D) E.push(J(K) + (G ? ": " : ":") + D)
                            }
                    } else Object.keys(z).forEach(function(N) {
                        var q = W(N, z);
                        if (q) E.push(J(N) + (G ? ": " : ":") + q)
                    });
                    return D = E.length === 0 ? "{}" : G ? `{
` + G + E.join(`,
` + G) + `
` + C + "}" : "{" + E.join(",") + "}", G = C, D
            }
        }
        if (typeof tlB.stringify !== "function") tlB.stringify = function(X, F, V) {
            var K;
            if (G = "", Z = "", typeof V === "number")
                for (K = 0; K < V; K += 1) Z += " ";
            else if (typeof V === "string") Z = V;
            if (Y = F, F && typeof F !== "function" && (typeof F !== "object" || typeof F.length !== "number")) throw Error("JSON.stringify");
            return W("", {
                "": X
            })
        }
    })()
});
var BiB = U((y8G, QiB) => {
    var IA1 = null,
        Zn6 = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,
        In6 = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/,
        Yn6 = function(A) {
            var Q = {
                strict: !1,
                storeAsString: !1,
                alwaysParseAsBig: !1,
                useNativeBigInt: !1,
                protoAction: "error",
                constructorAction: "error"
            };
            if (A !== void 0 && A !== null) {
                if (A.strict === !0) Q.strict = !0;
                if (A.storeAsString === !0) Q.storeAsString = !0;
                if (Q.alwaysParseAsBig = A.alwaysParseAsBig === !0 ? A.alwaysParseAsBig : !1, Q.useNativeBigInt = A.useNativeBigInt === !0 ? A.useNativeBigInt : !1, typeof A.constructorAction < "u")
                    if (A.constructorAction === "error" || A.constructorAction === "ignore" || A.constructorAction === "preserve") Q.constructorAction = A.constructorAction;
                    else throw Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${A.constructorAction}`);
                if (typeof A.protoAction < "u")
                    if (A.protoAction === "error" || A.protoAction === "ignore" || A.protoAction === "preserve") Q.protoAction = A.protoAction;
                    else throw Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${A.protoAction}`)
            }
            var B, G, Z = {
                    '"': '"',
                    "\\": "\\",
                    "/": "/",
                    b: "\b",
                    f: "\f",
                    n: `
`,
                    r: "\r",
                    t: "\t"
                },
                I, Y = function(C) {
                    throw {
                        name: "SyntaxError",
                        message: C,
                        at: B,
                        text: I
                    }
                },
                J = function(C) {
                    if (C && C !== G) Y("Expected '" + C + "' instead of '" + G + "'");
                    return G = I.charAt(B), B += 1, G
                },
                W = function() {
                    var C, E = "";
                    if (G === "-") E = "-", J("-");
                    while (G >= "0" && G <= "9") E += G, J();
                    if (G === ".") {
                        E += ".";
                        while (J() && G >= "0" && G <= "9") E += G
                    }
                    if (G === "e" || G === "E") {
                        if (E += G, J(), G === "-" || G === "+") E += G, J();
                        while (G >= "0" && G <= "9") E += G, J()
                    }
                    if (C = +E, !isFinite(C)) Y("Bad number");
                    else {
                        if (IA1 == null) IA1 = Si1();
                        if (E.length > 15) return Q.storeAsString ? E : Q.useNativeBigInt ? BigInt(E) : new IA1(E);
                        else return !Q.alwaysParseAsBig ? C : Q.useNativeBigInt ? BigInt(C) : new IA1(C)
                    }
                },
                X = function() {
                    var C, E, z = "",
                        w;
                    if (G === '"') {
                        var N = B;
                        while (J()) {
                            if (G === '"') {
                                if (B - 1 > N) z += I.substring(N, B - 1);
                                return J(), z
                            }
                            if (G === "\\") {
                                if (B - 1 > N) z += I.substring(N, B - 1);
                                if (J(), G === "u") {
                                    w = 0;
                                    for (E = 0; E < 4; E += 1) {
                                        if (C = parseInt(J(), 16), !isFinite(C)) break;
                                        w = w * 16 + C
                                    }
                                    z += String.fromCharCode(w)
                                } else if (typeof Z[G] === "string") z += Z[G];
                                else break;
                                N = B
                            }
                        }
                    }
                    Y("Bad string")
                },
                F = function() {
                    while (G && G <= " ") J()
                },
                V = function() {
                    switch (G) {
                        case "t":
                            return J("t"), J("r"), J("u"), J("e"), !0;
                        case "f":
                            return J("f"), J("a"), J("l"), J("s"), J("e"), !1;
                        case "n":
                            return J("n"), J("u"), J("l"), J("l"), null
                    }
                    Y("Unexpected '" + G + "'")
                },
                K, D = function() {
                    var C = [];
                    if (G === "[") {
                        if (J("["), F(), G === "]") return J("]"), C;
                        while (G) {
                            if (C.push(K()), F(), G === "]") return J("]"), C;
                            J(","), F()
                        }
                    }
                    Y("Bad array")
                },
                H = function() {
                    var C, E = Object.create(null);
                    if (G === "{") {
                        if (J("{"), F(), G === "}") return J("}"), E;
                        while (G) {
                            if (C = X(), F(), J(":"), Q.strict === !0 && Object.hasOwnProperty.call(E, C)) Y('Duplicate key "' + C + '"');
                            if (Zn6.test(C) === !0)
                                if (Q.protoAction === "error") Y("Object contains forbidden prototype property");
                                else if (Q.protoAction === "ignore") K();
                            else E[C] = K();
                            else if (In6.test(C) === !0)
                                if (Q.constructorAction === "error") Y("Object contains forbidden constructor property");
                                else if (Q.constructorAction === "ignore") K();
                            else E[C] = K();
                            else E[C] = K();
                            if (F(), G === "}") return J("}"), E;
                            J(","), F()
                        }
                    }
                    Y("Bad object")
                };
            return K = function() {
                    switch (F(), G) {
                        case "{":
                            return H();
                        case "[":
                            return D();
                        case '"':
                            return X();
                        case "-":
                            return W();
                        default:
                            return G >= "0" && G <= "9" ? W() : V()
                    }
                },
                function(C, E) {
                    var z;
                    if (I = C + "", B = 0, G = " ", z = K(), F(), G) Y("Syntax error");
                    return typeof E === "function" ? function w(N, q) {
                        var R, P, y = N[q];
                        if (y && typeof y === "object") Object.keys(y).forEach(function(v) {
                            if (P = w(y, v), P !== void 0) y[v] = P;
                            else delete y[v]
                        });
                        return E.call(N, q, y)
                    }({
                        "": z
                    }, "") : z
                }
        };
    QiB.exports = Yn6
});
var IiB = U((x8G, YA1) => {
    var GiB = AiB().stringify,
        ZiB = BiB();
    YA1.exports = function(A) {
        return {
            parse: ZiB(A),
            stringify: GiB
        }
    };
    YA1.exports.parse = ZiB();
    YA1.exports.stringify = GiB
});
var _i1 = U((KiB) => {
    Object.defineProperty(KiB, "__esModule", {
        value: !0
    });
    KiB.GCE_LINUX_BIOS_PATHS = void 0;
    KiB.isGoogleCloudServerless = WiB;
    KiB.isGoogleComputeEngineLinux = XiB;
    KiB.isGoogleComputeEngineMACAddress = FiB;
    KiB.isGoogleComputeEngine = ViB;
    KiB.detectGCPResidency = Wn6;
    var YiB = UA("fs"),
        JiB = UA("os");
    KiB.GCE_LINUX_BIOS_PATHS = {
        BIOS_DATE: "/sys/class/dmi/id/bios_date",
        BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor"
    };
    var Jn6 = /^42:01/;

    function WiB() {
        return !!(process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE)
    }

    function XiB() {
        if ((0, JiB.platform)() !== "linux") return !1;
        try {
            (0, YiB.statSync)(KiB.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
            let A = (0, YiB.readFileSync)(KiB.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
            return /Google/.test(A)
        } catch (A) {
            return !1
        }
    }

    function FiB() {
        let A = (0, JiB.networkInterfaces)();
        for (let Q of Object.values(A)) {
            if (!Q) continue;
            for (let {
                    mac: B
                }
                of Q)
                if (Jn6.test(B)) return !0
        }
        return !1
    }

    function ViB() {
        return XiB() || FiB()
    }

    function Wn6() {
        return WiB() || ViB()
    }
});
var CiB = U((DiB) => {
    Object.defineProperty(DiB, "__esModule", {
        value: !0
    });
    DiB.Colours = void 0;
    class F6 {
        static isEnabled(A) {
            return A.isTTY && (typeof A.getColorDepth === "function" ? A.getColorDepth() > 2 : !0)
        }
        static refresh() {
            if (F6.enabled = F6.isEnabled(process.stderr), !this.enabled) F6.reset = "", F6.bright = "", F6.dim = "", F6.red = "", F6.green = "", F6.yellow = "", F6.blue = "", F6.magenta = "", F6.cyan = "", F6.white = "", F6.grey = "";
            else F6.reset = "\x1B[0m", F6.bright = "\x1B[1m", F6.dim = "\x1B[2m", F6.red = "\x1B[31m", F6.green = "\x1B[32m", F6.yellow = "\x1B[33m", F6.blue = "\x1B[34m", F6.magenta = "\x1B[35m", F6.cyan = "\x1B[36m", F6.white = "\x1B[37m", F6.grey = "\x1B[90m"
        }
    }
    DiB.Colours = F6;
    F6.enabled = !1;
    F6.reset = "";
    F6.bright = "";
    F6.dim = "";
    F6.red = "";
    F6.green = "";
    F6.yellow = "";
    F6.blue = "";
    F6.magenta = "";
    F6.cyan = "";
    F6.white = "";
    F6.grey = "";
    F6.refresh()
});
var qiB = U((TG) => {
    var Hn6 = TG && TG.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        Cn6 = TG && TG.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        EiB = TG && TG.__importStar || function(A) {
            if (A && A.__esModule) return A;
            var Q = {};
            if (A != null) {
                for (var B in A)
                    if (B !== "default" && Object.prototype.hasOwnProperty.call(A, B)) Hn6(Q, A, B)
            }
            return Cn6(Q, A), Q
        };
    Object.defineProperty(TG, "__esModule", {
        value: !0
    });
    TG.env = TG.DebugLogBackendBase = TG.placeholder = TG.AdhocDebugLogger = TG.LogSeverity = void 0;
    TG.getNodeBackend = ki1;
    TG.getDebugBackend = zn6;
    TG.getStructuredBackend = Un6;
    TG.setBackend = $n6;
    TG.log = wiB;
    var En6 = UA("node:events"),
        owA = EiB(UA("node:process")),
        ziB = EiB(UA("node:util")),
        Zq = CiB(),
        jT;
    (function(A) {
        A.DEFAULT = "DEFAULT", A.DEBUG = "DEBUG", A.INFO = "INFO", A.WARNING = "WARNING", A.ERROR = "ERROR"
    })(jT || (TG.LogSeverity = jT = {}));
    class WA1 extends En6.EventEmitter {
        constructor(A, Q) {
            super();
            this.namespace = A, this.upstream = Q, this.func = Object.assign(this.invoke.bind(this), {
                instance: this,
                on: (B, G) => this.on(B, G)
            }), this.func.debug = (...B) => this.invokeSeverity(jT.DEBUG, ...B), this.func.info = (...B) => this.invokeSeverity(jT.INFO, ...B), this.func.warn = (...B) => this.invokeSeverity(jT.WARNING, ...B), this.func.error = (...B) => this.invokeSeverity(jT.ERROR, ...B), this.func.sublog = (B) => wiB(B, this.func)
        }
        invoke(A, ...Q) {
            if (this.upstream) this.upstream(A, ...Q);
            this.emit("log", A, Q)
        }
        invokeSeverity(A, ...Q) {
            this.invoke({
                severity: A
            }, ...Q)
        }
    }
    TG.AdhocDebugLogger = WA1;
    TG.placeholder = new WA1("", () => {}).func;
    class twA {
        constructor() {
            var A;
            this.cached = new Map, this.filters = [], this.filtersSet = !1;
            let Q = (A = owA.env[TG.env.nodeEnables]) !== null && A !== void 0 ? A : "*";
            if (Q === "all") Q = "*";
            this.filters = Q.split(",")
        }
        log(A, Q, ...B) {
            try {
                if (!this.filtersSet) this.setFilters(), this.filtersSet = !0;
                let G = this.cached.get(A);
                if (!G) G = this.makeLogger(A), this.cached.set(A, G);
                G(Q, ...B)
            } catch (G) {
                console.error(G)
            }
        }
    }
    TG.DebugLogBackendBase = twA;
    class xi1 extends twA {
        constructor() {
            super(...arguments);
            this.enabledRegexp = /.*/g
        }
        isEnabled(A) {
            return this.enabledRegexp.test(A)
        }
        makeLogger(A) {
            if (!this.enabledRegexp.test(A)) return () => {};
            return (Q, ...B) => {
                var G;
                let Z = `${Zq.Colours.green}${A}${Zq.Colours.reset}`,
                    I = `${Zq.Colours.yellow}${owA.pid}${Zq.Colours.reset}`,
                    Y;
                switch (Q.severity) {
                    case jT.ERROR:
                        Y = `${Zq.Colours.red}${Q.severity}${Zq.Colours.reset}`;
                        break;
                    case jT.INFO:
                        Y = `${Zq.Colours.magenta}${Q.severity}${Zq.Colours.reset}`;
                        break;
                    case jT.WARNING:
                        Y = `${Zq.Colours.yellow}${Q.severity}${Zq.Colours.reset}`;
                        break;
                    default:
                        Y = (G = Q.severity) !== null && G !== void 0 ? G : jT.DEFAULT;
                        break
                }
                let J = ziB.formatWithOptions({
                        colors: Zq.Colours.enabled
                    }, ...B),
                    W = Object.assign({}, Q);
                delete W.severity;
                let X = Object.getOwnPropertyNames(W).length ? JSON.stringify(W) : "",
                    F = X ? `${Zq.Colours.grey}${X}${Zq.Colours.reset}` : "";
                console.error("%s [%s|%s] %s%s", I, Z, Y, J, X ? ` ${F}` : "")
            }
        }
        setFilters() {
            let Q = this.filters.join(",").replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^");
            this.enabledRegexp = new RegExp(`^${Q}$`, "i")
        }
    }

    function ki1() {
        return new xi1
    }
    class UiB extends twA {
        constructor(A) {
            super();
            this.debugPkg = A
        }
        makeLogger(A) {
            let Q = this.debugPkg(A);
            return (B, ...G) => {
                Q(G[0], ...G.slice(1))
            }
        }
        setFilters() {
            var A;
            let Q = (A = owA.env.NODE_DEBUG) !== null && A !== void 0 ? A : "";
            owA.env.NODE_DEBUG = `${Q}${Q?",":""}${this.filters.join(",")}`
        }
    }

    function zn6(A) {
        return new UiB(A)
    }
    class $iB extends twA {
        constructor(A) {
            var Q;
            super();
            this.upstream = (Q = A) !== null && Q !== void 0 ? Q : new xi1
        }
        makeLogger(A) {
            let Q = this.upstream.makeLogger(A);
            return (B, ...G) => {
                var Z;
                let I = (Z = B.severity) !== null && Z !== void 0 ? Z : jT.INFO,
                    Y = Object.assign({
                        severity: I,
                        message: ziB.format(...G)
                    }, B),
                    J = JSON.stringify(Y);
                Q(B, J)
            }
        }
        setFilters() {
            this.upstream.setFilters()
        }
    }

    function Un6(A) {
        return new $iB(A)
    }
    TG.env = {
        nodeEnables: "GOOGLE_SDK_NODE_LOGGING"
    };
    var yi1 = new Map,
        PM = void 0;

    function $n6(A) {
        PM = A, yi1.clear()
    }

    function wiB(A, Q) {
        if (!owA.env[TG.env.nodeEnables]) return TG.placeholder;
        if (!A) return TG.placeholder;
        if (Q) A = `${Q.instance.namespace}:${A}`;
        let G = yi1.get(A);
        if (G) return G.func;
        if (PM === null) return TG.placeholder;
        else if (PM === void 0) PM = ki1();
        let Z = (() => {
            let I = void 0;
            return new WA1(A, (J, ...W) => {
                if (I !== PM) {
                    if (PM === null) return;
                    else if (PM === void 0) PM = ki1();
                    I = PM
                }
                PM === null || PM === void 0 || PM.log(A, J, ...W)
            })
        })();
        return yi1.set(A, Z), Z.func
    }
});
var NiB = U((Re) => {
    var wn6 = Re && Re.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        qn6 = Re && Re.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) wn6(Q, A, B)
        };
    Object.defineProperty(Re, "__esModule", {
        value: !0
    });
    qn6(qiB(), Re)
});
var AqA = U((K4) => {
    var Nn6 = K4 && K4.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        Ln6 = K4 && K4.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) Nn6(Q, A, B)
        };
    Object.defineProperty(K4, "__esModule", {
        value: !0
    });
    K4.gcpResidencyCache = K4.METADATA_SERVER_DETECTION = K4.HEADERS = K4.HEADER_VALUE = K4.HEADER_NAME = K4.SECONDARY_HOST_ADDRESS = K4.HOST_ADDRESS = K4.BASE_PATH = void 0;
    K4.instance = jn6;
    K4.project = Sn6;
    K4.universe = _n6;
    K4.bulk = kn6;
    K4.isAvailable = xn6;
    K4.resetIsAvailableCache = vn6;
    K4.getGCPResidency = fi1;
    K4.setGCPResidency = MiB;
    K4.requestTimeout = OiB;
    var vi1 = PT(),
        Mn6 = IiB(),
        On6 = _i1(),
        Rn6 = NiB();
    K4.BASE_PATH = "/computeMetadata/v1";
    K4.HOST_ADDRESS = "http://169.254.169.254";
    K4.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
    K4.HEADER_NAME = "Metadata-Flavor";
    K4.HEADER_VALUE = "Google";
    K4.HEADERS = Object.freeze({
        [K4.HEADER_NAME]: K4.HEADER_VALUE
    });
    var LiB = Rn6.log("gcp metadata");
    K4.METADATA_SERVER_DETECTION = Object.freeze({
        "assume-present": "don't try to ping the metadata server, but assume it's present",
        none: "don't try to ping the metadata server, but don't try to use it either",
        "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
        "ping-only": "skip the BIOS probe, and go straight to pinging"
    });

    function bi1(A) {
        if (!A) A = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || K4.HOST_ADDRESS;
        if (!/^https?:\/\//.test(A)) A = `http://${A}`;
        return new URL(K4.BASE_PATH, A).href
    }

    function Tn6(A) {
        Object.keys(A).forEach((Q) => {
            switch (Q) {
                case "params":
                case "property":
                case "headers":
                    break;
                case "qs":
                    throw Error("'qs' is not a valid configuration option. Please use 'params' instead.");
                default:
                    throw Error(`'${Q}' is not a valid configuration option.`)
            }
        })
    }
    async function ewA(A, Q = {}, B = 3, G = !1) {
        let Z = "",
            I = {},
            Y = {};
        if (typeof A === "object") {
            let F = A;
            Z = F.metadataKey, I = F.params || I, Y = F.headers || Y, B = F.noResponseRetries || B, G = F.fastFail || G
        } else Z = A;
        if (typeof Q === "string") Z += `/${Q}`;
        else {
            if (Tn6(Q), Q.property) Z += `/${Q.property}`;
            Y = Q.headers || Y, I = Q.params || I
        }
        let J = G ? Pn6 : vi1.request,
            W = {
                url: `${bi1()}/${Z}`,
                headers: {
                    ...K4.HEADERS,
                    ...Y
                },
                retryConfig: {
                    noResponseRetries: B
                },
                params: I,
                responseType: "text",
                timeout: OiB()
            };
        LiB.info("instance request %j", W);
        let X = await J(W);
        if (LiB.info("instance metadata is %s", X.data), X.headers[K4.HEADER_NAME.toLowerCase()] !== K4.HEADER_VALUE) throw Error(`Invalid response from metadata service: incorrect ${K4.HEADER_NAME} header. Expected '${K4.HEADER_VALUE}', got ${X.headers[K4.HEADER_NAME.toLowerCase()]?`'${X.headers[K4.HEADER_NAME.toLowerCase()]}'`:"no header"}`);
        if (typeof X.data === "string") try {
            return Mn6.parse(X.data)
        } catch (F) {}
        return X.data
    }
    async function Pn6(A) {
        var Q;
        let B = {
                ...A,
                url: (Q = A.url) === null || Q === void 0 ? void 0 : Q.toString().replace(bi1(), bi1(K4.SECONDARY_HOST_ADDRESS))
            },
            G = !1,
            Z = (0, vi1.request)(A).then((Y) => {
                return G = !0, Y
            }).catch((Y) => {
                if (G) return I;
                else throw G = !0, Y
            }),
            I = (0, vi1.request)(B).then((Y) => {
                return G = !0, Y
            }).catch((Y) => {
                if (G) return Z;
                else throw G = !0, Y
            });
        return Promise.race([Z, I])
    }

    function jn6(A) {
        return ewA("instance", A)
    }

    function Sn6(A) {
        return ewA("project", A)
    }

    function _n6(A) {
        return ewA("universe", A)
    }
    async function kn6(A) {
        let Q = {};
        return await Promise.all(A.map((B) => {
            return (async () => {
                let G = await ewA(B),
                    Z = B.metadataKey;
                Q[Z] = G
            })()
        })), Q
    }

    function yn6() {
        return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0
    }
    var XA1;
    async function xn6() {
        if (process.env.METADATA_SERVER_DETECTION) {
            let A = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
            if (!(A in K4.METADATA_SERVER_DETECTION)) throw RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${A}\`, but it should be \`${Object.keys(K4.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`);
            switch (A) {
                case "assume-present":
                    return !0;
                case "none":
                    return !1;
                case "bios-only":
                    return fi1();
                case "ping-only":
            }
        }
        try {
            if (XA1 === void 0) XA1 = ewA("instance", void 0, yn6(), !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST));
            return await XA1, !0
        } catch (A) {
            let Q = A;
            if (process.env.DEBUG_AUTH) console.info(Q);
            if (Q.type === "request-timeout") return !1;
            if (Q.response && Q.response.status === 404) return !1;
            else {
                if (!(Q.response && Q.response.status === 404) && (!Q.code || !["EHOSTDOWN", "EHOSTUNREACH", "ENETUNREACH", "ENOENT", "ENOTFOUND", "ECONNREFUSED"].includes(Q.code))) {
                    let B = "UNKNOWN";
                    if (Q.code) B = Q.code;
                    process.emitWarning(`received unexpected error = ${Q.message} code = ${B}`, "MetadataLookupWarning")
                }
                return !1
            }
        }
    }

    function vn6() {
        XA1 = void 0
    }
    K4.gcpResidencyCache = null;

    function fi1() {
        if (K4.gcpResidencyCache === null) MiB();
        return K4.gcpResidencyCache
    }

    function MiB(A = null) {
        K4.gcpResidencyCache = A !== null ? A : (0, On6.detectGCPResidency)()
    }

    function OiB() {
        return fi1() ? 0 : 3000
    }
    Ln6(_i1(), K4)
});
var ui1 = U((cn6) => {
    cn6.byteLength = fn6;
    cn6.toByteArray = gn6;
    cn6.fromByteArray = dn6;
    var Qk = [],
        jM = [],
        bn6 = typeof Uint8Array < "u" ? Uint8Array : Array,
        hi1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (Al = 0, gi1 = hi1.length; Al < gi1; ++Al) Qk[Al] = hi1[Al], jM[hi1.charCodeAt(Al)] = Al;
    var Al, gi1;
    jM[45] = 62;
    jM[95] = 63;

    function RiB(A) {
        var Q = A.length;
        if (Q % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
        var B = A.indexOf("=");
        if (B === -1) B = Q;
        var G = B === Q ? 0 : 4 - B % 4;
        return [B, G]
    }

    function fn6(A) {
        var Q = RiB(A),
            B = Q[0],
            G = Q[1];
        return (B + G) * 3 / 4 - G
    }

    function hn6(A, Q, B) {
        return (Q + B) * 3 / 4 - B
    }

    function gn6(A) {
        var Q, B = RiB(A),
            G = B[0],
            Z = B[1],
            I = new bn6(hn6(A, G, Z)),
            Y = 0,
            J = Z > 0 ? G - 4 : G,
            W;
        for (W = 0; W < J; W += 4) Q = jM[A.charCodeAt(W)] << 18 | jM[A.charCodeAt(W + 1)] << 12 | jM[A.charCodeAt(W + 2)] << 6 | jM[A.charCodeAt(W + 3)], I[Y++] = Q >> 16 & 255, I[Y++] = Q >> 8 & 255, I[Y++] = Q & 255;
        if (Z === 2) Q = jM[A.charCodeAt(W)] << 2 | jM[A.charCodeAt(W + 1)] >> 4, I[Y++] = Q & 255;
        if (Z === 1) Q = jM[A.charCodeAt(W)] << 10 | jM[A.charCodeAt(W + 1)] << 4 | jM[A.charCodeAt(W + 2)] >> 2, I[Y++] = Q >> 8 & 255, I[Y++] = Q & 255;
        return I
    }

    function un6(A) {
        return Qk[A >> 18 & 63] + Qk[A >> 12 & 63] + Qk[A >> 6 & 63] + Qk[A & 63]
    }

    function mn6(A, Q, B) {
        var G, Z = [];
        for (var I = Q; I < B; I += 3) G = (A[I] << 16 & 16711680) + (A[I + 1] << 8 & 65280) + (A[I + 2] & 255), Z.push(un6(G));
        return Z.join("")
    }

    function dn6(A) {
        var Q, B = A.length,
            G = B % 3,
            Z = [],
            I = 16383;
        for (var Y = 0, J = B - G; Y < J; Y += I) Z.push(mn6(A, Y, Y + I > J ? J : Y + I));
        if (G === 1) Q = A[B - 1], Z.push(Qk[Q >> 2] + Qk[Q << 4 & 63] + "==");
        else if (G === 2) Q = (A[B - 2] << 8) + A[B - 1], Z.push(Qk[Q >> 10] + Qk[Q >> 4 & 63] + Qk[Q << 2 & 63] + "=");
        return Z.join("")
    }
});
var jiB = U((TiB) => {
    Object.defineProperty(TiB, "__esModule", {
        value: !0
    });
    TiB.BrowserCrypto = void 0;
    var WZA = ui1(),
        nn6 = XZA();
    class FA1 {
        constructor() {
            if (typeof window > "u" || window.crypto === void 0 || window.crypto.subtle === void 0) throw Error("SubtleCrypto not found. Make sure it's an https:// website.")
        }
        async sha256DigestBase64(A) {
            let Q = new TextEncoder().encode(A),
                B = await window.crypto.subtle.digest("SHA-256", Q);
            return WZA.fromByteArray(new Uint8Array(B))
        }
        randomBytesBase64(A) {
            let Q = new Uint8Array(A);
            return window.crypto.getRandomValues(Q), WZA.fromByteArray(Q)
        }
        static padBase64(A) {
            while (A.length % 4 !== 0) A += "=";
            return A
        }
        async verify(A, Q, B) {
            let G = {
                    name: "RSASSA-PKCS1-v1_5",
                    hash: {
                        name: "SHA-256"
                    }
                },
                Z = new TextEncoder().encode(Q),
                I = WZA.toByteArray(FA1.padBase64(B)),
                Y = await window.crypto.subtle.importKey("jwk", A, G, !0, ["verify"]);
            return await window.crypto.subtle.verify(G, Y, I, Z)
        }
        async sign(A, Q) {
            let B = {
                    name: "RSASSA-PKCS1-v1_5",
                    hash: {
                        name: "SHA-256"
                    }
                },
                G = new TextEncoder().encode(Q),
                Z = await window.crypto.subtle.importKey("jwk", A, B, !0, ["sign"]),
                I = await window.crypto.subtle.sign(B, Z, G);
            return WZA.fromByteArray(new Uint8Array(I))
        }
        decodeBase64StringUtf8(A) {
            let Q = WZA.toByteArray(FA1.padBase64(A));
            return new TextDecoder().decode(Q)
        }
        encodeBase64StringUtf8(A) {
            let Q = new TextEncoder().encode(A);
            return WZA.fromByteArray(Q)
        }
        async sha256DigestHex(A) {
            let Q = new TextEncoder().encode(A),
                B = await window.crypto.subtle.digest("SHA-256", Q);
            return (0, nn6.fromArrayBufferToHex)(B)
        }
        async signWithHmacSha256(A, Q) {
            let B = typeof A === "string" ? A : String.fromCharCode(...new Uint16Array(A)),
                G = new TextEncoder,
                Z = await window.crypto.subtle.importKey("raw", G.encode(B), {
                    name: "HMAC",
                    hash: {
                        name: "SHA-256"
                    }
                }, !1, ["sign"]);
            return window.crypto.subtle.sign("HMAC", Z, G.encode(Q))
        }
    }
    TiB.BrowserCrypto = FA1
});
var yiB = U((_iB) => {
    Object.defineProperty(_iB, "__esModule", {
        value: !0
    });
    _iB.NodeCrypto = void 0;
    var FZA = UA("crypto");
    class SiB {
        async sha256DigestBase64(A) {
            return FZA.createHash("sha256").update(A).digest("base64")
        }
        randomBytesBase64(A) {
            return FZA.randomBytes(A).toString("base64")
        }
        async verify(A, Q, B) {
            let G = FZA.createVerify("RSA-SHA256");
            return G.update(Q), G.end(), G.verify(A, B, "base64")
        }
        async sign(A, Q) {
            let B = FZA.createSign("RSA-SHA256");
            return B.update(Q), B.end(), B.sign(A, "base64")
        }
        decodeBase64StringUtf8(A) {
            return Buffer.from(A, "base64").toString("utf-8")
        }
        encodeBase64StringUtf8(A) {
            return Buffer.from(A, "utf-8").toString("base64")
        }
        async sha256DigestHex(A) {
            return FZA.createHash("sha256").update(A).digest("hex")
        }
        async signWithHmacSha256(A, Q) {
            let B = typeof A === "string" ? A : sn6(A);
            return an6(FZA.createHmac("sha256", B).update(Q).digest())
        }
    }
    _iB.NodeCrypto = SiB;

    function an6(A) {
        return A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength)
    }

    function sn6(A) {
        return Buffer.from(A)
    }
});
var XZA = U((viB) => {
    Object.defineProperty(viB, "__esModule", {
        value: !0
    });
    viB.createCrypto = tn6;
    viB.hasBrowserCrypto = xiB;
    viB.fromArrayBufferToHex = en6;
    var rn6 = jiB(),
        on6 = yiB();

    function tn6() {
        if (xiB()) return new rn6.BrowserCrypto;
        return new on6.NodeCrypto
    }

    function xiB() {
        return typeof window < "u" && typeof window.crypto < "u" && typeof window.crypto.subtle < "u"
    }

    function en6(A) {
        return Array.from(new Uint8Array(A)).map((B) => {
            return B.toString(16).padStart(2, "0")
        }).join("")
    }
});
var fiB = U((biB) => {
    Object.defineProperty(biB, "__esModule", {
        value: !0
    });
    biB.validate = Ga6;

    function Ga6(A) {
        let Q = [{
            invalid: "uri",
            expected: "url"
        }, {
            invalid: "json",
            expected: "data"
        }, {
            invalid: "qs",
            expected: "params"
        }];
        for (let B of Q)
            if (A[B.invalid]) {
                let G = `'${B.invalid}' is not a valid configuration option. Please use '${B.expected}' instead. This library is using Axios for requests. Please see https://github.com/axios/axios to learn more about the valid request options.`;
                throw Error(G)
            }
    }
});
var mi1 = U((l8G, Ia6) => {
    Ia6.exports = {
        name: "google-auth-library",
        version: "9.15.1",
        author: "Google Inc.",
        description: "Google APIs Authentication Client Library for Node.js",
        engines: {
            node: ">=14"
        },
        main: "./build/src/index.js",
        types: "./build/src/index.d.ts",
        repository: "googleapis/google-auth-library-nodejs.git",
        keywords: ["google", "api", "google apis", "client", "client library"],
        dependencies: {
            "base64-js": "^1.3.0",
            "ecdsa-sig-formatter": "^1.0.11",
            gaxios: "^6.1.1",
            "gcp-metadata": "^6.1.0",
            gtoken: "^7.0.0",
            jws: "^4.0.0"
        },
        devDependencies: {
            "@types/base64-js": "^1.2.5",
            "@types/chai": "^4.1.7",
            "@types/jws": "^3.1.0",
            "@types/mocha": "^9.0.0",
            "@types/mv": "^2.1.0",
            "@types/ncp": "^2.0.1",
            "@types/node": "^20.4.2",
            "@types/sinon": "^17.0.0",
            "assert-rejects": "^1.0.0",
            c8: "^8.0.0",
            chai: "^4.2.0",
            cheerio: "1.0.0-rc.12",
            codecov: "^3.0.2",
            "engine.io": "6.6.2",
            gts: "^5.0.0",
            "is-docker": "^2.0.0",
            jsdoc: "^4.0.0",
            "jsdoc-fresh": "^3.0.0",
            "jsdoc-region-tag": "^3.0.0",
            karma: "^6.0.0",
            "karma-chrome-launcher": "^3.0.0",
            "karma-coverage": "^2.0.0",
            "karma-firefox-launcher": "^2.0.0",
            "karma-mocha": "^2.0.0",
            "karma-sourcemap-loader": "^0.4.0",
            "karma-webpack": "5.0.0",
            keypair: "^1.0.4",
            linkinator: "^4.0.0",
            mocha: "^9.2.2",
            mv: "^2.1.1",
            ncp: "^2.0.0",
            nock: "^13.0.0",
            "null-loader": "^4.0.0",
            pdfmake: "0.2.12",
            puppeteer: "^21.0.0",
            sinon: "^18.0.0",
            "ts-loader": "^8.0.0",
            typescript: "^5.1.6",
            webpack: "^5.21.2",
            "webpack-cli": "^4.0.0"
        },