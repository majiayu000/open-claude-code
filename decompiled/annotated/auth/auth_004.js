/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: auth_004.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (11次) = lazyLoader(fn) - Lazy module loader
 *   U        (10次) = moduleWrapper(fn) - CommonJS module wrapper
 *   UA       (10次) = require(moduleName) - Node.js require
 *   GA       (2次) = esmImport(module) - ESM import helper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 4/61
 * Lines: 13492 - 14989 (1498 lines)
 * Original file: cli.js
 */

    lG();
    f1.inherits(x$0, NB, {
        __CANCEL__: !0
    });
    s$ = x$0
});

function kj(A, Q, B) {
    let G = B.config.validateStatus;
    if (!B.status || !G || G(B.status)) A(B);
    else Q(new NB("Request failed with status code " + B.status, [NB.ERR_BAD_REQUEST, NB.ERR_BAD_RESPONSE][Math.floor(B.status / 100) - 4], B.config, B.request, B))
}
var jkA = L(() => {
    a$()
});

function iX1(A) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(A)
}

function nX1(A, Q) {
    return Q ? A.replace(/\/?\/$/, "") + "/" + Q.replace(/^\/+/, "") : A
}

function Ns(A, Q, B) {
    let G = !iX1(Q);
    if (A && (G || B == !1)) return nX1(A, Q);
    return Q
}
var SkA = () => {};
var v$0 = U((Qj9) => {
    var rP9 = UA("url").parse,
        oP9 = {
            ftp: 21,
            gopher: 70,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        },
        tP9 = String.prototype.endsWith || function(A) {
            return A.length <= this.length && this.indexOf(A, this.length - A.length) !== -1
        };

    function eP9(A) {
        var Q = typeof A === "string" ? rP9(A) : A || {},
            B = Q.protocol,
            G = Q.host,
            Z = Q.port;
        if (typeof G !== "string" || !G || typeof B !== "string") return "";
        if (B = B.split(":", 1)[0], G = G.replace(/:\d*$/, ""), Z = parseInt(Z) || oP9[B] || 0, !Aj9(G, Z)) return "";
        var I = W2A("npm_config_" + B + "_proxy") || W2A(B + "_proxy") || W2A("npm_config_proxy") || W2A("all_proxy");
        if (I && I.indexOf("://") === -1) I = B + "://" + I;
        return I
    }

    function Aj9(A, Q) {
        var B = (W2A("npm_config_no_proxy") || W2A("no_proxy")).toLowerCase();
        if (!B) return !0;
        if (B === "*") return !1;
        return B.split(/[,\s]/).every(function(G) {
            if (!G) return !0;
            var Z = G.match(/^(.+):(\d+)$/),
                I = Z ? Z[1] : G,
                Y = Z ? parseInt(Z[2]) : 0;
            if (Y && Y !== Q) return !0;
            if (!/^[.*]/.test(I)) return A !== I;
            if (I.charAt(0) === "*") I = I.slice(1);
            return !tP9.call(A, I)
        })
    }

    function W2A(A) {
        return process.env[A.toLowerCase()] || process.env[A.toUpperCase()] || ""
    }
    Qj9.getProxyForUrl = eP9
});
var aX1 = U((ki3, b$0) => {
    var X2A = 1000,
        F2A = X2A * 60,
        V2A = F2A * 60,
        Ls = V2A * 24,
        Gj9 = Ls * 7,
        Zj9 = Ls * 365.25;
    b$0.exports = function(A, Q) {
        Q = Q || {};
        var B = typeof A;
        if (B === "string" && A.length > 0) return Ij9(A);
        else if (B === "number" && isFinite(A)) return Q.long ? Jj9(A) : Yj9(A);
        throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(A))
    };

    function Ij9(A) {
        if (A = String(A), A.length > 100) return;
        var Q = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(A);
        if (!Q) return;
        var B = parseFloat(Q[1]),
            G = (Q[2] || "ms").toLowerCase();
        switch (G) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
                return B * Zj9;
            case "weeks":
            case "week":
            case "w":
                return B * Gj9;
            case "days":
            case "day":
            case "d":
                return B * Ls;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
                return B * V2A;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
                return B * F2A;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
                return B * X2A;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
                return B;
            default:
                return
        }
    }

    function Yj9(A) {
        var Q = Math.abs(A);
        if (Q >= Ls) return Math.round(A / Ls) + "d";
        if (Q >= V2A) return Math.round(A / V2A) + "h";
        if (Q >= F2A) return Math.round(A / F2A) + "m";
        if (Q >= X2A) return Math.round(A / X2A) + "s";
        return A + "ms"
    }

    function Jj9(A) {
        var Q = Math.abs(A);
        if (Q >= Ls) return _kA(A, Q, Ls, "day");
        if (Q >= V2A) return _kA(A, Q, V2A, "hour");
        if (Q >= F2A) return _kA(A, Q, F2A, "minute");
        if (Q >= X2A) return _kA(A, Q, X2A, "second");
        return A + " ms"
    }

    function _kA(A, Q, B, G) {
        var Z = Q >= B * 1.5;
        return Math.round(A / B) + " " + G + (Z ? "s" : "")
    }
});
var sX1 = U((yi3, f$0) => {
    function Wj9(A) {
        B.debug = B, B.default = B, B.coerce = W, B.disable = Y, B.enable = Z, B.enabled = J, B.humanize = aX1(), B.destroy = X, Object.keys(A).forEach((F) => {
            B[F] = A[F]
        }), B.names = [], B.skips = [], B.formatters = {};

        function Q(F) {
            let V = 0;
            for (let K = 0; K < F.length; K++) V = (V << 5) - V + F.charCodeAt(K), V |= 0;
            return B.colors[Math.abs(V) % B.colors.length]
        }
        B.selectColor = Q;

        function B(F) {
            let V, K = null,
                D, H;

            function C(...E) {
                if (!C.enabled) return;
                let z = C,
                    w = Number(new Date),
                    N = w - (V || w);
                if (z.diff = N, z.prev = V, z.curr = w, V = w, E[0] = B.coerce(E[0]), typeof E[0] !== "string") E.unshift("%O");
                let q = 0;
                E[0] = E[0].replace(/%([a-zA-Z%])/g, (P, y) => {
                    if (P === "%%") return "%";
                    q++;
                    let v = B.formatters[y];
                    if (typeof v === "function") {
                        let x = E[q];
                        P = v.call(z, x), E.splice(q, 1), q--
                    }
                    return P
                }), B.formatArgs.call(z, E), (z.log || B.log).apply(z, E)
            }
            if (C.namespace = F, C.useColors = B.useColors(), C.color = B.selectColor(F), C.extend = G, C.destroy = B.destroy, Object.defineProperty(C, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: () => {
                        if (K !== null) return K;
                        if (D !== B.namespaces) D = B.namespaces, H = B.enabled(F);
                        return H
                    },
                    set: (E) => {
                        K = E
                    }
                }), typeof B.init === "function") B.init(C);
            return C
        }

        function G(F, V) {
            let K = B(this.namespace + (typeof V > "u" ? ":" : V) + F);
            return K.log = this.log, K
        }

        function Z(F) {
            B.save(F), B.namespaces = F, B.names = [], B.skips = [];
            let V = (typeof F === "string" ? F : "").trim().replace(" ", ",").split(",").filter(Boolean);
            for (let K of V)
                if (K[0] === "-") B.skips.push(K.slice(1));
                else B.names.push(K)
        }

        function I(F, V) {
            let K = 0,
                D = 0,
                H = -1,
                C = 0;
            while (K < F.length)
                if (D < V.length && (V[D] === F[K] || V[D] === "*"))
                    if (V[D] === "*") H = D, C = K, D++;
                    else K++, D++;
            else if (H !== -1) D = H + 1, C++, K = C;
            else return !1;
            while (D < V.length && V[D] === "*") D++;
            return D === V.length
        }

        function Y() {
            let F = [...B.names, ...B.skips.map((V) => "-" + V)].join(",");
            return B.enable(""), F
        }

        function J(F) {
            for (let V of B.skips)
                if (I(F, V)) return !1;
            for (let V of B.names)
                if (I(F, V)) return !0;
            return !1
        }

        function W(F) {
            if (F instanceof Error) return F.stack || F.message;
            return F
        }

        function X() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }
        return B.enable(B.load()), B
    }
    f$0.exports = Wj9
});
var g$0 = U((h$0, ykA) => {
    h$0.formatArgs = Fj9;
    h$0.save = Vj9;
    h$0.load = Kj9;
    h$0.useColors = Xj9;
    h$0.storage = Dj9();
    h$0.destroy = (() => {
        let A = !1;
        return () => {
            if (!A) A = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }
    })();
    h$0.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function Xj9() {
        if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
        if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        let A;
        return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (A = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(A[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }

    function Fj9(A) {
        if (A[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + A[0] + (this.useColors ? "%c " : " ") + "+" + ykA.exports.humanize(this.diff), !this.useColors) return;
        let Q = "color: " + this.color;
        A.splice(1, 0, Q, "color: inherit");
        let B = 0,
            G = 0;
        A[0].replace(/%[a-zA-Z%]/g, (Z) => {
            if (Z === "%%") return;
            if (B++, Z === "%c") G = B
        }), A.splice(G, 0, Q)
    }
    h$0.log = console.debug || console.log || (() => {});

    function Vj9(A) {
        try {
            if (A) h$0.storage.setItem("debug", A);
            else h$0.storage.removeItem("debug")
        } catch (Q) {}
    }

    function Kj9() {
        let A;
        try {
            A = h$0.storage.getItem("debug")
        } catch (Q) {}
        if (!A && typeof process < "u" && "env" in process) A = process.env.DEBUG;
        return A
    }

    function Dj9() {
        try {
            return localStorage
        } catch (A) {}
    }
    ykA.exports = sX1()(h$0);
    var {
        formatters: Hj9
    } = ykA.exports;
    Hj9.j = function(A) {
        try {
            return JSON.stringify(A)
        } catch (Q) {
            return "[UnexpectedJSONParseError]: " + Q.message
        }
    }
});
var NVA = U((vi3, u$0) => {
    u$0.exports = (A, Q = process.argv) => {
        let B = A.startsWith("-") ? "" : A.length === 1 ? "-" : "--",
            G = Q.indexOf(B + A),
            Z = Q.indexOf("--");
        return G !== -1 && (Z === -1 || G < Z)
    }
});
var c$0 = U((bi3, d$0) => {
    var Nj9 = UA("os"),
        m$0 = UA("tty"),
        xN = NVA(),
        {
            env: EV
        } = process,
        xkA;
    if (xN("no-color") || xN("no-colors") || xN("color=false") || xN("color=never")) xkA = 0;
    else if (xN("color") || xN("colors") || xN("color=true") || xN("color=always")) xkA = 1;

    function Lj9() {
        if ("FORCE_COLOR" in EV) {
            if (EV.FORCE_COLOR === "true") return 1;
            if (EV.FORCE_COLOR === "false") return 0;
            return EV.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(EV.FORCE_COLOR, 10), 3)
        }
    }

    function Mj9(A) {
        if (A === 0) return !1;
        return {
            level: A,
            hasBasic: !0,
            has256: A >= 2,
            has16m: A >= 3
        }
    }

    function Oj9(A, {
        streamIsTTY: Q,
        sniffFlags: B = !0
    } = {}) {
        let G = Lj9();
        if (G !== void 0) xkA = G;
        let Z = B ? xkA : G;
        if (Z === 0) return 0;
        if (B) {
            if (xN("color=16m") || xN("color=full") || xN("color=truecolor")) return 3;
            if (xN("color=256")) return 2
        }
        if (A && !Q && Z === void 0) return 0;
        let I = Z || 0;
        if (EV.TERM === "dumb") return I;
        if (process.platform === "win32") {
            let Y = Nj9.release().split(".");
            if (Number(Y[0]) >= 10 && Number(Y[2]) >= 10586) return Number(Y[2]) >= 14931 ? 3 : 2;
            return 1
        }
        if ("CI" in EV) {
            if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE", "DRONE"].some((Y) => (Y in EV)) || EV.CI_NAME === "codeship") return 1;
            return I
        }
        if ("TEAMCITY_VERSION" in EV) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(EV.TEAMCITY_VERSION) ? 1 : 0;
        if (EV.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in EV) {
            let Y = Number.parseInt((EV.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch (EV.TERM_PROGRAM) {
                case "iTerm.app":
                    return Y >= 3 ? 3 : 2;
                case "Apple_Terminal":
                    return 2
            }
        }
        if (/-256(color)?$/i.test(EV.TERM)) return 2;
        if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(EV.TERM)) return 1;
        if ("COLORTERM" in EV) return 1;
        return I
    }

    function rX1(A, Q = {}) {
        let B = Oj9(A, {
            streamIsTTY: A && A.isTTY,
            ...Q
        });
        return Mj9(B)
    }
    d$0.exports = {
        supportsColor: rX1,
        stdout: rX1({
            isTTY: m$0.isatty(1)
        }),
        stderr: rX1({
            isTTY: m$0.isatty(2)
        })
    }
});
var n$0 = U((l$0, bkA) => {
    var Rj9 = UA("tty"),
        vkA = UA("util");
    l$0.init = yj9;
    l$0.log = Sj9;
    l$0.formatArgs = Pj9;
    l$0.save = _j9;
    l$0.load = kj9;
    l$0.useColors = Tj9;
    l$0.destroy = vkA.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    l$0.colors = [6, 2, 3, 4, 5, 1];
    try {
        let A = c$0();
        if (A && (A.stderr || A).level >= 2) l$0.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]
    } catch (A) {}
    l$0.inspectOpts = Object.keys(process.env).filter((A) => {
        return /^debug_/i.test(A)
    }).reduce((A, Q) => {
        let B = Q.substring(6).toLowerCase().replace(/_([a-z])/g, (Z, I) => {
                return I.toUpperCase()
            }),
            G = process.env[Q];
        if (/^(yes|on|true|enabled)$/i.test(G)) G = !0;
        else if (/^(no|off|false|disabled)$/i.test(G)) G = !1;
        else if (G === "null") G = null;
        else G = Number(G);
        return A[B] = G, A
    }, {});

    function Tj9() {
        return "colors" in l$0.inspectOpts ? Boolean(l$0.inspectOpts.colors) : Rj9.isatty(process.stderr.fd)
    }

    function Pj9(A) {
        let {
            namespace: Q,
            useColors: B
        } = this;
        if (B) {
            let G = this.color,
                Z = "\x1B[3" + (G < 8 ? G : "8;5;" + G),
                I = `  ${Z};1m${Q} \x1B[0m`;
            A[0] = I + A[0].split(`
`).join(`
` + I), A.push(Z + "m+" + bkA.exports.humanize(this.diff) + "\x1B[0m")
        } else A[0] = jj9() + Q + " " + A[0]
    }

    function jj9() {
        if (l$0.inspectOpts.hideDate) return "";
        return new Date().toISOString() + " "
    }

    function Sj9(...A) {
        return process.stderr.write(vkA.formatWithOptions(l$0.inspectOpts, ...A) + `
`)
    }

    function _j9(A) {
        if (A) process.env.DEBUG = A;
        else delete process.env.DEBUG
    }

    function kj9() {
        return process.env.DEBUG
    }

    function yj9(A) {
        A.inspectOpts = {};
        let Q = Object.keys(l$0.inspectOpts);
        for (let B = 0; B < Q.length; B++) A.inspectOpts[Q[B]] = l$0.inspectOpts[Q[B]]
    }
    bkA.exports = sX1()(l$0);
    var {
        formatters: p$0
    } = bkA.exports;
    p$0.o = function(A) {
        return this.inspectOpts.colors = this.useColors, vkA.inspect(A, this.inspectOpts).split(`
`).map((Q) => Q.trim()).join(" ")
    };
    p$0.O = function(A) {
        return this.inspectOpts.colors = this.useColors, vkA.inspect(A, this.inspectOpts)
    }
});
var Os = U((hi3, oX1) => {
    if (typeof process > "u" || process.type === "renderer" || !1 || process.__nwjs) oX1.exports = g$0();
    else oX1.exports = n$0()
});
var s$0 = U((gi3, a$0) => {
    var LVA;
    a$0.exports = function() {
        if (!LVA) {
            try {
                LVA = Os()("follow-redirects")
            } catch (A) {}
            if (typeof LVA !== "function") LVA = function() {}
        }
        LVA.apply(null, arguments)
    }
});
var Aw0 = U((ui3, XF1) => {
    var OVA = UA("url"),
        MVA = OVA.URL,
        mj9 = UA("http"),
        dj9 = UA("https"),
        BF1 = UA("stream").Writable,
        GF1 = UA("assert"),
        r$0 = s$0();
    (function() {
        var Q = typeof process < "u",
            B = typeof window < "u" && typeof document < "u",
            G = Ts(Error.captureStackTrace);
        if (!Q && (B || !G)) console.warn("The follow-redirects package should be excluded from browser builds.")
    })();
    var ZF1 = !1;
    try {
        GF1(new MVA(""))
    } catch (A) {
        ZF1 = A.code === "ERR_INVALID_URL"
    }
    var cj9 = ["auth", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "hash"],
        IF1 = ["abort", "aborted", "connect", "error", "socket", "timeout"],
        YF1 = Object.create(null);
    IF1.forEach(function(A) {
        YF1[A] = function(Q, B, G) {
            this._redirectable.emit(A, Q, B, G)
        }
    });
    var eX1 = RVA("ERR_INVALID_URL", "Invalid URL", TypeError),
        AF1 = RVA("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"),
        pj9 = RVA("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", AF1),
        lj9 = RVA("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"),
        ij9 = RVA("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        nj9 = BF1.prototype.destroy || t$0;

    function vz(A, Q) {
        if (BF1.call(this), this._sanitizeOptions(A), this._options = A, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], Q) this.on("response", Q);
        var B = this;
        this._onNativeResponse = function(G) {
            try {
                B._processResponse(G)
            } catch (Z) {
                B.emit("error", Z instanceof AF1 ? Z : new AF1({
                    cause: Z
                }))
            }
        }, this._performRequest()
    }
    vz.prototype = Object.create(BF1.prototype);
    vz.prototype.abort = function() {
        WF1(this._currentRequest), this._currentRequest.abort(), this.emit("abort")
    };
    vz.prototype.destroy = function(A) {
        return WF1(this._currentRequest, A), nj9.call(this, A), this
    };
    vz.prototype.write = function(A, Q, B) {
        if (this._ending) throw new ij9;
        if (!Rs(A) && !rj9(A)) throw TypeError("data should be a string, Buffer or Uint8Array");
        if (Ts(Q)) B = Q, Q = null;
        if (A.length === 0) {
            if (B) B();
            return
        }
        if (this._requestBodyLength + A.length <= this._options.maxBodyLength) this._requestBodyLength += A.length, this._requestBodyBuffers.push({
            data: A,
            encoding: Q
        }), this._currentRequest.write(A, Q, B);
        else this.emit("error", new lj9), this.abort()
    };
    vz.prototype.end = function(A, Q, B) {
        if (Ts(A)) B = A, A = Q = null;
        else if (Ts(Q)) B = Q, Q = null;
        if (!A) this._ended = this._ending = !0, this._currentRequest.end(null, null, B);
        else {
            var G = this,
                Z = this._currentRequest;
            this.write(A, Q, function() {
                G._ended = !0, Z.end(null, null, B)
            }), this._ending = !0
        }
    };
    vz.prototype.setHeader = function(A, Q) {
        this._options.headers[A] = Q, this._currentRequest.setHeader(A, Q)
    };
    vz.prototype.removeHeader = function(A) {
        delete this._options.headers[A], this._currentRequest.removeHeader(A)
    };
    vz.prototype.setTimeout = function(A, Q) {
        var B = this;

        function G(Y) {
            Y.setTimeout(A), Y.removeListener("timeout", Y.destroy), Y.addListener("timeout", Y.destroy)
        }

        function Z(Y) {
            if (B._timeout) clearTimeout(B._timeout);
            B._timeout = setTimeout(function() {
                B.emit("timeout"), I()
            }, A), G(Y)
        }

        function I() {
            if (B._timeout) clearTimeout(B._timeout), B._timeout = null;
            if (B.removeListener("abort", I), B.removeListener("error", I), B.removeListener("response", I), B.removeListener("close", I), Q) B.removeListener("timeout", Q);
            if (!B.socket) B._currentRequest.removeListener("socket", Z)
        }
        if (Q) this.on("timeout", Q);
        if (this.socket) Z(this.socket);
        else this._currentRequest.once("socket", Z);
        return this.on("socket", G), this.on("abort", I), this.on("error", I), this.on("response", I), this.on("close", I), this
    };
    ["flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach(function(A) {
        vz.prototype[A] = function(Q, B) {
            return this._currentRequest[A](Q, B)
        }
    });
    ["aborted", "connection", "socket"].forEach(function(A) {
        Object.defineProperty(vz.prototype, A, {
            get: function() {
                return this._currentRequest[A]
            }
        })
    });
    vz.prototype._sanitizeOptions = function(A) {
        if (!A.headers) A.headers = {};
        if (A.host) {
            if (!A.hostname) A.hostname = A.host;
            delete A.host
        }
        if (!A.pathname && A.path) {
            var Q = A.path.indexOf("?");
            if (Q < 0) A.pathname = A.path;
            else A.pathname = A.path.substring(0, Q), A.search = A.path.substring(Q)
        }
    };
    vz.prototype._performRequest = function() {
        var A = this._options.protocol,
            Q = this._options.nativeProtocols[A];
        if (!Q) throw TypeError("Unsupported protocol " + A);
        if (this._options.agents) {
            var B = A.slice(0, -1);
            this._options.agent = this._options.agents[B]
        }
        var G = this._currentRequest = Q.request(this._options, this._onNativeResponse);
        G._redirectable = this;
        for (var Z of IF1) G.on(Z, YF1[Z]);
        if (this._currentUrl = /^\//.test(this._options.path) ? OVA.format(this._options) : this._options.path, this._isRedirect) {
            var I = 0,
                Y = this,
                J = this._requestBodyBuffers;
            (function W(X) {
                if (G === Y._currentRequest) {
                    if (X) Y.emit("error", X);
                    else if (I < J.length) {
                        var F = J[I++];
                        if (!G.finished) G.write(F.data, F.encoding, W)
                    } else if (Y._ended) G.end()
                }
            })()
        }
    };
    vz.prototype._processResponse = function(A) {
        var Q = A.statusCode;
        if (this._options.trackRedirects) this._redirects.push({
            url: this._currentUrl,
            headers: A.headers,
            statusCode: Q
        });
        var B = A.headers.location;
        if (!B || this._options.followRedirects === !1 || Q < 300 || Q >= 400) {
            A.responseUrl = this._currentUrl, A.redirects = this._redirects, this.emit("response", A), this._requestBodyBuffers = [];
            return
        }
        if (WF1(this._currentRequest), A.destroy(), ++this._redirectCount > this._options.maxRedirects) throw new pj9;
        var G, Z = this._options.beforeRedirect;
        if (Z) G = Object.assign({
            Host: A.req.getHeader("host")
        }, this._options.headers);
        var I = this._options.method;
        if ((Q === 301 || Q === 302) && this._options.method === "POST" || Q === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) this._options.method = "GET", this._requestBodyBuffers = [], tX1(/^content-/i, this._options.headers);
        var Y = tX1(/^host$/i, this._options.headers),
            J = JF1(this._currentUrl),
            W = Y || J.host,
            X = /^\w+:/.test(B) ? this._currentUrl : OVA.format(Object.assign(J, {
                host: W
            })),
            F = aj9(B, X);
        if (r$0("redirecting to", F.href), this._isRedirect = !0, QF1(F, this._options), F.protocol !== J.protocol && F.protocol !== "https:" || F.host !== W && !sj9(F.host, W)) tX1(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
        if (Ts(Z)) {
            var V = {
                    headers: A.headers,
                    statusCode: Q
                },
                K = {
                    url: X,
                    method: I,
                    headers: G
                };
            Z(this._options, V, K), this._sanitizeOptions(this._options)
        }
        this._performRequest()
    };

    function o$0(A) {
        var Q = {
                maxRedirects: 21,
                maxBodyLength: 10485760
            },
            B = {};
        return Object.keys(A).forEach(function(G) {
            var Z = G + ":",
                I = B[Z] = A[G],
                Y = Q[G] = Object.create(I);

            function J(X, F, V) {
                if (oj9(X)) X = QF1(X);
                else if (Rs(X)) X = QF1(JF1(X));
                else V = F, F = e$0(X), X = {
                    protocol: Z
                };
                if (Ts(F)) V = F, F = null;
                if (F = Object.assign({
                        maxRedirects: Q.maxRedirects,
                        maxBodyLength: Q.maxBodyLength
                    }, X, F), F.nativeProtocols = B, !Rs(F.host) && !Rs(F.hostname)) F.hostname = "::1";
                return GF1.equal(F.protocol, Z, "protocol mismatch"), r$0("options", F), new vz(F, V)
            }

            function W(X, F, V) {
                var K = Y.request(X, F, V);
                return K.end(), K
            }
            Object.defineProperties(Y, {
                request: {
                    value: J,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                },
                get: {
                    value: W,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            })
        }), Q
    }

    function t$0() {}

    function JF1(A) {
        var Q;
        if (ZF1) Q = new MVA(A);
        else if (Q = e$0(OVA.parse(A)), !Rs(Q.protocol)) throw new eX1({
            input: A
        });
        return Q
    }

    function aj9(A, Q) {
        return ZF1 ? new MVA(A, Q) : JF1(OVA.resolve(Q, A))
    }

    function e$0(A) {
        if (/^\[/.test(A.hostname) && !/^\[[:0-9a-f]+\]$/i.test(A.hostname)) throw new eX1({
            input: A.href || A
        });
        if (/^\[/.test(A.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(A.host)) throw new eX1({
            input: A.href || A
        });
        return A
    }

    function QF1(A, Q) {
        var B = Q || {};
        for (var G of cj9) B[G] = A[G];
        if (B.hostname.startsWith("[")) B.hostname = B.hostname.slice(1, -1);
        if (B.port !== "") B.port = Number(B.port);
        return B.path = B.search ? B.pathname + B.search : B.pathname, B
    }

    function tX1(A, Q) {
        var B;
        for (var G in Q)
            if (A.test(G)) B = Q[G], delete Q[G];
        return B === null || typeof B > "u" ? void 0 : String(B).trim()
    }

    function RVA(A, Q, B) {
        function G(Z) {
            if (Ts(Error.captureStackTrace)) Error.captureStackTrace(this, this.constructor);
            Object.assign(this, Z || {}), this.code = A, this.message = this.cause ? Q + ": " + this.cause.message : Q
        }
        return G.prototype = new(B || Error), Object.defineProperties(G.prototype, {
            constructor: {
                value: G,
                enumerable: !1
            },
            name: {
                value: "Error [" + A + "]",
                enumerable: !1
            }
        }), G
    }

    function WF1(A, Q) {
        for (var B of IF1) A.removeListener(B, YF1[B]);
        A.on("error", t$0), A.destroy(Q)
    }

    function sj9(A, Q) {
        GF1(Rs(A) && Rs(Q));
        var B = A.length - Q.length - 1;
        return B > 0 && A[B] === "." && A.endsWith(Q)
    }

    function Rs(A) {
        return typeof A === "string" || A instanceof String
    }

    function Ts(A) {
        return typeof A === "function"
    }

    function rj9(A) {
        return typeof A === "object" && "length" in A
    }

    function oj9(A) {
        return MVA && A instanceof MVA
    }
    XF1.exports = o$0({
        http: mj9,
        https: dj9
    });
    XF1.exports.wrap = o$0
});
var Ps = "1.8.4";

function TVA(A) {
    let Q = /^([-+\w]{1,25})(:?\/\/|:)/.exec(A);
    return Q && Q[1] || ""
}

function FF1(A, Q, B) {
    let G = B && B.Blob || c3.classes.Blob,
        Z = TVA(A);
    if (Q === void 0 && G) Q = !0;
    if (Z === "data") {
        A = Z.length ? A.slice(Z.length + 1) : A;
        let I = tj9.exec(A);
        if (!I) throw new NB("Invalid URL", NB.ERR_INVALID_URL);
        let Y = I[1],
            J = I[2],
            W = I[3],
            X = Buffer.from(decodeURIComponent(W), J ? "base64" : "utf8");
        if (Q) {
            if (!G) throw new NB("Blob is not supported", NB.ERR_NOT_SUPPORT);
            return new G([X], {
                type: Y
            })
        }
        return X
    }
    throw new NB("Unsupported protocol " + Z, NB.ERR_NOT_SUPPORT)
}
var tj9;
var Qw0 = L(() => {
    a$();
    DR();
    tj9 = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/
});
import ej9 from "stream";
var VF1, Bw0, KF1;
var Gw0 = L(() => {
    lG();
    VF1 = Symbol("internals");
    Bw0 = class Bw0 extends ej9.Transform {
        constructor(A) {
            A = f1.toFlatObject(A, {
                maxRate: 0,
                chunkSize: 65536,
                minChunkSize: 100,
                timeWindow: 500,
                ticksRate: 2,
                samplesCount: 15
            }, null, (B, G) => {
                return !f1.isUndefined(G[B])
            });
            super({
                readableHighWaterMark: A.chunkSize
            });
            let Q = this[VF1] = {
                timeWindow: A.timeWindow,
                chunkSize: A.chunkSize,
                maxRate: A.maxRate,
                minChunkSize: A.minChunkSize,
                bytesSeen: 0,
                isCaptured: !1,
                notifiedBytesLoaded: 0,
                ts: Date.now(),
                bytes: 0,
                onReadCallback: null
            };
            this.on("newListener", (B) => {
                if (B === "progress") {
                    if (!Q.isCaptured) Q.isCaptured = !0
                }
            })
        }
        _read(A) {
            let Q = this[VF1];
            if (Q.onReadCallback) Q.onReadCallback();
            return super._read(A)
        }
        _transform(A, Q, B) {
            let G = this[VF1],
                Z = G.maxRate,
                I = this.readableHighWaterMark,
                Y = G.timeWindow,
                J = 1000 / Y,
                W = Z / J,
                X = G.minChunkSize !== !1 ? Math.max(G.minChunkSize, W * 0.01) : 0,
                F = (K, D) => {
                    let H = Buffer.byteLength(K);
                    if (G.bytesSeen += H, G.bytes += H, G.isCaptured && this.emit("progress", G.bytesSeen), this.push(K)) process.nextTick(D);
                    else G.onReadCallback = () => {
                        G.onReadCallback = null, process.nextTick(D)
                    }
                },
                V = (K, D) => {
                    let H = Buffer.byteLength(K),
                        C = null,
                        E = I,
                        z, w = 0;
                    if (Z) {
                        let N = Date.now();
                        if (!G.ts || (w = N - G.ts) >= Y) G.ts = N, z = W - G.bytes, G.bytes = z < 0 ? -z : 0, w = 0;
                        z = W - G.bytes
                    }
                    if (Z) {
                        if (z <= 0) return setTimeout(() => {
                            D(null, K)
                        }, Y - w);
                        if (z < E) E = z
                    }
                    if (E && H > E && H - E > X) C = K.subarray(E), K = K.subarray(0, E);
                    F(K, C ? () => {
                        process.nextTick(D, null, C)
                    } : D)
                };
            V(A, function K(D, H) {
                if (D) return B(D);
                if (H) V(H, K);
                else B(null)
            })
        }
    };
    KF1 = Bw0
});
var Zw0, AS9 = async function*(A) {
    if (A.stream) yield* A.stream();
    else if (A.arrayBuffer) yield await A.arrayBuffer();
    else if (A[Zw0]) yield* A[Zw0]();
    else yield A
}, fkA;
var DF1 = L(() => {
    ({
        asyncIterator: Zw0
    } = Symbol), fkA = AS9
});
import QS9 from "util";
import {
    Readable as BS9
} from "stream";
class Iw0 {
    constructor(A, Q) {
        let {
            escapeName: B
        } = this.constructor, G = f1.isString(Q), Z = `Content-Disposition: form-data; name="${B(A)}"${!G&&Q.name?`; filename="${B(Q.name)}"`:""}${uu}`;
        if (G) Q = PVA.encode(String(Q).replace(/\r?\n|\r\n?/g, uu));
        else Z += `Content-Type: ${Q.type||"application/octet-stream"}${uu}`;
        this.headers = PVA.encode(Z + uu), this.contentLength = G ? Q.byteLength : Q.size, this.size = this.headers.byteLength + this.contentLength + IS9, this.name = A, this.value = Q
    }
    async * encode() {
        yield this.headers;
        let {
            value: A
        } = this;
        if (f1.isTypedArray(A)) yield A;
        else yield* fkA(A);
        yield ZS9
    }
    static escapeName(A) {
        return String(A).replace(/[\r\n"]/g, (Q) => ({
            "\r": "%0D",
            "\n": "%0A",
            '"': "%22"
        })[Q])
    }
}
var GS9, PVA, uu = `\r
`,
    ZS9, IS9 = 2,
    YS9 = (A, Q, B) => {
        let {
            tag: G = "form-data-boundary",
            size: Z = 25,
            boundary: I = G + "-" + c3.generateString(Z, GS9)
        } = B || {};
        if (!f1.isFormData(A)) throw TypeError("FormData instance required");
        if (I.length < 1 || I.length > 70) throw Error("boundary must be 10-70 characters long");
        let Y = PVA.encode("--" + I + uu),
            J = PVA.encode("--" + I + "--" + uu + uu),
            W = J.byteLength,
            X = Array.from(A.entries()).map(([V, K]) => {
                let D = new Iw0(V, K);
                return W += D.size, D
            });
        W += Y.byteLength * X.length, W = f1.toFiniteNumber(W);
        let F = {
            "Content-Type": `multipart/form-data; boundary=${I}`
        };
        if (Number.isFinite(W)) F["Content-Length"] = W;
        return Q && Q(F), BS9.from(async function*() {
            for (let V of X) yield Y, yield* V.encode();
            yield J
        }())
    },
    Yw0;
var Jw0 = L(() => {
    lG();
    DF1();
    DR();
    GS9 = c3.ALPHABET.ALPHA_DIGIT + "-_", PVA = typeof TextEncoder === "function" ? new TextEncoder : new QS9.TextEncoder, ZS9 = PVA.encode(uu);
    Yw0 = YS9
});
import JS9 from "stream";
var Ww0, Xw0;
var Fw0 = L(() => {
    Ww0 = class Ww0 extends JS9.Transform {
        __transform(A, Q, B) {
            this.push(A), B()
        }
        _transform(A, Q, B) {
            if (A.length !== 0) {
                if (this._transform = this.__transform, A[0] !== 120) {
                    let G = Buffer.alloc(2);
                    G[0] = 120, G[1] = 156, this.push(G, Q)
                }
            }
            this.__transform(A, Q, B)
        }
    };
    Xw0 = Ww0
});
var WS9 = (A, Q) => {
        return f1.isAsyncFn(A) ? function(...B) {
            let G = B.pop();
            A.apply(this, B).then((Z) => {
                try {
                    Q ? G(null, ...Q(Z)) : G(null, Z)
                } catch (I) {
                    G(I)
                }
            }, G)
        } : A
    },
    Vw0;
var Kw0 = L(() => {
    lG();
    Vw0 = WS9
});

function XS9(A, Q) {
    A = A || 10;
    let B = Array(A),
        G = Array(A),
        Z = 0,
        I = 0,
        Y;
    return Q = Q !== void 0 ? Q : 1000,
        function(W) {
            let X = Date.now(),
                F = G[I];
            if (!Y) Y = X;
            B[Z] = W, G[Z] = X;
            let V = I,
                K = 0;
            while (V !== Z) K += B[V++], V = V % A;
            if (Z = (Z + 1) % A, Z === I) I = (I + 1) % A;
            if (X - Y < Q) return;
            let D = F && X - F;
            return D ? Math.round(K * 1000 / D) : void 0
        }
}
var Dw0;
var Hw0 = L(() => {
    Dw0 = XS9
});

function FS9(A, Q) {
    let B = 0,
        G = 1000 / Q,
        Z, I, Y = (X, F = Date.now()) => {
            if (B = F, Z = null, I) clearTimeout(I), I = null;
            A.apply(null, X)
        };
    return [(...X) => {
        let F = Date.now(),
            V = F - B;
        if (V >= G) Y(X, F);
        else if (Z = X, !I) I = setTimeout(() => {
            I = null, Y(Z)
        }, G - V)
    }, () => Z && Y(Z)]
}
var Cw0;
var Ew0 = L(() => {
    Cw0 = FS9
});
var ix = (A, Q, B = 3) => {
        let G = 0,
            Z = Dw0(50, 250);
        return Cw0((I) => {
            let Y = I.loaded,
                J = I.lengthComputable ? I.total : void 0,
                W = Y - G,
                X = Z(W),
                F = Y <= J;
            G = Y;
            let V = {
                loaded: Y,
                total: J,
                progress: J ? Y / J : void 0,
                bytes: W,
                rate: X ? X : void 0,
                estimated: X && J && F ? (J - Y) / X : void 0,
                event: I,
                lengthComputable: J != null,
                [Q ? "download" : "upload"]: !0
            };
            A(V)
        }, B)
    },
    K2A = (A, Q) => {
        let B = A != null;
        return [(G) => Q[0]({
            lengthComputable: B,
            total: A,
            loaded: G
        }), Q[1]]
    },
    D2A = (A) => (...Q) => f1.asap(() => A(...Q));
var hkA = L(() => {
    Hw0();
    Ew0();
    lG()
});
import VS9 from "http";
import KS9 from "https";
import DS9 from "util";
import mu from "zlib";
import H2A from "stream";
import {
    EventEmitter as HS9
} from "events";

function $S9(A, Q) {
    if (A.beforeRedirects.proxy) A.beforeRedirects.proxy(A);
    if (A.beforeRedirects.config) A.beforeRedirects.config(A, Q)
}

function Mw0(A, Q, B) {
    let G = Q;
    if (!G && G !== !1) {
        let Z = Nw0.default.getProxyForUrl(B);
        if (Z) G = new URL(Z)
    }
    if (G) {
        if (G.username) G.auth = (G.username || "") + ":" + (G.password || "");
        if (G.auth) {
            if (G.auth.username || G.auth.password) G.auth = (G.auth.username || "") + ":" + (G.auth.password || "");
            let I = Buffer.from(G.auth, "utf8").toString("base64");
            A.headers["Proxy-Authorization"] = "Basic " + I
        }
        A.headers.host = A.hostname + (A.port ? ":" + A.port : "");
        let Z = G.hostname || G.host;
        if (A.hostname = Z, A.host = Z, A.port = G.port, A.path = B, G.protocol) A.protocol = G.protocol.includes(":") ? G.protocol : `${G.protocol}:`
    }
    A.beforeRedirects.proxy = function(I) {
        Mw0(I, Q, I.href)
    }
}
var Nw0, Lw0, zw0, CS9, Uw0, ES9, zS9, US9, $w0, ww0 = (A, [Q, B]) => {
        return A.on("end", B).on("error", B), Q
    },
    wS9, qS9 = (A) => {
        return new Promise((Q, B) => {
            let G, Z, I = (W, X) => {
                    if (Z) return;
                    Z = !0, G && G(W, X)
                },
                Y = (W) => {
                    I(W), Q(W)
                },
                J = (W) => {
                    I(W, !0), B(W)
                };
            A(Y, J, (W) => G = W).catch(J)
        })
    },
    NS9 = ({
        address: A,
        family: Q
    }) => {
        if (!f1.isString(A)) throw TypeError("address must be a string");
        return {
            address: A,
            family: Q || (A.indexOf(".") < 0 ? 6 : 4)
        }
    },
    qw0 = (A, Q) => NS9(f1.isObject(A) ? A : {
        address: A,
        family: Q
    }),
    Ow0;
var Rw0 = L(() => {
    lG();
    jkA();
    SkA();
    MkA();
    OkA();
    a$();
    qs();
    DR();
    Qw0();
    _j();
    Gw0();
    Jw0();
    DF1();
    Fw0();
    Kw0();
    hkA();
    Nw0 = GA(v$0(), 1), Lw0 = GA(Aw0(), 1), zw0 = {
        flush: mu.constants.Z_SYNC_FLUSH,
        finishFlush: mu.constants.Z_SYNC_FLUSH
    }, CS9 = {
        flush: mu.constants.BROTLI_OPERATION_FLUSH,
        finishFlush: mu.constants.BROTLI_OPERATION_FLUSH
    }, Uw0 = f1.isFunction(mu.createBrotliDecompress), {
        http: ES9,
        https: zS9
    } = Lw0.default, US9 = /https:?/, $w0 = c3.protocols.map((A) => {
        return A + ":"
    });
    wS9 = typeof process < "u" && f1.kindOf(process) === "process", Ow0 = wS9 && function(Q) {
        return qS9(async function(G, Z, I) {
            let {
                data: Y,
                lookup: J,
                family: W
            } = Q, {
                responseType: X,
                responseEncoding: F
            } = Q, V = Q.method.toUpperCase(), K, D = !1, H;
            if (J) {
                let IA = Vw0(J, (HA) => f1.isArray(HA) ? HA : [HA]);
                J = (HA, wA, KA) => {
                    IA(HA, wA, (SA, sA, NA) => {
                        if (SA) return KA(SA);
                        let qA = f1.isArray(sA) ? sA.map((DA) => qw0(DA)) : [qw0(sA, NA)];
                        wA.all ? KA(SA, qA) : KA(SA, qA[0].address, qA[0].family)
                    })
                }
            }
            let C = new HS9,
                E = () => {
                    if (Q.cancelToken) Q.cancelToken.unsubscribe(z);
                    if (Q.signal) Q.signal.removeEventListener("abort", z);
                    C.removeAllListeners()
                };
            I((IA, HA) => {
                if (K = !0, HA) D = !0, E()
            });

            function z(IA) {
                C.emit("abort", !IA || IA.type ? new s$(null, Q, H) : IA)
            }
            if (C.once("abort", Z), Q.cancelToken || Q.signal) {
                if (Q.cancelToken && Q.cancelToken.subscribe(z), Q.signal) Q.signal.aborted ? z() : Q.signal.addEventListener("abort", z)
            }
            let w = Ns(Q.baseURL, Q.url, Q.allowAbsoluteUrls),
                N = new URL(w, c3.hasBrowserEnv ? c3.origin : void 0),
                q = N.protocol || $w0[0];
            if (q === "data:") {
                let IA;
                if (V !== "GET") return kj(G, Z, {
                    status: 405,
                    statusText: "method not allowed",
                    headers: {},
                    config: Q
                });
                try {
                    IA = FF1(Q.url, X === "blob", {
                        Blob: Q.env && Q.env.Blob
                    })
                } catch (HA) {
                    throw NB.from(HA, NB.ERR_BAD_REQUEST, Q)
                }
                if (X === "text") {
                    if (IA = IA.toString(F), !F || F === "utf8") IA = f1.stripBOM(IA)
                } else if (X === "stream") IA = H2A.Readable.from(IA);
                return kj(G, Z, {
                    data: IA,
                    status: 200,
                    statusText: "OK",
                    headers: new PY,
                    config: Q
                })
            }
            if ($w0.indexOf(q) === -1) return Z(new NB("Unsupported protocol " + q, NB.ERR_BAD_REQUEST, Q));
            let R = PY.from(Q.headers).normalize();
            R.set("User-Agent", "axios/" + Ps, !1);
            let {
                onUploadProgress: P,
                onDownloadProgress: y
            } = Q, v = Q.maxRate, x = void 0, p = void 0;
            if (f1.isSpecCompliantForm(Y)) {
                let IA = R.getContentType(/boundary=([-_\w\d]{10,70})/i);
                Y = Yw0(Y, (HA) => {
                    R.set(HA)
                }, {
                    tag: `axios-${Ps}-boundary`,
                    boundary: IA && IA[1] || void 0
                })
            } else if (f1.isFormData(Y) && f1.isFunction(Y.getHeaders)) {
                if (R.set(Y.getHeaders()), !R.hasContentLength()) try {
                    let IA = await DS9.promisify(Y.getLength).call(Y);
                    Number.isFinite(IA) && IA >= 0 && R.setContentLength(IA)
                } catch (IA) {}
            } else if (f1.isBlob(Y) || f1.isFile(Y)) Y.size && R.setContentType(Y.type || "application/octet-stream"), R.setContentLength(Y.size || 0), Y = H2A.Readable.from(fkA(Y));
            else if (Y && !f1.isStream(Y)) {
                if (Buffer.isBuffer(Y));
                else if (f1.isArrayBuffer(Y)) Y = Buffer.from(new Uint8Array(Y));
                else if (f1.isString(Y)) Y = Buffer.from(Y, "utf-8");
                else return Z(new NB("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", NB.ERR_BAD_REQUEST, Q));
                if (R.setContentLength(Y.length, !1), Q.maxBodyLength > -1 && Y.length > Q.maxBodyLength) return Z(new NB("Request body larger than maxBodyLength limit", NB.ERR_BAD_REQUEST, Q))
            }
            let u = f1.toFiniteNumber(R.getContentLength());
            if (f1.isArray(v)) x = v[0], p = v[1];
            else x = p = v;
            if (Y && (P || x)) {
                if (!f1.isStream(Y)) Y = H2A.Readable.from(Y, {
                    objectMode: !1
                });
                Y = H2A.pipeline([Y, new KF1({
                    maxRate: f1.toFiniteNumber(x)
                })], f1.noop), P && Y.on("progress", ww0(Y, K2A(u, ix(D2A(P), !1, 3))))
            }
            let o = void 0;
            if (Q.auth) {
                let IA = Q.auth.username || "",
                    HA = Q.auth.password || "";
                o = IA + ":" + HA
            }
            if (!o && N.username) {
                let {
                    username: IA,
                    password: HA
                } = N;
                o = IA + ":" + HA
            }
            o && R.delete("authorization");
            let l;
            try {
                l = ws(N.pathname + N.search, Q.params, Q.paramsSerializer).replace(/^\?/, "")
            } catch (IA) {
                let HA = Error(IA.message);
                return HA.config = Q, HA.url = Q.url, HA.exists = !0, Z(HA)
            }
            R.set("Accept-Encoding", "gzip, compress, deflate" + (Uw0 ? ", br" : ""), !1);
            let k = {
                path: l,
                method: V,
                headers: R.toJSON(),
                agents: {
                    http: Q.httpAgent,
                    https: Q.httpsAgent
                },
                auth: o,
                protocol: q,
                family: W,
                beforeRedirect: $S9,
                beforeRedirects: {}
            };
            if (!f1.isUndefined(J) && (k.lookup = J), Q.socketPath) k.socketPath = Q.socketPath;
            else k.hostname = N.hostname.startsWith("[") ? N.hostname.slice(1, -1) : N.hostname, k.port = N.port, Mw0(k, Q.proxy, q + "//" + N.hostname + (N.port ? ":" + N.port : "") + k.path);
            let d, QA = US9.test(k.protocol);
            if (k.agent = QA ? Q.httpsAgent : Q.httpAgent, Q.transport) d = Q.transport;
            else if (Q.maxRedirects === 0) d = QA ? KS9 : VS9;
            else {
                if (Q.maxRedirects) k.maxRedirects = Q.maxRedirects;
                if (Q.beforeRedirect) k.beforeRedirects.config = Q.beforeRedirect;
                d = QA ? zS9 : ES9
            }
            if (Q.maxBodyLength > -1) k.maxBodyLength = Q.maxBodyLength;
            else k.maxBodyLength = 1 / 0;
            if (Q.insecureHTTPParser) k.insecureHTTPParser = Q.insecureHTTPParser;
            if (H = d.request(k, function(HA) {
                    if (H.destroyed) return;
                    let wA = [HA],
                        KA = +HA.headers["content-length"];
                    if (y || p) {
                        let DA = new KF1({
                            maxRate: f1.toFiniteNumber(p)
                        });
                        y && DA.on("progress", ww0(DA, K2A(KA, ix(D2A(y), !0, 3)))), wA.push(DA)
                    }
                    let SA = HA,
                        sA = HA.req || H;
                    if (Q.decompress !== !1 && HA.headers["content-encoding"]) {
                        if (V === "HEAD" || HA.statusCode === 204) delete HA.headers["content-encoding"];
                        switch ((HA.headers["content-encoding"] || "").toLowerCase()) {
                            case "gzip":
                            case "x-gzip":
                            case "compress":
                            case "x-compress":
                                wA.push(mu.createUnzip(zw0)), delete HA.headers["content-encoding"];
                                break;
                            case "deflate":
                                wA.push(new Xw0), wA.push(mu.createUnzip(zw0)), delete HA.headers["content-encoding"];
                                break;
                            case "br":
                                if (Uw0) wA.push(mu.createBrotliDecompress(CS9)), delete HA.headers["content-encoding"]
                        }
                    }
                    SA = wA.length > 1 ? H2A.pipeline(wA, f1.noop) : wA[0];
                    let NA = H2A.finished(SA, () => {
                            NA(), E()
                        }),
                        qA = {
                            status: HA.statusCode,
                            statusText: HA.statusMessage,
                            headers: new PY(HA.headers),
                            config: Q,
                            request: sA
                        };
                    if (X === "stream") qA.data = SA, kj(G, Z, qA);
                    else {
                        let DA = [],
                            yA = 0;
                        SA.on("data", function(K1) {
                            if (DA.push(K1), yA += K1.length, Q.maxContentLength > -1 && yA > Q.maxContentLength) D = !0, SA.destroy(), Z(new NB("maxContentLength size of " + Q.maxContentLength + " exceeded", NB.ERR_BAD_RESPONSE, Q, sA))
                        }), SA.on("aborted", function() {
                            if (D) return;
                            let K1 = new NB("stream has been aborted", NB.ERR_BAD_RESPONSE, Q, sA);
                            SA.destroy(K1), Z(K1)
                        }), SA.on("error", function(K1) {
                            if (H.destroyed) return;
                            Z(NB.from(K1, null, Q, sA))
                        }), SA.on("end", function() {
                            try {
                                let K1 = DA.length === 1 ? DA[0] : Buffer.concat(DA);
                                if (X !== "arraybuffer") {
                                    if (K1 = K1.toString(F), !F || F === "utf8") K1 = f1.stripBOM(K1)
                                }