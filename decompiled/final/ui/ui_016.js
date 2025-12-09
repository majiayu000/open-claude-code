/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_016.js
 * 处理时间: 2025-12-09T03:41:39.093Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       ( 14x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 16/53
 * Lines: 146260 - 147758 (1499 lines)
 * Original file: cli.js
 */

                if (G.dereference) W = DzA.resolve(process.cwd(), W);
                if (HzA.isSrcSubdir(Y, W)) return Z(Error(`Cannot copy '${Y}' to a subdirectory of itself, '${W}'.`));
                if (A.isDirectory() && HzA.isSrcSubdir(W, Y)) return Z(Error(`Cannot overwrite '${W}' with '${Y}'.`));
                return Xn8(Y, B, Z)
            })
        })
    }

    function Xn8(A, Q, B) {
        JU.unlink(Q, (G) => {
            if (G) return B(G);
            return JU.symlink(A, Q, B)
        })
    }
    iBB.exports = oi8
});
var tBB = U((LR7, oBB) => {
    var yH = mK(),
        CzA = UA("path"),
        Fn8 = AT().mkdirsSync,
        Vn8 = Rx1().utimesMillisSync,
        EzA = po();

    function Kn8(A, Q, B) {
        if (typeof B === "function") B = {
            filter: B
        };
        if (B = B || {}, B.clobber = "clobber" in B ? !!B.clobber : !0, B.overwrite = "overwrite" in B ? !!B.overwrite : B.clobber, B.preserveTimestamps && process.arch === "ia32") process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`, "Warning", "fs-extra-WARN0002");
        let {
            srcStat: G,
            destStat: Z
        } = EzA.checkPathsSync(A, Q, "copy", B);
        return EzA.checkParentPathsSync(A, G, Q, "copy"), Dn8(Z, A, Q, B)
    }

    function Dn8(A, Q, B, G) {
        if (G.filter && !G.filter(Q, B)) return;
        let Z = CzA.dirname(B);
        if (!yH.existsSync(Z)) Fn8(Z);
        return aBB(A, Q, B, G)
    }

    function Hn8(A, Q, B, G) {
        if (G.filter && !G.filter(Q, B)) return;
        return aBB(A, Q, B, G)
    }

    function aBB(A, Q, B, G) {
        let I = (G.dereference ? yH.statSync : yH.lstatSync)(Q);
        if (I.isDirectory()) return qn8(I, A, Q, B, G);
        else if (I.isFile() || I.isCharacterDevice() || I.isBlockDevice()) return Cn8(I, A, Q, B, G);
        else if (I.isSymbolicLink()) return Mn8(A, Q, B, G);
        else if (I.isSocket()) throw Error(`Cannot copy a socket file: ${Q}`);
        else if (I.isFIFO()) throw Error(`Cannot copy a FIFO pipe: ${Q}`);
        throw Error(`Unknown file: ${Q}`)
    }

    function Cn8(A, Q, B, G, Z) {
        if (!Q) return sBB(A, B, G, Z);
        return En8(A, B, G, Z)
    }

    function En8(A, Q, B, G) {
        if (G.overwrite) return yH.unlinkSync(B), sBB(A, Q, B, G);
        else if (G.errorOnExist) throw Error(`'${B}' already exists`)
    }

    function sBB(A, Q, B, G) {
        if (yH.copyFileSync(Q, B), G.preserveTimestamps) zn8(A.mode, Q, B);
        return Px1(B, A.mode)
    }

    function zn8(A, Q, B) {
        if (Un8(A)) $n8(B, A);
        return wn8(Q, B)
    }

    function Un8(A) {
        return (A & 128) === 0
    }

    function $n8(A, Q) {
        return Px1(A, Q | 128)
    }

    function Px1(A, Q) {
        return yH.chmodSync(A, Q)
    }

    function wn8(A, Q) {
        let B = yH.statSync(A);
        return Vn8(Q, B.atime, B.mtime)
    }

    function qn8(A, Q, B, G, Z) {
        if (!Q) return Nn8(A.mode, B, G, Z);
        return rBB(B, G, Z)
    }

    function Nn8(A, Q, B, G) {
        return yH.mkdirSync(B), rBB(Q, B, G), Px1(B, A)
    }

    function rBB(A, Q, B) {
        yH.readdirSync(A).forEach((G) => Ln8(G, A, Q, B))
    }

    function Ln8(A, Q, B, G) {
        let Z = CzA.join(Q, A),
            I = CzA.join(B, A),
            {
                destStat: Y
            } = EzA.checkPathsSync(Z, I, "copy", G);
        return Hn8(Y, Z, I, G)
    }

    function Mn8(A, Q, B, G) {
        let Z = yH.readlinkSync(Q);
        if (G.dereference) Z = CzA.resolve(process.cwd(), Z);
        if (!A) return yH.symlinkSync(Z, B);
        else {
            let I;
            try {
                I = yH.readlinkSync(B)
            } catch (Y) {
                if (Y.code === "EINVAL" || Y.code === "UNKNOWN") return yH.symlinkSync(Z, B);
                throw Y
            }
            if (G.dereference) I = CzA.resolve(process.cwd(), I);
            if (EzA.isSrcSubdir(Z, I)) throw Error(`Cannot copy '${Z}' to a subdirectory of itself, '${I}'.`);
            if (yH.statSync(B).isDirectory() && EzA.isSrcSubdir(I, Z)) throw Error(`Cannot overwrite '${I}' with '${Z}'.`);
            return On8(Z, B)
        }
    }

    function On8(A, Q) {
        return yH.unlinkSync(Q), yH.symlinkSync(A, Q)
    }
    oBB.exports = Kn8
});
var nlA = U((MR7, eBB) => {
    var Rn8 = IU().fromCallback;
    eBB.exports = {
        copy: Rn8(nBB()),
        copySync: tBB()
    }
});
var W2B = U((OR7, J2B) => {
    var A2B = mK(),
        Z2B = UA("path"),
        eG = UA("assert"),
        zzA = process.platform === "win32";

    function I2B(A) {
        ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach((B) => {
            A[B] = A[B] || A2B[B], B = B + "Sync", A[B] = A[B] || A2B[B]
        }), A.maxBusyTries = A.maxBusyTries || 3
    }

    function jx1(A, Q, B) {
        let G = 0;
        if (typeof Q === "function") B = Q, Q = {};
        eG(A, "rimraf: missing path"), eG.strictEqual(typeof A, "string", "rimraf: path should be a string"), eG.strictEqual(typeof B, "function", "rimraf: callback function required"), eG(Q, "rimraf: invalid options argument provided"), eG.strictEqual(typeof Q, "object", "rimraf: options should be object"), I2B(Q), Q2B(A, Q, function Z(I) {
            if (I) {
                if ((I.code === "EBUSY" || I.code === "ENOTEMPTY" || I.code === "EPERM") && G < Q.maxBusyTries) {
                    G++;
                    let Y = G * 100;
                    return setTimeout(() => Q2B(A, Q, Z), Y)
                }
                if (I.code === "ENOENT") I = null
            }
            B(I)
        })
    }

    function Q2B(A, Q, B) {
        eG(A), eG(Q), eG(typeof B === "function"), Q.lstat(A, (G, Z) => {
            if (G && G.code === "ENOENT") return B(null);
            if (G && G.code === "EPERM" && zzA) return B2B(A, Q, G, B);
            if (Z && Z.isDirectory()) return alA(A, Q, G, B);
            Q.unlink(A, (I) => {
                if (I) {
                    if (I.code === "ENOENT") return B(null);
                    if (I.code === "EPERM") return zzA ? B2B(A, Q, I, B) : alA(A, Q, I, B);
                    if (I.code === "EISDIR") return alA(A, Q, I, B)
                }
                return B(I)
            })
        })
    }

    function B2B(A, Q, B, G) {
        eG(A), eG(Q), eG(typeof G === "function"), Q.chmod(A, 438, (Z) => {
            if (Z) G(Z.code === "ENOENT" ? null : B);
            else Q.stat(A, (I, Y) => {
                if (I) G(I.code === "ENOENT" ? null : B);
                else if (Y.isDirectory()) alA(A, Q, B, G);
                else Q.unlink(A, G)
            })
        })
    }

    function G2B(A, Q, B) {
        let G;
        eG(A), eG(Q);
        try {
            Q.chmodSync(A, 438)
        } catch (Z) {
            if (Z.code === "ENOENT") return;
            else throw B
        }
        try {
            G = Q.statSync(A)
        } catch (Z) {
            if (Z.code === "ENOENT") return;
            else throw B
        }
        if (G.isDirectory()) slA(A, Q, B);
        else Q.unlinkSync(A)
    }

    function alA(A, Q, B, G) {
        eG(A), eG(Q), eG(typeof G === "function"), Q.rmdir(A, (Z) => {
            if (Z && (Z.code === "ENOTEMPTY" || Z.code === "EEXIST" || Z.code === "EPERM")) Tn8(A, Q, G);
            else if (Z && Z.code === "ENOTDIR") G(B);
            else G(Z)
        })
    }

    function Tn8(A, Q, B) {
        eG(A), eG(Q), eG(typeof B === "function"), Q.readdir(A, (G, Z) => {
            if (G) return B(G);
            let I = Z.length,
                Y;
            if (I === 0) return Q.rmdir(A, B);
            Z.forEach((J) => {
                jx1(Z2B.join(A, J), Q, (W) => {
                    if (Y) return;
                    if (W) return B(Y = W);
                    if (--I === 0) Q.rmdir(A, B)
                })
            })
        })
    }

    function Y2B(A, Q) {
        let B;
        Q = Q || {}, I2B(Q), eG(A, "rimraf: missing path"), eG.strictEqual(typeof A, "string", "rimraf: path should be a string"), eG(Q, "rimraf: missing options"), eG.strictEqual(typeof Q, "object", "rimraf: options should be object");
        try {
            B = Q.lstatSync(A)
        } catch (G) {
            if (G.code === "ENOENT") return;
            if (G.code === "EPERM" && zzA) G2B(A, Q, G)
        }
        try {
            if (B && B.isDirectory()) slA(A, Q, null);
            else Q.unlinkSync(A)
        } catch (G) {
            if (G.code === "ENOENT") return;
            else if (G.code === "EPERM") return zzA ? G2B(A, Q, G) : slA(A, Q, G);
            else if (G.code !== "EISDIR") throw G;
            slA(A, Q, G)
        }
    }

    function slA(A, Q, B) {
        eG(A), eG(Q);
        try {
            Q.rmdirSync(A)
        } catch (G) {
            if (G.code === "ENOTDIR") throw B;
            else if (G.code === "ENOTEMPTY" || G.code === "EEXIST" || G.code === "EPERM") Pn8(A, Q);
            else if (G.code !== "ENOENT") throw G
        }
    }

    function Pn8(A, Q) {
        if (eG(A), eG(Q), Q.readdirSync(A).forEach((B) => Y2B(Z2B.join(A, B), Q)), zzA) {
            let B = Date.now();
            do try {
                return Q.rmdirSync(A, Q)
            } catch {}
            while (Date.now() - B < 500)
        } else return Q.rmdirSync(A, Q)
    }
    J2B.exports = jx1;
    jx1.sync = Y2B
});
var UzA = U((RR7, F2B) => {
    var rlA = mK(),
        jn8 = IU().fromCallback,
        X2B = W2B();

    function Sn8(A, Q) {
        if (rlA.rm) return rlA.rm(A, {
            recursive: !0,
            force: !0
        }, Q);
        X2B(A, Q)
    }

    function _n8(A) {
        if (rlA.rmSync) return rlA.rmSync(A, {
            recursive: !0,
            force: !0
        });
        X2B.sync(A)
    }
    F2B.exports = {
        remove: jn8(Sn8),
        removeSync: _n8
    }
});
var U2B = U((TR7, z2B) => {
    var kn8 = IU().fromPromise,
        D2B = co(),
        H2B = UA("path"),
        C2B = AT(),
        E2B = UzA(),
        V2B = kn8(async function(Q) {
            let B;
            try {
                B = await D2B.readdir(Q)
            } catch {
                return C2B.mkdirs(Q)
            }
            return Promise.all(B.map((G) => E2B.remove(H2B.join(Q, G))))
        });

    function K2B(A) {
        let Q;
        try {
            Q = D2B.readdirSync(A)
        } catch {
            return C2B.mkdirsSync(A)
        }
        Q.forEach((B) => {
            B = H2B.join(A, B), E2B.removeSync(B)
        })
    }
    z2B.exports = {
        emptyDirSync: K2B,
        emptydirSync: K2B,
        emptyDir: V2B,
        emptydir: V2B
    }
});
var N2B = U((PR7, q2B) => {
    var yn8 = IU().fromCallback,
        $2B = UA("path"),
        Uc = mK(),
        w2B = AT();

    function xn8(A, Q) {
        function B() {
            Uc.writeFile(A, "", (G) => {
                if (G) return Q(G);
                Q()
            })
        }
        Uc.stat(A, (G, Z) => {
            if (!G && Z.isFile()) return Q();
            let I = $2B.dirname(A);
            Uc.stat(I, (Y, J) => {
                if (Y) {
                    if (Y.code === "ENOENT") return w2B.mkdirs(I, (W) => {
                        if (W) return Q(W);
                        B()
                    });
                    return Q(Y)
                }
                if (J.isDirectory()) B();
                else Uc.readdir(I, (W) => {
                    if (W) return Q(W)
                })
            })
        })
    }

    function vn8(A) {
        let Q;
        try {
            Q = Uc.statSync(A)
        } catch {}
        if (Q && Q.isFile()) return;
        let B = $2B.dirname(A);
        try {
            if (!Uc.statSync(B).isDirectory()) Uc.readdirSync(B)
        } catch (G) {
            if (G && G.code === "ENOENT") w2B.mkdirsSync(B);
            else throw G
        }
        Uc.writeFileSync(A, "")
    }
    q2B.exports = {
        createFile: yn8(xn8),
        createFileSync: vn8
    }
});
var T2B = U((jR7, R2B) => {
    var bn8 = IU().fromCallback,
        L2B = UA("path"),
        $c = mK(),
        M2B = AT(),
        fn8 = zc().pathExists,
        {
            areIdentical: O2B
        } = po();

    function hn8(A, Q, B) {
        function G(Z, I) {
            $c.link(Z, I, (Y) => {
                if (Y) return B(Y);
                B(null)
            })
        }
        $c.lstat(Q, (Z, I) => {
            $c.lstat(A, (Y, J) => {
                if (Y) return Y.message = Y.message.replace("lstat", "ensureLink"), B(Y);
                if (I && O2B(J, I)) return B(null);
                let W = L2B.dirname(Q);
                fn8(W, (X, F) => {
                    if (X) return B(X);
                    if (F) return G(A, Q);
                    M2B.mkdirs(W, (V) => {
                        if (V) return B(V);
                        G(A, Q)
                    })
                })
            })
        })
    }

    function gn8(A, Q) {
        let B;
        try {
            B = $c.lstatSync(Q)
        } catch {}
        try {
            let I = $c.lstatSync(A);
            if (B && O2B(I, B)) return
        } catch (I) {
            throw I.message = I.message.replace("lstat", "ensureLink"), I
        }
        let G = L2B.dirname(Q);
        if ($c.existsSync(G)) return $c.linkSync(A, Q);
        return M2B.mkdirsSync(G), $c.linkSync(A, Q)
    }
    R2B.exports = {
        createLink: bn8(hn8),
        createLinkSync: gn8
    }
});
var j2B = U((SR7, P2B) => {
    var wc = UA("path"),
        $zA = mK(),
        un8 = zc().pathExists;

    function mn8(A, Q, B) {
        if (wc.isAbsolute(A)) return $zA.lstat(A, (G) => {
            if (G) return G.message = G.message.replace("lstat", "ensureSymlink"), B(G);
            return B(null, {
                toCwd: A,
                toDst: A
            })
        });
        else {
            let G = wc.dirname(Q),
                Z = wc.join(G, A);
            return un8(Z, (I, Y) => {
                if (I) return B(I);
                if (Y) return B(null, {
                    toCwd: Z,
                    toDst: A
                });
                else return $zA.lstat(A, (J) => {
                    if (J) return J.message = J.message.replace("lstat", "ensureSymlink"), B(J);
                    return B(null, {
                        toCwd: A,
                        toDst: wc.relative(G, A)
                    })
                })
            })
        }
    }

    function dn8(A, Q) {
        let B;
        if (wc.isAbsolute(A)) {
            if (B = $zA.existsSync(A), !B) throw Error("absolute srcpath does not exist");
            return {
                toCwd: A,
                toDst: A
            }
        } else {
            let G = wc.dirname(Q),
                Z = wc.join(G, A);
            if (B = $zA.existsSync(Z), B) return {
                toCwd: Z,
                toDst: A
            };
            else {
                if (B = $zA.existsSync(A), !B) throw Error("relative srcpath does not exist");
                return {
                    toCwd: A,
                    toDst: wc.relative(G, A)
                }
            }
        }
    }
    P2B.exports = {
        symlinkPaths: mn8,
        symlinkPathsSync: dn8
    }
});
var k2B = U((_R7, _2B) => {
    var S2B = mK();

    function cn8(A, Q, B) {
        if (B = typeof Q === "function" ? Q : B, Q = typeof Q === "function" ? !1 : Q, Q) return B(null, Q);
        S2B.lstat(A, (G, Z) => {
            if (G) return B(null, "file");
            Q = Z && Z.isDirectory() ? "dir" : "file", B(null, Q)
        })
    }

    function pn8(A, Q) {
        let B;
        if (Q) return Q;
        try {
            B = S2B.lstatSync(A)
        } catch {
            return "file"
        }
        return B && B.isDirectory() ? "dir" : "file"
    }
    _2B.exports = {
        symlinkType: cn8,
        symlinkTypeSync: pn8
    }
});
var u2B = U((kR7, g2B) => {
    var ln8 = IU().fromCallback,
        x2B = UA("path"),
        QT = co(),
        v2B = AT(),
        in8 = v2B.mkdirs,
        nn8 = v2B.mkdirsSync,
        b2B = j2B(),
        an8 = b2B.symlinkPaths,
        sn8 = b2B.symlinkPathsSync,
        f2B = k2B(),
        rn8 = f2B.symlinkType,
        on8 = f2B.symlinkTypeSync,
        tn8 = zc().pathExists,
        {
            areIdentical: h2B
        } = po();

    function en8(A, Q, B, G) {
        G = typeof B === "function" ? B : G, B = typeof B === "function" ? !1 : B, QT.lstat(Q, (Z, I) => {
            if (!Z && I.isSymbolicLink()) Promise.all([QT.stat(A), QT.stat(Q)]).then(([Y, J]) => {
                if (h2B(Y, J)) return G(null);
                y2B(A, Q, B, G)
            });
            else y2B(A, Q, B, G)
        })
    }

    function y2B(A, Q, B, G) {
        an8(A, Q, (Z, I) => {
            if (Z) return G(Z);
            A = I.toDst, rn8(I.toCwd, B, (Y, J) => {
                if (Y) return G(Y);
                let W = x2B.dirname(Q);
                tn8(W, (X, F) => {
                    if (X) return G(X);
                    if (F) return QT.symlink(A, Q, J, G);
                    in8(W, (V) => {
                        if (V) return G(V);
                        QT.symlink(A, Q, J, G)
                    })
                })
            })
        })
    }

    function Aa8(A, Q, B) {
        let G;
        try {
            G = QT.lstatSync(Q)
        } catch {}
        if (G && G.isSymbolicLink()) {
            let J = QT.statSync(A),
                W = QT.statSync(Q);
            if (h2B(J, W)) return
        }
        let Z = sn8(A, Q);
        A = Z.toDst, B = on8(Z.toCwd, B);
        let I = x2B.dirname(Q);
        if (QT.existsSync(I)) return QT.symlinkSync(A, Q, B);
        return nn8(I), QT.symlinkSync(A, Q, B)
    }
    g2B.exports = {
        createSymlink: ln8(en8),
        createSymlinkSync: Aa8
    }
});
var a2B = U((yR7, n2B) => {
    var {
        createFile: m2B,
        createFileSync: d2B
    } = N2B(), {
        createLink: c2B,
        createLinkSync: p2B
    } = T2B(), {
        createSymlink: l2B,
        createSymlinkSync: i2B
    } = u2B();
    n2B.exports = {
        createFile: m2B,
        createFileSync: d2B,
        ensureFile: m2B,
        ensureFileSync: d2B,
        createLink: c2B,
        createLinkSync: p2B,
        ensureLink: c2B,
        ensureLinkSync: p2B,
        createSymlink: l2B,
        createSymlinkSync: i2B,
        ensureSymlink: l2B,
        ensureSymlinkSync: i2B
    }
});
var olA = U((xR7, s2B) => {
    function Qa8(A, {
        EOL: Q = `
`,
        finalEOL: B = !0,
        replacer: G = null,
        spaces: Z
    } = {}) {
        let I = B ? Q : "";
        return JSON.stringify(A, G, Z).replace(/\n/g, Q) + I
    }

    function Ba8(A) {
        if (Buffer.isBuffer(A)) A = A.toString("utf8");
        return A.replace(/^\uFEFF/, "")
    }
    s2B.exports = {
        stringify: Qa8,
        stripBom: Ba8
    }
});
var e2B = U((vR7, t2B) => {
    var O3A;
    try {
        O3A = mK()
    } catch (A) {
        O3A = UA("fs")
    }
    var tlA = IU(),
        {
            stringify: r2B,
            stripBom: o2B
        } = olA();
    async function Ga8(A, Q = {}) {
        if (typeof Q === "string") Q = {
            encoding: Q
        };
        let B = Q.fs || O3A,
            G = "throws" in Q ? Q.throws : !0,
            Z = await tlA.fromCallback(B.readFile)(A, Q);
        Z = o2B(Z);
        let I;
        try {
            I = JSON.parse(Z, Q ? Q.reviver : null)
        } catch (Y) {
            if (G) throw Y.message = `${A}: ${Y.message}`, Y;
            else return null
        }
        return I
    }
    var Za8 = tlA.fromPromise(Ga8);

    function Ia8(A, Q = {}) {
        if (typeof Q === "string") Q = {
            encoding: Q
        };
        let B = Q.fs || O3A,
            G = "throws" in Q ? Q.throws : !0;
        try {
            let Z = B.readFileSync(A, Q);
            return Z = o2B(Z), JSON.parse(Z, Q.reviver)
        } catch (Z) {
            if (G) throw Z.message = `${A}: ${Z.message}`, Z;
            else return null
        }
    }
    async function Ya8(A, Q, B = {}) {
        let G = B.fs || O3A,
            Z = r2B(Q, B);
        await tlA.fromCallback(G.writeFile)(A, Z, B)
    }
    var Ja8 = tlA.fromPromise(Ya8);

    function Wa8(A, Q, B = {}) {
        let G = B.fs || O3A,
            Z = r2B(Q, B);
        return G.writeFileSync(A, Z, B)
    }
    var Xa8 = {
        readFile: Za8,
        readFileSync: Ia8,
        writeFile: Ja8,
        writeFileSync: Wa8
    };
    t2B.exports = Xa8
});
var Q9B = U((bR7, A9B) => {
    var elA = e2B();
    A9B.exports = {
        readJson: elA.readFile,
        readJsonSync: elA.readFileSync,
        writeJson: elA.writeFile,
        writeJsonSync: elA.writeFileSync
    }
});
var AiA = U((fR7, Z9B) => {
    var Fa8 = IU().fromCallback,
        wzA = mK(),
        B9B = UA("path"),
        G9B = AT(),
        Va8 = zc().pathExists;

    function Ka8(A, Q, B, G) {
        if (typeof B === "function") G = B, B = "utf8";
        let Z = B9B.dirname(A);
        Va8(Z, (I, Y) => {
            if (I) return G(I);
            if (Y) return wzA.writeFile(A, Q, B, G);
            G9B.mkdirs(Z, (J) => {
                if (J) return G(J);
                wzA.writeFile(A, Q, B, G)
            })
        })
    }

    function Da8(A, ...Q) {
        let B = B9B.dirname(A);
        if (wzA.existsSync(B)) return wzA.writeFileSync(A, ...Q);
        G9B.mkdirsSync(B), wzA.writeFileSync(A, ...Q)
    }
    Z9B.exports = {
        outputFile: Fa8(Ka8),
        outputFileSync: Da8
    }
});
var Y9B = U((hR7, I9B) => {
    var {
        stringify: Ha8
    } = olA(), {
        outputFile: Ca8
    } = AiA();
    async function Ea8(A, Q, B = {}) {
        let G = Ha8(Q, B);
        await Ca8(A, G, B)
    }
    I9B.exports = Ea8
});
var W9B = U((gR7, J9B) => {
    var {
        stringify: za8
    } = olA(), {
        outputFileSync: Ua8
    } = AiA();

    function $a8(A, Q, B) {
        let G = za8(Q, B);
        Ua8(A, G, B)
    }
    J9B.exports = $a8
});
var F9B = U((uR7, X9B) => {
    var wa8 = IU().fromPromise,
        tC = Q9B();
    tC.outputJson = wa8(Y9B());
    tC.outputJsonSync = W9B();
    tC.outputJSON = tC.outputJson;
    tC.outputJSONSync = tC.outputJsonSync;
    tC.writeJSON = tC.writeJson;
    tC.writeJSONSync = tC.writeJsonSync;
    tC.readJSON = tC.readJson;
    tC.readJSONSync = tC.readJsonSync;
    X9B.exports = tC
});
var C9B = U((mR7, H9B) => {
    var qa8 = mK(),
        _x1 = UA("path"),
        Na8 = nlA().copy,
        D9B = UzA().remove,
        La8 = AT().mkdirp,
        Ma8 = zc().pathExists,
        V9B = po();

    function Oa8(A, Q, B, G) {
        if (typeof B === "function") G = B, B = {};
        B = B || {};
        let Z = B.overwrite || B.clobber || !1;
        V9B.checkPaths(A, Q, "move", B, (I, Y) => {
            if (I) return G(I);
            let {
                srcStat: J,
                isChangingCase: W = !1
            } = Y;
            V9B.checkParentPaths(A, J, Q, "move", (X) => {
                if (X) return G(X);
                if (Ra8(Q)) return K9B(A, Q, Z, W, G);
                La8(_x1.dirname(Q), (F) => {
                    if (F) return G(F);
                    return K9B(A, Q, Z, W, G)
                })
            })
        })
    }

    function Ra8(A) {
        let Q = _x1.dirname(A);
        return _x1.parse(Q).root === Q
    }

    function K9B(A, Q, B, G, Z) {
        if (G) return Sx1(A, Q, B, Z);
        if (B) return D9B(Q, (I) => {
            if (I) return Z(I);
            return Sx1(A, Q, B, Z)
        });
        Ma8(Q, (I, Y) => {
            if (I) return Z(I);
            if (Y) return Z(Error("dest already exists."));
            return Sx1(A, Q, B, Z)
        })
    }

    function Sx1(A, Q, B, G) {
        qa8.rename(A, Q, (Z) => {
            if (!Z) return G();
            if (Z.code !== "EXDEV") return G(Z);
            return Ta8(A, Q, B, G)
        })
    }

    function Ta8(A, Q, B, G) {
        Na8(A, Q, {
            overwrite: B,
            errorOnExist: !0
        }, (I) => {
            if (I) return G(I);
            return D9B(A, G)
        })
    }
    H9B.exports = Oa8
});
var w9B = U((dR7, $9B) => {
    var z9B = mK(),
        yx1 = UA("path"),
        Pa8 = nlA().copySync,
        U9B = UzA().removeSync,
        ja8 = AT().mkdirpSync,
        E9B = po();

    function Sa8(A, Q, B) {
        B = B || {};
        let G = B.overwrite || B.clobber || !1,
            {
                srcStat: Z,
                isChangingCase: I = !1
            } = E9B.checkPathsSync(A, Q, "move", B);
        if (E9B.checkParentPathsSync(A, Z, Q, "move"), !_a8(Q)) ja8(yx1.dirname(Q));
        return ka8(A, Q, G, I)
    }

    function _a8(A) {
        let Q = yx1.dirname(A);
        return yx1.parse(Q).root === Q
    }

    function ka8(A, Q, B, G) {
        if (G) return kx1(A, Q, B);
        if (B) return U9B(Q), kx1(A, Q, B);
        if (z9B.existsSync(Q)) throw Error("dest already exists.");
        return kx1(A, Q, B)
    }

    function kx1(A, Q, B) {
        try {
            z9B.renameSync(A, Q)
        } catch (G) {
            if (G.code !== "EXDEV") throw G;
            return ya8(A, Q, B)
        }
    }

    function ya8(A, Q, B) {
        return Pa8(A, Q, {
            overwrite: B,
            errorOnExist: !0
        }), U9B(A)
    }
    $9B.exports = Sa8
});
var N9B = U((cR7, q9B) => {
    var xa8 = IU().fromCallback;
    q9B.exports = {
        move: xa8(C9B()),
        moveSync: w9B()
    }
});
var xx1 = U((pR7, L9B) => {
    L9B.exports = {
        ...co(),
        ...nlA(),
        ...U2B(),
        ...a2B(),
        ...F9B(),
        ...AT(),
        ...N9B(),
        ...AiA(),
        ...zc(),
        ...UzA()
    }
});
var vx1 = U((O9B) => {
    Object.defineProperty(O9B, "__esModule", {
        value: !0
    });
    O9B.childDepType = O9B.depTypeGreater = O9B.DepType = void 0;
    var n4;
    (function(A) {
        A[A.PROD = 0] = "PROD", A[A.DEV = 1] = "DEV", A[A.OPTIONAL = 2] = "OPTIONAL", A[A.DEV_OPTIONAL = 3] = "DEV_OPTIONAL", A[A.ROOT = 4] = "ROOT"
    })(n4 = O9B.DepType || (O9B.DepType = {}));
    var va8 = (A, Q) => {
        switch (Q) {
            case n4.DEV:
                switch (A) {
                    case n4.OPTIONAL:
                    case n4.PROD:
                    case n4.ROOT:
                        return !0;
                    case n4.DEV:
                    case n4.DEV_OPTIONAL:
                    default:
                        return !1
                }
            case n4.DEV_OPTIONAL:
                switch (A) {
                    case n4.OPTIONAL:
                    case n4.PROD:
                    case n4.ROOT:
                    case n4.DEV:
                        return !0;
                    case n4.DEV_OPTIONAL:
                    default:
                        return !1
                }
            case n4.OPTIONAL:
                switch (A) {
                    case n4.PROD:
                    case n4.ROOT:
                        return !0;
                    case n4.OPTIONAL:
                    case n4.DEV:
                    case n4.DEV_OPTIONAL:
                    default:
                        return !1
                }
            case n4.PROD:
                switch (A) {
                    case n4.ROOT:
                        return !0;
                    case n4.PROD:
                    case n4.OPTIONAL:
                    case n4.DEV:
                    case n4.DEV_OPTIONAL:
                    default:
                        return !1
                }
            case n4.ROOT:
                switch (A) {
                    case n4.ROOT:
                    case n4.PROD:
                    case n4.OPTIONAL:
                    case n4.DEV:
                    case n4.DEV_OPTIONAL:
                    default:
                        return !1
                }
            default:
                return !1
        }
    };
    O9B.depTypeGreater = va8;
    var ba8 = (A, Q) => {
        if (Q === n4.ROOT) throw Error("Something went wrong, a child dependency can't be marked as the ROOT");
        switch (A) {
            case n4.ROOT:
                return Q;
            case n4.PROD:
                if (Q === n4.OPTIONAL) return n4.OPTIONAL;
                return n4.PROD;
            case n4.OPTIONAL:
                return n4.OPTIONAL;
            case n4.DEV_OPTIONAL:
                return n4.DEV_OPTIONAL;
            case n4.DEV:
                if (Q === n4.OPTIONAL) return n4.DEV_OPTIONAL;
                return n4.DEV
        }
    };
    O9B.childDepType = ba8
});
var P9B = U((T9B) => {
    Object.defineProperty(T9B, "__esModule", {
        value: !0
    });
    T9B.NativeModuleType = void 0;
    var ha8;
    (function(A) {
        A[A.NONE = 0] = "NONE", A[A.NODE_GYP = 1] = "NODE_GYP", A[A.PREBUILD = 2] = "PREBUILD"
    })(ha8 = T9B.NativeModuleType || (T9B.NativeModuleType = {}))
});
var k9B = U((S9B) => {
    Object.defineProperty(S9B, "__esModule", {
        value: !0
    });
    S9B.Walker = void 0;
    var ga8 = Os(),
        QiA = xx1(),
        qc = UA("path"),
        nL = vx1(),
        fx1 = P9B(),
        Sb = ga8("flora-colossus");
    class j9B {
        constructor(A) {
            if (this.modules = [], this.walkHistory = new Set, this.cache = null, !A || typeof A !== "string") throw Error("modulePath must be provided as a string");
            Sb(`creating walker with rootModule=${A}`), this.rootModule = A
        }
        relativeModule(A, Q) {
            return qc.resolve(A, "node_modules", Q)
        }
        async loadPackageJSON(A) {
            let Q = qc.resolve(A, "package.json");
            if (await QiA.pathExists(Q)) {
                let B = await QiA.readJson(Q);
                if (!B.dependencies) B.dependencies = {};
                if (!B.devDependencies) B.devDependencies = {};
                if (!B.optionalDependencies) B.optionalDependencies = {};
                return B
            }
            return null
        }
        async walkDependenciesForModuleInModule(A, Q, B) {
            let G = Q,
                Z = null,
                I = null;
            while (!Z && this.relativeModule(G, A) !== I)
                if (I = this.relativeModule(G, A), await QiA.pathExists(I)) Z = I;
                else {
                    if (qc.basename(qc.dirname(G)) !== "node_modules") G = qc.dirname(G);
                    G = qc.dirname(qc.dirname(G))
                } if (!Z && B !== nL.DepType.OPTIONAL && B !== nL.DepType.DEV_OPTIONAL) throw Error(`Failed to locate module "${A}" from "${Q}"

        This normally means that either you have deleted this package already somehow (check your ignore settings if using electron-packager).  Or your module installation failed.`);
            if (Z) await this.walkDependenciesForModule(Z, B)
        }
        async detectNativeModuleType(A, Q) {
            if (Q.dependencies["prebuild-install"]) return fx1.NativeModuleType.PREBUILD;
            else if (await QiA.pathExists(qc.join(A, "binding.gyp"))) return fx1.NativeModuleType.NODE_GYP;
            return fx1.NativeModuleType.NONE
        }
        async walkDependenciesForModule(A, Q) {
            if (Sb("walk reached:", A, " Type is:", nL.DepType[Q]), this.walkHistory.has(A)) {
                Sb("already walked this route");
                let G = this.modules.find((Z) => Z.path === A);
                if ((0, nL.depTypeGreater)(Q, G.depType)) Sb(`existing module has a type of "${G.depType}", new module type would be "${Q}" therefore updating`), G.depType = Q;
                return
            }
            let B = await this.loadPackageJSON(A);
            if (!B) {
                Sb("walk hit a dead end, this module is incomplete");
                return
            }
            this.walkHistory.add(A), this.modules.push({
                depType: Q,
                nativeModuleType: await this.detectNativeModuleType(A, B),
                path: A,
                name: B.name
            });
            for (let G in B.dependencies) {
                if (G in B.optionalDependencies) {
                    Sb(`found ${G} in prod deps of ${A} but it is also marked optional`);
                    continue
                }
                await this.walkDependenciesForModuleInModule(G, A, (0, nL.childDepType)(Q, nL.DepType.PROD))
            }
            for (let G in B.optionalDependencies) await this.walkDependenciesForModuleInModule(G, A, (0, nL.childDepType)(Q, nL.DepType.OPTIONAL));
            if (Q === nL.DepType.ROOT) {
                Sb("we're still at the beginning, walking down the dev route");
                for (let G in B.devDependencies) await this.walkDependenciesForModuleInModule(G, A, (0, nL.childDepType)(Q, nL.DepType.DEV))
            }
        }
        async walkTree() {
            if (Sb("starting tree walk"), !this.cache) this.cache = new Promise(async (A, Q) => {
                this.modules = [];
                try {
                    await this.walkDependenciesForModule(this.rootModule, nL.DepType.ROOT)
                } catch (B) {
                    Q(B);
                    return
                }
                A(this.modules)
            });
            else Sb("tree walk in progress / completed already, waiting for existing walk to complete");
            return await this.cache
        }
        getRootModule() {
            return this.rootModule
        }
    }
    S9B.Walker = j9B
});
var hx1 = U((Nc) => {
    var ua8 = Nc && Nc.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        y9B = Nc && Nc.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) ua8(Q, A, B)
        };
    Object.defineProperty(Nc, "__esModule", {
        value: !0
    });
    y9B(k9B(), Nc);
    y9B(vx1(), Nc)
});
var f9B = U((v9B) => {
    Object.defineProperty(v9B, "__esModule", {
        value: !0
    });
    v9B.DestroyerOfModules = void 0;
    var BiA = xx1(),
        R3A = UA("path"),
        gx1 = hx1();
    class x9B {
        constructor({
            rootDirectory: A,
            walker: Q,
            shouldKeepModuleTest: B
        }) {
            if (A) this.walker = new gx1.Walker(A);
            else if (Q) this.walker = Q;
            else throw Error("Must either provide rootDirectory or walker argument");
            if (B) this.shouldKeepFn = B
        }
        async destroyModule(A, Q) {
            if (Q.get(A)) {
                let G = R3A.resolve(A, "node_modules");
                if (!await BiA.pathExists(G)) return;
                for (let Z of await BiA.readdir(G))
                    if (Z.startsWith("@"))
                        for (let I of await BiA.readdir(R3A.resolve(G, Z))) await this.destroyModule(R3A.resolve(G, Z, I), Q);
                    else await this.destroyModule(R3A.resolve(G, Z), Q)
            } else await BiA.remove(A)
        }
        async collectKeptModules({
            relativePaths: A = !1
        }) {
            let Q = await this.walker.walkTree(),
                B = new Map,
                G = R3A.resolve(this.walker.getRootModule());
            for (let Z of Q)
                if (this.shouldKeepModule(Z)) {
                    let I = Z.path;
                    if (A) I = I.replace(`${G}${R3A.sep}`, "");
                    B.set(I, Z)
                } return B
        }
        async destroy() {
            await this.destroyModule(this.walker.getRootModule(), await this.collectKeptModules({
                relativePaths: !1
            }))
        }
        shouldKeepModule(A) {
            let Q = A.depType === gx1.DepType.DEV || A.depType === gx1.DepType.DEV_OPTIONAL;
            return this.shouldKeepFn ? this.shouldKeepFn(A, Q) : !Q
        }
    }
    v9B.DestroyerOfModules = x9B
});
var g9B = U((Lc) => {
    var ma8 = Lc && Lc.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        h9B = Lc && Lc.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) ma8(Q, A, B)
        };
    Object.defineProperty(Lc, "__esModule", {
        value: !0
    });
    h9B(f9B(), Lc);
    h9B(hx1(), Lc)
});
var d9B = U((oR7, m9B) => {
    var da8 = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        ca8 = ["B", "kiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
        pa8 = ["b", "kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"],
        la8 = ["b", "kibit", "Mibit", "Gibit", "Tibit", "Pibit", "Eibit", "Zibit", "Yibit"],
        u9B = (A, Q, B) => {
            let G = A;
            if (typeof Q === "string" || Array.isArray(Q)) G = A.toLocaleString(Q, B);
            else if (Q === !0 || B !== void 0) G = A.toLocaleString(void 0, B);
            return G
        };
    m9B.exports = (A, Q) => {
        if (!Number.isFinite(A)) throw TypeError(`Expected a finite number, got ${typeof A}: ${A}`);
        Q = Object.assign({
            bits: !1,
            binary: !1
        }, Q);
        let B = Q.bits ? Q.binary ? la8 : pa8 : Q.binary ? ca8 : da8;
        if (Q.signed && A === 0) return ` 0 ${B[0]}`;
        let G = A < 0,
            Z = G ? "-" : Q.signed ? "+" : "";
        if (G) A = -A;
        let I;
        if (Q.minimumFractionDigits !== void 0) I = {
            minimumFractionDigits: Q.minimumFractionDigits
        };
        if (Q.maximumFractionDigits !== void 0) I = Object.assign({
            maximumFractionDigits: Q.maximumFractionDigits
        }, I);
        if (A < 1) {
            let X = u9B(A, Q.locale, I);
            return Z + X + " " + B[0]
        }
        let Y = Math.min(Math.floor(Q.binary ? Math.log(A) / Math.log(1024) : Math.log10(A) / 3), B.length - 1);
        if (A /= Math.pow(Q.binary ? 1024 : 1000, Y), !I) A = A.toPrecision(3);
        let J = u9B(Number(A), Q.locale, I),
            W = B[Y];
        return Z + J + " " + W
    }
});
var n8 = U((tR7, c9B) => {
    c9B.exports = {
        options: {
            usePureJavaScript: !1
        }
    }
});
var i9B = U((eR7, l9B) => {
    var ux1 = {};
    l9B.exports = ux1;
    var p9B = {};
    ux1.encode = function(A, Q, B) {
        if (typeof Q !== "string") throw TypeError('"alphabet" must be a string.');
        if (B !== void 0 && typeof B !== "number") throw TypeError('"maxline" must be a number.');
        var G = "";
        if (!(A instanceof Uint8Array)) G = ia8(A, Q);
        else {
            var Z = 0,
                I = Q.length,
                Y = Q.charAt(0),
                J = [0];
            for (Z = 0; Z < A.length; ++Z) {
                for (var W = 0, X = A[Z]; W < J.length; ++W) X += J[W] << 8, J[W] = X % I, X = X / I | 0;
                while (X > 0) J.push(X % I), X = X / I | 0
            }
            for (Z = 0; A[Z] === 0 && Z < A.length - 1; ++Z) G += Y;
            for (Z = J.length - 1; Z >= 0; --Z) G += Q[J[Z]]
        }
        if (B) {
            var F = new RegExp(".{1," + B + "}", "g");
            G = G.match(F).join(`\r
`)
        }
        return G
    };
    ux1.decode = function(A, Q) {
        if (typeof A !== "string") throw TypeError('"input" must be a string.');
        if (typeof Q !== "string") throw TypeError('"alphabet" must be a string.');
        var B = p9B[Q];
        if (!B) {
            B = p9B[Q] = [];
            for (var G = 0; G < Q.length; ++G) B[Q.charCodeAt(G)] = G
        }
        A = A.replace(/\s/g, "");
        var Z = Q.length,
            I = Q.charAt(0),
            Y = [0];
        for (var G = 0; G < A.length; G++) {
            var J = B[A.charCodeAt(G)];
            if (J === void 0) return;
            for (var W = 0, X = J; W < Y.length; ++W) X += Y[W] * Z, Y[W] = X & 255, X >>= 8;
            while (X > 0) Y.push(X & 255), X >>= 8
        }
        for (var F = 0; A[F] === I && F < A.length - 1; ++F) Y.push(0);
        if (typeof Buffer < "u") return Buffer.from(Y.reverse());
        return new Uint8Array(Y.reverse())
    };

    function ia8(A, Q) {
        var B = 0,
            G = Q.length,
            Z = Q.charAt(0),
            I = [0];
        for (B = 0; B < A.length(); ++B) {
            for (var Y = 0, J = A.at(B); Y < I.length; ++Y) J += I[Y] << 8, I[Y] = J % G, J = J / G | 0;
            while (J > 0) I.push(J % G), J = J / G | 0
        }
        var W = "";
        for (B = 0; A.at(B) === 0 && B < A.length() - 1; ++B) W += Z;
        for (B = I.length - 1; B >= 0; --B) W += Q[I[B]];
        return W
    }
});
var P3 = U((AT7, r9B) => {
    var n9B = n8(),
        a9B = i9B(),
        g1 = r9B.exports = n9B.util = n9B.util || {};
    (function() {
        if (typeof process < "u" && process.nextTick) {
            if (g1.nextTick = process.nextTick, typeof setImmediate === "function") g1.setImmediate = setImmediate;
            else g1.setImmediate = g1.nextTick;
            return
        }
        if (typeof setImmediate === "function") {
            g1.setImmediate = function() {
                return setImmediate.apply(void 0, arguments)
            }, g1.nextTick = function(J) {
                return setImmediate(J)
            };
            return
        }
        if (g1.setImmediate = function(J) {
                setTimeout(J, 0)
            }, typeof window < "u" && typeof window.postMessage === "function") {
            let J = function(W) {
                if (W.source === window && W.data === A) {
                    W.stopPropagation();
                    var X = Q.slice();
                    Q.length = 0, X.forEach(function(F) {
                        F()
                    })
                }
            };
            var Y = J,
                A = "forge.setImmediate",
                Q = [];
            g1.setImmediate = function(W) {
                if (Q.push(W), Q.length === 1) window.postMessage(A, "*")
            }, window.addEventListener("message", J, !0)
        }
        if (typeof MutationObserver < "u") {
            var B = Date.now(),
                G = !0,
                Z = document.createElement("div"),
                Q = [];
            new MutationObserver(function() {
                var W = Q.slice();
                Q.length = 0, W.forEach(function(X) {
                    X()
                })
            }).observe(Z, {
                attributes: !0
            });
            var I = g1.setImmediate;
            g1.setImmediate = function(W) {
                if (Date.now() - B > 15) B = Date.now(), I(W);
                else if (Q.push(W), Q.length === 1) Z.setAttribute("a", G = !G)
            }
        }
        g1.nextTick = g1.setImmediate
    })();
    g1.isNodejs = typeof process < "u" && process.versions && process.versions.node;
    g1.globalScope = function() {
        if (g1.isNodejs) return global;
        return typeof self > "u" ? window : self
    }();
    g1.isArray = Array.isArray || function(A) {
        return Object.prototype.toString.call(A) === "[object Array]"
    };
    g1.isArrayBuffer = function(A) {
        return typeof ArrayBuffer < "u" && A instanceof ArrayBuffer
    };
    g1.isArrayBufferView = function(A) {
        return A && g1.isArrayBuffer(A.buffer) && A.byteLength !== void 0
    };

    function qzA(A) {
        if (!(A === 8 || A === 16 || A === 24 || A === 32)) throw Error("Only 8, 16, 24, or 32 bits supported: " + A)
    }
    g1.ByteBuffer = mx1;

    function mx1(A) {
        if (this.data = "", this.read = 0, typeof A === "string") this.data = A;
        else if (g1.isArrayBuffer(A) || g1.isArrayBufferView(A))
            if (typeof Buffer < "u" && A instanceof Buffer) this.data = A.toString("binary");
            else {
                var Q = new Uint8Array(A);
                try {
                    this.data = String.fromCharCode.apply(null, Q)
                } catch (G) {
                    for (var B = 0; B < Q.length; ++B) this.putByte(Q[B])
                }
            }
        else if (A instanceof mx1 || typeof A === "object" && typeof A.data === "string" && typeof A.read === "number") this.data = A.data, this.read = A.read;
        this._constructedStringLength = 0
    }
    g1.ByteStringBuffer = mx1;
    var na8 = 4096;
    g1.ByteStringBuffer.prototype._optimizeConstructedString = function(A) {
        if (this._constructedStringLength += A, this._constructedStringLength > na8) this.data.substr(0, 1), this._constructedStringLength = 0
    };
    g1.ByteStringBuffer.prototype.length = function() {
        return this.data.length - this.read
    };
    g1.ByteStringBuffer.prototype.isEmpty = function() {
        return this.length() <= 0
    };
    g1.ByteStringBuffer.prototype.putByte = function(A) {
        return this.putBytes(String.fromCharCode(A))
    };
    g1.ByteStringBuffer.prototype.fillWithByte = function(A, Q) {
        A = String.fromCharCode(A);
        var B = this.data;
        while (Q > 0) {
            if (Q & 1) B += A;
            if (Q >>>= 1, Q > 0) A += A
        }
        return this.data = B, this._optimizeConstructedString(Q), this
    };
    g1.ByteStringBuffer.prototype.putBytes = function(A) {
        return this.data += A, this._optimizeConstructedString(A.length), this
    };
    g1.ByteStringBuffer.prototype.putString = function(A) {
        return this.putBytes(g1.encodeUtf8(A))
    };
    g1.ByteStringBuffer.prototype.putInt16 = function(A) {
        return this.putBytes(String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A & 255))
    };
    g1.ByteStringBuffer.prototype.putInt24 = function(A) {
        return this.putBytes(String.fromCharCode(A >> 16 & 255) + String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A & 255))
    };
    g1.ByteStringBuffer.prototype.putInt32 = function(A) {
        return this.putBytes(String.fromCharCode(A >> 24 & 255) + String.fromCharCode(A >> 16 & 255) + String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A & 255))
    };
    g1.ByteStringBuffer.prototype.putInt16Le = function(A) {
        return this.putBytes(String.fromCharCode(A & 255) + String.fromCharCode(A >> 8 & 255))
    };
    g1.ByteStringBuffer.prototype.putInt24Le = function(A) {
        return this.putBytes(String.fromCharCode(A & 255) + String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A >> 16 & 255))
    };
    g1.ByteStringBuffer.prototype.putInt32Le = function(A) {
        return this.putBytes(String.fromCharCode(A & 255) + String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A >> 16 & 255) + String.fromCharCode(A >> 24 & 255))
    };
    g1.ByteStringBuffer.prototype.putInt = function(A, Q) {
        qzA(Q);
        var B = "";
        do Q -= 8, B += String.fromCharCode(A >> Q & 255); while (Q > 0);
        return this.putBytes(B)
    };
    g1.ByteStringBuffer.prototype.putSignedInt = function(A, Q) {
        if (A < 0) A += 2 << Q - 1;