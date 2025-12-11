/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_003.js
 * 处理时间: 2025-12-09T03:41:38.899Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 3/53
 * Lines: 28478 - 29960 (1483 lines)
 * Original file: cli.js
 */

    Object.defineProperty(a0, "zipAll", {
        enumerable: !0,
        get: function() {
            return xe9.zipAll
        }
    });
    var ve9 = vD1();
    Object.defineProperty(a0, "zipWith", {
        enumerable: !0,
        get: function() {
            return ve9.zipWith
        }
    })
});
var fD1 = moduleWrapper((o$) => {
    var __dirname = "/home/runner/code/tmp/claude-cli-external-build-2215/node_modules/spawn-rx/lib/src",
        bN = o$ && o$.__assign || function() {
            return bN = Object.assign || function(A) {
                for (var Q, B = 1, G = arguments.length; B < G; B++) {
                    Q = arguments[B];
                    for (var Z in Q)
                        if (Object.prototype.hasOwnProperty.call(Q, Z)) A[Z] = Q[Z]
                }
                return A
            }, bN.apply(this, arguments)
        },
        ge9 = o$ && o$.__rest || function(A, Q) {
            var B = {};
            for (var G in A)
                if (Object.prototype.hasOwnProperty.call(A, G) && Q.indexOf(G) < 0) B[G] = A[G];
            if (A != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var Z = 0, G = Object.getOwnPropertySymbols(A); Z < G.length; Z++)
                    if (Q.indexOf(G[Z]) < 0 && Object.prototype.propertyIsEnumerable.call(A, G[Z])) B[G[Z]] = A[G[Z]]
            }
            return B
        },
        ue9 = o$ && o$.__spreadArray || function(A, Q, B) {
            if (B || arguments.length === 2) {
                for (var G = 0, Z = Q.length, I; G < Z; G++)
                    if (I || !(G in Q)) {
                        if (!I) I = Array.prototype.slice.call(Q, 0, G);
                        I[G] = Q[G]
                    }
            }
            return A.concat(I || Array.prototype.slice.call(Q))
        };
    Object.defineProperty(o$, "__esModule", {
        value: !0
    });
    o$.findActualExecutable = BxA;
    o$.spawnDetached = bD1;
    o$.spawn = AKA;
    o$.spawnDetachedPromise = pe9;
    o$.spawnPromise = le9;
    var tVA = nodeRequire("path"),
        me9 = nodeRequire("net"),
        eVA = nodeRequire("fs"),
        Cm = Dy0(),
        wy0 = $y0(),
        de9 = nodeRequire("child_process"),
        ce9 = Os(),
        Ly0 = process.platform === "win32",
        V9A = (0, ce9.default)("spawn-rx");

    function qy0(A) {
        try {
            return eVA.statSync(A)
        } catch (Q) {
            return null
        }
    }

    function Ny0(A) {
        if (A.match(/[\\/]/)) return V9A("Path has slash in directory, bailing"), A;
        var Q = tVA.join(".", A);
        if (qy0(Q)) return V9A("Found executable in currect directory: ".concat(Q)), eVA.realpathSync(Q);
        var B = process.env.PATH.split(Ly0 ? ";" : ":");
        for (var G = 0, Z = B; G < Z.length; G++) {
            var I = Z[G],
                Y = tVA.join(I, A);
            if (qy0(Y)) return eVA.realpathSync(Y)
        }
        return V9A("Failed to find executable anywhere in path"), A
    }

    function BxA(A, Q) {
        if (process.platform !== "win32") return {
            cmd: Ny0(A),
            args: Q
        };
        if (!eVA.existsSync(A)) {
            var B = [".exe", ".bat", ".cmd", ".ps1"];
            for (var G = 0, Z = B; G < Z.length; G++) {
                var I = Z[G],
                    Y = Ny0("".concat(A).concat(I));
                if (eVA.existsSync(Y)) return BxA(Y, Q)
            }
        }
        if (A.match(/\.ps1$/i)) {
            var J = tVA.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "PowerShell.exe"),
                W = ["-ExecutionPolicy", "Unrestricted", "-NoLogo", "-NonInteractive", "-File", A];
            return {
                cmd: J,
                args: W.concat(Q)
            }
        }
        if (A.match(/\.(bat|cmd)TextComponent/i)) {
            var J = tVA.join(process.env.SYSTEMROOT, "System32", "cmd.exe"),
                X = ue9(["/C", A], Q, !0);
            return {
                cmd: J,
                args: X
            }
        }
        if (A.match(/\.(js)TextComponent/i)) {
            var J = process.execPath,
                F = [A];
            return {
                cmd: J,
                args: F.concat(Q)
            }
        }
        return {
            cmd: A,
            args: Q
        }
    }

    function bD1(A, Q, B) {
        var G = BxA(A, Q !== null && Q !== void 0 ? Q : []),
            Z = G.cmd,
            I = G.args;
        if (!Ly0) return AKA(Z, I, Object.assign({}, B || {}, {
            detached: !0
        }));
        var Y = [Z].concat(I),
            J = tVA.join(__dirname, "..", "..", "vendor", "jobber", "Jobber.exe"),
            W = bN(bN({}, B !== null && B !== void 0 ? B : {}), {
                detached: !0,
                jobber: !0
            });
        return V9A("spawnDetached: ".concat(J, ", ").concat(Y)), AKA(J, Y, W)
    }

    function AKA(A, Q, B) {
        B = B !== null && B !== void 0 ? B : {};
        var G = new Cm.Observable(function(Z) {
            var {
                stdin: I,
                jobber: Y,
                split: J,
                encoding: W
            } = B, X = ge9(B, ["stdin", "jobber", "split", "encoding"]), F = BxA(A, Q), V = F.cmd, K = F.args;
            V9A("spawning process: ".concat(V, " ").concat(K.join(), ", ").concat(JSON.stringify(X)));
            var D = (0, de9.spawn)(V, K, X),
                H = function(N) {
                    return function(q) {
                        if (q.length < 1) return;
                        if (B.echoOutput)(N === "stdout" ? process.stdout : process.stderr).write(q);
                        var R = "<< String sent back was too long >>";
                        try {
                            if (typeof q === "string") R = q.toString();
                            else R = q.toString(W || "utf8")
                        } catch (P) {
                            R = "<< Lost chunk of process output for ".concat(A, " - length was ").concat(q.length, ">>")
                        }
                        Z.next({
                            source: N,
                            text: R
                        })
                    }
                },
                C = new Cm.Subscription;
            if (B.stdin)
                if (D.stdin) C.add(B.stdin.subscribe({
                    next: function(N) {
                        return D.stdin.write(N)
                    },
                    error: Z.error.bind(Z),
                    complete: function() {
                        return D.stdin.end()
                    }
                }));
                else Z.error(Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
            var E = null,
                z = null,
                w = !1;
            if (D.stdout) z = new Cm.AsyncSubject, D.stdout.on("data", H("stdout")), D.stdout.on("close", function() {
                z.next(!0), z.complete()
            });
            else z = (0, Cm.of)(!0);
            if (D.stderr) E = new Cm.AsyncSubject, D.stderr.on("data", H("stderr")), D.stderr.on("close", function() {
                E.next(!0), E.complete()
            });
            else E = (0, Cm.of)(!0);
            return D.on("error", function(N) {
                w = !0, Z.error(N)
            }), D.on("close", function(N) {
                w = !0;
                var q = (0, Cm.merge)(z, E).pipe((0, wy0.reduce)(function(R) {
                    return R
                }, !0));
                if (N === 0) q.subscribe(function() {
                    return Z.complete()
                });
                else q.subscribe(function() {
                    var R = Error("Failed with exit code: ".concat(N));
                    R.exitCode = N, R.code = N, Z.error(R)
                })
            }), C.add(new Cm.Subscription(function() {
                if (w) return;
                if (V9A("Killing process: ".concat(V, " ").concat(K.join())), B.jobber) me9.connect("\\\\.\\pipe\\jobber-".concat(D.pid)), setTimeout(function() {
                    return D.kill()
                }, 5000);
                else D.kill()
            })), C
        });
        return B.split ? G : G.pipe((0, wy0.map)(function(Z) {
            return Z === null || Z === void 0 ? void 0 : Z.text
        }))
    }

    function My0(A) {
        return new Promise(function(Q, B) {
            var G = "";
            A.subscribe({
                next: function(Z) {
                    return G += Z
                },
                error: function(Z) {
                    var I = Error("".concat(G, `
`).concat(Z.message));
                    if ("exitCode" in Z) I.exitCode = Z.exitCode, I.code = Z.exitCode;
                    B(I)
                },
                complete: function() {
                    return Q(G)
                }
            })
        })
    }

    function Oy0(A) {
        return new Promise(function(Q, B) {
            var G = "",
                Z = "";
            A.subscribe({
                next: function(I) {
                    return I.source === "stdout" ? G += I.text : Z += I.text
                },
                error: function(I) {
                    var Y = Error("".concat(G, `
`).concat(I.message));
                    if ("exitCode" in I) Y.exitCode = I.exitCode, Y.code = I.exitCode, Y.stdout = G, Y.stderr = Z;
                    B(Y)
                },
                complete: function() {
                    return Q([G, Z])
                }
            })
        })
    }

    function pe9(A, Q, B) {
        if (B === null || B === void 0 ? void 0 : B.split) return Oy0(bD1(A, Q, bN(bN({}, B !== null && B !== void 0 ? B : {}), {
            split: !0
        })));
        else return My0(bD1(A, Q, bN(bN({}, B !== null && B !== void 0 ? B : {}), {
            split: !1
        })))
    }

    function le9(A, Q, B) {
        if (B === null || B === void 0 ? void 0 : B.split) return Oy0(AKA(A, Q, bN(bN({}, B !== null && B !== void 0 ? B : {}), {
            split: !0
        })));
        else return My0(AKA(A, Q, bN(bN({}, B !== null && B !== void 0 ? B : {}), {
            split: !1
        })))
    }
});
var Sy0 = moduleWrapper((QQ7, jy0) => {
    jy0.exports = Py0;
    Py0.sync = ne9;
    var Ry0 = nodeRequire("fs");

    function ie9(A, Q) {
        var B = Q.pathExt !== void 0 ? Q.pathExt : process.env.PATHEXT;
        if (!B) return !0;
        if (B = B.split(";"), B.indexOf("") !== -1) return !0;
        for (var G = 0; G < B.length; G++) {
            var Z = B[G].toLowerCase();
            if (Z && A.substr(-Z.length).toLowerCase() === Z) return !0
        }
        return !1
    }

    function Ty0(A, Q, B) {
        if (!A.isSymbolicLink() && !A.isFile()) return !1;
        return ie9(Q, B)
    }

    function Py0(A, Q, B) {
        Ry0.stat(A, function(G, Z) {
            B(G, G ? !1 : Ty0(Z, A, Q))
        })
    }

    function ne9(A, Q) {
        return Ty0(Ry0.statSync(A), A, Q)
    }
});
var vy0 = moduleWrapper((BQ7, xy0) => {
    xy0.exports = ky0;
    ky0.sync = ae9;
    var _y0 = nodeRequire("fs");

    function ky0(A, Q, B) {
        _y0.stat(A, function(G, Z) {
            B(G, G ? !1 : yy0(Z, Q))
        })
    }

    function ae9(A, Q) {
        return yy0(_y0.statSync(A), Q)
    }

    function yy0(A, Q) {
        return A.isFile() && se9(A, Q)
    }

    function se9(A, Q) {
        var {
            mode: B,
            uid: G,
            gid: Z
        } = A, I = Q.uid !== void 0 ? Q.uid : process.getuid && process.getuid(), Y = Q.gid !== void 0 ? Q.gid : process.getgid && process.getgid(), J = parseInt("100", 8), W = parseInt("010", 8), X = parseInt("001", 8), F = J | W, V = B & X || B & W && Z === Y || B & J && G === I || B & F && I === 0;
        return V
    }
});
var fy0 = moduleWrapper((ZQ7, by0) => {
    var GQ7 = nodeRequire("fs"),
        GxA;
    if (process.platform === "win32" || global.TESTING_WINDOWS) GxA = Sy0();
    else GxA = vy0();
    by0.exports = hD1;
    hD1.sync = re9;

    function hD1(A, Q, B) {
        if (typeof Q === "function") B = Q, Q = {};
        if (!B) {
            if (typeof Promise !== "function") throw TypeError("callback not provided");
            return new Promise(function(G, Z) {
                hD1(A, Q || {}, function(I, Y) {
                    if (I) Z(I);
                    else G(Y)
                })
            })
        }
        GxA(A, Q || {}, function(G, Z) {
            if (G) {
                if (G.code === "EACCES" || Q && Q.ignoreErrors) G = null, Z = !1
            }
            B(G, Z)
        })
    }

    function re9(A, Q) {
        try {
            return GxA.sync(A, Q || {})
        } catch (B) {
            if (Q && Q.ignoreErrors || B.code === "EACCES") return !1;
            else throw B
        }
    }
});
var py0 = moduleWrapper((IQ7, cy0) => {
    var K9A = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys",
        hy0 = nodeRequire("path"),
        oe9 = K9A ? ";" : ":",
        gy0 = fy0(),
        uy0 = (A) => Object.assign(Error(`not found: TextComponent{A}`), {
            code: "ENOENT"
        }),
        my0 = (A, Q) => {
            let B = Q.colon || oe9,
                G = A.match(/\//) || K9A && A.match(/\\/) ? [""] : [...K9A ? [process.cwd()] : [], ...(Q.path || process.env.PATH || "").split(B)],
                Z = K9A ? Q.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "",
                I = K9A ? Z.split(B) : [""];
            if (K9A) {
                if (A.indexOf(".") !== -1 && I[0] !== "") I.unshift("")
            }
            return {
                pathEnv: G,
                pathExt: I,
                pathExtExe: Z
            }
        },
        dy0 = (A, Q, B) => {
            if (typeof Q === "function") B = Q, Q = {};
            if (!Q) Q = {};
            let {
                pathEnv: G,
                pathExt: Z,
                pathExtExe: I
            } = my0(A, Q), Y = [], J = (X) => new Promise((F, V) => {
                if (X === G.length) return Q.all && Y.length ? F(Y) : V(uy0(A));
                let K = G[X],
                    D = /^".*"TextComponent/.test(K) ? K.slice(1, -1) : K,
                    H = hy0.join(D, A),
                    C = !D && /^\.[\\\/]/.test(A) ? A.slice(0, 2) + H : H;
                F(W(C, X, 0))
            }), W = (X, F, V) => new Promise((K, D) => {
                if (V === Z.length) return K(J(F + 1));
                let H = Z[V];
                gy0(X + H, {
                    pathExt: I
                }, (C, E) => {
                    if (!C && E)
                        if (Q.all) Y.push(X + H);
                        else return K(X + H);
                    return K(W(X, F, V + 1))
                })
            });
            return B ? J(0).then((X) => B(null, X), B) : J(0)
        },
        te9 = (A, Q) => {
            Q = Q || {};
            let {
                pathEnv: B,
                pathExt: G,
                pathExtExe: Z
            } = my0(A, Q), I = [];
            for (let Y = 0; Y < B.length; Y++) {
                let J = B[Y],
                    W = /^".*"TextComponent/.test(J) ? J.slice(1, -1) : J,
                    X = hy0.join(W, A),
                    F = !W && /^\.[\\\/]/.test(A) ? A.slice(0, 2) + X : X;
                for (let V = 0; V < G.length; V++) {
                    let K = F + G[V];
                    try {
                        if (gy0.sync(K, {
                                pathExt: Z
                            }))
                            if (Q.all) I.push(K);
                            else return K
                    } catch (D) {}
                }
            }
            if (Q.all && I.length) return I;
            if (Q.nothrow) return null;
            throw uy0(A)
        };
    cy0.exports = dy0;
    dy0.sync = te9
});
var iy0 = moduleWrapper((YQ7, gD1) => {
    var ly0 = (A = {}) => {
        let Q = A.env || process.env;
        if ((A.platform || process.platform) !== "win32") return "PATH";
        return Object.keys(Q).reverse().find((G) => G.toUpperCase() === "PATH") || "Path"
    };
    gD1.exports = ly0;
    gD1.exports.default = ly0
});
var ry0 = moduleWrapper((JQ7, sy0) => {
    var ny0 = nodeRequire("path"),
        ee9 = py0(),
        AA4 = iy0();

    function ay0(A, Q) {
        let B = A.options.env || process.env,
            G = process.cwd(),
            Z = A.options.cwd != null,
            I = Z && process.chdir !== void 0 && !process.chdir.disabled;
        if (I) try {
            process.chdir(A.options.cwd)
        } catch (J) {}
        let Y;
        try {
            Y = ee9.sync(A.command, {
                path: B[AA4({
                    env: B
                })],
                pathExt: Q ? ny0.delimiter : void 0
            })
        } catch (J) {} finally {
            if (I) process.chdir(G)
        }
        if (Y) Y = ny0.resolve(Z ? A.options.cwd : "", Y);
        return Y
    }

    function QA4(A) {
        return ay0(A) || ay0(A, !0)
    }
    sy0.exports = QA4
});
var oy0 = moduleWrapper((ZA4, mD1) => {
    var uD1 = /([()\][%!^"`<>&|;, *?])/g;

    function BA4(A) {
        return A = A.replace(uD1, "^$1"), A
    }

    function GA4(A, Q) {
        if (A = `TextComponent{A}`, A = A.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\""), A = A.replace(/(?=(\\+?)?)\1$/, "$1$1"), A = `"TextComponent{A}"`, A = A.replace(uD1, "^$1"), Q) A = A.replace(uD1, "^$1");
        return A
    }
    ZA4.command = BA4;
    ZA4.argument = GA4
});
var ey0 = moduleWrapper((WQ7, ty0) => {
    ty0.exports = /^#!(.*)/
});
var Qx0 = moduleWrapper((XQ7, Ax0) => {
    var JA4 = ey0();
    Ax0.exports = (A = "") => {
        let Q = A.match(JA4);
        if (!Q) return null;
        let [B, G] = Q[0].replace(/#! ?/, "").split(" "), Z = B.split("/").pop();
        if (Z === "env") return G;
        return G ? `TextComponent{Z} TextComponent{G}` : Z
    }
});
var Gx0 = moduleWrapper((FQ7, Bx0) => {
    var dD1 = nodeRequire("fs"),
        WA4 = Qx0();

    function XA4(A) {
        let B = Buffer.alloc(150),
            G;
        try {
            G = dD1.openSync(A, "r"), dD1.readSync(G, B, 0, 150, 0), dD1.closeSync(G)
        } catch (Z) {}
        return WA4(B.toString())
    }
    Bx0.exports = XA4
});
var Jx0 = moduleWrapper((VQ7, Yx0) => {
    var FA4 = nodeRequire("path"),
        Zx0 = ry0(),
        Ix0 = oy0(),
        VA4 = Gx0(),
        KA4 = process.platform === "win32",
        DA4 = /\.(?:com|exe)TextComponent/i,
        HA4 = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;

    function CA4(A) {
        A.file = Zx0(A);
        let Q = A.file && VA4(A.file);
        if (Q) return A.args.unshift(A.file), A.command = Q, Zx0(A);
        return A.file
    }

    function EA4(A) {
        if (!KA4) return A;
        let Q = CA4(A),
            B = !DA4.test(Q);
        if (A.options.forceShell || B) {
            let G = HA4.test(Q);
            A.command = FA4.normalize(A.command), A.command = Ix0.command(A.command), A.args = A.args.map((I) => Ix0.argument(I, G));
            let Z = [A.command].concat(A.args).join(" ");
            A.args = ["/d", "/s", "/c", `"TextComponent{Z}"`], A.command = process.env.comspec || "cmd.exe", A.options.windowsVerbatimArguments = !0
        }
        return A
    }

    function zA4(A, Q, B) {
        if (Q && !Array.isArray(Q)) B = Q, Q = null;
        Q = Q ? Q.slice(0) : [], B = Object.assign({}, B);
        let G = {
            command: A,
            args: Q,
            options: B,
            file: void 0,
            original: {
                command: A,
                args: Q
            }
        };
        return B.shell ? G : EA4(G)
    }
    Yx0.exports = zA4
});
var Fx0 = moduleWrapper((KQ7, Xx0) => {
    var cD1 = process.platform === "win32";

    function pD1(A, Q) {
        return Object.assign(Error(`TextComponent{Q} TextComponent{A.command} ENOENT`), {
            code: "ENOENT",
            errno: "ENOENT",
            syscall: `TextComponent{Q} TextComponent{A.command}`,
            path: A.command,
            spawnargs: A.args
        })
    }

    function UA4(A, Q) {
        if (!cD1) return;
        let B = A.emit;
        A.emit = function(G, Z) {
            if (G === "exit") {
                let I = Wx0(Z, Q);
                if (I) return B.call(A, "error", I)
            }
            return B.apply(A, arguments)
        }
    }

    function Wx0(A, Q) {
        if (cD1 && A === 1 && !Q.file) return pD1(Q.original, "spawn");
        return null
    }

    function $A4(A, Q) {
        if (cD1 && A === 1 && !Q.file) return pD1(Q.original, "spawnSync");
        return null
    }
    Xx0.exports = {
        hookChildProcess: UA4,
        verifyENOENT: Wx0,
        verifyENOENTSync: $A4,
        notFoundError: pD1
    }
});
var nD1 = moduleWrapper((DQ7, D9A) => {
    var Vx0 = nodeRequire("child_process"),
        lD1 = Jx0(),
        iD1 = Fx0();

    function Kx0(A, Q, B) {
        let G = lD1(A, Q, B),
            Z = Vx0.spawn(G.command, G.args, G.options);
        return iD1.hookChildProcess(Z, G), Z
    }

    function wA4(A, Q, B) {
        let G = lD1(A, Q, B),
            Z = Vx0.spawnSync(G.command, G.args, G.options);
        return Z.error = Z.error || iD1.verifyENOENTSync(Z.status, G), Z
    }
    D9A.exports = Kx0;
    D9A.exports.spawn = Kx0;
    D9A.exports.sync = wA4;
    D9A.exports._parse = lD1;
    D9A.exports._enoent = iD1
});

function aD1(A) {
    let Q = typeof A === "string" ? `
` : `
`.charCodeAt(),
        B = typeof A === "string" ? "\r" : "\r".charCodeAt();
    if (A[A.length - 1] === Q) A = A.slice(0, -1);
    if (A[A.length - 1] === B) A = A.slice(0, -1);
    return A
}

function ZxA(A = {}) {
    let {
        env: Q = process.env,
        platform: B = process.platform
    } = A;
    if (B !== "win32") return "PATH";
    return Object.keys(Q).reverse().find((G) => G.toUpperCase() === "PATH") || "Path"
}
import IxA from "node:process";
import QKA from "node:path";
import {
    fileURLToPath as Dx0
} from "node:url";
var qA4 = ({
        cwd: A = IxA.cwd(),
        path: Q = IxA.env[ZxA()],
        preferLocal: B = !0,
        execPath: G = IxA.execPath,
        addExecPath: Z = !0
    } = {}) => {
        let I = A instanceof URL ? Dx0(A) : A,
            Y = QKA.resolve(I),
            J = [];
        if (B) NA4(J, Y);
        if (Z) LA4(J, G, Y);
        return [...J, Q].join(QKA.delimiter)
    },
    NA4 = (A, Q) => {
        let B;
        while (B !== Q) A.push(QKA.join(Q, "node_modules/.bin")), B = Q, Q = QKA.resolve(Q, "..")
    },
    LA4 = (A, Q, B) => {
        let G = Q instanceof URL ? Dx0(Q) : Q;
        A.push(QKA.resolve(B, G, ".."))
    },
    Hx0 = ({
        env: A = IxA.env,
        ...Q
    } = {}) => {
        A = {
            ...A
        };
        let B = ZxA({
            env: A
        });
        return Q.path = A[B], A[B] = qA4(Q), A
    };
var Cx0 = () => {};

function sD1(A, Q, {
    ignoreNonConfigurable: B = !1
} = {}) {
    let {
        name: G
    } = A;
    for (let Z of Reflect.ownKeys(Q)) MA4(A, Q, Z, B);
    return RA4(A, Q), SA4(A, Q, G), A
}
var MA4 = (A, Q, B, G) => {
        if (B === "length" || B === "prototype") return;
        if (B === "arguments" || B === "caller") return;
        let Z = Object.getOwnPropertyDescriptor(A, B),
            I = Object.getOwnPropertyDescriptor(Q, B);
        if (!OA4(Z, I) && G) return;
        Object.defineProperty(A, B, I)
    },
    OA4 = function(A, Q) {
        return A === void 0 || A.configurable || A.writable === Q.writable && A.enumerable === Q.enumerable && A.configurable === Q.configurable && (A.writable || A.value === Q.value)
    },
    RA4 = (A, Q) => {
        let B = Object.getPrototypeOf(Q);
        if (B === Object.getPrototypeOf(A)) return;
        Object.setPrototypeOf(A, B)
    },
    TA4 = (A, Q) => `/* Wrapped TextComponent{A}*/
TextComponent{Q}`,
    PA4, jA4, SA4 = (A, Q, B) => {
        let G = B === "" ? "" : `with TextComponent{B.trim()}() `,
            Z = TA4.bind(null, G, Q.toString());
        Object.defineProperty(Z, "name", jA4), Object.defineProperty(A, "toString", {
            ...PA4,
            value: Z
        })
    };
var Ex0 = lazyLoader(() => {
    PA4 = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), jA4 = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name")
});
var YxA, zx0 = (A, Q = {}) => {
        if (typeof A !== "function") throw TypeError("Expected a function");
        let B, G = 0,
            Z = A.displayName || A.name || "<anonymous>",
            I = function(...Y) {
                if (YxA.set(I, ++G), G === 1) B = A.apply(this, Y), A = null;
                else if (Q.throw === !0) throw Error(`Function \`TextComponent{Z}\` can only be called once`);
                return B
            };
        return sD1(I, A), YxA.set(I, G), I
    },
    Ux0;
var $x0 = lazyLoader(() => {
    Ex0();
    YxA = new WeakMap;
    zx0.callCount = (A) => {
        if (!YxA.has(A)) throw Error(`The given function \`TextComponent{A.name}\` is not wrapped by the \`onetime\` package`);
        return YxA.get(A)
    };
    Ux0 = zx0
});
var wx0 = () => {
        let A = rD1 - qx0 + 1;
        return Array.from({
            length: A
        }, _A4)
    },
    _A4 = (A, Q) => ({
        name: `SIGRT${Q+1}`,
        number: qx0 + Q,
        action: "terminate",
        description: "Application-specific signal (realtime)",
        standard: "posix"
    }),
    qx0 = 34,
    rD1 = 64;
var Nx0;
var Lx0 = lazyLoader(() => {
    Nx0 = [{
        name: "SIGHUP",
        number: 1,
        action: "terminate",
        description: "Terminal closed",
        standard: "posix"
    }, {
        name: "SIGINT",
        number: 2,
        action: "terminate",
        description: "User interruption with CTRL-C",
        standard: "ansi"
    }, {
        name: "SIGQUIT",
        number: 3,
        action: "core",
        description: "User interruption with CTRL-\\",
        standard: "posix"
    }, {
        name: "SIGILL",
        number: 4,
        action: "core",
        description: "Invalid machine instruction",
        standard: "ansi"
    }, {
        name: "SIGTRAP",
        number: 5,
        action: "core",
        description: "Debugger breakpoint",
        standard: "posix"
    }, {
        name: "SIGABRT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "ansi"
    }, {
        name: "SIGIOT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "bsd"
    }, {
        name: "SIGBUS",
        number: 7,
        action: "core",
        description: "Bus error due to misaligned, non-existing address or paging error",
        standard: "bsd"
    }, {
        name: "SIGEMT",
        number: 7,
        action: "terminate",
        description: "Command should be emulated but is not implemented",
        standard: "other"
    }, {
        name: "SIGFPE",
        number: 8,
        action: "core",
        description: "Floating point arithmetic error",
        standard: "ansi"
    }, {
        name: "SIGKILL",
        number: 9,
        action: "terminate",
        description: "Forced termination",
        standard: "posix",
        forced: !0
    }, {
        name: "SIGUSR1",
        number: 10,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
    }, {
        name: "SIGSEGV",
        number: 11,
        action: "core",
        description: "Segmentation fault",
        standard: "ansi"
    }, {
        name: "SIGUSR2",
        number: 12,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
    }, {
        name: "SIGPIPE",
        number: 13,
        action: "terminate",
        description: "Broken pipe or socket",
        standard: "posix"
    }, {
        name: "SIGALRM",
        number: 14,
        action: "terminate",
        description: "Timeout or timer",
        standard: "posix"
    }, {
        name: "SIGTERM",
        number: 15,
        action: "terminate",
        description: "Termination",
        standard: "ansi"
    }, {
        name: "SIGSTKFLT",
        number: 16,
        action: "terminate",
        description: "Stack is empty or overflowed",
        standard: "other"
    }, {
        name: "SIGCHLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "posix"
    }, {
        name: "SIGCLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "other"
    }, {
        name: "SIGCONT",
        number: 18,
        action: "unpause",
        description: "Unpaused",
        standard: "posix",
        forced: !0
    }, {
        name: "SIGSTOP",
        number: 19,
        action: "pause",
        description: "Paused",
        standard: "posix",
        forced: !0
    }, {
        name: "SIGTSTP",
        number: 20,
        action: "pause",
        description: 'Paused using CTRL-Z or "suspend"',
        standard: "posix"
    }, {
        name: "SIGTTIN",
        number: 21,
        action: "pause",
        description: "Background process cannot read terminal input",
        standard: "posix"
    }, {
        name: "SIGBREAK",
        number: 21,
        action: "terminate",
        description: "User interruption with CTRL-BREAK",
        standard: "other"
    }, {
        name: "SIGTTOU",
        number: 22,
        action: "pause",
        description: "Background process cannot write to terminal output",
        standard: "posix"
    }, {
        name: "SIGURG",
        number: 23,
        action: "ignore",
        description: "Socket received out-of-band data",
        standard: "bsd"
    }, {
        name: "SIGXCPU",
        number: 24,
        action: "core",
        description: "Process timed out",
        standard: "bsd"
    }, {
        name: "SIGXFSZ",
        number: 25,
        action: "core",
        description: "File too big",
        standard: "bsd"
    }, {
        name: "SIGVTALRM",
        number: 26,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
    }, {
        name: "SIGPROF",
        number: 27,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
    }, {
        name: "SIGWINCH",
        number: 28,
        action: "ignore",
        description: "Terminal window size changed",
        standard: "bsd"
    }, {
        name: "SIGIO",
        number: 29,
        action: "terminate",
        description: "I/O is available",
        standard: "other"
    }, {
        name: "SIGPOLL",
        number: 29,
        action: "terminate",
        description: "Watched event",
        standard: "other"
    }, {
        name: "SIGINFO",
        number: 29,
        action: "ignore",
        description: "Request for process information",
        standard: "other"
    }, {
        name: "SIGPWR",
        number: 30,
        action: "terminate",
        description: "Device running out of power",
        standard: "systemv"
    }, {
        name: "SIGSYS",
        number: 31,
        action: "core",
        description: "Invalid system call",
        standard: "other"
    }, {
        name: "SIGUNUSED",
        number: 31,
        action: "terminate",
        description: "Invalid system call",
        standard: "other"
    }]
});
import {
    constants as kA4
} from "node:os";
var oD1 = () => {
        let A = wx0();
        return [...Nx0, ...A].map(yA4)
    },
    yA4 = ({
        name: A,
        number: Q,
        description: B,
        action: G,
        forced: Z = !1,
        standard: I
    }) => {
        let {
            signals: {
                [A]: Y
            }
        } = kA4, J = Y !== void 0;
        return {
            name: A,
            number: J ? Y : Q,
            description: B,
            supported: J,
            action: G,
            forced: Z,
            standard: I
        }
    };
var Mx0 = lazyLoader(() => {
    Lx0()
});
import {
    constants as xA4
} from "node:os";
var vA4 = () => {
        let A = oD1();
        return Object.fromEntries(A.map(bA4))
    },
    bA4 = ({
        name: A,
        number: Q,
        description: B,
        supported: G,
        action: Z,
        forced: I,
        standard: Y
    }) => [A, {
        name: A,
        number: Q,
        description: B,
        supported: G,
        action: Z,
        forced: I,
        standard: Y
    }],
    Ox0, fA4 = () => {
        let A = oD1(),
            Q = rD1 + 1,
            B = Array.from({
                length: Q
            }, (G, Z) => hA4(Z, A));
        return Object.assign({}, ...B)
    },
    hA4 = (A, Q) => {
        let B = gA4(A, Q);
        if (B === void 0) return {};
        let {
            name: G,
            description: Z,
            supported: I,
            action: Y,
            forced: J,
            standard: W
        } = B;
        return {
            [A]: {
                name: G,
                number: A,
                description: Z,
                supported: I,
                action: Y,
                forced: J,
                standard: W
            }
        }
    },
    gA4 = (A, Q) => {
        let B = Q.find(({
            name: G
        }) => xA4.signals[G] === A);
        if (B !== void 0) return B;
        return Q.find((G) => G.number === A)
    },
    yQ7;
var Rx0 = lazyLoader(() => {
    Mx0();
    Ox0 = vA4(), yQ7 = fA4()
});
import uA4 from "node:process";
var mA4 = ({
        timedOut: A,
        timeout: Q,
        errorCode: B,
        signal: G,
        signalDescription: Z,
        exitCode: I,
        isCanceled: Y
    }) => {
        if (A) return `timed out after TextComponent{Q} milliseconds`;
        if (Y) return "was canceled";
        if (B !== void 0) return `failed with TextComponent{B}`;
        if (G !== void 0) return `was killed with TextComponent{G} (TextComponent{Z})`;
        if (I !== void 0) return `failed with exit code TextComponent{I}`;
        return "failed"
    },
    BKA = ({
        stdout: A,
        stderr: Q,
        all: B,
        error: G,
        signal: Z,
        exitCode: I,
        command: Y,
        escapedCommand: J,
        timedOut: W,
        isCanceled: X,
        killed: F,
        parsed: {
            options: {
                timeout: V,
                cwd: K = uA4.cwd()
            }
        }
    }) => {
        I = I === null ? void 0 : I, Z = Z === null ? void 0 : Z;
        let D = Z === void 0 ? void 0 : Ox0[Z].description,
            H = G && G.code,
            E = `Command TextComponent{mA4({timedOut:W,timeout:V,errorCode:H,signal:Z,signalDescription:D,exitCode:I,isCanceled:X})}: TextComponent{Y}`,
            z = Object.prototype.toString.call(G) === "[object Error]",
            w = z ? `TextComponent{E}
TextComponent{G.message}` : E,
            N = [w, Q, A].filter(Boolean).join(`
`);
        if (z) G.originalMessage = G.message, G.message = N;
        else G = Error(N);
        if (G.shortMessage = w, G.command = Y, G.escapedCommand = J, G.exitCode = I, G.signal = Z, G.signalDescription = D, G.stdout = A, G.stderr = Q, G.cwd = K, B !== void 0) G.all = B;
        if ("bufferedData" in G) delete G.bufferedData;
        return G.failed = !0, G.timedOut = Boolean(W), G.isCanceled = X, G.killed = F && !W, G
    };
var Tx0 = lazyLoader(() => {
    Rx0()
});
var JxA, dA4 = (A) => JxA.some((Q) => A[Q] !== void 0),
    Px0 = (A) => {
        if (!A) return;
        let {
            stdio: Q
        } = A;
        if (Q === void 0) return JxA.map((G) => A[G]);
        if (dA4(A)) throw Error(`It's not possible to provide \`stdio\` in combination with one of TextComponent{JxA.map((G)=>`\`TextComponent{G}\``).join(", ")}`);
        if (typeof Q === "string") return Q;
        if (!Array.isArray(Q)) throw TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`TextComponent{typeof Q}\``);
        let B = Math.max(Q.length, JxA.length);
        return Array.from({
            length: B
        }, (G, Z) => Q[Z])
    };
