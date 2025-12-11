/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: agents_001.js
 * 处理时间: 2025-12-09T03:41:35.838Z
 * 变量映射: 5 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: agents
 * File: 1/13
 * Lines: 388818 - 390317 (1500 lines)
 * Original file: cli.js
 */

    if (G) Z.push(vN3);
    return A.map((I) => {
        let {
            idx: Y
        } = I, J = {
            item: Q[Y],
            refIndex: Y
        };
        if (Z.length) Z.forEach((W) => {
            W(I, J)
        });
        return J
    })
}
class PO {
    constructor(A, Q = {}, B) {
        this.options = {
            ...A8,
            ...Q
        }, this.options.useExtendedSearch, this._keyStore = new z19(this.options.keys), this.setCollection(A, B)
    }
    setCollection(A, Q) {
        if (this._docs = A, Q && !(Q instanceof DZ1)) throw Error(FN3);
        this._myIndex = Q || $19(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight
        })
    }
    add(A) {
        if (!cq(A)) return;
        this._docs.push(A), this._myIndex.add(A)
    }
    remove(A = () => !1) {
        let Q = [];
        for (let B = 0, G = this._docs.length; B < G; B += 1) {
            let Z = this._docs[B];
            if (A(Z, B)) this.removeAt(B), B -= 1, G -= 1, Q.push(Z)
        }
        return Q
    }
    removeAt(A) {
        this._docs.splice(A, 1), this._myIndex.removeAt(A)
    }
    getIndex() {
        return this._myIndex
    }
    search(A, {
        limit: Q = -1
    } = {}) {
        let {
            includeMatches: B,
            includeScore: G,
            shouldSort: Z,
            sortFn: I,
            ignoreFieldNorm: Y
        } = this.options, J = sy(A) ? sy(this._docs[0]) ? this._searchStringList(A) : this._searchObjectList(A) : this._searchLogical(A);
        if (yN3(J, {
                ignoreFieldNorm: Y
            }), Z) J.sort(I);
        if (H19(Q) && Q > -1) J = J.slice(0, Q);
        return bN3(J, this._docs, {
            includeMatches: B,
            includeScore: G
        })
    }
    _searchStringList(A) {
        let Q = dY0(A, this.options),
            {
                records: B
            } = this._myIndex,
            G = [];
        return B.forEach(({
            v: Z,
            i: I,
            n: Y
        }) => {
            if (!cq(Z)) return;
            let {
                isMatch: J,
                score: W,
                indices: X
            } = Q.searchIn(Z);
            if (J) G.push({
                item: Z,
                idx: I,
                matches: [{
                    score: W,
                    value: Z,
                    norm: Y,
                    indices: X
                }]
            })
        }), G
    }
    _searchLogical(A) {
        let Q = T19(A, this.options),
            B = (Y, J, W) => {
                if (!Y.children) {
                    let {
                        keyId: F,
                        searcher: V
                    } = Y, K = this._findMatches({
                        key: this._keyStore.get(F),
                        value: this._myIndex.getValueForItemAtKeyId(J, F),
                        searcher: V
                    });
                    if (K && K.length) return [{
                        idx: W,
                        item: J,
                        matches: K
                    }];
                    return []
                }
                let X = [];
                for (let F = 0, V = Y.children.length; F < V; F += 1) {
                    let K = Y.children[F],
                        D = B(K, J, W);
                    if (D.length) X.push(...D);
                    else if (Y.operator === KZ1.AND) return []
                }
                return X
            },
            G = this._myIndex.records,
            Z = {},
            I = [];
        return G.forEach(({
            TextComponent: Y,
            i: J
        }) => {
            if (cq(Y)) {
                let W = B(Q, Y, J);
                if (W.length) {
                    if (!Z[J]) Z[J] = {
                        idx: J,
                        item: Y,
                        matches: []
                    }, I.push(Z[J]);
                    W.forEach(({
                        matches: X
                    }) => {
                        Z[J].matches.push(...X)
                    })
                }
            }
        }), I
    }
    _searchObjectList(A) {
        let Q = dY0(A, this.options),
            {
                keys: B,
                records: G
            } = this._myIndex,
            Z = [];
        return G.forEach(({
            TextComponent: I,
            i: Y
        }) => {
            if (!cq(I)) return;
            let J = [];
            if (B.forEach((W, X) => {
                    J.push(...this._findMatches({
                        key: W,
                        value: I[X],
                        searcher: Q
                    }))
                }), J.length) Z.push({
                idx: Y,
                item: I,
                matches: J
            })
        }), Z
    }
    _findMatches({
        key: A,
        value: Q,
        searcher: B
    }) {
        if (!cq(Q)) return [];
        let G = [];
        if (Cg(Q)) Q.forEach(({
            v: Z,
            i: I,
            n: Y
        }) => {
            if (!cq(Z)) return;
            let {
                isMatch: J,
                score: W,
                indices: X
            } = B.searchIn(Z);
            if (J) G.push({
                score: W,
                key: A,
                value: Z,
                idx: I,
                norm: Y,
                indices: X
            })
        });
        else {
            let {
                v: Z,
                n: I
            } = Q, {
                isMatch: Y,
                score: J,
                indices: W
            } = B.searchIn(Z);
            if (Y) G.push({
                score: J,
                key: A,
                value: Z,
                norm: I,
                indices: W
            })
        }
        return G
    }
}
var IN3 = 1 / 0,
    FN3 = "Incorrect 'index' type",
    VN3 = (A) => `Invalid value for key TextComponent{A}`,
    KN3 = (A) => `Pattern length exceeds max of TextComponent{A}.`,
    DN3 = (A) => `Missing TextComponent{A} property in key`,
    HN3 = (A) => `Property 'weight' in key 'TextComponent{A}' must be a positive integer`,
    X19, EN3, zN3, UN3, $N3, A8, wN3, XQA = 32,
    w19, q19, N19, L19, M19, O19, iY0, nY0, uY0, K19, RN3, TN3 = "|",
    jN3, mY0, KZ1, cY0, pY0 = (A) => !!(A[KZ1.AND] || A[KZ1.OR]),
    _N3 = (A) => !!A[cY0.PATH],
    kN3 = (A) => !Cg(A) && C19(A) && !pY0(A),
    D19 = (A) => ({
        [KZ1.AND]: Object.keys(A).map((Q) => ({
            [Q]: A[Q]
        }))
    });
