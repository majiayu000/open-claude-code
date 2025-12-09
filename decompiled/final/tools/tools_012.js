/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: tools_012.js
 * 处理时间: 2025-12-09T03:41:38.684Z
 * 变量映射: 5 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * ZQ       (  4x) execGit(cmd, args) - Execute git command
 * UA       (  3x) require(name) - Node require
 * Pq       (  2x) SKILL_TOOL = "Skill"
 * kRA      (  2x) EXIT_PLAN_MODE_CONST = "ExitPlanMode"
 * GA       (  1x) esmImport(module) - ESM import
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 12/25
 * Lines: 345418 - 346916 (1499 lines)
 * Original file: cli.js
 */

            if (F += A.dump + (A.condenseFlow ? '"' : "") + ":" + (A.condenseFlow ? "" : " "), !uh(A, Q, X, !1, !1)) continue;
            F += A.dump, G += F
        }
        A.tag = Z, A.dump = "{" + G + "}"
    }

    function Nd5(A, Q, B, G) {
        var Z = "",
            I = A.tag,
            Y = Object.keys(B),
            J, W, X, F, V, K;
        if (A.sortKeys === !0) Y.sort();
        else if (typeof A.sortKeys === "function") Y.sort(A.sortKeys);
        else if (A.sortKeys) throw new mRA("sortKeys must be a boolean or a function");
        for (J = 0, W = Y.length; J < W; J += 1) {
            if (K = "", !G || Z !== "") K += Q30(A, Q);
            if (X = Y[J], F = B[X], A.replacer) F = A.replacer.call(B, X, F);
            if (!uh(A, Q + 1, X, !0, !0, !0)) continue;
            if (V = A.tag !== null && A.tag !== "?" || A.dump && A.dump.length > 1024, V)
                if (A.dump && hRA === A.dump.charCodeAt(0)) K += "?";
                else K += "? ";
            if (K += A.dump, V) K += Q30(A, Q);
            if (!uh(A, Q + 1, F, !0, V)) continue;
            if (A.dump && hRA === A.dump.charCodeAt(0)) K += ":";
            else K += ": ";
            K += A.dump, Z += K
        }
        A.tag = I, A.dump = Z || "{}"
    }

    function Ux2(A, Q, B) {
        var G, Z, I, Y, J, W;
        Z = B ? A.explicitTypes : A.implicitTypes;
        for (I = 0, Y = Z.length; I < Y; I += 1)
            if (J = Z[I], (J.instanceOf || J.predicate) && (!J.instanceOf || typeof Q === "object" && Q instanceof J.instanceOf) && (!J.predicate || J.predicate(Q))) {
                if (B)
                    if (J.multi && J.representName) A.tag = J.representName(Q);
                    else A.tag = J.tag;
                else A.tag = "?";
                if (J.represent) {
                    if (W = A.styleMap[J.tag] || J.defaultStyle, $x2.call(J.represent) === "[object Function]") G = J.represent(Q, W);
                    else if (wx2.call(J.represent, W)) G = J.represent[W](Q, W);
                    else throw new mRA("!<" + J.tag + '> tag resolver accepts not "' + W + '" style');
                    A.dump = G
                }
                return !0
            } return !1
    }

    function uh(A, Q, B, G, Z, I, Y) {
        if (A.tag = null, A.dump = B, !Ux2(A, B, !1)) Ux2(A, B, !0);
        var J = $x2.call(A.dump),
            W = G,
            X;
        if (G) G = A.flowLevel < 0 || A.flowLevel > Q;
        var F = J === "[object Object]" || J === "[object Array]",
            V, K;
        if (F) V = A.duplicates.indexOf(B), K = V !== -1;
        if (A.tag !== null && A.tag !== "?" || K || A.indent !== 2 && Q > 0) Z = !1;
        if (K && A.usedDuplicates[V]) A.dump = "*ref_" + V;
        else {
            if (F && K && !A.usedDuplicates[V]) A.usedDuplicates[V] = !0;
            if (J === "[object Object]") {
                if (G && Object.keys(A.dump).length !== 0) {
                    if (Nd5(A, Q, A.dump, Z), K) A.dump = "&ref_" + V + A.dump
                } else if (qd5(A, Q, A.dump), K) A.dump = "&ref_" + V + " " + A.dump
            } else if (J === "[object Array]") {
                if (G && A.dump.length !== 0) {
                    if (A.noArrayIndent && !Y && Q > 0) zx2(A, Q - 1, A.dump, Z);
                    else zx2(A, Q, A.dump, Z);
                    if (K) A.dump = "&ref_" + V + A.dump
                } else if (wd5(A, Q, A.dump), K) A.dump = "&ref_" + V + " " + A.dump
            } else if (J === "[object String]") {
                if (A.tag !== "?") zd5(A, A.dump, Q, I, W)
            } else if (J === "[object Undefined]") return !1;
            else {
                if (A.skipInvalid) return !1;
                throw new mRA("unacceptable kind of an object to dump " + J)
            }
            if (A.tag !== null && A.tag !== "?") {
                if (X = encodeURI(A.tag[0] === "!" ? A.tag.slice(1) : A.tag).replace(/!/g, "%21"), A.tag[0] === "!") X = "!" + X;
                else if (X.slice(0, 18) === "tag:yaml.org,2002:") X = "!!" + X.slice(18);
                else X = "!<" + X + ">";
                A.dump = X + " " + A.dump
            }
        }
        return !0
    }

    function Ld5(A, Q) {
        var B = [],
            G = [],
            Z, I;
        G30(A, B, G);
        for (Z = 0, I = G.length; Z < I; Z += 1) Q.duplicates.push(B[G[Z]]);
        Q.usedDuplicates = Array(I)
    }

    function G30(A, Q, B) {
        var G, Z, I;
        if (A !== null && typeof A === "object")
            if (Z = Q.indexOf(A), Z !== -1) {
                if (B.indexOf(Z) === -1) B.push(Z)
            } else if (Q.push(A), Array.isArray(A))
            for (Z = 0, I = A.length; Z < I; Z += 1) G30(A[Z], Q, B);
        else {
            G = Object.keys(A);
            for (Z = 0, I = G.length; Z < I; Z += 1) G30(A[G[Z]], Q, B)
        }
    }

    function Md5(A, Q) {
        Q = Q || {};
        var B = new Kd5(Q);
        if (!B.noRefs) Ld5(A, B);
        var G = A;
        if (B.replacer) G = B.replacer.call({
            "": G
        }, "", G);
        if (uh(B, 0, G, !0, !0)) return B.dump + `
`;
        return ""
    }
    Od5.dump = Md5
});
var Y30 = U((Pd5, iE) => {
    var kx2 = Fx2(),
        Td5 = _x2();

    function I30(A, Q) {
        return function() {
            throw Error("Function yaml." + A + " is removed in js-yaml 4. Use yaml." + Q + " instead, which is now safe by default.")
        }
    }
    Pd5.Type = IC();
    Pd5.Schema = x50();
    Pd5.FAILSAFE_SCHEMA = h50();
    Pd5.JSON_SCHEMA = A51();
    Pd5.CORE_SCHEMA = A51();
    Pd5.DEFAULT_SCHEMA = Q51();
    Pd5.load = kx2.load;
    Pd5.loadAll = kx2.loadAll;
    Pd5.dump = Td5.dump;
    Pd5.YAMLException = IWA();
    Pd5.types = {
        binary: i50(),
        float: d50(),
        map: f50(),
        null: g50(),
        pairs: a50(),
        set: s50(),
        timestamp: c50(),
        bool: u50(),
        int: m50(),
        merge: p50(),
        omap: n50(),
        seq: b50(),
        str: v50()
    };
    Pd5.safeLoad = I30("safeLoad", "load");
    Pd5.safeLoadAll = I30("safeLoadAll", "loadAll");
    Pd5.safeDump = I30("safeDump", "dump")
});
var xx2 = U((f9Z, yx2) => {
    var {
        ParserError: cd5
    } = OP(), pd5 = Y30(), {
        JSON_SCHEMA: ld5
    } = Y30();
    yx2.exports = {
        order: 200,
        allowEmpty: !0,
        canParse: [".yaml", ".yml", ".json"],
        async parse(A) {
            let Q = A.data;
            if (Buffer.isBuffer(Q)) Q = Q.toString();
            if (typeof Q === "string") try {
                return pd5.load(Q, {
                    schema: ld5
                })
            } catch (B) {
                throw new cd5(B.message, A.url)
            } else return Q
        }
    }
});
var bx2 = U((h9Z, vx2) => {
    var {
        ParserError: id5
    } = OP(), nd5 = /\.(txt|htm|html|md|xml|js|min|map|css|scss|less|svg)$/i;
    vx2.exports = {
        order: 300,
        allowEmpty: !0,
        encoding: "utf8",
        canParse(A) {
            return (typeof A.data === "string" || Buffer.isBuffer(A.data)) && nd5.test(A.url)
        },
        parse(A) {
            if (typeof A.data === "string") return A.data;
            else if (Buffer.isBuffer(A.data)) return A.data.toString(this.encoding);
            else throw new id5("data is not text", A.url)
        }
    }
});
var hx2 = U((g9Z, fx2) => {
    var ad5 = /\.(jpeg|jpg|gif|png|bmp|ico)$/i;
    fx2.exports = {
        order: 400,
        allowEmpty: !0,
        canParse(A) {
            return Buffer.isBuffer(A.data) && ad5.test(A.url)
        },
        parse(A) {
            if (Buffer.isBuffer(A.data)) return A.data;
            else return Buffer.from(A.data)
        }
    }
});
var mx2 = U((u9Z, ux2) => {
    var sd5 = UA("fs"),
        {
            ono: J30
        } = Xn(),
        gx2 = VO(),
        {
            ResolverError: W30
        } = OP();
    ux2.exports = {
        order: 100,
        canRead(A) {
            return gx2.isFileSystemPath(A.url)
        },
        read(A) {
            return new Promise((Q, B) => {
                let G;
                try {
                    G = gx2.toFileSystemPath(A.url)
                } catch (Z) {
                    B(new W30(J30.uri(Z, `Malformed URI: ${A.url}`), A.url))
                }
                try {
                    sd5.readFile(G, (Z, I) => {
                        if (Z) B(new W30(J30(Z, `Error opening file "${G}"`), G));
                        else Q(I)
                    })
                } catch (Z) {
                    B(new W30(J30(Z, `Error opening file "${G}"`), G))
                }
            })
        }
    }
});
var lx2 = U((m9Z, px2) => {
    var rd5 = UA("http"),
        od5 = UA("https"),
        {
            ono: X51
        } = Xn(),
        F51 = VO(),
        {
            ResolverError: dx2
        } = OP();
    px2.exports = {
        order: 200,
        headers: null,
        timeout: 5000,
        redirects: 5,
        withCredentials: !1,
        canRead(A) {
            return F51.isHttp(A.url)
        },
        read(A) {
            let Q = F51.parse(A.url);
            return cx2(Q, this)
        }
    };

    function cx2(A, Q, B) {
        return new Promise((G, Z) => {
            A = F51.parse(A), B = B || [], B.push(A.href), td5(A, Q).then((I) => {
                if (I.statusCode >= 400) throw X51({
                    status: I.statusCode
                }, `HTTP ERROR ${I.statusCode}`);
                else if (I.statusCode >= 300)
                    if (B.length > Q.redirects) Z(new dx2(X51({
                        status: I.statusCode
                    }, `Error downloading ${B[0]}. 
Too many redirects: 
  ${B.join(` 
  `)}`)));
                    else if (!I.headers.location) throw X51({
                    status: I.statusCode
                }, `HTTP ${I.statusCode} redirect with no location header`);
                else {
                    let Y = F51.resolve(A, I.headers.location);
                    cx2(Y, Q, B).then(G, Z)
                } else G(I.body || Buffer.alloc(0))
            }).catch((I) => {
                Z(new dx2(X51(I, `Error downloading ${A.href}`), A.href))
            })
        })
    }

    function td5(A, Q) {
        return new Promise((B, G) => {
            let I = (A.protocol === "https:" ? od5 : rd5).get({
                hostname: A.hostname,
                port: A.port,
                path: A.path,
                auth: A.auth,
                protocol: A.protocol,
                headers: Q.headers || {},
                withCredentials: Q.withCredentials
            });
            if (typeof I.setTimeout === "function") I.setTimeout(Q.timeout);
            I.on("timeout", () => {
                I.abort()
            }), I.on("error", G), I.once("response", (Y) => {
                Y.body = Buffer.alloc(0), Y.on("data", (J) => {
                    Y.body = Buffer.concat([Y.body, Buffer.from(J)])
                }), Y.on("error", G), Y.on("end", () => {
                    B(Y)
                })
            })
        })
    }
});
var ax2 = U((d9Z, nx2) => {
    var ed5 = wy2(),
        Ac5 = xx2(),
        Qc5 = bx2(),
        Bc5 = hx2(),
        Gc5 = mx2(),
        Zc5 = lx2();
    nx2.exports = F30;

    function F30(A) {
        X30(this, F30.defaults), X30(this, A)
    }
    F30.defaults = {
        parse: {
            json: ed5,
            yaml: Ac5,
            text: Qc5,
            binary: Bc5
        },
        resolve: {
            file: Gc5,
            http: Zc5,
            external: !0
        },
        continueOnError: !1,
        dereference: {
            circular: !0,
            excludedPathMatcher: () => !1
        }
    };

    function X30(A, Q) {
        if (ix2(Q)) {
            let B = Object.keys(Q);
            for (let G = 0; G < B.length; G++) {
                let Z = B[G],
                    I = Q[Z],
                    Y = A[Z];
                if (ix2(I)) A[Z] = X30(Y || {}, I);
                else if (I !== void 0) A[Z] = I
            }
        }
        return A
    }

    function ix2(A) {
        return A && typeof A === "object" && !Array.isArray(A) && !(A instanceof RegExp) && !(A instanceof Date)
    }
});
var ox2 = U((c9Z, rx2) => {
    var sx2 = ax2();
    rx2.exports = Ic5;

    function Ic5(A) {
        let Q, B, G, Z;
        if (A = Array.prototype.slice.call(A), typeof A[A.length - 1] === "function") Z = A.pop();
        if (typeof A[0] === "string")
            if (Q = A[0], typeof A[2] === "object") B = A[1], G = A[2];
            else B = void 0, G = A[1];
        else Q = "", B = A[0], G = A[1];
        if (!(G instanceof sx2)) G = new sx2(G);
        return {
            path: Q,
            schema: B,
            options: G,
            callback: Z
        }
    }
});
var Qv2 = U((p9Z, Av2) => {
    var tx2 = GWA(),
        Yc5 = yRA(),
        Jc5 = j50(),
        dRA = VO(),
        {
            isHandledError: Wc5
        } = OP();
    Av2.exports = Xc5;

    function Xc5(A, Q) {
        if (!Q.resolve.external) return Promise.resolve();
        try {
            let B = V30(A.schema, A.$refs._root$Ref.path + "#", A.$refs, Q);
            return Promise.all(B)
        } catch (B) {
            return Promise.reject(B)
        }
    }

    function V30(A, Q, B, G, Z) {
        Z = Z || new Set;
        let I = [];
        if (A && typeof A === "object" && !ArrayBuffer.isView(A) && !Z.has(A))
            if (Z.add(A), tx2.isExternal$Ref(A)) I.push(ex2(A, Q, B, G));
            else
                for (let Y of Object.keys(A)) {
                    let J = Yc5.join(Q, Y),
                        W = A[Y];
                    if (tx2.isExternal$Ref(W)) I.push(ex2(W, J, B, G));
                    else I = I.concat(V30(W, J, B, G, Z))
                }
        return I
    }
    async function ex2(A, Q, B, G) {
        let Z = dRA.resolve(Q, A.$ref),
            I = dRA.stripHash(Z);
        if (A = B._$refs[I], A) return Promise.resolve(A.value);
        try {
            let Y = await Jc5(Z, B, G),
                J = V30(Y, I + "#", B, G);
            return Promise.all(J)
        } catch (Y) {
            if (!G.continueOnError || !Wc5(Y)) throw Y;
            if (B._$refs[I]) Y.source = decodeURI(dRA.stripHash(Q)), Y.path = dRA.safePointerToPath(dRA.getHash(Q));
            return []
        }
    }
});
var Zv2 = U((l9Z, Gv2) => {
    var V51 = GWA(),
        cRA = yRA(),
        K30 = VO();
    Gv2.exports = Fc5;

    function Fc5(A, Q) {
        let B = [];
        D30(A, "schema", A.$refs._root$Ref.path + "#", "#", 0, B, A.$refs, Q), Vc5(B)
    }

    function D30(A, Q, B, G, Z, I, Y, J) {
        let W = Q === null ? A : A[Q];
        if (W && typeof W === "object" && !ArrayBuffer.isView(W))
            if (V51.isAllowed$Ref(W)) Bv2(A, Q, B, G, Z, I, Y, J);
            else {
                let X = Object.keys(W).sort((F, V) => {
                    if (F === "definitions") return -1;
                    else if (V === "definitions") return 1;
                    else return F.length - V.length
                });
                for (let F of X) {
                    let V = cRA.join(B, F),
                        K = cRA.join(G, F),
                        D = W[F];
                    if (V51.isAllowed$Ref(D)) Bv2(W, F, B, K, Z, I, Y, J);
                    else D30(W, F, V, K, Z, I, Y, J)
                }
            }
    }

    function Bv2(A, Q, B, G, Z, I, Y, J) {
        let W = Q === null ? A : A[Q],
            X = K30.resolve(B, W.$ref),
            F = Y._resolve(X, G, J);
        if (F === null) return;
        let V = cRA.parse(G).length,
            K = K30.stripHash(F.path),
            D = K30.getHash(F.path),
            H = K !== Y._root$Ref.path,
            C = V51.isExtended$Ref(W);
        Z += F.indirections;
        let E = Kc5(I, A, Q);
        if (E)
            if (V < E.depth || Z < E.indirections) Dc5(I, E);
            else return;
        if (I.push({
                $ref: W,
                parent: A,
                key: Q,
                pathFromRoot: G,
                depth: V,
                file: K,
                hash: D,
                value: F.value,
                circular: F.circular,
                extended: C,
                external: H,
                indirections: Z
            }), !E) D30(F.value, null, F.path, G, Z + 1, I, Y, J)
    }

    function Vc5(A) {
        A.sort((Z, I) => {
            if (Z.file !== I.file) return Z.file < I.file ? -1 : 1;
            else if (Z.hash !== I.hash) return Z.hash < I.hash ? -1 : 1;
            else if (Z.circular !== I.circular) return Z.circular ? -1 : 1;
            else if (Z.extended !== I.extended) return Z.extended ? 1 : -1;
            else if (Z.indirections !== I.indirections) return Z.indirections - I.indirections;
            else if (Z.depth !== I.depth) return Z.depth - I.depth;
            else {
                let Y = Z.pathFromRoot.lastIndexOf("/definitions"),
                    J = I.pathFromRoot.lastIndexOf("/definitions");
                if (Y !== J) return J - Y;
                else return Z.pathFromRoot.length - I.pathFromRoot.length
            }
        });
        let Q, B, G;
        for (let Z of A)
            if (!Z.external) Z.$ref.$ref = Z.hash;
            else if (Z.file === Q && Z.hash === B) Z.$ref.$ref = G;
        else if (Z.file === Q && Z.hash.indexOf(B + "/") === 0) Z.$ref.$ref = cRA.join(G, cRA.parse(Z.hash.replace(B, "#")));
        else if (Q = Z.file, B = Z.hash, G = Z.pathFromRoot, Z.$ref = Z.parent[Z.key] = V51.dereference(Z.$ref, Z.value), Z.circular) Z.$ref.$ref = Z.pathFromRoot
    }

    function Kc5(A, Q, B) {
        for (let G = 0; G < A.length; G++) {
            let Z = A[G];
            if (Z.parent === Q && Z.key === B) return Z
        }
    }

    function Dc5(A, Q) {
        let B = A.indexOf(Q);
        A.splice(B, 1)
    }
});
var Xv2 = U((i9Z, Wv2) => {
    var H30 = GWA(),
        Iv2 = yRA(),
        {
            ono: Hc5
        } = Xn(),
        Cc5 = VO();
    Wv2.exports = Ec5;

    function Ec5(A, Q) {
        let B = C30(A.schema, A.$refs._root$Ref.path, "#", new Set, new Set, new Map, A.$refs, Q);
        A.$refs.circular = B.circular, A.schema = B.value
    }

    function C30(A, Q, B, G, Z, I, Y, J) {
        let W, X = {
                value: A,
                circular: !1
            },
            F = J.dereference.excludedPathMatcher;
        if (J.dereference.circular === "ignore" || !Z.has(A)) {
            if (A && typeof A === "object" && !ArrayBuffer.isView(A) && !F(B)) {
                if (G.add(A), Z.add(A), H30.isAllowed$Ref(A, J)) W = Yv2(A, Q, B, G, Z, I, Y, J), X.circular = W.circular, X.value = W.value;
                else
                    for (let V of Object.keys(A)) {
                        let K = Iv2.join(Q, V),
                            D = Iv2.join(B, V);
                        if (F(D)) continue;
                        let H = A[V],
                            C = !1;
                        if (H30.isAllowed$Ref(H, J)) {
                            if (W = Yv2(H, K, D, G, Z, I, Y, J), C = W.circular, A[V] !== W.value) A[V] = W.value
                        } else if (!G.has(H)) {
                            if (W = C30(H, K, D, G, Z, I, Y, J), C = W.circular, A[V] !== W.value) A[V] = W.value
                        } else C = Jv2(K, Y, J);
                        X.circular = X.circular || C
                    }
                G.delete(A)
            }
        }
        return X
    }

    function Yv2(A, Q, B, G, Z, I, Y, J) {
        let W = Cc5.resolve(Q, A.$ref),
            X = I.get(W);
        if (X) {
            let C = Object.keys(A);
            if (C.length > 1) {
                let E = {};
                for (let z of C)
                    if (z !== "$ref" && !(z in X.value)) E[z] = A[z];
                return {
                    circular: X.circular,
                    value: Object.assign({}, X.value, E)
                }
            }
            return X
        }
        let F = Y._resolve(W, Q, J);
        if (F === null) return {
            circular: !1,
            value: null
        };
        let V = F.circular,
            K = V || G.has(F.value);
        K && Jv2(Q, Y, J);
        let D = H30.dereference(A, F.value);
        if (!K) {
            let C = C30(D, F.path, B, G, Z, I, Y, J);
            K = C.circular, D = C.value
        }
        if (K && !V && J.dereference.circular === "ignore") D = A;
        if (V) D.$ref = B;
        let H = {
            circular: K,
            value: D
        };
        if (Object.keys(A).length === 1) I.set(W, H);
        return H
    }

    function Jv2(A, Q, B) {
        if (Q.circular = !0, !B.dereference.circular) throw Hc5.reference(`Circular $ref pointer found at ${A}`);
        return !0
    }
});
var Vv2 = U((n9Z, Fv2) => {
    function zc5() {
        if (typeof process === "object" && typeof process.nextTick === "function") return process.nextTick;
        else if (typeof setImmediate === "function") return setImmediate;
        else return function(Q) {
            setTimeout(Q, 0)
        }
    }
    Fv2.exports = zc5()
});
var Hv2 = U((a9Z, Dv2) => {
    var Kv2 = Vv2();
    Dv2.exports = function(Q, B) {
        if (Q) {
            B.then(function(G) {
                Kv2(function() {
                    Q(null, G)
                })
            }, function(G) {
                Kv2(function() {
                    Q(G)
                })
            });
            return
        } else return B
    }
});
var Uv2 = U((s9Z, Uy) => {
    var zv2 = Ky2(),
        Uc5 = j50(),
        K51 = ox2(),
        $c5 = Qv2(),
        wc5 = Zv2(),
        qc5 = Xv2(),
        FWA = VO(),
        {
            JSONParserError: Nc5,
            InvalidPointerError: Lc5,
            MissingPointerError: Mc5,
            ResolverError: Oc5,
            ParserError: Rc5,
            UnmatchedParserError: Tc5,
            UnmatchedResolverError: Pc5,
            isHandledError: jc5,
            JSONParserErrorGroup: Cv2
        } = OP(),
        TP = Hv2(),
        {
            ono: Ev2
        } = Xn();
    Uy.exports = zy;
    Uy.exports.default = zy;
    Uy.exports.JSONParserError = Nc5;
    Uy.exports.InvalidPointerError = Lc5;
    Uy.exports.MissingPointerError = Mc5;
    Uy.exports.ResolverError = Oc5;
    Uy.exports.ParserError = Rc5;
    Uy.exports.UnmatchedParserError = Tc5;
    Uy.exports.UnmatchedResolverError = Pc5;

    function zy() {
        this.schema = null, this.$refs = new zv2
    }
    zy.parse = function(Q, B, G, Z) {
        let Y = new this;
        return Y.parse.apply(Y, arguments)
    };
    zy.prototype.parse = async function(Q, B, G, Z) {
        let I = K51(arguments),
            Y;
        if (!I.path && !I.schema) {
            let X = Ev2(`Expected a file path, URL, or object. Got ${I.path||I.schema}`);
            return TP(I.callback, Promise.reject(X))
        }
        this.schema = null, this.$refs = new zv2;
        let J = "http";
        if (FWA.isFileSystemPath(I.path)) I.path = FWA.fromFileSystemPath(I.path), J = "file";
        if (I.path = FWA.resolve(FWA.cwd(), I.path), I.schema && typeof I.schema === "object") {
            let X = this.$refs._add(I.path);
            X.value = I.schema, X.pathType = J, Y = Promise.resolve(I.schema)
        } else Y = Uc5(I.path, this.$refs, I.options);
        let W = this;
        try {
            let X = await Y;
            if (X !== null && typeof X === "object" && !Buffer.isBuffer(X)) return W.schema = X, TP(I.callback, Promise.resolve(W.schema));
            else if (I.options.continueOnError) return W.schema = null, TP(I.callback, Promise.resolve(W.schema));
            else throw Ev2.syntax(`"${W.$refs._root$Ref.path||X}" is not a valid JSON Schema`)
        } catch (X) {
            if (!I.options.continueOnError || !jc5(X)) return TP(I.callback, Promise.reject(X));
            if (this.$refs._$refs[FWA.stripHash(I.path)]) this.$refs._$refs[FWA.stripHash(I.path)].addError(X);
            return TP(I.callback, Promise.resolve(null))
        }
    };
    zy.resolve = function(Q, B, G, Z) {
        let Y = new this;
        return Y.resolve.apply(Y, arguments)
    };
    zy.prototype.resolve = async function(Q, B, G, Z) {
        let I = this,
            Y = K51(arguments);
        try {
            return await this.parse(Y.path, Y.schema, Y.options), await $c5(I, Y.options), E30(I), TP(Y.callback, Promise.resolve(I.$refs))
        } catch (J) {
            return TP(Y.callback, Promise.reject(J))
        }
    };
    zy.bundle = function(Q, B, G, Z) {
        let Y = new this;
        return Y.bundle.apply(Y, arguments)
    };
    zy.prototype.bundle = async function(Q, B, G, Z) {
        let I = this,
            Y = K51(arguments);
        try {
            return await this.resolve(Y.path, Y.schema, Y.options), wc5(I, Y.options), E30(I), TP(Y.callback, Promise.resolve(I.schema))
        } catch (J) {
            return TP(Y.callback, Promise.reject(J))
        }
    };
    zy.dereference = function(Q, B, G, Z) {
        let Y = new this;
        return Y.dereference.apply(Y, arguments)
    };
    zy.prototype.dereference = async function(Q, B, G, Z) {
        let I = this,
            Y = K51(arguments);
        try {
            return await this.resolve(Y.path, Y.schema, Y.options), qc5(I, Y.options), E30(I), TP(Y.callback, Promise.resolve(I.schema))
        } catch (J) {
            return TP(Y.callback, Promise.reject(J))
        }
    };

    function E30(A) {
        if (Cv2.getParserErrors(A).length > 0) throw new Cv2(A)
    }
});
var $v2 = 40000,
    z30, uD, XK;
