/**
 * Claude Code Decompiled
 * Category: tools
 * File: 5/25
 * Lines: 162717 - 164215 (1499 lines)
 * Original file: cli.js
 */

                let V = oI.dirname(Y.watchPath);
                if (this.fsw._getWatchedDir(V).add(Y.watchPath), this.fsw._emit(WT.ADD, Y.watchPath, J), X = await this._handleDir(V, J, Q, G, A, Y, F), this.fsw.closed) return;
                if (F !== void 0) this.fsw._symlinkPaths.set(oI.resolve(A), F)
            } else X = this._handleFile(Y.watchPath, J, Q);
            if (I(), X) this.fsw._addPathCloser(A, X);
            return !1
        } catch (J) {
            if (this.fsw._handleError(J)) return I(), A
        }
    }
}
var d16 = "data",
    ub1 = "end",
    q7B = "close",
    XnA = () => {},
    FnA, mb1, c16, p16, l16, N7B, XI, WT, i16 = "watch",
    n16, Jt = "listeners",
    YnA = "errHandlers",
    r3A = "rawEmitters",
    a16, s16, r16 = (A) => s16.has(oI.extname(A).slice(1).toLowerCase()),
    gb1 = (A, Q) => {
        if (A instanceof Set) A.forEach(Q);
        else Q(A)
    },
    szA = (A, Q, B) => {
        let G = A[Q];
        if (!(G instanceof Set)) A[Q] = G = new Set([G]);
        G.add(B)
    },
    o16 = (A) => (Q) => {
        let B = A[Q];
        if (B instanceof Set) B.clear();
        else delete A[Q]
    },
    rzA = (A, Q, B) => {
        let G = A[Q];
        if (G instanceof Set) G.delete(B);
        else if (G === B) delete A[Q]
    },
    L7B = (A) => A instanceof Set ? A.size === 0 : !A,
    JnA, WnA = (A, Q, B, G, Z) => {
        let I = JnA.get(A);
        if (!I) return;
        gb1(I[Q], (Y) => {
            Y(B, G, Z)
        })
    },
    t16 = (A, Q, B, G) => {
        let {
            listener: Z,
            errHandler: I,
            rawEmitter: Y
        } = G, J = JnA.get(Q), W;
        if (!B.persistent) {
            if (W = $7B(A, B, Z, I, Y), !W) return;
            return W.close.bind(W)
        }
        if (J) szA(J, Jt, Z), szA(J, YnA, I), szA(J, r3A, Y);
        else {
            if (W = $7B(A, B, WnA.bind(null, Q, Jt), I, WnA.bind(null, Q, r3A)), !W) return;
            W.on(WT.ERROR, async (X) => {
                let F = WnA.bind(null, Q, YnA);
                if (J) J.watcherUnusable = !0;
                if (mb1 && X.code === "EPERM") try {
                    await (await g16(A, "r")).close(), F(X)
                } catch (V) {} else F(X)
            }), J = {
                listeners: Z,
                errHandlers: I,
                rawEmitters: Y,
                watcher: W
            }, JnA.set(Q, J)
        }
        return () => {
            if (rzA(J, Jt, Z), rzA(J, YnA, I), rzA(J, r3A, Y), L7B(J.listeners)) J.watcher.close(), JnA.delete(Q), a16.forEach(o16(J)), J.watcher = void 0, Object.freeze(J)
        }
    },
    hb1, e16 = (A, Q, B, G) => {
        let {
            listener: Z,
            rawEmitter: I
        } = G, Y = hb1.get(Q), J = Y && Y.options;
        if (J && (J.persistent < B.persistent || J.interval > B.interval)) U7B(Q), Y = void 0;
        if (Y) szA(Y, Jt, Z), szA(Y, r3A, I);
        else Y = {
            listeners: Z,
            rawEmitters: I,
            options: B,
            watcher: f16(Q, B, (W, X) => {
                gb1(Y.rawEmitters, (V) => {
                    V(WT.CHANGE, Q, {
                        curr: W,
                        prev: X
                    })
                });
                let F = W.mtimeMs;
                if (W.size !== X.size || F > X.mtimeMs || F === 0) gb1(Y.listeners, (V) => V(A, W))
            })
        }, hb1.set(Q, Y);
        return () => {
            if (rzA(Y, Jt, Z), rzA(Y, r3A, I), L7B(Y.listeners)) hb1.delete(Q), U7B(Q), Y.options = Y.watcher = void 0, Object.freeze(Y)
        }
    };
var M7B = L(() => {
    FnA = process.platform, mb1 = FnA === "win32", c16 = FnA === "darwin", p16 = FnA === "linux", l16 = FnA === "freebsd", N7B = m16() === "OS400", XI = {
        ALL: "all",
        READY: "ready",
        ADD: "add",
        CHANGE: "change",
        ADD_DIR: "addDir",
        UNLINK: "unlink",
        UNLINK_DIR: "unlinkDir",
        RAW: "raw",
        ERROR: "error"
    }, WT = XI, n16 = {
        lstat: u16,
        stat: w7B
    }, a16 = [Jt, YnA, r3A], s16 = new Set(["3dm", "3ds", "3g2", "3gp", "7z", "a", "aac", "adp", "afdesign", "afphoto", "afpub", "ai", "aif", "aiff", "alz", "ape", "apk", "appimage", "ar", "arj", "asf", "au", "avi", "bak", "baml", "bh", "bin", "bk", "bmp", "btif", "bz2", "bzip2", "cab", "caf", "cgm", "class", "cmx", "cpio", "cr2", "cur", "dat", "dcm", "deb", "dex", "djvu", "dll", "dmg", "dng", "doc", "docm", "docx", "dot", "dotm", "dra", "DS_Store", "dsk", "dts", "dtshd", "dvb", "dwg", "dxf", "ecelp4800", "ecelp7470", "ecelp9600", "egg", "eol", "eot", "epub", "exe", "f4v", "fbs", "fh", "fla", "flac", "flatpak", "fli", "flv", "fpx", "fst", "fvt", "g3", "gh", "gif", "graffle", "gz", "gzip", "h261", "h263", "h264", "icns", "ico", "ief", "img", "ipa", "iso", "jar", "jpeg", "jpg", "jpgv", "jpm", "jxr", "key", "ktx", "lha", "lib", "lvp", "lz", "lzh", "lzma", "lzo", "m3u", "m4a", "m4v", "mar", "mdi", "mht", "mid", "midi", "mj2", "mka", "mkv", "mmr", "mng", "mobi", "mov", "movie", "mp3", "mp4", "mp4a", "mpeg", "mpg", "mpga", "mxu", "nef", "npx", "numbers", "nupkg", "o", "odp", "ods", "odt", "oga", "ogg", "ogv", "otf", "ott", "pages", "pbm", "pcx", "pdb", "pdf", "pea", "pgm", "pic", "png", "pnm", "pot", "potm", "potx", "ppa", "ppam", "ppm", "pps", "ppsm", "ppsx", "ppt", "pptm", "pptx", "psd", "pya", "pyc", "pyo", "pyv", "qt", "rar", "ras", "raw", "resources", "rgb", "rip", "rlc", "rmf", "rmvb", "rpm", "rtf", "rz", "s3m", "s7z", "scpt", "sgi", "shar", "snap", "sil", "sketch", "slk", "smv", "snk", "so", "stl", "suo", "sub", "swf", "tar", "tbz", "tbz2", "tga", "tgz", "thmx", "tif", "tiff", "tlz", "ttc", "ttf", "txz", "udf", "uvh", "uvi", "uvm", "uvp", "uvs", "uvu", "viv", "vob", "war", "wav", "wax", "wbmp", "wdp", "weba", "webm", "webp", "whl", "wim", "wm", "wma", "wmv", "wmx", "woff", "woff2", "wrm", "wvx", "xbm", "xif", "xla", "xlam", "xls", "xlsb", "xlsm", "xlsx", "xlt", "xltm", "xltx", "xm", "xmind", "xpi", "xpm", "xwd", "xz", "z", "zip", "zipx"]), JnA = new Map;
    hb1 = new Map
});
import {
    stat as A06
} from "fs";
import {
    stat as Q06,
    readdir as B06
} from "fs/promises";
import {
    EventEmitter as G06
} from "events";
import * as o6 from "path";

function VnA(A) {
    return Array.isArray(A) ? A : [A]
}

function F06(A) {
    if (typeof A === "function") return A;
    if (typeof A === "string") return (Q) => A === Q;
    if (A instanceof RegExp) return (Q) => A.test(Q);
    if (typeof A === "object" && A !== null) return (Q) => {
        if (A.path === Q) return !0;
        if (A.recursive) {
            let B = o6.relative(A.path, Q);
            if (!B) return !1;
            return !B.startsWith("..") && !o6.isAbsolute(B)
        }
        return !1
    };
    return () => !1
}

function V06(A) {
    if (typeof A !== "string") throw Error("string expected");
    A = o6.normalize(A), A = A.replace(/\\/g, "/");
    let Q = !1;
    if (A.startsWith("//")) Q = !0;
    let B = /\/\//;
    while (A.match(B)) A = A.replace(B, "/");
    if (Q) A = "/" + A;
    return A
}

function R7B(A, Q, B) {
    let G = V06(Q);
    for (let Z = 0; Z < A.length; Z++) {
        let I = A[Z];
        if (I(G, B)) return !0
    }
    return !1
}

function K06(A, Q) {
    if (A == null) throw TypeError("anymatch: specify first argument");
    let G = VnA(A).map((Z) => F06(Z));
    if (Q == null) return (Z, I) => {
        return R7B(G, Z, I)
    };
    return R7B(G, Q)
}
class k7B {
    constructor(A, Q) {
        this.path = A, this._removeWatcher = Q, this.items = new Set
    }
    add(A) {
        let {
            items: Q
        } = this;
        if (!Q) return;
        if (A !== S7B && A !== I06) Q.add(A)
    }
    async remove(A) {
        let {
            items: Q
        } = this;
        if (!Q) return;
        if (Q.delete(A), Q.size > 0) return;
        let B = this.path;
        try {
            await B06(B)
        } catch (G) {
            if (this._removeWatcher) this._removeWatcher(o6.dirname(B), o6.basename(B))
        }
    }
    has(A) {
        let {
            items: Q
        } = this;
        if (!Q) return;
        return Q.has(A)
    }
    getChildren() {
        let {
            items: A
        } = this;
        if (!A) return [];
        return [...A.values()]
    }
    dispose() {
        this.items.clear(), this.path = "", this._removeWatcher = XnA, this.items = H06, Object.freeze(this)
    }
}
class y7B {
    constructor(A, Q, B) {
        this.fsw = B;
        let G = A;
        this.path = A = A.replace(X06, ""), this.watchPath = G, this.fullWatchPath = o6.resolve(G), this.dirParts = [], this.dirParts.forEach((Z) => {
            if (Z.length > 1) Z.pop()
        }), this.followSymlinks = Q, this.statMethod = Q ? C06 : E06
    }
    entryPath(A) {
        return o6.join(this.watchPath, o6.relative(this.watchPath, A.fullPath))
    }
    filterPath(A) {
        let {
            stats: Q
        } = A;
        if (Q && Q.isSymbolicLink()) return this.filterDir(A);
        let B = this.entryPath(A);
        return this.fsw._isntIgnored(B, Q) && this.fsw._hasReadPermissions(Q)
    }
    filterDir(A) {
        return this.fsw._isntIgnored(this.entryPath(A), A.stats)
    }
}

function z06(A, Q = {}) {
    let B = new lb1(Q);
    return B.add(A), B
}
var cb1 = "/",
    Z06 = "//",
    S7B = ".",
    I06 = "..",
    Y06 = "string",
    J06, O7B, W06, X06, pb1 = (A) => typeof A === "object" && A !== null && !(A instanceof RegExp),
    T7B = (A) => {
        let Q = VnA(A).flat();
        if (!Q.every((B) => typeof B === Y06)) throw TypeError(`Non-string provided as watch path: ${Q}`);
        return Q.map(_7B)
    },
    P7B = (A) => {
        let Q = A.replace(J06, cb1),
            B = !1;
        if (Q.startsWith(Z06)) B = !0;
        while (Q.match(O7B)) Q = Q.replace(O7B, cb1);
        if (B) Q = cb1 + Q;
        return Q
    },
    _7B = (A) => P7B(o6.normalize(P7B(A))),
    j7B = (A = "") => (Q) => {
        if (typeof Q === "string") return _7B(o6.isAbsolute(Q) ? Q : o6.join(A, Q));
        else return Q
    },
    D06 = (A, Q) => {
        if (o6.isAbsolute(A)) return A;
        return o6.join(Q, A)
    },
    H06, C06 = "stat",
    E06 = "lstat",
    lb1, x7B;