var jx0 = lazyLoader(() => {
    JxA = ["stdin", "stdout", "stderr"]
});
var ms;
var Sx0 = lazyLoader(() => {
    ms = [];
    ms.push("SIGHUP", "SIGINT", "SIGTERM");
    if (process.platform !== "win32") ms.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
    if (process.platform === "linux") ms.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT")
});
class _x0 {
    emitted = {
        afterExit: !1,
        exit: !1
    };
    listeners = {
        afterExit: [],
        exit: []
    };
    count = 0;
    id = Math.random();
    constructor() {
        if (eD1[tD1]) return eD1[tD1];
        cA4(eD1, tD1, {
            value: this,
            writable: !1,
            enumerable: !1,
            configurable: !1
        })
    }
    on(A, Q) {
        this.listeners[A].push(Q)
    }
    removeListener(A, Q) {
        let B = this.listeners[A],
            G = B.indexOf(Q);
        if (G === -1) return;
        if (G === 0 && B.length === 1) B.length = 0;
        else B.splice(G, 1)
    }
    emit(A, Q, B) {
        if (this.emitted[A]) return !1;
        this.emitted[A] = !0;
        let G = !1;
        for (let Z of this.listeners[A]) G = Z(Q, B) === !0 || G;
        if (A === "exit") G = this.emit("afterExit", Q, B) || G;
        return G
    }
}
class QH1 {}
var WxA = (A) => !!A && typeof A === "object" && typeof A.removeListener === "function" && typeof A.emit === "function" && typeof A.reallyExit === "function" && typeof A.listeners === "function" && typeof A.kill === "function" && typeof A.pid === "number" && typeof A.on === "function",
    tD1, eD1, cA4, pA4 = (A) => {
        return {
            onExit(Q, B) {
                return A.onExit(Q, B)
            },
            load() {
                return A.load()
            },
            unload() {
                return A.unload()
            }
        }
    },
    kx0, yx0, AH1, XxA, mQ7, dQ7;
