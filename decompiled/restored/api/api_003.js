/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: api_003.js
 * 处理时间: 2025-12-09T03:37:23.704Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * o9         ( 14x) = getConfig() - Returns config with BASE_API_URL, OAuth endpoi
 * Yn0        (  2x) = SERVICE_VERSION = "claude-code-20250219"
 * thinking   (  2x) = THINKING content type
 * TR         (  1x) = getProviderIdentifier() - Returns API provider ID
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 3/30
 * Lines: 55310 - 56808 (1499 lines)
 * Original file: cli.js
 */

            Y?.addEventListener("abort", () => I.abort(Y.reason), {
                signal: I.signal
            });
            let J = {
                    signal: I.signal,
                    options: B,
                    context: G
                },
                W = (H, C = !1) => {
                    let {
                        aborted: E
                    } = I.signal, z = B.ignoreFetchAbort && H !== void 0;
                    if (B.status)
                        if (E && !C) {
                            if (B.status.fetchAborted = !0, B.status.fetchError = I.signal.reason, z) B.status.fetchAbortIgnored = !0
                        } else B.status.fetchResolved = !0;
                    if (E && !z && !C) return F(I.signal.reason);
                    let w = K;
                    if (this.#Y[Q] === K)
                        if (H === void 0)
                            if (w.__staleWhileFetching) this.#Y[Q] = w.__staleWhileFetching;
                            else this.#R(A, "fetch");
                    else {
                        if (B.status) B.status.fetchUpdated = !0;
                        this.set(A, H, J.options)
                    }
                    return H
                },
                X = (H) => {
                    if (B.status) B.status.fetchRejected = !0, B.status.fetchError = H;
                    return F(H)
                },
                F = (H) => {
                    let {
                        aborted: C
                    } = I.signal, E = C && B.allowStaleOnFetchAbort, z = E || B.allowStaleOnFetchRejection, w = z || B.noDeleteOnFetchRejection, N = K;
                    if (this.#Y[Q] === K) {
                        if (!w || N.__staleWhileFetching === void 0) this.#R(A, "fetch");
                        else if (!E) this.#Y[Q] = N.__staleWhileFetching
                    }
                    if (z) {
                        if (B.status && N.__staleWhileFetching !== void 0) B.status.returnedStale = !0;
                        return N.__staleWhileFetching
                    } else if (N.__returned === N) throw H
                },
                V = (H, C) => {
                    let E = this.#G?.(A, Z, J);
                    if (E && E instanceof Promise) E.then((z) => H(z === void 0 ? void 0 : z), C);
                    I.signal.addEventListener("abort", () => {
                        if (!B.ignoreFetchAbort || B.allowStaleOnFetchAbort) {
                            if (H(void 0), B.allowStaleOnFetchAbort) H = (z) => W(z, !0)
                        }
                    })
                };
            if (B.status) B.status.fetchDispatched = !0;
            let K = new Promise(V).then(W, X),
                D = Object.assign(K, {
                    __abortController: I,
                    __staleWhileFetching: Z,
                    __returned: void 0
                });
            if (Q === void 0) this.set(A, D, {
                ...J.options,
                status: void 0
            }), Q = this.#V.get(A);
            else this.#Y[Q] = D;
            return D
        }
        #X(A) {
            if (!this.#P) return !1;
            let Q = A;
            return !!Q && Q instanceof Promise && Q.hasOwnProperty("__staleWhileFetching") && Q.__abortController instanceof jvA
        }
        async fetch(A, Q = {}) {
            let {
                allowStale: B = this.allowStale,
                updateAgeOnGet: G = this.updateAgeOnGet,
                noDeleteOnStaleGet: Z = this.noDeleteOnStaleGet,
                ttl: I = this.ttl,
                noDisposeOnSet: Y = this.noDisposeOnSet,
                size: J = 0,
                sizeCalculation: W = this.sizeCalculation,
                noUpdateTTL: X = this.noUpdateTTL,
                noDeleteOnFetchRejection: F = this.noDeleteOnFetchRejection,
                allowStaleOnFetchRejection: V = this.allowStaleOnFetchRejection,
                ignoreFetchAbort: K = this.ignoreFetchAbort,
                allowStaleOnFetchAbort: D = this.allowStaleOnFetchAbort,
                context: H,
                forceRefresh: C = !1,
                status: E,
                signal: z
            } = Q;
            if (!this.#P) {
                if (E) E.fetch = "get";
                return this.get(A, {
                    allowStale: B,
                    updateAgeOnGet: G,
                    noDeleteOnStaleGet: Z,
                    status: E
                })
            }
            let w = {
                    allowStale: B,
                    updateAgeOnGet: G,
                    noDeleteOnStaleGet: Z,
                    ttl: I,
                    noDisposeOnSet: Y,
                    size: J,
                    sizeCalculation: W,
                    noUpdateTTL: X,
                    noDeleteOnFetchRejection: F,
                    allowStaleOnFetchRejection: V,
                    allowStaleOnFetchAbort: D,
                    ignoreFetchAbort: K,
                    status: E,
                    signal: z
                },
                N = this.#V.get(A);
            if (N === void 0) {
                if (E) E.fetch = "miss";
                let q = this.#x(A, N, w, H);
                return q.__returned = q
            } else {
                let q = this.#Y[N];
                if (this.#X(q)) {
                    let x = B && q.__staleWhileFetching !== void 0;
                    if (E) {
                        if (E.fetch = "inflight", x) E.returnedStale = !0
                    }
                    return x ? q.__staleWhileFetching : q.__returned = q
                }
                let R = this.#$(N);
                if (!C && !R) {
                    if (E) E.fetch = "hit";
                    if (this.#_(N), G) this.#j(N);
                    if (E) this.#T(E, N);
                    return q
                }
                let P = this.#x(A, N, w, H),
                    v = P.__staleWhileFetching !== void 0 && B;
                if (E) {
                    if (E.fetch = R ? "stale" : "refresh", v && R) E.returnedStale = !0
                }
                return v ? P.__staleWhileFetching : P.__returned = P
            }
        }
        async forceFetch(A, Q = {}) {
            let B = await this.fetch(A, Q);
            if (B === void 0) throw Error("fetch() returned undefined");
            return B
        }
        memo(A, Q = {}) {
            let B = this.#J;
            if (!B) throw Error("no memoMethod provided to constructor");
            let {
                context: G,
                forceRefresh: Z,
                ...I
            } = Q, Y = this.get(A, I);
            if (!Z && Y !== void 0) return Y;
            let J = B(A, Y, {
                options: I,
                context: G
            });
            return this.set(A, J, I), J
        }
        get(A, Q = {}) {
            let {
                allowStale: B = this.allowStale,
                updateAgeOnGet: G = this.updateAgeOnGet,
                noDeleteOnStaleGet: Z = this.noDeleteOnStaleGet,
                status: I
            } = Q, Y = this.#V.get(A);
            if (Y !== void 0) {
                let J = this.#Y[Y],
                    W = this.#X(J);
                if (I) this.#T(I, Y);
                if (this.#$(Y)) {
                    if (I) I.get = "stale";
                    if (!W) {
                        if (!Z) this.#R(A, "expire");
                        if (I && B) I.returnedStale = !0;
                        return B ? J : void 0
                    } else {
                        if (I && B && J.__staleWhileFetching !== void 0) I.returnedStale = !0;
                        return B ? J.__staleWhileFetching : void 0
                    }
                } else {
                    if (I) I.get = "hit";
                    if (W) return J.__staleWhileFetching;
                    if (this.#_(Y), G) this.#j(Y);
                    return J
                }
            } else if (I) I.get = "miss"
        }
        #g(A, Q) {
            this.#z[Q] = A, this.#C[A] = Q
        }
        #_(A) {
            if (A !== this.#K) {
                if (A === this.#H) this.#H = this.#C[A];
                else this.#g(this.#z[A], this.#C[A]);
                this.#g(this.#K, A), this.#K = A
            }
        }
        delete(A) {
            return this.#R(A, "delete")
        }
        #R(A, Q) {
            let B = !1;
            if (this.#I !== 0) {
                let G = this.#V.get(A);
                if (G !== void 0)
                    if (B = !0, this.#I === 1) this.#u(Q);
                    else {
                        this.#S(G);
                        let Z = this.#Y[G];
                        if (this.#X(Z)) Z.__abortController.abort(Error("deleted"));
                        else if (this.#L || this.#E) {
                            if (this.#L) this.#B?.(Z, A, Q);
                            if (this.#E) this.#D?.push([Z, A, Q])
                        }
                        if (this.#V.delete(A), this.#W[G] = void 0, this.#Y[G] = void 0, G === this.#K) this.#K = this.#z[G];
                        else if (G === this.#H) this.#H = this.#C[G];
                        else {
                            let I = this.#z[G];
                            this.#C[I] = this.#C[G];
                            let Y = this.#C[G];
                            this.#z[Y] = this.#z[G]
                        }
                        this.#I--, this.#w.push(G)
                    }
            }
            if (this.#E && this.#D?.length) {
                let G = this.#D,
                    Z;
                while (Z = G?.shift()) this.#Z?.(...Z)
            }
            return B
        }
        clear() {
            return this.#u("delete")
        }
        #u(A) {
            for (let Q of this.#O({
                    allowStale: !0
                })) {
                let B = this.#Y[Q];
                if (this.#X(B)) B.__abortController.abort(Error("deleted"));
                else {
                    let G = this.#W[Q];
                    if (this.#L) this.#B?.(B, G, A);
                    if (this.#E) this.#D?.push([B, G, A])
                }
            }
            if (this.#V.clear(), this.#Y.fill(void 0), this.#W.fill(void 0), this.#U && this.#N) this.#U.fill(0), this.#N.fill(0);
            if (this.#q) this.#q.fill(0);
            if (this.#H = 0, this.#K = 0, this.#w.length = 0, this.#F = 0, this.#I = 0, this.#E && this.#D) {
                let Q = this.#D,
                    B;
                while (B = Q?.shift()) this.#Z?.(...B)
            }
        }
    }
});

function oC1(A, Q = 300000) {
    let B = new Map,
        G = (...Z) => {
            let I = JSON.stringify(Z),
                Y = B.get(I),
                J = Date.now();
            if (!Y) {
                let W = A(...Z);
                return B.set(I, {
                    value: W,
                    timestamp: J,
                    refreshing: !1
                }), W
            }
            if (Y && J - Y.timestamp > Q && !Y.refreshing) return Y.refreshing = !0, Promise.resolve().then(() => {
                let W = A(...Z);
                B.set(I, {
                    value: W,
                    timestamp: Date.now(),
                    refreshing: !1
                })
            }).catch((W) => {
                e(W instanceof Error ? W : Error(String(W))), B.delete(I)
            }), Y.value;
            return B.get(I).value
        };
    return G.cache = {
        clear: () => B.clear()
    }, G
}

function _vA(A, Q = 300000) {
    let B = new Map,
        G = async (...Z) => {
            let I = JSON.stringify(Z),
                Y = B.get(I),
                J = Date.now();
            if (!Y) {
                let W = await A(...Z);
                return B.set(I, {
                    value: W,
                    timestamp: J,
                    refreshing: !1
                }), W
            }
            if (Y && J - Y.timestamp > Q && !Y.refreshing) return Y.refreshing = !0, A(...Z).then((W) => {
                B.set(I, {
                    value: W,
                    timestamp: Date.now(),
                    refreshing: !1
                })
            }).catch((W) => {
                e(W instanceof Error ? W : Error(String(W))), B.delete(I)
            }), Y.value;
            return B.get(I).value
        };
    return G.cache = {
        clear: () => B.clear()
    }, G
}
var kvA = L(() => {
    u1()
});

function kG4() {
    let A = new Map;
    for (let [Q, B] of Object.entries(_I)) {
        for (let [G, Z] of Object.entries(B)) _I[G] = {
            open: `\x1B[${Z[0]}m`,
            close: `\x1B[${Z[1]}m`
        }, B[G] = _I[G], A.set(Z[0], Z[1]);
        Object.defineProperty(_I, Q, {
            value: B,
            enumerable: !1
        })
    }
    return Object.defineProperty(_I, "codes", {
        value: A,
        enumerable: !1
    }), _I.color.close = "\x1B[39m", _I.bgColor.close = "\x1B[49m", _I.color.ansi = _i0(), _I.color.ansi256 = ki0(), _I.color.ansi16m = yi0(), _I.bgColor.ansi = _i0(10), _I.bgColor.ansi256 = ki0(10), _I.bgColor.ansi16m = yi0(10), Object.defineProperties(_I, {
        rgbToAnsi256: {
            value(Q, B, G) {
                if (Q === B && B === G) {
                    if (Q < 8) return 16;
                    if (Q > 248) return 231;
                    return Math.round((Q - 8) / 247 * 24) + 232
                }
                return 16 + 36 * Math.round(Q / 255 * 5) + 6 * Math.round(B / 255 * 5) + Math.round(G / 255 * 5)
            },
            enumerable: !1
        },
        hexToRgb: {
            value(Q) {
                let B = /[a-f\d]{6}|[a-f\d]{3}/i.exec(Q.toString(16));
                if (!B) return [0, 0, 0];
                let [G] = B;
                if (G.length === 3) G = [...G].map((I) => I + I).join("");
                let Z = Number.parseInt(G, 16);
                return [Z >> 16 & 255, Z >> 8 & 255, Z & 255]
            },
            enumerable: !1
        },
        hexToAnsi256: {
            value: (Q) => _I.rgbToAnsi256(..._I.hexToRgb(Q)),
            enumerable: !1
        },
        ansi256ToAnsi: {
            value(Q) {
                if (Q < 8) return 30 + Q;
                if (Q < 16) return 90 + (Q - 8);
                let B, G, Z;
                if (Q >= 232) B = ((Q - 232) * 10 + 8) / 255, G = B, Z = B;
                else {
                    Q -= 16;
                    let J = Q % 36;
                    B = Math.floor(Q / 36) / 5, G = Math.floor(J / 6) / 5, Z = J % 6 / 5
                }
                let I = Math.max(B, G, Z) * 2;
                if (I === 0) return 30;
                let Y = 30 + (Math.round(Z) << 2 | Math.round(G) << 1 | Math.round(B));
                if (I === 2) Y += 60;
                return Y
            },
            enumerable: !1
        },
        rgbToAnsi: {
            value: (Q, B, G) => _I.ansi256ToAnsi(_I.rgbToAnsi256(Q, B, G)),
            enumerable: !1
        },
        hexToAnsi: {
            value: (Q) => _I.ansi256ToAnsi(_I.hexToAnsi256(Q)),
            enumerable: !1
        }
    }), _I
}
var _i0 = (A = 0) => (Q) => `\x1B[${Q+A}m`,
    ki0 = (A = 0) => (Q) => `\x1B[${38+A};5;${Q}m`,
    yi0 = (A = 0) => (Q, B, G) => `\x1B[${38+A};2;${Q};${B};${G}m`,
    _I, RZ7, SG4, _G4, TZ7, yG4, RR;
var xi0 = L(() => {
    _I = {
        modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            overline: [53, 55],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
        },
        color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            blackBright: [90, 39],
            gray: [90, 39],
            grey: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
        },
        bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgGray: [100, 49],
            bgGrey: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
        }
    }, RZ7 = Object.keys(_I.modifier), SG4 = Object.keys(_I.color), _G4 = Object.keys(_I.bgColor), TZ7 = [...SG4, ..._G4];
    yG4 = kG4(), RR = yG4
});
import tC1 from "node:process";
import xG4 from "node:os";
import vi0 from "node:tty";

function cN(A, Q = globalThis.Deno ? globalThis.Deno.args : tC1.argv) {
    let B = A.startsWith("-") ? "" : A.length === 1 ? "-" : "--",
        G = Q.indexOf(B + A),
        Z = Q.indexOf("--");
    return G !== -1 && (Z === -1 || G < Z)
}

function vG4() {
    if ("FORCE_COLOR" in EJ) {
        if (EJ.FORCE_COLOR === "true") return 1;
        if (EJ.FORCE_COLOR === "false") return 0;
        return EJ.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(EJ.FORCE_COLOR, 10), 3)
    }
}

function bG4(A) {
    if (A === 0) return !1;
    return {
        level: A,
        hasBasic: !0,
        has256: A >= 2,
        has16m: A >= 3
    }
}

function fG4(A, {
    streamIsTTY: Q,
    sniffFlags: B = !0
} = {}) {
    let G = vG4();
    if (G !== void 0) yvA = G;
    let Z = B ? yvA : G;
    if (Z === 0) return 0;
    if (B) {
        if (cN("color=16m") || cN("color=full") || cN("color=truecolor")) return 3;
        if (cN("color=256")) return 2
    }
    if ("TF_BUILD" in EJ && "AGENT_NAME" in EJ) return 1;
    if (A && !Q && Z === void 0) return 0;
    let I = Z || 0;
    if (EJ.TERM === "dumb") return I;
    if (tC1.platform === "win32") {
        let Y = xG4.release().split(".");
        if (Number(Y[0]) >= 10 && Number(Y[2]) >= 10586) return Number(Y[2]) >= 14931 ? 3 : 2;
        return 1
    }
    if ("CI" in EJ) {
        if (["GITHUB_ACTIONS", "GITEA_ACTIONS", "CIRCLECI"].some((Y) => (Y in EJ))) return 3;
        if (["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((Y) => (Y in EJ)) || EJ.CI_NAME === "codeship") return 1;
        return I
    }
    if ("TEAMCITY_VERSION" in EJ) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(EJ.TEAMCITY_VERSION) ? 1 : 0;
    if (EJ.COLORTERM === "truecolor") return 3;
    if (EJ.TERM === "xterm-kitty") return 3;
    if ("TERM_PROGRAM" in EJ) {
        let Y = Number.parseInt((EJ.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (EJ.TERM_PROGRAM) {
            case "iTerm.app":
                return Y >= 3 ? 3 : 2;
            case "Apple_Terminal":
                return 2
        }
    }
    if (/-256(color)?$/i.test(EJ.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(EJ.TERM)) return 1;
    if ("COLORTERM" in EJ) return 1;
    return I
}

function bi0(A, Q = {}) {
    let B = fG4(A, {
        streamIsTTY: A && A.isTTY,
        ...Q
    });
    return bG4(B)
}
var EJ, yvA, hG4, fi0;
var hi0 = L(() => {
    ({
        env: EJ
    } = tC1);
    if (cN("no-color") || cN("no-colors") || cN("color=false") || cN("color=never")) yvA = 0;
    else if (cN("color") || cN("colors") || cN("color=true") || cN("color=always")) yvA = 1;
    hG4 = {
        stdout: bi0({
            isTTY: vi0.isatty(1)
        }),
        stderr: bi0({
            isTTY: vi0.isatty(2)
        })
    }, fi0 = hG4
});

function gi0(A, Q, B) {
    let G = A.indexOf(Q);
    if (G === -1) return A;
    let Z = Q.length,
        I = 0,
        Y = "";
    do Y += A.slice(I, G) + Q + B, I = G + Z, G = A.indexOf(Q, I); while (G !== -1);
    return Y += A.slice(I), Y
}

function ui0(A, Q, B, G) {
    let Z = 0,
        I = "";
    do {
        let Y = A[G - 1] === "\r";
        I += A.slice(Z, Y ? G - 1 : G) + Q + (Y ? `\r
` : `
`) + B, Z = G + 1, G = A.indexOf(`
`, Z)
    } while (G !== -1);
    return I += A.slice(Z), I
}

function mKA(A) {
    return uG4(A)
}
var mi0, di0, eC1, Z4A, uKA, ci0, I4A, gG4 = (A, Q = {}) => {
        if (Q.level && !(Number.isInteger(Q.level) && Q.level >= 0 && Q.level <= 3)) throw Error("The `level` option should be an integer from 0 to 3");
        let B = mi0 ? mi0.level : 0;
        A.level = Q.level === void 0 ? B : Q.level
    },
    uG4 = (A) => {
        let Q = (...B) => B.join(" ");
        return gG4(Q, A), Object.setPrototypeOf(Q, mKA.prototype), Q
    },
    AE1 = (A, Q, B, ...G) => {
        if (A === "rgb") {
            if (Q === "ansi16m") return RR[B].ansi16m(...G);
            if (Q === "ansi256") return RR[B].ansi256(RR.rgbToAnsi256(...G));
            return RR[B].ansi(RR.rgbToAnsi(...G))
        }
        if (A === "hex") return AE1("rgb", Q, B, ...RR.hexToRgb(...G));
        return RR[B][A](...G)
    },
    mG4, dG4, QE1 = (A, Q, B) => {
        let G, Z;
        if (B === void 0) G = A, Z = Q;
        else G = B.openAll + A, Z = Q + B.closeAll;
        return {
            open: A,
            close: Q,
            openAll: G,
            closeAll: Z,
            parent: B
        }
    },
    xvA = (A, Q, B) => {
        let G = (...Z) => cG4(G, Z.length === 1 ? "" + Z[0] : Z.join(" "));
        return Object.setPrototypeOf(G, dG4), G[eC1] = A, G[Z4A] = Q, G[uKA] = B, G
    },
    cG4 = (A, Q) => {
        if (A.level <= 0 || !Q) return A[uKA] ? "" : Q;
        let B = A[Z4A];
        if (B === void 0) return Q;
        let {
            openAll: G,
            closeAll: Z
        } = B;
        if (Q.includes("\x1B"))
            while (B !== void 0) Q = gi0(Q, B.close, B.open), B = B.parent;
        let I = Q.indexOf(`
`);
        if (I !== -1) Q = ui0(Q, Z, G, I);
        return G + Q + Z
    },
    pG4, fZ7, oA;
var J9 = L(() => {
    xi0();
    hi0();
    ({
        stdout: mi0,
        stderr: di0
    } = fi0), eC1 = Symbol("GENERATOR"), Z4A = Symbol("STYLER"), uKA = Symbol("IS_EMPTY"), ci0 = ["ansi", "ansi", "ansi256", "ansi16m"], I4A = Object.create(null);
    Object.setPrototypeOf(mKA.prototype, Function.prototype);
    for (let [A, Q] of Object.entries(RR)) I4A[A] = {
        get() {
            let B = xvA(this, QE1(Q.open, Q.close, this[Z4A]), this[uKA]);
            return Object.defineProperty(this, A, {
                value: B
            }), B
        }
    };
    I4A.visible = {
        get() {
            let A = xvA(this, this[Z4A], !0);
            return Object.defineProperty(this, "visible", {
                value: A
            }), A
        }
    };
    mG4 = ["rgb", "hex", "ansi256"];
    for (let A of mG4) {
        I4A[A] = {
            get() {
                let {
                    level: B
                } = this;
                return function(...G) {
                    let Z = QE1(AE1(A, ci0[B], "color", ...G), RR.color.close, this[Z4A]);
                    return xvA(this, Z, this[uKA])
                }
            }
        };
        let Q = "bg" + A[0].toUpperCase() + A.slice(1);
        I4A[Q] = {
            get() {
                let {
                    level: B
                } = this;
                return function(...G) {
                    let Z = QE1(AE1(A, ci0[B], "bgColor", ...G), RR.bgColor.close, this[Z4A]);
                    return xvA(this, Z, this[uKA])
                }
            }
        }
    }
    dG4 = Object.defineProperties(() => {}, {
        ...I4A,
        level: {
            enumerable: !0,
            get() {
                return this[eC1].level
            },
            set(A) {
                this[eC1].level = A
            }
        }
    });
    Object.defineProperties(mKA.prototype, I4A);
    pG4 = mKA(), fZ7 = mKA({
        level: di0 ? di0.level : 0
    }), oA = pG4
});

function pi0(A, Q) {
    return {
        name: `${A.name}-with-${Q.name}-fallback`,
        read() {
            let B = A.read();
            if (B !== null && B !== void 0) return B;
            return Q.read() || {}
        },
        update(B) {
            let G = A.read(),
                Z = A.update(B);
            if (Z.success) {
                if (G === null) Q.delete();
                return Z
            }
            let I = Q.update(B);
            if (I.success) return {
                success: !0,
                warning: I.warning
            };
            return {
                success: !1
            }
        },
        delete() {
            let B = A.delete(),
                G = Q.delete();
            return B || G
        }
    }
}
import {
    createHash as lG4
} from "crypto";
import {
    userInfo as iG4
} from "os";

function ym(A = "") {
    let Q = PQ(),
        G = !process.env.CLAUDE_CONFIG_DIR ? "" : `-${lG4("sha256").update(Q).digest("hex").substring(0,8)}`;
    return `Claude Code${o9().OAUTH_FILE_SUFFIX}${A}${G}`
}

function dKA() {
    try {
        return process.env.USER || iG4().username
    } catch {
        return "claude-code-user"
    }
}

function ii0() {
    if (process.platform !== "darwin") return !1;
    try {
        return H9A("security", ["show-keychain-info"], {
            reject: !1,
            stdio: ["ignore", "pipe", "pipe"]
        }).exitCode === 36
    } catch {
        return !1
    }
}
var li0;
var cKA = L(() => {
    zxA();
    hQ();
    EX();
    YKA();
    li0 = {
        name: "keychain",
        read() {
            try {
                let A = ym("-credentials"),
                    Q = dKA(),
                    B = iG(`security find-generic-password -a "${Q}" -w -s "${A}"`);
                if (B) return JSON.parse(B)
            } catch (A) {
                return null
            }
            return null
        },
        update(A) {
            try {
                let Q = ym("-credentials"),
                    B = dKA(),
                    G = JSON.stringify(A),
                    Z = Buffer.from(G, "utf-8").toString("hex"),
                    I = `add-generic-password -U -a "${B}" -s "${Q}" -X "${Z}"
`;
                if (H9A("security", ["-i"], {
                        input: I,
                        stdio: ["pipe", "pipe", "pipe"],
                        reject: !1
                    }).exitCode !== 0) return {
                    success: !1
                };
                return {
                    success: !0
                }
            } catch (Q) {
                return {
                    success: !1
                }
            }
        },
        delete() {
            try {
                let A = ym("-credentials"),
                    Q = dKA();
                return iG(`security delete-generic-password -a "${Q}" -s "${A}"`), !0
            } catch (A) {
                return !1
            }
        }
    }
});
import {
    join as nG4
} from "path";
import {
    chmodSync as aG4
} from "fs";

function BE1() {
    let A = PQ(),
        Q = ".credentials.json";
    return {
        storageDir: A,
        storagePath: nG4(A, ".credentials.json")
    }
}
var GE1;
var ni0 = L(() => {
    o0();
    hQ();
    GE1 = {
        name: "plaintext",
        read() {
            let {
                storagePath: A
            } = BE1();
            if (OA().existsSync(A)) try {
                let Q = OA().readFileSync(A, {
                    encoding: "utf8"
                });
                return JSON.parse(Q)
            } catch (Q) {
                return null
            }
            return null
        },
        update(A) {
            try {
                let {
                    storageDir: Q,
                    storagePath: B
                } = BE1();
                if (!OA().existsSync(Q)) OA().mkdirSync(Q);
                return OA().writeFileSync(B, JSON.stringify(A), {
                    encoding: "utf8",
                    flush: !1
                }), aG4(B, 384), {
                    success: !0,
                    warning: "Warning: Storing credentials in plaintext."
                }
            } catch (Q) {
                return {
                    success: !1
                }
            }
        },
        delete() {
            let {
                storagePath: A
            } = BE1();
            if (OA().existsSync(A)) try {
                return OA().unlinkSync(A), !0
            } catch (Q) {
                return !1
            }
            return !0
        }
    }
});

function Gw() {
    if (process.platform === "darwin") return pi0(li0, GE1);
    return GE1
}
var vvA = L(() => {
    cKA();
    ni0()
});

function ZE1() {
    let A = LE0();
    if (A !== void 0) return A;
    let Q = process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR;
    if (!Q) return rBA(null), null;
    let B = parseInt(Q, 10);
    if (Number.isNaN(B)) return g(`CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR must be a valid file descriptor number, got: ${Q}`, {
        level: "error"
    }), rBA(null), null;
    try {
        let G = OA(),
            Z = process.platform === "darwin" || process.platform === "freebsd" ? `/dev/fd/${B}` : `/proc/self/fd/${B}`,
            I = G.readFileSync(Z, {
                encoding: "utf8"
            }).trim();
        if (!I) return g("File descriptor contained empty OAuth token", {
            level: "error"
        }), rBA(null), null;
        return g(`Successfully read OAuth token from file descriptor ${B}`), rBA(I), I
    } catch (G) {
        return g(`Failed to read OAuth token from file descriptor ${B}: ${G instanceof Error?G.message:String(G)}`, {
            level: "error"
        }), rBA(null), null
    }
}

function IE1() {
    let A = ME0();
    if (A !== void 0) return A;
    let Q = process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR;
    if (!Q) return oBA(null), null;
    let B = parseInt(Q, 10);
    if (Number.isNaN(B)) return g(`CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR must be a valid file descriptor number, got: ${Q}`, {
        level: "error"
    }), oBA(null), null;
    try {
        let G = OA(),
            Z = process.platform === "darwin" || process.platform === "freebsd" ? `/dev/fd/${B}` : `/proc/self/fd/${B}`,
            I = G.readFileSync(Z, {
                encoding: "utf8"
            }).trim();
        if (!I) return g("File descriptor contained empty API key", {
            level: "error"
        }), oBA(null), null;
        return g(`Successfully read API key from file descriptor ${B}`), oBA(I), I
    } catch (G) {
        return g(`Failed to read API key from file descriptor ${B}: ${G instanceof Error?G.message:String(G)}`, {
            level: "error"
        }), oBA(null), null
    }
}
var ai0 = L(() => {
    D0();
    o0();
    S0()
});
async function bvA() {
    let Q = L1().oauthAccount?.accountUuid,
        B = Zw();
    if (!Q || !B) return;
    let G = `${o9().BASE_API_URL}/api/claude_cli_profile`;
    try {
        return (await GQ.get(G, {
            headers: {
                /* HEADER_API_KEY */ "x-api-key": B,
                /* HEADER_BETA_FEATURES */ "anthropic-beta": r9A
            },
            params: {
                account_uuid: Q
            }
        })).data
    } catch (Z) {
        e(Z)
    }
}
async function Y4A(A) {
    let Q = `${o9().BASE_API_URL}/api/oauth/profile`;
    try {
        return (await GQ.get(Q, {
            headers: {
                Authorization: `Bearer ${A}`,
                "Content-Type": "application/json"
            }
        })).data
    } catch (B) {
        e(B)
    }
}
var pKA = L(() => {
    w3();
    EX();
    hB();
    jQ();
    u1()
});

function Xv(A) {
    return Boolean(A?.includes(KvA))
}

function fvA(A) {
    return A?.split(" ").filter(Boolean) ?? []
}

function YE1({
    codeChallenge: A,
    state: Q,
    port: B,
    isManual: G,
    loginWithClaudeAi: Z,
    inferenceOnly: I,
    orgUUID: Y
}) {
    let J = Z ? o9().CLAUDE_AI_AUTHORIZE_URL : o9().CONSOLE_AUTHORIZE_URL,
        W = new URL(J);
    W.searchParams.append("code", "true"), W.searchParams.append("client_id", o9().CLIENT_ID), W.searchParams.append("response_type", "code"), W.searchParams.append("redirect_uri", G ? o9().MANUAL_REDIRECT_URL : `http://localhost:${B}/callback`);
    let X = I ? [KvA] : Ul0;
    if (W.searchParams.append("scope", X.join(" ")), W.searchParams.append("code_challenge", A), W.searchParams.append("code_challenge_method", "S256"), W.searchParams.append("state", Q), Y) W.searchParams.append("orgUUID", Y);
    return W.toString()
}
async function si0(A, Q, B, G, Z = !1, I) {
    let Y = {
        grant_type: "authorization_code",
        code: A,
        redirect_uri: Z ? o9().MANUAL_REDIRECT_URL : `http://localhost:${G}/callback`,
        client_id: o9().CLIENT_ID,
        code_verifier: B,
        state: Q
    };
    if (I !== void 0) Y.expires_in = I;
    let J = await GQ.post(o9().TOKEN_URL, Y, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (J.status !== 200) throw Error(J.status === 401 ? "Authentication failed: Invalid authorization code" : `Token exchange failed (${J.status}): ${J.statusText}`);
    return BA("tengu_oauth_token_exchange_success", {}), J.data
}
async function ri0(A) {
    let Q = {
        grant_type: "refresh_token",
        refresh_token: A,
        client_id: o9().CLIENT_ID,
        scope: SC1.join(" ")
    };
    try {
        let B = await GQ.post(o9().TOKEN_URL, Q, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (B.status !== 200) throw Error(`Token refresh failed: ${B.statusText}`);
        let G = B.data,
            {
                access_token: Z,
                refresh_token: I = A,
                expires_in: Y
            } = G,
            J = Date.now() + Y * 1000,
            W = fvA(G.scope);
        BA("tengu_oauth_token_refresh_success", {});
        let X = await JE1(Z),
            F = L1();
        if (F.oauthAccount) {
            let V = !1;
            if (X.displayName !== void 0) F.oauthAccount.displayName = X.displayName, V = !0;
            if (typeof X.hasExtraUsageEnabled === "boolean") F.oauthAccount.hasExtraUsageEnabled = X.hasExtraUsageEnabled, V = !0;
            if (V) d0(F)
        }
        return {
            accessToken: Z,
            refreshToken: I,
            expiresAt: J,
            scopes: W,
            subscriptionType: X.subscriptionType,
            rateLimitTier: X.rateLimitTier
        }
    } catch (B) {
        throw BA("tengu_oauth_token_refresh_failure", {
            error: B.message
        }), B
    }
}
async function oi0(A) {
    let Q = await GQ.get(o9().ROLES_URL, {
        headers: {
            Authorization: `Bearer ${A}`
        }
    });
    if (Q.status !== 200) throw Error(`Failed to fetch user roles: ${Q.statusText}`);
    let B = Q.data,
        G = L1();
    if (!G.oauthAccount) throw Error("OAuth account information not found in config");
    G.oauthAccount.organizationRole = B.organization_role, G.oauthAccount.workspaceRole = B.workspace_role, G.oauthAccount.organizationName = B.organization_name, d0(G), BA("tengu_oauth_roles_stored", {
        org_role: B.organization_role
    })
}
async function ti0(A) {
    try {
        let Q = await GQ.post(o9().API_KEY_URL, null, {
                headers: {
                    Authorization: `Bearer ${A}`
                }
            }),
            B = Q.data?.raw_key;
        if (B) return An0(B), BA("tengu_oauth_api_key", {
            status: "success",
            statusCode: Q.status
        }), B;
        return null
    } catch (Q) {
        throw BA("tengu_oauth_api_key", {
            status: "failure",
            error: Q instanceof Error ? Q.message : String(Q)
        }), Q
    }
}

function xm(A) {
    if (A === null) return !1;
    let Q = 300000;
    return Date.now() + Q >= A
}
async function JE1(A) {
    let Q = await Y4A(A),
        B = Q?.organization?.organization_type,
        G = null;
    switch (B) {
        case "claude_max":
            G = "max";
            break;
        case "claude_pro":
            G = "pro";
            break;
        case "claude_enterprise":
            G = "enterprise";
            break;
        case "claude_team":
            G = "team";
            break;
        default:
            G = null;
            break
    }
    let Z = {
        subscriptionType: G,
        rateLimitTier: Q?.organization?.rate_limit_tier ?? null,
        hasExtraUsageEnabled: Q?.organization?.has_extra_usage_enabled ?? null
    };
    if (Q?.account?.display_name) Z.displayName = Q.account.display_name;
    return BA("tengu_oauth_profile_fetch_success", {}), Z
}
async function tj() {
    let Q = L1().oauthAccount?.organizationUuid;
    if (Q) return Q;
    let B = U6()?.accessToken;
    if (B === void 0) return null;
    let Z = (await Y4A(B))?.organization?.uuid;
    if (!Z) return null;
    return Z
}
async function ei0() {
    if (L1().oauthAccount || !AB()) return !1;
    let Q = U6();
    if (Q?.accessToken) {
        let B = await Y4A(Q.accessToken);
        if (B) return WE1({
            accountUuid: B.account.uuid,
            emailAddress: B.account.email,
            organizationUuid: B.organization.uuid,
            displayName: B.account.display_name || void 0,
            hasExtraUsageEnabled: B.organization.has_extra_usage_enabled ?? !1
        }), !0
    }
    return !1
}

function WE1({
    accountUuid: A,
    emailAddress: Q,
    organizationUuid: B,
    displayName: G,
    hasExtraUsageEnabled: Z
}) {
    let I = {
        accountUuid: A,
        emailAddress: Q,
        organizationUuid: B,
        hasExtraUsageEnabled: Z
    };
    if (G) I.displayName = G;
    let Y = L1();
    Y.oauthAccount = I, d0(Y)
}
var pN = L(() => {
    w3();
    EX();
    w0();
    jQ();
    hB();
    pKA()
});

function Bn0() {
    return null
}

function Gn0(A) {
    let Q = Bn0();
    if (!Q) return A;
    let B = new globalThis.Headers(A);
    return Object.entries(Q).forEach(([G, Z]) => {
        if (Z !== void 0) B.set(G, Z)
    }), B
}

function J4A() {
    return hvA && !1
}

function Zn0() {
    return null
}

function In0() {
    return hvA && Qn0 !== null && !1
}
var rG4, hvA = !1,
    Qn0 = null,
    oG4 = "max";
var gvA = L(() => {
    rG4 = {}
});
/* Yn0 = SERVICE_VERSION = "claude-code-20250219" */
var Yn0 = "claude-code-20250219",
    Jn0 = "interleaved-thinking-2025-05-14",
    XE1 = "context-1m-2025-08-07",
    uvA = "context-management-2025-06-27",
    Wn0 = "structured-outputs-2025-09-17",
    FE1 = "web-search-2025-03-05",
    mvA = "tool-examples-2025-10-29",
    VE1;
var dvA = L(() => {
    VE1 = new Set(["interleaved-thinking-2025-05-14", "context-1m-2025-08-07"])
});

function J6() {
    return V0(process.env.CLAUDE_CODE_USE_BEDROCK) ? "bedrock" : V0(process.env.CLAUDE_CODE_USE_VERTEX) ? "vertex" : V0(process.env.CLAUDE_CODE_USE_FOUNDRY) ? "foundry" : "firstParty"
}

/* TR = getProviderIdentifier() - Returns API provider ID */
/* Signature: () => string // provider identifier */
function TR() {
    return J6()
}
var dK = L(() => {
    hQ()
});

function tG4(A) {
    let Q = J6();
    if (Q === "foundry") return !0;
    if (Q === "firstParty") return !A.includes("claude-3-");
    return A.includes("claude-opus-4") || A.includes("claude-sonnet-4")
}

function eG4(A) {
    let Q = A.toLowerCase();
    return Q.includes("claude-opus-4") || Q.includes("claude-sonnet-4") || Q.includes(/* MODEL_HAIKU */ "claude-haiku-4")
}

function KE1(A) {
    return A.includes("-structured-")
}

function AZ4() {
    return (J6() === "firstParty" || J6() === "foundry") && !V0(process.env.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS)
}

function W4A() {
    DE1.cache?.clear?.(), Iw.cache?.clear?.(), HE1.cache?.clear?.()
}
var DE1, Iw, HE1;
var ej = L(() => {
    o2();
    dvA();
    EX();
    hB();
    hQ();
    dK();
    O9();
    O9();
    DE1 = t1((A) => {
        let Q = [],
            B = A.includes("haiku"),
            G = J6(),
            Z = AZ4();
        if (!B) Q.push(Yn0);
        if (AB()) Q.push(r9A);
        if (A.includes("[1m]")) Q.push(XE1);
        else if (A.includes(/* MODEL_SONNET */ "claude-sonnet-4-5")) {
            if (ZI("sonnet_45_1m_header", "enabled", !1)) Q.push(XE1)
        }
        if (!V0(process.env.DISABLE_INTERLEAVED_THINKING) && tG4(A)) Q.push(Jn0);
        let I = Z && ZI("preserve_thinking", "enabled", !1);
        if (V0(process.env.USE_API_CONTEXT_MANAGEMENT) && !1 || I) Q.push(uvA);
        let Y = j8("tengu_tool_pear");
        if (KE1(A) && Y) Q.push(Wn0);
        if (Z && ZI("tool_use_examples", "enabled", !1)) Q.push(mvA);
        if (G === "vertex" && eG4(A)) Q.push(FE1);
        if (G === "foundry") Q.push(FE1);
        if (process.env.ANTHROPIC_BETAS && !B) Q.push(...process.env.ANTHROPIC_BETAS.split(",").map((J) => J.trim()).filter(Boolean));
        return Q
    }), Iw = t1((A) => {
        let Q = DE1(A);
        if (J6() === "bedrock") return Q.filter((B) => !VE1.has(B));
        return Q
    }), HE1 = t1((A) => {
        return DE1(A).filter((B) => VE1.has(B))
    })
});
var CE1 = U((_I7, zn0) => {
    var {
        defineProperty: cvA,
        getOwnPropertyDescriptor: QZ4,
        getOwnPropertyNames: BZ4
    } = Object, GZ4 = Object.prototype.hasOwnProperty, pvA = (A, Q) => cvA(A, "name", {
        value: Q,
        configurable: !0
    }), ZZ4 = (A, Q) => {
        for (var B in Q) cvA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, IZ4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of BZ4(Q))
                if (!GZ4.call(A, Z) && Z !== B) cvA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = QZ4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, YZ4 = (A) => IZ4(cvA({}, "__esModule", {
        value: !0
    }), A), Xn0 = {};
    ZZ4(Xn0, {
        AlgorithmId: () => Dn0,
        EndpointURLScheme: () => Kn0,
        FieldPosition: () => Hn0,
        HttpApiKeyAuthLocation: () => Vn0,
        HttpAuthLocation: () => Fn0,
        IniSectionType: () => Cn0,
        RequestHandlerProtocol: () => En0,
        SMITHY_CONTEXT_KEY: () => VZ4,
        getDefaultClientConfiguration: () => XZ4,
        resolveDefaultRuntimeConfig: () => FZ4
    });
    zn0.exports = YZ4(Xn0);
    var Fn0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(Fn0 || {}),
        Vn0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(Vn0 || {}),
        Kn0 = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(Kn0 || {}),
        Dn0 = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(Dn0 || {}),
        JZ4 = pvA((A) => {
            let Q = [];
            if (A.sha256 !== void 0) Q.push({
                algorithmId: () => "sha256",
                checksumConstructor: () => A.sha256
            });
            if (A.md5 != null) Q.push({
                algorithmId: () => "md5",
                checksumConstructor: () => A.md5
            });
            return {
                addChecksumAlgorithm(B) {
                    Q.push(B)
                },
                checksumAlgorithms() {
                    return Q
                }
            }
        }, "getChecksumConfiguration"),
        WZ4 = pvA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        XZ4 = pvA((A) => {
            return JZ4(A)
        }, "getDefaultClientConfiguration"),
        FZ4 = pvA((A) => {
            return WZ4(A)
        }, "resolveDefaultRuntimeConfig"),
        Hn0 = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(Hn0 || {}),
        VZ4 = "__smithy_context",
        Cn0 = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(Cn0 || {}),
        En0 = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(En0 || {})
});
var cC = U((kI7, Nn0) => {
    var {
        defineProperty: lvA,
        getOwnPropertyDescriptor: KZ4,
        getOwnPropertyNames: DZ4
    } = Object, HZ4 = Object.prototype.hasOwnProperty, vm = (A, Q) => lvA(A, "name", {
        value: Q,
        configurable: !0
    }), CZ4 = (A, Q) => {
        for (var B in Q) lvA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, EZ4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of DZ4(Q))
                if (!HZ4.call(A, Z) && Z !== B) lvA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = KZ4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, zZ4 = (A) => EZ4(lvA({}, "__esModule", {
        value: !0
    }), A), Un0 = {};
    CZ4(Un0, {
        Field: () => wZ4,
        Fields: () => qZ4,
        HttpRequest: () => NZ4,
        HttpResponse: () => LZ4,
        IHttpRequest: () => $n0.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => UZ4,
        isValidHostname: () => qn0,
        resolveHttpHandlerRuntimeConfig: () => $Z4
    });
    Nn0.exports = zZ4(Un0);
    var UZ4 = vm((A) => {
            return {
                setHttpHandler(Q) {
                    A.httpHandler = Q
                },
                httpHandler() {
                    return A.httpHandler
                },
                updateHttpClientConfig(Q, B) {
                    A.httpHandler?.updateHttpClientConfig(Q, B)
                },
                httpHandlerConfigs() {
                    return A.httpHandler.httpHandlerConfigs()
                }
            }
        }, "getHttpHandlerExtensionConfiguration"),
        $Z4 = vm((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        $n0 = CE1(),
        wZ4 = class {
            static {
                vm(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = $n0.FieldPosition.HEADER,
                values: B = []
            }) {
                this.name = A, this.kind = Q, this.values = B
            }
            add(A) {
                this.values.push(A)
            }
            set(A) {
                this.values = A
            }
            remove(A) {
                this.values = this.values.filter((Q) => Q !== A)
            }
            toString() {
                return this.values.map((A) => A.includes(",") || A.includes(" ") ? `"${A}"` : A).join(", ")
            }
            get() {
                return this.values
            }
        },
        qZ4 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }