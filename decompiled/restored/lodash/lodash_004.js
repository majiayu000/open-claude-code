/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: lodash_004.js
 * 处理时间: 2025-12-09T03:37:24.919Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: lodash
 * File: 4/5
 * Lines: 49317 - 50815 (1499 lines)
 * Original file: cli.js
 */

                        while (J < I.path.length) {
                            let W = I.path[J];
                            if (J !== I.path.length - 1) Y[W] = Y[W] || {
                                _errors: []
                            };
                            else Y[W] = Y[W] || {
                                _errors: []
                            }, Y[W]._errors.push(Q(I));
                            Y = Y[W], J++
                        }
                    }
                };
            return G(this), B
        }
        static assert(A) {
            if (!(A instanceof gz)) throw Error(`Not a ZodError: ${A}`)
        }
        toString() {
            return this.message
        }
        get message() {
            return JSON.stringify(this.issues, d6.jsonStringifyReplacer, 2)
        }
        get isEmpty() {
            return this.issues.length === 0
        }
        flatten(A = (Q) => Q.message) {
            let Q = {},
                B = [];
            for (let G of this.issues)
                if (G.path.length > 0) {
                    let Z = G.path[0];
                    Q[Z] = Q[Z] || [], Q[Z].push(A(G))
                } else B.push(A(G));
            return {
                formErrors: B,
                fieldErrors: Q
            }
        }
        get formErrors() {
            return this.flatten()
        }
    };
    gz.create = (A) => {
        return new gz(A)
    }
});
var e64 = (A, Q) => {
        let B;
        switch (A.code) {
            case wQ.invalid_type:
                if (A.received === aQ.undefined) B = "Required";
                else B = `Expected ${A.expected}, received ${A.received}`;
                break;
            case wQ.invalid_literal:
                B = `Invalid literal value, expected ${JSON.stringify(A.expected,d6.jsonStringifyReplacer)}`;
                break;
            case wQ.unrecognized_keys:
                B = `Unrecognized key(s) in object: ${d6.joinValues(A.keys,", ")}`;
                break;
            case wQ.invalid_union:
                B = "Invalid input";
                break;
            case wQ.invalid_union_discriminator:
                B = `Invalid discriminator value. Expected ${d6.joinValues(A.options)}`;
                break;
            case wQ.invalid_enum_value:
                B = `Invalid enum value. Expected ${d6.joinValues(A.options)}, received '${A.received}'`;
                break;
            case wQ.invalid_arguments:
                B = "Invalid function arguments";
                break;
            case wQ.invalid_return_type:
                B = "Invalid function return type";
                break;
            case wQ.invalid_date:
                B = "Invalid date";
                break;
            case wQ.invalid_string:
                if (typeof A.validation === "object")
                    if ("includes" in A.validation) {
                        if (B = `Invalid input: must include "${A.validation.includes}"`, typeof A.validation.position === "number") B = `${B} at one or more positions greater than or equal to ${A.validation.position}`
                    } else if ("startsWith" in A.validation) B = `Invalid input: must start with "${A.validation.startsWith}"`;
                else if ("endsWith" in A.validation) B = `Invalid input: must end with "${A.validation.endsWith}"`;
                else d6.assertNever(A.validation);
                else if (A.validation !== "regex") B = `Invalid ${A.validation}`;
                else B = "Invalid";
                break;
            case wQ.too_small:
                if (A.type === "array") B = `Array must contain ${A.exact?"exactly":A.inclusive?"at least":"more than"} ${A.minimum} element(s)`;
                else if (A.type === "string") B = `String must contain ${A.exact?"exactly":A.inclusive?"at least":"over"} ${A.minimum} character(s)`;
                else if (A.type === "number") B = `Number must be ${A.exact?"exactly equal to ":A.inclusive?"greater than or equal to ":"greater than "}${A.minimum}`;
                else if (A.type === "bigint") B = `Number must be ${A.exact?"exactly equal to ":A.inclusive?"greater than or equal to ":"greater than "}${A.minimum}`;
                else if (A.type === "date") B = `Date must be ${A.exact?"exactly equal to ":A.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(A.minimum))}`;
                else B = "Invalid input";
                break;
            case wQ.too_big:
                if (A.type === "array") B = `Array must contain ${A.exact?"exactly":A.inclusive?"at most":"less than"} ${A.maximum} element(s)`;
                else if (A.type === "string") B = `String must contain ${A.exact?"exactly":A.inclusive?"at most":"under"} ${A.maximum} character(s)`;
                else if (A.type === "number") B = `Number must be ${A.exact?"exactly":A.inclusive?"less than or equal to":"less than"} ${A.maximum}`;
                else if (A.type === "bigint") B = `BigInt must be ${A.exact?"exactly":A.inclusive?"less than or equal to":"less than"} ${A.maximum}`;
                else if (A.type === "date") B = `Date must be ${A.exact?"exactly":A.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(A.maximum))}`;
                else B = "Invalid input";
                break;
            case wQ.custom:
                B = "Invalid input";
                break;
            case wQ.invalid_intersection_types:
                B = "Intersection results could not be merged";
                break;
            case wQ.not_multiple_of:
                B = `Number must be a multiple of ${A.multipleOf}`;
                break;
            case wQ.not_finite:
                B = "Number must be finite";
                break;
            default:
                B = Q.defaultError, d6.assertNever(A)
        }
        return {
            message: B
        }
    },
    Bv;
