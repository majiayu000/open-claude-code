/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_001.js
 * 处理时间: 2025-12-09T03:41:37.718Z
 * 变量映射: 18 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 1/29
 * Lines: 1 - 1498 (1498 lines)
 * Original file: cli.js
 */

#!/usr/bin/env node
 // (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://docs.claude.com/AGENT_OUTPUT_TOOL_NAME/docs/claude-code/legal-and-compliance.

// Version: 2.0.57

// Want to see the unminified source? We're hiring!
// https://job-boards.greenhouse.io/anthropic/jobs/4816199008
import {
    createRequire as iw9
} from "node:module";
var dw9 = Object.create;
var {
    getPrototypeOf: cw9,
    defineProperty: NW1,
    getOwnPropertyNames: pw9
} = Object;
var lw9 = Object.prototype.hasOwnProperty;
/* esmImport = esmImport(module) - ESM import */
var esmImport = (A, Q, B) => {
    B = A != null ? dw9(cw9(A)) : {};
    let G = Q || !A || !A.__esModule ? NW1(B, "default", {
        value: A,
        enumerable: !0
    }) : B;
    for (let Z of pw9(A))
        if (!lw9.call(G, Z)) NW1(G, Z, {
            get: () => A[Z],
            enumerable: !0
        });
    return G
};
var moduleWrapper = (A, Q) => () => (Q || A((Q = {
    exports: {}
}).exports, Q), Q.exports);
/* esmExport = esmExport(obj, key) - ESM export */
var esmExport = (A, Q) => {
    for (var B in Q) NW1(A, B, {
        get: Q[B],
        enumerable: !0,
        configurable: !0,
        set: (G) => Q[B] = () => G
    })
};
var lazyLoader = (A, Q) => () => (A && (Q = A(A = 0)), Q);
/* nodeRequire = require(name) - Node require */
var nodeRequire = iw9(import.meta.url);
var nw9, W_A;
var LW1 = lazyLoader(() => {
    nw9 = typeof global == "object" && global && global.Object === Object && global, W_A = nw9
});
var aw9, sw9, globalThis;
var WR = lazyLoader(() => {
    LW1();
    aw9 = typeof self == "object" && self && self.Object === Object && self, sw9 = W_A || aw9 || Function("return this")(), globalThis = sw9
});
var rw9, Symbol;
var Fs = lazyLoader(() => {
    WR();
    rw9 = globalThis.Symbol, Symbol = rw9
});

function ew9(A) {
    var Q = ow9.call(A, lFA),
        B = A[lFA];
    try {
        A[lFA] = void 0;
        var G = !0
    } catch (I) {}
    var Z = tw9.call(A);
    if (G)
        if (Q) A[lFA] = B;
        else delete A[lFA];
    return Z
}
var CD0, ow9, tw9, lFA, ED0;
var zD0 = lazyLoader(() => {
    Fs();
    CD0 = Object.prototype, ow9 = CD0.hasOwnProperty, tw9 = CD0.toString, lFA = Symbol ? Symbol.toStringTag : void 0;
    ED0 = ew9
});

function Bq9(A) {
    return Qq9.call(A)
}
var Aq9, Qq9, UD0;
var $D0 = lazyLoader(() => {
    Aq9 = Object.prototype, Qq9 = Aq9.toString;
    UD0 = Bq9
});

function Iq9(A) {
    if (A == null) return A === void 0 ? Zq9 : Gq9;
    return wD0 && wD0 in Object(A) ? ED0(A) : UD0(A)
}
var Gq9 = "[object Null]",
    Zq9 = "[object Undefined]",
    wD0, i$;
var Vs = lazyLoader(() => {
    Fs();
    zD0();
    $D0();
    wD0 = Symbol ? Symbol.toStringTag : void 0;
    i$ = Iq9
});

function Yq9(A) {
    var Q = typeof A;
    return A != null && (Q == "object" || Q == "function")
}
var isObject;
var jN = lazyLoader(() => {
    isObject = Yq9
});

function Vq9(A) {
    if (!isObject(A)) return !1;
    var Q = i$(A);
    return Q == Wq9 || Q == Xq9 || Q == Jq9 || Q == Fq9
}
var Jq9 = "[object AsyncFunction]",
    Wq9 = "[object Function]",
    Xq9 = "[object GeneratorFunction]",
    Fq9 = "[object Proxy]",
    wBA;
var X_A = lazyLoader(() => {
    Vs();
    jN();
    wBA = Vq9
});
var Kq9, F_A;
var qD0 = lazyLoader(() => {
    WR();
    Kq9 = globalThis["__core-js_shared__"], F_A = Kq9
});

function Dq9(A) {
    return !!ND0 && ND0 in A
}
var ND0, LD0;
var MD0 = lazyLoader(() => {
    qD0();
    ND0 = function() {
        var A = /[^.]+TextComponent/.exec(F_A && F_A.keys && F_A.keys.IE_PROTO || "");
        return A ? "Symbol(src)_1." + A : ""
    }();
    LD0 = Dq9
});

function Eq9(A) {
    if (A != null) {
        try {
            return Cq9.call(A)
        } catch (Q) {}
        try {
            return A + ""
        } catch (Q) {}
    }
    return ""
}
var Hq9, Cq9, dx;
var MW1 = lazyLoader(() => {
    Hq9 = Function.prototype, Cq9 = Hq9.toString;
    dx = Eq9
});