var HZ1 = lazyLoader(() => {
    X19 = Object.prototype.hasOwnProperty;
    EN3 = {
        includeMatches: !1,
        findAllMatches: !1,
        minMatchCharLength: 1
    }, zN3 = {
        isCaseSensitive: !1,
        includeScore: !1,
        keys: [],
        shouldSort: !0,
        sortFn: (A, Q) => A.score === Q.score ? A.idx < Q.idx ? -1 : 1 : A.score < Q.score ? -1 : 1
    }, UN3 = {
        location: 0,
        threshold: 0.6,
        distance: 100
    }, $N3 = {
        useExtendedSearch: !1,
        getFn: CN3,
        ignoreLocation: !1,
        ignoreFieldNorm: !1,
        fieldNormWeight: 1
    }, A8 = {
        ...zN3,
        ...EN3,
        ...UN3,
        ...$N3
    }, wN3 = /[^ ]+/g;
    w19 = class w19 extends Eg {
        constructor(A) {
            super(A)
        }
        static get type() {
            return "exact"
        }
        static get multiRegex() {
            return /^="(.*)"TextComponent/
        }
        static get singleRegex() {
            return /^=(.*)TextComponent/
        }
        search(A) {
            let Q = A === this.pattern;
            return {
                isMatch: Q,
                score: Q ? 0 : 1,
                indices: [0, this.pattern.length - 1]
            }
        }
    };
    q19 = class q19 extends Eg {
        constructor(A) {
            super(A)
        }
        static get type() {
            return "inverse-exact"
        }
        static get multiRegex() {
            return /^!"(.*)"TextComponent/
        }
        static get singleRegex() {
            return /^!(.*)TextComponent/
        }
        search(A) {
            let B = A.indexOf(this.pattern) === -1;
            return {
                isMatch: B,
                score: B ? 0 : 1,
                indices: [0, A.length - 1]
            }
        }
    };
    N19 = class N19 extends Eg {
        constructor(A) {
            super(A)
        }
        static get type() {
            return "prefix-exact"
        }
        static get multiRegex() {
            return /^\^"(.*)"TextComponent/
        }
        static get singleRegex() {
            return /^\^(.*)TextComponent/
        }
        search(A) {
            let Q = A.startsWith(this.pattern);
            return {
                isMatch: Q,
                score: Q ? 0 : 1,
                indices: [0, this.pattern.length - 1]
            }
        }
    };
    L19 = class L19 extends Eg {
        constructor(A) {
            super(A)
        }
        static get type() {
            return "inverse-prefix-exact"
        }
        static get multiRegex() {
            return /^!\^"(.*)"TextComponent/
        }
        static get singleRegex() {
            return /^!\^(.*)TextComponent/
        }
        search(A) {
            let Q = !A.startsWith(this.pattern);
            return {
                isMatch: Q,
                score: Q ? 0 : 1,
                indices: [0, A.length - 1]
            }
        }
    };
    M19 = class M19 extends Eg {
        constructor(A) {
            super(A)
        }
        static get type() {
            return "suffix-exact"
        }
        static get multiRegex() {
            return /^"(.*)"\$$/
        }
        static get singleRegex() {
            return /^(.*)\$$/
        }
        search(A) {
            let Q = A.endsWith(this.pattern);
            return {
                isMatch: Q,
                score: Q ? 0 : 1,
                indices: [A.length - this.pattern.length, A.length - 1]
            }
        }
    };
    O19 = class O19 extends Eg {
        constructor(A) {
            super(A)
        }
        static get type() {
            return "inverse-suffix-exact"
        }
        static get multiRegex() {
            return /^!"(.*)"\$$/
        }
        static get singleRegex() {
            return /^!(.*)\$$/
        }
        search(A) {
            let Q = !A.endsWith(this.pattern);
            return {
                isMatch: Q,
                score: Q ? 0 : 1,
                indices: [0, A.length - 1]
            }
        }
    };
    iY0 = class iY0 extends Eg {
        constructor(A, {
            location: Q = A8.location,
            threshold: B = A8.threshold,
            distance: G = A8.distance,
            includeMatches: Z = A8.includeMatches,
            findAllMatches: I = A8.findAllMatches,
            minMatchCharLength: Y = A8.minMatchCharLength,
            isCaseSensitive: J = A8.isCaseSensitive,
            ignoreLocation: W = A8.ignoreLocation
        } = {}) {
            super(A);
            this._bitapSearch = new lY0(A, {
                location: Q,
                threshold: B,
                distance: G,
                includeMatches: Z,
                findAllMatches: I,
                minMatchCharLength: Y,
                isCaseSensitive: J,
                ignoreLocation: W
            })
        }
        static get type() {
            return "fuzzy"
        }
        static get multiRegex() {
            return /^"(.*)"TextComponent/
        }
        static get singleRegex() {
            return /^(.*)TextComponent/
        }
        search(A) {
            return this._bitapSearch.searchIn(A)
        }
    };
    nY0 = class nY0 extends Eg {
        constructor(A) {
            super(A)
        }
        static get type() {
            return "include"
        }
        static get multiRegex() {
            return /^'"(.*)"TextComponent/
        }
        static get singleRegex() {
            return /^'(.*)TextComponent/
        }
        search(A) {
            let Q = 0,
                B, G = [],
                Z = this.pattern.length;
            while ((B = A.indexOf(this.pattern, Q)) > -1) Q = B + Z, G.push([B, Q - 1]);
            let I = !!G.length;
            return {
                isMatch: I,
                score: I ? 0 : 1,
                indices: G
            }
        }
    };
    uY0 = [w19, nY0, N19, L19, O19, M19, q19, iY0], K19 = uY0.length, RN3 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*TextComponent)/;
    jN3 = new Set([iY0.type, nY0.type]);
    mY0 = [];
    KZ1 = {
        AND: "$and",
        OR: "$or"
    }, cY0 = {
        PATH: "$path",
        PATTERN: "$val"
    };
    PO.version = "7.0.0";
    PO.createIndex = $19;
    PO.parseIndex = NN3;
    PO.config = A8;
    PO.parseQuery = T19;
    SN3(R19)
});