var v7B = L(() => {
    z7B();
    M7B(); /*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */
    J06 = /\\/g, O7B = /\/\//, W06 = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/, X06 = /^\.[/\\]/;
    H06 = Object.freeze(new Set);
    lb1 = class lb1 extends G06 {
        constructor(A = {}) {
            super();
            this.closed = !1, this._closers = new Map, this._ignoredPaths = new Set, this._throttled = new Map, this._streams = new Set, this._symlinkPaths = new Map, this._watched = new Map, this._pendingWrites = new Map, this._pendingUnlinks = new Map, this._readyCount = 0, this._readyEmitted = !1;
            let Q = A.awaitWriteFinish,
                B = {
                    stabilityThreshold: 2000,
                    pollInterval: 100
                },
                G = {
                    persistent: !0,
                    ignoreInitial: !1,
                    ignorePermissionErrors: !1,
                    interval: 100,
                    binaryInterval: 300,
                    followSymlinks: !0,
                    usePolling: !1,
                    atomic: !0,
                    ...A,
                    ignored: A.ignored ? VnA(A.ignored) : VnA([]),
                    awaitWriteFinish: Q === !0 ? B : typeof Q === "object" ? {
                        ...B,
                        ...Q
                    } : !1
                };
            if (N7B) G.usePolling = !0;
            if (G.atomic === void 0) G.atomic = !G.usePolling;
            let Z = process.env.CHOKIDAR_USEPOLLING;
            if (Z !== void 0) {
                let J = Z.toLowerCase();
                if (J === "false" || J === "0") G.usePolling = !1;
                else if (J === "true" || J === "1") G.usePolling = !0;
                else G.usePolling = !!J
            }
            let I = process.env.CHOKIDAR_INTERVAL;
            if (I) G.interval = Number.parseInt(I, 10);
            let Y = 0;
            this._emitReady = () => {
                if (Y++, Y >= this._readyCount) this._emitReady = XnA, this._readyEmitted = !0, process.nextTick(() => this.emit(XI.READY))
            }, this._emitRaw = (...J) => this.emit(XI.RAW, ...J), this._boundRemove = this._remove.bind(this), this.options = G, this._nodeFsHandler = new db1(this), Object.freeze(G)
        }
        _addIgnoredPath(A) {
            if (pb1(A)) {
                for (let Q of this._ignoredPaths)
                    if (pb1(Q) && Q.path === A.path && Q.recursive === A.recursive) return
            }
            this._ignoredPaths.add(A)
        }
        _removeIgnoredPath(A) {
            if (this._ignoredPaths.delete(A), typeof A === "string") {
                for (let Q of this._ignoredPaths)
                    if (pb1(Q) && Q.path === A) this._ignoredPaths.delete(Q)
            }
        }
        add(A, Q, B) {
            let {
                cwd: G
            } = this.options;
            this.closed = !1, this._closePromise = void 0;
            let Z = T7B(A);
            if (G) Z = Z.map((I) => {
                return D06(I, G)
            });
            if (Z.forEach((I) => {
                    this._removeIgnoredPath(I)
                }), this._userIgnored = void 0, !this._readyCount) this._readyCount = 0;
            return this._readyCount += Z.length, Promise.all(Z.map(async (I) => {
                let Y = await this._nodeFsHandler._addToNodeFs(I, !B, void 0, 0, Q);
                if (Y) this._emitReady();
                return Y
            })).then((I) => {
                if (this.closed) return;
                I.forEach((Y) => {
                    if (Y) this.add(o6.dirname(Y), o6.basename(Q || Y))
                })
            }), this
        }
        unwatch(A) {
            if (this.closed) return this;
            let Q = T7B(A),
                {
                    cwd: B
                } = this.options;
            return Q.forEach((G) => {
                if (!o6.isAbsolute(G) && !this._closers.has(G)) {
                    if (B) G = o6.join(B, G);
                    G = o6.resolve(G)
                }
                if (this._closePath(G), this._addIgnoredPath(G), this._watched.has(G)) this._addIgnoredPath({
                    path: G,
                    recursive: !0
                });
                this._userIgnored = void 0
            }), this
        }
        close() {
            if (this._closePromise) return this._closePromise;
            this.closed = !0, this.removeAllListeners();
            let A = [];
            return this._closers.forEach((Q) => Q.forEach((B) => {
                let G = B();
                if (G instanceof Promise) A.push(G)
            })), this._streams.forEach((Q) => Q.destroy()), this._userIgnored = void 0, this._readyCount = 0, this._readyEmitted = !1, this._watched.forEach((Q) => Q.dispose()), this._closers.clear(), this._watched.clear(), this._streams.clear(), this._symlinkPaths.clear(), this._throttled.clear(), this._closePromise = A.length ? Promise.all(A).then(() => {
                return
            }) : Promise.resolve(), this._closePromise
        }
        getWatched() {
            let A = {};
            return this._watched.forEach((Q, B) => {
                let Z = (this.options.cwd ? o6.relative(this.options.cwd, B) : B) || S7B;
                A[Z] = Q.getChildren().sort()
            }), A
        }
        emitWithAll(A, Q) {
            if (this.emit(A, ...Q), A !== XI.ERROR) this.emit(XI.ALL, A, ...Q)
        }
        async _emit(A, Q, B) {
            if (this.closed) return;
            let G = this.options;
            if (mb1) Q = o6.normalize(Q);
            if (G.cwd) Q = o6.relative(G.cwd, Q);
            let Z = [Q];
            if (B != null) Z.push(B);
            let I = G.awaitWriteFinish,
                Y;
            if (I && (Y = this._pendingWrites.get(Q))) return Y.lastChange = new Date, this;
            if (G.atomic) {
                if (A === XI.UNLINK) return this._pendingUnlinks.set(Q, [A, ...Z]), setTimeout(() => {
                    this._pendingUnlinks.forEach((J, W) => {
                        this.emit(...J), this.emit(XI.ALL, ...J), this._pendingUnlinks.delete(W)
                    })
                }, typeof G.atomic === "number" ? G.atomic : 100), this;
                if (A === XI.ADD && this._pendingUnlinks.has(Q)) A = XI.CHANGE, this._pendingUnlinks.delete(Q)
            }
            if (I && (A === XI.ADD || A === XI.CHANGE) && this._readyEmitted) {
                let J = (W, X) => {
                    if (W) A = XI.ERROR, Z[0] = W, this.emitWithAll(A, Z);
                    else if (X) {
                        if (Z.length > 1) Z[1] = X;
                        else Z.push(X);
                        this.emitWithAll(A, Z)
                    }
                };
                return this._awaitWriteFinish(Q, I.stabilityThreshold, A, J), this
            }
            if (A === XI.CHANGE) {
                if (!this._throttle(XI.CHANGE, Q, 50)) return this
            }
            if (G.alwaysStat && B === void 0 && (A === XI.ADD || A === XI.ADD_DIR || A === XI.CHANGE)) {
                let J = G.cwd ? o6.join(G.cwd, Q) : Q,
                    W;
                try {
                    W = await Q06(J)
                } catch (X) {}
                if (!W || this.closed) return;
                Z.push(W)
            }
            return this.emitWithAll(A, Z), this
        }
        _handleError(A) {
            let Q = A && A.code;
            if (A && Q !== "ENOENT" && Q !== "ENOTDIR" && (!this.options.ignorePermissionErrors || Q !== "EPERM" && Q !== "EACCES")) this.emit(XI.ERROR, A);
            return A || this.closed
        }
        _throttle(A, Q, B) {
            if (!this._throttled.has(A)) this._throttled.set(A, new Map);
            let G = this._throttled.get(A);
            if (!G) throw Error("invalid throttle");
            let Z = G.get(Q);
            if (Z) return Z.count++, !1;
            let I, Y = () => {
                let W = G.get(Q),
                    X = W ? W.count : 0;
                if (G.delete(Q), clearTimeout(I), W) clearTimeout(W.timeoutObject);
                return X
            };
            I = setTimeout(Y, B);
            let J = {
                timeoutObject: I,
                clear: Y,
                count: 0
            };
            return G.set(Q, J), J
        }
        _incrReadyCount() {
            return this._readyCount++
        }
        _awaitWriteFinish(A, Q, B, G) {
            let Z = this.options.awaitWriteFinish;
            if (typeof Z !== "object") return;
            let I = Z.pollInterval,
                Y, J = A;
            if (this.options.cwd && !o6.isAbsolute(A)) J = o6.join(this.options.cwd, A);
            let W = new Date,
                X = this._pendingWrites;

            function F(V) {
                A06(J, (K, D) => {
                    if (K || !X.has(A)) {
                        if (K && K.code !== "ENOENT") G(K);
                        return
                    }
                    let H = Number(new Date);
                    if (V && D.size !== V.size) X.get(A).lastChange = H;
                    let C = X.get(A);
                    if (H - C.lastChange >= Q) X.delete(A), G(void 0, D);
                    else Y = setTimeout(F, I, D)
                })
            }
            if (!X.has(A)) X.set(A, {
                lastChange: W,
                cancelWait: () => {
                    return X.delete(A), clearTimeout(Y), B
                }
            }), Y = setTimeout(F, I)
        }
        _isIgnored(A, Q) {
            if (this.options.atomic && W06.test(A)) return !0;
            if (!this._userIgnored) {
                let {
                    cwd: B
                } = this.options, Z = (this.options.ignored || []).map(j7B(B)), Y = [...[...this._ignoredPaths].map(j7B(B)), ...Z];
                this._userIgnored = K06(Y, void 0)
            }
            return this._userIgnored(A, Q)
        }
        _isntIgnored(A, Q) {
            return !this._isIgnored(A, Q)
        }
        _getWatchHelpers(A) {
            return new y7B(A, this.options.followSymlinks, this)
        }
        _getWatchedDir(A) {
            let Q = o6.resolve(A);
            if (!this._watched.has(Q)) this._watched.set(Q, new k7B(Q, this._boundRemove));
            return this._watched.get(Q)
        }
        _hasReadPermissions(A) {
            if (this.options.ignorePermissionErrors) return !0;
            return Boolean(Number(A.mode) & 256)
        }
        _remove(A, Q, B) {
            let G = o6.join(A, Q),
                Z = o6.resolve(G);
            if (B = B != null ? B : this._watched.has(G) || this._watched.has(Z), !this._throttle("remove", G, 100)) return;
            if (!B && this._watched.size === 1) this.add(A, Q, !0);
            this._getWatchedDir(G).getChildren().forEach((V) => this._remove(G, V));
            let J = this._getWatchedDir(A),
                W = J.has(Q);
            if (J.remove(Q), this._symlinkPaths.has(Z)) this._symlinkPaths.delete(Z);
            let X = G;
            if (this.options.cwd) X = o6.relative(this.options.cwd, G);
            if (this.options.awaitWriteFinish && this._pendingWrites.has(X)) {
                if (this._pendingWrites.get(X).cancelWait() === XI.ADD) return
            }
            this._watched.delete(G), this._watched.delete(Z);
            let F = B ? XI.UNLINK_DIR : XI.UNLINK;
            if (W && !this._isIgnored(G)) this._emit(F, G);
            this._closePath(G)
        }
        _closePath(A) {
            this._closeFile(A);
            let Q = o6.dirname(A);
            this._getWatchedDir(Q).remove(o6.basename(A))
        }
        _closeFile(A) {
            let Q = this._closers.get(A);
            if (!Q) return;
            Q.forEach((B) => B()), this._closers.delete(A)
        }
        _addPathCloser(A, Q) {
            if (!Q) return;
            let B = this._closers.get(A);
            if (!B) B = [], this._closers.set(A, B);
            B.push(Q)
        }
        _readdirp(A, Q) {
            if (this.closed) return;
            let B = {
                    type: XI.ALL,
                    alwaysStat: !0,
                    lstat: !0,
                    ...Q,
                    depth: 0
                },
                G = E7B(A, B);
            return this._streams.add(G), G.once(q7B, () => {
                G = void 0
            }), G.once(ub1, () => {
                if (G) this._streams.delete(G), G = void 0
            }), G
        }
    };
    x7B = {
        watch: z06,
        FSWatcher: lb1
    }
});
import * as f7B from "path";

