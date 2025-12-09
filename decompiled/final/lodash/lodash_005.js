/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: lodash_005.js
 * 处理时间: 2025-12-09T03:41:37.709Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: lodash
 * File: 5/5
 * Lines: 50816 - 52310 (1495 lines)
 * Original file: cli.js
 */

            return UB(Q, {
                code: wQ.invalid_type,
                expected: aQ.bigint,
                received: Q.parsedType
            }), r9
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
            return new Mm({
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
            return new Mm({
                ...this._def,
                checks: [...this._def.checks, A]
            })
        }
        positive(A) {
            return this._addCheck({
                kind: "min",
                value: BigInt(0),
                inclusive: !1,
                message: f2.toString(A)
            })
        }
        negative(A) {
            return this._addCheck({
                kind: "max",
                value: BigInt(0),
                inclusive: !1,
                message: f2.toString(A)
            })
        }
        nonpositive(A) {
            return this._addCheck({
                kind: "max",
                value: BigInt(0),
                inclusive: !0,
                message: f2.toString(A)
            })
        }
        nonnegative(A) {
            return this._addCheck({
                kind: "min",
                value: BigInt(0),
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
    };
    Mm.create = (A) => {
        return new Mm({
            checks: [],
            typeName: OQ.ZodBigInt,
            coerce: A?.coerce ?? !1,
            ...O8(A)
        })
    };
    f9A = class f9A extends Y6 {
        _parse(A) {
            if (this._def.coerce) A.data = Boolean(A.data);
            if (this._getType(A) !== aQ.boolean) {
                let B = this._getOrReturnCtx(A);
                return UB(B, {
                    code: wQ.invalid_type,
                    expected: aQ.boolean,
                    received: B.parsedType
                }), r9
            }
            return HH(A.data)
        }
    };
    f9A.create = (A) => {
        return new f9A({
            typeName: OQ.ZodBoolean,
            coerce: A?.coerce || !1,
            ...O8(A)
        })
    };
    ts = class ts extends Y6 {
        _parse(A) {
            if (this._def.coerce) A.data = new Date(A.data);
            if (this._getType(A) !== aQ.date) {
                let Z = this._getOrReturnCtx(A);
                return UB(Z, {
                    code: wQ.invalid_type,
                    expected: aQ.date,
                    received: Z.parsedType
                }), r9
            }
            if (Number.isNaN(A.data.getTime())) {
                let Z = this._getOrReturnCtx(A);
                return UB(Z, {
                    code: wQ.invalid_date
                }), r9
            }
            let B = new fK,
                G = void 0;
            for (let Z of this._def.checks)
                if (Z.kind === "min") {
                    if (A.data.getTime() < Z.value) G = this._getOrReturnCtx(A, G), UB(G, {
                        code: wQ.too_small,
                        message: Z.message,
                        inclusive: !0,
                        exact: !1,
                        minimum: Z.value,
                        type: "date"
                    }), B.dirty()
                } else if (Z.kind === "max") {
                if (A.data.getTime() > Z.value) G = this._getOrReturnCtx(A, G), UB(G, {
                    code: wQ.too_big,
                    message: Z.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: Z.value,
                    type: "date"
                }), B.dirty()
            } else d6.assertNever(Z);
            return {
                status: B.value,
                value: new Date(A.data.getTime())
            }
        }
        _addCheck(A) {
            return new ts({
                ...this._def,
                checks: [...this._def.checks, A]
            })
        }
        min(A, Q) {
            return this._addCheck({
                kind: "min",
                value: A.getTime(),
                message: f2.toString(Q)
            })
        }
        max(A, Q) {
            return this._addCheck({
                kind: "max",
                value: A.getTime(),
                message: f2.toString(Q)
            })
        }
        get minDate() {
            let A = null;
            for (let Q of this._def.checks)
                if (Q.kind === "min") {
                    if (A === null || Q.value > A) A = Q.value
                } return A != null ? new Date(A) : null
        }
        get maxDate() {
            let A = null;
            for (let Q of this._def.checks)
                if (Q.kind === "max") {
                    if (A === null || Q.value < A) A = Q.value
                } return A != null ? new Date(A) : null
        }
    };
    ts.create = (A) => {
        return new ts({
            checks: [],
            coerce: A?.coerce || !1,
            typeName: OQ.ZodDate,
            ...O8(A)
        })
    };
    LKA = class LKA extends Y6 {
        _parse(A) {
            if (this._getType(A) !== aQ.symbol) {
                let B = this._getOrReturnCtx(A);
                return UB(B, {
                    code: wQ.invalid_type,
                    expected: aQ.symbol,
                    received: B.parsedType
                }), r9
            }
            return HH(A.data)
        }
    };
    LKA.create = (A) => {
        return new LKA({
            typeName: OQ.ZodSymbol,
            ...O8(A)
        })
    };
    h9A = class h9A extends Y6 {
        _parse(A) {
            if (this._getType(A) !== aQ.undefined) {
                let B = this._getOrReturnCtx(A);
                return UB(B, {
                    code: wQ.invalid_type,
                    expected: aQ.undefined,
                    received: B.parsedType
                }), r9
            }
            return HH(A.data)
        }
    };
    h9A.create = (A) => {
        return new h9A({
            typeName: OQ.ZodUndefined,
            ...O8(A)
        })
    };
    g9A = class g9A extends Y6 {
        _parse(A) {
            if (this._getType(A) !== aQ.null) {
                let B = this._getOrReturnCtx(A);
                return UB(B, {
                    code: wQ.invalid_type,
                    expected: aQ.null,
                    received: B.parsedType
                }), r9
            }
            return HH(A.data)
        }
    };
    g9A.create = (A) => {
        return new g9A({
            typeName: OQ.ZodNull,
            ...O8(A)
        })
    };
    es = class es extends Y6 {
        constructor() {
            super(...arguments);
            this._any = !0
        }
        _parse(A) {
            return HH(A.data)
        }
    };
    es.create = (A) => {
        return new es({
            typeName: OQ.ZodAny,
            ...O8(A)
        })
    };
    Nm = class Nm extends Y6 {
        constructor() {
            super(...arguments);
            this._unknown = !0
        }
        _parse(A) {
            return HH(A.data)
        }
    };
    Nm.create = (A) => {
        return new Nm({
            typeName: OQ.ZodUnknown,
            ...O8(A)
        })
    };
    nj = class nj extends Y6 {
        _parse(A) {
            let Q = this._getOrReturnCtx(A);
            return UB(Q, {
                code: wQ.invalid_type,
                expected: aQ.never,
                received: Q.parsedType
            }), r9
        }
    };
    nj.create = (A) => {
        return new nj({
            typeName: OQ.ZodNever,
            ...O8(A)
        })
    };
    MKA = class MKA extends Y6 {
        _parse(A) {
            if (this._getType(A) !== aQ.undefined) {
                let B = this._getOrReturnCtx(A);
                return UB(B, {
                    code: wQ.invalid_type,
                    expected: aQ.void,
                    received: B.parsedType
                }), r9
            }
            return HH(A.data)
        }
    };
    MKA.create = (A) => {
        return new MKA({
            typeName: OQ.ZodVoid,
            ...O8(A)
        })
    };
    wR = class wR extends Y6 {
        _parse(A) {
            let {
                ctx: Q,
                status: B
            } = this._processInputParams(A), G = this._def;
            if (Q.parsedType !== aQ.array) return UB(Q, {
                code: wQ.invalid_type,
                expected: aQ.array,
                received: Q.parsedType
            }), r9;
            if (G.exactLength !== null) {
                let I = Q.data.length > G.exactLength.value,
                    Y = Q.data.length < G.exactLength.value;
                if (I || Y) UB(Q, {
                    code: I ? wQ.too_big : wQ.too_small,
                    minimum: Y ? G.exactLength.value : void 0,
                    maximum: I ? G.exactLength.value : void 0,
                    type: "array",
                    inclusive: !0,
                    exact: !0,
                    message: G.exactLength.message
                }), B.dirty()
            }
            if (G.minLength !== null) {
                if (Q.data.length < G.minLength.value) UB(Q, {
                    code: wQ.too_small,
                    minimum: G.minLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: G.minLength.message
                }), B.dirty()
            }
            if (G.maxLength !== null) {
                if (Q.data.length > G.maxLength.value) UB(Q, {
                    code: wQ.too_big,
                    maximum: G.maxLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: G.maxLength.message
                }), B.dirty()
            }
            if (Q.common.async) return Promise.all([...Q.data].map((I, Y) => {
                return G.type._parseAsync(new qR(Q, I, Q.path, Y))
            })).then((I) => {
                return fK.mergeArray(B, I)
            });
            let Z = [...Q.data].map((I, Y) => {
                return G.type._parseSync(new qR(Q, I, Q.path, Y))
            });
            return fK.mergeArray(B, Z)
        }
        get element() {
            return this._def.type
        }
        min(A, Q) {
            return new wR({
                ...this._def,
                minLength: {
                    value: A,
                    message: f2.toString(Q)
                }
            })
        }
        max(A, Q) {
            return new wR({
                ...this._def,
                maxLength: {
                    value: A,
                    message: f2.toString(Q)
                }
            })
        }
        length(A, Q) {
            return new wR({
                ...this._def,
                exactLength: {
                    value: A,
                    message: f2.toString(Q)
                }
            })
        }
        nonempty(A) {
            return this.min(1, A)
        }
    };
    wR.create = (A, Q) => {
        return new wR({
            type: A,
            minLength: null,
            maxLength: null,
            exactLength: null,
            typeName: OQ.ZodArray,
            ...O8(Q)
        })
    };
    SY = class SY extends Y6 {
        constructor() {
            super(...arguments);
            this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
        }
        _getCached() {
            if (this._cached !== null) return this._cached;
            let A = this._def.shape(),
                Q = d6.objectKeys(A);
            return this._cached = {
                shape: A,
                keys: Q
            }, this._cached
        }
        _parse(A) {
            if (this._getType(A) !== aQ.object) {
                let W = this._getOrReturnCtx(A);
                return UB(W, {
                    code: wQ.invalid_type,
                    expected: aQ.object,
                    received: W.parsedType
                }), r9
            }
            let {
                status: B,
                ctx: G
            } = this._processInputParams(A), {
                shape: Z,
                keys: I
            } = this._getCached(), Y = [];
            if (!(this._def.catchall instanceof nj && this._def.unknownKeys === "strip")) {
                for (let W in G.data)
                    if (!I.includes(W)) Y.push(W)
            }
            let J = [];
            for (let W of I) {
                let X = Z[W],
                    F = G.data[W];
                J.push({
                    key: {
                        status: "valid",
                        value: W
                    },
                    value: X._parse(new qR(G, F, G.path, W)),
                    alwaysSet: W in G.data
                })
            }
            if (this._def.catchall instanceof nj) {
                let W = this._def.unknownKeys;
                if (W === "passthrough")
                    for (let X of Y) J.push({
                        key: {
                            status: "valid",
                            value: X
                        },
                        value: {
                            status: "valid",
                            value: G.data[X]
                        }
                    });
                else if (W === "strict") {
                    if (Y.length > 0) UB(G, {
                        code: wQ.unrecognized_keys,
                        keys: Y
                    }), B.dirty()
                } else if (W === "strip");
                else throw Error("Internal ZodObject error: invalid unknownKeys value.")
            } else {
                let W = this._def.catchall;
                for (let X of Y) {
                    let F = G.data[X];
                    J.push({
                        key: {
                            status: "valid",
                            value: X
                        },
                        value: W._parse(new qR(G, F, G.path, X)),
                        alwaysSet: X in G.data
                    })
                }
            }
            if (G.common.async) return Promise.resolve().then(async () => {
                let W = [];
                for (let X of J) {
                    let F = await X.key,
                        V = await X.value;
                    W.push({
                        key: F,
                        value: V,
                        alwaysSet: X.alwaysSet
                    })
                }
                return W
            }).then((W) => {
                return fK.mergeObjectSync(B, W)
            });
            else return fK.mergeObjectSync(B, J)
        }
        get shape() {
            return this._def.shape()
        }
        strict(A) {
            return f2.errToObj, new SY({
                ...this._def,
                unknownKeys: "strict",
                ...A !== void 0 ? {
                    errorMap: (Q, B) => {
                        let G = this._def.errorMap?.(Q, B).message ?? B.defaultError;
                        if (Q.code === "unrecognized_keys") return {
                            message: f2.errToObj(A).message ?? G
                        };
                        return {
                            message: G
                        }
                    }
                } : {}
            })
        }
        strip() {
            return new SY({
                ...this._def,
                unknownKeys: "strip"
            })
        }
        passthrough() {
            return new SY({
                ...this._def,
                unknownKeys: "passthrough"
            })
        }
        extend(A) {
            return new SY({
                ...this._def,
                shape: () => ({
                    ...this._def.shape(),
                    ...A
                })
            })
        }
        merge(A) {
            return new SY({
                unknownKeys: A._def.unknownKeys,
                catchall: A._def.catchall,
                shape: () => ({
                    ...this._def.shape(),
                    ...A._def.shape()
                }),
                typeName: OQ.ZodObject
            })
        }
        setKey(A, Q) {
            return this.augment({
                [A]: Q
            })
        }
        catchall(A) {
            return new SY({
                ...this._def,
                catchall: A
            })
        }
        pick(A) {
            let Q = {};
            for (let B of d6.objectKeys(A))
                if (A[B] && this.shape[B]) Q[B] = this.shape[B];
            return new SY({
                ...this._def,
                shape: () => Q
            })
        }
        omit(A) {
            let Q = {};
            for (let B of d6.objectKeys(this.shape))
                if (!A[B]) Q[B] = this.shape[B];
            return new SY({
                ...this._def,
                shape: () => Q
            })
        }
        deepPartial() {
            return v9A(this)
        }
        partial(A) {
            let Q = {};
            for (let B of d6.objectKeys(this.shape)) {
                let G = this.shape[B];
                if (A && !A[B]) Q[B] = G;
                else Q[B] = G.optional()
            }
            return new SY({
                ...this._def,
                shape: () => Q
            })
        }
        required(A) {
            let Q = {};
            for (let B of d6.objectKeys(this.shape))
                if (A && !A[B]) Q[B] = this.shape[B];
                else {
                    let Z = this.shape[B];
                    while (Z instanceof e$) Z = Z._def.innerType;
                    Q[B] = Z
                } return new SY({
                ...this._def,
                shape: () => Q
            })
        }
        keyof() {
            return Yl0(d6.objectKeys(this.shape))
        }
    };
    SY.create = (A, Q) => {
        return new SY({
            shape: () => A,
            unknownKeys: "strip",
            catchall: nj.create(),
            typeName: OQ.ZodObject,
            ...O8(Q)
        })
    };
    SY.strictCreate = (A, Q) => {
        return new SY({
            shape: () => A,
            unknownKeys: "strict",
            catchall: nj.create(),
            typeName: OQ.ZodObject,
            ...O8(Q)
        })
    };
    SY.lazycreate = (A, Q) => {
        return new SY({
            shape: A,
            unknownKeys: "strip",
            catchall: nj.create(),
            typeName: OQ.ZodObject,
            ...O8(Q)
        })
    };
    u9A = class u9A extends Y6 {
        _parse(A) {
            let {
                ctx: Q
            } = this._processInputParams(A), B = this._def.options;

            function G(Z) {
                for (let Y of Z)
                    if (Y.result.status === "valid") return Y.result;
                for (let Y of Z)
                    if (Y.result.status === "dirty") return Q.common.issues.push(...Y.ctx.common.issues), Y.result;
                let I = Z.map((Y) => new gz(Y.ctx.common.issues));
                return UB(Q, {
                    code: wQ.invalid_union,
                    unionErrors: I
                }), r9
            }
            if (Q.common.async) return Promise.all(B.map(async (Z) => {
                let I = {
                    ...Q,
                    common: {
                        ...Q.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await Z._parseAsync({
                        data: Q.data,
                        path: Q.path,
                        parent: I
                    }),
                    ctx: I
                }
            })).then(G);
            else {
                let Z = void 0,
                    I = [];
                for (let J of B) {
                    let W = {
                            ...Q,
                            common: {
                                ...Q.common,
                                issues: []
                            },
                            parent: null
                        },
                        X = J._parseSync({
                            data: Q.data,
                            path: Q.path,
                            parent: W
                        });
                    if (X.status === "valid") return X;
                    else if (X.status === "dirty" && !Z) Z = {
                        result: X,
                        ctx: W
                    };
                    if (W.common.issues.length) I.push(W.common.issues)
                }
                if (Z) return Q.common.issues.push(...Z.ctx.common.issues), Z.result;
                let Y = I.map((J) => new gz(J));
                return UB(Q, {
                    code: wQ.invalid_union,
                    unionErrors: Y
                }), r9
            }
        }
        get options() {
            return this._def.options
        }
    };
    u9A.create = (A, Q) => {
        return new u9A({
            options: A,
            typeName: OQ.ZodUnion,
            ...O8(Q)
        })
    };
    BvA = class BvA extends Y6 {
        _parse(A) {
            let {
                ctx: Q
            } = this._processInputParams(A);
            if (Q.parsedType !== aQ.object) return UB(Q, {
                code: wQ.invalid_type,
                expected: aQ.object,
                received: Q.parsedType
            }), r9;
            let B = this.discriminator,
                G = Q.data[B],
                Z = this.optionsMap.get(G);
            if (!Z) return UB(Q, {
                code: wQ.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [B]
            }), r9;
            if (Q.common.async) return Z._parseAsync({
                data: Q.data,
                path: Q.path,
                parent: Q
            });
            else return Z._parseSync({
                data: Q.data,
                path: Q.path,
                parent: Q
            })
        }
        get discriminator() {
            return this._def.discriminator
        }
        get options() {
            return this._def.options
        }
        get optionsMap() {
            return this._def.optionsMap
        }
        static create(A, Q, B) {
            let G = new Map;
            for (let Z of Q) {
                let I = Gv(Z.shape[A]);
                if (!I.length) throw Error(`A discriminator value for key \`${A}\` could not be extracted from all schema options`);
                for (let Y of I) {
                    if (G.has(Y)) throw Error(`Discriminator property ${String(A)} has duplicate value ${String(Y)}`);
                    G.set(Y, Z)
                }
            }
            return new BvA({
                typeName: OQ.ZodDiscriminatedUnion,
                discriminator: A,
                options: Q,
                optionsMap: G,
                ...O8(B)
            })
        }
    };
    m9A = class m9A extends Y6 {
        _parse(A) {
            let {
                status: Q,
                ctx: B
            } = this._processInputParams(A), G = (Z, I) => {
                if (AvA(Z) || AvA(I)) return r9;
                let Y = RC1(Z.value, I.value);
                if (!Y.valid) return UB(B, {
                    code: wQ.invalid_intersection_types
                }), r9;
                if (QvA(Z) || QvA(I)) Q.dirty();
                return {
                    status: Q.value,
                    value: Y.data
                }
            };
            if (B.common.async) return Promise.all([this._def.left._parseAsync({
                data: B.data,
                path: B.path,
                parent: B
            }), this._def.right._parseAsync({
                data: B.data,
                path: B.path,
                parent: B
            })]).then(([Z, I]) => G(Z, I));
            else return G(this._def.left._parseSync({
                data: B.data,
                path: B.path,
                parent: B
            }), this._def.right._parseSync({
                data: B.data,
                path: B.path,
                parent: B
            }))
        }
    };
    m9A.create = (A, Q, B) => {
        return new m9A({
            left: A,
            right: Q,
            typeName: OQ.ZodIntersection,
            ...O8(B)
        })
    };
    aj = class aj extends Y6 {
        _parse(A) {
            let {
                status: Q,
                ctx: B
            } = this._processInputParams(A);
            if (B.parsedType !== aQ.array) return UB(B, {
                code: wQ.invalid_type,
                expected: aQ.array,
                received: B.parsedType
            }), r9;
            if (B.data.length < this._def.items.length) return UB(B, {
                code: wQ.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }), r9;
            if (!this._def.rest && B.data.length > this._def.items.length) UB(B, {
                code: wQ.too_big,
                maximum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }), Q.dirty();
            let Z = [...B.data].map((I, Y) => {
                let J = this._def.items[Y] || this._def.rest;
                if (!J) return null;
                return J._parse(new qR(B, I, B.path, Y))
            }).filter((I) => !!I);
            if (B.common.async) return Promise.all(Z).then((I) => {
                return fK.mergeArray(Q, I)
            });
            else return fK.mergeArray(Q, Z)
        }
        get items() {
            return this._def.items
        }
        rest(A) {
            return new aj({
                ...this._def,
                rest: A
            })
        }
    };
    aj.create = (A, Q) => {
        if (!Array.isArray(A)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
        return new aj({
            items: A,
            typeName: OQ.ZodTuple,
            rest: null,
            ...O8(Q)
        })
    };
    OKA = class OKA extends Y6 {
        get keySchema() {
            return this._def.keyType
        }
        get valueSchema() {
            return this._def.valueType
        }
        _parse(A) {
            let {
                status: Q,
                ctx: B
            } = this._processInputParams(A);
            if (B.parsedType !== aQ.object) return UB(B, {
                code: wQ.invalid_type,
                expected: aQ.object,
                received: B.parsedType
            }), r9;
            let G = [],
                Z = this._def.keyType,
                I = this._def.valueType;
            for (let Y in B.data) G.push({
                key: Z._parse(new qR(B, Y, B.path, Y)),
                value: I._parse(new qR(B, B.data[Y], B.path, Y)),
                alwaysSet: Y in B.data
            });
            if (B.common.async) return fK.mergeObjectAsync(Q, G);
            else return fK.mergeObjectSync(Q, G)
        }
        get element() {
            return this._def.valueType
        }
        static create(A, Q, B) {
            if (Q instanceof Y6) return new OKA({
                keyType: A,
                valueType: Q,
                typeName: OQ.ZodRecord,
                ...O8(B)
            });
            return new OKA({
                keyType: $R.create(),
                valueType: A,
                typeName: OQ.ZodRecord,
                ...O8(Q)
            })
        }
    };
    RKA = class RKA extends Y6 {
        get keySchema() {
            return this._def.keyType
        }
        get valueSchema() {
            return this._def.valueType
        }
        _parse(A) {
            let {
                status: Q,
                ctx: B
            } = this._processInputParams(A);
            if (B.parsedType !== aQ.map) return UB(B, {
                code: wQ.invalid_type,
                expected: aQ.map,
                received: B.parsedType
            }), r9;
            let G = this._def.keyType,
                Z = this._def.valueType,
                I = [...B.data.entries()].map(([Y, J], W) => {
                    return {
                        key: G._parse(new qR(B, Y, B.path, [W, "key"])),
                        value: Z._parse(new qR(B, J, B.path, [W, "value"]))
                    }
                });
            if (B.common.async) {
                let Y = new Map;
                return Promise.resolve().then(async () => {
                    for (let J of I) {
                        let W = await J.key,
                            X = await J.value;
                        if (W.status === "aborted" || X.status === "aborted") return r9;
                        if (W.status === "dirty" || X.status === "dirty") Q.dirty();
                        Y.set(W.value, X.value)
                    }
                    return {
                        status: Q.value,
                        value: Y
                    }
                })
            } else {
                let Y = new Map;
                for (let J of I) {
                    let {
                        key: W,
                        value: X
                    } = J;
                    if (W.status === "aborted" || X.status === "aborted") return r9;
                    if (W.status === "dirty" || X.status === "dirty") Q.dirty();
                    Y.set(W.value, X.value)
                }
                return {
                    status: Q.value,
                    value: Y
                }
            }
        }
    };
    RKA.create = (A, Q, B) => {
        return new RKA({
            valueType: Q,
            keyType: A,
            typeName: OQ.ZodMap,
            ...O8(B)
        })
    };
    Ar = class Ar extends Y6 {
        _parse(A) {
            let {
                status: Q,
                ctx: B
            } = this._processInputParams(A);
            if (B.parsedType !== aQ.set) return UB(B, {
                code: wQ.invalid_type,
                expected: aQ.set,
                received: B.parsedType
            }), r9;
            let G = this._def;
            if (G.minSize !== null) {
                if (B.data.size < G.minSize.value) UB(B, {
                    code: wQ.too_small,
                    minimum: G.minSize.value,
                    type: "set",
                    inclusive: !0,
                    exact: !1,
                    message: G.minSize.message
                }), Q.dirty()
            }
            if (G.maxSize !== null) {
                if (B.data.size > G.maxSize.value) UB(B, {
                    code: wQ.too_big,
                    maximum: G.maxSize.value,
                    type: "set",
                    inclusive: !0,
                    exact: !1,
                    message: G.maxSize.message
                }), Q.dirty()
            }
            let Z = this._def.valueType;

            function I(J) {
                let W = new Set;
                for (let X of J) {
                    if (X.status === "aborted") return r9;
                    if (X.status === "dirty") Q.dirty();
                    W.add(X.value)
                }
                return {
                    status: Q.value,
                    value: W
                }
            }
            let Y = [...B.data.values()].map((J, W) => Z._parse(new qR(B, J, B.path, W)));
            if (B.common.async) return Promise.all(Y).then((J) => I(J));
            else return I(Y)
        }
        min(A, Q) {
            return new Ar({
                ...this._def,
                minSize: {
                    value: A,
                    message: f2.toString(Q)
                }
            })
        }
        max(A, Q) {
            return new Ar({
                ...this._def,
                maxSize: {
                    value: A,
                    message: f2.toString(Q)
                }
            })
        }
        size(A, Q) {
            return this.min(A, Q).max(A, Q)
        }
        nonempty(A) {
            return this.min(1, A)
        }
    };
    Ar.create = (A, Q) => {
        return new Ar({
            valueType: A,
            minSize: null,
            maxSize: null,
            typeName: OQ.ZodSet,
            ...O8(Q)
        })
    };
    b9A = class b9A extends Y6 {
        constructor() {
            super(...arguments);
            this.validate = this.implement
        }
        _parse(A) {
            let {
                ctx: Q
            } = this._processInputParams(A);
            if (Q.parsedType !== aQ.function) return UB(Q, {
                code: wQ.invalid_type,
                expected: aQ.function,
                received: Q.parsedType
            }), r9;

            function B(Y, J) {
                return NKA({
                    data: Y,
                    path: Q.path,
                    errorMaps: [Q.common.contextualErrorMap, Q.schemaErrorMap, y9A(), Bv].filter((W) => !!W),
                    issueData: {
                        code: wQ.invalid_arguments,
                        argumentsError: J
                    }
                })
            }

            function G(Y, J) {
                return NKA({
                    data: Y,
                    path: Q.path,
                    errorMaps: [Q.common.contextualErrorMap, Q.schemaErrorMap, y9A(), Bv].filter((W) => !!W),
                    issueData: {
                        code: wQ.invalid_return_type,
                        returnTypeError: J
                    }
                })
            }
            let Z = {
                    errorMap: Q.common.contextualErrorMap
                },
                I = Q.data;
            if (this._def.returns instanceof Qr) {
                let Y = this;
                return HH(async function(...J) {
                    let W = new gz([]),
                        X = await Y._def.args.parseAsync(J, Z).catch((K) => {
                            throw W.addIssue(B(J, K)), W
                        }),
                        F = await Reflect.apply(I, this, X);
                    return await Y._def.returns._def.type.parseAsync(F, Z).catch((K) => {
                        throw W.addIssue(G(F, K)), W
                    })
                })
            } else {
                let Y = this;
                return HH(function(...J) {
                    let W = Y._def.args.safeParse(J, Z);
                    if (!W.success) throw new gz([B(J, W.error)]);
                    let X = Reflect.apply(I, this, W.data),
                        F = Y._def.returns.safeParse(X, Z);
                    if (!F.success) throw new gz([G(X, F.error)]);
                    return F.data
                })
            }
        }
        parameters() {
            return this._def.args
        }
        returnType() {
            return this._def.returns
        }
        args(...A) {
            return new b9A({
                ...this._def,
                args: aj.create(A).rest(Nm.create())
            })
        }
        returns(A) {
            return new b9A({
                ...this._def,
                returns: A
            })
        }
        implement(A) {
            return this.parse(A)
        }
        strictImplement(A) {
            return this.parse(A)
        }
        static create(A, Q, B) {
            return new b9A({
                args: A ? A : aj.create([]).rest(Nm.create()),
                returns: Q || Nm.create(),
                typeName: OQ.ZodFunction,
                ...O8(B)
            })
        }
    };
    d9A = class d9A extends Y6 {
        get schema() {
            return this._def.getter()
        }
        _parse(A) {
            let {
                ctx: Q
            } = this._processInputParams(A);
            return this._def.getter()._parse({
                data: Q.data,
                path: Q.path,
                parent: Q
            })
        }
    };
    d9A.create = (A, Q) => {
        return new d9A({
            getter: A,
            typeName: OQ.ZodLazy,
            ...O8(Q)
        })
    };
    c9A = class c9A extends Y6 {
        _parse(A) {
            if (A.data !== this._def.value) {
                let Q = this._getOrReturnCtx(A);
                return UB(Q, {
                    received: Q.data,
                    code: wQ.invalid_literal,
                    expected: this._def.value
                }), r9
            }
            return {
                status: "valid",
                value: A.data
            }
        }
        get value() {
            return this._def.value
        }
    };
    c9A.create = (A, Q) => {
        return new c9A({
            value: A,
            typeName: OQ.ZodLiteral,
            ...O8(Q)
        })
    };
    Om = class Om extends Y6 {
        _parse(A) {
            if (typeof A.data !== "string") {
                let Q = this._getOrReturnCtx(A),
                    B = this._def.values;
                return UB(Q, {
                    expected: d6.joinValues(B),
                    received: Q.parsedType,
                    code: wQ.invalid_type
                }), r9
            }
            if (!this._cache) this._cache = new Set(this._def.values);
            if (!this._cache.has(A.data)) {
                let Q = this._getOrReturnCtx(A),
                    B = this._def.values;
                return UB(Q, {
                    received: Q.data,
                    code: wQ.invalid_enum_value,
                    options: B
                }), r9
            }
            return HH(A.data)
        }
        get options() {
            return this._def.values
        }
        get enum() {
            let A = {};
            for (let Q of this._def.values) A[Q] = Q;
            return A
        }
        get Values() {
            let A = {};
            for (let Q of this._def.values) A[Q] = Q;
            return A
        }
        get Enum() {
            let A = {};
            for (let Q of this._def.values) A[Q] = Q;
            return A
        }
        extract(A, Q = this._def) {
            return Om.create(A, {
                ...this._def,
                ...Q
            })
        }
        exclude(A, Q = this._def) {
            return Om.create(this.options.filter((B) => !A.includes(B)), {
                ...this._def,
                ...Q
            })
        }
    };
    Om.create = Yl0;
    p9A = class p9A extends Y6 {
        _parse(A) {
            let Q = d6.getValidEnumValues(this._def.values),
                B = this._getOrReturnCtx(A);
            if (B.parsedType !== aQ.string && B.parsedType !== aQ.number) {
                let G = d6.objectValues(Q);
                return UB(B, {
                    expected: d6.joinValues(G),
                    received: B.parsedType,
                    code: wQ.invalid_type
                }), r9
            }
            if (!this._cache) this._cache = new Set(d6.getValidEnumValues(this._def.values));
            if (!this._cache.has(A.data)) {
                let G = d6.objectValues(Q);
                return UB(B, {
                    received: B.data,
                    code: wQ.invalid_enum_value,
                    options: G
                }), r9
            }
            return HH(A.data)
        }
        get enum() {
            return this._def.values
        }
    };
    p9A.create = (A, Q) => {
        return new p9A({
            values: A,
            typeName: OQ.ZodNativeEnum,
            ...O8(Q)
        })
    };
    Qr = class Qr extends Y6 {
        unwrap() {
            return this._def.type
        }
        _parse(A) {
            let {
                ctx: Q
            } = this._processInputParams(A);
            if (Q.parsedType !== aQ.promise && Q.common.async === !1) return UB(Q, {
                code: wQ.invalid_type,
                expected: aQ.promise,
                received: Q.parsedType
            }), r9;
            let B = Q.parsedType === aQ.promise ? Q.data : Promise.resolve(Q.data);
            return HH(B.then((G) => {
                return this._def.type.parseAsync(G, {
                    path: Q.path,
                    errorMap: Q.common.contextualErrorMap
                })
            }))
        }
    };
    Qr.create = (A, Q) => {
        return new Qr({
            type: A,
            typeName: OQ.ZodPromise,
            ...O8(Q)
        })
    };
    NR = class NR extends Y6 {
        innerType() {
            return this._def.schema
        }
        sourceType() {
            return this._def.schema._def.typeName === OQ.ZodEffects ? this._def.schema.sourceType() : this._def.schema
        }
        _parse(A) {
            let {
                status: Q,
                ctx: B
            } = this._processInputParams(A), G = this._def.effect || null, Z = {
                addIssue: (I) => {
                    if (UB(B, I), I.fatal) Q.abort();
                    else Q.dirty()
                },
                get path() {
                    return B.path
                }
            };
            if (Z.addIssue = Z.addIssue.bind(Z), G.type === "preprocess") {
                let I = G.transform(B.data, Z);
                if (B.common.async) return Promise.resolve(I).then(async (Y) => {
                    if (Q.value === "aborted") return r9;
                    let J = await this._def.schema._parseAsync({
                        data: Y,
                        path: B.path,
                        parent: B
                    });
                    if (J.status === "aborted") return r9;
                    if (J.status === "dirty") return os(J.value);
                    if (Q.value === "dirty") return os(J.value);
                    return J
                });
                else {
                    if (Q.value === "aborted") return r9;
                    let Y = this._def.schema._parseSync({
                        data: I,
                        path: B.path,
                        parent: B
                    });
                    if (Y.status === "aborted") return r9;
                    if (Y.status === "dirty") return os(Y.value);
                    if (Q.value === "dirty") return os(Y.value);
                    return Y
                }
            }
            if (G.type === "refinement") {
                let I = (Y) => {
                    let J = G.refinement(Y, Z);
                    if (B.common.async) return Promise.resolve(J);
                    if (J instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                    return Y
                };
                if (B.common.async === !1) {
                    let Y = this._def.schema._parseSync({
                        data: B.data,
                        path: B.path,
                        parent: B
                    });
                    if (Y.status === "aborted") return r9;
                    if (Y.status === "dirty") Q.dirty();
                    return I(Y.value), {
                        status: Q.value,
                        value: Y.value
                    }
                } else return this._def.schema._parseAsync({
                    data: B.data,
                    path: B.path,
                    parent: B
                }).then((Y) => {
                    if (Y.status === "aborted") return r9;
                    if (Y.status === "dirty") Q.dirty();
                    return I(Y.value).then(() => {
                        return {
                            status: Q.value,
                            value: Y.value
                        }
                    })
                })
            }
            if (G.type === "transform")
                if (B.common.async === !1) {
                    let I = this._def.schema._parseSync({
                        data: B.data,
                        path: B.path,
                        parent: B
                    });
                    if (!qm(I)) return r9;
                    let Y = G.transform(I.value, Z);
                    if (Y instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                    return {
                        status: Q.value,
                        value: Y
                    }
                } else return this._def.schema._parseAsync({
                    data: B.data,
                    path: B.path,
                    parent: B
                }).then((I) => {
                    if (!qm(I)) return r9;
                    return Promise.resolve(G.transform(I.value, Z)).then((Y) => ({
                        status: Q.value,
                        value: Y
                    }))
                });
            d6.assertNever(G)
        }
    };
    NR.create = (A, Q, B) => {
        return new NR({
            schema: A,
            typeName: OQ.ZodEffects,
            effect: Q,
            ...O8(B)
        })
    };
    NR.createWithPreprocess = (A, Q, B) => {
        return new NR({
            schema: Q,
            effect: {
                type: "preprocess",
                transform: A
            },
            typeName: OQ.ZodEffects,
            ...O8(B)
        })
    };
    e$ = class e$ extends Y6 {
        _parse(A) {
            if (this._getType(A) === aQ.undefined) return HH(void 0);
            return this._def.innerType._parse(A)
        }
        unwrap() {
            return this._def.innerType
        }
    };