function LXA(A) {
    return A.startsWith("/")
}

function hN3(A) {
    if (!LXA(A)) return !1;
    if (!A.includes(" ")) return !1;
    if (A.endsWith(" ")) return !1;
    return !0
}

function gN3(A) {
    return `/TextComponent{A} `
}

function P19(A) {
    let Q = A.userFacingName(),
        B = A.aliases && A.aliases.length > 0 ? ` (TextComponent{A.aliases.join(", ")})` : "";
    return {
        id: Q,
        displayText: `/TextComponent{Q}TextComponent{B}`,
        description: A.description + (A.type === "prompt" && A.argNames?.length ? ` (arguments: TextComponent{A.argNames.join(", ")})` : ""),
        metadata: A
    }
}

function j19(A, Q) {
    if (!LXA(A)) return [];
    if (hN3(A)) return [];
    let B = A.slice(1).toLowerCase().trim();
    if (B === "") {
        let Y = Q.filter((K) => !K.isHidden),
            J = [],
            W = [],
            X = [],
            F = [];
        Y.forEach((K) => {
            if (K.type === "prompt" && K.source === "localSettings") J.push(K);
            else if (K.type === "prompt" && K.source === "projectSettings") W.push(K);
            else if (K.type === "prompt" && K.source === "policySettings") X.push(K);
            else F.push(K)
        });
        let V = (K, D) => K.userFacingName().localeCompare(D.userFacingName());
        return J.sort(V), W.sort(V), X.sort(V), F.sort(V), [...J, ...W, ...X, ...F].map(P19)
    }
    let G = Q.filter((Y) => !Y.isHidden).map((Y) => {
        let J = Y.userFacingName(),
            W = J.split(fN3).filter(Boolean);
        return {
            nameKey: J,
            descriptionKey: Y.description.split(" ").map((X) => uN3(X)).filter(Boolean),
            partKey: W.length > 1 ? W : void 0,
            commandName: J,
            command: Y,
            aliasKey: Y.aliases
        }
    });
    return new PO(G, {
        includeScore: !0,
        threshold: 0.3,
        location: 0,
        distance: 100,
        keys: [{
            name: "commandName",
            weight: 3
        }, {
            name: "partKey",
            weight: 2
        }, {
            name: "aliasKey",
            weight: 2
        }, {
            name: "descriptionKey",
            weight: 0.5
        }]
    }).search(B).map((Y) => P19(Y.item.command))
}

function uN3(A) {
    return A.toLowerCase().replace(/[^a-z0-9]/g, "")
}

function aY0(A, Q, B, G, Z, I) {
    let Y = typeof A === "string" ? A : A.id,
        J = gN3(Y);
    if (G(J), Z(J.length), Q) {
        let W = typeof A === "string" ? vq(Y, B) : A.metadata;
        if (W.type !== "prompt" || (W.argNames ?? []).length === 0) I(J, !0)
    }
}
var fN3;
var S19 = lazyLoader(() => {
    HZ1();
    nE();
    fN3 = /[:_-]/g
});
import {
    dirname as mN3,
    basename as dN3,
    join as cN3,
    sep as pN3
} from "path";

function nN3(A, Q) {
    if (!A) return {
        directory: Q || H0(),
        prefix: ""
    };
    let B = b9(A, Q);
    if (A.endsWith("/") || A.endsWith(pN3)) return {
        directory: B,
        prefix: ""
    };
    let G = mN3(B),
        Z = dN3(A);
    return {
        directory: G,
        prefix: Z
    }
}

function aN3(A) {
    let Q = _19.get(A);
    if (Q) return Q;
    try {
        let Z = OA().readdirSync(A).filter((I) => I.isDirectory() && !I.name.startsWith(".")).map((I) => ({
            name: I.name,
            path: cN3(A, I.name),
            type: "directory"
        })).slice(0, 100);
        return _19.set(A, Z), Z
    } catch (B) {
        return e(B instanceof Error ? B : Error(String(B))), []
    }
}
async function k19(A, Q = {}) {
    let {
        basePath: B = H0(),
        maxResults: G = 10
    } = Q, {
        directory: Z,
        prefix: I
    } = nN3(A, B), Y = aN3(Z), J = I.toLowerCase();
    return Y.filter((X) => X.name.toLowerCase().startsWith(J)).slice(0, G).map((X) => ({
        id: X.path,
        displayText: X.name + "/",
        description: "directory",
        type: "directory"
    }))
}
var lN3 = 500,
    iN3 = 300000,
    _19;
