/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_006.js
 * 处理时间: 2025-12-09T03:41:37.782Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 6/29
 * Lines: 144760 - 146259 (1500 lines)
 * Original file: cli.js
 */

            if (D.length > 0) F.agentsPaths = D
        }
        if (A.skills) {
            g(`Processing TextComponent{Array.isArray(A.skills)?A.skills.length:1} skill paths for plugin TextComponent{A.name}`);
            let K = Array.isArray(A.skills) ? A.skills : [A.skills],
                D = [];
            for (let H of K) {
                let C = i4(J, H);
                if (g(`Checking skill path: TextComponent{H} -> TextComponent{C} (exists: TextComponent{I.existsSync(C)})`), I.existsSync(C)) D.push(C);
                else g(`Skill path TextComponent{H} from marketplace entry not found at TextComponent{C} for TextComponent{A.name}`, {
                    level: "warn"
                }), e(Error(`Plugin component file not found: TextComponent{C} for TextComponent{A.name}`)), Y.push({
                    type: "path-not-found",
                    source: B,
                    plugin: A.name,
                    path: C,
                    component: "skills"
                })
            }
            if (g(`Found TextComponent{D.length} valid skill paths for plugin TextComponent{A.name}, setting skillsPaths`), D.length > 0) F.skillsPaths = D
        } else g(`Plugin TextComponent{A.name} has no entry.skills defined`);
        if (A.outputStyles) {
            let K = Array.isArray(A.outputStyles) ? A.outputStyles : [A.outputStyles],
                D = [];
            for (let H of K) {
                let C = i4(J, H);
                if (I.existsSync(C)) D.push(C);
                else g(`Output style path TextComponent{H} from marketplace entry not found at TextComponent{C} for TextComponent{A.name}`, {
                    level: "warn"
                }), e(Error(`Plugin component file not found: TextComponent{C} for TextComponent{A.name}`)), Y.push({
                    type: "path-not-found",
                    source: B,
                    plugin: A.name,
                    path: C,
                    component: "output-styles"
                })
            }
            if (D.length > 0) F.outputStylesPaths = D
        }
        if (A.hooks) F.hooksConfig = A.hooks
    } else if (!A.strict && X && (A.commands || A.agents || A.skills || A.hooks || A.outputStyles)) {
        let K = Error(`Plugin TextComponent{A.name} has both plugin.json and marketplace manifest entries for commands/agents/skills/hooks/outputStyles. This is a conflict.`);
        return g(`Plugin TextComponent{A.name} has both plugin.json and marketplace manifest entries for commands/agents/skills/hooks/outputStyles. This is a conflict.`, {
            level: "error"
        }), e(K), Z.push({
            type: "generic-error",
            source: B,
            error: `Plugin TextComponent{A.name} has conflicting manifests: both plugin.json and marketplace entry specify components. Set strict: true in marketplace entry or remove component specs from one location.`
        }), null
    } else if (X) {
        if (A.commands) {
            let K = Object.values(A.commands)[0];
            if (typeof A.commands === "object" && !Array.isArray(A.commands) && K && typeof K === "object" && (("source" in K) || ("content" in K))) {
                let D = {
                        ...F.commandsMetadata || {}
                    },
                    H = [];
                for (let [C, E] of Object.entries(A.commands)) {
                    if (!E || typeof E !== "object" || !E.source) continue;
                    let z = i4(J, E.source);
                    if (I.existsSync(z)) H.push(z), D[C] = E;
                    else g(`Command TextComponent{C} path TextComponent{E.source} from marketplace entry not found at TextComponent{z} for TextComponent{A.name}`, {
                        level: "warn"
                    }), e(Error(`Plugin component file not found: TextComponent{z} for TextComponent{A.name}`)), Y.push({
                        type: "path-not-found",
                        source: B,
                        plugin: A.name,
                        path: z,
                        component: "commands"
                    })
                }
                if (H.length > 0) F.commandsPaths = [...F.commandsPaths || [], ...H], F.commandsMetadata = D
            } else {
                let D = Array.isArray(A.commands) ? A.commands : [A.commands],
                    H = [];
                for (let C of D) {
                    if (typeof C !== "string") {
                        g(`Unexpected command format in marketplace entry for TextComponent{A.name}`, {
                            level: "error"
                        });
                        continue
                    }
                    let E = i4(J, C);
                    if (I.existsSync(E)) H.push(E);
                    else g(`Command path TextComponent{C} from marketplace entry not found at TextComponent{E} for TextComponent{A.name}`, {
                        level: "warn"
                    }), e(Error(`Plugin component file not found: TextComponent{E} for TextComponent{A.name}`)), Y.push({
                        type: "path-not-found",
                        source: B,
                        plugin: A.name,
                        path: E,
                        component: "commands"
                    })
                }
                if (H.length > 0) F.commandsPaths = [...F.commandsPaths || [], ...H]
            }
        }
        if (A.agents) {
            let K = Array.isArray(A.agents) ? A.agents : [A.agents],
                D = [];
            for (let H of K) {
                let C = i4(J, H);
                if (I.existsSync(C)) D.push(C);
                else g(`Agent path TextComponent{H} from marketplace entry not found at TextComponent{C} for TextComponent{A.name}`, {
                    level: "warn"
                }), e(Error(`Plugin component file not found: TextComponent{C} for TextComponent{A.name}`)), Y.push({
                    type: "path-not-found",
                    source: B,
                    plugin: A.name,
                    path: C,
                    component: "agents"
                })
            }
            if (D.length > 0) F.agentsPaths = [...F.agentsPaths || [], ...D]
        }
        if (A.skills) {
            let K = Array.isArray(A.skills) ? A.skills : [A.skills],
                D = [];
            for (let H of K) {
                let C = i4(J, H);
                if (I.existsSync(C)) D.push(C);
                else g(`Skill path TextComponent{H} from marketplace entry not found at TextComponent{C} for TextComponent{A.name}`, {
                    level: "warn"
                }), e(Error(`Plugin component file not found: TextComponent{C} for TextComponent{A.name}`)), Y.push({
                    type: "path-not-found",
                    source: B,
                    plugin: A.name,
                    path: C,
                    component: "skills"
                })
            }
            if (D.length > 0) F.skillsPaths = [...F.skillsPaths || [], ...D]
        }
        if (A.outputStyles) {
            let K = Array.isArray(A.outputStyles) ? A.outputStyles : [A.outputStyles],
                D = [];
            for (let H of K) {
                let C = i4(J, H);
                if (I.existsSync(C)) D.push(C);
                else g(`Output style path TextComponent{H} from marketplace entry not found at TextComponent{C} for TextComponent{A.name}`, {
                    level: "warn"
                }), e(Error(`Plugin component file not found: TextComponent{C} for TextComponent{A.name}`)), Y.push({
                    type: "path-not-found",
                    source: B,
                    plugin: A.name,
                    path: C,
                    component: "output-styles"
                })
            }
            if (D.length > 0) F.outputStylesPaths = [...F.outputStylesPaths || [], ...D]
        }
        if (A.hooks) F.hooksConfig = {
            ...F.hooksConfig || {},
            ...A.hooks
        }
    }
    return Z.push(...Y), F
}
async function Pl8(A) {
    if (A.length === 0) return {
        plugins: [],
        errors: []
    };
    let Q = [],
        B = [],
        G = OA();
    for (let [Z, I] of A.entries()) try {
        let Y = Ul8(I);
        if (!G.existsSync(Y)) {
            g(`Plugin path does not exist: TextComponent{Y}, skipping`, {
                level: "warn"
            }), B.push({
                type: "path-not-found",
                source: `inline[TextComponent{Z}]`,
                path: Y,
                component: "commands"
            });
            continue
        }
        let J = $l8(Y),
            {
                plugin: W,
                errors: X
            } = sQB(Y, `TextComponent{J}@inline`, !0, J);
        W.source = `TextComponent{W.name}@inline`, W.repository = `TextComponent{W.name}@inline`, Q.push(W), B.push(...X), g(`Loaded inline plugin from path: TextComponent{W.name}`)
    } catch (Y) {
        let J = Y instanceof Error ? Y.message : String(Y);
        g(`Failed to load session plugin from TextComponent{I}: TextComponent{J}`, {
            level: "warn"
        }), B.push({
            type: "generic-error",
            source: `inline[TextComponent{Z}]`,
            error: `Failed to load plugin: TextComponent{J}`
        })
    }
    if (Q.length > 0) g(`Loaded TextComponent{Q.length} session-only plugins from --plugin-dir`);
    return {
        plugins: Q,
        errors: B
    }
}

