/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.020Z
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 21/29
 * Lines: 408276 - 409773 (1498 lines)
 * Original file: cli.js
 */

var WX0 = L(() => {
    jjA();
    cXA();
    JX0();
    oq()
});

function T7(A, Q) {
    let B = A < 0 ? "-" : "",
        G = Math.abs(A).toString().padStart(Q, "0");
    return B + G
}
var _g;
var N79 = L(() => {
    _g = {
        y(A, Q) {
            let B = A.getFullYear(),
                G = B > 0 ? B : 1 - B;
            return T7(Q === "yy" ? G % 100 : G, Q.length)
        },
        M(A, Q) {
            let B = A.getMonth();
            return Q === "M" ? String(B + 1) : T7(B + 1, 2)
        },
        d(A, Q) {
            return T7(A.getDate(), Q.length)
        },
        a(A, Q) {
            let B = A.getHours() / 12 >= 1 ? "pm" : "am";
            switch (Q) {
                case "a":
                case "aa":
                    return B.toUpperCase();
                case "aaa":
                    return B;
                case "aaaaa":
                    return B[0];
                case "aaaa":
                default:
                    return B === "am" ? "a.m." : "p.m."
            }
        },
        h(A, Q) {
            return T7(A.getHours() % 12 || 12, Q.length)
        },
        H(A, Q) {
            return T7(A.getHours(), Q.length)
        },
        m(A, Q) {
            return T7(A.getMinutes(), Q.length)
        },
        s(A, Q) {
            return T7(A.getSeconds(), Q.length)
        },
        S(A, Q) {
            let B = Q.length,
                G = A.getMilliseconds(),
                Z = Math.trunc(G * Math.pow(10, B - 3));
            return T7(Z, Q.length)
        }
    }
});

function L79(A, Q = "") {
    let B = A > 0 ? "-" : "+",
        G = Math.abs(A),
        Z = Math.trunc(G / 60),
        I = G % 60;
    if (I === 0) return B + String(Z);
    return B + String(Z) + Q + T7(I, 2)
}

function M79(A, Q) {
    if (A % 60 === 0) return (A > 0 ? "-" : "+") + T7(Math.abs(A) / 60, 2);
    return MQA(A, Q)
}

function MQA(A, Q = "") {
    let B = A > 0 ? "-" : "+",
        G = Math.abs(A),
        Z = T7(Math.trunc(G / 60), 2),
        I = T7(G % 60, 2);
    return B + Z + Q + I
}
var iXA, XX0;
var O79 = L(() => {
    IX0();
    YX0();
    kI1();
    WX0();
    vI1();
    N79();
    iXA = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }, XX0 = {
        G: function(A, Q, B) {
            let G = A.getFullYear() > 0 ? 1 : 0;
            switch (Q) {
                case "G":
                case "GG":
                case "GGG":
                    return B.era(G, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return B.era(G, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return B.era(G, {
                        width: "wide"
                    })
            }
        },
        y: function(A, Q, B) {
            if (Q === "yo") {
                let G = A.getFullYear(),
                    Z = G > 0 ? G : 1 - G;
                return B.ordinalNumber(Z, {
                    unit: "year"
                })
            }
            return _g.y(A, Q)
        },
        Y: function(A, Q, B, G) {
            let Z = xI1(A, G),
                I = Z > 0 ? Z : 1 - Z;
            if (Q === "YY") {
                let Y = I % 100;
                return T7(Y, 2)
            }
            if (Q === "Yo") return B.ordinalNumber(I, {
                unit: "year"
            });
            return T7(I, Q.length)
        },
        R: function(A, Q) {
            let B = _I1(A);
            return T7(B, Q.length)
        },
        u: function(A, Q) {
            let B = A.getFullYear();
            return T7(B, Q.length)
        },
        Q: function(A, Q, B) {
            let G = Math.ceil((A.getMonth() + 1) / 3);
            switch (Q) {
                case "Q":
                    return String(G);
                case "QQ":
                    return T7(G, 2);
                case "Qo":
                    return B.ordinalNumber(G, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return B.quarter(G, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return B.quarter(G, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return B.quarter(G, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        q: function(A, Q, B) {
            let G = Math.ceil((A.getMonth() + 1) / 3);
            switch (Q) {
                case "q":
                    return String(G);
                case "qq":
                    return T7(G, 2);
                case "qo":
                    return B.ordinalNumber(G, {
                        unit: "quarter"
                    });
                case "qqq":
                    return B.quarter(G, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return B.quarter(G, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return B.quarter(G, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        M: function(A, Q, B) {
            let G = A.getMonth();
            switch (Q) {
                case "M":
                case "MM":
                    return _g.M(A, Q);
                case "Mo":
                    return B.ordinalNumber(G + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return B.month(G, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return B.month(G, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return B.month(G, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        L: function(A, Q, B) {
            let G = A.getMonth();
            switch (Q) {
                case "L":
                    return String(G + 1);
                case "LL":
                    return T7(G + 1, 2);
                case "Lo":
                    return B.ordinalNumber(G + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return B.month(G, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return B.month(G, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return B.month(G, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        w: function(A, Q, B, G) {
            let Z = q79(A, G);
            if (Q === "wo") return B.ordinalNumber(Z, {
                unit: "week"
            });
            return T7(Z, Q.length)
        },
        I: function(A, Q, B) {
            let G = $79(A);
            if (Q === "Io") return B.ordinalNumber(G, {
                unit: "week"
            });
            return T7(G, Q.length)
        },
        d: function(A, Q, B) {
            if (Q === "do") return B.ordinalNumber(A.getDate(), {
                unit: "date"
            });
            return _g.d(A, Q)
        },
        D: function(A, Q, B) {
            let G = U79(A);
            if (Q === "Do") return B.ordinalNumber(G, {
                unit: "dayOfYear"
            });
            return T7(G, Q.length)
        },
        E: function(A, Q, B) {
            let G = A.getDay();
            switch (Q) {
                case "E":
                case "EE":
                case "EEE":
                    return B.day(G, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return B.day(G, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return B.day(G, {
                        width: "short",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return B.day(G, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        e: function(A, Q, B, G) {
            let Z = A.getDay(),
                I = (Z - G.weekStartsOn + 8) % 7 || 7;
            switch (Q) {
                case "e":
                    return String(I);
                case "ee":
                    return T7(I, 2);
                case "eo":
                    return B.ordinalNumber(I, {
                        unit: "day"
                    });
                case "eee":
                    return B.day(Z, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return B.day(Z, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return B.day(Z, {
                        width: "short",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return B.day(Z, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        c: function(A, Q, B, G) {
            let Z = A.getDay(),
                I = (Z - G.weekStartsOn + 8) % 7 || 7;
            switch (Q) {
                case "c":
                    return String(I);
                case "cc":
                    return T7(I, Q.length);
                case "co":
                    return B.ordinalNumber(I, {
                        unit: "day"
                    });
                case "ccc":
                    return B.day(Z, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return B.day(Z, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return B.day(Z, {
                        width: "short",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return B.day(Z, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        i: function(A, Q, B) {
            let G = A.getDay(),
                Z = G === 0 ? 7 : G;
            switch (Q) {
                case "i":
                    return String(Z);
                case "ii":
                    return T7(Z, Q.length);
                case "io":
                    return B.ordinalNumber(Z, {
                        unit: "day"
                    });
                case "iii":
                    return B.day(G, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return B.day(G, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return B.day(G, {
                        width: "short",
                        context: "formatting"
                    });
                case "iiii":
                default:
                    return B.day(G, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        a: function(A, Q, B) {
            let Z = A.getHours() / 12 >= 1 ? "pm" : "am";
            switch (Q) {
                case "a":
                case "aa":
                    return B.dayPeriod(Z, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return B.dayPeriod(Z, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return B.dayPeriod(Z, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return B.dayPeriod(Z, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        b: function(A, Q, B) {
            let G = A.getHours(),
                Z;
            if (G === 12) Z = iXA.noon;
            else if (G === 0) Z = iXA.midnight;
            else Z = G / 12 >= 1 ? "pm" : "am";
            switch (Q) {
                case "b":
                case "bb":
                    return B.dayPeriod(Z, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return B.dayPeriod(Z, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return B.dayPeriod(Z, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return B.dayPeriod(Z, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        B: function(A, Q, B) {
            let G = A.getHours(),
                Z;
            if (G >= 17) Z = iXA.evening;
            else if (G >= 12) Z = iXA.afternoon;
            else if (G >= 4) Z = iXA.morning;
            else Z = iXA.night;
            switch (Q) {
                case "B":
                case "BB":
                case "BBB":
                    return B.dayPeriod(Z, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return B.dayPeriod(Z, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return B.dayPeriod(Z, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        h: function(A, Q, B) {
            if (Q === "ho") {
                let G = A.getHours() % 12;
                if (G === 0) G = 12;
                return B.ordinalNumber(G, {
                    unit: "hour"
                })
            }
            return _g.h(A, Q)
        },
        H: function(A, Q, B) {
            if (Q === "Ho") return B.ordinalNumber(A.getHours(), {
                unit: "hour"
            });
            return _g.H(A, Q)
        },
        K: function(A, Q, B) {
            let G = A.getHours() % 12;
            if (Q === "Ko") return B.ordinalNumber(G, {
                unit: "hour"
            });
            return T7(G, Q.length)
        },
        k: function(A, Q, B) {
            let G = A.getHours();
            if (G === 0) G = 24;
            if (Q === "ko") return B.ordinalNumber(G, {
                unit: "hour"
            });
            return T7(G, Q.length)
        },
        m: function(A, Q, B) {
            if (Q === "mo") return B.ordinalNumber(A.getMinutes(), {
                unit: "minute"
            });
            return _g.m(A, Q)
        },
        s: function(A, Q, B) {
            if (Q === "so") return B.ordinalNumber(A.getSeconds(), {
                unit: "second"
            });
            return _g.s(A, Q)
        },
        S: function(A, Q) {
            return _g.S(A, Q)
        },
        X: function(A, Q, B) {
            let G = A.getTimezoneOffset();
            if (G === 0) return "Z";
            switch (Q) {
                case "X":
                    return M79(G);
                case "XXXX":
                case "XX":
                    return MQA(G);
                case "XXXXX":
                case "XXX":
                default:
                    return MQA(G, ":")
            }
        },
        x: function(A, Q, B) {
            let G = A.getTimezoneOffset();
            switch (Q) {
                case "x":
                    return M79(G);
                case "xxxx":
                case "xx":
                    return MQA(G);
                case "xxxxx":
                case "xxx":
                default:
                    return MQA(G, ":")
            }
        },
        O: function(A, Q, B) {
            let G = A.getTimezoneOffset();
            switch (Q) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + L79(G, ":");
                case "OOOO":
                default:
                    return "GMT" + MQA(G, ":")
            }
        },
        z: function(A, Q, B) {
            let G = A.getTimezoneOffset();
            switch (Q) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + L79(G, ":");
                case "zzzz":
                default:
                    return "GMT" + MQA(G, ":")
            }
        },
        t: function(A, Q, B) {
            let G = Math.trunc(+A / 1000);
            return T7(G, Q.length)
        },
        T: function(A, Q, B) {
            return T7(+A, Q.length)
        }
    }
});
var R79 = (A, Q) => {
        switch (A) {
            case "P":
                return Q.date({
                    width: "short"
                });
            case "PP":
                return Q.date({
                    width: "medium"
                });
            case "PPP":
                return Q.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return Q.date({
                    width: "full"
                })
        }
    },
    T79 = (A, Q) => {
        switch (A) {
            case "p":
                return Q.time({
                    width: "short"
                });
            case "pp":
                return Q.time({
                    width: "medium"
                });
            case "ppp":
                return Q.time({
                    width: "long"
                });
            case "pppp":
            default:
                return Q.time({
                    width: "full"
                })
        }
    },
    OP3 = (A, Q) => {
        let B = A.match(/(P+)(p+)?/) || [],
            G = B[1],
            Z = B[2];
        if (!Z) return R79(A, Q);
        let I;
        switch (G) {
            case "P":
                I = Q.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                I = Q.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                I = Q.dateTime({
                    width: "long"
                });
                break;
            case "PPPP":
            default:
                I = Q.dateTime({
                    width: "full"
                });
                break
        }
        return I.replace("{{date}}", R79(G, Q)).replace("{{time}}", T79(Z, Q))
    },
    P79;
var j79 = L(() => {
    P79 = {
        p: T79,
        P: OP3
    }
});

function S79(A) {
    return RP3.test(A)
}

function _79(A) {
    return TP3.test(A)
}

function k79(A, Q, B) {
    let G = jP3(A, Q, B);
    if (console.warn(G), PP3.includes(A)) throw RangeError(G)
}

function jP3(A, Q, B) {
    let G = A[0] === "Y" ? "years" : "days of the month";
    return `Use \`${A.toLowerCase()}\` instead of \`${A}\` (in \`${Q}\`) for formatting ${G} to the input \`${B}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
var RP3, TP3, PP3;
var y79 = L(() => {
    RP3 = /^D+$/, TP3 = /^Y+$/, PP3 = ["D", "DD", "YY", "YYYY"]
});

function x79(A, Q, B) {
    let G = Ja(),
        Z = B?.locale ?? G.locale ?? ZX0,
        I = B?.firstWeekContainsDate ?? B?.locale?.options?.firstWeekContainsDate ?? G.firstWeekContainsDate ?? G.locale?.options?.firstWeekContainsDate ?? 1,
        Y = B?.weekStartsOn ?? B?.locale?.options?.weekStartsOn ?? G.weekStartsOn ?? G.locale?.options?.weekStartsOn ?? 0,
        J = nJ(A, B?.in);
    if (!V39(J)) throw RangeError("Invalid time value");
    let W = Q.match(_P3).map((F) => {
        let V = F[0];
        if (V === "p" || V === "P") {
            let K = P79[V];
            return K(F, Z.formatLong)
        }
        return F
    }).join("").match(SP3).map((F) => {
        if (F === "''") return {
            isToken: !1,
            value: "'"
        };
        let V = F[0];
        if (V === "'") return {
            isToken: !1,
            value: vP3(F)
        };
        if (XX0[V]) return {
            isToken: !0,
            value: F
        };
        if (V.match(xP3)) throw RangeError("Format string contains an unescaped latin alphabet character `" + V + "`");
        return {
            isToken: !1,
            value: F
        }
    });
    if (Z.localize.preprocessor) W = Z.localize.preprocessor(J, W);
    let X = {
        firstWeekContainsDate: I,
        weekStartsOn: Y,
        locale: Z
    };
    return W.map((F) => {
        if (!F.isToken) return F.value;
        let V = F.value;
        if (!B?.useAdditionalWeekYearTokens && _79(V) || !B?.useAdditionalDayOfYearTokens && S79(V)) k79(V, Q, String(A));
        let K = XX0[V[0]];
        return K(J, V, Z.localize, X)
    }).join("")
}

function vP3(A) {
    let Q = A.match(kP3);
    if (!Q) return A;
    return Q[1].replace(yP3, "'")
}
var SP3, _P3, kP3, yP3, xP3;
var v79 = L(() => {
    z79();
    SjA();
    O79();
    j79();
    y79();
    BX0();
    oq();
    SP3 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, _P3 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, kP3 = /^'([^]*?)'?$/, yP3 = /''/g, xP3 = /[a-zA-Z]/
});
var b79 = () => {};
var f79 = () => {};
var h79 = () => {};
var g79 = () => {};
var u79 = () => {};
var m79 = () => {};
var d79 = () => {};
var c79 = () => {};
var p79 = () => {};
var l79 = () => {};
var i79 = () => {};
var n79 = () => {};
var a79 = () => {};
var s79 = () => {};
var r79 = () => {};
var o79 = () => {};
var t79 = () => {};
var e79 = () => {};
var AG9 = () => {};
var QG9 = () => {};
var BG9 = () => {};
var GG9 = () => {};
var ZG9 = () => {};
var IG9 = () => {};
var YG9 = () => {};
var JG9 = () => {};
var WG9 = () => {};
var XG9 = () => {};
var FG9 = () => {};
var VG9 = () => {};
var KG9 = () => {};
var DG9 = () => {};
var HG9 = () => {};
var CG9 = () => {};
var EG9 = () => {};
var zG9 = () => {};
var UG9 = () => {};
var $G9 = () => {};
var wG9 = () => {};
var qG9 = () => {};
var NG9 = () => {};
var LG9 = () => {};
var MG9 = () => {};
var OG9 = () => {};
var RG9 = () => {};
var TG9 = () => {};
var PG9 = () => {};
var jG9 = () => {};
var SG9 = () => {};
var _G9 = () => {};
var kG9 = () => {};
var yG9 = () => {};
var xG9 = () => {};
var vG9 = () => {};
var bG9 = () => {};
var fG9 = () => {};
var hG9 = () => {};
var gG9 = () => {};
var uG9 = () => {};
var mG9 = () => {};
var dG9 = () => {};
var cG9 = () => {};
var pG9 = () => {};
var lG9 = () => {};
var iG9 = () => {};
var nG9 = () => {};
var aG9 = () => {};
var sG9 = () => {};
var rG9 = () => {};
var oG9 = () => {};
var tG9 = () => {};
var eG9 = () => {};
var AZ9 = () => {};
var QZ9 = () => {};
var BZ9 = () => {};
var GZ9 = () => {};
var ZZ9 = () => {};
var IZ9 = () => {};
var YZ9 = () => {};
var JZ9 = () => {};
var WZ9 = () => {};
var XZ9 = () => {};
var FZ9 = () => {};
var VZ9 = () => {};
var KZ9 = () => {};
var DZ9 = () => {};
var HZ9 = () => {};
var CZ9 = () => {};
var EZ9 = () => {};
var zZ9 = () => {};
var UZ9 = () => {};
var $Z9 = () => {};
var wZ9 = () => {};
var qZ9 = () => {};
var NZ9 = () => {};
var LZ9 = () => {};
var MZ9 = () => {};
var OZ9 = () => {};
var RZ9 = () => {};
var TZ9 = () => {};
var PZ9 = () => {};
var jZ9 = () => {};
var SZ9 = () => {};
var _Z9 = () => {};
var kZ9 = () => {};
var yZ9 = () => {};
var xZ9 = () => {};
var vZ9 = () => {};
var bZ9 = () => {};
var fZ9 = () => {};
var hZ9 = () => {};
var gZ9 = () => {};
var uZ9 = () => {};
var mZ9 = () => {};
var dZ9 = () => {};
var cZ9 = () => {};
var pZ9 = () => {};
var lZ9 = () => {};
var iZ9 = () => {};
var nZ9 = () => {};
var aZ9 = () => {};
var sZ9 = () => {};
var rZ9 = () => {};
var oZ9 = () => {};
var tZ9 = () => {};
var eZ9 = () => {};
var AI9 = () => {};
var QI9 = () => {};
var BI9 = () => {};
var GI9 = () => {};
var ZI9 = () => {};
var II9 = () => {};
var YI9 = () => {};
var JI9 = () => {};
var WI9 = () => {};
var XI9 = () => {};
var FI9 = () => {};
var VI9 = () => {};
var KI9 = () => {};
var DI9 = () => {};
var HI9 = () => {};
var CI9 = () => {};
var EI9 = () => {};
var zI9 = () => {};
var UI9 = () => {};
var $I9 = () => {};
var wI9 = () => {};
var qI9 = () => {};
var NI9 = () => {};
var LI9 = () => {};
var MI9 = () => {};
var OI9 = () => {};
var RI9 = () => {};
var TI9 = () => {};
var PI9 = () => {};
var jI9 = L(() => {
    x59();
    h59();
    k59();
    u59();
    n59();
    g59();
    a59();
    y59();
    s59();
    r59();
    o59();
    t59();
    e59();
    B39();
    G39();
    Z39();
    I39();
    Y39();
    Ya();
    J39();
    W39();
    K39();
    eW0();
    D39();
    H39();
    C39();
    z39();
    U39();
    $39();
    w39();
    q39();
    L39();
    M39();
    O39();
    j39();
    S39();
    _39();
    k39();
    y39();
    x39();
    v39();
    b39();
    f39();
    g39();
    u39();
    m39();
    c39();
    i39();
    n39();
    R39();
    a39();
    s39();
    o39();
    t39();
    e39();
    T39();
    A79();
    Q79();
    B79();
    G79();
    r39();
    p39();
    Z79();
    v79();
    b79();
    f79();
    h79();
    g79();
    u79();
    m79();
    d79();
    c79();
    p79();
    l79();
    i79();
    n79();
    a79();
    s79();
    IX0();
    r79();
    t79();
    e79();
    AG9();
    QG9();
    BG9();
    YX0();
    kI1();
    GG9();
    ZG9();
    IG9();
    YG9();
    JG9();
    E39();
    WG9();
    XG9();
    FG9();
    WX0();
    VG9();
    vI1();
    DG9();
    HG9();
    CG9();
    EG9();
    zG9();
    UG9();
    $G9();
    wG9();
    qG9();
    NG9();
    LG9();
    QX0();
    MG9();
    OG9();
    RG9();
    TG9();
    PG9();
    P39();
    o79();
    vG9();
    bG9();
    fG9();
    X39();
    gG9();
    mG9();
    dG9();
    pG9();
    lG9();
    iG9();
    aG9();
    uG9();
    sG9();
    v59();
    b59();
    rG9();
    oG9();
    tG9();
    eG9();
    AZ9();
    QZ9();
    BZ9();
    GZ9();
    ZZ9();
    IZ9();
    YZ9();
    JZ9();
    BX0();
    WZ9();
    f59();
    XZ9();
    VZ9();
    KZ9();
    HZ9();
    CZ9();
    KG9();
    EZ9();
    DZ9();
    zZ9();
    UZ9();
    A39();
    $Z9();
    wZ9();
    qZ9();
    NZ9();
    Q39();
    LZ9();
    MZ9();
    OZ9();
    RZ9();
    TZ9();
    PZ9();
    jZ9();
    SZ9();
    _Z9();
    kZ9();
    yZ9();
    xZ9();
    vZ9();
    xG9();
    bZ9();
    fZ9();
    hZ9();
    gZ9();
    uZ9();
    mZ9();
    dZ9();
    cZ9();
    pZ9();
    lZ9();
    iZ9();
    nZ9();
    aZ9();
    sZ9();
    rZ9();
    oZ9();
    tZ9();
    AI9();
    QI9();
    kG9();
    BI9();
    GI9();
    ZI9();
    yG9();
    _G9();
    i59();
    II9();
    YI9();
    eZ9();
    JI9();
    WI9();
    SG9();
    XI9();
    FI9();
    tW0();
    VI9();
    hG9();
    _jA();
    AX0();
    cG9();
    d39();
    h39();
    nG9();
    KI9();
    DI9();
    cXA();
    JX0();
    GX0();
    HI9();
    EI9();
    zI9();
    FZ9();
    UI9();
    N39();
    $I9();
    wI9();
    CI9();
    qI9();
    NI9();
    LI9();
    MI9();
    oq();
    jG9();
    OI9();
    RI9();
    TI9();
    PI9()
});

function SI9() {
    let [A, Q] = kjA.useState([]), [B, G] = kjA.useState(0);
    if (kjA.useEffect(() => {
            let Z = lQ.getSandboxViolationStore();
            return Z.subscribe((Y) => {
                Q(Y.slice(-10)), G(Z.getTotalCount())
            })
        }, []), !lQ.isSandboxingEnabled() || uQ() === "linux") return null;
    if (B === 0) return null;
    return tE.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, tE.createElement(j, {
        marginLeft: 0
    }, tE.createElement($, {
        color: "permission"
    }, "⧈ Sandbox blocked ", B, " total", " ", B === 1 ? "operation" : "operations")), A.map((Z, I) => tE.createElement(j, {
        key: `${Z.timestamp.getTime()}-${I}`,
        paddingLeft: 2
    }, tE.createElement($, {
        dimColor: !0
    }, x79(Z.timestamp, "h:mm:ssa"), Z.command ? ` ${Z.command}:` : "", " ", Z.line))), tE.createElement(j, {
        paddingLeft: 2
    }, tE.createElement($, {
        dimColor: !0
    }, "… showing last ", Math.min(10, A.length), " of ", B)))
}
var tE, kjA;
var _I9 = L(() => {
    hA();
    MJ();
    jI9();
    s5();
    tE = GA(VA(), 1), kjA = GA(VA(), 1)
});

function bI1() {
    let {
        addNotification: A
    } = _Z(), [Q, B] = nXA.useState(() => {
        let {
            errors: Z
        } = Wa();
        return Z
    }), G = nXA.useCallback(() => {
        let {
            errors: Z
        } = Wa();
        B(Z)
    }, []);
    return CGA(G), nXA.useEffect(() => {
        if (Q.length > 0) A({
            key: "settings-errors",
            jsx: FX0.createElement($, {
                dimColor: !0
            }, "Found ", Q.length, " invalid settings", " ", Q.length === 1 ? "file" : "files", " · /doctor for details"),
            priority: "high"
        })
    }, [Q, A]), Q
}
var nXA, FX0;
var VX0 = L(() => {
    RB();
    QoA();
    UU();
    hA();
    nXA = GA(VA(), 1), FX0 = GA(VA(), 1)
});

function yI9({
    mcpClients: A = []
}) {
    let {
        addNotification: Q
    } = _Z();
    kI9.useEffect(() => {
        let B = A.filter((Z) => Z.type === "failed" && Z.config.type !== "sse-ide" && Z.config.type !== "ws-ide"),
            G = A.filter((Z) => Z.type === "needs-auth");
        if (B.length === 0 && G.length === 0) return;
        if (B.length > 0) Q({
            key: "mcp-failed",
            jsx: UK.createElement(UK.Fragment, null, UK.createElement($, {
                color: "error"
            }, B.length, " MCP", " ", B.length === 1 ? "server" : "servers", " failed"), UK.createElement($, {
                dimColor: !0
            }, " · /mcp for info")),
            priority: "medium"
        });
        if (G.length) Q({
            key: "mcp-needs-auth",
            jsx: UK.createElement(UK.Fragment, null, UK.createElement($, {
                color: "warning"
            }, G.length, " MCP", " ", G.length === 1 ? "server needs" : "servers need", " ", "auth"), UK.createElement($, {
                dimColor: !0
            }, " · /mcp for info")),
            priority: "medium"
        })
    }, [Q, A])
}
var UK, kI9;
var xI9 = L(() => {
    hA();
    UU();
    UK = GA(VA(), 1), kI9 = GA(VA(), 1)
});

function vI9() {
    let {
        addNotification: A
    } = _Z(), [Q] = _Q(), {
        installationStatus: B
    } = Q.plugins, {
        totalFailed: G,
        failedMarketplacesCount: Z,
        failedPluginsCount: I
    } = fI1.useMemo(() => {
        if (!B) return {
            totalFailed: 0,
            failedMarketplacesCount: 0,
            failedPluginsCount: 0
        };
        let Y = B.marketplaces.filter((W) => W.status === "failed"),
            J = B.plugins.filter((W) => W.status === "failed");
        return {
            totalFailed: Y.length + J.length,
            failedMarketplacesCount: Y.length,
            failedPluginsCount: J.length
        }
    }, [B]);
    fI1.useEffect(() => {
        if (!B) {
            g("No installation status to monitor");
            return
        }
        if (G === 0) return;
        if (g(`Plugin installation status: ${Z} failed marketplaces, ${I} failed plugins`), G === 0) return;
        g(`Adding notification for ${G} failed installations`), A({
            key: "plugin-install-failed",
            jsx: Gx.createElement(Gx.Fragment, null, Gx.createElement($, {
                color: "error"
            }, G, " plugin", G === 1 ? "" : "s", " failed to install"), Gx.createElement($, {
                dimColor: !0
            }, " · /plugin for details")),
            priority: "medium"
        })
    }, [A, G, Z, I])
}
var Gx, fI1;
var bI9 = L(() => {
    hA();
    UU();
    H9();
    D0();
    Gx = GA(VA(), 1), fI1 = GA(VA(), 1)
});
// Async function: fI9
async function fI9() {
    let A = c0(),
        Q = new Map;
    if (A.extraKnownMarketplaces)
        for (let [B, G] of Object.entries(A.extraKnownMarketplaces)) Q.set(B, G);
    return Q
}

async function hI9(A) {
    try {
        let Q = await TZ(),
            B = [];
        for (let [G] of A)
            if (!Q[G]) B.push(G);
        return B
    } catch (Q) {
        return e(Q instanceof Error ? Q : Error(String(Q))), []
    }
}
var gI9 = L(() => {
    RB();
    kH();
    u1()
});

function bP3() {
    return new Date().toISOString()
}

async function nP(A, Q) {
    if (typeof Q.source === "string") throw Error("cacheAndRegisterPlugin should only be used for external plugins");
    let B = await U3A(Q.source, {
            manifest: Q
        }),
        G = await LI1(B.path),
        Z = bP3();
    return U59(A, {
        version: B.manifest.version || Q.version || "unknown",
        installedAt: Z,
        lastUpdated: Z,
        installPath: B.path,
        gitCommitSha: G,
        isLocal: !1
    }), B.path
}
var yjA = L(() => {
    Ia();
    NF()
});
// Async function: KX0
async function KX0() {
    let A = c0(),
        Q = [];
    if (A.enabledPlugins) {
        for (let [B, G] of Object.entries(A.enabledPlugins))
            if (B.includes("@") && G) Q.push(B)
    }
    return Q
}
// Async function: DX0
async function DX0() {
    if (lW0().catch((B) => {
            e(B instanceof Error ? B : Error(String(B)))
        }), j8("tengu_enable_versioned_plugins")) {
        let B = pW0(),
            G = Object.keys(B.plugins);
        return g(`Found ${G.length} installed plugins (V2 format, versioned plugins enabled)`), G
    }
    let A = dXA(),
        Q = Object.keys(A);
    return g(`Found ${Q.length} installed plugins`), Q
}

async function uI9(A) {
    try {
        let Q = await DX0(),
            B = [];
        for (let G of A)
            if (!Q.includes(G)) try {
                if (await Cc(G)) B.push(G)
            } catch (Z) {
                g(`Failed to check plugin ${G} in marketplace: ${Z}`)
            }
        return B
    } catch (Q) {
        return e(Q instanceof Error ? Q : Error(String(Q))), []
    }
}
var mI9 = L(() => {
    RB();
    kH();
    u1();
    D0();
    O9();
    NF();
    RB();
    o0();
    yjA();
    Ia()
});

function HX0(A, Q, B, G) {
    A((Z) => ({
        ...Z,
        plugins: {
            ...Z.plugins,
            installationStatus: {
                ...Z.plugins.installationStatus,
                marketplaces: Z.plugins.installationStatus.marketplaces.map((I) => I.name === Q ? {
                    ...I,
                    status: B,
                    error: G
                } : I)
            }
        }
    }))
}

function CX0(A, Q, B, G) {
    A((Z) => ({
        ...Z,
        plugins: {
            ...Z.plugins,
            installationStatus: {
                ...Z.plugins.installationStatus,
                plugins: Z.plugins.installationStatus.plugins.map((I) => I.id === Q ? {
                    ...I,
                    status: B,
                    error: G
                } : I)
            }
        }
    }))
}

async function fP3(A, Q, B) {
    let G = [],
        Z = [];
    for (let I of A) {
        let Y = Q.get(I);
        if (!Y) continue;
        HX0(B, I, "installing");
        try {
            await go(Y.source), G.push(I), HX0(B, I, "installed"), fQB(), $3A(), await hP3(I, B)
        } catch (J) {
            let W = J instanceof Error ? J.message : String(J);
            Z.push({
                name: I,
                error: W
            }), HX0(B, I, "failed", W), e(J instanceof Error ? J : Error(String(J)))
        }
    }
    return {
        installed: G,
        failed: Z
    }
}