var $y = L(() => {
    u1();
    uE();
    o2();
    ED();
    I6();
    z30 = t1(async () => {
        if (!await FT()) return null;
        try {
            let [A, Q, B, G] = await Promise.all([ZQ("git", ["branch", "--show-current"], {
                preserveOutputOnError: !1
            }).then(({
                stdout: I
            }) => I.trim()), ZQ("git", ["rev-parse", "--abbrev-ref", "origin/HEAD"], {
                preserveOutputOnError: !1
            }).then(({
                stdout: I
            }) => I.replace("origin/", "").trim()), ZQ("git", ["status", "--short"], {
                preserveOutputOnError: !1
            }).then(({
                stdout: I
            }) => I.trim()), ZQ("git", ["log", "--oneline", "-n", "5"], {
                preserveOutputOnError: !1
            }).then(({
                stdout: I
            }) => I.trim())]), Z = B.length > $v2 ? B.substring(0, $v2) + `
... (truncated because it exceeds 40k characters. If you need more information, run "git status" using BashTool)` : B;
            return `This is the git status at the start of the conversation. Note that this status is a snapshot in time, and will not update during the conversation.
Current branch: ${A}

Main branch (you will usually use this for PRs): ${Q}

Status:
${Z||"(clean)"}

Recent commits:
${G}`
        } catch (A) {
            return e(A instanceof Error ? A : Error(String(A))), null
        }
    }), uD = t1(async () => {
        let A = await z30();
        return {
            ...A ? {
                gitStatus: A
            } : {}
        }
    }), XK = t1(async () => {
        let Q = process.env.CLAUDE_CODE_DISABLE_CLAUDE_MDS ? null : eG2();
        return {
            ...Q ? {
                claudeMd: Q
            } : {}
        }
    })
});