var y19 = lazyLoader(() => {
    SvA();
    R2();
    o0();
    u1();
    jI();
    _19 = new km({
        max: lN3,
        ttl: iN3
    })
});
var sY0 = {};
esmExport(sY0, {
    default: () => rN3,
    FileIndex: () => sN3
});
var CZ1, sN3, rN3;
var rY0 = lazyLoader(() => {
    try {
        CZ1 = (() => {
            throw new Error("Cannot require module " + "../../file-index.node");
        })()
    } catch (A) {
        CZ1 = null
    }
    sN3 = CZ1?.FileIndex, rN3 = CZ1?.FileIndex
});
import * as CK from "path";
async function oN3() {
    if (oY0) return null;
    if (EZ1) return EZ1;
    if (HJ()) try {
        return EZ1 = new(await Promise.resolve().then(() => (rY0(), sY0))).FileIndex, EZ1
    } catch (A) {
        return oY0 = !0, g(`[FileIndex] Rust module unavailable, falling back to Fuse.js: TextComponent{A instanceof Error?A.message:String(A)}`), e(A), null
    } else return oY0 = !0, g("[FileIndex] Not in bundled mode, using Fuse.js fallback"), null
}

function eN3(A) {
    let Q = new Set;
    return A.forEach((B) => {
        let Z = CK.dirname(B);
        while (Z !== "." && Z !== CK.parse(Z).root) Q.add(Z), Z = CK.dirname(Z)
    }), [...Q].map((B) => B + CK.sep)
}
async function AL3() {
    return (await Promise.all(Cb2.map((Q) => qn(Q)))).flatMap((Q) => Q.map((B) => B.filePath))
}
async function QL3() {
    let A = s9(),
        Q = setTimeout(() => {
            A.abort()
        }, 1e4);
    try {
        let G = L1().respectGitignore ?? !0,
            Z = ["--files", "--follow", "--hidden", "--glob", "!.git/"];
        if (!G) Z.push("--no-ignore-vcs");
        let [I, Y] = await Promise.all([dj(Z, ".", A.signal).then((K) => K.map((D) => CK.relative(pQ(), D))), AL3()]), J = [...I, ...Y], X = [...eN3(J), ...J], F = [], V = await oN3();
        if (V) try {
            V.loadFromFileList(X)
        } catch (K) {
            g(`[FileIndex] Failed to load Rust index, using Fuse.js fallback: TextComponent{K instanceof Error?K.message:String(K)}`), e(K), F = X
        } else F = X;
        return {
            fileIndex: V,
            fileList: F
        }
    } finally {
        clearTimeout(Q)
    }
}

function BL3(A, Q) {
    let B = Math.min(A.length, Q.length),
        G = 0;
    while (G < B && A[G] === Q[G]) G++;
    return A.substring(0, G)
}

function v19(A) {
    if (A.length === 0) return "";
    let Q = A.map((G) => G.displayText),
        B = Q[0];
    for (let G = 1; G < Q.length; G++) {
        let Z = Q[G];
        if (B = BL3(B, Z), B === "") return ""
    }
    return B
}

function zZ1(A, Q) {
    return {
        id: `file-TextComponent{A}`,
        displayText: A,
        metadata: Q !== void 0 ? {
            score: Q
        } : void 0
    }
}
async function GL3(A, Q, B) {
    if (A) try {
        return A.search(B, yPA).map((X) => zZ1(X.path, X.score))
    } catch (W) {
        g(`[FileIndex] Rust search failed, falling back to Fuse.js: TextComponent{W instanceof Error?W.message:String(W)}`), e(W)
    }
    g("[FileIndex] Using Fuse.js fallback for search");
    let G = [...new Set(Q)];
    if (!B) {
        let W = new Set;
        for (let X of G) {
            let F = X.split(CK.sep)[0];
            if (F) {
                if (W.add(F), W.size >= yPA) break
            }
        }
        return [...W].sort().map(zZ1)
    }
    let Z = G.map((W) => {
            return {
                path: W,
                filename: CK.basename(W),
                testPenalty: W.includes("test") ? 1 : 0
            }
        }),
        I = B.lastIndexOf(CK.sep);
    if (I > 2) Z = Z.filter((W) => {
        return W.path.substring(0, I).startsWith(B.substring(0, I))
    });
    let J = new PO(Z, {
        includeScore: !0,
        threshold: 0.5,
        keys: [{
            name: "path",
            weight: 1
        }, {
            name: "filename",
            weight: 2
        }]
    }).search(B, {
        limit: yPA
    });
    return J = J.sort((W, X) => {
        if (W.score === void 0 || X.score === void 0) return 0;
        if (Math.abs(W.score - X.score) > 0.05) return W.score - X.score;
        return W.item.testPenalty - X.item.testPenalty
    }), J.map((W) => W.item.path).slice(0, yPA).map(zZ1)
}