function q06() {
    if (b7B || h7B) return;
    b7B = !0;
    let A = M06();
    if (A.length === 0) return;
    g(`Watching for changes in setting files ${A.join(", ")}...`), o3A = x7B.watch(A, {
        persistent: !0,
        ignoreInitial: !0,
        awaitWriteFinish: {
            stabilityThreshold: U06,
            pollInterval: $06
        },
        ignored: (Q) => Q.split(f7B.sep).some((B) => B === ".git"),
        ignorePermissionErrors: !0,
        usePolling: !1,
        atomic: !0
    }), o3A.on("change", O06), o3A.on("unlink", R06), wG(async () => g7B())
}

function g7B() {
    if (h7B = !0, o3A) o3A.close(), o3A = null;
    KnA.clear(), ozA.clear()
}

function N06(A) {
    return ozA.add(A), () => {
        ozA.delete(A)
    }
}

function L06(A) {
    let Q = pw(A);
    if (Q) KnA.set(Q, Date.now())
}

function M06() {
    let A = OA();
    return gN.map((Q) => {
        let B = pw(Q);
        if (!B) return;
        try {
            if (!A.statSync(B).isFile()) return
        } catch {
            return
        }
        return B
    }).filter((Q) => Q !== void 0)
}

function O06(A) {
    let Q = u7B(A);
    if (!Q) return;
    let B = KnA.get(A);
    if (B && Date.now() - B < w06) {
        KnA.delete(A);
        return
    }
    g(`Detected change to ${A}`), ozA.forEach((G) => G(Q))
}

