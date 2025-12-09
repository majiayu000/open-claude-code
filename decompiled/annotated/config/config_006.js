/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: config_006.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (20次) = moduleWrapper(fn) - CommonJS module wrapper
 *   L        (1次) = lazyLoader(fn) - Lazy module loader
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: config
 * File: 6/9
 * Lines: 343918 - 345417 (1500 lines)
 * Original file: cli.js
 */

var x50 = U((w9Z, jy2) => {
    var bRA = IWA(),
        k50 = IC();

    function Py2(A, Q) {
        var B = [];
        return A[Q].forEach(function(G) {
            var Z = B.length;
            B.forEach(function(I, Y) {
                if (I.tag === G.tag && I.kind === G.kind && I.multi === G.multi) Z = Y
            }), B[Z] = G
        }), B
    }

    function wu5() {
        var A = {
                scalar: {},
                sequence: {},
                mapping: {},
                fallback: {},
                multi: {
                    scalar: [],
                    sequence: [],
                    mapping: [],
                    fallback: []
                }
            },
            Q, B;

        function G(Z) {
            if (Z.multi) A.multi[Z.kind].push(Z), A.multi.fallback.push(Z);
            else A[Z.kind][Z.tag] = A.fallback[Z.tag] = Z
        }
        for (Q = 0, B = arguments.length; Q < B; Q += 1) arguments[Q].forEach(G);
        return A
    }

    function y50(A) {
        return this.extend(A)
    }
    y50.prototype.extend = function(Q) {
        var B = [],
            G = [];
        if (Q instanceof k50) G.push(Q);
        else if (Array.isArray(Q)) G = G.concat(Q);
        else if (Q && (Array.isArray(Q.implicit) || Array.isArray(Q.explicit))) {
            if (Q.implicit) B = B.concat(Q.implicit);
            if (Q.explicit) G = G.concat(Q.explicit)
        } else throw new bRA("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
        B.forEach(function(I) {
            if (!(I instanceof k50)) throw new bRA("Specified list of YAML types (or a single Type object) contains a non-Type object.");
            if (I.loadKind && I.loadKind !== "scalar") throw new bRA("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
            if (I.multi) throw new bRA("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")
        }), G.forEach(function(I) {
            if (!(I instanceof k50)) throw new bRA("Specified list of YAML types (or a single Type object) contains a non-Type object.")
        });
        var Z = Object.create(y50.prototype);
        return Z.implicit = (this.implicit || []).concat(B), Z.explicit = (this.explicit || []).concat(G), Z.compiledImplicit = Py2(Z, "implicit"), Z.compiledExplicit = Py2(Z, "explicit"), Z.compiledTypeMap = wu5(Z.compiledImplicit, Z.compiledExplicit), Z
    };
    jy2.exports = y50
});
var v50 = U((q9Z, Sy2) => {
    var qu5 = IC();
    Sy2.exports = new qu5("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function(A) {
            return A !== null ? A : ""
        }
    })
});
var b50 = U((N9Z, _y2) => {
    var Nu5 = IC();
    _y2.exports = new Nu5("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function(A) {
            return A !== null ? A : []
        }
    })
});
var f50 = U((L9Z, ky2) => {
    var Lu5 = IC();
    ky2.exports = new Lu5("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function(A) {
            return A !== null ? A : {}
        }
    })
});
var h50 = U((M9Z, yy2) => {
    var Mu5 = x50();
    yy2.exports = new Mu5({
        explicit: [v50(), b50(), f50()]
    })
});
var g50 = U((O9Z, xy2) => {
    var Ou5 = IC();

    function Ru5(A) {
        if (A === null) return !0;
        var Q = A.length;
        return Q === 1 && A === "~" || Q === 4 && (A === "null" || A === "Null" || A === "NULL")
    }

    function Tu5() {
        return null
    }

    function Pu5(A) {
        return A === null
    }
    xy2.exports = new Ou5("tag:yaml.org,2002:null", {
        kind: "scalar",
        resolve: Ru5,
        construct: Tu5,
        predicate: Pu5,
        represent: {
            canonical: function() {
                return "~"
            },
            lowercase: function() {
                return "null"
            },
            uppercase: function() {
                return "NULL"
            },
            camelcase: function() {
                return "Null"
            },
            empty: function() {
                return ""
            }
        },
        defaultStyle: "lowercase"
    })
});
var u50 = U((R9Z, vy2) => {
    var ju5 = IC();

    function Su5(A) {
        if (A === null) return !1;
        var Q = A.length;
        return Q === 4 && (A === "true" || A === "True" || A === "TRUE") || Q === 5 && (A === "false" || A === "False" || A === "FALSE")
    }

    function _u5(A) {
        return A === "true" || A === "True" || A === "TRUE"
    }

    function ku5(A) {
        return Object.prototype.toString.call(A) === "[object Boolean]"
    }
    vy2.exports = new ju5("tag:yaml.org,2002:bool", {
        kind: "scalar",
        resolve: Su5,
        construct: _u5,
        predicate: ku5,
        represent: {
            lowercase: function(A) {
                return A ? "true" : "false"
            },
            uppercase: function(A) {
                return A ? "TRUE" : "FALSE"
            },
            camelcase: function(A) {
                return A ? "True" : "False"
            }
        },
        defaultStyle: "lowercase"
    })
});
var m50 = U((T9Z, by2) => {
    var yu5 = ZWA(),
        xu5 = IC();

    function vu5(A) {
        return 48 <= A && A <= 57 || 65 <= A && A <= 70 || 97 <= A && A <= 102
    }

    function bu5(A) {
        return 48 <= A && A <= 55
    }

    function fu5(A) {
        return 48 <= A && A <= 57
    }

    function hu5(A) {
        if (A === null) return !1;
        var Q = A.length,
            B = 0,
            G = !1,
            Z;
        if (!Q) return !1;
        if (Z = A[B], Z === "-" || Z === "+") Z = A[++B];
        if (Z === "0") {
            if (B + 1 === Q) return !0;
            if (Z = A[++B], Z === "b") {
                B++;
                for (; B < Q; B++) {
                    if (Z = A[B], Z === "_") continue;
                    if (Z !== "0" && Z !== "1") return !1;
                    G = !0
                }
                return G && Z !== "_"
            }
            if (Z === "x") {
                B++;
                for (; B < Q; B++) {
                    if (Z = A[B], Z === "_") continue;
                    if (!vu5(A.charCodeAt(B))) return !1;
                    G = !0
                }
                return G && Z !== "_"
            }
            if (Z === "o") {
                B++;
                for (; B < Q; B++) {
                    if (Z = A[B], Z === "_") continue;
                    if (!bu5(A.charCodeAt(B))) return !1;
                    G = !0
                }
                return G && Z !== "_"
            }
        }
        if (Z === "_") return !1;
        for (; B < Q; B++) {
            if (Z = A[B], Z === "_") continue;
            if (!fu5(A.charCodeAt(B))) return !1;
            G = !0
        }
        if (!G || Z === "_") return !1;
        return !0
    }

    function gu5(A) {
        var Q = A,
            B = 1,
            G;
        if (Q.indexOf("_") !== -1) Q = Q.replace(/_/g, "");
        if (G = Q[0], G === "-" || G === "+") {
            if (G === "-") B = -1;
            Q = Q.slice(1), G = Q[0]
        }
        if (Q === "0") return 0;
        if (G === "0") {
            if (Q[1] === "b") return B * parseInt(Q.slice(2), 2);
            if (Q[1] === "x") return B * parseInt(Q.slice(2), 16);
            if (Q[1] === "o") return B * parseInt(Q.slice(2), 8)
        }
        return B * parseInt(Q, 10)
    }

    function uu5(A) {
        return Object.prototype.toString.call(A) === "[object Number]" && (A % 1 === 0 && !yu5.isNegativeZero(A))
    }
    by2.exports = new xu5("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: hu5,
        construct: gu5,
        predicate: uu5,
        represent: {
            binary: function(A) {
                return A >= 0 ? "0b" + A.toString(2) : "-0b" + A.toString(2).slice(1)
            },
            octal: function(A) {
                return A >= 0 ? "0o" + A.toString(8) : "-0o" + A.toString(8).slice(1)
            },
            decimal: function(A) {
                return A.toString(10)
            },
            hexadecimal: function(A) {
                return A >= 0 ? "0x" + A.toString(16).toUpperCase() : "-0x" + A.toString(16).toUpperCase().slice(1)
            }
        },
        defaultStyle: "decimal",
        styleAliases: {
            binary: [2, "bin"],
            octal: [8, "oct"],
            decimal: [10, "dec"],
            hexadecimal: [16, "hex"]
        }
    })
});
var d50 = U((P9Z, hy2) => {
    var fy2 = ZWA(),
        mu5 = IC(),
        du5 = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");

    function cu5(A) {
        if (A === null) return !1;
        if (!du5.test(A) || A[A.length - 1] === "_") return !1;
        return !0
    }

    function pu5(A) {
        var Q, B;
        if (Q = A.replace(/_/g, "").toLowerCase(), B = Q[0] === "-" ? -1 : 1, "+-".indexOf(Q[0]) >= 0) Q = Q.slice(1);
        if (Q === ".inf") return B === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
        else if (Q === ".nan") return NaN;
        return B * parseFloat(Q, 10)
    }
    var lu5 = /^[-+]?[0-9]+e/;

    function iu5(A, Q) {
        var B;
        if (isNaN(A)) switch (Q) {
            case "lowercase":
                return ".nan";
            case "uppercase":
                return ".NAN";
            case "camelcase":
                return ".NaN"
        } else if (Number.POSITIVE_INFINITY === A) switch (Q) {
            case "lowercase":
                return ".inf";
            case "uppercase":
                return ".INF";
            case "camelcase":
                return ".Inf"
        } else if (Number.NEGATIVE_INFINITY === A) switch (Q) {
            case "lowercase":
                return "-.inf";
            case "uppercase":
                return "-.INF";
            case "camelcase":
                return "-.Inf"
        } else if (fy2.isNegativeZero(A)) return "-0.0";
        return B = A.toString(10), lu5.test(B) ? B.replace("e", ".e") : B
    }

    function nu5(A) {
        return Object.prototype.toString.call(A) === "[object Number]" && (A % 1 !== 0 || fy2.isNegativeZero(A))
    }
    hy2.exports = new mu5("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: cu5,
        construct: pu5,
        predicate: nu5,
        represent: iu5,
        defaultStyle: "lowercase"
    })
});
var A51 = U((j9Z, gy2) => {
    gy2.exports = h50().extend({
        implicit: [g50(), u50(), m50(), d50()]
    })
});
var c50 = U((S9Z, dy2) => {
    var au5 = IC(),
        uy2 = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
        my2 = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");

    function su5(A) {
        if (A === null) return !1;
        if (uy2.exec(A) !== null) return !0;
        if (my2.exec(A) !== null) return !0;
        return !1
    }

    function ru5(A) {
        var Q, B, G, Z, I, Y, J, W = 0,
            X = null,
            F, V, K;
        if (Q = uy2.exec(A), Q === null) Q = my2.exec(A);
        if (Q === null) throw Error("Date resolve error");
        if (B = +Q[1], G = +Q[2] - 1, Z = +Q[3], !Q[4]) return new Date(Date.UTC(B, G, Z));
        if (I = +Q[4], Y = +Q[5], J = +Q[6], Q[7]) {
            W = Q[7].slice(0, 3);
            while (W.length < 3) W += "0";
            W = +W
        }
        if (Q[9]) {
            if (F = +Q[10], V = +(Q[11] || 0), X = (F * 60 + V) * 60000, Q[9] === "-") X = -X
        }
        if (K = new Date(Date.UTC(B, G, Z, I, Y, J, W)), X) K.setTime(K.getTime() - X);
        return K
    }

    function ou5(A) {
        return A.toISOString()
    }
    dy2.exports = new au5("tag:yaml.org,2002:timestamp", {
        kind: "scalar",
        resolve: su5,
        construct: ru5,
        instanceOf: Date,
        represent: ou5
    })
});
var p50 = U((_9Z, cy2) => {
    var tu5 = IC();

    function eu5(A) {
        return A === "<<" || A === null
    }
    cy2.exports = new tu5("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: eu5
    })
});
var i50 = U((k9Z, py2) => {
    var Am5 = IC(),
        l50 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;

    function Qm5(A) {
        if (A === null) return !1;
        var Q, B, G = 0,
            Z = A.length,
            I = l50;
        for (B = 0; B < Z; B++) {
            if (Q = I.indexOf(A.charAt(B)), Q > 64) continue;
            if (Q < 0) return !1;
            G += 6
        }
        return G % 8 === 0
    }

    function Bm5(A) {
        var Q, B, G = A.replace(/[\r\n=]/g, ""),
            Z = G.length,
            I = l50,
            Y = 0,
            J = [];
        for (Q = 0; Q < Z; Q++) {
            if (Q % 4 === 0 && Q) J.push(Y >> 16 & 255), J.push(Y >> 8 & 255), J.push(Y & 255);
            Y = Y << 6 | I.indexOf(G.charAt(Q))
        }
        if (B = Z % 4 * 6, B === 0) J.push(Y >> 16 & 255), J.push(Y >> 8 & 255), J.push(Y & 255);
        else if (B === 18) J.push(Y >> 10 & 255), J.push(Y >> 2 & 255);
        else if (B === 12) J.push(Y >> 4 & 255);
        return new Uint8Array(J)
    }

    function Gm5(A) {
        var Q = "",
            B = 0,
            G, Z, I = A.length,
            Y = l50;
        for (G = 0; G < I; G++) {
            if (G % 3 === 0 && G) Q += Y[B >> 18 & 63], Q += Y[B >> 12 & 63], Q += Y[B >> 6 & 63], Q += Y[B & 63];
            B = (B << 8) + A[G]
        }
        if (Z = I % 3, Z === 0) Q += Y[B >> 18 & 63], Q += Y[B >> 12 & 63], Q += Y[B >> 6 & 63], Q += Y[B & 63];
        else if (Z === 2) Q += Y[B >> 10 & 63], Q += Y[B >> 4 & 63], Q += Y[B << 2 & 63], Q += Y[64];
        else if (Z === 1) Q += Y[B >> 2 & 63], Q += Y[B << 4 & 63], Q += Y[64], Q += Y[64];
        return Q
    }

    function Zm5(A) {
        return Object.prototype.toString.call(A) === "[object Uint8Array]"
    }
    py2.exports = new Am5("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: Qm5,
        construct: Bm5,
        predicate: Zm5,
        represent: Gm5
    })
});
var n50 = U((y9Z, ly2) => {
    var Im5 = IC(),
        Ym5 = Object.prototype.hasOwnProperty,
        Jm5 = Object.prototype.toString;

    function Wm5(A) {
        if (A === null) return !0;
        var Q = [],
            B, G, Z, I, Y, J = A;
        for (B = 0, G = J.length; B < G; B += 1) {
            if (Z = J[B], Y = !1, Jm5.call(Z) !== "[object Object]") return !1;
            for (I in Z)
                if (Ym5.call(Z, I))
                    if (!Y) Y = !0;
                    else return !1;
            if (!Y) return !1;
            if (Q.indexOf(I) === -1) Q.push(I);
            else return !1
        }
        return !0
    }

    function Xm5(A) {
        return A !== null ? A : []
    }
    ly2.exports = new Im5("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: Wm5,
        construct: Xm5
    })
});
var a50 = U((x9Z, iy2) => {
    var Fm5 = IC(),
        Vm5 = Object.prototype.toString;

    function Km5(A) {
        if (A === null) return !0;
        var Q, B, G, Z, I, Y = A;
        I = Array(Y.length);
        for (Q = 0, B = Y.length; Q < B; Q += 1) {
            if (G = Y[Q], Vm5.call(G) !== "[object Object]") return !1;
            if (Z = Object.keys(G), Z.length !== 1) return !1;
            I[Q] = [Z[0], G[Z[0]]]
        }
        return !0
    }

    function Dm5(A) {
        if (A === null) return [];
        var Q, B, G, Z, I, Y = A;
        I = Array(Y.length);
        for (Q = 0, B = Y.length; Q < B; Q += 1) G = Y[Q], Z = Object.keys(G), I[Q] = [Z[0], G[Z[0]]];
        return I
    }
    iy2.exports = new Fm5("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: Km5,
        construct: Dm5
    })
});
var s50 = U((v9Z, ny2) => {
    var Hm5 = IC(),
        Cm5 = Object.prototype.hasOwnProperty;

    function Em5(A) {
        if (A === null) return !0;
        var Q, B = A;
        for (Q in B)
            if (Cm5.call(B, Q)) {
                if (B[Q] !== null) return !1
            } return !0
    }

    function zm5(A) {
        return A !== null ? A : {}
    }
    ny2.exports = new Hm5("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: Em5,
        construct: zm5
    })
});
var Q51 = U((b9Z, ay2) => {
    ay2.exports = A51().extend({
        implicit: [c50(), p50()],
        explicit: [i50(), n50(), a50(), s50()]
    })
});
var Fx2 = U((mm5, e50) => {
    var E0A = ZWA(),
        Qx2 = IWA(),
        Um5 = Oy2(),
        $m5 = Q51(),
        zn = Object.prototype.hasOwnProperty,
        B51 = 1,
        Bx2 = 2,
        Gx2 = 3,
        G51 = 4,
        r50 = 1,
        wm5 = 2,
        sy2 = 3,
        qm5 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
        Nm5 = /[\x85\u2028\u2029]/,
        Lm5 = /[,\[\]\{\}]/,
        Zx2 = /^(?:!|!!|![a-z\-]+!)$/i,
        Ix2 = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;

    function ry2(A) {
        return Object.prototype.toString.call(A)
    }

    function Ey(A) {
        return A === 10 || A === 13
    }

    function z0A(A) {
        return A === 9 || A === 32
    }

    function I$(A) {
        return A === 9 || A === 32 || A === 10 || A === 13
    }

    function YWA(A) {
        return A === 44 || A === 91 || A === 93 || A === 123 || A === 125
    }

    function Mm5(A) {
        var Q;
        if (48 <= A && A <= 57) return A - 48;
        if (Q = A | 32, 97 <= Q && Q <= 102) return Q - 97 + 10;
        return -1
    }

    function Om5(A) {
        if (A === 120) return 2;
        if (A === 117) return 4;
        if (A === 85) return 8;
        return 0
    }

    function Rm5(A) {
        if (48 <= A && A <= 57) return A - 48;
        return -1
    }

    function oy2(A) {
        return A === 48 ? "\x00" : A === 97 ? "\x07" : A === 98 ? "\b" : A === 116 ? "\t" : A === 9 ? "\t" : A === 110 ? `
` : A === 118 ? "\v" : A === 102 ? "\f" : A === 114 ? "\r" : A === 101 ? "\x1B" : A === 32 ? " " : A === 34 ? '"' : A === 47 ? "/" : A === 92 ? "\\" : A === 78 ? "" : A === 95 ? " " : A === 76 ? "\u2028" : A === 80 ? "\u2029" : ""
    }

    function Tm5(A) {
        if (A <= 65535) return String.fromCharCode(A);
        return String.fromCharCode((A - 65536 >> 10) + 55296, (A - 65536 & 1023) + 56320)
    }
    var Yx2 = Array(256),
        Jx2 = Array(256);
    for (Cn = 0; Cn < 256; Cn++) Yx2[Cn] = oy2(Cn) ? 1 : 0, Jx2[Cn] = oy2(Cn);
    var Cn;

    function Pm5(A, Q) {
        this.input = A, this.filename = Q.filename || null, this.schema = Q.schema || $m5, this.onWarning = Q.onWarning || null, this.legacy = Q.legacy || !1, this.json = Q.json || !1, this.listener = Q.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = A.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = []
    }

    function Wx2(A, Q) {
        var B = {
            name: A.filename,
            buffer: A.input.slice(0, -1),
            position: A.position,
            line: A.line,
            column: A.position - A.lineStart
        };
        return B.snippet = Um5(B), new Qx2(Q, B)
    }

    function C9(A, Q) {
        throw Wx2(A, Q)
    }

    function Z51(A, Q) {
        if (A.onWarning) A.onWarning.call(null, Wx2(A, Q))
    }
    var ty2 = {
        YAML: function(Q, B, G) {
            var Z, I, Y;
            if (Q.version !== null) C9(Q, "duplication of %YAML directive");
            if (G.length !== 1) C9(Q, "YAML directive accepts exactly one argument");
            if (Z = /^([0-9]+)\.([0-9]+)$/.exec(G[0]), Z === null) C9(Q, "ill-formed argument of the YAML directive");
            if (I = parseInt(Z[1], 10), Y = parseInt(Z[2], 10), I !== 1) C9(Q, "unacceptable YAML version of the document");
            if (Q.version = G[0], Q.checkLineBreaks = Y < 2, Y !== 1 && Y !== 2) Z51(Q, "unsupported YAML version of the document")
        },
        TAG: function(Q, B, G) {
            var Z, I;
            if (G.length !== 2) C9(Q, "TAG directive accepts exactly two arguments");
            if (Z = G[0], I = G[1], !Zx2.test(Z)) C9(Q, "ill-formed tag handle (first argument) of the TAG directive");
            if (zn.call(Q.tagMap, Z)) C9(Q, 'there is a previously declared suffix for "' + Z + '" tag handle');
            if (!Ix2.test(I)) C9(Q, "ill-formed tag prefix (second argument) of the TAG directive");
            try {
                I = decodeURIComponent(I)
            } catch (Y) {
                C9(Q, "tag prefix is malformed: " + I)
            }
            Q.tagMap[Z] = I
        }
    };

    function En(A, Q, B, G) {
        var Z, I, Y, J;
        if (Q < B) {
            if (J = A.input.slice(Q, B), G) {
                for (Z = 0, I = J.length; Z < I; Z += 1)
                    if (Y = J.charCodeAt(Z), !(Y === 9 || 32 <= Y && Y <= 1114111)) C9(A, "expected valid JSON character")
            } else if (qm5.test(J)) C9(A, "the stream contains non-printable characters");
            A.result += J
        }
    }

    function ey2(A, Q, B, G) {
        var Z, I, Y, J;
        if (!E0A.isObject(B)) C9(A, "cannot merge mappings; the provided source object is unacceptable");
        Z = Object.keys(B);
        for (Y = 0, J = Z.length; Y < J; Y += 1)
            if (I = Z[Y], !zn.call(Q, I)) Q[I] = B[I], G[I] = !0
    }

    function JWA(A, Q, B, G, Z, I, Y, J, W) {
        var X, F;
        if (Array.isArray(Z)) {
            Z = Array.prototype.slice.call(Z);
            for (X = 0, F = Z.length; X < F; X += 1) {
                if (Array.isArray(Z[X])) C9(A, "nested arrays are not supported inside keys");
                if (typeof Z === "object" && ry2(Z[X]) === "[object Object]") Z[X] = "[object Object]"
            }
        }
        if (typeof Z === "object" && ry2(Z) === "[object Object]") Z = "[object Object]";
        if (Z = String(Z), Q === null) Q = {};
        if (G === "tag:yaml.org,2002:merge")
            if (Array.isArray(I))
                for (X = 0, F = I.length; X < F; X += 1) ey2(A, Q, I[X], B);
            else ey2(A, Q, I, B);
        else {
            if (!A.json && !zn.call(B, Z) && zn.call(Q, Z)) A.line = Y || A.line, A.lineStart = J || A.lineStart, A.position = W || A.position, C9(A, "duplicated mapping key");
            if (Z === "__proto__") Object.defineProperty(Q, Z, {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: I
            });
            else Q[Z] = I;
            delete B[Z]
        }
        return Q
    }

    function o50(A) {
        var Q = A.input.charCodeAt(A.position);
        if (Q === 10) A.position++;
        else if (Q === 13) {
            if (A.position++, A.input.charCodeAt(A.position) === 10) A.position++
        } else C9(A, "a line break is expected");
        A.line += 1, A.lineStart = A.position, A.firstTabInLine = -1
    }

    function eX(A, Q, B) {
        var G = 0,
            Z = A.input.charCodeAt(A.position);
        while (Z !== 0) {
            while (z0A(Z)) {
                if (Z === 9 && A.firstTabInLine === -1) A.firstTabInLine = A.position;
                Z = A.input.charCodeAt(++A.position)
            }
            if (Q && Z === 35)
                do Z = A.input.charCodeAt(++A.position); while (Z !== 10 && Z !== 13 && Z !== 0);
            if (Ey(Z)) {
                o50(A), Z = A.input.charCodeAt(A.position), G++, A.lineIndent = 0;
                while (Z === 32) A.lineIndent++, Z = A.input.charCodeAt(++A.position)
            } else break
        }
        if (B !== -1 && G !== 0 && A.lineIndent < B) Z51(A, "deficient indentation");
        return G
    }

    function I51(A) {
        var Q = A.position,
            B;
        if (B = A.input.charCodeAt(Q), (B === 45 || B === 46) && B === A.input.charCodeAt(Q + 1) && B === A.input.charCodeAt(Q + 2)) {
            if (Q += 3, B = A.input.charCodeAt(Q), B === 0 || I$(B)) return !0
        }
        return !1
    }

    function t50(A, Q) {
        if (Q === 1) A.result += " ";
        else if (Q > 1) A.result += E0A.repeat(`
`, Q - 1)
    }

    function jm5(A, Q, B) {
        var G, Z, I, Y, J, W, X, F, V = A.kind,
            K = A.result,
            D;
        if (D = A.input.charCodeAt(A.position), I$(D) || YWA(D) || D === 35 || D === 38 || D === 42 || D === 33 || D === 124 || D === 62 || D === 39 || D === 34 || D === 37 || D === 64 || D === 96) return !1;
        if (D === 63 || D === 45) {
            if (Z = A.input.charCodeAt(A.position + 1), I$(Z) || B && YWA(Z)) return !1
        }
        A.kind = "scalar", A.result = "", I = Y = A.position, J = !1;
        while (D !== 0) {
            if (D === 58) {
                if (Z = A.input.charCodeAt(A.position + 1), I$(Z) || B && YWA(Z)) break
            } else if (D === 35) {
                if (G = A.input.charCodeAt(A.position - 1), I$(G)) break
            } else if (A.position === A.lineStart && I51(A) || B && YWA(D)) break;
            else if (Ey(D))
                if (W = A.line, X = A.lineStart, F = A.lineIndent, eX(A, !1, -1), A.lineIndent >= Q) {
                    J = !0, D = A.input.charCodeAt(A.position);
                    continue
                } else {
                    A.position = Y, A.line = W, A.lineStart = X, A.lineIndent = F;
                    break
                } if (J) En(A, I, Y, !1), t50(A, A.line - W), I = Y = A.position, J = !1;
            if (!z0A(D)) Y = A.position + 1;
            D = A.input.charCodeAt(++A.position)
        }
        if (En(A, I, Y, !1), A.result) return !0;
        return A.kind = V, A.result = K, !1
    }

    function Sm5(A, Q) {
        var B, G, Z;
        if (B = A.input.charCodeAt(A.position), B !== 39) return !1;
        A.kind = "scalar", A.result = "", A.position++, G = Z = A.position;
        while ((B = A.input.charCodeAt(A.position)) !== 0)
            if (B === 39)
                if (En(A, G, A.position, !0), B = A.input.charCodeAt(++A.position), B === 39) G = A.position, A.position++, Z = A.position;
                else return !0;
        else if (Ey(B)) En(A, G, Z, !0), t50(A, eX(A, !1, Q)), G = Z = A.position;
        else if (A.position === A.lineStart && I51(A)) C9(A, "unexpected end of the document within a single quoted scalar");
        else A.position++, Z = A.position;
        C9(A, "unexpected end of the stream within a single quoted scalar")
    }

    function _m5(A, Q) {
        var B, G, Z, I, Y, J;
        if (J = A.input.charCodeAt(A.position), J !== 34) return !1;
        A.kind = "scalar", A.result = "", A.position++, B = G = A.position;
        while ((J = A.input.charCodeAt(A.position)) !== 0)
            if (J === 34) return En(A, B, A.position, !0), A.position++, !0;
            else if (J === 92) {
            if (En(A, B, A.position, !0), J = A.input.charCodeAt(++A.position), Ey(J)) eX(A, !1, Q);
            else if (J < 256 && Yx2[J]) A.result += Jx2[J], A.position++;
            else if ((Y = Om5(J)) > 0) {
                Z = Y, I = 0;
                for (; Z > 0; Z--)
                    if (J = A.input.charCodeAt(++A.position), (Y = Mm5(J)) >= 0) I = (I << 4) + Y;
                    else C9(A, "expected hexadecimal character");
                A.result += Tm5(I), A.position++
            } else C9(A, "unknown escape sequence");
            B = G = A.position
        } else if (Ey(J)) En(A, B, G, !0), t50(A, eX(A, !1, Q)), B = G = A.position;
        else if (A.position === A.lineStart && I51(A)) C9(A, "unexpected end of the document within a double quoted scalar");
        else A.position++, G = A.position;
        C9(A, "unexpected end of the stream within a double quoted scalar")
    }

    function km5(A, Q) {
        var B = !0,
            G, Z, I, Y = A.tag,
            J, W = A.anchor,
            X, F, V, K, D, H = Object.create(null),
            C, E, z, w;
        if (w = A.input.charCodeAt(A.position), w === 91) F = 93, D = !1, J = [];
        else if (w === 123) F = 125, D = !0, J = {};
        else return !1;
        if (A.anchor !== null) A.anchorMap[A.anchor] = J;
        w = A.input.charCodeAt(++A.position);
        while (w !== 0) {
            if (eX(A, !0, Q), w = A.input.charCodeAt(A.position), w === F) return A.position++, A.tag = Y, A.anchor = W, A.kind = D ? "mapping" : "sequence", A.result = J, !0;
            else if (!B) C9(A, "missed comma between flow collection entries");
            else if (w === 44) C9(A, "expected the node content, but found ','");
            if (E = C = z = null, V = K = !1, w === 63) {
                if (X = A.input.charCodeAt(A.position + 1), I$(X)) V = K = !0, A.position++, eX(A, !0, Q)
            }
            if (G = A.line, Z = A.lineStart, I = A.position, WWA(A, Q, B51, !1, !0), E = A.tag, C = A.result, eX(A, !0, Q), w = A.input.charCodeAt(A.position), (K || A.line === G) && w === 58) V = !0, w = A.input.charCodeAt(++A.position), eX(A, !0, Q), WWA(A, Q, B51, !1, !0), z = A.result;
            if (D) JWA(A, J, H, E, C, z, G, Z, I);
            else if (V) J.push(JWA(A, null, H, E, C, z, G, Z, I));
            else J.push(C);
            if (eX(A, !0, Q), w = A.input.charCodeAt(A.position), w === 44) B = !0, w = A.input.charCodeAt(++A.position);
            else B = !1
        }
        C9(A, "unexpected end of the stream within a flow collection")
    }

    function ym5(A, Q) {
        var B, G, Z = r50,
            I = !1,
            Y = !1,
            J = Q,
            W = 0,
            X = !1,
            F, V;
        if (V = A.input.charCodeAt(A.position), V === 124) G = !1;
        else if (V === 62) G = !0;
        else return !1;
        A.kind = "scalar", A.result = "";
        while (V !== 0)
            if (V = A.input.charCodeAt(++A.position), V === 43 || V === 45)
                if (r50 === Z) Z = V === 43 ? sy2 : wm5;
                else C9(A, "repeat of a chomping mode identifier");
        else if ((F = Rm5(V)) >= 0)
            if (F === 0) C9(A, "bad explicit indentation width of a block scalar; it cannot be less than one");
            else if (!Y) J = Q + F - 1, Y = !0;
        else C9(A, "repeat of an indentation width identifier");
        else break;
        if (z0A(V)) {
            do V = A.input.charCodeAt(++A.position); while (z0A(V));
            if (V === 35)
                do V = A.input.charCodeAt(++A.position); while (!Ey(V) && V !== 0)
        }
        while (V !== 0) {
            o50(A), A.lineIndent = 0, V = A.input.charCodeAt(A.position);
            while ((!Y || A.lineIndent < J) && V === 32) A.lineIndent++, V = A.input.charCodeAt(++A.position);
            if (!Y && A.lineIndent > J) J = A.lineIndent;
            if (Ey(V)) {
                W++;
                continue
            }
            if (A.lineIndent < J) {
                if (Z === sy2) A.result += E0A.repeat(`
`, I ? 1 + W : W);
                else if (Z === r50) {
                    if (I) A.result += `
`
                }
                break
            }
            if (G)
                if (z0A(V)) X = !0, A.result += E0A.repeat(`
`, I ? 1 + W : W);
                else if (X) X = !1, A.result += E0A.repeat(`
`, W + 1);
            else if (W === 0) {
                if (I) A.result += " "
            } else A.result += E0A.repeat(`
`, W);
            else A.result += E0A.repeat(`
`, I ? 1 + W : W);
            I = !0, Y = !0, W = 0, B = A.position;
            while (!Ey(V) && V !== 0) V = A.input.charCodeAt(++A.position);
            En(A, B, A.position, !1)
        }
        return !0
    }

    function Ax2(A, Q) {
        var B, G = A.tag,
            Z = A.anchor,
            I = [],
            Y, J = !1,
            W;
        if (A.firstTabInLine !== -1) return !1;
        if (A.anchor !== null) A.anchorMap[A.anchor] = I;
        W = A.input.charCodeAt(A.position);
        while (W !== 0) {
            if (A.firstTabInLine !== -1) A.position = A.firstTabInLine, C9(A, "tab characters must not be used in indentation");
            if (W !== 45) break;
            if (Y = A.input.charCodeAt(A.position + 1), !I$(Y)) break;
            if (J = !0, A.position++, eX(A, !0, -1)) {
                if (A.lineIndent <= Q) {
                    I.push(null), W = A.input.charCodeAt(A.position);
                    continue
                }
            }
            if (B = A.line, WWA(A, Q, Gx2, !1, !0), I.push(A.result), eX(A, !0, -1), W = A.input.charCodeAt(A.position), (A.line === B || A.lineIndent > Q) && W !== 0) C9(A, "bad indentation of a sequence entry");
            else if (A.lineIndent < Q) break
        }
        if (J) return A.tag = G, A.anchor = Z, A.kind = "sequence", A.result = I, !0;
        return !1
    }

    function xm5(A, Q, B) {
        var G, Z, I, Y, J, W, X = A.tag,
            F = A.anchor,
            V = {},
            K = Object.create(null),
            D = null,
            H = null,
            C = null,
            E = !1,
            z = !1,
            w;
        if (A.firstTabInLine !== -1) return !1;
        if (A.anchor !== null) A.anchorMap[A.anchor] = V;
        w = A.input.charCodeAt(A.position);
        while (w !== 0) {
            if (!E && A.firstTabInLine !== -1) A.position = A.firstTabInLine, C9(A, "tab characters must not be used in indentation");
            if (G = A.input.charCodeAt(A.position + 1), I = A.line, (w === 63 || w === 58) && I$(G)) {
                if (w === 63) {
                    if (E) JWA(A, V, K, D, H, null, Y, J, W), D = H = C = null;
                    z = !0, E = !0, Z = !0
                } else if (E) E = !1, Z = !0;
                else C9(A, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
                A.position += 1, w = G
            } else {
                if (Y = A.line, J = A.lineStart, W = A.position, !WWA(A, B, Bx2, !1, !0)) break;
                if (A.line === I) {
                    w = A.input.charCodeAt(A.position);
                    while (z0A(w)) w = A.input.charCodeAt(++A.position);
                    if (w === 58) {
                        if (w = A.input.charCodeAt(++A.position), !I$(w)) C9(A, "a whitespace character is expected after the key-value separator within a block mapping");
                        if (E) JWA(A, V, K, D, H, null, Y, J, W), D = H = C = null;
                        z = !0, E = !1, Z = !1, D = A.tag, H = A.result
                    } else if (z) C9(A, "can not read an implicit mapping pair; a colon is missed");
                    else return A.tag = X, A.anchor = F, !0
                } else if (z) C9(A, "can not read a block mapping entry; a multiline key may not be an implicit key");
                else return A.tag = X, A.anchor = F, !0
            }
            if (A.line === I || A.lineIndent > Q) {
                if (E) Y = A.line, J = A.lineStart, W = A.position;
                if (WWA(A, Q, G51, !0, Z))
                    if (E) H = A.result;
                    else C = A.result;
                if (!E) JWA(A, V, K, D, H, C, Y, J, W), D = H = C = null;
                eX(A, !0, -1), w = A.input.charCodeAt(A.position)
            }
            if ((A.line === I || A.lineIndent > Q) && w !== 0) C9(A, "bad indentation of a mapping entry");
            else if (A.lineIndent < Q) break
        }
        if (E) JWA(A, V, K, D, H, null, Y, J, W);
        if (z) A.tag = X, A.anchor = F, A.kind = "mapping", A.result = V;
        return z
    }

    function vm5(A) {
        var Q, B = !1,
            G = !1,
            Z, I, Y;
        if (Y = A.input.charCodeAt(A.position), Y !== 33) return !1;
        if (A.tag !== null) C9(A, "duplication of a tag property");
        if (Y = A.input.charCodeAt(++A.position), Y === 60) B = !0, Y = A.input.charCodeAt(++A.position);
        else if (Y === 33) G = !0, Z = "!!", Y = A.input.charCodeAt(++A.position);
        else Z = "!";
        if (Q = A.position, B) {
            do Y = A.input.charCodeAt(++A.position); while (Y !== 0 && Y !== 62);
            if (A.position < A.length) I = A.input.slice(Q, A.position), Y = A.input.charCodeAt(++A.position);
            else C9(A, "unexpected end of the stream within a verbatim tag")
        } else {
            while (Y !== 0 && !I$(Y)) {
                if (Y === 33)
                    if (!G) {
                        if (Z = A.input.slice(Q - 1, A.position + 1), !Zx2.test(Z)) C9(A, "named tag handle cannot contain such characters");
                        G = !0, Q = A.position + 1
                    } else C9(A, "tag suffix cannot contain exclamation marks");
                Y = A.input.charCodeAt(++A.position)
            }
            if (I = A.input.slice(Q, A.position), Lm5.test(I)) C9(A, "tag suffix cannot contain flow indicator characters")
        }
        if (I && !Ix2.test(I)) C9(A, "tag name cannot contain such characters: " + I);
        try {
            I = decodeURIComponent(I)
        } catch (J) {
            C9(A, "tag name is malformed: " + I)
        }
        if (B) A.tag = I;
        else if (zn.call(A.tagMap, Z)) A.tag = A.tagMap[Z] + I;
        else if (Z === "!") A.tag = "!" + I;
        else if (Z === "!!") A.tag = "tag:yaml.org,2002:" + I;
        else C9(A, 'undeclared tag handle "' + Z + '"');
        return !0
    }

    function bm5(A) {
        var Q, B;
        if (B = A.input.charCodeAt(A.position), B !== 38) return !1;
        if (A.anchor !== null) C9(A, "duplication of an anchor property");
        B = A.input.charCodeAt(++A.position), Q = A.position;
        while (B !== 0 && !I$(B) && !YWA(B)) B = A.input.charCodeAt(++A.position);
        if (A.position === Q) C9(A, "name of an anchor node must contain at least one character");
        return A.anchor = A.input.slice(Q, A.position), !0
    }

    function fm5(A) {
        var Q, B, G;
        if (G = A.input.charCodeAt(A.position), G !== 42) return !1;
        G = A.input.charCodeAt(++A.position), Q = A.position;
        while (G !== 0 && !I$(G) && !YWA(G)) G = A.input.charCodeAt(++A.position);
        if (A.position === Q) C9(A, "name of an alias node must contain at least one character");
        if (B = A.input.slice(Q, A.position), !zn.call(A.anchorMap, B)) C9(A, 'unidentified alias "' + B + '"');
        return A.result = A.anchorMap[B], eX(A, !0, -1), !0
    }

    function WWA(A, Q, B, G, Z) {
        var I, Y, J, W = 1,
            X = !1,
            F = !1,
            V, K, D, H, C, E;
        if (A.listener !== null) A.listener("open", A);
        if (A.tag = null, A.anchor = null, A.kind = null, A.result = null, I = Y = J = G51 === B || Gx2 === B, G) {
            if (eX(A, !0, -1)) {
                if (X = !0, A.lineIndent > Q) W = 1;
                else if (A.lineIndent === Q) W = 0;
                else if (A.lineIndent < Q) W = -1
            }
        }
        if (W === 1)
            while (vm5(A) || bm5(A))
                if (eX(A, !0, -1)) {
                    if (X = !0, J = I, A.lineIndent > Q) W = 1;
                    else if (A.lineIndent === Q) W = 0;
                    else if (A.lineIndent < Q) W = -1
                } else J = !1;
        if (J) J = X || Z;
        if (W === 1 || G51 === B) {
            if (B51 === B || Bx2 === B) C = Q;
            else C = Q + 1;
            if (E = A.position - A.lineStart, W === 1)
                if (J && (Ax2(A, E) || xm5(A, E, C)) || km5(A, C)) F = !0;
                else {
                    if (Y && ym5(A, C) || Sm5(A, C) || _m5(A, C)) F = !0;
                    else if (fm5(A)) {
                        if (F = !0, A.tag !== null || A.anchor !== null) C9(A, "alias node should not have any properties")
                    } else if (jm5(A, C, B51 === B)) {
                        if (F = !0, A.tag === null) A.tag = "?"
                    }
                    if (A.anchor !== null) A.anchorMap[A.anchor] = A.result
                }
            else if (W === 0) F = J && Ax2(A, E)
        }
        if (A.tag === null) {
            if (A.anchor !== null) A.anchorMap[A.anchor] = A.result
        } else if (A.tag === "?") {
            if (A.result !== null && A.kind !== "scalar") C9(A, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + A.kind + '"');
            for (V = 0, K = A.implicitTypes.length; V < K; V += 1)
                if (H = A.implicitTypes[V], H.resolve(A.result)) {
                    if (A.result = H.construct(A.result), A.tag = H.tag, A.anchor !== null) A.anchorMap[A.anchor] = A.result;
                    break
                }
        } else if (A.tag !== "!") {
            if (zn.call(A.typeMap[A.kind || "fallback"], A.tag)) H = A.typeMap[A.kind || "fallback"][A.tag];
            else {
                H = null, D = A.typeMap.multi[A.kind || "fallback"];
                for (V = 0, K = D.length; V < K; V += 1)
                    if (A.tag.slice(0, D[V].tag.length) === D[V].tag) {
                        H = D[V];
                        break
                    }
            }
            if (!H) C9(A, "unknown tag !<" + A.tag + ">");
            if (A.result !== null && H.kind !== A.kind) C9(A, "unacceptable node kind for !<" + A.tag + '> tag; it should be "' + H.kind + '", not "' + A.kind + '"');
            if (!H.resolve(A.result, A.tag)) C9(A, "cannot resolve a node with !<" + A.tag + "> explicit tag");
            else if (A.result = H.construct(A.result, A.tag), A.anchor !== null) A.anchorMap[A.anchor] = A.result
        }
        if (A.listener !== null) A.listener("close", A);
        return A.tag !== null || A.anchor !== null || F
    }

    function hm5(A) {
        var Q = A.position,
            B, G, Z, I = !1,
            Y;
        A.version = null, A.checkLineBreaks = A.legacy, A.tagMap = Object.create(null), A.anchorMap = Object.create(null);
        while ((Y = A.input.charCodeAt(A.position)) !== 0) {
            if (eX(A, !0, -1), Y = A.input.charCodeAt(A.position), A.lineIndent > 0 || Y !== 37) break;
            I = !0, Y = A.input.charCodeAt(++A.position), B = A.position;
            while (Y !== 0 && !I$(Y)) Y = A.input.charCodeAt(++A.position);
            if (G = A.input.slice(B, A.position), Z = [], G.length < 1) C9(A, "directive name must not be less than one character in length");
            while (Y !== 0) {
                while (z0A(Y)) Y = A.input.charCodeAt(++A.position);
                if (Y === 35) {
                    do Y = A.input.charCodeAt(++A.position); while (Y !== 0 && !Ey(Y));
                    break
                }
                if (Ey(Y)) break;
                B = A.position;
                while (Y !== 0 && !I$(Y)) Y = A.input.charCodeAt(++A.position);
                Z.push(A.input.slice(B, A.position))
            }
            if (Y !== 0) o50(A);
            if (zn.call(ty2, G)) ty2[G](A, G, Z);
            else Z51(A, 'unknown document directive "' + G + '"')
        }
        if (eX(A, !0, -1), A.lineIndent === 0 && A.input.charCodeAt(A.position) === 45 && A.input.charCodeAt(A.position + 1) === 45 && A.input.charCodeAt(A.position + 2) === 45) A.position += 3, eX(A, !0, -1);
        else if (I) C9(A, "directives end mark is expected");
        if (WWA(A, A.lineIndent - 1, G51, !1, !0), eX(A, !0, -1), A.checkLineBreaks && Nm5.test(A.input.slice(Q, A.position))) Z51(A, "non-ASCII line breaks are interpreted as content");
        if (A.documents.push(A.result), A.position === A.lineStart && I51(A)) {
            if (A.input.charCodeAt(A.position) === 46) A.position += 3, eX(A, !0, -1);
            return
        }
        if (A.position < A.length - 1) C9(A, "end of the stream or a document separator is expected");
        else return
    }

    function Xx2(A, Q) {
        if (A = String(A), Q = Q || {}, A.length !== 0) {
            if (A.charCodeAt(A.length - 1) !== 10 && A.charCodeAt(A.length - 1) !== 13) A += `
`;
            if (A.charCodeAt(0) === 65279) A = A.slice(1)
        }
        var B = new Pm5(A, Q),
            G = A.indexOf("\x00");
        if (G !== -1) B.position = G, C9(B, "null byte is not allowed in input");
        B.input += "\x00";
        while (B.input.charCodeAt(B.position) === 32) B.lineIndent += 1, B.position += 1;
        while (B.position < B.length - 1) hm5(B);
        return B.documents
    }

    function gm5(A, Q, B) {
        if (Q !== null && typeof Q === "object" && typeof B > "u") B = Q, Q = null;
        var G = Xx2(A, B);
        if (typeof Q !== "function") return G;
        for (var Z = 0, I = G.length; Z < I; Z += 1) Q(G[Z])
    }

    function um5(A, Q) {
        var B = Xx2(A, Q);
        if (B.length === 0) return;
        else if (B.length === 1) return B[0];
        throw new Qx2("expected a single document in the stream, but found more")
    }
    mm5.loadAll = gm5;
    mm5.load = um5
});
var _x2 = U((Od5, Sx2) => {
    var W51 = ZWA(),
        mRA = IWA(),
        pm5 = Q51(),
        $x2 = Object.prototype.toString,
        wx2 = Object.prototype.hasOwnProperty,
        Z30 = 65279,
        lm5 = 9,
        hRA = 10,
        im5 = 13,
        nm5 = 32,
        am5 = 33,
        sm5 = 34,
        A30 = 35,
        rm5 = 37,
        om5 = 38,
        tm5 = 39,
        em5 = 42,
        qx2 = 44,
        Ad5 = 45,
        Y51 = 58,
        Qd5 = 61,
        Bd5 = 62,
        Gd5 = 63,
        Zd5 = 64,
        Nx2 = 91,
        Lx2 = 93,
        Id5 = 96,
        Mx2 = 123,
        Yd5 = 124,
        Ox2 = 125,
        YC = {};
    YC[0] = "\\0";
    YC[7] = "\\a";
    YC[8] = "\\b";
    YC[9] = "\\t";
    YC[10] = "\\n";
    YC[11] = "\\v";
    YC[12] = "\\f";
    YC[13] = "\\r";
    YC[27] = "\\e";
    YC[34] = "\\\"";
    YC[92] = "\\\\";
    YC[133] = "\\N";
    YC[160] = "\\_";
    YC[8232] = "\\L";
    YC[8233] = "\\P";
    var Jd5 = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"],
        Wd5 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

    function Xd5(A, Q) {
        var B, G, Z, I, Y, J, W;
        if (Q === null) return {};
        B = {}, G = Object.keys(Q);
        for (Z = 0, I = G.length; Z < I; Z += 1) {
            if (Y = G[Z], J = String(Q[Y]), Y.slice(0, 2) === "!!") Y = "tag:yaml.org,2002:" + Y.slice(2);
            if (W = A.compiledTypeMap.fallback[Y], W && wx2.call(W.styleAliases, J)) J = W.styleAliases[J];
            B[Y] = J
        }
        return B
    }

    function Fd5(A) {
        var Q, B, G;
        if (Q = A.toString(16).toUpperCase(), A <= 255) B = "x", G = 2;
        else if (A <= 65535) B = "u", G = 4;
        else if (A <= 4294967295) B = "U", G = 8;
        else throw new mRA("code point within a string may not be greater than 0xFFFFFFFF");
        return "\\" + B + W51.repeat("0", G - Q.length) + Q
    }
    var Vd5 = 1,
        gRA = 2;

    function Kd5(A) {
        this.schema = A.schema || pm5, this.indent = Math.max(1, A.indent || 2), this.noArrayIndent = A.noArrayIndent || !1, this.skipInvalid = A.skipInvalid || !1, this.flowLevel = W51.isNothing(A.flowLevel) ? -1 : A.flowLevel, this.styleMap = Xd5(this.schema, A.styles || null), this.sortKeys = A.sortKeys || !1, this.lineWidth = A.lineWidth || 80, this.noRefs = A.noRefs || !1, this.noCompatMode = A.noCompatMode || !1, this.condenseFlow = A.condenseFlow || !1, this.quotingType = A.quotingType === '"' ? gRA : Vd5, this.forceQuotes = A.forceQuotes || !1, this.replacer = typeof A.replacer === "function" ? A.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null
    }

    function Vx2(A, Q) {
        var B = W51.repeat(" ", Q),
            G = 0,
            Z = -1,
            I = "",
            Y, J = A.length;
        while (G < J) {
            if (Z = A.indexOf(`
`, G), Z === -1) Y = A.slice(G), G = J;
            else Y = A.slice(G, Z + 1), G = Z + 1;
            if (Y.length && Y !== `
`) I += B;
            I += Y
        }
        return I
    }

    function Q30(A, Q) {
        return `
` + W51.repeat(" ", A.indent * Q)
    }

    function Dd5(A, Q) {
        var B, G, Z;
        for (B = 0, G = A.implicitTypes.length; B < G; B += 1)
            if (Z = A.implicitTypes[B], Z.resolve(Q)) return !0;
        return !1
    }

    function J51(A) {
        return A === nm5 || A === lm5
    }

    function uRA(A) {
        return 32 <= A && A <= 126 || 161 <= A && A <= 55295 && A !== 8232 && A !== 8233 || 57344 <= A && A <= 65533 && A !== Z30 || 65536 <= A && A <= 1114111
    }

    function Kx2(A) {
        return uRA(A) && A !== Z30 && A !== im5 && A !== hRA
    }

    function Dx2(A, Q, B) {
        var G = Kx2(A),
            Z = G && !J51(A);
        return (B ? G : G && A !== qx2 && A !== Nx2 && A !== Lx2 && A !== Mx2 && A !== Ox2) && A !== A30 && !(Q === Y51 && !Z) || Kx2(Q) && !J51(Q) && A === A30 || Q === Y51 && Z
    }

    function Hd5(A) {
        return uRA(A) && A !== Z30 && !J51(A) && A !== Ad5 && A !== Gd5 && A !== Y51 && A !== qx2 && A !== Nx2 && A !== Lx2 && A !== Mx2 && A !== Ox2 && A !== A30 && A !== om5 && A !== em5 && A !== am5 && A !== Yd5 && A !== Qd5 && A !== Bd5 && A !== tm5 && A !== sm5 && A !== rm5 && A !== Zd5 && A !== Id5
    }

    function Cd5(A) {
        return !J51(A) && A !== Y51
    }

    function fRA(A, Q) {
        var B = A.charCodeAt(Q),
            G;
        if (B >= 55296 && B <= 56319 && Q + 1 < A.length) {
            if (G = A.charCodeAt(Q + 1), G >= 56320 && G <= 57343) return (B - 55296) * 1024 + G - 56320 + 65536
        }
        return B
    }

    function Rx2(A) {
        var Q = /^\n* /;
        return Q.test(A)
    }
    var Tx2 = 1,
        B30 = 2,
        Px2 = 3,
        jx2 = 4,
        XWA = 5;

    function Ed5(A, Q, B, G, Z, I, Y, J) {
        var W, X = 0,
            F = null,
            V = !1,
            K = !1,
            D = G !== -1,
            H = -1,
            C = Hd5(fRA(A, 0)) && Cd5(fRA(A, A.length - 1));
        if (Q || Y)
            for (W = 0; W < A.length; X >= 65536 ? W += 2 : W++) {
                if (X = fRA(A, W), !uRA(X)) return XWA;
                C = C && Dx2(X, F, J), F = X
            } else {
                for (W = 0; W < A.length; X >= 65536 ? W += 2 : W++) {
                    if (X = fRA(A, W), X === hRA) {
                        if (V = !0, D) K = K || W - H - 1 > G && A[H + 1] !== " ", H = W
                    } else if (!uRA(X)) return XWA;
                    C = C && Dx2(X, F, J), F = X
                }
                K = K || D && (W - H - 1 > G && A[H + 1] !== " ")
            }
        if (!V && !K) {
            if (C && !Y && !Z(A)) return Tx2;
            return I === gRA ? XWA : B30
        }
        if (B > 9 && Rx2(A)) return XWA;
        if (!Y) return K ? jx2 : Px2;
        return I === gRA ? XWA : B30
    }

    function zd5(A, Q, B, G, Z) {
        A.dump = function() {
            if (Q.length === 0) return A.quotingType === gRA ? '""' : "''";
            if (!A.noCompatMode) {
                if (Jd5.indexOf(Q) !== -1 || Wd5.test(Q)) return A.quotingType === gRA ? '"' + Q + '"' : "'" + Q + "'"
            }
            var I = A.indent * Math.max(1, B),
                Y = A.lineWidth === -1 ? -1 : Math.max(Math.min(A.lineWidth, 40), A.lineWidth - I),
                J = G || A.flowLevel > -1 && B >= A.flowLevel;

            function W(X) {
                return Dd5(A, X)
            }
            switch (Ed5(Q, J, A.indent, Y, W, A.quotingType, A.forceQuotes && !G, Z)) {
                case Tx2:
                    return Q;
                case B30:
                    return "'" + Q.replace(/'/g, "''") + "'";
                case Px2:
                    return "|" + Hx2(Q, A.indent) + Cx2(Vx2(Q, I));
                case jx2:
                    return ">" + Hx2(Q, A.indent) + Cx2(Vx2(Ud5(Q, Y), I));
                case XWA:
                    return '"' + $d5(Q, Y) + '"';
                default:
                    throw new mRA("impossible error: invalid scalar style")
            }
        }()
    }

    function Hx2(A, Q) {
        var B = Rx2(A) ? String(Q) : "",
            G = A[A.length - 1] === `
`,
            Z = G && (A[A.length - 2] === `
` || A === `
`),
            I = Z ? "+" : G ? "" : "-";
        return B + I + `
`
    }

    function Cx2(A) {
        return A[A.length - 1] === `
` ? A.slice(0, -1) : A
    }

    function Ud5(A, Q) {
        var B = /(\n+)([^\n]*)/g,
            G = function() {
                var X = A.indexOf(`
`);
                return X = X !== -1 ? X : A.length, B.lastIndex = X, Ex2(A.slice(0, X), Q)
            }(),
            Z = A[0] === `
` || A[0] === " ",
            I, Y;
        while (Y = B.exec(A)) {
            var J = Y[1],
                W = Y[2];
            I = W[0] === " ", G += J + (!Z && !I && W !== "" ? `
` : "") + Ex2(W, Q), Z = I
        }
        return G
    }

    function Ex2(A, Q) {
        if (A === "" || A[0] === " ") return A;
        var B = / [^ ]/g,
            G, Z = 0,
            I, Y = 0,
            J = 0,
            W = "";
        while (G = B.exec(A)) {
            if (J = G.index, J - Z > Q) I = Y > Z ? Y : J, W += `
` + A.slice(Z, I), Z = I + 1;
            Y = J
        }
        if (W += `
`, A.length - Z > Q && Y > Z) W += A.slice(Z, Y) + `
` + A.slice(Y + 1);
        else W += A.slice(Z);
        return W.slice(1)
    }

    function $d5(A) {
        var Q = "",
            B = 0,
            G;
        for (var Z = 0; Z < A.length; B >= 65536 ? Z += 2 : Z++)
            if (B = fRA(A, Z), G = YC[B], !G && uRA(B)) {
                if (Q += A[Z], B >= 65536) Q += A[Z + 1]
            } else Q += G || Fd5(B);
        return Q
    }

    function wd5(A, Q, B) {
        var G = "",
            Z = A.tag,
            I, Y, J;
        for (I = 0, Y = B.length; I < Y; I += 1) {
            if (J = B[I], A.replacer) J = A.replacer.call(B, String(I), J);
            if (uh(A, Q, J, !1, !1) || typeof J > "u" && uh(A, Q, null, !1, !1)) {
                if (G !== "") G += "," + (!A.condenseFlow ? " " : "");
                G += A.dump
            }
        }
        A.tag = Z, A.dump = "[" + G + "]"
    }

    function zx2(A, Q, B, G) {
        var Z = "",
            I = A.tag,
            Y, J, W;
        for (Y = 0, J = B.length; Y < J; Y += 1) {
            if (W = B[Y], A.replacer) W = A.replacer.call(B, String(Y), W);
            if (uh(A, Q + 1, W, !0, !0, !1, !0) || typeof W > "u" && uh(A, Q + 1, null, !0, !0, !1, !0)) {
                if (!G || Z !== "") Z += Q30(A, Q);
                if (A.dump && hRA === A.dump.charCodeAt(0)) Z += "-";
                else Z += "- ";
                Z += A.dump
            }
        }
        A.tag = I, A.dump = Z || "[]"
    }

    function qd5(A, Q, B) {
        var G = "",
            Z = A.tag,
            I = Object.keys(B),
            Y, J, W, X, F;
        for (Y = 0, J = I.length; Y < J; Y += 1) {
            if (F = "", G !== "") F += ", ";
            if (A.condenseFlow) F += '"';
            if (W = I[Y], X = B[W], A.replacer) X = A.replacer.call(B, W, X);
            if (!uh(A, Q, W, !1, !1)) continue;
            if (A.dump.length > 1024) F += "? ";