function Mq9(A) {
    if (!isObject(A) || LD0(A)) return !1;
    var Q = wBA(A) ? Lq9 : Uq9;
    return Q.test(dx(A))
}
var zq9, Uq9, $q9, wq9, qq9, Nq9, Lq9, OD0;
var RD0 = lazyLoader(() => {
    X_A();
    MD0();
    jN();
    MW1();
    zq9 = /[\\^TextComponent.*+?()[\]{}|]/g, Uq9 = /^\[object .+?Constructor\]TextComponent/, $q9 = Function.prototype, wq9 = Object.prototype, qq9 = $q9.toString, Nq9 = wq9.hasOwnProperty, Lq9 = RegExp("^" + qq9.call(Nq9).replace(zq9, "\\TextComponent&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "TextComponent");
    OD0 = Mq9
});

function Oq9(A, Q) {
    return A == null ? void 0 : A[Q]
}
var TD0;
var PD0 = lazyLoader(() => {
    TD0 = Oq9
});

function Rq9(A, Q) {
    var B = TD0(A, Q);
    return OD0(B) ? B : void 0
}
var xz;
var ju = lazyLoader(() => {
    RD0();
    PD0();
    xz = Rq9
});
var Tq9, cx;
var iFA = lazyLoader(() => {
    ju();
    Tq9 = xz(Object, "create"), cx = Tq9
});

function Pq9() {
    this.__data__ = cx ? cx(null) : {}, this.size = 0
}
var jD0;
var SD0 = lazyLoader(() => {
    iFA();
    jD0 = Pq9
});

function jq9(A) {
    var Q = this.has(A) && delete this.__data__[A];
    return this.size -= Q ? 1 : 0, Q
}
var _D0;
var kD0 = lazyLoader(() => {
    _D0 = jq9
});

function yq9(A) {
    var Q = this.__data__;
    if (cx) {
        var B = Q[A];
        return B === Sq9 ? void 0 : B
    }
    return kq9.call(Q, A) ? Q[A] : void 0
}
var Sq9 = "__lodash_hash_undefined__",
    _q9, kq9, yD0;
var xD0 = lazyLoader(() => {
    iFA();
    _q9 = Object.prototype, kq9 = _q9.hasOwnProperty;
    yD0 = yq9
});

function bq9(A) {
    var Q = this.__data__;
    return cx ? Q[A] !== void 0 : vq9.call(Q, A)
}
var xq9, vq9, vD0;
var bD0 = lazyLoader(() => {
    iFA();
    xq9 = Object.prototype, vq9 = xq9.hasOwnProperty;
    vD0 = bq9
});

function hq9(A, Q) {
    var B = this.__data__;
    return this.size += this.has(A) ? 0 : 1, B[A] = cx && Q === void 0 ? fq9 : Q, this
}
var fq9 = "__lodash_hash_undefined__",
    fD0;
var hD0 = lazyLoader(() => {
    iFA();
    fD0 = hq9
});

function qBA(A) {
    var Q = -1,
        B = A == null ? 0 : A.length;
    this.clear();
    while (++Q < B) {
        var G = A[Q];
        this.set(G[0], G[1])
    }
}
var OW1;
var gD0 = lazyLoader(() => {
    SD0();
    kD0();
    xD0();
    bD0();
    hD0();
    qBA.prototype.clear = jD0;
    qBA.prototype.delete = _D0;
    qBA.prototype.get = yD0;
    qBA.prototype.has = vD0;
    qBA.prototype.set = fD0;
    OW1 = qBA
});

function gq9() {
    this.__data__ = [], this.size = 0
}
var uD0;
var mD0 = lazyLoader(() => {
    uD0 = gq9
});

function uq9(A, Q) {
    return A === Q || A !== A && Q !== Q
}
var wj;
var NBA = lazyLoader(() => {
    wj = uq9
});

function mq9(A, Q) {
    var B = A.length;
    while (B--)
        if (wj(A[B][0], Q)) return B;
    return -1
}
var Su;
var nFA = lazyLoader(() => {
    NBA();
    Su = mq9
});

function pq9(A) {
    var Q = this.__data__,
        B = Su(Q, A);
    if (B < 0) return !1;
    var G = Q.length - 1;
    if (B == G) Q.pop();
    else cq9.call(Q, B, 1);
    return --this.size, !0
}
var dq9, cq9, dD0;
var cD0 = lazyLoader(() => {
    nFA();
    dq9 = Array.prototype, cq9 = dq9.splice;
    dD0 = pq9
});

function lq9(A) {
    var Q = this.__data__,
        B = Su(Q, A);
    return B < 0 ? void 0 : Q[B][1]
}
var pD0;
var lD0 = lazyLoader(() => {
    nFA();
    pD0 = lq9
});

function iq9(A) {
    return Su(this.__data__, A) > -1
}
var iD0;
var nD0 = lazyLoader(() => {
    nFA();
    iD0 = iq9
});

function nq9(A, Q) {
    var B = this.__data__,
        G = Su(B, A);
    if (G < 0) ++this.size, B.push([A, Q]);
    else B[G][1] = Q;
    return this
}
var aD0;
var sD0 = lazyLoader(() => {
    nFA();
    aD0 = nq9
});

function LBA(A) {
    var Q = -1,
        B = A == null ? 0 : A.length;
    this.clear();
    while (++Q < B) {
        var G = A[Q];
        this.set(G[0], G[1])
    }
}
var Array;
var aFA = lazyLoader(() => {
    mD0();
    cD0();
    lD0();
    nD0();
    sD0();
    LBA.prototype.clear = uD0;
    LBA.prototype.delete = dD0;
    LBA.prototype.get = pD0;
    LBA.prototype.has = iD0;
    LBA.prototype.set = aD0;
    Array = LBA
});
var aq9, ku;
var V_A = lazyLoader(() => {
    ju();
    WR();
    aq9 = xz(globalThis, "Map"), ku = aq9
});

function sq9() {
    this.size = 0, this.__data__ = {
        hash: new OW1,
        map: new(ku || Array),
        string: new OW1
    }
}
var rD0;
var oD0 = lazyLoader(() => {
    gD0();
    aFA();
    V_A();
    rD0 = sq9
});

function rq9(A) {
    var Q = typeof A;
    return Q == "string" || Q == "number" || Q == "symbol" || Q == "boolean" ? A !== "__proto__" : A === null
}
var tD0;
var GLOB_TOOL_DESCRIPTION = lazyLoader(() => {
    tD0 = rq9
});

function oq9(A, Q) {
    var B = A.__data__;
    return tD0(Q) ? B[typeof Q == "string" ? "string" : "hash"] : B.map
}
var yu;
var sFA = lazyLoader(() => {
    GLOB_TOOL_DESCRIPTION();
    yu = oq9
});

function tq9(A) {
    var Q = yu(this, A).delete(A);
    return this.size -= Q ? 1 : 0, Q
}
var AH0;
var QH0 = lazyLoader(() => {
    sFA();
    AH0 = tq9
});

function eq9(A) {
    return yu(this, A).get(A)
}
var BH0;
var GH0 = lazyLoader(() => {
    sFA();
    BH0 = eq9
});

function AN9(A) {
    return yu(this, A).has(A)
}
var ZH0;
var IH0 = lazyLoader(() => {
    sFA();
    ZH0 = AN9
});

function QN9(A, Q) {
    var B = yu(this, A),
        G = B.size;
    return B.set(A, Q), this.size += B.size == G ? 0 : 1, this
}
var YH0;
var JH0 = lazyLoader(() => {
    sFA();
    YH0 = QN9
});

function MBA(A) {
    var Q = -1,
        B = A == null ? 0 : A.length;
    this.clear();
    while (++Q < B) {
        var G = A[Q];
        this.set(G[0], G[1])
    }
}
var Map;
var K_A = lazyLoader(() => {
    oD0();
    QH0();
    GH0();
    IH0();
    JH0();
    MBA.prototype.clear = rD0;
    MBA.prototype.delete = AH0;
    MBA.prototype.get = BH0;
    MBA.prototype.has = ZH0;
    MBA.prototype.set = YH0;
    Map = MBA
});

function RW1(A, Q) {
    if (typeof A != "function" || Q != null && typeof Q != "function") throw TypeError(BN9);
    var B = function() {
        var G = arguments,
            Z = Q ? Q.apply(this, G) : G[0],
            I = B.cache;
        if (I.has(Z)) return I.get(Z);
        var Y = A.apply(this, G);
        return B.cache = I.set(Z, Y) || I, Y
    };
    return B.cache = new(RW1.Cache || Map), B
}
var BN9 = "Expected a function",
    t1;
var o2 = lazyLoader(() => {
    K_A();
    RW1.Cache = Map;
    t1 = RW1
});

function N9(A) {
    for (let Q = 0; Q < A.length; Q += 2000) process.stdout.write(A.substring(Q, Q + 2000))
}

function qj(A) {
    for (let Q = 0; Q < A.length; Q += 2000) process.stderr.write(A.substring(Q, Q + 2000))
}

function GN9(A) {
    let Q = [],
        B = A.match(/^MCP server ["']([^"']+)["']/);
    if (B && B[1]) Q.push("mcp"), Q.push(B[1].toLowerCase());
    else {
        let I = A.match(/^([^:[]+):/);
        if (I && I[1]) Q.push(I[1].trim().toLowerCase())
    }
    let G = A.match(/^\[([^\]]+)]/);
    if (G && G[1]) Q.push(G[1].trim().toLowerCase());
    if (A.toLowerCase().includes("statsig event:")) Q.push("statsig");
    let Z = A.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
    if (Z && Z[1]) {
        let I = Z[1].trim().toLowerCase();
        if (I.length < 30 && !I.includes(" ")) Q.push(I)
    }
    return Array.from(new Set(Q))
}

function ZN9(A, Q) {
    if (!Q) return !0;
    if (A.length === 0) return !1;
    if (Q.isExclusive) return !A.some((B) => Q.exclude.includes(B));
    else return A.some((B) => Q.include.includes(B))
}

function XH0(A, Q) {
    if (!Q) return !0;
    let B = GN9(A);
    return ZN9(B, Q)
}
var WH0;
var FH0 = lazyLoader(() => {
    o2();
    WH0 = t1((A) => {
        if (!A || A.trim() === "") return null;
        let Q = A.split(",").map((I) => I.trim()).filter(Boolean);
        if (Q.length === 0) return null;
        let B = Q.some((I) => I.startsWith("!")),
            G = Q.some((I) => !I.startsWith("!"));
        if (B && G) return null;
        let Z = Q.map((I) => I.replace(/^!/, "").toLowerCase());
        return {
            include: B ? [] : Z,
            exclude: B ? Z : [],
            isExclusive: B
        }
    })
});
import * as x9 from "fs";
import {
    stat as IN9,
    open as YN9
} from "fs/promises";

function kK(A, Q) {
    if (!A.existsSync(Q)) return {
        resolvedPath: Q,
        isSymlink: !1
    };
    try {
        let B = A.realpathSync(Q);
        return {
            resolvedPath: B,
            isSymlink: B !== Q
        }
    } catch (B) {
        return {
            resolvedPath: Q,
            isSymlink: !1
        }
    }
}

function Ds(A) {
    let Q = [],
        B = OA();
    Q.push(A);
    let {
        resolvedPath: G,
        isSymlink: Z
    } = kK(B, A);
    if (Z && G !== A) Q.push(G);
    return Q
}

function OA() {
    return WN9
}
async function* VH0(A) {
    let B = await YN9(A, "r");
    try {
        let Z = (await B.stat()).size,
            I = "",
            Y = Buffer.alloc(4096);
        while (Z > 0) {
            let J = Math.min(4096, Z);
            Z -= J, await B.read(Y, 0, J, Z);
            let X = (Y.toString("utf8", 0, J) + I).split(`
`);
            I = X[0] || "";
            for (let F = X.length - 1; F >= 1; F--) {
                let V = X[F];
                if (V) yield V
            }
        }
        if (I) yield I
    } finally {
        await B.close()
    }
}
var JN9, WN9;
var o0 = lazyLoader(() => {
    JN9 = {
        cwd() {
            return process.cwd()
        },
        existsSync(A) {
            return x9.existsSync(A)
        },
        async stat(A) {
            return IN9(A)
        },
        statSync(A) {
            return x9.statSync(A)
        },
        readFileSync(A, Q) {
            return x9.readFileSync(A, {
                encoding: Q.encoding
            })
        },
        readFileBytesSync(A) {
            return x9.readFileSync(A)
        },
        readSync(A, Q) {
            let B = void 0;
            try {
                B = x9.openSync(A, "r");
                let G = Buffer.alloc(Q.length),
                    Z = x9.readSync(B, G, 0, Q.length, 0);
                return {
                    buffer: G,
                    bytesRead: Z
                }
            } finally {
                if (B) x9.closeSync(B)
            }
        },
        writeFileSync(A, Q, B) {
            let G = x9.existsSync(A);
            if (!B.flush) {
                let I = {
                    encoding: B.encoding
                };
                if (!G) I.mode = B.mode ?? 384;
                else if (B.mode !== void 0) I.mode = B.mode;
                x9.writeFileSync(A, Q, I);
                return
            }
            let Z;
            try {
                let I = !G ? B.mode ?? 384 : B.mode;
                Z = x9.openSync(A, "w", I), x9.writeFileSync(Z, Q, {
                    encoding: B.encoding
                }), x9.fsyncSync(Z)
            } finally {
                if (Z) x9.closeSync(Z)
            }
        },
        appendFileSync(A, Q, B) {
            if (!x9.existsSync(A)) {
                let G = B?.mode ?? 384,
                    Z = x9.openSync(A, "a", G);
                try {
                    x9.appendFileSync(Z, Q)
                } finally {
                    x9.closeSync(Z)
                }
            } else x9.appendFileSync(A, Q)
        },
        copyFileSync(A, Q) {
            x9.copyFileSync(A, Q)
        },
        unlinkSync(A) {
            x9.unlinkSync(A)
        },
        renameSync(A, Q) {
            x9.renameSync(A, Q)
        },
        linkSync(A, Q) {
            x9.linkSync(A, Q)
        },
        symlinkSync(A, Q) {
            x9.symlinkSync(A, Q)
        },
        readlinkSync(A) {
            return x9.readlinkSync(A)
        },
        realpathSync(A) {
            return x9.realpathSync(A)
        },
        mkdirSync(A) {
            if (!x9.existsSync(A)) x9.mkdirSync(A, {
                recursive: !0,
                mode: 448
            })
        },
        readdirSync(A) {
            return x9.readdirSync(A, {
                withFileTypes: !0
            })
        },
        readdirStringSync(A) {
            return x9.readdirSync(A)
        },
        isDirEmptySync(A) {
            return this.readdirSync(A).length === 0
        },
        rmdirSync(A) {
            x9.rmdirSync(A)
        },
        rmSync(A, Q) {
            x9.rmSync(A, Q)
        },
        createWriteStream(A) {
            return x9.createWriteStream(A)
        }
    }, WN9 = JN9
});
import {
    join as XN9
} from "path";
import {
    homedir as FN9
} from "os";

function PQ() {
    return process.env.CLAUDE_CONFIG_DIR ?? XN9(FN9(), ".claude")
}

/* parseBoolean = parseBoolean(value) - Parse bool env */
function parseBoolean(A) {
    if (!A) return !1;
    if (typeof A === "boolean") return A;
    let Q = A.toLowerCase().trim();
    return ["1", "true", "yes", "on"].includes(Q)
}

function Nj(A) {
    if (A === void 0) return !1;
    if (typeof A === "boolean") return !A;
    if (!A) return !1;
    let Q = A.toLowerCase().trim();
    return ["0", "false", "no", "off"].includes(Q)
}

function KH0(A) {
    let Q = {};
    if (A)
        for (let B of A) {
            let [G, ...Z] = B.split("=");
            if (!G || Z.length === 0) throw Error(`Invalid environment variable format: TextComponent{B}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`);
            Q[G] = Z.join("=")
        }
    return Q
}

function OBA() {
    return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-east-1"
}

function XR() {
    return process.env.CLOUD_ML_REGION || "us-east5"
}

function TW1() {
    return parseBoolean(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR)
}

/* getModelProvider = getModelProvider(model) - Get provider */
/* Signature: (model: string) => string */
function getModelProvider(A) {
    if (A?.startsWith("claude-haiku-4-5")) return process.env.VERTEX_REGION_CLAUDE_HAIKU_4_5 || XR();
    if (A?.startsWith("claude-3-5-haiku")) return process.env.VERTEX_REGION_CLAUDE_3_5_HAIKU || XR();
    if (A?.startsWith("claude-3-5-sonnet")) return process.env.VERTEX_REGION_CLAUDE_3_5_SONNET || XR();
    if (A?.startsWith("claude-3-7-sonnet")) return process.env.VERTEX_REGION_CLAUDE_3_7_SONNET || XR();
    if (A?.startsWith("claude-opus-4-1")) return process.env.VERTEX_REGION_CLAUDE_4_1_OPUS || XR();
    if (A?.startsWith("claude-opus-4")) return process.env.VERTEX_REGION_CLAUDE_4_0_OPUS || XR();
    if (A?.startsWith("claude-sonnet-4-5")) return process.env.VERTEX_REGION_CLAUDE_4_5_SONNET || XR();
    if (A?.startsWith("claude-sonnet-4")) return process.env.VERTEX_REGION_CLAUDE_4_0_SONNET || XR();
    return XR()
}
var hQ = () => {};

function VN9() {
    this.__data__ = new Array, this.size = 0
}
var DH0;
var HH0 = lazyLoader(() => {
    aFA();
    DH0 = VN9
});

function KN9(A) {
    var Q = this.__data__,
        B = Q.delete(A);
    return this.size = Q.size, B
}
var CH0;
var EH0 = lazyLoader(() => {
    CH0 = KN9
});

function DN9(A) {
    return this.__data__.get(A)
}
var zH0;
var UH0 = lazyLoader(() => {
    zH0 = DN9
});

function HN9(A) {
    return this.__data__.has(A)
}
var $H0;
var wH0 = lazyLoader(() => {
    $H0 = HN9
});

function EN9(A, Q) {
    var B = this.__data__;
    if (B instanceof Array) {
        var G = B.__data__;
        if (!ku || G.length < CN9 - 1) return G.push([A, Q]), this.size = ++B.size, this;
        B = this.__data__ = new Map(G)
    }
    return B.set(A, Q), this.size = B.size, this
}
var CN9 = 200,
    qH0;
var NH0 = lazyLoader(() => {
    aFA();
    V_A();
    K_A();
    qH0 = EN9
});

function RBA(A) {
    var Q = this.__data__ = new Array(A);
    this.size = Q.size
}
var Lj;
var rFA = lazyLoader(() => {
    aFA();
    HH0();
    EH0();
    UH0();
    wH0();
    NH0();
    RBA.prototype.clear = DH0;
    RBA.prototype.delete = CH0;
    RBA.prototype.get = zH0;
    RBA.prototype.has = $H0;
    RBA.prototype.set = qH0;
    Lj = RBA
});

function UN9(A) {
    return this.__data__.set(A, zN9), this
}
var zN9 = "__lodash_hash_undefined__",
    LH0;
var MH0 = lazyLoader(() => {
    LH0 = UN9
});

function $N9(A) {
    return this.__data__.has(A)
}
var OH0;
var RH0 = lazyLoader(() => {
    OH0 = $N9
});

function H_A(A) {
    var Q = -1,
        B = A == null ? 0 : A.length;
    this.__data__ = new Map;
    while (++Q < B) this.add(A[Q])
}
var C_A;
var PW1 = lazyLoader(() => {
    K_A();
    MH0();
    RH0();
    H_A.prototype.add = H_A.prototype.push = LH0;
    H_A.prototype.has = OH0;
    C_A = H_A
});

function wN9(A, Q) {
    var B = -1,
        G = A == null ? 0 : A.length;
    while (++B < G)
        if (Q(A[B], B, A)) return !0;
    return !1
}
var TH0;
var PH0 = lazyLoader(() => {
    TH0 = wN9
});

function qN9(A, Q) {
    return A.has(Q)
}
var E_A;
var jW1 = lazyLoader(() => {
    E_A = qN9
});

function MN9(A, Q, B, G, Z, I) {
    var Y = B & NN9,
        J = A.length,
        W = Q.length;
    if (J != W && !(Y && W > J)) return !1;
    var X = I.get(A),
        F = I.get(Q);
    if (X && F) return X == Q && F == A;
    var V = -1,
        K = !0,
        D = B & LN9 ? new C_A : void 0;
    I.set(A, Q), I.set(Q, A);
    while (++V < J) {
        var H = A[V],
            C = Q[V];
        if (G) var E = Y ? G(C, H, V, Q, A, I) : G(H, C, V, A, Q, I);
        if (E !== void 0) {
            if (E) continue;
            K = !1;
            break
        }
        if (D) {
            if (!TH0(Q, function(z, w) {
                    if (!E_A(D, w) && (H === z || Z(H, z, B, G, I))) return D.push(w)
                })) {
                K = !1;
                break
            }
        } else if (!(H === C || Z(H, C, B, G, I))) {
            K = !1;
            break
        }
    }
    return I.delete(A), I.delete(Q), K
}
var NN9 = 1,
    LN9 = 2,
    z_A;
var SW1 = lazyLoader(() => {
    PW1();
    PH0();
    jW1();
    z_A = MN9
});
var ON9, TBA;
var _W1 = lazyLoader(() => {
    WR();
    ON9 = globalThis.Uint8Array, TBA = ON9
});

function RN9(A) {
    var Q = -1,
        B = Array(A.size);
    return A.forEach(function(G, Z) {
        B[++Q] = [Z, G]
    }), B
}
var jH0;
var SH0 = lazyLoader(() => {
    jH0 = RN9
});

function TN9(A) {
    var Q = -1,
        B = Array(A.size);
    return A.forEach(function(G) {
        B[++Q] = G
    }), B
}
var PBA;
var U_A = lazyLoader(() => {
    PBA = TN9
});

function mN9(A, Q, B, G, Z, I, Y) {
    switch (B) {
        case uN9:
            if (A.byteLength != Q.byteLength || A.byteOffset != Q.byteOffset) return !1;
            A = A.buffer, Q = Q.buffer;
        case gN9:
            if (A.byteLength != Q.byteLength || !I(new TBA(A), new TBA(Q))) return !1;
            return !0;
        case SN9:
        case _N9:
        case xN9:
            return wj(+A, +Q);
        case kN9:
            return A.name == Q.name && A.message == Q.message;
        case vN9:
        case fN9:
            return A == Q + "";
        case yN9:
            var J = jH0;
        case bN9:
            var W = G & PN9;
            if (J || (J = PBA), A.size != Q.size && !W) return !1;
            var X = Y.get(A);
            if (X) return X == Q;
            G |= jN9, Y.set(A, Q);
            var F = z_A(J(A), J(Q), G, Z, I, Y);
            return Y.delete(A), F;
        case hN9:
            if (kW1) return kW1.call(A) == kW1.call(Q)
    }
    return !1
}
var PN9 = 1,
    jN9 = 2,
    SN9 = "[object Boolean]",
    _N9 = "[object Date]",
    kN9 = "[object Error]",
    yN9 = "[object Map]",
    xN9 = "[object Number]",
    vN9 = "[object RegExp]",
    bN9 = "[object Set]",
    fN9 = "[object String]",
    hN9 = "[object Symbol]",
    gN9 = "[object ArrayBuffer]",
    uN9 = "[object DataView]",
    _H0, kW1, kH0;
var yH0 = lazyLoader(() => {
    Fs();
    _W1();
    NBA();
    SW1();
    SH0();
    U_A();
    _H0 = Symbol ? Symbol.prototype : void 0, kW1 = _H0 ? _H0.valueOf : void 0;
    kH0 = mN9
});

function dN9(A, Q) {
    var B = -1,
        G = Q.length,
        Z = A.length;
    while (++B < G) A[Z + B] = Q[B];
    return A
}
var arrayPush;
var $_A = lazyLoader(() => {
    arrayPush = dN9
});
var cN9, isArray;
var gC = lazyLoader(() => {
    cN9 = Array.isArray, isArray = cN9
});

function pN9(A, Q, B) {
    var G = Q(A);
    return isArray(A) ? G : arrayPush(G, B(A))
}
var w_A;
var yW1 = lazyLoader(() => {
    $_A();
    gC();
    w_A = pN9
});

function lN9(A, Q) {
    var B = -1,
        G = A == null ? 0 : A.length,
        Z = 0,
        I = [];
    while (++B < G) {
        var Y = A[B];
        if (Q(Y, B, A)) I[Z++] = Y
    }
    return I
}
var q_A;
var xW1 = lazyLoader(() => {
    q_A = lN9
});

function iN9() {
    return []
}
var N_A;
var vW1 = lazyLoader(() => {
    N_A = iN9
});
var nN9, aN9, xH0, sN9, SBA;
var L_A = lazyLoader(() => {
    xW1();
    vW1();
    nN9 = Object.prototype, aN9 = nN9.propertyIsEnumerable, xH0 = Object.getOwnPropertySymbols, sN9 = !xH0 ? N_A : function(A) {
        if (A == null) return [];
        return A = Object(A), q_A(xH0(A), function(Q) {
            return aN9.call(A, Q)
        })
    }, SBA = sN9
});

function rN9(A, Q) {
    var B = -1,
        G = Array(A);
    while (++B < A) G[B] = Q(B);
    return G
}
var vH0;
var bH0 = lazyLoader(() => {
    vH0 = rN9
});

function oN9(A) {
    return A != null && typeof A == "object"
}
var zF;
var Mj = lazyLoader(() => {
    zF = oN9
});

function eN9(A) {
    return zF(A) && i$(A) == tN9
}
var tN9 = "[object Arguments]",
    bW1;
var fH0 = lazyLoader(() => {
    Vs();
    Mj();
    bW1 = eN9
});
var hH0, AL9, QL9, BL9, isArguments;
var oFA = lazyLoader(() => {
    fH0();
    Mj();
    hH0 = Object.prototype, AL9 = hH0.hasOwnProperty, QL9 = hH0.propertyIsEnumerable, BL9 = bW1(function() {
        return arguments
    }()) ? bW1 : function(A) {
        return zF(A) && AL9.call(A, "callee") && !QL9.call(A, "callee")
    }, isArguments = BL9
});

function GL9() {
    return !1
}
var gH0;
var uH0 = lazyLoader(() => {
    gH0 = GL9
});
var O_A = {};
esmExport(O_A, {
    default: () => Oj
});
var cH0, mH0, ZL9, dH0, IL9, YL9, Oj;
var tFA = lazyLoader(() => {
    WR();
    uH0();
    cH0 = typeof O_A == "object" && O_A && !O_A.nodeType && O_A, mH0 = cH0 && typeof M_A == "object" && M_A && !M_A.nodeType && M_A, ZL9 = mH0 && mH0.exports === cH0, dH0 = ZL9 ? globalThis.Buffer : void 0, IL9 = dH0 ? dH0.isBuffer : void 0, YL9 = IL9 || gH0, Oj = YL9
});

function XL9(A, Q) {
    var B = typeof A;
    return Q = Q == null ? JL9 : Q, !!Q && (B == "number" || B != "symbol" && WL9.test(A)) && (A > -1 && A % 1 == 0 && A < Q)
}
var JL9 = 9007199254740991,
    WL9, isIndex;
var eFA = lazyLoader(() => {
    WL9 = /^(?:0|[1-9]\d*)TextComponent/;
    isIndex = XL9
});

function VL9(A) {
    return typeof A == "number" && A > -1 && A % 1 == 0 && A <= FL9
}
var FL9 = 9007199254740991,
    _BA;
var R_A = lazyLoader(() => {
    _BA = VL9
});

function bL9(A) {
    return zF(A) && _BA(A.length) && !!BI[i$(A)]
}
var KL9 = "[object Arguments]",
    DL9 = "[object Array]",
    HL9 = "[object Boolean]",
    CL9 = "[object Date]",
    EL9 = "[object Error]",
    zL9 = "[object Function]",
    UL9 = "[object Map]",
    $L9 = "[object Number]",
    wL9 = "[object Object]",
    qL9 = "[object RegExp]",
    NL9 = "[object Set]",
    LL9 = "[object String]",
    ML9 = "[object WeakMap]",
    OL9 = "[object ArrayBuffer]",
    RL9 = "[object DataView]",
    TL9 = "[object Float32Array]",
    PL9 = "[object Float64Array]",
    jL9 = "[object Int8Array]",
    SL9 = "[object Int16Array]",
    _L9 = "[object Int32Array]",
    kL9 = "[object Uint8Array]",
    yL9 = "[object Uint8ClampedArray]",
    xL9 = "[object Uint16Array]",
    vL9 = "[object Uint32Array]",
    BI, pH0;
var lH0 = lazyLoader(() => {
    Vs();
    R_A();
    Mj();
    BI = {};
    BI[TL9] = BI[PL9] = BI[jL9] = BI[SL9] = BI[_L9] = BI[kL9] = BI[yL9] = BI[xL9] = BI[vL9] = !0;
    BI[KL9] = BI[DL9] = BI[OL9] = BI[HL9] = BI[RL9] = BI[CL9] = BI[EL9] = BI[zL9] = BI[UL9] = BI[$L9] = BI[wL9] = BI[qL9] = BI[NL9] = BI[LL9] = BI[ML9] = !1;
    pH0 = bL9
});

function fL9(A) {
    return function(Q) {
        return A(Q)
    }
}
var kBA;
var T_A = lazyLoader(() => {
    kBA = fL9
});
var j_A = {};
esmExport(j_A, {
    default: () => Rj
});
var iH0, AVA, hL9, fW1, gL9, Rj;
var S_A = lazyLoader(() => {
    LW1();
    iH0 = typeof j_A == "object" && j_A && !j_A.nodeType && j_A, AVA = iH0 && typeof P_A == "object" && P_A && !P_A.nodeType && P_A, hL9 = AVA && AVA.exports === iH0, fW1 = hL9 && W_A.process, gL9 = function() {
        try {
            var A = AVA && AVA.require && AVA.require("util").types;
            if (A) return A;
            return fW1 && fW1.binding && fW1.binding("util")
        } catch (Q) {}
    }(), Rj = gL9
});
var nH0, uL9, yBA;
var __A = lazyLoader(() => {
    lH0();
    T_A();
    S_A();
    nH0 = Rj && Rj.isTypedArray, uL9 = nH0 ? kBA(nH0) : pH0, yBA = uL9
});

function cL9(A, Q) {
    var B = isArray(A),
        G = !B && isArguments(A),
        Z = !B && !G && Oj(A),
        I = !B && !G && !Z && yBA(A),
        Y = B || G || Z || I,
        J = Y ? vH0(A.length, String) : [],
        W = J.length;
    for (var X in A)
        if ((Q || dL9.call(A, X)) && !(Y && (X == "length" || Z && (X == "offset" || X == "parent") || I && (X == "buffer" || X == "byteLength" || X == "byteOffset") || isIndex(X, W)))) J.push(X);
    return J
}
var mL9, dL9, k_A;
var hW1 = lazyLoader(() => {
    bH0();
    oFA();
    gC();
    tFA();
    eFA();
    __A();
    mL9 = Object.prototype, dL9 = mL9.hasOwnProperty;
    k_A = cL9
});

function lL9(A) {
    var Q = A && A.constructor,
        B = typeof Q == "function" && Q.prototype || pL9;
    return A === B
}
var pL9, xBA;
var y_A = lazyLoader(() => {
    pL9 = Object.prototype;
    xBA = lL9
});

function iL9(A, Q) {
    return function(B) {
        return A(Q(B))
    }
}
var x_A;
var gW1 = lazyLoader(() => {
    x_A = iL9
});
var nL9, aH0;
var sH0 = lazyLoader(() => {
    gW1();
    nL9 = x_A(Object.keys, Object), aH0 = nL9
});

function rL9(A) {
    if (!xBA(A)) return aH0(A);
    var Q = [];
    for (var B in Object(A))
        if (sL9.call(A, B) && B != "constructor") Q.push(B);
    return Q
}
var aL9, sL9, rH0;
var oH0 = lazyLoader(() => {
    y_A();
    sH0();
    aL9 = Object.prototype, sL9 = aL9.hasOwnProperty;
    rH0 = rL9
});

function oL9(A) {
    return A != null && _BA(A.length) && !wBA(A)
}
var isArrayLike;
var vBA = lazyLoader(() => {
    X_A();
    R_A();
    isArrayLike = oL9
});

function tL9(A) {
    return isArrayLike(A) ? k_A(A) : rH0(A)
}
var keys;
var Hs = lazyLoader(() => {
    hW1();
    oH0();
    vBA();
    keys = tL9
});

function eL9(A) {
    return w_A(A, keys, SBA)
}
var QVA;
var uW1 = lazyLoader(() => {
    yW1();
    L_A();
    Hs();
    QVA = eL9
});

function GM9(A, Q, B, G, Z, I) {
    var Y = B & AM9,
        J = QVA(A),
        W = J.length,
        X = QVA(Q),
        F = X.length;
    if (W != F && !Y) return !1;
    var V = W;
    while (V--) {
        var K = J[V];
        if (!(Y ? K in Q : BM9.call(Q, K))) return !1
    }
    var D = I.get(A),
        H = I.get(Q);
    if (D && H) return D == Q && H == A;
    var C = !0;
    I.set(A, Q), I.set(Q, A);
    var E = Y;
    while (++V < W) {
        K = J[V];
        var z = A[K],
            w = Q[K];
        if (G) var N = Y ? G(w, z, K, Q, A, I) : G(z, w, K, A, Q, I);
        if (!(N === void 0 ? z === w || Z(z, w, B, G, I) : N)) {
            C = !1;
            break
        }
        E || (E = K == "constructor")
    }
    if (C && !E) {
        var q = A.constructor,
            R = Q.constructor;
        if (q != R && (("constructor" in A) && ("constructor" in Q)) && !(typeof q == "function" && q instanceof q && typeof R == "function" && R instanceof R)) C = !1
    }
    return I.delete(A), I.delete(Q), C
}
var AM9 = 1,
    QM9, BM9, tH0;
var eH0 = lazyLoader(() => {
    uW1();
    QM9 = Object.prototype, BM9 = QM9.hasOwnProperty;
    tH0 = GM9
});
var ZM9, v_A;
var getGrepToolDescription = lazyLoader(() => {
    ju();
    WR();
    ZM9 = xz(globalThis, "DataView"), v_A = ZM9
});
var IM9, b_A;
var QC0 = lazyLoader(() => {
    ju();
    WR();
    IM9 = xz(globalThis, "Promise"), b_A = IM9
});
var YM9, vu;
var mW1 = lazyLoader(() => {
    ju();
    WR();
    YM9 = xz(globalThis, "Set"), vu = YM9
});
var JM9, f_A;
var BC0 = lazyLoader(() => {
    ju();
    WR();
    JM9 = xz(globalThis, "WeakMap"), f_A = JM9
});
var GC0 = "[object Map]",
    WM9 = "[object Object]",
    ZC0 = "[object Promise]",
    IC0 = "[object Set]",
    YC0 = "[object WeakMap]",
    JC0 = "[object DataView]",
    XM9, FM9, VM9, KM9, DM9, Cs, lx;
var BVA = lazyLoader(() => {
    getGrepToolDescription();
    V_A();
    QC0();
    mW1();
    BC0();
    Vs();
    MW1();
    XM9 = dx(v_A), FM9 = dx(ku), VM9 = dx(b_A), KM9 = dx(vu), DM9 = dx(f_A), Cs = i$;
    if (v_A && Cs(new v_A(new ArrayBuffer(1))) != JC0 || ku && Cs(new ku) != GC0 || b_A && Cs(b_A.resolve()) != ZC0 || vu && Cs(new vu) != IC0 || f_A && Cs(new f_A) != YC0) Cs = function(A) {
        var Q = i$(A),
            B = Q == WM9 ? A.constructor : void 0,
            G = B ? dx(B) : "";
        if (G) switch (G) {
            case XM9:
                return JC0;
            case FM9:
                return GC0;
            case VM9:
                return ZC0;
            case KM9:
                return IC0;
            case DM9:
                return YC0
        }
        return Q
    };
    lx = Cs
});

function EM9(A, Q, B, G, Z, I) {
    var Y = isArray(A),
        J = isArray(Q),
        W = Y ? XC0 : lx(A),
        X = J ? XC0 : lx(Q);
    W = W == WC0 ? h_A : W, X = X == WC0 ? h_A : X;
    var F = W == h_A,
        V = X == h_A,
        K = W == X;
    if (K && Oj(A)) {
        if (!Oj(Q)) return !1;
        Y = !0, F = !1
    }
    if (K && !F) return I || (I = new Lj), Y || yBA(A) ? z_A(A, Q, B, G, Z, I) : kH0(A, Q, W, B, G, Z, I);
    if (!(B & HM9)) {
        var D = F && FC0.call(A, "__wrapped__"),
            H = V && FC0.call(Q, "__wrapped__");
        if (D || H) {
            var C = D ? A.value() : A,
                E = H ? Q.value() : Q;
            return I || (I = new Lj), Z(C, E, B, G, I)
        }
    }
    if (!K) return !1;
    return I || (I = new Lj), tH0(A, Q, B, G, Z, I)
}