function R06(A) {
    let Q = u7B(A);
    if (!Q) return;
    g(`Detected deletion of ${A}`), ozA.forEach((B) => B(Q))
}

function u7B(A) {
    return gN.find((Q) => pw(Q) === A)
}
var U06 = 1000,
    $06 = 500,
    w06 = 5000,
    o3A = null,
    b7B = !1,
    h7B = !1,
    KnA, ozA, uc;
var tzA = L(() => {
    v7B();
    D0();
    o0();
    RB();
    UF();
    XH();
    KnA = new Map, ozA = new Set;
    uc = {
        initialize: q06,
        dispose: g7B,
        subscribe: N06,
        markInternalWrite: L06
    }
});

function d7B(A, Q) {
    return `
Web page content:
---
${A}
---

${Q}

Provide a concise response based only on the content above. In your response:
 - Enforce a strict 125-character maximum for quotes from any source document. Open Source Software is ok as long as we respect the license.
 - Use quotation marks for exact language from articles; any language outside of the quotation should never be word-for-word the same.
 - You are not a lawyer and never comment on the legality of your own prompts and responses.
 - Never produce or reproduce exact song lyrics.
`
}
var vX = "WebFetch",
    m7B = `
- Fetches content from a specified URL and processes it using an AI model
- Takes a URL and a prompt as input
- Fetches the URL content, converts HTML to markdown
- Processes the content with the prompt using a small, fast model
- Returns the model's response about the content
- Use this tool when you need to retrieve and analyze web content

Usage notes:
  - IMPORTANT: If an MCP-provided web fetch tool is available, prefer using that tool instead of this one, as it may have fewer restrictions. All MCP-provided tools start with "mcp__".
  - The URL must be a fully-formed valid URL
  - HTTP URLs will be automatically upgraded to HTTPS
  - The prompt should describe what information you want to extract from the page
  - This tool is read-only and does not modify any files
  - Results may be summarized if the content is very large
  - Includes a self-cleaning 15-minute cache for faster responses when repeatedly accessing the same URL
  - When a URL redirects to a different host, the tool will inform you and provide the redirect URL in a special format. You should then make a new WebFetch request with the redirect URL to fetch the content.
`;
var R5 = "Edit";

function t3A() {
    return J6() === "firstParty"
}

function DnA(A) {
    let Q = A.startsWith(".") ? A.slice(1) : A;
    return T06.has(Q.toLowerCase())
}
async function p7B(A) {
    let Q = OA(),
        G = Q.statSync(A).size;
    if (G === 0) throw Error(`PDF file is empty: ${A}`);
    if (G > c7B) throw Error(`PDF file size (${LJ(G)}) exceeds maximum allowed size (${LJ(c7B)}). PDF files must be less than 32MB.`);
    let I = Q.readFileBytesSync(A).toString("base64");
    return {
        type: "pdf",
        file: {
            filePath: A,
            base64: I,
            originalSize: G
        }
    }
}
var T06, c7B = 33554432;
var ib1 = L(() => {
    dK();
    o0();
    M9();
    T06 = new Set(["pdf"])
});
var g5 = "Read",
    ezA = 2000,
    P06 = 2000,
    l7B = "Read a file from the local filesystem.",
    i7B;
var xV = L(() => {
    ib1();
    i7B = `Reads a file from the local filesystem. You can access any file directly by using this tool.
Assume this tool is able to read all files on the machine. If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
- The file_path parameter must be an absolute path, not a relative path
- By default, it reads up to ${ezA} lines starting from the beginning of the file
- You can optionally specify a line offset and limit (especially handy for long files), but it's recommended to read the whole file by not providing these parameters
- Any lines longer than ${P06} characters will be truncated
- Results are returned using cat -n format, with line numbers starting at 1
- This tool allows Claude Code to read images (eg PNG, JPG, etc). When reading an image file the contents are presented visually as Claude Code is a multimodal LLM.${t3A()?`
- This tool can read PDF files (.pdf). PDFs are processed page by page, extracting both text and visual content for analysis.`:""}
- This tool can read Jupyter notebooks (.ipynb files) and returns all cells with their outputs, combining code, text, and visualizations.
- This tool can only read files, not directories. To read a directory, use an ls command via the ${D9} tool.
- You can call multiple tools in a single response. It is always better to speculatively read multiple potentially useful files in parallel.
- You will regularly be asked to read screenshots. If the user provides a path to a screenshot, ALWAYS use this tool to view the file at the path. This tool will work with all temporary file paths.
- If you read a file that exists but has empty contents you will receive a system reminder warning in place of file contents.`
});
import {
    resolve as n7B
} from "path";

function AUA(A) {
    let Q = A.match(/^([^(]+)\(([^)]+)\)$/);
    if (!Q) return {
        toolName: A
    };
    let B = Q[1],
        G = Q[2];
    if (!B || !G) return {
        toolName: A
    };
    return {
        toolName: B,
        ruleContent: G
    }
}

function j06(A) {
    return A.match(/^(.+):\*$/)?.[1] ?? null
}

function nb1(A) {
    let Q = A.permissions || {},
        B = [],
        G = [];
    for (let V of Q.allow || []) {
        let K = AUA(V);
        if (K.toolName === vX && K.ruleContent?.startsWith("domain:")) B.push(K.ruleContent.substring(7))
    }
    for (let V of Q.deny || []) {
        let K = AUA(V);
        if (K.toolName === vX && K.ruleContent?.startsWith("domain:")) G.push(K.ruleContent.substring(7))
    }
    let Z = ["."],
        I = [],
        Y = [],
        J = gN.map((V) => pw(V)).filter((V) => V !== void 0);
    I.push(...J);
    let W = iBA(),
        X = pQ();
    if (W !== X) I.push(n7B(W, ".claude", "settings.json")), I.push(n7B(W, ".claude", "settings.local.json"));
    for (let V of Q.allow || []) {
        let K = AUA(V);
        if (K.toolName === R5 && K.ruleContent) Z.push(K.ruleContent)
    }
    for (let V of Q.deny || []) {
        let K = AUA(V);
        if (K.toolName === R5 && K.ruleContent) I.push(K.ruleContent);
        if (K.toolName === g5 && K.ruleContent) Y.push(K.ruleContent)
    }
    let F = A.sandbox?.ripgrep ? A.sandbox.ripgrep : (() => {
        let {
            rgPath: V,
            rgArgs: K
        } = C9A();
        return {
            command: V,
            args: K
        }
    })();
    return {
        network: {
            allowedDomains: B,
            deniedDomains: G,
            allowUnixSockets: A.sandbox?.network?.allowUnixSockets,
            allowAllUnixSockets: A.sandbox?.network?.allowAllUnixSockets,
            allowLocalBinding: A.sandbox?.network?.allowLocalBinding,
            httpProxyPort: A.sandbox?.network?.httpProxyPort,
            socksProxyPort: A.sandbox?.network?.socksProxyPort
        },
        filesystem: {
            denyRead: Y,
            allowWrite: Z,
            denyWrite: I
        },
        ignoreViolations: A.sandbox?.ignoreViolations,
        enableWeakerNestedSandbox: A.sandbox?.enableWeakerNestedSandbox,
        ripgrep: F
    }
}