function $3A() {
    y7.cache?.clear?.()
}
var y7;
var NF = lazyLoader(() => {
    o2();
    o0();
    O9();
    S0();
    ho();
    D0();
    u1();
    RB();
    kH();
    YzA();
    I6();
    hQ();
    dQB();
    y7 = t1(async () => {
        let A = await Rl8(),
            Q = [...A.plugins],
            B = [...A.errors],
            G = yE0();
        if (G.length > 0) {
            let Z = await Pl8(G);
            Q.push(...Z.plugins), B.push(...Z.errors)
        }
        return g(`Found TextComponent{Q.length} plugins (TextComponent{Q.filter((Z)=>Z.enabled).length} enabled, TextComponent{Q.filter((Z)=>!Z.enabled).length} disabled)`), {
            enabled: Q.filter((Z) => Z.enabled),
            disabled: Q.filter((Z) => !Z.enabled),
            errors: B
        }
    })
});
var rQB, jl8, Sl8, _l8, kl8, yl8, xl8, vl8, bl8, fl8, ZR7, ylA, IR7;
var XzA = lazyLoader(() => {
    h2();
    rQB = Qw({
        command: EQ(),
        args: CJ(EQ()).optional(),
        env: LR(EQ(), EQ()).optional()
    }), jl8 = Qw({
        name: EQ(),
        email: EQ().email().optional(),
        url: EQ().url().optional()
    }), Sl8 = Qw({
        type: EQ(),
        url: EQ().url()
    }), _l8 = rQB.partial(), kl8 = rQB.extend({
        platform_overrides: LR(EQ(), _l8).optional()
    }), yl8 = Qw({
        type: MR(["python", "node", "binary"]),
        entry_point: EQ(),
        mcp_config: kl8
    }), xl8 = Qw({
        claude_desktop: EQ().optional(),
        platforms: CJ(MR(["darwin", "win32", "linux"])).optional(),
        runtimes: Qw({
            python: EQ().optional(),
            node: EQ().optional()
        }).optional()
    }).passthrough(), vl8 = Qw({
        name: EQ(),
        description: EQ().optional()
    }), bl8 = Qw({
        name: EQ(),
        description: EQ().optional(),
        arguments: CJ(EQ()).optional(),
        text: EQ()
    }), fl8 = Qw({
        type: MR(["string", "number", "boolean", "directory", "file"]),
        title: EQ(),
        description: EQ(),
        required: UV().optional(),
        default: Br([EQ(), uN(), UV(), CJ(EQ())]).optional(),
        multiple: UV().optional(),
        sensitive: UV().optional(),
        min: uN().optional(),
        max: uN().optional()
    }), ZR7 = LR(EQ(), Br([EQ(), uN(), UV(), CJ(EQ())])), ylA = Qw({
        $schema: EQ().optional(),
        dxt_version: EQ().optional().describe("@deprecated Use manifest_version instead"),
        manifest_version: EQ().optional(),
        name: EQ(),
        display_name: EQ().optional(),
        version: EQ(),
        description: EQ(),
        long_description: EQ().optional(),
        author: jl8,
        repository: Sl8.optional(),
        homepage: EQ().url().optional(),
        documentation: EQ().url().optional(),
        support: EQ().url().optional(),
        icon: EQ().optional(),
        screenshots: CJ(EQ()).optional(),
        server: yl8,
        tools: CJ(vl8).optional(),
        tools_generated: UV().optional(),
        prompts: CJ(bl8).optional(),
        prompts_generated: UV().optional(),
        keywords: CJ(EQ()).optional(),
        license: EQ().optional(),
        privacy_policies: CJ(EQ()).optional(),
        compatibility: xl8.optional(),
        user_config: LR(EQ(), fl8).optional()
    }).refine((A) => !!(A.dxt_version || A.manifest_version), {
        message: "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided"
    }), IR7 = Qw({
        status: MR(["signed", "unsigned", "self-signed"]),
        publisher: EQ().optional(),
        issuer: EQ().optional(),
        valid_from: EQ().optional(),
        valid_to: EQ().optional(),
        fingerprint: EQ().optional()
    })
});
var Vx1 = lazyLoader(() => {
    XzA()
});
import {
    createRequire as gl8
} from "module";

function rl8(A, Q, B) {
    if (!B) B = Q, Q = {};
    if (typeof B != "function") rC(7);
    return sl8(A, Q, [al8], function(G) {
        return MULTI_EDIT_TOOL_DESCRIPTION(zx1(G.data[0], WRITE_TOOL_DESCRIPTION(G.data[1])))
    }, 1, B)
}

function zx1(A, Q) {
    return FBB(A, {
        i: 2
    }, Q && Q.out, Q && Q.dictionary)
}

function el8(A, Q) {
    if (Q) {
        var B = "";
        for (var G = 0; G < A.length; G += 16384) B += String.fromCharCode.apply(null, A.subarray(G, G + 16384));
        return B
    } else if (Dx1) return Dx1.decode(A);
    else {
        var Z = tl8(A),
            I = Z.s,
            B = Z.r;
        if (B.length) rC(8);
        return I
    }
}