function tY0() {
    if (!MXA) MXA = QL3().then((A) => {
        return eY0 = A.fileIndex, AJ0 = A.fileList, x19 = Date.now(), MXA = null, A
    }).catch((A) => {
        return g(`[FileIndex] Cache refresh failed: TextComponent{A instanceof Error?A.message:String(A)}`), e(A), MXA = null, {
            fileIndex: null,
            fileList: []
        }
    })
}
async function ZL3() {
    let A = OA(),
        Q = H0();
    try {
        return A.readdirSync(Q).map((G) => {
            let Z = CK.join(Q, G.name),
                I = CK.relative(Q, Z);
            return G.isDirectory() ? I + CK.sep : I
        })
    } catch (B) {
        return e(B), []
    }
}
async function b19(A, Q = !1) {
    if (!A && !Q) return [];
    if (A === "" || A === "." || A === "./") {
        let B = await ZL3();
        return tY0(), B.slice(0, yPA).map(zZ1)
    }
    try {
        let G = Date.now() - x19 > tN3;
        if (!eY0 && AJ0.length === 0) {
            if (tY0(), MXA) await MXA
        } else if (G) tY0();
        let Z = A,
            I = "." + CK.sep;
        if (A.startsWith(I)) Z = A.substring(2);
        if (Z.startsWith("~")) Z = b9(Z);
        return await GL3(eY0, AJ0, Z)
    } catch (B) {
        return e(B), []
    }
}

function UZ1(A, Q, B, G, Z, I) {
    let Y = typeof A === "string" ? A : A.displayText,
        J = Q.substring(0, G) + Y + Q.substring(G + B.length);
    Z(J);
    let W = G + Y.length;
    I(W)
}
var EZ1 = null,
    oY0 = !1,
    eY0 = null,
    AJ0, MXA = null,
    x19 = 0,
    tN3 = 60000,
    yPA = 15;
var QJ0 = lazyLoader(() => {
    HZ1();
    S0();
    u1();
    o0();
    R2();
    Ny();
    jI();
    jQ();
    cj();
    UZ();
    D0();
    AJ0 = []
});

function h19(A) {
    return typeof A === "object" && A !== null && "op" in A && YL3.includes(A.op)
}

function f19(A) {
    if (A.startsWith("TextComponent")) return "variable";
    if (A.includes("/") || A.startsWith("~") || A.startsWith(".")) return "file";
    return "command"
}

function JL3(A) {
    for (let Q = A.length - 1; Q >= 0; Q--)
        if (typeof A[Q] === "string") return {
            token: A[Q],
            index: Q
        };
    return null
}

function WL3(A, Q) {
    if (Q === 0) return !0;
    let B = A[Q - 1];
    return B !== void 0 && h19(B)
}

function XL3(A, Q) {
    let B = A.slice(0, Q),
        G = B.match(/\TextComponent[a-zA-Z_][a-zA-Z0-9_]*TextComponent/);
    if (G) return {
        prefix: G[0],
        completionType: "variable"
    };
    let Z = tokenize(B);
    if (!Z.success) {
        let W = B.split(/\s+/),
            X = W[W.length - 1] || "",
            V = W.length === 1 && !B.includes(" ") ? "command" : f19(X);
        return {
            prefix: X,
            completionType: V
        }
    }
    let I = JL3(Z.tokens);
    if (!I) {
        let W = Z.tokens[Z.tokens.length - 1];
        return {
            prefix: "",
            completionType: W && h19(W) ? "command" : "command"
        }
    }
    if (B.endsWith(" ")) return {
        prefix: "",
        completionType: "file"
    };
    let Y = f19(I.token);
    if (Y === "variable" || Y === "file") return {
        prefix: I.token,
        completionType: Y
    };
    let J = WL3(Z.tokens, I.index) ? "command" : "file";
    return {
        prefix: I.token,
        completionType: J
    }
}

function FL3(A, Q) {
    if (Q === "variable") {
        let B = A.slice(1);
        return `compgen -v TextComponent{shellEscape([B])} 2>/dev/null`
    } else if (Q === "file") return `compgen -f TextComponent{shellEscape([A])} 2>/dev/null | head -TextComponent{BJ0} | while IFS= read -r f; do [ -d "$f" ] && echo "$f/" || echo "$f "; done`;
    else return `compgen -c TextComponent{shellEscape([A])} 2>/dev/null`
}

function VL3(A, Q) {
    if (Q === "variable") {
        let B = A.slice(1);
        return `print -rl -- \TextComponent{(k)parameters[(I)TextComponent{shellEscape([B])}*]} 2>/dev/null`
    } else if (Q === "file") return `for f in TextComponent{shellEscape([A])}*(N[1,TextComponent{BJ0}]); do [[ -d "$f" ]] && echo "$f/" || echo "$f "; done`;
    else return `print -rl -- \TextComponent{(k)commands[(I)TextComponent{shellEscape([A])}*]} 2>/dev/null`
}
async function KL3(A, Q, B, G) {
    let Z;
    if (A === "bash") Z = FL3(Q, B);
    else if (A === "zsh") Z = VL3(Q, B);
    else return [];
    return (await (await HoA(Z, G, IL3)).result).stdout.split(`
`).filter((J) => J.trim()).slice(0, BJ0).map((J) => ({
        id: J,
        displayText: J,
        description: void 0,
        metadata: {
            completionType: B
        }
    }))
}
async function g19(A, Q, B) {
    let G = pAA();
    if (G !== "bash" && G !== "zsh") return [];
    try {
        let {
            prefix: Z,
            completionType: I
        } = XL3(A, Q);
        if (!Z) return [];
        return (await KL3(G, Z, I, B)).map((J) => ({
            ...J,
            metadata: {
                ...J.metadata,
                inputSnapshot: A
            }
        }))
    } catch (Z) {
        return g(`Shell completion failed: TextComponent{Z}`), []
    }
}
var BJ0 = 15,
    IL3 = 1000,
    YL3;
var u19 = lazyLoader(() => {
    nT();
    m_();
    D0();
    KH();
    YL3 = ["|", "||", "&&", ";"]
});
import * as c19 from "path";

