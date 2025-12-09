/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: git_030.js
 * 处理时间: 2025-12-09T03:37:24.860Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         (  4x) = require(moduleName) - Node.js require
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 30/34
 * Lines: 342418 - 343917 (1500 lines)
 * Original file: cli.js
 */

                        let {
                            minimum: C,
                            maximum: E
                        } = A._zod.bag;
                        if (typeof C === "number") D.minItems = C;
                        if (typeof E === "number") D.maxItems = E;
                        break
                    }
                    case "record": {
                        let D = K;
                        D.type = "object", D.propertyNames = this.process(G.keyType, {
                            ...F,
                            path: [...F.path, "propertyNames"]
                        }), D.additionalProperties = this.process(G.valueType, {
                            ...F,
                            path: [...F.path, "additionalProperties"]
                        });
                        break
                    }
                    case "map": {
                        if (this.unrepresentable === "throw") throw Error("Map cannot be represented in JSON Schema");
                        break
                    }
                    case "set": {
                        if (this.unrepresentable === "throw") throw Error("Set cannot be represented in JSON Schema");
                        break
                    }
                    case "enum": {
                        let D = K,
                            H = a_2(G.entries);
                        if (H.every((C) => typeof C === "number")) D.type = "number";
                        if (H.every((C) => typeof C === "string")) D.type = "string";
                        D.enum = H;
                        break
                    }
                    case "literal": {
                        let D = K,
                            H = [];
                        for (let C of G.values)
                            if (C === void 0) {
                                if (this.unrepresentable === "throw") throw Error("Literal `undefined` cannot be represented in JSON Schema")
                            } else if (typeof C === "bigint")
                            if (this.unrepresentable === "throw") throw Error("BigInt literals cannot be represented in JSON Schema");
                            else H.push(Number(C));
                        else H.push(C);
                        if (H.length === 0);
                        else if (H.length === 1) {
                            let C = H[0];
                            D.type = C === null ? "null" : typeof C, D.const = C
                        } else {
                            if (H.every((C) => typeof C === "number")) D.type = "number";
                            if (H.every((C) => typeof C === "string")) D.type = "string";
                            if (H.every((C) => typeof C === "boolean")) D.type = "string";
                            if (H.every((C) => C === null)) D.type = "null";
                            D.enum = H
                        }
                        break
                    }
                    case "file": {
                        let D = K,
                            H = {
                                type: "string",
                                format: "binary",
                                contentEncoding: "binary"
                            },
                            {
                                minimum: C,
                                maximum: E,
                                mime: z
                            } = A._zod.bag;
                        if (C !== void 0) H.minLength = C;
                        if (E !== void 0) H.maxLength = E;
                        if (z)
                            if (z.length === 1) H.contentMediaType = z[0], Object.assign(D, H);
                            else D.anyOf = z.map((w) => {
                                return {
                                    ...H,
                                    contentMediaType: w
                                }
                            });
                        else Object.assign(D, H);
                        break
                    }
                    case "transform": {
                        if (this.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
                        break
                    }
                    case "nullable": {
                        let D = this.process(G.innerType, F);
                        K.anyOf = [D, {
                            type: "null"
                        }];
                        break
                    }
                    case "nonoptional": {
                        this.process(G.innerType, F), Y.ref = G.innerType;
                        break
                    }
                    case "success": {
                        let D = K;
                        D.type = "boolean";
                        break
                    }
                    case "default": {
                        this.process(G.innerType, F), Y.ref = G.innerType, K.default = JSON.parse(JSON.stringify(G.defaultValue));
                        break
                    }
                    case "prefault": {
                        if (this.process(G.innerType, F), Y.ref = G.innerType, this.io === "input") K._prefault = JSON.parse(JSON.stringify(G.defaultValue));
                        break
                    }
                    case "catch": {
                        this.process(G.innerType, F), Y.ref = G.innerType;
                        let D;
                        try {
                            D = G.catchValue(void 0)
                        } catch {
                            throw Error("Dynamic catch values are not supported in JSON Schema")
                        }
                        K.default = D;
                        break
                    }
                    case "nan": {
                        if (this.unrepresentable === "throw") throw Error("NaN cannot be represented in JSON Schema");
                        break
                    }
                    case "template_literal": {
                        let D = K,
                            H = A._zod.pattern;
                        if (!H) throw Error("Pattern not found in template literal");
                        D.type = "string", D.pattern = H.source;
                        break
                    }
                    case "pipe": {
                        let D = this.io === "input" ? G.in._zod.def.type === "transform" ? G.out : G.in : G.out;
                        this.process(D, F), Y.ref = D;
                        break
                    }
                    case "readonly": {
                        this.process(G.innerType, F), Y.ref = G.innerType, K.readOnly = !0;
                        break
                    }
                    case "promise": {
                        this.process(G.innerType, F), Y.ref = G.innerType;
                        break
                    }
                    case "optional": {
                        this.process(G.innerType, F), Y.ref = G.innerType;
                        break
                    }
                    case "lazy": {
                        let D = A._zod.innerType;
                        this.process(D, F), Y.ref = D;
                        break
                    }
                    case "custom": {
                        if (this.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
                        break
                    }
                    default:
                }
            }
        }
        let W = this.metadataRegistry.get(A);
        if (W) Object.assign(Y.schema, W);
        if (this.io === "input" && mF(A)) delete Y.schema.examples, delete Y.schema.default;
        if (this.io === "input" && Y.schema._prefault)(B = Y.schema).default ?? (B.default = Y.schema._prefault);
        return delete Y.schema._prefault, this.seen.get(A).schema
    }
    emit(A, Q) {
        let B = {
                cycles: Q?.cycles ?? "ref",
                reused: Q?.reused ?? "inline",
                external: Q?.external ?? void 0
            },
            G = this.seen.get(A);
        if (!G) throw Error("Unprocessed schema. This is a bug in Zod.");
        let Z = (X) => {
                let F = this.target === "draft-2020-12" ? "$defs" : "definitions";
                if (B.external) {
                    let H = B.external.registry.get(X[0])?.id;
                    if (H) return {
                        ref: B.external.uri(H)
                    };
                    let C = X[1].defId ?? X[1].schema.id ?? `schema${this.counter++}`;
                    return X[1].defId = C, {
                        defId: C,
                        ref: `${B.external.uri("__shared")}#/${F}/${C}`
                    }
                }
                if (X[1] === G) return {
                    ref: "#"
                };
                let K = `${"#"}/${F}/`,
                    D = X[1].schema.id ?? `__schema${this.counter++}`;
                return {
                    defId: D,
                    ref: K + D
                }
            },
            I = (X) => {
                if (X[1].schema.$ref) return;
                let F = X[1],
                    {
                        ref: V,
                        defId: K
                    } = Z(X);
                if (F.def = {
                        ...F.schema
                    }, K) F.defId = K;
                let D = F.schema;
                for (let H in D) delete D[H];
                D.$ref = V
            };
        for (let X of this.seen.entries()) {
            let F = X[1];
            if (A === X[0]) {
                I(X);
                continue
            }
            if (B.external) {
                let K = B.external.registry.get(X[0])?.id;
                if (A !== X[0] && K) {
                    I(X);
                    continue
                }
            }
            if (this.metadataRegistry.get(X[0])?.id) {
                I(X);
                continue
            }
            if (F.cycle) {
                if (B.cycles === "throw") throw Error(`Cycle detected: #/${F.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
                else if (B.cycles === "ref") I(X);
                continue
            }
            if (F.count > 1) {
                if (B.reused === "ref") {
                    I(X);
                    continue
                }
            }
        }
        let Y = (X, F) => {
            let V = this.seen.get(X),
                K = V.def ?? V.schema,
                D = {
                    ...K
                };
            if (V.ref === null) return;
            let H = V.ref;
            if (V.ref = null, H) {
                Y(H, F);
                let C = this.seen.get(H).schema;
                if (C.$ref && F.target === "draft-7") K.allOf = K.allOf ?? [], K.allOf.push(C);
                else Object.assign(K, C), Object.assign(K, D)
            }
            if (!V.isParent) this.override({
                zodSchema: X,
                jsonSchema: K,
                path: V.path ?? []
            })
        };
        for (let X of [...this.seen.entries()].reverse()) Y(X[0], {
            target: this.target
        });
        let J = {};
        if (this.target === "draft-2020-12") J.$schema = "https://json-schema.org/draft/2020-12/schema";
        else if (this.target === "draft-7") J.$schema = "http://json-schema.org/draft-07/schema#";
        else console.warn(`Invalid target: ${this.target}`);
        Object.assign(J, G.def);
        let W = B.external?.defs ?? {};
        for (let X of this.seen.entries()) {
            let F = X[1];
            if (F.def && F.defId) W[F.defId] = F.def
        }
        if (!B.external && Object.keys(W).length > 0)
            if (this.target === "draft-2020-12") J.$defs = W;
            else J.definitions = W;
        try {
            return JSON.parse(JSON.stringify(J))
        } catch (X) {
            throw Error("Error converting schema to JSON.")
        }
    }
}

function U50(A, Q) {
    if (A instanceof n61) {
        let G = new z50(Q),
            Z = {};
        for (let J of A._idmap.entries()) {
            let [W, X] = J;
            G.process(X)
        }
        let I = {},
            Y = {
                registry: A,
                uri: Q?.uri || ((J) => J),
                defs: Z
            };
        for (let J of A._idmap.entries()) {
            let [W, X] = J;
            I[W] = G.emit(X, {
                ...Q,
                external: Y
            })
        }
        if (Object.keys(Z).length > 0) {
            let J = G.target === "draft-2020-12" ? "$defs" : "definitions";
            I.__shared = {
                [J]: Z
            }
        }
        return {
            schemas: I
        }
    }
    let B = new z50(Q);
    return B.process(A), B.emit(A, Q)
}

function mF(A, Q) {
    let B = Q ?? {
        seen: new Set
    };
    if (B.seen.has(A)) return !1;
    B.seen.add(A);
    let Z = A._zod.def;
    switch (Z.type) {
        case "string":
        case "number":
        case "bigint":
        case "boolean":
        case "date":
        case "symbol":
        case "undefined":
        case "null":
        case "any":
        case "unknown":
        case "never":
        case "void":
        case "literal":
        case "enum":
        case "nan":
        case "file":
        case "template_literal":
            return !1;
        case "array":
            return mF(Z.element, B);
        case "object": {
            for (let I in Z.shape)
                if (mF(Z.shape[I], B)) return !0;
            return !1
        }
        case "union": {
            for (let I of Z.options)
                if (mF(I, B)) return !0;
            return !1
        }
        case "intersection":
            return mF(Z.left, B) || mF(Z.right, B);
        case "tuple": {
            for (let I of Z.items)
                if (mF(I, B)) return !0;
            if (Z.rest && mF(Z.rest, B)) return !0;
            return !1
        }
        case "record":
            return mF(Z.keyType, B) || mF(Z.valueType, B);
        case "map":
            return mF(Z.keyType, B) || mF(Z.valueType, B);
        case "set":
            return mF(Z.valueType, B);
        case "promise":
        case "optional":
        case "nonoptional":
        case "nullable":
        case "readonly":
            return mF(Z.innerType, B);
        case "lazy":
            return mF(Z.getter(), B);
        case "default":
            return mF(Z.innerType, B);
        case "prefault":
            return mF(Z.innerType, B);
        case "custom":
            return !1;
        case "transform":
            return !0;
        case "pipe":
            return mF(Z.in, B) || mF(Z.out, B);
        case "success":
            return !1;
        case "catch":
            return !1;
        default:
    }
    throw Error(`Unknown schema type: ${Z.type}`)
}
var Fk2 = L(() => {
    E50();
    SRA()
});
var Vk2 = () => {};
var QWA = L(() => {
    SRA();
    Qk2();
    H50();
    Vk2();
    J50();
    e_2();
    t_2();
    Zk2();
    Bk2();
    Gk2();
    E50();
    Xk2();
    Wk2();
    Fk2()
});
var Dk2 = () => {};
var Hk2 = () => {};
var Ck2 = (A, Q) => {
        o_2.init(A, Q), A.name = "ZodError", Object.defineProperties(A, {
            format: {
                value: (B) => K50(A, B)
            },
            flatten: {
                value: (B) => V50(A, B)
            },
            addIssue: {
                value: (B) => A.issues.push(B)
            },
            addIssues: {
                value: (B) => A.issues.push(...B)
            },
            isEmpty: {
                get() {
                    return A.issues.length === 0
                }
            }
        })
    },
    $2Z, w2Z;
var Ek2 = L(() => {
    QWA();
    QWA();
    $2Z = AWA("ZodError", Ck2), w2Z = AWA("ZodError", Ck2, {
        Parent: Error
    })
});
var zk2 = () => {};
var Uk2 = () => {};
var $k2 = () => {};
var wk2 = () => {};
var qk2 = L(() => {
    QWA();
    QWA();
    Ik2();
    QWA();
    H50();
    Hk2();
    wk2();
    Uk2();
    Dk2();
    Ek2();
    zk2();
    $k2();
    Y50(D50())
});
var Nk2 = L(() => {
    qk2()
});
var Lk2 = L(() => {
    Nk2()
});

function Nh5(A) {
    return A !== null && typeof A === "object" && "_zod" in A && A._zod !== void 0
}

function _RA(A) {
    if (Nh5(A)) return U50(A);
    return jRA(A)
}
var $50 = L(() => {
    Lk2();
    A50()
});
var a61 = "ExitPlanMode",
    kRA = "ExitPlanMode";
var s61 = U((Ok2) => {
    Object.defineProperty(Ok2, "__esModule", {
        value: !0
    });
    Ok2.getDeepKeys = Ok2.toJSON = void 0;
    var Lh5 = ["function", "symbol", "undefined"],
        Mh5 = ["constructor", "prototype", "__proto__"],
        Oh5 = Object.getPrototypeOf({});

    function Rh5() {
        let A = {},
            Q = this;
        for (let B of Mk2(Q))
            if (typeof B === "string") {
                let G = Q[B],
                    Z = typeof G;
                if (!Lh5.includes(Z)) A[B] = G
            } return A
    }
    Ok2.toJSON = Rh5;

    function Mk2(A, Q = []) {
        let B = [];
        while (A && A !== Oh5) B = B.concat(Object.getOwnPropertyNames(A), Object.getOwnPropertySymbols(A)), A = Object.getPrototypeOf(A);
        let G = new Set(B);
        for (let Z of Q.concat(Mh5)) G.delete(Z);
        return G
    }
    Ok2.getDeepKeys = Mk2
});
var w50 = U((jk2) => {
    Object.defineProperty(jk2, "__esModule", {
        value: !0
    });
    jk2.addInspectMethod = jk2.format = void 0;
    var Tk2 = UA("util"),
        Ph5 = s61(),
        Pk2 = Tk2.inspect.custom || Symbol.for("nodejs.util.inspect.custom");
    jk2.format = Tk2.format;

    function jh5(A) {
        A[Pk2] = Sh5
    }
    jk2.addInspectMethod = jh5;

    function Sh5() {
        let A = {},
            Q = this;
        for (let B of Ph5.getDeepKeys(Q)) {
            let G = Q[B];
            A[B] = G
        }
        return delete A[Pk2], A
    }
});
var vk2 = U((yk2) => {
    Object.defineProperty(yk2, "__esModule", {
        value: !0
    });
    yk2.lazyJoinStacks = yk2.joinStacks = yk2.isWritableStack = yk2.isLazyStack = void 0;
    var kh5 = /\r?\n/,
        yh5 = /\bono[ @]/;

    function xh5(A) {
        return Boolean(A && A.configurable && typeof A.get === "function")
    }
    yk2.isLazyStack = xh5;

    function vh5(A) {
        return Boolean(!A || A.writable || typeof A.set === "function")
    }
    yk2.isWritableStack = vh5;

    function _k2(A, Q) {
        let B = kk2(A.stack),
            G = Q ? Q.stack : void 0;
        if (B && G) return B + `

` + G;
        else return B || G
    }
    yk2.joinStacks = _k2;

    function bh5(A, Q, B) {
        if (B) Object.defineProperty(Q, "stack", {
            get: () => {
                let G = A.get.apply(Q);
                return _k2({
                    stack: G
                }, B)
            },
            enumerable: !1,
            configurable: !0
        });
        else fh5(Q, A)
    }
    yk2.lazyJoinStacks = bh5;

    function kk2(A) {
        if (A) {
            let Q = A.split(kh5),
                B;
            for (let G = 0; G < Q.length; G++) {
                let Z = Q[G];
                if (yh5.test(Z)) {
                    if (B === void 0) B = G
                } else if (B !== void 0) {
                    Q.splice(B, G - B);
                    break
                }
            }
            if (Q.length > 0) return Q.join(`
`)
        }
        return A
    }

    function fh5(A, Q) {
        Object.defineProperty(A, "stack", {
            get: () => kk2(Q.get.apply(A)),
            enumerable: !1,
            configurable: !0
        })
    }
});
var uk2 = U((hk2) => {
    Object.defineProperty(hk2, "__esModule", {
        value: !0
    });
    hk2.extendError = void 0;
    var bk2 = w50(),
        r61 = vk2(),
        fk2 = s61(),
        mh5 = ["name", "message", "stack"];

    function dh5(A, Q, B) {
        let G = A;
        if (ch5(G, Q), Q && typeof Q === "object") ph5(G, Q);
        if (G.toJSON = fk2.toJSON, bk2.addInspectMethod) bk2.addInspectMethod(G);
        if (B && typeof B === "object") Object.assign(G, B);
        return G
    }
    hk2.extendError = dh5;

    function ch5(A, Q) {
        let B = Object.getOwnPropertyDescriptor(A, "stack");
        if (r61.isLazyStack(B)) r61.lazyJoinStacks(B, A, Q);
        else if (r61.isWritableStack(B)) A.stack = r61.joinStacks(A, Q)
    }

    function ph5(A, Q) {
        let B = fk2.getDeepKeys(Q, mh5),
            G = A,
            Z = Q;
        for (let I of B)
            if (G[I] === void 0) try {
                G[I] = Z[I]
            } catch (Y) {}
    }
});
var ck2 = U((mk2) => {
    Object.defineProperty(mk2, "__esModule", {
        value: !0
    });
    mk2.normalizeArgs = mk2.normalizeOptions = void 0;
    var lh5 = w50();

    function ih5(A) {
        return A = A || {}, {
            concatMessages: A.concatMessages === void 0 ? !0 : Boolean(A.concatMessages),
            format: A.format === void 0 ? lh5.format : typeof A.format === "function" ? A.format : !1
        }
    }
    mk2.normalizeOptions = ih5;

    function nh5(A, Q) {
        let B, G, Z, I = "";
        if (typeof A[0] === "string") Z = A;
        else if (typeof A[1] === "string") {
            if (A[0] instanceof Error) B = A[0];
            else G = A[0];
            Z = A.slice(1)
        } else B = A[0], G = A[1], Z = A.slice(2);
        if (Z.length > 0)
            if (Q.format) I = Q.format.apply(void 0, Z);
            else I = Z.join(" ");
        if (Q.concatMessages && B && B.message) I += (I ? ` 
` : "") + B.message;
        return {
            originalError: B,
            props: G,
            message: I
        }
    }
    mk2.normalizeArgs = nh5
});
var N50 = U((lk2) => {
    Object.defineProperty(lk2, "__esModule", {
        value: !0
    });
    lk2.Ono = void 0;
    var o61 = uk2(),
        pk2 = ck2(),
        sh5 = s61(),
        rh5 = q50;
    lk2.Ono = rh5;

    function q50(A, Q) {
        Q = pk2.normalizeOptions(Q);

        function B(...G) {
            let {
                originalError: Z,
                props: I,
                message: Y
            } = pk2.normalizeArgs(G, Q), J = new A(Y);
            return o61.extendError(J, Z, I)
        }
        return B[Symbol.species] = A, B
    }
    q50.toJSON = function(Q) {
        return sh5.toJSON.call(Q)
    };
    q50.extend = function(Q, B, G) {
        if (G || B instanceof Error) return o61.extendError(Q, B, G);
        else if (B) return o61.extendError(Q, void 0, B);
        else return o61.extendError(Q)
    }
});
var sk2 = U((nk2) => {
    Object.defineProperty(nk2, "__esModule", {
        value: !0
    });
    nk2.ono = void 0;
    var H0A = N50(),
        oh5 = Cy;
    nk2.ono = oh5;
    Cy.error = new H0A.Ono(Error);
    Cy.eval = new H0A.Ono(EvalError);
    Cy.range = new H0A.Ono(RangeError);
    Cy.reference = new H0A.Ono(ReferenceError);
    Cy.syntax = new H0A.Ono(SyntaxError);
    Cy.type = new H0A.Ono(TypeError);
    Cy.uri = new H0A.Ono(URIError);
    var th5 = Cy;

    function Cy(...A) {
        let Q = A[0];
        if (typeof Q === "object" && typeof Q.name === "string") {
            for (let B of Object.values(th5))
                if (typeof B === "function" && B.name === "ono") {
                    let G = B[Symbol.species];
                    if (G && G !== Error && (Q instanceof G || Q.name === G.name)) return B.apply(void 0, A)
                }
        }
        return Cy.error.apply(void 0, A)
    }
});
var ok2 = U((rk2) => {
    Object.defineProperty(rk2, "__esModule", {
        value: !0
    });
    var A9Z = UA("util")
});
var Xn = U((MP, BWA) => {
    var eh5 = MP && MP.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            Object.defineProperty(A, G, {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            })
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        Ag5 = MP && MP.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Q.hasOwnProperty(B)) eh5(Q, A, B)
        };
    Object.defineProperty(MP, "__esModule", {
        value: !0
    });
    MP.ono = void 0;
    var tk2 = sk2();
    Object.defineProperty(MP, "ono", {
        enumerable: !0,
        get: function() {
            return tk2.ono
        }
    });
    var Qg5 = N50();
    Object.defineProperty(MP, "Ono", {
        enumerable: !0,
        get: function() {
            return Qg5.Ono
        }
    });
    Ag5(ok2(), MP);
    MP.default = tk2.ono;
    if (typeof BWA === "object" && typeof BWA.exports === "object") BWA.exports = Object.assign(BWA.exports.default, BWA.exports)
});
var VO = U((Yg5, ek2) => {
    var t61 = /^win/.test(process.platform),
        Bg5 = /\//g,
        Gg5 = /^(\w{2,}):\/\//i,
        O50 = Yg5,
        Zg5 = /~1/g,
        Ig5 = /~0/g,
        L50 = [/\?/g, "%3F", /\#/g, "%23"],
        M50 = [/\%23/g, "#", /\%24/g, "$", /\%26/g, "&", /\%2C/g, ",", /\%40/g, "@"];
    Yg5.parse = UA("url").parse;
    Yg5.resolve = UA("url").resolve;
    Yg5.cwd = function() {
        let Q = process.cwd(),
            B = Q.slice(-1);
        if (B === "/" || B === "\\") return Q;
        else return Q + "/"
    };
    Yg5.getProtocol = function(Q) {
        let B = Gg5.exec(Q);
        if (B) return B[1].toLowerCase()
    };
    Yg5.getExtension = function(Q) {
        let B = Q.lastIndexOf(".");
        if (B >= 0) return O50.stripQuery(Q.substr(B).toLowerCase());
        return ""
    };
    Yg5.stripQuery = function(Q) {
        let B = Q.indexOf("?");
        if (B >= 0) Q = Q.substr(0, B);
        return Q
    };
    Yg5.getHash = function(Q) {
        let B = Q.indexOf("#");
        if (B >= 0) return Q.substr(B);
        return "#"
    };
    Yg5.stripHash = function(Q) {
        let B = Q.indexOf("#");
        if (B >= 0) Q = Q.substr(0, B);
        return Q
    };
    Yg5.isHttp = function(Q) {
        let B = O50.getProtocol(Q);
        if (B === "http" || B === "https") return !0;
        else if (B === void 0) return !1;
        else return !1
    };
    Yg5.isFileSystemPath = function(Q) {
        let B = O50.getProtocol(Q);
        return B === void 0 || B === "file"
    };
    Yg5.fromFileSystemPath = function(Q) {
        if (t61) Q = Q.replace(/\\/g, "/");
        Q = encodeURI(Q);
        for (let B = 0; B < L50.length; B += 2) Q = Q.replace(L50[B], L50[B + 1]);
        return Q
    };
    Yg5.toFileSystemPath = function(Q, B) {
        Q = decodeURI(Q);
        for (let Z = 0; Z < M50.length; Z += 2) Q = Q.replace(M50[Z], M50[Z + 1]);
        let G = Q.substr(0, 7).toLowerCase() === "file://";
        if (G) {
            if (Q = Q[7] === "/" ? Q.substr(8) : Q.substr(7), t61 && Q[1] === "/") Q = Q[0] + ":" + Q.substr(1);
            if (B) Q = "file:///" + Q;
            else G = !1, Q = t61 ? Q : "/" + Q
        }
        if (t61 && !G) {
            if (Q = Q.replace(Bg5, "\\"), Q.substr(1, 2) === ":\\") Q = Q[0].toUpperCase() + Q.substr(1)
        }
        return Q
    };
    Yg5.safePointerToPath = function(Q) {
        if (Q.length <= 1 || Q[0] !== "#" || Q[1] !== "/") return [];
        return Q.slice(2).split("/").map((B) => {
            return decodeURIComponent(B).replace(Zg5, "/").replace(Ig5, "~")
        })
    }
});
var OP = U((Tg5) => {
    var {
        Ono: Ay2
    } = Xn(), {
        stripHash: Qy2,
        toFileSystemPath: wg5
    } = VO(), Fn = Tg5.JSONParserError = class extends Error {
        constructor(Q, B) {
            super();
            this.code = "EUNKNOWN", this.message = Q, this.source = B, this.path = null, Ay2.extend(this)
        }
        get footprint() {
            return `${this.path}+${this.source}+${this.code}+${this.message}`
        }
    };
    Vn(Fn);
    var By2 = Tg5.JSONParserErrorGroup = class A extends Error {
        constructor(Q) {
            super();
            this.files = Q, this.message = `${this.errors.length} error${this.errors.length>1?"s":""} occurred while reading '${wg5(Q.$refs._root$Ref.path)}'`, Ay2.extend(this)
        }
        static getParserErrors(Q) {
            let B = [];
            for (let G of Object.values(Q.$refs._$refs))
                if (G.errors) B.push(...G.errors);
            return B
        }
        get errors() {
            return A.getParserErrors(this.files)
        }
    };
    Vn(By2);
    var qg5 = Tg5.ParserError = class extends Fn {
        constructor(Q, B) {
            super(`Error parsing ${B}: ${Q}`, B);
            this.code = "EPARSER"
        }
    };
    Vn(qg5);
    var Ng5 = Tg5.UnmatchedParserError = class extends Fn {
        constructor(Q) {
            super(`Could not find parser for "${Q}"`, Q);
            this.code = "EUNMATCHEDPARSER"
        }
    };
    Vn(Ng5);
    var Lg5 = Tg5.ResolverError = class extends Fn {
        constructor(Q, B) {
            super(Q.message || `Error reading file "${B}"`, B);
            if (this.code = "ERESOLVER", "code" in Q) this.ioErrorCode = String(Q.code)
        }
    };
    Vn(Lg5);
    var Mg5 = Tg5.UnmatchedResolverError = class extends Fn {
        constructor(Q) {
            super(`Could not find resolver for "${Q}"`, Q);
            this.code = "EUNMATCHEDRESOLVER"
        }
    };
    Vn(Mg5);
    var Og5 = Tg5.MissingPointerError = class extends Fn {
        constructor(Q, B) {
            super(`Token "${Q}" does not exist.`, Qy2(B));
            this.code = "EMISSINGPOINTER"
        }
    };
    Vn(Og5);
    var Rg5 = Tg5.InvalidPointerError = class extends Fn {
        constructor(Q, B) {
            super(`Invalid $ref pointer "${Q}". Pointers must begin with "#/"`, Qy2(B));
            this.code = "EINVALIDPOINTER"
        }
    };
    Vn(Rg5);

    function Vn(A) {
        Object.defineProperty(A.prototype, "name", {
            value: A.name,
            enumerable: !0
        })
    }
    Tg5.isHandledError = function(A) {
        return A instanceof Fn || A instanceof By2
    };
    Tg5.normalizeError = function(A) {
        if (A.path === null) A.path = [];
        return A
    }
});
var yRA = U((V9Z, Iy2) => {
    Iy2.exports = Kn;
    var R50 = GWA(),
        T50 = VO(),
        {
            JSONParserError: Sg5,
            InvalidPointerError: _g5,
            MissingPointerError: kg5,
            isHandledError: yg5
        } = OP(),
        xg5 = /\//g,
        vg5 = /~/g,
        bg5 = /~1/g,
        fg5 = /~0/g;

    function Kn(A, Q, B) {
        this.$ref = A, this.path = Q, this.originalPath = B || Q, this.value = void 0, this.circular = !1, this.indirections = 0
    }
    Kn.prototype.resolve = function(A, Q, B) {
        let G = Kn.parse(this.path, this.originalPath);
        this.value = Zy2(A);
        for (let Z = 0; Z < G.length; Z++) {
            if (e61(this, Q)) this.path = Kn.join(this.path, G.slice(Z));
            if (typeof this.value === "object" && this.value !== null && "$ref" in this.value) return this;
            let I = G[Z];
            if (this.value[I] === void 0 || this.value[I] === null) throw this.value = null, new kg5(I, decodeURI(this.originalPath));
            else this.value = this.value[I]
        }
        if (!this.value || this.value.$ref && T50.resolve(this.path, this.value.$ref) !== B) e61(this, Q);
        return this
    };
    Kn.prototype.set = function(A, Q, B) {
        let G = Kn.parse(this.path),
            Z;
        if (G.length === 0) return this.value = Q, Q;
        this.value = Zy2(A);
        for (let I = 0; I < G.length - 1; I++)
            if (e61(this, B), Z = G[I], this.value && this.value[Z] !== void 0) this.value = this.value[Z];
            else this.value = Gy2(this, Z, {});
        return e61(this, B), Z = G[G.length - 1], Gy2(this, Z, Q), A
    };
    Kn.parse = function(A, Q) {
        let B = T50.getHash(A).substr(1);
        if (!B) return [];
        B = B.split("/");
        for (let G = 0; G < B.length; G++) B[G] = decodeURIComponent(B[G].replace(bg5, "/").replace(fg5, "~"));
        if (B[0] !== "") throw new _g5(B, Q === void 0 ? A : Q);
        return B.slice(1)
    };
    Kn.join = function(A, Q) {
        if (A.indexOf("#") === -1) A += "#";
        Q = Array.isArray(Q) ? Q : [Q];
        for (let B = 0; B < Q.length; B++) {
            let G = Q[B];
            A += "/" + encodeURIComponent(G.replace(vg5, "~0").replace(xg5, "~1"))
        }
        return A
    };

    function e61(A, Q) {
        if (R50.isAllowed$Ref(A.value, Q)) {
            let B = T50.resolve(A.path, A.value.$ref);
            if (B === A.path) A.circular = !0;
            else {
                let G = A.$ref.$refs._resolve(B, A.path, Q);
                if (G === null) return !1;
                if (A.indirections += G.indirections + 1, R50.isExtended$Ref(A.value)) return A.value = R50.dereference(A.value, G.value), !1;
                else A.$ref = G.$ref, A.path = G.path, A.value = G.value;
                return !0
            }
        }
    }

    function Gy2(A, Q, B) {
        if (A.value && typeof A.value === "object")
            if (Q === "-" && Array.isArray(A.value)) A.value.push(B);
            else A.value[Q] = B;
        else throw new Sg5(`Error assigning $ref pointer "${A.path}". 
Cannot set "${Q}" of a non-object.`);
        return B
    }

    function Zy2(A) {
        if (yg5(A)) throw A;
        return A
    }
});
var GWA = U((K9Z, Wy2) => {
    Wy2.exports = lE;
    var Jy2 = yRA(),
        {
            InvalidPointerError: hg5,
            isHandledError: gg5,
            normalizeError: Yy2
        } = OP(),
        {
            safePointerToPath: ug5,
            stripHash: mg5,
            getHash: dg5
        } = VO();

    function lE() {
        this.path = void 0, this.value = void 0, this.$refs = void 0, this.pathType = void 0, this.errors = void 0
    }
    lE.prototype.addError = function(A) {
        if (this.errors === void 0) this.errors = [];
        let Q = this.errors.map(({
            footprint: B
        }) => B);
        if (Array.isArray(A.errors)) this.errors.push(...A.errors.map(Yy2).filter(({
            footprint: B
        }) => !Q.includes(B)));
        else if (!Q.includes(A.footprint)) this.errors.push(Yy2(A))
    };
    lE.prototype.exists = function(A, Q) {
        try {
            return this.resolve(A, Q), !0
        } catch (B) {
            return !1
        }
    };
    lE.prototype.get = function(A, Q) {
        return this.resolve(A, Q).value
    };
    lE.prototype.resolve = function(A, Q, B, G) {
        let Z = new Jy2(this, A, B);
        try {
            return Z.resolve(this.value, Q, G)
        } catch (I) {
            if (!Q || !Q.continueOnError || !gg5(I)) throw I;
            if (I.path === null) I.path = ug5(dg5(G));
            if (I instanceof hg5) I.source = decodeURI(mg5(G));
            return this.addError(I), null
        }
    };
    lE.prototype.set = function(A, Q) {
        let B = new Jy2(this, A);
        this.value = B.set(this.value, Q)
    };
    lE.is$Ref = function(A) {
        return A && typeof A === "object" && typeof A.$ref === "string" && A.$ref.length > 0
    };
    lE.isExternal$Ref = function(A) {
        return lE.is$Ref(A) && A.$ref[0] !== "#"
    };
    lE.isAllowed$Ref = function(A, Q) {
        if (lE.is$Ref(A)) {
            if (A.$ref.substr(0, 2) === "#/" || A.$ref === "#") return !0;
            else if (A.$ref[0] !== "#" && (!Q || Q.resolve.external)) return !0
        }
    };
    lE.isExtended$Ref = function(A) {
        return lE.is$Ref(A) && Object.keys(A).length > 1
    };
    lE.dereference = function(A, Q) {
        if (Q && typeof Q === "object" && lE.isExtended$Ref(A)) {
            let B = {};
            for (let G of Object.keys(A))
                if (G !== "$ref") B[G] = A[G];
            for (let G of Object.keys(Q))
                if (!(G in B)) B[G] = Q[G];
            return B
        } else return Q
    }
});
var Ky2 = U((D9Z, Vy2) => {
    var {
        ono: Xy2
    } = Xn(), cg5 = GWA(), Dn = VO();
    Vy2.exports = RP;

    function RP() {
        this.circular = !1, this._$refs = {}, this._root$Ref = null
    }
    RP.prototype.paths = function(A) {
        return Fy2(this._$refs, arguments).map((B) => {
            return B.decoded
        })
    };
    RP.prototype.values = function(A) {
        let Q = this._$refs;
        return Fy2(Q, arguments).reduce((G, Z) => {
            return G[Z.decoded] = Q[Z.encoded].value, G
        }, {})
    };
    RP.prototype.toJSON = RP.prototype.values;
    RP.prototype.exists = function(A, Q) {
        try {
            return this._resolve(A, "", Q), !0
        } catch (B) {
            return !1
        }
    };
    RP.prototype.get = function(A, Q) {
        return this._resolve(A, "", Q).value
    };
    RP.prototype.set = function(A, Q) {
        let B = Dn.resolve(this._root$Ref.path, A),
            G = Dn.stripHash(B),
            Z = this._$refs[G];
        if (!Z) throw Xy2(`Error resolving $ref pointer "${A}". 
"${G}" not found.`);
        Z.set(B, Q)
    };
    RP.prototype._add = function(A) {
        let Q = Dn.stripHash(A),
            B = new cg5;
        return B.path = Q, B.$refs = this, this._$refs[Q] = B, this._root$Ref = this._root$Ref || B, B
    };
    RP.prototype._resolve = function(A, Q, B) {
        let G = Dn.resolve(this._root$Ref.path, A),
            Z = Dn.stripHash(G),
            I = this._$refs[Z];
        if (!I) throw Xy2(`Error resolving $ref pointer "${A}". 
"${Z}" not found.`);
        return I.resolve(G, B, A, Q)
    };
    RP.prototype._get$Ref = function(A) {
        A = Dn.resolve(this._root$Ref.path, A);
        let Q = Dn.stripHash(A);
        return this._$refs[Q]
    };

    function Fy2(A, Q) {
        let B = Object.keys(A);
        if (Q = Array.isArray(Q[0]) ? Q[0] : Array.prototype.slice.call(Q), Q.length > 0 && Q[0]) B = B.filter((G) => {
            return Q.indexOf(A[G].pathType) !== -1
        });
        return B.map((G) => {
            return {
                encoded: G,
                decoded: A[G].pathType === "file" ? Dn.toFileSystemPath(G, !0) : G
            }
        })
    }
});
var Hy2 = U((pg5) => {
    pg5.all = function(A) {
        return Object.keys(A).filter((Q) => {
            return typeof A[Q] === "object"
        }).map((Q) => {
            return A[Q].name = Q, A[Q]
        })
    };
    pg5.filter = function(A, Q, B) {
        return A.filter((G) => {
            return !!Dy2(G, Q, B)
        })
    };
    pg5.sort = function(A) {
        for (let Q of A) Q.order = Q.order || Number.MAX_SAFE_INTEGER;
        return A.sort((Q, B) => {
            return Q.order - B.order
        })
    };
    pg5.run = function(A, Q, B, G) {
        let Z, I, Y = 0;
        return new Promise((J, W) => {
            X();

            function X() {
                if (Z = A[Y++], !Z) return W(I);
                try {
                    let D = Dy2(Z, Q, B, F, G);
                    if (D && typeof D.then === "function") D.then(V, K);
                    else if (D !== void 0) V(D);
                    else if (Y === A.length) throw Error("No promise has been returned or callback has been called.")
                } catch (D) {
                    K(D)
                }
            }

            function F(D, H) {
                if (D) K(D);
                else V(H)
            }

            function V(D) {
                J({
                    plugin: Z,
                    result: D
                })
            }

            function K(D) {
                I = {
                    plugin: Z,
                    error: D
                }, X()
            }
        })
    };

    function Dy2(A, Q, B, G, Z) {
        let I = A[Q];
        if (typeof I === "function") return I.apply(A, [B, G, Z]);
        if (!G) {
            if (I instanceof RegExp) return I.test(B.url);
            else if (typeof I === "string") return I === B.extension;
            else if (Array.isArray(I)) return I.indexOf(B.extension) !== -1
        }
        return I
    }
});
var j50 = U((C9Z, Uy2) => {
    var {
        ono: P50
    } = Xn(), Cy2 = VO(), Hn = Hy2(), {
        ResolverError: Ey2,
        ParserError: zy2,
        UnmatchedParserError: sg5,
        UnmatchedResolverError: rg5,
        isHandledError: og5
    } = OP();
    Uy2.exports = tg5;
    async function tg5(A, Q, B) {
        A = Cy2.stripHash(A);
        let G = Q._add(A),
            Z = {
                url: A,
                extension: Cy2.getExtension(A)
            };
        try {
            let I = await eg5(Z, B, Q);
            G.pathType = I.plugin.name, Z.data = I.result;
            let Y = await Au5(Z, B, Q);
            return G.value = Y.result, Y.result
        } catch (I) {
            if (og5(I)) G.value = I;
            throw I
        }
    }

    function eg5(A, Q, B) {
        return new Promise((G, Z) => {
            let I = Hn.all(Q.resolve);
            I = Hn.filter(I, "canRead", A), Hn.sort(I), Hn.run(I, "read", A, B).then(G, Y);

            function Y(J) {
                if (!J && Q.continueOnError) Z(new rg5(A.url));
                else if (!J || !("error" in J)) Z(P50.syntax(`Unable to resolve $ref pointer "${A.url}"`));
                else if (J.error instanceof Ey2) Z(J.error);
                else Z(new Ey2(J, A.url))
            }
        })
    }

    function Au5(A, Q, B) {
        return new Promise((G, Z) => {
            let I = Hn.all(Q.parse),
                Y = Hn.filter(I, "canParse", A),
                J = Y.length > 0 ? Y : I;
            Hn.sort(J), Hn.run(J, "parse", A, B).then(W, X);

            function W(F) {
                if (!F.plugin.allowEmpty && Qu5(F.result)) Z(P50.syntax(`Error parsing "${A.url}" as ${F.plugin.name}. 
Parsed value is empty`));
                else G(F)
            }

            function X(F) {
                if (!F && Q.continueOnError) Z(new sg5(A.url));
                else if (!F || !("error" in F)) Z(P50.syntax(`Unable to parse ${A.url}`));
                else if (F.error instanceof zy2) Z(F.error);
                else Z(new zy2(F.error.message, A.url))
            }
        })
    }

    function Qu5(A) {
        return A === void 0 || typeof A === "object" && Object.keys(A).length === 0 || typeof A === "string" && A.trim().length === 0 || Buffer.isBuffer(A) && A.length === 0
    }
});
var wy2 = U((E9Z, $y2) => {
    var {
        ParserError: Bu5
    } = OP();
    $y2.exports = {
        order: 100,
        allowEmpty: !0,
        canParse: ".json",
        async parse(A) {
            let Q = A.data;
            if (Buffer.isBuffer(Q)) Q = Q.toString();
            if (typeof Q === "string")
                if (Q.trim().length === 0) return;
                else try {
                    return JSON.parse(Q)
                } catch (B) {
                    throw new Bu5(B.message, A.url)
                } else return Q
        }
    }
});
var ZWA = U((Wu5, C0A) => {
    function qy2(A) {
        return typeof A > "u" || A === null
    }

    function Gu5(A) {
        return typeof A === "object" && A !== null
    }

    function Zu5(A) {
        if (Array.isArray(A)) return A;
        else if (qy2(A)) return [];
        return [A]
    }

    function Iu5(A, Q) {
        var B, G, Z, I;
        if (Q) {
            I = Object.keys(Q);
            for (B = 0, G = I.length; B < G; B += 1) Z = I[B], A[Z] = Q[Z]
        }
        return A
    }

    function Yu5(A, Q) {
        var B = "",
            G;
        for (G = 0; G < Q; G += 1) B += A;
        return B
    }

    function Ju5(A) {
        return A === 0 && Number.NEGATIVE_INFINITY === 1 / A
    }
    Wu5.isNothing = qy2;
    Wu5.isObject = Gu5;
    Wu5.toArray = Zu5;
    Wu5.repeat = Yu5;
    Wu5.isNegativeZero = Ju5;
    Wu5.extend = Iu5
});
var IWA = U((z9Z, Ly2) => {
    function Ny2(A, Q) {
        var B = "",
            G = A.reason || "(unknown reason)";
        if (!A.mark) return G;
        if (A.mark.name) B += 'in "' + A.mark.name + '" ';
        if (B += "(" + (A.mark.line + 1) + ":" + (A.mark.column + 1) + ")", !Q && A.mark.snippet) B += `

` + A.mark.snippet;
        return G + " " + B
    }

    function xRA(A, Q) {
        if (Error.call(this), this.name = "YAMLException", this.reason = A, this.mark = Q, this.message = Ny2(this, !1), Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
        else this.stack = Error().stack || ""
    }
    xRA.prototype = Object.create(Error.prototype);
    xRA.prototype.constructor = xRA;
    xRA.prototype.toString = function(Q) {
        return this.name + ": " + Ny2(this, Q)
    };
    Ly2.exports = xRA
});
var Oy2 = U((U9Z, My2) => {
    var vRA = ZWA();

    function S50(A, Q, B, G, Z) {
        var I = "",
            Y = "",
            J = Math.floor(Z / 2) - 1;
        if (G - Q > J) I = " ... ", Q = G - J + I.length;
        if (B - G > J) Y = " ...", B = G + J - Y.length;
        return {
            str: I + A.slice(Q, B).replace(/\t/g, "→") + Y,
            pos: G - Q + I.length
        }
    }

    function _50(A, Q) {
        return vRA.repeat(" ", Q - A.length) + A
    }

    function Cu5(A, Q) {
        if (Q = Object.create(Q || null), !A.buffer) return null;
        if (!Q.maxLength) Q.maxLength = 79;
        if (typeof Q.indent !== "number") Q.indent = 1;
        if (typeof Q.linesBefore !== "number") Q.linesBefore = 3;
        if (typeof Q.linesAfter !== "number") Q.linesAfter = 2;
        var B = /\r?\n|\r|\0/g,
            G = [0],
            Z = [],
            I, Y = -1;
        while (I = B.exec(A.buffer))
            if (Z.push(I.index), G.push(I.index + I[0].length), A.position <= I.index && Y < 0) Y = G.length - 2;
        if (Y < 0) Y = G.length - 1;
        var J = "",
            W, X, F = Math.min(A.line + Q.linesAfter, Z.length).toString().length,
            V = Q.maxLength - (Q.indent + F + 3);
        for (W = 1; W <= Q.linesBefore; W++) {
            if (Y - W < 0) break;
            X = S50(A.buffer, G[Y - W], Z[Y - W], A.position - (G[Y] - G[Y - W]), V), J = vRA.repeat(" ", Q.indent) + _50((A.line - W + 1).toString(), F) + " | " + X.str + `
` + J
        }
        X = S50(A.buffer, G[Y], Z[Y], A.position, V), J += vRA.repeat(" ", Q.indent) + _50((A.line + 1).toString(), F) + " | " + X.str + `
`, J += vRA.repeat("-", Q.indent + F + 3 + X.pos) + `^
`;
        for (W = 1; W <= Q.linesAfter; W++) {
            if (Y + W >= Z.length) break;
            X = S50(A.buffer, G[Y + W], Z[Y + W], A.position - (G[Y] - G[Y + W]), V), J += vRA.repeat(" ", Q.indent) + _50((A.line + W + 1).toString(), F) + " | " + X.str + `
`
        }
        return J.replace(/\n$/, "")
    }
    My2.exports = Cu5
});
var IC = U(($9Z, Ty2) => {
    var Ry2 = IWA(),
        Eu5 = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"],
        zu5 = ["scalar", "sequence", "mapping"];

    function Uu5(A) {
        var Q = {};
        if (A !== null) Object.keys(A).forEach(function(B) {
            A[B].forEach(function(G) {
                Q[String(G)] = B
            })
        });
        return Q
    }

    function $u5(A, Q) {
        if (Q = Q || {}, Object.keys(Q).forEach(function(B) {
                if (Eu5.indexOf(B) === -1) throw new Ry2('Unknown option "' + B + '" is met in definition of "' + A + '" YAML type.')
            }), this.options = Q, this.tag = A, this.kind = Q.kind || null, this.resolve = Q.resolve || function() {
                return !0
            }, this.construct = Q.construct || function(B) {
                return B
            }, this.instanceOf = Q.instanceOf || null, this.predicate = Q.predicate || null, this.represent = Q.represent || null, this.representName = Q.representName || null, this.defaultStyle = Q.defaultStyle || null, this.multi = Q.multi || !1, this.styleAliases = Uu5(Q.styleAliases || null), zu5.indexOf(this.kind) === -1) throw new Ry2('Unknown kind "' + this.kind + '" is specified for "' + A + '" YAML type.')
    }
    Ty2.exports = $u5
});