var BH1 = lazyLoader(() => {
    Sx0();
    tD1 = Symbol.for("signal-exit emitter"), eD1 = globalThis, cA4 = Object.defineProperty.bind(Object);
    kx0 = class kx0 extends QH1 {
        onExit() {
            return () => {}
        }
        load() {}
        unload() {}
    };
    yx0 = class yx0 extends QH1 {
        #A = AH1.platform === "win32" ? "SIGINT" : "SIGHUP";
        #Q = new _x0;
        #B;
        #Z;
        #G;
        #J = {};
        #I = !1;
        constructor(A) {
            super();
            this.#B = A, this.#J = {};
            for (let Q of ms) this.#J[Q] = () => {
                let B = this.#B.listeners(Q),
                    {
                        count: G
                    } = this.#Q,
                    Z = A;
                if (typeof Z.__signal_exit_emitter__ === "object" && typeof Z.__signal_exit_emitter__.count === "number") G += Z.__signal_exit_emitter__.count;
                if (B.length === G) {
                    this.unload();
                    let I = this.#Q.emit("exit", null, Q),
                        Y = Q === "SIGHUP" ? this.#A : Q;
                    if (!I) A.kill(A.pid, Y)
                }
            };
            this.#G = A.reallyExit, this.#Z = A.emit
        }
        onExit(A, Q) {
            if (!WxA(this.#B)) return () => {};
            if (this.#I === !1) this.load();
            let B = Q?.alwaysLast ? "afterExit" : "exit";
            return this.#Q.on(B, A), () => {
                if (this.#Q.removeListener(B, A), this.#Q.listeners.exit.length === 0 && this.#Q.listeners.afterExit.length === 0) this.unload()
            }
        }
        load() {
            if (this.#I) return;
            this.#I = !0, this.#Q.count += 1;
            for (let A of ms) try {
                let Q = this.#J[A];
                if (Q) this.#B.on(A, Q)
            } catch (Q) {}
            this.#B.emit = (A, ...Q) => {
                return this.#V(A, ...Q)
            }, this.#B.reallyExit = (A) => {
                return this.#F(A)
            }
        }
        unload() {
            if (!this.#I) return;
            this.#I = !1, ms.forEach((A) => {
                let Q = this.#J[A];
                if (!Q) throw Error("Listener not defined for signal: " + A);
                try {
                    this.#B.removeListener(A, Q)
                } catch (B) {}
            }), this.#B.emit = this.#Z, this.#B.reallyExit = this.#G, this.#Q.count -= 1
        }
        #F(A) {
            if (!WxA(this.#B)) return 0;
            return this.#B.exitCode = A || 0, this.#Q.emit("exit", this.#B.exitCode, null), this.#G.call(this.#B, this.#B.exitCode)
        }
        #V(A, ...Q) {
            let B = this.#Z;
            if (A === "exit" && WxA(this.#B)) {
                if (typeof Q[0] === "number") this.#B.exitCode = Q[0];
                let G = B.call(this.#B, A, ...Q);
                return this.#Q.emit("exit", this.#B.exitCode, null), G
            } else return B.call(this.#B, A, ...Q)
        }
    };
    AH1 = globalThis.process, {
        onExit: XxA,
        load: mQ7,
        unload: dQ7
    } = pA4(WxA(AH1) ? new yx0(AH1) : new kx0)
});
import lA4 from "node:os";
var iA4 = 5000,
    xx0 = (A, Q = "SIGTERM", B = {}) => {
        let G = A(Q);
        return nA4(A, Q, B, G), G
    },
    nA4 = (A, Q, B, G) => {
        if (!aA4(Q, B, G)) return;
        let Z = rA4(B),
            I = setTimeout(() => {
                A("SIGKILL")
            }, Z);
        if (I.unref) I.unref()
    },
    aA4 = (A, {
        forceKillAfterTimeout: Q
    }, B) => sA4(A) && Q !== !1 && B,
    sA4 = (A) => A === lA4.constants.signals.SIGTERM || typeof A === "string" && A.toUpperCase() === "SIGTERM",
    rA4 = ({
        forceKillAfterTimeout: A = !0
    }) => {
        if (A === !0) return iA4;
        if (!Number.isFinite(A) || A < 0) throw TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`TextComponent{A}\` (TextComponent{typeof A})`);
        return A
    },
    vx0 = (A, Q) => {
        if (A.kill()) Q.isCanceled = !0
    },
    oA4 = (A, Q, B) => {
        A.kill(Q), B(Object.assign(Error("Timed out"), {
            timedOut: !0,
            signal: Q
        }))
    },
    bx0 = (A, {
        timeout: Q,
        killSignal: B = "SIGTERM"
    }, G) => {
        if (Q === 0 || Q === void 0) return G;
        let Z, I = new Promise((J, W) => {
                Z = setTimeout(() => {
                    oA4(A, B, W)
                }, Q)
            }),
            Y = G.finally(() => {
                clearTimeout(Z)
            });
        return Promise.race([I, Y])
    },
    fx0 = ({
        timeout: A
    }) => {
        if (A !== void 0 && (!Number.isFinite(A) || A < 0)) throw TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`TextComponent{A}\` (TextComponent{typeof A})`)
    },
    hx0 = async (A, {
        cleanup: Q,
        detached: B
    }, G) => {
        if (!Q || B) return G;
        let Z = XxA(() => {
            A.kill()
        });
        return G.finally(() => {
            Z()
        })
    };
var gx0 = lazyLoader(() => {
    BH1()
});

function FxA(A) {
    return A !== null && typeof A === "object" && typeof A.pipe === "function"
}

function GH1(A) {
    return FxA(A) && A.writable !== !1 && typeof A._write === "function" && typeof A._writableState === "object"
}
import {
    createWriteStream as tA4
} from "node:fs";
import {
    ChildProcess as eA4
} from "node:child_process";
var A14 = (A) => A instanceof eA4 && typeof A.then === "function",
    ZH1 = (A, Q, B) => {
        if (typeof B === "string") return A[Q].pipe(tA4(B)), A;
        if (GH1(B)) return A[Q].pipe(B), A;
        if (!A14(B)) throw TypeError("The second argument must be a string, a stream or an Execa child process.");
        if (!GH1(B.stdin)) throw TypeError("The target child process's stdin must be available.");
        return A[Q].pipe(B.stdin), B
    },
    ux0 = (A) => {
        if (A.stdout !== null) A.pipeStdout = ZH1.bind(void 0, A, "stdout");
        if (A.stderr !== null) A.pipeStderr = ZH1.bind(void 0, A, "stderr");
        if (A.all !== void 0) A.pipeAll = ZH1.bind(void 0, A, "all")
    };
var mx0 = () => {};
var GKA = async (A, {
    init: Q,
    convertChunk: B,
    getSize: G,
    truncateChunk: Z,
    addChunk: I,
    getFinalChunk: Y,
    finalize: J
}, {
    maxBuffer: W = Number.POSITIVE_INFINITY
} = {}) => {
    if (!B14(A)) throw Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
    let X = Q();
    X.length = 0;
    try {
        for await (let F of A) {
            let V = G14(F),
                K = B[V](F, X);
            px0({
                convertedChunk: K,
                state: X,
                getSize: G,
                truncateChunk: Z,
                addChunk: I,
                maxBuffer: W
            })
        }
        return Q14({
            state: X,
            convertChunk: B,
            getSize: G,
            truncateChunk: Z,
            addChunk: I,
            getFinalChunk: Y,
            maxBuffer: W
        }), J(X)
    } catch (F) {
        throw F.bufferedData = J(X), F
    }
}, Q14 = ({
    state: A,
    getSize: Q,
    truncateChunk: B,
    addChunk: G,
    getFinalChunk: Z,
    maxBuffer: I
}) => {
    let Y = Z(A);