function Sc5() {
    return Number(process.env.SLASH_COMMAND_TOOL_CHAR_BUDGET) || 15000
}

function wv2(A) {
    let Q = A.name,
        B = A.whenToUse ? `${A.description} - ${A.whenToUse}` : A.description,
        G = A.type === "prompt" ? A.source === "localSettings" ? "project" : A.source === "userSettings" ? "user" : A.source === "plugin" ? "plugin" : "managed" : "unknown";
    if (A.name !== A.userFacingName() && A.type === "prompt" && A.source === "plugin") g(`Skill prompt: showing "${A.name}" (userFacingName="${A.userFacingName()}")`);
    return `<skill>
<name>
${Q}
</name>
<description>
${B}
</description>
<location>
${G}
</location>
</skill>`
}

function _c5(A) {
    let Q = [],
        B = 0;
    for (let G of A) {
        let Z = wv2(G);
        if (B += Z.length + 1, B > Sc5()) break;
        Q.push(G)
    }
    return Q
}

function qv2(A) {
    return {
        limitedCommands: _c5(A)
    }
}

function kc5(A) {
    if (A.length === 0) return "";
    return A.map(wv2).join(`
`)
}

function yc5(A, Q) {
    let B = kc5(A);
    if (!B) return "";
    let G = Q > A.length ? `
<!-- Showing ${A.length} of ${Q} skills due to token limits -->` : "";
    return `${B}${G}`
}
async function Lv2() {
    let A = await VWA(),
        {
            limitedCommands: Q
        } = qv2(A);
    return {
        totalCommands: A.length,
        includedCommands: Q.length
    }
}
var Nv2;
var U30 = L(() => {
    nE();
    D0();
    u1();
    nE();
    n3A();
    Nv2 = t1(async () => {
        let A = await VWA(),
            {
                limitedCommands: Q
            } = qv2(A),
            B = Q.map((Z) => Z.userFacingName()).join(", ");
        return g(`Skills and commands included in Skill tool: ${B}`), `Execute a skill within the main conversation

<skills_instructions>
When users ask you to perform tasks, check if any of the available skills below can help complete the task more effectively. Skills provide specialized capabilities and domain knowledge.

How to use skills:
- Invoke skills using this tool with the skill name only (no arguments)
- When you invoke a skill, you will see <command-message>The "{name}" skill is loading</command-message>
- The skill's prompt will expand and provide detailed instructions on how to complete the task
- Examples:
  - \`skill: "pdf"\` - invoke the pdf skill
  - \`skill: "xlsx"\` - invoke the xlsx skill
  - \`skill: "ms-office-suite:pdf"\` - invoke using fully qualified name

Important:
- Only use skills listed in <available_skills> below
- Do not invoke a skill that is already running
- Do not use this tool for built-in CLI commands (like /help, /clear, etc.)
</skills_instructions>

<available_skills>
${yc5(Q,A.length)}
</available_skills>
`
    })
});
/* Pq = SKILL_TOOL = "Skill" */
var Pq = "Skill";
async function pRA(A, Q) {
    let B = await FLA(A, Q);
    if (B !== null) return B;
    return await yB2(A, Q)
}
async function H51(A, Q, B, G) {
    let Z = await Promise.all(A.map((I) => E51(I, {
        getToolPermissionContext: Q,
        tools: A,
        agents: B?.activeAgents ?? [],
        model: G
    })));
    return await pRA([], Z) ?? 0
}
async function xc5(A, Q) {
    let [B, G] = await Promise.all([Un(A, Q), uD()]), Z = [...B, ...Object.values(G)];
    if (Z.length < 1) return 0;
    return (await Promise.all(Z.filter((Y) => Y.length > 0).map((Y) => pRA([{
        role: "user",
        content: Y
    }], [])))).reduce((Y, J) => Y + (J || 0), 0)
}
async function vc5() {
    let A = xF(),
        Q = [],
        B = 0;
    if (A.length < 1) return {
        memoryFileDetails: [],
        claudeMdTokens: 0
    };
    let G = await Promise.all(A.map(async (Z) => {
        let I = await pRA([{
            role: "user",
            content: Z.content
        }], []);
        return {
            file: Z,
            tokens: I || 0
        }
    }));
    for (let {
            file: Z,
            tokens: I
        }
        of G) B += I, Q.push({
        path: Z.path,
        type: Z.type,
        tokens: I
    });
    return {
        claudeMdTokens: B,
        memoryFileDetails: Q
    }
}
async function bc5(A, Q, B, G) {
    let Z = A.filter((I) => !I.isMcp);
    if (Z.length < 1) return 0;
    return await H51(Z, Q, B, G)
}