function S06() {
    try {
        let A = c0();
        return a7B(A)
    } catch (A) {
        return g(`Failed to get settings for sandbox check: ${A}`), !1
    }
}

function _06() {
    let A = c0();
    return s7B(A)
}

function k06() {
    let A = c0();
    return r7B(A)
}

function HnA() {
    let A = uQ(),
        Q = A === "wsl" ? "linux" : A;
    if (!rI.isSupportedPlatform(Q)) return !1;
    if (!sb1()) return !1;
    return S06()
}

function y06() {
    if (uQ() !== "linux") return [];
    try {
        let Q = c0();
        if (!Q?.sandbox?.enabled) return [];
        let B = Q?.permissions || {},
            G = [],
            Z = (I) => {
                let Y = I.replace(/\/\*\*$/, "");
                return /[*?[\]]/.test(Y)
            };
        for (let I of [...B.allow || [], ...B.deny || []]) {
            let Y = AUA(I);
            if ((Y.toolName === R5 || Y.toolName === g5) && Y.ruleContent && Z(Y.ruleContent)) G.push(I)
        }
        return G
    } catch (Q) {
        return g(`Failed to get Linux glob pattern warnings: ${Q}`), []
    }
}

function x06() {
    let A = ["flagSettings", "policySettings"];
    for (let Q of A) {
        let B = LB(Q);
        if (B?.sandbox?.enabled !== void 0 || B?.sandbox?.autoAllowBashIfSandboxed !== void 0 || B?.sandbox?.allowUnsandboxedCommands !== void 0) return !0
    }
    return !1
}
async function v06(A) {
    let Q = LB("localSettings");
    cB("localSettings", {
        sandbox: {
            ...Q?.sandbox,
            ...A.enabled !== void 0 && {
                enabled: A.enabled
            },
            ...A.autoAllowBashIfSandboxed !== void 0 && {
                autoAllowBashIfSandboxed: A.autoAllowBashIfSandboxed
            },
            ...A.allowUnsandboxedCommands !== void 0 && {
                allowUnsandboxedCommands: A.allowUnsandboxedCommands
            }
        }
    })
}

function b06() {
    return c0()?.sandbox?.excludedCommands ?? []
}
async function f06(A, Q, B, G) {
    if (HnA())
        if (mc) await mc;
        else throw Error("Sandbox failed to initialize. ");
    return rI.wrapWithSandbox(A, Q, B, G)
}
async function h06(A) {
    if (mc) return mc;
    if (!HnA()) return;
    let Q = c0(),
        B = nb1(Q);
    return mc = (async () => {
        try {
            await rI.initialize(B, A), ab1 = uc.subscribe(() => {
                let G = c0(),
                    Z = nb1(G);
                rI.updateConfig(Z), g("Sandbox configuration updated from settings change")
            })
        } catch (G) {
            mc = void 0, g(`Failed to initialize sandbox: ${G instanceof Error?G.message:String(G)}`)
        }
    })(), mc
}

function g06() {
    if (!HnA()) return;
    let A = c0(),
        Q = nb1(A);
    rI.updateConfig(Q)
}
async function u06() {
    return ab1?.(), ab1 = void 0, a7B.cache.clear?.(), s7B.cache.clear?.(), r7B.cache.clear?.(), sb1.cache.clear?.(), mc = void 0, rI.reset()
}

function o7B(A, Q) {
    let B = LB("localSettings"),
        G = B?.sandbox?.excludedCommands || [],
        Z = A;
    if (Q) {
        let I = Q.filter((Y) => Y.type === "addRules" && Y.rules.some((J) => J.toolName === D9));
        if (I.length > 0 && I[0].type === "addRules") {
            let Y = I[0].rules.find((J) => J.toolName === D9);
            if (Y?.ruleContent) Z = j06(Y.ruleContent) || Y.ruleContent
        }
    }
    if (!G.includes(Z)) cB("localSettings", {
        sandbox: {
            ...B?.sandbox,
            excludedCommands: [...G, Z]
        }
    });
    return Z
}
var mc, ab1, sb1, a7B, s7B, r7B, lQ;
var MJ = L(() => {
    W7B();
    s5();
    RB();
    UF();
    S0();
    D0();
    tzA();
    n3A();
    xV();
    cj();
    sb1 = t1(() => {
        let {
            rgPath: A,
            rgArgs: Q
        } = C9A();
        return rI.checkDependencies({
            command: A,
            args: Q
        })
    }), a7B = t1((A) => {
        return A?.sandbox?.enabled ?? !1
    });
    s7B = t1((A) => {
        return A?.sandbox?.autoAllowBashIfSandboxed ?? !0
    });
    r7B = t1((A) => {
        return A?.sandbox?.allowUnsandboxedCommands ?? !0
    });
    lQ = {
        initialize: h06,
        isSandboxingEnabled: HnA,
        isAutoAllowBashIfSandboxedEnabled: _06,
        areUnsandboxedCommandsAllowed: k06,
        areSandboxSettingsLockedByPolicy: x06,
        setSandboxSettings: v06,
        getExcludedCommands: b06,
        wrapWithSandbox: f06,
        refreshConfig: g06,
        reset: u06,
        checkDependencies: sb1,
        getFsReadConfig: rI.getFsReadConfig,
        getFsWriteConfig: rI.getFsWriteConfig,
        getNetworkRestrictionConfig: rI.getNetworkRestrictionConfig,
        getIgnoreViolations: rI.getIgnoreViolations,
        getLinuxGlobPatternWarnings: y06,
        isSupportedPlatform: rI.isSupportedPlatform,
        getAllowUnixSockets: rI.getAllowUnixSockets,
        getAllowLocalBinding: rI.getAllowLocalBinding,
        getEnableWeakerNestedSandbox: rI.getEnableWeakerNestedSandbox,
        getProxyPort: rI.getProxyPort,
        getSocksProxyPort: rI.getSocksProxyPort,
        getLinuxHttpSocketPath: rI.getLinuxHttpSocketPath,
        getLinuxSocksSocketPath: rI.getLinuxSocksSocketPath,
        waitForNetworkInitialization: rI.waitForNetworkInitialization,
        getSandboxViolationStore: rI.getSandboxViolationStore,
        annotateStderrWithSandboxFailures: rI.annotateStderrWithSandboxFailures
    }
});

