/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.095Z
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 8/53
 * Lines: 53810 - 55309 (1500 lines)
 * Original file: cli.js
 */

                        return
                    }
                    F.futimes(E, K, D, function(z) {
                        F.close(E, function(w) {
                            if (H) H(z || w)
                        })
                    })
                })
            }, F.lutimesSync = function(V, K, D) {
                var H = F.openSync(V, Pm.O_SYMLINK),
                    C, E = !0;
                try {
                    C = F.futimesSync(H, K, D), E = !1
                } finally {
                    if (E) try {
                        F.closeSync(H)
                    } catch (z) {} else F.closeSync(H)
                }
                return C
            };
            else if (F.futimes) F.lutimes = function(V, K, D, H) {
                if (H) process.nextTick(H)
            }, F.lutimesSync = function() {}
        }

function G(F) {
            if (!F) return F;
            return function(V, K, D) {
                return F.call(A, V, K, function(H) {
                    if (X(H)) H = null;
                    if (D) D.apply(this, arguments)
                })
            }
        }

function Z(F) {
            if (!F) return F;
            return function(V, K) {
                try {
                    return F.call(A, V, K)
                } catch (D) {
                    if (!X(D)) throw D
                }
            }
        }

function I(F) {
            if (!F) return F;
            return function(V, K, D, H) {
                return F.call(A, V, K, D, function(C) {
                    if (X(C)) C = null;
                    if (H) H.apply(this, arguments)
                })
            }
        }

function Y(F) {
            if (!F) return F;
            return function(V, K, D) {
                try {
                    return F.call(A, V, K, D)
                } catch (H) {
                    if (!X(H)) throw H
                }
            }
        }

function J(F) {
            if (!F) return F;
            return function(V, K, D) {
                if (typeof K === "function") D = K, K = null;

function H(C, E) {
                    if (E) {
                        if (E.uid < 0) E.uid += 4294967296;
                        if (E.gid < 0) E.gid += 4294967296
                    }
                    if (D) D.apply(this, arguments)
                }
                return K ? F.call(A, V, K, H) : F.call(A, V, H)
            }
        }

function W(F) {
            if (!F) return F;
            return function(V, K) {
                var D = K ? F.call(A, V, K) : F.call(A, V);
                if (D) {
                    if (D.uid < 0) D.uid += 4294967296;
                    if (D.gid < 0) D.gid += 4294967296
                }
                return D
            }
        }

function X(F) {
            if (!F) return !0;
            if (F.code === "ENOSYS") return !0;
            var V = !process.getuid || process.getuid() !== 0;
            if (V) {
                if (F.code === "EINVAL" || F.code === "EPERM") return !0
            }
            return !1
        }
    }
});
var Yi0 = U((DZ7, Ii0) => {
    var Zi0 = UA("stream").Stream;
    Ii0.exports = l74;

function l74(A) {
        return {
            ReadStream: Q,
            WriteStream: B
        };

function Q(G, Z) {
            if (!(this instanceof Q)) return new Q(G, Z);
            Zi0.call(this);
            var I = this;
            this.path = G, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 65536, Z = Z || {};
            var Y = Object.keys(Z);
            for (var J = 0, W = Y.length; J < W; J++) {
                var X = Y[J];
                this[X] = Z[X]
            }
            if (this.encoding) this.setEncoding(this.encoding);
            if (this.start !== void 0) {
                if (typeof this.start !== "number") throw TypeError("start must be a Number");
                if (this.end === void 0) this.end = 1 / 0;
                else if (typeof this.end !== "number") throw TypeError("end must be a Number");
                if (this.start > this.end) throw Error("start must be <= end");
                this.pos = this.start
            }
            if (this.fd !== null) {
                process.nextTick(function() {
                    I._read()
                });
                return
            }
            A.open(this.path, this.flags, this.mode, function(F, V) {
                if (F) {
                    I.emit("error", F), I.readable = !1;
                    return
                }
                I.fd = V, I.emit("open", V), I._read()
            })
        }

function B(G, Z) {
            if (!(this instanceof B)) return new B(G, Z);
            Zi0.call(this), this.path = G, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, Z = Z || {};
            var I = Object.keys(Z);
            for (var Y = 0, J = I.length; Y < J; Y++) {
                var W = I[Y];
                this[W] = Z[W]
            }
            if (this.start !== void 0) {
                if (typeof this.start !== "number") throw TypeError("start must be a Number");
                if (this.start < 0) throw Error("start must be >= zero");
                this.pos = this.start
            }
            if (this.busy = !1, this._queue = [], this.fd === null) this._open = A.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush()
        }
    }
});
var Wi0 = U((HZ7, Ji0) => {
    Ji0.exports = n74;
    var i74 = Object.getPrototypeOf || function(A) {
        return A.__proto__
    };

function n74(A) {
        if (A === null || typeof A !== "object") return A;
        if (A instanceof Object) var Q = {
            __proto__: i74(A)
        };
        else var Q = Object.create(null);
        return Object.getOwnPropertyNames(A).forEach(function(B) {
            Object.defineProperty(Q, B, Object.getOwnPropertyDescriptor(A, B))
        }), Q
    }
});
var mK = U((CZ7, gC1) => {
    var kY = UA("fs"),
        a74 = Gi0(),
        s74 = Yi0(),
        r74 = Wi0(),
        wvA = UA("util"),
        uK, NvA;
    if (typeof Symbol === "function" && typeof Symbol.for === "function") uK = Symbol.for("graceful-fs.queue"), NvA = Symbol.for("graceful-fs.previous");
    else uK = "___graceful-fs.queue", NvA = "___graceful-fs.previous";

function o74() {}

function Fi0(A, Q) {
        Object.defineProperty(A, uK, {
            get: function() {
                return Q
            }
        })
    }
    var Zr = o74;
    if (wvA.debuglog) Zr = wvA.debuglog("gfs4");
    else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) Zr = function() {
        var A = wvA.format.apply(wvA, arguments);
        A = "GFS4: " + A.split(/\n/).join(`
GFS4: `), console.error(A)
    };
    if (!kY[uK]) {
        if (bC1 = global[uK] || [], Fi0(kY, bC1), kY.close = function(A) {
                function Q(B, G) {
                    return A.call(kY, B, function(Z) {
                        if (!Z) Xi0();
                        if (typeof G === "function") G.apply(this, arguments)
                    })
                }
                return Object.defineProperty(Q, NvA, {
                    value: A
                }), Q
            }(kY.close), kY.closeSync = function(A) {
                function Q(B) {
                    A.apply(kY, arguments), Xi0()
                }
                return Object.defineProperty(Q, NvA, {
                    value: A
                }), Q
            }(kY.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) process.on("exit", function() {
            Zr(kY[uK]), UA("assert").equal(kY[uK].length, 0)
        })
    }
    var bC1;
    if (!global[uK]) Fi0(global, kY[uK]);
    gC1.exports = fC1(r74(kY));
    if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !kY.__patched) gC1.exports = fC1(kY), kY.__patched = !0;

function fC1(A) {
        a74(A), A.gracefulify = fC1, A.createReadStream = R, A.createWriteStream = P;
        var Q = A.readFile;
        A.readFile = B;

function B(x, p, u) {
            if (typeof p === "function") u = p, p = null;
            return o(x, p, u);

function o(l, k, d, QA) {
                return Q(l, k, function(IA) {
                    if (IA && (IA.code === "EMFILE" || IA.code === "ENFILE")) t9A([o, [l, k, d], IA, QA || Date.now(), Date.now()]);
                    else if (typeof d === "function") d.apply(this, arguments)
                })
            }
        }
        var G = A.writeFile;
        A.writeFile = Z;

function Z(x, p, u, o) {
            if (typeof u === "function") o = u, u = null;
            return l(x, p, u, o);

function l(k, d, QA, IA, HA) {
                return G(k, d, QA, function(wA) {
                    if (wA && (wA.code === "EMFILE" || wA.code === "ENFILE")) t9A([l, [k, d, QA, IA], wA, HA || Date.now(), Date.now()]);
                    else if (typeof IA === "function") IA.apply(this, arguments)
                })
            }
        }
        var I = A.appendFile;
        if (I) A.appendFile = Y;

function Y(x, p, u, o) {
            if (typeof u === "function") o = u, u = null;
            return l(x, p, u, o);

function l(k, d, QA, IA, HA) {
                return I(k, d, QA, function(wA) {
                    if (wA && (wA.code === "EMFILE" || wA.code === "ENFILE")) t9A([l, [k, d, QA, IA], wA, HA || Date.now(), Date.now()]);
                    else if (typeof IA === "function") IA.apply(this, arguments)
                })
            }
        }
        var J = A.copyFile;
        if (J) A.copyFile = W;

function W(x, p, u, o) {
            if (typeof u === "function") o = u, u = 0;
            return l(x, p, u, o);

function l(k, d, QA, IA, HA) {
                return J(k, d, QA, function(wA) {
                    if (wA && (wA.code === "EMFILE" || wA.code === "ENFILE")) t9A([l, [k, d, QA, IA], wA, HA || Date.now(), Date.now()]);
                    else if (typeof IA === "function") IA.apply(this, arguments)
                })
            }
        }
        var X = A.readdir;
        A.readdir = V;
        var F = /^v[0-5]\./;

function V(x, p, u) {
            if (typeof p === "function") u = p, p = null;
            var o = F.test(process.version) ? function(d, QA, IA, HA) {
                return X(d, l(d, QA, IA, HA))
            } : function(d, QA, IA, HA) {
                return X(d, QA, l(d, QA, IA, HA))
            };
            return o(x, p, u);

function l(k, d, QA, IA) {
                return function(HA, wA) {
                    if (HA && (HA.code === "EMFILE" || HA.code === "ENFILE")) t9A([o, [k, d, QA], HA, IA || Date.now(), Date.now()]);
                    else {
                        if (wA && wA.sort) wA.sort();
                        if (typeof QA === "function") QA.call(this, HA, wA)
                    }
                }
            }
        }
        if (process.version.substr(0, 4) === "v0.8") {
            var K = s74(A);
            z = K.ReadStream, N = K.WriteStream
        }
        var D = A.ReadStream;
        if (D) z.prototype = Object.create(D.prototype), z.prototype.open = w;
        var H = A.WriteStream;
        if (H) N.prototype = Object.create(H.prototype), N.prototype.open = q;
        Object.defineProperty(A, "ReadStream", {
            get: function() {
                return z
            },
            set: function(x) {
                z = x
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A, "WriteStream", {
            get: function() {
                return N
            },
            set: function(x) {
                N = x
            },
            enumerable: !0,
            configurable: !0
        });
        var C = z;
        Object.defineProperty(A, "FileReadStream", {
            get: function() {
                return C
            },
            set: function(x) {
                C = x
            },
            enumerable: !0,
            configurable: !0
        });
        var E = N;
        Object.defineProperty(A, "FileWriteStream", {
            get: function() {
                return E
            },
            set: function(x) {
                E = x
            },
            enumerable: !0,
            configurable: !0
        });

function z(x, p) {
            if (this instanceof z) return D.apply(this, arguments), this;
            else return z.apply(Object.create(z.prototype), arguments)
        }

function w() {
            var x = this;
            v(x.path, x.flags, x.mode, function(p, u) {
                if (p) {
                    if (x.autoClose) x.destroy();
                    x.emit("error", p)
                } else x.fd = u, x.emit("open", u), x.read()
            })
        }

function N(x, p) {
            if (this instanceof N) return H.apply(this, arguments), this;
            else return N.apply(Object.create(N.prototype), arguments)
        }

function q() {
            var x = this;
            v(x.path, x.flags, x.mode, function(p, u) {
                if (p) x.destroy(), x.emit("error", p);
                else x.fd = u, x.emit("open", u)
            })
        }

function R(x, p) {
            return new A.ReadStream(x, p)
        }

function P(x, p) {
            return new A.WriteStream(x, p)
        }
        var y = A.open;
        A.open = v;

function v(x, p, u, o) {
            if (typeof u === "function") o = u, u = null;
            return l(x, p, u, o);

function l(k, d, QA, IA, HA) {
                return y(k, d, QA, function(wA, KA) {
                    if (wA && (wA.code === "EMFILE" || wA.code === "ENFILE")) t9A([l, [k, d, QA, IA], wA, HA || Date.now(), Date.now()]);
                    else if (typeof IA === "function") IA.apply(this, arguments)
                })
            }
        }
        return A
    }

function t9A(A) {
        Zr("ENQUEUE", A[0].name, A[1]), kY[uK].push(A), hC1()
    }
    var qvA;

function Xi0() {
        var A = Date.now();
        for (var Q = 0; Q < kY[uK].length; ++Q)
            if (kY[uK][Q].length > 2) kY[uK][Q][3] = A, kY[uK][Q][4] = A;
        hC1()
    }

function hC1() {
        if (clearTimeout(qvA), qvA = void 0, kY[uK].length === 0) return;
        var A = kY[uK].shift(),
            Q = A[0],
            B = A[1],
            G = A[2],
            Z = A[3],
            I = A[4];
        if (Z === void 0) Zr("RETRY", Q.name, B), Q.apply(null, B);
        else if (Date.now() - Z >= 60000) {
            Zr("TIMEOUT", Q.name, B);
            var Y = B.pop();
            if (typeof Y === "function") Y.call(null, G)
        } else {
            var J = Date.now() - I,
                W = Math.max(I - Z, 1),
                X = Math.min(W * 1.2, 100);
            if (J >= X) Zr("RETRY", Q.name, B), Q.apply(null, B.concat([Z]));
            else kY[uK].push(A)
        }
        if (qvA === void 0) qvA = setTimeout(hC1, 0)
    }
});
var Ki0 = U((EZ7, Vi0) => {
    function dN(A, Q) {
        if (typeof Q === "boolean") Q = {
            forever: Q
        };
        if (this._originalTimeouts = JSON.parse(JSON.stringify(A)), this._timeouts = A, this._options = Q || {}, this._maxRetryTime = Q && Q.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._options.forever) this._cachedTimeouts = this._timeouts.slice(0)
    }
    Vi0.exports = dN;
    dN.prototype.reset = function() {
        this._attempts = 1, this._timeouts = this._originalTimeouts
    };
    dN.prototype.stop = function() {
        if (this._timeout) clearTimeout(this._timeout);
        this._timeouts = [], this._cachedTimeouts = null
    };
    dN.prototype.retry = function(A) {
        if (this._timeout) clearTimeout(this._timeout);
        if (!A) return !1;
        var Q = new Date().getTime();
        if (A && Q - this._operationStart >= this._maxRetryTime) return this._errors.unshift(Error("RetryOperation timeout occurred")), !1;
        this._errors.push(A);
        var B = this._timeouts.shift();
        if (B === void 0)
            if (this._cachedTimeouts) this._errors.splice(this._errors.length - 1, this._errors.length), this._timeouts = this._cachedTimeouts.slice(0), B = this._timeouts.shift();
            else return !1;
        var G = this,
            Z = setTimeout(function() {
                if (G._attempts++, G._operationTimeoutCb) {
                    if (G._timeout = setTimeout(function() {
                            G._operationTimeoutCb(G._attempts)
                        }, G._operationTimeout), G._options.unref) G._timeout.unref()
                }
                G._fn(G._attempts)
            }, B);
        if (this._options.unref) Z.unref();
        return !0
    };
    dN.prototype.attempt = function(A, Q) {
        if (this._fn = A, Q) {
            if (Q.timeout) this._operationTimeout = Q.timeout;
            if (Q.cb) this._operationTimeoutCb = Q.cb
        }
        var B = this;
        if (this._operationTimeoutCb) this._timeout = setTimeout(function() {
            B._operationTimeoutCb()
        }, B._operationTimeout);
        this._operationStart = new Date().getTime(), this._fn(this._attempts)
    };
    dN.prototype.try = function(A) {
        console.log("Using RetryOperation.try() is deprecated"), this.attempt(A)
    };
    dN.prototype.start = function(A) {
        console.log("Using RetryOperation.start() is deprecated"), this.attempt(A)
    };
    dN.prototype.start = dN.prototype.try;
    dN.prototype.errors = function() {
        return this._errors
    };
    dN.prototype.attempts = function() {
        return this._attempts
    };
    dN.prototype.mainError = function() {
        if (this._errors.length === 0) return null;

var A = {},
            Q = null,
            B = 0;
        for (var G = 0; G < this._errors.length; G++) {
            var Z = this._errors[G],
                I = Z.message,
                Y = (A[I] || 0) + 1;
            if (A[I] = Y, Y >= B) Q = Z, B = Y
        }
        return Q
    }
});
var Hi0 = U((e74) => {
    var t74 = Ki0();
    e74.operation = function(A) {
        var Q = e74.timeouts(A);
        return new t74(Q, {
            forever: A && A.forever,
            unref: A && A.unref,
            maxRetryTime: A && A.maxRetryTime
        })
    };
    e74.timeouts = function(A) {
        if (A instanceof Array) return [].concat(A);

var Q = {
            retries: 10,
            factor: 2,
            minTimeout: 1000,
            maxTimeout: 1 / 0,
            randomize: !1
        };
        for (var B in A) Q[B] = A[B];
        if (Q.minTimeout > Q.maxTimeout) throw Error("minTimeout is greater than maxTimeout");

var G = [];
        for (var Z = 0; Z < Q.retries; Z++) G.push(this.createTimeout(Z, Q));
        if (A && A.forever && !G.length) G.push(this.createTimeout(Z, Q));
        return G.sort(function(I, Y) {
            return I - Y
        }), G
    };
    e74.createTimeout = function(A, Q) {
        var B = Q.randomize ? Math.random() + 1 : 1,
            G = Math.round(B * Q.minTimeout * Math.pow(Q.factor, A));
        return G = Math.min(G, Q.maxTimeout), G
    };
    e74.wrap = function(A, Q, B) {
        if (Q instanceof Array) B = Q, Q = null;
        if (!B) {
            B = [];
            for (var G in A)
                if (typeof A[G] === "function") B.push(G)
        }
        for (var Z = 0; Z < B.length; Z++) {
            var I = B[Z],
                Y = A[I];
            A[I] = function(W) {
                var X = e74.operation(Q),
                    F = Array.prototype.slice.call(arguments, 1),
                    V = F.pop();
                F.push(function(K) {
                    if (X.retry(K)) return;
                    if (K) arguments[0] = X.mainError();
                    V.apply(this, arguments)
                }), X.attempt(function() {
                    W.apply(A, F)
                })
            }.bind(A, Y), A[I].options = Q
        }
    }
});
var Ci0 = U((UZ7, LvA) => {
    LvA.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"];
    if (process.platform !== "win32") LvA.exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
    if (process.platform === "linux") LvA.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED")
});
var Ei0 = U(($Z7, A4A) => {
    var SI = global.process,
        Ir = function(A) {
            return A && typeof A === "object" && typeof A.removeListener === "function" && typeof A.emit === "function" && typeof A.reallyExit === "function" && typeof A.listeners === "function" && typeof A.kill === "function" && typeof A.pid === "number" && typeof A.on === "function"
        };
    if (!Ir(SI)) A4A.exports = function() {
        return function() {}
    };
    else {
        if (uC1 = UA("assert"), Yr = Ci0(), mC1 = /^win/i.test(SI.platform), e9A = UA("events"), typeof e9A !== "function") e9A = e9A.EventEmitter;
        if (SI.__signal_exit_emitter__) $F = SI.__signal_exit_emitter__;
        else $F = SI.__signal_exit_emitter__ = new e9A, $F.count = 0, $F.emitted = {};
        if (!$F.infinite) $F.setMaxListeners(1 / 0), $F.infinite = !0;
        A4A.exports = function(A, Q) {
            if (!Ir(global.process)) return function() {};
            if (uC1.equal(typeof A, "function", "a callback must be provided for exit handler"), Jr === !1) MvA();
            var B = "exit";
            if (Q && Q.alwaysLast) B = "afterexit";

var G = function() {
                if ($F.removeListener(B, A), $F.listeners("exit").length === 0 && $F.listeners("afterexit").length === 0) yKA()
            };
            return $F.on(B, A), G
        }, yKA = function() {
            if (!Jr || !Ir(global.process)) return;
            Jr = !1, Yr.forEach(function(Q) {
                try {
                    SI.removeListener(Q, xKA[Q])
                } catch (B) {}
            }), SI.emit = vKA, SI.reallyExit = OvA, $F.count -= 1
        }, A4A.exports.unload = yKA, jm = function(Q, B, G) {
            if ($F.emitted[Q]) return;
            $F.emitted[Q] = !0, $F.emit(Q, B, G)
        }, xKA = {}, Yr.forEach(function(A) {
            xKA[A] = function() {
                if (!Ir(global.process)) return;
                var B = SI.listeners(A);
                if (B.length === $F.count) {
                    if (yKA(), jm("exit", null, A), jm("afterexit", null, A), mC1 && A === "SIGHUP") A = "SIGINT";
                    SI.kill(SI.pid, A)
                }
            }
        }), A4A.exports.signals = function() {
            return Yr
        }, Jr = !1, MvA = function() {
            if (Jr || !Ir(global.process)) return;
            Jr = !0, $F.count += 1, Yr = Yr.filter(function(Q) {
                try {
                    return SI.on(Q, xKA[Q]), !0
                } catch (B) {
                    return !1
                }
            }), SI.emit = cC1, SI.reallyExit = dC1
        }, A4A.exports.load = MvA, OvA = SI.reallyExit, dC1 = function(Q) {
            if (!Ir(global.process)) return;
            SI.exitCode = Q || 0, jm("exit", SI.exitCode, null), jm("afterexit", SI.exitCode, null), OvA.call(SI, SI.exitCode)
        }, vKA = SI.emit, cC1 = function(Q, B) {
            if (Q === "exit" && Ir(global.process)) {
                if (B !== void 0) SI.exitCode = B;
                var G = vKA.apply(this, arguments);
                return jm("exit", SI.exitCode, null), jm("afterexit", SI.exitCode, null), G
            } else return vKA.apply(this, arguments)
        }
    }
    var uC1, Yr, mC1, e9A, $F, yKA, jm, xKA, Jr, MvA, OvA, dC1, vKA, cC1
});
var Ui0 = U((IG4, pC1) => {
    var zi0 = Symbol();

function GG4(A, Q, B) {
        let G = Q[zi0];
        if (G) return Q.stat(A, (I, Y) => {
            if (I) return B(I);
            B(null, Y.mtime, G)
        });
        let Z = new Date(Math.ceil(Date.now() / 1000) * 1000 + 5);
        Q.utimes(A, Z, Z, (I) => {
            if (I) return B(I);
            Q.stat(A, (Y, J) => {
                if (Y) return B(Y);
                let W = J.mtime.getTime() % 1000 === 0 ? "s" : "ms";
                Object.defineProperty(Q, zi0, {
                    value: W
                }), B(null, J.mtime, W)
            })
        })
    }

function ZG4(A) {
        let Q = Date.now();
        if (A === "s") Q = Math.ceil(Q / 1000) * 1000;
        return new Date(Q)
    }
    IG4.probe = GG4;
    IG4.getMtime = ZG4
});
var Li0 = U((HG4, fKA) => {
    var WG4 = UA("path"),
        nC1 = mK(),
        XG4 = Hi0(),
        FG4 = Ei0(),
        $i0 = Ui0(),
        Wv = {};

function bKA(A, Q) {
        return Q.lockfilePath || `${A}.lock`
    }

function aC1(A, Q, B) {
        if (!Q.realpath) return B(null, WG4.resolve(A));
        Q.fs.realpath(A, B)
    }

function iC1(A, Q, B) {
        let G = bKA(A, Q);
        Q.fs.mkdir(G, (Z) => {
            if (!Z) return $i0.probe(G, Q.fs, (I, Y, J) => {
                if (I) return Q.fs.rmdir(G, () => {}), B(I);
                B(null, Y, J)
            });
            if (Z.code !== "EEXIST") return B(Z);
            if (Q.stale <= 0) return B(Object.assign(Error("Lock file is already being held"), {
                code: "ELOCKED",
                file: A
            }));
            Q.fs.stat(G, (I, Y) => {
                if (I) {
                    if (I.code === "ENOENT") return iC1(A, {
                        ...Q,
                        stale: 0
                    }, B);
                    return B(I)
                }
                if (!wi0(Y, Q)) return B(Object.assign(Error("Lock file is already being held"), {
                    code: "ELOCKED",
                    file: A
                }));
                qi0(A, Q, (J) => {
                    if (J) return B(J);
                    iC1(A, {
                        ...Q,
                        stale: 0
                    }, B)
                })
            })
        })
    }

function wi0(A, Q) {
        return A.mtime.getTime() < Date.now() - Q.stale
    }

function qi0(A, Q, B) {
        Q.fs.rmdir(bKA(A, Q), (G) => {
            if (G && G.code !== "ENOENT") return B(G);
            B()
        })
    }

function RvA(A, Q) {
        let B = Wv[A];
        if (B.updateTimeout) return;
        if (B.updateDelay = B.updateDelay || Q.update, B.updateTimeout = setTimeout(() => {
                B.updateTimeout = null, Q.fs.stat(B.lockfilePath, (G, Z) => {
                    let I = B.lastUpdate + Q.stale < Date.now();
                    if (G) {
                        if (G.code === "ENOENT" || I) return lC1(A, B, Object.assign(G, {
                            code: "ECOMPROMISED"
                        }));
                        return B.updateDelay = 1000, RvA(A, Q)
                    }
                    if (B.mtime.getTime() !== Z.mtime.getTime()) return lC1(A, B, Object.assign(Error("Unable to update lock within the stale threshold"), {
                        code: "ECOMPROMISED"
                    }));
                    let J = $i0.getMtime(B.mtimePrecision);
                    Q.fs.utimes(B.lockfilePath, J, J, (W) => {
                        let X = B.lastUpdate + Q.stale < Date.now();
                        if (B.released) return;
                        if (W) {
                            if (W.code === "ENOENT" || X) return lC1(A, B, Object.assign(W, {
                                code: "ECOMPROMISED"
                            }));
                            return B.updateDelay = 1000, RvA(A, Q)
                        }
                        B.mtime = J, B.lastUpdate = Date.now(), B.updateDelay = null, RvA(A, Q)
                    })
                })
            }, B.updateDelay), B.updateTimeout.unref) B.updateTimeout.unref()
    }

function lC1(A, Q, B) {
        if (Q.released = !0, Q.updateTimeout) clearTimeout(Q.updateTimeout);
        if (Wv[A] === Q) delete Wv[A];
        Q.options.onCompromised(B)
    }

function VG4(A, Q, B) {
        Q = {
            stale: 1e4,
            update: null,
            realpath: !0,
            retries: 0,
            fs: nC1,
            onCompromised: (G) => {
                throw G
            },
            ...Q
        }, Q.retries = Q.retries || 0, Q.retries = typeof Q.retries === "number" ? {
            retries: Q.retries
        } : Q.retries, Q.stale = Math.max(Q.stale || 0, 2000), Q.update = Q.update == null ? Q.stale / 2 : Q.update || 0, Q.update = Math.max(Math.min(Q.update, Q.stale / 2), 1000), aC1(A, Q, (G, Z) => {
            if (G) return B(G);
            let I = XG4.operation(Q.retries);
            I.attempt(() => {
                iC1(Z, Q, (Y, J, W) => {
                    if (I.retry(Y)) return;
                    if (Y) return B(I.mainError());
                    let X = Wv[Z] = {
                        lockfilePath: bKA(Z, Q),
                        mtime: J,
                        mtimePrecision: W,
                        options: Q,
                        lastUpdate: Date.now()
                    };
                    RvA(Z, Q), B(null, (F) => {
                        if (X.released) return F && F(Object.assign(Error("Lock is already released"), {
                            code: "ERELEASED"
                        }));
                        Ni0(Z, {
                            ...Q,
                            realpath: !1
                        }, F)
                    })
                })
            })
        })
    }

function Ni0(A, Q, B) {
        Q = {
            fs: nC1,
            realpath: !0,
            ...Q
        }, aC1(A, Q, (G, Z) => {
            if (G) return B(G);
            let I = Wv[Z];
            if (!I) return B(Object.assign(Error("Lock is not acquired/owned by you"), {
                code: "ENOTACQUIRED"
            }));
            I.updateTimeout && clearTimeout(I.updateTimeout), I.released = !0, delete Wv[Z], qi0(Z, Q, B)
        })
    }

function KG4(A, Q, B) {
        Q = {
            stale: 1e4,
            realpath: !0,
            fs: nC1,
            ...Q
        }, Q.stale = Math.max(Q.stale || 0, 2000), aC1(A, Q, (G, Z) => {
            if (G) return B(G);
            Q.fs.stat(bKA(Z, Q), (I, Y) => {
                if (I) return I.code === "ENOENT" ? B(null, !1) : B(I);
                return B(null, !wi0(Y, Q))
            })
        })
    }

function DG4() {
        return Wv
    }
    FG4(() => {
        for (let A in Wv) {
            let Q = Wv[A].options;
            try {
                Q.fs.rmdirSync(bKA(A, Q))
            } catch (B) {}
        }
    });
    HG4.lock = VG4;
    HG4.unlock = Ni0;
    HG4.check = KG4;
    HG4.getLocks = DG4
});
var Oi0 = U((wZ7, Mi0) => {
    var $G4 = mK();

function wG4(A) {
        let Q = ["mkdir", "realpath", "stat", "rmdir", "utimes"],
            B = {
                ...A
            };
        return Q.forEach((G) => {
            B[G] = (...Z) => {
                let I = Z.pop(),
                    Y;
                try {
                    Y = A[`${G}Sync`](...Z)
                } catch (J) {
                    return I(J)
                }
                I(null, Y)
            }
        }), B
    }

function qG4(A) {
        return (...Q) => new Promise((B, G) => {
            Q.push((Z, I) => {
                if (Z) G(Z);
                else B(I)
            }), A(...Q)
        })
    }

function NG4(A) {
        return (...Q) => {
            let B, G;
            if (Q.push((Z, I) => {
                    B = Z, G = I
                }), A(...Q), B) throw B;
            return G
        }
    }

function LG4(A) {
        if (A = {
                ...A
            }, A.fs = wG4(A.fs || $G4), typeof A.retries === "number" && A.retries > 0 || A.retries && typeof A.retries.retries === "number" && A.retries.retries > 0) throw Object.assign(Error("Cannot use retries with the sync api"), {
            code: "ESYNC"
        });
        return A
    }
    Mi0.exports = {
        toPromise: qG4,
        toSync: NG4,
        toSyncOptions: LG4
    }
});
var hKA = U((qZ7, Sm) => {
    var Q4A = Li0(),
        {
            toPromise: TvA,
            toSync: PvA,
            toSyncOptions: sC1
        } = Oi0();

async function Ri0(A, Q) {
        let B = await TvA(Q4A.lock)(A, Q);
        return TvA(B)
    }

function MG4(A, Q) {
        let B = PvA(Q4A.lock)(A, sC1(Q));
        return PvA(B)
    }

function OG4(A, Q) {
        return TvA(Q4A.unlock)(A, Q)
    }

function RG4(A, Q) {
        return PvA(Q4A.unlock)(A, sC1(Q))
    }

function TG4(A, Q) {
        return TvA(Q4A.check)(A, Q)
    }

function PG4(A, Q) {
        return PvA(Q4A.check)(A, sC1(Q))
    }
    Sm.exports = Ri0;
    Sm.exports.lock = Ri0;
    Sm.exports.unlock = OG4;
    Sm.exports.lockSync = MG4;
    Sm.exports.unlockSync = RG4;
    Sm.exports.check = TG4;
    Sm.exports.checkSync = PG4
});

class G4A {
    heap;
    length;
    static #A = !1;
    static create(A) {
        let Q = Si0(A);
        if (!Q) return [];
        G4A.#A = !0;
        let B = new G4A(A, Q);
        return G4A.#A = !1, B
    }
    constructor(A, Q) {
        if (!G4A.#A) throw TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new Q(A), this.length = 0
    }
    push(A) {
        this.heap[this.length++] = A
    }
    pop() {
        return this.heap[--this.length]
    }
}
var B4A, Pi0, rC1, ji0 = (A, Q, B, G) => {
        typeof rC1.emitWarning === "function" ? rC1.emitWarning(A, Q, B, G) : console.error(`[${B}] ${Q}: ${A}`)
    },
    jvA, Ti0, jG4 = (A) => !Pi0.has(A),
    NZ7, _m = (A) => A && A === Math.floor(A) && A > 0 && isFinite(A),
    Si0 = (A) => !_m(A) ? null : A <= Math.pow(2, 8) ? Uint8Array : A <= Math.pow(2, 16) ? Uint16Array : A <= Math.pow(2, 32) ? Uint32Array : A <= Number.MAX_SAFE_INTEGER ? gKA : null,
    gKA, km;
var SvA = L(() => {
    B4A = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date, Pi0 = new Set, rC1 = typeof process === "object" && !!process ? process : {}, jvA = globalThis.AbortController, Ti0 = globalThis.AbortSignal;
    if (typeof jvA > "u") {
        Ti0 = class {
            onabort;
            _onabort = [];
            reason;
            aborted = !1;
            addEventListener(G, Z) {
                this._onabort.push(Z)
            }
        }, jvA = class {
            constructor() {
                Q()
            }
            signal = new Ti0;
            abort(G) {
                if (this.signal.aborted) return;
                this.signal.reason = G, this.signal.aborted = !0;
                for (let Z of this.signal._onabort) Z(G);
                this.signal.onabort?.(G)
            }
        };
        let A = rC1.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1",
            Q = () => {
                if (!A) return;
                A = !1, ji0("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", Q)
            }
    }
    NZ7 = Symbol("type");
    gKA = class gKA extends Array {
        constructor(A) {
            super(A);
            this.fill(0)
        }
    };
    km = class km {
        #A;
        #Q;
        #B;
        #Z;
        #G;
        #J;
        ttl;
        ttlResolution;
        ttlAutopurge;
        updateAgeOnGet;
        updateAgeOnHas;
        allowStale;
        noDisposeOnSet;
        noUpdateTTL;
        maxEntrySize;
        sizeCalculation;
        noDeleteOnFetchRejection;
        noDeleteOnStaleGet;
        allowStaleOnFetchAbort;
        allowStaleOnFetchRejection;
        ignoreFetchAbort;
        #I;
        #F;
        #V;
        #W;
        #Y;
        #C;
        #z;
        #H;
        #K;
        #w;
        #D;
        #q;
        #N;
        #U;
        #L;
        #P;
        #E;
        static unsafeExposeInternals(A) {
            return {
                starts: A.#N,
                ttls: A.#U,
                sizes: A.#q,
                keyMap: A.#V,
                keyList: A.#W,
                valList: A.#Y,
                next: A.#C,
                prev: A.#z,
                get head() {
                    return A.#H
                },
                get tail() {
                    return A.#K
                },
                free: A.#w,
                isBackgroundFetch: (Q) => A.#X(Q),
                backgroundFetch: (Q, B, G, Z) => A.#x(Q, B, G, Z),
                moveToTail: (Q) => A.#_(Q),
                indexes: (Q) => A.#M(Q),
                rindexes: (Q) => A.#O(Q),
                isStale: (Q) => A.#$(Q)
            }
        }
        get max() {
            return this.#A
        }
        get maxSize() {
            return this.#Q
        }
        get calculatedSize() {
            return this.#F
        }
        get size() {
            return this.#I
        }
        get fetchMethod() {
            return this.#G
        }
        get memoMethod() {
            return this.#J
        }
        get dispose() {
            return this.#B
        }
        get disposeAfter() {
            return this.#Z
        }
        constructor(A) {
            let {
                max: Q = 0,
                ttl: B,
                ttlResolution: G = 1,
                ttlAutopurge: Z,
                updateAgeOnGet: I,
                updateAgeOnHas: Y,
                allowStale: J,
                dispose: W,
                disposeAfter: X,
                noDisposeOnSet: F,
                noUpdateTTL: V,
                maxSize: K = 0,
                maxEntrySize: D = 0,
                sizeCalculation: H,
                fetchMethod: C,
                memoMethod: E,
                noDeleteOnFetchRejection: z,
                noDeleteOnStaleGet: w,
                allowStaleOnFetchRejection: N,
                allowStaleOnFetchAbort: q,
                ignoreFetchAbort: R
            } = A;
            if (Q !== 0 && !_m(Q)) throw TypeError("max option must be a nonnegative integer");
            let P = Q ? Si0(Q) : Array;
            if (!P) throw Error("invalid max value: " + Q);
            if (this.#A = Q, this.#Q = K, this.maxEntrySize = D || this.#Q, this.sizeCalculation = H, this.sizeCalculation) {
                if (!this.#Q && !this.maxEntrySize) throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
                if (typeof this.sizeCalculation !== "function") throw TypeError("sizeCalculation set to non-function")
            }
            if (E !== void 0 && typeof E !== "function") throw TypeError("memoMethod must be a function if defined");
            if (this.#J = E, C !== void 0 && typeof C !== "function") throw TypeError("fetchMethod must be a function if specified");
            if (this.#G = C, this.#P = !!C, this.#V = new Map, this.#W = Array(Q).fill(void 0), this.#Y = Array(Q).fill(void 0), this.#C = new P(Q), this.#z = new P(Q), this.#H = 0, this.#K = 0, this.#w = G4A.create(Q), this.#I = 0, this.#F = 0, typeof W === "function") this.#B = W;
            if (typeof X === "function") this.#Z = X, this.#D = [];
            else this.#Z = void 0, this.#D = void 0;
            if (this.#L = !!this.#B, this.#E = !!this.#Z, this.noDisposeOnSet = !!F, this.noUpdateTTL = !!V, this.noDeleteOnFetchRejection = !!z, this.allowStaleOnFetchRejection = !!N, this.allowStaleOnFetchAbort = !!q, this.ignoreFetchAbort = !!R, this.maxEntrySize !== 0) {
                if (this.#Q !== 0) {
                    if (!_m(this.#Q)) throw TypeError("maxSize must be a positive integer if specified")
                }
                if (!_m(this.maxEntrySize)) throw TypeError("maxEntrySize must be a positive integer if specified");
                this.#m()
            }
            if (this.allowStale = !!J, this.noDeleteOnStaleGet = !!w, this.updateAgeOnGet = !!I, this.updateAgeOnHas = !!Y, this.ttlResolution = _m(G) || G === 0 ? G : 1, this.ttlAutopurge = !!Z, this.ttl = B || 0, this.ttl) {
                if (!_m(this.ttl)) throw TypeError("ttl must be a positive integer if specified");
                this.#v()
            }
            if (this.#A === 0 && this.ttl === 0 && this.#Q === 0) throw TypeError("At least one of max, maxSize, or ttl is required");
            if (!this.ttlAutopurge && !this.#A && !this.#Q) {
                if (jG4("LRU_CACHE_UNBOUNDED")) Pi0.add("LRU_CACHE_UNBOUNDED"), ji0("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", "LRU_CACHE_UNBOUNDED", km)
            }
        }
        getRemainingTTL(A) {
            return this.#V.has(A) ? 1 / 0 : 0
        }
        #v() {
            let A = new gKA(this.#A),
                Q = new gKA(this.#A);
            this.#U = A, this.#N = Q, this.#b = (Z, I, Y = B4A.now()) => {
                if (Q[Z] = I !== 0 ? Y : 0, A[Z] = I, I !== 0 && this.ttlAutopurge) {
                    let J = setTimeout(() => {
                        if (this.#$(Z)) this.#R(this.#W[Z], "expire")
                    }, I + 1);
                    if (J.unref) J.unref()
                }
            }, this.#j = (Z) => {
                Q[Z] = A[Z] !== 0 ? B4A.now() : 0
            }, this.#T = (Z, I) => {
                if (A[I]) {
                    let Y = A[I],
                        J = Q[I];
                    if (!Y || !J) return;
                    Z.ttl = Y, Z.start = J, Z.now = B || G();
                    let W = Z.now - J;
                    Z.remainingTTL = Y - W
                }
            };
            let B = 0,
                G = () => {
                    let Z = B4A.now();
                    if (this.ttlResolution > 0) {
                        B = Z;
                        let I = setTimeout(() => B = 0, this.ttlResolution);
                        if (I.unref) I.unref()
                    }
                    return Z
                };
            this.getRemainingTTL = (Z) => {
                let I = this.#V.get(Z);
                if (I === void 0) return 0;
                let Y = A[I],
                    J = Q[I];
                if (!Y || !J) return 1 / 0;
                let W = (B || G()) - J;
                return Y - W
            }, this.#$ = (Z) => {
                let I = Q[Z],
                    Y = A[Z];
                return !!Y && !!I && (B || G()) - I > Y
            }
        }
        #j = () => {};
        #T = () => {};
        #b = () => {};
        #$ = () => !1;
        #m() {
            let A = new gKA(this.#A);
            this.#F = 0, this.#q = A, this.#S = (Q) => {
                this.#F -= A[Q], A[Q] = 0
            }, this.#f = (Q, B, G, Z) => {
                if (this.#X(B)) return 0;
                if (!_m(G))
                    if (Z) {
                        if (typeof Z !== "function") throw TypeError("sizeCalculation must be a function");
                        if (G = Z(B, Q), !_m(G)) throw TypeError("sizeCalculation return invalid (expect positive integer)")
                    } else throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                return G
            }, this.#k = (Q, B, G) => {
                if (A[Q] = B, this.#Q) {
                    let Z = this.#Q - A[Q];
                    while (this.#F > Z) this.#y(!0)
                }
                if (this.#F += A[Q], G) G.entrySize = B, G.totalCalculatedSize = this.#F
            }
        }
        #S = (A) => {};
        #k = (A, Q, B) => {};
        #f = (A, Q, B, G) => {
            if (B || G) throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            return 0
        };* #M({
            allowStale: A = this.allowStale
        } = {}) {
            if (this.#I)
                for (let Q = this.#K;;) {
                    if (!this.#h(Q)) break;
                    if (A || !this.#$(Q)) yield Q;
                    if (Q === this.#H) break;
                    else Q = this.#z[Q]
                }
        }* #O({
            allowStale: A = this.allowStale
        } = {}) {
            if (this.#I)
                for (let Q = this.#H;;) {
                    if (!this.#h(Q)) break;
                    if (A || !this.#$(Q)) yield Q;
                    if (Q === this.#K) break;
                    else Q = this.#C[Q]
                }
        }
        #h(A) {
            return A !== void 0 && this.#V.get(this.#W[A]) === A
        }* entries() {
            for (let A of this.#M())
                if (this.#Y[A] !== void 0 && this.#W[A] !== void 0 && !this.#X(this.#Y[A])) yield [this.#W[A], this.#Y[A]]
        }* rentries() {
            for (let A of this.#O())
                if (this.#Y[A] !== void 0 && this.#W[A] !== void 0 && !this.#X(this.#Y[A])) yield [this.#W[A], this.#Y[A]]
        }* keys() {
            for (let A of this.#M()) {
                let Q = this.#W[A];
                if (Q !== void 0 && !this.#X(this.#Y[A])) yield Q
            }
        }* rkeys() {
            for (let A of this.#O()) {
                let Q = this.#W[A];
                if (Q !== void 0 && !this.#X(this.#Y[A])) yield Q
            }
        }* values() {
            for (let A of this.#M())
                if (this.#Y[A] !== void 0 && !this.#X(this.#Y[A])) yield this.#Y[A]
        }* rvalues() {
            for (let A of this.#O())
                if (this.#Y[A] !== void 0 && !this.#X(this.#Y[A])) yield this.#Y[A]
        } [Symbol.iterator]() {
            return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(A, Q = {}) {
            for (let B of this.#M()) {
                let G = this.#Y[B],
                    Z = this.#X(G) ? G.__staleWhileFetching : G;
                if (Z === void 0) continue;
                if (A(Z, this.#W[B], this)) return this.get(this.#W[B], Q)
            }
        }
        forEach(A, Q = this) {
            for (let B of this.#M()) {
                let G = this.#Y[B],
                    Z = this.#X(G) ? G.__staleWhileFetching : G;
                if (Z === void 0) continue;
                A.call(Q, Z, this.#W[B], this)
            }
        }
        rforEach(A, Q = this) {
            for (let B of this.#O()) {
                let G = this.#Y[B],
                    Z = this.#X(G) ? G.__staleWhileFetching : G;
                if (Z === void 0) continue;
                A.call(Q, Z, this.#W[B], this)
            }
        }
        purgeStale() {
            let A = !1;
            for (let Q of this.#O({
                    allowStale: !0
                }))
                if (this.#$(Q)) this.#R(this.#W[Q], "expire"), A = !0;
            return A
        }
        info(A) {
            let Q = this.#V.get(A);
            if (Q === void 0) return;
            let B = this.#Y[Q],
                G = this.#X(B) ? B.__staleWhileFetching : B;
            if (G === void 0) return;
            let Z = {
                value: G
            };
            if (this.#U && this.#N) {
                let I = this.#U[Q],
                    Y = this.#N[Q];
                if (I && Y) {
                    let J = I - (B4A.now() - Y);
                    Z.ttl = J, Z.start = Date.now()
                }
            }
            if (this.#q) Z.size = this.#q[Q];
            return Z
        }
        dump() {
            let A = [];
            for (let Q of this.#M({
                    allowStale: !0
                })) {
                let B = this.#W[Q],
                    G = this.#Y[Q],
                    Z = this.#X(G) ? G.__staleWhileFetching : G;
                if (Z === void 0 || B === void 0) continue;
                let I = {
                    value: Z
                };
                if (this.#U && this.#N) {
                    I.ttl = this.#U[Q];
                    let Y = B4A.now() - this.#N[Q];
                    I.start = Math.floor(Date.now() - Y)
                }
                if (this.#q) I.size = this.#q[Q];
                A.unshift([B, I])
            }
            return A
        }
        load(A) {
            this.clear();
            for (let [Q, B] of A) {
                if (B.start) {
                    let G = Date.now() - B.start;
                    B.start = B4A.now() - G
                }
                this.set(Q, B.value, B)
            }
        }
        set(A, Q, B = {}) {
            if (Q === void 0) return this.delete(A), this;
            let {
                ttl: G = this.ttl,
                start: Z,
                noDisposeOnSet: I = this.noDisposeOnSet,
                sizeCalculation: Y = this.sizeCalculation,
                status: J
            } = B, {
                noUpdateTTL: W = this.noUpdateTTL
            } = B, X = this.#f(A, Q, B.size || 0, Y);
            if (this.maxEntrySize && X > this.maxEntrySize) {
                if (J) J.set = "miss", J.maxEntrySizeExceeded = !0;
                return this.#R(A, "set"), this
            }
            let F = this.#I === 0 ? void 0 : this.#V.get(A);
            if (F === void 0) {
                if (F = this.#I === 0 ? this.#K : this.#w.length !== 0 ? this.#w.pop() : this.#I === this.#A ? this.#y(!1) : this.#I, this.#W[F] = A, this.#Y[F] = Q, this.#V.set(A, F), this.#C[this.#K] = F, this.#z[F] = this.#K, this.#K = F, this.#I++, this.#k(F, X, J), J) J.set = "add";
                W = !1
            } else {
                this.#_(F);
                let V = this.#Y[F];
                if (Q !== V) {
                    if (this.#P && this.#X(V)) {
                        V.__abortController.abort(Error("replaced"));
                        let {
                            __staleWhileFetching: K
                        } = V;
                        if (K !== void 0 && !I) {
                            if (this.#L) this.#B?.(K, A, "set");
                            if (this.#E) this.#D?.push([K, A, "set"])
                        }
                    } else if (!I) {
                        if (this.#L) this.#B?.(V, A, "set");
                        if (this.#E) this.#D?.push([V, A, "set"])
                    }
                    if (this.#S(F), this.#k(F, X, J), this.#Y[F] = Q, J) {
                        J.set = "replace";
                        let K = V && this.#X(V) ? V.__staleWhileFetching : V;
                        if (K !== void 0) J.oldValue = K
                    }
                } else if (J) J.set = "update"
            }
            if (G !== 0 && !this.#U) this.#v();
            if (this.#U) {
                if (!W) this.#b(F, G, Z);
                if (J) this.#T(J, F)
            }
            if (!I && this.#E && this.#D) {
                let V = this.#D,
                    K;
                while (K = V?.shift()) this.#Z?.(...K)
            }
            return this
        }
        pop() {
            try {
                while (this.#I) {
                    let A = this.#Y[this.#H];
                    if (this.#y(!0), this.#X(A)) {
                        if (A.__staleWhileFetching) return A.__staleWhileFetching
                    } else if (A !== void 0) return A
                }
            } finally {
                if (this.#E && this.#D) {
                    let A = this.#D,
                        Q;
                    while (Q = A?.shift()) this.#Z?.(...Q)
                }
            }
        }
        #y(A) {
            let Q = this.#H,
                B = this.#W[Q],
                G = this.#Y[Q];
            if (this.#P && this.#X(G)) G.__abortController.abort(Error("evicted"));
            else if (this.#L || this.#E) {
                if (this.#L) this.#B?.(G, B, "evict");
                if (this.#E) this.#D?.push([G, B, "evict"])
            }
            if (this.#S(Q), A) this.#W[Q] = void 0, this.#Y[Q] = void 0, this.#w.push(Q);
            if (this.#I === 1) this.#H = this.#K = 0, this.#w.length = 0;
            else this.#H = this.#C[Q];
            return this.#V.delete(B), this.#I--, Q
        }
        has(A, Q = {}) {
            let {
                updateAgeOnHas: B = this.updateAgeOnHas,
                status: G
            } = Q, Z = this.#V.get(A);
            if (Z !== void 0) {
                let I = this.#Y[Z];
                if (this.#X(I) && I.__staleWhileFetching === void 0) return !1;
                if (!this.#$(Z)) {
                    if (B) this.#j(Z);
                    if (G) G.has = "hit", this.#T(G, Z);
                    return !0
                } else if (G) G.has = "stale", this.#T(G, Z)
            } else if (G) G.has = "miss";
            return !1
        }
        peek(A, Q = {}) {
            let {
                allowStale: B = this.allowStale
            } = Q, G = this.#V.get(A);
            if (G === void 0 || !B && this.#$(G)) return;
            let Z = this.#Y[G];
            return this.#X(Z) ? Z.__staleWhileFetching : Z
        }
        #x(A, Q, B, G) {
            let Z = Q === void 0 ? void 0 : this.#Y[Q];
            if (this.#X(Z)) return Z;
            let I = new jvA,
                {
                    signal: Y
                } = B;