function fc5(A) {
    return A.find((Q) => Q.name === Pq)
}
async function hc5(A, Q, B) {
    let G = await Lv2(),
        Z = fc5(A);
    if (!Z) return {
        slashCommandTokens: 0,
        commandInfo: {
            totalCommands: 0,
            includedCommands: 0
        }
    };
    return {
        slashCommandTokens: await H51([Z], Q, B),
        commandInfo: {
            totalCommands: G.totalCommands,
            includedCommands: G.includedCommands
        }
    }
}
async function lRA(A, Q, B, G) {
    let Z = A.filter((W) => W.isMcp),
        I = [],
        Y = await Promise.all(Z.map((W) => H51([W], Q, B, G))),
        J = Y.reduce((W, X) => W + (X || 0), 0);
    for (let [W, X] of Z.entries()) I.push({
        name: X.name,
        serverName: X.name.split("__")[1] || "unknown",
        tokens: Y[W]
    });
    return {
        mcpToolTokens: J,
        mcpToolDetails: I
    }
}
async function Mv2(A, Q, B) {
    let G = A.filter((Z) => !Z.isMcp);
    if (G.length === 0) return 0;
    return H51(G, Q, B)
}
async function gc5(A) {
    let Q = A.activeAgents.filter((I) => I.source !== "built-in"),
        B = [],
        G = 0,
        Z = await Promise.all(Q.map((I) => pRA([{
            role: "user",
            content: [I.agentType, I.whenToUse].join(" ")
        }], [])));
    for (let [I, Y] of Q.entries()) {
        let J = Z[I] || 0;
        G += J || 0, B.push({
            agentType: Y.agentType,
            source: Y.source,
            tokens: J || 0
        })
    }
    return {
        agentTokens: G,
        agentDetails: B
    }
}
async function uc5(A) {
    let Q = await $i(A),
        B = {
            totalTokens: 0,
            toolCallTokens: 0,
            toolResultTokens: 0,
            attachmentTokens: 0,
            assistantMessageTokens: 0,
            userMessageTokens: 0,
            toolCallsByType: new Map,
            toolResultsByType: new Map,
            attachmentsByType: new Map
        },
        G = await pRA(BZ(Q.messages).map((Z) => {
            if (Z.type === "assistant") return {
                role: "assistant",
                content: Z.message.content
            };
            return Z.message
        }), []);
    return B.totalTokens = G ?? 0, B
}
async function Ov2(A, Q, B, G, Z, I) {
    let Y = tt({
            permissionMode: (await B()).mode,
            mainLoopModel: Q
        }),
        J = bu(Y),
        [W, {
            claudeMdTokens: X,
            memoryFileDetails: F
        }, V, {
            mcpToolTokens: K,
            mcpToolDetails: D
        }, {
            agentTokens: H,
            agentDetails: C
        }, {
            slashCommandTokens: E,
            commandInfo: z
        }, w] = await Promise.all([xc5(G, Y), vc5(), bc5(G, B, Z, Y), lRA(G, B, Z, Y), gc5(Z), hc5(G, B, Z), uc5(A)]),
        N = 0,
        q = {
            totalSkills: 0,
            includedSkills: 0
        },
        R = w.totalTokens,
        P = O1A(),
        y = P ? KYA() - b00 : void 0,
        v = [];
    if (W > 0) v.push({
        name: "System prompt",
        tokens: W,
        color: "promptBorder"
    });
    if (V > 0) v.push({
        name: "System tools",
        tokens: V,
        color: "inactive"
    });
    if (K > 0) v.push({
        name: "MCP tools",
        tokens: K,
        color: "cyan_FOR_SUBAGENTS_ONLY"
    });
    if (H > 0) v.push({
        name: "Custom agents",
        tokens: H,
        color: "permission"
    });
    if (X > 0) v.push({
        name: "Memory files",
        tokens: X,
        color: "claude"
    });
    if (R !== null && R > 0) v.push({
        name: "Messages",
        tokens: R,
        color: "purple_FOR_SUBAGENTS_ONLY"
    });
    if (P && y) {
        let yA = J - y;
        v.push({
            name: $30,
            tokens: yA,
            color: "inactive"
        })
    }
    let x = v.reduce((yA, rA) => yA + rA.tokens, 0),
        p = Math.max(0, J - x);
    v.push({
        name: "Free space",
        tokens: p,
        color: "promptBorder"
    });
    let u = x,
        o = I && I < 80,
        l = J >= 1e6 ? o ? 5 : 20 : o ? 5 : 10,
        k = J >= 1e6 ? 10 : o ? 5 : 10,
        d = l * k,
        QA = v.map((yA) => ({
            ...yA,
            squares: yA.name === "Free space" ? Math.round(yA.tokens / J * d) : Math.max(1, Math.round(yA.tokens / J * d)),
            percentageOfTotal: Math.round(yA.tokens / J * 100)
        }));

    function IA(yA) {
        let rA = [],
            K1 = yA.tokens / J * d,
            WA = Math.floor(K1),
            XA = K1 - WA;
        for (let zA = 0; zA < yA.squares; zA++) {
            let $A = 1;
            if (zA === WA && XA > 0) $A = XA;
            rA.push({
                color: yA.color,
                isFilled: !0,
                categoryName: yA.name,
                tokens: yA.tokens,
                percentage: yA.percentageOfTotal,
                squareFullness: $A
            })
        }
        return rA
    }
    let HA = [],
        wA = QA.find((yA) => yA.name === $30),
        KA = QA.filter((yA) => yA.name !== $30 && yA.name !== "Free space");
    for (let yA of KA) {
        let rA = IA(yA);
        for (let K1 of rA)
            if (HA.length < d) HA.push(K1)
    }
    let SA = wA ? wA.squares : 0,
        sA = v.find((yA) => yA.name === "Free space"),
        NA = d - SA;
    while (HA.length < NA) HA.push({
        color: "promptBorder",
        isFilled: !0,
        categoryName: "Free space",
        tokens: sA?.tokens || 0,
        percentage: sA ? Math.round(sA.tokens / J * 100) : 0,
        squareFullness: 1
    });
    if (wA) {
        let yA = IA(wA);
        for (let rA of yA)
            if (HA.length < d) HA.push(rA)
    }
    let qA = [];
    for (let yA = 0; yA < k; yA++) qA.push(HA.slice(yA * l, (yA + 1) * l));
    let DA;
    return {
        categories: v,
        totalTokens: u,
        maxTokens: J,
        rawMaxTokens: J,
        percentage: Math.round(u / J * 100),
        gridRows: qA,
        model: Y,
        memoryFiles: F,
        mcpTools: D,
        agents: C,
        slashCommands: E > 0 ? {
            totalCommands: z.totalCommands,
            includedCommands: z.includedCommands,
            tokens: E
        } : void 0,
        skills: void 0,
        autoCompactThreshold: y,
        isAutoCompactEnabled: P,
        messageBreakdown: DA
    }
}
var $30 = "Autocompact buffer";
var C51 = L(() => {
    $y();
    gM();
    $n();
    uE();
    N1A();
    nQ();
    mh();
    s2();
    U30();
    M1A();
    u1()
});
import {
    createHash as mc5
} from "crypto";
async function E51(A, Q) {
    let B = j8("tengu_tool_pear"),
        G = {
            name: A.name,
            description: await A.prompt({
                getToolPermissionContext: Q.getToolPermissionContext,
                tools: Q.tools,
                agents: Q.agents
            }),
            input_schema: "inputJSONSchema" in A && A.inputJSONSchema ? A.inputJSONSchema : _RA(A.inputSchema)
        };
    if (B && A.strict === !0 && Q.model && KE1(Q.model)) G.strict = !0;
    if (Q.betas?.includes(mvA) && A.input_examples) G.input_examples = A.input_examples;
    return G
}

