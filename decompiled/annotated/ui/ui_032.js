/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: ui_032.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (7次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 32/53
 * Lines: 203162 - 204639 (1478 lines)
 * Original file: cli.js
 */

        B /= 95.047, G /= 100, Z /= 108.883, B = B > 0.008856 ? B ** 0.3333333333333333 : 7.787 * B + 0.13793103448275862, G = G > 0.008856 ? G ** 0.3333333333333333 : 7.787 * G + 0.13793103448275862, Z = Z > 0.008856 ? Z ** 0.3333333333333333 : 7.787 * Z + 0.13793103448275862;
        let I = 116 * G - 16,
            Y = 500 * (B - G),
            J = 200 * (G - Z);
        return [I, Y, J]
    };
    g2.hsl.rgb = function(A) {
        let Q = A[0] / 360,
            B = A[1] / 100,
            G = A[2] / 100,
            Z, I, Y;
        if (B === 0) return Y = G * 255, [Y, Y, Y];
        if (G < 0.5) Z = G * (1 + B);
        else Z = G + B - G * B;
        let J = 2 * G - Z,
            W = [0, 0, 0];
        for (let X = 0; X < 3; X++) {
            if (I = Q + 0.3333333333333333 * -(X - 1), I < 0) I++;
            if (I > 1) I--;
            if (6 * I < 1) Y = J + (Z - J) * 6 * I;
            else if (2 * I < 1) Y = Z;
            else if (3 * I < 2) Y = J + (Z - J) * (0.6666666666666666 - I) * 6;
            else Y = J;
            W[X] = Y * 255
        }
        return W
    };
    g2.hsl.hsv = function(A) {
        let Q = A[0],
            B = A[1] / 100,
            G = A[2] / 100,
            Z = B,
            I = Math.max(G, 0.01);
        G *= 2, B *= G <= 1 ? G : 2 - G, Z *= I <= 1 ? I : 2 - I;
        let Y = (G + B) / 2,
            J = G === 0 ? 2 * Z / (I + Z) : 2 * B / (G + B);
        return [Q, J * 100, Y * 100]
    };
    g2.hsv.rgb = function(A) {
        let Q = A[0] / 60,
            B = A[1] / 100,
            G = A[2] / 100,
            Z = Math.floor(Q) % 6,
            I = Q - Math.floor(Q),
            Y = 255 * G * (1 - B),
            J = 255 * G * (1 - B * I),
            W = 255 * G * (1 - B * (1 - I));
        switch (G *= 255, Z) {
            case 0:
                return [G, W, Y];
            case 1:
                return [J, G, Y];
            case 2:
                return [Y, G, W];
            case 3:
                return [Y, J, G];
            case 4:
                return [W, Y, G];
            case 5:
                return [G, Y, J]
        }
    };
    g2.hsv.hsl = function(A) {
        let Q = A[0],
            B = A[1] / 100,
            G = A[2] / 100,
            Z = Math.max(G, 0.01),
            I, Y;
        Y = (2 - B) * G;
        let J = (2 - B) * Z;
        return I = B * Z, I /= J <= 1 ? J : 2 - J, I = I || 0, Y /= 2, [Q, I * 100, Y * 100]
    };
    g2.hwb.rgb = function(A) {
        let Q = A[0] / 360,
            B = A[1] / 100,
            G = A[2] / 100,
            Z = B + G,
            I;
        if (Z > 1) B /= Z, G /= Z;
        let Y = Math.floor(6 * Q),
            J = 1 - G;
        if (I = 6 * Q - Y, (Y & 1) !== 0) I = 1 - I;
        let W = B + I * (J - B),
            X, F, V;
        switch (Y) {
            default:
            case 6:
            case 0:
                X = J, F = W, V = B;
                break;
            case 1:
                X = W, F = J, V = B;
                break;
            case 2:
                X = B, F = J, V = W;
                break;
            case 3:
                X = B, F = W, V = J;
                break;
            case 4:
                X = W, F = B, V = J;
                break;
            case 5:
                X = J, F = B, V = W;
                break
        }
        return [X * 255, F * 255, V * 255]
    };
    g2.cmyk.rgb = function(A) {
        let Q = A[0] / 100,
            B = A[1] / 100,
            G = A[2] / 100,
            Z = A[3] / 100,
            I = 1 - Math.min(1, Q * (1 - Z) + Z),
            Y = 1 - Math.min(1, B * (1 - Z) + Z),
            J = 1 - Math.min(1, G * (1 - Z) + Z);
        return [I * 255, Y * 255, J * 255]
    };
    g2.xyz.rgb = function(A) {
        let Q = A[0] / 100,
            B = A[1] / 100,
            G = A[2] / 100,
            Z, I, Y;
        return Z = Q * 3.2406 + B * -1.5372 + G * -0.4986, I = Q * -0.9689 + B * 1.8758 + G * 0.0415, Y = Q * 0.0557 + B * -0.204 + G * 1.057, Z = Z > 0.0031308 ? 1.055 * Z ** 0.4166666666666667 - 0.055 : Z * 12.92, I = I > 0.0031308 ? 1.055 * I ** 0.4166666666666667 - 0.055 : I * 12.92, Y = Y > 0.0031308 ? 1.055 * Y ** 0.4166666666666667 - 0.055 : Y * 12.92, Z = Math.min(Math.max(0, Z), 1), I = Math.min(Math.max(0, I), 1), Y = Math.min(Math.max(0, Y), 1), [Z * 255, I * 255, Y * 255]
    };
    g2.xyz.lab = function(A) {
        let Q = A[0],
            B = A[1],
            G = A[2];
        Q /= 95.047, B /= 100, G /= 108.883, Q = Q > 0.008856 ? Q ** 0.3333333333333333 : 7.787 * Q + 0.13793103448275862, B = B > 0.008856 ? B ** 0.3333333333333333 : 7.787 * B + 0.13793103448275862, G = G > 0.008856 ? G ** 0.3333333333333333 : 7.787 * G + 0.13793103448275862;
        let Z = 116 * B - 16,
            I = 500 * (Q - B),
            Y = 200 * (B - G);
        return [Z, I, Y]
    };
    g2.lab.xyz = function(A) {
        let Q = A[0],
            B = A[1],
            G = A[2],
            Z, I, Y;
        I = (Q + 16) / 116, Z = B / 500 + I, Y = I - G / 200;
        let J = I ** 3,
            W = Z ** 3,
            X = Y ** 3;
        return I = J > 0.008856 ? J : (I - 0.13793103448275862) / 7.787, Z = W > 0.008856 ? W : (Z - 0.13793103448275862) / 7.787, Y = X > 0.008856 ? X : (Y - 0.13793103448275862) / 7.787, Z *= 95.047, I *= 100, Y *= 108.883, [Z, I, Y]
    };
    g2.lab.lch = function(A) {
        let Q = A[0],
            B = A[1],
            G = A[2],
            Z;
        if (Z = Math.atan2(G, B) * 360 / 2 / Math.PI, Z < 0) Z += 360;
        let Y = Math.sqrt(B * B + G * G);
        return [Q, Y, Z]
    };
    g2.lch.lab = function(A) {
        let Q = A[0],
            B = A[1],
            Z = A[2] / 360 * 2 * Math.PI,
            I = B * Math.cos(Z),
            Y = B * Math.sin(Z);
        return [Q, I, Y]
    };
    g2.rgb.ansi16 = function(A, Q = null) {
        let [B, G, Z] = A, I = Q === null ? g2.rgb.hsv(A)[2] : Q;
        if (I = Math.round(I / 50), I === 0) return 30;
        let Y = 30 + (Math.round(Z / 255) << 2 | Math.round(G / 255) << 1 | Math.round(B / 255));
        if (I === 2) Y += 60;
        return Y
    };
    g2.hsv.ansi16 = function(A) {
        return g2.rgb.ansi16(g2.hsv.rgb(A), A[2])
    };
    g2.rgb.ansi256 = function(A) {
        let Q = A[0],
            B = A[1],
            G = A[2];
        if (Q === B && B === G) {
            if (Q < 8) return 16;
            if (Q > 248) return 231;
            return Math.round((Q - 8) / 247 * 24) + 232
        }
        return 16 + 36 * Math.round(Q / 255 * 5) + 6 * Math.round(B / 255 * 5) + Math.round(G / 255 * 5)
    };
    g2.ansi16.rgb = function(A) {
        let Q = A % 10;
        if (Q === 0 || Q === 7) {
            if (A > 50) Q += 3.5;
            return Q = Q / 10.5 * 255, [Q, Q, Q]
        }
        let B = (~~(A > 50) + 1) * 0.5,
            G = (Q & 1) * B * 255,
            Z = (Q >> 1 & 1) * B * 255,
            I = (Q >> 2 & 1) * B * 255;
        return [G, Z, I]
    };
    g2.ansi256.rgb = function(A) {
        if (A >= 232) {
            let I = (A - 232) * 10 + 8;
            return [I, I, I]
        }
        A -= 16;
        let Q, B = Math.floor(A / 36) / 5 * 255,
            G = Math.floor((Q = A % 36) / 6) / 5 * 255,
            Z = Q % 6 / 5 * 255;
        return [B, G, Z]
    };
    g2.rgb.hex = function(A) {
        let B = (((Math.round(A[0]) & 255) << 16) + ((Math.round(A[1]) & 255) << 8) + (Math.round(A[2]) & 255)).toString(16).toUpperCase();
        return "000000".substring(B.length) + B
    };
    g2.hex.rgb = function(A) {
        let Q = A.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!Q) return [0, 0, 0];
        let B = Q[0];
        if (Q[0].length === 3) B = B.split("").map((J) => {
            return J + J
        }).join("");
        let G = parseInt(B, 16),
            Z = G >> 16 & 255,
            I = G >> 8 & 255,
            Y = G & 255;
        return [Z, I, Y]
    };
    g2.rgb.hcg = function(A) {
        let Q = A[0] / 255,
            B = A[1] / 255,
            G = A[2] / 255,
            Z = Math.max(Math.max(Q, B), G),
            I = Math.min(Math.min(Q, B), G),
            Y = Z - I,
            J, W;
        if (Y < 1) J = I / (1 - Y);
        else J = 0;
        if (Y <= 0) W = 0;
        else if (Z === Q) W = (B - G) / Y % 6;
        else if (Z === B) W = 2 + (G - Q) / Y;
        else W = 4 + (Q - B) / Y;
        return W /= 6, W %= 1, [W * 360, Y * 100, J * 100]
    };
    g2.hsl.hcg = function(A) {
        let Q = A[1] / 100,
            B = A[2] / 100,
            G = B < 0.5 ? 2 * Q * B : 2 * Q * (1 - B),
            Z = 0;
        if (G < 1) Z = (B - 0.5 * G) / (1 - G);
        return [A[0], G * 100, Z * 100]
    };
    g2.hsv.hcg = function(A) {
        let Q = A[1] / 100,
            B = A[2] / 100,
            G = Q * B,
            Z = 0;
        if (G < 1) Z = (B - G) / (1 - G);
        return [A[0], G * 100, Z * 100]
    };
    g2.hcg.rgb = function(A) {
        let Q = A[0] / 360,
            B = A[1] / 100,
            G = A[2] / 100;
        if (B === 0) return [G * 255, G * 255, G * 255];
        let Z = [0, 0, 0],
            I = Q % 1 * 6,
            Y = I % 1,
            J = 1 - Y,
            W = 0;
        switch (Math.floor(I)) {
            case 0:
                Z[0] = 1, Z[1] = Y, Z[2] = 0;
                break;
            case 1:
                Z[0] = J, Z[1] = 1, Z[2] = 0;
                break;
            case 2:
                Z[0] = 0, Z[1] = 1, Z[2] = Y;
                break;
            case 3:
                Z[0] = 0, Z[1] = J, Z[2] = 1;
                break;
            case 4:
                Z[0] = Y, Z[1] = 0, Z[2] = 1;
                break;
            default:
                Z[0] = 1, Z[1] = 0, Z[2] = J
        }
        return W = (1 - B) * G, [(B * Z[0] + W) * 255, (B * Z[1] + W) * 255, (B * Z[2] + W) * 255]
    };
    g2.hcg.hsv = function(A) {
        let Q = A[1] / 100,
            B = A[2] / 100,
            G = Q + B * (1 - Q),
            Z = 0;
        if (G > 0) Z = Q / G;
        return [A[0], Z * 100, G * 100]
    };
    g2.hcg.hsl = function(A) {
        let Q = A[1] / 100,
            G = A[2] / 100 * (1 - Q) + 0.5 * Q,
            Z = 0;
        if (G > 0 && G < 0.5) Z = Q / (2 * G);
        else if (G >= 0.5 && G < 1) Z = Q / (2 * (1 - G));
        return [A[0], Z * 100, G * 100]
    };
    g2.hcg.hwb = function(A) {
        let Q = A[1] / 100,
            B = A[2] / 100,
            G = Q + B * (1 - Q);
        return [A[0], (G - Q) * 100, (1 - G) * 100]
    };
    g2.hwb.hcg = function(A) {
        let Q = A[1] / 100,
            G = 1 - A[2] / 100,
            Z = G - Q,
            I = 0;
        if (Z < 1) I = (G - Z) / (1 - Z);
        return [A[0], Z * 100, I * 100]
    };
    g2.apple.rgb = function(A) {
        return [A[0] / 65535 * 255, A[1] / 65535 * 255, A[2] / 65535 * 255]
    };
    g2.rgb.apple = function(A) {
        return [A[0] / 255 * 65535, A[1] / 255 * 65535, A[2] / 255 * 65535]
    };
    g2.gray.rgb = function(A) {
        return [A[0] / 100 * 255, A[0] / 100 * 255, A[0] / 100 * 255]
    };
    g2.gray.hsl = function(A) {
        return [0, 0, A[0]]
    };
    g2.gray.hsv = g2.gray.hsl;
    g2.gray.hwb = function(A) {
        return [0, 100, A[0]]
    };
    g2.gray.cmyk = function(A) {
        return [0, 0, 0, A[0]]
    };
    g2.gray.lab = function(A) {
        return [A[0], 0, 0]
    };
    g2.gray.hex = function(A) {
        let Q = Math.round(A[0] / 100 * 255) & 255,
            G = ((Q << 16) + (Q << 8) + Q).toString(16).toUpperCase();
        return "000000".substring(G.length) + G
    };
    g2.rgb.gray = function(A) {
        return [(A[0] + A[1] + A[2]) / 3 / 255 * 100]
    }
});
var fPB = U((Vo7, bPB) => {
    var xrA = Dd1();

    function tq6() {
        let A = {},
            Q = Object.keys(xrA);
        for (let B = Q.length, G = 0; G < B; G++) A[Q[G]] = {
            distance: -1,
            parent: null
        };
        return A
    }

    function eq6(A) {
        let Q = tq6(),
            B = [A];
        Q[A].distance = 0;
        while (B.length) {
            let G = B.pop(),
                Z = Object.keys(xrA[G]);
            for (let I = Z.length, Y = 0; Y < I; Y++) {
                let J = Z[Y],
                    W = Q[J];
                if (W.distance === -1) W.distance = Q[G].distance + 1, W.parent = G, B.unshift(J)
            }
        }
        return Q
    }

    function AN6(A, Q) {
        return function(B) {
            return Q(A(B))
        }
    }

    function QN6(A, Q) {
        let B = [Q[A].parent, A],
            G = xrA[Q[A].parent][A],
            Z = Q[A].parent;
        while (Q[Z].parent) B.unshift(Q[Z].parent), G = AN6(xrA[Q[Z].parent][Z], G), Z = Q[Z].parent;
        return G.conversion = B, G
    }
    bPB.exports = function(A) {
        let Q = eq6(A),
            B = {},
            G = Object.keys(Q);
        for (let Z = G.length, I = 0; I < Z; I++) {
            let Y = G[I];
            if (Q[Y].parent === null) continue;
            B[Y] = QN6(Y, Q)
        }
        return B
    }
});
var Cd1 = U((Ko7, hPB) => {
    var Hd1 = Dd1(),
        BN6 = fPB(),
        IGA = {},
        GN6 = Object.keys(Hd1);

    function ZN6(A) {
        let Q = function(...B) {
            let G = B[0];
            if (G === void 0 || G === null) return G;
            if (G.length > 1) B = G;
            return A(B)
        };
        if ("conversion" in A) Q.conversion = A.conversion;
        return Q
    }

    function IN6(A) {
        let Q = function(...B) {
            let G = B[0];
            if (G === void 0 || G === null) return G;
            if (G.length > 1) B = G;
            let Z = A(B);
            if (typeof Z === "object")
                for (let I = Z.length, Y = 0; Y < I; Y++) Z[Y] = Math.round(Z[Y]);
            return Z
        };
        if ("conversion" in A) Q.conversion = A.conversion;
        return Q
    }
    GN6.forEach((A) => {
        IGA[A] = {}, Object.defineProperty(IGA[A], "channels", {
            value: Hd1[A].channels
        }), Object.defineProperty(IGA[A], "labels", {
            value: Hd1[A].labels
        });
        let Q = BN6(A);
        Object.keys(Q).forEach((G) => {
            let Z = Q[G];
            IGA[A][G] = IN6(Z), IGA[A][G].raw = ZN6(Z)
        })
    });
    hPB.exports = IGA
});
var brA = U((Do7, uPB) => {
    var YGA = yPB(),
        ew = Cd1(),
        gPB = ["keyword", "gray", "hex"],
        Ed1 = {};
    for (let A of Object.keys(ew)) Ed1[[...ew[A].labels].sort().join("")] = A;
    var vrA = {};

    function uV(A, Q) {
        if (!(this instanceof uV)) return new uV(A, Q);
        if (Q && Q in gPB) Q = null;
        if (Q && !(Q in ew)) throw Error("Unknown model: " + Q);
        let B, G;
        if (A == null) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
        else if (A instanceof uV) this.model = A.model, this.color = [...A.color], this.valpha = A.valpha;
        else if (typeof A === "string") {
            let Z = YGA.get(A);
            if (Z === null) throw Error("Unable to parse color from string: " + A);
            this.model = Z.model, G = ew[this.model].channels, this.color = Z.value.slice(0, G), this.valpha = typeof Z.value[G] === "number" ? Z.value[G] : 1
        } else if (A.length > 0) {
            this.model = Q || "rgb", G = ew[this.model].channels;
            let Z = Array.prototype.slice.call(A, 0, G);
            this.color = zd1(Z, G), this.valpha = typeof A[G] === "number" ? A[G] : 1
        } else if (typeof A === "number") this.model = "rgb", this.color = [A >> 16 & 255, A >> 8 & 255, A & 255], this.valpha = 1;
        else {
            this.valpha = 1;
            let Z = Object.keys(A);
            if ("alpha" in A) Z.splice(Z.indexOf("alpha"), 1), this.valpha = typeof A.alpha === "number" ? A.alpha : 0;
            let I = Z.sort().join("");
            if (!(I in Ed1)) throw Error("Unable to parse color from object: " + JSON.stringify(A));
            this.model = Ed1[I];
            let {
                labels: Y
            } = ew[this.model], J = [];
            for (B = 0; B < Y.length; B++) J.push(A[Y[B]]);
            this.color = zd1(J)
        }
        if (vrA[this.model]) {
            G = ew[this.model].channels;
            for (B = 0; B < G; B++) {
                let Z = vrA[this.model][B];
                if (Z) this.color[B] = Z(this.color[B])
            }
        }
        if (this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze) Object.freeze(this)
    }
    uV.prototype = {
        toString() {
            return this.string()
        },
        toJSON() {
            return this[this.model]()
        },
        string(A) {
            let Q = this.model in YGA.to ? this : this.rgb();
            Q = Q.round(typeof A === "number" ? A : 1);
            let B = Q.valpha === 1 ? Q.color : [...Q.color, this.valpha];
            return YGA.to[Q.model](B)
        },
        percentString(A) {
            let Q = this.rgb().round(typeof A === "number" ? A : 1),
                B = Q.valpha === 1 ? Q.color : [...Q.color, this.valpha];
            return YGA.to.rgb.percent(B)
        },
        array() {
            return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha]
        },
        object() {
            let A = {},
                {
                    channels: Q
                } = ew[this.model],
                {
                    labels: B
                } = ew[this.model];
            for (let G = 0; G < Q; G++) A[B[G]] = this.color[G];
            if (this.valpha !== 1) A.alpha = this.valpha;
            return A
        },
        unitArray() {
            let A = this.rgb().color;
            if (A[0] /= 255, A[1] /= 255, A[2] /= 255, this.valpha !== 1) A.push(this.valpha);
            return A
        },
        unitObject() {
            let A = this.rgb().object();
            if (A.r /= 255, A.g /= 255, A.b /= 255, this.valpha !== 1) A.alpha = this.valpha;
            return A
        },
        round(A) {
            return A = Math.max(A || 0, 0), new uV([...this.color.map(JN6(A)), this.valpha], this.model)
        },
        alpha(A) {
            if (A !== void 0) return new uV([...this.color, Math.max(0, Math.min(1, A))], this.model);
            return this.valpha
        },
        red: OJ("rgb", 0, OF(255)),
        green: OJ("rgb", 1, OF(255)),
        blue: OJ("rgb", 2, OF(255)),
        hue: OJ(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (A) => (A % 360 + 360) % 360),
        saturationl: OJ("hsl", 1, OF(100)),
        lightness: OJ("hsl", 2, OF(100)),
        saturationv: OJ("hsv", 1, OF(100)),
        value: OJ("hsv", 2, OF(100)),
        chroma: OJ("hcg", 1, OF(100)),
        gray: OJ("hcg", 2, OF(100)),
        white: OJ("hwb", 1, OF(100)),
        wblack: OJ("hwb", 2, OF(100)),
        cyan: OJ("cmyk", 0, OF(100)),
        magenta: OJ("cmyk", 1, OF(100)),
        yellow: OJ("cmyk", 2, OF(100)),
        black: OJ("cmyk", 3, OF(100)),
        x: OJ("xyz", 0, OF(95.047)),
        y: OJ("xyz", 1, OF(100)),
        z: OJ("xyz", 2, OF(108.833)),
        l: OJ("lab", 0, OF(100)),
        a: OJ("lab", 1),
        b: OJ("lab", 2),
        keyword(A) {
            if (A !== void 0) return new uV(A);
            return ew[this.model].keyword(this.color)
        },
        hex(A) {
            if (A !== void 0) return new uV(A);
            return YGA.to.hex(this.rgb().round().color)
        },
        hexa(A) {
            if (A !== void 0) return new uV(A);
            let Q = this.rgb().round().color,
                B = Math.round(this.valpha * 255).toString(16).toUpperCase();
            if (B.length === 1) B = "0" + B;
            return YGA.to.hex(Q) + B
        },
        rgbNumber() {
            let A = this.rgb().color;
            return (A[0] & 255) << 16 | (A[1] & 255) << 8 | A[2] & 255
        },
        luminosity() {
            let A = this.rgb().color,
                Q = [];
            for (let [B, G] of A.entries()) {
                let Z = G / 255;
                Q[B] = Z <= 0.04045 ? Z / 12.92 : ((Z + 0.055) / 1.055) ** 2.4
            }
            return 0.2126 * Q[0] + 0.7152 * Q[1] + 0.0722 * Q[2]
        },
        contrast(A) {
            let Q = this.luminosity(),
                B = A.luminosity();
            if (Q > B) return (Q + 0.05) / (B + 0.05);
            return (B + 0.05) / (Q + 0.05)
        },
        level(A) {
            let Q = this.contrast(A);
            if (Q >= 7) return "AAA";
            return Q >= 4.5 ? "AA" : ""
        },
        isDark() {
            let A = this.rgb().color;
            return (A[0] * 2126 + A[1] * 7152 + A[2] * 722) / 1e4 < 128
        },
        isLight() {
            return !this.isDark()
        },
        negate() {
            let A = this.rgb();
            for (let Q = 0; Q < 3; Q++) A.color[Q] = 255 - A.color[Q];
            return A
        },
        lighten(A) {
            let Q = this.hsl();
            return Q.color[2] += Q.color[2] * A, Q
        },
        darken(A) {
            let Q = this.hsl();
            return Q.color[2] -= Q.color[2] * A, Q
        },
        saturate(A) {
            let Q = this.hsl();
            return Q.color[1] += Q.color[1] * A, Q
        },
        desaturate(A) {
            let Q = this.hsl();
            return Q.color[1] -= Q.color[1] * A, Q
        },
        whiten(A) {
            let Q = this.hwb();
            return Q.color[1] += Q.color[1] * A, Q
        },
        blacken(A) {
            let Q = this.hwb();
            return Q.color[2] += Q.color[2] * A, Q
        },
        grayscale() {
            let A = this.rgb().color,
                Q = A[0] * 0.3 + A[1] * 0.59 + A[2] * 0.11;
            return uV.rgb(Q, Q, Q)
        },
        fade(A) {
            return this.alpha(this.valpha - this.valpha * A)
        },
        opaquer(A) {
            return this.alpha(this.valpha + this.valpha * A)
        },
        rotate(A) {
            let Q = this.hsl(),
                B = Q.color[0];
            return B = (B + A) % 360, B = B < 0 ? 360 + B : B, Q.color[0] = B, Q
        },
        mix(A, Q) {
            if (!A || !A.rgb) throw Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof A);
            let B = A.rgb(),
                G = this.rgb(),
                Z = Q === void 0 ? 0.5 : Q,
                I = 2 * Z - 1,
                Y = B.alpha() - G.alpha(),
                J = ((I * Y === -1 ? I : (I + Y) / (1 + I * Y)) + 1) / 2,
                W = 1 - J;
            return uV.rgb(J * B.red() + W * G.red(), J * B.green() + W * G.green(), J * B.blue() + W * G.blue(), B.alpha() * Z + G.alpha() * (1 - Z))
        }
    };
    for (let A of Object.keys(ew)) {
        if (gPB.includes(A)) continue;
        let {
            channels: Q
        } = ew[A];
        uV.prototype[A] = function(...B) {
            if (this.model === A) return new uV(this);
            if (B.length > 0) return new uV(B, A);
            return new uV([...WN6(ew[this.model][A].raw(this.color)), this.valpha], A)
        }, uV[A] = function(...B) {
            let G = B[0];
            if (typeof G === "number") G = zd1(B, Q);
            return new uV(G, A)
        }
    }

    function YN6(A, Q) {
        return Number(A.toFixed(Q))
    }

    function JN6(A) {
        return function(Q) {
            return YN6(Q, A)
        }
    }

    function OJ(A, Q, B) {
        A = Array.isArray(A) ? A : [A];
        for (let G of A)(vrA[G] || (vrA[G] = []))[Q] = B;
        return A = A[0],
            function(G) {
                let Z;
                if (G !== void 0) {
                    if (B) G = B(G);
                    return Z = this[A](), Z.color[Q] = G, Z
                }
                if (Z = this[A]().color[Q], B) Z = B(Z);
                return Z
            }
    }

    function OF(A) {
        return function(Q) {
            return Math.max(0, Math.min(A, Q))
        }
    }

    function WN6(A) {
        return Array.isArray(A) ? A : [A]
    }

    function zd1(A, Q) {
        for (let B = 0; B < Q; B++)
            if (typeof A[B] !== "number") A[B] = 0;
        return A
    }
    uPB.exports = uV
});
var cPB = U((Ho7, dPB) => {
    var XN6 = brA(),
        _0 = f_(),
        Mp = d$A(),
        FN6 = {
            left: "low",
            center: "centre",
            centre: "centre",
            right: "high"
        };

    function mPB(A) {
        let {
            raw: Q,
            density: B,
            limitInputPixels: G,
            ignoreIcc: Z,
            unlimited: I,
            sequentialRead: Y,
            failOn: J,
            failOnError: W,
            animated: X,
            page: F,
            pages: V,
            subifd: K
        } = A;
        return [Q, B, G, Z, I, Y, J, W, X, F, V, K].some(_0.defined) ? {
            raw: Q,
            density: B,
            limitInputPixels: G,
            ignoreIcc: Z,
            unlimited: I,
            sequentialRead: Y,
            failOn: J,
            failOnError: W,
            animated: X,
            page: F,
            pages: V,
            subifd: K
        } : void 0
    }

    function VN6(A, Q, B) {
        let G = {
            failOn: "warning",
            limitInputPixels: Math.pow(16383, 2),
            ignoreIcc: !1,
            unlimited: !1,
            sequentialRead: !0
        };
        if (_0.string(A)) G.file = A;
        else if (_0.buffer(A)) {
            if (A.length === 0) throw Error("Input Buffer is empty");
            G.buffer = A
        } else if (_0.arrayBuffer(A)) {
            if (A.byteLength === 0) throw Error("Input bit Array is empty");
            G.buffer = Buffer.from(A, 0, A.byteLength)
        } else if (_0.typedArray(A)) {
            if (A.length === 0) throw Error("Input Bit Array is empty");
            G.buffer = Buffer.from(A.buffer, A.byteOffset, A.byteLength)
        } else if (_0.plainObject(A) && !_0.defined(Q)) {
            if (Q = A, mPB(Q)) G.buffer = []
        } else if (!_0.defined(A) && !_0.defined(Q) && _0.object(B) && B.allowStream) G.buffer = [];
        else throw Error(`Unsupported input '${A}' of type ${typeof A}${_0.defined(Q)?` when also providing options of type ${typeof Q}`:""}`);
        if (_0.object(Q)) {
            if (_0.defined(Q.failOnError))
                if (_0.bool(Q.failOnError)) G.failOn = Q.failOnError ? "warning" : "none";
                else throw _0.invalidParameterError("failOnError", "boolean", Q.failOnError);
            if (_0.defined(Q.failOn))
                if (_0.string(Q.failOn) && _0.inArray(Q.failOn, ["none", "truncated", "error", "warning"])) G.failOn = Q.failOn;
                else throw _0.invalidParameterError("failOn", "one of: none, truncated, error, warning", Q.failOn);
            if (_0.defined(Q.density))
                if (_0.inRange(Q.density, 1, 1e5)) G.density = Q.density;
                else throw _0.invalidParameterError("density", "number between 1 and 100000", Q.density);
            if (_0.defined(Q.ignoreIcc))
                if (_0.bool(Q.ignoreIcc)) G.ignoreIcc = Q.ignoreIcc;
                else throw _0.invalidParameterError("ignoreIcc", "boolean", Q.ignoreIcc);
            if (_0.defined(Q.limitInputPixels))
                if (_0.bool(Q.limitInputPixels)) G.limitInputPixels = Q.limitInputPixels ? Math.pow(16383, 2) : 0;
                else if (_0.integer(Q.limitInputPixels) && _0.inRange(Q.limitInputPixels, 0, Number.MAX_SAFE_INTEGER)) G.limitInputPixels = Q.limitInputPixels;
            else throw _0.invalidParameterError("limitInputPixels", "positive integer", Q.limitInputPixels);
            if (_0.defined(Q.unlimited))
                if (_0.bool(Q.unlimited)) G.unlimited = Q.unlimited;
                else throw _0.invalidParameterError("unlimited", "boolean", Q.unlimited);
            if (_0.defined(Q.sequentialRead))
                if (_0.bool(Q.sequentialRead)) G.sequentialRead = Q.sequentialRead;
                else throw _0.invalidParameterError("sequentialRead", "boolean", Q.sequentialRead);
            if (_0.defined(Q.raw))
                if (_0.object(Q.raw) && _0.integer(Q.raw.width) && Q.raw.width > 0 && _0.integer(Q.raw.height) && Q.raw.height > 0 && _0.integer(Q.raw.channels) && _0.inRange(Q.raw.channels, 1, 4)) switch (G.rawWidth = Q.raw.width, G.rawHeight = Q.raw.height, G.rawChannels = Q.raw.channels, G.rawPremultiplied = !!Q.raw.premultiplied, A.constructor) {
                    case Uint8Array:
                    case Uint8ClampedArray:
                        G.rawDepth = "uchar";
                        break;
                    case Int8Array:
                        G.rawDepth = "char";
                        break;
                    case Uint16Array:
                        G.rawDepth = "ushort";
                        break;
                    case Int16Array:
                        G.rawDepth = "short";
                        break;
                    case Uint32Array:
                        G.rawDepth = "uint";
                        break;
                    case Int32Array:
                        G.rawDepth = "int";
                        break;
                    case Float32Array:
                        G.rawDepth = "float";
                        break;
                    case Float64Array:
                        G.rawDepth = "double";
                        break;
                    default:
                        G.rawDepth = "uchar";
                        break
                } else throw Error("Expected width, height and channels for raw pixel input");
            if (_0.defined(Q.animated))
                if (_0.bool(Q.animated)) G.pages = Q.animated ? -1 : 1;
                else throw _0.invalidParameterError("animated", "boolean", Q.animated);
            if (_0.defined(Q.pages))
                if (_0.integer(Q.pages) && _0.inRange(Q.pages, -1, 1e5)) G.pages = Q.pages;
                else throw _0.invalidParameterError("pages", "integer between -1 and 100000", Q.pages);
            if (_0.defined(Q.page))
                if (_0.integer(Q.page) && _0.inRange(Q.page, 0, 1e5)) G.page = Q.page;
                else throw _0.invalidParameterError("page", "integer between 0 and 100000", Q.page);
            if (_0.defined(Q.level))
                if (_0.integer(Q.level) && _0.inRange(Q.level, 0, 256)) G.level = Q.level;
                else throw _0.invalidParameterError("level", "integer between 0 and 256", Q.level);
            if (_0.defined(Q.subifd))
                if (_0.integer(Q.subifd) && _0.inRange(Q.subifd, -1, 1e5)) G.subifd = Q.subifd;
                else throw _0.invalidParameterError("subifd", "integer between -1 and 100000", Q.subifd);
            if (_0.defined(Q.create))
                if (_0.object(Q.create) && _0.integer(Q.create.width) && Q.create.width > 0 && _0.integer(Q.create.height) && Q.create.height > 0 && _0.integer(Q.create.channels)) {
                    if (G.createWidth = Q.create.width, G.createHeight = Q.create.height, G.createChannels = Q.create.channels, _0.defined(Q.create.noise)) {
                        if (!_0.object(Q.create.noise)) throw Error("Expected noise to be an object");
                        if (!_0.inArray(Q.create.noise.type, ["gaussian"])) throw Error("Only gaussian noise is supported at the moment");
                        if (!_0.inRange(Q.create.channels, 1, 4)) throw _0.invalidParameterError("create.channels", "number between 1 and 4", Q.create.channels);
                        if (G.createNoiseType = Q.create.noise.type, _0.number(Q.create.noise.mean) && _0.inRange(Q.create.noise.mean, 0, 1e4)) G.createNoiseMean = Q.create.noise.mean;
                        else throw _0.invalidParameterError("create.noise.mean", "number between 0 and 10000", Q.create.noise.mean);
                        if (_0.number(Q.create.noise.sigma) && _0.inRange(Q.create.noise.sigma, 0, 1e4)) G.createNoiseSigma = Q.create.noise.sigma;
                        else throw _0.invalidParameterError("create.noise.sigma", "number between 0 and 10000", Q.create.noise.sigma)
                    } else if (_0.defined(Q.create.background)) {
                        if (!_0.inRange(Q.create.channels, 3, 4)) throw _0.invalidParameterError("create.channels", "number between 3 and 4", Q.create.channels);
                        let Z = XN6(Q.create.background);
                        G.createBackground = [Z.red(), Z.green(), Z.blue(), Math.round(Z.alpha() * 255)]
                    } else throw Error("Expected valid noise or background to create a new input image");
                    delete G.buffer
                } else throw Error("Expected valid width, height and channels to create a new input image");
            if (_0.defined(Q.text))
                if (_0.object(Q.text) && _0.string(Q.text.text)) {
                    if (G.textValue = Q.text.text, _0.defined(Q.text.height) && _0.defined(Q.text.dpi)) throw Error("Expected only one of dpi or height");
                    if (_0.defined(Q.text.font))
                        if (_0.string(Q.text.font)) G.textFont = Q.text.font;
                        else throw _0.invalidParameterError("text.font", "string", Q.text.font);
                    if (_0.defined(Q.text.fontfile))
                        if (_0.string(Q.text.fontfile)) G.textFontfile = Q.text.fontfile;
                        else throw _0.invalidParameterError("text.fontfile", "string", Q.text.fontfile);
                    if (_0.defined(Q.text.width))
                        if (_0.integer(Q.text.width) && Q.text.width > 0) G.textWidth = Q.text.width;
                        else throw _0.invalidParameterError("text.width", "positive integer", Q.text.width);
                    if (_0.defined(Q.text.height))
                        if (_0.integer(Q.text.height) && Q.text.height > 0) G.textHeight = Q.text.height;
                        else throw _0.invalidParameterError("text.height", "positive integer", Q.text.height);
                    if (_0.defined(Q.text.align))
                        if (_0.string(Q.text.align) && _0.string(this.constructor.align[Q.text.align])) G.textAlign = this.constructor.align[Q.text.align];
                        else throw _0.invalidParameterError("text.align", "valid alignment", Q.text.align);
                    if (_0.defined(Q.text.justify))
                        if (_0.bool(Q.text.justify)) G.textJustify = Q.text.justify;
                        else throw _0.invalidParameterError("text.justify", "boolean", Q.text.justify);
                    if (_0.defined(Q.text.dpi))
                        if (_0.integer(Q.text.dpi) && _0.inRange(Q.text.dpi, 1, 1e6)) G.textDpi = Q.text.dpi;
                        else throw _0.invalidParameterError("text.dpi", "integer between 1 and 1000000", Q.text.dpi);
                    if (_0.defined(Q.text.rgba))
                        if (_0.bool(Q.text.rgba)) G.textRgba = Q.text.rgba;
                        else throw _0.invalidParameterError("text.rgba", "bool", Q.text.rgba);
                    if (_0.defined(Q.text.spacing))
                        if (_0.integer(Q.text.spacing) && _0.inRange(Q.text.spacing, -1e6, 1e6)) G.textSpacing = Q.text.spacing;
                        else throw _0.invalidParameterError("text.spacing", "integer between -1000000 and 1000000", Q.text.spacing);
                    if (_0.defined(Q.text.wrap))
                        if (_0.string(Q.text.wrap) && _0.inArray(Q.text.wrap, ["word", "char", "word-char", "none"])) G.textWrap = Q.text.wrap;
                        else throw _0.invalidParameterError("text.wrap", "one of: word, char, word-char, none", Q.text.wrap);
                    delete G.buffer
                } else throw Error("Expected a valid string to create an image with text.")
        } else if (_0.defined(Q)) throw Error("Invalid input options " + Q);
        return G
    }

    function KN6(A, Q, B) {
        if (Array.isArray(this.options.input.buffer))
            if (_0.buffer(A)) {
                if (this.options.input.buffer.length === 0) this.on("finish", () => {
                    this.streamInFinished = !0
                });
                this.options.input.buffer.push(A), B()
            } else B(Error("Non-Buffer data on Writable Stream"));
        else B(Error("Unexpected data on Writable Stream"))
    }

    function DN6() {
        if (this._isStreamInput()) this.options.input.buffer = Buffer.concat(this.options.input.buffer)
    }

    function HN6() {
        return Array.isArray(this.options.input.buffer)
    }

    function CN6(A) {
        let Q = Error();
        if (_0.fn(A)) {
            if (this._isStreamInput()) this.on("finish", () => {
                this._flattenBufferIn(), Mp.metadata(this.options, (B, G) => {
                    if (B) A(_0.nativeError(B, Q));
                    else A(null, G)
                })
            });
            else Mp.metadata(this.options, (B, G) => {
                if (B) A(_0.nativeError(B, Q));
                else A(null, G)
            });
            return this
        } else if (this._isStreamInput()) return new Promise((B, G) => {
            let Z = () => {
                this._flattenBufferIn(), Mp.metadata(this.options, (I, Y) => {
                    if (I) G(_0.nativeError(I, Q));
                    else B(Y)
                })
            };
            if (this.writableFinished) Z();
            else this.once("finish", Z)
        });
        else return new Promise((B, G) => {
            Mp.metadata(this.options, (Z, I) => {
                if (Z) G(_0.nativeError(Z, Q));
                else B(I)
            })
        })
    }

    function EN6(A) {
        let Q = Error();
        if (_0.fn(A)) {
            if (this._isStreamInput()) this.on("finish", () => {
                this._flattenBufferIn(), Mp.stats(this.options, (B, G) => {
                    if (B) A(_0.nativeError(B, Q));
                    else A(null, G)
                })
            });
            else Mp.stats(this.options, (B, G) => {
                if (B) A(_0.nativeError(B, Q));
                else A(null, G)
            });
            return this
        } else if (this._isStreamInput()) return new Promise((B, G) => {
            this.on("finish", function() {
                this._flattenBufferIn(), Mp.stats(this.options, (Z, I) => {
                    if (Z) G(_0.nativeError(Z, Q));
                    else B(I)
                })
            })
        });
        else return new Promise((B, G) => {
            Mp.stats(this.options, (Z, I) => {
                if (Z) G(_0.nativeError(Z, Q));
                else B(I)
            })
        })
    }
    dPB.exports = function(A) {
        Object.assign(A.prototype, {
            _inputOptionsFromObject: mPB,
            _createInputDescriptor: VN6,
            _write: KN6,
            _flattenBufferIn: DN6,
            _isStreamInput: HN6,
            metadata: CN6,
            stats: EN6
        }), A.align = FN6
    }
});
var sPB = U((Co7, aPB) => {
    var t2 = f_(),
        lPB = {
            center: 0,
            centre: 0,
            north: 1,
            east: 2,
            south: 3,
            west: 4,
            northeast: 5,
            southeast: 6,
            southwest: 7,
            northwest: 8
        },
        iPB = {
            top: 1,
            right: 2,
            bottom: 3,
            left: 4,
            "right top": 5,
            "right bottom": 6,
            "left bottom": 7,
            "left top": 8
        },
        pPB = {
            background: "background",
            copy: "copy",
            repeat: "repeat",
            mirror: "mirror"
        },
        nPB = {
            entropy: 16,
            attention: 17
        },
        Ud1 = {
            nearest: "nearest",
            linear: "linear",
            cubic: "cubic",
            mitchell: "mitchell",
            lanczos2: "lanczos2",
            lanczos3: "lanczos3"
        },
        zN6 = {
            contain: "contain",
            cover: "cover",
            fill: "fill",
            inside: "inside",
            outside: "outside"
        },
        UN6 = {
            contain: "embed",
            cover: "crop",
            fill: "ignore_aspect",
            inside: "max",
            outside: "min"
        };

    function $d1(A) {
        return A.angle % 360 !== 0 || A.useExifOrientation === !0 || A.rotationAngle !== 0
    }

    function frA(A) {
        return A.width !== -1 || A.height !== -1
    }

    function $N6(A, Q, B) {
        if (frA(this.options)) this.options.debuglog("ignoring previous resize options");
        if (this.options.widthPost !== -1) this.options.debuglog("operation order will be: extract, resize, extract");
        if (t2.defined(A))
            if (t2.object(A) && !t2.defined(B)) B = A;
            else if (t2.integer(A) && A > 0) this.options.width = A;
        else throw t2.invalidParameterError("width", "positive integer", A);
        else this.options.width = -1;
        if (t2.defined(Q))
            if (t2.integer(Q) && Q > 0) this.options.height = Q;
            else throw t2.invalidParameterError("height", "positive integer", Q);
        else this.options.height = -1;
        if (t2.object(B)) {
            if (t2.defined(B.width))
                if (t2.integer(B.width) && B.width > 0) this.options.width = B.width;
                else throw t2.invalidParameterError("width", "positive integer", B.width);
            if (t2.defined(B.height))
                if (t2.integer(B.height) && B.height > 0) this.options.height = B.height;
                else throw t2.invalidParameterError("height", "positive integer", B.height);
            if (t2.defined(B.fit)) {
                let G = UN6[B.fit];
                if (t2.string(G)) this.options.canvas = G;
                else throw t2.invalidParameterError("fit", "valid fit", B.fit)
            }
            if (t2.defined(B.position)) {
                let G = t2.integer(B.position) ? B.position : nPB[B.position] || iPB[B.position] || lPB[B.position];
                if (t2.integer(G) && (t2.inRange(G, 0, 8) || t2.inRange(G, 16, 17))) this.options.position = G;
                else throw t2.invalidParameterError("position", "valid position/gravity/strategy", B.position)
            }
            if (this._setBackgroundColourOption("resizeBackground", B.background), t2.defined(B.kernel))
                if (t2.string(Ud1[B.kernel])) this.options.kernel = Ud1[B.kernel];
                else throw t2.invalidParameterError("kernel", "valid kernel name", B.kernel);
            if (t2.defined(B.withoutEnlargement)) this._setBooleanOption("withoutEnlargement", B.withoutEnlargement);
            if (t2.defined(B.withoutReduction)) this._setBooleanOption("withoutReduction", B.withoutReduction);
            if (t2.defined(B.fastShrinkOnLoad)) this._setBooleanOption("fastShrinkOnLoad", B.fastShrinkOnLoad)
        }
        if ($d1(this.options) && frA(this.options)) this.options.rotateBeforePreExtract = !0;
        return this
    }

    function wN6(A) {
        if (t2.integer(A) && A > 0) this.options.extendTop = A, this.options.extendBottom = A, this.options.extendLeft = A, this.options.extendRight = A;
        else if (t2.object(A)) {
            if (t2.defined(A.top))
                if (t2.integer(A.top) && A.top >= 0) this.options.extendTop = A.top;
                else throw t2.invalidParameterError("top", "positive integer", A.top);
            if (t2.defined(A.bottom))
                if (t2.integer(A.bottom) && A.bottom >= 0) this.options.extendBottom = A.bottom;
                else throw t2.invalidParameterError("bottom", "positive integer", A.bottom);
            if (t2.defined(A.left))
                if (t2.integer(A.left) && A.left >= 0) this.options.extendLeft = A.left;
                else throw t2.invalidParameterError("left", "positive integer", A.left);
            if (t2.defined(A.right))
                if (t2.integer(A.right) && A.right >= 0) this.options.extendRight = A.right;
                else throw t2.invalidParameterError("right", "positive integer", A.right);
            if (this._setBackgroundColourOption("extendBackground", A.background), t2.defined(A.extendWith))
                if (t2.string(pPB[A.extendWith])) this.options.extendWith = pPB[A.extendWith];
                else throw t2.invalidParameterError("extendWith", "one of: background, copy, repeat, mirror", A.extendWith)
        } else throw t2.invalidParameterError("extend", "integer or object", A);
        return this
    }

    function qN6(A) {
        let Q = frA(this.options) || this.options.widthPre !== -1 ? "Post" : "Pre";
        if (this.options[`width${Q}`] !== -1) this.options.debuglog("ignoring previous extract options");
        if (["left", "top", "width", "height"].forEach(function(B) {
                let G = A[B];
                if (t2.integer(G) && G >= 0) this.options[B + (B === "left" || B === "top" ? "Offset" : "") + Q] = G;
                else throw t2.invalidParameterError(B, "integer", G)
            }, this), $d1(this.options) && !frA(this.options)) {
            if (this.options.widthPre === -1 || this.options.widthPost === -1) this.options.rotateBeforePreExtract = !0
        }
        return this
    }

    function NN6(A) {
        if (this.options.trimThreshold = 10, t2.defined(A))
            if (t2.object(A)) {
                if (t2.defined(A.background)) this._setBackgroundColourOption("trimBackground", A.background);
                if (t2.defined(A.threshold))
                    if (t2.number(A.threshold) && A.threshold >= 0) this.options.trimThreshold = A.threshold;
                    else throw t2.invalidParameterError("threshold", "positive number", A.threshold);
                if (t2.defined(A.lineArt)) this._setBooleanOption("trimLineArt", A.lineArt)
            } else throw t2.invalidParameterError("trim", "object", A);
        if ($d1(this.options)) this.options.rotateBeforePreExtract = !0;
        return this
    }
    aPB.exports = function(A) {
        Object.assign(A.prototype, {
            resize: $N6,
            extend: wN6,
            extract: qN6,
            trim: NN6
        }), A.gravity = lPB, A.strategy = nPB, A.kernel = Ud1, A.fit = zN6, A.position = iPB
    }
});
var oPB = U((Eo7, rPB) => {
    var MG = f_(),
        wd1 = {
            clear: "clear",
            source: "source",
            over: "over",
            in: "in",
            out: "out",
            atop: "atop",
            dest: "dest",
            "dest-over": "dest-over",
            "dest-in": "dest-in",
            "dest-out": "dest-out",
            "dest-atop": "dest-atop",
            xor: "xor",
            add: "add",
            saturate: "saturate",
            multiply: "multiply",
            screen: "screen",
            overlay: "overlay",
            darken: "darken",
            lighten: "lighten",
            "colour-dodge": "colour-dodge",
            "color-dodge": "colour-dodge",
            "colour-burn": "colour-burn",
            "color-burn": "colour-burn",
            "hard-light": "hard-light",
            "soft-light": "soft-light",
            difference: "difference",
            exclusion: "exclusion"
        };

    function LN6(A) {
        if (!Array.isArray(A)) throw MG.invalidParameterError("images to composite", "array", A);
        return this.options.composite = A.map((Q) => {
            if (!MG.object(Q)) throw MG.invalidParameterError("image to composite", "object", Q);
            let B = this._inputOptionsFromObject(Q),
                G = {
                    input: this._createInputDescriptor(Q.input, B, {
                        allowStream: !1
                    }),
                    blend: "over",
                    tile: !1,
                    left: 0,
                    top: 0,
                    hasOffset: !1,
                    gravity: 0,
                    premultiplied: !1
                };
            if (MG.defined(Q.blend))
                if (MG.string(wd1[Q.blend])) G.blend = wd1[Q.blend];
                else throw MG.invalidParameterError("blend", "valid blend name", Q.blend);
            if (MG.defined(Q.tile))
                if (MG.bool(Q.tile)) G.tile = Q.tile;
                else throw MG.invalidParameterError("tile", "boolean", Q.tile);
            if (MG.defined(Q.left))
                if (MG.integer(Q.left)) G.left = Q.left;
                else throw MG.invalidParameterError("left", "integer", Q.left);
            if (MG.defined(Q.top))
                if (MG.integer(Q.top)) G.top = Q.top;
                else throw MG.invalidParameterError("top", "integer", Q.top);
            if (MG.defined(Q.top) !== MG.defined(Q.left)) throw Error("Expected both left and top to be set");
            else G.hasOffset = MG.integer(Q.top) && MG.integer(Q.left);
            if (MG.defined(Q.gravity))
                if (MG.integer(Q.gravity) && MG.inRange(Q.gravity, 0, 8)) G.gravity = Q.gravity;
                else if (MG.string(Q.gravity) && MG.integer(this.constructor.gravity[Q.gravity])) G.gravity = this.constructor.gravity[Q.gravity];
            else throw MG.invalidParameterError("gravity", "valid gravity", Q.gravity);
            if (MG.defined(Q.premultiplied))
                if (MG.bool(Q.premultiplied)) G.premultiplied = Q.premultiplied;
                else throw MG.invalidParameterError("premultiplied", "boolean", Q.premultiplied);
            return G
        }), this
    }
    rPB.exports = function(A) {
        A.prototype.composite = LN6, A.blend = wd1
    }
});
var AjB = U((zo7, ePB) => {
    var MN6 = brA(),
        C0 = f_(),
        tPB = {
            integer: "integer",
            float: "float",
            approximate: "approximate"
        };

    function ON6(A, Q) {
        if (this.options.useExifOrientation || this.options.angle || this.options.rotationAngle) this.options.debuglog("ignoring previous rotate options");
        if (!C0.defined(A)) this.options.useExifOrientation = !0;
        else if (C0.integer(A) && !(A % 90)) this.options.angle = A;
        else if (C0.number(A)) {
            if (this.options.rotationAngle = A, C0.object(Q) && Q.background) {
                let B = MN6(Q.background);
                this.options.rotationBackground = [B.red(), B.green(), B.blue(), Math.round(B.alpha() * 255)]
            }
        } else throw C0.invalidParameterError("angle", "numeric", A);
        return this
    }

    function RN6(A) {
        return this.options.flip = C0.bool(A) ? A : !0, this
    }

    function TN6(A) {
        return this.options.flop = C0.bool(A) ? A : !0, this
    }

    function PN6(A, Q) {
        let B = [].concat(...A);
        if (B.length === 4 && B.every(C0.number)) this.options.affineMatrix = B;
        else throw C0.invalidParameterError("matrix", "1x4 or 2x2 array", A);
        if (C0.defined(Q))
            if (C0.object(Q)) {
                if (this._setBackgroundColourOption("affineBackground", Q.background), C0.defined(Q.idx))
                    if (C0.number(Q.idx)) this.options.affineIdx = Q.idx;
                    else throw C0.invalidParameterError("options.idx", "number", Q.idx);
                if (C0.defined(Q.idy))
                    if (C0.number(Q.idy)) this.options.affineIdy = Q.idy;
                    else throw C0.invalidParameterError("options.idy", "number", Q.idy);
                if (C0.defined(Q.odx))
                    if (C0.number(Q.odx)) this.options.affineOdx = Q.odx;
                    else throw C0.invalidParameterError("options.odx", "number", Q.odx);
                if (C0.defined(Q.ody))
                    if (C0.number(Q.ody)) this.options.affineOdy = Q.ody;
                    else throw C0.invalidParameterError("options.ody", "number", Q.ody);
                if (C0.defined(Q.interpolator))
                    if (C0.inArray(Q.interpolator, Object.values(this.constructor.interpolators))) this.options.affineInterpolator = Q.interpolator;
                    else throw C0.invalidParameterError("options.interpolator", "valid interpolator name", Q.interpolator)
            } else throw C0.invalidParameterError("options", "object", Q);
        return this
    }

    function jN6(A, Q, B) {
        if (!C0.defined(A)) this.options.sharpenSigma = -1;
        else if (C0.bool(A)) this.options.sharpenSigma = A ? -1 : 0;
        else if (C0.number(A) && C0.inRange(A, 0.01, 1e4)) {
            if (this.options.sharpenSigma = A, C0.defined(Q))
                if (C0.number(Q) && C0.inRange(Q, 0, 1e4)) this.options.sharpenM1 = Q;
                else throw C0.invalidParameterError("flat", "number between 0 and 10000", Q);
            if (C0.defined(B))
                if (C0.number(B) && C0.inRange(B, 0, 1e4)) this.options.sharpenM2 = B;
                else throw C0.invalidParameterError("jagged", "number between 0 and 10000", B)
        } else if (C0.plainObject(A)) {
            if (C0.number(A.sigma) && C0.inRange(A.sigma, 0.000001, 10)) this.options.sharpenSigma = A.sigma;
            else throw C0.invalidParameterError("options.sigma", "number between 0.000001 and 10", A.sigma);
            if (C0.defined(A.m1))
                if (C0.number(A.m1) && C0.inRange(A.m1, 0, 1e6)) this.options.sharpenM1 = A.m1;
                else throw C0.invalidParameterError("options.m1", "number between 0 and 1000000", A.m1);
            if (C0.defined(A.m2))
                if (C0.number(A.m2) && C0.inRange(A.m2, 0, 1e6)) this.options.sharpenM2 = A.m2;
                else throw C0.invalidParameterError("options.m2", "number between 0 and 1000000", A.m2);
            if (C0.defined(A.x1))
                if (C0.number(A.x1) && C0.inRange(A.x1, 0, 1e6)) this.options.sharpenX1 = A.x1;
                else throw C0.invalidParameterError("options.x1", "number between 0 and 1000000", A.x1);
            if (C0.defined(A.y2))
                if (C0.number(A.y2) && C0.inRange(A.y2, 0, 1e6)) this.options.sharpenY2 = A.y2;
                else throw C0.invalidParameterError("options.y2", "number between 0 and 1000000", A.y2);
            if (C0.defined(A.y3))
                if (C0.number(A.y3) && C0.inRange(A.y3, 0, 1e6)) this.options.sharpenY3 = A.y3;
                else throw C0.invalidParameterError("options.y3", "number between 0 and 1000000", A.y3)
        } else throw C0.invalidParameterError("sigma", "number between 0.01 and 10000", A);
        return this
    }

    function SN6(A) {
        if (!C0.defined(A)) this.options.medianSize = 3;
        else if (C0.integer(A) && C0.inRange(A, 1, 1000)) this.options.medianSize = A;
        else throw C0.invalidParameterError("size", "integer between 1 and 1000", A);
        return this
    }

    function _N6(A) {
        let Q;
        if (C0.number(A)) Q = A;
        else if (C0.plainObject(A)) {
            if (!C0.number(A.sigma)) throw C0.invalidParameterError("options.sigma", "number between 0.3 and 1000", Q);
            if (Q = A.sigma, "precision" in A)
                if (C0.string(tPB[A.precision])) this.options.precision = tPB[A.precision];
                else throw C0.invalidParameterError("precision", "one of: integer, float, approximate", A.precision);
            if ("minAmplitude" in A)
                if (C0.number(A.minAmplitude) && C0.inRange(A.minAmplitude, 0.001, 1)) this.options.minAmpl = A.minAmplitude;
                else throw C0.invalidParameterError("minAmplitude", "number between 0.001 and 1", A.minAmplitude)
        }
        if (!C0.defined(A)) this.options.blurSigma = -1;
        else if (C0.bool(A)) this.options.blurSigma = A ? -1 : 0;
        else if (C0.number(Q) && C0.inRange(Q, 0.3, 1000)) this.options.blurSigma = Q;
        else throw C0.invalidParameterError("sigma", "number between 0.3 and 1000", Q);
        return this
    }

    function kN6(A) {
        if (this.options.flatten = C0.bool(A) ? A : !0, C0.object(A)) this._setBackgroundColourOption("flattenBackground", A.background);
        return this
    }

    function yN6() {
        return this.options.unflatten = !0, this
    }

    function xN6(A, Q) {
        if (!C0.defined(A)) this.options.gamma = 2.2;
        else if (C0.number(A) && C0.inRange(A, 1, 3)) this.options.gamma = A;
        else throw C0.invalidParameterError("gamma", "number between 1.0 and 3.0", A);
        if (!C0.defined(Q)) this.options.gammaOut = this.options.gamma;
        else if (C0.number(Q) && C0.inRange(Q, 1, 3)) this.options.gammaOut = Q;
        else throw C0.invalidParameterError("gammaOut", "number between 1.0 and 3.0", Q);
        return this
    }

    function vN6(A) {
        if (this.options.negate = C0.bool(A) ? A : !0, C0.plainObject(A) && "alpha" in A)
            if (!C0.bool(A.alpha)) throw C0.invalidParameterError("alpha", "should be boolean value", A.alpha);
            else this.options.negateAlpha = A.alpha;
        return this
    }

    function bN6(A) {
        if (C0.plainObject(A)) {
            if (C0.defined(A.lower))
                if (C0.number(A.lower) && C0.inRange(A.lower, 0, 99)) this.options.normaliseLower = A.lower;
                else throw C0.invalidParameterError("lower", "number between 0 and 99", A.lower);
            if (C0.defined(A.upper))
                if (C0.number(A.upper) && C0.inRange(A.upper, 1, 100)) this.options.normaliseUpper = A.upper;
                else throw C0.invalidParameterError("upper", "number between 1 and 100", A.upper)
        }
        if (this.options.normaliseLower >= this.options.normaliseUpper) throw C0.invalidParameterError("range", "lower to be less than upper", `${this.options.normaliseLower} >= ${this.options.normaliseUpper}`);
        return this.options.normalise = !0, this
    }

    function fN6(A) {
        return this.normalise(A)
    }

    function hN6(A) {
        if (C0.plainObject(A)) {
            if (C0.integer(A.width) && A.width > 0) this.options.claheWidth = A.width;
            else throw C0.invalidParameterError("width", "integer greater than zero", A.width);
            if (C0.integer(A.height) && A.height > 0) this.options.claheHeight = A.height;
            else throw C0.invalidParameterError("height", "integer greater than zero", A.height);
            if (C0.defined(A.maxSlope))
                if (C0.integer(A.maxSlope) && C0.inRange(A.maxSlope, 0, 100)) this.options.claheMaxSlope = A.maxSlope;
                else throw C0.invalidParameterError("maxSlope", "integer between 0 and 100", A.maxSlope)
        } else throw C0.invalidParameterError("options", "plain object", A);
        return this
    }

    function gN6(A) {
        if (!C0.object(A) || !Array.isArray(A.kernel) || !C0.integer(A.width) || !C0.integer(A.height) || !C0.inRange(A.width, 3, 1001) || !C0.inRange(A.height, 3, 1001) || A.height * A.width !== A.kernel.length) throw Error("Invalid convolution kernel");
        if (!C0.integer(A.scale)) A.scale = A.kernel.reduce(function(Q, B) {
            return Q + B
        }, 0);
        if (A.scale < 1) A.scale = 1;
        if (!C0.integer(A.offset)) A.offset = 0;
        return this.options.convKernel = A, this
    }

    function uN6(A, Q) {
        if (!C0.defined(A)) this.options.threshold = 128;
        else if (C0.bool(A)) this.options.threshold = A ? 128 : 0;
        else if (C0.integer(A) && C0.inRange(A, 0, 255)) this.options.threshold = A;
        else throw C0.invalidParameterError("threshold", "integer between 0 and 255", A);
        if (!C0.object(Q) || Q.greyscale === !0 || Q.grayscale === !0) this.options.thresholdGrayscale = !0;
        else this.options.thresholdGrayscale = !1;
        return this
    }

    function mN6(A, Q, B) {
        if (this.options.boolean = this._createInputDescriptor(A, B), C0.string(Q) && C0.inArray(Q, ["and", "or", "eor"])) this.options.booleanOp = Q;
        else throw C0.invalidParameterError("operator", "one of: and, or, eor", Q);
        return this
    }

    function dN6(A, Q) {
        if (!C0.defined(A) && C0.number(Q)) A = 1;
        else if (C0.number(A) && !C0.defined(Q)) Q = 0;
        if (!C0.defined(A)) this.options.linearA = [];
        else if (C0.number(A)) this.options.linearA = [A];
        else if (Array.isArray(A) && A.length && A.every(C0.number)) this.options.linearA = A;
        else throw C0.invalidParameterError("a", "number or array of numbers", A);
        if (!C0.defined(Q)) this.options.linearB = [];
        else if (C0.number(Q)) this.options.linearB = [Q];
        else if (Array.isArray(Q) && Q.length && Q.every(C0.number)) this.options.linearB = Q;
        else throw C0.invalidParameterError("b", "number or array of numbers", Q);
        if (this.options.linearA.length !== this.options.linearB.length) throw Error("Expected a and b to be arrays of the same length");
        return this
    }

    function cN6(A) {
        if (!Array.isArray(A)) throw C0.invalidParameterError("inputMatrix", "array", A);
        if (A.length !== 3 && A.length !== 4) throw C0.invalidParameterError("inputMatrix", "3x3 or 4x4 array", A.length);
        let Q = A.flat().map(Number);
        if (Q.length !== 9 && Q.length !== 16) throw C0.invalidParameterError("inputMatrix", "cardinality of 9 or 16", Q.length);
        return this.options.recombMatrix = Q, this
    }

    function pN6(A) {
        if (!C0.plainObject(A)) throw C0.invalidParameterError("options", "plain object", A);
        if ("brightness" in A)
            if (C0.number(A.brightness) && A.brightness >= 0) this.options.brightness = A.brightness;
            else throw C0.invalidParameterError("brightness", "number above zero", A.brightness);
        if ("saturation" in A)
            if (C0.number(A.saturation) && A.saturation >= 0) this.options.saturation = A.saturation;
            else throw C0.invalidParameterError("saturation", "number above zero", A.saturation);
        if ("hue" in A)
            if (C0.integer(A.hue)) this.options.hue = A.hue % 360;
            else throw C0.invalidParameterError("hue", "number", A.hue);
        if ("lightness" in A)
            if (C0.number(A.lightness)) this.options.lightness = A.lightness;
            else throw C0.invalidParameterError("lightness", "number", A.lightness);
        return this
    }