function bB(A, Q, B, G, Z) {
    if (G === "m") throw TypeError("Private method is not writable");
    if (G === "a" && !Z) throw TypeError("Private accessor was defined without a setter");
    if (typeof Q === "function" ? A !== Q || !Z : !Q.has(A)) throw TypeError("Cannot write private member to an object whose class did not declare it");
    return G === "a" ? Z.call(A, B) : Z ? Z.value = B : Q.set(A, B), B
}

function N0(A, Q, B, G) {
    if (B === "a" && !G) throw TypeError("Private accessor was defined without a getter");
    if (typeof Q === "function" ? A !== Q || !G : !Q.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
    return B === "m" ? G : B === "a" ? G.call(A) : G ? G.value : Q.get(A)
}
var fb = () => {};
var m06 = (A) => {
        let Q = 0,
            B = [];
        while (Q < A.length) {
            let G = A[Q];
            if (G === "\\") {
                Q++;
                continue
            }
            if (G === "{") {
                B.push({
                    type: "brace",
                    value: "{"
                }), Q++;
                continue
            }
            if (G === "}") {
                B.push({
                    type: "brace",
                    value: "}"
                }), Q++;
                continue
            }
            if (G === "[") {
                B.push({
                    type: "paren",
                    value: "["
                }), Q++;
                continue
            }
            if (G === "]") {
                B.push({
                    type: "paren",
                    value: "]"
                }), Q++;
                continue
            }
            if (G === ":") {
                B.push({
                    type: "separator",
                    value: ":"
                }), Q++;
                continue
            }
            if (G === ",") {
                B.push({
                    type: "delimiter",
                    value: ","
                }), Q++;
                continue
            }
            if (G === '"') {
                let J = "",
                    W = !1;
                G = A[++Q];
                while (G !== '"') {
                    if (Q === A.length) {
                        W = !0;
                        break
                    }
                    if (G === "\\") {
                        if (Q++, Q === A.length) {
                            W = !0;
                            break
                        }
                        J += G + A[Q], G = A[++Q]
                    } else J += G, G = A[++Q]
                }
                if (G = A[++Q], !W) B.push({
                    type: "string",
                    value: J
                });
                continue
            }
            if (G && /\s/.test(G)) {
                Q++;
                continue
            }
            let I = /[0-9]/;
            if (G && I.test(G) || G === "-" || G === ".") {
                let J = "";
                if (G === "-") J += G, G = A[++Q];
                while (G && I.test(G) || G === ".") J += G, G = A[++Q];
                B.push({
                    type: "number",
                    value: J
                });
                continue
            }
            let Y = /[a-z]/i;
            if (G && Y.test(G)) {
                let J = "";
                while (G && Y.test(G)) {
                    if (Q === A.length) break;
                    J += G, G = A[++Q]
                }
                if (J == "true" || J == "false" || J === "null") B.push({
                    type: "name",
                    value: J
                });
                else {
                    Q++;
                    continue
                }
                continue
            }
            Q++
        }
        return B
    },
    e3A = (A) => {
        if (A.length === 0) return A;
        let Q = A[A.length - 1];
        switch (Q.type) {
            case "separator":
                return A = A.slice(0, A.length - 1), e3A(A);
                break;
            case "number":
                let B = Q.value[Q.value.length - 1];
                if (B === "." || B === "-") return A = A.slice(0, A.length - 1), e3A(A);
            case "string":
                let G = A[A.length - 2];
                if (G?.type === "delimiter") return A = A.slice(0, A.length - 1), e3A(A);
                else if (G?.type === "brace" && G.value === "{") return A = A.slice(0, A.length - 1), e3A(A);
                break;
            case "delimiter":
                return A = A.slice(0, A.length - 1), e3A(A);
                break
        }
        return A
    },
    d06 = (A) => {
        let Q = [];
        if (A.map((B) => {
                if (B.type === "brace")
                    if (B.value === "{") Q.push("}");
                    else Q.splice(Q.lastIndexOf("}"), 1);
                if (B.type === "paren")
                    if (B.value === "[") Q.push("]");
                    else Q.splice(Q.lastIndexOf("]"), 1)
            }), Q.length > 0) Q.reverse().map((B) => {
            if (B === "}") A.push({
                type: "brace",
                value: "}"
            });
            else if (B === "]") A.push({
                type: "paren",
                value: "]"
            })
        });
        return A
    },
    c06 = (A) => {
        let Q = "";
        return A.map((B) => {
            switch (B.type) {
                case "string":
                    Q += '"' + B.value + '"';
                    break;
                default:
                    Q += B.value;
                    break
            }
        }), Q
    },
    CnA = (A) => JSON.parse(c06(d06(e3A(m06(A)))));
var rb1 = () => {};

function hb(A) {
    return typeof A === "object" && A !== null && (("name" in A) && A.name === "AbortError" || ("message" in A) && String(A.message).includes("FetchRequestCanceledException"))
}
var QUA = (A) => {
    if (A instanceof Error) return A;
    if (typeof A === "object" && A !== null) {
        try {
            if (Object.prototype.toString.call(A) === "[object Error]") {
                let Q = Error(A.message, A.cause ? {
                    cause: A.cause
                } : {});
                if (A.stack) Q.stack = A.stack;
                if (A.cause && !Q.cause) Q.cause = A.cause;
                if (A.name) Q.name = A.name;
                return Q
            }
        } catch {}
        try {
            return Error(JSON.stringify(A))
        } catch {}
    }
    return Error(A)
};
var yB, a2, gY, GE, N_, BUA, Wt, GUA, Xt, ZUA, IUA, YUA, JUA;
var ZE = L(() => {
    yB = class yB extends Error {};
    a2 = class a2 extends yB {
        constructor(A, Q, B, G) {
            super(`${a2.makeMessage(A,Q,B)}`);
            this.status = A, this.headers = G, this.requestID = G?.get("request-id"), this.error = Q
        }
        static makeMessage(A, Q, B) {
            let G = Q?.message ? typeof Q.message === "string" ? Q.message : JSON.stringify(Q.message) : Q ? JSON.stringify(Q) : B;
            if (A && G) return `${A} ${G}`;
            if (A) return `${A} status code (no body)`;
            if (G) return G;
            return "(no status code or body)"
        }
        static generate(A, Q, B, G) {
            if (!A || !G) return new GE({
                message: B,
                cause: QUA(Q)
            });
            let Z = Q;
            if (A === 400) return new BUA(A, Z, B, G);
            if (A === 401) return new Wt(A, Z, B, G);
            if (A === 403) return new GUA(A, Z, B, G);
            if (A === 404) return new Xt(A, Z, B, G);
            if (A === 409) return new ZUA(A, Z, B, G);
            if (A === 422) return new IUA(A, Z, B, G);
            if (A === 429) return new YUA(A, Z, B, G);
            if (A >= 500) return new JUA(A, Z, B, G);
            return new a2(A, Z, B, G)
        }
    };
    gY = class gY extends a2 {
        constructor({
            message: A
        } = {}) {
            super(void 0, void 0, A || "Request was aborted.", void 0)
        }
    };
    GE = class GE extends a2 {
        constructor({
            message: A,
            cause: Q
        }) {
            super(void 0, void 0, A || "Connection error.", void 0);
            if (Q) this.cause = Q
        }
    };
    N_ = class N_ extends GE {
        constructor({
            message: A
        } = {}) {
            super({
                message: A ?? "Request timed out."
            })
        }
    };
    BUA = class BUA extends a2 {};
    Wt = class Wt extends a2 {};
    GUA = class GUA extends a2 {};
    Xt = class Xt extends a2 {};
    ZUA = class ZUA extends a2 {};
    IUA = class IUA extends a2 {};
    YUA = class YUA extends a2 {};
    JUA = class JUA extends a2 {}
});
var Ft = L(() => {
    ZE()
});

function t7B() {
    if (typeof fetch < "u") return fetch;
    throw Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")
}

function ob1(...A) {
    let Q = globalThis.ReadableStream;
    if (typeof Q > "u") throw Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");
    return new Q(...A)
}

function EnA(A) {
    let Q = Symbol.asyncIterator in A ? A[Symbol.asyncIterator]() : A[Symbol.iterator]();
    return ob1({
        start() {},
        async pull(B) {
            let {
                done: G,
                value: Z
            } = await Q.next();
            if (G) B.close();
            else B.enqueue(Z)
        },
        async cancel() {
            await Q.return?.()
        }
    })
}

function WUA(A) {
    if (A[Symbol.asyncIterator]) return A;
    let Q = A.getReader();
    return {
        async next() {
            try {
                let B = await Q.read();
                if (B?.done) Q.releaseLock();
                return B
            } catch (B) {
                throw Q.releaseLock(), B
            }
        },
        async return () {
            let B = Q.cancel();
            return Q.releaseLock(), await B, {
                done: !0,
                value: void 0
            }
        },
        [Symbol.asyncIterator]() {
            return this
        }
    }
}
async function e7B(A) {
    if (A === null || typeof A !== "object") return;
    if (A[Symbol.asyncIterator]) {
        await A[Symbol.asyncIterator]().return?.();
        return
    }
    let Q = A.getReader(),
        B = Q.cancel();
    Q.releaseLock(), await B
}

function BGB(A) {
    let Q = 0;
    for (let Z of A) Q += Z.length;
    let B = new Uint8Array(Q),
        G = 0;
    for (let Z of A) B.set(Z, G), G += Z.length;
    return B
}

function XUA(A) {
    let Q;
    return (AGB ?? (Q = new globalThis.TextEncoder, AGB = Q.encode.bind(Q)))(A)
}

function tb1(A) {
    let Q;
    return (QGB ?? (Q = new globalThis.TextDecoder, QGB = Q.decode.bind(Q)))(A)
}
var AGB, QGB;
class dc {
    constructor() {
        lw.set(this, void 0), iw.set(this, void 0), bB(this, lw, new Uint8Array, "f"), bB(this, iw, null, "f")
    }
    decode(A) {
        if (A == null) return [];
        let Q = A instanceof ArrayBuffer ? new Uint8Array(A) : typeof A === "string" ? XUA(A) : A;
        bB(this, lw, BGB([N0(this, lw, "f"), Q]), "f");
        let B = [],
            G;
        while ((G = i06(N0(this, lw, "f"), N0(this, iw, "f"))) != null) {
            if (G.carriage && N0(this, iw, "f") == null) {
                bB(this, iw, G.index, "f");
                continue
            }
            if (N0(this, iw, "f") != null && (G.index !== N0(this, iw, "f") + 1 || G.carriage)) {
                B.push(tb1(N0(this, lw, "f").subarray(0, N0(this, iw, "f") - 1))), bB(this, lw, N0(this, lw, "f").subarray(N0(this, iw, "f")), "f"), bB(this, iw, null, "f");
                continue
            }
            let Z = N0(this, iw, "f") !== null ? G.preceding - 1 : G.preceding,
                I = tb1(N0(this, lw, "f").subarray(0, Z));
            B.push(I), bB(this, lw, N0(this, lw, "f").subarray(G.index), "f"), bB(this, iw, null, "f")
        }
        return B
    }
    flush() {
        if (!N0(this, lw, "f").length) return [];
        return this.decode(`
`)
    }
}

function i06(A, Q) {
    for (let Z = Q ?? 0; Z < A.length; Z++) {
        if (A[Z] === 10) return {
            preceding: Z,
            index: Z + 1,
            carriage: !1
        };
        if (A[Z] === 13) return {
            preceding: Z,
            index: Z + 1,
            carriage: !0
        }
    }
    return null
}

function GGB(A) {
    for (let G = 0; G < A.length - 1; G++) {
        if (A[G] === 10 && A[G + 1] === 10) return G + 2;
        if (A[G] === 13 && A[G + 1] === 13) return G + 2;
        if (A[G] === 13 && A[G + 1] === 10 && G + 3 < A.length && A[G + 2] === 13 && A[G + 3] === 10) return G + 4
    }
    return -1
}
var lw, iw;
var eb1 = L(() => {
    fb();
    lw = new WeakMap, iw = new WeakMap;
    dc.NEWLINE_CHARS = new Set([`
`, "\r"]);
    dc.NEWLINE_REGEXP = /\r\n|[\n\r]/g
});

function znA(A) {
    if (typeof A !== "object") return {};
    return A ?? {}
}

function IGB(A) {
    if (!A) return !0;
    for (let Q in A) return !1;
    return !0
}

function YGB(A, Q) {
    return Object.prototype.hasOwnProperty.call(A, Q)
}
var n06, ZGB = (A) => {
        return n06.test(A)
    },
    Af1 = (A) => (Af1 = Array.isArray, Af1(A)),
    Qf1, JGB = (A, Q) => {
        if (typeof Q !== "number" || !Number.isInteger(Q)) throw new yB(`${A} must be an integer`);
        if (Q < 0) throw new yB(`${A} must be a positive integer`);
        return Q
    },
    UnA = (A) => {
        try {
            return JSON.parse(A)
        } catch (Q) {
            return
        }
    };
var Vt = L(() => {
    ZE();