function Rv2(A) {
    let [Q] = w30(A);
    BA("tengu_sysprompt_block", {
        snippet: Q?.slice(0, 20),
        length: Q?.length ?? 0,
        hash: Q ? mc5("sha256").update(Q).digest("hex") : ""
    })
}

function w30(A) {
    let Q = A[0] || "",
        B = A.slice(1);
    return [Q, B.join(`
`)].filter(Boolean)
}

function Tv2(A, Q) {
    return [...A, Object.entries(Q).map(([B, G]) => `${B}: ${G}`).join(`
`)].filter(Boolean)
}

function U0A(A, Q) {
    if (Object.entries(Q).length === 0) return A;
    return [j0({
        content: `<system-reminder>
As you answer the user's questions, you can use the following context:
${Object.entries(Q).map(([B,G])=>`# ${B}
${G}`).join(`
`)}

      IMPORTANT: this context may or may not be relevant to your tasks. You should not respond to this context unless it is highly relevant to your task.
</system-reminder>
`,
        isMeta: !0
    }), ...A]
}
async function Pv2(A, Q) {
    if (_v2()) return;
    let [{
        tools: B
    }, G, Z, I] = await Promise.all([iB1(A), JC(Q), XK(), uD()]), Y = I.gitStatus?.length ?? 0, J = Z.claudeMd?.length ?? 0, W = Y + J, X = s9();
    setTimeout(() => X.abort(), 1000);
    let F = H0(),
        V = sJA(Q),
        K = aJA(V, F),
        D = await wxA(F, X.signal, K),
        H = 0,
        C = 0,
        E = 0,
        z = 0,
        w = 0,
        N = G.filter((R) => !R.isMcp);
    H = B.length, z = N.length;
    let q = new Set;
    for (let R of B) {
        let P = R.name.split("__");
        if (P.length >= 3 && P[1]) q.add(P[1])
    }
    C = q.size;
    try {
        if (B.length > 0) {
            let {
                mcpToolTokens: R
            } = await lRA(B, async () => Q, null);
            E = R
        }
        if (N.length > 0) w = await Mv2(G, async () => Q, null)
    } catch {}
    BA("tengu_context_size", {
        git_status_size: Y,
        claude_md_size: J,
        total_context_size: W,
        project_file_count_rounded: D,
        mcp_tools_count: H,
        mcp_servers_count: C,
        mcp_tools_tokens: E,
        non_mcp_tools_count: z,
        non_mcp_tools_tokens: w
    })
}

