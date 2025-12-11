/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: git_015.js
 * 处理时间: 2025-12-09T03:41:37.435Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 15/34
 * Lines: 150759 - 152257 (1499 lines)
 * Original file: cli.js
 */

        if (Q != 0) return Q;
        var B = this.t;
        if (Q = B - A.t, Q != 0) return this.s < 0 ? -Q : Q;
        while (--B >= 0)
            if ((Q = this.data[B] - A.data[B]) != 0) return Q;
        return 0
    }

    function UiA(A) {
        var Q = 1,
            B;
        if ((B = A >>> 16) != 0) A = B, Q += 16;
        if ((B = A >> 8) != 0) A = B, Q += 8;
        if ((B = A >> 4) != 0) A = B, Q += 4;
        if ((B = A >> 2) != 0) A = B, Q += 2;
        if ((B = A >> 1) != 0) A = B, Q += 1;
        return Q
    }

    function js8() {
        if (this.t <= 0) return 0;
        return this.DB * (this.t - 1) + UiA(this.data[this.t - 1] ^ this.s & this.DM)
    }

    function Ss8(A, Q) {
        var B;
        for (B = this.t - 1; B >= 0; --B) Q.data[B + A] = this.data[B];
        for (B = A - 1; B >= 0; --B) Q.data[B] = 0;
        Q.t = this.t + A, Q.s = this.s
    }

    function _s8(A, Q) {
        for (var B = A; B < this.t; ++B) Q.data[B - A] = this.data[B];
        Q.t = Math.max(this.t - A, 0), Q.s = this.s
    }

    function ks8(A, Q) {
        var B = A % this.DB,
            G = this.DB - B,
            Z = (1 << G) - 1,
            I = Math.floor(A / this.DB),
            Y = this.s << B & this.DM,
            J;
        for (J = this.t - 1; J >= 0; --J) Q.data[J + I + 1] = this.data[J] >> G | Y, Y = (this.data[J] & Z) << B;
        for (J = I - 1; J >= 0; --J) Q.data[J] = 0;
        Q.data[I] = Y, Q.t = this.t + I + 1, Q.s = this.s, Q.clamp()
    }

    function ys8(A, Q) {
        Q.s = this.s;
        var B = Math.floor(A / this.DB);
        if (B >= this.t) {
            Q.t = 0;
            return
        }
        var G = A % this.DB,
            Z = this.DB - G,
            I = (1 << G) - 1;
        Q.data[0] = this.data[B] >> G;
        for (var Y = B + 1; Y < this.t; ++Y) Q.data[Y - B - 1] |= (this.data[Y] & I) << Z, Q.data[Y - B] = this.data[Y] >> G;
        if (G > 0) Q.data[this.t - B - 1] |= (this.s & I) << Z;
        Q.t = this.t - B, Q.clamp()
    }

    function xs8(A, Q) {
        var B = 0,
            G = 0,
            Z = Math.min(A.t, this.t);
        while (B < Z) G += this.data[B] - A.data[B], Q.data[B++] = G & this.DM, G >>= this.DB;
        if (A.t < this.t) {
            G -= A.s;
            while (B < this.t) G += this.data[B], Q.data[B++] = G & this.DM, G >>= this.DB;
            G += this.s
        } else {
            G += this.s;
            while (B < A.t) G -= A.data[B], Q.data[B++] = G & this.DM, G >>= this.DB;
            G -= A.s
        }
        if (Q.s = G < 0 ? -1 : 0, G < -1) Q.data[B++] = this.DV + G;
        else if (G > 0) Q.data[B++] = G;
        Q.t = B, Q.clamp()
    }

    function vs8(A, Q) {
        var B = this.abs(),
            G = A.abs(),
            Z = B.t;
        Q.t = Z + G.t;
        while (--Z >= 0) Q.data[Z] = 0;
        for (Z = 0; Z < G.t; ++Z) Q.data[Z + B.t] = B.am(0, G.data[Z], Q, Z, 0, B.t);
        if (Q.s = 0, Q.clamp(), this.s != A.s) FQ.ZERO.subTo(Q, Q)
    }

    function bs8(A) {
        var Q = this.abs(),
            B = A.t = 2 * Q.t;
        while (--B >= 0) A.data[B] = 0;
        for (B = 0; B < Q.t - 1; ++B) {
            var G = Q.am(B, Q.data[B], A, 2 * B, 0, 1);
            if ((A.data[B + Q.t] += Q.am(B + 1, 2 * Q.data[B], A, 2 * B + 1, G, Q.t - B - 1)) >= Q.DV) A.data[B + Q.t] -= Q.DV, A.data[B + Q.t + 1] = 1
        }
        if (A.t > 0) A.data[A.t - 1] += Q.am(B, Q.data[B], A, 2 * B, 0, 1);
        A.s = 0, A.clamp()
    }

    function fs8(A, Q, B) {
        var G = A.abs();
        if (G.t <= 0) return;
        var Z = this.abs();
        if (Z.t < G.t) {
            if (Q != null) Q.fromInt(0);
            if (B != null) this.copyTo(B);
            return
        }
        if (B == null) B = j3();
        var I = j3(),
            Y = this.s,
            J = A.s,
            W = this.DB - UiA(G.data[G.t - 1]);
        if (W > 0) G.lShiftTo(W, I), Z.lShiftTo(W, B);
        else G.copyTo(I), Z.copyTo(B);
        var X = I.t,
            F = I.data[X - 1];
        if (F == 0) return;
        var V = F * (1 << this.F1) + (X > 1 ? I.data[X - 2] >> this.F2 : 0),
            K = this.FV / V,
            D = (1 << this.F1) / V,
            H = 1 << this.F2,
            C = B.t,
            E = C - X,
            z = Q == null ? j3() : Q;
        if (I.dlShiftTo(E, z), B.compareTo(z) >= 0) B.data[B.t++] = 1, B.subTo(z, B);
        FQ.ONE.dlShiftTo(X, z), z.subTo(I, I);
        while (I.t < X) I.data[I.t++] = 0;
        while (--E >= 0) {
            var w = B.data[--C] == F ? this.DM : Math.floor(B.data[C] * K + (B.data[C - 1] + H) * D);
            if ((B.data[C] += I.am(0, w, B, E, 0, X)) < w) {
                I.dlShiftTo(E, z), B.subTo(z, B);
                while (B.data[C] < --w) B.subTo(z, B)
            }
        }
        if (Q != null) {
            if (B.drShiftTo(X, Q), Y != J) FQ.ZERO.subTo(Q, Q)
        }
        if (B.t = X, B.clamp(), W > 0) B.rShiftTo(W, B);
        if (Y < 0) FQ.ZERO.subTo(B, B)
    }

    function hs8(A) {
        var Q = j3();
        if (this.abs().divRemTo(A, null, Q), this.s < 0 && Q.compareTo(FQ.ZERO) > 0) A.subTo(Q, Q);
        return Q
    }

    function no(A) {
        this.m = A
    }

    function gs8(A) {
        if (A.s < 0 || A.compareTo(this.m) >= 0) return A.mod(this.m);
        else return A
    }

    function us8(A) {
        return A
    }

    function ms8(A) {
        A.divRemTo(this.m, null, A)
    }

    function ds8(A, Q, B) {
        A.multiplyTo(Q, B), this.reduce(B)
    }

    function cs8(A, Q) {
        A.squareTo(Q), this.reduce(Q)
    }
    no.prototype.convert = gs8;
    no.prototype.revert = us8;
    no.prototype.reduce = ms8;
    no.prototype.mulTo = ds8;
    no.prototype.sqrTo = cs8;

    function ps8() {
        if (this.t < 1) return 0;
        var A = this.data[0];
        if ((A & 1) == 0) return 0;
        var Q = A & 3;
        return Q = Q * (2 - (A & 15) * Q) & 15, Q = Q * (2 - (A & 255) * Q) & 255, Q = Q * (2 - ((A & 65535) * Q & 65535)) & 65535, Q = Q * (2 - A * Q % this.DV) % this.DV, Q > 0 ? this.DV - Q : -Q
    }

    function ao(A) {
        this.m = A, this.mp = A.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << A.DB - 15) - 1, this.mt2 = 2 * A.t
    }

    function ls8(A) {
        var Q = j3();
        if (A.abs().dlShiftTo(this.m.t, Q), Q.divRemTo(this.m, null, Q), A.s < 0 && Q.compareTo(FQ.ZERO) > 0) this.m.subTo(Q, Q);
        return Q
    }

    function is8(A) {
        var Q = j3();
        return A.copyTo(Q), this.reduce(Q), Q
    }

    function ns8(A) {
        while (A.t <= this.mt2) A.data[A.t++] = 0;
        for (var Q = 0; Q < this.m.t; ++Q) {
            var B = A.data[Q] & 32767,
                G = B * this.mpl + ((B * this.mph + (A.data[Q] >> 15) * this.mpl & this.um) << 15) & A.DM;
            B = Q + this.m.t, A.data[B] += this.m.am(0, G, A, Q, 0, this.m.t);
            while (A.data[B] >= A.DV) A.data[B] -= A.DV, A.data[++B]++
        }
        if (A.clamp(), A.drShiftTo(this.m.t, A), A.compareTo(this.m) >= 0) A.subTo(this.m, A)
    }

    function as8(A, Q) {
        A.squareTo(Q), this.reduce(Q)
    }

    function ss8(A, Q, B) {
        A.multiplyTo(Q, B), this.reduce(B)
    }
    ao.prototype.convert = ls8;
    ao.prototype.revert = is8;
    ao.prototype.reduce = ns8;
    ao.prototype.mulTo = ss8;
    ao.prototype.sqrTo = as8;

    function rs8() {
        return (this.t > 0 ? this.data[0] & 1 : this.s) == 0
    }

    function os8(A, Q) {
        if (A > 4294967295 || A < 1) return FQ.ONE;
        var B = j3(),
            G = j3(),
            Z = Q.convert(this),
            I = UiA(A) - 1;
        Z.copyTo(B);
        while (--I >= 0)
            if (Q.sqrTo(B, G), (A & 1 << I) > 0) Q.mulTo(G, Z, B);
            else {
                var Y = B;
                B = G, G = Y
            } return Q.revert(B)
    }

    function ts8(A, Q) {
        var B;
        if (A < 256 || Q.isEven()) B = new no(Q);
        else B = new ao(Q);
        return this.exp(A, B)
    }
    FQ.prototype.copyTo = qs8;
    FQ.prototype.fromInt = Ns8;
    FQ.prototype.fromString = Ls8;
    FQ.prototype.clamp = Ms8;
    FQ.prototype.dlShiftTo = Ss8;
    FQ.prototype.drShiftTo = _s8;
    FQ.prototype.lShiftTo = ks8;
    FQ.prototype.rShiftTo = ys8;
    FQ.prototype.subTo = xs8;
    FQ.prototype.multiplyTo = vs8;
    FQ.prototype.squareTo = bs8;
    FQ.prototype.divRemTo = fs8;
    FQ.prototype.invDigit = ps8;
    FQ.prototype.isEven = rs8;
    FQ.prototype.exp = os8;
    FQ.prototype.toString = Os8;
    FQ.prototype.negate = Rs8;
    FQ.prototype.abs = Ts8;
    FQ.prototype.compareTo = Ps8;
    FQ.prototype.bitLength = js8;
    FQ.prototype.mod = hs8;
    FQ.prototype.modPowInt = ts8;
    FQ.ZERO = Pc(0);
    FQ.ONE = Pc(1);

    function es8() {
        var A = j3();
        return this.copyTo(A), A
    }

    function Ar8() {
        if (this.s < 0) {
            if (this.t == 1) return this.data[0] - this.DV;
            else if (this.t == 0) return -1
        } else if (this.t == 1) return this.data[0];
        else if (this.t == 0) return 0;
        return (this.data[1] & (1 << 32 - this.DB) - 1) << this.DB | this.data[0]
    }

    function Qr8() {
        return this.t == 0 ? this.s : this.data[0] << 24 >> 24
    }

    function Br8() {
        return this.t == 0 ? this.s : this.data[0] << 16 >> 16
    }

    function Gr8(A) {
        return Math.floor(Math.LN2 * this.DB / Math.log(A))
    }

    function Zr8() {
        if (this.s < 0) return -1;
        else if (this.t <= 0 || this.t == 1 && this.data[0] <= 0) return 0;
        else return 1
    }

    function Ir8(A) {
        if (A == null) A = 10;
        if (this.signum() == 0 || A < 2 || A > 36) return "0";
        var Q = this.chunkSize(A),
            B = Math.pow(A, Q),
            G = Pc(B),
            Z = j3(),
            I = j3(),
            Y = "";
        this.divRemTo(G, Z, I);
        while (Z.signum() > 0) Y = (B + I.intValue()).toString(A).substr(1) + Y, Z.divRemTo(G, Z, I);
        return I.intValue().toString(A) + Y
    }

    function Yr8(A, Q) {
        if (this.fromInt(0), Q == null) Q = 10;
        var B = this.chunkSize(Q),
            G = Math.pow(Q, B),
            Z = !1,
            I = 0,
            Y = 0;
        for (var J = 0; J < A.length; ++J) {
            var W = j4B(A, J);
            if (W < 0) {
                if (A.charAt(J) == "-" && this.signum() == 0) Z = !0;
                continue
            }
            if (Y = Q * Y + W, ++I >= B) this.dMultiply(G), this.dAddOffset(Y, 0), I = 0, Y = 0
        }
        if (I > 0) this.dMultiply(Math.pow(Q, I)), this.dAddOffset(Y, 0);
        if (Z) FQ.ZERO.subTo(this, this)
    }

    function Jr8(A, Q, B) {
        if (typeof Q == "number")
            if (A < 2) this.fromInt(1);
            else {
                if (this.fromNumber(A, B), !this.testBit(A - 1)) this.bitwiseTo(FQ.ONE.shiftLeft(A - 1), Yv1, this);
                if (this.isEven()) this.dAddOffset(1, 0);
                while (!this.isProbablePrime(Q))
                    if (this.dAddOffset(2, 0), this.bitLength() > A) this.subTo(FQ.ONE.shiftLeft(A - 1), this)
            }
        else {
            var G = [],
                Z = A & 7;
            if (G.length = (A >> 3) + 1, Q.nextBytes(G), Z > 0) G[0] &= (1 << Z) - 1;
            else G[0] = 0;
            this.fromString(G, 256)
        }
    }

    function Wr8() {
        var A = this.t,
            Q = [];
        Q[0] = this.s;
        var B = this.DB - A * this.DB % 8,
            G, Z = 0;
        if (A-- > 0) {
            if (B < this.DB && (G = this.data[A] >> B) != (this.s & this.DM) >> B) Q[Z++] = G | this.s << this.DB - B;
            while (A >= 0) {
                if (B < 8) G = (this.data[A] & (1 << B) - 1) << 8 - B, G |= this.data[--A] >> (B += this.DB - 8);
                else if (G = this.data[A] >> (B -= 8) & 255, B <= 0) B += this.DB, --A;
                if ((G & 128) != 0) G |= -256;
                if (Z == 0 && (this.s & 128) != (G & 128)) ++Z;
                if (Z > 0 || G != this.s) Q[Z++] = G
            }
        }
        return Q
    }

    function Xr8(A) {
        return this.compareTo(A) == 0
    }

    function Fr8(A) {
        return this.compareTo(A) < 0 ? this : A
    }

    function Vr8(A) {
        return this.compareTo(A) > 0 ? this : A
    }

    function Kr8(A, Q, B) {
        var G, Z, I = Math.min(A.t, this.t);
        for (G = 0; G < I; ++G) B.data[G] = Q(this.data[G], A.data[G]);
        if (A.t < this.t) {
            Z = A.s & this.DM;
            for (G = I; G < this.t; ++G) B.data[G] = Q(this.data[G], Z);
            B.t = this.t
        } else {
            Z = this.s & this.DM;
            for (G = I; G < A.t; ++G) B.data[G] = Q(Z, A.data[G]);
            B.t = A.t
        }
        B.s = Q(this.s, A.s), B.clamp()
    }

    function Dr8(A, Q) {
        return A & Q
    }

    function Hr8(A) {
        var Q = j3();
        return this.bitwiseTo(A, Dr8, Q), Q
    }

    function Yv1(A, Q) {
        return A | Q
    }

    function Cr8(A) {
        var Q = j3();
        return this.bitwiseTo(A, Yv1, Q), Q
    }

    function S4B(A, Q) {
        return A ^ Q
    }

    function Er8(A) {
        var Q = j3();
        return this.bitwiseTo(A, S4B, Q), Q
    }

    function _4B(A, Q) {
        return A & ~Q
    }

    function zr8(A) {
        var Q = j3();
        return this.bitwiseTo(A, _4B, Q), Q
    }

    function Ur8() {
        var A = j3();
        for (var Q = 0; Q < this.t; ++Q) A.data[Q] = this.DM & ~this.data[Q];
        return A.t = this.t, A.s = ~this.s, A
    }

    function $r8(A) {
        var Q = j3();
        if (A < 0) this.rShiftTo(-A, Q);
        else this.lShiftTo(A, Q);
        return Q
    }

    function wr8(A) {
        var Q = j3();
        if (A < 0) this.lShiftTo(-A, Q);
        else this.rShiftTo(A, Q);
        return Q
    }

    function qr8(A) {
        if (A == 0) return -1;
        var Q = 0;
        if ((A & 65535) == 0) A >>= 16, Q += 16;
        if ((A & 255) == 0) A >>= 8, Q += 8;
        if ((A & 15) == 0) A >>= 4, Q += 4;
        if ((A & 3) == 0) A >>= 2, Q += 2;
        if ((A & 1) == 0) ++Q;
        return Q
    }

    function Nr8() {
        for (var A = 0; A < this.t; ++A)
            if (this.data[A] != 0) return A * this.DB + qr8(this.data[A]);
        if (this.s < 0) return this.t * this.DB;
        return -1
    }

    function Lr8(A) {
        var Q = 0;
        while (A != 0) A &= A - 1, ++Q;
        return Q
    }

    function Mr8() {
        var A = 0,
            Q = this.s & this.DM;
        for (var B = 0; B < this.t; ++B) A += Lr8(this.data[B] ^ Q);
        return A
    }

    function Or8(A) {
        var Q = Math.floor(A / this.DB);
        if (Q >= this.t) return this.s != 0;
        return (this.data[Q] & 1 << A % this.DB) != 0
    }

    function Rr8(A, Q) {
        var B = FQ.ONE.shiftLeft(A);
        return this.bitwiseTo(B, Q, B), B
    }

    function Tr8(A) {
        return this.changeBit(A, Yv1)
    }

    function Pr8(A) {
        return this.changeBit(A, _4B)
    }

    function jr8(A) {
        return this.changeBit(A, S4B)
    }

    function Sr8(A, Q) {
        var B = 0,
            G = 0,
            Z = Math.min(A.t, this.t);
        while (B < Z) G += this.data[B] + A.data[B], Q.data[B++] = G & this.DM, G >>= this.DB;
        if (A.t < this.t) {
            G += A.s;
            while (B < this.t) G += this.data[B], Q.data[B++] = G & this.DM, G >>= this.DB;
            G += this.s
        } else {
            G += this.s;
            while (B < A.t) G += A.data[B], Q.data[B++] = G & this.DM, G >>= this.DB;
            G += A.s
        }
        if (Q.s = G < 0 ? -1 : 0, G > 0) Q.data[B++] = G;
        else if (G < -1) Q.data[B++] = this.DV + G;
        Q.t = B, Q.clamp()
    }

    function _r8(A) {
        var Q = j3();
        return this.addTo(A, Q), Q
    }

    function kr8(A) {
        var Q = j3();
        return this.subTo(A, Q), Q
    }

    function yr8(A) {
        var Q = j3();
        return this.multiplyTo(A, Q), Q
    }

    function xr8(A) {
        var Q = j3();
        return this.divRemTo(A, Q, null), Q
    }

    function vr8(A) {
        var Q = j3();
        return this.divRemTo(A, null, Q), Q
    }

    function br8(A) {
        var Q = j3(),
            B = j3();
        return this.divRemTo(A, Q, B), [Q, B]
    }

    function fr8(A) {
        this.data[this.t] = this.am(0, A - 1, this, 0, 0, this.t), ++this.t, this.clamp()
    }

    function hr8(A, Q) {
        if (A == 0) return;
        while (this.t <= Q) this.data[this.t++] = 0;
        this.data[Q] += A;
        while (this.data[Q] >= this.DV) {
            if (this.data[Q] -= this.DV, ++Q >= this.t) this.data[this.t++] = 0;
            ++this.data[Q]
        }
    }

    function RzA() {}

    function k4B(A) {
        return A
    }

    function gr8(A, Q, B) {
        A.multiplyTo(Q, B)
    }

    function ur8(A, Q) {
        A.squareTo(Q)
    }
    RzA.prototype.convert = k4B;
    RzA.prototype.revert = k4B;
    RzA.prototype.mulTo = gr8;
    RzA.prototype.sqrTo = ur8;

    function mr8(A) {
        return this.exp(A, new RzA)
    }

    function dr8(A, Q, B) {
        var G = Math.min(this.t + A.t, Q);
        B.s = 0, B.t = G;
        while (G > 0) B.data[--G] = 0;
        var Z;
        for (Z = B.t - this.t; G < Z; ++G) B.data[G + this.t] = this.am(0, A.data[G], B, G, 0, this.t);
        for (Z = Math.min(A.t, Q); G < Z; ++G) this.am(0, A.data[G], B, G, 0, Q - G);
        B.clamp()
    }

    function cr8(A, Q, B) {
        --Q;
        var G = B.t = this.t + A.t - Q;
        B.s = 0;
        while (--G >= 0) B.data[G] = 0;
        for (G = Math.max(Q - this.t, 0); G < A.t; ++G) B.data[this.t + G - Q] = this.am(Q - G, A.data[G], B, 0, 0, this.t + G - Q);
        B.clamp(), B.drShiftTo(1, B)
    }

    function k3A(A) {
        this.r2 = j3(), this.q3 = j3(), FQ.ONE.dlShiftTo(2 * A.t, this.r2), this.mu = this.r2.divide(A), this.m = A
    }

    function pr8(A) {
        if (A.s < 0 || A.t > 2 * this.m.t) return A.mod(this.m);
        else if (A.compareTo(this.m) < 0) return A;
        else {
            var Q = j3();
            return A.copyTo(Q), this.reduce(Q), Q
        }
    }

    function lr8(A) {
        return A
    }

    function ir8(A) {
        if (A.drShiftTo(this.m.t - 1, this.r2), A.t > this.m.t + 1) A.t = this.m.t + 1, A.clamp();
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
        while (A.compareTo(this.r2) < 0) A.dAddOffset(1, this.m.t + 1);
        A.subTo(this.r2, A);
        while (A.compareTo(this.m) >= 0) A.subTo(this.m, A)
    }

    function nr8(A, Q) {
        A.squareTo(Q), this.reduce(Q)
    }

    function ar8(A, Q, B) {
        A.multiplyTo(Q, B), this.reduce(B)
    }
    k3A.prototype.convert = pr8;
    k3A.prototype.revert = lr8;
    k3A.prototype.reduce = ir8;
    k3A.prototype.mulTo = ar8;
    k3A.prototype.sqrTo = nr8;

    function sr8(A, Q) {
        var B = A.bitLength(),
            G, Z = Pc(1),
            I;
        if (B <= 0) return Z;
        else if (B < 18) G = 1;
        else if (B < 48) G = 3;
        else if (B < 144) G = 4;
        else if (B < 768) G = 5;
        else G = 6;
        if (B < 8) I = new no(Q);
        else if (Q.isEven()) I = new k3A(Q);
        else I = new ao(Q);
        var Y = [],
            J = 3,
            W = G - 1,
            X = (1 << G) - 1;
        if (Y[1] = I.convert(this), G > 1) {
            var F = j3();
            I.sqrTo(Y[1], F);
            while (J <= X) Y[J] = j3(), I.mulTo(F, Y[J - 2], Y[J]), J += 2
        }
        var V = A.t - 1,
            K, D = !0,
            H = j3(),
            C;
        B = UiA(A.data[V]) - 1;
        while (V >= 0) {
            if (B >= W) K = A.data[V] >> B - W & X;
            else if (K = (A.data[V] & (1 << B + 1) - 1) << W - B, V > 0) K |= A.data[V - 1] >> this.DB + B - W;
            J = G;
            while ((K & 1) == 0) K >>= 1, --J;
            if ((B -= J) < 0) B += this.DB, --V;
            if (D) Y[K].copyTo(Z), D = !1;
            else {
                while (J > 1) I.sqrTo(Z, H), I.sqrTo(H, Z), J -= 2;
                if (J > 0) I.sqrTo(Z, H);
                else C = Z, Z = H, H = C;
                I.mulTo(H, Y[K], Z)
            }
            while (V >= 0 && (A.data[V] & 1 << B) == 0)
                if (I.sqrTo(Z, H), C = Z, Z = H, H = C, --B < 0) B = this.DB - 1, --V
        }
        return I.revert(Z)
    }

    function rr8(A) {
        var Q = this.s < 0 ? this.negate() : this.clone(),
            B = A.s < 0 ? A.negate() : A.clone();
        if (Q.compareTo(B) < 0) {
            var G = Q;
            Q = B, B = G
        }
        var Z = Q.getLowestSetBit(),
            I = B.getLowestSetBit();
        if (I < 0) return Q;
        if (Z < I) I = Z;
        if (I > 0) Q.rShiftTo(I, Q), B.rShiftTo(I, B);
        while (Q.signum() > 0) {
            if ((Z = Q.getLowestSetBit()) > 0) Q.rShiftTo(Z, Q);
            if ((Z = B.getLowestSetBit()) > 0) B.rShiftTo(Z, B);
            if (Q.compareTo(B) >= 0) Q.subTo(B, Q), Q.rShiftTo(1, Q);
            else B.subTo(Q, B), B.rShiftTo(1, B)
        }
        if (I > 0) B.lShiftTo(I, B);
        return B
    }

    function or8(A) {
        if (A <= 0) return 0;
        var Q = this.DV % A,
            B = this.s < 0 ? A - 1 : 0;
        if (this.t > 0)
            if (Q == 0) B = this.data[0] % A;
            else
                for (var G = this.t - 1; G >= 0; --G) B = (Q * B + this.data[G]) % A;
        return B
    }

    function tr8(A) {
        var Q = A.isEven();
        if (this.isEven() && Q || A.signum() == 0) return FQ.ZERO;
        var B = A.clone(),
            G = this.clone(),
            Z = Pc(1),
            I = Pc(0),
            Y = Pc(0),
            J = Pc(1);
        while (B.signum() != 0) {
            while (B.isEven()) {
                if (B.rShiftTo(1, B), Q) {
                    if (!Z.isEven() || !I.isEven()) Z.addTo(this, Z), I.subTo(A, I);
                    Z.rShiftTo(1, Z)
                } else if (!I.isEven()) I.subTo(A, I);
                I.rShiftTo(1, I)
            }
            while (G.isEven()) {
                if (G.rShiftTo(1, G), Q) {
                    if (!Y.isEven() || !J.isEven()) Y.addTo(this, Y), J.subTo(A, J);
                    Y.rShiftTo(1, Y)
                } else if (!J.isEven()) J.subTo(A, J);
                J.rShiftTo(1, J)
            }
            if (B.compareTo(G) >= 0) {
                if (B.subTo(G, B), Q) Z.subTo(Y, Z);
                I.subTo(J, I)
            } else {
                if (G.subTo(B, G), Q) Y.subTo(Z, Y);
                J.subTo(I, J)
            }
        }
        if (G.compareTo(FQ.ONE) != 0) return FQ.ZERO;
        if (J.compareTo(A) >= 0) return J.subtract(A);
        if (J.signum() < 0) J.addTo(A, J);
        else return J;
        if (J.signum() < 0) return J.add(A);
        else return J
    }
    var ZT = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509],
        er8 = 67108864 / ZT[ZT.length - 1];

    function Ao8(A) {
        var Q, B = this.abs();
        if (B.t == 1 && B.data[0] <= ZT[ZT.length - 1]) {
            for (Q = 0; Q < ZT.length; ++Q)
                if (B.data[0] == ZT[Q]) return !0;
            return !1
        }
        if (B.isEven()) return !1;
        Q = 1;
        while (Q < ZT.length) {
            var G = ZT[Q],
                Z = Q + 1;
            while (Z < ZT.length && G < er8) G *= ZT[Z++];
            G = B.modInt(G);
            while (Q < Z)
                if (G % ZT[Q++] == 0) return !1
        }
        return B.millerRabin(A)
    }

    function Qo8(A) {
        var Q = this.subtract(FQ.ONE),
            B = Q.getLowestSetBit();
        if (B <= 0) return !1;
        var G = Q.shiftRight(B),
            Z = Bo8(),
            I;
        for (var Y = 0; Y < A; ++Y) {
            do I = new FQ(this.bitLength(), Z); while (I.compareTo(FQ.ONE) <= 0 || I.compareTo(Q) >= 0);
            var J = I.modPow(G, this);
            if (J.compareTo(FQ.ONE) != 0 && J.compareTo(Q) != 0) {
                var W = 1;
                while (W++ < B && J.compareTo(Q) != 0)
                    if (J = J.modPowInt(2, this), J.compareTo(FQ.ONE) == 0) return !1;
                if (J.compareTo(Q) != 0) return !1
            }
        }
        return !0
    }

    function Bo8() {
        return {
            nextBytes: function(A) {
                for (var Q = 0; Q < A.length; ++Q) A[Q] = Math.floor(Math.random() * 256)
            }
        }
    }
    FQ.prototype.chunkSize = Gr8;
    FQ.prototype.toRadix = Ir8;
    FQ.prototype.fromRadix = Yr8;
    FQ.prototype.fromNumber = Jr8;
    FQ.prototype.bitwiseTo = Kr8;
    FQ.prototype.changeBit = Rr8;
    FQ.prototype.addTo = Sr8;
    FQ.prototype.dMultiply = fr8;
    FQ.prototype.dAddOffset = hr8;
    FQ.prototype.multiplyLowerTo = dr8;
    FQ.prototype.multiplyUpperTo = cr8;
    FQ.prototype.modInt = or8;
    FQ.prototype.millerRabin = Qo8;
    FQ.prototype.clone = es8;
    FQ.prototype.intValue = Ar8;
    FQ.prototype.byteValue = Qr8;
    FQ.prototype.shortValue = Br8;
    FQ.prototype.signum = Zr8;
    FQ.prototype.toByteArray = Wr8;
    FQ.prototype.equals = Xr8;
    FQ.prototype.min = Fr8;
    FQ.prototype.max = Vr8;
    FQ.prototype.and = Hr8;
    FQ.prototype.or = Cr8;
    FQ.prototype.xor = Er8;
    FQ.prototype.andNot = zr8;
    FQ.prototype.not = Ur8;
    FQ.prototype.shiftLeft = $r8;
    FQ.prototype.shiftRight = wr8;
    FQ.prototype.getLowestSetBit = Nr8;
    FQ.prototype.bitCount = Mr8;
    FQ.prototype.testBit = Or8;
    FQ.prototype.setBit = Tr8;
    FQ.prototype.clearBit = Pr8;
    FQ.prototype.flipBit = jr8;
    FQ.prototype.add = _r8;
    FQ.prototype.subtract = kr8;
    FQ.prototype.multiply = yr8;
    FQ.prototype.divide = xr8;
    FQ.prototype.remainder = vr8;
    FQ.prototype.divideAndRemainder = br8;
    FQ.prototype.modPow = sr8;
    FQ.prototype.modInverse = tr8;
    FQ.prototype.pow = mr8;
    FQ.prototype.gcd = rr8;
    FQ.prototype.isProbablePrime = Ao8
});
var y3A = moduleWrapper((zT7, f4B) => {
    var C_ = n8();
    F_();
    P3();
    var v4B = f4B.exports = C_.sha1 = C_.sha1 || {};
    C_.md.sha1 = C_.md.algorithms.sha1 = v4B;
    v4B.create = function() {
        if (!b4B) Go8();
        var A = null,
            Q = C_.util.createBuffer(),
            B = Array(80),
            G = {
                algorithm: "sha1",
                blockLength: 64,
                digestLength: 20,
                messageLength: 0,
                fullMessageLength: null,
                messageLengthSize: 8
            };
        return G.start = function() {
            G.messageLength = 0, G.fullMessageLength = G.messageLength64 = [];
            var Z = G.messageLengthSize / 4;
            for (var I = 0; I < Z; ++I) G.fullMessageLength.push(0);
            return Q = C_.util.createBuffer(), A = {
                RENDER_ERROR: 1732584193,
                h1: 4023233417,
                h2: 2562383102,
                h3: 271733878,
                h4: 3285377520
            }, G
        }, G.start(), G.update = function(Z, I) {
            if (I === "utf8") Z = C_.util.encodeUtf8(Z);
            var Y = Z.length;
            G.messageLength += Y, Y = [Y / 4294967296 >>> 0, Y >>> 0];
            for (var J = G.fullMessageLength.length - 1; J >= 0; --J) G.fullMessageLength[J] += Y[1], Y[1] = Y[0] + (G.fullMessageLength[J] / 4294967296 >>> 0), G.fullMessageLength[J] = G.fullMessageLength[J] >>> 0, Y[0] = Y[1] / 4294967296 >>> 0;
            if (Q.putBytes(Z), x4B(A, B, Q), Q.read > 2048 || Q.length() === 0) Q.compact();
            return G
        }, G.digest = function() {
            var Z = C_.util.createBuffer();
            Z.putBytes(Q.bytes());
            var I = G.fullMessageLength[G.fullMessageLength.length - 1] + G.messageLengthSize,
                Y = I & G.blockLength - 1;
            Z.putBytes(Jv1.substr(0, G.blockLength - Y));
            var J, W, X = G.fullMessageLength[0] * 8;
            for (var F = 0; F < G.fullMessageLength.length - 1; ++F) J = G.fullMessageLength[F + 1] * 8, W = J / 4294967296 >>> 0, X += W, Z.putInt32(X >>> 0), X = J >>> 0;
            Z.putInt32(X);
            var V = {
                RENDER_ERROR: A.RENDER_ERROR,
                h1: A.h1,
                h2: A.h2,
                h3: A.h3,
                h4: A.h4
            };
            x4B(V, B, Z);
            var K = C_.util.createBuffer();
            return K.putInt32(V.RENDER_ERROR), K.putInt32(V.h1), K.putInt32(V.h2), K.putInt32(V.h3), K.putInt32(V.h4), K
        }, G
    };
    var Jv1 = null,
        b4B = !1;

    function Go8() {
        Jv1 = String.fromCharCode(128), Jv1 += C_.util.fillString(String.fromCharCode(0), 64), b4B = !0
    }

    function x4B(A, Q, B) {
        var G, Z, I, Y, J, W, X, F, V = B.length();
        while (V >= 64) {
            Z = A.RENDER_ERROR, I = A.h1, Y = A.h2, J = A.h3, W = A.h4;
            for (F = 0; F < 16; ++F) G = B.getInt32(), Q[F] = G, X = J ^ I & (Y ^ J), G = (Z << 5 | Z >>> 27) + X + W + 1518500249 + G, W = J, J = Y, Y = (I << 30 | I >>> 2) >>> 0, I = Z, Z = G;
            for (; F < 20; ++F) G = Q[F - 3] ^ Q[F - 8] ^ Q[F - 14] ^ Q[F - 16], G = G << 1 | G >>> 31, Q[F] = G, X = J ^ I & (Y ^ J), G = (Z << 5 | Z >>> 27) + X + W + 1518500249 + G, W = J, J = Y, Y = (I << 30 | I >>> 2) >>> 0, I = Z, Z = G;
            for (; F < 32; ++F) G = Q[F - 3] ^ Q[F - 8] ^ Q[F - 14] ^ Q[F - 16], G = G << 1 | G >>> 31, Q[F] = G, X = I ^ Y ^ J, G = (Z << 5 | Z >>> 27) + X + W + 1859775393 + G, W = J, J = Y, Y = (I << 30 | I >>> 2) >>> 0, I = Z, Z = G;
            for (; F < 40; ++F) G = Q[F - 6] ^ Q[F - 16] ^ Q[F - 28] ^ Q[F - 32], G = G << 2 | G >>> 30, Q[F] = G, X = I ^ Y ^ J, G = (Z << 5 | Z >>> 27) + X + W + 1859775393 + G, W = J, J = Y, Y = (I << 30 | I >>> 2) >>> 0, I = Z, Z = G;
            for (; F < 60; ++F) G = Q[F - 6] ^ Q[F - 16] ^ Q[F - 28] ^ Q[F - 32], G = G << 2 | G >>> 30, Q[F] = G, X = I & Y | J & (I ^ Y), G = (Z << 5 | Z >>> 27) + X + W + 2400959708 + G, W = J, J = Y, Y = (I << 30 | I >>> 2) >>> 0, I = Z, Z = G;
            for (; F < 80; ++F) G = Q[F - 6] ^ Q[F - 16] ^ Q[F - 28] ^ Q[F - 32], G = G << 2 | G >>> 30, Q[F] = G, X = I ^ Y ^ J, G = (Z << 5 | Z >>> 27) + X + W + 3395469782 + G, W = J, J = Y, Y = (I << 30 | I >>> 2) >>> 0, I = Z, Z = G;
            A.RENDER_ERROR = A.RENDER_ERROR + Z | 0, A.h1 = A.h1 + I | 0, A.h2 = A.h2 + Y | 0, A.h3 = A.h3 + J | 0, A.h4 = A.h4 + W | 0, V -= 64
        }
    }
});
var Wv1 = moduleWrapper((UT7, g4B) => {
    var E_ = n8();
    P3();
    aL();
    y3A();
    var h4B = g4B.exports = E_.pkcs1 = E_.pkcs1 || {};
    h4B.encode_rsa_oaep = function(A, Q, B) {
        var G, Z, I, Y;
        if (typeof B === "string") G = B, Z = arguments[3] || void 0, I = arguments[4] || void 0;
        else if (B) {
            if (G = B.label || void 0, Z = B.seed || void 0, I = B.md || void 0, B.mgf1 && B.mgf1.md) Y = B.mgf1.md
        }
        if (!I) I = E_.md.sha1.create();
        else I.start();
        if (!Y) Y = I;
        var J = Math.ceil(A.n.bitLength() / 8),
            W = J - 2 * I.digestLength - 2;
        if (Q.length > W) {
            var X = Error("RSAES-OAEP input message length is too long.");
            throw X.length = Q.length, X.maxLength = W, X
        }
        if (!G) G = "";
        I.update(G, "raw");
        var F = I.digest(),
            V = "",
            K = W - Q.length;
        for (var D = 0; D < K; D++) V += "\x00";
        var H = F.getBytes() + V + "\x01" + Q;
        if (!Z) Z = E_.random.getBytes(I.digestLength);
        else if (Z.length !== I.digestLength) {
            var X = Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.");
            throw X.seedLength = Z.length, X.digestLength = I.digestLength, X
        }
        var C = $iA(Z, J - I.digestLength - 1, Y),
            E = E_.util.xorBytes(H, C, H.length),
            z = $iA(E, I.digestLength, Y),
            w = E_.util.xorBytes(Z, z, Z.length);
        return "\x00" + w + E
    };
    h4B.decode_rsa_oaep = function(A, Q, B) {
        var G, Z, I;
        if (typeof B === "string") G = B, Z = arguments[3] || void 0;
        else if (B) {
            if (G = B.label || void 0, Z = B.md || void 0, B.mgf1 && B.mgf1.md) I = B.mgf1.md
        }
        var Y = Math.ceil(A.n.bitLength() / 8);
        if (Q.length !== Y) {
            var E = Error("RSAES-OAEP encoded message length is invalid.");
            throw E.length = Q.length, E.expectedLength = Y, E
        }
        if (Z === void 0) Z = E_.md.sha1.create();
        else Z.start();
        if (!I) I = Z;
        if (Y < 2 * Z.digestLength + 2) throw Error("RSAES-OAEP key is too short for the hash function.");
        if (!G) G = "";
        Z.update(G, "raw");
        var J = Z.digest().getBytes(),
            W = Q.charAt(0),
            X = Q.substring(1, Z.digestLength + 1),
            F = Q.substring(1 + Z.digestLength),
            V = $iA(F, Z.digestLength, I),
            K = E_.util.xorBytes(X, V, X.length),
            D = $iA(K, Y - Z.digestLength - 1, I),
            H = E_.util.xorBytes(F, D, F.length),
            C = H.substring(0, Z.digestLength),
            E = W !== "\x00";
        for (var z = 0; z < Z.digestLength; ++z) E |= J.charAt(z) !== C.charAt(z);
        var w = 1,
            N = Z.digestLength;
        for (var q = Z.digestLength; q < H.length; q++) {
            var R = H.charCodeAt(q),
                P = R & 1 ^ 1,
                y = w ? 65534 : 0;
            E |= R & y, w = w & P, N += w
        }
        if (E || H.charCodeAt(N) !== 1) throw Error("Invalid RSAES-OAEP padding.");
        return H.substring(N + 1)
    };

    function $iA(A, Q, B) {
        if (!B) B = E_.md.sha1.create();
        var G = "",
            Z = Math.ceil(Q / B.digestLength);
        for (var I = 0; I < Z; ++I) {
            var Y = String.fromCharCode(I >> 24 & 255, I >> 16 & 255, I >> 8 & 255, I & 255);
            B.start(), B.update(A + Y), G += B.digest().getBytes()
        }
        return G.substring(0, Q)
    }
});
var Fv1 = moduleWrapper(($T7, Xv1) => {
    var jc = n8();
    P3();
    TzA();
    aL();
    (function() {
        if (jc.prime) {
            Xv1.exports = jc.prime;
            return
        }
        var A = Xv1.exports = jc.prime = jc.prime || {},
            Q = jc.jsbn.BigInteger,
            B = [6, 4, 2, 4, 2, 4, 6, 2],
            G = new Q(null);
        G.fromInt(30);
        var Z = function(V, K) {
            return V | K
        };
        A.generateProbablePrime = function(V, K, D) {
            if (typeof K === "function") D = K, K = {};
            K = K || {};
            var H = K.algorithm || "PRIMEINC";
            if (typeof H === "string") H = {
                name: H
            };
            H.options = H.options || {};
            var C = K.prng || jc.random,
                E = {
                    nextBytes: function(z) {
                        var w = C.getBytesSync(z.length);
                        for (var N = 0; N < z.length; ++N) z[N] = w.charCodeAt(N)
                    }
                };
            if (H.name === "PRIMEINC") return I(V, E, H.options, D);
            throw Error("Invalid prime generation algorithm: " + H.name)
        };

        function I(V, K, D, H) {
            if ("workers" in D) return W(V, K, D, H);
            return Y(V, K, D, H)
        }

        function Y(V, K, D, H) {
            var C = X(V, K),
                E = 0,
                z = F(C.bitLength());
            if ("millerRabinTests" in D) z = D.millerRabinTests;
            var w = 10;
            if ("maxBlockTime" in D) w = D.maxBlockTime;
            J(C, V, K, E, z, w, H)
        }

        function J(V, K, D, H, C, E, z) {
            var w = +new Date;
            do {
                if (V.bitLength() > K) V = X(K, D);
                if (V.isProbablePrime(C)) return z(null, V);
                V.dAddOffset(B[H++ % 8], 0)
            } while (E < 0 || +new Date - w < E);
            jc.util.setImmediate(function() {
                J(V, K, D, H, C, E, z)
            })
        }

        function W(V, K, D, H) {
            if (typeof Worker > "u") return Y(V, K, D, H);
            var C = X(V, K),
                E = D.workers,
                z = D.workLoad || 100,
                w = z * 30 / 8,
                N = D.workerScript || "forge/prime.worker.js";
            if (E === -1) return jc.util.estimateCores(function(R, P) {
                if (R) P = 2;
                E = P - 1, q()
            });
            q();

            function q() {
                E = Math.max(1, E);
                var R = [];
                for (var P = 0; P < E; ++P) R[P] = new Worker(N);
                var y = E;
                for (var P = 0; P < E; ++P) R[P].addEventListener("message", x);
                var v = !1;

                function x(p) {
                    if (v) return;
                    --y;
                    var u = p.data;
                    if (u.found) {
                        for (var o = 0; o < R.length; ++o) R[o].terminate();
                        return v = !0, H(null, new Q(u.prime, 16))
                    }
                    if (C.bitLength() > V) C = X(V, K);
                    var l = C.toString(16);
                    p.target.postMessage({
                        hex: l,
                        workLoad: z
                    }), C.dAddOffset(w, 0)
                }
            }
        }

        function X(V, K) {
            var D = new Q(V, K),
                H = V - 1;
            if (!D.testBit(H)) D.bitwiseTo(Q.ONE.shiftLeft(H), Z, D);
            return D.dAddOffset(31 - D.mod(G).byteValue(), 0), D
        }

        function F(V) {
            if (V <= 100) return 27;
            if (V <= 150) return 18;
            if (V <= 200) return 15;
            if (V <= 250) return 12;
            if (V <= 300) return 9;
            if (V <= 350) return 8;
            if (V <= 400) return 7;
            if (V <= 500) return 6;
            if (V <= 600) return 5;
            if (V <= 800) return 4;
            if (V <= 1250) return 3;
            return 2
        }
    })()
});
var PzA = moduleWrapper((wT7, i4B) => {
    var T9 = n8();
    GT();
    TzA();
    Tc();
    Wv1();
    Fv1();
    aL();
    P3();
    if (typeof h5 > "u") h5 = T9.jsbn.BigInteger;
    var h5, Vv1 = T9.util.isNodejs ? nodeRequire("crypto") : null,
        F0 = T9.asn1,
        rL = T9.util;
    T9.pki = T9.pki || {};
    i4B.exports = T9.pki.rsa = T9.rsa = T9.rsa || {};
    var V8 = T9.pki,
        Zo8 = [6, 4, 2, 4, 2, 4, 6, 2],
        Io8 = {
            name: "PrivateKeyInfo",
            tagClass: F0.Class.UNIVERSAL,
            type: F0.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "PrivateKeyInfo.version",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "privateKeyVersion"
            }, {
                name: "PrivateKeyInfo.privateKeyAlgorithm",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.SEQUENCE,
                constructed: !0,
                value: [{
                    name: "AlgorithmIdentifier.algorithm",
                    tagClass: F0.Class.UNIVERSAL,
                    type: F0.Type.OID,
                    constructed: !1,
                    capture: "privateKeyOid"
                }]
            }, {
                name: "PrivateKeyInfo",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.OCTETSTRING,
                constructed: !1,
                capture: "privateKey"
            }]
        },
        Yo8 = {
            name: "RSAPrivateKey",
            tagClass: F0.Class.UNIVERSAL,
            type: F0.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "RSAPrivateKey.version",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "privateKeyVersion"
            }, {
                name: "RSAPrivateKey.modulus",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "privateKeyModulus"
            }, {
                name: "RSAPrivateKey.publicExponent",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "privateKeyPublicExponent"
            }, {
                name: "RSAPrivateKey.privateExponent",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "privateKeyPrivateExponent"
            }, {
                name: "RSAPrivateKey.prime1",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "privateKeyPrime1"
            }, {
                name: "RSAPrivateKey.prime2",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "privateKeyPrime2"
            }, {
                name: "RSAPrivateKey.exponent1",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "privateKeyExponent1"
            }, {
                name: "RSAPrivateKey.exponent2",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "privateKeyExponent2"
            }, {
                name: "RSAPrivateKey.coefficient",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "privateKeyCoefficient"
            }]
        },
        Jo8 = {
            name: "RSAPublicKey",
            tagClass: F0.Class.UNIVERSAL,
            type: F0.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "RSAPublicKey.modulus",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "publicKeyModulus"
            }, {
                name: "RSAPublicKey.exponent",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.INTEGER,
                constructed: !1,
                capture: "publicKeyExponent"
            }]
        },
        Wo8 = T9.pki.rsa.publicKeyValidator = {
            name: "SubjectPublicKeyInfo",
            tagClass: F0.Class.UNIVERSAL,
            type: F0.Type.SEQUENCE,
            constructed: !0,
            captureAsn1: "subjectPublicKeyInfo",
            value: [{
                name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.SEQUENCE,
                constructed: !0,
                value: [{
                    name: "AlgorithmIdentifier.algorithm",
                    tagClass: F0.Class.UNIVERSAL,
                    type: F0.Type.OID,
                    constructed: !1,
                    capture: "publicKeyOid"
                }]
            }, {
                name: "SubjectPublicKeyInfo.subjectPublicKey",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.BITSTRING,
                constructed: !1,
                value: [{
                    name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
                    tagClass: F0.Class.UNIVERSAL,
                    type: F0.Type.SEQUENCE,
                    constructed: !0,
                    optional: !0,
                    captureAsn1: "rsaPublicKey"
                }]
            }]
        },
        Xo8 = {
            name: "DigestInfo",
            tagClass: F0.Class.UNIVERSAL,
            type: F0.Type.SEQUENCE,
            constructed: !0,
            value: [{
                name: "DigestInfo.DigestAlgorithm",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.SEQUENCE,
                constructed: !0,
                value: [{
                    name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
                    tagClass: F0.Class.UNIVERSAL,
                    type: F0.Type.OID,
                    constructed: !1,
                    capture: "algorithmIdentifier"
                }, {
                    name: "DigestInfo.DigestAlgorithm.parameters",
                    tagClass: F0.Class.UNIVERSAL,
                    type: F0.Type.NULL,
                    capture: "parameters",
                    optional: !0,
                    constructed: !1
                }]
            }, {
                name: "DigestInfo.digest",
                tagClass: F0.Class.UNIVERSAL,
                type: F0.Type.OCTETSTRING,
                constructed: !1,
                capture: "digest"
            }]
        },
        Fo8 = function(A) {
            var Q;
            if (A.algorithm in V8.oids) Q = V8.oids[A.algorithm];
            else {
                var B = Error("Unknown message digest algorithm.");
                throw B.algorithm = A.algorithm, B
            }
            var G = F0.oidToDer(Q).getBytes(),
                Z = F0.create(F0.Class.UNIVERSAL, F0.Type.SEQUENCE, !0, []),
                I = F0.create(F0.Class.UNIVERSAL, F0.Type.SEQUENCE, !0, []);
            I.value.push(F0.create(F0.Class.UNIVERSAL, F0.Type.OID, !1, G)), I.value.push(F0.create(F0.Class.UNIVERSAL, F0.Type.NULL, !1, ""));
            var Y = F0.create(F0.Class.UNIVERSAL, F0.Type.OCTETSTRING, !1, A.digest().getBytes());
            return Z.value.push(I), Z.value.push(Y), F0.toDer(Z).getBytes()
        },
        p4B = function(A, Q, B) {
            if (B) return A.modPow(Q.e, Q.n);
            if (!Q.p || !Q.q) return A.modPow(Q.d, Q.n);
            if (!Q.dP) Q.dP = Q.d.mod(Q.p.subtract(h5.ONE));
            if (!Q.dQ) Q.dQ = Q.d.mod(Q.q.subtract(h5.ONE));
            if (!Q.qInv) Q.qInv = Q.q.modInverse(Q.p);
            var G;
            do G = new h5(T9.util.bytesToHex(T9.random.getBytes(Q.n.bitLength() / 8)), 16); while (G.compareTo(Q.n) >= 0 || !G.gcd(Q.n).equals(h5.ONE));
            A = A.multiply(G.modPow(Q.e, Q.n)).mod(Q.n);
            var Z = A.mod(Q.p).modPow(Q.dP, Q.p),
                I = A.mod(Q.q).modPow(Q.dQ, Q.q);
            while (Z.compareTo(I) < 0) Z = Z.add(Q.p);
            var Y = Z.subtract(I).multiply(Q.qInv).mod(Q.p).multiply(Q.q).add(I);
            return Y = Y.multiply(G.modInverse(Q.n)).mod(Q.n), Y
        };
    V8.rsa.encrypt = function(A, Q, B) {
        var G = B,
            Z, I = Math.ceil(Q.n.bitLength() / 8);
        if (B !== !1 && B !== !0) G = B === 2, Z = l4B(A, Q, B);
        else Z = T9.util.createBuffer(), Z.putBytes(A);
        var Y = new h5(Z.toHex(), 16),
            J = p4B(Y, Q, G),
            W = J.toString(16),
            X = T9.util.createBuffer(),
            F = I - Math.ceil(W.length / 2);
        while (F > 0) X.putByte(0), --F;
        return X.putBytes(T9.util.hexToBytes(W)), X.getBytes()
    };
    V8.rsa.decrypt = function(A, Q, B, G) {
        var Z = Math.ceil(Q.n.bitLength() / 8);
        if (A.length !== Z) {
            var I = Error("Encrypted message length is invalid.");
            throw I.length = A.length, I.expected = Z, I
        }
        var Y = new h5(T9.util.createBuffer(A).toHex(), 16);
        if (Y.compareTo(Q.n) >= 0) throw Error("Encrypted message is invalid.");
        var J = p4B(Y, Q, B),
            W = J.toString(16),
            X = T9.util.createBuffer(),
            F = Z - Math.ceil(W.length / 2);
        while (F > 0) X.putByte(0), --F;
        if (X.putBytes(T9.util.hexToBytes(W)), G !== !1) return wiA(X.getBytes(), Q, B);
        return X.getBytes()
    };
    V8.rsa.createKeyPairGenerationState = function(A, Q, B) {
        if (typeof A === "string") A = parseInt(A, 10);
        A = A || 2048, B = B || {};
        var G = B.prng || T9.random,
            Z = {
                nextBytes: function(J) {
                    var W = G.getBytesSync(J.length);
                    for (var X = 0; X < J.length; ++X) J[X] = W.charCodeAt(X)
                }
            },
            I = B.algorithm || "PRIMEINC",
            Y;
        if (I === "PRIMEINC") Y = {
            algorithm: I,
            state: 0,
            bits: A,
            rng: Z,
            eInt: Q || 65537,
            e: new h5(null),
            p: null,
            q: null,
            qBits: A >> 1,
            pBits: A - (A >> 1),
            pqState: 0,
            num: null,
            keys: null
        }, Y.e.fromInt(Y.eInt);
        else throw Error("Invalid key generation algorithm: " + I);
        return Y
    };
    V8.rsa.stepKeyPairGenerationState = function(A, Q) {
        if (!("algorithm" in A)) A.algorithm = "PRIMEINC";
        var B = new h5(null);
        B.fromInt(30);
        var G = 0,
            Z = function(V, K) {
                return V | K
            },
            I = +new Date,
            Y, J = 0;
        while (A.keys === null && (Q <= 0 || J < Q)) {
            if (A.state === 0) {
                var W = A.p === null ? A.pBits : A.qBits,
                    X = W - 1;
                if (A.pqState === 0) {
                    if (A.num = new h5(W, A.rng), !A.num.testBit(X)) A.num.bitwiseTo(h5.ONE.shiftLeft(X), Z, A.num);
                    A.num.dAddOffset(31 - A.num.mod(B).byteValue(), 0), G = 0, ++A.pqState
                } else if (A.pqState === 1)
                    if (A.num.bitLength() > W) A.pqState = 0;
                    else if (A.num.isProbablePrime(Ko8(A.num.bitLength()))) ++A.pqState;
                else A.num.dAddOffset(Zo8[G++ % 8], 0);
                else if (A.pqState === 2) A.pqState = A.num.subtract(h5.ONE).gcd(A.e).compareTo(h5.ONE) === 0 ? 3 : 0;
                else if (A.pqState === 3) {
                    if (A.pqState = 0, A.p === null) A.p = A.num;
                    else A.q = A.num;
                    if (A.p !== null && A.q !== null) ++A.state;
                    A.num = null
                }
            } else if (A.state === 1) {
                if (A.p.compareTo(A.q) < 0) A.num = A.p, A.p = A.q, A.q = A.num;
                ++A.state
            } else if (A.state === 2) A.p1 = A.p.subtract(h5.ONE), A.q1 = A.q.subtract(h5.ONE), A.phi = A.p1.multiply(A.q1), ++A.state;
            else if (A.state === 3)
                if (A.phi.gcd(A.e).compareTo(h5.ONE) === 0) ++A.state;
                else A.p = null, A.q = null, A.state = 0;
            else if (A.state === 4)
                if (A.n = A.p.multiply(A.q), A.n.bitLength() === A.bits) ++A.state;
                else A.q = null, A.state = 0;
            else if (A.state === 5) {
                var F = A.e.modInverse(A.phi);
                A.keys = {
                    privateKey: V8.rsa.setPrivateKey(A.n, A.e, F, A.p, A.q, F.mod(A.p1), F.mod(A.q1), A.q.modInverse(A.p)),
                    publicKey: V8.rsa.setPublicKey(A.n, A.e)
                }
            }