function DBB(A, Q, B) {
    if (!B) B = Q, Q = {};
    if (typeof B != "function") rC(7);
    var G = [],
        Z = function() {
            for (var E = 0; E < G.length; ++E) G[E]()
        },
        I = {},
        Y = function(E, z) {
            tQB(function() {
                B(E, z)
            })
        };
    tQB(function() {
        Y = B
    });
    var J = A.length - 22;
    for (; eR(A, J) != 101010256; --J)
        if (!J || A.length - J > 65558) return Y(rC(13, 0, 1), null), Z;
    var W = X_(A, J + 8);
    if (W) {
        var X = W,
            F = eR(A, J + 16),
            V = F == 4294967295 || X == 65535;
        if (V) {
            var K = eR(A, J - 12);
            if (V = eR(A, K) == 101075792, V) X = W = eR(A, K + 32), F = eR(A, K + 48)
        }
        var D = Q && Q.filter,
            H = function(E) {
                var z = Qi8(A, F, V),
                    w = z[0],
                    N = z[1],
                    q = z[2],
                    R = z[3],
                    P = z[4],
                    y = z[5],
                    v = Ai8(A, y);
                F = P;
                var x = function(u, o) {
                    if (u) Z(), Y(u, null);
                    else {
                        if (o) I[R] = o;
                        if (!--W) Y(null, I)
                    }
                };
                if (!D || D({
                        name: R,
                        size: N,
                        originalSize: q,
                        compression: w
                    }))
                    if (!w) x(null, glA(A, v, v + N));
                    else if (w == 8) {
                    var p = A.subarray(v, v + N);
                    if (q < 524288 || N > 0.8 * q) try {
                        x(null, zx1(p, {
                            out: new oC(q)
                        }))
                    } catch (u) {
                        x(u, null)
                    } else G.push(rl8(p, {
                        size: q
                    }, x))
                } else x(rC(14, "unknown compression type " + w, 1), null);
                else x(null, null)
            };
        for (var C = 0; C < X; ++C) H(C)
    } else Y(null, {});
    return Z
}
var ul8, vlA, ml8 = ";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global",
    dl8, oC, mo, eQB, Hx1, Cx1, ABB, QBB = function(A, Q) {
        var B = new mo(31);
        for (var G = 0; G < 31; ++G) B[G] = Q += 1 << A[G - 1];
        var Z = new eQB(B[30]);
        for (var G = 1; G < 30; ++G)
            for (var I = B[G]; I < B[G + 1]; ++I) Z[I] = I - B[G] << 5 | G;
        return {
            b: B,
            r: Z
        }
    },
    BBB, Ex1, cl8, GBB, ZBB, FR7, hlA, W_, n6, w3A = function(A, Q, B) {
        var G = A.length,
            Z = 0,
            I = new mo(Q);
        for (; Z < G; ++Z)
            if (A[Z]) ++I[A[Z] - 1];
        var Y = new mo(Q);
        for (Z = 1; Z < Q; ++Z) Y[Z] = Y[Z - 1] + I[Z - 1] << 1;
        var J;
        if (B) {
            J = new mo(1 << Q);
            var W = 15 - Q;
            for (Z = 0; Z < G; ++Z)
                if (A[Z]) {
                    var X = Z << 4 | A[Z],
                        F = Q - A[Z],
                        V = Y[A[Z] - 1]++ << F;
                    for (var K = V | (1 << F) - 1; V <= K; ++V) J[hlA[V] >> W] = X
                }
        } else {
            J = new mo(G);
            for (Z = 0; Z < G; ++Z)
                if (A[Z]) J[Z] = hlA[Y[A[Z] - 1]++] >> 15 - A[Z]
        }
        return J
    },
    FzA, n6, n6, n6, n6, IBB, n6, YBB, JBB, blA = function(A) {
        var Q = A[0];
        for (var B = 1; B < A.length; ++B)
            if (A[B] > Q) Q = A[B];
        return Q
    },
    iL = function(A, Q, B) {
        var G = Q / 8 | 0;
        return (A[G] | A[G + 1] << 8) >> (Q & 7) & B
    },
    flA = function(A, Q) {
        var B = Q / 8 | 0;
        return (A[B] | A[B + 1] << 8 | A[B + 2] << 16) >> (Q & 7)
    },
    WBB = function(A) {
        return (A + 7) / 8 | 0
    },
    glA = function(A, Q, B) {
        if (Q == null || Q < 0) Q = 0;
        if (B == null || B > A.length) B = A.length;
        return new oC(A.subarray(Q, B))
    },
    XBB, rC = function(A, Q, B) {
        var G = Error(Q || XBB[A]);
        if (G.code = A, Error.captureStackTrace) Error.captureStackTrace(G, rC);
        if (!B) throw G;
        return G
    },
    FBB = function(A, Q, B, G) {
        var Z = A.length,
            I = G ? G.length : 0;
        if (!Z || Q.f && !Q.l) return B || new oC(0);
        var Y = !B,
            J = Y || Q.i != 2,
            W = Q.i;
        if (Y) B = new oC(Z * 3);
        var X = function(zA) {
                var $A = B.length;
                if (zA > $A) {
                    var LA = new oC(Math.max($A * 2, zA));
                    LA.set(B), B = LA
                }
            },
            F = Q.f || 0,
            V = Q.p || 0,
            K = Q.b || 0,
            D = Q.l,
            H = Q.d,
            C = Q.m,
            E = Q.n,
            z = Z * 8;
        do {
            if (!D) {
                F = iL(A, V, 1);
                var w = iL(A, V + 1, 3);
                if (V += 3, !w) {
                    var N = WBB(V) + 4,
                        q = A[N - 4] | A[N - 3] << 8,
                        R = N + q;
                    if (R > Z) {
                        if (W) rC(0);
                        break
                    }
                    if (J) X(K + q);
                    B.set(A.subarray(N, R), K), Q.b = K += q, Q.p = V = R * 8, Q.f = F;
                    continue
                } else if (w == 1) D = YBB, H = JBB, C = 9, E = 5;
                else if (w == 2) {
                    var P = iL(A, V, 31) + 257,
                        y = iL(A, V + 10, 15) + 4,
                        v = P + iL(A, V + 5, 31) + 1;
                    V += 14;
                    var x = new oC(v),
                        p = new oC(19);
                    for (var u = 0; u < y; ++u) p[ABB[u]] = iL(A, V + u * 3, 7);
                    V += y * 3;
                    var o = blA(p),
                        l = (1 << o) - 1,
                        k = w3A(p, o, 1);
                    for (var u = 0; u < v;) {
                        var d = k[iL(A, V, l)];
                        V += d & 15;
                        var N = d >> 4;
                        if (N < 16) x[u++] = N;
                        else {
                            var QA = 0,
                                IA = 0;
                            if (N == 16) IA = 3 + iL(A, V, 3), V += 2, QA = x[u - 1];
                            else if (N == 17) IA = 3 + iL(A, V, 7), V += 3;
                            else if (N == 18) IA = 11 + iL(A, V, 127), V += 7;
                            while (IA--) x[u++] = QA
                        }
                    }
                    var HA = x.subarray(0, P),
                        wA = x.subarray(P);
                    C = blA(HA), E = blA(wA), D = w3A(HA, C, 1), H = w3A(wA, E, 1)
                } else rC(1);
                if (V > z) {
                    if (W) rC(0);
                    break
                }
            }
            if (J) X(K + 131072);
            var KA = (1 << C) - 1,
                SA = (1 << E) - 1,
                sA = V;
            for (;; sA = V) {
                var QA = D[flA(A, V) & KA],
                    NA = QA >> 4;
                if (V += QA & 15, V > z) {
                    if (W) rC(0);
                    break
                }
                if (!QA) rC(2);
                if (NA < 256) B[K++] = NA;
                else if (NA == 256) {
                    sA = V, D = null;
                    break
                } else {
                    var qA = NA - 254;
                    if (NA > 264) {
                        var u = NA - 257,
                            DA = Hx1[u];
                        qA = iL(A, V, (1 << DA) - 1) + Ex1[u], V += DA
                    }
                    var yA = H[flA(A, V) & SA],
                        rA = yA >> 4;
                    if (!yA) rC(3);
                    V += yA & 15;
                    var wA = ZBB[rA];
                    if (rA > 3) {
                        var DA = Cx1[rA];
                        wA += flA(A, V) & (1 << DA) - 1, V += DA
                    }
                    if (V > z) {
                        if (W) rC(0);
                        break
                    }
                    if (J) X(K + 131072);
                    var K1 = K + qA;
                    if (K < wA) {
                        var WA = I - wA,
                            XA = Math.min(wA, K1);
                        if (WA + K < 0) rC(3);
                        for (; K < XA; ++K) B[K] = G[WA + K]
                    }
                    for (; K < K1; ++K) B[K] = B[K - wA]
                }
            }
            if (Q.l = D, Q.p = sA, Q.b = K, Q.f = F, D) F = 1, Q.m = C, Q.d = H, Q.n = E
        } while (!F);
        return K != B.length && Y ? glA(B, 0, K) : B.subarray(0, K)
    },
    pl8, ll8 = function(A, Q) {
        var B = {};
        for (var G in A) B[G] = A[G];
        for (var G in Q) B[G] = Q[G];
        return B
    },
    oQB = function(A, Q, B) {
        var G = A(),
            Z = A.toString(),
            I = Z.slice(Z.indexOf("[") + 1, Z.lastIndexOf("]")).replace(/\s+/g, "").split(",");
        for (var Y = 0; Y < G.length; ++Y) {
            var J = G[Y],
                W = I[Y];
            if (typeof J == "function") {
                Q += ";" + W + "=";
                var X = J.toString();
                if (J.prototype)
                    if (X.indexOf("[native code]") != -1) {
                        var F = X.indexOf(" ", 8) + 1;
                        Q += X.slice(F, X.indexOf("(", F))
                    } else {
                        Q += X;
                        for (var V in J.prototype) Q += ";" + W + ".prototype." + V + "=" + J.prototype[V].toString()
                    }
                else Q += X
            } else B[W] = J
        }
        return Q
    },
    xlA, il8 = function(A) {
        var Q = [];
        for (var B in A)
            if (A[B].buffer) Q.push((A[B] = new A[B].constructor(A[B])).buffer);
        return Q
    },
    nl8 = function(A, Q, B, G) {
        if (!xlA[B]) {
            var Z = "",
                I = {},
                Y = A.length - 1;
            for (var J = 0; J < Y; ++J) Z = oQB(A[J], Z, I);
            xlA[B] = {
                c: oQB(A[Y], Z, I),
                e: I
            }
        }
        var W = ll8({}, xlA[B].e);
        return dl8(xlA[B].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + Q.toString() + "}", B, W, il8(W), G)
    },
    al8 = function() {
        return [oC, mo, eQB, Hx1, Cx1, ABB, Ex1, ZBB, YBB, JBB, hlA, XBB, w3A, blA, iL, flA, WBB, glA, rC, FBB, zx1, MULTI_EDIT_TOOL_DESCRIPTION, WRITE_TOOL_DESCRIPTION]
    },
    MULTI_EDIT_TOOL_DESCRIPTION = function(A) {
        return postMessage(A, [A.buffer])
    },
    WRITE_TOOL_DESCRIPTION = function(A) {
        return A && {
            out: A.size && new oC(A.size),
            dictionary: A.dictionary
        }
    },
    sl8 = function(A, Q, B, G, Z, I) {
        var Y = nl8(B, G, Z, function(J, W) {
            Y.terminate(), I(J, W)
        });
        return Y.postMessage([A, Q], Q.consume ? [A.buffer] : []),
            function() {
                Y.terminate()
            }
    },
    X_ = function(A, Q) {
        return A[Q] | A[Q + 1] << 8
    },
    eR = function(A, Q) {
        return (A[Q] | A[Q + 1] << 8 | A[Q + 2] << 16 | A[Q + 3] << 24) >>> 0
    },
    Kx1 = function(A, Q) {
        return eR(A, Q) + eR(A, Q + 4) * 4294967296
    },
    Dx1, ol8 = 0,
    tl8 = function(A) {
        for (var Q = "", B = 0;;) {
            var G = A[B++],
                Z = (G > 127) + (G > 223) + (G > 239);
            if (B + Z > A.length) return {
                s: Q,
                r: glA(A, B - 1)
            };
            if (!Z) Q += String.fromCharCode(G);
            else if (Z == 3) G = ((G & 15) << 18 | (A[B++] & 63) << 12 | (A[B++] & 63) << 6 | A[B++] & 63) - 65536, Q += String.fromCharCode(55296 | G >> 10, 56320 | G & 1023);
            else if (Z & 1) Q += String.fromCharCode((G & 31) << 6 | A[B++] & 63);
            else Q += String.fromCharCode((G & 15) << 12 | (A[B++] & 63) << 6 | A[B++] & 63)
        }
    },
    Ai8 = function(A, Q) {
        return Q + 30 + X_(A, Q + 26) + X_(A, Q + 28)
    },
    Qi8 = function(A, Q, B) {
        var G = X_(A, Q + 28),
            Z = el8(A.subarray(Q + 46, Q + 46 + G), !(X_(A, Q + 8) & 2048)),
            I = Q + 46 + G,
            Y = eR(A, Q + 20),
            J = B && Y == 4294967295 ? Bi8(A, I) : [Y, eR(A, Q + 24), eR(A, Q + 42)],
            W = J[0],
            X = J[1],
            F = J[2];
        return [X_(A, Q + 10), W, X, Z, I + X_(A, Q + 30) + X_(A, Q + 32), F]
    },
    Bi8 = function(A, Q) {
        for (; X_(A, Q) != 1; Q += 4 + X_(A, Q + 2));
        return [Kx1(A, Q + 12), Kx1(A, Q + 4), Kx1(A, Q + 20)]
    },
    tQB;
var HBB = lazyLoader(() => {
    ul8 = gl8("/");
    try {
        vlA = ul8("worker_threads").Worker
    } catch (A) {}
    dl8 = vlA ? function(A, Q, B, G, Z) {
        var I = !1,
            Y = new vlA(A + ml8, {
                eval: !0
            }).on("error", function(J) {
                return Z(J, null)
            }).on("message", function(J) {
                return Z(null, J)
            }).on("exit", function(J) {
                if (J && !I) Z(Error("exited with code " + J), null)
            });
        return Y.postMessage(B, G), Y.terminate = function() {
            return I = !0, vlA.prototype.terminate.call(Y)
        }, Y
    } : function(A, Q, B, G, Z) {
        setImmediate(function() {
            return Z(Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"), null)
        });
        var I = function() {};
        return {
            terminate: I,
            postMessage: I
        }
    }, oC = Uint8Array, mo = Uint16Array, eQB = Int32Array, Hx1 = new oC([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Cx1 = new oC([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), ABB = new oC([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), BBB = QBB(Hx1, 2), Ex1 = BBB.b, cl8 = BBB.r;
    Ex1[28] = 258, cl8[258] = 28;
    GBB = QBB(Cx1, 0), ZBB = GBB.b, FR7 = GBB.r, hlA = new mo(32768);
    for (n6 = 0; n6 < 32768; ++n6) W_ = (n6 & 43690) >> 1 | (n6 & 21845) << 1, W_ = (W_ & 52428) >> 2 | (W_ & 13107) << 2, W_ = (W_ & 61680) >> 4 | (W_ & 3855) << 4, hlA[n6] = ((W_ & 65280) >> 8 | (W_ & 255) << 8) >> 1;
    FzA = new oC(288);
    for (n6 = 0; n6 < 144; ++n6) FzA[n6] = 8;
    for (n6 = 144; n6 < 256; ++n6) FzA[n6] = 9;
    for (n6 = 256; n6 < 280; ++n6) FzA[n6] = 7;
    for (n6 = 280; n6 < 288; ++n6) FzA[n6] = 8;
    IBB = new oC(32);
    for (n6 = 0; n6 < 32; ++n6) IBB[n6] = 5;
    YBB = w3A(FzA, 9, 1), JBB = w3A(IBB, 5, 1), XBB = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], pl8 = new oC(0), xlA = [];
    Dx1 = typeof TextDecoder < "u" && new TextDecoder;
    try {
        Dx1.decode(pl8, {
            stream: !0
        }), ol8 = 1
    } catch (A) {}
    tQB = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(A) {
        A()
    }
});
var clA = moduleWrapper((KR7, dlA) => {
    function zBB(A) {
        return Array.isArray(A) ? A : [A]
    }
    var Gi8 = void 0,
        $x1 = "",
        MAX_INPUT_TOKENS = " ",
        Ux1 = "\\",
        Zi8 = /^\s+TextComponent/,
        Ii8 = /(?:[^\\]|^)\\TextComponent/,
        Yi8 = /^\\!/,
        Ji8 = /^\\#/,
        Wi8 = /\r?\n/g,
        Xi8 = /^\.{0,2}\/|^\.{1,2}TextComponent/,
        Fi8 = /\/TextComponent/,
        q3A = "/",
        TARGET_INPUT_TOKENS = "node-ignore";
    if (typeof Symbol < "u") TARGET_INPUT_TOKENS = Symbol.for("node-ignore");
    var $BB = TARGET_INPUT_TOKENS,
        N3A = (A, Q, B) => {
            return Object.defineProperty(A, Q, {
                value: B
            }), B
        },
        Vi8 = /([0-z])-([0-z])/g,
        wBB = () => !1,
        Ki8 = (A) => A.replace(Vi8, (Q, B, G) => B.charCodeAt(0) <= G.charCodeAt(0) ? Q : $x1),
        Di8 = (A) => {
            let {
                length: Q
            } = A;
            return A.slice(0, Q - Q % 2)
        },
        Hi8 = [
            [/^\uFEFF/, () => $x1],
            [/((?:\\\\)*?)(\\?\s+)TextComponent/, (A, Q, B) => Q + (B.indexOf("\\") === 0 ? MAX_INPUT_TOKENS : $x1)],
            [/(\\+?)\s/g, (A, Q) => {
                let {
                    length: B
                } = Q;
                return Q.slice(0, B - B % 2) + MAX_INPUT_TOKENS
            }],
            [/[\\TextComponent.|*+(){^]/g, (A) => `\\TextComponent{A}`],
            [/(?!\\)\?/g, () => "[^/]"],
            [/^\//, () => "^"],
            [/\//g, () => "\\/"],
            [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"],
            [/^(?=[^^])/, function() {
                return !/\/(?!TextComponent)/.test(this) ? "(?:^|\\/)" : "^"
            }],
            [/\\\/\\\*\\\*(?=\\\/|TextComponent)/g, (A, Q, B) => Q + 6 < B.length ? "(?:\\/[^\\/]+)*" : "\\/.+"],
            [/(^|[^\\]+)(\\\*)+(?=.+)/g, (A, Q, B) => {
                let G = B.replace(/\\\*/g, "[^\\/]*");
                return Q + G
            }],
            [/\\\\\\(?=[TextComponent.|*+(){^])/g, () => Ux1],
            [/\\\\/g, () => Ux1],
            [/(\\)?\[([^\]/]*?)(\\*)(TextComponent|\])/g, (A, Q, B, G, Z) => Q === Ux1 ? `\\[TextComponent{B}TextComponent{Di8(G)}TextComponent{Z}` : Z === "]" ? G.length % 2 === 0 ? `[TextComponent{Ki8(B)}TextComponent{G}]` : "[]" : "[]"],
            [/(?:[^*])TextComponent/, (A) => /\/TextComponent/.test(A) ? `TextComponent{A}TextComponent` : `TextComponent{A}(?=TextComponent|\\/TextComponent)`]
        ],
        Ci8 = /(^|\\\/)?\\\*TextComponent/,
        VzA = "regex",
        ulA = "checkRegex",
        EBB = "_",
        Ei8 = {
            [VzA](A, Q) {
                return `TextComponent{Q?`TextComponent{Q}[^/]+`:"[^/]*"}(?=TextComponent|\\/TextComponent)`
            },
            [ulA](A, Q) {
                return `TextComponent{Q?`TextComponent{Q}[^/]*`:"[^/]*"}(?=TextComponent|\\/TextComponent)`
            }
        },
        zi8 = (A) => Hi8.reduce((Q, [B, G]) => Q.replace(B, G.bind(A)), A),
        mlA = (A) => typeof A === "string",
        Ui8 = (A) => A && mlA(A) && !Zi8.test(A) && !Ii8.test(A) && A.indexOf("#") !== 0,
        $i8 = (A) => A.split(Wi8).filter(Boolean);
    class TODO_WRITE_TOOL_DESCRIPTION {
        constructor(A, Q, B, G, Z, I) {
            this.pattern = A, this.mark = Q, this.negative = Z, N3A(this, "body", B), N3A(this, "ignoreCase", G), N3A(this, "regexPrefix", I)
        }
        get regex() {
            let A = EBB + VzA;
            if (this[A]) return this[A];
            return this._make(VzA, A)
        }
        get checkRegex() {
            let A = EBB + ulA;
            if (this[A]) return this[A];
            return this._make(ulA, A)
        }
        _make(A, Q) {
            let B = this.regexPrefix.replace(Ci8, Ei8[A]),
                G = this.ignoreCase ? new RegExp(B, "i") : new RegExp(B);
            return N3A(this, Q, G)
        }
    }
    var wi8 = ({
        pattern: A,
        mark: Q
    }, B) => {
        let G = !1,
            Z = A;
        if (Z.indexOf("!") === 0) G = !0, Z = Z.substr(1);
        Z = Z.replace(Yi8, "!").replace(Ji8, "#");
        let I = zi8(Z);
        return new TODO_WRITE_TOOL_DESCRIPTION(A, Q, Z, B, G, I)
    };
    class NBB {
        constructor(A) {
            this._ignoreCase = A, this._rules = []
        }
        _add(A) {
            if (A && A[$BB]) {
                this._rules = this._rules.concat(A._rules._rules), this._added = !0;
                return
            }
            if (mlA(A)) A = {
                pattern: A
            };
            if (Ui8(A.pattern)) {
                let Q = wi8(A, this._ignoreCase);
                this._added = !0, this._rules.push(Q)
            }
        }
        add(A) {
            return this._added = !1, zBB(mlA(A) ? $i8(A) : A).forEach(this._add, this), this._added
        }
        test(A, Q, B) {
            let G = !1,
                Z = !1,
                I;
            this._rules.forEach((J) => {
                let {
                    negative: W
                } = J;
                if (Z === W && G !== Z || W && !G && !Z && !Q) return;
                if (!J[B].test(A)) return;
                G = !W, Z = W, I = W ? Gi8 : J
            });
            let Y = {
                ignored: G,
                unignored: Z
            };
            if (I) Y.rule = I;
            return Y
        }
    }
    var qi8 = (A, Q) => {
            throw new Q(A)
        },
        jb = (A, Q, B) => {
            if (!mlA(A)) return B(`path must be a string, but got \`TextComponent{Q}\``, TypeError);
            if (!A) return B("path must not be empty", TypeError);
            if (jb.isNotRelative(A)) return B(`path should be a \`path.relative()\`d string, but got "TextComponent{Q}"`, RangeError);
            return !0
        },
        LBB = (A) => Xi8.test(A);
    jb.isNotRelative = LBB;
    jb.convert = (A) => A;
    class MBB {
        constructor({
            ignorecase: A = !0,
            ignoreCase: Q = A,
            allowRelativePaths: B = !1
        } = {}) {
            N3A(this, $BB, !0), this._rules = new NBB(Q), this._strictPathCheck = !B, this._initCache()
        }
        _initCache() {
            this._ignoreCache = Object.create(null), this._testCache = Object.create(null)
        }
        add(A) {
            if (this._rules.add(A)) this._initCache();
            return this
        }
        addPattern(A) {
            return this.add(A)
        }
        _test(A, Q, B, G) {
            let Z = A && jb.convert(A);
            return jb(Z, A, this._strictPathCheck ? qi8 : wBB), this._t(Z, Q, B, G)
        }
        checkIgnore(A) {
            if (!Fi8.test(A)) return this.test(A);
            let Q = A.split(q3A).filter(Boolean);
            if (Q.pop(), Q.length) {
                let B = this._t(Q.join(q3A) + q3A, this._testCache, !0, Q);
                if (B.ignored) return B
            }
            return this._rules.test(A, !1, ulA)
        }
        _t(A, Q, B, G) {
            if (A in Q) return Q[A];
            if (!G) G = A.split(q3A).filter(Boolean);
            if (G.pop(), !G.length) return Q[A] = this._rules.test(A, B, VzA);
            let Z = this._t(G.join(q3A) + q3A, Q, B, G);
            return Q[A] = Z.ignored ? Z : this._rules.test(A, B, VzA)
        }
        ignores(A) {
            return this._test(A, this._ignoreCache, !1).ignored
        }
        createFilter() {
            return (A) => !this.ignores(A)
        }
        filter(A) {
            return zBB(A).filter(this.createFilter())
        }
        test(A) {
            return this._test(A, this._testCache, !0)
        }
    }
    var wx1 = (A) => new MBB(A),
        Ni8 = (A) => jb(A && jb.convert(A), A, wBB),
        OBB = () => {
            let A = (B) => /^\\\\\?\\/.test(B) || /["<>|\u0000-\u001F]+/u.test(B) ? B : B.replace(/\\/g, "/");
            jb.convert = A;
            let Q = /^[a-z]:\//i;
            jb.isNotRelative = (B) => Q.test(B) || LBB(B)
        };
    if (typeof process < "u" && process.platform === "win32") OBB();
    dlA.exports = wx1;
    wx1.default = wx1;
    dlA.exports.isPathValid = Ni8;
    N3A(dlA.exports, Symbol.for("setupWindows"), OBB)
});
var Li8;
var qx1 = lazyLoader(() => {
    Li8 = esmImport(clA(), 1)
});
var IU = moduleWrapper((Mi8) => {
    Mi8.fromCallback = function(A) {
        return Object.defineProperty(function(...Q) {
            if (typeof Q[Q.length - 1] === "function") A.apply(this, Q);
            else return new Promise((B, G) => {
                Q.push((Z, I) => Z != null ? G(Z) : B(I)), A.apply(this, Q)
            })
        }, "name", {
            value: A.name
        })
    };
    Mi8.fromPromise = function(A) {
        return Object.defineProperty(function(...Q) {
            let B = Q[Q.length - 1];
            if (typeof B !== "function") return A.apply(this, Q);
            else Q.pop(), A.apply(this, Q).then((G) => B(null, G), B)
        }, "name", {
            value: A.name
        })
    }
});
var co = moduleWrapper((Nx1) => {
    var RBB = IU().fromCallback,
        YU = mK(),
        Ti8 = ["access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "opendir", "readdir", "readFile", "readlink", "realpath", "rename", "rm", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile"].filter((A) => {
            return typeof YU[A] === "function"
        });
    Object.assign(Nx1, YU);
    Ti8.forEach((A) => {
        Nx1[A] = RBB(YU[A])
    });
    Nx1.exists = function(A, Q) {
        if (typeof Q === "function") return YU.exists(A, Q);
        return new Promise((B) => {
            return YU.exists(A, B)
        })
    };
    Nx1.read = function(A, Q, B, G, Z, I) {
        if (typeof I === "function") return YU.read(A, Q, B, G, Z, I);
        return new Promise((Y, J) => {
            YU.read(A, Q, B, G, Z, (W, X, F) => {
                if (W) return J(W);
                Y({
                    bytesRead: X,
                    buffer: F
                })
            })
        })
    };
    Nx1.write = function(A, Q, ...B) {
        if (typeof B[B.length - 1] === "function") return YU.write(A, Q, ...B);
        return new Promise((G, Z) => {
            YU.write(A, Q, ...B, (I, Y, J) => {
                if (I) return Z(I);
                G({
                    bytesWritten: Y,
                    buffer: J
                })
            })
        })
    };
    if (typeof YU.writev === "function") Nx1.writev = function(A, Q, ...B) {
        if (typeof B[B.length - 1] === "function") return YU.writev(A, Q, ...B);
        return new Promise((G, Z) => {
            YU.writev(A, Q, ...B, (I, Y, J) => {
                if (I) return Z(I);
                G({
                    bytesWritten: Y,
                    buffers: J
                })
            })
        })
    };
    if (typeof YU.realpath.native === "function") Nx1.realpath.native = RBB(YU.realpath.native);
    else process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?", "Warning", "fs-extra-WARN0003")
});
var PBB = moduleWrapper((ki8, TBB) => {
    var _i8 = nodeRequire("path");
    ki8.checkPath = function(Q) {
        if (process.platform === "win32") {
            if (/[<>:"|?*]/.test(Q.replace(_i8.parse(Q).root, ""))) {
                let G = Error(`Path contains invalid characters: TextComponent{Q}`);
                throw G.code = "EINVAL", G
            }
        }
    }
});
var kBB = moduleWrapper((xi8, Lx1) => {
    var jBB = co(),
        {
            checkPath: SBB
        } = PBB(),
        _BB = (A) => {
            let Q = {
                mode: 511
            };
            if (typeof A === "number") return A;
            return {
                ...Q,
                ...A
            }.mode
        };
    xi8.makeDir = async (A, Q) => {
        return SBB(A), jBB.mkdir(A, {
            mode: _BB(Q),
            recursive: !0
        })
    };
    xi8.makeDirSync = (A, Q) => {
        return SBB(A), jBB.mkdirSync(A, {
            mode: _BB(Q),
            recursive: !0
        })
    }
});
var AT = moduleWrapper((UR7, yBB) => {
    var fi8 = IU().fromPromise,
        {
            makeDir: hi8,
            makeDirSync: Mx1
        } = kBB(),
        Ox1 = fi8(hi8);
    yBB.exports = {
        mkdirs: Ox1,
        mkdirsSync: Mx1,
        mkdirp: Ox1,
        mkdirpSync: Mx1,
        ensureDir: Ox1,
        ensureDirSync: Mx1
    }
});
var zc = moduleWrapper(($R7, vBB) => {
    var gi8 = IU().fromPromise,
        xBB = co();

    function ui8(A) {
        return xBB.access(A).then(() => !0).catch(() => !1)
    }
    vBB.exports = {
        pathExists: gi8(ui8),
        pathExistsSync: xBB.existsSync
    }
});
var Rx1 = moduleWrapper((wR7, bBB) => {
    var L3A = mK();

    function mi8(A, Q, B, G) {
        L3A.open(A, "r+", (Z, I) => {
            if (Z) return G(Z);
            L3A.futimes(I, Q, B, (Y) => {
                L3A.close(I, (J) => {
                    if (G) G(Y || J)
                })
            })
        })
    }

    function di8(A, Q, B) {
        let G = L3A.openSync(A, "r+");
        return L3A.futimesSync(G, Q, B), L3A.closeSync(G)
    }
    bBB.exports = {
        utimesMillis: mi8,
        utimesMillisSync: di8
    }
});
var po = moduleWrapper((qR7, gBB) => {
    var M3A = co(),
        jV = nodeRequire("path"),
        ci8 = nodeRequire("util");

    function pi8(A, Q, B) {
        let G = B.dereference ? (Z) => M3A.stat(Z, {
            bigint: !0
        }) : (Z) => M3A.lstat(Z, {
            bigint: !0
        });
        return Promise.all([G(A), G(Q).catch((Z) => {
            if (Z.code === "ENOENT") return null;
            throw Z
        })]).then(([Z, I]) => ({
            srcStat: Z,
            destStat: I
        }))
    }

    function li8(A, Q, B) {
        let G, Z = B.dereference ? (Y) => M3A.statSync(Y, {
                bigint: !0
            }) : (Y) => M3A.lstatSync(Y, {
                bigint: !0
            }),
            I = Z(A);
        try {
            G = Z(Q)
        } catch (Y) {
            if (Y.code === "ENOENT") return {
                srcStat: I,
                destStat: null
            };
            throw Y
        }
        return {
            srcStat: I,
            destStat: G
        }
    }

    function ii8(A, Q, B, G, Z) {
        ci8.callbackify(pi8)(A, Q, G, (I, Y) => {
            if (I) return Z(I);
            let {
                srcStat: J,
                destStat: W
            } = Y;
            if (W) {
                if (KzA(J, W)) {
                    let X = jV.basename(A),
                        F = jV.basename(Q);
                    if (B === "move" && X !== F && X.toLowerCase() === F.toLowerCase()) return Z(null, {
                        srcStat: J,
                        destStat: W,
                        isChangingCase: !0
                    });
                    return Z(Error("Source and destination must not be the same."))
                }
                if (J.isDirectory() && !W.isDirectory()) return Z(Error(`Cannot overwrite non-directory 'TextComponent{Q}' with directory 'TextComponent{A}'.`));
                if (!J.isDirectory() && W.isDirectory()) return Z(Error(`Cannot overwrite directory 'TextComponent{Q}' with non-directory 'TextComponent{A}'.`))
            }
            if (J.isDirectory() && Tx1(A, Q)) return Z(Error(plA(A, Q, B)));
            return Z(null, {
                srcStat: J,
                destStat: W
            })
        })
    }

    function ni8(A, Q, B, G) {
        let {
            srcStat: Z,
            destStat: I
        } = li8(A, Q, G);
        if (I) {
            if (KzA(Z, I)) {
                let Y = jV.basename(A),
                    J = jV.basename(Q);
                if (B === "move" && Y !== J && Y.toLowerCase() === J.toLowerCase()) return {
                    srcStat: Z,
                    destStat: I,
                    isChangingCase: !0
                };
                throw Error("Source and destination must not be the same.")
            }
            if (Z.isDirectory() && !I.isDirectory()) throw Error(`Cannot overwrite non-directory 'TextComponent{Q}' with directory 'TextComponent{A}'.`);
            if (!Z.isDirectory() && I.isDirectory()) throw Error(`Cannot overwrite directory 'TextComponent{Q}' with non-directory 'TextComponent{A}'.`)
        }
        if (Z.isDirectory() && Tx1(A, Q)) throw Error(plA(A, Q, B));
        return {
            srcStat: Z,
            destStat: I
        }
    }

    function fBB(A, Q, B, G, Z) {
        let I = jV.resolve(jV.dirname(A)),
            Y = jV.resolve(jV.dirname(B));
        if (Y === I || Y === jV.parse(Y).root) return Z();
        M3A.stat(Y, {
            bigint: !0
        }, (J, W) => {
            if (J) {
                if (J.code === "ENOENT") return Z();
                return Z(J)
            }
            if (KzA(Q, W)) return Z(Error(plA(A, B, G)));
            return fBB(A, Q, Y, G, Z)
        })
    }

    function hBB(A, Q, B, G) {
        let Z = jV.resolve(jV.dirname(A)),
            I = jV.resolve(jV.dirname(B));
        if (I === Z || I === jV.parse(I).root) return;
        let Y;
        try {
            Y = M3A.statSync(I, {
                bigint: !0
            })
        } catch (J) {
            if (J.code === "ENOENT") return;
            throw J
        }
        if (KzA(Q, Y)) throw Error(plA(A, B, G));
        return hBB(A, Q, I, G)
    }

    function KzA(A, Q) {
        return Q.ino && Q.dev && Q.ino === A.ino && Q.dev === A.dev
    }

    function Tx1(A, Q) {
        let B = jV.resolve(A).split(jV.sep).filter((Z) => Z),
            G = jV.resolve(Q).split(jV.sep).filter((Z) => Z);
        return B.reduce((Z, I, Y) => Z && G[Y] === I, !0)
    }

    function plA(A, Q, B) {
        return `Cannot TextComponent{B} 'TextComponent{A}' to a subdirectory of itself, 'TextComponent{Q}'.`
    }
    gBB.exports = {
        checkPaths: ii8,
        checkPathsSync: ni8,
        checkParentPaths: fBB,
        checkParentPathsSync: hBB,
        isSrcSubdir: Tx1,
        areIdentical: KzA
    }
});
var nBB = moduleWrapper((NR7, iBB) => {
    var JU = mK(),
        DzA = nodeRequire("path"),
        ai8 = AT().mkdirs,
        si8 = zc().pathExists,
        ri8 = Rx1().utimesMillis,
        HzA = po();

    function oi8(A, Q, B, G) {
        if (typeof B === "function" && !G) G = B, B = {};
        else if (typeof B === "function") B = {
            filter: B
        };
        if (G = G || function() {}, B = B || {}, B.clobber = "clobber" in B ? !!B.clobber : !0, B.overwrite = "overwrite" in B ? !!B.overwrite : B.clobber, B.preserveTimestamps && process.arch === "ia32") process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`, "Warning", "fs-extra-WARN0001");
        HzA.checkPaths(A, Q, "copy", B, (Z, I) => {
            if (Z) return G(Z);
            let {
                srcStat: Y,
                destStat: J
            } = I;
            HzA.checkParentPaths(A, Y, Q, "copy", (W) => {
                if (W) return G(W);
                if (B.filter) return dBB(uBB, J, A, Q, B, G);
                return uBB(J, A, Q, B, G)
            })
        })
    }

    function uBB(A, Q, B, G, Z) {
        let I = DzA.dirname(B);
        si8(I, (Y, J) => {
            if (Y) return Z(Y);
            if (J) return llA(A, Q, B, G, Z);
            ai8(I, (W) => {
                if (W) return Z(W);
                return llA(A, Q, B, G, Z)
            })
        })
    }

    function dBB(A, Q, B, G, Z, I) {
        Promise.resolve(Z.filter(B, G)).then((Y) => {
            if (Y) return A(Q, B, G, Z, I);
            return I()
        }, (Y) => I(Y))
    }

    function ti8(A, Q, B, G, Z) {
        if (G.filter) return dBB(llA, A, Q, B, G, Z);
        return llA(A, Q, B, G, Z)
    }

    function llA(A, Q, B, G, Z) {
        (G.dereference ? JU.stat : JU.lstat)(Q, (Y, J) => {
            if (Y) return Z(Y);
            if (J.isDirectory()) return In8(J, A, Q, B, G, Z);
            else if (J.isFile() || J.isCharacterDevice() || J.isBlockDevice()) return ei8(J, A, Q, B, G, Z);
            else if (J.isSymbolicLink()) return Wn8(A, Q, B, G, Z);
            else if (J.isSocket()) return Z(Error(`Cannot copy a socket file: TextComponent{Q}`));
            else if (J.isFIFO()) return Z(Error(`Cannot copy a FIFO pipe: TextComponent{Q}`));
            return Z(Error(`Unknown file: TextComponent{Q}`))
        })
    }

    function ei8(A, Q, B, G, Z, I) {
        if (!Q) return cBB(A, B, G, Z, I);
        return An8(A, B, G, Z, I)
    }

    function An8(A, Q, B, G, Z) {
        if (G.overwrite) JU.unlink(B, (I) => {
            if (I) return Z(I);
            return cBB(A, Q, B, G, Z)
        });
        else if (G.errorOnExist) return Z(Error(`'TextComponent{B}' already exists`));
        else return Z()
    }

    function cBB(A, Q, B, G, Z) {
        JU.copyFile(Q, B, (I) => {
            if (I) return Z(I);
            if (G.preserveTimestamps) return Qn8(A.mode, Q, B, Z);
            return ilA(B, A.mode, Z)
        })
    }

    function Qn8(A, Q, B, G) {
        if (Bn8(A)) return Gn8(B, A, (Z) => {
            if (Z) return G(Z);
            return mBB(A, Q, B, G)
        });
        return mBB(A, Q, B, G)
    }

    function Bn8(A) {
        return (A & 128) === 0
    }

    function Gn8(A, Q, B) {
        return ilA(A, Q | 128, B)
    }

    function mBB(A, Q, B, G) {
        Zn8(Q, B, (Z) => {
            if (Z) return G(Z);
            return ilA(B, A, G)
        })
    }

    function ilA(A, Q, B) {
        return JU.chmod(A, Q, B)
    }

    function Zn8(A, Q, B) {
        JU.stat(A, (G, Z) => {
            if (G) return B(G);
            return ri8(Q, Z.atime, Z.mtime, B)
        })
    }

    function In8(A, Q, B, G, Z, I) {
        if (!Q) return Yn8(A.mode, B, G, Z, I);
        return pBB(B, G, Z, I)
    }

    function Yn8(A, Q, B, G, Z) {
        JU.mkdir(B, (I) => {
            if (I) return Z(I);
            pBB(Q, B, G, (Y) => {
                if (Y) return Z(Y);
                return ilA(B, A, Z)
            })
        })
    }

    function pBB(A, Q, B, G) {
        JU.readdir(A, (Z, I) => {
            if (Z) return G(Z);
            return lBB(I, A, Q, B, G)
        })
    }

    function lBB(A, Q, B, G, Z) {
        let I = A.pop();
        if (!I) return Z();
        return Jn8(A, I, Q, B, G, Z)
    }

    function Jn8(A, Q, B, G, Z, I) {
        let Y = DzA.join(B, Q),
            J = DzA.join(G, Q);
        HzA.checkPaths(Y, J, "copy", Z, (W, X) => {
            if (W) return I(W);
            let {
                destStat: F
            } = X;
            ti8(F, Y, J, Z, (V) => {
                if (V) return I(V);
                return lBB(A, B, G, Z, I)
            })
        })
    }

    function Wn8(A, Q, B, G, Z) {
        JU.readlink(Q, (I, Y) => {
            if (I) return Z(I);
            if (G.dereference) Y = DzA.resolve(process.cwd(), Y);
            if (!A) return JU.symlink(Y, B, Z);
            else JU.readlink(B, (J, W) => {
                if (J) {
                    if (J.code === "EINVAL" || J.code === "UNKNOWN") return JU.symlink(Y, B, Z);
                    return Z(J)
                }