var LC1 = L(() => {
    txA();
    qKA();
    Bv = e64
});

function A54(A) {
    tp0 = A
}

function y9A() {
    return tp0
}
var tp0;
var exA = L(() => {
    LC1();
    tp0 = Bv
});

function UB(A, Q) {
    let B = y9A(),
        G = NKA({
            issueData: Q,
            data: A.data,
            path: A.path,
            errorMaps: [A.common.contextualErrorMap, A.schemaErrorMap, B, B === Bv ? void 0 : Bv].filter((Z) => !!Z)
        });
    A.common.issues.push(G)
}
class fK {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        if (this.value === "valid") this.value = "dirty"
    }
    abort() {
        if (this.value !== "aborted") this.value = "aborted"
    }
    static mergeArray(A, Q) {
        let B = [];
        for (let G of Q) {
            if (G.status === "aborted") return r9;
            if (G.status === "dirty") A.dirty();
            B.push(G.value)
        }
        return {
            status: A.value,
            value: B
        }
    }
    static async mergeObjectAsync(A, Q) {
        let B = [];
        for (let G of Q) {
            let Z = await G.key,
                I = await G.value;
            B.push({
                key: Z,
                value: I
            })
        }
        return fK.mergeObjectSync(A, B)
    }
    static mergeObjectSync(A, Q) {
        let B = {};
        for (let G of Q) {
            let {
                key: Z,
                value: I
            } = G;
            if (Z.status === "aborted") return r9;
            if (I.status === "aborted") return r9;
            if (Z.status === "dirty") A.dirty();
            if (I.status === "dirty") A.dirty();
            if (Z.value !== "__proto__" && (typeof I.value < "u" || G.alwaysSet)) B[Z.value] = I.value
        }
        return {
            status: A.value,
            value: B
        }
    }
}
var NKA = (A) => {
        let {
            data: Q,
            path: B,
            errorMaps: G,
            issueData: Z
        } = A, I = [...B, ...Z.path || []], Y = {
            ...Z,
            path: I
        };
        if (Z.message !== void 0) return {
            ...Z,
            path: I,
            message: Z.message
        };
        let J = "",
            W = G.filter((X) => !!X).slice().reverse();
        for (let X of W) J = X(Y, {
            data: Q,
            defaultError: J
        }).message;
        return {
            ...Z,
            path: I,
            message: J
        }
    },
    Q54, r9, os = (A) => ({
        status: "dirty",
        value: A
    }),
    HH = (A) => ({
        status: "valid",
        value: A
    }),
    AvA = (A) => A.status === "aborted",
    QvA = (A) => A.status === "dirty",
    qm = (A) => A.status === "valid",
    x9A = (A) => typeof Promise < "u" && A instanceof Promise;
var MC1 = L(() => {
    exA();
    LC1();
    Q54 = [];
    r9 = Object.freeze({
        status: "aborted"
    })
});
var ep0 = () => {};
var f2;
var Al0 = L(() => {
    (function(A) {
        A.errToObj = (Q) => typeof Q === "string" ? {
            message: Q
        } : Q || {}, A.toString = (Q) => typeof Q === "string" ? Q : Q?.message
    })(f2 || (f2 = {}))
});
class qR {
    constructor(A, Q, B, G) {
        this._cachedPath = [], this.parent = A, this.data = Q, this._path = B, this._key = G
    }
    get path() {
        if (!this._cachedPath.length)
            if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);
            else this._cachedPath.push(...this._path, this._key);
        return this._cachedPath
    }
}