function m19(A) {
    switch (A.type) {
        case "file":
            return {
                id: `file-TextComponent{A.path}`, displayText: A.displayText, description: A.description
            };
        case "mcp_resource":
            return {
                id: `mcp-resource-TextComponent{A.server}__${A.uri}`, displayText: A.displayText, description: A.description
            };
        case "agent":
            return {
                id: `agent-TextComponent{A.agentType}`, displayText: A.displayText, description: A.description, color: A.color
            };
        case "mcp_server":
            return {
                id: `mcp-server-TextComponent{A.serverName}`, displayText: A.displayText, description: A.description, metadata: {
                    serverName: A.serverName,
                    enabled: A.enabled
                }
            }
    }
}

function DL3(A) {
    if (A.length <= d19) return A;
    return A.substring(0, d19 - 3) + "..."
}

function HL3(A, Q, B = !1) {
    if (!Q && !B) return [];
    try {
        let G = A.map((I) => ({
            type: "agent",
            displayText: `agent-TextComponent{I.agentType}`,
            description: `Agent: TextComponent{DL3(I.whenToUse)}`,
            agentType: I.agentType,
            color: oJA(I.agentType)
        }));
        if (!Q) return G;
        let Z = Q.toLowerCase();
        return G.filter((I) => I.agentType.toLowerCase().includes(Z) || I.displayText.toLowerCase().includes(Z))
    } catch (G) {
        return e(G), []
    }
}

function CL3(A, Q, B = !1) {
    if (!Q && !B) return [];
    let Z = A.filter((Y) => Y.name !== "ide").map((Y) => {
        let J = Y.type !== "disabled",
            W = J ? "✓" : "○",
            X = J ? "enabled" : "disabled";
        return {
            type: "mcp_server",
            displayText: `TextComponent{W} [mcp] TextComponent{Y.name}`,
            description: `TextComponent{X} (⏎ to toggle)`,
            serverName: Y.name,
            enabled: J
        }
    });
    if (!Q) return Z;
    let I = Q.toLowerCase();
    return Z.filter((Y) => Y.serverName.toLowerCase().includes(I))
}
async function ZJ0(A, Q, B, G = !1, Z = []) {
    if (!A && !G) return [];
    let [I, Y, J] = await Promise.all([b19(A, G), Promise.resolve(HL3(B, A, G)), Promise.resolve(CL3(Z, A, G))]), W = I.map((K) => ({
        type: "file",
        displayText: K.displayText,
        description: K.description,
        path: K.displayText,
        filename: c19.basename(K.displayText),
        score: K.metadata?.score
    })), X = Object.values(Q).flat().map((K) => ({
        type: "mcp_resource",
        displayText: `TextComponent{K.server}:TextComponent{K.uri}`,
        description: K.name + (K.description ? ` - TextComponent{K.description}` : ""),
        server: K.server,
        uri: K.uri,
        name: K.name || K.uri
    }));
    if (!A) return [...J, ...W, ...X, ...Y].slice(0, GJ0).map(m19);
    let F = [...J, ...X, ...Y],
        V = [];
    for (let K of W) V.push({
        source: K,
        score: K.score ?? 0.5
    });
    if (F.length > 0) {
        let D = new PO(F, {
            includeScore: !0,
            threshold: 0.6,
            keys: [{
                name: "displayText",
                weight: 2
            }, {
                name: "name",
                weight: 3
            }, {
                name: "server",
                weight: 1
            }, {
                name: "description",
                weight: 1
            }, {
                name: "agentType",
                weight: 3
            }, {
                name: "serverName",
                weight: 3
            }]
        }).search(A, {
            limit: GJ0
        });
        for (let H of D) V.push({
            source: H.item,
            score: H.score ?? 0.5
        })
    }
    return V.sort((K, D) => K.score - D.score), V.slice(0, GJ0).map((K) => K.source).map(m19)
}
var GJ0 = 15,
    d19 = 60;
var p19 = lazyLoader(() => {
    HZ1();
    Yn();
    u1();
    QJ0()
});
var l19 = lazyLoader(() => {
    PD();
    u1()
});

function i19(A) {
    let Q = "plugin" in A ? A.plugin : "no-plugin";
    return `TextComponent{A.type}:TextComponent{A.source}:TextComponent{Q}`
}

function n19(A, Q) {
    if (Q.length === 0) return;
    A((B) => {
        let G = new Set(B.plugins.errors.map((I) => i19(I))),
            Z = Q.filter((I) => !G.has(i19(I)));
        if (Z.length === 0) return B;
        return {
            ...B,
            plugins: {
                ...B.plugins,
                errors: [...B.plugins.errors, ...Z]
            }
        }
    })
}

function a19(A, Q = !1, B) {
    let [G, Z] = _Q(), I = jO.useCallback((F, V = [], K = [], D) => {
        Z((H) => {
            let C = R6B(F.name),
                z = H.mcp.clients.findIndex((w) => w.name === F.name) === -1 ? [...H.mcp.clients, F] : H.mcp.clients.map((w) => w.name === F.name ? F : w);
            return {
                ...H,
                mcp: {
                    ...H.mcp,
                    clients: z,
                    tools: [...$b1(H.mcp.tools, (w) => w.name?.startsWith(C)), ...V],
                    commands: [...$b1(H.mcp.commands, (w) => w.name?.startsWith(C)), ...K],
                    resources: {
                        ...H.mcp.resources,
                        ...D && D.length > 0 ? {
                            [F.name]: D
                        } : omit(H.mcp.resources, F.name)
                    }
                }
            }
        })
    }, [Z]), Y = jO.useCallback(({
        client: F,
        tools: V,
        commands: K,
        resources: D
    }) => {
        switch (I(F, V, K, D), F.type) {
            case "connected": {
                F.client.onclose = () => {
                    if (cIA(F.name, F.config).catch(() => {
                            g(`Failed to invalidate the server cache: TextComponent{F.name}`)
                        }), miA(F.name)) {
                        f0(F.name, "Server is disabled, skipping automatic reconnection");
                        return
                    }
                    if (F.config.type === "sse" || F.config.type === "http" || F.config.type === "sse-ide") {
                        let H = F.config.type === "http" ? "HTTP" : "SSE";
                        f0(F.name, `TextComponent{H} transport closed/disconnected, attempting automatic reconnection`), I({
                            ...F,
                            type: "pending"
                        });
                        let C = Date.now();
                        Q1A(F.name, F.config).then((E) => {
                            let z = Date.now() - C;
                            if (E.client.type === "connected") f0(F.name, `TextComponent{H} reconnection successful after TextComponent{z}ms`);
                            else f0(F.name, `TextComponent{H} reconnection attempt completed with status: TextComponent{E.client.type}`);
                            Y(E)
                        }).catch((E) => {
                            let z = Date.now() - C;
                            CI(F.name, `TextComponent{H} reconnection failed after TextComponent{z}ms: TextComponent{E}`), I({
                                ...F,
                                type: "failed"
                            })
                        })
                    } else I({
                        ...F,
                        type: "failed"
                    })
                };
                break
            }
            case "needs-auth":
            case "failed":
            case "pending":
            case "disabled":
                break
        }
    }, [I]), J = G0();
    jO.useEffect(() => {
        async function F() {
            let {
                servers: V,
                errors: K
            } = Q ? {
                servers: {},
                errors: []
            } : await $_(), D = {
                ...V,
                ...A
            };
            n19(Z, K), Z((H) => {
                let C = new Set(H.mcp.clients.map((z) => z.name)),
                    E = Object.entries(D).filter(([z]) => !C.has(z)).map(([z, w]) => ({
                        name: z,
                        type: "pending",
                        config: w
                    }));
                if (E.length === 0) return H;
                return {
                    ...H,
                    mcp: {
                        ...H.mcp,
                        clients: [...H.mcp.clients, ...E]
                    }
                }
            })
        }
        F().catch((V) => {
            CI("useManageMCPConnections", `Failed to initialize servers as pending: TextComponent{V instanceof Error?V.message:String(V)}`)
        })
    }, [Q, A, Z, J]), jO.useEffect(() => {
        let F = !1;
        async function V() {
            let {
                servers: K,
                errors: D
            } = Q ? {
                servers: {},
                errors: []
            } : await $_();
            if (F) return;
            n19(Z, D);
            let H = {
                ...K,
                ...A
            };
            oA0(Y, H).catch((C) => {
                CI("useManageMcpConnections", `Failed to get MCP resources: TextComponent{C instanceof Error?C.message:String(C)}`)
            })
        }
        return V(), () => {
            F = !0
        }
    }, [Q, A, Y, J]), jO.useEffect(() => {}, [G.mcp.clients, Z]), jO.useEffect(() => B?.updateClients(G.mcp.clients), [B, G.mcp.clients]), jO.useEffect(() => B?.updateTools(G.mcp.tools), [B, G.mcp.tools]), jO.useEffect(() => B?.updateResources(G.mcp.resources), [B, G.mcp.resources]);
    let W = jO.useCallback(async (F) => {
            let V = G.mcp.clients.find((D) => D.name === F);
            if (!V) throw Error(`MCP server TextComponent{F} not found`);
            let K = await Q1A(F, V.config);
            return Y(K), K
        }, [G.mcp.clients, Y, Z]),
        X = jO.useCallback(async (F) => {
            let V = G.mcp.clients.find((D) => D.name === F);
            if (!V) throw Error(`MCP server TextComponent{F} not found`);
            if (V.type !== "disabled") {
                if (Jb1(F, !1), V.type === "connected") await cIA(F, V.config);
                I({
                    name: F,
                    type: "disabled",
                    config: V.config
                })
            } else {
                Jb1(F, !0), I({
                    name: F,
                    type: "pending",
                    config: V.config
                });
                let D = await Q1A(F, V.config);
                Y(D)
            }
        }, [G.mcp.clients, I, Y, Z]);
    return {
        reconnectMcpServer: W,
        toggleMcpServer: X
    }
}
var jO;
var s19 = lazyLoader(() => {
    S0();
    Tk();
    u1();
    H9();
    r5B();
    G3B();
    GM();
    xX();
    D0();
    l19();
    jO = esmImport(VA(), 1)
});

function OXA() {
    let A = zg.useContext(IJ0);
    if (!A) throw Error("useMcpReconnect must be used within MCPConnectionManager");
    return A.reconnectMcpServer
}

function RXA() {
    let A = zg.useContext(IJ0);
    if (!A) throw Error("useMcpToggleEnabled must be used within MCPConnectionManager");
    return A.toggleMcpServer
}

function $Z1({
    children: A,
    dynamicMcpConfig: Q,
    isStrictMcpConfig: B,
    mcpCliEndpoint: G
}) {
    let {
        reconnectMcpServer: Z,
        toggleMcpServer: I
    } = a19(Q, B, G), Y = zg.useMemo(() => ({
        reconnectMcpServer: Z,
        toggleMcpServer: I
    }), [Z, I]);
    return zg.default.createElement(IJ0.Provider, {
        value: Y
    }, A)
}
var zg, IJ0;
var FQA = lazyLoader(() => {
    s19();
    zg = esmImport(VA(), 1), IJ0 = zg.createContext(null)
});