function jv2(A, Q, B) {
    switch (A.name) {
        case kRA: {
            let G = fU(B);
            if (G) return {
                ...Q,
                plan: G
            };
            return Q
        }
        case X9.name: {
            let G = X9.inputSchema.parse(Q),
                {
                    command: Z,
                    timeout: I,
                    description: Y,
                    run_in_background: J
                } = G,
                W = Z.replace(`cd ${H0()} && `, "");
            if (W = W.replace(/\\\\;/g, "\\;"), /^echo\s+["']?[^|&;><]*["']?$/i.test(W.trim())) BA("tengu_bash_tool_simple_echo", {});
            return {
                command: W,
                description: Y,
                ...I ? {
                    timeout: I
                } : {},
                ...Y ? {
                    description: Y
                } : {},
                ...J ? {
                    run_in_background: J
                } : {},
                ..."dangerouslyDisableSandbox" in G && G.dangerouslyDisableSandbox ? {
                    dangerouslyDisableSandbox: G.dangerouslyDisableSandbox
                } : {}
            }
        }
        case gD.name: {
            let G = gD.inputSchema.parse(Q),
                {
                    file_path: Z,
                    edits: I
                } = wZ2({
                    file_path: G.file_path,
                    edits: [{
                        old_string: G.old_string,
                        new_string: G.new_string,
                        replace_all: G.replace_all
                    }]
                });
            return {
                replace_all: I[0].replace_all,
                file_path: Z,
                old_string: I[0].old_string,
                new_string: I[0].new_string
            }
        }
        case oX.name: {
            let G = oX.inputSchema.parse(Q);
            return {
                file_path: G.file_path,
                content: W00(G.content)
            }
        }
        default:
            return Q
    }
}

function Sv2(A, Q) {
    switch (A.name) {
        case kRA: {
            if (Q && typeof Q === "object" && "plan" in Q) {
                let {
                    plan: B,
                    ...G
                } = Q;
                return G
            }
            return Q
        }
        default:
            return Q
    }
}
var dc5;
var mh = L(() => {
    $50();
    O9();
    w0();
    nQ();
    cj();
    R2();
    _Y();
    nV();
    Wn();
    z1A();
    gh();
    UZ();
    _E();
    D0();
    C51();
    ej();
    dvA();
    Tk();
    $y();
    jq();
    dc5 = GA(Uv2(), 1)
});
var kv2 = L(() => {
    w0();
    nQ();
    kZ();
    mh();
    UZ();
    s2()
});
var yv2 = L(() => {
    O9();
    nV();
    gh();
    Wn();
    eJA();
    u1();
    kv2()
});
import {
    join as z51
} from "path";
import {
    mkdir as bv2,
    writeFile as cc5
} from "fs/promises";

function pc5() {
    return z51(uH(H0()), G0())
}

function U51() {
    return z51(pc5(), q30)
}
async function lc5() {
    try {
        await bv2(U51(), {
            recursive: !0
        })
    } catch {}
}
async function vv2(A, Q) {
    await lc5();
    let B = Date.now(),
        G = `${Q}-${B}`,
        Z = z51(U51(), G),
        I = S7(A, !1) !== null,
        J = z51(Z, `result.${I?"json":"txt"}`);
    try {
        await bv2(Z, {
            recursive: !0
        }), await cc5(J, A, "utf-8")
    } catch (V) {
        return e(V instanceof Error ? V : Error(String(V))), qTB(A, ZQ1)
    }