function O8(A) {
    if (!A) return {};
    let {
        errorMap: Q,
        invalid_type_error: B,
        required_error: G,
        description: Z
    } = A;
    if (Q && (B || G)) throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    if (Q) return {
        errorMap: Q,
        description: Z
    };
    return {
        errorMap: (Y, J) => {
            let {
                message: W
            } = A;
            if (Y.code === "invalid_enum_value") return {
                message: W ?? J.defaultError
            };
            if (typeof J.data > "u") return {
                message: W ?? G ?? J.defaultError
            };
            if (Y.code !== "invalid_type") return {
                message: J.defaultError
            };
            return {
                message: W ?? B ?? J.defaultError
            }
        },
        description: Z
    }
}
class Y6 {
    get description() {
        return this._def.description
    }
    _getType(A) {
        return ij(A.data)
    }
    _getOrReturnCtx(A, Q) {
        return Q || {
            common: A.parent.common,
            data: A.data,
            parsedType: ij(A.data),
            schemaErrorMap: this._def.errorMap,
            path: A.path,
            parent: A.parent
        }
    }
    _processInputParams(A) {
        return {
            status: new fK,
            ctx: {
                common: A.parent.common,
                data: A.data,
                parsedType: ij(A.data),
                schemaErrorMap: this._def.errorMap,
                path: A.path,
                parent: A.parent
            }
        }
    }
    _parseSync(A) {
        let Q = this._parse(A);
        if (x9A(Q)) throw Error("Synchronous parse encountered promise.");
        return Q
    }
    _parseAsync(A) {
        let Q = this._parse(A);
        return Promise.resolve(Q)
    }
    parse(A, Q) {
        let B = this.safeParse(A, Q);
        if (B.success) return B.data;
        throw B.error
    }
    safeParse(A, Q) {
        let B = {
                common: {
                    issues: [],
                    async: Q?.async ?? !1,
                    contextualErrorMap: Q?.errorMap
                },
                path: Q?.path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: A,
                parsedType: ij(A)
            },
            G = this._parseSync({
                data: A,
                path: B.path,
                parent: B
            });
        return Ql0(B, G)
    }
    "~validate"(A) {
        let Q = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: A,
            parsedType: ij(A)
        };
        if (!this["~standard"].async) try {
            let B = this._parseSync({
                data: A,
                path: [],
                parent: Q
            });
            return qm(B) ? {
                value: B.value
            } : {
                issues: Q.common.issues
            }
        } catch (B) {
            if (B?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = !0;
            Q.common = {
                issues: [],
                async: !0
            }
        }
        return this._parseAsync({
            data: A,
            path: [],
            parent: Q
        }).then((B) => qm(B) ? {
            value: B.value
        } : {
            issues: Q.common.issues
        })
    }
    async parseAsync(A, Q) {
        let B = await this.safeParseAsync(A, Q);
        if (B.success) return B.data;
        throw B.error
    }
    async safeParseAsync(A, Q) {
        let B = {
                common: {
                    issues: [],
                    contextualErrorMap: Q?.errorMap,
                    async: !0
                },
                path: Q?.path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: A,
                parsedType: ij(A)
            },
            G = this._parse({
                data: A,
                path: B.path,
                parent: B
            }),
            Z = await (x9A(G) ? G : Promise.resolve(G));
        return Ql0(B, Z)
    }
    refine(A, Q) {
        let B = (G) => {
            if (typeof Q === "string" || typeof Q > "u") return {
                message: Q
            };
            else if (typeof Q === "function") return Q(G);
            else return Q
        };
        return this._refinement((G, Z) => {
            let I = A(G),
                Y = () => Z.addIssue({
                    code: wQ.custom,
                    ...B(G)
                });
            if (typeof Promise < "u" && I instanceof Promise) return I.then((J) => {
                if (!J) return Y(), !1;
                else return !0
            });
            if (!I) return Y(), !1;
            else return !0
        })
    }
    refinement(A, Q) {
        return this._refinement((B, G) => {
            if (!A(B)) return G.addIssue(typeof Q === "function" ? Q(B, G) : Q), !1;
            else return !0
        })
    }
    _refinement(A) {
        return new NR({
            schema: this,
            typeName: OQ.ZodEffects,
            effect: {
                type: "refinement",
                refinement: A
            }
        })
    }
    superRefine(A) {
        return this._refinement(A)
    }
    constructor(A) {
        this.spa = this.safeParseAsync, this._def = A, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (Q) => this["~validate"](Q)
        }
    }
    optional() {
        return e$.create(this, this._def)
    }
    nullable() {
        return Zv.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return wR.create(this)
    }
    promise() {
        return Qr.create(this, this._def)
    }
    or(A) {
        return u9A.create([this, A], this._def)
    }
    and(A) {
        return m9A.create(this, A, this._def)
    }
    transform(A) {
        return new NR({
            ...O8(this._def),
            schema: this,
            typeName: OQ.ZodEffects,
            effect: {
                type: "transform",
                transform: A
            }
        })
    }
    default (A) {
        let Q = typeof A === "function" ? A : () => A;
        return new l9A({
            ...O8(this._def),
            innerType: this,
            defaultValue: Q,
            typeName: OQ.ZodDefault
        })
    }
    brand() {
        return new GvA({
            typeName: OQ.ZodBranded,
            type: this,
            ...O8(this._def)
        })
    } catch (A) {
        let Q = typeof A === "function" ? A : () => A;
        return new i9A({
            ...O8(this._def),
            innerType: this,
            catchValue: Q,
            typeName: OQ.ZodCatch
        })
    }
    describe(A) {
        return new this.constructor({
            ...this._def,
            description: A
        })
    }
    pipe(A) {
        return PKA.create(this, A)
    }
    readonly() {
        return n9A.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}