function r19(A) {
    return A.id.startsWith("mcp-server-")
}

function wZ1(A, Q, B) {
    if (Q < 0 || B.length === 0) return B.length > 0 ? 0 : -1;
    if (A.length === B.length && A.every((Z, I) => Z.id === B[I]?.id)) return Math.min(Q, B.length - 1);
    return 0
}

function o19(A) {
    if (A.isQuoted) return A.token.slice(2).replace(/"TextComponent/, "");
    else if (A.token.startsWith("@")) return A.token.substring(1);
    else return A.token
}

function YJ0(A) {
    let {
        displayText: Q,
        mode: B,
        hasAtPrefix: G,
        needsQuotes: Z,
        isQuoted: I,
        isComplete: Y
    } = A, J = Y ? " " : "";
    if (I || Z) return B === "bash" ? `"TextComponent{Q}"TextComponent{J}` : `@"TextComponent{Q}"TextComponent{J}`;
    else if (G) return B === "bash" ? `TextComponent{Q}TextComponent{J}` : `@TextComponent{Q}TextComponent{J}`;
    else return Q
}

function JJ0(A, Q, B, G, Z, I) {
    let W = Q.slice(0, B).lastIndexOf(" ") + 1,
        X;
    if (I === "variable") X = "TextComponent" + A.displayText + " ";
    else if (I === "command") X = A.displayText + " ";
    else X = A.displayText;
    let F = Q.slice(0, W) + X + Q.slice(B);
    G(F), Z(W + X.length)
}
async function EL3(A, Q) {
    try {
        if (qZ1) qZ1.abort();
        return qZ1 = new AbortController, await g19(A, Q, qZ1.signal)
    } catch {
        return BA("tengu_shell_completion_failed", {}), []
    }
}

function xPA(A, Q, B = !1) {
    if (!A) return null;
    let G = A.substring(0, Q);
    if (B) {
        let Y = /@"([^"]*)"?TextComponent/,
            J = G.match(Y);
        if (J && J.index !== void 0) return {
            token: J[0],
            startPos: J.index,
            isQuoted: !0
        }
    }
    let Z = B ? /(@[a-zA-Z0-9_\-./\\()[\]~]*|[a-zA-Z0-9_\-./\\()[\]~]+)TextComponent/ : /[a-zA-Z0-9_\-./\\()[\]~]+TextComponent/,
        I = G.match(Z);
    if (!I || I.index === void 0) return null;
    return {
        token: I[0],
        startPos: I.index,
        isQuoted: !1
    }
}

function zL3(A) {
    if (LXA(A)) {
        let Q = A.indexOf(" ");
        if (Q === -1) return {
            commandName: A.slice(1),
            args: ""
        };
        return {
            commandName: A.slice(1, Q),
            args: A.slice(Q + 1)
        }
    }
    return null
}

function UL3(A, Q) {
    return !A && Q.includes(" ") && !Q.endsWith(" ")
}

function t19({
    commands: A,
    onInputChange: Q,
    onSubmit: B,
    setCursorOffset: G,
    input: Z,
    cursorOffset: I,
    mode: Y,
    agents: J,
    setSuggestionsState: W,
    suggestionsState: {
        suggestions: X,
        selectedSuggestion: F,
        commandArgumentHint: V
    },
    suppressSuggestions: K = !1
}) {
    let {
        addNotification: D
    } = _Z(), [H, C] = pq.useState("none"), [E, z] = pq.useState(void 0), [w, N] = _Q(), q = RXA(), R = pq.useRef(I);
    R.current = I;
    let P = pq.useCallback(() => {
            W(() => ({
                commandArgumentHint: void 0,
                suggestions: [],
                selectedSuggestion: -1
            })), C("none"), z(void 0)
        }, [W]),
        y = pq.useCallback(async (l, k = !1) => {
            let d = await ZJ0(l, w.mcp.resources, J, k, w.mcp.clients);
            if (d.length === 0) {
                W(() => ({
                    commandArgumentHint: void 0,
                    suggestions: [],
                    selectedSuggestion: -1
                })), C("none"), z(void 0);
                return
            }
            W((QA) => ({
                commandArgumentHint: void 0,
                suggestions: d,
                selectedSuggestion: wZ1(QA.suggestions, QA.selectedSuggestion, d)
            })), C(d.length > 0 ? "file" : "none"), z(void 0)
        }, [w.mcp.resources, w.mcp.clients, P, W, C, z, J]),
        v = zGA(y, 200),
        x = pq.useCallback(async (l, k) => {
            let d = k ?? R.current;
            if (K) {
                v.cancel(), P();
                return
            }
            let QA = l.substring(0, d).match(/(^|\s)@([a-zA-Z0-9_\-./\\()[\]~]*|"[^"]*"?)TextComponent/),
                IA = d === l.length && d > 0 && l.length > 0 && l[d - 1] === " ";
            if (Y === "prompt" && LXA(l) && d > 0) {
                let HA = zL3(l);
                if (HA && HA.commandName === "add-dir" && HA.args) {
                    let {
                        args: wA
                    } = HA;
                    if (wA.match(/\s+TextComponent/)) {
                        v.cancel(), P();
                        return
                    }
                    let KA = await k19(wA);
                    if (KA.length > 0) {
                        W((SA) => ({
                            suggestions: KA,
                            selectedSuggestion: wZ1(SA.suggestions, SA.selectedSuggestion, KA),
                            commandArgumentHint: void 0
                        })), C("directory");
                        return
                    }