function Zl0(A) {
    let Q = "[0-5]\\d";
    if (A.precision) Q = `${Q}\\.\\d{${A.precision}}`;
    else if (A.precision == null) Q = `${Q}(\\.\\d+)?`;
    let B = A.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${Q})${B}`
}

function U54(A) {
    return new RegExp(`^${Zl0(A)}$`)
}

function Il0(A) {
    let Q = `${Gl0}T${Zl0(A)}`,
        B = [];
    if (B.push(A.local ? "Z?" : "Z"), A.offset) B.push("([+-]\\d{2}:?\\d{2})");
    return Q = `${Q}(${B.join("|")})`, new RegExp(`^${Q}$`)
}

function $54(A, Q) {
    if ((Q === "v4" || !Q) && V54.test(A)) return !0;
    if ((Q === "v6" || !Q) && D54.test(A)) return !0;
    return !1
}

function w54(A, Q) {
    if (!J54.test(A)) return !1;
    try {
        let [B] = A.split(".");
        if (!B) return !1;
        let G = B.replace(/-/g, "+").replace(/_/g, "/").padEnd(B.length + (4 - B.length % 4) % 4, "="),
            Z = JSON.parse(atob(G));
        if (typeof Z !== "object" || Z === null) return !1;
        if ("typ" in Z && Z?.typ !== "JWT") return !1;
        if (!Z.alg) return !1;
        if (Q && Z.alg !== Q) return !1;
        return !0
    } catch {
        return !1
    }
}

function q54(A, Q) {
    if ((Q === "v4" || !Q) && K54.test(A)) return !0;
    if ((Q === "v6" || !Q) && H54.test(A)) return !0;
    return !1
}

function N54(A, Q) {
    let B = (A.toString().split(".")[1] || "").length,
        G = (Q.toString().split(".")[1] || "").length,
        Z = B > G ? B : G,
        I = Number.parseInt(A.toFixed(Z).replace(".", "")),
        Y = Number.parseInt(Q.toFixed(Z).replace(".", ""));
    return I % Y / 10 ** Z
}

function v9A(A) {
    if (A instanceof SY) {
        let Q = {};
        for (let B in A.shape) {
            let G = A.shape[B];
            Q[B] = e$.create(v9A(G))
        }
        return new SY({
            ...A._def,
            shape: () => Q
        })
    } else if (A instanceof wR) return new wR({
        ...A._def,
        type: v9A(A.element)
    });
    else if (A instanceof e$) return e$.create(v9A(A.unwrap()));
    else if (A instanceof Zv) return Zv.create(v9A(A.unwrap()));
    else if (A instanceof aj) return aj.create(A.items.map((Q) => v9A(Q)));
    else return A
}

function RC1(A, Q) {
    let B = ij(A),
        G = ij(Q);
    if (A === Q) return {
        valid: !0,
        data: A
    };
    else if (B === aQ.object && G === aQ.object) {
        let Z = d6.objectKeys(Q),
            I = d6.objectKeys(A).filter((J) => Z.indexOf(J) !== -1),
            Y = {
                ...A,
                ...Q
            };
        for (let J of I) {
            let W = RC1(A[J], Q[J]);
            if (!W.valid) return {
                valid: !1
            };
            Y[J] = W.data
        }
        return {
            valid: !0,
            data: Y
        }
    } else if (B === aQ.array && G === aQ.array) {
        if (A.length !== Q.length) return {
            valid: !1
        };
        let Z = [];
        for (let I = 0; I < A.length; I++) {
            let Y = A[I],
                J = Q[I],
                W = RC1(Y, J);
            if (!W.valid) return {
                valid: !1
            };
            Z.push(W.data)
        }
        return {
            valid: !0,
            data: Z
        }
    } else if (B === aQ.date && G === aQ.date && +A === +Q) return {
        valid: !0,
        data: A
    };
    else return {
        valid: !1
    }
}

function Yl0(A, Q) {
    return new Om({
        values: A,
        typeName: OQ.ZodEnum,
        ...O8(Q)
    })
}

function Bl0(A, Q) {
    let B = typeof A === "function" ? A(Q) : typeof A === "string" ? {
        message: A
    } : A;
    return typeof B === "string" ? {
        message: B
    } : B
}

function Jl0(A, Q = {}, B) {
    if (A) return es.create().superRefine((G, Z) => {
        let I = A(G);
        if (I instanceof Promise) return I.then((Y) => {
            if (!Y) {
                let J = Bl0(Q, G),
                    W = J.fatal ?? B ?? !0;
                Z.addIssue({
                    code: "custom",
                    ...J,
                    fatal: W
                })
            }
        });
        if (!I) {
            let Y = Bl0(Q, G),
                J = Y.fatal ?? B ?? !0;
            Z.addIssue({
                code: "custom",
                ...Y,
                fatal: J
            })
        }
        return
    });
    return es.create()
}
var Ql0 = (A, Q) => {
        if (qm(Q)) return {
            success: !0,
            data: Q.value
        };
        else {
            if (!A.common.issues.length) throw Error("Validation failed but no issues detected.");
            return {
                success: !1,
                get error() {
                    if (this._error) return this._error;
                    let B = new gz(A.common.issues);
                    return this._error = B, this._error
                }
            }
        }
    },
    B54, G54, Z54, I54, Y54, J54, W54, X54, F54 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
    OC1, V54, K54, D54, H54, C54, E54, Gl0 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
    z54, $R, Lm, Mm, f9A, ts, LKA, h9A, g9A, es, Nm, nj, MKA, wR, SY, u9A, Gv = (A) => {
        if (A instanceof d9A) return Gv(A.schema);
        else if (A instanceof NR) return Gv(A.innerType());
        else if (A instanceof c9A) return [A.value];
        else if (A instanceof Om) return A.options;
        else if (A instanceof p9A) return d6.objectValues(A.enum);
        else if (A instanceof l9A) return Gv(A._def.innerType);
        else if (A instanceof h9A) return [void 0];
        else if (A instanceof g9A) return [null];
        else if (A instanceof e$) return [void 0, ...Gv(A.unwrap())];
        else if (A instanceof Zv) return [null, ...Gv(A.unwrap())];
        else if (A instanceof GvA) return Gv(A.unwrap());
        else if (A instanceof n9A) return Gv(A.unwrap());
        else if (A instanceof i9A) return Gv(A._def.innerType);
        else return []
    },
    BvA, m9A, aj, OKA, RKA, Ar, b9A, d9A, c9A, Om, p9A, Qr, NR, e$, Zv, l9A, i9A, TKA, L54, GvA, PKA, n9A, M54, OQ, O54 = (A, Q = {
        message: `Input not instance of ${A.name}`
    }) => Jl0((B) => B instanceof A, Q),
    EQ, uN, R54, T54, UV, P54, j54, S54, _54, k54, y54, x54, v54, CJ, Aw, Qw, Br, b54, f54, h54, LR, g54, u54, m54, d54, c54, MR, p54, l54, i54, n54, a54, s54, r54, o54 = () => EQ().optional(),
    t54 = () => uN().optional(),
    e54 = () => UV().optional(),
    A34, Q34;
var Wl0 = L(() => {
    txA();
    exA();
    Al0();
    MC1();
    qKA();
    B54 = /^c[^\s-]{8,}$/i, G54 = /^[0-9a-z]+$/, Z54 = /^[0-9A-HJKMNP-TV-Z]{26}$/i, I54 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Y54 = /^[a-z0-9_-]{21}$/i, J54 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, W54 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, X54 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, V54 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, K54 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, D54 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, H54 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, C54 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, E54 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, z54 = new RegExp(`^${Gl0}$`);
    $R = class $R extends Y6 {
        _parse(A) {
            if (this._def.coerce) A.data = String(A.data);
            if (this._getType(A) !== aQ.string) {
                let Z = this._getOrReturnCtx(A);
                return UB(Z, {
                    code: wQ.invalid_type,
                    expected: aQ.string,
                    received: Z.parsedType
                }), r9
            }
            let B = new fK,
                G = void 0;
            for (let Z of this._def.checks)
                if (Z.kind === "min") {
                    if (A.data.length < Z.value) G = this._getOrReturnCtx(A, G), UB(G, {
                        code: wQ.too_small,
                        minimum: Z.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: Z.message
                    }), B.dirty()
                } else if (Z.kind === "max") {
                if (A.data.length > Z.value) G = this._getOrReturnCtx(A, G), UB(G, {
                    code: wQ.too_big,
                    maximum: Z.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "length") {
                let I = A.data.length > Z.value,
                    Y = A.data.length < Z.value;
                if (I || Y) {
                    if (G = this._getOrReturnCtx(A, G), I) UB(G, {
                        code: wQ.too_big,
                        maximum: Z.value,
                        type: "string",
                        inclusive: !0,
                        exact: !0,
                        message: Z.message
                    });
                    else if (Y) UB(G, {
                        code: wQ.too_small,
                        minimum: Z.value,
                        type: "string",
                        inclusive: !0,
                        exact: !0,
                        message: Z.message
                    });
                    B.dirty()
                }
            } else if (Z.kind === "email") {
                if (!X54.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "email",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "emoji") {
                if (!OC1) OC1 = new RegExp(F54, "u");
                if (!OC1.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "emoji",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "uuid") {
                if (!I54.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "uuid",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "nanoid") {
                if (!Y54.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "nanoid",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "cuid") {
                if (!B54.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "cuid",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "cuid2") {
                if (!G54.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "cuid2",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "ulid") {
                if (!Z54.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "ulid",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "url") try {
                new URL(A.data)
            } catch {
                G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "url",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "regex") {
                if (Z.regex.lastIndex = 0, !Z.regex.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "regex",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "trim") A.data = A.data.trim();
            else if (Z.kind === "includes") {
                if (!A.data.includes(Z.value, Z.position)) G = this._getOrReturnCtx(A, G), UB(G, {
                    code: wQ.invalid_string,
                    validation: {
                        includes: Z.value,
                        position: Z.position
                    },
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "toLowerCase") A.data = A.data.toLowerCase();
            else if (Z.kind === "toUpperCase") A.data = A.data.toUpperCase();
            else if (Z.kind === "startsWith") {
                if (!A.data.startsWith(Z.value)) G = this._getOrReturnCtx(A, G), UB(G, {
                    code: wQ.invalid_string,
                    validation: {
                        startsWith: Z.value
                    },
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "endsWith") {
                if (!A.data.endsWith(Z.value)) G = this._getOrReturnCtx(A, G), UB(G, {
                    code: wQ.invalid_string,
                    validation: {
                        endsWith: Z.value
                    },
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "datetime") {
                if (!Il0(Z).test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    code: wQ.invalid_string,
                    validation: "datetime",
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "date") {
                if (!z54.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    code: wQ.invalid_string,
                    validation: "date",
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "time") {
                if (!U54(Z).test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    code: wQ.invalid_string,
                    validation: "time",
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "duration") {
                if (!W54.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "duration",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "ip") {
                if (!$54(A.data, Z.version)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "ip",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "jwt") {
                if (!w54(A.data, Z.alg)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "jwt",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "cidr") {
                if (!q54(A.data, Z.version)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "cidr",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "base64") {
                if (!C54.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "base64",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else if (Z.kind === "base64url") {
                if (!E54.test(A.data)) G = this._getOrReturnCtx(A, G), UB(G, {
                    validation: "base64url",
                    code: wQ.invalid_string,
                    message: Z.message
                }), B.dirty()
            } else d6.assertNever(Z);
            return {
                status: B.value,
                value: A.data
            }
        }
        _regex(A, Q, B) {
            return this.refinement((G) => A.test(G), {
                validation: Q,
                code: wQ.invalid_string,
                ...f2.errToObj(B)
            })
        }
        _addCheck(A) {
            return new $R({
                ...this._def,
                checks: [...this._def.checks, A]
            })
        }
        email(A) {
            return this._addCheck({
                kind: "email",
                ...f2.errToObj(A)
            })
        }
        url(A) {
            return this._addCheck({
                kind: "url",
                ...f2.errToObj(A)
            })
        }
        emoji(A) {
            return this._addCheck({
                kind: "emoji",
                ...f2.errToObj(A)
            })
        }
        uuid(A) {
            return this._addCheck({
                kind: "uuid",
                ...f2.errToObj(A)
            })
        }
        nanoid(A) {
            return this._addCheck({
                kind: "nanoid",
                ...f2.errToObj(A)
            })
        }
        cuid(A) {
            return this._addCheck({
                kind: "cuid",
                ...f2.errToObj(A)
            })
        }
        cuid2(A) {
            return this._addCheck({
                kind: "cuid2",
                ...f2.errToObj(A)
            })
        }
        ulid(A) {
            return this._addCheck({
                kind: "ulid",
                ...f2.errToObj(A)
            })
        }
        base64(A) {
            return this._addCheck({
                kind: "base64",
                ...f2.errToObj(A)
            })
        }
        base64url(A) {
            return this._addCheck({
                kind: "base64url",
                ...f2.errToObj(A)
            })
        }
        jwt(A) {
            return this._addCheck({
                kind: "jwt",
                ...f2.errToObj(A)
            })
        }
        ip(A) {
            return this._addCheck({
                kind: "ip",
                ...f2.errToObj(A)
            })
        }
        cidr(A) {
            return this._addCheck({
                kind: "cidr",
                ...f2.errToObj(A)
            })
        }
        datetime(A) {
            if (typeof A === "string") return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: !1,
                local: !1,
                message: A
            });
            return this._addCheck({
                kind: "datetime",
                precision: typeof A?.precision > "u" ? null : A?.precision,
                offset: A?.offset ?? !1,
                local: A?.local ?? !1,
                ...f2.errToObj(A?.message)
            })
        }
        date(A) {
            return this._addCheck({
                kind: "date",
                message: A
            })
        }
        time(A) {
            if (typeof A === "string") return this._addCheck({
                kind: "time",
                precision: null,
                message: A
            });
            return this._addCheck({
                kind: "time",
                precision: typeof A?.precision > "u" ? null : A?.precision,
                ...f2.errToObj(A?.message)
            })
        }
        duration(A) {
            return this._addCheck({
                kind: "duration",
                ...f2.errToObj(A)
            })
        }
        regex(A, Q) {
            return this._addCheck({
                kind: "regex",
                regex: A,
                ...f2.errToObj(Q)
            })
        }
        includes(A, Q) {
            return this._addCheck({
                kind: "includes",
                value: A,
                position: Q?.position,
                ...f2.errToObj(Q?.message)
            })
        }
        startsWith(A, Q) {
            return this._addCheck({
                kind: "startsWith",
                value: A,
                ...f2.errToObj(Q)
            })
        }
        endsWith(A, Q) {
            return this._addCheck({
                kind: "endsWith",
                value: A,
                ...f2.errToObj(Q)
            })
        }
        min(A, Q) {
            return this._addCheck({
                kind: "min",
                value: A,
                ...f2.errToObj(Q)
            })
        }
        max(A, Q) {
            return this._addCheck({
                kind: "max",
                value: A,
                ...f2.errToObj(Q)
            })
        }
        length(A, Q) {
            return this._addCheck({
                kind: "length",
                value: A,
                ...f2.errToObj(Q)
            })
        }
        nonempty(A) {
            return this.min(1, f2.errToObj(A))
        }
        trim() {
            return new $R({
                ...this._def,
                checks: [...this._def.checks, {
                    kind: "trim"
                }]
            })
        }
        toLowerCase() {
            return new $R({
                ...this._def,
                checks: [...this._def.checks, {
                    kind: "toLowerCase"
                }]
            })
        }
        toUpperCase() {
            return new $R({
                ...this._def,
                checks: [...this._def.checks, {
                    kind: "toUpperCase"
                }]
            })
        }
        get isDatetime() {
            return !!this._def.checks.find((A) => A.kind === "datetime")
        }
        get isDate() {
            return !!this._def.checks.find((A) => A.kind === "date")
        }
        get isTime() {
            return !!this._def.checks.find((A) => A.kind === "time")
        }
        get isDuration() {
            return !!this._def.checks.find((A) => A.kind === "duration")
        }
        get isEmail() {
            return !!this._def.checks.find((A) => A.kind === "email")
        }
        get isURL() {
            return !!this._def.checks.find((A) => A.kind === "url")
        }
        get isEmoji() {
            return !!this._def.checks.find((A) => A.kind === "emoji")
        }
        get isUUID() {
            return !!this._def.checks.find((A) => A.kind === "uuid")
        }
        get isNANOID() {
            return !!this._def.checks.find((A) => A.kind === "nanoid")
        }
        get isCUID() {
            return !!this._def.checks.find((A) => A.kind === "cuid")
        }
        get isCUID2() {
            return !!this._def.checks.find((A) => A.kind === "cuid2")
        }
        get isULID() {
            return !!this._def.checks.find((A) => A.kind === "ulid")
        }
        get isIP() {
            return !!this._def.checks.find((A) => A.kind === "ip")
        }
        get isCIDR() {
            return !!this._def.checks.find((A) => A.kind === "cidr")
        }
        get isBase64() {
            return !!this._def.checks.find((A) => A.kind === "base64")
        }
        get isBase64url() {
            return !!this._def.checks.find((A) => A.kind === "base64url")
        }
        get minLength() {
            let A = null;
            for (let Q of this._def.checks)
                if (Q.kind === "min") {
                    if (A === null || Q.value > A) A = Q.value
                } return A
        }
        get maxLength() {
            let A = null;
            for (let Q of this._def.checks)
                if (Q.kind === "max") {
                    if (A === null || Q.value < A) A = Q.value
                } return A
        }
    };
    $R.create = (A) => {
        return new $R({
            checks: [],
            typeName: OQ.ZodString,
            coerce: A?.coerce ?? !1,
            ...O8(A)
        })
    };
    Lm = class Lm extends Y6 {
        constructor() {
            super(...arguments);
            this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
        }
        _parse(A) {
            if (this._def.coerce) A.data = Number(A.data);
            if (this._getType(A) !== aQ.number) {
                let Z = this._getOrReturnCtx(A);
                return UB(Z, {
                    code: wQ.invalid_type,
                    expected: aQ.number,
                    received: Z.parsedType
                }), r9
            }
            let B = void 0,
                G = new fK;
            for (let Z of this._def.checks)
                if (Z.kind === "int") {
                    if (!d6.isInteger(A.data)) B = this._getOrReturnCtx(A, B), UB(B, {
                        code: wQ.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: Z.message
                    }), G.dirty()
                } else if (Z.kind === "min") {
                if (Z.inclusive ? A.data < Z.value : A.data <= Z.value) B = this._getOrReturnCtx(A, B), UB(B, {
                    code: wQ.too_small,
                    minimum: Z.value,
                    type: "number",
                    inclusive: Z.inclusive,
                    exact: !1,
                    message: Z.message
                }), G.dirty()
            } else if (Z.kind === "max") {
                if (Z.inclusive ? A.data > Z.value : A.data >= Z.value) B = this._getOrReturnCtx(A, B), UB(B, {
                    code: wQ.too_big,
                    maximum: Z.value,
                    type: "number",
                    inclusive: Z.inclusive,
                    exact: !1,
                    message: Z.message
                }), G.dirty()
            } else if (Z.kind === "multipleOf") {
                if (N54(A.data, Z.value) !== 0) B = this._getOrReturnCtx(A, B), UB(B, {
                    code: wQ.not_multiple_of,
                    multipleOf: Z.value,
                    message: Z.message
                }), G.dirty()
            } else if (Z.kind === "finite") {
                if (!Number.isFinite(A.data)) B = this._getOrReturnCtx(A, B), UB(B, {
                    code: wQ.not_finite,
                    message: Z.message
                }), G.dirty()
            } else d6.assertNever(Z);
            return {
                status: G.value,
                value: A.data
            }
        }
        gte(A, Q) {
            return this.setLimit("min", A, !0, f2.toString(Q))
        }
        gt(A, Q) {
            return this.setLimit("min", A, !1, f2.toString(Q))
        }
        lte(A, Q) {
            return this.setLimit("max", A, !0, f2.toString(Q))
        }
        lt(A, Q) {
            return this.setLimit("max", A, !1, f2.toString(Q))
        }
        setLimit(A, Q, B, G) {
            return new Lm({
                ...this._def,
                checks: [...this._def.checks, {
                    kind: A,
                    value: Q,
                    inclusive: B,
                    message: f2.toString(G)
                }]
            })
        }
        _addCheck(A) {
            return new Lm({
                ...this._def,
                checks: [...this._def.checks, A]
            })
        }
        int(A) {
            return this._addCheck({
                kind: "int",
                message: f2.toString(A)
            })
        }
        positive(A) {
            return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: !1,
                message: f2.toString(A)
            })
        }
        negative(A) {
            return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: !1,
                message: f2.toString(A)
            })
        }
        nonpositive(A) {
            return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: !0,
                message: f2.toString(A)
            })
        }
        nonnegative(A) {
            return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: !0,
                message: f2.toString(A)
            })
        }
        multipleOf(A, Q) {
            return this._addCheck({
                kind: "multipleOf",
                value: A,
                message: f2.toString(Q)
            })
        }
        finite(A) {
            return this._addCheck({
                kind: "finite",
                message: f2.toString(A)
            })
        }
        safe(A) {
            return this._addCheck({
                kind: "min",
                inclusive: !0,
                value: Number.MIN_SAFE_INTEGER,
                message: f2.toString(A)
            })._addCheck({
                kind: "max",
                inclusive: !0,
                value: Number.MAX_SAFE_INTEGER,
                message: f2.toString(A)
            })
        }
        get minValue() {
            let A = null;
            for (let Q of this._def.checks)
                if (Q.kind === "min") {
                    if (A === null || Q.value > A) A = Q.value
                } return A
        }
        get maxValue() {
            let A = null;
            for (let Q of this._def.checks)
                if (Q.kind === "max") {
                    if (A === null || Q.value < A) A = Q.value
                } return A
        }
        get isInt() {
            return !!this._def.checks.find((A) => A.kind === "int" || A.kind === "multipleOf" && d6.isInteger(A.value))
        }
        get isFinite() {
            let A = null,
                Q = null;
            for (let B of this._def.checks)
                if (B.kind === "finite" || B.kind === "int" || B.kind === "multipleOf") return !0;
                else if (B.kind === "min") {
                if (Q === null || B.value > Q) Q = B.value
            } else if (B.kind === "max") {
                if (A === null || B.value < A) A = B.value
            }
            return Number.isFinite(Q) && Number.isFinite(A)
        }
    };
    Lm.create = (A) => {
        return new Lm({
            checks: [],
            typeName: OQ.ZodNumber,
            coerce: A?.coerce || !1,
            ...O8(A)
        })
    };
    Mm = class Mm extends Y6 {
        constructor() {
            super(...arguments);
            this.min = this.gte, this.max = this.lte
        }
        _parse(A) {
            if (this._def.coerce) try {
                A.data = BigInt(A.data)
            } catch {
                return this._getInvalidInput(A)
            }
            if (this._getType(A) !== aQ.bigint) return this._getInvalidInput(A);
            let B = void 0,
                G = new fK;
            for (let Z of this._def.checks)
                if (Z.kind === "min") {
                    if (Z.inclusive ? A.data < Z.value : A.data <= Z.value) B = this._getOrReturnCtx(A, B), UB(B, {
                        code: wQ.too_small,
                        type: "bigint",
                        minimum: Z.value,
                        inclusive: Z.inclusive,
                        message: Z.message
                    }), G.dirty()
                } else if (Z.kind === "max") {
                if (Z.inclusive ? A.data > Z.value : A.data >= Z.value) B = this._getOrReturnCtx(A, B), UB(B, {
                    code: wQ.too_big,
                    type: "bigint",
                    maximum: Z.value,
                    inclusive: Z.inclusive,
                    message: Z.message
                }), G.dirty()
            } else if (Z.kind === "multipleOf") {
                if (A.data % Z.value !== BigInt(0)) B = this._getOrReturnCtx(A, B), UB(B, {
                    code: wQ.not_multiple_of,
                    multipleOf: Z.value,
                    message: Z.message
                }), G.dirty()
            } else d6.assertNever(Z);
            return {
                status: G.value,
                value: A.data
            }
        }
        _getInvalidInput(A) {
            let Q = this._getOrReturnCtx(A);